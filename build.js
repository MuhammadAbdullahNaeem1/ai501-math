// Static site builder: content/*.md  ->  _site/*.html
// Markdown via marked, maths via KaTeX (rendered at build time), ::: containers for callouts.
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const katex = require('katex');

const ROOT = __dirname;
const OUT = path.join(ROOT, '_site');

// ---------------------------------------------------------------- navigation
const site = require('./site.json');

function flatPages(nav, parent = null, acc = []) {
  for (const item of nav) {
    if (item.file) acc.push({ ...item, parent });
    if (item.children) flatPages(item.children, item, acc);
  }
  return acc;
}
const pages = flatPages(site.nav);

// ---------------------------------------------------------------- markdown helpers
function slugify(s) {
  return s.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function renderMath(tex, display) {
  try {
    return katex.renderToString(tex, { displayMode: display, throwOnError: false, strict: false, trust: true,
      macros: { '\\R': '\\mathbb{R}', '\\bm': '\\boldsymbol{#1}', '\\T': '^{\\top}' } });
  } catch (e) {
    return `<code class="math-error">${tex}</code>`;
  }
}

// Replace maths and code with placeholders so marked does not touch them.
function protect(src, store) {
  // fenced code
  src = src.replace(/```[\s\S]*?```/g, m => { store.push({ raw: m }); return `\uE000${store.length - 1}\uE000`; });
  // display math $$...$$
  src = src.replace(/\$\$([\s\S]+?)\$\$/g, (m, t) => { store.push({ html: renderMath(t.trim(), true) }); return `\uE000${store.length - 1}\uE000`; });
  // inline code
  src = src.replace(/`[^`\n]+`/g, m => { store.push({ raw: m }); return `\uE000${store.length - 1}\uE000`; });
  // inline math $...$ (not $$, not escaped \$)
  src = src.replace(/(^|[^\\$])\$([^\s$](?:[^$\n]*?[^\s\\$])?)\$(?!\d)/g, (m, pre, t) => {
    store.push({ html: renderMath(t, false) }); return `${pre}\uE000${store.length - 1}\uE000`;
  });
  return src.replace(/\\\$/g, '$');
}

function restore(html, store) {
  // raw items go back through marked inline (code) - simplest: restore raw then let marked handle
  return html.replace(/\uE000(\d+)\uE000/g, (m, i) => store[+i].html !== undefined ? store[+i].html : store[+i].raw);
}

const LABELS = {
  def: 'Definition', thm: 'Theorem / Key result', example: 'Worked example', warn: 'Common trap',
  ml: 'Where this shows up in AI', remember: 'Remember', note: 'Note', exam: 'Exam pattern',
  check: 'Check yourself', proof: 'Derivation', intuition: 'Intuition', slide: 'From the slides',
};

// Parse ::: containers (nestable) into HTML, rendering inner markdown recursively.
function renderBlocks(src, store) {
  const lines = src.split('\n');
  const out = [];
  let buf = [];
  const stack = [];
  const flush = () => { if (buf.length) { out.push({ md: buf.join('\n') }); buf = []; } };
  // build a tree
  const root = { children: [] };
  let cur = root;
  for (const line of lines) {
    const open = line.match(/^:::\s*([a-z]+)\s*(.*)$/);
    if (open && open[1]) {
      cur.children.push({ md: buf.join('\n') }); buf = [];
      const node = { type: open[1], title: open[2].trim(), children: [], parent: cur };
      cur.children.push(node); cur = node;
    } else if (/^:::\s*$/.test(line) && cur !== root) {
      cur.children.push({ md: buf.join('\n') }); buf = [];
      cur = cur.parent;
    } else buf.push(line);
  }
  cur.children.push({ md: buf.join('\n') });
  const emit = node => node.children.map(c => {
    if (c.md !== undefined) return c.md.trim() ? restore(marked.parse(c.md), store) : '';
    const inner = emit(c);
    const title = c.title ? restore(marked.parseInline(c.title), store) : '';
    if (c.type === 'solution' || c.type === 'answer' || c.type === 'hint') {
      const lab = { solution: 'Solution & marking', answer: 'Answer', hint: 'Hint' }[c.type];
      return `<details class="solution ${c.type}"><summary>${title || lab}</summary><div class="sol-body">${inner}</div></details>`;
    }
    if (c.type === 'question') {
      return `<section class="question"><div class="q-head">${title}</div>${inner}</section>`;
    }
    const lab = LABELS[c.type] || c.type;
    return `<div class="callout ${c.type}"><div class="callout-title">${lab}${title ? ': ' + title : ''}</div>${inner}</div>`;
  }).join('\n');
  return emit(root);
}

function mdToHtml(src) {
  const store = [];
  src = protect(src, store);
  // raw code placeholders must be parsed by marked as code: restore them before block parse
  src = src.replace(/\uE000(\d+)\uE000/g, (m, i) => store[+i].raw !== undefined ? store[+i].raw : m);
  let html = renderBlocks(src, store);
  // headings ids
  const toc = [];
  html = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (m, lvl, inner) => {
    const id = slugify(inner.replace(/<span class="katex[\s\S]*?<\/span>\s*<\/span>\s*<\/span>/g, '')) || 'sec';
    let uid = id, k = 2; while (toc.find(t => t.id === uid)) uid = id + '-' + k++;
    toc.push({ lvl: +lvl, id: uid, text: inner });
    return `<h${lvl} id="${uid}"><a class="anchor" href="#${uid}">#</a>${inner}</h${lvl}>`;
  });
  return { html, toc };
}

// ---------------------------------------------------------------- template
function navHtml(current) {
  const item = it => {
    if (it.children) {
      const open = it.children.some(c => c.id === current.id) || it.id === current.id;
      const head = it.file ? `<a href="${it.id}.html" class="${it.id === current.id ? 'active' : ''}">${it.title}</a>` : `<span>${it.title}</span>`;
      return `<details class="group" ${open ? 'open' : ''}><summary>${head}</summary><div class="kids">${it.children.map(item).join('')}</div></details>`;
    }
    if (it.section) return `<div class="nav-section">${it.section}</div>`;
    return `<a href="${it.id}.html" class="${it.id === current.id ? 'active' : ''}">${it.title}</a>`;
  };
  return site.nav.map(item).join('\n');
}

function page(p, body, toc) {
  const idx = pages.findIndex(x => x.id === p.id);
  const prev = pages[idx - 1], next = pages[idx + 1];
  const tocHtml = p.toc !== false && toc.filter(t => t.lvl === 2).length > 2
    ? `<nav class="toc"><div class="toc-title">On this page</div><ol>${toc.filter(t => t.lvl === 2).map(t => `<li><a href="#${t.id}">${t.text}</a></li>`).join('')}</ol></nav>` : '';
  const isQuiz = /quiz|mid|mock/i.test(p.id);
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${p.title.replace(/<[^>]+>/g, '')} · ${site.short}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
<link rel="stylesheet" href="assets/style.css">
</head><body>
<button class="menu-btn" aria-label="Menu" onclick="document.body.classList.toggle('nav-open')">☰</button>
<aside class="sidebar">
  <a class="brand" href="index.html"><strong>${site.short}</strong><span>${site.subtitle}</span></a>
  <nav class="nav">${navHtml(p)}</nav>
</aside>
<main class="content">
  <article>
    ${p.parent && p.parent.title ? `<div class="crumb">${p.parent.title}</div>` : ''}
    ${isQuiz ? `<div class="quiz-tools"><button onclick="document.querySelectorAll('details.solution').forEach(d=>d.open=true)">Show all solutions</button><button onclick="document.querySelectorAll('details.solution').forEach(d=>d.open=false)">Hide all</button><button onclick="window.print()">Print</button></div>` : ''}
    ${body.includes('<h2') ? body.replace(/<h2/, tocHtml + '<h2') : body}
  </article>
  <footer class="pager">
    ${prev ? `<a class="prev" href="${prev.id}.html"><small>Previous</small>${prev.title}</a>` : '<span></span>'}
    ${next ? `<a class="next" href="${next.id}.html"><small>Next</small>${next.title}</a>` : '<span></span>'}
  </footer>
</main>
</body></html>`;
}

// ---------------------------------------------------------------- build
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'assets'), { recursive: true });
fs.copyFileSync(path.join(ROOT, 'assets/style.css'), path.join(OUT, 'assets/style.css'));
fs.cpSync(path.join(ROOT, 'pdfs'), path.join(OUT, 'pdfs'), { recursive: true });
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

let n = 0;
for (const p of pages) {
  const file = path.join(ROOT, 'content', p.file);
  if (!fs.existsSync(file)) { console.warn('missing', p.file); continue; }
  let src = fs.readFileSync(file, 'utf8');
  // automatic TOC marker after the first h1 if not present
  const { html, toc } = mdToHtml(src);
  fs.writeFileSync(path.join(OUT, p.id + '.html'), page(p, html, toc));
  n++;
}
console.log(`built ${n} pages -> _site/`);

(function () {
  var root = document.documentElement;

  // ---- theme: auto (system) until the user picks; choice persists
  function systemDark() { return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches; }
  function current() { return root.dataset.theme || (systemDark() ? 'dark' : 'light'); }
  function setTheme(t) {
    root.dataset.theme = t;
    try { localStorage.setItem('theme', t); } catch (e) {}
    var meta = document.querySelectorAll('meta[name="theme-color"]');
    meta.forEach(function (m) { m.setAttribute('content', t === 'dark' ? '#16161a' : '#fbfbfa'); });
  }
  document.querySelectorAll('.themebtn').forEach(function (b) {
    b.addEventListener('click', function () { setTheme(current() === 'dark' ? 'light' : 'dark'); });
  });

  // ---- mobile drawer
  var side = document.getElementById('side'), scrim = document.getElementById('scrim'), btn = document.getElementById('menuBtn');
  function drawer(open) {
    document.body.classList.toggle('nav-open', open);
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (btn) btn.addEventListener('click', function () { drawer(!document.body.classList.contains('nav-open')); });
  if (scrim) scrim.addEventListener('click', function () { drawer(false); });
  if (side) side.addEventListener('click', function (e) { if (e.target.closest('a') && innerWidth <= 1020) drawer(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { drawer(false); closeLb(); } });

  // keep the active nav item visible in the sidebar
  var on = side && side.querySelector('nav a.on');
  if (on && on.scrollIntoView) on.scrollIntoView({ block: 'center' });

  // ---- "On this page" scroll-spy
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  var targets = links.map(function (a) { return document.getElementById(decodeURIComponent(a.hash.slice(1))); });
  if (links.length && 'IntersectionObserver' in window) {
    var visible = new Set();
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { en.isIntersecting ? visible.add(en.target) : visible.delete(en.target); });
      var idx = -1;
      targets.forEach(function (t, i) { if (t && t.getBoundingClientRect().top < innerHeight * 0.35) idx = i; });
      links.forEach(function (a, i) { a.classList.toggle('on', i === idx); });
    }, { rootMargin: '0px 0px -60% 0px' });
    targets.forEach(function (t) { if (t) io.observe(t); });
  }

  // ---- show / hide all solutions
  document.querySelectorAll('[data-sol]').forEach(function (b) {
    b.addEventListener('click', function () {
      var open = b.dataset.sol === 'open';
      document.querySelectorAll('details.solution').forEach(function (d) { d.open = open; });
    });
  });

  // ---- figure lightbox
  var lb = document.getElementById('lightbox');
  function closeLb() { if (lb && !lb.hidden) { lb.hidden = true; document.body.classList.remove('lb-open'); } }
  document.addEventListener('click', function (e) {
    var z = e.target.closest('a.zoom');
    if (z && lb) {
      e.preventDefault();
      lb.querySelector('img').src = z.getAttribute('href');
      lb.querySelector('img').alt = (z.querySelector('img') || {}).alt || '';
      lb.hidden = false; document.body.classList.add('lb-open');
    } else if (lb && !lb.hidden && (e.target === lb || e.target.closest('.lb-close') || e.target.tagName === 'IMG')) closeLb();
  });
})();

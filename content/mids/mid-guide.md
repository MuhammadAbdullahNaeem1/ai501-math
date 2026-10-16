# Mid guide & formula sheet

**Mid exam: Sunday 18 October 2026, 9 am – 12 pm, SDSB-B3 (official instructions).** Closed book; **two hand-written, two-sided A4 sheets** and a calculator allowed. **Part I: 30 MCQs × 3 pts = 90 pts (40%), 60 min**, select ALL (up to three) correct, −1 per wrong tick, no question below zero. **Part II: 7 problems, 30 pts (60%), 120 min**, show working. Be fluent at **inverting a 2×2 by hand** and **finding eigenvectors of a symmetric matrix once its eigenvalues are given**. No rigorous proofs or tedious steps; the **Hessian is not examined** (Week 10). Mock Mid 4 follows this exact format (Mocks 1–3 use the older 20-MCQ / 8-problem format) — and the [cheat sheet](cheatsheet.html) is a 4-side template for your two sheets. Covers everything so far: L00–L06 (vectors → eigenvalue decomposition). Weight: mid + mid viva = 30%.

<div class="pdf-links">
<a href="mid-mock-1.html">Mock Mid 1</a>
<a href="mid-mock-2.html">Mock Mid 2</a>
<a href="mid-mock-3.html">Mock Mid 3</a>
<a href="mid-mock-4.html">Mock Mid 4 (official format)</a>
<a href="cheatsheet.html">Cheat sheet (4 sides)</a>
<a href="pdfs/past/Mid-2025-Part1.pdf">2025 Mid Part I</a>
<a href="pdfs/past/Mid-2025-Part2.pdf">2025 Mid Part II (solved)</a>
<a href="pdfs/past/Mid-2024-Part1.pdf">2024 Mid Part I</a>
<a href="pdfs/past/Mid-2024-Part2.pdf">2024 Mid Part II (solved)</a>
</div>

## 1. What past mids look like

**Part I** (2024: 25 MCQs, 2025: 25 MCQs, 90 points): *"Select ALL (up to three) correct choices. Every incorrect answer earns a penalty of 1 point, but no question goes below zero."* So: tick only what you can justify; a wrong tick costs as much as a right one earns.

**Part II** (2024: 10 problems / 70 pts, attempt 60; 2025: 10 problems / 30 pts, attempt all). Problems that appeared:

| Topic | 2024 | 2025 | 2026 relevance |
|---|---|---|---|
| Low-rank (SVD) storage saving | P1 (6) | P1 (3) | outline Week 6 — insurance |
| Dimensions of matrix expressions | P2 (4) | P2 (2) | **L02 — certain** |
| Orthogonal matrix proofs ($Q^{-1}=Q^\top$, norm preserved) | P3 (6) | — | **L02** |
| Gram–Schmidt (3 vectors with dependence / 2 vectors) | P4 (8) | P3 (3) | **L01 — certain** |
| Inventory value $c^\top q$ | — | P4 (2) | **L01** |
| kNN by hand with tie rule | — | P5 (3) | **L04 — certain** |
| Rank–nullity, solvability | — | P6 (2) | **L03 — certain** |
| Ridge: derive + compute + effect of λ | — | P7 (5) | **L05 — certain** |
| Lasso vs ridge, sparsity | P5 (6) | — | **L05** |
| GS order dependence; orthonormal-span test | P6, P7 | — | L01 |
| Projection onto span (orthogonal basis) | P8 (6) | — | L01/L05 |
| Multicollinearity + pseudo-inverse | P9 (10) | — | **L03/L05** |
| EVD of symmetric $2\times2$, $C^2$ | — | P8 (5) | **L06 — certain** |
| SVD geometry / clue puzzle | P10 (16) | P9, P10 | insurance |

## 2. Coverage checklist (tick when you can do it without notes)

**L01 Vectors** — linear/affine/convex/conic combos and their geometry · inner product rules and uses ($\mathbf 1^\top x$, indicator vectors, $c^\top q$) · $\ell_1,\ell_2,\ell_\infty$ norms and unit balls · norm axioms · expand $\|u\pm v\|^2$ · Cauchy–Schwarz · distance, RMSE, MAE · angle, cosine similarity · projection onto a vector · avg, rms, std, $\text{rms}^2=\text{avg}^2+\text{std}^2$ · correlation = cosine of centred vectors · standardisation · bias/variance words · span, independence, basis, dimension, independence–dimension inequality · orthonormal coefficients $c_i=q_i^\top x$ · **Gram–Schmidt** (and detecting dependence, order matters) · vector-space axioms, subspace test, examples.

**L02 Matrices** — special matrices · transpose rules · $A=S+K$ · Frobenius norm · trace (cyclic, linear, $\|A\|_F^2=\operatorname{tr}A^\top A$) · $Ax$ three ways · applications ($Ap$, $A^\top w$) · permutation matrices · $AB$ rules, dimensions, not commutative, $(AB)^\top=B^\top A^\top$ · outer product (rank 1) · Gram matrix (symmetric, invertible iff independent columns — proof) · under/over-determined systems · **left inverse** (tall, independent columns, ≤1 solution) · **right inverse** (wide, independent rows, ≥1 solution) · inverse unique; $X=X(AY)=(XA)Y=Y$ · square equivalences · diagonal/Vandermonde/orthogonal inverses · orthogonal preserves norm, distance, angle · determinant facts · pseudo-inverses $(A^\top A)^{-1}A^\top$ and $A^\top(AA^\top)^{-1}$.

**L03 Rank** — row rank = column rank, $\le\min(m,n)$ · $\operatorname{rank}(AB)\le\min$ · REF/RREF elimination in matrix form · column space basis = pivot columns of $A$ · null space via special solutions · **rank–nullity** · solvability via zero rows of $[A|b]$ · complete solution $x_p+x_n$ · the four rank cases.

**L04 Supervised learning & kNN** — regression vs classification vs neither · losses (0/1, MSE, RMSE, MAE; mean vs median) · memoriser, overfitting · train/val/test roles, test once · CV · kNN algorithm, odd $k$, ties, Hamming, normalisation, choosing $k$, bias/variance in $k$, $O(dn)$ · curse of dimensionality · confusion matrix (rows predicted, columns actual) · accuracy, error, recall/TPR, specificity, FPR, precision, NPV · which metric for disease vs fraud · ROC, AUC (ranking meaning) · $F_\beta$, $F_1=2TP/(2TP+FP+FN)$, HM ≤ GM ≤ AM · MCC.

**L05 Regression** — $y=f(x)+n$ · modular recipe · design matrix · LSE/MSE/RMSE one minimiser · gradient rules · **normal equations by calculus and by projection** · invertibility conditions · residuals sum to 0 · polynomial = linear in parameters · Bishop $M=0,1,3,9$ story · three remedies · **ridge closed form + derivation** · λ effects · lasso, diamond, sparsity, soft thresholding · elastic net · choosing λ.

**L06 EVD** — $Aq=\lambda q$ · characteristic polynomial · $2\times2$ shortcut · eigenspace = $\mathcal N(A-\lambda I)$ · $A=Q\Lambda Q^{-1}$ · change-basis/scale/change-back · $\det=\prod\lambda$, $\operatorname{tr}=\sum\lambda$ · inverse and powers · $f(A)$ eigenvalues · zero eigenvalue ⇔ dependent columns · spectral theorem $A=Q\Lambda Q^\top$.

**Insurance (last year's mid, outline Week 6)** — PSD ⇔ eigenvalues ≥ 0 ⇔ $x^\top Ax\ge0$ ⇔ $B^\top B$ · SVD $U\Sigma V^\top$, $\sigma_i=\sqrt{\lambda_i(A^\top A)}$ · rank-$k$ storage $mk+k+kn$ · Eckart–Young.

## 3. Formula sheet

| | |
|---|---|
| inner product | $u^\top v=\sum u_iv_i=\|u\|\|v\|\cos\theta$ |
| norms | $\|x\|_1=\sum|x_i|$, $\|x\|_2=\sqrt{x^\top x}$, $\|x\|_\infty=\max|x_i|$; $\|x\|_\infty\le\|x\|_2\le\|x\|_1$ |
| expansion | $\|u\pm v\|^2=\|u\|^2\pm2u^\top v+\|v\|^2$ |
| projection | $\operatorname{proj}_ux=\frac{u^\top x}{u^\top u}u$ |
| statistics | $\bar x=\frac{\mathbf 1^\top x}n$, $\text{std}=\frac{\|x-\bar x\mathbf 1\|}{\sqrt n}$, $\rho=\frac{\tilde a^\top\tilde b}{\|\tilde a\|\|\tilde b\|}$ |
| Gram–Schmidt | $\tilde q_i=a_i-\sum_{j<i}(q_j^\top a_i)q_j$, $q_i=\tilde q_i/\|\tilde q_i\|$ |
| sym/skew | $S=\frac{A+A^\top}2$, $K=\frac{A-A^\top}2$ |
| Frobenius/trace | $\|A\|_F^2=\sum A_{ij}^2=\operatorname{tr}(A^\top A)$; $\operatorname{tr}(ABC)=\operatorname{tr}(CAB)$ |
| $2\times2$ inverse | $\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$ |
| pseudo-inverses | tall: $(A^\top A)^{-1}A^\top$; wide: $A^\top(AA^\top)^{-1}$ |
| determinant | $\det(AB)=\det A\det B$, $\det A^{-1}=1/\det A$, $\det(cA)=c^n\det A$ |
| rank–nullity | $\operatorname{rank}A+\dim\mathcal N(A)=n$ |
| losses | MSE $\frac1n\sum e_i^2$, RMSE $\sqrt{\text{MSE}}$, MAE $\frac1n\sum|e_i|$ |
| metrics | Acc $\frac{TP+TN}{P+N}$, Rec $\frac{TP}{TP+FN}$, Spec $\frac{TN}{TN+FP}$, FPR $\frac{FP}{FP+TN}$, Prec $\frac{TP}{TP+FP}$, NPV $\frac{TN}{TN+FN}$ |
| F-scores | $F_\beta=\frac{1+\beta^2}{1/P+\beta^2/R}$, $F_1=\frac{2TP}{2TP+FP+FN}$ |
| MCC | $\frac{TP\cdot TN-FP\cdot FN}{\sqrt{(TP+FP)(TP+FN)(TN+FP)(TN+FN)}}$ |
| kNN cost | time $O(dn)$, storage $O(dn)$ per query |
| gradients | $\nabla a^\top x=a$, $\nabla x^\top x=2x$, $\nabla x^\top Px=2Px$ ($P$ sym.) |
| least squares | $X^\top Xw=X^\top y$, $w=(X^\top X)^{-1}X^\top y$, $X^\top e=0$ |
| ridge | $w=(X^\top X+\lambda I)^{-1}X^\top y$; 1-D: $\frac{S_{xy}}{S_{xx}+\lambda}$ |
| lasso (1-D) | $w=\operatorname{sign}(b)\max(|b|-\lambda,0)/a$ |
| elastic net | $\frac12\|y-X\theta\|^2+\lambda_1\|\theta\|_1+\frac{\lambda_2}2\|\theta\|^2$ |
| eigen | $\det(A-\lambda I)=0$; $2\times2$: $\lambda^2-\operatorname{tr}A\,\lambda+\det A$ |
| EVD | $A=Q\Lambda Q^{-1}$, $A^k=Q\Lambda^kQ^{-1}$, $A^{-1}=Q\Lambda^{-1}Q^{-1}$; symmetric: $Q^{-1}=Q^\top$ |
| eigen facts | $\det A=\prod\lambda_i$, $\operatorname{tr}A=\sum\lambda_i$, $f(A)$ has eigenvalues $f(\lambda_i)$ |
| SVD (insurance) | $A=U\Sigma V^\top$, $\det(A^\top A)=\prod\sigma_i^2$, rank-$k$ storage $mk+k+kn$ |

## 4. Exam strategy

1. **Part I first pass**: answer every MCQ where you are sure of each tick; skip the rest. Second pass: for each remaining option, ask "can I prove or counter-example this in 20 seconds?" — tick only those. Never tick by gut: −1 per wrong tick.
2. **Part II**: start with the "certain" topics (dimensions, Gram–Schmidt, rank–nullity, kNN, ridge, EVD) — they are fast marks. Write sizes before multiplying. Show the formula, then the substitution, then the number.
3. **Check habits**: GS — verify $q_1^\top q_2=0$; least squares — residuals sum to 0; eigen — trace and determinant; inverses — multiply back to $I$; confusion matrix — rows/columns sum to the totals.
4. **Viva**: be ready to say *why* — why the normal equations (residual ⟂ column space), why lasso is sparse (diamond corners / kink), why $A^\top A$ is invertible (the $\|Ax\|^2$ argument), why symmetric matrices have orthonormal eigenvectors.

:::remember
Three highest-yield derivations to rehearse aloud: normal equations (two ways), ridge closed form, and the Gram-matrix invertibility proof.
:::

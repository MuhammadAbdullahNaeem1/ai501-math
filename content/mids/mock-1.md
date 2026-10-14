# Mock Mid 1

Format copied from the 2024/2025 AI 501 mids. **Part I: 45 minutes, 20 MCQs × 4 = 80 points. Part II: 100 minutes, 8 problems, 40 points.** Do it in one sitting, closed book, calculator allowed. Solutions are folded under each question.

:::exam Part I instructions (as in the real paper)
Select **ALL (up to three)** correct choices. Each correct tick earns credit; **every incorrect tick costs 1 point**, but no question goes below zero. Score each MCQ out of 4: +4/(number of correct options) per correct tick, −1 per wrong tick.
:::

## Part I — Multiple choice

:::question MCQ 1
$u,v\in\mathbb{R}^n$ are unit vectors. Which are true?
(a) $\|u-v\|_2^2=2-2u^\top v$ (b) $|u^\top v|\le1$ (c) $u^\top v=1\Rightarrow u=v$ (d) $\|u+v\|_2=2$ always
:::solution
**(a), (b), (c).** (a) expand; (b) Cauchy–Schwarz; (c) equality in C–S with unit vectors and positive sign ⇒ $u=v$; (d) false (e.g. orthogonal: $\sqrt2$).
:::
:::

:::question MCQ 2
Which are subspaces of $\mathbb{R}^3$?
(a) $\{x: x_1=2x_3\}$ (b) $\{x: x_1x_2=0\}$ (c) $\operatorname{span}\{(1,1,1)\}$ (d) $\{x:\|x\|_2\le1\}$
:::solution
**(a), (c).** (b) union of two planes — $(1,0,0)+(0,1,0)$ leaves it. (d) not closed under scaling.
:::
:::

:::question MCQ 3
About combinations of points $x_1,x_2$:
(a) a convex combination has non-negative coefficients summing to 1 (b) all convex combinations of $x_1,x_2$ form the segment between them (c) every affine combination is convex (d) every convex combination is a linear combination
:::solution
**(a), (b), (d).** (c) false: $2x_1-x_2$ is affine, not convex.
:::
:::

:::question MCQ 4
For $x=(3,-4,0)$:
(a) $\|x\|_1=7$ (b) $\|x\|_2=5$ (c) $\|x\|_\infty=4$ (d) $\|x\|_\infty=3$
:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 5
About the correlation coefficient $\rho$ of non-constant vectors:
(a) it is the cosine similarity of the centred vectors (b) $\rho(x,2x+3\mathbf 1)=1$ (c) $\rho$ can exceed 1 for large vectors (d) $\rho(x,-x)=-1$
:::solution
**(a), (b), (d).** (c) false by Cauchy–Schwarz.
:::
:::

:::question MCQ 6
Gram–Schmidt applied to $a_1,a_2,a_3$:
(a) if $\tilde q_3=0$ then $a_3\in\operatorname{span}\{a_1,a_2\}$ (b) the output depends on the order of inputs (c) $\operatorname{span}\{q_1,q_2\}=\operatorname{span}\{a_1,a_2\}$ (d) it requires the inputs to be orthogonal already
:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 7
$A\in\mathbb{R}^{3\times5}$:
(a) $\operatorname{rank}A\le3$ (b) $\dim\mathcal N(A)\ge2$ (c) its columns can be independent (d) it can have a left inverse
:::solution
**(a), (b).** Five columns in $\mathbb{R}^3$ are always dependent ⇒ (c), (d) false.
:::
:::

:::question MCQ 8
Left inverses:
(a) $A$ has one only if its columns are independent (b) a $5\times3$ matrix can have one (c) a left inverse is always unique (d) if $XA=I$ and $Ax=b$ is solvable then $x=Xb$
:::solution
**(a), (b), (d).** (c) false — the slide's $3\times2$ example has two.
:::
:::

:::question MCQ 9
Which matrices are always symmetric? ($A\in\mathbb{R}^{m\times n}$ in (a), (b); $A$ square in (c), (d).)
(a) $A^\top A$ (b) $AA^\top$ (c) $A+A^\top$ (d) $A-A^\top$
:::solution
**(a), (b), (c).** (d) is skew-symmetric.
:::
:::

:::question MCQ 10
$Q\in\mathbb{R}^{n\times n}$ orthogonal:
(a) $Q^\top Q=I$ (b) $\det Q=\pm1$ (c) $\|Qx-Qy\|=\|x-y\|$ (d) $Q$ must be symmetric
:::solution
**(a), (b), (c).** $1=\det(Q^\top Q)=(\det Q)^2$. Rotations are orthogonal but not symmetric.
:::
:::

:::question MCQ 11
Trace and Frobenius norm:
(a) $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ (b) $\operatorname{tr}(A+B)=\operatorname{tr}A+\operatorname{tr}B$ (c) $\operatorname{tr}(AB)=\operatorname{tr}A\operatorname{tr}B$ (d) $\|A\|_F^2=\operatorname{tr}(A^\top A)$
:::solution
**(a), (b), (d).**
:::
:::

:::question MCQ 12
$\left\|\begin{pmatrix}1&2\\3&4\end{pmatrix}\right\|_F=$
(a) $\sqrt{30}$ (b) $\approx5.477$ (c) $\sqrt{10}$ (d) $30$
:::solution
**(a), (b).** $\sqrt{1+4+9+16}$.
:::
:::

:::question MCQ 13
$A\in\mathbb{R}^{4\times4}$ has rank 3:
(a) $\det A=0$ (b) 0 is an eigenvalue of $A$ (c) $Ax=b$ is solvable for every $b$ (d) $\mathcal N(A)$ is a line through 0
:::solution
**(a), (b), (d).** Nullity $4-3=1$.
:::
:::

:::question MCQ 14
kNN:
(a) prediction for one point costs $O(dn)$ (b) larger $k$ tends to lower variance (c) features in very different units should be normalised (d) training fits a parametric model
:::solution
**(a), (b), (c).** kNN is non-parametric and lazy.
:::
:::

:::question MCQ 15
A cancer screening test — we must not send sick patients home. Prefer:
(a) high recall (b) FP ≫ FN (c) accuracy as the main metric under heavy imbalance (d) FN ≫ FP
:::solution
**(a), (b).**
:::
:::

:::question MCQ 16
Metrics:
(a) precision $=TP/(TP+FP)$ (b) FPR $=1-$specificity (c) F1 is the arithmetic mean of precision and recall (d) AUC $=0.5$ corresponds to random guessing
:::solution
**(a), (b), (d).** F1 is the harmonic mean.
:::
:::

:::question MCQ 17
Least squares with $X$ of full column rank (first column all ones):
(a) $w=(X^\top X)^{-1}X^\top y$ (b) $X^\top(y-Xw)=0$ (c) the residuals sum to zero (d) adding a feature can increase training error
:::solution
**(a), (b), (c).** Nested models: training error can only fall or stay.
:::
:::

:::question MCQ 18
Ridge with $\lambda>0$:
(a) $X^\top X+\lambda I$ is always invertible (b) $\lambda\to\infty\Rightarrow w\to0$ (c) it sets some coefficients exactly to zero (d) it reduces variance compared with OLS
:::solution
**(a), (b), (d).** Exact zeros are the lasso.
:::
:::

:::question MCQ 19
$A\in\mathbb{R}^{2\times2}$ has eigenvalues $2$ and $-1$:
(a) $\det A=-2$ (b) $\operatorname{tr}A=1$ (c) $A^2+A$ has eigenvalues 6 and 0 (d) $A^{-1}$ has eigenvalues 2 and $-1$
:::solution
**(a), (b), (c).** $A^{-1}$: $\tfrac12$ and $-1$.
:::
:::

:::question MCQ 20
$A$ symmetric:
(a) all eigenvalues are real (b) $A=Q\Lambda Q^\top$ with orthonormal $Q$ (c) all eigenvalues are positive (d) eigenvectors of distinct eigenvalues are orthogonal
:::solution
**(a), (b), (d).** $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ has eigenvalue $-1$.
:::
:::

## Part II — Problems (40 points)

:::question Problem 1 (4 pts) — dimensions
$A\in\mathbb{R}^{4\times6}$, $B\in\mathbb{R}^{6\times3}$, $C\in\mathbb{R}^{3\times3}$, $D\in\mathbb{R}^{4\times4}$. Say whether each makes sense and give its size: (a) $A^\top DA+BCB^\top$ (b) $ABC^\top$ (c) $BA$. (d) Find the size of $E$ if $ABE\in\mathbb{R}^{4\times4}$.
:::solution
(a) $A^\top DA$: $(6\times4)(4\times4)(4\times6)=6\times6$; $BCB^\top$: $(6\times3)(3\times3)(3\times6)=6\times6$ ⇒ valid, $6\times6$.
(b) $(4\times6)(6\times3)(3\times3)=4\times3$.
(c) $(6\times3)(4\times6)$: inner sizes $3\neq4$ ⇒ undefined.
(d) $AB$ is $4\times3$ ⇒ $E\in\mathbb{R}^{3\times4}$. *(1 each)*
:::
:::

:::question Problem 2 (6 pts) — Gram–Schmidt
$a_1=(1,1,0,0)$, $a_2=(1,0,1,0)$, $a_3=(0,1,1,0)$.
(a) Apply Gram–Schmidt to get orthonormal $q_1,q_2,q_3$; state the dimension of the span. (4)
(b) Is $b=(1,2,3,0)$ in the span? Decide using $\hat b=\sum_i(q_i^\top b)q_i$. (2)
:::solution
(a) $q_1=\tfrac1{\sqrt2}(1,1,0,0)$.
$q_1^\top a_2=\tfrac1{\sqrt2}$ ⇒ $\tilde q_2=a_2-\tfrac12(1,1,0,0)=(\tfrac12,-\tfrac12,1,0)$, $\|\tilde q_2\|=\sqrt{3/2}$ ⇒ $q_2=\tfrac1{\sqrt6}(1,-1,2,0)$.
$q_1^\top a_3=\tfrac1{\sqrt2}$, $q_2^\top a_3=\tfrac1{\sqrt6}$ ⇒
$$
\tilde q_3=\begin{bmatrix}0\\1\\1\\0\end{bmatrix}-\frac12\begin{bmatrix}1\\1\\0\\0\end{bmatrix}-\frac16\begin{bmatrix}1\\-1\\2\\0\end{bmatrix}=\begin{bmatrix}-2/3\\2/3\\2/3\\0\end{bmatrix},\quad\|\tilde q_3\|=\tfrac2{\sqrt3},\quad q_3=\tfrac1{\sqrt3}(-1,1,1,0).
$$
Checks: $q_1^\top q_3=0$, $q_2^\top q_3=\tfrac{-1-1+2}{\sqrt{18}}=0$ ✓. No $\tilde q_i=0$ ⇒ independent, **dimension 3** (the subspace $x_4=0$).
(b) $q_1^\top b=\tfrac3{\sqrt2}$, $q_2^\top b=\tfrac5{\sqrt6}$, $q_3^\top b=\tfrac4{\sqrt3}$:
$\hat b=\tfrac32(1,1,0,0)+\tfrac56(1,-1,2,0)+\tfrac43(-1,1,1,0)=(1,2,3,0)=b$ ⇒ **yes**.
:::
:::

:::question Problem 3 (5 pts) — rank, null space, complete solution
$A=\begin{bmatrix}1&2&1&0\\2&4&3&1\\1&2&2&1\end{bmatrix}$.
(a) Reduce $[A\mid b]$; give $\operatorname{rank}A$ and the solvability condition on $b$. (2)
(b) Basis for $\mathcal N(A)$; verify rank–nullity. (2)
(c) Complete solution for $b=(1,3,2)$. (1)
:::solution
$$
\left[\begin{array}{cccc|c}1&2&1&0&b_1\\2&4&3&1&b_2\\1&2&2&1&b_3\end{array}\right]\to
\left[\begin{array}{cccc|c}1&2&1&0&b_1\\0&0&1&1&b_2-2b_1\\0&0&1&1&b_3-b_1\end{array}\right]\to
\left[\begin{array}{cccc|c}1&2&1&0&b_1\\0&0&1&1&b_2-2b_1\\0&0&0&0&b_3-b_2+b_1\end{array}\right].
$$
(a) Rank 2; solvable iff $b_2=b_1+b_3$.
(b) Free $x_2,x_4$. $x_2=1$: $s_1=(-2,1,0,0)$. $x_4=1$: $x_3=-1$, $x_1=-x_3=1$: $s_2=(1,0,-1,1)$. $2+2=4$ ✓.
(c) $3=1+2$ ✓. $x_2=x_4=0$: $x_3=1$, $x_1=0$:
$$
x=\begin{bmatrix}0\\0\\1\\0\end{bmatrix}+c_1\begin{bmatrix}-2\\1\\0\\0\end{bmatrix}+c_2\begin{bmatrix}1\\0\\-1\\1\end{bmatrix}.
$$
:::
:::

:::question Problem 4 (5 pts) — kNN and evaluation
(a) Training points: $A(1,1)+$, $B(2,2)+$, $C(4,4)-$, $D(5,3)-$, $E(3,1)+$, $F(5,5)-$. Classify $T=(3,2.5)$ with Euclidean distance for $k=1,3,5$. (3)
(b) A classifier on 200 test points has TP 40, FP 10, FN 20, TN 130. Compute accuracy, recall, specificity, precision and F1. (2)
:::solution
(a) $d(B)=\sqrt{1.25}=1.12$ (+), $d(E)=1.5$ (+), $d(C)=\sqrt{3.25}=1.80$ (−), $d(D)=\sqrt{4.25}=2.06$ (−), $d(A)=2.5$ (+), $d(F)=\sqrt{10.25}=3.20$ (−).
$k=1$: B ⇒ **+**. $k=3$: B, E, C ⇒ 2–1 **+**. $k=5$: B, E, C, D, A ⇒ 3–2 **+**.
(b) Accuracy $170/200=0.85$; recall $40/60=0.667$; specificity $130/140=0.929$; precision $40/50=0.80$; $F_1=80/110=0.727$.
:::
:::

:::question Problem 5 (6 pts) — least squares and ridge
Data $(x,y)$: $(-1,1),(0,1),(1,3),(2,3)$, model $\hat y=w_0+w_1x$.
(a) Compute the least-squares $w$ and verify $X^\top e=0$. (3)
(b) Ridge with the slope penalised only, $\lambda=4$: use the centred formula $w_1=\frac{S_{xy}}{S_{xx}+\lambda}$, $w_0=\bar y-w_1\bar x$. (2)
(c) What happens as $\lambda\to\infty$? (1)
:::solution
(a) $X^\top X=\begin{bmatrix}4&2\\2&6\end{bmatrix}$, $X^\top y=\begin{bmatrix}8\\8\end{bmatrix}$, $\det=20$, $w=\tfrac1{20}\begin{bmatrix}6&-2\\-2&4\end{bmatrix}\begin{bmatrix}8\\8\end{bmatrix}=\begin{bmatrix}1.6\\0.8\end{bmatrix}$.
$\hat y=(0.8,1.6,2.4,3.2)$, $e=(0.2,-0.6,0.6,-0.2)$: $\mathbf 1^\top e=0$, $x^\top e=-0.2+0+0.6-0.4=0$ ✓.
(b) $\bar x=0.5$, $\bar y=2$, $S_{xx}=5$, $S_{xy}=4$ (OLS slope $0.8$ ✓). $w_1=\tfrac4{9}\approx0.444$, $w_0=2-0.222=1.778$.
(c) $w_1\to0$, $w_0\to\bar y=2$: the constant model.
:::
:::

:::question Problem 6 (4 pts) — derivations
(a) Show, **without calculus**, that the least-squares $w$ satisfies $X^\top Xw=X^\top y$. (2)
(b) Prove $X^\top X$ is invertible when $X$ has linearly independent columns. (2)
:::solution
(a) $Xw$ ranges over $\mathcal C(X)$. The closest point $\hat y=Xw$ to $y$ is the orthogonal projection, so $e=y-Xw\perp$ every column: $X^\top(y-Xw)=0$. (Closest because for $p\in\mathcal C(X)$: $\|y-p\|^2=\|e\|^2+\|\hat y-p\|^2\ge\|e\|^2$.)
(b) $X^\top Xv=0\Rightarrow v^\top X^\top Xv=\|Xv\|^2=0\Rightarrow Xv=0\Rightarrow v=0$ (independence). Square with trivial null space ⇒ invertible.
:::
:::

:::question Problem 7 (6 pts) — eigen-decomposition
$A=\begin{bmatrix}1&2\\2&1\end{bmatrix}$.
(a) Eigenvalues and orthonormal eigenvectors; write $A=Q\Lambda Q^\top$. (3)
(b) Compute $A^4$ using the EVD. (2)
(c) Show $A^2-2A=3I$ using eigenvalues. (1)
:::solution
(a) $\lambda^2-2\lambda-3=(\lambda-3)(\lambda+1)$ ⇒ $3,-1$. $\lambda=3$: $\begin{bmatrix}-2&2\\2&-2\end{bmatrix}v=0$ ⇒ $q_1=\tfrac1{\sqrt2}(1,1)$. $\lambda=-1$: $\begin{bmatrix}2&2\\2&2\end{bmatrix}v=0$ ⇒ $q_2=\tfrac1{\sqrt2}(1,-1)$. $Q=\tfrac1{\sqrt2}\begin{bmatrix}1&1\\1&-1\end{bmatrix}$, $\Lambda=\operatorname{diag}(3,-1)$.
(b) $A^4=Q\operatorname{diag}(81,1)Q^\top=\tfrac12\left(81\begin{bmatrix}1&1\\1&1\end{bmatrix}+\begin{bmatrix}1&-1\\-1&1\end{bmatrix}\right)=\begin{bmatrix}41&40\\40&41\end{bmatrix}$.
(c) $f(\lambda)=\lambda^2-2\lambda$: $f(3)=3$, $f(-1)=3$ ⇒ $A^2-2A=Q(3I)Q^\top=3I$.
:::
:::

:::question Problem 8 (4 pts) — lasso vs ridge
(a) Explain geometrically why the lasso gives sparse solutions. (2)
(b) One feature with $a=\sum x_i^2=10$, $b=\sum x_iy_i=-3$. Give OLS, ridge and lasso weights for $\lambda=1$ and $\lambda=5$. (2)
:::solution
(a) Lasso's constraint $\|\theta\|_1\le t$ is a diamond with corners on the axes; error ellipses usually first touch a corner, where some coordinates are exactly zero. The ridge disc has no corners, so the contact point generically has all coordinates non-zero.
(b) OLS $-0.3$. $\lambda=1$: ridge $-3/11=-0.273$; lasso $-(3-1)/10=-0.2$. $\lambda=5$: ridge $-3/15=-0.2$; lasso $0$ (since $|b|\le\lambda$).
:::
:::

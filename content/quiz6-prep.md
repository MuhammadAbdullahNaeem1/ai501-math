# Quiz 6 prep — SVD, PCA and calculus

**Instructor's notice:** the quiz this week is on **PCA/SVD** and **calculus — the functions and differentiation sections only**. Tutorial Worksheet 4 is the practice sheet; Taylor series appears on it but is treated as **optional** here.

<div class="pdf-links">
<a href="l07-notes.html">L07 SVD notes</a>
<a href="l08-notes.html">L08 PCA notes</a>
<a href="l09-notes.html">L09 calculus notes</a>
<a href="pdfs/psets/Worksheet-04.pdf">Tutorial Worksheet 4</a>
<a href="pdfs/psets/PSet-07.pdf">PSet 7 (with solutions)</a>
<a href="pdfs/psets/PSet-08.pdf">PSet 8</a>
</div>

## What is in, what is out

| Topic | Notes | In Quiz 6? |
|---|---|---|
| Positive/negative (semi-)definite matrices; eigenvalue test | [L07 §1–2](l07-notes.html) | **Yes** |
| SVD: shapes, $Av_i=\sigma_iu_i$, computing it, geometry, rank, $A_k$, storage | [L07 §3–7](l07-notes.html) | **Yes** |
| Curse of dimensionality ($m^d$ cells, $1-(1-\epsilon)^d$) | [L08 §1–2](l08-notes.html) | **Yes** |
| PCA: steps, covariance, eigenvectors, $T_k$, reconstruction error, SVD link, scaling, limits | [L08 §3–9](l08-notes.html) | **Yes** |
| Functions: $\mathbb{R}^n\to\mathbb{R}^m$, domain / co-domain / image, types | [L09 §1](l09-notes.html) | **Yes** |
| Derivative, secant → tangent, rules, chain rule (paths) | [L09 §2–3](l09-notes.html) | **Yes** |
| Gradient, Jacobian, Hessian, classifying critical points | [L09 §4–6](l09-notes.html) | **Yes** |
| Taylor series (1-D and second order in many variables) | [L09 §7](l09-notes.html) | Optional |
| Convexity, gradient descent, SGD | [L09 §8–10](l09-notes.html) | No |

## The must-know list

**Definite matrices.** For symmetric $A$: PD ⇔ all $\lambda_i>0$; PSD ⇔ all $\lambda_i\ge0$; mixed signs ⇔ indefinite. $x^\top Ax=\sum_i\lambda_ic_i^2$. $\det A>0$ alone is **not** enough. $x^\top A^\top Ax=\|Ax\|^2\ge0$, so $A^\top A$ and $AA^\top$ are always PSD; $A^\top A$ is PD iff the columns are independent.

**SVD.** $A=U\Sigma V^\top$ — $U$ $m\times m$ and $V$ $n\times n$ orthogonal, $\Sigma$ $m\times n$ diagonal with $\sigma_1\ge\cdots\ge0$. $Av_i=\sigma_iu_i$. Compute: eigen-decompose $A^\top A$ → $\sigma_i=\sqrt{\lambda_i}$, $v_i$ → $u_i=Av_i/\sigma_i$. Checks: $\sum\sigma_i^2=\|A\|_F^2$, $\prod\sigma_i=|\det A|$ (square $A$). Geometry: $V^\top$ rotate, $\Sigma$ stretch (drop/append), $U$ rotate; circle → ellipse with semi-axes $\sigma_iu_i$, area $\pi\sigma_1\sigma_2$. Rank = number of $\sigma_i>0$. $A_k=\sum_{i\le k}\sigma_iu_iv_i^\top$, $\|A-A_k\|_F^2=\sum_{i>k}\sigma_i^2$, storage $k(m+n+1)$. Symmetric: $\sigma_i=|\lambda_i|$.

**Curse of dimensionality.** $m^d$ cells; shell fraction $1-(1-\epsilon)^d$ (e.g. $\epsilon=0.1$: $d=10\to0.65$, $d=50\to0.995$).

**PCA.** $\bar x=\tfrac1n\sum x_i$; $s_i=x_i-\bar x$; $C=\tfrac1nSS^\top$ (symmetric PSD, $d\times d$); $C=VDV^\top$ sorted descending; $W=[v_1\cdots v_k]$ ($d\times k$); $z=W^\top(x-\bar x)$; $\hat x=\bar x+Wz$. $\lambda_j$ = variance along $v_j$; scores uncorrelated; error $=\sum_{j>k}\lambda_j$; $T_k=\sum_{i\le k}\lambda_i/\sum\lambda_i$. SVD link: PCs are the left singular vectors of $S$ (samples as columns), $\lambda_j=\sigma_j^2/n$. Standardise when units differ; PCA ignores labels (LDA doesn't).

**Calculus.** $f'(x_0)=\lim\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$; sum, product $(fg)'=f'g+fg'$, quotient $\frac{f'g-fg'}{g^2}$, chain $f'(g(x))g'(x)$; several variables: multiply along each path, add over paths. $\nabla f=[\partial f/\partial x_1,\dots]^\top$ (steepest ascent, ⟂ contours, $D_uf=\nabla f^\top u$); $\nabla a^\top x=a$, $\nabla x^\top x=2x$, $\nabla x^\top Px=2Px$. Jacobian $J_{ij}=\partial f_i/\partial x_j$ ($m\times n$), $J_{Ax}=A$. Hessian $H_{jk}=\partial^2f/\partial x_j\partial x_k$ = Jacobian of $\nabla f$, symmetric; at $\nabla f=\mathbf 0$: all $\lambda>0$ min, all $<0$ max, mixed saddle; least squares $H=X^\top X$.

## Tutorial Worksheet 4 — the official practice problems

Full worked solutions are in the L09 notes ([Problem 1](l09-notes.html#6-the-hessian-how-the-ground-curves), [Problem 2](l09-notes.html#7-the-taylor-series-a-local-map-of-the-ground)); here are the questions with the key results.

:::question Problem 1 — in scope
Let $f(x,y)=x^2+4xy+y^2$. (a) Find $\nabla f(x,y)$ and the critical point of $f$. (b) The gradient is itself a map $g(x,y)=\nabla f(x,y)=(g_1,g_2)$; compute its Jacobian $J_g$. (c) Write down the Hessian of $f$. What do you notice about it compared with $J_g$? (d) Find the eigenvalues of the Hessian and classify the critical point. Confirm by evaluating $f$ at $(1,1)$ and at $(1,-1)$.

:::solution
(a) $\nabla f=\begin{bmatrix}2x+4y\\4x+2y\end{bmatrix}=\begin{bmatrix}2&4\\4&2\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}$; the matrix has $\det=-12\neq0$, so the only critical point is $(0,0)$.
(b) $J_g=\begin{bmatrix}2&4\\4&2\end{bmatrix}$.
(c) $H=\begin{bmatrix}2&4\\4&2\end{bmatrix}=J_g$: the Hessian **is** the Jacobian of the gradient (and it is symmetric and constant, because $f$ is quadratic).
(d) $(2-\lambda)^2=16\Rightarrow\lambda=6,\ -2$: mixed signs, so $(0,0)$ is a **saddle**. Confirm: $f(1,1)=6>0=f(0,0)$ and $f(1,-1)=-2<0$.
:::
:::

:::question Problem 2 — Taylor (optional)
Let $f(x,y)=x\,e^y$ and $a=(2,0)$. (a) Compute $f(a)$, $\nabla f(a)$ and $H(a)$. (b) Write the second-order Taylor polynomial $P_2(x,y)$ about $a$. (c) Use $P_2$ to approximate $f(2.1,\,0.1)$ and compare with $2.1e^{0.1}\approx2.32086$. How much comes from the first-order terms alone?

:::solution
(a) $f(a)=2$; $\nabla f=(e^y,\ xe^y)\to(1,2)$; $H=\begin{bmatrix}0&e^y\\e^y&xe^y\end{bmatrix}\to\begin{bmatrix}0&1\\1&2\end{bmatrix}$.
(b) $P_2=2+(x-2)+2y+(x-2)y+y^2$.
(c) $P_2(2.1,0.1)=2+0.1+0.2+0.01+0.01=2.32$ (error $\approx0.00086$). First order alone: $2.3$ — it supplies $0.30$ of the $0.32$ change (≈94%); curvature adds $0.02$.
:::
:::

## Mock Quiz 6A (20 minutes, 10 marks)

:::question Question 1 (3 marks)
True or False, with a one-line justification:

1. The singular values of $A$ are the square roots of the eigenvalues of $A^\top A$.
2. The first principal component is the eigenvector of the covariance matrix with the **smallest** eigenvalue.
3. The Hessian of $f(x,y)=x^2-y^2$ at the origin is positive definite.

:::solution
1. **True.** $A^\top A=V(\Sigma^\top\Sigma)V^\top$, so its eigenvalues are $\sigma_i^2$ (and they are $\ge0$ since $A^\top A$ is PSD).
2. **False.** It is the eigenvector with the **largest** eigenvalue — the direction of largest variance.
3. **False.** $H=\operatorname{diag}(2,-2)$ has mixed signs: indefinite, so the origin is a **saddle**.
:::
:::

:::question Question 2 (4 marks)
Centred 2-D data has covariance matrix $C=\begin{bmatrix}3&1\\1&3\end{bmatrix}$.

1. Find the eigenvalues and the first principal component. *(2 marks)*
2. What fraction of the variance does one component keep? *(1 mark)*
3. For the centred point $s=(2,0)$, find its score $z$, its reconstruction $\hat s$ and the squared error $\|s-\hat s\|^2$. *(1 mark)*

:::solution
1. $\lambda=3\pm1$: $\lambda_1=4$, $\lambda_2=2$; PC1 $v_1=\tfrac{1}{\sqrt2}(1,1)$.
2. $T_1=4/6\approx\mathbf{66.7\%}$.
3. $z=v_1^\top s=\tfrac{2}{\sqrt2}=\sqrt2$; $\hat s=zv_1=\sqrt2\cdot\tfrac{1}{\sqrt2}(1,1)=(1,1)$; error $\|(1,-1)\|^2=2$.
:::
:::

:::question Question 3 (3 marks)
Let $f(x,y)=x^2+xy+y^2-3y$. Find the critical point and classify it using the Hessian.

:::solution
$\nabla f=\begin{bmatrix}2x+y\\x+2y-3\end{bmatrix}=\mathbf 0$: the first equation gives $y=-2x$, then $x-4x-3=0\Rightarrow x=-1$, $y=2$. Critical point $(-1,\ 2)$.
$H=\begin{bmatrix}2&1\\1&2\end{bmatrix}$, eigenvalues $3$ and $1$, both positive: **local minimum** (in fact the global one, since $H$ is constant and PD).
:::
:::

## Mock Quiz 6B (20 minutes, 10 marks)

:::question Question 1 (4 marks)
Let $A=\begin{bmatrix}1&1\\0&0\\1&1\end{bmatrix}$.

1. Compute $A^\top A$ and the singular values of $A$. *(2 marks)*
2. Find $v_1$ and $u_1$. *(1 mark)*
3. State the rank of $A$ and the shapes of $U$, $\Sigma$, $V$. *(1 mark)*

:::solution
1. $A^\top A=\begin{bmatrix}2&2\\2&2\end{bmatrix}$: trace 4, determinant 0, so $\lambda=4,\ 0$ and $\sigma_1=2$, $\sigma_2=0$.
2. $v_1=\tfrac{1}{\sqrt2}(1,1)$; $u_1=\dfrac{Av_1}{\sigma_1}=\dfrac12\cdot\dfrac{1}{\sqrt2}\begin{bmatrix}2\\0\\2\end{bmatrix}=\dfrac{1}{\sqrt2}\begin{bmatrix}1\\0\\1\end{bmatrix}$.
3. One non-zero singular value: **rank 1**. $U$ is $3\times3$, $\Sigma$ is $3\times2$, $V$ is $2\times2$. (And $A=\sigma_1u_1v_1^\top$ exactly: $A_1=A$.)
:::
:::

:::question Question 2 (3 marks)
Let $g(x,y)=(u,v)=(x+y,\ xy)$ and $f(u,v)=u^2+v$, and $h=f\circ g$.

1. Write the Jacobian of $g$. *(1 mark)*
2. Find $\partial h/\partial x$ with the chain rule (sum over paths), and check by substitution. *(2 marks)*

:::solution
1. $J_g=\begin{bmatrix}\partial u/\partial x&\partial u/\partial y\\\partial v/\partial x&\partial v/\partial y\end{bmatrix}=\begin{bmatrix}1&1\\y&x\end{bmatrix}$.
2. $\dfrac{\partial h}{\partial x}=\dfrac{\partial f}{\partial u}\dfrac{\partial u}{\partial x}+\dfrac{\partial f}{\partial v}\dfrac{\partial v}{\partial x}=2u\cdot1+1\cdot y=2(x+y)+y$. Check: $h=(x+y)^2+xy$, so $\partial h/\partial x=2(x+y)+y$ ✓. (In matrix form, $J_h=J_fJ_g=\begin{bmatrix}2u&1\end{bmatrix}\begin{bmatrix}1&1\\y&x\end{bmatrix}$.)
:::
:::

:::question Question 3 (3 marks)
1. Points are uniform in a unit ball. What fraction lies within $\epsilon=0.05$ of the surface for $d=2$ and for $d=60$? *(2 marks)*
2. In one sentence: why can PCA still work on high-dimensional real data? *(1 mark)*

:::solution
1. $1-0.95^2=0.0975$ (about 10%); $1-0.95^{60}\approx1-0.046=\mathbf{0.954}$ (about 95%).
2. Real data does not fill the space: it lies near a low-dimensional region (a line, a plane, a manifold), so a few directions of large variance describe it almost completely.
:::
:::

## More practice

- [L07 practice quizzes](l07-quiz.html) — SVD (7A–7C)
- [L08 practice quizzes](l08-quiz.html) — curse of dimensionality and PCA (8A–8C)
- [L09 practice quizzes](l09-quiz.html) — functions and differentiation (9A–9B); Taylor, convexity and GD (9C)
- PSet 7 Problems 1–8 (solutions included in the PDF) and PSet 8 Problems 1–5 (worked in the L09 notes).

:::remember
For the quiz: SVD from $A^\top A$ ($\sigma=\sqrt\lambda$, $u_i=Av_i/\sigma_i$); PCA as centre → covariance → top eigenvectors → $T_k$ and error $=\sum_{j>k}\lambda_j$; calculus as gradient → critical point → Hessian eigenvalues.
:::

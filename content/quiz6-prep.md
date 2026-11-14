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
| Definite matrices and the eigenvalue test | [L07 §1–2](l07-notes.html) | **Yes** |
| SVD: shapes, computing it, geometry, rank, low-rank approximation | [L07 §3–7](l07-notes.html) | **Yes** |
| Curse of dimensionality | [L08 §1–2](l08-notes.html) | **Yes** |
| PCA: the five steps, variance kept, error, SVD link, scaling, limits | [L08 §3–9](l08-notes.html) | **Yes** |
| Functions: domain, co-domain, image, types | [L09 §1](l09-notes.html) | **Yes** |
| Derivatives, their rules, the chain rule | [L09 §2–3](l09-notes.html) | **Yes** |
| Gradient, Jacobian, Hessian, classifying critical points | [L09 §4–6](l09-notes.html) | **Yes** |
| Taylor series | [L09 §7](l09-notes.html) | Optional |
| Convexity, gradient descent, SGD | [L09 §8–10](l09-notes.html) | No |

## The formulas you need

### Definite matrices

:::steps
Symmetric $A$ — the eigenvalues decide the sign
$$
x^\top Ax=\sum_i\lambda_i\,c_i^2\qquad\Longrightarrow\qquad \text{PD}\iff\text{all }\lambda_i>0,\qquad \text{PSD}\iff\text{all }\lambda_i\ge0
$$
Gram matrices are always PSD
$$
x^\top(A^\top A)\,x=\|Ax\|^2\ge0
$$
:::

$\det A>0$ alone is **not** enough (two negative eigenvalues also give a positive product).

### SVD

:::steps
The factorisation
$$
A=U\,\Sigma\,V^\top\qquad U:m\times m,\quad \Sigma:m\times n,\quad V:n\times n
$$
The one equation to remember
$$
Av_i=\sigma_i\,u_i
$$
How to compute it
$$
A^\top A\ \xrightarrow{\ \text{eigen}\ }\ \lambda_i,\ v_i\qquad\quad \sigma_i=\sqrt{\lambda_i}\qquad\quad u_i=\frac{Av_i}{\sigma_i}
$$
Checks
$$
\sum_i\sigma_i^2=\|A\|_F^2\qquad\qquad \prod_i\sigma_i=|\det A|\ \ (\text{square }A)
$$
Rank, best rank-$k$ approximation, its error and its storage
$$
\operatorname{rank}A=\#\{\sigma_i>0\}\qquad A_k=\sum_{i\le k}\sigma_iu_iv_i^\top\qquad \|A-A_k\|_F^2=\sum_{i>k}\sigma_i^2\qquad k(m+n+1)
$$
:::

Geometry: $V^\top$ rotates, $\Sigma$ stretches, $U$ rotates — the unit circle becomes an ellipse with semi-axes $\sigma_iu_i$.

### Curse of dimensionality

:::steps
Cells, and the fraction of a ball's volume in a thin outer shell
$$
m^d\qquad\qquad 1-(1-\epsilon)^d
$$
:::

### PCA

:::steps
Centre, then the covariance matrix ($d\times d$, symmetric PSD)
$$
s_i=x_i-\bar x\qquad\qquad C=\frac1n\sum_{i=1}^ns_is_i^\top=\frac1nSS^\top
$$
Eigen-decompose, keep the top $k$, reduce and reconstruct
$$
C=VDV^\top\qquad W=[v_1\ \cdots\ v_k]\qquad z=W^\top(x-\bar x)\qquad \hat x=\bar x+Wz
$$
Variance kept, and the reconstruction error
$$
T_k=\frac{\lambda_1+\cdots+\lambda_k}{\lambda_1+\cdots+\lambda_d}\qquad\qquad \text{error}=\lambda_{k+1}+\cdots+\lambda_d
$$
Link to the SVD of the centred data matrix
$$
\lambda_j=\frac{\sigma_j^2}{n}
$$
:::

Standardise when units differ. PCA ignores class labels (LDA does not).

### Calculus

:::steps
The derivative
$$
f'(x_0)=\lim_{\Delta x\to0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}
$$
Product, quotient and chain rules
$$
(fg)'=f'g+fg'\qquad \Big(\frac fg\Big)'=\frac{f'g-fg'}{g^2}\qquad \frac{d}{dx}f\big(g(x)\big)=f'\big(g(x)\big)\,g'(x)
$$
Gradient, and the three standard gradients
$$
\nabla f=\begin{bmatrix}\partial f/\partial x_1\\\vdots\\\partial f/\partial x_n\end{bmatrix}\qquad \nabla(a^\top x)=a\qquad \nabla(x^\top x)=2x\qquad \nabla(x^\top Px)=2Px
$$
Jacobian (one row per output) and Hessian (Jacobian of the gradient)
$$
J_{ij}=\frac{\partial f_i}{\partial x_j}\qquad J_{Ax}=A\qquad\qquad H_{jk}=\frac{\partial^2f}{\partial x_j\,\partial x_k}
$$
:::

At a critical point ($\nabla f=\mathbf 0$): all Hessian eigenvalues $>0$ → minimum; all $<0$ → maximum; mixed signs → saddle.

## Tutorial Worksheet 4

:::question Problem 1 — in scope
Let $f(x,y)=x^2+4xy+y^2$. (a) Find $\nabla f(x,y)$ and the critical point of $f$. (b) The gradient is itself a map $g(x,y)=\nabla f(x,y)=(g_1,g_2)$; compute its Jacobian $J_g$. (c) Write down the Hessian of $f$. What do you notice about it compared with $J_g$? (d) Find the eigenvalues of the Hessian and classify the critical point. Confirm by evaluating $f$ at $(1,1)$ and at $(1,-1)$.

:::solution
:::steps
(a) Differentiate in $x$, then in $y$
$$
\nabla f=\begin{bmatrix}2x+4y\\4x+2y\end{bmatrix}=\begin{bmatrix}2&4\\4&2\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}
$$
Set it to zero: the matrix is invertible ($\det=4-16=-12$), so the only solution is
$$
(x,y)=(0,0)
$$
(b) One row per output $g_1,g_2$, one column per input $x,y$
$$
J_g=\begin{bmatrix}2&4\\4&2\end{bmatrix}
$$
(c) Second partials $f_{xx}=2,\ f_{xy}=4,\ f_{yy}=2$
$$
H=\begin{bmatrix}2&4\\4&2\end{bmatrix}=J_g
$$
(d) Eigenvalues of $H$
$$
(2-\lambda)^2-16=0\quad\Longrightarrow\quad\lambda=6,\ \ -2
$$
:::
The Hessian **is** the Jacobian of the gradient. Mixed signs, so $(0,0)$ is a **saddle**: $f(1,1)=6>0$ but $f(1,-1)=-2<0$.
:::
:::

:::question Problem 2 — Taylor (optional)
Let $f(x,y)=x\,e^y$ and $a=(2,0)$. (a) Compute $f(a)$, $\nabla f(a)$ and $H(a)$. (b) Write the second-order Taylor polynomial $P_2(x,y)$ about $a$. (c) Use $P_2$ to approximate $f(2.1,\,0.1)$ and compare with $2.1e^{0.1}\approx2.32086$. How much comes from the first-order terms alone?

:::solution
:::steps
(a) Value, gradient and Hessian at $a=(2,0)$
$$
f(a)=2\qquad \nabla f(a)=\begin{bmatrix}e^y\\xe^y\end{bmatrix}_{a}=\begin{bmatrix}1\\2\end{bmatrix}\qquad H(a)=\begin{bmatrix}0&e^y\\e^y&xe^y\end{bmatrix}_{a}=\begin{bmatrix}0&1\\1&2\end{bmatrix}
$$
(b) Height + tilt + bend, with $\delta=(x-2,\ y)$
$$
P_2=2+(x-2)+2y+(x-2)\,y+y^2
$$
(c) Plug in $\delta=(0.1,\ 0.1)$
$$
P_2=2+\underbrace{0.1+0.2}_{\text{first order}}+\underbrace{0.01+0.01}_{\text{second order}}=2.32
$$
:::
The exact value is $2.32086$ (error $0.00086$). The first-order terms supply $0.30$ of the $0.32$ change — about 94%.
:::
:::

## Mock Quiz 6A (20 minutes, 10 marks)

:::question Question 1 (3 marks)
True or False, with a one-line justification:

1. The singular values of $A$ are the square roots of the eigenvalues of $A^\top A$.
2. The first principal component is the eigenvector of the covariance matrix with the **smallest** eigenvalue.
3. The Hessian of $f(x,y)=x^2-y^2$ at the origin is positive definite.

:::solution
1. **True** — $A^\top A=V(\Sigma^\top\Sigma)V^\top$, so its eigenvalues are $\sigma_i^2$.
2. **False** — it is the eigenvector with the **largest** eigenvalue, the direction of largest variance.
3. **False** — $H=\operatorname{diag}(2,-2)$ has mixed signs, so the origin is a **saddle**.
:::
:::

:::question Question 2 (4 marks)
Centred 2-D data has covariance matrix $C=\begin{bmatrix}3&1\\1&3\end{bmatrix}$.

1. Find the eigenvalues and the first principal component. *(2 marks)*
2. What fraction of the variance does one component keep? *(1 mark)*
3. For the centred point $s=(2,0)$, find its score $z$, its reconstruction $\hat s$ and the squared error $\|s-\hat s\|^2$. *(1 mark)*

:::solution
:::steps
1 · For $\begin{bmatrix}a&b\\b&a\end{bmatrix}$ the eigenvalues are $a\pm b$
$$
\lambda_1=4,\quad \lambda_2=2\qquad\qquad v_1=\frac{1}{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}
$$
2 · Variance kept by one component
$$
T_1=\frac{4}{4+2}\approx66.7\%
$$
3 · Score, reconstruction, error
$$
z=v_1^\top s=\frac{2}{\sqrt2}=\sqrt2\qquad \hat s=z\,v_1=\begin{bmatrix}1\\1\end{bmatrix}\qquad \|s-\hat s\|^2=\left\|\begin{bmatrix}1\\-1\end{bmatrix}\right\|^2=2
$$
:::
:::
:::

:::question Question 3 (3 marks)
Let $f(x,y)=x^2+xy+y^2-3y$. Find the critical point and classify it using the Hessian.

:::solution
:::steps
Set the gradient to zero
$$
\nabla f=\begin{bmatrix}2x+y\\x+2y-3\end{bmatrix}=\begin{bmatrix}0\\0\end{bmatrix}
$$
The first row gives $y=-2x$; then $x-4x-3=0$
$$
x=-1,\qquad y=2
$$
Hessian and its eigenvalues
$$
H=\begin{bmatrix}2&1\\1&2\end{bmatrix}\qquad \lambda=3,\ 1
$$
:::
Both eigenvalues positive: $(-1,\,2)$ is a **minimum**.
:::
:::

## Mock Quiz 6B (20 minutes, 10 marks)

:::question Question 1 (4 marks)
Let $A=\begin{bmatrix}1&1\\0&0\\1&1\end{bmatrix}$.

1. Compute $A^\top A$ and the singular values of $A$. *(2 marks)*
2. Find $v_1$ and $u_1$. *(1 mark)*
3. State the rank of $A$ and the shapes of $U$, $\Sigma$, $V$. *(1 mark)*

:::solution
:::steps
1 · Form $A^\top A$ (trace 4, determinant 0)
$$
A^\top A=\begin{bmatrix}2&2\\2&2\end{bmatrix}\qquad \lambda=4,\ 0\qquad \sigma_1=2,\quad\sigma_2=0
$$
2 · Eigenvector for $\lambda=4$, then $u_1=Av_1/\sigma_1$
$$
v_1=\frac{1}{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}\qquad u_1=\frac12\cdot\frac{1}{\sqrt2}\begin{bmatrix}2\\0\\2\end{bmatrix}=\frac{1}{\sqrt2}\begin{bmatrix}1\\0\\1\end{bmatrix}
$$
:::
3 · One non-zero singular value, so **rank 1**. $U$ is $3\times3$, $\Sigma$ is $3\times2$, $V$ is $2\times2$.
:::
:::

:::question Question 2 (3 marks)
Let $g(x,y)=(u,v)=(x+y,\ xy)$ and $f(u,v)=u^2+v$, and $h=f\circ g$.

1. Write the Jacobian of $g$. *(1 mark)*
2. Find $\partial h/\partial x$ with the chain rule (sum over paths), and check by substitution. *(2 marks)*

:::solution
:::steps
1 · One row per output ($u$, $v$), one column per input ($x$, $y$)
$$
J_g=\begin{bmatrix}1&1\\y&x\end{bmatrix}
$$
2 · Two paths from $x$ to $h$: through $u$ and through $v$
$$
\frac{\partial h}{\partial x}=\frac{\partial f}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial f}{\partial v}\frac{\partial v}{\partial x}=2u\cdot1+1\cdot y=2(x+y)+y
$$
Check by substituting first: $h=(x+y)^2+xy$
$$
\frac{\partial h}{\partial x}=2(x+y)+y\ \checkmark
$$
:::
:::
:::

:::question Question 3 (3 marks)
1. Points are uniform in a unit ball. What fraction lies within $\epsilon=0.05$ of the surface for $d=2$ and for $d=60$? *(2 marks)*
2. In one sentence: why can PCA still work on high-dimensional real data? *(1 mark)*

:::solution
:::steps
1 · Shell fraction $1-(1-\epsilon)^d$
$$
d=2:\ 1-0.95^2=0.0975\qquad\qquad d=60:\ 1-0.95^{60}\approx0.954
$$
:::
2 · Real data does not fill the space: it lies near a low-dimensional region, so a few directions of large variance describe it almost completely.
:::
:::

## More practice

- [L07 practice quizzes](l07-quiz.html) — SVD (7A–7C)
- [L08 practice quizzes](l08-quiz.html) — curse of dimensionality and PCA (8A–8C)
- [L09 practice quizzes](l09-quiz.html) — functions and differentiation (9A–9B); Taylor, convexity and GD (9C)

:::remember
SVD: eigen-decompose $A^\top A$, take square roots, then $u_i=Av_i/\sigma_i$. PCA: centre, covariance, top eigenvectors, $T_k$, error = dropped eigenvalues. Calculus: gradient, critical point, Hessian eigenvalues.
:::

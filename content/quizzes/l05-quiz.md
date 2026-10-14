# L05 · Practice quizzes — Regression and regularization

Three mock quizzes, **20 minutes / 10 marks**. The 2026 cohort has not yet had an in-class quiz on this lecture, so these follow the 2025 Quiz 3 (least-squares fit) and the 2024/2025 mid problems on ridge/lasso.

<div class="pdf-links">
<a href="l05-notes.html">L05 notes</a>
<a href="pdfs/past/Quiz-2025-3.pdf">2025 Quiz 3 (least squares)</a>
<a href="pdfs/psets/PSet-05-Solution.pdf">PSet 5 solutions</a>
<a href="pdfs/psets/PSet-06-Solution.pdf">PSet 6 solutions</a>
</div>

## Mock Quiz 5A

:::question Question 1 (5 marks)
Fit $\hat y=w_0+w_1x$ to $(x,y)=(0,1),(1,3),(2,4),(3,8)$.
(a) Write $X$, $w$, $y$ with shapes. (1)
(b) Solve the normal equations. (3)
(c) Verify that the residuals sum to zero and predict $y$ at $x=4$. (1)

:::solution
(a) $X=\begin{bmatrix}1&0\\1&1\\1&2\\1&3\end{bmatrix}$ ($4\times2$), $w=\begin{bmatrix}w_0\\w_1\end{bmatrix}$ ($2\times1$), $y=(1,3,4,8)$ ($4\times1$).
(b) $X^\top X=\begin{bmatrix}4&6\\6&14\end{bmatrix}$, $X^\top y=\begin{bmatrix}16\\35\end{bmatrix}$, $\det=56-36=20$,
$$
w=\frac1{20}\begin{bmatrix}14&-6\\-6&4\end{bmatrix}\begin{bmatrix}16\\35\end{bmatrix}=\frac1{20}\begin{bmatrix}224-210\\-96+140\end{bmatrix}=\begin{bmatrix}0.7\\2.2\end{bmatrix}.
$$
(c) $\hat y=(0.7,2.9,5.1,7.3)$, $e=(0.3,0.1,-1.1,0.7)$, sum $=0$ ✓. $\hat y(4)=0.7+8.8=9.5$.
:::
:::

:::question Question 2 (3 marks)
Derive the ridge solution for $\mathcal L(\theta)=\tfrac12\|y-X\theta\|_2^2+\tfrac\lambda2\|\theta\|_2^2$, and explain in one line why $X^\top X+\lambda I$ is invertible for every $\lambda>0$.

:::solution
$\nabla\mathcal L=-X^\top y+X^\top X\theta+\lambda\theta=0\Rightarrow(X^\top X+\lambda I)\theta=X^\top y\Rightarrow\theta=(X^\top X+\lambda I)^{-1}X^\top y$. *(2)*
For $v\neq0$: $v^\top(X^\top X+\lambda I)v=\|Xv\|^2+\lambda\|v\|^2>0$, so $(X^\top X+\lambda I)v\neq0$ — no non-zero null vector ⇒ invertible. *(1)*
:::
:::

:::question Question 3 (2 marks)
True/False with a reason: (a) A degree-9 polynomial fitted to 10 points with distinct $x$ has zero training error. (b) Lasso always produces a sparser solution than ridge for the same $\lambda$.

:::solution
(a) **True** — 10 parameters, 10 points, square invertible Vandermonde matrix ⇒ exact interpolation (overfitting).
(b) **False** as stated — the two $\lambda$'s aren't on the same scale and lasso may set nothing to zero if all $|b_j|>\lambda$; but lasso *can* produce exact zeros while ridge (for finite $\lambda$) never does.
:::
:::

## Mock Quiz 5B

:::question Question 1 (4 marks)
$X=\begin{bmatrix}1&0\\0&1\\1&1\end{bmatrix}$, $y=\begin{bmatrix}1\\2\\2\end{bmatrix}$.
(a) Compute the least-squares solution and the residual; verify $X^\top e=0$. (3)
(b) Interpret $X^\top e=0$ geometrically. (1)

:::solution
(a) $X^\top X=\begin{bmatrix}2&1\\1&2\end{bmatrix}$, $X^\top y=\begin{bmatrix}3\\4\end{bmatrix}$, inverse $\tfrac13\begin{bmatrix}2&-1\\-1&2\end{bmatrix}$ ⇒ $w=\tfrac13\begin{bmatrix}2\\5\end{bmatrix}$.
$\hat y=Xw=\tfrac13(2,5,7)$, $e=y-\hat y=\tfrac13(1,1,-1)$. $X^\top e=\tfrac13(1-1,\ 1-1)=0$ ✓.
(b) The residual is orthogonal to both columns, i.e. to the column space $\mathcal C(X)$: $\hat y$ is the orthogonal projection of $y$ onto $\mathcal C(X)$, the closest reachable point.
:::
:::

:::question Question 2 (3 marks)
Ridge with $X=\begin{bmatrix}1&0\\1&1\end{bmatrix}$, $y=\begin{bmatrix}1\\3\end{bmatrix}$, $\lambda=1$ (penalise both weights). Compute $w_{ridge}$ and compare with OLS.

:::solution
$X^\top X=\begin{bmatrix}2&1\\1&1\end{bmatrix}$, $+I=\begin{bmatrix}3&1\\1&2\end{bmatrix}$ ($\det 5$), inverse $\tfrac15\begin{bmatrix}2&-1\\-1&3\end{bmatrix}$; $X^\top y=\begin{bmatrix}4\\3\end{bmatrix}$ ⇒ $w_{ridge}=\tfrac15\begin{bmatrix}5\\5\end{bmatrix}=\begin{bmatrix}1\\1\end{bmatrix}$.
OLS ($X$ square invertible): $w_0=1$, $w_0+w_1=3\Rightarrow w=(1,2)$. Ridge shrinks the norm from $\sqrt5$ to $\sqrt2$ at the cost of a non-zero training error.
:::
:::

:::question Question 3 (3 marks)
One standardised feature with $a=\sum x_i^2=4$, $b=\sum x_iy_i=-6$. Give the OLS, ridge and lasso weights for $\lambda=2$ and for $\lambda=8$.

:::solution
OLS $=b/a=-1.5$ (both cases).
$\lambda=2$: ridge $-6/6=-1$; lasso $S(-6,2)/4=-4/4=-1$.
$\lambda=8$: ridge $-6/12=-0.5$; lasso $S(-6,8)=0$ since $|b|\le\lambda$ ⇒ **0**.
:::
:::

## Mock Quiz 5C

:::question Question 1 (4 marks)
Sensor data $(x,y)=(-1,3),(0,1),(1,1)$; an engineer fits a cubic $\hat y=w_0+w_1x+w_2x^2+w_3x^3$ (Worksheet 3).
(a) Shapes of $X$ and $X^\top X$; why is $(X^\top X)^{-1}$ undefined? (2)
(b) Give two different $w$ that fit exactly. (1)
(c) Highest degree for which the inverse exists, and the fit. (1)

:::solution
(a) $X=\begin{bmatrix}1&-1&1&-1\\1&0&0&0\\1&1&1&1\end{bmatrix}$ is $3\times4$; $X^\top X$ is $4\times4$ with rank $\le3$ ⇒ singular.
(b) $(1,-1,1,0)$ and $(1,0,1,-1)$ (check $x=-1$: $1+1+1=3$ and $1+0+1+1=3$; $x=0$: 1; $x=1$: $1-1+1=1$ and $1+1-1=1$).
(c) $M=2$: $X$ is $3\times3$ Vandermonde with distinct points ⇒ invertible; exact fit $\hat y=1-x+x^2$.
:::
:::

:::question Question 2 (3 marks)
A dataset of 100 points; true relationship is linear. You fit a linear and a cubic model.
(a) Which has lower training RSS? (1) (b) Which do you expect to have lower test RSS? (1) (c) If the truth were mildly non-linear, can you tell which has lower test RSS? (1)

:::solution
(a) Cubic (≤), since linear is a special case of cubic (nested). (b) Linear — the cubic adds variance without reducing bias. (c) Not determinable in advance; bias–variance balance — use validation.
:::
:::

:::question Question 3 (3 marks)
Sketch (in words) the constraint regions for ridge and lasso with two coefficients and explain why lasso gives exact zeros but ridge does not. What is the elastic net?

:::solution
Ridge: disc $\theta_1^2+\theta_2^2\le t$ — smooth, error ellipses touch it at a generic point (both weights non-zero). Lasso: diamond $|\theta_1|+|\theta_2|\le t$ with corners on the axes; the ellipses usually first touch a corner, where one coefficient is exactly 0 ⇒ sparse. Elastic net: $\tfrac12\|y-X\theta\|^2+\lambda_1\|\theta\|_1+\tfrac{\lambda_2}2\|\theta\|^2$ — both penalties; ridge and lasso are special cases; two hyper-parameters tuned on validation data.
:::
:::

:::remember
Regression quiz recipe: build $X$ with a ones column → $X^\top X$, $X^\top y$ → $2\times2$ inverse → $w$ → check residuals sum to zero (and $X^\top e=0$). For ridge add $\lambda$ to the diagonal first.
:::

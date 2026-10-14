# L05 · Practice quizzes — Regression and regularization

Three mock quizzes, **20 minutes and 10 marks** each. The 2026 cohort has not yet had an in-class quiz on this lecture, so these follow 2025 Quiz 3 (a least-squares fit) and the 2024 and 2025 mid-exam problems on ridge and lasso.

<div class="pdf-links">
<a href="l05-notes.html">L05 notes</a>
<a href="pdfs/past/Quiz-2025-3.pdf">2025 Quiz 3 (least squares)</a>
<a href="pdfs/psets/PSet-05-Solution.pdf">PSet 5 solutions</a>
<a href="pdfs/psets/PSet-06-Solution.pdf">PSet 6 solutions</a>
</div>

## Mock Quiz 5A

:::question Question 1 (5 marks)
Fit the line $\hat y=w_0+w_1x$ to the points $(0,1)$, $(1,3)$, $(2,4)$ and $(3,8)$.

1. Write $X$, $w$ and $y$, with their shapes. *(1 mark)*
2. Solve the normal equations. *(3 marks)*
3. Verify that the residuals sum to zero, and predict $y$ at $x=4$. *(1 mark)*

:::solution
1. The design matrix, parameters and targets are
$$
X=\begin{bmatrix}1&0\\1&1\\1&2\\1&3\end{bmatrix}\in\mathbb{R}^{4\times2},\qquad w=\begin{bmatrix}w_0\\w_1\end{bmatrix}\in\mathbb{R}^{2},\qquad y=\begin{bmatrix}1\\3\\4\\8\end{bmatrix}\in\mathbb{R}^{4}.
$$
2. **Step 1 — the normal equations.**
$$
X^\top X=\begin{bmatrix}4&6\\6&14\end{bmatrix},\qquad X^\top y=\begin{bmatrix}1+3+4+8\\0+3+8+24\end{bmatrix}=\begin{bmatrix}16\\35\end{bmatrix}.
$$
   **Step 2 — invert.** $\det(X^\top X)=56-36=20$, so
$$
(X^\top X)^{-1}=\frac{1}{20}\begin{bmatrix}14&-6\\-6&4\end{bmatrix}.
$$
   **Step 3 — solve.**
$$
w=\frac{1}{20}\begin{bmatrix}14&-6\\-6&4\end{bmatrix}\begin{bmatrix}16\\35\end{bmatrix}=\frac{1}{20}\begin{bmatrix}224-210\\-96+140\end{bmatrix}=\frac{1}{20}\begin{bmatrix}14\\44\end{bmatrix}=\boxed{\begin{bmatrix}0.7\\2.2\end{bmatrix}}.
$$
3. The fitted values are $\hat y=(0.7,\ 2.9,\ 5.1,\ 7.3)$, so the residuals are
$$
e=y-\hat y=(0.3,\ 0.1,\ -1.1,\ 0.7),\qquad 0.3+0.1-1.1+0.7=0 .
$$
   The prediction at $x=4$ is $\hat y=0.7+2.2\times4=\boxed{9.5}$.
:::
:::

:::question Question 2 (3 marks)
Derive the minimiser of $\mathcal L(\theta)=\tfrac12\|y-X\theta\|_2^2+\tfrac\lambda2\|\theta\|_2^2$, and explain in one line why $X^\top X+\lambda I$ is invertible for every $\lambda>0$.

:::solution
Setting the gradient to zero,
$$
\nabla\mathcal L(\theta)=-X^\top y+X^\top X\theta+\lambda\theta=\mathbf 0
\quad\Longrightarrow\quad
(X^\top X+\lambda I)\,\theta=X^\top y
\quad\Longrightarrow\quad
\boxed{\theta=(X^\top X+\lambda I)^{-1}X^\top y}.
$$
*(2 marks.)* For every $v\neq\mathbf 0$,
$$
v^\top(X^\top X+\lambda I)\,v=\|Xv\|^2+\lambda\|v\|^2>0 ,
$$
so $(X^\top X+\lambda I)v\neq\mathbf 0$: the matrix has no non-zero null vector and is therefore invertible. *(1 mark.)*
:::
:::

:::question Question 3 (2 marks)
Decide whether each statement is true or false, with a reason.

1. A polynomial of degree $9$ fitted to $10$ points with distinct $x$-values has zero training error.
2. For the same value of $\lambda$, the lasso always produces a sparser solution than ridge.

:::solution
1. **True.** There are ten parameters and ten points, and the square Vandermonde matrix is invertible, so the polynomial interpolates the data exactly — a textbook case of overfitting.
2. **False as stated.** The two $\lambda$'s are not on the same scale, and the lasso sets nothing to zero if every $|b_j|>\lambda$. What *is* true is that the lasso *can* produce exact zeros, whereas ridge never does for finite $\lambda$.
:::
:::

## Mock Quiz 5B

:::question Question 1 (4 marks)
Let $X=\begin{bmatrix}1&0\\0&1\\1&1\end{bmatrix}$ and $y=\begin{bmatrix}1\\2\\2\end{bmatrix}$.

1. Compute the least-squares solution and the residual, and verify that $X^\top e=\mathbf 0$. *(3 marks)*
2. Interpret $X^\top e=\mathbf 0$ geometrically. *(1 mark)*

:::solution
1. **Step 1.**
$$
X^\top X=\begin{bmatrix}2&1\\1&2\end{bmatrix},\qquad X^\top y=\begin{bmatrix}1+0+2\\0+2+2\end{bmatrix}=\begin{bmatrix}3\\4\end{bmatrix},\qquad (X^\top X)^{-1}=\frac13\begin{bmatrix}2&-1\\-1&2\end{bmatrix}.
$$
   **Step 2.**
$$
w=\frac13\begin{bmatrix}2&-1\\-1&2\end{bmatrix}\begin{bmatrix}3\\4\end{bmatrix}=\frac13\begin{bmatrix}2\\5\end{bmatrix}.
$$
   **Step 3.** The fitted values and residual are
$$
\hat y=Xw=\frac13\begin{bmatrix}2\\5\\7\end{bmatrix},\qquad e=y-\hat y=\frac13\begin{bmatrix}1\\1\\-1\end{bmatrix},
\qquad
X^\top e=\frac13\begin{bmatrix}1+0-1\\0+1-1\end{bmatrix}=\begin{bmatrix}0\\0\end{bmatrix}.
$$
2. The residual is orthogonal to both columns of $X$, hence to the whole column space $\mathcal C(X)$. So $\hat y$ is the **orthogonal projection** of $y$ onto $\mathcal C(X)$ — the closest point to $y$ that the model can reach.
:::
:::

:::question Question 2 (3 marks)
Compute the ridge estimate for $X=\begin{bmatrix}1&0\\1&1\end{bmatrix}$, $y=\begin{bmatrix}1\\3\end{bmatrix}$ and $\lambda=1$, penalising both weights, and compare it with ordinary least squares.

:::solution
**Ridge.**
$$
X^\top X=\begin{bmatrix}2&1\\1&1\end{bmatrix},\qquad X^\top X+I=\begin{bmatrix}3&1\\1&2\end{bmatrix},\qquad \det=5,\qquad X^\top y=\begin{bmatrix}4\\3\end{bmatrix},
$$
$$
w_{\mathrm{ridge}}=\frac15\begin{bmatrix}2&-1\\-1&3\end{bmatrix}\begin{bmatrix}4\\3\end{bmatrix}=\frac15\begin{bmatrix}5\\5\end{bmatrix}=\boxed{\begin{bmatrix}1\\1\end{bmatrix}}.
$$
**OLS.** $X$ is square and invertible, so the fit is exact: $w_0=1$ and $w_0+w_1=3$, giving $w_{\mathrm{OLS}}=(1,2)$.

Ridge shrinks the norm of the weights from $\sqrt5\approx2.24$ to $\sqrt2\approx1.41$, at the cost of a non-zero training error.
:::
:::

:::question Question 3 (3 marks)
A single standardised feature has $a=\sum_ix_i^2=4$ and $b=\sum_ix_iy_i=-6$. Give the OLS, ridge and lasso weights for $\lambda=2$ and for $\lambda=8$.

:::solution
The three formulas are $w_{\mathrm{OLS}}=b/a$, $w_{\mathrm{ridge}}=b/(a+\lambda)$ and $w_{\mathrm{lasso}}=\operatorname{sign}(b)\max(|b|-\lambda,0)/a$.

- OLS (for either $\lambda$): $w=-6/4=-1.5$.
- $\lambda=2$: ridge $-6/6=-1$; lasso $-(6-2)/4=-1$.
- $\lambda=8$: ridge $-6/12=-0.5$; lasso $0$, because $|b|=6\le\lambda=8$.
:::
:::

## Mock Quiz 5C

:::question Question 1 (4 marks)
A sensor gives readings $(x,y)=(-1,3)$, $(0,1)$ and $(1,1)$, and an engineer fits a cubic $\hat y=w_0+w_1x+w_2x^2+w_3x^3$ (Worksheet 3).

1. Give the shapes of $X$ and $X^\top X$, and explain why $(X^\top X)^{-1}$ does not exist. *(2 marks)*
2. Give two different weight vectors $w$ that fit the data exactly. *(1 mark)*
3. What is the highest degree for which the inverse is guaranteed to exist, and what is the resulting fit? *(1 mark)*

:::solution
1. The design matrix is
$$
X=\begin{bmatrix}1&-1&1&-1\\1&0&0&0\\1&1&1&1\end{bmatrix}\in\mathbb{R}^{3\times4},
$$
so $X^\top X$ is $4\times4$. Its rank is at most $\operatorname{rank}X\le3<4$, so it is singular.
2. Both $w=(1,-1,1,0)$ and $w=(1,0,1,-1)$ fit exactly. For example, at $x=-1$ the first gives $1+1+1=3$ and the second $1+0+1+1=3$; at $x=0$ both give $1$; at $x=1$ the first gives $1-1+1=1$ and the second $1+0+1-1=1$.
3. **Degree $2$.** Then $X$ is a $3\times3$ Vandermonde matrix with distinct nodes, which is invertible, and the exact fit is $\hat y=1-x+x^2$.
:::
:::

:::question Question 2 (3 marks)
A data set has $100$ points, and the true relationship is linear. You fit both a linear and a cubic model.

1. Which model has the lower training RSS? *(1 mark)*
2. Which do you expect to have the lower test RSS? *(1 mark)*
3. If the truth were mildly non-linear, could you say in advance which model has the lower test RSS? *(1 mark)*

:::solution
1. **The cubic** (or a tie): the linear model is the special case of the cubic with the extra coefficients zero, so the cubic can never fit the training data worse.
2. **The linear model**: the cubic's extra terms add variance without reducing bias.
3. **No.** The answer depends on the balance between bias and variance, which must be settled with validation data.
:::
:::

:::question Question 3 (3 marks)
Describe the constraint regions of ridge and lasso for two coefficients, and explain why the lasso gives exact zeros while ridge does not. What is the elastic net?

:::solution
- **Ridge** constrains the coefficients to the disc $\theta_1^2+\theta_2^2\le t$. The disc is smooth, so the error ellipses touch it at a generic point, where both coefficients are non-zero.
- **The lasso** constrains them to the diamond $|\theta_1|+|\theta_2|\le t$, whose corners lie on the axes. The ellipses usually make first contact at a corner, where one coefficient is exactly zero — a sparse solution.
- **The elastic net** minimises
$$
\tfrac12\|y-X\theta\|^2+\lambda_1\|\theta\|_1+\tfrac{\lambda_2}{2}\|\theta\|_2^2 ,
$$
which contains ridge and the lasso as special cases and has two hyper-parameters, both tuned on validation data.
:::
:::

:::remember
The regression quiz recipe: build $X$ with a column of ones; form $X^\top X$ and $X^\top y$; invert the $2\times2$ matrix; compute $w$; and check that the residuals sum to zero (and that $X^\top e=\mathbf 0$). For ridge, add $\lambda$ to the diagonal first.
:::

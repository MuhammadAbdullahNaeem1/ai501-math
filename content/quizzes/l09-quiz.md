# L09 · Practice quizzes — Multivariate & matrix calculus

Three mock quizzes, **20 minutes and 10 marks** each: partial derivatives, gradients of linear and quadratic forms, Jacobians, Hessians, the chain rule and Taylor expansions.

<div class="pdf-links">
<a href="l09-notes.html">L09 notes</a>
</div>

## Mock Quiz 9A

:::question Question 1 (5 marks)
Let $f(x,y)=x^3y+2xy^2-y$.

1. Compute $\nabla f$ and evaluate it at $(1,2)$. *(2 marks)*
2. Compute the Hessian at $(1,2)$ and check that it is symmetric. *(2 marks)*
3. In which unit direction does $f$ increase fastest at $(1,2)$? *(1 mark)*

:::solution
1. $f_x=3x^2y+2y^2$ and $f_y=x^3+4xy-1$, so $\nabla f(1,2)=(6+8,\ 1+8-1)=(14,\ 8)$.
2. $f_{xx}=6xy=12$, $f_{xy}=3x^2+4y=11$, $f_{yx}=3x^2+4y=11$, $f_{yy}=4x=4$:
$$
H(1,2)=\begin{bmatrix}12&11\\11&4\end{bmatrix},
$$
   symmetric since $f_{xy}=f_{yx}$.
3. Along the gradient: $u=\dfrac{(14,8)}{\sqrt{196+64}}=\dfrac{(14,8)}{\sqrt{260}}=\dfrac{(7,4)}{\sqrt{65}}$.
:::
:::

:::question Question 2 (3 marks)
Let $P=\begin{bmatrix}1&2\\0&3\end{bmatrix}$ and $f(x)=x^\top Px$.

1. Expand $f$ in $x_1,x_2$ and compute $\nabla f$ directly. *(1 mark)*
2. Show that this agrees with $(P+P^\top)x$, and explain why $2Px$ would be wrong here. *(2 marks)*

:::solution
1. $f=x_1^2+2x_1x_2+3x_2^2$, so $\nabla f=(2x_1+2x_2,\ 2x_1+6x_2)$.
2. $(P+P^\top)x=\begin{bmatrix}2&2\\2&6\end{bmatrix}x=(2x_1+2x_2,\ 2x_1+6x_2)$ ✓. But $2Px=(2x_1+4x_2,\ 6x_2)$, which is wrong: $\nabla(x^\top Px)=2Px$ holds only for **symmetric** $P$.
:::
:::

:::question Question 3 (2 marks)
Give the domain and range of (a) $f(x)=\log(1+x^2)$ and (b) $g(x)=e^{-2x}$.

:::solution
(a) $1+x^2\ge1>0$ for every $x$, so the domain is $\mathbb R$; since $1+x^2$ takes every value in $[1,\infty)$, the range is $[0,\infty)$. (b) Domain $\mathbb R$, range $(0,\infty)$ — an exponential is never $\le0$.
:::
:::

## Mock Quiz 9B

:::question Question 1 (3 marks)
Let $f:\mathbb R^2\to\mathbb R^3$, $f(x,y)=(xy,\ x+y,\ x^2)$. Give the size of the Jacobian, compute it, and evaluate it at $(1,2)$.

:::solution
$3\times2$ (rows = outputs, columns = inputs):
$$
J=\begin{bmatrix}y&x\\1&1\\2x&0\end{bmatrix},\qquad J(1,2)=\begin{bmatrix}2&1\\1&1\\2&0\end{bmatrix}.
$$
:::
:::

:::question Question 2 (4 marks)
Let $f(x,y)=e^{x+2y}$.

1. Find $f$, $\nabla f$ and $H$ at $(0,0)$. *(2 marks)*
2. Write the second-order Taylor approximation at $(0,0)$ and use it to estimate $f(0.1,0)$. *(2 marks)*

:::solution
1. $f(0,0)=1$, $\nabla f=e^{x+2y}(1,2)\Rightarrow(1,2)$, $H=e^{x+2y}\begin{bmatrix}1&2\\2&4\end{bmatrix}\Rightarrow\begin{bmatrix}1&2\\2&4\end{bmatrix}$.
2. $f\approx1+x+2y+\tfrac12(x^2+4xy+4y^2)$. At $(0.1,0)$: $1+0.1+0.005=1.105$ (true $e^{0.1}\approx1.10517$).
:::
:::

:::question Question 3 (3 marks)
Let $f(x,y)=xy$ with $x=t^2$ and $y=3t$. Find $df/dt$ with the chain rule, and check it by substituting first.

:::solution
$\dfrac{df}{dt}=f_x\dfrac{dx}{dt}+f_y\dfrac{dy}{dt}=y(2t)+x(3)=6t^2+3t^2=9t^2$. Directly, $f=3t^3$, so $df/dt=9t^2$ ✓.
:::
:::

## Mock Quiz 9C

:::question Question 1 (5 marks)
Let $L(w)=\|Xw-y\|^2$ with $X\in\mathbb R^{n\times d}$.

1. Expand $L$ and compute $\nabla L$. *(2 marks)*
2. Compute the Hessian and show that it is positive semi-definite. *(2 marks)*
3. Set the gradient to zero and give the minimiser when $X$ has independent columns. *(1 mark)*

:::solution
1. $L=w^\top X^\top Xw-2y^\top Xw+y^\top y$. With $\nabla(w^\top Pw)=2Pw$ for symmetric $P=X^\top X$ and $\nabla(a^\top w)=a$ for $a=X^\top y$: $\nabla L=2X^\top Xw-2X^\top y=2X^\top(Xw-y)$.
2. $H=2X^\top X$, and $v^\top Hv=2\|Xv\|^2\ge0$ for every $v$: PSD (PD when the columns are independent).
3. $X^\top Xw=X^\top y\Rightarrow w^\star=(X^\top X)^{-1}X^\top y$ — the normal equations of L05.
:::
:::

:::question Question 2 (3 marks)
Using index sums, show that $\nabla_x(a^\top x)=a$ and $\nabla_x(x^\top x)=2x$.

:::solution
$a^\top x=\sum_ia_ix_i$, so $\partial/\partial x_k$ kills every term except $a_kx_k$: the $k$-th entry is $a_k$, i.e. $\nabla=a$ *(1 mark)*. $x^\top x=\sum_ix_i^2$, so $\partial/\partial x_k=2x_k$ and $\nabla=2x$ *(2 marks; 1 for the method, 1 for the result)*.
:::
:::

:::question Question 3 (2 marks)
True or false, with a reason.

1. The Jacobian of $f:\mathbb R^3\to\mathbb R^2$ is a $3\times2$ matrix.
2. For a function with continuous second derivatives, the Hessian is symmetric.

:::solution
1. **False.** It is $m\times n=2\times3$: one row per output, one column per input.
2. **True.** The mixed partials are equal, $\partial^2f/\partial x_i\partial x_j=\partial^2f/\partial x_j\partial x_i$ (Schwarz/Clairaut).
:::
:::

:::remember
Quiz recipe: partials one variable at a time → gradient as a column → Hessian from the gradient (check symmetry); Jacobian is outputs × inputs; $\nabla(x^\top Px)=(P+P^\top)x$; Taylor = value + gradient term + ½ Hessian term.
:::

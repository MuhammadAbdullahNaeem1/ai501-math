# L09 · Practice quizzes — Vector calculus

Three mock quizzes, **20 minutes and 10 marks** each. **9A and 9B** cover functions and differentiation — the scope of this week's quiz. **9C** covers Taylor series (optional this week), convexity and gradient descent (not in this week's quiz). Every number below has been checked by hand.

<div class="pdf-links">
<a href="l09-notes.html">L09 notes</a>
<a href="pdfs/psets/Worksheet-04.pdf">Tutorial Worksheet 4</a>
<a href="pdfs/psets/PSet-08.pdf">PSet 8</a>
<a href="quiz6-prep.html">Quiz 6 prep page</a>
</div>

## Mock Quiz 9A — functions and derivatives

:::question Question 1 (3 marks)
1. A layer computes $f(x)=\sigma(Wx+b)$ with $W\in\mathbb{R}^{4\times6}$ and the sigmoid $\sigma(u)=\frac{1}{1+e^{-u}}$ applied to each entry. Give $n$, $m$ and the co-domain. Is the image equal to the co-domain? *(2 marks)*
2. Give the domain and the image of $g(x)=x^2+1$, $g:\mathbb{R}\to\mathbb{R}$. *(1 mark)*

:::solution
1. $Wx$ needs $x\in\mathbb{R}^6$ and returns $\mathbb{R}^4$: $n=6$, $m=4$, co-domain $\mathbb{R}^4$. **No:** every entry of a sigmoid lies strictly between 0 and 1, so the image is inside $(0,1)^4$ — e.g. $(2,0,0,0)$ is never produced.
2. Domain $\mathbb{R}$; image $[1,\infty)$ (since $x^2\ge0$), smaller than the co-domain $\mathbb{R}$.
:::
:::

:::question Question 2 (4 marks)
Differentiate:

1. $x^3e^x$ *(1 mark)*
2. $\dfrac{\ln x}{x}$ *(1 mark)*
3. $\sin(x^2)$ *(1 mark)*
4. $f=x_1^2+x_2$ with $x_1=st$ and $x_2=s+t$: find $\partial f/\partial s$ with the path rule, and check by substitution. *(1 mark)*

:::solution
1. Product rule: $3x^2e^x+x^3e^x=x^2e^x(3+x)$.
2. Quotient rule: $\dfrac{\frac1x\cdot x-\ln x\cdot1}{x^2}=\dfrac{1-\ln x}{x^2}$.
3. Chain rule (outer $\sin u$, inner $u=x^2$): $\cos(x^2)\cdot2x$.
4. Paths: $\dfrac{\partial f}{\partial x_1}\dfrac{\partial x_1}{\partial s}+\dfrac{\partial f}{\partial x_2}\dfrac{\partial x_2}{\partial s}=2x_1\cdot t+1\cdot1=2st^2+1$. Check: $f=s^2t^2+s+t$, so $\partial f/\partial s=2st^2+1$ ✓.
:::
:::

:::question Question 3 (3 marks)
Let $f(x)=x^2+x$ and $x_0=2$.

1. Write the slope of the secant through $x_0$ and $x_0+\Delta x$, and simplify. *(2 marks)*
2. Evaluate it for $\Delta x=0.1$, and find $f'(2)$ from the limit. *(1 mark)*

:::solution
1.
$$
\frac{f(2+\Delta x)-f(2)}{\Delta x}=\frac{(4+4\Delta x+\Delta x^2)+(2+\Delta x)-6}{\Delta x}=\frac{5\Delta x+\Delta x^2}{\Delta x}=5+\Delta x .
$$
2. $\Delta x=0.1$: slope $5.1$. As $\Delta x\to0$, the slope $\to5$, so $f'(2)=5$ (check: $f'(x)=2x+1$).
:::
:::

## Mock Quiz 9B — gradient, Jacobian, Hessian

:::question Question 1 (4 marks)
Let $f(x,y)=x^3-3x+y^2$.

1. Find $\nabla f$ and all critical points. *(2 marks)*
2. Find the Hessian and classify each critical point using its eigenvalues. *(2 marks)*

:::solution
1. $\nabla f=\begin{bmatrix}3x^2-3\\2y\end{bmatrix}=\mathbf 0\Rightarrow x=\pm1,\ y=0$: critical points $(1,0)$ and $(-1,0)$.
2.
$$
H=\begin{bmatrix}6x&0\\0&2\end{bmatrix}.
$$
   At $(1,0)$: $H=\operatorname{diag}(6,2)$, both eigenvalues positive — **local minimum**. At $(-1,0)$: $H=\operatorname{diag}(-6,2)$, mixed signs — **saddle point**.
:::
:::

:::question Question 2 (3 marks)
1. Find the Jacobian of $f(x,y)=(xy,\ x+y^2,\ e^x)$, give its shape, and evaluate it at $(0,1)$. *(2 marks)*
2. What is the Jacobian of $f(x)=Ax$ for $A\in\mathbb{R}^{m\times n}$? *(1 mark)*

:::solution
1. One row per output, one column per input — $3\times2$:
$$
J=\begin{bmatrix}y&x\\1&2y\\e^x&0\end{bmatrix},\qquad J(0,1)=\begin{bmatrix}1&0\\1&2\\1&0\end{bmatrix}.
$$
2. $J=A$ (an $m\times n$ matrix): row $i$ of $Ax$ is $a_i^\top x$, whose gradient is $a_i$.
:::
:::

:::question Question 3 (3 marks)
Let $f(x)=x^\top Px+a^\top x$ with $P=\begin{bmatrix}2&1\\1&3\end{bmatrix}$ and $a=\begin{bmatrix}1\\-1\end{bmatrix}$.

1. Write $\nabla f$ in matrix form and evaluate it at $x=(1,1)$. *(2 marks)*
2. Give the Hessian. Is it positive definite? *(1 mark)*

:::solution
1. $\nabla f=2Px+a$ ($P$ symmetric). At $(1,1)$: $Px=(3,4)$, so $\nabla f=(6,8)+(1,-1)=\mathbf{(7,\ 7)}$.
2. $H=2P=\begin{bmatrix}4&2\\2&6\end{bmatrix}$: trace $10$, determinant $24-4=20>0$, so both eigenvalues are positive ($5\pm\sqrt5$) — **positive definite** (the function is a bowl).
:::
:::

## Mock Quiz 9C — Taylor (optional), convexity and gradient descent (not this week)

:::question Question 1 (3 marks)
1. Write $T_2$ for $e^x$ at $0$ and use it to estimate $e^{0.1}$. *(1 mark)*
2. For $f(x,y)=x^2y$ at $a=(1,1)$, write the second-order Taylor polynomial and use it to estimate $f(1.1,\ 0.9)$. Compare with the exact value. *(2 marks)*

:::solution
1. $T_2=1+x+\tfrac{x^2}{2}$; $T_2(0.1)=1.105$ (true $1.10517$).
2. $f(a)=1$; $\nabla f=(2xy,\ x^2)=(2,1)$; $H=\begin{bmatrix}2y&2x\\2x&0\end{bmatrix}=\begin{bmatrix}2&2\\2&0\end{bmatrix}$. With $\delta=(x-1,\ y-1)$:
$$
T_2=1+2\delta_1+\delta_2+\tfrac12(2\delta_1^2+4\delta_1\delta_2)=1+2\delta_1+\delta_2+\delta_1^2+2\delta_1\delta_2 .
$$
   At $\delta=(0.1,-0.1)$: $1+0.2-0.1+0.01-0.02=1.09$. Exact: $1.21\times0.9=1.089$ — off by $0.001$.
:::
:::

:::question Question 2 (4 marks)
Run gradient descent on $\mathcal L(\theta)=2\theta^2-4\theta$.

1. Where is the minimum? *(1 mark)*
2. Starting at $\theta_0=0$ with $\alpha=0.1$, compute $\theta_1$ and $\theta_2$. *(2 marks)*
3. For which $\alpha$ does it converge, and which $\alpha$ reaches the minimum in one step? *(1 mark)*

:::solution
1. $\mathcal L'(\theta)=4\theta-4=0\Rightarrow\theta^\ast=1$ (and $\mathcal L''=4>0$: a minimum).
2. $\theta_1=0-0.1(-4)=0.4$; $\theta_2=0.4-0.1(1.6-4)=0.4+0.24=0.64$.
3. $\theta_{k+1}-1=(1-4\alpha)(\theta_k-1)$, so it converges iff $|1-4\alpha|<1$, i.e. $0<\alpha<0.5$ ($=2/\mathcal L''$). $\alpha=0.25$ makes the factor zero: one step.
:::
:::

:::question Question 3 (3 marks)
True or False, with a one-line reason:

1. $|x|=\max(x,-x)$ is convex.
2. $x^3$ is convex on $\mathbb{R}$.
3. For a convex function every local minimum is a global minimum.

:::solution
1. **True** — the pointwise maximum of two linear (convex) functions.
2. **False** — $(x^3)''=6x<0$ for $x<0$. (It is convex on $x\ge0$.)
3. **True** — if a lower point existed, the chord towards it would lie below $f(x)$ arbitrarily close to $x$.
:::
:::

:::remember
The calculus quiz recipe: partial derivatives → $\nabla f$ → set to $\mathbf 0$ for critical points → Hessian (the Jacobian of $\nabla f$) → its eigenvalues: all $>0$ minimum, all $<0$ maximum, mixed saddle. Jacobian: one row per output. $\nabla x^\top Px=2Px$, $J_{Ax}=A$.
:::

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
:::steps
1 · $Wx$ needs 6 inputs and gives 4 outputs
$$
n=6,\qquad m=4,\qquad \text{co-domain }\mathbb{R}^4,\qquad \text{image}\subseteq(0,1)^4
$$
2 · Since $x^2\ge0$
$$
\text{domain }\mathbb{R},\qquad \text{image }[1,\infty)
$$
:::
The image is **not** the whole co-domain: a sigmoid never outputs a value outside $(0,1)$, e.g. $(2,0,0,0)$ is never produced.
:::
:::

:::question Question 2 (4 marks)
Differentiate:

1. $x^3e^x$ *(1 mark)*
2. $\dfrac{\ln x}{x}$ *(1 mark)*
3. $\sin(x^2)$ *(1 mark)*
4. $f=x_1^2+x_2$ with $x_1=st$ and $x_2=s+t$: find $\partial f/\partial s$ with the path rule, and check by substitution. *(1 mark)*

:::solution
:::steps
1 · Product rule $(fg)'=f'g+fg'$
$$
\frac{d}{dx}\big(x^3e^x\big)=3x^2e^x+x^3e^x=x^2e^x(3+x)
$$
2 · Quotient rule $\big(\frac fg\big)'=\frac{f'g-fg'}{g^2}$
$$
\frac{d}{dx}\Big(\frac{\ln x}{x}\Big)=\frac{\frac1x\cdot x-\ln x\cdot1}{x^2}=\frac{1-\ln x}{x^2}
$$
3 · Chain rule: outer $\sin u$, inner $u=x^2$
$$
\frac{d}{dx}\sin(x^2)=\cos(x^2)\cdot2x
$$
4 · Two paths from $s$ to $f$
$$
\frac{\partial f}{\partial s}=\underbrace{2x_1}_{\partial f/\partial x_1}\cdot\underbrace{t}_{\partial x_1/\partial s}+\underbrace{1}_{\partial f/\partial x_2}\cdot\underbrace{1}_{\partial x_2/\partial s}=2st^2+1
$$
Check: substitute first, $f=s^2t^2+s+t$
$$
\frac{\partial f}{\partial s}=2st^2+1\ \checkmark
$$
:::
:::
:::

:::question Question 3 (3 marks)
Let $f(x)=x^2+x$ and $x_0=2$.

1. Write the slope of the secant through $x_0$ and $x_0+\Delta x$, and simplify. *(2 marks)*
2. Evaluate it for $\Delta x=0.1$, and find $f'(2)$ from the limit. *(1 mark)*

:::solution
:::steps
1 · Secant slope
$$
\frac{f(2+\Delta x)-f(2)}{\Delta x}=\frac{(4+4\Delta x+\Delta x^2)+(2+\Delta x)-6}{\Delta x}=5+\Delta x
$$
2 · At $\Delta x=0.1$, and in the limit
$$
5.1\qquad\qquad f'(2)=\lim_{\Delta x\to0}(5+\Delta x)=5
$$
:::
:::
:::

## Mock Quiz 9B — gradient, Jacobian, Hessian

:::question Question 1 (4 marks)
Let $f(x,y)=x^3-3x+y^2$.

1. Find $\nabla f$ and all critical points. *(2 marks)*
2. Find the Hessian and classify each critical point using its eigenvalues. *(2 marks)*

:::solution
:::steps
1 · Gradient, set to zero
$$
\nabla f=\begin{bmatrix}3x^2-3\\2y\end{bmatrix}=\begin{bmatrix}0\\0\end{bmatrix}\quad\Longrightarrow\quad x=\pm1,\quad y=0
$$
2 · Hessian
$$
H=\begin{bmatrix}6x&0\\0&2\end{bmatrix}
$$
At $(1,0)$: both eigenvalues positive
$$
H=\begin{bmatrix}6&0\\0&2\end{bmatrix}\quad\Longrightarrow\quad\text{minimum}
$$
At $(-1,0)$: mixed signs
$$
H=\begin{bmatrix}-6&0\\0&2\end{bmatrix}\quad\Longrightarrow\quad\text{saddle}
$$
:::
:::
:::

:::question Question 2 (3 marks)
1. Find the Jacobian of $f(x,y)=(xy,\ x+y^2,\ e^x)$, give its shape, and evaluate it at $(0,1)$. *(2 marks)*
2. What is the Jacobian of $f(x)=Ax$ for $A\in\mathbb{R}^{m\times n}$? *(1 mark)*

:::solution
:::steps
1 · One row per output, one column per input ($3\times2$)
$$
J=\begin{bmatrix}y&x\\1&2y\\e^x&0\end{bmatrix}\qquad\qquad J(0,1)=\begin{bmatrix}1&0\\1&2\\1&0\end{bmatrix}
$$
2 · Row $i$ of $Ax$ is $a_i^\top x$, whose gradient is $a_i$
$$
J_{Ax}=A
$$
:::
:::
:::

:::question Question 3 (3 marks)
Let $f(x)=x^\top Px+a^\top x$ with $P=\begin{bmatrix}2&1\\1&3\end{bmatrix}$ and $a=\begin{bmatrix}1\\-1\end{bmatrix}$.

1. Write $\nabla f$ in matrix form and evaluate it at $x=(1,1)$. *(2 marks)*
2. Give the Hessian. Is it positive definite? *(1 mark)*

:::solution
:::steps
1 · Gradient ($P$ symmetric), then plug in $x=(1,1)$
$$
\nabla f=2Px+a=2\begin{bmatrix}3\\4\end{bmatrix}+\begin{bmatrix}1\\-1\end{bmatrix}=\begin{bmatrix}7\\7\end{bmatrix}
$$
2 · Hessian: trace $10$, determinant $20$, eigenvalues $5\pm\sqrt5$
$$
H=2P=\begin{bmatrix}4&2\\2&6\end{bmatrix}\qquad\Longrightarrow\qquad\text{positive definite}
$$
:::
:::
:::

## Mock Quiz 9C — Taylor (optional), convexity and gradient descent (not this week)

:::question Question 1 (3 marks)
1. Write $T_2$ for $e^x$ at $0$ and use it to estimate $e^{0.1}$. *(1 mark)*
2. For $f(x,y)=x^2y$ at $a=(1,1)$, write the second-order Taylor polynomial and use it to estimate $f(1.1,\ 0.9)$. Compare with the exact value. *(2 marks)*

:::solution
:::steps
1 · Every derivative of $e^x$ at 0 is 1
$$
T_2=1+x+\frac{x^2}{2}\qquad\qquad T_2(0.1)=1.105
$$
2 · Value, gradient and Hessian at $(1,1)$
$$
f=1\qquad \nabla f=\begin{bmatrix}2xy\\x^2\end{bmatrix}=\begin{bmatrix}2\\1\end{bmatrix}\qquad H=\begin{bmatrix}2y&2x\\2x&0\end{bmatrix}=\begin{bmatrix}2&2\\2&0\end{bmatrix}
$$
Height + tilt + bend, with $\delta=(x-1,\ y-1)$
$$
T_2=1+2\delta_1+\delta_2+\delta_1^2+2\delta_1\delta_2
$$
At $\delta=(0.1,\ -0.1)$, against the exact $1.21\times0.9$
$$
T_2=1.09\qquad\qquad f(1.1,0.9)=1.089
$$
:::
:::
:::

:::question Question 2 (4 marks)
Run gradient descent on $\mathcal L(\theta)=2\theta^2-4\theta$.

1. Where is the minimum? *(1 mark)*
2. Starting at $\theta_0=0$ with $\alpha=0.1$, compute $\theta_1$ and $\theta_2$. *(2 marks)*
3. For which $\alpha$ does it converge, and which $\alpha$ reaches the minimum in one step? *(1 mark)*

:::solution
:::steps
1 · Set the derivative to zero
$$
\mathcal L'(\theta)=4\theta-4=0\quad\Longrightarrow\quad\theta^\ast=1
$$
2 · Two steps of $\theta\leftarrow\theta-\alpha\,\mathcal L'(\theta)$
$$
\theta_1=0-0.1(-4)=0.4\qquad\qquad \theta_2=0.4-0.1(1.6-4)=0.64
$$
3 · The distance to the minimum is multiplied by $1-4\alpha$ each step
$$
\theta_{k+1}-1=(1-4\alpha)(\theta_k-1)\quad\Longrightarrow\quad 0<\alpha<0.5,\qquad \alpha=0.25\ \text{in one step}
$$
:::
:::
:::

:::question Question 3 (3 marks)
True or False, with a one-line reason:

1. $|x|=\max(x,-x)$ is convex.
2. $x^3$ is convex on $\mathbb{R}$.
3. For a convex function every local minimum is a global minimum.

:::solution
1. **True** — the maximum of two linear (convex) functions.
2. **False** — $(x^3)''=6x<0$ for $x<0$.
3. **True** — a lower point would put the chord below $f(x)$ arbitrarily close to $x$.
:::
:::

:::remember
Calculus recipe: partial derivatives → $\nabla f$ → set to $\mathbf 0$ → Hessian → eigenvalues: all $>0$ minimum, all $<0$ maximum, mixed saddle.
:::

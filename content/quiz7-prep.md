# Quiz 7 prep — affine & convex, and gradient descent

**Syllabus:** L09 slides **23–50** — Taylor series (23–26), **convex functions** (27–34) and **gradient descent** with SGD and mini-batches (35–50) — plus the **last four problems of Problem Set 8** (Problems 6–9), all explained in depth below.

<div class="pdf-links">
<a href="l09-notes.html#8-convex-functions-when-there-is-only-one-valley">L09 notes §8–10</a>
<a href="pdfs/lectures/L09-Vector-Calculus.pdf#page=23">Slides 23–50 (PDF)</a>
<a href="pdfs/psets/PSet-08.pdf">Problem Set 8 (PDF)</a>
<a href="pdfs/revision/R10-Vector-Calculus.pdf">Revision notes 10</a>
<a href="l09-quiz.html">L09 practice quizzes</a>
</div>

## Slide map

| Slides | Topic | Notes |
|---|---|---|
| 23–26 | Taylor series: 1-D, $T_n$, the $\sin x+\cos x$ figure, second order in many variables | [L09 §7](l09-notes.html#7-the-taylor-series-a-local-map-of-the-ground) |
| 28 | Convex function: the chord lies above the graph | [L09 §8](l09-notes.html#8-convex-functions-when-there-is-only-one-valley) |
| 29 | Jensen's inequality $f(\mathbb E X)\le\mathbb E f(X)$ | L09 §8 |
| 30 | Examples: linear, quadratic, $e^x$, $-\log x$, norms | L09 §8 |
| 31 | Operations that keep convexity: weighted sum, **affine** composition, pointwise max | L09 §8 |
| 32–33 | First-order test (tangent below) and second-order test (Hessian PSD) | L09 §8 |
| 34 | The least-squares loss is convex | L09 §8 |
| 36–40 | Optimisation problem; gradient descent; update rule; step size | [L09 §9](l09-notes.html#9-gradient-descent-walking-downhill) |
| 41–44 | Linear regression by gradient descent; batch GD, epochs, why not the closed form | L09 §9 |
| 45–49 | SGD, cyclic vs random selection, mini-batch SGD, the comparison table | [L09 §10](l09-notes.html#10-stochastic-and-mini-batch-gradient-descent) |
| 50 | Summary | L09 §11 |

## Part 1 — affine and convex, from the ground up

### Combinations of points

Everything starts from mixing points with weights $\theta_i$:

:::steps
A combination of points $x_1,\dots,x_k$
$$
y=\theta_1x_1+\theta_2x_2+\cdots+\theta_kx_k
$$
Affine combination: the weights add to 1
$$
\theta_1+\cdots+\theta_k=1
$$
Convex combination: the weights add to 1 **and** none is negative
$$
\theta_1+\cdots+\theta_k=1,\qquad \theta_i\ge0
$$
:::

For **two** points the picture is the whole story:

:::steps
Write the mix with one weight $\theta$
$$
y=\theta x+(1-\theta)\,z
$$
:::

- **Affine** (any $\theta$, even $1.5$ or $-2$): $y$ runs along the **whole line** through $x$ and $z$.
- **Convex** ($0\le\theta\le1$): $y$ stays on the **segment** between $x$ and $z$. $\theta=1$ gives $x$, $\theta=0$ gives $z$, $\theta=\tfrac12$ the midpoint.

:::example Affine but not convex
With $x=-1$, $z=3$:
:::steps
$\theta=0.25$ (convex: between 0 and 1)
$$
y=0.25(-1)+0.75(3)=2\qquad\text{inside the segment }[-1,3]
$$
$\theta=1.5$ (affine only: weights $1.5$ and $-0.5$ still add to 1)
$$
y=1.5(-1)+(-0.5)(3)=-3\qquad\text{outside the segment, but on the line}
$$
:::
:::

### Affine functions and convex sets

:::def Affine function
$$
f(x)=a^\top x+b
$$
a flat function: a line, plane or hyperplane, shifted by $b$. It keeps affine combinations exactly:
$$
f\big(\theta x+(1-\theta)y\big)=\theta f(x)+(1-\theta)f(y)
$$
— with **equality**, so an affine function is **both convex and concave**.
:::

:::def Convex set
A set $S$ is convex if the segment between any two of its points stays inside it: $x,y\in S$ and $0\le\theta\le1$ ⇒ $\theta x+(1-\theta)y\in S$. A disc, a line, a half-plane and all of $\mathbb{R}^n$ are convex; a ring (annulus) or two separate blobs are not. The **domain** of a convex function must be a convex set.
:::

### Convex functions (slides 28–29)

:::def Convex function
$f$ is convex if for all $x,y$ in its domain and all $\theta\in[0,1]$
$$
f\big(\theta x+(1-\theta)y\big)\ \le\ \theta f(x)+(1-\theta)f(y)
$$
Left side: $f$ **at** the mixed point (a point on the curve). Right side: the same mix of the two **heights** (a point on the chord). The chord lies on or above the curve.
:::

:::example Checking the definition with numbers: $f(x)=x^2$, $x=-1$, $y=3$, $\theta=0.25$
:::steps
The mixed point and the height of the curve there
$$
\theta x+(1-\theta)y=2\qquad\qquad f(2)=4
$$
The height of the chord at the same place
$$
\theta f(x)+(1-\theta)f(y)=0.25(1)+0.75(9)=7
$$
Curve below chord
$$
4\le7\ \checkmark
$$
:::
:::

**Concave** is the mirror image (chord below): $f$ is concave exactly when $-f$ is convex.

**Jensen's inequality (slide 29).** For convex $f$ and a random variable $X$:

:::result
$$
f\big(\mathbb E[X]\big)\ \le\ \mathbb E\big[f(X)\big]
$$
:::

With $X=x_1$ or $x_2$ at probability $\tfrac12$ each this is just the definition with $\theta=\tfrac12$. *Example:* $X\in\{1,3\}$, $f(x)=x^2$: $f(\mathbb EX)=f(2)=4$ and $\mathbb Ef(X)=\tfrac12(1+9)=5$. The gap $5-4=1$ is the variance of $X$.

**Why convexity matters:** for a convex function **every local minimum is a global minimum**, so gradient descent cannot get stuck in a worse valley.

### Three tests you can actually use (slides 32–33)

:::steps
1-D curvature test: the slope never decreases
$$
f''(x)\ge0\ \text{ for all }x
$$
Many variables: the Hessian is positive semi-definite everywhere ($\succ0$ gives strictly convex)
$$
\nabla^2f(x)\succeq0\qquad\Longleftrightarrow\qquad\text{all eigenvalues of the Hessian}\ \ge0
$$
First-order test: the graph lies above every tangent plane
$$
f(y)\ \ge\ f(x)+\nabla f(x)^\top(y-x)
$$
:::

For a $2\times2$ Hessian: positive definite ⇔ **trace $>0$ and determinant $>0$**.

### Examples (slide 30) and operations (slide 31)

| Function | Convex? | Why |
|---|---|---|
| $a^\top x+b$ (affine) | yes, and concave | second derivative $0$ |
| $x^\top Qx+b^\top x+c$ | yes if $Q\succeq0$ | Hessian $2Q$ |
| $e^x$ | yes | $(e^x)''=e^x>0$ |
| $-\log x$ ($x>0$) | yes | $(-\log x)''=1/x^2>0$ |
| $\log x$, $\sqrt x$ | **no — concave** | second derivative $<0$ |
| $\|x\|_p$, $p\ge1$; $\lvert x\rvert$ | yes | triangle inequality (kink at 0 is fine) |
| $\max(0,\ 1-y\,w^\top x)$ (hinge) | yes | max of two affine functions |
| $x^3$ on $\mathbb{R}$; $\sin x$ | **no** | second derivative changes sign |

**Operations that keep convexity:**

:::steps
Non-negative weighted sum (ridge = convex + convex)
$$
g(x)=\alpha_1f_1(x)+\cdots+\alpha_kf_k(x),\qquad \alpha_i\ge0
$$
Composition with an **affine** map (least squares = norm of $X\theta-y$)
$$
g(x)=f(Ax+b)
$$
Pointwise maximum (hinge loss)
$$
g(x)=\max\{f_1(x),\dots,f_k(x)\}
$$
:::

**Operations that do *not* keep convexity:** the difference $f-g$, the product $fg$, the minimum $\min\{f,g\}$ (see PSet 8 P7 below).

:::example Three quick convexity checks
:::steps
$f(x,y)=x^2+xy+y^2$: Hessian, trace $4$, determinant $3$
$$
H=\begin{bmatrix}2&1\\1&2\end{bmatrix},\quad \lambda=3,\ 1>0\qquad\Longrightarrow\qquad\text{strictly convex}
$$
$f(x,y)=x^2-4xy+y^2$: determinant $4-16<0$
$$
H=\begin{bmatrix}2&-4\\-4&2\end{bmatrix},\quad \lambda=6,\ -2\qquad\Longrightarrow\qquad\text{not convex (saddle)}
$$
$g(x)=(2x+1)^2+e^x+\lvert x\rvert$: convex $u^2$ of an affine map, plus convex, plus convex
$$
\text{convex}
$$
:::
:::

**The least-squares loss is convex (slide 34):**

:::steps
Its Hessian is constant
$$
f(\theta)=\tfrac12\|X\theta-y\|^2\qquad\Longrightarrow\qquad \nabla^2f=X^\top X
$$
And $X^\top X$ is PSD for every direction $z$
$$
z^\top X^\top Xz=(Xz)^\top(Xz)=\|Xz\|^2\ge0
$$
:::

So every minimum gradient descent finds on a least-squares loss is the global one.

## Part 2 — gradient descent (slides 36–50)

### The rule

:::steps
Optimisation problem (slide 36); in this course, no constraints
$$
\min_{\theta}\ \mathcal L(\theta)
$$
Update every parameter against the sign of its derivative — all at the same time
$$
\theta\ \leftarrow\ \theta-\alpha\,\nabla\mathcal L(\theta),\qquad \alpha>0
$$
Stop when the gradient is (almost) zero, or the loss barely changes
$$
\|\nabla\mathcal L(\theta)\|<\varepsilon
$$
:::

**Why the minus sign:** if $\partial\mathcal L/\partial\theta_i>0$, increasing $\theta_i$ increases the loss, so we decrease it; if it is $<0$ we increase it. **Simultaneous update:** compute the whole gradient at the current $\theta$ first, then change every parameter.

### The step size $\alpha$ (slides 38–40)

:::example $\mathcal L(\theta)=\theta^2$ from $\theta_0=2$
:::steps
One step multiplies $\theta$ by a fixed factor
$$
\mathcal L'(\theta)=2\theta\qquad\Longrightarrow\qquad \theta\leftarrow\theta-2\alpha\theta=(1-2\alpha)\,\theta
$$
Three choices of $\alpha$
$$
\alpha=0.05:\ \times0.9\ (\text{slow})\qquad \alpha=0.4:\ \times0.2\ (\text{fast})\qquad \alpha=1.05:\ \times(-1.1)\ (\text{diverges})
$$
Converges exactly when the factor has size below 1
$$
|1-2\alpha|<1\quad\Longleftrightarrow\quad0<\alpha<1
$$
:::
:::

**General rule:** for a loss with curvature (second derivative, or largest Hessian eigenvalue) $\lambda_{\max}$:

:::result
$$
\text{gradient descent converges}\quad\Longleftrightarrow\quad 0<\alpha<\frac{2}{\lambda_{\max}}
$$
:::

Too small $\alpha$: slow. Too large: overshoots and may diverge. A small $\lambda_{\min}$ (a long narrow valley) makes the last part slow and zig-zaggy.

### Linear regression by gradient descent (slides 41–43)

:::steps
Loss: half the mean squared error
$$
\mathcal L(\theta_0,\theta_1)=\frac{1}{2n}\sum_{i=1}^n\big(\theta_0+\theta_1x_i-y_i\big)^2
$$
Partial derivatives, with the residual $r_i=\theta_0+\theta_1x_i-y_i$
$$
\frac{\partial\mathcal L}{\partial\theta_0}=\frac1n\sum_ir_i\qquad\qquad \frac{\partial\mathcal L}{\partial\theta_1}=\frac1n\sum_ir_i\,x_i
$$
Simultaneous update
$$
\theta_0\leftarrow\theta_0-\frac{\alpha}{n}\sum_ir_i\qquad\qquad \theta_1\leftarrow\theta_1-\frac{\alpha}{n}\sum_ir_ix_i
$$
:::

:::example Two steps on the delivery data $(1,13),(2,17),(3,23),(4,27)$ with $\alpha=0.1$
:::steps
Step 1 · at $(0,0)$ the residuals are $-y_i$
$$
r=(-13,-17,-23,-27)\qquad \bar r=-20\qquad \overline{rx}=\tfrac14(-13-34-69-108)=-56
$$
Update
$$
\theta=\begin{bmatrix}0\\0\end{bmatrix}-0.1\begin{bmatrix}-20\\-56\end{bmatrix}=\begin{bmatrix}2\\5.6\end{bmatrix}
$$
Step 2 · residuals $2+5.6x_i-y_i$
$$
r=(-5.4,-3.8,-4.2,-2.6)\qquad \bar r=-4\qquad \overline{rx}=\tfrac14(-5.4-7.6-12.6-10.4)=-9
$$
Update
$$
\theta=\begin{bmatrix}2\\5.6\end{bmatrix}-0.1\begin{bmatrix}-4\\-9\end{bmatrix}=\begin{bmatrix}2.4\\6.5\end{bmatrix}
$$
:::
The loss falls $214.5\to8.5\to2.82$. The answer is $(8,\ 4.8)$, so many more (small) steps follow.
:::

**Why gradient descent when a closed form exists (slide 44):** the closed form $(X^\top X)^{-1}X^\top y$ inverts a $d\times d$ matrix, $\mathcal O(d^3)$; one gradient step costs $\mathcal O(nd)$ — cheaper when $d$ is large, easy to implement, and it works for losses with no closed form at all.

### Batch, stochastic and mini-batch (slides 44–49)

:::steps
Batch GD: average the gradient over **all** $n$ points
$$
w\leftarrow w-\alpha\,\frac1n\sum_{i=1}^n\nabla g(x_i,w,y_i)
$$
SGD: **one** point $i$ per update (random, or cyclic $1,2,\dots,n$ with a shuffle each epoch)
$$
w\leftarrow w-\alpha\,\nabla g(x_i,w,y_i)
$$
Mini-batch SGD: a random subset $\mathcal S$ of $k\ll n$ points — divide by $k$
$$
w\leftarrow w-\alpha\,\frac1k\sum_{i\in\mathcal S}\nabla g(x_i,w,y_i)
$$
:::

| | batch GD | SGD | mini-batch |
|---|---|---|---|
| points per update | $n$ | $1$ | $k$ |
| cost per update | $\mathcal O(nd)$ | $\mathcal O(d)$ | $\mathcal O(kd)$ |
| updates per epoch | $1$ | $n$ | $n/k$ |
| gradient | exact | very noisy | mildly noisy |

An **epoch** is one pass over the whole dataset. SGD with random selection is an **unbiased** estimate of the true gradient; its cost per update does not depend on $n$; its noise can help escape a poor local minimum; and it works for **online learning** (data arriving in a stream). Shuffle the order every epoch, otherwise a fixed sequence of updates can cancel out.

:::example One SGD step for linear regression
Point $(x,y)=(1,13)$, start $(0,0)$, $\alpha=0.1$:
:::steps
Residual of this one point
$$
r=0+0\cdot1-13=-13
$$
Update both parameters with this point only
$$
\theta_0\leftarrow0-0.1(-13)=1.3\qquad\qquad \theta_1\leftarrow0-0.1(-13)(1)=1.3
$$
:::
:::

## Part 3 — Problem Set 8, Problems 6–9, in depth

### Problem 6 — a convex quadratic and its minimum

:::orig [PSet 8 · Problem 6 ↗](pdfs/psets/PSet-08.pdf#page=1)
Let $f(x)=\tfrac12x^\top Qx+c^\top x$ with $Q=\begin{pmatrix}2&1\\1&4\end{pmatrix}$ and $c=\begin{pmatrix}5\\3\end{pmatrix}$. (a) Compute the Hessian of $f$ and its eigenvalues. Is $f$ convex? (b) Find the minimiser $x^\ast$.
:::

**The idea.** For a quadratic, the Hessian is the constant matrix $Q$. If $Q$ is positive definite, $f$ is a bowl (strictly convex), and its single lowest point is where the gradient is zero.

:::steps
(a) Gradient: $\nabla(\tfrac12x^\top Qx)=Qx$ for symmetric $Q$, and $\nabla(c^\top x)=c$
$$
\nabla f(x)=Qx+c
$$
Differentiate once more: the Hessian is $Q$, the same at every $x$
$$
\nabla^2f=Q=\begin{bmatrix}2&1\\1&4\end{bmatrix}
$$
Eigenvalues: trace $6$, determinant $2\cdot4-1=7$
$$
\lambda^2-6\lambda+7=0\quad\Longrightarrow\quad\lambda=3\pm\sqrt2\approx4.41,\ 1.59
$$
:::

Both eigenvalues are positive, so $Q\succ0$ everywhere: $f$ is **strictly convex**, and it has exactly one minimiser.

:::steps
(b) Set the gradient to zero
$$
Qx^\ast+c=\mathbf 0\qquad\Longrightarrow\qquad x^\ast=-Q^{-1}c
$$
Invert the $2\times2$: swap the diagonal, negate the off-diagonal, divide by $\det Q=7$
$$
Q^{-1}=\frac17\begin{bmatrix}4&-1\\-1&2\end{bmatrix}
$$
Multiply
$$
x^\ast=-\frac17\begin{bmatrix}4&-1\\-1&2\end{bmatrix}\begin{bmatrix}5\\3\end{bmatrix}=-\frac17\begin{bmatrix}17\\1\end{bmatrix}=\begin{bmatrix}-17/7\\-1/7\end{bmatrix}
$$
Check: $Qx^\ast$ must equal $-c$
$$
Qx^\ast=\frac17\begin{bmatrix}2(-17)+1(-1)\\1(-17)+4(-1)\end{bmatrix}=\frac17\begin{bmatrix}-35\\-21\end{bmatrix}=\begin{bmatrix}-5\\-3\end{bmatrix}=-c\ \checkmark
$$
:::

### Problem 7 — which operations keep convexity

:::orig [PSet 8 · Problem 7 ↗](pdfs/psets/PSet-08.pdf#page=1)
For each statement, decide whether it is true for convex functions $f,g:\mathbb{R}\to\mathbb{R}$. Prove it or give a counterexample. (a) The sum $f+g$ is convex. (b) The difference $f-g$ is convex. (c) The product $fg$ is convex. (d) The maximum $\max\{f,g\}$ is convex.
:::

Write $m=\theta x+(1-\theta)y$ for the mixed point, with $0\le\theta\le1$.

**(a) Sum — TRUE.** Add the two convexity inequalities:

:::steps
The two given facts
$$
f(m)\le\theta f(x)+(1-\theta)f(y)\qquad\qquad g(m)\le\theta g(x)+(1-\theta)g(y)
$$
Add them
$$
(f+g)(m)\le\theta\,(f+g)(x)+(1-\theta)\,(f+g)(y)
$$
:::

That is exactly the definition for $f+g$. (The same works for any non-negative weights.)

**(b) Difference — FALSE.** One counterexample is enough:

:::steps
Take two convex functions
$$
f(x)=0\qquad g(x)=x^2
$$
Their difference curves down
$$
f-g=-x^2,\qquad (-x^2)''=-2<0\quad\Longrightarrow\quad\text{concave, not convex}
$$
:::

**(c) Product — FALSE.**

:::steps
Both convex: a line and a parabola
$$
f(x)=x\qquad g(x)=x^2
$$
The product bends down for negative $x$
$$
fg=x^3,\qquad (x^3)''=6x<0\ \text{ for }x<0
$$
:::

**(d) Maximum — TRUE.** Let $h=\max\{f,g\}$. Each of $f,g$ is at most $h$ everywhere, so:

:::steps
Use convexity of $f$, then $f\le h$
$$
f(m)\le\theta f(x)+(1-\theta)f(y)\le\theta h(x)+(1-\theta)h(y)
$$
Same for $g$
$$
g(m)\le\theta h(x)+(1-\theta)h(y)
$$
So the larger of the two is also below that bound
$$
h(m)=\max\{f(m),g(m)\}\le\theta h(x)+(1-\theta)h(y)
$$
:::

### Problem 8 — regularised least squares

:::orig [PSet 8 · Problem 8 ↗](pdfs/psets/PSet-08.pdf#page=2)
Let $X\in\mathbb{R}^{N\times D}$, $y\in\mathbb{R}^N$ and $\lambda>0$. Define $\mathcal L(\theta)=\tfrac1N\|y-X\theta\|^2+\lambda\|\theta\|^2$. (a) Compute $\nabla\mathcal L(\theta)$. (b) Show that $\mathcal L$ is convex. (c) Write the gradient descent update for $\mathcal L$, and give the closed-form minimiser.
:::

**(a) The gradient.** Expand the squared norm, then use the standard gradients $\nabla(\theta^\top P\theta)=2P\theta$ and $\nabla(a^\top\theta)=a$.

:::steps
Expand $\|y-X\theta\|^2=(y-X\theta)^\top(y-X\theta)$
$$
\|y-X\theta\|^2=\theta^\top X^\top X\theta-2\,y^\top X\theta+y^\top y
$$
Differentiate term by term ($X^\top X$ is symmetric; $y^\top y$ is a constant)
$$
\nabla\|y-X\theta\|^2=2X^\top X\theta-2X^\top y=2X^\top(X\theta-y)
$$
The penalty $\|\theta\|^2=\theta^\top\theta$ has gradient $2\theta$, so
$$
\nabla\mathcal L(\theta)=\frac2N\,X^\top(X\theta-y)+2\lambda\,\theta
$$
:::

**(b) Convex — second-order test.**

:::steps
Differentiate the gradient once more
$$
\nabla^2\mathcal L=\frac2N\,X^\top X+2\lambda I
$$
Test it in any direction $z\neq\mathbf 0$
$$
z^\top\nabla^2\mathcal L\,z=\frac2N\|Xz\|^2+2\lambda\|z\|^2>0
$$
:::

The Hessian is positive definite everywhere, so $\mathcal L$ is (strictly) convex — a single global minimum.

**(c) Update and closed form.**

:::steps
Gradient-descent update
$$
\theta\leftarrow\theta-\alpha\Big[\frac2NX^\top(X\theta-y)+2\lambda\theta\Big]
$$
Closed form: set the gradient to zero and multiply by $N/2$
$$
X^\top X\theta-X^\top y+N\lambda\,\theta=\mathbf 0\qquad\Longrightarrow\qquad \big(X^\top X+N\lambda I\big)\,\theta=X^\top y
$$
:::

:::result Answer
$$
\theta^\ast=\big(X^\top X+N\lambda I\big)^{-1}X^\top y
$$
:::

This is ridge regression with penalty $N\lambda$ (the $\tfrac1N$ in front of the error moves the $N$ onto $\lambda$). $X^\top X+N\lambda I$ is always invertible because it is positive definite.

### Problem 9 — SGD, cost per update, and when gradient descent converges

:::orig [PSet 8 · Problem 9 ↗](pdfs/psets/PSet-08.pdf#page=2)
(a) For a loss $\mathcal L(\theta)=\sum_{n=1}^N\mathcal L_n(\theta)$, write the stochastic gradient descent update with mini-batch size one. (b) For a dataset of $N$ points in $D$ dimensions, compare the cost per update of batch gradient descent and of stochastic gradient descent. (c) For the quadratic in Problem 6, gradient descent is $x_{k+1}=x_k-\gamma(Qx_k+c)$. Compute $x_1$ starting from $x_0=\mathbf 0$ with $\gamma=0.1$. For which values of $\gamma$ does the iteration converge?
:::

:::steps
(a) Pick one index $n$ (at random) and step with that term only
$$
\theta\leftarrow\theta-\alpha\,\nabla\mathcal L_n(\theta)
$$
(b) Cost per update
$$
\text{batch: }\mathcal O(ND)\qquad\qquad \text{SGD: }\mathcal O(D)
$$
:::

Batch touches every one of the $N$ points (each a $D$-vector) before moving; SGD touches one.

**(c) One step, then the convergence condition.**

:::steps
At $x_0=\mathbf 0$ the gradient is just $c$
$$
x_1=\mathbf 0-0.1\,(Q\mathbf 0+c)=-0.1\begin{bmatrix}5\\3\end{bmatrix}=\begin{bmatrix}-0.5\\-0.3\end{bmatrix}
$$
(One more, for practice: the gradient at $x_1$)
$$
Qx_1+c=\begin{bmatrix}-1-0.3+5\\-0.5-1.2+3\end{bmatrix}=\begin{bmatrix}3.7\\1.3\end{bmatrix}\qquad x_2=\begin{bmatrix}-0.87\\-0.43\end{bmatrix}
$$
:::

Why the condition comes out as it does: measure the error from the minimiser, $e_k=x_k-x^\ast$. Since $Qx^\ast+c=\mathbf 0$:

:::steps
Subtract $x^\ast$ from both sides of the update
$$
e_{k+1}=e_k-\gamma\,Qe_k=(I-\gamma Q)\,e_k
$$
Along each eigenvector of $Q$ the error is multiplied by $1-\gamma\lambda_i$; it shrinks only if
$$
|1-\gamma\lambda_i|<1\quad\Longleftrightarrow\quad0<\gamma<\frac{2}{\lambda_i}
$$
The largest eigenvalue $3+\sqrt2$ is the binding one
$$
0<\gamma<\frac{2}{3+\sqrt2}\approx0.453
$$
:::

$\gamma=0.1$ is safely inside, so the iteration converges to $x^\ast=(-17/7,\ -1/7)$.

## Mock Quiz 7A (20 minutes, 10 marks)

:::question Question 1 (3 marks)
True or False, with a one-line reason:

1. An affine function $f(x)=a^\top x+b$ is convex.
2. The maximum of two convex functions is convex.
3. The difference of two convex functions is convex.

:::solution
1. **True** — the definition holds with equality (it is convex and concave).
2. **True** — pointwise maximum keeps convexity (slide 31).
3. **False** — $0-x^2=-x^2$ is concave.
:::
:::

:::question Question 2 (3 marks)
Let $f(x,y)=2x^2+2xy+y^2-4x$. Show that $f$ is strictly convex and find its minimiser.

:::solution
:::steps
Hessian: trace $6$, determinant $8-4=4>0$
$$
H=\begin{bmatrix}4&2\\2&2\end{bmatrix},\qquad \lambda=3\pm\sqrt5>0\quad\Longrightarrow\quad\text{strictly convex}
$$
Set the gradient to zero
$$
\nabla f=\begin{bmatrix}4x+2y-4\\2x+2y\end{bmatrix}=\begin{bmatrix}0\\0\end{bmatrix}
$$
The second row gives $y=-x$; then $4x-2x-4=0$
$$
x^\ast=2,\qquad y^\ast=-2
$$
:::
Because $f$ is strictly convex, this critical point is the **global** minimum.
:::
:::

:::question Question 3 (4 marks)
Gradient descent on $\mathcal L(\theta)=3\theta^2-6\theta+1$.

1. Find the minimiser. *(1 mark)*
2. From $\theta_0=0$ with $\alpha=0.1$, compute $\theta_1$ and $\theta_2$. *(2 marks)*
3. For which $\alpha$ does it converge? Which $\alpha$ reaches the minimum in one step? *(1 mark)*

:::solution
:::steps
1 · Derivative to zero
$$
\mathcal L'(\theta)=6\theta-6=0\quad\Longrightarrow\quad\theta^\ast=1
$$
2 · Two updates $\theta\leftarrow\theta-\alpha\mathcal L'(\theta)$
$$
\theta_1=0-0.1(-6)=0.6\qquad\qquad \theta_2=0.6-0.1(3.6-6)=0.84
$$
3 · The error is multiplied by $1-6\alpha$ every step
$$
\theta_{k+1}-1=(1-6\alpha)(\theta_k-1)\quad\Longrightarrow\quad0<\alpha<\tfrac13,\qquad \alpha=\tfrac16\ \text{in one step}
$$
:::
:::
:::

## Mock Quiz 7B (20 minutes, 10 marks)

:::question Question 1 (3 marks)
Let $x=-1$ and $z=3$.

1. For $\theta=0.25$, is $\theta x+(1-\theta)z$ a convex combination? Compute it. *(1 mark)*
2. For $\theta=1.5$, compute it and say whether it is affine, convex, both or neither. *(1 mark)*
3. Verify the convexity inequality for $f(t)=t^2$ at $\theta=0.25$. *(1 mark)*

:::solution
:::steps
1 · $0\le0.25\le1$: convex (and affine)
$$
0.25(-1)+0.75(3)=2
$$
2 · Weights $1.5$ and $-0.5$ add to 1 but one is negative: affine only
$$
1.5(-1)-0.5(3)=-3
$$
3 · Curve at the mixed point against the chord
$$
f(2)=4\ \le\ 0.25\,f(-1)+0.75\,f(3)=0.25+6.75=7\ \checkmark
$$
:::
:::
:::

:::question Question 2 (3 marks)
Fit $\hat y=\theta_0+\theta_1x$ to the points $(1,2)$ and $(2,4)$ by gradient descent on $\mathcal L=\frac{1}{2n}\sum(\theta_0+\theta_1x_i-y_i)^2$. Do one step from $(0,0)$ with $\alpha=0.1$, and compare the loss before and after.

:::solution
:::steps
Residuals at $(0,0)$
$$
r_1=-2,\qquad r_2=-4
$$
Partial derivatives: average of $r_i$ and of $r_ix_i$
$$
\frac{\partial\mathcal L}{\partial\theta_0}=\frac{-2-4}{2}=-3\qquad \frac{\partial\mathcal L}{\partial\theta_1}=\frac{-2\cdot1-4\cdot2}{2}=-5
$$
Simultaneous update
$$
\theta=\begin{bmatrix}0\\0\end{bmatrix}-0.1\begin{bmatrix}-3\\-5\end{bmatrix}=\begin{bmatrix}0.3\\0.5\end{bmatrix}
$$
Loss before and after (new residuals $-1.2$ and $-2.7$)
$$
\mathcal L_0=\frac{4+16}{4}=5\qquad\qquad \mathcal L_1=\frac{1.44+7.29}{4}\approx2.18
$$
:::
:::
:::

:::question Question 3 (4 marks)
A dataset has $n=50{,}000$ points with $d=20$ features.

1. How many updates happen in one epoch of batch GD, SGD, and mini-batch SGD with $k=50$? *(1 mark)*
2. What is the cost per update of each? *(1 mark)*
3. Do one SGD step for linear regression on the point $(x,y)=(2,4)$ from $(\theta_0,\theta_1)=(0,0)$ with $\alpha=0.1$. *(1 mark)*
4. Why shuffle the data after every epoch? *(1 mark)*

:::solution
:::steps
1 · Updates per epoch: $1$, $n$, $n/k$
$$
1\qquad 50{,}000\qquad \frac{50{,}000}{50}=1{,}000
$$
2 · Cost per update: $nd$, $d$, $kd$
$$
10^6\qquad 20\qquad 1{,}000
$$
3 · Residual of this point, then update both parameters
$$
r=0+0\cdot2-4=-4\qquad \theta_0=0-0.1(-4)=0.4\qquad \theta_1=0-0.1(-4)(2)=0.8
$$
:::
4 · With a fixed order the same sequence of updates repeats every epoch and the updates can partly cancel each other, stalling learning.
:::
:::

:::remember
Affine combination: weights add to 1; convex combination: also non-negative. Convex function: chord above, $f''\ge0$ / Hessian PSD; kept by non-negative sums, affine composition and max — not by difference, product or min. Gradient descent: $\theta\leftarrow\theta-\alpha\nabla\mathcal L$, converges iff $0<\alpha<2/\lambda_{\max}$. SGD: one point, $\mathcal O(d)$, $n$ updates per epoch; mini-batch: $k$ points, divide by $k$, $n/k$ updates.
:::

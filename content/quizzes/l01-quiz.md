# L01 · Practice quizzes — Vectors

Three mock quizzes in the exact format of the 2026 in-class quizzes: **20 minutes, 10 marks**, a mix of tick-box/True–False with justification, short computations and one longer problem. Attempt each on paper with a timer, then open the solutions.

<div class="pdf-links">
<a href="l01-notes.html">L01 notes</a>
<a href="pdfs/quizzes/Quiz-1-Solution.pdf">Real Quiz 1 (2026)</a>
<a href="pdfs/quizzes/Quiz-2-Solution.pdf">Real Quiz 2 (2026)</a>
<a href="pdfs/quizzes/Quiz-3-Solution.pdf">Real Quiz 3 (2026)</a>
<a href="pdfs/past/Quiz-2025-1.pdf">2025 Quiz 1</a>
</div>

:::exam What the real quizzes on this lecture looked like
Quiz 1: unit vector opposite to $v$ (3 marks), "is one feature redundant?" — write it as a linear combination (4 marks). Quiz 2: correlation of two vectors (3), total inventory value $c^\top q$ (2), find $u^\top v$ from three norms (2), sketch unit balls for $p=1,2,\infty$ (3). Quiz 3: geometric description of a span (1), Gram–Schmidt on two vectors (5). 2025 Quiz 1: subspace or not with one-line reasons; "which must be true" for unit vectors with $\langle u,v\rangle=\alpha$.
:::

## Mock Quiz 1A

:::question Question 1 (3 marks)
For each statement, tick True or False and give a one-line justification (0.5 for the tick, 0.5 for the reason).

(i) If $u^\top v<0$ then the angle between $u$ and $v$ is obtuse.
(ii) Every orthogonal set of vectors is linearly independent.
(iii) $\|x\|_\infty\le\|x\|_2$ for every $x\in\mathbb{R}^n$.

:::solution
(i) **True.** $u^\top v=\|u\|\|v\|\cos\theta<0\Rightarrow\cos\theta<0\Rightarrow\theta\in(90^\circ,180^\circ]$.
(ii) **False.** An orthogonal set may contain $\mathbf 0$ (it is orthogonal to everything), and any set containing $\mathbf 0$ is dependent. True only for orthogonal **non-zero** vectors.
(iii) **True.** $\|x\|_\infty^2=\max_i x_i^2\le\sum_i x_i^2=\|x\|_2^2$.
*Marking:* 1 per part (0.5 tick, 0.5 justification).
:::
:::

:::question Question 2 (3 marks)
Let $u,v\in\mathbb{R}^n$ be unit vectors with $u^\top v=\alpha$.
(a) Show that $\|u-v\|_2^2=2(1-\alpha)$. (2)
(b) For which value of $\alpha$ are $u$ and $v$ farthest apart, and what is $v$ then? (1)

:::solution
(a) $\|u-v\|^2=(u-v)^\top(u-v)=u^\top u-2u^\top v+v^\top v=1-2\alpha+1=2(1-\alpha)$. *(1 for expansion, 1 for substituting unit norms.)*
(b) By Cauchy–Schwarz $\alpha\in[-1,1]$, so the distance is largest at $\alpha=-1$, where $\|u-v\|=2$ and equality in Cauchy–Schwarz gives $v=-u$. *(1)*
:::
:::

:::question Question 3 (4 marks)
Apply Gram–Schmidt to $a_1=(1,2,2)$, $a_2=(3,3,0)$ to obtain orthonormal $q_1,q_2$. Verify $q_1^\top q_2=0$.

:::solution
$\|a_1\|=\sqrt{1+4+4}=3$, so $q_1=\tfrac13(1,2,2)$. *(1)*
$q_1^\top a_2=\tfrac13(3+6+0)=3$. $\tilde q_2=a_2-3q_1=(3,3,0)-(1,2,2)=(2,1,-2)$. *(1.5)*
$\|\tilde q_2\|=\sqrt{4+1+4}=3$, $q_2=\tfrac13(2,1,-2)$. *(1)*
Check: $q_1^\top q_2=\tfrac19(2+2-4)=0$ ✓ *(0.5)*
:::
:::

## Mock Quiz 1B

:::question Question 1 (2 marks)
Decide whether each set is a subspace of $\mathbb{R}^3$; give a one-line reason.
(a) $\{(x,y,z): x-2y+z=0\}$ (b) $\{(x,y,z): x\ge 0\}$

:::solution
(a) **Yes** — it is the null space of the row $(1,-2,1)$: contains $0$, and if two vectors satisfy the equation so do their sums and multiples. It is a plane through the origin.
(b) **No** — $(1,0,0)$ is in the set but $(-1)(1,0,0)$ is not: fails closure under scalar multiplication.
:::
:::

:::question Question 2 (4 marks)
A 100-vector $x$ gives the number of people of each age $0,1,\dots,99$ ($x_i$ = number aged $i-1$). Using vector notation (define every vector you use), write:
(a) the total population; (b) the number of people aged 18–59 inclusive; (c) the average age; (d) the fraction of the population aged 60 or over.

:::solution
(a) $\mathbf 1^\top x$. *(1)*
(b) $g^\top x$ where $g\in\mathbb{R}^{100}$ has $g_i=1$ for $i=19,\dots,60$ and 0 otherwise (age $=i-1$). *(1)*
(c) $\dfrac{a^\top x}{\mathbf 1^\top x}$ with $a=(0,1,\dots,99)$. *(1)*
(d) $\dfrac{h^\top x}{\mathbf 1^\top x}$ with $h_i=1$ for $i=61,\dots,100$, else 0. *(1)*
*(Deduct 0.5 per part if the indicator vector is not defined.)*
:::
:::

:::question Question 3 (4 marks)
$x=(2,4,6,8)$, $y=(5,3,1,-1)$.
(a) Compute $\operatorname{avg}(x)$, $\operatorname{std}(x)$, $\operatorname{rms}(x)$ and verify $\operatorname{rms}^2=\operatorname{avg}^2+\operatorname{std}^2$. (2)
(b) Compute the correlation coefficient of $x$ and $y$ and interpret it. (2)

:::solution
(a) $\bar x=5$; $\tilde x=(-3,-1,1,3)$, $\operatorname{std}=\sqrt{(9+1+1+9)/4}=\sqrt5$; $\operatorname{rms}=\sqrt{(4+16+36+64)/4}=\sqrt{30}$. Check $30=25+5$ ✓.
(b) $\bar y=2$, $\tilde y=(3,1,-1,-3)=-\tilde x$. $\rho=\dfrac{\tilde x^\top\tilde y}{\|\tilde x\|\|\tilde y\|}=\dfrac{-20}{20}=-1$. Perfect negative linear relationship: $y=-x+7$ — when $x$ goes up, $y$ goes down by exactly the same amount.
:::
:::

## Mock Quiz 1C

:::question Question 1 (3 marks)
Sketch on one set of axes the set of points $x\in\mathbb{R}^2$ with $\|x\|_1=1$, $\|x\|_2=1$, $\|x\|_\infty=1$. Mark where each crosses the line $x_1=x_2$ in the first quadrant.

:::solution
$\ell_1$: diamond with corners $(\pm1,0),(0,\pm1)$; crosses $x_1=x_2$ at $(\tfrac12,\tfrac12)$.
$\ell_2$: unit circle; crosses at $(\tfrac1{\sqrt2},\tfrac1{\sqrt2})\approx(0.71,0.71)$.
$\ell_\infty$: square with corners $(\pm1,\pm1)$; crosses at $(1,1)$.
The diamond lies inside the circle, which lies inside the square. *(1 per shape incl. its crossing point.)*
:::
:::

:::question Question 2 (3 marks)
Three features of four houses: $f_1=(1,0,2,1)$, $f_2=(0,1,1,1)$, $f_3=(2,-3,1,-1)$. Is one of them redundant? If so, express it as a linear combination of the others.

:::solution
Look for $f_3=af_1+bf_2$:
$$
\begin{bmatrix}1&0\\0&1\\2&1\\1&1\end{bmatrix}\begin{bmatrix}a\\b\end{bmatrix}=\begin{bmatrix}2\\-3\\1\\-1\end{bmatrix}.
$$
Rows 1–2 give $a=2$, $b=-3$. Row 3: $2(2)+(-3)=1$ ✓. Row 4: $2-3=-1$ ✓. So $f_3=2f_1-3f_2$: the features are dependent and $f_3$ is redundant. *(1 set-up, 1 solve, 1 check all rows.)*
:::
:::

:::question Question 3 (4 marks)
Let $q_1=\tfrac1{\sqrt3}(1,1,1)$, $q_2=\tfrac1{\sqrt2}(1,-1,0)$ and $a=(3,1,2)$.
(a) Verify that $\{q_1,q_2\}$ is orthonormal. (1)
(b) Compute $\hat a=(q_1^\top a)q_1+(q_2^\top a)q_2$. (2)
(c) Is $a\in\operatorname{span}\{q_1,q_2\}$? Justify using (b). (1)

:::solution
(a) $\|q_1\|^2=\tfrac13\cdot3=1$, $\|q_2\|^2=\tfrac12\cdot2=1$, $q_1^\top q_2=\tfrac1{\sqrt6}(1-1+0)=0$ ✓.
(b) $q_1^\top a=\tfrac6{\sqrt3}$ ⇒ $(q_1^\top a)q_1=\tfrac63(1,1,1)=(2,2,2)$. $q_2^\top a=\tfrac2{\sqrt2}$ ⇒ $(q_2^\top a)q_2=\tfrac22(1,-1,0)=(1,-1,0)$. $\hat a=(3,1,2)$.
(c) $\hat a=a$, so **yes**: $a=(q_1^\top a)q_1+(q_2^\top a)q_2=2\sqrt3\,q_1+\sqrt2\,q_2$. If $a$ were outside the span the projection $\hat a$ would differ from $a$.
:::
:::

:::remember
Quiz-proof checklist for L01: expand $\|u\pm v\|^2$; centre before correlating; in Gram–Schmidt subtract projections then normalise and **verify orthogonality**; for "redundant feature" write the system in matrix form and check **every** row.
:::

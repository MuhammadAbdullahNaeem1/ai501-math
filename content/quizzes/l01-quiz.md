# L01 · Practice quizzes — Vectors

Three mock quizzes in the format of the 2026 in-class quizzes: **20 minutes and 10 marks** each, mixing true/false questions with justification, short computations and one longer problem. Attempt each on paper against a timer before opening the solutions.

<div class="pdf-links">
<a href="l01-notes.html">L01 notes</a>
<a href="pdfs/quizzes/Quiz-1-Solution.pdf">Real Quiz 1 (2026)</a>
<a href="pdfs/quizzes/Quiz-2-Solution.pdf">Real Quiz 2 (2026)</a>
<a href="pdfs/quizzes/Quiz-3-Solution.pdf">Real Quiz 3 (2026)</a>
<a href="pdfs/past/Quiz-2025-1.pdf">2025 Quiz 1</a>
</div>

:::exam What the real quizzes on this lecture looked like
**Quiz 1:** the unit vector opposite to $v$ (3 marks); whether one feature is redundant, written as a linear combination of the others (4 marks). **Quiz 2:** the correlation of two vectors (3); a total inventory value $c^\top q$ (2); $u^\top v$ from three norms (2); sketches of the unit balls for $p=1,2,\infty$ (3). **Quiz 3:** a geometric description of a span (1); Gram–Schmidt on two vectors (5). **2025 Quiz 1:** subspace or not, with one-line reasons; which statements must hold for unit vectors with $\langle u,v\rangle=\alpha$.
:::

## Mock Quiz 1A

:::question Question 1 (3 marks)
For each statement, decide whether it is true or false and give a one-line justification (half a mark for the verdict and half for the reason).

1. If $u^\top v<0$, then the angle between $u$ and $v$ is obtuse.
2. Every orthogonal set of vectors is linearly independent.
3. $\|x\|_\infty\le\|x\|_2$ for every $x\in\mathbb{R}^n$.

:::solution
1. **True.** Since $u^\top v=\|u\|\,\|v\|\cos\theta$, a negative inner product means $\cos\theta<0$, so $\theta\in(90^\circ,180^\circ]$.
2. **False.** An orthogonal set may contain $\mathbf 0$, which is orthogonal to every vector, and any set containing $\mathbf 0$ is dependent. The statement holds for orthogonal **non-zero** vectors.
3. **True.** The largest squared entry cannot exceed the sum of all squared entries:
$$
\|x\|_\infty^2=\max_i x_i^2\le\sum_i x_i^2=\|x\|_2^2 .
$$
:::
:::

:::question Question 2 (3 marks)
Let $u,v\in\mathbb{R}^n$ be unit vectors with $u^\top v=\alpha$.

1. Show that $\|u-v\|_2^2=2(1-\alpha)$. *(2 marks)*
2. For which value of $\alpha$ are $u$ and $v$ farthest apart, and what is $v$ in that case? *(1 mark)*

:::solution
1. Expand the squared norm as an inner product and use $\|u\|=\|v\|=1$:
$$
\|u-v\|_2^2=(u-v)^\top(u-v)=u^\top u-2\,u^\top v+v^\top v=1-2\alpha+1=\boxed{2(1-\alpha)} .
$$
*(1 mark for the expansion, 1 mark for substituting the unit norms.)*
2. By Cauchy–Schwarz, $-1\le\alpha\le1$, so $\|u-v\|^2=2(1-\alpha)$ is largest at $\alpha=-1$, where $\|u-v\|=2$. Equality in Cauchy–Schwarz, with a negative sign, means $\boxed{v=-u}$. *(1 mark.)*
:::
:::

:::question Question 3 (4 marks)
Apply the Gram–Schmidt process to $a_1=(1,2,2)$ and $a_2=(3,3,0)$ to obtain orthonormal vectors $q_1,q_2$, and verify that $q_1^\top q_2=0$.

:::solution
**Step 1 — normalise $a_1$.**
$$
\|a_1\|_2=\sqrt{1+4+4}=3,\qquad q_1=\frac13\begin{bmatrix}1\\2\\2\end{bmatrix}.
$$
*(1 mark.)*

**Step 2 — remove from $a_2$ its component along $q_1$.** The component is $q_1^\top a_2=\tfrac13(3+6+0)=3$, so
$$
\tilde q_2=a_2-(q_1^\top a_2)\,q_1=\begin{bmatrix}3\\3\\0\end{bmatrix}-3\cdot\frac13\begin{bmatrix}1\\2\\2\end{bmatrix}=\begin{bmatrix}2\\1\\-2\end{bmatrix}.
$$
*(1.5 marks.)*

**Step 3 — normalise.**
$$
\|\tilde q_2\|_2=\sqrt{4+1+4}=3,\qquad q_2=\frac13\begin{bmatrix}2\\1\\-2\end{bmatrix}.
$$
*(1 mark.)*

**Check.**
$$
q_1^\top q_2=\frac19\,(2+2-4)=0 .
$$
*(0.5 marks.)*
:::
:::

## Mock Quiz 1B

:::question Question 1 (2 marks)
Decide whether each set is a subspace of $\mathbb{R}^3$, and give a one-line reason.

1. $\{(x,y,z):\ x-2y+z=0\}$
2. $\{(x,y,z):\ x\ge0\}$

:::solution
1. **Yes.** It is the null space of the row $(1,-2,1)$: it contains $\mathbf 0$, and if two vectors satisfy the equation, so do their sums and scalar multiples. Geometrically it is a plane through the origin.
2. **No.** The vector $(1,0,0)$ belongs to the set, but $(-1)\cdot(1,0,0)=(-1,0,0)$ does not, so the set is not closed under scalar multiplication.
:::
:::

:::question Question 2 (4 marks)
A $100$-vector $x$ records the number of people of each age $0,1,\dots,99$, with $x_i$ the number aged $i-1$. Using vector notation, and defining every vector you introduce, write expressions for:

1. the total population;
2. the number of people aged $18$ to $59$ inclusive;
3. the average age;
4. the fraction of the population aged $60$ or over.

:::solution
1. $\mathbf 1^\top x$. *(1 mark.)*
2. $g^\top x$, where $g\in\mathbb{R}^{100}$ is the indicator vector with $g_i=1$ for $i=19,\dots,60$ (ages $18$ to $59$) and $g_i=0$ otherwise. *(1 mark.)*
3. With the vector of ages $a=(0,1,2,\dots,99)$,
$$
\text{average age}=\frac{a^\top x}{\mathbf 1^\top x}.
$$
*(1 mark.)*
4. With the indicator $h\in\mathbb{R}^{100}$ having $h_i=1$ for $i=61,\dots,100$ and $h_i=0$ otherwise,
$$
\text{fraction aged 60 or over}=\frac{h^\top x}{\mathbf 1^\top x}.
$$
*(1 mark. Deduct half a mark from any part in which an indicator vector is used without being defined.)*
:::
:::

:::question Question 3 (4 marks)
Let $x=(2,4,6,8)$ and $y=(5,3,1,-1)$.

1. Compute $\operatorname{avg}(x)$, $\operatorname{std}(x)$ and $\operatorname{rms}(x)$, and verify that $\operatorname{rms}^2=\operatorname{avg}^2+\operatorname{std}^2$. *(2 marks)*
2. Compute the correlation coefficient of $x$ and $y$, and interpret it. *(2 marks)*

:::solution
1. The mean is $\bar x=\tfrac{20}{4}=5$, so the centred vector is $\tilde x=(-3,-1,1,3)$. Then
$$
\operatorname{std}(x)=\sqrt{\frac{9+1+1+9}{4}}=\sqrt5,\qquad
\operatorname{rms}(x)=\sqrt{\frac{4+16+36+64}{4}}=\sqrt{30},
$$
and indeed $\operatorname{rms}^2=30=25+5=\operatorname{avg}^2+\operatorname{std}^2$.
2. The mean of $y$ is $\bar y=\tfrac84=2$, so $\tilde y=(3,1,-1,-3)=-\tilde x$. Therefore
$$
\rho=\frac{\tilde x^\top\tilde y}{\|\tilde x\|\,\|\tilde y\|}=\frac{-20}{\sqrt{20}\,\sqrt{20}}=\boxed{-1}.
$$
This is a perfect negative linear relationship: $y=-x+7$, so whenever $x$ rises, $y$ falls by exactly the same amount.
:::
:::

## Mock Quiz 1C

:::question Question 1 (3 marks)
On a single set of axes, sketch the sets of points $x\in\mathbb{R}^2$ with $\|x\|_1=1$, with $\|x\|_2=1$ and with $\|x\|_\infty=1$. Mark where each crosses the line $x_1=x_2$ in the first quadrant.

:::solution
- $\|x\|_1=1$ is the **diamond** with corners $(\pm1,0)$ and $(0,\pm1)$. On the line $x_1=x_2$ we need $2x_1=1$, so it crosses at $\big(\tfrac12,\tfrac12\big)$.
- $\|x\|_2=1$ is the **unit circle**. On the line we need $2x_1^2=1$, so it crosses at $\big(\tfrac1{\sqrt2},\tfrac1{\sqrt2}\big)\approx(0.71,0.71)$.
- $\|x\|_\infty=1$ is the **square** with corners $(\pm1,\pm1)$, crossing the line at $(1,1)$.

The diamond lies inside the circle, which lies inside the square. *(1 mark per shape, including its crossing point.)*
:::
:::

:::question Question 2 (3 marks)
Three features of four houses are recorded as $f_1=(1,0,2,1)$, $f_2=(0,1,1,1)$ and $f_3=(2,-3,1,-1)$. Is one of them redundant? If so, express it as a linear combination of the others.

:::solution
Look for coefficients with $f_3=af_1+bf_2$, which is the system
$$
\begin{bmatrix}1&0\\0&1\\2&1\\1&1\end{bmatrix}\begin{bmatrix}a\\b\end{bmatrix}=\begin{bmatrix}2\\-3\\1\\-1\end{bmatrix}.
$$
The first two rows give $a=2$ and $b=-3$. The remaining rows must also hold:
$$
\text{row 3: }\ 2(2)+(-3)=1,\qquad \text{row 4: }\ 2+(-3)=-1 .
$$
Both are satisfied, so
$$
\boxed{f_3=2f_1-3f_2},
$$
the features are dependent, and $f_3$ is redundant. *(1 mark for the set-up, 1 for solving, 1 for checking every row.)*
:::
:::

:::question Question 3 (4 marks)
Let $q_1=\tfrac1{\sqrt3}(1,1,1)$, $q_2=\tfrac1{\sqrt2}(1,-1,0)$ and $a=(3,1,2)$.

1. Verify that $\{q_1,q_2\}$ is orthonormal. *(1 mark)*
2. Compute $\hat a=(q_1^\top a)\,q_1+(q_2^\top a)\,q_2$. *(2 marks)*
3. Is $a\in\operatorname{span}\{q_1,q_2\}$? Justify your answer using part 2. *(1 mark)*

:::solution
1. The lengths and the inner product are
$$
\|q_1\|^2=\frac13(1+1+1)=1,\qquad \|q_2\|^2=\frac12(1+1+0)=1,\qquad q_1^\top q_2=\frac{1}{\sqrt6}(1-1+0)=0 .
$$
2. The two coefficients are $q_1^\top a=\tfrac{6}{\sqrt3}$ and $q_2^\top a=\tfrac{2}{\sqrt2}$, so
$$
\hat a=\frac{6}{\sqrt3}\cdot\frac{1}{\sqrt3}\begin{bmatrix}1\\1\\1\end{bmatrix}+\frac{2}{\sqrt2}\cdot\frac{1}{\sqrt2}\begin{bmatrix}1\\-1\\0\end{bmatrix}
=\begin{bmatrix}2\\2\\2\end{bmatrix}+\begin{bmatrix}1\\-1\\0\end{bmatrix}=\begin{bmatrix}3\\1\\2\end{bmatrix}.
$$
3. **Yes.** Since $\hat a=a$, the vector $a$ equals its projection onto the span: $a=2\sqrt3\,q_1+\sqrt2\,q_2$. If $a$ were outside the span, its projection $\hat a$ would differ from $a$.
:::
:::

:::remember
A quiz-proof checklist for L01: expand $\|u\pm v\|^2$; centre the vectors before correlating them; in Gram–Schmidt, subtract the projections, normalise, and **verify orthogonality**; and for a "redundant feature" question, write the system in matrix form and check **every** row.
:::

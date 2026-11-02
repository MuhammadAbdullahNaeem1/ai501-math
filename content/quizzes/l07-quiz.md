# L07 · Practice quizzes — Definite matrices & SVD

Three mock quizzes, **20 minutes and 10 marks** each, in the style of the 2026 quizzes, PSet 7 and the SVD questions of the 2024 and 2025 mids (storage of a rank-$k$ image, the best rank-1 approximation).

<div class="pdf-links">
<a href="l07-notes.html">L07 notes</a>
<a href="pdfs/psets/PSet-07-with-Solutions.pdf">PSet 7 with solutions (P1–P4, P9)</a>
<a href="pdfs/past/Mid-2025-Part2.pdf">2025 Mid Part II (P1, P10)</a>
</div>

## Mock Quiz 7A

:::question Question 1 (5 marks)
Let $A=\begin{bmatrix}4&0\\3&-5\end{bmatrix}$.

1. Compute $A^\top A$ and the singular values of $A$. *(2 marks)*
2. Find $V$ and then $U$, and write $A=U\Sigma V^\top$. *(2 marks)*
3. Check your singular values against $\det A$ and $\|A\|_F$. *(1 mark)*

:::solution
1.
$$
A^\top A=\begin{bmatrix}4&3\\0&-5\end{bmatrix}\begin{bmatrix}4&0\\3&-5\end{bmatrix}=\begin{bmatrix}25&-15\\-15&25\end{bmatrix}.
$$
   $(25-\lambda)^2=225$ gives $\lambda=40$ and $10$, so $\sigma_1=\sqrt{40}=2\sqrt{10}\approx6.32$ and $\sigma_2=\sqrt{10}\approx3.16$.
2. For $\lambda=40$: $(A^\top A-40I)v=\begin{bmatrix}-15&-15\\-15&-15\end{bmatrix}v=\mathbf 0$ gives $v_1=\tfrac1{\sqrt2}(1,-1)$; for $\lambda=10$, $v_2=\tfrac1{\sqrt2}(1,1)$. Then
$$
u_1=\frac{Av_1}{\sigma_1}=\frac{1}{2\sqrt{10}}\cdot\frac{1}{\sqrt2}\begin{bmatrix}4\\8\end{bmatrix}=\frac{1}{\sqrt5}\begin{bmatrix}1\\2\end{bmatrix},\qquad
u_2=\frac{Av_2}{\sigma_2}=\frac{1}{\sqrt{10}}\cdot\frac{1}{\sqrt2}\begin{bmatrix}4\\-2\end{bmatrix}=\frac{1}{\sqrt5}\begin{bmatrix}2\\-1\end{bmatrix}.
$$
$$
A=\underbrace{\frac{1}{\sqrt5}\begin{bmatrix}1&2\\2&-1\end{bmatrix}}_{U}\underbrace{\begin{bmatrix}2\sqrt{10}&0\\0&\sqrt{10}\end{bmatrix}}_{\Sigma}\underbrace{\frac{1}{\sqrt2}\begin{bmatrix}1&-1\\1&1\end{bmatrix}}_{V^\top}.
$$
3. $\sigma_1\sigma_2=2\sqrt{10}\cdot\sqrt{10}=20=|\det A|=|-20|$ ✓, and $\sigma_1^2+\sigma_2^2=50=16+0+9+25=\|A\|_F^2$ ✓.

*Marking:* 1 for $A^\top A$, 1 for $\sigma$'s; 1 for $V$, 1 for $U$ via $Av_i/\sigma_i$ (taking $U$ from a separate EVD of $AA^\top$ without checking signs loses the mark); 1 for a check.
:::
:::

:::question Question 2 (3 marks)
Classify each symmetric matrix as PD, PSD (not PD), or indefinite. Justify briefly.
$$
P=\begin{bmatrix}6&2\\2&3\end{bmatrix},\qquad Q=\begin{bmatrix}1&3\\3&1\end{bmatrix},\qquad R=\begin{bmatrix}4&2\\2&1\end{bmatrix}.
$$

:::solution
- $P$: $\operatorname{tr}=9$, $\det=18-4=14>0$, so $\lambda=7,2$ — both positive: **PD**.
- $Q$: $\det=1-9=-8<0$, so the eigenvalues ($4$ and $-2$) have opposite signs: **indefinite**. (E.g. $x=(1,-1)$ gives $1-6+1=-4<0$.)
- $R$: $\det=4-4=0$ and $\operatorname{tr}=5$, so $\lambda=5,0$: **PSD, not PD**. $x^\top Rx=(2x_1+x_2)^2$, which is $0$ at $x=(1,-2)$.
:::
:::

:::question Question 3 (2 marks)
True or false, with a reason.

1. For every square matrix, the singular values are the absolute values of the eigenvalues.
2. If $A\in\mathbb R^{4\times6}$, then $A^\top A$ has at least two zero eigenvalues.

:::solution
1. **False.** It holds for symmetric matrices only. $B=\begin{bmatrix}3&0\\4&5\end{bmatrix}$ has eigenvalues $3,5$ (triangular) but singular values $3\sqrt5\approx6.71$ and $\sqrt5\approx2.24$.
2. **True.** $A^\top A$ is $6\times6$ with rank $=\operatorname{rank}A\le4$, so at least $6-4=2$ of its eigenvalues are $0$.
:::
:::

## Mock Quiz 7B

:::question Question 1 (5 marks)
Let $A=\begin{bmatrix}1&0\\0&1\\1&1\end{bmatrix}$.

1. State the shapes of $U$, $\Sigma$ and $V$ in $A=U\Sigma V^\top$, and compute the singular values. *(2 marks)*
2. Find $v_1,v_2$ and $u_1,u_2$. *(2 marks)*
3. Find $u_3$, and say what it represents geometrically. *(1 mark)*

:::solution
1. $U:3\times3$, $\Sigma:3\times2$ (one zero row), $V:2\times2$. $A^\top A=\begin{bmatrix}2&1\\1&2\end{bmatrix}$ has eigenvalues $3$ and $1$, so $\sigma_1=\sqrt3\approx1.73$ and $\sigma_2=1$.
2. $v_1=\tfrac1{\sqrt2}(1,1)$, $v_2=\tfrac1{\sqrt2}(1,-1)$, and
$$
u_1=\frac{Av_1}{\sqrt3}=\frac{1}{\sqrt6}\begin{bmatrix}1\\1\\2\end{bmatrix},\qquad u_2=\frac{Av_2}{1}=\frac{1}{\sqrt2}\begin{bmatrix}1\\-1\\0\end{bmatrix}.
$$
3. $u_3$ solves $A^\top w=\mathbf 0$: $w_1+w_3=0$ and $w_2+w_3=0$, so $u_3=\tfrac1{\sqrt3}(1,1,-1)$. It is the normal to the plane $y_3=y_1+y_2$ that contains every output $Ax$ — a direction $A$ never reaches (it spans $\mathcal N(A^\top)$).
:::
:::

:::question Question 2 (3 marks)
A $50\times40$ matrix $A$ has singular values $8,\ 4,\ 1$, and all the others are $0$.

1. What is $\operatorname{rank}A$? *(1 mark)*
2. For the rank-2 approximation $A_2$, give $\|A-A_2\|_F$ and the fraction of $\|A\|_F^2$ kept. *(1 mark)*
3. How many numbers are needed to store $A_2$, compared with $A$? *(1 mark)*

:::solution
1. Three non-zero singular values: $\operatorname{rank}A=3$.
2. $\|A-A_2\|_F=\sqrt{1^2}=1$; kept $\dfrac{64+16}{64+16+1}=\dfrac{80}{81}\approx98.8\%$.
3. $2(50+40+1)=182$ numbers, against $50\cdot40=2000$.
:::
:::

:::question Question 3 (2 marks)
Show that $A^\top A$ is positive semi-definite for every matrix $A$, and use this to explain why singular values are never negative.

:::solution
For any $x$, $x^\top(A^\top A)x=(Ax)^\top(Ax)=\|Ax\|_2^2\ge0$, so $A^\top A$ is PSD *(1 mark)*. Since it is also symmetric, its eigenvalues are real and $\ge0$; the singular values are $\sigma_i=\sqrt{\lambda_i(A^\top A)}$, the non-negative square roots *(1 mark)*.
:::
:::

## Mock Quiz 7C

:::question Question 1 (4 marks)
A matrix has SVD
$$
A=U\Sigma V^\top,\qquad U=\frac{1}{\sqrt2}\begin{bmatrix}1&1\\1&-1\end{bmatrix},\quad\Sigma=\begin{bmatrix}4&0\\0&2\end{bmatrix},\quad V=I_2 .
$$

1. What is the largest value of $\|Ax\|$ over unit vectors $x$, and which $x$ attains it? *(1 mark)*
2. Compute $\det(A^\top A)$ and $|\det A|$. *(1 mark)*
3. Compute the best rank-1 approximation $A_1$ and $\|A-A_1\|_F$. *(2 marks)*

:::solution
1. $\sigma_1=4$, attained at $x=\pm v_1=\pm(1,0)$.
2. $\det(A^\top A)=\sigma_1^2\sigma_2^2=16\cdot4=64$, and $|\det A|=\sigma_1\sigma_2=8$.
3.
$$
A_1=\sigma_1u_1v_1^\top=4\cdot\frac{1}{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}\begin{bmatrix}1&0\end{bmatrix}=\begin{bmatrix}2\sqrt2&0\\2\sqrt2&0\end{bmatrix},\qquad \|A-A_1\|_F=\sigma_2=2 .
$$
:::
:::

:::question Question 2 (3 marks)
A $1200\times900$ grey-scale photo is compressed with a rank-60 SVD approximation.

1. How many numbers does the original need, and how many the approximation? *(2 marks)*
2. What percentage of storage is saved? *(1 mark)*

:::solution
1. Original: $1200\cdot900=1\,080\,000$. Rank-60: $60(1200+900+1)=60\cdot2101=126\,060$.
2. $1-126\,060/1\,080\,000\approx1-0.1167=88.33\%$ saved.
:::
:::

:::question Question 3 (3 marks)
Let $R=\begin{bmatrix}2&2\\1&1\end{bmatrix}$.

1. Find the singular values, $v_1$ and $u_1$. *(2 marks)*
2. Describe what $R$ does to the unit circle, and name the input direction it destroys. *(1 mark)*

:::solution
1. $R^\top R=\begin{bmatrix}5&5\\5&5\end{bmatrix}$ has eigenvalues $10$ and $0$, so $\sigma_1=\sqrt{10}$, $\sigma_2=0$ (rank 1). $v_1=\tfrac1{\sqrt2}(1,1)$ and $u_1=\dfrac{Rv_1}{\sqrt{10}}=\dfrac{1}{\sqrt{20}}(4,2)=\dfrac{1}{\sqrt5}(2,1)$.
2. The ellipse has zero width: the circle is flattened onto the segment from $-\sqrt{10}\,u_1$ to $\sqrt{10}\,u_1$ (length $2\sqrt{10}\approx6.32$) along $(2,1)$. The direction $v_2=\tfrac1{\sqrt2}(1,-1)$ is sent to $\mathbf 0$ — it spans $\mathcal N(R)$.
:::
:::

:::remember
The SVD quiz recipe: $A^\top A$ → eigenvalues → $\sigma_i=\sqrt{\lambda_i}$ → unit $v_i$ → $u_i=Av_i/\sigma_i$ → complete $U$ with $A^\top w=\mathbf 0$ → check $\prod\sigma_i=|\det A|$ and $\sum\sigma_i^2=\|A\|_F^2$. Storage of $A_k$ is $k(m+n+1)$; its squared Frobenius error is $\sum_{i>k}\sigma_i^2$.
:::

# L07 · Practice quizzes — Singular value decomposition

Three mock quizzes, **20 minutes and 10 marks** each, in the style of the 2026 quizzes: true/false with a one-line justification, then short calculations. Every number below has been checked by hand.

<div class="pdf-links">
<a href="l07-notes.html">L07 notes</a>
<a href="pdfs/psets/PSet-07.pdf">PSet 7 with solutions (P1–P4, P9)</a>
<a href="quiz6-prep.html">Quiz 6 prep page</a>
</div>

## Mock Quiz 7A

:::question Question 1 (3 marks)
True or False? Give a one-line justification for each.

1. Every real matrix, of any shape, has a singular value decomposition.
2. The singular values of a symmetric matrix are its eigenvalues.
3. If $A\in\mathbb{R}^{5\times3}$ has rank 3, then $AA^\top$ is positive definite.

:::solution
1. **True** — the SVD exists for every $A\in\mathbb{R}^{m\times n}$; that is its advantage over the eigen-decomposition.
2. **False** — they are the **absolute values** of the eigenvalues: $\operatorname{diag}(3,-2)$ has singular values $3$ and $2$.
3. **False** — $AA^\top$ is $5\times5$ with rank 3, so it has $5-3=2$ zero eigenvalues: PSD, not PD.

*1 mark each: ½ for the verdict, ½ for the justification.*
:::
:::

:::question Question 2 (5 marks)
Let $A=\begin{bmatrix}2&2\\-1&1\end{bmatrix}$.

1. Compute $A^\top A$ and its eigenvalues, and hence the singular values of $A$. *(2 marks)*
2. Find $V$ and then $U$ using $u_i=Av_i/\sigma_i$, and write $A=U\Sigma V^\top$. *(2 marks)*
3. Check your singular values against $|\det A|$ and $\|A\|_F$. *(1 mark)*

:::solution
:::steps
Step 1 · form $A^\top A$
$$
A^\top A=\begin{bmatrix}2&-1\\2&1\end{bmatrix}\begin{bmatrix}2&2\\-1&1\end{bmatrix}=\begin{bmatrix}5&3\\3&5\end{bmatrix}
$$
Step 2 · eigenvalues ($\begin{bmatrix}a&b\\b&a\end{bmatrix}$ has $a\pm b$), then square roots
$$
\lambda_1=8,\quad \lambda_2=2\qquad\Longrightarrow\qquad \sigma_1=2\sqrt2,\quad \sigma_2=\sqrt2
$$
Step 3 · unit eigenvectors of $A^\top A$
$$
v_1=\frac{1}{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}\qquad\qquad v_2=\frac{1}{\sqrt2}\begin{bmatrix}1\\-1\end{bmatrix}
$$
Step 4 · $u_1=Av_1/\sigma_1$
$$
u_1=\frac{1}{2\sqrt2}\cdot\frac{1}{\sqrt2}\begin{bmatrix}4\\0\end{bmatrix}=\begin{bmatrix}1\\0\end{bmatrix}
$$
Step 5 · $u_2=Av_2/\sigma_2$
$$
u_2=\frac{1}{\sqrt2}\cdot\frac{1}{\sqrt2}\begin{bmatrix}0\\-2\end{bmatrix}=\begin{bmatrix}0\\-1\end{bmatrix}
$$
Step 6 · checks
$$
\sigma_1\sigma_2=4=|\det A|\qquad\qquad \sigma_1^2+\sigma_2^2=10=\|A\|_F^2
$$
:::
:::result Answer
$$
A=\underbrace{\begin{bmatrix}1&0\\0&-1\end{bmatrix}}_{U}\underbrace{\begin{bmatrix}2\sqrt2&0\\0&\sqrt2\end{bmatrix}}_{\Sigma}\underbrace{\frac{1}{\sqrt2}\begin{bmatrix}1&1\\1&-1\end{bmatrix}}_{V^\top}
$$
:::

*Marking: 1 for $A^\top A$, 1 for the $\sigma$'s; 1 for $V$, 1 for $U$; 1 for either check.*
:::
:::

:::question Question 3 (2 marks)
A $3\times3$ matrix has singular values $6$, $3$ and $1$. Find (a) its rank; (b) $\det(A^\top A)$; (c) $\|A-A_1\|_F$ and the fraction of energy kept by the rank-one approximation $A_1$.

:::solution
:::steps
(a) Three non-zero singular values
$$
\operatorname{rank}A=3
$$
(b) The eigenvalues of $A^\top A$ are $\sigma_i^2$
$$
\det(A^\top A)=6^2\cdot3^2\cdot1^2=36\cdot9\cdot1=324
$$
(c) Error from the dropped singular values, and the energy kept
$$
\|A-A_1\|_F=\sqrt{3^2+1^2}=\sqrt{10}\qquad\qquad \frac{36}{36+9+1}\approx78.3\%
$$
:::
:::
:::

## Mock Quiz 7B

:::question Question 1 (3 marks)
Classify each symmetric matrix as PD, PSD, ND, NSD or indefinite, using its eigenvalues.

1. $\begin{bmatrix}2&-1\\-1&2\end{bmatrix}$
2. $\begin{bmatrix}1&3\\3&1\end{bmatrix}$ — and give a vector $x$ with $x^\top Ax<0$.
3. $\begin{bmatrix}-2&0\\0&0\end{bmatrix}$

:::solution
:::steps
1 · Form $\begin{bmatrix}a&b\\b&a\end{bmatrix}$, eigenvalues $a\pm b$
$$
\lambda=3,\ 1\qquad\Longrightarrow\qquad\text{positive definite}
$$
2 · Trace $2$, determinant $-8<0$, so the signs differ
$$
\lambda=4,\ -2\qquad\Longrightarrow\qquad\text{indefinite}
$$
A vector that is turned backwards, $x=(1,-1)$
$$
x^\top Ax=\begin{bmatrix}1&-1\end{bmatrix}\begin{bmatrix}-2\\2\end{bmatrix}=-4<0
$$
3 · Diagonal, so the eigenvalues are on the diagonal
$$
\lambda=-2,\ 0\qquad\Longrightarrow\qquad\text{negative semi-definite}
$$
:::
:::
:::

:::question Question 2 (4 marks)
1. Show that $A^\top A$ is positive semi-definite for **every** matrix $A$. When is it positive definite? *(2 marks)*
2. $A\in\mathbb{R}^{4\times2}$ has independent columns. Give the shapes of $U$, $\Sigma$ and $V$ in its SVD, and the number of zero eigenvalues of $AA^\top$. *(2 marks)*

:::solution
:::steps
1 · Regroup the product
$$
x^\top(A^\top A)\,x=(Ax)^\top(Ax)=\|Ax\|^2\ge0
$$
:::
It is **PD** exactly when $Ax=\mathbf 0$ only for $x=\mathbf 0$ — when the columns of $A$ are independent.

2 · $U$ is $4\times4$, $\Sigma$ is $4\times2$, $V$ is $2\times2$. $AA^\top$ is $4\times4$ with rank 2, so it has **2** zero eigenvalues.
:::
:::

:::question Question 3 (3 marks)
A matrix has SVD $A=U\Sigma V^\top$ with
$$
U=\begin{bmatrix}0&1\\1&0\end{bmatrix},\qquad \Sigma=\begin{bmatrix}5&0\\0&2\end{bmatrix},\qquad V=\frac{1}{\sqrt2}\begin{bmatrix}1&-1\\1&1\end{bmatrix}.
$$
1. Which unit input direction is stretched most, and where does it land? *(1 mark)*
2. Describe the image of the unit circle and give its area. *(2 marks)*

:::solution
:::steps
1 · The first column of $V$, sent by $Av_1=\sigma_1u_1$
$$
v_1=\frac{1}{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}\ \longmapsto\ 5\begin{bmatrix}0\\1\end{bmatrix}=\begin{bmatrix}0\\5\end{bmatrix}
$$
2 · An ellipse with semi-axes $\sigma_1u_1$ and $\sigma_2u_2$
$$
\sigma_1u_1=\begin{bmatrix}0\\5\end{bmatrix},\qquad \sigma_2u_2=\begin{bmatrix}2\\0\end{bmatrix},\qquad \text{area}=\pi\,\sigma_1\sigma_2=10\pi
$$
:::
:::
:::

## Mock Quiz 7C

:::question Question 1 (4 marks)
Use the SVD of $A=\begin{bmatrix}2&2\\-1&1\end{bmatrix}$ from Quiz 7A: $\sigma_1=2\sqrt2$, $u_1=(1,0)$, $v_1=\tfrac{1}{\sqrt2}(1,1)$; $\sigma_2=\sqrt2$, $u_2=(0,-1)$, $v_2=\tfrac{1}{\sqrt2}(1,-1)$.

1. Compute the rank-one approximation $A_1=\sigma_1u_1v_1^\top$. *(2 marks)*
2. Compute $A-A_1$ and verify that $\|A-A_1\|_F^2=\sigma_2^2$. What fraction of the energy does $A_1$ keep? *(2 marks)*

:::solution
:::steps
1 · A column times a row
$$
A_1=2\sqrt2\begin{bmatrix}1\\0\end{bmatrix}\frac{1}{\sqrt2}\begin{bmatrix}1&1\end{bmatrix}=\begin{bmatrix}2&2\\0&0\end{bmatrix}
$$
2 · What is left over
$$
A-A_1=\begin{bmatrix}0&0\\-1&1\end{bmatrix}\qquad \|A-A_1\|_F^2=1+1=2=\sigma_2^2\ \checkmark
$$
Energy kept
$$
\frac{\sigma_1^2}{\sigma_1^2+\sigma_2^2}=\frac{8}{10}=80\%
$$
:::
:::
:::

:::question Question 2 (3 marks)
A greyscale image is a $600\times400$ matrix. How many numbers are stored for (a) the image itself and (b) its rank-30 SVD approximation? (c) Why does a larger $k$ improve quality but reduce compression?

:::solution
:::steps
(a) Every pixel
$$
600\times400=240{,}000
$$
(b) $k$ columns of $U$, $k$ singular values, $k$ rows of $V^\top$
$$
k(m+n+1)=30\,(600+400+1)=30{,}030\quad(\approx12.5\%)
$$
:::
(c) Each extra layer lowers the error $\sum_{i>k}\sigma_i^2$, but costs $m+n+1=1001$ more numbers.
:::
:::

:::question Question 3 (3 marks)
Fifty measured points in $\mathbb{R}^3$ are stacked as the columns of $A\in\mathbb{R}^{3\times50}$. Its singular values are $12.1$, $0.09$ and $0.06$.

1. What is the approximate rank, and what does it say about the points? Which singular vector gives their main direction? *(1.5 marks)*
2. Which of these are true? (a) rank = number of non-zero singular values; (b) a singular value can be negative; (c) the $\sigma_i^2$ are the eigenvalues of $A^\top A$ (the non-zero ones); (d) $u_i=Av_i/\sigma_i$ for $\sigma_i>0$. *(1.5 marks)*

:::solution
1. One large singular value, two at noise level (a clear gap $12.1\to0.09$): **approximate rank 1**. The points lie almost on a line through the origin, along $u_1$.
2. **(a), (c), (d) true; (b) false** — singular values are square roots of the eigenvalues of the PSD matrix $A^\top A$.
:::
:::

:::remember
SVD recipe: eigen-decompose $A^\top A$, take $\sigma_i=\sqrt{\lambda_i}$, set $u_i=Av_i/\sigma_i$, and check $\prod\sigma_i=|\det A|$ and $\sum\sigma_i^2=\|A\|_F^2$.
:::

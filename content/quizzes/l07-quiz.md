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
1. **True.** The SVD exists for every $A\in\mathbb{R}^{m\times n}$ — that is its main advantage over the eigen-decomposition.
2. **False.** They are the **absolute values** of the eigenvalues: $\operatorname{diag}(3,-2)$ has eigenvalues $3,-2$ but singular values $3,2$ (singular values are never negative).
3. **False.** $AA^\top$ is $5\times5$ with rank 3, so it has $5-3=2$ zero eigenvalues: it is PSD but **not** PD. (It is $A^\top A$, $3\times3$ of rank 3, that is PD.)

*1 mark each: ½ for the verdict, ½ for the justification.*
:::
:::

:::question Question 2 (5 marks)
Let $A=\begin{bmatrix}2&2\\-1&1\end{bmatrix}$.

1. Compute $A^\top A$ and its eigenvalues, and hence the singular values of $A$. *(2 marks)*
2. Find $V$ and then $U$ using $u_i=Av_i/\sigma_i$, and write $A=U\Sigma V^\top$. *(2 marks)*
3. Check your singular values against $|\det A|$ and $\|A\|_F$. *(1 mark)*

:::solution
1.
$$
A^\top A=\begin{bmatrix}2&-1\\2&1\end{bmatrix}\begin{bmatrix}2&2\\-1&1\end{bmatrix}=\begin{bmatrix}5&3\\3&5\end{bmatrix}.
$$
   It has the form $\begin{bmatrix}a&b\\b&a\end{bmatrix}$, so its eigenvalues are $a\pm b=8$ and $2$. Hence
$$
\sigma_1=\sqrt8=2\sqrt2,\qquad \sigma_2=\sqrt2 .
$$
2. The unit eigenvectors of $A^\top A$ are $v_1=\tfrac{1}{\sqrt2}(1,1)$ (for 8) and $v_2=\tfrac{1}{\sqrt2}(1,-1)$ (for 2). Then
$$
u_1=\frac{Av_1}{\sigma_1}=\frac{1}{2\sqrt2}\cdot\frac{1}{\sqrt2}\begin{bmatrix}4\\0\end{bmatrix}=\begin{bmatrix}1\\0\end{bmatrix},\qquad
u_2=\frac{Av_2}{\sigma_2}=\frac{1}{\sqrt2}\cdot\frac{1}{\sqrt2}\begin{bmatrix}0\\-2\end{bmatrix}=\begin{bmatrix}0\\-1\end{bmatrix},
$$
$$
A=\underbrace{\begin{bmatrix}1&0\\0&-1\end{bmatrix}}_{U}\underbrace{\begin{bmatrix}2\sqrt2&0\\0&\sqrt2\end{bmatrix}}_{\Sigma}\underbrace{\frac{1}{\sqrt2}\begin{bmatrix}1&1\\1&-1\end{bmatrix}}_{V^\top}.
$$
   (Multiply out to check: row 1 is $2\sqrt2\cdot\tfrac{1}{\sqrt2}(1,1)=(2,2)$ and row 2 is $-\sqrt2\cdot\tfrac{1}{\sqrt2}(1,-1)=(-1,1)$ ✓.)
3. $\sigma_1\sigma_2=2\sqrt2\cdot\sqrt2=4=|\det A|=|2\cdot1-2\cdot(-1)|$ ✓, and $\sigma_1^2+\sigma_2^2=8+2=10=4+4+1+1=\|A\|_F^2$ ✓.

*Marking: 1 for $A^\top A$, 1 for the $\sigma$'s; 1 for $V$, 1 for $U$ via $Av_i/\sigma_i$; 1 for either check.*
:::
:::

:::question Question 3 (2 marks)
A $3\times3$ matrix has singular values $6$, $3$ and $1$. Find (a) its rank; (b) $\det(A^\top A)$; (c) $\|A-A_1\|_F$ and the fraction of energy kept by the rank-one approximation $A_1$.

:::solution
(a) Three non-zero singular values: **rank 3**.
(b) The eigenvalues of $A^\top A$ are $\sigma_i^2=36,9,1$, so $\det(A^\top A)=36\cdot9\cdot1=\mathbf{324}$ (also $=(\det A)^2=(6\cdot3\cdot1)^2$).
(c) $\|A-A_1\|_F=\sqrt{3^2+1^2}=\sqrt{10}\approx3.16$; energy kept $=\dfrac{36}{36+9+1}=\dfrac{36}{46}\approx\mathbf{78.3\%}$.

*½ + ½ + 1.*
:::
:::

## Mock Quiz 7B

:::question Question 1 (3 marks)
Classify each symmetric matrix as PD, PSD, ND, NSD or indefinite, using its eigenvalues.

1. $\begin{bmatrix}2&-1\\-1&2\end{bmatrix}$
2. $\begin{bmatrix}1&3\\3&1\end{bmatrix}$ — and give a vector $x$ with $x^\top Ax<0$.
3. $\begin{bmatrix}-2&0\\0&0\end{bmatrix}$

:::solution
1. Of the form $\begin{bmatrix}a&b\\b&a\end{bmatrix}$: $\lambda=a\pm b=3,\ 1$, both positive: **PD**.
2. Trace $2$, determinant $1-9=-8<0$, so the eigenvalues have opposite signs ($4$ and $-2$): **indefinite**. For $x=(1,-1)$: $Ax=(-2,2)$ and $x^\top Ax=-2-2=-4<0$ (while $x=(1,1)$ gives $+8$).
3. Diagonal, so $\lambda=-2,\ 0$: all $\le0$ with a zero: **NSD** (not ND).
:::
:::

:::question Question 2 (4 marks)
1. Show that $A^\top A$ is positive semi-definite for **every** matrix $A$. When is it positive definite? *(2 marks)*
2. $A\in\mathbb{R}^{4\times2}$ has independent columns. Give the shapes of $U$, $\Sigma$ and $V$ in its SVD, and the number of zero eigenvalues of $AA^\top$. *(2 marks)*

:::solution
1. For any $x$,
$$
x^\top(A^\top A)x=(Ax)^\top(Ax)=\|Ax\|^2\ge0 ,
$$
   so $A^\top A\succeq0$. It is **PD** exactly when $Ax=\mathbf 0$ only for $x=\mathbf 0$, i.e. when the **columns of $A$ are linearly independent**.
2. $U$ is $4\times4$, $\Sigma$ is $4\times2$ (two zero rows), $V$ is $2\times2$. $AA^\top$ is $4\times4$ with rank 2, so it has $4-2=\mathbf 2$ zero eigenvalues.
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
1. $v_1=\tfrac{1}{\sqrt2}(1,1)$, stretched by $\sigma_1=5$ and sent to $\sigma_1u_1=5\,(0,1)=(0,5)$ (since $Av_1=\sigma_1u_1$).
2. An **ellipse** with semi-axes $\sigma_1u_1=(0,5)$ (length 5, vertical) and $\sigma_2u_2=(2,0)$ (length 2, horizontal). Its area is $\pi\sigma_1\sigma_2=10\pi$, so $|\det A|=10$.
:::
:::

## Mock Quiz 7C

:::question Question 1 (4 marks)
Use the SVD of $A=\begin{bmatrix}2&2\\-1&1\end{bmatrix}$ from Quiz 7A: $\sigma_1=2\sqrt2$, $u_1=(1,0)$, $v_1=\tfrac{1}{\sqrt2}(1,1)$; $\sigma_2=\sqrt2$, $u_2=(0,-1)$, $v_2=\tfrac{1}{\sqrt2}(1,-1)$.

1. Compute the rank-one approximation $A_1=\sigma_1u_1v_1^\top$. *(2 marks)*
2. Compute $A-A_1$ and verify that $\|A-A_1\|_F^2=\sigma_2^2$. What fraction of the energy does $A_1$ keep? *(2 marks)*

:::solution
1.
$$
A_1=2\sqrt2\begin{bmatrix}1\\0\end{bmatrix}\frac{1}{\sqrt2}\begin{bmatrix}1&1\end{bmatrix}=2\begin{bmatrix}1&1\\0&0\end{bmatrix}=\begin{bmatrix}2&2\\0&0\end{bmatrix}.
$$
2. $A-A_1=\begin{bmatrix}0&0\\-1&1\end{bmatrix}$, so $\|A-A_1\|_F^2=1+1=2=(\sqrt2)^2=\sigma_2^2$ ✓. Energy kept $=\dfrac{8}{8+2}=\mathbf{80\%}$.
:::
:::

:::question Question 2 (3 marks)
A greyscale image is a $600\times400$ matrix. How many numbers are stored for (a) the image itself and (b) its rank-30 SVD approximation? (c) Why does a larger $k$ improve quality but reduce compression?

:::solution
(a) $600\times400=240{,}000$.
(b) $k(m+n+1)=30(600+400+1)=30{,}030$ — about **12.5%** of the original.
(c) Each extra layer can only lower (or keep) the approximation error $\sum_{i>k}\sigma_i^2$, so detail improves; but each costs $m+n+1=1001$ more numbers.
:::
:::

:::question Question 3 (3 marks)
Fifty measured points in $\mathbb{R}^3$ are stacked as the columns of $A\in\mathbb{R}^{3\times50}$. Its singular values are $12.1$, $0.09$ and $0.06$.

1. What is the approximate rank, and what does it say about the points? Which singular vector gives their main direction? *(1.5 marks)*
2. Which of these are true? (a) rank = number of non-zero singular values; (b) a singular value can be negative; (c) the $\sigma_i^2$ are the eigenvalues of $A^\top A$ (the non-zero ones); (d) $u_i=Av_i/\sigma_i$ for $\sigma_i>0$. *(1.5 marks)*

:::solution
1. One singular value is large and two are at noise level (a clear gap $12.1\to0.09$): **approximate rank 1**. The points lie almost on a **line through the origin** in $\mathbb{R}^3$, along the left singular vector $u_1$.
2. **(a), (c), (d) true; (b) false** — singular values are square roots of the eigenvalues of the PSD matrix $A^\top A$, so they are $\ge0$.
:::
:::

:::remember
The SVD quiz recipe: $A^\top A\to$ eigenvalues $\to\sigma_i=\sqrt{\lambda_i}$; unit eigenvectors $\to V$; $u_i=Av_i/\sigma_i$; check $\sigma_1\cdots\sigma_n=|\det A|$ and $\sum\sigma_i^2=\|A\|_F^2$. Rank = number of non-zero $\sigma$; $A_k$ error $=\sum_{i>k}\sigma_i^2$; storage $k(m+n+1)$.
:::

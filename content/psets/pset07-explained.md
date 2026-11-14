# Problem Set 7 — explained in depth

Every problem from Problem Set 7 (SVD and PCA), worked slowly. For each one: what it is really asking, the idea you need, every step with the reason for it, and a check at the end. The official solutions are in the PDF; this page fills in everything they skip.

<div class="pdf-links">
<a href="pdfs/psets/PSet-07.pdf">Problem Set 7 with official solutions (PDF)</a>
<a href="l07-notes.html">L07 SVD notes</a>
<a href="l08-notes.html">L08 PCA notes</a>
<a href="quiz6-prep.html">Quiz 6 prep</a>
</div>

## The two recipes used on this whole page

**SVD recipe** — every SVD problem below follows these four steps:

1. Form $A^\top A$.
2. Its eigenvalues give the singular values: $\sigma_i=\sqrt{\lambda_i}$.
3. Its unit eigenvectors are the right singular vectors $v_i$.
4. Each left singular vector is $u_i=\dfrac{Av_i}{\sigma_i}$.

**PCA recipe** — every PCA problem below follows these five steps:

1. Compute the mean $\bar x$.
2. Centre every point: $s_i=x_i-\bar x$.
3. Covariance matrix: $C=\frac1n\sum_i s_is_i^\top$.
4. Eigen-decompose $C$ and sort the eigenvalues from largest to smallest.
5. Keep the top $k$ eigenvectors.

**Why the SVD recipe works.** The SVD says every matrix sends some special input directions $v_i$ to output directions $u_i$, stretched by $\sigma_i$:

:::result
$$
Av_i=\sigma_i\,u_i
$$
:::

The matrix $A^\top A$ measures stretching: $x^\top A^\top Ax=\|Ax\|^2$ is the squared length of the output. So its eigenvectors are the directions that get stretched the most and least, and its eigenvalues are the **squared** stretches — hence the square root. Once you know $v_i$ and $\sigma_i$, the equation above tells you $u_i$: just divide $Av_i$ by $\sigma_i$.

---

## Problem 1 — the SVD of a diagonal matrix

:::orig [PSet 7 · Problem 1 ↗](pdfs/psets/PSet-07.pdf#page=1)
Consider $A=\begin{pmatrix}3&0\\0&1\end{pmatrix}$. (a) Give matrices $U$, $\Sigma$ and $V$ such that $A=U\Sigma V^\top$. (b) What are the singular values of $A$? Which input direction is stretched more by the transformation $x\mapsto Ax$?
:::

**What it is really asking.** The SVD describes any matrix as *rotate → stretch → rotate*. A diagonal matrix with non-negative entries does **only** the stretch: it multiplies the $x$-coordinate by 3 and the $y$-coordinate by 1. So the two rotations should be "do nothing" — the identity.

**See it first.** Feed in the two axis vectors:

:::steps
The $x$-axis direction is stretched by 3
$$
A\begin{bmatrix}1\\0\end{bmatrix}=\begin{bmatrix}3&0\\0&1\end{bmatrix}\begin{bmatrix}1\\0\end{bmatrix}=\begin{bmatrix}3\\0\end{bmatrix}=3\begin{bmatrix}1\\0\end{bmatrix}
$$
The $y$-axis direction is stretched by 1 (left as it is)
$$
A\begin{bmatrix}0\\1\end{bmatrix}=\begin{bmatrix}0\\1\end{bmatrix}=1\begin{bmatrix}0\\1\end{bmatrix}
$$
:::

**Now confirm with the recipe** (so you can do it for any matrix):

:::steps
Step 1 · form $A^\top A$ ($A$ is symmetric, so $A^\top=A$)
$$
A^\top A=\begin{bmatrix}3&0\\0&1\end{bmatrix}\begin{bmatrix}3&0\\0&1\end{bmatrix}=\begin{bmatrix}9&0\\0&1\end{bmatrix}
$$
Step 2 · a diagonal matrix has its eigenvalues on the diagonal; take square roots
$$
\lambda_1=9,\quad\lambda_2=1\qquad\Longrightarrow\qquad \sigma_1=3,\quad\sigma_2=1
$$
Step 3 · the eigenvectors of a diagonal matrix are the axis vectors
$$
v_1=\begin{bmatrix}1\\0\end{bmatrix}\qquad v_2=\begin{bmatrix}0\\1\end{bmatrix}
$$
Step 4 · $u_i=Av_i/\sigma_i$
$$
u_1=\frac13\begin{bmatrix}3\\0\end{bmatrix}=\begin{bmatrix}1\\0\end{bmatrix}\qquad u_2=\frac11\begin{bmatrix}0\\1\end{bmatrix}=\begin{bmatrix}0\\1\end{bmatrix}
$$
:::

:::result Answer
$$
A=\underbrace{\begin{bmatrix}1&0\\0&1\end{bmatrix}}_{U=I}\ \underbrace{\begin{bmatrix}3&0\\0&1\end{bmatrix}}_{\Sigma=A}\ \underbrace{\begin{bmatrix}1&0\\0&1\end{bmatrix}}_{V^\top=I}\qquad\qquad \sigma_1=3,\ \ \sigma_2=1
$$
:::

**(b)** The direction stretched more is $(1,0)$ — the $x$-axis — by a factor of 3. Picture: the unit circle becomes an ellipse 3 wide and 1 tall.

:::warn Why this only works because the entries are non-negative
Singular values are never negative. For $\operatorname{diag}(3,-1)$ the singular values are $3$ and $1$, and the minus sign has to go into $U$ (a flip): $U=\operatorname{diag}(1,-1)$, $\Sigma=\operatorname{diag}(3,1)$, $V=I$.
:::

---

## Problem 2 — a rank-one matrix

:::orig [PSet 7 · Problem 2 ↗](pdfs/psets/PSet-07.pdf#page=1)
Let $A=\begin{pmatrix}1&1\\0&0\end{pmatrix}$. (a) Compute $A^\top A$ and find its eigenvalues and an orthonormal set of eigenvectors. (b) Use your answer to identify the singular values of $A$. (c) State the rank of $A$. How many nonzero singular values does it have?
:::

**What it is really asking.** Run the SVD recipe on a matrix whose two columns are identical, and notice that one singular value comes out as zero — that zero is the rank dropping.

:::steps
Step 1 · form $A^\top A$ (transpose: rows become columns)
$$
A^\top A=\begin{bmatrix}1&0\\1&0\end{bmatrix}\begin{bmatrix}1&1\\0&0\end{bmatrix}=\begin{bmatrix}1\cdot1+0\cdot0&1\cdot1+0\cdot0\\1\cdot1+0\cdot0&1\cdot1+0\cdot0\end{bmatrix}=\begin{bmatrix}1&1\\1&1\end{bmatrix}
$$
Step 2 · characteristic equation $\det(A^\top A-\lambda I)=0$
$$
(1-\lambda)^2-1=\lambda^2-2\lambda=\lambda(\lambda-2)=0\qquad\Longrightarrow\qquad\lambda_1=2,\quad\lambda_2=0
$$
:::

**Step 3 — the eigenvectors, solved fully.** An eigenvector $v=(a,b)$ for $\lambda$ is any vector that $A^\top A-\lambda I$ sends to zero.

:::steps
For $\lambda_1=2$: subtract 2 from the diagonal
$$
\begin{bmatrix}-1&1\\1&-1\end{bmatrix}\begin{bmatrix}a\\b\end{bmatrix}=\begin{bmatrix}-a+b\\a-b\end{bmatrix}=\begin{bmatrix}0\\0\end{bmatrix}\quad\Longrightarrow\quad b=a
$$
Pick $a=1$, then divide by the length $\sqrt{1^2+1^2}=\sqrt2$
$$
v_1=\frac{1}{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}
$$
For $\lambda_2=0$: subtract 0 (nothing changes)
$$
\begin{bmatrix}1&1\\1&1\end{bmatrix}\begin{bmatrix}a\\b\end{bmatrix}=\begin{bmatrix}a+b\\a+b\end{bmatrix}=\begin{bmatrix}0\\0\end{bmatrix}\quad\Longrightarrow\quad b=-a
$$
Pick $a=1$, divide by $\sqrt2$
$$
v_2=\frac{1}{\sqrt2}\begin{bmatrix}1\\-1\end{bmatrix}
$$
Check they are orthonormal: perpendicular and length 1
$$
v_1^\top v_2=\tfrac12(1\cdot1+1\cdot(-1))=0\qquad \|v_1\|=\|v_2\|=1
$$
:::

:::steps
(b) Singular values = square roots of the eigenvalues
$$
\sigma_1=\sqrt2,\qquad \sigma_2=\sqrt0=0
$$
For completeness, $u_1=Av_1/\sigma_1$
$$
u_1=\frac{1}{\sqrt2}\cdot\begin{bmatrix}1&1\\0&0\end{bmatrix}\frac{1}{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}=\frac12\begin{bmatrix}2\\0\end{bmatrix}=\begin{bmatrix}1\\0\end{bmatrix}
$$
:::

**(c)** The two columns are both $(1,0)$ — the second adds nothing new — so $\operatorname{rank}A=1$. That matches the count of non-zero singular values: **one**.

**What $\sigma_2=0$ means.** $A$ sends $v_2$ to zero: $Av_2=\tfrac{1}{\sqrt2}(1-1,\ 0)=(0,0)$. So $v_2$ spans the **null space**. The whole unit circle gets flattened onto a line segment along $u_1=(1,0)$ — a "rank 1" picture.

:::remember
Number of non-zero singular values = rank. A zero singular value means a whole direction ($v_i$) is squashed to nothing.
:::

---

## Problem 3 — checking a given SVD

:::orig [PSet 7 · Problem 3 ↗](pdfs/psets/PSet-07.pdf#page=1)
One SVD of $A=\begin{pmatrix}3&0\\4&0\end{pmatrix}$ is $U=\begin{pmatrix}3/5&-4/5\\4/5&3/5\end{pmatrix}$, $\Sigma=\begin{pmatrix}5&0\\0&0\end{pmatrix}$, $V=\begin{pmatrix}1&0\\0&1\end{pmatrix}$. (a) Verify the factorization by multiplying the three matrices. (b) For a unit vector $x=(x_1,x_2)^\top$, what is $\|Ax\|$? Which input direction gives the largest output length? (c) Describe geometrically what this matrix does to the plane.
:::

**(a) Multiply in two steps.** Matrix multiplication is associative, so do $U\Sigma$ first, then multiply by $V^\top$.

:::steps
$U\Sigma$: each column of $U$ is scaled by the matching $\sigma$
$$
U\Sigma=\begin{bmatrix}3/5&-4/5\\4/5&3/5\end{bmatrix}\begin{bmatrix}5&0\\0&0\end{bmatrix}=\begin{bmatrix}\tfrac35\cdot5&-\tfrac45\cdot0\\\tfrac45\cdot5&\tfrac35\cdot0\end{bmatrix}=\begin{bmatrix}3&0\\4&0\end{bmatrix}
$$
Then $V^\top=I$ changes nothing
$$
U\Sigma V^\top=\begin{bmatrix}3&0\\4&0\end{bmatrix}I=\begin{bmatrix}3&0\\4&0\end{bmatrix}=A\ \checkmark
$$
:::

**Where this SVD comes from** (so you could find it yourself):

:::steps
$A^\top A$, its eigenvalues, and the singular values
$$
A^\top A=\begin{bmatrix}3&4\\0&0\end{bmatrix}\begin{bmatrix}3&0\\4&0\end{bmatrix}=\begin{bmatrix}25&0\\0&0\end{bmatrix}\qquad \sigma_1=5,\quad\sigma_2=0
$$
Eigenvectors are the axes; then $u_1=Av_1/\sigma_1$
$$
v_1=\begin{bmatrix}1\\0\end{bmatrix}\qquad u_1=\frac15\begin{bmatrix}3\\4\end{bmatrix}
$$
$u_2$ cannot use $Av_2/0$, so take the unit vector perpendicular to $u_1$
$$
u_2=\frac15\begin{bmatrix}-4\\3\end{bmatrix}
$$
:::

**(b) Length of the output.**

:::steps
Multiply out $Ax$
$$
Ax=\begin{bmatrix}3&0\\4&0\end{bmatrix}\begin{bmatrix}x_1\\x_2\end{bmatrix}=\begin{bmatrix}3x_1\\4x_1\end{bmatrix}
$$
Its length — note $x_2$ has vanished completely
$$
\|Ax\|=\sqrt{(3x_1)^2+(4x_1)^2}=\sqrt{25x_1^2}=5\,|x_1|
$$
:::

For a unit vector $|x_1|\le1$, so the largest output length is $5=\sigma_1$, reached at $x=(1,0)$ or $(-1,0)$ — exactly $\pm v_1$.

**(c) The picture.** Every output is a multiple of $(3,4)$, so the whole plane is sent onto **one line** through the origin in the direction $(3,4)$. The direction $e_1=(1,0)$ is stretched by 5 onto that line; the direction $e_2=(0,1)$ is crushed to zero. The unit circle becomes a segment from $-(3,4)$ to $(3,4)$, of length 10.

---

## Problem 4 — rank and low-rank approximation from singular values

:::orig [PSet 7 · Problem 4 ↗](pdfs/psets/PSet-07.pdf#page=2)
Suppose a data matrix has singular values $10$, $2$ and $0.5$. (a) What is the rank of the matrix? (b) If we keep only the largest singular value, what rank approximation do we obtain, and what is the Frobenius norm of the discarded part? (c) Compute the fraction of the squared Frobenius norm retained by this rank-one approximation.
:::

**The idea you need.** An SVD splits a matrix into a sum of rank-one "layers", one per singular value:

:::result
$$
A=\sigma_1u_1v_1^\top+\sigma_2u_2v_2^\top+\sigma_3u_3v_3^\top
$$
:::

Each layer is a column times a row — a rank-one matrix — with strength $\sigma_i$. And the "total size" of the matrix splits the same way:

:::result
$$
\|A\|_F^2=\sigma_1^2+\sigma_2^2+\sigma_3^2
$$
:::

(The Frobenius norm is the square root of the sum of the squares of all entries. The rotations $U$ and $V$ do not change lengths, so only the stretches $\sigma_i$ count.)

:::steps
(a) Count the non-zero singular values
$$
10,\ 2,\ 0.5\ \text{all}\ne0\qquad\Longrightarrow\qquad\operatorname{rank}=3
$$
(b) Keep one layer: a rank-one approximation
$$
A_1=\sigma_1u_1v_1^\top=10\,u_1v_1^\top
$$
The thrown-away part is the other two layers, so its size uses $\sigma_2$ and $\sigma_3$
$$
\|A-A_1\|_F=\sqrt{\sigma_2^2+\sigma_3^2}=\sqrt{4+0.25}=\sqrt{4.25}=\frac{\sqrt{17}}{2}\approx2.06
$$
(c) Fraction of the total kept
$$
\frac{\sigma_1^2}{\sigma_1^2+\sigma_2^2+\sigma_3^2}=\frac{100}{100+4+0.25}=\frac{100}{104.25}=\frac{400}{417}\approx0.959
$$
:::

So one layer keeps **95.9%** of the matrix's "energy". This is why low-rank approximation works for images and data: the first few singular values usually hold almost everything.

---

## Problem 5 — PCA by hand: covariance and principal components

:::orig [PSet 7 · Problem 5 ↗](pdfs/psets/PSet-07.pdf#page=2)
Four observations, each with two features, are $x_1=(2,1)^\top$, $x_2=(0,-1)^\top$, $x_3=(1,2)^\top$, $x_4=(-1,0)^\top$. (a) Find the sample mean and write the centered observations as rows of a matrix $X_c$. (b) Compute the covariance matrix $C=\tfrac14X_c^\top X_c$. (c) Find the eigenvalues and corresponding unit eigenvectors of $C$. Which direction is the first principal component?
:::

**What it is really asking.** Find the direction in which these four points are most spread out. PCA does that in three moves: move the cloud so its centre is at the origin, measure how the two features vary together (the covariance matrix), and take the eigenvector with the biggest eigenvalue.

**(a) The mean and the centred points.**

:::steps
Average each feature separately
$$
\bar x=\frac14\begin{bmatrix}2+0+1+(-1)\\1+(-1)+2+0\end{bmatrix}=\frac14\begin{bmatrix}2\\2\end{bmatrix}=\begin{bmatrix}1/2\\1/2\end{bmatrix}
$$
Subtract the mean from each point
$$
s_1=\begin{bmatrix}3/2\\1/2\end{bmatrix}\quad s_2=\begin{bmatrix}-1/2\\-3/2\end{bmatrix}\quad s_3=\begin{bmatrix}1/2\\3/2\end{bmatrix}\quad s_4=\begin{bmatrix}-3/2\\-1/2\end{bmatrix}
$$
Stack them as the rows of $X_c$
$$
X_c=\begin{bmatrix}3/2&1/2\\-1/2&-3/2\\1/2&3/2\\-3/2&-1/2\end{bmatrix}
$$
:::

Why centre? Variance measures spread **around the centre**. If you skip this step, the covariance would mix in where the cloud is, not just how it is shaped.

**(b) The covariance matrix, entry by entry.** $X_c^\top X_c$ is a $2\times2$ table: each entry is a dot product of two columns of $X_c$.

:::steps
Top-left: column 1 with itself (spread of feature 1)
$$
\big(\tfrac32\big)^2+\big(-\tfrac12\big)^2+\big(\tfrac12\big)^2+\big(-\tfrac32\big)^2=\tfrac94+\tfrac14+\tfrac14+\tfrac94=5
$$
Bottom-right: column 2 with itself (spread of feature 2)
$$
\big(\tfrac12\big)^2+\big(-\tfrac32\big)^2+\big(\tfrac32\big)^2+\big(-\tfrac12\big)^2=5
$$
Off-diagonal: column 1 with column 2 (how they move together)
$$
\tfrac32\cdot\tfrac12+\big(-\tfrac12\big)\big(-\tfrac32\big)+\tfrac12\cdot\tfrac32+\big(-\tfrac32\big)\big(-\tfrac12\big)=\tfrac34\cdot4=3
$$
Divide by $n=4$
$$
C=\frac14\begin{bmatrix}5&3\\3&5\end{bmatrix}=\begin{bmatrix}5/4&3/4\\3/4&5/4\end{bmatrix}
$$
:::

How to read it: each feature has variance $5/4$; the covariance $3/4$ is positive and large, so when one feature is above its average the other usually is too — the points lie along a rising diagonal.

**(c) Eigenvalues and eigenvectors.**

:::steps
Characteristic equation
$$
\Big(\tfrac54-\lambda\Big)^2-\Big(\tfrac34\Big)^2=0\quad\Longrightarrow\quad\tfrac54-\lambda=\pm\tfrac34
$$
So
$$
\lambda_1=\tfrac54+\tfrac34=2\qquad\qquad \lambda_2=\tfrac54-\tfrac34=\tfrac12
$$
For $\lambda_1=2$: subtract 2 from the diagonal and solve
$$
\begin{bmatrix}-3/4&3/4\\3/4&-3/4\end{bmatrix}\begin{bmatrix}a\\b\end{bmatrix}=\mathbf 0\quad\Longrightarrow\quad b=a\quad\Longrightarrow\quad v_1=\frac{1}{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}
$$
For $\lambda_2=\tfrac12$: the perpendicular direction (symmetric matrix)
$$
v_2=\frac{1}{\sqrt2}\begin{bmatrix}1\\-1\end{bmatrix}
$$
:::

:::result Answer
$$
\text{first principal component }v_1=\frac{1}{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix},\qquad \text{it carries }\frac{2}{2+1/2}=80\%\ \text{of the variance}
$$
:::

**Shortcut to remember.** Any matrix of the form $\begin{bmatrix}a&b\\b&a\end{bmatrix}$ has eigenvalues $a+b$ and $a-b$, with eigenvectors $(1,1)$ and $(1,-1)$. Here $a=\tfrac54$, $b=\tfrac34$.

---

## Problem 6 — scores and reconstruction

:::orig [PSet 7 · Problem 6 ↗](pdfs/psets/PSet-07.pdf#page=3)
Use the centered observations from Problem 5. (a) Project each observation onto the first principal component to obtain its one-dimensional PCA score. (b) Reconstruct each observation using only this score and the first principal component. Give the reconstructed points in the original two-feature coordinates. (c) In words, describe what information this one-dimensional representation keeps and what it loses.
:::

**What it is really asking.** Describe each point by **one** number — its position along $v_1$ — then go back from that one number to a 2-D point and see what was lost.

**(a) The score is a dot product.** The score $z_i=v_1^\top s_i$ is the coordinate of $s_i$ along the unit direction $v_1$ — where the point lands when you drop it perpendicularly onto that line.

:::steps
Point 1
$$
z_1=\frac{1}{\sqrt2}\begin{bmatrix}1&1\end{bmatrix}\begin{bmatrix}3/2\\1/2\end{bmatrix}=\frac{1}{\sqrt2}\cdot2=\sqrt2
$$
Point 2
$$
z_2=\frac{1}{\sqrt2}\Big(-\tfrac12-\tfrac32\Big)=\frac{-2}{\sqrt2}=-\sqrt2
$$
Points 3 and 4 the same way
$$
z_3=\sqrt2\qquad\qquad z_4=-\sqrt2
$$
:::

**(b) Reconstruct: score times direction, then add the mean back.**

:::steps
Point 1 in centred coordinates
$$
\hat s_1=z_1v_1=\sqrt2\cdot\frac{1}{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}=\begin{bmatrix}1\\1\end{bmatrix}
$$
Add the mean to return to the original coordinates
$$
\hat x_1=\bar x+\hat s_1=\begin{bmatrix}1/2\\1/2\end{bmatrix}+\begin{bmatrix}1\\1\end{bmatrix}=\begin{bmatrix}3/2\\3/2\end{bmatrix}
$$
All four
$$
\hat x_1=\hat x_3=\begin{bmatrix}3/2\\3/2\end{bmatrix}\qquad\qquad \hat x_2=\hat x_4=\begin{bmatrix}-1/2\\-1/2\end{bmatrix}
$$
:::

**(c) Kept and lost.**

:::steps
What was lost for point 1: the original minus the reconstruction
$$
x_1-\hat x_1=\begin{bmatrix}2\\1\end{bmatrix}-\begin{bmatrix}3/2\\3/2\end{bmatrix}=\begin{bmatrix}1/2\\-1/2\end{bmatrix}
$$
Its squared length — every point loses the same amount here
$$
\Big\|\begin{bmatrix}1/2\\-1/2\end{bmatrix}\Big\|^2=\tfrac14+\tfrac14=\tfrac12=\lambda_2
$$
:::

The one-number description **keeps** the position along the diagonal $(1,1)$ — the "overall level" of the two features. It **loses** the position along $(1,-1)$ — the difference between the two features. The lost part points exactly along $v_2$, and the average squared error equals the dropped eigenvalue $\lambda_2=\tfrac12$. That is the general rule: **error = the eigenvalues you threw away.**

---

## Problem 7 — how many components to keep

:::orig [PSet 7 · Problem 7 ↗](pdfs/psets/PSet-07.pdf#page=3)
The centered observations $X_c=\begin{pmatrix}2&0\\0&1\\-2&0\\0&-1\end{pmatrix}$ describe four objects using two measurements. (a) Compute $C=\tfrac14X_c^\top X_c$ and its eigenvalues. (b) What fraction of the total variance is retained by keeping only the first principal component? (c) A researcher wants a two-dimensional view for visualization. Should they keep one or two components? Explain the trade-off.
:::

:::steps
(a) Column 1 squared, column 2 squared, columns multiplied together
$$
2^2+0+(-2)^2+0=8\qquad 0+1^2+0+(-1)^2=2\qquad 2\cdot0+0\cdot1+(-2)\cdot0+0\cdot(-1)=0
$$
Divide by 4
$$
C=\frac14\begin{bmatrix}8&0\\0&2\end{bmatrix}=\begin{bmatrix}2&0\\0&1/2\end{bmatrix}\qquad\Longrightarrow\qquad\lambda_1=2,\quad\lambda_2=\tfrac12
$$
(b) Fraction of variance kept by one component
$$
T_1=\frac{\lambda_1}{\lambda_1+\lambda_2}=\frac{2}{2.5}=0.8
$$
:::

The covariance is zero, so the two measurements are already uncorrelated and the principal components are just the two axes. One component keeps **80%** of the variance.

**(c) The trade-off.** The researcher wants a **two-dimensional** view. The data are only two-dimensional to begin with, so keeping both components keeps 100% of the information — but it reduces nothing; it is just a rotation. Keeping one component compresses to a single number per object but loses 20% of the variance. For a 2-D plot: keep two. For compression: one.

---

## Problem 8 — why PCA directions are singular vectors

:::orig [PSet 7 · Problem 8 ↗](pdfs/psets/PSet-07.pdf#page=3)
A centered data matrix has SVD $X_c=U\Sigma V^\top$. Explain the relationship between the PCA directions and the columns of $V$ by showing how $C=\tfrac1nX_c^\top X_c$ can be written using $V$ and $\Sigma$. If the singular values are $\sigma_1\ge\sigma_2\ge\cdots$, which columns of $V$ should be used for a $k$-dimensional PCA representation? Explain briefly.
:::

**What it is really asking.** Show that "do PCA" and "do an SVD of the centred data" give the same directions. Just substitute and simplify.

:::steps
Substitute the SVD into the covariance (samples are rows here)
$$
C=\frac1nX_c^\top X_c=\frac1n\big(U\Sigma V^\top\big)^\top\big(U\Sigma V^\top\big)
$$
Transpose of a product reverses the order
$$
\big(U\Sigma V^\top\big)^\top=V\Sigma^\top U^\top
$$
So
$$
C=\frac1nV\Sigma^\top\,U^\top U\,\Sigma V^\top
$$
$U$ is orthogonal, so $U^\top U=I$ and it disappears
$$
C=V\left(\frac{\Sigma^\top\Sigma}{n}\right)V^\top
$$
:::

**Read the result.** This has the shape (orthogonal)(diagonal)(same orthogonal)$^\top$ — that **is** an eigen-decomposition of $C$. So:

:::result
$$
\text{columns of }V=\text{eigenvectors of }C=\text{principal components},\qquad \lambda_i=\frac{\sigma_i^2}{n}
$$
:::

For a $k$-dimensional representation use the **first $k$ columns of $V$**: they belong to the largest singular values, and larger $\sigma_i$ means larger variance $\sigma_i^2/n$.

*(If the samples were the columns instead, $C=\tfrac1nX_cX_c^\top$ and the same algebra gives the columns of $U$.)*

---

## Problem 9 — image compression with the SVD

:::orig [PSet 7 · Problem 9 ↗](pdfs/psets/PSet-07.pdf#page=4)
An image is represented by a matrix $A\in\mathbb{R}^{m\times n}$ of pixel intensities. Its rank-$k$ SVD approximation is $A_k=U_k\Sigma_kV_k^\top$. (a) How many real numbers are needed to store $A$ directly? How many are needed to store the three factors in $A_k$? (b) For an image of size $1000\times800$, compare these counts when $k=20$. (c) Explain why increasing $k$ generally improves image fidelity but reduces compression.
:::

**(a) Count what you store.**

:::steps
The image directly: one number per pixel
$$
m\times n
$$
The factors: $U_k$ is $m\times k$, $\Sigma_k$ is just $k$ numbers (its diagonal), $V_k^\top$ is $k\times n$
$$
mk+k+kn=k\,(m+n+1)
$$
:::

**(b) Plug in $m=1000$, $n=800$, $k=20$.**

:::steps
Directly
$$
1000\times800=800{,}000
$$
With $k=20$
$$
20\,(1000+800+1)=20\times1801=36{,}020
$$
As a fraction
$$
\frac{36{,}020}{800{,}000}\approx4.5\%
$$
:::

**(c) The trade-off.** Each extra layer $\sigma_iu_iv_i^\top$ adds detail — the error $\sum_{i>k}\sigma_i^2$ can only go down as $k$ grows — but each layer costs another $m+n+1$ numbers. More $k$: sharper image, bigger file.

---

## Problem 10 — designing a PCA pipeline

:::orig [PSet 7 · Problem 10 ↗](pdfs/psets/PSet-07.pdf#page=4)
You are asked to build a compact representation of a dataset containing thousands of customer records, each described by hundreds of numeric measurements. The downstream model is too slow with all measurements. (a) Describe a PCA-based preprocessing pipeline from raw measurements to reduced features, including how you handle centering and how you choose the number of components. (b) Two measurements use very different units (annual income in dollars and age in years). What should you check before applying PCA, and what choice would you make if scale differences are not meaningful? (c) Give one measure of information retained and one downstream check you would use to decide whether the reduction is useful.
:::

**(a) The pipeline, step by step, with the reason for each step.**

1. **Split** the data into a training set and an evaluation set. *Why:* you must judge the final model on data it never saw, and that includes the PCA step itself.
2. **Compute the feature means on the training set only**, and centre the training data with them. *Why:* using the evaluation data to compute the mean would leak information from it into training.
3. **Fit PCA on the centred training data**: covariance, eigenvectors, keep the top $k$ in $W$.
4. **Apply the same mean and the same $W$** to the evaluation data: $z=W^\top(x-\bar x_{\text{train}})$.
5. **Train the model** on the reduced training features $z$.
6. **Choose $k$** either by a target fraction of variance (for example, the smallest $k$ with $T_k\ge0.95$) or by trying several $k$ and keeping the one with the best validation score.

**(b) Units.** PCA looks for large variance, and variance depends on units: income in dollars has variance in the millions, age in years only in the hundreds. Without fixing this, the first principal component would simply be "income" — not because income matters more, but because its numbers are bigger. If the scale differences are not meaningful, **standardise** each feature (subtract its mean, divide by its standard deviation, both from the training set) before PCA.

**(c) Two checks.**
- *Information kept:* the fraction of variance retained, $T_k=\sum_{i\le k}\lambda_i\big/\sum_i\lambda_i$.
- *Usefulness downstream:* compare the model's validation accuracy (and its speed) with and without the reduction. If accuracy barely drops while the model becomes much faster, the reduction is worth it.

---

## Problem 11 — compressing face photographs

:::orig [PSet 7 · Problem 11 ↗](pdfs/psets/PSet-07.pdf#page=4)
A team wants to compress a collection of face photographs using a low-rank representation. Propose a practical SVD-based design. (a) Explain how you would arrange the pixel data into a matrix and how the SVD would produce a compressed representation. (b) What quantity would you inspect to choose the rank $k$? Give one reason not to choose $k$ solely by maximizing visual quality. (c) Describe how you would compare the compressed images with the originals, and name one limitation of low-rank compression for photographs.
:::

**(a) Arrange and decompose.** Flatten each photo into one long row of pixels (always in the same pixel order) and stack the rows: a matrix with one face per row. Compute its SVD and keep the first $k$ columns of $U$, the first $k$ singular values and the first $k$ rows of $V^\top$. Multiplying them back gives an approximate set of faces. The rows of $V^\top$ are "basis faces" (often called eigenfaces); each photo is stored as $k$ weights on those basis faces.

**(b) Choosing $k$.** Look at the cumulative energy

$$
\frac{\sigma_1^2+\cdots+\sigma_k^2}{\sigma_1^2+\cdots+\sigma_r^2}
$$

and pick $k$ to hit a storage or quality target. Why not just maximise visual quality? Because a bigger $k$ always looks better but costs more storage, so "best looking" would mean no compression at all — and what looks good to a person may not be what matters for the actual use (for example, face recognition).

**(c) Comparing.** Use the relative error $\|A-A_k\|_F/\|A\|_F$ as a number, and look at the images side by side. A limitation: low-rank compression tends to blur fine details (edges, texture), which may matter for recognising a face.

---

## Problem 12 — movie ratings with missing entries

:::orig [PSet 7 · Problem 12 ↗](pdfs/psets/PSet-07.pdf#page=5)
A movie service has a user-by-movie table of ratings, but most entries are missing because users have not watched most movies. The team wants to predict some missing ratings using a low-rank model. (a) Explain why directly applying an ordinary SVD to a table that replaces every missing rating by zero can give misleading results. (b) Propose a reasonable workflow that uses low-rank structure while respecting which ratings were actually observed. State what the model should be fitted to and how its rank could be selected. (c) Name a suitable validation strategy and one metric for judging rating predictions. Explain why the training error alone is not enough.
:::

**(a) Why zeros mislead.** A zero means "this user hated this movie", but a missing entry means "we don't know". Filling every gap with 0 invents thousands of terrible ratings. Since most entries are missing, those fake zeros dominate the matrix, and the SVD faithfully learns the pattern of the zeros instead of people's real taste.

**(b) A better workflow.** Model each rating as a dot product of a small user vector and a small movie vector (a rank-$k$ model), and fit those vectors by minimising the squared error **only over the ratings that were actually observed**, with a regularisation penalty to stop overfitting. Pick the rank $k$ and the penalty strength by validation.

**(c) Validation.** Hide some known ratings (or, to predict the future, train on older ratings and test on newer ones), fit on the rest, and measure the RMSE on the hidden ones. Training error alone is not enough: a more complex model always fits the training ratings better, even while its predictions on unseen ratings get worse — that is overfitting.

:::remember
SVD: $A^\top A$ → eigenvalues → $\sigma=\sqrt\lambda$ → $v$ → $u=Av/\sigma$; rank = number of non-zero $\sigma$; the error of keeping $k$ layers is $\sum_{i>k}\sigma_i^2$. PCA: centre → covariance → top eigenvectors; the error of keeping $k$ components is the sum of the dropped eigenvalues.
:::

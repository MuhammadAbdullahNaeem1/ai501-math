# L06 · Practice quizzes — Eigenvalue decomposition

Three mock quizzes, **20 minutes and 10 marks** each, in the style of the 2026 quizzes and of 2025 Mid Problem 8 (an eigen-decomposition and a matrix power).

<div class="pdf-links">
<a href="l06-notes.html">L06 notes</a>
<a href="pdfs/psets/PSet-06-Solution.pdf">PSet 6 solutions (P3–P5)</a>
<a href="pdfs/past/Mid-2025-Part2.pdf">2025 Mid Part II (P8)</a>
</div>

## Mock Quiz 6A

:::question Question 1 (5 marks)
Let $A=\begin{bmatrix}5&2\\2&2\end{bmatrix}$.

1. Find the eigenvalues, and check them against the trace and the determinant. *(2 marks)*
2. Find orthonormal eigenvectors and write $A=Q\Lambda Q^\top$. *(2 marks)*
3. Why is $Q^{-1}=Q^\top$ here? *(1 mark)*

:::solution
1. With $\operatorname{tr}A=7$ and $\det A=10-4=6$,
$$
p(\lambda)=\lambda^2-7\lambda+6=(\lambda-6)(\lambda-1),\qquad\text{so}\qquad \lambda_1=6,\quad \lambda_2=1 .
$$
   As checks, $6+1=7=\operatorname{tr}A$ and $6\cdot1=6=\det A$.
2. For $\lambda=6$,
$$
(A-6I)v=\begin{bmatrix}-1&2\\2&-4\end{bmatrix}v=\mathbf 0\ \Longrightarrow\ v_1=2v_2,\qquad q_1=\frac1{\sqrt5}\begin{bmatrix}2\\1\end{bmatrix};
$$
   for $\lambda=1$,
$$
(A-I)v=\begin{bmatrix}4&2\\2&1\end{bmatrix}v=\mathbf 0\ \Longrightarrow\ v_2=-2v_1,\qquad q_2=\frac1{\sqrt5}\begin{bmatrix}1\\-2\end{bmatrix}.
$$
   Therefore
$$
A=\frac{1}{\sqrt5}\begin{bmatrix}2&1\\1&-2\end{bmatrix}\begin{bmatrix}6&0\\0&1\end{bmatrix}\frac{1}{\sqrt5}\begin{bmatrix}2&1\\1&-2\end{bmatrix}.
$$
3. $A$ is symmetric, so by the spectral theorem its eigenvectors are orthonormal, which means $Q^\top Q=I$.
:::
:::

:::question Question 2 (3 marks)
A $3\times3$ matrix $A$ has eigenvalues $1$, $-2$ and $3$.

1. What are $\det A$ and $\operatorname{tr}A$? *(1 mark)*
2. What are the eigenvalues of $A^{-1}$, and of $A^2-A+2I$? *(2 marks)*

:::solution
1. $\det A=1\cdot(-2)\cdot3=-6$ and $\operatorname{tr}A=1-2+3=2$.
2. The eigenvalues of $A^{-1}$ are the reciprocals, $1$, $-\tfrac12$ and $\tfrac13$. For $f(\lambda)=\lambda^2-\lambda+2$,
$$
f(1)=1-1+2=2,\qquad f(-2)=4+2+2=8,\qquad f(3)=9-3+2=8 .
$$
:::
:::

:::question Question 3 (2 marks)
Decide whether each statement is true or false, with a reason.

1. If $0$ is an eigenvalue of $A$, then the columns of $A$ are linearly dependent.
2. Every real $2\times2$ matrix has a real eigenvalue.

:::solution
1. **True.** $Aq=\mathbf 0$ with $q\neq\mathbf 0$ is a non-trivial combination of the columns that equals zero.
2. **False.** The rotation by $90^\circ$, $\begin{bmatrix}0&-1\\1&0\end{bmatrix}$, has $p(\lambda)=\lambda^2+1$, which has no real roots.
:::
:::

## Mock Quiz 6B

:::question Question 1 (5 marks)
Let $C=\begin{bmatrix}4&1\\1&4\end{bmatrix}$.

1. Without using the characteristic polynomial, explain why $(1,1)$ and $(1,-1)$ are eigenvectors, and give their eigenvalues. *(2 marks)*
2. Use the eigen-decomposition to compute $C^3$. *(3 marks)*

:::solution
1. Equal diagonal entries and equal off-diagonal entries treat the two coordinates symmetrically, so the sum and difference directions are preserved:
$$
C\begin{bmatrix}1\\1\end{bmatrix}=\begin{bmatrix}5\\5\end{bmatrix}=5\begin{bmatrix}1\\1\end{bmatrix},\qquad
C\begin{bmatrix}1\\-1\end{bmatrix}=\begin{bmatrix}3\\-3\end{bmatrix}=3\begin{bmatrix}1\\-1\end{bmatrix}.
$$
   The eigenvalues are $5$ and $3$.
2. With $Q=\tfrac1{\sqrt2}\begin{bmatrix}1&1\\1&-1\end{bmatrix}$ and $\Lambda^3=\operatorname{diag}(125,27)$, write $C^3=Q\Lambda^3Q^\top$ as a sum of rank-one pieces:
$$
C^3=125\,q_1q_1^\top+27\,q_2q_2^\top=\frac12\left(125\begin{bmatrix}1&1\\1&1\end{bmatrix}+27\begin{bmatrix}1&-1\\-1&1\end{bmatrix}\right)=\frac12\begin{bmatrix}152&98\\98&152\end{bmatrix}=\boxed{\begin{bmatrix}76&49\\49&76\end{bmatrix}}.
$$
   **Check by direct multiplication.**
$$
C^2=\begin{bmatrix}17&8\\8&17\end{bmatrix},\qquad C^3=C^2C=\begin{bmatrix}68+8&17+32\\32+17&8+68\end{bmatrix}=\begin{bmatrix}76&49\\49&76\end{bmatrix}.
$$
:::
:::

:::question Question 2 (3 marks)
Let $A=\begin{bmatrix}2&4\\1&2\end{bmatrix}$.

1. Find the eigenvalues and an eigenvector for each. *(2 marks)*
2. Is $A$ invertible? Relate your answer to its columns. *(1 mark)*

:::solution
1. Here $\operatorname{tr}A=4$ and $\det A=4-4=0$, so $p(\lambda)=\lambda^2-4\lambda=\lambda(\lambda-4)$ and the eigenvalues are $0$ and $4$.
$$
\lambda=0:\ \begin{bmatrix}2&4\\1&2\end{bmatrix}v=\mathbf 0\ \Rightarrow\ v_1=-2v_2,\ \ q=\begin{bmatrix}-2\\1\end{bmatrix};
\qquad
\lambda=4:\ \begin{bmatrix}-2&4\\1&-2\end{bmatrix}v=\mathbf 0\ \Rightarrow\ v_1=2v_2,\ \ q=\begin{bmatrix}2\\1\end{bmatrix}.
$$
2. **No.** The zero eigenvalue means $\det A=0$. Indeed column 2 is twice column 1, and the relation $-2a_1+a_2=\mathbf 0$ is exactly the eigenvector $(-2,1)$.
:::
:::

:::question Question 3 (2 marks)
Prove that if $Aq=\lambda q$ and $A$ is invertible, then $A^{-1}q=\tfrac1\lambda q$.

:::solution
Since $A$ is invertible, $\lambda\neq0$; otherwise $Aq=\mathbf 0$ with $q\neq\mathbf 0$. Multiplying $Aq=\lambda q$ on the left by $A^{-1}$ gives
$$
q=\lambda\,A^{-1}q,\qquad\text{and dividing by }\lambda,\qquad A^{-1}q=\frac{1}{\lambda}\,q .
$$
:::
:::

## Mock Quiz 6C

:::question Question 1 (4 marks)
A symmetric $2\times2$ matrix has eigenvalue $4$ with eigenvector $(1,2)$, and eigenvalue $-1$.

1. Find the other eigenvector without computation, and explain why. *(1 mark)*
2. Reconstruct the matrix. *(3 marks)*

:::solution
1. $(2,-1)$, or any non-zero multiple of it: for a symmetric matrix, eigenvectors belonging to distinct eigenvalues are orthogonal.
2. Normalise the eigenvectors and assemble $A=Q\Lambda Q^\top$ as a sum of rank-one pieces:
$$
A=4\cdot\frac15\begin{bmatrix}1\\2\end{bmatrix}\begin{bmatrix}1&2\end{bmatrix}+(-1)\cdot\frac15\begin{bmatrix}2\\-1\end{bmatrix}\begin{bmatrix}2&-1\end{bmatrix}
=\frac15\left(\begin{bmatrix}4&8\\8&16\end{bmatrix}-\begin{bmatrix}4&-2\\-2&1\end{bmatrix}\right)=\frac15\begin{bmatrix}0&10\\10&15\end{bmatrix}=\boxed{\begin{bmatrix}0&2\\2&3\end{bmatrix}}.
$$
   **Checks.** $A(1,2)^\top=(4,8)^\top=4\,(1,2)^\top$; $\operatorname{tr}A=3=4+(-1)$; and $\det A=-4=4\cdot(-1)$.
:::
:::

:::question Question 2 (3 marks)
Describe geometrically, using its eigen-decomposition, what $S=\begin{bmatrix}2&1\\1&2\end{bmatrix}$ does to the unit circle. What is the area of the image?

:::solution
$S=Q\operatorname{diag}(3,1)Q^\top$, where $Q$ is a rotation by $45^\circ$. The map rotates by $-45^\circ$ (bringing the diagonal onto the $x$-axis), stretches horizontally by $3$, and rotates back. The unit circle therefore becomes an ellipse with semi-axis $3$ along $(1,1)$ and semi-axis $1$ along $(-1,1)$, and its area is
$$
\pi\cdot3\cdot1=3\pi=|\det S|\,\pi .
$$
:::
:::

:::question Question 3 (3 marks)
A matrix $A$ has eigenvalues $2$ and $0.5$, with eigenvectors $q_1$ and $q_2$. Let $x=q_1+q_2$.

1. Write $A^{10}x$ in terms of $q_1$ and $q_2$. *(1 mark)*
2. What direction does $A^kx$ approach as $k\to\infty$, and why? *(2 marks)*

:::solution
1. Each eigen-component is scaled by its eigenvalue raised to the tenth power:
$$
A^{10}x=2^{10}q_1+0.5^{10}q_2=1024\,q_1+\frac{1}{1024}\,q_2 .
$$
2. **The direction of $q_1$.** The coefficient of $q_1$ grows like $2^k$, while that of $q_2$ shrinks like $0.5^k$, so repeated application pulls every vector towards the eigenvector with the largest $|\lambda|$.
:::
:::

:::remember
The EVD quiz recipe: solve $\lambda^2-\operatorname{tr}(A)\,\lambda+\det A=0$; use one row of $(A-\lambda I)q=\mathbf 0$; normalise; check $Aq=\lambda q$. For powers and inverses, act on $\Lambda$ only; and for a symmetric matrix, $Q^{-1}=Q^\top$.
:::

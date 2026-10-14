# L06 · Practice quizzes — Eigenvalue decomposition

Three mock quizzes, **20 minutes / 10 marks**, in the style of the 2026 quizzes plus the 2025 Mid Problem 8 (EVD and powers).

<div class="pdf-links">
<a href="l06-notes.html">L06 notes</a>
<a href="pdfs/psets/PSet-06-Solution.pdf">PSet 6 solutions (P3–P5)</a>
<a href="pdfs/past/Mid-2025-Part2.pdf">2025 Mid Part II (P8)</a>
</div>

## Mock Quiz 6A

:::question Question 1 (5 marks)
$A=\begin{bmatrix}5&2\\2&2\end{bmatrix}$.
(a) Find the eigenvalues (check with trace and determinant). (2)
(b) Find orthonormal eigenvectors and write $A=Q\Lambda Q^\top$. (2)
(c) Why is $Q^{-1}=Q^\top$ here? (1)

:::solution
(a) $p(\lambda)=\lambda^2-7\lambda+(10-4)=\lambda^2-7\lambda+6=(\lambda-6)(\lambda-1)$ ⇒ $\lambda_1=6,\lambda_2=1$. Sum $7=\operatorname{tr}A$ ✓, product $6=\det A$ ✓.
(b) $\lambda=6$: $\begin{bmatrix}-1&2\\2&-4\end{bmatrix}v=0\Rightarrow v_1=2v_2$, $q_1=\tfrac1{\sqrt5}(2,1)$. $\lambda=1$: $\begin{bmatrix}4&2\\2&1\end{bmatrix}v=0\Rightarrow v_2=-2v_1$, $q_2=\tfrac1{\sqrt5}(1,-2)$.
$$
A=\frac1{\sqrt5}\begin{bmatrix}2&1\\1&-2\end{bmatrix}\begin{bmatrix}6&0\\0&1\end{bmatrix}\frac1{\sqrt5}\begin{bmatrix}2&1\\1&-2\end{bmatrix}.
$$
(c) $A$ is symmetric ⇒ (spectral theorem) eigenvectors orthonormal ⇒ $Q^\top Q=I$.
:::
:::

:::question Question 2 (3 marks)
$A$ is $3\times3$ with eigenvalues $1,-2,3$.
(a) $\det A$ and $\operatorname{tr}A$? (1) (b) Eigenvalues of $A^{-1}$ and of $A^2-A+2I$? (2)

:::solution
(a) $\det=1\cdot(-2)\cdot3=-6$; $\operatorname{tr}=1-2+3=2$.
(b) $A^{-1}$: $1,-\tfrac12,\tfrac13$. $f(\lambda)=\lambda^2-\lambda+2$: $f(1)=2$, $f(-2)=4+2+2=8$, $f(3)=9-3+2=8$.
:::
:::

:::question Question 3 (2 marks)
True/False with reason: (a) If $0$ is an eigenvalue of $A$, the columns of $A$ are linearly dependent. (b) Every real $2\times2$ matrix has a real eigenvalue.

:::solution
(a) **True** — $Aq=0$ with $q\neq0$ is a non-trivial combination of the columns equal to zero.
(b) **False** — rotation by $90^\circ$, $\begin{bmatrix}0&-1\\1&0\end{bmatrix}$, has $p(\lambda)=\lambda^2+1$, no real roots.
:::
:::

## Mock Quiz 6B

:::question Question 1 (5 marks)
$C=\begin{bmatrix}4&1\\1&4\end{bmatrix}$.
(a) Without the characteristic polynomial, explain why $(1,1)$ and $(1,-1)$ are eigenvectors, and give their eigenvalues. (2)
(b) Use the EVD to compute $C^3$. (3)

:::solution
(a) Equal diagonals and equal off-diagonals: $C(1,1)^\top=(5,5)^\top=5(1,1)^\top$, $C(1,-1)^\top=(3,-3)^\top=3(1,-1)^\top$ ⇒ $\lambda=5,3$.
(b) $Q=\tfrac1{\sqrt2}\begin{bmatrix}1&1\\1&-1\end{bmatrix}$, $\Lambda^3=\operatorname{diag}(125,27)$.
$$
C^3=Q\Lambda^3Q^\top=\frac12\left(125\begin{bmatrix}1&1\\1&1\end{bmatrix}+27\begin{bmatrix}1&-1\\-1&1\end{bmatrix}\right)=\begin{bmatrix}76&49\\49&76\end{bmatrix}.
$$
Check: $C^2=\begin{bmatrix}17&8\\8&17\end{bmatrix}$, $C^3=C^2C=\begin{bmatrix}68+8&17+32\\32+17&8+68\end{bmatrix}=\begin{bmatrix}76&49\\49&76\end{bmatrix}$ ✓.
:::
:::

:::question Question 2 (3 marks)
$A=\begin{bmatrix}2&4\\1&2\end{bmatrix}$.
(a) Find the eigenvalues and an eigenvector for each. (2)
(b) Is $A$ invertible? Relate your answer to its columns. (1)

:::solution
(a) $p=\lambda^2-4\lambda+0=\lambda(\lambda-4)$ ⇒ $\lambda=0,4$. $\lambda=0$: $\begin{bmatrix}2&4\\1&2\end{bmatrix}v=0\Rightarrow v_1=-2v_2$, $q=(-2,1)$. $\lambda=4$: $\begin{bmatrix}-2&4\\1&-2\end{bmatrix}v=0\Rightarrow v_1=2v_2$, $q=(2,1)$.
(b) No — $\lambda=0$ ⇒ $\det A=0$; column 2 $=2\times$ column 1, and $-2a_1+a_2=0$ is exactly the eigenvector $(-2,1)$.
:::
:::

:::question Question 3 (2 marks)
Prove that if $Aq=\lambda q$ and $A$ is invertible, then $A^{-1}q=\tfrac1\lambda q$.

:::solution
$A$ invertible ⇒ $\lambda\neq0$ (else $Aq=0$ with $q\neq0$). Multiply $Aq=\lambda q$ by $A^{-1}$: $q=\lambda A^{-1}q$ ⇒ $A^{-1}q=\tfrac1\lambda q$.
:::
:::

## Mock Quiz 6C

:::question Question 1 (4 marks)
A symmetric $2\times2$ matrix has eigenvalue 4 with eigenvector $(1,2)$ and eigenvalue $-1$.
(a) Find the other eigenvector without computation. Why? (1)
(b) Reconstruct the matrix. (3)

:::solution
(a) $(2,-1)$ (or any multiple): eigenvectors of a symmetric matrix for distinct eigenvalues are orthogonal.
(b) $Q=\tfrac1{\sqrt5}\begin{bmatrix}1&2\\2&-1\end{bmatrix}$, $A=Q\operatorname{diag}(4,-1)Q^\top=\tfrac15\left(4\begin{bmatrix}1&2\\2&4\end{bmatrix}-\begin{bmatrix}4&-2\\-2&1\end{bmatrix}\right)=\tfrac15\begin{bmatrix}0&10\\10&15\end{bmatrix}=\begin{bmatrix}0&2\\2&3\end{bmatrix}$.
Check: $A(1,2)^\top=(4,8)^\top=4(1,2)^\top$ ✓; trace $3=4-1$ ✓; det $-4$ ✓.
:::
:::

:::question Question 2 (3 marks)
Describe geometrically what $S=\begin{bmatrix}2&1\\1&2\end{bmatrix}$ does to the unit circle, using its EVD. What is the area of the image?

:::solution
$S=Q\operatorname{diag}(3,1)Q^\top$, $Q$ a $45^\circ$ rotation. Rotate by −45° (diagonal onto the $x$-axis), stretch horizontally by 3, rotate back: the circle becomes an ellipse with semi-axis 3 along $(1,1)$ and 1 along $(-1,1)$. Area $=3\cdot1\cdot\pi=3\pi=|\det S|\pi$.
:::
:::

:::question Question 3 (3 marks)
$A$ has eigenvalues $2$ and $0.5$ with eigenvectors $q_1,q_2$. Let $x=q_1+q_2$.
(a) Write $A^{10}x$ in terms of $q_1,q_2$. (1)
(b) What direction does $A^kx$ approach as $k\to\infty$? Why? (2)

:::solution
(a) $A^{10}x=2^{10}q_1+0.5^{10}q_2=1024\,q_1+\tfrac{1}{1024}q_2$.
(b) The direction of $q_1$: the $q_1$ coefficient grows like $2^k$ while the $q_2$ coefficient shrinks like $0.5^k$ — repeated application pulls everything toward the eigenvector of the largest $|\lambda|$.
:::
:::

:::remember
EVD quiz recipe: $\lambda^2-\operatorname{tr}\lambda+\det=0$ → one row of $(A-\lambda I)q=0$ → normalise → check $Aq=\lambda q$; for powers/inverses act on $\Lambda$ only; symmetric ⇒ $Q^{-1}=Q^\top$.
:::

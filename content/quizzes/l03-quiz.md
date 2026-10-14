# L03 · Practice quizzes — Rank, column space, null space

Three mock quizzes, **20 minutes / 10 marks**, in the style of 2026 Quiz 5 Q1 (T/F with justification) and the mid problems on rank–nullity.

<div class="pdf-links">
<a href="l03-notes.html">L03 notes</a>
<a href="pdfs/quizzes/Quiz-5-Solution.pdf">Real Quiz 5 (2026)</a>
<a href="pdfs/past/Quiz-2025-3.pdf">2025 Quiz 3</a>
<a href="pdfs/psets/PSet-04-Solution.pdf">PSet 4 solutions</a>
</div>

## Mock Quiz 3A

:::question Question 1 (3 marks)
Tick True/False and justify (0.5 + 0.5 each).
(i) If $A\in\mathbb{R}^{m\times n}$ with $m<n$, then $\mathcal N(A)\neq\{0\}$.
(ii) If $\operatorname{rank}(A)<n$ then $Ax=b$ has infinitely many solutions.
(iii) $\operatorname{rank}(A^\top A)=\operatorname{rank}(A)$.

:::solution
(i) **True.** $\operatorname{rank}\le m<n$, so nullity $=n-\operatorname{rank}\ge n-m>0$.
(ii) **False.** It has **0 or** infinitely many; e.g. $A=\begin{pmatrix}1&1\\1&1\end{pmatrix}$, $b=(1,2)$ has none.
(iii) **True.** $A^\top Ax=0\Rightarrow x^\top A^\top Ax=\|Ax\|^2=0\Rightarrow Ax=0$, so $\mathcal N(A^\top A)=\mathcal N(A)$; both have $n$ columns, so by rank–nullity the ranks agree.
:::
:::

:::question Question 2 (4 marks)
$A=\begin{bmatrix}1&3&1\\2&6&4\\1&3&3\end{bmatrix}$.
(a) Reduce to echelon form; give $\operatorname{rank}(A)$ and the pivot/free variables. (2)
(b) Give a basis of $\mathcal N(A)$ and verify rank–nullity. (2)

:::solution
(a)
$$
\begin{bmatrix}1&3&1\\2&6&4\\1&3&3\end{bmatrix}\xrightarrow[R_3-R_1]{R_2-2R_1}\begin{bmatrix}1&3&1\\0&0&2\\0&0&2\end{bmatrix}\xrightarrow{R_3-R_2}\begin{bmatrix}1&3&1\\0&0&2\\0&0&0\end{bmatrix}.
$$
Pivots in columns 1 and 3 ⇒ rank 2; $x_1,x_3$ pivot, $x_2$ free.
(b) $x_2=1$: row 2 ⇒ $x_3=0$; row 1 ⇒ $x_1=-3$. $\mathcal N(A)=\operatorname{span}\left\{\begin{bmatrix}-3\\1\\0\end{bmatrix}\right\}$. Check $A(-3,1,0)^\top=(0,0,0)$ ✓. $2+1=3$ ✓.
:::
:::

:::question Question 3 (3 marks)
$A\in\mathbb{R}^{6\times9}$ has rank 5.
(a) $\dim\mathcal C(A)$ and $\dim\mathcal N(A)$? (1)
(b) Is $Ax=b$ solvable for every $b\in\mathbb{R}^6$? (1)
(c) If $Ax=b$ is solvable for some $b$, how many solutions does it have? (1)

:::solution
(a) $\dim\mathcal C(A)=5$; $\dim\mathcal N(A)=9-5=4$.
(b) No — $\mathcal C(A)$ is a 5-dim proper subspace of $\mathbb{R}^6$; need rank 6.
(c) Infinitely many: $x_p+\mathcal N(A)$ with a 4-dimensional null space.
:::
:::

## Mock Quiz 3B

:::question Question 1 (4 marks)
$A=\begin{bmatrix}1&2&0&1\\2&4&1&4\\3&6&1&5\end{bmatrix}$.
(a) Find the condition on $b=(b_1,b_2,b_3)$ for $Ax=b$ to be solvable; describe $\mathcal C(A)$ geometrically. (2)
(b) For $b=(1,3,4)$ write the complete solution $x=x_p+x_n$. (2)

:::solution
$$
\left[\begin{array}{cccc|c}1&2&0&1&b_1\\2&4&1&4&b_2\\3&6&1&5&b_3\end{array}\right]\to
\left[\begin{array}{cccc|c}1&2&0&1&b_1\\0&0&1&2&b_2-2b_1\\0&0&1&2&b_3-3b_1\end{array}\right]\to
\left[\begin{array}{cccc|c}1&2&0&1&b_1\\0&0&1&2&b_2-2b_1\\0&0&0&0&b_3-b_2-b_1\end{array}\right].
$$
(a) Solvable iff $b_3=b_1+b_2$: $\mathcal C(A)$ is the plane $b_1+b_2-b_3=0$ in $\mathbb{R}^3$ (rank 2).
(b) $1+3=4$ ✓. Free $x_2,x_4$. Particular ($x_2=x_4=0$): $x_3=3-2=1$, $x_1=1$ ⇒ $x_p=(1,0,1,0)$. Special: $x_2=1$: $s_1=(-2,1,0,0)$; $x_4=1$: $x_3=-2$, $x_1=-1$ ⇒ $s_2=(-1,0,-2,1)$.
$$
x=\begin{bmatrix}1\\0\\1\\0\end{bmatrix}+c_1\begin{bmatrix}-2\\1\\0\\0\end{bmatrix}+c_2\begin{bmatrix}-1\\0\\-2\\1\end{bmatrix}.
$$
:::
:::

:::question Question 2 (3 marks)
Construct a matrix with the property, or explain why none exists.
(a) $3\times3$, $\mathcal C(A)$ = the plane $x+y+z=0$ and $\mathcal N(A)=\operatorname{span}\{(1,1,1)\}$.
(b) $2\times4$ with $\mathcal N(A)=\{0\}$.
(c) $4\times2$ with rank 2.

:::solution
(a) Possible: rank 2, nullity 1 ✓ ($2+1=3$). Columns must lie in the plane and satisfy $a_1+a_2+a_3=0$: e.g. $a_1=(1,-1,0)$, $a_2=(0,1,-1)$, $a_3=-(a_1+a_2)=(-1,0,1)$.
(b) Impossible: rank $\le2$ ⇒ nullity $\ge4-2=2$.
(c) Possible: $\begin{pmatrix}1&0\\0&1\\0&0\\0&0\end{pmatrix}$.
:::
:::

:::question Question 3 (3 marks)
Prove that $\mathcal C(AB)\subseteq\mathcal C(A)$ and hence $\operatorname{rank}(AB)\le\operatorname{rank}(A)$. Give $2\times2$ matrices where $\operatorname{rank}(AB)<\min(\operatorname{rank}A,\operatorname{rank}B)$.

:::solution
Column $j$ of $AB$ is $Ab_j=\sum_k b_{kj}a_k$ — a combination of the columns of $A$, so it lies in $\mathcal C(A)$; spans of vectors in a subspace stay in it ⇒ $\mathcal C(AB)\subseteq\mathcal C(A)$ ⇒ $\dim\mathcal C(AB)\le\dim\mathcal C(A)$. *(2)*
$A=B=\begin{pmatrix}0&1\\0&0\end{pmatrix}$: ranks 1, $AB=0$ rank 0. *(1)*
:::
:::

## Mock Quiz 3C

:::question Question 1 (2 marks)
Without elimination, give the rank of each and describe its column space.
$P=\begin{bmatrix}1&-2\\-3&6\\2&-4\end{bmatrix}$, $Q=\begin{bmatrix}1&0&0\\0&0&1\\0&1&0\end{bmatrix}$.

:::solution
$P$: column 2 $=-2\times$ column 1 ⇒ rank 1, $\mathcal C(P)$ = the line through $(1,-3,2)$ in $\mathbb{R}^3$.
$Q$: a permutation matrix (columns are $e_1,e_3,e_2$) ⇒ rank 3, $\mathcal C(Q)=\mathbb{R}^3$.
:::
:::

:::question Question 2 (4 marks)
Let $A=\begin{bmatrix}1&1&2\\0&1&1\\1&2&3\\2&1&3\end{bmatrix}$.
(a) Find the rank and a basis for $\mathcal C(A)$. (2)
(b) Is $b=(3,2,5,4)$ in $\mathcal C(A)$? If yes, give all $x$ with $Ax=b$. (2)

:::solution
(a) Column 3 = column 1 + column 2, columns 1, 2 not parallel ⇒ rank 2; basis $\{(1,0,1,2),(1,1,2,1)\}$.
(b) Try $x_1a_1+x_2a_2=b$: row 2 gives $x_2=2$; row 1: $x_1=1$; row 3: $1+4=5$ ✓; row 4: $2+2=4$ ✓. So $x_p=(1,2,0)$. $\mathcal N(A)=\operatorname{span}\{(1,1,-1)\}$ ⇒
$$
x=\begin{bmatrix}1\\2\\0\end{bmatrix}+t\begin{bmatrix}1\\1\\-1\end{bmatrix},\ t\in\mathbb{R}.
$$
:::
:::

:::question Question 3 (4 marks)
A data matrix $X\in\mathbb{R}^{100\times4}$ has columns: height (cm), weight (kg), height (inches), age.
(a) What is the largest possible rank of $X$? Why? (1)
(b) Give a non-zero vector in $\mathcal N(X)$. (1)
(c) Explain why the least-squares weights $\theta$ are not unique, and why $X^\top X$ is singular. (2)

:::solution
(a) 3: height(in) $=\tfrac1{2.54}$ height(cm), so at most 3 independent columns.
(b) $z=(1,0,-2.54,0)$: $Xz=\text{cm}-2.54\cdot\text{in}=0$.
(c) $X\theta$ and $X(\theta+tz)$ give identical predictions for every $t$, so the loss can't distinguish them. Since $X$ has dependent columns, $X^\top Xz=0$ for $z\neq0$ ⇒ $X^\top X$ is singular (Gram matrix is invertible only with independent columns).
:::
:::

:::remember
Rank–nullity questions: (1) eliminate in matrix form, (2) count pivots → rank, (3) free columns → nullity and special solutions, (4) solvability via the zero rows of $[A\mid b]$.
:::

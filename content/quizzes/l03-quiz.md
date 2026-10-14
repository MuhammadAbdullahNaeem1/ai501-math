# L03 · Practice quizzes — Rank, column space, null space

Three mock quizzes, **20 minutes and 10 marks** each, in the style of 2026 Quiz 5, Question 1 (true/false with justification) and of the mid-exam problems on rank–nullity.

<div class="pdf-links">
<a href="l03-notes.html">L03 notes</a>
<a href="pdfs/quizzes/Quiz-5-Solution.pdf">Real Quiz 5 (2026)</a>
<a href="pdfs/past/Quiz-2025-3.pdf">2025 Quiz 3</a>
<a href="pdfs/psets/PSet-04-Solution.pdf">PSet 4 solutions</a>
</div>

## Mock Quiz 3A

:::question Question 1 (3 marks)
Decide whether each statement is true or false and justify your answer (half a mark for each).

1. If $A\in\mathbb{R}^{m\times n}$ with $m<n$, then $\mathcal N(A)\neq\{\mathbf 0\}$.
2. If $\operatorname{rank}(A)<n$, then $Ax=b$ has infinitely many solutions.
3. $\operatorname{rank}(A^\top A)=\operatorname{rank}(A)$.

:::solution
1. **True.** The rank is at most $m<n$, so by rank–nullity the nullity is $n-\operatorname{rank}A\ge n-m>0$.
2. **False.** There are either **no** solutions or infinitely many. For example, $A=\begin{pmatrix}1&1\\1&1\end{pmatrix}$ with $b=(1,2)$ has no solution.
3. **True.** If $A^\top Ax=\mathbf 0$, then $x^\top A^\top Ax=\|Ax\|^2=0$, so $Ax=\mathbf 0$; conversely $Ax=\mathbf 0$ implies $A^\top Ax=\mathbf 0$. Hence $\mathcal N(A^\top A)=\mathcal N(A)$, and since both matrices have $n$ columns, rank–nullity gives them equal ranks.
:::
:::

:::question Question 2 (4 marks)
Let $A=\begin{bmatrix}1&3&1\\2&6&4\\1&3&3\end{bmatrix}$.

1. Reduce $A$ to echelon form, and state $\operatorname{rank}(A)$ together with the pivot and free variables. *(2 marks)*
2. Give a basis of $\mathcal N(A)$ and verify the rank–nullity theorem. *(2 marks)*

:::solution
1. Eliminating below the first pivot, then below the second,
$$
\begin{bmatrix}1&3&1\\2&6&4\\1&3&3\end{bmatrix}
\xrightarrow[\;R_3\,\leftarrow\,R_3-R_1\;]{\;R_2\,\leftarrow\,R_2-2R_1\;}
\begin{bmatrix}1&3&1\\0&0&2\\0&0&2\end{bmatrix}
\xrightarrow{\;R_3\,\leftarrow\,R_3-R_2\;}
\begin{bmatrix}1&3&1\\0&0&2\\0&0&0\end{bmatrix}.
$$
The pivots lie in columns 1 and 3, so $\operatorname{rank}A=2$; the pivot variables are $x_1,x_3$ and the free variable is $x_2$.
2. Set $x_2=1$. The second row gives $2x_3=0$, so $x_3=0$, and the first gives $x_1+3=0$, so $x_1=-3$. Hence
$$
\mathcal N(A)=\operatorname{span}\left\{\begin{bmatrix}-3\\1\\0\end{bmatrix}\right\},
\qquad\text{and}\qquad
A\begin{bmatrix}-3\\1\\0\end{bmatrix}=\begin{bmatrix}-3+3\\-6+6\\-3+3\end{bmatrix}=\begin{bmatrix}0\\0\\0\end{bmatrix}.
$$
Rank–nullity holds: $2+1=3$, the number of columns.
:::
:::

:::question Question 3 (3 marks)
A matrix $A\in\mathbb{R}^{6\times9}$ has rank $5$.

1. What are $\dim\mathcal C(A)$ and $\dim\mathcal N(A)$? *(1 mark)*
2. Is $Ax=b$ solvable for every $b\in\mathbb{R}^6$? *(1 mark)*
3. When $Ax=b$ is solvable, how many solutions does it have? *(1 mark)*

:::solution
1. $\dim\mathcal C(A)=5$ and, by rank–nullity, $\dim\mathcal N(A)=9-5=4$.
2. **No.** $\mathcal C(A)$ is a five-dimensional proper subspace of $\mathbb{R}^6$; solvability for every $b$ would need rank $6$.
3. **Infinitely many**: the solutions are $x_p+\mathcal N(A)$, and the null space has dimension $4$.
:::
:::

## Mock Quiz 3B

:::question Question 1 (4 marks)
Let $A=\begin{bmatrix}1&2&0&1\\2&4&1&4\\3&6&1&5\end{bmatrix}$.

1. Find the condition on $b=(b_1,b_2,b_3)$ for $Ax=b$ to be solvable, and describe $\mathcal C(A)$ geometrically. *(2 marks)*
2. For $b=(1,3,4)$, write the complete solution $x=x_p+x_n$. *(2 marks)*

:::solution
**Elimination on the augmented matrix.**
$$
\left[\begin{array}{cccc|c}1&2&0&1&b_1\\2&4&1&4&b_2\\3&6&1&5&b_3\end{array}\right]
\longrightarrow
\left[\begin{array}{cccc|c}1&2&0&1&b_1\\0&0&1&2&b_2-2b_1\\0&0&1&2&b_3-3b_1\end{array}\right]
\longrightarrow
\left[\begin{array}{cccc|c}1&2&0&1&b_1\\0&0&1&2&b_2-2b_1\\0&0&0&0&b_3-b_2-b_1\end{array}\right].
$$
1. The system is solvable exactly when $b_3=b_1+b_2$. The rank is $2$, so $\mathcal C(A)$ is the **plane** $b_1+b_2-b_3=0$ in $\mathbb{R}^3$.
2. Since $1+3=4$, the system is solvable. The free variables are $x_2$ and $x_4$.
   - *Particular solution* ($x_2=x_4=0$): row 2 gives $x_3=3-2=1$ and row 1 gives $x_1=1$, so $x_p=(1,0,1,0)$.
   - *Special solutions:* $x_2=1$ gives $s_1=(-2,1,0,0)$; $x_4=1$ gives $x_3=-2$ and $x_1=-1$, so $s_2=(-1,0,-2,1)$.

   The complete solution is therefore
$$
\boxed{\;x=\begin{bmatrix}1\\0\\1\\0\end{bmatrix}+c_1\begin{bmatrix}-2\\1\\0\\0\end{bmatrix}+c_2\begin{bmatrix}-1\\0\\-2\\1\end{bmatrix},\qquad c_1,c_2\in\mathbb{R}.\;}
$$
:::
:::

:::question Question 2 (3 marks)
Construct a matrix with each property, or explain why none exists.

1. A $3\times3$ matrix with $\mathcal C(A)$ equal to the plane $x+y+z=0$ and $\mathcal N(A)=\operatorname{span}\{(1,1,1)\}$.
2. A $2\times4$ matrix with $\mathcal N(A)=\{\mathbf 0\}$.
3. A $4\times2$ matrix of rank $2$.

:::solution
1. **Possible.** The required rank is $2$ and nullity $1$, consistent with $2+1=3$. The columns must lie in the plane and satisfy $a_1+a_2+a_3=\mathbf 0$; for example
$$
a_1=\begin{bmatrix}1\\-1\\0\end{bmatrix},\quad a_2=\begin{bmatrix}0\\1\\-1\end{bmatrix},\quad a_3=-(a_1+a_2)=\begin{bmatrix}-1\\0\\1\end{bmatrix}.
$$
2. **Impossible.** The rank is at most $2$, so the nullity is at least $4-2=2$.
3. **Possible**, for example $\begin{pmatrix}1&0\\0&1\\0&0\\0&0\end{pmatrix}$.
:::
:::

:::question Question 3 (3 marks)
Prove that $\mathcal C(AB)\subseteq\mathcal C(A)$, and deduce that $\operatorname{rank}(AB)\le\operatorname{rank}(A)$. Give $2\times2$ matrices for which $\operatorname{rank}(AB)<\min(\operatorname{rank}A,\operatorname{rank}B)$.

:::solution
Column $j$ of $AB$ is
$$
Ab_j=\sum_k b_{kj}\,a_k ,
$$
a linear combination of the columns of $A$, so it lies in $\mathcal C(A)$. The span of vectors that lie in a subspace stays in that subspace, so $\mathcal C(AB)\subseteq\mathcal C(A)$, and hence $\dim\mathcal C(AB)\le\dim\mathcal C(A)$. *(2 marks.)*

For the strict inequality, take $A=B=\begin{pmatrix}0&1\\0&0\end{pmatrix}$: each has rank $1$, but $AB=0$ has rank $0$. *(1 mark.)*
:::
:::

## Mock Quiz 3C

:::question Question 1 (2 marks)
Without elimination, give the rank of each matrix and describe its column space.
$$
P=\begin{bmatrix}1&-2\\-3&6\\2&-4\end{bmatrix},\qquad Q=\begin{bmatrix}1&0&0\\0&0&1\\0&1&0\end{bmatrix}.
$$

:::solution
- In $P$, column 2 is $-2$ times column 1, so $\operatorname{rank}P=1$ and $\mathcal C(P)$ is the **line** through $(1,-3,2)$ in $\mathbb{R}^3$.
- $Q$ is a permutation matrix whose columns are $e_1$, $e_3$ and $e_2$, so $\operatorname{rank}Q=3$ and $\mathcal C(Q)=\mathbb{R}^3$.
:::
:::

:::question Question 2 (4 marks)
Let $A=\begin{bmatrix}1&1&2\\0&1&1\\1&2&3\\2&1&3\end{bmatrix}$.

1. Find the rank of $A$ and a basis for $\mathcal C(A)$. *(2 marks)*
2. Is $b=(3,2,5,4)$ in $\mathcal C(A)$? If so, give all $x$ with $Ax=b$. *(2 marks)*

:::solution
1. Column 3 is the sum of columns 1 and 2, and columns 1 and 2 are not parallel, so $\operatorname{rank}A=2$, with basis
$$
\left\{\begin{bmatrix}1\\0\\1\\2\end{bmatrix},\ \begin{bmatrix}1\\1\\2\\1\end{bmatrix}\right\}.
$$
2. Try $x_1a_1+x_2a_2=b$. Row 2 gives $x_2=2$ and row 1 then gives $x_1=1$. The remaining rows must agree:
$$
\text{row 3: }\ 1+2(2)=5,\qquad \text{row 4: }\ 2(1)+2=4 .
$$
Both hold, so $b\in\mathcal C(A)$ with particular solution $x_p=(1,2,0)$. Since $\mathcal N(A)=\operatorname{span}\{(1,1,-1)\}$, every solution is
$$
\boxed{\;x=\begin{bmatrix}1\\2\\0\end{bmatrix}+t\begin{bmatrix}1\\1\\-1\end{bmatrix},\qquad t\in\mathbb{R}.\;}
$$
:::
:::

:::question Question 3 (4 marks)
A data matrix $X\in\mathbb{R}^{100\times4}$ has columns height (cm), weight (kg), height (inches) and age.

1. What is the largest possible rank of $X$, and why? *(1 mark)*
2. Give a non-zero vector in $\mathcal N(X)$. *(1 mark)*
3. Explain why the least-squares weights $\theta$ are not unique, and why $X^\top X$ is singular. *(2 marks)*

:::solution
1. **Three.** Height in inches is $\tfrac{1}{2.54}$ times height in centimetres, so at most three columns are independent.
2. $z=(1,0,-2.54,0)$, since $Xz=(\text{height in cm})-2.54\,(\text{height in inches})=\mathbf 0$.
3. For every $t$, the weights $\theta$ and $\theta+tz$ give identical predictions $X\theta=X(\theta+tz)$, so the loss cannot distinguish between them. Because $X$ has dependent columns, $X^\top Xz=\mathbf 0$ with $z\neq\mathbf 0$, so $X^\top X$ is singular — a Gram matrix is invertible only when the columns are independent.
:::
:::

:::remember
For rank–nullity questions: (1) eliminate in matrix form; (2) count the pivots to get the rank; (3) use the free columns to get the nullity and the special solutions; (4) read solvability from the zero rows of $[\,A\mid b\,]$.
:::

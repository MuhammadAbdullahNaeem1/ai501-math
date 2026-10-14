# L02 · Practice quizzes — Matrices, inverses, linear systems

Three mock quizzes, **20 minutes and 10 marks** each, matching the style of 2026 Quizzes 3 and 4.

<div class="pdf-links">
<a href="l02-notes.html">L02 notes</a>
<a href="pdfs/quizzes/Quiz-3-Solution.pdf">Real Quiz 3 (2026)</a>
<a href="pdfs/quizzes/Quiz-4-Solution.pdf">Real Quiz 4 (2026)</a>
<a href="pdfs/past/Quiz-2025-2.pdf">2025 Quiz 2</a>
</div>

:::exam The real quiz pattern for this lecture
**Quiz 3:** the decomposition $A=S+K$ (2 marks); $Ab$ as a combination of columns (2). **Quiz 4:** four true/false statements with counter-statements about left inverses, over-determined systems and the pseudo-inverse (4); classify two systems (2); an outer product and its rank (2); the scores of a classifier $z=Wx$ (2). **2025 Quiz 2:** the size of an unknown matrix inside a product.
:::

## Mock Quiz 2A

:::question Question 1 (4 marks)
Decide whether each statement is true or false. If it is false, give a counter-example or a counter-statement.

1. A tall matrix $A\in\mathbb{R}^{m\times n}$ with $m>n$ can have a right inverse.
2. If $A$ is square and $XA=I$, then $AX=I$.
3. $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ for all $A\in\mathbb{R}^{m\times n}$ and $B\in\mathbb{R}^{n\times m}$.
4. If $A$ and $B$ are symmetric, then $AB$ is symmetric.

:::solution
1. **False.** A right inverse requires independent rows, but $m>n$ rows in $\mathbb{R}^n$ are always dependent. For example, with $A=\begin{pmatrix}1\\0\end{pmatrix}$, every product $AX$ has second row zero, so $AX\neq I_2$.
2. **True.** A square matrix with a left inverse has independent columns and is therefore invertible; and since $X=X(AY)=(XA)Y=Y$, the left inverse is the inverse.
3. **True.**
$$
\operatorname{tr}(AB)=\sum_{i=1}^m\sum_{k=1}^n A_{ik}B_{ki}=\sum_{k=1}^n\sum_{i=1}^m B_{ki}A_{ik}=\operatorname{tr}(BA).
$$
4. **False.** With $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and $B=\begin{pmatrix}0&1\\1&0\end{pmatrix}$,
$$
AB=\begin{pmatrix}0&1\\0&0\end{pmatrix},
$$
which is not symmetric. The product of symmetric matrices is symmetric only when they commute.

*(1 mark each: half for the verdict, half for the justification.)*
:::
:::

:::question Question 2 (3 marks)
Let $A\in\mathbb{R}^{4\times7}$, $B\in\mathbb{R}^{7\times3}$ and $C\in\mathbb{R}^{3\times3}$. For each expression, say whether it is defined, and if so give its size.

1. $ABC^2B^\top$
2. $B^\top A^\top AB+C$
3. $A^\top A+BB^\top$

:::solution
1. $(4\times7)(7\times3)(3\times3)(3\times7)=4\times7$: defined, of size $4\times7$.
2. $B^\top A^\top AB$ is $(3\times7)(7\times4)(4\times7)(7\times3)=3\times3$, and $C$ is $3\times3$, so the sum is defined and is $3\times3$.
3. $A^\top A$ is $7\times7$ and $BB^\top$ is $7\times7$, so the sum is defined and is $7\times7$.

*(1 mark each.)*
:::
:::

:::question Question 3 (3 marks)
Let $A=\begin{pmatrix}1&2\\0&1\\1&0\end{pmatrix}$.

1. Compute $A^\top A$ and the left pseudo-inverse $A^\dagger=(A^\top A)^{-1}A^\top$. *(2 marks)*
2. Verify that $A^\dagger A=I_2$. *(1 mark)*

:::solution
1. First,
$$
A^\top A=\begin{pmatrix}1&0&1\\2&1&0\end{pmatrix}\begin{pmatrix}1&2\\0&1\\1&0\end{pmatrix}=\begin{pmatrix}2&2\\2&5\end{pmatrix},\qquad \det(A^\top A)=10-4=6 .
$$
Hence
$$
(A^\top A)^{-1}=\frac16\begin{pmatrix}5&-2\\-2&2\end{pmatrix},
\qquad
A^\dagger=\frac16\begin{pmatrix}5&-2\\-2&2\end{pmatrix}\begin{pmatrix}1&0&1\\2&1&0\end{pmatrix}=\frac16\begin{pmatrix}1&-2&5\\2&2&-2\end{pmatrix}.
$$
2. Multiplying back,
$$
A^\dagger A=\frac16\begin{pmatrix}1&-2&5\\2&2&-2\end{pmatrix}\begin{pmatrix}1&2\\0&1\\1&0\end{pmatrix}
=\frac16\begin{pmatrix}1+0+5&2-2+0\\2+0-2&4+2+0\end{pmatrix}=\frac16\begin{pmatrix}6&0\\0&6\end{pmatrix}=I_2 .
$$
*(1 mark for $A^\top A$ and its inverse, 1 for $A^\dagger$, 1 for the check.)*
:::
:::

## Mock Quiz 2B

:::question Question 1 (2 marks)
Decompose $A=\begin{pmatrix}1&4&-2\\0&3&5\\6&1&2\end{pmatrix}$ as $A=S+K$, with $S$ symmetric and $K$ skew-symmetric.

:::solution
The transpose is $A^\top=\begin{pmatrix}1&0&6\\4&3&1\\-2&5&2\end{pmatrix}$, so
$$
S=\frac12\big(A+A^\top\big)=\begin{pmatrix}1&2&2\\2&3&3\\2&3&2\end{pmatrix},\qquad
K=\frac12\big(A-A^\top\big)=\begin{pmatrix}0&2&-4\\-2&0&2\\4&-2&0\end{pmatrix}.
$$
As checks, $S+K=A$ and $K$ has a zero diagonal.
:::
:::

:::question Question 2 (4 marks)
For each system, write $A$ and $b$, classify the system as under-determined, square or over-determined, and state whether it has no solution, a unique solution or infinitely many solutions.

1. $x_1+2x_2=3$, $\ 2x_1+4x_2=7$
2. $x_1-x_2=1$, $\ 2x_1+x_2=5$, $\ x_1+2x_2=4$
3. $x_1+x_2-x_3=1$, $\ x_2+x_3=2$
4. $x_1+x_2=2$, $\ x_1-x_2=0$, $\ x_1=3$

:::solution
1. $A=\begin{pmatrix}1&2\\2&4\end{pmatrix}$ and $b=\begin{pmatrix}3\\7\end{pmatrix}$. The system is **square**. The left side of the second equation is twice that of the first, but $7\neq2\cdot3$, so there is **no solution**.
2. $A=\begin{pmatrix}1&-1\\2&1\\1&2\end{pmatrix}$ and $b=\begin{pmatrix}1\\5\\4\end{pmatrix}$. The system is **over-determined**. Adding the first two equations gives $3x_1=6$, so $x=(2,1)$; the third equation holds, since $2+2=4$. There is a **unique solution**, $x=(2,1)$.
3. $A=\begin{pmatrix}1&1&-1\\0&1&1\end{pmatrix}$ and $b=\begin{pmatrix}1\\2\end{pmatrix}$. The system is **under-determined**. Setting $x_3=t$ gives $x_2=2-t$ and $x_1=1-x_2+x_3=-1+2t$, so there are **infinitely many solutions**,
$$
x=\begin{bmatrix}-1\\2\\0\end{bmatrix}+t\begin{bmatrix}2\\-1\\1\end{bmatrix}.
$$
4. $A=\begin{pmatrix}1&1\\1&-1\\1&0\end{pmatrix}$ and $b=\begin{pmatrix}2\\0\\3\end{pmatrix}$. The system is **over-determined**. The first two equations give $x=(1,1)$, but the third requires $x_1=3$, so there is **no solution**.

*(1 mark per part: half for the classification, half for the outcome.)*
:::
:::

:::question Question 3 (4 marks)
1. Prove that if $A$ has linearly independent columns, then $A^\top A$ is invertible. *(2 marks)*
2. Prove that if $Q$ has orthonormal columns, then $\|Qx-Qy\|=\|x-y\|$ for all $x,y$. *(2 marks)*

:::solution
1. Suppose $A^\top Ax=\mathbf 0$. Multiplying on the left by $x^\top$,
$$
0=x^\top A^\top Ax=(Ax)^\top(Ax)=\|Ax\|^2 ,
$$
so $Ax=\mathbf 0$, and independence of the columns gives $x=\mathbf 0$. A square matrix whose null space is $\{\mathbf 0\}$ is invertible.
2. Orthonormal columns mean $Q^\top Q=I$. Therefore
$$
\|Qx-Qy\|^2=\|Q(x-y)\|^2=(x-y)^\top Q^\top Q\,(x-y)=(x-y)^\top(x-y)=\|x-y\|^2 ,
$$
and taking square roots gives the result.
:::
:::

## Mock Quiz 2C

:::question Question 1 (3 marks)
A shop network has the quantity matrix $Q=\begin{pmatrix}5&2&0\\1&0&4\end{pmatrix}$, with rows for $2$ shops and columns for $3$ products. The unit prices are $p=(10,20,5)$ and the unit weights are $w=(1,2,3)$ kg.

1. Write and compute the vector of stock values per shop. *(1 mark)*
2. Write and compute the vector of stock weights per shop. *(1 mark)*
3. What does $\mathbf 1^\top Qp$ represent? Compute it. *(1 mark)*

:::solution
1. The stock value at each shop is
$$
Qp=\begin{pmatrix}5(10)+2(20)+0(5)\\1(10)+0(20)+4(5)\end{pmatrix}=\begin{pmatrix}90\\30\end{pmatrix}.
$$
2. The stock weight at each shop is
$$
Qw=\begin{pmatrix}5(1)+2(2)+0(3)\\1(1)+0(2)+4(3)\end{pmatrix}=\begin{pmatrix}9\\13\end{pmatrix}\ \text{kg}.
$$
3. $\mathbf 1^\top Qp$ adds up the shop values: it is the total value of all stock across the network, $90+30=\boxed{120}$.
:::
:::

:::question Question 2 (3 marks)
Let $A=\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}$.

1. Without computing anything, decide whether $A$ can have a left inverse, and whether it can have a right inverse. *(1 mark)*
2. Show that $X=\begin{pmatrix}1&-1\\0&1\\0&0\end{pmatrix}$ is a right inverse, and use it to find one solution of $Ax=(3,2)$. *(2 marks)*

:::solution
1. $A$ is wide ($2\times3$): its three columns lie in $\mathbb{R}^2$ and are dependent, so it has **no left inverse**. Its two rows $(1,1,0)$ and $(0,1,1)$ are independent, so it **is right-invertible**.
2. Multiplying,
$$
AX=\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}\begin{pmatrix}1&-1\\0&1\\0&0\end{pmatrix}=\begin{pmatrix}1&0\\0&1\end{pmatrix}=I_2 .
$$
One solution is then
$$
x=Xb=\begin{pmatrix}1&-1\\0&1\\0&0\end{pmatrix}\begin{pmatrix}3\\2\end{pmatrix}=\begin{pmatrix}1\\2\\0\end{pmatrix},
\qquad\text{and indeed}\qquad Ax=\begin{pmatrix}1+2\\2+0\end{pmatrix}=\begin{pmatrix}3\\2\end{pmatrix}.
$$
Other solutions exist, such as $(2,1,1)$.
:::
:::

:::question Question 3 (4 marks)
A two-layer linear network has weights $W^{[1]}=\begin{pmatrix}1&0&2\\-1&1&0\end{pmatrix}$ and $W^{[2]}=\begin{pmatrix}3&1\end{pmatrix}$.

1. For $x=(1,2,1)$, compute $a^{[1]}=W^{[1]}x$ and $y=W^{[2]}a^{[1]}$. *(2 marks)*
2. Find the single matrix $W$ with $y=Wx$, and check your answer. *(1 mark)*
3. Explain why adding more linear layers cannot make this network more expressive. *(1 mark)*

:::solution
1. Layer by layer,
$$
a^{[1]}=\begin{pmatrix}1+0+2\\-1+2+0\end{pmatrix}=\begin{pmatrix}3\\1\end{pmatrix},\qquad
y=\begin{pmatrix}3&1\end{pmatrix}\begin{pmatrix}3\\1\end{pmatrix}=10 .
$$
2. The combined matrix is
$$
W=W^{[2]}W^{[1]}=\begin{pmatrix}3(1)+1(-1)&3(0)+1(1)&3(2)+1(0)\end{pmatrix}=\begin{pmatrix}2&1&6\end{pmatrix},
$$
and $Wx=2+2+6=10$, matching part 1.
3. A product of matrices is again a single matrix, $W^{[L]}\cdots W^{[1]}$, so without non-linear activations any depth of layers computes just one linear function of $x$.
:::
:::

:::remember
For L02 quizzes, write the sizes first; and for questions about inverses, argue from **shape**, to **independence**, to **which inverse can exist** — then verify by multiplying.
:::

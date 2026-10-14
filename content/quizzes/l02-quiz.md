# L02 · Practice quizzes — Matrices, inverses, linear systems

Three mock quizzes, **20 minutes / 10 marks** each, matching the 2026 Quiz 3 and Quiz 4 style.

<div class="pdf-links">
<a href="l02-notes.html">L02 notes</a>
<a href="pdfs/quizzes/Quiz-3-Solution.pdf">Real Quiz 3 (2026)</a>
<a href="pdfs/quizzes/Quiz-4-Solution.pdf">Real Quiz 4 (2026)</a>
<a href="pdfs/past/Quiz-2025-2.pdf">2025 Quiz 2</a>
</div>

:::exam Real quiz pattern for this lecture
Quiz 3: $A=S+K$ decomposition (2), $Ab$ as a column combination (2). Quiz 4: four T/F with counter-statements on left inverses / over-determined systems / pseudo-inverse (4), classify two systems (2), outer product + rank (2), classifier scores $z=Wx$ (2). 2025 Quiz 2: find the dimensions of an unknown matrix in a product.
:::

## Mock Quiz 2A

:::question Question 1 (4 marks)
True or False? If False, give a counter-example or counter-statement.
(a) A tall matrix $A\in\mathbb{R}^{m\times n}$, $m>n$, can have a right inverse.
(b) If $A$ is square and $XA=I$, then $AX=I$.
(c) $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ for any $A\in\mathbb{R}^{m\times n}$, $B\in\mathbb{R}^{n\times m}$.
(d) If $A$ and $B$ are symmetric then $AB$ is symmetric.

:::solution
(a) **False.** A right inverse needs independent rows, but $m>n$ rows in $\mathbb{R}^n$ are dependent. E.g. $A=\begin{pmatrix}1\\0\end{pmatrix}$: $AX$ is $2\times2$ with second row 0, never $I_2$.
(b) **True.** Square + left-invertible ⇒ independent columns ⇒ invertible, and by $X=X(AY)=(XA)Y=Y$ the left inverse is the inverse.
(c) **True.** $\operatorname{tr}(AB)=\sum_i\sum_k A_{ik}B_{ki}=\sum_k\sum_i B_{ki}A_{ik}=\operatorname{tr}(BA)$.
(d) **False.** $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$, $B=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ give $AB=\begin{pmatrix}0&1\\0&0\end{pmatrix}$. True only when $AB=BA$.
*1 mark each: 0.5 verdict, 0.5 justification.*
:::
:::

:::question Question 2 (3 marks)
$A\in\mathbb{R}^{4\times7}$, $B\in\mathbb{R}^{7\times3}$, $C\in\mathbb{R}^{3\times3}$. For each expression say whether it is defined and give its size.
(a) $ABC^2B^\top$ (b) $B^\top A^\top A B + C$ (c) $A^\top A + BB^\top$

:::solution
(a) $(4\times7)(7\times3)(3\times3)(3\times7)=4\times7$. ✓ *(1)*
(b) $B^\top A^\top AB$: $(3\times7)(7\times4)(4\times7)(7\times3)=3\times3$; plus $C$ ($3\times3$) ⇒ $3\times3$. ✓ *(1)*
(c) $A^\top A$ is $7\times7$, $BB^\top$ is $7\times7$ ⇒ $7\times7$. ✓ *(1)*
:::
:::

:::question Question 3 (3 marks)
$A=\begin{pmatrix}1&2\\0&1\\1&0\end{pmatrix}$.
(a) Compute $A^\top A$ and the left pseudo-inverse $A^\dagger$. (2)
(b) Verify $A^\dagger A=I_2$. (1)

:::solution
(a) $A^\top A=\begin{pmatrix}2&2\\2&5\end{pmatrix}$, $\det=6$, $(A^\top A)^{-1}=\tfrac16\begin{pmatrix}5&-2\\-2&2\end{pmatrix}$.
$A^\dagger=\tfrac16\begin{pmatrix}5&-2\\-2&2\end{pmatrix}\begin{pmatrix}1&0&1\\2&1&0\end{pmatrix}=\tfrac16\begin{pmatrix}1&-2&5\\2&2&-2\end{pmatrix}$.
(b) The columns of $A$ are $(1,0,1)$ and $(2,1,0)$. Entry (1,1): $\tfrac16(1\cdot1-2\cdot0+5\cdot1)=1$; (1,2): $\tfrac16(1\cdot2-2\cdot1+5\cdot0)=0$; (2,1): $\tfrac16(2\cdot1+2\cdot0-2\cdot1)=0$; (2,2): $\tfrac16(2\cdot2+2\cdot1-2\cdot0)=1$. So $A^\dagger A=I_2$ ✓.
*Marking: 1 for $A^\top A$ and its inverse, 1 for $A^\dagger$, 1 for the check.*
:::
:::

## Mock Quiz 2B

:::question Question 1 (2 marks)
Decompose $A=\begin{pmatrix}1&4&-2\\0&3&5\\6&1&2\end{pmatrix}$ as $A=S+K$ with $S$ symmetric and $K$ skew-symmetric.

:::solution
$A^\top=\begin{pmatrix}1&0&6\\4&3&1\\-2&5&2\end{pmatrix}$.
$S=\tfrac12(A+A^\top)=\begin{pmatrix}1&2&2\\2&3&3\\2&3&2\end{pmatrix}$, $K=\tfrac12(A-A^\top)=\begin{pmatrix}0&2&-4\\-2&0&2\\4&-2&0\end{pmatrix}$. Check $S+K=A$ ✓, $K$ has zero diagonal ✓.
:::
:::

:::question Question 2 (4 marks)
For each system write $A$ and $b$, classify it (under-determined / square / over-determined) and state whether it has no, one or infinitely many solutions.
(a) $x_1+2x_2=3$, $2x_1+4x_2=7$.
(b) $x_1-x_2=1$, $2x_1+x_2=5$, $x_1+2x_2=4$.
(c) $x_1+x_2-x_3=1$, $x_2+x_3=2$.
(d) $x_1+x_2=2$, $x_1-x_2=0$, $x_1=3$.

:::solution
(a) $A=\begin{pmatrix}1&2\\2&4\end{pmatrix}$, $b=\begin{pmatrix}3\\7\end{pmatrix}$: square; row 2 = 2·row 1 on the left but $7\neq6$ ⇒ **no solution**.
(b) $A=\begin{pmatrix}1&-1\\2&1\\1&2\end{pmatrix}$, $b=(1,5,4)$: over-determined. Rows 1–2: $3x_1=6$ ⇒ $x=(2,1)$; row 3: $2+2=4$ ✓ ⇒ **unique** $(2,1)$.
(c) $A=\begin{pmatrix}1&1&-1\\0&1&1\end{pmatrix}$, $b=(1,2)$: under-determined; $x_3=t$, $x_2=2-t$, $x_1=1-x_2+x_3=-1+2t$ ⇒ **infinitely many**.
(d) $A=\begin{pmatrix}1&1\\1&-1\\1&0\end{pmatrix}$, $b=(2,0,3)$: over-determined; rows 1–2 give $x=(1,1)$, row 3 needs $x_1=3$ ⇒ **no solution**.
*1 per part (0.5 classification, 0.5 outcome).*
:::
:::

:::question Question 3 (4 marks)
(a) Prove that if $A$ has linearly independent columns then $A^\top A$ is invertible. (2)
(b) Prove that if $Q$ has orthonormal columns then $\|Qx-Qy\|=\|x-y\|$. (2)

:::solution
(a) Suppose $A^\top Ax=0$. Then $0=x^\top A^\top Ax=(Ax)^\top(Ax)=\|Ax\|^2$, so $Ax=0$; independence of the columns gives $x=0$. A square matrix whose null space is $\{0\}$ is invertible.
(b) $Q^\top Q=I$. $\|Qx-Qy\|^2=\|Q(x-y)\|^2=(x-y)^\top Q^\top Q(x-y)=(x-y)^\top(x-y)=\|x-y\|^2$; take square roots.
:::
:::

## Mock Quiz 2C

:::question Question 1 (3 marks)
A shop network has quantity matrix $Q=\begin{pmatrix}5&2&0\\1&0&4\end{pmatrix}$ (rows = 2 shops, columns = 3 products), prices $p=(10,20,5)$ and unit weights $w=(1,2,3)$ kg.
(a) Write and compute the vector of stock value per shop. (1)
(b) Write and compute the vector of stock weight per shop. (1)
(c) What does $\mathbf 1^\top Qp$ represent? Compute it. (1)

:::solution
(a) $Qp=\begin{pmatrix}50+40+0\\10+0+20\end{pmatrix}=\begin{pmatrix}90\\30\end{pmatrix}$.
(b) $Qw=\begin{pmatrix}5+4+0\\1+0+12\end{pmatrix}=\begin{pmatrix}9\\13\end{pmatrix}$ kg.
(c) Total stock value across all shops: $90+30=120$.
:::
:::

:::question Question 2 (3 marks)
Let $A=\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}$.
(a) Without computing, can $A$ have a left inverse? A right inverse? Why? (1)
(b) Show that $X=\begin{pmatrix}1&-1\\0&1\\0&0\end{pmatrix}$ is a right inverse and use it to find one solution of $Ax=(3,2)$. (2)

:::solution
(a) $A$ is wide ($2\times3$): its 3 columns in $\mathbb{R}^2$ are dependent ⇒ **no left inverse**. Its rows $(1,1,0),(0,1,1)$ are independent ⇒ right-invertible.
(b) $AX=\begin{pmatrix}1&-1+1\\0&1\end{pmatrix}=I_2$ ✓. $x=Xb=\begin{pmatrix}3-2\\2\\0\end{pmatrix}=\begin{pmatrix}1\\2\\0\end{pmatrix}$; check $Ax=(1+2,2+0)=(3,2)$ ✓. (Other solutions exist, e.g. $(2,1,1)$.)
:::
:::

:::question Question 3 (4 marks)
A two-layer linear network has $W^{[1]}=\begin{pmatrix}1&0&2\\-1&1&0\end{pmatrix}$ and $W^{[2]}=\begin{pmatrix}3&1\end{pmatrix}$.
(a) For $x=(1,2,1)$ compute $a^{[1]}=W^{[1]}x$ and $y=W^{[2]}a^{[1]}$. (2)
(b) Find the single matrix $W$ with $y=Wx$ and check your answer. (1)
(c) Explain why adding more linear layers cannot make this network more expressive. (1)

:::solution
(a) $a^{[1]}=\begin{pmatrix}1+0+2\\-1+2+0\end{pmatrix}=\begin{pmatrix}3\\1\end{pmatrix}$; $y=9+1=10$.
(b) $W=W^{[2]}W^{[1]}=(3-1,\ 0+1,\ 6+0)=(2\ \ 1\ \ 6)$; $Wx=2+2+6=10$ ✓.
(c) A product of matrices is a matrix: $W^{[L]}\cdots W^{[1]}$ is one linear map, so without nonlinearities depth never goes beyond a single linear function of $x$.
:::
:::

:::remember
For L02 quizzes: always state sizes first; for inverse questions argue from **shape → independence → which inverse can exist**, then verify by multiplying.
:::

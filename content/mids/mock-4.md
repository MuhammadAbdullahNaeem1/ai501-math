# Mock Mid 4 — the official 2026 format

This paper follows the instructions sheet for the 2026 mid exactly: **3 hours in total. Part I: 30 MCQs worth 3 points each (90 points, 40% of the exam), to be attempted in the first 60 minutes. Part II: 7 problems worth 30 points in total (60% of the exam), in the remaining 120 minutes.** Closed book; two hand-written two-sided A4 sheets and a calculator allowed.

:::exam What the instructor said to be comfortable with
Inverting a $2\times2$ matrix by hand, and finding the eigenvectors of a symmetric matrix once its eigenvalues are known. No rigorous proofs and no tedious steps; the Hessian is **not** examined (it comes in Week 10). Show your steps — "solutions with inadequate justifications and/or steps may not receive full credit".
:::

:::exam Part I rules
Select **ALL (up to three)** correct choices. Every incorrect choice carries a penalty of $1$ point, but no question scores below zero. A question with $k$ correct options awards $3/k$ points per correct tick.
:::

## Part I — Multiple choice (30 × 3 points)

:::question MCQ 1
For $x=(2,-2,1)$, which are true?

1. $\|x\|_1=5$
2. $\|x\|_2=3$
3. $\|x\|_\infty=2$
4. $\|x\|_2=9$

:::solution
**(a), (b), (c).** $\|x\|_1=2+2+1=5$, $\|x\|_2=\sqrt{4+4+1}=3$, $\|x\|_\infty=2$. The value $9$ is $\|x\|_2^2$.
:::
:::

:::question MCQ 2
Which vectors are unit vectors?

1. $(0,1,0)$
2. $\tfrac13(1,2,2)$
3. $(1,1)$
4. $\tfrac15(3,-4)$

:::solution
**(a), (b), (d).** $\tfrac19(1+4+4)=1$ and $\tfrac1{25}(9+16)=1$; but $\|(1,1)\|=\sqrt2$.
:::
:::

:::question MCQ 3
If $u^\top v=0$ for non-zero $u,v$, which are true?

1. $u$ and $v$ are orthogonal.
2. $\|u+v\|^2=\|u\|^2+\|v\|^2$.
3. $u$ and $v$ are linearly dependent.
4. The angle between them is $90^\circ$.

:::solution
**(a), (b), (d).** Non-zero orthogonal vectors are independent, so (c) is false.
:::
:::

:::question MCQ 4
Which are affine combinations of $x_1$ and $x_2$?

1. $0.3x_1+0.7x_2$
2. $2x_1-x_2$
3. $x_1+x_2$
4. $-x_1+2x_2$

:::solution
**(a), (b), (d).** The coefficients must add to $1$; in (c) they add to $2$.
:::
:::

:::question MCQ 5
Let $x=(1,2,3)$ and $y=(3,2,1)$. Which are true?

1. $x^\top y=10$
2. The correlation of $x$ and $y$ is $-1$.
3. The cosine similarity of $x$ and $y$ is $-1$.
4. $\|x-y\|_2=\sqrt8$

:::solution
**(a), (b), (d).** $x^\top y=3+4+3=10$. Centred, $\tilde x=(-1,0,1)$ and $\tilde y=(1,0,-1)=-\tilde x$, so $\rho=-1$. The cosine similarity is $10/14\neq-1$. And $x-y=(-2,0,2)$ has length $\sqrt8$.
:::
:::

:::question MCQ 6
Which statements about the standard deviation are true (population convention)?

1. $\operatorname{rms}(x)^2=\operatorname{avg}(x)^2+\operatorname{std}(x)^2$
2. $\operatorname{std}(x+c\mathbf 1)=\operatorname{std}(x)$
3. $\operatorname{std}(2x)=2\operatorname{std}(x)$
4. $\operatorname{std}(x)$ can be negative.

:::solution
**(a), (b), (c).** Adding a constant shifts the mean but not the spread; a standard deviation is a length, so it is never negative.
:::
:::

:::question MCQ 7
Which of the following are subspaces of $\mathbb{R}^3$?

1. $\{x:\ x_1+x_2+x_3=0\}$
2. $\{x:\ x_1+x_2+x_3=1\}$
3. $\{\mathbf 0\}$
4. $\{x:\ x_3\ge0\}$

:::solution
**(a), (c).** Set (b) misses $\mathbf 0$; set (d) is not closed under multiplication by $-1$.
:::
:::

:::question MCQ 8
The vectors $(1,0,1)$, $(0,1,1)$ and $(1,1,2)$:

1. are linearly dependent;
2. span a plane through the origin;
3. form a basis of $\mathbb{R}^3$;
4. satisfy $(1,1,2)=(1,0,1)+(0,1,1)$.

:::solution
**(a), (b), (d).**
:::
:::

:::question MCQ 9
Gram–Schmidt is applied to independent vectors $a_1,a_2$. Which are true?

1. $q_1=a_1/\|a_1\|$
2. $\tilde q_2=a_2-(q_1^\top a_2)\,q_1$
3. $q_1^\top q_2=0$
4. Reversing the order of $a_1,a_2$ always gives the same $q$'s in reverse order.

:::solution
**(a), (b), (c).** The output depends on the order.
:::
:::

:::question MCQ 10
Let $q_1,q_2$ be orthonormal and $x=3q_1-2q_2$. Which are true?

1. $q_1^\top x=3$
2. $q_2^\top x=-2$
3. $\|x\|=\sqrt{13}$
4. $\|x\|=1$

:::solution
**(a), (b), (c).** By Pythagoras, $\|x\|^2=9+4=13$.
:::
:::

:::question MCQ 11
For $A\in\mathbb{R}^{2\times3}$ and $B\in\mathbb{R}^{3\times4}$, which are defined?

1. $AB$
2. $BA$
3. $B^\top A^\top$
4. $A^\top A$

:::solution
**(a), (c), (d).** $AB$ is $2\times4$; $B^\top A^\top=(AB)^\top$ is $4\times2$; $A^\top A$ is $3\times3$. $BA$ needs $4=2$.
:::
:::

:::question MCQ 12
Which are always true for square matrices $A,B$?

1. $(AB)^\top=B^\top A^\top$
2. $AB=BA$
3. $\operatorname{tr}(AB)=\operatorname{tr}(BA)$
4. $(A+B)^\top=A^\top+B^\top$

:::solution
**(a), (c), (d).**
:::
:::

:::question MCQ 13
For $A=\begin{pmatrix}3&1\\5&2\end{pmatrix}$, which are true?

1. $\det A=1$
2. $A^{-1}=\begin{pmatrix}2&-1\\-5&3\end{pmatrix}$
3. $A^{-1}=\begin{pmatrix}3&-1\\-5&2\end{pmatrix}$
4. $A$ is singular.

:::solution
**(a), (b).** Swap the diagonal, negate the off-diagonal, divide by $\det=6-5=1$.
:::
:::

:::question MCQ 14
The matrix $\begin{pmatrix}2&4\\1&2\end{pmatrix}$:

1. has determinant $0$;
2. has dependent columns;
3. has rank $1$;
4. is invertible.

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 15
Which statements about $A=S+K$, $S=\tfrac12(A+A^\top)$, $K=\tfrac12(A-A^\top)$ are true?

1. $S$ is symmetric.
2. $K$ has a zero diagonal.
3. $\operatorname{tr}A=\operatorname{tr}S$
4. $K$ is symmetric.

:::solution
**(a), (b), (c).** The trace of $K$ is $0$, so $\operatorname{tr}A=\operatorname{tr}S$.
:::
:::

:::question MCQ 16
$A\in\mathbb{R}^{5\times3}$ has independent columns. Which are true?

1. $A$ has a left inverse.
2. $A^\top A$ is invertible.
3. $A$ has a right inverse.
4. $Ax=b$ has at most one solution.

:::solution
**(a), (b), (d).** A tall matrix never has a right inverse.
:::
:::

:::question MCQ 17
The outer product $uv^\top$ with $u=(1,2)$ and $v=(3,0,-1)$:

1. is $2\times3$;
2. has rank $1$;
3. equals $\begin{pmatrix}3&0&-1\\6&0&-2\end{pmatrix}$;
4. is invertible.

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 18
$A\in\mathbb{R}^{4\times6}$ has rank $3$. Which are true?

1. $\dim\mathcal N(A)=3$
2. $\dim\mathcal C(A)=3$
3. $Ax=b$ is solvable for every $b\in\mathbb{R}^4$.
4. The columns of $A$ are dependent.

:::solution
**(a), (b), (d).** Rank–nullity: $6-3=3$. The column space is a 3-dimensional part of $\mathbb{R}^4$, so some $b$ are unreachable.
:::
:::

:::question MCQ 19
Which always hold for any matrices with compatible sizes?

1. $\operatorname{rank}(A)=\operatorname{rank}(A^\top)$
2. $\operatorname{rank}(AB)\le\operatorname{rank}(A)$
3. $\operatorname{rank}(A)\le\min(m,n)$
4. $\operatorname{rank}(AB)=\operatorname{rank}(A)\operatorname{rank}(B)$

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 20
In supervised learning, which are true?

1. Hyper-parameters such as $k$ in kNN are chosen on validation data.
2. The test set should be used only once.
3. Zero training error guarantees good generalisation.
4. For time series, train on the past and test on the future.

:::solution
**(a), (b), (d).**
:::
:::

:::question MCQ 21
Which statements about losses are true?

1. The MSE is minimised by the mean when predicting a constant.
2. The MAE is minimised by the median when predicting a constant.
3. The 0/1 loss is differentiable.
4. RMSE is measured in the same units as $y$.

:::solution
**(a), (b), (d).**
:::
:::

:::question MCQ 22
Which statements about kNN are true?

1. It is non-parametric.
2. Increasing $k$ tends to increase bias.
3. Prediction cost grows with the training-set size.
4. Feature scaling has no effect on the predictions.

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 23
A test has TP $=40$, FP $=10$, FN $=10$, TN $=140$. Which are true?

1. Recall $=0.8$
2. Precision $=0.8$
3. Specificity $=0.8$
4. Accuracy $=0.9$

:::solution
**(a), (b), (d).** Specificity is $140/150\approx0.93$; accuracy is $180/200=0.9$.
:::
:::

:::question MCQ 24
For a classifier that flags fraudulent transactions (fraud = positive), which matter most?

1. Specificity
2. Precision
3. Recall alone
4. Keeping false positives low

:::solution
**(a), (b), (d).** False positives block honest customers.
:::
:::

:::question MCQ 25
Which statements about ROC and AUC are true?

1. ROC plots TPR against FPR.
2. AUC $=1$ is a perfect classifier.
3. A random classifier has AUC $=0.5$.
4. A good ROC curve hugs the bottom-right corner.

:::solution
**(a), (b), (c).** It hugs the top-left corner.
:::
:::

:::question MCQ 26
Least squares with $X$ of full column rank: which are true?

1. $X^\top Xw=X^\top y$
2. The residual is orthogonal to every column of $X$.
3. $w=(X^\top X)^{-1}X^\top y$
4. $w=X^{-1}y$ always

:::solution
**(a), (b), (c).** A tall $X$ has no inverse.
:::
:::

:::question MCQ 27
Which statements about polynomial regression are true?

1. It is linear in its parameters.
2. A high degree with little data tends to overfit.
3. Training error can only decrease (or stay equal) as the degree grows.
4. The degree $M$ is learned by minimising training error.

:::solution
**(a), (b), (c).** $M$ is chosen on validation data.
:::
:::

:::question MCQ 28
Ridge regression with $\lambda>0$:

1. $w=(X^\top X+\lambda I)^{-1}X^\top y$
2. Coefficients shrink as $\lambda$ grows.
3. Some coefficients become exactly zero.
4. $X^\top X+\lambda I$ is always invertible.

:::solution
**(a), (b), (d).** Exact zeros are a property of the lasso.
:::
:::

:::question MCQ 29
$A$ is $2\times2$ with eigenvalues $4$ and $-1$. Which are true?

1. $\det A=-4$
2. $\operatorname{tr}A=3$
3. $A^{-1}$ has eigenvalues $\tfrac14$ and $-1$.
4. $A^2$ has eigenvalues $8$ and $-2$.

:::solution
**(a), (b), (c).** $A^2$ has eigenvalues $16$ and $1$.
:::
:::

:::question MCQ 30
$A$ is symmetric with eigenvalues $5$ and $2$ and eigenvector $(1,1)$ for $\lambda=5$. Which are true?

1. $(1,-1)$ is an eigenvector for $\lambda=2$.
2. $A=Q\Lambda Q^\top$ with $Q$ orthonormal.
3. $A=\begin{pmatrix}3.5&1.5\\1.5&3.5\end{pmatrix}$
4. $(1,0)$ is an eigenvector.

:::solution
**(a), (b), (c).** Eigenvectors of a symmetric matrix for different eigenvalues are perpendicular, so the second one is $(1,-1)$. Rebuilding, $A=5q_1q_1^\top+2q_2q_2^\top=\tfrac52\begin{pmatrix}1&1\\1&1\end{pmatrix}+\begin{pmatrix}1&-1\\-1&1\end{pmatrix}=\begin{pmatrix}3.5&1.5\\1.5&3.5\end{pmatrix}$, which sends $(1,0)$ to $(3.5,1.5)$ — not a multiple of $(1,0)$.
:::
:::

## Part II — Problems (30 points, 120 minutes)

:::question Problem 1 (4 points) — sizes, and a 2×2 inverse
1. Let $A\in\mathbb{R}^{3\times5}$ and $B\in\mathbb{R}^{5\times2}$. State the sizes of $AB$, $(AB)^\top A$ and $B^\top A^\top AB$. *(1.5 points)*
2. Invert $M=\begin{pmatrix}3&1\\5&2\end{pmatrix}$ by hand and use the inverse to solve $Mx=\begin{pmatrix}4\\7\end{pmatrix}$. Check your answer. *(2.5 points)*

:::solution
1. The sizes are
$$
AB:\ (3\times5)(5\times2)=3\times2,\qquad (AB)^\top A:\ (2\times3)(3\times5)=2\times5,\qquad B^\top A^\top AB:\ (2\times5)(5\times3)(3\times5)(5\times2)=2\times2 .
$$
2. **Step 1 — the determinant.** $\det M=3\cdot2-1\cdot5=1\neq0$, so $M$ is invertible.

   **Step 2 — swap, negate, divide.**
$$
M^{-1}=\frac{1}{1}\begin{pmatrix}2&-1\\-5&3\end{pmatrix}=\begin{pmatrix}2&-1\\-5&3\end{pmatrix}.
$$
   **Step 3 — solve.**
$$
x=M^{-1}\begin{pmatrix}4\\7\end{pmatrix}=\begin{pmatrix}8-7\\-20+21\end{pmatrix}=\boxed{\begin{pmatrix}1\\1\end{pmatrix}}.
$$
   **Check.** $M(1,1)^\top=(3+1,\ 5+2)=(4,7)$.
:::
:::

:::question Problem 2 (4 points) — Gram–Schmidt and projection
Let $a_1=(2,1,2)$ and $a_2=(1,1,0)$.

1. Use Gram–Schmidt to find orthonormal $q_1,q_2$ with the same span. *(2 points)*
2. Project $b=(0,0,3)$ onto $\operatorname{span}\{a_1,a_2\}$, and verify that the residual is orthogonal to $q_1$ and $q_2$. *(2 points)*

:::solution
1. **Step 1.** $\|a_1\|=\sqrt{4+1+4}=3$, so $q_1=\tfrac13(2,1,2)$.

   **Step 2.** $q_1^\top a_2=\tfrac13(2+1+0)=1$, so
$$
\tilde q_2=a_2-1\cdot q_1=\begin{bmatrix}1\\1\\0\end{bmatrix}-\frac13\begin{bmatrix}2\\1\\2\end{bmatrix}=\frac13\begin{bmatrix}1\\2\\-2\end{bmatrix}.
$$
   **Step 3.** $\|\tilde q_2\|=\tfrac13\sqrt{1+4+4}=1$, so $q_2=\tfrac13(1,2,-2)$. **Check:** $q_1^\top q_2=\tfrac19(2+2-4)=0$.
2. The coefficients are $q_1^\top b=\tfrac13\cdot6=2$ and $q_2^\top b=\tfrac13\cdot(-6)=-2$, so
$$
\hat b=2q_1-2q_2=\frac23\begin{bmatrix}2\\1\\2\end{bmatrix}-\frac23\begin{bmatrix}1\\2\\-2\end{bmatrix}=\frac23\begin{bmatrix}1\\-1\\4\end{bmatrix},\qquad
r=b-\hat b=\frac13\begin{bmatrix}-2\\2\\1\end{bmatrix}.
$$
   **Checks.** $q_1^\top r=\tfrac19(-4+2+2)=0$ and $q_2^\top r=\tfrac19(-2+4-2)=0$.
:::
:::

:::question Problem 3 (5 points) — rank, null space and the complete solution
Let $A=\begin{bmatrix}1&2&0&1\\0&0&1&2\\1&2&1&3\end{bmatrix}$.

1. Reduce $[\,A\mid b\,]$ to echelon form; state $\operatorname{rank}A$ and the condition on $b$ for $Ax=b$ to be solvable. *(2 points)*
2. Find a basis of $\mathcal N(A)$ and verify rank–nullity. *(1.5 points)*
3. Write the complete solution for $b=(2,3,5)$. *(1.5 points)*

:::solution
1. Row 3 equals row 1 plus row 2, so one step clears it:
$$
\left[\begin{array}{cccc|c}1&2&0&1&b_1\\0&0&1&2&b_2\\1&2&1&3&b_3\end{array}\right]
\xrightarrow{\;R_3\,\leftarrow\,R_3-R_1-R_2\;}
\left[\begin{array}{cccc|c}1&2&0&1&b_1\\0&0&1&2&b_2\\0&0&0&0&b_3-b_1-b_2\end{array}\right].
$$
   The pivots are in columns 1 and 3, so $\operatorname{rank}A=2$, and the system is solvable exactly when $b_3=b_1+b_2$.
2. The free variables are $x_2$ and $x_4$. Setting $(x_2,x_4)=(1,0)$ gives $s_1=(-2,1,0,0)$; setting $(0,1)$ gives $x_3=-2$, $x_1=-1$, so $s_2=(-1,0,-2,1)$. Rank–nullity: $2+2=4$ columns.
3. Since $2+3=5$, the system is solvable. With $x_2=x_4=0$: $x_3=3$ and $x_1=2$. Hence
$$
\boxed{\;x=\begin{bmatrix}2\\0\\3\\0\end{bmatrix}+c_1\begin{bmatrix}-2\\1\\0\\0\end{bmatrix}+c_2\begin{bmatrix}-1\\0\\-2\\1\end{bmatrix},\qquad c_1,c_2\in\mathbb{R}.\;}
$$
:::
:::

:::question Problem 4 (4 points) — kNN and a confusion matrix
1. Training points: $A(1,8)$ $+$, $B(2,1)$ $-$, $C(9,2)$ $-$, $D(8,9)$ $+$, $E(4,4)$ $-$. Classify $T=(6,7)$ with Euclidean distance for $k=1$, $3$ and $5$. *(2 points)*
2. A classifier on $200$ cases has TP $=30$, FN $=10$, FP $=20$, TN $=140$. Compute recall, specificity, precision, $F_1$ and accuracy. *(2 points)*

:::solution
1. Squared distances from $T$ (enough for ranking):
$$
D:\ 2^2+2^2=8,\quad E:\ 2^2+3^2=13,\quad A:\ 5^2+1^2=26,\quad C:\ 3^2+5^2=34,\quad B:\ 4^2+6^2=52 .
$$
   - $k=1$: $D$ ⇒ $\mathbf{+}$.
   - $k=3$: $D(+),E(-),A(+)$ ⇒ $\mathbf{+}$.
   - $k=5$: two $+$ and three $-$ ⇒ $\mathbf{-}$.
2. With $P=40$ and $N=160$,
$$
\text{recall}=\frac{30}{40}=0.75,\quad \text{specificity}=\frac{140}{160}=0.875,\quad \text{precision}=\frac{30}{50}=0.6,\quad F_1=\frac{60}{60+20+10}\approx0.667,\quad \text{accuracy}=\frac{170}{200}=0.85 .
$$
:::
:::

:::question Problem 5 (5 points) — least squares and ridge
Fit $\hat y=w_0+w_1x$ to the data $(x,y)=(0,1),(1,2),(2,2),(3,4)$.

1. Write $X$ and $y$, form the normal equations, and solve them using a $2\times2$ inverse. *(3 points)*
2. Verify that the residuals sum to zero. *(0.5 points)*
3. Fit ridge regression with the slope penalised only and $\lambda=5$, using $w_1=\dfrac{S_{xy}}{S_{xx}+\lambda}$ and $w_0=\bar y-w_1\bar x$. *(1.5 points)*

:::solution
1. **Step 1.**
$$
X=\begin{bmatrix}1&0\\1&1\\1&2\\1&3\end{bmatrix},\quad y=\begin{bmatrix}1\\2\\2\\4\end{bmatrix},\qquad X^\top X=\begin{bmatrix}4&6\\6&14\end{bmatrix},\qquad X^\top y=\begin{bmatrix}9\\18\end{bmatrix}.
$$
   **Step 2.** $\det(X^\top X)=56-36=20$, so $(X^\top X)^{-1}=\tfrac1{20}\begin{bmatrix}14&-6\\-6&4\end{bmatrix}$.

   **Step 3.**
$$
w=\frac1{20}\begin{bmatrix}14&-6\\-6&4\end{bmatrix}\begin{bmatrix}9\\18\end{bmatrix}=\frac1{20}\begin{bmatrix}126-108\\-54+72\end{bmatrix}=\boxed{\begin{bmatrix}0.9\\0.9\end{bmatrix}}.
$$
2. The fitted values are $(0.9,\,1.8,\,2.7,\,3.6)$, so $e=(0.1,\,0.2,\,-0.7,\,0.4)$, whose sum is $0$.
3. Here $\bar x=1.5$, $\bar y=2.25$, $S_{xx}=2.25+0.25+0.25+2.25=5$ and
$$
S_{xy}=(-1.5)(-1.25)+(-0.5)(-0.25)+(0.5)(-0.25)+(1.5)(1.75)=4.5
$$
   (so the OLS slope is $4.5/5=0.9$, as before). With $\lambda=5$,
$$
w_1=\frac{4.5}{5+5}=0.45,\qquad w_0=2.25-0.45\times1.5=1.575 .
$$
:::
:::

:::question Problem 6 (5 points) — eigenvectors of a symmetric matrix
Let $A=\begin{bmatrix}3&-2\\-2&6\end{bmatrix}$. You are told that its eigenvalues are $7$ and $2$.

1. Check the eigenvalues with the trace and the determinant. *(0.5 points)*
2. Find a normalised eigenvector for each eigenvalue, and write $A=Q\Lambda Q^\top$. *(2 points)*
3. Use the decomposition to compute $A^3$. *(1.5 points)*
4. Write $A^{-1}$ both from the $2\times2$ formula and from the eigenvalues, and check that they agree on one eigenvector. *(1 point)*

:::solution
1. $\operatorname{tr}A=9=7+2$ and $\det A=18-4=14=7\cdot2$.
2. For $\lambda=7$, one row of $(A-7I)v=\mathbf 0$ is enough:
$$
\begin{bmatrix}-4&-2\\-2&-1\end{bmatrix}v=\mathbf 0\ \Rightarrow\ v_2=-2v_1,\qquad q_1=\frac{1}{\sqrt5}\begin{bmatrix}1\\-2\end{bmatrix}.
$$
   For $\lambda=2$, the eigenvector must be perpendicular to $q_1$ (symmetric matrix), so $q_2=\tfrac1{\sqrt5}(2,1)$; check: $(A-2I)(2,1)^\top=\begin{bmatrix}1&-2\\-2&4\end{bmatrix}\begin{bmatrix}2\\1\end{bmatrix}=\mathbf 0$. Therefore
$$
A=\frac{1}{\sqrt5}\begin{bmatrix}1&2\\-2&1\end{bmatrix}\begin{bmatrix}7&0\\0&2\end{bmatrix}\frac{1}{\sqrt5}\begin{bmatrix}1&-2\\2&1\end{bmatrix}.
$$
3. Cube the eigenvalues ($343$ and $8$) and rebuild:
$$
A^3=343\,q_1q_1^\top+8\,q_2q_2^\top=\frac15\left(343\begin{bmatrix}1&-2\\-2&4\end{bmatrix}+8\begin{bmatrix}4&2\\2&1\end{bmatrix}\right)=\frac15\begin{bmatrix}375&-670\\-670&1380\end{bmatrix}=\boxed{\begin{bmatrix}75&-134\\-134&276\end{bmatrix}}.
$$
4. By the formula, $A^{-1}=\tfrac{1}{14}\begin{bmatrix}6&2\\2&3\end{bmatrix}$. From the eigenvalues, $A^{-1}$ has the same eigenvectors with eigenvalues $\tfrac17$ and $\tfrac12$. **Check on $q_2$:** $\tfrac1{14}\begin{bmatrix}6&2\\2&3\end{bmatrix}\begin{bmatrix}2\\1\end{bmatrix}=\tfrac1{14}\begin{bmatrix}14\\7\end{bmatrix}=\tfrac12\begin{bmatrix}2\\1\end{bmatrix}$.
:::
:::

:::question Problem 7 (3 points) — regularisation
One standardised feature has $a=\sum_ix_i^2=8$ and $b=\sum_ix_iy_i=-12$.

1. Give the OLS, ridge and lasso weights for $\lambda=4$ and for $\lambda=16$. *(2 points)*
2. In one sentence each: why does the lasso give exact zeros, and how should $\lambda$ be chosen? *(1 point)*

:::solution
1. OLS: $b/a=-1.5$ for both values.
   - $\lambda=4$: ridge $\dfrac{-12}{8+4}=-1$; lasso $-\dfrac{12-4}{8}=-1$.
   - $\lambda=16$: ridge $\dfrac{-12}{24}=-0.5$; lasso $0$, because $|b|=12\le16$.
2. The $L^1$ penalty has a corner at $0$ (its constraint region is a diamond with corners on the axes), so the optimum often sits exactly at a zero weight. $\lambda$ is a hyper-parameter chosen by validation or cross-validation, never by training error.
:::
:::

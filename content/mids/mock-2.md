# Mock Mid 2

**Part I: 45 minutes, 20 MCQs worth 4 points each (80 points). Part II: 100 minutes, 8 problems (40 points).** The rules are those of the real paper: select **ALL (up to three)** correct options, with a penalty of $1$ point for each wrong tick, and no question below zero.

## Part I — Multiple choice

:::question MCQ 1
Which statements about linear independence are true?

1. Any set containing $\mathbf 0$ is dependent.
2. $\{v_1,v_2\}$ is dependent if and only if one vector is a multiple of the other.
3. Four vectors in $\mathbb{R}^3$ are always dependent.
4. Every orthogonal set is independent.

:::solution
**(a), (b), (c).** Statement (d) fails when the set contains $\mathbf 0$.
:::
:::

:::question MCQ 2
Let $S=\operatorname{span}\{(1,0,1),\ (0,1,1)\}$. Which are true?

1. $S$ is a plane through the origin.
2. $(1,1,2)\in S$
3. $(1,1,1)\in S$
4. $\dim S=3$

:::solution
**(a), (b).** Writing $(1,1,1)=a(1,0,1)+b(0,1,1)$ forces $a=b=1$, but then the third entry is $2$, not $1$.
:::
:::

:::question MCQ 3
Suppose $\|x\|=3$, $\|y\|=4$ and $x^\top y=0$. Which are true?

1. $\|x+y\|=5$
2. $\|x-y\|=5$
3. $\|2x+y\|=\sqrt{52}$
4. The angle between $x$ and $y$ is $45^\circ$.

:::solution
**(a), (b), (c).** Orthogonality gives Pythagoras, for example $\|2x+y\|^2=4\cdot9+16=52$; the angle is $90^\circ$.
:::
:::

:::question MCQ 4
Let $u$ be a unit vector and $p=(u^\top x)\,u$. Which are true?

1. $x-p\perp u$
2. $\|p\|=|u^\top x|$
3. If $x\perp u$, then $p=\mathbf 0$.
4. $\|p\|$ can exceed $\|x\|$.

:::solution
**(a), (b), (c).** By Cauchy–Schwarz, $\|p\|=|u^\top x|\le\|x\|$.
:::
:::

:::question MCQ 5
Let $x=(2,2,2,2)$. Which are true?

1. $\operatorname{std}(x)=0$
2. $\operatorname{rms}(x)=2$
3. $\operatorname{avg}(x)=2$
4. The standardised vector of $x$ is defined.

:::solution
**(a), (b), (c).** Standardising divides by the standard deviation, which is $0$.
:::
:::

:::question MCQ 6
Which statements about transposes are true?

1. $(AB)^\top=B^\top A^\top$
2. $(AB)^\top=A^\top B^\top$ in general
3. $(ABC)^\top=C^\top B^\top A^\top$
4. If $A$ and $B$ are symmetric, then $(AB)^\top=BA$.

:::solution
**(a), (c), (d).**
:::
:::

:::question MCQ 7
Let $u\in\mathbb{R}^4$ and $v\in\mathbb{R}^3$ be non-zero, and $M=uv^\top$. Which are true?

1. $M$ is $4\times3$.
2. $\operatorname{rank}M=1$
3. Every column of $M$ is a multiple of $u$.
4. $M$ is invertible.

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 8
Which statements about right inverses are true?

1. A wide matrix with independent rows has one.
2. A tall matrix can have one.
3. If $AX=I$, then $x=Xb$ solves $Ax=b$.
4. If $AX=I$, then $X^\top$ is a left inverse of $A^\top$.

:::solution
**(a), (c), (d).**
:::
:::

:::question MCQ 9
For a square matrix $A$, which statements are equivalent to "$A$ is invertible"?

1. The columns of $A$ are independent.
2. $\det A\neq0$
3. $\operatorname{rank}A=n$
4. $A$ is symmetric.

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 10
Let $D=\operatorname{diag}(2,0,5)$. Which are true?

1. $D$ is not invertible.
2. $\det D=0$
3. Its eigenvalues are $2$, $0$ and $5$.
4. $\operatorname{rank}D=3$

:::solution
**(a), (b), (c).** The rank is $2$.
:::
:::

:::question MCQ 11
Let $A\in\mathbb{R}^{5\times8}$ have rank $5$. Which are true?

1. $Ax=b$ is solvable for every $b\in\mathbb{R}^5$.
2. $\dim\mathcal N(A)=3$
3. The columns of $A$ are independent.
4. $A$ has a right inverse.

:::solution
**(a), (b), (d).** Eight columns in $\mathbb{R}^5$ cannot be independent.
:::
:::

:::question MCQ 12
Which statements about rank are true?

1. $\operatorname{rank}A^\top=\operatorname{rank}A$
2. $\operatorname{rank}(AB)\le\operatorname{rank}A$
3. $\operatorname{rank}(A+B)=\operatorname{rank}A+\operatorname{rank}B$ always
4. $\operatorname{rank}(uv^\top)=1$ for non-zero $u,v$

:::solution
**(a), (b), (d).** For (c), take $B=-A$: then $A+B=0$.
:::
:::

:::question MCQ 13
Which statements about loss functions are true?

1. The 0/1 loss is non-differentiable.
2. The MAE is more robust to outliers than the MSE.
3. The MSE and the RMSE have the same minimiser.
4. The best constant predictor under the MSE is the median.

:::solution
**(a), (b), (c).** The MSE is minimised by the mean; the MAE by the median.
:::
:::

:::question MCQ 14
Which statements about data splits are true?

1. Hyper-parameters are tuned on the validation set.
2. The test set is used once, for the final model.
3. Time-series data should be split at random.
4. The training error is a good estimate of the generalisation error.

:::solution
**(a), (b).**
:::
:::

:::question MCQ 15
Consider kNN with three classes and $k=3$. Which are true?

1. Ties are possible.
2. An odd $k$ prevents ties.
3. Ties can be broken with the $(k-1)$-NN or 1-NN rule.
4. The Hamming distance suits categorical features.

:::solution
**(a), (c), (d).** With three classes, a $1$–$1$–$1$ vote is possible.
:::
:::

:::question MCQ 16
Which statements about the curse of dimensionality are true?

1. The fraction of data inside a neighbourhood of fixed size shrinks exponentially with the number of features.
2. "Nearest" neighbours become far away.
3. kNN improves when irrelevant features are added.
4. It motivates dimensionality reduction.

:::solution
**(a), (b), (d).**
:::
:::

:::question MCQ 17
Polynomial regression of degree $M$ is fitted to $n$ points with distinct $x$-values. Which are true?

1. It is linear in the parameters.
2. $M\ge n-1$ gives zero training error.
3. The test error decreases monotonically with $M$.
4. The coefficients tend to explode when it overfits.

:::solution
**(a), (b), (d).**
:::
:::

:::question MCQ 18
Which statements about the lasso are true?

1. It uses an $L^1$ penalty.
2. It has a closed form, like ridge.
3. It tends to give sparse solutions.
4. It is a special case of the elastic net.

:::solution
**(a), (c), (d).**
:::
:::

:::question MCQ 19
Suppose $A=Q\Lambda Q^{-1}$. Which are true?

1. The columns of $Q$ are eigenvectors of $A$.
2. $A^3=Q\Lambda^3Q^{-1}$
3. The decomposition requires $A$ to be symmetric.
4. $\det A=\det\Lambda$

:::solution
**(a), (b), (d).** Symmetry is needed only to obtain $Q^{-1}=Q^\top$.
:::
:::

:::question MCQ 20
Suppose $0$ is an eigenvalue of $A$. Which are true?

1. $A$ is singular.
2. $Aq=\mathbf 0$ for some $q\neq\mathbf 0$.
3. The columns of $A$ are independent.
4. $A+I$ has eigenvalue $1$.

:::solution
**(a), (b), (d).**
:::
:::

## Part II — Problems (40 points)

:::question Problem 1 (4 points) — orthogonal matrices
1. Prove that an orthogonal matrix preserves inner products, and hence angles. *(2 points)*
2. Show that $Q=\dfrac13\begin{bmatrix}1&2&2\\2&1&-2\\2&-2&1\end{bmatrix}$ is orthogonal, and write down $Q^{-1}$. *(2 points)*

:::solution
1. For all $x,y$,
$$
(Qx)^\top(Qy)=x^\top Q^\top Qy=x^\top y .
$$
   Together with $\|Qx\|=\|x\|$ (the case $y=x$), this gives
$$
\cos\angle(Qx,Qy)=\frac{(Qx)^\top(Qy)}{\|Qx\|\,\|Qy\|}=\frac{x^\top y}{\|x\|\,\|y\|}=\cos\angle(x,y).
$$
2. Each column has squared length $\tfrac19(1+4+4)=1$, and the pairwise inner products are
$$
\frac19(2+2-4)=0,\qquad \frac19(2-4+2)=0,\qquad \frac19(4-2-2)=0 ,
$$
   so $Q^\top Q=I$. Hence $Q^{-1}=Q^\top$, and since this $Q$ is also symmetric, $Q^{-1}=Q$.
:::
:::

:::question Problem 2 (5 points) — projection onto a span
Let $u_1=(1,1,0)$, $u_2=(1,-1,1)$ and $v=(2,3,4)$.

1. Show that $u_1\perp u_2$, and project $v$ onto $\operatorname{span}\{u_1,u_2\}$. *(3 points)*
2. Verify that the residual is orthogonal to the span. *(1 point)*
3. If $a_1,a_2$ are independent, does Gram–Schmidt on $(a_2,a_1)$ produce $(q_2,q_1)$? *(1 point)*

:::solution
1. $u_1^\top u_2=1-1+0=0$. Because the basis is orthogonal, the projection is the sum of the projections onto each vector:
$$
\hat v=\frac{u_1^\top v}{u_1^\top u_1}\,u_1+\frac{u_2^\top v}{u_2^\top u_2}\,u_2=\frac52\begin{bmatrix}1\\1\\0\end{bmatrix}+\frac33\begin{bmatrix}1\\-1\\1\end{bmatrix}=\begin{bmatrix}3.5\\1.5\\1\end{bmatrix}.
$$
2. The residual is $r=v-\hat v=(-1.5,\ 1.5,\ 3)$, and
$$
r^\top u_1=-1.5+1.5=0,\qquad r^\top u_2=-1.5-1.5+3=0 .
$$
3. **Not in general**, because Gram–Schmidt depends on the order. For $a_1=(1,0)$ and $a_2=(1,1)$, the order $(a_1,a_2)$ gives $(1,0),(0,1)$, while the order $(a_2,a_1)$ gives $\tfrac1{\sqrt2}(1,1),\ \tfrac1{\sqrt2}(1,-1)$.
:::
:::

:::question Problem 3 (5 points) — the left pseudo-inverse
Let $A=\begin{bmatrix}1&1\\1&2\\1&3\end{bmatrix}$.

1. Can $A$ have a left inverse? A right inverse? Why? *(1 point)*
2. Compute $A^\dagger=(A^\top A)^{-1}A^\top$ and verify that $A^\dagger A=I$. *(2 points)*
3. Apply $A^\dagger$ to $b_1=(2,3,4)$ and to $b_2=(1,2,4)$. Which system is solvable? *(2 points)*

:::solution
1. $A$ is tall with independent columns, so it is left-invertible; its three rows in $\mathbb{R}^2$ are dependent, so it has no right inverse.
2. First,
$$
A^\top A=\begin{bmatrix}3&6\\6&14\end{bmatrix},\qquad \det=6,\qquad (A^\top A)^{-1}=\frac16\begin{bmatrix}14&-6\\-6&3\end{bmatrix},
$$
   so
$$
A^\dagger=\frac16\begin{bmatrix}14&-6\\-6&3\end{bmatrix}\begin{bmatrix}1&1&1\\1&2&3\end{bmatrix}=\frac16\begin{bmatrix}8&2&-4\\-3&0&3\end{bmatrix},
\qquad
A^\dagger A=\frac16\begin{bmatrix}8+2-4&8+4-12\\-3+0+3&-3+0+9\end{bmatrix}=\frac16\begin{bmatrix}6&0\\0&6\end{bmatrix}=I .
$$
3. For $b_1$,
$$
A^\dagger b_1=\frac16\begin{bmatrix}16+6-16\\-6+0+12\end{bmatrix}=\begin{bmatrix}1\\1\end{bmatrix},\qquad A\begin{bmatrix}1\\1\end{bmatrix}=\begin{bmatrix}2\\3\\4\end{bmatrix}=b_1 ,
$$
   so $Ax=b_1$ is solvable, with the unique solution $(1,1)$. For $b_2$,
$$
A^\dagger b_2=\frac16\begin{bmatrix}8+4-16\\-3+0+12\end{bmatrix}=\begin{bmatrix}-2/3\\3/2\end{bmatrix},\qquad A\begin{bmatrix}-2/3\\3/2\end{bmatrix}\approx\begin{bmatrix}0.83\\2.33\\3.83\end{bmatrix}\neq b_2 ,
$$
   so $Ax=b_2$ has **no** exact solution; this $x$ is its least-squares fit.
:::
:::

:::question Problem 4 (6 points) — spam-filter metrics
Of $2000$ emails, $10\%$ are spam (the positive class). A filter has recall $0.8$ and specificity $0.95$.

1. Reconstruct the confusion matrix, with rows for predictions and columns for the truth. *(2 points)*
2. Compute the accuracy, precision, $F_1$ score and MCC. *(3 points)*
3. What is the accuracy of a filter that never flags spam? What does this show? *(1 point)*

:::solution
1. There are $P=200$ spam and $N=1800$ legitimate emails, so
$$
TP=0.8\times200=160,\quad FN=40,\qquad TN=0.95\times1800=1710,\quad FP=90 .
$$

| | Spam | Not spam |
|---|---|---|
| Predicted spam | $160$ | $90$ |
| Predicted not spam | $40$ | $1710$ |

2. The metrics are
$$
\text{accuracy}=\frac{160+1710}{2000}=0.935,\qquad \text{precision}=\frac{160}{250}=0.64,\qquad F_1=\frac{2\cdot160}{2\cdot160+90+40}=\frac{320}{450}\approx0.711 ,
$$
$$
\text{MCC}=\frac{160\cdot1710-90\cdot40}{\sqrt{250\cdot200\cdot1800\cdot1750}}=\frac{273\,600-3600}{\sqrt{1.575\times10^{11}}}=\frac{270\,000}{396\,863}\approx0.68 .
$$
3. Never flagging spam gives $1800/2000=0.90$ accuracy without catching a single spam message. Accuracy is misleading under class imbalance; precision, recall, $F_1$ and MCC are the informative measures, and for a spam filter specificity and precision matter most.
:::
:::

:::question Problem 5 (6 points) — a line and a parabola
The data are $x=(-2,-1,0,1,2)$ and $y=(1,0,1,2,6)$.

1. Fit $\hat y=w_0+w_1x$. Why is $X^\top X$ diagonal? *(2 points)*
2. Fit $\hat y=w_0+w_1x+w_2x^2$. *(3 points)*
3. Which model has the lower training error, and does that mean it generalises better? *(1 point)*

:::solution
1. Since $\sum_ix_i=0$, the column of ones is orthogonal to the column of $x$, so
$$
X^\top X=\begin{bmatrix}5&0\\0&10\end{bmatrix},\qquad X^\top y=\begin{bmatrix}\sum y_i\\ \sum x_iy_i\end{bmatrix}=\begin{bmatrix}10\\12\end{bmatrix},\qquad w=\begin{bmatrix}10/5\\12/10\end{bmatrix}=\begin{bmatrix}2\\1.2\end{bmatrix}.
$$
2. The power sums are $\sum x_i^2=10$, $\sum x_i^3=0$, $\sum x_i^4=34$, and $\sum x_i^2y_i=4+0+0+2+24=30$. The normal equations are
$$
\begin{bmatrix}5&0&10\\0&10&0\\10&0&34\end{bmatrix}\begin{bmatrix}w_0\\w_1\\w_2\end{bmatrix}=\begin{bmatrix}10\\12\\30\end{bmatrix}.
$$
   The middle equation gives $w_1=1.2$. The first gives $w_0=2-2w_2$; substituting into the third,
$$
10(2-2w_2)+34w_2=30\quad\Longrightarrow\quad 14w_2=10\quad\Longrightarrow\quad w_2=\frac57,\qquad w_0=\frac47 .
$$
   So $\hat y=\tfrac47+1.2x+\tfrac57x^2$.
3. The quadratic has the lower (or equal) training error, because the line is the special case $w_2=0$. That does **not** mean it generalises better; the comparison must be made on validation data.
:::
:::

:::question Problem 6 (4 points) — reasoning with rank–nullity
Let $A\in\mathbb{R}^{6\times4}$ with $\mathcal N(A)=\operatorname{span}\{(1,1,0,0)\}$.

1. What are $\operatorname{rank}A$ and $\dim\mathcal C(A)$? *(1 point)*
2. What relation holds between the columns of $A$? *(1 point)*
3. Is $Ax=b$ solvable for every $b\in\mathbb{R}^6$? When it is solvable, how many solutions are there? *(2 points)*

:::solution
1. By rank–nullity, $\operatorname{rank}A=4-1=3$, and $\dim\mathcal C(A)=3$.
2. $A(1,1,0,0)^\top=a_1+a_2=\mathbf 0$, so $a_2=-a_1$.
3. **No**: $\mathcal C(A)$ is a three-dimensional subspace of $\mathbb{R}^6$. When a solution exists, there are infinitely many, namely $x_p+t\,(1,1,0,0)$ for $t\in\mathbb{R}$.
:::
:::

:::question Problem 7 (6 points) — an eigen-decomposition of a non-symmetric matrix
Let $A=\begin{bmatrix}4&1\\2&3\end{bmatrix}$.

1. Find the eigenvalues and eigenvectors. *(2 points)*
2. Write $A=Q\Lambda Q^{-1}$, and derive a formula for $A^k$. *(3 points)*
3. Are the eigenvectors orthogonal? Why or why not? *(1 point)*

:::solution
1. $p(\lambda)=\lambda^2-7\lambda+10=(\lambda-5)(\lambda-2)$.
$$
\lambda=5:\ \begin{bmatrix}-1&1\\2&-2\end{bmatrix}v=\mathbf 0\ \Rightarrow\ v=\begin{bmatrix}1\\1\end{bmatrix};
\qquad
\lambda=2:\ \begin{bmatrix}2&1\\2&1\end{bmatrix}v=\mathbf 0\ \Rightarrow\ v=\begin{bmatrix}1\\-2\end{bmatrix}.
$$
2. With
$$
Q=\begin{bmatrix}1&1\\1&-2\end{bmatrix},\qquad Q^{-1}=\frac{1}{-3}\begin{bmatrix}-2&-1\\-1&1\end{bmatrix}=\frac13\begin{bmatrix}2&1\\1&-1\end{bmatrix},
$$
   we have
$$
A^k=Q\begin{bmatrix}5^k&0\\0&2^k\end{bmatrix}Q^{-1}
=\frac13\begin{bmatrix}5^k&2^k\\5^k&-2\cdot2^k\end{bmatrix}\begin{bmatrix}2&1\\1&-1\end{bmatrix}
=\frac13\begin{bmatrix}2\cdot5^k+2^k&5^k-2^k\\2\cdot5^k-2\cdot2^k&5^k+2\cdot2^k\end{bmatrix}.
$$
   **Check** at $k=1$: $\tfrac13\begin{bmatrix}12&3\\6&9\end{bmatrix}=\begin{bmatrix}4&1\\2&3\end{bmatrix}=A$.
3. **No**: $(1,1)\cdot(1,-2)=-1\neq0$. The matrix is not symmetric, so the spectral theorem does not apply, and $Q^{-1}\neq Q^\top$.
:::
:::

:::question Problem 8 (4 points) — ridge in two dimensions
Let $X=\begin{bmatrix}1&0\\0&1\\1&1\end{bmatrix}$ and $y=(1,1,3)$, with no intercept.

1. Compute the OLS weights. *(2 points)*
2. Compute the ridge weights with $\lambda=1$, and compare the norms. *(2 points)*

:::solution
1. $X^\top X=\begin{bmatrix}2&1\\1&2\end{bmatrix}$ and $X^\top y=\begin{bmatrix}4\\4\end{bmatrix}$, so
$$
w_{\mathrm{OLS}}=\frac13\begin{bmatrix}2&-1\\-1&2\end{bmatrix}\begin{bmatrix}4\\4\end{bmatrix}=\begin{bmatrix}4/3\\4/3\end{bmatrix}.
$$
2. $X^\top X+I=\begin{bmatrix}3&1\\1&3\end{bmatrix}$ has determinant $8$, so
$$
w_{\mathrm{ridge}}=\frac18\begin{bmatrix}3&-1\\-1&3\end{bmatrix}\begin{bmatrix}4\\4\end{bmatrix}=\begin{bmatrix}1\\1\end{bmatrix}.
$$
   The norm shrinks from $\tfrac43\sqrt2\approx1.886$ to $\sqrt2\approx1.414$: the weights are pulled towards zero.
:::
:::

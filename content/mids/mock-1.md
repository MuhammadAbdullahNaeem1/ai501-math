# Mock Mid 1

The format copies the 2024 and 2025 AI 501 mid exams. **Part I: 45 minutes, 20 MCQs worth 4 points each (80 points). Part II: 100 minutes, 8 problems (40 points).** Sit it in one go, closed book, with a calculator. Solutions are folded under each question.

:::exam Part I instructions (as on the real paper)
Select **ALL (up to three)** correct choices. Each correct tick earns credit; **every incorrect tick costs 1 point**, but no question goes below zero. To score an MCQ out of 4, award $4/(\text{number of correct options})$ for each correct tick and subtract $1$ for each wrong one.
:::

## Part I — Multiple choice

:::question MCQ 1
Let $u,v\in\mathbb{R}^n$ be unit vectors. Which statements are true?

1. $\|u-v\|_2^2=2-2u^\top v$
2. $|u^\top v|\le1$
3. $u^\top v=1$ implies $u=v$
4. $\|u+v\|_2=2$ always

:::solution
**(a), (b), (c).** Expanding gives (a). Cauchy–Schwarz gives (b). Equality in Cauchy–Schwarz with a positive sign, for unit vectors, gives (c). Statement (d) is false: for orthogonal unit vectors, $\|u+v\|_2=\sqrt2$.
:::
:::

:::question MCQ 2
Which of the following are subspaces of $\mathbb{R}^3$?

1. $\{x:\ x_1=2x_3\}$
2. $\{x:\ x_1x_2=0\}$
3. $\operatorname{span}\{(1,1,1)\}$
4. $\{x:\ \|x\|_2\le1\}$

:::solution
**(a), (c).** Set (b) is the union of two planes and is not closed under addition: $(1,0,0)+(0,1,0)=(1,1,0)$ leaves it. Set (d) is not closed under scaling: $2\cdot(1,0,0)$ leaves the ball.
:::
:::

:::question MCQ 3
Which statements about combinations of two points $x_1,x_2$ are true?

1. A convex combination has non-negative coefficients that sum to $1$.
2. The set of all convex combinations of $x_1$ and $x_2$ is the segment joining them.
3. Every affine combination is convex.
4. Every convex combination is a linear combination.

:::solution
**(a), (b), (d).** Statement (c) is false: $2x_1-x_2$ is affine (its coefficients sum to $1$) but not convex.
:::
:::

:::question MCQ 4
For $x=(3,-4,0)$, which are true?

1. $\|x\|_1=7$
2. $\|x\|_2=5$
3. $\|x\|_\infty=4$
4. $\|x\|_\infty=3$

:::solution
**(a), (b), (c).** $\|x\|_1=3+4+0=7$, $\|x\|_2=\sqrt{9+16}=5$ and $\|x\|_\infty=\max\{3,4,0\}=4$.
:::
:::

:::question MCQ 5
Which statements about the correlation coefficient $\rho$ of two non-constant vectors are true?

1. It is the cosine similarity of the centred vectors.
2. $\rho\big(x,\ 2x+3\cdot\mathbf 1\big)=1$
3. $\rho$ can exceed $1$ for large vectors.
4. $\rho(x,-x)=-1$

:::solution
**(a), (b), (d).** Statement (c) is false by Cauchy–Schwarz, which bounds every cosine by $1$ in absolute value.
:::
:::

:::question MCQ 6
Gram–Schmidt is applied to $a_1,a_2,a_3$. Which are true?

1. If $\tilde q_3=\mathbf 0$, then $a_3\in\operatorname{span}\{a_1,a_2\}$.
2. The output depends on the order of the inputs.
3. $\operatorname{span}\{q_1,q_2\}=\operatorname{span}\{a_1,a_2\}$.
4. The inputs must already be orthogonal.

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 7
Let $A\in\mathbb{R}^{3\times5}$. Which are true?

1. $\operatorname{rank}A\le3$
2. $\dim\mathcal N(A)\ge2$
3. The columns of $A$ can be linearly independent.
4. $A$ can have a left inverse.

:::solution
**(a), (b).** Five columns in $\mathbb{R}^3$ are always dependent, so (c) is false, and therefore no left inverse exists, so (d) is false. By rank–nullity, $\dim\mathcal N(A)=5-\operatorname{rank}A\ge5-3=2$.
:::
:::

:::question MCQ 8
Which statements about left inverses are true?

1. $A$ has a left inverse only if its columns are independent.
2. A $5\times3$ matrix can have a left inverse.
3. A left inverse is always unique.
4. If $XA=I$ and $Ax=b$ is solvable, then $x=Xb$.

:::solution
**(a), (b), (d).** Statement (c) is false; the slide's $3\times2$ example has two different left inverses.
:::
:::

:::question MCQ 9
Which matrices are always symmetric? (In (a) and (b), $A\in\mathbb{R}^{m\times n}$; in (c) and (d), $A$ is square.)

1. $A^\top A$
2. $AA^\top$
3. $A+A^\top$
4. $A-A^\top$

:::solution
**(a), (b), (c).** The matrix $A-A^\top$ is skew-symmetric.
:::
:::

:::question MCQ 10
Let $Q\in\mathbb{R}^{n\times n}$ be orthogonal. Which are true?

1. $Q^\top Q=I$
2. $\det Q=\pm1$
3. $\|Qx-Qy\|=\|x-y\|$ for all $x,y$
4. $Q$ must be symmetric

:::solution
**(a), (b), (c).** Taking determinants of $Q^\top Q=I$ gives $(\det Q)^2=1$. Statement (d) is false: a rotation is orthogonal but not symmetric.
:::
:::

:::question MCQ 11
Which statements about the trace and the Frobenius norm are true?

1. $\operatorname{tr}(AB)=\operatorname{tr}(BA)$
2. $\operatorname{tr}(A+B)=\operatorname{tr}A+\operatorname{tr}B$
3. $\operatorname{tr}(AB)=\operatorname{tr}A\cdot\operatorname{tr}B$
4. $\|A\|_F^2=\operatorname{tr}(A^\top A)$

:::solution
**(a), (b), (d).** For (c), take $A=B=I_2$: the left side is $2$ and the right side is $4$.
:::
:::

:::question MCQ 12
$\left\|\begin{pmatrix}1&2\\3&4\end{pmatrix}\right\|_F$ equals:

1. $\sqrt{30}$
2. approximately $5.477$
3. $\sqrt{10}$
4. $30$

:::solution
**(a), (b).** $\sqrt{1+4+9+16}=\sqrt{30}\approx5.477$.
:::
:::

:::question MCQ 13
Let $A\in\mathbb{R}^{4\times4}$ have rank $3$. Which are true?

1. $\det A=0$
2. $0$ is an eigenvalue of $A$.
3. $Ax=b$ is solvable for every $b$.
4. $\mathcal N(A)$ is a line through the origin.

:::solution
**(a), (b), (d).** The nullity is $4-3=1$.
:::
:::

:::question MCQ 14
Which statements about kNN are true?

1. Predicting one point costs $O(dn)$.
2. A larger $k$ tends to lower the variance.
3. Features measured in very different units should be normalised.
4. Training fits a parametric model.

:::solution
**(a), (b), (c).** kNN is non-parametric and "lazy": training only stores the data.
:::
:::

:::question MCQ 15
For a cancer-screening test that must not send sick patients home, you should prefer:

1. high recall
2. $FP\gg FN$
3. accuracy as the main metric under heavy class imbalance
4. $FN\gg FP$

:::solution
**(a), (b).**
:::
:::

:::question MCQ 16
Which statements about classification metrics are true?

1. Precision $=TP/(TP+FP)$
2. FPR $=1-$ specificity
3. $F_1$ is the arithmetic mean of precision and recall.
4. An AUC of $0.5$ corresponds to random guessing.

:::solution
**(a), (b), (d).** $F_1$ is the *harmonic* mean.
:::
:::

:::question MCQ 17
Consider least squares with $X$ of full column rank whose first column is all ones. Which are true?

1. $w=(X^\top X)^{-1}X^\top y$
2. $X^\top(y-Xw)=\mathbf 0$
3. The residuals sum to zero.
4. Adding a feature can increase the training error.

:::solution
**(a), (b), (c).** Statement (d) is false: the models are nested, so adding a feature can only lower the training error or leave it unchanged.
:::
:::

:::question MCQ 18
Which statements about ridge regression with $\lambda>0$ are true?

1. $X^\top X+\lambda I$ is always invertible.
2. As $\lambda\to\infty$, $w\to\mathbf 0$.
3. It sets some coefficients exactly to zero.
4. It reduces the variance compared with OLS.

:::solution
**(a), (b), (d).** Exact zeros are a feature of the lasso.
:::
:::

:::question MCQ 19
A $2\times2$ matrix $A$ has eigenvalues $2$ and $-1$. Which are true?

1. $\det A=-2$
2. $\operatorname{tr}A=1$
3. $A^2+A$ has eigenvalues $6$ and $0$.
4. $A^{-1}$ has eigenvalues $2$ and $-1$.

:::solution
**(a), (b), (c).** For (c), $f(\lambda)=\lambda^2+\lambda$ gives $f(2)=6$ and $f(-1)=0$. The eigenvalues of $A^{-1}$ are $\tfrac12$ and $-1$.
:::
:::

:::question MCQ 20
Let $A$ be symmetric. Which are true?

1. All its eigenvalues are real.
2. $A=Q\Lambda Q^\top$ with $Q$ orthonormal.
3. All its eigenvalues are positive.
4. Eigenvectors belonging to distinct eigenvalues are orthogonal.

:::solution
**(a), (b), (d).** The symmetric matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ has eigenvalue $-1$.
:::
:::

## Part II — Problems (40 points)

:::question Problem 1 (4 points) — sizes of matrix expressions
Let $A\in\mathbb{R}^{4\times6}$, $B\in\mathbb{R}^{6\times3}$, $C\in\mathbb{R}^{3\times3}$ and $D\in\mathbb{R}^{4\times4}$. Say whether each expression is defined and, if so, give its size.

1. $A^\top DA+BCB^\top$
2. $ABC^\top$
3. $BA$
4. Find the size of $E$ if $ABE\in\mathbb{R}^{4\times4}$.

:::solution
1. The two terms have sizes
$$
A^\top DA:\ (6\times4)(4\times4)(4\times6)=6\times6,\qquad BCB^\top:\ (6\times3)(3\times3)(3\times6)=6\times6,
$$
so the sum is defined and is $6\times6$.
2. $(4\times6)(6\times3)(3\times3)=4\times3$.
3. $(6\times3)(4\times6)$: the inner sizes $3$ and $4$ differ, so the product is **undefined**.
4. $AB$ is $4\times3$, so $E\in\mathbb{R}^{3\times4}$.

*(1 point each.)*
:::
:::

:::question Problem 2 (6 points) — Gram–Schmidt
Let $a_1=(1,1,0,0)$, $a_2=(1,0,1,0)$ and $a_3=(0,1,1,0)$.

1. Apply Gram–Schmidt to obtain orthonormal $q_1,q_2,q_3$, and state the dimension of the span. *(4 points)*
2. Is $b=(1,2,3,0)$ in the span? Decide by computing $\hat b=\sum_i(q_i^\top b)\,q_i$. *(2 points)*

:::solution
1. **Step 1.** $\|a_1\|=\sqrt2$, so
$$
q_1=\frac{1}{\sqrt2}\begin{bmatrix}1\\1\\0\\0\end{bmatrix}.
$$
   **Step 2.** $q_1^\top a_2=\tfrac{1}{\sqrt2}$, so
$$
\tilde q_2=a_2-\frac{1}{\sqrt2}\,q_1=\begin{bmatrix}1\\0\\1\\0\end{bmatrix}-\frac12\begin{bmatrix}1\\1\\0\\0\end{bmatrix}=\begin{bmatrix}1/2\\-1/2\\1\\0\end{bmatrix},\qquad \|\tilde q_2\|=\sqrt{\tfrac32},\qquad q_2=\frac{1}{\sqrt6}\begin{bmatrix}1\\-1\\2\\0\end{bmatrix}.
$$
   **Step 3.** $q_1^\top a_3=\tfrac{1}{\sqrt2}$ and $q_2^\top a_3=\tfrac{1}{\sqrt6}$, so
$$
\tilde q_3=a_3-\frac{1}{\sqrt2}\,q_1-\frac{1}{\sqrt6}\,q_2=\begin{bmatrix}0\\1\\1\\0\end{bmatrix}-\frac12\begin{bmatrix}1\\1\\0\\0\end{bmatrix}-\frac16\begin{bmatrix}1\\-1\\2\\0\end{bmatrix}=\begin{bmatrix}-2/3\\2/3\\2/3\\0\end{bmatrix},
$$
$$
\|\tilde q_3\|=\frac{2}{\sqrt3},\qquad q_3=\frac{1}{\sqrt3}\begin{bmatrix}-1\\1\\1\\0\end{bmatrix}.
$$
   **Checks.** $q_1^\top q_3=0$ and $q_2^\top q_3=\tfrac{-1-1+2}{\sqrt{18}}=0$. No remainder vanished, so the vectors are independent and the span has **dimension 3** (it is the subspace $x_4=0$).
2. The coefficients are $q_1^\top b=\tfrac{3}{\sqrt2}$, $q_2^\top b=\tfrac{5}{\sqrt6}$ and $q_3^\top b=\tfrac{4}{\sqrt3}$, so
$$
\hat b=\frac32\begin{bmatrix}1\\1\\0\\0\end{bmatrix}+\frac56\begin{bmatrix}1\\-1\\2\\0\end{bmatrix}+\frac43\begin{bmatrix}-1\\1\\1\\0\end{bmatrix}
=\begin{bmatrix}\tfrac32+\tfrac56-\tfrac43\\[2pt] \tfrac32-\tfrac56+\tfrac43\\[2pt] \tfrac53+\tfrac43\\[2pt] 0\end{bmatrix}=\begin{bmatrix}1\\2\\3\\0\end{bmatrix}=b .
$$
   Since $\hat b=b$, **yes**, $b$ lies in the span.
:::
:::

:::question Problem 3 (5 points) — rank, null space and the complete solution
Let $A=\begin{bmatrix}1&2&1&0\\2&4&3&1\\1&2&2&1\end{bmatrix}$.

1. Reduce $[\,A\mid b\,]$; give $\operatorname{rank}A$ and the condition on $b$ for solvability. *(2 points)*
2. Give a basis of $\mathcal N(A)$ and verify rank–nullity. *(2 points)*
3. Write the complete solution for $b=(1,3,2)$. *(1 point)*

:::solution
**Elimination.**
$$
\left[\begin{array}{cccc|c}1&2&1&0&b_1\\2&4&3&1&b_2\\1&2&2&1&b_3\end{array}\right]
\longrightarrow
\left[\begin{array}{cccc|c}1&2&1&0&b_1\\0&0&1&1&b_2-2b_1\\0&0&1&1&b_3-b_1\end{array}\right]
\longrightarrow
\left[\begin{array}{cccc|c}1&2&1&0&b_1\\0&0&1&1&b_2-2b_1\\0&0&0&0&b_3-b_2+b_1\end{array}\right].
$$
1. The rank is $2$, and the system is solvable exactly when $b_3-b_2+b_1=0$, that is, $b_2=b_1+b_3$.
2. The free variables are $x_2$ and $x_4$.
   - $x_2=1$, $x_4=0$: then $x_3=0$ and $x_1=-2$, giving $s_1=(-2,1,0,0)$.
   - $x_2=0$, $x_4=1$: then $x_3=-1$ and $x_1=-x_3=1$, giving $s_2=(1,0,-1,1)$.

   So $\mathcal N(A)=\operatorname{span}\{s_1,s_2\}$, and rank–nullity holds: $2+2=4$.
3. Since $3=1+2$, the system is solvable. With $x_2=x_4=0$, row 2 gives $x_3=3-2=1$ and row 1 gives $x_1=1-1=0$. Hence
$$
\boxed{\;x=\begin{bmatrix}0\\0\\1\\0\end{bmatrix}+c_1\begin{bmatrix}-2\\1\\0\\0\end{bmatrix}+c_2\begin{bmatrix}1\\0\\-1\\1\end{bmatrix},\qquad c_1,c_2\in\mathbb{R}.\;}
$$
:::
:::

:::question Problem 4 (5 points) — kNN and evaluation
1. The training points are $A(1,1)$ $+$, $B(2,2)$ $+$, $C(4,4)$ $-$, $D(5,3)$ $-$, $E(3,1)$ $+$ and $F(5,5)$ $-$. Classify $T=(3,2.5)$ using Euclidean distance with $k=1$, $3$ and $5$. *(3 points)*
2. A classifier on $200$ test points has TP $=40$, FP $=10$, FN $=20$ and TN $=130$. Compute the accuracy, recall, specificity, precision and $F_1$. *(2 points)*

:::solution
1. The distances from $T$, in increasing order, are
$$
\begin{aligned}
d(B)&=\sqrt{1+0.25}\approx1.12\ (+), & d(E)&=\sqrt{0+2.25}=1.5\ (+), & d(C)&=\sqrt{1+2.25}\approx1.80\ (-),\\
d(D)&=\sqrt{4+0.25}\approx2.06\ (-), & d(A)&=\sqrt{4+2.25}=2.5\ (+), & d(F)&=\sqrt{4+6.25}\approx3.20\ (-).
\end{aligned}
$$
   - $k=1$: the neighbour is $B$, so the prediction is $\mathbf{+}$.
   - $k=3$: the neighbours $B,E,C$ vote $2$ to $1$ for $\mathbf{+}$.
   - $k=5$: the neighbours $B,E,C,D,A$ vote $3$ to $2$ for $\mathbf{+}$.
2. With $P=60$ and $N=140$,
$$
\text{accuracy}=\frac{170}{200}=0.85,\quad \text{recall}=\frac{40}{60}\approx0.667,\quad \text{specificity}=\frac{130}{140}\approx0.929,\quad \text{precision}=\frac{40}{50}=0.80,\quad F_1=\frac{80}{110}\approx0.727 .
$$
:::
:::

:::question Problem 5 (6 points) — least squares and ridge
The data are $(x,y)=(-1,1)$, $(0,1)$, $(1,3)$ and $(2,3)$, and the model is $\hat y=w_0+w_1x$.

1. Compute the least-squares $w$, and verify that $X^\top e=\mathbf 0$. *(3 points)*
2. Fit ridge regression with only the slope penalised and $\lambda=4$, using $w_1=\dfrac{S_{xy}}{S_{xx}+\lambda}$ and $w_0=\bar y-w_1\bar x$. *(2 points)*
3. What happens as $\lambda\to\infty$? *(1 point)*

:::solution
1. **Step 1.**
$$
X^\top X=\begin{bmatrix}4&2\\2&6\end{bmatrix},\qquad X^\top y=\begin{bmatrix}1+1+3+3\\-1+0+3+6\end{bmatrix}=\begin{bmatrix}8\\8\end{bmatrix},\qquad \det(X^\top X)=20 .
$$
   **Step 2.**
$$
w=\frac{1}{20}\begin{bmatrix}6&-2\\-2&4\end{bmatrix}\begin{bmatrix}8\\8\end{bmatrix}=\frac{1}{20}\begin{bmatrix}32\\16\end{bmatrix}=\boxed{\begin{bmatrix}1.6\\0.8\end{bmatrix}}.
$$
   **Step 3 — check.** The fitted values are $\hat y=(0.8,\,1.6,\,2.4,\,3.2)$ and the residual is $e=(0.2,\,-0.6,\,0.6,\,-0.2)$, so
$$
X^\top e=\begin{bmatrix}0.2-0.6+0.6-0.2\\-0.2+0+0.6-0.4\end{bmatrix}=\begin{bmatrix}0\\0\end{bmatrix}.
$$
2. Here $\bar x=0.5$ and $\bar y=2$, and the centred sums are
$$
S_{xx}=\sum_i(x_i-\bar x)^2=2.25+0.25+0.25+2.25=5,\qquad S_{xy}=\sum_i(x_i-\bar x)(y_i-\bar y)=1.5+0.5+0.5+1.5=4 .
$$
   (As a check, the OLS slope is $S_{xy}/S_{xx}=0.8$.) With $\lambda=4$,
$$
w_1=\frac{4}{5+4}=\frac49\approx0.444,\qquad w_0=2-\frac49\cdot0.5=\frac{16}{9}\approx1.778 .
$$
3. As $\lambda\to\infty$, $w_1\to0$ and $w_0\to\bar y=2$: the model becomes the constant prediction $2$.
:::
:::

:::question Problem 6 (4 points) — derivations
1. Show, **without calculus**, that the least-squares $w$ satisfies $X^\top Xw=X^\top y$. *(2 points)*
2. Prove that $X^\top X$ is invertible when $X$ has linearly independent columns. *(2 points)*

:::solution
1. As $w$ varies, $Xw$ ranges over the column space $\mathcal C(X)$. The point of $\mathcal C(X)$ closest to $y$ is the orthogonal projection $\hat y=Xw$, characterised by the residual being orthogonal to every column of $X$:
$$
X^\top(y-Xw)=\mathbf 0\qquad\Longleftrightarrow\qquad X^\top Xw=X^\top y .
$$
   It is the closest point because, for any $p\in\mathcal C(X)$, Pythagoras gives $\|y-p\|^2=\|e\|^2+\|\hat y-p\|^2\ge\|e\|^2$.
2. Suppose $X^\top Xv=\mathbf 0$. Then
$$
0=v^\top X^\top Xv=\|Xv\|^2 ,
$$
   so $Xv=\mathbf 0$, and independence of the columns gives $v=\mathbf 0$. A square matrix with trivial null space is invertible.
:::
:::

:::question Problem 7 (6 points) — eigen-decomposition
Let $A=\begin{bmatrix}1&2\\2&1\end{bmatrix}$.

1. Find the eigenvalues and orthonormal eigenvectors, and write $A=Q\Lambda Q^\top$. *(3 points)*
2. Compute $A^4$ using the eigen-decomposition. *(2 points)*
3. Use the eigenvalues to show that $A^2-2A=3I$. *(1 point)*

:::solution
1. $p(\lambda)=\lambda^2-2\lambda-3=(\lambda-3)(\lambda+1)$, so the eigenvalues are $3$ and $-1$.
$$
\lambda=3:\ \begin{bmatrix}-2&2\\2&-2\end{bmatrix}v=\mathbf 0\ \Rightarrow\ q_1=\frac1{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix};
\qquad
\lambda=-1:\ \begin{bmatrix}2&2\\2&2\end{bmatrix}v=\mathbf 0\ \Rightarrow\ q_2=\frac1{\sqrt2}\begin{bmatrix}1\\-1\end{bmatrix}.
$$
   Hence
$$
A=\frac{1}{\sqrt2}\begin{bmatrix}1&1\\1&-1\end{bmatrix}\begin{bmatrix}3&0\\0&-1\end{bmatrix}\frac{1}{\sqrt2}\begin{bmatrix}1&1\\1&-1\end{bmatrix}.
$$
2. Raising the eigenvalues to the fourth power, $3^4=81$ and $(-1)^4=1$:
$$
A^4=81\,q_1q_1^\top+1\,q_2q_2^\top=\frac12\left(81\begin{bmatrix}1&1\\1&1\end{bmatrix}+\begin{bmatrix}1&-1\\-1&1\end{bmatrix}\right)=\boxed{\begin{bmatrix}41&40\\40&41\end{bmatrix}}.
$$
3. With $f(\lambda)=\lambda^2-2\lambda$, both eigenvalues give the same value, $f(3)=9-6=3$ and $f(-1)=1+2=3$. Therefore
$$
A^2-2A=Q\,\operatorname{diag}(3,3)\,Q^\top=3\,QQ^\top=3I .
$$
:::
:::

:::question Problem 8 (4 points) — lasso versus ridge
1. Explain geometrically why the lasso gives sparse solutions. *(2 points)*
2. One feature has $a=\sum_ix_i^2=10$ and $b=\sum_ix_iy_i=-3$. Give the OLS, ridge and lasso weights for $\lambda=1$ and for $\lambda=5$. *(2 points)*

:::solution
1. The lasso constraint $\|\theta\|_1\le t$ is a diamond with corners on the axes, and the elliptical error contours usually first touch it at a corner, where some coordinates are exactly zero. The ridge constraint is a disc with no corners, so the contact point generically has every coordinate non-zero.
2. OLS gives $w=b/a=-0.3$ for both values of $\lambda$.
   - $\lambda=1$: ridge $\dfrac{-3}{11}\approx-0.273$; lasso $-\dfrac{3-1}{10}=-0.2$.
   - $\lambda=5$: ridge $\dfrac{-3}{15}=-0.2$; lasso $0$, because $|b|=3\le5$.
:::
:::

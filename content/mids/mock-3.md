# Mock Mid 3

**Part I: 45 minutes, 20 MCQs × 4 = 80 points. Part II: 100 minutes, 8 problems, 40 points.** Select **ALL (up to three)** correct options, −1 per wrong tick. Problem 8 covers SVD/low-rank (outline Week 6, tested in both previous mids) — attempt it as insurance.

## Part I — Multiple choice

:::question MCQ 1
Which are norms on $\mathbb{R}^n$?
(a) $\|x\|_1$ (b) $\|x\|_\infty$ (c) the number of non-zero entries $\|x\|_0$ (d) $\big(\sum|x_i|^{1/2}\big)^2$
:::solution
**(a), (b).** $\|x\|_0$ fails homogeneity; $p<1$ fails the triangle inequality.
:::
:::

:::question MCQ 2
$y=\alpha_1x_1+\alpha_2x_2$ for non-parallel $x_1,x_2\in\mathbb{R}^2$:
(a) unrestricted ⇒ all of $\mathbb{R}^2$ (b) $\alpha_1+\alpha_2=1$ ⇒ the line through $x_1,x_2$ (c) $\alpha_i\ge0$ ⇒ the segment between them (d) $\alpha_i\ge0,\ \sum\alpha_i=1$ ⇒ the segment
:::solution
**(a), (b), (d).** $\alpha_i\ge0$ alone gives a cone.
:::
:::

:::question MCQ 3
Boolean vectors $x,y\in\{0,1\}^n$ mark correct answers of you and a friend:
(a) $x^\top y$ = answers you both got right (b) $\mathbf 1^\top x$ = your correct answers (c) $\|x\|_2$ = your correct answers (d) $\|x\|_2^2$ = your correct answers
:::solution
**(a), (b), (d).** $\|x\|_2$ is the square root.
:::
:::

:::question MCQ 4
$\|x\|=-\|-x\|$ holds:
(a) always (b) sometimes (c) never (d) only for $x=0$
:::solution
**(b), (d).**
:::
:::

:::question MCQ 5
Orthonormal vectors $q_1,\dots,q_k$:
(a) $q_i^\top q_j=\delta_{ij}$ (b) they are independent (c) the coefficient of $x$ along $q_i$ is $q_i^\top x$ (d) $k$ can exceed $n$
:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 6
Vector space / subspace facts:
(a) every subspace contains $\mathbf 0$ (b) the span of any set is a subspace (c) $\{0\}$ is a subspace (d) a subspace must have dimension ≥ 2
:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 7
$A=\begin{pmatrix}4&2\\0&2\end{pmatrix}$, $A=S+K$:
(a) $S=\begin{pmatrix}4&1\\1&2\end{pmatrix}$ (b) $K=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ (c) $\operatorname{tr}K=0$ (d) $S$ is skew-symmetric
:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 8
$x\in\mathbb{R}^n$, $X\in\mathbb{R}^{d\times n}$, $Y=XDx\in\mathbb{R}^d$. Then $D$ is:
(a) $n\times n$ (b) $d\times n$ (c) $n\times d$ (d) the product is undefined for every $D$
:::solution
**(a).** $X$ is $d\times n$ so $D$ needs $n$ rows; $Dx$ needs $n$ columns.
:::
:::

:::question MCQ 9
A permutation matrix $P$:
(a) has exactly one 1 in each row and column (b) $P^\top P=I$ (c) $\det P=\pm1$ (d) $Px$ changes the norm of $x$
:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 10
$\det$ for $A\in\mathbb{R}^{2\times2}$, $\det A=3$:
(a) $\det(2A)=6$ (b) $\det(2A)=12$ (c) $\det A^{-1}=1/3$ (d) $\det A^\top=3$
:::solution
**(b), (c), (d).** $\det(cA)=c^n\det A$.
:::
:::

:::question MCQ 11
$Ax=0$ for some non-zero $x$:
(a) $A=0$ (b) the columns of $A$ are dependent (c) $\mathcal N(A)\neq\{0\}$ (d) if $A$ is square, $\det A=0$
:::solution
**(b), (c), (d).**
:::
:::

:::question MCQ 12
$A\in\mathbb{R}^{4\times3}$ with rank 3:
(a) its columns are independent (b) $\mathcal N(A)=\{0\}$ (c) the row space has dimension 3 (d) $Ax=b$ has a solution for every $b$
:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 13
Supervised learning components:
(a) a labelled dataset (b) a hypothesis class (c) a loss function (d) an unlabelled test set only
:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 14
Recall is 83% for a "will repay the loan" classifier:
(a) 83% of all customers repay (b) 17% of customers who would repay are rejected (c) 83% of customers who would repay are approved (d) precision is also 83%
:::solution
**(b), (c).**
:::
:::

:::question MCQ 15
ROC/AUC:
(a) ROC plots TPR against FPR (b) the ideal point is $(0,1)$ (c) AUC is the probability a random positive outscores a random negative (d) AUC below 0.5 is worthless and cannot be fixed
:::solution
**(a), (b), (c).** Flip the predictions: AUC $\to1-$AUC.
:::
:::

:::question MCQ 16
F-scores:
(a) $F_1=2TP/(2TP+FP+FN)$ (b) HM ≤ GM ≤ AM for two positive numbers (c) $F_2$ weights recall more than precision (d) $F_1$ uses TN
:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 17
The normal equations $X^\top Xw=X^\top y$:
(a) say the residual is orthogonal to $\mathcal C(X)$ (b) follow from setting $\nabla\tfrac12\|y-Xw\|^2=0$ (c) always have a unique solution (d) reduce to $w_0=\bar y$ for a bias-only model
:::solution
**(a), (b), (d).** Unique only with independent columns.
:::
:::

:::question MCQ 18
To reduce the **variance** of a regression model:
(a) add more training data (b) lower the model complexity (c) increase the ridge $\lambda$ (d) increase the polynomial degree
:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 19
$A$ invertible with eigenvalues 1 and 3. Eigenvalues of $2A^2-3A^{-1}+I$:
(a) $0,\ 18$ (b) $0,\ 17$ (c) $2,\ 18$ (d) $1,\ 3$
:::solution
**(a).** $f(1)=2-3+1=0$; $f(3)=18-1+1=18$.
:::
:::

:::question MCQ 20
Positive semi-definite symmetric $A$:
(a) all eigenvalues ≥ 0 (b) $x^\top Ax\ge0$ for all $x$ (c) $A=B^\top B$ for some $B$ (d) $\det A>0$ suffices
:::solution
**(a), (b), (c).**
:::
:::

## Part II — Problems (40 points)

:::question Problem 1 (4 pts) — vector notation
A record $r\in\mathbb{R}^6$ holds 4 quiz scores (each out of 10), a mid (out of 60) and a final (out of 100). Quizzes are worth 20% in total, mid 30%, final 50%.
(a) Find $w$ with course score $s=w^\top r$ on 0–100. (2)
(b) Express the average quiz score and "the student scored at least one zero on a quiz" (given an indicator vector of zero quizzes $z\in\{0,1\}^4$) in vector notation. (2)
:::solution
(a) Quizzes total 40 points worth 20 ⇒ $0.5$ each; mid $30/60=0.5$; final $50/100=0.5$ ⇒ $w=0.5\cdot\mathbf 1_6$. Check perfect record: $0.5(40+60+100)=100$ ✓.
(b) Average quiz $=\tfrac14(e_1+e_2+e_3+e_4)^\top r$. At least one zero: $\mathbf 1^\top z\ge1$.
:::
:::

:::question Problem 2 (5 pts) — Gram–Schmidt with dependence
$a_1=(2,0,1)$, $a_2=(1,1,0)$, $a_3=(4,2,1)$. Run Gram–Schmidt, detect the dependence and give the dimension of the span.
:::solution
$q_1=\tfrac1{\sqrt5}(2,0,1)$. $q_1^\top a_2=\tfrac2{\sqrt5}$ ⇒ $\tilde q_2=(1,1,0)-\tfrac25(2,0,1)=(0.2,1,-0.4)$, $\|\tilde q_2\|=\sqrt{1.2}$ ⇒ $q_2=\tfrac1{\sqrt{30}}(1,5,-2)$.
$q_1^\top a_3=\tfrac9{\sqrt5}$ ⇒ $\tfrac95(2,0,1)=(3.6,0,1.8)$; $q_2^\top a_3=\tfrac{12}{\sqrt{30}}$ ⇒ $\tfrac{12}{30}(1,5,-2)=(0.4,2,-0.8)$; $\tilde q_3=(4,2,1)-(4,2,1)=\mathbf 0$ ⇒ **dependent** ($a_3=a_1+2a_2$); dimension **2**.
:::
:::

:::question Problem 3 (5 pts) — matrix operations
$A=\begin{bmatrix}1&3&0\\-1&2&4\\2&0&5\end{bmatrix}$.
(a) $A=S+K$. (2) (b) $\operatorname{tr}A$, $\|A\|_F$. (1) (c) $Ax$ for $x=(1,-1,2)$ as a column combination. (2)
:::solution
(a) $S=\begin{bmatrix}1&1&1\\1&2&2\\1&2&5\end{bmatrix}$, $K=\begin{bmatrix}0&2&-1\\-2&0&2\\1&-2&0\end{bmatrix}$.
(b) $\operatorname{tr}A=8$; $\|A\|_F=\sqrt{1+9+1+4+16+4+25}=\sqrt{60}$.
(c) $1\begin{bmatrix}1\\-1\\2\end{bmatrix}-1\begin{bmatrix}3\\2\\0\end{bmatrix}+2\begin{bmatrix}0\\4\\5\end{bmatrix}=\begin{bmatrix}-2\\5\\12\end{bmatrix}$.
:::
:::

:::question Problem 4 (6 pts) — square and wide systems
(a) Solve $\begin{bmatrix}2&1\\5&3\end{bmatrix}x=\begin{bmatrix}1\\2\end{bmatrix}$ with the inverse. (2)
(b) $A=(1\ 1\ 1)$, $b=3$. Classify; find the right pseudo-inverse and the solution it gives; compare its norm with the solution $(3,0,0)$. (3)
(c) Why can't $A$ in (b) have a left inverse? (1)
:::solution
(a) $\det=1$, inverse $\begin{bmatrix}3&-1\\-5&2\end{bmatrix}$ ⇒ $x=(1,-1)$; check $(2-1,5-3)=(1,2)$ ✓.
(b) Under-determined (wide, rank 1 = full row rank) ⇒ infinitely many solutions. $A^\dagger=A^\top(AA^\top)^{-1}=\tfrac13(1,1,1)^\top$ ⇒ $x=(1,1,1)$, $\|x\|=\sqrt3<3=\|(3,0,0)\|$ — the minimum-norm solution.
(c) Its 3 columns in $\mathbb{R}^1$ are dependent.
:::
:::

:::question Problem 5 (6 pts) — orthogonal design, OLS and ridge
Intercept plus $x_1=(-1,1,-1,1)$, $x_2=(-1,-1,1,1)$; $y=(1,3,2,6)$.
(a) Show $X^\top X$ is diagonal and find the OLS weights, fitted values and residuals. (4)
(b) Ridge on the slopes with $\lambda=4$ (intercept unpenalised): give the weights. (2)
:::solution
(a) Columns $\mathbf 1,x_1,x_2$ mutually orthogonal ⇒ $X^\top X=4I$. $X^\top y=(12,6,4)$ ⇒ $w=(3,1.5,1)$. $\hat y=(0.5,3.5,2.5,5.5)$, $e=(0.5,-0.5,-0.5,0.5)$ (sums to 0 ✓).
(b) Slopes decouple: $w_j=\frac{x_j^\top y}{4+\lambda}$ ⇒ $w_1=0.75$, $w_2=0.5$; intercept stays 3 — each slope multiplied by the shrink factor $4/8$.
:::
:::

:::question Problem 6 (4 pts) — kNN variants
Training $(x,y)$ for regression: $(1,2),(2,4),(4,8),(7,6)$. Query $x=3$, $k=2$.
(a) Plain average prediction. (1) (b) Inverse-distance-weighted prediction. (2)
(c) Two patients $(B+,\text{smoker},\text{Lahore})$, $(O+,\text{smoker},\text{Karachi})$: Hamming distance? (1)
:::solution
Distances: 2, 1, 1, 4 ⇒ neighbours $x=2$ ($y=4$) and $x=4$ ($y=8$).
(a) $(4+8)/2=6$. (b) both at distance 1 ⇒ weights equal ⇒ 6. *(If a question uses unequal distances, use $\sum(y_i/d_i)/\sum(1/d_i)$.)*
(c) 2 (blood group and city differ).
:::
:::

:::question Problem 7 (6 pts) — repeated eigenvalue
$A=\begin{bmatrix}2&0&0\\0&3&1\\0&1&3\end{bmatrix}$.
(a) Eigenvalues; check with trace and determinant. (2)
(b) Eigenspaces and an orthonormal eigenbasis. (3)
(c) Eigenvalues of $A^{-1}$. (1)
:::solution
(a) Block structure: $2$, and the eigenvalues of $\begin{bmatrix}3&1\\1&3\end{bmatrix}$: $4,2$ ⇒ $\{2,2,4\}$. $\operatorname{tr}=8=2+2+4$ ✓, $\det=2(9-1)=16=2\cdot2\cdot4$ ✓.
(b) $\lambda=4$: $(A-4I)v=0$ ⇒ $v_1=0$, $v_2=v_3$ ⇒ $\tfrac1{\sqrt2}(0,1,1)$. $\lambda=2$: $A-2I=\begin{bmatrix}0&0&0\\0&1&1\\0&1&1\end{bmatrix}$ ⇒ $v_2=-v_3$, $v_1$ free ⇒ 2-dimensional eigenspace $\operatorname{span}\{(1,0,0),\tfrac1{\sqrt2}(0,1,-1)\}$. These three form an orthonormal basis (spectral theorem).
(c) $\tfrac12,\tfrac12,\tfrac14$.
:::
:::

:::question Problem 8 (4 pts) — SVD insurance
(a) A $1000\times800$ image has rank 50. Storage for the rank-50 SVD and the percentage saving? (2)
(b) $B\in\mathbb{R}^{3\times2}$ has singular values 4 and 1. Eigenvalues of $B^\top B$? Error $\|B-B_1\|_F$ of the best rank-1 approximation? (2)
:::solution
(a) $1000\cdot50+50+50\cdot800=90\,050$ vs $800\,000$ ⇒ saving $1-90\,050/800\,000\approx88.7\%$.
(b) $16$ and $1$; $\|B-B_1\|_F=\sqrt{\sigma_2^2}=1$ (Eckart–Young).
:::
:::

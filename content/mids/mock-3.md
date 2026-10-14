# Mock Mid 3

**Part I: 45 minutes, 20 MCQs worth 4 points each (80 points). Part II: 100 minutes, 8 problems (40 points).** Select **ALL (up to three)** correct options, with a penalty of $1$ point for each wrong tick. Problem 8 covers the SVD and low-rank approximation (Week 6 of the outline, tested in both previous mids); attempt it as insurance.

## Part I — Multiple choice

:::question MCQ 1
Which of the following are norms on $\mathbb{R}^n$?

1. $\|x\|_1$
2. $\|x\|_\infty$
3. the number of non-zero entries, $\|x\|_0$
4. $\big(\sum_i|x_i|^{1/2}\big)^2$

:::solution
**(a), (b).** $\|x\|_0$ fails homogeneity, and $p<1$ fails the triangle inequality.
:::
:::

:::question MCQ 2
Let $x_1,x_2\in\mathbb{R}^2$ be non-parallel and $y=\alpha_1x_1+\alpha_2x_2$. Which are true?

1. With no restriction, $y$ ranges over all of $\mathbb{R}^2$.
2. With $\alpha_1+\alpha_2=1$, $y$ ranges over the line through $x_1$ and $x_2$.
3. With $\alpha_i\ge0$, $y$ ranges over the segment between them.
4. With $\alpha_i\ge0$ and $\alpha_1+\alpha_2=1$, $y$ ranges over the segment.

:::solution
**(a), (b), (d).** The condition $\alpha_i\ge0$ alone gives a cone.
:::
:::

:::question MCQ 3
Boolean vectors $x,y\in\{0,1\}^n$ mark the correct answers of you and a friend. Which are true?

1. $x^\top y$ is the number of questions you both answered correctly.
2. $\mathbf 1^\top x$ is the number you answered correctly.
3. $\|x\|_2$ is the number you answered correctly.
4. $\|x\|_2^2$ is the number you answered correctly.

:::solution
**(a), (b), (d).** $\|x\|_2$ is the square root of that number.
:::
:::

:::question MCQ 4
The equation $\|x\|=-\|-x\|$ holds:

1. always
2. sometimes
3. never
4. only for $x=\mathbf 0$

:::solution
**(b), (d).**
:::
:::

:::question MCQ 5
Let $q_1,\dots,q_k$ be orthonormal. Which are true?

1. $q_i^\top q_j=\delta_{ij}$
2. They are linearly independent.
3. The coefficient of $x$ along $q_i$ is $q_i^\top x$.
4. $k$ can exceed $n$.

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 6
Which statements about vector spaces and subspaces are true?

1. Every subspace contains $\mathbf 0$.
2. The span of any set is a subspace.
3. $\{\mathbf 0\}$ is a subspace.
4. A subspace must have dimension at least $2$.

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 7
Let $A=\begin{pmatrix}4&2\\0&2\end{pmatrix}=S+K$. Which are true?

1. $S=\begin{pmatrix}4&1\\1&2\end{pmatrix}$
2. $K=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$
3. $\operatorname{tr}K=0$
4. $S$ is skew-symmetric.

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 8
Let $x\in\mathbb{R}^n$ and $X\in\mathbb{R}^{d\times n}$, and suppose $XDx\in\mathbb{R}^d$. Then $D$ is:

1. $n\times n$
2. $d\times n$
3. $n\times d$
4. impossible to choose

:::solution
**(a).** For $XD$ to be defined, $D$ needs $n$ rows; for $Dx$ to be defined, it needs $n$ columns.
:::
:::

:::question MCQ 9
Which statements about a permutation matrix $P$ are true?

1. It has exactly one $1$ in each row and each column.
2. $P^\top P=I$
3. $\det P=\pm1$
4. $Px$ changes the norm of $x$.

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 10
Let $A\in\mathbb{R}^{2\times2}$ with $\det A=3$. Which are true?

1. $\det(2A)=6$
2. $\det(2A)=12$
3. $\det A^{-1}=\tfrac13$
4. $\det A^\top=3$

:::solution
**(b), (c), (d).** For an $n\times n$ matrix, $\det(cA)=c^n\det A$, so here $\det(2A)=4\cdot3$.
:::
:::

:::question MCQ 11
Suppose $Ax=\mathbf 0$ for some non-zero $x$. Which are true?

1. $A=0$
2. The columns of $A$ are dependent.
3. $\mathcal N(A)\neq\{\mathbf 0\}$
4. If $A$ is square, then $\det A=0$.

:::solution
**(b), (c), (d).**
:::
:::

:::question MCQ 12
Let $A\in\mathbb{R}^{4\times3}$ have rank $3$. Which are true?

1. The columns of $A$ are independent.
2. $\mathcal N(A)=\{\mathbf 0\}$
3. The row space has dimension $3$.
4. $Ax=b$ has a solution for every $b$.

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 13
Which components are essential to supervised learning?

1. a labelled dataset
2. a hypothesis class
3. a loss function
4. an unlabelled test set only

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 14
A classifier that predicts "will repay the loan" has recall $83\%$. Which are true?

1. $83\%$ of all customers repay.
2. $17\%$ of the customers who would repay are rejected.
3. $83\%$ of the customers who would repay are approved.
4. The precision is also $83\%$.

:::solution
**(b), (c).**
:::
:::

:::question MCQ 15
Which statements about ROC curves and AUC are true?

1. The ROC curve plots TPR against FPR.
2. The ideal point is $(0,1)$.
3. The AUC is the probability that a random positive outscores a random negative.
4. A classifier with AUC below $0.5$ is worthless and cannot be fixed.

:::solution
**(a), (b), (c).** Flipping the predictions turns an AUC of $a$ into $1-a$.
:::
:::

:::question MCQ 16
Which statements about $F$-scores are true?

1. $F_1=2TP/(2TP+FP+FN)$
2. For two positive numbers, $\text{HM}\le\text{GM}\le\text{AM}$.
3. $F_2$ weights recall more heavily than precision.
4. $F_1$ uses TN.

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 17
Which statements about the normal equations $X^\top Xw=X^\top y$ are true?

1. They say that the residual is orthogonal to $\mathcal C(X)$.
2. They follow from setting $\nabla\tfrac12\|y-Xw\|^2=\mathbf 0$.
3. They always have a unique solution.
4. For a bias-only model they reduce to $w_0=\bar y$.

:::solution
**(a), (b), (d).** The solution is unique only when the columns are independent.
:::
:::

:::question MCQ 18
Which of the following reduce the **variance** of a regression model?

1. adding more training data
2. lowering the model complexity
3. increasing the ridge parameter $\lambda$
4. increasing the polynomial degree

:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 19
$A$ is invertible with eigenvalues $1$ and $3$. The eigenvalues of $2A^2-3A^{-1}+I$ are:

1. $0$ and $18$
2. $0$ and $17$
3. $2$ and $18$
4. $1$ and $3$

:::solution
**(a).** With $f(\lambda)=2\lambda^2-3/\lambda+1$,
$$
f(1)=2-3+1=0,\qquad f(3)=18-1+1=18 .
$$
:::
:::

:::question MCQ 20
Which conditions guarantee that a symmetric matrix $A$ is positive semi-definite?

1. All its eigenvalues are non-negative.
2. $x^\top Ax\ge0$ for all $x$.
3. $A=B^\top B$ for some $B$.
4. $\det A>0$.

:::solution
**(a), (b), (c).** $\operatorname{diag}(-1,-1)$ has positive determinant but is not PSD.
:::
:::

## Part II — Problems (40 points)

:::question Problem 1 (4 points) — vector notation
A student's record $r\in\mathbb{R}^6$ holds four quiz scores (each out of $10$), a mid-exam score (out of $60$) and a final-exam score (out of $100$). The quizzes are worth $20\%$ in total, the mid $30\%$ and the final $50\%$.

1. Find the vector $w$ for which the course score on a $0$–$100$ scale is $s=w^\top r$. *(2 points)*
2. Given the indicator vector $z\in\{0,1\}^4$ of quizzes on which the student scored zero, express in vector notation the average quiz score and the statement "the student scored zero on at least one quiz". *(2 points)*

:::solution
1. The quizzes total $40$ points and are worth $20$, so each quiz point is worth $\tfrac{20}{40}=0.5$; the mid gives $\tfrac{30}{60}=0.5$ per point and the final $\tfrac{50}{100}=0.5$. Hence
$$
w=0.5\cdot\mathbf 1\in\mathbb{R}^6 ,
$$
   and as a check, a perfect record scores $0.5\,(40+60+100)=100$.
2. The average quiz score is
$$
\frac14\,(e_1+e_2+e_3+e_4)^\top r ,
$$
   and "at least one zero" is the statement $\mathbf 1^\top z\ge1$.
:::
:::

:::question Problem 2 (5 points) — Gram–Schmidt with a dependent vector
Run Gram–Schmidt on $a_1=(2,0,1)$, $a_2=(1,1,0)$ and $a_3=(4,2,1)$. Detect the dependence and give the dimension of the span.

:::solution
**Step 1.** $\|a_1\|=\sqrt5$, so $q_1=\tfrac{1}{\sqrt5}(2,0,1)$.

**Step 2.** $q_1^\top a_2=\tfrac{2}{\sqrt5}$, so
$$
\tilde q_2=a_2-\frac25\begin{bmatrix}2\\0\\1\end{bmatrix}=\begin{bmatrix}1-0.8\\1\\-0.4\end{bmatrix}=\begin{bmatrix}0.2\\1\\-0.4\end{bmatrix},\qquad \|\tilde q_2\|=\sqrt{1.2},\qquad q_2=\frac{1}{\sqrt{30}}\begin{bmatrix}1\\5\\-2\end{bmatrix}.
$$
**Step 3.** The components of $a_3$ along $q_1$ and $q_2$ are $q_1^\top a_3=\tfrac{9}{\sqrt5}$ and $q_2^\top a_3=\tfrac{12}{\sqrt{30}}$, so
$$
\tilde q_3=a_3-\frac95\begin{bmatrix}2\\0\\1\end{bmatrix}-\frac{12}{30}\begin{bmatrix}1\\5\\-2\end{bmatrix}
=\begin{bmatrix}4\\2\\1\end{bmatrix}-\begin{bmatrix}3.6\\0\\1.8\end{bmatrix}-\begin{bmatrix}0.4\\2\\-0.8\end{bmatrix}=\begin{bmatrix}0\\0\\0\end{bmatrix}.
$$
The remainder vanishes, so the set is **dependent** — indeed $a_3=a_1+2a_2$ — and the span has **dimension $2$**.
:::
:::

:::question Problem 3 (5 points) — matrix operations
Let $A=\begin{bmatrix}1&3&0\\-1&2&4\\2&0&5\end{bmatrix}$.

1. Write $A=S+K$. *(2 points)*
2. Compute $\operatorname{tr}A$ and $\|A\|_F$. *(1 point)*
3. Compute $Ax$ for $x=(1,-1,2)$ as a combination of the columns. *(2 points)*

:::solution
1. With $A^\top=\begin{bmatrix}1&-1&2\\3&2&0\\0&4&5\end{bmatrix}$,
$$
S=\frac12\big(A+A^\top\big)=\begin{bmatrix}1&1&1\\1&2&2\\1&2&5\end{bmatrix},\qquad
K=\frac12\big(A-A^\top\big)=\begin{bmatrix}0&2&-1\\-2&0&2\\1&-2&0\end{bmatrix}.
$$
2. $\operatorname{tr}A=1+2+5=8$, and
$$
\|A\|_F=\sqrt{1+9+0+1+4+16+4+0+25}=\sqrt{60}=2\sqrt{15} .
$$
3. 
$$
Ax=1\begin{bmatrix}1\\-1\\2\end{bmatrix}-1\begin{bmatrix}3\\2\\0\end{bmatrix}+2\begin{bmatrix}0\\4\\5\end{bmatrix}=\begin{bmatrix}1-3+0\\-1-2+8\\2-0+10\end{bmatrix}=\begin{bmatrix}-2\\5\\12\end{bmatrix}.
$$
:::
:::

:::question Problem 4 (6 points) — square and wide systems
1. Solve $\begin{bmatrix}2&1\\5&3\end{bmatrix}x=\begin{bmatrix}1\\2\end{bmatrix}$ using the inverse. *(2 points)*
2. Let $A=\begin{pmatrix}1&1&1\end{pmatrix}$ and $b=3$. Classify the system, find the right pseudo-inverse and the solution it gives, and compare its norm with that of the solution $(3,0,0)$. *(3 points)*
3. Why can the matrix in part 2 not have a left inverse? *(1 point)*

:::solution
1. The determinant is $6-5=1$, so
$$
x=\begin{bmatrix}3&-1\\-5&2\end{bmatrix}\begin{bmatrix}1\\2\end{bmatrix}=\begin{bmatrix}1\\-1\end{bmatrix},
\qquad\text{and indeed}\qquad \begin{bmatrix}2-1\\5-3\end{bmatrix}=\begin{bmatrix}1\\2\end{bmatrix}.
$$
2. The system is **under-determined** (wide, with rank $1$, which is full row rank), so it has infinitely many solutions. The right pseudo-inverse is
$$
A^\dagger=A^\top(AA^\top)^{-1}=\frac13\begin{bmatrix}1\\1\\1\end{bmatrix},\qquad x=A^\dagger b=\begin{bmatrix}1\\1\\1\end{bmatrix}.
$$
   Its norm is $\sqrt3\approx1.73$, smaller than $\|(3,0,0)\|=3$: the pseudo-inverse gives the **minimum-norm** solution.
3. Its three columns lie in $\mathbb{R}^1$, so they are dependent.
:::
:::

:::question Problem 5 (6 points) — an orthogonal design: OLS and ridge
The model has an intercept and two features, $x_1=(-1,1,-1,1)$ and $x_2=(-1,-1,1,1)$, with targets $y=(1,3,2,6)$.

1. Show that $X^\top X$ is diagonal, and find the OLS weights, fitted values and residuals. *(4 points)*
2. Find the ridge weights with $\lambda=4$, penalising only the slopes. *(2 points)*

:::solution
1. The columns $\mathbf 1$, $x_1$ and $x_2$ are mutually orthogonal and each has squared length $4$, so $X^\top X=4I$. With
$$
X^\top y=\begin{bmatrix}1+3+2+6\\-1+3-2+6\\-1-3+2+6\end{bmatrix}=\begin{bmatrix}12\\6\\4\end{bmatrix},
\qquad w=\frac14X^\top y=\begin{bmatrix}3\\1.5\\1\end{bmatrix}.
$$
   The fitted values are
$$
\hat y=3\cdot\mathbf 1+1.5\,x_1+1\,x_2=(0.5,\ 3.5,\ 2.5,\ 5.5),
$$
   and the residuals are $e=(0.5,\ -0.5,\ -0.5,\ 0.5)$, which sum to zero.
2. Because the columns are orthogonal, the slopes decouple: each is $w_j=\dfrac{x_j^\top y}{4+\lambda}$. With $\lambda=4$,
$$
w_1=\frac68=0.75,\qquad w_2=\frac48=0.5,
$$
   and the unpenalised intercept stays at $3$. Each slope is multiplied by the shrink factor $\tfrac{4}{4+4}=\tfrac12$.
:::
:::

:::question Problem 6 (4 points) — kNN variants
The regression training data are $(x,y)=(1,2)$, $(2,4)$, $(4,8)$ and $(7,6)$. The query is $x=3$ with $k=2$.

1. Give the prediction from the plain average of the neighbours. *(1 point)*
2. Give the inverse-distance-weighted prediction. *(2 points)*
3. What is the Hamming distance between the patients $(B+,\ \text{smoker},\ \text{Lahore})$ and $(O+,\ \text{smoker},\ \text{Karachi})$? *(1 point)*

:::solution
The distances from $x=3$ are $2$, $1$, $1$ and $4$, so the two nearest neighbours are $x=2$ (with $y=4$) and $x=4$ (with $y=8$).

1. The plain average is $\dfrac{4+8}{2}=6$.
2. Both neighbours lie at distance $1$, so they receive equal weights and the prediction is again $6$. (In general the prediction is $\sum_i(y_i/d_i)\big/\sum_i(1/d_i)$.)
3. The patients differ in blood group and city, so the Hamming distance is $2$.
:::
:::

:::question Problem 7 (6 points) — a repeated eigenvalue
Let $A=\begin{bmatrix}2&0&0\\0&3&1\\0&1&3\end{bmatrix}$.

1. Find the eigenvalues, and check them against the trace and the determinant. *(2 points)*
2. Find the eigenspaces and an orthonormal eigenbasis. *(3 points)*
3. What are the eigenvalues of $A^{-1}$? *(1 point)*

:::solution
1. The matrix is block diagonal: one eigenvalue is $2$, and the others are those of $\begin{bmatrix}3&1\\1&3\end{bmatrix}$, namely $4$ and $2$. So the eigenvalues are $2,\ 2,\ 4$. As checks, $\operatorname{tr}A=8=2+2+4$ and $\det A=2\,(9-1)=16=2\cdot2\cdot4$.
2. For $\lambda=4$, $(A-4I)v=\mathbf 0$ gives $v_1=0$ and $v_2=v_3$, so the eigenvector is $\tfrac{1}{\sqrt2}(0,1,1)$. For $\lambda=2$,
$$
A-2I=\begin{bmatrix}0&0&0\\0&1&1\\0&1&1\end{bmatrix},
$$
   which forces $v_2=-v_3$ and leaves $v_1$ free. The eigenspace of $\lambda=2$ is therefore two-dimensional:
$$
\operatorname{span}\left\{\begin{bmatrix}1\\0\\0\end{bmatrix},\ \frac{1}{\sqrt2}\begin{bmatrix}0\\1\\-1\end{bmatrix}\right\}.
$$
   Together with $\tfrac{1}{\sqrt2}(0,1,1)$ these three vectors form an orthonormal basis, as the spectral theorem guarantees.
3. $\tfrac12,\ \tfrac12$ and $\tfrac14$.
:::
:::

:::question Problem 8 (4 points) — SVD insurance
1. A $1000\times800$ image has rank $50$. How many numbers does its rank-$50$ SVD require, and what is the percentage saving? *(2 points)*
2. A matrix $B\in\mathbb{R}^{3\times2}$ has singular values $4$ and $1$. What are the eigenvalues of $B^\top B$, and what is the error $\|B-B_1\|_F$ of its best rank-one approximation? *(2 points)*

:::solution
1. Storing $U_{50}$, the singular values and $V_{50}^\top$ costs
$$
1000\cdot50+50+50\cdot800=90\,050
$$
   numbers instead of $800\,000$, a saving of $1-\dfrac{90\,050}{800\,000}\approx88.7\%$.
2. The eigenvalues of $B^\top B$ are the squared singular values, $16$ and $1$. By the Eckart–Young theorem,
$$
\|B-B_1\|_F=\sqrt{\sigma_2^2}=1 .
$$
:::
:::

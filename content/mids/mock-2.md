# Mock Mid 2

**Part I: 45 minutes, 20 MCQs × 4 = 80 points. Part II: 100 minutes, 8 problems, 40 points.** Same rules as the real paper: select **ALL (up to three)** correct options, −1 per wrong tick, no question below zero.

## Part I — Multiple choice

:::question MCQ 1
Linear independence:
(a) any set containing $\mathbf 0$ is dependent (b) $\{v_1,v_2\}$ is dependent iff one is a multiple of the other (c) four vectors in $\mathbb{R}^3$ are always dependent (d) every orthogonal set is independent
:::solution
**(a), (b), (c).** (d) fails if the set contains $\mathbf 0$.
:::
:::

:::question MCQ 2
$S=\operatorname{span}\{(1,0,1),(0,1,1)\}$:
(a) $S$ is a plane through the origin (b) $(1,1,2)\in S$ (c) $(1,1,1)\in S$ (d) $\dim S=3$
:::solution
**(a), (b).** $(1,1,1)$ would need coefficients 1, 1 giving third entry 2.
:::
:::

:::question MCQ 3
$\|x\|=3$, $\|y\|=4$, $x^\top y=0$:
(a) $\|x+y\|=5$ (b) $\|x-y\|=5$ (c) $\|2x+y\|=\sqrt{52}$ (d) the angle between $x$ and $y$ is $45^\circ$
:::solution
**(a), (b), (c).** Orthogonal ⇒ Pythagoras; $\|2x+y\|^2=36+16$.
:::
:::

:::question MCQ 4
For a unit vector $u$, $p=(u^\top x)u$:
(a) $x-p\perp u$ (b) $\|p\|=|u^\top x|$ (c) $x\perp u\Rightarrow p=0$ (d) $\|p\|$ can exceed $\|x\|$
:::solution
**(a), (b), (c).** $\|p\|=|u^\top x|\le\|x\|$ by Cauchy–Schwarz.
:::
:::

:::question MCQ 5
$x=(2,2,2,2)$:
(a) $\operatorname{std}(x)=0$ (b) $\operatorname{rms}(x)=2$ (c) $\operatorname{avg}(x)=2$ (d) the standardised vector of $x$ is defined
:::solution
**(a), (b), (c).** Standardising divides by std $=0$.
:::
:::

:::question MCQ 6
Transposes:
(a) $(AB)^\top=B^\top A^\top$ (b) $(AB)^\top=A^\top B^\top$ in general (c) $(ABC)^\top=C^\top B^\top A^\top$ (d) for symmetric $A,B$, $(AB)^\top=BA$
:::solution
**(a), (c), (d).**
:::
:::

:::question MCQ 7
$u\in\mathbb{R}^4$, $v\in\mathbb{R}^3$ non-zero, $M=uv^\top$:
(a) $M$ is $4\times3$ (b) $\operatorname{rank}M=1$ (c) every column of $M$ is a multiple of $u$ (d) $M$ is invertible
:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 8
Right inverses:
(a) a wide matrix with independent rows has one (b) a tall matrix can have one (c) if $AX=I$ then $x=Xb$ solves $Ax=b$ (d) if $AX=I$ then $X^\top$ is a left inverse of $A^\top$
:::solution
**(a), (c), (d).**
:::
:::

:::question MCQ 9
For square $A$, which are equivalent to "$A$ is invertible"?
(a) the columns are independent (b) $\det A\neq0$ (c) $\operatorname{rank}A=n$ (d) $A$ is symmetric
:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 10
$D=\operatorname{diag}(2,0,5)$:
(a) $D$ is not invertible (b) $\det D=0$ (c) its eigenvalues are 2, 0, 5 (d) $\operatorname{rank}D=3$
:::solution
**(a), (b), (c).**
:::
:::

:::question MCQ 11
$A\in\mathbb{R}^{5\times8}$ with rank 5:
(a) $Ax=b$ is solvable for every $b\in\mathbb{R}^5$ (b) $\dim\mathcal N(A)=3$ (c) the columns are independent (d) $A$ has a right inverse
:::solution
**(a), (b), (d).**
:::
:::

:::question MCQ 12
Rank:
(a) $\operatorname{rank}A^\top=\operatorname{rank}A$ (b) $\operatorname{rank}(AB)\le\operatorname{rank}A$ (c) $\operatorname{rank}(A+B)=\operatorname{rank}A+\operatorname{rank}B$ always (d) $\operatorname{rank}(uv^\top)=1$ for non-zero $u,v$
:::solution
**(a), (b), (d).** $A+(-A)=0$ breaks (c).
:::
:::

:::question MCQ 13
Loss functions:
(a) 0/1 loss is non-differentiable (b) MAE is more robust to outliers than MSE (c) MSE and RMSE have the same minimiser (d) the best constant predictor under MSE is the median
:::solution
**(a), (b), (c).** MSE → mean; MAE → median.
:::
:::

:::question MCQ 14
Data splits:
(a) hyper-parameters are tuned on the validation set (b) the test set is used once, for the final model (c) time-series data should be split at random (d) training error is a good estimate of generalisation error
:::solution
**(a), (b).**
:::
:::

:::question MCQ 15
kNN with 3 classes and $k=3$:
(a) ties are possible (b) odd $k$ prevents ties (c) ties can be broken with the $(k-1)$-NN or 1-NN rule (d) Hamming distance suits categorical features
:::solution
**(a), (c), (d).**
:::
:::

:::question MCQ 16
Curse of dimensionality:
(a) the fraction of data inside a fixed-size neighbourhood shrinks exponentially with the number of features (b) "nearest" neighbours become far away (c) kNN improves when irrelevant features are added (d) it motivates dimensionality reduction
:::solution
**(a), (b), (d).**
:::
:::

:::question MCQ 17
Polynomial regression of degree $M$ on $n$ points with distinct $x$:
(a) it is linear in the parameters (b) $M\ge n-1$ gives zero training error (c) test error falls monotonically with $M$ (d) coefficients tend to explode when it overfits
:::solution
**(a), (b), (d).**
:::
:::

:::question MCQ 18
Lasso:
(a) uses an $L^1$ penalty (b) has a closed form like ridge (c) tends to give sparse solutions (d) is a special case of the elastic net
:::solution
**(a), (c), (d).**
:::
:::

:::question MCQ 19
$A=Q\Lambda Q^{-1}$:
(a) the columns of $Q$ are eigenvectors (b) $A^3=Q\Lambda^3Q^{-1}$ (c) it requires $A$ symmetric (d) $\det A=\det\Lambda$
:::solution
**(a), (b), (d).** Symmetry is needed only for $Q^{-1}=Q^\top$.
:::
:::

:::question MCQ 20
$A$ has eigenvalue 0:
(a) $A$ is singular (b) $Aq=0$ for some $q\neq0$ (c) its columns are independent (d) $A+I$ has eigenvalue 1
:::solution
**(a), (b), (d).**
:::
:::

## Part II — Problems (40 points)

:::question Problem 1 (4 pts) — orthogonal matrices
(a) Prove that an orthogonal matrix preserves inner products and hence angles. (2)
(b) Show that $Q=\tfrac13\begin{bmatrix}1&2&2\\2&1&-2\\2&-2&1\end{bmatrix}$ is orthogonal and write $Q^{-1}$. (2)
:::solution
(a) $(Qx)^\top(Qy)=x^\top Q^\top Qy=x^\top y$; with $\|Qx\|=\|x\|$, $\cos\angle(Qx,Qy)=\frac{x^\top y}{\|x\|\|y\|}$ — unchanged.
(b) Column norms: $\tfrac19(1+4+4)=1$ each; dot products: $\tfrac19(2+2-4)=0$, $\tfrac19(2-4+2)=0$, $\tfrac19(4-2-2)=0$ ⇒ $Q^\top Q=I$. $Q^{-1}=Q^\top=Q$ (it is also symmetric).
:::
:::

:::question Problem 2 (5 pts) — projection
$u_1=(1,1,0)$, $u_2=(1,-1,1)$, $v=(2,3,4)$.
(a) Show $u_1\perp u_2$ and project $v$ onto $\operatorname{span}\{u_1,u_2\}$. (3)
(b) Verify the residual is orthogonal to the span. (1)
(c) If $a_1,a_2$ are independent, does Gram–Schmidt on $(a_2,a_1)$ give $(q_2,q_1)$? (1)
:::solution
(a) $u_1^\top u_2=1-1+0=0$. $\hat v=\frac{u_1^\top v}{u_1^\top u_1}u_1+\frac{u_2^\top v}{u_2^\top u_2}u_2=\tfrac52(1,1,0)+\tfrac33(1,-1,1)=(3.5,1.5,1)$.
(b) $r=v-\hat v=(-1.5,1.5,3)$: $r^\top u_1=0$, $r^\top u_2=-1.5-1.5+3=0$ ✓.
(c) No in general — GS depends on the order ($a_1=(1,0),a_2=(1,1)$ gives $(1,0),(0,1)$ vs $\tfrac1{\sqrt2}(1,1),\tfrac1{\sqrt2}(1,-1)$).
:::
:::

:::question Problem 3 (5 pts) — left pseudo-inverse
$A=\begin{bmatrix}1&1\\1&2\\1&3\end{bmatrix}$.
(a) Can $A$ have a left inverse? A right inverse? Why? (1)
(b) Compute $A^\dagger=(A^\top A)^{-1}A^\top$ and verify $A^\dagger A=I$. (2)
(c) Use it on $b_1=(2,3,4)$ and $b_2=(1,2,4)$; which system is solvable? (2)
:::solution
(a) Tall with independent columns ⇒ left-invertible; 3 rows in $\mathbb{R}^2$ are dependent ⇒ no right inverse.
(b) $A^\top A=\begin{bmatrix}3&6\\6&14\end{bmatrix}$, $\det 6$, $(A^\top A)^{-1}=\tfrac16\begin{bmatrix}14&-6\\-6&3\end{bmatrix}$, $A^\dagger=\tfrac16\begin{bmatrix}8&2&-4\\-3&0&3\end{bmatrix}$. $A^\dagger A=\tfrac16\begin{bmatrix}6&0\\0&6\end{bmatrix}=I$ ✓.
(c) $A^\dagger b_1=\tfrac16(6,6)=(1,1)$ and $A(1,1)^\top=(2,3,4)=b_1$ ⇒ solvable, unique. $A^\dagger b_2=(-\tfrac23,\tfrac32)$ but $A x=(0.83,2.33,3.83)\neq b_2$ ⇒ no exact solution; this $x$ is the least-squares fit.
:::
:::

:::question Problem 4 (6 pts) — spam filter metrics
2000 emails, 10% spam (spam = positive). Recall 0.8, specificity 0.95.
(a) Confusion matrix (rows predicted, columns actual). (2)
(b) Accuracy, precision, F1, MCC. (3)
(c) Accuracy of "never spam"? What does this show? (1)
:::solution
(a) $P=200$, $N=1800$: TP 160, FN 40, TN 1710, FP 90.

| | spam | not spam |
|---|---|---|
| pred spam | 160 | 90 |
| pred not | 40 | 1710 |

(b) Accuracy $1870/2000=0.935$; precision $160/250=0.64$; $F_1=320/450=0.711$; MCC $=\frac{160\cdot1710-90\cdot40}{\sqrt{250\cdot200\cdot1800\cdot1750}}=\frac{270\,000}{396\,863}\approx0.68$.
(c) $1800/2000=0.90$ without catching any spam — accuracy is misleading under imbalance; use precision/recall/F1/MCC (and for spam, prioritise specificity/precision).
:::
:::

:::question Problem 5 (6 pts) — line vs quadratic
$x=(-2,-1,0,1,2)$, $y=(1,0,1,2,6)$.
(a) Fit $\hat y=w_0+w_1x$. Why is $X^\top X$ diagonal? (2)
(b) Fit $\hat y=w_0+w_1x+w_2x^2$. (3)
(c) Which has lower training error, and does that mean it generalises better? (1)
:::solution
(a) $\sum x=0$ ⇒ columns orthogonal ⇒ $X^\top X=\operatorname{diag}(5,10)$; $X^\top y=(10,12)$ ⇒ $w=(2,1.2)$.
(b) $\sum x^2=10$, $\sum x^3=0$, $\sum x^4=34$, $\sum x^2y=4+0+0+2+24=30$:
$$
\begin{bmatrix}5&0&10\\0&10&0\\10&0&34\end{bmatrix}\begin{bmatrix}w_0\\w_1\\w_2\end{bmatrix}=\begin{bmatrix}10\\12\\30\end{bmatrix}
\Rightarrow w_1=1.2,\ w_0=2-2w_2,\ 20+14w_2=30\Rightarrow w_2=\tfrac57,\ w_0=\tfrac47 .
$$
(c) The quadratic (nested model ⇒ training error ≤ line's). Not necessarily better on new data — compare on validation data.
:::
:::

:::question Problem 6 (4 pts) — rank–nullity reasoning
$A\in\mathbb{R}^{6\times4}$ with $\mathcal N(A)=\operatorname{span}\{(1,1,0,0)\}$.
(a) $\operatorname{rank}A$, $\dim\mathcal C(A)$? (1) (b) What relation holds between the columns? (1) (c) Is $Ax=b$ solvable for every $b\in\mathbb{R}^6$? If solvable, how many solutions? (2)
:::solution
(a) Rank $4-1=3$; $\dim\mathcal C(A)=3$.
(b) $A(1,1,0,0)^\top=a_1+a_2=0$ ⇒ $a_2=-a_1$.
(c) No — $\mathcal C(A)$ is 3-dimensional in $\mathbb{R}^6$. When solvable: infinitely many, $x_p+t(1,1,0,0)$.
:::
:::

:::question Problem 7 (6 pts) — non-symmetric EVD
$A=\begin{bmatrix}4&1\\2&3\end{bmatrix}$.
(a) Eigenvalues and eigenvectors. (2)
(b) Write $A=Q\Lambda Q^{-1}$ and derive a formula for $A^k$. (3)
(c) Are the eigenvectors orthogonal? Why/why not? (1)
:::solution
(a) $\lambda^2-7\lambda+10=(\lambda-5)(\lambda-2)$. $\lambda=5$: $\begin{bmatrix}-1&1\\2&-2\end{bmatrix}v=0$ ⇒ $(1,1)$. $\lambda=2$: $\begin{bmatrix}2&1\\2&1\end{bmatrix}v=0$ ⇒ $(1,-2)$.
(b) $Q=\begin{bmatrix}1&1\\1&-2\end{bmatrix}$, $Q^{-1}=\tfrac13\begin{bmatrix}2&1\\1&-1\end{bmatrix}$,
$$
A^k=Q\begin{bmatrix}5^k&0\\0&2^k\end{bmatrix}Q^{-1}=\frac13\begin{bmatrix}2\cdot5^k+2^k&5^k-2^k\\2\cdot5^k-2\cdot2^k&5^k+2\cdot2^k\end{bmatrix}.
$$
Check $k=1$: $\tfrac13\begin{bmatrix}12&3\\6&9\end{bmatrix}=A$ ✓.
(c) No: $(1,1)\cdot(1,-2)=-1$. $A$ isn't symmetric, so the spectral theorem does not apply and $Q^{-1}\neq Q^\top$.
:::
:::

:::question Problem 8 (4 pts) — ridge in two dimensions
$X=\begin{bmatrix}1&0\\0&1\\1&1\end{bmatrix}$, $y=(1,1,3)$, no intercept.
(a) OLS weights. (2) (b) Ridge weights with $\lambda=1$; compare norms. (2)
:::solution
(a) $X^\top X=\begin{bmatrix}2&1\\1&2\end{bmatrix}$, $X^\top y=(4,4)$ ⇒ $w=\tfrac13\begin{bmatrix}2&-1\\-1&2\end{bmatrix}\begin{bmatrix}4\\4\end{bmatrix}=(\tfrac43,\tfrac43)$.
(b) $X^\top X+I=\begin{bmatrix}3&1\\1&3\end{bmatrix}$, inverse $\tfrac18\begin{bmatrix}3&-1\\-1&3\end{bmatrix}$ ⇒ $w=(1,1)$. $\|w\|$: $1.886\to1.414$ — shrunk toward 0.
:::
:::

# L08 · Practice quizzes — Curse of dimensionality & PCA

Three mock quizzes, **20 minutes and 10 marks** each, in the style of the 2026 quizzes and PSet 7 (P5–P8, P10): a PCA by hand on a few points, the variance kept, sizes and storage, and short "explain" questions.

<div class="pdf-links">
<a href="l08-notes.html">L08 notes</a>
<a href="pdfs/psets/PSet-07-with-Solutions.pdf">PSet 7 with solutions (P5–P8, P10)</a>
<a href="pdfs/revision/R09-PCA.pdf">Revision notes: PCA</a>
</div>

## Mock Quiz 8A

:::question Question 1 (6 marks)
Four observations with two features are $x_1=(1,2)$, $x_2=(3,4)$, $x_3=(5,6)$, $x_4=(3,0)$. Divide by $n$ for the covariance.

1. Find the sample mean and the centred observations. *(1 mark)*
2. Compute the covariance matrix $C$. *(2 marks)*
3. Find the eigenvalues of $C$ and the first principal component. *(2 marks)*
4. What fraction of the variance does the first component keep, and what is the (centred) score of $x_3$? *(1 mark)*

:::solution
1. $\bar x=\tfrac14(12,12)=(3,3)$; centred: $s_1=(-2,-1)$, $s_2=(0,1)$, $s_3=(2,3)$, $s_4=(0,-3)$.
2.
$$
C=\frac14\sum_is_is_i^\top=\frac14\begin{bmatrix}4+0+4+0&2+0+6+0\\2+0+6+0&1+1+9+9\end{bmatrix}=\frac14\begin{bmatrix}8&8\\8&20\end{bmatrix}=\begin{bmatrix}2&2\\2&5\end{bmatrix}.
$$
3. $\operatorname{tr}C=7$, $\det C=10-4=6$, so $\lambda^2-7\lambda+6=0$ gives $\lambda_1=6$, $\lambda_2=1$. For $\lambda=6$: $\begin{bmatrix}-4&2\\2&-1\end{bmatrix}v=\mathbf 0\Rightarrow v_2=2v_1$, so $v_1=\tfrac1{\sqrt5}(1,2)$.
4. $T_1=6/7\approx85.7\%$. Score $z_3=v_1^\top s_3=\tfrac1{\sqrt5}(2+6)=\tfrac{8}{\sqrt5}\approx3.58$.

*(Check: the four scores $-4,2,8,-6$ over $\sqrt5$ have mean $0$ and variance $\tfrac14\cdot\tfrac{16+4+64+36}{5}=6=\lambda_1$.)*
:::
:::

:::question Question 2 (2 marks)
A point is drawn uniformly from the unit ball in $\mathbb R^d$. Find the probability that it lies within $\epsilon$ of the surface for (a) $d=20$, $\epsilon=0.1$; (b) $d=100$, $\epsilon=0.02$. What does this say about nearest-neighbour methods?

:::solution
The shell fraction is $1-(1-\epsilon)^d$: (a) $1-0.9^{20}\approx1-0.122=0.878$; (b) $1-0.98^{100}\approx1-0.133=0.867$. Most of the volume sits in a thin shell, so in high dimensions almost all points are at nearly the same distance from any query point, and "nearest" stops meaning much.
:::
:::

:::question Question 3 (2 marks)
True or false, with a reason.

1. The PCA scores along different principal components are uncorrelated.
2. Dividing the covariance by $n-1$ instead of $n$ changes the principal components.

:::solution
1. **True.** $\operatorname{Cov}(z)=W^\top CW=\operatorname{diag}(\lambda_1,\dots,\lambda_k)$ because the eigenvectors of the symmetric $C$ are orthogonal.
2. **False.** It multiplies $C$, and so every eigenvalue, by $n/(n-1)$; the eigenvectors (and the fractions $T_k$) are unchanged.
:::
:::

## Mock Quiz 8B

:::question Question 1 (5 marks)
Centred two-feature data has covariance $C=\begin{bmatrix}3&1\\1&3\end{bmatrix}$.

1. Find the principal components and their variances. *(2 marks)*
2. What fraction of the variance does $k=1$ keep, and what is the mean squared reconstruction error? *(2 marks)*
3. What is the variance of the data along $w=(1,0)$? Why must it be at most $\lambda_1$? *(1 mark)*

:::solution
1. Equal diagonals and equal off-diagonals: $\lambda=3\pm1$, i.e. $\lambda_1=4$ along $v_1=\tfrac1{\sqrt2}(1,1)$ and $\lambda_2=2$ along $v_2=\tfrac1{\sqrt2}(1,-1)$.
2. $T_1=4/6\approx66.7\%$; the mean squared error is the discarded eigenvalue, $\lambda_2=2$.
3. $w^\top Cw=C_{11}=3$. For a unit $w=\sum c_iv_i$, $w^\top Cw=\sum\lambda_ic_i^2$ is a weighted average of the eigenvalues, so it cannot exceed $\lambda_1=4$.
:::
:::

:::question Question 2 (3 marks)
$5000$ grey-scale images of $32\times32$ pixels are compressed with PCA keeping $k=40$ components.

1. What are $d$ and the size of $W$? *(1 mark)*
2. How many numbers must be stored (scores, $W$ and the mean), and what fraction of the raw data is this? *(2 marks)*

:::solution
1. $d=32\cdot32=1024$, so $W\in\mathbb R^{1024\times40}$.
2. Scores $5000\cdot40=200\,000$, plus $W$: $1024\cdot40=40\,960$, plus $\bar x$: $1024$ — total $241\,984$, against $5000\cdot1024=5\,120\,000$ raw: about $4.7\%$.
:::
:::

:::question Question 3 (2 marks)
The centred $2\times4$ data matrix $S$ (samples as columns) has singular values $6$ and $2$. What are the eigenvalues of $C=\tfrac14SS^\top$, and what fraction of the variance does the first principal component keep? Where do you find that component in the SVD?

:::solution
$\lambda_j=\sigma_j^2/n$: $36/4=9$ and $4/4=1$, so $T_1=9/10=90\%$. The first principal component is $u_1$, the first **left** singular vector of $S$ (the first right singular vector if the samples are stored as rows).
:::
:::

## Mock Quiz 8C

:::question Question 1 (5 marks)
Five readings are $(0,1)$, $(2,3)$, $(4,5)$, $(6,7)$, $(3,4)$.

1. Compute the mean and the covariance matrix. *(2 marks)*
2. Find its eigenvalues and the first principal component. *(2 marks)*
3. How much is lost by keeping only one component? Explain from the data. *(1 mark)*

:::solution
1. $\bar x=\tfrac15(15,20)=(3,4)$; centred: $(-3,-3),(-1,-1),(1,1),(3,3),(0,0)$. Every centred point has equal coordinates, so all entries of $C$ are equal: $\tfrac15(9+1+1+9+0)=4$, giving $C=\begin{bmatrix}4&4\\4&4\end{bmatrix}$.
2. $\operatorname{tr}C=8$, $\det C=0$, so $\lambda=8,0$; $v_1=\tfrac1{\sqrt2}(1,1)$.
3. Nothing: $\lambda_2=0$, so $T_1=1$ and every point is rebuilt exactly. The readings lie on the line $x_2=x_1+1$ — they were one-dimensional all along.
:::
:::

:::question Question 2 (3 marks)
Two features are measured in very different units (income in dollars, age in years).

1. What goes wrong if PCA is applied to the raw features? *(1 mark)*
2. What should be done instead, and what matrix is then decomposed? *(1 mark)*
3. After this step the two features have correlation $\rho=0.6$. Find the eigenvalues and the fraction kept by one component. *(1 mark)*

:::solution
1. Variance depends on units: income has a far larger numerical variance, so PC1 is almost just the income axis — chosen by the units, not by the structure.
2. **Standardise** each feature (subtract its training-set mean, divide by its standard deviation); PCA then decomposes the **correlation matrix** $R=\begin{bmatrix}1&\rho\\\rho&1\end{bmatrix}$.
3. $\lambda=1\pm\rho=1.6,\ 0.4$, with eigenvectors $\tfrac1{\sqrt2}(1,\pm1)$; $T_1=1.6/2=80\%$.
:::
:::

:::question Question 3 (2 marks)
Give a small example in which projecting onto the first principal component destroys the information needed to classify the data, and name a method that would do better.

:::solution
Class A at $x_2=+1$ and class B at $x_2=-1$, each with $x_1\in\{-4,-2,2,4\}$. Then $C=\operatorname{diag}(10,1)$, PC1 is the $x_1$ axis, and the projections of the two classes coincide; the discarded PC2 separates them perfectly *(1 mark)*. PCA ignores labels; **LDA** looks for the directions that separate the classes *(1 mark)*.
:::
:::

:::remember
The PCA quiz recipe: mean → centred points → $C=\tfrac1n\sum s_is_i^\top$ → $\lambda^2-\operatorname{tr}(C)\lambda+\det C=0$ → unit eigenvector of $\lambda_1$ → scores $v_1^\top s_i$ → $T_k=\sum_{i\le k}\lambda_i/\operatorname{tr}C$, error $=\sum_{i>k}\lambda_i$. Standardise when units differ; $\lambda_j=\sigma_j^2/n$ from the SVD.
:::

# L08 · Practice quizzes — Curse of dimensionality & PCA

Three mock quizzes, **20 minutes and 10 marks** each, in the style of the 2026 quizzes. Every number below has been checked by hand.

<div class="pdf-links">
<a href="l08-notes.html">L08 notes</a>
<a href="pdfs/psets/PSet-07.pdf">PSet 7 with solutions (P5–P8)</a>
<a href="quiz6-prep.html">Quiz 6 prep page</a>
</div>

## Mock Quiz 8A

:::question Question 1 (3 marks)
1. With 5 bins per feature, how many cells does a 6-feature space have? *(1 mark)*
2. Points are uniform in the unit ball of $\mathbb{R}^{20}$. What fraction lies within $\epsilon=0.1$ of the surface? *(1 mark)*
3. Why does this hurt the $k$-nearest-neighbour classifier? *(1 mark)*

:::solution
:::steps
1 · Bins to the power of the number of features
$$
5^6=15{,}625\ \text{cells}
$$
2 · Shell fraction $1-(1-\epsilon)^d$
$$
1-0.9^{20}=1-0.1216\approx0.878
$$
:::
3 · Almost every point sits near the surface at nearly the **same distance** from a test point, and most cells are empty — so the "nearest" neighbours are not actually close.
:::
:::

:::question Question 2 (5 marks)
Four observations: $x_1=(2,0)$, $x_2=(0,2)$, $x_3=(4,4)$, $x_4=(2,2)$.

1. Find the mean and the centred observations. *(1 mark)*
2. Compute the covariance matrix $C$ (divide by $n$). *(1 mark)*
3. Find its eigenvalues and the first principal component. *(2 marks)*
4. What fraction of the variance does one component keep, and what is the average squared reconstruction error with $k=1$? *(1 mark)*

:::solution
:::steps
1 · Mean, then subtract it from every point
$$
\bar x=\begin{bmatrix}2\\2\end{bmatrix}\qquad s_1=\begin{bmatrix}0\\-2\end{bmatrix},\ s_2=\begin{bmatrix}-2\\0\end{bmatrix},\ s_3=\begin{bmatrix}2\\2\end{bmatrix},\ s_4=\begin{bmatrix}0\\0\end{bmatrix}
$$
2 · Average of $s_is_i^\top$ (squares $8,\ 8$; cross terms $4$)
$$
C=\frac14\begin{bmatrix}8&4\\4&8\end{bmatrix}=\begin{bmatrix}2&1\\1&2\end{bmatrix}
$$
3 · Eigenvalues $a\pm b$, and the top eigenvector
$$
\lambda_1=3,\quad\lambda_2=1\qquad\qquad v_1=\frac{1}{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}
$$
4 · Variance kept, and the error = the dropped eigenvalue
$$
T_1=\frac{3}{3+1}=75\%\qquad\qquad \text{error}=\lambda_2=1
$$
:::
Check: the residuals are $(1,-1)$, $(-1,1)$, $0$, $0$, with squared lengths $2,2,0,0$ — mean $1$ ✓.
:::
:::

:::question Question 3 (2 marks)
We want the best 3-dimensional approximation of 50-dimensional data with $z=W^\top(x-\bar x)$. Give the sizes of $W$, $W^\top$ and $z$, and say which eigenvectors form the columns of $W$.

:::solution
:::steps
Sizes
$$
W:50\times3\qquad W^\top:3\times50\qquad z\in\mathbb{R}^3
$$
:::
The columns of $W$ are the eigenvectors of the $50\times50$ covariance matrix with the **three largest eigenvalues**.
:::
:::

## Mock Quiz 8B

:::question Question 1 (3 marks)
True or False, with a one-line reason:

1. PCA needs the class labels of the data.
2. The features produced by PCA are uncorrelated.
3. Dividing the covariance matrix by $n-1$ instead of $n$ changes the principal components.

:::solution
1. **False** — PCA uses only the spread of the data; that is exactly its limitation for classification (use LDA).
2. **True** — $\operatorname{Cov}(z)=W^\top CW=\operatorname{diag}(\lambda_1,\dots,\lambda_k)$ because the eigenvectors are orthogonal.
3. **False** — every eigenvalue is scaled by the same factor; the eigenvectors and $T_k$ do not change.
:::
:::

:::question Question 2 (4 marks)
The covariance matrix of 4-feature data has eigenvalues $6,\ 3,\ 0.6,\ 0.4$.

1. Compute $T_1$ and $T_2$. *(1 mark)*
2. What is the smallest $k$ keeping at least 90% of the variance? *(1 mark)*
3. What is the average squared reconstruction error for that $k$? *(1 mark)*
4. How long is the semi-axis of the data ellipse along $v_1$? *(1 mark)*

:::solution
:::steps
1 · Total variance is $6+3+0.6+0.4=10$
$$
T_1=\frac{6}{10}=0.6\qquad\qquad T_2=\frac{6+3}{10}=0.9
$$
2 · Smallest $k$ with $T_k\ge0.9$
$$
k=2
$$
3 · Error = the dropped eigenvalues
$$
0.6+0.4=1.0
$$
4 · Semi-axis along $v_1$
$$
\sqrt{\lambda_1}=\sqrt6\approx2.45
$$
:::
:::
:::

:::question Question 3 (3 marks)
Two features, height in metres and weight in grams, have covariance matrix $C=\begin{bmatrix}0.01&0.5\\0.5&2500\end{bmatrix}$.

1. Without computing, what will the first principal component be close to, and why is that a problem? *(1 mark)*
2. Standardise: compute the correlation $\rho$, write the covariance of the standardised data, and find its first principal component and $T_1$. *(2 marks)*

:::solution
1 · Almost exactly the **weight axis** $(0,1)$ — only because grams are big numbers. The units, not the data, decide the answer.

:::steps
2 · Correlation
$$
\rho=\frac{0.5}{\sqrt{0.01\cdot2500}}=\frac{0.5}{5}=0.1
$$
Covariance of the standardised data, and its eigenvalues $1\pm\rho$
$$
R=\begin{bmatrix}1&0.1\\0.1&1\end{bmatrix}\qquad \lambda=1.1,\ 0.9
$$
First component and the variance it keeps
$$
v_1=\frac{1}{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix}\qquad\qquad T_1=\frac{1.1}{2}=55\%
$$
:::
:::
:::

## Mock Quiz 8C

:::question Question 1 (4 marks)
A centred data matrix $S\in\mathbb{R}^{2\times5}$ (samples as **columns**) has singular values $5$ and $1$.

1. What are the eigenvalues of the covariance matrix $C=\tfrac15SS^\top$? *(2 marks)*
2. What fraction of the variance does the first component keep? *(1 mark)*
3. Are the principal components the left or the right singular vectors of $S$? What if the samples were stored as **rows** instead? *(1 mark)*

:::solution
:::steps
1 · Substitute $S=U\Sigma V^\top$
$$
C=\frac1nSS^\top=U\Big(\frac{\Sigma\Sigma^\top}{n}\Big)U^\top\qquad\Longrightarrow\qquad \lambda_j=\frac{\sigma_j^2}{n}
$$
So
$$
\lambda_1=\frac{25}{5}=5\qquad\qquad \lambda_2=\frac15=0.2
$$
2 · Variance kept
$$
T_1=\frac{5}{5.2}\approx96.2\%
$$
:::
3 · Samples as columns: the **left** singular vectors of $S$. Samples as rows: the **right** singular vectors.
:::
:::

:::question Question 2 (3 marks)
Class A has points $(\pm3,\ 1)$ and $(\pm1,\ 1)$; class B has $(\pm3,\ -1)$ and $(\pm1,\ -1)$.

1. Compute the covariance matrix and the first principal component. *(2 marks)*
2. What happens to the two classes if we keep only PC1? What method should we use instead? *(1 mark)*

:::solution
:::steps
1 · The mean is $(0,0)$; average the squares and the cross products
$$
\operatorname{var}(x_1)=\frac{2(9+9+1+1)}{8}=5\qquad \operatorname{var}(x_2)=\frac{8}{8}=1\qquad \operatorname{cov}=0
$$
So the covariance is diagonal
$$
C=\begin{bmatrix}5&0\\0&1\end{bmatrix}\qquad v_1=\begin{bmatrix}1\\0\end{bmatrix}\qquad T_1=\frac56\approx83\%
$$
:::
2 · Projecting onto the $x_1$ axis puts both classes **on top of each other**; the separating direction is the dropped one. PCA ignores labels — use **LDA**.
:::
:::

:::question Question 3 (3 marks)
$n=2000$ images of $32\times32$ pixels are compressed with PCA, keeping $k=40$ components. How many numbers are stored before and after (store the scores, $W$ and $\bar x$)? What fraction is that?

:::solution
:::steps
Before ($d=32\cdot32=1024$)
$$
2000\times1024=2{,}048{,}000
$$
After: scores, $W$, and the mean
$$
\underbrace{2000\cdot40}_{80{,}000}+\underbrace{1024\cdot40}_{40{,}960}+\underbrace{1024}_{\bar x}=121{,}984\quad(\approx6.0\%)
$$
:::
:::
:::

:::remember
PCA recipe: mean → centre → $C=\tfrac1nSS^\top$ → eigenvalues → top eigenvectors → $T_k$, and the error is the sum of the dropped eigenvalues.
:::

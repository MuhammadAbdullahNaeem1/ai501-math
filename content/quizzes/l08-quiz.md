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
1. $5^6=\mathbf{15{,}625}$ cells.
2. $1-(1-\epsilon)^d=1-0.9^{20}=1-0.1216\approx\mathbf{0.878}$ — 88% of the volume is in the thin outer shell.
3. In high dimensions almost every point is near the surface and at nearly the **same distance** from a test point, and the cells are mostly empty, so the "nearest" neighbours are not actually close or similar.
:::
:::

:::question Question 2 (5 marks)
Four observations: $x_1=(2,0)$, $x_2=(0,2)$, $x_3=(4,4)$, $x_4=(2,2)$.

1. Find the mean and the centred observations. *(1 mark)*
2. Compute the covariance matrix $C$ (divide by $n$). *(1 mark)*
3. Find its eigenvalues and the first principal component. *(2 marks)*
4. What fraction of the variance does one component keep, and what is the average squared reconstruction error with $k=1$? *(1 mark)*

:::solution
1. $\bar x=(2,2)$; centred: $s_1=(0,-2)$, $s_2=(-2,0)$, $s_3=(2,2)$, $s_4=(0,0)$.
2. Sums of squares: first feature $0+4+4+0=8$, second $4+0+4+0=8$; cross terms $0+0+4+0=4$. So
$$
C=\frac14\begin{bmatrix}8&4\\4&8\end{bmatrix}=\begin{bmatrix}2&1\\1&2\end{bmatrix}.
$$
3. $\lambda=2\pm1$: $\lambda_1=3$, $\lambda_2=1$. First principal component $v_1=\tfrac{1}{\sqrt2}(1,1)$ (second $v_2=\tfrac{1}{\sqrt2}(1,-1)$).
4. $T_1=\dfrac{3}{3+1}=\mathbf{75\%}$. The average squared reconstruction error is the discarded eigenvalue, $\lambda_2=\mathbf 1$. (Check: the residuals are $(1,-1)$, $(-1,1)$, $0$, $0$ with squared lengths $2,2,0,0$; mean $=1$ ✓.)
:::
:::

:::question Question 3 (2 marks)
We want the best 3-dimensional approximation of 50-dimensional data with $z=W^\top(x-\bar x)$. Give the sizes of $W$, $W^\top$ and $z$, and say which eigenvectors form the columns of $W$.

:::solution
$W$ is $50\times3$, $W^\top$ is $3\times50$, $z\in\mathbb{R}^3$. The columns of $W$ are the eigenvectors of the $50\times50$ covariance matrix with the **three largest eigenvalues**.
:::
:::

## Mock Quiz 8B

:::question Question 1 (3 marks)
True or False, with a one-line reason:

1. PCA needs the class labels of the data.
2. The features produced by PCA are uncorrelated.
3. Dividing the covariance matrix by $n-1$ instead of $n$ changes the principal components.

:::solution
1. **False.** PCA is unsupervised: it uses only the spread (covariance) of the data — which is its main limitation for classification (use LDA for that).
2. **True.** $\operatorname{Cov}(z)=W^\top CW=\operatorname{diag}(\lambda_1,\dots,\lambda_k)$, because the eigenvectors are orthogonal.
3. **False.** It multiplies every eigenvalue by the same factor $n/(n-1)$; the eigenvectors (and the fractions $T_k$) are unchanged.
:::
:::

:::question Question 2 (4 marks)
The covariance matrix of 4-feature data has eigenvalues $6,\ 3,\ 0.6,\ 0.4$.

1. Compute $T_1$ and $T_2$. *(1 mark)*
2. What is the smallest $k$ keeping at least 90% of the variance? *(1 mark)*
3. What is the average squared reconstruction error for that $k$? *(1 mark)*
4. How long is the semi-axis of the data ellipse along $v_1$? *(1 mark)*

:::solution
1. Total variance $=6+3+0.6+0.4=10$. $T_1=6/10=0.6$, $T_2=9/10=0.9$.
2. $k=\mathbf 2$ ($T_2=0.9\ge0.9$, $T_1$ is not enough).
3. The sum of the discarded eigenvalues: $0.6+0.4=\mathbf{1.0}$.
4. $\sqrt{\lambda_1}=\sqrt6\approx\mathbf{2.45}$.
:::
:::

:::question Question 3 (3 marks)
Two features, height in metres and weight in grams, have covariance matrix $C=\begin{bmatrix}0.01&0.5\\0.5&2500\end{bmatrix}$.

1. Without computing, what will the first principal component be close to, and why is that a problem? *(1 mark)*
2. Standardise: compute the correlation $\rho$, write the covariance of the standardised data, and find its first principal component and $T_1$. *(2 marks)*

:::solution
1. Almost exactly the **weight axis** $(0,1)$: its variance (2500) dwarfs the other (0.01) only because grams are large numbers. PCA would be dominated by the choice of **units**, hiding any relationship between the features.
2. $\rho=\dfrac{0.5}{\sqrt{0.01\cdot2500}}=\dfrac{0.5}{5}=0.1$. The standardised covariance is the correlation matrix $R=\begin{bmatrix}1&0.1\\0.1&1\end{bmatrix}$, with eigenvalues $1\pm0.1=1.1,\ 0.9$. PC1 $=\tfrac{1}{\sqrt2}(1,1)$ (the average of the standardised features) and $T_1=1.1/2=\mathbf{55\%}$ — the features are only weakly related, so one component is not enough.
:::
:::

## Mock Quiz 8C

:::question Question 1 (4 marks)
A centred data matrix $S\in\mathbb{R}^{2\times5}$ (samples as **columns**) has singular values $5$ and $1$.

1. What are the eigenvalues of the covariance matrix $C=\tfrac15SS^\top$? *(2 marks)*
2. What fraction of the variance does the first component keep? *(1 mark)*
3. Are the principal components the left or the right singular vectors of $S$? What if the samples were stored as **rows** instead? *(1 mark)*

:::solution
1. $C=\tfrac1nSS^\top=U\big(\tfrac{\Sigma\Sigma^\top}{n}\big)U^\top$, so $\lambda_j=\sigma_j^2/n$: $\lambda_1=25/5=\mathbf 5$, $\lambda_2=1/5=\mathbf{0.2}$.
2. $T_1=5/5.2\approx\mathbf{96.2\%}$.
3. With samples as columns, the principal components are the **left** singular vectors $u_j$ of $S$. With samples as rows ($X_c=S^\top$), they are the **right** singular vectors (columns of $V$) of $X_c$.
:::
:::

:::question Question 2 (3 marks)
Class A has points $(\pm3,\ 1)$ and $(\pm1,\ 1)$; class B has $(\pm3,\ -1)$ and $(\pm1,\ -1)$.

1. Compute the covariance matrix and the first principal component. *(2 marks)*
2. What happens to the two classes if we keep only PC1? What method should we use instead? *(1 mark)*

:::solution
1. The mean is $(0,0)$. Variance of $x_1$: $\tfrac18(9+9+1+1)\cdot2=\tfrac{40}{8}=5$; variance of $x_2$: $\tfrac18\cdot8=1$; covariance $0$ (each $x_1$ value appears with both signs of $x_2$). So $C=\operatorname{diag}(5,1)$ and **PC1 is the $x_1$ axis**, $(1,0)$, keeping $5/6\approx83\%$ of the variance.
2. Projecting onto the $x_1$ axis puts both classes **on top of each other** — the separating direction ($x_2$) is the discarded, low-variance one. PCA ignores labels; use **LDA**, which looks for the direction that separates the classes.
:::
:::

:::question Question 3 (3 marks)
$n=2000$ images of $32\times32$ pixels are compressed with PCA, keeping $k=40$ components. How many numbers are stored before and after (store the scores, $W$ and $\bar x$)? What fraction is that?

:::solution
$d=32\cdot32=1024$. Before: $2000\cdot1024=2{,}048{,}000$. After: scores $2000\cdot40=80{,}000$, $W$ is $1024\times40=40{,}960$, and $\bar x$ has $1024$:
$$
80{,}000+40{,}960+1{,}024=121{,}984\approx\mathbf{6.0\%}\ \text{of the original}.
$$
:::
:::

:::remember
The PCA quiz recipe: mean → centre → $C=\tfrac1nSS^\top$ → eigenvalues (for $\begin{bmatrix}a&b\\b&a\end{bmatrix}$ they are $a\pm b$) → PC1 = top eigenvector → scores $v_1^\top s_i$ → $T_k=\sum_{i\le k}\lambda_i/\sum\lambda_i$, error $=\sum_{j>k}\lambda_j$. Standardise when units differ; $\lambda_j=\sigma_j^2/n$.
:::

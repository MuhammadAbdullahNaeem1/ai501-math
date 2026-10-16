# AI 501 — Mid cheat sheet (L00–L06)

## 0 · L00: AI & ML basics
- Four pillars: linear algebra, geometry, calculus, probability. AI coined **1956 (McCarthy)**; **Turing 1950** imitation game (30% fool for 5 min by 2000); Deep Blue 1997; deep learning 2012.
- Traditional: data + program → output. **ML: data + output → program.** Data → **algorithm** (we design) → **model** $f(x)$ (LR: coefficient vector; tree: if-then; NN: trained weights).
- **Supervised** (labelled): regression = continuous ("**probability** prices fall"), classification = discrete ("**whether** prices fall"). **Unsupervised** (unlabelled, clustering, market segmentation). **Semi-supervised**: fit on labelled, label the rest, refit.
- Features (inputs), label (output), training data, loss/cost, test data. MNIST 28×28, 60k train/10k test. Flow: problem nature → collect data → train → validate → deploy.
- CITY lesson: "math-informed AI — decompose first, then learn on the pieces."

## 1 · Vectors: notation & combinations
- $x\in\mathbb{R}^n$: ordered list, size $n$, entry $x_i$ (index from 1). Equal ⇔ same size & all entries equal.
- Special: $\mathbf 0$, $\mathbf 1$, $e_i$ ($(e_i)_j=\delta_{ij}$); $x=\sum_ix_ie_i$. **$k$-sparse**: at most $k$ non-zeros; $\|x\|_0=\#$non-zeros (**not** a norm).
- Readings: list / point / displacement ($\Delta x=x'-x$). Encodings: Boolean $\pm1$: $y=2x-\mathbf 1$, $x=\tfrac12(y+\mathbf 1)$; word counts: $\mathbf 1^\top w$=total, $h=w/\mathbf 1^\top w$; currency value $\rho^\top c$.
- $u+v$, $\alpha v$ entry-wise; same size needed. $x^2$ is meaningless for $n>1$; $w^\top z$ (col×row) = outer product.
- $y=\sum c_iv_i$: **linear** (any $c$) ⊃ **affine** ($\sum c_i=1$) ⊃ **convex** ($\sum c_i=1$, $c_i\ge0$); **conic**: $c_i\ge0$.
- Two points: linear → span; conic → wedge; affine → **line** through them ($x_2+t(x_1-x_2)$); convex → **segment**. 3 non-collinear points, affine → plane.
- $2x_A-x_B$: linear & affine, not convex. Combination of combinations is a combination.

## 2 · Inner product
- $u^\top v=\sum u_iv_i=\|u\|\|v\|\cos\theta$; symmetric, linear; $u^\top u=\|u\|^2\ge0$. $u^\top v>0$ acute, $=0$ ⟂, $<0$ obtuse.
- Queries: $e_i^\top x=x_i$; $\mathbf 1^\top x$=sum; $\tfrac1n\mathbf 1^\top x$=mean; indicator $g^\top x$=sum of selected entries; avg age $a^\top x/\mathbf 1^\top x$.
- Boolean $x,y$: $x^\top y$=common; $\|x\|_2^2=\mathbf 1^\top x$ (so $\|x\|_2$ is a square root!); $\mathbf 1^\top(x-y)$=difference of counts.
- Uses: score $\hat y=w^\top x+b$, neuron $z=w^\top x+b$, rating $u^\top v$, value $c^\top q$, similarity.

## 3 · Norms, distance, error
- Norm axioms: $\|v\|\ge0$; $\|v\|=0\Leftrightarrow v=\mathbf 0$; $\|\alpha v\|=|\alpha|\|v\|$; $\|u+v\|\le\|u\|+\|v\|$.
- $\|v\|_p=(\sum|v_i|^p)^{1/p}$, $p\ge1$. $\|v\|_1=\sum|v_i|$, $\|v\|_2=\sqrt{v^\top v}$, $\|v\|_\infty=\max|v_i|$; $\|v\|_\infty\le\|v\|_2\le\|v\|_1$.
- Unit balls in $\mathbb{R}^2$: $\ell_1$ diamond $(\pm1,0),(0,\pm1)$; $\ell_2$ circle; $\ell_\infty$ square $(\pm1,\pm1)$.
- **$\|u\pm v\|^2=\|u\|^2\pm2u^\top v+\|v\|^2$.** ⟂ ⇒ Pythagoras; $\|\alpha a+\beta b\|=\sqrt{\alpha^2\|a\|^2+\beta^2\|b\|^2}$. Unit $u,v$: $\|u-v\|^2=2(1-u^\top v)$.
- **Cauchy–Schwarz** $|u^\top v|\le\|u\|\|v\|$ (= iff parallel). $\|(x,x)\|=\sqrt2\|x\|$; $\|x\|=-\|-x\|$ only if $x=\mathbf 0$.
- $\hat u=u/\|u\|$; opposite unit vector $-u/\|u\|$.
- Distance $d_p=\|u-v\|_p$. RMSE $=\|y-\hat y\|_2/\sqrt n$; MAE $=\|y-\hat y\|_1/n$; $\ell_\infty$ = worst error.

## 4 · Angle, projection, statistics
- $\cos\theta=\dfrac{a^\top b}{\|a\|\|b\|}$ (cosine similarity; ignores size). $y=3x$ ⇒ cos-sim 1 but $\|y-x\|=2\|x\|$.
- $\operatorname{proj}_u x=\dfrac{x^\top u}{u^\top u}u$ $\big(=(x^\top u)u$ if $\|u\|=1\big)$; residual $x-\operatorname{proj}\perp u$.
- $\bar x=\tfrac{\mathbf 1^\top x}{n}$, $\operatorname{rms}=\tfrac{\|x\|}{\sqrt n}$, $\operatorname{std}=\tfrac{\|x-\bar x\mathbf 1\|}{\sqrt n}$ (divide by $n$); **$\operatorname{rms}^2=\operatorname{avg}^2+\operatorname{std}^2$**.
- Centred $x_c=x-\bar x\mathbf 1$ ⟂ $\mathbf 1$. **Correlation** $\rho=\dfrac{\tilde a^\top\tilde b}{\|\tilde a\|\|\tilde b\|}\in[-1,1]$ = cosine of centred vectors; $y=\alpha x+\beta\mathbf 1$ ⇒ $\rho=\operatorname{sign}\alpha$.
- Standardise $z=(x-\bar x\mathbf 1)/\operatorname{std}$ (mean 0, std 1) before kNN, k-means, SVM, GD.
- **Bias–variance:** RMS err$^2$ = Bias$^2$+Var+Noise. Bias = too simple → underfit; variance = too sensitive → overfit.

## 5 · Span, independence, basis
- $\operatorname{span}(v_i)=\{\sum c_iv_i\}$ — always a subspace. $b\in$ span ⇔ $[v_1\cdots v_k]c=b$ solvable. 2 non-parallel vectors in $\mathbb{R}^3$ → plane; parallel → line.
- **Independent:** $\sum c_iv_i=\mathbf 0\Rightarrow$ all $c_i=0$. Dependent ⇔ one is a combination of others. Set with $\mathbf 0$ is dependent; "no zero vector" ⇏ independent; square: dependent ⇔ $\det=0$.
- **Independence–dimension:** in dim $n$, at most $n$ independent; $n+1$ always dependent; spanning set needs $\ge n$; $n$ independent in $\mathbb{R}^n$ ⇒ basis.
- **Basis** = independent + spanning ⇒ unique coordinates. Need not be orthogonal ($\{(1,0),(1,1)\}$).
- **Orthonormal**: $q_i^\top q_j=\delta_{ij}$; ⟂ non-zero ⇒ independent; coefficients $c_i=q_i^\top u$. Membership test: $\hat a=\sum(q_i^\top a)q_i=a$?

## 6 · Gram–Schmidt
- $\tilde q_i=a_i-\sum_{j<i}(q_j^\top a_i)q_j$, $q_i=\tilde q_i/\|\tilde q_i\|$. $\tilde q_i=\mathbf 0$ ⇒ $a_i$ dependent (dim of span = #non-zero $\tilde q$).
- Keeps span at every step; output **depends on order**; works in any $\mathbb{R}^n$; take a unit-length input first. Basis of QR.
- Ex: $(4,3),(-2,1)$ → $q_1=(\tfrac45,\tfrac35)$, $q_1^\top a_2=-1$, $\tilde q_2=(-\tfrac65,\tfrac85)$, $q_2=(-\tfrac35,\tfrac45)$. Always **check** $q_1^\top q_2=0$.
- Span of 2 vectors in $\mathbb{R}^3$: plane with normal $u_1\times u_2$.

## 7 · Vector spaces & subspaces
- 10 axioms (closure $+$ and $\cdot$, comm., assoc., $\mathbf 0$, $-u$, distributive ×2, $(ab)u=a(bu)$, $1u=u$). Examples: $\mathbb{R}^n$, polynomials, functions. $\mathbb{R}^4_{\ge0}$ is **not**.
- **Subspace** ⇔ $\mathbf 0\in W$, closed under $+$ and scalar $\cdot$ ($\alpha u+\beta v\in W$). Lines/planes **through 0**: yes. Line not through 0, quadrant, line∪plane: no.
- $\dim$ = #vectors in any basis; $\dim\{\mathbf 0\}=0$. Subspace properties ≠ "dim ≥ 2".

## 8 · Matrices: basics
- $A\in\mathbb{R}^{m\times n}$, $A_{ij}$ row $i$ col $j$. Square/tall ($m>n$)/wide; $0$, $I$ ($\delta_{ij}$), diagonal, triangular, block, symmetric, orthogonal, permutation.
- $A^\top$: $(A^\top)_{ij}=A_{ji}$; $(AB)^\top=B^\top A^\top$, $(ABC)^\top=C^\top B^\top A^\top$.
- **Symmetric** $A=A^\top$; **skew** $A=-A^\top$ (diag $=0$). $A=S+K$, $S=\tfrac12(A+A^\top)$, $K=\tfrac12(A-A^\top)$. $A^2$ sym if $A$ sym; $AB$ sym iff $AB=BA$; $A^\top A$, $AA^\top$ always sym.
- $\|A\|_F=\sqrt{\sum A_{ij}^2}$; $\|A\|_F^2=\operatorname{tr}(A^\top A)$. $\operatorname{tr}A=\sum A_{ii}$, linear, $\operatorname{tr}A^\top=\operatorname{tr}A$, $\operatorname{tr}I_n=n$, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$, cyclic; $\operatorname{tr}(AB)\ne\operatorname{tr}A\operatorname{tr}B$; $\operatorname{tr}A=\sum\lambda_i$.

## 9 · Products
- $(Ax)_i=\sum_kA_{ik}x_k$ (cols of $A$ = size of $x$). Views: **rows** (dot products), **columns** $Ax=\sum_jx_ja_j$, **linear map** $A(x+x')=Ax+Ax'$.
- $Ae_j=a_j$; all $Ax$ = column space; dependent columns ⇔ $Ac=\mathbf 0$, $c\ne\mathbf 0$. Permutation $P$: one 1 per row/col, $P^{-1}=P^\top$.
- Applications: $Ap$ stock value, $Aw$ weight; $A^\top w$ scores; $A^\top q$ similarity; $z=Wx$ classifier (argmax); $\hat y=Xw+b\mathbf 1$.
- $(AB)_{ij}$ = row $i$ of $A$ · col $j$ of $B$; $(m\times n)(n\times p)=m\times p$. Not commutative; associative; distributive; $AB=[Ab_1\cdots Ab_p]$; blocks multiply like entries.
- **Outer product** $ab^\top$ ($m\times n$, entries $a_ib_j$): rank 1. **Gram** $G=A^\top A$, $G_{ij}=a_i^\top a_j$, symmetric.
- Linear layers collapse: $W^{[2]}W^{[1]}x=Wx$ — no non-linearity ⇒ one matrix.
- **Size drill:** write sizes side by side; inner match, outer = result.

## 10 · Linear systems
- $Ax=b$: none / one / infinitely many. $m<n$ under-determined (wide), $m>n$ over-determined (tall) — shape alone decides nothing.
- Ex: $x_1-x_2=2,\ x_1+x_2=4,\ 3x_1-x_2=8$ → unique $(3,1)$ although tall. $x=1,x=2$: none.

## 11 · Inverses
- **Left** $XA=I$ ⇒ independent columns ⇒ square or tall; $x=Xb$ is the **only** candidate (check it). Not unique.
- **Right** $AX=I$ ⇒ independent rows ⇒ square or wide; $x=Xb$ always solves; $X^\top$ is a left inverse of $A^\top$.
- Both ⇒ $X=X(AY)=(XA)Y=Y=A^{-1}$ (square, unique). Square: left-inv ⇔ indep cols ⇔ right-inv ⇔ indep rows ⇔ $\det\ne0$ ⇔ rank $n$ ⇔ $\mathcal N=\{\mathbf 0\}$.
- $(A^{-1})^{-1}=A$, $(AB)^{-1}=B^{-1}A^{-1}$, $(A^\top)^{-1}=(A^{-1})^\top$, $(\alpha A)^{-1}=\alpha^{-1}A^{-1}$.
- **2×2:** $\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1}=\dfrac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$ — swap diagonal, negate off-diagonal, divide by det. **Check** $AA^{-1}=I$.
- Diagonal: invertible iff all $d_i\ne0$, inverse $\operatorname{diag}(1/d_i)$. Vandermonde invertible iff distinct $t_i$. **Gram $A^\top A$ invertible ⇔ independent columns** ($A^\top Ax=0\Rightarrow\|Ax\|^2=0\Rightarrow x=0$).
- Orthonormal columns: $A^\top A=I$; square ⇒ orthogonal, $Q^{-1}=Q^\top$, $\det Q=\pm1$; preserves inner products, norms, distances, angles. Tall: $A^\top A=I$ but $AA^\top\ne I$.
- Singular ⇒ squashes some $x\ne0$ to 0, info lost. Don't form $A^{-1}$ numerically (ill-conditioning).

## 12 · Determinant & transformations
- $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc$ = signed area of the column parallelogram. $\det=0$ ⇒ flattens ⇒ singular; $<0$ ⇒ flip.
- $\det(AB)=\det A\det B$, $\det A^\top=\det A$, $\det A^{-1}=1/\det A$, $\det(cA)=c^n\det A$, triangular = product of diagonal, $=\prod\lambda_i$.
- Rotation $\begin{pmatrix}\cos&-\sin\\\sin&\cos\end{pmatrix}$ ($\det1$); scaling $\operatorname{diag}(s_1,s_2)$; shear $\begin{pmatrix}1&k\\0&1\end{pmatrix}$; reflection $\operatorname{diag}(1,-1)$; projection $\operatorname{diag}(1,0)$ ($\det0$).

## 13 · Pseudo-inverses
- Tall, indep cols: $A^\dagger=(A^\top A)^{-1}A^\top$ (left inverse) → **least squares**. Wide, indep rows: $A^\dagger=A^\top(AA^\top)^{-1}$ (right inverse) → **minimum-norm** solution.
- Moore–Penrose $A^+$ exists for every matrix; $=A^{-1}$ if invertible; $AA^+A=A$. $M\in\mathbb{R}^{5\times2}$ ⇒ $M^\dagger\in\mathbb{R}^{2\times5}$.

## 14 · Rank
- Rank = #indep cols = #indep rows = #pivots $\le\min(m,n)$. Full column rank $=n$; full row rank $=m$.
- $\operatorname{rank}A=\operatorname{rank}A^\top$; $\operatorname{rank}(AB)\le\min(\operatorname{rank}A,\operatorname{rank}B)$ (can be strict: $\begin{pmatrix}0&1\\0&0\end{pmatrix}^2=0$); invertible ⇒ rank $n$; $\operatorname{rank}(A^\top A)=\operatorname{rank}A$; $uv^\top$ rank 1.
- 3×3: rank 3 volume, 2 plane, 1 line, 0 origin.
- **Elimination:** swap rows, scale by non-zero, add multiple of a row. REF (pivots stair-step), RREF (pivots 1, alone in column). RREF shows redundant-column recipes.

## 15 · Column & null space, rank–nullity
- $\mathcal C(A)=\operatorname{span}(\text{cols})=\{Ax\}\subseteq\mathbb{R}^m$, $\dim=\operatorname{rank}$; basis = **pivot columns of the original $A$**.
- $Ax=b$ solvable ⇔ $b\in\mathcal C(A)$ ⇔ $\operatorname{rank}A=\operatorname{rank}[A|b]$ (zero rows of $[A|b]$ give the conditions).
- $\mathcal N(A)=\{x:Ax=\mathbf 0\}\subseteq\mathbb{R}^n$; nullity = #free vars; special solutions: free var = 1, others 0.
- **Rank–nullity:** $\operatorname{rank}A+\dim\mathcal N(A)=n$ (**columns**). Wide ⇒ non-trivial null space. $\mathcal N(A)=\{\mathbf 0\}$ ⇔ indep cols ⇔ rank $n$.
- Left null space $\mathcal N(A^\top)\subseteq\mathbb{R}^m$, dim $m-r$; row space dim $r$.
- **Complete solution** $x=x_p+x_n$ ($x_p$: free vars = 0). Precisely: $r=n$ ⇒ at most one; $r<n$ ⇒ 0 or ∞; $r<m$ ⇒ some $b$ unreachable.
- Cases: $r=m=n$ one; $r=n<m$ 0 or 1; $r=m<n$ ∞ for every $b$; $r<m,n$ 0 or ∞.
- Duplicate feature (cm & inches) ⇒ $\mathcal N(X)\ne\{0\}$, $X^\top X$ singular, weights not unique.

## 16 · Supervised learning
- $D=\{(x_i,y_i)\}\subseteq\mathcal X^d\times\mathcal Y$; feature space, label space. Regression $\mathcal Y=\mathbb{R}$; binary $\{0,1\}$; $M$-class $\{1..M\}$. Probability of X → regression; whether X → classification; no labels → neither.
- Unknown $P(X,Y)$; hypothesis $h\in\mathcal H$ (hypothesis class); learning $h^\ast=\arg\min_{h\in\mathcal H}\mathcal L(h)$.
- Losses (÷$n$, ≥0): 0/1 $\tfrac1n\sum(1-\delta_{h(x_i)-y_i})$ = misclassification rate (non-differentiable); MSE $\tfrac1n\sum e_i^2$; RMSE $\sqrt{\text{MSE}}$ (units of $y$); MAE $\tfrac1n\sum|e_i|$ (robust).
- Best constant: MSE → **mean**; MAE → **median**.
- Memoriser: 0 train error, useless ⇒ overfitting. Split $D_{TR}$ (70–90%) / $D_{TE}$; i.i.d. or by time; **test once**. Train = parameters; validation = hyper-parameters; test = final assessment. $K$-fold CV loss $=\tfrac1K\sum\ell_j$.
- Classifier map: frequency table (Bayes, trees); covariance (LDA, logistic); similarity (**kNN**); others (NN, SVM).

## 17 · kNN
- Vote among the $k$ nearest; regression: mean or $\sum(y_i/d_i)/\sum(1/d_i)$. Lazy, non-parametric, no distribution assumption; hyper-params $k$, metric.
- Odd $k$ for binary (3 classes can still tie); ties → priors or $(k-1)$/1-NN; missing values → feature mean; categorical → **Hamming** (#mismatches).
- Minkowski $p=1,2,\infty$. **Normalise** (min–max $\tfrac{x-\min}{\max-\min}$ or z-score), using training stats — scaling can flip the answer.
- $k=1$: noise-sensitive, high variance, 0 train error; $k=n$: majority class. Larger $k$ ⇒ ↓variance ↑bias; non-linear boundary ⇒ small $k$; pick $k$ by CV.
- Cost per query: distances $O(dn)$, select $O(n)$, vote $O(k)$ ⇒ $O(dn)$ time & storage; training free.
- **Curse of dimensionality:** window side 0.1 holds $0.1^p$ of data; to hold 10% need $L=0.1^{1/p}$ ($p=100$: 0.977).

## 18 · Classifier metrics (rows = predicted, cols = actual)
- TP ($y{=}1,\hat y{=}1$), TN, FP (false alarm, $y{=}0,\hat y{=}1$), FN (miss). $P=TP+FN$, $N=FP+TN$ (column totals).
- Acc $\tfrac{TP+TN}{P+N}$; Err $\tfrac{FP+FN}{P+N}$; **Recall/TPR/Sens** $\tfrac{TP}{P}$; **Spec/TNR** $\tfrac{TN}{N}$; **FPR** $\tfrac{FP}{N}=1-$Spec; **Precision** $\tfrac{TP}{TP+FP}$; **NPV** $\tfrac{TN}{TN+FN}$.
- Heart: TP100 FP10 FN5 TN50 → Acc .91, Sens .95, Spec .83, FPR .17, Prec .91, NPV .91, F1 .93, MCC .80.
- Accuracy misleads under imbalance ("always legal" no-ball = 95%). Precision depends on prevalence.
- Disease: avoid FN → **recall** (want FP ≫ FN). Fraud/spam: avoid FP → **specificity, precision**.
- All-positive: Sens 1, Spec 0, Prec $P/(P+N)$. All-negative: Spec 1, Sens 0. Threshold trades them.
- **ROC**: (FPR, TPR) over thresholds; ideal $(0,1)$; diagonal = random; **AUC** = P(random + outscores random −); 1 perfect, .5 random; AUC $a<.5$ → flip → $1-a$. ROC hides FP when TN is huge.
- $F_\beta=\dfrac{1+\beta^2}{1/P+\beta^2/R}$; **$F_1=\dfrac{2PR}{P+R}=\dfrac{2TP}{2TP+FP+FN}$**; $\beta>1$ favours recall. min ≤ HM ≤ GM ≤ AM ≤ max.
- **MCC** $=\dfrac{TP\cdot TN-FP\cdot FN}{\sqrt{(TP+FP)(TP+FN)(TN+FP)(TN+FN)}}\in[-1,1]$, uses all 4 cells, class-symmetric; F1 changes if you swap which class is positive.
- Reconstruct: $P,N$ from prevalence → TP, FN from recall → FP from precision ($TP/(TP+FP)$) or spec → TN.

## 19 · Linear regression
- $y=f(x)+n$; model $\hat y=\hat f(x,\theta)$ (structure + parameters); error $e=y-\hat y$. Recipe: model → loss → optimisation → solve (analytic/numeric).
- $\hat y=\theta_0+\theta^\top x$ (hyperplane, $d+1$ params). Design matrix $X=[\mathbf 1\ \ x_i^\top]\in\mathbb{R}^{n\times(d+1)}$, $\hat y=Xw$.
- LSE, MSE, RMSE share one minimiser. $\mathcal L(w)=\tfrac12\|y-Xw\|^2=\tfrac12(y^\top y-2w^\top X^\top y+w^\top X^\top Xw)$.
- Gradients: $\nabla a^\top x=a$, $\nabla x^\top x=2x$, $\nabla x^\top Px=2Px$ ($P$ sym), $\nabla(\tfrac12x^\top Ax+b^\top x)=Ax+b$.
- **Normal equations $X^\top Xw=X^\top y$, $w=(X^\top X)^{-1}X^\top y$.** By projection: $X^\top(y-Xw)=\mathbf 0$ (residual ⟂ $\mathcal C(X)$). Hessian $X^\top X$ PSD ⇒ global min.
- Checks: residuals sum to 0; line passes through $(\bar x,\bar y)$. 1 feature: $w_1=S_{xy}/S_{xx}$, $w_0=\bar y-w_1\bar x$. Bias only ⇒ $\theta_0=\bar y$. Symmetric $x$ ⇒ $X^\top X$ diagonal, decoupled.
- Fails if $n<d+1$ or redundant features ⇒ remove or regularise. Use `lstsq`, standardise (condition number), cost $n(d+1)^2+(d+1)^3$.
- Age data: $X^\top X=\begin{pmatrix}4&145\\145&5625\end{pmatrix}$, $X^\top y=(14,470)$ ⇒ $w=(7.186,-0.1017)$.

## 20 · Polynomial regression & fitting
- $\hat f=\sum_{i=0}^M\theta_ix^i=g(x)^\top\theta$, $g=[1,x,\dots,x^M]$: **linear in parameters**; $X$ Vandermonde; any fixed $g$ ($\sin$, $e^x$) works; $w_0+e^{w_1x}$ does not.
- $M$ = hyper-parameter (like $k$). Bishop $\sin(2\pi x)$, $n=10$: $M=0,1$ underfit; $M=3$ good; $M=9$ zero train error, wild, coefficients explode.
- $M\ge n-1$ ⇒ exact interpolation. Remedies: (1) validation ($E_{RMS}$ vs $M$, LOO for tiny data); (2) more data; (3) regularisation.
- Nested models: bigger model never worse on **training**; on **test** depends on bias vs variance.

## 21 · Ridge, lasso, elastic net
- $\mathcal L_{reg}=\tfrac12\|y-X\theta\|^2+\lambda\mathcal R(\theta)$; $\lambda=0$ OLS, $\lambda\to\infty$ → $\mathbf 0$ (constant $\bar y$).
- **Ridge** $\tfrac\lambda2\|\theta\|^2$: $\nabla=X^\top X\theta-X^\top y+\lambda\theta$ ⇒ **$\theta=(X^\top X+\lambda I)^{-1}X^\top y$**. Always invertible ($v^\top(X^\top X+\lambda I)v\ge\lambda\|v\|^2>0$); unique; duplicates split equally.
- 1-D: $w=\dfrac{\sum x_ny_n}{\sum x_n^2+\lambda}$; centred $w_1=\dfrac{S_{xy}}{S_{xx}+\lambda}$ = shrink factor $\tfrac{S_{xx}}{S_{xx}+\lambda}$ × OLS. ↑λ: ↑bias ↓variance. Never exactly 0. Weight decay; Gaussian prior.
- Don't penalise intercept; **standardise first** (not unit-free). Geometry: disc. Use $\ln\lambda$; choose by validation (U-shaped curve).
- **Lasso** $\lambda\|\theta\|_1$: no closed form (coordinate descent), costlier; diamond corners ⇒ **sparse** (feature selection), biased. 1-D: $w=\dfrac{\operatorname{sign}(b)\max(|b|-\lambda,0)}{a}$ vs ridge $\dfrac{b}{a+\lambda}$, OLS $\dfrac ba$ ($a=\sum x^2$, $b=\sum xy$). Zero iff $|b|\le\lambda$.
- **Elastic net** $\tfrac12\|\cdot\|^2+\lambda_1\|\theta\|_1+\tfrac{\lambda_2}2\|\theta\|^2$; ridge & lasso special cases; 2 hyper-params.
- ↓variance: more data, simpler model, ↑λ. Sparse ⇒ $L^1$.

## 22 · Eigenvalues & eigenvectors
- $Aq=\lambda q$, $q\ne\mathbf 0$, square $A$; only scaling (stretch / shrink / flip / squash). Defined up to scale.
- $\det(A-\lambda I)=0$ (degree $n$); **2×2: $\lambda^2-\operatorname{tr}(A)\lambda+\det A=0$**. $\sum\lambda_i=\operatorname{tr}$, $\prod\lambda_i=\det$. Eigenspace $=\mathcal N(A-\lambda I)$; spectrum = set of $\lambda$.
- **Eigenvector recipe:** plug $\lambda$ into $A-\lambda I$, take **one row**, solve for one entry, set the other to 1, normalise, **check $Aq=\lambda q$**.
- **Symmetric shortcut:** eigenvectors for distinct $\lambda$ are ⟂ — for 2×2, if $q_1=(a,b)$ then $q_2=(-b,a)$.
- $AQ=Q\Lambda$ ⇒ **$A=Q\Lambda Q^{-1}$** (needs independent eigenvectors; distinct $\lambda$ suffice). Order of $\lambda$'s matches columns of $Q$.
- Meaning: $Q^{-1}$ change basis → $\Lambda$ scale → $Q$ back; $Ax=\sum\lambda_ic_iq_i$, $x=\sum c_iq_i$. Unit circle → ellipse, semi-axes $|\lambda_i|$ along $q_i$, area $|\det|\pi$.
- $\det A=\prod\lambda_i$; $A^{-1}=Q\Lambda^{-1}Q^{-1}$ (eigs $1/\lambda_i$); $A^k=Q\Lambda^kQ^{-1}$; $f(A)$ has eigs $f(\lambda_i)$ (e.g. $4A^3+6A^{-1}+2I$); $A+cI$ shifts by $c$.
- $\lambda=0$ ⇔ dependent cols ⇔ $\det0$ ⇔ singular. Negative λ fine (flip). Repeated $A^k$ → direction of largest $|\lambda|$.
- **Spectral theorem:** $A=A^\top$ ⇒ real λ, orthonormal eigenvectors, **$A=Q\Lambda Q^\top$** ($Q^{-1}=Q^\top$), $A=\sum\lambda_iq_iq_i^\top$. Rotation $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$: $\lambda^2+1$, no real λ.
- $\begin{pmatrix}a&b\\b&a\end{pmatrix}$: eigs $a\pm b$, vectors $(1,1)$, $(1,-1)$. E.g. $\begin{pmatrix}2&1\\1&2\end{pmatrix}$: 3, 1; $C^2=\begin{pmatrix}5&4\\4&5\end{pmatrix}$; $S^k=\tfrac12\begin{pmatrix}3^k+1&3^k-1\\3^k-1&3^k+1\end{pmatrix}$.

## 23 · Preview (insurance): PSD, SVD
- PSD ⇔ $x^\top Ax\ge0$ ⇔ all $\lambda\ge0$ ⇔ $A=B^\top B$; $\det>0$ alone insufficient. $X^\top X$ PSD; $+\lambda I$ ⇒ PD.
- SVD $A=U\Sigma V^\top$; $V$ eigvecs of $A^\top A$, $U$ of $AA^\top$, $\sigma_i=\sqrt{\lambda_i(A^\top A)}$, $Av_i=\sigma_iu_i$; $\det(A^\top A)=\prod\sigma_i^2$.
- Rank-$k$ $A_k=\sum_{i\le k}\sigma_iu_iv_i^\top$, $\|A-A_k\|_F^2=\sum_{i>k}\sigma_i^2$; storage $mk+k+kn$ vs $mn$.

## 24 · Worked procedures (exam-style)
**2×2 inverse.** $M=\begin{pmatrix}3&1\\5&2\end{pmatrix}$, $\det=6-5=1$, $M^{-1}=\begin{pmatrix}2&-1\\-5&3\end{pmatrix}$; $Mx=(4,7)\Rightarrow x=M^{-1}(4,7)=(1,1)$. $\begin{pmatrix}4&7\\2&6\end{pmatrix}^{-1}=\tfrac1{10}\begin{pmatrix}6&-7\\-2&4\end{pmatrix}$.

**Symmetric eigenvectors.** $A=\begin{pmatrix}3&-2\\-2&6\end{pmatrix}$: $\lambda^2-9\lambda+14=0\Rightarrow7,2$. $\lambda=7$: row 1 of $A-7I$: $-4a-2b=0\Rightarrow q_1=(1,-2)/\sqrt5$; ⟂ ⇒ $q_2=(2,1)/\sqrt5$ (check $Aq_2=2q_2$ ✓). $A=Q\Lambda Q^\top$, $A^3=Q\operatorname{diag}(343,8)Q^\top=\begin{pmatrix}75&-134\\-134&276\end{pmatrix}$, $A^{-1}=\tfrac1{14}\begin{pmatrix}6&2\\2&3\end{pmatrix}$ (eigs $\tfrac17,\tfrac12$).
- $\begin{pmatrix}5&2\\2&2\end{pmatrix}$: $\lambda^2-7\lambda+6$ ⇒ 6, 1; $q_1=(2,1)/\sqrt5$, $q_2=(-1,2)/\sqrt5$. $\begin{pmatrix}4&1\\2&3\end{pmatrix}$ (not sym.): 5, 2; $(1,1)$, $(1,-2)$ — not ⟂.

**Gram–Schmidt in $\mathbb{R}^3$.** $a_1=(2,1,2)$, $\|a_1\|=3$, $q_1=\tfrac13(2,1,2)$; $a_2=(1,1,0)$, $q_1^\top a_2=1$, $\tilde q_2=a_2-q_1=\tfrac13(1,2,-2)$, $\|\cdot\|=1$ ⇒ $q_2=\tfrac13(1,2,-2)$. Project $b=(0,0,3)$: $(q_1^\top b)q_1+(q_2^\top b)q_2=2q_1-2q_2=\tfrac23(1,-1,4)$; residual $\tfrac13(-2,2,1)\perp q_1,q_2$.

**Complete solution.** Reduce $[A|b]$ to RREF; pivots → rank $r$; free vars $n-r$. $x_p$: free = 0, read pivots. Special solutions: each free var = 1 in turn, back-substitute with $b=0$. $x=x_p+\sum c_is_i$. E.g. $x=(2,0,3,0)+c_1(-2,1,0,0)+c_2(-1,0,-2,1)$; check $As_i=\mathbf 0$.

**Least squares (1 feature).** Data $(0,1),(1,2),(2,2),(3,4)$: $\bar x=1.5$, $\bar y=2.25$, $S_{xx}=5$, $S_{xy}=4.5$ ⇒ $w_1=0.9$, $w_0=2.25-1.35=0.9$. Matrix form: $X^\top X=\begin{pmatrix}4&6\\6&14\end{pmatrix}$, $X^\top y=(9,18)$, $w=(X^\top X)^{-1}X^\top y=\tfrac1{20}\begin{pmatrix}14&-6\\-6&4\end{pmatrix}(9,18)=(0.9,0.9)$. Ridge (centred, $\lambda=5$): $w_1=4.5/10=0.45$, $w_0=\bar y-w_1\bar x=1.575$.

**Lasso / soft-threshold (1-D).** $a=\sum x^2$, $b=\sum xy$: OLS $b/a$, ridge $b/(a+\lambda)$, lasso $\operatorname{sign}(b)(|b|-\lambda)_+/a$. $a=8,b=-12,\lambda=4$: OLS $-1.5$, ridge $-1$, lasso $-1$; $\lambda\ge12$ ⇒ lasso 0.

**kNN by hand.** Normalise if scales differ → distances to every training point (square-root optional for ranking) → sort → vote for $k=1,3,5$ (answers can change with $k$) → report ties.

**Metrics by hand.** Build the table (rows predicted, cols actual); write $P$, $N$; then Acc, Recall, Spec, Prec, F1. TP30 FN10 FP20 TN140: Acc .85, Rec .75, Spec .875, Prec .6, F1 .667, FPR .125.

**Correlation by hand.** Centre both vectors, $\rho=\tilde a^\top\tilde b/(\|\tilde a\|\|\tilde b\|)$. $a=(1,2,3)$, $b=(2,4,7)$: $\tilde a=(-1,0,1)$, $\tilde b=(-2.33,-0.33,2.67)$ ⇒ $\rho=5/(\sqrt2\sqrt{12.67})=0.993$.

**Projection by hand.** $x=(3,4)$ on $u=(1,1)$: $\tfrac{7}{2}(1,1)$, residual $(-\tfrac12,\tfrac12)\perp u$; distance from $x$ to the line $=\tfrac1{\sqrt2}$.

## 25 · Exam drill & traps
- MCQ: tick only what you can justify (−1 each wrong). Problems: write formula → substitute → number → **check**.
- Checks: $q_i^\top q_j=0$; residuals sum 0, $X^\top e=0$; $\sum\lambda=\operatorname{tr}$, $\prod\lambda=\det$; $AA^{-1}=I$; confusion rows/cols sum to totals; rank + nullity = $n$.
- Traps: $\|x\|_2\neq\#$ (it's √); rank–nullity counts **columns**; ridge never 0; lasso sparse; recall = TP/P not TP/(TP+FP); accuracy under imbalance; $(AB)^{-1}=B^{-1}A^{-1}$; $\det(cA)=c^n\det A$; wide ⇒ no left inverse, tall ⇒ no right inverse; GS order matters; MSE→mean, MAE→median.

## 26 · Quick true/false facts (MCQ bank)
- **T**: every subspace contains $\mathbf 0$; span is a subspace; $\mathcal N(A)$, $\mathcal C(A)$ are subspaces; solution set of $Ax=b$, $b\ne0$, is **not** a subspace (no $\mathbf 0$).
- **T**: $n$ orthonormal vectors in $\mathbb{R}^n$ form a basis; orthogonal non-zero ⇒ independent (converse false).
- **T**: $A^\top A$ and $AA^\top$ have the same non-zero eigenvalues, both PSD, rank $=\operatorname{rank}A$.
- **T**: wide $A$ ($m<n$) ⇒ $\mathcal N(A)\ne\{0\}$ ⇒ $Ax=b$ never unique. Tall $A$ ⇒ some $b$ have no solution.
- **F**: "tall ⇒ no solution" (can be consistent); "square ⇒ invertible"; "$\det A>0$ ⇒ PSD"; "independent ⇒ orthogonal"; "basis must be orthonormal".
- **F**: $\|u+v\|=\|u\|+\|v\|$ in general (only when same direction); $\|x\|_0$ is a norm; $\|x\|_\infty\ge\|x\|_2$.
- **T**: $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ even when $AB\ne BA$; $\det(AB)=\det(BA)$ for square.
- **T**: eigenvectors for distinct eigenvalues are independent; symmetric ⇒ orthogonal. Same eigenvalue ⇒ any combination is still an eigenvector.
- **T**: $A$ invertible ⇔ 0 is not an eigenvalue; $A^k$, $A^{-1}$, $A+cI$ share $A$'s eigenvectors.
- **T**: ridge ⇒ unique solution even with duplicate features; lasso ⇒ may zero features; both shrink; $\lambda$ chosen on validation, not test.
- **T**: increasing polynomial degree never increases training error; test error is U-shaped. $k$↑ in kNN ⇒ smoother boundary.
- **T**: kNN has no training phase but $O(dn)$ prediction; needs feature scaling; suffers in high dimension.
- **T**: AUC is threshold-free; F1 ignores TN; MCC uses all four; precision undefined if no positives predicted.
- **T**: correlation is invariant to positive scaling & shifting of either vector; cosine similarity is invariant to scaling only.
- **T**: $\operatorname{std}(x+c\mathbf 1)=\operatorname{std}(x)$, $\operatorname{std}(\alpha x)=|\alpha|\operatorname{std}(x)$; avg shifts by $c$.
- **T**: rotation/orthogonal $Q$: $\|Qx\|=\|x\|$, $\det=\pm1$, columns & rows orthonormal; permutation is orthogonal.
- **T**: outer product $uv^\top$ ($u,v\ne0$) has rank 1, column space $=\operatorname{span}(u)$, null space $=v^\perp$ (dim $n-1$).

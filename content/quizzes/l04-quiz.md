# L04 · Practice quizzes — Supervised learning, kNN, evaluation

Three mock quizzes, **20 minutes and 10 marks** each, modelled on 2026 Quiz 5 (kNN, scaling and the confusion matrix) and on Quiz 1, Question 1 (classifying tasks).

<div class="pdf-links">
<a href="l04-notes.html">L04 notes</a>
<a href="pdfs/quizzes/Quiz-5-Solution.pdf">Real Quiz 5 (2026)</a>
<a href="pdfs/quizzes/Quiz-1-Solution.pdf">Real Quiz 1 (2026)</a>
<a href="pdfs/past/Quiz-2025-2.pdf">2025 Quiz 2 (kNN)</a>
<a href="pdfs/past/Quiz-2025-3.pdf">2025 Quiz 3 (metrics)</a>
</div>

## Mock Quiz 4A

:::question Question 1 (2 marks)
Classify each task as regression, classification or neither (half a mark each).

1. Predicting a house's sale price from its features.
2. Predicting whether an email is spam.
3. Predicting the probability that a patient is readmitted within 30 days.
4. Discovering groups of similar customers when no labels are available.

:::solution
1. **Regression.**
2. **Classification.**
3. **Regression** — the output is a real number in $[0,1]$.
4. **Neither** — this is unsupervised clustering.
:::
:::

:::question Question 2 (4 marks)
The training points, with two features, are $A=(1,1)$ red, $B=(2,4)$ red, $C=(4,2)$ blue, $D=(5,5)$ blue and $E=(3,3)$ red. The test point is $T=(4,4)$.

1. Compute the Euclidean distances from $T$, and predict the label with $k=1$ and with $k=3$, breaking ties by the order in which the points are listed. *(3 marks)*
2. Why is an odd value of $k$ preferred here? *(1 mark)*

:::solution
1. The distances are
$$
\begin{aligned}
d(T,A)&=\sqrt{3^2+3^2}=\sqrt{18}\approx4.24, & d(T,B)&=\sqrt{2^2+0^2}=2, & d(T,C)&=\sqrt{0^2+2^2}=2,\\
d(T,D)&=\sqrt{1^2+1^2}=\sqrt2\approx1.41, & d(T,E)&=\sqrt{1^2+1^2}=\sqrt2\approx1.41 .
\end{aligned}
$$
   - **$k=1$.** $D$ (blue) and $E$ (red) tie at $\sqrt2$; the list order picks $D$, so the prediction is **blue**.
   - **$k=3$.** After $D$ and $E$, the points $B$ and $C$ tie at distance $2$; the list order picks $B$. The neighbours $\{D,E,B\}$ vote red $2$ to $1$, so the prediction is **red**.

   *(Any answer that states a tie rule and applies it consistently earns full credit.)*
2. With two classes and an odd $k$, the vote can never split evenly. (Ties in *distance*, as here, can still occur.)
:::
:::

:::question Question 3 (4 marks)
A fraud detector is tested on $5000$ transactions, of which $2\%$ are fraudulent (the positive class). It has recall $90\%$ and specificity $95\%$.

1. Reconstruct the confusion matrix, with rows for predictions and columns for the truth. *(2 marks)*
2. Compute the precision and the $F_1$ score. *(1 mark)*
3. Which metric should the bank watch most closely, and why? *(1 mark)*

:::solution
1. There are $P=0.02\times5000=100$ frauds and $N=4900$ legitimate transactions. Then
$$
TP=0.9\times100=90,\quad FN=10,\qquad TN=0.95\times4900=4655,\quad FP=245 .
$$

| | Fraud ($y=1$) | Legitimate ($y=0$) |
|---|---|---|
| Predicted fraud | $90$ | $245$ |
| Predicted legitimate | $10$ | $4655$ |

2. The precision and $F_1$ score are
$$
\text{precision}=\frac{90}{90+245}=\frac{90}{335}\approx0.269,\qquad
F_1=\frac{2\cdot90}{2\cdot90+245+10}=\frac{180}{435}\approx0.414 .
$$
3. In fraud detection the costly mistakes are **false positives**, which block honest customers, so the bank should watch the **specificity and, above all, the precision**. Here the specificity looks excellent at $95\%$, yet the precision is only $27\%$: most flags are false alarms, because frauds are only $2\%$ of the data.
:::
:::

## Mock Quiz 4B

:::question Question 1 (3 marks)
The labels of five training samples, to be fitted by a constant predictor $h(x)=c$, are $\{1,2,2,3,12\}$.

1. Find the value of $c$ that minimises the MSE and the value that minimises the MAE. *(2 marks)*
2. Which loss would you use if the label $12$ is probably a recording error? Why? *(1 mark)*

:::solution
1. The MSE is minimised by the mean, $c=\tfrac{1+2+2+3+12}{5}=\boxed{4}$, and the MAE by the median, $\boxed{c=2}$.
2. **The MAE.** It grows only linearly with the error, so a single wild label barely moves its minimiser (the median), whereas under the squared loss the outlier drags the mean towards it.
:::
:::

:::question Question 2 (4 marks)
Two features are age (years) and monthly income (thousands of rupees). The training points are $P_1=(30,50)$ in class A and $P_2=(32,200)$ in class B, and the test point is $T=(60,60)$.

1. Predict with 1-NN on the raw features, using squared Euclidean distance. *(1 mark)*
2. Apply min–max scaling using the ranges of the three points (age $[30,60]$, income $[50,200]$), then predict again. *(2 marks)*
3. State one rule about *which data* the scaling statistics must be computed from. *(1 mark)*

:::solution
1. On the raw features,
$$
d^2(T,P_1)=30^2+10^2=1000,\qquad d^2(T,P_2)=28^2+140^2=784+19\,600=20\,384,
$$
so the nearest neighbour is $P_1$ and the prediction is **A**.
2. After scaling, $P_1=(0,0)$, $P_2=\big(\tfrac{2}{30},1\big)\approx(0.067,1)$ and $T=\big(1,\tfrac{10}{150}\big)\approx(1,0.067)$. Then
$$
d^2(T,P_1)=1^2+0.067^2\approx1.004,\qquad d^2(T,P_2)=0.933^2+0.933^2\approx1.742,
$$
so the prediction is still **A**. Scaling changed which feature dominates the distances, but not the answer in this case.
3. The scaling statistics (minimum and maximum, or mean and standard deviation) must be computed on the **training set only** and then applied unchanged to the test points; using test data would leak information. (The question uses all three points only to keep the arithmetic simple.)
:::
:::

:::question Question 3 (3 marks)
Decide whether each statement is true or false, with a one-line reason.

1. Increasing $k$ in kNN increases the variance.
2. The training error of 1-NN on its own training set is $0$ (assuming no duplicate points).
3. The prediction cost of kNN is $O(dn)$ per query, and its training cost is negligible.

:::solution
1. **False.** A larger $k$ averages over more neighbours, giving a smoother boundary: lower variance and higher bias.
2. **True.** Every training point is its own nearest neighbour.
3. **True.** Each query computes distances to all $n$ points in $d$ dimensions, while training merely stores the data.
:::
:::

## Mock Quiz 4C

:::question Question 1 (5 marks)
A COVID test produced the following confusion matrix (rows are predictions, columns are the truth):

| | Actual $+$ | Actual $-$ |
|---|---|---|
| Predicted $+$ | $45$ | $15$ |
| Predicted $-$ | $5$ | $135$ |

Compute the accuracy, sensitivity, specificity, FPR, precision, NPV, $F_1$ score and MCC.

:::solution
The column totals are $P=45+5=50$ and $N=15+135=150$, so there are $200$ cases. Then
$$
\begin{aligned}
\text{accuracy}&=\frac{45+135}{200}=0.90, & \text{sensitivity}&=\frac{45}{50}=0.90, & \text{specificity}&=\frac{135}{150}=0.90,\\[2pt]
\text{FPR}&=\frac{15}{150}=0.10, & \text{precision}&=\frac{45}{60}=0.75, & \text{NPV}&=\frac{135}{140}\approx0.964,
\end{aligned}
$$
and
$$
F_1=\frac{2\cdot45}{2\cdot45+15+5}=\frac{90}{110}\approx0.818 .
$$
Finally,
$$
\text{MCC}=\frac{45\cdot135-15\cdot5}{\sqrt{(45+15)(45+5)(135+15)(135+5)}}=\frac{6075-75}{\sqrt{60\cdot50\cdot150\cdot140}}=\frac{6000}{\sqrt{63\,000\,000}}\approx\frac{6000}{7937}\approx\boxed{0.756}.
$$
*(Half a mark for each of the first seven metrics, and 1.5 marks for the MCC.)*
:::
:::

:::question Question 2 (3 marks)
Six instances have scores and true labels $0.9\,(+)$, $0.8\,(-)$, $0.7\,(+)$, $0.6\,(+)$, $0.4\,(-)$ and $0.3\,(-)$.

1. Give the ROC point (FPR, TPR) at threshold $t=0.65$, predicting positive when the score is at least $t$. *(1 mark)*
2. Compute the AUC. *(2 marks)*

:::solution
1. The instances with scores $0.9$, $0.8$ and $0.7$ are predicted positive. Of these, two are truly positive (out of three positives) and one is negative (out of three negatives), so
$$
(\text{FPR},\text{TPR})=\Big(\frac13,\ \frac23\Big).
$$
2. Count, for each positive, the negatives it outscores: $0.9$ beats all three negatives; $0.7$ beats $0.4$ and $0.3$; $0.6$ beats $0.4$ and $0.3$. Out of $3\times3=9$ positive–negative pairs,
$$
\text{AUC}=\frac{3+2+2}{9}=\frac79\approx\boxed{0.78}.
$$
:::
:::

:::question Question 3 (2 marks)
Suppose there are $p$ independent features, each uniform on $[0,1]$. What side length $L$ must a cube-shaped neighbourhood have to contain $1\%$ of the data when $p=1$ and when $p=50$? What does this say about kNN?

:::solution
We need $L^p=0.01$, so $L=0.01^{1/p}$:
$$
p=1:\ L=0.01;\qquad p=50:\ L=0.01^{1/50}=e^{(\ln 0.01)/50}\approx e^{-0.092}\approx0.912 .
$$
In fifty dimensions the "neighbourhood" must span $91\%$ of the range of every feature, so the neighbours are no longer close to the query and kNN's assumption that nearby points have similar labels breaks down — the curse of dimensionality.
:::
:::

:::remember
For a kNN question, list every distance, sort them, state the tie rule and vote — and remember that scaling can change the answer. For a confusion-matrix question, find $P$ and $N$ from the prevalence first, then fill in TP and FN from the recall, and FP and TN from the specificity or the precision.
:::

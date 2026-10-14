# L04 · Practice quizzes — Supervised learning, kNN, evaluation

Three mock quizzes, **20 minutes / 10 marks**, modelled on 2026 Quiz 5 (kNN + scaling + confusion matrix) and Quiz 1 Q1 (task classification).

<div class="pdf-links">
<a href="l04-notes.html">L04 notes</a>
<a href="pdfs/quizzes/Quiz-5-Solution.pdf">Real Quiz 5 (2026)</a>
<a href="pdfs/quizzes/Quiz-1-Solution.pdf">Real Quiz 1 (2026)</a>
<a href="pdfs/past/Quiz-2025-2.pdf">2025 Quiz 2 (kNN)</a>
<a href="pdfs/past/Quiz-2025-3.pdf">2025 Quiz 3 (metrics)</a>
</div>

## Mock Quiz 4A

:::question Question 1 (2 marks)
Tick Regression / Classification / Neither (0.5 each).
(i) Predicting a house's sale price from its features.
(ii) Predicting whether an email is spam.
(iii) Predicting the probability that a patient is readmitted within 30 days.
(iv) Discovering groups of similar customers with no labels.

:::solution
(i) Regression. (ii) Classification. (iii) Regression (a real number in $[0,1]$). (iv) Neither (unsupervised clustering).
:::
:::

:::question Question 2 (4 marks)
Training points (2 features) with labels: $A=(1,1)$ Red, $B=(2,4)$ Red, $C=(4,2)$ Blue, $D=(5,5)$ Blue, $E=(3,3)$ Red. Test point $T=(4,4)$.
(a) Compute the Euclidean distances from $T$ and predict with $k=1$ and $k=3$. (3)
(b) Why is an odd $k$ preferred here? (1)

:::solution
(a) $d(A)=\sqrt{9+9}=\sqrt{18}\approx4.24$; $d(B)=\sqrt{4+0}=2$; $d(C)=\sqrt{0+4}=2$; $d(D)=\sqrt{1+1}=\sqrt2\approx1.41$; $d(E)=\sqrt{1+1}=\sqrt2$.
$k=1$: tie between $D$ (Blue) and $E$ (Red) at $\sqrt2$ — needs a tie rule (e.g. list order ⇒ $D$ ⇒ **Blue**).
$k=3$: $D,E$ and then $B$/$C$ tied at 2 — $\{D,E,B\}$ gives Red 2–1, $\{D,E,C\}$ gives Blue 2–1. With list order $B$ first ⇒ **Red**. *(Credit any answer that states and applies a tie rule consistently.)*
(b) Two classes + odd $k$ ⇒ the vote can never split evenly (distance ties can still happen, as here).
:::
:::

:::question Question 3 (4 marks)
A fraud detector is tested on 5,000 transactions, 2% of which are fraudulent (positive). It has recall 90% and specificity 95%.
(a) Reconstruct the confusion matrix (rows = predicted, columns = actual). (2)
(b) Compute precision and F1. (1)
(c) Which metric should the bank watch most, and why? (1)

:::solution
(a) $P=100$, $N=4900$. TP $=0.9(100)=90$, FN $=10$. TN $=0.95(4900)=4655$, FP $=245$.

| | $y=1$ | $y=0$ |
|---|---|---|
| $\hat y=1$ | 90 | 245 |
| $\hat y=0$ | 10 | 4655 |

(b) Precision $=90/335\approx0.269$; $F_1=\frac{2\cdot90}{2\cdot90+245+10}=\frac{180}{435}\approx0.414$.
(c) Fraud: **FPs** block honest customers ⇒ watch **specificity / precision**. Here precision is only 27%: most flags are false alarms even though specificity looks high (95%) — the imbalance (2% fraud) makes precision the revealing number.
:::
:::

## Mock Quiz 4B

:::question Question 1 (3 marks)
Labels of five training samples for a constant predictor $h(x)=c$: $\{1,2,2,3,12\}$.
(a) Find the $c$ minimising MSE and the $c$ minimising MAE. (2)
(b) Which loss would you use if the label 12 is likely a recording error? Why? (1)

:::solution
(a) MSE ⇒ mean $=20/5=4$. MAE ⇒ median $=2$.
(b) **MAE**: it grows linearly so a single wild label barely moves the minimiser (median), while squared loss lets the outlier drag the mean.
:::
:::

:::question Question 2 (4 marks)
Two features: age (years) and monthly income (thousand PKR). Training: $P_1=(30,50)$ class A, $P_2=(32,200)$ class B. Test: $T=(60,60)$.
(a) Predict with 1-NN on raw features (squared Euclidean). (1)
(b) Min–max scale using the ranges of the three points (age $[30,60]$, income $[50,200]$), then predict again. (2)
(c) State one rule about *which data* the scaling statistics must come from. (1)

:::solution
(a) $d^2(T,P_1)=900+100=1000$; $d^2(T,P_2)=784+19600=20384$ ⇒ **A**.
(b) Scaled: $P_1=(0,0)$, $P_2=(\tfrac{2}{30},1)=(0.067,1)$, $T=(1,\tfrac{10}{150})=(1,0.067)$.
$d^2(T,P_1)=1+0.0044=1.0044$; $d^2(T,P_2)=(0.933)^2+(0.933)^2=1.742$ ⇒ still **A**. (Scaling changed the distances' composition but not the answer here.)
(c) Compute min/max (or mean/std) on the **training set only** and apply the same numbers to test points (avoid leakage). *(The quiz uses all three points only for arithmetic convenience.)*
:::
:::

:::question Question 3 (3 marks)
State True/False with one line each.
(a) Increasing $k$ in kNN increases variance.
(b) Training error of 1-NN on its own training set is 0 (no duplicate points).
(c) The prediction cost of kNN per query is $O(dn)$ and the training cost is negligible.

:::solution
(a) **False** — larger $k$ averages more neighbours ⇒ smoother boundary ⇒ lower variance, higher bias.
(b) **True** — each training point is its own nearest neighbour.
(c) **True** — distances to all $n$ points in $d$ dimensions; training only stores the data.
:::
:::

## Mock Quiz 4C

:::question Question 1 (5 marks)
Confusion matrix (rows predicted, columns actual) for a COVID test:

| | Actual + | Actual − |
|---|---|---|
| Predicted + | 45 | 15 |
| Predicted − | 5 | 135 |

Compute accuracy, sensitivity, specificity, FPR, precision, NPV, F1 and MCC.

:::solution
$P=50$, $N=150$, total 200.
Accuracy $=180/200=0.90$; sensitivity $=45/50=0.90$; specificity $=135/150=0.90$; FPR $=15/150=0.10$; precision $=45/60=0.75$; NPV $=135/140\approx0.964$; $F_1=90/(90+15+5)=90/110\approx0.818$.
MCC $=\dfrac{45\cdot135-15\cdot5}{\sqrt{60\cdot50\cdot150\cdot140}}=\dfrac{6075-75}{\sqrt{63\,000\,000}}=\dfrac{6000}{7937}\approx0.756$.
*(0.5 per metric, 1.5 for MCC.)*
:::
:::

:::question Question 2 (3 marks)
Scores and true labels: 0.9 (+), 0.8 (−), 0.7 (+), 0.6 (+), 0.4 (−), 0.3 (−).
(a) Give the (FPR, TPR) point at threshold $t=0.65$ (predict + if score $\ge t$). (1)
(b) Compute the AUC. (2)

:::solution
(a) Predicted +: 0.9, 0.8, 0.7 ⇒ TP 2 (of 3), FP 1 (of 3) ⇒ $(1/3,2/3)$.
(b) Pairs (positive, negative) with positive scored higher: 0.9 beats all 3 negatives; 0.7 beats 0.4, 0.3 (2); 0.6 beats 0.4, 0.3 (2) ⇒ $7/9\approx0.78$.
:::
:::

:::question Question 3 (2 marks)
With $p$ independent features uniform on $[0,1]$, what side length $L$ must a cube neighbourhood have to contain 1% of the data for $p=1$ and $p=50$? What does this say about kNN?

:::solution
$L^p=0.01\Rightarrow L=0.01^{1/p}$: $p=1$: $L=0.01$; $p=50$: $L=0.01^{0.02}=e^{-0.092}\approx0.912$. In 50 dimensions the "neighbourhood" spans 91% of every feature's range — neighbours are no longer close, so kNN's similarity assumption fails (curse of dimensionality).
:::
:::

:::remember
kNN quiz recipe: list every distance, sort, state the tie rule, vote; scaling can flip the answer. Confusion-matrix recipe: get $P$ and $N$ from prevalence first, then fill TP/FN from recall and FP/TN from specificity or precision.
:::

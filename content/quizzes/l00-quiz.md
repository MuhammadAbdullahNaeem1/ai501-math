# L00 · Practice quiz — Course overview and ML basics

One short mock quiz (**10 minutes / 6 marks**) in the style of 2026 Quiz 1 Q1.

<div class="pdf-links">
<a href="l00-notes.html">L00 notes</a>
<a href="pdfs/quizzes/Quiz-1-Solution.pdf">Real Quiz 1 (2026)</a>
</div>

:::question Question 1 (4 marks)
Tick Regression / Classification / Neither (0.5 each).
(i) Predicting tomorrow's USD/PKR exchange rate.
(ii) Predicting whether a transaction is fraudulent.
(iii) Predicting the number of steps a person takes tomorrow.
(iv) Predicting the probability that a loan will default.
(v) Predicting whether a student will take more than 10 000 steps today.
(vi) Segmenting customers into groups from transaction data with no labels.
(vii) Predicting which of 10 digits is in an image.
(viii) Sorting a list of numbers.

:::solution
(i) Regression. (ii) Classification. (iii) Regression (a count on a numerical scale). (iv) Regression (a probability in $[0,1]$). (v) Classification (yes/no). (vi) Neither — unsupervised clustering. (vii) Classification (10 classes). (viii) Neither — a fixed algorithm, no learning from data.
:::
:::

:::question Question 2 (2 marks)
(a) In one sentence each, distinguish traditional programming from machine learning. (1)
(b) What is the difference between an ML *algorithm* and a *model*? Give one example. (1)

:::solution
(a) Traditional: data + program → output. ML: data + desired outputs → the computer produces the program (model).
(b) The algorithm is the procedure we design to learn; the model is what it outputs and uses for prediction — e.g. the linear-regression algorithm outputs a model that is a vector of coefficients.
:::
:::

:::remember
"Probability of X" is regression; "whether X" is classification; no labels means neither (unsupervised).
:::

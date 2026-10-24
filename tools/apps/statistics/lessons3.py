# Lessons 7–11: regression, probability, random variables, discrete and continuous distributions
from st import *

L = []

# ---------------------------------------------------------------- L7
_r12, _r13, _r23 = F(8, 10), F(6, 10), F(5, 10)
_p123 = float(_r12 - _r13 * _r23) / math.sqrt((1 - _r13 ** 2) * (1 - _r23 ** 2))
_R123 = math.sqrt((_r12 ** 2 + _r13 ** 2 - 2 * _r12 * _r13 * _r23) / (1 - _r23 ** 2))
_b7 = F(8, 10) * 6 / 4
L.append({"id": "L7", "heat": 3, "title": "Regression & partial correlation", "hi": "समाश्रयण, बहु और आंशिक सहसंबंध", "blocks": [
 {"k": "hot", "h": "<b>Very frequent.</b> Given two regression lines, find the means, identify which line is which and find r; build a line from means, SDs and r and use it to estimate; use r = ±√(bᵧₓ·bₓᵧ); the effect of change of origin and scale on the coefficients; and, from the syllabus, multiple and partial correlation for three variables."},
 {"k": "p", "h": "Correlation says how strongly two variables move together; <b>regression</b> gives the line used to <i>predict</i> one from the other. There are two lines: <b>y on x</b> (predict y from a known x; it minimises the vertical squared errors) and <b>x on y</b> (predict x from y). Both pass through the point of means (x̄, ȳ). They coincide when r = ±1 and are perpendicular (parallel to the axes) when r = 0."},
 {"k": "formula", "title": "Two-variable regression", "rows": [
  ["Line of y on x", "y − ȳ = bᵧₓ (x − x̄)", "bᵧₓ = r σᵧ/σₓ = Cov/σₓ²"],
  ["Line of x on y", "x − x̄ = bₓᵧ (y − ȳ)", "bₓᵧ = r σₓ/σᵧ = Cov/σᵧ²"],
  ["From sums", "bᵧₓ = [nΣxy − ΣxΣy]/[nΣx² − (Σx)²]", "least squares: Σy = na + bΣx, Σxy = aΣx + bΣx²"],
  ["Link with r", "r² = bᵧₓ · bₓᵧ;  r takes the common sign of the b’s", "both b’s have the same sign as r"],
  ["Limits", "bᵧₓ · bₓᵧ ≤ 1;  (|bᵧₓ| + |bₓᵧ|)/2 ≥ |r|", "if one |b| &gt; 1, the other must be &lt; 1"],
  ["Origin and scale", "u = (x − a)/h, v = (y − c)/k → bᵧₓ = (k/h) bᵥᵤ", "origin has no effect; scale does"],
  ["Angle between lines", "tan θ = [(1 − r²)/|r|] · σₓσᵧ/(σₓ² + σᵧ²)", "r = ±1: θ = 0; r = 0: θ = 90°"],
  ["Standard error of estimate", "Sᵧₓ = σᵧ √(1 − r²)", "spread of y about the line of y on x"]]},
 {"k": "formula", "title": "Three variables: partial and multiple correlation", "rows": [
  ["Partial correlation", "r₁₂.₃ = (r₁₂ − r₁₃r₂₃) / √[(1 − r₁₃²)(1 − r₂₃²)]", "x₁ and x₂ with x₃ held fixed"],
  ["Multiple correlation", "R₁.₂₃² = (r₁₂² + r₁₃² − 2r₁₂r₁₃r₂₃)/(1 − r₂₃²)", "x₁ with the best combination of x₂, x₃"],
  ["Range of R", "0 ≤ R₁.₂₃ ≤ 1;  R₁.₂₃ ≥ |r₁₂| and ≥ |r₁₃|", "R = 1: x₁ is an exact linear function of x₂, x₃"],
  ["Link", "1 − R₁.₂₃² = (1 − r₁₂²)(1 − r₁₃.₂²)", "partial and multiple fit together"],
  ["Regression plane", "x₁ = a + b₁₂.₃ x₂ + b₁₃.₂ x₃", "b₁₂.₃ = (σ₁/σ₂)(r₁₂ − r₁₃r₂₃)/(1 − r₂₃²)"]]},
 {"k": "ex", "q": "The regression lines are x + 2y = 10 and 2x + y = 11. Find x̄, ȳ and r.", "steps": ["Means: solve the two lines together → x = 4, y = 3", "Try x + 2y = 10 as y on x: y = 5 − x/2 → bᵧₓ = −1/2; then 2x + y = 11 as x on y: x = 5.5 − y/2 → bₓᵧ = −1/2", "Product = 1/4 ≤ 1 ✓ (the other choice gives (−2)(−2) = 4 &gt; 1, impossible)", "r = −√(1/4) = −1/2 (negative, like the b’s)"], "ans": "x̄ = 4, ȳ = 3, r = −0.5"},
 {"k": "ex", "q": "x̄ = 20, ȳ = 30, σₓ = 4, σᵧ = 6 and r = 0.8. Find the line of y on x and estimate y when x = 25.", "steps": ["bᵧₓ = r σᵧ/σₓ = 0.8 × 6/4 = %s" % fmt(_b7), "y − 30 = 1.2(x − 20) → y = 1.2x + 6", "x = 25: y = 30 + 6"], "ans": "y = 1.2x + 6; estimate %s" % fmt(30 + _b7 * 5)},
 {"k": "ex", "q": "r₁₂ = 0.8, r₁₃ = 0.6, r₂₃ = 0.5. Find r₁₂.₃ and R₁.₂₃.", "steps": ["r₁₂.₃ = (0.8 − 0.6 × 0.5)/√[(1 − 0.36)(1 − 0.25)] = 0.5/√0.48 ≈ %s" % fmt(_p123, 3), "R₁.₂₃² = (0.64 + 0.36 − 2 × 0.8 × 0.6 × 0.5)/(1 − 0.25) = 0.52/0.75 ≈ %s" % fmt(_R123 ** 2, 3), "R₁.₂₃ ≈ %s" % fmt(_R123, 3)], "ans": "r₁₂.₃ ≈ %s, R₁.₂₃ ≈ %s" % (fmt(_p123), fmt(_R123))},
 {"k": "trick", "h": "<b>Which line is which?</b> Write both lines in the form y = … and x = …; the pair whose slopes multiply to a number ≤ 1 is the right one. <b>Means first:</b> solve the two lines as simultaneous equations — no need to know which is which. <b>Sign check:</b> r, bᵧₓ and bₓᵧ always share one sign."},
 {"k": "trap", "h": "<b>bᵧₓ is the coefficient of x in the line of y on x</b> — in the line of x on y, the coefficient of y is bₓᵧ, not 1/bᵧₓ. <b>Do not use the line of y on x to predict x.</b> <b>Regression coefficients change with scale</b> even though r does not. <b>A partial correlation can be larger or smaller than r₁₂</b>, and even change sign; the multiple correlation is never negative."},
 {"k": "link", "h": "The least-squares idea used here returns in fitting a trend line to a time series (L17) and as a method of estimation (L13). r² is the explained share; 1 − r² sits inside the standard error of estimate."},
 {"k": "q", "q": "bᵧₓ = 0.9 and bₓᵧ = 0.4. The correlation coefficient is:", "o": ["0.6", "0.36", "0.65", "−0.6"], "e": "r = +√(0.9 × 0.4) = √0.36 = 0.6, positive like the coefficients."}
], "sum": [
 "y on x: y − ȳ = r(σᵧ/σₓ)(x − x̄); x on y: x − x̄ = r(σₓ/σᵧ)(y − ȳ)",
 "Lines meet at (x̄, ȳ); r = ±√(bᵧₓ bₓᵧ) with the sign of the b’s; bᵧₓ bₓᵧ ≤ 1",
 "Coefficients ignore origin but not scale: bᵧₓ = (k/h) bᵥᵤ",
 "Sᵧₓ = σᵧ√(1 − r²); r = 0 → lines perpendicular, r = ±1 → lines coincide",
 "r₁₂.₃ = (r₁₂ − r₁₃r₂₃)/√[(1 − r₁₃²)(1 − r₂₃²)]; R₁.₂₃² = (r₁₂² + r₁₃² − 2r₁₂r₁₃r₂₃)/(1 − r₂₃²)"]})

# ---------------------------------------------------------------- L8
_pd = F(50, 100) * F(2, 100) + F(30, 100) * F(3, 100) + F(20, 100) * F(5, 100)
_pc = F(20, 100) * F(5, 100) / _pd
L.append({"id": "L8", "heat": 3, "title": "Probability theory", "hi": "प्रायिकता सिद्धांत", "blocks": [
 {"k": "hot", "h": "<b>Heavily tested.</b> Dice, coins, cards and balls; the addition and multiplication theorems; conditional probability; independence versus mutual exclusion; “at least one”; and Bayes’ theorem (which machine made the defective item). The definitions of probability (classical, empirical, axiomatic) are also asked."},
 {"k": "p", "h": "A <b>random experiment</b> has outcomes that cannot be predicted exactly; the set of all outcomes is the <b>sample space</b> S, and an <b>event</b> is any subset of S. Under the <b>classical</b> definition, P(A) = favourable cases / total cases when all cases are equally likely. The <b>relative-frequency</b> (empirical) definition takes the limit of the proportion of times A occurs in many trials. The <b>axiomatic</b> definition (Kolmogorov) only asks that P(A) ≥ 0, P(S) = 1 and P of a union of mutually exclusive events equals the sum of their probabilities."},
 {"k": "formula", "title": "Rules", "rows": [
  ["Complement", "P(A′) = 1 − P(A)", "“at least one” = 1 − P(none)"],
  ["Addition", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", "mutually exclusive: P(A ∩ B) = 0"],
  ["Three events", "P(A ∪ B ∪ C) = ΣP(A) − ΣP(A ∩ B) + P(A ∩ B ∩ C)", "inclusion–exclusion"],
  ["Conditional", "P(A | B) = P(A ∩ B)/P(B)", "P(B) &gt; 0"],
  ["Multiplication", "P(A ∩ B) = P(A) P(B | A)", "independent: P(A ∩ B) = P(A) P(B)"],
  ["Total probability", "P(B) = Σ P(Aᵢ) P(B | Aᵢ)", "Aᵢ mutually exclusive and exhaustive"],
  ["Bayes’ theorem", "P(Aᵢ | B) = P(Aᵢ) P(B | Aᵢ) / Σ P(Aⱼ) P(B | Aⱼ)", "posterior from prior × likelihood"],
  ["Odds", "odds in favour a : b → P = a/(a + b)", "odds against a : b → P = b/(a + b)"]]},
 {"k": "table", "title": "Counting you will need", "head": ["Situation", "Count"], "rows": [
  ["Two dice", "36 outcomes; sums 2…12 occur 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 ways"],
  ["n coins", "2ⁿ outcomes; exactly r heads in C(n, r) ways"],
  ["Pack of 52", "4 suits × 13; 26 red, 26 black; 12 face cards; 4 aces"],
  ["Choose r of n", "C(n, r) = n!/[r!(n − r)!]; arrangements P(n, r) = n!/(n − r)!"],
  ["Leap year has 53 Sundays", "2 of the 7 possible extra-day pairs → 2/7 (non-leap: 1/7)"]]},
 {"k": "ex", "q": "P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2. Find P(A ∪ B), P(A | B), and say whether A and B are independent.", "steps": ["P(A ∪ B) = 0.5 + 0.4 − 0.2 = 0.7", "P(A | B) = 0.2/0.4 = 0.5", "P(A)P(B) = 0.2 = P(A ∩ B) → independent (and P(A | B) = P(A) confirms it)"], "ans": "0.7, 0.5, independent"},
 {"k": "ex", "q": "Machines A, B and C make 50%, 30% and 20% of the output, with 2%, 3% and 5% defectives. An item is found defective. What is the chance it came from C?", "steps": ["P(D) = 0.5 × 0.02 + 0.3 × 0.03 + 0.2 × 0.05 = 0.010 + 0.009 + 0.010 = %s" % fmt(_pd, 3), "P(C | D) = 0.010/0.029 = 10/29"], "ans": "%s ≈ %s" % (Fr(_pc), fmt(_pc, 3)), "tip": "Bayes = (one branch of the tree) ÷ (sum of all branches leading to the evidence)."},
 {"k": "ex", "q": "A die is thrown 4 times. Find the probability of at least one six.", "steps": ["P(no six in one throw) = 5/6", "P(no six in 4 throws) = (5/6)⁴ = 625/1296", "P(at least one) = 1 − 625/1296"], "ans": "%s ≈ %s" % (Fr(1 - F(5, 6) ** 4), fmt(1 - F(5, 6) ** 4, 3))},
 {"k": "trick", "h": "<b>“At least one” → 1 − P(none).</b> <b>Two dice, sum s:</b> ways = 6 − |s − 7| (sum 8 → 5 ways). <b>Bayes:</b> draw a two-level tree; the answer is always “the branch you want over all the branches with that result”."},
 {"k": "trap", "h": "<b>Mutually exclusive ≠ independent.</b> Two mutually exclusive events with positive probabilities can never be independent (P(A ∩ B) = 0 ≠ P(A)P(B)). <b>P(A | B) ≠ P(B | A)</b> in general. <b>Without replacement</b> the second draw’s probabilities change. <b>Odds of 3 : 2 in favour</b> mean P = 3/5, not 3/2."},
 {"k": "link", "h": "Repeating a yes/no trial independently gives the binomial distribution (L10). Bayes’ theorem and conditional probability return in the joint and conditional distributions of L9."},
 {"k": "q", "q": "Two dice are thrown. The probability that the sum is 8 is:", "o": ["5/36", "1/6", "1/9", "7/36"], "e": "(2, 6), (3, 5), (4, 4), (5, 3), (6, 2) → 5 of 36."}
], "sum": [
 "Classical P = favourable/total; axioms: P ≥ 0, P(S) = 1, additivity for exclusive events",
 "P(A ∪ B) = P(A) + P(B) − P(A ∩ B); P(A | B) = P(A ∩ B)/P(B)",
 "Independent: P(A ∩ B) = P(A)P(B); exclusive: P(A ∩ B) = 0 — not the same thing",
 "At least one = 1 − P(none); odds a : b in favour → a/(a + b)",
 "Bayes: P(Aᵢ | B) = P(Aᵢ)P(B | Aᵢ)/ΣP(Aⱼ)P(B | Aⱼ)"]})

# ---------------------------------------------------------------- L9
_x9 = [0, 1, 2, 3]; _p9 = [F(1, 10), F(3, 10), F(4, 10), F(2, 10)]
_E9 = sum(a * b for a, b in zip(_x9, _p9)); _E29 = sum(a * a * b for a, b in zip(_x9, _p9)); _V9 = _E29 - _E9 ** 2
L.append({"id": "L9", "heat": 2, "title": "Random variables & expectation", "hi": "यादृच्छिक चर और प्रत्याशा", "blocks": [
 {"k": "hot", "h": "<b>Regular.</b> Find k so that a function is a valid pmf or pdf; compute E(X), E(X²) and Var(X) from a table; use E(aX + b) and Var(aX + b); variance of a sum or difference with covariance; marginal distributions and covariance from a joint table of two discrete variables; and Chebyshev’s inequality."},
 {"k": "p", "h": "A <b>random variable</b> X attaches a number to every outcome of an experiment. If it takes countable values it is <b>discrete</b>, with a probability mass function p(x) = P(X = x); if it takes all values in an interval it is <b>continuous</b>, with a density f(x) whose area over an interval gives the probability (so P(X = a) = 0). The <b>distribution function</b> F(x) = P(X ≤ x) rises from 0 to 1. The <b>expectation</b> E(X) is the long-run average value."},
 {"k": "formula", "title": "Single variable", "rows": [
  ["Valid pmf / pdf", "p(x) ≥ 0, Σp(x) = 1  /  f(x) ≥ 0, ∫f(x)dx = 1", "use this to find an unknown k"],
  ["Expectation", "E(X) = Σx p(x)  or  ∫x f(x) dx", "E(g(X)) = Σ g(x) p(x)"],
  ["Variance", "Var(X) = E(X²) − [E(X)]²", "never negative"],
  ["Linear change", "E(aX + b) = aE(X) + b;  Var(aX + b) = a² Var(X)", "SD(aX + b) = |a| SD(X)"],
  ["rth raw moment", "μᵣ′ = E(Xʳ)", "central: μᵣ = E[(X − μ)ʳ]"],
  ["Moment generating function", "M(t) = E(eᵗˣ); μᵣ′ = rth derivative at t = 0", "binomial: (q + peᵗ)ⁿ; Poisson: e^(m(eᵗ − 1))"],
  ["Chebyshev’s inequality", "P(|X − μ| ≥ kσ) ≤ 1/k²", "P(|X − μ| &lt; 2σ) ≥ 3/4 for any distribution"]]},
 {"k": "formula", "title": "Two variables", "rows": [
  ["Sum", "E(X + Y) = E(X) + E(Y)", "always, independent or not"],
  ["Covariance", "Cov(X, Y) = E(XY) − E(X)E(Y)", "independent → Cov = 0 (not the reverse)"],
  ["Variance of sum / difference", "Var(X ± Y) = Var X + Var Y ± 2 Cov(X, Y)", "independent: Var X + Var Y in both cases"],
  ["Product (independent)", "E(XY) = E(X) E(Y)", ""],
  ["Joint pmf", "p(x, y) ≥ 0, ΣΣ p(x, y) = 1", "marginal: p(x) = Σᵧ p(x, y)"],
  ["Conditional", "P(X = x | Y = y) = p(x, y)/p(y)", "independent if p(x, y) = p(x)p(y) for all cells"]]},
 {"k": "ex", "q": "X takes 0, 1, 2, 3 with probabilities 0.1, 0.3, 0.4, 0.2. Find E(X), Var(X) and Var(2X + 5).", "steps": ["E(X) = 0 + 0.3 + 0.8 + 0.6 = %s" % fmt(_E9), "E(X²) = 0 + 0.3 + 1.6 + 1.8 = %s" % fmt(_E29), "Var(X) = %s − %s² = %s" % (fmt(_E29), fmt(_E9), fmt(_V9)), "Var(2X + 5) = 4 × %s = %s" % (fmt(_V9), fmt(4 * _V9))], "ans": "E = %s, Var = %s, Var(2X + 5) = %s" % (fmt(_E9), fmt(_V9), fmt(4 * _V9))},
 {"k": "ex", "q": "f(x) = kx for 0 &lt; x &lt; 2 (0 elsewhere). Find k and E(X).", "steps": ["∫₀² kx dx = k × 2 = 1 → k = 1/2", "E(X) = ∫₀² x · x/2 dx = (1/2)(8/3) = 4/3"], "ans": "k = 1/2, E(X) = 4/3"},
 {"k": "ex", "q": "Joint pmf: p(0, 0) = 0.3, p(0, 1) = 0.2, p(1, 0) = 0.1, p(1, 1) = 0.4. Find Cov(X, Y). Are X and Y independent?", "steps": ["Marginals: P(X = 1) = 0.1 + 0.4 = 0.5; P(Y = 1) = 0.2 + 0.4 = 0.6", "E(X) = 0.5, E(Y) = 0.6, E(XY) = P(1, 1) = 0.4", "Cov = 0.4 − 0.5 × 0.6 = 0.1 ≠ 0"], "ans": "Cov = 0.1; not independent"},
 {"k": "trick", "h": "<b>Find k first</b> — the probabilities must add to 1. <b>Variance of a difference adds</b>: Var(X − Y) = Var X + Var Y for independent X, Y. <b>Chebyshev at k = 2 and 3</b>: at least 75% and 88.9% of any distribution lie within 2σ and 3σ of the mean."},
 {"k": "trap", "h": "<b>Var(X − Y) is not Var X − Var Y.</b> <b>E(X²) ≠ [E(X)]²</b> — the difference is the variance. <b>Cov = 0 does not imply independence.</b> <b>For a continuous variable P(X = a) = 0</b>, so P(X ≤ a) = P(X &lt; a). <b>A density can exceed 1</b>; only its area must be 1."},
 {"k": "link", "h": "The binomial, Poisson, normal and exponential (L10–L11) are special random variables with ready-made means and variances. E and Var of x̄ give the standard error (L12)."},
 {"k": "q", "q": "Var(X) = 4. What is Var(3 − 2X)?", "o": ["16", "−8", "8", "11"], "e": "Var(a + bX) = b² Var(X) = 4 × 4 = 16."}
], "sum": [
 "pmf: Σp = 1; pdf: area 1; F(x) = P(X ≤ x) rises from 0 to 1",
 "E(X) = Σx p(x); Var(X) = E(X²) − [E(X)]²",
 "E(aX + b) = aE(X) + b; Var(aX + b) = a²Var(X)",
 "Var(X ± Y) = VarX + VarY ± 2Cov; Cov = E(XY) − E(X)E(Y)",
 "Chebyshev: P(|X − μ| ≥ kσ) ≤ 1/k²"]})

# ---------------------------------------------------------------- L10
_b2 = binom(6, F(1, 2), 2)
L.append({"id": "L10", "heat": 3, "title": "Binomial, Poisson & others", "hi": "द्विपद, प्वासों और अन्य असतत बंटन", "blocks": [
 {"k": "hot", "h": "<b>Among the most asked topics.</b> Find n and p from the mean and variance, compute P(X = r) or P(X ≥ 1), use mean = variance for the Poisson, solve P(X = 1) = P(X = 2), approximate a binomial by a Poisson, and recall β₁ and β₂. Geometric, hypergeometric and discrete uniform distributions appear as one-line questions."},
 {"k": "p", "h": "A <b>Bernoulli trial</b> has two outcomes, success (probability p) and failure (q = 1 − p). Counting the successes in <b>n independent trials</b> with the same p gives the <b>binomial</b> distribution B(n, p). When n is large and p small with np = m moderate (rare events: misprints per page, accidents per day), the binomial approaches the <b>Poisson</b> distribution with mean m."},
 {"k": "formula", "title": "Binomial B(n, p)", "rows": [
  ["pmf", "P(X = r) = C(n, r) pʳ qⁿ⁻ʳ, r = 0, 1, …, n", "q = 1 − p"],
  ["Mean, variance", "np, npq", "variance &lt; mean (since q &lt; 1)"],
  ["Mode", "the integer part of (n + 1)p", "if (n + 1)p is an integer, both it and the value one below are modes"],
  ["Skewness, kurtosis", "β₁ = (q − p)²/(npq);  β₂ = 3 + (1 − 6pq)/(npq)", "symmetric when p = 1/2"],
  ["Recurrence", "P(r + 1) = [(n − r)/(r + 1)] (p/q) P(r)", "fit a whole table quickly"],
  ["Additive", "B(n₁, p) + B(n₂, p) = B(n₁ + n₂, p)", "same p needed"]]},
 {"k": "formula", "title": "Poisson P(m) and others", "rows": [
  ["Poisson pmf", "P(X = r) = e⁻ᵐ mʳ / r!, r = 0, 1, 2, …", "e⁻¹ ≈ 0.3679, e⁻² ≈ 0.1353"],
  ["Poisson mean, variance", "both equal m", "β₁ = 1/m, β₂ = 3 + 1/m"],
  ["Poisson recurrence", "P(r + 1) = [m/(r + 1)] P(r)", "additive: P(m₁) + P(m₂) = P(m₁ + m₂)"],
  ["Poisson limit of binomial", "n → ∞, p → 0, np = m", "use when n ≥ 20 and p ≤ 0.05 roughly"],
  ["Geometric (trials to 1st success)", "P(X = k) = qᵏ⁻¹p; mean 1/p, variance q/p²", "counting failures before it: mean q/p"],
  ["Hypergeometric", "P(X = k) = C(M, k)C(N − M, n − k)/C(N, n)", "draws without replacement; mean nM/N"],
  ["Discrete uniform on 1…n", "mean (n + 1)/2, variance (n² − 1)/12", "a fair die: 3.5 and 35/12"],
  ["Negative binomial", "trials to the rth success: mean r/p", "geometric is the case r = 1"]]},
 {"k": "ex", "q": "A fair coin is tossed 6 times. Find the probability of exactly 2 heads.", "steps": ["n = 6, p = q = 1/2", "P(X = 2) = C(6, 2)(1/2)⁶ = 15/64"], "ans": "%s ≈ %s" % (Fr(_b2), fmt(_b2, 3))},
 {"k": "ex", "q": "A binomial variable has mean 4 and variance 3. Find n and p.", "steps": ["npq/np = q = 3/4 → p = 1/4", "np = 4 → n = 16"], "ans": "n = 16, p = 1/4"},
 {"k": "ex", "q": "Misprints per page follow a Poisson distribution with mean 2. Find the probability that a page has no misprint, and at least one.", "steps": ["P(0) = e⁻² ≈ %s" % fmt(math.exp(-2), 4), "P(at least one) = 1 − e⁻² ≈ %s" % fmt(1 - math.exp(-2), 4)], "ans": "%s and %s" % (fmt(math.exp(-2), 4), fmt(1 - math.exp(-2), 4))},
 {"k": "ex", "q": "For a Poisson variable P(X = 1) = P(X = 2). Find the mean and P(X = 0).", "steps": ["e⁻ᵐ m = e⁻ᵐ m²/2 → m = 2", "P(0) = e⁻² ≈ 0.1353"], "ans": "m = 2, P(0) ≈ 0.1353"},
 {"k": "trick", "h": "<b>Mean and variance given?</b> q = variance/mean, then n = mean/p. If variance &gt; mean, it cannot be binomial. <b>Poisson: P(X = r) = P(X = r + 1) → m = r + 1.</b> <b>“At least one”</b>: 1 − qⁿ (binomial) or 1 − e⁻ᵐ (Poisson)."},
 {"k": "trap", "h": "<b>Binomial variance is npq, not np</b> (np is the mean). <b>Mean = variance</b> belongs to the Poisson, not the binomial. <b>The binomial needs a fixed n and a constant p</b> — draws without replacement give the hypergeometric. <b>The Poisson mean is m; its SD is √m</b>, not m."},
 {"k": "link", "h": "For large n the binomial is close to the normal with mean np and variance npq (L11). The sum of independent Poisson variables stays Poisson. Large-sample tests for proportions (L14) rest on the binomial’s mean and variance."},
 {"k": "q", "q": "A Poisson distribution has variance 9. Its standard deviation and mean are:", "o": ["3 and 9", "9 and 3", "3 and 3", "9 and 9"], "e": "Mean = variance = 9; SD = √9 = 3."}
], "sum": [
 "Binomial: C(n, r)pʳqⁿ⁻ʳ; mean np, variance npq < mean",
 "Poisson: e⁻ᵐmʳ/r!; mean = variance = m; β₁ = 1/m, β₂ = 3 + 1/m",
 "Poisson is the limit of the binomial as n → ∞, p → 0, np = m",
 "Geometric mean 1/p (trials) or q/p (failures); hypergeometric for draws without replacement",
 "Discrete uniform 1…n: mean (n + 1)/2, variance (n² − 1)/12"]})

# ---------------------------------------------------------------- L11
L.append({"id": "L11", "heat": 3, "title": "Normal, exponential & uniform", "hi": "प्रसामान्य, चरघातांकी और अन्य संतत बंटन", "blocks": [
 {"k": "hot", "h": "<b>Asked in every paper.</b> Standardise with Z = (X − μ)/σ and read areas; the 68–95–99.7 rule; the number of students between two marks; properties of the normal curve (mean = median = mode, points of inflexion, QD and MD); and the exponential distribution’s mean, variance and memoryless property. The continuous uniform is a quick formula question."},
 {"k": "p", "h": "The <b>normal distribution</b> N(μ, σ²) is the bell-shaped, symmetric curve that describes many measurements and — through the central limit theorem — the means of large samples. Every normal variable becomes the <b>standard normal</b> Z ~ N(0, 1) after Z = (X − μ)/σ, so one table of areas serves all. The <b>exponential distribution</b> models waiting times between Poisson events; it “forgets” the time already waited."},
 {"k": "formula", "title": "The normal distribution N(μ, σ²)", "rows": [
  ["Density", "f(x) = [1/(σ√(2π))] e^(−(x − μ)²/(2σ²))", "total area 1"],
  ["Shape", "symmetric; mean = median = mode = μ", "β₁ = 0, β₂ = 3"],
  ["Points of inflexion", "x = μ ± σ", "maximum height 1/(σ√(2π)) at x = μ"],
  ["Areas", "μ ± σ: 68.27%;  μ ± 2σ: 95.45%;  μ ± 3σ: 99.73%", "μ ± 1.96σ: 95%;  μ ± 2.58σ: 99%"],
  ["Deviations", "QD ≈ 0.6745σ;  MD ≈ 0.7979σ ≈ (4/5)σ", "Q₁, Q₃ = μ ∓ 0.6745σ"],
  ["Standardising", "Z = (X − μ)/σ", "P(a &lt; X &lt; b) = Φ((b − μ)/σ) − Φ((a − μ)/σ)"],
  ["Symmetry of Z", "Φ(−z) = 1 − Φ(z)", "Φ(1) ≈ 0.8413, Φ(2) ≈ 0.9772, Φ(3) ≈ 0.9987"],
  ["Linear combinations", "aX + bY is normal if X, Y are independent normals", "mean aμₓ + bμᵧ, variance a²σₓ² + b²σᵧ²"]]},
 {"k": "formula", "title": "Exponential, uniform and the normal approximation", "rows": [
  ["Exponential density", "f(x) = λe^(−λx), x ≥ 0", "mean 1/λ, variance 1/λ²"],
  ["Exponential tail", "P(X &gt; x) = e^(−λx)", "memoryless: P(X &gt; s + t | X &gt; s) = P(X &gt; t)"],
  ["Uniform U(a, b)", "f(x) = 1/(b − a) on [a, b]", "mean (a + b)/2, variance (b − a)²/12"],
  ["Normal approximation to binomial", "X ≈ N(np, npq) when np and nq are both large (≥ 5)", "add ±0.5 for continuity correction"],
  ["Normal approximation to Poisson", "X ≈ N(m, m) for large m", ""]]},
 {"k": "ex", "q": "X ~ N(50, 10²). Find P(X &gt; 70) and P(40 &lt; X &lt; 60), given Φ(1) = 0.8413 and Φ(2) = 0.9772.", "steps": ["X = 70 → z = (70 − 50)/10 = 2 → P = 1 − 0.9772 = 0.0228", "X = 40, 60 → z = −1, 1 → P = 0.8413 − (1 − 0.8413) = 0.6826"], "ans": "0.0228 and 0.6826"},
 {"k": "ex", "q": "Marks of 1,000 students are normal with mean 60 and SD 8. About how many score between 52 and 68? (Φ(1) = 0.8413)", "steps": ["52 and 68 are μ − σ and μ + σ", "Area = 2 × 0.8413 − 1 = 0.6826", "0.6826 × 1000 ≈ 683"], "ans": "about 683 students"},
 {"k": "ex", "q": "The life of a bulb is exponential with mean 5 years. Find the probability that it lasts more than 10 years, and its variance.", "steps": ["λ = 1/5", "P(X &gt; 10) = e^(−10/5) = e⁻² ≈ %s" % fmt(math.exp(-2), 4), "Variance = 1/λ² = 25"], "ans": "≈ %s; variance 25 (years²)" % fmt(math.exp(-2), 4)},
 {"k": "trick", "h": "<b>Draw the bell and shade.</b> Every normal question is an area: right tail = 1 − Φ(z), between two z’s = difference of Φ’s, symmetric band = 2Φ(z) − 1. <b>Remember 1.645, 1.96, 2.33, 2.58</b> — they are also the critical values of L14. <b>Exponential:</b> mean = SD = 1/λ."},
 {"k": "trap", "h": "<b>Use σ, not σ², in Z = (X − μ)/σ</b> — N(50, 100) has σ = 10. <b>Inflexion points are μ ± σ</b>, not μ ± 2σ. <b>The exponential’s parameter λ is a rate</b>: mean 5 means λ = 0.2, not 5. <b>The normal curve never touches the x-axis</b> (asymptotic) and its range is −∞ to ∞."},
 {"k": "link", "h": "The normal is the sampling distribution of x̄ for large samples (L12) and the source of the Z tests (L14). χ², t and F (L15) are all built from normal variables."},
 {"k": "q", "q": "For a normal distribution with mean 40 and SD 5, the points of inflexion are at:", "o": ["35 and 45", "30 and 50", "40 and 45", "37.5 and 42.5"], "e": "μ ± σ = 40 ± 5."}
], "sum": [
 "Normal: symmetric, mean = median = mode, inflexion at μ ± σ, β₁ = 0, β₂ = 3",
 "Areas: ±1σ 68.27%, ±2σ 95.45%, ±3σ 99.73%; ±1.96σ 95%, ±2.58σ 99%",
 "Z = (X − μ)/σ; Φ(−z) = 1 − Φ(z); QD ≈ 0.6745σ, MD ≈ 0.7979σ",
 "Exponential: mean 1/λ, variance 1/λ², P(X > x) = e^(−λx), memoryless",
 "Uniform U(a, b): mean (a + b)/2, variance (b − a)²/12"]})

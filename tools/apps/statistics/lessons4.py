# Lessons 12–18: sampling, estimation, tests, ANOVA, time series, index numbers
from st import *

L = []

# ---------------------------------------------------------------- L12
_se = F(12, 1) / 6
_fpc = 12 / 6 * math.sqrt((500 - 36) / (500 - 1))
_n12 = math.ceil((1.96 * 10 / 2) ** 2)
L.append({"id": "L12", "heat": 3, "title": "Sampling theory", "hi": "प्रतिचयन सिद्धांत", "blocks": [
 {"k": "hot", "h": "<b>A favourite for definitions and quick numbers.</b> Name the sampling method from a description (stratified, systematic, cluster, multistage, multiphase, quota, purposive, convenience), sampling versus non-sampling errors, the number of possible samples, the standard error of a mean or proportion with and without the finite population correction, proportional allocation, and the sample size for a given margin of error."},
 {"k": "p", "h": "A <b>sample</b> is studied to learn about a <b>population</b> more cheaply and quickly than a census. The list of units from which the sample is drawn is the <b>sampling frame</b>. In <b>probability sampling</b> every unit has a known, non-zero chance of selection, so the error can be measured; in <b>non-probability sampling</b> (judgement, convenience, quota) it cannot. The distribution of a statistic over all possible samples is its <b>sampling distribution</b>, and the SD of that distribution is the <b>standard error</b>."},
 {"k": "table", "title": "Sampling methods", "head": ["Method", "How", "Note"], "rows": [
  ["Simple random (SRS)", "every sample of size n equally likely; lottery or random-number tables", "SRSWR or SRSWOR (with / without replacement)"],
  ["Stratified", "split into homogeneous strata, draw an SRS from each", "proportional: nₕ = n Nₕ/N; Neyman: nₕ ∝ NₕSₕ"],
  ["Systematic", "random start in the first k units, then every kth unit, k = N/n", "easy; risky if the list has a period"],
  ["Cluster", "divide into groups (clusters), select whole clusters at random", "cheap; clusters should be internally varied"],
  ["Multistage", "select at stages: districts → villages → households", "used in large surveys such as the NSS"],
  ["Multiphase (double)", "a large sample gives some information, a sub-sample gives more", "same units, more detail in later phases"],
  ["Purposive / judgement", "the investigator picks “typical” units", "non-probability; bias likely"],
  ["Convenience", "whoever is easy to reach", "non-probability"],
  ["Quota", "fill fixed quotas of each category, choice left to the interviewer", "non-probability version of stratified"],
  ["Snowball", "each respondent names others", "hidden or rare populations"]]},
 {"k": "formula", "title": "Counting and standard errors", "rows": [
  ["Possible samples", "SRSWOR: C(N, n);  SRSWR (ordered): Nⁿ", "N = 5, n = 2: 10 and 25"],
  ["Chance a given unit is in an SRSWOR sample", "n/N", "same for every unit"],
  ["SE of the mean", "σ/√n (with replacement or infinite N)", "halve the SE → four times the n"],
  ["Finite population correction", "SE(x̄) = (σ/√n) √[(N − n)/(N − 1)]", "ignore it when n/N &lt; 0.05"],
  ["SE of a proportion", "√(PQ/n)", "largest at P = 1/2"],
  ["SE of a difference of means", "√(σ₁²/n₁ + σ₂²/n₂)", "independent samples"],
  ["SE of the sample SD (large n)", "σ/√(2n)", ""],
  ["Sample size for a mean", "n = (zσ/E)²", "E = allowed error; round up"],
  ["Sample size for a proportion", "n = z²PQ/E²", "use P = 1/2 when nothing is known"]]},
 {"k": "table", "title": "Errors", "head": ["Sampling error", "Non-sampling error"], "rows": [
  ["arises because only a part is observed", "arises from measurement, non-response, wrong frame, coding and processing"],
  ["absent in a census", "present in a census as well — often larger there"],
  ["falls as n rises (∝ 1/√n)", "may rise with the size of the enquiry"],
  ["can be estimated from the sample", "hard to measure; controlled by training and checks"]]},
 {"k": "ex", "q": "A population has σ = 12. Find the SE of the mean for n = 36 (a) from a very large population and (b) from a population of N = 500 drawn without replacement.", "steps": ["(a) σ/√n = 12/6 = %s" % fmt(_se), "(b) multiply by √[(500 − 36)/(500 − 1)] = √(464/499) ≈ %s" % fmt(math.sqrt(464 / 499), 3), "SE ≈ 2 × %s ≈ %s" % (fmt(math.sqrt(464 / 499), 3), fmt(_fpc, 3))], "ans": "2 and about %s" % fmt(_fpc)},
 {"k": "ex", "q": "A town has 3 wards with 2,000, 3,000 and 5,000 households. A sample of 400 is to be allocated proportionally. How many from each ward?", "steps": ["nₕ = n Nₕ/N with N = 10,000", "400 × 0.2 = 80; 400 × 0.3 = 120; 400 × 0.5 = 200"], "ans": "80, 120, 200"},
 {"k": "ex", "q": "σ = 10. How large a sample is needed so that the mean is estimated within ±2 with 95% confidence?", "steps": ["n = (zσ/E)² = (1.96 × 10/2)² = 9.8² = %s" % fmt(9.8 ** 2), "Always round up"], "ans": "%d" % _n12},
 {"k": "trick", "h": "<b>Name-the-method questions:</b> “every 10th name” → systematic; “whole villages chosen” → cluster; “state → district → village” → multistage; “each group in proportion” → stratified; “interviewer fills 50 men, 50 women as he likes” → quota. <b>SE ∝ 1/√n:</b> to halve the error, take four times the sample."},
 {"k": "trap", "h": "<b>Stratified vs cluster:</b> strata are homogeneous inside and a sample is taken from <i>every</i> stratum; clusters are heterogeneous inside and only <i>some</i> clusters are taken (all their units). <b>Quota sampling is not random</b>. <b>Non-sampling errors exist in a census too.</b> <b>SE is the SD of a statistic</b>, not the SD of the data."},
 {"k": "link", "h": "The sampling distribution of x̄ — normal for large n by the central limit theorem — is what estimation (L13) and the Z tests (L14) use; small samples bring in t, χ² and F (L14–L15)."},
 {"k": "q", "q": "Selecting every 20th card from a card index after a random start is:", "o": ["systematic sampling", "stratified sampling", "cluster sampling", "quota sampling"], "e": "A random start followed by a fixed interval k is systematic sampling."}
], "sum": [
 "Probability sampling: SRS, stratified, systematic, cluster, multistage, multiphase; non-probability: purposive, convenience, quota, snowball",
 "Samples: C(N, n) without replacement, Nⁿ with replacement; inclusion chance n/N",
 "SE(x̄) = σ/√n, × √[(N − n)/(N − 1)] for a finite population without replacement; SE(p) = √(PQ/n)",
 "Proportional allocation nₕ = nNₕ/N; Neyman nₕ ∝ NₕSₕ",
 "n = (zσ/E)² or z²PQ/E²; sampling error falls with n, non-sampling error does not"]})

# ---------------------------------------------------------------- L13
_lo = 52 - 1.96 * 8 / math.sqrt(64); _hi = 52 + 1.96 * 8 / math.sqrt(64)
L.append({"id": "L13", "heat": 3, "title": "Point & interval estimation", "hi": "आकलन: बिंदु, अंतराल और विधियाँ", "blocks": [
 {"k": "hot", "h": "<b>Part of the most heavily weighted unit (statistical inference).</b> Properties of a good estimator (unbiased, consistent, efficient, sufficient), which estimator is unbiased for what, the maximum likelihood estimators of standard distributions, the method of moments, and confidence intervals for a mean or a proportion."},
 {"k": "p", "h": "An <b>estimator</b> is a rule (a statistic) for guessing a parameter; its value in a given sample is an <b>estimate</b>. A <b>point estimate</b> is one number (x̄ = 52); an <b>interval estimate</b> gives a range with a stated <b>confidence coefficient</b> (52 ± 1.96, 95%). “95% confidence” means that intervals built this way cover the true parameter in 95% of repeated samples — not that the parameter is random."},
 {"k": "table", "title": "Properties of a good estimator T of θ", "head": ["Property", "Meaning", "Example"], "rows": [
  ["Unbiased", "E(T) = θ", "x̄ for μ; s² = Σ(x − x̄)²/(n − 1) for σ²; sample proportion p for P"],
  ["Consistent", "T → θ in probability as n grows", "x̄ is consistent; an unbiased T whose variance → 0 is consistent"],
  ["Efficient", "smallest variance among comparable estimators", "for a normal population x̄ beats the median (efficiency of median ≈ 2/π ≈ 0.64)"],
  ["Sufficient", "uses all the information the sample has about θ", "Σx for the Poisson mean; checked by the factorisation theorem"],
  ["MVUE", "unbiased with the least variance", "Cramér–Rao inequality gives the lower bound for the variance"]]},
 {"k": "formula", "title": "Methods of estimation", "rows": [
  ["Method of moments (Karl Pearson)", "equate sample moments to population moments and solve", "exponential: 1/λ = x̄ → λ̂ = 1/x̄"],
  ["Maximum likelihood (R. A. Fisher)", "choose θ to maximise L(θ) = Π f(xᵢ; θ)", "solve d(log L)/dθ = 0"],
  ["MLEs to know", "binomial p̂ = x/n; Poisson m̂ = x̄; normal μ̂ = x̄, σ̂² = Σ(x − x̄)²/n", "exponential λ̂ = 1/x̄; uniform(0, θ): θ̂ = largest observation"],
  ["MLE properties", "consistent, asymptotically normal and efficient, invariant", "may be biased (σ̂² above is biased)"],
  ["Least squares", "minimise Σ(y − fitted)²", "regression and trend lines"]]},
 {"k": "formula", "title": "Confidence intervals", "rows": [
  ["Mean, σ known (or large n)", "x̄ ± z σ/√n", "z = 1.645 (90%), 1.96 (95%), 2.58 (99%)"],
  ["Mean, σ unknown, small n", "x̄ ± t₍ₙ₋₁₎ s/√n", "s with divisor n − 1"],
  ["Proportion (large n)", "p ± z √(pq/n)", ""],
  ["Width", "2 z σ/√n", "higher confidence → wider; larger n → narrower"],
  ["Variance (normal population)", "(n − 1)s²/χ²₍upper₎ to (n − 1)s²/χ²₍lower₎", "uses χ² with n − 1 df"]]},
 {"k": "ex", "q": "A sample of 64 has mean 52; σ = 8. Find a 95% confidence interval for μ.", "steps": ["SE = 8/√64 = 1", "52 ± 1.96 × 1"], "ans": "%s to %s" % (fmt(_lo), fmt(_hi))},
 {"k": "ex", "q": "Counts 2, 4, 3, 5, 1 come from a Poisson distribution. Find the MLE of m and the MLE of P(X = 0).", "steps": ["m̂ = x̄ = 15/5 = 3", "By invariance, the MLE of P(X = 0) = e⁻ᵐ is e⁻³ ≈ %s" % fmt(math.exp(-3), 4)], "ans": "m̂ = 3; P̂(0) = e⁻³ ≈ %s" % fmt(math.exp(-3), 4)},
 {"k": "ex", "q": "Show that s² = Σ(x − x̄)²/(n − 1) is unbiased for σ² and find E of Σ(x − x̄)²/n.", "steps": ["E[Σ(x − x̄)²] = (n − 1)σ²", "So E[Σ(x − x̄)²/(n − 1)] = σ² — unbiased", "E[Σ(x − x̄)²/n] = (n − 1)σ²/n — too small by the factor (n − 1)/n"], "ans": "s² is unbiased; the divisor-n version is biased downwards"},
 {"k": "trick", "h": "<b>Moments vs ML:</b> for the binomial, Poisson, normal mean and exponential both methods give the same estimator; they differ for the uniform(0, θ) (moments: 2x̄; ML: the largest value). <b>CI width ∝ 1/√n</b>: four times the sample halves the width."},
 {"k": "trap", "h": "<b>Unbiased is not the same as consistent</b>: x₁ alone is unbiased for μ but not consistent. <b>The MLE of σ² divides by n</b> and is biased. <b>A 95% interval does not mean P(μ in this interval) = 0.95</b> once it is computed — the 95% refers to the method. <b>Use t, not z,</b> when σ is unknown and n is small."},
 {"k": "link", "h": "Confidence intervals and tests (L14) are two sides of one coin: a two-tailed 5% test rejects μ₀ exactly when μ₀ lies outside the 95% interval. Least squares is the method behind regression (L7) and trend fitting (L17)."},
 {"k": "q", "q": "An estimator T of θ is unbiased if:", "o": ["E(T) = θ", "Var(T) = 0", "T = θ for every sample", "E(T) → θ only as n → ∞"], "e": "Unbiased means its expected value equals the parameter for every sample size."}
], "sum": [
 "Unbiased E(T) = θ; consistent T → θ; efficient = least variance; sufficient = uses all information",
 "x̄ unbiased for μ; s² with n − 1 unbiased for σ²; MLE σ̂² (divisor n) is biased",
 "MLEs: p̂ = x/n, m̂ = x̄, μ̂ = x̄, λ̂ = 1/x̄; uniform(0, θ): largest value",
 "CI: x̄ ± zσ/√n; x̄ ± t s/√n (small n); p ± z√(pq/n)",
 "Methods: moments (Pearson), maximum likelihood (Fisher), least squares"]})

# ---------------------------------------------------------------- L14
_z14 = (F(103, 1) - 100) / (F(15, 1) / 6)
_zp = (F(56, 100) - F(1, 2)) / math.sqrt(0.25 / 400)
_dd = [2, 4, -1, 3, 2]; _dbar = mean(_dd); _sd = math.sqrt(svar(_dd)); _tp = float(_dbar) / (_sd / math.sqrt(5))
L.append({"id": "L14", "heat": 3, "title": "Hypothesis tests: Z and t", "hi": "परिकल्पना परीक्षण: Z और t परीक्षण", "blocks": [
 {"k": "hot", "h": "<b>The core of the paper’s inference questions.</b> Type I and Type II errors, level of significance and power, one- and two-tailed critical values, p-values, the Z test for a mean or a proportion, the t test (one sample, two samples, paired, and for a correlation coefficient) with the right degrees of freedom, and properties of the t distribution."},
 {"k": "p", "h": "A test starts with a <b>null hypothesis</b> H₀ (no difference, μ = μ₀) and an <b>alternative</b> H₁ (μ ≠ μ₀, μ &gt; μ₀ or μ &lt; μ₀). A <b>test statistic</b> measures how far the sample is from H₀ in standard-error units. If it falls in the <b>critical region</b> we reject H₀. Rejecting a true H₀ is a <b>Type I error</b> (probability α, the level of significance); accepting a false H₀ is a <b>Type II error</b> (probability β). <b>Power</b> = 1 − β is the chance of catching a false H₀."},
 {"k": "table", "title": "Critical values of Z", "head": ["Level", "Two-tailed", "Right-tailed", "Left-tailed"], "rows": [
  ["10%", "±1.645", "1.28", "−1.28"], ["5%", "±1.96", "1.645", "−1.645"], ["1%", "±2.58", "2.33", "−2.33"]]},
 {"k": "formula", "title": "Test statistics", "rows": [
  ["Z, one mean", "Z = (x̄ − μ₀)/(σ/√n)", "large n: s may replace σ"],
  ["Z, one proportion", "Z = (p − P₀)/√(P₀Q₀/n)", "uses P₀ from H₀ in the SE"],
  ["Z, two means", "Z = (x̄₁ − x̄₂)/√(σ₁²/n₁ + σ₂²/n₂)", ""],
  ["Z, two proportions", "Z = (p₁ − p₂)/√[p̂q̂(1/n₁ + 1/n₂)]", "p̂ = (n₁p₁ + n₂p₂)/(n₁ + n₂)"],
  ["t, one mean", "t = (x̄ − μ₀)/(s/√n), df n − 1", "s with divisor n − 1"],
  ["t, two independent means", "t = (x̄₁ − x̄₂)/[S√(1/n₁ + 1/n₂)], df n₁ + n₂ − 2", "S² = pooled variance"],
  ["Paired t", "t = d̄/(s_d/√n), df n − 1", "same units measured twice"],
  ["t for r", "t = r√(n − 2)/√(1 − r²), df n − 2", "tests H₀: ρ = 0"]]},
 {"k": "table", "title": "The t distribution", "head": ["Property", "Value"], "rows": [
  ["Shape", "symmetric about 0, bell-shaped, heavier tails than the normal"],
  ["Mean, variance", "0 (for ν &gt; 1); ν/(ν − 2) (for ν &gt; 2)"],
  ["Large ν", "tends to the standard normal"],
  ["Origin", "Z/√(χ²ᵥ/ν) with Z and χ² independent; due to W. S. Gosset (“Student”)"]]},
 {"k": "ex", "q": "A machine is set for a mean of 100 g; σ = 15 g. A sample of 36 has mean 103 g. Test at 5% whether the setting has changed.", "steps": ["H₀: μ = 100, H₁: μ ≠ 100 (two-tailed)", "Z = (103 − 100)/(15/6) = 3/2.5 = %s" % fmt(_z14), "|Z| = 1.2 &lt; 1.96"], "ans": "Do not reject H₀ — no evidence of a change"},
 {"k": "ex", "q": "A coin gives 224 heads in 400 tosses. Is it biased? (5%)", "steps": ["p = 0.56, P₀ = 0.5, SE = √(0.25/400) = 0.025", "Z = 0.06/0.025 = %s" % fmt(_zp), "|Z| = 2.4 &gt; 1.96"], "ans": "Reject H₀ — the coin appears biased"},
 {"k": "ex", "q": "Five workers’ outputs rise by 2, 4, −1, 3, 2 units after training. Test whether training helps (t₀.₀₅ one-tailed, 4 df = 2.132).", "steps": ["d̄ = 10/5 = 2; s_d = √[Σ(d − d̄)²/(n − 1)] = √(14/4) ≈ %s" % fmt(_sd, 3), "t = 2/(%s/√5) ≈ %s with 4 df" % (fmt(_sd, 3), fmt(_tp)), "%s &gt; 2.132" % fmt(_tp)], "ans": "Reject H₀ — training raises output"},
 {"k": "trick", "h": "<b>df rule of thumb:</b> one sample or paired → n − 1; two samples → n₁ + n₂ − 2; correlation and simple regression → n − 2. <b>Read the alternative first:</b> “≠” → two tails (1.96 at 5%); “greater/less” → one tail (1.645 at 5%). <b>p-value &lt; α → reject.</b>"},
 {"k": "trap", "h": "<b>α is P(Type I) = P(reject H₀ | H₀ true)</b> — not the probability that H₀ is true. <b>Lowering α raises β</b> for a fixed n. <b>Power = 1 − β</b>, not 1 − α. <b>For a proportion, the SE under H₀ uses P₀</b>, not the sample p. <b>“Accept H₀”</b> means only that the data do not contradict it."},
 {"k": "link", "h": "t² with ν df is F(1, ν) (L15). Tests of several means at once are ANOVA (L16). The 1.96 and 2.58 here are the same numbers as the 95% and 99% confidence intervals of L13."},
 {"k": "q", "q": "The probability of rejecting H₀ when it is true is called:", "o": ["the level of significance (Type I error)", "the power of the test", "the Type II error", "the p-value"], "e": "α = P(Type I error) = P(reject H₀ | H₀ true)."}
], "sum": [
 "Type I: reject a true H₀ (α); Type II: accept a false H₀ (β); power = 1 − β",
 "Z critical: two-tailed 1.96 (5%), 2.58 (1%); one-tailed 1.645 (5%), 2.33 (1%)",
 "Z = (x̄ − μ₀)/(σ/√n); proportion Z = (p − P₀)/√(P₀Q₀/n)",
 "t: one sample and paired df n − 1; two samples n₁ + n₂ − 2; for r: t = r√(n − 2)/√(1 − r²), df n − 2",
 "t is symmetric, mean 0, variance ν/(ν − 2), tends to N(0, 1)"]})

# ---------------------------------------------------------------- L15
_O = [8, 12, 9, 11, 6, 14]; _E = 10
_chi = sum(F((o - _E) ** 2, _E) for o in _O)
_a, _b, _c, _d = 30, 20, 10, 40; _N = _a + _b + _c + _d
_chi2 = F(_N * (_a * _d - _b * _c) ** 2, (_a + _b) * (_c + _d) * (_a + _c) * (_b + _d))
L.append({"id": "L15", "heat": 3, "title": "Chi-square & F tests", "hi": "काई-वर्ग और F परीक्षण", "blocks": [
 {"k": "hot", "h": "<b>Asked in every paper.</b> Degrees of freedom for goodness of fit and contingency tables, the χ² statistic from observed and expected frequencies, the 2 × 2 shortcut and Yates’ correction, the χ² test for a variance, the F test for two variances, and the facts linking χ², t and F (mean and variance of χ², t² = F)."},
 {"k": "p", "h": "The <b>χ² distribution</b> with ν degrees of freedom is the distribution of the sum of squares of ν independent standard normal variables. It is used to compare observed frequencies with expected ones (goodness of fit), to test the independence of two attributes, and to test a population variance. The <b>F distribution</b> is the ratio of two independent χ² variables, each divided by its df; it compares two variances and drives ANOVA."},
 {"k": "formula", "title": "χ² tests", "rows": [
  ["Statistic", "χ² = Σ (O − E)²/E", "always ≥ 0; ΣO = ΣE"],
  ["Goodness of fit, df", "k − 1 − (number of parameters estimated)", "fitting a Poisson with m from the data: k − 2"],
  ["Independence in an r × c table", "E = (row total × column total)/N; df = (r − 1)(c − 1)", "2 × 2 table: df 1"],
  ["2 × 2 shortcut", "χ² = N(ad − bc)² / [(a + b)(c + d)(a + c)(b + d)]", ""],
  ["Yates’ correction", "replace |ad − bc| by |ad − bc| − N/2", "2 × 2 tables with a small expected frequency"],
  ["Pooling", "merge classes so that each E ≥ 5", "reduce df accordingly"],
  ["Variance test", "χ² = (n − 1)s²/σ₀² = Σ(x − x̄)²/σ₀², df n − 1", "H₀: σ² = σ₀²"],
  ["χ²ᵥ facts", "mean ν, variance 2ν; skewed right; additive", "tends to normal for large ν"]]},
 {"k": "formula", "title": "F test", "rows": [
  ["Variance ratio", "F = s₁²/s₂² (larger estimate on top)", "df (n₁ − 1, n₂ − 1)"],
  ["Definition", "F = (χ²₁/ν₁)/(χ²₂/ν₂)", "due to R. A. Fisher; named by G. W. Snedecor"],
  ["Reciprocal", "F₁₋α(ν₁, ν₂) = 1/Fα(ν₂, ν₁)", "lower critical value from the upper one"],
  ["Mean", "ν₂/(ν₂ − 2) for ν₂ &gt; 2", "F is never negative"],
  ["Links", "t²ᵥ = F(1, ν);  χ²ᵥ/ν = F(ν, ∞)", "Z² = χ² with 1 df"]]},
 {"k": "ex", "q": "A die thrown 60 times shows 1 to 6 with frequencies 8, 12, 9, 11, 6, 14. Is it fair? (χ²₀.₀₅ at 5 df = 11.07)", "steps": ["E = 10 for each face", "χ² = (4 + 4 + 1 + 1 + 16 + 16)/10 = %s" % fmt(_chi), "df = 6 − 1 = 5; %s &lt; 11.07" % fmt(_chi)], "ans": "Do not reject H₀ — the die may be fair"},
 {"k": "ex", "q": "Vaccinated: 30 not attacked, 20 attacked. Not vaccinated: 10 not attacked, 40 attacked. Test independence (χ²₀.₀₅ at 1 df = 3.84).", "steps": ["a = 30, b = 20, c = 10, d = 40, N = 100", "χ² = 100(1200 − 200)²/(50 × 50 × 40 × 60) = 10⁸/(6 × 10⁶) ≈ %s" % fmt(_chi2), "%s &gt; 3.84 with 1 df" % fmt(_chi2)], "ans": "Reject independence — vaccination and attack are associated"},
 {"k": "ex", "q": "Sample 1 (n = 10) has s₁² = 24; sample 2 (n = 8) has s₂² = 12. Test equality of variances (F₀.₀₅(9, 7) = 3.68).", "steps": ["F = 24/12 = 2 with (9, 7) df", "2 &lt; 3.68"], "ans": "Do not reject H₀ — the variances may be equal"},
 {"k": "trick", "h": "<b>df for χ²:</b> cells minus constraints. Goodness of fit loses 1 for ΣO = ΣE and 1 more for each estimated parameter; an r × c table loses r + c − 1. <b>Put the larger variance on top</b> in F so you only need the upper table. <b>χ² mean = df</b>, so χ² far above its df is suspicious."},
 {"k": "trap", "h": "<b>χ² uses frequencies, never percentages or proportions.</b> <b>df for a 3 × 4 table is 6</b>, not 11. <b>Expected frequencies below 5</b> must be pooled. <b>A χ² of 0</b> means O = E exactly, which in practice is also suspicious. <b>The F test for variances assumes normal populations.</b>"},
 {"k": "link", "h": "The χ² test of independence is the testing side of association of attributes (L6). F is the test statistic of ANOVA (L16)."},
 {"k": "q", "q": "The degrees of freedom for a χ² test of independence in a 3 × 4 contingency table are:", "o": ["6", "12", "11", "7"], "e": "(r − 1)(c − 1) = 2 × 3 = 6."}
], "sum": [
 "χ² = Σ(O − E)²/E; goodness of fit df = k − 1 − parameters estimated",
 "r × c table: E = row × column/N, df = (r − 1)(c − 1); 2 × 2: N(ad − bc)²/[(a+b)(c+d)(a+c)(b+d)]",
 "χ²ᵥ: mean ν, variance 2ν; variance test χ² = (n − 1)s²/σ₀²",
 "F = s₁²/s₂² with (n₁ − 1, n₂ − 1) df, larger on top; F₁₋α(ν₁, ν₂) = 1/Fα(ν₂, ν₁)",
 "t²ᵥ = F(1, ν); pool cells with E < 5; Yates’ correction for small 2 × 2 tables"]})

# ---------------------------------------------------------------- L16
_g = {"A": [5, 7, 6], "B": [8, 9, 10], "C": [4, 5, 6]}
_all = sum(_g.values(), []); _G = sum(_all); _Nn = len(_all); _CF = F(_G ** 2, _Nn)
_TSS = sum(x * x for x in _all) - _CF; _SST = sum(F(sum(v) ** 2, len(v)) for v in _g.values()) - _CF; _SSE = _TSS - _SST
_MST = _SST / 2; _MSE = _SSE / 6; _F16 = _MST / _MSE
L.append({"id": "L16", "heat": 2, "title": "Analysis of variance (ANOVA)", "hi": "प्रसरण विश्लेषण", "blocks": [
 {"k": "hot", "h": "<b>Regular, and mostly about the ANOVA table.</b> Degrees of freedom for one-way and two-way classification, filling a missing entry (SS, df, MS or F), the F ratio, the correction factor, and the assumptions behind ANOVA. Small numeric one-way problems also appear."},
 {"k": "p", "h": "ANOVA (R. A. Fisher) tests whether several population means are equal by splitting the <b>total variation</b> into parts: variation <b>between</b> groups (due to the treatments) and variation <b>within</b> groups (error). If the treatments make no difference, the two mean squares estimate the same variance and their ratio F is near 1; a large F says the means differ. <b>One-way</b> classification has one factor (a completely randomised design); <b>two-way</b> has two factors, e.g. treatments and blocks (a randomised block design)."},
 {"k": "formula", "title": "One-way classification (k groups, N observations)", "rows": [
  ["Correction factor", "CF = G²/N", "G = grand total"],
  ["Total SS", "TSS = ΣΣx² − CF", "df N − 1"],
  ["Between (treatment) SS", "SST = Σ(Tᵢ²/nᵢ) − CF", "df k − 1"],
  ["Within (error) SS", "SSE = TSS − SST", "df N − k"],
  ["Mean squares", "MST = SST/(k − 1);  MSE = SSE/(N − k)", ""],
  ["F ratio", "F = MST/MSE with (k − 1, N − k) df", "reject equal means if F &gt; table F"]]},
 {"k": "formula", "title": "Two-way classification (r rows × c columns, one value per cell)", "rows": [
  ["Split", "TSS = SSR + SSC + SSE", "rows, columns, error"],
  ["df", "rc − 1 = (r − 1) + (c − 1) + (r − 1)(c − 1)", "e.g. 4 × 5: 19 = 3 + 4 + 12"],
  ["Row SS", "SSR = Σ(Rᵢ²/c) − CF", "column SS: Σ(Cⱼ²/r) − CF"],
  ["F ratios", "F_R = MSR/MSE,  F_C = MSC/MSE", "two tests from one table"],
  ["With m values per cell", "an interaction SS appears, df (r − 1)(c − 1)", "error df then rc(m − 1)"],
  ["Assumptions", "normal populations, independent observations, equal variances, additive effects", "equal variances = homoscedasticity"]]},
 {"k": "ex", "q": "Three methods give: A 5, 7, 6; B 8, 9, 10; C 4, 5, 6. Test whether the methods differ (F₀.₀₅(2, 6) = 5.14).", "steps": ["G = %d, N = %d, CF = %d²/%d = %s" % (_G, _Nn, _G, _Nn, fmt(_CF)), "ΣΣx² = %d → TSS = %s" % (sum(x * x for x in _all), fmt(_TSS)), "SST = (18² + 27² + 15²)/3 − %s = %s; SSE = %s" % (fmt(_CF), fmt(_SST), fmt(_SSE)), "MST = %s/2 = %s; MSE = %s/6 = %s; F = %s" % (fmt(_SST), fmt(_MST), fmt(_SSE), fmt(_MSE), fmt(_F16))], "ans": "F = %s &gt; 5.14 → the methods differ" % fmt(_F16)},
 {"k": "ex", "q": "In a one-way ANOVA with 4 treatments and 20 observations, SST = 60 and SSE = 80. Find F.", "steps": ["df: treatments 3, error 16", "MST = 60/3 = 20; MSE = 80/16 = 5", "F = 20/5"], "ans": "F = 4 with (3, 16) df"},
 {"k": "trick", "h": "<b>Fill the table by df first</b>: total N − 1 splits into treatments k − 1 and error N − k. Then MS = SS/df and F = MS/MS(error). <b>SS add up; MS do not.</b>"},
 {"k": "trap", "h": "<b>F is MS(between)/MS(within)</b>, not SS/SS. <b>Error df in two-way (one value per cell) is (r − 1)(c − 1)</b>, not rc − 1. <b>ANOVA tests means</b>, even though it is named after variance. <b>A significant F does not say which means differ.</b>"},
 {"k": "link", "h": "With two groups, one-way ANOVA is the two-sample t test: F = t². Its F ratio is the F distribution of L15; its sums of squares split variance as in L4."},
 {"k": "q", "q": "In one-way ANOVA with 5 groups and 30 observations, the error degrees of freedom are:", "o": ["25", "29", "4", "24"], "e": "N − k = 30 − 5 = 25."}
], "sum": [
 "TSS = SST + SSE; df N − 1 = (k − 1) + (N − k)",
 "CF = G²/N; TSS = ΣΣx² − CF; SST = ΣTᵢ²/nᵢ − CF",
 "F = MST/MSE with (k − 1, N − k) df",
 "Two-way: df rc − 1 = (r − 1) + (c − 1) + (r − 1)(c − 1); two F ratios",
 "Assumptions: normality, independence, equal variances, additivity"]})

# ---------------------------------------------------------------- L17
_y17 = [10, 12, 15, 16, 22]; _t17 = [-2, -1, 0, 1, 2]
_a17, _b17 = lsq(_t17, _y17)
_ma = mov_avg([20, 24, 22, 28, 30, 27, 33], 3)
_si = [F(90), F(110), F(105), F(103)]; _adj = [s * 400 / sum(_si) for s in _si]
L.append({"id": "L17", "heat": 2, "title": "Time series analysis", "hi": "काल श्रेणी विश्लेषण", "blocks": [
 {"k": "hot", "h": "<b>Quick, formula-based marks.</b> Name the component from a description (trend, seasonal, cyclical, irregular), additive versus multiplicative models, moving averages (odd and even periods), the least-squares trend with coded years, and seasonal indices: methods, adjustment to 400 (or 1200), and deseasonalising."},
 {"k": "p", "h": "A <b>time series</b> is a set of values recorded at successive times. Its movement is split into four <b>components</b>: the long-run <b>secular trend</b> (T), <b>seasonal</b> variation (S) that repeats within a year (festival sales, crop seasons), <b>cyclical</b> variation (C) that lasts more than a year (business cycles: prosperity, recession, depression, recovery) and <b>irregular</b> variation (I) caused by unpredictable events (floods, strikes)."},
 {"k": "formula", "title": "Models and trend", "rows": [
  ["Additive model", "Y = T + S + C + I", "components independent; seasonal effects add to 0"],
  ["Multiplicative model", "Y = T × S × C × I", "more common; seasonal indices average 100"],
  ["Semi-averages", "average each half; join the two points", "simple, affected by extremes"],
  ["Moving average (odd k)", "average of k successive values, placed at the middle one", "3-yearly: (y₁ + y₂ + y₃)/3, …"],
  ["Moving average (even k)", "average, then centre by averaging pairs (2 × 4 MA)", "loses values at both ends"],
  ["Least squares, linear", "y = a + bx; with Σx = 0: a = Σy/n, b = Σxy/Σx²", "code odd n as …, −1, 0, 1, …; even n as …, −3, −1, 1, 3, …"],
  ["Other curves", "parabola y = a + bx + cx²; exponential y = abˣ (fit log y)", ""]]},
 {"k": "formula", "title": "Seasonal variation", "rows": [
  ["Simple averages", "average each season over years, express as % of the grand average", "assumes no trend"],
  ["Ratio to trend", "Y/T × 100 for each period, then average by season", "multiplicative"],
  ["Ratio to moving average", "Y / (centred 12-month or 4-quarter MA) × 100", "the most widely used"],
  ["Link relatives", "each season as % of the previous one, chained", "Pearson’s method"],
  ["Adjustment", "multiply indices by 400/Σ (quarters) or 1200/Σ (months)", "additive model: make them sum to 0"],
  ["Deseasonalised value", "Y / S × 100 (multiplicative); Y − S (additive)", ""]]},
 {"k": "ex", "q": "Sales (₹ lakh) for 2019–2023 are 10, 12, 15, 16, 22. Fit a straight-line trend by least squares and estimate 2025.", "steps": ["Code x = −2, −1, 0, 1, 2 (origin 2021); Σy = 75, Σx² = 10", "Σxy = −20 − 12 + 0 + 16 + 44 = 28", "a = 75/5 = %s, b = 28/10 = %s → y = %s + %sx" % (fmt(_a17), fmt(_b17), fmt(_a17), fmt(_b17)), "2025 → x = 4: y = %s + %s × 4" % (fmt(_a17), fmt(_b17))], "ans": "%s (₹ lakh)" % fmt(_a17 + 4 * _b17)},
 {"k": "ex", "q": "Find the 3-yearly moving averages of 20, 24, 22, 28, 30, 27, 33.", "steps": ["(20 + 24 + 22)/3 = 22", "(24 + 22 + 28)/3 = 24.67, (22 + 28 + 30)/3 = 26.67", "(28 + 30 + 27)/3 = 28.33, (30 + 27 + 33)/3 = 30"], "ans": ", ".join(fmt(v) for v in _ma) + " (placed against the 2nd to 6th years)"},
 {"k": "ex", "q": "Quarterly seasonal indices come out as 90, 110, 105, 103. Adjust them.", "steps": ["Σ = 408; they should total 400", "Multiply each by 400/408"], "ans": ", ".join(fmt(v) for v in _adj)},
 {"k": "trick", "h": "<b>Within a year → seasonal; more than a year, wave-like → cyclical; sudden one-off → irregular; decades → trend.</b> <b>Moving average period = length of the cycle</b> removes that cycle. <b>Coded x with Σx = 0</b> makes a and b one-line divisions."},
 {"k": "trap", "h": "<b>Even-period moving averages must be centred.</b> <b>Seasonal indices total 400 for quarters and 1200 for months</b> (multiplicative). <b>With even n, coding by −3, −1, 1, 3 makes x half-years</b>: b is then the change per half-year, so double it for a yearly change. <b>Moving averages lose values at the ends</b> and cannot forecast."},
 {"k": "link", "h": "The least-squares trend is the regression of y on time (L7). Deseasonalised and deflated series (L18) let you compare like with like."},
 {"k": "q", "q": "A rise in demand for umbrellas every monsoon is an example of:", "o": ["seasonal variation", "secular trend", "cyclical variation", "irregular variation"], "e": "It repeats within each year at the same season."}
], "sum": [
 "Components: trend, seasonal (within a year), cyclical (> 1 year, business cycle), irregular",
 "Additive Y = T + S + C + I; multiplicative Y = T × S × C × I",
 "Trend: freehand, semi-averages, moving averages (centre even periods), least squares a = Σy/n, b = Σxy/Σx²",
 "Seasonal: simple averages, ratio to trend, ratio to moving average, link relatives; adjust to 400/1200",
 "Deseasonalised = Y/S × 100"]})

# ---------------------------------------------------------------- L18
_p0, _p1, _q0, _q1 = [10, 8, 5], [12, 10, 6], [4, 5, 10], [5, 4, 12]
_L = laspeyres(_p0, _p1, _q0); _P = paasche(_p0, _p1, _q1); _Fi = fisher(_p0, _p1, _q0, _q1)
_dot = lambda a, b: sum(x * y for x, y in zip(a, b))
L.append({"id": "L18", "heat": 3, "title": "Index numbers", "hi": "सूचकांक", "blocks": [
 {"k": "hot", "h": "<b>Asked in every paper.</b> Laspeyres, Paasche, Fisher, Marshall–Edgeworth and Dorbish–Bowley from a small table; which formula satisfies the time-reversal and factor-reversal tests; base shifting, splicing and chain indices; the cost of living index (aggregate expenditure and family budget methods); real wages and purchasing power."},
 {"k": "p", "h": "An <b>index number</b> measures the relative change in a group of related variables (prices, quantities) between a <b>base period</b> (index 100) and a <b>current period</b>. Building one raises fixed problems: its purpose, the choice of base (a normal period), the items, the source of prices, the weights, the average (AM or GM) and the formula. Weighting by base-year quantities q₀ gives <b>Laspeyres</b>; by current quantities q₁ gives <b>Paasche</b>; their geometric mean is <b>Fisher’s ideal index</b>."},
 {"k": "formula", "title": "Price index formulae (×100)", "rows": [
  ["Simple aggregative", "Σp₁/Σp₀", "fails the units test"],
  ["Simple average of relatives", "Σ(p₁/p₀ × 100)/n", "GM of relatives satisfies the circular test"],
  ["Laspeyres", "Σp₁q₀ / Σp₀q₀", "base-year quantities; tends to overstate"],
  ["Paasche", "Σp₁q₁ / Σp₀q₁", "current quantities; tends to understate"],
  ["Fisher (ideal)", "√(Laspeyres × Paasche)", "satisfies time and factor reversal"],
  ["Marshall–Edgeworth", "Σp₁(q₀ + q₁) / Σp₀(q₀ + q₁)", "satisfies time reversal"],
  ["Dorbish–Bowley", "(Laspeyres + Paasche)/2", "AM of the two"],
  ["Kelly (fixed weights)", "Σp₁q / Σp₀q, q fixed", "satisfies time reversal and the circular test"],
  ["Quantity index", "swap p and q: Laspeyres Σq₁p₀/Σq₀p₀", "value index Σp₁q₁/Σp₀q₀"]]},
 {"k": "table", "title": "Tests of adequacy", "head": ["Test", "Condition", "Satisfied by"], "rows": [
  ["Unit test", "free of the units of measurement", "every formula except the simple aggregative"],
  ["Time reversal", "P₀₁ × P₁₀ = 1", "Fisher, Marshall–Edgeworth, Kelly, simple aggregative, simple GM of relatives — not Laspeyres or Paasche"],
  ["Factor reversal", "P₀₁ × Q₀₁ = Σp₁q₁/Σp₀q₀ (the value ratio)", "Fisher only"],
  ["Circular test", "P₀₁ × P₁₂ × P₂₀ = 1", "simple GM of relatives, simple aggregative and Kelly’s fixed-weight index; not Fisher, Laspeyres or Paasche"]]},
 {"k": "formula", "title": "Using index numbers", "rows": [
  ["Chain index", "link relative = p₁/p₀ × 100; chain index = (link relative × previous chain index)/100", "base changes every year"],
  ["Base shifting", "new index = old index / (old index of the new base year) × 100", "old index 156, old index of the new base year 120 → 156/120 × 100 = 130"],
  ["Splicing", "multiply the new series by (old index of the link year)/100", "joins two series into one"],
  ["Deflating", "real value = money value / price index × 100", "real wage"],
  ["Purchasing power of money", "100 / price index", "index 125 → 0.80 (80 paise)"],
  ["Cost of living index", "aggregate expenditure: Σp₁q₀/Σp₀q₀ × 100; family budget: ΣIV/ΣV with I = p₁/p₀ × 100, V = p₀q₀", "the two methods give the same answer"]]},
 {"k": "ex", "q": "Prices p₀ = 10, 8, 5 and p₁ = 12, 10, 6; quantities q₀ = 4, 5, 10 and q₁ = 5, 4, 12. Find the Laspeyres, Paasche and Fisher indices.", "steps": ["Σp₀q₀ = 40 + 40 + 50 = %d; Σp₁q₀ = 48 + 50 + 60 = %d → L = %d/%d × 100 ≈ %s" % (_dot(_p0, _q0), _dot(_p1, _q0), _dot(_p1, _q0), _dot(_p0, _q0), fmt(_L)), "Σp₀q₁ = 50 + 32 + 60 = %d; Σp₁q₁ = 60 + 40 + 72 = %d → P = %d/%d × 100 ≈ %s" % (_dot(_p0, _q1), _dot(_p1, _q1), _dot(_p1, _q1), _dot(_p0, _q1), fmt(_P)), "F = √(%s × %s) ≈ %s" % (fmt(_L), fmt(_P), fmt(_Fi))], "ans": "L ≈ %s, P ≈ %s, F ≈ %s" % (fmt(_L), fmt(_P), fmt(_Fi))},
 {"k": "ex", "q": "A worker’s wage rose from ₹20,000 to ₹27,000 while the consumer price index rose from 100 to 150. Find the real wage and say whether the worker is better off.", "steps": ["Real wage = 27000/150 × 100 = 18,000 (in base-year rupees)", "18,000 &lt; 20,000"], "ans": "₹18,000 — worse off by 10%"},
 {"k": "ex", "q": "Indices on base 2015 = 100 are 2019: 125 and 2023: 150. Shift the base to 2019.", "steps": ["New index = old / 125 × 100", "2019 → 100; 2023 → 150/125 × 100 = 120"], "ans": "2019: 100, 2023: 120"},
 {"k": "trick", "h": "<b>L-q₀, P-q₁</b>: Laspeyres looks back (base quantities), Paasche looks at the present. <b>Fisher between them:</b> F lies between L and P, and so do Marshall–Edgeworth and Dorbish–Bowley. <b>Only Fisher passes factor reversal</b>; Laspeyres and Paasche fail both reversal tests."},
 {"k": "trap", "h": "<b>Do not swap the weights</b> — Laspeyres uses q₀ in numerator and denominator; Paasche uses q₁ in both. <b>Fisher does not satisfy the circular test.</b> <b>Base shifting divides by the old index of the new base</b>, not by 100. <b>Family budget method weights are values p₀q₀</b>, not quantities."},
 {"k": "link", "h": "An index number is a weighted mean (L3): Laspeyres is the weighted AM of price relatives with weights p₀q₀. Deflating with a CPI parallels deseasonalising a time series (L17)."},
 {"k": "q", "q": "Which index number satisfies the factor reversal test?", "o": ["Fisher’s", "Laspeyres’", "Paasche’s", "Marshall–Edgeworth’s"], "e": "Only Fisher’s ideal index satisfies P₀₁ × Q₀₁ = Σp₁q₁/Σp₀q₀."}
], "sum": [
 "Laspeyres Σp₁q₀/Σp₀q₀; Paasche Σp₁q₁/Σp₀q₁; Fisher √(L × P)",
 "Marshall–Edgeworth uses q₀ + q₁; Dorbish–Bowley = (L + P)/2",
 "Time reversal: Fisher, M–E, Kelly; factor reversal: Fisher only; circular: GM of relatives, Kelly",
 "Base shift: old/old(new base) × 100; real wage = money wage/CPI × 100; purchasing power = 100/CPI",
 "Cost of living: aggregate expenditure Σp₁q₀/Σp₀q₀ = family budget ΣIV/ΣV with V = p₀q₀"]})

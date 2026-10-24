# Lessons 3–6: central tendency, dispersion, moments, correlation
from st import *

L = []

# ---------------------------------------------------------------- L3
_f = [5, 8, 12, 9, 6]; _m = [5, 15, 25, 35, 45]; _N = sum(_f)
_mean3 = mean(_m, _f); _med3 = g_median(20, 10, 12, 13, _N); _mo3 = g_mode(20, 10, 12, 8, 9)
_q1 = g_part(10, 10, 8, 5, F(_N, 4)); _q3 = g_part(30, 10, 9, 25, F(3 * _N, 4))
_cm = F(40 * 62 + 60 * 70, 100)
assert sum(a * b for a, b in zip(_f, _m)) == 1030
L.append({"id": "L3", "heat": 3, "title": "Measures of central tendency", "hi": "केंद्रीय प्रवृत्ति की माप", "blocks": [
 {"k": "hot", "h": "<b>One of the most asked units.</b> Grouped median and mode, combined mean, a missing frequency when the mean or median is given, average speed (HM), GM of growth rates, the empirical relation Mode = 3 Median − 2 Mean, and partition values (quartiles, deciles, percentiles) all appear regularly."},
 {"k": "p", "h": "An average is one value that represents the whole data. The <b>arithmetic mean</b> balances the data (deviations add to zero); the <b>median</b> is the middle value of the ordered data; the <b>mode</b> is the most frequent value. The <b>geometric mean</b> suits ratios and growth rates; the <b>harmonic mean</b> suits rates such as speed when the distance is fixed. <b>Partition values</b> cut the ordered data into equal parts: 3 quartiles (4 parts), 9 deciles (10 parts), 99 percentiles (100 parts)."},
 {"k": "formula", "title": "Means", "rows": [
  ["Arithmetic mean", "x̄ = Σx/n;  grouped: Σfx/N", "x = class mark for grouped data"],
  ["Step deviation", "x̄ = A + (Σfu/N) × h,  u = (x − A)/h", "A = assumed mean, h = width"],
  ["Weighted mean", "x̄ʷ = Σwx / Σw", "marks with credit weights, index numbers"],
  ["Combined mean", "x̄ = (n₁x̄₁ + n₂x̄₂)/(n₁ + n₂)", "40 values with mean 62 and 60 with mean 70 → %s" % fmt(_cm)],
  ["Geometric mean", "GM = (x₁x₂…xₙ)^(1/n);  log GM = Σlog x / n", "only for positive values"],
  ["Harmonic mean", "HM = n / Σ(1/x)", "two values: 2ab/(a + b)"],
  ["Order", "AM ≥ GM ≥ HM (equal only if all values are equal)", "two values: GM² = AM × HM"]]},
 {"k": "formula", "title": "Median, mode and partition values", "rows": [
  ["Median, raw data", "value at position (n + 1)/2 of the ordered data", "even n: mean of the two middle values"],
  ["Median, grouped", "L + [(N/2 − c)/f] × h", "c = c.f. before the median class"],
  ["Mode, grouped", "L + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h", "f₁ modal class; f₀, f₂ its neighbours"],
  ["Empirical relation", "Mode ≈ 3 Median − 2 Mean", "for moderately skewed data"],
  ["Quartile Qₖ, grouped", "L + [(kN/4 − c)/f] × h", "Q₂ = median"],
  ["Decile Dₖ / percentile Pₖ", "replace kN/4 by kN/10 / kN/100", "D₅ = P₅₀ = Q₂ = median"],
  ["Raw-data positions", "Qₖ at k(n + 1)/4, Dₖ at k(n + 1)/10, Pₖ at k(n + 1)/100", "interpolate between neighbours"]]},
 {"k": "table", "title": "Properties to remember", "head": ["Property", "Mean", "Median", "Mode"], "rows": [
  ["Uses every value", "yes", "no", "no"],
  ["Affected by extreme values", "strongly", "hardly", "no"],
  ["Open-end classes", "cannot be found", "can be found", "can be found"],
  ["Minimum property", "Σ(x − A)² least at A = mean", "Σ|x − A| least at A = median", "—"],
  ["y = a + bx", "ȳ = a + bx̄", "a + b·median", "a + b·mode"],
  ["Graph", "—", "ogives", "histogram"]]},
 {"k": "ex", "q": "Find the mean, median and mode of: classes 0–10, 10–20, 20–30, 30–40, 40–50 with frequencies 5, 8, 12, 9, 6.", "steps": [
   "N = %d; class marks 5, 15, 25, 35, 45; Σfx = 25 + 120 + 300 + 315 + 270 = 1030 → mean = 1030/40 = %s" % (_N, fmt(_mean3)),
   "Cumulative frequencies 5, 13, 25, 34, 40; N/2 = 20 lies in 20–30 (L = 20, c = 13, f = 12)",
   "Median = 20 + (20 − 13)/12 × 10 = %s" % fmt(_med3),
   "Modal class 20–30: f₁ = 12, f₀ = 8, f₂ = 9 → mode = 20 + 4/(24 − 17) × 10 = %s" % fmt(_mo3)],
  "ans": "mean %s, median %s, mode %s" % (fmt(_mean3), fmt(_med3), fmt(_mo3))},
 {"k": "ex", "q": "For the same table find Q₁ and Q₃.", "steps": ["N/4 = 10 → class 10–20 (c = 5, f = 8): Q₁ = 10 + (10 − 5)/8 × 10 = %s" % fmt(_q1), "3N/4 = 30 → class 30–40 (c = 25, f = 9): Q₃ = 30 + (30 − 25)/9 × 10 = %s" % fmt(_q3)], "ans": "Q₁ = %s, Q₃ = %s" % (fmt(_q1), fmt(_q3))},
 {"k": "ex", "q": "A car goes from A to B at 40 km/h and returns at 60 km/h. Find its average speed.", "steps": ["The distance is the same both ways, so use the harmonic mean", "HM = 2 × 40 × 60/(40 + 60) = 4800/100"], "ans": "%s km/h (not 50)" % fmt(hm([40, 60])), "tip": "Equal distances → HM; equal times → AM."},
 {"k": "ex", "q": "In a moderately skewed distribution the mean is 40 and the median is 38. Estimate the mode.", "steps": ["Mode ≈ 3 Median − 2 Mean", "= 3 × 38 − 2 × 40 = 114 − 80"], "ans": "%d" % (3 * 38 - 2 * 40)},
 {"k": "trick", "h": "<b>AM ≥ GM ≥ HM</b> — use it to strike out options. For two numbers <b>GM² = AM × HM</b>: if AM = 25 and HM = 16 then GM = 20. <b>Average growth rate</b> of 10% and 20% is the GM of 1.1 and 1.2, minus 1. <b>Missing frequency:</b> write the mean (or median) formula with f unknown and solve the linear equation."},
 {"k": "trap", "h": "<b>The median class is found from N/2 on the cumulative frequencies</b>, not from the largest frequency (that gives the modal class). <b>In the mode formula f₀ and f₂ are the neighbours’ frequencies</b>, not cumulative frequencies. <b>Average speed is not the AM of the speeds</b> when the distances are equal. <b>GM is not used if any value is zero or negative</b>. In grouped formulas use class <b>boundaries</b>, not inclusive limits."},
 {"k": "link", "h": "Mean, median and mode positions tell the direction of skewness (L5). Quartiles build the quartile deviation (L4) and Bowley’s skewness (L5). The weighted mean is the backbone of index numbers (L18)."},
 {"k": "q", "q": "For two positive numbers AM = 25 and HM = 16. Their GM is:", "o": ["20", "20.5", "41", "400"], "e": "GM² = AM × HM = 400, so GM = 20."}
], "sum": [
 "x̄ = Σfx/N; combined mean = Σnᵢx̄ᵢ/Σnᵢ; weighted mean = Σwx/Σw",
 "Median = L + (N/2 − c)h/f; Mode = L + (f₁ − f₀)h/(2f₁ − f₀ − f₂)",
 "Qₖ = L + (kN/4 − c)h/f; deciles kN/10, percentiles kN/100; Q₂ = D₅ = P₅₀ = median",
 "AM ≥ GM ≥ HM; for two numbers GM² = AM·HM; HM for average speed over equal distances",
 "Mode ≈ 3 Median − 2 Mean; the mean is pulled by extreme values, the median is not"]})

# ---------------------------------------------------------------- L4
_x4 = [4, 8, 6, 10, 12]
_cv = (50 * (16 + (60 - 56) ** 2) + 50 * (36 + (52 - 56) ** 2)) / 100
_cs = math.sqrt(_cv)
assert _cv == 42
L.append({"id": "L4", "heat": 3, "title": "Measures of dispersion", "hi": "अपकिरण की माप", "blocks": [
 {"k": "hot", "h": "<b>Asked in every paper.</b> SD and variance of small data sets, combined SD of two groups, coefficient of variation (which group is more consistent), the effect of adding or multiplying by a constant, coefficients of range and of quartile deviation, mean deviation, and the population-versus-sample divisor."},
 {"k": "p", "h": "Two groups can share a mean and still look nothing alike: 49, 50, 51 and 0, 50, 100 both average 50. <b>Dispersion</b> measures the scatter around the centre. An <b>absolute</b> measure (range, QD, MD, SD) carries the units of the data; a <b>relative</b> measure (coefficient of range, of QD, of MD, of variation) is a pure number, so it can compare groups measured in different units or with different means."},
 {"k": "formula", "title": "The measures", "rows": [
  ["Range", "R = L − S", "coefficient of range = (L − S)/(L + S)"],
  ["Quartile deviation", "QD = (Q₃ − Q₁)/2", "coefficient of QD = (Q₃ − Q₁)/(Q₃ + Q₁)"],
  ["Mean deviation", "MD = Σ|x − A| / n, A = mean or median", "coefficient = MD / A; least when A = median"],
  ["Standard deviation (population)", "σ = √[Σ(x − x̄)²/n] = √(Σx²/n − x̄²)", "variance = σ²"],
  ["Sample SD (unbiased variance)", "s² = Σ(x − x̄)²/(n − 1)", "s² = nσ²/(n − 1)"],
  ["Grouped SD", "σ = h √[Σfu²/N − (Σfu/N)²]", "u = (x − A)/h"],
  ["Coefficient of variation", "CV = (σ / x̄) × 100", "lower CV → more consistent"],
  ["Combined SD", "σ² = [n₁(σ₁² + d₁²) + n₂(σ₂² + d₂²)]/(n₁ + n₂)", "dᵢ = x̄ᵢ − combined mean"]]},
 {"k": "formula", "title": "Handy results", "rows": [
  ["Change of origin and scale", "if y = a + bx: σᵧ = |b| σₓ, var(y) = b² var(x)", "adding a constant changes nothing"],
  ["Two values a, b", "SD = |a − b|/2", "half the range"],
  ["First n natural numbers", "σ² = (n² − 1)/12", "1 to 10: 99/12 = 8.25"],
  ["Order (any data)", "MD about the mean ≤ SD", "and SD ≤ range/2"],
  ["Normal distribution", "QD ≈ (2/3)σ, MD ≈ (4/5)σ", "QD : MD : SD ≈ 10 : 12 : 15"]]},
 {"k": "ex", "q": "Find the population SD and the sample SD of 4, 8, 6, 10, 12.", "steps": ["x̄ = 40/5 = 8; deviations −4, 0, −2, 2, 4; squares 16, 0, 4, 4, 16 → Σ = 40", "Population variance = 40/5 = 8 → σ = √8 ≈ %s" % fmt(sd(pvar(_x4))), "Sample variance = 40/4 = 10 → s = √10 ≈ %s" % fmt(sd(svar(_x4)))], "ans": "σ ≈ %s, s ≈ %s" % (fmt(sd(pvar(_x4))), fmt(sd(svar(_x4)))), "tip": "If the question says “sample” and asks for the unbiased estimate, divide by n − 1; for “the SD of the data” divide by n."},
 {"k": "ex", "q": "Group A: mean 60, SD 4 (50 workers). Group B: mean 52, SD 6 (50 workers). Find the combined mean and SD.", "steps": ["Combined mean = (50 × 60 + 50 × 52)/100 = 56", "d₁ = 60 − 56 = 4, d₂ = 52 − 56 = −4", "σ² = [50(16 + 16) + 50(36 + 16)]/100 = (1600 + 2600)/100 = 42", "σ = √42 ≈ %s" % fmt(_cs)], "ans": "mean 56, SD ≈ %s" % fmt(_cs)},
 {"k": "ex", "q": "Batsman A: mean 50, SD 15. Batsman B: mean 40, SD 8. Who is more consistent?", "steps": ["CV(A) = 15/50 × 100 = 30%", "CV(B) = 8/40 × 100 = 20%", "Lower CV means less relative variation"], "ans": "B is more consistent (A scores more on average)"},
 {"k": "ex", "q": "The SD of x is 5. Find the SD and variance of y = 7 − 3x.", "steps": ["Adding 7 does not change the spread", "Multiplying by −3 multiplies the SD by |−3| = 3", "σᵧ = 15, variance = 225"], "ans": "SD 15, variance 225"},
 {"k": "trick", "h": "<b>Shortcut variance:</b> mean of squares minus square of mean. <b>Consistency questions</b> are about the CV, not the SD alone. <b>Change of scale:</b> SD takes |b|, variance takes b², the mean becomes a + bx̄. <b>Equal group sizes and equal means:</b> the combined variance is just the average of the two variances."},
 {"k": "trap", "h": "<b>Population vs sample SD:</b> n or n − 1 — read the question. <b>The SD never changes when a constant is added</b>, but the CV does (the mean changes). <b>A negative multiplier</b> does not make the SD negative. <b>The combined SD</b> is not the average of the two SDs — the d² terms add the gap between the means. <b>The coefficient of QD</b> uses Q₃ + Q₁ in the denominator, not 2 × median."},
 {"k": "link", "h": "Variance is the second central moment μ₂ (L5); σₓ and σᵧ enter r and the regression coefficients (L6–L7); the standard error of x̄ is σ/√n (L12)."},
 {"k": "q", "q": "Each value of a data set is multiplied by 2 and then 5 is added. The variance becomes:", "o": ["4 times the old variance", "2 times the old variance", "4 times the old variance plus 5", "unchanged"], "e": "var(a + bx) = b² var(x) = 4 var(x); the added 5 has no effect."}
], "sum": [
 "Range, QD = (Q₃ − Q₁)/2, MD = Σ|x − A|/n, SD = √[Σ(x − x̄)²/n]",
 "Relative measures: (L − S)/(L + S), (Q₃ − Q₁)/(Q₃ + Q₁), MD/A, CV = 100σ/x̄",
 "Sample (unbiased) variance divides by n − 1: s² = nσ²/(n − 1)",
 "y = a + bx → σᵧ = |b|σₓ; a shift of origin has no effect",
 "Combined σ² = Σnᵢ(σᵢ² + dᵢ²)/Σnᵢ; normal: QD : MD : SD ≈ 10 : 12 : 15"]})

# ---------------------------------------------------------------- L5
_m1, _m2, _m3, _m4 = 1, 9, 20, 200     # raw moments about A = 5 (example)
_c2 = _m2 - _m1 ** 2; _c3 = _m3 - 3 * _m2 * _m1 + 2 * _m1 ** 3; _c4 = _m4 - 4 * _m3 * _m1 + 6 * _m2 * _m1 ** 2 - 3 * _m1 ** 4
_b1 = F(_c3 ** 2, _c2 ** 3); _b2 = F(_c4, _c2 ** 2)
assert _c3 < 0 and _b2 < 3
L.append({"id": "L5", "heat": 2, "title": "Moments, skewness & kurtosis", "hi": "आघूर्ण, वैषम्य और ककुदता", "blocks": [
 {"k": "hot", "h": "<b>Regular, formula-driven questions:</b> convert raw moments to central moments, compute Karl Pearson’s or Bowley’s coefficient of skewness, find β₁ or β₂ and name the curve (lepto-, meso- or platykurtic), and say where the mean, median and mode lie in a skewed distribution."},
 {"k": "p", "h": "A <b>moment</b> is the average of a power of deviations. The 1st central moment is always 0, the 2nd is the variance, the 3rd measures <b>skewness</b> (lack of symmetry) and the 4th measures <b>kurtosis</b> (how peaked or flat the curve is compared with the normal curve). In a <b>positively skewed</b> distribution the long tail is on the right and Mean &gt; Median &gt; Mode; in a negatively skewed one the order reverses."},
 {"k": "formula", "title": "Moments", "rows": [
  ["Raw moment about A", "μᵣ′ = Σ(x − A)ʳ / n", "about the origin: A = 0"],
  ["Central moment", "μᵣ = Σ(x − x̄)ʳ / n", "μ₀ = 1, μ₁ = 0, μ₂ = σ²"],
  ["μ₂ from raw moments", "μ₂ = μ₂′ − μ₁′²", "the variance shortcut again"],
  ["μ₃", "μ₃ = μ₃′ − 3μ₂′μ₁′ + 2μ₁′³", "its sign gives the direction of skewness"],
  ["μ₄", "μ₄ = μ₄′ − 4μ₃′μ₁′ + 6μ₂′μ₁′² − 3μ₁′⁴", "never negative"],
  ["Mean from raw moments", "x̄ = A + μ₁′", "μ₁′ is the mean of the deviations from A"],
  ["Change of origin / scale", "central moments ignore the origin; μᵣ(bx) = bʳ μᵣ(x)", "β₁ and β₂ do not change"]]},
 {"k": "formula", "title": "Skewness and kurtosis", "rows": [
  ["Karl Pearson", "Sk = (Mean − Mode)/σ = 3(Mean − Median)/σ", "usually between −1 and 1; limits ±3"],
  ["Bowley (quartile)", "Sk = (Q₃ + Q₁ − 2·Median)/(Q₃ − Q₁)", "always between −1 and 1"],
  ["Kelly", "uses P₁₀, P₉₀ in place of Q₁, Q₃", "(P₉₀ + P₁₀ − 2P₅₀)/(P₉₀ − P₁₀)"],
  ["Moment skewness", "β₁ = μ₃²/μ₂³;  γ₁ = μ₃/σ³", "β₁ = 0 for a symmetric curve"],
  ["Kurtosis", "β₂ = μ₄/μ₂²;  γ₂ = β₂ − 3", "normal curve: β₂ = 3"],
  ["Shapes", "β₂ &gt; 3 leptokurtic (peaked); = 3 mesokurtic; &lt; 3 platykurtic (flat)", "always β₂ ≥ β₁ + 1"],
  ["Percentile kurtosis", "K = QD/(P₉₀ − P₁₀)", "about 0.263 for the normal curve"]]},
 {"k": "ex", "q": "The first four moments about 5 are 1, 9, 20 and 200. Find the mean and the central moments μ₂, μ₃, μ₄, and comment on the shape.", "steps": ["Mean = 5 + 1 = 6", "μ₂ = 9 − 1² = %d" % _c2, "μ₃ = 20 − 3(9)(1) + 2(1)³ = %d" % _c3, "μ₄ = 200 − 4(20)(1) + 6(9)(1)² − 3(1)⁴ = %d" % _c4, "β₁ = (%d)²/%d³ = %s; β₂ = %d/%d² = %s" % (_c3, _c2, fmt(_b1, 3), _c4, _c2, fmt(_b2, 3))], "ans": "mean 6; μ₂ = %d, μ₃ = %d, μ₄ = %d; slightly negatively skewed (μ₃ &lt; 0) and platykurtic (β₂ ≈ %s &lt; 3)" % (_c2, _c3, _c4, fmt(_b2))},
 {"k": "ex", "q": "Mean = 45, median = 42, SD = 9. Find Karl Pearson’s coefficient of skewness.", "steps": ["Sk = 3(Mean − Median)/σ", "= 3(45 − 42)/9 = 9/9"], "ans": "+%s (positively skewed)" % Fr(3 * (45 - 42), 9)},
 {"k": "ex", "q": "Q₁ = 20, median = 30, Q₃ = 50. Find Bowley’s coefficient of skewness.", "steps": ["Sk = (Q₃ + Q₁ − 2 Md)/(Q₃ − Q₁)", "= (50 + 20 − 60)/(50 − 20) = 10/30"], "ans": "%s ≈ %s (positive)" % (Fr(10, 30), fmt(F(10, 30), 3))},
 {"k": "trick", "h": "<b>The order of the averages follows the tail:</b> tail to the right → Mean &gt; Median &gt; Mode, because the mean is dragged furthest towards the tail. <b>μ₂ = μ₂′ − μ₁′²</b> is the variance shortcut in disguise. <b>Mesokurtic = 3</b>: “meso” means middle — the normal curve."},
 {"k": "trap", "h": "<b>Lepto = peaked = β₂ &gt; 3</b>; platy = flat = β₂ &lt; 3 — do not swap them. <b>Bowley’s measure lies in [−1, 1]</b>; Karl Pearson’s can in theory reach ±3. <b>β₁ is never negative</b> (it is a square): use the sign of μ₃ or γ₁ for the direction. <b>Raw moments change with the origin</b>; central moments do not."},
 {"k": "link", "h": "μ₂ is the variance of L4. The normal distribution (L11) has β₁ = 0 and β₂ = 3; the Poisson (L10) has β₁ = 1/m and β₂ = 3 + 1/m."},
 {"k": "q", "q": "A distribution with β₂ = 2.4 is:", "o": ["platykurtic", "leptokurtic", "mesokurtic", "positively skewed"], "e": "β₂ below 3 means a flatter top than the normal curve — platykurtic."}
], "sum": [
 "μ₁ = 0, μ₂ = variance; μ₂ = μ₂′ − μ₁′², μ₃ = μ₃′ − 3μ₂′μ₁′ + 2μ₁′³",
 "Pearson Sk = (Mean − Mode)/σ = 3(Mean − Median)/σ",
 "Bowley Sk = (Q₃ + Q₁ − 2Md)/(Q₃ − Q₁), between −1 and 1",
 "β₁ = μ₃²/μ₂³, β₂ = μ₄/μ₂²; β₂ = 3 meso, > 3 lepto, < 3 platy",
 "Positive skew: tail to the right, Mean > Median > Mode"]})

# ---------------------------------------------------------------- L6
_x6 = [1, 2, 3, 4, 5]; _y6 = [2, 4, 5, 4, 5]
_r6 = pearson(_x6, _y6)
assert abs(_r6 - 6 / math.sqrt(60)) < 1e-12
_rx, _ry = [1, 2, 3, 4, 5], [2, 4, 1, 3, 5]
_d2 = spearman_d2(_rx, _ry); _rho = spearman(_rx, _ry)
_yq = F(30 * 10 - 20 * 40, 30 * 10 + 20 * 40)
L.append({"id": "L6", "heat": 3, "title": "Correlation & association of attributes", "hi": "सहसंबंध और गुणों का साहचर्य", "blocks": [
 {"k": "hot", "h": "<b>A high-yield unit.</b> Karl Pearson’s r from sums, the effect of change of origin and scale, Spearman’s rank correlation (with and without ties), r² as explained variation, and Yule’s coefficient of association for attributes are all common. Correlation and regression together usually give several questions."},
 {"k": "p", "h": "<b>Correlation</b> measures how closely two variables move together in a straight-line pattern. A <b>scatter diagram</b> gives the first picture: points rising to the right show positive correlation, falling show negative, a shapeless cloud shows little or none. Karl Pearson’s <b>r</b> puts a number on it, from −1 (perfect negative) to +1 (perfect positive). Correlation is not causation: two variables may both depend on a third."},
 {"k": "formula", "title": "Karl Pearson’s coefficient", "rows": [
  ["Definition", "r = Cov(x, y)/(σₓσᵧ)", "Cov = Σ(x − x̄)(y − ȳ)/n"],
  ["From sums", "r = [nΣxy − ΣxΣy] / √{[nΣx² − (Σx)²][nΣy² − (Σy)²]}", "no means needed"],
  ["From deviations", "r = Σdₓdᵧ / √(Σdₓ² Σdᵧ²)", "deviations from the means"],
  ["Range", "−1 ≤ r ≤ 1", "r = 0: no <i>linear</i> relation"],
  ["Origin and scale", "r(a + bx, c + dy) = ± r(x, y)", "the sign flips only if b and d have opposite signs"],
  ["Coefficient of determination", "r²", "share of the variation in y explained by x"],
  ["Probable error", "PE = 0.6745 (1 − r²)/√n", "r is taken as significant if r &gt; 6 PE"]]},
 {"k": "formula", "title": "Rank correlation and attributes", "rows": [
  ["Spearman’s ρ", "ρ = 1 − 6Σd² / [n(n² − 1)]", "d = difference of ranks"],
  ["With ties", "add (m³ − m)/12 to Σd² for each group of m tied values", "tied values get the average rank"],
  ["Yule’s Q", "Q = [(AB)(αβ) − (Aβ)(αB)] / [(AB)(αβ) + (Aβ)(αB)]", "−1 ≤ Q ≤ 1"],
  ["Independence of attributes", "(AB) = (A)(B)/N", "then Q = 0"],
  ["Coefficient of colligation", "Y = (1 − √k)/(1 + √k), k = (Aβ)(αB)/[(AB)(αβ)]", "Q = 2Y/(1 + Y²)"],
  ["Consistency", "no class frequency may be negative", "e.g. (AB) ≤ (A) and (AB) ≥ (A) + (B) − N"]]},
 {"k": "ex", "q": "Find r for x: 1, 2, 3, 4, 5 and y: 2, 4, 5, 4, 5.", "steps": ["x̄ = 3, ȳ = 4; dₓ = −2, −1, 0, 1, 2; dᵧ = −2, 0, 1, 0, 1", "Σdₓdᵧ = 4 + 0 + 0 + 0 + 2 = 6; Σdₓ² = 10; Σdᵧ² = 4 + 0 + 1 + 0 + 1 = 6", "r = 6/√(10 × 6) = 6/√60"], "ans": "r ≈ %s" % fmt(_r6)},
 {"k": "ex", "q": "Two judges rank 5 entries: Judge 1 gives 1, 2, 3, 4, 5 and Judge 2 gives 2, 4, 1, 3, 5. Find Spearman’s ρ.", "steps": ["d = −1, −2, 2, 1, 0 → Σd² = 1 + 4 + 4 + 1 + 0 = %s" % fmt(_d2), "ρ = 1 − 6 × 10/(5 × 24) = 1 − 60/120"], "ans": "ρ = %s" % fmt(_rho)},
 {"k": "ex", "q": "Of 100 people, 30 are literate and employed, 20 literate and unemployed, 40 illiterate and employed, 10 illiterate and unemployed. Find Yule’s Q between literacy and employment.", "steps": ["(AB) = 30, (Aβ) = 20, (αB) = 40, (αβ) = 10", "Q = (30 × 10 − 20 × 40)/(30 × 10 + 20 × 40) = (300 − 800)/1100"], "ans": "Q = %s ≈ %s (negative association)" % (Fr(_yq).replace("-", "−"), fmt(_yq))},
 {"k": "trick", "h": "<b>Change of origin and scale:</b> r survives any shift and any positive scaling — use u = (x − a)/h to shrink the numbers. <b>If y = a + bx exactly</b>, r = +1 for b &gt; 0 and −1 for b &lt; 0. <b>Σd = 0</b> in rank correlation — a quick check of your ranks."},
 {"k": "trap", "h": "<b>r = 0 does not mean independent</b> — y = x² on x = −2, −1, 0, 1, 2 gives r = 0 with a perfect relation. <b>r² is not r:</b> r = 0.8 explains 64% of the variation, not 80%. <b>Spearman with ties:</b> give the average rank and add the correction. <b>Ranks in opposite order</b> (one judge’s best is the other’s worst) give ρ = −1."},
 {"k": "link", "h": "r links the two regression coefficients (L7): r² = bᵧₓ·bₓᵧ. The χ² test of independence (L15) is the testing version of association of attributes."},
 {"k": "q", "q": "If r(x, y) = 0.6, what is r(u, v) for u = (x − 5)/2 and v = (40 − y)/3?", "o": ["−0.6", "0.6", "−0.4", "0.4"], "e": "Origins do not matter; the scale factors 1/2 and −1/3 have opposite signs, so r changes sign: −0.6."}
], "sum": [
 "r = Cov/(σₓσᵧ) = [nΣxy − ΣxΣy]/√{[nΣx² − (Σx)²][nΣy² − (Σy)²]}, −1 ≤ r ≤ 1",
 "r is unaffected by origin and scale except for its sign; r² = explained share",
 "Spearman ρ = 1 − 6Σd²/[n(n² − 1)]; ties: add (m³ − m)/12",
 "Yule’s Q = (AD − BC)/(AD + BC); independence: (AB) = (A)(B)/N",
 "r = 0 means no linear relation, not independence; correlation is not causation"]})

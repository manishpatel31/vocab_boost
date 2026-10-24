# Questions for L3–L6
from st import *

# ---------- L3 central tendency ----------
_d = [12, 15, 18, 20, 25]
Q("L3", "The arithmetic mean of 12, 15, 18, 20 and 25 is:", ["@", "17", "20", "22.5"], "Σx = 90, n = 5 → 90/5 = 18.", fmt(mean(_d)))
_d = [7, 3, 9, 4, 12, 8]
Q("L3", "The median of 7, 3, 9, 4, 12, 8 is:", ["@", "9", fmt(mean(_d)), "8"], "Ordered: 3, 4, 7, 8, 9, 12. Even n → mean of the 3rd and 4th values: (7 + 8)/2 = 7.5.", fmt(median(_d)))
_d = [4, 6, 6, 7, 9, 6, 7, 4, 6, 9]
Q("L3", "The mode of 4, 6, 6, 7, 9, 6, 7, 4, 6, 9 is:", ["@", "7", "9", "6.4"], "6 occurs four times, more often than any other value.", mode(_d))
Q("L3", "A class of 30 students has mean marks 60 and another class of 20 students has mean marks 70. The combined mean is:", ["@", "65", "66", "62"], "(30 × 60 + 20 × 70)/50 = 3200/50 = 64. The simple average 65 ignores the class sizes.", fmt(F(30 * 60 + 20 * 70, 50)), hy=True)
Q("L3", "A student scores 70, 80 and 60 in three papers carrying weights 3, 2 and 5. The weighted mean score is:", ["@", "70", "65", "68"], "(70 × 3 + 80 × 2 + 60 × 5)/10 = (210 + 160 + 300)/10 = 67.", fmt(mean([70, 80, 60], [3, 2, 5])))
Q("L3", "The mean of five numbers is 20. Four of them are 14, 18, 22 and 25. The fifth number is:", ["@", "20", "19.75", "100"], "Total = 5 × 20 = 100; the four add to 79, so the fifth is 21.", 100 - (14 + 18 + 22 + 25))
Q("L3", "The mean of 50 observations was 36. Later it was found that an observation 48 had been taken as 23. The corrected mean is:", ["@", "35.5", "36.25", "37"], "Correct total = 1800 − 23 + 48 = 1825; 1825/50 = 36.5.", fmt(F(50 * 36 - 23 + 48, 50)))
Q("L3", "The geometric mean of 2, 8 and 32 is:", ["@", "14", "16", "6"], "GM = (2 × 8 × 32)^(1/3) = 512^(1/3) = 8. (14 is the AM.)", fmt(gm([2, 8, 32])))
Q("L3", "The harmonic mean of 2, 3 and 6 is:", ["@", "3.67", "2", "4"], "HM = 3/(1/2 + 1/3 + 1/6) = 3/1 = 3. (3.67 is the AM.)", fmt(hm([2, 3, 6])))
Q("L3", "A cyclist rides to a town at 30 km/h and returns along the same road at 20 km/h. The average speed for the round trip is:", ["@", "25 km/h", "24.5 km/h", "50 km/h"], "Equal distances → HM = 2 × 30 × 20/(30 + 20) = 1200/50 = 24 km/h.", fmt(hm([30, 20])) + " km/h", hy=True)
Q("L3", "A car runs for 1 hour at 30 km/h and then for 1 hour at 20 km/h. Its average speed is:", ["25 km/h", "24 km/h", "24.5 km/h", "50 km/h"], "Equal times → AM: total 50 km in 2 hours = 25 km/h.")
assert F(30 + 20, 2) == 25
Q("L3", "For two positive numbers AM = 10 and GM = 8. Their HM is:", ["@", "6", "9", "12.5"], "For two numbers GM² = AM × HM → HM = 64/10 = 6.4.", fmt(F(64, 10)))
Q("L3", "In a moderately skewed distribution the mean is 52 and the mode is 46. The median is approximately:", ["@", "49", "48", "54"], "Mode = 3 Median − 2 Mean → Median = (Mode + 2 Mean)/3 = (46 + 104)/3 = 50.", fmt(F(46 + 2 * 52, 3)), hy=True)
Q("L3", "Which of the following is always true for a set of positive observations?", ["AM ≥ GM ≥ HM", "HM ≥ GM ≥ AM", "GM ≥ AM ≥ HM", "AM ≥ HM ≥ GM"], "AM ≥ GM ≥ HM, with equality only when all the observations are equal.")
_f = [4, 6, 10, 7, 3]; _N = sum(_f)
_med = g_median(30, 10, 10, 10, _N)
Q("L3", "Find the median: classes 10–20, 20–30, 30–40, 40–50, 50–60 with frequencies 4, 6, 10, 7, 3.", ["@", fmt(g_median(30, 10, 10, 4, _N)), fmt(mean([15, 25, 35, 45, 55], _f)), "45"], "N = 30, N/2 = 15; c.f. 4, 10, 20 → median class 30–40 (c = 10, f = 10): 30 + (15 − 10)/10 × 10 = 35.", fmt(_med), hy=True)
_mo = g_mode(30, 10, 10, 6, 7)
Q("L3", "Find the mode: classes 10–20, 20–30, 30–40, 40–50, 50–60 with frequencies 4, 6, 10, 7, 3.", ["@", "35", fmt(30 + F(10 - 7, 7) * 10), fmt(30 + F(4, 2 * 10 + 6 + 7) * 10)], "Modal class 30–40: f₁ = 10, f₀ = 6, f₂ = 7 → 30 + (10 − 6)/(20 − 6 − 7) × 10 = 30 + 40/7 = 35.71.", fmt(_mo))
Q("L3", "Find the first quartile Q₁: classes 10–20, 20–30, 30–40, 40–50, 50–60 with frequencies 4, 6, 10, 7, 3.", ["@", "27.5", "22.5", fmt(g_part(20, 10, 6, 0, F(_N, 4)))], "N/4 = 7.5 → class 20–30 (c = 4, f = 6): 20 + (7.5 − 4)/6 × 10 = 25.83.", fmt(g_part(20, 10, 6, 4, F(_N, 4))))
Q("L3", "Find the third quartile Q₃: classes 10–20, 20–30, 30–40, 40–50, 50–60 with frequencies 4, 6, 10, 7, 3.", ["@", "42.5", "45", "41.43"], "3N/4 = 22.5 → class 40–50 (c = 20, f = 7): 40 + (22.5 − 20)/7 × 10 = 43.57.", fmt(g_part(40, 10, 7, 20, F(3 * _N, 4))))
_d = [2, 5, 7, 8, 10, 12, 15, 18, 20, 22, 25]
Q("L3", "For the ordered data 2, 5, 7, 8, 10, 12, 15, 18, 20, 22, 25, the third quartile is:", ["@", "18", "22", "12"], "Q₃ is at position 3(n + 1)/4 = 3 × 12/4 = 9 → the 9th value, 20.", _d[9 - 1])
Q("L3", "The fifth decile D₅ of a distribution is the same as its:", ["median", "mean", "mode", "third quartile"], "D₅ = P₅₀ = Q₂ = median: half the values lie below it.")
Q("L3", "The sum of squared deviations Σ(x − A)² is least when A is the:", ["arithmetic mean", "median", "mode", "geometric mean"], "Σ(x − A)² = Σ(x − x̄)² + n(x̄ − A)², which is smallest at A = x̄.")
Q("L3", "The sum of absolute deviations Σ|x − A| is least when A is the:", ["median", "arithmetic mean", "mode", "harmonic mean"], "This minimum property belongs to the median.")
Q("L3", "Which average can be found for a distribution with open-end classes?", ["Median", "Arithmetic mean", "Geometric mean", "Harmonic mean"], "The median needs only the cumulative frequencies around the middle, not the class marks of the end classes.")
_sol = [f for f in range(0, 50) if mean([5, 15, 25, 35], [5, f, 10, 5]) == 20]
Q("L3", "Classes 0–10, 10–20, 20–30, 30–40 have frequencies 5, f, 10, 5. If the mean is 20, then f is:", ["@", "5", "15", "8"], "(25 + 15f + 250 + 175)/(20 + f) = 20 → 450 + 15f = 400 + 20f → f = 10.", _sol[0])
Q("L3", "The mean of x is 30. The mean of y = 3x − 5 is:", ["@", "90", "25", "95"], "ȳ = 3x̄ − 5 = 90 − 5 = 85.", 3 * 30 - 5)
Q("L3", "A price rises by 60% in the first year and falls by 10% in the second year. The average annual rate of increase is:", ["@", "25%", "35%", "22%"], "Growth factors 1.6 and 0.9 → GM = √1.44 = 1.2 → 20% a year. The AM (25%) is wrong for growth rates.", fmt((gm([1.6, 0.9]) - 1) * 100) + "%")

# ---------- L4 dispersion ----------
_d = [12, 18, 25, 30, 45]
Q("L4", "The coefficient of range of 12, 18, 25, 30, 45 is:", ["@", "33", "0.73", "2.75"], "(L − S)/(L + S) = (45 − 12)/(45 + 12) = 33/57 = 0.58.", fmt(F(45 - 12, 45 + 12)))
Q("L4", "If Q₁ = 20 and Q₃ = 44, the quartile deviation and its coefficient are:", ["12 and 0.375", "24 and 0.375", "12 and 0.75", "24 and 0.5"], "QD = (44 − 20)/2 = 12; coefficient = (44 − 20)/(44 + 20) = 24/64 = 0.375.", hy=True)
assert F(44 - 20, 2) == 12 and F(24, 64) == F(3, 8)
_d = [2, 4, 6, 8, 10]
Q("L4", "The mean deviation about the mean of 2, 4, 6, 8, 10 is:", ["@", "2.83", "3", "0"], "Mean 6; |deviations| 4, 2, 0, 2, 4 → 12/5 = 2.4. (2.83 is the SD; 0 is Σ(x − x̄) without absolute values.)", fmt(md(_d)))
_d = [3, 5, 8, 10, 14]
Q("L4", "The mean deviation about the median of 3, 5, 8, 10, 14 is:", ["@", "3.04", "2.8", "4"], "Median 8; |deviations| 5, 3, 0, 2, 6 → 16/5 = 3.2.", fmt(md(_d, median(_d))))
_d = [2, 4, 6, 8, 10]
Q("L4", "The standard deviation of 2, 4, 6, 8, 10 is:", ["@", fmt(sd(svar(_d))), "8", "2.4"], "Mean 6; squared deviations 16, 4, 0, 4, 16 → 40/5 = 8 → σ = √8 ≈ 2.83. (3.16 divides by n − 1; 8 is the variance.)", fmt(sd(pvar(_d))), hy=True)
_d = list(range(1, 11))
Q("L4", "The variance of the first 10 natural numbers is:", ["@", fmt(svar(_d)), fmt(sd(pvar(_d))), "5.5"], "(n² − 1)/12 = 99/12 = 8.25. (9.17 divides by n − 1; 2.87 is the SD; 5.5 is the mean.)", fmt(pvar(_d)))
Q("L4", "The standard deviation of the two numbers 14 and 26 is:", ["@", "12", "8.49", "36"], "For two values SD = |a − b|/2 = 12/2 = 6.", fmt(sd(pvar([14, 26]))))
Q("L4", "A distribution has mean 40 and standard deviation 10. Its coefficient of variation is:", ["@", "4%", "40%", "400%"], "CV = σ/x̄ × 100 = 10/40 × 100 = 25%.", fmt(F(10, 40) * 100) + "%")
Q("L4", "Worker A: mean output 60, SD 12. Worker B: mean output 45, SD 10.8. Which statement is correct?", ["A is more consistent (CV 20% vs 24%)", "B is more consistent because its SD is smaller", "Both are equally consistent", "B is more consistent (CV 24% vs 20%)"], "CV(A) = 12/60 = 20%, CV(B) = 10.8/45 = 24%. Lower CV → A is more consistent.", hy=True)
assert F(12, 60) == F(20, 100) and F(108, 450) == F(24, 100)
Q("L4", "If y = 3x + 4 and the SD of x is 2, the SD of y is:", ["@", "10", "2", "18"], "σᵧ = |3| × 2 = 6; adding 4 changes nothing.", 3 * 2)
Q("L4", "If y = 5 − 2x and the variance of x is 9, the variance of y is:", ["@", "−18", "18", "6"], "var(y) = (−2)² × 9 = 36. A variance is never negative.", (-2) ** 2 * 9)
_v = F(40 * (16 + (50 - 47) ** 2) + 60 * (25 + (45 - 47) ** 2), 100)
assert F(40 * 50 + 60 * 45, 100) == 47
Q("L4", "Group 1: 40 items, mean 50, variance 16. Group 2: 60 items, mean 45, variance 25. The variance of the combined group is:", ["@", "21.4", "20.5", "47"], "Combined mean = 47; d₁ = 3, d₂ = −2; σ² = [40(16 + 9) + 60(25 + 4)]/100 = (1000 + 1740)/100 = 27.4. (21.4 forgets the d² terms.)", fmt(_v), hy=True)
Q("L4", "For a sample of 10 observations the variance computed with divisor n is 18. The unbiased estimate (divisor n − 1) is:", ["@", "16.2", "18", "19"], "s² = nσ²/(n − 1) = 10 × 18/9 = 20.", fmt(F(10 * 18, 9)))
Q("L4", "For 10 observations Σx = 60 and Σx² = 400. The standard deviation is:", ["@", "4", "6.32", "40"], "Mean = 6; variance = 400/10 − 36 = 4; SD = 2.", fmt(sd(F(400, 10) - 36)))
Q("L4", "The coefficient of variation is 20% and the mean is 35. The standard deviation is:", ["@", "1.75", "5.71", "70"], "σ = CV × x̄/100 = 20 × 35/100 = 7.", fmt(F(20 * 35, 100)))
Q("L4", "For a normal distribution with SD 15, the quartile deviation is approximately:", ["@", "12", "15", "7.5"], "QD ≈ (2/3)σ = 10. (12 is the mean deviation, (4/5)σ.)", fmt(F(2, 3) * 15))
Q("L4", "Which of these is a relative measure of dispersion?", ["Coefficient of variation", "Standard deviation", "Quartile deviation", "Mean deviation"], "A relative measure is a pure number (a ratio); SD, QD and MD carry the units of the data.")
Q("L4", "Every observation of a data set is increased by 10. The standard deviation:", ["does not change", "increases by 10", "increases by √10", "becomes 10 times"], "Adding a constant shifts every value and the mean equally, so deviations — and the SD — do not change.")
Q("L4", "Every observation is multiplied by −2. The new standard deviation is:", ["2 times the old SD", "−2 times the old SD", "4 times the old SD", "the same as the old SD"], "σ(bx) = |b|σ = 2σ. The SD can never be negative.")
Q("L4", "A data set has mean 50 and CV 10%. If 10 is added to every observation, the new CV is:", ["@", "10%", "12%", "20%"], "SD = 5 stays the same; the new mean is 60, so CV = 5/60 × 100 = 8.33%.", fmt(F(5, 60) * 100) + "%")
Q("L4", "The variance of a set of observations that are all equal to 7 is:", ["0", "7", "49", "1"], "Every deviation from the mean is 0, so the variance is 0.")
_sx, _sxx = 20 * 10, 20 * (4 + 100)
_cx, _cxx = _sx - 12 + 8, _sxx - 144 + 64
_cmn = F(_cx, 20); _csd = sd(F(_cxx, 20) - _cmn ** 2)
Q("L4", "For 20 observations the mean is 10 and the SD is 2. It was later found that an observation 8 had been wrongly read as 12. The correct SD is:", ["@", "2", "2.1", "1.8"], "Σx = 200 → 196; Σx² = 20(4 + 100) = 2080 → 2080 − 144 + 64 = 2000. Mean = 9.8; variance = 100 − 96.04 = 3.96; SD ≈ 1.99.", fmt(_csd))

# ---------- L5 moments, skewness, kurtosis ----------
Q("L5", "The first central moment (about the mean) of any distribution is:", ["0", "1", "the mean", "the variance"], "μ₁ = Σ(x − x̄)/n = 0 always.")
Q("L5", "The second central moment μ₂ is equal to the:", ["variance", "standard deviation", "mean deviation", "square of the mean"], "μ₂ = Σ(x − x̄)²/n = σ².", hy=True)
Q("L5", "The first two moments about 10 are 2 and 20. The mean and variance are:", ["12 and 16", "12 and 20", "2 and 16", "10 and 18"], "Mean = 10 + μ₁′ = 12; μ₂ = μ₂′ − μ₁′² = 20 − 4 = 16.")
assert 10 + 2 == 12 and 20 - 2 ** 2 == 16
Q("L5", "The first three moments about 4 are 1, 4 and 10. The third central moment μ₃ is:", ["@", "10", "−2", "4"], "μ₃ = μ₃′ − 3μ₂′μ₁′ + 2μ₁′³ = 10 − 12 + 2 = 0, so the distribution is symmetric.", 10 - 3 * 4 * 1 + 2 * 1 ** 3)
Q("L5", "The first four moments about 3 are −1, 10, −30 and 200. The fourth central moment μ₄ is:", ["@", "200", "260", "146"], "μ₄ = μ₄′ − 4μ₃′μ₁′ + 6μ₂′μ₁′² − 3μ₁′⁴ = 200 − 120 + 60 − 3 = 137.", 200 - 4 * (-30) * (-1) + 6 * 10 * 1 - 3 * 1)
Q("L5", "For a distribution μ₂ = 4 and μ₄ = 60. The value of β₂ and the shape are:", ["3.75, leptokurtic", "3.75, platykurtic", "15, leptokurtic", "0.75, platykurtic"], "β₂ = μ₄/μ₂² = 60/16 = 3.75 > 3 → more peaked than normal: leptokurtic.", hy=True)
assert F(60, 16) == F(375, 100)
Q("L5", "For a distribution μ₂ = 9 and μ₃ = −13.5. The value of β₁ is:", ["@", "−0.25", "0.5", "1.5"], "β₁ = μ₃²/μ₂³ = 182.25/729 = 0.25. β₁ is a square, so it is never negative.", fmt(F(-27, 2) ** 2 / 9 ** 3))
Q("L5", "For a distribution μ₂ = 4 and μ₃ = 4. The moment coefficient of skewness γ₁ = μ₃/σ³ is:", ["@", "1", "0.25", "2"], "σ = 2, σ³ = 8 → γ₁ = 4/8 = 0.5.", fmt(F(4, 8)))
Q("L5", "Mean = 60, mode = 54, SD = 12. Karl Pearson’s coefficient of skewness is:", ["@", "−0.5", "1.5", "0.6"], "Sk = (Mean − Mode)/σ = 6/12 = 0.5.", fmt(F(60 - 54, 12)), hy=True)
Q("L5", "Mean = 30, median = 32, SD = 6. Karl Pearson’s coefficient of skewness is:", ["@", "−0.33", "1", "0.33"], "Sk = 3(Mean − Median)/σ = 3(−2)/6 = −1.", fmt(F(3 * (30 - 32), 6)))
Q("L5", "Q₁ = 15, median = 25 and Q₃ = 30. Bowley’s coefficient of skewness is:", ["@", "0.33", "−0.2", "0.2"], "(Q₃ + Q₁ − 2Md)/(Q₃ − Q₁) = (30 + 15 − 50)/15 = −5/15 = −0.33.", fmt(F(30 + 15 - 50, 15)), hy=True)
Q("L5", "Bowley’s coefficient of skewness always lies between:", ["−1 and +1", "−3 and +3", "0 and 1", "0 and 3"], "Because |Q₃ + Q₁ − 2Md| can never exceed Q₃ − Q₁.")
Q("L5", "In a distribution, Mean > Median > Mode. The distribution is:", ["positively skewed", "negatively skewed", "symmetric", "mesokurtic"], "The mean is pulled furthest towards the long right tail.")
Q("L5", "A distribution has a long tail to the left. Which is true?", ["Mean < Median < Mode", "Mean > Median > Mode", "Mean = Median = Mode", "Median > Mode > Mean"], "Negative skew: the mean is pulled left of the median, which is left of the mode.")
Q("L5", "A curve with β₂ = 3 is called:", ["mesokurtic", "leptokurtic", "platykurtic", "bimodal"], "β₂ = 3 is the normal curve’s value — mesokurtic. γ₂ = β₂ − 3 = 0.")
Q("L5", "Karl Pearson’s coefficient of skewness is 0.5, the mean is 40 and the SD is 10. The mode is:", ["@", "45", "39.5", "20"], "Mode = Mean − Sk × σ = 40 − 5 = 35.", fmt(40 - F(1, 2) * 10))
Q("L5", "Karl Pearson’s coefficient of skewness is −0.6, the SD is 5 and the median is 20. The mean is:", ["@", "21", "17", "23"], "Sk = 3(Mean − Median)/σ → Mean = 20 + (−0.6 × 5)/3 = 20 − 1 = 19.", fmt(20 + F(-6, 10) * 5 / 3))
Q("L5", "Kelly’s coefficient of skewness is based on:", ["the 10th and 90th percentiles and the median", "the quartiles and the median", "the mean and the mode", "the third and second central moments"], "Kelly uses P₁₀, P₅₀ and P₉₀ so that more of the data is used than in Bowley’s quartile measure.")
Q("L5", "Which of the following is unaffected by a change of origin and scale?", ["β₂", "μ₂", "μ₃", "the mean"], "β₂ = μ₄/μ₂² is a pure number: the bʳ factors cancel.")
Q("L5", "The first four moments about the mean of a distribution are 0, 5, 2 and 60. Its β₂ is:", ["@", "12", "3", "0.16"], "β₂ = μ₄/μ₂² = 60/25 = 2.4 (platykurtic).", fmt(F(60, 25)))
Q("L5", "The first two moments about 3 are −1 and 10. The mean and variance are:", ["2 and 9", "4 and 9", "2 and 11", "−1 and 10"], "Mean = 3 + (−1) = 2; μ₂ = 10 − (−1)² = 9.")
assert 3 - 1 == 2 and 10 - 1 == 9
_md = [m for m in range(20, 51) if F(50 + 20 - 2 * m, 50 - 20) == F(1, 5)]
Q("L5", "Q₁ = 20, Q₃ = 50 and Bowley’s coefficient of skewness is 0.2. The median is:", ["@", "35", "38", "29"], "0.2 × 30 = 70 − 2Md → 6 = 70 − 2Md → Md = 32.", _md[0])

# ---------- L6 correlation and attributes ----------
Q("L6", "Karl Pearson’s coefficient of correlation always lies between:", ["−1 and +1", "0 and 1", "−∞ and +∞", "−3 and +3"], "|Cov(x, y)| ≤ σₓσᵧ (Cauchy–Schwarz), so |r| ≤ 1.")
Q("L6", "Cov(x, y) = 12, σₓ = 4 and σᵧ = 5. The correlation coefficient is:", ["@", "0.48", "2.4", "0.8"], "r = 12/(4 × 5) = 0.6.", fmt(F(12, 20)), hy=True)
_x, _y = [2, 4, 6, 8, 10], [5, 9, 8, 12, 16]
Q("L6", "For 5 pairs, Σx = 30, Σy = 50, Σxy = 350, Σx² = 220 and Σy² = 570. The correlation coefficient is:", ["@", "0.89", "0.75", "1.25"], "r = (5 × 350 − 30 × 50)/√[(5 × 220 − 900)(5 × 570 − 2500)] = 250/√(200 × 350) = 250/264.6 ≈ 0.945.", fmt(pearson(_x, _y)))
assert (sum(_x), sum(_y), sum(a * b for a, b in zip(_x, _y)), sum(a * a for a in _x), sum(b * b for b in _y)) == (30, 50, 350, 220, 570)
Q("L6", "If r = 0.8 between x and y, the percentage of the variation in y explained by x is:", ["@", "80%", "89%", "20%"], "Coefficient of determination r² = 0.64 → 64%.", fmt(F(8, 10) ** 2 * 100) + "%", hy=True)
Q("L6", "r(x, y) = 0.5. If u = 2x + 3 and v = 4 − y, then r(u, v) is:", ["−0.5", "0.5", "−1", "1"], "Origins are ignored; the scale factors 2 and −1 have opposite signs, so the sign flips: −0.5.")
Q("L6", "For 6 pairs of ranks Σd² = 14. Spearman’s rank correlation is:", ["@", "0.4", "0.8", "0.33"], "ρ = 1 − 6 × 14/(6 × 35) = 1 − 84/210 = 0.6.", fmt(1 - F(6 * 14, 6 * 35)), hy=True)
Q("L6", "Spearman’s ρ for 10 pairs of ranks is 0.8. The value of Σd² is:", ["@", "30", "36", "18"], "0.8 = 1 − 6Σd²/990 → Σd² = 0.2 × 990/6 = 33.", fmt(F(2, 10) * 990 / 6))
Q("L6", "Two judges rank 5 candidates in exactly opposite orders. Spearman’s rank correlation is:", ["@", "0", "1", "−0.5"], "d = 4, 2, 0, −2, −4 → Σd² = 40; ρ = 1 − 240/120 = −1.", fmt(spearman([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])))
_x, _y = [80, 70, 70, 60, 50], [75, 72, 60, 65, 50]
_rx, _ry = ranks(_x), ranks(_y)
assert _rx == [1, F(5, 2), F(5, 2), 4, 5] and _ry == [1, 2, 4, 3, 5]
Q("L6", "Marks in two tests: A (80, 70, 70, 60, 50) and B (75, 72, 60, 65, 50). Spearman’s rank correlation, with the correction for the tie, is:", ["@", fmt(spearman(_rx, _ry)), "0.9", "0.75"], "Ranks A: 1, 2.5, 2.5, 4, 5; B: 1, 2, 4, 3, 5. Σd² = 0 + 0.25 + 2.25 + 1 + 0 = 3.5; tie correction (2³ − 2)/12 = 0.5 → 4. ρ = 1 − 6 × 4/120 = 0.8.", fmt(spearman(_rx, _ry, tie_cf(_x))))
_q = F(40 * 30 - 10 * 20, 40 * 30 + 10 * 20)
Q("L6", "(AB) = 40, (Aβ) = 10, (αB) = 20, (αβ) = 30. Yule’s coefficient of association is:", ["@", "0.5", "0.83", "0.29"], "Q = (40 × 30 − 10 × 20)/(40 × 30 + 10 × 20) = 1000/1400 = 0.71.", fmt(_q), hy=True)
Q("L6", "In a population of 200, (A) = 80 and (B) = 50. If A and B are independent, (AB) should be:", ["@", "40", "25", "130"], "(AB) = (A)(B)/N = 80 × 50/200 = 20.", fmt(F(80 * 50, 200)))
Q("L6", "If (AB)(αβ) = (Aβ)(αB), Yule’s coefficient of association is:", ["0", "1", "−1", "0.5"], "The numerator (AB)(αβ) − (Aβ)(αB) is zero: the attributes are independent.")
Q("L6", "The coefficient of colligation Y is 0.5. Yule’s Q is:", ["@", "0.25", "1", "0.67"], "Q = 2Y/(1 + Y²) = 1/1.25 = 0.8.", fmt(2 * F(1, 2) / (1 + F(1, 2) ** 2)))
Q("L6", "r = 0.6 from 16 pairs. The probable error of r (to 2 decimals) is:", ["@", "0.16", "0.27", "0.04"], "PE = 0.6745 (1 − 0.36)/√16 = 0.6745 × 0.64/4 = 0.108 ≈ 0.11.", fmt(0.6745 * (1 - 0.36) / 4))
Q("L6", "r = 0 between two variables means that:", ["there is no linear relationship between them", "they are independent", "they have a perfect non-linear relationship", "one variable is constant"], "r measures only linear association; y = x² on symmetric x gives r = 0 with a perfect curved relation.")
Q("L6", "All points of a scatter diagram lie on a straight line that falls from left to right. Then r is:", ["−1", "0", "+1", "between 0 and −1"], "A perfect linear relation with negative slope gives r = −1.")
Q("L6", "Cov(x, y) = −16, var(x) = 16 and var(y) = 25. The correlation coefficient is:", ["@", "−0.04", "−0.16", "0.8"], "r = −16/(4 × 5) = −0.8. Divide by the SDs, not the variances.", fmt(F(-16, 20)))
Q("L6", "If r = 0.9, the coefficient of non-determination (1 − r²) is:", ["@", "0.1", "0.81", "0.9"], "1 − 0.81 = 0.19.", fmt(1 - F(9, 10) ** 2))
Q("L6", "N = 100, (A) = 60, (B) = 50. Which value of (AB) would make the data inconsistent?", ["5", "10", "30", "50"], "(αβ) = N − (A) − (B) + (AB) = (AB) − 10 must not be negative, so (AB) ≥ 10; also (AB) ≤ 50. Only 5 breaks this.")
assert all(100 - 60 - 50 + ab >= 0 and ab <= 50 for ab in (10, 30, 50)) and 100 - 60 - 50 + 5 < 0
Q("L6", "Spearman’s rank correlation is especially useful when:", ["the data are qualitative but can be ranked", "both variables are normally distributed", "the relation is known to be exactly linear", "the sample size is very large"], "Ranks let you correlate attributes such as beauty or honesty that cannot be measured.")
Q("L6", "The correlation between x and y = 10 − 2x is:", ["−1", "−2", "0", "+1"], "y is an exact linear function of x with a negative slope.")
Q("L6", "r = 0.4, σₓ = 5 and σᵧ = 3. The covariance of x and y is:", ["@", "0.027", "37.5", "8"], "Cov = r σₓ σᵧ = 0.4 × 15 = 6.", fmt(F(4, 10) * 15))

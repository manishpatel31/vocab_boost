# Lessons 1–6: exam pattern and basics, data, central tendency, dispersion, moments, correlation
from st import *

L = []

# ---------------------------------------------------------------- L1
_ev = F(1, 4) * 2 - F(3, 4) * F(1, 2)
L.append({"id": "L1", "heat": 2, "title": "Paper II, the plan & basics", "hi": "परीक्षा का स्वरूप, तैयारी और मूल अवधारणाएँ", "blocks": [
 {"k": "hot", "h": "<b>Why this lesson comes first.</b> Paper II (Statistics) is a whole extra paper that only JSO-type candidates sit, and its marks go into the merit for those posts. It is a graduation-level, mostly numerical paper: about two-thirds of the questions need a formula and a short calculation, the rest test definitions (scales, estimator properties, sampling methods, index-number tests). Knowing the pattern and the vocabulary first saves time in every later lesson."},
 {"k": "table", "title": "Paper II at a glance (as reported for recent cycles; confirm in the current notice)", "head": ["Item", "Detail"], "rows": [
  ["Who takes it", "candidates for Junior Statistical Officer (MoSPI) and, where the notice says so, Statistical Investigator Grade II"],
  ["When", "in Tier 2, alongside the common Paper I"],
  ["Questions · marks", "100 objective questions · 200 marks (2 marks each)"],
  ["Time", "2 hours (extra time for candidates eligible for a scribe)"],
  ["Negative marking", "0.50 mark per wrong answer, as reported for recent cycles"],
  ["Level", "graduation statistics; no calculator is provided"],
  ["Mode", "computer-based test, English and Hindi"]]},
 {"k": "table", "title": "The official syllabus, unit by unit, and where it is in this app", "head": ["Syllabus unit", "Key sub-topics", "Lesson"], "rows": [
  ["Collection, classification and presentation of data", "primary and secondary data, tabulation, frequency distributions, diagrams and graphs", "L2"],
  ["Measures of central tendency", "mean, median, mode; partition values (quartiles, deciles, percentiles)", "L3"],
  ["Measures of dispersion", "range, quartile deviation, mean deviation, standard deviation, relative dispersion", "L4"],
  ["Moments, skewness and kurtosis", "types of moments and their relations, measures of skewness and kurtosis", "L5"],
  ["Correlation and regression", "scatter diagram, Pearson and Spearman, regression lines, association of attributes, multiple and partial correlation (three variables)", "L6, L7"],
  ["Probability theory", "definitions, conditional and compound probability, independence, Bayes’ theorem", "L8"],
  ["Random variable and distributions", "expectation, variance, higher moments, binomial, Poisson, normal, exponential, joint distribution of two discrete variables", "L9–L11"],
  ["Sampling theory", "population and sample, parameter and statistic, sampling and non-sampling errors, sampling methods, sampling distributions, sample size", "L12"],
  ["Statistical inference", "point and interval estimation, properties of estimators, methods of estimation, testing of hypotheses, Z, t, χ² and F tests", "L13–L15"],
  ["Analysis of variance", "one-way and two-way classified data", "L16"],
  ["Time series analysis", "components, trend by different methods, seasonal variation", "L17"],
  ["Index numbers", "construction problems, types and formulae, base shifting and splicing, cost of living index, uses", "L18"]]},
 {"k": "p", "h": "<b>Statistics</b> means two things: numerical facts collected for a purpose (plural sense — “the statistics of rainfall”), and the science of collecting, presenting, analysing and interpreting such data (singular sense). The whole group you are interested in is the <b>population</b>; the part you actually observe is a <b>sample</b>. A number that describes a population is a <b>parameter</b> (μ, σ, P); the same kind of number worked out from a sample is a <b>statistic</b> (x̄, s, p). Inference (L13–L15) is the art of judging a parameter from a statistic."},
 {"k": "table", "title": "Variables and scales of measurement", "head": ["Idea", "Meaning", "Examples"], "rows": [
  ["Qualitative (attribute)", "a quality, not measured in numbers", "gender, blood group, colour"],
  ["Quantitative · discrete", "countable values with gaps", "children in a family, defects per item"],
  ["Quantitative · continuous", "any value in an interval", "height, weight, time, temperature"],
  ["Nominal scale", "names only; no order", "PIN code, jersey number, religion"],
  ["Ordinal scale", "order but unequal gaps", "ranks, grades A/B/C, ratings"],
  ["Interval scale", "equal gaps but no true zero (ratios meaningless)", "temperature in °C, calendar year, IQ"],
  ["Ratio scale", "equal gaps and a true zero (ratios meaningful)", "height, income, age, weight"]]},
 {"k": "formula", "title": "Σ (summation) rules you will use everywhere", "rows": [
  ["Σ of a constant", "Σ<sub>i=1..n</sub> c = nc", "adding 5 to itself 10 times gives 50"],
  ["Constant factor", "Σ c·xᵢ = c·Σxᵢ", "Σ 3xᵢ = 3Σxᵢ"],
  ["Sum splits", "Σ(xᵢ + yᵢ) = Σxᵢ + Σyᵢ", "but Σxᵢyᵢ ≠ Σxᵢ · Σyᵢ"],
  ["Mean", "x̄ = Σx / n", "so Σx = n·x̄"],
  ["Deviations from mean", "Σ(xᵢ − x̄) = 0", "always, for any data"],
  ["Variance shortcut", "σ² = Σx²/n − x̄²", "“mean of squares minus square of mean”"]]},
 {"k": "ex", "q": "For 10 observations, Σx = 50 and Σx² = 290. Find the mean and the variance.", "steps": ["Mean x̄ = Σx/n = 50/10 = 5", "Mean of squares = Σx²/n = 290/10 = 29", "Variance = 29 − 5² = 4 (so the SD is 2)"], "ans": "mean 5, variance 4", "tip": "Never subtract (Σx)² from Σx² directly: divide each by n first, or use [Σx² − (Σx)²/n]/n."},
 {"k": "ex", "q": "Classify each by scale: (a) roll numbers, (b) merit ranks, (c) temperature in °C, (d) monthly income.", "steps": ["Roll numbers only identify → nominal", "Ranks have an order but rank 1 and 2 need not be as far apart as 2 and 3 → ordinal", "0 °C does not mean “no temperature”, and 40 °C is not “twice as hot” as 20 °C → interval", "Zero income is a true zero and ₹20,000 is twice ₹10,000 → ratio"], "ans": "nominal, ordinal, interval, ratio"},
 {"k": "ex", "q": "Each right answer earns 2 marks and each wrong one costs 0.5. A candidate guesses blindly among 4 options. What is the expected score of one guess?", "steps": ["P(right) = 1/4, P(wrong) = 3/4", "E = (1/4)(2) + (3/4)(−0.5) = 0.5 − 0.375", "E = 0.125 mark"], "ans": fmt(_ev, 3) + " mark (positive)", "tip": "If you can strike out one or two options the expected gain rises sharply — this is expectation (L9) at work."},
 {"k": "facts", "title": "A 10-week plan that works for this paper", "rows": [
  ["Weeks 1–2", "L2–L5: descriptive statistics. Make your own formula sheet; do every numeric question here without a calculator"],
  ["Weeks 3–4", "L6–L7 correlation and regression, L8 probability"],
  ["Weeks 5–6", "L9–L11 random variables and distributions (binomial, Poisson, normal are the scoring core)"],
  ["Weeks 7–8", "L12–L16 sampling, estimation, tests, ANOVA — learn the table of test statistics and degrees of freedom"],
  ["Week 9", "L17–L18 time series and index numbers (quick, formula-driven marks)"],
  ["Week 10", "full mocks of 100 questions in 2 hours; revise the traps tab daily"],
  ["Every day", "20 mixed questions in Practice; redo the Mistakes list on weekends"]]},
 {"k": "trick", "h": "<b>Two passes.</b> In the first pass answer the one-step questions (definitions, direct formula) — they are worth the same 2 marks as a long calculation. In the second pass do the calculations. <b>Use the options:</b> a correlation must lie in [−1, 1], a probability in [0, 1], a variance cannot be negative, and the GM of positive numbers lies between the HM and the AM — such checks remove wrong options in seconds."},
 {"k": "trap", "h": "<b>Parameter ≠ statistic:</b> μ and σ belong to the population, x̄ and s to the sample. <b>Discrete vs continuous:</b> “number of children” is discrete even though its mean (2.4) is a decimal. <b>Interval vs ratio:</b> temperature in °C has no true zero, so “twice as hot” is meaningless. <b>Σx² is not (Σx)²</b>."},
 {"k": "link", "h": "Σ rules and x̄ return in every formula of L3–L7; the population/sample split decides whether you divide by n or by n − 1 (L4, L13)."},
 {"k": "q", "q": "Which scale of measurement has a true zero?", "o": ["Ratio", "Interval", "Ordinal", "Nominal"], "e": "Only the ratio scale has a true zero, so only there are ratios like “twice as much” meaningful."}
], "sum": [
 "Paper II: 100 questions, 200 marks, 2 hours; 0.50 negative marking as reported for recent cycles — confirm in the notice",
 "Parameter (μ, σ) describes a population; statistic (x̄, s) describes a sample",
 "Discrete = countable, continuous = measurable; qualitative variables are attributes",
 "Scales: nominal (names) < ordinal (order) < interval (equal gaps) < ratio (true zero)",
 "Σc = nc, Σ(x − x̄) = 0, variance = Σx²/n − x̄²"]})

# ---------------------------------------------------------------- L2
_pie = F(1200, 4800) * 360
_stur = 1 + 3.322 * math.log10(100)
L.append({"id": "L2", "heat": 2, "title": "Collecting & presenting data", "hi": "आँकड़ों का संग्रह, वर्गीकरण और प्रस्तुतीकरण", "blocks": [
 {"k": "hot", "h": "<b>Steady, easy marks.</b> Expect definitions (primary vs secondary data, parts of a table, which graph locates the median) and quick numbers: class mark, class width, pie-chart angle, the number of classes by Sturges’ rule, cumulative frequency, and heights of a histogram with unequal classes."},
 {"k": "p", "h": "<b>Primary data</b> are collected first-hand by the investigator for the purpose in hand; <b>secondary data</b> were collected by someone else and are reused (published reports, census tables, RBI bulletins). Primary data are more reliable for the purpose but cost more time and money; secondary data must be checked for suitability, adequacy and reliability before use. A <b>census</b> (complete enumeration) covers every unit; a <b>sample survey</b> covers a part."},
 {"k": "table", "title": "Methods of collecting primary data", "head": ["Method", "Best when", "Weakness"], "rows": [
  ["Direct personal investigation", "small, local field; high accuracy needed", "costly, investigator bias"],
  ["Indirect oral investigation", "informants unwilling or the field is large (enquiry committees)", "witnesses may be biased"],
  ["Information through local correspondents", "regular, approximate information (crop reports)", "low accuracy"],
  ["Mailed questionnaire", "wide field, literate informants", "low response, no chance to explain"],
  ["Schedules filled by enumerators", "wide field, informants may be illiterate (population census)", "needs trained enumerators; costly"]]},
 {"k": "table", "title": "Classification and tabulation", "head": ["Term", "Meaning"], "rows": [
  ["Geographical / chronological", "classified by place / by time (a time series)"],
  ["Qualitative / quantitative", "by an attribute (literate or not) / by a measured variable (income classes)"],
  ["Title, table number", "what the table shows, and its reference number"],
  ["Caption", "headings of the columns"],
  ["Stub", "headings of the rows"],
  ["Body", "the figures themselves"],
  ["Head-note, foot-note, source", "unit of measurement; explanations; where the data came from"]]},
 {"k": "formula", "title": "Frequency distributions", "rows": [
  ["Class mark (mid-value)", "(lower limit + upper limit)/2", "class 20–30 → 25"],
  ["Class width", "upper boundary − lower boundary", "also = difference of two successive class marks"],
  ["Inclusive → exclusive", "subtract half the gap from each lower limit, add it to each upper limit", "10–19, 20–29 → 9.5–19.5, 19.5–29.5"],
  ["Sturges’ rule", "k = 1 + 3.322 log₁₀N classes", "N = 100 → k ≈ %s → 8 classes" % fmt(_stur, 2)],
  ["Width from range", "h ≈ range / k", "range 70 and 7 classes → width 10"],
  ["Relative frequency", "f / N", "percentage frequency = 100 f / N"],
  ["Frequency density", "f / class width", "used for histograms with unequal classes"],
  ["Cumulative frequency", "running total (“less than”) or from the top (“more than”)", "last “less than” c.f. = N"]]},
 {"k": "table", "title": "Which diagram or graph, for what", "head": ["Chart", "How it is drawn", "Use"], "rows": [
  ["Simple / multiple bar", "bars of equal width, heights ∝ values", "compare one or more series"],
  ["Sub-divided / percentage bar", "a bar split into parts (percentages total 100)", "show components"],
  ["Pie chart", "angle of a sector = value/total × 360°", "share of each part in a whole"],
  ["Histogram", "adjacent rectangles; area ∝ frequency", "continuous data; locates the <b>mode</b>"],
  ["Frequency polygon", "joins the mid-points of histogram tops (or plots class marks)", "compare distributions"],
  ["Ogive (cumulative curve)", "plot c.f. against class boundaries", "locates the <b>median</b> (where the two ogives cross) and quartiles"],
  ["Stem-and-leaf, box plot", "digits split into stem and leaf; box from Q1 to Q3 with the median", "shape, spread, outliers"],
  ["Lorenz curve", "cumulative % of units against cumulative % of the variable", "inequality of income or wealth"]]},
 {"k": "ex", "q": "A family spends ₹1,200 of its ₹4,800 budget on food. What angle does food get in a pie chart?", "steps": ["Angle = (value/total) × 360°", "= (1200/4800) × 360° = (1/4) × 360°"], "ans": fmt(_pie) + "°"},
 {"k": "ex", "q": "Classes are 0–10, 10–20, 20–40, 40–70 with frequencies 5, 8, 12, 9. Find the heights of the histogram rectangles.", "steps": ["Unequal widths → plot frequency density = f/width", "0–10: 5/10 = 0.5; 10–20: 8/10 = 0.8", "20–40: 12/20 = 0.6; 40–70: 9/30 = 0.3"], "ans": "0.5, 0.8, 0.6, 0.3 (per unit width)", "tip": "If the question uses the smallest width (10) as the unit, multiply each by 10: 5, 8, 6, 3."},
 {"k": "ex", "q": "Using Sturges’ rule, how many classes suit 100 observations? If the range is 56, what width should they have?", "steps": ["k = 1 + 3.322 log₁₀100 = 1 + 3.322 × 2 = %s" % fmt(_stur, 3), "Round to a whole number of classes: about 8", "Width ≈ 56/8 = 7"], "ans": "8 classes of width 7"},
 {"k": "trick", "h": "<b>Histogram → mode, ogive → median.</b> The two ogives (less than and more than) cross at the median; drop a perpendicular to the x-axis. <b>Pie chart:</b> 1% of the total is 3.6°."},
 {"k": "trap", "h": "<b>Class limits vs class boundaries:</b> in 10–19, 20–29 the limits are 10 and 19 but the boundaries are 9.5 and 19.5 — widths and histograms use boundaries. <b>Histogram heights with unequal classes</b> are densities, not frequencies. <b>Bar diagrams</b> have gaps between bars and are one-dimensional; histograms have no gaps and their <i>area</i> carries the frequency. <b>Secondary data</b> are not “less accurate” by definition — they are simply reused."},
 {"k": "link", "h": "Grouped frequency tables built here are the input of the grouped mean, median and mode (L3) and of the grouped SD (L4)."},
 {"k": "q", "q": "Which graph is used to find the median graphically?", "o": ["Ogive", "Histogram", "Pie chart", "Bar diagram"], "e": "The less-than and more-than ogives intersect at the median."}
], "sum": [
 "Primary data: first-hand for the purpose; secondary: collected by others, check suitability before use",
 "Table parts: number, title, caption (columns), stub (rows), body, head-note, foot-note, source",
 "Class mark = (L + U)/2; width = difference of boundaries; Sturges k = 1 + 3.322 log₁₀N",
 "Pie angle = value/total × 360°; histogram with unequal widths uses f/width",
 "Histogram locates the mode; ogives locate the median and quartiles; Lorenz curve shows inequality"]})

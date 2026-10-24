# Questions for L1–L6
from st import *

# ---------- L1 the paper, the plan, basics ----------
Q("L1", "Which of the following is a parameter?", ["The population mean μ", "The sample mean x̄", "The sample proportion p", "The sample standard deviation s"], "A parameter describes the whole population; x̄, p and s are statistics worked out from a sample.", hy=True)
Q("L1", "Which of the following is a statistic?", ["The sample standard deviation s", "The population variance σ²", "The population proportion P", "The population mean μ"], "A statistic is computed from sample values; σ², P and μ are population parameters.")
Q("L1", "The number of children in a family is an example of:", ["a discrete variable", "a continuous variable", "an attribute", "an interval-scale variable"], "It takes only whole-number values 0, 1, 2, … — countable with gaps — so it is discrete, even if its average is 2.4.")
Q("L1", "The height of a student is an example of:", ["a continuous variable", "a discrete variable", "an attribute", "a nominal variable"], "Height can take any value in an interval (152.3 cm, 152.35 cm …), so it is continuous.")
Q("L1", "Blood group of a person is:", ["a qualitative variable on a nominal scale", "a quantitative discrete variable", "a variable on a ratio scale", "a variable on an interval scale"], "Blood groups A, B, AB, O are names with no order — a qualitative attribute measured on a nominal scale.")
Q("L1", "Temperature measured in degrees Celsius is on which scale?", ["Interval scale", "Ratio scale", "Ordinal scale", "Nominal scale"], "Gaps are equal but 0 °C is not ‘no temperature’, so ratios are meaningless — an interval scale.", hy=True)
Q("L1", "Ranks obtained by students in a class are measured on:", ["an ordinal scale", "a nominal scale", "an interval scale", "a ratio scale"], "Ranks give order only; the gap between ranks 1 and 2 need not equal that between 2 and 3.")
Q("L1", "Monthly income of workers is measured on:", ["a ratio scale", "an interval scale", "an ordinal scale", "a nominal scale"], "Income has equal units and a true zero, so ‘twice the income’ makes sense — a ratio scale.")
Q("L1", "PIN codes of post offices are an example of which scale?", ["Nominal", "Ordinal", "Interval", "Ratio"], "A PIN code only names (identifies) an area; arithmetic on it has no meaning.")
Q("L1", "On which scale is the statement ‘A is twice as heavy as B’ meaningful?", ["Ratio scale", "Interval scale", "Ordinal scale", "Nominal scale"], "Ratios need a true zero, which only the ratio scale has.")
Q("L1", "‘Statistics’ used in the singular sense means:", ["the science of collecting, presenting, analysing and interpreting data", "numerical facts about a subject", "a single number computed from a sample", "a list of observations arranged in order"], "In the plural sense statistics are numerical facts; in the singular sense it is the science that deals with them.")
Q("L1", "For any set of observations, Σ(xᵢ − x̄) equals:", ["0", "x̄", "n·x̄", "the variance"], "Σ(xᵢ − x̄) = Σxᵢ − n·x̄ = n·x̄ − n·x̄ = 0. This is the defining property of the arithmetic mean.", hy=True)
Q("L1", "If Σxᵢ = 84 for 12 observations, their mean is:", ["@", "8", "6", "12"], "x̄ = Σx/n = 84/12 = 7.", fmt(F(84, 12)))
_x = [3, 4, 5, 6, 7, 5, 3, 7]
assert sum(_x) == 40 and sum(v * v for v in _x) == 218
Q("L1", "For 8 observations Σx = 40 and Σx² = 218. The variance (dividing by n) is:", ["@", fmt(F(218, 8)), fmt(svar(_x)), fmt(F(218 - 40, 8))], "Mean = 40/8 = 5; mean of squares = 218/8 = 27.25; variance = 27.25 − 25 = 2.25.", fmt(pvar(_x)))
_s = 86
Q("L1", "If Σᵢ₌₁¹⁰ (2xᵢ + 3) = 86, then Σᵢ₌₁¹⁰ xᵢ equals:", ["@", fmt(F(86 - 3, 2)), fmt(F(86, 2)), "56"], "Σ(2xᵢ + 3) = 2Σxᵢ + 10 × 3 = 2Σxᵢ + 30 = 86 → Σxᵢ = 28.", fmt(F(_s - 30, 2)))
Q("L1", "If each of 20 observations is increased by 3, their sum increases by:", ["@", "3", "23", "6"], "Each of the 20 values gains 3, so the sum gains 20 × 3 = 60.", 20 * 3)
Q("L1", "The mean of the first 20 natural numbers is:", ["@", "10", "11", "21"], "(n + 1)/2 = 21/2 = 10.5.", fmt(mean(range(1, 21))))
Q("L1", "Σᵢ₌₁⁵ i² equals:", ["@", "225", "15", "25"], "1 + 4 + 9 + 16 + 25 = 55. (225 = (Σi)² — a different thing.)", sum(i * i for i in range(1, 6)))
Q("L1", "Each right answer earns 2 marks and each wrong answer loses 0.5 mark. What is the expected score of one blind guess among 4 options?", ["@", "0.5", "0", "−0.125"], "E = (1/4)(2) + (3/4)(−0.5) = 0.5 − 0.375 = 0.125.", fmt(F(1, 4) * 2 - F(3, 4) * F(1, 2), 3))
Q("L1", "Each right answer earns 2 marks and each wrong answer loses 0.5 mark. A candidate rules out two of the four options and guesses between the other two. What is the expected score of this guess?", ["@", "1", "0.5", "1.25"], "E = (1/2)(2) + (1/2)(−0.5) = 1 − 0.25 = 0.75.", fmt(F(1, 2) * 2 - F(1, 2) * F(1, 2)))
Q("L1", "In a paper of 2 marks per right answer and 0.5 mark off per wrong answer, a candidate attempts 80 questions and gets 64 right. The score is:", ["@", "128", "112", "124"], "64 × 2 − 16 × 0.5 = 128 − 8 = 120.", 64 * 2 - (80 - 64) * F(1, 2))
_r = [r for r in range(91) if 2 * r - F(90 - r, 2) == 150]
Q("L1", "In a paper of 2 marks per right answer and 0.5 mark off per wrong answer, a candidate attempts 90 questions and scores 150. How many answers were right?", ["@", "75", "80", "72"], "2r − 0.5(90 − r) = 150 → 2.5r = 195 → r = 78.", _r[0])
Q("L1", "Which of these is a discrete variable?", ["Number of accidents on a road per day", "Weight of a parcel", "Time taken to finish a race", "Rainfall in a month"], "Accidents are counted (0, 1, 2 …); weight, time and rainfall are measured on a continuous scale.")

# ---------- L2 collection, classification, presentation ----------
Q("L2", "Data collected by the investigator himself for the purpose of the enquiry are called:", ["primary data", "secondary data", "classified data", "time-series data"], "First-hand data collected for the purpose in hand are primary data.", hy=True)
Q("L2", "A researcher uses price figures published in an RBI bulletin. For the researcher these are:", ["secondary data", "primary data", "raw sample data", "census data"], "They were collected by someone else and are being reused, so they are secondary data for this researcher.")
Q("L2", "In a statistical table, the headings of the columns are called the:", ["caption", "stub", "body", "foot-note"], "Captions head the columns; the stub holds the row headings.")
Q("L2", "In a statistical table, the headings of the rows are called the:", ["stub", "caption", "head-note", "source note"], "The stub is the left-hand part of a table that names the rows.")
Q("L2", "The method in which trained enumerators visit informants and fill the forms themselves is called:", ["schedules filled by enumerators", "mailed questionnaire", "indirect oral investigation", "information from local correspondents"], "A schedule is filled in by the enumerator; a questionnaire is filled in by the informant. The population census uses schedules.")
Q("L2", "Complete enumeration of every unit of the population is known as:", ["the census method", "the sample method", "the pilot survey", "quota sampling"], "A census covers every unit; a sample survey covers only a part.")
Q("L2", "Arranging data according to time of occurrence is called:", ["chronological classification", "geographical classification", "qualitative classification", "quantitative classification"], "Classification by time gives a time series; by place it is geographical.")
Q("L2", "The class mark of the class 25–35 is:", ["@", "25", "35", "10"], "(25 + 35)/2 = 30.", fmt(F(25 + 35, 2)))
Q("L2", "The class marks of a distribution are 15, 25, 35, 45. The class width is:", ["@", "15", "5", "20"], "The width equals the gap between successive class marks: 25 − 15 = 10.", 25 - 15)
Q("L2", "In the inclusive classes 30–39, 40–49, 50–59, the lower boundary of the class 40–49 is:", ["@", "40", "40.5", "39"], "The gap between 39 and 40 is 1; subtract half of it from 40: 39.5.", fmt(40 - F(1, 2)))
Q("L2", "In the inclusive classes 10–19, 20–29, 30–39, the true width of each class is:", ["@", "9", "9.5", "11"], "Boundaries are 9.5–19.5, 19.5–29.5 …, so the width is 10, not 19 − 10 = 9.", fmt(F(39, 2) - F(19, 2)))
Q("L2", "A family spends ₹540 on rent out of a total budget of ₹2,400. The angle of the rent sector in a pie chart is:", ["@", "54°", "90°", "22.5°"], "(540/2400) × 360° = 0.225 × 360° = 81°.", fmt(F(540, 2400) * 360) + "°", hy=True)
Q("L2", "A sector of a pie chart has an angle of 72°. What percentage of the total does it show?", ["@", "72%", "25%", "36%"], "72/360 × 100 = 20%.", fmt(F(72, 360) * 100) + "%")
Q("L2", "By Sturges’ rule, the number of classes suitable for 1,000 observations is about:", ["@", "10", "8", "14"], "k = 1 + 3.322 log₁₀1000 = 1 + 3.322 × 3 = 10.97 ≈ 11.", round(1 + 3.322 * 3))
Q("L2", "Data with a range of 84 are to be grouped into 7 classes of equal width. The width should be:", ["@", "7", "14", "10"], "Width = range / number of classes = 84/7 = 12.", 84 // 7)
Q("L2", "A class has frequency 12 in a distribution of 80 observations. Its relative frequency is:", ["@", "0.12", "0.8", "6.67"], "Relative frequency = f/N = 12/80 = 0.15.", fmt(F(12, 80)))
Q("L2", "The class 20–40 has frequency 30. Its frequency density is:", ["@", "30", "0.67", "15"], "Density = f / width = 30/20 = 1.5.", fmt(F(30, 20)))
Q("L2", "Frequencies of five consecutive classes are 5, 7, 10, 8, 3. The ‘more than’ cumulative frequency of the fourth class is:", ["@", "30", "8", "22"], "‘More than’ c.f. of the 4th class = 8 + 3 = 11. (30 is the ‘less than’ c.f. of that class.)", 8 + 3)
_f = [5, 7, 10, 8, 3]
Q("L2", "Frequencies of five consecutive classes are 5, 7, 10, 8, 3. The ‘less than’ cumulative frequency of the third class is:", ["@", "10", "21", "33"], "5 + 7 + 10 = 22.", sum(_f[:3]))
Q("L2", "In a histogram with unequal classes, the class 10–30 has frequency 16. Taking 10 as the standard width, the adjusted frequency (height) for this class is:", ["@", "16", "32", "1.6"], "The class is twice the standard width, so its height is 16/2 = 8.", fmt(F(16, 2)))
Q("L2", "The mode of a distribution can be located graphically with the help of a:", ["histogram", "ogive", "pie chart", "Lorenz curve"], "The mode is found from the tallest rectangle of a histogram and its two neighbours.")
Q("L2", "The ‘less than’ and ‘more than’ ogives intersect at a point whose x-coordinate is the:", ["median", "mean", "mode", "first quartile"], "At that point exactly N/2 observations lie below and N/2 above.", hy=True)
Q("L2", "The Lorenz curve is used to study:", ["inequality in the distribution of income or wealth", "the trend of a time series", "the correlation between two variables", "the shape of a frequency curve"], "It plots cumulative % of people against cumulative % of income; the further it sags below the line of equality, the greater the inequality.")
Q("L2", "Which statement about a histogram is correct?", ["The areas of the rectangles are proportional to the class frequencies", "The bars are drawn with gaps between them", "It is used mainly for qualitative data", "The heights must always equal the frequencies"], "A histogram is for continuous data, with adjacent rectangles whose areas carry the frequencies; heights equal frequencies only when classes are equal.")
Q("L2", "The class marks of a distribution are 10, 20, 30, 40. The first class is:", ["5–15", "0–10", "10–20", "0–20"], "Width = 10, so the first class is 10 − 5 to 10 + 5 = 5–15.")
assert (5 + 15) / 2 == 10

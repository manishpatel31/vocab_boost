# Lessons 10–13
L = []
L.append({"id":"L10","heat":1,"title":"Counting digits, pages & digit sums","hi":"अंकों की गिनती · पृष्ठ संख्या","blocks":[
 {"k":"hot","h":"<b>Occasional in CGL and CHSL, common in other SSC exams:</b> “digits needed to number a 428-page book”, “a printer used 3189 digits — how many pages?”, “how many times does 6 appear from 400 to 700?”. Pure counting — no tricks needed once you know the blocks."},
 {"k":"table","title":"Digits and key strokes","head":["Numbers","How many numbers","Digits used","Total so far"],"rows":[
  ["1 to 9","9","9","9"],["10 to 99","90","180","189"],["100 to 999","900","2700","2889"],["1000 to 9999","9000","36000","38889"]]},
 {"k":"formula","title":"Formulas","rows":[
  ["Digits to write 1 to N","n(N + 1) − 11…1 (n ones), n = digits in N","N = 428: 3 × 429 − 111 = 1176"],
  ["Pages from digits D","solve n(N + 1) − 11…1 = D","D = 3189 (4-digit): 4(N + 1) − 1111 = 3189 → N = 1074"],
  ["n-digit numbers","9 × 10<sup>n−1</sup>","3-digit: 900"],
  ["Each digit 1–9 in 1 to 99","appears 20 times (10 in units, 10 in tens)","digit 5 → 20 times; digit 0 → 9 times"],
  ["Each digit 1–9 in 1 to 999","appears 300 times","digit 0 → 189 times"],
  ["Sum of all digits 1 to 99 / 1 to 100","900 / 901","units 45 × 9 = 405, tens 45 × 10 = 450, plus 45 from 1–9"],
  ["Sum of all digits 1 to 999","13500 (1 to 1000 → 13501)","each digit sums to 45, 300 times"]]},
 {"k":"ex","q":"How many digits are needed to number a book of 428 pages?","steps":["1–9: 9 digits; 10–99: 90 × 2 = 180","100–428: 329 numbers × 3 = 987","9 + 180 + 987 = 1176 (or 3 × 429 − 111)"],"ans":"1176"},
 {"k":"ex","q":"A printer numbers the pages of a book starting from 1 and uses 3189 digits in all. How many pages does the book have?","steps":["Up to 999: 2889 digits used, so the book goes past 999","Remaining 3189 − 2889 = 300 digits → 300 ÷ 4 = 75 four-digit pages","999 + 75 = 1074"],"ans":"1074"},
 {"k":"ex","q":"How many numbers from 400 to 700 contain the digit 6 exactly twice?","steps":["400–599: only 466 and 566 → 2","600–699: second 6 in the tens (660–669, except 666) → 9; in the units (606, 616, … 696, except 666) → 9","700: none → 2 + 9 + 9"],"ans":"20"},
 {"k":"ex","q":"Find the sum of all the digits of the numbers from 1 to 100.","steps":["1–9: 45","10–99: tens 45 × 10 = 450, units 45 × 9 = 405","100: 1 → 45 + 450 + 405 + 1"],"ans":"901"},
 {"k":"trick","h":"<b>Digits from pages, backwards:</b> subtract the block totals 9, 189, 2889 until the rest divides evenly by the next digit-length.<br><b>Each digit 1–9 appears 20 times in 1 to 99</b> and 300 times in 1 to 999 — 0 appears less because numbers don’t start with 0."},
 {"k":"trap","h":"<b>Two-digit numbers are 90, not 99 or 89</b> (10 to 99 inclusive). <b>Numbers with a 6</b> vs <b>number of 6s</b>: 66 is one number but two 6s. Read which one is asked. <b>“Exactly twice”</b> removes 666."},
 {"k":"link","h":"Counting by blocks is the same thinking as counting multiples in a range (L6)."},
 {"k":"q","q":"How many times does the digit 7 appear when writing all numbers from 1 to 100?","o":["20","19","21","11"],"e":"Units: 7, 17, … 97 = 10; tens: 70–79 = 10 → 20 (77 counts twice)."}
],"sum":["Digits for 1 to N = n(N + 1) − 11…1","Block totals: 9, 189, 2889, 38889","Each digit 1–9 appears 20 times in 1–99, 300 times in 1–999","Sum of digits 1–100 = 901","n-digit numbers = 9 × 10ⁿ⁻¹"]})

L.append({"id":"L11","heat":2,"title":"Difference of squares & reversed digits","hi":"वर्गों का अंतर · अंकों का पलटना","blocks":[
 {"k":"hot","h":"<b>Two-digit / three-digit number questions appear in most CGL and CHSL papers</b> (“the number obtained by interchanging the digits exceeds it by 45…”). Difference-of-squares pair counting is a Tier 2 type."},
 {"k":"formula","title":"Difference of two squares","rows":[
  ["Identity","N = x² − y² = (x + y)(x − y)","write N = a × b with a = x + y, b = x − y"],
  ["Then","x = (a + b)/2, y = (a − b)/2","a and b must be both odd or both even"],
  ["Count pairs of natural numbers","factor pairs a &gt; b of N with the same parity","35 = 35 × 1, 7 × 5 → 2 pairs"],
  ["Never possible","N of the form 4k + 2 (2, 6, 10, 14 …)","one factor even, one odd"],
  ["Any odd N","N = ((N + 1)/2)² − ((N − 1)/2)²","15 = 8² − 7²"],
  ["Middle form","N = ab = ((a + b)/2)² − ((a − b)/2)²","from the PDF table"]]},
 {"k":"formula","title":"Two-digit and three-digit numbers","rows":[
  ["Two-digit number with digits x, y","10x + y; reversed 10y + x","—"],
  ["Sum with reverse","11(x + y)","always a multiple of 11"],
  ["Difference with reverse","9(x − y)","always a multiple of 9"],
  ["Three-digit 100x + 10y + z: swap hundreds and units","difference 99(x − z)","multiple of 99"],
  ["Swap hundreds and tens","difference 90(x − y)","multiple of 90"],
  ["Swap tens and units","difference 9(y − z)","multiple of 9"]]},
 {"k":"ex","q":"How many pairs of natural numbers have the difference of their squares equal to 35?","steps":["35 = 35 × 1 → x = 18, y = 17","35 = 7 × 5 → x = 6, y = 1","Both pairs are odd × odd"],"ans":"2"},
 {"k":"ex","q":"How many pairs of natural numbers have the difference of their squares equal to 36?","steps":["Factor pairs: 36 × 1, 18 × 2, 12 × 3, 9 × 4, 6 × 6","Same parity: 18 × 2 → x = 10, y = 8; 6 × 6 → x = 6, y = 0","y = 0 is not a natural number"],"ans":"1 (10² − 8²)","tip":"Some books count 6 × 6 and say 2 — only true if 0 is allowed."},
 {"k":"ex","q":"The sum of a two-digit number and the number formed by reversing its digits is 77. The digits differ by 1. Find the number (tens digit larger).","steps":["11(x + y) = 77 → x + y = 7","x − y = 1 → x = 4, y = 3"],"ans":"43"},
 {"k":"ex","q":"The digits of a two-digit number add up to 9. Reversing the digits increases the number by 45. Find the number.","steps":["x + y = 9; 9(y − x) = 45 → y − x = 5","x = 2, y = 7"],"ans":"27"},
 {"k":"ex","q":"Interchanging the hundreds and units digits of a three-digit number makes it 198 less. What is the difference between the hundreds and units digits?","steps":["99(x − z) = 198","x − z = 2"],"ans":"2"},
 {"k":"ex","q":"Interchanging the hundreds and tens digits of a three-digit number makes it 360 less. What is the difference between the hundreds and tens digits?","steps":["90(x − y) = 360","x − y = 4"],"ans":"4"},
 {"k":"trick","h":"<b>Reverse-digit answers are multiples:</b> sum → 11, difference → 9 (two digits); 99 or 90 for three digits. Use it to strike out options.<br><b>Pairs for x² − y² = N:</b> list factor pairs, keep the same-parity ones with different factors."},
 {"k":"trap","h":"<b>Numbers 4k + 2 can never be a difference of squares</b> (e.g. 30, 50). <b>For x² − y² = 36</b>, 6 × 6 gives y = 0 — reject it if natural numbers are asked. <b>In digit questions</b> the tens digit cannot be 0 (and the reversed number may then be a one-digit number)."},
 {"k":"link","h":"x² − y² = (x + y)(x − y) is the algebra identity a² − b²; counting factor pairs uses L3."},
 {"k":"q","q":"The difference between a two-digit number and the number formed by reversing its digits is always divisible by:","o":["9","11","10","7"],"e":"(10x + y) − (10y + x) = 9(x − y)."}
],"sum":["x² − y² = N: factor N = ab with a, b same parity; x = (a + b)/2, y = (a − b)/2","4k + 2 numbers are never a difference of squares","Two-digit: sum with reverse 11(x + y), difference 9(x − y)","Three-digit swaps: hundreds↔units 99(x − z), hundreds↔tens 90(x − y), tens↔units 9(y − z)"]})

L.append({"id":"L12","heat":1,"title":"Number bases: binary, octal, hex","hi":"आधार पद्धति · बाइनरी, ऑक्टल, हेक्स","blocks":[
 {"k":"hot","h":"<b>Occasional in SSC CGL/CHSL and common in other exams with a computer section:</b> “convert (1010101)₂ to decimal”, “(675)₈ to hexadecimal”. Two methods cover everything."},
 {"k":"table","title":"The four bases","head":["System","Base","Digits used"],"rows":[
  ["Binary","2","0, 1"],["Octal","8","0–7"],["Decimal","10","0–9"],["Hexadecimal","16","0–9, A (10), B (11), C (12), D (13), E (14), F (15)"]]},
 {"k":"formula","title":"How to convert","rows":[
  ["Any base → decimal","multiply each digit by the power of the base for its place and add","(175)₈ = 1 × 64 + 7 × 8 + 5 = 125"],
  ["Decimal → any base","divide by the base again and again; read the remainders from bottom to top","63 → (111111)₂;  425 → (1A9)₁₆"],
  ["Binary ↔ octal","group binary digits in 3s from the right (weights 4, 2, 1)","(101010)₂ = 101 | 010 = (52)₈"],
  ["Binary ↔ hex","group in 4s (weights 8, 4, 2, 1)","(1010101)₂ = 101 | 0101 = (55)₁₆"],
  ["Octal ↔ hex","go through binary (no direct method)","(675)₈ = 110 111 101 = 1 1011 1101 = (1BD)₁₆"],
  ["Decimal fraction → binary","multiply the fraction by 2 again and again; read the whole parts top to bottom","0.125 → 0.25 (0) → 0.5 (0) → 1.0 (1) → .001"]]},
 {"k":"table","title":"Powers to remember","head":["Power","2","8","16"],"rows":[["¹","2","8","16"],["²","4","64","256"],["³","8","512","4096"],["⁴","16","4096","65536"]]},
 {"k":"ex","q":"Convert (1010101)₂ to decimal.","steps":["1 × 64 + 0 × 32 + 1 × 16 + 0 × 8 + 1 × 4 + 0 × 2 + 1 × 1","= 64 + 16 + 4 + 1"],"ans":"85"},
 {"k":"ex","q":"Convert (675)₈ to binary and to hexadecimal.","steps":["Each octal digit → 3 bits: 6 = 110, 7 = 111, 5 = 101 → 110111101","Regroup in 4s from the right: 1 | 1011 | 1101 = 1, B, D"],"ans":"(110111101)₂ = (1BD)₁₆"},
 {"k":"ex","q":"Convert (6FD)₁₆ to octal.","steps":["Each hex digit → 4 bits: 0110 1111 1101","Regroup in 3s: 011 011 111 101 = 3 3 7 5"],"ans":"(3375)₈"},
 {"k":"ex","q":"Convert (425)₁₀ to hexadecimal.","steps":["425 ÷ 16 = 26 rem 9; 26 ÷ 16 = 1 rem 10 (A); 1 ÷ 16 = 0 rem 1","Read bottom to top: 1, A, 9"],"ans":"(1A9)₁₆"},
 {"k":"ex","q":"Convert (17.125)₁₀ to binary.","steps":["17 → 10001","0.125 × 2 = 0.25 → 0; 0.5 → 0; 1.0 → 1 → .001"],"ans":"(10001.001)₂"},
 {"k":"trick","h":"<b>8-4-2-1 rule:</b> write 8 4 2 1 above a hex digit and tick the weights that add up to it (D = 13 = 8 + 4 + 1 → 1101). For octal use 4 2 1.<br><b>Left base is decimal → divide; right base is decimal → multiply by powers.</b>"},
 {"k":"trap","h":"<b>Group from the right</b> (from the point) — pad the left with zeros, never the right. <b>Read division remainders bottom to top</b>. <b>No digit 8 or 9 in octal</b>; an option like (189)₈ is impossible."},
 {"k":"link","h":"Base 10 place value is what makes divisibility (L5) and digit questions (L10, L11) work: 10 ≡ 1 (mod 9) gives the digit-sum rule."},
 {"k":"q","q":"(1AD)₁₆ in decimal is:","o":["429","413","301","4013"],"e":"1 × 256 + 10 × 16 + 13 = 429."}
],"sum":["To decimal: digit × base^place, add","From decimal: divide repeatedly, read remainders bottom to top","Binary ↔ octal in 3s (4-2-1), binary ↔ hex in 4s (8-4-2-1); octal ↔ hex via binary","A–F = 10–15","Fractions to binary: multiply by 2, read whole parts top to bottom"]})

L.append({"id":"L13","heat":2,"title":"Series sums & number patterns","hi":"श्रेणियों का योग · संख्या पैटर्न","blocks":[
 {"k":"hot","h":"<b>Added — not in the book chapter but asked in most CGL papers under number system or simplification:</b> “sum of squares from 11 to 20”, “sum of all odd numbers from 1 to 99”, “how many perfect squares between 1 and 500”. One formula each."},
 {"k":"formula","title":"Standard sums","rows":[
  ["1 + 2 + … + n","n(n + 1)/2","1 to 100 → 5050"],["1² + 2² + … + n²","n(n + 1)(2n + 1)/6","1 to 10 → 385"],
  ["1³ + 2³ + … + n³","[n(n + 1)/2]²","1 to 10 → 3025 (= 55²)"],["First n odd numbers","n²","1 + 3 + … + 99 (50 terms) = 2500"],
  ["First n even numbers","n(n + 1)","2 + 4 + … + 100 = 2550"],["Squares of first n odd numbers","n(2n − 1)(2n + 1)/3","1² + 3² + 5² = 35"],
  ["Squares of first n even numbers","2n(n + 1)(2n + 1)/3","2² + 4² + … + 20² = 1540"]]},
 {"k":"formula","title":"AP, GP and ranges","rows":[
  ["Terms of an AP","n = (last − first)/d + 1","7, 14, …, 294 → 42 terms"],
  ["Sum of an AP","n/2 × (first + last)","multiples of 7 from 105 to 294: 28 × 399/2 = 5586"],
  ["Sum from a to b of squares","S(b) − S(a − 1)","11² + … + 20² = 2870 − 385 = 2485"],
  ["GP sum","a(rⁿ − 1)/(r − 1)","1 + 2 + 4 + … + 2⁹ = 1023"],
  ["Perfect squares from 1 to N","⌊√N⌋","1 to 500 → 22"],
  ["Perfect cubes from 1 to N","⌊∛N⌋","1 to 1000 → 10"]]},
 {"k":"ex","q":"Find 11² + 12² + … + 20².","steps":["Sum to 20: 20 × 21 × 41/6 = 2870","Sum to 10: 10 × 11 × 21/6 = 385","2870 − 385"],"ans":"2485"},
 {"k":"ex","q":"Find the sum of all multiples of 7 between 100 and 300.","steps":["First 105 (7 × 15), last 294 (7 × 42) → 42 − 15 + 1 = 28 terms","Sum = 28/2 × (105 + 294) = 14 × 399"],"ans":"5586"},
 {"k":"ex","q":"Find 1³ + 2³ + … + 15³.","steps":["[15 × 16/2]² = 120²"],"ans":"14400"},
 {"k":"trick","h":"<b>Sum of cubes = square of the sum</b>: 1³ + … + n³ = (1 + … + n)². <b>Odd numbers 1 to (2n − 1)</b> sum to n² — count the terms, square it.<br><b>Middle-term trick:</b> sum of an AP = number of terms × middle term (or average of first and last)."},
 {"k":"trap","h":"<b>Count the terms correctly:</b> from 105 to 294 in steps of 7 is (294 − 105)/7 + 1 = 28, not 27. <b>“Between 1 and 500”</b> may or may not include the ends — 1 itself is a perfect square."},
 {"k":"link","h":"Sum of digits from 1 to 100 (L10) uses the same 1 + … + 9 = 45 block. The GP sum gives the sum-of-factors brackets in L4: 1 + 2 + 4 + 8 = 2⁴ − 1."},
 {"k":"q","q":"Sum of the first 20 odd numbers is:","o":["400","210","420","441"],"e":"n² = 20² = 400."}
],"sum":["Σn = n(n + 1)/2; Σn² = n(n + 1)(2n + 1)/6; Σn³ = [n(n + 1)/2]²","First n odd numbers → n²; first n even → n(n + 1)","AP: n = (l − a)/d + 1, S = n(a + l)/2","Range sums: S(b) − S(a − 1)","Perfect squares up to N = ⌊√N⌋"]})

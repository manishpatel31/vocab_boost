# Lessons 1–5
L = []
L.append({"id":"L1","heat":2,"title":"Classification of numbers & primes","hi":"संख्याओं का वर्गीकरण और अभाज्य संख्याएँ","blocks":[
 {"k":"hot","h":"<b>Asked in most CGL shifts in some form.</b> Directly: “how many primes from 1 to 100?”, “which of these is irrational?”, “0.2333… as a fraction”. Indirectly: every factor, remainder and divisibility question starts with knowing what a prime, a co-prime and a composite number is. Typical time: 20–40 seconds."},
 {"k":"p","h":"All the numbers you meet in SSC are <b>real numbers</b> (they sit on the number line). A real number is either <b>rational</b> (can be written as P/Q with integers P, Q and Q ≠ 0) or <b>irrational</b> (cannot: √2, √3, π). Square roots of negative numbers (√−1 = <i>i</i>) are <b>imaginary</b>; real + imaginary together make <b>complex</b> numbers."},
 {"k":"table","title":"The family tree at a glance","head":["Type","Meaning","Examples"],"rows":[
  ["Natural","counting numbers","1, 2, 3, 4 …"],["Whole","natural numbers and 0","0, 1, 2, 3 …"],["Integers","whole numbers and negatives","… −2, −1, 0, 1, 2 …"],
  ["Rational","P/Q, Q ≠ 0; decimal ends or repeats","5/3, −8, 22/7, 0.75, 0.333…"],["Irrational","decimal never ends, never repeats","√2, √3, π, 0.1432507…"],
  ["Even / odd","divisible by 2 (2k) / not (2k ± 1)","0, 2, 4 / 1, 3, 5"],["Prime","exactly two factors: 1 and itself","2, 3, 5, 7, 11 …"],
  ["Composite","more than two factors","4, 6, 8, 9 (4 smallest, 9 smallest odd)"],["Co-prime","HCF = 1 (need not be prime)","(2, 3), (16, 9), (25, 19)"],
  ["Twin primes","two primes with a gap of 2","(3, 5), (5, 7), (11, 13), (17, 19)"],["Perfect number","sum of factors except itself = the number","6, 28, 496, 8128"]]},
 {"k":"facts","title":"Prime facts SSC repeats","rows":[
  ["2","the only even prime and the smallest prime"],["1","neither prime nor composite"],["3, 5, 7","the only three consecutive odd numbers that are all prime"],
  ["Count 1–100","25 primes (15 up to 50, 10 from 51 to 100)"],["Count 1–200 / 1–500 / 1–1000","46 / 95 / 168"],
  ["2-digit primes","21 (11 to 97); largest 97"],["3-digit primes","smallest 101, largest 997"],["4-digit","smallest prime 1009"],
  ["Primes up to 100","2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97"]]},
 {"k":"formula","title":"Testing whether a number is prime","rows":[
  ["Square-root test","take √N, round down; if no prime up to it divides N, N is prime","137: √137 ≈ 11.7 → test 2, 3, 5, 7, 11 → none divides → prime"],
  ["6k ± 1 form","every prime greater than 3 is 6k − 1 or 6k + 1","the reverse is not true: 25 = 6 × 4 + 1 is not prime"],
  ["Quick filters","even (except 2), ending in 5 (except 5), digit sum divisible by 3 → not prime","then only 7, 11, 13 … need testing"]]},
 {"k":"formula","title":"Recurring decimals → fractions (added: asked often)","rows":[
  ["0.aaa…","a/9","0.777… = 7/9"],["0.ababab…","ab/99","0.3636… = 36/99 = 4/11"],
  ["0.abbb…","(ab − a)/90","0.2333… = (23 − 2)/90 = 21/90 = 7/30"],["0.abcbc…","(abc − a)/990","0.1454545… = (145 − 1)/990 = 144/990 = 8/55"],
  ["Rule","numerator = (all digits) − (digits that do not repeat); one 9 per repeating digit, one 0 per non-repeating digit after the point","whole-number part is added separately: 2.3636… = 2 + 4/11"],
  ["Terminating?","P/Q in lowest terms ends only if Q has no prime factor other than 2 and 5","7/80 ends (80 = 2⁴ × 5); 5/12 repeats (3 in 12)"]]},
 {"k":"ex","q":"Is 137 a prime number?","steps":["√137 ≈ 11.7, so test the primes up to 11: 2, 3, 5, 7, 11","137 is odd; digit sum 11 (not a multiple of 3); does not end in 0/5","137 ÷ 7 = 19.57…, 137 ÷ 11 = 12.45… — no prime divides it"],"ans":"Yes, 137 is prime","tip":"You never need to test beyond √N."},
 {"k":"ex","q":"What is the average of the prime numbers from 80 to 100?","steps":["Primes between 80 and 100: test with 2, 3, 5, 7 (√100 = 10)","Odd numbers not ending in 5 and not divisible by 3 or 7: 83, 89, 97","Average = (83 + 89 + 97)/3 = 269/3"],"ans":"89.67"},
 {"k":"ex","q":"x, y, z are distinct primes with x &lt; y &lt; z and x + y + z = 70. Which of these can z be: 29, 43, 31, 37?","steps":["Odd + odd + odd is odd, but 70 is even → one prime must be 2, the smallest, so x = 2 and y + z = 68","z = 29 → y = 39 (not prime); z = 43 → y = 25 (not prime)","z = 31 → y = 37 &gt; z (fails y &lt; z); z = 37 → y = 31 ✓"],"ans":"z = 37","tip":"An even total of three primes always forces one of them to be 2."},
 {"k":"ex","q":"x, y, z are primes with x + y + z = 38. What is the largest possible value of x?","steps":["38 is even → one of the primes is 2 (three odd primes would give an odd sum)","To make x largest, make the other two smallest: 2 and the next prime that works","x + y = 36 with y prime: y = 5 → x = 31 (prime) ✓"],"ans":"31"},
 {"k":"trick","h":"<b>Primes count ladder:</b> 0 →15→ 50 →10→ 100 (25 primes); 200 → 46; 500 → 95; 1000 → 168.<br><b>Three primes adding to an even number</b> (or two primes adding to an odd number) → one of them is 2.<br><b>Recurring decimal:</b> “all digits minus the non-repeating part, over 9s for repeating and 0s for non-repeating digits”."},
 {"k":"trap","h":"<b>1 is not prime</b> (only one factor). <b>Co-prime numbers need not be prime</b>: 8 and 9 are co-prime. <b>π is irrational but 22/7 is rational</b> — 22/7 is only an approximation of π. <b>0 is a whole number and an integer, but not a natural number.</b> <b>√4 = 2 is rational</b> — not every square root is irrational."},
 {"k":"link","h":"Primes are the building blocks for L3–L4 (every factor formula starts with the prime factorisation). The 2-and-5 rule for terminating decimals is the same idea as counting zeros in L9."},
 {"k":"q","q":"How many prime numbers are there between 1 and 50?","o":["15","25","10","16"],"e":"2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 → 15."}
],"sum":["Natural ⊂ whole ⊂ integers ⊂ rational ⊂ real; irrational = non-ending, non-repeating decimals","25 primes up to 100, 46 up to 200, 95 up to 500, 168 up to 1000; 2 is the only even prime; 1 is neither","Prime test: try primes up to √N only; every prime > 3 is 6k ± 1","0.abbb… = (ab − a)/90; 0.abab… = ab/99; P/Q terminates only if Q = 2ᵐ × 5ⁿ","Three primes with an even sum → one of them is 2"]})

L.append({"id":"L2","heat":3,"title":"Unit digit & cyclicity","hi":"इकाई का अंक और चक्रीयता","blocks":[
 {"k":"hot","h":"<b>One of the most repeated number-system types in CGL Tier 1 and CHSL.</b> “Find the unit digit of (387)<sup>245</sup> × (433)<sup>69</sup>” or of a factorial sum. With the cycle table below it takes 20–30 seconds."},
 {"k":"p","h":"The unit digit of a sum, difference or product depends <b>only on the unit digits</b> of the numbers. So 232 × 235 has the same unit digit as 2 × 5 = 10 → <b>0</b>. For powers, unit digits repeat in a fixed cycle — that is <b>cyclicity</b>."},
 {"k":"table","title":"Cyclicity of every digit","head":["Unit digit","Powers 1, 2, 3, 4","Cycle length"],"rows":[
  ["0, 1, 5, 6","always 0, 1, 5, 6","1"],["2","2, 4, 8, 6","4"],["3","3, 9, 7, 1","4"],["4","4, 6 (odd power 4, even power 6)","2"],
  ["7","7, 9, 3, 1","4"],["8","8, 4, 2, 6","4"],["9","9, 1 (odd power 9, even power 1)","2"]]},
 {"k":"formula","title":"Unit digit of a power N = x<sup>y</sup>","rows":[
  ["Step 1","keep only the unit digit of x","(382)<sup>575</sup> → 2<sup>575</sup>"],
  ["Step 2","divide the last two digits of the power by 4; keep the remainder r","75 ÷ 4 → r = 3"],
  ["Step 3","unit digit = (unit digit of x)<sup>r</sup>; if r = 0 use power 4","2³ = 8 → answer 8"],
  ["Digits 4 and 9","odd power → 4 / 9; even power → 6 / 1","9<sup>481</sup> → 9;  4<sup>100</sup> → 6"],
  ["Difference","if the second unit digit is bigger, add 10 to the first","2383 − 1689 → 13 − 9 = 4"]]},
 {"k":"formula","title":"Factorials and last two digits (added)","rows":[
  ["n! for n ≥ 5","unit digit 0 (contains 2 × 5)","so in a sum of factorials only 1! to 4! matter"],
  ["1! + 2! + … + n!","unit digit 3 for every n ≥ 4","1 + 2 + 6 + 24 = 33"],
  ["Last two digits, base ending in 1","tens digit = unit digit of (tens digit of base × power); unit digit 1","31<sup>786</sup>: 3 × 786 = 2358 → 8 → …81"],
  ["Last two digits of 5<sup>n</sup>","25 for every n ≥ 2","…25"],["Powers of 76 / 25 / 376","always end in 76 / 25 / 376","76<sup>n</sup> → 76"]]},
 {"k":"ex","q":"Find the unit digit of (382)<sup>575</sup>.","steps":["Unit digit of base: 2 (cycle 2, 4, 8, 6)","Last two digits of the power: 75; 75 ÷ 4 leaves 3","2³ = 8"],"ans":"8"},
 {"k":"ex","q":"Find the unit digit of (187)<sup>282</sup> × (529)<sup>321</sup> × (343)<sup>236</sup>.","steps":["7<sup>282</sup>: 82 ÷ 4 leaves 2 → 7² = 49 → 9","9<sup>321</sup>: odd power → 9","3<sup>236</sup>: 36 ÷ 4 leaves 0 → use 3⁴ = 81 → 1","9 × 9 × 1 = 81 → 1"],"ans":"1"},
 {"k":"ex","q":"Find the unit digit of (789)<sup>315</sup> + (232)<sup>644</sup> + (528)<sup>253</sup>.","steps":["9<sup>315</sup>: odd → 9","2<sup>644</sup>: 44 ÷ 4 leaves 0 → 2⁴ = 16 → 6","8<sup>253</sup>: 53 ÷ 4 leaves 1 → 8","9 + 6 + 8 = 23 → 3"],"ans":"3"},
 {"k":"ex","q":"Find the unit digit of (982)<sup>481</sup> − (219)<sup>241</sup>.","steps":["2<sup>481</sup>: 81 ÷ 4 leaves 1 → 2","9<sup>241</sup>: odd → 9","2 − 9 is negative → (2 + 10) − 9 = 3"],"ans":"3","tip":"The first number is bigger, so borrowing 10 is safe."},
 {"k":"ex","q":"Find the unit digit of 1! + 2! + 3! + … + 100!.","steps":["5! onwards every term ends in 0","1 + 2 + 6 + 24 = 33"],"ans":"3"},
 {"k":"trick","h":"<b>Remainder 0 means power 4, not power 0.</b> The cycle is 4 long, so a power that is a multiple of 4 lands on the 4th term (2 → 6, 3 → 1, 7 → 1, 8 → 6).<br><b>Any product with a 5 and an even number</b> ends in 0. <b>Odd × 5</b> ends in 5."},
 {"k":"trap","h":"<b>Divide only the last two digits of the power</b> by 4 — but use the whole power for digits 4 and 9 (odd/even). <b>Unit digit of a difference</b> can need a borrow: 13 − 9, not 3 − 9. <b>Never multiply the base by the power</b>: 3<sup>4</sup> ends in 1 (81), not in 2 (3 × 4 = 12)."},
 {"k":"link","h":"Cyclicity of remainders (L8) works the same way: 2ⁿ ÷ 7 repeats 2, 4, 1. Trailing zeros (L9) are the extreme case: once 2 × 5 appears the unit digit is 0 for good."},
 {"k":"q","q":"Unit digit of 7^95 is:","o":["3","7","9","1"],"e":"95 ÷ 4 leaves 3 → 7³ = 343 → 3."}
],"sum":["Only unit digits matter in +, −, ×","Cycles: 2 (2,4,8,6), 3 (3,9,7,1), 7 (7,9,3,1), 8 (8,4,2,6); 4 and 9 alternate; 0, 1, 5, 6 never change","Power ÷ 4 (last two digits): remainder r → use r; remainder 0 → use 4","1! + 2! + … + n! ends in 3 for n ≥ 4","Negative unit difference → add 10"]})

L.append({"id":"L3","heat":3,"title":"Factors I: how many factors","hi":"गुणनखंडों की संख्या","blocks":[
 {"k":"hot","h":"<b>A favourite of CGL Tier 1 and Tier 2.</b> “Number of factors of 360”, “even/odd factors of 720”, “factors that are perfect squares”, “factors divisible by 10”. All of them come from one prime factorisation and take under a minute."},
 {"k":"p","h":"Write the number as a product of primes: <b>N = a<sup>p</sup> × b<sup>q</sup> × c<sup>r</sup></b> (a, b, c prime). A factor of N picks a power of a from 0 to p, a power of b from 0 to q, and so on — that is why every formula below multiplies “(choices for a) × (choices for b) × …”."},
 {"k":"formula","title":"Counting factors (N = a<sup>p</sup> × b<sup>q</sup> × c<sup>r</sup>)","rows":[
  ["Total factors","(p + 1)(q + 1)(r + 1)","360 = 2³ × 3² × 5 → 4 × 3 × 2 = 24"],
  ["Odd factors","drop the power of 2: (q + 1)(r + 1)","360 → 3 × 2 = 6"],
  ["Even factors","total − odd = p(q + 1)(r + 1) (a = 2)","360 → 24 − 6 = 18"],
  ["Prime factors","number of different primes","720 = 2⁴ × 3² × 5 → 3"],
  ["Composite factors","total − prime factors − 1","720 → 30 − 3 − 1 = 26 (1 is neither)"],
  ["Factors divisible by k","factors of N/k (when k divides N)","720 by 10 → 72 = 2³ × 3² → 12"]]},
 {"k":"formula","title":"Special factors","rows":[
  ["Perfect-square factors","(⌊p/2⌋ + 1)(⌊q/2⌋ + 1)(⌊r/2⌋ + 1)","720 = 2⁴ × 3² × 5 → 3 × 2 × 1 = 6"],
  ["Perfect-cube factors","(⌊p/3⌋ + 1)(⌊q/3⌋ + 1)(⌊r/3⌋ + 1)","720 → 2 × 1 × 1 = 2 (1 and 8)"],
  ["Square and cube both","use ⌊power/6⌋ + 1","720 → 1 (only 1)"],
  ["Co-prime factor pairs, 2 primes","(p + 1)(q + 1) + pq","56 = 2³ × 7 → 4 × 2 + 3 = 11"],
  ["Co-prime factor pairs, 3 primes","(p + 1)(q + 1)(r + 1) + pq + qr + rp + 3pqr","720 → 30 + 8 + 2 + 4 + 24 = 68"],
  ["Ways to write N = A × B","total/2; (total + 1)/2 if N is a perfect square","36 has 9 factors → 5 ways (6 × 6 counted once)"]]},
 {"k":"ex","q":"Find the number of even and odd factors of 360.","steps":["360 = 2³ × 3² × 5¹","Total = 4 × 3 × 2 = 24","Odd = (2 + 1)(1 + 1) = 6 (ignore the 2s)","Even = 24 − 6 = 18 (or 3 × 3 × 2)"],"ans":"18 even, 6 odd"},
 {"k":"ex","q":"N = 720. How many factors are perfect squares, how many perfect cubes, and how many both?","steps":["720 = 2⁴ × 3² × 5¹","Squares: powers of 2 from {0, 2, 4}, of 3 from {0, 2}, of 5 from {0} → 3 × 2 × 1 = 6","Cubes: 2 from {0, 3}, 3 from {0}, 5 from {0} → 2","Both (sixth powers): only 2⁰3⁰5⁰ = 1 → 1"],"ans":"6, 2 and 1"},
 {"k":"ex","q":"How many factors of 14400 are divisible by 18 but not by 36?","steps":["14400 = 2⁶ × 3² × 5²","Divisible by 18 = 2 × 3²: factors of 14400/18 = 800 = 2⁵ × 5² → 6 × 3 = 18","Divisible by 36 = 2² × 3²: factors of 400 = 2⁴ × 5² → 5 × 3 = 15","18 − 15 = 3"],"ans":"3"},
 {"k":"ex","q":"When 732 is divided by a positive integer x, the remainder is 12. How many values of x are there?","steps":["732 − 12 = 720 must be divisible by x, and x must be greater than 12 (a remainder is always smaller than the divisor)","720 = 2⁴ × 3² × 5 has 5 × 3 × 2 = 30 factors","Factors up to 12: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 → 10","30 − 10 = 20"],"ans":"20"},
 {"k":"ex","q":"In how many ways can two factors of 56 be chosen that are co-prime to each other?","steps":["56 = 2³ × 7¹ → p = 3, q = 1","(p + 1)(q + 1) + pq = 4 × 2 + 3 = 11"],"ans":"11","tip":"The count includes the pair (1, 1) and every pair with 1."},
 {"k":"trick","h":"<b>Only perfect squares have an odd number of factors.</b> “Which number has exactly 3 factors?” → the square of a prime (4, 9, 25, 49…).<br><b>Divisible by k</b> → just count the factors of N/k. <b>Divisible by k but not by m</b> → (factors of N/k) − (factors of N/(LCM of k, m))."},
 {"k":"trap","h":"<b>Factorise completely before counting:</b> 360 = 8 × 45 gives (1 + 1)(1 + 1) = 4 — wrong; you must use primes, 2³ × 3² × 5. <b>Composite factors</b>: subtract the prime factors <i>and</i> 1. <b>Remainder questions</b> (732 → 12): drop the divisors that are not bigger than the remainder."},
 {"k":"link","h":"The same factorisation gives the sum and product of factors in L4, the highest power of a prime in n! in L9, and HCF/LCM (lowest and highest powers)."},
 {"k":"q","q":"How many factors does 480 have?","o":["24","20","18","32"],"e":"480 = 2⁵ × 3 × 5 → 6 × 2 × 2 = 24."}
],"sum":["N = aᵖ bᵠ cʳ → (p + 1)(q + 1)(r + 1) factors","Odd factors: drop the 2s; even = total − odd","Composite = total − primes − 1","Perfect-square factors: ⌊p/2⌋ + 1 per prime; cubes ⌊p/3⌋ + 1","Factors divisible by k = factors of N/k","Odd number of factors ⇔ N is a perfect square"]})

L.append({"id":"L4","heat":2,"title":"Factors II: sum, product & reciprocals","hi":"गुणनखंडों का योग, गुणनफल","blocks":[
 {"k":"hot","h":"<b>Asked in CGL Tier 2 and occasionally Tier 1:</b> “sum of all factors of 360”, “sum of even factors of 720”, “product of all factors of 360”. One formula each — no listing."},
 {"k":"formula","title":"Sum of factors (N = a<sup>p</sup> × b<sup>q</sup> × c<sup>r</sup>)","rows":[
  ["All factors","(1 + a + … + a<sup>p</sup>)(1 + b + … + b<sup>q</sup>)(1 + c + … + c<sup>r</sup>)","= (a<sup>p+1</sup> − 1)/(a − 1) × (b<sup>q+1</sup> − 1)/(b − 1) × …"],
  ["Odd factors (a = 2)","leave out the 2-bracket: (1 + b + … + b<sup>q</sup>)(1 + c + … + c<sup>r</sup>)","360 → 13 × 6 = 78"],
  ["Even factors (a = 2)","(2 + 2² + … + 2<sup>p</sup>) × the other brackets","= all − odd: 360 → 1170 − 78 = 1092"],
  ["Product of all factors","N<sup>n/2</sup>, n = number of factors","360 has 24 factors → 360<sup>12</sup>"],
  ["Sum of reciprocals of factors","(sum of factors) ÷ N","16 → 31/16"],
  ["Perfect number","sum of all factors = 2N","28: 1 + 2 + 4 + 7 + 14 + 28 = 56"]]},
 {"k":"ex","q":"Find the sum of all factors of 360.","steps":["360 = 2³ × 3² × 5","(1 + 2 + 4 + 8)(1 + 3 + 9)(1 + 5)","= 15 × 13 × 6 = 1170"],"ans":"1170"},
 {"k":"ex","q":"Find the sum of all even factors of 360.","steps":["Even brackets: (2 + 4 + 8)(1 + 3 + 9)(1 + 5)","= 14 × 13 × 6 = 1092"],"ans":"1092","tip":"Check: all (1170) − odd (78) = 1092."},
 {"k":"ex","q":"Find the sum of all odd factors of 720.","steps":["720 = 2⁴ × 3² × 5","Drop the 2s: (1 + 3 + 9)(1 + 5) = 13 × 6"],"ans":"78"},
 {"k":"ex","q":"Find the sum of all even factors of 720.","steps":["(2 + 4 + 8 + 16)(1 + 3 + 9)(1 + 5)","= 30 × 13 × 6 = 2340"],"ans":"2340"},
 {"k":"ex","q":"What is the product of all factors of 360?","steps":["360 has 24 factors","Factors pair up as d × (360/d) = 360 → 12 pairs","Product = 360<sup>24/2</sup>"],"ans":"360<sup>12</sup>"},
 {"k":"ex","q":"Find the sum of the reciprocals of the factors of 16.","steps":["Factors: 1, 2, 4, 8, 16; their sum = 31","Sum of reciprocals = 31/16"],"ans":"31/16"},
 {"k":"trick","h":"<b>Odd factors never depend on the power of 2</b> — 360, 720 and 1440 all have odd-factor sum 78. <b>Product of factors</b> = N<sup>(number of factors)/2</sup>: just count factors first.<br><b>Sum of reciprocals × N = sum of factors</b> — handy when one is given and the other is asked."},
 {"k":"trap","h":"<b>Sum of factors includes 1 and N itself.</b> For perfect-number checks leave N out (sum of proper factors = N). <b>Even-factor bracket starts at 2</b>, not 1."},
 {"k":"link","h":"Uses the factorisation of L3. A perfect number is the special case σ(N) = 2N; 6, 28, 496 and 8128 are the ones SSC uses."},
 {"k":"q","q":"Sum of all factors of 100 is:","o":["217","216","117","200"],"e":"100 = 2² × 5² → (1 + 2 + 4)(1 + 5 + 25) = 7 × 31 = 217."}
],"sum":["Sum of factors = product of (1 + a + … + aᵖ) brackets","Odd-factor sum: drop the 2-bracket; even = all − odd","Product of factors = N^(n/2)","Sum of reciprocals = σ(N)/N","Perfect number: σ(N) = 2N (6, 28, 496, 8128)"]})

L.append({"id":"L5","heat":3,"title":"Divisibility rules & missing digits","hi":"विभाज्यता के नियम","blocks":[
 {"k":"hot","h":"<b>Every CGL/CHSL paper has a “find the missing digit” question</b>: “If 7y9745x2 is divisible by 72, find 2x − y”, “479xyz divisible by 7, 11 and 13”. Know the rules for 2–13, then split any composite divisor into co-prime parts."},
 {"k":"table","title":"Divisibility rules","head":["By","Rule","Example"],"rows":[
  ["2, 4, 8, 16","last 1, 2, 3, 4 digits divisible by 2, 4, 8, 16","48512: 512 ÷ 8 ✓"],["3, 9","sum of digits divisible by 3 / 9","523872: 27 ✓ both"],
  ["5, 25, 125","last 1, 2, 3 digits divisible by 5, 25, 125 (end in 0/5; 00, 25, 50, 75)","375, 1000"],["6","divisible by 2 and by 3","56934"],
  ["7","(last three digits) − (the rest) in triplets, alternately, divisible by 7; or: double the last digit and subtract","12348: 348 − 12 = 336 = 7 × 48 ✓"],
  ["11","(sum of odd-place digits) − (sum of even-place digits) = 0 or a multiple of 11","166452: 12 − 12 = 0 ✓"],
  ["13","add 4 × last digit to the rest; repeat","169: 16 + 36 = 52 = 13 × 4 ✓"],["17","subtract 5 × last digit from the rest","391: 39 − 5 = 34 ✓"],
  ["7, 11, 13 together","abcabc = abc × 1001 = abc × 7 × 11 × 13","123123, 574574"],["3, 7, 13, 37 together","ababab = ab × 10101 = ab × 3 × 7 × 13 × 37","353535"],
  ["101","abab = ab × 101","2525 = 25 × 101"],["Composite k","split k into co-prime factors and test each: 12 = 3 × 4, 24 = 3 × 8, 72 = 8 × 9","never 24 = 4 × 6 (not co-prime)"]]},
 {"k":"ex","q":"If the six-digit number 479xyz is exactly divisible by 7, 11 and 13, then {(y + z) × x} is:","steps":["7 × 11 × 13 = 1001, and abcabc = abc × 1001","So 479xyz = 479479 → x = 4, y = 7, z = 9","(7 + 9) × 4 = 64"],"ans":"64"},
 {"k":"ex","q":"If the seven-digit number 35345xy is divisible by 40, find the least value of 4x + 5y.","steps":["40 = 5 × 8 (co-prime)","By 5 (and 8 needs even): y = 0","By 8: last three digits 5x0 divisible by 8 → x = 2 (520) or 6 (560)","Least: 4 × 2 + 5 × 0 = 8"],"ans":"8"},
 {"k":"ex","q":"If 7y9745x2 is divisible by 72, find 2x − y for the greatest value of x.","steps":["72 = 8 × 9","By 8: 5x2 divisible by 8 → x = 1, 5 or 9; greatest x = 9","By 9: 7 + y + 9 + 7 + 4 + 5 + 9 + 2 = 43 + y → y = 2","2 × 9 − 2 = 16"],"ans":"16"},
 {"k":"ex","q":"If the 5-digit number 535ab is divisible by 3, 7 and 11, find a² − b² + ab.","steps":["LCM(3, 7, 11) = 231","53599 ÷ 231 leaves remainder 7 → 53599 − 7 = 53592 is divisible","a = 9, b = 2 → 81 − 4 + 18"],"ans":"95","tip":"Take the largest number of the pattern and subtract the remainder."},
 {"k":"trick","h":"<b>Composite divisor → co-prime pieces.</b> 72 = 8 × 9, 88 = 8 × 11, 45 = 5 × 9, 36 = 4 × 9.<br><b>Largest-number trick:</b> put 9s in the blanks, divide by the divisor, subtract the remainder — the digits that change are your answer (works when the blanks are the last digits)."},
 {"k":"trap","h":"<b>Divisible by 4 and 6 does not mean divisible by 24</b> (12 is divisible by both). Use co-prime parts. <b>For 11, places are counted from the right</b> (unit place is odd place) — the result is the same as long as you are consistent. <b>Rule for 8 needs three digits</b> — don’t stop at two."},
 {"k":"link","h":"Divisibility is remainder 0 — L7 and L8 are the general case. Counting how many numbers in a range are divisible by k is L6."},
 {"k":"q","q":"Which digit should replace * so that 5*2 is divisible by 8?","o":["5","4","3","2"],"e":"552 ÷ 8 = 69. Other options: 542, 532, 522 are not multiples of 8."}
],"sum":["2/4/8/16 → last 1/2/3/4 digits; 5/25/125 → last 1/2/3 digits","3/9 → digit sum; 11 → alternate-digit difference 0 or 11k","7, 11, 13 → abcabc (× 1001); 3, 7, 13, 37 → ababab (× 10101); 101 → abab","13: add 4 × last digit; 17: subtract 5 × last digit","Composite divisor → test its co-prime factors (72 = 8 × 9)"]})

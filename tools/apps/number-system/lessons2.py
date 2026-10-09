# Lessons 6–9
L = []
L.append({"id":"L6","heat":2,"title":"Counting multiples in a range","hi":"किसी सीमा में विभाज्य संख्याएँ","blocks":[
 {"k":"hot","h":"<b>Regular in CGL and CHSL:</b> “How many numbers between 300 and 700 are divisible by 5, 6 and 8?”, “How many numbers from 1 to 100 are divisible by neither 3 nor 5?” — floor division and one subtraction."},
 {"k":"formula","title":"Counting with floor division (⌊x⌋ = whole part of x)","rows":[
  ["Multiples of k in 1 to N","⌊N/k⌋","1 to 100, multiples of 3 → 33"],
  ["Multiples of k from A to B","⌊B/k⌋ − ⌊(A − 1)/k⌋","300 to 700 by 120 → 5 − 2 = 3"],
  ["Divisible by a and b","multiples of LCM(a, b)","by 5, 6 and 8 → by 120"],
  ["Divisible by a or b","N(a) + N(b) − N(LCM)","1–100 by 3 or 5 → 33 + 20 − 6 = 47"],
  ["Divisible by neither","total − N(a) − N(b) + N(LCM)","1–100 → 100 − 47 = 53"],
  ["Shortcut for neither (co-prime a, b)","N × (1 − 1/a)(1 − 1/b) when N is a multiple of ab; fix the leftover by hand","90 × 2/3 × 4/5 = 48, then 91–100 add 5 → 53"],
  ["Divisible by a but not b","N(a) − N(LCM)","1–100 by 3 not 5 → 33 − 6 = 27"]]},
 {"k":"formula","title":"Common factor in a sum of powers","rows":[
  ["Take out the smallest power","2<sup>25</sup> + 2<sup>26</sup> + 2<sup>27</sup> = 2<sup>25</sup>(1 + 2 + 4)","= 2<sup>25</sup> × 7 → divisible by 7"],
  ["Same idea with 3","3<sup>n</sup> + 3<sup>n+1</sup> + 3<sup>n+2</sup> = 3<sup>n</sup> × 13","divisible by 13"],
  ["Consecutive integers","product of n consecutive integers is divisible by n!","3 consecutive → divisible by 6"]]},
 {"k":"ex","q":"2<sup>25</sup> + 2<sup>26</sup> + 2<sup>27</sup> is divisible by:","steps":["Take out 2<sup>25</sup>: 2<sup>25</sup>(2⁰ + 2¹ + 2²)","= 2<sup>25</sup> × (1 + 2 + 4) = 2<sup>25</sup> × 7"],"ans":"7"},
 {"k":"ex","q":"How many numbers between 300 and 700 are divisible by 5, 6 and 8?","steps":["LCM(5, 6, 8) = 120","Multiples of 120 between 300 and 700: 360, 480, 600"],"ans":"3"},
 {"k":"ex","q":"How many numbers from 1 to 100 are divisible by neither 3 nor 5?","steps":["By 3: ⌊100/3⌋ = 33; by 5: 20; by 15: 6","By 3 or 5: 33 + 20 − 6 = 47","Neither: 100 − 47"],"ans":"53"},
 {"k":"ex","q":"How many numbers from 700 to 950 (both included) are divisible by neither 3 nor 7?","steps":["Total = 950 − 700 + 1 = 251","By 3: ⌊950/3⌋ − ⌊699/3⌋ = 316 − 233 = 83","By 7: 135 − 99 = 36; by 21: 45 − 33 = 12","Neither: 251 − (83 + 36 − 12) = 251 − 107"],"ans":"144","tip":"Use ⌊B/k⌋ − ⌊(A − 1)/k⌋ for each count, never a rough ÷."},
 {"k":"trick","h":"<b>“Both” means the LCM, “either” means add then subtract the LCM.</b> For a range, always count up to B and subtract the count up to A − 1.<br><b>Sum of equal-ratio powers</b>: factor out the smallest power and add the small numbers left."},
 {"k":"trap","h":"<b>“Between 300 and 700”</b> usually excludes the end points — check whether 300 or 700 itself is a multiple. <b>Don’t divide the range length by k</b>: 700 to 950 has 251 numbers, but the number of multiples of 7 depends on where the range starts (36 here, not ⌊251/7⌋ = 35)."},
 {"k":"link","h":"LCM is the HCF & LCM chapter; divisibility tests are L5. The same inclusion–exclusion counts students who like tea or coffee in set problems."},
 {"k":"q","q":"How many numbers from 1 to 200 are divisible by 4 but not by 6?","o":["34","50","16","33"],"e":"By 4: 50; by both 4 and 6 (LCM 12): 16 → 50 − 16 = 34."}
],"sum":["Multiples of k from A to B = ⌊B/k⌋ − ⌊(A − 1)/k⌋","Both a and b → LCM; a or b → N(a) + N(b) − N(LCM)","Neither = total − (a or b)","aⁿ + aⁿ⁺¹ + aⁿ⁺² = aⁿ(1 + a + a²)","Product of n consecutive integers is divisible by n!"]})

L.append({"id":"L7","heat":3,"title":"Remainders I: rules & successive division","hi":"शेषफल · नियम और क्रमिक विभाजन","blocks":[
 {"k":"hot","h":"<b>Remainder questions appear in almost every CGL Tier 1 and Tier 2 paper.</b> The basic rules here — add, multiply, negative remainders, least number to add or subtract, successive division — solve most of them in 30 seconds."},
 {"k":"formula","title":"The basic rules","rows":[
  ["Division","N = D × Q + R,  0 ≤ R &lt; D","D = 38, Q = 24, R = 13 → N = 925"],
  ["Remainders add","rem of (a + b + c) = rem of (r₁ + r₂ + r₃)","(335 + 608 + 853) ÷ 13 → (10 + 10 + 8) = 28 → 2"],
  ["Remainders multiply","rem of (a × b) = rem of (r₁ × r₂)","(361 × 363) ÷ 12 → 1 × 3 = 3"],
  ["Negative remainder","use r − D when it is smaller; add D at the end if the result is negative","89 ÷ 9: 89 = 90 − 1 → −1 → 8"],
  ["Least number to add","D − R","42072 ÷ 93 leaves 36 → add 57"],
  ["Least number to subtract","R","25809 ÷ 139 leaves 94 → subtract 94"]]},
 {"k":"formula","title":"Largest, smallest and “same remainder” numbers (added)","rows":[
  ["Largest n-digit number divisible by k","99…9 − (99…9 mod k)","largest 4-digit by 88: 9999 − 55 = 9944"],
  ["Smallest n-digit number divisible by k","10…0 + (k − 10…0 mod k)","smallest 4-digit by 88: 1000 + (88 − 32) = 1056"],
  ["Same remainder r for divisors a, b, c","N = k × LCM(a, b, c) + r","least > r: LCM + r (rem 3 by 4, 6, 9 → 39)"],
  ["Remainders a − d, b − d, c − d (constant gap d)","N = k × LCM − d","rem 2, 4, 7 by 3, 5, 8 → 120 − 1 = 119"],
  ["Divisor from two remainders","if N ÷ D leaves r₁ and 2N leaves r₂ … use 2r₁ − r₂ = D (when 2r₁ ≥ D)","N rem 30, 2N rem 11 → D = 49"]]},
 {"k":"formula","title":"Successive division","rows":[
  ["Meaning","divide N by a, the quotient by b, that quotient by c …","remainders r₁, r₂, r₃"],
  ["Rebuild N","start from the last quotient (take 1, or 0 if allowed) and go back: × divisor + remainder","3, 4, 7 with 2, 1, 4: 7 × 0 + 4 = 4 → 4 × 4 + 1 = 17 → 17 × 3 + 2 = 53"],
  ["General","N = r₁ + a(r₂ + b(r₃ + c·q))","least N uses q = 0"]]},
 {"k":"ex","q":"On dividing a number by 38, the quotient is 24 and the remainder is 13. Find the number.","steps":["N = D × Q + R","= 38 × 24 + 13 = 912 + 13"],"ans":"925"},
 {"k":"ex","q":"Positive numbers x, y, z divided by 31 leave remainders 17, 24 and 27. Find the remainder when 4x − 2y + 3z is divided by 31.","steps":["Work with remainders: 4 × 17 − 2 × 24 + 3 × 27","= 68 − 48 + 81 = 101","101 ÷ 31 leaves 8"],"ans":"8"},
 {"k":"ex","q":"Find the remainder of 111 ÷ 12 using negative remainders.","steps":["111 = 120 − 9 → remainder −9","Add 12: −9 + 12 = 3"],"ans":"3"},
 {"k":"ex","q":"A number is successively divided by 3, 4 and 7, leaving remainders 2, 3 and 5. Find the least such number.","steps":["Start from the last: 7 × 0 + 5 = 5","4 × 5 + 3 = 23","3 × 23 + 2 = 71"],"ans":"71"},
 {"k":"ex","q":"What is the least number to be added to 42072 to make it divisible by 93?","steps":["42072 ÷ 93 = 452, remainder 36","Add 93 − 36"],"ans":"57"},
 {"k":"ex","q":"A number divided successively by 2, 3 and 5 leaves remainders 1, 2 and 3 (last quotient 1). What is the remainder when it is divided by 13?","steps":["5 × 1 + 3 = 8 → 3 × 8 + 2 = 26 → 2 × 26 + 1 = 53","53 ÷ 13 = 4, remainder 1"],"ans":"1"},
 {"k":"trick","h":"<b>Close to a multiple? Use a negative remainder:</b> 89 ÷ 9 → 90 − 1 → −1 → 8. Products of numbers just below the divisor become (−1)(−1)… = ±1.<br><b>Remainder of a sum or product</b>: replace every number by its remainder first, then combine."},
 {"k":"trap","h":"<b>A remainder can never be negative or ≥ the divisor</b> — always bring −9 back to 3 (add 12). <b>“Least number to add”</b> is D − R, not R. <b>Successive division</b>: rebuild from the <i>last</i> divisor backwards, not the first."},
 {"k":"link","h":"L8 extends these rules to huge powers ((a ± 1)ⁿ, Fermat, Euler). Divisibility (L5) is just “remainder = 0”."},
 {"k":"q","q":"What is the remainder when 179 × 172 × 173 is divided by 17?","o":["3","5","1","12"],"e":"179 → 9, 172 → 2, 173 → 3: 9 × 2 × 3 = 54 → 54 ÷ 17 leaves 3."}
],"sum":["N = DQ + R with 0 ≤ R < D","Remainders add and multiply; use negative remainders near multiples","Least to add = D − R; least to subtract = R","Same remainder r for a, b, c → N = k·LCM + r; constant gap d → k·LCM − d","Successive division: rebuild from the last divisor: × divisor + remainder"]})

L.append({"id":"L8","heat":2,"title":"Remainders II: powers & theorems","hi":"शेषफल · घात और प्रमेय","blocks":[
 {"k":"hot","h":"<b>Tier 2 favourite, sometimes in Tier 1:</b> “remainder of 72<sup>281</sup> ÷ 73”, “(8<sup>371</sup> + 5<sup>371</sup>) ÷ 13”, “40! ÷ 41”. Recognise the pattern and the answer is one line."},
 {"k":"formula","title":"Sum and difference of powers","rows":[
  ["(aⁿ + bⁿ) ÷ (a + b)","remainder 0 when n is odd","(8<sup>371</sup> + 5<sup>371</sup>) ÷ 13 → 0"],
  ["Terms in AP, n odd","pair the first with the last, the second with the second-last …: every pair is divisible by (first + last)","16<sup>73</sup> + 17<sup>73</sup> + 18<sup>73</sup> + 19<sup>73</sup>: pairs divisible by 35, total even → ÷ 70 leaves 0"],
  ["(aⁿ − bⁿ) ÷ (a − b)","0 for every n","(8<sup>36</sup> − 2<sup>36</sup>) ÷ 6 → 0"],
  ["(aⁿ − bⁿ) ÷ (a + b)","0 when n is even","(7<sup>24</sup> − 4<sup>24</sup>) ÷ 11 → 0"],
  ["(aⁿ + bⁿ), n even","not divisible by a + b or a − b in general","—"]]},
 {"k":"formula","title":"Divisor ± 1 (the most useful idea)","rows":[
  ["(a + 1)ⁿ ÷ a","remainder 1 for every n","16<sup>13</sup> ÷ 15 → 1"],
  ["(a − 1)ⁿ ÷ a, n even","remainder 1","72<sup>282</sup> ÷ 73 → 1"],
  ["(a − 1)ⁿ ÷ a, n odd","remainder −1, i.e. a − 1","72<sup>281</sup> ÷ 73 → 72"],
  ["Reduce the power","find a small power with remainder ±1, then use it","2<sup>100</sup> ÷ 7: 2³ = 8 → 1 → 2<sup>99</sup> × 2 → 2"]]},
 {"k":"formula","title":"The three theorems","rows":[
  ["Fermat","a<sup>p−1</sup> ÷ p leaves 1 (p prime, a not a multiple of p)","82<sup>54</sup> ÷ 19 = (82<sup>18</sup>)³ → 1"],
  ["Euler","a<sup>φ(N)</sup> ÷ N leaves 1 (a, N co-prime)","φ(N) = N(1 − 1/p₁)(1 − 1/p₂)…"],
  ["Totient φ(N)","how many numbers from 1 to N are co-prime to N","φ(72) = 72 × ½ × ⅔ = 24;  φ(100) = 40;  φ(prime p) = p − 1"],
  ["Wilson","(p − 1)! ÷ p leaves p − 1 (i.e. −1), p prime","40! ÷ 41 → 40"],
  ["Wilson, one step back","(p − 2)! ÷ p leaves 1","39! ÷ 41 → 1"]]},
 {"k":"table","title":"Cycles of remainders (added)","head":["Power of","÷ by","Remainders repeat","So"],"rows":[
  ["2","3","2, 1","odd power → 2, even → 1"],["2","5","2, 4, 3, 1","cycle 4"],["2","7","2, 4, 1","cycle 3: 2<sup>3k</sup> → 1"],
  ["3","7","3, 2, 6, 4, 5, 1","cycle 6"],["4","6","4, 4, …","always 4"],["10","3 or 9","1, 1, …","10ⁿ ÷ 9 → 1"]]},
 {"k":"ex","q":"Find the remainder of (16<sup>73</sup> + 17<sup>73</sup> + 18<sup>73</sup> + 19<sup>73</sup>) ÷ 70.","steps":["73 is odd, so 16<sup>73</sup> + 19<sup>73</sup> and 17<sup>73</sup> + 18<sup>73</sup> are each divisible by 35","Two of the four numbers are odd and two even → the total is even","Divisible by 35 and by 2 → divisible by 70"],"ans":"0"},
 {"k":"ex","q":"Find the remainder when 72<sup>281</sup> is divided by 73.","steps":["72 = 73 − 1 → remainder (−1)<sup>281</sup> = −1","−1 + 73 = 72"],"ans":"72"},
 {"k":"ex","q":"Find the remainder when 93<sup>51</sup> is divided by 11.","steps":["93 ÷ 11 leaves 5, so work with 5<sup>51</sup>; by Fermat 5<sup>10</sup> → 1","5<sup>51</sup> = (5<sup>10</sup>)⁵ × 5 → 1 × 5"],"ans":"5"},
 {"k":"ex","q":"Find the totient of 100.","steps":["100 = 2² × 5²","φ(100) = 100 × (1 − ½)(1 − ⅕) = 100 × ½ × ⅘"],"ans":"40"},
 {"k":"ex","q":"Find the remainder when 40! is divided by 41.","steps":["41 is prime → Wilson: (41 − 1)! leaves −1","−1 + 41 = 40"],"ans":"40"},
 {"k":"trick","h":"<b>Always look for divisor ± 1 first.</b> Write the base (or a small power of it) as (D + 1) or (D − 1): 2<sup>3</sup> = 8 = 7 + 1, 3<sup>4</sup> = 81 = 80 + 1.<br><b>Fermat in one line:</b> divisor prime → reduce the power modulo (p − 1)."},
 {"k":"trap","h":"<b>(a − 1)ⁿ with odd n gives −1, not 1</b> — convert to D − 1 (72 for 73). <b>Fermat needs a prime divisor</b> and a base that is not its multiple; for 12, 15, 100 use Euler. <b>aⁿ + bⁿ is divisible by a + b only for odd n.</b><br><b>Three terms in AP do not make the sum divisible by a + b + c:</b> some books give (3<sup>61</sup> + 2<sup>61</sup> + 4<sup>61</sup>) ÷ 9 → 0, but the remainder is 6. Only 2<sup>61</sup> + 4<sup>61</sup> is divisible by 6, and 3<sup>61</sup> by 3 — so the sum is divisible by 3, not 9."},
 {"k":"link","h":"Builds on negative remainders (L7). The cycle of remainders is the same idea as the unit-digit cycle (L2) — unit digit is just the remainder on division by 10."},
 {"k":"q","q":"Remainder when 9^111 is divided by 13?","o":["1","9","3","12"],"e":"9³ = 729 = 13 × 56 + 1 → 9³ leaves 1 → 9¹¹¹ = (9³)³⁷ → 1."}
],"sum":["aⁿ + bⁿ ÷ (a + b) → 0 for odd n; aⁿ − bⁿ ÷ (a − b) → 0 always, ÷ (a + b) → 0 for even n; AP terms: pair first + last","(D + 1)ⁿ → 1; (D − 1)ⁿ → 1 (n even) or D − 1 (n odd)","Fermat: a^(p−1) → 1 (mod p); Euler: a^φ(N) → 1 (mod N)","φ(N) = N(1 − 1/p₁)(1 − 1/p₂)…; φ(100) = 40","Wilson: (p − 1)! → p − 1; (p − 2)! → 1"]})

L.append({"id":"L9","heat":2,"title":"Trailing zeros & powers in n!","hi":"शून्यों की संख्या · n! में घात","blocks":[
 {"k":"hot","h":"<b>Asked in CGL and CHSL:</b> “number of zeros at the end of 100!”, “highest power of 5 in 300!”, “zeros in 24 × 13 × 52 × 27”. A zero needs one 2 and one 5 — count the scarcer one."},
 {"k":"p","h":"Every trailing zero comes from a factor 10 = 2 × 5. So the number of zeros at the end of a product = <b>min(number of 2s, number of 5s)</b> in its prime factorisation. In a factorial there are always more 2s than 5s, so <b>count the 5s</b>."},
 {"k":"formula","title":"Highest power of a prime p in n! (Legendre)","rows":[
  ["Formula","⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + …","stop when the power of p exceeds n"],
  ["Short way","divide n by p, then divide the quotient by p again, and add all quotients","300 → 60 → 12 → 2: 60 + 12 + 2 = 74"],
  ["Zeros at the end of n!","highest power of 5 in n!","100! → 20 + 4 = 24"],
  ["Power of a composite (e.g. 12 = 2² × 3)","min(⌊(power of 2)/2⌋, power of 3)","12 in 50!: 2s = 47 → 23; 3s = 22 → 22"],
  ["Power of p in A × (A+1) × … × B","(power in B!) − (power in (A − 1)!)","5 in 351 × … × 600 = 148 − 86 = 62"]]},
 {"k":"table","title":"Zeros at the end of n! — ready values","head":["n!","Zeros","n!","Zeros"],"rows":[
  ["10!","2","100!","24"],["25!","6","125!","31"],["47!","10","200!","49"],["50!","12","300!","74"],["75!","18","1000!","249"]]},
 {"k":"ex","q":"How many zeros are there at the end of 24 × 13 × 52 × 27?","steps":["= 2³·3 × 13 × 2²·13 × 3³ = 2⁵ × 3⁴ × 13²","There is no factor 5"],"ans":"0"},
 {"k":"ex","q":"How many zeros are there at the end of 8 × 15 × 24 × 13?","steps":["= 2³ × 3·5 × 2³·3 × 13 = 2⁶ × 3² × 5 × 13","Six 2s but only one 5 → one pair 2 × 5"],"ans":"1"},
 {"k":"ex","q":"Find the number of zeros at the end of 47!.","steps":["⌊47/5⌋ = 9, ⌊47/25⌋ = 1, ⌊47/125⌋ = 0","9 + 1"],"ans":"10"},
 {"k":"ex","q":"Find the number of zeros at the end of 300!.","steps":["300/5 = 60, 60/5 = 12, 12/5 = 2","60 + 12 + 2"],"ans":"74"},
 {"k":"ex","q":"Find the highest power of 5 in the product 351 × 352 × … × 600.","steps":["Power of 5 in 600! = 120 + 24 + 4 = 148","Power of 5 in 350! = 70 + 14 + 2 = 86","148 − 86"],"ans":"62"},
 {"k":"trick","h":"<b>Repeated division:</b> 1000 → 200 → 40 → 8 → 1: 200 + 40 + 8 + 1 = 249 zeros in 1000!.<br><b>For a composite base</b> split it into primes and take the limiting prime: 6 = 2 × 3 → power of 3 decides; 12 = 2² × 3 → compare half the 2s with the 3s."},
 {"k":"trap","h":"<b>25 gives two 5s and 125 gives three</b> — never stop at ⌊n/5⌋. <b>In a plain product (not a factorial)</b> the 2s can be fewer than the 5s: 25 × 125 × 4 has 5⁵ but only 2² → 2 zeros. <b>Zeros of 5 × 10 × 15 × … × 100</b> are not the same as zeros of 100!: count both 2s and 5s."},
 {"k":"link","h":"Same prime-power thinking as factors (L3). Unit digit of n! for n ≥ 5 is 0 (L2) for the same reason."},
 {"k":"q","q":"Number of zeros at the end of 125! is:","o":["31","25","30","28"],"e":"25 + 5 + 1 = 31."}
],"sum":["Trailing zeros = min(2s, 5s); in n! count the 5s","Power of p in n! = ⌊n/p⌋ + ⌊n/p²⌋ + … (repeated division)","100! → 24 zeros; 1000! → 249","Composite base: split into primes and take the limiting one","Product A…B: power in B! − power in (A − 1)!"]})

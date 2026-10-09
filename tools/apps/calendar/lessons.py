L = []
CODES_TABLE = {"k":"table","title":"The three code tables (learn these by heart)","head":["Month","Code (ordinary)","Code (leap)"],"rows":[
  ["Jan · Feb · Mar","0 · 3 · 3","<b>6 · 2</b> · 3"],["Apr · May · Jun","6 · 1 · 4","6 · 1 · 4"],["Jul · Aug · Sep","6 · 2 · 5","6 · 2 · 5"],["Oct · Nov · Dec","0 · 3 · 5","0 · 3 · 5"],
  ["Say it as","033 · 614 · 625 · 035","623 · 614 · 625 · 035"]]}
L.append({"id":"L1","heat":2,"title":"Leap years","hi":"अधिवर्ष (लीप ईयर)","blocks":[
 {"k":"hot","h":"<b>Asked in most SSC and railway papers as a warm-up:</b> “Which of these is a leap year: 1900, 2000, 2100, 2200?”, “In which year is February 28 days long?”, “How many leap years in 400 years?”. Five-second questions once the 100/400 rule is clear."},
 {"k":"p","h":"A <b>leap year</b> has 366 days (February has 29). An <b>ordinary year</b> has 365 days (February has 28). The everyday rule “divisible by 4” is only half the rule — century years (multiples of 100) have their own test."},
 {"k":"formula","title":"Is it a leap year?","rows":[
  ["Not a multiple of 100","leap if divisible by 4 — check only the last two digits","1996 ✓ (96 ÷ 4),  1950 ✗,  2030 ✗,  2024 ✓"],
  ["Multiple of 100 (century year)","leap only if divisible by 400","1600 ✓, 2000 ✓;  1700, 1800, 1900, 2100 ✗"],
  ["Days","leap 366 (Feb 29), ordinary 365 (Feb 28)","—"]]},
 {"k":"table","title":"Leap years in a span of years","head":["Span","Every 4th year","Minus non-leap centuries","Leap years"],"rows":[
  ["100 years","25","− 1 (100th)","24"],["200 years","50","− 2 (100th, 200th)","48"],["300 years","75","− 3","72"],["400 years","100","− 3 (400th is leap)","97"],
  ["700 years","175","− 6 (all but the 400th)","169"],["800 years","200","− 6 (400th and 800th are leap)","194"]]},
 {"k":"ex","q":"Which of the following is a leap year? (a) 1700 (b) 1800 (c) 2000 (d) 2100","steps":["All four are multiples of 100 → test with 400","Only 2000 ÷ 400 = 5 exactly"],"ans":"2000"},
 {"k":"ex","q":"In which of these years does February have 28 days? (a) 1600 (b) 1996 (c) 2008 (d) 1966","steps":["1600: century, divisible by 400 → leap","1996, 2008: not centuries, divisible by 4 → leap","1966: 66 is not divisible by 4 → ordinary"],"ans":"1966"},
 {"k":"ex","q":"How many leap years are there in 100 years?","steps":["Every 4th year: 100 ÷ 4 = 25","The 100th year is a century not divisible by 400 → not leap","25 − 1"],"ans":"24"},
 {"k":"trick","h":"<b>Two-step test:</b> century? → ÷ 400. Not a century? → last two digits ÷ 4.<br><b>Span count:</b> (span ÷ 4) − (number of 100th years that are not 400th years)."},
 {"k":"trap","h":"<b>1900 and 2100 are not leap years</b> although they are divisible by 4. <b>2000 is a leap year.</b> In “leap years in 400 years” the 400th year <i>is</i> leap — subtract 3, not 4."},
 {"k":"link","h":"Leap years decide the odd days of a year (L2), the month code for January and February (L3), and the calendar-repeat jump (L7)."},
 {"k":"q","q":"How many leap years are there in 300 years?","o":["72","75","73","74"],"e":"75 − 3 (100th, 200th, 300th) = 72."}
],"sum":["Not a century: leap if the last two digits ÷ 4","Century: leap only if ÷ 400 (2000 yes, 1900 and 2100 no)","Leap years: 24 in 100, 48 in 200, 72 in 300, 97 in 400","Leap year 366 days, ordinary 365"]})

L.append({"id":"L2","heat":2,"title":"Odd days & the century rule","hi":"विषम दिन और शताब्दी का अंतिम दिन","blocks":[
 {"k":"hot","h":"<b>“The last day of a century cannot be: Monday / Tuesday / Wednesday / Friday?”</b> is a classic SSC question. Odd days are also the idea behind every other calendar method, so learn them once."},
 {"k":"p","h":"Days repeat every 7. So what matters about any span of days is only the <b>remainder after dividing by 7</b> — the <b>odd days</b>. 365 days = 52 weeks + <b>1</b> odd day; 366 days = 52 weeks + <b>2</b> odd days. Odd days 0 = Sunday, 1 = Monday … 6 = Saturday."},
 {"k":"formula","title":"Odd days to remember (added)","rows":[
  ["Ordinary year","1 odd day","365 = 52 × 7 + 1"],["Leap year","2 odd days","366 = 52 × 7 + 2"],
  ["100 years","5 odd days","24 leap + 76 ordinary = 48 + 76 = 124 → 5"],["200 / 300 years","3 / 1 odd days","10 → 3;  15 → 1"],["400 years","0 odd days","the calendar resets every 400 years"],
  ["Months (ordinary)","Jan 3, Feb 0, Mar 3, Apr 2, May 3, Jun 2, Jul 3, Aug 3, Sep 2, Oct 3, Nov 2, Dec 3","31 days → 3, 30 → 2, Feb 28 → 0 (29 → 1)"]]},
 {"k":"table","title":"Last day of a century (31 December)","head":["Century ends","Odd days","Day"],"rows":[
  ["100, 500, 900, 1300, 1700, 2100","5","Friday"],["200, 600, 1000, 1400, 1800, 2200","3","Wednesday"],["300, 700, 1100, 1500, 1900, 2300","1","Monday"],["400, 800, 1200, 1600, 2000, 2400","0","Sunday"]]},
 {"k":"formula","title":"So …","rows":[
  ["Last day of a century","only Friday, Wednesday, Monday or Sunday","never Tuesday, Thursday or Saturday"],
  ["Memory hook","Mon ✓ Tue ✗ Wed ✓ Thu ✗ Fri ✓ Sat ✗ Sun ✓ — alternate days","or: the days we don’t cut hair or nails (Tue, Thu, Sat) never end a century"],
  ["First day of a century (1 Jan 2001 type, added)","only Monday, Tuesday, Thursday or Saturday","the day after each of the four above"],
  ["Starting point","1 January of year 1 was a Monday","so 400 years later it is Monday again (1 Jan 2001 was a Monday)"]]},
 {"k":"ex","q":"The last day of a century cannot be: (a) Monday (b) Wednesday (c) Tuesday (d) Friday","steps":["Possible last days: Friday, Wednesday, Monday, Sunday","Tuesday is not among them"],"ans":"Tuesday"},
 {"k":"ex","q":"What day was 31 December 1900?","steps":["1900 years = 1600 (0 odd days) + 300 (1 odd day)","1 odd day → Monday"],"ans":"Monday"},
 {"k":"trick","h":"<b>5, 3, 1, 0</b> — odd days of 100, 200, 300, 400 years. Read them as days: Friday, Wednesday, Monday, Sunday.<br><b>A century begins on the day after it ends:</b> Saturday, Thursday, Tuesday, Monday."},
 {"k":"trap","h":"<b>A new century starts on 1 January of year …01</b> (2001), not …00. 1 Jan 2000 was a Saturday; 1 Jan 2001 a Monday. <b>Odd days of a span ≠ the day itself</b> — odd days 1 means Monday only when counted from the start of the calendar."},
 {"k":"link","h":"The century codes 6, 4, 2, 0 of the shortcut in L3 come from these odd days. The 400-year reset is why 1600s and 2000s share code 6."},
 {"k":"q","q":"Which day can never be the last day of a century?","o":["Saturday","Sunday","Monday","Friday"],"e":"Only Fri, Wed, Mon and Sun end a century."}
],"sum":["Odd days: ordinary year 1, leap year 2","100 / 200 / 300 / 400 years → 5 / 3 / 1 / 0 odd days","Last day of a century: Fri, Wed, Mon, Sun only — never Tue, Thu, Sat","1 Jan year 1 was Monday; everything repeats every 400 years"]})

L.append({"id":"L3","heat":3,"title":"Day of any date: the code method","hi":"किसी भी तारीख का दिन · कोड विधि","blocks":[
 {"k":"hot","h":"<b>The most-asked calendar type — CHSL had one in almost every shift.</b> “What day was 26 November 1994?” With the three code tables you answer in 8–10 seconds."},
 {"k":"formula","title":"Add five numbers, divide by 7","rows":[
  ["1 · Date","as it is","22 (for 22 Nov 2025)"],
  ["2 · Month code","from the table below","Nov → 3"],
  ["3 · Last two digits of the year (YY)","as they are","25"],
  ["4 · YY ÷ 4","only the whole part — never round off","25 ÷ 4 = 6.25 → 6"],
  ["5 · Century code","from the first two digits of the year","20xx → 6"],
  ["Answer","(sum) ÷ 7 → remainder = day code","22 + 3 + 25 + 6 + 6 = 62 → 62 ÷ 7 leaves 6 → Saturday"]]},
 CODES_TABLE,
 {"k":"table","title":"Century code and day code","head":["First two digits of year","Code","Remainder","Day"],"rows":[
  ["16, 20, 24 (multiple of 4)","6","0","Sunday"],["17, 21","4","1","Monday"],["18, 22","2","2","Tuesday"],["19, 23","0","3","Wednesday"],["—","—","4","Thursday"],["—","—","5","Friday"],["—","—","6","Saturday"]]},
 {"k":"p","h":"<b>Century code in one line:</b> look at the first two digits; from the multiple of 4 at or below them count 6, 4, 2, 0. 2025 → 20 is a multiple of 4 → 6. 1994 → 16, 17, 18, <b>19</b> → 6, 4, 2, <b>0</b>. 1795 → 16, <b>17</b> → <b>4</b>. 2385 → 20, 21, 22, <b>23</b> → <b>0</b>."},
 {"k":"ex","q":"What day was 26 November 1994?","steps":["Date 26 → remainder 5 (21 + 5)","Nov code 3","YY = 94 → remainder 3 (91 + 3); 94 ÷ 4 = 23.5 → 23 → remainder 2","19xx → 0","5 + 3 + 3 + 2 + 0 = 13 → remainder 6"],"ans":"Saturday"},
 {"k":"ex","q":"What day was 9 March 2002?","steps":["9 + 3 (Mar) + 2 + 0 (2 ÷ 4 = 0.5 → 0) + 6 (20xx)","= 20 → remainder 6"],"ans":"Saturday"},
 {"k":"ex","q":"What day was 22 February 2012?","steps":["2012 is a leap year and the month is February → leap code 2","22 + 2 + 12 + 3 (12 ÷ 4) + 6 = 45 → remainder 3"],"ans":"Wednesday"},
 {"k":"ex","q":"What day was 31 December 2016?","steps":["31 + 5 (Dec) + 16 + 4 + 6 = 62","62 ÷ 7 leaves 6"],"ans":"Saturday"},
 {"k":"trick","h":"<b>Cut 7s as you go:</b> replace every number by its remainder before adding (26 → 5, 94 → 3, 23 → 2). The sum stays small and the day is instant.<br><b>Only January and February care about leap years</b> — for March to December use the same codes every year."},
 {"k":"trap","h":"<b>YY ÷ 4: take the whole part</b> (6.75 → 6, not 7). <b>January/February of a leap year</b> use 6 and 2, not 0 and 3 — 2000 is leap, 1900 is not. <b>Remainder 0 is Sunday</b>, not “no day”."},
 {"k":"link","h":"L4 applies the method to “if one date is X, what is another date” questions, and checks it against the long odd-days method. Day codes 0–6 are the same odd days as in L2."},
 {"k":"q","q":"What day was 26 January 1950 (India’s first Republic Day)?","o":["Thursday","Friday","Wednesday","Sunday"],"e":"26 + 0 + 50 + 12 + 0 = 88 → 88 ÷ 7 leaves 4 → Thursday."}
],"sum":["Day = (date + month code + YY + ⌊YY/4⌋ + century code) ÷ 7 → remainder","Month codes 033 614 625 035; leap Jan/Feb 6, 2","Century: multiple-of-4 first digits → 6, then 4, 2, 0 (19xx → 0, 20xx → 6)","Remainder 0 Sun, 1 Mon, 2 Tue, 3 Wed, 4 Thu, 5 Fri, 6 Sat","Reduce each number mod 7 before adding"]})

L.append({"id":"L4","heat":3,"title":"Given one day, find another","hi":"एक दिन दिया हो, दूसरा ज्ञात करें","blocks":[
 {"k":"hot","h":"<b>“If 1 March 2012 was a Thursday, what day was 1 February 2016?”</b> — the most common form in recent CHSL/CGL papers. The given day is always the real one, so the fastest route is to ignore it and find the asked date directly."},
 {"k":"formula","title":"Two ways","rows":[
  ["Fast (exam) way","find the asked date directly with the code method; mark the question; verify the given date only if time is left","1 Feb 2016: 1 + 2 (leap Feb) + 16 + 4 + 6 = 29 → 1 → Monday"],
  ["Safe way","find the given date’s day by the code method; shift your answer by the same difference","given Thu but you get Mon → +3 → add 3 to your answer too"],
  ["Counting way (added)","count odd days between the two dates and add them","1 Mar 2012 → 1 Feb 2016: 1432 days → 1432 ÷ 7 leaves 4 → Thursday + 4 = Monday"]]},
 {"k":"formula","title":"The long method: odd days from year 1 (added, for checking)","rows":[
  ["Complete centuries","400s → 0; then 100 → 5, 200 → 3, 300 → 1","1947: 1600 → 0, 300 → 1"],
  ["Remaining complete years","ordinary 1, leap 2 each","46 years: 11 leap + 35 ordinary = 57 → 1"],
  ["Complete months this year","Jan 3, Feb 0 (1 if leap), Mar 3, Apr 2, May 3, Jun 2, Jul 3, Aug 3, Sep 2, Oct 3, Nov 2","Jan–Jul 1947: 16 → 2"],
  ["Days of this month","the date","15 → 1"],
  ["Total ÷ 7","remainder → day (0 = Sunday)","0 + 1 + 1 + 2 + 1 = 5 → Friday (15 Aug 1947)"]]},
 {"k":"ex","q":"If 1 March 2012 was a Thursday, what day was 1 February 2016?","steps":["Find 1 Feb 2016 directly: 2016 is leap and the month is Feb → code 2","1 + 2 + 16 + 4 + 6 = 29 → 29 ÷ 7 leaves 1"],"ans":"Monday","tip":"Check: 1 Mar 2012 → 1 + 3 + 12 + 3 + 6 = 25 → 4 → Thursday ✓."},
 {"k":"ex","q":"If 1 January 2016 was a Friday, what day was 31 December 2016?","steps":["31 + 5 + 16 + 4 + 6 = 62 → 6"],"ans":"Saturday","tip":"Leap year → last day = first day + 1: Friday + 1 = Saturday ✓ (L6)."},
 {"k":"ex","q":"What day was 15 August 1947?","steps":["Code method: 15 + 2 (Aug) + 47 + 11 + 0 (19xx) = 75 → 75 ÷ 7 leaves 5","Odd-days method gives 5 as well"],"ans":"Friday"},
 {"k":"trick","h":"<b>Answer the asked date directly</b> — the given day has always been the real one in SSC papers. Mark the question and verify the given date only if you have spare time.<br><b>If a given day ever disagrees</b>, shift your answer by the same number of days."},
 {"k":"trap","h":"<b>A hypothetical calendar</b> (“if 1 March 2012 were a Monday…”) would break the direct method — then use the shift. <b>Counting days between dates:</b> do not count both end dates."},
 {"k":"link","h":"Shifting by a difference is exactly the n-days-later method of L5."},
 {"k":"q","q":"If 15 August 2010 was a Sunday, what day was 15 August 2011?","o":["Monday","Sunday","Tuesday","Saturday"],"e":"2011 is ordinary and no 29 Feb lies between → +1 → Monday. (Code: 15 + 2 + 11 + 2 + 6 = 36 → 1.)"}
],"sum":["Given-day questions: compute the asked date directly (the given day is real)","Verify the given date only if time is left; if it differs, shift by the same amount","Odd-days method: centuries + years + months + date, then ÷ 7","15 Aug 1947 Friday, 26 Jan 1950 Thursday"]})

L.append({"id":"L5","heat":3,"title":"Days later, days before & today–tomorrow puzzles","hi":"इतने दिन बाद/पहले · आज-कल पहेलियाँ","blocks":[
 {"k":"hot","h":"<b>Every SSC paper has one of these:</b> “If 8 April is Monday, what is 30 April?”, “If tomorrow is Tuesday, what day is 100 days from today?”, “If the day after tomorrow is Monday, what was it 50 days ago?”."},
 {"k":"formula","title":"One rule","rows":[
  ["n days later","day + (n ÷ 7 remainder)","Monday + 100 → 100 = 98 + 2 → Wednesday"],
  ["n days earlier","day − (n ÷ 7 remainder), or think “that day + n = today”","Saturday, 50 days ago → 50 → 1 → Friday"],
  ["Whole weeks","7, 14, 21 … days later → same day","two weeks from today = today’s day"],
  ["Same month","difference of dates ÷ 7","8th Monday → 30th: 22 → 1 → Tuesday"]]},
 {"k":"table","title":"Word ladder","head":["Phrase","Offset from today"],"rows":[
  ["yesterday / tomorrow","−1 / +1"],["day before yesterday / day after tomorrow","−2 / +2"],["two days after tomorrow","+3"],["three days before yesterday","−4"],["n days after tomorrow","n + 1"],["n days before yesterday","−(n + 1)"]]},
 {"k":"ex","q":"If 8th April is a Monday, what day is 30th April?","steps":["30 − 8 = 22 days later; 22 ÷ 7 leaves 1","Monday + 1"],"ans":"Tuesday"},
 {"k":"ex","q":"In a month of 29 days, the second Thursday is the 13th. What day is the second-last day of the month?","steps":["29 days → February; second-last day = 28th","28 − 13 = 15 → remainder 1","Thursday + 1"],"ans":"Friday"},
 {"k":"ex","q":"The 5th of a month falls on the third day after Sunday. What day is the 15th?","steps":["Third day after Sunday = Wednesday","15 − 5 = 10 → remainder 3 → Wednesday + 3"],"ans":"Saturday"},
 {"k":"ex","q":"If tomorrow is Tuesday, what day of the week will it be 100 days from today?","steps":["Today = Monday","100 ÷ 7 leaves 2 → Monday + 2"],"ans":"Wednesday"},
 {"k":"ex","q":"John bought a puppy on 21 January 2022, a Friday. It becomes an adult 380 days later. On which day does it become an adult?","steps":["380 ÷ 7 = 54 weeks + 2","Friday + 2"],"ans":"Sunday"},
 {"k":"ex","q":"If the day after tomorrow is Monday, what day was it 50 days before today?","steps":["Today = Saturday","That day + 50 = today; 50 ÷ 7 leaves 1 → that day + 1 = Saturday"],"ans":"Friday"},
 {"k":"ex","q":"If two days after tomorrow is Thursday, what was the day three days before yesterday?","steps":["Two days after tomorrow = +3; three days before yesterday = −4","The gap between them is 3 + 4 = 7 days → same day"],"ans":"Thursday"},
 {"k":"ex","q":"If 15 days ago it was Sunday, what day will it be 12 days from today?","steps":["From that Sunday to the asked day: 15 + 12 = 27 days","27 ÷ 7 leaves 6 → Sunday + 6"],"ans":"Saturday"},
 {"k":"trick","h":"<b>Add the two offsets</b> when one is in the past and the other in the future: the gap is their sum. If the gap is a multiple of 7, the day is the same.<br><b>Going back n days</b> = going forward (7 − remainder): 50 days ago → −1 → +6."},
 {"k":"trap","h":"<b>“100 days from today”</b> starts counting tomorrow as day 1 — don’t add 1 more. <b>“Two days after tomorrow” is +3</b>, not +2. <b>Check the month length</b> when a question crosses into the next month."},
 {"k":"link","h":"Year shifts (L6) and calendar repeats (L7) are this rule with n = 365 or 366."},
 {"k":"q","q":"If today is Wednesday, what day will it be 61 days from today?","o":["Monday","Friday","Sunday","Tuesday"],"e":"61 = 56 + 5 → Wednesday + 5 = Monday."}
],"sum":["n days later → add n ÷ 7 remainder; earlier → subtract it","Whole weeks keep the same day","after tomorrow +2, two days after tomorrow +3; before yesterday −2, three days before yesterday −4","Past and future offsets: add them to get the gap"]})

L.append({"id":"L6","heat":2,"title":"Same date in another year · first & last day","hi":"अगले वर्ष वही तारीख · पहला और अंतिम दिन","blocks":[
 {"k":"hot","h":"<b>Regular in SSC:</b> “If the first day of a non-leap year is Friday, what is the last day?”, “26 January 2023 was a Thursday; what day is 26 January 2024?”."},
 {"k":"formula","title":"Year shifts","rows":[
  ["First and last day, ordinary year","same day","1 Jan Friday → 31 Dec Friday"],
  ["First and last day, leap year","last = first + 1","1 Jan Friday → 31 Dec Saturday"],
  ["1 January of the next year (added)","+1 after an ordinary year, +2 after a leap year","1 Jan 2024 Mon → 1 Jan 2025 Wed"],
  ["Same date next year (added)","+1, or +2 if a 29 February lies between the two dates","15 Mar 2023 Wed → 15 Mar 2024 Fri (+2)"],
  ["Same date n years later","add 1 per ordinary year and 2 per leap year crossed","26 Jan 2021 (Tue) → 26 Jan 2025: 4 years, one 29 Feb (2024) crossed → +5 → Sunday"]]},
 {"k":"ex","q":"If the first day of a non-leap year is Friday, what is the last day of that year?","steps":["365 days = 52 weeks + 1 day","The extra day is the last day itself → same as the first"],"ans":"Friday"},
 {"k":"ex","q":"26 January 2023 was a Thursday. What day was 26 January 2024?","steps":["From 26 Jan 2023 to 26 Jan 2024 no 29 February is crossed (29 Feb 2024 comes later)","+1"],"ans":"Friday"},
 {"k":"ex","q":"15 March 2023 was a Wednesday. What day was 15 March 2024?","steps":["29 February 2024 lies between → 366 days → +2"],"ans":"Friday"},
 {"k":"trick","h":"<b>Ask one question: is a 29 February inside the gap?</b> Yes → +2, no → +1 (per year). For a date in January or February, the 29 February that matters is in the starting year; from March onwards it is the one in the next year."},
 {"k":"trap","h":"<b>Last day of a leap year is first + 1</b>, not first + 2 (366 days include the first day). <b>1 Jan to 1 Jan of the next leap year</b> is +1 if the current year is ordinary — the leap day of the next year comes after 1 January."},
 {"k":"link","h":"These shifts add up to the calendar repeat gaps in L7: a calendar repeats when the total shift is a multiple of 7."},
 {"k":"q","q":"If 1 January 2027 is a Friday, what is 31 December 2027?","o":["Friday","Saturday","Thursday","Sunday"],"e":"2027 is ordinary → last day = first day."}
],"sum":["Ordinary year: first day = last day; leap year: last = first + 1","Next year’s 1 Jan: +1 (ordinary year), +2 (leap year)","Same date next year: +1, or +2 if 29 Feb is crossed"]})

L.append({"id":"L7","heat":3,"title":"Repeating calendars","hi":"कैलेंडर की पुनरावृत्ति","blocks":[
 {"k":"hot","h":"<b>“The calendar of 2025 will be the same as that of which year?”</b> — asked in most CHSL and CGL shifts. Two calendars are the same when both years start on the same day <i>and</i> both are leap or both are ordinary."},
 {"k":"formula","title":"Next year with the same calendar","rows":[
  ["Year ÷ 4 leaves 0 (leap year)","+28","2024 → 2052"],["Leaves 1","+6","2025 → 2031;  2009 → 2015"],["Leaves 2 or 3","+11","2026 → 2037;  2003 → 2014"],
  ["Previous year with the same calendar (added)","leaves 0 → −28; 1 or 2 → −11; 3 → −6","2025 → 2014;  2027 → 2021;  2028 → 2000"]]},
 {"k":"formula","title":"Exception: crossing a non-leap century","rows":[
  ["When","the jump passes 1700, 1800, 1900, 2100 … (century years that are not leap)","1696 + 28 = 1724 is wrong"],
  ["Then","use common sense: the answer must be the same type (leap/ordinary) and start on the same day — find 1 January of each option","1696 repeats in 1708"],
  ["More examples","2096 → 2108,  2097 → 2109,  2098 → 2110,  2099 → 2105","—"]]},
 {"k":"table","title":"Months with the same calendar in one year (added)","head":["Year","Months that match"],"rows":[
  ["Ordinary","Jan–Oct;  Feb–Mar–Nov;  Apr–Jul;  Sep–Dec"],["Leap","Jan–Apr–Jul;  Feb–Aug;  Mar–Nov;  Sep–Dec"]]},
 {"k":"ex","q":"The calendar of 2009 will repeat in which year?","steps":["2009 ÷ 4 leaves 1 → +6"],"ans":"2015"},
 {"k":"ex","q":"The calendar of 2003 will repeat in which year?","steps":["2003 ÷ 4 leaves 3 → +11"],"ans":"2014"},
 {"k":"ex","q":"The calendar of 2024 will repeat in which year?","steps":["Leap year → +28 (no century crossed)"],"ans":"2052"},
 {"k":"ex","q":"Which year will have the same calendar as 1696?","steps":["+28 gives 1724, but the jump crosses 1700, which is not a leap year","Check leap years after 1696 that start on the same day (Sunday): 1708 ✓"],"ans":"1708"},
 {"k":"trick","h":"<b>6 – 11 – 11 – 28</b> for remainders 1 – 2 – 3 – 0. Backwards it is <b>11 – 11 – 6 – 28</b> for remainders 1 – 2 – 3 – 0."},
 {"k":"trap","h":"<b>A leap year can only match a leap year</b> — strike out ordinary-year options first. <b>Crossing 2100</b> breaks the rule; for years like 2096–2099 check 1 January of the options."},
 {"k":"link","h":"Each +1 / +2 year shift is from L6; the calendar repeats when the shifts add up to a multiple of 7."},
 {"k":"q","q":"The calendar of 2026 will be the same as that of:","o":["2037","2032","2031","2036"],"e":"2026 ÷ 4 leaves 2 → +11 = 2037."}
],"sum":["Same calendar = same 1 Jan day and same type (leap/ordinary)","Next: remainder 1 → +6, 2 or 3 → +11, 0 → +28","Previous: remainder 3 → −6, 1 or 2 → −11, 0 → −28","Crossing a non-leap century (1700, 1800, 1900, 2100) → check 1 Jan of the options","Matching months: ordinary Jan–Oct, Feb–Mar–Nov, Apr–Jul, Sep–Dec"]})

L.append({"id":"L8","heat":1,"title":"Counting weekdays in a month or year","hi":"महीने या वर्ष में दिनों की गिनती","blocks":[
 {"k":"hot","h":"<b>Added — not in the lecture but asked in SSC and banking papers:</b> “How many Sundays in a leap year starting on Saturday?”, “If the 1st is Monday, how many Mondays in a 31-day month?”, “If the 3rd Friday is the 17th, what day is the 1st?”."},
 {"k":"formula","title":"Counting","rows":[
  ["Ordinary year","52 weeks + 1 day → the first day of the year occurs 53 times","starts Wednesday → 53 Wednesdays"],
  ["Leap year","52 weeks + 2 days → the first two days occur 53 times","starts Monday → 53 Mondays and 53 Tuesdays"],
  ["31-day month","the first 3 days of the month occur 5 times","1st Sunday → 5 Sun, Mon, Tue"],["30-day month","the first 2 days occur 5 times","—"],
  ["29-day February","only the first day occurs 5 times","28-day February: every day exactly 4 times"],
  ["Same weekday dates","1st, 8th, 15th, 22nd, 29th are the same day (add 7s)","3rd Friday on 17th → Fridays 3, 10, 17 → 1st is Wednesday"],
  ["Probability (added)","53 Sundays: ordinary year 1/7, leap year 2/7","—"]]},
 {"k":"ex","q":"A leap year starts on Saturday. How many Sundays does it have?","steps":["366 = 52 weeks + 2 days: the extra days are Saturday and Sunday","Sundays = 52 + 1"],"ans":"53"},
 {"k":"ex","q":"The third Friday of a month is the 17th. What day is the 1st?","steps":["Fridays fall on 3, 10, 17, 24, 31","1st = Friday − 2 days"],"ans":"Wednesday"},
 {"k":"trick","h":"<b>Dates 7 apart share a day:</b> 1-8-15-22-29, 2-9-16-23-30, 3-10-17-24-31. Pick the row and read the week."},
 {"k":"trap","h":"<b>A 31-day month has 3 days that occur 5 times</b> — the 1st, 2nd and 3rd of the month, not the last three. <b>An ordinary year has 53 of only one weekday.</b>"},
 {"k":"link","h":"The extra 1 or 2 days are the odd days of L2."},
 {"k":"q","q":"If 1 March is a Sunday, how many Sundays are there in March?","o":["5","4","6","3"],"e":"Sundays: 1, 8, 15, 22, 29 → 5."}
],"sum":["Ordinary year: the first day occurs 53 times; leap: first two days","31-day month: first 3 days occur 5 times; 30-day: first 2","Dates 7 apart share a weekday (1, 8, 15, 22, 29)","P(53 Sundays): 1/7 ordinary, 2/7 leap"]})

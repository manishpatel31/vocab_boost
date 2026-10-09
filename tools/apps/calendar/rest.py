import datetime as D
DAYS=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
def day(d,m,y): return DAYS[D.date(y,m,d).weekday()]
HEAT = [
["Leap year test & counts",10,"L1","Which is a leap year; leap years in 100/400 years"],
["Odd days & century end",8,"L2","Last day of a century cannot be…; odd days of 100/400 years"],
["Day of a given date",30,"L3","What day was 26 November 1994?"],
["Given one day, find another",20,"L4","If 1 March 2012 was Thursday, what was 1 Feb 2016?"],
["Days later / before, puzzles",16,"L5","8 April Monday → 30 April; tomorrow Tuesday → 100 days later"],
["Same date next year",6,"L6","First/last day of a year; 26 Jan next year"],
["Repeating calendar",14,"L7","Calendar of 2025 repeats in which year?"],
["Counting weekdays",4,"L8","53 Sundays, 5 Mondays in a month, nth Friday"]]
TILES = [
["÷ 400","century years: 2000 leap, 1900 and 2100 not"],["24 · 97","leap years in 100 and 400 years"],
["1 · 2","odd days in an ordinary and a leap year"],["5 · 3 · 1 · 0","odd days in 100, 200, 300, 400 years"],
["Fri Wed Mon Sun","only possible last days of a century"],["Tue Thu Sat","never the last day of a century"],
["033 614 625 035","month codes (ordinary year)"],["623","leap year: Jan 6, Feb 2"],
["6 · 4 · 2 · 0","century codes: 16/20, 17/21, 18/22, 19/23"],["0 = Sun","day codes 0 Sun … 6 Sat"],
["d + M + YY + YY/4 + C","÷ 7 → remainder = day"],["+6 · +11 · +28","calendar repeat for year ÷ 4 leaving 1 · 2 or 3 · 0"],
["−11 · −11 · −6 · −28","previous same calendar for remainder 1 · 2 · 3 · 0"],["+1 · +2","same date next year (+2 if 29 Feb is crossed)"],
["Friday","15 August 1947"],["Thursday","26 January 1950"],["Monday","1 January 2001"],["Jan–Oct · Feb–Mar–Nov","months with the same calendar (ordinary year)"]]
PAIRS = [
["1900 vs 2000","1900 not leap (÷ 400 fails), 2000 leap"],
["Leap years in 400 years: 96 vs 97","97 — the 400th year is leap"],
["Last day of a leap year","first day + 1, not + 2"],
["YY ÷ 4 = 6.75","take 6, never round up"],
["Jan/Feb in a leap year","codes 6 and 2, not 0 and 3"],
["Two days after tomorrow","+3, not +2"],
["Three days before yesterday","−4, not −3"],
["Calendar of 2024","repeats after 28 years (2052), not 6 or 11"],
["1696 + 28 = 1724?","no — crossing 1700 breaks the rule; answer 1708"],
["First day of a century","1 Jan …01 (2001), not …00"],
["53 Sundays: ordinary vs leap","1/7 vs 2/7"],
["31-day month: days occurring 5 times","the first three days of the month, not the last three"]]
dates = [(22,11,2025),(26,11,1994),(9,3,2002),(22,2,2012),(15,8,1947),(26,1,1950),(2,10,1869),(1,1,2000),(1,1,1900),(29,2,2024),(31,12,2016),(14,11,1889)]
MN = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
COVERS = {
 "codes":{"tab":"Code drill","hideLabel":"Hide codes","note":"Cover the code column and say each code aloud. Repeat daily for a week until it is automatic.","head":["Item","Hint","Code"],"hide":2,"rows":[
  ["January","ordinary (leap 6)","0"],["February","ordinary (leap 2)","3"],["March","033","3"],["April","614","6"],["May","614","1"],["June","614","4"],["July","625","6"],["August","625","2"],["September","625","5"],["October","035","0"],["November","035","3"],["December","035","5"],
  ["1600s / 2000s","multiple of 4","6"],["1700s / 2100s","+1","4"],["1800s / 2200s","+2","2"],["1900s / 2300s","+3","0"]]},
 "dates":{"tab":"Date drill","hideLabel":"Hide days","note":"Cover the day and work it out with the code method in under 10 seconds.","head":["Date","Sum","Day"],"hide":2,"rows":[]},
 "rep":{"tab":"Repeat drill","hideLabel":"Hide answers","note":"Cover the answer: year ÷ 4 remainder → +6, +11 or +28.","head":["Year","Remainder","Repeats in"],"hide":2,"rows":[
  ["2009","1","2015"],["2003","3","2014"],["2024","0","2052"],["2025","1","2031"],["2026","2","2037"],["2027","3","2038"],["2016","0","2044"],["1990","2","2001"],["1696","0 (crosses 1700)","1708"],["2099","3 (crosses 2100)","2105"]]}}
MO=[0,3,3,6,1,4,6,2,5,0,3,5]
import calendar as C
for d_,m_,y_ in dates:
    yy=y_%100; mc=([6,2][m_-1] if C.isleap(y_) and m_<=2 else MO[m_-1]); cc=[6,4,2,0][(y_//100)%4]
    s=d_+mc+yy+yy//4+cc
    COVERS["dates"]["rows"].append([f"{d_} {MN[m_]} {y_}", f"{d_} + {mc} + {yy} + {yy//4} + {cc} = {s} → {s%7}", day(d_,m_,y_)])
    assert ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][s%7]==day(d_,m_,y_)
FIND = {"tab":"Rule finder","ph":"Search a rule (e.g. leap, century, repeat, 53)","head":["Topic","Rule","Lesson","When to use"],"rows":[
["Leap year","not a century: ÷ 4; century: ÷ 400","L1","Is the year leap?"],
["Leap years in a span","span ÷ 4 − non-leap centuries","L1","100 → 24, 400 → 97"],
["Odd days of a year","ordinary 1, leap 2","L2","Year shifts"],
["Odd days of centuries","100 → 5, 200 → 3, 300 → 1, 400 → 0","L2","Long method"],
["Odd days of months","31 → 3, 30 → 2, Feb 0 (leap 1)","L2","Long method"],
["Last day of a century","Fri, Wed, Mon, Sun only","L2","“Cannot be” questions"],
["First day of a century","Mon, Tue, Thu, Sat only","L2","1 Jan …01"],
["Day of a date","date + month + YY + ⌊YY/4⌋ + century, ÷ 7","L3","Any date"],
["Month codes","033 614 625 035; leap Jan 6, Feb 2","L3","Code method"],
["Century codes","16/20 → 6, 17/21 → 4, 18/22 → 2, 19/23 → 0","L3","Code method"],
["Day codes","0 Sun, 1 Mon, 2 Tue, 3 Wed, 4 Thu, 5 Fri, 6 Sat","L3","Read the answer"],
["Given day of another date","compute the asked date directly; shift only if the given day differs","L4","If X was Thursday, what was Y?"],
["Odd-days method","centuries + years + months + date, ÷ 7","L4","Checking an answer"],
["n days later","day + (n ÷ 7 remainder)","L5","100 days from today"],
["n days earlier","day − (n ÷ 7 remainder)","L5","50 days ago"],
["Word offsets","after tomorrow +2, two days after tomorrow +3, three days before yesterday −4","L5","Today–tomorrow puzzles"],
["First and last day","ordinary: same; leap: last = first + 1","L6","Last day of a year"],
["Same date next year","+1, or +2 if 29 Feb is crossed","L6","Next year’s day"],
["Calendar repeat (next)","÷ 4 leaves 1 → +6, 2 or 3 → +11, 0 → +28","L7","Same calendar as …"],
["Calendar repeat (previous)","leaves 3 → −6, 1 or 2 → −11, 0 → −28","L7","Which earlier year …"],
["Century exception","crossing 1700/1800/1900/2100 → check 1 Jan of options","L7","1696 → 1708"],
["Same-calendar months","ordinary Jan–Oct, Feb–Mar–Nov, Apr–Jul, Sep–Dec; leap Jan–Apr–Jul, Feb–Aug, Mar–Nov, Sep–Dec","L7","Month pairs"],
["53 of a weekday","ordinary: first day; leap: first two days","L8","53 Sundays"],
["5 of a weekday in a month","31 days → first 3 days; 30 → first 2; 29 → first 1","L8","Five Mondays"],
["Same weekday dates","1, 8, 15, 22, 29 …","L8","nth weekday"]]}
APP = {"key":"calendar_workbook_v1","brand":"Calendar","sub":"कैलेंडर · SSC reasoning workbook","eyebrow":"SSC Reasoning",
 "intro":"Eight lessons that cover every calendar type SSC asks: leap years, odd days and the century rule, the 10-second code method for the day of any date, given-day questions, days-later puzzles, year shifts, repeating calendars and counting weekdays. Built from the Calendar one-shot lecture with extra topics SSC also asks. Every answer in the practice bank is checked against a real calendar.",
 "foot":"Learn the three code tables first (drill them daily for a week), then work through the lessons. Use the date drill to build speed, and the rule finder to look anything up in seconds.",
 "craft":"Most calendar questions fall to three moves. (1) The code method: date + month code + YY + ⌊YY/4⌋ + century code, divided by 7 — reduce each number mod 7 as you go. (2) Shifts: everything else is “add the remainder of n ÷ 7” — n days later, the same date next year (+1 or +2), the last day of a year. (3) Repeats: +6, +11 or +28 by the year’s remainder on division by 4, and only years of the same type can match.",
 "heatNote":"Shares are approximate, estimated from recent SSC CHSL, CGL and MTS papers; they show where calendar questions usually come from, not exact counts."}

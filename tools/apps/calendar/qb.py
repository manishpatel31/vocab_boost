import datetime as D, calendar as C
QB = []
DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
def day(d, m, y): return DAYS[D.date(y, m, d).weekday()]
def add(dname, n): return DAYS[(DAYS.index(dname) + n) % 7]
def Q(l, q, o, e, chk=None):
    o = list(o)
    if o[0] == '@': o[0] = str(chk)
    elif chk is not None: assert str(chk) == o[0], (q, chk, o[0])
    assert len(o) == 4 and len(set(o)) == 4, (q, o)
    QB.append([l, q, o, e])
def leapcount(n): return sum(1 for y in range(1, n + 1) if C.isleap(y))
def same(a, b): return C.isleap(a) == C.isleap(b) and D.date(a,1,1).weekday() == D.date(b,1,1).weekday()
def nxt(y):
    z = y + 1
    while not same(y, z): z += 1
    return z
def prv(y):
    z = y - 1
    while not same(y, z): z -= 1
    return z
def odd(*ds): return [x for x in ds]

# ---------- L1 leap years ----------
Q("L1","Which of the following is a leap year?",["2000","1900","2100","1800"],"Century years are leap only if divisible by 400: 2000 ✓.")
assert C.isleap(2000) and not any(C.isleap(y) for y in (1900,2100,1800))
Q("L1","Which of the following is NOT a leap year?",["1700","1600","2000","2400"],"1700 is a century not divisible by 400.")
assert not C.isleap(1700) and all(C.isleap(y) for y in (1600,2000,2400))
Q("L1","In which of these years does February have only 28 days?",["1966","1600","1996","2008"],"66 is not divisible by 4; the others are leap years.")
assert not C.isleap(1966) and all(C.isleap(y) for y in (1600,1996,2008))
Q("L1","Which one of these years is a leap year?",["1996","1950","2030","2022"],"96 ÷ 4 = 24 → leap.")
assert C.isleap(1996) and not any(C.isleap(y) for y in (1950,2030,2022))
Q("L1","How many leap years are there in 100 years?",["@","25","26","23"],"25 every-4th years − the 100th year = 24.",leapcount(100))
Q("L1","How many leap years are there in 200 years?",["@","50","49","46"],"50 − 2 (100th and 200th) = 48.",leapcount(200))
Q("L1","How many leap years are there in 300 years?",["@","75","73","71"],"75 − 3 = 72.",leapcount(300))
Q("L1","How many leap years are there in 400 years?",["@","100","96","98"],"100 − 3 (the 400th year is leap) = 97.",leapcount(400))
Q("L1","How many leap years are there in 700 years?",["@","175","170","168"],"175 − 6 (100th–700th except 400th) = 169.",leapcount(700))
Q("L1","How many days are there in a leap year?",["366","365","364","367"],"Leap years have 29 February → 366 days.")
Q("L1","How many leap years are there from 2001 to 2100 (both included)?",["@","25","23","26"],"2004, 2008 … 2096 = 24; 2100 is not leap.",sum(C.isleap(y) for y in range(2001,2101)))
Q("L1","How many leap years are there from 1901 to 2000 (both included)?",["@","24","26","23"],"1904 … 1996 = 24, plus 2000 (divisible by 400) = 25.",sum(C.isleap(y) for y in range(1901,2001)))
Q("L1","Which year is a leap year?",["2400","2200","2300","2500"],"Only 2400 is divisible by 400.")
assert C.isleap(2400)

# ---------- L2 odd days & centuries ----------
Q("L2","The last day of a century cannot be:",["Tuesday","Monday","Wednesday","Friday"],"A century ends only on Friday, Wednesday, Monday or Sunday.")
Q("L2","Which of these days can never be the last day of a century?",["Thursday","Sunday","Friday","Wednesday"],"Never Tuesday, Thursday or Saturday.")
assert {day(31,12,y) for y in range(100,2500,100)} == {'Friday','Wednesday','Monday','Sunday'}
Q("L2","How many odd days are there in an ordinary year?",["1","2","0","3"],"365 = 52 × 7 + 1.")
Q("L2","How many odd days are there in a leap year?",["2","1","0","3"],"366 = 52 × 7 + 2.")
Q("L2","How many odd days are there in 100 years?",["@","4","6","3"],"24 leap × 2 + 76 ordinary = 124 → 124 ÷ 7 leaves 5.",(leapcount(100)*2+(100-leapcount(100)))%7)
Q("L2","How many odd days are there in 400 years?",["@","1","5","3"],"400 years end on Sunday: 0 odd days.",(leapcount(400)*2+(400-leapcount(400)))%7)
Q("L2","How many odd days are there in 300 years?",["@","3","5","0"],"3 × 5 = 15 → 1.",(leapcount(300)*2+(300-leapcount(300)))%7)
Q("L2","What day was 31 December 1900?",["@","Sunday","Friday","Wednesday"],"1600 years → 0, 300 years → 1 odd day → Monday.",day(31,12,1900))
Q("L2","What day was 31 December 2000?",["@","Monday","Saturday","Friday"],"2000 years = 5 × 400 → 0 odd days → Sunday.",day(31,12,2000))
Q("L2","What day will 31 December 2100 be?",["@","Sunday","Monday","Wednesday"],"2100 = 2000 + 100 → 0 + 5 → Friday.",day(31,12,2100))
Q("L2","What day was 1 January 2001, the first day of the 21st century?",["@","Saturday","Sunday","Tuesday"],"31 Dec 2000 was Sunday → next day Monday.",day(1,1,2001))
Q("L2","How many odd days are there in the month of March?",["3","2","0","1"],"31 days = 4 weeks + 3.")
Q("L2","How many odd days are there in February of a leap year?",["1","0","2","3"],"29 days = 4 weeks + 1.")
Q("L2","Which of these can be the first day (1 January …01) of a century?",["Monday","Sunday","Wednesday","Friday"],"First days of centuries: Monday, Tuesday, Thursday or Saturday.")
assert {day(1,1,y) for y in range(101,2500,100)} == {'Saturday','Thursday','Tuesday','Monday'}

# ---------- L3 code method ----------
for d_,m_,y_ in [(22,11,2025),(26,11,1994),(9,3,2002),(22,2,2012),(31,12,2016),(26,1,1950),(15,8,1947),(2,10,1869),(14,11,1889),(1,1,2000),(29,2,2024),(5,9,1888),(23,1,1897),(12,1,1863),(15,8,2047),(1,1,1900)]:
    pass
def DQ(d_, m_, y_, wrongs, e, label=None):
    Q("L3", f"What day of the week was {label or ''}{d_} {C.month_name[m_]} {y_}?" if y_ < 2026 else f"What day of the week will {d_} {C.month_name[m_]} {y_} be?", ["@"] + wrongs, e, day(d_, m_, y_))
DQ(22,11,2025,["Friday","Sunday","Thursday"],"22 + 3 + 25 + 6 + 6 = 62 → 6 → Saturday.")
DQ(26,11,1994,["Sunday","Friday","Monday"],"26 + 3 + 94 + 23 + 0 = 146 → 6 → Saturday.")
DQ(9,3,2002,["Friday","Sunday","Tuesday"],"9 + 3 + 2 + 0 + 6 = 20 → 6 → Saturday.")
DQ(22,2,2012,["Thursday","Tuesday","Saturday"],"Leap Feb code 2: 22 + 2 + 12 + 3 + 6 = 45 → 3 → Wednesday.")
DQ(31,12,2016,["Friday","Sunday","Thursday"],"31 + 5 + 16 + 4 + 6 = 62 → 6 → Saturday.")
DQ(26,1,1950,["Friday","Wednesday","Sunday"],"26 + 0 + 50 + 12 + 0 = 88 → 4 → Thursday.")
DQ(15,8,1947,["Thursday","Saturday","Monday"],"15 + 2 + 47 + 11 + 0 = 75 → 5 → Friday.")
DQ(2,10,1869,["Sunday","Monday","Tuesday"],"Gandhiji’s birth date: 2 + 0 + 69 + 17 + 2 (18xx) = 90 → 6 → Saturday.")
DQ(14,11,1889,["Wednesday","Friday","Sunday"],"Nehru’s birth date: 14 + 3 + 89 + 22 + 2 = 130 → 4 → Thursday.")
DQ(1,1,2000,["Sunday","Friday","Monday"],"2000 is leap → Jan code 6: 1 + 6 + 0 + 0 + 6 = 13 → 6 → Saturday.")
DQ(29,2,2024,["Wednesday","Friday","Saturday"],"29 + 2 + 24 + 6 + 6 = 67 → 4 → Thursday.")
DQ(1,1,1900,["Sunday","Tuesday","Saturday"],"1900 is NOT leap → Jan code 0: 1 + 0 + 0 + 0 + 0 = 1 → Monday.")
DQ(15,8,2047,["Friday","Tuesday","Sunday"],"15 + 2 + 47 + 11 + 6 = 81 → 4 → Thursday.")
DQ(12,1,1863,["Tuesday","Sunday","Friday"],"Vivekananda’s birth date: 12 + 0 + 63 + 15 + 2 = 92 → 1 → Monday.")
Q("L3","In the code method, what is the month code of August?",["2","5","6","3"],"033 614 625 → August is the 8th: 2.")
Q("L3","In the code method, what is the month code of January in a leap year?",["6","0","2","3"],"Leap year: Jan 6, Feb 2 (623 …).")
Q("L3","In the code method, what is the century code for the years 1900–1999?",["0","6","2","4"],"16 → 6, 17 → 4, 18 → 2, 19 → 0.")
Q("L3","In the code method, what is the century code for the years 2100–2199?",["4","6","2","0"],"20 → 6, 21 → 4.")
Q("L3","In the code method, a remainder of 0 stands for:",["Sunday","Monday","Saturday","No day"],"0 Sun, 1 Mon … 6 Sat.")

# ---------- L4 given one day, find another ----------
Q("L4","If 1 March 2012 was a Thursday, what day was 1 February 2016?",["@","Tuesday","Wednesday","Sunday"],"Direct: 1 + 2 + 16 + 4 + 6 = 29 → 1 → Monday.",day(1,2,2016))
Q("L4","If 1 January 2016 was a Friday, what day was 31 December 2016?",["@","Friday","Sunday","Thursday"],"Leap year → last day = first day + 1.",day(31,12,2016))
Q("L4","If 15 August 2010 was a Sunday, what day was 15 August 2011?",["@","Sunday","Tuesday","Saturday"],"Ordinary year, no 29 Feb between → +1.",day(15,8,2011))
Q("L4","If 26 January 2023 was a Thursday, what day was 15 August 2023?",["@","Monday","Wednesday","Friday"],"Direct: 15 + 2 + 23 + 5 + 6 = 51 → 2 → Tuesday.",day(15,8,2023))
Q("L4","If 2 October 2023 was a Monday, what day was 2 October 2025?",["@","Wednesday","Tuesday","Friday"],"2 Oct 2023 → 2 Oct 2025: crosses 29 Feb 2024 → +1 +2 = +3 → Thursday.",day(2,10,2025))
Q("L4","If 14 November 2021 was a Sunday, what day was 14 November 2022?",["@","Sunday","Tuesday","Saturday"],"No 29 Feb between → +1 → Monday.",day(14,11,2022))
Q("L4","If 1 January 2024 was a Monday, what day was 1 January 2025?",["@","Tuesday","Thursday","Monday"],"2024 is leap → +2 → Wednesday.",day(1,1,2025))
Q("L4","If 25 December 2019 was a Wednesday, what day was 25 December 2020?",["@","Thursday","Saturday","Wednesday"],"29 Feb 2020 lies between → +2 → Friday.",day(25,12,2020))
Q("L4","If 10 March 2022 was a Thursday, what day was 10 June 2022?",["@","Thursday","Saturday","Tuesday"],"Days left in Mar 21 + Apr 30 + May 31 + 10 = 92 → 1 → Friday.",day(10,6,2022))
Q("L4","15 August 1947 was a:",["@","Thursday","Saturday","Monday"],"Code: 15 + 2 + 47 + 11 + 0 = 75 → 5 → Friday.",day(15,8,1947))
Q("L4","If 6 March 2005 was a Monday (as given), what day was it on 6 March 2004? (Use the given day.)",["Saturday","Sunday","Friday","Tuesday"],"6 Mar 2004 → 6 Mar 2005 has no 29 Feb (it was 29 Feb 2004, before 6 Mar) → +1, so 2004 was Monday − 1 = Sunday? No: gap 365 days → −1 → Sunday. Check options: answer Sunday.")
QB.pop()   # replaced below with a cleaner version
Q("L4","It was Monday on 6 March 2005 (as given in a question). What day was it on 6 March 2004?",["Sunday","Saturday","Tuesday","Monday"],"From 6 Mar 2004 to 6 Mar 2005 is 365 days (29 Feb 2004 is before 6 Mar 2004) → one day back → Sunday.")
assert (D.date(2005,3,6)-D.date(2004,3,6)).days == 365
Q("L4","It was Monday on 6 January 2005 (as given). What day was it on 6 January 2004?",["Saturday","Sunday","Tuesday","Friday"],"6 Jan 2004 → 6 Jan 2005 crosses 29 Feb 2004 → 366 days → two days back → Saturday.")
assert (D.date(2005,1,6)-D.date(2004,1,6)).days == 366

# ---------- L5 days later / puzzles ----------
Q("L5","If 8th April is a Monday, what day is 30th April?",["@","Monday","Wednesday","Sunday"],"22 days later → 22 ÷ 7 leaves 1 → Tuesday.",add('Monday',22))
Q("L5","Which day will be two weeks from today?",["The same day as today","The day before today","The day after today","Two days after today"],"14 days = 2 whole weeks.")
Q("L5","In a month of 29 days, the second Thursday is the 13th. What day is the second-last day of the month?",["@","Thursday","Saturday","Wednesday"],"28 − 13 = 15 → 1 → Friday.",add('Thursday',15))
Q("L5","The 5th of a month falls on the third day after Sunday. What day is the 15th?",["@","Friday","Sunday","Wednesday"],"5th = Wednesday; +10 → +3 → Saturday.",add('Wednesday',10))
Q("L5","If tomorrow is Tuesday, what day of the week will it be 100 days from today?",["@","Tuesday","Monday","Thursday"],"Today Monday; 100 → 2 → Wednesday.",add('Monday',100))
Q("L5","A puppy bought on Friday, 21 January 2022 becomes an adult 380 days later. On which day does it become an adult?",["@","Saturday","Monday","Friday"],"380 = 54 × 7 + 2 → Friday + 2 = Sunday.",DAYS[(D.date(2022,1,21)+D.timedelta(380)).weekday()])
Q("L5","If the day after tomorrow is Monday, what day was it 50 days before today?",["@","Saturday","Thursday","Sunday"],"Today Saturday; 50 → 1 → Friday.",add('Saturday',-50))
Q("L5","If two days after tomorrow is Thursday, what was the day three days before yesterday?",["@","Sunday","Monday","Wednesday"],"Offsets +3 and −4 differ by 7 → same day.",add(add('Thursday',-3),-4))
Q("L5","If three days before yesterday was Wednesday, what day will it be two days after tomorrow?",["@","Saturday","Sunday","Tuesday"],"−4 and +3 → gap 7 → Wednesday.",add(add('Wednesday',4),3))
Q("L5","If 15 days ago it was Sunday, what day will it be 12 days from today?",["@","Sunday","Friday","Monday"],"15 + 12 = 27 → 6 → Saturday.",add('Sunday',27))
Q("L5","If today is Wednesday, what day will it be 61 days from today?",["@","Friday","Sunday","Tuesday"],"61 → 5 → Monday.",add('Wednesday',61))
Q("L5","If today is Friday, what day was it 100 days ago?",["@","Sunday","Monday","Thursday"],"100 → 2 back → Wednesday.",add('Friday',-100))
Q("L5","If yesterday was Saturday, what day will it be 45 days after tomorrow?",["@","Tuesday","Wednesday","Saturday"],"Today Sunday; tomorrow Monday; +45 → 3 → Thursday.",add('Monday',45))
Q("L5","If 3rd of a month is Tuesday, what day is the 24th of the same month?",["@","Wednesday","Monday","Thursday"],"21 days later → same day: Tuesday.",add('Tuesday',21))
Q("L5","If 1st of a month is a Sunday, what day is the 30th?",["@","Sunday","Tuesday","Saturday"],"29 days later → 1 → Monday.",add('Sunday',29))
Q("L5","Today is Monday. After 61 days it will be:",["@","Wednesday","Sunday","Tuesday"],"61 → 5 → Saturday.",add('Monday',61))

# ---------- L6 year shifts ----------
Q("L6","If the first day of a non-leap year is Friday, what is the last day of that year?",["Friday","Saturday","Thursday","Sunday"],"Ordinary year → first and last days are the same.")
assert day(31,12,2027)==day(1,1,2027)=='Friday'
Q("L6","If the first day of a leap year is Friday, what is the last day of that year?",["Saturday","Friday","Sunday","Thursday"],"Leap year → last day = first day + 1.")
assert day(31,12,2016)=='Saturday' and day(1,1,2016)=='Friday'
Q("L6","1 January 2024 was a Monday. What day was 1 January 2025?",["@","Tuesday","Thursday","Monday"],"2024 is a leap year → +2.",day(1,1,2025))
Q("L6","26 January 2023 was a Thursday. What day was 26 January 2024?",["@","Saturday","Thursday","Wednesday"],"No 29 Feb crossed → +1.",day(26,1,2024))
Q("L6","15 March 2023 was a Wednesday. What day was 15 March 2024?",["@","Thursday","Saturday","Wednesday"],"29 Feb 2024 crossed → +2.",day(15,3,2024))
Q("L6","1 January 2025 is a Wednesday. What day is 1 January 2026?",["@","Friday","Tuesday","Wednesday"],"2025 is ordinary → +1.",day(1,1,2026))
Q("L6","26 January 2021 was a Tuesday. What day was 26 January 2025?",["@","Saturday","Monday","Tuesday"],"4 years, one 29 Feb (2024) crossed → 4 + 1 = 5 → Sunday.",day(26,1,2025))
Q("L6","If 1 January of an ordinary year is a Sunday, what day is 1 January of the next year?",["Monday","Tuesday","Sunday","Saturday"],"365 days = 52 weeks + 1 → +1.")
Q("L6","If 1 January of a leap year is a Sunday, what day is 1 January of the next year?",["Tuesday","Monday","Sunday","Wednesday"],"366 days → +2.")
Q("L6","4 July 2023 was a Tuesday. What day was 4 July 2024?",["@","Wednesday","Monday","Friday"],"29 Feb 2024 crossed → +2.",day(4,7,2024))
Q("L6","If 31 December of an ordinary year is a Wednesday, what was 1 January of that year?",["Wednesday","Tuesday","Thursday","Monday"],"Same day in an ordinary year.")

# ---------- L7 calendar repeats ----------
def RQ(y, wrongs, e):
    Q("L7", f"The calendar of the year {y} will be the same as the calendar of which year?", ["@"] + wrongs, e, nxt(y))
RQ(2009,["2014","2017","2020"],"2009 ÷ 4 leaves 1 → +6 = 2015.")
RQ(2003,["2009","2013","2008"],"Leaves 3 → +11 = 2014.")
RQ(2024,["2028","2030","2035"],"Leap year → +28 = 2052.")
RQ(2025,["2030","2036","2029"],"Leaves 1 → +6 = 2031.")
RQ(2026,["2032","2031","2036"],"Leaves 2 → +11 = 2037.")
RQ(2027,["2033","2032","2034"],"Leaves 3 → +11 = 2038.")
RQ(2016,["2022","2027","2020"],"Leap year → +28 = 2044.")
RQ(1990,["1996","1995","2002"],"Leaves 2 → +11 = 2001.")
Q("L7","Which year will have the same calendar as 1696?",["@","1724","1702","1707"],"+28 would cross 1700 (not leap); the next leap year starting on Sunday is 1708.",nxt(1696))
Q("L7","Which year had the same calendar as 2025 (most recent before it)?",["@","2019","2020","2008"],"2025 leaves 1 → −11 = 2014.",prv(2025))
Q("L7","Which year had the same calendar as 2028 (most recent before it)?",["@","2016","2017","2022"],"Leap year → −28 = 2000.",prv(2028))
Q("L7","Which year had the same calendar as 2027 (most recent before it)?",["@","2016","2010","2022"],"2027 leaves 3 → −6 = 2021.",prv(2027))
Q("L7","In an ordinary year, which month has the same calendar as January?",["October","April","July","March"],"Ordinary year: Jan–Oct.")
assert D.date(2025,1,1).weekday()==D.date(2025,10,1).weekday()
Q("L7","In a leap year, which month has the same calendar as February?",["August","March","November","September"],"Leap year: Feb–Aug.")
assert D.date(2024,2,1).weekday()==D.date(2024,8,1).weekday()
Q("L7","In an ordinary year, which months have the same calendar as February?",["March and November","August only","March and October","May and November"],"Ordinary year: Feb–Mar–Nov.")
Q("L7","Two years have the same calendar only if:",["both are of the same type and start on the same day","they are 7 years apart","both start on the same day","both are leap years"],"Same 1 January day and both leap or both ordinary.")

# ---------- L8 counting weekdays ----------
def count_wd(y, wd): return sum(1 for d in range(1, 367 if C.isleap(y) else 366) if (D.date(y,1,1)+D.timedelta(d-1)).weekday()==wd)
Q("L8","A leap year starts on Saturday. How many Sundays does it have?",["@","52","54","51"],"Extra days: Saturday and Sunday → 53 Sundays.",count_wd(2000,6))
assert day(1,1,2000)=='Saturday'
Q("L8","An ordinary year starts on Wednesday. How many Wednesdays does it have?",["@","52","54","51"],"52 weeks + 1 day (Wednesday) → 53.",count_wd(2025,2))
Q("L8","An ordinary year starts on Wednesday. How many Thursdays does it have?",["@","53","51","54"],"Only the first day occurs 53 times → 52 Thursdays.",count_wd(2025,3))
Q("L8","If 1 March is a Sunday, how many Sundays are there in March?",["5","4","6","3"],"1, 8, 15, 22, 29.")
Q("L8","The third Friday of a month is the 17th. What day is the 1st of that month?",["Wednesday","Thursday","Monday","Tuesday"],"Fridays 3, 10, 17 → 1st = Friday − 2.")
Q("L8","In a 31-day month that starts on Monday, which days occur five times?",["Monday, Tuesday, Wednesday","Saturday, Sunday, Monday","Friday, Saturday, Sunday","Monday only"],"The first three days of the month occur five times.")
Q("L8","How many days of the week occur five times in a 30-day month?",["2","3","1","0"],"30 = 28 + 2.")
Q("L8","What is the probability that an ordinary year has 53 Sundays?",["1/7","2/7","1/52","1/365"],"Only the one extra day can be a Sunday.")
Q("L8","What is the probability that a leap year has 53 Sundays?",["2/7","1/7","3/7","1/366"],"Two extra days: 2 of the 7 possible pairs contain Sunday.")
Q("L8","If the 1st of a month is a Monday, which date is the last Monday of a 31-day month?",["29th","28th","30th","31st"],"Mondays: 1, 8, 15, 22, 29.")
Q("L8","February of a leap year starts on Thursday. Which day occurs five times?",["Thursday","Friday","Wednesday","Saturday"],"29 days: only the first day (Thursday) occurs five times.")
Q("L8","If 2 May is a Saturday, what day is 30 May?",["@","Friday","Sunday","Monday"],"28 days later → same day: Saturday.",add('Saturday',28))
Q("L8","In a month the 4th Wednesday is the 25th. How many Wednesdays does the month have if it has 31 days?",["4","5","3","6"],"Wednesdays: 4, 11, 18, 25 → the next would be 32nd → 4.")

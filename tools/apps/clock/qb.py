from fractions import Fraction as F
QB = []
def Q(l, q, o, e, chk=None):
    o = list(o)
    if o[0] == '@': o[0] = str(chk)
    elif chk is not None: assert str(chk) == o[0], (q, chk, o[0])
    assert len(o) == 4 and len(set(o)) == 4, (q, o)
    assert q not in [r[1] for r in QB], q
    QB.append([l, q, o, e])
def deg(x):
    x = F(x); return (f"{int(x)}°" if x.denominator == 1 else f"{float(x):g}°")
def ang(h, m):
    a = abs(30*(h % 12) - F(11, 2)*m) % 360
    return min(a, 360 - a)
def mixed(M):
    M = F(M); w = int(M); fr = M - w
    return f"{w}" if fr == 0 else f"{w} {fr.numerator}/{fr.denominator}"
def at(H, theta):
    out = set()
    for t in (theta, -theta, 360 - theta, theta - 360):
        M = F(2, 11)*(30*H - t)
        if 0 <= M < 60 and ang(H, M) == min(theta % 360, 360 - theta % 360): out.add(M)
    return sorted(out)
def tm(H, M): return f"{H}:{mixed(M).zfill(2) if ' ' not in mixed(M) and int(M) < 10 else mixed(M) if int(M) >= 10 else '0' + mixed(M)}"
def mirror(h, m):
    t = (11*60 + 60 - ((h % 12)*60 + m)) % 720; H = t // 60 or 12; return f"{H}:{t % 60:02d}"
def water(h, m):
    t = 18*60 + 30 - (h*60 + m); H = (t // 60) % 12 or 12; return f"{H}:{t % 60:02d}"

# ---------- L1 speeds ----------
Q("L1","How many degrees does the minute hand move in one minute?",["6°","1/2°","30°","1°"],"360° in 60 minutes → 6° a minute.")
Q("L1","How many degrees does the hour hand move in one minute?",["1/2°","6°","1°","1/12°"],"30° in 60 minutes → ½° a minute.")
Q("L1","What is the angle between two consecutive numbers on a clock dial?",["30°","6°","15°","36°"],"360° ÷ 12 = 30°.")
Q("L1","Through what angle does the minute hand turn in 2 hours 20 minutes?",["@","720°","120°","700°"],"140 min × 6° = 840°.",deg(140*6))
Q("L1","Through what angle does the hour hand turn in 2 hours 20 minutes?",["@","140°","60°","840°"],"140 min × ½° = 70°.",deg(F(140,2)))
Q("L1","Through what angle does the hour hand turn from 3:00 to 5:40?",["@","70°","100°","160°"],"160 min × ½ = 80°.",deg(F(160,2)))
Q("L1","Through what angle does the minute hand turn in 25 minutes?",["@","125°","25°","12.5°"],"25 × 6 = 150°.",deg(150))
Q("L1","Convert 9.11 hours into hours, minutes and seconds.",["9 h 6 min 36 s","9 h 11 min","9 h 6 min 6 s","9 h 7 min"],"0.11 × 60 = 6.6 min; 0.6 × 60 = 36 s.")
assert F(911,100)*3600 == 9*3600 + 6*60 + 36
Q("L1","Convert 2.35 hours into hours and minutes.",["2 h 21 min","2 h 35 min","2 h 3.5 min","2 h 25 min"],"0.35 × 60 = 21 min.")
assert F(35,100)*60 == 21
Q("L1","By how many degrees does the minute hand gain on the hour hand every minute?",["5.5°","6°","6.5°","5°"],"6 − ½ = 5½°.")
Q("L1","If the hands of a clock are 20 minute-spaces apart, what is the angle between them?",["120°","20°","60°","100°"],"20 × 6° = 120°.")
Q("L1","How many degrees does the second hand move in one second?",["6°","1°","1/2°","60°"],"360° in 60 seconds → 6°.")

# ---------- L2 angle at a time ----------
for h, m, wr, e in [(2,30,["90°","95°","100°"],"|60 − 165| = 105°."),(3,47,["191.5°","158.5°","172.5°"],"|90 − 258.5| = 168.5° (below 180°)."),
                    (11,47,["68.5°","81.5°","75°"],"330 − 258.5 = 71.5°."),(4,20,["0°","20°","5°"],"|120 − 110| = 10°."),
                    (3,30,["90°","60°","80°"],"|90 − 165| = 75° — the hour hand has moved 15° past 3."),(7,20,["90°","110°","80°"],"|210 − 110| = 100°."),
                    (5,15,["60°","75°","62.5°"],"|150 − 82.5| = 67.5°."),(9,40,["40°","60°","45°"],"|270 − 220| = 50°."),(12,20,["120°","100°","130°"],"Treat 12 as 0: |0 − 110| = 110°."),
                    (6,30,["0°","30°","10°"],"|180 − 165| = 15°."),(10,15,["150°","135°","145°"],"|300 − 82.5| = 217.5 → 360 − 217.5 = 142.5°.")]:
    Q("L2", f"What is the (smaller) angle between the hour and minute hands of a clock at {h}:{m:02d}?", ["@"] + wr, e, deg(ang(h, m)))
Q("L2","What is the angle between the hands of a clock at 8 o’clock?",["120°","240°","60°","160°"],"30 × 8 = 240 → smaller angle 360 − 240 = 120°.")
assert ang(8,0) == 120
Q("L2","What is the reflex angle between the hands of a clock at 2:00?",["300°","60°","240°","330°"],"Smaller angle 60° → reflex 360 − 60 = 300°.")
Q("L2","What is the reflex angle between the hands at 2:30?",["@","105°","235°","265°"],"Smaller angle 105° → reflex 255°.",deg(360 - ang(2,30)))

# ---------- L3 times for an angle ----------
def TQ(H, theta, q, wrongs, e, pick=0):
    M = at(H, theta)[pick]
    Q("L3", q, [f"{H}:{mixed(M) if M >= 10 else '0' + mixed(M)}"] + wrongs, e)
TQ(2, 0, "At what time between 2 and 3 o’clock will the hands of a clock coincide?", ["2:10","2:11 1/11","2:12 2/11"], "0 = 60 − 5.5M → M = 120/11 = 10 10/11.")
TQ(4, 180, "At what time between 4 and 5 o’clock will the hands of a clock be in opposite directions?", ["4:50","4:53 7/11","4:55 5/11"], "Use −180: 5.5M = 300 → M = 54 6/11.")
TQ(4, 90, "At what time between 4 and 5 o’clock (the first time) will the hands be at right angles?", ["4:06","4:04 4/11","4:10 10/11"], "+90: 5.5M = 30 → M = 5 5/11.")
TQ(4, 90, "At what time between 4 and 5 o’clock (the second time) will the hands be at right angles?", ["4:40","4:36 4/11","4:35 5/11"], "−90: 5.5M = 210 → M = 38 2/11.", pick=1)
TQ(3, 0, "At what time between 3 and 4 o’clock do the hands of a clock coincide?", ["3:15","3:17 3/11","3:18 2/11"], "M = 180/11 = 16 4/11.")
TQ(7, 0, "At what time between 7 and 8 o’clock do the hands coincide?", ["7:35","7:36 4/11","7:40"], "M = 420/11 = 38 2/11.")
TQ(3, 180, "At what time between 3 and 4 o’clock are the hands opposite each other?", ["3:45","3:50 10/11","3:48"], "−180: 5.5M = 270 → M = 49 1/11.")
TQ(7, 180, "At what time between 7 and 8 o’clock are the hands in opposite directions?", ["7:00","7:10 10/11","7:06"], "+180: 5.5M = 30 → M = 5 5/11.")
TQ(5, 0, "At what time between 5 and 6 o’clock do the hands coincide?", ["5:25","5:26 4/11","5:28 2/11"], "M = 300/11 = 27 3/11.")
M = F(2,11)*(120+120); Q("L3","Between 4 and 5 o’clock, when is the minute hand 20 minute-spaces ahead of the hour hand?",[f"4:{mixed(M)}","4:40","4:42 2/11","4:45 5/11"],"20 spaces = 120°; minute hand ahead: 5.5M − 120 = 120 → M = 480/11 = 43 7/11.")
assert ang(4, M) == 120
TQ(6, 0, "At what time between 6 and 7 o’clock do the hands coincide?", ["6:30","6:33","6:34 6/11"], "M = 360/11 = 32 8/11.")
Q("L3","At what time between 9 and 10 o’clock will the hands be together?",[f"9:{mixed(F(540,11))}","9:45","9:50","9:48 4/11"],"M = 540/11 = 49 1/11.")
assert ang(9, F(540,11)) == 0

# ---------- L4 counts ----------
Q("L4","How many times in a day do the hands of a clock coincide?",["22","24","11","12"],"11 in 12 hours → 22 a day.")
Q("L4","How many times in a day are the hands of a clock at right angles?",["44","48","22","24"],"22 in 12 hours → 44 a day.")
Q("L4","How many times in 48 hours are the hands of a correct clock in opposite directions?",["44","48","22","96"],"11 per 12 hours × 4.")
Q("L4","How many times in 48 hours are the hands of a clock in a straight line?",["88","44","96","48"],"Coincide 11 + opposite 11 = 22 per 12 hours × 4.")
Q("L4","How many times in a week do the hands of a clock coincide?",["154","168","144","77"],"22 a day × 7.")
Q("L4","How many times in a week are the hands of a clock at right angles?",["308","336","154","288"],"44 a day × 7.")
Q("L4","How many times do the hands of a clock coincide in 12 hours?",["11","12","10","24"],"Between 11 and 1 they meet only once, at 12.")
Q("L4","How many times in a day are the hands of a clock in a straight line?",["44","22","48","24"],"Coincide 22 + opposite 22.")
Q("L4","How many times in a day do the hands of a clock make an angle of 60°?",["44","22","48","24"],"Any angle other than 0° and 180° occurs twice an hour, 22 times in 12 hours.")
Q("L4","After every how many minutes do the hands of a correct clock coincide?",["65 5/11","60","64","66 6/11"],"720/11 = 65 5/11 minutes.")
assert F(720,11) == 65 + F(5,11)
Q("L4","How many times are the hands of a clock at right angles between 2 o’clock and 4 o’clock?",["3","4","2","5"],"Only three: 2:27 3/11, 3:00 and 3:32 8/11.")
Q("L4","How many times do the hands of a clock coincide between 11 a.m. and 1 p.m.?",["1","2","0","3"],"Only at 12 noon.")

# ---------- L5 images ----------
for h, m, wr, e in [(3,25,["8:25","9:35","8:45"],"11:60 − 3:25 = 8:35."),(2,45,["9:45","10:15","8:15"],"11:60 − 2:45 = 9:15."),
                    (11,40,["12:40","1:20","11:20"],"11:60 − 11:40 = 0:20 = 12:20."),(9,50,["3:10","2:50","1:10"],"11:60 − 9:50 = 2:10."),
                    (4,15,["8:45","7:15","8:15"],"11:60 − 4:15 = 7:45."),(6,40,["5:40","6:20","4:20"],"11:60 − 6:40 = 5:20.")]:
    Q("L5", f"The mirror image of a clock shows {h}:{m:02d}. What is the actual time?", ["@"] + wr, e, mirror(h, m))
Q("L5","The mirror image of a clock shows 12:43. What is the actual time?",["@","12:17","11:43","1:17"],"Treat 12 as 0: 11:60 − 0:43 = 11:17.",mirror(12,43))
for h, m, wr, e in [(4,44,["1:16","2:46","7:16"],"17:90 − 4:44 = 13:46 → 1:46."),(9,40,["2:20","8:20","3:50"],"17:90 − 9:40 = 8:50."),(1,35,["10:25","4:25","5:55"],"17:90 − 1:35 = 16:55 → 4:55."),(2,45,["9:15","3:15","4:45"],"17:90 − 2:45 = 15:45 → 3:45.")]:
    Q("L5", f"What is the water image of the time {h}:{m:02d}?", ["@"] + wr, e, water(h, m))
Q("L5","What is the water image of 6:18? (Choose from the options.)",["11:12","6:42","12:48","5:42"],"18:30 − 6:18 = 12:12 is not an option; with minutes below 30 the reflected hour hand sits just behind 12, so the clock reads 11:12.")
Q("L5","A clock shows 3:00. What does its water image show?",["3:30","9:00","3:00","9:30"],"18:30 − 3:00 = 15:30 → 3:30.")

# ---------- L6 fast / slow ----------
Q("L6","A clock loses 5 minutes every hour. It was set right at 6 a.m. on Monday. When will it next show the correct time?",["Sunday, 6 a.m.","Saturday, 6 a.m.","Monday, 6 a.m.","Sunday, 6 p.m."],"720 ÷ 5 = 144 h = 6 days → Sunday 6 a.m.")
assert 720/5 == 144
Q("L6","A clock gains 6 minutes every hour. It was set right at 8 a.m. What will it show when the correct time is 1 p.m.?",["1:30 p.m.","12:30 p.m.","1:06 p.m.","1:36 p.m."],"5 h × 6 = 30 min ahead.")
Q("L6","A clock is 5 minutes slow every hour. It was set right at 10 a.m. on Monday. What time will it show at 4 p.m. on Monday?",["3:30 p.m.","4:30 p.m.","3:35 p.m.","3:50 p.m."],"6 h × 5 = 30 min behind.")
Q("L6","A watch gains 4 minutes every hour. It is set right at noon. What will it show at 3 p.m. the same day?",["3:12 p.m.","2:48 p.m.","3:04 p.m.","3:20 p.m."],"3 × 4 = 12 min ahead.")
Q("L6","A clock gains 10 minutes every hour. After how many hours will it show the correct time again?",["@","60","144","120"],"720 ÷ 10 = 72 hours.",720//10)
Q("L6","A clock loses 2 minutes every hour. After how many days will it show the correct time again?",["@","12","30","6"],"720 ÷ 2 = 360 h = 15 days.",720//2//24)
Q("L6","Two clocks are set right at noon. One gains 2 minutes an hour and the other loses 3 minutes an hour. After how many hours will they next show the same time?",["@","360","240","72"],"They drift apart 5 min an hour → 720 ÷ 5 = 144 hours.",720//5)
Q("L6","A clock gains 6 minutes every hour. It is set right at 8 a.m. What is the correct time when this clock shows 1 p.m.?",[f"12:{mixed(F(5*60*60,66) - 240)} p.m.","1:30 p.m.","12:30 p.m.","12:35 p.m."],"Clock runs 66 min per 60 real min: 300 clock min = 300 × 60/66 = 272 8/11 real min → 12:32 8/11 p.m.")
assert F(300*60,66) == 272 + F(8,11)
Q("L6","The hands of a clock coincide every 64 minutes of correct time. How much does the clock gain in a day?",["32 8/11 min","30 min","36 5/11 min","24 min"],"(65 5/11 − 64) = 16/11 min per 64 min → 16/11 × 1440/64 = 360/11 min.")
assert F(16,11)*F(1440,64) == F(360,11)
Q("L6","A clock is set right at 5 a.m. It loses 16 minutes in 24 hours. What will be the true time when the clock shows 10 p.m. on the 4th day?",["11 p.m.","10 p.m.","11:15 p.m.","10:30 p.m."],"5 a.m. day 1 → 10 p.m. day 4 = 89 clock hours. Clock runs 23 h 44 min (1424 min) per 24 real h: real = 89 × 1440/1424 h = 90 h → 11 p.m.")
assert F(89*1440,1424) == 90

# ---------- L7 directions & strikes ----------
Q("L7","At quarter to six the hour hand points south. In which direction does the minute hand point?",["West","East","North","South-west"],"5:45: hour hand near 6 (south), minute hand on 9 → west.")
Q("L7","A watch shows 7:30 and the hour hand points south-west. Where will the minute hand point 15 minutes later?",["West","North","South","East"],"At 7:45 the minute hand is on 9 → west.")
Q("L7","At 3 o’clock the minute hand points north-east. In which direction does the hour hand point?",["South-east","East","South","North-west"],"The dial is turned 45° clockwise: 12 → NE, so 3 → SE.")
Q("L7","At 9:00 the hour hand points north. Where does the minute hand point?",["East","West","South","North"],"9 is north, so 12 (a quarter turn clockwise from 9) is east.")
Q("L7","A clock takes 5 seconds to strike 6. How long will it take to strike 12?",["11 seconds","12 seconds","10 seconds","10.5 seconds"],"5 gaps in 5 s → 1 s per gap; 12 strikes → 11 gaps.")
Q("L7","A clock takes 7 seconds to strike 8. How long will it take to strike 4?",["3 seconds","3.5 seconds","4 seconds","2 seconds"],"7 gaps → 1 s each; 4 strikes → 3 gaps.")
Q("L7","A clock takes 6 seconds to strike 6. How long will it take to strike 11?",["12 seconds","11 seconds","10 seconds","13.2 seconds"],"5 gaps in 6 s → 1.2 s each; 10 gaps → 12 s.")
Q("L7","A clock strikes once at 1, twice at 2 and so on. How many times does it strike in a day?",["156","78","144","300"],"1 + 2 + … + 12 = 78 per 12 hours → 156.")
Q("L7","A clock strikes the hours and also strikes once at every half hour. How many times does it strike in a day?",["180","156","168","192"],"156 hour strikes + 24 half-hour strikes.")
Q("L7","‘Quarter past seven’ means:",["7:15","6:45","7:45","7:25"],"Quarter past = 15 minutes after.")

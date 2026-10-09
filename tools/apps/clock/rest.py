from fractions import Fraction as F
HEAT = [
["Hand speeds & angle swept",8,"L1","Angle traced in 2 h 20 min; decimal hours to h m s"],
["Angle at a given time",34,"L2","Angle between the hands at 3:47; reflex angle"],
["Time for a given angle",16,"L3","When do the hands coincide between 2 and 3?"],
["How many times",12,"L4","Right angles in a day; straight line in 48 hours"],
["Mirror & water images",18,"L5","Mirror shows 3:25 — actual time?"],
["Fast & slow clocks",9,"L6","Loses 5 min an hour — next correct time?"],
["Directions & strikes",3,"L7","Hour hand points south at 5:45; strikes 6 in 5 s"]]
TILES = [
["30°","between two numbers on the dial"],["6° / min","minute hand"],["½° / min","hour hand"],["5½° / min","minute hand gains on the hour hand"],
["|30H − 5.5M|","angle at H:M"],["360 − θ","when θ is above 180°, or for the reflex angle"],
["60H/11","minutes past H when the hands coincide"],["±90°, −180°","put the sign that keeps M positive"],
["11 · 11 · 22","coincide · opposite · right angle in 12 hours"],["44","right angles (or straight lines) in a day"],
["65 5/11 min","gap between coincidences"],["11:60 − t","mirror image"],["18:30 − t","water image (17:90 when minutes > 30)"],
["720 ÷ x","hours until a clock off by x min/hour is right again"],["n − 1","gaps between n strikes"],["156","strikes in a day (1 to 12, twice)"]]
PAIRS = [
["Angle at 3:30","75°, not 90° — the hour hand has moved 15°"],
["8:00: 240° or 120°","choose the smaller (120°) unless reflex is asked"],
["Straight line vs opposite","44 a day vs 22 a day — straight line includes coinciding"],
["Coincide in 12 hours","11, not 12"],
["Right angles in 12 hours","22, not 24"],
["Mirror vs water","mirror 11:60 − t (left–right); water 18:30 − t (top–bottom)"],
["Water image, minutes < 30","the true reading is one hour less than 18:30 − t"],
["0.11 hours","6.6 minutes, not 11 minutes"],
["6 strikes in 6 s","5 gaps → 1.2 s each, not 1 s"],
["Gains 6 min/h: shows 1 p.m. vs at 1 p.m.","real 12:32 8/11 vs clock 1:30"]]
COVERS = {
 "ang":{"tab":"Angle drill","hideLabel":"Hide angles","note":"Cover the angle and work it out with |30H − 5.5M| in your head.","head":["Time","Working","Angle"],"hide":2,"rows":[]},
 "times":{"tab":"Times drill","hideLabel":"Hide times","note":"Cover the answer: put θ (or −θ) so that M stays positive.","head":["Question","Working","Time"],"hide":2,"rows":[
  ["Coincide, 2–3","M = 120/11","2:10 10/11"],["Coincide, 3–4","M = 180/11","3:16 4/11"],["Opposite, 4–5","5.5M = 300","4:54 6/11"],["Opposite, 7–8","5.5M = 30","7:05 5/11"],
  ["Right angle, 4–5 (1st)","5.5M = 30","4:05 5/11"],["Right angle, 4–5 (2nd)","5.5M = 210","4:38 2/11"],["Coincide, 9–10","M = 540/11","9:49 1/11"]]},
 "img":{"tab":"Image drill","hideLabel":"Hide answers","note":"Cover the answer: mirror 11:60 − t, water 18:30 − t (17:90 when minutes > 30).","head":["Clock","Image","Answer"],"hide":2,"rows":[
  ["3:25","mirror","8:35"],["2:45","mirror","9:15"],["11:40","mirror","12:20"],["12:43","mirror","11:17"],["4:44","water","1:46"],["9:40","water","8:50"],["3:00","water","3:30"],["6:18","water","12:12 (true reading 11:12)"]]}}
def ang(h,m):
    a=abs(30*(h%12)-F(11,2)*m)%360; return min(a,360-a)
for h,m in [(2,30),(3,47),(11,47),(4,20),(3,30),(7,20),(9,40),(12,20),(6,30),(10,15)]:
    a=ang(h,m); raw=30*(h%12)-F(11,2)*m
    COVERS["ang"]["rows"].append([f"{h}:{m:02d}", f"|{30*(h%12)} − {float(F(11,2)*m):g}| = {float(abs(raw)):g}" + (f" → 360 − {float(abs(raw)):g}" if abs(raw)>180 else ""), f"{float(a):g}°"])
FIND = {"tab":"Rule finder","ph":"Search a rule (e.g. mirror, coincide, 720)","head":["Topic","Rule","Lesson","When to use"],"rows":[
["Dial","30° between numbers, 6° per minute-space","L1","Any angle work"],["Minute hand","6° per minute","L1","Angle swept"],["Hour hand","½° per minute, 30° per hour","L1","Angle swept"],
["Second hand","6° per second","L1","Rare"],["Relative speed","5½° per minute","L1","Why 11/2 appears"],["Decimal hours","× 60 → minutes, × 60 → seconds","L1","9.11 h"],
["Angle at H:M","|30H − 5.5M|","L2","Angle between the hands"],["Smaller angle","360 − θ if θ > 180","L2","Default answer"],["Reflex angle","360 − smaller angle","L2","Reflex asked"],
["Time for angle θ","M = (2/11)(30H ∓ θ), keep M positive","L3","At what time"],["Coincide","M = 60H/11","L3","Hands together"],["Opposite","use −180°","L3","Hands opposite"],
["Right angle","±90° (two times an hour)","L3","Perpendicular hands"],["n minutes apart","6n degrees","L3","Minute-spaces apart"],
["Counts in 12 hours","coincide 11, opposite 11, right angle 22, straight line 22","L4","How many times"],["Counts in a day","22, 22, 44, 44","L4","How many times"],
["Coincidence gap","720/11 = 65 5/11 min","L4","Faulty clock"],["Mirror image","11:60 − time","L5","Mirror"],["Water image","18:30 − time (17:90 if minutes > 30)","L5","Water"],
["Next correct time","720 ÷ (gain or loss per hour) hours","L6","Fast/slow clock"],["Real time from faulty clock","shown × 60/(60 ± x)","L6","Clock shows T"],
["Two faulty clocks","720 ÷ (sum of rates)","L6","Same time again"],["Directions","12 N, 3 E, 6 S, 9 W; rotate if told","L7","Hand points south"],["Clock strikes","n strikes → n − 1 gaps","L7","Strike time"]]}
APP = {"key":"clock_workbook_v1","brand":"Clock","sub":"घड़ी · SSC reasoning workbook","eyebrow":"SSC Reasoning",
 "intro":"Seven lessons that cover every clock type SSC asks: hand speeds, the angle at any time, the time for a given angle, how often the hands coincide or meet at right angles, mirror and water images, fast and slow clocks, and directions and clock strikes — all with one formula, θ = |30H − 5.5M|. Built from the Clock one-shot lecture with extra topics SSC also asks. Every answer in the practice bank is computed, not typed.",
 "foot":"Learn the three speeds (6°, ½°, 5½°) and the one formula first, then work through the lessons. Use the drills to build speed and the rule finder to look anything up.",
 "craft":"Most clock questions fall to three moves. (1) One formula: θ = |30H − 5.5M| gives the angle, and solved for M (keeping M positive) gives the time for any angle. (2) Counting: 11 coincidences and 22 right angles in 12 hours. (3) Subtractions: 11:60 for a mirror, 18:30 for water, and 720 ÷ (minutes off per hour) for the next correct time.",
 "heatNote":"Shares are approximate, estimated from recent SSC CHSL, CGL and MTS papers; they show where clock questions usually come from, not exact counts."}

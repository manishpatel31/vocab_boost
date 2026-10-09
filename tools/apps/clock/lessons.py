import os
SVG = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'clocksvg.txt')).read().strip()
L = []
L.append({"id":"L1","heat":2,"title":"Clock basics: how fast the hands move","hi":"घड़ी की मूल बातें · सुइयों की चाल","blocks":[
 {"k":"hot","h":"<b>The base of every clock question.</b> Direct questions ask “angle traced by the minute hand in 2 hours 20 minutes” or “convert 9.11 hours into hours, minutes and seconds”. Everything else in this app uses these three speeds."},
 {"k":"fig","title":"The dial","svg":SVG,"cap":"360° split into 12 parts → 30° between two numbers. At 2:20 the hour hand has moved a little past 2."},
 {"k":"formula","title":"Speeds to remember","rows":[
  ["Between two numbers","360° ÷ 12 = 30°","1 minute space = 6°"],
  ["Minute hand","6° per minute (360° per hour)","5 minutes → 30°"],
  ["Hour hand","½° per minute (30° per hour)","60 minutes → 30°"],
  ["Second hand","6° per second (360° per minute)","—"],
  ["Relative speed (added)","minute hand gains 5½° per minute on the hour hand","= 55 minute-spaces per hour"],
  ["n minutes apart","n × 6°","20 minutes apart = 120°;  10 minutes apart = 60°"]]},
 {"k":"formula","title":"Angle swept and decimal hours","rows":[
  ["Angle swept by the minute hand","6° × minutes","2 h 20 min = 140 min → 840°"],
  ["Angle swept by the hour hand","½° × minutes","140 min → 70°"],
  ["Decimal hours → h m s","multiply the decimal part by 60 for minutes, then the next decimal part by 60 for seconds","9.11 h = 9 h + 6.6 min = 9 h 6 min 36 s"]]},
 {"k":"ex","q":"What angle does the minute hand trace in 2 hours 20 minutes?","steps":["2 hours = 2 full turns = 720°","20 minutes = 20 × 6° = 120°","720 + 120"],"ans":"840°","tip":"The hour hand in the same time: 140 × ½ = 70°."},
 {"k":"ex","q":"Convert 9.11 hours into hours, minutes and seconds.","steps":["0.11 h × 60 = 6.6 min","0.6 min × 60 = 36 s"],"ans":"9 h 6 min 36 s"},
 {"k":"trick","h":"<b>6 and ½:</b> minute hand 6° a minute, hour hand ½° a minute. Their difference 5½° is the number in every formula of L2–L4."},
 {"k":"trap","h":"<b>0.11 hours is not 11 minutes</b> — multiply by 60 (6.6 min). <b>The hour hand moves during the minutes</b>: at 2:20 it is 10° past the 2, not on it."},
 {"k":"link","h":"30H − 5½M in L2 is just “hour hand position − minute hand position” from these speeds."},
 {"k":"q","q":"How many degrees does the hour hand move in 40 minutes?","o":["20°","40°","240°","10°"],"e":"½° × 40 = 20°."}
],"sum":["30° between numbers; 6° per minute-space","Minute hand 6°/min, hour hand ½°/min, second hand 6°/s","Minute hand gains 5½° per minute","n minutes apart = 6n degrees","Decimal hours: × 60 for minutes, × 60 again for seconds"]})

L.append({"id":"L2","heat":3,"title":"Angle between the hands","hi":"सुइयों के बीच का कोण","blocks":[
 {"k":"hot","h":"<b>The most-asked clock type.</b> “What is the angle between the hands at 3:47?”, “the smaller angle at 11:47”, “the reflex angle at 2:30”. One formula, 10 seconds."},
 {"k":"formula","title":"One formula","rows":[
  ["Angle at H:M","θ = |30H − (11/2)M|","H = hour, M = minutes"],
  ["Negative answer","take it as positive","−105° → 105°"],
  ["Above 180°","smaller angle = 360° − θ","210° → 150°"],
  ["Reflex angle asked","must be between 180° and 360°: use 360° − (smaller angle)","60° → reflex 300°"],
  ["Both options given","go with the smaller angle unless reflex is asked","8:00 → 240° or 120° → choose 120°"],
  ["With seconds (added)","θ = |30H − (11/2)M − (11/120)S|","rarely asked"]]},
 {"k":"table","title":"Angles at exact hours","head":["Time","Angle","Time","Angle"],"rows":[["1:00","30°","7:00","150°"],["2:00","60°","8:00","120°"],["3:00","90°","9:00","90°"],["4:00","120°","10:00","60°"],["5:00","150°","11:00","30°"],["6:00","180°","12:00","0°"]]},
 {"k":"ex","q":"Find the angle between the hour and minute hands at 2:30.","steps":["30 × 2 = 60","11 × 30 / 2 = 165","|60 − 165| = 105"],"ans":"105°"},
 {"k":"ex","q":"What is the smaller of the two angles formed by the hands at 3:47?","steps":["30 × 3 = 90","47 × 5.5 = 258.5","|90 − 258.5| = 168.5 (already below 180)"],"ans":"168.5°"},
 {"k":"ex","q":"Find the angle between the hands at 11:47.","steps":["30 × 11 = 330","47 × 5.5 = 258.5","330 − 258.5 = 71.5"],"ans":"71.5°"},
 {"k":"ex","q":"What is the angle between the two hands at 8 o’clock?","steps":["30 × 8 = 240 → larger angle","Smaller angle = 360 − 240"],"ans":"120°"},
 {"k":"trick","h":"<b>Multiply M by 5.5 instead of 11/2:</b> 47 × 5.5 = 235 + 23.5 = 258.5.<br><b>Treat 12 as 0:</b> 12:20 → 30 × 0 − 110 → 110°."},
 {"k":"trap","h":"<b>Don’t forget the hour hand moved</b>: at 3:30 the angle is 75°, not 90°. <b>A reflex angle is always above 180°</b>; if your answer is 60° the reflex angle is 300°."},
 {"k":"link","h":"Turn the formula around (fix θ, find M) and you get every “at what time” question in L3."},
 {"k":"q","q":"The angle between the hands of a clock at 4:20 is:","o":["10°","0°","20°","5°"],"e":"|120 − 110| = 10°."}
],"sum":["θ = |30H − 5.5M|","Negative → positive; above 180° → 360° − θ","Reflex angle: between 180° and 360°","Exact hours: 30° × hour (smaller angle ≤ 180°)"]})

L.append({"id":"L3","heat":2,"title":"At what time? Coinciding, opposite, right angle","hi":"किस समय? साथ, विपरीत, समकोण","blocks":[
 {"k":"hot","h":"<b>Asked in CGL and CHSL:</b> “At what time between 2 and 3 will the hands coincide?”, “between 4 and 5 when are they opposite?”, “when are they at right angles?”. Same formula, solved for M."},
 {"k":"formula","title":"Solve the same formula for M","rows":[
  ["Set up","θ = 30H − (11/2)M with H = the starting hour","M = (2/11)(30H − θ)"],
  ["Keep M positive","if M comes out negative, use −θ (or 360° − θ) instead of θ","the answer must lie between H:00 and H:60"],
  ["Coincide (0°)","M = (2/11) × 30H = 60H/11","2 → 10 10/11 min"],
  ["Opposite (180°)","use θ = −180°: M = (2/11)(30H + 180)","4 → 54 6/11 min"],
  ["Right angle (90°)","two answers: θ = +90° and θ = −90°","4 → 5 5/11 and 38 2/11 min"],
  ["n minutes apart","convert to degrees first: 6n","20 minutes apart = 120°"]]},
 {"k":"table","title":"Ready answers (added)","head":["Between","Coincide","Opposite","Right angles"],"rows":[
  ["2 and 3","2:10 10/11","2:43 7/11","2:27 3/11 (the other is 3:00)"],["3 and 4","3:16 4/11","3:49 1/11","3:00, 3:32 8/11"],["4 and 5","4:21 9/11","4:54 6/11","4:05 5/11, 4:38 2/11"],["7 and 8","7:38 2/11","7:05 5/11","7:21 9/11, 7:54 6/11"]]},
 {"k":"ex","q":"At what time between 2 and 3 o’clock will the hands of a clock coincide?","steps":["0 = 30 × 2 − (11/2)M → (11/2)M = 60","M = 120/11 = 10 10/11"],"ans":"2:10 10/11"},
 {"k":"ex","q":"At what time between 4 and 5 o’clock will the hands be opposite (180°)?","steps":["θ = +180 gives M negative, so use −180","−180 = 120 − (11/2)M → (11/2)M = 300","M = 600/11 = 54 6/11"],"ans":"4:54 6/11"},
 {"k":"ex","q":"At what times between 4 and 5 o’clock will the hands be at right angles?","steps":["+90: 90 = 120 − 5.5M → M = 60/11 = 5 5/11","−90: −90 = 120 − 5.5M → M = 420/11 = 38 2/11"],"ans":"4:05 5/11 and 4:38 2/11"},
 {"k":"trick","h":"<b>Only one formula:</b> put θ or −θ so that M is positive and below 60 — no separate formulas for “coincide”, “opposite”, “right angle”.<br><b>Coinciding times</b> are H × 5 5/11 minutes past H: 1:05 5/11, 2:10 10/11, 3:16 4/11 …"},
 {"k":"trap","h":"<b>Right angles occur twice</b> in most hours — check which one the options list. <b>Straight line</b> means coinciding <i>or</i> opposite. <b>Between 2 and 3</b>, the second right angle falls at 3:00 itself."},
 {"k":"link","h":"Counting how many such moments a day has is L4."},
 {"k":"q","q":"At what time between 3 and 4 o’clock do the hands coincide?","o":["3:16 4/11","3:15","3:17 3/11","3:18 2/11"],"e":"M = 60 × 3/11 = 180/11 = 16 4/11."}
],"sum":["M = (2/11)(30H ∓ θ): choose the sign that makes 0 ≤ M < 60","Coincide: M = 60H/11 (H × 5 5/11)","Opposite: use −180°; right angle: ±90° (two answers)","n minutes apart = 6n degrees"]})

L.append({"id":"L4","heat":2,"title":"How often? Coincide, opposite, right angles","hi":"कितनी बार? साथ, विपरीत, समकोण","blocks":[
 {"k":"hot","h":"<b>Quick 10-second marks:</b> “How many times in a day are the hands at right angles?”, “in 48 hours in opposite directions?”, “in a week coincide?”."},
 {"k":"table","title":"The counts","head":["Event","In 1 hour","In 12 hours","In 24 hours"],"rows":[
  ["Coincide (0°)","1","11","22"],["Opposite (180°)","1","11","22"],["Straight line (0° or 180°)","2","22","44"],["Right angle (90°)","2","22","44"],["Any other angle (e.g. 60°)","2","22","44"]]},
 {"k":"formula","title":"Why one or two less","rows":[
  ["Coincide","once an hour, but between 11 and 1 only once (at 12:00)","12 − 1 = 11 in 12 hours"],
  ["Right angle","twice an hour, but between 2 and 4 and between 8 and 10 only three times each (3:00 and 9:00 are shared)","24 − 2 = 22 in 12 hours"],
  ["Gap between coincidences (added)","720/11 = 65 5/11 minutes","the hands meet every 65 5/11 min"],
  ["Gap between straight-line positions (added)","360/11 = 32 8/11 minutes","—"]]},
 {"k":"ex","q":"How many times in 48 hours are the hands of a correct clock in opposite directions?","steps":["11 times in 12 hours","48 hours = 4 × 12 → 44"],"ans":"44"},
 {"k":"ex","q":"How many times in 48 hours are the hands in a straight line?","steps":["Straight line = coincide (11) + opposite (11) = 22 in 12 hours","× 4"],"ans":"88"},
 {"k":"ex","q":"How many times in a week do the hands coincide?","steps":["22 times a day","× 7"],"ans":"154"},
 {"k":"ex","q":"How many times in a week are the hands at right angles?","steps":["44 times a day","× 7"],"ans":"308"},
 {"k":"trick","h":"<b>11 · 22 · 44:</b> coincide and opposite 11 in 12 hours; right angle and straight line 22 in 12 hours; double for a day."},
 {"k":"trap","h":"<b>“Straight line” ≠ “opposite”</b> — straight line includes coinciding: 44 a day, not 22. <b>A day is 24 hours</b>, so multiply the 12-hour count by 2."},
 {"k":"link","h":"The 65 5/11-minute gap is the key to faulty clocks in L6: if the hands of a clock meet every 64 minutes, the clock is gaining."},
 {"k":"q","q":"How many times are the hands of a clock at right angles in a day?","o":["44","48","22","24"],"e":"22 in 12 hours → 44 in 24 hours."}
],"sum":["12 hours: coincide 11, opposite 11, right angle 22, straight line 22","24 hours: 22, 22, 44, 44","Hands meet every 65 5/11 minutes","Straight line = coincide + opposite"]})

L.append({"id":"L5","heat":2,"title":"Mirror and water images","hi":"दर्पण और जल प्रतिबिंब","blocks":[
 {"k":"hot","h":"<b>Mirror images of a clock are asked often</b> (“the mirror shows 3:25; what is the actual time?”); water images rarely. Both are one subtraction."},
 {"k":"formula","title":"Mirror image (left–right)","rows":[
  ["Rule","mirror time = 11:60 − actual time (and actual = 11:60 − mirror)","2:45 → 9:15;  3:25 → 8:35"],
  ["12:xx","treat 12 as 0, or subtract from 23:60","12:43 → 11:60 − 0:43 = 11:17"],
  ["Exact","the mirror image always shows a real time","—"]]},
 {"k":"formula","title":"Water image (top–bottom)","rows":[
  ["Minutes more than 30","water time = 17:90 − actual time (same as 18:30 −)","4:44 → 17:90 − 4:44 = 13:46 → 1:46"],
  ["Minutes less than 30","exam rule: 18:30 − actual time","6:18 → 12:12"],
  ["… but","with minutes below 30 the reflected hour hand sits just <i>behind</i> that hour, so the clock really reads one hour less","6:18 → really 11:12 — if 12:12 is not in the options, take 11:12"],
  ["Note","a water image is never an exact real time (the hour hand is in the wrong place for the minutes)","so choose whichever of the two the options give"]]},
 {"k":"ex","q":"In a 12-hour clock the mirror image shows 3:25. What is the actual time?","steps":["11:60 − 3:25"],"ans":"8:35"},
 {"k":"ex","q":"The mirror image of a clock shows 11:40. What is the actual time?","steps":["11:60 − 11:40 = 0:20"],"ans":"12:20"},
 {"k":"ex","q":"What is the water image of 4:44?","steps":["Minutes above 30 → 17:90 − 4:44 = 13:46","12-hour clock → 1:46"],"ans":"1:46"},
 {"k":"ex","q":"What is the water image of 6:18? (Options: 11:12, 6:42, 12:48, 5:42)","steps":["18:30 − 6:18 = 12:12 — not in the options","Minutes below 30 → the clock reads one hour less: 11:12"],"ans":"11:12"},
 {"k":"trick","h":"<b>Mirror: 11:60. Water: 18:30 (written 17:90 when the minutes are above 30).</b> Subtract hours from hours and minutes from minutes."},
 {"k":"trap","h":"<b>Don’t mix them up:</b> a mirror flips left–right (12 stays on top), water flips top–bottom (12 goes to the bottom). <b>12:xx in a mirror</b>: subtract from 23:60 or treat 12 as 0."},
 {"k":"link","h":"The same left–right and top–bottom flips are used in the mirror and water image chapters of non-verbal reasoning."},
 {"k":"q","q":"The time shown in a mirror is 2:45. The actual time is:","o":["9:15","9:45","10:15","8:15"],"e":"11:60 − 2:45 = 9:15."}
],"sum":["Mirror: 11:60 − time (exact both ways)","12:xx: treat 12 as 0 or use 23:60","Water: 18:30 − time; minutes above 30 → 17:90 − time","Water, minutes below 30: true reading is one hour less — pick the one in the options"]})

L.append({"id":"L6","heat":2,"title":"Fast and slow clocks","hi":"तेज़ और धीमी घड़ियाँ","blocks":[
 {"k":"hot","h":"<b>Asked in CGL, CHSL and railway papers:</b> “A clock loses 5 minutes every hour. Set right at 6 a.m. on Monday, when will it next show the correct time?”, “a watch gains 6 minutes an hour…”."},
 {"k":"formula","title":"Rules","rows":[
  ["Next correct time","720 ÷ (minutes gained or lost per hour) hours","loses 5 min/h → 144 h = 6 days"],
  ["Time shown after t real hours","real time ± (rate × t)","slow 5 min/h, set 10 a.m. → at 4 p.m. shows 3:30"],
  ["Actual time when the faulty clock shows T (added)","clock runs (60 ± x) minutes per 60 real minutes → real elapsed = clock elapsed × 60 ÷ (60 ± x)","gains 6 min/h, shows 5 h → real 5 × 60/66 h = 4 h 32 8/11 min"],
  ["Two clocks, one fast one slow (added)","they show the same time again after 720 ÷ (sum of rates) hours","+2 and −3 min/h → 144 h"],
  ["Hands meet every k minutes (added)","normal gap 65 5/11 min; k smaller → clock gains (65 5/11 − k) per k minutes","k = 64 → gains 32 8/11 min a day"]]},
 {"k":"ex","q":"A clock loses 5 minutes every hour. It was set right at 6 a.m. on Monday. When will it next show the correct time?","steps":["It must lose a full 12 hours = 720 minutes","720 ÷ 5 = 144 hours = 6 days","Monday + 6 days = Sunday, at 6 a.m."],"ans":"Sunday, 6 a.m."},
 {"k":"ex","q":"A clock gains 6 minutes every hour. It is set right at 8 a.m. What does it show when the actual time is 1 p.m.?","steps":["5 real hours × 6 minutes = 30 minutes ahead"],"ans":"1:30 p.m."},
 {"k":"ex","q":"A clock is 5 minutes slow every hour. It was set right at 10 a.m. on Monday. What time does it show at 4 p.m. the same day?","steps":["6 hours × 5 minutes = 30 minutes behind","4:00 − 0:30"],"ans":"3:30 p.m."},
 {"k":"ex","q":"The hands of a clock coincide every 64 minutes of correct time. How much does the clock gain or lose in a day?","steps":["Correct clock: every 720/11 = 65 5/11 min","This clock does the same in 64 min → it gains 65 5/11 − 64 = 16/11 min every 64 min","In a day: 16/11 × 1440/64 = 360/11 min"],"ans":"Gains 32 8/11 min"},
 {"k":"trick","h":"<b>720 is the magic number</b> — an analogue clock shows the same face every 12 hours, so a faulty clock must drift a full 720 minutes to look right again."},
 {"k":"trap","h":"<b>Gains per hour of real time vs per hour on the clock</b> — exam questions mean real time unless they say otherwise. <b>“When does the fast clock show 1 p.m.?”</b> is not “what does it show at 1 p.m.?” — the first needs the ratio rule (real time is earlier)."},
 {"k":"link","h":"The 65 5/11-minute gap comes from L4; day-of-week counting (Monday + 6 days) is the calendar app’s n-days-later rule."},
 {"k":"q","q":"A watch gains 4 minutes every hour. It is set right at noon. What will it show at 3 p.m. the same day?","o":["3:12 p.m.","2:48 p.m.","3:04 p.m.","3:20 p.m."],"e":"3 hours × 4 = 12 minutes ahead."}
],"sum":["Next correct time = 720 ÷ (gain or loss per hour) hours","After t hours a clock is rate × t minutes off","Faulty clock shows T → real elapsed = shown × 60 ÷ (60 ± x)","Normal coincidence gap 65 5/11 min; shorter → fast clock"]})

L.append({"id":"L7","heat":1,"title":"Directions on a clock & clock strikes","hi":"घड़ी में दिशाएँ · घंटे बजना","blocks":[
 {"k":"hot","h":"<b>Mixed with the direction chapter:</b> “At quarter to six the hour hand points south. Which way does the minute hand point?”. Clock-strike puzzles (added) are common in SSC and railway papers."},
 {"k":"formula","title":"Directions","rows":[
  ["Usual picture","12 → North, 3 → East, 6 → South, 9 → West","unless the question says otherwise"],
  ["If the hour hand points to a direction","turn the whole dial so that the hour number sits there, then read the minute hand","5:45, hour hand (near 6) South → minute hand at 9 → West"],
  ["Quarter to / past","quarter to six = 5:45; quarter past six = 6:15; half past six = 6:30","—"]]},
 {"k":"formula","title":"Clock strikes (added)","rows":[
  ["Strikes and gaps","n strikes have n − 1 gaps; time counts only the gaps","6 strikes in 5 s → 1 s per gap → 12 strikes take 11 s"],
  ["Strikes in a day","1 + 2 + … + 12 = 78 in 12 hours → 156 a day","plus one strike every half hour → 156 + 24 = 180"]]},
 {"k":"ex","q":"At quarter to six, the hour hand points south. In which direction does the minute hand point?","steps":["Quarter to six = 5:45: the hour hand is close to 6, the minute hand on 9","6 points south → 12 north, 9 west"],"ans":"West"},
 {"k":"ex","q":"A wrist watch shows 7:30 and the hour hand points south-west. Where will the minute hand point 15 minutes later?","steps":["The dial is in the usual position (7:30 hour hand ≈ south-west)","At 7:45 the minute hand is on 9"],"ans":"West"},
 {"k":"ex","q":"A clock takes 5 seconds to strike 6. How long does it take to strike 12?","steps":["6 strikes → 5 gaps → 1 s per gap","12 strikes → 11 gaps"],"ans":"11 seconds"},
 {"k":"trick","h":"<b>Rotate, don’t redraw:</b> find which number the given hand is on, put that number at the given direction, and read the other hand.<br><b>Strikes:</b> count gaps, not strikes."},
 {"k":"trap","h":"<b>6 strikes in 6 seconds is not 1 s per strike</b> — there are 5 gaps, so 1.2 s each. <b>Quarter to six is 5:45</b>, not 6:15."},
 {"k":"link","h":"Directions in reasoning use the same 8-point compass: N, NE, E, SE, S, SW, W, NW."},
 {"k":"q","q":"A clock takes 7 seconds to strike 8. How long will it take to strike 4?","o":["3 seconds","3.5 seconds","4 seconds","2 seconds"],"e":"8 strikes → 7 gaps → 1 s each; 4 strikes → 3 gaps → 3 s."}
],"sum":["12 N, 3 E, 6 S, 9 W in the usual picture","Rotate the dial to match the given direction","n strikes = n − 1 gaps","156 strikes a day (180 with half-hour strikes)"]})

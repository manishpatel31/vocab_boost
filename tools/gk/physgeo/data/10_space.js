/* Part 1 · Y1 universe and solar system (short — the Space app goes deeper); Y2 Earth's motions, latitudes, longitudes, time and eclipses. */
const Y1 = [
  ["is the largest","Jupiter","More than 1,300 Earths could fit inside it.","p"],
  ["is the smallest","Mercury","Only a little bigger than our Moon.","p"],
  ["is closest to the Sun","Mercury","About 58 million km from the Sun.","p"],
  ["is the hottest","Venus","Thick carbon dioxide air traps heat — hotter than Mercury.","p"],
  ["is called the Red Planet","Mars","Iron oxide (rust) in its soil makes it red.","p"],
  ["is called Earth's twin","Venus","Almost the same size and mass as Earth.","p"],
  ["is the brightest seen from Earth","Venus","Called the Morning Star and the Evening Star.","p"],
  ["has the most famous rings","Saturn","Rings of ice and rock.","p"],
  ["is less dense than water","Saturn","It would float in a big enough bath.",""],
  ["spins on its side","Uranus","Its axis is tilted about 98°.","p"],
  ["is farthest from the Sun","Neptune","Since Pluto became a dwarf planet in 2006.","p"],
  ["spins fastest (shortest day)","Jupiter","A day of under 10 hours.",""],
  ["has the longest day","Venus","Its day (243 Earth days) is longer than its year (225 days).","p"],
  ["has the shortest year","Mercury","Goes round the Sun in 88 days.",""],
  ["is the densest","Earth","Earth is the densest planet of the Solar System.","p"],
  ["has Olympus Mons, the highest volcano","Mars","About 22 km high — two and a half times Everest.",""],
  ["has the Great Red Spot","Jupiter","A giant storm bigger than Earth.",""],
  ["has the most known moons (as of 2025)","Saturn","274 after 128 new moons were announced in March 2025.",""]
];
const Y1M = [
  ["Ganymede","Jupiter","The largest moon in the Solar System — bigger than Mercury.","p"],
  ["Io","Jupiter","The most volcanic body in the Solar System.",""],
  ["Europa","Jupiter","Ice crust with an ocean under it.",""],
  ["Titan","Saturn","Second-largest moon; the only moon with thick air.","p"],
  ["Enceladus","Saturn","Shoots water jets from its south pole.",""],
  ["Phobos","Mars","The larger of Mars's two moons.","p"],
  ["Deimos","Mars","The smaller of Mars's two moons.",""],
  ["Triton","Neptune","Goes round its planet backwards (retrograde).",""],
  ["Titania","Uranus","Uranus's moons are named after characters from Shakespeare and Pope.",""],
  ["Charon","Pluto","Pluto is a dwarf planet; Charon is half its size.",""]
];
const Y2 = [
  ["Summer solstice (longest day in the northern half)","21 June","The Sun is overhead on the Tropic of Cancer.","p"],
  ["Winter solstice (shortest day in the northern half)","22 December","The Sun is overhead on the Tropic of Capricorn.","p"],
  ["Spring (vernal) equinox","21 March","Sun overhead on the Equator; day = night everywhere.","p"],
  ["Autumn equinox","23 September","Sun overhead on the Equator again.","p"],
  ["Perihelion (Earth nearest the Sun)","About 3 January","Earth is nearest the Sun in the northern winter!","p"],
  ["Aphelion (Earth farthest from the Sun)","About 4 July","",""]
];
const Y2L = [
  ["Equator","0° latitude","The longest parallel; divides the north and south halves.","p"],
  ["Tropic of Cancer","23½° N","Passes through eight Indian states.","p"],
  ["Tropic of Capricorn","23½° S","Does not pass through India.",""],
  ["Arctic Circle","66½° N","North of it: at least one 24-hour day and night each year.","p"],
  ["Antarctic Circle","66½° S","",""],
  ["Prime Meridian (Greenwich)","0° longitude","Passes through Greenwich, London; base of GMT.","p"],
  ["International Date Line","180° longitude","Bends to avoid splitting island groups and countries.","p"],
  ["Indian Standard Meridian","82½° E","Passes near Mirzapur (UP); IST = GMT + 5:30.","p"]
];
const Y2E = [
  ["Solar eclipse","The Moon comes between the Sun and the Earth","Happens only on a new moon (amavasya).","p"],
  ["Lunar eclipse","The Earth comes between the Sun and the Moon","Happens only on a full moon (purnima).","p"],
  ["Umbra","The dark central shadow","Inside it the eclipse is total.",""],
  ["Penumbra","The lighter outer shadow","Inside it the eclipse is partial.",""],
  ["Annular eclipse","The Moon is too far to cover the Sun — a ring of light is left","Often called a 'ring of fire' eclipse.","p"],
  ["Syzygy","The Sun, Earth and Moon in a straight line","Needed for eclipses and spring tides.",""]
];

LESSONS.push(
{id:"Y1", heat:2, title:"The universe and the Solar System", hi:"ब्रह्मांड और सौरमंडल", blocks:[
  {k:"hot", h:"Asked again and again: the <b>planet records</b> (largest Jupiter, smallest Mercury, hottest Venus, Red Planet Mars, farthest Neptune), <b>which moon belongs to which planet</b> (Ganymede, Titan, Phobos), and <b>Pluto's demotion</b> in 2006."},
  {k:"story", h:"<p>The universe began with the <b>Big Bang</b> about <b>13.8 billion years</b> ago. Our Sun is one of billions of stars in the <b>Milky Way</b>, a spiral galaxy. Around the Sun go <b>eight planets</b>: four small rocky ones — <b>Mercury, Venus, Earth, Mars</b> — then, beyond the asteroid belt, four giants — <b>Jupiter, Saturn, Uranus, Neptune</b>.</p><p>In <b>2006</b> the International Astronomical Union (meeting in Prague) made <b>Pluto</b> a <b>dwarf planet</b>. Earth formed about <b>4.6 billion years</b> ago. Sunlight takes about <b>8 minutes 20 seconds</b> to reach us; moonlight about 1.3 seconds.</p>", key:"My Very Educated Mother Just Served Us Nachos — Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune."},
  {k:"facts", title:"Quick numbers", rows:[
    ["Age of the universe","About 13.8 billion years"],
    ["Age of the Earth","About 4.6 billion years"],
    ["Sunlight to Earth","About 8 minutes 20 seconds"],
    ["Earth–Moon distance","About 3,84,400 km"],
    ["Nearest star after the Sun","Proxima Centauri, about 4.2 light-years away"],
    ["Asteroid belt","Between Mars and Jupiter; Ceres is the largest object in it"],
    ["Halley's Comet","Returns about every 76 years — last seen 1986, next in 2061"],
    ["Light-year","A unit of distance (not time): how far light travels in a year"]
  ]},
  {k:"table", title:"Planet records", head:["Which planet…","Planet","Note"], rows: Y1.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Famous moons", head:["Moon","Planet","Note"], rows: Y1M.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Order of the planets: <b>“My Very Educated Mother Just Served Us Nachos.”</b> Inner rocky four = <b>MVEM</b>; outer giants = <b>JSUN</b> (sounds like 'Sun' — they are the big ones)."},
  {k:"trap", h:"The <b>hottest</b> planet is <b>Venus</b>, not Mercury, even though Mercury is closer. <b>Mercury and Venus have no moons</b>. A <b>light-year measures distance</b>, not time. The <b>largest moon</b> is Ganymede (Jupiter), not Titan."}
], sum:["Eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.","Largest Jupiter, smallest Mercury, hottest Venus, densest Earth, farthest Neptune.","Venus spins backwards and has a day longer than its year; Uranus spins on its side.","Largest moon Ganymede (Jupiter); Titan (Saturn) has thick air; Phobos and Deimos orbit Mars.","Pluto became a dwarf planet in 2006; sunlight reaches Earth in about 8 minutes 20 seconds."]},

{id:"Y2", heat:3, title:"Earth's motions, latitude, longitude, time and eclipses", hi:"पृथ्वी की गतियाँ, अक्षांश-देशांतर, समय और ग्रहण", blocks:[
  {k:"hot", h:"Favourites: <b>rotation vs revolution</b>, the <b>solstice and equinox dates</b>, <b>1° longitude = 4 minutes</b>, <b>IST meridian 82½° E</b> (near Mirzapur), the <b>International Date Line</b> (180°), and <b>when eclipses happen</b>."},
  {k:"story", h:"<p>The Earth does two things at once. It <b>rotates</b> on its axis from <b>west to east</b> once in about 24 hours — that gives <b>day and night</b> and makes the Sun seem to rise in the east. It also <b>revolves</b> round the Sun in about <b>365¼ days</b> — the extra quarter day adds up to a <b>leap year</b> every fourth year. Because the axis is <b>tilted 23½°</b>, the Sun's direct rays move between the two tropics, which gives us <b>seasons</b>.</p><p>Lines of <b>latitude</b> run east–west and measure distance from the Equator; lines of <b>longitude</b> (meridians) run pole to pole and measure time. The Earth turns 360° in 24 hours, so <b>15° = 1 hour</b> and <b>1° = 4 minutes</b>. India keeps one time, set by <b>82½° E</b>: <b>IST = GMT + 5 h 30 min</b>. On the far side of the world the <b>International Date Line</b> (about 180°) is where the date changes.</p>", key:"Rotation → day and night; revolution + tilt → seasons; 15° = 1 hour; IST = GMT + 5:30."},
  {k:"facts", title:"Earth's motions and time", rows:[
    ["Rotation","About 24 hours (23 h 56 min against the stars), west to east"],
    ["Revolution","About 365¼ days — hence a leap year every 4 years"],
    ["Tilt of the axis","23½° from the vertical (66½° to the plane of its orbit)"],
    ["Circle of illumination","The line that divides day from night"],
    ["Time and longitude","15° = 1 hour; 1° = 4 minutes"],
    ["Indian Standard Time","82½° E (near Mirzapur, UP) — GMT + 5 h 30 min"],
    ["Arunachal vs Gujarat","About 30° of longitude apart — about 2 hours of Sun time"],
    ["Crossing the Date Line","Going west (America → Asia): add a day. Going east (Asia → America): repeat a day"]
  ]},
  {k:"table", title:"Solstices, equinoxes and the Earth's orbit", head:["Event","Date","Note"], rows: Y2.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Important lines", head:["Line","Where","Note"], rows: Y2L.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Eclipse words", head:["Term","Meaning","Note"], rows: Y2E.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“SoLar = Lunar sandwich”</b>: in a <b>So</b>lar eclipse the <b>M</b>oon is in the middle (S-M-E); in a <b>Lu</b>nar eclipse the <b>E</b>arth is in the middle (S-E-M). Solar → <b>new</b> moon; lunar → <b>full</b> moon."},
  {k:"trap", h:"Earth is <b>nearest the Sun in January</b> (perihelion) — seasons come from the <b>tilt</b>, not the distance. Latitude lines are <b>parallels</b>; longitude lines are <b>meridians</b>. IST is <b>ahead</b> of GMT (+5:30), not behind."}
], sum:["Rotation (west to east, about 24 h) gives day and night; revolution (365¼ days) plus the 23½° tilt gives seasons.","Solstices 21 June and 22 December; equinoxes 21 March and 23 September.","15° of longitude = 1 hour; 1° = 4 minutes; IST is set at 82½° E, GMT + 5:30.","Tropic of Cancer 23½° N, Arctic Circle 66½° N; Prime Meridian 0°, International Date Line about 180°.","A solar eclipse comes on a new moon (Moon in the middle); a lunar eclipse on a full moon (Earth in the middle)."]}
);

pairQs("Y1", Y1, { q: t => `Which planet ${t}?`, rq: a => `Which is true of ${a}?` });
pairQs("Y1", Y1M, { q: t => `${t} is a moon of:`, rq: a => `Which of these is a moon of ${a}?`, extra: ["Venus"] });
pairQs("Y2", Y2, { q: t => `${t} falls on:`, rq: a => `Which of these falls on ${a}?` });
pairQs("Y2", Y2L, { q: t => `The ${t} lies at:`, rq: a => `Which line lies at ${a}?` });
pairQs("Y2", Y2E, { q: t => `Which describes ${t === "Syzygy" ? "syzygy" : "a" + (/^[AEIOU]/.test(t) ? "n " : " ") + t.toLowerCase()}?`, rq: a => `“${a}” — this describes:` });

QB.push(
["Y1","In which year was Pluto declared a dwarf planet?",["2006","2001","2010","1996"],"By the International Astronomical Union at Prague.","p"],
["Y1","Which planets have no moons?",["Mercury and Venus","Mars and Venus","Mercury and Mars","Uranus and Neptune"],"Every other planet has at least one moon.","p"],
["Y1","Sunlight takes about how long to reach the Earth?",["8 minutes 20 seconds","1.3 seconds","8 seconds","1 hour"],"About 150 million km at 3 lakh km per second.","p"],
["Y1","The asteroid belt lies between:",["Mars and Jupiter","Earth and Mars","Jupiter and Saturn","Venus and Earth"],"Ceres, a dwarf planet, is its largest member.","p"],
["Y1","A light-year is a unit of:",["Distance","Time","Speed","Brightness"],"About 9.46 lakh crore km.","p"],
["Y1","Our galaxy is called the:",["Milky Way","Andromeda","Magellanic Cloud","Triangulum"],"A spiral galaxy; Andromeda is the nearest large galaxy.","p"],
["Y1","Halley's Comet will next be seen from Earth in about:",["2061","2036","2048","2086"],"It returns about every 76 years; last seen 1986.",""],
["Y2","The Earth rotates on its axis from:",["West to east","East to west","North to south","South to north"],"So the Sun seems to rise in the east.","p"],
["Y2","Seasons on Earth are caused mainly by:",["The tilt of the Earth's axis and its revolution","The Earth's rotation","The changing distance from the Sun","The Moon's pull"],"Earth is in fact nearest the Sun in January.","p"],
["Y2","One degree of longitude equals how much time?",["4 minutes","1 minute","15 minutes","1 hour"],"360° in 24 hours → 15° per hour → 4 minutes per degree.","p"],
["Y2","Indian Standard Time is ahead of GMT by:",["5 hours 30 minutes","4 hours 30 minutes","6 hours","5 hours"],"Set by 82½° E.","p"],
["Y2","The Indian Standard Meridian passes near which town?",["Mirzapur","Allahabad","Varanasi","Jabalpur"],"In Uttar Pradesh.","p"],
["Y2","A traveller crossing the International Date Line from west to east (Asia to America) will:",["Repeat the same date","Skip a day","Gain an hour","Lose an hour"],"Going east, you go back one day.","p"],
["Y2","A solar eclipse can happen only on:",["A new moon day","A full moon day","A quarter moon day","Any day"],"The Moon must be between the Sun and the Earth.","p"],
["Y2","Why is a leap year needed?",["The Earth takes about 365¼ days to go round the Sun","The Earth's rotation is slowing","The Moon's orbit takes 29½ days","The Earth's axis is tilted"],"Four quarter-days make one extra day — 29 February.",""],
["Y2","How many Indian states does the Tropic of Cancer pass through?",["8","6","7","9"],"Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram.","p"]
);

LASTMOMENT.push(
{t:"Planet records", era:["pg"], rows:[["Largest","Jupiter"],["Smallest, nearest Sun","Mercury"],["Hottest, brightest","Venus"],["Red Planet","Mars"],["Densest","Earth"],["Rings, floats","Saturn"],["Spins on its side","Uranus"],["Farthest","Neptune"]]},
{t:"Earth and time", era:["pg"], rows:[["Solstices","21 June, 22 Dec"],["Equinoxes","21 Mar, 23 Sep"],["Perihelion","3 Jan"],["Aphelion","4 July"],["1° longitude","4 minutes"],["IST","82½° E, GMT + 5:30"],["Date Line","180°"],["Tilt","23½°"]]}
);
TILES.push(["2006","Pluto made a dwarf planet","pg"],["8","Planets","pg"],["23½°","Earth's tilt","pg"],["82½° E","Indian Standard Meridian","pg"],["4 min","Per degree of longitude","pg"]);

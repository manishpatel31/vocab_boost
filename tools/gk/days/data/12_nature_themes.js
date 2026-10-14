/* Part 3 · D8 environment and nature days; D9 days with moving dates, international years, decades and recent themes. */
const D8 = [
  ["World Wetlands Day","2 February","The Ramsar Convention was signed on 2 February 1971.","p"],
  ["World Wildlife Day","3 March","CITES was signed on 3 March 1973.","p"],
  ["World Sparrow Day","20 March","",""],
  ["International Day of Forests","21 March","","p"],
  ["World Water Day","22 March","","p"],
  ["World Meteorological Day","23 March","The WMO came into being in 1950.",""],
  ["International Day of Zero Waste","30 March","Observed since 2023.",""],
  ["Earth Day","22 April","First held in 1970.","p"],
  ["World Bee Day","20 May","",""],
  ["International Day for Biological Diversity","22 May","","p"],
  ["World Environment Day","5 June","Set up after the 1972 Stockholm Conference; led by UNEP.","p"],
  ["World Oceans Day","8 June","",""],
  ["World Day to Combat Desertification and Drought","17 June","",""],
  ["International Day for the Conservation of the Mangrove Ecosystem","26 July","",""],
  ["World Nature Conservation Day","28 July","","p|SSC MTS 2020 · Oct 2021"],
  ["International Tiger Day","29 July","Agreed at the St Petersburg Tiger Summit, 2010.","p"],
  ["World Lion Day","10 August","",""],
  ["World Elephant Day","12 August","",""],
  ["International Day of Clean Air for Blue Skies","7 September","",""],
  ["World Ozone Day","16 September","The Montreal Protocol was signed on 16 September 1987.","p"],
  ["World Rhino Day","22 September","",""],
  ["World Animal Day","4 October","Feast day of St Francis of Assisi.",""],
  ["International Day for Disaster Risk Reduction","13 October","",""],
  ["International Snow Leopard Day","23 October","",""],
  ["World Soil Day","5 December","",""],
  ["International Mountain Day","11 December","",""]
];
const D9V = [
  ["Mother's Day","Second Sunday of May","",""],
  ["Father's Day","Third Sunday of June","",""],
  ["Friendship Day (in India)","First Sunday of August","The UN's International Day of Friendship is 30 July.",""],
  ["World Egg Day","Second Friday of October","",""],
  ["Earth Hour","Last Saturday of March","Lights off for one hour, 8:30–9:30 pm.",""],
  ["World Habitat Day","First Monday of October","",""],
  ["World Sight Day","Second Thursday of October","",""],
  ["World Asthma Day","First Tuesday of May","",""],
  ["NCC Day","Fourth Sunday of November","",""]
];
const D9Y = [
  ["International Year of Millets","2023","Proposed by India; millets are 'Shree Anna'.","p"],
  ["International Year of Camelids","2024","",""],
  ["International Year of Quantum Science and Technology","2025","A century of quantum mechanics.",""],
  ["International Year of Glaciers' Preservation","2025","",""],
  ["International Year of Rangelands and Pastoralists","2026","",""],
  ["International Year of the Woman Farmer","2026","",""]
];
const D9D = [
  ["UN Decade of Ocean Science for Sustainable Development","2021–2030",""],
  ["UN Decade on Ecosystem Restoration","2021–2030",""],
  ["Decade of Healthy Ageing","2021–2030",""],
  ["International Decade of Indigenous Languages","2022–2032",""],
  ["UN Decade of Family Farming","2019–2028",""],
  ["International Decade for Action 'Water for Sustainable Development'","2018–2028",""]
];

LESSONS.push(
{id:"D8", heat:3, title:"Environment and nature days", hi:"पर्यावरण और प्रकृति दिवस", blocks:[
  {k:"hot", h:"Very common: <b>World Environment Day</b> (5 Jun), <b>Earth Day</b> (22 Apr), <b>World Water Day</b> (22 Mar), <b>World Wetlands Day</b> (2 Feb), <b>World Wildlife Day</b> (3 Mar), <b>World Ozone Day</b> (16 Sep), <b>International Tiger Day</b> (29 Jul) and <b>Biodiversity Day</b> (22 May)."},
  {k:"story", h:"<p>Nature days often mark the signing of a treaty. <b>World Wetlands Day</b> (2 Feb) — the Ramsar Convention of 1971. <b>World Wildlife Day</b> (3 Mar) — CITES, 1973. <b>World Ozone Day</b> (16 Sep) — the Montreal Protocol, 1987. <b>World Environment Day</b> (5 Jun) — the Stockholm Conference opened on that day in 1972, and the UN Environment Programme (UNEP) was born from it.</p><p>Late March is the forest-and-water week: <b>Forests on 21, Water on 22, Weather on 23</b>.</p>", key:"Treaty days: 2 Feb Ramsar, 3 Mar CITES, 16 Sep Montreal. 21-22-23 March: forests, water, weather."},
  {k:"table", title:"Days and dates", head:["Day","Date","Note"], rows: D8.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"The two <b>22s</b>: <b>22 March water, 22 April Earth, 22 May biodiversity</b> — three months, same date. Big cats in late July–August: <b>Tiger 29 Jul, Lion 10 Aug</b>; then <b>Elephant 12 Aug</b>."},
  {k:"trap", h:"<b>Earth Day</b> (22 Apr) is not <b>Earth Hour</b> (last Saturday of March). <b>World Environment Day</b> is 5 Jun; <b>World Oceans Day</b> is 8 Jun. <b>World Wildlife Day</b> 3 Mar vs India's <b>Wildlife Week</b> 2–8 Oct."}
], sum:["World Wetlands Day 2 Feb (Ramsar, 1971); World Wildlife Day 3 Mar (CITES).","Forests 21 Mar, Water 22 Mar, Meteorology 23 Mar; Earth Day 22 Apr; Biodiversity 22 May.","World Environment Day 5 Jun (Stockholm, 1972; UNEP); World Oceans Day 8 Jun; Desertification 17 Jun.","World Nature Conservation Day 28 Jul; International Tiger Day 29 Jul; World Elephant Day 12 Aug.","World Ozone Day 16 Sep (Montreal Protocol, 1987); World Soil Day 5 Dec; International Mountain Day 11 Dec."]},

{id:"D9", heat:2, title:"Moving dates, international years and decades", hi:"परिवर्ती दिवस, अंतरराष्ट्रीय वर्ष और दशक", blocks:[
  {k:"hot", h:"Asked now and then: days that fall on a <b>weekday rule</b> (Mother's Day, Father's Day, World Egg Day), the <b>International Year</b> of the exam year (2023 Millets — India's proposal), and the UN <b>decades</b> running now."},
  {k:"story", h:"<p>Some days are not fixed dates but rules: <b>Mother's Day</b> is the second Sunday of May, <b>Father's Day</b> the third Sunday of June. The UN also gives each year a theme — <b>2023 was the International Year of Millets</b>, proposed by India, which calls millets <i>Shree Anna</i>. <b>2025</b> celebrated a hundred years of quantum mechanics, and <b>2026</b> honours rangelands and pastoralists and the woman farmer.</p><p>Bigger goals get a decade: the <b>Ocean Decade</b> and the <b>Decade on Ecosystem Restoration</b> both run from 2021 to 2030.</p>", key:"2023 Millets (India's proposal), 2025 Quantum Science, 2026 Rangelands and Pastoralists & Woman Farmer."},
  {k:"table", title:"Days with moving dates", head:["Day","When","Note"], rows: D9V.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"UN international years (as of 2026)", head:["International Year of…","Year","Note"], rows: D9Y.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"UN decades running now", head:["Decade","Years","Note"], rows: D9D.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>Mother before Father</b>: May's 2nd Sunday, then June's 3rd Sunday — month +1, Sunday +1."},
  {k:"trap", h:"<b>2023</b> was the Year of <b>Millets</b>; <b>2026</b> is the Year of <b>Rangelands and Pastoralists</b> (also the Woman Farmer). Years and themes change — check the current year's before the exam."}
], sum:["Mother's Day is the second Sunday of May; Father's Day the third Sunday of June.","World Egg Day is the second Friday of October; Earth Hour the last Saturday of March.","2023 was the International Year of Millets, proposed by India.","2025: Quantum Science and Technology, and Glaciers' Preservation; 2026: Rangelands and Pastoralists, and the Woman Farmer.","The UN Ocean Decade and Decade on Ecosystem Restoration run 2021–2030."]}
);

pairQs("D8", D8, { q: t => `When is ${t} observed?`, rq: a => `Which environment day falls on ${a}?` });
pairQs("D9", D9V, { q: t => `When is ${t} observed?`, rq: a => `Which day is observed on the ${a.toLowerCase()}?` });
pairQs("D9", D9Y, { q: t => `Which year did the UN declare the ${t}?` });

QB.push(
["D8","World Wetlands Day marks the signing of which convention?",["Ramsar Convention","CITES","Montreal Protocol","Basel Convention"],"Signed at Ramsar, Iran, on 2 February 1971.","p"],
["D8","World Ozone Day marks the signing of the:",["Montreal Protocol","Kyoto Protocol","Paris Agreement","Rio Declaration"],"Signed on 16 September 1987 to phase out ozone-depleting substances.","p"],
["D8","Which UN body leads World Environment Day?",["UNEP","UNESCO","FAO","WMO"],"The UN Environment Programme, headquartered in Nairobi.",""],
["D9","The International Year of Millets 2023 was proposed by:",["India","China","Nigeria","Brazil"],"India's proposal was adopted by the UN General Assembly in 2021.","p"],
["D9","The UN Decade on Ecosystem Restoration covers:",["2021–2030","2011–2020","2016–2025","2025–2034"],"Led by UNEP and FAO.",""],
["D9","Which of these is NOT observed on a fixed calendar date?",["Mother's Day","World Environment Day","Human Rights Day","World Water Day"],"Mother's Day falls on the second Sunday of May.",""]
);

LASTMOMENT.push(
{t:"Environment days", era:["dy"], rows:[["2 Feb","Wetlands (Ramsar)"],["3 Mar","Wildlife (CITES)"],["21 Mar","Forests"],["22 Mar","Water"],["22 Apr","Earth Day"],["22 May","Biodiversity"],["5 Jun","Environment"],["16 Sep","Ozone (Montreal)"]]},
{t:"Years and moving days", era:["dy"], rows:[["2023","Millets (India's proposal)"],["2024","Camelids"],["2025","Quantum science; glaciers"],["2026","Rangelands & pastoralists; woman farmer"],["Mother's Day","2nd Sunday of May"],["Father's Day","3rd Sunday of June"],["World Egg Day","2nd Friday of October"],["Earth Hour","Last Saturday of March"]]}
);
TILES.push(["5 Jun","World Environment Day","dy"],["22 Apr","Earth Day","dy"],["29 Jul","International Tiger Day","dy"],["16 Sep","World Ozone Day","dy"],["2023","Year of Millets","dy"],["2026","Year of Rangelands & Pastoralists","dy"]);

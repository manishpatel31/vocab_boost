/* Part 3 · G9 climate and the monsoon; G10 soils and forests (forest data from ISFR 2023, released December 2024). */
const G9W = [
  ["Loo","Northern plains (Punjab to Bihar)","Hot, dry, dusty afternoon winds of May–June.","p"],
  ["Mango showers","Kerala and coastal Karnataka","Pre-monsoon showers that help mangoes ripen.","p"],
  ["Blossom (coffee) showers","Kerala and nearby coffee areas","Coffee flowers bloom after them.","p"],
  ["Kalbaisakhi (Nor'westers)","West Bengal","Violent evening thunderstorms of the hot season.","p"],
  ["Bardoli Chheerha (tea showers)","Assam","Assam's name for the Nor'westers; good for tea.",""],
  ["Western disturbances","North-west India (Punjab, Haryana)","Winter rain from the Mediterranean; good for wheat.","p"],
  ["North-east (retreating) monsoon","Tamil Nadu coast","Most of Tamil Nadu's rain falls in October–December.","p"]
];
const G9T = [
  ["Burst of the monsoon","Sudden onset of the rains with thunder and heavy showers","",""],
  ["Break in the monsoon","Dry spells of a week or more within the rainy season","",""],
  ["October heat","Hot, humid weather after the monsoon retreats","",""],
  ["El Niño","A warm Pacific current that tends to weaken the Indian monsoon","","p"],
  ["ITCZ","The low-pressure belt that moves north over the Ganga plain in summer","Inter Tropical Convergence Zone.",""],
  ["Jet stream","Fast, high-altitude westerly winds that shift north before the monsoon","",""]
];
const G9R = [
  ["Mawsynram (Meghalaya)","Highest average rainfall in the world","On the southern slopes of the Khasi hills.","p"],
  ["Cherrapunji (Sohra)","Most rain in a single year (1860–61)","Also in the Khasi hills, Meghalaya.","p"],
  ["Phalodi (Rajasthan)","Highest temperature recorded in India — 51 °C (2016)","",""],
  ["Dras (Ladakh)","Coldest inhabited place in India","Called the 'Gateway to Ladakh'.","p"],
  ["Leh (Ladakh)","Cold desert with very little rain","Rain shadow of the Himalaya.",""],
  ["Agumbe (Karnataka)","'Cherrapunji of the South'","Wettest place of the Western Ghats in Karnataka.",""]
];
const G10S = [
  ["Alluvial soil","Northern plains and river deltas","India's most widespread soil — wheat, rice, sugarcane.","p"],
  ["Black (regur) soil","Deccan lava plateau — Maharashtra, Gujarat, Madhya Pradesh","Best for cotton; holds water.","p"],
  ["Red and yellow soil","Eastern and southern Deccan — Tamil Nadu, Karnataka, Odisha, Chhattisgarh","Red from iron oxide.","p"],
  ["Laterite soil","Heavy-rain areas — Kerala, Karnataka, Meghalaya hills","Leached; good for cashew and tea.","p"],
  ["Arid (desert) soil","Western Rajasthan","Sandy; kankar layer below.","p"],
  ["Saline and alkaline soil","Dry parts of Gujarat, Punjab and Haryana","White salt crust; called reh, kallar or usar.",""],
  ["Peaty (marshy) soil","Kuttanad (Kerala), Sundarbans and the Odisha coast","Rich in organic matter.",""],
  ["Mountain (forest) soil","Himalayan slopes","",""]
];
const G10F = [
  ["Black (regur) soil","Self-ploughing; best for cotton","Cracks when dry, swells when wet; poor in nitrogen and phosphorus.","p"],
  ["Laterite soil","Leached by heavy rain; good for cashew","Used for bricks.","p"],
  ["Red soil","Red colour from iron oxide","Turns yellow when hydrated.","p"],
  ["Alluvial soil","Made of khadar and bhangar","River-laid silt.",""],
  ["Saline soil","White salt crust (reh, kallar, usar)","Gypsum helps cure it.",""],
  ["Peaty soil","Very rich in organic matter (humus)","",""]
];
const G10T = [
  ["Sundari","Mangrove (tidal) forest","Gives the Sundarbans its name.","p"],
  ["Teak","Tropical deciduous forest","","p"],
  ["Sal","Tropical deciduous forest","","p"],
  ["Ebony","Tropical evergreen forest","",""],
  ["Mahogany","Tropical evergreen forest","","p"],
  ["Rosewood","Tropical evergreen forest","",""],
  ["Babool (acacia)","Thorn and scrub forest","","p"],
  ["Khejri","Thorn and scrub forest","Rajasthan's state tree.",""],
  ["Deodar","Montane (temperate) forest","",""],
  ["Chir pine","Montane (temperate) forest","",""],
  ["Juniper and birch","Alpine forest","",""]
];

LESSONS.push(
{id:"G9", heat:3, title:"Climate and the monsoon", hi:"जलवायु और मानसून", blocks:[
  {k:"hot", h:"Most asked: <b>Mawsynram</b> (highest rainfall), the <b>local winds</b> — Loo, Mango showers, Kalbaisakhi — <b>western disturbances</b>, the <b>retreating monsoon</b> that waters Tamil Nadu, and <b>El Niño</b>."},
  {k:"story", h:"<p>India has a <b>tropical monsoon</b> climate. In summer the land heats up and a low-pressure belt (the <b>ITCZ</b>) moves north; moist winds from the south-west rush in. The <b>south-west monsoon</b> reaches <b>Kerala around 1 June</b> and covers the whole country by about <b>8 July</b>. Its <b>Arabian Sea branch</b> soaks the Western Ghats; its <b>Bay of Bengal branch</b> is funnelled into the Khasi hills, where <b>Mawsynram</b> gets the most rain on Earth.</p><p>From mid-September the monsoon <b>retreats</b>. Winds now blow from the north-east and pick up moisture over the Bay of Bengal, so the <b>Tamil Nadu coast</b> gets its main rain in <b>October–December</b>. In winter, <b>western disturbances</b> from the Mediterranean bring rain to Punjab and Haryana — a gift for wheat. Before the monsoon come the <b>Loo</b>, <b>mango showers</b> and the <b>Kalbaisakhi</b>.</p>", key:"SW monsoon: Kerala 1 June → all India 8 July; Mawsynram wettest; NE monsoon waters Tamil Nadu; western disturbances bring winter rain to the north-west."},
  {k:"facts", title:"Seasons of India (IMD)", rows:[
    ["Winter","December – February"],
    ["Summer (hot weather)","March – May"],
    ["South-west monsoon","June – September (about three-quarters of the year's rain)"],
    ["Post-monsoon (retreating)","October – November"],
    ["Rainfall range","Over 400 cm in Meghalaya to under 10 cm in Ladakh and western Rajasthan"],
    ["India Meteorological Department","Set up 1875; headquarters New Delhi"]
  ]},
  {k:"table", title:"Local winds and showers", head:["Wind / shower","Where","Remember"], rows: G9W.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Monsoon words", head:["Term","Meaning","Note"], rows: G9T.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Weather records", head:["Place","Known for","Note"], rows: G9R.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Pre-monsoon storms by state: <b>“Mango in Kerala, Coffee next door, Kalbaisakhi in Bengal, Tea in Assam, Loo in the plains.”</b> Monsoon dates: <b>“1 June in, 8 July all in.”</b>"},
  {k:"trap", h:"<b>Mawsynram</b> beats <b>Cherrapunji</b> for average rainfall, but Cherrapunji holds the single-year record. <b>Tamil Nadu</b> gets most rain from the <b>north-east</b> (retreating) monsoon, not the south-west one. <b>Western disturbances</b> come in <b>winter</b>, not summer."}
], sum:["India has a tropical monsoon climate with four IMD seasons.","The south-west monsoon reaches Kerala about 1 June and covers India by about 8 July.","Mawsynram (Meghalaya) has the highest average rainfall in the world.","Tamil Nadu gets most of its rain from the north-east monsoon in October–December.","Loo — hot winds of the plains; mango showers — Kerala; Kalbaisakhi — West Bengal; western disturbances — winter rain in the north-west."]},

{id:"G10", heat:2, title:"Soils and forests", hi:"मृदा और वन", blocks:[
  {k:"hot", h:"Asked every year: <b>black soil = regur = cotton</b>, <b>alluvial = most widespread</b>, <b>laterite = leached</b>, the <b>forest types</b> and their trees, and the <b>ISFR</b> numbers — forest cover %, MP largest, Mizoram highest share."},
  {k:"story", h:"<p>India's most widespread soil is <b>alluvial</b>, laid down by rivers across the Northern Plains. On the Deccan lava lies sticky <b>black soil (regur)</b>, which cracks in summer and 'ploughs itself' — perfect for <b>cotton</b>. <b>Red soil</b> gets its colour from iron oxide. Where heavy rain washes out the minerals, <b>laterite</b> forms — good for cashew and tea. The Thar has <b>arid</b> soil, and dry irrigated land can turn <b>saline</b> (reh, kallar, usar).</p><p>Forests follow rainfall. Over 200 cm gives <b>tropical evergreen</b> forest (ebony, mahogany, rosewood) in the Western Ghats, the north-east and the Andamans. The most common type is <b>tropical deciduous (monsoon)</b> forest of <b>teak and sal</b>. Below 70 cm come <b>thorn forests</b> of babool and khejri. Mountains carry <b>montane</b> forests of deodar and pine, and tidal coasts carry <b>mangroves</b> — the Sundarbans is named after the sundari tree.</p>", key:"Alluvial most widespread; black = regur = cotton; laterite = leached; deciduous forest most widespread; mangrove — sundari."},
  {k:"table", title:"Soils and where they are found", head:["Soil","Found in","Remember"], rows: G10S.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Soils: the one thing to remember", head:["Soil","Key feature","Note"], rows: G10F.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Trees and forest types", head:["Tree","Forest type","Note"], rows: G10T.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"India State of Forest Report 2023 (released December 2024, as of ISFR 2023)", rows:[
    ["Published by","Forest Survey of India, Dehradun — every two years (ISFR 2023 is the 18th)"],
    ["Forest and tree cover","25.17% of India's area (forest 21.76% + tree cover 3.41%)"],
    ["Largest forest cover (area)","Madhya Pradesh, then Arunachal Pradesh and Chhattisgarh"],
    ["Highest forest share (state)","Mizoram (about 85%); Lakshadweep highest of all (about 91%)"],
    ["Mangrove cover","About 4,992 km² — West Bengal has the most"],
    ["Target","33% of the area under forest (National Forest Policy, 1988)"]
  ]},
  {k:"trick", h:"Soils by rain: <b>“Little rain — Arid; some — Black and Red; heavy — Laterite.”</b> Forests by rain: <b>200+ Evergreen, 70–200 Deciduous, under 70 Thorn</b> — <b>“E-D-T”</b>, going down like a staircase."},
  {k:"trap", h:"<b>Black soil</b> is <b>poor</b> in nitrogen and phosphorus but rich in lime, iron and potash. <b>Teak and sal</b> are <b>deciduous</b>, not evergreen. In ISFR, <b>Madhya Pradesh</b> has the largest forest <b>area</b>, but <b>Mizoram</b> has the highest forest <b>percentage</b>."}
], sum:["Alluvial soil is the most widespread; black soil (regur) of the Deccan is best for cotton.","Red soil gets its colour from iron oxide; laterite forms where heavy rain leaches the soil.","Tropical deciduous (teak, sal) is the most widespread forest; evergreen needs over 200 cm of rain.","Mangroves line tidal coasts — the Sundarbans is named after the sundari tree.","ISFR 2023: forest and tree cover 25.17%; Madhya Pradesh has the largest forest area, Mizoram the highest share."]}
);

pairQs("G9", G9W, { q: t => `'${t}' — which region is it linked with?`, rq: a => `Which wind or shower is linked with ${a}?` });
pairQs("G9", G9T, { q: t => `In Indian climate, '${t}' means:` });
pairQs("G9", G9R, { q: t => `${t} is best known for:`, rq: a => `Which place is known for this: ${a}?` });
pairQs("G10", G10S, { q: t => `${t} is mainly found in:` });
pairQs("G10", G10F, { q: t => `Which feature fits ${t.toLowerCase()}?`, rq: a => `Which soil: ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("G10", G10T, { q: t => `${t} trees are typical of which forest?`, rq: a => `Which tree is typical of ${a.toLowerCase()}?` });

QB.push(
["G9","Which place in the world receives the highest rainfall?",["Mawsynram","Guwahati","Itanagar","Agumbe"],"Mawsynram in the Khasi hills, Meghalaya.","p","","","SSC MTS 2022 · 10 May 2023 (Shift 2)"],
["G9","The south-west monsoon usually reaches the Kerala coast around:",["1 June","15 May","1 July","15 June"],"It covers all India by about 8 July.","p"],
["G9","Which part of India gets most of its rain from the north-east monsoon?",["Tamil Nadu coast","Konkan coast","Assam valley","Punjab plains"],"October to December.","p"],
["G9","Western disturbances that bring winter rain to north-west India come from the:",["Mediterranean region","Bay of Bengal","Arabian Sea","Pacific Ocean"],"They help the rabi wheat crop.","p"],
["G9","What kind of climate does India have?",["Tropical monsoon","Mediterranean","Equatorial","Temperate continental"],"Seasonal reversal of winds.","p"],
["G9","The Kalbaisakhi storms are also called:",["Nor'westers","Loo","Western disturbances","Mango showers"],"Evening thunderstorms in West Bengal.","p"],
["G9","An El Niño year usually means for the Indian monsoon:",["Weaker rains","Stronger rains","No effect","Rain only in winter"],"La Niña tends to bring good rain.","p"],
["G10","Which crop grows best on black soil?",["Cotton","Coffee","Maize","Millets"],"Black soil is also called regur or black cotton soil.","p","","","SSC CGL 2022 · 13 Dec 2022 (Shift 2)"],
["G10","Which is the most widespread soil in India?",["Alluvial","Black","Red","Laterite"],"Covers the Northern Plains and the deltas.","p"],
["G10","Black soil was formed from:",["Weathered lava (Deccan trap)","River silt","Sand dunes","Glacier deposits"],"Basalt of the Deccan plateau.","p"],
["G10","Which is the most widespread forest type in India?",["Tropical deciduous","Tropical evergreen","Thorn","Montane"],"Also called monsoon forest.","p"],
["G10","According to ISFR 2023, India's total forest and tree cover is about:",["25.17%","21.76%","33%","19.5%"],"Forest 21.76% + tree cover 3.41%.","p"],
["G10","As per ISFR 2023, which state has the largest forest cover by area?",["Madhya Pradesh","Arunachal Pradesh","Chhattisgarh","Odisha"],"Followed by Arunachal Pradesh and Chhattisgarh.","p"],
["G10","As per ISFR 2023, which state has the highest share of its area under forest?",["Mizoram","Arunachal Pradesh","Meghalaya","Kerala"],"About 85%.","p"],
["G10","The India State of Forest Report is published by the:",["Forest Survey of India","Botanical Survey of India","ICFRE","Wildlife Institute of India"],"Dehradun, every two years.","p"],
["G10","Which state has the largest mangrove cover?",["West Bengal","Gujarat","Odisha","Andhra Pradesh"],"The Sundarbans.","p"]
);

LASTMOMENT.push(
{t:"Climate", era:["ig"], rows:[["Wettest","Mawsynram"],["Monsoon at Kerala","~1 June"],["All India","~8 July"],["TN rain","NE monsoon, Oct–Dec"],["Loo","Northern plains"],["Mango showers","Kerala"],["Kalbaisakhi","West Bengal"],["Western disturbances","Winter, north-west"]]},
{t:"Soils and forests", era:["ig"], rows:[["Most widespread soil","Alluvial"],["Cotton soil","Black (regur)"],["Leached soil","Laterite"],["Red colour","Iron oxide"],["Most widespread forest","Tropical deciduous"],["ISFR 2023 cover","25.17%"],["Largest forest area","Madhya Pradesh"],["Highest share","Mizoram"]]}
);
TILES.push(["1 June","Monsoon reaches Kerala","ig"],["8 July","Monsoon covers India","ig"],["25.17%","Forest + tree cover (ISFR 2023)","ig"],["21.76%","Forest cover","ig"],["1875","IMD set up","ig"]);

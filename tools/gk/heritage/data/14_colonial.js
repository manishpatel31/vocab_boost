/* H5 — Cultural sites IV: colonial, modern and city sites, and the Mountain Railways. */
const H5S = [
  ["Churches and Convents of Goa","Goa","1986","Old Goa, the Portuguese capital; the Basilica of Bom Jesus holds the body of St Francis Xavier."],
  ["Chhatrapati Shivaji Terminus","Maharashtra","2004","Mumbai's Victorian Gothic railway station by F. W. Stevens, opened as Victoria Terminus (1887–88)."],
  ["Jantar Mantar, Jaipur","Rajasthan","2010","Sawai Jai Singh II's stone observatory of the 1720s–30s; the Samrat Yantra sundial."],
  ["Capitol Complex, Chandigarh","Chandigarh","2016","Le Corbusier's Assembly, Secretariat and High Court, part of his work in seven countries."],
  ["Historic City of Ahmedabad","Gujarat","2017","Walled city founded by Sultan Ahmad Shah in 1411; pols and the Sidi Saiyyed jali; India's first World Heritage city."],
  ["Victorian Gothic and Art Deco Ensembles of Mumbai","Maharashtra","2018","19th-century Gothic public buildings and 20th-century Art Deco buildings facing each other across the Oval Maidan."],
  ["Jaipur City","Rajasthan","2019","The Pink City, founded in 1727 by Sawai Jai Singh II on a grid plan."],
  ["Santiniketan","West Bengal","2023","Rabindranath Tagore's ashram-school, which grew into Visva-Bharati University."]
];
const H5R = [
  ["Darjeeling Himalayan Railway","West Bengal","1999","The 'Toy Train' from New Jalpaiguri, opened in 1881; loops and zigzags, and Ghum, its highest station."],
  ["Nilgiri Mountain Railway","Tamil Nadu","2005","Mettupalayam to Udhagamandalam (Ooty), opened in 1908; a rack-and-pinion line on its steepest part."],
  ["Kalka–Shimla Railway","Himachal Pradesh","2008","Opened in 1903; about 96 km with more than 100 tunnels; it starts at Kalka in Haryana."]
];

LESSONS.push(
{id:"H5", heat:2, title:"Cultural sites IV: colonial, modern and city sites", hi:"सांस्कृतिक स्थल IV: औपनिवेशिक, आधुनिक और नगर स्थल", blocks:[
  {k:"hot", h:"Most asked: <b>Ahmedabad</b> as India's first World Heritage city, <b>Jaipur City</b> (2019) and its founder, the <b>Mountain Railways</b> (three lines, three years), <b>CST</b> and its architect, <b>Le Corbusier</b> and Chandigarh, and <b>Santiniketan</b> (2023)."},
  {k:"story", h:"<p>Not every World Heritage site is ancient. The Portuguese built the great churches of <b>Old Goa</b> in the 16th and 17th centuries. In the 19th century the British gave Bombay its Gothic railway station, <b>Victoria Terminus</b> — now Chhatrapati Shivaji Terminus — and a row of Gothic courts and colleges along the <b>Oval Maidan</b>; across the same ground, in the 1930s, came a row of Art Deco flats and cinemas.</p><p>Meanwhile engineers pushed little railways up the hills to <b>Darjeeling</b>, <b>Ooty</b> and <b>Shimla</b>. After Independence, Nehru invited the Swiss-French architect <b>Le Corbusier</b> to design Punjab's new capital, Chandigarh.</p><p>Whole cities are on the list too. <b>Ahmedabad</b>, founded in 1411, was the first Indian city inscribed (2017); <b>Jaipur</b>, laid out in 1727 by Sawai Jai Singh II, followed in 2019. And in 2023 came <b>Santiniketan</b>, where Rabindranath Tagore taught under the trees.</p>", key:"Goa churches 1986 · CST 2004 · Jantar Mantar 2010 · Chandigarh 2016 · Ahmedabad 2017 · Mumbai ensembles 2018 · Jaipur 2019 · Santiniketan 2023 · railways 1999/2005/2008."},
  {k:"table", title:"Colonial, modern and city sites", head:["Site","State / UT","Year","Remember"], rows: H5S.map(r => ["<b>" + r[0] + "</b>", r[1], r[2], r[3]])},
  {k:"table", title:"The Mountain Railways of India (one site, three lines)", head:["Railway","State","Year added","Remember"], rows: H5R.map(r => ["<b>" + r[0] + "</b>", r[1], r[2], r[3]])},
  {k:"facts", title:"More on each site", rows:[
    ["Old Goa","The <b>Basilica of Bom Jesus</b> (St Francis Xavier's remains), the <b>Se Cathedral</b>, the Church of St Francis of Assisi; the city was called the 'Rome of the East'"],
    ["CST, Mumbai","Designed by <b>Frederick William Stevens</b>; built 1878–1888 and named after Queen Victoria in her Golden Jubilee year; Victorian Gothic Revival with Indian touches; headquarters of the Central Railway; renamed in 1996"],
    ["Mumbai ensembles","Gothic side: the <b>Bombay High Court</b> and the <b>University of Mumbai</b> with the <b>Rajabai Clock Tower</b>; Art Deco side: buildings of the Backbay reclamation and <b>Marine Drive</b>, such as the Eros cinema"],
    ["Capitol Complex","Planned by <b>Le Corbusier</b> in the 1950s with the Palace of Assembly, the Secretariat, the High Court and the <b>Open Hand Monument</b>; one of 17 sites of 'The Architectural Work of Le Corbusier' across seven countries — India's first transnational site"],
    ["Ahmedabad","Founded by <b>Sultan Ahmad Shah I</b> on the Sabarmati; Bhadra fort, Teen Darwaza, Jama Masjid, the <b>Sidi Saiyyed</b> mosque's tree jali, and the <b>pols</b> — gated lanes of wooden houses"],
    ["Jaipur","Founded in 1727 by <b>Sawai Jai Singh II</b> and planned by <b>Vidyadhar Bhattacharya</b> on a grid; painted pink in 1876 to welcome the Prince of Wales; Hawa Mahal and City Palace are inside"],
    ["Jantar Mantar","Sawai Jai Singh II built five observatories — Delhi, Jaipur, Ujjain, Varanasi and Mathura; only <b>Jaipur's</b> is a World Heritage site. Its <b>Samrat Yantra</b> is one of the largest stone sundials in the world"],
    ["Santiniketan","Birbhum district; <b>Debendranath Tagore</b> set up an ashram here in 1863; <b>Rabindranath</b> began a school in 1901 and founded <b>Visva-Bharati</b> in 1921; it became a central university in 1951"]]},
  {k:"trick", h:"Railways in the order they joined — “<b>D-N-K</b>, '99-'05-'08”: <b>D</b>arjeeling 1999, <b>N</b>ilgiri 2005, <b>K</b>alka–Shimla 2008. Cities in order — “<b>A</b>hmedabad <b>J</b>umps first, <b>J</b>aipur follows”: Ahmedabad 2017, Jaipur 2019."},
  {k:"trap", h:"<b>Matheran Hill Railway</b> and the <b>Kangra Valley Railway</b> are on the Tentative List, not inscribed. Only <b>Jaipur's</b> Jantar Mantar is a World Heritage site, not Delhi's. Chandigarh's <b>Rock Garden</b> (Nek Chand) is not part of the site. Jaipur City (2019) and Jantar Mantar (2010) are <b>two separate</b> sites. <b>Ahmedabad</b>, not Jaipur, was the first Indian city."}
], sum:["Churches and Convents of Goa (1986): Bom Jesus holds St Francis Xavier's remains.","CST (2004) by F. W. Stevens — once Victoria Terminus; the Victorian Gothic and Art Deco ensembles of Mumbai (2018) face each other across the Oval Maidan.","Jantar Mantar, Jaipur (2010) — Sawai Jai Singh II; Jaipur City (2019) — founded 1727, planned by Vidyadhar Bhattacharya.","Capitol Complex, Chandigarh (2016) — Le Corbusier; India's first transnational site.","Ahmedabad (2017) was India's first World Heritage city.","Mountain Railways: Darjeeling 1999, Nilgiri 2005, Kalka–Shimla 2008.","Santiniketan (2023): Debendranath Tagore's ashram, Rabindranath's Visva-Bharati."]}
);

pairQs("H5", H5S.filter(r => !r[0].includes(r[1])).map(r => [r[0], r[1], r[3], ""]), { q: t => `The World Heritage site “${t}” is in which state or UT?`, e: r => `“${r[0]}” is in ${r[1]}. ${r[2]}`,
  rq: a => `Which of these colonial, modern or city sites on the World Heritage list is in ${a}?`, re: r => `“${r[0]}” is in ${r[1]}. ${r[2]}`, extra: ["Karnataka","Delhi"] });
pairQs("H5", H5R.map(r => [r[0], r[1], r[3], ""]), { q: t => `The ${t} runs in which state?`, e: r => `The ${r[0]} is in ${r[1]}. ${r[2]}`, extra: ["Maharashtra","Uttarakhand"] });
pairQs("H5", H5R.map(r => [r[0], r[2], r[3], ""]), { q: t => `In which year was the ${t} added to the World Heritage list?`, e: r => `The ${r[0]} joined in ${r[1]}. Darjeeling 1999, Nilgiri 2005, Kalka–Shimla 2008.`, extra: ["2010"] });

QB.push(
["H5","The Basilica of Bom Jesus in Old Goa holds the remains of:",["St Francis Xavier","St Thomas","Vasco da Gama","St Ignatius Loyola"],"St Francis Xavier's body lies in a silver casket in the basilica.",""],
["H5","Who designed Chhatrapati Shivaji Terminus in Mumbai?",["Frederick William Stevens","George Wittet","Edwin Lutyens","William Emerson"],"F. W. Stevens designed it; George Wittet designed the Gateway of India.",""],
["H5","Chhatrapati Shivaji Terminus was first named after:",["Queen Victoria","King George V","Lord Dalhousie","the Prince of Wales"],"It opened as Victoria Terminus in the year of Queen Victoria's Golden Jubilee and was renamed in 1996.",""],
["H5","In which style is Chhatrapati Shivaji Terminus built?",["Victorian Gothic Revival with Indian elements","Art Deco","Indo-Islamic","Classical Palladian"],"Its pointed arches, turrets and stained glass are Gothic Revival, mixed with Indian carving.",""],
["H5","The Victorian Gothic and Art Deco buildings of Mumbai's World Heritage site face each other across the:",["Oval Maidan","Azad Maidan","Shivaji Park","Cross Maidan"],"Gothic buildings stand on the east side of the Oval Maidan and Art Deco buildings on the west.",""],
["H5","Which clock tower is part of the Victorian Gothic ensemble of Mumbai?",["Rajabai Tower","Husainabad Clock Tower","Ghanta Ghar, Jodhpur","Lal Chowk Clock Tower"],"The Rajabai Tower stands in the University of Mumbai's Fort campus.",""],
["H5","The Capitol Complex of Chandigarh is part of a World Heritage site spread over how many countries?",["Seven","Two","Four","Ten"],"'The Architectural Work of Le Corbusier' (2016) has 17 sites in seven countries, including India.",""],
["H5","Which monument, a symbol of Chandigarh, stands in the Capitol Complex?",["Open Hand Monument","Rock Garden","Sukhna Lake","Rose Garden"],"Le Corbusier's Open Hand stands for 'open to give, open to receive'. The Rock Garden is not part of the site.",""],
["H5","Ahmedabad was founded in 1411 by:",["Sultan Ahmad Shah I","Mahmud Begada","Akbar","Qutb-ud-din Aibak"],"Ahmad Shah I of the Gujarat Sultanate founded it on the east bank of the Sabarmati.",""],
["H5","The traditional gated neighbourhoods of old Ahmedabad are called:",["Pols","Katras","Agraharams","Peths"],"A pol is a lane of houses with a single gateway; katras are found in Delhi and Amritsar.",""],
["H5","Which mosque of Ahmedabad is famous for its stone jali of an intertwined tree?",["Sidi Saiyyed Mosque","Jama Masjid","Rani Sipri Mosque","Sarkhej Roza"],"The Sidi Saiyyed jali has become a symbol of the city.",""],
["H5","Jaipur was founded in 1727 by:",["Sawai Jai Singh II","Raja Man Singh I","Sawai Pratap Singh","Sawai Ram Singh II"],"Sawai Jai Singh II moved his capital from Amber to the new planned city.",""],
["H5","Who planned the city of Jaipur?",["Vidyadhar Bhattacharya","Lal Chand Ustad","Edwin Lutyens","Le Corbusier"],"Vidyadhar Bhattacharya laid it out on a grid, following old Hindu texts on town planning.",""],
["H5","Why is Jaipur called the Pink City?",["It was painted pink in 1876 to welcome the Prince of Wales","Its sandstone is naturally pink","It is named after a pink lotus","Its founder's flag was pink"],"Maharaja Ram Singh II had the old city painted pink — the colour of welcome — for the royal visit.",""],
["H5","Which of Sawai Jai Singh II's observatories is a World Heritage site?",["Jaipur","Delhi","Ujjain","Varanasi"],"Only the Jantar Mantar of Jaipur (2010) is inscribed.",""],
["H5","The Samrat Yantra at Jaipur's Jantar Mantar is a:",["Giant sundial","Telescope","Star globe","Water clock"],"The Samrat Yantra tells the time from the shadow of its huge triangular wall.",""],
["H5","Which railway of the World Heritage site uses a rack-and-pinion system on its steep section?",["Nilgiri Mountain Railway","Darjeeling Himalayan Railway","Kalka–Shimla Railway","Kangra Valley Railway"],"The Nilgiri line climbs with a toothed rack between Kallar and Coonoor.",""],
["H5","Which hill railway is NOT part of the Mountain Railways of India World Heritage site?",["Matheran Hill Railway","Darjeeling Himalayan Railway","Nilgiri Mountain Railway","Kalka–Shimla Railway"],"Matheran's line in Maharashtra is on the Tentative List only.",""],
["H5","Santiniketan is in which district of West Bengal?",["Birbhum","Bankura","Nadia","Hooghly"],"Santiniketan, near Bolpur, is in Birbhum district.",""],
["H5","Santiniketan began in 1863 as an ashram set up by:",["Debendranath Tagore","Rabindranath Tagore","Dwarkanath Tagore","Abanindranath Tagore"],"Debendranath, Rabindranath's father, set up the ashram; Rabindranath later built the school and university.",""],
["H5","In which year did Rabindranath Tagore found Visva-Bharati?",["1921","1901","1913","1951"],"He began a school in 1901, won the Nobel Prize in 1913, founded Visva-Bharati in 1921; it became a central university in 1951.",""],
["H5","Old Goa, with its World Heritage churches, was the capital of which colonial power in India?",["Portuguese","Dutch","French","British"],"Old Goa was the capital of Portuguese India until the capital moved to Panaji in the 19th century.",""]
);
LASTMOMENT.push({t:"Colonial, modern and city sites", era:["hm"], rows:[["Goa churches","1986 — Bom Jesus, St Francis Xavier"],["CST","2004 — F. W. Stevens"],["Jantar Mantar, Jaipur","2010"],["Capitol Complex","2016 — Le Corbusier, 7 countries"],["Ahmedabad","2017 — first city"],["Mumbai ensembles","2018 — Oval Maidan"],["Jaipur","2019 — Pink City"],["Santiniketan","2023"],["Railways","Darjeeling 1999 · Nilgiri 2005 · Kalka–Shimla 2008"]]});

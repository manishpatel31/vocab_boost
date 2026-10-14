/* Part 2 · T5 Indian Railways: zones, headquarters and factories; T6 railway milestones, records and new trains (as of October 2026). */
const T5 = [
  ["Northern Railway","New Delhi","At Baroda House.","p"],
  ["North Eastern Railway","Gorakhpur","","p"],
  ["Northeast Frontier Railway","Maligaon (Guwahati)","","p"],
  ["Eastern Railway","Kolkata","At Fairlie Place.","p|SSC MTS · 7 Jul 2022 (Shift 2)"],
  ["South Eastern Railway","Kolkata","At Garden Reach.","p"],
  ["Metro Railway, Kolkata","Kolkata","The only metro run as a zone of Indian Railways.",""],
  ["Central Railway","Mumbai","At Chhatrapati Shivaji Maharaj Terminus (CSMT).","p"],
  ["Western Railway","Mumbai","At Churchgate.","p"],
  ["Southern Railway","Chennai","","p"],
  ["South Central Railway","Secunderabad","","p"],
  ["South Western Railway","Hubballi","","p"],
  ["North Western Railway","Jaipur","","p"],
  ["West Central Railway","Jabalpur","","p"],
  ["North Central Railway","Prayagraj","","p"],
  ["South East Central Railway","Bilaspur","In Chhattisgarh.","p"],
  ["East Coast Railway","Bhubaneswar","","p"],
  ["East Central Railway","Hajipur","The only zonal headquarters in Bihar.","p"]
];
const T5U = [
  ["Integral Coach Factory (ICF)","Chennai","Set up in 1955; built the first Vande Bharat trains.","p"],
  ["Chittaranjan Locomotive Works (CLW)","Chittaranjan","West Bengal, 1950 — India's first locomotive factory.","p"],
  ["Banaras Locomotive Works (BLW)","Varanasi","Formerly the Diesel Locomotive Works; renamed in 2020.","p"],
  ["Rail Coach Factory (RCF)","Kapurthala","In Punjab.",""],
  ["Modern Coach Factory (MCF)","Raebareli","In Uttar Pradesh.",""],
  ["Patiala Locomotive Works (PLW)","Patiala","Formerly the Diesel Loco Modernisation Works.",""],
  ["Rail Wheel Factory","Yelahanka (Bengaluru)","",""],
  ["Rail Wheel Plant","Bela (Bihar)","",""],
  ["Electric Locomotive Factory (with Alstom)","Madhepura (Bihar)","Makes 12,000-horsepower engines.",""]
];
const T6 = [
  ["First goods train, Roorkee to Piran Kaliyar","1851","Carried earth for the Ganga Canal works.",""],
  ["First passenger train, Bori Bunder (Mumbai) to Thane","1853","16 April 1853 — 34 km, three engines named Sahib, Sultan and Sindh.","p"],
  ["First train in eastern India, Howrah to Hooghly","1854","",""],
  ["First train in south India, Royapuram to Wallajah Road","1856","",""],
  ["Setting up of the Railway Board","1905","",""],
  ["First electric train, Bombay VT to Kurla","1925","3 February 1925.","p"],
  ["Start of the zonal system (Southern, Central, Western)","1951","",""],
  ["First Rajdhani Express, New Delhi to Howrah","1969","",""],
  ["India's first metro, Kolkata","1984","24 October 1984.","p"],
  ["First Shatabdi Express, New Delhi to Jhansi","1988","",""],
  ["Full opening of the Konkan Railway","1998","Roha to Thokur along the west coast.",""],
  ["Delhi Metro's first line","2002","",""],
  ["Merger of the railway budget with the Union Budget","2017","",""],
  ["First Vande Bharat Express, New Delhi to Varanasi","2019","15 February 2019.","p"],
  ["First Namo Bharat (RRTS) section, Sahibabad to Duhai","2023","",""],
  ["First underwater metro, under the Hooghly in Kolkata","2024","Esplanade to Howrah Maidan.","p"]
];
const T6R = [
  ["India's longest railway platform","Hubballi (Karnataka)","Shree Siddharoodha Swamiji station, about 1,507 m (2023).","p"],
  ["World's highest railway arch bridge","Chenab Bridge (Jammu and Kashmir)","About 359 m above the river; opened in June 2025.","p"],
  ["India's first vertical-lift sea bridge","New Pamban Bridge (Tamil Nadu)","Opened in April 2025, to Rameswaram.","p"],
  ["India's highest railway station","Ghum (West Bengal)","On the Darjeeling Himalayan Railway.",""],
  ["India's longest rail-cum-road bridge","Bogibeel Bridge (Assam)","Over the Brahmaputra, 2018.","p"],
  ["India's first water metro","Kochi (Kerala)","Started in April 2023.","p"],
  ["World's oldest working steam engine","Fairy Queen","Built in 1855.",""],
  ["India's first bullet train route (under construction)","Mumbai–Ahmedabad","508 km, with Japan's Shinkansen technology.","p"]
];
const T6M = [
  ["Darjeeling Himalayan Railway","West Bengal","UNESCO World Heritage, 1999 — the 'Toy Train'.","p"],
  ["Nilgiri Mountain Railway","Tamil Nadu","UNESCO, 2005 — Mettupalayam to Udhagamandalam (Ooty).","p"],
  ["Kalka–Shimla Railway","Himachal Pradesh","UNESCO, 2008.","p"],
  ["Matheran Hill Railway","Maharashtra","On UNESCO's tentative list.",""],
  ["Kangra Valley Railway","Himachal Pradesh","Pathankot to Joginder Nagar.",""]
];

LESSONS.push(
{id:"T5", heat:3, title:"Indian Railways: zones and factories", hi:"भारतीय रेलवे: ज़ोन और कारख़ाने", blocks:[
  {k:"hot", h:"The commonest railway question: <b>“The headquarters of X Railway is at …?”</b> — and its reverse. Learn the 17 zones, especially the tricky ones: <b>Hajipur</b> (East Central), <b>Hubballi</b> (South Western), <b>Bilaspur</b> (South East Central), <b>Gorakhpur</b> (North Eastern), <b>Maligaon</b> (NF)."},
  {k:"story", h:"<p>Indian Railways is run by the <b>Railway Board</b> (1905) under the Ministry of Railways. In <b>1951</b> the old company railways were merged into zones — Southern, Central and Western came first. Today there are <b>17 zones</b>, counting the <b>Metro Railway, Kolkata</b>. Kolkata has three headquarters (Eastern, South Eastern, Metro); Mumbai has two (Central at CSMT, Western at Churchgate).</p><p>Engines and coaches come from its own factories: <b>Chittaranjan</b> (CLW, 1950) for electric engines, <b>Varanasi</b> (BLW, once the Diesel Locomotive Works), <b>ICF Chennai</b> for coaches and Vande Bharat trains, <b>Kapurthala</b> and <b>Raebareli</b> for coaches, and <b>Yelahanka</b> for wheels.</p>", key:"17 zones; tricky HQs: Hajipur, Hubballi, Bilaspur, Gorakhpur, Maligaon, Jabalpur, Prayagraj; ICF Chennai; CLW Chittaranjan; BLW Varanasi."},
  {k:"table", title:"Railway zones and headquarters", head:["Zone","Headquarters","Note"], rows: T5.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Railway factories", head:["Factory","Place","Note"], rows: T5U.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Indian Railways at a glance (as of 2025–26)", rows:[
    ["Ministry","Ministry of Railways; the Railway Board (1905) runs it"],
    ["Zones","17, counting Metro Railway Kolkata"],
    ["18th zone","South Coast Railway, Visakhapatnam — announced in 2019"],
    ["Konkan Railway","A separate corporation; HQ at CBD Belapur, Navi Mumbai"],
    ["Railway budget","Merged with the Union Budget in 2017"],
    ["Network","About 68,000 route km — one of the world's largest under one management"],
    ["National Rail Museum","New Delhi (1977)"]
  ]},
  {k:"trick", h:"Bihar has <b>H</b>ajipur — <b>“Hajipur Holds the East-Central Hub”</b>. South-West is <b>H</b>ubballi, South-East-Central is <b>B</b>ilaspur: <b>“SW-Hubli, SEC-Bilas”</b>. <b>North-East = Gorakhpur</b> (UP!), not the North-East states — those are <b>Northeast Frontier</b> (Maligaon)."},
  {k:"trap", h:"<b>North Eastern Railway</b> is headquartered at <b>Gorakhpur</b>, while <b>Northeast Frontier Railway</b> is at <b>Maligaon (Guwahati)</b>. <b>East Coast</b> (Bhubaneswar) and <b>East Central</b> (Hajipur) are different zones. <b>South Central</b> is Secunderabad, not Hyderabad city."}
], sum:["Indian Railways has 17 zones, including Metro Railway Kolkata; zones began in 1951.","Kolkata: Eastern, South Eastern, Metro; Mumbai: Central (CSMT), Western (Churchgate).","Tricky HQs: North Eastern — Gorakhpur; NF — Maligaon; East Central — Hajipur; South Western — Hubballi.","Also: South East Central — Bilaspur; West Central — Jabalpur; North Central — Prayagraj; North Western — Jaipur.","Factories: ICF Chennai (coaches, Vande Bharat), CLW Chittaranjan, BLW Varanasi, RCF Kapurthala, MCF Raebareli."]},

{id:"T6", heat:3, title:"Railway milestones and records", hi:"रेलवे के ऐतिहासिक पड़ाव और रिकॉर्ड", blocks:[
  {k:"hot", h:"Always asked: <b>first passenger train — 16 April 1853</b>, Bori Bunder to Thane (34 km). Then the <b>first electric train (1925)</b>, <b>Kolkata Metro (1984)</b>, <b>Vande Bharat (2019)</b>, the <b>longest platform</b> (Hubballi) and the <b>UNESCO mountain railways</b>."},
  {k:"story", h:"<p>On <b>16 April 1853</b> a train pulled by three engines — Sahib, Sultan and Sindh — ran <b>34 km</b> from <b>Bori Bunder (Mumbai) to Thane</b>. The east followed in 1854 (Howrah–Hooghly) and the south in 1856. The first <b>electric</b> train ran from Bombay VT to Kurla in <b>1925</b>. Kolkata opened India's first <b>metro</b> in <b>1984</b>, and in 2024 it ran the first metro <b>under a river</b>, the Hooghly.</p><p>New trains came fast: the <b>Rajdhani</b> (1969), the <b>Shatabdi</b> (1988), and in <b>2019</b> the home-made <b>Vande Bharat Express</b> (New Delhi–Varanasi), built at ICF Chennai. Freight now moves on <b>Dedicated Freight Corridors</b>, the <b>Chenab Bridge</b> carries trains to the Kashmir valley, and India's first <b>bullet train</b> is being built between <b>Mumbai and Ahmedabad</b> with Japanese help.</p>", key:"1853 Bombay–Thane; 1925 first electric; 1984 Kolkata Metro; 2019 Vande Bharat; bullet train Mumbai–Ahmedabad (Japan)."},
  {k:"table", title:"Railway milestones", head:["Milestone","Year","Note"], rows: T6.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Railway records", head:["Record","Where / what","Note"], rows: T6R.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Mountain railways", head:["Railway","State","Note"], rows: T6M.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"New corridors and trains (as of October 2026)", rows:[
    ["Eastern Dedicated Freight Corridor","Ludhiana (Sahnewal) to Sonnagar (Bihar), about 1,337 km — fully running"],
    ["Western Dedicated Freight Corridor","Dadri (UP) to JNPT (Navi Mumbai), about 1,506 km"],
    ["DFCs are built by","DFCCIL (Dedicated Freight Corridor Corporation of India Ltd), set up in 2006"],
    ["Bullet train (MAHSR)","Mumbai–Ahmedabad, 508 km; foundation stone 2017 (Modi and Shinzo Abe); run by NHSRCL; under construction"],
    ["Namo Bharat","Delhi–Meerut regional rapid rail (RRTS) — India's first, run by NCRTC"],
    ["Udhampur–Srinagar–Baramulla line","Completed in 2025 with the Chenab and Anji Khad bridges"],
    ["Mission Raftaar / Kavach","Kavach is India's home-made train-collision safety system"]
  ]},
  {k:"trick", h:"<b>“53 Thane, 54 Howrah, 56 Madras”</b> — west, east, south in four years. Metro chain: <b>“84 Kolkata, 02 Delhi, 24 under the river”</b>. UNESCO hill trains in order: <b>“D-N-K” = Darjeeling 99, Nilgiri 05, Kalka 08</b>."},
  {k:"trap", h:"The first <b>goods</b> train ran at <b>Roorkee</b> in 1851, but the first <b>passenger</b> train was Bombay–Thane in <b>1853</b>. The first Vande Bharat ran <b>New Delhi–Varanasi</b>, not Delhi–Katra (that was the second). The <b>Matheran</b> railway is not yet a UNESCO site."}
], sum:["First passenger train: 16 April 1853, Bori Bunder (Mumbai) to Thane, 34 km.","First electric train 1925 (Bombay VT–Kurla); first metro Kolkata 1984; Delhi Metro 2002; underwater metro Kolkata 2024.","Vande Bharat began in 2019 (New Delhi–Varanasi), built at ICF Chennai.","Longest platform Hubballi; highest rail arch bridge Chenab (J&K); first vertical-lift sea bridge New Pamban.","UNESCO railways: Darjeeling (1999), Nilgiri (2005), Kalka–Shimla (2008); bullet train: Mumbai–Ahmedabad."]}
);

pairQs("T5", T5, { q: t => `The headquarters of the ${t} is at:`, rq: a => `${a} is the headquarters of which railway zone?` });
pairQs("T5", T5U, { q: t => `The ${t} is at:`, rq: a => `Which railway factory is at ${a}?` });
pairQs("T6", T6, { q: t => `${t} — in which year?`, rq: a => `Which railway milestone came in ${a}?` });
pairQs("T6", T6R, { q: t => `${t}:`, rq: a => `${a} is known for which record?` });
pairQs("T6", T6M, { q: t => `The ${t} is in which state?`, rq: a => `Which mountain railway is in ${a}?` });

QB.push(
["T5","Gorakhpur is the headquarters of ____ Railway of India.",["North Eastern","Northern","Eastern","Western"],"Gorakhpur (UP) — not the Northeast Frontier Railway, which is at Maligaon.","p","","","SSC MTS · 3 May 2023 (Shift 2)"],
["T5","How many zones does Indian Railways have, counting Metro Railway Kolkata (as of 2025)?",["17","16","18","19"],"South Coast Railway (Visakhapatnam) was announced in 2019 as the 18th.","p"],
["T5","The Railway Board was set up in:",["1905","1853","1925","1951"],"It runs Indian Railways under the Ministry of Railways.",""],
["T5","Which railway zone was among the first three formed in 1951?",["Southern Railway","East Coast Railway","North Western Railway","South Western Railway"],"Southern, Central and Western came first.",""],
["T5","The Diesel Locomotive Works at Varanasi was renamed in 2020 as the:",["Banaras Locomotive Works","Kashi Rail Works","Ganga Locomotive Works","Varanasi Engine Works"],"It now makes electric engines too.",""],
["T6","India's first passenger train ran on 16 April 1853 from Bori Bunder to:",["Thane","Kalyan","Pune","Surat"],"34 km, pulled by three engines.","p"],
["T6","Which three engines pulled India's first passenger train?",["Sahib, Sultan and Sindh","Fairy Queen, Sultan and Sahib","Sindh, Hind and Bharat","Sahib, Rajah and Queen"],"16 April 1853.",""],
["T6","India's first Vande Bharat Express ran between:",["New Delhi and Varanasi","New Delhi and Katra","Mumbai and Gandhinagar","Chennai and Mysuru"],"Flagged off on 15 February 2019.","p"],
["T6","Vande Bharat trains were first built at:",["Integral Coach Factory, Chennai","Rail Coach Factory, Kapurthala","Modern Coach Factory, Raebareli","Chittaranjan Locomotive Works"],"First called 'Train 18'.","p"],
["T6","India's first bullet train project uses technology from:",["Japan","France","China","Germany"],"The Shinkansen; Mumbai–Ahmedabad, 508 km.","p"],
["T6","The Western Dedicated Freight Corridor runs from Dadri to:",["JNPT (Navi Mumbai)","Kandla","Ludhiana","Sonnagar"],"The Eastern DFC runs from Ludhiana to Sonnagar.",""],
["T6","Which city has India's first metro to run under a river?",["Kolkata","Mumbai","Delhi","Kochi"],"Under the Hooghly, opened in 2024.","p"],
["T6","Kavach, often in the news, is Indian Railways':",["Automatic train-collision protection system","High-speed coach design","Freight booking app","Rail-track welding method"],"Home-made, by RDSO.",""]
);

LASTMOMENT.push(
{t:"Tricky railway HQs", era:["it"], rows:[["North Eastern","Gorakhpur"],["Northeast Frontier","Maligaon"],["East Central","Hajipur"],["East Coast","Bhubaneswar"],["South Western","Hubballi"],["South East Central","Bilaspur"],["West Central","Jabalpur"],["North Central","Prayagraj"]]},
{t:"Railway years", era:["it"], rows:[["First passenger train","1853"],["First electric train","1925"],["Zones begin","1951"],["Rajdhani","1969"],["Kolkata Metro","1984"],["Shatabdi","1988"],["Vande Bharat","2019"],["Underwater metro","2024"]]}
);
TILES.push(["1853","First passenger train","it"],["17","Railway zones","it"],["1984","Kolkata Metro","it"],["2019","First Vande Bharat","it"]);

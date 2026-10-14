/* Part 3 · R9 agricultural institutions, boards and research institutes; R10 schemes, MSP, farm terms and the International Year of Millets (as of October 2026). */
const R9 = [
  ["ICAR (Indian Council of Agricultural Research)","New Delhi","","p"],
  ["NABARD","Mumbai","","p"],
  ["Food Corporation of India (FCI)","New Delhi","","p"],
  ["National Dairy Development Board (NDDB)","Anand","Gujarat.","p"],
  ["Amul (GCMMF)","Anand","",""],
  ["MPEDA (marine products exports)","Kochi","",""],
  ["Spices Board","Kochi","","p"],
  ["Coconut Development Board","Kochi","",""],
  ["Coffee Board","Bengaluru","","p"],
  ["Central Silk Board","Bengaluru","",""],
  ["Tea Board","Kolkata","","p"],
  ["Jute Corporation of India","Kolkata","",""],
  ["Rubber Board","Kottayam","","p"],
  ["Tobacco Board","Guntur","",""],
  ["National Fisheries Development Board","Hyderabad","",""],
  ["ICRISAT (semi-arid tropics crops)","Patancheru (Hyderabad)","International institute for millets, pulses and groundnut.","p"],
  ["FAO (Food and Agriculture Organization)","Rome","","p"],
  ["IRRI (International Rice Research Institute)","Los Baños (Philippines)","",""],
  ["CIMMYT (maize and wheat centre)","Mexico","Where Borlaug bred his wheat.",""]
];
const R9Y = [
  ["ICAR","1929","Set up on 16 July 1929 as the Imperial Council of Agricultural Research.","p"],
  ["NABARD","1982","12 July 1982, on the B. Sivaraman Committee's advice.","p"],
  ["Food Corporation of India","1965","Under the Food Corporations Act, 1964.","p"],
  ["NAFED","1958","Set up on 2 October 1958.",""],
  ["APEDA","1986","Under the APEDA Act, 1985.",""],
  ["MPEDA","1972","",""],
  ["FAO","1945","16 October 1945 — now World Food Day.","p"],
  ["IARI (Pusa Institute)","1905","Started at Pusa, Bihar; moved to Delhi in 1936.","p"]
];
const R9R = [
  ["Indian Agricultural Research Institute (IARI)","New Delhi","Called the Pusa Institute.","p"],
  ["National Rice Research Institute","Cuttack","",""],
  ["Indian Institute of Rice Research","Hyderabad","",""],
  ["Indian Institute of Wheat and Barley Research","Karnal","",""],
  ["National Dairy Research Institute","Karnal","","p"],
  ["Central Soil Salinity Research Institute","Karnal","",""],
  ["Indian Institute of Millets Research","Hyderabad","A Global Centre of Excellence on millets.",""],
  ["Indian Institute of Pulses Research","Kanpur","",""],
  ["Indian Institute of Sugarcane Research","Lucknow","",""],
  ["Sugarcane Breeding Institute","Coimbatore","",""],
  ["Central Institute for Cotton Research","Nagpur","",""],
  ["Central Potato Research Institute","Shimla","","p"],
  ["Indian Veterinary Research Institute","Izatnagar (Bareilly)","",""],
  ["Central Arid Zone Research Institute","Jodhpur","","p"],
  ["Central Institute for Research on Goats","Makhdoom (Mathura)","",""],
  ["Central Sheep and Wool Research Institute","Avikanagar (Rajasthan)","",""],
  ["Central Institute for Research on Buffaloes","Hisar","",""],
  ["Central Plantation Crops Research Institute","Kasaragod","",""],
  ["Indian Institute of Spices Research","Kozhikode","",""],
  ["Central Tuber Crops Research Institute","Thiruvananthapuram","",""],
  ["Indian Institute of Horticultural Research","Bengaluru","",""],
  ["Indian Institute of Soil Science","Bhopal","",""],
  ["Central Marine Fisheries Research Institute","Kochi","",""],
  ["Central Inland Fisheries Research Institute","Barrackpore","",""],
  ["National Research Centre on Camel","Bikaner","",""]
];
const R10 = [
  ["PM-KISAN","2019","Launched at Gorakhpur on 24 February 2019 (paid from December 2018).","p"],
  ["Pradhan Mantri Fasal Bima Yojana (PMFBY)","2016","","p"],
  ["Soil Health Card scheme","2015","Launched at Suratgarh, Rajasthan, on 19 February 2015.","p"],
  ["e-NAM (National Agriculture Market)","2016","Launched on 14 April 2016.","p"],
  ["Kisan Credit Card","1998","Designed by NABARD on the R. V. Gupta Committee's advice.","p"],
  ["PM Krishi Sinchayee Yojana (PMKSY)","2015","",""],
  ["Paramparagat Krishi Vikas Yojana","2015","",""],
  ["PM Kisan Maan Dhan Yojana","2019","",""],
  ["Agriculture Infrastructure Fund","2020","",""],
  ["PM Matsya Sampada Yojana","2020","",""],
  ["Operation Greens","2018","",""],
  ["Rashtriya Gokul Mission","2014","",""],
  ["National Food Security Mission","2007","",""]
];
const R10P = [
  ["PM-KISAN","₹6,000 a year income support in three instalments","Paid straight to farmers' bank accounts; 100% central funding.","p"],
  ["PMFBY","Crop insurance at a low premium","Farmers pay 2% (kharif), 1.5% (rabi), 5% (commercial and horticultural crops).","p"],
  ["Soil Health Card","A report of soil nutrients with fertiliser advice","Slogan: 'Swasth Dhara, Khet Hara'.","p"],
  ["e-NAM","An online trading platform linking APMC mandis","Run by the Small Farmers' Agribusiness Consortium (SFAC).","p"],
  ["Kisan Credit Card","Short-term crop loans on easy terms","Extended to animal husbandry and fisheries in 2018–19.","p"],
  ["PMKSY","Irrigation — 'Har Khet Ko Pani', 'Per Drop More Crop'","","p"],
  ["Paramparagat Krishi Vikas Yojana","Organic farming in clusters","",""],
  ["PM-KUSUM","Solar pumps and solar power for farmers","",""],
  ["PM Kisan Maan Dhan","₹3,000 a month pension after age 60","For small and marginal farmers.",""],
  ["Operation Greens","Steady prices of tomato, onion and potato","Called 'TOP'.",""],
  ["PM-AASHA","Price support for pulses and oilseeds","",""]
];
const R10T = [
  ["Minimum Support Price (MSP)","Price at which the government buys a crop, fixed before sowing","Recommended by the CACP; approved by the Cabinet Committee on Economic Affairs.","p"],
  ["Fair and Remunerative Price (FRP)","Price sugar mills must pay for sugarcane","",""],
  ["Buffer stock","Foodgrain reserve kept by the government through the FCI","Used for the PDS and in shortages.","p"],
  ["Hydroponics","Growing plants without soil, in nutrient-rich water","","p"],
  ["Aeroponics","Growing plants with roots hanging in air, sprayed with nutrient mist","",""],
  ["Aquaponics","Fish farming and soil-less crops together","Fish waste feeds the plants.",""],
  ["Organic farming","Farming without chemical fertilisers or pesticides","Sikkim became India's first fully organic state (2016).","p"],
  ["Crop rotation","Growing different crops one after another on the same land","Keeps the soil fertile.","p"],
  ["Mixed cropping","Growing two or more crops together in the same field","",""],
  ["Green manure","Ploughing young green plants back into the soil","",""],
  ["Agmark","Quality certification mark for farm produce","Under the Agricultural Produce (Grading and Marking) Act, 1937.","p"],
  ["Zero Budget Natural Farming","Farming with almost no bought inputs (Subhash Palekar)","",""]
];

LESSONS.push(
{id:"R9", heat:2, title:"Agricultural institutions and research institutes", hi:"कृषि संस्थान और अनुसंधान केंद्र", blocks:[
  {k:"hot", h:"Asked: <b>headquarters</b> (NABARD — Mumbai, NDDB — Anand, Tea Board — Kolkata, Coffee Board — Bengaluru, Rubber Board — Kottayam, Spices Board — Kochi) and <b>founding years</b> (ICAR 1929, NABARD 1982, FCI 1965)."},
  {k:"story", h:"<p>The <b>ICAR</b>, set up in 1929, is the apex body for farm research and education; it runs more than a hundred institutes, such as the <b>IARI (Pusa Institute)</b> in New Delhi, which began at Pusa in Bihar in 1905. <b>NABARD</b> (1982, Mumbai) is the apex bank for rural credit. The <b>Food Corporation of India</b> (1965) buys grain at MSP, stores the buffer stock and supplies the PDS.</p><p>The <b>CACP</b> (1965, as the Agricultural Prices Commission) recommends the MSP. <b>NAFED</b> (1958) runs cooperative marketing; <b>APEDA</b> (1986) promotes farm exports. Each plantation crop has a board: Tea — <b>Kolkata</b>, Coffee — <b>Bengaluru</b>, Rubber — <b>Kottayam</b>, Spices — <b>Kochi</b>. Abroad, the <b>FAO</b> sits in Rome and the <b>IRRI</b> in the Philippines.</p>", key:"ICAR 1929 Delhi; NABARD 1982 Mumbai; FCI 1965; CACP → MSP; NDDB Anand; Tea Kolkata, Coffee Bengaluru, Rubber Kottayam, Spices Kochi."},
  {k:"table", title:"Headquarters", head:["Body","Headquarters","Note"], rows: R9.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Year set up", head:["Body","Year","Note"], rows: R9Y.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"ICAR research institutes", head:["Institute","Location","Note"], rows: R9R.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Boards by crop region: <b>Tea → Kolkata</b> (Assam/Bengal tea), <b>Coffee → Bengaluru</b> (Karnataka coffee), <b>Rubber → Kottayam</b>, <b>Spices and Coconut → Kochi</b> (Kerala). Karnal's trio: <b>“Wheat, Dairy, Salt”</b>."},
  {k:"trap", h:"<b>NABARD</b> is in <b>Mumbai</b>, but <b>NAFED, APEDA, FCI and ICAR</b> are in <b>New Delhi</b>. The <b>NRRI</b> (rice) is at <b>Cuttack</b>, while the <b>IIRR</b> is at Hyderabad. <b>ICRISAT</b> is in Hyderabad, <b>IRRI</b> in the Philippines."}
], sum:["ICAR (1929, New Delhi) is the apex body for farm research; IARI is the Pusa Institute.","NABARD (1982) is in Mumbai; FCI (1965) runs procurement and the buffer stock.","CACP recommends MSP; NAFED (1958) and APEDA (1986) handle marketing and exports.","Tea Board Kolkata, Coffee Board Bengaluru, Rubber Board Kottayam, Spices Board Kochi.","NRRI Cuttack, NDRI Karnal, CPRI Shimla, CAZRI Jodhpur, IIMR Hyderabad."]},

{id:"R10", heat:3, title:"Schemes, MSP, farm terms and the Year of Millets", hi:"योजनाएँ, एमएसपी, कृषि शब्दावली और मिलेट्स वर्ष", blocks:[
  {k:"hot", h:"Asked every year: <b>PM-KISAN</b> (₹6,000 a year, 2019), <b>PMFBY</b> (crop insurance, 2016), <b>Soil Health Card</b> (2015), <b>e-NAM</b> (2016), <b>who recommends MSP</b> (CACP), <b>hydroponics</b>, and the <b>International Year of Millets 2023</b>."},
  {k:"story", h:"<p>Before each season the <b>CACP</b> recommends a <b>Minimum Support Price</b> for 22 crops and the Cabinet approves it; sugarcane gets a <b>Fair and Remunerative Price</b> instead. The FCI buys at MSP and keeps a <b>buffer stock</b>. Since 2019, <b>PM-KISAN</b> pays farmers ₹6,000 a year in three instalments, <b>PMFBY</b> insures crops at a small premium, the <b>Soil Health Card</b> tells farmers what nutrients their soil needs, and <b>e-NAM</b> lets them sell online across mandis.</p><p>At India's proposal, the UN declared <b>2023 the International Year of Millets</b>. India had already marked 2018 as its National Year of Millets, and the 2023–24 Budget called millets <b>'Shree Anna'</b>. Hyderabad's Indian Institute of Millets Research became a Global Centre of Excellence.</p>", key:"CACP → MSP; PM-KISAN ₹6,000 (2019); PMFBY 2016; Soil Health Card 2015; e-NAM 2016; Millets Year 2023 (India's proposal)."},
  {k:"table", title:"When each scheme began", head:["Scheme","Year","Note"], rows: R10.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"What each scheme gives", head:["Scheme","What it does","Note"], rows: R10P.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Farm terms", head:["Term","Meaning","Note"], rows: R10T.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Years and days to remember", rows:[
    ["International Year of Millets","2023 — proposed by India, declared by the UN General Assembly in 2021"],
    ["International Year of Pulses","2016"],
    ["2026 (UN years)","International Year of the Woman Farmer; International Year of Rangelands and Pastoralists"],
    ["World Food Day","16 October — FAO's founding day"],
    ["Kisan Diwas (National Farmers' Day)","23 December — Chaudhary Charan Singh's birthday"],
    ["World Soil Day","5 December"],
    ["World Pulses Day","10 February"],
    ["National Agricultural Education Day","3 December — Dr Rajendra Prasad's birthday"]
  ]},
  {k:"trick", h:"Scheme years in order: <b>KCC 98 → Soil Card 15 → PMKSY 15 → Fasal Bima 16 → e-NAM 16 → KISAN 19</b>. Think <b>“Credit, Soil, Water, Insurance, Market, Cash”</b>."},
  {k:"trap", h:"The <b>CACP recommends</b> the MSP but the <b>Cabinet (CCEA) decides</b> it. Sugarcane has an <b>FRP</b>, not an MSP. <b>Hydroponics</b> uses water, <b>aeroponics</b> air mist. 2023 was the Year of <b>Millets</b>; 2016 was <b>Pulses</b>."}
], sum:["CACP recommends MSP for 22 crops; the CCEA approves it; sugarcane has an FRP.","PM-KISAN (2019) gives ₹6,000 a year in three instalments of ₹2,000.","PMFBY (2016) crop insurance; Soil Health Card (2015); e-NAM (2016); KCC (1998).","Hydroponics grows plants in nutrient water without soil; Sikkim is the first fully organic state.","The UN declared 2023 the International Year of Millets on India's proposal; millets = Shree Anna."]}
);

pairQs("R9", R9, { q: t => `The headquarters of the ${t} is in:`, rq: a => `Which of these is headquartered in ${a}?`, extra: ["Chennai","Pune"] });
pairQs("R9", R9Y, { q: t => `In which year was the ${t} set up?`, rq: a => `Which body was set up in ${a}?` });
pairQs("R9", R9R, { q: t => `The ${t} is located in:`});
pairQs("R10", R10, { q: t => `${t} was launched in:`, extra: ["2017","2021"] });
pairQs("R10", R10P, { q: t => `What does ${t} provide?`, rq: a => `Which scheme provides: ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("R10", R10T, { q: t => `In agriculture, '${t}' means:`, rq: a => `Which term means: ${a.charAt(0).toLowerCase() + a.slice(1)}?` });

QB.push(
["R9","The Minimum Support Price is recommended by the:",["Commission for Agricultural Costs and Prices","Food Corporation of India","NABARD","NITI Aayog"],"The CACP; the Cabinet then approves it.","p"],
["R9","NABARD was set up on the advice of the:",["B. Sivaraman Committee","Narasimham Committee","R. V. Gupta Committee","Swaminathan Commission"],"In 1982.","p"],
["R9","ICAR works under which ministry?",["Agriculture and Farmers Welfare","Rural Development","Science and Technology","Food Processing"],"Through the Department of Agricultural Research and Education (DARE).",""],
["R9","Which body buys foodgrains at MSP and keeps the central buffer stock?",["Food Corporation of India","NAFED","APEDA","CACP"],"Set up in 1965.","p"],
["R9","The IARI is popularly called the:",["Pusa Institute","Anand Institute","Karnal Institute","Imperial Institute"],"It began at Pusa, Bihar, in 1905.","p"],
["R10","The International Year of Millets was:",["2023","2018","2016","2025"],"Declared by the UN at India's proposal.","p"],
["R10","India observed its National Year of Millets in:",["2018","2023","2016","2020"],"Millets were notified as 'nutri-cereals' the same year.",""],
["R10","Under PM-KISAN, each instalment paid to a farmer is:",["₹2,000","₹6,000","₹3,000","₹1,000"],"Three instalments make ₹6,000 a year.","p"],
["R10","Under PMFBY, the farmer's premium for rabi food crops is:",["1.5%","2%","5%","10%"],"2% for kharif, 5% for commercial and horticultural crops.","p"],
["R10","Which was India's first fully organic state?",["Sikkim","Kerala","Meghalaya","Himachal Pradesh"],"Declared in January 2016.","p"],
["R10","World Food Day is observed on:",["16 October","5 December","23 December","5 June"],"The FAO's founding day in 1945.","p"],
["R10","Kisan Diwas (23 December) marks the birthday of:",["Chaudhary Charan Singh","Lal Bahadur Shastri","M. S. Swaminathan","Sardar Patel"],"Former Prime Minister and farmers' leader.","p"],
["R10","The slogan 'Jai Jawan Jai Kisan' was given by:",["Lal Bahadur Shastri","Jawaharlal Nehru","Indira Gandhi","Atal Bihari Vajpayee"],"In 1965.","p"],
["R10","Millets were named 'Shree Anna' in:",["The Union Budget 2023–24","The Budget 2018–19","The National Food Security Act","PM-KISAN guidelines"],"Announced by the Finance Minister in February 2023.",""]
);

LASTMOMENT.push(
{t:"Bodies", era:["ag"], rows:[["ICAR","1929 · New Delhi"],["NABARD","1982 · Mumbai"],["FCI","1965 · buffer stock"],["CACP","recommends MSP"],["NDDB","Anand"],["Tea / Coffee Board","Kolkata / Bengaluru"],["Rubber / Spices Board","Kottayam / Kochi"]]},
{t:"Schemes", era:["ag"], rows:[["KCC","1998"],["Soil Health Card","2015"],["PMKSY","2015"],["PMFBY","2016"],["e-NAM","2016"],["PM-KISAN","2019 · ₹6,000"],["Year of Millets","2023"]]}
);
TILES.push(["1929","ICAR set up","ag"],["1982","NABARD","ag"],["₹6,000","PM-KISAN a year","ag"],["2023","Year of Millets","ag"]);

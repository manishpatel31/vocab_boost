/* Part 2 · R6 the east-flowing peninsular rivers; R7 the west-flowing rivers (as of October 2026). */
const R6 = [
  ["Seonath","Mahanadi","The Mahanadi's longest tributary (Chhattisgarh).",""],
  ["Hasdeo","Mahanadi","",""],
  ["Ib","Mahanadi","It joins at the Hirakud reservoir.",""],
  ["Tel","Mahanadi","",""],
  ["Manjira","Godavari","",""],
  ["Penganga","Godavari","",""],
  ["Wainganga","Godavari","With the Wardha it forms the Pranhita.","p"],
  ["Pranhita","Godavari","Its largest tributary — the Wardha, Wainganga and Penganga together.","p"],
  ["Indravati","Godavari","Chitrakote Falls is on it (Chhattisgarh).","p"],
  ["Sabari","Godavari","",""],
  ["Koyna","Krishna","Koyna Dam; a known earthquake zone.","p"],
  ["Ghataprabha","Krishna","Gokak Falls is on it.",""],
  ["Malaprabha","Krishna","",""],
  ["Bhima","Krishna","Pandharpur stands on it.","p"],
  ["Tungabhadra","Krishna","Formed where the Tunga and the Bhadra meet at Koodli; Hampi stands on it.","p"],
  ["Musi","Krishna","Hyderabad stands on it.","p"],
  ["Hemavati","Kaveri","",""],
  ["Kabini","Kaveri","From Wayanad (Kerala).","p"],
  ["Bhavani","Kaveri","",""],
  ["Amaravati","Kaveri","",""]
];
const R6P = [
  ["Sambalpur and Cuttack","Mahanadi","Cuttack stands where the Mahanadi divides into its delta.","p"],
  ["Nashik","Godavari","A Kumbh Mela city.","p"],
  ["Nanded","Godavari","",""],
  ["Rajamahendravaram (Rajahmundry)","Godavari","At the head of the Godavari delta.",""],
  ["Vijayawada","Krishna","The Prakasam Barrage is here.","p"],
  ["Sangli","Krishna","",""],
  ["Srirangapatna","Kaveri","A river island; Tipu Sultan's capital.","p"],
  ["Tiruchirappalli and Srirangam","Kaveri","",""],
  ["Thanjavur (delta)","Kaveri","The 'rice bowl of Tamil Nadu'.",""],
  ["Madurai","Vaigai","","p"],
  ["Nellore","Pennar","",""],
  ["Jamshedpur","Subarnarekha","",""],
  ["Rourkela (Vedvyas)","Brahmani","The Brahmani forms here where the South Koel and Sankh meet.",""]
];
const R7 = [
  ["Narmada","Gulf of Khambhat, at Bharuch","An estuary, not a delta.","p"],
  ["Tapi","Gulf of Khambhat, near Surat","","p"],
  ["Sabarmati","Gulf of Khambhat","Ahmedabad and the Gandhi Ashram stand on it.","p"],
  ["Mahi","Gulf of Khambhat","It crosses the Tropic of Cancer twice.","p"],
  ["Luni","Rann of Kutch","It never reaches the sea; salty after Balotra.","p"],
  ["Mandovi","Arabian Sea at Panaji","Dudhsagar Falls is on it.",""],
  ["Zuari","Arabian Sea near Mormugao","",""],
  ["Sharavathi","Arabian Sea at Honnavar","Jog Falls is on it.","p"],
  ["Netravati","Arabian Sea at Mangaluru","",""],
  ["Periyar","Arabian Sea near Kochi","The longest river of Kerala.","p"],
  ["Bharathapuzha","Arabian Sea at Ponnani","Also called the Nila — Kerala's second-longest river.",""]
];
const R7F = [
  ["Flows through a rift valley between the Vindhyas and the Satpuras","Narmada","","p"],
  ["Flows through a rift valley between the Satpuras and the Satmala–Ajanta hills","Tapi","","p"],
  ["Dhuandhar Falls and the Marble Rocks of Bhedaghat (Jabalpur)","Narmada","","p"],
  ["Omkareshwar and Maheshwar","Narmada","",""],
  ["Sardar Sarovar Dam and the Statue of Unity (Kevadia)","Narmada","","p"],
  ["Surat and the Ukai Dam","Tapi","",""],
  ["Ahmedabad","Sabarmati","",""],
  ["Crosses the Tropic of Cancer twice","Mahi","","p"],
  ["Jog Falls","Sharavathi","",""],
  ["Idukki Arch Dam","Periyar","",""]
];

LESSONS.push(
{id:"R6", heat:3, title:"The east-flowing peninsular rivers", hi:"पूर्व की ओर बहने वाली प्रायद्वीपीय नदियाँ", blocks:[
  {k:"hot", h:"Most asked: <b>which tributary goes to which river</b> (Indravati, Pranhita → Godavari; Bhima, Tungabhadra, Koyna → Krishna; Kabini → Kaveri), <b>cities</b> (Nashik, Vijayawada, Cuttack, Srirangapatna, Madurai), and <b>Godavari = Dakshin Ganga</b>."},
  {k:"story", h:"<p>The Deccan tilts gently to the east, so most peninsular rivers rise in the <b>Western Ghats</b>, close to the Arabian Sea, and yet flow all the way across to the <b>Bay of Bengal</b>. Slow on the flat coastal plain, they drop their silt and build fertile <b>deltas</b> — the Mahanadi, the Krishna–Godavari and the Kaveri deltas are India's rice bowls.</p><p>The <b>Mahanadi</b> (Chhattisgarh and Odisha) is held back by the <b>Hirakud Dam</b>. The <b>Godavari</b>, the longest, gathers the Pranhita and Indravati. The <b>Krishna</b> takes the Bhima and Tungabhadra. The <b>Kaveri</b>, shared by Karnataka and Tamil Nadu, falls at <b>Shivanasamudra</b> — home of Asia's first hydroelectric plant (1902).</p>"},
  {k:"table", title:"Tributaries and their main river", head:["Tributary","Main river","Note"], rows: R6.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Places on the east-flowing rivers", head:["Place","River","Note"], rows: R6P.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"The big four in short", rows:[
    ["Mahanadi","Sihawa (Chhattisgarh) → Odisha; Hirakud Dam; delta at Cuttack"],
    ["Godavari","Trimbakeshwar → Andhra Pradesh; the longest (1,465 km) and the largest basin in the peninsula; Polavaram project"],
    ["Krishna","Mahabaleshwar → Andhra Pradesh; Srisailam and Nagarjuna Sagar dams"],
    ["Kaveri","Talakaveri → Tamil Nadu; Krishnaraja Sagar and Mettur dams; Shivanasamudra and Hogenakkal falls"],
    ["Smaller ones","Subarnarekha, Brahmani, Pennar, Palar, Vaigai"]]},
  {k:"trick", h:"Godavari's family — <b>“Pran-Indra-Sab”</b>: <b>Pran</b>hita (Wardha + Wainganga + Penganga), <b>Indra</b>vati, <b>Sab</b>ari. Krishna's — <b>“Bhima Tunga Koyna”</b>. Kaveri's — <b>“Kabini Bhavani Hemavati”</b>."},
  {k:"trap", h:"The <b>Tungabhadra</b> joins the <b>Krishna</b>, not the Kaveri. <b>Hyderabad</b> is on the <b>Musi</b>, a Krishna tributary — not on the Godavari. The <b>Brahmani</b> is formed by the South Koel and Sankh near Rourkela."}
], sum:["Most peninsular rivers rise in the Western Ghats and flow east to the Bay of Bengal, building deltas.","Godavari: longest peninsular river; tributaries Pranhita, Indravati, Sabari, Manjira.","Krishna: tributaries Bhima, Tungabhadra, Koyna, Musi; Vijayawada (Prakasam Barrage).","Kaveri: Talakaveri; Kabini, Hemavati, Bhavani; Srirangapatna, Tiruchirappalli; Shivanasamudra (1902).","Mahanadi: Sihawa → Hirakud → Cuttack delta."]},

{id:"R7", heat:3, title:"The west-flowing rivers", hi:"पश्चिम की ओर बहने वाली नदियाँ", blocks:[
  {k:"hot", h:"Most asked: <b>Narmada and Tapi in rift valleys</b>, <b>estuaries not deltas</b>, <b>Mahi crosses the Tropic of Cancer twice</b>, the <b>Luni</b> ending in the Rann of Kutch, <b>Jog Falls</b> on the Sharavathi and <b>Periyar</b>, Kerala's longest river."},
  {k:"story", h:"<p>The <b>Narmada</b> and the <b>Tapi</b> do not follow the tilt of the Deccan. They flow west along <b>rift valleys</b> — long troughs where the land sank between faults: the Narmada between the <b>Vindhyas and Satpuras</b>, the Tapi south of the Satpuras. They carry little silt and meet the sea in tidal <b>estuaries</b> at Bharuch and Surat instead of deltas.</p><p>From Gujarat come the <b>Sabarmati</b> and <b>Mahi</b>; from the Aravallis the <b>Luni</b>, which dies in the <b>Rann of Kutch</b>. The many short, swift rivers of the Western Ghats — the Mandovi, Sharavathi, Netravati, Periyar — race down to the Arabian Sea in a few dozen kilometres, making waterfalls like <b>Jog</b> and <b>Dudhsagar</b>.</p>"},
  {k:"table", title:"Where the west-flowing rivers end", head:["River","Ends in","Note"], rows: R7.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Narmada, Tapi and the west coast", head:["Feature","River","Note"], rows: R7F.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Narmada in short", rows:[
    ["Length","About 1,312 km — the longest west-flowing river"],
    ["Source → mouth","Amarkantak (MP) → Gulf of Khambhat at Bharuch (Gujarat)"],
    ["Through","Madhya Pradesh, Maharashtra (border), Gujarat"],
    ["Big dams","Indira Sagar (MP), Sardar Sarovar (Gujarat)"],
    ["Movement","Narmada Bachao Andolan (Medha Patkar) against Sardar Sarovar's displacement"]]},
  {k:"trick", h:"West-flowers into the Gulf of Khambhat — <b>“NT SaM”</b>: <b>N</b>armada, <b>T</b>api, <b>Sa</b>barmati, <b>M</b>ahi. Every one of them ends in an <b>estuary</b>."},
  {k:"trap", h:"The <b>Narmada and Tapi</b> flow west but rise in central India — they are <b>not</b> Western Ghats rivers. The <b>Luni</b> does not reach the sea. <b>Jog Falls</b> is on the <b>Sharavathi</b>, not the Kaveri."}
], sum:["Narmada (Vindhya–Satpura rift) and Tapi (south of the Satpuras) flow west in rift valleys and end in estuaries.","Narmada, Tapi, Sabarmati and Mahi all reach the Gulf of Khambhat.","Mahi crosses the Tropic of Cancer twice; the Luni ends in the Rann of Kutch.","Short Western Ghats rivers: Mandovi (Dudhsagar), Sharavathi (Jog Falls), Netravati, Periyar (longest in Kerala).","Narmada: Dhuandhar Falls at Bhedaghat; Indira Sagar and Sardar Sarovar dams."]}
);

pairQs("R6", R6, { q: t => `The ${t} is a tributary of which river?`, extra: ["Mahanadi","Pennar"] });
pairQs("R6", R6P, { q: t => `${t} — on which river?`, extra: ["Godavari","Krishna"] });
pairQs("R7", R7, { q: t => `Where does the ${t} end?`, rq: a => `Which river ends here: ${a}?` });
pairQs("R7", R7F, { q: t => `${t} — which river?`, extra: ["Godavari","Kaveri"] });

QB.push(
["R6","Which river is called the Dakshin Ganga?",["Godavari","Kaveri","Krishna","Mahanadi"],"Also Vriddha Ganga.","p"],
["R6","The Hirakud Dam is on the:",["Mahanadi","Godavari","Brahmani","Subarnarekha"],"Near Sambalpur, Odisha — one of the longest earthen dams.","p"],
["R6","Asia's first hydroelectric power station (1902) was at:",["Shivanasamudra, on the Kaveri","Jog Falls","Bhakra","Hogenakkal"],"","p"],
["R6","Where do the Tunga and the Bhadra meet to form the Tungabhadra?",["Koodli","Hampi","Kurnool","Hosapete"],"Near Shivamogga, Karnataka.",""],
["R6","The Brahmani is formed by which two rivers?",["South Koel and Sankh","Tunga and Bhadra","Wardha and Wainganga","Dibang and Lohit"],"They meet at Vedvyas near Rourkela.",""],
["R6","Which river divides into a delta at Cuttack?",["Mahanadi","Brahmani","Godavari","Subarnarekha"],"",""],
["R6","The Wardha, Wainganga and Penganga together form the:",["Pranhita","Indravati","Manjira","Sabari"],"The Pranhita is the Godavari's largest tributary.",""],
["R7","The Narmada flows between which two ranges?",["Vindhya and Satpura","Satpura and Ajanta","Aravalli and Vindhya","Western Ghats and Satpura"],"In a rift valley.","p"],
["R7","Why do the Narmada and Tapi form estuaries rather than deltas?",["They flow fast through rift valleys and carry little silt into tidal seas","They flow into the Bay of Bengal","They are seasonal rivers","They have no tributaries"],"",""],
["R7","Which river crosses the Tropic of Cancer twice?",["Mahi","Narmada","Sabarmati","Tapi"],"","p"],
["R7","Which is the longest river of Kerala?",["Periyar","Bharathapuzha","Pamba","Chaliyar"],"","p"],
["R7","The Dhuandhar Falls is near which city?",["Jabalpur","Mandla","Narmadapuram","Bharuch"],"At Bhedaghat, among the Marble Rocks.",""]
);

LASTMOMENT.push(
{t:"Tributaries", era:["rv"], rows:[["Pranhita, Indravati","Godavari"],["Bhima, Tungabhadra, Koyna, Musi","Krishna"],["Kabini, Hemavati, Bhavani","Kaveri"],["Seonath, Hasdeo, Ib","Mahanadi"]]},
{t:"West-flowing", era:["rv"], rows:[["Narmada","Rift: Vindhya–Satpura"],["Tapi","Rift: south of Satpura"],["Mahi","Tropic of Cancer twice"],["Luni","Rann of Kutch"],["Sharavathi","Jog Falls"]]}
);
TILES.push(["1902","Shivanasamudra — Asia's first hydro plant","rv"],["2","Big west-flowing rivers: Narmada, Tapi","rv"],["1,312 km","Narmada — longest west-flowing","rv"]);

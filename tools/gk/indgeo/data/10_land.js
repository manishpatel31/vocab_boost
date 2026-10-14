/* Part 1 · G1 location, extent and borders; G2 the Himalaya; G3 plains, plateaus and hills; G4 coasts and islands (as of October 2026). */
const G1B = [
  ["Bangladesh","4,096.7 km","India's longest land border; touches West Bengal, Assam, Meghalaya, Tripura and Mizoram.","p"],
  ["China","3,488 km","Touches Ladakh, Himachal Pradesh, Uttarakhand, Sikkim and Arunachal Pradesh.","p"],
  ["Pakistan","3,323 km","Touches Gujarat, Rajasthan, Punjab, Jammu and Kashmir and Ladakh.","p"],
  ["Nepal","1,751 km","Touches Uttarakhand, Uttar Pradesh, Bihar, West Bengal and Sikkim.","p"],
  ["Myanmar","1,643 km","Touches Arunachal Pradesh, Nagaland, Manipur and Mizoram.","p"],
  ["Bhutan","699 km","Touches Sikkim, West Bengal, Assam and Arunachal Pradesh.","p"],
  ["Afghanistan","106 km","India's shortest land border — through Gilgit-Baltistan (PoK), shown in Ladakh on India's map.","p"]
];
const G1S = [
  ["Gujarat","Pakistan","",""],["Rajasthan","Pakistan","Longest border with Pakistan of any state.",""],["Punjab","Pakistan","",""],
  ["Himachal Pradesh","China","Borders Tibet (China).",""],
  ["Uttar Pradesh","Nepal","",""],["Bihar","Nepal","",""],
  ["Meghalaya","Bangladesh","",""],["Tripura","Bangladesh","Surrounded on three sides by Bangladesh.",""],
  ["Nagaland","Myanmar","",""],["Manipur","Myanmar","",""]
];
const G1L = [
  ["Radcliffe Line","India and Pakistan","Drawn by Cyril Radcliffe in 1947; the eastern part is now the India–Bangladesh border.","p|SSC CGL 2022 · 12 Dec 2022 (Shift 2)"],
  ["McMahon Line","India and China","Drawn at the Simla Convention, 1914; runs along Arunachal Pradesh. China does not accept it.","p"],
  ["Durand Line","Pakistan and Afghanistan","Drawn in 1893 by Mortimer Durand between British India and Afghanistan.","p"],
  ["Line of Control (LoC)","India and Pakistan","The ceasefire line in Jammu and Kashmir (1972 Simla Agreement).","",1],
  ["Line of Actual Control (LAC)","India and China","The working boundary in Ladakh and the east.","",1],
  ["Sir Creek","India and Pakistan","A disputed tidal estuary between Kutch (Gujarat) and Sindh.","",1]
];
const G1X = [
  ["Northernmost point (as claimed)","Indira Col","On the Siachen glacier, Ladakh.","p"],
  ["Southernmost point","Indira Point","Great Nicobar Island, about 6°45′N; went under the sea in the 2004 tsunami.","p"],
  ["Southernmost point of the mainland","Kanyakumari","Cape Comorin, Tamil Nadu — where three seas meet.","p"],
  ["Easternmost point","Kibithu","In Arunachal Pradesh, on the Lohit river.","p"],
  ["Westernmost point","Guhar Moti","In Kutch, Gujarat, near Sir Creek.","p"]
];
const G2P = [
  ["Mount Everest","Nepal","8,849 m — the world's highest; Sagarmatha in Nepal.","p"],
  ["K2 (Godwin Austen)","Gilgit-Baltistan (PoK)","8,611 m — India's highest peak as per India's map.","p"],
  ["Kangchenjunga","Sikkim","8,586 m — highest peak in Indian-administered territory; third in the world.","p"],
  ["Nanda Devi","Uttarakhand","7,816 m — highest peak lying wholly inside India.","p"],
  ["Kamet","Uttarakhand","7,756 m.",""],
  ["Trisul","Uttarakhand","",""],
  ["Saltoro Kangri","Ladakh","Near the Siachen glacier.",""],
  ["Saser Kangri","Ladakh","",""],
  ["Nun","Ladakh","Highest peak of the Nun Kun massif in the Zanskar range.",""],
  ["Reo Purgyil","Himachal Pradesh","Highest peak of Himachal Pradesh.",""],
  ["Kangto","Arunachal Pradesh","Highest peak of Arunachal Pradesh.",""],
  ["Saramati","Nagaland","Highest peak of Nagaland (Patkai–Naga hills).",""],
  ["Phawngpui (Blue Mountain)","Mizoram","Highest peak of Mizoram.",""],
  ["Makalu","Nepal","",""],["Dhaulagiri","Nepal","",""],
  ["Namcha Barwa","Tibet (China)","The Brahmaputra takes its great U-turn round it.",""]
];
const G2S = [
  ["Zoji La","Ladakh","Links Srinagar with Leh (Kargil district); Zojila tunnel being built.","p"],
  ["Khardung La","Ladakh","On the road from Leh to the Nubra valley.","p"],
  ["Chang La","Ladakh","On the road from Leh to Pangong Tso.",""],
  ["Karakoram Pass","Ladakh","On the old trade route to Xinjiang.",""],
  ["Banihal Pass","Jammu and Kashmir","Jammu–Srinagar road; Jawahar tunnel.","p"],
  ["Pir Panjal Pass","Jammu and Kashmir","On the Mughal Road.",""],
  ["Rohtang Pass","Himachal Pradesh","Links Kullu with Lahaul–Spiti; Atal Tunnel runs under it.","p"],
  ["Shipki La","Himachal Pradesh","The Sutlej enters India here from Tibet.","p"],
  ["Baralacha La","Himachal Pradesh","On the Manali–Leh road.",""],
  ["Lipulekh","Uttarakhand","Route to Kailash–Mansarovar.","p"],
  ["Mana Pass","Uttarakhand","Near Badrinath.",""],
  ["Niti Pass","Uttarakhand","",""],
  ["Nathu La","Sikkim","On the old silk route to Tibet; border trade with China.","p"],
  ["Jelep La","Sikkim","Links Sikkim with the Chumbi valley of Tibet.",""],
  ["Bomdi La","Arunachal Pradesh","On the way to Tawang.","p"],
  ["Bum La","Arunachal Pradesh","Near Tawang.",""],
  ["Diphu Pass","Arunachal Pradesh","Near the India–China–Myanmar tri-junction.",""],
  ["Pangsau Pass","Arunachal Pradesh","To Myanmar — on the old Stilwell Road.",""]
];
const G2R = [
  ["Karakoram","Trans-Himalaya","Home of K2 and the Siachen glacier.","p"],
  ["Ladakh range","Trans-Himalaya","",""],
  ["Zaskar range","Trans-Himalaya","",""],
  ["Himadri","Greater Himalaya","The highest, snow-covered inner range.","p"],
  ["Pir Panjal","Lesser Himalaya (Himachal)","Longest range of the Lesser Himalaya, in Jammu and Kashmir.","p"],
  ["Dhauladhar","Lesser Himalaya (Himachal)","Above Dharamshala, Himachal Pradesh.","p"],
  ["Mahabharat range","Lesser Himalaya (Himachal)","In Nepal.",""],
  ["Shiwalik","Outer Himalaya","The lowest, youngest range; duns lie behind it.","p"],
  ["Patkai Bum","Purvanchal","Arunachal–Myanmar border.",""],
  ["Naga hills","Purvanchal","",""],
  ["Mizo (Lushai) hills","Purvanchal","",""]
];
const G2D = [
  ["Punjab (Kashmir) Himalaya","Indus and Sutlej","",""],
  ["Kumaon Himalaya","Sutlej and Kali","",""],
  ["Nepal Himalaya","Kali and Teesta","The highest section — Everest, Kangchenjunga.",""],
  ["Assam Himalaya","Teesta and Dihang (Brahmaputra)","",""]
];
const G3W = [
  ["Bhabar","Belt of pebbles at the foot of the Shiwaliks where streams disappear","8–16 km wide.","p"],
  ["Terai","Wet, marshy belt south of the Bhabar where streams re-appear","Thick forest and wildlife.","p"],
  ["Bhangar","Older alluvium, above flood level, with kankar","","p"],
  ["Khadar","Newer alluvium on the flood plains, renewed every year","Very fertile.","p"],
  ["Doab","Land between two rivers","Ganga–Yamuna doab is the best known.",""],
  ["Dun","Long valley between the Lesser Himalaya and the Shiwaliks","Dehradun, Kotli Dun, Patli Dun.",""]
];
const G3P = [
  ["Chotanagpur plateau","Jharkhand","India's 'mineral heartland'.","p"],
  ["Malwa plateau","Madhya Pradesh","Black soil lava plateau.","p"],
  ["Baghelkhand","Madhya Pradesh","",""],
  ["Meghalaya (Shillong) plateau","Meghalaya","Cut off from the main plateau by the Garo–Rajmahal gap.","p"],
  ["Karbi Anglong plateau","Assam","",""],
  ["Deccan lava (trap) plateau","Maharashtra","",""],
  ["Telangana plateau","Telangana","",""],
  ["Mysore plateau","Karnataka","",""],
  ["Dandakaranya","Chhattisgarh and Odisha","",""],
  ["Marwar upland","Rajasthan","",""]
];
const G3H = [
  ["Anamudi","Kerala","2,695 m — highest peak of South India (Anaimalai hills).","p"],
  ["Doddabetta","Tamil Nadu","2,637 m — highest peak of the Nilgiris.","p"],
  ["Guru Shikhar","Rajasthan","1,722 m — highest point of the Aravallis (Mount Abu).","p"],
  ["Dhupgarh","Madhya Pradesh","Highest peak of the Satpuras (Pachmarhi).","p"],
  ["Kalsubai","Maharashtra","Highest peak of Maharashtra.",""],
  ["Mullayanagiri","Karnataka","Highest peak of Karnataka.",""],
  ["Jindhagada (Arma Konda)","Andhra Pradesh","Highest peak of the Eastern Ghats.","p"],
  ["Deomali","Odisha","Highest peak of Odisha.",""],
  ["Parasnath","Jharkhand","Highest peak of Jharkhand; a Jain pilgrimage.",""],
  ["Shillong Peak","Meghalaya","",""],
  ["Girnar","Gujarat","",""],
  ["Saddle Peak","Andaman and Nicobar Islands","Highest point of the Andamans.",""],
  ["Cardamom hills","Kerala","",""],
  ["Palani hills","Tamil Nadu","Kodaikanal.",""],
  ["Shevaroy hills","Tamil Nadu","Yercaud.",""],
  ["Nallamala hills","Andhra Pradesh","",""],
  ["Garo, Khasi and Jaintia hills","Meghalaya","","p"],
  ["Mikir (Karbi) hills","Assam","",""],
  ["Rajmahal hills","Jharkhand","",""],
  ["Mahadeo hills","Madhya Pradesh","",""]
];
const G4C = [
  ["Kachchh and Kathiawar coast","Gujarat","","p"],
  ["Konkan coast","Maharashtra","From Mumbai down to Goa.","p"],
  ["Kanara coast","Karnataka","","p"],
  ["Malabar coast","Kerala","Backwaters (kayals).","p"],
  ["Coromandel coast","Tamil Nadu","","p"],
  ["Northern Circars","Andhra Pradesh","","p"],
  ["Utkal coast","Odisha","",""]
];
const G4I = [
  ["Majuli","Assam","World's largest river island (Brahmaputra); India's first island district, 2016.","p"],
  ["Umananda","Assam","Tiny river island in the Brahmaputra at Guwahati.",""],
  ["Sriharikota","Andhra Pradesh","ISRO's Satish Dhawan Space Centre.","p"],
  ["Wheeler Island (A. P. J. Abdul Kalam Island)","Odisha","Missile test range.","p"],
  ["Pamban (Rameswaram)","Tamil Nadu","Joined to the mainland by the Pamban bridges.",""],
  ["Srirangam","Tamil Nadu","River island in the Kaveri.",""],
  ["Elephanta","Maharashtra","Rock-cut caves near Mumbai.",""],
  ["Salsette","Maharashtra","Mumbai stands on it.",""],
  ["Divar","Goa","",""],
  ["Willingdon Island","Kerala","Man-made island at Kochi port.",""],
  ["Barren Island","Andaman and Nicobar Islands","India's only active volcano.","p"],
  ["Narcondam","Andaman and Nicobar Islands","A dormant volcano.",""],
  ["Minicoy","Lakshadweep","Southernmost island of Lakshadweep.",""],
  ["Kavaratti","Lakshadweep","Capital of Lakshadweep.",""],
  ["Diu","Dadra and Nagar Haveli and Daman and Diu","",""]
];
const G4W = [
  ["Palk Strait","India and Sri Lanka","Between Tamil Nadu and Sri Lanka.","p"],
  ["Ten Degree Channel","Andaman and Nicobar groups","Between Little Andaman and Car Nicobar.","p"],
  ["Nine Degree Channel","Minicoy and the main Lakshadweep group","",""],
  ["Eight Degree Channel","Minicoy and the Maldives","",""],
  ["Duncan Passage","South Andaman and Little Andaman","",""],
  ["Coco Channel","North Andaman and the Coco Islands (Myanmar)","",""],
  ["Six Degree (Great) Channel","Great Nicobar and Sumatra (Indonesia)","",""]
];

LESSONS.push(
{id:"G1", heat:3, title:"India: location, size and borders", hi:"भारत: स्थिति, विस्तार और सीमाएँ", blocks:[
  {k:"hot", h:"Asked again and again: the <b>Tropic of Cancer's 8 states</b>, the <b>Standard Meridian (82°30′E, Mirzapur)</b>, the <b>longest border (Bangladesh)</b> and shortest (Afghanistan), and the <b>Radcliffe, McMahon and Durand lines</b>."},
  {k:"story", h:"<p>India lies wholly in the <b>northern and eastern hemispheres</b>, between latitudes <b>8°4′N and 37°6′N</b> and longitudes <b>68°7′E and 97°25′E</b>. The <b>Tropic of Cancer</b> (23°30′N) cuts it almost in half and crosses eight states. With <b>32.87 lakh km²</b> it is the <b>7th largest</b> country (2.4% of the world's land) — 3,214 km from north to south and 2,933 km from east to west.</p><p>The sun rises in Arunachal about <b>two hours</b> before it does in Gujarat, so India keeps one time, set by the <b>82°30′E</b> meridian through <b>Mirzapur</b> (UP) — 5½ hours ahead of GMT. Seven countries touch India by land; <b>Bangladesh</b> has the longest border and <b>Afghanistan</b> the shortest. Across the sea lie <b>Sri Lanka</b> and the <b>Maldives</b>.</p>", key:"8°4′N–37°6′N, 68°7′E–97°25′E; 7th largest, 2.4%; IST 82°30′E (Mirzapur); longest border Bangladesh, shortest Afghanistan."},
  {k:"facts", title:"India at a glance (as of October 2026)", rows:[
    ["Area","32,87,263 km² — 7th largest (after Russia, Canada, USA, China, Brazil, Australia)"],
    ["Tropic of Cancer states (8)","Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram"],
    ["Standard Meridian 82°30′E crosses","Uttar Pradesh, Madhya Pradesh, Chhattisgarh, Odisha, Andhra Pradesh"],
    ["Land border","About 15,107 km with 7 countries"],
    ["Coastline","7,516.6 km by the old count; re-measured at 11,098.81 km (published 2025)"],
    ["Coastal states","9 — Gujarat (longest coast), Maharashtra, Goa, Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Odisha, West Bengal"],
    ["States and UTs","28 states, 8 Union Territories; largest state Rajasthan, smallest Goa; largest UT Ladakh"],
    ["Census 2011 (basics)","121.09 crore people; density 382/km²; sex ratio 943; literacy 74.04%; most populous Uttar Pradesh"],
    ["Next Census","Census 2027 — reference date 1 March 2027 (1 October 2026 for snow-bound areas)"]
  ]},
  {k:"table", title:"Land neighbours and border length", head:["Country","Border with India","States / UTs on that border"], rows: G1B.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Famous lines", head:["Line","Between","Note"], rows: G1L.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Extreme points", head:["Point","Place","Where"], rows: G1X.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Tropic of Cancer states, west to east: <b>“Go Run Most Clever Journey With Tiger Mom”</b> — Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram. Border lengths: <b>“Big China Pakistan Never Meet By Accident”</b> — Bangladesh > China > Pakistan > Nepal > Myanmar > Bhutan > Afghanistan."},
  {k:"trap", h:"The Tropic of Cancer does <b>not</b> touch Odisha, Bihar, Assam or Uttar Pradesh. <b>McMahon</b> = India–China (Arunachal); <b>Durand</b> = Pakistan–Afghanistan, not India. <b>Indira Point</b> is the southernmost point of India; <b>Kanyakumari</b> only of the mainland."}
], sum:["India lies between 8°4′N–37°6′N and 68°7′E–97°25′E; it is the 7th largest country (2.4% of world land).","The Tropic of Cancer crosses 8 states, from Gujarat to Mizoram.","Indian Standard Time is set by 82°30′E, which passes through Mirzapur (UP).","Bangladesh has the longest land border, Afghanistan the shortest.","Radcliffe Line — India–Pakistan; McMahon Line — India–China; Durand Line — Pakistan–Afghanistan."]},

{id:"G2", heat:3, title:"The Himalaya: ranges, peaks and passes", hi:"हिमालय: श्रेणियाँ, चोटियाँ और दर्रे", blocks:[
  {k:"hot", h:"Most asked: <b>which state a pass is in</b> (Zoji La, Rohtang, Shipki La, Nathu La, Bomdi La), the <b>three parallel ranges</b> (Himadri, Himachal, Shiwalik), and the <b>highest peaks</b> (K2, Kangchenjunga, Nanda Devi)."},
  {k:"story", h:"<p>The Himalaya are <b>young fold mountains</b>, pushed up when the Indian plate ran into Asia. They curve for about <b>2,400 km</b> from the Indus to the Brahmaputra. From north to south there are three parallel ranges: the <b>Greater Himalaya (Himadri)</b> with the highest snowy peaks; the <b>Lesser Himalaya (Himachal)</b> with ranges like Pir Panjal and Dhauladhar and hill towns like Shimla; and the low <b>Shiwaliks</b>, with flat valleys called <b>duns</b> behind them.</p><p>North of the Himadri lie the <b>Trans-Himalaya</b> — Karakoram, Ladakh and Zaskar ranges — where <b>K2</b> stands. In the east the mountains turn south as the <b>Purvanchal</b>: Patkai Bum, Naga hills and Mizo hills. The few gaps through the wall are the <b>passes</b> — Zoji La, Rohtang, Shipki La, Nathu La and Bomdi La.</p>", key:"Himadri (highest) → Himachal (middle) → Shiwalik (lowest); Trans-Himalaya to the north; Purvanchal in the east."},
  {k:"table", title:"Peaks", head:["Peak","Where","Remember"], rows: G2P.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Passes", head:["Pass","State / UT","Remember"], rows: G2S.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Ranges", head:["Range","Part of","Remember"], rows: G2R.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Sections of the Himalaya from west to east (by rivers)", rows: G2D.map(r => [r[0], "Between the " + r[1]])},
  {k:"trick", h:"Passes by state: <b>“Zoji-Khardung-Chang in Ladakh; Rohtang-Shipki-Baralacha in Himachal; Lipu-Mana-Niti in Uttarakhand; Nathu-Jelep in Sikkim; Bomdi-Bum in Arunachal.”</b> Sections: <b>“I Saw Kali Teesta Dancing”</b> — Indus, Sutlej, Kali, Teesta, Dihang."},
  {k:"trap", h:"<b>Shipki La</b> is in Himachal (Sutlej enters India) — not Sikkim. <b>Nanda Devi</b> is the highest peak <b>wholly in India</b>; <b>Kangchenjunga</b> is shared with Nepal; <b>K2</b> lies in PoK. <b>Pir Panjal</b> and <b>Dhauladhar</b> belong to the <b>Lesser</b> Himalaya."}
], sum:["The Himalaya are young fold mountains about 2,400 km long.","Three ranges: Himadri (Greater), Himachal (Lesser), Shiwalik (Outer); duns lie between Himachal and Shiwalik.","K2 (8,611 m) is India's highest peak as per India's map; Kangchenjunga (8,586 m) is in Sikkim; Nanda Devi is the highest wholly in India.","Passes: Zoji La, Khardung La (Ladakh); Rohtang, Shipki La (Himachal); Lipulekh (Uttarakhand); Nathu La (Sikkim); Bomdi La (Arunachal).","Purvanchal = Patkai Bum, Naga hills, Mizo hills in the north-east."]},

{id:"G3", heat:2, title:"Northern plains, plateaus and hills", hi:"उत्तरी मैदान, पठार और पहाड़ियाँ", blocks:[
  {k:"hot", h:"Favourites: <b>Bhabar, Terai, Bhangar, Khadar</b>; the <b>highest peaks</b> of the south (Anamudi, Doddabetta, Guru Shikhar); <b>Western vs Eastern Ghats</b>; and which state a plateau is in (Chotanagpur — Jharkhand)."},
  {k:"story", h:"<p>The <b>Northern Plains</b> were built by the Indus, Ganga and Brahmaputra from silt. Coming down from the hills you cross four belts: <b>Bhabar</b> (pebbles, streams vanish), <b>Terai</b> (marshy, streams re-appear), then <b>Bhangar</b> (old alluvium with kankar) and <b>Khadar</b> (fresh alluvium of flood plains).</p><p>South of the plains is the <b>Peninsular Plateau</b>, made of the oldest rocks. The <b>Central Highlands</b> (Malwa, Bundelkhand, Chotanagpur) lie north of the Narmada; the <b>Deccan Plateau</b> lies south. It is edged by the <b>Western Ghats</b> — high and unbroken, with <b>Anamudi</b> (2,695 m) the highest peak of the south — and the low, broken <b>Eastern Ghats</b>. The <b>Aravallis</b>, among the oldest fold mountains in the world, rise to <b>Guru Shikhar</b> at Mount Abu.</p>", key:"Bhabar → Terai → Bhangar → Khadar; Anamudi highest in south; Guru Shikhar highest of Aravallis; Chotanagpur = mineral heartland."},
  {k:"table", title:"Words of the Northern Plains", head:["Word","Meaning","Note"], rows: G3W.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Plateaus", head:["Plateau","State","Note"], rows: G3P.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Peaks and hills of the peninsula and the north-east", head:["Peak / hills","State","Remember"], rows: G3H.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Western Ghats vs Eastern Ghats", rows:[
    ["Western Ghats (Sahyadri)","Continuous, higher (900–1,600 m); Tapi mouth to Kanyakumari; highest Anamudi"],
    ["Eastern Ghats","Broken by rivers, lower (about 600 m); highest Jindhagada (Arma Konda)"],
    ["Where they meet","Nilgiri hills — Doddabetta"],
    ["Gaps in the Western Ghats","Thal Ghat and Bhor Ghat (Maharashtra), Palghat gap (Kerala)"],
    ["Oldest fold mountains","Aravallis — Gujarat to Delhi"]
  ]},
  {k:"trick", h:"Coming down from the hills: <b>“Boys Throw Big Kites”</b> — Bhabar, Terai, Bhangar, Khadar. <b>Khadar = new</b> (think ‘khadi is fresh cloth’)."},
  {k:"trap", h:"<b>Bhangar</b> is old, <b>Khadar</b> is new — students swap them. <b>Anamudi</b> (Kerala) is higher than <b>Doddabetta</b> (Tamil Nadu). The <b>Meghalaya plateau</b> is part of the Peninsular Plateau, not the Himalaya."}
], sum:["The Northern Plains are made of river silt: Bhabar, Terai, Bhangar (old) and Khadar (new).","The Peninsular Plateau has the Central Highlands (Malwa, Chotanagpur) and the Deccan Plateau.","Western Ghats are higher and continuous; Eastern Ghats are low and broken; they meet in the Nilgiris.","Anamudi (Kerala) is the highest peak of the south; Guru Shikhar the highest of the Aravallis.","Chotanagpur plateau (Jharkhand) is India's mineral heartland."]},

{id:"G4", heat:2, title:"Coasts and islands", hi:"तट और द्वीप", blocks:[
  {k:"hot", h:"Asked often: <b>which coast is in which state</b> (Konkan, Malabar, Coromandel, Northern Circars), <b>Barren Island</b> (only active volcano), <b>Majuli</b> (largest river island), and the <b>channels</b> — Ten Degree, Nine Degree, Eight Degree and Palk Strait."},
  {k:"story", h:"<p>The <b>western coastal plain</b> is narrow and lies between the Western Ghats and the Arabian Sea: Kachchh–Kathiawar (Gujarat), <b>Konkan</b> (Maharashtra–Goa), <b>Kanara</b> (Karnataka) and <b>Malabar</b> (Kerala, with its backwaters). The <b>eastern coastal plain</b> is wide, with big deltas: <b>Utkal</b> (Odisha), <b>Northern Circars</b> (Andhra) and <b>Coromandel</b> (Tamil Nadu).</p><p>India has two island groups. The <b>Andaman and Nicobar Islands</b> in the Bay of Bengal are the tops of drowned mountains; <b>Barren Island</b> is India's only active volcano, and the <b>Ten Degree Channel</b> separates the Andamans from the Nicobars. <b>Lakshadweep</b> in the Arabian Sea is made of <b>coral</b>; its capital is <b>Kavaratti</b>. Port Blair was renamed <b>Sri Vijaya Puram</b> in 2024.</p>", key:"West coast: Konkan, Kanara, Malabar; east coast: Utkal, Northern Circars, Coromandel; Barren Island = active volcano; Lakshadweep = coral."},
  {k:"table", title:"Coastal plains", head:["Coast","State","Note"], rows: G4C.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Islands", head:["Island","State / UT","Remember"], rows: G4I.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Straits and channels", head:["Water body","Separates","Note"], rows: G4W.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Channels count down as you go south-west: <b>Ten</b> (Andaman | Nicobar), <b>Nine</b> (Lakshadweep | Minicoy), <b>Eight</b> (Minicoy | Maldives). West coast top to bottom: <b>“Kids Know Karate Moves”</b> — Kachchh, Konkan, Kanara, Malabar."},
  {k:"trap", h:"<b>Coromandel</b> is Tamil Nadu, not Andhra (that is the <b>Northern Circars</b>). <b>Sriharikota</b> is in Andhra Pradesh; <b>Wheeler (Abdul Kalam) Island</b> is in Odisha. <b>Narcondam</b> is dormant; only <b>Barren Island</b> is active."}
], sum:["West coast plains: Kachchh–Kathiawar, Konkan, Kanara, Malabar — narrow.","East coast plains: Utkal, Northern Circars, Coromandel — wide, with deltas.","Andaman and Nicobar: Barren Island is India's only active volcano; Ten Degree Channel divides the two groups.","Lakshadweep is coral; capital Kavaratti; Eight Degree Channel separates Minicoy from the Maldives.","Majuli (Assam) is the largest river island; Palk Strait separates India and Sri Lanka."]}
);

pairQs("G1", G1B, { q: t => `How long is India's land border with ${t}?`, rq: a => `India shares a ${a} land border with:` });
pairQs("G1", G1S, { q: t => `${t} shares an international border with:` });
pairQs("G1", G1L, { q: t => `The ${t} lies between:`, rq: a => `Which line separates ${a}?`, extra: ["India and Nepal","India and Bangladesh","India and Myanmar"] });
pairQs("G1", G1X, { q: t => `India's ${t.toLowerCase()} is:`, rq: a => `${a} is India's:` });
pairQs("G2", G2P, { q: t => `The peak ${t} is in:` });
pairQs("G2", G2S, { q: t => `${t} is in:` });
pairQs("G2", G2R, { q: t => `The ${t} belongs to which part of the mountains?`, rq: a => `Which range is part of the ${a}?` });
pairQs("G2", G2D, { q: t => `The ${t} lies between which rivers?`, rq: a => `Which section of the Himalaya lies between the ${a}?` });
pairQs("G3", G3W, { q: t => `In the Northern Plains, '${t}' means:`, rq: a => `Which word means: ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("G3", G3P, { q: t => `The ${t} is in:` });
pairQs("G3", G3H, { q: t => `${t} — in which state?` });
pairQs("G4", G4C, { q: t => `The ${t} is in:` });
pairQs("G4", G4I, { q: t => `${t} island is in:` });
pairQs("G4", G4W, { q: t => `The ${t} separates:`, rq: a => `What separates ${a}?` });

QB.push(
["G1","Which of these states does the Tropic of Cancer NOT pass through?",["Assam","Chhattisgarh","Tripura","Jharkhand"],"It crosses Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram.","p","","","SSC MTS 2020 · 22 Oct 2021 (Shift 3)"],
["G1","Through how many Indian states does the Tropic of Cancer pass?",["8","6","7","9"],"Gujarat to Mizoram.","p"],
["G1","The Standard Meridian of India passes through which of the following?",["Mirzapur","Kanpur","Varanasi","Lucknow"],"82°30′E passes through Mirzapur in Uttar Pradesh.","p","","","SSC Scientific Assistant · 23 Nov 2017 (Shift 1)"],
["G1","Which longitude is the Standard Meridian of India?",["82°30′ E","80°30′ E","84°30′ E","78°30′ E"],"IST is 5 hours 30 minutes ahead of GMT.","p","","","SSC CGL 2020 Tier-I · 23 Aug 2021 (Shift 2)"],
["G1","The McMahon Line separates China and which Indian state?",["Arunachal Pradesh","Sikkim","Ladakh","Himachal Pradesh"],"Drawn at the Simla Convention, 1914.","p","","","SSC CGL 2022 · 6 Dec 2022 (Shift 4)"],
["G1","India is the ___ largest country in the world by area.",["7th","5th","6th","8th"],"About 2.4% of the world's land.","p"],
["G1","Which of these states borders three countries — Bangladesh, Nepal and Bhutan?",["West Bengal","Assam","Sikkim","Bihar"],"Sikkim borders China, Nepal and Bhutan.","p"],
["G1","Which state has the longest border with Bangladesh?",["West Bengal","Assam","Meghalaya","Tripura"],"About 2,217 km.","p"],
["G1","Which state has the longest coastline in India?",["Gujarat","Andhra Pradesh","Tamil Nadu","Maharashtra"],"Gujarat leads by both the old and the new (2025) measurement.","p"],
["G1","India's north–south extent from Kashmir to Kanyakumari is about:",["3,214 km","2,933 km","3,500 km","2,500 km"],"East–west it is 2,933 km.",""],
["G1","According to Census 2011, India's sex ratio was:",["943","933","940","927"],"Females per 1,000 males; Kerala highest (1,084).","p"],
["G1","Which is the largest Union Territory of India by area?",["Ladakh","Jammu and Kashmir","Andaman and Nicobar Islands","Delhi"],"Since 2019.",""],
["G2","Which is the highest peak lying wholly inside India?",["Nanda Devi","Kangchenjunga","K2","Kamet"],"7,816 m, in Uttarakhand.","p"],
["G2","Through which pass does the Sutlej enter India?",["Shipki La","Nathu La","Zoji La","Rohtang"],"Himachal Pradesh.","p"],
["G2","The Atal Tunnel runs under which pass?",["Rohtang Pass","Banihal Pass","Zoji La","Baralacha La"],"Opened in 2020 between Manali and Lahaul.","p"],
["G2","The flat valleys between the Lesser Himalaya and the Shiwaliks are called:",["Duns","Doabs","Terai","Kayals"],"Dehradun is the best known.","p"],
["G2","The Himalaya are an example of:",["Young fold mountains","Block mountains","Volcanic mountains","Residual mountains"],"Formed by the collision of the Indian and Eurasian plates.","p"],
["G2","Which is the northernmost range of the Himalaya proper?",["Himadri (Greater Himalaya)","Shiwalik","Himachal","Purvanchal"],"North of it lie the Trans-Himalayan ranges.",""],
["G3","Which is the highest peak of South India?",["Anamudi","Doddabetta","Mahendragiri","Mullayanagiri"],"2,695 m, in Kerala.","p"],
["G3","Which are among the oldest fold mountains in the world?",["Aravalli","Himalaya","Satpura","Western Ghats"],"They run from Gujarat to Delhi.","p"],
["G3","The Western Ghats and the Eastern Ghats meet in the:",["Nilgiri hills","Cardamom hills","Palani hills","Javadi hills"],"Doddabetta is the highest point of the Nilgiris.","p"],
["G3","Which plateau is called the 'mineral heartland of India'?",["Chotanagpur","Malwa","Deccan","Meghalaya"],"Jharkhand and nearby areas.","p"],
["G3","Which gap separates the Meghalaya plateau from the Chotanagpur plateau?",["Garo–Rajmahal gap","Palghat gap","Bhor Ghat","Thal Ghat"],"Filled by the Ganga–Brahmaputra plain.",""],
["G4","India's only active volcano is on:",["Barren Island","Narcondam Island","Minicoy","Car Nicobar"],"In the Andaman Sea.","p"],
["G4","The Lakshadweep islands are made of:",["Coral","Volcanic rock","Granite","River silt"],"Atolls in the Arabian Sea.","p"],
["G4","Port Blair was renamed in 2024 as:",["Sri Vijaya Puram","Swaraj Dweep","Shaheed Dweep","Netaji Nagar"],"Havelock is Swaraj Dweep; Neil is Shaheed Dweep.","p"],
["G4","Which is the world's largest river island?",["Majuli","Umananda","Srirangam","Divar"],"In the Brahmaputra, Assam.","p"],
["G4","Kayals (backwaters) are a feature of which coast?",["Malabar","Coromandel","Konkan","Utkal"],"Kerala.","p"],
["G4","Which coastal plain is wider?",["Eastern coastal plain","Western coastal plain","Both are equal","Neither has plains"],"The east coast has big deltas.",""]
);

LASTMOMENT.push(
{t:"Location and borders", era:["ig"], rows:[["Latitudes","8°4′N – 37°6′N"],["Longitudes","68°7′E – 97°25′E"],["IST meridian","82°30′E, Mirzapur"],["Tropic of Cancer","8 states"],["Longest border","Bangladesh"],["Shortest border","Afghanistan"],["McMahon Line","India–China"],["Durand Line","Pakistan–Afghanistan"]]},
{t:"Peaks and passes", era:["ig"], rows:[["K2","Highest (India's map)"],["Kangchenjunga","Sikkim"],["Nanda Devi","Highest wholly in India"],["Zoji La, Khardung La","Ladakh"],["Rohtang, Shipki La","Himachal"],["Nathu La","Sikkim"],["Bomdi La","Arunachal"],["Anamudi","Highest in south"]]},
{t:"Coasts and islands", era:["ig"], rows:[["Konkan","Maharashtra"],["Malabar","Kerala"],["Coromandel","Tamil Nadu"],["Northern Circars","Andhra"],["Barren Island","Active volcano"],["Majuli","Largest river island"],["Ten Degree Channel","Andaman | Nicobar"],["Eight Degree Channel","Minicoy | Maldives"]]}
);
TILES.push(["82°30′E","Standard Meridian","ig"],["8","Tropic of Cancer states","ig"],["2.4%","India's share of world land","ig"],["4,096.7 km","Border with Bangladesh","ig"],["8,611 m","K2","ig"],["2,695 m","Anamudi","ig"]);

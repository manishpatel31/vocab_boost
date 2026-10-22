/* Part 3 · R8 dams, waterfalls and river islands; R9 landforms made by rivers and drainage patterns; R10 disputes, river links
   and waterways (as of October 2026). */
const R8 = [
  ["Tehri Dam","Bhagirathi","India's highest dam (about 260 m), Uttarakhand.","p"],
  ["Bhakra Dam (Gobind Sagar)","Sutlej","Himachal Pradesh; with Nangal downstream in Punjab.","p"],
  ["Pong Dam (Maharana Pratap Sagar)","Beas","Himachal Pradesh.",""],
  ["Ranjit Sagar (Thein) Dam","Ravi","Punjab.",""],
  ["Salal and Baglihar","Chenab","Jammu and Kashmir.",""],
  ["Hirakud Dam","Mahanadi","Odisha; one of the longest earthen dams in the world (1957).","p"],
  ["Nagarjuna Sagar Dam","Krishna","Telangana–Andhra Pradesh border.","p"],
  ["Srisailam Dam","Krishna","",""],
  ["Almatti Dam","Krishna","Karnataka.",""],
  ["Tungabhadra Dam","Tungabhadra","At Hosapete, Karnataka.",""],
  ["Sardar Sarovar Dam","Narmada","Gujarat; the Statue of Unity faces it.","p"],
  ["Indira Sagar Dam","Narmada","Madhya Pradesh — the largest reservoir in India by volume.",""],
  ["Ukai Dam","Tapi","Gujarat.",""],
  ["Krishnaraja Sagar Dam","Kaveri","Near Mysuru; Brindavan Gardens.","p"],
  ["Mettur Dam (Stanley Reservoir)","Kaveri","Tamil Nadu.",""],
  ["Idukki Arch Dam","Periyar","Kerala.",""],
  ["Rihand Dam (Govind Ballabh Pant Sagar)","Rihand","On the Rihand, a tributary of the Son (UP).",""],
  ["Gandhi Sagar Dam","Chambal","Madhya Pradesh.",""],
  ["Farakka Barrage","Ganga","West Bengal (1975).","p"],
  ["Polavaram Project","Godavari","Andhra Pradesh.",""],
  ["Koyna Dam","Koyna","Maharashtra.",""]
];
const R8F = [
  ["Jog Falls","Sharavathi","Karnataka — among India's highest plunge waterfalls.","p"],
  ["Dhuandhar Falls","Narmada","Bhedaghat, near Jabalpur.","p"],
  ["Chitrakote Falls","Indravati","Chhattisgarh — the 'Niagara of India'.","p"],
  ["Hundru Falls","Subarnarekha","Near Ranchi, Jharkhand.","p"],
  ["Shivanasamudra Falls","Kaveri","Karnataka.",""],
  ["Hogenakkal Falls","Kaveri","Tamil Nadu–Karnataka border.",""],
  ["Athirappilly Falls","Chalakudy","Kerala.",""],
  ["Dudhsagar Falls","Mandovi","Goa–Karnataka border.","p"],
  ["Gokak Falls","Ghataprabha","Karnataka.",""],
  ["Kapildhara Falls","Narmada","Amarkantak.",""],
  ["Duduma Falls","Machkund","Odisha–Andhra Pradesh border.",""]
];
const R9 = [
  ["V-shaped valley","Upper course — the river cuts down","","p"],
  ["Gorge","Upper course — the river cuts down","A very deep, narrow valley.",""],
  ["Waterfall and rapids","Upper course — the river cuts down","",""],
  ["Pothole","Upper course — the river cuts down","Pebbles swirl and drill holes in the bed.",""],
  ["Alluvial fan","Where a hill stream reaches the plain","The river slows and spreads its load like a fan.","p"],
  ["Meander","Middle course — the river swings side to side","",""],
  ["Oxbow lake","Middle course — the river swings side to side","A meander cut off from the river.","p"],
  ["Floodplain and levee","Lower course — the river drops its load","",""],
  ["Braided channel","Lower course — the river drops its load","Many channels among sandbars.",""],
  ["Delta","At the mouth — silt builds new land","","p"],
  ["Estuary","At the mouth — tides scour the silt away","",""]
];
const R9E = [
  ["Gorge of the Indus","Indus","Near Nanga Parbat — one of the deepest gorges.",""],
  ["Marble Rocks gorge at Bhedaghat","Narmada","",""],
  ["Ravines (badlands)","Chambal","Made by gully erosion.","p"],
  ["World's largest river island","Brahmaputra","Majuli.","p"],
  ["World's largest delta","Ganga–Brahmaputra","The Sundarbans.","p"],
  ["Estuary at Bharuch","Narmada","",""],
  ["Gandikota canyon — the 'Grand Canyon of India'","Pennar","Andhra Pradesh.",""],
  ["Kosi mega-fan","Kosi","A huge alluvial fan in north Bihar.",""],
  ["Braided channel in Assam","Brahmaputra","",""]
];
const R9D = [
  ["Like the branches of a tree — the Ganga plain","Dendritic","",""],
  ["Tributaries meet at right angles in folded hills","Trellis","",""],
  ["Rivers run out in all directions from a high centre (Amarkantak)","Radial","Narmada, Son, Mahanadi tributaries.","p"],
  ["Rivers run into a central lake or basin (Loktak, Manipur)","Centripetal","","p"],
  ["Short rivers run side by side down a slope (Western Ghats)","Parallel","",""],
  ["Streams follow joints in hard rock and bend at right angles","Rectangular","",""]
];
const R10 = [
  ["Kaveri","Karnataka, Tamil Nadu, Kerala, Puducherry","Tribunal 1990, award 2007, Supreme Court 2018; Cauvery Water Management Authority.","p"],
  ["Krishna","Maharashtra, Karnataka, Telangana, Andhra Pradesh","Krishna Water Disputes Tribunals (1969 and 2004).","p"],
  ["Godavari","Maharashtra, Telangana, Andhra Pradesh, Karnataka, Madhya Pradesh, Chhattisgarh, Odisha","Tribunal 1969; settled by agreement.",""],
  ["Narmada","Gujarat, Madhya Pradesh, Maharashtra, Rajasthan","Tribunal 1969, award 1979.","p"],
  ["Mahadayi (Mhadei)","Goa, Karnataka, Maharashtra","Tribunal 2010, award 2018.","p"],
  ["Ravi and Beas","Punjab, Haryana, Rajasthan","Eradi Tribunal, 1986.",""],
  ["Vansadhara","Andhra Pradesh, Odisha","Tribunal 2010.",""],
  ["Mahanadi","Odisha, Chhattisgarh","Tribunal 2018.",""]
];
const R10L = [
  ["Ken–Betwa Link","Ken to Betwa (MP and UP)","The first link under the National Perspective Plan; foundation stone December 2024; Daudhan Dam in Panna.","p"],
  ["Pattiseema lift","Godavari to Krishna (Andhra Pradesh)","Commissioned 2015.",""],
  ["Par–Tapi–Narmada Link","Western Ghats rivers to the Narmada (Gujarat)","",""],
  ["Indira Gandhi Canal","From Harike (Sutlej–Beas) into Rajasthan","India's longest canal.","p"],
  ["National Waterway 1","Ganga: Prayagraj to Haldia","","p"],
  ["National Waterway 2","Brahmaputra: Dhubri to Sadiya","","p"],
  ["National Waterway 3","West Coast Canal, Kerala: Kollam to Kottapuram","",""],
  ["Namami Gange","Cleaning and protecting the Ganga (2014)","Run by the National Mission for Clean Ganga.","p"]
];

LESSONS.push(
{id:"R8", heat:3, title:"Dams, waterfalls and river islands", hi:"बाँध, जलप्रपात और नदी द्वीप", blocks:[
  {k:"hot", h:"Most asked: <b>dam → river</b> (Tehri–Bhagirathi, Bhakra–Sutlej, Hirakud–Mahanadi, Nagarjuna Sagar–Krishna, Sardar Sarovar–Narmada) and <b>waterfall → river</b> (Jog–Sharavathi, Chitrakote–Indravati, Hundru–Subarnarekha, Dudhsagar–Mandovi)."},
  {k:"story", h:"<p>After independence Nehru called the big dams the <b>'temples of modern India'</b>. Bhakra on the Sutlej, Hirakud on the Mahanadi and Nagarjuna Sagar on the Krishna brought irrigation and power; the <b>Damodar Valley Corporation</b> (1948) tamed the 'Sorrow of Bengal'. Later dams like <b>Tehri</b> and <b>Sardar Sarovar</b> sparked protests over the people and forests they flooded.</p><p>Waterfalls come where a river drops over hard rock — on the edge of the Western Ghats (Jog, Dudhsagar), the Chota Nagpur plateau (Hundru) or a rift (Dhuandhar).</p>"},
  {k:"table", title:"Dams and barrages", head:["Dam","River","Note"], rows: R8.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Waterfalls", head:["Waterfall","River","Note"], rows: R8F.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"The three record dams — <b>“Tall Tehri, Long Hirakud, Big Indira”</b>: Tehri the highest, Hirakud the longest (earthen), Indira Sagar the largest reservoir."},
  {k:"trap", h:"<b>Bhakra</b> is on the <b>Sutlej</b> (not the Beas — that is Pong). <b>Rihand</b> is on the Rihand, a tributary of the Son. <b>Jog Falls</b> is on the <b>Sharavathi</b>; <b>Shivanasamudra</b> and <b>Hogenakkal</b> are on the <b>Kaveri</b>."}
], sum:["Tehri (Bhagirathi) — highest dam; Hirakud (Mahanadi) — long earthen dam; Indira Sagar (Narmada) — largest reservoir.","Bhakra–Sutlej, Pong–Beas, Ranjit Sagar–Ravi, Salal–Chenab.","Nagarjuna Sagar and Srisailam on the Krishna; KRS and Mettur on the Kaveri; Ukai on the Tapi.","Jog–Sharavathi, Dhuandhar–Narmada, Chitrakote–Indravati, Hundru–Subarnarekha, Dudhsagar–Mandovi.","Farakka Barrage on the Ganga (1975)."]},

{id:"R9", heat:2, title:"Landforms made by rivers", hi:"नदियों द्वारा बने स्थलरूप", blocks:[
  {k:"hot", h:"Most asked: <b>which landform belongs to which stage</b> (V-valley and gorge — upper; meander and oxbow lake — middle; delta — mouth), <b>delta vs estuary</b>, and <b>drainage patterns</b> (dendritic, radial, centripetal, trellis)."},
  {k:"story", h:"<p>A river does three jobs: it <b>erodes</b>, it <b>carries</b> and it <b>deposits</b>. In its <b>upper course</b>, steep and fast, it cuts down — making <b>V-shaped valleys, gorges, waterfalls and potholes</b>. In the <b>middle course</b> it swings from side to side in <b>meanders</b>; when the neck of a loop is cut through in a flood, the old loop is left as an <b>oxbow lake</b>.</p><p>In the <b>lower course</b>, slow and heavy with silt, it builds <b>floodplains and levees</b>, splits into <b>braided channels</b> and, at the sea, piles silt into a <b>delta</b> — unless strong tides wash it away and leave an <b>estuary</b>, as on India's west coast.</p>"},
  {k:"table", title:"Landforms and where they form", head:["Landform","Where it forms","Note"], rows: R9.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Indian examples", head:["Landform","River","Note"], rows: R9E.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Drainage patterns", head:["What it looks like","Pattern","Note"], rows: R9D.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Upper, middle, lower — <b>“Cut, Swing, Drop”</b>: the river <b>cuts</b> (gorge, waterfall), <b>swings</b> (meander, oxbow) and <b>drops</b> (floodplain, delta)."},
  {k:"trap", h:"An <b>oxbow lake</b> is made by a river, not a glacier. A <b>U-shaped</b> valley is glacial — a river cuts a <b>V</b>. The west-coast rivers make <b>estuaries</b>, the east-coast rivers <b>deltas</b>."}
], sum:["Upper course: V-valley, gorge, waterfall, pothole — erosion.","Middle course: meanders and oxbow lakes.","Lower course: floodplain, levee, braided channel; at the mouth a delta (east coast) or an estuary (west coast).","Examples: Chambal ravines, Majuli island, Sundarbans delta, Gandikota canyon (Pennar), Kosi mega-fan.","Drainage: dendritic (Ganga plain), radial (Amarkantak), centripetal (Loktak), parallel (Western Ghats), trellis."]},

{id:"R10", heat:2, title:"Disputes, river links and waterways", hi:"जल विवाद, नदी जोड़ और जलमार्ग", blocks:[
  {k:"hot", h:"Most asked: <b>which states share a dispute</b> (Kaveri, Krishna, Narmada, Mahadayi), <b>Article 262</b>, the <b>Ken–Betwa link</b>, <b>National Waterways 1, 2 and 3</b>, and <b>Namami Gange</b>."},
  {k:"story", h:"<p>Rivers cross state borders, and in a dry year every state wants more water. <b>Article 262</b> of the Constitution lets Parliament make laws for inter-state river disputes and keep them away from the courts; under the <b>Inter-State River Water Disputes Act, 1956</b> the Centre sets up <b>tribunals</b>. The <b>Kaveri</b> fight between Karnataka and Tamil Nadu is the most famous.</p><p>To move water from surplus rivers to dry ones, India plans to <b>link rivers</b> (National Water Development Agency, 1982). The first, the <b>Ken–Betwa link</b> in Bundelkhand, began in December 2024. Rivers are also highways: <b>National Waterway 1</b> on the Ganga is the longest.</p>"},
  {k:"table", title:"River disputes", head:["River","States","Note"], rows: R10.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Links, canals, waterways and missions", head:["Name","What it is","Note"], rows: R10L.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"The law and the bodies", rows:[
    ["Article 262","Parliament may bar the courts from inter-state water disputes"],
    ["Law","Inter-State River Water Disputes Act, 1956; River Boards Act, 1956"],
    ["River linking","National Water Development Agency (1982); National Perspective Plan (1980)"],
    ["Ministry","Ministry of Jal Shakti (2019)"],
    ["Ganga","National Ganga Council, chaired by the Prime Minister"]]},
  {k:"trick", h:"Waterways 1-2-3 — <b>“Ganga, Brahma, Kerala”</b>: NW-1 Ganga (Prayagraj–Haldia), NW-2 Brahmaputra (Dhubri–Sadiya), NW-3 West Coast Canal (Kollam–Kottapuram)."},
  {k:"trap", h:"Water disputes come under <b>Article 262</b>, not Article 263 (which is the Inter-State Council). The <b>Mahadayi</b> dispute involves <b>Goa</b>, Karnataka and Maharashtra. The <b>Ken–Betwa</b> link moves water from the Ken <b>to</b> the Betwa."}
], sum:["Article 262 and the Inter-State River Water Disputes Act, 1956 govern water disputes.","Kaveri: Karnataka, Tamil Nadu, Kerala, Puducherry; Mahadayi: Goa, Karnataka, Maharashtra.","Ken–Betwa: the first river link (foundation stone December 2024).","NW-1 Ganga (Prayagraj–Haldia), NW-2 Brahmaputra (Dhubri–Sadiya), NW-3 West Coast Canal.","Namami Gange (2014); Ministry of Jal Shakti (2019)."]}
);

pairQs("R8", R8, { q: t => `${t} is on which river?`, extra: ["Yamuna"] });
pairQs("R8", R8F, { q: t => `${t} is on which river?`, rq: a => `Which waterfall is on the ${a}?`, extra: ["Godavari","Tapi"] });
pairQs("R9", R9, { q: t => `${t} — where does it form?` });
pairQs("R9", R9E, { q: t => `${t} — which river?`, extra: ["Godavari","Yamuna"] });
pairQs("R9", R9D, { q: t => `Which drainage pattern: ${t.charAt(0).toLowerCase() + t.slice(1)}?`, extra: ["Annular"] });
pairQs("R10", R10, { q: t => `Which states share the ${t} water dispute?`, rq: a => `Which river's dispute involves ${a}?` });
pairQs("R10", R10L, { q: t => `What is the ${t}?`, rq: a => `Which one is this — ${a}?` });

QB.push(
["R8","Which is the highest dam in India?",["Tehri","Bhakra","Hirakud","Sardar Sarovar"],"About 260 m, on the Bhagirathi.","p"],
["R8","Nehru called the big dams the:",["Temples of modern India","Pillars of the nation","Wheels of progress","Gates of plenty"],"Said of Bhakra–Nangal.","p"],
["R8","Which waterfall is called the Niagara of India?",["Chitrakote","Jog","Dudhsagar","Hundru"],"On the Indravati, Chhattisgarh.","p"],
["R8","The Brindavan Gardens lie below which dam?",["Krishnaraja Sagar","Mettur","Tungabhadra","Almatti"],"",""],
["R9","An oxbow lake is formed by:",["A river cutting off a meander","A glacier","Wind","Sea waves"],"","p"],
["R9","A U-shaped valley is made by:",["A glacier","A river","Wind","The sea"],"Rivers cut V-shaped valleys.","p"],
["R9","Why do the west-coast rivers of India form estuaries?",["They are swift and the tides carry silt away","They flow over soft rock","They are fed by glaciers","They are very long"],"",""],
["R9","Which word means the work of a river depositing silt?",["Deposition","Erosion","Weathering","Transportation"],"",""],
["R10","Which Article of the Constitution deals with inter-state river water disputes?",["Article 262","Article 263","Article 280","Article 32"],"Article 263 is about the Inter-State Council.","p"],
["R10","The Mahadayi (Mhadei) water dispute involves:",["Goa, Karnataka and Maharashtra","Karnataka and Tamil Nadu","Andhra Pradesh and Odisha","Punjab and Haryana"],"","p"],
["R10","Which was the first river-link project under the National Perspective Plan to begin?",["Ken–Betwa","Par–Tapi–Narmada","Damanganga–Pinjal","Godavari–Kaveri"],"Foundation stone, December 2024.","p"],
["R10","National Waterway 3 is in:",["Kerala","Assam","West Bengal","Goa"],"West Coast Canal, Kollam–Kottapuram.",""]
);

LASTMOMENT.push(
{t:"Dams", era:["rv"], rows:[["Tehri","Bhagirathi"],["Bhakra","Sutlej"],["Hirakud","Mahanadi"],["Nagarjuna Sagar","Krishna"],["Sardar Sarovar","Narmada"],["KRS, Mettur","Kaveri"],["Ukai","Tapi"]]},
{t:"Waterfalls", era:["rv"], rows:[["Jog","Sharavathi"],["Chitrakote","Indravati"],["Hundru","Subarnarekha"],["Dudhsagar","Mandovi"],["Dhuandhar","Narmada"],["Shivanasamudra","Kaveri"]]}
);
TILES.push(["260 m","Tehri — India's highest dam","rv"],["Art. 262","Inter-state water disputes","rv"],["2024","Ken–Betwa link begins","rv"]);

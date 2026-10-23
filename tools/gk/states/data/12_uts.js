/* Part 3 · S8 Union Territories; S9 high courts and official languages; S10 records, borders and state symbols (as of October 2026). */
const S8 = [
  ["Delhi","New Delhi","The National Capital Territory.","p"],
  ["Jammu and Kashmir (summer)","Srinagar","","p"],
  ["Jammu and Kashmir (winter)","Jammu","","p"],
  ["Ladakh","Leh","Kargil is the other district headquarters.","p"],
  ["Lakshadweep","Kavaratti","","p"],
  ["Andaman and Nicobar Islands","Sri Vijaya Puram","Renamed from Port Blair in September 2024.","p"],
  ["Dadra and Nagar Haveli and Daman and Diu","Daman","Silvassa was the capital of the old DNH UT.","p"]
];
const S8K = [
  ["is the largest by area","Ladakh","About 59,000 sq km of Indian-administered area.","p"],
  ["is the smallest by area and by population","Lakshadweep","About 32 sq km.","p"],
  ["is the most populous","Delhi","",""],
  ["became the National Capital Territory by the 69th Amendment (1991)","Delhi","Article 239AA.","p"],
  ["is the capital of two states but has no legislature of its own","Chandigarh","",""],
  ["has enclaves in three states — Karaikal, Mahe and Yanam","Puducherry","Karaikal in Tamil Nadu, Mahe in Kerala, Yanam in Andhra Pradesh.","p"],
  ["was handed over by France (de facto 1954, de jure 1962)","Puducherry","",""],
  ["has Indira Point, the southernmost point of India","Andaman and Nicobar Islands","On Great Nicobar.","p"],
  ["has Barren Island, India’s only active volcano","Andaman and Nicobar Islands","",""],
  ["was formed by merging two UTs on 26 January 2020","Dadra and Nagar Haveli and Daman and Diu","",""],
  ["is the UT with an elected legislature created on 31 October 2019","Jammu and Kashmir","",""],
  ["borders both China and Pakistan and has the Siachen Glacier","Ladakh","",""],
  ["is a group of coral islands once called Laccadive, Minicoy and Amindivi","Lakshadweep","Renamed in 1973.",""]
];
const S9 = [
  ["Uttar Pradesh","Prayagraj","The Allahabad High Court; bench at Lucknow.","p"],
  ["Madhya Pradesh","Jabalpur","Benches at Indore and Gwalior.","p"],
  ["Rajasthan","Jodhpur","Bench at Jaipur.","p"],
  ["Chhattisgarh","Bilaspur","","p"],
  ["Uttarakhand","Nainital","","p"],
  ["Kerala","Kochi","At Ernakulam; also serves Lakshadweep.","p"],
  ["Odisha","Cuttack","","p"],
  ["Gujarat","Ahmedabad","","p"],
  ["Assam","Guwahati","The Gauhati High Court also serves Nagaland, Mizoram and Arunachal Pradesh.","p",1],
  ["Maharashtra","Mumbai","The Bombay High Court.",""],
  ["Goa","Panaji","A bench of the Bombay High Court.",""],
  ["Punjab and Haryana","Chandigarh","One common high court, which also serves Chandigarh UT.","p"],
  ["Himachal Pradesh","Shimla","",""],
  ["Jharkhand","Ranchi","",""],
  ["Bihar","Patna","",""],
  ["Andhra Pradesh","Amaravati","Its own high court since 1 January 2019.",""],
  ["Telangana","Hyderabad","Its own high court since 1 January 2019.",""],
  ["Karnataka","Bengaluru","Benches at Dharwad and Kalaburagi.",""],
  ["Tamil Nadu","Chennai","The Madras High Court; bench at Madurai.",""],
  ["West Bengal","Kolkata","The Calcutta High Court — India’s oldest (1862).",""],
  ["Sikkim","Gangtok","The smallest high court.",""],
  ["Meghalaya","Shillong","Set up in 2013.",""],
  ["Manipur","Imphal","Set up in 2013.",""],
  ["Tripura","Agartala","Set up in 2013.",""],
  ["Andaman and Nicobar Islands","Kolkata","Under the Calcutta High Court.",""],
  ["Puducherry","Chennai","Under the Madras High Court.",""]
];
const S9B = [
  ["Lucknow","Allahabad High Court","","p"],
  ["Indore","Madhya Pradesh High Court","",""],
  ["Gwalior","Madhya Pradesh High Court","",""],
  ["Jaipur","Rajasthan High Court","","p"],
  ["Nagpur","Bombay High Court","",""],
  ["Aurangabad (Chhatrapati Sambhajinagar)","Bombay High Court","",""],
  ["Madurai","Madras High Court","",""],
  ["Dharwad","Karnataka High Court","",""],
  ["Kalaburagi","Karnataka High Court","",""],
  ["Jalpaiguri","Calcutta High Court","Circuit bench.",""],
  ["Port Blair (Sri Vijaya Puram)","Calcutta High Court","Circuit bench.",""],
  ["Kohima","Gauhati High Court","",""],
  ["Aizawl","Gauhati High Court","",""],
  ["Itanagar","Gauhati High Court","",""]
];
const S9L = [
  ["Nagaland","English","","p"],
  ["Arunachal Pradesh","English","",""],
  ["Meghalaya","English","Khasi and Garo are associate official languages.",""],
  ["Goa","Konkani","Marathi may also be used.","p"],
  ["Odisha","Odia","",""],
  ["Kerala","Malayalam","",""],
  ["Lakshadweep","Malayalam","",""],
  ["Tamil Nadu","Tamil","",""],
  ["Karnataka","Kannada","",""],
  ["Andhra Pradesh","Telugu","",""],
  ["Telangana","Telugu","Urdu is the second official language.",""],
  ["Gujarat","Gujarati","",""],
  ["Maharashtra","Marathi","",""],
  ["West Bengal","Bengali","Tripura uses Bengali and Kokborok.","",1],
  ["Assam","Assamese","Bodo and Bengali are also used in some areas.",""],
  ["Manipur","Manipuri (Meitei)","",""],
  ["Punjab","Punjabi","",""],
  ["Uttarakhand","Hindi","Sanskrit is the second official language (2010).",""],
  ["Haryana","Hindi","Punjabi is the second official language.","",1]
];
const S10 = [
  ["is the largest by area","Rajasthan","About 3.42 lakh sq km — 10.4% of India.","p"],
  ["is the second-largest by area","Madhya Pradesh","",""],
  ["is the third-largest by area","Maharashtra","",""],
  ["is the smallest by area","Goa","About 3,702 sq km.","p"],
  ["is the second-smallest by area","Sikkim","",""],
  ["is the second most populous (Census 2011)","Maharashtra","",""],
  ["has the smallest population (Census 2011)","Sikkim","About 6.1 lakh.","p"],
  ["has the highest population density (Census 2011)","Bihar","1,106 people per sq km.","p"],
  ["has the lowest population density (Census 2011)","Arunachal Pradesh","17 people per sq km.","p"],
  ["has the highest literacy rate (Census 2011)","Kerala","About 94%; Mizoram is second.","p"],
  ["has the lowest literacy rate (Census 2011)","Bihar","About 61.8%.","p"],
  ["has the highest sex ratio (Census 2011)","Kerala","1,084 women per 1,000 men.","p"],
  ["has the lowest sex ratio (Census 2011)","Haryana","879 women per 1,000 men.","p"],
  ["has the longest coastline","Gujarat","","p"],
  ["is the largest in the North-East","Arunachal Pradesh","",""]
];
const S10A = [
  ["Assam","One-horned rhinoceros","","p"],
  ["Gujarat","Asiatic lion","","p"],
  ["Madhya Pradesh","Barasingha (swamp deer)","Also Uttar Pradesh’s state animal.","p"],
  ["Uttar Pradesh","Barasingha (swamp deer)","",""],
  ["Maharashtra","Indian giant squirrel (shekru)","","p"],
  ["Manipur","Sangai (brow-antlered deer)","","p"],
  ["Sikkim","Red panda","","p"],
  ["Tamil Nadu","Nilgiri tahr","",""],
  ["Uttarakhand","Alpine musk deer","",""],
  ["Chhattisgarh","Wild water buffalo","",""],
  ["Kerala","Indian elephant","Also Karnataka and Jharkhand.",""],
  ["Karnataka","Indian elephant","",""],
  ["Arunachal Pradesh","Mithun (gayal)","Also Nagaland.",""],
  ["Meghalaya","Clouded leopard","",""],
  ["West Bengal","Fishing cat","",""],
  ["Bihar","Gaur (Indian bison)","Also Goa.",""],
  ["Andhra Pradesh","Blackbuck","Also Punjab and Haryana.",""],
  ["Himachal Pradesh","Snow leopard","Also Ladakh.",""],
  ["Jammu and Kashmir","Hangul (Kashmir stag)","",""],
  ["Rajasthan","Camel","Chinkara is the state animal in the wild-animal category.",""],
  ["Odisha","Sambar","",""],
  ["Telangana","Spotted deer (chital)","",""]
];
const S10B = [
  ["Rajasthan","Great Indian bustard (godawan)","","p"],
  ["Uttar Pradesh","Sarus crane","","p"],
  ["Gujarat","Greater flamingo","",""],
  ["Assam","White-winged wood duck","",""],
  ["Bihar","House sparrow","",""],
  ["Kerala","Great hornbill","Also Arunachal Pradesh.","p"],
  ["Uttarakhand","Himalayan monal","",""],
  ["Sikkim","Blood pheasant","",""],
  ["Manipur","Mrs Hume’s pheasant","Also Mizoram.",""],
  ["Nagaland","Blyth’s tragopan","",""],
  ["Maharashtra","Yellow-footed green pigeon (hariyal)","",""],
  ["Tamil Nadu","Emerald dove","",""],
  ["Punjab","Northern goshawk (baaz)","",""],
  ["West Bengal","White-throated kingfisher","",""],
  ["Karnataka","Indian roller","Also Telangana and Odisha.",""],
  ["Jharkhand","Asian koel","",""],
  ["Madhya Pradesh","Indian paradise flycatcher (dudhraj)","",""],
  ["Ladakh","Black-necked crane","",""]
];

LESSONS.push(
{id:"S8", heat:3, title:"The eight Union Territories", hi:"आठ केंद्रशासित प्रदेश", blocks:[
  {k:"hot", h:"Asked every year: the <b>number of UTs (8)</b>, which ones have a <b>legislature</b> (Delhi, Puducherry, J&K), the <b>largest (Ladakh)</b> and <b>smallest (Lakshadweep)</b>, the capitals (<b>Kavaratti</b>, <b>Sri Vijaya Puram</b>, <b>Daman</b>, <b>Leh</b>), and the 2019 and 2020 changes."},
  {k:"story", h:"<p>Union Territories are run by the Centre through an Administrator or Lieutenant Governor (Article 239). Three of the eight also elect a legislature: <b>Delhi</b> (the National Capital Territory, by the <b>69th Amendment, 1991</b>, Article 239AA), <b>Puducherry</b> (Article 239A) and, since <b>31 October 2019</b>, <b>Jammu and Kashmir</b>, which uses <b>Srinagar</b> in summer and <b>Jammu</b> in winter. <b>Ladakh</b> (capital <b>Leh</b>), split from J&K the same day, is the <b>largest UT</b> and has no legislature.</p><p>The islands: <b>Lakshadweep</b> (capital <b>Kavaratti</b>), the <b>smallest UT</b>, and the <b>Andaman and Nicobar Islands</b>, whose capital Port Blair was renamed <b>Sri Vijaya Puram</b> in 2024 and whose Indira Point is India’s southernmost tip. <b>Puducherry</b> was French; its pieces lie in three states. <b>Chandigarh</b> (1966) is the shared capital of Punjab and Haryana, and on <b>26 January 2020</b> <b>Dadra and Nagar Haveli</b> joined <b>Daman and Diu</b> as one UT with capital <b>Daman</b>.</p>", key:"8 UTs; 3 with legislatures (Delhi, Puducherry, J&K); largest Ladakh, smallest Lakshadweep; A&N capital Sri Vijaya Puram; DNH & DD capital Daman."},
  {k:"table", title:"UT capitals", head:["Union Territory","Capital","Note"], rows: S8.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Which UT is it?", head:["Which UT …","Union Territory","Note"], rows: S8K.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"UTs: legislature and high court (as of October 2026)", rows:[
    ["Delhi","Legislature — yes · Delhi High Court"],
    ["Puducherry","Legislature — yes · Madras High Court"],
    ["Jammu and Kashmir","Legislature — yes · High Court of J&K and Ladakh"],
    ["Ladakh","No legislature · High Court of J&K and Ladakh"],
    ["Chandigarh","No legislature · Punjab and Haryana High Court"],
    ["Lakshadweep","No legislature · Kerala High Court"],
    ["Andaman and Nicobar Islands","No legislature · Calcutta High Court"],
    ["Dadra and Nagar Haveli and Daman and Diu","No legislature · Bombay High Court"]
  ]},
  {k:"trick", h:"The three UTs with a legislature — <b>“DJP”</b>: <b>D</b>elhi, <b>J</b>&K, <b>P</b>uducherry. Largest vs smallest — <b>“L to L”</b>: <b>L</b>adakh to <b>L</b>akshadweep."},
  {k:"trap", h:"Port Blair is now <b>Sri Vijaya Puram</b>. The capital of DNH and DD is <b>Daman</b>, not Silvassa. <b>Chandigarh</b> is a capital of two states but is itself a UT without a legislature."}
], sum:["India has 8 UTs; Delhi, Puducherry and J&K have elected legislatures.","Ladakh (Leh) is the largest UT; Lakshadweep (Kavaratti) the smallest by area and population.","J&K: Srinagar (summer) and Jammu (winter); a UT since 31 October 2019.","Andaman and Nicobar capital: Sri Vijaya Puram (renamed 2024); DNH and DD capital: Daman (merged 2020).","Delhi became the National Capital Territory by the 69th Amendment, 1991."]},

{id:"S9", heat:2, title:"High courts and official languages", hi:"उच्च न्यायालय और राजभाषाएँ", blocks:[
  {k:"hot", h:"The favourite trap: <b>high courts that are NOT in the capital</b> — Prayagraj (UP), Jabalpur (MP), Jodhpur (Rajasthan), Bilaspur (Chhattisgarh), Nainital (Uttarakhand), Kochi (Kerala), Cuttack (Odisha), Ahmedabad (Gujarat). Also: <b>25 high courts</b>, the <b>oldest (Calcutta, 1862)</b>, <b>common high courts</b>, and states whose official language is <b>English</b>."},
  {k:"story", h:"<p>Article 214 gives every state a high court, and Article 231 lets two or more states share one. India has <b>25 high courts</b>. The oldest three — <b>Calcutta, Bombay and Madras</b> — date from <b>1862</b>, Calcutta first. The newest are <b>Meghalaya, Manipur and Tripura</b> (2013) and the split of the Hyderabad court into <b>Andhra Pradesh</b> and <b>Telangana</b> high courts (1 January 2019). The <b>Gauhati High Court</b> serves four states — Assam, Nagaland, Mizoram and Arunachal — and the <b>Bombay High Court</b> serves Maharashtra, Goa and DNH & DD.</p><p>Each state picks its own <b>official language</b> (Article 345). Most choose their main language, but <b>Nagaland, Arunachal Pradesh and Meghalaya</b> use <b>English</b>. <b>Konkani</b> (Goa), <b>Manipuri</b> and <b>Nepali</b> entered the Eighth Schedule in <b>1992</b>. Uttarakhand (2010) and Himachal (2019) made <b>Sanskrit</b> their second official language, and J&K’s 2020 Act lists <b>five</b> (Kashmiri, Dogri, Urdu, Hindi, English). Tripura uses <b>Bengali and Kokborok</b>.</p>", key:"25 high courts; oldest Calcutta (1862); Gauhati HC = 4 states; HCs away from capitals: Prayagraj, Jabalpur, Jodhpur, Bilaspur, Nainital, Kochi, Cuttack, Ahmedabad."},
  {k:"table", title:"Where each high court sits", head:["State / UT","High court seat","Note"], rows: S9.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Benches", head:["Bench at","High court","Note"], rows: S9B.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Official languages", head:["State / UT","Official language","Note"], rows: S9L.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"High courts away from the capital — <b>“Please Judge Justly, Brave Nainital Kochi Cuttack Ahmedabad”</b>: <b>P</b>rayagraj, <b>J</b>abalpur, <b>J</b>odhpur, <b>B</b>ilaspur, <b>N</b>ainital, <b>K</b>ochi, <b>C</b>uttack, <b>A</b>hmedabad. English-language states — <b>“NAM”</b>: <b>N</b>agaland, <b>A</b>runachal, <b>M</b>eghalaya."},
  {k:"trap", h:"<b>Lucknow</b> and <b>Jaipur</b> are only <b>benches</b>; the main seats are Prayagraj and Jodhpur. <b>Delhi</b> has its own high court, but <b>Puducherry</b> uses the Madras High Court and <b>Lakshadweep</b> the Kerala High Court."}
], sum:["India has 25 high courts; the oldest is Calcutta (1862).","High courts away from capitals: Prayagraj, Jabalpur, Jodhpur, Bilaspur, Nainital, Kochi, Cuttack, Ahmedabad.","Gauhati High Court serves Assam, Nagaland, Mizoram and Arunachal; Punjab and Haryana share one at Chandigarh.","Meghalaya, Manipur and Tripura got high courts in 2013; AP and Telangana in 2019.","English is the official language of Nagaland, Arunachal and Meghalaya; Konkani of Goa."]},

{id:"S10", heat:3, title:"Records, borders and state symbols", hi:"रिकॉर्ड, सीमाएँ और राजकीय प्रतीक", blocks:[
  {k:"hot", h:"Every paper has one ‘record’ question: <b>largest</b> (Rajasthan) and <b>smallest</b> (Goa) state, <b>most</b> (UP) and <b>least</b> (Sikkim) populous, <b>densest</b> (Bihar), <b>literacy</b> (Kerala), <b>borders</b> (UP, Tropic of Cancer, neighbouring countries). State animals and birds come up in CHSL and MTS."},
  {k:"story", h:"<p>Picture India as a family photo. The biggest member is <b>Rajasthan</b>, then <b>MP</b> and <b>Maharashtra</b>; the tiniest is <b>Goa</b>, then <b>Sikkim</b>. <b>UP</b> has the most people and touches the most states; <b>Sikkim</b> has the fewest people. <b>Bihar</b> is the most crowded and <b>Arunachal</b> the emptiest. <b>Kerala</b> tops literacy and sex ratio, while <b>Haryana</b> has the lowest sex ratio (Census 2011). <b>Gujarat</b> has the longest coastline of the <b>nine coastal states</b>.</p><p>The <b>Tropic of Cancer</b> crosses <b>eight</b> states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram. Five states touch <b>Bangladesh</b> (WB, Assam, Meghalaya, Tripura, Mizoram), five touch <b>Nepal</b> (Uttarakhand, UP, Bihar, WB, Sikkim) and four touch <b>Bhutan</b> (Sikkim, WB, Assam, Arunachal). Every state also has its own animal, bird, flower and tree — Gujarat’s lion, Assam’s rhino, Rajasthan’s great Indian bustard.</p>", key:"Largest Rajasthan, smallest Goa; most people UP, fewest Sikkim; densest Bihar; literacy Kerala; Tropic of Cancer — 8 states."},
  {k:"table", title:"Which state holds the record?", head:["Which state …","State","Note"], rows: S10.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"State animals", head:["State / UT","State animal","Note"], rows: S10A.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"State birds", head:["State / UT","State bird","Note"], rows: S10B.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Borders at a glance", rows:[
    ["Pakistan","Gujarat, Rajasthan, Punjab (and the UTs of J&K and Ladakh)"],
    ["China","Himachal Pradesh, Uttarakhand, Sikkim, Arunachal Pradesh (and Ladakh)"],
    ["Nepal","Uttarakhand, Uttar Pradesh, Bihar, West Bengal, Sikkim"],
    ["Bhutan","Sikkim, West Bengal, Assam, Arunachal Pradesh"],
    ["Bangladesh","West Bengal (longest), Assam, Meghalaya, Tripura, Mizoram"],
    ["Myanmar","Arunachal Pradesh, Nagaland, Manipur, Mizoram"],
    ["Coastal states (9)","Gujarat, Maharashtra, Goa, Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Odisha, West Bengal"]
  ]},
  {k:"facts", title:"A few state flowers and trees", rows:[
    ["Kerala","Flower: Kanikonna (golden shower) · Tree: coconut palm"],
    ["Uttarakhand","Flower: Brahma kamal · Tree: burans (rhododendron)"],
    ["Rajasthan","Flower: rohida · Tree: khejri"],
    ["Uttar Pradesh","Flower: palash · Tree: ashoka"],
    ["Maharashtra","Flower: jarul · Tree: mango"],
    ["Karnataka","Tree: sandalwood"]
  ]},
  {k:"trick", h:"Tropic of Cancer, west to east — <b>“Gujarat Ran Madly, Chhattisgarh Jumped, West Tripped Mizoram”</b>: <b>G</b>ujarat, <b>R</b>ajasthan, <b>M</b>P, <b>C</b>hhattisgarh, <b>J</b>harkhand, <b>W</b>est Bengal, <b>T</b>ripura, <b>M</b>izoram."},
  {k:"trap", h:"<b>Bihar</b> is both the <b>densest</b> state and the one with the <b>lowest literacy</b> (2011). The largest <b>UT</b> is Ladakh, but the largest <b>state</b> is Rajasthan. The Tropic of Cancer does <b>not</b> cross Odisha, Bihar or UP."}
], sum:["Largest states: Rajasthan, MP, Maharashtra; smallest: Goa, then Sikkim.","Most populous: UP; least populous: Sikkim; densest: Bihar; emptiest: Arunachal (Census 2011).","Kerala tops literacy and sex ratio; Haryana has the lowest sex ratio.","The Tropic of Cancer crosses 8 states; 9 states have a coastline, Gujarat the longest.","State animals: lion Gujarat, rhino Assam, sangai Manipur, red panda Sikkim, barasingha MP."]}
);

pairQs("S8", S8, { q: t => `What is the capital of ${t}?`, rq: a => `${a} is the capital of which Union Territory?`, extra: ["Silvassa","Diu","Kargil","Minicoy"] });
pairQs("S8", S8K, { q: t => `Which Union Territory ${t}?`, extra: ["Puducherry"] });
pairQs("S9", S9, { q: t => `The high court for ${t} sits at:`, rq: a => `The high court at ${a} is the main high court of:` });
pairQs("S9", S9B, { q: t => `${t} has a bench of which high court?`, rq: a => `Which city has a bench of the ${a}?`, extra: ["Delhi High Court","Patna High Court"] });
pairQs("S9", S9L, { q: t => `The official language of ${t} is:`, rq: a => `${a} is the official language of:` });
pairQs("S10", S10, { q: t => `Which state ${t}?`, extra: ["Uttar Pradesh","Tamil Nadu"] });
pairQs("S10", S10A, { q: t => `The state animal of ${t} is:`, rq: a => `${a} — the state animal of which state or UT?` });
pairQs("S10", S10B, { q: t => `The state bird of ${t} is:`, rq: a => `${a} — the state bird of which state or UT?` });

QB.push(
["S8","Lakshadweep’s High Court is located in which state?",["Kerala","Karnataka","Tamil Nadu","Goa"],"Lakshadweep comes under the Kerala High Court at Kochi.","p","","","SSC CPO · 3 Jul 2017 (Afternoon)"],
["S8","How many Union Territories does India have now?",["8","9","7","6"],"Since 26 January 2020 (as of October 2026).","p"],
["S8","Which UTs have an elected legislature?",["Delhi, Puducherry, Jammu and Kashmir","Delhi, Chandigarh, Puducherry","Delhi, Ladakh, Jammu and Kashmir","Puducherry, Chandigarh, Lakshadweep"],"Of the eight UTs, only Delhi, Puducherry and Jammu and Kashmir have elected legislatures.","p"],
["S8","Which Article contains the special provisions for Delhi?",["Article 239AA","Article 370","Article 371","Article 240"],"Added by the 69th Amendment, 1991.","p"],
["S8","The presidential order that made Article 370 inoperative was issued on:",["5 August 2019","31 October 2019","26 January 2020","15 August 2019"],"The two new UTs came into being on 31 October 2019.","p"],
["S8","Chandigarh became a Union Territory in:",["1966","1956","1953","1971"],"When Haryana was carved out of Punjab.",""],
["S8","Port Blair, the capital of the Andaman and Nicobar Islands, was renamed in 2024 as:",["Sri Vijaya Puram","Swaraj Dweep","Shaheed Dweep","Netaji Subhas Chandra Bose Dweep"],"Swaraj Dweep and Shaheed Dweep are the renamed Havelock and Neil islands.","p"],
["S8","Karaikal, a part of Puducherry, lies inside which state?",["Tamil Nadu","Kerala","Andhra Pradesh","Karnataka"],"Mahe is in Kerala and Yanam in Andhra Pradesh.",""],
["S9","Which is the oldest high court in India?",["Calcutta High Court","Bombay High Court","Madras High Court","Allahabad High Court"],"Set up in 1862.","p"],
["S9","How many high courts does India have (as of 2026)?",["25","24","21","28"],"India has 25 High Courts; Andhra Pradesh got the newest, at Amaravati, in 2019.","p"],
["S9","Which high court serves four states?",["Gauhati High Court","Bombay High Court","Calcutta High Court","Punjab and Haryana High Court"],"Assam, Nagaland, Mizoram and Arunachal Pradesh.","p"],
["S9","Which Article allows a common high court for two or more states?",["Article 231","Article 214","Article 226","Article 124"],"Article 214 gives each state a high court.",""],
["S9","Meghalaya, Manipur and Tripura got their own high courts in:",["2013","2019","2000","1972"],"Meghalaya, Manipur and Tripura got their own High Courts in March 2013.",""],
["S9","In which of these states is the high court NOT in the capital city?",["Rajasthan","Bihar","Jharkhand","Telangana"],"Rajasthan’s high court is at Jodhpur.","p"],
["S9","Konkani, Manipuri and Nepali were added to the Eighth Schedule in:",["1992","2003","1967","1956"],"By the 71st Amendment.",""],
["S9","Which state was the first to make Sanskrit its second official language?",["Uttarakhand","Himachal Pradesh","Uttar Pradesh","Madhya Pradesh"],"In 2010; Himachal followed in 2019.",""],
["S10","Which is the most populous state according to the 2011 Census?",["Uttar Pradesh","Maharashtra","Bihar","West Bengal"],"About 19.98 crore people.","p","","","SSC CGL · 7 Jun 2019 (Shift 1)"],
["S10","Through which of the following states does the Tropic of Cancer pass?",["Mizoram","Odisha","Bihar","Maharashtra"],"It crosses Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram.","p","","","SSC CHSL · 16 Oct 2020 (Shift 3)"],
["S10","The Tropic of Cancer passes through how many Indian states?",["8","6","7","9"],"The Tropic of Cancer crosses eight states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram.","p"],
["S10","How many Indian states share a border with Bangladesh?",["5","4","3","6"],"West Bengal, Assam, Meghalaya, Tripura and Mizoram.","p"],
["S10","How many Indian states share a border with Nepal?",["5","4","6","3"],"Uttarakhand, UP, Bihar, West Bengal and Sikkim.","p"],
["S10","Which of these states does NOT border Bhutan?",["Nagaland","Sikkim","Assam","Arunachal Pradesh"],"Bhutan borders Sikkim, West Bengal, Assam and Arunachal Pradesh, but not Nagaland.",""],
["S10","Which of these states does NOT border China?",["Punjab","Himachal Pradesh","Uttarakhand","Sikkim"],"Ladakh, Himachal, Uttarakhand, Sikkim and Arunachal border China; Punjab borders Pakistan.",""],
["S10","Which of these states shares a border with Pakistan?",["Gujarat","Haryana","Himachal Pradesh","Maharashtra"],"Gujarat, Rajasthan and Punjab (plus J&K and Ladakh).","p"],
["S10","Which state has the longest border with Bangladesh?",["West Bengal","Assam","Tripura","Meghalaya"],"West Bengal has the longest border with Bangladesh, about 2,217 km.",""],
["S10","How many Indian states have a sea coast?",["9","7","8","11"],"Nine states have a sea coast: Gujarat, Maharashtra, Goa, Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Odisha and West Bengal.","p"]
);

LASTMOMENT.push(
{t:"UT capitals", era:["su"], rows:[["Delhi","New Delhi"],["J&K","Srinagar / Jammu"],["Ladakh","Leh"],["Lakshadweep","Kavaratti"],["A&N Islands","Sri Vijaya Puram"],["DNH and DD","Daman"],["Puducherry","Puducherry"],["Chandigarh","Chandigarh"]]},
{t:"High courts away from capitals", era:["su"], rows:[["UP","Prayagraj"],["MP","Jabalpur"],["Rajasthan","Jodhpur"],["Chhattisgarh","Bilaspur"],["Uttarakhand","Nainital"],["Kerala","Kochi"],["Odisha","Cuttack"],["Gujarat","Ahmedabad"]]},
{t:"Records", era:["su"], rows:[["Largest","Rajasthan"],["Smallest","Goa"],["Most populous","Uttar Pradesh"],["Least populous","Sikkim"],["Densest","Bihar"],["Literacy","Kerala"],["Longest coast","Gujarat"],["Most neighbours","Uttar Pradesh"]]}
);
TILES.push(["1862","Calcutta, oldest high court","su"],["25","High courts","su"],["3","UTs with a legislature","su"],["8","States on the Tropic of Cancer","su"],["2019","J&K split into two UTs","su"],["2020","DNH and DD merged","su"]);

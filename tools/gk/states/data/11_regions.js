/* Part 2 · S4 the east; S5 the North-East; S6 the west; S7 the south (as of October 2026). */
const S4 = [
  ["Bihar","Patna","The ancient Pataliputra.","p",1],
  ["Jharkhand","Ranchi","The ‘City of Waterfalls’.","p"],
  ["Odisha","Bhubaneswar","The ‘Temple City’; the high court is at Cuttack.","p"],
  ["West Bengal","Kolkata","Capital of British India until 1911.","p"]
];
const S4K = [
  ["celebrates its foundation day on 22 March (separated from Bengal in 1912)","Bihar","Bihar Diwas.",""],
  ["is home to Nalanda, Bodh Gaya and Vaishali","Bihar","",""],
  ["was carved out of Bihar on Birsa Munda’s birth anniversary, 15 November 2000","Jharkhand","The 28th state.","p"],
  ["has a name meaning ‘land of forests’ and is rich in coal and minerals","Jharkhand","",""],
  ["celebrates the Sarhul festival of the tribes","Jharkhand","",""],
  ["became a separate province on 1 April 1936 — Utkal Divas","Odisha","The first province formed on the basis of language.","p"],
  ["is home to the Konark Sun Temple and the Jagannath Rath Yatra of Puri","Odisha","",""],
  ["is the home of the Odissi dance","Odisha","",""],
  ["borders three countries — Bangladesh, Nepal and Bhutan","West Bengal","It also has the longest border with Bangladesh.","p"],
  ["has the Siliguri Corridor, the ‘Chicken’s Neck’","West Bengal","The narrow strip that links the North-East to the rest of India.","p"],
  ["is famous for Durga Puja, on UNESCO’s intangible heritage list since 2021","West Bengal","",""]
];
const S5 = [
  ["Assam","Dispur","A part of Guwahati; Shillong was Assam’s capital until 1972.","p"],
  ["Arunachal Pradesh","Itanagar","","p"],
  ["Manipur","Imphal","","p"],
  ["Meghalaya","Shillong","The ‘Scotland of the East’.","p"],
  ["Mizoram","Aizawl","","p"],
  ["Nagaland","Kohima","","p"],
  ["Tripura","Agartala","","p"],
  ["Sikkim","Gangtok","","p"]
];
const S5K = [
  ["is called the ‘Land of the Rising Sun’ (Land of the Dawn-lit Mountains)","Arunachal Pradesh","India’s easternmost state.","p"],
  ["borders China, Bhutan and Myanmar","Arunachal Pradesh","",""],
  ["is called the ‘Abode of Clouds’","Meghalaya","From Sanskrit megha (cloud) + alaya (home).","p"],
  ["has Mawsynram and Sohra (Cherrapunji), among the wettest places on Earth","Meghalaya","","p"],
  ["was called the ‘Jewel of India’ by Nehru and has Loktak Lake","Manipur","",""],
  ["is the home of the Manipuri dance and the sport of polo (sagol kangjei)","Manipur","",""],
  ["is called the ‘Land of Festivals’ and holds the Hornbill Festival every December","Nagaland","1–10 December, Kisama village near Kohima.","p"],
  ["became a state on 1 December 1963, the first in the North-East after Assam","Nagaland","The 16th state.",""],
  ["became the first fully organic state of India in 2016","Sikkim","","p"],
  ["is the only North-Eastern state that is not one of the ‘Seven Sisters’","Sikkim","It joined the North Eastern Council in 2002.","p"],
  ["is surrounded by Bangladesh on three sides","Tripura","",""],
  ["became a state after the Mizo Accord of 1986","Mizoram","Statehood on 20 February 1987.",""],
  ["is the home of the Bihu festival and the Sattriya dance","Assam","","p"],
  ["has Majuli, a large inhabited river island on the Brahmaputra","Assam","",""]
];
const S6 = [
  ["Gujarat","Gandhinagar","Capital since 1970; the high court is at Ahmedabad.","p"],
  ["Maharashtra","Mumbai","The legislature’s winter session meets at Nagpur.","p"],
  ["Maharashtra (second / winter)","Nagpur","The ‘Orange City’, at the centre of India.","p"],
  ["Goa","Panaji","The Assembly sits at Porvorim, across the Mandovi river.","p"]
];
const S6K = [
  ["has the Rann of Kutch and the Statue of Unity","Gujarat","The Statue of Unity (Sardar Patel) is the world’s tallest statue.","p"],
  ["has the Harappan sites Lothal and Dholavira","Gujarat","",""],
  ["is the home of Garba and Dandiya at Navratri","Gujarat","Garba entered UNESCO’s intangible heritage list in 2023.","p"],
  ["has the Ajanta and Ellora caves","Maharashtra","Both UNESCO sites since 1983.","p"],
  ["is the home of the Lavani dance and Ganesh Chaturthi celebrations","Maharashtra","",""],
  ["was freed from Portuguese rule on 19 December 1961","Goa","Operation Vijay.","p"],
  ["became India’s 25th state on 30 May 1987","Goa","",""],
  ["has followed a common civil code since Portuguese times","Goa","",""]
];
const S7 = [
  ["Andhra Pradesh","Amaravati","Hyderabad was the shared capital of AP and Telangana until 2 June 2024.","p"],
  ["Andhra State (1953–56)","Kurnool","The first linguistic state’s capital.",""],
  ["Telangana","Hyderabad","","p"],
  ["Karnataka","Bengaluru","The ‘Silicon Valley of India’.","p"],
  ["Kerala","Thiruvananthapuram","The high court is at Kochi (Ernakulam).","p"],
  ["Tamil Nadu","Chennai","","p"]
];
const S7K = [
  ["is called ‘God’s Own Country’","Kerala","","p"],
  ["is the home of Kathakali and Mohiniyattam, and the Onam festival","Kerala","","p"],
  ["was formed on 1 November 1956 by joining Travancore-Cochin with Malabar","Kerala","Kerala Piravi day.",""],
  ["is India’s youngest state, formed on 2 June 2014","Telangana","The 29th state.","p"],
  ["has the Charminar and the Ramappa (Kakatiya) temple","Telangana","Ramappa became a UNESCO site in 2021.",""],
  ["is the home of the Kuchipudi dance","Andhra Pradesh","Named after a village in Krishna district.","p"],
  ["was formed in 1956 by joining Andhra State with the Telugu areas of Hyderabad State","Andhra Pradesh","",""],
  ["was called Mysore State until 1973","Karnataka","","p"],
  ["has Hampi and the Yakshagana folk theatre","Karnataka","",""],
  ["was called Madras State until 1969","Tamil Nadu","","p"],
  ["is the home of Bharatanatyam and the Pongal festival","Tamil Nadu","","p"],
  ["has Kanyakumari, the southern tip of mainland India","Tamil Nadu","",""]
];

LESSONS.push(
{id:"S4", heat:2, title:"The east: Bihar, Jharkhand, Odisha, West Bengal", hi:"पूर्वी भारत: बिहार, झारखंड, ओडिशा, पश्चिम बंगाल", blocks:[
  {k:"hot", h:"Most asked: the capitals (<b>Patna, Ranchi, Bhubaneswar, Kolkata</b>), <b>Jharkhand from Bihar (15 November 2000)</b>, Odisha as the first language-based province (<b>1936</b>), and <b>West Bengal</b> bordering three countries."},
  {k:"story", h:"<p>The four states of the <b>Eastern Zonal Council</b> share one history. Bengal Presidency once ruled them all; <b>Bihar and Orissa</b> were split off in 1912 (Bihar Diwas, 22 March), and <b>Orissa</b> became its own province on <b>1 April 1936</b> — the first drawn by language. In 2011 it became <b>Odisha</b>. <b>Jharkhand</b>, the ‘land of forests’ and coal, was carved from Bihar on <b>15 November 2000</b>, Birsa Munda’s birthday, with <b>Ranchi</b> as capital.</p><p><b>Kolkata</b>, capital of <b>West Bengal</b>, was the capital of British India until <b>1911</b>. West Bengal touches <b>Bangladesh, Nepal and Bhutan</b>, and its <b>Siliguri Corridor</b> — the ‘Chicken’s Neck’ — is the only land link to the North-East. <b>Bihar</b> (capital <b>Patna</b>) has the highest population density of any state (Census 2011).</p>", key:"Bihar → Patna; Jharkhand → Ranchi (2000, from Bihar); Odisha → Bhubaneswar (province 1936); West Bengal → Kolkata (3 foreign neighbours)."},
  {k:"table", title:"Capitals", head:["State","Capital","Note"], rows: S4.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Which state is it?", head:["Which state …","State","Note"], rows: S4K.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Patna Rides Bhubaneswar’s Kolkata bus”</b> — P-R-B-K: Patna (Bihar), Ranchi (Jharkhand), Bhubaneswar (Odisha), Kolkata (WB) — the east, west to east."},
  {k:"trap", h:"<b>Chhau</b> dance belongs to three states (Seraikela in Jharkhand, Mayurbhanj in Odisha, Purulia in WB) — don’t tie it to one. Odisha’s high court is at <b>Cuttack</b>, not Bhubaneswar."}
], sum:["Bihar (Patna) — highest population density; Bihar Diwas 22 March.","Jharkhand (Ranchi) was carved from Bihar on 15 November 2000.","Odisha (Bhubaneswar) became a province on 1 April 1936 — the first by language; renamed in 2011.","West Bengal (Kolkata) borders Bangladesh, Nepal and Bhutan and has the Siliguri Corridor.","All four form the Eastern Zonal Council."]},

{id:"S5", heat:3, title:"The North-East: eight states", hi:"पूर्वोत्तर के आठ राज्य", blocks:[
  {k:"hot", h:"A favourite: <b>capital of each North-Eastern state</b> (Dispur, Itanagar, Imphal, Shillong, Aizawl, Kohima, Agartala, Gangtok), the <b>nicknames</b> (Abode of Clouds, Land of the Rising Sun), the <b>Seven Sisters</b> and Sikkim, and the <b>years</b> (1963, 1972, 1975, 1987)."},
  {k:"story", h:"<p>Almost the whole North-East was once <b>Assam</b>. Out of it came <b>Nagaland</b> (1963), <b>Meghalaya</b> (1972), and <b>Mizoram</b> and <b>Arunachal Pradesh</b> (UTs in 1972, states in 1987). <b>Manipur</b> and <b>Tripura</b>, former princely states, became states in 1972. When Shillong went to Meghalaya, Assam moved its capital to <b>Dispur</b>. These seven are the <b>‘Seven Sisters’</b>.</p><p><b>Sikkim</b>, a kingdom under the Chogyal, joined India as the <b>22nd state</b> in 1975 — the ‘brother’ of the sisters, linked to them through the North Eastern Council since 2002. Sikkim has the smallest population of any state and became the first fully <b>organic</b> state in 2016. <b>Arunachal</b>, India’s easternmost and largest north-eastern state, greets the sunrise first.</p>", key:"Assam–Dispur, Arunachal–Itanagar, Manipur–Imphal, Meghalaya–Shillong, Mizoram–Aizawl, Nagaland–Kohima, Tripura–Agartala, Sikkim–Gangtok."},
  {k:"table", title:"Capitals", head:["State","Capital","Note"], rows: S5.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Which state is it?", head:["Which state …","State","Note"], rows: S5K.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"North-East quick facts", rows:[
    ["Border Myanmar","Arunachal Pradesh, Nagaland, Manipur, Mizoram"],
    ["Border Bangladesh","Assam, Meghalaya, Tripura, Mizoram (and West Bengal)"],
    ["Border Bhutan","Sikkim, Assam, Arunachal Pradesh (and West Bengal)"],
    ["Border China","Sikkim, Arunachal Pradesh"],
    ["Gauhati High Court","Covers Assam, Nagaland, Mizoram and Arunachal Pradesh"],
    ["North Eastern Council","Statutory body (1971), HQ Shillong; Sikkim added 2002"]
  ]},
  {k:"trick", h:"Capitals of the sisters — <b>“DIIS AKA”</b>: <b>D</b>ispur, <b>I</b>tanagar, <b>I</b>mphal, <b>S</b>hillong, <b>A</b>izawl, <b>K</b>ohima, <b>A</b>gartala — and brother Sikkim’s <b>G</b>angtok."},
  {k:"trap", h:"<b>Shillong</b> is Meghalaya’s capital now, not Assam’s. <b>Sikkim</b> is in the North-East but is <b>not</b> a ‘sister’. Nagaland (1963) came long before Mizoram and Arunachal (1987)."}
], sum:["Seven Sisters: Assam, Arunachal, Manipur, Meghalaya, Mizoram, Nagaland, Tripura; Sikkim is the 'brother'.","Capitals: Dispur, Itanagar, Imphal, Shillong, Aizawl, Kohima, Agartala, Gangtok.","Nagaland 1963; Manipur, Tripura, Meghalaya 1972; Sikkim 1975; Mizoram and Arunachal 1987.","Meghalaya is the Abode of Clouds; Arunachal the Land of the Rising Sun; Nagaland the Land of Festivals.","Sikkim: smallest population and first fully organic state (2016)."]},

{id:"S6", heat:2, title:"The west: Gujarat, Maharashtra, Goa", hi:"पश्चिमी भारत: गुजरात, महाराष्ट्र, गोवा", blocks:[
  {k:"hot", h:"Most asked: <b>Gandhinagar</b> (not Ahmedabad), <b>Mumbai and Nagpur</b>, <b>Goa</b> as the smallest state and its <b>1961 liberation</b>, and <b>1 May 1960</b> when Bombay State split into Gujarat and Maharashtra."},
  {k:"story", h:"<p>After 1956, <b>Bombay State</b> held both Marathi and Gujarati speakers. The Samyukta Maharashtra and Mahagujarat movements split it on <b>1 May 1960</b> — so both states celebrate their birthday on the same day. <b>Gujarat</b> moved its capital from Ahmedabad to the planned city of <b>Gandhinagar</b> in 1970; it has India’s <b>longest coastline</b>. <b>Maharashtra</b> rules from <b>Mumbai</b> and holds its winter session in <b>Nagpur</b>.</p><p><b>Goa</b> stayed Portuguese until Indian troops freed it in <b>Operation Vijay</b> on <b>19 December 1961</b>. It was a UT with Daman and Diu until it became the <b>25th state</b> on <b>30 May 1987</b>, with <b>Panaji</b> as capital. It is India’s <b>smallest state by area</b>. These three, with DNH and DD, form the <b>Western Zonal Council</b>.</p>", key:"Gujarat → Gandhinagar; Maharashtra → Mumbai (Nagpur in winter); Goa → Panaji. Gujarat and Maharashtra: 1 May 1960; Goa freed 1961, state 1987."},
  {k:"table", title:"Capitals", head:["State","Capital","Note"], rows: S6.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Which state is it?", head:["Which state …","State","Note"], rows: S6K.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“May Day twins”</b> — Gujarat and Maharashtra were born together on <b>1 May 1960</b>. <b>Goa</b>: <b>“61 free, 87 state”</b>."},
  {k:"trap", h:"Gujarat’s capital is <b>Gandhinagar</b>; its high court is in <b>Ahmedabad</b>. Goa has no high court of its own — a bench of the <b>Bombay High Court</b> sits in Goa."}
], sum:["Bombay State split into Gujarat and Maharashtra on 1 May 1960.","Gujarat (Gandhinagar, since 1970) has the longest coastline.","Maharashtra: Mumbai, with Nagpur as the winter capital.","Goa (Panaji) was freed on 19 December 1961 and became the 25th state on 30 May 1987.","Goa is the smallest state by area."]},

{id:"S7", heat:3, title:"The south: Andhra, Telangana, Karnataka, Kerala, Tamil Nadu", hi:"दक्षिण भारत: आंध्र, तेलंगाना, कर्नाटक, केरल, तमिलनाडु", blocks:[
  {k:"hot", h:"Most asked: <b>Telangana</b> — the youngest state (2 June 2014); <b>Andhra State (1953)</b> — the first linguistic state; <b>old names</b> (Mysore → Karnataka 1973, Madras → Tamil Nadu 1969); and Kerala’s records (literacy, sex ratio)."},
  {k:"story", h:"<p>The story of linguistic states begins here. <b>Andhra State</b> (capital <b>Kurnool</b>) came in 1953; in 1956 it joined the Telugu districts of Hyderabad State to form <b>Andhra Pradesh</b>, with Hyderabad as capital. In <b>2014</b> those Telangana districts became <b>India’s 29th and youngest state</b>; Hyderabad stayed the shared capital until 2 June 2024, and Andhra Pradesh builds its capital at <b>Amaravati</b>.</p><p><b>Kerala</b> was formed in 1956 from Travancore-Cochin and Malabar — ‘God’s Own Country’, with the highest literacy and best sex ratio (Census 2011). <b>Mysore State</b> became <b>Karnataka</b> in 1973 (capital <b>Bengaluru</b>), and <b>Madras State</b> became <b>Tamil Nadu</b> in 1969 (capital <b>Chennai</b>). With Puducherry these five form the <b>Southern Zonal Council</b>.</p>", key:"AP → Amaravati; Telangana → Hyderabad (2014); Karnataka → Bengaluru (Mysore until 1973); Kerala → Thiruvananthapuram; TN → Chennai (Madras until 1969)."},
  {k:"table", title:"Capitals", head:["State","Capital","Note"], rows: S7.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Which state is it?", head:["Which state …","State","Note"], rows: S7K.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Classical dances of the south (briefly)", rows:[["Bharatanatyam","Tamil Nadu"],["Kathakali, Mohiniyattam","Kerala"],["Kuchipudi","Andhra Pradesh"],["Yakshagana (folk theatre)","Karnataka"]]},
  {k:"trick", h:"Renamings in order — <b>“M-M, 69-73”</b>: <b>M</b>adras → Tamil Nadu (<b>1969</b>), <b>M</b>ysore → Karnataka (<b>1973</b>)."},
  {k:"trap", h:"Kerala’s capital is <b>Thiruvananthapuram</b>, but its high court is at <b>Kochi</b>. The first linguistic state is <b>Andhra (1953)</b>, not Andhra Pradesh (1956)."}
], sum:["Andhra State (1953, Kurnool) was the first linguistic state; Andhra Pradesh followed in 1956.","Telangana (Hyderabad) became the 29th and youngest state on 2 June 2014.","Andhra Pradesh's capital is Amaravati; Hyderabad was shared until 2 June 2024.","Mysore became Karnataka in 1973; Madras State became Tamil Nadu in 1969.","Kerala: highest literacy and best sex ratio (Census 2011)."]}
);

pairQs("S4", S4, { q: t => `What is the capital of ${t}?`, rq: a => `${a} is the capital of:`, extra: ["Cuttack","Jamshedpur","Gaya","Darjeeling"] });
pairQs("S4", S4K, { q: t => `Which state ${t}?`, extra: ["Assam","Chhattisgarh","Sikkim"] });
pairQs("S5", S5, { q: t => `What is the capital of ${t}?`, rq: a => `${a} is the capital of:` });
pairQs("S5", S5K, { q: t => `Which state ${t}?` });
pairQs("S6", S6, { q: t => `What is the capital of ${t}?`, rq: a => `${a} is the capital of:`, extra: ["Ahmedabad","Pune","Margao","Surat"] });
pairQs("S6", S6K, { q: t => `Which state ${t}?`, extra: ["Rajasthan","Karnataka","Madhya Pradesh"] });
pairQs("S7", S7, { q: t => `What is the capital of ${t}?`, rq: a => `${a} is the capital of:`, extra: ["Visakhapatnam","Mysuru","Kochi","Madurai"] });
pairQs("S7", S7K, { q: t => `Which state ${t}?` });

QB.push(
["S4","Patna is the capital city of:",["Bihar","Jharkhand","Odisha","West Bengal"],"Patna was ancient Pataliputra.","p","","","SSC CHSL · 3 Feb 2017 (Afternoon)"],
["S4","The capital of British India moved from Calcutta to Delhi in:",["1911","1931","1905","1947"],"Announced at the Delhi Durbar, 1911; New Delhi was inaugurated in 1931.","p"],
["S4","Bihar and Orissa were separated into two provinces in:",["1936","1912","1905","1947"],"Orissa became a province on 1 April 1936.",""],
["S4","Which of these is NOT in the Eastern Zonal Council?",["Assam","Bihar","Jharkhand","Odisha"],"Assam is in the North Eastern Council.",""],
["S4","Ranchi is popularly called the:",["City of Waterfalls","City of Lakes","Temple City","City of Joy"],"Hundru, Dassam and Jonha falls are nearby. (Kolkata is the City of Joy.)",""],
["S4","The Siliguri Corridor, the ‘Chicken’s Neck’, links mainland India with:",["the North-East","Bhutan","Bangladesh","Nepal"],"It lies in West Bengal.","p"],
["S5","Which of these is NOT one of the ‘Seven Sisters’?",["Sikkim","Tripura","Mizoram","Meghalaya"],"Sikkim joined the North Eastern Council only in 2002.","p"],
["S5","Before 1972, the capital of Assam was:",["Shillong","Guwahati","Jorhat","Tezpur"],"Shillong went to the new state of Meghalaya; Assam moved to Dispur.","p"],
["S5","Which group of states borders Myanmar?",["Arunachal Pradesh, Nagaland, Manipur, Mizoram","Assam, Meghalaya, Tripura, Mizoram","Sikkim, Assam, Arunachal Pradesh, Nagaland","Manipur, Tripura, Assam, Meghalaya"],"Four states border Myanmar.","p"],
["S5","Sikkim became India’s 22nd state through the:",["36th Amendment, 1975","35th Amendment, 1974","13th Amendment, 1962","56th Amendment, 1987"],"The 35th Amendment had made it an ‘associate state’ in 1974.",""],
["S5","Which state became a state on the same day as Mizoram (20 February 1987)?",["Arunachal Pradesh","Goa","Manipur","Tripura"],"Goa followed on 30 May 1987.","p"],
["S5","Sikkim borders which one Indian state?",["West Bengal","Assam","Bihar","Arunachal Pradesh"],"Its other neighbours are China, Nepal and Bhutan.",""],
["S6","Bombay State was split into Gujarat and Maharashtra by the:",["Bombay Reorganisation Act, 1960","States Reorganisation Act, 1956","Punjab Reorganisation Act, 1966","Goa, Daman and Diu Reorganisation Act, 1987"],"In force on 1 May 1960.",""],
["S6","Goa was freed from Portuguese rule by:",["Operation Vijay","Operation Polo","Operation Meghdoot","Operation Blue Star"],"19 December 1961 — Goa Liberation Day.","p"],
["S6","Maharashtra Day and Gujarat Day both fall on:",["1 May","1 November","26 January","2 October"],"Both states were formed on 1 May 1960.","p"],
["S6","Before Gandhinagar (1970), Gujarat’s capital was:",["Ahmedabad","Surat","Vadodara","Rajkot"],"",""],
["S6","Which UT is a member of the Western Zonal Council?",["Dadra and Nagar Haveli and Daman and Diu","Lakshadweep","Puducherry","Chandigarh"],"Its members: Goa, Gujarat, Maharashtra and DNH & DD.",""],
["S7","Hyderabad State joined India in 1948 through:",["Operation Polo","Operation Vijay","Operation Meghdoot","Operation Trident"],"September 1948.","p"],
["S7","Until when was Hyderabad the shared capital of Andhra Pradesh and Telangana?",["2 June 2024","2 June 2019","1 November 2016","26 January 2020"],"Ten years from 2 June 2014, under the AP Reorganisation Act.",""],
["S7","Karnataka’s legislature holds its winter session in the Suvarna Vidhana Soudha at:",["Belagavi","Mysuru","Hubballi","Kalaburagi"],"",""],
["S7","Kerala was formed in 1956 by joining Travancore-Cochin with:",["Malabar (from Madras State)","Coorg","Hyderabad State","Pondicherry"],"Kerala Piravi is on 1 November.",""],
["S7","Which southern state was formed most recently?",["Telangana","Andhra Pradesh","Karnataka","Kerala"],"2 June 2014.","p"]
);

LASTMOMENT.push(
{t:"North-East capitals", era:["su"], rows:[["Assam","Dispur"],["Arunachal","Itanagar"],["Manipur","Imphal"],["Meghalaya","Shillong"],["Mizoram","Aizawl"],["Nagaland","Kohima"],["Tripura","Agartala"],["Sikkim","Gangtok"]]},
{t:"East, west and south capitals", era:["su"], rows:[["Bihar","Patna"],["Jharkhand","Ranchi"],["Odisha","Bhubaneswar"],["Gujarat","Gandhinagar"],["Goa","Panaji"],["Andhra Pradesh","Amaravati"],["Telangana","Hyderabad"],["Kerala","Thiruvananthapuram"]]}
);
TILES.push(["1936","Odisha, first language-based province","su"],["1960","Gujarat and Maharashtra (1 May)","su"],["1961","Goa freed (Operation Vijay)","su"],["2014","Telangana, the 29th state","su"]);

/* Part 2 · P5 biosphere reserves; P6 Ramsar sites; P7 UNESCO World Heritage sites (as of October 2026). */
const P5 = [
  ["Nilgiri","Tamil Nadu, Kerala and Karnataka","India's first (1986); UNESCO 2000.","p"],
  ["Nanda Devi","Uttarakhand","1988; UNESCO 2004.","p"],
  ["Nokrek","Meghalaya","1988; UNESCO 2009.","p"],
  ["Great Nicobar","Andaman and Nicobar Islands","1989; UNESCO 2013.","p"],
  ["Gulf of Mannar","Tamil Nadu","1989; UNESCO 2001 — India's first marine biosphere reserve.","p"],
  ["Manas","Assam","1989; not in the UNESCO list.",""],
  ["Sundarban","West Bengal","1989; UNESCO 2001.","p"],
  ["Simlipal","Odisha","1994; UNESCO 2009.","p"],
  ["Dibru-Saikhowa","Assam","1997; India's smallest biosphere reserve.",""],
  ["Dihang-Dibang","Arunachal Pradesh","1998.",""],
  ["Pachmarhi","Madhya Pradesh","1999; UNESCO 2009.","p"],
  ["Khangchendzonga","Sikkim","2000; UNESCO 2018.","p"],
  ["Agasthyamalai","Kerala and Tamil Nadu","2001; UNESCO 2016.","p"],
  ["Achanakmar-Amarkantak","Madhya Pradesh and Chhattisgarh","2005; UNESCO 2012.","p"],
  ["Great Rann of Kutch","Gujarat","2008; India's largest biosphere reserve.","p"],
  ["Cold Desert","Himachal Pradesh","2009 (16th); UNESCO September 2025 — the 13th Indian site in the list.","p"],
  ["Seshachalam","Andhra Pradesh","2010.","p|SSC CHSL 2021 · 24 May 2022"],
  ["Panna","Madhya Pradesh","2011 (18th); UNESCO 2020.","p"]
];
const P5U = [
  ["Nilgiri","2000"],["Gulf of Mannar","2001"],["Sundarban","2001"],["Nanda Devi","2004"],["Nokrek","2009"],["Pachmarhi","2009"],["Simlipal","2009"],
  ["Achanakmar-Amarkantak","2012"],["Great Nicobar","2013"],["Agasthyamalai","2016"],["Khangchendzonga","2018"],["Panna","2020"],["Cold Desert","2025"]
];
const P6 = [
  ["Chilika Lake","Odisha","India's first Ramsar site (1981) with Keoladeo; largest brackish-water lagoon in Asia.","p"],
  ["Keoladeo","Rajasthan","1981; on the Montreux Record.","p"],
  ["Wular Lake","Jammu and Kashmir","India's largest freshwater lake.","p"],
  ["Loktak Lake","Manipur","Floating phumdis; on the Montreux Record.","p"],
  ["Harike","Punjab","Where the Beas meets the Sutlej.","p"],
  ["Sambhar Lake","Rajasthan","India's largest inland salt lake.","p"],
  ["Tso Morari","Ladakh","",""],
  ["Tso Kar","Ladakh","High-altitude lake complex.","p|SSC CHSL 2020"],
  ["Renuka","Himachal Pradesh","India's smallest Ramsar site.","p|SSC MTS 2020"],
  ["Chandra Taal","Himachal Pradesh","",""],
  ["Pong Dam","Himachal Pradesh","",""],
  ["Deepor Beel","Assam","Assam's only Ramsar site.","p"],
  ["Rudrasagar","Tripura","",""],
  ["East Kolkata Wetlands","West Bengal","Uses wastewater for fish farming.","p"],
  ["Sundarban Wetland","West Bengal","India's largest Ramsar site.","p"],
  ["Kolleru Lake","Andhra Pradesh","",""],
  ["Vembanad-Kol","Kerala","Kerala's largest wetland.","p"],
  ["Ashtamudi","Kerala","",""],
  ["Sasthamkotta","Kerala","Kerala's largest freshwater lake.",""],
  ["Bhoj Wetland","Madhya Pradesh","The lakes of Bhopal.","p"],
  ["Sur Sarovar","Uttar Pradesh","Near Agra.",""],
  ["Sarsai Nawar Jheel","Uttar Pradesh","Sarus cranes, Etawah.","p|SSC CGL 2025 · 14 Sep 2025 (Shift 1)"],
  ["Patna Bird Sanctuary","Uttar Pradesh","In Etah district — added January 2026.",""],
  ["Nandur Madhameshwar","Maharashtra","Maharashtra's first Ramsar site.",""],
  ["Lonar Lake","Maharashtra","A crater lake made by a meteorite.","p"],
  ["Thane Creek","Maharashtra","Flamingos.",""],
  ["Nal Sarovar","Gujarat","",""],
  ["Khijadia","Gujarat","",""],
  ["Thol","Gujarat","",""],
  ["Chhari-Dhand","Gujarat","In Kutch — added January 2026.",""],
  ["Sultanpur","Haryana","",""],
  ["Bhindawas","Haryana","",""],
  ["Asan Barrage","Uttarakhand","Uttarakhand's first Ramsar site.",""],
  ["Pala Wetland","Mizoram","",""],
  ["Hirakud Reservoir","Odisha","",""],
  ["Bhitarkanika Mangroves","Odisha","",""],
  ["Kabartal","Bihar","Bihar's first Ramsar site.",""],
  ["Nanda Lake","Goa","",""],
  ["Ranganathittu","Karnataka","",""],
  ["Vedanthangal","Tamil Nadu","",""],
  ["Pallikaranai Marsh","Tamil Nadu","",""],
  ["Point Calimere","Tamil Nadu","",""],
  ["Pichavaram Mangrove","Tamil Nadu","",""],
  ["Yashwant Sagar","Madhya Pradesh","",""],
  ["Khecheopalri Lake","Sikkim","Sikkim's first Ramsar site (January 2025).",""],
  ["Udhwa Lake","Jharkhand","Jharkhand's first Ramsar site (January 2025).",""],
  ["Khichan","Rajasthan","Demoiselle cranes — added June 2025.",""],
  ["Menar","Rajasthan","The 'bird village' near Udaipur — added June 2025.",""],
  ["Hokera Wetland","Jammu and Kashmir","",""],
  ["Kanjli","Punjab","",""]
];
const P7 = [
  ["Ajanta Caves","Maharashtra","1983 — among India's first four sites.","p"],
  ["Ellora Caves","Maharashtra","1983 — Hindu, Buddhist and Jain caves.","p"],
  ["Agra Fort","Uttar Pradesh","1983.","p"],
  ["Taj Mahal","Uttar Pradesh","1983.","p"],
  ["Sun Temple, Konark","Odisha","1984 — the Black Pagoda.","p"],
  ["Group of Monuments at Mahabalipuram","Tamil Nadu","1984 — Pallava shore temples.","p"],
  ["Churches and Convents of Goa","Goa","1986.",""],
  ["Khajuraho Group of Monuments","Madhya Pradesh","1986 — Chandela temples.","p"],
  ["Group of Monuments at Hampi","Karnataka","1986 — capital of Vijayanagara.","p"],
  ["Fatehpur Sikri","Uttar Pradesh","1986 — Akbar's capital.","p"],
  ["Group of Monuments at Pattadakal","Karnataka","1987 — Chalukya temples.",""],
  ["Elephanta Caves","Maharashtra","1987.","p"],
  ["Great Living Chola Temples","Tamil Nadu","1987, extended 2004.","p"],
  ["Buddhist Monuments at Sanchi","Madhya Pradesh","1989.","p"],
  ["Humayun's Tomb","Delhi","1993.","p"],
  ["Qutb Minar and its Monuments","Delhi","1993.","p"],
  ["Mahabodhi Temple, Bodh Gaya","Bihar","2002.","p"],
  ["Rock Shelters of Bhimbetka","Madhya Pradesh","2003 — prehistoric paintings.","p"],
  ["Champaner-Pavagadh","Gujarat","2004.",""],
  ["Chhatrapati Shivaji Terminus","Maharashtra","2004 — Victorian Gothic railway station.","p"],
  ["Red Fort Complex","Delhi","2007.","p"],
  ["Jantar Mantar, Jaipur","Rajasthan","2010 — Sawai Jai Singh's observatory.","p"],
  ["Hill Forts of Rajasthan","Rajasthan","2013 — six forts incl. Chittorgarh and Kumbhalgarh.",""],
  ["Rani-ki-Vav, Patan","Gujarat","2014 — the stepwell on the ₹100 note.","p"],
  ["Archaeological Site of Nalanda Mahavihara","Bihar","2016.","p"],
  ["Capitol Complex (Le Corbusier)","Chandigarh","2016.",""],
  ["Historic City of Ahmedabad","Gujarat","2017 — India's first World Heritage City.","p"],
  ["Victorian Gothic and Art Deco Ensembles of Mumbai","Maharashtra","2018.",""],
  ["Jaipur City","Rajasthan","2019 — the Pink City.","p"],
  ["Dholavira","Gujarat","2021 — Harappan city in Kutch.","p"],
  ["Ramappa Temple (Kakatiya Rudreshwara)","Telangana","2021.","p"],
  ["Santiniketan","West Bengal","2023.","p"],
  ["Sacred Ensembles of the Hoysalas","Karnataka","2023 — Belur, Halebidu, Somanathapura.","p"],
  ["Moidams of Charaideo","Assam","2024 — Ahom royal burial mounds; first cultural site of the North-East.","p"],
  ["Maratha Military Landscapes","Maharashtra and Tamil Nadu","2025 — 12 forts incl. Raigad and Gingee; the 44th site.","p"],
  ["Sarnath","Uttar Pradesh","Inscribed 25 July 2026 at the 48th session (Busan) — the 45th site.",""],
  ["Kaziranga National Park","Assam","1985 — natural.","p"],
  ["Manas Wildlife Sanctuary","Assam","1985 — natural.",""],
  ["Keoladeo National Park","Rajasthan","1985 — natural.",""],
  ["Sundarbans National Park","West Bengal","1987 — natural.",""],
  ["Nanda Devi and Valley of Flowers","Uttarakhand","1988, extended 2005 — natural.",""],
  ["Great Himalayan National Park","Himachal Pradesh","2014 — natural.",""],
  ["Western Ghats","Kerala, Karnataka, Tamil Nadu and Maharashtra","2012 — natural; a biodiversity hotspot.","p"],
  ["Khangchendzonga National Park","Sikkim","2016 — India's only mixed site.","p"]
];

LESSONS.push(
{id:"P5", heat:3, title:"Biosphere reserves", hi:"जैवमंडल आरक्षित क्षेत्र", blocks:[
  {k:"hot", h:"Know the <b>18 biosphere reserves</b> with their states, the <b>first</b> (Nilgiri, 1986), the <b>largest</b> (Great Rann of Kutch) and <b>smallest</b> (Dibru-Saikhowa), and the <b>13 in UNESCO's list</b> — the newest, <b>Cold Desert</b>, joined in September 2025."},
  {k:"story", h:"<p>A biosphere reserve protects a whole landscape <i>and</i> the people living in it. It has three rings: a strictly protected <b>core</b>, a <b>buffer</b> for research and education, and a <b>transition</b> zone where villages and farms carry on. The idea comes from UNESCO's <b>Man and the Biosphere (MAB)</b> programme, started in <b>1971</b>.</p><p>India's first was <b>Nilgiri</b> (1986), spread over Tamil Nadu, Kerala and Karnataka. Today there are <b>18</b>, the last being <b>Panna</b> (2011). <b>13</b> are in UNESCO's World Network — <b>Cold Desert</b> in Himachal Pradesh became the 13th in September 2025. Manas, Dibru-Saikhowa, Dihang-Dibang, Great Rann of Kutch and Seshachalam are not yet in it.</p>", key:"18 biosphere reserves; first Nilgiri 1986; 13 in UNESCO (latest Cold Desert 2025); largest Great Rann of Kutch; smallest Dibru-Saikhowa."},
  {k:"table", title:"The 18 biosphere reserves", head:["Reserve","State(s)","Year / UNESCO"], rows: P5.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"When they joined UNESCO's World Network", head:["Reserve","Year"], rows: P5U},
  {k:"trick", h:"Five <b>not</b> in UNESCO — <b>“My Dear Dad Got Sick”</b>: <b>M</b>anas, <b>D</b>ibru-Saikhowa, <b>D</b>ihang-Dibang, <b>G</b>reat Rann of Kutch, <b>S</b>eshachalam."},
  {k:"trap", h:"<b>Manas</b> is a UNESCO <i>World Heritage site</i> but <b>not</b> a UNESCO <i>biosphere reserve</i>. The <b>Great Rann of Kutch</b> is the largest biosphere reserve; the <b>Indian Wild Ass Sanctuary</b> (Little Rann) is the largest sanctuary."}
], sum:["India has 18 biosphere reserves; the first was Nilgiri (1986), the latest Panna (2011).","13 are in UNESCO's World Network; Cold Desert (Himachal Pradesh) joined in September 2025.","Largest: Great Rann of Kutch (Gujarat); smallest: Dibru-Saikhowa (Assam).","Gulf of Mannar is India's first marine biosphere reserve.","A biosphere reserve has a core, a buffer and a transition zone (UNESCO's MAB programme, 1971)."]},

{id:"P6", heat:3, title:"Ramsar sites (wetlands)", hi:"रामसर स्थल (आर्द्रभूमि)", blocks:[
  {k:"hot", h:"Ramsar questions are frequent in recent papers: <b>which state</b> a site is in, the <b>first</b> sites (Chilika and Keoladeo), the <b>largest</b> (Sundarban) and <b>smallest</b> (Renuka), the <b>Montreux Record</b>, and the <b>newest additions</b>."},
  {k:"story", h:"<p>On <b>2 February 1971</b> — now World Wetlands Day — countries met in the Iranian town of <b>Ramsar</b> and signed a treaty to protect wetlands. India joined on <b>1 February 1982</b>, and its first two sites were <b>Chilika Lake</b> (Odisha) and <b>Keoladeo</b> (Rajasthan).</p><p>For decades India had only a few dozen sites; then came a rush. India had <b>98</b> by January 2026, after <b>Patna Bird Sanctuary</b> (Etah, UP — not Bihar!) and <b>Chhari-Dhand</b> (Kutch) were added, and about 100 were reported by mid-2026. <b>Tamil Nadu</b> has the most. Sites in trouble go on the <b>Montreux Record</b> — India's are <b>Keoladeo</b> and <b>Loktak</b>.</p>", key:"Ramsar Convention 1971 (Iran); India joined 1982; first sites Chilika and Keoladeo; Tamil Nadu has the most; Montreux Record — Keoladeo, Loktak."},
  {k:"facts", title:"Ramsar records (as of 2026)", rows:[
    ["Convention signed","2 February 1971, Ramsar (Iran) — World Wetlands Day"],
    ["India joined","1 February 1982"],
    ["India's sites","98 as of January 2026 (about 100 reported by mid-2026)"],
    ["First Indian sites","Chilika Lake and Keoladeo (1981)"],
    ["Largest site","Sundarban Wetland (West Bengal)"],
    ["Smallest site","Renuka Wetland (Himachal Pradesh)"],
    ["State with most sites","Tamil Nadu"],
    ["Montreux Record (sites in danger)","Keoladeo and Loktak"]
  ]},
  {k:"table", title:"Ramsar sites by state", head:["Site","State / UT","Remember"], rows: P6.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Chilly Keo”</b> — Chilika and Keoladeo were first. <b>“Montreux = Mourning”</b> — the sites in mourning: Keoladeo and Loktak (<b>K-L</b>)."},
  {k:"trap", h:"<b>Patna Bird Sanctuary</b> is in <b>Etah, Uttar Pradesh</b> — not Patna, Bihar. <b>Chilika</b> was removed from the Montreux Record in 2002. The convention was signed in 1971 but India joined in <b>1982</b>."}
], sum:["Ramsar Convention: 2 February 1971, Ramsar, Iran; India joined 1 February 1982.","India's first Ramsar sites: Chilika Lake (Odisha) and Keoladeo (Rajasthan).","Largest: Sundarban Wetland; smallest: Renuka (HP); Tamil Nadu has the most.","Montreux Record: Keoladeo and Loktak.","January 2026 additions: Patna Bird Sanctuary (Etah, UP) and Chhari-Dhand (Kutch, Gujarat) — 98 sites."]},

{id:"P7", heat:3, title:"UNESCO World Heritage sites in India", hi:"भारत में यूनेस्को विश्व धरोहर स्थल", blocks:[
  {k:"hot", h:"Asked every year: <b>which state</b> a heritage site is in, the <b>newest</b> sites (Moidams 2024, Maratha Military Landscapes 2025), the <b>first four</b> (1983) and the <b>natural</b> and <b>mixed</b> sites."},
  {k:"story", h:"<p>India's heritage list began in <b>1983</b> with <b>Ajanta, Ellora, Agra Fort and the Taj Mahal</b>. Over four decades it grew to <b>45</b> sites by 2026 — <b>37 cultural, 7 natural and 1 mixed</b> (Khangchendzonga); <b>Sarnath</b> became the 45th on 25 July 2026.</p><p>Recent years added <b>Dholavira</b> and <b>Ramappa Temple</b> (2021), <b>Santiniketan</b> and the <b>Hoysala temples</b> (2023), the <b>Moidams of Charaideo</b> in Assam (2024) and the <b>Maratha Military Landscapes</b> — 12 forts in Maharashtra and Tamil Nadu (2025). In July 2026 <b>Sarnath</b> was reported added as the 45th. Maharashtra has the most sites.</p>", key:"First four (1983): Ajanta, Ellora, Agra Fort, Taj; 44 sites by 2025 (36 cultural, 7 natural, 1 mixed); latest Maratha Military Landscapes (2025)."},
  {k:"table", title:"World Heritage sites", head:["Site","State / UT","Year and note"], rows: P7.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"The natural seven — <b>“Kaziranga Manas Keoladeo, Sundar Nanda, Himalaya Ghats”</b>: Kaziranga, Manas, Keoladeo, Sundarbans, Nanda Devi & Valley of Flowers, Great Himalayan NP, Western Ghats. Khangchendzonga is the one <b>mixed</b>."},
  {k:"trap", h:"<b>Rani-ki-Vav</b> is in Patan, <b>Gujarat</b> — not Rajasthan. <b>Ramappa</b> is in <b>Telangana</b>. The <b>Hill Forts</b> are in Rajasthan, but the <b>Maratha forts</b> include <b>Gingee</b> in Tamil Nadu."}
], sum:["First four World Heritage sites (1983): Ajanta, Ellora, Agra Fort, Taj Mahal.","India has 45 sites (2026) — 37 cultural, 7 natural, 1 mixed (Khangchendzonga).","Recent: Dholavira and Ramappa (2021), Santiniketan and Hoysala temples (2023), Moidams (2024), Maratha Military Landscapes (2025).","Ahmedabad (2017) was India's first World Heritage City; Jaipur followed in 2019.","Sarnath (Uttar Pradesh) became the 45th site on 25 July 2026."]}
);

pairQs("P5", P5, { q: t => `${t} Biosphere Reserve is in:`, rq: a => `Which biosphere reserve is in ${a}?` });
pairQs("P5", P5U, { q: t => `${t} Biosphere Reserve joined UNESCO's World Network in:` });
pairQs("P6", P6, { q: t => `The ${t} Ramsar site is in:`, rq: a => `Which Ramsar site is in ${a}?` });
pairQs("P7", P7, { q: t => `The World Heritage site '${t}' is in:`, rq: a => `Which World Heritage site is in ${a}?` });

QB.push(
["P5","Which was India's first biosphere reserve?",["Nilgiri","Nanda Devi","Sundarban","Gulf of Mannar"],"Set up in 1986.","p"],
["P5","India's largest biosphere reserve is:",["Great Rann of Kutch","Sundarban","Nilgiri","Great Nicobar"],"In Gujarat.","p"],
["P5","How many of India's 18 biosphere reserves are in UNESCO's World Network (as of 2026)?",["13","12","11","18"],"Cold Desert became the 13th in September 2025.","p"],
["P5","The Cold Desert Biosphere Reserve was set up in:",["2009","2005","2011","2001"],"India's 16th, in Lahaul-Spiti and Kinnaur, Himachal Pradesh.","p","","","SSC CHSL 2023 · 11 Aug 2023"],
["P5","The innermost zone of a biosphere reserve is the:",["Core zone","Buffer zone","Transition zone","Corridor"],"Core — strictly protected; buffer — research; transition — people.","p"],
["P5","Biosphere reserves come from which UNESCO programme?",["Man and the Biosphere (MAB)","World Heritage","Ramsar","CITES"],"Started in 1971.",""],
["P6","In which year did India join the Ramsar Convention?",["1982","1971","1975","1986"],"On 1 February 1982.","p","","","SSC CGL 2021 · Tier-I"],
["P6","The Ramsar Convention was signed in:",["Ramsar, Iran","Ramsar, India","Geneva, Switzerland","Nairobi, Kenya"],"On 2 February 1971.","p"],
["P6","Which two Indian sites are on the Montreux Record?",["Keoladeo and Loktak","Chilika and Wular","Sambhar and Harike","Loktak and Chilika"],"Chilika was removed in 2002.","p"],
["P6","India's largest Ramsar site is:",["Sundarban Wetland","Chilika Lake","Vembanad-Kol","Wular Lake"],"In West Bengal.","p"],
["P6","Which state has the most Ramsar sites?",["Tamil Nadu","Uttar Pradesh","Odisha","Kerala"],"About 20.","p"],
["P6","How many Ramsar sites did India have as of January 2026?",["98","75","89","64"],"Patna Bird Sanctuary and Chhari-Dhand were the latest then.",""],
["P7","India's first four World Heritage sites (1983) included all EXCEPT:",["Khajuraho","Ajanta Caves","Agra Fort","Taj Mahal"],"The four: Ajanta, Ellora, Agra Fort, Taj Mahal. Khajuraho came in 1986.","p"],
["P7","India's only 'mixed' World Heritage site is:",["Khangchendzonga National Park","Kaziranga National Park","Western Ghats","Sundarbans"],"Natural and cultural — Sikkim, 2016.","p"],
["P7","India's first World Heritage City is:",["Ahmedabad","Jaipur","Varanasi","Delhi"],"Inscribed in 2017.","p"],
["P7","The Western Ghats (2012) are a World Heritage site of which type?",["Natural","Cultural","Mixed","Intangible"],"Spread over Kerala, Karnataka, Tamil Nadu and Maharashtra.","p"],
["P7","Which became India's 44th World Heritage site in 2025?",["Maratha Military Landscapes","Moidams of Charaideo","Santiniketan","Sacred Ensembles of the Hoysalas"],"12 forts in Maharashtra and Tamil Nadu.","p"],
["P7","Which became India's 45th World Heritage site in July 2026?",["Sarnath","Bodh Gaya","Kushinagar","Vaishali"],"Sarnath, where the Buddha gave his first sermon, was inscribed on 25 July 2026 at the 48th World Heritage Committee session in Busan.",""]
);

LASTMOMENT.push(
{t:"Biosphere reserves", era:["pa"], rows:[["Total","18 (13 in UNESCO)"],["First","Nilgiri, 1986"],["Last","Panna, 2011"],["Largest","Great Rann of Kutch"],["Smallest","Dibru-Saikhowa"],["First marine","Gulf of Mannar"],["Newest in UNESCO","Cold Desert, 2025"],["Seshachalam","Andhra Pradesh"]]},
{t:"Ramsar", era:["pa"], rows:[["Signed","1971, Ramsar (Iran)"],["India joined","1982"],["First sites","Chilika, Keoladeo"],["Largest","Sundarban Wetland"],["Smallest","Renuka"],["Most sites","Tamil Nadu"],["Montreux Record","Keoladeo, Loktak"],["Count","98 (Jan 2026)"]]},
{t:"World Heritage", era:["pa"], rows:[["First four (1983)","Ajanta, Ellora, Agra Fort, Taj"],["Total (2026)","45 — Sarnath the latest"],["Mixed","Khangchendzonga"],["First city","Ahmedabad"],["2024","Moidams (Assam)"],["2025","Maratha Military Landscapes"],["Rani-ki-Vav","Gujarat"],["Ramappa","Telangana"]]}
);
TILES.push(["1971","Ramsar Convention","pa"],["1982","India joins Ramsar","pa"],["1986","First biosphere reserve","pa"],["18","Biosphere reserves","pa"],["1983","First World Heritage sites","pa"],["45","Heritage sites, 2026","pa"]);

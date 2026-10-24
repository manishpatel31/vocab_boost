/* H9 — Intangible cultural heritage (16 elements as of October 2026), the Memory of the World Register and the
   UNESCO Creative Cities of India (9). Deepavali was inscribed on 10 December 2025 at the Red Fort, New Delhi. */
const H9I = [
  ["Koodiyattam","Kerala","2008","Sanskrit theatre of Kerala's temples; proclaimed a Masterpiece in 2001."],
  ["Vedic chanting","All India","2008","The oral tradition of reciting the Vedas; proclaimed in 2003."],
  ["Ramlila","North India (Uttar Pradesh above all)","2008","Staged retelling of the Ramayana, as at Ayodhya, Ramnagar and Varanasi; proclaimed in 2005."],
  ["Ramman","Uttarakhand","2009","Religious festival and ritual theatre of Saloor-Dungra villages, Garhwal."],
  ["Mudiyettu","Kerala","2010","Ritual dance-drama of the goddess Kali's fight with the demon Darika."],
  ["Kalbelia","Rajasthan","2010","Folk songs and dances of the Kalbelia, a community of snake charmers."],
  ["Chhau","Odisha, Jharkhand, West Bengal","2010","Martial dance in three styles — Mayurbhanj, Seraikella and Purulia."],
  ["Buddhist chanting of Ladakh","Ladakh","2012","Recitation of sacred Buddhist texts by lamas of the trans-Himalayan region."],
  ["Sankirtana","Manipur","2013","Ritual singing, drumming and dancing of the Vaishnavas of Manipur."],
  ["Thatheras of Jandiala Guru","Punjab","2014","Traditional craft of hand-beaten brass and copper utensils, near Amritsar."],
  ["Yoga","All India","2016","Inscribed at the session in Addis Ababa."],
  ["Navroz (Nowruz)","Parsi community; shared with 11 other countries","2016","The Parsi New Year; India joined the multinational listing."],
  ["Kumbh Mela","Prayagraj, Haridwar, Ujjain, Nashik","2017","The largest peaceful gathering of pilgrims on Earth."],
  ["Durga Puja in Kolkata","West Bengal","2021","The city-wide festival of pandals, idols and art."],
  ["Garba of Gujarat","Gujarat","2023","The circle dance of Navaratri; inscribed at Kasane, Botswana."],
  ["Deepavali","All India","2025","Festival of lights; inscribed at the Red Fort, New Delhi, in December 2025."]
];
const H9C = [
  ["Jaipur","Crafts and Folk Art","2015"],
  ["Varanasi","Music","2015"],
  ["Chennai","Music","2017"],
  ["Mumbai","Film","2019"],
  ["Hyderabad","Gastronomy","2019"],
  ["Srinagar","Crafts and Folk Art","2021"],
  ["Kozhikode","Literature","2023"],
  ["Gwalior","Music","2023"],
  ["Lucknow","Gastronomy","2025"]
];

LESSONS.push(
{id:"H9", heat:3, title:"Intangible heritage, Memory of the World and Creative Cities", hi:"अमूर्त सांस्कृतिक धरोहर, विश्व स्मृति रजिस्टर और रचनात्मक शहर", blocks:[
  {k:"hot", h:"Most asked: the <b>latest element</b> (Deepavali, December 2025 — the 16th), <b>which year</b> Kumbh (2017), Yoga (2016), Durga Puja (2021) and Garba (2023) were inscribed, <b>which state</b> an element belongs to, and the <b>Creative Cities</b> (Lucknow 2025, Kozhikode and Gwalior 2023)."},
  {k:"story", h:"<p>A temple can be measured and mapped, but a song, a festival or a craft lives only while people keep doing it. In <b>2003</b> UNESCO adopted a second convention for this <b>intangible cultural heritage</b>, and India joined in 2005. India's <b>Sangeet Natak Akademi</b> prepares the nominations.</p><p>India's first three — <b>Koodiyattam</b>, <b>Vedic chanting</b> and <b>Ramlila</b> — had been proclaimed 'Masterpieces' between 2001 and 2005 and moved onto the new list in 2008. Since then India has added dances, chants, a craft, festivals and Yoga. In December 2025 India hosted the committee for the first time, at the <b>Red Fort</b>, and <b>Deepavali</b> became its <b>16th</b> element.</p><p>Two more UNESCO lists come up in exams: the <b>Memory of the World Register</b> of precious documents (the Rigveda manuscripts, and since 2025 the Bhagavad Gita and the Natyashastra) and the <b>Creative Cities Network</b>, where nine Indian cities are listed for music, crafts, film, food or literature.</p>", key:"16 elements (Deepavali, Dec 2025, latest) · Memory of the World: 14 Indian entries (Gita and Natyashastra, 2025) · 9 Creative Cities (Lucknow, 2025, latest)."},
  {k:"table", title:"India's intangible cultural heritage (16 elements, as of October 2026)", head:["Element","State / region","Year","What it is"], rows: H9I.map(r => ["<b>" + r[0] + "</b>", r[1], r[2], r[3]])},
  {k:"facts", title:"The intangible heritage system", rows:[
    ["Convention","Convention for the Safeguarding of the Intangible Cultural Heritage — adopted by UNESCO in <b>2003</b>; India ratified it in 2005"],
    ["Lists","The <b>Representative List</b> (all 16 Indian elements are on it), the Urgent Safeguarding List and the Register of Good Safeguarding Practices"],
    ["India's nodal body","<b>Sangeet Natak Akademi</b>, under the Ministry of Culture"],
    ["India as host","20th session of the Intergovernmental Committee, <b>Red Fort, New Delhi, 8–13 December 2025</b> — the first time in India; Deepavali was inscribed there on 10 December"],
    ["Chhau's three styles","<b>Mayurbhanj</b> (Odisha) — no masks; <b>Seraikella</b> (Jharkhand) and <b>Purulia</b> (West Bengal) — masked"],
    ["Kumbh Mela","Held at four places — Prayagraj, Haridwar, Ujjain and Nashik; inscribed at the 2017 session on Jeju Island, South Korea"]]},
  {k:"table", title:"Memory of the World — some of India's entries", head:["Documentary heritage","Year","Where it is kept"], rows:[
    ["I.A.S. Tamil Medical Manuscript Collection","1997","Institute of Asian Studies, Chennai — India's first entry"],
    ["Shaiva manuscripts of Pondicherry","2005","French Institute of Pondicherry"],
    ["Rigveda manuscripts","2007","Bhandarkar Oriental Research Institute, Pune"],
    ["Tarikh-e-Khandan-e-Timuriyah","2011","Khuda Bakhsh Oriental Library, Patna"],
    ["Laghukalachakratantrarajatika (Vimalaprabha)","2011","The Asiatic Society, Kolkata"],
    ["Shantinatha Charitra","2013","Ahmedabad"],
    ["Gilgit Manuscripts","2017","National Archives of India, New Delhi — among the oldest surviving manuscripts in India"],
    ["Maitreyavyakarana","2017","The Asiatic Society, Kolkata"],
    ["Bhagavad Gita and Natyashastra manuscripts","2025","Bhandarkar Oriental Research Institute, Pune — took India to 14 entries (April 2025)"]]},
  {k:"facts", title:"Memory of the World and Creative Cities in brief", rows:[
    ["Memory of the World","UNESCO programme of 1992 for documentary heritage; India has <b>14</b> entries on the international register (April 2025), counting shared ones"],
    ["Asia-Pacific register, 2024","Ramcharitmanas, Panchatantra and Sahṛdayāloka-Locana were added to the regional register in May 2024"],
    ["Creative Cities Network","Started in <b>2004</b>; seven fields — crafts and folk art, design, film, gastronomy, literature, media arts, music; India has <b>9</b> cities (as of October 2026)"],
    ["Firsts","<b>Kozhikode</b> — India's first City of Literature (2023); <b>Mumbai</b> — the only City of Film; <b>Lucknow</b> (2025) joined Hyderabad as a City of Gastronomy"]]},
  {k:"table", title:"UNESCO Creative Cities of India", head:["City","Field","Year"], rows: H9C.map(r => ["<b>" + r[0] + "</b>", r[1], r[2]])},
  {k:"trick", h:"Intangible years — <b>“K-V-R = 2008”</b> (Koodiyattam, Vedic chanting, Ramlila), <b>“M-K-C = 2010”</b> (Mudiyettu, Kalbelia, Chhau), then roughly one at a time: Ramman 09, Ladakh 12, Sankirtana 13, Thatheras 14, Yoga and Navroz 16, Kumbh 17, Durga Puja 21, Garba 23, Deepavali 25. Music cities — <b>“Varanasi, Chennai, Gwalior: V-C-G”</b>."},
  {k:"trap", h:"<b>Kumbh Mela</b>, <b>Yoga</b> and <b>Garba</b> are <b>intangible</b> heritage, not World Heritage sites. <b>Chhath Puja</b> was not on the list as of October 2026. <b>Jaipur</b> is a World Heritage city <b>and</b> a Creative City (crafts) — two different lists. The Gita and Natyashastra are on the <b>Memory of the World</b> register, not the intangible list. Kozhikode is a City of <b>Literature</b>, Lucknow of <b>Gastronomy</b>."},
  {k:"link", h:"The dances behind these entries are in <a href=\"study-classical-dances.html\">Classical Dances</a> and <a href=\"study-folk-dances.html\">Folk Dances</a>; the festivals in <a href=\"study-festivals.html\">Festivals</a>."}
], sum:["The intangible heritage convention dates from 2003; India's nodal body is the Sangeet Natak Akademi.","India has 16 elements; the latest is Deepavali (10 December 2025, Red Fort, New Delhi).","2008: Koodiyattam, Vedic chanting, Ramlila. 2010: Mudiyettu, Kalbelia, Chhau. 2016: Yoga, Navroz. 2017: Kumbh Mela. 2021: Durga Puja. 2023: Garba.","Memory of the World (1992): Rigveda manuscripts (2007); Bhagavad Gita and Natyashastra (2025) took India to 14 entries.","Creative Cities (2004): Jaipur and Srinagar (crafts), Varanasi, Chennai and Gwalior (music), Mumbai (film), Hyderabad and Lucknow (gastronomy), Kozhikode (literature)."]}
);

pairQs("H9", H9I.map(r => [r[0], r[2], r[3], ""]), { q: t => `In which year was “${t}” inscribed on UNESCO's intangible cultural heritage list?`, e: r => `${r[0]} was inscribed in ${r[1]}. ${r[2]}`, extra: ["2019"] });
pairQs("H9", H9I.filter(r => ["Koodiyattam","Mudiyettu","Ramman","Kalbelia","Sankirtana","Thatheras of Jandiala Guru","Garba of Gujarat","Durga Puja in Kolkata"].includes(r[0])).map(r => [r[0], r[1], r[3], ""]),
  { q: t => `${t}, on UNESCO's intangible heritage list, belongs to which state?`, e: r => `${r[0]} belongs to ${r[1]}. ${r[2]}`, extra: ["Odisha","Assam"] });
pairQs("H9", H9C, { q: t => `${t} is a UNESCO Creative City in which field?`, e: r => `${r[0]} joined the Creative Cities Network for ${r[1].toLowerCase()} in ${r[2]}.`, extra: ["Design","Media Arts"] });

QB.push(
["H9","UNESCO's Convention for the Safeguarding of the Intangible Cultural Heritage was adopted in:",["2003","1972","1992","2005"],"2003 is the convention; India ratified it in 2005. 1972 is the World Heritage Convention and 1992 the Memory of the World programme.",""],
["H9","Which body is India's nodal agency for nominations to UNESCO's intangible heritage list?",["Sangeet Natak Akademi","Archaeological Survey of India","Sahitya Akademi","National Archives of India"],"The Sangeet Natak Akademi prepares India's intangible heritage nominations; the ASI handles World Heritage sites.",""],
["H9","Deepavali, inscribed in December 2025, is India's which element on UNESCO's intangible heritage list?",["16th","15th","14th","17th"],"Garba (2023) was the 15th; Deepavali became the 16th.",""],
["H9","Where was Deepavali inscribed on UNESCO's intangible heritage list in December 2025?",["Red Fort, New Delhi","Bharat Mandapam, New Delhi","Kasane, Botswana","Paris"],"India hosted the 20th session of the committee at the Red Fort; Garba had been inscribed at Kasane in 2023.",""],
["H9","Which was the first Indian tradition proclaimed a Masterpiece of the Oral and Intangible Heritage, in 2001?",["Koodiyattam","Vedic chanting","Ramlila","Yoga"],"Koodiyattam was proclaimed in 2001, Vedic chanting in 2003 and Ramlila in 2005.",""],
["H9","Chhau, on UNESCO's intangible list, is performed in which states?",["Odisha, Jharkhand and West Bengal","Bihar, Jharkhand and Odisha","Assam, Manipur and Tripura","Kerala, Karnataka and Tamil Nadu"],"Its three styles are Mayurbhanj (Odisha), Seraikella (Jharkhand) and Purulia (West Bengal).",""],
["H9","In which style of Chhau do the dancers NOT wear masks?",["Mayurbhanj","Purulia","Seraikella","All three styles use masks"],"Mayurbhanj Chhau of Odisha is danced without masks.",""],
["H9","The Kalbelia songs and dances on UNESCO's list belong to a community traditionally known as:",["Snake charmers","Potters","Weavers","Boatmen"],"The Kalbelia of Rajasthan were snake charmers; the women's swirling dance copies a serpent's movements.",""],
["H9","Mudiyettu, a ritual dance-drama of Kerala, shows the goddess Kali's fight with the demon:",["Darika","Mahishasura","Raktabija","Ravana"],"Mudiyettu is performed in Bhagavati temples after the harvest.",""],
["H9","The Thatheras of Jandiala Guru are known for:",["Hand-beaten brass and copper utensils","Phulkari embroidery","Wooden toys","Clay pottery"],"Their craft of the thatheras (metal-beaters) near Amritsar was inscribed in 2014.",""],
["H9","Which element did India share with eleven other countries when it was inscribed in 2016?",["Navroz (Nowruz)","Yoga","Kumbh Mela","Durga Puja"],"Nowruz, the new year, is a multinational listing; India joined it in 2016.",""],
["H9","Which of these was NOT on UNESCO's intangible heritage list as of October 2026?",["Chhath Puja","Garba of Gujarat","Durga Puja in Kolkata","Kumbh Mela"],"Garba (2023), Durga Puja (2021) and Kumbh (2017) are listed; Chhath Puja was not.",""],
["H9","UNESCO's Memory of the World programme for documentary heritage began in:",["1992","1972","2003","2004"],"It began in 1992; 2004 is the year the Creative Cities Network began.",""],
["H9","With the Bhagavad Gita and the Natyashastra (April 2025), how many entries did India have on the Memory of the World Register?",["14","10","16","45"],"The Culture Ministry put India's total at 14, counting shared entries. 16 is the intangible count, 45 the World Heritage count.",""],
["H9","The Rigveda manuscripts on the Memory of the World Register are kept at:",["Bhandarkar Oriental Research Institute, Pune","National Archives of India, New Delhi","The Asiatic Society, Kolkata","Khuda Bakhsh Oriental Library, Patna"],"The BORI in Pune holds them, and also the Gita and Natyashastra manuscripts added in 2025.",""],
["H9","Which Buddhist manuscripts, among the oldest surviving in India, were added to the Memory of the World Register in 2017?",["Gilgit Manuscripts","Tarikh-e-Khandan-e-Timuriyah","Shaiva manuscripts of Pondicherry","Shantinatha Charitra"],"The Gilgit Manuscripts are kept at the National Archives of India.",""],
["H9","In May 2024, the Ramcharitmanas, the Panchatantra and the Sahṛdayāloka-Locana were added to:",["UNESCO's Memory of the World Asia-Pacific Regional Register","The intangible cultural heritage list","The World Heritage list","The Creative Cities Network"],"They entered the regional Memory of the World register for Asia and the Pacific.",""],
["H9","How many Indian cities were in the UNESCO Creative Cities Network as of October 2026?",["9","7","12","5"],"Jaipur, Varanasi, Chennai, Mumbai, Hyderabad, Srinagar, Kozhikode, Gwalior and Lucknow.",""],
["H9","Which three Indian cities are UNESCO Creative Cities of Music?",["Varanasi, Chennai and Gwalior","Varanasi, Kolkata and Lucknow","Chennai, Mumbai and Hyderabad","Gwalior, Jaipur and Srinagar"],"Varanasi (2015), Chennai (2017) and Gwalior (2023).",""]
);
TILES.push(["16","Intangible elements (Oct 2026)","hm"],["14","Memory of the World entries","hm"],["9","Creative Cities of India","hm"]);
LASTMOMENT.push({t:"Intangible and other lists", era:["hm"], rows:[["2008","Koodiyattam, Vedic chanting, Ramlila"],["2010","Mudiyettu, Kalbelia, Chhau"],["2016","Yoga, Navroz"],["2017","Kumbh Mela"],["2021","Durga Puja"],["2023","Garba"],["2025","Deepavali — 16th"],["Creative Cities","9 — Lucknow (2025) latest"]]});

/* H8 — Monuments by state, famous temples (most are not World Heritage sites) and the three temple styles. */
const H8T = [
  ["Somnath Temple","Gujarat","First of the 12 jyotirlingas, at Prabhas Patan; the present temple opened in 1951."],
  ["Sun Temple, Modhera","Gujarat","Built under the Solanki king Bhima I (1026–27); a great stepped tank, the Surya Kund."],
  ["Dilwara Temples","Rajasthan","Jain temples of white marble at Mount Abu, from the 11th to the 13th century."],
  ["Ranakpur Jain Temple","Rajasthan","1,444 carved pillars; built in Rana Kumbha's time by the merchant Dharna Shah."],
  ["Jagannath Temple","Odisha","Puri; the Rath Yatra; sailors called it the White Pagoda."],
  ["Lingaraja Temple","Odisha","Bhubaneswar, 11th century; the finest of the Odisha (Kalinga) style."],
  ["Kamakhya Temple","Assam","On Nilachal hill, Guwahati; a Shakti peetha; the Ambubachi Mela."],
  ["Meenakshi Temple","Tamil Nadu","Madurai; 14 gopurams, mostly of the Nayak period."],
  ["Ramanathaswamy Temple","Tamil Nadu","Rameswaram; the longest temple corridors in India; a jyotirlinga."],
  ["Padmanabhaswamy Temple","Kerala","Thiruvananthapuram; Vishnu lying on the serpent Ananta."],
  ["Venkateswara Temple, Tirumala","Andhra Pradesh","On the Tirumala hills above Tirupati."],
  ["Gomateshwara statue, Shravanabelagola","Karnataka","A 57-foot monolith of Bahubali, set up by Chamundaraya about 983 CE."],
  ["Kashi Vishwanath Temple","Uttar Pradesh","Varanasi; the present temple was built in 1780 by Ahilyabai Holkar."],
  ["Mahakaleshwar Temple","Madhya Pradesh","Ujjain, on the Shipra; a jyotirlinga; the Mahakal Lok corridor (2022)."],
  ["Kedarnath Temple","Uttarakhand","The highest of the 12 jyotirlingas, near the source of the Mandakini."],
  ["Martand Sun Temple","Jammu and Kashmir","Anantnag; built by Lalitaditya Muktapida in the 8th century; now in ruins."],
  ["Mundeshwari Temple","Bihar","Kaimur district; one of the oldest temples still in worship."],
  ["Thousand Pillar Temple","Telangana","Hanamkonda; built by the Kakatiya king Rudradeva in 1163."],
  ["Tawang Monastery","Arunachal Pradesh","India's largest Buddhist monastery, founded in the 17th century."],
  ["Harmandir Sahib (Golden Temple)","Punjab","Amritsar; built under Guru Arjan Dev; covered in gold under Maharaja Ranjit Singh."]
];
const H8S = [
  ["Kandariya Mahadeva, Khajuraho","Nagara","Chandela; a cluster of rising shikharas like a mountain range."],
  ["Sun Temple, Konark","Nagara","Odisha (Kalinga) school."],
  ["Lingaraja, Bhubaneswar","Nagara","Odisha school: a tall rekha deul with a jagamohana in front."],
  ["Sun Temple, Modhera","Nagara","Solanki (Maru-Gurjara) school of Gujarat."],
  ["Dashavatara Temple, Deogarh","Nagara","Gupta age; one of the earliest Nagara temples."],
  ["Ram Mandir, Ayodhya","Nagara","Designed by Chandrakant Sompura; consecrated on 22 January 2024."],
  ["Brihadisvara, Thanjavur","Dravida","Chola; a pyramidal vimana about 66 m high."],
  ["Shore Temple, Mahabalipuram","Dravida","Pallava, about 700 CE."],
  ["Kailasanatha, Kanchipuram","Dravida","Pallava, built by Rajasimha."],
  ["Meenakshi, Madurai","Dravida","Nayak-period gopurams taller than the vimana."],
  ["Kailasa temple, Ellora","Dravida","Rock-cut, Rashtrakuta — a Dravida temple carved from a hill."],
  ["Chennakeshava, Belur","Vesara","Hoysala; star-shaped plan on a jagati."],
  ["Hoysaleswara, Halebidu","Vesara","Hoysala; twin shrines and fine soapstone friezes."]
];

LESSONS.push(
{id:"H8", heat:2, title:"Monuments by state, famous temples and temple styles", hi:"राज्यवार स्मारक, प्रसिद्ध मंदिर और मंदिर शैलियाँ", blocks:[
  {k:"hot", h:"Most asked: <b>temple → state</b> (Kamakhya, Jagannath, Meenakshi, Dilwara, Modhera, Somnath), the three styles — <b>Nagara, Dravida, Vesara</b> — with one example each, and the parts of a temple (<b>shikhara, vimana, gopuram, amalaka, garbhagriha</b>)."},
  {k:"story", h:"<p>Every Hindu temple begins with a small dark room, the <b>garbhagriha</b> (womb-house), where the deity sits. Over it rises a tower, and in front of it a hall (<b>mandapa</b>) for the worshippers. How that tower is shaped tells you the style.</p><p>In the north, the <b>Nagara</b> tower — the <b>shikhara</b> — curves gently inward like a mountain peak and carries a ribbed stone disc, the <b>amalaka</b>, and a pot-shaped finial, the <b>kalasha</b>. In the south, the <b>Dravida</b> tower — the <b>vimana</b> — rises in stepped storeys like a pyramid, and the temple sits inside walls entered by huge gateway towers, <b>gopurams</b>. In the Deccan between them grew <b>Vesara</b>, which mixes the two; the Hoysalas gave it star-shaped plans.</p>", key:"Nagara = north, curved shikhara + amalaka · Dravida = south, pyramidal vimana + gopuram · Vesara = Deccan mix (Chalukya, Hoysala)."},
  {k:"table", title:"The three temple styles", head:["Style","Region","Marks of the style","Examples"], rows:[
    ["<b>Nagara</b>","North and east India","Curvilinear <b>shikhara</b> over the sanctum, crowned by an <b>amalaka</b> and <b>kalasha</b>; usually no high boundary wall or gateway towers; often on a raised platform","Khajuraho, Konark, Lingaraja, Modhera, Dashavatara (Deogarh), Ram Mandir (Ayodhya)"],
    ["<b>Dravida</b>","Tamil country and the far south","Pyramidal <b>vimana</b> of stepped storeys; walled courtyard entered by <b>gopurams</b>; a temple tank; guardian figures (dvarapalas) at the door","Shore Temple, Kailasanatha (Kanchipuram), Brihadisvara, Meenakshi, Kailasa (Ellora)"],
    ["<b>Vesara</b>","The Deccan — Karnataka","A mix of the two: Dravida plan with Nagara touches; Hoysala temples on star-shaped (stellate) platforms","Aihole, Badami, Pattadakal (both styles), Belur, Halebidu, Somanathapura"]]},
  {k:"facts", title:"Schools and terms worth knowing", rows:[
    ["Odisha (Kalinga) school","<b>Rekha deul</b> (tower over the sanctum), <b>jagamohana</b> (assembly hall), nata mandira (dance hall), bhoga mandapa (offering hall) — Lingaraja, Jagannath, Konark"],
    ["Solanki (Maru-Gurjara) school","Gujarat and Rajasthan, 11th–13th centuries — Modhera Sun Temple, the Dilwara temples"],
    ["Aihole","Called the <b>cradle of Indian temple architecture</b>; the Chalukyas tried out many forms here, such as the apsidal Durga temple and the Lad Khan temple"],
    ["Nayaka gopurams","Late Dravida gateways grew taller than the main vimana — Meenakshi (Madurai), Srirangam"],
    ["Bengal terracotta","Brick temples with curved 'hut' roofs (chala), as at Bishnupur — on the Tentative List"],
    ["Pattadakal","Has both: Virupaksha and Mallikarjuna are Dravida; Papanatha, Kashi Vishwanatha and others show Nagara towers"]]},
  {k:"table", title:"Famous temples and their states", head:["Temple","State / UT","Remember"], rows: H8T.map(r => ["<b>" + r[0] + "</b>", r[1], r[2]])},
  {k:"table", title:"Temple → style", head:["Temple","Style","Note"], rows: H8S.map(r => ["<b>" + r[0] + "</b>", r[1], r[2]])},
  {k:"facts", title:"World Heritage sites by state (as of October 2026)", rows:[
    ["Maharashtra","Ajanta, Ellora, Elephanta, CST, Victorian Gothic and Art Deco Mumbai; shares the Maratha forts (with Tamil Nadu) and the Western Ghats"],
    ["Uttar Pradesh","Taj Mahal, Agra Fort, Fatehpur Sikri, Sarnath"],
    ["Rajasthan","Keoladeo, Jantar Mantar, Hill Forts, Jaipur City"],
    ["Gujarat","Champaner-Pavagadh, Rani ki Vav, Ahmedabad, Dholavira"],
    ["Karnataka","Hampi, Pattadakal, Hoysala temples; shares the Western Ghats"],
    ["Tamil Nadu","Mahabalipuram, Chola temples; shares the Nilgiri railway, the Western Ghats and the Maratha forts (Gingee)"],
    ["Delhi","Humayun's Tomb, Qutb Minar, Red Fort"],
    ["Madhya Pradesh","Khajuraho, Sanchi, Bhimbetka"],
    ["West Bengal","Sundarbans, Santiniketan; shares the Darjeeling railway"],
    ["Assam","Kaziranga, Manas, Moidams"],
    ["Bihar","Mahabodhi (Bodh Gaya), Nalanda"],
    ["One each","Odisha (Konark), Goa (churches), Telangana (Ramappa), Uttarakhand (Nanda Devi), Sikkim (Khangchendzonga), Chandigarh (Capitol Complex), Himachal Pradesh (Great Himalayan NP, and shares the Kalka–Shimla railway)"]]},
  {k:"trick", h:"Style by the gate — “<b>Gopuram? Go south</b> (Dravida). <b>Curved peak? North</b> (Nagara). <b>Star? Hoysala</b> (Vesara).”"},
  {k:"trap", h:"<b>Konark</b> and <b>Lingaraja</b> are <b>Nagara</b> (Odisha school), even though they are in the east, not Dravida. The <b>Kailasa temple at Ellora</b>, in Maharashtra, is <b>Dravida</b>. <b>Modhera</b> is in <b>Gujarat</b>; <b>Martand</b> is in <b>Kashmir</b>; <b>Dilwara</b> is in <b>Rajasthan</b> (Mount Abu), not Gujarat. Famous does not mean listed: Jagannath, Meenakshi, Somnath, Kamakhya and the Golden Temple are <b>not</b> World Heritage sites."},
  {k:"link", h:"Temple architecture across the periods is in <a href=\"study-art-culture.html\">Art &amp; Culture</a>; festivals held at these temples are in <a href=\"study-festivals.html\">Festivals</a>."}
], sum:["Nagara (north): curved shikhara, amalaka, kalasha — Khajuraho, Konark, Lingaraja, Modhera.","Dravida (south): pyramidal vimana and gopurams — Brihadisvara, Shore Temple, Meenakshi, Kailasa (Ellora).","Vesara (Deccan): a mix — Aihole, Badami, Pattadakal, the Hoysala temples.","Kamakhya — Assam; Jagannath and Lingaraja — Odisha; Meenakshi and Ramanathaswamy — Tamil Nadu; Modhera and Somnath — Gujarat; Dilwara and Ranakpur — Rajasthan.","Kashi Vishwanath was rebuilt by Ahilyabai Holkar (1780); Somnath reopened in 1951; Ram Mandir consecrated 22 January 2024.","Maharashtra has the most World Heritage sites; UP, Rajasthan, Gujarat and Karnataka follow."]}
);

pairQs("H8", H8T, { q: t => `The famous ${t} is in which state or UT?`, e: r => `The ${r[0]} is in ${r[1]}. ${r[2]}` });
pairQs("H8", H8S, { q: t => `To which temple style does ${t} belong?`, e: r => `${r[0]} is a ${r[1]} temple. ${r[2]}`, extra: ["Indo-Saracenic","Indo-Islamic"] });

QB.push(
["H8","A curved tower (shikhara) crowned by a ribbed stone disc (amalaka) marks which temple style?",["Nagara","Dravida","Vesara","Indo-Saracenic"],"The curvilinear shikhara with an amalaka is the sign of the northern Nagara style.",""],
["H8","Tall gateway towers called gopurams are typical of which temple style?",["Dravida","Nagara","Vesara","Kalinga"],"Gopurams lead into the walled courtyards of southern Dravida temples.",""],
["H8","What is the garbhagriha of a Hindu temple?",["The sanctum where the main deity is placed","The assembly hall","The gateway tower","The path round the temple"],"Garbhagriha means 'womb-house' — the small inner shrine.",""],
["H8","In an Odisha-style temple, the assembly hall in front of the tower is called the:",["Jagamohana","Gopuram","Vimana","Garbhagriha"],"The jagamohana stands before the rekha deul, as at Lingaraja and Konark.",""],
["H8","The pyramidal tower over the sanctum of a Dravida temple is called the:",["Vimana","Shikhara","Rekha deul","Jagamohana"],"In the south the tower is the vimana; in the north it is the shikhara.",""],
["H8","Which place is called the 'cradle of Indian temple architecture'?",["Aihole","Khajuraho","Thanjavur","Bhubaneswar"],"The Chalukyas built many early, experimental temples at Aihole in Karnataka.",""],
["H8","The Ambubachi Mela is held every year at which temple?",["Kamakhya","Jagannath","Meenakshi","Vaishno Devi"],"It is held at the Kamakhya temple on Nilachal hill, Guwahati, during the monsoon.",""],
["H8","The present Somnath temple was consecrated in 1951 in the presence of:",["President Rajendra Prasad","Prime Minister Jawaharlal Nehru","C. Rajagopalachari","Sardar Vallabhbhai Patel"],"Rebuilding began on Sardar Patel's call after 1947, but Patel died in 1950; President Rajendra Prasad attended the installation in May 1951.",""],
["H8","Which Jain temple of Rajasthan is famous for its 1,444 carved pillars, no two alike?",["Ranakpur","Dilwara","Palitana","Shravanabelagola"],"The Ranakpur temple in Pali district has 1,444 pillars.",""],
["H8","The present Kashi Vishwanath temple of Varanasi was built in 1780 by:",["Ahilyabai Holkar","Rani Lakshmibai","Jijabai","Rani Durgavati"],"Ahilyabai Holkar of Indore rebuilt it; Maharaja Ranjit Singh later gave gold for its spire.",""],
["H8","The Mahamastakabhisheka of the Gomateshwara statue at Shravanabelagola is held once every:",["12 years","6 years","25 years","Year"],"The great anointing of the Bahubali statue is held every 12 years.",""],
["H8","Who is the chief architect of the Ram Mandir at Ayodhya?",["Chandrakant Sompura","Bimal Patel","Charles Correa","B. V. Doshi"],"Chandrakant Sompura designed it in the Nagara style; Bimal Patel designed the new Parliament House.",""],
["H8","On which date was Ram Lalla consecrated (pran pratishtha) in the Ram Mandir at Ayodhya?",["22 January 2024","26 January 2024","5 August 2020","25 November 2025"],"5 August 2020 was the foundation ceremony; on 25 November 2025 the flag was hoisted to mark the temple's completion.",""],
["H8","Which of these is NOT one of the 12 jyotirlingas?",["Jagannath, Puri","Somnath","Kedarnath","Mahakaleshwar"],"Jagannath is a Vishnu temple and one of the four dhams, not a jyotirlinga.",""],
["H8","The Martand Sun Temple of Kashmir was built by:",["Lalitaditya Muktapida","Avantivarman","Zain-ul-Abidin","Kanishka"],"Lalitaditya of the Karkota dynasty built it in the 8th century.",""]
);
LASTMOMENT.push({t:"Temple styles", era:["hm"], rows:[["Nagara","North — shikhara, amalaka · Khajuraho, Konark"],["Dravida","South — vimana, gopuram · Thanjavur, Meenakshi"],["Vesara","Deccan — Aihole, Pattadakal, Belur"],["Kamakhya","Assam"],["Modhera","Gujarat"],["Dilwara","Rajasthan"]]});

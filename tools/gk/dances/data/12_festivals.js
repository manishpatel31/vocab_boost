/* Part 3 · L7 dance festivals; L8 awards to dancers; L9 classical vs folk and tribal dances (the folk-dance app covers folk dances in depth). */
const L7F = [
  ["Khajuraho Dance Festival","Madhya Pradesh","Every February since 1975, against the Chandela temples.","p"],
  ["Konark Dance Festival","Odisha","1–5 December, in the open-air theatre by the Sun Temple.","p"],
  ["Mukteswar Dance Festival","Odisha","Odissi at the Mukteswar temple, Bhubaneswar (January).",""],
  ["Mamallapuram Dance Festival","Tamil Nadu","December–January, with Arjuna's Penance as the backdrop.","p"],
  ["Natyanjali Festival","Tamil Nadu","At the Nataraja temple, Chidambaram, around Maha Shivaratri.","p"],
  ["Elephanta Festival","Maharashtra","February, at the Elephanta Caves near Mumbai.","p"],
  ["Ellora–Ajanta Festival","Maharashtra","Near Chhatrapati Sambhajinagar (Aurangabad).",""],
  ["Modhera Dance Festival (Uttarardh Mahotsav)","Gujarat","January, at the Sun Temple of Modhera.","p"],
  ["Nishagandhi Dance Festival","Kerala","January, Thiruvananthapuram.",""],
  ["Pattadakal Dance Festival","Karnataka","At the Chalukya temples of Pattadakal.",""],
  ["Hampi Utsav","Karnataka","Also called the Vijaya Utsav.",""],
  ["Rajgir Mahotsav","Bihar","",""],
  ["Bhoramdeo Mahotsav","Chhattisgarh","",""],
  ["Taj Mahotsav","Uttar Pradesh","February, in Agra — arts, crafts and dance.",""],
  ["Sangai Festival","Manipur","November — named after the state animal, the sangai deer.",""]
];
const L8P = [
  ["T. Balasaraswati","1977","Bharatanatyam.",""],
  ["Pandit Birju Maharaj","1986","Kathak.","p"],
  ["Kelucharan Mohapatra","2000","Odissi.","p"],
  ["Sonal Mansingh","2003","Bharatanatyam and Odissi.","p"],
  ["Yamini Krishnamurthy","2016","Bharatanatyam and Kuchipudi.","p"],
  ["Padma Subrahmanyam","2024","Bharatanatyam.","p"],
  ["Vyjayanthimala","2024","Bharatanatyam and films.",""],
  ["Kumudini Lakhia","2025","Kathak.","p"]
];
const L8A = [
  ["Sangeet Natak Akademi Fellowship (Akademi Ratna)","Sangeet Natak Akademi","The Akademi's highest honour, for a few artists at a time.","p"],
  ["Sangeet Natak Akademi Award (Akademi Puraskar)","Sangeet Natak Akademi","Given every year since 1952 to performing artists.","p"],
  ["Ustad Bismillah Khan Yuva Puraskar","Sangeet Natak Akademi","For young artists up to 40 years old; started 2006.",""],
  ["Padma Vibhushan, Padma Bhushan, Padma Shri","Government of India","Announced on the eve of Republic Day.","p"],
  ["Kalidas Samman","Government of Madhya Pradesh","Started in 1980; covers classical music, dance, theatre and fine arts.","p"],
  ["Nritya Choodamani","Sri Krishna Gana Sabha, Chennai","A title for Bharatanatyam and other dancers.",""]
];
const L9F = [
  ["Bihu","Assam","Folk — Assam's classical dance is Sattriya.","p"],
  ["Yakshagana","Karnataka","Folk dance-drama with huge headdresses — often confused with Kathakali.","p"],
  ["Theyyam","Kerala","Ritual dance where the performer becomes a god.","p"],
  ["Ottan Thullal","Kerala","Solo dance-recitation created by Kunchan Nambiar.",""],
  ["Gotipua","Odisha","Boys dressed as girls — a forerunner of Odissi.","p"],
  ["Lavani","Maharashtra","","p"],
  ["Garba","Gujarat","On UNESCO's intangible heritage list (2023).","p"],
  ["Bhangra","Punjab","","p"],
  ["Ghoomar","Rajasthan","","p"],
  ["Kalbelia","Rajasthan","Snake-charmer community's dance; UNESCO list 2010.","p"],
  ["Raut Nacha","Chhattisgarh","",""],
  ["Cheraw","Mizoram","The bamboo dance.","p"],
  ["Dollu Kunitha","Karnataka","",""],
  ["Karakattam","Tamil Nadu","Pot balanced on the head.",""],
  ["Kolattam","Andhra Pradesh","Stick dance.",""],
  ["Jhumar","Jharkhand","",""],
  ["Chholiya","Uttarakhand","Sword dance.",""],
  ["Rouf","Jammu and Kashmir","",""],
  ["Nati","Himachal Pradesh","Kullu Nati is in Guinness World Records as the largest folk dance.",""]
];
const L9C = [
  ["Sattriya","Classical dance","One of the Sangeet Natak Akademi's eight.","p"],
  ["Mohiniyattam","Classical dance","",""],
  ["Kuchipudi","Classical dance","",""],
  ["Bihu","Folk dance","","p"],
  ["Garba","Folk dance","",""],
  ["Ghoomar","Folk dance","",""],
  ["Yakshagana","Theatre form","Folk dance-drama of Karnataka.","p"],
  ["Kutiyattam","Theatre form","Sanskrit theatre of Kerala; UNESCO list 2008.",""],
  ["Tamasha","Theatre form","Folk theatre of Maharashtra.",""],
  ["Kalaripayattu","Martial art","Kerala's martial art — it shaped Kathakali's body training.",""],
  ["Thang-ta","Martial art","Manipur's martial art.",""],
  ["Theyyam","Ritual dance","",""],
  ["Lai Haraoba","Ritual dance","Manipur's festival of the forest gods — the root of Manipuri.",""]
];

LESSONS.push(
{id:"L7", heat:2, title:"Dance festivals", hi:"नृत्य महोत्सव", blocks:[
  {k:"hot", h:"Asked as <b>“The X Dance Festival is held in which state?”</b> The big four: <b>Khajuraho</b> (MP), <b>Konark</b> (Odisha), <b>Mamallapuram</b> (Tamil Nadu), <b>Elephanta</b> (Maharashtra). Modhera (Gujarat) is the usual trap."},
  {k:"story", h:"<p>India loves to set its classical dancers against old stone. Every February the <b>Khajuraho Dance Festival</b> (since 1975) lights up the Chandela temples of <b>Madhya Pradesh</b>. In early December, the <b>Konark Dance Festival</b> fills the open-air stage beside Odisha's Sun Temple. In <b>Tamil Nadu</b>, <b>Mamallapuram</b> dancers perform before the giant rock carving of Arjuna's Penance, and at <b>Chidambaram</b> the <b>Natyanjali</b> festival honours Nataraja on Maha Shivaratri.</p><p>On the west coast, the <b>Elephanta Festival</b> is held near Mumbai's cave temples, and <b>Gujarat</b> holds the <b>Modhera Dance Festival</b> at its own Sun Temple each January. <b>Karnataka</b> has <b>Pattadakal</b> and <b>Hampi Utsav</b>; <b>Kerala</b> has <b>Nishagandhi</b> in Thiruvananthapuram.</p>", key:"Khajuraho — MP; Konark, Mukteswar — Odisha; Mamallapuram, Natyanjali — Tamil Nadu; Elephanta — Maharashtra; Modhera — Gujarat."},
  {k:"table", title:"Festival ↔ state", head:["Festival","State","Note"], rows: L7F.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>Two Sun Temples, two festivals</b>: Konark (Odisha, December) and Modhera (Gujarat, January). <b>“K for Khajuraho, K for Kendra (central) — Madhya Pradesh.”</b>"},
  {k:"trap", h:"<b>Mamallapuram</b> is in <b>Tamil Nadu</b>, not Kerala or Karnataka. <b>Elephanta</b> is in <b>Maharashtra</b>. <b>Konark</b> (Odisha) ≠ <b>Modhera</b> (Gujarat), though both are Sun Temples. <b>Sangai</b> is Manipur's tourism festival, not a classical dance."}
], sum:["Khajuraho Dance Festival — Madhya Pradesh, every February since 1975.","Konark Dance Festival — Odisha, 1–5 December; Mukteswar — Bhubaneswar.","Mamallapuram Dance Festival and Natyanjali (Chidambaram) — Tamil Nadu.","Elephanta Festival — Maharashtra; Modhera Dance Festival — Gujarat.","Pattadakal and Hampi — Karnataka; Nishagandhi — Kerala."]},

{id:"L8", heat:2, title:"Awards to dancers", hi:"नर्तकों को पुरस्कार", blocks:[
  {k:"hot", h:"Questions ask <b>which dancer got the Padma Vibhushan</b> in a year (Birju Maharaj 1986, Sonal Mansingh 2003, Yamini Krishnamurthy 2016, Padma Subrahmanyam 2024, Kumudini Lakhia 2025) and <b>who gives</b> the Sangeet Natak Akademi Award and the Kalidas Samman."},
  {k:"story", h:"<p>The <b>Sangeet Natak Akademi</b>, India's national academy for music, dance and drama, was set up in <b>1952</b> and works under the <b>Ministry of Culture</b> from Rabindra Bhavan, New Delhi. It gives the yearly <b>Akademi Award</b> (Puraskar), its highest honour the <b>Fellowship</b> (Akademi Ratna), and since 2006 the <b>Ustad Bismillah Khan Yuva Puraskar</b> for artists up to 40.</p><p>The <b>Padma awards</b> also honour dancers. <b>T. Balasaraswati</b> got the Padma Vibhushan in 1977, <b>Birju Maharaj</b> in 1986, <b>Kelucharan Mohapatra</b> in 2000 and <b>Sonal Mansingh</b> in 2003. More recently came <b>Yamini Krishnamurthy</b> (2016), <b>Padma Subrahmanyam</b> and <b>Vyjayanthimala</b> (2024) and <b>Kumudini Lakhia</b> (2025). Madhya Pradesh's <b>Kalidas Samman</b> (since 1980) is another top arts prize.</p>", key:"SNA 1952 under the Ministry of Culture; Fellowship = Akademi Ratna; Yuva Puraskar up to 40; PV — Birju 1986, Kelucharan 2000, Sonal 2003, Yamini 2016."},
  {k:"facts", title:"Sangeet Natak Akademi at a glance", rows:[
    ["Set up","1952 (by a government resolution); inaugurated in January 1953"],
    ["Headquarters","Rabindra Bhavan, New Delhi"],
    ["Under","Ministry of Culture"],
    ["First chairman","Justice P. V. Rajamannar"],
    ["Its dance units","Kathak Kendra (New Delhi), Jawaharlal Nehru Manipuri Dance Academy (Imphal), Sattriya Kendra (Guwahati)"],
    ["Other national academies","Sahitya Akademi (letters, 1954) and Lalit Kala Akademi (fine arts, 1954)"]
  ]},
  {k:"table", title:"Padma Vibhushan to dancers", head:["Dancer","Year","Dance"], rows: L8P.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Awards and who gives them", head:["Award","Given by","Note"], rows: L8A.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Padma Vibhushan dancers in order — <b>“Bala Birju Kelu Sonal Yamini Padma Kumudini”</b>: 77, 86, 2000, 03, 16, 24, 25. The gaps grow, then two in a row."},
  {k:"trap", h:"The <b>Kalidas Samman</b> is given by the <b>Madhya Pradesh</b> government, not the Sangeet Natak Akademi. <b>Sangeet Natak</b> = music, dance, drama; <b>Lalit Kala</b> = fine arts; <b>Sahitya</b> = literature. The SNA's <b>Fellowship</b>, not its Award, is the higher honour."}
], sum:["Sangeet Natak Akademi — set up 1952, Ministry of Culture, Rabindra Bhavan, New Delhi.","SNA gives the Akademi Award, the Fellowship (Akademi Ratna, highest) and the Yuva Puraskar (up to 40, since 2006).","Padma Vibhushan: Balasaraswati 1977, Birju Maharaj 1986, Kelucharan Mohapatra 2000, Sonal Mansingh 2003.","Padma Vibhushan: Yamini Krishnamurthy 2016, Padma Subrahmanyam and Vyjayanthimala 2024, Kumudini Lakhia 2025.","Kalidas Samman — Madhya Pradesh government, since 1980."]},

{id:"L9", heat:2, title:"Classical vs folk and tribal dances", hi:"शास्त्रीय बनाम लोक और जनजातीय नृत्य", blocks:[
  {k:"hot", h:"A favourite trick question: <b>“Which of these is NOT a classical dance?”</b> — Bihu, Yakshagana, Garba, Lavani, Kalbelia are folk. Also: Yakshagana vs Kathakali, Bihu vs Sattriya, Gotipua vs Odissi."},
  {k:"story", h:"<p>A <b>classical</b> dance follows a written grammar going back to the <b>Natya Shastra</b>, needs years of training under a guru, and is recognised by the <b>Sangeet Natak Akademi</b>. A <b>folk</b> dance belongs to a community — danced at harvests, weddings and festivals by ordinary people, with no textbook. A <b>tribal</b> dance belongs to a tribe's own life and rituals.</p><p>Many pairs share a state and fool students. Assam has classical <b>Sattriya</b> and folk <b>Bihu</b>. Kerala's <b>Kathakali</b> is classical, but <b>Theyyam</b> is ritual and Karnataka's look-alike <b>Yakshagana</b> is folk theatre. Odisha's boy dancers, the <b>Gotipua</b>, are folk — yet they fed into classical <b>Odissi</b>. Garba, Bhangra, Lavani and Ghoomar are all folk. (Folk dances get a full app of their own.)</p>", key:"Classical = Natya Shastra grammar + SNA recognition; folk = community dance. Bihu, Yakshagana, Garba, Lavani, Theyyam are NOT classical."},
  {k:"table", title:"Famous folk and ritual dances", head:["Dance","State","Note"], rows: L9F.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Classical or not?", head:["Name","What it is","Note"], rows: L9C.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Remember the eight with <b>“BK3 MOMS”</b>: <b>B</b>haratanatyam, <b>K</b>athak, <b>K</b>athakali, <b>K</b>uchipudi; <b>M</b>anipuri, <b>O</b>dissi, <b>M</b>ohiniyattam, <b>S</b>attriya. Anything outside this list is not SNA-classical."},
  {k:"trap", h:"<b>Yakshagana</b> looks like Kathakali but is <b>Karnataka's folk theatre</b>. <b>Bihu</b> is folk; <b>Sattriya</b> is classical — both Assam. <b>Kalaripayattu</b> and <b>Thang-ta</b> are martial arts, not dances. <b>Chhau</b> is in the Ministry of Culture's list, so read the question's wording."}
], sum:["Classical dances follow the Natya Shastra and are recognised by the Sangeet Natak Akademi; folk dances belong to communities.","Assam: Sattriya (classical) vs Bihu (folk); Kerala: Kathakali (classical) vs Theyyam (ritual).","Yakshagana is Karnataka's folk dance-drama, not classical.","Gotipua (Odisha) boy dancers fed into Odissi.","Garba (UNESCO 2023) and Kalbelia (UNESCO 2010) are folk dances."]}
);

pairQs("L7", L7F, { q: t => `The ${t} is held in which state?`, rq: a => `Which dance festival is held in ${a}?` });
pairQs("L8", L8P, { q: t => `${t} received the Padma Vibhushan in which year?`, rq: a => `Which dancer received the Padma Vibhushan in ${a}?`, extra: ["1992","2010"] });
pairQs("L8", L8A, { q: t => `The ${t} is given by:`, rq: a => `Which honour is given by the ${a}?` });
pairQs("L9", L9F, { q: t => `${t} is a folk or ritual dance of which state?`, rq: a => `Which is a famous folk or ritual dance of ${a}?` });
pairQs("L9", L9C, { q: t => `${t} is best described as a:` });

QB.push(
["L7","The Elephanta Festival is held near which city?",["Mumbai","Pune","Nagpur","Goa"],"On Elephanta (Gharapuri) island.",""],
["L7","Hampi Utsav is also known as:",["Vijaya Utsav","Mysuru Dasara","Kadamba Utsav","Chalukya Utsav"],"After the Vijayanagara empire.",""],
["L8","In 2002 Sitara Devi declined which award, saying she deserved more?",["Padma Bhushan","Padma Shri","Sangeet Natak Akademi Award","Kalidas Samman"],"She said nothing less than the Bharat Ratna would do.",""],
["L8","The highest honour given by the Sangeet Natak Akademi is its:",["Fellowship (Akademi Ratna)","Akademi Award","Yuva Puraskar","Tagore Samman"],"Only a few fellows are elected at a time.","p"],
["L8","The Lalit Kala Akademi is India's national academy for:",["Fine arts","Music and dance","Literature","Drama"],"Set up in 1954.",""],
["L9","Which of the following is NOT a folk dance?",["Kathakali","Bihu","Garba","Lavani"],"Kathakali is one of the eight classical dances.","p"],
["L9","The Kalbelia dance of Rajasthan belongs to which community?",["Snake charmers","Fishermen","Camel herders","Potters"],"Its movements copy a serpent.",""],
["L9","Which pair is correctly matched?",["Sattriya — classical dance of Assam","Yakshagana — classical dance of Kerala","Bihu — classical dance of Assam","Theyyam — classical dance of Karnataka"],"",""],
["L7","The Khajuraho Dance Festival began in:",["1975","1952","1986","1990"],"Organised by the Madhya Pradesh government every February.","p"],
["L7","The Konark Dance Festival is held against the backdrop of the:",["Sun Temple","Jagannath Temple","Lingaraj Temple","Udayagiri caves"],"From 1 to 5 December.","p"],
["L7","The Mamallapuram Dance Festival is held against the backdrop of:",["Arjuna's Penance","The Elephanta Caves","The Brihadeeswara Temple","The Meenakshi Temple"],"A huge rock relief of the Pallavas.",""],
["L7","The Natyanjali Dance Festival is held at the Nataraja temple in:",["Chidambaram","Thanjavur","Madurai","Kanchipuram"],"Around Maha Shivaratri.","p"],
["L7","Which dance festival is held at a Sun Temple in Gujarat?",["Modhera Dance Festival","Konark Dance Festival","Khajuraho Dance Festival","Pattadakal Dance Festival"],"Also called the Uttarardh Mahotsav.",""],
["L7","The Konark Dance Festival is held every year in:",["December","February","August","April"],"1 to 5 December.",""],
["L8","The Sangeet Natak Akademi works under the:",["Ministry of Culture","Ministry of Education","Ministry of Information and Broadcasting","Ministry of Tourism"],"Set up in 1952.","p"],
["L8","The Sangeet Natak Akademi is India's national academy for:",["Music, dance and drama","Literature","Painting and sculpture","Films"],"Sahitya Akademi is for literature; Lalit Kala Akademi for fine arts.","p"],
["L8","Who was the first chairman of the Sangeet Natak Akademi?",["P. V. Rajamannar","Rukmini Devi Arundale","Rabindranath Tagore","Zakir Husain"],"",""],
["L8","The Ustad Bismillah Khan Yuva Puraskar is given to artists up to the age of:",["40","30","35","50"],"Given by the Sangeet Natak Akademi since 2006.",""],
["L8","The Sangeet Natak Akademi is headquartered at:",["Rabindra Bhavan, New Delhi","Kalakshetra, Chennai","Bharat Bhavan, Bhopal","Vigyan Bhavan, New Delhi"],"It shares Rabindra Bhavan with the Sahitya and Lalit Kala Akademis.",""],
["L9","Which of the following is NOT a classical dance of India?",["Yakshagana","Kuchipudi","Sattriya","Mohiniyattam"],"Yakshagana is Karnataka's folk dance-drama.","p"],
["L9","Which of these is a classical dance of Assam (not a folk dance)?",["Sattriya","Bihu","Bagurumba","Jhumur"],"Bihu and Bagurumba are folk dances of Assam.","p"],
["L9","Gotipua, a forerunner of Odissi, is performed by:",["Young boys dressed as girls","Temple priests","Married women","Masked warriors"],"In Odisha.","p"],
["L9","Which folk dance of Gujarat was added to UNESCO's intangible heritage list in December 2023?",["Garba","Dandiya Raas","Tippani","Padhar"],"India's 15th element on the list.",""],
["L9","Kalaripayattu, which influenced Kathakali's training, is a:",["Martial art of Kerala","Folk dance of Tamil Nadu","Puppet theatre of Karnataka","Ritual song of Odisha"],"",""]
);

LASTMOMENT.push(
{t:"Festival ↔ state", era:["cd"], rows:[["Khajuraho","Madhya Pradesh"],["Konark, Mukteswar","Odisha"],["Mamallapuram, Natyanjali","Tamil Nadu"],["Elephanta","Maharashtra"],["Modhera","Gujarat"],["Pattadakal, Hampi","Karnataka"],["Nishagandhi","Kerala"]]},
{t:"Padma Vibhushan dancers", era:["cd"], rows:[["Balasaraswati","1977"],["Birju Maharaj","1986"],["Kelucharan Mohapatra","2000"],["Sonal Mansingh","2003"],["Yamini Krishnamurthy","2016"],["Padma Subrahmanyam, Vyjayanthimala","2024"],["Kumudini Lakhia","2025"]]},
{t:"Not classical!", era:["cd"], rows:[["Bihu","Assam folk"],["Yakshagana","Karnataka folk theatre"],["Theyyam","Kerala ritual"],["Gotipua","Odisha folk"],["Garba","Gujarat folk"],["Kalaripayattu","Kerala martial art"]]}
);
TILES.push(["1952","Sangeet Natak Akademi","cd"],["1975","Khajuraho festival begins","cd"],["2025","Kumudini Lakhia — Padma Vibhushan","cd"]);

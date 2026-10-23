/* Part 3 · M7 great singers; M8 Bharat Ratna musicians, music awards and Indian Grammy winners; M9 folk instruments by state. */
const M7 = [
  ["Bhimsen Joshi","Hindustani classical","Kirana gharana; Bharat Ratna (announced 2008, given 2009).","p"],
  ["Kishori Amonkar","Hindustani classical","Jaipur-Atrauli gharana.","p"],
  ["Pandit Jasraj","Hindustani classical","Mewati gharana.","p"],
  ["Gangubai Hangal","Hindustani classical","Kirana gharana.","p"],
  ["Kumar Gandharva","Hindustani classical","Lived in Dewas, MP; mixed folk tunes into classical music.",""],
  ["Girija Devi","Hindustani classical","'Queen of thumri', Benares gharana.",""],
  ["Bade Ghulam Ali Khan","Hindustani classical","Patiala gharana.",""],
  ["M. S. Subbulakshmi","Carnatic classical","First musician to get the Bharat Ratna (1998).","p"],
  ["M. Balamuralikrishna","Carnatic classical","Created new ragas; also sang in films.","p"],
  ["D. K. Pattammal","Carnatic classical","",""],
  ["Semmangudi Srinivasa Iyer","Carnatic classical","",""],
  ["M. L. Vasanthakumari","Carnatic classical","",""],
  ["Begum Akhtar","Ghazal","Called 'Mallika-e-Ghazal' (Queen of Ghazal).","p"],
  ["Jagjit Singh","Ghazal","Called the 'Ghazal King'.","p"],
  ["Lata Mangeshkar","Film playback","'Nightingale of India'; Bharat Ratna 2001.","p"],
  ["Mohammed Rafi","Film playback","",""],
  ["Kishore Kumar","Film playback","",""],
  ["Asha Bhosle","Film playback","Lata Mangeshkar's younger sister.",""],
  ["Bhupen Hazarika","Folk and film (Assamese)","'Sudhakantha'; Bharat Ratna 2019 (posthumous).","p"],
  ["Sharda Sinha","Folk (Bhojpuri and Maithili)","Famous for Chhath songs; Padma Vibhushan 2025 (posthumous).",""],
  ["Teejan Bai","Pandavani (folk ballad)","Sings the Mahabharata in the Pandavani style of Chhattisgarh.","p"],
  ["Nusrat Fateh Ali Khan","Qawwali","Pakistani qawwal, famous across the world.",""]
];
const M8B = [
  ["M. S. Subbulakshmi","1998","The first musician to receive it.","p"],
  ["Ravi Shankar","1999","Sitar.","p|SSC CPO · 10 Nov 2022 (Shift 2)"],
  ["Lata Mangeshkar","2001","Playback singer.","p"],
  ["Bismillah Khan","2001","Shehnai.","p"],
  ["Bhimsen Joshi","2009","Announced in November 2008.","p"],
  ["Bhupen Hazarika","2019","Posthumous.","p"]
];
const M8G = [
  ["Ravi Shankar","West Meets East (with Yehudi Menuhin)","The first Grammy for an Indian (1968 ceremony).","p"],
  ["Zakir Hussain","Planet Drum (with Mickey Hart)","1992 — the first Grammy for world music.","p"],
  ["Vishwa Mohan Bhatt","A Meeting by the River (with Ry Cooder)","1994.","p"],
  ["A. R. Rahman","Slumdog Millionaire, incl. 'Jai Ho'","Two Grammys in 2010.","p"],
  ["Ricky Kej","Winds of Samsara","2015 — he has won three Grammys in all.","p"],
  ["Falguni Shah","A Colorful World","2022 — best children's album.",""],
  ["Shankar Mahadevan","This Moment (with Shakti)","2024 — best global music album.","p"],
  ["Rakesh Chaurasia","Pashto (with Béla Fleck, Edgar Meyer, Zakir Hussain)","2024.",""],
  ["Chandrika Tandon","Triveni","2025 — best new age album.",""]
];
const M9 = [
  ["Ravanahatha","Rajasthan","An ancient bowed fiddle, linked in legend with Ravana.","p"],
  ["Kamaicha","Rajasthan","Bowed; played by the Manganiyars of the Thar.",""],
  ["Morchang","Rajasthan","Metal jaw harp.",""],
  ["Bhapang","Rajasthan","Plucked drum-string of the Mewat (Alwar) region.",""],
  ["Tumbi","Punjab","One-string instrument of bhangra songs.","p"],
  ["Chimta","Punjab","Long tongs with jingles.",""],
  ["Pena","Manipur","A one-string bowed fiddle.","p"],
  ["Pung","Manipur","Drum played in the Pung Cholom dance.",""],
  ["Chenda","Kerala","Played in temple festivals and Kathakali.",""],
  ["Edakka","Kerala","Hourglass drum of temple music.",""],
  ["Mizhavu","Kerala","Big copper drum of Koodiyattam.",""],
  ["Timila","Kerala","Hourglass drum of the Panchavadyam.",""],
  ["Thavil","Tamil Nadu","Barrel drum played with the nadaswaram.","p"],
  ["Nadaswaram","Tamil Nadu","Temple wind instrument.","p"],
  ["Yazh","Tamil Nadu","Ancient Tamil harp of the Sangam age.",""],
  ["Pepa","Assam","Buffalo-horn pipe of Bihu.","p"],
  ["Gogona","Assam","Bamboo jaw harp of Bihu.",""],
  ["Rabab","Jammu and Kashmir","Plucked; used in Kashmiri folk and Sufiana music.",""],
  ["Tumbaknari","Jammu and Kashmir","Clay goblet drum.",""],
  ["Hudka","Uttarakhand","Hourglass drum of Jagar songs.",""],
  ["Dhol-Damau","Uttarakhand","Pair of drums of the Garhwal and Kumaon hills.",""],
  ["Tuntuna","Maharashtra","One-string instrument of devotional and folk singers.",""],
  ["Sundari","Maharashtra","A small shehnai-like pipe from Solapur.",""],
  ["Ghumot","Goa","Earthen pot drum; declared Goa's heritage instrument.","p"],
  ["Mardala","Odisha","Barrel drum of Odissi music and dance.",""],
  ["Ektara (Baul singers)","West Bengal","Baul singers carry it.","p"]
];

LESSONS.push(
{id:"M7", heat:3, title:"Great singers", hi:"महान गायक", blocks:[
  {k:"hot", h:"Asked: the <b>style</b> of a singer (Hindustani, Carnatic, ghazal, folk), their <b>nicknames</b> ('Nightingale of India', 'Mallika-e-Ghazal') and their <b>firsts</b> — M. S. Subbulakshmi first musician with the Bharat Ratna, first Indian musician to sing at the <b>UN</b> (1966)."},
  {k:"story", h:"<p>Indian singing has many voices. In the Hindustani world, <b>Bhimsen Joshi</b> and <b>Gangubai Hangal</b> carried the Kirana style, <b>Kishori Amonkar</b> the Jaipur-Atrauli style and <b>Pandit Jasraj</b> the Mewati style. In the south, <b>M. S. Subbulakshmi</b> sang at the <b>United Nations in 1966</b>, won the <b>Ramon Magsaysay Award (1974)</b> and became the first musician to get the <b>Bharat Ratna (1998)</b>.</p><p>Beyond classical music, <b>Begum Akhtar</b> became the queen of <b>ghazal</b>, <b>Lata Mangeshkar</b> sang for Indian films for seven decades, <b>Bhupen Hazarika</b> carried Assamese folk songs to the world, and <b>Teejan Bai</b> sings the Mahabharata in the <b>Pandavani</b> style of Chhattisgarh.</p>", key:"Hindustani — Bhimsen Joshi, Kishori Amonkar, Jasraj; Carnatic — M. S. Subbulakshmi; ghazal — Begum Akhtar, Jagjit Singh; Pandavani — Teejan Bai."},
  {k:"table", title:"Singers and their style", head:["Singer","Style","Remember"], rows: M7.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“MS = Mighty South”</b> — M. S. Subbulakshmi, Carnatic, first musician Bharat Ratna. <b>“Begum of Ghazal”</b> — Begum Akhtar. <b>“Teejan tells the Pandavas”</b> — Pandavani."},
  {k:"trap", h:"<b>'Nightingale of India'</b> means <b>Sarojini Naidu</b> in history questions and <b>Lata Mangeshkar</b> in music questions — read the question. <b>Sharda Sinha</b> sang <b>Bhojpuri and Maithili</b> folk songs (Chhath), not Assamese."}
], sum:["Hindustani vocalists: Bhimsen Joshi, Gangubai Hangal, Kishori Amonkar, Pandit Jasraj, Kumar Gandharva.","Carnatic vocalists: M. S. Subbulakshmi, M. Balamuralikrishna, D. K. Pattammal.","M. S. Subbulakshmi: UN concert 1966, Magsaysay 1974, Bharat Ratna 1998.","Ghazal: Begum Akhtar (Mallika-e-Ghazal), Jagjit Singh.","Lata Mangeshkar (films), Bhupen Hazarika (Assam), Teejan Bai (Pandavani, Chhattisgarh)."]},

{id:"M8", heat:3, title:"Bharat Ratna musicians, music awards and Grammys", hi:"भारत रत्न संगीतकार, संगीत पुरस्कार और ग्रैमी", blocks:[
  {k:"hot", h:"Asked: the <b>six Bharat Ratna musicians</b> and their years, who gives the <b>Sangeet Natak Akademi</b>, <b>Kalidas</b> and <b>Tansen</b> awards, and <b>Indian Grammy winners</b> (Ravi Shankar, Zakir Hussain, A. R. Rahman, Ricky Kej, Shankar Mahadevan)."},
  {k:"story", h:"<p>Up to 2024, six musicians had received the <b>Bharat Ratna</b>: <b>M. S. Subbulakshmi</b> (1998) was the first, then <b>Ravi Shankar</b> (1999), <b>Lata Mangeshkar</b> and <b>Bismillah Khan</b> (both 2001), <b>Bhimsen Joshi</b> (2009) and <b>Bhupen Hazarika</b> (2019, posthumous). The national academy for music, dance and drama, the <b>Sangeet Natak Akademi</b>, was set up in 1952; its highest honour is the <b>Fellowship (Akademi Ratna)</b>.</p><p>Indian music also shines at the <b>Grammys</b>. <b>Ravi Shankar</b> won first, for <i>West Meets East</i> with violinist Yehudi Menuhin. <b>Zakir Hussain</b> won for <i>Planet Drum</i> (1992) and then <b>three in one night in 2024</b>. <b>A. R. Rahman</b> won two for <i>Slumdog Millionaire</i> (2010), and <b>Ricky Kej</b> has won three.</p>", key:"Bharat Ratna musicians: MS (1998), Ravi Shankar (1999), Lata and Bismillah (2001), Bhimsen Joshi (2009), Bhupen Hazarika (2019)."},
  {k:"table", title:"Bharat Ratna musicians", head:["Musician","Year","Note"], rows: M8B.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Indian Grammy winners", head:["Musician","Won for","Note"], rows: M8G.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Music awards to know", rows:[
    ["Sangeet Natak Akademi","India's national academy of music, dance and drama, New Delhi; set up 1952"],
    ["Sangeet Natak Akademi Fellowship","Its highest honour, also called Akademi Ratna"],
    ["Kalidas Samman","Madhya Pradesh government, since 1980 — for classical music, dance, theatre and art"],
    ["Tansen Samman","Madhya Pradesh government — given at the Tansen Samaroh in Gwalior"],
    ["Lata Mangeshkar Award","Given by the Madhya Pradesh government (and separately by Maharashtra) for light music"],
    ["Sangita Kalanidhi","Highest Carnatic music title, given by the Music Academy, Chennai"],
    ["Grammy","Given by the Recording Academy, USA"],
    ["Magsaysay to musicians","M. S. Subbulakshmi (1974) and Ravi Shankar (1992)"]
  ]},
  {k:"trick", h:"Bharat Ratna musicians in order — <b>“My Rhythm Lifts Body’s Breath, Harmony”</b>: <b>M</b>S 98, <b>R</b>avi 99, <b>L</b>ata and <b>B</b>ismillah 2001, <b>B</b>himsen 2009, <b>H</b>azarika 2019."},
  {k:"trap", h:"<b>Kalidas Samman</b> and <b>Tansen Samman</b> are given by the <b>Madhya Pradesh</b> government, not the Centre. <b>Bhimsen Joshi</b>'s Bharat Ratna was announced in 2008 but presented in 2009. <b>Zakir Hussain</b>, not Ravi Shankar, won three Grammys in one night (2024)."}
], sum:["Bharat Ratna musicians: M. S. Subbulakshmi 1998 (first), Ravi Shankar 1999, Lata Mangeshkar and Bismillah Khan 2001.","Then Bhimsen Joshi 2009 and Bhupen Hazarika 2019 (posthumous).","Sangeet Natak Akademi (1952) — its highest honour is the Fellowship (Akademi Ratna).","Kalidas Samman and Tansen Samman are given by the Madhya Pradesh government.","Grammys: Ravi Shankar (first), Zakir Hussain (1992, three in 2024), A. R. Rahman (2010), Ricky Kej (three)."]},

{id:"M9", heat:2, title:"Folk instruments by state", hi:"राज्यों के लोक वाद्य", blocks:[
  {k:"hot", h:"Asked: <b>“Pena / Ravanahatha / Tumbi / Pepa is a folk instrument of which state?”</b> Learn the pairs — Pena–Manipur, Ravanahatha–Rajasthan, Tumbi–Punjab, Pepa–Assam, Chenda–Kerala, Thavil–Tamil Nadu."},
  {k:"story", h:"<p>Every region has its own sound. In the Thar desert of <b>Rajasthan</b>, Manganiyar singers play the <b>kamaicha</b> and the ancient <b>ravanahatha</b>, with the twang of the <b>morchang</b>. In <b>Punjab</b>, the one-string <b>tumbi</b> and the jingling <b>chimta</b> drive bhangra songs. In <b>Assam</b>, the buffalo-horn <b>pepa</b> and bamboo <b>gogona</b> announce Bihu; in <b>Manipur</b>, the bowed <b>pena</b> and the <b>pung</b> drum lead the dance.</p><p>In <b>Kerala</b>, temple festivals thunder with the <b>chenda</b>, <b>edakka</b> and <b>timila</b>; <b>Tamil Nadu</b> temples ring with the <b>nadaswaram</b> and <b>thavil</b>. <b>Goa</b> made the clay-pot <b>ghumot</b> its heritage instrument, and the <b>Bauls</b> of Bengal wander with their <b>ektara</b>.</p>", key:"Ravanahatha, kamaicha — Rajasthan; tumbi — Punjab; pena, pung — Manipur; pepa — Assam; chenda — Kerala; thavil — Tamil Nadu; ghumot — Goa."},
  {k:"table", title:"Folk instruments and their states", head:["Instrument","State / UT","Remember"], rows: M9.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Pena–Pung–Manipur”</b> (three Ps and an M). <b>“Pepa Plays at Bihu”</b> — Assam. <b>“Tumbi Thumps in Punjab”</b>. <b>“Ravana's fiddle in Rajasthan”</b>."},
  {k:"trap", h:"The <b>ravanahatha</b> is named after Ravana but is a <b>Rajasthani</b> folk fiddle, not from Sri Lanka in the exam sense. The <b>pena</b> is from <b>Manipur</b>, the <b>pepa</b> from <b>Assam</b> — similar names."}
], sum:["Rajasthan: ravanahatha, kamaicha, morchang, bhapang.","Punjab: tumbi, chimta; Manipur: pena, pung.","Assam: pepa, gogona; Jammu and Kashmir: rabab, tumbaknari.","Kerala: chenda, edakka, mizhavu, timila; Tamil Nadu: nadaswaram, thavil, yazh.","Goa: ghumot; Odisha: mardala; Uttarakhand: hudka, dhol-damau; Maharashtra: tuntuna."]}
);

pairQs("M7", M7, { q: t => `${t} is best known as a singer of:`, extra: ["Rabindra Sangeet"] });
pairQs("M8", M8B, { q: t => `${t} received the Bharat Ratna in:`, rq: a => `Which musician received the Bharat Ratna in ${a}?`, extra: ["2005","2014"] });
pairQs("M8", M8G, { q: t => `${t} won a Grammy for:`, rq: a => `Who won a Grammy for '${a}'?` });
pairQs("M9", M9, { q: t => `The ${t[0].toLowerCase() + t.slice(1)} is a folk instrument of:`, rq: a => `Which folk instrument belongs to ${a}?` });

QB.push(
["M7","Who was the first musician to receive the Bharat Ratna?",["M. S. Subbulakshmi","Lata Mangeshkar","Ravi Shankar","Bismillah Khan"],"In 1998.","p"],
["M7","Which Indian musician sang at the United Nations General Assembly in 1966?",["M. S. Subbulakshmi","Lata Mangeshkar","Ravi Shankar","Bhimsen Joshi"],"M.S. Subbulakshmi sang at the UN General Assembly in 1966, the first Indian musician to do so.",""],
["M7","Who is called 'Mallika-e-Ghazal'?",["Begum Akhtar","Lata Mangeshkar","Girija Devi","Noor Jehan"],"Begum Akhtar is called 'Mallika-e-Ghazal', the queen of ghazal.","p"],
["M7","Teejan Bai is famous for which folk singing style?",["Pandavani","Baul","Lavani","Bihu"],"From Chhattisgarh.","p"],
["M7","Pandavani, sung by Teejan Bai, belongs to which state?",["Chhattisgarh","Odisha","Madhya Pradesh","Jharkhand"],"Pandavani, the singing of Mahabharata stories, is from Chhattisgarh; Teejan Bai is its best-known performer.",""],
["M7","Sharda Sinha was best known for folk songs in:",["Bhojpuri and Maithili","Assamese","Rajasthani","Punjabi"],"Especially Chhath songs; Padma Vibhushan 2025 (posthumous).",""],
["M7","Who is called the 'Ghazal King'?",["Jagjit Singh","Mehdi Hassan","Pankaj Udhas","Talat Aziz"],"Jagjit Singh is called the 'Ghazal King' for bringing the ghazal to a mass audience.",""],
["M7","Which singer is called the 'Queen of thumri'?",["Girija Devi","Begum Akhtar","Kishori Amonkar","Gangubai Hangal"],"Of the Benares gharana.",""],
["M7","Lata Mangeshkar received the Dadasaheb Phalke Award in:",["1989","2001","1974","1999"],"Bharat Ratna followed in 2001.",""],
["M7","Bhupen Hazarika was a singer and composer from:",["Assam","West Bengal","Manipur","Odisha"],"Known as 'Sudhakantha'.","p"],
["M7","Asha Bhosle is the younger sister of:",["Lata Mangeshkar","Usha Uthup","Geeta Dutt","Shamshad Begum"],"Asha Bhosle is the younger sister of Lata Mangeshkar.",""],
["M7","Kumar Gandharva made his home in which town of Madhya Pradesh?",["Dewas","Indore","Gwalior","Ujjain"],"Kumar Gandharva settled in Dewas (MP) to recover from tuberculosis and lived there for the rest of his life.",""],
["M8","The highest honour of the Sangeet Natak Akademi is its:",["Fellowship (Akademi Ratna)","Akademi Puraskar","Yuva Puraskar","Kalidas Samman"],"The Sangeet Natak Akademi's highest honour is its Fellowship (Akademi Ratna).",""],
["M8","As of 2025, how many Grammys has Ricky Kej won?",["Three","One","Two","Four"],"2015, 2022 and 2023.",""],
["M8","Ravi Shankar's first Grammy was shared with which Western violinist?",["Yehudi Menuhin","Itzhak Perlman","Isaac Stern","Nigel Kennedy"],"For West Meets East.","p"],
["M8","Up to 2024, how many musicians had received the Bharat Ratna?",["Six","Four","Five","Seven"],"MS Subbulakshmi, Ravi Shankar, Lata Mangeshkar, Bismillah Khan, Bhimsen Joshi, Bhupen Hazarika.",""],
["M8","The Kalidas Samman is given by:",["The Madhya Pradesh government","The Government of India","The Sangeet Natak Akademi","The Uttar Pradesh government"],"Since 1980.","p"],
["M8","The Tansen Samman is given by:",["The Madhya Pradesh government","The Rajasthan government","The Sangeet Natak Akademi","The Ministry of Culture"],"At the Tansen Samaroh, Gwalior.","p"],
["M8","The Sangeet Natak Akademi was set up in:",["1952","1947","1954","1961"],"In New Delhi.","p"],
["M8","Who was the first Indian to win a Grammy?",["Ravi Shankar","Zakir Hussain","A. R. Rahman","Vishwa Mohan Bhatt"],"For West Meets East with Yehudi Menuhin.","p"],
["M8","Which Indian musician won three Grammys in a single night in 2024?",["Zakir Hussain","Ricky Kej","Shankar Mahadevan","A. R. Rahman"],"At the 2024 Grammys, Zakir Hussain won three awards in one night, two of them with the band Shakti.","p"],
["M8","'Sangita Kalanidhi' is awarded by:",["The Music Academy, Chennai","The Sangeet Natak Akademi","The Government of Karnataka","Kalakshetra"],"The top title in Carnatic music.",""],
["M9","Goa declared which instrument its heritage instrument?",["Ghumot","Tabla","Pena","Chenda"],"A clay-pot drum.","p"],
["M9","The pepa of Assam is made from:",["A buffalo horn","Bamboo","Clay","Coconut shell"],"Played in Bihu.",""],
["M9","The gogona, played in Bihu, is a jaw harp made of:",["Bamboo","Iron","Clay","Buffalo horn"],"The gogona is a bamboo jaw harp played during Bihu in Assam.",""],
["M9","The mizhavu drum accompanies which Kerala theatre form?",["Koodiyattam","Kathakali","Theyyam","Yakshagana"],"The mizhavu, a large copper drum, accompanies Koodiyattam and Chakyar Koothu.",""],
["M9","The Pung Cholom drum dance belongs to:",["Manipur","Assam","Nagaland","Tripura"],"Part of Manipuri Sankirtana.","p"],
["M9","The Manganiyar musicians who play the kamaicha belong to:",["Rajasthan","Gujarat","Punjab","Haryana"],"From the Thar desert.",""]
);

LASTMOMENT.push(
{t:"Bharat Ratna musicians", era:["mu"], rows:[["M. S. Subbulakshmi","1998"],["Ravi Shankar","1999"],["Lata Mangeshkar","2001"],["Bismillah Khan","2001"],["Bhimsen Joshi","2009"],["Bhupen Hazarika","2019"]]},
{t:"Grammys", era:["mu"], rows:[["First Indian","Ravi Shankar"],["Planet Drum (1992)","Zakir Hussain"],["Slumdog Millionaire (2010)","A. R. Rahman"],["Winds of Samsara (2015)","Ricky Kej"],["Three in one night (2024)","Zakir Hussain"]]},
{t:"Folk instrument ↔ state", era:["mu"], rows:[["Ravanahatha","Rajasthan"],["Tumbi","Punjab"],["Pena","Manipur"],["Pepa","Assam"],["Chenda","Kerala"],["Thavil","Tamil Nadu"],["Ghumot","Goa"],["Hudka","Uttarakhand"]]}
);
TILES.push(["1998","MS Subbulakshmi — first musician Bharat Ratna","mu"],["6","Bharat Ratna musicians","mu"],["1952","Sangeet Natak Akademi","mu"],["1966","MS at the UN","mu"]);

/* Part 2 · M4 Hindustani and Carnatic — the great names; M5 gharanas; M6 ragas, times and musical terms. */
const M4 = [
  ["Father of Carnatic music","Purandara Dasa","16th century, Vijayanagara; set the basic lessons every Carnatic student still learns.","p"],
  ["Trinity member who composed mostly in Telugu; Aradhana festival at Thiruvaiyaru","Tyagaraja","The Tyagaraja Aradhana is held every January at his samadhi on the Kaveri.","p"],
  ["Trinity member who composed mostly in Sanskrit","Muthuswami Dikshitar","Youngest of the three.","p"],
  ["Eldest member of the Carnatic trinity","Syama Sastri","Known for kritis to the goddess Kamakshi.",""],
  ["Court musician of Akbar, one of his 'nine gems'","Tansen","Buried in Gwalior; the Tansen Samaroh is held there every December.","p"],
  ["Guru of Tansen","Swami Haridas","A saint-musician of Vrindavan.","p"],
  ["Called 'Tuti-e-Hind' (Parrot of India); father of qawwali","Amir Khusrau","Poet at the Delhi Sultanate court; tradition credits him with the sitar and tabla.","p"],
  ["Founded the Gandharva Mahavidyalaya at Lahore (1901)","Vishnu Digambar Paluskar","Set 'Raghupati Raghava Raja Ram' to music.","p"],
  ["Sorted Hindustani ragas into ten thaats","Vishnu Narayan Bhatkhande","Also wrote a widely used notation system.","p"],
  ["Wrote the Sangita Ratnakara (13th century)","Sarngadeva","A key text for both Hindustani and Carnatic music.",""],
  ["Set out the 72 melakarta scheme of Carnatic music","Venkatamakhin","In the Chaturdandi Prakasika (17th century).",""],
  ["Raja of Gwalior who promoted Dhrupad","Man Singh Tomar","15th–16th century.","p"],
  ["Wrote the Gita Govinda, sung in temples of Odisha","Jayadeva","12th-century poet.",""],
  ["Legendary singer-rival of Tansen","Baiju Bawra","",""],
  ["Pen-name 'Sadarang'; made the khayal popular at Muhammad Shah's court","Niyamat Khan","18th century, Delhi.",""],
  ["Maharaja of Travancore who composed in both Carnatic and Hindustani styles","Swathi Thirunal","",""]
];
const M5 = [
  ["Bhimsen Joshi","Kirana","Bharat Ratna; famous for 'Mile Sur Mera Tumhara'.","p"],
  ["Gangubai Hangal","Kirana","From Hubballi-Dharwad, Karnataka.","p"],
  ["Abdul Karim Khan","Kirana","Founder of the Kirana gharana.",""],
  ["Prabha Atre","Kirana","",""],
  ["Kishori Amonkar","Jaipur-Atrauli","Daughter of Mogubai Kurdikar.","p"],
  ["Alladiya Khan","Jaipur-Atrauli","Founder of the Jaipur-Atrauli gharana.",""],
  ["Mallikarjun Mansur","Jaipur-Atrauli","",""],
  ["Pandit Jasraj","Mewati","A minor planet is named after him.","p"],
  ["Bade Ghulam Ali Khan","Patiala","",""],
  ["Faiyaz Khan","Agra","",""],
  ["Rashid Khan","Rampur-Sahaswan","",""],
  ["Amir Khan","Indore","Founder of the Indore gharana.",""],
  ["Haddu Khan and Hassu Khan","Gwalior","Gwalior is the oldest khayal gharana.","p"],
  ["Girija Devi","Benares","'Queen of thumri'.",""],
  ["Ravi Shankar, Ali Akbar Khan, Annapurna Devi","Maihar","All pupils of Allauddin Khan.","p"],
  ["Vilayat Khan","Imdadkhani (Etawah)","",""],
  ["Alla Rakha (tabla)","Punjab","",""],
  ["The Dagar family (Dhrupad)","Dagar vani","",""]
];
const M6R = [
  ["Bhairav","Early morning (dawn)","Sung at sunrise.","p"],
  ["Ahir Bhairav","Early morning (dawn)","",""],
  ["Todi","Late morning","",""],
  ["Bhimpalasi","Afternoon","",""],
  ["Multani","Afternoon","",""],
  ["Marwa","Sunset (dusk)","",""],
  ["Puriya Dhanashri","Sunset (dusk)","",""],
  ["Yaman","Evening (early night)","One of the first ragas a student learns.","p"],
  ["Bhupali","Evening (early night)","",""],
  ["Darbari Kanada","Late night","Credited to Tansen.","p"],
  ["Malkauns","Late night","",""],
  ["Miyan ki Malhar","Monsoon (rain)","Credited to Tansen; said to bring rain.","p"],
  ["Megh","Monsoon (rain)","",""],
  ["Basant","Spring","",""],
  ["Bahar","Spring","",""]
];
const M6T = [
  ["Raga","A melodic framework of notes with set rules","",""],
  ["Tala","A repeating cycle of beats (rhythm)","Teentaal has 16 beats.","p"],
  ["Sam","The first beat of a tala cycle","",""],
  ["Khali","The 'empty' beat shown by a wave of the hand","",""],
  ["Alap","The slow opening of a raga, without rhythm","",""],
  ["Taan","A fast run of notes in a raga","",""],
  ["Jhala","The fast closing part of an instrumental recital","",""],
  ["Thaat","A parent scale in Hindustani music (there are 10)","",""],
  ["Melakarta","A parent scale in Carnatic music (there are 72)","",""],
  ["Saptak","The octave — the seven notes Sa Re Ga Ma Pa Dha Ni","",""],
  ["Shruti","A microtone — the smallest step of pitch (22 in an octave)","",""],
  ["Bandish","A fixed composition in Hindustani vocal music","",""],
  ["Kriti","The main composition form of Carnatic music","",""],
  ["Dhrupad","The oldest surviving Hindustani vocal form, slow and grand","Sung by the Dagar family; Tansen was a Dhrupad singer.","p"],
  ["Khayal","The most popular Hindustani vocal form; the word means 'imagination'","",""],
  ["Thumri","A light-classical, romantic form linked with Lucknow and Banaras","",""],
  ["Tarana","A fast vocal form sung with syllables like 'tana dere na'","Credited to Amir Khusrau; the Carnatic version is the tillana.",""],
  ["Qawwali","Sufi devotional singing, often at dargahs","Credited to Amir Khusrau.","p"]
];

LESSONS.push(
{id:"M4", heat:3, title:"Hindustani and Carnatic: the great names", hi:"हिंदुस्तानी और कर्नाटक संगीत: महान नाम", blocks:[
  {k:"hot", h:"Regular questions: the <b>Carnatic trinity</b> (Tyagaraja, Muthuswami Dikshitar, Syama Sastri), the <b>father of Carnatic music</b> (Purandara Dasa), <b>Tansen</b> and his guru <b>Swami Haridas</b>, and <b>Amir Khusrau</b> (Tuti-e-Hind)."},
  {k:"story", h:"<p>Indian classical music grew from one root but split into two branches. In the north, <b>Hindustani</b> music met Persian and Sufi ideas at the Sultanate and Mughal courts. <b>Amir Khusrau</b> (13th–14th century) created the <b>qawwali</b> and <b>tarana</b>; <b>Tansen</b>, pupil of <b>Swami Haridas</b>, sang Dhrupad at <b>Akbar's</b> court. Much later <b>V. N. Bhatkhande</b> sorted the ragas into <b>ten thaats</b>, and <b>V. D. Paluskar</b> opened a music school for ordinary people in <b>1901</b>.</p><p>In the south, <b>Carnatic</b> music stayed close to temples and devotion. <b>Purandara Dasa</b> is its father. Around 1800 three composers, all born in <b>Tiruvarur</b>, gave it its classic songs: <b>Tyagaraja</b>, <b>Muthuswami Dikshitar</b> and <b>Syama Sastri</b> — the <b>Trinity</b>.</p>", key:"Carnatic: father Purandara Dasa; Trinity Tyagaraja–Dikshitar–Syama Sastri. Hindustani: Amir Khusrau, Tansen (guru Swami Haridas), Bhatkhande (10 thaats), Paluskar (1901)."},
  {k:"table", title:"Who's who of classical music", head:["Known as / for","Person","Note"], rows: M4.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Hindustani vs Carnatic", head:["","Hindustani","Carnatic"], rows:[
    ["Region","North India","South India"],
    ["Parent scales","10 thaats (Bhatkhande)","72 melakartas (Venkatamakhin)"],
    ["Main vocal forms","Dhrupad, khayal, thumri, tarana","Kriti, varnam, tillana"],
    ["Main drums","Tabla, pakhawaj","Mridangam, ghatam, kanjira"],
    ["Other typical instruments","Sitar, sarod, sarangi, shehnai, santoor","Veena, violin, nadaswaram"],
    ["Influences","Persian and Sufi ideas at royal courts","Mostly temple and devotional"],
    ["Great names","Amir Khusrau, Tansen, Bhatkhande, Paluskar","Purandara Dasa, the Trinity, Swathi Thirunal"]
  ]},
  {k:"trick", h:"Trinity = <b>“TDS”</b> — <b>T</b>yagaraja (Telugu), <b>D</b>ikshitar (Sanskrit, the youngest), <b>S</b>yama Sastri (the eldest). All three were born in <b>Tiruvarur</b>, Tamil Nadu."},
  {k:"trap", h:"<b>Bhatkhande</b> and <b>Paluskar</b> are both called Vishnu and both worked for Hindustani music — Bhatkhande = <b>thaats</b>, Paluskar = <b>Gandharva Mahavidyalaya</b>. <b>Purandara Dasa</b> is the father of Carnatic music but is <b>not</b> part of the Trinity."}
], sum:["Purandara Dasa is the father of Carnatic music.","The Carnatic trinity: Tyagaraja, Muthuswami Dikshitar and Syama Sastri — all born in Tiruvarur.","Tansen sang at Akbar's court; his guru was Swami Haridas.","Amir Khusrau (Tuti-e-Hind) gave us qawwali and tarana.","Bhatkhande made the 10-thaat system; Paluskar founded the Gandharva Mahavidyalaya (1901)."]},

{id:"M5", heat:2, title:"Gharanas of Hindustani music", hi:"हिंदुस्तानी संगीत के घराने", blocks:[
  {k:"hot", h:"Asked as <b>“Pandit Jasraj / Bhimsen Joshi / Kishori Amonkar belonged to which gharana?”</b> Remember Kirana (Bhimsen Joshi, Gangubai Hangal), Mewati (Jasraj), Jaipur-Atrauli (Kishori Amonkar), Patiala (Bade Ghulam Ali Khan) and Gwalior (the oldest khayal gharana)."},
  {k:"story", h:"<p>A <b>gharana</b> ('household') is a family or school of music. Its style passes from guru to shishya, often from father to son, and carries the name of a town. The <b>Gwalior</b> gharana is the oldest khayal school. The <b>Kirana</b> gharana, from Kairana in Uttar Pradesh, gave us <b>Bhimsen Joshi</b> and <b>Gangubai Hangal</b>.</p><p><b>Kishori Amonkar</b> sang in the <b>Jaipur-Atrauli</b> style founded by Alladiya Khan; <b>Pandit Jasraj</b> led the <b>Mewati</b> gharana; <b>Bade Ghulam Ali Khan</b> was the star of <b>Patiala</b>. Instrumentalists have gharanas too: <b>Maihar</b> (Ravi Shankar), <b>Imdadkhani</b> (Vilayat Khan), and the tabla gharanas of <b>Punjab</b> and <b>Benares</b>.</p>", key:"Kirana — Bhimsen Joshi, Gangubai Hangal; Mewati — Jasraj; Jaipur-Atrauli — Kishori Amonkar; Patiala — Bade Ghulam Ali Khan; Gwalior — oldest."},
  {k:"table", title:"Musicians and their gharanas", head:["Musician","Gharana","Note"], rows: M5.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Bhim and Ganga live in Kirana”</b> (Bhimsen Joshi, Gangubai Hangal). <b>“Jas–Mew”</b>: Jasraj–Mewati. <b>“Kishori goes to Jaipur”</b>."},
  {k:"trap", h:"The <b>Kirana</b> gharana is named after <b>Kairana</b> in UP, though its stars came from Karnataka and Maharashtra. <b>Gwalior</b> is the oldest <b>khayal</b> gharana; Dhrupad is older still and is kept alive by the <b>Dagar</b> family."}
], sum:["A gharana is a family or school of music named after a town.","Kirana: Abdul Karim Khan (founder), Bhimsen Joshi, Gangubai Hangal, Prabha Atre.","Jaipur-Atrauli: Alladiya Khan (founder), Kishori Amonkar, Mallikarjun Mansur.","Mewati: Pandit Jasraj; Patiala: Bade Ghulam Ali Khan; Agra: Faiyaz Khan.","Gwalior is the oldest khayal gharana; Maihar is Allauddin Khan's school."]},

{id:"M6", heat:2, title:"Ragas, their times, and musical terms", hi:"राग, उनका समय और संगीत शब्दावली", blocks:[
  {k:"hot", h:"Asked: the <b>time or season</b> of a raga (Bhairav — morning, Yaman — evening, Malhar — rain, Deepak — fire), and the meaning of <b>terms</b> — raga, tala, alap, thaat, melakarta, shruti — and of forms like <b>Dhrupad, khayal, thumri, qawwali</b>."},
  {k:"story", h:"<p>A <b>raga</b> is not just a tune; it is a set of notes with rules and a mood. Hindustani tradition gives each raga a <b>time of day</b>: <b>Bhairav</b> greets the dawn, <b>Bhimpalasi</b> fills the afternoon, <b>Marwa</b> belongs to sunset, <b>Yaman</b> to the evening and <b>Darbari Kanada</b> to late night. Some belong to <b>seasons</b>: <b>Malhar</b> to the monsoon, <b>Basant</b> to spring.</p><p>Legends grew around them: <b>Tansen</b> is said to have lit lamps by singing <b>Raga Deepak</b> and brought rain with <b>Megh Malhar</b>. Rhythm is counted in a <b>tala</b> — a cycle of beats whose first beat is <b>sam</b>. A recital opens slowly with the <b>alap</b> and ends fast with the <b>jhala</b>.</p>", key:"Bhairav — dawn; Yaman — evening; Darbari — late night; Malhar — rain; Basant — spring; Deepak — fire (legend)."},
  {k:"table", title:"Ragas and their time", head:["Raga","Time / season","Note"], rows: M6R.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Musical terms and forms", head:["Term","Meaning","Note"], rows: M6T.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"The seven notes (sapta swara)", rows:[
    ["Sa","Shadja"],["Re","Rishabh"],["Ga","Gandhar"],["Ma","Madhyam"],["Pa","Pancham"],["Dha","Dhaivat"],["Ni","Nishad"]
  ]},
  {k:"trick", h:"A day of ragas: <b>“Bhairav wakes, Todi works, Bhimpalasi rests, Marwa sets, Yaman lights, Darbari sleeps.”</b> Seasons: <b>Malhar = monsoon</b>, <b>Basant = spring</b>."},
  {k:"trap", h:"<b>Thaat</b> = 10 parent scales (Hindustani); <b>melakarta</b> = 72 (Carnatic). <b>Tarana</b> is Hindustani; its Carnatic cousin is the <b>tillana</b>. <b>Raga Deepak</b> is linked with fire, <b>Malhar</b> with rain — don't swap them."}
], sum:["Each Hindustani raga has a time or season: Bhairav dawn, Yaman evening, Darbari late night.","Malhar ragas belong to the monsoon; Basant and Bahar to spring; Deepak to fire (legend).","Tala is the rhythm cycle; sam is its first beat; alap is the slow opening.","10 thaats in Hindustani music, 72 melakartas in Carnatic music; 22 shrutis in an octave.","Dhrupad is the oldest vocal form; khayal the most popular; qawwali and tarana are credited to Amir Khusrau."]}
);

pairQs("M4", M4, { q: t => `Who is this: ${t}?`, rq: a => `${a} is best known as:` });
pairQs("M5", M5, { q: t => `${t} belonged to which gharana?`, rq: a => `Which of these is linked with the ${a} gharana?`, extra: ["Lucknow","Delhi"] });
pairQs("M6", M6R, { q: t => `Raga ${t} is traditionally sung at / in:` });
pairQs("M6", M6T, { q: t => `In Indian music, '${t}' means:`, rq: a => `Which term means: ${a}?` });

QB.push(
["M4","Which of these is NOT one of the Carnatic trinity?",["Purandara Dasa","Tyagaraja","Muthuswami Dikshitar","Syama Sastri"],"Purandara Dasa is the father of Carnatic music, but came about 200 years earlier.","p"],
["M4","All three members of the Carnatic trinity were born in:",["Tiruvarur","Thanjavur","Madurai","Kanchipuram"],"In Tamil Nadu.",""],
["M4","Who among these is NOT linked with Carnatic music?",["V. N. Bhatkhande","Tyagaraja","Muthuswami Dikshitar","Syama Sastri"],"Bhatkhande worked on Hindustani music.","p|SSC JE · 2011"],
["M4","Tansen was a court musician of:",["Akbar","Jahangir","Shah Jahan","Aurangzeb"],"One of Akbar's navratnas.","p"],
["M4","Tansen is buried in:",["Gwalior","Agra","Fatehpur Sikri","Delhi"],"The Tansen Samaroh is held at his tomb every December.","p"],
["M4","Amir Khusrau was a court poet of which dynasty's sultans?",["Delhi Sultanate (Khalji and Tughlaq)","Mughal","Vijayanagara","Bahmani"],"He served several Delhi sultans, including Alauddin Khalji.",""],
["M4","Hindustani music has how many thaats in Bhatkhande's system?",["10","72","22","7"],"Carnatic music has 72 melakartas.","p"],
["M4","The Tyagaraja Aradhana festival is held every year at:",["Thiruvaiyaru","Tiruvarur","Madurai","Chennai"],"On the banks of the Kaveri, near Thanjavur.","p"],
["M4","V. D. Paluskar founded the Gandharva Mahavidyalaya in 1901 at:",["Lahore","Pune","Bombay","Gwalior"],"Later branches opened across India.",""],
["M5","Who founded the Kirana gharana?",["Abdul Karim Khan","Alladiya Khan","Faiyaz Khan","Amir Khan"],"",""],
["M5","Who founded the Jaipur-Atrauli gharana?",["Alladiya Khan","Abdul Karim Khan","Bade Ghulam Ali Khan","Rashid Khan"],"",""],
["M5","A 'gharana' in music means:",["A family or school with its own style","A type of drum","A rhythm cycle","A wedding song"],"Ghar = house.",""],
["M5","Which is the oldest khayal gharana?",["Gwalior","Kirana","Patiala","Mewati"],"","p"],
["M5","The Kirana gharana takes its name from Kairana, a town in:",["Uttar Pradesh","Karnataka","Rajasthan","Maharashtra"],"Near Shamli.",""],
["M5","Kishori Amonkar's mother and guru was:",["Mogubai Kurdikar","Gangubai Hangal","Girija Devi","Kesarbai Kerkar"],"",""],
["M6","Which raga is linked with the monsoon and rain?",["Malhar","Bhairav","Yaman","Deepak"],"Miyan ki Malhar is credited to Tansen.","p"],
["M6","According to legend, which raga could light lamps?",["Deepak","Malhar","Bhairav","Darbari Kanada"],"Tansen is said to have sung it at Akbar's court.","p"],
["M6","How many beats does Teentaal have?",["16","12","10","7"],"Divided 4+4+4+4.","p"],
["M6","How many melakarta ragas are there in Carnatic music?",["72","10","22","108"],"","p"],
["M6","How many shrutis are there in an octave in Indian music?",["22","12","7","72"],"",""]
);

LASTMOMENT.push(
{t:"Who's who", era:["mu"], rows:[["Father of Carnatic music","Purandara Dasa"],["Carnatic trinity","Tyagaraja, Dikshitar, Syama Sastri"],["Tansen's guru","Swami Haridas"],["Tuti-e-Hind","Amir Khusrau"],["10 thaats","Bhatkhande"],["Gandharva Mahavidyalaya 1901","Paluskar"],["Sangita Ratnakara","Sarngadeva"],["Natya Shastra","Bharata Muni"]]},
{t:"Gharanas", era:["mu"], rows:[["Bhimsen Joshi, Gangubai Hangal","Kirana"],["Pandit Jasraj","Mewati"],["Kishori Amonkar","Jaipur-Atrauli"],["Bade Ghulam Ali Khan","Patiala"],["Oldest khayal","Gwalior"],["Ravi Shankar","Maihar"]]},
{t:"Raga times", era:["mu"], rows:[["Bhairav","Dawn"],["Bhimpalasi","Afternoon"],["Marwa","Sunset"],["Yaman","Evening"],["Darbari Kanada","Late night"],["Malhar","Monsoon"],["Basant","Spring"],["Deepak","Fire (legend)"]]}
);
TILES.push(["10","Hindustani thaats","mu"],["72","Carnatic melakartas","mu"],["22","Shrutis in an octave","mu"],["16","Beats in Teentaal","mu"],["1901","Gandharva Mahavidyalaya","mu"]);

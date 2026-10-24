/* H2 — Cultural sites I: prehistoric, Harappan and Buddhist sites, and the three cave sites of Maharashtra. */
const H2S = [
  ["Rock Shelters of Bhimbetka","Madhya Pradesh","2003","Raisen district, in the Vindhya hills; Stone Age paintings; found in 1957 by V. S. Wakankar."],
  ["Dholavira: a Harappan City","Gujarat","2021","On Khadir Bet in the Rann of Kutch; great water reservoirs and a 'signboard' of Indus signs."],
  ["Buddhist Monuments at Sanchi","Madhya Pradesh","1989","Raisen district; the Great Stupa begun by Ashoka, with four carved gateways."],
  ["Mahabodhi Temple Complex, Bodh Gaya","Bihar","2002","Where the Buddha attained enlightenment; one of the earliest brick temples, of the Gupta age."],
  ["Nalanda Mahavihara","Bihar","2016","A monastic university founded under Kumaragupta I in the 5th century."],
  ["Ancient Buddhist Site of Sarnath","Uttar Pradesh","2026","Near Varanasi, where the Buddha gave his first sermon; Dhamek and Chaukhandi stupas, the Ashokan pillar."],
  ["Ajanta Caves","Maharashtra","1983","Buddhist only; famous for wall paintings; cut into a horseshoe bend of the Waghora."],
  ["Ellora Caves","Maharashtra","1983","Buddhist, Hindu and Jain caves side by side; the Kailasa temple (Cave 16)."],
  ["Elephanta Caves","Maharashtra","1987","On Gharapuri island in Mumbai harbour; the great three-headed Shiva (Sadashiva)."]
];

LESSONS.push(
{id:"H2", heat:3, title:"Cultural sites I: Buddhist and ancient sites", hi:"सांस्कृतिक स्थल I: बौद्ध और प्राचीन स्थल", blocks:[
  {k:"hot", h:"Most asked: <b>Ajanta vs Ellora vs Elephanta</b> (which faith, which king, which feature), <b>Bhimbetka</b> (rock paintings), <b>Dholavira</b> (the Harappan site, 2021), <b>Sanchi</b> and <b>Ashoka</b>, <b>Bodh Gaya</b> and <b>Nalanda</b> in Bihar, and the newest site, <b>Sarnath</b> (2026)."},
  {k:"story", h:"<p>Walk through Indian time in nine stops. First, the <b>rock shelters of Bhimbetka</b>, where Stone Age people painted hunters and animals on the walls more than ten thousand years ago. Then <b>Dholavira</b>, a Harappan city on an island in the Rann of Kutch, which stored rainwater in huge stone reservoirs.</p><p>Next come the places of the <b>Buddha</b>: <b>Bodh Gaya</b>, where he became enlightened under the Bodhi tree; <b>Sarnath</b>, where he gave his first sermon; and the stupas of <b>Sanchi</b>, begun by Ashoka. Later, <b>Nalanda</b> became a great university where students came from as far as China.</p><p>Last, the cave sites of Maharashtra: <b>Ajanta</b> with its paintings, <b>Ellora</b> where three faiths carved side by side, and <b>Elephanta</b> with its giant Shiva.</p>", key:"Bhimbetka and Sanchi — MP · Dholavira — Gujarat · Bodh Gaya and Nalanda — Bihar · Sarnath — UP · Ajanta, Ellora, Elephanta — Maharashtra."},
  {k:"table", title:"Ancient and Buddhist World Heritage sites", head:["Site","State","Year","Remember"], rows: H2S.map(r => ["<b>" + r[0] + "</b>", r[1], r[2], r[3]])},
  {k:"table", title:"Ajanta, Ellora and Elephanta compared", head:["","Ajanta","Ellora","Elephanta"], rows:[
    ["Faith","Buddhist only","Buddhist (Caves 1–12), Hindu (13–29), Jain (30–34)","Mainly Hindu (Shaiva), with two Buddhist caves"],
    ["Number of caves","About 30","34 main caves","7"],
    ["Age","2nd–1st century BCE, and a second phase in the 5th–6th century CE (under the Vakatakas)","About 600–1000 CE","About 5th–6th century CE"],
    ["Famous for","Paintings — the Padmapani, Jataka stories","Kailasa temple (Cave 16), cut from one rock under the Rashtrakuta king Krishna I","The Sadashiva — a 6-metre three-headed Shiva"],
    ["Where","Chhatrapati Sambhajinagar (Aurangabad) district, on the Waghora","Chhatrapati Sambhajinagar district","Gharapuri island, Mumbai harbour"],
    ["Note","Rediscovered in 1819 by a British officer, John Smith","Cave 10 (Vishvakarma) is a Buddhist chaitya hall","Named Elephanta by the Portuguese after a stone elephant there"]]},
  {k:"facts", title:"The Buddhist sites in detail", rows:[
    ["Sanchi","The Great Stupa (Stupa 1) was begun by <b>Ashoka</b> in brick; the Shungas enlarged it in stone, and its four carved gateways (<b>toranas</b>) came in the Satavahana period"],
    ["Bodh Gaya","The Mahabodhi temple stands beside the Bodhi tree and the <b>Vajrasana</b> (diamond throne); Ashoka built the first shrine, and the present brick temple dates from the 5th–6th century"],
    ["Nalanda","Founded under <b>Kumaragupta I</b>; the Chinese pilgrim <b>Xuanzang</b> studied here in Harsha's time; destroyed by <b>Bakhtiyar Khalji</b> about 1193. A new Nalanda University opened at Rajgir in 2014"],
    ["Sarnath","The Deer Park (Rishipatana) of the <b>first sermon</b>; the site includes the <b>Dhamek Stupa</b>, the <b>Chaukhandi Stupa</b>, the Dharmarajika Stupa, the Mulagandhakuti Vihara and the Ashokan pillar. Its <b>Lion Capital</b> is India's National Emblem"],
    ["Four great places","Lumbini (birth, in Nepal — a World Heritage site of Nepal), Bodh Gaya (enlightenment), Sarnath (first sermon), Kushinagar (death — not a World Heritage site)"]]},
  {k:"facts", title:"The two oldest sites", rows:[
    ["Bhimbetka","More than 700 rock shelters, about 400 of them painted, from the Stone Age onward; in the Vindhya hills south of Bhopal; the name is linked to Bhima of the Mahabharata"],
    ["Dholavira","One of the five largest Harappan cities; a city of three parts (citadel, middle town, lower town), built of stone; found by J. P. Joshi (1967–68) and excavated by R. S. Bisht from 1990"],
    ["Not on the list","<b>Lothal</b> (the Harappan dockyard), <b>Rakhigarhi</b> and <b>Kalibangan</b> are not World Heritage sites — Dholavira is India's only Harappan site on the list"]]},
  {k:"trick", h:"<b>Ajanta = Art</b> (paintings, Buddhist only); <b>Ellora = Everyone</b> (three faiths, and the enormous Kailasa); <b>Elephanta = Eshwara</b> (Shiva on an island). And <b>“Raisen holds two”</b>: Bhimbetka and Sanchi are both in Raisen district of Madhya Pradesh."},
  {k:"trap", h:"<b>Sarnath</b> is the first sermon, <b>Bodh Gaya</b> is enlightenment — do not swap them. Sarnath is in <b>Uttar Pradesh</b>, Bodh Gaya and Nalanda in <b>Bihar</b>. <b>Lothal</b> is not a World Heritage site; <b>Dholavira</b> is. The Ellora Kailasa is <b>rock-cut</b>; Elephanta's great image is the <b>Sadashiva</b>, often called the Trimurti."},
  {k:"link", h:"Stupa parts, chaityas and the other cave sites (Karla, Bhaja, Barabar, Udayagiri) are in the architecture lesson of <a href=\"study-art-culture.html\">Art &amp; Culture</a>."}
], sum:["Bhimbetka (2003) and Sanchi (1989) are both in Raisen district, Madhya Pradesh.","Dholavira (2021), on Khadir Bet in Kutch, is India's only Harappan World Heritage site.","Bodh Gaya (2002) and Nalanda (2016) are in Bihar; Sarnath (2026) is in Uttar Pradesh.","Ajanta: Buddhist, paintings. Ellora: Buddhist, Hindu and Jain; Kailasa temple of Krishna I. Elephanta: Shiva, on Gharapuri island.","Sanchi's Great Stupa was begun by Ashoka; its gateways are toranas.","Sarnath's Lion Capital is the National Emblem; the Dhamek Stupa marks the first sermon."]}
);

pairQs("H2", H2S.map(r => [r[0], r[1], r[3], ""]), { q: t => `Which state is home to the World Heritage site “${t}”?`, e: r => `${r[0]} is in ${r[1]}. ${r[2]}`,
  rq: a => `Which of these ancient or Buddhist World Heritage sites is in ${a}?`, re: r => `${r[0]} is in ${r[1]}. ${r[2]}`, extra: ["Odisha","Karnataka"] });
pairQs("H2", H2S.map(r => [r[0], r[2], r[3], ""]), { q: t => `In which year was “${t}” inscribed on the World Heritage list?`, e: r => `${r[0]} was inscribed in ${r[1]}. ${r[2]}`, extra: ["1993","2014"] });

QB.push(
["H2","Which cave site is entirely Buddhist and famous for its wall paintings?",["Ajanta","Ellora","Elephanta","Udayagiri and Khandagiri"],"Ajanta's caves are all Buddhist; its paintings show Jataka stories and figures such as the Padmapani.",""],
["H2","The caves at Ellora were made by followers of which faiths?",["Buddhist, Hindu and Jain","Buddhist only","Hindu only","Hindu and Jain only"],"Caves 1–12 are Buddhist, 13–29 Hindu and 30–34 Jain.",""],
["H2","The Kailasa temple at Ellora was carved under which Rashtrakuta king?",["Krishna I","Amoghavarsha I","Dantidurga","Govinda III"],"Krishna I (8th century) had the Kailasa temple cut down from the top of a single rock.",""],
["H2","Ajanta's caves are cut into a horseshoe-shaped gorge of which river?",["Waghora","Godavari","Tapti","Bhima"],"The caves curve round a bend of the small Waghora river.",""],
["H2","The Elephanta Caves are on which island?",["Gharapuri","Salsette","Khanderi","Divar"],"Elephanta is the Portuguese name for Gharapuri island in Mumbai harbour.",""],
["H2","The most famous sculpture of the Elephanta Caves shows:",["A three-headed Shiva (Sadashiva)","The Buddha giving his first sermon","Vishnu lying on Sheshnaga","Mahavira in meditation"],"The 6-metre Sadashiva, often called the Trimurti, is the centrepiece of the main cave.",""],
["H2","Who brought the Bhimbetka rock shelters to notice as an archaeological site in 1957?",["V. S. Wakankar","R. D. Banerji","Daya Ram Sahni","Alexander Cunningham"],"V. S. Wakankar saw the rocks from a train and found the painted shelters.",""],
["H2","Bhimbetka and Sanchi are both in which district of Madhya Pradesh?",["Raisen","Sehore","Vidisha","Hoshangabad"],"Both World Heritage sites lie in Raisen district, not far from Bhopal.",""],
["H2","Dholavira stands on which island of the Rann of Kutch?",["Khadir Bet","Bet Dwarka","Piram","Diu"],"Dholavira is on Khadir Bet, an island of the Great Rann of Kutch.",""],
["H2","Which Harappan site in India is on the World Heritage list?",["Dholavira","Lothal","Rakhigarhi","Kalibangan"],"Dholavira was inscribed in 2021; Lothal, Rakhigarhi and Kalibangan are not on the list.",""],
["H2","Who began the Great Stupa at Sanchi?",["Ashoka","Kanishka","Pushyamitra Shunga","Harsha"],"Ashoka built the first brick stupa; the Shungas later enlarged it in stone.",""],
["H2","The four carved gateways of the Sanchi stupa are called:",["Toranas","Gopurams","Harmikas","Chhatris"],"A torana is a carved gateway; the harmika is the railing on top of the dome.",""],
["H2","The Mahabodhi temple at Bodh Gaya marks the place where the Buddha:",["Attained enlightenment","Gave his first sermon","Was born","Attained mahaparinirvana"],"He was enlightened under the Bodhi tree at Bodh Gaya; the first sermon was at Sarnath.",""],
["H2","Nalanda Mahavihara was founded in the 5th century under which Gupta ruler?",["Kumaragupta I","Chandragupta I","Samudragupta","Skandagupta"],"Kumaragupta I is named in Nalanda's own seals as its founder.",""],
["H2","Which Chinese pilgrim, who came in Harsha's reign, studied at Nalanda?",["Xuanzang","Faxian","Song Yun","Ma Huan"],"Xuanzang studied at Nalanda in the 7th century; Faxian came two centuries earlier.",""],
["H2","Nalanda was destroyed in the late 12th century by:",["Bakhtiyar Khalji","Mahmud of Ghazni","Muhammad Ghori","Alauddin Khalji"],"Bakhtiyar Khalji's raids into Bihar about 1193 ended the old university.",""],
["H2","Sarnath is the place where the Buddha:",["Gave his first sermon","Attained enlightenment","Was born","Died"],"At the Deer Park of Sarnath he 'set the wheel of the law in motion' — the first sermon.",""],
["H2","Which of these is part of the Sarnath World Heritage site?",["Dhamek Stupa","Great Stupa of Sanchi","Vajrasana","Ramabhar Stupa"],"The Dhamek Stupa is at Sarnath. The Vajrasana is at Bodh Gaya and the Ramabhar Stupa at Kushinagar.",""],
["H2","India's National Emblem is taken from the Lion Capital found at:",["Sarnath","Sanchi","Lauriya Nandangarh","Rampurva"],"The Lion Capital of Ashoka's pillar at Sarnath was adopted as the National Emblem on 26 January 1950.",""],
);
LASTMOMENT.push({t:"Ancient and Buddhist sites", era:["hm"], rows:[["Bhimbetka","MP, 2003 — rock paintings"],["Sanchi","MP, 1989 — Ashoka's stupa"],["Dholavira","Gujarat, 2021 — Harappan"],["Bodh Gaya","Bihar, 2002 — enlightenment"],["Nalanda","Bihar, 2016"],["Sarnath","UP, 2026 — first sermon"],["Ajanta · Ellora · Elephanta","Maharashtra — 1983, 1983, 1987"]]});

/* T4: tribes of the North-East. T5: tribes of the south and the islands. */
const T4A = [
  ["Angami","Nagaland","Kohima district; terraced wet-rice fields; Khonoma is called India's first green village."],
  ["Ao","Nagaland","Mokokchung district; the first Naga tribe to take up Christianity (1872); Moatsu festival."],
  ["Konyak","Nagaland","Mon district; tattooed former head-hunters ruled by chiefs called Angh."],
  ["Sumi (Sema)","Nagaland","Zunheboto district; Tuluni and Ahuna festivals."],
  ["Lotha","Nagaland","Wokha district; Tokhu Emong festival."],
  ["Chakhesang","Nagaland","Phek district; the name joins Chakhru, Kheza and Sangtam."],
  ["Khasi","Meghalaya","Matrilineal — the youngest daughter keeps the family home; their language is Austro-Asiatic."],
  ["Garo (A·chik)","Meghalaya","Matrilineal; the Wangala harvest festival of the hundred drums."],
  ["Jaintia (Pnar)","Meghalaya","Matrilineal; the Behdienkhlam festival at Jowai."],
  ["Mizo","Mizoram","Mizoram's main people; Chapchar Kut and the Cheraw bamboo dance."],
  ["Bodo","Assam","The largest plains tribe of Assam; the Bathou faith; the Bodoland Territorial Region."],
  ["Mishing","Assam","A riverside people of the Brahmaputra and Majuli who live in stilt houses."],
  ["Karbi","Assam","The Karbi Anglong hills; their own autonomous council."],
  ["Dimasa","Assam","The Dima Hasao hills; once ruled the Dimasa kingdom."],
  ["Apatani","Arunachal Pradesh","The Ziro valley; paddy-cum-fish farming; the women's old nose plugs and facial tattoos."],
  ["Nyishi","Arunachal Pradesh","The largest tribe of Arunachal; the hornbill-beak head-dress; Nyokum festival."],
  ["Adi","Arunachal Pradesh","The Siang valley; Solung festival and the Ponung dance."],
  ["Monpa","Arunachal Pradesh","Tawang and West Kameng; Tibetan Buddhists — Losar and Torgya."],
  ["Galo","Arunachal Pradesh","West Siang; the Mopin festival."],
  ["Idu Mishmi","Arunachal Pradesh","The Dibang valley; the Reh festival."],
  ["Bhutia","Sikkim","Of Tibetan origin; Buddhists; Losoong is their new year."],
  ["Lepcha","Sikkim","Sikkim's earliest people; the Dzongu reserve in North Sikkim is kept for them."],
  ["Limbu","Sikkim","Also called Tsong; they have their own Limbu (Sirijonga) script."],
  ["Tangkhul Naga","Manipur","Ukhrul district, home of the Shirui lily; the Luira Phanit festival."],
  ["Tripuri","Tripura","The largest tribe of Tripura; they speak Kokborok."],
  ["Jamatia","Tripura","A Kokborok-speaking tribe with its own traditional council, the Hoda."]
];
const T5A = [
  ["Great Andamanese","Strait Island","Once ten tribes across Great Andaman; now about 50 people, resettled on Strait Island. Negrito."],
  ["Jarawa","The western forests of South and Middle Andaman","Hunter-gatherers whose reserve is crossed by the Andaman Trunk Road. Negrito."],
  ["Onge","Dugong Creek, Little Andaman","Semi-nomadic hunter-gatherers, about a hundred people. Negrito."],
  ["Sentinelese","North Sentinel Island","They reject all contact; going within 5 nautical miles of the island is banned. Negrito."],
  ["Shompen","The inner forests of Great Nicobar","Hunter-gatherers of Mongoloid stock — the only PVTG of the Nicobar group."],
  ["Nicobarese","Car Nicobar and the other Nicobar Islands","The largest island tribe; Mongoloid; coconuts, pigs and canoes — not a PVTG."]
];
const T5B = [
  ["Toda","Buffalo herding and barrel-roofed huts","Nilgiri Hills, Tamil Nadu — a PVTG; their red-and-black Toda embroidery has a GI tag."],
  ["Kota","Pottery, smithy and music for the Nilgiri villages","Nilgiri Hills, Tamil Nadu — a PVTG of artisans."],
  ["Irula","Catching snakes and rats","Tamil Nadu — a PVTG; their snake catchers' co-operative (1978) supplies venom for antivenom."],
  ["Jenu Kuruba","Gathering wild honey","Karnataka (Nagarhole and Kodagu forests) — a PVTG; jenu means honey in Kannada."],
  ["Chenchu","Hunting and gathering in the Nallamala forest","Andhra Pradesh and Telangana, around Srisailam — a PVTG."],
  ["Soliga","Winning forest rights inside a tiger reserve","The Biligiri Rangana (BR) Hills, Karnataka."],
  ["Kani","Sharing the arogyapacha herb that became the medicine Jeevani","Kerala — an early case of a tribe sharing the profit from its knowledge."],
  ["Cholanaikkan","Living in the rock shelters of the Nilambur forest","Kerala — one of the last hunter-gatherer PVTGs of South India."],
  ["Koya","The Medaram Sammakka–Saralamma Jatara","The Godavari valley — Telangana, Andhra Pradesh, Chhattisgarh."],
  ["Lambada (Banjara)","Mirror-work embroidery and the Teej festival","A former trading people, now an ST in Telangana and Andhra Pradesh."]
];

LESSONS.push(
{id:"T4", heat:3, title:"Tribes of the North-East", hi:"पूर्वोत्तर भारत की जनजातियाँ", blocks:[
  {k:"hot", h:"Most asked: the <b>Naga tribes</b> and their districts (Angami, Ao, Konyak, Sumi, Lotha), the matrilineal <b>Khasis and Garos</b> of Meghalaya, the <b>Mizos</b>, the <b>Bodos</b> of Assam, the <b>Apatanis</b> of Ziro, the <b>Nyishis</b> (largest in Arunachal), the <b>Adis</b>, the <b>Monpas</b> of Tawang, and the <b>Bhutias and Lepchas</b> of Sikkim."},
  {k:"story", h:"<p>The North-East holds more than a hundred tribes, and most of them speak <b>Tibeto-Burman</b> languages. In <b>Nagaland</b> each district is home to one major Naga tribe: the <b>Angamis</b> of Kohima, the <b>Aos</b> of Mokokchung, the tattooed <b>Konyaks</b> of Mon, the <b>Sumis</b>, the <b>Lothas</b> and many more. They meet every December at the <b>Hornbill Festival</b>.</p><p><b>Meghalaya</b> is different. Its three peoples — the <b>Khasis</b>, the <b>Jaintias (Pnar)</b> and the <b>Garos</b> — are <b>matrilineal</b>: children take the mother's clan name, and among the Khasis the youngest daughter keeps the family home. The Khasi tongue is <b>Austro-Asiatic</b>, a cousin of Santhali far to the west.</p><p>In <b>Arunachal Pradesh</b> the <b>Nyishis</b> are the largest tribe; the <b>Apatanis</b> farm fish in their rice fields in the <b>Ziro valley</b>; the <b>Adis</b> live along the Siang; and the Buddhist <b>Monpas</b> keep the great monastery of <b>Tawang</b>. Assam's largest plains tribe is the <b>Bodo</b>; Mizoram's people are the <b>Mizos</b>; and in Sikkim the <b>Lepchas</b>, the oldest settlers, live beside the <b>Bhutias</b> and <b>Limbus</b>.</p>", key:"Nagaland: a tribe per district (Angami–Kohima, Ao–Mokokchung, Konyak–Mon); Meghalaya: Khasi, Jaintia, Garo — matrilineal; Arunachal: Nyishi largest, Apatani of Ziro; Assam: Bodo; Sikkim: Lepcha, Bhutia, Limbu."},
  {k:"table", title:"Tribes of the North-East and their states", head:["Tribe","State","Remember"], rows: T4A.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"More to know", rows:[
    ["Matrilineal tribes","Khasi, Jaintia (Pnar) and Garo of Meghalaya — descent through the mother; the Khasi youngest daughter is the Ka Khadduh, keeper of the family home"],
    ["Kuki","The hills of Manipur, and parts of Mizoram, Nagaland and Assam; Chavang Kut harvest festival (1 November); the Anglo-Kuki War of 1917–19"],
    ["Meitei","The valley people of Manipur — not a Scheduled Tribe; their language, Manipuri (Meiteilon), is in the Eighth Schedule"],
    ["Reang (Bru)","Tripura's only PVTG; the Hojagiri dance; Bru families who fled Mizoram were settled in Tripura under a 2020 agreement"],
    ["Chakma","Buddhists who came from the Chittagong Hill Tracts; their own autonomous council in Mizoram; also in Tripura and Arunachal"],
    ["Bodo","Bodofa Upendranath Brahma led their movement; the 2020 Bodo Accord renamed the area the Bodoland Territorial Region"],
    ["Apatani","The Apatani cultural landscape of Ziro is on India's tentative list for World Heritage (2014)"],
    ["Language families","Most North-East tribes speak Tibeto-Burman languages (Naga, Mizo, Garo, Bodo); Khasi and Pnar are Austro-Asiatic"]
  ]},
  {k:"link", h:"Bihu, Cheraw, Hojagiri, Nongkrem and other dances are in the <b>Folk Dances</b> app (lessons on Assam, Meghalaya–Mizoram–Tripura, Manipur–Nagaland–Sikkim, and Arunachal). Tribal festivals of the North-East are in T6."},
  {k:"trick", h:"Naga tribes by district — <b>“KA-MA-MK”</b>: <b>K</b>ohima–<b>A</b>ngami, <b>M</b>okokchung–<b>A</b>o, <b>M</b>on–<b>K</b>onyak.<br>Meghalaya from west to east — <b>“G-K-J”</b>: the <b>G</b>aro Hills, the <b>K</b>hasi Hills, the <b>J</b>aintia Hills."},
  {k:"trap", h:"<b>Bhutia</b> (Sikkim) is not <b>Bhotia</b> (Uttarakhand). The <b>Khasi</b> language is <b>Austro-Asiatic</b>, but <b>Garo</b> is <b>Tibeto-Burman</b> — both are matrilineal. The <b>Meiteis</b> of the Manipur valley are <b>not</b> a Scheduled Tribe. The largest tribe of Arunachal is the <b>Nyishi</b>, not the Adi."}
], sum:["Nagaland: Angami (Kohima), Ao (Mokokchung), Konyak (Mon), Sumi (Zunheboto), Lotha (Wokha), Chakhesang (Phek).","Meghalaya: Khasi, Jaintia (Pnar), Garo — matrilineal; Khasi is Austro-Asiatic.","Arunachal: Nyishi (largest), Apatani (Ziro), Adi (Siang), Monpa (Tawang), Galo, Idu Mishmi.","Assam: Bodo (largest plains tribe), Mishing, Karbi, Dimasa. Mizoram: Mizo. Tripura: Tripuri (largest), Reang (PVTG).","Sikkim: Lepcha (earliest, Dzongu), Bhutia, Limbu. Manipur: Tangkhul Naga, Kuki; Meiteis are not ST."]},

{id:"T5", heat:2, title:"Tribes of the south and the islands", hi:"दक्षिण भारत और द्वीपों की जनजातियाँ", blocks:[
  {k:"hot", h:"Most asked: the <b>Todas</b> of the Nilgiris, the <b>Irulas</b>, <b>Chenchus</b> and <b>Soligas</b>, and above all the <b>Andaman and Nicobar</b> tribes — <b>Jarawa, Onge, Sentinelese, Great Andamanese, Shompen</b> and <b>Nicobarese</b>: where each lives, which are Negrito and which Mongoloid, and which are PVTGs."},
  {k:"story", h:"<p>The <b>Nilgiri Hills</b> are a tribal world in miniature. The <b>Todas</b> herd sacred buffaloes and live in barrel-roofed huts; the <b>Kotas</b> were their potters, smiths and musicians; the <b>Kurumbas</b> gathered from the forest; the <b>Irulas</b> are famous snake catchers. On the plains to the east, the <b>Chenchus</b> still hunt and gather in the <b>Nallamala</b> forest, and in Karnataka the <b>Soligas</b> of the BR Hills and the honey-gathering <b>Jenu Kurubas</b> live inside today's tiger reserves.</p><p>Far out in the Bay of Bengal live India's most isolated people. On the Andaman Islands are four <b>Negrito</b> groups: the <b>Great Andamanese</b> (now a small group on Strait Island), the <b>Jarawas</b>, the <b>Onges</b> of Little Andaman and the <b>Sentinelese</b>, who allow no visitors at all. In the Nicobars live two <b>Mongoloid</b> peoples: the forest-dwelling <b>Shompens</b> of Great Nicobar and the <b>Nicobarese</b>, the largest island tribe. Five of these six — all but the Nicobarese — are PVTGs.</p>", key:"Nilgiris: Toda (buffaloes), Kota (artisans), Irula (snakes); Chenchu (Nallamala); Soliga (BR Hills); Andaman — Negrito: Great Andamanese, Jarawa, Onge, Sentinelese; Nicobar — Mongoloid: Shompen, Nicobarese."},
  {k:"table", title:"The island tribes", head:["Tribe","Where they live","Remember"], rows: T5A.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Tribes of the south and what they are known for", head:["Tribe","Known for","Where"], rows: T5B.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"More to know", rows:[
    ["Negrito and Mongoloid","Negrito: Great Andamanese, Jarawa, Onge, Sentinelese (Andaman). Mongoloid: Shompen and Nicobarese (Nicobar)"],
    ["A&N PVTGs","All the island tribes except the Nicobarese — five in all"],
    ["Tamil Nadu PVTGs","Toda, Kota, Kurumba, Irula, Paniya, Kattunayakan — six, mostly in the Nilgiris"],
    ["Kerala PVTGs","Cholanaikkan, Kadar, Kattunayakan, Koraga, Kurumba"],
    ["Karnataka PVTGs","Jenu Kuruba and Koraga"],
    ["Badaga","The largest community of the Nilgiris — but not a Scheduled Tribe"],
    ["Bo language","A Great Andamanese tongue; its last speaker, Boa Sr, died in 2010"],
    ["Lakshadweep","About 95% of its people are Scheduled Tribes — the highest share anywhere"],
    ["Irula snake catchers","Two Irulas, Masi Sadaiyan and Vadivel Gopal, received the Padma Shri in 2023"]
  ]},
  {k:"trick", h:"Andaman's four Negritos — <b>“GOJS”</b>: <b>G</b>reat Andamanese, <b>O</b>nge, <b>J</b>arawa, <b>S</b>entinelese. Nicobar's two Mongoloids — <b>“S-N”</b>: <b>S</b>hompen, <b>N</b>icobarese.<br>Nilgiri trio — <b>“Toda Tends, Kota Crafts, Irula Catches”</b>."},
  {k:"trap", h:"The <b>Nicobarese</b> are the largest island tribe but are <b>not</b> a PVTG. The <b>Onges</b> live on <b>Little</b> Andaman, the <b>Shompens</b> on <b>Great Nicobar</b>. The <b>Badagas</b> of the Nilgiris are <b>not</b> STs. The <b>Chenchus</b> live in both <b>Andhra Pradesh and Telangana</b> — the Nallamala forest spans the border."}
], sum:["Nilgiris: Toda (buffaloes, barrel huts, embroidery), Kota (artisans), Kurumba, Irula (snake catchers) — all PVTGs.","Chenchu: Nallamala (AP–Telangana); Soliga: BR Hills (Karnataka); Jenu Kuruba: honey; Kani: Jeevani; Koya: Medaram.","Andaman (Negrito): Great Andamanese (Strait Island), Jarawa (ATR forests), Onge (Little Andaman), Sentinelese (North Sentinel).","Nicobar (Mongoloid): Shompen (Great Nicobar, PVTG), Nicobarese (Car Nicobar, not a PVTG).","Lakshadweep is about 95% ST; Badagas are not ST."]}
);

pairQs("T4", T4A.filter(r => !["Jamatia","Chakhesang","Dimasa","Galo"].includes(r[0])), { q: t => `The ${t} tribe belongs mainly to which state?` });
pairQs("T5", T5A, { q: t => `Where do the ${t} live?`, rq: a => `Which tribe lives here: ${a}?` });
pairQs("T5", T5B, { q: t => `The ${t} tribe is best known for:` });

QB.push(
["T4","Khonoma, often called India's first green village, belongs to which Naga tribe?",["Angami","Ao","Konyak","Sumi"],"Khonoma near Kohima is an Angami village that gave up hunting to protect its forests.",""],
["T4","The Konyak Nagas, once famous as head-hunters, live mainly in which district?",["Mon","Kohima","Mokokchung","Wokha"],"Mon district is the Konyak land; their chiefs are called Angh.",""],
["T4","Which Naga tribe was the first to take up Christianity, in 1872?",["Ao","Angami","Lotha","Konyak"],"American Baptist missionaries reached the Ao village of Molungyimsen in 1872.",""],
["T4","Which pair of tribe and district of Nagaland is correct?",["Lotha — Wokha","Ao — Kohima","Konyak — Zunheboto","Angami — Mon"],"Lothas live in Wokha; the Aos in Mokokchung, the Konyaks in Mon and the Angamis in Kohima.",""],
["T4","Among the Khasis, who traditionally inherits the family home?",["The youngest daughter","The eldest son","The eldest daughter","The youngest son"],"The youngest daughter, the Ka Khadduh, keeps the ancestral house and looks after the parents.",""],
["T4","Which of these tribes is matrilineal?",["Garo","Mizo","Angami","Bodo"],"The Garos, like the Khasis and Jaintias of Meghalaya, trace descent through the mother.",""],
["T4","The Khasi language belongs to which family?",["Austro-Asiatic","Tibeto-Burman","Indo-Aryan","Dravidian"],"Khasi is a Mon-Khmer (Austro-Asiatic) language, related to Santhali and Mundari.",""],
["T4","The Garo language belongs to which family?",["Tibeto-Burman","Austro-Asiatic","Dravidian","Indo-Aryan"],"Garo is Tibeto-Burman, related to Bodo — even though the Garos live next to the Austro-Asiatic-speaking Khasis.",""],
["T4","Which is the largest tribe of Arunachal Pradesh?",["Nyishi","Adi","Apatani","Monpa"],"The Nyishis are the most numerous; the Adis and Galos come next.",""],
["T4","The Apatanis live in which valley of Arunachal Pradesh?",["Ziro","Tawang","Siang","Dibang"],"The Ziro valley is in Lower Subansiri district; their cultural landscape is on India's World Heritage tentative list.",""],
["T4","Apatani farmers are known for:",["Raising fish in their wet-rice fields","Terrace tea gardens","Jhum cultivation of millet only","Growing saffron"],"Apatani paddy-cum-fish farming in the Ziro valley is a model of sustainable agriculture.",""],
["T4","Apatani women of the older generation are known for:",["Nose plugs and facial tattoos","Neck rings","Bison-horn head-dresses","Shaven heads"],"The large nose plugs and facial tattoos were given up from the 1970s.",""],
["T4","The Nyishi men's traditional head-dress carries the beak of which bird?",["Hornbill","Peacock","Eagle","Pheasant"],"The cane cap, the bopia, carries a hornbill beak; fibre copies are now used to protect the bird.",""],
["T4","The Monpas of Arunachal Pradesh follow which religion?",["Buddhism","Christianity","Donyi-Polo","Vaishnavism"],"The Monpas of Tawang and West Kameng are Tibetan Buddhists; Tawang monastery is the largest in India.",""],
["T4","The Adis live mainly along which river valley?",["Siang","Lohit","Kameng","Subansiri"],"The Adis live along the Siang, as the Brahmaputra is called in Arunachal.",""],
["T4","Which is the largest plains tribe of Assam?",["Bodo","Karbi","Mishing","Dimasa"],"The Bodos are Assam's largest tribe; the Mishings come second.",""],
["T4","The Bathou faith, with the sijou plant at its altar, is followed by which tribe?",["Bodo","Mizo","Khasi","Garo"],"Bathou is the traditional faith of the Bodos; the sijou (a euphorbia) is its symbol.",""],
["T4","The Mishings of Assam are known for living:",["In stilt houses along the Brahmaputra","In tree houses","In rock shelters","In houseboats"],"Mishing chang ghars stand on stilts above the floods of the Brahmaputra and Majuli.",""],
["T4","Which Sikkim tribe is regarded as the earliest inhabitant of the state?",["Lepcha","Bhutia","Limbu","Tamang"],"The Lepchas call themselves Rongkup; the Dzongu area of North Sikkim is reserved for them.",""],
["T4","Dzongu in North Sikkim is a reserve set aside for which people?",["Lepcha","Bhutia","Limbu","Sherpa"],"Only Lepchas may own land in Dzongu.",""],
["T4","Which is the only PVTG of Tripura?",["Reang (Bru)","Tripuri","Jamatia","Chakma"],"The Reangs, or Brus, are Tripura's only PVTG.",""],
["T4","Kokborok is the language of which people?",["Tripuri","Mizo","Khasi","Lepcha"],"Kokborok, a Tibeto-Burman language, is spoken by the Tripuris and other tribes of Tripura and is an official language there.",""],
["T4","The Meiteis of the Manipur valley are:",["Not a Scheduled Tribe","A PVTG","A Sixth Schedule tribe","A Fifth Schedule tribe"],"The Meiteis are not STs; the hill peoples of Manipur — Naga and Kuki groups — are.",""],
["T4","Chavang Kut, a harvest festival on 1 November, is celebrated by which people?",["Kuki","Mizo","Bodo","Adi"],"Chavang Kut is the Kuki harvest festival of Manipur.",""],
["T4","Most tribes of the North-East speak languages of which family?",["Tibeto-Burman","Austro-Asiatic","Dravidian","Indo-Aryan"],"Naga, Mizo, Garo, Bodo, Kokborok and many others are Tibeto-Burman; Khasi and Pnar are the main Austro-Asiatic exceptions.",""],
["T4","Upendranath Brahma, called “Bodofa”, led the movement of which people?",["Bodo","Karbi","Mishing","Dimasa"],"Bodofa (father of the Bodos) led the Bodo movement in the 1980s.",""],

["T5","The Todas of the Nilgiris are traditionally:",["Buffalo herders","Snake catchers","Honey gatherers","Fishermen"],"Todas keep sacred buffaloes; their dairies are their temples.",""],
["T5","Which Nilgiri people were the traditional potters, smiths and musicians for the other hill tribes?",["Kota","Toda","Badaga","Irula"],"The Kotas made pots, tools and music for the Todas and Badagas.",""],
["T5","Which community, the largest in the Nilgiris, is NOT a Scheduled Tribe?",["Badaga","Toda","Kota","Kurumba"],"The Badagas are farmers who came from Karnataka; they are not on the ST list.",""],
["T5","Two snake catchers of which tribe received the Padma Shri in 2023?",["Irula","Toda","Chenchu","Soliga"],"Masi Sadaiyan and Vadivel Gopal, Irulas of Tamil Nadu, were honoured for their work with snakes and antivenom.",""],
["T5","The Chenchus live in which forest?",["Nallamala","Nilgiri","Wayanad","Simlipal"],"The Nallamala hills around Srisailam span Andhra Pradesh and Telangana.",""],
["T5","The Soligas live in the Biligiri Rangana Hills of which state?",["Karnataka","Tamil Nadu","Kerala","Andhra Pradesh"],"The BR Hills (Chamarajanagar district) are now a tiger reserve.",""],
["T5","The Jenu Kurubas of Karnataka take their name from their work as:",["Honey gatherers","Cattle herders","Basket weavers","Fishermen"],"Jenu means honey in Kannada.",""],
["T5","The Cholanaikkans, who live in rock shelters, are a PVTG of which state?",["Kerala","Karnataka","Tamil Nadu","Andhra Pradesh"],"They live in the Nilambur forests of Malappuram district, Kerala.",""],
["T5","Which tribe of Kerala shared its knowledge of the arogyapacha plant, which became the tonic Jeevani?",["Kani","Kurichiya","Paniya","Kadar"],"The Kanis received a share of the fee — an early example of benefit sharing.",""],
["T5","Which of these island tribes is NOT a PVTG?",["Nicobarese","Shompen","Onge","Jarawa"],"The Nicobarese are the largest island tribe and are not a PVTG.",""],
["T5","Which two island tribes are of Mongoloid stock?",["Shompen and Nicobarese","Jarawa and Onge","Onge and Sentinelese","Great Andamanese and Jarawa"],"The Andaman tribes are Negrito; the Nicobar tribes are Mongoloid.",""],
["T5","Which of these tribes is of Negrito stock?",["Onge","Shompen","Nicobarese","Lepcha"],"The Onge of Little Andaman, like the Jarawa, Sentinelese and Great Andamanese, are Negrito.",""],
["T5","The reserve of which tribe is crossed by the Andaman Trunk Road?",["Jarawa","Onge","Shompen","Sentinelese"],"The road through the Jarawa reserve has long been criticised for exposing the tribe to outsiders.",""],
["T5","Which island tribe rejects all contact with outsiders?",["Sentinelese","Great Andamanese","Nicobarese","Onge"],"The Sentinelese of North Sentinel Island have always resisted visitors; the island is closed to outsiders.",""],
["T5","The Shompens, a PVTG, live on which island?",["Great Nicobar","Car Nicobar","Little Andaman","Strait Island"],"They live in the inner forests of Great Nicobar, where a large port-and-city project is planned.",""],
["T5","The Bo language, whose last speaker died in 2010, belonged to which people?",["Great Andamanese","Onge","Jarawa","Nicobarese"],"Bo was one of the Great Andamanese languages; Boa Sr was its last speaker.",""],
["T5","The Onges live on which island?",["Little Andaman","Great Nicobar","North Sentinel","Havelock"],"Most Onges live at Dugong Creek on Little Andaman.",""],
["T5","In which UT are nearly all the people Scheduled Tribes?",["Lakshadweep","Andaman and Nicobar Islands","Ladakh","Puducherry"],"About 95% of Lakshadweep's islanders are STs.",""],
["T5","How many PVTGs does Tamil Nadu have?",["Six","Two","Thirteen","Four"],"Toda, Kota, Kurumba, Irula, Paniya and Kattunayakan.",""],
["T5","The Koraga and the Jenu Kuruba are the PVTGs of which state?",["Karnataka","Telangana","Goa","Tamil Nadu"],"The Koragas live mainly in coastal Karnataka (and Kasaragod, Kerala); the Jenu Kurubas in its southern forests.",""]
);

LASTMOMENT.push(
{t:"North-East tribes", era:["tl"], rows:[["Nagaland","Angami, Ao, Konyak, Sumi, Lotha"],["Meghalaya","Khasi, Jaintia, Garo — matrilineal"],["Arunachal","Nyishi (largest), Apatani (Ziro), Adi, Monpa"],["Assam","Bodo, Mishing, Karbi"],["Sikkim","Lepcha, Bhutia, Limbu"],["Tripura","Tripuri; Reang (PVTG)"]]},
{t:"South and islands", era:["tl"], rows:[["Nilgiris","Toda, Kota, Kurumba, Irula"],["Nallamala","Chenchu"],["BR Hills","Soliga"],["Andaman (Negrito)","Great Andamanese, Jarawa, Onge, Sentinelese"],["Nicobar (Mongoloid)","Shompen, Nicobarese"],["Not PVTG","Nicobarese"]]}
);
TILES.push(["5","PVTGs of the A&N Islands","tl"],["6","PVTGs of Tamil Nadu","tl"]);

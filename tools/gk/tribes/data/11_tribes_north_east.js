/* T2: tribes of the north, west and centre. T3: tribes of the east (Jharkhand, Odisha, West Bengal, Bihar).
   The first table of each lesson lists only tribes with one clear home, so the questions built from it (and the Lab deck)
   never have a second right answer. Tribes spread over many states are in the second table. */
const T2A = [
  ["Gaddi","Himachal Pradesh","Shepherds of the Dhauladhar range; Bharmour in Chamba is their homeland. They move their flocks up to high pastures in summer and down in winter."],
  ["Kinnaura","Himachal Pradesh","The people of Kinnaur on the Sutlej, near the Tibet border."],
  ["Lahaula","Himachal Pradesh","The people of the Lahaul valley beyond the Rohtang Pass."],
  ["Bakarwal","Jammu and Kashmir","Nomadic goat and sheep herders (Gujjar-Bakarwal) who cross the Pir Panjal with the seasons."],
  ["Changpa","Ladakh","Nomads of the high Changthang plateau who rear the goats that give pashmina wool."],
  ["Brokpa","Ladakh","Of the Dah-Hanu villages on the Indus; they speak Brokskat, a Dardic language."],
  ["Jaunsari","Uttarakhand","Of Jaunsar-Bawar in Dehradun district; known for the old custom of polyandry."],
  ["Raji (Ban Rawat)","Uttarakhand","A PVTG of Pithoragarh district — once forest-dwelling hunter-gatherers."],
  ["Mina","Rajasthan","The largest tribe of Rajasthan, in the east of the state (Jaipur, Dausa, Sawai Madhopur)."],
  ["Rathwa","Gujarat","Of Chhota Udepur; they paint the ritual Pithora wall paintings."],
  ["Kotwalia","Gujarat","A PVTG of bamboo-workers in south Gujarat."],
  ["Madia Gond","Maharashtra","A PVTG of Gadchiroli district; Hemalkasa's Lok Biradari hospital serves them."],
  ["Bharia","Madhya Pradesh","A PVTG of the deep Patalkot valley in Chhindwara district."],
  ["Muria","Chhattisgarh","A Gond people of Bastar, famous for the ghotul — the village youth dormitory."],
  ["Abujh Maria","Chhattisgarh","A PVTG of the remote Abujhmarh hills (Narayanpur)."],
  ["Dandami Maria (Bison-horn Maria)","Chhattisgarh","Of Dantewada and Bastar — named for the bison-horn head-dress worn in their dance."]
];
const T3A = [
  ["Santhal","Santhal Parganas (Jharkhand)","India's third-largest tribe; also in West Bengal, Odisha, Bihar and Assam."],
  ["Ho","Kolhan (West Singhbhum, Jharkhand)","They speak Ho, a Munda language, written in the Warang Citi script."],
  ["Munda","Ranchi–Khunti plateau (Jharkhand)","Birsa Munda's people; they speak Mundari."],
  ["Sauria Paharia","Rajmahal Hills (Jharkhand)","A PVTG; with the Mal Paharia, among the oldest people of the Rajmahal Hills."],
  ["Asur","Netarhat plateau (Jharkhand)","A PVTG who were traditional iron-smelters."],
  ["Dongria Kondh","Niyamgiri Hills (Odisha)","A PVTG whose gram sabhas voted against bauxite mining on their sacred hill in 2013."],
  ["Bonda","Bonda Hills, Malkangiri (Odisha)","A PVTG; the women wear layers of bead necklaces and metal neck rings and shave their heads."],
  ["Juang","Keonjhar (Odisha)","A PVTG of the Keonjhar hills, once shifting cultivators."],
  ["Saora (Sora)","Gajapati district (Odisha)","Known for idital wall paintings and their own script, Sorang Sompeng."],
  ["Toto","Totopara, Alipurduar (West Bengal)","A PVTG living in one village near the Bhutan border."]
];

LESSONS.push(
{id:"T2", heat:3, title:"Tribes of the north, west and centre", hi:"उत्तर, पश्चिम और मध्य भारत की जनजातियाँ", blocks:[
  {k:"hot", h:"Most asked: the <b>Bhils</b> and <b>Gonds</b> (largest tribes, their states, Gondi language, Gond art), <b>Baigas</b> (shifting cultivation), the <b>Gaddis</b> of Himachal, the <b>Tharus</b> of the Terai, the <b>Bhotias</b> and <b>Jaunsaris</b> of Uttarakhand, the <b>Minas</b> and <b>Sahariyas</b> of Rajasthan, the <b>Warlis</b> and their painting, and the <b>Murias</b> and the ghotul."},
  {k:"story", h:"<p>Walk south from the Himalaya. In the high valleys live herders and traders: the <b>Gaddis</b> drive sheep across the Dhauladhar, the <b>Changpas</b> of Ladakh raise pashmina goats, and the <b>Bhotias</b> of Uttarakhand once carried salt and wool over the passes to Tibet. Below them, in <b>Jaunsar-Bawar</b>, the <b>Jaunsaris</b> kept the old custom of one wife with several brothers as husbands. Along the Nepal border, in the Terai forests, live the <b>Tharus</b>.</p><p>The heart of tribal India is the centre. The <b>Bhils</b> — the archers of old stories, India's <b>largest tribe</b> — spread across western Madhya Pradesh, Gujarat, Rajasthan and Maharashtra. The <b>Gonds</b>, the second largest, gave their name to <b>Gondwana</b>; their queen <b>Rani Durgavati</b> fought the Mughals in 1564, and today their bright dot-and-line paintings carry a GI tag. In the Maikal hills the <b>Baigas</b> farm without a plough, and in Bastar the <b>Murias</b> send their young people to the <b>ghotul</b> to learn songs, work and life.</p>", key:"Bhil largest (west-centre), Gond second (Gondwana, Gondi), Baiga (bewar), Gaddi (Himachal shepherds), Tharu (Terai), Bhotia and Jaunsari (Uttarakhand), Mina and Sahariya (Rajasthan), Muria (ghotul)."},
  {k:"table", title:"Tribes with one clear home", head:["Tribe","State / UT","Remember"], rows: T2A.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"The big tribes that cross state borders", head:["Tribe","Where","Known for"], rows:[
    ["<b>Bhil</b>","Madhya Pradesh, Gujarat, Rajasthan, Maharashtra","India's largest tribe; famed archers; Bhagoria festival; Bhili is India's largest non-scheduled language"],
    ["<b>Gond</b>","Madhya Pradesh, Chhattisgarh, Maharashtra, Telangana, Odisha","Second-largest tribe; Gondwana; Gondi (a Dravidian language); Gond painting (GI tag 2023, Dindori); the Pardhans are their bards"],
    ["<b>Baiga</b>","Madhya Pradesh and Chhattisgarh (Maikal hills)","A PVTG; <i>bewar</i> shifting cultivation without a plough; famous tattoos; Baiga Chak in Dindori"],
    ["<b>Sahariya</b>","Madhya Pradesh and Rajasthan","A PVTG in both states — Rajasthan's only PVTG (Baran district)"],
    ["<b>Korku</b>","Madhya Pradesh and Maharashtra (Melghat)","Speak Korku, a Munda (Austro-Asiatic) language"],
    ["<b>Tharu</b>","Uttar Pradesh, Uttarakhand, Bihar (and Nepal)","People of the Terai forests along the Nepal border"],
    ["<b>Bhotia</b>","Uttarakhand (and Himachal Pradesh)","Traders who crossed the Himalayan passes to Tibet; Mana, Niti and Johar valleys"],
    ["<b>Warli</b>","Maharashtra (Palghar, Thane) and Gujarat","Warli painting — white figures on mud walls; Jivya Soma Mashe made it famous"],
    ["<b>Siddi</b>","Gujarat, Karnataka, Goa","Of African descent; Jambur village near Gir; the Dhamal dance"],
    ["<b>Garasia</b>","Rajasthan (Sirohi, Udaipur) and Gujarat","A Bhil-related tribe of the Aravallis"]]},
  {k:"facts", title:"Words to know", rows:[
    ["Ghotul","The youth dormitory of the Murias of Bastar, written about by Verrier Elwin"],
    ["Bewar","The Baigas' slash-and-burn farming on hill slopes, without ploughing the earth"],
    ["Pithora","Ritual wall painting of the Rathwas and Bhilalas of Gujarat and Madhya Pradesh"],
    ["Gondwana","The old name of the Gond country of central India — the geologists' Gondwanaland is named after it"],
    ["Halbi","The common link language of Bastar"],
    ["Verrier Elwin","Anthropologist of the Baigas, Gonds and Murias; later adviser on the North-East to Nehru"]
  ]},
  {k:"link", h:"Bhil and Gond dances, the Bastar region's dances and the Siddi Dhamal are in the <b>Folk Dances</b> app (lessons on Madhya Pradesh & Gujarat and Odisha & Chhattisgarh)."},
  {k:"trick", h:"Himalayan tribes, west to east — <b>“Bakarwal goats, Gaddi sheep, Changpa pashmina, Bhotia salt”</b>.<br>The two giants — <b>“Bhil Bigger, Gond Gondwana”</b>: Bhil is the largest; Gond gave its name to a region."},
  {k:"trap", h:"<b>Gondi</b> is a <b>Dravidian</b> language, though the Gonds live in the north of the Deccan; <b>Korku</b> nearby is <b>Austro-Asiatic</b>. The <b>ghotul</b> is <b>Muria</b>, not Baiga. The <b>Sahariya</b> are a PVTG in <b>both</b> Rajasthan and Madhya Pradesh. <b>Bhotia</b> (Uttarakhand) is not the same as <b>Bhutia</b> (Sikkim)."}
], sum:["Bhils: India's largest tribe — MP, Gujarat, Rajasthan, Maharashtra; archers; Bhagoria.","Gonds: second largest — Gondwana; Gondi is Dravidian; Gond painting GI (2023); Rani Durgavati.","Baiga (MP–Chhattisgarh): PVTG, bewar farming. Muria (Bastar): ghotul. Abujh Maria: PVTG of Abujhmarh.","Himalaya: Gaddi (Himachal shepherds), Bakarwal (J&K), Changpa and Brokpa (Ladakh), Jaunsari and Bhotia (Uttarakhand), Tharu (Terai).","West: Mina (Rajasthan's largest), Sahariya (Rajasthan's only PVTG), Rathwa (Pithora), Warli (painting), Siddi (African descent)."]},

{id:"T3", heat:3, title:"Tribes of the east: Jharkhand, Odisha, West Bengal, Bihar", hi:"पूर्वी भारत की जनजातियाँ", blocks:[
  {k:"hot", h:"Most asked: the <b>Santhals</b> (Santhal Parganas, Santhali, Ol Chiki), <b>Mundas</b> and <b>Oraons</b> (Kurukh), <b>Hos</b> of Kolhan, Odisha's PVTGs — <b>Bonda</b>, <b>Dongria Kondh</b> (Niyamgiri), <b>Juang</b>, <b>Saora</b> — and the <b>Kondhs</b>, Odisha's largest tribe."},
  {k:"story", h:"<p>The <b>Chota Nagpur plateau</b> is the oldest tribal homeland of the east. Three peoples fill it. The <b>Santhals</b>, India's third-largest tribe, live in the <b>Santhal Parganas</b> and far beyond. The <b>Mundas</b> of the Ranchi–Khunti plateau held their land jointly as the descendants of the clan founders, a system called <b>khuntkatti</b>; its breakdown drove Birsa Munda's rising. The <b>Oraons</b> came later and speak <b>Kurukh</b>, a <b>Dravidian</b> language, unlike the <b>Munda</b> languages (Santhali, Mundari, Ho) around them. To the south, in <b>Kolhan</b>, live the <b>Hos</b>.</p><p><b>Odisha</b> has 62 tribes — more than any other state — and 13 PVTGs. The <b>Kondhs</b> are the largest; Kandhamal district is named after them. In the Niyamgiri hills, the <b>Dongria Kondhs</b> worship the mountain as their god Niyam Raja and, in 2013, their village councils turned away a bauxite mine. In Malkangiri live the <b>Bondas</b>, whose women wear heavy bead necklaces and metal neck rings. The <b>Saoras</b> paint spirit pictures, <b>idital</b>, on their walls.</p>", key:"Santhal (Santhal Parganas), Munda (khuntkatti), Oraon (Kurukh — Dravidian), Ho (Kolhan); Odisha: 62 tribes, 13 PVTGs, Kondh largest, Dongria Kondh of Niyamgiri, Bonda of Malkangiri."},
  {k:"table", title:"Tribes of the east and their homelands", head:["Tribe","Homeland","Remember"], rows: T3A.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"More tribes of the east", rows:[
    ["Oraon","Jharkhand, Chhattisgarh, Odisha, West Bengal — speak Kurukh (Dravidian); Sarhul and Karma; the Tana Bhagat movement (1914) began among them"],
    ["Kondh (Kandha)","Odisha's largest tribe; Kandhamal is named after them; the British ended their meriah sacrifice in the 1840s"],
    ["Birhor","A PVTG of Jharkhand — wandering monkey-catchers and rope-makers who live in camps called tanda"],
    ["Kharia","Jharkhand and Odisha — speak Kharia, a Munda language"],
    ["Lodha","A PVTG of West Bengal and Odisha, once wrongly branded under the Criminal Tribes Act"],
    ["Tharu","Also in West Champaran, Bihar, around the Valmiki forests"]
  ]},
  {k:"table", title:"Tribal shares of the eastern states (Census 2011)", head:["State","ST share","Note"], rows:[
    ["Jharkhand","26.2%","32 tribes; Santhal the largest"],
    ["Odisha","22.8%","62 tribes — the most of any state; 13 PVTGs"],
    ["West Bengal","5.8%","Santhals are more than half of the state's STs"],
    ["Bihar","1.3%","Most tribal areas went to Jharkhand in 2000"]]},
  {k:"link", h:"The Santhal Hul, Birsa Munda's Ulgulan and the Kol rising are in lesson T6; the scripts Ol Chiki, Warang Citi and Sorang Sompeng in T8. Chhau, Santhali and Jhumair dances are in the <b>Folk Dances</b> app."},
  {k:"trick", h:"Munda family of languages — <b>“San-Mun-Ho-Kha”</b>: Santhali, Mundari, Ho, Kharia — all <b>Austro-Asiatic</b>. The odd one out on the plateau is <b>Kurukh</b> of the <b>Oraons</b> — <b>“Oraon = Other (Dravidian)”</b>."},
  {k:"trap", h:"<b>Odisha</b> has the <b>most tribes (62)</b> and the <b>most PVTGs (13)</b>, but <b>Madhya Pradesh</b> has the most tribal <b>people</b>. The <b>Dongria Kondh</b> are of <b>Niyamgiri</b> (Rayagada–Kalahandi), the <b>Bonda</b> of <b>Malkangiri</b>. <b>Kolhan</b> is the land of the <b>Ho</b>, even though the British called many Munda-speaking peoples “Kols”."}
], sum:["Santhals: India's third-largest tribe — Santhal Parganas, Santhali (Ol Chiki).","Mundas: Ranchi–Khunti, khuntkatti land; Hos: Kolhan; Oraons: Kurukh — a Dravidian language.","Jharkhand PVTGs include the Asur (iron-smelters), Birhor (rope-makers), Sauria and Mal Paharia.","Odisha: 62 tribes and 13 PVTGs; Kondhs the largest; Dongria Kondh (Niyamgiri), Bonda (Malkangiri), Juang (Keonjhar), Saora (idital).","West Bengal: Toto of Totopara (PVTG), Lodha; Bihar: Tharu of West Champaran."]}
);

pairQs("T2", T2A, { q: t => `The ${t} people live mainly in which state or UT?`, extra: ["Punjab","Kerala"] });
pairQs("T3", T3A, { q: t => `The homeland of the ${t} tribe is:` });

QB.push(
["T2","The Bhils, India's largest tribe, live mainly in which group of states?",["Madhya Pradesh, Gujarat, Rajasthan and Maharashtra","Assam, Meghalaya and Tripura","Kerala, Tamil Nadu and Karnataka","Bihar, West Bengal and Odisha"],"The Bhil country runs across western Madhya Pradesh, eastern Gujarat, southern Rajasthan and northern Maharashtra.",""],
["T2","The Bhils are traditionally famous as skilled:",["Archers","Boat-builders","Salt traders","Snake catchers"],"Bhil archers appear in old stories — Eklavya is often linked with them; the name is often traced to a Dravidian word for bow.",""],
["T2","Gondi, the language of the Gonds, belongs to which language family?",["Dravidian","Indo-Aryan","Austro-Asiatic","Tibeto-Burman"],"Gondi is a Dravidian language, like Kurukh of the Oraons.",""],
["T2","The old region of central India called Gondwana is named after which tribe?",["Gond","Bhil","Baiga","Korku"],"Gondwana means the land of the Gonds; geologists later named the ancient supercontinent Gondwanaland after it.",""],
["T2","Rani Durgavati, who fought the Mughal army in 1564, was a queen of which people?",["Gond","Bhil","Santhal","Mina"],"She ruled the Gond kingdom of Garha-Mandla and died fighting Akbar's general Asaf Khan.",""],
["T2","Gond painting received a GI tag in 2023. Which district of Madhya Pradesh did the tag name as its home?",["Dindori","Jhabua","Bastar","Mandla"],"The GI names Dindori, home of Patangarh village, where Jangarh Singh Shyam began. Bastar is in Chhattisgarh.",""],
["T2","Jangarh Singh Shyam, who made Gond art known to the world, belonged to which Gond group?",["Pardhan Gond","Raj Gond","Madia Gond","Muria Gond"],"The Pardhans are the bards and musicians of the Gonds; Jangarh Singh Shyam was a Pardhan Gond of Patangarh.",""],
["T2","The Pardhans are the traditional bards and musicians of which tribe?",["Gond","Bhil","Tharu","Gaddi"],"Pardhans sing the Gond clan stories and genealogies.",""],
["T2","“Bewar”, a form of shifting cultivation without ploughing, is practised by which tribe?",["Baiga","Gaddi","Tharu","Mina"],"The Baigas believed that ploughing hurt Mother Earth, so they farmed burnt hill slopes instead.",""],
["T2","The Baigas, a PVTG, live mainly in:",["Madhya Pradesh and Chhattisgarh","Rajasthan and Gujarat","Himachal Pradesh and Uttarakhand","Assam and Meghalaya"],"They live in the Maikal hills; Baiga Chak in Dindori (MP) is their heartland.",""],
["T2","The ghotul, a village youth dormitory, belongs to which tribe?",["Muria","Baiga","Bhil","Gaddi"],"The Murias of Bastar (Chhattisgarh) run the ghotul; Verrier Elwin wrote about it.",""],
["T2","Which tribe is the only PVTG of Rajasthan?",["Sahariya","Mina","Bhil","Garasia"],"The Sahariyas live mainly in Baran district; they are also a PVTG in Madhya Pradesh.",""],
["T2","Besides Rajasthan, the Sahariyas are a PVTG in which state?",["Madhya Pradesh","Gujarat","Uttar Pradesh","Haryana"],"Sahariyas live in Gwalior, Shivpuri, Guna and nearby districts of Madhya Pradesh.",""],
["T2","Which is the largest tribe of Rajasthan?",["Mina","Bhil","Sahariya","Garasia"],"Minas live in the east of the state; Bhils are the second-largest tribe there.",""],
["T2","The Tharus live mainly in:",["The Terai along the Nepal border","The Nilgiri Hills","The Bastar plateau","The Garo Hills"],"Tharus live in the Terai forests of Uttar Pradesh, Uttarakhand and Bihar, and in Nepal.",""],
["T2","The Gaddis of Himachal Pradesh are traditionally:",["Shepherds","Fishermen","Iron-smelters","Honey gatherers"],"Gaddis move their sheep and goats between the high pastures of the Dhauladhar and the lower hills.",""],
["T2","Bharmour, the homeland of the Gaddis, is in which district?",["Chamba","Kullu","Kinnaur","Shimla"],"Bharmour in Chamba district, Himachal Pradesh, is called Gadderan, the land of the Gaddis.",""],
["T2","The Bhotias of Uttarakhand were traditionally:",["Traders with Tibet across the Himalayan passes","Rice farmers of the Terai","Fishermen of the Ganga","Weavers of Kullu shawls"],"Bhotias of the Mana, Niti and Johar valleys carried grain, salt and wool across the passes.",""],
["T2","Jaunsar-Bawar, home of the Jaunsari tribe, is in which district of Uttarakhand?",["Dehradun","Pithoragarh","Chamoli","Udham Singh Nagar"],"Jaunsar-Bawar is in the north-west of Dehradun district; the Jaunsaris were known for polyandry.",""],
["T2","Pashmina wool comes from goats reared by which nomadic people?",["Changpa","Gaddi","Bakarwal","Bhotia"],"The Changpas rear pashmina goats on the Changthang plateau of Ladakh.",""],
["T2","Warli painting, with white stick figures on mud walls, belongs mainly to which state?",["Maharashtra","Odisha","Assam","Kerala"],"Warlis live in Palghar and Thane districts of Maharashtra and nearby Gujarat; Jivya Soma Mashe made the art famous.",""],
["T2","The Siddis of Gujarat and Karnataka are of what origin?",["African","Tibetan","Persian","Burmese"],"Siddis descend from Africans who came to India centuries ago; Jambur near Gir is a Siddi village.",""],
["T2","Pithora, a ritual wall painting, is made by which tribe?",["Rathwa","Warli","Mina","Tharu"],"The Rathwas of Chhota Udepur (Gujarat) and the Bhilalas paint Pithora on their walls.",""],
["T2","Korku, a language of Madhya Pradesh and Maharashtra, belongs to which family?",["Austro-Asiatic (Munda)","Dravidian","Tibeto-Burman","Indo-Aryan"],"Korku is a Munda language, like Santhali and Mundari, even though its neighbours speak Indo-Aryan and Dravidian languages.",""],
["T2","Patalkot, a deep valley in Chhindwara, is home to which PVTG?",["Bharia","Baiga","Sahariya","Abujh Maria"],"The Bharias of Patalkot live in a deep, horseshoe-shaped valley in the Satpura hills of Chhindwara district.",""],
["T2","Which anthropologist wrote about the Baigas, the Gonds and the Muria ghotul?",["Verrier Elwin","Christoph von Fürer-Haimendorf","B. S. Guha","S. C. Roy"],"Verrier Elwin lived among the tribes of central India; Fürer-Haimendorf is known for the Gonds of Adilabad and the Apatanis.",""],
["T2","Which language serves as the common link language of the Bastar region?",["Halbi","Gondi","Kurukh","Bhili"],"Halbi, an Indo-Aryan speech, is used across Bastar between peoples who speak different mother tongues.",""],
["T2","Which tribe is NOT matched correctly with its state or UT?",["Gaddi — Uttarakhand","Changpa — Ladakh","Mina — Rajasthan","Muria — Chhattisgarh"],"The Gaddis belong to Himachal Pradesh.",""],

["T3","The Santhal Parganas, the homeland of the Santhals, is now in which state?",["Jharkhand","West Bengal","Odisha","Bihar"],"The Santhal Parganas division is in north-east Jharkhand; it was formed after the Hul of 1855.",""],
["T3","Santhali belongs to which language family?",["Austro-Asiatic","Dravidian","Indo-Aryan","Tibeto-Burman"],"Santhali is the largest of the Munda languages, a branch of Austro-Asiatic.",""],
["T3","Kurukh, the language of the Oraons, belongs to which family?",["Dravidian","Austro-Asiatic","Indo-Aryan","Tibeto-Burman"],"Kurukh is Dravidian, unlike the Munda languages spoken by the Santhals, Mundas and Hos around them.",""],
["T3","The “khuntkatti” system of joint clan ownership of land belongs to which tribe?",["Munda","Bhil","Toda","Gaddi"],"Under khuntkatti, the descendants of the founders who cleared the forest held the land together; its break-up fed Birsa's movement.",""],
["T3","Which is the largest tribe of Odisha?",["Kondh","Santhal","Bonda","Juang"],"The Kondhs (Kandhas) are Odisha's largest tribe; Kandhamal district is named after them.",""],
["T3","Kandhamal district of Odisha takes its name from which tribe?",["Kondh","Juang","Saora","Bonda"],"Kandhamal means the land of the Kandhas, or Kondhs.",""],
["T3","Which state has the largest number of Scheduled Tribe communities — 62?",["Odisha","Jharkhand","Madhya Pradesh","Assam"],"Odisha has 62 tribes, including 13 PVTGs.",""],
["T3","The Dongria Kondhs worship which hill as the seat of their god Niyam Raja?",["Niyamgiri","Mahendragiri","Deomali","Gandhamardan"],"In 2013 their gram sabhas rejected bauxite mining on the Niyamgiri hills, after the Supreme Court asked them to decide.",""],
["T3","In 2013, who did the Supreme Court say must decide whether bauxite could be mined in the Niyamgiri hills?",["The gram sabhas of the area","The Governor of Odisha","The Ministry of Mines","The National Commission for Scheduled Tribes"],"The court held that under the Forest Rights Act the local gram sabhas must decide; all of them said no.",""],
["T3","Bonda women are known for wearing:",["Layers of bead necklaces and metal neck rings","Nose plugs and facial tattoos","Bison-horn head-dresses","Long white shawls"],"Bonda women of Malkangiri also shave their heads. Nose plugs and tattoos belong to the Apatanis of Arunachal.",""],
["T3","Idital wall paintings are the art of which tribe of Odisha?",["Saora","Bonda","Kondh","Juang"],"Saora idital paintings are made to honour spirits and ancestors.",""],
["T3","The Asur, a PVTG of Jharkhand, were traditionally:",["Iron-smelters","Shepherds","Salt makers","Boat-builders"],"The Asurs of the Netarhat plateau smelted iron from local ore.",""],
["T3","The Birhors of Jharkhand are known as wandering:",["Monkey-catchers and rope-makers","Fishermen","Potters","Weavers"],"The Birhors, a PVTG, lived in forest camps called tanda and made ropes from creeper fibre.",""],
["T3","The Hos are the main tribe of which region of Jharkhand?",["Kolhan","Santhal Parganas","Palamu","Damodar valley"],"Kolhan (the Singhbhum area) is the land of the Hos.",""],
["T3","The Tana Bhagat movement of 1914 arose among which tribe?",["Oraon","Santhal","Munda","Ho"],"Jatra Bhagat began it among the Oraons, rejecting taxes, liquor and spirit worship; the Tana Bhagats later followed Gandhi.",""],
["T3","Which of these is a Dravidian-speaking tribe of the Chota Nagpur plateau?",["Oraon","Santhal","Munda","Ho"],"The Oraons speak Kurukh; the Santhals, Mundas and Hos speak Munda (Austro-Asiatic) languages.",""],
["T3","The Toto, a PVTG of West Bengal, live in:",["A single village near the Bhutan border","The Sundarbans islands","The Darjeeling tea gardens","The Ajodhya hills of Purulia"],"Almost all Totos live in Totopara in Alipurduar district.",""],
["T3","According to Census 2011, Scheduled Tribes make up about what share of Jharkhand's population?",["26%","8.6%","45%","14%"],"About 26.2%. The Santhals are the largest of its 32 tribes.",""],
["T3","Which tribe of Odisha practised the meriah sacrifice, which the British suppressed in the 1840s?",["Kondh","Bonda","Saora","Juang"],"The Kondhs offered meriah sacrifices for good harvests; the British set up a Meriah Agency to stop them.",""],
["T3","Which of these PVTGs belongs to Odisha?",["Juang","Asur","Toto","Sahariya"],"The Juangs live in Keonjhar. The Asurs are of Jharkhand, the Totos of West Bengal and the Sahariyas of Rajasthan and Madhya Pradesh.",""],
["T3","Which of these tribes is NOT matched with its homeland correctly?",["Bonda — Niyamgiri Hills","Ho — Kolhan","Santhal — Santhal Parganas","Toto — Totopara"],"The Bondas live in the Bonda Hills of Malkangiri; Niyamgiri is the home of the Dongria Kondh.",""]
);

LASTMOMENT.push(
{t:"Tribes of the centre and west", era:["tl"], rows:[["Bhil","Largest tribe — MP, Gujarat, Rajasthan"],["Gond","Gondwana; Gondi (Dravidian)"],["Baiga","Bewar farming; PVTG"],["Muria","Ghotul (Bastar)"],["Sahariya","Rajasthan's only PVTG"],["Gaddi","Himachal shepherds"]]},
{t:"Tribes of the east", era:["tl"], rows:[["Santhal","Santhal Parganas; third largest"],["Munda","Khuntkatti; Birsa"],["Oraon","Kurukh (Dravidian)"],["Ho","Kolhan"],["Odisha","62 tribes, 13 PVTGs; Kondh largest"],["Dongria Kondh","Niyamgiri"]]}
);
TILES.push(["62","Tribes of Odisha","tl"],["26.2%","ST share of Jharkhand","tl"]);

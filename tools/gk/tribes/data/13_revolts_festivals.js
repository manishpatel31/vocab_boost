/* T6: tribal revolts and their leaders, tribal festivals, and the days that honour tribal India. */
const T6A = [
  ["Santhal Hul (1855–56)","Sidhu and Kanhu Murmu","Began on 30 June 1855 at Bhognadih, with their brothers Chand and Bhairav and sisters Phulo and Jhano; afterwards the British made the Santhal Parganas a separate district."],
  ["Munda Ulgulan (1899–1900)","Birsa Munda","‘Dharti Aaba’ called for Abua Raj, the people's own rule; he died in Ranchi jail on 9 June 1900, and the Chota Nagpur Tenancy Act (1908) followed."],
  ["Kol rising (1831–32)","Buddhu Bhagat","In Chota Nagpur, against outsiders (dikus) taking tribal land; Mundas, Hos and Oraons joined in."],
  ["Bhumij revolt (1832–33)","Ganga Narayan Singh","In Barabhum and the Jungle Mahals — the British called it ‘Ganga Narain's Hangama’."],
  ["Khasi resistance (1829–33)","U Tirot Sing","Chief of Nongkhlaw, who fought the British road across the Khasi Hills; he died a prisoner in Dhaka in 1835."],
  ["Jaintia rising (1862)","U Kiang Nongbah","Rose against British taxes and was hanged at Jowai in 1862."],
  ["Rajmahal hills resistance (1780s)","Tilka Manjhi","Often called the first Adivasi martyr; he attacked the British collector Augustus Cleveland and was hanged at Bhagalpur in 1785."],
  ["Rampa rebellion (1922–24)","Alluri Sitarama Raju","In the Godavari hill tracts (Andhra), against the forest laws; killed by the British in 1924."],
  ["Heraka movement of the Zeliangrong Nagas (1920s–30s)","Rani Gaidinliu","Took up Haipou Jadonang's cause; arrested in 1932 while still a teenager; Nehru gave her the title ‘Rani’."],
  ["Bhumkal rebellion, Bastar (1910)","Gunda Dhur","A rising of the Dhurwa and other tribes of Bastar against forest reservation and forced labour."],
  ["Tana Bhagat movement (1914)","Jatra Bhagat","An Oraon movement against taxes, liquor and spirit worship; the Tana Bhagats later joined Gandhi's struggle."],
  ["Gond struggle in Hyderabad State (1930s–1940)","Komaram Bheem","Raised the call ‘Jal, Jangal, Zameen’ against the Nizam's forest officials; killed at Jodeghat in 1940."],
  ["Bhil gathering at Mangarh (1913)","Govind Guru","On 17 November 1913 British troops fired on his followers on Mangarh hill (Banswara, Rajasthan) — the ‘Adivasi Jallianwala’."],
  ["Bhil resistance in Nimar (1878–89)","Tantia Bhil","The ‘Indian Robin Hood’, who robbed the rich to help the poor; hanged in 1889."],
  ["Sonakhan rising (1857)","Veer Narayan Singh","A zamindar of Sonakhan, hanged at Raipur — Chhattisgarh's first martyr of 1857."],
  ["Koraput protest (1942)","Laxman Naik","Led tribal people in Quit India in Koraput (Odisha); hanged in 1943."]
];
const T6B = [
  ["Sekrenyi","Angami","February — a festival of purification and renewal."],
  ["Moatsu","Ao","Early May, after sowing."],
  ["Tuluni","Sumi","July — a festival of plenty."],
  ["Aoleang","Konyak","April — the Konyak new year, before sowing."],
  ["Tokhu Emong","Lotha","November, after the harvest."],
  ["Wangala","Garo","After the harvest — the festival of the hundred drums, for the sun god Saljong."],
  ["Behdienkhlam","Jaintia (Pnar)","July at Jowai — driving away the demon of disease."],
  ["Shad Suk Mynsiem","Khasi","April in Shillong — the dance of the joyful heart."],
  ["Chapchar Kut","Mizo","March, after the forest for jhum has been cleared."],
  ["Bwisagu","Bodo","Mid-April, the Bodo new year, at the time of Bohag Bihu."],
  ["Ali-Aye-Ligang","Mishing","February — the start of sowing."],
  ["Dree","Apatani","July — prayers for a good harvest."],
  ["Nyokum","Nyishi","26 February — for the goddess of prosperity."],
  ["Solung","Adi","September — after the sowing, for crops and cattle."],
  ["Mopin","Galo","April — for wealth and good health."],
  ["Reh","Idu Mishmi","February."],
  ["Losoong","Bhutia","The Sikkimese new year, at the end of the harvest."],
  ["Tendong Lho Rum Faat","Lepcha","August — prayers to Mount Tendong, which the Lepchas believe saved them from a great flood."],
  ["Gaan-Ngai","Rongmei Naga","Manipur — a five-day festival after the harvest."],
  ["Bhagoria","Bhil","Before Holi, in the weekly markets of Jhabua and Alirajpur (Madhya Pradesh)."],
  ["Baha","Santhal","Spring — the festival of flowers."],
  ["Medaram Jatara","Koya","Every two years in Mulugu district, Telangana — for the goddesses Sammakka and Saralamma; in 2026 it was held on 28–31 January."],
  ["Nagoba Jatara","Raj Gond","At Keslapur in Adilabad district, Telangana — for the serpent god Nagoba."]
];

LESSONS.push(
{id:"T6", heat:3, title:"Tribal revolts, leaders and festivals", hi:"जनजातीय विद्रोह, नायक और पर्व", blocks:[
  {k:"hot", h:"Most asked: the <b>Santhal Hul</b> (1855, Sidhu–Kanhu), <b>Birsa Munda</b> and the Ulgulan, <b>Janjatiya Gaurav Divas</b> (15 November), the Kol, Khasi and Rampa risings, <b>Rani Gaidinliu</b>, and festivals such as <b>Hornbill</b>, <b>Sarhul</b>, <b>Wangala</b>, <b>Chapchar Kut</b>, <b>Bhagoria</b> and <b>Medaram</b>."},
  {k:"story", h:"<p>Long before 1857, tribal India was rising. The British and the moneylenders, traders and landlords who came with them — the <b>dikus</b> — took forest and land that tribes had always held together. In the 1780s <b>Tilka Manjhi</b> fought in the Rajmahal hills; in 1831 the <b>Kols</b> of Chota Nagpur rose under <b>Buddhu Bhagat</b>; and in the Khasi Hills <b>U Tirot Sing</b> fought a British road for four years.</p><p>The biggest storm came on <b>30 June 1855</b>, when the brothers <b>Sidhu and Kanhu Murmu</b> called thousands of Santhals to Bhognadih: the <b>Hul</b>. It was crushed, but the British carved out the <b>Santhal Parganas</b>. Forty years later a young Munda, <b>Birsa</b>, preached a new faith and led the <b>Ulgulan</b> (great tumult) for <b>Abua Raj</b>, the people's own rule. He died in Ranchi jail in 1900, aged only twenty-four; his people call him <b>Dharti Aaba</b>, father of the earth. Since 2021 his birthday, <b>15 November</b>, is <b>Janjatiya Gaurav Divas</b>.</p><p>Tribal India also celebrates. Nagaland gathers its tribes at the <b>Hornbill Festival</b> each December; Jharkhand greets spring with <b>Sarhul</b> under the flowering sal trees; the Garos beat a hundred drums at <b>Wangala</b>; and in Telangana millions come to the Koya goddesses at <b>Medaram</b>.</p>", key:"Hul 1855 (Sidhu–Kanhu), Ulgulan 1899–1900 (Birsa Munda), Kol 1831 (Buddhu Bhagat), Khasi 1829 (U Tirot Sing), Rampa 1922 (Alluri); Janjatiya Gaurav Divas 15 Nov; Hornbill 1–10 Dec."},
  {k:"table", title:"Revolts and their leaders", head:["Revolt","Leader","Remember"], rows: T6A.map(r => [r[0], r[1], r[2]])},
  {k:"tl", title:"Tribal risings in time", rows:[["1780s","Tilka Manjhi in the Rajmahal hills"],["1829–33","Khasi resistance — U Tirot Sing"],["1831–32","Kol rising — Buddhu Bhagat"],["1832–33","Bhumij revolt — Ganga Narayan Singh"],["1855–56","Santhal Hul — Sidhu and Kanhu"],["1857","Veer Narayan Singh at Sonakhan"],["1862","Jaintia rising — U Kiang Nongbah"],["1899–1900","Munda Ulgulan — Birsa Munda"],["1910","Bhumkal, Bastar — Gunda Dhur"],["1913","Mangarh — Govind Guru and the Bhils"],["1914","Tana Bhagat — Jatra Bhagat"],["1922–24","Rampa — Alluri Sitarama Raju"],["1932","Rani Gaidinliu jailed"],["1940","Komaram Bheem killed at Jodeghat"]]},
  {k:"facts", title:"Birsa Munda in brief", rows:[
    ["Born","15 November 1875 at Ulihatu (now Khunti district, Jharkhand)"],
    ["Titles","Dharti Aaba (father of the earth), Bhagwan Birsa"],
    ["Aims","Abua Raj (our own rule); end to begar (forced labour) and the loss of khuntkatti land"],
    ["Died","9 June 1900, in Ranchi jail"],
    ["After him","The Chota Nagpur Tenancy Act, 1908 protected tribal land"],
    ["Honoured","Jharkhand was formed on his birthday (15 November 2000); Janjatiya Gaurav Divas since 2021; the 150th birth anniversary year ran from 15 November 2024 to 15 November 2025 (Janjatiya Gaurav Varsh)"]
  ]},
  {k:"table", title:"Tribal festivals and their tribes", head:["Festival","Tribe","When / note"], rows: T6B.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Festivals, fairs and days to remember", rows:[
    ["Hornbill Festival","Nagaland, 1–10 December at Kisama heritage village near Kohima, since 2000 — the ‘festival of festivals’ of all the Naga tribes; it opens on Nagaland's Statehood Day"],
    ["Sarhul","Jharkhand's spring festival when the sal trees flower — Oraons, Mundas and Hos worship the village grove (sarna)"],
    ["Karma","Worship of the karam tree for good fortune — Oraons, Mundas and others in Jharkhand and Chhattisgarh"],
    ["Sohrai","A harvest and cattle festival after Diwali; Sohrai and Khovar wall paintings of Hazaribagh carry a GI tag"],
    ["Baneshwar fair","Dungarpur, Rajasthan, where the Som and Mahi meet — the great fair of the Bhils, held in the month of Magh"],
    ["Bastar Dussehra","Chhattisgarh — about 75 days long, for the goddess Danteshwari; not about Rama"],
    ["Hul Diwas","30 June — the day the Santhal Hul began (1855)"],
    ["Janjatiya Gaurav Divas","15 November — Birsa Munda's birthday, observed since 2021"],
    ["World's Indigenous Peoples Day","9 August — a UN day"],
    ["Aadi Mahotsav","TRIFED's national tribal festival of crafts, food and art, held in New Delhi"]
  ]},
  {k:"link", h:"The dances of these festivals — Cheraw, Hojagiri, Nongkrem, Bagurumba, Karma, Jhumair — are in the <b>Folk Dances</b> app. The wider freedom struggle is in <b>Modern India</b>."},
  {k:"trick", h:"Revolts in order — <b>“Tilka Taught Kols, Santhals Followed Birsa”</b>: Tilka (1780s) → Tirot/Kol (1829–32) → Santhal Hul (1855) → Birsa (1899).<br>Two days to keep apart — <b>“30 June Hul, 15 November Birsa”</b>."},
  {k:"trap", h:"<b>Ulgulan</b> is Birsa's (Munda) rising; <b>Hul</b> is the Santhals'. <b>Sidhu and Kanhu</b> were Santhals — not Mundas. <b>Alluri Sitarama Raju</b> led the <b>Rampa</b> rebellion (1922–24), not the Koya rising. <b>Wangala</b> is Garo, <b>Behdienkhlam</b> is Jaintia and <b>Shad Suk Mynsiem</b> is Khasi — all three are in Meghalaya. <b>Hornbill</b> is held in December, not in spring."}
], sum:["Santhal Hul: 30 June 1855, Sidhu and Kanhu Murmu (Bhognadih) → Santhal Parganas.","Munda Ulgulan 1899–1900: Birsa Munda (born 15 Nov 1875, died 9 June 1900) → Chota Nagpur Tenancy Act 1908.","Kol 1831–32 (Buddhu Bhagat), Khasi 1829–33 (U Tirot Sing), Jaintia 1862 (U Kiang Nongbah), Rampa 1922–24 (Alluri Sitarama Raju), Heraka (Rani Gaidinliu).","Mangarh 1913 (Govind Guru, Bhils), Bhumkal 1910 (Gunda Dhur), Tana Bhagat 1914 (Jatra Bhagat), Komaram Bheem (1940).","Janjatiya Gaurav Divas: 15 November, since 2021. Hornbill: 1–10 December, Kisama, Nagaland.","Festivals: Sekrenyi–Angami, Moatsu–Ao, Wangala–Garo, Chapchar Kut–Mizo, Bwisagu–Bodo, Dree–Apatani, Nyokum–Nyishi, Solung–Adi, Bhagoria–Bhil, Medaram–Koya."]}
);

pairQs("T6", T6A, { q: t => `Who led the ${t}?` });
pairQs("T6", T6B.filter(r => !["Tokhu Emong","Reh","Mopin","Gaan-Ngai","Tuluni","Aoleang","Ali-Aye-Ligang"].includes(r[0])), { q: t => `${t} is a festival of which tribe?` });

QB.push(
["T6","On which date did the Santhal Hul begin?",["30 June 1855","15 November 1875","9 June 1900","10 May 1857"],"30 June is kept as Hul Diwas. 15 November 1875 is Birsa Munda's birth; 9 June 1900 his death.",""],
["T6","After the Santhal Hul, the British created which separate district?",["Santhal Parganas","Kolhan","Jungle Mahals","Chota Nagpur"],"The Santhal Parganas was formed in 1855 to govern the Santhal country directly.",""],
["T6","Birsa Munda's movement is known as:",["Ulgulan","Hul","Bhumkal","Heraka"],"Ulgulan means the great tumult. Hul was the Santhal rising, Bhumkal the Bastar rising and Heraka Rani Gaidinliu's faith.",""],
["T6","Birsa Munda is honoured by the title:",["Dharti Aaba","Bapu","Lokmanya","Sher-e-Punjab"],"Dharti Aaba means father of the earth.",""],
["T6","Birsa Munda died in 1900 in which jail?",["Ranchi","Hazaribagh","Andaman Cellular Jail","Bhagalpur"],"He died in Ranchi jail on 9 June 1900, aged about twenty-four.",""],
["T6","Which law, passed after Birsa Munda's rising, protected tribal land in Chota Nagpur?",["Chota Nagpur Tenancy Act, 1908","Santhal Parganas Tenancy Act, 1949","Forest Act, 1878","Permanent Settlement, 1793"],"The CNT Act of 1908 restricted the transfer of tribal land to outsiders.",""],
["T6","Janjatiya Gaurav Divas is observed every year on:",["15 November","30 June","9 August","26 January"],"It marks Birsa Munda's birthday and has been observed since 2021. 9 August is the UN's day for indigenous peoples; 30 June is Hul Diwas.",""],
["T6","Janjatiya Gaurav Divas was first observed in which year?",["2021","2000","2018","2023"],"The Union Cabinet declared 15 November Janjatiya Gaurav Divas in November 2021.",""],
["T6","Which state was formed on Birsa Munda's birthday?",["Jharkhand","Chhattisgarh","Uttarakhand","Telangana"],"Jharkhand was carved out of Bihar on 15 November 2000.",""],
["T6","Rani Gaidinliu, given the title ‘Rani’ by Nehru, belonged to which people?",["Zeliangrong Naga (Rongmei)","Khasi","Mizo","Bodo"],"She was a Rongmei of the Zeliangrong Nagas of Manipur and led the Heraka movement after Haipou Jadonang.",""],
["T6","The Mangarh massacre of 1913, called the ‘Adivasi Jallianwala’, took place in which present-day state?",["Rajasthan","Madhya Pradesh","Gujarat","Jharkhand"],"Mangarh hill is in Banswara district, Rajasthan, on the Gujarat border; Govind Guru's Bhil followers were fired on.",""],
["T6","The slogan ‘Jal, Jangal, Zameen’ (water, forest, land) is linked with which tribal leader?",["Komaram Bheem","Birsa Munda","Tantia Bhil","U Tirot Sing"],"Komaram Bheem, a Gond of today's Telangana, fought the Nizam's officials and was killed at Jodeghat in 1940.",""],
["T6","The Hornbill Festival is held in which state?",["Nagaland","Arunachal Pradesh","Meghalaya","Manipur"],"It is held at Kisama near Kohima from 1 to 10 December.",""],
["T6","The Hornbill Festival begins every year on:",["1 December","26 January","15 November","1 May"],"1 December is Nagaland's Statehood Day (1963); the festival runs for ten days.",""],
["T6","Sarhul, the spring festival when the sal trees flower, belongs mainly to which state?",["Jharkhand","Assam","Kerala","Rajasthan"],"Oraons, Mundas and Hos celebrate Sarhul in Jharkhand; it is a state holiday there.",""],
["T6","The Karma festival is the worship of which tree?",["Karam","Sal","Mahua","Banyan"],"Branches of the karam tree are planted and worshipped for good fortune.",""],
["T6","The Baneshwar fair of the Bhils is held where two rivers meet in Dungarpur. Which rivers?",["Som and Mahi","Chambal and Banas","Narmada and Tapti","Luni and Sukri"],"The fair at the Som–Mahi confluence (with the Jakham nearby) is held in the month of Magh.",""],
["T6","Bastar Dussehra, a festival of about 75 days, is dedicated to which goddess?",["Danteshwari","Sammakka","Kamakhya","Durga of Kolkata"],"Bastar Dussehra honours the goddess Danteshwari of Dantewada, not Rama's victory.",""],
["T6","The Medaram Jatara honours which goddesses?",["Sammakka and Saralamma","Danteshwari and Mawli","Kamakhya and Tara","Bhagoria and Gangaur"],"The Koyas hold it every two years in Mulugu district, Telangana.",""],
["T6","Who was the British collector whom Tilka Manjhi attacked?",["Augustus Cleveland","Thomas Wilkinson","Warren Hastings","John Shore"],"Cleveland was collector of Bhagalpur; Tilka Manjhi was hanged there in 1785.",""],
["T6","Which festival is NOT correctly matched with its tribe?",["Wangala — Khasi","Chapchar Kut — Mizo","Dree — Apatani","Moatsu — Ao"],"Wangala belongs to the Garos; the Khasis have Shad Suk Mynsiem and Nongkrem.",""],
["T6","The 150th birth anniversary year of Birsa Munda, observed as Janjatiya Gaurav Varsh, ended on:",["15 November 2025","15 November 2024","30 June 2025","2 October 2025"],"The year ran from 15 November 2024 to 15 November 2025.",""]
);

LASTMOMENT.push(
{t:"Revolts and leaders", era:["tl"], rows:[["Santhal Hul 1855","Sidhu, Kanhu"],["Ulgulan 1899","Birsa Munda"],["Kol 1831","Buddhu Bhagat"],["Khasi 1829","U Tirot Sing"],["Rampa 1922","Alluri Sitarama Raju"],["Heraka","Rani Gaidinliu"],["Mangarh 1913","Govind Guru"]]},
{t:"Festivals", era:["tl"], rows:[["Hornbill","Nagaland, 1–10 Dec"],["Wangala","Garo"],["Chapchar Kut","Mizo"],["Sekrenyi","Angami"],["Bhagoria","Bhil"],["Medaram","Koya"],["Sarhul","Jharkhand, spring"]]}
);
TILES.push(["15 Nov","Janjatiya Gaurav Divas","tl"],["30 June","Hul Diwas (1855)","tl"],["1 Dec","Hornbill Festival opens","tl"]);

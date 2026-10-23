/* Part 1 · R1 the big picture; R2 the Indus system; R3 the Ganga's source and the Yamuna; R4 the Ganga's tributaries and delta;
   R5 the Brahmaputra and the Barak (as of October 2026). Lengths are the commonly quoted round figures — sources differ a little. */
const R1 = [
  ["Ganga","Gangotri glacier (Gaumukh), Uttarakhand","It rises as the Bhagirathi and takes the name Ganga at Devprayag.","p"],
  ["Yamuna","Yamunotri glacier, Uttarakhand","On the Bandarpunch range; it joins the Ganga at Prayagraj.","p"],
  ["Indus","Near Lake Mansarovar, Tibet","Called Singi Khamban (the Lion's Mouth) in Tibet; it enters India in Ladakh.","p"],
  ["Sutlej","Rakshastal lake, Tibet","It enters India at Shipki La in Himachal Pradesh.","p"],
  ["Brahmaputra","Chemayungdung glacier, Tibet","Close to Mansarovar; called the Yarlung Tsangpo in Tibet.","p"],
  ["Godavari","Trimbakeshwar, Nashik (Maharashtra)","India's longest peninsular river.","p"],
  ["Krishna","Mahabaleshwar, Maharashtra","In the Western Ghats.","p"],
  ["Kaveri","Talakaveri, Kodagu (Karnataka)","In the Brahmagiri hills of the Western Ghats.","p"],
  ["Narmada","Amarkantak plateau, Madhya Pradesh","The Son also rises at Amarkantak.","p"],
  ["Mahanadi","Sihawa, Dhamtari (Chhattisgarh)","",""],
  ["Tapi","Multai, Betul (Madhya Pradesh)","Multai comes from Mul-tapi, 'the source of the Tapi'.",""],
  ["Luni","Naga hills near Ajmer (Rajasthan)","It never reaches the sea — it ends in the Rann of Kutch.",""],
  ["Pennar","Nandi hills, Karnataka","It flows east through Andhra Pradesh to the Bay of Bengal.",""]
];
const R1L = [
  ["Ganga","About 2,525 km","The longest river in India.","p"],
  ["Godavari","About 1,465 km","The longest peninsular river — 'Dakshin Ganga'.","p"],
  ["Krishna","About 1,400 km","",""],
  ["Yamuna","About 1,376 km","The longest tributary of the Ganga.",""],
  ["Narmada","About 1,312 km","The longest west-flowing river.","p"],
  ["Mahanadi","About 851 km","",""],
  ["Kaveri","About 800 km","",""],
  ["Tapi","About 724 km","",""]
];
const R2 = [
  ["Indus","Sindhu","The river that gave India its name.",""],
  ["Jhelum","Vitasta","It rises at Verinag and flows through Srinagar and Wular Lake.","p"],
  ["Chenab","Asikni","Formed where the Chandra and the Bhaga meet at Tandi (Himachal); also called Chandrabhaga.","p"],
  ["Ravi","Parushni","Also Iravati; it rises near the Rohtang Pass.","p"],
  ["Beas","Vipasha","It rises at Beas Kund near the Rohtang Pass and joins the Sutlej at Harike.","p"],
  ["Sutlej","Shutudri","Also Shatadru — the longest of Punjab's five rivers.","p"]
];
const R2P = [
  ["Leh","Indus","The Zanskar joins the Indus nearby, at Nimmu.",""],
  ["Srinagar","Jhelum","",""],
  ["Wular Lake","Jhelum","India's largest freshwater lake.","p"],
  ["Jammu","Tawi","The Tawi is a tributary of the Chenab.",""],
  ["Akhnoor","Chenab","",""],
  ["Chamba","Ravi","",""],
  ["Kullu and Manali","Beas","",""],
  ["Bilaspur (Himachal) and Gobind Sagar","Sutlej","",""],
  ["Ludhiana and Rupnagar","Sutlej","",""],
  ["Harike","Sutlej","Where the Beas joins the Sutlej; the Indira Gandhi Canal starts here.","p"]
];
const R3 = [
  ["Vishnuprayag","Dhauliganga","The first prayag downstream from Badrinath.",""],
  ["Nandprayag","Nandakini","",""],
  ["Karnaprayag","Pindar","The Pindar comes from the Pindari glacier.",""],
  ["Rudraprayag","Mandakini","The Mandakini comes down from Kedarnath.","p"],
  ["Devprayag","Bhagirathi","From here the river is called the Ganga.","p"]
];
const R3Y = [
  ["Tons","Bandarpunch range (Uttarakhand)","The largest tributary of the Yamuna.",""],
  ["Hindon","Upper Shivaliks near Saharanpur (Uttar Pradesh)","",""],
  ["Chambal","Janapav, near Mhow (Madhya Pradesh)","Famous for its ravines and gharials.","p"],
  ["Sindh","Malwa plateau, Vidisha (Madhya Pradesh)","",""],
  ["Betwa","Vindhyas, Raisen (Madhya Pradesh)","Ancient Vetravati; Orchha stands on it.",""],
  ["Ken","Kaimur hills (Madhya Pradesh)","It flows past Panna; the Ken–Betwa link starts here.",""]
];
const R3C = [
  ["Rishikesh and Haridwar","Ganga","At Haridwar the Ganga leaves the hills for the plains.","p"],
  ["Kanpur","Ganga","",""],
  ["Varanasi","Ganga","",""],
  ["Patna","Ganga","The Gandak and the Son join nearby.","p"],
  ["Bhagalpur","Ganga","The Vikramshila Gangetic Dolphin Sanctuary is here.",""],
  ["Delhi","Yamuna","","p"],
  ["Mathura and Agra","Yamuna","",""],
  ["Prayagraj","Ganga and Yamuna (Sangam)","The Triveni Sangam — with the unseen Saraswati.","p"],
  ["Kota","Chambal","",""],
  ["Orchha","Betwa","",""]
];
const R4 = [
  ["Ramganga","Near Kannauj","A left-bank tributary from the Kumaon hills; Corbett National Park is on it.",""],
  ["Gomti","Near Ghazipur","Left bank; Lucknow and Jaunpur stand on it.","p"],
  ["Ghaghara","Near Chhapra","Left bank; the Karnali in Nepal. Ayodhya stands on its Saryu stretch.","p"],
  ["Gandak","Hajipur (opposite Patna)","Left bank; the Narayani in Nepal.",""],
  ["Kosi","Near Kursela, Katihar","Left bank; the 'Sorrow of Bihar'.","p"],
  ["Son","Near Patna","Right bank; it rises at Amarkantak.","p"],
  ["Yamuna","Prayagraj","Right bank; the longest tributary.","p"],
  ["Mahananda","In Bangladesh","The last left-bank tributary.",""]
];
const R4N = [
  ["Sorrow of Bihar","Kosi","It keeps shifting its course and floods north Bihar.","p"],
  ["Sorrow of Bengal","Damodar","Tamed by the Damodar Valley Corporation (1948).","p"],
  ["Sorrow of Assam","Brahmaputra","Floods every monsoon.",""],
  ["Sorrow of Odisha (before Hirakud)","Mahanadi","",""],
  ["Dakshin Ganga (also Vriddha Ganga)","Godavari","The longest peninsular river.","p"],
  ["Biological desert (pollution)","Damodar","Coal mines and industry along it.",""],
  ["Lifeline of Madhya Pradesh","Narmada","",""],
  ["Sorrow of China","Huang He","Not an Indian river — a common option.",""]
];
const R5 = [
  ["Tibet","Yarlung Tsangpo","It flows east for about 1,600 km, then turns round Namcha Barwa.","p"],
  ["Arunachal Pradesh","Siang (Dihang)","It cuts a deep gorge into India.","p"],
  ["Assam, after the Dibang and Lohit join near Sadiya","Brahmaputra","",""],
  ["Bangladesh","Jamuna","",""],
  ["Bangladesh, after it meets the Ganga (Padma) at Goalundo","Padma","",""],
  ["The last stretch to the Bay of Bengal","Meghna","",""]
];
const R5T = [
  ["Subansiri","Arunachal Pradesh","The largest tributary; the Lower Subansiri project is on it.","p"],
  ["Kameng (Jia Bhareli)","Arunachal Pradesh","",""],
  ["Manas","Bhutan","Manas National Park is on it.",""],
  ["Sankosh","Bhutan","",""],
  ["Teesta","Sikkim","It joins the Brahmaputra in Bangladesh.","p"],
  ["Dhansiri","Nagaland","A south-bank tributary.",""],
  ["Kopili","Meghalaya","A south-bank tributary.",""]
];
const R5P = [
  ["Majuli","Brahmaputra","The world's largest river island; a district since 2016.","p"],
  ["Umananda","Brahmaputra","Among the smallest inhabited river islands, at Guwahati.",""],
  ["Guwahati, Tezpur and Dibrugarh","Brahmaputra","","p"],
  ["Bogibeel Bridge","Brahmaputra","India's longest rail-cum-road bridge (2018), near Dibrugarh.","p"],
  ["Bhupen Hazarika Setu (Dhola–Sadiya)","Lohit","A long road bridge (2017) in Assam.","p"],
  ["Silchar","Barak","",""],
  ["Kaziranga National Park","Brahmaputra","On the south bank.",""]
];

LESSONS.push(
{id:"R1", heat:3, title:"India's rivers: the big picture", hi:"भारत की नदियाँ: एक नज़र में", blocks:[
  {k:"hot", h:"Asked again and again: <b>where each river rises</b> (Gangotri, Yamunotri, Trimbakeshwar, Mahabaleshwar, Talakaveri, Amarkantak), the <b>longest rivers</b> (Ganga in India, Godavari in the peninsula, Narmada flowing west), and the difference between <b>Himalayan and peninsular</b> rivers."},
  {k:"story", h:"<p>India's rivers come from two very different homes. The <b>Himalayan rivers</b> — the Indus, the Ganga and the Brahmaputra with their tributaries — are fed by snow and rain, so they flow all year. They are young: they cut deep gorges, carry huge loads of silt and keep changing course on the plains.</p><p>The <b>peninsular rivers</b> are far older and are fed only by the monsoon. Most rise in the <b>Western Ghats</b> and run <b>east</b> to the Bay of Bengal — the Mahanadi, Godavari, Krishna and Kaveri build big deltas. Two big ones, the <b>Narmada</b> and the <b>Tapi</b>, run <b>west</b> through rift valleys and end in estuaries. About three-quarters of India drains into the Bay of Bengal.</p>"},
  {k:"table", title:"Where the rivers rise", head:["River","Source","Note"], rows: R1.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Himalayan and peninsular rivers", head:["","Himalayan rivers","Peninsular rivers"], rows:[
    ["Water","All year — snow and rain (perennial)","Mostly monsoon rain (seasonal)"],
    ["Age","Young","Very old"],
    ["Valleys","Deep gorges, V-shaped","Broad and shallow"],
    ["Course","Meanders; shifts on the plains","Fixed courses"],
    ["Mouth","Large deltas (Ganga–Brahmaputra)","Deltas on the east coast, estuaries on the west"],
    ["Examples","Indus, Ganga, Brahmaputra","Godavari, Krishna, Kaveri, Narmada, Tapi"]]},
  {k:"table", title:"The longest rivers", head:["River","Length","Note"], rows: R1L.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"The big east-flowing four, north to south — <b>“Ma-Go-Kri-Ka”</b>: <b>Ma</b>hanadi, <b>Go</b>davari, <b>Kri</b>shna, <b>Ka</b>veri. The two west-flowers in rift valleys — <b>“NT”</b>, like a nickname: <b>N</b>armada and <b>T</b>api."},
  {k:"trap", h:"<b>Godavari</b>, not Krishna, is the longest peninsular river. The <b>Brahmaputra</b> is longer than the Ganga in total, but most of it flows in Tibet — the longest river <i>within India</i> is the <b>Ganga</b>. The Narmada and Son both rise at <b>Amarkantak</b> but flow opposite ways."},
  {k:"facts", title:"Drainage at a glance", rows:[
    ["Largest basin","Ganga — about a quarter of India's area"],
    ["Largest peninsular basin","Godavari — about a tenth of India"],
    ["Bay of Bengal vs Arabian Sea","Roughly three-quarters of the land drains east into the Bay of Bengal"],
    ["Inland drainage","The Luni (into the Rann of Kutch) and the Ghaggar (dies in the Thar)"],
    ["Antecedent rivers","Indus, Sutlej, Brahmaputra — older than the Himalaya, they cut gorges as it rose"]]}
], sum:["Himalayan rivers flow all year; peninsular rivers depend on the monsoon.","Ganga (2,525 km) is the longest in India; Godavari (1,465 km) the longest peninsular river.","Ganga rises at Gangotri (Gaumukh), Yamuna at Yamunotri, Godavari at Trimbakeshwar, Krishna at Mahabaleshwar, Kaveri at Talakaveri.","Narmada and Son rise at Amarkantak; Narmada and Tapi flow west.","About three-quarters of India drains into the Bay of Bengal."]},

{id:"R2", heat:3, title:"The Indus system", hi:"सिंधु नदी तंत्र", blocks:[
  {k:"hot", h:"Most asked: the <b>Vedic names</b> (Vitasta, Asikni, Parushni, Vipasha, Shutudri), the <b>Indus Waters Treaty (1960)</b> and who got which rivers, the <b>Wular Lake</b> on the Jhelum, and <b>Harike</b>, where the Beas meets the Sutlej."},
  {k:"story", h:"<p>The <b>Indus</b> rises near Lake Mansarovar in Tibet, flows north-west through <b>Ladakh</b> (past Leh), cuts a deep gorge round the Nanga Parbat massif and then turns south through Pakistan to the Arabian Sea near Karachi. In Ladakh the <b>Zanskar</b> and the <b>Shyok</b> join it.</p><p>Five rivers give <b>Punjab</b> ('five waters') its name: the <b>Jhelum, Chenab, Ravi, Beas and Sutlej</b>. In 1960 the <b>Indus Waters Treaty</b>, brokered by the <b>World Bank</b>, gave India the three eastern rivers and Pakistan the three western ones. India put the treaty <b>in abeyance in April 2025</b>, after the Pahalgam attack.</p>"},
  {k:"table", title:"The five rivers of Punjab and their Vedic names", head:["River","Vedic name","Note"], rows: R2.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Places on the Indus rivers", head:["Place","River","Note"], rows: R2P.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"The Indus Waters Treaty", rows:[
    ["Signed","19 September 1960, Karachi — by Jawaharlal Nehru and Ayub Khan"],
    ["Broker","The World Bank"],
    ["Eastern rivers — India","Ravi, Beas, Sutlej"],
    ["Western rivers — Pakistan","Indus, Jhelum, Chenab (India may build run-of-river power projects on them)"],
    ["Body","Permanent Indus Commission"],
    ["2025","India put the treaty in abeyance (April 2025) after the Pahalgam terror attack"]]},
  {k:"trick", h:"West to east across Punjab — <b>“J C R B S”</b>, read as <b>“Just Call Ravi’s Big Sister”</b>: <b>J</b>helum, <b>C</b>henab, <b>R</b>avi, <b>B</b>eas, <b>S</b>utlej. India got the last three — the <b>R-B-S</b> (eastern) rivers."},
  {k:"trap", h:"The <b>Chenab</b> is formed by the <b>Chandra and Bhaga</b> — not the Beas. The <b>Beas</b> lies wholly in India and joins the Sutlej at <b>Harike</b>. <b>Wular</b> (on the Jhelum) is the largest freshwater lake; <b>Dal</b> is the famous lake of Srinagar."}
], sum:["The Indus rises near Mansarovar and enters India in Ladakh; the Zanskar joins near Nimmu.","Vedic names: Jhelum–Vitasta, Chenab–Asikni, Ravi–Parushni, Beas–Vipasha, Sutlej–Shutudri.","The Chenab is formed by the Chandra and Bhaga; the Beas joins the Sutlej at Harike.","Indus Waters Treaty, 1960 (World Bank): eastern rivers to India, western to Pakistan; in abeyance since April 2025.","Wular Lake on the Jhelum is India's largest freshwater lake."]},

{id:"R3", heat:3, title:"The Ganga's source and the Yamuna", hi:"गंगा का उद्गम और यमुना", blocks:[
  {k:"hot", h:"Most asked: the <b>Bhagirathi and Alaknanda meet at Devprayag</b>, the <b>Panch Prayag</b>, the <b>Triveni Sangam</b> at Prayagraj, the <b>Chambal</b> (ravines, gharials) and which city stands on which river."},
  {k:"story", h:"<p>The Ganga is born as the <b>Bhagirathi</b> at <b>Gaumukh</b>, the snout of the Gangotri glacier. The <b>Alaknanda</b> comes down from near Badrinath, collecting four rivers at four 'prayags' (confluences). At the fifth, <b>Devprayag</b>, the Bhagirathi joins it and the river becomes the <b>Ganga</b>. It enters the plains at <b>Haridwar</b>.</p><p>The <b>Yamuna</b> rises at <b>Yamunotri</b>, flows past Delhi, Mathura and Agra, and joins the Ganga at the <b>Triveni Sangam</b> in Prayagraj. From the south it collects rivers of the Malwa plateau and Bundelkhand: the <b>Chambal</b>, <b>Sindh</b>, <b>Betwa</b> and <b>Ken</b>.</p>"},
  {k:"table", title:"The Panch Prayag", head:["Prayag","River that joins the Alaknanda","Note"], rows: R3.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Tributaries of the Yamuna", head:["Tributary","Rises in","Note"], rows: R3Y.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Cities on the Ganga and Yamuna", head:["City","River","Note"], rows: R3C.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"The Chambal", rows:[
    ["Known for","Deep ravines (badlands) cut by gully erosion"],
    ["Wildlife","National Chambal Sanctuary (Rajasthan, MP, UP) — gharials, Ganges river dolphins"],
    ["Dams","Gandhi Sagar (MP), Rana Pratap Sagar (Rawatbhata), Jawahar Sagar, Kota Barrage (Rajasthan)"]]},
  {k:"trick", h:"Panch Prayag downstream — <b>“Vishnu Nand Karna Rudra Dev”</b>: <b>V</b>ishnu-, <b>N</b>and-, <b>K</b>arna-, <b>R</b>udra-, <b>D</b>evprayag. Their rivers in the same order: <b>“Dhauli, Nanda, Pindar, Manda, Bhagi”</b>."},
  {k:"trap", h:"The <b>Ganga</b> gets its name at <b>Devprayag</b>, not Gangotri or Haridwar. The <b>Tons</b> — not the Chambal — is the Yamuna's largest tributary. <b>Tehri</b> dam is on the <b>Bhagirathi</b>, not the Alaknanda."}
], sum:["Bhagirathi (from Gaumukh) + Alaknanda meet at Devprayag to form the Ganga.","Panch Prayag: Vishnu (Dhauliganga), Nand (Nandakini), Karna (Pindar), Rudra (Mandakini), Dev (Bhagirathi).","The Yamuna rises at Yamunotri and joins the Ganga at Prayagraj (Triveni Sangam).","Yamuna's tributaries: Tons (largest), Hindon, Chambal, Sindh, Betwa, Ken.","The Chambal is known for its ravines and the National Chambal Sanctuary."]},

{id:"R4", heat:3, title:"The Ganga's tributaries and delta", hi:"गंगा की सहायक नदियाँ और डेल्टा", blocks:[
  {k:"hot", h:"Most asked: <b>left- and right-bank tributaries</b> (Gomti, Ghaghara, Gandak, Kosi vs Yamuna, Son), the <b>'sorrow' rivers</b> (Kosi — Bihar, Damodar — Bengal), <b>Farakka</b> and the Hooghly, and the <b>Ganga as the National River</b>."},
  {k:"story", h:"<p>On the plains, rivers from the Himalaya join the Ganga from the <b>left (north)</b>: the Ramganga, <b>Gomti</b>, <b>Ghaghara</b>, <b>Gandak</b>, <b>Kosi</b> and Mahananda. From the <b>right (south)</b> come the <b>Yamuna</b> and the <b>Son</b> from the old plateau.</p><p>At <b>Farakka</b> (West Bengal) a barrage sends part of the water into the <b>Bhagirathi–Hooghly</b>, which flows past <b>Kolkata</b> to the sea and is joined by the <b>Damodar</b>. The main stream enters Bangladesh as the <b>Padma</b>, meets the Brahmaputra (Jamuna) and then the Meghna, building the <b>Ganga–Brahmaputra (Sundarbans) delta</b> — the largest delta in the world.</p>"},
  {k:"table", title:"Where the tributaries join the Ganga", head:["Tributary","Joins the Ganga","Note"], rows: R4.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Nicknames of rivers", head:["Nickname","River","Note"], rows: R4N.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"The delta and the National River", rows:[
    ["Farakka Barrage","1975 — feeds the Bhagirathi–Hooghly to keep Kolkata port alive"],
    ["Distributaries","Bhagirathi–Hooghly (India) and Padma (Bangladesh)"],
    ["Delta","Ganga–Brahmaputra (Sundarbans) — the largest delta in the world"],
    ["National River","Ganga — declared in 2008"],
    ["National Aquatic Animal","Ganges river dolphin — 2009"],
    ["National Waterway 1","Ganga–Bhagirathi–Hooghly, Prayagraj to Haldia — the longest national waterway"],
    ["Clean-up","Namami Gange (2014), run by the National Mission for Clean Ganga"]]},
  {k:"trick", h:"Left-bank tributaries west to east — <b>“Ram Gomti Ghar Gandak Kosi”</b>: <b>Ram</b>ganga, <b>Gomti</b>, <b>Ghag</b>hara, <b>Gandak</b>, <b>Kosi</b>. Right bank — just two big ones: <b>Yamuna and Son</b>."},
  {k:"trap", h:"The <b>Damodar</b> joins the <b>Hooghly</b>, not the main Ganga. The <b>Son</b> is a <b>right</b>-bank tributary although it joins near Patna. 'Sorrow of Bihar' is the <b>Kosi</b>; 'Sorrow of Bengal' is the <b>Damodar</b>."}
], sum:["Left-bank: Ramganga, Gomti, Ghaghara, Gandak, Kosi, Mahananda; right-bank: Yamuna, Son.","Kosi — Sorrow of Bihar; Damodar — Sorrow of Bengal (Damodar Valley Corporation, 1948).","Farakka Barrage (1975) feeds the Bhagirathi–Hooghly; the main stream becomes the Padma in Bangladesh.","The Ganga–Brahmaputra (Sundarbans) delta is the world's largest.","Ganga: National River (2008); Ganges dolphin: National Aquatic Animal (2009); NW-1 Prayagraj–Haldia."]},

{id:"R5", heat:2, title:"The Brahmaputra and the Barak", hi:"ब्रह्मपुत्र और बराक", blocks:[
  {k:"hot", h:"Most asked: the <b>names along the way</b> (Tsangpo → Siang/Dihang → Brahmaputra → Jamuna), <b>Majuli</b> (largest river island), its <b>tributaries</b> (Subansiri, Manas, Teesta), and the <b>Bogibeel</b> and <b>Dhola–Sadiya</b> bridges."},
  {k:"story", h:"<p>The Brahmaputra rises near Mansarovar as the <b>Yarlung Tsangpo</b> and flows east across Tibet. Near <b>Namcha Barwa</b> it takes a sharp U-turn and plunges through one of the world's deepest gorges into Arunachal Pradesh as the <b>Siang (Dihang)</b>. Near Sadiya the <b>Dibang</b> and <b>Lohit</b> join it and it becomes the <b>Brahmaputra</b>.</p><p>In the Assam valley it is wide and <b>braided</b>, full of sandbars and islands like <b>Majuli</b>. It floods every monsoon. It enters Bangladesh as the <b>Jamuna</b>, joins the Padma and the Meghna, and reaches the Bay of Bengal. Further south, the <b>Barak</b> rises in the Manipur hills, flows past <b>Silchar</b> and also ends in the Meghna.</p>"},
  {k:"table", title:"One river, many names", head:["Where","Name","Note"], rows: R5.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Tributaries of the Brahmaputra", head:["Tributary","Comes from","Note"], rows: R5T.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"On the Brahmaputra", head:["Place","River","Note"], rows: R5P.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Brahmaputra facts", rows:[
    ["A 'male' river","Named as the son of Brahma"],
    ["Channel in Assam","Braided — many channels and sandbars"],
    ["National Waterway 2","Brahmaputra, Dhubri to Sadiya"],
    ["Barak","Rises in the Manipur hills; flows past Silchar; in Bangladesh it splits into the Surma and Kushiyara and joins the Meghna"]]},
  {k:"trick", h:"The name chain — <b>“Tsang-Siang-Brahma-Jamuna-Padma-Meghna”</b>: Tibet, Arunachal, Assam, then three names in Bangladesh."},
  {k:"trap", h:"<b>Teesta</b> joins the Brahmaputra in <b>Bangladesh</b>, not in India. The <b>Dhola–Sadiya</b> (Bhupen Hazarika) bridge is over the <b>Lohit</b>; <b>Bogibeel</b> is over the Brahmaputra. In Bangladesh the Brahmaputra is the <b>Jamuna</b> — not the Yamuna of India."}
], sum:["Yarlung Tsangpo (Tibet) → Siang/Dihang (Arunachal) → Brahmaputra (Assam) → Jamuna (Bangladesh).","It turns round Namcha Barwa; the Dibang and Lohit join near Sadiya.","Majuli is the world's largest river island (district since 2016).","Tributaries: Subansiri (largest), Kameng, Manas, Sankosh, Teesta; Dhansiri and Kopili from the south.","Bogibeel (2018) — longest rail-cum-road bridge; Dhola–Sadiya over the Lohit (2017)."]}
);

pairQs("R1", R1, { q: t => `Where does the ${t} rise?`, rq: a => `Which river rises here: ${a}?` });
pairQs("R1", R1L, { q: t => `Roughly how long is the ${t}?` });
pairQs("R2", R2, { q: t => `What was the Vedic name of the ${t}?`, rq: a => `Which river was called ${a} in the Vedas?` });
pairQs("R2", R2P, { q: t => `${t} — on which river?`, extra: ["Zanskar"] });
pairQs("R3", R3, { q: t => `At ${t}, which river joins the Alaknanda?`, rq: a => `Where does the ${a} join the Alaknanda?` });
pairQs("R3", R3Y, { q: t => `Where does the ${t} rise?`, rq: a => `Which Yamuna tributary rises here: ${a}?` });
pairQs("R3", R3C, { q: t => `${t} — on which river?`, extra: ["Gomti","Son"] });
pairQs("R4", R4, { q: t => `Where does the ${t} join the Ganga?`, rq: a => `Which tributary joins the Ganga here: ${a}?` });
pairQs("R4", R4N, { q: t => `Which river is called the '${t}'?`, extra: ["Gandak","Teesta"] });
pairQs("R5", R5, { q: t => `What is the Brahmaputra called in ${t}?`, rq: a => `Where is the Brahmaputra called the ${a}?` });
pairQs("R5", R5T, { q: t => `The ${t} comes into the Brahmaputra from:`, extra: ["Tibet","Mizoram"] });
pairQs("R5", R5P, { q: t => `${t} — which river?`, extra: ["Teesta","Subansiri"] });

QB.push(
["R1","Which is the longest river flowing within India?",["Ganga","Godavari","Brahmaputra","Indus"],"The Brahmaputra is longer in all, but most of it is in Tibet.","p"],
["R1","Which is the longest peninsular river?",["Godavari","Krishna","Kaveri","Narmada"],"About 1,465 km — called Dakshin Ganga.","p"],
["R1","Which of these rivers flows west into the Arabian Sea?",["Narmada","Mahanadi","Godavari","Krishna"],"Narmada and Tapi are the two big west-flowing rivers.","p"],
["R1","Which two rivers rise at Amarkantak?",["Narmada and Son","Narmada and Tapi","Son and Mahanadi","Godavari and Krishna"],"They flow in opposite directions.","p"],
["R1","Which river basin is the largest in India?",["Ganga","Godavari","Indus","Brahmaputra"],"About a quarter of India's area.",""],
["R1","Rivers older than the Himalaya, which kept cutting gorges as the mountains rose, are called:",["Antecedent rivers","Consequent rivers","Subsequent rivers","Superimposed rivers"],"The Indus, Sutlej and Brahmaputra.",""],
["R2","The Indus Waters Treaty was signed in:",["1960","1947","1972","1950"],"19 September 1960, at Karachi.","p"],
["R2","Who brokered the Indus Waters Treaty?",["The World Bank","The United Nations","The IMF","The Commonwealth"],"The Indus Waters Treaty (1960) was signed by Nehru and Ayub Khan, with the World Bank as broker and signatory.",""],
["R2","Under the Indus Waters Treaty, India got the waters of:",["Ravi, Beas and Sutlej","Indus, Jhelum and Chenab","Jhelum, Ravi and Beas","Chenab, Ravi and Sutlej"],"The eastern rivers.","p"],
["R2","The Chenab is formed by which two streams?",["Chandra and Bhaga","Alaknanda and Bhagirathi","Dibang and Lohit","Tunga and Bhadra"],"They meet at Tandi in Lahaul.","p"],
["R2","Which river joins the Indus near Nimmu in Ladakh?",["Zanskar","Shyok","Gilgit","Jhelum"],"The Zanskar meets the Indus near Nimmu, below Leh.",""],
["R3","The Bhagirathi and the Alaknanda meet at:",["Devprayag","Rudraprayag","Haridwar","Karnaprayag"],"From here the river is called the Ganga.","p"],
["R3","Gaumukh is the snout of which glacier?",["Gangotri","Yamunotri","Siachen","Zemu"],"The Bhagirathi rises here.","p"],
["R3","Tehri Dam is built on the:",["Bhagirathi","Alaknanda","Yamuna","Mandakini"],"India's highest dam.","p"],
["R3","The Ganga enters the plains at:",["Haridwar","Rishikesh","Devprayag","Kanpur"],"The Ganga leaves the hills and enters the plains at Haridwar.",""],
["R4","Which of these is a right-bank tributary of the Ganga?",["Son","Gomti","Kosi","Gandak"],"The Yamuna and the Son come from the south.","p"],
["R4","The Damodar Valley Corporation was set up in:",["1948","1956","1951","1962"],"Modelled on the Tennessee Valley Authority (USA).",""],
["R4","The Farakka Barrage is in:",["West Bengal","Bihar","Jharkhand","Uttar Pradesh"],"It was completed in 1975.","p"],
["R4","National Waterway 1 runs between:",["Prayagraj and Haldia","Sadiya and Dhubri","Kollam and Kottapuram","Patna and Kolkata"],"On the Ganga–Bhagirathi–Hooghly.","p"],
["R4","When was the Ganga declared India's National River?",["2008","2014","2009","2005"],"The Ganges dolphin became the National Aquatic Animal in 2009.",""],
["R5","Near which peak does the Tsangpo take its U-turn into India?",["Namcha Barwa","Kangchenjunga","Nanda Devi","Gurla Mandhata"],"The Tsangpo makes a U-turn around Namcha Barwa and enters Arunachal Pradesh as the Siang (Dihang).",""],
["R5","Which two rivers join the Siang near Sadiya to form the Brahmaputra?",["Dibang and Lohit","Subansiri and Manas","Teesta and Sankosh","Kameng and Dhansiri"],"Near Sadiya the Siang is joined by the Dibang and the Lohit, and the combined river is the Brahmaputra.","p"],
["R5","National Waterway 2 is on the:",["Brahmaputra","Ganga","Barak","Godavari"],"Dhubri to Sadiya.",""],
["R5","Silchar stands on which river?",["Barak","Brahmaputra","Teesta","Lohit"],"Silchar lies on the Barak in southern Assam.",""]
);

LASTMOMENT.push(
{t:"Where rivers rise", era:["rv"], rows:[["Ganga","Gangotri (Gaumukh)"],["Yamuna","Yamunotri"],["Godavari","Trimbakeshwar"],["Krishna","Mahabaleshwar"],["Kaveri","Talakaveri"],["Narmada, Son","Amarkantak"],["Tapi","Multai"],["Mahanadi","Sihawa"]]},
{t:"Brahmaputra's names", era:["rv"], rows:[["Tibet","Yarlung Tsangpo"],["Arunachal","Siang / Dihang"],["Assam","Brahmaputra"],["Bangladesh","Jamuna"]]}
);
TILES.push(["2,525 km","Ganga — longest in India","rv"],["1,465 km","Godavari — longest peninsular","rv"],["1960","Indus Waters Treaty","rv"],["5","Panch Prayag","rv"],["2008","Ganga named National River","rv"]);

/* Part 2 · G5 Himalayan rivers; G6 Peninsular rivers; G7 cities, dams and river projects; G8 lakes and waterfalls. */
const G5O = [
  ["Indus","Bokhar Chu glacier, near Mansarovar (Tibet)","Enters India in Ladakh; flows to the Arabian Sea through Pakistan.","p"],
  ["Sutlej","Rakas Tal, near Mansarovar (Tibet)","Enters India at Shipki La.","p"],
  ["Brahmaputra","Chemayungdung glacier (Tibet)","Called the Tsangpo in Tibet.","p"],
  ["Bhagirathi (Ganga)","Gangotri glacier (Gaumukh)","Becomes the Ganga at Devprayag after meeting the Alaknanda.","p"],
  ["Alaknanda","Satopanth glacier","Flows past Badrinath.",""],
  ["Yamuna","Yamunotri glacier","Longest tributary of the Ganga.","p"],
  ["Beas","Beas Kund, near Rohtang Pass","Joins the Sutlej at Harike.","p"],
  ["Ravi","Kullu hills, west of Rohtang Pass","",""],
  ["Chenab","Chandra and Bhaga meet at Tandi (Himachal Pradesh)","Largest of the Indus tributaries in India.","p"],
  ["Jhelum","Verinag spring (Kashmir)","Flows through Wular lake and Srinagar.","p"],
  ["Mandakini","Chorabari glacier, near Kedarnath","Joins the Alaknanda at Rudraprayag.",""],
  ["Ghaghara","Mapchachungo glacier (Tibet)","",""]
];
const G5T = [
  ["Son","Ganga","Largest right-bank (southern) tributary of the Ganga.","p"],
  ["Gomti","Ganga","",""],
  ["Ghaghara","Ganga","",""],
  ["Gandak","Ganga","Joins near Patna.",""],
  ["Kosi","Ganga","'Sorrow of Bihar'.","p"],
  ["Ramganga","Ganga","",""],
  ["Chambal","Yamuna","Flows through badlands (ravines).","p"],
  ["Betwa","Yamuna","",""],
  ["Ken","Yamuna","",""],
  ["Hindon","Yamuna","",""],
  ["Damodar","Hooghly","'Sorrow of Bengal'.","p"],
  ["Teesta","Brahmaputra","",""],
  ["Subansiri","Brahmaputra","",""],
  ["Manas","Brahmaputra","",""],
  ["Lohit","Brahmaputra","",""],
  ["Zaskar","Indus","Joins near Leh.",""],
  ["Shyok","Indus","",""],
  ["Jhelum","Chenab","Joins in Pakistan.",""],
  ["Ravi","Chenab","",""],
  ["Beas","Sutlej","At Harike (Punjab).","p"]
];
const G5Y = [
  ["Vishnuprayag","Dhauliganga","",""],
  ["Nandprayag","Nandakini","",""],
  ["Karnaprayag","Pindar","",""],
  ["Rudraprayag","Mandakini","","p"],
  ["Devprayag","Bhagirathi","Here the river takes the name Ganga.","p"]
];
const G6O = [
  ["Narmada","Amarkantak (Madhya Pradesh)","Longest west-flowing river; flows in a rift valley.","p"],
  ["Mahanadi","Sihawa (Chhattisgarh)","","p"],
  ["Godavari","Trimbakeshwar, Nashik (Maharashtra)","Longest peninsular river (about 1,465 km).","p"],
  ["Krishna","Mahabaleshwar (Maharashtra)","","p"],
  ["Kaveri","Talakaveri, Brahmagiri hills (Karnataka)","","p"],
  ["Tapi","Multai, Betul (Madhya Pradesh)","West-flowing, in a rift valley.","p"],
  ["Chambal","Janapav hills, near Mhow (Madhya Pradesh)","",""],
  ["Luni","Near Pushkar (Rajasthan)","Ends in the Rann of Kutch; salty after Balotra.","p"],
  ["Sabarmati","Aravalli hills (Rajasthan)","Flows past Ahmedabad.",""],
  ["Mahi","Vindhya range (Madhya Pradesh)","Crosses the Tropic of Cancer twice.","p"],
  ["Damodar","Chotanagpur plateau (Jharkhand)","",""],
  ["Subarnarekha","Near Ranchi (Jharkhand)","",""],
  ["Pennar","Nandi hills (Karnataka)","",""],
  ["Tungabhadra","Koodli, where the Tunga and Bhadra meet (Karnataka)","",""]
];
const G6T = [
  ["Indravati","Godavari","Chitrakote falls is on it.","p"],
  ["Manjira","Godavari","",""],
  ["Pranhita","Godavari","Brings the waters of the Wainganga and Wardha.",""],
  ["Sabari","Godavari","",""],
  ["Tungabhadra","Krishna","Largest tributary of the Krishna.","p"],
  ["Bhima","Krishna","",""],
  ["Koyna","Krishna","",""],
  ["Musi","Krishna","Hyderabad stands on it.",""],
  ["Ghataprabha","Krishna","",""],
  ["Kabini","Kaveri","",""],
  ["Bhavani","Kaveri","",""],
  ["Hemavati","Kaveri","",""],
  ["Amaravati","Kaveri","",""],
  ["Hasdeo","Mahanadi","",""],
  ["Ib","Mahanadi","",""],
  ["Seonath","Mahanadi","",""],
  ["Tel","Mahanadi","",""],
  ["Barakar","Damodar","",""]
];
const G6N = [
  ["Vitasta","Jhelum","Vedic name.","p"],
  ["Asikni","Chenab","Vedic name.","p"],
  ["Parushni","Ravi","Vedic name.","p"],
  ["Vipasha","Beas","Vedic name.","p"],
  ["Shutudri","Sutlej","Vedic name.","p"],
  ["Sindhu","Indus","",""],
  ["Tsangpo","Brahmaputra","Name in Tibet.","p"],
  ["Dihang (Siang)","Brahmaputra","Name in Arunachal Pradesh.",""],
  ["Jamuna (in Bangladesh)","Brahmaputra","",""],
  ["Padma","Ganga","Name in Bangladesh.","p"],
  ["Dakshin Ganga (Vriddha Ganga)","Godavari","","p"],
  ["Sorrow of Bihar","Kosi","Changes its course often.","p"],
  ["Sorrow of Bengal","Damodar","Floods; tamed by the DVC.","p"]
];
const G7C = [
  ["Srinagar","Jhelum","","p"],["Leh","Indus","","p"],["Jammu","Tawi","",""],
  ["Ludhiana","Sutlej","",""],
  ["Delhi","Yamuna","","p"],["Agra","Yamuna","","p"],["Mathura","Yamuna","",""],
  ["Haridwar","Ganga","","p"],["Kanpur","Ganga","","p"],["Varanasi","Ganga","","p"],["Patna","Ganga","","p"],
  ["Lucknow","Gomti","","p"],["Ayodhya","Sarayu (Ghaghara)","","p"],
  ["Kolkata","Hooghly","","p"],["Guwahati","Brahmaputra","","p"],
  ["Jabalpur","Narmada","","p"],["Bharuch","Narmada","",""],["Surat","Tapi","","p"],["Ahmedabad","Sabarmati","","p"],["Vadodara","Vishwamitri","",""],
  ["Kota","Chambal","","p"],["Ujjain","Kshipra","","p"],
  ["Nashik","Godavari","","p"],
  ["Vijayawada","Krishna","","p"],["Hyderabad","Musi","","p"],["Kurnool","Tungabhadra","",""],
  ["Tiruchirappalli","Kaveri","","p"],
  ["Cuttack","Mahanadi","","p"],
  ["Jamshedpur","Subarnarekha","",""],["Madurai","Vaigai","","p"],["Pune","Mula–Mutha","",""],["Panaji","Mandovi","",""],
];
const G7D = [
  ["Bhakra","Sutlej","Himachal Pradesh","p"],
  ["Nathpa Jhakri","Sutlej","Himachal Pradesh",""],
  ["Pong","Beas","Himachal Pradesh",""],
  ["Ranjit Sagar (Thein)","Ravi","Punjab",""],
  ["Salal","Chenab","Jammu and Kashmir","p"],
  ["Uri","Jhelum","Jammu and Kashmir",""],
  ["Tehri","Bhagirathi","Uttarakhand","p"],
  ["Farakka (barrage)","Ganga","West Bengal","p"],
  ["Bansagar","Son","Madhya Pradesh",""],
  ["Matatila","Betwa","Uttar Pradesh",""],
  ["Gandhi Sagar","Chambal","Madhya Pradesh","p"],
  ["Rana Pratap Sagar","Chambal","Rajasthan",""],
  ["Mahi Bajaj Sagar","Mahi","Rajasthan",""],
  ["Panchet","Damodar","Jharkhand",""],
  ["Maithon","Barakar","Jharkhand",""],
  ["Sardar Sarovar","Narmada","Gujarat","p"],
  ["Indira Sagar","Narmada","Madhya Pradesh","p"],
  ["Ukai","Tapi","Gujarat","p"],
  ["Hirakud","Mahanadi","Odisha","p"],
  ["Polavaram","Godavari","Andhra Pradesh",""],
  ["Kaleshwaram","Godavari","Telangana",""],
  ["Nagarjuna Sagar","Krishna","Telangana","p"],
  ["Srisailam","Krishna","Andhra Pradesh",""],
  ["Almatti","Krishna","Karnataka",""],
  ["Krishna Raja Sagar","Kaveri","Karnataka","p"],
  ["Mettur (Stanley Reservoir)","Kaveri","Tamil Nadu","p"],
  ["Kallanai (Grand Anicut)","Kaveri","Tamil Nadu",""],
  ["Idukki","Periyar","Kerala","p"],
  ["Mullaperiyar","Periyar","Kerala",""],
];
const G8L = [
  ["Wular","Jammu and Kashmir","Freshwater lake","India's largest freshwater lake; the Jhelum flows through it.","p"],
  ["Dal","Jammu and Kashmir","Freshwater lake","Houseboats and floating gardens of Srinagar.","p"],
  ["Sambhar","Rajasthan","Salt lake","India's largest inland salt lake.","p"],
  ["Didwana","Rajasthan","Salt lake","",""],
  ["Pangong Tso","Ladakh","Salt lake","About two-thirds lies in Tibet (China).","p"],
  ["Chilika","Odisha","Brackish lagoon","India's largest coastal (brackish) lagoon.","p"],
  ["Pulicat","Andhra Pradesh","Brackish lagoon","Second largest lagoon; Sriharikota lies across it.","p"],
  ["Vembanad","Kerala","Brackish lagoon","India's longest lake; Nehru Trophy boat race.","p"],
  ["Kolleru","Andhra Pradesh","Freshwater lake","Between the Godavari and Krishna deltas.","p"],
  ["Loktak","Manipur","Freshwater lake","Largest freshwater lake of the north-east; floating phumdis.","p"],
  ["Lonar","Maharashtra","Crater lake","Made by a meteorite strike.","p"],
  ["Kanwar (Kabar Taal)","Bihar","Oxbow lake","Asia's largest freshwater oxbow lake.","p"],
  ["Roopkund","Uttarakhand","Glacial lake","'Skeleton lake'.","p"],
  ["Gurudongmar","Sikkim","Glacial lake","One of the highest lakes in India.",""],
  ["Hussain Sagar","Telangana","Artificial lake","Hyderabad; Buddha statue in the middle.","p"],
  ["Bhojtal (Upper Lake)","Madhya Pradesh","Artificial lake","Bhopal.",""],
  ["Gobind Sagar","Himachal Pradesh","Artificial lake","Reservoir of the Bhakra dam.","p"],
  ["Pichola","Rajasthan","Artificial lake","Udaipur.",""],
  ["Naini","Uttarakhand","Freshwater lake","Nainital.",""],
  ["Pushkar","Rajasthan","Freshwater lake","Sacred lake near Ajmer.",""]
];
const G8F = [
  ["Jog (Gersoppa)","Karnataka","Sharavati","p"],
  ["Shivanasamudra","Karnataka","Kaveri","p"],
  ["Kunchikal","Karnataka","Varahi","p"],
  ["Hogenakkal","Tamil Nadu","Kaveri","p"],
  ["Courtallam","Tamil Nadu","Chittar",""],
  ["Athirappilly","Kerala","Chalakudy","p"],
  ["Dudhsagar","Goa","Mandovi","p"],
  ["Dhuandhar","Madhya Pradesh","Narmada","p"],
  ["Kapildhara","Madhya Pradesh","Narmada",""],
  ["Chachai","Madhya Pradesh","Bihad",""],
  ["Chitrakote","Chhattisgarh","Indravati","p"],
  ["Tirathgarh","Chhattisgarh","Kanger",""],
  ["Hundru","Jharkhand","Subarnarekha","p"],
  ["Dassam","Jharkhand","Kanchi",""],
  ["Lodh","Jharkhand","Burha",""],
  ["Duduma","Odisha","Machkund",""],
  ["Barehipani","Odisha","Budhabalanga",""],
  ["Nohkalikai","Meghalaya","",""],
  ["Elephant Falls","Meghalaya","",""],
  ["Nuranang (Jang)","Arunachal Pradesh","",""],
  ["Kempty","Uttarakhand","",""],
  ["Vasudhara","Uttarakhand","",""],
  ["Kakolat","Bihar","",""],
  ["Talakona","Andhra Pradesh","",""]
];

LESSONS.push(
{id:"G5", heat:3, title:"Himalayan rivers: Indus, Ganga, Brahmaputra", hi:"हिमालयी नदियाँ: सिंधु, गंगा, ब्रह्मपुत्र", blocks:[
  {k:"hot", h:"Most asked: <b>where a river rises</b> (Gangotri, Yamunotri, Mansarovar), <b>which river a tributary joins</b> (Chambal → Yamuna, Son → Ganga, Beas → Sutlej), the <b>Panch Prayag</b> and the <b>Indus Waters Treaty (1960)</b>."},
  {k:"story", h:"<p>Three great rivers rise behind the Himalaya near <b>Lake Mansarovar</b> in Tibet: the <b>Indus</b>, the <b>Sutlej</b> and the <b>Brahmaputra (Tsangpo)</b>. The Indus flows west through Ladakh to Pakistan, picking up the five rivers of Punjab — <b>Jhelum, Chenab, Ravi, Beas and Sutlej</b>. Under the <b>Indus Waters Treaty (1960)</b> India got the eastern rivers (Ravi, Beas, Sutlej) and Pakistan the western ones (Indus, Jhelum, Chenab); India put the treaty in abeyance in April 2025.</p><p>The <b>Ganga</b> begins as the <b>Bhagirathi</b> at Gangotri (Gaumukh). The <b>Alaknanda</b> collects four rivers at four prayags and meets the Bhagirathi at <b>Devprayag</b>, where the Ganga is born. The <b>Yamuna</b> joins at <b>Prayagraj</b>; Ghaghara, Gandak and Kosi join from the north; <b>Son</b> from the south. In Bangladesh the Ganga is the <b>Padma</b> and meets the Brahmaputra; together they form the world's largest delta, the <b>Sundarbans</b>.</p>", key:"Indus, Sutlej, Brahmaputra rise near Mansarovar; Ganga = Bhagirathi + Alaknanda at Devprayag; Yamuna joins at Prayagraj."},
  {k:"table", title:"Where Himalayan rivers rise", head:["River","Source","Note"], rows: G5O.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Tributaries", head:["Tributary","Joins","Note"], rows: G5T.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Panch Prayag — rivers that meet the Alaknanda", head:["Prayag","River that joins","Note"], rows: G5Y.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Key numbers", rows:[
    ["Ganga","About 2,525 km — India's longest river; national river (2008)"],
    ["Largest river basin in India","Ganga basin"],
    ["Indus Waters Treaty","1960, signed by Nehru and Ayub Khan; World Bank brokered; in abeyance since April 2025"],
    ["Brahmaputra's U-turn","Around Namcha Barwa; enters India in Arunachal as the Siang (Dihang)"],
    ["Largest delta","Ganga–Brahmaputra (Sundarbans)"]
  ]},
  {k:"trick", h:"Panch Prayag from top to bottom: <b>“Very Nice Kids Read Daily”</b> — Vishnu (Dhauliganga), Nand (Nandakini), Karna (Pindar), Rudra (Mandakini), Dev (Bhagirathi). Indus rivers west to east: <b>“Jhelum Chenab Ravi Beas Sutlej” = “Just Call Raju Before Sunday”</b>."},
  {k:"trap", h:"<b>Chambal, Betwa and Ken</b> join the <b>Yamuna</b>, not the Ganga. <b>Beas</b> joins the <b>Sutlej</b> (Harike), not the Ravi. The Ganga gets its name at <b>Devprayag</b>, not at Gangotri."}
], sum:["Indus, Sutlej and Brahmaputra rise near Mansarovar in Tibet.","Bhagirathi (Gangotri) and Alaknanda (Satopanth) meet at Devprayag to form the Ganga.","Yamuna rises at Yamunotri and joins the Ganga at Prayagraj; Chambal, Betwa and Ken join the Yamuna.","Indus Waters Treaty 1960: eastern rivers (Ravi, Beas, Sutlej) to India.","The Brahmaputra is the Tsangpo in Tibet and the Siang/Dihang in Arunachal."]},

{id:"G6", heat:3, title:"Peninsular rivers", hi:"प्रायद्वीपीय नदियाँ", blocks:[
  {k:"hot", h:"Asked every year: the <b>source</b> of Narmada (Amarkantak), Godavari (Trimbakeshwar), Krishna (Mahabaleshwar), Kaveri (Talakaveri); <b>west-flowing</b> Narmada and Tapi; <b>Godavari = longest peninsular river</b>; and the <b>Vedic names</b> of the Punjab rivers."},
  {k:"story", h:"<p>Peninsular rivers are older and fed by rain, so many shrink in summer. Most rise in the <b>Western Ghats</b> and flow <b>east</b> to the Bay of Bengal, building <b>deltas</b>: the <b>Mahanadi</b>, <b>Godavari</b> (the longest, about 1,465 km — 'Dakshin Ganga'), <b>Krishna</b> and <b>Kaveri</b>.</p><p>Two big rivers flow <b>west</b> through <b>rift valleys</b> into the Arabian Sea and form <b>estuaries</b>, not deltas: the <b>Narmada</b> (from Amarkantak, between the Vindhyas and Satpuras) and the <b>Tapi</b> (from Multai). In the dry west, the <b>Luni</b> rises near Pushkar and dies in the Rann of Kutch, and the <b>Mahi</b> crosses the Tropic of Cancer twice.</p>", key:"East-flowing with deltas: Mahanadi, Godavari, Krishna, Kaveri. West-flowing in rift valleys with estuaries: Narmada, Tapi."},
  {k:"table", title:"Where peninsular rivers rise", head:["River","Source","Note"], rows: G6O.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Tributaries", head:["Tributary","Joins","Note"], rows: G6T.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Other names of rivers", head:["Name","River","Note"], rows: G6N.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Vedic names: <b>“Vitasta-Asikni-Parushni-Vipasha-Shutudri”</b> run in the same order as <b>Jhelum-Chenab-Ravi-Beas-Sutlej</b> — west to east. Learn the pairs by first letters: <b>V</b>itasta–Jhelum, <b>A</b>sikni–Chenab, <b>P</b>arushni–Ravi, <b>V</b>ipasha–Beas, <b>S</b>hutudri–Sutlej."},
  {k:"trap", h:"<b>Narmada and Son</b> both rise at <b>Amarkantak</b> but flow in opposite directions (west and north-east). <b>Tungabhadra</b> joins the <b>Krishna</b>, not the Kaveri. <b>Kaveri</b> rises in Karnataka (Talakaveri), but most of its delta is in Tamil Nadu."}
], sum:["Godavari is the longest peninsular river (Trimbakeshwar to the Bay of Bengal).","Mahanadi (Sihawa), Krishna (Mahabaleshwar) and Kaveri (Talakaveri) also flow east and form deltas.","Narmada (Amarkantak) and Tapi (Multai) flow west through rift valleys and form estuaries.","Tungabhadra, Bhima and Koyna join the Krishna; Indravati and Manjira join the Godavari.","Vedic names: Vitasta (Jhelum), Asikni (Chenab), Parushni (Ravi), Vipasha (Beas), Shutudri (Sutlej)."]},

{id:"G7", heat:3, title:"Cities on rivers, dams and projects", hi:"नदी तट के नगर, बाँध और परियोजनाएँ", blocks:[
  {k:"hot", h:"Two question types never stop: <b>“City X stands on which river?”</b> and <b>“Dam X is on which river?”</b> Also: <b>Tehri (highest dam)</b>, <b>Hirakud (longest)</b>, <b>Bhakra Nangal</b>, <b>DVC (1948)</b> and the <b>Ken–Betwa link</b>."},
  {k:"story", h:"<p>Old cities grew beside rivers: <b>Srinagar</b> on the Jhelum, <b>Delhi and Agra</b> on the Yamuna, <b>Varanasi and Patna</b> on the Ganga, <b>Lucknow</b> on the Gomti, <b>Ayodhya</b> on the Sarayu, <b>Jabalpur</b> on the Narmada, <b>Surat</b> on the Tapi, <b>Hyderabad</b> on the Musi.</p><p>After independence, Nehru called the big dams the <b>“temples of modern India”</b>. The <b>Damodar Valley Corporation (1948)</b> was the first multipurpose project. <b>Bhakra</b> on the Sutlej holds back the <b>Gobind Sagar</b>; <b>Hirakud</b> on the Mahanadi is the <b>longest</b> dam; <b>Tehri</b> on the Bhagirathi is the <b>highest</b>. The <b>Ken–Betwa link</b> (foundation stone December 2024) is the first project of the national river-linking plan.</p>", key:"Tehri — highest (Bhagirathi); Hirakud — longest (Mahanadi); Bhakra — Sutlej; Sardar Sarovar — Narmada; DVC 1948 — first multipurpose project."},
  {k:"table", title:"Cities on rivers", head:["City","River","Note"], rows: G7C.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Dams and barrages", head:["Dam","River","State"], rows: G7D.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Records and projects", rows:[
    ["Highest dam","Tehri (about 260 m), Uttarakhand"],
    ["Longest dam","Hirakud, Odisha (about 25.8 km with dykes)"],
    ["Oldest working dam","Kallanai (Grand Anicut) on the Kaveri — built by the Cholas"],
    ["First multipurpose project","Damodar Valley Corporation, 1948 (modelled on the Tennessee Valley Authority)"],
    ["Longest canal","Indira Gandhi Canal — from the Harike barrage (Sutlej–Beas), Rajasthan"],
    ["First river-linking project","Ken–Betwa link (Madhya Pradesh and Uttar Pradesh)"],
    ["Statue of Unity","Near the Sardar Sarovar dam, Gujarat"]
  ]},
  {k:"trick", h:"Chambal's three dams, upstream to downstream: <b>“Gandhi Ran to Jawahar”</b> — Gandhi Sagar (MP), Rana Pratap Sagar, Jawahar Sagar (Rajasthan), then the Kota barrage. Narmada dams: <b>“I Saw”</b> — Indira Sagar (MP) upstream, Sardar Sarovar (Gujarat) downstream."},
  {k:"trap", h:"<b>Tehri</b> is the highest, <b>Hirakud</b> the longest — don't swap. <b>Nagarjuna Sagar</b> and <b>Srisailam</b> are on the <b>Krishna</b>; <b>Krishna Raja Sagar</b> is on the <b>Kaveri</b>. <b>Ahmedabad</b> is on the Sabarmati, <b>Vadodara</b> on the Vishwamitri, <b>Surat</b> on the Tapi."}
], sum:["Srinagar–Jhelum, Delhi/Agra–Yamuna, Varanasi/Patna–Ganga, Lucknow–Gomti, Ayodhya–Sarayu.","Jabalpur–Narmada, Surat–Tapi, Ahmedabad–Sabarmati, Hyderabad–Musi, Cuttack–Mahanadi.","Tehri (Bhagirathi) is the highest dam; Hirakud (Mahanadi) the longest.","Bhakra–Sutlej, Sardar Sarovar–Narmada, Nagarjuna Sagar–Krishna, Mettur–Kaveri, Idukki–Periyar.","DVC (1948) was the first multipurpose project; Ken–Betwa is the first river-link project."]},

{id:"G8", heat:2, title:"Lakes and waterfalls", hi:"झीलें और जलप्रपात", blocks:[
  {k:"hot", h:"Asked often: <b>largest freshwater lake (Wular)</b>, <b>largest salt lake (Sambhar)</b>, <b>largest lagoon (Chilika)</b>, <b>crater lake (Lonar)</b>, and <b>which river makes a waterfall</b> — Jog (Sharavati), Chitrakote (Indravati), Dhuandhar (Narmada), Hundru (Subarnarekha)."},
  {k:"story", h:"<p>India's lakes come in many kinds. <b>Wular</b> in Kashmir is the largest <b>freshwater</b> lake; <b>Sambhar</b> in Rajasthan is the largest <b>inland salt</b> lake; <b>Chilika</b> in Odisha is the largest <b>brackish lagoon</b>. <b>Lonar</b> in Maharashtra was blasted out by a <b>meteorite</b>; <b>Kanwar</b> in Bihar is a cut-off river bend — an <b>oxbow</b>; <b>Loktak</b> in Manipur has floating islands called <b>phumdis</b>.</p><p>Waterfalls form where rivers leap off the plateau edge. <b>Jog</b> on the Sharavati plunges down the Western Ghats in Karnataka; <b>Chitrakote</b> on the Indravati is the 'Niagara of India'; the Narmada roars through the marble rocks at <b>Dhuandhar</b>; and <b>Hundru</b> on the Subarnarekha lies near Ranchi.</p>", key:"Wular — freshwater; Sambhar — salt; Chilika — lagoon; Lonar — crater; Kanwar — oxbow; Jog — Sharavati; Chitrakote — Indravati."},
  {k:"table", title:"Lakes", head:["Lake","State / UT","Type"], rows: G8L.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Waterfalls", head:["Waterfall","State","River"], rows: G8F.map(r => [r[0], r[1], r[2] || "—"])},
  {k:"trick", h:"<b>“Wular Wins Water, Sambhar Serves Salt, Chilika Collects Crabs”</b> — freshwater, salt, brackish lagoon. Jharkhand's falls ride Ranchi's river: <b>Hundru on the Subarnarekha</b>."},
  {k:"trap", h:"<b>Dal</b> is famous, but <b>Wular</b> is the largest. <b>Chitrakote</b> (Chhattisgarh) is on the <b>Indravati</b>, not the Mahanadi. <b>Jog</b> is on the <b>Sharavati</b>, while <b>Shivanasamudra</b> and <b>Hogenakkal</b> are on the <b>Kaveri</b>."}
], sum:["Wular (J&K) is the largest freshwater lake; Sambhar (Rajasthan) the largest inland salt lake.","Chilika (Odisha) is the largest brackish lagoon; Pulicat is second; Vembanad (Kerala) the longest lake.","Lonar (Maharashtra) is a crater lake; Kanwar (Bihar) an oxbow lake; Loktak (Manipur) has phumdis.","Jog — Sharavati (Karnataka); Shivanasamudra and Hogenakkal — Kaveri.","Chitrakote — Indravati (Chhattisgarh); Dhuandhar — Narmada (MP); Hundru — Subarnarekha (Jharkhand)."]}
);

pairQs("G5", G5O, { q: t => `Where does the ${t} rise?` });
pairQs("G5", G5T, { q: t => `The ${t} flows directly into which river?`, rq: a => `Which of these is a tributary of the ${a}?` });
pairQs("G5", G5Y, { q: t => `At ${t}, which river joins the Alaknanda?`, rq: a => `The ${a} meets the Alaknanda at:` });
pairQs("G6", G6O, { q: t => `Where does the ${t} rise?` });
pairQs("G6", G6T, { q: t => `The ${t} flows directly into which river?`, rq: a => `Which of these is a tributary of the ${a}?` });
pairQs("G6", G6N, { q: t => `'${t}' is a name for which river?`, rq: a => `Which name belongs to the ${a}?` });
pairQs("G7", G7C, { q: t => `${t} stands on the bank of which river?` });
pairQs("G7", G7D, { q: t => `On which river is the ${t} project?` });
pairQs("G8", G8L.map(r => [r[0], r[1], r[3], r[4]]), { q: t => `In which state or UT is the lake ${t}?` });
pairQs("G8", G8F.map(r => [r[0], r[1], "", r[3]]), { q: t => `${t} waterfall is in:` });
pairQs("G8", G8F.filter(r => r[2]).map(r => [r[0], r[2], `${r[0]} falls is on the ${r[2]} (${r[1]}).`, r[0] === "Jog (Gersoppa)" ? "p|SSC MTS 2020 · 27 Oct 2021 (Shift 3)" : r[3]]), { q: t => `${t} falls is on which river?` });

QB.push(
["G5","The Ganga gets its name where the Bhagirathi meets the Alaknanda at:",["Devprayag","Rudraprayag","Haridwar","Karnaprayag"],"Uttarakhand.","p"],
["G5","Under the Indus Waters Treaty (1960), India got the waters of:",["Ravi, Beas and Sutlej","Indus, Jhelum and Chenab","Jhelum, Ravi and Sutlej","Chenab, Beas and Indus"],"The western rivers went to Pakistan.","p"],
["G5","The Yamuna meets the Ganga at:",["Prayagraj","Varanasi","Haridwar","Kanpur"],"The Triveni Sangam — with the mythical Saraswati.","p"],
["G5","Which is the longest river of India?",["Ganga","Godavari","Brahmaputra","Indus"],"About 2,525 km.","p"],
["G5","The Ganga was declared India's national river in:",["2008","2014","1985","2010"],"National Ganga River Basin Authority set up the next year.",""],
["G5","Which is the largest southern (right-bank) tributary of the Ganga?",["Son","Yamuna","Gomti","Kosi"],"Rises at Amarkantak.","p"],
["G5","The world's largest delta is formed by the:",["Ganga and Brahmaputra","Godavari and Krishna","Indus and Sutlej","Mahanadi and Brahmani"],"The Sundarbans delta.","p"],
["G6","Which is the longest river of peninsular India?",["Godavari","Krishna","Narmada","Kaveri"],"About 1,465 km.","p"],
["G6","Which two rivers flow west through rift valleys?",["Narmada and Tapi","Godavari and Krishna","Mahanadi and Kaveri","Chambal and Betwa"],"They form estuaries, not deltas.","p"],
["G6","Which river crosses the Tropic of Cancer twice?",["Mahi","Narmada","Tapi","Sabarmati"],"It flows through MP, Rajasthan and Gujarat.","p"],
["G6","The Luni river ends in:",["The Rann of Kutch","The Arabian Sea at Bharuch","Sambhar Lake","The Gulf of Khambhat"],"An inland river of the Thar.","p"],
["G6","West-flowing rivers like the Narmada form ___ at their mouths.",["Estuaries","Deltas","Oxbow lakes","Lagoons"],"Their fast flow carries silt out to sea.",""],
["G7","Which is the highest dam in India?",["Tehri","Bhakra","Hirakud","Sardar Sarovar"],"About 260 m, on the Bhagirathi.","p"],
["G7","Which is the longest dam in India?",["Hirakud","Tehri","Bhakra","Nagarjuna Sagar"],"On the Mahanadi near Sambalpur, Odisha.","p","","","SSC JE · 25 May 2014 (Evening)"],
["G7","Which was India's first multipurpose river valley project?",["Damodar Valley Corporation","Bhakra Nangal","Hirakud","Tungabhadra"],"Set up in 1948.","p"],
["G7","Who called dams the 'temples of modern India'?",["Jawaharlal Nehru","Sardar Patel","M. Visvesvaraya","Rajendra Prasad"],"About Bhakra Nangal.","p"],
["G7","Gobind Sagar is the reservoir of which dam?",["Bhakra","Pong","Tehri","Rihand"],"On the Sutlej, Himachal Pradesh.","p"],
["G7","The Ken–Betwa link project lies in:",["Madhya Pradesh and Uttar Pradesh","Rajasthan and Gujarat","Bihar and Jharkhand","Karnataka and Tamil Nadu"],"India's first river-linking project; foundation stone 25 December 2024.","p"],
["G7","The Indira Gandhi Canal starts from the:",["Harike barrage","Bhakra dam","Farakka barrage","Pong dam"],"Where the Beas meets the Sutlej, Punjab.","p"],
["G8","Which is India's largest freshwater lake?",["Wular","Dal","Loktak","Kolleru"],"In Jammu and Kashmir.","p"],
["G8","Which is India's largest inland salt lake?",["Sambhar","Pangong Tso","Didwana","Chilika"],"In Rajasthan.","p"],
["G8","Lonar lake in Maharashtra was formed by:",["A meteorite impact","A volcano","A glacier","A dam"],"A crater lake in basalt rock.","p"],
["G8","The floating islands of Loktak lake are called:",["Phumdis","Kayals","Duns","Beels"],"Keibul Lamjao, the floating national park, is on them.","p"],
["G8","Which waterfall is called the 'Niagara of India'?",["Chitrakote","Jog","Dudhsagar","Hundru"],"On the Indravati, Chhattisgarh.","p"]
);

LASTMOMENT.push(
{t:"River sources", era:["ig"], rows:[["Ganga","Gangotri (Gaumukh)"],["Yamuna","Yamunotri"],["Indus, Sutlej","Near Mansarovar"],["Narmada, Son","Amarkantak"],["Godavari","Trimbakeshwar"],["Krishna","Mahabaleshwar"],["Kaveri","Talakaveri"],["Tapi","Multai"]]},
{t:"Dams", era:["ig"], rows:[["Tehri","Bhagirathi — highest"],["Hirakud","Mahanadi — longest"],["Bhakra","Sutlej"],["Sardar Sarovar","Narmada"],["Nagarjuna Sagar","Krishna"],["KRS, Mettur","Kaveri"],["Idukki","Periyar"],["Ukai","Tapi"]]},
{t:"Lakes and falls", era:["ig"], rows:[["Wular","Largest freshwater"],["Sambhar","Largest salt"],["Chilika","Largest lagoon"],["Lonar","Crater"],["Jog","Sharavati"],["Chitrakote","Indravati"],["Dhuandhar","Narmada"],["Hundru","Subarnarekha"]]}
);
TILES.push(["1960","Indus Waters Treaty","ig"],["1948","Damodar Valley Corporation","ig"],["2,525 km","Ganga","ig"],["1,465 km","Godavari","ig"],["2008","Ganga made national river","ig"]);

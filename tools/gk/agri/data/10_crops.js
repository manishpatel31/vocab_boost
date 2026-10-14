/* Part 1 · R1 cropping seasons and crop names; R2 food crops, climate and soil; R3 cash and fibre crops; R4 plantation crops, spices and horticulture.
   Leading states are from the Ministry of Agriculture's estimates for 2023–24 (as of October 2026); only rankings that have stayed stable for years are quizzed. */
const R1 = [
  ["Rice (paddy)","Kharif","Sown with the monsoon (June–July), harvested in autumn.","p"],
  ["Maize","Kharif","Also grown as a rabi crop in Bihar.","p"],
  ["Jowar","Kharif","",""],
  ["Bajra","Kharif","","p"],
  ["Ragi","Kharif","",""],
  ["Cotton","Kharif","","p"],
  ["Jute","Kharif","",""],
  ["Groundnut","Kharif","Mostly a kharif oilseed.","p"],
  ["Soybean","Kharif","","p"],
  ["Arhar (tur)","Kharif","",""],
  ["Urad","Kharif","",""],
  ["Wheat","Rabi","Sown October–December, harvested March–April.","p|SSC CGL 2024 · 17 Sep 2024 (Shift 3)"],
  ["Barley","Rabi","","p"],
  ["Gram (chana)","Rabi","India's most important pulse.","p"],
  ["Mustard","Rabi","","p"],
  ["Peas","Rabi","",""],
  ["Linseed","Rabi","",""],
  ["Masoor (lentil)","Rabi","",""],
  ["Watermelon","Zaid","Zaid = the short summer season between rabi and kharif (March–June).","p"],
  ["Muskmelon","Zaid","",""],
  ["Cucumber","Zaid","",""],
  ["Fodder crops (summer)","Zaid","",""],
  ["Sugarcane","Perennial (about a year)","Stays in the field for about 10–18 months.","p"],
  ["Tea","Perennial (about a year)","A plantation bush plucked for many years.",""]
];
const R1N = [
  ["Gehun","Wheat","",""],
  ["Jau","Barley","",""],
  ["Makka","Maize","",""],
  ["Jowar","Sorghum","","p"],
  ["Bajra","Pearl millet","","p"],
  ["Ragi (mandua)","Finger millet","Very rich in calcium.","p"],
  ["Kangni","Foxtail millet","",""],
  ["Chana","Chickpea (gram)","",""],
  ["Arhar (tur)","Pigeon pea","",""],
  ["Masoor","Lentil","",""],
  ["Moong","Green gram","",""],
  ["Urad","Black gram","",""],
  ["Sarson","Mustard","",""],
  ["Til","Sesame (sesamum)","",""],
  ["Alsi","Linseed (flax)","",""],
  ["Mungphali","Groundnut","",""],
  ["Kapas","Cotton","",""],
  ["Ganna","Sugarcane","",""]
];
const R2 = [
  ["Rice","Above 25°C, high humidity, over 100 cm rain","Grows best in clayey alluvial soil; needs standing water.","p"],
  ["Wheat","Cool growing season, bright sun at ripening, 50–75 cm rain","Two zones: the Ganga–Satluj plains and the black-soil Deccan.","p"],
  ["Maize","21–27°C and old alluvial soil","Used as food and fodder.",""],
  ["Bajra","Sandy soils and shallow black soil, very dry","",""],
  ["Pulses","Little moisture; they fix nitrogen in the soil","Leguminous — so they are rotated with other crops.","p"],
  ["Sugarcane","21–27°C, 75–100 cm rain, hot and humid","Can grow on many soils; needs heavy manure and labour.","p"],
  ["Cotton","Black soil, 210 frost-free days, bright sunshine","The Deccan plateau's black (regur) soil is ideal.","p"],
  ["Jute","Flood plains where the soil is renewed every year, high temperature","Called the 'golden fibre'.","p"],
  ["Tea","Warm, moist, frost-free; well-drained slopes rich in humus","Needs frequent showers all year and a lot of cheap labour.","p"],
  ["Coffee","Hill slopes with shade, warm and wet","Arabica coffee was first grown in the Baba Budan Hills.","p"],
  ["Rubber","Over 200 cm rain and above 25°C — moist equatorial climate","",""]
];
const R2S = [
  ["Wheat","Uttar Pradesh","UP leads every year; then Madhya Pradesh and Punjab.","p"],
  ["Bajra","Rajasthan","Rajasthan grows nearly half of India's bajra.","p"],
  ["Jowar","Maharashtra","",""],
  ["Ragi","Karnataka","",""],
  ["Gram (chana)","Madhya Pradesh","",""],
  ["Pulses (all together)","Madhya Pradesh","MP is called the 'pulse bowl'.","p"],
  ["Barley","Rajasthan","",""]
];
const R3 = [
  ["Sugarcane","Uttar Pradesh","Then Maharashtra and Karnataka.","p"],
  ["Cotton","Gujarat","Maharashtra has the largest cotton area.","p"],
  ["Jute","West Bengal","Over half of India's jute; then Bihar and Assam.","p"],
  ["Groundnut","Gujarat","","p"],
  ["Rapeseed and mustard","Rajasthan","","p"],
  ["Soybean","Madhya Pradesh","MP is called the 'Soya State'.","p"],
  ["Castor seed","Gujarat","",""],
  ["Raw silk (mulberry)","Karnataka","",""]
];
const R3F = [
  ["Cotton","Hairs on the seed (inside the boll)","The boll is picked; ginning separates fibre from seed.","p"],
  ["Jute","Stem (bast fibre)","Stems are soaked in water — 'retting' — to loosen the fibre.","p"],
  ["Coir","Husk of the coconut","Kerala is the centre of the coir industry.",""],
  ["Silk","Cocoon of the silkworm","Rearing silkworms is sericulture.","p"],
  ["Wool","Fleece of sheep (and goats)","",""],
  ["Pashmina","Undercoat of the Changthangi goat","From Ladakh.",""]
];
const R4 = [
  ["Tea","Assam","Over half of India's tea; then West Bengal (Darjeeling, Dooars).","p"],
  ["Coffee","Karnataka","About 70% of India's coffee (Kodagu, Chikkamagaluru).","p"],
  ["Natural rubber","Kerala","Rubber Board — Kottayam.","p"],
  ["Small cardamom","Kerala","Idukki district.",""],
  ["Saffron","Jammu and Kashmir","Pampore is the 'saffron town'.","p"],
  ["Apple","Jammu and Kashmir","Then Himachal Pradesh.","p"],
  ["Red chilli","Andhra Pradesh","Guntur is famous for chillies.",""],
  ["Mango","Uttar Pradesh","",""],
  ["Potato","Uttar Pradesh","",""],
  ["Onion","Maharashtra","Lasalgaon (Nashik) is Asia's biggest onion market.","p"],
  ["Grapes","Maharashtra","Nashik is called the grape capital of India.",""],
  ["Cashew","Maharashtra","",""]
];
const R4N = [
  ["King of spices","Black pepper","","p"],
  ["Queen of spices","Small cardamom","","p"],
  ["Golden fibre","Jute","","p"],
  ["White gold","Cotton","","p"],
  ["Red gold","Saffron","The costliest spice by weight.",""],
  ["Green gold","Bamboo","",""],
  ["Miracle rice","IR-8","High-yielding rice of the Green Revolution, from IRRI (Philippines).",""],
  ["Shree Anna (nutri-cereals)","Millets","Name used in the 2023–24 Budget.","p"]
];

LESSONS.push(
{id:"R1", heat:3, title:"Cropping seasons: kharif, rabi and zaid", hi:"फ़सल ऋतुएँ: ख़रीफ़, रबी और ज़ायद", blocks:[
  {k:"hot", h:"The commonest agriculture question: <b>“Which of these is a rabi / kharif crop?”</b> Rice, maize, cotton, soybean, groundnut are <b>kharif</b>; wheat, barley, gram, mustard are <b>rabi</b>; watermelon and cucumber are <b>zaid</b>."},
  {k:"story", h:"<p>India's farm year follows the monsoon. When the rains arrive in <b>June–July</b>, farmers sow the <b>kharif</b> crops — rice, maize, jowar, bajra, cotton, jute, groundnut and soybean — and harvest them in <b>September–October</b>. Kharif comes from an Arabic word for autumn.</p><p>As the rains end, the <b>rabi</b> crops go in during <b>October–December</b> — wheat, barley, gram, peas and mustard — and are cut in <b>March–April</b>; winter rain from western disturbances helps them. In the short summer gap (<b>March–June</b>) comes <b>zaid</b>: watermelon, muskmelon, cucumber, vegetables and fodder.</p>", key:"Kharif = monsoon (June → October): rice, cotton. Rabi = winter (October → April): wheat, mustard. Zaid = summer gap: melons."},
  {k:"facts", title:"The three seasons", rows:[
    ["Kharif","Sown June–July with the monsoon; harvested September–October"],
    ["Rabi","Sown October–December; harvested March–April"],
    ["Zaid","Between rabi and kharif, roughly March–June"],
    ["Sesamum (til)","Kharif in the north, rabi in the south"],
    ["Sugarcane","Not seasonal — takes about a year in the field"],
    ["Aus, Aman, Boro","The three rice crops of West Bengal (autumn, winter, summer)"]
  ]},
  {k:"table", title:"Which season is each crop?", head:["Crop","Season","Note"], rows: R1.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Hindi name → English name", head:["Hindi name","English name","Note"], rows: R1N.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>Kharif = Khet + Rain</b> — monsoon crops. <b>Rabi = Ravi (winter sun)</b> — wheat and mustard. Kharif four: <b>“Rice Makes Cotton Grow”</b> — Rice, Maize, Cotton, Groundnut. Rabi four: <b>“We Buy Good Mustard”</b> — Wheat, Barley, Gram, Mustard."},
  {k:"trap", h:"<b>Gram (chana) is rabi</b>, but <b>arhar, moong and urad are kharif</b>. <b>Maize</b> is mainly kharif, though Bihar grows it in rabi too. <b>Sugarcane</b> is not a seasonal crop at all."}
], sum:["Kharif crops are sown with the monsoon (June–July) and harvested September–October.","Rabi crops are sown October–December and harvested March–April.","Zaid crops grow in the short summer between rabi and kharif.","Kharif: rice, maize, jowar, bajra, cotton, jute, groundnut, soybean, arhar.","Rabi: wheat, barley, gram, peas, mustard, linseed, masoor."]},

{id:"R2", heat:3, title:"Food crops: climate, soil and leading states", hi:"खाद्य फ़सलें: जलवायु, मिट्टी और अग्रणी राज्य", blocks:[
  {k:"hot", h:"Asked often: <b>the climate a crop needs</b> (rice — over 100 cm rain; wheat — 50–75 cm; cotton — black soil, 210 frost-free days) and <b>the top state</b> (wheat — UP, bajra — Rajasthan, pulses — MP)."},
  {k:"story", h:"<p><b>Rice</b> is India's main food crop and needs heat (above 25°C), humidity and over 100 cm of rain — or canals in dry Punjab and Haryana. <b>Wheat</b> is the second; it wants a cool growing season and bright sun at ripening, with 50–75 cm of rain. India is the world's <b>second-largest</b> producer of both rice and wheat (after China) and the <b>largest exporter of rice</b>.</p><p><b>Millets</b> — jowar, bajra and ragi — are 'coarse grains' that grow in dry, poor soils and are rich in nutrients. India is the world's largest producer of millets and of <b>pulses</b> (also the largest consumer and importer of pulses). Pulses are legumes: their roots fix nitrogen, so they restore soil fertility.</p>", key:"Rice >100 cm rain; wheat 50–75 cm; millets dry soils; pulses fix nitrogen. UP–wheat, Rajasthan–bajra, MP–pulses."},
  {k:"table", title:"What each crop needs", head:["Crop","Climate and soil","Note"], rows: R2.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Leading state (2023–24 estimates)", head:["Crop","Leading state","Note"], rows: R2S.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Soils and crops (see the Indian Geography app for soils)", rows:[
    ["Alluvial soil","Rice, wheat, sugarcane — the northern plains"],
    ["Black (regur) soil","Cotton — Deccan plateau; holds moisture"],
    ["Red soil","Millets, pulses, groundnut"],
    ["Laterite soil","Tea, coffee, cashew (with manure)"],
    ["Arid (desert) soil","Bajra, and other crops once irrigated"],
    ["Rice — leading state","West Bengal in most years, with UP and Punjab close (rankings shift)"]
  ]},
  {k:"trick", h:"Rain ladder: <b>Rubber 200+ → Rice 100+ → Sugarcane 75–100 → Wheat 50–75</b>. Millets map: <b>“Ra-Ba, Ma-Jo, Ka-Ra”</b> — Rajasthan Bajra, Maharashtra Jowar, Karnataka Ragi."},
  {k:"trap", h:"<b>Jowar</b> leader is <b>Maharashtra</b>, not Rajasthan (Rajasthan leads <b>bajra</b>). The top <b>rice</b> state changes from year to year — learn that West Bengal is traditionally first but don't trust a fixed ranking."}
], sum:["Rice needs over 100 cm rain and above 25°C; wheat needs a cool season and 50–75 cm.","India is second in rice and wheat (after China) and the largest rice exporter.","India is the largest producer of millets and of pulses.","Wheat — UP; bajra — Rajasthan; jowar — Maharashtra; ragi — Karnataka; pulses — MP.","Black soil suits cotton; alluvial soil suits rice, wheat and sugarcane."]},

{id:"R3", heat:2, title:"Cash and fibre crops: sugarcane, cotton, jute, oilseeds", hi:"नक़दी और रेशा फ़सलें: गन्ना, कपास, जूट, तिलहन", blocks:[
  {k:"hot", h:"Know the <b>top state</b> for each (sugarcane — UP, cotton — Gujarat, jute — West Bengal, groundnut — Gujarat, mustard — Rajasthan, soybean — MP) and <b>which part of the plant</b> gives each fibre."},
  {k:"story", h:"<p><b>Sugarcane</b> is a tropical and subtropical crop; India is the world's second-largest producer after Brazil, and <b>Uttar Pradesh</b> grows the most. It gives sugar, gur and khandsari, and its molasses goes into ethanol. <b>Cotton</b> loves the black soil of the Deccan; <b>Gujarat</b> and <b>Maharashtra</b> lead. <b>Jute</b>, the 'golden fibre', grows in the flood plains of the Ganga–Brahmaputra delta — <b>West Bengal</b> grows over half.</p><p><b>Oilseeds</b> cover a large area: <b>groundnut</b> (mostly kharif, Gujarat), <b>mustard</b> (rabi, Rajasthan), <b>soybean</b> (kharif, Madhya Pradesh — the 'Soya State'), sesamum, castor, sunflower and linseed. India still imports much of its edible oil.</p>", key:"UP–sugarcane; Gujarat–cotton and groundnut; WB–jute; Rajasthan–mustard; MP–soybean."},
  {k:"table", title:"Leading state (2023–24 estimates)", head:["Crop","Leading state","Note"], rows: R3.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Where each fibre comes from", head:["Fibre","Comes from","Note"], rows: R3F.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“G-G-C”</b> — Gujarat grows Groundnut, Cotton and Castor. <b>Jute = Bengal's Gold</b>; <b>Cotton = White Gold</b>."},
  {k:"trap", h:"<b>Maharashtra</b> has the largest <b>area</b> under cotton, but <b>Gujarat</b> usually has the most <b>production</b>. India is <b>second</b> in sugarcane — <b>Brazil</b> is first."}
], sum:["Sugarcane — UP leads; India is second in the world after Brazil.","Cotton grows best in black soil with 210 frost-free days; Gujarat leads production.","Jute (golden fibre) — West Bengal; fibre comes from the stem after retting.","Groundnut — Gujarat; mustard — Rajasthan; soybean — Madhya Pradesh.","Cotton comes from seed hairs, coir from coconut husk, silk from silkworm cocoons."]},

{id:"R4", heat:2, title:"Plantation crops, spices and horticulture", hi:"बागान फ़सलें, मसाले और बाग़वानी", blocks:[
  {k:"hot", h:"Asked often: <b>tea — Assam, coffee — Karnataka, rubber — Kerala</b>; <b>black pepper = King of spices, cardamom = Queen of spices</b>; and the home of Indian coffee — the <b>Baba Budan Hills</b>."},
  {k:"story", h:"<p>The British brought <b>tea</b> to Assam's hills in the 1830s; today <b>Assam</b> grows over half of India's tea and India is the world's second-largest producer after China. <b>Coffee</b> came first — legend says Baba Budan carried Arabica beans from Yemen to the <b>Baba Budan Hills</b> of Karnataka. <b>Karnataka</b> grows about 70% of India's coffee. <b>Rubber</b> is an equatorial crop of <b>Kerala</b>.</p><p>India is the largest producer, consumer and exporter of <b>spices</b>; Kerala is called the 'Spice Garden of India'. India is also second in the world in fruits and vegetables. Saffron grows at <b>Pampore</b> in Kashmir.</p>", key:"Tea–Assam, coffee–Karnataka, rubber–Kerala, saffron–J&K. Pepper = king, cardamom = queen."},
  {k:"table", title:"Leading state (2023–24 estimates)", head:["Crop","Leading state","Note"], rows: R4.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Famous nicknames", head:["Nickname","Crop","Note"], rows: R4N.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Plantation farming", rows:[
    ["What it is","One crop grown on a large estate with big capital and hired labour"],
    ["Main plantation crops","Tea, coffee, rubber, sugarcane, banana, coconut"],
    ["Tea regions","Assam, Darjeeling and Dooars (WB), Nilgiris (TN), Kerala"],
    ["Coffee varieties","Arabica (best known) and Robusta"],
    ["Spices Board","Kochi, Kerala"],
    ["India in spices","Largest producer, consumer and exporter"]
  ]},
  {k:"trick", h:"<b>“A-K-K”</b> for the plantation trio: <b>A</b>ssam tea, <b>K</b>arnataka coffee, <b>K</b>erala rubber. <b>King Pepper, Queen Cardamom</b>."},
  {k:"trap", h:"<b>Coffee</b> is led by <b>Karnataka</b>, not Kerala. Arabica beans came from <b>Yemen</b>. Darjeeling tea is in <b>West Bengal</b>, not Assam."}
], sum:["Tea — Assam; coffee — Karnataka; natural rubber — Kerala.","Coffee began in the Baba Budan Hills of Karnataka (Arabica from Yemen).","Black pepper is the King of spices; small cardamom the Queen of spices.","India is the largest producer, consumer and exporter of spices.","Saffron and apple — Jammu and Kashmir; onion and grapes — Maharashtra."]}
);

pairQs("R1", R1, { q: t => `${t} is grown mainly as which crop?` });
pairQs("R1", R1N, { q: t => `The Hindi crop name '${t}' means:`});
pairQs("R2", R2, { q: t => `Which conditions suit ${t.toLowerCase()} best?`, rq: a => `Which crop needs: ${a}?` });
pairQs("R2", R2S, { q: t => `Which state is India's leading producer of ${t.toLowerCase()} (2023–24)?`, rq: a => `${a} leads India in which food crop (2023–24)?`, extra: ["Punjab","Haryana"] });
pairQs("R3", R3, { q: t => `India's leading producer state of ${t.toLowerCase()} (2023–24) is:`, rq: a => `${a} leads India in which of these cash crops (2023–24)?`, extra: ["Punjab","Bihar"] });
pairQs("R3", R3F, { q: t => `${t} fibre is obtained from the:`, rq: a => `Which fibre comes from the ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("R4", R4, { q: t => `Top producer state of ${t.toLowerCase()} in India (2023–24):`, extra: ["Tamil Nadu","Himachal Pradesh"] });
pairQs("R4", R4N, { q: t => `Which crop is called '${t}'?`, rq: a => `${a} is popularly called:` });

QB.push(
["R1","Which crop is grown as kharif in north India and as rabi in south India?",["Sesamum","Wheat","Mustard","Jute"],"Til is a monsoon crop in the north and a post-monsoon crop in the south.","p","","","SSC GD 2018 · 9 Mar 2019 (Shift 1)"],
["R1","Rabi crops are usually sown in:",["October–December","June–July","March–April","August–September"],"And harvested in March–April.","p"],
["R1","Kharif crops are harvested in:",["September–October","March–April","June–July","December–January"],"They are sown with the monsoon in June–July.","p"],
["R1","Which of these is NOT a rabi crop?",["Rice","Wheat","Gram","Mustard"],"Rice is a kharif crop.","p"],
["R1","Zaid crops are grown:",["In the summer between rabi and kharif","During the monsoon","Only in the hills","In winter only"],"Roughly March–June.",""],
["R1","Aus, Aman and Boro are three crops of:",["Rice in West Bengal","Wheat in Punjab","Jute in Assam","Tea in Assam"],"Autumn, winter and summer rice.",""],
["R2","India is the world's largest exporter of:",["Rice","Wheat","Sugar","Cotton"],"About two-fifths of world rice trade.","p"],
["R2","Which crop group fixes nitrogen in the soil?",["Pulses (legumes)","Millets","Oilseeds","Cereals"],"Root nodules carry nitrogen-fixing bacteria (Rhizobium).","p"],
["R2","Which soil is best for cotton?",["Black (regur) soil","Laterite soil","Alluvial soil","Peaty soil"],"It holds moisture well.","p"],
["R2","Which millet is especially rich in calcium?",["Ragi","Bajra","Jowar","Maize"],"Finger millet.",""],
["R2","Which soil suits tea and coffee once manured?",["Laterite soil","Desert soil","Saline soil","Black soil"],"Leached, acidic soil of the hill slopes.",""],
["R3","India ranks second in sugarcane production after:",["Brazil","China","Thailand","USA"],"Brazil is the largest producer.","p"],
["R3","Soaking jute stems in water to loosen the fibre is called:",["Retting","Ginning","Reeling","Carding"],"Ginning is for cotton; reeling is for silk.","p"],
["R3","Which state is called the 'Soya State' of India?",["Madhya Pradesh","Maharashtra","Rajasthan","Gujarat"],"It leads soybean output.","p"],
["R3","Which of these is a rabi oilseed?",["Mustard","Groundnut","Soybean","Castor"],"Groundnut and soybean are kharif.",""],
["R4","Arabica coffee was first grown in India in the:",["Baba Budan Hills","Nilgiri Hills","Cardamom Hills","Garo Hills"],"In Karnataka.","p"],
["R4","Which state is called the 'Spice Garden of India'?",["Kerala","Karnataka","Tamil Nadu","Assam"],"Pepper, cardamom, ginger and more.","p"],
["R4","India is the world's second-largest producer of tea after:",["China","Sri Lanka","Kenya","Indonesia"],"Assam grows over half of India's tea.","p"],
["R4","Pampore in Kashmir is famous for:",["Saffron","Apples","Walnuts","Tea"],"Kashmiri saffron has a GI tag.",""],
["R4","Growing one crop on a large estate with big capital and hired labour is:",["Plantation farming","Shifting cultivation","Subsistence farming","Mixed farming"],"Tea, coffee and rubber are plantation crops.","p"]
);

LASTMOMENT.push(
{t:"Seasons", era:["ag"], rows:[["Kharif (June → Oct)","Rice, maize, cotton, jute, groundnut, soybean"],["Rabi (Oct → April)","Wheat, barley, gram, mustard, peas"],["Zaid (Mar → June)","Watermelon, muskmelon, cucumber"],["Til","Kharif north, rabi south"]]},
{t:"Crop ↔ top state", era:["ag"], rows:[["Wheat, sugarcane","Uttar Pradesh"],["Bajra, mustard","Rajasthan"],["Pulses, soybean","Madhya Pradesh"],["Cotton, groundnut","Gujarat"],["Jute","West Bengal"],["Tea","Assam"],["Coffee","Karnataka"],["Rubber","Kerala"]]}
);
TILES.push(["100 cm","Rain rice needs","ag"],["210","Frost-free days for cotton","ag"],["70%","India's coffee from Karnataka","ag"],["2nd","India in rice and wheat","ag"]);

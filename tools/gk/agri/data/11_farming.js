/* Part 2 · R5 types of farming; R6 agricultural revolutions; R7 irrigation and projects; R8 animal husbandry and fisheries (as of October 2026). */
const R5 = [
  ["Jhum (jhumming)","North-eastern states","Assam, Meghalaya, Mizoram, Nagaland and others.","p"],
  ["Podu or Penda","Andhra Pradesh","","p"],
  ["Bewar or Dahiya","Madhya Pradesh","","p"],
  ["Pama Dabi, Koman or Bringa","Odisha","",""],
  ["Kumari","Western Ghats","",""],
  ["Valre or Waltre","South-eastern Rajasthan","",""],
  ["Khil","Himalayan belt","",""],
  ["Kuruwa","Jharkhand","","p"]
];
const R5W = [
  ["Milpa","Mexico and Central America","",""],
  ["Conuco","Venezuela","",""],
  ["Roca","Brazil","",""],
  ["Masole","Central Africa","",""],
  ["Ladang","Indonesia","Also used in Malaysia.",""],
  ["Ray","Vietnam","",""]
];
const R5C = [
  ["Sericulture","Silkworms (silk)","","p"],
  ["Apiculture","Honeybees","","p"],
  ["Pisciculture","Fish","","p"],
  ["Viticulture","Grapes","","p"],
  ["Floriculture","Flowers","","p"],
  ["Olericulture","Vegetables","","p"],
  ["Pomology","Fruits","",""],
  ["Vermiculture","Earthworms (for compost)","","p"],
  ["Silviculture","Forest trees","",""],
  ["Mariculture","Marine organisms in sea water","",""],
  ["Lac culture","Lac insects","",""],
  ["Horticulture","Fruits, vegetables and flowers together","",""]
];
const R6 = [
  ["Green Revolution","Foodgrains (wheat and rice)","High-yielding seeds, fertilisers and irrigation from the mid-1960s.","p"],
  ["White Revolution","Milk","Operation Flood, 1970.","p"],
  ["Blue Revolution","Fish (aquaculture)","","p"],
  ["Yellow Revolution","Oilseeds","Especially mustard and sunflower.","p"],
  ["Pink Revolution","Onions and prawns (also pharmaceuticals)","Books differ — onion and prawns are the usual answers.","p"],
  ["Golden Revolution","Horticulture (fruits) and honey","",""],
  ["Golden Fibre Revolution","Jute","",""],
  ["Silver Revolution","Eggs and poultry","","p"],
  ["Silver Fibre Revolution","Cotton","",""],
  ["Round Revolution","Potato","","p"],
  ["Grey Revolution","Fertilisers","",""],
  ["Red Revolution","Meat and tomatoes","",""],
  ["Black Revolution","Petroleum (ethanol and biodiesel)","",""],
  ["Brown Revolution","Leather (and cocoa)","",""],
  ["Sweet Revolution","Honey (beekeeping)","",""],
  ["Purple Revolution","Lavender","Under the Aroma Mission, mainly in Jammu and Kashmir.",""],
  ["Evergreen Revolution","Lasting growth of all farm output","M. S. Swaminathan's idea — more output without harming the soil.",""]
];
const R6F = [
  ["Norman Borlaug","Green Revolution (world)","Nobel Peace Prize 1970 for high-yielding wheat.","p"],
  ["M. S. Swaminathan","Green Revolution (India)","Bharat Ratna 2024 (posthumous).","p"],
  ["Verghese Kurien","White Revolution","The 'Milkman of India'; led Amul and the NDDB.","p"],
  ["Sam Pitroda","Yellow Revolution","As listed in exam guides.",""],
  ["Hiralal Chaudhuri and Arun Krishnan","Blue Revolution","As listed in exam guides.",""],
  ["Nirpakh Tutej","Golden Revolution","As listed in exam guides.",""],
  ["Vishal Tewari","Red Revolution","As listed in exam guides.",""],
  ["Indira Gandhi","Silver Revolution","As listed in exam guides.",""]
];
const R7 = [
  ["Bhakra Nangal","Sutlej","Gobind Sagar reservoir; Nehru's 'temples of modern India'.","p"],
  ["Hirakud","Mahanadi","Odisha; one of the world's longest earthen dams.","p"],
  ["Sardar Sarovar","Narmada","Gujarat.","p"],
  ["Tehri","Bhagirathi","Uttarakhand; India's highest dam.","p"],
  ["Nagarjuna Sagar","Krishna","On the Telangana–Andhra border.","p"],
  ["Srisailam","Krishna","Andhra Pradesh.",""],
  ["Damodar Valley","Damodar","India's first multipurpose project (1948), on the TVA model.","p"],
  ["Mettur","Kaveri","Tamil Nadu.",""],
  ["Krishna Raja Sagar","Kaveri","Karnataka; Brindavan Gardens.",""],
  ["Indira Gandhi Canal","Sutlej and Beas (from Harike barrage)","Rajasthan; India's longest canal.","p"],
  ["Salal","Chenab","Jammu and Kashmir.",""],
  ["Ukai","Tapi","Gujarat.",""],
  ["Idukki","Periyar","Kerala; arch dam.",""],
  ["Gandhi Sagar","Chambal","Madhya Pradesh.",""],
  ["Pong","Beas","Himachal Pradesh.",""],
  ["Farakka Barrage","Ganga","West Bengal.","p"],
  ["Rihand","Rihand (a tributary of the Son)","Uttar Pradesh; Govind Ballabh Pant Sagar reservoir.",""],
  ["Polavaram","Godavari","Andhra Pradesh.",""]
];
const R8 = [
  ["Gir","Gujarat","Milch cow from the Gir forest.","p"],
  ["Sahiwal","Punjab","One of the best milch breeds; origin in Pakistan's Punjab.","p"],
  ["Red Sindhi","Sindh (now in Pakistan)","Milch breed.","p"],
  ["Tharparkar","Rajasthan","Dual-purpose cow of the Thar desert.","p"],
  ["Rathi","Rajasthan","",""],
  ["Nagori","Rajasthan","Draught breed.",""],
  ["Hariana","Haryana","Dual-purpose.",""],
  ["Ongole","Andhra Pradesh","Draught and dual-purpose breed exported to Brazil.","p"],
  ["Punganur","Andhra Pradesh","A dwarf cow.",""],
  ["Kankrej","Gujarat","",""],
  ["Deoni","Maharashtra","",""],
  ["Khillari","Maharashtra","Draught breed.",""],
  ["Hallikar","Karnataka","Draught breed.",""],
  ["Amrit Mahal","Karnataka","Draught breed.",""],
  ["Kangayam","Tamil Nadu","Draught breed.",""],
  ["Vechur","Kerala","Among the smallest cattle in the world.","p"],
  ["Malvi","Madhya Pradesh","",""],
  ["Siri","Sikkim","",""],
  ["Murrah buffalo","Haryana","India's best milch buffalo — 'black gold'.","p"],
  ["Nili-Ravi buffalo","Punjab","",""],
  ["Jaffarabadi buffalo","Gujarat","The heaviest Indian buffalo.",""],
  ["Mehsana buffalo","Gujarat","",""],
  ["Surti buffalo","Gujarat","",""],
  ["Bhadawari buffalo","Uttar Pradesh","Milk very high in fat.",""],
  ["Nagpuri buffalo","Maharashtra","",""],
  ["Toda buffalo","Tamil Nadu","Nilgiri hills.",""],
  ["Chilika buffalo","Odisha","",""],
  ["Jamunapari goat","Uttar Pradesh","Etawah; large milch goat.","p"],
  ["Barbari goat","Uttar Pradesh","",""],
  ["Beetal goat","Punjab","",""],
  ["Sirohi goat","Rajasthan","",""],
  ["Black Bengal goat","West Bengal","",""],
  ["Osmanabadi goat","Maharashtra","",""],
  ["Changthangi goat","Ladakh","Gives pashmina.","p"],
  ["Malabari goat","Kerala","",""],
  ["Chokla sheep","Rajasthan","The 'Indian Merino' — fine carpet wool.","p"],
  ["Nali sheep","Rajasthan","",""],
  ["Deccani sheep","Maharashtra","",""],
  ["Bellary sheep","Karnataka","",""],
  ["Gaddi sheep","Himachal Pradesh","",""],
  ["Nellore sheep","Andhra Pradesh","",""],
  ["Kadaknath chicken","Madhya Pradesh","Black meat; GI tag for Jhabua.","p"]
];
const R8A = [
  ["Holstein-Friesian","Netherlands","The highest milk yield of any cattle breed.","p"],
  ["Jersey","Jersey Island (British Channel Islands)","Milk rich in fat.","p"],
  ["Brown Swiss","Switzerland","",""]
];

LESSONS.push(
{id:"R5", heat:2, title:"Types of farming and shifting cultivation", hi:"कृषि के प्रकार और स्थानांतरी खेती", blocks:[
  {k:"hot", h:"Two favourites: <b>the local names of shifting cultivation</b> (Jhum — north-east, Podu — Andhra, Bewar — MP, Kuruwa — Jharkhand) and <b>the '-culture' words</b> (sericulture — silk, apiculture — bees, viticulture — grapes)."},
  {k:"story", h:"<p>In <b>shifting cultivation</b> ('slash and burn'), a patch of forest is cut and burnt, crops are grown on the ash for a few years, and when the soil tires the farmers move on and let the forest grow back. It is <b>primitive subsistence</b> farming — grown to feed the family. In India it has many local names; in the north-east it is <b>jhum</b>. Abroad it is <b>milpa</b> (Mexico), <b>roca</b> (Brazil) and <b>ladang</b> (Indonesia).</p><p><b>Intensive subsistence</b> farming uses a small plot with heavy labour and inputs. <b>Commercial</b> farming grows crops for sale; <b>plantation</b> farming is its estate form (tea, coffee, rubber). <b>Mixed farming</b> combines crops with livestock. <b>Terrace farming</b> cuts steps into hill slopes to stop soil erosion.</p>", key:"Slash and burn = jhum (NE), podu (AP), bewar (MP), kuruwa (Jharkhand); milpa (Mexico), roca (Brazil), ladang (Indonesia)."},
  {k:"table", title:"Shifting cultivation in India", head:["Local name","Region / state","Note"], rows: R5.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Shifting cultivation abroad", head:["Name","Country / region","Note"], rows: R5W.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"The '-culture' words", head:["Term","What is raised","Note"], rows: R5C.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Very Grapey Vines”</b> — viticulture = grapes. <b>“Apis”</b> is the Latin for bee → apiculture. <b>“Pisces”</b> = fish → pisciculture. <b>“Seri”</b> = silk → sericulture. <b>“Olera”</b> = vegetables."},
  {k:"trap", h:"<b>Horticulture</b> is the whole garden group; <b>pomology</b> is only fruits and <b>olericulture</b> only vegetables. <b>Vermiculture</b> is earthworms, not worms for silk."}
], sum:["Shifting cultivation = slash and burn; jhum in north-east India.","Podu (Andhra Pradesh), Bewar (MP), Kumari (Western Ghats), Kuruwa (Jharkhand), Khil (Himalaya).","Abroad: milpa (Mexico), conuco (Venezuela), roca (Brazil), ladang (Indonesia), ray (Vietnam).","Plantation = one crop on a large estate; mixed farming = crops plus livestock.","Sericulture — silk; apiculture — bees; pisciculture — fish; viticulture — grapes."]},

{id:"R6", heat:3, title:"Agricultural revolutions", hi:"कृषि क्रांतियाँ", blocks:[
  {k:"hot", h:"Pure matching questions: <b>revolution → product</b> (white — milk, blue — fish, yellow — oilseeds, round — potato, silver — eggs) and <b>revolution → father</b> (Swaminathan — Green in India, Kurien — White)."},
  {k:"story", h:"<p>In the mid-1960s India faced food shortages. High-yielding <b>wheat</b> seeds bred by <b>Norman Borlaug</b> in Mexico, with fertilisers and irrigation, transformed Punjab, Haryana and western UP. <b>M. S. Swaminathan</b> led the effort in India and is called the father of India's <b>Green Revolution</b>; IR-8 rice from the Philippines followed. Borlaug won the Nobel Peace Prize in 1970.</p><p>Then came milk. <b>Verghese Kurien</b> built the Amul cooperative at Anand and, as head of the <b>NDDB</b>, ran <b>Operation Flood</b> from 1970 — the <b>White Revolution</b> that made India the world's largest milk producer. Other colours followed for fish (blue), oilseeds (yellow), eggs (silver), potato (round) and more.</p>", key:"Green — foodgrains (Borlaug/Swaminathan); White — milk (Kurien, Operation Flood 1970); Blue — fish; Yellow — oilseeds."},
  {k:"table", title:"Revolution → what it boosted", head:["Revolution","Product","Note"], rows: R6.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Fathers of the revolutions", head:["Person","Revolution","Note"], rows: R6F.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Key facts", rows:[
    ["Green Revolution began","Mid-1960s (1966–67 wheat crop) in Punjab, Haryana, western UP"],
    ["Wheat seeds","Mexican dwarf varieties; Indian ones like Kalyan Sona and Sonalika"],
    ["Operation Flood","1970–1996 in three phases, run by the NDDB"],
    ["National Milk Day","26 November — Verghese Kurien's birthday"],
    ["Rainbow Revolution","Name for all the revolutions together (National Agriculture Policy, 2000)"],
    ["Green Revolution's side effects","Falling groundwater, soil damage, gains limited to a few crops and states"]
  ]},
  {k:"trick", h:"Colour logic: <b>White</b> = milk, <b>Blue</b> = water (fish), <b>Yellow</b> = mustard flowers (oilseeds), <b>Round</b> = potato shape, <b>Silver</b> = eggshell shine, <b>Grey</b> = fertiliser dust, <b>Red</b> = meat/tomato, <b>Black</b> = oil, <b>Brown</b> = leather, <b>Golden fibre</b> = jute, <b>Silver fibre</b> = cotton."},
  {k:"trap", h:"<b>Golden Revolution</b> = horticulture/honey but <b>Golden Fibre</b> = jute. <b>Silver</b> = eggs but <b>Silver Fibre</b> = cotton. Borlaug is the father of the Green Revolution <b>worldwide</b>; Swaminathan in <b>India</b>."}
], sum:["Green Revolution — foodgrains; Borlaug (world), M. S. Swaminathan (India).","White Revolution — milk; Verghese Kurien; Operation Flood from 1970.","Blue — fish; Yellow — oilseeds; Silver — eggs; Round — potato.","Golden — horticulture; Golden Fibre — jute; Silver Fibre — cotton.","Grey — fertilisers; Red — meat and tomato; Black — petroleum; Brown — leather."]},

{id:"R7", heat:2, title:"Irrigation and river projects", hi:"सिंचाई और नदी परियोजनाएँ", blocks:[
  {k:"hot", h:"Asked: <b>the largest source of irrigation</b> (wells and tube wells), <b>where tank irrigation is common</b> (peninsular India), and <b>project → river</b> (Bhakra — Sutlej, Hirakud — Mahanadi, Sardar Sarovar — Narmada, Tehri — Bhagirathi)."},
  {k:"story", h:"<p>Only part of India's farmland is irrigated; the rest depends on the monsoon. <b>Wells and tube wells</b> are now the largest source — especially in Punjab, Haryana and western UP. <b>Canals</b> come next, from rivers such as the Ganga and Sutlej. <b>Tanks</b> are common in peninsular India (Tamil Nadu, Karnataka, Telangana), where hard rock holds little groundwater. The <b>Grand Anicut</b> (Kallanai) on the Kaveri, built by the Chola king Karikala, is among the oldest working water structures in the world.</p><p>After 1947 Nehru called big dams the <b>'temples of modern India'</b>. The <b>Damodar Valley</b> project (1948) was the first multipurpose project; <b>Bhakra Nangal</b> on the Sutlej followed. Modern methods — <b>drip</b> (water drop by drop at the roots) and <b>sprinkler</b> irrigation — save water.</p>", key:"Largest source: wells and tube wells. Tanks: south India. Bhakra — Sutlej; Hirakud — Mahanadi; Tehri — Bhagirathi."},
  {k:"table", title:"Project → river", head:["Project","River","Note"], rows: R7.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Irrigation basics", rows:[
    ["Largest source","Wells and tube wells (groundwater)"],
    ["Tank irrigation","Peninsular India — Tamil Nadu, Karnataka, Telangana"],
    ["Drip irrigation","Water reaches the roots drop by drop — saves the most water"],
    ["Sprinkler irrigation","Water sprayed like rain — good for uneven land"],
    ["Highest dam","Tehri (Uttarakhand)"],
    ["Longest canal","Indira Gandhi (Rajasthan) Canal"],
    ["Scheme","PM Krishi Sinchayee Yojana (2015) — 'Har Khet Ko Pani', 'Per Drop More Crop'"]
  ]},
  {k:"trick", h:"<b>“Bhakra Sutlej, Hira Mahanadi, Sardar Narmada, Tehri Bhagirathi”</b> — say it twice. <b>Two Kaveri dams</b>: KRS (Karnataka) up the river, Mettur (Tamil Nadu) down."},
  {k:"trap", h:"<b>Gandhi Sagar</b> dam is on the <b>Chambal</b>, not the Narmada. <b>Indira Gandhi Canal</b> starts at the Harike barrage in <b>Punjab</b> but irrigates <b>Rajasthan</b>. <b>Nagarjuna Sagar</b> and <b>Srisailam</b> are both on the <b>Krishna</b>."}
], sum:["Wells and tube wells are India's largest source of irrigation.","Tank irrigation is common in peninsular India.","Bhakra Nangal — Sutlej; Hirakud — Mahanadi; Sardar Sarovar — Narmada; Tehri — Bhagirathi.","Damodar Valley (1948) was the first multipurpose project.","Drip irrigation saves the most water; PMKSY aims at 'Per Drop More Crop'."]},

{id:"R8", heat:2, title:"Animal husbandry and fisheries", hi:"पशुपालन और मत्स्य पालन", blocks:[
  {k:"hot", h:"Asked: <b>breed → state</b> (Gir — Gujarat, Murrah — Haryana, Jamunapari — UP, Chokla — Rajasthan), <b>India's rank in milk</b> (first) and fish (second), and exotic breeds (Holstein-Friesian, Jersey)."},
  {k:"story", h:"<p>India is the world's <b>largest milk producer</b>, with about a quarter of world output; <b>Uttar Pradesh</b> produces the most milk, followed by Rajasthan and Madhya Pradesh. India also has the world's largest population of cattle and buffaloes. The <b>Murrah</b> buffalo of Haryana is the star milk animal; desi cows such as <b>Gir</b> and <b>Sahiwal</b> are being improved under the <b>Rashtriya Gokul Mission</b> (2014).</p><p>India is the world's <b>second-largest fish producer</b>, and most fish now come from inland farms; <b>Andhra Pradesh</b> is the top fish-producing state. Andhra Pradesh also leads in eggs. The <b>PM Matsya Sampada Yojana</b> (2020) funds the 'Blue Revolution'.</p>", key:"Milk — India 1st, UP top state; fish — India 2nd, Andhra top state. Murrah — Haryana; Gir — Gujarat; Jamunapari — UP."},
  {k:"table", title:"Indian breeds and their home states", head:["Breed","Home state","Note"], rows: R8.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Where foreign breeds come from", head:["Breed","Origin","Note"], rows: R8A.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Numbers (as of 2023–24 data, Basic Animal Husbandry Statistics)", rows:[
    ["Milk production","About 239 million tonnes (2023–24); India 1st in the world"],
    ["Per capita milk","About 471 grams a day (2023–24)"],
    ["Top milk states","Uttar Pradesh, then Rajasthan and Madhya Pradesh"],
    ["Fish","India 2nd in the world; Andhra Pradesh the top state"],
    ["Eggs","Andhra Pradesh the top state"],
    ["Livestock Census","20th in 2019; the 21st was carried out in 2024–25"],
    ["Days","World Milk Day 1 June · National Milk Day 26 Nov · National Fish Farmers' Day 10 July · World Fisheries Day 21 Nov"]
  ]},
  {k:"trick", h:"<b>“Gir-Gujarat, Murrah-Haryana”</b> — both start with a hard sound and are the champions of their kind. Gujarat's buffalo trio: <b>“J-M-S”</b> — Jaffarabadi, Mehsana, Surti."},
  {k:"trap", h:"<b>Murrah</b> is a <b>buffalo</b>, not a cow. <b>Changthangi</b> (Ladakh) gives <b>pashmina</b>, not angora. <b>Holstein-Friesian</b> is from the <b>Netherlands</b>, Jersey from the British Channel Islands."}
], sum:["India is the largest milk producer; Uttar Pradesh is the top milk state.","India is the second-largest fish producer; Andhra Pradesh leads fish and eggs.","Gir, Kankrej — Gujarat; Sahiwal — Punjab; Tharparkar, Rathi — Rajasthan; Ongole — Andhra.","Murrah — Haryana; Jaffarabadi, Mehsana, Surti — Gujarat; Jamunapari — UP; Chokla — Rajasthan.","Holstein-Friesian — Netherlands; Jersey — Channel Islands; Brown Swiss — Switzerland."]}
);

pairQs("R5", R5, { q: t => `Shifting cultivation called '${t}' is practised in:`, rq: a => `What is shifting cultivation called in ${a}?` });
pairQs("R5", R5W, { q: t => `Slash-and-burn farming called '${t}' is found in:`, rq: a => `Shifting cultivation in ${a} is called:` });
pairQs("R5", R5C, { q: t => `${t} is the rearing or growing of:`, rq: a => `Raising ${a.charAt(0).toLowerCase() + a.slice(1)} is called:` });
pairQs("R6", R6, { q: t => `The ${t} is linked with:`, rq: a => `Which revolution is linked with ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("R6", R6F, { q: t => `${t} is called the father of the:`, rq: a => `Who is called the father of the ${a}?` });
pairQs("R7", R7, { q: t => `The ${t} project is on which river?`, rq: a => `Which project is on the ${a}?`, extra: ["Yamuna","Ravi"] });
pairQs("R8", R8, { q: t => `The ${t} breed belongs to which state?`, rq: a => `Which breed comes from ${a}?` });
pairQs("R8", R8A, { q: t => `The ${t} cattle breed comes from:`, extra: ["Denmark","Australia"] });

QB.push(
["R5","Shifting cultivation is also known as:",["Slash-and-burn agriculture","Terrace farming","Mixed farming","Ley farming"],"Forest is cut, burnt and cropped for a few years.","p"],
["R5","Growing crops and rearing livestock together on one farm is:",["Mixed farming","Mixed cropping","Plantation farming","Shifting cultivation"],"Mixed cropping means two crops in one field.","p"],
["R5","Terrace farming is mainly done to:",["Check soil erosion on slopes","Use flood water","Grow plantation crops","Raise fish"],"Steps slow down running water.",""],
["R5","Growing crops on a small plot with heavy labour mainly to feed the family is:",["Intensive subsistence farming","Commercial farming","Plantation farming","Extensive farming"],"Common in densely populated areas.",""],
["R6","Operation Flood is associated with:",["Verghese Kurien and the White Revolution","M. S. Swaminathan and the Green Revolution","Norman Borlaug and wheat","Sam Pitroda and oilseeds"],"Kurien pioneered Operation Flood (1970) through the NDDB.","p","","","SSC CGL 2025 · 25 Sep 2025 (Shift 3)"],
["R6","Norman Borlaug won the Nobel Peace Prize in:",["1970","1966","1980","1962"],"For his high-yielding wheat varieties.","p"],
["R6","M. S. Swaminathan was given the Bharat Ratna in:",["2024","2019","2015","2023"],"Posthumously; he died in September 2023.","p"],
["R6","The Green Revolution first had its biggest impact on:",["Wheat","Pulses","Oilseeds","Cotton"],"Rice followed; pulses and oilseeds gained little.","p"],
["R6","National Milk Day (26 November) marks the birthday of:",["Verghese Kurien","M. S. Swaminathan","Lal Bahadur Shastri","Tribhuvandas Patel"],"Observed since 2014.",""],
["R7","Which is the largest source of irrigation in India?",["Wells and tube wells","Canals","Tanks","Rivers directly"],"Groundwater irrigates the largest area.","p"],
["R7","Tank irrigation is most common in:",["Peninsular (south) India","The Indo-Gangetic plain","The Thar desert","The north-east"],"Hard rock holds little groundwater, so rainwater is stored in tanks.","p"],
["R7","Which irrigation method saves the most water?",["Drip irrigation","Flood irrigation","Furrow irrigation","Canal irrigation"],"Water drops straight at the roots.","p"],
["R7","India's first multipurpose river valley project was:",["Damodar Valley","Bhakra Nangal","Hirakud","Tungabhadra"],"Set up in 1948 on the model of the Tennessee Valley Authority.","p"],
["R7","Who called dams the 'temples of modern India'?",["Jawaharlal Nehru","Mahatma Gandhi","Sardar Patel","B. R. Ambedkar"],"Said about the Bhakra Nangal project.","p"],
["R7","The Grand Anicut (Kallanai) on the Kaveri was built by:",["Karikala Chola","Rajaraja Chola","Krishnadevaraya","Pulakeshin II"],"One of the oldest working water structures.",""],
["R8","Which country is the world's largest milk producer?",["India","USA","China","Brazil"],"About a quarter of world milk.","p"],
["R8","Which state is India's top milk producer?",["Uttar Pradesh","Gujarat","Punjab","Rajasthan"],"Followed by Rajasthan and Madhya Pradesh.","p"],
["R8","Murrah is a famous breed of:",["Buffalo","Cow","Goat","Sheep"],"From Haryana.","p"],
["R8","Pashmina wool comes from which animal?",["Changthangi goat","Chokla sheep","Yak","Angora rabbit"],"Raised in Ladakh.","p"],
["R8","Kadaknath, known for its black meat, is a breed of:",["Chicken","Goat","Pig","Duck"],"From Jhabua, Madhya Pradesh.","p"],
["R8","The Rashtriya Gokul Mission (2014) is for:",["Indigenous cattle breeds","Fisheries","Poultry","Wool"],"To conserve and improve desi cattle.",""],
["R8","Which state is India's top fish producer?",["Andhra Pradesh","West Bengal","Gujarat","Kerala"],"Mostly from inland aquaculture.","p"],
["R8","India's rank in world fish production is:",["Second","First","Third","Fifth"],"China is first.","p"]
);

LASTMOMENT.push(
{t:"Revolutions", era:["ag"], rows:[["Green","Foodgrains — Swaminathan"],["White","Milk — Kurien"],["Blue","Fish"],["Yellow","Oilseeds"],["Silver","Eggs"],["Round","Potato"],["Golden fibre","Jute"],["Silver fibre","Cotton"]]},
{t:"Shifting cultivation", era:["ag"], rows:[["Jhum","North-east"],["Podu","Andhra Pradesh"],["Bewar","Madhya Pradesh"],["Kumari","Western Ghats"],["Kuruwa","Jharkhand"],["Milpa","Mexico"],["Roca","Brazil"],["Ladang","Indonesia"]]},
{t:"Breeds", era:["ag"], rows:[["Gir","Gujarat cow"],["Sahiwal","Punjab cow"],["Murrah","Haryana buffalo"],["Jamunapari","UP goat"],["Chokla","Rajasthan sheep"],["Kadaknath","MP chicken"],["Holstein-Friesian","Netherlands"]]}
);
TILES.push(["1970","Operation Flood","ag"],["1st","India in milk","ag"],["2nd","India in fish","ag"],["1948","Damodar Valley","ag"]);

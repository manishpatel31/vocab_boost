/* Part 2 · W5 mountains and peaks; W6 rivers and cities on rivers; W7 lakes and waterfalls; W8 deserts, plateaus and grasslands. */
const W5P = [
  ["Mount Everest","Nepal–China border","8,849 m (Nepal–China survey, 2020); Sagarmatha in Nepali, Chomolungma in Tibetan.","p"],
  ["Kangchenjunga","India (Sikkim)–Nepal border","8,586 m — the world's third highest; India's highest.","p"],
  ["Mount Kilimanjaro","Tanzania","Africa's highest; a dormant volcano.","p"],
  ["Mount Kenya","Kenya","Africa's second highest.",""],
  ["Mount Elbrus","Russia","Europe's highest, in the Caucasus.","p"],
  ["Mont Blanc","France–Italy border","Highest peak of the Alps.","p"],
  ["Matterhorn","Switzerland–Italy border","",""],
  ["Aconcagua","Argentina","Highest peak outside Asia.","p"],
  ["Chimborazo","Ecuador","Its top is the farthest point from the Earth's centre.",""],
  ["Mount Fuji","Japan","Japan's highest; a sacred volcano on Honshu.","p"],
  ["Mount Kosciuszko","Australia","",""],
  ["Aoraki / Mount Cook","New Zealand","",""],
  ["Mount Ararat","Turkey (Türkiye)","Linked with Noah's Ark.",""],
  ["Mount Olympus","Greece","Home of the Greek gods in myth.",""],
  ["Mount Etna","Italy (Sicily)","Europe's most active large volcano.","p"],
  ["Mount Kinabalu","Malaysia (Borneo)","",""],
  ["Table Mountain","South Africa","Above Cape Town.",""],
  ["Mauna Kea","USA (Hawaii)","Tallest mountain measured from its base on the sea floor.",""]
];
const W5R = [
  ["Andes","South America (west side)","The longest mountain range on land — about 7,000 km.","p"],
  ["Rockies","North America (Canada and USA)","","p"],
  ["Appalachians","Eastern USA","Old, worn-down mountains.",""],
  ["Alps","Europe (France, Switzerland, Italy, Austria)","","p"],
  ["Pyrenees","France–Spain border","Andorra sits in them.","p"],
  ["Ural","Russia (Europe–Asia divide)","The traditional line between Europe and Asia.","p"],
  ["Caucasus","Between the Black Sea and the Caspian Sea","Has Elbrus.",""],
  ["Carpathians","Eastern Europe (Romania, Slovakia, Ukraine)","",""],
  ["Apennines","Italy","The backbone of Italy.",""],
  ["Atlas","North-west Africa (Morocco, Algeria, Tunisia)","","p"],
  ["Drakensberg","South Africa and Lesotho","",""],
  ["Great Dividing Range","Eastern Australia","","p"],
  ["Hindu Kush","Afghanistan and Pakistan","",""],
  ["Karakoram","Ladakh (India, including PoK) and China","Home of K2 (Godwin-Austen), 8,611 m — the second-highest peak.","p"],
  ["Zagros","Iran","",""],
  ["Tian Shan","Central Asia (China, Kyrgyzstan, Kazakhstan)","",""],
  ["Sierra Madre","Mexico","",""],
  ["Scandinavian Mountains","Norway and Sweden","",""]
];
const W6M = [
  ["Nile","Mediterranean Sea","The longest river (about 6,650 km); flows north.","p"],
  ["Amazon","Atlantic Ocean","Largest by volume of water and by basin.","p"],
  ["Yangtze","East China Sea","Longest in Asia; the Three Gorges Dam.","p"],
  ["Mississippi","Gulf of Mexico","With the Missouri, the longest in North America. The US has called the gulf the 'Gulf of America' since 2025.","p"],
  ["Huang He (Yellow River)","Bohai Sea","Called the 'Sorrow of China' for its floods.","p"],
  ["Volga","Caspian Sea","The longest river in Europe.","p"],
  ["Danube","Black Sea","Flows through 10 countries — more than any other river.","p"],
  ["Rhine","North Sea","",""],
  ["Seine","English Channel","Flows through Paris.",""],
  ["Mekong","South China Sea","Flows through six countries.",""],
  ["Irrawaddy","Andaman Sea","Myanmar's main river.",""],
  ["Indus","Arabian Sea","",""],
  ["Tigris and Euphrates","Persian Gulf (via the Shatt al-Arab)","The rivers of ancient Mesopotamia.",""],
  ["Zambezi","Indian Ocean (Mozambique Channel)","Has Victoria Falls and the Kariba Dam.","p"],
  ["Niger","Gulf of Guinea","",""],
  ["Lena","Laptev Sea (Arctic Ocean)","",""],
  ["Colorado","Gulf of California","Carved the Grand Canyon.",""],
  ["St Lawrence","Gulf of St Lawrence","Drains the Great Lakes into the Atlantic.",""]
];
const W6C = [
  ["Cairo","Nile","","p"],
  ["Khartoum","Blue Nile and White Nile (where they meet)","","p"],
  ["London","Thames","","p"],
  ["Paris","Seine","","p"],
  ["Rome","Tiber","","p"],
  ["Vienna","Danube","",""],
  ["Budapest","Danube","",""],
  ["Berlin","Spree","",""],
  ["Cologne","Rhine","",""],
  ["Hamburg","Elbe","",""],
  ["Prague","Vltava","",""],
  ["Warsaw","Vistula","",""],
  ["Lisbon","Tagus","",""],
  ["Moscow","Moskva","",""],
  ["Kyiv","Dnieper","",""],
  ["Baghdad","Tigris","","p"],
  ["Lahore","Ravi","","p"],
  ["Dhaka","Buriganga","",""],
  ["Bangkok","Chao Phraya","",""],
  ["Phnom Penh","Mekong","",""],
  ["Wuhan","Yangtze","",""],
  ["Washington, D.C.","Potomac","",""],
  ["New York","Hudson","","p"],
  ["Montreal","St Lawrence","",""],
  ["Melbourne","Yarra","",""]
];
const W7L = [
  ["Caspian Sea","the largest lake in the world","Salty; touches Russia, Kazakhstan, Turkmenistan, Iran and Azerbaijan.","p"],
  ["Lake Superior","the largest freshwater lake by area","One of North America's Great Lakes.","p"],
  ["Lake Baikal","the deepest and oldest lake","In Siberia, Russia; about 1,640 m deep; holds about a fifth of the world's unfrozen fresh surface water.","p"],
  ["Lake Titicaca","the highest navigable lake","About 3,810 m up, on the Peru–Bolivia border.","p"],
  ["Dead Sea","the lowest lake on land","About 430 m below sea level; so salty that people float.","p"],
  ["Lake Victoria","the largest lake in Africa","Source of the White Nile; shared by Uganda, Kenya and Tanzania.","p"],
  ["Lake Tanganyika","the longest freshwater lake","Also Africa's deepest lake.",""],
  ["Lake Ladoga","the largest lake in Europe","Near St Petersburg, Russia.",""],
  ["Lake Volta","the largest artificial lake by area","In Ghana, behind the Akosombo Dam.",""],
  ["Lake Michigan","the only Great Lake wholly inside the USA","",""]
];
const W7F = [
  ["Angel Falls","Venezuela","The highest waterfall in the world (979 m).","p"],
  ["Tugela Falls","South Africa","Often listed as the second highest.",""],
  ["Victoria Falls","Zambia–Zimbabwe border","On the Zambezi; local name Mosi-oa-Tunya, 'the smoke that thunders'.","p"],
  ["Niagara Falls","USA–Canada border","On the Niagara River, between Lakes Erie and Ontario.","p"],
  ["Iguazu Falls","Argentina–Brazil border","",""],
  ["Kaieteur Falls","Guyana","",""],
  ["Boyoma (Stanley) Falls","DR Congo","",""],
  ["Sutherland Falls","New Zealand","",""],
  ["Khone Falls","Laos","On the Mekong; often called the widest waterfall.",""],
  ["Rhine Falls","Switzerland","The largest plain waterfall in Europe.",""]
];
const W8D = [
  ["Sahara","North Africa","The largest hot desert.","p"],
  ["Kalahari","Botswana (southern Africa)","Home of the San (Bushmen).","p"],
  ["Namib","Namibia","A coastal desert; among the oldest in the world.","p"],
  ["Atacama","Chile","The driest non-polar desert.","p"],
  ["Patagonian","Argentina","The largest desert in the Americas.",""],
  ["Gobi","Mongolia and China","A cold desert.","p"],
  ["Taklamakan","China (Xinjiang)","",""],
  ["Thar","India and Pakistan","The Great Indian Desert.","p"],
  ["Rub' al Khali","Saudi Arabia (Arabian Peninsula)","The 'Empty Quarter' — the largest sand sea.",""],
  ["Great Victoria","Australia","Australia's largest desert.",""],
  ["Mojave","USA (California and Nevada)","Death Valley — the lowest point of North America.",""],
  ["Karakum","Turkmenistan","",""],
  ["Dasht-e-Kavir","Iran","",""]
];
const W8P = [
  ["Tibetan Plateau","China","The highest and largest plateau.","p"],
  ["Pamir","Tajikistan (Central Asia)","Called the 'Roof of the World'.","p"],
  ["Altiplano","Bolivia and Peru","Holds Lake Titicaca.",""],
  ["Colorado Plateau","USA","The Grand Canyon cuts through it.",""],
  ["Anatolian Plateau","Turkey (Türkiye)","",""],
  ["Iranian Plateau","Iran","",""],
  ["Mongolian Plateau","Mongolia","",""],
  ["Ethiopian Highlands","Ethiopia","Called the 'Roof of Africa'.",""],
  ["Laurentian Plateau (Canadian Shield)","Canada","",""],
  ["Katanga Plateau","DR Congo","Rich in copper.",""]
];
const W8G = [
  ["Pampas","Argentina (and Uruguay)","Temperate; cattle ranching and wheat.","p"],
  ["Steppes","Eurasia (Ukraine to Central Asia)","Temperate; the biggest grassland belt.","p"],
  ["Prairies","North America (USA and Canada)","Temperate; 'wheat basket of the world'.","p"],
  ["Veld","South Africa","Temperate; high veld and low veld.","p"],
  ["Downs","Australia","Temperate; sheep farming.","p"],
  ["Canterbury","New Zealand","Temperate; sheep.","p"],
  ["Llanos","Venezuela and Colombia","Tropical; in the Orinoco basin.","p"],
  ["Campos","Brazil","Tropical.",""],
  ["Savanna","Tropical Africa (e.g., the Serengeti)","Tropical; tall grass with scattered trees.",""],
  ["Puszta","Hungary","Temperate.",""]
];

LESSONS.push(
{id:"W5", heat:3, title:"Mountains, peaks and ranges", hi:"पर्वत, चोटियाँ और श्रेणियाँ", blocks:[
  {k:"hot", h:"Favourites: <b>Everest's height</b> (8,849 m), <b>K2 in the Karakoram</b>, the <b>longest range</b> (Andes), the <b>Ural</b> as the Europe–Asia line, <b>Kilimanjaro</b> in Tanzania and <b>Mont Blanc</b> in the Alps."},
  {k:"story", h:"<p>The highest mountains are all in Asia. <b>Everest</b> (8,849 m) sits on the Nepal–China border; <b>K2</b> (8,611 m) is in the <b>Karakoram</b>; <b>Kangchenjunga</b> (8,586 m) is on the India–Nepal border in Sikkim. In 2020 Nepal and China announced Everest's new height together.</p><p>The <b>Andes</b> run about 7,000 km down South America — the longest range on land — and hold <b>Aconcagua</b>, the highest peak outside Asia. The <b>Rockies</b> and <b>Appalachians</b> cross North America; the <b>Alps</b> (Mont Blanc) and <b>Pyrenees</b> (France–Spain) are in Europe; the <b>Ural</b> mountains mark the line between Europe and Asia; the <b>Atlas</b> rise in Morocco and Algeria.</p>", key:"Everest 8,849 m; K2 — Karakoram; longest range — Andes; Europe–Asia line — Ural; Kilimanjaro — Tanzania; Mont Blanc — Alps."},
  {k:"table", title:"Famous peaks", head:["Peak","Where","Note"], rows: W5P.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Mountain ranges", head:["Range","Where","Note"], rows: W5R.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"The highest peaks of the world", rows:[
    ["1. Mount Everest","8,849 m — Himalayas (Nepal–China)"],
    ["2. K2 (Godwin-Austen)","8,611 m — Karakoram"],
    ["3. Kangchenjunga","8,586 m — Himalayas (India–Nepal)"],
    ["4. Lhotse","8,516 m — next to Everest"],
    ["5. Makalu","8,485 m — Nepal–China"],
    ["Peaks above 8,000 m","14 in all, every one in the Himalaya or Karakoram"]
  ]},
  {k:"trick", h:"<b>“E-K-K”</b> = <b>E</b>verest, <b>K</b>2, <b>K</b>angchenjunga — the top three. For ranges, go west to east across Europe: <b>P</b>yrenees, <b>A</b>lps, <b>C</b>arpathians, <b>C</b>aucasus, <b>U</b>ral — <b>“PACCU”</b>."},
  {k:"trap", h:"<b>K2</b> is in the <b>Karakoram</b>, not the Himalayas. <b>Mont Blanc</b> (Alps) is not Europe's highest — <b>Elbrus</b> (Caucasus) is. <b>Mauna Kea</b> is the tallest from its base, but Everest is the highest above sea level."}
], sum:["Everest (8,849 m) is the highest peak; K2 (8,611 m, Karakoram) is second; Kangchenjunga third.","The Andes are the longest range on land; Aconcagua is their highest peak.","The Ural mountains divide Europe and Asia; the Pyrenees divide France and Spain.","Kilimanjaro is in Tanzania; Elbrus (Russia) is Europe's highest; Mont Blanc tops the Alps.","Rockies and Appalachians — North America; Atlas — north-west Africa; Great Dividing Range — Australia."]},

{id:"W6", heat:3, title:"Rivers and cities on rivers", hi:"नदियाँ और नदी तट के नगर", blocks:[
  {k:"hot", h:"Two question types: <b>records</b> (longest — Nile; largest by volume — Amazon; most countries — Danube) and <b>“City X stands on which river?”</b> — London–Thames, Paris–Seine, Rome–Tiber, Baghdad–Tigris, Vienna and Budapest–Danube."},
  {k:"story", h:"<p>The <b>Nile</b> is the longest river (about 6,650 km). It flows north into the Mediterranean; at <b>Khartoum</b> the Blue Nile and White Nile join, and at <b>Cairo</b> it nears its delta. The <b>Amazon</b> carries the most water of any river. The <b>Yangtze</b> is Asia's longest; the <b>Huang He</b> is the 'Sorrow of China' for its floods.</p><p>In Europe the <b>Volga</b> is longest and empties into the Caspian Sea; the <b>Danube</b> passes through 10 countries and four capitals — <b>Vienna, Bratislava, Budapest, Belgrade</b>. Great cities grew on rivers: <b>London</b> on the Thames, <b>Paris</b> on the Seine, <b>Rome</b> on the Tiber, <b>Baghdad</b> on the Tigris, <b>New York</b> on the Hudson.</p>", key:"Nile longest; Amazon most water; Volga → Caspian; Danube 10 countries; London–Thames, Paris–Seine, Rome–Tiber, Baghdad–Tigris."},
  {k:"table", title:"Where great rivers end", head:["River","Flows into","Note"], rows: W6M.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Cities on rivers", head:["City","River","Note"], rows: W6C.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"River records", rows:[
    ["Longest river","Nile (Africa) — about 6,650 km"],
    ["Largest by volume and basin","Amazon (South America)"],
    ["Longest in Asia","Yangtze (China)"],
    ["Longest in Europe","Volga (Russia)"],
    ["Most countries","Danube — 10 countries"],
    ["Crosses the Equator twice","Congo (also the deepest river)"],
    ["Longest in Australia","Murray (with the Darling)"],
    ["Big dams","Aswan High Dam — Nile (Egypt); Three Gorges — Yangtze (China); Hoover — Colorado (USA)"]
  ]},
  {k:"trick", h:"<b>“Danube's Four Capitals: Very Big Bright Buildings”</b> → <b>V</b>ienna, <b>B</b>ratislava, <b>B</b>udapest, <b>B</b>elgrade. <b>“Volga Visits the Caspian”</b> — both have a 'V' sound and neither reaches the ocean."},
  {k:"trap", h:"The <b>Amazon</b> is the largest river, but the <b>Nile</b> is the longest. <b>Berlin</b> is on the <b>Spree</b>, not the Rhine. <b>Lahore</b> is on the <b>Ravi</b>, <b>Dhaka</b> on the <b>Buriganga</b>. The <b>Congo</b>, not the Amazon, crosses the Equator twice."}
], sum:["Nile — longest; Amazon — most water; Yangtze — longest in Asia; Volga — longest in Europe.","The Volga falls into the Caspian Sea; the Danube into the Black Sea; the Nile into the Mediterranean.","The Danube flows through 10 countries and past Vienna, Bratislava, Budapest and Belgrade.","London–Thames, Paris–Seine, Rome–Tiber, Berlin–Spree, Baghdad–Tigris, Cairo–Nile.","New York–Hudson, Washington–Potomac, New Orleans–Mississippi, Bangkok–Chao Phraya."]},

{id:"W7", heat:2, title:"Lakes and waterfalls", hi:"झीलें और जलप्रपात", blocks:[
  {k:"hot", h:"Records again: <b>largest lake</b> (Caspian Sea), <b>largest freshwater lake</b> (Superior), <b>deepest</b> (Baikal), <b>highest navigable</b> (Titicaca), <b>highest waterfall</b> (Angel Falls) and where <b>Victoria</b> and <b>Niagara</b> Falls are."},
  {k:"story", h:"<p>The <b>Caspian Sea</b> is called a sea but is really the world's largest lake. <b>Lake Superior</b> is the largest freshwater lake by area, while Siberia's <b>Lake Baikal</b> is the deepest and oldest and holds about a fifth of the world's unfrozen fresh surface water. High in the Andes, <b>Lake Titicaca</b> (Peru–Bolivia) is the highest lake that boats can sail on. <b>Lake Victoria</b>, Africa's largest, feeds the White Nile.</p><p>Water falls hardest in South America and Africa. <b>Angel Falls</b> in Venezuela drops 979 m — the highest. <b>Victoria Falls</b> on the Zambezi, between Zambia and Zimbabwe, is called <b>Mosi-oa-Tunya</b>, 'the smoke that thunders'. <b>Niagara Falls</b> lies between the USA and Canada, and <b>Iguazu</b> between Argentina and Brazil.</p>", key:"Caspian largest; Superior largest freshwater; Baikal deepest; Titicaca highest navigable; Angel Falls highest; Victoria Falls — Zambezi."},
  {k:"table", title:"Lake records", head:["Lake","Known as","Note"], rows: W7L.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Waterfalls", head:["Waterfall","Where","Note"], rows: W7F.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"The Great Lakes of North America", rows:[
    ["The five","Superior, Michigan, Huron, Erie, Ontario"],
    ["Largest","Superior"],
    ["Only one wholly in the USA","Michigan"],
    ["Niagara Falls","On the Niagara River, from Lake Erie to Lake Ontario"],
    ["Outlet to the sea","The St Lawrence River"]
  ]},
  {k:"trick", h:"Great Lakes — <b>HOMES</b>: <b>H</b>uron, <b>O</b>ntario, <b>M</b>ichigan, <b>E</b>rie, <b>S</b>uperior. Biggest to smallest by area — <b>“Super Heroes Must Eat Oranges”</b>: Superior, Huron, Michigan, Erie, Ontario."},
  {k:"trap", h:"<b>Caspian</b> is the largest lake but it is salty; the largest <b>freshwater</b> lake is <b>Superior</b> (by area) and <b>Baikal</b> (by volume). The <b>Dead Sea</b> is a lake too. <b>Victoria Falls</b> is on the <b>Zambezi</b>, not on Lake Victoria."}
], sum:["Caspian Sea — largest lake; Superior — largest freshwater lake by area.","Baikal (Russia) — deepest and oldest lake; Titicaca (Peru–Bolivia) — highest navigable lake.","Lake Victoria — Africa's largest; source of the White Nile.","Angel Falls (Venezuela) — highest waterfall; Victoria Falls (Zambia–Zimbabwe) on the Zambezi.","Great Lakes are HOMES; Niagara Falls lies between Lakes Erie and Ontario."]},

{id:"W8", heat:2, title:"Deserts, plateaus and grasslands", hi:"मरुस्थल, पठार और घास के मैदान", blocks:[
  {k:"hot", h:"SSC asks the <b>grassland names</b> almost every year — Pampas (Argentina), Steppes (Eurasia), Prairies (North America), Veld (South Africa), Downs (Australia). Also: <b>largest hot desert</b> (Sahara), <b>driest</b> (Atacama) and the <b>Roof of the World</b> (Pamir)."},
  {k:"story", h:"<p>The <b>Sahara</b> covers most of North Africa — the largest hot desert. In the south, the <b>Kalahari</b> (Botswana) and the coastal <b>Namib</b> (Namibia) are home to the San people. The <b>Atacama</b> in Chile is so dry that some weather stations have never recorded rain. Asia has the cold <b>Gobi</b> (Mongolia–China), the <b>Taklamakan</b> and India's <b>Thar</b>.</p><p>Grasslands carry local names on every continent: <b>Prairies</b> in North America, <b>Pampas</b> in Argentina, <b>Steppes</b> across Eurasia, <b>Veld</b> in South Africa, <b>Downs</b> in Australia and <b>Canterbury</b> in New Zealand — all temperate. The tropical ones are the African <b>Savanna</b>, the <b>Llanos</b> of Venezuela and the <b>Campos</b> of Brazil. Above them all, the <b>Tibetan Plateau</b> is the highest and largest plateau, and the <b>Pamir</b> is the 'Roof of the World'.</p>", key:"Pampas–Argentina, Steppes–Eurasia, Prairies–N America, Veld–S Africa, Downs–Australia, Llanos–Venezuela, Campos–Brazil."},
  {k:"table", title:"Deserts", head:["Desert","Where","Note"], rows: W8D.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Plateaus", head:["Plateau","Mainly in","Note"], rows: W8P.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Grasslands", head:["Grassland","Where","Note"], rows: W8G.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Temperate grasslands — <b>“PPS-VDC”</b>: <b>P</b>rairies, <b>P</b>ampas, <b>S</b>teppes, <b>V</b>eld, <b>D</b>owns, <b>C</b>anterbury. Tropical — <b>“SLC”</b>: <b>S</b>avanna, <b>L</b>lanos, <b>C</b>ampos. <b>Downs = Down Under</b> (Australia)."},
  {k:"trap", h:"<b>Selvas</b> is the Amazon <b>rainforest</b>, not a grassland. <b>Llanos</b> are tropical (Venezuela), <b>Pampas</b> temperate (Argentina). The largest desert overall is <b>Antarctica</b>; the Sahara is the largest <b>hot</b> one. <b>Pamir</b> is the 'Roof of the World'; Ethiopia is the 'Roof of Africa'."}
], sum:["Sahara — largest hot desert; Atacama (Chile) — driest; Gobi — cold desert in Mongolia and China.","Kalahari (Botswana) and Namib (Namibia) in southern Africa; Thar in India and Pakistan.","Tibetan Plateau — highest and largest; Pamir — Roof of the World.","Temperate grasslands: Prairies, Pampas, Steppes, Veld, Downs, Canterbury.","Tropical grasslands: Savanna (Africa), Llanos (Venezuela–Colombia), Campos (Brazil)."]}
);

pairQs("W5", W5P, { q: t => `${t} is located in:` });
pairQs("W5", W5R, { q: t => `Where are the ${t} mountains?` });
pairQs("W6", W6M, { q: t => `The ${t} river flows into the:` });
pairQs("W6", W6C, { q: t => `${t} stands on which river?` });
pairQs("W7", W7L, { q: t => `${t} is known as:`, rq: a => `Which lake is ${a}?` });
pairQs("W7", W7F, { q: t => `${t} is in:`, rq: a => `Which waterfall is in ${a}?` });
pairQs("W8", W8D, { q: t => `The ${t} Desert is in:` });
pairQs("W8", W8P, { q: t => `The ${t} is mainly in:` });
pairQs("W8", W8G, { q: t => `The ${t} grasslands are found in:`, rq: a => `Which grassland is found in ${a}?` });

QB.push(
["W5","K2 (Mount Godwin-Austen), the world's second-highest peak, lies in the:",["Karakoram","Himalayas","Hindu Kush","Pamir"],"8,611 m.","p"],
["W5","Which is the longest mountain range on land?",["Andes","Rockies","Himalayas","Great Dividing Range"],"About 7,000 km along South America.","p"],
["W5","Which mountains are taken as the boundary between Europe and Asia?",["Ural","Alps","Carpathians","Atlas"],"With the Ural River and the Caucasus.","p"],
["W5","The height of Mount Everest announced jointly by Nepal and China in 2020 is:",["8,849 m","8,848 m","8,611 m","8,586 m"],"The old figure was 8,848 m.","p"],
["W5","Which is the highest peak in Europe?",["Mount Elbrus","Mont Blanc","Matterhorn","Mount Olympus"],"5,642 m, in the Caucasus.","p"],
["W5","The Atlas Mountains are in:",["North-west Africa","South America","Central Asia","Eastern Europe"],"Morocco, Algeria and Tunisia.",""],
["W6","Which is the longest river in the world?",["Nile","Amazon","Yangtze","Mississippi"],"About 6,650 km.","p"],
["W6","Which river carries the largest volume of water?",["Amazon","Nile","Congo","Yangtze"],"It also has the largest basin.","p"],
["W6","Which river crosses the Equator twice?",["Congo","Amazon","Nile","Niger"],"The Congo crosses the Equator twice as it arcs through Central Africa.","p"],
["W6","The Huang He (Yellow River) is called the:",["Sorrow of China","Gift of China","Pride of China","Mother of China"],"For its deadly floods.","p"],
["W6","The Three Gorges Dam is on the river:",["Yangtze","Huang He","Mekong","Amur"],"In China.","p"],
["W6","The Aswan High Dam is built on the river:",["Nile","Niger","Zambezi","Congo"],"In Egypt; its lake is Lake Nasser.","p"],
["W6","Which river flows through the most countries?",["Danube","Nile","Amazon","Rhine"],"Ten countries.",""],
["W7","Which is the largest lake in the world?",["Caspian Sea","Lake Superior","Lake Baikal","Lake Victoria"],"Salty, between Europe and Asia.","p"],
["W7","Which is the highest waterfall in the world?",["Angel Falls","Victoria Falls","Niagara Falls","Iguazu Falls"],"979 m, Venezuela.","p"],
["W7","Victoria Falls is on which river?",["Zambezi","Nile","Congo","Limpopo"],"Between Zambia and Zimbabwe.","p"],
["W7","Niagara Falls lies between which two lakes?",["Lake Erie and Lake Ontario","Lake Superior and Lake Huron","Lake Michigan and Lake Huron","Lake Huron and Lake Erie"],"Niagara Falls is on the Niagara River, which flows from Lake Erie to Lake Ontario.",""],
["W7","Which of these is NOT one of North America's Great Lakes?",["Lake Winnipeg","Lake Huron","Lake Erie","Lake Ontario"],"The five are Superior, Michigan, Huron, Erie, Ontario.",""],
["W7","The local name of Victoria Falls, Mosi-oa-Tunya, means:",["The smoke that thunders","The river of gold","The great water","The falling sky"],"Mosi-oa-Tunya ('the smoke that thunders') is the local name of Victoria Falls on the Zambezi.",""],
["W8","Which is the largest hot desert in the world?",["Sahara","Arabian","Gobi","Kalahari"],"Antarctica is the largest desert overall.","p"],
["W8","Which is known as the 'Roof of the World'?",["Pamir","Tibetan Plateau","Deccan Plateau","Ethiopian Highlands"],"Tibet is also called this in some books, but SSC answers Pamir.","p"],
["W8","The Pampas grasslands are in:",["Argentina","Australia","South Africa","Hungary"],"The Pampas are temperate grasslands in Argentina (and Uruguay).","p"],
["W8","Which of these is a tropical grassland?",["Llanos","Pampas","Steppes","Prairies"],"Llanos — Venezuela and Colombia.",""],
["W8","The Selvas are:",["Equatorial rainforests of the Amazon","Grasslands of Argentina","Deserts of Mexico","Plateaus of Brazil"],"Not a grassland.",""],
["W8","Which is the driest non-polar desert in the world?",["Atacama","Sahara","Thar","Namib"],"In Chile.","p"]
);

LASTMOMENT.push(
{t:"Peaks and ranges", era:["wg"], rows:[["Everest","8,849 m"],["K2","Karakoram"],["Longest range","Andes"],["Europe–Asia line","Ural"],["Kilimanjaro","Tanzania"],["Europe's highest","Elbrus"],["Alps' highest","Mont Blanc"],["France–Spain","Pyrenees"]]},
{t:"Cities on rivers", era:["wg"], rows:[["London","Thames"],["Paris","Seine"],["Rome","Tiber"],["Berlin","Spree"],["Vienna, Budapest","Danube"],["Baghdad","Tigris"],["New York","Hudson"],["Lahore","Ravi"]]},
{t:"Grasslands", era:["wg"], rows:[["Pampas","Argentina"],["Steppes","Eurasia"],["Prairies","N America"],["Veld","South Africa"],["Downs","Australia"],["Canterbury","New Zealand"],["Llanos","Venezuela"],["Campos","Brazil"]]},
{t:"Water records", era:["wg"], rows:[["Longest river","Nile"],["Most water","Amazon"],["Largest lake","Caspian"],["Largest freshwater","Superior"],["Deepest lake","Baikal"],["Highest navigable","Titicaca"],["Highest falls","Angel"],["Driest desert","Atacama"]]}
);
TILES.push(["6,650 km","Nile — longest river","wg"],["979 m","Angel Falls","wg"],["10","Countries on the Danube","wg"],["7,000 km","Andes — longest range","wg"]);

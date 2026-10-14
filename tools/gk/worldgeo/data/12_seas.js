/* Part 3 · W9 straits, canals, seas and islands; W10 boundary lines, nicknames and peoples of the world. */
const W9S = [
  ["Strait of Gibraltar","Spain and Morocco (Europe and Africa)","Joins the Atlantic and the Mediterranean.","p"],
  ["Bering Strait","Russia and Alaska, USA (Asia and North America)","Joins the Pacific and the Arctic.","p"],
  ["Palk Strait","India and Sri Lanka","Joins the Bay of Bengal and the Gulf of Mannar (through Palk Bay).","p",1],
  ["Strait of Malacca","Malay Peninsula and Sumatra (Indonesia)","Joins the Andaman Sea and the South China Sea.","p"],
  ["Strait of Hormuz","Iran and Oman","Joins the Persian Gulf and the Gulf of Oman; key oil route.","p"],
  ["Bab-el-Mandeb","Yemen and Djibouti (Asia and Africa)","Joins the Red Sea and the Gulf of Aden.","p"],
  ["Strait of Dover","England and France","Joins the English Channel and the North Sea.","p"],
  ["Bosphorus","European and Asian Turkey (at Istanbul)","Joins the Black Sea and the Sea of Marmara.","p"],
  ["Bass Strait","Australia and Tasmania","",""],
  ["Cook Strait","North Island and South Island of New Zealand","",""],
  ["Strait of Magellan","Mainland South America and Tierra del Fuego","",""],
  ["Drake Passage","South America and Antarctica","",""],
  ["Strait of Messina","Mainland Italy and Sicily","",""],
  ["Korea Strait","South Korea and Japan","",""],
  ["Sunda Strait","Java and Sumatra","",""],
  ["Strait of Florida","USA (Florida) and Cuba","",""],
  ["Mozambique Channel","Mozambique and Madagascar","",""],
  ["Davis Strait","Greenland and Baffin Island (Canada)","",""]
];
const W9C = [
  ["Suez Canal","Mediterranean Sea and Red Sea","Egypt; opened 1869; no locks.","p"],
  ["Panama Canal","Atlantic and Pacific Oceans","Panama; opened 1914; uses locks; run by Panama since 1999.","p",1],
  ["Kiel Canal","North Sea and Baltic Sea","Germany; opened 1895.","p"],
  ["Corinth Canal","Gulf of Corinth and Saronic Gulf (Aegean Sea)","Greece; opened 1893.",""],
  ["Volga–Don Canal","Volga and Don rivers (Caspian side to the Black Sea side)","Russia; opened 1952.",""],
  ["Soo Locks (Sault Ste. Marie)","Lake Superior and Lake Huron","USA–Canada.",""],
  ["Welland Canal","Lake Erie and Lake Ontario","Canada; ships go round Niagara Falls.",""],
  ["Grand Canal","Beijing and Hangzhou","China; the longest canal, begun about 2,500 years ago.","p"],
  ["Erie Canal","Hudson River and Lake Erie","New York State, USA.",""],
  ["Manchester Ship Canal","Manchester and the Irish Sea (Mersey estuary)","England.",""]
];
const W9I = [
  ["Greenland","Denmark","The largest island; self-governing.","p"],
  ["New Guinea","Indonesia and Papua New Guinea","The second-largest island.","p"],
  ["Borneo","Indonesia, Malaysia and Brunei","The third-largest island; shared by three countries.","p"],
  ["Baffin Island","Canada","The fifth largest.",""],
  ["Sumatra","Indonesia","",""],
  ["Honshu","Japan","Japan's main island; Tokyo and Mount Fuji.",""],
  ["Great Britain","United Kingdom","",""],
  ["Sicily","Italy","The largest island in the Mediterranean.","p"],
  ["Corsica","France","Napoleon's birthplace.",""],
  ["Crete","Greece","",""],
  ["Tasmania","Australia","",""],
  ["Zanzibar","Tanzania","The 'Island of Cloves'.","p"],
  ["Galápagos Islands","Ecuador","Darwin's islands.",""],
  ["Hawaii","USA","",""],
  ["Tierra del Fuego","Chile and Argentina","",""]
];
const W10L = [
  ["Durand Line","Pakistan and Afghanistan","Drawn in 1893 by Sir Mortimer Durand.","p",1],
  ["McMahon Line","India and China","Drawn at the Simla Convention, 1914; China does not accept it.","p"],
  ["Radcliffe Line","India and Pakistan","Drawn in 1947 by Sir Cyril Radcliffe; also India–Bangladesh (then East Pakistan).","p",1],
  ["38th Parallel","North Korea and South Korea","",""],
  ["49th Parallel","USA and Canada","",""],
  ["17th Parallel","North and South Vietnam (1954–1976)","",""],
  ["Oder–Neisse Line","Germany and Poland","Fixed after World War II (1945).","p"],
  ["Maginot Line","France and Germany","A line of French forts built in the 1930s.","p"],
  ["Mannerheim Line","Finland and the Soviet Union","A Finnish defence line on the Karelian Isthmus.",""],
  ["Mason–Dixon Line","Pennsylvania and Maryland (USA)","The old line between the US North and South.",""],
  ["Line of Control (LoC)","India and Pakistan (in Jammu and Kashmir)","",""],
  ["Line of Actual Control (LAC)","India and China (actual control)","",""]
];
const W10N = [
  ["Land of the Rising Sun","Japan","","p"],
  ["Land of the Midnight Sun","Norway","","p"],
  ["Land of a Thousand Lakes","Finland","","p"],
  ["Land of the Thunder Dragon","Bhutan","","p"],
  ["Land of White Elephants","Thailand","","p"],
  ["Land of Golden Pagodas","Myanmar","","p"],
  ["Land of the Morning Calm","Korea","",""],
  ["Land of the Maple Leaf","Canada","",""],
  ["Land of the Long White Cloud","New Zealand","Aotearoa in Maori.",""],
  ["Land of the Golden Fleece","Australia","",""],
  ["Dark Continent","Africa","","p"],
  ["Gift of the Nile","Egypt","","p"],
  ["Sugar Bowl of the World","Cuba","","p"],
  ["Emerald Isle","Ireland","",""],
  ["Land of Cakes","Scotland","",""],
  ["Playground of Europe","Switzerland","",""],
  ["Cockpit of Europe","Belgium","",""],
  ["Eternal City","Rome","","p"],
  ["Big Apple","New York","","p"],
  ["Windy City","Chicago","",""],
  ["City of Golden Gate","San Francisco","",""],
  ["Forbidden City","Beijing (Lhasa in older books)","",""],
  ["Venice of the North","Stockholm","",""],
  ["Key to the Mediterranean","Gibraltar","",""]
];
const W10T = [
  ["Bushmen (San)","Kalahari Desert (Botswana, Namibia)","Hunter-gatherers.","p"],
  ["Masai (Maasai)","Kenya and Tanzania","Cattle herders.","p"],
  ["Eskimo (Inuit)","Arctic — Greenland, Canada, Alaska","Igloo; kayak; hunt seals.","p"],
  ["Bedouin","Arabian Desert","Arab desert nomads.","p"],
  ["Tuareg","Sahara Desert (Algeria, Mali, Niger)","Called 'blue men' for their indigo robes.",""],
  ["Berber","North Africa (Morocco, Algeria)","",""],
  ["Pygmy","Congo Basin (Central Africa)","Short-statured forest people.","p"],
  ["Zulu","South Africa","",""],
  ["Khoikhoi (Hottentots)","Namibia and South Africa","Herders.",""],
  ["Aboriginal","Australia","","p"],
  ["Maori","New Zealand","","p"],
  ["Sami (Lapps)","Lapland (Norway, Sweden, Finland)","Reindeer herders.","p"],
  ["Yakut","Siberia (Russia)","",""],
  ["Kirghiz","Kyrgyzstan (Central Asian steppes)","Herders of the grasslands.",""],
  ["Ainu","Hokkaido (Japan)","",""],
  ["Fulani","West Africa (Sahel)","Cattle herders.",""],
  ["Papuan","New Guinea","",""]
];

LESSONS.push(
{id:"W9", heat:3, title:"Straits, canals, seas and islands", hi:"जलडमरूमध्य, नहरें, सागर और द्वीप", blocks:[
  {k:"hot", h:"<b>“Which strait separates X and Y?”</b> and <b>“Which canal joins X and Y?”</b> are among the most-asked world-geography questions — Gibraltar, Bering, Palk, Malacca, Hormuz; Suez, Panama, Kiel. Also the <b>largest island</b> (Greenland)."},
  {k:"story", h:"<p>A <b>strait</b> is a narrow sea passage between two pieces of land. <b>Gibraltar</b> separates Spain from Morocco and lets the Atlantic into the Mediterranean. The <b>Bering Strait</b> separates Russia from Alaska — Asia from North America. <b>Palk Strait</b> separates India from Sri Lanka. Oil tankers crowd <b>Hormuz</b> (Iran–Oman) and <b>Malacca</b> (Malaysia–Sumatra).</p><p>A <b>canal</b> is dug by people. The <b>Suez Canal</b> (Egypt, 1869) joins the Mediterranean and the Red Sea, so ships from Europe need not sail round Africa. The <b>Panama Canal</b> (1914) joins the Atlantic and the Pacific. The <b>Kiel Canal</b> in Germany joins the North Sea and the Baltic. The largest island is <b>Greenland</b>, which belongs to Denmark.</p>", key:"Gibraltar Spain–Morocco; Bering Russia–Alaska; Palk India–Sri Lanka; Suez Med–Red Sea; Panama Atlantic–Pacific; Kiel North Sea–Baltic."},
  {k:"table", title:"Straits and what they separate", head:["Strait","Separates","Note"], rows: W9S.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Canals and what they join", head:["Canal","Joins","Note"], rows: W9C.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Islands and their countries", head:["Island","Belongs to","Note"], rows: W9I.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Seas and gulfs worth knowing", rows:[
    ["Sargasso Sea","In the North Atlantic — the only sea with no coastline"],
    ["Dead Sea","Between Jordan and Israel/West Bank — the lowest and one of the saltiest"],
    ["Red Sea","Between Africa and Arabia; joined to the Mediterranean by the Suez Canal"],
    ["Yellow Sea","Between China and the Korean Peninsula"],
    ["Adriatic Sea","Between Italy and the Balkans"],
    ["Gulf of Guinea","West Africa — where the Equator meets the Prime Meridian (0°, 0°)"],
    ["Gulf of Bothnia","Between Sweden and Finland"],
    ["Dardanelles","Turkey — joins the Sea of Marmara and the Aegean Sea"],
    ["Largest islands in order","Greenland, New Guinea, Borneo, Madagascar, Baffin"]
  ]},
  {k:"trick", h:"<b>Suez = S</b>ea to <b>S</b>ea (Mediterranean–Red); <b>Panama = P</b>acific (with the Atlantic). Islands by size — <b>“Green New Boots Make Baby”</b> → Greenland, New Guinea, Borneo, Madagascar, Baffin."},
  {k:"trap", h:"<b>Australia</b> is a continent, not counted as an island — so <b>Greenland</b> is the largest island. <b>Bab-el-Mandeb</b> opens the Red Sea to the south; <b>Hormuz</b> opens the Persian Gulf. <b>Bosphorus</b> joins the Black Sea to Marmara; the <b>Dardanelles</b> joins Marmara to the Aegean."}
], sum:["Gibraltar separates Spain and Morocco; Bering separates Russia and Alaska; Palk separates India and Sri Lanka.","Hormuz (Iran–Oman) and Malacca (Malaysia–Sumatra) are key oil routes; Bab-el-Mandeb guards the Red Sea.","Suez Canal (1869) joins the Mediterranean and Red Sea; Panama Canal (1914) joins the Atlantic and Pacific.","Kiel Canal joins the North Sea and Baltic; the Grand Canal of China is the longest.","Greenland (Denmark) is the largest island; then New Guinea, Borneo, Madagascar and Baffin."]},

{id:"W10", heat:3, title:"Boundary lines, nicknames and peoples", hi:"सीमा रेखाएँ, उपनाम और जनजातियाँ", blocks:[
  {k:"hot", h:"Three quick-fire favourites: <b>boundary lines</b> (Durand, McMahon, Radcliffe, 38th and 49th Parallel), <b>nicknames</b> (Land of the Rising Sun, Land of the Midnight Sun, Land of Thousand Lakes) and <b>tribes</b> (Bushmen, Masai, Eskimo, Bedouin, Pygmies)."},
  {k:"story", h:"<p>Many borders were drawn by one man with a pen. <b>Sir Mortimer Durand</b> drew the <b>Durand Line</b> (1893) between British India and Afghanistan — today Pakistan–Afghanistan. <b>Sir Henry McMahon</b> drew the <b>McMahon Line</b> (1914) — India–China. <b>Sir Cyril Radcliffe</b> drew the <b>Radcliffe Line</b> (1947) — India–Pakistan. Lines of latitude became borders too: the <b>38th Parallel</b> splits the two Koreas; the <b>49th Parallel</b> runs between the USA and Canada.</p><p>Places earn nicknames: <b>Japan</b> is the Land of the Rising Sun, <b>Norway</b> the Land of the Midnight Sun, <b>Finland</b> the Land of a Thousand Lakes, <b>Bhutan</b> the Land of the Thunder Dragon. And peoples are tied to places: the <b>Bushmen</b> of the Kalahari, the <b>Masai</b> of Kenya and Tanzania, the <b>Inuit</b> (Eskimo) of the Arctic and the <b>Bedouin</b> of the Arabian desert.</p>", key:"Durand Pak–Afg; McMahon India–China; Radcliffe India–Pak; 38th Koreas; 49th USA–Canada; Oder–Neisse Germany–Poland."},
  {k:"table", title:"Boundary lines", head:["Line","Between","Note"], rows: W10L.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Nicknames of places", head:["Nickname","Place","Note"], rows: W10N.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Peoples and tribes of the world", head:["People","Homeland","Note"], rows: W10T.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Defence lines (not borders)", rows:[
    ["Maginot Line","French forts facing Germany, built in the 1930s"],
    ["Siegfried Line","German forts facing France (World War I and II)"],
    ["Hindenburg Line","German World War I defence line in northern France (1916–17). Many GK books wrongly say 'Germany–Poland'"],
    ["Mannerheim Line","Finnish defence line against the Soviet Union"]
  ]},
  {k:"trick", h:"<b>“Durand Divides Afghans; McMahon Marks Mountains (China); Radcliffe Ruled Partition.”</b> Parallels: <b>38 = Korea</b> (think of the 1950s Korean war line), <b>49 = USA–Canada</b> (both North American, '49 up north')."},
  {k:"trap", h:"<b>Durand</b> = Pakistan–Afghanistan, <b>not</b> India–Afghanistan. The <b>Oder–Neisse</b> line is the Germany–Poland border; the <b>Hindenburg</b> line was a German war line in France. <b>Land of the Rising Sun</b> = Japan; <b>Midnight Sun</b> = Norway. <b>Bedouin</b> = Arab desert; <b>Tuareg</b> = Sahara."}
], sum:["Durand Line (1893) — Pakistan and Afghanistan; McMahon Line (1914) — India and China.","Radcliffe Line (1947) — India and Pakistan; 38th Parallel — the two Koreas; 49th Parallel — USA and Canada.","Oder–Neisse — Germany and Poland; Maginot — French forts facing Germany.","Japan — Rising Sun; Norway — Midnight Sun; Finland — Thousand Lakes; Bhutan — Thunder Dragon.","Bushmen — Kalahari; Masai — Kenya and Tanzania; Inuit — Arctic; Bedouin — Arabia; Pygmies — Congo."]}
);

pairQs("W9", W9S, { q: t => `The ${t} separates:` });
pairQs("W9", W9C, { q: t => `The ${t} joins:` });
pairQs("W9", W9I, { q: t => `${t} belongs to:` });
pairQs("W10", W10L, { q: t => `The ${t} lies between:`, rq: a => `Which line lies between ${a}?` });
pairQs("W10", W10N, { q: t => `Which place is called the “${t}”?` });
pairQs("W10", W10T, { q: t => `The ${t} people live mainly in:` });

QB.push(
["W9","Sri Lanka is separated from India by the:",["Palk Strait","Strait of Gibraltar","Strait of Malacca","Bering Strait"],"Palk Strait, between Tamil Nadu and northern Sri Lanka.","p","","","SSC MTS · 16 Jun 2023 (Shift 1)"],
["W9","Which waterway connects the Atlantic Ocean with the Pacific Ocean?",["Panama Canal","Volga–Don Canal","Suez Canal","Kiel Canal"],"Opened in 1914.","p","","","SSC GD · 11 Jan 2023 (Shift 2)"],
["W9","Which is the largest island in the world?",["Greenland","New Guinea","Borneo","Madagascar"],"Australia is counted as a continent.","p"],
["W9","Which sea has no coastline at all?",["Sargasso Sea","Dead Sea","Caspian Sea","Aral Sea"],"It lies inside the North Atlantic.","p"],
["W9","The Suez Canal was opened in:",["1869","1914","1895","1947"],"The Panama Canal opened in 1914.","p"],
["W9","The Equator and the Prime Meridian cross in the:",["Gulf of Guinea","Gulf of Aden","Gulf of Mexico","Persian Gulf"],"At 0°, 0°.",""],
["W9","Which island is shared by Indonesia, Malaysia and Brunei?",["Borneo","Sumatra","Java","New Guinea"],"",""],
["W10","Which of the following lines separates Pakistan and Afghanistan?",["Durand Line","McMahon Line","Radcliffe Line","Jinnah Line"],"Drawn in 1893.","p","","","SSC CGL · 7 Dec 2022 (Shift 3)"],
["W10","The border line which separates India and Pakistan is the:",["Radcliffe Line","Durand Line","McMahon Line","Maginot Line"],"Drawn by Sir Cyril Radcliffe in 1947.","p","","","SSC CGL · 12 Dec 2022 (Shift 2)"],
["W10","The McMahon Line was drawn at the Simla Convention of:",["1914","1893","1947","1962"],"",""],
["W10","The Hindenburg Line was:",["A German defence line in France in World War I","The Germany–Poland border fixed in 1945","A line of French forts facing Germany","The USA–Canada border"],"The Germany–Poland border is the Oder–Neisse Line.",""],
["W10","Igloos are the traditional snow houses of the:",["Inuit (Eskimo)","Masai","Bedouin","Bushmen"],"","p"],
["W10","The ‘Herring Pond’ is a nickname of the:",["Atlantic Ocean","Pacific Ocean","North Sea","Baltic Sea"],"Herring fish are plentiful in the North Atlantic.",""],
["W10","The Tuareg, called the 'blue men', live in the:",["Sahara","Kalahari","Gobi","Atacama"],"",""]
);

LASTMOMENT.push(
{t:"Straits and canals", era:["wg"], rows:[["Gibraltar","Spain–Morocco"],["Bering","Russia–Alaska"],["Palk","India–Sri Lanka"],["Hormuz","Iran–Oman"],["Malacca","Malaysia–Sumatra"],["Suez","Med–Red Sea"],["Panama","Atlantic–Pacific"],["Kiel","North Sea–Baltic"]]},
{t:"Boundary lines", era:["wg"], rows:[["Durand","Pakistan–Afghanistan"],["McMahon","India–China"],["Radcliffe","India–Pakistan"],["38th Parallel","N–S Korea"],["49th Parallel","USA–Canada"],["17th Parallel","N–S Vietnam"],["Oder–Neisse","Germany–Poland"],["Maginot","France–Germany"]]},
{t:"Nicknames and peoples", era:["wg"], rows:[["Rising Sun","Japan"],["Midnight Sun","Norway"],["Thousand Lakes","Finland"],["Thunder Dragon","Bhutan"],["White Elephants","Thailand"],["Bushmen","Kalahari"],["Masai","Kenya, Tanzania"],["Bedouin","Arabia"]]}
);
TILES.push(["1869","Suez Canal opened","wg"],["1914","Panama Canal opened","wg"],["1893","Durand Line","wg"],["1914","McMahon Line","wg"],["1947","Radcliffe Line","wg"]);

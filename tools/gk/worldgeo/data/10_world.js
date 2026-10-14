/* Part 1 · W1 continents and oceans; W2 countries and capitals; W3 countries and currencies; W4 parliaments and flags (as of October 2026). */
const W1C = [
  ["Asia","the largest","About 30% of the world's land and about 60% of its people.","p"],
  ["Africa","the 2nd largest","54 countries — the most of any continent.","p"],
  ["North America","the 3rd largest","",""],
  ["South America","the 4th largest","",""],
  ["Antarctica","the 5th largest","Coldest, windiest and highest on average; no permanent people.","p"],
  ["Europe","the 6th largest","",""],
  ["Australia (Oceania)","the smallest","The island continent.","p"]
];
const W1P = [
  ["Asia","Mount Everest","8,849 m — the highest point on Earth (Nepal–China border).","p"],
  ["Africa","Mount Kilimanjaro","5,895 m, in Tanzania; a dormant volcano.","p"],
  ["North America","Denali (Mount McKinley)","6,190 m, in Alaska (USA).","p"],
  ["South America","Aconcagua","6,961 m, in the Andes of Argentina.","p"],
  ["Antarctica","Vinson Massif","4,892 m.",""],
  ["Europe","Mount Elbrus","5,642 m, in the Caucasus (Russia).","p"],
  ["Australia (mainland)","Mount Kosciuszko","2,228 m. Counting New Guinea, Oceania's highest is Puncak Jaya.",""]
];
const W1O = [
  ["Pacific Ocean","the largest","Also the deepest — the Mariana Trench (Challenger Deep, about 11 km).","p"],
  ["Atlantic Ocean","the 2nd largest","S-shaped; the busiest ocean for shipping.","p"],
  ["Indian Ocean","the 3rd largest","The only ocean named after a country.","p"],
  ["Southern Ocean","the 4th largest","Around Antarctica; National Geographic recognised it in June 2021.",""],
  ["Arctic Ocean","the smallest","Also the shallowest; mostly frozen.","p"]
];
const W2 = [
  ["Afghanistan","Kabul","",""],
  ["Nepal","Kathmandu","",""],
  ["Bhutan","Thimphu","","p"],
  ["Bangladesh","Dhaka","",""],
  ["Myanmar","Naypyidaw","Took over from Yangon (Rangoon) in 2005–06.","p"],
  ["the Maldives","Malé","",""],
  ["China","Beijing","",""],
  ["Japan","Tokyo","",""],
  ["South Korea","Seoul","",""],
  ["North Korea","Pyongyang","",""],
  ["Mongolia","Ulaanbaatar","",""],
  ["Thailand","Bangkok","",""],
  ["Vietnam","Hanoi","",""],
  ["Cambodia","Phnom Penh","",""],
  ["Laos","Vientiane","",""],
  ["the Philippines","Manila","",""],
  ["Kazakhstan","Astana","Called Nur-Sultan from 2019 to 2022.","p"],
  ["Uzbekistan","Tashkent","",""],
  ["Tajikistan","Dushanbe","",""],
  ["Kyrgyzstan","Bishkek","",""],
  ["Turkmenistan","Ashgabat","",""],
  ["Iran","Tehran","",""],
  ["Iraq","Baghdad","On the Tigris.",""],
  ["Saudi Arabia","Riyadh","",""],
  ["the United Arab Emirates","Abu Dhabi","Not Dubai.","p"],
  ["Qatar","Doha","",""],
  ["Oman","Muscat","",""],
  ["Jordan","Amman","",""],
  ["Syria","Damascus","One of the oldest lived-in cities.",""],
  ["Turkey (Türkiye)","Ankara","Not Istanbul.","p"],
  ["Russia","Moscow","",""],
  ["Ukraine","Kyiv","",""],
  ["Germany","Berlin","",""],
  ["Switzerland","Bern","Not Zurich or Geneva.","p"],
  ["Canada","Ottawa","Not Toronto.","p"],
  ["Brazil","Brasília","Took over from Rio de Janeiro in 1960.","p"],
  ["Argentina","Buenos Aires","",""],
  ["Chile","Santiago","",""],
  ["Peru","Lima","",""],
  ["Colombia","Bogotá","",""],
  ["Venezuela","Caracas","",""],
  ["Cuba","Havana","",""],
  ["Australia","Canberra","Not Sydney.","p"],
  ["New Zealand","Wellington","",""],
  ["Egypt","Cairo","",""],
  ["Nigeria","Abuja","Took over from Lagos in 1991.","p"],
  ["Kenya","Nairobi","",""],
  ["Ethiopia","Addis Ababa","Headquarters of the African Union.","p"],
  ["Ghana","Accra","",""],
  ["Morocco","Rabat","",""],
  ["Tanzania","Dodoma","Dar es Salaam is the biggest city.",""],
  ["Côte d'Ivoire","Yamoussoukro","Abidjan is the biggest city.",""]
];
const W3 = [
  ["Japan","Yen","","p"],
  ["China","Renminbi (Yuan)","","p"],
  ["South Korea","Won","",""],
  ["Bangladesh","Taka","","p"],
  ["Bhutan","Ngultrum","Pegged to the Indian rupee.","p"],
  ["Pakistan","Rupee","",""],
  ["Nepal","Rupee","",""],
  ["Sri Lanka","Rupee","",""],
  ["the Maldives","Rufiyaa","","p"],
  ["Myanmar","Kyat","","p"],
  ["Afghanistan","Afghani","",""],
  ["Indonesia","Rupiah","",""],
  ["Thailand","Baht","","p"],
  ["Malaysia","Ringgit","",""],
  ["Vietnam","Dong","",""],
  ["the Philippines","Peso","",""],
  ["Mongolia","Tugrik","",""],
  ["Iran","Rial","",""],
  ["Saudi Arabia","Riyal","",""],
  ["the United Arab Emirates","Dirham","",""],
  ["Kuwait","Dinar","",""],
  ["Israel","Shekel","",""],
  ["Turkey (Türkiye)","Lira","",""],
  ["Russia","Rouble","","p"],
  ["Ukraine","Hryvnia","",""],
  ["Poland","Zloty","",""],
  ["Hungary","Forint","",""],
  ["Sweden","Krona","",""],
  ["Norway","Krone","",""],
  ["the United Kingdom","Pound sterling","",""],
  ["Switzerland","Swiss franc","",""],
  ["Germany, France, Italy, Spain","Euro","",""],
  ["South Africa","Rand","","p"],
  ["Nigeria","Naira","",""],
  ["Ghana","Cedi","",""],
  ["Kenya","Shilling","",""],
  ["Ethiopia","Birr","",""],
  ["Botswana","Pula","",""],
  ["Zambia","Kwacha","",""],
  ["Brazil","Real","","p"],
  ["Mexico","Peso","",""],
  ["Venezuela","Bolívar","",""],
  ["Peru","Sol","",""],
  ["the United States","Dollar","",""]
];
const W4 = [
  ["the United States","Congress","Senate + House of Representatives.","p"],
  ["Japan","Diet","","p"],
  ["Russia","Federal Assembly (State Duma)","The Duma is the lower house.","p"],
  ["Israel","Knesset","","p"],
  ["Iran","Majlis","",""],
  ["Pakistan","Majlis-e-Shoora","",""],
  ["Bangladesh","Jatiya Sangsad","","p"],
  ["Nepal","Sanghiya Sansad (Federal Parliament)","",""],
  ["Bhutan","Chi Tshog (National Assembly: Tshogdu)","Old books give 'Tshogdu'.","p"],
  ["the Maldives","People's Majlis","",""],
  ["China","National People's Congress","",""],
  ["Mongolia","State Great Khural","",""],
  ["Germany","Bundestag","The lower house; the upper is the Bundesrat.","p"],
  ["Sweden","Riksdag","",""],
  ["Norway","Storting","",""],
  ["Denmark","Folketing","",""],
  ["Finland","Eduskunta","",""],
  ["Iceland","Althing","Among the oldest parliaments (930 CE).","p"],
  ["Poland","Sejm","",""],
  ["Spain","Cortes Generales","",""],
  ["Ireland","Oireachtas (Dáil Éireann)","",""],
  ["the Netherlands","States General","",""],
  ["Ukraine","Verkhovna Rada","",""],
  ["Turkey (Türkiye)","Grand National Assembly","",""],
  ["Malaysia","Dewan Rakyat","The lower house of Parliament.",""]
];
const W4F = [
  ["The only national flag that is not a rectangle","Nepal","Two stacked triangles.","p"],
  ["A red maple leaf","Canada","",""],
  ["A green cedar tree","Lebanon","",""],
  ["A map of the island itself","Cyprus","",""],
  ["A red disc on white (Hinomaru)","Japan","",""],
  ["A thunder dragon","Bhutan","",""],
  ["A Star of David","Israel","",""],
  ["A rifle (AK-47)","Mozambique","",""],
  ["A square shape with a white cross","Switzerland","Vatican City's flag is also square.",""],
  ["The oldest national flag in continuous use (Dannebrog)","Denmark","",""],
  ["A taegeuk (red-blue circle) with four trigrams","South Korea","",""]
];

LESSONS.push(
{id:"W1", heat:3, title:"Continents and oceans", hi:"महाद्वीप और महासागर", blocks:[
  {k:"hot", h:"Asked again and again: <b>largest and smallest</b> continent and ocean, the <b>highest peak of each continent</b>, the <b>deepest point</b> (Mariana Trench) and the continent crossed by the <b>Equator and both Tropics</b> (Africa)."},
  {k:"story", h:"<p>Earth has <b>seven continents</b>. Biggest to smallest: <b>Asia, Africa, North America, South America, Antarctica, Europe, Australia</b>. Asia holds about 30% of the land and 60% of the people. Africa has the most countries (54) and is the only continent cut by the Equator, the Tropic of Cancer and the Tropic of Capricorn. Antarctica is the coldest place — and the largest desert, because so little snow falls there.</p><p>Water covers about <b>71%</b> of the Earth. There are <b>five oceans</b>: <b>Pacific, Atlantic, Indian, Southern, Arctic</b>. The Pacific alone is bigger than all the land put together, and its <b>Mariana Trench</b> is the deepest point on Earth. The Indian Ocean is the only one named after a country.</p>", key:"Continents: Asia > Africa > N America > S America > Antarctica > Europe > Australia. Oceans: Pacific > Atlantic > Indian > Southern > Arctic."},
  {k:"table", title:"Continents by area", head:["Continent","By area","Note"], rows: W1C.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Highest peak of each continent", head:["Continent","Highest peak","Height and place"], rows: W1P.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"The five oceans", head:["Ocean","By size","Note"], rows: W1O.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"World records SSC loves (as of 2026)", rows:[
    ["Largest country","Russia (about 17.1 million km²); then Canada, then the USA or China"],
    ["Smallest country","Vatican City (about 0.44 km²)"],
    ["Most people","India (passed China in 2023, UN estimate)"],
    ["Largest country in Africa","Algeria (since Sudan split in 2011)"],
    ["Largest landlocked country","Kazakhstan"],
    ["Longest coastline","Canada"],
    ["Most neighbours","China and Russia — 14 each"],
    ["Largest archipelago country","Indonesia (more than 17,000 islands)"],
    ["Most time zones","France — 12, counting its overseas lands"],
    ["Lowest point on land","Shore of the Dead Sea — about 430 m below sea level"]
  ]},
  {k:"trick", h:"Continents by size — <b>“An Ant Never Sleeps At Every Afternoon”</b> → Asia, Africa, North America, South America, Antarctica, Europe, Australia. Oceans — <b>“Please Always Insert Seven Apples”</b> → Pacific, Atlantic, Indian, Southern, Arctic."},
  {k:"trap", h:"The largest <b>desert</b> overall is <b>Antarctica</b>; the Sahara is the largest <b>hot</b> desert. The deepest point is in the <b>Pacific</b> (Mariana Trench), not the Atlantic. <b>Denali</b> (North America) and <b>Aconcagua</b> (South America) are often swapped."}
], sum:["Seven continents: Asia is the largest, Australia the smallest.","Africa has the most countries (54) and is crossed by the Equator and both Tropics.","Five oceans: Pacific (largest, deepest), Atlantic, Indian, Southern, Arctic (smallest).","Highest peaks: Everest (Asia), Aconcagua (S America), Denali (N America), Kilimanjaro (Africa), Elbrus (Europe).","Russia is the largest country, Vatican City the smallest, India the most populous."]},

{id:"W2", heat:3, title:"Countries and capitals", hi:"देश और राजधानियाँ", blocks:[
  {k:"hot", h:"Every paper has one: <b>“What is the capital of X?”</b> SSC loves the trick ones — where the biggest city is <b>not</b> the capital: Australia (Canberra), Canada (Ottawa), Turkey (Ankara), Brazil (Brasília), Nigeria (Abuja), Myanmar (Naypyidaw), Switzerland (Bern)."},
  {k:"story", h:"<p>Some countries built a brand-new capital away from the old big city. <b>Brazil</b> moved from Rio de Janeiro to <b>Brasília</b> in 1960. <b>Nigeria</b> moved from Lagos to <b>Abuja</b> in 1991. <b>Myanmar</b> moved from Yangon to <b>Naypyidaw</b> in 2005–06. <b>Australia</b> built <b>Canberra</b> because Sydney and Melbourne could not agree.</p><p>Some countries have <b>more than one capital</b>. <b>South Africa</b> has three: Pretoria (government), Cape Town (Parliament) and Bloemfontein (courts). <b>Bolivia</b> has Sucre (constitution) and La Paz (government). Kazakhstan's capital <b>Astana</b> was called Nur-Sultan from 2019 to 2022.</p>", key:"Big city is not the capital: Sydney→Canberra, Toronto→Ottawa, Istanbul→Ankara, Rio→Brasília, Lagos→Abuja, Yangon→Naypyidaw, Zurich→Bern."},
  {k:"table", title:"Countries and capitals", head:["Country","Capital","Note"], rows: W2.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Two or three capitals (and new capitals)", rows:[
    ["South Africa","Pretoria (executive), Cape Town (legislative), Bloemfontein (judicial)"],
    ["Bolivia","Sucre (constitutional) and La Paz (seat of government — the world's highest capital city)"],
    ["Netherlands","Amsterdam is the capital; the government sits in The Hague"],
    ["Sri Lanka","Sri Jayawardenepura Kotte (official); Colombo is the commercial capital"],
    ["Malaysia","Kuala Lumpur; government offices in Putrajaya"],
    ["Indonesia","Jakarta; a new capital, Nusantara, is being built on Borneo (move not complete as of 2026)"]
  ]},
  {k:"trick", h:"<b>“COAB BAN”</b> — <b>C</b>anberra, <b>O</b>ttawa, <b>A</b>nkara, <b>B</b>rasília, <b>B</b>ern, <b>A</b>buja, <b>N</b>aypyidaw: seven capitals that are not the biggest city. Picture Sydney, Toronto, Istanbul, Rio, Zurich, Lagos and Yangon crossed out on the map."},
  {k:"trap", h:"UAE → <b>Abu Dhabi</b> (not Dubai). Turkey → <b>Ankara</b> (not Istanbul). Switzerland → <b>Bern</b> (not Geneva). Tanzania → <b>Dodoma</b> (not Dar es Salaam). Côte d'Ivoire → <b>Yamoussoukro</b> (not Abidjan)."}
], sum:["The biggest city is often not the capital: Canberra, Ottawa, Ankara, Brasília, Abuja, Bern.","New capitals: Brasília (1960), Abuja (1991), Naypyidaw (2005–06).","South Africa has three capitals: Pretoria, Cape Town, Bloemfontein.","Kazakhstan's capital Astana was named Nur-Sultan from 2019 to 2022.","UAE — Abu Dhabi; Tanzania — Dodoma; Bhutan — Thimphu; Mongolia — Ulaanbaatar."]},

{id:"W3", heat:3, title:"Countries and currencies", hi:"देश और मुद्राएँ", blocks:[
  {k:"hot", h:"A sure question: <b>“The currency of X is:”</b> — especially India's neighbours (Taka, Ngultrum, Rufiyaa, Kyat, Afghani) and the odd names (Rand, Ringgit, Baht, Won, Real)."},
  {k:"story", h:"<p>Start with India's neighbours. Bangladesh uses the <b>Taka</b>, Bhutan the <b>Ngultrum</b> (tied one-to-one to the Indian rupee), Myanmar the <b>Kyat</b>, Maldives the <b>Rufiyaa</b> and Afghanistan the <b>Afghani</b>. Pakistan, Nepal and Sri Lanka all use a <b>Rupee</b>. Indonesia's <b>Rupiah</b> sounds similar but is a different word.</p><p>Many names come in families. <b>Dinar</b>: Kuwait, Iraq, Jordan, Bahrain, Algeria, Serbia. <b>Riyal / Rial</b>: Saudi Arabia, Qatar, Iran, Oman. <b>Peso</b>: Mexico, Argentina, Philippines, Chile. <b>Krona / Krone</b>: Sweden, Norway, Denmark. The <b>Euro</b> is shared by most of the European Union; Croatia joined in 2023 and Bulgaria in January 2026.</p>", key:"Neighbours: Taka, Ngultrum, Kyat, Rufiyaa, Afghani, Rupee. Families: Dinar, Riyal, Peso, Krona."},
  {k:"table", title:"Countries and currencies", head:["Country","Currency","Note"], rows: W3.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Currency families", rows:[
    ["Rupee","India, Pakistan, Nepal, Sri Lanka, Mauritius, Seychelles"],
    ["Dinar","Kuwait, Iraq, Jordan, Bahrain, Algeria, Tunisia, Serbia"],
    ["Riyal / Rial","Saudi Arabia, Qatar (Riyal); Iran, Oman (Rial)"],
    ["Peso","Mexico, Argentina, Chile, Colombia, Philippines, Cuba"],
    ["Dollar","USA, Canada, Australia, New Zealand, Singapore"],
    ["Euro","Most EU members — Germany, France, Italy, Spain…; Croatia from 2023, Bulgaria from 1 January 2026"],
    ["Before the Euro","Italy — Lira; France — Franc; Germany — Deutsche Mark; Spain — Peseta"]
  ]},
  {k:"trick", h:"<b>“Ta-Ngu-Ky-Ru-Af”</b> — Taka, Ngultrum, Kyat, Rufiyaa, Afghani: Bangladesh, Bhutan, Myanmar, Maldives, Afghanistan — for Bangladesh, Bhutan, Myanmar, Maldives, Afghanistan. <b>R</b>and = <b>R</b>SA (South Africa)."},
  {k:"trap", h:"<b>Rupiah</b> = Indonesia, <b>Rufiyaa</b> = Maldives, <b>Rupee</b> = India and neighbours. <b>Won</b> = Korea, <b>Yen</b> = Japan, <b>Yuan</b> = China. <b>Real</b> = Brazil; <b>Rial/Riyal</b> = Iran/Saudi. Turkey still uses the <b>Lira</b>; Italy's lira ended with the Euro."}
], sum:["India's neighbours: Taka (Bangladesh), Ngultrum (Bhutan), Kyat (Myanmar), Rufiyaa (Maldives), Afghani (Afghanistan).","Pakistan, Nepal and Sri Lanka use the Rupee; Indonesia uses the Rupiah.","Japan Yen, China Renminbi (Yuan), South Korea Won, Thailand Baht, Malaysia Ringgit.","Russia Rouble, UK Pound sterling, South Africa Rand, Brazil Real.","The Euro replaced the lira, franc and mark; Croatia joined in 2023 and Bulgaria in 2026."]},

{id:"W4", heat:2, title:"Parliaments and flags", hi:"संसद और ध्वज", blocks:[
  {k:"hot", h:"<b>“The Parliament of X is called:”</b> — Diet (Japan), Knesset (Israel), Duma (Russia), Congress (USA), Jatiya Sangsad (Bangladesh), Majlis (Iran), Storting (Norway), Riksdag (Sweden). Flag questions are rarer: Nepal's non-rectangular flag is the favourite."},
  {k:"story", h:"<p>Most parliaments have local names. In the USA it is the <b>Congress</b>; in Japan the <b>Diet</b>; in Russia the <b>Federal Assembly</b>, whose lower house is the <b>State Duma</b>. Israel's is the <b>Knesset</b>, Iran's the <b>Majlis</b> and Pakistan's the <b>Majlis-e-Shoora</b>. Bangladesh has the <b>Jatiya Sangsad</b>.</p><p>Northern Europe has the oldest: Iceland's <b>Althing</b> first met in 930 CE. Sweden has the <b>Riksdag</b>, Norway the <b>Storting</b>, Denmark the <b>Folketing</b>, Finland the <b>Eduskunta</b>, Poland the <b>Sejm</b> and Germany the <b>Bundestag</b>. China's top body is the <b>National People's Congress</b>.</p>", key:"Congress–USA, Diet–Japan, Duma–Russia, Knesset–Israel, Majlis–Iran, Storting–Norway, Riksdag–Sweden, Althing–Iceland."},
  {k:"table", title:"Parliaments", head:["Country","Parliament","Note"], rows: W4.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Flag clues", head:["What the flag shows","Country","Note"], rows: W4F.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Dear Japan, Kind Israel, Duma Russia”</b> — Diet, Knesset, Duma. Nordic set, first letters of country and parliament: <b>“Sweet Raspberries, Nice Strawberries, Delicious Fruit, Fresh Eggs, Ice-cream Always”</b> → <b>S</b>weden–<b>R</b>iksdag, <b>N</b>orway–<b>S</b>torting, <b>D</b>enmark–<b>F</b>olketing, <b>F</b>inland–<b>E</b>duskunta, <b>I</b>celand–<b>A</b>lthing."},
  {k:"trap", h:"<b>Majlis</b> (Iran) vs <b>Majlis-e-Shoora</b> (Pakistan) vs <b>People's Majlis</b> (Maldives). <b>Sejm</b> is Poland, not Sweden. <b>Bundestag</b> is Germany's lower house; <b>Bundesrat</b> is the upper house."}
], sum:["USA — Congress; Japan — Diet; Russia — Federal Assembly (State Duma); Israel — Knesset.","Iran — Majlis; Pakistan — Majlis-e-Shoora; Bangladesh — Jatiya Sangsad; Maldives — People's Majlis.","Sweden — Riksdag; Norway — Storting; Denmark — Folketing; Finland — Eduskunta; Poland — Sejm.","Iceland's Althing (930 CE) is among the oldest parliaments; Germany — Bundestag; China — National People's Congress.","Nepal has the only non-rectangular flag; Canada's flag has a maple leaf, Lebanon's a cedar tree."]}
);

pairQs("W1", W1C, { q: t => `By area, ${t} is:`, rq: a => `Which continent is ${a} by area?` });
pairQs("W1", W1P, { q: t => `The highest peak of ${t} is:`, rq: a => `${a} is the highest peak of which continent?` });
pairQs("W1", W1O, { q: t => `By size, the ${t} is:`, rq: a => `Which ocean is ${a}?` });
pairQs("W2", W2, { q: t => `The capital of ${t} is:` });
pairQs("W3", W3, { q: t => `The currency of ${t} is:`, extra: ["Lek","Lari","Dram"] });
pairQs("W4", W4, { q: t => `The Parliament of ${t} is called:` });
pairQs("W4", W4F, { q: t => `Which country's flag shows: ${t.charAt(0).toLowerCase() + t.slice(1)}?` });

QB.push(
["W1","Which continent is crossed by the Equator, the Tropic of Cancer and the Tropic of Capricorn?",["Africa","South America","Asia","Australia"],"Africa is the only continent cut by all three.","p"],
["W1","Which is the only ocean named after a country?",["Indian Ocean","Arctic Ocean","Atlantic Ocean","Pacific Ocean"],"Named after India.","p"],
["W1","The deepest point on Earth, Challenger Deep, lies in the:",["Mariana Trench, Pacific Ocean","Puerto Rico Trench, Atlantic Ocean","Java Trench, Indian Ocean","Tonga Trench, Southern Ocean"],"About 11 km deep.","p"],
["W1","Which continent has the most countries?",["Africa","Asia","Europe","South America"],"54 countries.","p"],
["W1","Which is the largest country in the world by area?",["Russia","Canada","China","USA"],"About 17.1 million km².","p"],
["W1","Which is the smallest country in the world?",["Vatican City","Monaco","San Marino","Maldives"],"About 0.44 km², inside Rome.","p"],
["W1","Which country has the longest coastline in the world?",["Canada","Russia","Indonesia","Australia"],"",""],
["W1","Which is the largest country in Africa by area?",["Algeria","Sudan","DR Congo","Libya"],"Since South Sudan split from Sudan in 2011.","p"],
["W1","Which is the world's largest landlocked country?",["Kazakhstan","Mongolia","Bolivia","Afghanistan"],"",""],
["W2","How many capitals does South Africa have?",["Three","One","Two","Four"],"Pretoria, Cape Town and Bloemfontein.","p"],
["W2","Which is the judicial capital of South Africa?",["Bloemfontein","Pretoria","Cape Town","Johannesburg"],"Pretoria is executive, Cape Town legislative.",""],
["W2","Brasília replaced which city as Brazil's capital in 1960?",["Rio de Janeiro","São Paulo","Salvador","Recife"],"",""],
["W2","Which is the highest seat of government of any country?",["La Paz, Bolivia","Quito, Ecuador","Thimphu, Bhutan","Kathmandu, Nepal"],"About 3,600 m above sea level.",""],
["W2","Kazakhstan's capital was called Nur-Sultan between 2019 and 2022. What is it called now?",["Astana","Almaty","Bishkek","Tashkent"],"",""],
["W3","What is the currency of Bangladesh, a neighbouring country of India?",["Taka","Yuan","Ngultrum","Kyat"],"Bangladesh — Taka.","p","","","SSC MTS · 20 Jun 2023 (Shift 2)"],
["W3","Lira was the currency of which country?",["Italy","China","Australia","Japan"],"Italy used the lira until the Euro came in (2002 notes and coins). Turkey still uses a lira.","p","","","SSC MTS · 23 Feb 2014 (Shift 1)"],
["W3","Bhutan's Ngultrum is pegged one-to-one to which currency?",["Indian rupee","US dollar","Chinese yuan","Nepalese rupee"],"Indian rupees are also accepted in Bhutan.",""],
["W3","Which country joined the Euro on 1 January 2023?",["Croatia","Bulgaria","Poland","Romania"],"Bulgaria followed on 1 January 2026.",""],
["W3","The Deutsche Mark was the currency of which country before the Euro?",["Germany","Denmark","Netherlands","Austria"],"",""],
["W4","The Parliament of Japan is known as:",["Diet","Knesset","Duma","Storting"],"","p"],
["W4","The lower house of Russia's Parliament is the:",["State Duma","Federation Council","Bundestag","Sejm"],"The upper house is the Federation Council.",""],
["W4","Which country's Parliament, the Althing, is among the oldest in the world?",["Iceland","Norway","United Kingdom","Denmark"],"First met in 930 CE.",""],
["W4","The Bundesrat is the upper house of the Parliament of:",["Germany","Austria","Switzerland","Netherlands"],"Germany's lower house is the Bundestag.",""]
);

LASTMOMENT.push(
{t:"Continents and oceans", era:["wg"], rows:[["Largest continent","Asia"],["Smallest continent","Australia"],["Most countries","Africa (54)"],["Largest ocean","Pacific"],["Smallest ocean","Arctic"],["Deepest point","Mariana Trench"],["Largest country","Russia"],["Smallest country","Vatican City"]]},
{t:"Tricky capitals", era:["wg"], rows:[["Australia","Canberra"],["Canada","Ottawa"],["Turkey","Ankara"],["Brazil","Brasília"],["Nigeria","Abuja"],["Myanmar","Naypyidaw"],["Switzerland","Bern"],["UAE","Abu Dhabi"]]},
{t:"Neighbours' currencies", era:["wg"], rows:[["Bangladesh","Taka"],["Bhutan","Ngultrum"],["Myanmar","Kyat"],["the Maldives","Rufiyaa"],["Afghanistan","Afghani"],["Indonesia","Rupiah"],["Thailand","Baht"],["South Africa","Rand"]]},
{t:"Parliaments", era:["wg"], rows:[["USA","Congress"],["Japan","Diet"],["Russia","Duma"],["Israel","Knesset"],["Iran","Majlis"],["Bangladesh","Jatiya Sangsad"],["Norway","Storting"],["Sweden","Riksdag"]]}
);
TILES.push(["7","Continents","wg"],["5","Oceans","wg"],["8,849 m","Mount Everest","wg"],["54","Countries in Africa","wg"],["3","Capitals of South Africa","wg"]);

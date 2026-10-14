/* Part 1 · T1 iron and steel; T2 textiles and agro-based industries; T3 cement, fertiliser and petroleum; T4 aircraft, ships, cars, IT and city nicknames (as of October 2026). */
const T1 = [
  ["Tata Steel (TISCO), Jamshedpur","Jharkhand","India's first large integrated steel plant — set up in 1907 in the private sector by the Tatas.","p"],
  ["Bhilai Steel Plant","Chhattisgarh","Built with Soviet (USSR) help; famous for long rails.","p"],
  ["Rourkela Steel Plant","Odisha","Built with West German help; SAIL's first integrated plant in the public sector.","p|SSC CGL · 25 Jul 2023 (Shift 4)"],
  ["Durgapur Steel Plant","West Bengal","Built with British (UK) help.","p"],
  ["Bokaro Steel Plant","Jharkhand","Built with Soviet help; called India's first 'swadeshi' steel plant (mostly Indian equipment).","p"],
  ["IISCO Steel Plant, Burnpur","West Bengal","Near Asansol; now part of SAIL.",""],
  ["Visvesvaraya Iron and Steel Plant, Bhadravati","Karnataka","Started in 1923 as the Mysore Iron Works.","p"],
  ["Visakhapatnam Steel Plant (RINL)","Andhra Pradesh","India's first shore-based integrated steel plant.","p"],
  ["Salem Steel Plant","Tamil Nadu","Makes stainless steel.",""],
  ["JSW Vijayanagar Works","Karnataka","Large private plant at Toranagallu near Ballari.",""],
  ["Nagarnar Steel Plant (NMDC)","Chhattisgarh","In Bastar; started production in 2023.",""],
  ["Kalinganagar Works (Tata Steel)","Odisha","",""],
  ["Hazira Steel Plant (AM/NS India)","Gujarat","Run by ArcelorMittal Nippon Steel.",""]
];
const T1C = [
  ["Bhilai","USSR (Soviet Union)","Agreement signed in 1955; came up in the Second Five-Year Plan.","p"],
  ["Rourkela","West Germany","Second Five-Year Plan.","p"],
  ["Durgapur","United Kingdom","Second Five-Year Plan.","p"],
  ["Bokaro","USSR (Soviet Union)","Set up in 1964; production began in 1972.","p"],
  ["Visakhapatnam","USSR (Soviet Union)","Production began in 1990.",""]
];
const T2F = [
  ["First cotton mill (it failed)","Fort Gloster, near Kolkata","Set up in 1818.","p"],
  ["First successful modern cotton mill","Mumbai","Bombay Spinning and Weaving Company, 1854, by Cowasji Nanabhai Davar.","p"],
  ["First cotton mill of Ahmedabad","Ahmedabad","1861, by Ranchhodlal Chhotalal.",""],
  ["First jute mill","Rishra, near Kolkata","1855, on the Hooghly river.","p"],
  ["First iron works (Bengal Iron Works)","Kulti, West Bengal","1870 — later part of IISCO.",""],
  ["First large integrated steel plant","Jamshedpur","Tata Iron and Steel Company, 1907.","p"]
];
const T2S = [
  ["Sugarcane (largest producer)","Uttar Pradesh","Sugar mills crowd the Ganga plain; sugar is India's second biggest agro-industry after textiles.","p"],
  ["Raw jute (largest producer)","West Bengal","Most jute mills stand along the Hooghly.","p"],
  ["Mulberry silk (largest producer)","Karnataka","Mysuru silk is famous.","p"],
  ["Tasar (tussar) silk (largest producer)","Jharkhand","",""],
  ["Muga (golden) silk","Assam","Grown only in Assam; it has a GI tag.","p"],
  ["Raw wool (largest producer)","Rajasthan","",""],
  ["Coir (coconut fibre) industry","Kerala","The Coir Board is at Kochi.",""],
  ["Tea (largest producer)","Assam","",""],
  ["Coffee (largest producer)","Karnataka","",""]
];
const T2C = [
  ["Tiruppur (knitwear)","Tamil Nadu","India's knitwear capital.","p"],
  ["Ludhiana (woollen hosiery)","Punjab","",""],
  ["Panipat (handloom, recycled yarn)","Haryana","Called the 'City of Weavers'.",""],
  ["Surat (synthetic cloth, diamonds)","Gujarat","",""],
  ["Bhagalpur (tussar silk)","Bihar","Called the 'Silk City'.","p"],
  ["Kanchipuram (silk sarees)","Tamil Nadu","",""],
  ["Varanasi (Banarasi silk)","Uttar Pradesh","",""],
  ["Bhiwandi (powerlooms)","Maharashtra","",""],
  ["Pochampally (ikat weaving)","Telangana","",""],
  ["Chanderi (sarees)","Madhya Pradesh","",""],
  ["Sualkuchi (muga and pat silk)","Assam","",""]
];
const T3 = [
  ["Digboi","Assam","India's oldest operating refinery (1901).","p"],
  ["Guwahati (Noonmati)","Assam","India's first public-sector refinery (1962).","p"],
  ["Bongaigaon","Assam","",""],
  ["Numaligarh","Assam","Came out of the Assam Accord (1985).",""],
  ["Barauni","Bihar","Built with Soviet help (1964).","p"],
  ["Koyali (Gujarat Refinery)","Gujarat","Near Vadodara.",""],
  ["Jamnagar (Reliance)","Gujarat","The world's largest single-site refinery complex.","p"],
  ["Vadinar (Nayara)","Gujarat","",""],
  ["Mathura","Uttar Pradesh","Its smoke was blamed for harm to the Taj Mahal.","p"],
  ["Panipat","Haryana","",""],
  ["Bathinda (Guru Gobind Singh Refinery)","Punjab","",""],
  ["Bina","Madhya Pradesh","",""],
  ["Haldia","West Bengal","",""],
  ["Paradip","Odisha","Started in 2016.",""],
  ["Kochi","Kerala","",""],
  ["Mangaluru (MRPL)","Karnataka","",""],
  ["Visakhapatnam","Andhra Pradesh","",""],
  ["Manali (Chennai)","Tamil Nadu","",""]
];
const T3F = [
  ["Mumbai High","Arabian Sea (off Maharashtra)","India's largest offshore oil field, found in 1974.","p"],
  ["Ankleshwar","Gujarat","Oil found in 1958–60.","p"],
  ["Naharkatiya","Assam","",""],
  ["Mangala (Barmer basin)","Rajasthan","India's biggest onshore find of recent times.",""],
  ["Krishna-Godavari (KG) basin","Andhra Pradesh","Rich in natural gas.",""]
];
const T3P = [
  ["India's first cement factory (1904)","Chennai","Made by South India Industries Ltd at Madras.","p"],
  ["India's first fertiliser factory (1906)","Ranipet (Tamil Nadu)","A superphosphate plant.",""],
  ["First big public-sector fertiliser plant (1951)","Sindri (Jharkhand)","Run by the Fertilizer Corporation of India.","p"],
  ["World's first nano urea plant (2021)","Kalol (Gujarat)","Run by IFFCO.","p"]
];
const T4 = [
  ["Hindustan Aeronautics Ltd (HAL) headquarters","Bengaluru","Founded in 1940 as Hindustan Aircraft by Walchand Hirachand; HAL since 1964. Builds the Tejas.","p"],
  ["HAL's Sukhoi Su-30MKI plant","Nashik","",""],
  ["HAL's aero-engine factory","Koraput","In Odisha.",""],
  ["HAL's helicopter factory (2023)","Tumakuru","India's biggest helicopter factory, in Karnataka.",""],
  ["Tata–Airbus C-295 aircraft assembly line (2024)","Vadodara","India's first private-sector military aircraft assembly line.","p"],
  ["Cochin Shipyard","Kochi","Built INS Vikrant, India's first home-made aircraft carrier.","p"],
  ["Mazagon Dock Shipbuilders","Mumbai","Builds submarines and destroyers.","p"],
  ["Garden Reach Shipbuilders","Kolkata","",""],
  ["Hindustan Shipyard","Visakhapatnam","Started in 1941 as the Scindia shipyard.",""],
  ["Goa Shipyard","Vasco da Gama","",""],
  ["Maruti Suzuki's first car plant (1983)","Gurugram","The Maruti 800 rolled out in December 1983.","p"],
  ["Tata Nano car plant","Sanand","In Gujarat — moved there from Singur (West Bengal) in 2008.","p"],
  ["Heavy Engineering Corporation","Ranchi","",""],
  ["Bharat Electronics Ltd (BEL) headquarters","Bengaluru","",""]
];
const T4N = [
  ["Manchester of India","Ahmedabad","For its cotton mills.","p"],
  ["Manchester of South India","Coimbatore","","p"],
  ["Manchester of North India","Kanpur","Also called the 'Manchester of the East'.","p"],
  ["Cottonopolis of India","Mumbai","",""],
  ["Steel City of India","Jamshedpur","Also called Tatanagar.","p"],
  ["Silicon Valley of India","Bengaluru","Also the 'Garden City'.","p"],
  ["Detroit of Asia","Chennai","For its car factories.","p"],
  ["Diamond City of India","Surat","",""],
  ["Coal Capital of India","Dhanbad","",""],
  ["Brass City","Moradabad","Also called 'Peetal Nagri'.","p"],
  ["Lock City","Aligarh","",""],
  ["Glass City (City of Bangles)","Firozabad","",""],
  ["Carpet City","Bhadohi","",""],
  ["Sandalwood City","Mysuru","",""],
  ["Knitwear Capital of India","Tiruppur","",""],
  ["Tea City of India","Dibrugarh","",""]
];

LESSONS.push(
{id:"T1", heat:3, title:"Iron and steel", hi:"लोहा और इस्पात उद्योग", blocks:[
  {k:"hot", h:"Asked again and again: <b>which plant is in which state</b>, and <b>which country helped build it</b> — <b>Bhilai</b> (USSR), <b>Rourkela</b> (West Germany), <b>Durgapur</b> (UK), <b>Bokaro</b> (USSR). Also <b>TISCO 1907</b> at Jamshedpur."},
  {k:"story", h:"<p>India's modern steel story begins in <b>1907</b>, when the Tatas set up the <b>Tata Iron and Steel Company (TISCO)</b> at Sakchi — the town that became <b>Jamshedpur</b>. Steel flowed from 1912. In <b>1923</b> the Mysore state started the iron works at <b>Bhadravati</b>, named after M. Visvesvaraya.</p><p>After independence the <b>Second Five-Year Plan</b> (1956–61) built three big public-sector plants with foreign help: <b>Bhilai</b> (Chhattisgarh) with the <b>USSR</b>, <b>Rourkela</b> (Odisha) with <b>West Germany</b> and <b>Durgapur</b> (West Bengal) with the <b>UK</b>. <b>Bokaro</b> (Jharkhand) followed with Soviet help. In <b>1973</b> they were brought under the <b>Steel Authority of India Ltd (SAIL)</b>.</p>", key:"TISCO 1907 Jamshedpur; Bhilai–USSR, Rourkela–Germany, Durgapur–UK, Bokaro–USSR; SAIL 1973."},
  {k:"facts", title:"Steel at a glance (as of 2025–26)", rows:[
    ["First iron works","Bengal Iron Works, Kulti (West Bengal), 1870"],
    ["First large integrated plant","TISCO, Jamshedpur, 1907 (private)"],
    ["Steel Authority of India Ltd (SAIL)","Set up in 1973; headquarters New Delhi"],
    ["Plants of the Second Plan","Bhilai, Rourkela, Durgapur"],
    ["Raw materials","Iron ore, coking coal and limestone — so most plants sit in the Chota Nagpur plateau belt"],
    ["India in the world","The second-largest crude steel producer (after China), as of 2024–25"],
    ["National Steel Policy 2017","Target: 300 million tonnes of capacity by 2030–31"]
  ]},
  {k:"table", title:"Steel plants and their states", head:["Plant","State","Remember"], rows: T1.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Foreign help for public-sector plants", head:["Plant","Built with help from","Note"], rows: T1C.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“BRD”</b> — <b>B</b>hilai = <b>B</b>ig Brother Russia, <b>R</b>ourkela = <b>R</b>hine (Germany), <b>D</b>urgapur = <b>D</b>ritish (Britain). Bokaro and Vizag came later — also Russia."},
  {k:"trap", h:"<b>Bokaro</b> and <b>Jamshedpur</b> are in <b>Jharkhand</b>, but <b>Bhilai</b> is in <b>Chhattisgarh</b>. <b>Durgapur</b> was British, not German. TISCO was set up in <b>1907</b> but made its first steel in <b>1912</b>."}
], sum:["TISCO was set up at Jamshedpur (Jharkhand) in 1907 — India's first large integrated steel plant.","Bhilai (Chhattisgarh) — USSR; Rourkela (Odisha) — West Germany; Durgapur (West Bengal) — UK.","Bokaro (Jharkhand) and Visakhapatnam (Andhra Pradesh) were also built with Soviet help.","Bhadravati (Karnataka) began in 1923 as the Mysore Iron Works; Salem (Tamil Nadu) makes stainless steel.","SAIL was formed in 1973 to run the public-sector steel plants."]},

{id:"T2", heat:2, title:"Textiles and agro-based industries", hi:"वस्त्र और कृषि-आधारित उद्योग", blocks:[
  {k:"hot", h:"Favourites: <b>first cotton mill</b> (Fort Gloster 1818, first successful Mumbai 1854), <b>first jute mill</b> (Rishra 1855), <b>Manchester of India</b> (Ahmedabad), and the <b>leading state</b> for sugarcane (UP), jute (West Bengal) and silk (Karnataka)."},
  {k:"story", h:"<p>Cotton textiles are India's oldest modern industry. A first mill at <b>Fort Gloster</b> near Kolkata (1818) failed. The first <b>successful</b> one was the <b>Bombay Spinning and Weaving Company</b> in <b>Mumbai</b> (1854), started by <b>Cowasji Nanabhai Davar</b>. Ahmedabad got its first mill in 1861 and grew into the <b>“Manchester of India”</b>; Coimbatore became the Manchester of South India.</p><p><b>Jute</b>, the “golden fibre”, has its mills along the <b>Hooghly</b> in West Bengal — the first at <b>Rishra</b> in 1855. <b>Sugar</b> is the next biggest agro-industry; <b>Uttar Pradesh</b> grows the most sugarcane. <b>Karnataka</b> leads mulberry silk, <b>Jharkhand</b> tasar silk, and golden <b>muga</b> silk comes only from <b>Assam</b>.</p>", key:"Cotton: Mumbai 1854 (first success); jute: Rishra 1855; sugarcane — UP; mulberry silk — Karnataka; muga — Assam."},
  {k:"table", title:"Firsts of Indian industry", head:["First","Place","Note"], rows: T2F.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Which state leads?", head:["Crop / industry","State","Note"], rows: T2S.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Textile towns", head:["Town (what it makes)","State","Note"], rows: T2C.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Textile bodies and schemes", rows:[
    ["Golden fibre","Jute"],
    ["National Jute Board","Kolkata"],
    ["Central Silk Board","Bengaluru"],
    ["Coir Board","Kochi"],
    ["PM MITRA parks","Seven mega textile parks announced in 2023"],
    ["National Handloom Day","7 August (Swadeshi movement began on 7 August 1905)"]
  ]},
  {k:"trick", h:"<b>“Cotton Mumbai 54, Jute Rishra 55”</b> — two firsts, one year apart. Silk colours: <b>K</b>arnataka = mulberry (<b>K</b>ing of silk), <b>J</b>harkhand = tasar (<b>J</b>ungle silk), <b>A</b>ssam = muga (<b>A</b>mber gold)."},
  {k:"trap", h:"The <b>first</b> cotton mill (Fort Gloster, 1818) was near <b>Kolkata</b> and failed — the first <b>successful</b> one was in <b>Mumbai</b> (1854). <b>Ludhiana</b> is famous for woollen hosiery, <b>Tiruppur</b> for cotton knitwear."}
], sum:["First cotton mill: Fort Gloster near Kolkata (1818, failed); first successful: Mumbai (1854).","First jute mill: Rishra on the Hooghly (1855); West Bengal leads jute.","Uttar Pradesh grows the most sugarcane; sugar is the second biggest agro-industry.","Karnataka leads mulberry silk, Jharkhand tasar silk; muga silk comes only from Assam.","Textile towns: Tiruppur knitwear, Ludhiana hosiery, Surat synthetics, Bhagalpur silk, Panipat handloom."]},

{id:"T3", heat:3, title:"Cement, fertiliser and petroleum", hi:"सीमेंट, उर्वरक और पेट्रोलियम", blocks:[
  {k:"hot", h:"The star facts: <b>Digboi</b> (Assam, 1901) is India's <b>oldest</b> refinery; <b>Jamnagar</b> (Gujarat, Reliance) is the <b>world's largest</b> refining complex; <b>Mumbai High</b> is the biggest offshore oil field; <b>Sindri</b> is the old fertiliser giant."},
  {k:"story", h:"<p>Oil was struck at <b>Digboi</b> in Assam in 1889, and its refinery opened in <b>1901</b> — India's oldest still working. That is why <b>Assam</b> has four refineries: Digboi, <b>Guwahati</b> (Noonmati, the first public-sector refinery, 1962), <b>Bongaigaon</b> and <b>Numaligarh</b>. Big new oil came from <b>Ankleshwar</b> (Gujarat) and, in 1974, from <b>Mumbai High</b> under the Arabian Sea.</p><p>Today the biggest refinery is <b>Reliance's Jamnagar</b> complex in Gujarat. The first <b>cement</b> factory came up at <b>Madras (Chennai)</b> in 1904, the first <b>fertiliser</b> plant at <b>Ranipet</b> in 1906, and the big public-sector fertiliser plant at <b>Sindri</b> (Jharkhand) in 1951. In 2021 IFFCO opened the world's first <b>nano urea</b> plant at <b>Kalol</b>, Gujarat.</p>", key:"Digboi oldest (1901); Jamnagar largest; Assam has 4 refineries; Mumbai High offshore; first cement Chennai 1904; Sindri 1951."},
  {k:"table", title:"Oil refineries and their states", head:["Refinery","State","Remember"], rows: T3.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Oil and gas fields", head:["Field","Where","Note"], rows: T3F.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Cement and fertiliser firsts", head:["First","Place","Note"], rows: T3P.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Who runs what (as of 2026)", rows:[
    ["Indian Oil Corporation (IOCL)","Runs Digboi, Guwahati, Barauni, Koyali, Haldia, Mathura, Panipat, Bongaigaon and Paradip"],
    ["Reliance Industries","Jamnagar (private)"],
    ["ONGC","Oil and Natural Gas Corporation, founded 1956; HQ New Delhi"],
    ["Strategic petroleum reserves","Visakhapatnam, Mangaluru and Padur (Udupi)"],
    ["Cement","India is the world's second-largest cement maker (after China)"]
  ]},
  {k:"trick", h:"<b>“Digboi = Daddy (oldest), Jamnagar = Jumbo (largest)”</b>. Assam's four refineries: <b>“Don't Go Beyond Numaligarh”</b> — Digboi, Guwahati, Bongaigaon, Numaligarh."},
  {k:"trap", h:"<b>Digboi</b> is the oldest refinery, but the first <b>public-sector</b> refinery is <b>Guwahati</b>. <b>Mathura</b> refinery is in Uttar Pradesh (the Taj Mahal worry), <b>Panipat</b> in Haryana, <b>Bathinda</b> in Punjab. <b>Mumbai High</b> is offshore, not in Mumbai city."}
], sum:["Digboi (Assam, 1901) is India's oldest working refinery; Guwahati (1962) the first public-sector one.","Jamnagar (Gujarat, Reliance) is the world's largest single-site refinery complex.","Assam has four refineries: Digboi, Guwahati, Bongaigaon, Numaligarh.","Mumbai High (1974) is the largest offshore field; Ankleshwar is in Gujarat.","First cement factory: Chennai 1904; first fertiliser: Ranipet 1906; Sindri 1951; nano urea: Kalol 2021."]},

{id:"T4", heat:2, title:"Aircraft, ships, cars, IT — and city nicknames", hi:"विमान, जहाज़, वाहन, आईटी और शहरों के उपनाम", blocks:[
  {k:"hot", h:"Two question types: <b>“Where is X made?”</b> (HAL Bengaluru, Cochin Shipyard, Mazagon Dock Mumbai) and <b>“Which city is called …?”</b> — Manchester of India (Ahmedabad), Silicon Valley (Bengaluru), Detroit of Asia (Chennai), Steel City (Jamshedpur)."},
  {k:"story", h:"<p>In 1940 the industrialist <b>Walchand Hirachand</b> started Hindustan Aircraft in <b>Bengaluru</b>; as <b>HAL</b> it now builds the <b>Tejas</b> fighter, with plants at Nashik, Koraput and a helicopter factory at <b>Tumakuru</b>. Warships come from <b>Mazagon Dock</b> (Mumbai), <b>Garden Reach</b> (Kolkata) and <b>Cochin Shipyard</b>, which built <b>INS Vikrant</b>. In 2024 a <b>Tata–Airbus</b> line at <b>Vadodara</b> began assembling C-295 transport planes.</p><p>Cars changed when the <b>Maruti 800</b> rolled out at <b>Gurugram</b> in 1983. Chennai's car plants earned it the name <b>“Detroit of Asia”</b>, and Bengaluru's software parks made it the <b>“Silicon Valley of India”</b>. Many towns are known by one craft: <b>Moradabad</b> brass, <b>Aligarh</b> locks, <b>Firozabad</b> glass bangles, <b>Bhadohi</b> carpets.</p>", key:"HAL — Bengaluru; Vikrant — Cochin Shipyard; Maruti 800 — Gurugram 1983; Detroit of Asia — Chennai; Silicon Valley — Bengaluru."},
  {k:"table", title:"Where is it made?", head:["Factory / unit","City","Note"], rows: T4.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Industrial nicknames", head:["Nickname","City","Note"], rows: T4N.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Engineering and IT (as of 2026)", rows:[
    ["Tejas","Light combat aircraft built by HAL, Bengaluru"],
    ["INS Vikrant","Commissioned in 2022 — built at Cochin Shipyard"],
    ["Big car hubs","Chennai, Pune (Chakan), Gurugram–Manesar, Sanand, Pithampur"],
    ["Software Technology Parks of India (STPI)","Set up in 1991"],
    ["Big IT hubs","Bengaluru, Hyderabad (HITEC City), Pune, Chennai, Noida–Gurugram"],
    ["Electronic City","An IT park in Bengaluru"]
  ]},
  {k:"trick", h:"<b>Three Manchesters by compass</b>: West = <b>A</b>hmedabad, South = <b>C</b>oimbatore, North = <b>K</b>anpur — <b>“ACK!”</b>. Craft towns of UP: <b>“My Aunt Finds Bangles”</b> — Moradabad brass, Aligarh locks, Firozabad bangles, Bhadohi carpets."},
  {k:"trap", h:"<b>Detroit of Asia</b> is <b>Chennai</b>, not Pune. <b>Kanpur</b> is the Manchester of North India — <b>Coimbatore</b> is the Manchester of South India. The Tata <b>Nano</b> plant moved from Singur (West Bengal) to <b>Sanand</b> (Gujarat)."}
], sum:["HAL (1940) is in Bengaluru; Su-30MKI at Nashik, engines at Koraput, helicopters at Tumakuru.","Cochin Shipyard built INS Vikrant; Mazagon Dock (Mumbai) builds submarines.","The Maruti 800 rolled out at Gurugram in 1983; the Tata–Airbus C-295 line is at Vadodara (2024).","Manchester of India — Ahmedabad; of South India — Coimbatore; of North India — Kanpur.","Silicon Valley — Bengaluru; Detroit of Asia — Chennai; Steel City — Jamshedpur; Brass City — Moradabad."]}
);

pairQs("T1", T1, { q: t => `${t} is in which state?`, rq: a => `Which steel plant is in ${a}?` });
pairQs("T1", T1C, { q: t => `The ${t} steel plant was built with help from:`, rq: a => `Which steel plant was built with help from ${a}?`, extra: ["Japan","USA","France"] });
pairQs("T2", T2F, { q: t => `${t} was set up at:`, rq: a => `What came up first at ${a}?` });
pairQs("T2", T2S, { q: t => `${t} — which state leads?`, rq: a => `${a} leads India in which of these?` });
pairQs("T2", T2C, { q: t => `The textile town ${t} is in:` });
pairQs("T3", T3, { q: t => `The ${t} oil refinery is in which state?`, rq: a => `Which oil refinery is in ${a}?` });
pairQs("T3", T3F, { q: t => `The ${t} oil/gas field is in:`, rq: a => `Which oil or gas field is in ${a}?` });
pairQs("T3", T3P, { q: t => `${t} was at:`, rq: a => `What was ${a} the first site of?` });
pairQs("T4", T4, { q: t => `${t} is in which city?`, rq: a => `Which of these is in ${a}?` });
pairQs("T4", T4N, { q: t => `Which city is called the '${t}'?`, rq: a => `${a} is popularly called the:` });

QB.push(
["T1","Tata Iron and Steel Company (TISCO) was set up in:",["1907","1912","1923","1954"],"At Sakchi (now Jamshedpur); steel production started in 1912.","p"],
["T1","Which three steel plants came up in the Second Five-Year Plan?",["Bhilai, Rourkela, Durgapur","Bokaro, Salem, Vizag","Bhilai, Bokaro, Salem","Durgapur, Bokaro, Bhadravati"],"Built with Soviet, West German and British help.","p"],
["T1","Steel Authority of India Ltd (SAIL) was formed in:",["1973","1956","1964","1991"],"It runs Bhilai, Rourkela, Durgapur, Bokaro, Burnpur and others.",""],
["T1","Which steel plant is called India's first 'swadeshi' plant, built mostly with Indian equipment?",["Bokaro","Bhilai","Rourkela","Durgapur"],"Built with Soviet help but Indian equipment.",""],
["T1","Which is India's first shore-based integrated steel plant?",["Visakhapatnam Steel Plant","Paradip","Salem","Hazira"],"Run by Rashtriya Ispat Nigam Ltd (RINL).",""],
["T1","Which pair of raw materials is most needed for a blast-furnace steel plant?",["Iron ore and coking coal","Bauxite and coal","Copper and limestone","Manganese and mica"],"Limestone is also used as flux.",""],
["T2","Which is India's largest agro-based industry?",["Textiles","Sugar","Jute","Tea"],"Sugar comes second.",""],
["T2","India's first successful cotton textile mill was set up in Mumbai in 1854 by:",["Cowasji Nanabhai Davar","Jamsetji Tata","Ranchhodlal Chhotalal","Walchand Hirachand"],"The Bombay Spinning and Weaving Company.","p"],
["T2","Which fibre is called the 'golden fibre'?",["Jute","Cotton","Silk","Coir"],"For its golden colour and cash value.","p"],
["T2","Most of India's jute mills are along which river?",["Hooghly","Godavari","Narmada","Mahanadi"],"In West Bengal.",""],
["T2","Muga silk, known as golden silk, is produced mainly in:",["Assam","Karnataka","Jharkhand","Bihar"],"Only Assam produces it.",""],
["T3","India's oldest operating refinery is at:",["Digboi","Jamnagar","Paradip","Panipat"],"Assam, 1901.","p","","","SSC CPO · 15 Mar 2019 (Shift 2)"],
["T3","The world's largest single-site oil refinery complex is at:",["Jamnagar","Digboi","Mathura","Kochi"],"Run by Reliance Industries in Gujarat.","p"],
["T3","Which state has the most oil refineries — Digboi, Guwahati, Bongaigaon and Numaligarh?",["Assam","Gujarat","Maharashtra","Odisha"],"Four refineries.","p"],
["T3","Mumbai High oil field lies in the:",["Arabian Sea","Bay of Bengal","Gulf of Mannar","Gulf of Kutch"],"Offshore, about 160 km from Mumbai.","p"],
["T3","Smoke from which refinery was feared to damage the Taj Mahal?",["Mathura","Panipat","Barauni","Koyali"],"Led to the Taj Trapezium Zone rules.",""],
["T3","The world's first nano urea liquid plant (2021) was set up by:",["IFFCO","NFL","RCF","GSFC"],"At Kalol, Gujarat.",""],
["T4","Which public-sector company builds the Tejas light combat aircraft?",["Hindustan Aeronautics Ltd","Bharat Electronics Ltd","Bharat Dynamics Ltd","DRDO"],"HAL, Bengaluru.","p"],
["T4","India's first home-made aircraft carrier INS Vikrant was built at:",["Cochin Shipyard","Mazagon Dock","Garden Reach","Hindustan Shipyard"],"Commissioned in 2022.","p"],
["T4","Hindustan Aircraft (now HAL) was founded in 1940 by:",["Walchand Hirachand","J. R. D. Tata","G. D. Birla","Jamnalal Bajaj"],"In Bengaluru.",""],
);

LASTMOMENT.push(
{t:"Steel plants", era:["it"], rows:[["TISCO 1907","Jamshedpur, Jharkhand"],["Bhilai","Chhattisgarh · USSR"],["Rourkela","Odisha · West Germany"],["Durgapur","West Bengal · UK"],["Bokaro","Jharkhand · USSR"],["Vizag","Andhra Pradesh · USSR"],["Bhadravati","Karnataka · 1923"],["SAIL","1973"]]},
{t:"Industry firsts", era:["it"], rows:[["Cotton (failed)","Fort Gloster 1818"],["Cotton (success)","Mumbai 1854"],["Jute","Rishra 1855"],["Steel","Jamshedpur 1907"],["Cement","Chennai 1904"],["Refinery","Digboi 1901"],["Largest refinery","Jamnagar"],["Nano urea","Kalol 2021"]]},
{t:"City nicknames", era:["it"], rows:[["Manchester of India","Ahmedabad"],["Manchester of South","Coimbatore"],["Manchester of North","Kanpur"],["Silicon Valley","Bengaluru"],["Detroit of Asia","Chennai"],["Steel City","Jamshedpur"],["Brass City","Moradabad"],["Diamond City","Surat"]]}
);
TILES.push(["1907","TISCO, Jamshedpur","it"],["1854","First successful cotton mill","it"],["1855","First jute mill, Rishra","it"],["1901","Digboi refinery","it"],["1973","SAIL formed","it"]);

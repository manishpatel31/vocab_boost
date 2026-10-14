/* Part 2 · F4 paramilitary and central forces, F5 missiles and platforms, F6 operations. */
const F4 = [
  ["Border Security Force (BSF)","1965","Guards the Pakistan and Bangladesh borders — 'India's first line of defence'.","p"],
  ["Central Reserve Police Force (CRPF)","1939","Largest central armed police force; began as the Crown Representative's Police.","p"],
  ["Central Industrial Security Force (CISF)","1969","Guards industries, airports, the Delhi Metro and other key sites.","p"],
  ["Indo-Tibetan Border Police (ITBP)","1962","Guards the China border; called the 'Himveers'.","p"],
  ["Sashastra Seema Bal (SSB)","1963","Guards the Nepal and Bhutan borders.","p"],
  ["Assam Rifles","1835","Oldest paramilitary force; guards the Myanmar border; administered by the Home Ministry, operations under the Army.","p"],
  ["National Security Guard (NSG)","1984","Counter-terror force — the 'Black Cats'.","p"],
  ["Indian Coast Guard","1978","Under the Ministry of Defence.",""],
  ["National Disaster Response Force (NDRF)","2006","Disaster relief, under the NDMA.",""],
  ["Special Protection Group (SPG)","1988","Protects the Prime Minister.",""],
  ["National Investigation Agency (NIA)","2009","Set up after the 26/11 Mumbai attacks.",""],
  ["Research and Analysis Wing (R&AW)","1968","India's external intelligence agency.",""],
  ["Intelligence Bureau (IB)","1887","One of the oldest intelligence agencies in the world; internal intelligence.",""]
];
const F4B = [
  ["Pakistan","BSF","",""],["Bangladesh","BSF","",""],["China","ITBP","",""],["Nepal","SSB","",""],["Bhutan","SSB","",""],["Myanmar","Assam Rifles","",""]
];
const F5 = [
  ["Agni-V","Intercontinental-range ballistic missile (5,000+ km)","Mission Divyastra (March 2024) tested it with MIRV warheads.","p"],
  ["Prithvi","Surface-to-surface ballistic missile","The first missile of the IGMDP.","p"],
  ["Akash","Surface-to-air missile","",""],
  ["Trishul","Short-range surface-to-air missile","Part of the IGMDP.",""],
  ["Nag","Anti-tank guided missile","'Fire and forget'.","p"],
  ["BrahMos","Supersonic cruise missile","India–Russia joint venture; named after the Brahmaputra and Moskva rivers.","p"],
  ["Nirbhay","Subsonic long-range cruise missile","",""],
  ["Astra","Beyond-visual-range air-to-air missile","",""],
  ["K-4","Submarine-launched ballistic missile","For the Arihant-class submarines.",""],
  ["Pralay","Short-range quasi-ballistic surface-to-surface missile","",""],
  ["Rudram","Anti-radiation air-to-surface missile","Destroys enemy radars.",""],
  ["Arjun","Main battle tank","Built by DRDO.","p"],
  ["Tejas","Light Combat Aircraft","Built by HAL.","p"],
  ["Rafale","Multirole fighter jet from France (Dassault)","36 inducted from 2020.","p"],
  ["Prachand","Light Combat Helicopter","Built by HAL; inducted 2022.",""],
  ["Dhruv","Advanced Light Helicopter","",""],
  ["INS Vikrant","First indigenous aircraft carrier","Commissioned on 2 September 2022.","p"],
  ["INS Vikramaditya","Aircraft carrier bought from Russia","Formerly Admiral Gorshkov; commissioned 2013.",""],
  ["INS Arihant","First indigenous nuclear-powered ballistic missile submarine","",""],
  ["INS Kalvari","First Scorpene-class submarine","Built in India with French help (2017).",""],
  ["Pinaka","Multi-barrel rocket launcher","Named after Lord Shiva's bow.","p"],
  ["S-400 Triumf","Long-range air-defence system from Russia","",""],
  ["Netra","Airborne early warning and control aircraft (AEW&C)","",""]
];
const F6 = [
  ["Operation Polo","Integration of Hyderabad State, 1948","Also called 'police action'.","p"],
  ["Operation Vijay (1961)","Liberation of Goa from Portugal","Kargil 1999 was also named Operation Vijay.","p"],
  ["Operation Trident","Attack on Karachi harbour, 1971","Remembered on Navy Day (4 December).","p"],
  ["Operation Meghdoot","Securing the Siachen Glacier, 1984","","p"],
  ["Operation Blue Star","Golden Temple, Amritsar, 1984","","p"],
  ["Operation Pawan","Indian Peace Keeping Force in Sri Lanka, 1987","",""],
  ["Operation Cactus","Foiling a coup in the Maldives, 1988","",""],
  ["Operation Shakti","Pokhran-II nuclear tests, 1998","The 1974 test was 'Smiling Buddha'.","p"],
  ["Operation Safed Sagar","Air Force operations in the Kargil war, 1999","",""],
  ["Operation Parakram","Military build-up after the 2001 Parliament attack","",""],
  ["Operation Black Tornado","NSG operation in the 26/11 Mumbai attacks, 2008","",""],
  ["Operation Rahat","Evacuation from war-torn Yemen, 2015","",""],
  ["Operation Maitri","Relief after the Nepal earthquake, 2015","",""],
  ["Operation Samudra Setu","Navy bringing Indians home in the COVID-19 pandemic, 2020","",""],
  ["Operation Ganga","Evacuation of Indians from Ukraine, 2022","","p"],
  ["Operation Dost","Earthquake relief in Turkey and Syria, 2023","",""],
  ["Operation Kaveri","Evacuation from Sudan, 2023","",""],
  ["Operation Ajay","Evacuation from Israel, 2023","",""],
  ["Operation Brahma","Earthquake relief in Myanmar, 2025","",""],
  ["Operation Sindoor","Strikes on terror camps in Pakistan and PoK, May 2025","Launched after the Pahalgam terror attack of April 2025.","p"],
  ["Operation Sindhu","Evacuation of Indians from Iran, June 2025","",""]
];

LESSONS.push(
{id:"F4", heat:2, title:"Paramilitary and central forces", hi:"अर्धसैनिक और केंद्रीय बल", blocks:[
  {k:"hot", h:"Which force <b>guards which border</b> (BSF, ITBP, SSB, Assam Rifles), the <b>oldest</b> (Assam Rifles) and <b>largest</b> (CRPF) forces, the 'Black Cats' (NSG), and raising years are asked again and again."},
  {k:"story", h:"<p>Behind the Army stand the <b>Central Armed Police Forces</b> under the Home Ministry. Learn them by the border they guard: the <b>BSF</b> faces Pakistan and Bangladesh, the <b>ITBP</b> the Himalayan border with China, the <b>SSB</b> the open borders with Nepal and Bhutan, and the <b>Assam Rifles</b> — India's oldest force, raised in 1835 — the Myanmar border.</p><p>Inside the country, the <b>CRPF</b> (the largest) handles internal security, the <b>CISF</b> guards airports and plants, and the <b>NSG</b> 'Black Cats' fight terror.</p>", key:"Pakistan & Bangladesh — BSF; China — ITBP; Nepal & Bhutan — SSB; Myanmar — Assam Rifles."},
  {k:"table", title:"Forces and when they were raised", head:["Force","Raised","Role"], rows: F4.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Who guards which border", head:["Neighbour","Force","Note"], rows: F4B.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“SSB = Shanti Seema”</b> — the peaceful open borders (Nepal, Bhutan). <b>ITBP = Tibet</b> in its name → China border."},
  {k:"trap", h:"<b>Assam Rifles</b> (1835) is the oldest, but <b>CRPF</b> is the largest. The <b>Coast Guard</b> is under Defence, not Home. <b>NSG</b> is the 'Black Cats'; <b>SPG</b> protects the Prime Minister."}
], sum:["BSF (1965) guards the Pakistan and Bangladesh borders; ITBP (1962) the China border; SSB (1963) Nepal and Bhutan.","Assam Rifles (1835) is the oldest paramilitary force and guards the Myanmar border.","CRPF (1939) is the largest CAPF; CISF (1969) guards industries and airports.","NSG (1984) — the Black Cats; SPG (1988) protects the PM; NIA set up in 2009.","The Indian Coast Guard (1978) is under the Ministry of Defence."]},

{id:"F5", heat:3, title:"Missiles, weapons and platforms", hi:"मिसाइल, हथियार और प्लेटफ़ॉर्म", blocks:[
  {k:"hot", h:"Always one: <b>BrahMos</b> (India–Russia, name), <b>Agni</b> range, <b>Prithvi</b> / <b>Akash</b> / <b>Nag</b> type, <b>INS Vikrant</b>, <b>Tejas</b>, <b>Arjun</b>, <b>IGMDP</b> and <b>Mission Shakti</b>."},
  {k:"story", h:"<p>In 1983 India started the <b>Integrated Guided Missile Development Programme</b> (IGMDP) under <b>A. P. J. Abdul Kalam</b>. It gave five missiles — remember <b>“PATNA”</b>: <b>P</b>rithvi (surface-to-surface), <b>A</b>gni (long-range ballistic), <b>T</b>rishul (short-range air defence), <b>N</b>ag (anti-tank), <b>A</b>kash (surface-to-air).</p><p>Then came <b>BrahMos</b> with Russia — named after the <b>Brahmaputra</b> and the <b>Moskva</b> — one of the fastest cruise missiles. At sea, <b>INS Vikrant</b> (2022) is India's first home-built aircraft carrier, and <b>INS Arihant</b> its first nuclear-powered missile submarine. In 2019 <b>Mission Shakti</b> shot down a satellite in orbit.</p>", key:"IGMDP (1983, Kalam) = PATNA: Prithvi, Agni, Trishul, Nag, Akash."},
  {k:"table", title:"Weapons and platforms", head:["Name","What it is","Note"], rows: F5.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Programmes and makers", rows:[
    ["IGMDP","1983, led by A. P. J. Abdul Kalam"],
    ["DRDO","Defence Research and Development Organisation, set up in 1958"],
    ["HAL","Hindustan Aeronautics Limited, Bengaluru — Tejas, Dhruv, Prachand"],
    ["Mission Shakti","Anti-satellite missile test, 27 March 2019"],
    ["Mission Divyastra","Agni-V with MIRV (several warheads), March 2024"],
    ["Missile Man of India","A. P. J. Abdul Kalam"],
    ["Missile Woman of India","Tessy Thomas"]
  ]},
  {k:"trick", h:"<b>PATNA</b> for the IGMDP five. <b>BrahMos = Brahmaputra + Moskva</b>. <b>Nag</b> bites tanks; <b>Akash</b> watches the sky; <b>Prithvi</b> hits the ground."},
  {k:"trap", h:"<b>Akash</b> is surface-to-<b>air</b>; <b>Prithvi</b> is surface-to-<b>surface</b>. <b>INS Vikramaditya</b> came from Russia; <b>INS Vikrant</b> (2022) was built in India. <b>Astra</b> is air-to-air, not surface-to-air."}
], sum:["IGMDP (1983, Kalam): Prithvi, Agni, Trishul, Nag, Akash.","BrahMos is an India–Russia supersonic cruise missile named after the Brahmaputra and Moskva.","Agni-V is an intercontinental-range missile; Mission Divyastra (2024) tested it with MIRV warheads.","INS Vikrant (2022) is India's first indigenous aircraft carrier; INS Arihant its first nuclear ballistic-missile submarine.","Tejas — light combat aircraft; Arjun — main battle tank; Mission Shakti (2019) — anti-satellite test."]},

{id:"F6", heat:3, title:"Military and rescue operations", hi:"सैन्य और बचाव अभियान", blocks:[
  {k:"hot", h:"Operation names are favourites — old ones (<b>Polo, Vijay, Meghdoot, Blue Star, Cactus</b>) and new ones (<b>Ganga, Kaveri, Ajay, Dost</b>, and <b>Operation Sindoor</b> of May 2025)."},
  {k:"story", h:"<p>Every big operation gets a code name. In 1948 <b>Operation Polo</b> brought Hyderabad into India; in 1961 <b>Operation Vijay</b> freed Goa. In 1984 <b>Meghdoot</b> took the Siachen glacier, and in 1988 <b>Cactus</b> saved the Maldives government from a coup.</p><p>Recent operations are often <b>rescue missions</b>, named after rivers or friendship: <b>Ganga</b> brought students home from Ukraine (2022), <b>Kaveri</b> from Sudan and <b>Ajay</b> from Israel (2023), <b>Dost</b> helped quake-hit Turkey. In May 2025, after the Pahalgam terror attack, <b>Operation Sindoor</b> struck terror camps in Pakistan and PoK.</p>", key:"Rescue missions are named after rivers: Ganga (Ukraine), Kaveri (Sudan), Sindhu (Iran)."},
  {k:"table", title:"Operations", head:["Operation","What it was","Note"], rows: F6.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"River rescues — <b>“Ganga flew from Ukraine, Kaveri from Sudan, Sindhu from Iran”</b>. <b>Meghdoot</b> = messenger of the clouds → the high Siachen."},
  {k:"trap", h:"<b>Operation Vijay</b> names two things: Goa 1961 and Kargil 1999. <b>Operation Shakti</b> was Pokhran-II (1998); <b>Smiling Buddha</b> was Pokhran-I (1974). <b>Safed Sagar</b> was the Air Force's Kargil role."}
], sum:["Operation Polo — Hyderabad, 1948; Operation Vijay — Goa, 1961 (and Kargil, 1999).","Operation Meghdoot — Siachen, 1984; Operation Blue Star — Golden Temple, 1984; Operation Cactus — Maldives, 1988.","Operation Shakti — Pokhran-II, 1998; Operation Safed Sagar — IAF in Kargil.","Rescues: Rahat (Yemen 2015), Ganga (Ukraine 2022), Kaveri (Sudan 2023), Ajay (Israel 2023), Dost (Turkey 2023).","Operation Sindoor (May 2025) struck terror camps in Pakistan and PoK after the Pahalgam attack."]}
);

pairQs("F4", F4, { q: t => `In which year was the ${t} raised?` });
pairQs("F4", F4B, { q: t => `Which force guards India's border with ${t}?` });
pairQs("F5", F5, { q: t => `${t} is a/an:`, rq: a => `Which of these is a ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("F6", F6, { q: t => `${t} was related to:`, rq: a => `Which operation was the ${a.charAt(0).toLowerCase() + a.slice(1)}?` });

QB.push(
["F4","Which is the oldest paramilitary force of India?",["Assam Rifles","CRPF","BSF","ITBP"],"Raised in 1835 as the Cachar Levy.","p"],
["F4","Which is the largest Central Armed Police Force?",["CRPF","BSF","CISF","SSB"],"The CRPF has over 240 battalions.","p"],
["F4","The NSG commandos are popularly known as:",["Black Cats","Red Berets","Himveers","Garud"],"Garud is the Air Force's special force; MARCOS the Navy's.","p"],
["F5","BrahMos missile is jointly developed by India and:",["Russia","Israel","France","USA"],"BrahMos Aerospace — DRDO with Russia's NPO Mashinostroyeniya.","p"],
["F5","The Integrated Guided Missile Development Programme was started in:",["1983","1974","1998","1962"],"Led by A. P. J. Abdul Kalam.","p"],
["F5","Mission Shakti (2019) was India's test of a/an:",["Anti-satellite missile","Nuclear submarine","Hypersonic glider","Aircraft carrier"],"A satellite in low-earth orbit was destroyed on 27 March 2019.","p"],
["F6","Operation Sindoor (May 2025) was launched after the terror attack at:",["Pahalgam","Pulwama","Uri","Pathankot"],"The April 2025 attack killed 26 people; the strikes hit terror camps in Pakistan and PoK.","p"],
["F6","Operation Ganga (2022) evacuated Indian citizens from:",["Ukraine","Sudan","Afghanistan","Yemen"],"Mostly students, through neighbouring countries.","p"]
);

LASTMOMENT.push(
{t:"Forces and borders", era:["df"], rows:[["Pakistan, Bangladesh","BSF (1965)"],["China","ITBP (1962)"],["Nepal, Bhutan","SSB (1963)"],["Myanmar","Assam Rifles (1835, oldest)"],["Largest CAPF","CRPF (1939)"],["Black Cats","NSG (1984)"],["Airports, industry","CISF (1969)"],["PM's security","SPG (1988)"]]},
{t:"Missiles and platforms", era:["df"], rows:[["IGMDP","1983 — PATNA"],["BrahMos","India–Russia, supersonic cruise"],["Agni-V","5,000+ km"],["Nag","Anti-tank"],["Akash","Surface-to-air"],["INS Vikrant","First indigenous carrier (2022)"],["INS Arihant","First nuclear SSBN"],["Mission Shakti","ASAT, 2019"]]},
{t:"Operations", era:["df"], rows:[["Polo","Hyderabad 1948"],["Vijay","Goa 1961 / Kargil 1999"],["Meghdoot","Siachen 1984"],["Cactus","Maldives 1988"],["Ganga","Ukraine 2022"],["Kaveri","Sudan 2023"],["Ajay","Israel 2023"],["Sindoor","Pakistan & PoK, May 2025"]]}
);
TILES.push(["1835","Assam Rifles raised","df"],["1965","BSF raised","df"],["1983","IGMDP begins","df"],["2022","INS Vikrant commissioned","df"],["2019","Mission Shakti","df"],["May 2025","Operation Sindoor","df"]);

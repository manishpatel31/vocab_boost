/* Part 3 · E7 climate change, greenhouse gases and the ozone layer; E8 conventions and protocols; E9 climate COPs and world bodies;
   E10 India's green institutions, missions, movements and environmentalists (as of October 2026). */
const E7G = [
  ["Carbon dioxide","Burning coal, oil and gas, and cutting forests","The biggest human-made greenhouse gas.","p"],
  ["Methane","Paddy fields, cattle and wetlands","Also called marsh gas; traps far more heat than CO₂ per molecule.","p"],
  ["Nitrous oxide","Nitrogen fertilisers","Also the 'laughing gas'.",""],
  ["Chlorofluorocarbons (CFCs)","Old refrigerators, air conditioners and aerosol sprays","They also destroy the ozone layer.","p"],
  ["Hydrofluorocarbons (HFCs)","Newer ACs and fridges that replaced CFCs","Safe for ozone but strong greenhouse gases — cut by the Kigali Amendment.",""],
  ["Sulphur hexafluoride","Insulation in electrical switchgear","The most powerful greenhouse gas listed under Kyoto.",""],
  ["Water vapour","Evaporation from oceans and lakes","The most abundant greenhouse gas.",""]
];
const E7L = [
  ["Troposphere","All weather happens here","Lowest layer; temperature falls with height.","p"],
  ["Stratosphere","Holds the ozone layer","About 15–35 km up the ozone is richest; jets fly in its lower part.","p"],
  ["Mesosphere","Meteors burn up here","The coldest layer.","p"],
  ["Thermosphere (ionosphere)","Reflects radio waves; auroras glow here","",""],
  ["Exosphere","The outermost layer, fading into space","",""]
];

const E8Y = [
  ["Ramsar Convention on wetlands","1971","Signed at Ramsar, Iran; India joined in 1982.","p"],
  ["Stockholm Conference on the Human Environment","1972","The first world environment conference; led to UNEP. Opened on 5 June — now World Environment Day.","p"],
  ["CITES","1973","Signed in Washington DC; in force 1975.",""],
  ["Bonn Convention on Migratory Species (CMS)","1979","",""],
  ["Vienna Convention for the Protection of the Ozone Layer","1985","The framework treaty for the Montreal Protocol.",""],
  ["Montreal Protocol","1987","Signed on 16 September 1987 — now World Ozone Day.","p"],
  ["Brundtland Report 'Our Common Future'","1987","Defined sustainable development.",""],
  ["Basel Convention","1989","",""],
  ["Earth Summit, Rio de Janeiro","1992","UNFCCC and CBD opened for signature; Agenda 21 adopted.","p"],
  ["UN Convention to Combat Desertification (UNCCD)","1994","Adopted in Paris on 17 June 1994.",""],
  ["Kyoto Protocol","1997","In force from 2005.","p"],
  ["Rotterdam Convention","1998","",""],
  ["Cartagena Protocol on Biosafety","2000","Under the CBD; in force 2003.",""],
  ["Stockholm Convention on Persistent Organic Pollutants","2001","In force 2004.",""],
  ["Nagoya Protocol","2010","Under the CBD; in force 2014.",""],
  ["Minamata Convention on Mercury","2013","Adopted in Kumamoto, Japan; in force 2017.",""],
  ["Paris Agreement","2015","Adopted at COP21 on 12 December 2015; in force 4 November 2016.","p"],
  ["Kigali Amendment to the Montreal Protocol","2016","Adopted in Kigali, Rwanda.",""],
  ["Kunming-Montreal Global Biodiversity Framework","2022","Agreed at CBD COP15; the '30 by 30' target.",""]
];
const E8S = [
  ["Montreal Protocol","Phasing out ozone-depleting substances","The most successful environmental treaty — every UN member has ratified it.","p"],
  ["Kigali Amendment","Phasing down hydrofluorocarbons (HFCs)","",""],
  ["Kyoto Protocol","Binding greenhouse-gas cuts for developed countries","",""],
  ["Paris Agreement","Keeping warming well below 2 °C and trying for 1.5 °C","Every country sets its own target (NDC).","p"],
  ["Basel Convention","Movement of hazardous waste across borders","","p"],
  ["Rotterdam Convention","Prior informed consent before trading hazardous chemicals and pesticides","",""],
  ["Stockholm Convention","Persistent organic pollutants (POPs)","DDT, dioxins and other 'dirty dozen' chemicals.","p"],
  ["Minamata Convention","Mercury","",""],
  ["Cartagena Protocol","Biosafety of living modified (GM) organisms","",""],
  ["Nagoya Protocol","Access to genetic resources and fair sharing of their benefits","",""],
  ["CITES","International trade in endangered wild animals and plants","","p"],
  ["Ramsar Convention","Wetlands of international importance","","p"],
  ["UNCCD","Desertification and land degradation","",""],
  ["Bonn Convention (CMS)","Migratory species of wild animals","",""]
];

const E9C = [
  ["COP1 (1995)","Berlin, Germany","The first UN climate COP.","p"],
  ["COP3 (1997)","Kyoto, Japan","Adopted the Kyoto Protocol.","p"],
  ["COP8 (2002)","New Delhi, India","The only climate COP held in India so far.","p"],
  ["COP15 (2009)","Copenhagen, Denmark","",""],
  ["COP21 (2015)","Paris, France","Adopted the Paris Agreement; India and France launched the International Solar Alliance.","p"],
  ["COP25 (2019)","Madrid, Spain","Held in Madrid under Chile's presidency.",""],
  ["COP26 (2021)","Glasgow, UK","India announced net zero by 2070 (the 'Panchamrit').","p"],
  ["COP27 (2022)","Sharm el-Sheikh, Egypt","Agreed a Loss and Damage Fund.","p"],
  ["COP28 (2023)","Dubai, UAE","First global stocktake; call to 'transition away from fossil fuels'.","p"],
  ["COP29 (2024)","Baku, Azerbaijan","The 'finance COP' — new goal of at least $300 billion a year by 2035.","p"],
  ["COP30 (2025)","Belém, Brazil","Held at the edge of the Amazon.","p"]
];
const E9H = [
  ["UNEP (1972)","Nairobi, Kenya","Set up after the Stockholm Conference.","p"],
  ["IPCC (1988)","Geneva, Switzerland","Set up by the WMO and UNEP; shared the 2007 Nobel Peace Prize with Al Gore.","p"],
  ["IUCN (1948)","Gland, Switzerland","Keeps the Red List.","p"],
  ["WWF (1961)","Gland, Switzerland","Panda logo; runs Earth Hour.","p"],
  ["Greenpeace (1971)","Amsterdam, Netherlands","Founded in Vancouver, Canada.",""],
  ["Global Environment Facility (1991)","Washington DC, USA","Funds projects for several environment treaties.",""],
  ["Green Climate Fund","Incheon (Songdo), South Korea","",""],
  ["International Solar Alliance (2015)","Gurugram, India","The first treaty-based international body with its HQ in India.","p"],
  ["UNFCCC Secretariat","Bonn, Germany","",""],
  ["CBD Secretariat","Montreal, Canada","",""]
];

const E10Y = [
  ["Water (Prevention and Control of Pollution) Act","1974","India's first pollution law; the Central Pollution Control Board was set up under it.","p"],
  ["Air (Prevention and Control of Pollution) Act","1981","","p"],
  ["Ministry of Environment and Forests created","1985","",""],
  ["Environment (Protection) Act","1986","An 'umbrella' law passed after the Bhopal gas tragedy.","p"],
  ["National Action Plan on Climate Change (NAPCC)","2008","Released on 30 June 2008 with eight national missions.","p"],
  ["National Green Tribunal set up","2010","Under the NGT Act, 2010; began on 18 October 2010.","p"],
  ["Mission LiFE launched","2022","Launched at Ekta Nagar (Kevadia), Gujarat, on 20 October 2022 with the UN Secretary-General.","p"],
  ["Green Credit Programme rules notified","2023","Under the Environment (Protection) Act; run by ICFRE.",""],
  ["'Ek Ped Maa Ke Naam' tree campaign","2024","Launched on World Environment Day, 5 June 2024.",""]
];
const E10M = [
  ["Bishnoi sacrifice at Khejarli (1730)","Rajasthan","Amrita Devi and 363 Bishnois gave their lives to save khejri trees.","p"],
  ["Chipko movement (1973)","Uttarakhand","Began in Chamoli district, then in Uttar Pradesh.","p"],
  ["Appiko movement (1983)","Karnataka","Began at Salkani village near Sirsi, Uttara Kannada.","p"],
  ["Save Silent Valley movement","Kerala","Stopped a hydroelectric dam; the area became a national park in 1984.","p"],
  ["Jungle Bachao Andolan (1982)","Jharkhand","Tribal protest against replacing sal forests with teak; then part of Bihar.",""],
  ["Narmada Bachao Andolan","Narmada valley — Gujarat, Madhya Pradesh and Maharashtra","Against the Sardar Sarovar and other big dams.","p"]
];
const E10P = [
  ["Sunderlal Bahuguna","Chipko movement and the fight against the Tehri dam","Gave the slogan 'Ecology is the permanent economy'.","p"],
  ["Chandi Prasad Bhatt","Started the Chipko protests through his village cooperative","Ramon Magsaysay Award, 1982.","p"],
  ["Gaura Devi","Led the women of Reni village who hugged the trees (1974)","",""],
  ["Panduranga Hegde","Led the Appiko movement in Karnataka","",""],
  ["Medha Patkar","Leader of the Narmada Bachao Andolan","Right Livelihood Award 1991, shared with Baba Amte.","p"],
  ["Vandana Shiva","Founded Navdanya, a seed-saving movement","",""],
  ["Salim Ali","The 'Birdman of India'","Wrote 'The Book of Indian Birds'.","p"],
  ["Rajendra Singh","The 'Waterman of India' — revived rivers in Alwar","Stockholm Water Prize, 2015.","p"],
  ["Jadav Payeng","The 'Forest Man of India' — planted a forest on Majuli island","Padma Shri, 2015.","p"],
  ["M. C. Mehta","Lawyer whose cases cleaned up the Taj, the Ganga and Delhi's air","",""],
  ["Sunita Narain","Leads the Centre for Science and Environment (CSE)","",""],
  ["Madhav Gadgil","Headed the Western Ghats Ecology Expert Panel (2011)","UNEP Champion of the Earth (lifetime achievement), 2024.",""]
];

LESSONS.push(
{id:"E7", heat:3, title:"Climate change, greenhouse gases and the ozone layer", hi:"जलवायु परिवर्तन, ग्रीनहाउस गैसें और ओज़ोन परत", blocks:[
  {k:"hot", h:"Most-asked: <b>which gases are greenhouse gases</b>, the <b>main source of methane</b> (paddy, cattle), <b>CFCs destroy ozone</b>, ozone is measured in <b>Dobson units</b>, the ozone layer is in the <b>stratosphere</b>, and <b>World Ozone Day is 16 September</b>."},
  {k:"story", h:"<p>Sunlight warms the Earth, and the Earth sends heat back out. <b>Greenhouse gases</b> — water vapour, <b>carbon dioxide</b>, <b>methane</b>, <b>nitrous oxide</b> and fluorinated gases — trap part of that heat, like the glass of a greenhouse. Without them Earth would be frozen; with too much of them it overheats. Since 1850 burning fossil fuels has pushed CO₂ from about <b>280 ppm</b> to over <b>420 ppm</b>, and the world is now about <b>1.1–1.3 °C</b> warmer. <b>2024</b> was the hottest year on record and the first calendar year above 1.5 °C.</p><p>High above, in the <b>stratosphere</b>, a thin layer of <b>ozone</b> (O₃) blocks harmful <b>ultraviolet</b> rays. In <b>1985</b> British scientists found a <b>hole</b> in it over <b>Antarctica</b>, caused mainly by <b>CFCs</b>, whose chlorine destroys ozone. The world answered with the <b>Montreal Protocol</b> (1987), and the layer is now slowly healing.</p>", key:"Greenhouse gases: CO₂, CH₄, N₂O, fluorinated gases, water vapour; ozone layer in the stratosphere, measured in Dobson units; CFCs made the Antarctic hole (found 1985)."},
  {k:"table", title:"Greenhouse gases and their sources", head:["Gas","Main source","Note"], rows: E7G.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Layers of the atmosphere", head:["Layer","Known for","Note"], rows: E7L.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Climate and ozone numbers", rows:[
    ["Kyoto's six gases","CO₂, methane, nitrous oxide, HFCs, PFCs and SF₆ (NF₃ added in 2012)"],
    ["CO₂ in air","About 280 ppm before 1850; over 420 ppm in the 2020s"],
    ["Global warming potential","Measured against CO₂ = 1; methane is about 28 over 100 years"],
    ["Hottest year on record","2024 — the first calendar year above 1.5 °C (WMO)"],
    ["Ozone unit","Dobson unit (DU)"],
    ["Ozone hole","Over Antarctica; reported in 1985 by the British Antarctic Survey"],
    ["World Ozone Day","16 September (Montreal Protocol signed in 1987)"],
    ["Ozone protects from","Ultraviolet (UV-B) rays — skin cancer and cataract"]
  ]},
  {k:"trick", h:"Greenhouse gases — <b>“Can Mother Nature Hold Heat?”</b>: <b>C</b>O₂, <b>M</b>ethane, <b>N</b>itrous oxide, <b>H</b>FCs / CFCs, <b>H</b>₂O (water vapour). Atmosphere upward — <b>“The Strong Man Throws Eggs”</b>: Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere."},
  {k:"trap", h:"<b>Nitrogen and oxygen are NOT greenhouse gases</b>. The ozone <b>layer</b> is in the <b>stratosphere</b>, not the troposphere. The ozone hole is worst over <b>Antarctica</b> (south), not the Arctic. <b>HFCs</b> don't harm ozone but do warm the planet."}
], sum:["Main greenhouse gases: carbon dioxide, methane, nitrous oxide, fluorinated gases and water vapour.","Methane comes mostly from paddy fields, cattle and wetlands; nitrous oxide from fertilisers.","The ozone layer lies in the stratosphere and is measured in Dobson units.","CFCs caused the Antarctic ozone hole, reported in 1985; World Ozone Day is 16 September.","2024 was the hottest year on record — the first calendar year above 1.5 °C."]},

{id:"E8", heat:3, title:"International conventions and protocols", hi:"अंतरराष्ट्रीय अभिसमय और प्रोटोकॉल", blocks:[
  {k:"hot", h:"Every exam has one: <b>“The Montreal Protocol is related to?”</b> (ozone), <b>Kyoto</b> (greenhouse gases), <b>Basel</b> (hazardous waste), <b>Cartagena</b> (biosafety), <b>Nagoya</b> (benefit sharing), <b>Ramsar</b> (wetlands), <b>CITES</b> (wildlife trade) — and the <b>year</b> of each."},
  {k:"story", h:"<p>Modern environmental diplomacy began at the <b>Stockholm Conference</b> in <b>1972</b>; the <b>UNEP</b> was born there, and its opening day, <b>5 June</b>, became World Environment Day. Twenty years later the <b>Earth Summit</b> at <b>Rio de Janeiro (1992)</b> produced three big treaties: the climate convention (<b>UNFCCC</b>), the biodiversity convention (<b>CBD</b>) and, two years later, the desertification convention (<b>UNCCD</b>, 1994).</p><p>Each convention grew protocols. Under the <b>UNFCCC</b> came <b>Kyoto (1997)</b> and <b>Paris (2015)</b>. Under the <b>CBD</b> came <b>Cartagena (2000)</b> on GM organisms and <b>Nagoya (2010)</b> on benefit sharing. Under the ozone <b>Vienna Convention (1985)</b> came the <b>Montreal Protocol (1987)</b> and its <b>Kigali Amendment (2016)</b>. Chemicals have their own trio — <b>Basel</b> (waste), <b>Rotterdam</b> (trade consent) and <b>Stockholm</b> (POPs) — plus <b>Minamata</b> for mercury.</p>", key:"Stockholm 1972 → UNEP; Rio 1992 → UNFCCC + CBD; Kyoto 1997 & Paris 2015 under UNFCCC; Cartagena 2000 & Nagoya 2010 under CBD; Montreal 1987 → ozone."},
  {k:"table", title:"Treaties and summits by year", head:["Treaty / summit","Year","Note"], rows: E8Y.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"What each treaty deals with", head:["Treaty","Deals with","Note"], rows: E8S.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Which treaty sits under which", rows:[
    ["UNFCCC (1992)","Kyoto Protocol (1997), Paris Agreement (2015)"],
    ["CBD (1992)","Cartagena Protocol (2000), Nagoya Protocol (2010)"],
    ["Vienna Convention (1985)","Montreal Protocol (1987), Kigali Amendment (2016)"],
    ["Three goals of the CBD","Conservation, sustainable use, fair sharing of benefits"],
    ["Paris temperature goal","Well below 2 °C, aiming for 1.5 °C above pre-industrial levels"],
    ["India ratified Paris","2 October 2016 (Gandhi Jayanti)"],
    ["CBD COPs","COP11 Hyderabad (2012); COP15 Kunming–Montreal (2022); COP16 Cali, Colombia (2024)"],
    ["Other COPs in India","UNCCD COP14, Greater Noida (2019); CMS COP13, Gandhinagar (2020)"]
  ]},
  {k:"trick", h:"Chemical trio by year and letter — <b>“B-R-S, 89-98-01”</b>: <b>B</b>asel 1989 (waste), <b>R</b>otterdam 1998 (consent), <b>S</b>tockholm 2001 (POPs). <b>“Cartagena = Careful with GM”</b>, <b>“Nagoya = Now share the profit”</b>."},
  {k:"trap", h:"There are <b>two Stockholms</b>: the <b>1972 Conference</b> (human environment) and the <b>2001 Convention</b> (POPs). The <b>Cartagena</b> Protocol was finally adopted in <b>Montreal</b> (2000). The <b>Earth Summit</b> (1992) is also called the <b>Rio Summit</b> or <b>Vasundhara Summit</b>; <b>Rio+20</b> was in 2012."}
], sum:["Stockholm Conference 1972 created UNEP; 5 June is World Environment Day.","The Earth Summit at Rio (1992) gave the UNFCCC and the CBD; the UNCCD followed in 1994.","Montreal Protocol 1987 (ozone); Kigali Amendment 2016 (HFCs).","Kyoto 1997 and Paris 2015 come under the UNFCCC; Cartagena 2000 and Nagoya 2010 under the CBD.","Basel — hazardous waste; Rotterdam — prior informed consent; Stockholm 2001 — POPs; Minamata — mercury."]},

{id:"E9", heat:3, title:"Climate COPs and world environment bodies", hi:"जलवायु सम्मेलन (COP) और विश्व पर्यावरण संस्थाएँ", blocks:[
  {k:"hot", h:"Current-affairs favourites: <b>the latest COP and its venue</b> (COP29 Baku, COP30 Belém, COP31 Antalya), <b>what each COP agreed</b>, and the <b>headquarters</b> of UNEP (Nairobi), IPCC (Geneva), IUCN and WWF (Gland)."},
  {k:"story", h:"<p>Every year the countries of the <b>UNFCCC</b> meet at a <b>Conference of the Parties (COP)</b>. The first was in <b>Berlin (1995)</b>; <b>Kyoto (COP3, 1997)</b> gave the Kyoto Protocol; <b>New Delhi</b> hosted <b>COP8 (2002)</b>. <b>Paris (COP21, 2015)</b> gave the Paris Agreement. At <b>Glasgow (COP26, 2021)</b> India promised <b>net zero by 2070</b>. <b>Sharm el-Sheikh (COP27)</b> agreed a <b>Loss and Damage Fund</b>; <b>Dubai (COP28)</b> held the first global stocktake; <b>Baku (COP29, 2024)</b> set a new climate-finance goal of <b>$300 billion a year by 2035</b>; and <b>Belém (COP30, 2025)</b> met on the edge of the Amazon.</p><p>As of October 2026, <b>COP31</b> is scheduled for <b>9–20 November 2026</b> in <b>Antalya, Türkiye</b>, with Australia leading the negotiations — the first COP whose presidency is split between two countries. Behind the talks stand the <b>UNEP</b> (Nairobi, 1972), the science panel <b>IPCC</b> (Geneva, 1988) and the money of the <b>GEF</b> and the <b>Green Climate Fund</b>.</p>", key:"COP1 Berlin 1995; COP3 Kyoto; COP8 New Delhi; COP21 Paris; COP26 Glasgow; COP27 Sharm el-Sheikh; COP28 Dubai; COP29 Baku; COP30 Belém; COP31 Antalya (Nov 2026)."},
  {k:"table", title:"UN climate COPs", head:["COP","Venue","Remember"], rows: E9C.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Where the world's environment bodies sit", head:["Body","Headquarters","Note"], rows: E9H.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"COP31 and after (as of October 2026)", rows:[
    ["COP31 (2026)","Antalya, Türkiye, 9–20 November 2026; Australia's Chris Bowen is 'President of Negotiations'"],
    ["India's offer","India has offered to host COP33 in 2028 (announced at COP28)"],
    ["India's Panchamrit (COP26)","Net zero by 2070; 500 GW non-fossil capacity and 50% of energy needs from renewables by 2030"],
    ["IPCC reports","Sixth Assessment Report completed in 2023"],
    ["UNEP's award","Champions of the Earth"],
    ["UNEP's flagship report","Emissions Gap Report (yearly)"]
  ]},
  {k:"trick", h:"Recent COPs in order — <b>“Get Some Dates By Boat”</b>: <b>G</b>lasgow (26), <b>S</b>harm el-Sheikh (27), <b>D</b>ubai (28), <b>B</b>aku (29), <b>B</b>elém (30). HQs — <b>“UNEP in Nairobi, IPCC in Geneva, Pandas in Gland”</b>."},
  {k:"trap", h:"<b>UNEP</b> is in <b>Nairobi</b>, but the <b>UNFCCC secretariat</b> is in <b>Bonn</b> and the <b>CBD secretariat</b> in <b>Montreal</b>. <b>COP25</b> was held in <b>Madrid</b> though <b>Chile</b> presided. Climate COP numbers are not the same as biodiversity (CBD) COP numbers — CBD COP15 was Kunming–Montreal (2022)."}
], sum:["COP1 was in Berlin (1995); COP3 in Kyoto (1997); COP8 in New Delhi (2002); COP21 in Paris (2015).","COP26 Glasgow (2021): India announced net zero by 2070.","COP27 Sharm el-Sheikh — Loss and Damage Fund; COP28 Dubai — first global stocktake.","COP29 Baku (2024) — $300 billion a year by 2035; COP30 Belém, Brazil (2025); COP31 Antalya, Türkiye (Nov 2026, scheduled).","UNEP — Nairobi; IPCC — Geneva; IUCN and WWF — Gland; ISA — Gurugram."]},

{id:"E10", heat:3, title:"India: green laws, missions, movements and environmentalists", hi:"भारत: पर्यावरण क़ानून, मिशन, आंदोलन और पर्यावरणविद्", blocks:[
  {k:"hot", h:"Asked very often: <b>Chipko (1973, Uttarakhand, Sunderlal Bahuguna)</b>, <b>Appiko (Karnataka)</b>, <b>Narmada Bachao (Medha Patkar)</b>, <b>NGT (2010)</b>, the <b>eight NAPCC missions</b> and <b>Mission LiFE</b>."},
  {k:"story", h:"<p>India's green story is older than its laws. In <b>1730</b>, at <b>Khejarli</b> near Jodhpur, <b>Amrita Devi Bishnoi</b> and 363 Bishnois died hugging khejri trees to stop the king's axemen. Two and a half centuries later, in <b>1973</b>, villagers in <b>Chamoli</b> (now Uttarakhand) again hugged trees — the <b>Chipko movement</b>, organised by <b>Chandi Prasad Bhatt</b> and carried across India by <b>Sunderlal Bahuguna</b>. Karnataka's <b>Appiko</b> (1983) copied it, Kerala's scientists and poets saved <b>Silent Valley</b>, and <b>Medha Patkar</b> led the <b>Narmada Bachao Andolan</b> against big dams.</p><p>The law followed: the <b>Water Act (1974)</b> created the <b>Central Pollution Control Board</b>, the <b>Air Act</b> came in 1981 and the <b>Environment (Protection) Act</b> in 1986. In <b>2008</b> India released its <b>National Action Plan on Climate Change</b> with <b>eight missions</b>, and in <b>2010</b> set up the <b>National Green Tribunal</b> to hear green cases quickly. In <b>2022</b> India launched <b>Mission LiFE</b> — 'Lifestyle for Environment' — and in <b>2023</b> the <b>Green Credit Programme</b>.</p>", key:"Khejarli 1730; Chipko 1973 (Bahuguna, Bhatt); Appiko 1983 (Hegde); NBA (Medha Patkar); CPCB 1974; NAPCC 2008 (8 missions); NGT 2010; LiFE 2022; Green Credit 2023."},
  {k:"table", title:"India's green milestones", head:["Law / step","Year","Note"], rows: E10Y.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Environmental movements", head:["Movement","State","Note"], rows: E10M.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Indian environmentalists", head:["Person","Known for","Note"], rows: E10P.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"NAPCC (2008) — the eight national missions", rows:[
    ["1","National Solar Mission (Jawaharlal Nehru National Solar Mission, 2010)"],
    ["2","National Mission for Enhanced Energy Efficiency (runs the PAT scheme)"],
    ["3","National Mission on Sustainable Habitat"],
    ["4","National Water Mission"],
    ["5","National Mission for Sustaining the Himalayan Ecosystem"],
    ["6","National Mission for a Green India"],
    ["7","National Mission for Sustainable Agriculture"],
    ["8","National Mission on Strategic Knowledge for Climate Change"]
  ]},
  {k:"facts", title:"Institutions and schemes", rows:[
    ["National Green Tribunal","Set up 18 October 2010; principal bench New Delhi; zonal benches Bhopal, Pune, Kolkata and Chennai"],
    ["CPCB","Central Pollution Control Board, 1974 — under the Ministry of Environment, Forest and Climate Change"],
    ["Mission LiFE","'Lifestyle for Environment' — idea given by the PM at COP26 (2021); launched 20 October 2022"],
    ["Green Credit Programme","Market rewards for green actions such as tree planting; rules notified in October 2023"],
    ["Updated NDC (2022)","Cut emissions intensity of GDP by 45% from 2005 levels and reach 50% non-fossil power capacity by 2030"],
    ["Net zero target","2070"]
  ]},
  {k:"trick", h:"NAPCC missions — <b>“SEW-HAGS + K”</b>: <b>S</b>olar, <b>E</b>nergy efficiency, <b>W</b>ater, <b>H</b>imalaya, <b>A</b>griculture, <b>G</b>reen India, <b>S</b>ustainable habitat, and <b>K</b>nowledge. Movements north to south — <b>Chipko (UK) → Narmada (MP/Guj/Mah) → Appiko (Kar) → Silent Valley (Ker)</b>."},
  {k:"trap", h:"<b>Appiko</b> means 'to hug' in Kannada — it is the <b>Chipko of Karnataka</b>, not Kerala. <b>Chipko</b> began in <b>1973</b> (Uttarakhand was then part of UP). <b>NGT</b> is a tribunal set up by an Act of <b>2010</b>, not a constitutional body. <b>Salim Ali</b> is the Birdman; <b>Rajendra Singh</b> the Waterman; <b>Jadav Payeng</b> the Forest Man."}
], sum:["Khejarli (1730, Rajasthan): Amrita Devi and 363 Bishnois died to save khejri trees.","Chipko (1973, Uttarakhand) — Chandi Prasad Bhatt and Sunderlal Bahuguna; Appiko (1983, Karnataka) — Panduranga Hegde.","Narmada Bachao Andolan — Medha Patkar; Silent Valley — Kerala.","Water Act 1974 (CPCB), Air Act 1981, Environment Act 1986, NAPCC 2008 with eight missions, NGT 2010.","Mission LiFE launched 2022; Green Credit Programme 2023; net zero target 2070."]}
);

pairQs("E7", E7G, { q: g => `${g} as a greenhouse gas comes mainly from:`, rq: a => `Which greenhouse gas comes mainly from ${lcf(a)}?` });
pairQs("E7", E7L, { q: l => `What is the ${l} known for?`, rq: a => `Which layer of the atmosphere is known for this: ${lcf(a)}?` });
pairQs("E8", E8Y, { q: t => `${t} — adopted or held in which year?`, rq: a => `Which of these was adopted or held in ${a}?` });
pairQs("E8", E8S, { q: t => `The ${t} deals with:`, rq: a => `Which treaty deals with ${lcf(a)}?` });
pairQs("E9", E9C, { q: c => `Where was the UN climate conference ${c} held?`, rq: a => `Which UN climate COP was held in ${a}?` });
pairQs("E9", E9H, { q: o => `Where is the headquarters of ${o.replace(/ \(\d{4}\)$/, "")}?`, rq: a => `Which of these bodies has its headquarters in ${a}?`, extra: ["New York, USA","Rome, Italy"] });
pairQs("E10", E10Y, { q: t => `${t} — in which year?`, rq: a => `Which step in India's green history came in ${a}?` });
pairQs("E10", E10M, { q: m => `The ${m} took place in:`, rq: a => `Which movement took place in ${a}?`, extra: ["Odisha","Assam"] });
pairQs("E10", E10P, { q: p => `${p} is best known for:`, rq: a => `Who is known for this: ${lcf(a)}?` });

QB.push(
["E7","Which of these is NOT a greenhouse gas?",["Nitrogen","Methane","Carbon dioxide","Nitrous oxide"],"N₂ and O₂ do not trap heat.","p"],
["E7","The thickness of the ozone layer is measured in:",["Dobson units","Decibels","Richter units","Hertz"],"","p"],
["E7","Which chemical is mainly responsible for the depletion of the ozone layer?",["Chlorofluorocarbons","Carbon dioxide","Sulphur dioxide","Methane"],"Chlorine from CFCs breaks ozone apart.","p","","","SSC CGL · 30 Aug 2015"],
["E7","World Ozone Day is observed on:",["16 September","5 June","22 April","1 December"],"The day the Montreal Protocol was signed in 1987.","p"],
["E7","The ozone hole was first reported over:",["Antarctica","The Arctic","The Sahara","The Pacific Ocean"],"In 1985 by the British Antarctic Survey.","p"],
["E7","The ozone layer protects living things from:",["Ultraviolet rays","Infrared rays","Gamma rays only","Radio waves"],"","p"],
["E7","Which was the hottest year on record and the first calendar year above 1.5 °C of warming?",["2024","2016","2020","2023"],"Confirmed by the WMO in January 2025.",""],
["E8","The international agreement 'Montreal Protocol' is related to:",["The ozone layer","Wildlife","Ramsar sites","World Heritage sites"],"Signed in 1987.","p","","","SSC CHSL 2020 · 15 Apr 2021 (Shift 3)"],
["E8","The Earth Summit of 1992 was held in:",["Rio de Janeiro","Stockholm","Johannesburg","Kyoto"],"Also called the Rio or Vasundhara Summit.","p"],
["E8","UNEP was set up after which conference?",["Stockholm Conference, 1972","Earth Summit, 1992","Kyoto Conference, 1997","Paris Conference, 2015"],"","p"],
["E8","The Kyoto Protocol came into force in:",["2005","1997","2001","2012"],"Adopted in 1997.","p"],
["E8","The Paris Agreement aims to keep global warming well below:",["2 °C above pre-industrial levels","1 °C above today's level","3 °C above pre-industrial levels","4 °C by 2100"],"And to try for 1.5 °C.","p"],
["E8","Which protocol of the CBD deals with genetically modified organisms?",["Cartagena Protocol","Nagoya Protocol","Kyoto Protocol","Montreal Protocol"],"",""],
["E8","World Environment Day (5 June) marks the opening of the:",["Stockholm Conference, 1972","Earth Summit, 1992","Montreal Protocol, 1987","Paris Agreement, 2015"],"","p"],
["E8","The 'Kunming-Montreal Global Biodiversity Framework' (2022) aims to protect what share of land and sea by 2030?",["30%","10%","50%","17%"],"The '30 by 30' target.",""],
["E9","As of October 2026, COP31 (November 2026) is scheduled to be held in:",["Antalya, Türkiye","Adelaide, Australia","Belém, Brazil","Bonn, Germany"],"Türkiye hosts; Australia leads the negotiations.",""],
["E9","At which COP did India announce its target of net zero emissions by 2070?",["COP26, Glasgow","COP21, Paris","COP27, Sharm el-Sheikh","COP28, Dubai"],"","p"],
["E9","The Loss and Damage Fund for vulnerable countries was agreed at:",["COP27, Sharm el-Sheikh","COP26, Glasgow","COP25, Madrid","COP21, Paris"],"",""],
["E9","The IPCC was set up in 1988 by:",["WMO and UNEP","UNESCO and WHO","IUCN and WWF","World Bank and IMF"],"","p"],
["E9","Which body shared the 2007 Nobel Peace Prize with Al Gore?",["IPCC","UNEP","WWF","Greenpeace"],"",""],
["E9","The International Solar Alliance was launched at:",["COP21, Paris (2015)","COP26, Glasgow (2021)","COP8, New Delhi (2002)","COP15, Copenhagen (2009)"],"By India and France.","p"],
["E10","Who is a major driving force behind the 'Narmada Bachao Andolan'?",["Medha Patkar","Anna Hazare","Shantha Sinha","Manasi Pradhan"],"","p","","","SSC CGL 2017 · 16 Aug 2017"],
["E10","The Chipko movement began in which year?",["1973","1970","1983","1987"],"In Chamoli district of today's Uttarakhand.","p"],
["E10","The word 'Appiko' in Kannada means:",["To hug","To save","Forest","Tree"],"Like 'Chipko' in Hindi.",""],
["E10","How many national missions are there under the National Action Plan on Climate Change?",["8","6","10","12"],"","p"],
["E10","Where is the principal bench of the National Green Tribunal?",["New Delhi","Bhopal","Pune","Kolkata"],"","p"],
["E10","Mission LiFE stands for:",["Lifestyle for Environment","Life in Forest Ecosystems","Land, Industry, Forest and Energy","Living in Future Earth"],"","p"],
["E10","The Green Credit Programme was notified under which Act?",["Environment (Protection) Act, 1986","Forest (Conservation) Act, 1980","Air Act, 1981","Biological Diversity Act, 2002"],"",""],
["E10","Which tree did the Bishnois of Khejarli die to protect in 1730?",["Khejri","Sal","Teak","Deodar"],"Rajasthan's state tree.",""]
);

LASTMOMENT.push(
{t:"Treaties", era:["en"], rows:[["Ramsar","1971 · wetlands"],["Stockholm Conf.","1972 · UNEP"],["Montreal","1987 · ozone"],["Basel","1989 · waste"],["Rio Earth Summit","1992"],["Kyoto","1997 · GHG"],["Cartagena","2000 · biosafety"],["Paris","2015 · 1.5–2 °C"]]},
{t:"COPs", era:["en"], rows:[["COP1","Berlin 1995"],["COP8","New Delhi 2002"],["COP21","Paris 2015"],["COP26","Glasgow 2021"],["COP27","Sharm el-Sheikh 2022"],["COP28","Dubai 2023"],["COP29","Baku 2024"],["COP30","Belém 2025"]]},
{t:"India's green story", era:["en"], rows:[["Khejarli","1730"],["Chipko","1973"],["Water Act / CPCB","1974"],["Appiko","1983"],["Environment Act","1986"],["NAPCC","2008 · 8 missions"],["NGT","2010"],["Mission LiFE","2022"]]}
);
TILES.push(["16 Sep","World Ozone Day","en"],["1987","Montreal Protocol","en"],["2015","Paris Agreement","en"],["COP30","Belém, 2025","en"],["2070","India's net zero","en"],["8","NAPCC missions","en"]);

/* Part 2 · E4 biodiversity, hotspots and the Red List; E5 air pollution and the AQI; E6 water, soil, noise and waste, and pollution diseases.
   (National parks, sanctuaries and Ramsar lists are in the Protected Areas app.) */
const E4H = [
  ["Himalaya","The Himalayan belt of India","Shared with Nepal, Bhutan and others.","p"],
  ["Indo-Burma","North-east India and the Andaman Islands","The largest of the four by area.","p"],
  ["Western Ghats and Sri Lanka","The Western Ghats","Called the 'ecological hotspot of India'; very high endemism (frogs, plants).","p"],
  ["Sundaland","The Nicobar Islands","Mostly Indonesia and Malaysia; India's share is the Nicobar Islands.","p"]
];
const E4R = [
  ["EX","Extinct","No individual left anywhere.","p"],
  ["EW","Extinct in the Wild","Survives only in captivity.",""],
  ["CR","Critically Endangered","The highest risk category for living wild species.","p"],
  ["EN","Endangered","","p"],
  ["VU","Vulnerable","",""],
  ["NT","Near Threatened","",""],
  ["LC","Least Concern","",""],
  ["DD","Data Deficient","Not enough information to judge.",""],
  ["NE","Not Evaluated","",""]
];
const E4G = [
  ["Kavu (Sarpa Kavu)","Kerala","Groves often linked with snake worship.","p"],
  ["Devrai (Devrahati)","Maharashtra","","p"],
  ["Law Kyntang","Meghalaya","Mawphlang is the best-known one.","p"],
  ["Orans","Rajasthan","","p"],
  ["Sarna","Jharkhand","Worshipped by tribal communities.",""],
  ["Devarakadu","Karnataka","",""],
  ["Kovil Kadu","Tamil Nadu","",""],
  ["Umanglai","Manipur","",""]
];

const E5P = [
  ["Carbon monoxide","Forms carboxyhaemoglobin and cuts the blood's oxygen supply","It binds haemoglobin about 200 times more strongly than oxygen.","p"],
  ["Sulphur dioxide and nitrogen oxides","Acid rain","Rain with pH below 5.6.","p"],
  ["PM2.5 (fine particles)","Goes deep into the lungs and even the blood","Particles under 2.5 micrometres across.","p"],
  ["Lead from old leaded petrol","Damages the brain and nerves, especially in children","Leaded petrol was phased out in India by 2000.",""],
  ["Methyl isocyanate","The Bhopal gas tragedy (1984)","Leaked from the Union Carbide plant on the night of 2–3 December 1984.","p"],
  ["Peroxyacetyl nitrate (PAN)","Photochemical smog that irritates the eyes","Formed by sunlight acting on NOx and hydrocarbons.",""],
  ["Radon gas from soil and rocks","Lung cancer from indoor air","A radioactive gas.",""]
];
const E5A = [
  ["Good","0–50","Minimal impact.","p"],
  ["Satisfactory","51–100","Minor breathing discomfort to sensitive people.",""],
  ["Moderate","101–200","Also called 'moderately polluted'.","p"],
  ["Poor","201–300","",""],
  ["Very poor","301–400","",""],
  ["Severe","401–500","Affects healthy people too.","p"]
];

const E6D = [
  ["Minamata disease","Mercury","First seen at Minamata Bay, Japan (1956), from fish eaten by people.","p"],
  ["Itai-itai disease","Cadmium","Japan; painful, weak bones — 'itai' means 'it hurts'.","p"],
  ["Blue baby syndrome (methaemoglobinaemia)","Nitrates in drinking water","Mostly from fertiliser run-off.","p"],
  ["Fluorosis","Excess fluoride in water","Mottled teeth and stiff bones.","p"],
  ["Black foot disease","Arsenic","Arsenic in groundwater is a big problem in West Bengal and Bihar.","p"],
  ["Plumbism","Lead","",""],
  ["Silicosis","Silica dust","Common among stone-cutting and mine workers.","p"],
  ["Asbestosis","Asbestos fibres","",""],
  ["Byssinosis (brown lung)","Cotton dust","Textile mill workers.",""],
  ["Black lung disease","Coal dust","Coal miners.",""]
];
const E6N = [
  ["Industrial area","75 dB(A)","75 by day, 70 at night.","p"],
  ["Commercial area","65 dB(A)","65 by day, 55 at night.",""],
  ["Residential area","55 dB(A)","55 by day, 45 at night.","p"],
  ["Silence zone","50 dB(A)","50 by day, 40 at night; at least 100 m around hospitals, schools and courts.","p"]
];
const E6T = [
  ["BOD (biochemical oxygen demand)","Oxygen used by microbes to break down organic matter in water","High BOD = heavily polluted water.","p"],
  ["COD (chemical oxygen demand)","Oxygen needed to chemically oxidise all the matter in water","",""],
  ["Eutrophication","Over-enrichment of a water body with nutrients, causing algal blooms","Caused by phosphates and nitrates from fertilisers and detergents.","p"],
  ["Biomagnification","Rise in a toxin's concentration at each higher trophic level","DDT in fish-eating birds thinned their eggshells.","p"],
  ["Bioaccumulation","Build-up of a toxin inside one organism over its life","",""],
  ["Dead zone","Water so low in oxygen that fish die","Often follows eutrophication.",""],
  ["Leachate","Polluted liquid seeping out of a landfill","",""],
  ["Fly ash","Fine ash left after burning coal in thermal power plants","Used to make bricks and cement.",""]
];

LESSONS.push(
{id:"E4", heat:3, title:"Biodiversity, hotspots and the Red List", hi:"जैव विविधता, हॉटस्पॉट और रेड लिस्ट", blocks:[
  {k:"hot", h:"Asked again and again: <b>India's four hotspots</b>, the <b>number of hotspots in the world (36)</b>, <b>in-situ vs ex-situ</b> conservation, the <b>IUCN Red List</b> categories and IUCN's headquarters (<b>Gland, Switzerland</b>)."},
  {k:"story", h:"<p><b>Biodiversity</b> — the variety of life — works at three levels: <b>genetic</b>, <b>species</b> and <b>ecosystem</b> diversity. India has only about <b>2.4%</b> of the world's land but about <b>7–8%</b> of its recorded species, which makes it one of the <b>17 megadiverse countries</b>. In 1988 <b>Norman Myers</b> named the richest but most threatened regions <b>hotspots</b>: a hotspot needs at least <b>1,500 endemic plant species</b> and must have lost at least <b>70%</b> of its original habitat. The world has <b>36</b>; India touches <b>four</b> — the <b>Himalaya</b>, <b>Indo-Burma</b>, the <b>Western Ghats and Sri Lanka</b>, and <b>Sundaland</b> (Nicobar Islands).</p><p>We protect species in two ways. <b>In-situ</b> means in their home — national parks, sanctuaries, biosphere reserves and <b>sacred groves</b>. <b>Ex-situ</b> means outside it — zoos, botanical gardens, <b>seed banks</b> and cryopreservation. The <b>IUCN</b> (founded 1948, Gland) keeps the <b>Red List</b>, which ranks species from Least Concern to Extinct.</p>", key:"Hotspots: 36 in the world, 4 in India (Himalaya, Indo-Burma, Western Ghats–Sri Lanka, Sundaland); in-situ = in the home, ex-situ = outside it; IUCN Red List."},
  {k:"table", title:"India's four biodiversity hotspots", head:["Hotspot","Part of India","Note"], rows: E4H.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"IUCN Red List categories", head:["Code","Category","Note"], rows: E4R.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Sacred groves (in-situ conservation by communities)", head:["Local name","State","Note"], rows: E4G.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"In-situ vs ex-situ", rows:[
    ["In-situ (on site)","National parks, sanctuaries, biosphere reserves, sacred groves"],
    ["Ex-situ (off site)","Zoos, botanical gardens, seed banks, gene banks, cryopreservation"],
    ["Cryopreservation","Storing seeds, sperm or tissue at −196 °C in liquid nitrogen"],
    ["Svalbard Global Seed Vault","Norway — the world's 'doomsday' seed bank"],
    ["India's national gene bank","National Bureau of Plant Genetic Resources (NBPGR), New Delhi"],
    ["National Biodiversity Authority","Chennai — set up in 2003 under the Biological Diversity Act, 2002"]
  ]},
  {k:"facts", title:"Kinds of species", rows:[
    ["Endemic","Found naturally in only one region — e.g. Nilgiri tahr, lion-tailed macaque, purple frog"],
    ["Keystone","Has a much bigger effect on its ecosystem than its numbers suggest — e.g. fig trees, tigers"],
    ["Flagship","A popular species used to rally support — e.g. tiger, giant panda"],
    ["Umbrella","Saving it saves many others in its range — e.g. tiger, elephant"],
    ["Indicator","Its health shows the health of the environment — e.g. lichens for air pollution"],
    ["Invasive alien","A species from outside that spreads and harms — e.g. Lantana, water hyacinth"]
  ]},
  {k:"trick", h:"India's hotspots — <b>“HI, WEST SUN”</b>: <b>H</b>imalaya, <b>I</b>ndo-Burma, <b>West</b>ern Ghats, <b>Sun</b>daland. Red List from bad to safe: <b>“Every Elephant Can Easily Vanish Near Lakes”</b> — EX, EW, CR, EN, VU, NT, LC."},
  {k:"trap", h:"The <b>Eastern Ghats</b> are <b>not</b> a hotspot. <b>Sundaland</b> covers only the <b>Nicobar</b> Islands; the <b>Andaman</b> Islands belong to <b>Indo-Burma</b>. <b>WWF</b> and <b>IUCN</b> are both in <b>Gland</b>, Switzerland. A <b>sacred grove</b> is <b>in-situ</b>, a <b>seed bank</b> is <b>ex-situ</b>."}
], sum:["Biodiversity has three levels: genetic, species and ecosystem.","India is one of 17 megadiverse countries, with about 7–8% of recorded species on 2.4% of the world's land.","The world has 36 hotspots; India has four — Himalaya, Indo-Burma, Western Ghats–Sri Lanka and Sundaland.","In-situ: parks, sanctuaries, biosphere reserves, sacred groves; ex-situ: zoos, gardens, seed banks.","The IUCN (Gland, 1948) keeps the Red List: EX, EW, CR, EN, VU, NT, LC."]},

{id:"E5", heat:3, title:"Air pollution and the Air Quality Index", hi:"वायु प्रदूषण और वायु गुणवत्ता सूचकांक", blocks:[
  {k:"hot", h:"Often asked: the <b>AQI categories</b> and the <b>8 pollutants</b> it measures, <b>acid rain</b> (SO₂ and NOx), <b>carbon monoxide</b> and haemoglobin, the <b>Bhopal gas</b> (methyl isocyanate) and <b>photochemical smog</b>."},
  {k:"story", h:"<p>On the night of <b>2–3 December 1984</b>, <b>methyl isocyanate</b> leaked from a pesticide plant in <b>Bhopal</b> and killed thousands — the world's worst industrial disaster, which led to the Environment (Protection) Act, 1986. Everyday air pollution is quieter but larger. Vehicles give out <b>carbon monoxide</b>, which grabs haemoglobin and starves the body of oxygen. Coal burning gives <b>sulphur dioxide</b>; with <b>nitrogen oxides</b> it makes <b>acid rain</b>, which corrodes marble — the 'marble cancer' of the Taj Mahal.</p><p>Smoke plus fog makes <b>smog</b>. The old <b>London smog</b> (1952) was sulphur smoke on cold mornings; the <b>photochemical smog</b> of Los Angeles forms when sunlight acts on exhaust gases and makes <b>ozone and PAN</b>. India launched its <b>National Air Quality Index</b> in <b>October 2014</b>; it rates air from <b>Good (0–50)</b> to <b>Severe (401–500)</b> using eight pollutants.</p>", key:"CO → carboxyhaemoglobin; SO₂ + NOx → acid rain (pH below 5.6); Bhopal 1984 → methyl isocyanate; AQI (2014) — 6 bands, 8 pollutants."},
  {k:"table", title:"Pollutants and what they do", head:["Pollutant","Main effect","Note"], rows: E5P.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"India's AQI bands", head:["Category","AQI value","Note"], rows: E5A.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Air quality in India", rows:[
    ["National AQI","Launched in October 2014 — 'One Number, One Colour, One Description'"],
    ["Its 8 pollutants","PM10, PM2.5, NO₂, SO₂, CO, O₃, NH₃ and lead (Pb)"],
    ["Air Act","Air (Prevention and Control of Pollution) Act, 1981"],
    ["National Clean Air Programme (NCAP)","Launched January 2019 to cut particulate pollution in over 130 cities"],
    ["Bharat Stage VI fuel norms","Nationwide from 1 April 2020 — India jumped straight from BS-IV"],
    ["GRAP","Graded Response Action Plan for Delhi-NCR, applied by the Commission for Air Quality Management"],
    ["Acid rain","Rain with pH below 5.6"],
    ["Indoor air pollution","Smoke from wood and dung cooking fires — tackled by the Ujjwala LPG scheme (2016)"]
  ]},
  {k:"trick", h:"AQI bands — <b>“Good Students May Pass, Very Serious”</b>: <b>G</b>ood 0–50, <b>S</b>atisfactory 51–100, <b>M</b>oderate 101–200, <b>P</b>oor 201–300, <b>V</b>ery poor 301–400, <b>S</b>evere 401–500. Every band is 100 wide except the first two (50 each)."},
  {k:"trap", h:"Ozone is <b>good up high</b> (stratosphere) but a <b>pollutant at ground level</b>. <b>London smog</b> is a reducing smog (sulphur, cold); <b>photochemical smog</b> is an oxidising smog (sunlight, ozone, PAN). Bhopal gas was <b>methyl isocyanate</b>, not methane or phosgene."}
], sum:["Carbon monoxide forms carboxyhaemoglobin and reduces the blood's oxygen.","Sulphur dioxide and nitrogen oxides cause acid rain (pH below 5.6).","The Bhopal gas tragedy (1984) was caused by methyl isocyanate.","India's AQI (October 2014) has six bands from Good (0–50) to Severe (401–500) and uses eight pollutants.","Photochemical smog forms from sunlight acting on exhaust gases; it contains ozone and PAN."]},

{id:"E6", heat:3, title:"Water, soil, noise and waste — and the diseases they cause", hi:"जल, मृदा, ध्वनि और अपशिष्ट प्रदूषण तथा उनसे होने वाले रोग", blocks:[
  {k:"hot", h:"The commonest pollution questions: <b>Minamata → mercury</b>, <b>Itai-itai → cadmium</b>, <b>blue baby → nitrates</b>, <b>fluorosis → fluoride</b>, and the meaning of <b>BOD</b>, <b>eutrophication</b> and <b>biomagnification</b>. Noise is measured in <b>decibels</b>."},
  {k:"story", h:"<p>In the 1950s, a factory at <b>Minamata</b> in Japan poured <b>mercury</b> waste into the bay. Fish soaked it up, people ate the fish, and a nerve disease spread — <b>Minamata disease</b>. Downstream from a mine on Japan's Jinzu river, <b>cadmium</b> made bones so brittle that patients cried 'itai-itai' — 'it hurts, it hurts'. Poisons like these and the pesticide <b>DDT</b> grow more concentrated at every step up the food chain: <b>biomagnification</b>.</p><p>When fertiliser and detergent run into a lake, the extra <b>nitrates and phosphates</b> feed huge <b>algal blooms</b>. When the algae die, bacteria use up the oxygen and fish die — <b>eutrophication</b>. The oxygen used by microbes to break down waste is the <b>BOD</b>: clean water has a BOD below about 5 ppm; sewage is far higher. Noise, too, is pollution, measured in <b>decibels</b>; India's rules set the lowest limit for <b>silence zones</b> around hospitals and schools.</p>", key:"Minamata — mercury; Itai-itai — cadmium; blue baby — nitrate; fluorosis — fluoride; high BOD = dirty water; eutrophication = nutrient overload."},
  {k:"table", title:"Pollution diseases", head:["Disease","Caused by","Note"], rows: E6D.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Pollution terms", head:["Term","Meaning","Note"], rows: E6T.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Noise limits — Noise Pollution (Regulation and Control) Rules, 2000", head:["Zone","Daytime limit","Day / night"], rows: E6N.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Waste and plastic rules in India", rows:[
    ["Single-use plastic ban","Listed single-use plastic items banned from 1 July 2022"],
    ["Plastic carry bags","At least 120 microns thick from 31 December 2022 (75 microns from September 2021)"],
    ["Plastic Waste Management Rules","2016, amended several times; makers must take back waste (Extended Producer Responsibility)"],
    ["E-Waste (Management) Rules","2022, in force from 1 April 2023"],
    ["Namami Gange","Flagship Ganga clean-up programme, 2014 (the first Ganga Action Plan was 1985)"],
    ["Water Act","Water (Prevention and Control of Pollution) Act, 1974 — India's first pollution law"],
    ["Clean water BOD","Below about 5 ppm; highly polluted water can exceed 17 ppm"],
    ["Safe noise","Long exposure above about 80–85 dB can damage hearing"]
  ]},
  {k:"trick", h:"<b>“Mad Hatter, Cad Bones”</b>: <b>M</b>inamata = <b>M</b>ercury (mad, nerves); <b>Cad</b>mium = brittle <b>bones</b> (Itai-itai). <b>Blue baby = Nitrate</b> — the baby turns blue because nitrate blocks oxygen in blood. <b>F</b>luorosis = <b>F</b>luoride."},
  {k:"trap", h:"<b>High BOD</b> means <b>more</b> pollution, not cleaner water. <b>Biomagnification</b> is up the food chain; <b>bioaccumulation</b> is inside one body. <b>Arsenic</b> causes black foot disease; <b>coal dust</b> causes black lung — don't swap them. Itai-itai is <b>cadmium</b>, not chromium."}
], sum:["Minamata disease — mercury; Itai-itai — cadmium; blue baby syndrome — nitrates; fluorosis — fluoride.","Black foot disease — arsenic; silicosis — silica dust; byssinosis — cotton dust.","High BOD means heavily polluted water; clean water is below about 5 ppm.","Eutrophication: extra nitrates and phosphates → algal bloom → oxygen loss → fish die.","Noise limits by day: industrial 75, commercial 65, residential 55, silence zone 50 dB(A)."]}
);

pairQs("E4", E4H, { q: t => `The '${t}' biodiversity hotspot covers which part of India?`, rq: a => `Which biodiversity hotspot covers ${lcf(a)}?`, extra: ["The Eastern Ghats","The Thar Desert"] });
pairQs("E4", E4R, { q: c => `In the IUCN Red List, the code '${c}' stands for:`, rq: a => `What is the IUCN Red List code for '${a}'?` });
pairQs("E4", E4G, { q: t => `The sacred grove called '${t}' is found in:`, rq: a => `What are sacred groves called in ${a}?` });
pairQs("E5", E5P, { q: t => `${t} is best known for causing:`, rq: a => `Which pollutant is linked with: ${lcf(a)}?` });
pairQs("E5", E5A, { q: c => `On India's AQI, '${c}' air has a value of:`, rq: a => `An AQI value of ${a} falls in which category?` });
pairQs("E6", E6D, { q: d => `${d} is caused by:`, rq: a => `Which disease is caused by ${lcf(a)}?` });
pairQs("E6", E6T, { q: t => `What is meant by '${t}'?`, rq: a => `Which term means: ${lcf(a)}?` });
pairQs("E6", E6N, { q: z => `Under India's noise rules, the daytime limit for the zone '${z}' is:`, rq: a => `Which zone has a daytime noise limit of ${a}?` });

QB.push(
["E4","How many biodiversity hotspots are there in the world (Conservation International list)?",["36","25","34","40"],"India has 4 of them.","p"],
["E4","Which is NOT one of the biodiversity hotspots found in India?",["Eastern Ghats","Western Ghats","Indo-Burma","Sundaland"],"","p"],
["E4","Which region is often called the 'ecological hotspot of India'?",["Western Ghats","Eastern Ghats","Western Himalayas","Thar Desert"],"",""],
["E4","Which of these is an example of ex-situ conservation?",["Seed bank","National park","Biosphere reserve","Sacred grove"],"Ex-situ = outside the natural home.","p"],
["E4","Which of these is an example of in-situ conservation?",["Biosphere reserve","Botanical garden","Zoo","Cryopreservation"],"","p"],
["E4","The IUCN has its headquarters at:",["Gland, Switzerland","Nairobi, Kenya","Geneva, Switzerland","Paris, France"],"Founded in 1948.","p"],
["E4","A species found naturally in only one particular region is called:",["Endemic","Exotic","Keystone","Invasive"],"","p"],
["E4","To qualify as a hotspot, a region must have at least how many endemic vascular plant species?",["1,500","500","1,000","5,000"],"And must have lost at least 70% of its original habitat.",""],
["E4","India is one of how many 'megadiverse' countries?",["17","12","25","36"],"",""],
["E4","Cryopreservation stores seeds and tissues at about:",["−196 °C in liquid nitrogen","0 °C in ice","−20 °C in a freezer","−78 °C in dry ice"],"",""],
["E5","Which pollutant combines with haemoglobin and reduces the oxygen-carrying capacity of blood?",["Carbon monoxide","Carbon dioxide","Sulphur dioxide","Ozone"],"","p"],
["E5","Rain is called acid rain when its pH is below:",["5.6","7.0","6.5","4.0"],"",""],
["E5","The 'marble cancer' of the Taj Mahal is caused mainly by:",["Sulphur dioxide","Carbon monoxide","Methane","Chlorofluorocarbons"],"It forms acid that eats into marble.","p"],
["E5","How many pollutants are used to calculate India's National AQI?",["8","5","6","10"],"PM10, PM2.5, NO₂, SO₂, CO, O₃, NH₃ and Pb.","p"],
["E5","India's National Clean Air Programme (NCAP) was launched in:",["2019","2014","2016","2021"],"",""],
["E5","Bharat Stage VI emission norms came into force across India on:",["1 April 2020","1 April 2017","1 January 2019","1 October 2021"],"India skipped BS-V.",""],
["E5","The term 'smog' is a mix of:",["Smoke and fog","Smoke and gas","Soot and mist","Sulphur and oxygen"],"","p"],
["E6","What is the full form of BOD?",["Biochemical Oxygen Demand","Biological Organic Decay","Bio-Oxygen Density","Basic Oxygen Distribution"],"Also written as Biological Oxygen Demand.","p","","","SSC CGL 2017 · 16 Aug 2017 (Shift 1)"],
["E6","Minamata disease is caused by pollution of water by:",["Mercury","Tin","Methyl isocyanate","Lead"],"From methylmercury in fish at Minamata Bay, Japan.","p","","","SSC CHSL · 15 Nov 2015 (Evening)"],
["E6","Which metal is responsible for Itai-itai disease?",["Cadmium","Nickel","Chromium","Mercury"],"First seen along the Jinzu river, Japan.","p","","","SSC CGL 2017 · 8 Aug 2017 (Shift 1)"],
["E6","The unit used to measure the loudness of sound (noise) is:",["Decibel","Hertz","Pascal","Watt"],"","p"],
["E6","The excessive growth of algae in a water body due to nutrient run-off is called:",["Eutrophication","Biomagnification","Desalination","Stratification"],"","p"],
["E6","The pesticide whose biomagnification thinned the eggshells of fish-eating birds is:",["DDT","Malathion","Urea","Gammexane"],"","p"],
["E6","Plastic carry bags in India must be at least how thick (from 31 December 2022)?",["120 microns","50 microns","75 microns","100 microns"],"",""],
["E6","India's ban on identified single-use plastic items took effect on:",["1 July 2022","2 October 2019","1 January 2020","5 June 2023"],"","p"]
);

LASTMOMENT.push(
{t:"Hotspots and Red List", era:["en"], rows:[["World hotspots","36"],["India's hotspots","4"],["Himalaya","Himalayan belt"],["Indo-Burma","NE + Andamans"],["Western Ghats","With Sri Lanka"],["Sundaland","Nicobar"],["IUCN","Gland, 1948"],["Red List order","EX EW CR EN VU NT LC"]]},
{t:"Pollution diseases", era:["en"], rows:[["Minamata","Mercury"],["Itai-itai","Cadmium"],["Blue baby","Nitrate"],["Fluorosis","Fluoride"],["Black foot","Arsenic"],["Plumbism","Lead"],["Silicosis","Silica"],["Byssinosis","Cotton dust"]]},
{t:"AQI and noise", era:["en"], rows:[["Good","0–50"],["Satisfactory","51–100"],["Moderate","101–200"],["Poor","201–300"],["Very poor","301–400"],["Severe","401–500"],["Industrial noise (day)","75 dB"],["Silence zone (day)","50 dB"]]}
);
TILES.push(["36","World biodiversity hotspots","en"],["4","Hotspots in India","en"],["1984","Bhopal gas tragedy","en"],["2014","National AQI launched","en"],["2022","Single-use plastic ban","en"]);

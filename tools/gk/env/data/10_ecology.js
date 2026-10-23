/* Part 1 · E1 ecology terms and who coined them; E2 ecosystems, food chains and pyramids; E3 cycles of matter and biomes. */
const lcf = s => s.charAt(0).toLowerCase() + s.slice(1);

const E1T = [
  ["Ecology","Study of living things and their surroundings","The word comes from Greek 'oikos' (house).","p"],
  ["Habitat","The place where an organism naturally lives","",""],
  ["Ecological niche","The role a species plays in its community","Its 'profession', not its 'address'.","p"],
  ["Population","All the individuals of one species in an area","",""],
  ["Community","All the populations of different species living together in an area","",""],
  ["Ecosystem","Living things and their non-living surroundings working as one unit","The basic functional unit of ecology.","p"],
  ["Biome","A large region with its own typical climate, plants and animals","Tundra, taiga, desert, rainforest.",""],
  ["Biosphere","The part of the Earth where life exists","Land, water and lower air together.","p"],
  ["Ecotone","A transition zone between two ecosystems","Example: a mangrove between land and sea.","p"],
  ["Edge effect","More kinds of species found in a transition zone","",""],
  ["Carrying capacity","The largest population an environment can support","",""],
  ["Ecological succession","The gradual change of a community over time to a stable climax","Starts with pioneer species such as lichens.",""]
];
const E1C = [
  ["Ecology","Ernst Haeckel","German biologist, 1866.","p"],
  ["Ecosystem","A. G. Tansley","British ecologist, 1935.","p"],
  ["Biosphere","Eduard Suess","Austrian geologist, 1875.",""],
  ["Biodiversity","Walter G. Rosen","Coined in 1985; made popular by E. O. Wilson.","p"],
  ["Biodiversity hotspot","Norman Myers","British ecologist, 1988.","p"],
  ["Ecological pyramid","Charles Elton","1927 — also called the Eltonian pyramid.",""],
  ["Ten per cent law of energy transfer","Raymond Lindeman","1942.","p"],
  ["Ecological niche","Joseph Grinnell","American biologist, 1917.",""],
  ["Gaia hypothesis","James Lovelock","The Earth behaves like one self-regulating system.",""]
];
const E1I = [
  ["Lichen (an alga and a fungus living together)","Mutualism","Both partners gain.","p"],
  ["Bees visiting flowers for nectar","Mutualism","Bees get food; flowers get pollinated.",""],
  ["Rhizobium bacteria in pea root nodules","Mutualism","",""],
  ["An orchid growing on a mango tree","Commensalism","The orchid gains a place in the light; the tree is unaffected.","p"],
  ["Barnacles riding on a whale","Commensalism","",""],
  ["Cuscuta (amarbel) on a host plant","Parasitism","Cuscuta has no leaves and sucks food from its host.","p"],
  ["A tiger hunting a deer","Predation","",""],
  ["Penicillium mould stopping the growth of bacteria","Amensalism","One is harmed, the other gains nothing.",""],
  ["Two species fighting for the same food","Competition","Both lose.",""]
];

const E2R = [
  ["grass","Producer (first trophic level)","Green plants make their own food — they are autotrophs.","p"],
  ["phytoplankton in a pond","Producer (first trophic level)","",""],
  ["a grasshopper eating grass","Primary consumer (herbivore)","","p"],
  ["a deer","Primary consumer (herbivore)","",""],
  ["a frog that eats grasshoppers","Secondary consumer","",""],
  ["a snake that eats frogs","Tertiary consumer","",""],
  ["an eagle at the end of the chain","Top (apex) consumer","",""],
  ["bacteria and fungi","Decomposers","They break dead matter into simple nutrients.","p"],
  ["an earthworm feeding on dead leaves","Detritivore","",""],
  ["a vulture eating a dead animal","Scavenger","",""]
];
const E2P = [
  ["Pyramid of energy (any ecosystem)","Upright — it can never be inverted","Energy is lost at every step, so it always narrows upward.","p"],
  ["Pyramid of numbers in a grassland","Upright","Lots of grass, fewer grasshoppers, fewer frogs.",""],
  ["Pyramid of biomass in a sea or pond","Inverted","A small mass of fast-growing phytoplankton feeds a larger mass of zooplankton and fish.","p"],
  ["Pyramid of numbers in a parasitic food chain","Inverted","One host carries many parasites.",""],
  ["Pyramid of numbers for a tree, its insects and birds","Spindle-shaped","One tree, many insects, fewer birds.",""]
];

const E3N = [
  ["Nitrogen fixation in the root nodules of legumes","Rhizobium","Lives with peas, beans and gram.","p"],
  ["Nitrogen fixation by free-living bacteria in soil","Azotobacter","",""],
  ["Nitrogen fixation in paddy fields","Cyanobacteria (Anabaena, Nostoc)","Anabaena also lives inside the water fern Azolla.","p"],
  ["Nitrogen fixation in the roots of alder (a non-legume)","Frankia","",""],
  ["Changing ammonia into nitrite","Nitrosomonas","First step of nitrification.",""],
  ["Changing nitrite into nitrate","Nitrobacter","Second step of nitrification.",""],
  ["Returning nitrate to the air as nitrogen gas (denitrification)","Pseudomonas","",""]
];
const E3G = [
  ["Prairies","North America","Temperate grassland of the USA and Canada.","p"],
  ["Pampas","Argentina","","p"],
  ["Steppes","Central Asia and Eastern Europe","","p"],
  ["Veld","South Africa","","p"],
  ["Downs","Australia","","p"],
  ["Canterbury","New Zealand","",""],
  ["Llanos","Venezuela and Colombia","Tropical grassland of the Orinoco basin.","p"],
  ["Campos","Brazil","Tropical grassland.",""],
  ["Puszta","Hungary","",""],
  ["Savanna","East and Central Africa","Tropical grassland with scattered trees.","p"]
];

LESSONS.push(
{id:"E1", heat:2, title:"Ecology: key terms and who coined them", hi:"पारिस्थितिकी: मुख्य शब्द और उनके जनक", blocks:[
  {k:"hot", h:"SSC asks the <b>meaning of ecological terms</b> (niche, ecotone, biome, ecosystem), <b>who coined</b> them (Haeckel — ecology, Tansley — ecosystem) and the <b>type of interaction</b> in an example (lichen = mutualism, Cuscuta = parasitism)."},
  {k:"story", h:"<p>In 1866 the German biologist <b>Ernst Haeckel</b> gave a name to the study of living things and their homes: <b>ecology</b>, from the Greek <i>oikos</i>, house. In 1935 <b>A. G. Tansley</b> joined the living and the non-living into one working unit and called it the <b>ecosystem</b>. Inside it, every species has an address — its <b>habitat</b> — and a job — its <b>niche</b>.</p><p>Living things also deal with each other. In a <b>lichen</b>, an alga and a fungus both gain (<b>mutualism</b>). An orchid sits on a mango tree without harming it (<b>commensalism</b>). <b>Cuscuta</b> sucks food from its host (<b>parasitism</b>). Where two ecosystems meet, as in a mangrove, we get an <b>ecotone</b>, often richer in species — the <b>edge effect</b>.</p>", key:"Ecology — Haeckel 1866; ecosystem — Tansley 1935; habitat = address, niche = job; lichen = mutualism; Cuscuta = parasitism."},
  {k:"table", title:"Ecological terms", head:["Term","Meaning","Note"], rows: E1T.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Who coined the term", head:["Term / idea","Given by","Note"], rows: E1C.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"How species interact", head:["Example","Interaction","Note"], rows: E1I.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Levels of organisation (small to large)", rows:[
    ["1","Organism"],["2","Population — one species"],["3","Community — many species"],["4","Ecosystem — community + non-living surroundings"],["5","Biome — a large climate region"],["6","Biosphere — all life on Earth"]
  ]},
  {k:"trick", h:"Levels in order — <b>“Old People Create Every Big Song”</b>: <b>O</b>rganism, <b>P</b>opulation, <b>C</b>ommunity, <b>E</b>cosystem, <b>B</b>iome, <b>S</b>phere (biosphere). Interactions by signs: <b>++ mutualism, +0 commensalism, +− parasitism/predation, −0 amensalism, −− competition</b>."},
  {k:"trap", h:"<b>Habitat ≠ niche</b>: habitat is where it lives, niche is what it does. <b>Ecosystem</b> was coined by <b>Tansley</b>, not Haeckel (Haeckel coined <b>ecology</b>). <b>Biosphere</b> is from <b>Eduard Suess</b>, a geologist."}
], sum:["Ecology was coined by Ernst Haeckel (1866); ecosystem by A. G. Tansley (1935).","Habitat is where a species lives; niche is the role it plays.","An ecotone is a transition zone between two ecosystems; it often shows the edge effect.","Lichen and Rhizobium-legume are mutualism; orchid on a tree is commensalism; Cuscuta is parasitism.","Biodiversity was coined by Walter Rosen (1985); biodiversity hotspot by Norman Myers (1988)."]},

{id:"E2", heat:3, title:"Ecosystems, food chains and pyramids", hi:"पारितंत्र, खाद्य श्रृंखला और पिरामिड", blocks:[
  {k:"hot", h:"Asked every year: the <b>10% law</b> (Lindeman), <b>producers vs consumers vs decomposers</b>, which <b>pyramid is always upright</b> (energy) and which can be <b>inverted</b> (biomass in the sea, numbers in a parasitic chain)."},
  {k:"story", h:"<p>All energy in an ecosystem starts with the <b>Sun</b>. Green plants — the <b>producers</b> — catch it in photosynthesis. A grasshopper eats the grass (<b>primary consumer</b>), a frog eats the grasshopper (<b>secondary consumer</b>), a snake eats the frog, and an eagle eats the snake. Each step is a <b>trophic level</b>. When anything dies, <b>decomposers</b> — bacteria and fungi — return its nutrients to the soil.</p><p>At each step only about <b>10%</b> of the energy passes on; the rest is lost as heat. This is <b>Lindeman's ten per cent law</b> (1942). So food chains are short (usually 4–5 links) and the <b>pyramid of energy is always upright</b>. Energy flows <b>one way</b>; nutrients go round in <b>cycles</b>. Many food chains linked together make a <b>food web</b>.</p>", key:"Sun → producer → herbivore → carnivore; only 10% passes on (Lindeman); energy flows one way, nutrients cycle; pyramid of energy is always upright."},
  {k:"table", title:"Who plays which role", head:["Organism","Role","Note"], rows: E2R.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Shapes of ecological pyramids", head:["Pyramid","Shape","Why"], rows: E2P.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Food chain facts", rows:[
    ["Grazing food chain","Starts with green plants: grass → grasshopper → frog → snake → eagle"],
    ["Detritus food chain","Starts with dead matter: dead leaves → earthworm → bird"],
    ["Energy flow","One way (unidirectional) — Sun → producers → consumers"],
    ["Ten per cent law","About 10% of energy passes to the next level (Lindeman, 1942)"],
    ["Most productive ecosystems","Tropical rainforests on land; estuaries and coral reefs in water"],
    ["Gross vs net primary productivity","NPP = GPP minus what plants use in respiration"],
    ["Standing crop","The living mass present at a trophic level at one time"]
  ]},
  {k:"trick", h:"<b>“Energy Never turns upside down”</b> — the pyramid of <b>E</b>nergy is never inverted. <b>“Sea Biomass Stands on its head”</b> — the biomass pyramid in the sea is inverted."},
  {k:"trap", h:"Decomposers are <b>not</b> a trophic level in the pyramid; they work at every level. A <b>tree</b> pyramid of numbers is <b>spindle-shaped</b> (one tree, many insects), and a <b>parasitic</b> one is <b>inverted</b>. Energy is <b>not</b> recycled — only nutrients are."}
], sum:["Producers (green plants) are the first trophic level; herbivores are primary consumers.","Bacteria and fungi are decomposers; earthworms are detritivores.","Only about 10% of energy passes from one level to the next (Lindeman's law, 1942).","The pyramid of energy is always upright; biomass in the sea and numbers in a parasitic chain can be inverted.","Energy flows one way; nutrients move in cycles."]},

{id:"E3", heat:2, title:"Cycles of matter and the world's biomes", hi:"जैव-भू-रासायनिक चक्र और विश्व के बायोम", blocks:[
  {k:"hot", h:"Favourites: <b>which bacterium does what</b> in the nitrogen cycle (Rhizobium, Nitrosomonas, Nitrobacter, Pseudomonas), the <b>composition of air</b>, and the <b>names of grasslands</b> (Pampas — Argentina, Veld — South Africa, Downs — Australia)."},
  {k:"story", h:"<p>Matter on Earth is never used up — it goes round in <b>biogeochemical cycles</b>. Air is <b>78% nitrogen</b>, but plants cannot use it directly. <b>Rhizobium</b> in the root nodules of peas and beans, <b>Azotobacter</b> in soil and <b>cyanobacteria</b> in paddy fields fix it into ammonia. <b>Nitrosomonas</b> turns ammonia into nitrite, <b>Nitrobacter</b> turns nitrite into nitrate, and <b>Pseudomonas</b> sends nitrogen back to the air. The <b>phosphorus cycle</b> has no gas stage — it is a <b>sedimentary</b> cycle.</p><p>Climate decides the great <b>biomes</b>. The <b>tropical rainforest</b> holds the most species; the <b>taiga</b> (coniferous forest) is the largest land biome; the <b>tundra</b> has frozen ground (permafrost) and mosses. Grasslands get local names: <b>Prairies</b> (North America), <b>Pampas</b> (Argentina), <b>Steppes</b> (Eurasia), <b>Veld</b> (South Africa), <b>Downs</b> (Australia).</p>", key:"N-fixers: Rhizobium, Azotobacter, cyanobacteria; NH3 → NO2 (Nitrosomonas) → NO3 (Nitrobacter); Pseudomonas denitrifies; phosphorus cycle has no gas phase."},
  {k:"table", title:"Nitrogen cycle — who does what", head:["Process","Done by","Note"], rows: E3N.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Grasslands of the world", head:["Grassland","Region","Note"], rows: E3G.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Air and the cycles", rows:[
    ["Nitrogen in air","About 78%"],
    ["Oxygen in air","About 21%"],
    ["Argon in air","About 0.93% — the most common noble gas"],
    ["Carbon dioxide in air","About 0.04% (over 420 ppm in the 2020s)"],
    ["Gaseous cycles","Carbon, nitrogen, oxygen, water"],
    ["Sedimentary cycles","Phosphorus, sulphur — the reservoir is in rocks"],
    ["Largest active carbon store","The oceans"],
    ["Lightning","Also fixes some nitrogen into nitrogen oxides"]
  ]},
  {k:"facts", title:"Biomes in one line each", rows:[
    ["Tropical rainforest","Most biodiversity; Amazon and Congo basins"],
    ["Savanna","Tropical grassland with scattered trees"],
    ["Hot desert","Under 25 cm of rain a year; Sahara, Thar"],
    ["Temperate grassland","Prairies, Pampas, Steppes, Veld, Downs"],
    ["Taiga (boreal forest)","Largest land biome — conifers such as pine and spruce"],
    ["Tundra","Permafrost, mosses and lichens; no trees"]
  ]},
  {k:"trick", h:"Nitrification in alphabetical order: <b>Nitroso</b> before <b>Nitro-bacter</b> — <b>“S before B”</b>: Nitro<b>s</b>omonas makes nitrite, Nitro<b>b</b>acter makes nitrate. Grasslands: <b>“Pampas Argentina, Veld Africa, Downs Down-under”</b>."},
  {k:"trap", h:"<b>Llanos</b> and <b>Campos</b> are <b>tropical</b> grasslands (South America), while <b>Pampas</b> is temperate. The <b>phosphorus</b> cycle has <b>no atmospheric</b> phase. <b>Denitrification</b> (Pseudomonas) loses nitrogen from soil — it is not fixation."}
], sum:["Air is about 78% nitrogen, 21% oxygen, 0.93% argon and 0.04% carbon dioxide.","Rhizobium (legumes), Azotobacter (soil) and cyanobacteria (paddy) fix nitrogen.","Nitrosomonas makes nitrite, Nitrobacter makes nitrate, Pseudomonas denitrifies.","The phosphorus cycle is sedimentary — it has no gas phase.","Prairies — North America, Pampas — Argentina, Steppes — Eurasia, Veld — South Africa, Downs — Australia."]}
);

pairQs("E1", E1T, { q: t => `In ecology, what does '${t}' mean?`, rq: a => `Which term means: ${lcf(a)}?` });
pairQs("E1", E1C, { q: t => `Who gave the term or idea '${t}'?`, rq: a => `Which term or idea do we owe to ${a}?` });
pairQs("E1", E1I, { q: t => `${t} — which type of interaction is this?`, rq: a => `Which of these is an example of ${lcf(a)}?`, extra: ["Neutralism"] });
pairQs("E2", E2R, { q: t => `In a food chain, ${t} acts as:` });
pairQs("E2", E2P, { q: t => `The shape of the ${lcf(t)} is:` });
pairQs("E3", E3N, { q: t => `${t} is carried out by:`, rq: a => `What does ${a} do in the nitrogen cycle?` });
pairQs("E3", E3G, { q: t => `The grassland called '${t}' is found in:`, rq: a => `Which grassland is found in ${a}?` });

QB.push(
["E1","Who is known as the 'Father of Indian Ecology'?",["Ramdeo Misra","Salim Ali","M. S. Swaminathan","Birbal Sahni"],"He set up ecology research at Banaras Hindu University.","p"],
["E1","The word 'ecology' comes from the Greek word 'oikos', which means:",["House","Life","Earth","Study"],"Oikos = house; logos = study.",""],
["E1","Which of these is the basic functional unit of ecology?",["Ecosystem","Population","Species","Biome"],"Living and non-living parts work together in it.","p"],
["E1","Pioneer species that first grow on bare rock are usually:",["Lichens","Ferns","Grasses","Shrubs"],"They start primary succession.","p"],
["E1","The final stable community in ecological succession is called the:",["Climax community","Pioneer community","Seral community","Edge community"],"Succession runs from pioneer species through seral stages to a stable climax community that stays in balance with the climate.",""],
["E1","The non-living (abiotic) part of an ecosystem includes:",["Sunlight, water and soil","Bacteria and fungi","Plants and animals","Producers and consumers"],"Abiotic means non-living: sunlight, water, soil, air and temperature. Plants, animals and microbes are biotic.",""],
["E2","The 'ten per cent law' of energy transfer was given by:",["Raymond Lindeman","Charles Elton","A. G. Tansley","Eugene Odum"],"In 1942.","p"],
["E2","The ultimate source of energy for almost every ecosystem is:",["The Sun","Green plants","Decomposers","Soil minerals"],"Producers trap solar energy by photosynthesis, so almost every food chain begins with the Sun.","p"],
["E2","Organisms that make their own food are called:",["Autotrophs","Heterotrophs","Saprophytes","Detritivores"],"Green plants are autotrophs.","p"],
["E2","Many food chains joined together form a:",["Food web","Food pyramid","Trophic level","Biome"],"In nature food chains interlink, because most animals eat more than one thing, and together they form a food web.","p"],
["E2","The flow of energy in an ecosystem is:",["One-way (unidirectional)","Two-way","Cyclic","Random"],"Nutrients cycle; energy does not.","p"],
["E2","If plants hold 10,000 J of energy, how much reaches a secondary consumer by the 10% law?",["100 J","1,000 J","10 J","500 J"],"10,000 → 1,000 (herbivore) → 100 (carnivore).","p"],
["E2","Which ecosystem on land has the highest primary productivity?",["Tropical rainforest","Desert","Tundra","Temperate grassland"],"Year-round warmth, light and rain make tropical rainforests the most productive land ecosystems.",""],
["E3","Which bacterium lives in the root nodules of leguminous plants and fixes nitrogen?",["Rhizobium","Nitrosomonas","Pseudomonas","Lactobacillus"],"Rhizobium lives in the root nodules of legumes such as pea and gram and fixes atmospheric nitrogen; Nitrosomonas nitrifies.",""],
["E3","Which biogeochemical cycle has no gaseous phase?",["Phosphorus cycle","Nitrogen cycle","Carbon cycle","Water cycle"],"It is a sedimentary cycle.","p"],
["E3","Which is the most abundant gas in the Earth's atmosphere?",["Nitrogen","Oxygen","Argon","Carbon dioxide"],"About 78%.","p"],
["E3","Which is the largest land biome on Earth?",["Taiga (boreal coniferous forest)","Tropical rainforest","Savanna","Tundra"],"The taiga, or boreal conifer forest across Russia, Scandinavia and Canada, is the largest land biome.",""],
["E3","Permanently frozen ground found in the tundra is called:",["Permafrost","Taiga","Loess","Laterite"],"Permafrost is ground that stays frozen for two or more years, typical of the tundra.","p"],
["E3","The water fern used as a biofertiliser in paddy fields, because it holds the cyanobacterium Anabaena, is:",["Azolla","Salvinia","Marsilea","Pistia"],"Azolla, a water fern, carries the nitrogen-fixing cyanobacterium Anabaena, so it enriches paddy fields.",""]
);

LASTMOMENT.push(
{t:"Who coined it", era:["en"], rows:[["Ecology","Haeckel 1866"],["Ecosystem","Tansley 1935"],["Biosphere","Suess 1875"],["Biodiversity","W. G. Rosen 1985"],["Hotspot","Norman Myers 1988"],["10% law","Lindeman 1942"],["Ecological pyramid","Charles Elton"],["Niche","Grinnell 1917"]]},
{t:"Food chain and pyramids", era:["en"], rows:[["First trophic level","Producers"],["Herbivores","Primary consumers"],["Energy pyramid","Always upright"],["Sea biomass pyramid","Inverted"],["Parasitic numbers","Inverted"],["Tree numbers","Spindle"],["Energy flow","One way"],["Passes on","About 10%"]]},
{t:"Grasslands", era:["en"], rows:[["Prairies","North America"],["Pampas","Argentina"],["Steppes","Eurasia"],["Veld","South Africa"],["Downs","Australia"],["Llanos","Venezuela"],["Campos","Brazil"],["Canterbury","New Zealand"]]}
);
TILES.push(["1866","'Ecology' coined by Haeckel","en"],["1935","'Ecosystem' coined by Tansley","en"],["10%","Energy passed on","en"],["78%","Nitrogen in air","en"]);

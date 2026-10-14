/* Part 2 · Y3 interior of the Earth and rocks; Y4 plate tectonics, earthquakes and volcanoes; Y5 landforms. */
const Y3 = [
  ["Mohorovičić (Moho)","Crust and mantle","About 30–35 km under continents; found by Andrija Mohorovičić (1909).","p",1],
  ["Conrad","Upper and lower crust","Between the granite-like upper crust (SIAL) and basalt-like lower crust (SIMA).","p"],
  ["Repetti","Upper and lower mantle","About 700 km deep.",""],
  ["Gutenberg","Mantle and outer core","About 2,900 km deep.","p"],
  ["Lehmann","Outer core and inner core","About 5,150 km deep; found by Inge Lehmann (1936).","p"]
];
const Y3L = [
  ["crust","The thinnest layer — about 5 km under oceans, 30–70 km under continents","Under 1% of the Earth's volume.","p"],
  ["mantle","The thickest layer, about 84% of the Earth's volume","From the Moho down to 2,900 km.","p"],
  ["asthenosphere","A soft, partly molten zone of the upper mantle — the source of magma","Plates slide on it.","p"],
  ["lithosphere","The rigid crust plus the topmost mantle, broken into plates","Up to about 100 km thick.","p"],
  ["outer core","The liquid layer whose moving iron makes the Earth's magnetic field","S-waves cannot pass through it.","p"],
  ["inner core","The solid centre of iron and nickel (NIFE), the hottest part","Solid because of the huge pressure.","p"]
];
const Y3E = [
  ["Most abundant element in the Earth's crust","Oxygen","About 46.6% by weight.","p"],
  ["Second most abundant element in the crust","Silicon","About 27.7%.","p"],
  ["Most abundant metal in the crust","Aluminium","About 8.1%.","p"],
  ["Most abundant element of the whole Earth (by mass)","Iron","Most of it is in the core.","p"],
  ["Main elements of the core","Nickel and iron","Hence the name NIFE.","p"]
];
const Y3R = [
  ["Granite","Igneous (intrusive)","Cools slowly deep underground — big crystals.","p"],
  ["Gabbro","Igneous (intrusive)","",""],
  ["Basalt","Igneous (extrusive)","Cools fast from lava — the Deccan Traps are basalt.","p"],
  ["Pumice","Igneous (extrusive)","So full of gas holes that it floats on water.",""],
  ["Sandstone","Sedimentary","Made of cemented sand grains.","p"],
  ["Limestone","Sedimentary","Made from shells and calcium carbonate.","p"],
  ["Shale","Sedimentary","Made of hardened clay and mud.",""],
  ["Coal","Sedimentary","Formed from buried plants.","p"],
  ["Conglomerate","Sedimentary","Rounded pebbles cemented together.",""],
  ["Marble","Metamorphic","Changed from limestone.","p"],
  ["Slate","Metamorphic","Changed from shale.","p"],
  ["Quartzite","Metamorphic","Changed from sandstone.","p"],
  ["Gneiss","Metamorphic","Changed from granite.",""],
  ["Schist","Metamorphic","Flaky, shiny layers.",""]
];
const Y3M = [
  ["limestone","Marble","The Taj Mahal is made of Makrana marble.","p"],
  ["sandstone","Quartzite","","p"],
  ["shale","Slate","","p"],
  ["granite","Gneiss","",""]
];
const Y4 = [
  ["Continental drift (1912)","Alfred Wegener","All continents were once one land, Pangaea, ringed by the ocean Panthalassa.","p"],
  ["Sea-floor spreading (1960s)","Harry Hess","New ocean floor forms at mid-ocean ridges.","p"],
  ["Convection currents in the mantle (1930s)","Arthur Holmes","Heat in the mantle moves the plates.",""],
  ["The Richter scale (1935)","Charles F. Richter","Measures the magnitude (energy) of an earthquake.","p"],
  ["The Mercalli scale","Giuseppe Mercalli","Measures intensity — the damage seen — from I to XII.","p"],
  ["Elastic rebound theory of earthquakes","H. F. Reid","After the 1906 San Francisco earthquake.",""]
];
const Y4B = [
  ["divergent (plates move apart, under the sea)","The Mid-Atlantic Ridge","New crust forms; Iceland sits on it.","p"],
  ["divergent (plates move apart, on land)","The East African Rift Valley","Africa is slowly splitting.",""],
  ["convergent (ocean plate under a continent)","The Andes","Fold mountains with volcanoes.","p"],
  ["convergent (continent meets continent)","The Himalayas","The Indian plate pushing into the Eurasian plate.","p"],
  ["convergent (ocean plate under ocean plate)","The Mariana Trench","The deepest place on Earth, in the Pacific.","p"],
  ["transform (plates slide past each other)","The San Andreas Fault","In California, USA; crust is neither made nor destroyed.","p"]
];
const Y4W = [
  ["P-waves (primary)","Fastest waves; pass through solids, liquids and gases","Arrive first; push-pull (longitudinal).","p"],
  ["S-waves (secondary)","Pass only through solids; arrive second","Their shadow zone shows the outer core is liquid.","p"],
  ["L-waves (surface waves)","Slowest waves but cause the most damage","Travel along the surface.","p"],
  ["the focus (hypocentre)","The point inside the Earth where the quake starts","",""],
  ["the epicentre","The point on the surface right above the focus","Damage is greatest here.","p"],
  ["a seismograph","An instrument that records earthquake waves","The record is a seismogram.","p"],
  ["a tsunami","Giant sea waves set off by an undersea earthquake","Japanese for 'harbour wave'.","p"]
];
const Y4V = [
  ["Mauna Loa","USA (Hawaii)","The largest active volcano on Earth — a shield volcano.","p"],
  ["Mount St Helens","USA (Washington)","Erupted in 1980.",""],
  ["Vesuvius","Italy","Buried Pompeii in 79 CE.","p"],
  ["Etna","Italy","On Sicily; one of the most active in the world.","p"],
  ["Stromboli","Italy","'Lighthouse of the Mediterranean'.","p"],
  ["Fuji","Japan","Japan's highest mountain — a cone (composite) volcano.","p"],
  ["Krakatoa","Indonesia","Huge eruption in 1883.","p"],
  ["Tambora","Indonesia","The 1815 eruption caused the 'year without a summer'.",""],
  ["Pinatubo","Philippines","Big eruption in 1991.",""],
  ["Kilimanjaro","Tanzania","Africa's highest peak; a dormant volcano.","p"],
  ["Cotopaxi","Ecuador","",""],
  ["Popocatépetl","Mexico","",""],
  ["Eyjafjallajökull","Iceland","Its ash cloud stopped flights over Europe in 2010.",""],
  ["Barren Island","India (Andaman Sea)","India's only active volcano.","p"]
];
const Y5 = [
  ["A V-shaped valley","River","Cut by a young river in the mountains.","p"],
  ["A gorge or canyon","River","A deep, narrow valley.","p"],
  ["A waterfall and plunge pool","River","",""],
  ["Potholes","River","Holes drilled in the river bed by swirling pebbles.",""],
  ["A meander","River","A loop in a river crossing a plain.","p"],
  ["An ox-bow lake","River","A cut-off meander.","p"],
  ["A delta","River","Made where a river drops silt at its mouth.","p"],
  ["A flood plain and levees","River","",""],
  ["A U-shaped valley","Glacier","","p"],
  ["A cirque (corrie)","Glacier","An armchair-shaped hollow at a glacier's head.","p"],
  ["A moraine","Glacier","Rock debris dropped by ice.","p"],
  ["A drumlin","Glacier","An egg-shaped hill of glacial clay.",""],
  ["An esker","Glacier","A long winding ridge of sand and gravel.",""],
  ["A fjord","Glacier","A glacial valley drowned by the sea — Norway.","p"],
  ["A hanging valley","Glacier","",""],
  ["A barchan","Wind","A crescent-shaped sand dune.","p"],
  ["A mushroom rock","Wind","Sand blasts the base more than the top.","p"],
  ["A yardang","Wind","",""],
  ["Loess","Wind","Fine wind-blown dust deposits — the Loess Plateau of China.","p"],
  ["An inselberg","Wind","An isolated rock hill in a desert — like Uluru.",""],
  ["A sea cliff","Sea waves","",""],
  ["A sea arch","Sea waves","","p"],
  ["A sea stack","Sea waves","A pillar left when an arch collapses.","p"],
  ["A spit","Sea waves","A sand ridge joined to the land at one end.",""],
  ["A stalactite","Underground water","Hangs from the roof of a limestone cave.","p"],
  ["A sinkhole","Underground water","",""]
];
const Y5X = [
  ["The Grand Canyon (USA)","A canyon","Cut by the Colorado river.","p"],
  ["The Sundarbans (Ganga–Brahmaputra)","A delta","The world's largest delta.","p"],
  ["Angel Falls (Venezuela)","A waterfall","The highest waterfall in the world.","p"],
  ["Sognefjord (Norway)","A fjord","",""],
  ["The Twelve Apostles (Australia)","Sea stacks","",""],
  ["Majuli (Assam)","A river island","On the Brahmaputra; India's largest river island.","p"],
  ["Siachen","A glacier","In the Karakoram; India's longest glacier.","p"],
  ["Uluru (Ayers Rock, Australia)","An inselberg","",""]
];

LESSONS.push(
{id:"Y3", heat:3, title:"Inside the Earth, and its rocks", hi:"पृथ्वी की आंतरिक संरचना और चट्टानें", blocks:[
  {k:"hot", h:"Asked every year: <b>which discontinuity lies between which layers</b> (Moho, Gutenberg, Lehmann), <b>SIAL–SIMA–NIFE</b>, the <b>most abundant elements</b> of the crust, and <b>rock types with examples</b> (marble from limestone, slate from shale)."},
  {k:"story", h:"<p>No one has dug deeper than about 12 km, so we know the Earth's inside from <b>earthquake waves</b>. They speed up, slow down and bend at certain depths — these boundaries are called <b>discontinuities</b>. The <b>crust</b> is the thin outer skin; below the <b>Moho</b> is the <b>mantle</b>, the biggest layer; below the <b>Gutenberg</b> line (2,900 km) is the <b>liquid outer core</b>; below the <b>Lehmann</b> line (5,150 km) is the <b>solid inner core</b>, reaching the centre at about <b>6,371 km</b>.</p><p>Rocks come in three families. <b>Igneous</b> rocks (granite, basalt) form when magma cools — they are the 'primary' rocks. <b>Sedimentary</b> rocks (sandstone, limestone, coal) form in layers and are the only ones with fossils. <b>Metamorphic</b> rocks (marble, slate) are older rocks changed by heat and pressure.</p>", key:"Moho = crust/mantle · Gutenberg = mantle/core · Lehmann = outer/inner core. Igneous = fire, sedimentary = layers, metamorphic = changed."},
  {k:"facts", title:"Layers in numbers", rows:[
    ["Radius of the Earth","About 6,371 km"],
    ["Crust","SIAL (silica + aluminium) on continents; SIMA (silica + magnesium) under oceans"],
    ["Core","NIFE (nickel + ferrum/iron)"],
    ["Temperature with depth","Rises about 1 °C for every 32 m near the surface"],
    ["S-wave shadow zone","Beyond about 105° from the epicentre — proof that the outer core is liquid"],
    ["Crust elements","O 46.6% · Si 27.7% · Al 8.1% · Fe 5.0% · Ca 3.6%"]
  ]},
  {k:"table", title:"Discontinuities", head:["Discontinuity","Lies between","Note"], rows: Y3.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Layers of the Earth", head:["Layer","What it is","Note"], rows: Y3L.map(r => [r[0][0].toUpperCase() + r[0].slice(1), r[1], r[2]])},
  {k:"table", title:"Element records", head:["Record","Element","Note"], rows: Y3E.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Rocks and their type", head:["Rock","Type","Note"], rows: Y3R.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"What heat and pressure make", head:["Parent rock","Metamorphic rock","Note"], rows: Y3M.map(r => [r[0][0].toUpperCase() + r[0].slice(1), r[1], r[2]])},
  {k:"trick", h:"Going down: <b>“My Great Lunch”</b> — <b>M</b>oho (≈35 km) → <b>G</b>utenberg (2,900 km) → <b>L</b>ehmann (5,150 km). Crust elements: <b>“Only Silly Asses In College”</b> — O, Si, Al, Fe, Ca."},
  {k:"trap", h:"<b>Gutenberg</b> is mantle/core, not crust/mantle (that is <b>Moho</b>). The <b>outer core is liquid</b> but the <b>inner core is solid</b>. Most abundant <b>element</b> in the crust is oxygen; most abundant <b>metal</b> is aluminium; most abundant in the <b>whole Earth</b> is iron."}
], sum:["Crust → mantle → outer core (liquid) → inner core (solid); radius about 6,371 km.","Moho: crust/mantle; Gutenberg (2,900 km): mantle/core; Lehmann (5,150 km): outer/inner core; Conrad: inside the crust.","SIAL continents, SIMA ocean floor, NIFE core; crust is mostly oxygen and silicon, the most common metal aluminium.","Igneous: granite, basalt; sedimentary: sandstone, limestone, coal (fossils); metamorphic: marble, slate, quartzite.","Limestone → marble, sandstone → quartzite, shale → slate, granite → gneiss."]},

{id:"Y4", heat:3, title:"Plate tectonics, earthquakes and volcanoes", hi:"प्लेट विवर्तनिकी, भूकंप और ज्वालामुखी", blocks:[
  {k:"hot", h:"Common questions: <b>Wegener and continental drift</b>, <b>Pangaea</b>, the <b>Pacific Ring of Fire</b>, <b>P, S and L waves</b>, <b>Richter vs Mercalli</b>, <b>epicentre</b>, and famous <b>volcanoes and their countries</b> (Barren Island is India's only active one)."},
  {k:"story", h:"<p>In <b>1912 Alfred Wegener</b> said the continents were once joined in one super-continent, <b>Pangaea</b>, which split into <b>Laurasia</b> (north) and <b>Gondwanaland</b> (south). In the 1960s <b>sea-floor spreading</b> and then <b>plate tectonics</b> explained how: the lithosphere is broken into about seven big <b>plates</b> (the largest is the <b>Pacific plate</b>) that float on the soft asthenosphere. Where plates <b>pull apart</b> new crust forms; where they <b>collide</b> we get trenches, volcanoes and fold mountains like the <b>Himalayas</b>; where they <b>slide past</b> we get faults like <b>San Andreas</b>.</p><p>Most <b>earthquakes and volcanoes</b> lie along plate edges, above all round the Pacific — the <b>Ring of Fire</b>, with about three-quarters of the world's active volcanoes. A quake starts at the <b>focus</b> underground; the spot above it is the <b>epicentre</b>. Its strength is given on the <b>Richter scale</b>, where each step means about <b>10 times</b> more shaking and about 32 times more energy.</p>", key:"Wegener 1912 → Pangaea; plates meet at the Ring of Fire; P fastest, S solids only, L most damaging; Richter = magnitude, Mercalli = intensity."},
  {k:"facts", title:"Plates and volcano types", rows:[
    ["Major plates","Pacific (largest), North American, South American, Eurasian, African, Indo-Australian, Antarctic"],
    ["Indian plate","Moves north about 5 cm a year, still raising the Himalayas"],
    ["Active / dormant / extinct","Erupting now or recently / quiet but may erupt / not expected to erupt again"],
    ["Shield volcano","Gentle slopes of runny basalt lava — Mauna Loa (Hawaii)"],
    ["Composite (strato) volcano","Steep cone of lava and ash layers — Fuji, Vesuvius"],
    ["Caldera","A huge crater left when a volcano collapses"],
    ["Fissure eruption","Lava pours out of long cracks — the Deccan Traps of India"],
    ["India's volcanoes","Barren Island (active) and Narcondam (dormant), both in the Andaman Sea"]
  ]},
  {k:"table", title:"Theories, scales and who gave them", head:["Idea","Given by","Note"], rows: Y4.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Plate boundaries and examples", head:["Boundary","Example","Note"], rows: Y4B.map(r => [r[0][0].toUpperCase() + r[0].slice(1), r[1], r[2]])},
  {k:"table", title:"Earthquake words", head:["Term","Meaning","Note"], rows: Y4W.map(r => [r[0][0].toUpperCase() + r[0].slice(1), r[1], r[2]])},
  {k:"table", title:"Famous volcanoes", head:["Volcano","Country","Note"], rows: Y4V.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Waves in order of arrival: <b>P</b> = <b>P</b>rimary = <b>P</b>ush, first; <b>S</b> = <b>S</b>econdary = <b>S</b>olids only; <b>L</b> = <b>L</b>ast and <b>L</b>argest damage. Three Italian volcanoes: <b>“VES”</b> — Vesuvius, Etna, Stromboli."},
  {k:"trap", h:"The <b>Ring of Fire</b> of volcanoes is the rim of the <b>Pacific</b> — do not mix it up with the 'ring of fire' of an <b>annular eclipse</b>. <b>Richter</b> = magnitude (energy); <b>Mercalli</b> = intensity (damage). <b>Kilimanjaro</b> is a volcano in Tanzania, not Kenya."}
], sum:["Wegener (1912): continental drift — Pangaea split into Laurasia and Gondwanaland.","Plates move apart (Mid-Atlantic Ridge), collide (Himalayas, Andes, Mariana Trench) or slide past (San Andreas).","The Pacific Ring of Fire has most of the world's volcanoes and earthquakes.","P-waves fastest and pass through liquids; S-waves only through solids; L-waves do most damage; Richter measures magnitude.","Vesuvius, Etna, Stromboli — Italy; Fuji — Japan; Krakatoa — Indonesia; Mauna Loa — Hawaii; Barren Island — India's only active volcano."]},

{id:"Y5", heat:2, title:"Landforms made by rivers, glaciers, wind and sea", hi:"स्थलरूप: नदी, हिमनद, पवन और समुद्र", blocks:[
  {k:"hot", h:"The usual question: <b>“Which agent makes this landform?”</b> — ox-bow lake and delta (river), U-shaped valley, cirque, moraine and fjord (glacier), barchan and mushroom rock (wind), sea stack and arch (waves), stalactite (underground water)."},
  {k:"story", h:"<p>Inside forces raise the land; outside forces wear it down. <b>Weathering</b> breaks rock in place; <b>erosion</b> carries it away; <b>deposition</b> drops it somewhere new. A <b>river</b> cuts a <b>V-shaped valley</b> and gorges in the mountains, swings in <b>meanders</b> across the plains — leaving <b>ox-bow lakes</b> — and builds a <b>delta</b> at its mouth. A <b>glacier</b> grinds a <b>U-shaped valley</b>, scoops out <b>cirques</b>, and dumps <b>moraines</b>; when the sea floods a glacial valley it becomes a <b>fjord</b>.</p><p>In deserts the <b>wind</b> builds crescent <b>barchans</b>, carves <b>mushroom rocks</b>, and carries fine dust far away as <b>loess</b>. On coasts, <b>waves</b> cut cliffs, caves, arches and <b>stacks</b>, and pile sand into beaches and <b>spits</b>. In limestone country (called <b>karst</b>, after a region in Slovenia) water dissolves rock to make caves with <b>stalactites</b> and <b>stalagmites</b>.</p>", key:"River: V-valley, meander, ox-bow, delta. Glacier: U-valley, cirque, moraine, fjord. Wind: barchan, mushroom rock, loess. Sea: cliff, arch, stack, spit."},
  {k:"table", title:"Landform → agent", head:["Landform","Made mainly by","Note"], rows: Y5.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Famous examples", head:["Example","What it is","Note"], rows: Y5X.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Stalac<b>T</b>ite hangs from the <b>T</b>op (it holds on '<b>tight</b>'); stalag<b>M</b>ite grows up from the ground — it <b>M</b>ight reach the top one day."},
  {k:"trap", h:"A <b>fjord</b> is made by a <b>glacier</b>, even though the sea now fills it. <b>Loess</b> is made by <b>wind</b>, not rivers. An <b>ox-bow lake</b> forms in a river's <b>old (plain) stage</b>, not in the mountains."}
], sum:["Weathering breaks rocks in place; erosion carries the pieces; deposition lays them down.","Rivers: V-shaped valleys, gorges, meanders, ox-bow lakes, flood plains, deltas.","Glaciers: U-shaped valleys, cirques, moraines, drumlins, eskers, fjords.","Wind: barchans, mushroom rocks, yardangs, loess; sea waves: cliffs, arches, stacks, spits.","Karst (limestone) country: caves, sinkholes, stalactites (from the top) and stalagmites (from the ground)."]}
);

pairQs("Y3", Y3, { q: t => `The ${t} discontinuity lies between the:`, rq: a => `Which discontinuity lies between the ${a.toLowerCase()}?` });
pairQs("Y3", Y3L, { q: t => `Which best describes the ${t}?` });
pairQs("Y3", Y3E, { q: t => `${t}:`, extra: ["Magnesium", "Calcium"] });
pairQs("Y3", Y3R, { q: t => `${t} is which kind of rock?` });
pairQs("Y3", Y3M, { q: t => `Under heat and pressure, ${t} changes into:`, rq: a => `${a} is formed from:`, extra: ["Schist", "Basalt"], pool: ["basalt", "coal"] });
pairQs("Y4", Y4, { q: t => `${t} — given by:`, rq: a => `What is ${a} known for?` });
pairQs("Y4", Y4B, { q: t => `An example of a ${t} boundary is:`, rq: a => `${a} is an example of which plate boundary?` });
pairQs("Y4", Y4W, { q: t => `Which describes ${t}?`, rq: a => `“${a}” — this is:` });
pairQs("Y4", Y4V, { q: t => `The volcano ${t} is in:`, rq: a => `Which volcano is in ${a}?` });
pairQs("Y5", Y5, { q: t => `${t} is made mainly by:`, extra: ["Volcanic activity"] });
pairQs("Y5", Y5X, { q: t => `${t} is famous as:`, rq: a => `Which of these is famous as ${a.toLowerCase()}?` });

QB.push(
["Y3","In the context of Earth's structure, which discontinuity separates the crust from the mantle?",["Moho","Repetti","Conrad","Gutenberg"],"The Mohorovičić (Moho) discontinuity.","p","","","SSC GD 2026 · 31 May 2026 (Shift 3)"],
["Y3","Which layer of the Earth is liquid?",["Outer core","Inner core","Mantle","Crust"],"Shown by S-waves, which cannot pass through it.","p"],
["Y3","The approximate radius of the Earth is:",["6,371 km","2,900 km","5,150 km","12,742 km"],"12,742 km is the diameter.","p"],
["Y3","Which kind of rock is called 'primary rock'?",["Igneous","Sedimentary","Metamorphic","Organic"],"All other rocks come from igneous rock first.","p"],
["Y3","Fossils are mostly found in which kind of rock?",["Sedimentary","Igneous","Metamorphic","Volcanic"],"Remains of plants and animals are trapped in the layers.","p"],
["Y3","The upper crust of the continents is called SIAL because it is rich in:",["Silica and aluminium","Silica and magnesium","Nickel and iron","Silver and aluminium"],"SIMA = silica + magnesium; NIFE = nickel + iron.","p"],
["Y4","Who put forward the theory of continental drift?",["Alfred Wegener","Harry Hess","Arthur Holmes","Charles Richter"],"In 1912.","p"],
["Y4","Which region is known as the 'Ring of Fire'?",["Pacific Ocean Rim","East African Rift","Mid Atlantic Ridge","Indian Ocean Floor"],"A horseshoe-shaped belt of volcanoes and earthquakes round the Pacific.","p","","","RRB NTPC (Graduate) CBT-I · 19 Mar 2026 (Shift 1)"],
["Y4","The single super-continent of the past was called:",["Pangaea","Panthalassa","Gondwanaland","Laurasia"],"Panthalassa was the ocean round it.","p"],
["Y4","Which is the largest tectonic plate?",["Pacific plate","Eurasian plate","African plate","North American plate"],"It is mostly ocean floor.","p"],
["Y4","India's only active volcano is on:",["Barren Island","Narcondam Island","Havelock Island","Great Nicobar"],"In the Andaman Sea.","p"],
["Y4","Which volcano is called the 'Lighthouse of the Mediterranean'?",["Stromboli","Etna","Vesuvius","Krakatoa"],"It erupts almost all the time, lighting up the sea at night.","p"],
["Y4","An increase of 1 on the Richter scale means the ground shaking is about:",["10 times greater","2 times greater","100 times greater","1,000 times greater"],"The scale is logarithmic; the energy rises about 32 times.","p"],
["Y4","The Deccan Traps were formed by which kind of eruption?",["Fissure eruption","Central (cone) eruption","Caldera collapse","Geyser"],"Basalt lava flowed out of long cracks.",""],
["Y5","Karst topography is formed by groundwater in which rock?",["Limestone","Granite","Basalt","Sandstone"],"Named after the Karst region of Slovenia.","p"],
["Y5","An ox-bow lake is formed by a:",["River","Glacier","Wind","Sea wave"],"From a cut-off meander.","p"],
["Y5","A deposit that grows upward from the floor of a limestone cave is a:",["Stalagmite","Stalactite","Pillar","Sinkhole"],"A stalactite hangs from the roof; when they meet they form a pillar.","p"],
["Y5","Fjords are typical of the coast of:",["Norway","India","Egypt","Brazil"],"Also Chile, New Zealand and Canada.","p"],
["Y5","Breaking of rocks in place, without being carried away, is called:",["Weathering","Erosion","Deposition","Transportation"],"Erosion carries the pieces away.","p"],
["Y5","A crescent-shaped sand dune is called a:",["Barchan","Seif","Drumlin","Esker"],"Its horns point down-wind; a seif is a long ridge dune.",""]
);

LASTMOMENT.push(
{t:"Inside the Earth", era:["pg"], rows:[["Moho","Crust / mantle"],["Conrad","Upper / lower crust"],["Repetti","Upper / lower mantle"],["Gutenberg","Mantle / core, 2,900 km"],["Lehmann","Outer / inner core, 5,150 km"],["Crust","SIAL, SIMA"],["Core","NIFE"],["Most in crust","Oxygen, then silicon"]]},
{t:"Rocks", era:["pg"], rows:[["Granite, basalt","Igneous"],["Sandstone, limestone, coal","Sedimentary"],["Marble, slate, quartzite","Metamorphic"],["Limestone →","Marble"],["Sandstone →","Quartzite"],["Shale →","Slate"],["Granite →","Gneiss"],["Fossils","Sedimentary"]]},
{t:"Quakes and volcanoes", era:["pg"], rows:[["Continental drift","Wegener, 1912"],["Fastest wave","P"],["Solids only","S"],["Most damage","L"],["Richter","Magnitude"],["Mercalli","Intensity"],["Ring of Fire","Pacific rim"],["India's active volcano","Barren Island"]]}
);
TILES.push(["6,371 km","Radius of the Earth","pg"],["2,900 km","Gutenberg discontinuity","pg"],["1912","Continental drift","pg"],["1935","Richter scale","pg"]);

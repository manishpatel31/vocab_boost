/* Part 3 · Y6 atmosphere and insolation; Y7 pressure belts and winds; Y8 clouds, rain and cyclones; Y9 oceans; Y10 climate and biomes. */
const Y6 = [
  ["has all the weather and clouds","Troposphere","The lowest layer — up to about 8 km at the poles and 18 km at the Equator.","p"],
  ["gets about 6.5 °C colder for every km you climb","Troposphere","The normal lapse rate.","p"],
  ["holds most of the air's mass and water vapour","Troposphere","",""],
  ["contains the ozone layer","Stratosphere","Ozone (about 15–35 km up) absorbs the Sun's ultraviolet rays.","p|SSC JE (Mechanical) · 1 Mar 2017 (Shift 1)"],
  ["is best for jet planes because the air is calm","Stratosphere","","p"],
  ["gets warmer with height because ozone absorbs UV","Stratosphere","",""],
  ["is where meteors burn up","Mesosphere","About 50–80 km up.","p"],
  ["is the coldest layer (about −90 °C at its top)","Mesosphere","","p"],
  ["has the ionosphere, which reflects radio waves back to Earth","Thermosphere","This is why radio signals can travel round the world.","p"],
  ["is where auroras glow","Thermosphere","Northern and southern lights.",""],
  ["is where the International Space Station orbits","Thermosphere","About 400 km up.",""],
  ["is the outermost layer, fading into space","Exosphere","",""]
];
const Y6G = [
  ["Nitrogen","About 78%","The most plentiful gas in the air.","p"],
  ["Oxygen","About 21%","","p"],
  ["Argon","About 0.93%","The most plentiful noble gas in the air.","p"],
  ["Carbon dioxide","About 0.04%","Small, but a key greenhouse gas.","p"]
];
const Y6I = [
  ["Isobar","Pressure","","p"],
  ["Isotherm","Temperature","","p"],
  ["Isohyet","Rainfall","","p"],
  ["Isohaline","Salinity","","p"],
  ["Isobath","Water depth","",""],
  ["Isoneph","Cloudiness","",""],
  ["Isohel","Sunshine","",""],
  ["Isoseismal","Earthquake intensity","",""]
];
const Y7 = [
  ["Doldrums (equatorial low)","around the Equator, roughly 0°–5° N and S","Calm, hot, rising air; sailing ships got stuck here.","p"],
  ["Horse latitudes (subtropical highs)","at about 30° N and S","Calm, dry, sinking air; most hot deserts lie here.","p"],
  ["Subpolar lows","at about 60° N and S","",""],
  ["Polar highs","at the poles","Very cold, sinking air.",""],
  ["Trade winds","between 30° and the Equator, blowing towards it","North-east trades in the north, south-east trades in the south.","p"],
  ["Westerlies","between 30° and 60°, blowing towards the poles","Stronger in the southern half — few lands to slow them.","p"],
  ["Polar easterlies","between the poles and 60°","",""],
  ["Roaring Forties","at about 40° S","Strong westerlies over open sea.","p"],
  ["Furious Fifties","at about 50° S","","p"],
  ["Shrieking Sixties","at about 60° S","",""]
];
const Y7L = [
  ["Chinook","Rocky Mountains (USA and Canada)","Warm and dry; melts snow fast — the 'snow eater'.","p",1],
  ["Foehn","Alps (Switzerland)","Warm and dry down the slopes; ripens grapes.","p"],
  ["Santa Ana","Southern California (USA)","Warm and dry; spreads wildfires.",""],
  ["Zonda","Andes of Argentina","Warm and dry, down the Andes.",""],
  ["Berg wind","South Africa","Hot and dry, blowing from the inland plateau to the coast.",""],
  ["Sirocco","Sahara to Italy (Mediterranean)","Hot and dusty; its red dust brings 'blood rain' in Italy.","p"],
  ["Harmattan","West Africa (Sahara to the Guinea coast)","Hot, dry and dusty; called 'the Doctor' as it brings relief from humid air.","p"],
  ["Khamsin","Egypt","Hot, dry and dusty.","p"],
  ["Simoom","Arabian and Saharan deserts","Hot, dry, suffocating sand wind.",""],
  ["Brickfielder","South-east Australia","Hot and dry from the interior desert.",""],
  ["Loo","Northern plains of India","Hot, dry summer wind of May–June.","p",1],
  ["Mistral","Rhône valley (France)","Cold, dry north wind.","p"],
  ["Bora","Adriatic coast (Croatia)","Cold, dry north-east wind.","p"],
  ["Purga","Siberia (Russia)","Cold blizzard wind.",""],
  ["Pampero","Pampas of Argentina","Cold wind behind a cold front.",""]
];
const Y7N = [
  ["Chinook","Warm, dry wind coming down a mountain"],["Foehn","Warm, dry wind coming down a mountain"],["Santa Ana","Warm, dry wind coming down a mountain"],["Zonda","Warm, dry wind coming down a mountain"],
  ["Sirocco","Hot, dry desert wind"],["Harmattan","Hot, dry desert wind"],["Khamsin","Hot, dry desert wind"],["Simoom","Hot, dry desert wind"],["Loo","Hot, dry desert wind"],["Brickfielder","Hot, dry desert wind"],
  ["Mistral","Cold wind"],["Bora","Cold wind"],["Purga","Cold wind"],["Pampero","Cold wind"]
];
const Y8 = [
  ["Cirrus","High, thin and feathery, made of ice crystals","The highest common clouds.","p"],
  ["Cumulus","Puffy, like cotton wool, seen in fair weather","Flat bottoms, heaped tops.","p"],
  ["Stratus","A low, grey layer covering the sky like a sheet","Can give drizzle and fog.","p"],
  ["Nimbostratus","A thick, dark layer giving steady, long rain","",""],
  ["Cumulonimbus","Tall thunderstorm clouds with an anvil top","Bring thunder, lightning, hail and heavy showers.","p"],
  ["Cirrostratus","A thin milky veil that makes a halo round the Sun or Moon","",""]
];
const Y8C = [
  ["Hurricanes","the Atlantic, Caribbean Sea and east Pacific (USA)","","p"],
  ["Typhoons","the north-west Pacific (China Sea, Japan)","","p",1],
  ["Cyclones","the Indian Ocean (Bay of Bengal, Arabian Sea)","","p"],
  ["Willy-willies","north-west Australia","","p"],
  ["Baguios","the Philippines","","p"],
  ["Tornadoes (twisters)","over land in the central USA","Small, very violent funnels — not tropical cyclones.","p"]
];
const Y9 = [
  ["Gulf Stream","Warm · Atlantic","Keeps western Europe mild; meets the Labrador off Newfoundland.","p"],
  ["North Atlantic Drift","Warm · Atlantic","Keeps Norway's ports ice-free.","p"],
  ["Brazil","Warm · Atlantic","",""],
  ["Labrador","Cold · Atlantic","","p"],
  ["Canary","Cold · Atlantic","Off north-west Africa.","p"],
  ["Benguela","Cold · Atlantic","Off south-west Africa; helps make the Namib desert.","p"],
  ["Falkland","Cold · Atlantic","Off Argentina.",""],
  ["Kuroshio (Japan)","Warm · Pacific","",""],
  ["Alaska","Warm · Pacific","",""],
  ["East Australian","Warm · Pacific","",""],
  ["Oyashio (Kurile)","Cold · Pacific","",""],
  ["California","Cold · Pacific","","p"],
  ["Humboldt (Peru)","Cold · Pacific","Rich fishing; helps make the Atacama desert.","p"],
  ["Agulhas","Warm · Indian","Off south-east Africa.",""],
  ["Mozambique","Warm · Indian","",""],
  ["West Australian","Cold · Indian","",""]
];
const Y9O = [
  ["is the largest and deepest","Pacific","About a third of the Earth's surface.","p"],
  ["has the Mariana Trench","Pacific","Challenger Deep, about 11 km deep.","p"],
  ["has the Great Barrier Reef (in its Coral Sea)","Pacific","",""],
  ["is S-shaped","Atlantic","","p"],
  ["is the busiest for trade and shipping","Atlantic","",""],
  ["has the Sargasso Sea","Atlantic","A 'sea' with no coast, full of floating seaweed.","p"],
  ["is the only one named after a country","Indian","","p"],
  ["has the Java (Sunda) Trench","Indian","",""],
  ["is the smallest and shallowest","Arctic","","p"],
  ["surrounds Antarctica","Southern","",""]
];
const Y9T = [
  ["spring tide","Very high tides at new moon and full moon, when the Sun, Moon and Earth are in a line","Nothing to do with the season spring.","p"],
  ["neap tide","Weak tides at the quarter moons, when the Sun and Moon pull at right angles","","p"],
  ["tidal bore","A wall of water rushing up a river mouth with the tide","Seen on the Hooghly.",""],
  ["continental shelf","The shallow, gently sloping sea floor at a continent's edge","The richest fishing grounds.","p"],
  ["abyssal plain","The flat, deep floor of the ocean","",""],
  ["fringing reef","A coral reef growing close to the shore","",""],
  ["barrier reef","A coral reef parted from the coast by a wide lagoon","",""],
  ["atoll","A ring-shaped coral reef round a lagoon","Lakshadweep's islands are atolls.","p"],
  ["guyot","A flat-topped undersea mountain","",""]
];
const Y10 = [
  ["A","Tropical humid — every month above 18 °C","","p"],
  ["B","Dry — more water lost by evaporation than gained by rain","","p"],
  ["C","Warm temperate — mild winters","",""],
  ["D","Cold snow-forest — harsh winters","",""],
  ["E","Polar — warmest month below 10 °C","","p"],
  ["H","Highland","",""]
];
const Y10G = [
  ["Prairies","North America (USA and Canada)","Temperate grassland; the 'wheat basket' of the world.","p"],
  ["Pampas","Argentina","","p"],
  ["Steppes","Eurasia (Ukraine to Central Asia)","","p"],
  ["Veld","South Africa","","p"],
  ["Downs","Australia","Sheep farming.","p"],
  ["Canterbury","New Zealand","",""],
  ["Puszta","Hungary","",""],
  ["Llanos","Venezuela and Colombia (Orinoco basin)","Tropical grassland.","p"],
  ["Campos","Brazilian Highlands","Tropical grassland.",""],
  ["Selvas","Amazon basin","Tropical rainforest.","p"],
  ["Taiga","Siberia and northern Canada","Coniferous forest.","p"]
];
const Y10C = [
  ["equatorial","Rain almost every afternoon, no real winter, dense evergreen forest","Amazon, Congo, Indonesia.","p"],
  ["tropical savanna","Tall grass with scattered trees, wet summer and dry winter","Big game of Africa.","p"],
  ["hot desert","Very little rain, cacti and date palms, hot days and cold nights","Sahara, Thar, Kalahari.","p"],
  ["Mediterranean","Hot dry summers and rainy winters; citrus, grapes and olives","The 'orchards of the world'.","p"],
  ["taiga (sub-arctic)","Long cold winters, coniferous forests and softwood timber","",""],
  ["tundra","Frozen ground (permafrost), mosses and lichens, reindeer","",""]
];

LESSONS.push(
{id:"Y6", heat:3, title:"The atmosphere and insolation", hi:"वायुमंडल और सूर्यातप", blocks:[
  {k:"hot", h:"Always asked: <b>the layers in order</b> and what happens in each — weather in the troposphere, <b>ozone in the stratosphere</b>, meteors in the mesosphere, <b>radio waves and the ionosphere</b> in the thermosphere — plus <b>the gases of the air</b> and <b>isolines</b> (isobar, isohyet…)."},
  {k:"story", h:"<p>The air around us is about <b>78% nitrogen</b> and <b>21% oxygen</b>, with argon, a little carbon dioxide and water vapour. Going up from the ground: the <b>troposphere</b> (weather, gets colder as you climb), the <b>stratosphere</b> (calm, with the <b>ozone layer</b> that blocks ultraviolet rays), the <b>mesosphere</b> (coldest, meteors burn), the <b>thermosphere</b> (with the <b>ionosphere</b> that bounces radio waves back), and the thin <b>exosphere</b>.</p><p>The Sun's energy reaching the Earth is called <b>insolation</b> (incoming solar radiation). It is strongest at the Equator, where the rays are nearly vertical. The Earth sends heat back as long-wave <b>terrestrial radiation</b>, and greenhouse gases trap some of it — the <b>greenhouse effect</b>. Heat moves by <b>conduction</b>, <b>convection</b> (up and down) and <b>advection</b> (sideways).</p>", key:"T-S-M-T-E: Troposphere (weather) · Stratosphere (ozone) · Mesosphere (meteors) · Thermosphere (ionosphere) · Exosphere."},
  {k:"facts", title:"Heat and the atmosphere", rows:[
    ["Insolation","Incoming solar radiation — the Sun's energy that reaches the Earth"],
    ["Albedo","The share of sunlight reflected back — about 30% for the Earth"],
    ["Tropopause","Top of the troposphere — about 18 km over the Equator, about 8 km over the poles"],
    ["Advection","Heat carried sideways by wind (convection is upward)"],
    ["Temperature inversion","Air gets warmer with height instead of colder — traps fog and smog"],
    ["Ozone unit","Dobson unit; 16 September is World Ozone Day (Montreal Protocol, 1987)"]
  ]},
  {k:"table", title:"Which layer?", head:["Which layer…","Layer","Note"], rows: Y6.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Gases in dry air", head:["Gas","Share by volume","Note"], rows: Y6G.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Lines on weather maps", head:["Line","Joins places of equal","Note"], rows: Y6I.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Layers from the ground up: <b>“The Strong Man’s Tea Ends”</b> — Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere. Iso-lines: <b>hyet</b> = rain (think 'wet'), <b>haline</b> = salt (think 'halite'), <b>bath</b> = depth (think 'bathroom water')."},
  {k:"trap", h:"<b>Ozone</b> is in the <b>stratosphere</b>, not the ionosphere. The <b>ionosphere</b> is part of the <b>thermosphere</b>. The <b>coldest</b> layer is the <b>mesosphere</b>. Most plentiful gas = <b>nitrogen</b>, not oxygen."}
], sum:["Air: nitrogen 78%, oxygen 21%, argon 0.93%, carbon dioxide about 0.04%.","Troposphere: all weather, colder with height; stratosphere: ozone layer, jet planes.","Mesosphere: coldest, meteors burn; thermosphere: ionosphere reflects radio waves, auroras.","Insolation is strongest at the Equator; the Earth's albedo is about 30%.","Isobar = pressure, isotherm = temperature, isohyet = rainfall, isohaline = salinity."]},

{id:"Y7", heat:3, title:"Pressure belts, planetary winds and local winds", hi:"दाब पेटियाँ, ग्रहीय पवनें और स्थानीय पवनें", blocks:[
  {k:"hot", h:"The most asked bit of climatology: <b>local winds and where they blow</b> (Chinook, Foehn, Sirocco, Mistral, Harmattan, Loo), then the <b>pressure belts</b>, <b>trade winds and westerlies</b>, the <b>Roaring Forties</b>, the <b>Coriolis force</b> and <b>jet streams</b>."},
  {k:"story", h:"<p>Wind always blows from <b>high pressure to low pressure</b>. The Earth has seven pressure belts: the <b>equatorial low</b> (the calm <b>doldrums</b>), two <b>subtropical highs</b> near 30° (the <b>horse latitudes</b>), two <b>subpolar lows</b> near 60°, and two <b>polar highs</b>. Between them blow the <b>planetary winds</b>: <b>trade winds</b> towards the Equator, <b>westerlies</b> towards the poles, and <b>polar easterlies</b>. Because the Earth spins, the <b>Coriolis force</b> bends winds to the <b>right in the northern half</b> and to the <b>left in the southern half</b> (Ferrel's law). Over the open southern oceans the westerlies roar: the <b>Roaring Forties</b>, <b>Furious Fifties</b> and <b>Shrieking Sixties</b>.</p><p>High up, near the top of the troposphere, race narrow rivers of fast westerly air — the <b>jet streams</b>. Down on the ground, every region has its own <b>local winds</b>: the warm <b>Chinook</b> of the Rockies (the 'snow eater'), the <b>Foehn</b> of the Alps, the dusty <b>Sirocco</b> from the Sahara, the cold <b>Mistral</b> of France, the <b>Harmattan</b> of West Africa (the 'Doctor'), and India's own hot <b>Loo</b>.</p>", key:"High → low pressure; Coriolis: right in the north, left in the south; Chinook = snow eater (Rockies), Foehn = Alps, Mistral = cold France, Sirocco = Sahara to Italy, Loo = north India."},
  {k:"facts", title:"More about winds", rows:[
    ["Coriolis force","Zero at the Equator, greatest at the poles"],
    ["Buys Ballot's law","Stand with your back to the wind in the northern half — low pressure is on your left"],
    ["Jet streams","Fast westerly winds 9–12 km up, near the tropopause"],
    ["Tropical easterly jet","Blows over India in summer and helps the monsoon"],
    ["Monsoon","Seasonal reversal of winds — from the Arabic 'mausim' (season)"],
    ["Sea breeze / land breeze","Sea to land by day; land to sea by night"],
    ["Valley / mountain breeze","Up the slope by day (anabatic); down the slope at night (katabatic)"],
    ["Norwesters (Kalbaisakhi)","Evening thunderstorms of West Bengal in summer"]
  ]},
  {k:"table", title:"Pressure belts and planetary winds", head:["Belt or wind","Found","Note"], rows: Y7.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Local winds of the world", head:["Wind","Where it blows","Note"], rows: Y7L.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Hot or cold?", head:["Wind","Kind","Note"], rows: Y7N.map(r => [r[0], r[1], ""])},
  {k:"trick", h:"<b>Ch</b>inook = <b>Ch</b>ews snow (snow eater) in the Rockies. <b>M</b>istral = <b>M</b>arseille side of France, cold. <b>S</b>irocco = <b>S</b>ahara → <b>S</b>icily/Italy. <b>F</b>oehn = <b>F</b>rom the Alps. <b>H</b>armattan = <b>H</b>ealer (the Doctor)."},
  {k:"trap", h:"The <b>doldrums</b> are at the <b>Equator</b>; the <b>horse latitudes</b> are at <b>30°</b> — both are calm belts. The Roaring Forties are in the <b>southern</b> half. Chinook and Foehn are <b>warm</b> winds, though they blow from snowy mountains."}
], sum:["Winds blow from high to low pressure and are bent by the Coriolis force — right in the north, left in the south.","Doldrums at the Equator; horse latitudes at 30°; subpolar lows at 60°; polar highs at the poles.","Trade winds blow towards the Equator; westerlies towards the poles — Roaring Forties, Furious Fifties, Shrieking Sixties.","Chinook (Rockies, snow eater), Foehn (Alps), Santa Ana (California) — warm and dry down mountains.","Sirocco (Sahara–Italy), Harmattan (West Africa), Khamsin (Egypt), Loo (India) — hot; Mistral (France), Bora (Adriatic) — cold."]},

{id:"Y8", heat:2, title:"Clouds, rainfall and cyclones", hi:"बादल, वर्षा और चक्रवात", blocks:[
  {k:"hot", h:"Two favourites: <b>what tropical cyclones are called in different regions</b> (hurricane, typhoon, willy-willy) and <b>cloud types</b> (cumulonimbus = thunderstorm). Also: the calm <b>eye</b>, the <b>direction of spin</b>, and <b>types of rainfall</b>."},
  {k:"story", h:"<p>When moist air rises it cools; at its <b>dew point</b> the water vapour condenses on dust into tiny drops — a <b>cloud</b>. High, wispy <b>cirrus</b> are made of ice; puffy <b>cumulus</b> mean fair weather; flat grey <b>stratus</b> cover the sky; and the giant <b>cumulonimbus</b> brings thunder, lightning and hail. Rain is <b>convectional</b> (hot afternoons at the Equator), <b>orographic</b> (moist wind forced up a mountain — the far side is a dry <b>rain-shadow</b>), or <b>cyclonic/frontal</b>.</p><p>A <b>tropical cyclone</b> is a huge low-pressure storm born over warm seas (above about 27 °C). Air spirals in <b>anticlockwise in the northern half</b> and clockwise in the southern half round a calm, cloudless <b>eye</b>. It has different names: <b>hurricane</b> in the Atlantic and Caribbean, <b>typhoon</b> in the China Sea, <b>cyclone</b> in the Indian Ocean, <b>willy-willy</b> in north-west Australia. Cyclones do not form right at the Equator, where the Coriolis force is zero.</p>", key:"Cumulonimbus = thunder cloud; cyclones spin anticlockwise in the north; hurricane (Atlantic), typhoon (China Sea), cyclone (Indian Ocean), willy-willy (Australia)."},
  {k:"facts", title:"Rain and storms", rows:[
    ["Humidity","Water vapour in the air — measured with a hygrometer"],
    ["Dew point","The temperature at which air becomes saturated and condenses"],
    ["Orographic rain","Windward side of mountains — e.g. the Western Ghats; the leeward side is a rain-shadow"],
    ["Wettest places","Mawsynram and Cherrapunji (Sohra), Meghalaya"],
    ["Anticyclone","A high-pressure system with calm, clear weather; clockwise in the north"],
    ["Cyclone names (North Indian Ocean)","Chosen in turn from lists given by 13 countries, through the WMO/ESCAP panel and IMD"],
    ["Temperate cyclones","Form along fronts in the mid-latitudes (about 35°–65°)"]
  ]},
  {k:"table", title:"Cloud types", head:["Cloud","Looks like","Note"], rows: Y8.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Storm names around the world", head:["Name","Region","Note"], rows: Y8C.map(r => [r[0], r[1][0].toUpperCase() + r[1].slice(1), r[2]])},
  {k:"trick", h:"<b>“Hurry to America, Tie a Typhoon to China, Cycle round India, Willy in Australia.”</b> Cloud words: <b>cirro</b> = curl (high), <b>cumulo</b> = heap, <b>strato</b> = layer, <b>nimbo</b> = rain."},
  {k:"trap", h:"In the <b>northern</b> half cyclones spin <b>anticlockwise</b>; anticyclones spin clockwise. The <b>eye</b> of a cyclone is <b>calm</b> — the worst winds are in the wall round it. A <b>tornado</b> forms over <b>land</b> and is much smaller than a cyclone."}
], sum:["Clouds form when rising air cools to its dew point; cumulonimbus brings thunderstorms, cirrus is high and icy.","Rainfall can be convectional, orographic (relief) or cyclonic (frontal).","Tropical cyclones form over warm seas, spin anticlockwise in the north, and have a calm eye.","Hurricane — Atlantic/Caribbean; typhoon — China Sea; cyclone — Indian Ocean; willy-willy — Australia; baguio — Philippines.","Mawsynram (Meghalaya) is among the wettest places on Earth; leeward slopes lie in the rain-shadow."]},

{id:"Y9", heat:3, title:"Oceans: relief, salinity, tides, currents and corals", hi:"महासागर: उच्चावच, लवणता, ज्वार, धाराएँ और प्रवाल", blocks:[
  {k:"hot", h:"Most asked: <b>warm vs cold currents</b> and their ocean (Gulf Stream, Kuroshio, Labrador, Humboldt), <b>spring and neap tides</b>, the <b>Mariana Trench</b>, <b>average salinity (35‰)</b>, and <b>coral reefs and atolls</b>."},
  {k:"story", h:"<p>About <b>71%</b> of the Earth is water, most of it in five oceans: the <b>Pacific</b> (largest, deepest), <b>Atlantic</b>, <b>Indian</b>, <b>Southern</b> and <b>Arctic</b> (smallest). From the coast the floor goes down the gentle <b>continental shelf</b>, the steep <b>slope</b>, then the flat <b>abyssal plain</b>, cut by deep <b>trenches</b> — the deepest is the <b>Mariana Trench</b> (Challenger Deep, about 11 km). Sea water has about <b>35 grams of salt per kilogram</b> (35‰).</p><p><b>Tides</b> are caused mainly by the <b>Moon's pull</b>. At new and full moon the Sun and Moon pull together — <b>spring tides</b>; at the quarter moons they pull at right angles — <b>neap tides</b>. <b>Currents</b> are rivers in the sea: <b>warm</b> ones flow from the Equator towards the poles (Gulf Stream, Kuroshio), <b>cold</b> ones flow towards the Equator (Labrador, Canary, Humboldt). Where warm meets cold, fog and rich fishing grounds form — like the <b>Grand Banks</b> off Newfoundland. In warm, clear, shallow seas, tiny animals build <b>coral reefs</b>.</p>", key:"Warm currents flow poleward, cold currents equatorward; spring tide at new/full moon; average salinity 35‰; Mariana Trench is the deepest."},
  {k:"facts", title:"Salinity, tides and corals", rows:[
    ["Average salinity","About 35‰ (parts per thousand)"],
    ["Saltiest sea","Red Sea (about 40‰ or more) — hot and dry with few rivers"],
    ["Low salinity","Baltic Sea — cold, many rivers and melting ice"],
    ["Highest tides","Bay of Fundy, Canada"],
    ["Tides each day","Two high and two low tides — about 12 h 25 min apart"],
    ["Grand Banks","Off Newfoundland, where the Gulf Stream meets the Labrador — fog and great fishing"],
    ["Coral needs","Warm (above about 20 °C), clear, shallow, salty water; warming causes bleaching"],
    ["Largest coral reef","Great Barrier Reef, off Queensland, Australia"],
    ["El Niño","Warm water off Peru every few years; it often weakens India's monsoon"]
  ]},
  {k:"table", title:"Ocean currents", head:["Current","Warm/cold · Ocean","Note"], rows: Y9.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Which ocean?", head:["Which ocean…","Ocean","Note"], rows: Y9O.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Tides, sea floor and corals", head:["Term","Meaning","Note"], rows: Y9T.map(r => [r[0][0].toUpperCase() + r[0].slice(1), r[1], r[2]])},
  {k:"trick", h:"Currents off a continent's <b>west</b> coast in the tropics are <b>cold</b> (Canary, Benguela, California, Humboldt, West Australian) and they make <b>deserts</b> (Sahara, Namib, Atacama). Currents off <b>east</b> coasts are <b>warm</b> (Gulf Stream, Brazil, Kuroshio, East Australian, Agulhas)."},
  {k:"trap", h:"A <b>spring tide</b> has nothing to do with the season — it comes twice a month. <b>Kuroshio</b> is warm; <b>Oyashio</b> is cold. The deepest point of the <b>Atlantic</b> is the Puerto Rico Trench, but the deepest of all is the Mariana Trench in the <b>Pacific</b>."}
], sum:["Pacific is the largest and deepest ocean; Mariana Trench (Challenger Deep) is the deepest point; Arctic is the smallest.","Average salinity is about 35‰; the Red Sea is very salty, the Baltic Sea is not.","Spring tides at new and full moon; neap tides at the quarter moons; the Bay of Fundy has the highest tides.","Warm currents: Gulf Stream, North Atlantic Drift, Kuroshio, Agulhas; cold: Labrador, Canary, Benguela, Humboldt, California.","Coral reefs are fringing, barrier or atolls; the Great Barrier Reef is the largest; Lakshadweep is made of atolls."]},

{id:"Y10", heat:2, title:"Climate types and biomes", hi:"जलवायु के प्रकार और बायोम", blocks:[
  {k:"hot", h:"Questions ask for the <b>name of each grassland</b> (Prairies, Pampas, Steppes, Veld, Downs), the <b>Köppen letters</b> (A to E), and the <b>features of each climate</b> — Mediterranean, equatorial, savanna, taiga, tundra."},
  {k:"story", h:"<p>In 1918 the German scientist <b>Wladimir Köppen</b> sorted the world's climates by temperature and rain into groups with capital letters: <b>A</b> tropical, <b>B</b> dry, <b>C</b> warm temperate, <b>D</b> cold snow-forest, <b>E</b> polar, and later <b>H</b> for highlands. Small letters add detail: <b>f</b> = no dry season, <b>m</b> = monsoon, <b>w</b> = dry winter, <b>s</b> = dry summer.</p><p>A <b>biome</b> is a large area with its own climate, plants and animals. Near the Equator stand the <b>tropical rainforests</b> (the Amazon's are called <b>selvas</b>); then the <b>savannas</b>; then hot <b>deserts</b> near 30°. In the middle latitudes lie temperate grasslands with local names — <b>Prairies, Pampas, Steppes, Veld, Downs</b>. Further north come the vast conifer forests of the <b>taiga</b> — the largest land biome — and finally the frozen <b>tundra</b>.</p>", key:"Köppen A–E (+H); grasslands: Prairies (N. America), Pampas (Argentina), Steppes (Eurasia), Veld (S. Africa), Downs (Australia)."},
  {k:"table", title:"Köppen's main groups", head:["Letter","Climate","Note"], rows: Y10.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Grasslands and forests by local name", head:["Name","Where","Note"], rows: Y10G.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Climate types", head:["Climate","Features","Note"], rows: Y10C.map(r => [r[0][0].toUpperCase() + r[0].slice(1), r[1], r[2]])},
  {k:"trick", h:"Temperate grasslands round the world: <b>“Pretty Puppies Sleep Very Deeply”</b> — <b>P</b>rairies (N. America), <b>P</b>ampas (S. America), <b>S</b>teppes (Eurasia), <b>V</b>eld (Africa), <b>D</b>owns (Australia)."},
  {k:"trap", h:"<b>Llanos</b> and <b>Campos</b> are <b>tropical</b> grasslands (South America), not temperate ones. <b>Selvas</b> are forests, not grasslands. The <b>Mediterranean</b> climate has <b>rain in winter</b>, not summer."}
], sum:["Köppen (1918): A tropical, B dry, C warm temperate, D cold snow-forest, E polar, H highland.","Equatorial: rain daily, evergreen forest (selvas of the Amazon); savanna: tall grass, wet summer, dry winter.","Mediterranean: dry summers, rainy winters — citrus, grapes and olives.","Prairies (N. America), Pampas (Argentina), Steppes (Eurasia), Veld (S. Africa), Downs (Australia), Canterbury (New Zealand).","Taiga (coniferous) is the largest land biome; tundra has permafrost, mosses and lichens."]}
);

pairQs("Y6", Y6, { q: t => `Which layer of the atmosphere ${t}?`, rq: a => `Which is true of the ${a.toLowerCase()}?` });
pairQs("Y6", Y6G, { q: t => `${t} makes up how much of dry air?`, rq: a => `Which gas makes up ${a.toLowerCase()} of dry air?`, extra: ["About 1%"] });
pairQs("Y6", Y6I, { q: t => `An ${t.toLowerCase()} joins places of equal:`, rq: a => `A line joining places of equal ${a.toLowerCase()} is called an:` });
pairQs("Y7", Y7, { q: t => `Where are the ${t} found?`, rq: a => `Which belt or wind is found ${a}?` });
pairQs("Y7", Y7L, { q: t => `The local wind ${t} blows in:`, rq: a => `Which local wind blows in ${a}?` });
pairQs("Y7", Y7N, { q: t => `What kind of wind is the ${t}?`, extra: ["Warm, wet wind from the sea"] });
pairQs("Y8", Y8, { q: t => `${t} clouds are best described as:`, rq: a => `Which cloud is “${a.toLowerCase()}”?` });
pairQs("Y8", Y8C, { q: t => `Where are violent storms called ${t.toLowerCase()}?`, rq: a => `What are these storms called in ${a}?` });
pairQs("Y9", Y9, { q: t => `The ${t} Current is:` });
pairQs("Y9", Y9O, { q: t => `Which ocean ${t}?`, rq: a => `Which is true of the ${a} Ocean?`, extra: ["Southern"] });
pairQs("Y9", Y9T, { q: t => `Which describes a${/^[aeiou]/.test(t) ? "n" : ""} ${t}?`, rq: a => `“${a}” — this is a:` });
pairQs("Y10", Y10, { q: t => `In Köppen's scheme, the letter ${t} stands for:`, rq: a => `Which Köppen letter means “${a}”?` });
pairQs("Y10", Y10G, { q: t => `Where are the ${t}?`, rq: a => `What are the grasslands or forests of ${a} called?` });
pairQs("Y10", Y10C, { q: t => `Which describes the ${t} climate?`, rq: a => `“${a}” — which climate is this?` });

QB.push(
["Y6","The most plentiful gas in the atmosphere is:",["Nitrogen","Oxygen","Argon","Carbon dioxide"],"About 78%.","p"],
["Y6","Radio waves are reflected back to the Earth by the:",["Ionosphere","Ozone layer","Troposphere","Exosphere"],"It lies in the thermosphere.","p"],
["Y6","The Sun's energy received by the Earth is called:",["Insolation","Radiation balance","Albedo","Advection"],"Short for 'incoming solar radiation'.","p"],
["Y6","Sideways transfer of heat by moving air is called:",["Advection","Convection","Conduction","Radiation"],"Convection is vertical.","p"],
["Y6","The boundary between the troposphere and the stratosphere is the:",["Tropopause","Stratopause","Mesopause","Ionopause"],"Highest over the Equator (about 18 km).",""],
["Y7","Which of the following wind is also known as 'Snow Eater'?",["Chinook","Harmattan","Sirocco","Mistral"],"The warm, dry Chinook melts snow on the eastern side of the Rockies.","p","","","SSC CPO · 4 Jul 2017 (Afternoon)"],
["Y7","Name the hot, dry, oppressive winds that blow between Delhi and Patna in summer.",["Loo","Nor'westers","Mango showers","Blossom showers"],"The Loo blows in May and June over the northern plains.","p","","","SSC CGL 2022 Tier-II · 6 Mar 2023 (Shift 1)"],
["Y7","The Coriolis force deflects winds in the northern half of the Earth to the:",["Right","Left","Equator","Poles"],"And to the left in the southern half (Ferrel's law).","p"],
["Y7","Which local wind is called 'the Doctor' in West Africa?",["Harmattan","Sirocco","Khamsin","Foehn"],"Its dry air brings relief from the humid heat of the coast.","p"],
["Y7","Winds always blow from:",["High pressure to low pressure","Low pressure to high pressure","Cold land to warm sea only","The poles to the Equator only"],"The bigger the pressure difference, the stronger the wind.","p"],
["Y7","Jet streams are fast winds found in the:",["Upper troposphere, near the tropopause","Lower stratosphere's ozone layer","Mesosphere","Surface layer over oceans"],"About 9–12 km up, mostly westerly.","p"],
["Y7","A sea breeze blows:",["From sea to land by day","From land to sea by day","From sea to land at night","Only during storms"],"Land heats faster by day, making low pressure over it.",""],
["Y8","What is the name of the tropical cyclones in the China Sea?",["Typhoon","Hurricanes","Tornado","Twister"],"Typhoons of the north-west Pacific.","p","","","SSC CGL 2017 · 9 Aug 2017 (Shift 1)"],
["Y8","In the northern half, winds in a tropical cyclone spin:",["Anticlockwise","Clockwise","Straight in","Up and down only"],"Clockwise in the southern half.","p"],
["Y8","The calm centre of a tropical cyclone is called its:",["Eye","Wall","Core","Front"],"Clear skies and light winds.","p"],
["Y8","Rain on the windward side of mountains is called:",["Orographic rainfall","Convectional rainfall","Cyclonic rainfall","Frontal rainfall"],"The leeward side lies in the rain-shadow.","p"],
["Y8","Relative humidity is measured with a:",["Hygrometer","Barometer","Anemometer","Hydrometer"],"A barometer measures pressure; an anemometer, wind speed.","p"],
["Y8","Why do tropical cyclones not form right at the Equator?",["The Coriolis force is zero there","The sea is too cold","There is no water vapour","The air pressure is too high"],"They form mostly between about 5° and 30°.",""],
["Y9","What is the average salinity of ocean water?",["About 35‰","About 3.5‰","About 25‰","About 50‰"],"About 35 grams of salt per kilogram of sea water.","p"],
["Y9","The deepest point in the oceans, Challenger Deep, is in the:",["Mariana Trench","Puerto Rico Trench","Java Trench","Tonga Trench"],"About 11 km deep, in the Pacific.","p"],
["Y9","Tides are caused mainly by the pull of the:",["Moon","Sun","Earth's rotation","Wind"],"The Sun's pull is a little under half as strong.","p"],
["Y9","The Grand Banks fishing grounds lie where the Gulf Stream meets the:",["Labrador Current","Canary Current","Kuroshio Current","Benguela Current"],"Off Newfoundland, Canada.","p"],
["Y9","The world's highest tides are found in the:",["Bay of Fundy","Gulf of Khambhat","Bay of Bengal","Gulf of Mexico"],"In Canada; the Gulf of Khambhat has India's highest tides.","p"],
["Y9","The world's largest coral reef system is off the coast of:",["Australia","India","Maldives","Indonesia"],"The Great Barrier Reef, Queensland.","p"],
["Y10","Who gave the most widely used classification of world climates?",["Wladimir Köppen","Alfred Wegener","C. W. Thornthwaite","William Morris Davis"],"In 1918, using letters A to E.","p"],
["Y10","Which is the largest land biome?",["Taiga (boreal forest)","Tropical rainforest","Savanna","Desert"],"It stretches across Siberia, Scandinavia, Canada and Alaska.",""],
["Y10","In Köppen's scheme, the small letter 'f' means:",["No dry season","Dry summer","Dry winter","Monsoon"],"s = dry summer, w = dry winter, m = monsoon.",""],
["Y10","The Mediterranean climate gets most of its rain in:",["Winter","Summer","Spring only","All months equally"],"From the westerlies, which shift towards the Equator in winter.","p"]
);

LASTMOMENT.push(
{t:"Atmosphere", era:["pg"], rows:[["Weather","Troposphere"],["Ozone, jets","Stratosphere"],["Meteors, coldest","Mesosphere"],["Ionosphere, auroras","Thermosphere"],["Nitrogen","78%"],["Oxygen","21%"],["Isohyet","Rainfall"],["Isohaline","Salinity"]]},
{t:"Local winds", era:["pg"], rows:[["Chinook","Rockies — snow eater"],["Foehn","Alps"],["Sirocco","Sahara → Italy"],["Mistral","France, cold"],["Harmattan","West Africa — Doctor"],["Bora","Adriatic, cold"],["Santa Ana","California"],["Loo","North India"]]},
{t:"Storms and seas", era:["pg"], rows:[["Hurricane","Atlantic, Caribbean"],["Typhoon","China Sea"],["Willy-willy","NW Australia"],["Baguio","Philippines"],["Salinity","35‰"],["Deepest","Mariana Trench"],["Spring tide","New and full moon"],["Grand Banks","Gulf Stream + Labrador"]]},
{t:"Grasslands", era:["pg"], rows:[["Prairies","North America"],["Pampas","Argentina"],["Steppes","Eurasia"],["Veld","South Africa"],["Downs","Australia"],["Canterbury","New Zealand"],["Llanos","Venezuela"],["Campos","Brazil"]]}
);
TILES.push(["78%","Nitrogen in air","pg"],["35‰","Average ocean salinity","pg"],["11 km","Depth of Challenger Deep","pg"],["1918","Köppen's climate scheme","pg"]);

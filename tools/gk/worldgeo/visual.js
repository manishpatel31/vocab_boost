/* World Geography — continents and oceans by size, the continents' highest peaks, flags, river mouths, lakes and waterfalls,
   deserts, straits and canals on the world map, boundary lines and photos (drawn by study-visual.js and study-world.js).
   Places are approximate. place(), rows() and KIT come from applyVisual in tools/workbook/lib.js. */
const P = (w, n, c) => [w, n, c];
// numbered pins on the world map with a key under it
const wnum = (title, R, at, key, cap) => { const miss = R.filter(r => !at[r[0]]); if (miss.length) fail("worldgeo: no place for " + miss.map(r => r[0]).join(", "));
  return { k: "worldfig", title, minw: 640, pins: R.map((r, i) => [String(i + 1), at[r[0]][0], at[r[0]][1], r[0], "n"]), legend: R.map((r, i) => [`${i + 1} ${r[0]}`, key(r)]), cap }; };
const clean = s => String(s || "").replace(/\.$/, "");

// W1 — continents and oceans by size; the continents' highest peaks
place("W1", "Continents by area", { k: "bars", title: "Continents by area", unit: "million km²", left: 150, hi: 1,
  rows: [["Asia", 44.6, ""], ["Africa", 30.4, ""], ["North America", 24.7, ""], ["South America", 17.8, ""], ["Antarctica", 14.2, ""], ["Europe", 10.2, ""], ["Australia (Oceania)", 8.6, ""]],
  cap: "Round figures. Asia alone is about 30% of the world's land; Australia is the smallest continent." });
const PK = { "Asia": [86.93, 27.99], "Africa": [37.36, -3.07], "North America": [-151, 63.07], "South America": [-70.01, -32.65], "Europe": [42.44, 43.35], "Australia (mainland)": [148.26, -36.46] };
const HP = rows("W1", "Highest peak").filter(r => PK[r[0]]);
place("W1", "Highest peak", { k: "worldfig", title: "The highest peak of each continent", minw: 640, pins: HP.map(r => [r[1].replace(/ \(.*\)$/, ""), PK[r[0]][0], PK[r[0]][1], r[0], r[0] === "Europe" ? "l" : ""]),
  cap: "Everest (Asia), Aconcagua (South America), Denali (North America), Kilimanjaro (Africa), Elbrus (Europe), Vinson Massif (Antarctica — off this map), Kosciuszko (Australia)." },
  KIT.photos("The seven summits in pictures", HP.map(r => [r[1], r[0]]), { name: r => r[0].replace(/ \(.*\)$/, ""), cap: r => r[1] }));
place("W1", "The five oceans", { k: "bars", title: "The five oceans by area", unit: "million km²", left: 150, hi: 1, sort: false,
  rows: [["Pacific", 165, "largest and deepest"], ["Atlantic", 106, ""], ["Indian", 71, "named after a country"], ["Southern", 22, ""], ["Arctic", 14, "smallest and shallowest"]], cap: "Round figures." });

// W4 — flags in pictures (the Wikipedia article of each flag)
place("W4", "Flag clues", { k: "photos", title: "The flags", items: rows("W4", "Flag clues").map(r => P("Flag_of_" + r[1].replace(/ /g, "_"), r[1], r[0])) });

// W5 — famous peaks
place("W5", "Famous peaks", KIT.photos("Peaks in pictures", rows("W5", "Famous peaks").filter(r => /Everest|Kilimanjaro|Mont Blanc|Matterhorn|Fuji|Aconcagua|Table Mountain|Elbrus|Ararat|Kinabalu/.test(r[0])), { cap: r => r[1] }));

// W6 — where the great rivers end
const MOUTH = { "Nile": [31.0, 31.5], "Amazon": [-50, 0], "Yangtze": [121.8, 31.4], "Mississippi": [-89.3, 29.1], "Huang He (Yellow River)": [119, 37.8], "Volga": [48, 46], "Danube": [29.6, 45.2],
  "Rhine": [4.1, 51.95], "Seine": [0.1, 49.45], "Mekong": [106.7, 9.6], "Irrawaddy": [95, 15.9], "Indus": [67.4, 24], "Tigris and Euphrates": [48.5, 29.9], "Zambezi": [36.3, -18.8],
  "Niger": [6, 4.3], "Lena": [128, 72.6], "Colorado": [-114.8, 31.8], "St Lawrence": [-66, 49.5] };
place("W6", "Where great rivers end", wnum("Where the great rivers reach the sea", rows("W6", "Where great rivers end"), MOUTH, r => r[1], "Each number marks a river's mouth. The Nile (longest) flows north into the Mediterranean; the Volga ends in the land-locked Caspian Sea."));

// W7 — lakes and waterfalls
const LK = { "Caspian Sea": [50.5, 41.5], "Lake Superior": [-87.5, 47.6], "Lake Baikal": [108, 53.5], "Lake Titicaca": [-69.4, -15.8], "Dead Sea": [35.5, 31.5], "Lake Victoria": [33, -1],
  "Lake Tanganyika": [29.5, -6], "Lake Ladoga": [31.5, 61], "Lake Volta": [0, 7.5], "Lake Michigan": [-87, 44] };
place("W7", "Lake records", wnum("Record lakes", rows("W7", "Lake records"), LK, r => r[1], "The Caspian is the largest lake; Baikal the deepest and oldest; Titicaca the highest navigable; the Dead Sea the lowest."));
const FALL = { "Angel Falls": [-62.53, 5.97], "Tugela Falls": [28.9, -28.75], "Victoria Falls": [25.86, -17.92], "Niagara Falls": [-79.07, 43.08], "Iguazu Falls": [-54.44, -25.69], "Kaieteur Falls": [-59.48, 5.17],
  "Boyoma (Stanley) Falls": [25.2, 0.5], "Sutherland Falls": [167.7, -44.8], "Khone Falls": [105.9, 13.95], "Rhine Falls": [8.6, 47.68] };
place("W7", "Waterfalls", wnum("Waterfalls on the map", rows("W7", "Waterfalls"), FALL, r => r[1], "Angel Falls (Venezuela) is the highest; Victoria Falls is on the Zambezi; Niagara sits on the USA–Canada border."),
  KIT.photos("Waterfalls in pictures", rows("W7", "Waterfalls").slice(0, 6), { cap: r => r[1] }));

// W8 — deserts
const DES = { "Sahara": [10, 23], "Kalahari": [22, -23], "Namib": [15.5, -24], "Atacama": [-69.5, -24], "Patagonian": [-69, -45], "Gobi": [105, 43], "Taklamakan": [83, 39], "Thar": [71, 27],
  "Rub' al Khali": [50, 20], "Great Victoria": [128, -29], "Mojave": [-116, 35], "Karakum": [59, 39], "Dasht-e-Kavir": [54.5, 34.5] };
place("W8", "Deserts", wnum("Deserts of the world", rows("W8", "Deserts"), DES, r => r[1] + (r[2] ? " — " + clean(r[2]) : ""), "Most hot deserts lie near 20–30° north and south, under the subtropical high-pressure belts; cold currents make the coastal Atacama and Namib."),
  KIT.photos("Deserts in pictures", rows("W8", "Deserts").filter(r => /Sahara|Gobi|Atacama|Namib|Thar|Rub/.test(r[0])), { wiki: r => r[0] === "Rub' al Khali" ? "Rub' al Khali" : r[0] + " Desert", cap: r => r[1] }));

// W9 — straits and canals
const STR = { "Strait of Gibraltar": [-5.6, 35.95], "Bering Strait": [-168.9, 65.8], "Palk Strait": [79.8, 9.9], "Strait of Malacca": [100.5, 3.0], "Strait of Hormuz": [56.3, 26.6], "Bab-el-Mandeb": [43.3, 12.6],
  "Strait of Dover": [1.4, 51.0], "Bosphorus": [29.05, 41.1], "Bass Strait": [146, -39.5], "Cook Strait": [174.4, -41.2], "Strait of Magellan": [-70.9, -53.5], "Drake Passage": [-65, -56],
  "Strait of Messina": [15.6, 38.2], "Korea Strait": [129, 34.5], "Sunda Strait": [105.8, -5.9], "Strait of Florida": [-80.5, 24.3], "Mozambique Channel": [41, -18], "Davis Strait": [-57, 67] };
place("W9", "Straits and what", wnum("Straits on the map", rows("W9", "Straits and what"), STR, r => r[1], "Gibraltar joins the Atlantic and the Mediterranean; Hormuz is the oil gateway of the Persian Gulf; Malacca is Asia's busiest shipping lane."));
const CAN = { "Suez Canal": [32.35, 30.6], "Panama Canal": [-79.7, 9.1], "Kiel Canal": [9.8, 54.2], "Corinth Canal": [22.96, 37.93], "Volga–Don Canal": [43.9, 48.6], "Soo Locks (Sault Ste. Marie)": [-84.35, 46.5],
  "Welland Canal": [-79.2, 43.0], "Grand Canal": [118.5, 33], "Erie Canal": [-76, 43], "Manchester Ship Canal": [-2.6, 53.4] };
place("W9", "Canals and what", wnum("Canals on the map", rows("W9", "Canals and what"), CAN, r => r[1], "Suez (1869, no locks) joins the Mediterranean and Red Sea; Panama (1914, with locks) joins the Atlantic and Pacific."),
  KIT.photos("Canals in pictures", rows("W9", "Canals and what").slice(0, 4), { cap: r => r[1] }));

// W10 — boundary lines drawn where they run
const wline = (pts, color, label, at) => { const d = "M" + pts.map(p => KIT.wproj(p[0], p[1]).join(",")).join("L"), [x, y] = KIT.wproj(at[0], at[1]);
  return `<path d="${d}" fill="none" stroke="${color}" stroke-width="2.4" stroke-dasharray="5 3" style="vector-effect:non-scaling-stroke"/><text x="${x}" y="${y}" font-size="8.5" font-weight="700" style="fill:${color};paint-order:stroke;stroke:var(--sheet);stroke-width:2.5px">${label}</text>`; };
place("W10", "Boundary lines", { k: "worldfig", title: "Famous lines on the map", minw: 640,
  under: wline([[-123, 49], [-95, 49]], "#c0392b", "49th Parallel", [-128, 53]) + wline([[125.5, 38], [129, 38]], "#c0392b", "38th Parallel", [130, 39.5]) +
    wline([[71.5, 36.5], [70.5, 34], [69.3, 33.4], [66.5, 30], [62, 29.4]], "#c0392b", "Durand Line", [56, 36]) + wline([[91.6, 27.9], [94, 29.2], [97, 28.3]], "#c0392b", "McMahon Line", [96, 31.5]) +
    wline([[74.7, 32.5], [74.4, 31.4], [74.3, 29.5], [70.5, 27.5], [70, 24.6], [68.6, 23.6]], "#2f6db5", "Radcliffe Line", [56, 26]) + wline([[14.2, 53.9], [14.6, 51.5], [15, 50.8]], "#2f6db5", "Oder–Neisse", [16, 54]),
  cap: "The 49th Parallel (USA–Canada), 38th Parallel (the Koreas), Durand Line (Pakistan–Afghanistan), McMahon Line (India–China), Radcliffe Line (India–Pakistan), Oder–Neisse (Germany–Poland). Lines simplified." });
VISUAL = { mode: "world", VIS: { key: "worldgeo_photos_v1", word: "place", words: "places", search: "", quiz: "flag or place", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

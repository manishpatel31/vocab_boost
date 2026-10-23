/* World History & Who's Who — the river-valley civilisations, the voyages of discovery drawn on the world map, where religions
   began, the revolutions, the two World Wars and the travellers who came to India (drawn by study-visual.js and study-world.js).
   Places are approximate. place(), rows(), fail and KIT come from applyVisual in tools/workbook/lib.js. */
const wpins = L => L.map(([n, lo, la, note, side]) => [n, lo, la, note || "", side || ""]);

// L36 — river valleys, voyages, religions, monuments
place("L36", "River-valley", { k: "worldfig", title: "The four river-valley civilisations", vb: "440 60 420 230", maxw: 680, minw: 360,
  pins: wpins([["Mesopotamia", 44.4, 33.0, "Tigris–Euphrates · cuneiform"], ["Egypt", 31.2, 27.0, "Nile · hieroglyphs", "l"], ["Indus", 68.1, 27.3, "Harappa, Mohenjodaro"], ["China", 112.5, 35.0, "Huang He · oracle bones"]]),
  cap: "All four grew on great rivers between about 3500 and 1500 BCE — the fertile soil and water made farming surplus, and cities, possible." },
  KIT.photos("The ancient world in pictures", [["Great Pyramid of Giza", "Egypt"], ["Ziggurat of Ur", "Mesopotamia"], ["Code of Hammurabi", "Babylon"], ["Great Wall of China", "China"], ["Parthenon", "Athens"], ["Colosseum", "Rome"]]));
place("L36", "From Magna Carta", { k: "worldfig", title: "The voyages of discovery", minw: 640,
  under: KIT.warrow([[-6.3, 37], [-20, 28], [-45, 22], [-75.5, 24]], "#c0392b", "Columbus 1492", [-58, 33]) +
    KIT.warrow([[-9.1, 38.7], [-20, 10], [-5, -20], [18.5, -36], [35, -25], [40, -3], [58, 8], [75.8, 11.3]], "#2f6db5", "Vasco da Gama 1498", [-3, -28]) +
    KIT.warrow([[-6.3, 36.8], [-30, 0], [-50, -30], [-68.5, -52.8], [-100, -30], [-167, -8]], "#2f8f4e", "Magellan 1519–22", [-150, -20]) + KIT.warrow([[-170, -6], [160, 8], [124, 10.5]], "#2f8f4e"),
  pins: wpins([["Calicut", 75.78, 11.25, "1498"], ["Lisbon", -9.14, 38.72, "", "l"], ["Bahamas", -75.5, 24.0, "1492", "l"], ["Philippines", 124, 10.5, "Magellan killed, 1521"]]),
  cap: "Red: Columbus reached the Bahamas (1492). Blue: Vasco da Gama rounded the Cape of Good Hope to Calicut (1498). Green: Magellan's fleet crossed the Pacific; after his death in the Philippines, Elcano completed the first voyage round the world (1522). Routes simplified." });
place("L36", "Founders of religions", { k: "worldfig", title: "Where the great religions began", vb: "440 60 420 230", maxw: 680, minw: 360,
  pins: wpins([["Zoroastrianism", 53, 32, "Persia"], ["Confucianism", 117, 35.6, "Qufu, China"], ["Judaism, Christianity", 35.2, 31.8, "Jerusalem, Bethlehem", "l"], ["Islam", 39.8, 21.4, "Mecca, Medina"],
    ["Buddhism", 83.3, 27.5, "Lumbini"], ["Jainism", 85.2, 25.9, "Vaishali", "l"], ["Taoism", 112, 30, "China"]]),
  cap: "Judaism, Christianity and Islam all began in West Asia; Buddhism and Jainism in the Ganga valley; Confucianism and Taoism in China." },
  KIT.photos("Renaissance in pictures", [["Mona Lisa", "Leonardo da Vinci"], ["The Last Supper (Leonardo)", "Leonardo da Vinci"], ["David (Michelangelo)", "Michelangelo"], ["Sistine Chapel ceiling", "Michelangelo"], ["Printing press", "Gutenberg, c. 1440"], ["Martin Luther", "Reformation, 1517"]],
    { name: r => r[0].replace(/ \(.*\)$/, "") }));

// L29 — the revolutions on the map; the wars in pictures
const RV = [["Glorious Revolution", -0.13, 51.5, "London, 1688"], ["American Revolution", -75.16, 39.95, "Philadelphia, 1776"], ["French Revolution", 2.35, 48.86, "Paris, 1789"], ["Industrial Revolution", -2.24, 53.48, "England, c. 1760"],
  ["Russian Revolution", 30.3, 59.93, "Petrograd, 1917"], ["Chinese Revolution", 116.4, 39.9, "1911 and 1949"], ["Meiji Restoration", 139.7, 35.7, "Japan, 1868"], ["Unifications", 12.5, 41.9, "Italy 1870, Germany 1871"]];
place("L29", "Revolutions", { k: "worldfig", title: "Revolutions that changed the world", minw: 640,
  pins: RV.map(([n, lo, la], i) => [String(i + 1), lo, la, n, "n"]), legend: RV.map(([n, , , t], i) => [`${i + 1} ${n}`, t]), cap: "Four of the eight began in Europe. The French Revolution's slogan: Liberty, Equality, Fraternity." },
  KIT.photos("Revolutions in pictures", [["Storming of the Bastille", "14 July 1789"], ["Boston Tea Party", "1773"], ["United States Declaration of Independence", "4 July 1776"], ["Vladimir Lenin", "October 1917"], ["Sun Yat-sen", "1911"], ["Giuseppe Garibaldi", "Italy"]],
    { name: r => r[0].replace(/^United States /, "") }));
place("L29", "First World War", { k: "cards", title: "The two World Wars at a glance", rows: [
  ["First World War", "1914–18", "Spark: Archduke Franz Ferdinand shot at Sarajevo (28 June 1914). Ended by the Treaty of Versailles (1919); League of Nations formed.", "⚔️"],
  ["Allies (WW I)", "Britain, France, Russia", "Later Italy, Japan and the USA (1917).", "🤝"], ["Central Powers", "Germany, Austria-Hungary", "With the Ottoman Empire and Bulgaria.", "🛡️"],
  ["Second World War", "1939–45", "Began with Germany's invasion of Poland (1 Sept 1939). Atom bombs on Hiroshima (6 Aug) and Nagasaki (9 Aug 1945); the UN was born.", "💣"],
  ["Allies (WW II)", "Britain, France, USSR, USA, China", "The USA joined after Pearl Harbor (7 Dec 1941).", "🤝"], ["Axis", "Germany, Italy, Japan", "Hitler, Mussolini, Tojo.", "🛡️"]] },
  KIT.photos("The wars in pictures", [["Assassination of Archduke Franz Ferdinand", "Sarajevo, 1914"], ["Treaty of Versailles", "1919"], ["Normandy landings", "D-Day, 1944"], ["Attack on Pearl Harbor", "1941"], ["Atomic bombings of Hiroshima and Nagasaki", "August 1945"]],
    { name: r => ({ "Assassination of Archduke Franz Ferdinand": "Sarajevo, 1914", "Atomic bombings of Hiroshima and Nagasaki": "Hiroshima" })[r[0]] || r[0] }));

// L30 — the travellers' journeys to India
const HOME = { "Greece": [23.7, 38.0], "China": [108.9, 34.3], "Persia": [59.6, 36.3], "Venice": [12.3, 45.4], "Morocco": [-5.0, 34.0], "Italy": [12.3, 45.4], "Russia": [35.9, 56.9], "Portugal": [-9.1, 38.7], "England": [-0.1, 51.5], "France": [2.35, 48.86] };
const TV = rows("L30", "Foreign travellers").map(r => { let k = Object.keys(HOME).find(k => r[1].startsWith(k)); if (!k) fail("worldhist: no home for " + r[1]); if (k === "Venice") k = "Italy"; return [r[0], k, r[2]]; });
const homes = [...new Set(TV.map(r => r[1]))];
place("L30", "Foreign travellers", { k: "worldfig", title: "Where the travellers came from", vb: "380 40 520 260", maxw: 700, minw: 360,
  under: homes.map((h, i) => KIT.warrow([HOME[h], [(HOME[h][0] + 78) / 2, (HOME[h][1] + 22) / 2 + 6], [78, 22]], ["#c0392b", "#2f6db5", "#2f8f4e", "#c69214", "#7d4fb5", "#1f8a8a", "#a9805a", "#e07b39", "#5a6bb5", "#b55a8a"][i % 10])).join(""),
  pins: homes.map((h, i) => [String(i + 1), HOME[h][0], HOME[h][1], h, "n"]), legend: homes.map((h, i) => [`${i + 1} ${h}`, TV.filter(r => r[1] === h).map(r => `${r[0]} (${r[2]})`).join("; ")]),
  cap: "From Megasthenes (Greece, under Chandragupta Maurya) and the Chinese pilgrims Fa-Hien and Hiuen Tsang to Ibn Battuta (Morocco, under Muhammad bin Tughlaq) and the Europeans at the Mughal court." },
  KIT.photos("Travellers in pictures", [["Xuanzang", "Hiuen Tsang · Harsha's time"], ["Faxian", "Fa-Hien · Chandragupta II"], ["Ibn Battuta", "Muhammad bin Tughlaq"], ["Marco Polo", "Pandya kingdom"], ["Al-Biruni", "Kitab-ul-Hind"], ["Afanasy Nikitin", "Bahmani kingdom"]]));

VISUAL = { mode: "world", VIS: { key: "worldhist_photos_v1", word: "person", words: "people and places", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

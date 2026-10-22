/* International Organisations — membership maps, headquarters, the UN's organs, the WTO boxes and summit maps,
   written into study-intl-orgs.html by tools/workbook/apply-hand.js. place(), rows() and GEO as in the workbook apps' visual.js files. */
const P = (w, n, c) => [w, n, c];
const NAMES = GEO.worldNames();
// islands too small for the world map get a dot instead of a fill
const SMALL = { Maldives: [73.5, 3.2], Singapore: [103.82, 1.35], Bahrain: [50.55, 26.07], Mauritius: [57.55, -20.3], Seychelles: [55.45, -4.68], Comoros: [43.87, -11.88] };
const NE = { USA: "United States of America", UAE: "United Arab Emirates", UK: "United Kingdom" };
/** A membership map: members filled in, small islands and the headquarters pinned; vb crops to the region. */
const club = (title, members, o) => { const names = members.map(m => NE[m] || m);
  names.filter(n => n !== "India" && !NAMES.has(n) && !SMALL[n]).forEach(n => fail("intlorgs: no country " + n));
  const pins = names.filter(n => SMALL[n]).map(n => [n, SMALL[n][0], SMALL[n][1], "", o.left && o.left.includes(n) ? "l" : ""]).concat(o.pins || []);
  return { k: "worldfig", title, mark: names.filter(n => NAMES.has(n)), pins, vb: o.vb, minw: o.vb ? 300 : 640, maxw: o.maxw,
    legend: [[`${members.length} members`, members.join(" · ")]].concat(o.legend || []), cap: o.cap }; };

// L1 — the six organs and where the agencies sit
place("L1", "Six principal organs", { k: "cards", title: "The six principal organs",
  rows: [["General Assembly", "193 members", "One country, one vote", "🗳️"], ["Security Council", "15 members", "P5 with veto: USA, UK, France, Russia, China + 10 elected", "🛡️"],
    ["ECOSOC", "54 members", "Economic and social work", "📊"], ["Trusteeship Council", "Suspended 1994", "The last trust territory, Palau, became free", "⏸️"],
    ["International Court of Justice", "The Hague", "15 judges, 9-year terms — the only organ outside New York", "⚖️"], ["Secretariat", "Secretary-General", "António Guterres (Portugal), since 2017", "🏢"]] });
const AG = rows("L1", "Where UN agencies sit").filter(r => r[0] !== "Others");
place("L1", "Where UN agencies sit", { k: "worldfig", title: "Where the UN agencies sit", minw: 640,
  pins: AG.map((r, i) => { const [lo, la] = GEO.city(r[0]); return [String(i + 1), lo, la, r[0] + ": " + r[1], "n"]; })
    .concat([["Montreal", -73.57, 45.5, "ICAO"], ["London", -0.13, 51.51, "IMO", "l"], ["The Hague", 4.3, 52.08, "ICJ"]].map(p => [p[0], p[1], p[2], p[3], p[4] || ""])),
  legend: AG.map((r, i) => [`${i + 1} ${r[0]}`, r[1].replace(/\*/g, "")]),
  cap: "Geneva hosts the most; Rome has the food trio (FAO, IFAD, WFP); Vienna the atom and drugs (IAEA, UNODC); Nairobi is the only UN headquarters in the global South (UNEP, UN-Habitat)." });

// L2 — the WTO's three boxes, as traffic lights
place("L2", "WTO farm subsidy boxes", { k: "cards", title: "The three boxes, like traffic lights",
  rows: rows("L2", "WTO farm subsidy boxes").map(r => [r[0] + " box", r[0] === "Amber" ? "Capped" : "No limit", r[1].split(". ")[0], r[0] === "Green" ? "🟩" : r[0] === "Blue" ? "🟦" : "🟧"]),
  cap: "Green = go (allowed freely). Amber = slow down (capped: 10% of output value for developing countries, 5% for developed). India's MSP counts in the amber box." });

// L3–L6 — regional groups
place("L3", "Basics", club("SAARC on the map", ["Afghanistan", "Bangladesh", "Bhutan", "India", "Maldives", "Nepal", "Pakistan", "Sri Lanka"],
  { vb: "620 118 140 122", pins: [["Kathmandu", 85.32, 27.71, "Secretariat"]], cap: "Eight members; Afghanistan joined last (2007). Founded in Dhaka (1985); the secretariat is in Kathmandu." }));
place("L4", "Basics", club("BIMSTEC around the Bay of Bengal", ["Bangladesh", "Bhutan", "India", "Myanmar", "Nepal", "Sri Lanka", "Thailand"],
  { vb: "648 128 112 100", pins: [["Dhaka", 90.41, 23.81, "Secretariat"]], cap: "Five South Asian and two South-East Asian members, all on or near the Bay of Bengal. Not members: Pakistan, Maldives, Afghanistan." }));
place("L5", "IORA basics", club("IORA around the Indian Ocean", ["Australia", "Bangladesh", "Comoros", "France", "India", "Indonesia", "Iran", "Kenya", "Madagascar", "Malaysia", "Maldives",
  "Mauritius", "Mozambique", "Oman", "Seychelles", "Singapore", "Somalia", "South Africa", "Sri Lanka", "Tanzania", "Thailand", "UAE", "Yemen"],
  { vb: "515 120 390 230", maxw: 760, left: ["Comoros", "Seychelles"], pins: [["Ebene", 57.49, -20.24, "Secretariat", "l"]], cap: "23 members around the ocean, from South Africa to Australia. France is in through Réunion Island (2020); the secretariat is at Ebene, Mauritius." }));
place("L6", "ASEAN basics", club("ASEAN on the map", ["Indonesia", "Malaysia", "Philippines", "Singapore", "Thailand", "Brunei", "Vietnam", "Laos", "Myanmar", "Cambodia", "Timor-Leste"],
  { vb: "712 150 124 118", pins: [["Jakarta", 106.85, -6.2, "Secretariat", "l"]], cap: "The five founders (1967) were Indonesia, Malaysia, the Philippines, Singapore and Thailand; Timor-Leste became the 11th member in 2025." }));

// L7–L10 — BRICS, SCO, QUAD and I2U2, G7 and G20
place("L7", "Members (11)", club("BRICS members", ["Brazil", "Russia", "India", "China", "South Africa", "Egypt", "Ethiopia", "Iran", "UAE", "Saudi Arabia", "Indonesia"],
  { pins: [["NDB · Shanghai", 121.47, 31.23, "the BRICS bank"]], cap: "The original five, then Egypt, Ethiopia, Iran, the UAE and Saudi Arabia (2024) and Indonesia (2025). India hosts the 18th summit in 2026." }));
place("L8", "Basics", club("SCO members", ["China", "Russia", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Uzbekistan", "India", "Pakistan", "Iran", "Belarus"],
  { vb: "500 8 380 190", maxw: 760, pins: [["Beijing", 116.4, 39.9, "Secretariat"], ["Tashkent", 69.24, 41.3, "RATS", "l"]], cap: "Ten members across Eurasia; India and Pakistan joined in 2017, Iran in 2023 and Belarus in 2024." }));
place("L9", "QUAD facts", club("The Quad", ["India", "USA", "Japan", "Australia"], { cap: "Four democracies around the Indo-Pacific; their navies meet in the Malabar exercise." }));
place("L9", "I2U2", club("I2U2 — the 'West Asian Quad'", ["India", "Israel", "USA", "UAE"], { cap: "India, Israel, the USA and the UAE; begun in October 2021 after the Abraham Accords." }));
place("L10", "G7", club("The G7", ["USA", "UK", "France", "Germany", "Italy", "Canada", "Japan"], { pins: [["Évian 2026", 6.59, 46.4, "next summit"]],
  cap: "Seven rich democracies (the EU also attends). Russia's G8 years ended in 2014. India is invited as a guest." }));
place("L10", "Recent and next G20", club("The G20 and its summits", ["Argentina", "Australia", "Brazil", "Canada", "China", "France", "Germany", "India", "Indonesia", "Italy", "Japan", "Mexico", "Russia",
  "Saudi Arabia", "South Africa", "South Korea", "Turkey", "UK", "USA"],
  { pins: rows("L10", "Recent and next G20").map(r => { const c = r[1].split(",")[0].replace(/ \(.*\)$/, ""); const [lo, la] = GEO.city(c); return [r[0] + " " + c, lo, la, "", c === "Miami" ? "l" : ""]; }),
    legend: [["+ 2", "the European Union and the African Union (since 2023)"]], cap: "19 countries plus the EU and the AU. Summits: New Delhi 2023, Rio 2024, Johannesburg 2025 (the first in Africa), Miami 2026." }));

// L11 — the big blocs and where they sit
place("L11", "Security & political blocs", { k: "worldfig", title: "Where the blocs and bodies sit", minw: 640,
  pins: [["NATO · EU", 4.35, 50.85, "Brussels", "l"], ["Commonwealth", -0.13, 51.51, "London", "l"], ["African Union", 38.75, 9.02, "Addis Ababa"], ["GCC", 46.72, 24.69, "Riyadh", "l"],
    ["OPEC", 16.37, 48.21, "Vienna"], ["OECD · FATF", 2.35, 48.86, "Paris", "l"], ["APEC", 103.82, 1.35, "Singapore"], ["NAM", 20.46, 44.79, "Belgrade 1961"]],
  cap: "Brussels: NATO and the EU. Paris: OECD and FATF. Vienna: OPEC. India is not in the OECD or APEC, but is in FATF (2010)." },
  club("The Gulf Cooperation Council", ["Saudi Arabia", "UAE", "Qatar", "Kuwait", "Bahrain", "Oman"], { vb: "572 132 100 72", maxw: 520, pins: [["Riyadh", 46.72, 24.69, "Secretariat", "l"]], cap: "Six Gulf monarchies (1981); the secretariat is in Riyadh." }));
place("L1", "The UN", { k: "photos", title: "In pictures", items: [P("Headquarters_of_the_United_Nations", "UN Headquarters", "New York"), P("Peace_Palace", "Peace Palace", "The Hague — ICJ"),
  P("Palace_of_Nations", "Palais des Nations", "Geneva"), P("United_Nations_Security_Council", "Security Council chamber", "15 members"), P("António_Guterres", "António Guterres", "9th Secretary-General")] });
place("L2", "Bretton Woods", { k: "photos", title: "In pictures", items: [P("Bretton_Woods_Conference", "Bretton Woods, 1944", "Birth of the IMF and World Bank"),
  P("Centre_William_Rappard", "WTO headquarters", "Geneva"), P("Kristalina_Georgieva", "Kristalina Georgieva", "IMF"), P("Ngozi_Okonjo-Iweala", "Ngozi Okonjo-Iweala", "WTO")] });
VISUAL = { mode: "world", VIS: { key: "intlorgs_photos_v1", word: "organisation", words: "organisations", search: "", quiz: "place or person", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

/* Environment — levels of organisation, an animated food chain and the energy pyramids, the nitrogen cycle, the greenhouse
   effect, the AQI scale and the Red List, hotspots coloured on India's map, treaty cities and COP venues on the world map,
   timelines and photos (drawn by study-visual.js and study-world.js). Places are approximate.
   place(), rows(), fail and KIT come from applyVisual in tools/workbook/lib.js. */
const fig = (t, svg, cap, w) => ({ k: "info", title: t, html: `<figure class="fig wide" style="--minw:${w || 560}px;margin:0">${svg}</figure>`, cap });
const flow = (d, color, w, mk) => `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w || 3}" stroke-linecap="round"${mk ? ` marker-end="url(#${mk})"` : ""}/><path d="${d}" fill="none" stroke="#fff" stroke-width="1.2" stroke-dasharray="2 7" class="rvf" style="animation:rvflow 1.1s linear infinite"/>`;
const head = (id, color) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${color}"/></marker>`;
// numbered pins on the world map with a key under it
const wnum = (title, R, at, key, cap) => { const miss = R.filter(r => !at[r[0]]); if (miss.length) fail("env: no place for " + miss.map(r => r[0]).join(", "));
  return { k: "worldfig", title, minw: 640, pins: R.map((r, i) => [String(i + 1), at[r[0]][0], at[r[0]][1], r[0], "n"]), legend: R.map((r, i) => [`${i + 1} ${r[0]}`, key(r)]), cap }; };

// E1 — levels of organisation as nested rings; interactions as + / − cards
const LV = ["Organism", "Population", "Community", "Ecosystem", "Biome", "Biosphere"], LC = ["#c0503a", "#d4a017", "#2f8f4e", "#1f8a8a", "#2f6db5", "#7d4fb5"];
const rings = `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Levels of organisation from organism to biosphere">
  ${LV.map((n, i) => { const k = LV.length - 1 - i, r = 34 + k * 22; return `<circle cx="160" cy="150" r="${r}" fill="${LC[k]}" opacity="${.16 + .1 * (5 - k) / 5}" stroke="${LC[k]}" stroke-width="1.5" class="anim-in" style="animation-delay:${i * 120}ms"/>`; }).join("")}
  ${LV.map((n, i) => `<line x1="${160 + 34 + i * 22 - 6}" y1="${150 - 2}" x2="330" y2="${40 + i * 44}" stroke="${LC[i]}" stroke-width="1.2"/><circle cx="330" cy="${40 + i * 44}" r="4" fill="${LC[i]}"/>
    <text x="342" y="${44 + i * 44}" font-size="15" class="b" style="fill:${LC[i]}">${i + 1}. ${n}</text>`).join("")}
  <text x="160" y="155" text-anchor="middle" font-size="12" class="b">you</text></svg>`;
place("E1", "Levels of organisation", fig("From one organism to the whole biosphere", rings, "Each level holds the one inside it: a population is one species; a community is many species; add the non-living world and it is an ecosystem."));
const SIGN = { Mutualism: ["+ / +", "Both gain", "🤝"], Commensalism: ["+ / 0", "One gains, the other is unaffected", "🌿"], Parasitism: ["+ / −", "The parasite gains, the host is harmed", "🦠"],
  Predation: ["+ / −", "The predator eats the prey", "🐅"], Amensalism: ["0 / −", "One is harmed, the other is unaffected", "🍄"], Competition: ["− / −", "Both lose", "⚔️"] };
place("E1", "How species interact", { k: "cards", title: "Interactions at a glance", rows: Object.entries(SIGN).map(([n, [s, t, ic]]) => [n, s, t + " — e.g. " + (rows("E1", "How species interact").find(r => r[1] === n) || [""])[0].replace(/ \(.*\)$/, ""), ic]) });

// E2 — an animated grazing food chain with the 10% law, and the three pyramids
const CH = [["Grass", "🌾", "Producer", 10000], ["Grasshopper", "🦗", "Primary consumer", 1000], ["Frog", "🐸", "Secondary consumer", 100], ["Snake", "🐍", "Tertiary consumer", 10], ["Eagle", "🦅", "Top carnivore", 1]];
const chain = `<svg class="dg" viewBox="0 0 680 210" role="img" aria-label="Food chain from grass to eagle with energy falling ten times at each step">
  <defs>${head("fcA", "#c69214")}</defs>
  ${CH.map(([n, ic, role, j], i) => { const x = 20 + i * 134; return `<g class="anim-in" style="animation-delay:${i * 180}ms"><rect x="${x}" y="40" width="108" height="96" rx="14" class="card"/>
    <text x="${x + 54}" y="82" text-anchor="middle" font-size="32">${ic}</text><text x="${x + 54}" y="106" text-anchor="middle" font-size="14" class="b">${n}</text>
    <text x="${x + 54}" y="124" text-anchor="middle" font-size="10" class="mut">${role}</text>
    <rect x="${x + 54 - Math.max(8, Math.log10(j * 10) * 12)}" y="150" width="${Math.max(16, Math.log10(j * 10) * 24)}" height="14" rx="4" fill="#c69214" opacity=".8"/>
    <text x="${x + 54}" y="182" text-anchor="middle" font-size="12" class="b acc-t">${j.toLocaleString("en-IN")} J</text></g>` +
    (i < 4 ? flow(`M${x + 110} 88 L${x + 128} 88`, "#c69214", 3, "fcA") : ""); }).join("")}
  <text x="20" y="204" font-size="11" class="mut">Energy at each trophic level</text></svg>`;
place("E2", "Who plays which role", fig("A grazing food chain", chain, "Arrows show the flow of energy; only about 10% passes to the next level (Lindeman's 10% law). Most energy is lost as heat at each step, so food chains rarely have more than four or five links.", 640));
const pyr = (x, title, sub, levels, inv) => { const w = [176, 140, 104, 78]; return `<g transform="translate(${x},0)"><text x="85" y="22" text-anchor="middle" font-size="13" class="b">${title}</text><text x="85" y="38" text-anchor="middle" font-size="11" class="mut">${sub}</text>` +
  levels.map((l, i) => { const k = inv ? 3 - i : i, ww = w[k], y = 190 - (i + 1) * 36; return `<rect x="${85 - ww / 2}" y="${y}" width="${ww}" height="32" rx="4" fill="${["#2f8f4e", "#7fb36a", "#d4a017", "#c0503a"][i]}" opacity=".85" class="anim-in" style="animation-delay:${i * 120}ms"/>` +
    `<text x="85" y="${y + 21}" text-anchor="middle" font-size="10.5" class="b" style="fill:#fff">${l}</text>`; }).join("") + `</g>`; };
const pyrs = `<svg class="dg" viewBox="0 0 640 230" role="img" aria-label="Pyramids of energy, numbers in a tree and biomass in the sea">
  ${pyr(20, "Energy", "always upright", ["Producers", "Herbivores", "Carnivores", "Top"], false)}${pyr(230, "Numbers in a tree", "inverted", ["1 tree", "Many insects", "More birds", "Parasites"], true)}
  ${pyr(430, "Biomass in the sea", "inverted", ["Phytoplankton", "Zooplankton", "Small fish", "Big fish"], true)}
  <text x="20" y="220" font-size="11" class="mut">The bottom block is always the producers. Energy can never be inverted; numbers and biomass can.</text></svg>`;
place("E2", "Shapes of ecological pyramids", fig("Ecological pyramids", pyrs, "A pyramid of energy is always upright. One tree feeding many insects inverts the pyramid of numbers; fast-breeding phytoplankton invert the pyramid of biomass in the sea."));

// E3 — the nitrogen cycle; grasslands on the world map; air
const NC = `<svg class="dg" viewBox="0 0 660 330" role="img" aria-label="The nitrogen cycle">
  <defs>${head("ncA", "#2f6db5")}${head("ncB", "#2f8f4e")}${head("ncC", "#c0503a")}</defs>
  <rect x="0" y="0" width="660" height="120" fill="var(--blue-bg)" opacity=".5"/><rect x="0" y="230" width="660" height="100" fill="#a9805a" opacity=".22"/>
  <text x="330" y="40" text-anchor="middle" font-size="16" class="b">N₂ in the air (78%)</text>
  <text x="560" y="34" font-size="26">⚡</text><text x="545" y="58" font-size="11" class="mut">lightning</text>
  <text x="110" y="214" font-size="30">🌱</text><text x="80" y="232" font-size="11" class="b">Legumes</text>
  <text x="196" y="186" font-size="26">🐄</text><text x="232" y="180" font-size="10" class="mut">animals eat plants</text>
  ${[[60, "Ammonia (NH₃)", 270], [250, "Nitrite (NO₂⁻)", 290], [450, "Nitrate (NO₃⁻)", 270]].map(([x, t, y]) => `<rect x="${x}" y="${y}" width="150" height="34" rx="10" class="card"/><text x="${x + 75}" y="${y + 22}" text-anchor="middle" font-size="13" class="b">${t}</text>`).join("")}
  ${flow("M150 60 C120 110,110 160,120 188", "#2f6db5", 3, "ncA")}
  <text x="20" y="130" font-size="11" class="b" style="fill:#2f6db5">Fixation</text><text x="20" y="144" font-size="10" class="mut">Rhizobium · Azotobacter</text><text x="20" y="157" font-size="10" class="mut">Anabaena · Nostoc</text>
  ${flow("M210 287 L246 299", "#2f8f4e", 3, "ncB")}<text x="196" y="320" font-size="10" class="mut">Nitrosomonas</text>
  ${flow("M400 300 L446 289", "#2f8f4e", 3, "ncB")}<text x="398" y="320" font-size="10" class="mut">Nitrobacter</text>
  ${flow("M520 268 C540 200,520 120,470 62", "#c0503a", 3, "ncC")}<text x="540" y="160" font-size="11" class="b" style="fill:#c0503a">Denitrification</text><text x="540" y="174" font-size="10" class="mut">Pseudomonas</text>
  ${flow("M450 285 C400 240,200 240,146 226", "#2f8f4e", 3, "ncB")}<text x="330" y="222" text-anchor="middle" font-size="10" class="mut">plants take up nitrate</text>
  ${flow("M570 64 C590 150,580 220,562 266", "#2f6db5", 3, "ncA")}
  <text x="20" y="250" font-size="11" class="b" style="fill:#2f8f4e">Nitrification</text></svg>`;
place("E3", "Nitrogen cycle", fig("The nitrogen cycle", NC, "Bacteria fix N₂ into ammonia; Nitrosomonas turns ammonia into nitrite and Nitrobacter nitrite into nitrate, which plants absorb; Pseudomonas returns nitrogen to the air.", 600));
const GR = { "Prairies": [-100, 45], "Pampas": [-62, -35], "Steppes": [60, 50], "Veld": [27, -27], "Downs": [146, -27], "Canterbury": [171.5, -43.6], "Llanos": [-68, 7], "Campos": [-50, -20], "Puszta": [20, 47], "Savanna": [33, -3] };
place("E3", "Grasslands of the world", wnum("Grasslands of the world", rows("E3", "Grasslands of the world"), GR, r => r[1], "Temperate grasslands (prairies, pampas, steppes, veld, downs) lie in the middle latitudes; tropical grasslands (savanna, llanos, campos) near the tropics."),
  KIT.photos("Biomes in pictures", [["Tropical rainforest", "Amazon, Congo"], ["Savanna", "East Africa"], ["Prairie", "North America"], ["Taiga", "Siberia, Canada"], ["Tundra", "The Arctic"], ["Sahara", "Hot desert"]]));
place("E3", "Air and the cycles", { k: "bars", title: "What dry air is made of", unit: "%", left: 150, hi: 1, sort: false,
  rows: [["Nitrogen", 78.08, ""], ["Oxygen", 20.95, ""], ["Argon", 0.93, ""], ["Carbon dioxide", 0.04, "over 420 ppm"]], cap: "Nitrogen and oxygen make up 99% of dry air." });

// E4 — hotspots on India's map; the Red List scale; sacred groves
const HS = { "Himalaya": ["#2f6db5", "JK LA HP UT SK"], "Indo-Burma": ["#2f8f4e", "AR AS NL MN MZ TR ML"], "Western Ghats and Sri Lanka": ["#c69214", "KL GA"], "Sundaland": ["#c0503a", "AN"] };
const hf = {}; Object.values(HS).forEach(([c, ids]) => ids.split(" ").forEach(id => { hf[id] = c; }));
place("E4", "India's four biodiversity hotspots", { k: "mapfig", title: "India's four biodiversity hotspots", fill: hf, legend: Object.entries(HS).map(([n, [c]]) => [c, n]),
  under: `<path d="${KIT.path([[73.6, 21], [73.4, 18.5], [73.9, 15.8], [74.6, 13.5], [75.6, 11.6], [76.8, 9.5], [77.4, 8.2]])}" fill="none" stroke="#c69214" stroke-width="12" stroke-linecap="round" opacity=".55"/>`,
  cap: "States coloured roughly, by the hotspot that covers them. The Western Ghats band runs down the west coast from Gujarat to Kanyakumari; Sundaland reaches the Nicobar Islands." });
const RL = [["EX", "#000"], ["EW", "#542344"], ["CR", "#d81e05"], ["EN", "#fc7f3f"], ["VU", "#f9e814"], ["NT", "#cce226"], ["LC", "#60c659"], ["DD", "#d1d1c6"], ["NE", "#fff"]];
const IU = rows("E4", "IUCN Red List");
const red = `<svg class="dg" viewBox="0 0 680 150" role="img" aria-label="IUCN Red List categories from extinct to least concern">
  ${RL.map(([c, col], i) => { const r = IU.find(x => x[0] === c) || [c, c]; const x = 10 + i * 74; return `<g class="anim-in" style="animation-delay:${i * 80}ms"><circle cx="${x + 32}" cy="50" r="28" fill="${col}" stroke="var(--rule)"/>
    <text x="${x + 32}" y="56" text-anchor="middle" font-size="15" font-weight="800" style="fill:${["EX", "EW", "CR"].includes(c) ? "#fff" : "#222"}">${c}</text>
    ${r[1].split(" ").reduce((a, w) => { const l = a[a.length - 1]; if (l && (l + " " + w).length <= 11) a[a.length - 1] = l + " " + w; else a.push(w); return a; }, []).map((t, k) => `<text x="${x + 32}" y="${98 + k * 13}" text-anchor="middle" font-size="10.5" class="mut">${t}</text>`).join("")}</g>`; }).join("")}
  <path d="M170 12 L380 12" stroke="#d81e05" stroke-width="2"/><text x="275" y="9" text-anchor="middle" font-size="10" class="b" style="fill:#d81e05">THREATENED</text></svg>`;
place("E4", "IUCN Red List", fig("The IUCN Red List scale", red, "From Extinct to Least Concern. CR, EN and VU together are the 'threatened' categories. The Red Data Book's pink pages list critically endangered species.", 600));
place("E4", "Sacred groves", KIT.stateMap("Sacred groves by local name", rows("E4", "Sacred groves"), { max: 1 }));

// E5 — the AQI colour scale; E6 — noise limits
const AQ = [["Good", "#2e9d4c"], ["Satisfactory", "#9acd32"], ["Moderate", "#f2c14e"], ["Poor", "#f28c28"], ["Very poor", "#d7301f"], ["Severe", "#7e1416"]];
const AB = rows("E5", "India's AQI bands");
const aqi = `<svg class="dg" viewBox="0 0 680 130" role="img" aria-label="India's AQI colour bands">
  ${AQ.map(([n, c], i) => { const r = AB.find(x => x[0] === n) || [n, ""]; const x = 10 + i * 110; return `<rect x="${x}" y="30" width="108" height="44" ${i === 0 ? 'rx="10"' : ""} fill="${c}" class="anim-in" style="animation-delay:${i * 90}ms"/>
    <text x="${x + 54}" y="57" text-anchor="middle" font-size="14" font-weight="800" style="fill:${i > 3 || i === 0 ? "#fff" : "#222"}">${r[1]}</text>
    <text x="${x + 54}" y="96" text-anchor="middle" font-size="13" class="b">${n}</text>`; }).join("")}
  <text x="10" y="20" font-size="11" class="mut">AQI value</text><text x="10" y="122" font-size="11" class="mut">One number, one colour, one description — launched October 2014</text></svg>`;
place("E5", "India's AQI bands", fig("The Air Quality Index scale", aqi, "Eight pollutants feed the AQI: PM10, PM2.5, NO₂, SO₂, CO, O₃, NH₃ and lead. Delhi's winter smog often reaches 'severe'.", 600));
const NZ = rows("E6", "Noise limits");
place("E6", "Noise limits", { k: "bars", title: "Noise limits by day", unit: "dB(A)", left: 150, hi: 1, sort: false, rows: NZ.map(r => [r[0], parseInt(r[1], 10), r[2] || ""]),
  cap: "Night limits are lower (70, 55, 45 and 40 dB). Silence zones: at least 100 m around hospitals, schools and courts." });
place("E6", "Pollution diseases", { k: "cards", title: "Pollutant → disease", rows: rows("E6", "Pollution diseases").map(r => [r[0].replace(/ \(.*\)$/, ""), r[1], "", ({ Mercury: "☿", Cadmium: "⚗️", Lead: "🔩", Arsenic: "☠️" })[r[1]] || "⚠️"]) });

// E7 — the greenhouse effect, animated
const GH = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="The greenhouse effect">
  <defs>${head("ghY", "#e0a040")}${head("ghR", "#c0392b")}</defs>
  <circle cx="60" cy="50" r="34" fill="#f6c343"/><text x="60" y="56" text-anchor="middle" font-size="12" class="b" style="fill:#5a3b00">Sun</text>
  <rect x="0" y="110" width="660" height="34" fill="#9fb8d8" opacity=".35"/><text x="640" y="132" text-anchor="end" font-size="12" class="b" style="fill:#2f6db5">Greenhouse gases: CO₂, CH₄, N₂O, water vapour</text>
  <path d="M0 250 Q330 220 660 250 L660 300 L0 300Z" fill="#7fb36a" opacity=".55"/><text x="330" y="285" text-anchor="middle" font-size="13" class="b">Earth's surface warms</text>
  ${flow("M90 80 L258 234", "#e0a040", 4, "ghY")}<text x="150" y="190" font-size="11" class="b" style="fill:#b07a10">sunlight in</text>
  ${flow("M300 236 L379 72", "#c0392b", 3, "ghR")}<text x="385" y="64" font-size="11" class="b" style="fill:#c0392b">some heat (infrared) escapes</text>
  ${flow("M420 236 L470 130 L519 234", "#c0392b", 3, "ghR")}<text x="490" y="190" font-size="11" class="b" style="fill:#c0392b">heat trapped and sent back</text>
</svg>`;
place("E7", "Greenhouse gases", fig("The greenhouse effect", GH, "Sunlight warms the ground; the ground gives off heat (infrared); greenhouse gases absorb some of it and send it back down. More gas, more warming.", 600));
const LY = `<svg class="dg" viewBox="0 0 660 260" role="img" aria-label="Layers of the atmosphere with the ozone layer">
  ${[["Thermosphere", 80, 600, "#e8e0f5", "Auroras; the ISS orbits here"], ["Mesosphere", 50, 80, "#dfe8f7", "Meteors burn up"], ["Stratosphere", 12, 50, "#e3f1fb", "Ozone layer (15–35 km); jets fly low here"], ["Troposphere", 0, 12, "#e8f4e4", "All weather"]]
    .map(([n, a, b, c, t], i) => { const y = 10 + i * 60; return `<rect x="60" y="${y}" width="590" height="58" fill="${c}"/><text x="72" y="${y + 26}" font-size="14" class="b">${n}</text><text x="72" y="${y + 44}" font-size="11" class="mut">${t}</text><text x="52" y="${y + 58}" text-anchor="end" font-size="10" class="mut">${a} km</text>`; }).join("")}
  <rect x="300" y="${10 + 2 * 60 + 8}" width="340" height="16" rx="8" fill="#2f6db5" opacity=".45"><animate attributeName="opacity" values=".3;.65;.3" dur="3s" repeatCount="indefinite"/></rect>
  <text x="470" y="${10 + 2 * 60 + 20}" text-anchor="middle" font-size="11" class="b" style="fill:#fff">O₃ ozone layer — blocks UV-B</text></svg>`;
place("E7", "Layers of the atmosphere", fig("Where the ozone layer sits", LY, "Ozone (O₃) in the stratosphere absorbs harmful ultraviolet rays. CFCs thin it; the Montreal Protocol (1987) phases them out. Ozone is measured in Dobson units.", 560));

// E8 — treaties on a timeline and on the world map
const TC = { "Ramsar Convention": [50.66, 36.9], "Stockholm Conference": [17.2, 59.8], "CITES": [-77.04, 38.9], "Bonn Convention": [7.1, 50.73], "Vienna Convention": [16.37, 48.21],
  "Montreal Protocol": [-73.57, 45.5], "Basel Convention": [7.59, 47.56], "Earth Summit": [-43.2, -22.9], "UN Convention to Combat": [1.6, 49.3], "Kyoto Protocol": [135.77, 35.01],
  "Rotterdam Convention": [4.48, 51.92], "Cartagena Protocol": [-75.51, 10.39], "Stockholm Convention": [19.0, 58.8], "Nagoya Protocol": [136.9, 35.18], "Minamata Convention": [130.4, 32.2],
  "Paris Agreement": [2.9, 48.2], "Kigali Amendment": [30.06, -1.94], "Kunming-Montreal": [102.7, 25.04] };
const TR = rows("E8", "Treaties and summits").filter(r => Object.keys(TC).some(k => r[0].startsWith(k)));
const tat = {}; TR.forEach(r => { tat[r[0]] = TC[Object.keys(TC).find(k => r[0].startsWith(k))]; });
place("E8", "Treaties and summits", { k: "tlfig", title: "Environment treaties, year by year", rows: rows("E8", "Treaties and summits").map(r => [parseInt(r[1], 10), r[0], ""]).filter(r => r[0]),
  cap: "From Ramsar (1971) and Stockholm (1972) to Paris (2015) and the Kunming-Montreal framework (2022)." },
  wnum("Where the treaties are named after", TR, tat, r => r[1], "Most treaties take the name of the city where they were signed. Cartagena's protocol was finally adopted in Montreal; Minamata is named after the Japanese bay poisoned by mercury."),
  { k: "worldfig", title: "Europe, closer", vb: "425 50 145 85", minw: 300, maxw: 620, pins: TR.map((r, i) => [String(i + 1), tat[r[0]][0], tat[r[0]][1], r[0], "n"]).filter(p => p[1] > -12 && p[1] < 35 && p[2] > 35),
    cap: "The same numbers, zoomed in on Europe: Stockholm (2, 13), Bonn (4), Vienna (5), Basel (7), Paris (9, 16) and Rotterdam (11)." });

// E9 — COP venues and the bodies' headquarters
const CV = { "Berlin": [13.4, 52.52], "Kyoto": [135.77, 35.01], "New Delhi": [77.21, 28.61], "Copenhagen": [12.57, 55.68], "Paris": [2.35, 48.86], "Madrid": [-3.7, 40.42], "Glasgow": [-4.25, 55.86],
  "Sharm el-Sheikh": [34.33, 27.91], "Dubai": [55.27, 25.2], "Baku": [49.87, 40.41], "Belém": [-48.5, -1.46] };
const CO = rows("E9", "UN climate COPs"), cat = {}; CO.forEach(r => { const k = Object.keys(CV).find(k => r[1].startsWith(k)); if (!k) fail("env: no place for " + r[1]); cat[r[0]] = CV[k]; });
place("E9", "UN climate COPs", wnum("Climate COPs on the map", CO, cat, r => r[1], "COP8 (2002) is the only climate COP India has hosted. COP31 (2026) goes to Antalya, Türkiye."));
const HQW = { "Nairobi": [36.82, -1.29], "Geneva": [6.14, 46.2], "Gland": [6.27, 46.42], "Amsterdam": [4.9, 52.37], "Washington": [-77.04, 38.9], "Incheon": [126.64, 37.39], "Gurugram": [77.03, 28.46],
  "Bonn": [7.1, 50.73], "Montreal": [-73.57, 45.5] };
const BO = rows("E9", "Where the world"), bat = {}; BO.forEach(r => { const k = Object.keys(HQW).find(k => r[1].startsWith(k)); if (!k) fail("env: no place for " + r[1]); bat[r[0]] = HQW[k]; });
place("E9", "Where the world", wnum("Where the environment bodies sit", BO, bat, r => r[1], "UNEP is the only big UN body headquartered in the Global South (Nairobi). The International Solar Alliance is the first treaty-based body headquartered in India."));

// E10 — milestones, movements and the people
place("E10", "India's green milestones", { k: "tlfig", title: "India's green laws and steps", rows: rows("E10", "India's green milestones").map(r => [parseInt(r[1], 10), r[0], ""]).filter(r => r[0]),
  cap: "The Environment (Protection) Act of 1986 came after the Bhopal gas tragedy (1984)." });
place("E10", "Environmental movements", KIT.stateMap("Where the movements began", rows("E10", "Environmental movements").map(r => [r[0].replace(/ \(\d+\)$/, ""), r[1]]), { max: 1,
  cap: "Khejarli (Rajasthan, 1730), Chipko (Uttarakhand, 1973), Silent Valley (Kerala), Appiko (Karnataka, 1983), Jungle Bachao (Jharkhand, 1982). The Narmada Bachao Andolan spans three states." }));
place("E10", "Indian environmentalists", KIT.photos("Environmentalists in pictures", rows("E10", "Indian environmentalists"), { cap: r => r[1].replace(/ — .*$/, "") }));

const ALL = rows("E4", "Sacred groves").map(r => [r[0], r[1], "Sacred grove", r[2] || "Sacred grove", "E4"]).concat(rows("E10", "Environmental movements").filter(r => KIT.code(r[1])).map(r => [r[0], r[1], "Movement", r[2] || "Movement", "E10"]));
VISUAL = { mode: "world", VIS: { key: "env_photos_v1", word: "place", words: "groves, movements and people", search: "", quiz: "photo", ask: "Which state —", rows: ALL, tabs: [["vmap", "Map quiz"], ["vphotos", "Photo quiz"]] } };

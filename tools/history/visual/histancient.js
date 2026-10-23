/* Ancient India — a Stone Age time strip, prehistoric and Harappan sites on the map, the Rigvedic rivers, the Buddha's
   life and the councils, Ashoka's edicts, dynasties and universities, and photos (drawn by study-visual.js, study-world.js
   and study-rivers.js). Places are approximate. place(), rows(), fail and KIT come from applyVisual in tools/workbook/lib.js. */
const fig = (t, svg, cap, w) => ({ k: "info", title: t, html: `<figure class="fig wide" style="--minw:${w || 560}px;margin:0">${svg}</figure>`, cap });
const pins = (L, side) => L.map(([n, lo, la, note], i) => [n, lo, la, note || "", (side || {})[n] || ""]);

// L1 — the Stone Age as a strip; the prehistoric sites
const AGES = [["Palaeolithic", "Old Stone", "~2 mya – 12,000 BCE", "#a9805a", "Hand-axes, cleavers · hunting and gathering"], ["Mesolithic", "Middle Stone", "12,000 – 10,000 BCE", "#c69214", "Microliths · first tamed animal (dog)"],
  ["Neolithic", "New Stone", "10,000 – 2,500 BCE", "#2f8f4e", "Polished tools, pottery · farming, villages"], ["Chalcolithic", "Stone + copper", "2,500 – 700 BCE", "#c0503a", "Copper and stone · painted pottery"]];
const strip = `<svg class="dg" viewBox="0 0 680 190" role="img" aria-label="The four ages of stone">
  ${AGES.map(([n, s, d, c, t], i) => { const x = 10 + i * 166; return `<g class="anim-in" style="animation-delay:${i * 150}ms"><path d="M${x} 40 h150 l14 30 l-14 30 h-150 l14 -30z" fill="${c}" opacity=".9"/>
    <text x="${x + 82}" y="66" text-anchor="middle" font-size="15" font-weight="800" style="fill:#fff">${n}</text><text x="${x + 82}" y="85" text-anchor="middle" font-size="11" style="fill:#fff">${s}</text>
    <text x="${x + 82}" y="122" text-anchor="middle" font-size="11.5" class="b">${d}</text>
    ${t.split(" · ").map((l, k) => `<text x="${x + 82}" y="${142 + k * 15}" text-anchor="middle" font-size="10.5" class="mut">${l}</text>`).join("")}</g>`; }).join("")}
  <text x="10" y="24" font-size="11" class="mut">Older ←</text><text x="670" y="24" text-anchor="end" font-size="11" class="mut">→ Newer</text></svg>`;
place("L1", "Stone Age at a glance", fig("The Stone Age in one strip", strip, "Tools tell the age: big hand-axes (Palaeolithic), tiny microliths (Mesolithic), polished tools and pottery (Neolithic), then copper (Chalcolithic)."));
place("L1", "Firsts", { k: "mapfig", title: "Prehistoric sites on the map",
  pins: pins([["Bhimbetka", 77.61, 22.94, "Rock paintings"], ["Kurnool caves", 78.1, 15.4, "Earliest fire"], ["Lahuradewa", 82.98, 26.77, "Earliest rice"], ["Mehrgarh", 67.62, 29.38, "Wheat, barley"],
    ["Burzahom", 74.87, 34.17, "Pit dwellings"], ["Pallavaram", 80.15, 12.97, "First Palaeolithic tool"], ["Sanganakallu", 76.95, 15.18, "Ash mounds"], ["Chirand", 84.85, 25.71, "Neolithic"], ["Inamgaon", 74.2, 18.6, "Chalcolithic"]],
    { Mehrgarh: "l", "Kurnool caves": "l", Sanganakallu: "l", Inamgaon: "l" }), cap: "Mehrgarh (now in Pakistan) has the earliest farming in the subcontinent; Lahuradewa (UP) the earliest rice." },
  KIT.photos("Prehistory in pictures", [["Bhimbetka rock shelters", "Madhya Pradesh"], ["Hand axe", "Palaeolithic tool"], ["Microlith", "Mesolithic blades"], ["Mehrgarh", "Balochistan"], ["Burzahom archaeological site", "Kashmir"]],
    { name: r => r[0].replace(/ (rock shelters|archaeological site)$/, "") }));

// L2 — the Harappan sites on a close world map; the finds in pictures; a town plan
const IVC = { "Harappa": [72.86, 30.63], "Mohenjodaro": [68.14, 27.33], "Lothal": [72.25, 22.52], "Dholavira": [70.21, 23.89], "Kalibangan": [74.13, 29.47], "Rakhigarhi": [76.12, 29.29],
  "Banawali": [75.4, 29.6], "Chanhudaro": [68.32, 26.17], "Surkotada": [70.83, 23.62], "Ropar": [76.52, 30.97], "Alamgirpur": [77.48, 29.0], "Sutkagendor": [61.95, 25.5], "Daimabad": [74.7, 19.51], "Manda": [74.75, 32.9] };
const ST = rows("L2", "Site").map(r => { const k = Object.keys(IVC).find(k => r[0].startsWith(k)); if (!k) fail("histancient: no place for " + r[0]); return [k, r[1], r[2]]; });
place("L2", "Site", { k: "worldfig", title: "Harappan sites on the map", vb: "618 125 82 72", minw: 320, maxw: 620,
  pins: ST.map((r, i) => [String(i + 1), IVC[r[0]][0], IVC[r[0]][1], r[0], "n"]), legend: ST.map((r, i) => [`${i + 1} ${r[0]}`, r[1].replace(" · ", ", ")]),
  cap: "The extremes: Sutkagendor (west), Alamgirpur (east), Manda (north), Daimabad (south). Most sites in India are in Gujarat, Rajasthan and Haryana." },
  KIT.photos("Harappan finds in pictures", [["Great Bath, Mohenjo-daro", "Mohenjodaro"], ["Dancing Girl (sculpture)", "Bronze · Mohenjodaro"], ["Pashupati seal", "Mohenjodaro"], ["Priest-King (sculpture)", "Steatite · Mohenjodaro"],
    ["Dholavira", "Gujarat · UNESCO"], ["Lothal", "The dockyard"]], { name: r => r[0].replace(/ \(sculpture\)$/, "").replace(/, Mohenjo-daro$/, "") }));
const town = `<svg class="dg" viewBox="0 0 640 260" role="img" aria-label="A Harappan town: citadel on the west, lower town on the east">
  <rect x="20" y="40" width="170" height="180" rx="6" class="abg"/><text x="105" y="30" text-anchor="middle" font-size="13" class="b">Citadel (west, raised)</text>
  <rect x="45" y="70" width="70" height="40" rx="4" fill="#2f6db5" opacity=".55"/><text x="80" y="95" text-anchor="middle" font-size="10" class="b" style="fill:#fff">Great Bath</text>
  <rect x="45" y="130" width="120" height="50" rx="4" fill="#c69214" opacity=".7"/><text x="105" y="160" text-anchor="middle" font-size="10" class="b" style="fill:#fff">Granary</text>
  <rect x="230" y="40" width="390" height="180" rx="6" class="gbg"/><text x="425" y="30" text-anchor="middle" font-size="13" class="b">Lower town (east) — houses</text>
  ${[0, 1, 2, 3, 4, 5].map(i => `<line x1="${270 + i * 60}" y1="40" x2="${270 + i * 60}" y2="220" stroke="#a9805a" stroke-width="5" opacity=".6"/>`).join("")}
  ${[0, 1, 2].map(i => `<line x1="230" y1="${80 + i * 55}" x2="620" y2="${80 + i * 55}" stroke="#a9805a" stroke-width="5" opacity=".6"/>`).join("")}
  <path d="M230 245 H620" stroke="#2f6db5" stroke-width="3" stroke-dasharray="6 4"/><text x="425" y="240" text-anchor="middle" font-size="11" class="b" style="fill:#2f6db5">covered drains along the streets</text>
  <text x="425" y="135" text-anchor="middle" font-size="11" class="mut">streets meet at right angles — a grid</text></svg>`;
place("L2", "Town planning", fig("How a Harappan town was laid out", town, "A raised citadel on the west, a lower town of houses on the east, a grid of streets, covered drains and burnt bricks in the ratio 4:2:1."));

// L3 — the Rigvedic rivers on the river map
const VED = { "Indus": "Sindhu — the most mentioned river", "Jhelum": "Vitasta", "Chenab": "Askini (Chandrabhaga)", "Ravi": "Parushni (Iravati)", "Beas": "Vipasha", "Sutlej": "Shutudri", "Yamuna": "Yamuna — mentioned a few times", "Ganga": "Ganga — mentioned once in the Rigveda" };
place("L3", "Rivers in the Rigveda", { k: "rivermap", title: "The rivers of the Rigveda", show: Object.keys(VED), hl: Object.keys(VED), label: ["Indus", "Jhelum", "Chenab", "Beas", "Sutlej", "Yamuna", "Ganga"], vb: "20 0 300 290", info: VED,
  cap: "Tap a river for its Vedic name. The early Vedic people lived in the land of seven rivers (Sapta-Sindhu); later they moved east into the Ganga–Yamuna doab." });
place("L3", "The four Vedas", { k: "cards", title: "The four Vedas", rows: [["Rigveda", "Hymns · Hotri", "1,028 hymns in 10 mandalas; the oldest", "📜"], ["Yajurveda", "Rituals · Adhvaryu", "Prose and verse; Shukla and Krishna", "🔥"],
  ["Samaveda", "Melodies · Udgatri", "The root of Indian music", "🎶"], ["Atharvaveda", "Charms · Brahma", "Medicine and magic; the people's Veda", "🌿"]] });

// L4 — the Buddha's life and the councils
const BU = [["Lumbini", "Born · now in Nepal"], ["Bodh Gaya", "Enlightenment under the Bodhi tree"], ["Sarnath", "First sermon — Dharmachakra Pravartana"], ["Kushinagar", "Mahaparinirvana (death)"],
  ["Rajgir", "1st council · 483 BCE · Ajatashatru"], ["Vaishali", "2nd council · 383 BCE · Kalashoka"], ["Pataliputra", "3rd council · 250 BCE · Ashoka"], ["Kundalvana", "4th council · ~72 CE · Kanishka"]];
place("L4", "Four Buddhist Councils", KIT.numbered("The Buddha's life and the four councils", BU, { Lumbini: [83.28, 27.48], "Bodh Gaya": [84.99, 24.7], Sarnath: [83.02, 25.38], Kushinagar: [83.89, 26.74],
    Rajgir: [85.42, 25.03], Vaishali: [85.13, 25.99], Pataliputra: [85.14, 25.6], Kundalvana: [74.9, 34.2] }, { cap: "1–4: the four great places of the Buddha's life; 5–8: the four councils in order. Use ＋ or ⛶ to separate the Bihar cluster." }),
  KIT.photos("Buddhist sites in pictures", [["Mahabodhi Temple", "Bodh Gaya"], ["Dhamek Stupa", "Sarnath"], ["Lumbini", "Birthplace"], ["Mahaparinirvana Temple", "Kushinagar"], ["Saptaparni Cave", "Rajgir · first council"]]));

// L5 — Ashoka's edicts and the empire
place("L5", "Ashoka's inscriptions", { k: "mapfig", title: "Where Ashoka's edicts stand",
  pins: pins([["Girnar", 70.53, 21.52, "Major rock edict"], ["Kalsi", 77.85, 30.52, "Major rock edict"], ["Shahbazgarhi", 72.17, 34.22, "Kharosthi script"], ["Dhauli", 85.84, 20.19, "Kalinga edict"],
    ["Jaugada", 84.83, 19.53, "Kalinga edict"], ["Sopara", 72.8, 19.42, ""], ["Maski", 76.66, 15.96, "Name 'Ashoka' appears"], ["Sarnath", 83.02, 25.38, "Lion capital"], ["Sanchi", 77.74, 23.48, "Stupa, pillar"],
    ["Rummindei", 83.28, 27.48, "Lumbini pillar"], ["Yerragudi", 77.7, 15.2, ""]], { Shahbazgarhi: "l", Girnar: "l", Sopara: "l", Maski: "l", Rummindei: "l", Jaugada: "l" }),
  cap: "Rock edicts on the frontiers, pillars in the heartland. The Maski edict was the first to name 'Ashoka'; James Prinsep read the Brahmi script in 1837." },
  KIT.photos("The Mauryas in pictures", [["Lion Capital of Ashoka", "Sarnath — the national emblem"], ["Sanchi Stupa", "Begun by Ashoka"], ["Dhauli", "Kalinga edicts"], ["Rampurva capitals", "Bull capital"], ["Didarganj Yakshi", "Mauryan polish"]],
    { name: r => r[0].replace(/ capitals$/, "") }));

// L6 — dynasties after the Mauryas; the Sangam kingdoms; two schools of art
place("L6", "Dynasties after", { k: "mapfig", title: "After the Mauryas: the main seats of power",
  pins: pins([["Vidisha", 77.81, 23.52, "Sunga"], ["Paithan", 75.38, 19.48, "Satavahana"], ["Peshawar", 71.57, 34.01, "Kushana capital"], ["Mathura", 77.67, 27.49, "Kushana"], ["Sakala", 74.52, 32.49, "Menander"],
    ["Girnar", 70.53, 21.52, "Rudradaman (Shaka)"], ["Udayagiri", 85.79, 20.26, "Kharavela"]], { Peshawar: "l", Sakala: "l", Girnar: "l", Paithan: "l" }) });
place("L6", "Sangam Age", { k: "mapfig", title: "The three Sangam kingdoms", vb: "90 380 240 230", fill: { KL: "#e0a040", TN: "#c0503a" },
  pins: pins([["Vanji (Chera)", 76.2, 10.2, "port Muziris"], ["Uraiyur (Chola)", 78.68, 10.83, "port Puhar"], ["Madurai (Pandya)", 78.12, 9.93, "port Korkai"]], { "Vanji (Chera)": "l" }),
  cap: "Chera in the west (Kerala), Chola in the Kaveri delta, Pandya in the far south. The three Sangams of poets met at Madurai." });
place("L6", "Gandhara", KIT.photos("Gandhara and Mathura side by side", [["Gandhara Buddha (Tokyo)", "Gandhara · grey schist, wavy hair"], ["Gandhara art", "Greek influence"], ["Mathura art", "Red sandstone · Indian"], ["Bodhisattva Maitreya (Mathura)", "Mathura"]],
  { name: r => r[0].replace(/ \(.*\)$/, "") }));

// L7 — the Guptas in pictures
place("L7", "Science, art and letters", KIT.photos("The Gupta age in pictures", [["Iron pillar of Delhi", "Rust-free iron"], ["Dashavatara Temple, Deogarh", "One of the first stone temples"], ["Ajanta Caves", "Paintings"],
  ["Udayagiri Caves", "Varaha panel"], ["Aryabhata", "Statue at IUCAA, Pune"], ["Sanchi", "Temple 17"]], { name: r => r[0].replace(/, Deogarh$/, "") }));

// L8 — the regional dynasties' capitals, their temples and the universities
const CAPS = { "Pallava": [79.7, 12.83, "Kanchipuram"], "Chalukya of Badami": [75.68, 15.92, "Badami"], "Rashtrakuta": [77.15, 17.2, "Manyakheta"], "Chola": [79.13, 10.79, "Thanjavur"], "Pala": [86.47, 25.38, "Munger"],
  "Pratihara": [79.92, 27.05, "Kannauj"], "Chandela": [79.92, 24.85, "Khajuraho"], "Solanki / Chalukya of Gujarat": [72.12, 23.85, "Anhilwara"], "Eastern Ganga": [85.83, 19.81, "Puri–Konark"], "Sena": [88.13, 24.87, "Gauda"] };
const DY = rows("L8", "Southern").filter(r => CAPS[r[0]]);
place("L8", "Southern", KIT.numbered("Regional dynasties and their capitals", DY, Object.fromEntries(DY.map(r => [r[0], CAPS[r[0]]])), { key: r => CAPS[r[0]][2] + " — " + r[3].replace(/;.*$/, "") }),
  KIT.photos("What they built", [["Shore Temple", "Pallava · Mahabalipuram"], ["Kailasa temple, Ellora", "Rashtrakuta"], ["Brihadisvara Temple, Thanjavur", "Chola"], ["Kandariya Mahadeva Temple", "Chandela · Khajuraho"],
    ["Konark Sun Temple", "Eastern Ganga"], ["Rani ki vav", "Solanki"], ["Pattadakal", "Chalukya"], ["Modhera Sun Temple", "Solanki"]], { name: r => r[0].replace(/, .*$/, "") }));
place("L8", "Ancient universities", { k: "mapfig", title: "The ancient universities",
  pins: pins([["Nalanda", 85.44, 25.14, "Kumaragupta I"], ["Vikramashila", 87.28, 25.32, "Dharmapala"], ["Takshashila", 72.84, 33.75, "the oldest"], ["Valabhi", 71.88, 21.89, "Maitrakas"], ["Odantapuri", 85.52, 25.2, "Pala"]],
    { Takshashila: "l", Valabhi: "l", Odantapuri: "l" }), cap: "Nalanda and Vikramashila were burnt by Bakhtiyar Khalji. Takshashila is now in Pakistan." },
  KIT.photos("Nalanda in pictures", [["Nalanda mahavihara", "Bihar · UNESCO"], ["Vikramashila", "Bihar"]], { name: r => r[0].replace(/ mahavihara$/, "") }));

VISUAL = { mode: ["world", "rivers"], VIS: { key: "histancient_photos_v1", word: "place", words: "places", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

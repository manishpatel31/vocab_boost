/* Indian Geography — India's lines and extremes, passes, peaks, plateaus, coasts and islands, live river maps, lakes, the
   monsoon's two arms, soils and forests, mines and power plants (drawn by study-visual.js and study-rivers.js).
   Places are approximate. place(), rows(), GEO and KIT come from applyVisual in tools/workbook/lib.js. */
const P = (w, n, c) => [w, n, c];
const CANCER = KIT.latLine(23.44, "Tropic of Cancer 23½°N"), MERID = KIT.lonLine(82.5, "82½°E — IST");

// G1 — where India lies, its extremes and neighbours
const EXT = { "Indira Col": [77.0, 35.67], "Indira Point": [93.84, 6.75], "Kanyakumari": [77.54, 8.08], "Kibithu": [96.98, 28.27], "Guhar Moti": [68.18, 23.71] };
place("G1", "India at a glance", { k: "mapfig", title: "India's extremes, the Tropic of Cancer and the standard meridian", under: CANCER + MERID,
  marks: [["GJ", "1"], ["RJ", "2"], ["MP", "3"], ["CT", "4"], ["JH", "5"], ["WB", "6"], ["TR", "7"], ["MZ", "8"]],
  pins: rows("G1", "Extreme points").map(r => [r[1], EXT[r[1]][0], EXT[r[1]][1], r[0].replace(/ \(as claimed\)/, "").replace(" point", "").replace(" of the mainland", " (mainland)"), ["Guhar Moti", "Kanyakumari", "Indira Col"].includes(r[1]) ? "l" : ""]),
  cap: "The Tropic of Cancer crosses eight states (numbered 1–8, west to east): Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram. The 82½°E meridian (Mirzapur) sets Indian Standard Time." });
place("G1", "Land neighbours", { k: "bars", title: "India's land borders", unit: "km", left: 120, hi: 1,
  rows: rows("G1", "Land neighbours").map(r => [r[0], +r[1].replace(/[^\d.]/g, ""), ""]), cap: "Longest with Bangladesh, shortest with Afghanistan (through PoK, as shown on India's map)." });

// G2 — the Himalaya: a cross-section, passes and peaks
place("G2", "story", { k: "info", title: "The Himalaya in cross-section", html: `<figure class="fig wide" style="--minw:560px;margin:0"><svg class="dg" viewBox="0 0 680 230" role="img" aria-label="Himalaya from south to north">
  <path d="M0 210 L60 200 L110 160 L150 195 L190 120 L230 150 L270 100 L310 140 L360 30 L400 70 L430 40 L470 100 L520 110 L560 80 L600 115 L680 120 L680 230 L0 230 Z" class="s5" stroke="var(--rule)"/>
  <path d="M360 30 L372 52 L385 45 L400 70 L414 52 L430 40 L438 60 Z" fill="#fff" opacity=".9"/>
  ${[["Plains", 30, 225], ["Shiwalik", 120, 150], ["Lesser Himalaya (Himachal)", 245, 90], ["Greater Himalaya (Himadri)", 395, 22], ["Trans-Himalaya", 560, 70]].map(([t, x, y]) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="12.5" class="b">${t}</text>`).join("")}
  <text x="120" y="215" text-anchor="middle" font-size="10.5" class="mut">600–1,500 m · duns</text><text x="270" y="215" text-anchor="middle" font-size="10.5" class="mut">hill stations</text>
  <text x="400" y="215" text-anchor="middle" font-size="10.5" class="mut">highest peaks, glaciers</text><text x="580" y="215" text-anchor="middle" font-size="10.5" class="mut">Karakoram, Ladakh, Zanskar</text>
  <text x="10" y="18" font-size="11" class="mut">South</text><text x="670" y="18" text-anchor="end" font-size="11" class="mut">North</text></svg></figure>`,
  cap: "South to north: Shiwalik (outer, youngest), Lesser Himalaya, Greater Himalaya (Himadri, the highest), then the Trans-Himalaya behind." });
const PASS = { "Zoji La": [75.47, 34.28], "Khardung La": [77.6, 34.28], "Chang La": [77.93, 34.05], "Karakoram Pass": [77.83, 35.51], "Banihal Pass": [75.2, 33.48], "Pir Panjal Pass": [74.55, 33.63],
  "Rohtang Pass": [77.25, 32.37], "Shipki La": [78.75, 31.82], "Baralacha La": [77.42, 32.76], "Lipulekh": [81.03, 30.23], "Mana Pass": [79.42, 31.07], "Niti Pass": [79.89, 30.97],
  "Nathu La": [88.83, 27.39], "Jelep La": [88.87, 27.37], "Bomdi La": [92.4, 27.27], "Bum La": [91.89, 27.75], "Diphu Pass": [97.3, 28.17], "Pangsau Pass": [96.22, 27.25] };
place("G2", "Passes", KIT.numbered("The passes on the map", rows("G2", "Passes"), PASS, { key: r => r[1] + (r[2] ? " — " + r[2] : "") }));
const PEAK = { "K2 (Godwin Austen)": [76.51, 35.88], "Kangchenjunga": [88.15, 27.7], "Nanda Devi": [79.97, 30.38], "Kamet": [79.59, 30.92], "Trisul": [79.78, 30.31], "Saltoro Kangri": [76.92, 35.4],
  "Saser Kangri": [77.75, 34.87], "Nun": [76.08, 33.98], "Reo Purgyil": [78.74, 31.89], "Kangto": [92.52, 27.86], "Saramati": [95.03, 25.74], "Phawngpui (Blue Mountain)": [93.04, 22.63] };
place("G2", "Peaks", KIT.numbered("Peaks in India", rows("G2", "Peaks").filter(r => PEAK[r[0]]), PEAK, { key: r => r[1] + (r[2] ? " — " + r[2] : "") }),
  KIT.photos("Peaks in pictures", rows("G2", "Peaks").filter(r => /Everest|K2|Kangchenjunga|Nanda Devi|Kamet|Namcha/.test(r[0])), { wiki: r => r[0].replace("K2 (Godwin Austen)", "K2").replace("Mount Everest", "Mount_Everest"), cap: r => r[2].split(" — ")[0] }));

// G3 — plateaus as marks; the two Ghats as cards
place("G3", "Plateaus", { k: "mapfig", title: "Plateaus of India",
  marks: [["JH", "Chotanagpur"], ["MP", "Malwa · Baghelkhand"], ["ML", "Meghalaya", 0, -4], ["AS", "Karbi Anglong", 6, 6], ["MH", "Deccan trap"], ["TG", "Telangana"], ["KA", "Mysore"], ["CT", "Dandakaranya", 0, 30], ["RJ", "Marwar"]],
  cap: "The Deccan trap is a lava plateau of black soil; Chotanagpur is the mineral heartland; the Meghalaya plateau was cut off by the Garo–Rajmahal gap." });

// G4 — coasts and islands
place("G4", "Coastal plains", { k: "mapfig", title: "The coasts, west and east", marks: [["GJ", "Kachchh · Kathiawar"], ["MH", "Konkan", -40, 20], ["KA", "Kanara", -30, 10], ["KL", "Malabar", -14, 0],
  ["TN", "Coromandel", 18, 0], ["AP", "Northern Circars", 34, 0], ["OD", "Utkal", 24, 10]], cap: "West coast north to south: Kachchh–Kathiawar, Konkan, Kanara, Malabar. East coast south to north: Coromandel, Northern Circars, Utkal." });
const ISL = { "Majuli": [94.2, 26.95], "Umananda": [91.75, 26.2], "Sriharikota": [80.23, 13.72], "Wheeler Island (A. P. J. Abdul Kalam Island)": [87.05, 20.76], "Pamban (Rameswaram)": [79.3, 9.28],
  "Srirangam": [78.69, 10.86], "Elephanta": [72.93, 18.96], "Salsette": [72.88, 19.1], "Divar": [73.9, 15.52], "Willingdon Island": [76.27, 9.95], "Barren Island": [93.86, 12.28],
  "Narcondam": [94.27, 13.45], "Minicoy": [73.05, 8.28], "Kavaratti": [72.64, 10.56], "Diu": [70.98, 20.71] };
place("G4", "Islands", KIT.numbered("Islands on the map", rows("G4", "Islands"), ISL, { key: r => r[1] + (r[2] ? " — " + r[2] : "") }));

// G5–G7 — live river maps
place("G5", "story", { k: "rivermap", title: "The Himalayan rivers — tap one", chips: true, show: ["Indus", "Jhelum", "Chenab", "Ravi", "Beas", "Sutlej", "Ganga", "Yamuna", "Ramganga", "Gomti", "Ghaghara", "Gandak", "Kosi", "Son", "Chambal", "Brahmaputra", "Teesta", "Subansiri", "Manas", "Lohit", "Bhagirathi", "Alaknanda", "Hooghly"],
  hl: ["Indus", "Ganga", "Brahmaputra", "Yamuna"], label: ["Indus", "Ganga", "Brahmaputra", "Yamuna", "Sutlej", "Ghaghara", "Kosi", "Son", "Chambal"], cap: "White dashes show the water flowing downstream. Tap a system to show it alone; ＋ or ⛶ to zoom." });
place("G6", "story", { k: "rivermap", title: "The peninsular rivers — east and west", chips: true, show: ["Mahanadi", "Godavari", "Krishna", "Kaveri", "Tungabhadra", "Bhima", "Indravati", "Wainganga", "Pennar", "Subarnarekha", "Brahmani", "Narmada", "Tapi", "Mahi", "Sabarmati", "Luni", "Periyar", "Sharavathi", "Vaigai", "Kabini"],
  hl: ["Mahanadi", "Godavari", "Krishna", "Kaveri", "Narmada", "Tapi"], label: ["Mahanadi", "Godavari", "Krishna", "Kaveri", "Narmada", "Tapi", "Mahi", "Luni"], cap: "Most flow east into the Bay of Bengal and make deltas; the Narmada and Tapi flow west through rift valleys into estuaries." });
place("G7", "Dams and barrages", { k: "rivermap", title: "Dams on the rivers", hl: ["Bhagirathi", "Sutlej", "Mahanadi", "Krishna", "Narmada", "Tapi", "Kaveri", "Godavari"],
  pins: [["Tehri", 78.48, 30.38, ""], ["Bhakra", 76.43, 31.41, "", "l"], ["Hirakud", 83.87, 21.52, ""], ["Nagarjuna Sagar", 79.31, 16.57, ""], ["Sardar Sarovar", 73.75, 21.83, "", "l"],
    ["Ukai", 73.59, 21.25, "", "l"], ["KRS", 76.57, 12.42, "", "l"], ["Mettur", 77.8, 11.8, ""], ["Farakka", 87.92, 24.8, ""], ["Polavaram", 81.65, 17.25, ""]], cap: "The big dams on their rivers. Tap a river to see it highlighted." });

// G8 — lakes by type
const LAKE = { "Wular": [74.6, 34.37], "Dal": [74.87, 34.11], "Sambhar": [75.08, 26.96], "Didwana": [74.57, 27.4], "Pangong Tso": [78.7, 33.75], "Chilika": [85.33, 19.72], "Pulicat": [80.23, 13.6],
  "Vembanad": [76.38, 9.6], "Kolleru": [81.2, 16.65], "Loktak": [93.8, 24.55], "Lonar": [76.51, 19.98], "Kanwar (Kabar Taal)": [86.14, 25.6], "Roopkund": [79.73, 30.26], "Gurudongmar": [88.71, 28.03],
  "Hussain Sagar": [78.47, 17.42], "Bhojtal (Upper Lake)": [77.37, 23.25], "Gobind Sagar": [76.5, 31.4], "Pichola": [73.68, 24.57], "Naini": [79.46, 29.39], "Pushkar": [74.55, 26.49] };
place("G8", "Lakes", KIT.numbered("Lakes on the map", rows("G8", "Lakes"), LAKE, { key: r => r[1] + " — " + r[2] }),
  { k: "cards", title: "Lakes by kind", rows: [["Salt", "Sambhar, Didwana, Pangong Tso", "Sambhar is India's largest inland salt lake", "🧂"], ["Lagoon (brackish)", "Chilika, Pulicat, Vembanad", "Chilika is the largest coastal lagoon", "🌊"],
    ["Crater", "Lonar", "Made by a meteorite in the Deccan basalt", "☄️"], ["Oxbow", "Kanwar (Kabar Taal)", "A cut-off meander of the Gandak system", "↩️"], ["Glacial", "Roopkund, Gurudongmar", "", "🧊"], ["Artificial", "Hussain Sagar, Bhojtal, Gobind Sagar", "", "🏗️"]] });

// G9 — the monsoon's two arms, local winds
place("G9", "Seasons of India", { k: "mapfig", title: "How the south-west monsoon arrives",
  under: KIT.arrow([[66, 9], [70, 13], [73.5, 17], [76, 21], [78, 25]], "#2f6db5", "Arabian Sea branch", [69.2, 12.2]) +
    KIT.arrow([[85, 12], [89, 18], [91.5, 23.5], [90, 26.2], [85, 26.8], [79, 28.3]], "#1c8aa6", "Bay of Bengal branch", [86.5, 15]) + CANCER,
  pins: [["Kerala onset ~1 June", 76.3, 9.9, "", "l"], ["Mawsynram — wettest", 91.58, 25.3, ""]],
  cap: "The monsoon reaches Kerala around 1 June. The Arabian Sea branch climbs the Western Ghats; the Bay of Bengal branch hits the north-east and turns west along the Himalaya. It covers all of India by about 8 July." },
  { k: "mapfig", title: "Local winds and showers", marks: [["UP", "Loo"], ["KL", "Mango and coffee showers", -10, 0], ["WB", "Kalbaisakhi", 6, 10], ["AS", "Bardoli Chheerha", 0, 0], ["PB", "Western disturbances", -8, -6], ["TN", "North-east monsoon", 14, 8]],
    cap: "Loo — hot dry wind of the northern plains; mango showers — Kerala; Kalbaisakhi — West Bengal (Bardoli Chheerha in Assam); western disturbances bring winter rain to the north-west; the north-east monsoon waters Tamil Nadu." });

// G10 — soils as cards with colours
const SOILC = { "Alluvial": "#d8c49a", "Black": "#3b3533", "Red": "#b94a32", "Laterite": "#a35a2c", "Arid": "#e9d6a6", "Saline": "#e8e6df", "Peaty": "#4b4a32", "Mountain": "#6f8a5a" };
place("G10", "Soils and where they are found", { k: "info", title: "India's soils at a glance", html: '<div class="fam">' + rows("G10", "Soils and where they are found").map(r => { const c = SOILC[r[0].split(" ")[0].replace(/\(.*/, "")] || "#999";
  return `<div><span aria-hidden="true" style="display:block;height:26px;border-radius:6px;background:${c};border:1px solid rgba(0,0,0,.15)"></span><b>${r[0]}</b><span class="n">${r[1]}</span><small>${r[2] || ""}</small></div>`; }).join("") + "</div>",
  cap: "Alluvial is the most widespread; black (regur) soil of the Deccan trap holds water and suits cotton; laterite forms where heavy rain washes the soil out." });

// G11 — mines on the map
const MINE = { "Jharia": [86.4, 23.75], "Bokaro": [85.6, 23.78], "Raniganj": [87.1, 23.6], "Korba": [82.7, 22.35], "Talcher": [85.23, 20.95], "Singareni": [80.6, 17.55], "Makum": [95.7, 27.3],
  "Neyveli": [79.48, 11.6], "Bailadila": [81.2, 18.7], "Kudremukh": [75.25, 13.2], "Bellary": [76.92, 15.14], "Noamundi": [85.47, 22.15], "Keonjhar (Joda–Barbil)": [85.42, 22.02], "Balaghat": [80.18, 21.8],
  "Malanjkhand": [80.7, 22.0], "Khetri": [75.78, 28.0], "Mosabani (Singhbhum)": [86.45, 22.5], "Hutti": [76.65, 16.2], "Kolar": [78.27, 12.95], "Zawar": [73.7, 24.35], "Rampura Agucha": [74.73, 25.83],
  "Majhgawan (Panna)": [80.03, 24.7], "Jaduguda": [86.35, 22.65], "Tummalapalle": [78.27, 14.33], "Sukinda": [85.75, 21.0], "Panchpatmali": [82.9, 18.85], "Lohardaga": [84.68, 23.43], "Koderma": [85.6, 24.47],
  "Makrana": [74.73, 27.05], "Digboi": [95.63, 27.4], "Ankleshwar": [73.0, 21.63], "Mumbai High": [71.3, 19.4], "Barmer (Mangala)": [71.4, 25.75], "Salal-Haimana (Reasi)": [74.83, 33.08] };
place("G11", "Famous mines", KIT.numbered("Mines and oilfields on the map", rows("G11", "Famous mines"), MINE, { key: r => r[1] + " — " + r[2], cap: "Most metal mines cluster on the Chotanagpur plateau and in Odisha; the oilfields are in Assam, Gujarat, Rajasthan and off Mumbai." }),
  { k: "mapfig", title: "Leading producers", marks: [["OD", "Iron ore · bauxite · chromite"], ["KA", "Gold", 0, 0], ["RJ", "Silver · lead · zinc · gypsum"], ["MP", "Diamond"]], cap: "Odisha leads in iron ore, bauxite and chromite; Rajasthan in zinc, lead, silver and gypsum; Karnataka in gold; Madhya Pradesh in diamonds." });

// G12 — power plants by type
const PLANT = { "Tarapur": [72.68, 19.83], "Rawatbhata": [75.6, 24.88], "Kalpakkam": [80.16, 12.53], "Narora": [78.4, 28.16], "Kakrapar": [73.35, 21.23], "Kaiga": [74.44, 14.86], "Kudankulam": [77.71, 8.17],
  "Gorakhpur (Fatehabad)": [75.62, 29.43], "Jaitapur": [73.33, 16.6], "Vindhyachal": [82.67, 24.1], "Mundra": [69.55, 22.82], "Sasan": [82.6, 24.08], "Korba": [82.7, 22.35], "Talcher (Kaniha)": [85.07, 21.1],
  "Ramagundam": [79.47, 18.76], "Singrauli (Shaktinagar)": [82.8, 24.2], "Farakka": [87.92, 24.8], "Kahalgaon": [87.25, 25.25], "Neyveli": [79.48, 11.6], "Sidrapong": [88.25, 27.0],
  "Shivanasamudra": [77.18, 12.27], "Nathpa Jhakri": [77.7, 31.55], "Tehri": [78.48, 30.38], "Koyna": [73.75, 17.4], "Salal": [74.83, 33.15], "Dibang": [95.75, 28.15], "Bhadla": [71.9, 27.53],
  "Pavagada (Shakti Sthala)": [77.3, 14.1], "Kurnool": [78.05, 15.7], "Rewa": [81.3, 24.53], "Kamuthi": [78.38, 9.4], "Charanka": [71.2, 23.9], "Khavda": [69.6, 23.85], "Muppandal": [77.55, 8.25], "Puga valley": [78.33, 33.22] };
const PL = rows("G12", "Power plants"), TYPES = [...new Set(PL.map(r => r[2]))];
place("G12", "Power plants", KIT.numbered("Power plants on the map", PL, PLANT, { key: r => r[2] + " · " + r[1] }),
  { k: "bars", title: "Plants in this lesson, by type", left: 150, hi: 1, rows: TYPES.map(t => [t, PL.filter(r => r[2] === t).length, ""]), cap: "Nuclear plants are on the coasts or rivers (cooling water); coal plants sit on the coalfields; the big solar parks are in the sunny west and south." });

// the clickable map and the Map quiz use rows whose second column is a state
const STATE_ROWS = (L, t, kind) => rows(L, t).map(r => [r[0], r[1].replace(/ \(.*\)$/, ""), kind, r[2] || kind, L]);
const ALL = STATE_ROWS("G2", "Passes", "Pass").concat(STATE_ROWS("G3", "Plateaus", "Plateau"), STATE_ROWS("G4", "Islands", "Island"), STATE_ROWS("G8", "Lakes", "Lake"),
  STATE_ROWS("G12", "Power plants", "Power plant"), rows("G11", "Famous mines").map(r => [r[0], r[2], r[1], r[1] + " mine", "G11"]));
place("G1", "Famous lines", { k: "indiamap", title: "Tap a state — its passes, plateaus, lakes, islands, mines and power plants", cap: "Everything in this app that sits in one state. Revise has a Map quiz on the same list." });
VISUAL = { mode: "rivers", VIS: { key: "indgeo_photos_v1", word: "place", words: "places", search: "", quiz: "peak", ask: "Which state or UT is it in:", rows: ALL,
  riverQuiz: ["Ganga", "Yamuna", "Indus", "Sutlej", "Brahmaputra", "Godavari", "Krishna", "Kaveri", "Narmada", "Tapi", "Mahanadi", "Chambal", "Son", "Kosi", "Ghaghara", "Mahi", "Luni", "Teesta"],
  tabs: [["vmap", "Map quiz"], ["vriver", "River quiz"], ["vphotos", "Photo quiz"]] } };

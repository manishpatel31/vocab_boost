/* Rivers of India — live river maps (water flows downstream), city and dam pins, landform diagrams and photos
   (drawn by study-visual.js with study-rivers.js). place(), rows() and GEO come from applyVisual in tools/workbook/lib.js. */
const P = (w, n, c) => [w, n, c];
const C = (name, side) => { const [lo, la] = GEO.city(name); return [name, lo, la, "", side || ""]; };
const INFO = {
  Ganga: "Gangotri (as the Bhagirathi) → Bay of Bengal; the longest in India (about 2,525 km); National River.",
  Yamuna: "Yamunotri → Prayagraj; the Ganga's longest tributary; Delhi, Mathura, Agra.",
  Indus: "Near Mansarovar → Arabian Sea (Pakistan); flows past Leh; Indus Waters Treaty, 1960.",
  Jhelum: "Verinag → Srinagar, Wular Lake; Vedic Vitasta.", Chenab: "Chandra + Bhaga at Tandi; Vedic Asikni; Salal and Baglihar dams.",
  Ravi: "Near Rohtang; Vedic Parushni; Ranjit Sagar dam.", Beas: "Beas Kund → Harike (joins the Sutlej); Vedic Vipasha; Pong dam.",
  Sutlej: "Rakshastal (Tibet) → enters at Shipki La; Bhakra dam; Vedic Shutudri.",
  Brahmaputra: "Tsangpo in Tibet, Siang in Arunachal, Brahmaputra in Assam, Jamuna in Bangladesh; Majuli island.",
  Lohit: "Joins the Siang near Sadiya; Dhola–Sadiya bridge.", Subansiri: "The Brahmaputra's largest tributary.", Manas: "From Bhutan; Manas National Park.",
  Teesta: "From Sikkim; joins the Brahmaputra in Bangladesh.", Barak: "Manipur hills → Silchar → Meghna (Bangladesh).",
  Ghaghara: "Karnali in Nepal; Ayodhya on its Saryu stretch; joins near Chhapra.", Gandak: "Narayani in Nepal; joins at Hajipur.",
  Kosi: "Sapt Kosi from Nepal — the Sorrow of Bihar.", Son: "Amarkantak → joins the Ganga near Patna (right bank).", Gomti: "Lucknow and Jaunpur; joins near Ghazipur.",
  Ramganga: "From Kumaon; Corbett National Park; joins near Kannauj.", Chambal: "Janapav → Yamuna; ravines, gharials; Kota.",
  Betwa: "Vindhyas → Yamuna; Orchha.", Ken: "Kaimur hills → Yamuna; Ken–Betwa link.", Damodar: "Sorrow of Bengal; DVC (1948); joins the Hooghly.",
  Hooghly: "Distributary of the Ganga from Farakka; Kolkata, Haldia.", Bhagirathi: "Gaumukh → Devprayag; Tehri dam.", Alaknanda: "Near Badrinath → Devprayag; the Panch Prayag.",
  Sharda: "The Kali on the Nepal border; joins the Ghaghara.",
  Mahanadi: "Sihawa (Chhattisgarh) → Hirakud → Cuttack delta.", Godavari: "Trimbakeshwar → Bay of Bengal; Dakshin Ganga — longest peninsular river.",
  Krishna: "Mahabaleshwar → Bay of Bengal; Nagarjuna Sagar; Vijayawada.", Kaveri: "Talakaveri → Bay of Bengal; KRS, Mettur; Shivanasamudra.",
  Tungabhadra: "Tunga + Bhadra at Koodli → Krishna; Hampi.", Bhima: "Bhimashankar → Krishna; Pandharpur.", Indravati: "→ Godavari; Chitrakote Falls.",
  Wainganga: "→ Pranhita → Godavari.", Musi: "Hyderabad → Krishna.", Kabini: "Wayanad → Kaveri.", Pennar: "Nandi hills → Nellore → Bay of Bengal.",
  Vaigai: "Madurai → Palk Strait.", Subarnarekha: "Near Ranchi → Hundru Falls → Jamshedpur → Bay of Bengal.", Brahmani: "South Koel + Sankh near Rourkela → Bay of Bengal.",
  Narmada: "Amarkantak → Gulf of Khambhat (estuary); Vindhya–Satpura rift; Sardar Sarovar.", Tapi: "Multai → Surat; rift south of the Satpuras; Ukai dam.",
  Mahi: "Crosses the Tropic of Cancer twice → Gulf of Khambhat.", Sabarmati: "Aravallis → Ahmedabad → Gulf of Khambhat.", Luni: "Near Ajmer → Rann of Kutch (never reaches the sea).",
  Periyar: "Kerala's longest river; Idukki and Mullaperiyar dams.", Sharavathi: "Jog Falls → Arabian Sea at Honnavar."
};
const quick = names => Object.fromEntries(names.filter(n => INFO[n]).map(n => [n, INFO[n]]));

// R1 — every river, by system
place("R1", "story", { k: "rivermap", title: "India's rivers — tap one", chips: true, info: INFO, label: ["Ganga", "Yamuna", "Indus", "Brahmaputra", "Godavari", "Krishna", "Kaveri", "Narmada", "Tapi", "Mahanadi", "Chambal", "Son"],
  hl: ["Ganga", "Indus", "Brahmaputra", "Godavari", "Krishna", "Kaveri", "Narmada", "Tapi", "Mahanadi", "Yamuna"],
  cap: "The white dashes show which way the water flows. Tap a system above to see it alone; tap a river for what to remember. Use ＋ or ⛶ to zoom." });
place("R1", "Where the rivers rise", { k: "mapfig", title: "Where the rivers rise",
  pins: [["Gangotri (Ganga)", 79.08, 30.93, ""], ["Yamunotri", 78.45, 31.0, "", "l"], ["Trimbakeshwar (Godavari)", 73.53, 19.93, "", "l"], ["Mahabaleshwar (Krishna)", 73.66, 17.92, "", "l"],
    ["Talakaveri (Kaveri)", 75.49, 12.38, "", "l"], ["Amarkantak (Narmada, Son)", 81.76, 22.67, ""], ["Multai (Tapi)", 78.25, 21.77, "", "l"], ["Sihawa (Mahanadi)", 81.9, 20.2, ""],
    ["Nandi hills (Pennar)", 77.68, 13.37, ""]],
  cap: "Most peninsular rivers rise in the Western Ghats, close to the Arabian Sea, yet flow east. The Narmada and Son both start at Amarkantak." },
  { k: "bars", title: "The longest rivers", unit: "km", left: 110, hi: 1, rows: [["Ganga", 2525, "longest in India"], ["Godavari", 1465, "longest peninsular"], ["Krishna", 1400, ""], ["Yamuna", 1376, ""],
    ["Narmada", 1312, "longest west-flowing"], ["Mahanadi", 851, ""], ["Kaveri", 800, ""], ["Tapi", 724, ""]], cap: "Commonly quoted round figures; sources differ a little." });

// R2–R5 — the Himalayan systems
const INDUS = ["Indus", "Jhelum", "Chenab", "Ravi", "Beas", "Sutlej"];
place("R2", "story", { k: "rivermap", title: "The Indus and the five rivers of Punjab", show: INDUS.concat(["Ganga", "Yamuna"]), hl: INDUS, label: INDUS, info: quick(INDUS), vb: "60 0 260 230",
  pins: [C("Srinagar"), ["Leh", 77.58, 34.16, ""], ["Harike", 74.95, 31.17, "", "l"], ["Bhakra", 76.43, 31.41, ""], ["Wular Lake", 74.55, 34.36, "", "l"]],
  cap: "West to east: Jhelum, Chenab, Ravi, Beas, Sutlej. India got the eastern three (Ravi, Beas, Sutlej) under the 1960 treaty." });
const GUP = ["Bhagirathi", "Alaknanda", "Ganga", "Yamuna", "Ramganga", "Chambal", "Betwa", "Ken", "Banas", "Parbati"];
place("R3", "story", { k: "rivermap", title: "From Gangotri to Prayagraj", show: GUP.concat(["Gomti", "Ghaghara", "Son", "Sharda"]), hl: GUP, label: ["Ganga", "Yamuna", "Chambal", "Betwa", "Ken", "Bhagirathi", "Alaknanda"], info: quick(GUP), vb: "150 60 260 240",
  pins: [["Devprayag", 78.6, 30.15, "", "l"], C("Haridwar"), C("Kanpur"), ["Prayagraj", 81.85, 25.43, "Sangam"], C("Varanasi"), ["Delhi", 77.21, 28.61, "", "l"], ["Agra", 78.01, 27.18, "", "l"], ["Kota", 75.86, 25.18, "", "l"]],
  cap: "The Bhagirathi and Alaknanda meet at Devprayag; the Yamuna joins at Prayagraj after collecting the Chambal, Betwa and Ken." });
place("R3", "The Panch Prayag", { k: "info", title: "The Panch Prayag, as a diagram",
  html: `<svg class="dg" viewBox="0 0 680 210" role="img" aria-label="The five confluences of the Alaknanda"><defs><marker id="pa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#1c8aa6"/></marker></defs>
    <path d="M20 60 C140 60 180 80 300 90 S520 110 660 150" fill="none" stroke="#1c8aa6" stroke-width="7" stroke-linecap="round"/>
    <path d="M20 60 C140 60 180 80 300 90 S520 110 660 150" fill="none" stroke="#fff" stroke-width="1.6" stroke-dasharray="2 9" class="rvf" style="animation:rvflow 1.3s linear infinite"/>
    <text x="24" y="44" font-size="13" class="b" style="fill:#1c8aa6">Alaknanda (from near Badrinath)</text>
    ${[["Vishnuprayag", "Dhauliganga", 110], ["Nandprayag", "Nandakini", 230], ["Karnaprayag", "Pindar", 350], ["Rudraprayag", "Mandakini", 470], ["Devprayag", "Bhagirathi", 600]].map(([p, r, x], i) => { const y = 60 + i * 21;
      return `<path d="M${x - 30} ${y + 85} Q${x - 10} ${y + 40} ${x} ${y + 8}" fill="none" stroke="#2f6db5" stroke-width="3.5" marker-end="url(#pa)"/><circle cx="${x}" cy="${y + 4}" r="7" class="acc"/>` +
        `<text x="${x}" y="${y - 12}" text-anchor="middle" font-size="12.5" class="b">${p}</text><text x="${x - 32}" y="${y + 102}" text-anchor="middle" font-size="11.5" class="mut">${r}</text>`; }).join("")}
    <text x="664" y="176" text-anchor="end" font-size="14" class="b" style="fill:#1c8aa6">Ganga →</text></svg>`,
  cap: "Downstream: Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag, Devprayag. After Devprayag the river is the Ganga." });
const GLOW = ["Ganga", "Yamuna", "Ramganga", "Gomti", "Ghaghara", "Gandak", "Kosi", "Son", "Damodar", "Hooghly", "Sharda"];
place("R4", "story", { k: "rivermap", title: "The Ganga's left and right banks", show: GLOW.concat(["Chambal", "Betwa", "Ken", "Teesta", "Brahmaputra"]), hl: GLOW, label: GLOW, info: quick(GLOW), vb: "160 120 340 260",
  pins: [C("Lucknow", "l"), C("Patna"), ["Farakka", 87.92, 24.8, ""], C("Kolkata"), ["Ayodhya", 82.2, 26.8, ""]],
  cap: "From the north (left bank): Ramganga, Gomti, Ghaghara, Gandak, Kosi. From the south (right bank): Yamuna and Son. The Hooghly leaves the Ganga at Farakka and takes the Damodar." });
const BR = ["Brahmaputra", "Lohit", "Subansiri", "Manas", "Teesta", "Barak"];
place("R5", "story", { k: "rivermap", title: "The Brahmaputra and the Barak", show: BR.concat(["Ganga"]), hl: BR, label: BR, info: quick(BR), vb: "380 140 180 130",
  pins: [["Majuli", 94.2, 26.95, "river island"], C("Guwahati"), ["Dibrugarh", 94.91, 27.47, ""], ["Silchar", 92.8, 24.83, ""], ["Sadiya", 95.65, 27.83, ""]],
  cap: "The Tsangpo enters as the Siang, becomes the Brahmaputra near Sadiya and runs west through Assam, braided and full of islands like Majuli." });

// R6–R7 — the peninsula
const EAST = ["Mahanadi", "Godavari", "Wainganga", "Indravati", "Krishna", "Bhima", "Tungabhadra", "Musi", "Kaveri", "Kabini", "Pennar", "Vaigai", "Subarnarekha", "Brahmani"];
place("R6", "story", { k: "rivermap", title: "The east-flowing rivers", show: EAST.concat(["Tel", "Sankh", "Kollidam", "Palar", "Ponnaiyar", "Narmada", "Tapi"]), hl: EAST, label: ["Mahanadi", "Godavari", "Krishna", "Kaveri", "Indravati", "Bhima", "Tungabhadra", "Pennar", "Wainganga"], info: quick(EAST), vb: "60 220 380 400",
  pins: [C("Nashik", "l"), ["Vijayawada", 80.65, 16.51, ""], C("Cuttack"), ["Hirakud", 83.87, 21.52, "", "l"], ["Srirangapatna", 76.68, 12.42, "", "l"], C("Hyderabad", "l")],
  cap: "They rise in the Western Ghats or central India and cross the whole peninsula to the Bay of Bengal, ending in deltas." });
const WEST = ["Narmada", "Tapi", "Mahi", "Sabarmati", "Luni", "Sharavathi", "Periyar"];
place("R7", "story", { k: "rivermap", title: "The west-flowing rivers", show: WEST.concat(["Godavari", "Krishna", "Chambal", "Son"]), hl: WEST, label: WEST, info: quick(WEST), vb: "20 150 300 450",
  pins: [["Bharuch", 72.98, 21.7, "estuary", "l"], C("Surat", "l"), C("Ahmedabad", "l"), ["Jabalpur", 79.93, 23.18, "Bhedaghat"], ["Amarkantak", 81.76, 22.67, ""], ["Jog Falls", 74.81, 14.23, "", "l"]],
  cap: "The Narmada and Tapi run west through rift valleys to estuaries in the Gulf of Khambhat; short Western Ghats rivers race to the Arabian Sea." });
place("R7", "Narmada, Tapi", { k: "info", title: "The rift valleys, in cross-section",
  html: `<svg class="dg" viewBox="0 0 680 220" role="img" aria-label="Cross-section: Vindhya, Narmada rift, Satpura, Tapi rift, Ajanta hills">
    <path d="M0 200 L0 90 L90 70 L160 80 L190 150 L250 150 L280 70 L350 50 L420 70 L450 150 L500 150 L530 90 L620 80 L680 95 L680 200 Z" class="s5" stroke="var(--rule)"/>
    <path d="M190 150 L250 150 L245 175 L195 175 Z" fill="#1c8aa6" opacity=".85"/><path d="M450 150 L500 150 L495 172 L455 172 Z" fill="#1c8aa6" opacity=".85"/>
    <path d="M170 95 L200 185 M270 95 L240 185 M430 95 L460 185 M520 95 L490 185" stroke="var(--ink2)" stroke-dasharray="4 4"/>
    <text x="90" y="60" text-anchor="middle" font-size="13" class="b">Vindhya</text><text x="350" y="40" text-anchor="middle" font-size="13" class="b">Satpura</text><text x="600" y="68" text-anchor="middle" font-size="13" class="b">Ajanta (Satmala)</text>
    <text x="220" y="140" text-anchor="middle" font-size="13" class="b" style="fill:#1c8aa6">Narmada</text><text x="475" y="140" text-anchor="middle" font-size="13" class="b" style="fill:#1c8aa6">Tapi</text>
    <text x="220" y="200" text-anchor="middle" font-size="11" class="mut">rift (faults)</text><text x="475" y="200" text-anchor="middle" font-size="11" class="mut">rift (faults)</text></svg>`,
  cap: "Each river runs in a trough where the land sank between two faults — so they flow straight and west, unlike the rest of the peninsula." });

// R8 — dams and waterfalls on the river map
place("R8", "Dams and barrages", { k: "rivermap", title: "The big dams on the map", hl: ["Bhagirathi", "Sutlej", "Beas", "Mahanadi", "Krishna", "Narmada", "Tapi", "Kaveri", "Periyar", "Chambal", "Godavari", "Ganga"],
  pins: [["Tehri", 78.48, 30.38, ""], ["Bhakra", 76.43, 31.41, "", "l"], ["Pong", 76.0, 31.97, "", "l"], ["Hirakud", 83.87, 21.52, ""], ["Nagarjuna Sagar", 79.31, 16.57, ""],
    ["Srisailam", 78.9, 16.09, "", "l"], ["Sardar Sarovar", 73.75, 21.83, "", "l"], ["Indira Sagar", 76.47, 22.28, ""], ["Ukai", 73.59, 21.25, "", "l"], ["KRS", 76.57, 12.42, "", "l"],
    ["Mettur", 77.8, 11.8, ""], ["Idukki", 76.97, 9.84, "", "l"], ["Gandhi Sagar", 75.55, 24.7, "", "l"], ["Farakka", 87.92, 24.8, ""], ["Polavaram", 81.65, 17.25, ""]],
  cap: "Tap a river to see what to remember about it.", info: INFO });
place("R8", "Waterfalls", { k: "photos", title: "Waterfalls in pictures", items: [P("Jog_Falls", "Jog Falls", "Sharavathi"), P("Dhuandhar_Falls", "Dhuandhar", "Narmada"),
  P("Chitrakote_Falls", "Chitrakote", "Indravati"), P("Hundru_Falls", "Hundru", "Subarnarekha"), P("Shivanasamudra_Falls", "Shivanasamudra", "Kaveri"), P("Dudhsagar_Falls", "Dudhsagar", "Mandovi"),
  P("Athirappilly_Falls", "Athirappilly", "Chalakudy"), P("Hogenakkal_Falls", "Hogenakkal", "Kaveri")] },
  { k: "photos", title: "Dams in pictures", items: [P("Tehri_Dam", "Tehri Dam", "Bhagirathi"), P("Bhakra_Dam", "Bhakra Dam", "Sutlej"), P("Hirakud_Dam", "Hirakud Dam", "Mahanadi"),
  P("Nagarjuna_Sagar_Dam", "Nagarjuna Sagar", "Krishna"), P("Sardar_Sarovar_Dam", "Sardar Sarovar", "Narmada"), P("Idukki_Dam", "Idukki Dam", "Periyar")] });

// R9 — landforms, drawn and animated
const stages = `<svg class="dg" viewBox="0 0 680 230" role="img" aria-label="A river from its source to the sea">
  <path d="M10 40 L120 40 L180 110 L330 150 L520 175 L670 180 L670 225 L10 225 Z" class="s5"/>
  <path d="M15 45 C60 50 90 60 120 70 C150 85 160 110 190 120 C230 130 250 150 290 150 C320 150 330 135 360 145 C400 160 390 175 430 170 C470 165 480 180 520 180 C560 180 600 185 670 190" fill="none" stroke="#1c8aa6" stroke-width="5" stroke-linecap="round"/>
  <path d="M15 45 C60 50 90 60 120 70 C150 85 160 110 190 120 C230 130 250 150 290 150 C320 150 330 135 360 145 C400 160 390 175 430 170 C470 165 480 180 520 180 C560 180 600 185 670 190" fill="none" stroke="#fff" stroke-width="1.4" stroke-dasharray="2 8" class="rvf" style="animation:rvflow 1.1s linear infinite"/>
  <path d="M600 190 L640 175 M600 190 L645 196 M600 190 L630 210" stroke="#1c8aa6" stroke-width="2.5"/>
  <line x1="200" y1="10" x2="200" y2="225" class="grid" stroke-dasharray="4 4"/><line x1="450" y1="10" x2="450" y2="225" class="grid" stroke-dasharray="4 4"/>
  <text x="100" y="22" text-anchor="middle" font-size="14" class="b">Upper course</text><text x="325" y="22" text-anchor="middle" font-size="14" class="b">Middle course</text><text x="560" y="22" text-anchor="middle" font-size="14" class="b">Lower course</text>
  <text x="100" y="205" text-anchor="middle" font-size="11.5" class="mut">steep · cuts down: V-valley, gorge, waterfall</text>
  <text x="325" y="205" text-anchor="middle" font-size="11.5" class="mut">gentler · swings: meanders, oxbow lakes</text>
  <text x="560" y="140" text-anchor="middle" font-size="11.5" class="mut">flat · drops silt: floodplain, delta</text></svg>`;
const oxbow = `<svg class="dg" viewBox="0 0 680 200" role="img" aria-label="How an oxbow lake forms, in three steps">
  ${[0, 1, 2].map(i => { const x = 20 + i * 225;
    const river = i === 0 ? `M${x} 100 C${x + 50} 100 ${x + 50} 30 ${x + 100} 30 C${x + 150} 30 ${x + 150} 100 ${x + 200} 100`
      : i === 1 ? `M${x} 100 C${x + 50} 100 ${x + 45} 20 ${x + 100} 20 C${x + 155} 20 ${x + 150} 100 ${x + 200} 100`
      : `M${x} 100 L${x + 200} 100`;
    return `<rect x="${x - 6}" y="0" width="212" height="160" rx="10" class="card"/><path d="${river}" fill="none" stroke="#1c8aa6" stroke-width="10" stroke-linecap="round"/>` +
      (i === 1 ? `<path d="M${x + 55} 98 L${x + 145} 98" stroke="#1c8aa6" stroke-width="3" stroke-dasharray="5 5"/><text x="${x + 100}" y="125" text-anchor="middle" font-size="11" class="mut">a flood cuts the neck</text>` : "") +
      (i === 2 ? `<path d="M${x + 60} 80 C${x + 55} 25 ${x + 145} 25 ${x + 140} 80" fill="none" stroke="#5aa7c4" stroke-width="10" stroke-linecap="round" class="anim-in"/><text x="${x + 100}" y="60" text-anchor="middle" font-size="12" class="b">oxbow lake</text>` : "") +
      `<path d="${river}" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="2 8" class="rvf" style="animation:rvflow 1.1s linear infinite"/>` +
      `<text x="${x + 100}" y="185" text-anchor="middle" font-size="13" class="b">${["1 · A meander", "2 · The neck narrows", "3 · Cut off"][i]}</text>`; }).join("")}</svg>`;
const deltaEst = `<svg class="dg" viewBox="0 0 680 200" role="img" aria-label="A delta and an estuary">
  <rect x="10" y="10" width="320" height="170" rx="10" class="s5"/><rect x="10" y="120" width="320" height="60" fill="#5aa7c4" opacity=".5"/>
  <path d="M170 10 L170 80 M170 80 L120 150 M170 80 L170 160 M170 80 L220 150 M170 100 L140 160 M170 100 L200 160" stroke="#1c8aa6" stroke-width="5" stroke-linecap="round"/>
  <path d="M95 120 Q170 175 245 120 Z" fill="#c9a86a" opacity=".85"/><text x="170" y="40" text-anchor="middle" font-size="11" class="mut">slow river, lots of silt</text>
  <text x="170" y="198" text-anchor="middle" font-size="13" class="b">Delta — east coast (Ganga, Godavari, Krishna)</text>
  <rect x="350" y="10" width="320" height="170" rx="10" class="s5"/><rect x="350" y="120" width="320" height="60" fill="#5aa7c4" opacity=".5"/>
  <path d="M510 10 L510 60 Q500 95 470 125 L550 125 Q520 95 510 60" fill="#1c8aa6" opacity=".9"/><text x="510" y="40" text-anchor="middle" font-size="11" class="mut">fast river, little silt</text>
  <text x="510" y="150" text-anchor="middle" font-size="11" class="mut">tides carry the silt away</text>
  <text x="510" y="198" text-anchor="middle" font-size="13" class="b">Estuary — west coast (Narmada, Tapi)</text></svg>`;
const patterns = (() => { const box = (x, t, inner) => `<g transform="translate(${x} 0)"><rect x="4" y="4" width="122" height="122" rx="10" class="card"/>${inner}<text x="65" y="146" text-anchor="middle" font-size="12.5" class="b">${t}</text></g>`;
  const s = 'stroke="#1c8aa6" stroke-width="3" fill="none" stroke-linecap="round"';
  return `<svg class="dg" viewBox="0 0 680 160" role="img" aria-label="Drainage patterns">` +
    box(0, "Dendritic", `<path ${s} d="M65 120 L65 70 L40 40 M65 70 L95 35 M65 90 L35 75 M65 95 L100 80 M40 40 L25 22 M40 40 L50 18 M95 35 L110 18"/>`) +
    box(136, "Trellis", `<path ${s} d="M40 15 L40 120 M90 15 L90 120 M40 35 L20 35 M40 60 L20 60 M40 85 L20 85 M90 45 L110 45 M90 70 L110 70 M40 105 L90 105"/>`) +
    box(272, "Radial", `<circle cx="65" cy="65" r="12" class="s2"/>${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<path ${s} d="M${(65 + 14 * Math.cos(a * Math.PI / 180)).toFixed(0)} ${(65 + 14 * Math.sin(a * Math.PI / 180)).toFixed(0)} L${(65 + 52 * Math.cos(a * Math.PI / 180)).toFixed(0)} ${(65 + 52 * Math.sin(a * Math.PI / 180)).toFixed(0)}"/>`).join("")}`) +
    box(408, "Centripetal", `<circle cx="65" cy="65" r="14" fill="#5aa7c4"/>${[20, 80, 140, 200, 260, 320].map(a => `<path ${s} d="M${(65 + 52 * Math.cos(a * Math.PI / 180)).toFixed(0)} ${(65 + 52 * Math.sin(a * Math.PI / 180)).toFixed(0)} L${(65 + 17 * Math.cos(a * Math.PI / 180)).toFixed(0)} ${(65 + 17 * Math.sin(a * Math.PI / 180)).toFixed(0)}"/>`).join("")}`) +
    box(544, "Parallel", `<path ${s} d="M20 20 L35 115 M45 20 L60 115 M70 20 L85 115 M95 20 L110 115"/>`) + `</svg>`; })();
const fig = (t, svg, cap, w) => ({ k: "info", title: t, html: `<figure class="fig wide" style="--minw:${w || 560}px;margin:0">${svg}</figure>`, cap });
place("R9", "story", fig("A river from source to sea", stages, "The water (white dashes) runs downhill: it cuts in the upper course, swings in the middle and drops its load near the sea."));
place("R9", "Landforms and where they form", fig("How an oxbow lake forms", oxbow, "A meander's loop grows until a flood breaks through the narrow neck; the abandoned loop becomes an oxbow lake (Kabartal in Bihar is one)."),
  fig("Delta or estuary?", deltaEst, "East-coast rivers are slow and silty — they build deltas. West-coast rivers are fast, carry little silt and meet strong tides — they leave estuaries."));
place("R9", "Drainage patterns", fig("Drainage patterns", patterns, "Dendritic — Ganga plain; trellis — folded hills; radial — Amarkantak; centripetal — Loktak; parallel — Western Ghats.", 520));
place("R9", "Indian examples", { k: "photos", title: "River landforms in pictures", items: [P("Majuli", "Majuli", "Largest river island"), P("Sundarbans", "Sundarbans", "Largest delta"),
  P("Chambal_River", "Chambal ravines", "Badlands"), P("Bhedaghat", "Marble Rocks, Bhedaghat", "Narmada gorge"), P("Gandikota", "Gandikota", "Pennar canyon"),
  P("Oxbow_lake", "Oxbow lake", "A cut-off meander"), P("Alluvial_fan", "Alluvial fan", "Where a stream meets the plain"), P("River_delta", "Delta", "Silt at the mouth")] });

// R10 — links and waterways on the map
place("R10", "Links, canals", { k: "rivermap", title: "River links and national waterways", hl: ["Ganga", "Hooghly", "Brahmaputra", "Ken", "Betwa", "Godavari", "Krishna", "Yamuna"],
  label: ["Ken", "Betwa", "Ganga", "Brahmaputra"], info: INFO,
  pins: [["Daudhan Dam (Ken–Betwa)", 79.92, 24.66, ""], ["Pattiseema (Godavari→Krishna)", 81.6, 17.13, ""], ["NW-1: Prayagraj", 81.85, 25.43, "", "l"], ["Haldia", 88.06, 22.06, ""],
    ["NW-2: Dhubri", 89.98, 26.02, "", "l"], ["Sadiya", 95.65, 27.83, ""], ["NW-3: Kollam", 76.6, 8.89, "", "l"]],
  cap: "The Ken–Betwa link moves water from the Ken to the Betwa in Bundelkhand. NW-1 runs on the Ganga, NW-2 on the Brahmaputra, NW-3 on Kerala's West Coast Canal." });

VISUAL = { mode: "rivers", VIS: { key: "rivers_photos_v1", word: "river", words: "rivers", search: "", quiz: "place", ask: "", rows: [],
  riverQuiz: ["Ganga", "Yamuna", "Indus", "Jhelum", "Chenab", "Ravi", "Beas", "Sutlej", "Brahmaputra", "Ghaghara", "Gandak", "Kosi", "Son", "Gomti", "Chambal", "Betwa", "Damodar",
    "Mahanadi", "Godavari", "Krishna", "Kaveri", "Tungabhadra", "Bhima", "Indravati", "Narmada", "Tapi", "Mahi", "Sabarmati", "Luni", "Teesta", "Barak", "Subarnarekha", "Pennar", "Periyar"],
  riverInfo: INFO, tabs: [["vriver", "River quiz"], ["vphotos", "Photo quiz"]] } };

/* Biology — labelled diagrams: the animal and plant cell, osmosis, the DNA ladder, the cell cycle, a neuron, the five
   kingdoms, the digestive tract, the heart's double circulation, the brain, the endocrine glands, photosynthesis, the flower
   and Mendel's cross; plus charts and photos (drawn by study-visual.js). place(), rows() and KIT come from apply-hand.js. */
const lab = (x, y, tx, ty, t, a) => `<line x1="${x}" y1="${y}" x2="${tx}" y2="${ty}" stroke="var(--ink2)" stroke-width="1"/><circle cx="${x}" cy="${y}" r="2.2" fill="var(--ink2)"/>` +
  `<text x="${tx + (a === "end" ? -4 : 4)}" y="${ty + 4}" text-anchor="${a || "start"}" font-size="11.5" font-weight="700">${t}</text>`;
const T = (x, y, t, c, a, s) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const flowPath = (d, c, w, mk) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w || 3}" stroke-linecap="round"${mk ? ` marker-end="url(#${mk})"` : ""}/><path d="${d}" fill="none" stroke="#fff" stroke-width="1.2" stroke-dasharray="2 7" style="animation:rvflow 1.1s linear infinite"/>`;

// L4 — an animal cell; L5 — a plant cell
const mito = (x, y, r) => `<g transform="translate(${x},${y}) rotate(${r})"><ellipse rx="22" ry="11" fill="#e8956b" stroke="#b5552c"/><path d="M-16 0 q4 -8 8 0 t8 0 t8 0 t8 0" fill="none" stroke="#b5552c" stroke-width="1.4"/></g>`;
const golgi = (x, y) => [0, 1, 2, 3].map(i => `<path d="M${x - 24 + i * 2} ${y + i * 7} q24 -10 48 0" fill="none" stroke="#c69214" stroke-width="3.2" stroke-linecap="round"/>`).join("");
const er = (x, y) => `<path d="M${x} ${y} q14 -18 28 0 t28 0 t28 0 M${x} ${y + 12} q14 -18 28 0 t28 0 t28 0" fill="none" stroke="#2f6db5" stroke-width="2.6"/>` + [0, 1, 2, 3, 4, 5].map(i => `<circle cx="${x + 6 + i * 15}" cy="${y - 7 + (i % 2) * 12}" r="2" fill="#7d4fb5"/>`).join("");
const ANIMAL = `<svg class="dg" viewBox="0 0 680 330" role="img" aria-label="Labelled animal cell">
  <ellipse cx="260" cy="165" rx="200" ry="140" fill="#fbe9e4" stroke="#c0503a" stroke-width="2.5"/>
  <circle cx="260" cy="160" r="52" fill="#d9c8f0" stroke="#7d4fb5" stroke-width="2.5"/><circle cx="270" cy="150" r="16" fill="#7d4fb5" opacity=".7"/>
  ${mito(150, 110, -20)}${mito(380, 230, 25)}${mito(170, 240, 10)}${golgi(370, 110)}${er(110, 175)}
  <circle cx="345" cy="185" r="12" fill="#2f8f4e" opacity=".75"/><g transform="translate(220,260)"><rect x="-8" y="-3" width="16" height="6" fill="#555"/><rect x="-3" y="-8" width="6" height="16" fill="#555" transform="translate(16,0)"/></g>
  ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<circle cx="${300 + (i * 37) % 120}" cy="${70 + (i * 29) % 60}" r="2.2" fill="#7d4fb5"/>`).join("")}
  ${lab(260, 25, 490, 30, "Cell membrane")}${lab(300, 135, 490, 70, "Nucleus")}${lab(270, 150, 490, 105, "Nucleolus")}${lab(380, 230, 490, 240, "Mitochondria (powerhouse)")}
  ${lab(390, 115, 490, 140, "Golgi apparatus")}${lab(345, 185, 490, 190, "Lysosome (suicide bag)")}${lab(160, 172, 490, 290, "Rough ER + ribosomes")}${lab(236, 260, 490, 315, "Centrosome")}${lab(330, 80, 490, 165, "Ribosomes")}</svg>`;
place("L4", "Organelle", KIT.fig("An animal cell, labelled", ANIMAL, "Animal cells have centrosomes and small vacuoles but no cell wall or plastids."));
const PLANT = `<svg class="dg" viewBox="0 0 660 320" role="img" aria-label="Labelled plant cell">
  <rect x="40" y="20" width="400" height="280" rx="18" fill="#e6f2df" stroke="#2f8f4e" stroke-width="7"/><rect x="50" y="30" width="380" height="260" rx="12" fill="none" stroke="#7fb36a" stroke-width="2"/>
  <rect x="120" y="70" width="240" height="170" rx="40" fill="#cfe6f5" stroke="#2f6db5" stroke-width="1.5"/>${T(240, 160, "Central vacuole", "#2f6db5", "middle", 13)}
  <circle cx="390" cy="80" r="30" fill="#d9c8f0" stroke="#7d4fb5" stroke-width="2"/>
  ${[[80, 60], [80, 270], [390, 260], [250, 270], [75, 160]].map(([x, y]) => `<g transform="translate(${x},${y})"><ellipse rx="18" ry="10" fill="#2f8f4e"/>${[-9, -3, 3, 9].map(d => `<line x1="${d}" y1="-6" x2="${d}" y2="6" stroke="#bfe0a6" stroke-width="1.6"/>`).join("")}</g>`).join("")}
  ${mito(400, 180, 70)}
  ${lab(42, 120, 470, 40, "Cell wall (cellulose)")}${lab(52, 210, 470, 75, "Cell membrane")}${lab(400, 80, 470, 110, "Nucleus")}${lab(80, 60, 470, 150, "Chloroplast — photosynthesis")}
  ${lab(300, 120, 470, 190, "Vacuole (50–90% of the cell)")}${lab(400, 180, 470, 230, "Mitochondria")}</svg>`;
place("L5", "Plant cell vs animal cell", KIT.fig("A plant cell, labelled", PLANT, "Plant cells add a cellulose cell wall, chloroplasts and one big central vacuole — and usually have no centrosome."));

// L2 — a red blood cell in three solutions
const rbc = (x, s, t, n, c) => `<g transform="translate(${x},90)"><ellipse rx="${46 * s}" ry="${36 * s}" fill="#d84a3a" opacity=".85"/>${s < 1 ? `<path d="M${-30 * s} 0 q8 -14 16 0 t16 0 t16 0" stroke="#fff" fill="none"/>` : ""}</g>` +
  [0, 1, 2].map(i => `<path d="M${x + (n > 0 ? -95 : 60)} ${70 + i * 20} h30" stroke="#2f6db5" stroke-width="2.4" marker-end="url(#wa)" ${n > 0 ? "" : 'transform="rotate(0)"'}/>`).join("").repeat(n ? 1 : 0) +
  T(x, 165, t, c, "middle", 13);
const OS = `<svg class="dg" viewBox="0 0 660 200" role="img" aria-label="Red blood cells in hypotonic, isotonic and hypertonic solutions">
  <defs><marker id="wa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#2f6db5"/></marker></defs>
  ${rbc(110, 1.25, "Hypotonic", 1, "#2f6db5")}${T(110, 184, "water rushes in → swells, may burst", "var(--ink2)", "middle", 10.5)}
  ${rbc(330, 1, "Isotonic", 0, "#2f8f4e")}${T(330, 184, "no net movement → normal", "var(--ink2)", "middle", 10.5)}
  ${rbc(550, .7, "Hypertonic", 0, "#c0503a")}<path d="M590 80 h40" stroke="#2f6db5" stroke-width="2.4" marker-end="url(#wa)"/><path d="M590 100 h40" stroke="#2f6db5" stroke-width="2.4" marker-end="url(#wa)"/>${T(550, 184, "water leaves → shrinks", "var(--ink2)", "middle", 10.5)}</svg>`;
place("L2", "Put a cell in a solution", KIT.fig("Osmosis: one cell, three solutions", OS, "Water always moves towards the more concentrated side across a semi-permeable membrane. Salting pickles and raisins swelling in water are osmosis."));

// L3 — the DNA ladder
const BP = ["AT", "GC", "TA", "CG", "AT", "GC", "TA", "AT", "CG", "GC", "AT", "TA"], BC = { A: "#c0392b", T: "#2f8f4e", G: "#2f6db5", C: "#c69214" };
const DNA = `<svg class="dg" viewBox="0 0 660 200" role="img" aria-label="The DNA double helix with base pairs">
  ${BP.map((p, i) => { const x = 40 + i * 48, a = 100 + 55 * Math.sin(i * .62), b = 100 - 55 * Math.sin(i * .62);
    return `<line x1="${x}" y1="${a}" x2="${x}" y2="${(a + b) / 2}" stroke="${BC[p[0]]}" stroke-width="7"/><line x1="${x}" y1="${(a + b) / 2}" x2="${x}" y2="${b}" stroke="${BC[p[1]]}" stroke-width="7"/>` +
      `<text x="${x}" y="${a + (a > b ? 16 : -8)}" text-anchor="middle" font-size="11" font-weight="800" style="fill:${BC[p[0]]}">${p[0]}</text><text x="${x}" y="${b + (b > a ? 16 : -8)}" text-anchor="middle" font-size="11" font-weight="800" style="fill:${BC[p[1]]}">${p[1]}</text>`; }).join("")}
  <path d="${BP.map((_, i) => `${i ? "L" : "M"}${40 + i * 48} ${100 + 55 * Math.sin(i * .62)}`).join("")}" fill="none" stroke="var(--ink)" stroke-width="3"/>
  <path d="${BP.map((_, i) => `${i ? "L" : "M"}${40 + i * 48} ${100 - 55 * Math.sin(i * .62)}`).join("")}" fill="none" stroke="var(--ink2)" stroke-width="3"/></svg>`;
place("L3", "DNA vs RNA", KIT.fig("DNA: a twisted ladder", DNA, "Two sugar–phosphate strands are joined by base pairs: A always with T, G always with C (Chargaff). RNA swaps T for U. Watson and Crick described the double helix in 1953."));

// L6 — the cell cycle wheel
const CY = [["G1", "cell grows", .45, "#2f8f4e"], ["S", "DNA copied", .3, "#2f6db5"], ["G2", "gets ready", .15, "#c69214"], ["M", "mitosis", .1, "#c0392b"]];
let ang = -Math.PI / 2;
const wedge = (a0, a1, c) => { const p = a => [(200 + 110 * Math.cos(a)).toFixed(1), (130 + 110 * Math.sin(a)).toFixed(1)].join(" "); return `<path d="M200 130 L${p(a0)} A110 110 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${p(a1)} Z" fill="${c}" stroke="var(--sheet)" stroke-width="3"/>`; };
const CYC = `<svg class="dg" viewBox="0 0 640 260" role="img" aria-label="The cell cycle">
  ${CY.map(([n, t, f, c]) => { const a0 = ang, a1 = ang + f * 2 * Math.PI, am = (a0 + a1) / 2; ang = a1; return wedge(a0, a1, c) + T((200 + 72 * Math.cos(am)).toFixed(1), (135 + 72 * Math.sin(am)).toFixed(1), n, "#fff", "middle", 16) +
    T(420, 60 + CY.findIndex(x => x[0] === n) * 40, `${n} — ${t}`, c, "start", 14); }).join("")}
  <circle cx="200" cy="130" r="40" fill="var(--sheet)"/>${T(200, 128, "Interphase", "var(--ink)", "middle", 11)}${T(200, 143, "G1 + S + G2", "var(--ink2)", "middle", 10)}
  <text x="420" y="230" font-size="11" class="mut">Most of the cycle is interphase; M is short.</text></svg>`;
place("L6", "Cell cycle", KIT.fig("The cell cycle", CYC, "G1 (growth) → S (DNA replication) → G2 (preparation) → M (mitosis, then cytokinesis). Cells that stop dividing rest in G0."));

// L8 — blood, a neuron
place("L8", "Blood (plasma", { k: "bars", title: "What blood is made of", unit: "%", left: 130, hi: 1, sort: false, rows: [["Plasma", 55, "92% of it is water"], ["Blood cells", 45, "RBC, WBC, platelets"]],
  cap: "RBCs (made in the bone marrow, live ~120 days, no nucleus) carry oxygen on haemoglobin; WBCs fight infection; platelets help clotting." });
const NEU = `<svg class="dg" viewBox="0 0 680 170" role="img" aria-label="A neuron">
  ${[[-40, -30], [-50, 0], [-40, 30], [-20, -45], [-20, 45]].map(([dx, dy]) => `<path d="M80 85 q${dx / 2} ${dy / 3} ${dx} ${dy}" stroke="#7d4fb5" stroke-width="3" fill="none"/>`).join("")}
  <circle cx="80" cy="85" r="26" fill="#d9c8f0" stroke="#7d4fb5" stroke-width="2.5"/><circle cx="80" cy="85" r="9" fill="#7d4fb5"/>
  <path d="M106 85 H560" stroke="#7d4fb5" stroke-width="4"/>${[0, 1, 2, 3, 4, 5, 6].map(i => `<rect x="${130 + i * 60}" y="76" width="44" height="18" rx="9" fill="#f2c14e" stroke="#c69214"/>`).join("")}
  ${[[-20], [0], [20]].map(([dy]) => `<path d="M560 85 q20 ${dy / 2} 40 ${dy}" stroke="#7d4fb5" stroke-width="3" fill="none"/><circle cx="600" cy="${85 + dy}" r="5" fill="#7d4fb5"/>`).join("")}
  <circle r="5" fill="#c0392b"><animateMotion dur="2.2s" repeatCount="indefinite" path="M106 85 H560"/></circle>
  ${lab(45, 55, 20, 20, "Dendrites")}${lab(80, 85, 120, 30, "Cyton (cell body)")}${lab(152, 76, 230, 30, "Myelin sheath")}${lab(196, 85, 300, 140, "Axon")}${lab(600, 105, 520, 150, "Axon terminals → synapse", "end")}</svg>`;
place("L8", "Neuron", KIT.fig("A neuron — the longest cell", NEU, "The impulse (red dot) runs from the dendrites through the cell body and down the axon to the terminals; the myelin sheath speeds it up.", 600));

// L9 — the five kingdoms
const KG = [["Monera", "prokaryotes · bacteria", "#a9805a"], ["Protista", "one-celled eukaryotes · Amoeba", "#c69214"], ["Fungi", "absorb food · yeast, mushroom", "#7d4fb5"], ["Plantae", "make food · chlorophyll", "#2f8f4e"], ["Animalia", "eat food · many-celled", "#c0503a"]];
const KD = `<svg class="dg" viewBox="0 0 660 200" role="img" aria-label="Whittaker's five kingdoms">
  <rect x="230" y="10" width="200" height="40" rx="10" fill="var(--ink)"/>${T(330, 35, "Living things (Whittaker, 1969)", "var(--sheet)", "middle", 12)}
  <path d="M330 50 V70 M66 70 H594 ${KG.map((_, i) => `M${66 + i * 132} 70 V90`).join(" ")}" stroke="var(--ink2)" stroke-width="1.6" fill="none"/>
  ${KG.map(([n, t, c], i) => `<rect x="${10 + i * 132}" y="90" width="112" height="56" rx="10" fill="${c}"/>${T(66 + i * 132, 116, n, "#fff", "middle", 14)}<text x="${66 + i * 132}" y="${136}" text-anchor="middle" font-size="9.5" style="fill:#fff">${t.split(" · ")[0]}</text>` +
    `<text x="${66 + i * 132}" y="170" text-anchor="middle" font-size="10.5" class="mut">${t.split(" · ")[1]}</text>`).join("")}</svg>`;
place("L9", "The system", KIT.fig("The five kingdoms", KD, "Monera are the only prokaryotes. Fungi absorb their food; plants make it; animals eat it."));

// L12 — hearts by class
place("L12", "Vertebrate classes", { k: "cards", title: "Vertebrates by heart and blood", rows: rows("L12", "Vertebrate").map((r, i) => [r[0], `${r[1]}-chambered heart · ${r[2].toLowerCase()}-blooded`, r[3].replace(/;.*$/, ""), ["🐍", "🐟", "🐸", "🦎", "🐦", "🐘"][i]]) });

// L13 — energy per gram
place("L13", "Energy & role", { k: "bars", title: "Energy per gram", unit: "kcal", left: 130, hi: 1, sort: false, rows: rows("L13", "Energy").map(r => [r[0], parseInt(r[1], 10), r[2].replace(/ \(.*\)$/, "")]),
  cap: "Fat gives more than twice the energy of carbohydrate or protein, gram for gram." });

// L14 — vitamins
place("L14", "Vitamin chart", { k: "cards", title: "Vitamins and what their lack causes", rows: rows("L14", "Vitamin chart").filter(r => r[2] !== "—").map(r => ["Vitamin " + r[0] + " · " + r[1], r[2], r[3], ["A", "D", "E", "K"].includes(r[0]) ? "🧈" : "💧"]),
  cap: "🧈 fat-soluble (A, D, E, K — stored in the body) · 💧 water-soluble (B and C — washed out, needed daily)." });

// L15 — the digestive tract
const DG = `<svg class="dg" viewBox="0 0 640 420" role="img" aria-label="The human digestive system">
  <path d="M200 20 C200 60,205 90,205 120" stroke="#c0503a" stroke-width="10" fill="none" stroke-linecap="round"/>
  <path d="M205 120 C200 150,260 165,275 140 C290 120,250 110,220 125" fill="#e8956b" stroke="#b5552c" stroke-width="2"/>
  <path d="M130 120 C110 140,120 175,190 172 C205 160,200 130,180 118 Z" fill="#8c3b2b" opacity=".85"/>
  <path d="M255 180 Q300 186,250 196" stroke="#d4a017" stroke-width="10" fill="none" stroke-linecap="round"/>
  <path d="M140 380 V215 H320 V370" stroke="#a9805a" stroke-width="16" fill="none" stroke-linejoin="round" opacity=".7"/>
  <path d="M235 205 c-45 10 -60 28 -20 38 c40 10 60 24 20 34 c-40 10 -60 24 -20 34 c35 8 50 18 15 26" stroke="#f2a28a" stroke-width="9" fill="none" stroke-linecap="round"/>
  <circle r="6" fill="#2f8f4e"><animateMotion dur="5s" repeatCount="indefinite" path="M200 20 C200 60,205 90,205 120 C220 140,260 150,250 150 C230 175,225 195,235 205 c-45 10 -60 28 -20 38 c40 10 60 24 20 34 c-40 10 -60 24 -20 34 c35 8 50 18 15 26"/></circle>
  ${lab(201, 40, 380, 30, "Mouth, oesophagus — saliva")}${lab(262, 140, 380, 80, "Stomach — HCl, pepsin")}${lab(160, 150, 380, 125, "Liver — makes bile")}
  ${lab(280, 186, 380, 170, "Pancreas — enzymes")}${lab(230, 280, 380, 250, "Small intestine — villi absorb")}${lab(320, 300, 380, 300, "Large intestine — water")}${lab(140, 370, 380, 360, "Rectum → anus")}</svg>`;
place("L15", "The food route", KIT.fig("The digestive system", DG, "Food (green dot) moves by peristalsis. Digestion is completed in the small intestine, where finger-like villi absorb it; the large intestine takes back water.", 560));

// L17 — the heart and double circulation
const HT = `<svg class="dg" viewBox="0 0 560 360" role="img" aria-label="The heart's four chambers and double circulation">
  <defs><marker id="hb" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#2f6db5"/></marker><marker id="hr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#c0392b"/></marker></defs>
  <rect x="200" y="4" width="160" height="32" rx="10" fill="#9fb8d8"/>${T(280, 25, "LUNGS", "#1d3f6e", "middle", 13)}
  <rect x="200" y="322" width="160" height="32" rx="10" fill="#e6c9a0"/>${T(280, 343, "BODY", "#6b4a1a", "middle", 13)}
  <path d="M210 70 C160 70,140 130,160 190 C180 250,250 300,280 310 C310 300,380 250,400 190 C420 130,400 70,350 70 C320 70,295 85,280 105 C265 85,240 70,210 70 Z" fill="#f6d5cf" stroke="#c0392b" stroke-width="2.5"/>
  <line x1="280" y1="105" x2="280" y2="305" stroke="#c0392b" stroke-width="3"/><line x1="165" y1="170" x2="395" y2="170" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4"/>
  ${T(220, 140, "Right atrium", "#2f6db5", "middle", 11.5)}${T(340, 140, "Left atrium", "#c0392b", "middle", 11.5)}${T(225, 225, "Right ventricle", "#2f6db5", "middle", 11.5)}${T(335, 225, "Left ventricle", "#c0392b", "middle", 11.5)}
  ${flowPath("M200 245 C90 230,90 60,205 30", "#2f6db5", 3, "hb")}${T(20, 110, "pulmonary artery", "#2f6db5", "start", 10.5)}
  ${flowPath("M355 30 C470 50,470 120,345 125", "#c0392b", 3, "hr")}${T(440, 70, "pulmonary vein", "#c0392b", "start", 10.5)}
  ${flowPath("M205 340 C60 340,60 150,190 130", "#2f6db5", 3, "hb")}${T(20, 290, "vena cava", "#2f6db5", "start", 10.5)}
  ${flowPath("M360 250 C480 270,480 340,358 340", "#c0392b", 3, "hr")}${T(470, 300, "aorta", "#c0392b", "start", 10.5)}</svg>`;
place("L17", "One lap of blood", KIT.fig("The heart: four chambers, two circuits", HT, "Blue: deoxygenated blood on the right side goes to the lungs. Red: oxygenated blood on the left side goes to the body. Blood passes through the heart twice in one round — double circulation.", 560));

// L19 — the brain
const BR = `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Parts of the brain">
  <path d="M120 170 C100 90,190 30,300 35 C410 40,470 100,460 170 C455 200,420 210,380 205 C340 200,300 210,260 215 C200 220,130 215,120 170 Z" fill="#f5c6c0" stroke="#c0503a" stroke-width="2.5"/>
  ${[0, 1, 2, 3, 4].map(i => `<path d="M${170 + i * 55} ${55 + (i % 2) * 10} q20 40 -5 80" fill="none" stroke="#c0503a" opacity=".5" stroke-width="2"/>`).join("")}
  <path d="M380 205 C390 230,440 250,470 230 C495 212,480 185,455 180 C430 178,400 190,380 205 Z" fill="#c69214" opacity=".8"/>
  ${[0, 1, 2, 3].map(i => `<path d="M${395 + i * 18} ${200 + i * 3} q8 15 0 30" fill="none" stroke="#7a5a10" stroke-width="1.2"/>`).join("")}
  <path d="M330 200 C335 220,340 240,345 265 L360 290 L380 290 L372 262 C368 240,365 220,362 205 Z" fill="#7d4fb5" opacity=".8"/>
  <ellipse cx="315" cy="175" rx="24" ry="14" fill="#2f6db5" opacity=".7"/>
  ${lab(250, 90, 40, 40, "Cerebrum — thinking, memory", "start")}${lab(315, 175, 520, 90, "Thalamus / hypothalamus")}${lab(445, 215, 520, 160, "Cerebellum — balance")}
  ${lab(350, 250, 520, 230, "Medulla — heartbeat, breathing")}${lab(365, 280, 520, 275, "→ spinal cord")}</svg>`;
place("L19", "Brain map", KIT.fig("The brain", BR, "Forebrain: cerebrum, thalamus, hypothalamus. Hindbrain: cerebellum, pons, medulla. The medulla runs the involuntary actions."));

// L20 — the glands on the body
const GL = [["Hypothalamus", 196, 64], ["Pituitary", 200, 74], ["Pineal", 208, 56], ["Thyroid", 200, 118], ["Thymus", 200, 155], ["Adrenals", 185, 230], ["Pancreas", 210, 245], ["Ovaries / testes", 200, 300]];
const BODY = `<svg class="dg" viewBox="0 0 640 400" role="img" aria-label="Endocrine glands in the body">
  <circle cx="200" cy="62" r="38" fill="var(--sunk)" stroke="var(--rule)" stroke-width="2"/><path d="M180 100 h40 v12 c45 10 60 40 60 90 v80 h-22 v-70 l-8 0 v170 h-30 v-110 h-10 v110 h-30 v-170 l-8 0 v70 h-22 v-80 c0 -50 15 -80 60 -90z" fill="var(--sunk)" stroke="var(--rule)" stroke-width="2"/>
  ${GL.map(([n, x, y], i) => `<circle cx="${x}" cy="${y}" r="6" fill="#c0392b"/>` + lab(x, y, 360, 40 + i * 44, n)).join("")}</svg>`;
place("L20", "Gland", KIT.fig("Where the endocrine glands sit", BODY, "Ductless glands pour hormones straight into the blood. The pituitary is the 'master gland'; the hypothalamus controls it.", 520));

// L21 — photosynthesis
const PS = `<svg class="dg" viewBox="0 0 640 280" role="img" aria-label="Photosynthesis in a leaf">
  <circle cx="70" cy="60" r="34" fill="#f6c343"/>${[0, 1, 2].map(i => flowPath(`M${100 + i * 8} ${80 + i * 10} L${230 + i * 20} ${130 + i * 6}`, "#e0a040", 3)).join("")}
  <path d="M220 160 C280 60,460 60,520 150 C460 230,280 240,220 160 Z" fill="#7fb36a" stroke="#2f8f4e" stroke-width="3"/><path d="M220 160 L520 150" stroke="#2f8f4e" stroke-width="2"/>
  ${flowPath("M600 90 L510 125", "#7a7a7a")}${T(560, 80, "CO₂ in", "#555", "start", 12)}
  ${flowPath("M400 210 L430 268", "#2f6db5")}${T(440, 265, "H₂O from roots (xylem)", "#2f6db5", "start", 11)}
  ${flowPath("M330 90 L300 30", "#2f8f4e")}${T(250, 24, "O₂ out", "#2f8f4e", "start", 12)}
  ${T(370, 160, "glucose", "#fff", "middle", 13)}${T(70, 250, "6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O", "var(--ink)", "start", 13)}
  <text x="70" y="270" font-size="11" class="mut">sunlight + chlorophyll; light reaction in the grana, dark reaction in the stroma</text></svg>`;
place("L21", "Photosynthesis", KIT.fig("Photosynthesis", PS, "The oxygen given off comes from water, not from carbon dioxide. Glucose made in the leaf travels through the phloem."));

// L22 — the flower
const FL = `<svg class="dg" viewBox="0 0 640 320" role="img" aria-label="Parts of a flower">
  <path d="M250 300 V200" stroke="#2f8f4e" stroke-width="8"/><path d="M250 260 q-50 -10 -70 -40 q40 0 70 30" fill="#7fb36a"/>
  ${[-60, -25, 25, 60].map(a => `<ellipse cx="${250 + a * 1.4}" cy="${150 + Math.abs(a) * .4}" rx="34" ry="62" transform="rotate(${a * .7} ${250 + a * 1.4} ${150 + Math.abs(a) * .4})" fill="#f2a2b8" stroke="#d26a8a"/>`).join("")}
  <path d="M212 206 q38 34 76 0 q-8 -14 -38 -14 q-30 0 -38 14z" fill="#2f8f4e"/>
  <path d="M238 195 q-6 -30 6 -60 l12 0 q12 30 6 60z" fill="#c69214"/><ellipse cx="250" cy="185" rx="15" ry="13" fill="#d4a017"/><circle cx="250" cy="130" r="9" fill="#7d4fb5"/>
  ${[-30, 30].map(d => `<path d="M250 195 Q${250 + d} 160 ${250 + d * 1.2} 115" stroke="#c0503a" stroke-width="2.5" fill="none"/><ellipse cx="${250 + d * 1.2}" cy="110" rx="7" ry="11" fill="#c0503a"/>`).join("")}
  ${lab(250, 130, 400, 40, "Stigma (sticky)")}${lab(250, 160, 400, 75, "Style")}${lab(250, 185, 400, 110, "Ovary — ovules")}${lab(286, 110, 400, 150, "Anther — pollen")}${lab(274, 150, 400, 185, "Filament")}
  ${lab(330, 130, 400, 220, "Petal (corolla)")}${lab(275, 212, 400, 255, "Sepal (calyx)")}${lab(250, 270, 400, 290, "Pedicel (stalk)")}</svg>`;
place("L22", "Flower", KIT.fig("Parts of a flower", FL, "Stamen (anther + filament) is male; carpel (stigma + style + ovary) is female. After fertilisation the ovary becomes the fruit and the ovules the seeds.", 520));

// L23 — Mendel's monohybrid cross
const PQ = `<svg class="dg" viewBox="0 0 640 260" role="img" aria-label="Punnett square for Tt × Tt">
  ${T(160, 30, "F1 × F1:  Tt × Tt", "var(--ink)", "middle", 14)}
  ${["T", "t"].map((g, i) => T(140 + i * 80, 64, g, "#c0392b", "middle", 16) + T(80, 110 + i * 80, g, "#2f6db5", "middle", 16)).join("")}
  ${[["TT", 0, 0], ["Tt", 1, 0], ["Tt", 0, 1], ["tt", 1, 1]].map(([g, c, r]) => `<rect x="${100 + c * 80}" y="${74 + r * 80}" width="80" height="80" fill="${g === "tt" ? "#e8f4e4" : "#fbe3d6"}" stroke="var(--ink2)"/>` +
    T(140 + c * 80, 112 + r * 80, g, "var(--ink)", "middle", 16) + T(140 + c * 80, 132 + r * 80, g === "tt" ? "dwarf" : "tall", "var(--ink2)", "middle", 11)).join("")}
  ${T(330, 100, "Phenotype  3 tall : 1 dwarf", "#c0503a", "start", 14)}${T(330, 140, "Genotype  1 TT : 2 Tt : 1 tt", "#2f6db5", "start", 14)}
  <text x="330" y="180" font-size="11.5" class="mut">Dihybrid cross: 9 : 3 : 3 : 1</text><text x="330" y="200" font-size="11.5" class="mut">Garden pea, 7 traits — Mendel, 1866</text></svg>`;
place("L23", "Crosses", KIT.fig("Mendel's monohybrid cross", PQ, "Tall (T) is dominant over dwarf (t). Crossing two hybrids gives three tall plants for every dwarf one."),
  KIT.photos("Genetics and evolution in pictures", [["Gregor Mendel", "Father of genetics"], ["Charles Darwin", "Natural selection"], ["Pisum sativum", "Mendel's pea"], ["Homology (biology)", "Same structure, different job"]], { name: r => r[0].replace(/^Pisum sativum$/, "Garden pea").replace(/ \(biology\)$/, "") }));

// L24 — vectors and their diseases
place("L24", "Pathogen, vector", KIT.photos("Vectors in pictures", [["Anopheles", "Malaria (female)"], ["Aedes aegypti", "Dengue, chikungunya, Zika"], ["Culex", "Filariasis"], ["Phlebotominae", "Sandfly — kala-azar"], ["Tsetse fly", "Sleeping sickness"], ["Oriental rat flea", "Plague"]],
  { name: r => r[0].replace(/^Phlebotominae$/, "Sandfly") }),
  KIT.photos("Pioneers of medicine", [["Edward Jenner", "Smallpox vaccine, 1796"], ["Louis Pasteur", "Rabies vaccine"], ["Robert Koch", "TB germ"], ["Ronald Ross", "Malaria and the mosquito"], ["Alexander Fleming", "Penicillin, 1928"], ["Karl Landsteiner", "Blood groups"]]));

VISUAL = { mode: true, VIS: { key: "biology_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

/* Chemistry — particles in the three states, changes of state, particle sizes, a Bohr atom, the periodic table coloured by
   family, ionic and covalent bonds, the pH scale, the reactivity ladder, ores and allotropes in pictures, fuels by calorific
   value, how far α, β and γ get, a fission chain and the chemists (drawn by study-visual.js).
   place(), rows() and KIT come from applyVisual in tools/workbook/lib.js. */
const T = (x, y, t, c, a, s) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const M = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${c}"/></marker>`;
const num = s => parseFloat(String(s).replace(/,/g, "").match(/[\d.]+/) || [0]);

// K1 — particles in the three states; changes of state
const jig = (x, y, r, d) => `<circle cx="${x}" cy="${y}" r="7" fill="#2f6db5"><animateTransform attributeName="transform" type="translate" values="0 0;${r} ${-r};${-r} ${r};0 0" dur="${d}s" repeatCount="indefinite"/></circle>`;
const ST = `<svg class="dg" viewBox="0 0 660 230" role="img" aria-label="Particles in a solid, a liquid and a gas">
  ${[0, 1, 2].map(k => `<rect x="${20 + k * 215}" y="20" width="190" height="160" rx="10" fill="none" stroke="var(--rule)" stroke-width="2"/>`).join("")}
  ${[...Array(30)].map((_, i) => jig(45 + (i % 6) * 28, 50 + Math.floor(i / 6) * 26, 1.2, .5)).join("")}
  ${[...Array(18)].map((_, i) => jig(250 + (i * 37) % 160 + (i % 2) * 8, 105 + Math.floor(i / 5) * 18 + (i % 3) * 4, 5, 1.4)).join("")}
  ${[...Array(9)].map((_, i) => `<circle r="7" fill="#2f6db5"><animateMotion dur="${2 + i % 3}s" repeatCount="indefinite" path="M${460 + (i * 41) % 150} ${40 + (i * 53) % 120} l${50 - i * 9} ${30 + i * 7} l${-40 + i * 6} ${-20 - i * 4} z"/></circle>`).join("")}
  ${T(115, 205, "Solid", "var(--ink)", "middle", 14)}${T(330, 205, "Liquid", "var(--ink)", "middle", 14)}${T(545, 205, "Gas", "var(--ink)", "middle", 14)}
  <text x="115" y="222" text-anchor="middle" font-size="10.5" class="mut">packed, only vibrate</text><text x="330" y="222" text-anchor="middle" font-size="10.5" class="mut">close, slide past</text><text x="545" y="222" text-anchor="middle" font-size="10.5" class="mut">far apart, fly about</text></svg>`;
place("K1", "Three common states", KIT.fig("Particles in the three states", ST, "Heating makes particles move faster and spread out: solid → liquid → gas. Plasma (the Sun) and Bose–Einstein condensate are the fourth and fifth states."));
const CS = `<svg class="dg" viewBox="0 0 660 250" role="img" aria-label="Changes of state">
  <defs>${M("cr", "#c0392b")}${M("cb", "#2f6db5")}</defs>
  ${[["SOLID", 90, 190, "#7a5a3a"], ["LIQUID", 330, 50, "#2f6db5"], ["GAS", 570, 190, "#8a8a8a"]].map(([t, x, y, c]) => `<circle cx="${x}" cy="${y}" r="44" fill="${c}"/>${T(x, y + 5, t, "#fff", "middle", 13)}`).join("")}
  <path d="M120 155 Q190 80 285 60" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#cr)"/>${T(160, 92, "melting", "#c0392b", "end", 12)}
  <path d="M292 82 Q200 120 132 182" stroke="#2f6db5" stroke-width="3" fill="none" marker-end="url(#cb)"/>${T(232, 146, "freezing", "#2f6db5", "middle", 12)}
  <path d="M375 60 Q470 80 540 155" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#cr)"/>${T(500, 92, "evaporation / boiling", "#c0392b", "start", 12)}
  <path d="M528 182 Q460 120 368 82" stroke="#2f6db5" stroke-width="3" fill="none" marker-end="url(#cb)"/>${T(428, 146, "condensation", "#2f6db5", "middle", 12)}
  <path d="M135 200 H522" stroke="#c0392b" stroke-width="3" marker-end="url(#cr)"/>${T(330, 194, "sublimation (camphor, naphthalene, dry ice)", "#c0392b", "middle", 12)}
  <path d="M525 220 H137" stroke="#2f6db5" stroke-width="3" marker-end="url(#cb)"/>${T(330, 240, "deposition", "#2f6db5", "middle", 12)}</svg>`;
place("K1", "Changes of state", KIT.fig("Changes of state", CS, "Red arrows take heat in; blue arrows give heat out. Temperature stays fixed while the state changes — that heat is latent heat."));

// K2 — how big the particles are
const PS = `<svg class="dg" viewBox="0 0 660 170" role="img" aria-label="Particle sizes of a true solution, a colloid and a suspension">
  <rect x="20" y="50" width="160" height="40" fill="#2f8f4e"/><rect x="180" y="50" width="300" height="40" fill="#c69214"/><rect x="480" y="50" width="160" height="40" fill="#a9805a"/>
  ${T(100, 76, "True solution", "#fff", "middle", 13)}${T(330, 76, "Colloid", "#fff", "middle", 13)}${T(560, 76, "Suspension", "#fff", "middle", 13)}
  ${T(180, 110, "1 nm", "var(--ink)", "middle", 11.5)}${T(480, 110, "1000 nm", "var(--ink)", "middle", 11.5)}
  <text x="100" y="134" text-anchor="middle" font-size="10.5" class="mut">salt or sugar in water</text><text x="330" y="134" text-anchor="middle" font-size="10.5" class="mut">milk, blood, fog, smoke, jelly — Tyndall effect</text>
  <text x="560" y="134" text-anchor="middle" font-size="10.5" class="mut">muddy water, chalk in water</text>${T(20, 30, "particle size →", "var(--ink2)", "start", 11)}</svg>`;
place("K2", "True solution", KIT.fig("Solution, colloid, suspension", PS, "Only a suspension settles and is held back by filter paper. A colloid scatters a beam of light (Tyndall effect) — sunbeams in a dusty room, headlights in fog."));

// K3 — a Bohr atom (sodium, 2, 8, 1)
const SH = [2, 8, 1];
const BO = `<svg class="dg" viewBox="0 0 640 260" role="img" aria-label="Bohr model of a sodium atom">
  <circle cx="160" cy="130" r="26" fill="#c0503a"/>${T(160, 128, "11 p", "#fff", "middle", 11)}${T(160, 142, "12 n", "#fff", "middle", 11)}
  ${SH.map((n, k) => { const r = 50 + k * 34; return `<circle cx="160" cy="130" r="${r}" fill="none" stroke="var(--rule)" stroke-width="1.5"/><g>${[...Array(n)].map((_, i) => { const a = i / n * 2 * Math.PI;
    return `<circle cx="${(160 + r * Math.cos(a)).toFixed(1)}" cy="${(130 + r * Math.sin(a)).toFixed(1)}" r="6" fill="#2f6db5"/>`; }).join("")}<animateTransform attributeName="transform" type="rotate" from="0 160 130" to="${k % 2 ? -360 : 360} 160 130" dur="${6 + k * 4}s" repeatCount="indefinite"/></g>`; }).join("")}
  ${T(330, 60, "Sodium (Na) — Z = 11, A = 23", "var(--ink)", "start", 14)}<text x="330" y="84" font-size="12" class="mut">electrons in shells: K 2 · L 8 · M 1</text>
  <text x="330" y="106" font-size="12" class="mut">one valence electron → loses it easily (valency 1)</text><text x="330" y="140" font-size="12" class="mut">a shell holds at most 2n² electrons</text>
  <text x="330" y="160" font-size="12" class="mut">nucleus: protons + neutrons (Rutherford, Chadwick)</text></svg>`;
place("K3", "The three sub-atomic", KIT.fig("Bohr's atom", BO, "Electrons circle the nucleus in fixed shells (Bohr, 1913). The number of protons (atomic number) decides the element; the outer electrons decide how it reacts."),
  KIT.photos("Who opened up the atom", [["J. J. Thomson", "Electron, 1897"], ["Ernest Rutherford", "Nucleus, 1911"], ["Niels Bohr", "Shells, 1913"], ["James Chadwick", "Neutron, 1932"], ["John Dalton", "Atomic theory, 1808"]]));

// K4 — the periodic table, coloured by family
const SYM = "H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og".split(" ");
const pos = z => { // [column 1–18, row 1–7, or row 9–10 for the f-block]
  if (z === 1) return [1, 1]; if (z === 2) return [18, 1];
  const P = [[3, 10, 2], [11, 18, 3], [19, 36, 4], [37, 54, 5], [55, 86, 6], [87, 118, 7]];
  const [a, , p] = P.find(([a, b]) => z >= a && z <= b), i = z - a;
  if (p <= 3) return i < 2 ? [i + 1, p] : [i + 11, p];
  if (p <= 5) return [i + 1, p];
  if (i < 2) return [i + 1, p]; if (i < 17) return [i + 2, p + 3];   // lanthanides / actinides (La–Lu, Ac–Lr)
  return [i - 13, p];
};
const fam = (z, [c, r]) => r >= 9 ? "#b55a8a" : c === 1 && z !== 1 ? "#c0392b" : c === 2 ? "#e07b39" : c >= 3 && c <= 12 ? "#c69214" : c === 17 ? "#2f8f4e" : c === 18 ? "#2f6db5"
  : [1, 6, 7, 8, 15, 16, 34].includes(z) ? "#5aa85a" : [5, 14, 32, 33, 51, 52].includes(z) ? "#1f8a8a" : "#7a7a7a";
const PT = `<svg class="dg" viewBox="0 0 690 340" role="img" aria-label="The periodic table coloured by family">
  ${SYM.map((s, i) => { const z = i + 1, [c, r] = pos(z), x = 8 + (c - 1) * 37.5, y = 18 + (r - 1) * 34 + (r >= 9 ? -18 : 0), col = fam(z, [c, r]);
    return `<g><rect x="${x}" y="${y}" width="35" height="31" rx="4" fill="${col}" opacity="${[1, 2, 17, 18].includes(c) || r >= 9 ? .95 : .78}"><title>${z} ${s}</title></rect>` +
      `<text x="${x + 3}" y="${y + 10}" font-size="7" style="fill:#fff">${z}</text><text x="${x + 17.5}" y="${y + 25}" text-anchor="middle" font-size="12" font-weight="800" style="fill:#fff" data-lq="${s}">${s}</text></g>`; }).join("")}
  ${[["Alkali metals", "#c0392b"], ["Alkaline earth", "#e07b39"], ["Transition", "#c69214"], ["Halogens", "#2f8f4e"], ["Noble gases", "#2f6db5"], ["Other non-metals", "#5aa85a"], ["Metalloids", "#1f8a8a"], ["Lanthanides / actinides", "#b55a8a"]]
    .map(([t, c], i) => `<rect x="${90 + (i % 4) * 130}" y="${18 + Math.floor(i / 4) * 18}" width="12" height="12" rx="3" fill="${c}"/><text x="${106 + (i % 4) * 130}" y="${28 + Math.floor(i / 4) * 18}" font-size="10.5" class="b">${t}</text>`).join("")}</svg>`;
place("K4", "Layout of the modern table", KIT.fig("The modern periodic table", PT, "18 groups (columns) and 7 periods (rows), arranged by atomic number (Moseley). The two bottom rows are the lanthanides and actinides. Hover a box for its atomic number.", 640));

// K5 — ionic and covalent bonds
const BD = `<svg class="dg" viewBox="0 0 660 220" role="img" aria-label="Ionic bond in NaCl and covalent bonds in water">
  <defs>${M("ea", "#c0392b")}</defs>
  <circle cx="80" cy="90" r="34" fill="#e07b39"/>${T(80, 95, "Na", "#fff", "middle", 15)}<circle cx="230" cy="90" r="40" fill="#2f8f4e"/>${T(230, 95, "Cl", "#fff", "middle", 15)}
  <circle r="6" fill="#2f6db5"><animateMotion dur="2.4s" repeatCount="indefinite" path="M114 90 Q155 50 190 90"/></circle><path d="M114 80 Q155 40 186 78" fill="none" stroke="#c0392b" stroke-dasharray="4 3" marker-end="url(#ea)"/>
  ${T(155, 160, "Ionic: Na gives 1 electron → Na⁺ Cl⁻", "var(--ink)", "middle", 12)}<text x="155" y="180" text-anchor="middle" font-size="10.5" class="mut">metal + non-metal · high melting point · conducts in water</text>
  <circle cx="500" cy="80" r="34" fill="#c0392b"/>${T(500, 85, "O", "#fff", "middle", 15)}<circle cx="435" cy="125" r="22" fill="#2f6db5"/>${T(435, 130, "H", "#fff", "middle", 13)}<circle cx="565" cy="125" r="22" fill="#2f6db5"/>${T(565, 130, "H", "#fff", "middle", 13)}
  ${[[460, 103], [470, 110], [530, 110], [540, 103]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="var(--ink)"/>`).join("")}
  ${T(500, 175, "Covalent: shared electron pairs (H₂O)", "var(--ink)", "middle", 12)}<text x="500" y="195" text-anchor="middle" font-size="10.5" class="mut">non-metals · low melting point · usually no conduction</text></svg>`;
place("K5", "Ionic vs covalent", KIT.fig("Two ways atoms bond", BD, "Ionic bonds transfer electrons; covalent bonds share them. Both aim for a full outer shell (the octet rule)."));

// K7 — the pH scale with everyday things
const PH = rows("K7", "pH of").map(r => [r[0], num(r[1])]).filter(r => r[1] || r[0] === "Pure water");
const phc = v => `hsl(${Math.round(v / 14 * 260)},70%,48%)`;
const PHS = `<svg class="dg" viewBox="0 0 680 260" role="img" aria-label="The pH scale with everyday substances">
  ${[...Array(15)].map((_, v) => `<rect x="${20 + v * 43}" y="110" width="43" height="36" fill="${phc(v)}"/><text x="${41 + v * 43}" y="133" text-anchor="middle" font-size="13" font-weight="800" style="fill:#fff">${v}</text>`).join("")}
  ${PH.map(([n, v], i) => { const x = 20 + v * 43 + 21, up = i % 2 === 0, y = up ? 96 - (i % 4) * 9 : 160 + (i % 4) * 9;
    return `<line x1="${x}" y1="${up ? 110 : 146}" x2="${x}" y2="${up ? y + 4 : y - 10}" stroke="${phc(v)}"/><text x="${x}" y="${y}" text-anchor="middle" font-size="9.5" font-weight="700" style="fill:${phc(v)}">${n.replace(/ \(.*\)$/, "")}</text>`; }).join("")}
  ${T(20, 240, "← acidic", "#c0392b", "start", 13)}${T(340, 240, "neutral", "#2f8f4e", "middle", 13)}${T(660, 240, "basic →", "#7d4fb5", "end", 13)}</svg>`;
place("K7", "pH of", KIT.fig("The pH scale", PHS, "Below 7 is acidic, 7 is neutral, above 7 basic (alkaline). Each step is ten times stronger: pH 3 is ten times more acidic than pH 4. Rain below 5.6 is acid rain.", 600));

// K8 — the reactivity ladder
const RS = (rows("K8", "The reactivity series").find(r => r[0] === "Order") || ["", ""])[1].split(">").map(s => s.trim()).filter(Boolean);
const RL = `<svg class="dg" viewBox="0 0 680 150" role="img" aria-label="The reactivity series">
  ${RS.map((s, i) => { const h = s === "[H]"; return `<rect x="${12 + i * 47}" y="${30 + i * 4}" width="43" height="${80 - i * 4}" rx="6" fill="${h ? "#7a7a7a" : `hsl(${8 + i * 16},70%,${45 + i}%)`}"/>` +
    `<text x="${33 + i * 47}" y="${70 + i * 2}" text-anchor="middle" font-size="14" font-weight="800" style="fill:#fff">${s.replace(/[[\]]/g, "")}</text>`; }).join("")}
  ${T(12, 20, "most reactive ←", "#c0392b", "start", 11.5)}${T(668, 20, "→ least reactive (noble)", "#7d4fb5", "end", 11.5)}
  <text x="12" y="140" font-size="10.5" class="mut">Metals above hydrogen push it out of dilute acids; a metal displaces any metal below it from its salt.</text></svg>`;
place("K8", "The reactivity series", KIT.fig("The reactivity series", RL, "Potassium and sodium are so reactive they are kept under kerosene. Gold and platinum hardly react at all."));

// K10 — ores in pictures; K11 — carbon's forms
place("K10", "Metals and their ores", KIT.photos("Ores in pictures", [["Bauxite", "Aluminium"], ["Hematite", "Iron"], ["Magnetite", "Iron"], ["Galena", "Lead"], ["Cinnabar", "Mercury"], ["Chalcopyrite", "Copper"], ["Sphalerite", "Zinc (zinc blende)"], ["Cassiterite", "Tin"]]));
place("K11", "Allotropes of carbon", KIT.photos("Carbon's many forms", [["Diamond", "3-D network — hardest"], ["Graphite", "Layers — conducts"], ["Buckminsterfullerene", "C₆₀ football"], ["Graphene", "One atom thick"], ["Carbon nanotube", "Rolled graphene"], ["Charcoal", "Amorphous"]],
  { name: r => r[0].replace(/^Buckminsterfullerene$/, "Fullerene") }));

// K14 — fuels by calorific value
place("K14", "Calorific values", { k: "bars", title: "Heat from a kilogram of fuel", unit: "kJ/kg", left: 170, hi: 1, rows: rows("K14", "Calorific").map(r => [r[0], num(r[1]), ""]),
  cap: "Hydrogen gives the most heat per kilogram — and only water as exhaust — but is hard to store. Cow-dung cake gives the least." });

// K18 — how far each radiation gets; a chain reaction; the chemists
const RD = `<svg class="dg" viewBox="0 0 660 220" role="img" aria-label="Penetrating power of alpha, beta and gamma radiation">
  <circle cx="40" cy="110" r="18" fill="#f2c14e"/>${T(40, 150, "source", "var(--ink2)", "middle", 11)}
  <rect x="200" y="30" width="10" height="160" fill="#f4efe1" stroke="var(--rule)"/><rect x="340" y="30" width="22" height="160" fill="#b9c2cc"/><rect x="500" y="30" width="44" height="160" fill="#6b6f78"/>
  ${T(205, 210, "paper", "var(--ink)", "middle", 11)}${T(351, 210, "aluminium", "var(--ink)", "middle", 11)}${T(522, 210, "lead / concrete", "var(--ink)", "middle", 11)}
  ${[["α", 60, 196, "#c0392b"], ["β", 110, 336, "#2f6db5"], ["γ", 160, 640, "#7d4fb5"]].map(([n, y, x2, c]) => `<path d="M60 ${y} H${x2}" stroke="${c}" stroke-width="4" stroke-dasharray="8 6" style="animation:rvflow .8s linear infinite"/>${T(70, y - 8, n, c, "start", 16)}`).join("")}</svg>`;
place("K18", "Alpha, beta and gamma", KIT.fig("How far each radiation gets", RD, "Alpha (helium nuclei) is stopped by paper; beta (electrons) by a few mm of aluminium; gamma (energy waves) needs thick lead or concrete. Alpha ionises most; gamma penetrates most."));
const FS = `<svg class="dg" viewBox="0 0 660 266" role="img" aria-label="A nuclear fission chain reaction">
  ${(() => { let out = "", gen = [[60, 120]]; for (let g = 0; g < 3; g++) { const next = []; gen.forEach(([x, y]) => { out += `<circle cx="${x + 70}" cy="${y}" r="16" fill="#c0503a"/><text x="${x + 70}" y="${y + 4}" text-anchor="middle" font-size="9" font-weight="800" style="fill:#fff">U-235</text>` +
      `<path d="M${x} ${y} H${x + 52}" stroke="#2f6db5" stroke-width="2"/><circle cx="${x}" cy="${y}" r="4" fill="#2f6db5"/>`;
      [-1, 1].forEach(d => { const nx = x + 140, ny = y + d * 60 / (g + 1); out += `<path d="M${x + 86} ${y} L${nx} ${ny}" stroke="#2f6db5" stroke-width="1.5" stroke-dasharray="3 3"/>`; next.push([nx, ny]); }); }); gen = next; }
    return out; })()}
  ${T(30, 30, "1 neutron splits U-235 → 2–3 neutrons → more splits", "var(--ink)", "start", 12)}<text x="30" y="258" font-size="10.5" class="mut">Control rods (cadmium, boron) soak up neutrons; the moderator (heavy water, graphite) slows them down.</text></svg>`;
place("K18", "Fission and fusion", KIT.fig("A fission chain reaction", FS, "Each split releases energy and more neutrons, which split more nuclei. A reactor keeps the chain steady; a bomb lets it run away. Fusion (the Sun) joins light nuclei instead."));
place("K18", "Chemists and what", KIT.photos("Chemists in pictures", rows("K18", "Chemists").filter(r => !/^Nobel/.test(r[0])).slice(0, 12), { cap: r => r[1].replace(/;.*$/, ""),
  wiki: r => ({ "Acharya Prafulla Chandra Ray": "Prafulla Chandra Ray", "C. N. R. Rao": "C. N. R. Rao" })[r[0]] || r[0] }));

VISUAL = { mode: true, VIS: { key: "chemistry_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

/* Physics — motion graphs, a swinging pendulum trading KE and PE, Kepler's equal areas, buoyancy, a sound wave and the
   hearing bands, ray diagrams for a concave mirror and a convex lens, the eye and its defects, a prism's rainbow, the EM
   spectrum, series and parallel circuits, house-wiring colours, a bar magnet's field and the discoverers in pictures
   (drawn by study-visual.js). place(), rows() and KIT come from tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const M = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${c}"/></marker>`;
const ray = (d, c, id) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="2" marker-mid="url(#${id})" marker-end="url(#${id})"/>`;
const ax = (x, y, w, h, xl, yl) => `<path d="M${x} ${y - h} V${y} H${x + w}" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="${x + w}" y="${y + 14}" text-anchor="end" font-size="10" class="mut">${xl}</text><text x="${x + 4}" y="${y - h + 4}" font-size="10" class="mut">${yl}</text>`;

// L2 — motion graphs
const MG = `<svg class="dg" viewBox="0 0 660 200" role="img" aria-label="Distance–time and velocity–time graphs">
  ${[["At rest", "M30 120 H170", "distance", "#7a7a7a"], ["Uniform velocity", "M30 160 L170 40", "distance", "#2f6db5"], ["Uniform acceleration", "M30 160 L170 40", "velocity", "#c0392b"], ["Accelerating (d–t)", "M30 160 Q130 160 170 40", "distance", "#2f8f4e"]]
    .map(([t, d, y, c], i) => `<g transform="translate(${i * 162},0)">${ax(20, 165, 150, 140, "time", y)}<path d="${d}" fill="none" stroke="${c}" stroke-width="3"/>${T(95, 190, t, c, "middle", 11.5)}</g>`).join("")}</svg>`;
place("L2", "Equations of motion", KIT.fig("Motion in four graphs", MG, "The slope of a distance–time graph is speed; the slope of a velocity–time graph is acceleration, and the area under it is the distance covered."));

// L3 — Newton's three laws
place("L3", "Three laws", { k: "cards", title: "Newton's three laws", rows: rows("L3", "Three laws").map((r, i) => [r[0].replace(/^(\d)(st|nd|rd)/, "$1$2 law"), r[1], r[2], ["🚌", "⚖️", "🚀"][i]]) });

// L4 — a pendulum trading kinetic and potential energy
const PD = `<svg class="dg" viewBox="0 0 640 260" role="img" aria-label="A pendulum trading potential and kinetic energy">
  <line x1="60" y1="20" x2="360" y2="20" stroke="var(--ink)" stroke-width="4"/>
  <g class="pnd"><line x1="210" y1="20" x2="210" y2="200" stroke="var(--ink2)" stroke-width="2"/><circle cx="210" cy="210" r="16" fill="#c0392b"/></g>
  <path d="M95 175 Q210 250 325 175" fill="none" stroke="var(--rule)" stroke-dasharray="4 4"/>
  ${T(70, 160, "max PE", "#2f6db5", "middle", 11.5)}${T(350, 160, "max PE", "#2f6db5", "middle", 11.5)}${T(210, 252, "max KE", "#c0392b", "middle", 11.5)}
  ${T(420, 70, "At the ends", "#2f6db5", "start", 13)}<text x="420" y="88" font-size="11.5" class="mut">stops for an instant: all PE</text>
  ${T(420, 130, "At the bottom", "#c0392b", "start", 13)}<text x="420" y="148" font-size="11.5" class="mut">fastest: all KE</text>
  ${T(420, 190, "In between", "var(--ink)", "start", 13)}<text x="420" y="208" font-size="11.5" class="mut">KE + PE stays the same</text>
  <style>.pnd{transform-origin:210px 20px;animation:pswing 2.4s ease-in-out infinite alternate}@keyframes pswing{from{transform:rotate(38deg)}to{transform:rotate(-38deg)}}@media (prefers-reduced-motion:reduce){.pnd{animation:none}}</style></svg>`;
place("L4", "Energy", KIT.fig("Energy changes form, the total stays", PD, "A swinging pendulum turns potential energy into kinetic energy and back — the law of conservation of energy (air friction slowly takes some away as heat)."));

// L5 — Kepler's second law
// an ellipse (a, b) with the Sun at its left focus; sectors of equal area near perihelion and aphelion; the planet timed by Kepler's equation
const KA = 220, KB = 165, KX = 270, KY = 175, KC = Math.sqrt(KA * KA - KB * KB), KE = KC / KA, SX = KX - KC;
const kpt = E => [KX + KA * Math.cos(E), KY + KB * Math.sin(E)];
const sector = (E1, E2) => { const pts = []; for (let k = 0; k <= 24; k++) pts.push(kpt(E1 + (E2 - E1) * k / 24)); return `M${SX} ${KY} L` + pts.map(p => p.map(v => v.toFixed(1)).join(" ")).join(" L") + " Z"; };
const mean = E => (E - Math.PI) - KE * Math.sin(E - Math.PI);      // mean anomaly from perihelion (E = π is perihelion here)
const wP = .5, areaP = Math.abs(mean(Math.PI + wP) - mean(Math.PI - wP));
let wA = .05; while (Math.abs(mean(wA) - mean(-wA)) < areaP && wA < 3) wA += .002;
const orbitPts = []; for (let k = 0; k <= 72; k++) { const Mk = k / 72 * 2 * Math.PI; let E = Mk; for (let it = 0; it < 30; it++) E = Mk + KE * Math.sin(E); orbitPts.push(kpt(Math.PI + E)); }
const lens = orbitPts.map((p, k) => k ? Math.hypot(p[0] - orbitPts[k - 1][0], p[1] - orbitPts[k - 1][1]) : 0), tot = lens.reduce((a, b) => a + b, 0);
let acc = 0; const keyPts = lens.map(l => ((acc += l) / tot).toFixed(4)).join(";"), keyTimes = orbitPts.map((_, k) => (k / 72).toFixed(4)).join(";");
const KP = `<svg class="dg" viewBox="0 0 660 360" role="img" aria-label="Kepler's law of equal areas">
  <ellipse cx="${KX}" cy="${KY}" rx="${KA}" ry="${KB}" fill="none" stroke="var(--ink2)" stroke-dasharray="5 4"/>
  <path d="${sector(Math.PI - wP, Math.PI + wP)}" fill="#c0392b" opacity=".35"/><path d="${sector(-wA, wA)}" fill="#2f6db5" opacity=".35"/>
  <circle cx="${SX}" cy="${KY}" r="20" fill="#f6c343"/>${T(SX, KY + 5, "Sun", "#5a3b00", "middle", 11)}
  <circle r="8" fill="#2f6db5"><animateMotion dur="8s" repeatCount="indefinite" calcMode="linear" keyPoints="${keyPts}" keyTimes="${keyTimes}" path="M${orbitPts.map(p => p.map(v => v.toFixed(1)).join(" ")).join(" L")}"/></circle>
  ${T(30, 40, "near the Sun: fast", "#c0392b", "start", 12)}${T(500, 40, "far away: slow", "#2f6db5", "start", 12)}${T(520, 350, "equal areas in equal times", "var(--ink)", "middle", 12.5)}</svg>`;
place("L5", "Orbits & Kepler", KIT.fig("Kepler's second law", KP, "A planet sweeps equal areas in equal times, so it moves fastest at perihelion (nearest the Sun) and slowest at aphelion. The Sun sits at one focus of the ellipse (first law)."));

// L6 — floating and sinking; Boyle and Charles
const BU = `<svg class="dg" viewBox="0 0 640 240" role="img" aria-label="Buoyancy: weight down, upthrust up">
  <defs>${M("bu", "#2f6db5")}${M("bw", "#c0392b")}</defs>
  <rect x="40" y="90" width="260" height="130" fill="#cfe6f5"/><rect x="130" y="70" width="80" height="60" rx="6" fill="#c69214"/>
  <path d="M150 210 V112" stroke="#2f6db5" stroke-width="4" marker-end="url(#bu)"/><path d="M190 100 V200" stroke="#c0392b" stroke-width="4" marker-end="url(#bw)"/>
  ${T(200, 196, "weight (mg)", "#c0392b")}${T(60, 214, "upthrust", "#2f6db5")}
  ${T(340, 60, "Floats when", "var(--ink)", "start", 13)}<text x="340" y="80" font-size="11.5" class="mut">upthrust = its weight, before it is fully under</text>
  ${T(340, 120, "Archimedes", "var(--ink)", "start", 13)}<text x="340" y="140" font-size="11.5" class="mut">upthrust = weight of liquid displaced</text>
  ${T(340, 180, "Sea water floats you better", "var(--ink)", "start", 13)}<text x="340" y="200" font-size="11.5" class="mut">denser liquid → more upthrust (Dead Sea)</text></svg>`;
place("L6", "Floating & sinking", KIT.fig("Why things float", BU, "A ship floats because its hollow shape displaces a lot of water; an iron nail sinks because it displaces too little."));
const GL = `<svg class="dg" viewBox="0 0 640 200" role="img" aria-label="Boyle's and Charles's laws as graphs">
  <g>${ax(40, 170, 220, 150, "V", "P")}<path d="M60 30 Q90 140 250 155" fill="none" stroke="#2f6db5" stroke-width="3"/>${T(150, 195, "Boyle: P ∝ 1/V (T fixed)", "#2f6db5", "middle", 12)}</g>
  <g transform="translate(320,0)">${ax(40, 170, 220, 150, "T (kelvin)", "V")}<path d="M40 170 L250 40" fill="none" stroke="#c0392b" stroke-width="3"/>${T(150, 195, "Charles: V ∝ T (P fixed)", "#c0392b", "middle", 12)}</g></svg>`;
place("L6", "Gas laws", KIT.fig("Two gas laws as graphs", GL, "Squeeze a gas and its pressure rises (Boyle, 1662); heat it and it expands (Charles). A balloon shrinks in a freezer."));

// L8 — a sound wave; the hearing bands
const SW = `<svg class="dg" viewBox="0 0 660 230" role="img" aria-label="A longitudinal sound wave and the hearing bands">
  ${[...Array(48)].map((_, i) => { const x = 20 + i * 13 + 5 * Math.sin(i * .9); return `<line x1="${x.toFixed(1)}" y1="20" x2="${x.toFixed(1)}" y2="80" stroke="#2f6db5" stroke-width="2"><animate attributeName="x1" values="${x.toFixed(1)};${(x + 6).toFixed(1)};${x.toFixed(1)}" dur="1s" begin="${(i * .04).toFixed(2)}s" repeatCount="indefinite"/><animate attributeName="x2" values="${x.toFixed(1)};${(x + 6).toFixed(1)};${x.toFixed(1)}" dur="1s" begin="${(i * .04).toFixed(2)}s" repeatCount="indefinite"/></line>`; }).join("")}
  ${T(20, 100, "compression · rarefaction · compression … (a longitudinal wave)", "var(--ink2)", "start", 11)}
  <rect x="20" y="130" width="140" height="40" fill="#7d4fb5"/><rect x="160" y="130" width="330" height="40" fill="#2f8f4e"/><rect x="490" y="130" width="150" height="40" fill="#c0503a"/>
  ${T(90, 155, "Infrasonic", "#fff", "middle", 12)}${T(325, 155, "Audible — human hearing", "#fff", "middle", 12)}${T(565, 155, "Ultrasonic", "#fff", "middle", 12)}
  ${T(160, 190, "20 Hz", "var(--ink)", "middle", 11)}${T(490, 190, "20 kHz", "var(--ink)", "middle", 11)}
  <text x="20" y="214" font-size="10.5" class="mut">earthquakes, elephants, whales</text><text x="640" y="214" text-anchor="end" font-size="10.5" class="mut">bats, dolphins, SONAR, ultrasound scans</text></svg>`;
place("L8", "Frequency bands", KIT.fig("Sound: how it travels, what we hear", SW, "Sound needs a medium and travels fastest in solids, slower in liquids, slowest in gases; it cannot cross a vacuum."),
  { k: "bars", title: "Speed of sound", unit: "m/s", left: 110, hi: 1, sort: false, rows: [["Air (20 °C)", 343, ""], ["Water", 1480, ""], ["Steel", 5960, ""]], cap: "About 4× faster in water and 17× faster in steel than in air." });

// L9 — concave mirror ray diagram (object beyond C)
const CM = `<svg class="dg" viewBox="0 0 660 240" role="img" aria-label="Concave mirror: object beyond C gives a real, inverted, smaller image between F and C">
  <defs>${M("rm", "#c0392b")}</defs>
  <path d="M600 20 Q560 120 600 220" fill="none" stroke="#2f6db5" stroke-width="5"/><line x1="20" y1="120" x2="600" y2="120" stroke="var(--ink2)" stroke-dasharray="4 4"/>
  ${[["C", 360], ["F", 480], ["P", 584]].map(([n, x]) => `<circle cx="${x}" cy="120" r="3.5" fill="var(--ink)"/>${T(x, 140, n, "var(--ink)", "middle", 12)}`).join("")}
  <line x1="200" y1="120" x2="200" y2="60" stroke="var(--ink)" stroke-width="3"/>${T(200, 52, "object", "var(--ink)", "middle", 11)}
  ${ray("M200 60 L400 60 L578 60 L441 144", "#c0392b", "rm")}${ray("M200 60 L480 120 L578 141 L441 141", "#c0392b", "rm")}
  <line x1="441" y1="120" x2="441" y2="142" stroke="#7d4fb5" stroke-width="3"/>${T(441, 165, "image", "#7d4fb5", "middle", 11)}
  ${T(20, 220, "Beyond C → between F and C: real, inverted, diminished", "var(--ink)", "start", 12)}</svg>`;
place("L9", "Concave mirror", KIT.fig("A concave mirror at work", CM, "A ray parallel to the axis reflects through F; a ray through F reflects parallel. Where they meet is the image. Only an object between P and F gives a virtual, erect, enlarged image (a shaving mirror)."));

// L10 — refractive indices; a convex lens
place("L10", "Refractive indices", { k: "bars", title: "Refractive index", unit: "", left: 140, hi: 1, sort: false, rows: rows("L10", "Refractive indices").map(r => [r[0], parseFloat(r[1].replace(/[^\d.]/g, "")) || 1, ""]),
  cap: "The higher the index, the slower light goes (speed in vacuum ÷ n) and the more it bends. Diamond's 2.42 traps light inside — that is the sparkle (total internal reflection)." });
const CL = `<svg class="dg" viewBox="0 0 660 240" role="img" aria-label="Convex lens forming a real image">
  <defs>${M("rl", "#c0392b")}</defs><line x1="20" y1="120" x2="640" y2="120" stroke="var(--ink2)" stroke-dasharray="4 4"/>
  <path d="M330 20 Q360 120 330 220 Q300 120 330 20 Z" fill="#cfe6f5" stroke="#2f6db5" stroke-width="2"/>
  ${[["2F", 130], ["F", 230], ["F", 430], ["2F", 530]].map(([n, x]) => `<circle cx="${x}" cy="120" r="3.5" fill="var(--ink)"/>${T(x, 140, n, "var(--ink)", "middle", 11)}`).join("")}
  <line x1="90" y1="120" x2="90" y2="70" stroke="var(--ink)" stroke-width="3"/>${T(90, 62, "object", "var(--ink)", "middle", 11)}
  ${ray("M90 70 L210 70 L330 70 L430 120 L501 155.6 L560 185", "#c0392b", "rl")}${ray("M90 70 L210 95 L330 120 L501 155.6 L560 168", "#c0392b", "rl")}
  <line x1="501" y1="120" x2="501" y2="155.6" stroke="#7d4fb5" stroke-width="3"/>${T(501, 178, "image", "#7d4fb5", "middle", 11)}
  ${T(20, 225, "Beyond 2F → between F and 2F: real, inverted, diminished (a camera)", "var(--ink)", "start", 12)}</svg>`;
place("L10", "Lenses", KIT.fig("A convex lens at work", CL, "A ray parallel to the axis bends through F on the far side; a ray through the optical centre goes straight on. A convex lens converges light (positive power); a concave lens spreads it (negative power)."));

// L11 — the eye; the defects; the prism
const EY = `<svg class="dg" viewBox="0 0 660 260" role="img" aria-label="Parts of the human eye">
  <circle cx="250" cy="130" r="110" fill="#fbf3ea" stroke="#c0503a" stroke-width="3"/><path d="M140 130 Q120 90 150 60" fill="none" stroke="#2f6db5" stroke-width="5" transform="translate(4,0)"/>
  <path d="M152 70 Q130 130 152 190" fill="none" stroke="#2f6db5" stroke-width="4"/><path d="M162 90 V110 M162 150 V170" stroke="#5a3b2b" stroke-width="7"/>
  <ellipse cx="180" cy="130" rx="14" ry="30" fill="#cfe6f5" stroke="#2f6db5" stroke-width="2"/>
  <path d="M335 60 Q380 130 335 200" fill="none" stroke="#c0392b" stroke-width="6"/><path d="M355 130 H420" stroke="#c69214" stroke-width="10" stroke-linecap="round"/>
  <path d="M60 110 L180 125 L345 150 M60 150 L180 135 L345 110" fill="none" stroke="#e0a040" stroke-width="1.5"/>
  ${[["Cornea", 150, 70, 470, 30], ["Iris", 162, 95, 470, 65], ["Pupil", 162, 130, 470, 100], ["Lens", 180, 115, 470, 135], ["Retina — real, inverted image", 345, 170, 470, 170], ["Optic nerve", 405, 130, 470, 205]]
    .map(([t, x, y, tx, ty]) => `<line x1="${x}" y1="${y}" x2="${tx}" y2="${ty}" stroke="var(--ink2)"/>${T(tx + 4, ty + 4, t, "var(--ink)", "start", 11.5)}`).join("")}</svg>`;
place("L11", "Eye parts", KIT.fig("The human eye", EY, "Most of the bending happens at the cornea; the lens changes shape to focus (accommodation). The image on the retina is real and inverted — the brain turns it upright."));
const DF = `<svg class="dg" viewBox="0 0 660 200" role="img" aria-label="Myopia and hypermetropia and their correction">
  ${[["Myopia", "image in front of retina", 0, "concave lens", -1], ["Hypermetropia", "image behind retina", 330, "convex lens", 1]].map(([n, s, x, fix, k]) =>
    `<g transform="translate(${x},0)"><circle cx="190" cy="100" r="60" fill="#fbf3ea" stroke="#c0503a" stroke-width="2"/><path d="M245 60 Q262 100 245 140" stroke="#c0392b" stroke-width="4" fill="none"/>
     <ellipse cx="140" cy="100" rx="8" ry="22" fill="#cfe6f5" stroke="#2f6db5"/>
     <path d="M30 80 L140 80 L${k < 0 ? 215 : 275} 100 M30 120 L140 120 L${k < 0 ? 215 : 275} 100" fill="none" stroke="#e0a040" stroke-width="1.8"/><circle cx="${k < 0 ? 215 : 275}" cy="100" r="4" fill="#c0392b"/>
     ${k < 0 ? '<path d="M60 70 Q70 100 60 130 H80 Q70 100 80 70 Z" fill="#d9c8f0" stroke="#7d4fb5"/>' : '<path d="M70 70 Q55 100 70 130 Q85 100 70 70 Z" fill="#d9c8f0" stroke="#7d4fb5"/>'}
     ${T(160, 185, n, "var(--ink)", "middle", 13)}<text x="160" y="22" text-anchor="middle" font-size="11" class="mut">${s} → ${fix}</text></g>`).join("")}</svg>`;
place("L11", "Defects", KIT.fig("Two common defects and their lenses", DF, "Myopia (eyeball too long): a concave lens spreads the rays so they meet on the retina. Hypermetropia (eyeball too short): a convex lens brings them in sooner."));
const VIB = ["#8b00ff", "#4b0082", "#2f6db5", "#2f8f4e", "#f2c14e", "#f28c28", "#c0392b"];
const PR = `<svg class="dg" viewBox="0 0 660 230" role="img" aria-label="A prism splitting white light into seven colours">
  <path d="M260 200 L330 40 L400 200 Z" fill="#e8f1f8" stroke="#2f6db5" stroke-width="2"/>
  <path d="M40 140 L300 120" stroke="#fff" stroke-width="6"/><path d="M40 140 L300 120" stroke="var(--ink2)" stroke-width="1" stroke-dasharray="3 3"/>${T(40, 128, "white light", "var(--ink)", "start", 11.5)}
  ${VIB.map((c, i) => `<path d="M300 120 L365 ${132 + i * 3} L620 ${80 + i * 20}" fill="none" stroke="${c}" stroke-width="5" class="anim-in" style="animation-delay:${i * 90}ms"/>${T(628, 84 + i * 20, "VIBGYOR"[i], c, "start", 12)}`).join("")}
  ${T(470, 220, "red bends least, violet most", "var(--ink2)", "middle", 11)}</svg>`;
place("L11", "Dispersion", KIT.fig("Dispersion: a prism's rainbow", PR, "Newton showed that white light is seven colours. Each colour bends by a different amount because its speed in glass differs — red least, violet most. A rainbow is dispersion in raindrops."));

// L12 — the EM spectrum as a band
const EMR = rows("L12", "Spectrum");
const EMS = `<svg class="dg" viewBox="0 0 680 210" role="img" aria-label="The electromagnetic spectrum">
  <defs><linearGradient id="vis" x1="0" x2="1">${VIB.slice().reverse().map((c, i) => `<stop offset="${i / 6}" stop-color="${c}"/>`).join("")}</linearGradient></defs>
  ${EMR.map((r, i) => { const x = 10 + i * 95; return `<rect x="${x}" y="60" width="93" height="46" fill="${i === 3 ? "url(#vis)" : ["#7a5a3a", "#a9805a", "#c0503a", "", "#7d4fb5", "#4b5bb5", "#2a2a6a"][i]}"/>${T(x + 46, 88, r[0].replace(/ waves| rays/, ""), "#fff", "middle", 11.5)}` +
    `<text x="${x + 46}" y="128" text-anchor="middle" font-size="9.5" class="mut">${r[2].split(/[;,]/)[0]}</text><text x="${x + 46}" y="${i % 2 ? 160 : 146}" text-anchor="middle" font-size="9.5" style="fill:var(--accent)">${r[1].replace(/ \(.*$|^—; .*$/, "")}</text>`; }).join("")}
  <path d="M${[...Array(120)].map((_, i) => `${10 + i * 5.55} ${30 + 14 * Math.sin(i * i * .004)}`).join(" L")}" fill="none" stroke="var(--ink2)" stroke-width="1.6"/>
  ${T(10, 20, "← longer wavelength, lower energy", "var(--ink2)", "start", 11)}${T(670, 20, "shorter wavelength, higher energy →", "var(--ink2)", "end", 11)}
  <text x="10" y="196" font-size="10.5" class="mut">Visible light is a thin slice: about 0.4–0.7 µm.</text></svg>`;
place("L12", "Spectrum", KIT.fig("The electromagnetic spectrum", EMS, "All travel at the speed of light in vacuum. From radio to gamma: wavelength falls while frequency and energy rise. Orange labels are the discoverers.", 600));

// L13 — series and parallel circuits
const bulb = (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="#f6e08a" stroke="var(--ink)" stroke-width="1.6"/><path d="M${x - 6} ${y - 6} L${x + 6} ${y + 6} M${x + 6} ${y - 6} L${x - 6} ${y + 6}" stroke="var(--ink)" stroke-width="1.4"/>`;
const bat = (x, y) => `<path d="M${x} ${y - 14} V${y + 14} M${x + 8} ${y - 8} V${y + 8}" stroke="var(--ink)" stroke-width="3"/>`;
const CI = `<svg class="dg" viewBox="0 0 660 230" role="img" aria-label="Series and parallel circuits">
  <g><path d="M40 60 H280 V180 H40 Z" fill="none" stroke="var(--ink)" stroke-width="2"/>${bat(36, 120)}${bulb(110, 60)}${bulb(210, 60)}${bulb(280, 120)}
    <circle r="4" fill="#c0392b"><animateMotion dur="3s" repeatCount="indefinite" path="M40 60 H280 V180 H40 Z"/></circle>${T(160, 215, "Series: one path", "var(--ink)", "middle", 13)}
    <text x="160" y="110" text-anchor="middle" font-size="10.5" class="mut">same current through all</text><text x="160" y="126" text-anchor="middle" font-size="10.5" class="mut">R = R₁ + R₂ + R₃</text></g>
  <g transform="translate(340,0)"><path d="M30 40 V190 M30 40 H280 V190 H30 M30 100 H280 M30 150 H280" fill="none" stroke="var(--ink)" stroke-width="2"/>${bat(26, 70)}${bulb(155, 40)}${bulb(155, 100)}${bulb(155, 150)}
    ${[40, 100, 150].map((y, i) => `<circle r="4" fill="#c0392b"><animateMotion dur="2.2s" begin="${i * .3}s" repeatCount="indefinite" path="M30 ${y} H280"/></circle>`).join("")}${T(155, 215, "Parallel: many paths", "var(--ink)", "middle", 13)}
    <text x="155" y="182" text-anchor="middle" font-size="10.5" class="mut">same voltage · 1/R = 1/R₁ + 1/R₂ + 1/R₃</text></g></svg>`;
place("L13", "Combining resistors", KIT.fig("Series and parallel", CI, "Houses are wired in parallel: each appliance gets the full 220 V and one failing does not switch off the rest. A fuse goes in series with the live wire."));

// L14 — wiring colours
const WR = rows("L14", "Wiring colours"), WC = { Red: "#c0392b", Brown: "#7a4a22", Black: "#222", Blue: "#2f6db5", Green: "#2f8f4e", "Green-yellow": "repeating-linear-gradient(90deg,#2f8f4e 0 14px,#e6c229 14px 28px)" };
place("L14", "Wiring colours", { k: "info", title: "House-wiring colours", html: `<div class="fam">${WR.map(r => `<div><b>${r[0]}</b>${[["Old (NCERT)", r[1]], ["New (IS)", r[2]]].map(([k, c]) =>
  `<small style="display:flex;align-items:center;gap:8px"><i style="display:inline-block;width:70px;height:12px;border-radius:6px;background:${WC[c] || "#999"}"></i>${k}: ${c}</small>`).join("")}</div>`).join("")}</div>`,
  cap: "The live wire carries the 220 V; the neutral returns the current; the earth wire takes leaking current safely to the ground." });

// L15 — a bar magnet's field
const BM = `<svg class="dg" viewBox="0 0 640 240" role="img" aria-label="Field lines around a bar magnet">
  ${[30, 55, 80, 105].map(k => `<path d="M400 120 C${400 + k * 1.2} ${120 - k * .9},${240 - k * 1.2} ${120 - k * .9},240 120" fill="none" stroke="#2f6db5" stroke-opacity=".7" stroke-width="1.5" stroke-dasharray="5 5" style="animation:rvflow 1.4s linear infinite"/>` +
    `<path d="M400 120 C${400 + k * 1.2} ${120 + k * .9},${240 - k * 1.2} ${120 + k * .9},240 120" fill="none" stroke="#2f6db5" stroke-opacity=".7" stroke-width="1.5" stroke-dasharray="5 5" style="animation:rvflow 1.4s linear infinite"/>`).join("")}
  <rect x="240" y="100" width="80" height="40" fill="#c0392b"/><rect x="320" y="100" width="80" height="40" fill="#2f6db5"/>${T(280, 126, "S", "#fff", "middle", 16)}${T(360, 126, "N", "#fff", "middle", 16)}
  <text x="20" y="232" font-size="11" class="mut">Outside the magnet the lines run from N to S; they never cross; crowded lines = a stronger field.</text></svg>`;
place("L15", "Field lines", KIT.fig("A bar magnet's field", BM, "Sprinkle iron filings around a bar magnet and they trace these lines. Inside the magnet the lines run from S back to N, so each one is a closed loop."));

// L16 — the discoverers
place("L16", "Discovery one-liners", KIT.photos("Discoverers in pictures", [["Henri Becquerel", "Radioactivity, 1896"], ["Marie Curie", "Polonium, radium"], ["J. J. Thomson", "Electron, 1897"], ["Ernest Rutherford", "Nucleus, 1911"], ["James Chadwick", "Neutron, 1932"],
  ["C. V. Raman", "Raman effect, 1928"], ["Satyendra Nath Bose", "Bose–Einstein statistics"], ["Albert Einstein", "Photoelectric effect"], ["Victor Francis Hess", "Cosmic rays"], ["Wilhelm Röntgen", "X-rays, 1895"]]));

VISUAL = { mode: true, VIS: { key: "physics_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

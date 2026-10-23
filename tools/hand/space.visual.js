/* Space — orbits with satellites moving on them, the Lagrange points, India's rockets side by side to scale, a PSLV's
   stages, ISRO's centres and launch sites on the map, the trip to the Moon and to Mars drawn as orbits, timelines of firsts
   and photos (drawn by study-visual.js). place(), rows() and KIT come from tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const orbit = (cx, cy, rx, ry, c, dur, r) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="${c}" stroke-width="1.6" stroke-dasharray="4 4"/>` +
  `<circle r="${r || 5}" fill="${c}"><animateMotion dur="${dur}s" repeatCount="indefinite" path="M${cx - rx} ${cy} a${rx} ${ry} 0 1 0 ${2 * rx} 0 a${rx} ${ry} 0 1 0 ${-2 * rx} 0"/></circle>`;
const earth = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#2f6db5"/><path d="M${x - r * .5} ${y - r * .3} q${r * .3} ${-r * .3} ${r * .6} 0 q${r * .1} ${r * .4} ${-r * .3} ${r * .5}z" fill="#5aa85a"/>`;

// L2 — orbits by height (not to scale) and the Lagrange points
const OR = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="LEO, MEO and GEO around the Earth">
  ${orbit(200, 150, 190, 130, "#c0392b", 14, 6)}${orbit(200, 150, 120, 84, "#c69214", 8)}${orbit(200, 150, 62, 46, "#2f8f4e", 3.5)}${earth(200, 150, 34)}
  ${T(420, 60, "GEO — 35,786 km", "#c0392b", "start", 14)}<text x="420" y="78" font-size="11" class="mut">one orbit = one day; looks fixed in the sky</text>
  ${T(420, 130, "MEO — ~20,000 km", "#a07000", "start", 14)}<text x="420" y="148" font-size="11" class="mut">navigation: GPS, GLONASS, Galileo</text>
  ${T(420, 200, "LEO — 160–2,000 km", "#2f8f4e", "start", 14)}<text x="420" y="218" font-size="11" class="mut">ISS, Hubble, imaging; ~90 min a lap</text>
  <text x="20" y="290" font-size="10.5" class="mut">Not to scale. The higher the orbit, the slower the satellite goes round.</text></svg>`;
place("L2", "Orbits by height", KIT.fig("Three orbits by height", OR, "Low orbits give sharp pictures and fast laps; geostationary satellites hover over one spot of the equator, so dish antennas never need to move."));
const LG = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="The five Sun–Earth Lagrange points">
  <circle cx="200" cy="150" r="34" fill="#f6c343"/>${T(200, 155, "Sun", "#5a3b00", "middle", 12)}
  <circle cx="200" cy="150" r="230" fill="none" stroke="var(--rule)" stroke-dasharray="4 5"/>
  ${earth(430, 150, 12)}${T(430, 180, "Earth", "#2f6db5", "middle", 11)}
  ${[["L1", 395, 150, "Aditya-L1, SOHO"], ["L2", 470, 150, "JWST, Gaia"], ["L3", -30, 150, ""], ["L4", 315, -49, ""], ["L5", 315, 349, ""]].map(([n, x, y, t]) =>
    `<circle cx="${x}" cy="${y}" r="7" fill="#7d4fb5"/>${T(x, y - 12, n, "#7d4fb5", "middle", 13)}${t ? `<text x="${x}" y="${y + 24}" text-anchor="middle" font-size="10.5" class="mut">${t}</text>` : ""}`).join("")}
  <path d="M200 150 L315 -49 L430 150 L315 349 Z" fill="none" stroke="#7d4fb5" stroke-opacity=".35"/></svg>`;
place("L2", "The Sun–Earth", Object.assign(KIT.fig("The five Lagrange points", LG.replace('viewBox="0 0 660 300"', 'viewBox="-60 -80 600 460"'), "L1 and L2 sit about 1.5 million km from Earth, towards and away from the Sun. L4 and L5 form equilateral triangles with the Sun and Earth — the only stable points.")));

// L3 — a PSLV's four stages
const ST = [["PS4", "Liquid (2 × engines)", "#7d4fb5", 40], ["PS3", "Solid", "#c69214", 34], ["PS2", "Liquid — Vikas", "#2f6db5", 60], ["PS1", "Solid + 6 strap-ons", "#c0503a", 90]];
let sy = 50;
const PS = `<svg class="dg" viewBox="0 0 640 320" role="img" aria-label="The four stages of the PSLV">
  <path d="M110 10 L130 50 H90 Z" fill="#d9d9d9" stroke="var(--ink2)"/>${T(140, 34, "Heat shield (satellite inside)", "var(--ink2)", "start", 11)}
  ${ST.map(([n, t, c, h]) => { const y = sy; sy += h; return `<rect x="90" y="${y}" width="40" height="${h}" fill="${c}" stroke="var(--sheet)"/>${T(110, y + h / 2 + 4, n, "#fff", "middle", 11)}<line x1="134" y1="${y + h / 2}" x2="180" y2="${y + h / 2}" stroke="var(--ink2)"/>${T(186, y + h / 2 + 4, t, c, "start", 12.5)}`; }).join("")}
  ${[66, 140].map(x => `<rect x="${x}" y="${sy - 70}" width="14" height="70" rx="4" fill="#c0503a" opacity=".8"/>`).join("")}
  <path d="M95 ${sy} q15 40 30 0" fill="#f6c343"><animate attributeName="d" values="M95 ${sy} q15 40 30 0;M95 ${sy} q15 60 30 0;M95 ${sy} q15 40 30 0" dur=".4s" repeatCount="indefinite"/></path>
  ${T(400, 90, "Solid–Liquid–Solid–Liquid", "var(--ink)", "start", 14)}<text x="400" y="112" font-size="11.5" class="mut">PSLV — the 'workhorse'</text><text x="400" y="132" font-size="11.5" class="mut">first success: PSLV-D2, 1994</text>
  <text x="400" y="152" font-size="11.5" class="mut">Chandrayaan-1, Mangalyaan, Aditya-L1</text></svg>`;
place("L3", "Indian engines", KIT.fig("Inside a PSLV", PS, "Each stage drops away when its fuel is spent. The PSLV alternates solid and liquid stages; GSLV and LVM3 add a cryogenic upper stage (liquid hydrogen + liquid oxygen)."));

// L4 — the pioneers
place("L4", "People to know", KIT.photos("Pioneers in pictures", [["Vikram Sarabhai", "Father of the space programme"], ["Satish Dhawan", "ISRO chairman, 1972–84"], ["A. P. J. Abdul Kalam", "SLV-3 project director"], ["Aryabhata (satellite)", "First Indian satellite, 1975"],
  ["Rakesh Sharma", "First Indian in space, 1984"], ["Thumba Equatorial Rocket Launching Station", "Thumba, 1963"]], { name: r => r[0].replace(/ \(satellite\)$/, "").replace(/^Thumba .*/, "TERLS, Thumba") }));

// L5 — ISRO's centres
const CEN = { "SAC": [72.57, 23.03], "URSC": [77.66, 13.0], "VSSC": [76.87, 8.53], "LPSC": [77.05, 8.62], "IPRC": [77.6, 8.4], "SDSC SHAR": [80.23, 13.72], "NRSC": [78.45, 17.45], "TERLS": [76.86, 8.53], "PRL": [72.55, 23.04] };
const CR = rows("L5", "Which centre").map(r => [r[0].replace(/ — .*$/, ""), r[1], r[2]]).filter(r => CEN[r[0]]);
place("L5", "Which centre", KIT.numbered("ISRO's centres", CR, CEN, { key: r => r[1] + " — " + r[2], cap: "Thiruvananthapuram (VSSC, LPSC, TERLS) builds and tests the rockets; Bengaluru builds the satellites; Ahmedabad makes the payloads; Sriharikota launches them. ISRO's HQ is in Bengaluru." }));

// L6 — the rockets side by side, to scale
const RK = [["SLV-3", 22, 17, "#a9805a"], ["ASLV", 23.5, 40, "#c69214"], ["PSLV", 44, 320, "#c0503a"], ["GSLV Mk II", 51.7, 420, "#2f6db5"], ["LVM3", 43.5, 640, "#7d4fb5"], ["SSLV", 34, 120, "#2f8f4e"]];
const rocket = (x, h, w, c) => { const b = 290, top = b - h * 4.6; return `<path d="M${x - w / 2} ${b} V${top + 18} Q${x} ${top - 8} ${x + w / 2} ${top + 18} V${b} Z" fill="${c}"/>` +
  `<path d="M${x - w / 2} ${b} l-7 0 l7 -22 M${x + w / 2} ${b} l7 0 l-7 -22" fill="${c}" stroke="${c}"/>`; };
const RS = `<svg class="dg" viewBox="0 0 660 340" role="img" aria-label="India's rockets drawn to scale">
  ${[0, 10, 20, 30, 40, 50].map(m => `<line x1="20" y1="${290 - m * 4.6}" x2="650" y2="${290 - m * 4.6}" class="grid"/><text x="16" y="${294 - m * 4.6}" text-anchor="end" font-size="9.5" class="mut">${m}</text>`).join("")}
  ${RK.map(([n, h, t, c], i) => { const x = 75 + i * 105, w = 8 + Math.sqrt(t) * .9; return rocket(x, h, w, c) + T(x, 308, n, "var(--ink)", "middle", 12) + `<text x="${x}" y="${324}" text-anchor="middle" font-size="10.5" class="mut">${h} m · ~${t} t</text>`; }).join("")}
  <text x="20" y="22" font-size="10.5" class="mut">height in metres</text></svg>`;
place("L6", "The launch-vehicle", KIT.fig("India's rockets to scale", RS, "Height to scale; width grows with lift-off mass. GSLV Mk II is the tallest; LVM3 ('Bahubali') the heaviest and most powerful.", 560));
place("L6", "Launch sites", KIT.numbered("Launch sites", [["Sriharikota", "SDSC SHAR — two pads, a third coming"], ["Kulasekarapattinam", "Second spaceport, for SSLV"], ["Thumba", "Sounding rockets since 1963"], ["Chandipur", "DRDO missile range (Odisha)"]],
  { Sriharikota: [80.23, 13.72], Kulasekarapattinam: [78.05, 8.4], Thumba: [76.86, 8.53], Chandipur: [87.02, 21.45] }, { cap: "Sites near the equator and on the east coast let rockets use Earth's eastward spin and fall into the sea." }));

// L8 — photos of satellites
place("L8", "Satellite families", KIT.photos("Satellites in pictures", [["NISAR", "NASA–ISRO radar, 2025"], ["GSAT-11", "Heaviest Indian satellite"], ["Indian Regional Navigation Satellite System", "NavIC"], ["Cartosat-3", "Imaging"]],
  { name: r => r[0].replace(/^Indian Regional Navigation Satellite System$/, "NavIC") }));

// L10 — the road to the Moon
const MO = `<svg class="dg" viewBox="0 0 660 260" role="img" aria-label="Chandrayaan-3's path: orbit raising, transfer and landing">
  ${earth(140, 130, 26)}${[46, 66, 90, 118].map((r, i) => `<ellipse cx="${140 + r * .35}" cy="130" rx="${r}" ry="${r * .7}" fill="none" stroke="#2f6db5" stroke-opacity="${.35 + i * .15}" stroke-width="1.6"/>`).join("")}
  <path d="M270 130 C340 40,450 40,520 110" fill="none" stroke="#c69214" stroke-width="2.4" stroke-dasharray="6 4"/>
  <circle cx="560" cy="130" r="22" fill="#cfcfcf"/>${[60, 40, 30].map(r => `<ellipse cx="560" cy="130" rx="${r}" ry="${r * .8}" fill="none" stroke="#7d4fb5" stroke-opacity=".6"/>`).join("")}
  <circle r="5" fill="#c0392b"><animateMotion dur="7s" repeatCount="indefinite" path="M166 130 a40 28 0 1 0 1 0 M190 130 a70 50 0 1 0 1 0 M270 130 C340 40,450 40,520 110 a40 32 0 1 1 1 0 L548 140"/></circle>
  ${T(140, 230, "1 · Earth-bound orbit raising", "#2f6db5", "middle", 12)}${T(395, 40, "2 · Trans-lunar injection", "#a07000", "middle", 12)}${T(560, 230, "3 · Lunar orbits → landing", "#7d4fb5", "middle", 12)}</svg>`;
place("L10", "The Chandrayaan", KIT.fig("How Chandrayaan-3 got to the Moon", MO, "Launched 14 July 2023; orbit after orbit raised it, a burn sent it to the Moon, and step-by-step lower lunar orbits brought Vikram to a soft landing near the south pole on 23 August 2023 (now National Space Day)."),
  KIT.photos("The Moon missions in pictures", [["Chandrayaan-3", "2023 · south pole landing"], ["Vikram (lander)", "Chandrayaan-3 lander"], ["Pragyan (rover)", "Rolled out on the Moon"], ["Chandrayaan-1", "2008 · water found"], ["Chandrayaan-2", "2019"]],
    { name: r => r[0].replace(/ \(.*\)$/, "") }));

// L11 — telescopes
place("L11", "World telescopes", KIT.photos("Observatories in pictures", [["Aditya-L1", "India's solar observatory at L1"], ["AstroSat", "India's first space observatory, 2015"], ["Hubble Space Telescope", "1990"], ["James Webb Space Telescope", "L2, 2021"], ["Parker Solar Probe", "Closest to the Sun"]]));

// L12 — the Hohmann transfer to Mars
const MA = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="Mangalyaan's transfer orbit from Earth to Mars">
  <circle cx="250" cy="150" r="22" fill="#f6c343"/>${T(250, 155, "Sun", "#5a3b00", "middle", 11)}
  <circle cx="250" cy="150" r="90" fill="none" stroke="#2f6db5" stroke-dasharray="4 4"/><circle cx="250" cy="150" r="140" fill="none" stroke="#c0503a" stroke-dasharray="4 4"/>
  <path d="M340 150 A115 112 0 0 1 110 152" fill="none" stroke="#c69214" stroke-width="2.6"/>
  ${earth(340, 150, 9)}<circle cx="110" cy="152" r="8" fill="#c0503a"/>
  <circle r="5" fill="#c69214"><animateMotion dur="5s" repeatCount="indefinite" path="M340 150 A115 112 0 0 1 110 152"/></circle>
  ${T(356, 154, "Earth, Nov 2013", "#2f6db5", "start", 11.5)}${T(98, 156, "Mars, Sept 2014", "#c0503a", "end", 11.5)}${T(250, 28, "~298 days on a half-ellipse (Hohmann transfer)", "#a07000", "middle", 12)}
  ${T(430, 230, "Mangalyaan (MOM)", "var(--ink)", "start", 13)}<text x="430" y="248" font-size="11" class="mut">first Asian nation at Mars;</text><text x="430" y="264" font-size="11" class="mut">first to succeed at the first try</text></svg>`;
place("L12", "Mars Orbiter", KIT.fig("The way to Mars", MA, "Mangalyaan left Earth on 5 November 2013 (PSLV-C25) and entered Mars orbit on 24 September 2014. The cheapest Mars mission yet: about ₹450 crore."),
  KIT.photos("Mars and Venus in pictures", [["Mars Orbiter Mission", "Mangalyaan"], ["Curiosity (rover)", "NASA, 2012"], ["Perseverance (rover)", "NASA, 2021"], ["Venus", "Shukrayaan's target"]], { name: r => r[0].replace(/ \(rover\)$/, "") }));

// L13 — humans in space
place("L13", "Gaganyaan", KIT.photos("People and stations", [["Rakesh Sharma", "First Indian in space, 1984"], ["Kalpana Chawla", "First Indian-born woman in space"], ["Sunita Williams", "Long ISS stays"], ["Shubhanshu Shukla", "Ax-4, 2025 — first Indian on the ISS"],
  ["International Space Station", "Five agencies"], ["Tiangong space station", "China"]]));

// L14 — the firsts on two timelines
const yr = s => parseInt(String(s).match(/\d{4}/) || [0], 10);
place("L14", "Firsts — machines", { k: "tlfig", title: "Machine firsts", rows: rows("L14", "Firsts — machines").map(r => [yr(r[2]), r[0] + " — " + r[1], ""]).filter(r => r[0]), cap: "The USSR led the early race: Sputnik-1 (1957), Luna-9 (1966), Salyut-1 (1971)." });
place("L14", "Firsts — people", { k: "tlfig", title: "Human firsts", rows: rows("L14", "Firsts — people").map(r => [yr(r[2]), r[0] + " — " + r[1], ""]).filter(r => r[0]) },
  KIT.photos("Space firsts in pictures", [["Yuri Gagarin", "1961"], ["Valentina Tereshkova", "1963"], ["Neil Armstrong", "1969"], ["Sputnik 1", "1957"], ["Earthrise", "Apollo 8, 1968"], ["Laika", "1957"]]));

VISUAL = { mode: true, VIS: { key: "space_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

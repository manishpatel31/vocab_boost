/* Physical Geography — the Solar System, Earth's orbit (animated) and seasons, the globe's lines, eclipses, Earth's interior,
   plate boundaries, world maps of volcanoes, local winds and ocean currents, the atmosphere's layers, pressure belts and winds,
   clouds by height and photos (drawn by study-visual.js and study-world.js). place(), rows(), KIT come from applyVisual. */
const P = (w, n, c) => [w, n, c];
const fig = (t, svg, cap, w) => ({ k: "info", title: t, html: `<figure class="fig wide" style="--minw:${w || 560}px;margin:0">${svg}</figure>`, cap });
const T = (x, y, t, o) => `<text x="${x}" y="${y}" text-anchor="${(o && o.a) || "middle"}" font-size="${(o && o.s) || 12}" class="${(o && o.c) || "b"}">${t}</text>`;

// Y1 — the planets in order, sized (roughly) by diameter
const PL = [["Mercury", 4.9, "#9a8f87"], ["Venus", 12.1, "#d9a441"], ["Earth", 12.7, "#2f7fbf"], ["Mars", 6.8, "#c0503a"], ["Jupiter", 143, "#c99a6b"], ["Saturn", 120, "#d8c08a"], ["Uranus", 51, "#7fc6cf"], ["Neptune", 49, "#3e64c4"]];
const solar = `<svg class="dg" viewBox="0 0 680 170" role="img" aria-label="The planets in order from the Sun">
  <circle cx="-60" cy="85" r="110" fill="#f6b73c"/><circle cx="-60" cy="85" r="118" fill="none" stroke="#f6b73c" opacity=".35" stroke-width="6"/>
  ${(() => { let x = 70; return PL.map(([n, d, c], i) => { const r = Math.max(3.5, Math.sqrt(d) * 2.7), ring = n === "Saturn" ? r * .85 : 0; x += (i ? r + 14 + ring : r);
    const s = `<g class="anim-in" style="animation-delay:${i * 90}ms">${n === "Saturn" ? `<ellipse cx="${x}" cy="85" rx="${r * 1.8}" ry="${r * .45}" fill="none" stroke="#bfa66b" stroke-width="3"/>` : ""}<circle cx="${x}" cy="85" r="${r}" fill="${c}"/>` +
      `${T(x, i % 2 ? 85 + r + 18 : 85 - r - 8, n, { s: 11.5 })}</g>`; x += r + 6 + ring; return s; }).join(""); })()}
  ${T(40, 160, "Sun", { s: 12, a: "start" })}${T(675, 160, "Rocky four · Gas giants · Ice giants  (sizes to scale, distances not)", { s: 10.5, c: "mut", a: "end" })}</svg>`;
place("Y1", "Quick numbers", fig("The planets in order", solar, "My Very Educated Mother Just Served Us Noodles — Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Jupiter is the largest; Mercury the smallest."));
place("Y1", "Planet records", KIT.photos("The planets in pictures", PL.map(p => [p[0], ""]), { cap: r => ({ Mercury: "Smallest · nearest", Venus: "Hottest · Earth's twin", Earth: "Densest", Mars: "Red Planet", Jupiter: "Largest", Saturn: "Rings · most moons", Uranus: "Spins on its side", Neptune: "Farthest" })[r[0]] }));

// Y2 — orbit and seasons (an Earth goes round), the globe's lines, eclipses
const orbit = `<svg class="dg" viewBox="0 0 680 300" role="img" aria-label="Earth's orbit and the seasons">
  <ellipse cx="340" cy="150" rx="215" ry="105" fill="none" stroke="var(--rule)" stroke-width="2" stroke-dasharray="5 5"/>
  <circle cx="320" cy="150" r="26" fill="#f6b73c"/>${T(320, 154, "Sun", { s: 11 })}
  ${[[125, 150, "21 June", "Summer solstice"], [340, 255, "23 September", "Equinox"], [555, 150, "22 December", "Winter solstice"], [340, 45, "21 March", "Equinox"]].map(([x, y, d, n]) =>
    `<g><circle cx="${x}" cy="${y}" r="13" fill="#2f7fbf"/><line x1="${x + 6}" y1="${y - 18}" x2="${x - 6}" y2="${y + 18}" stroke="var(--ink)" stroke-width="1.5"/>${T(x, y + (y > 200 ? 34 : y < 100 ? -22 : 34), d, { s: 12 })}${T(x, y + (y > 200 ? 48 : y < 100 ? -8 : 48), n, { s: 10, c: "mut" })}</g>`).join("")}
  <circle r="7" fill="#2f7fbf" stroke="#fff" stroke-width="1.5"><animateMotion dur="14s" repeatCount="indefinite" path="M125,150 A215,105 0 1,0 555,150 A215,105 0 1,0 125,150"/></circle>
  ${T(130, 290, "Aphelion ~4 July (farthest)", { s: 10.5, c: "mut" })}${T(560, 290, "Perihelion ~3 January (nearest)", { s: 10.5, c: "mut" })}</svg>`;
place("Y2", "Solstices", fig("Earth's orbit and the seasons", orbit, "The axis stays tilted the same way (23½°): in June the north leans towards the Sun (summer, Sun over the Tropic of Cancer); in December away from it (Sun over the Tropic of Capricorn). The tilt, not the distance, makes the seasons — Earth is nearest the Sun in January. The small Earth moves round the orbit anticlockwise."));
const globe = `<svg class="dg" viewBox="0 0 680 260" role="img" aria-label="Lines of latitude and longitude">
  <circle cx="200" cy="130" r="115" class="s3" stroke="var(--rule)"/>
  ${[[66.5, "Arctic Circle 66½°N", "#5a7fa8"], [23.5, "Tropic of Cancer 23½°N", "#c0392b"], [0, "Equator 0°", "var(--ink)"], [-23.5, "Tropic of Capricorn 23½°S", "#c0392b"], [-66.5, "Antarctic Circle 66½°S", "#5a7fa8"]].map(([lat, t, c]) => {
    const y = 130 - 115 * Math.sin(lat * Math.PI / 180), w = 115 * Math.cos(lat * Math.PI / 180);
    return `<line x1="${(200 - w).toFixed(1)}" y1="${y.toFixed(1)}" x2="${(200 + w).toFixed(1)}" y2="${y.toFixed(1)}" stroke="${c}" stroke-width="${lat ? 1.5 : 2.5}"/><line x1="${(200 + w).toFixed(1)}" y1="${y.toFixed(1)}" x2="340" y2="${y.toFixed(1)}" class="grid" stroke-dasharray="3 3"/>${T(346, y + 4, t, { a: "start", s: 12 })}`; }).join("")}
  <ellipse cx="200" cy="130" rx="40" ry="115" fill="none" stroke="#2f6db5" stroke-width="1.5"/>${T(560, 230, "Prime Meridian 0° · Greenwich", { s: 11.5, c: "acc-t" })}${T(560, 248, "International Date Line 180°", { s: 11.5, c: "acc-t" })}</svg>`;
place("Y2", "Important lines", fig("The lines on the globe", globe, "Parallels run east–west and measure latitude; meridians run pole to pole and measure longitude. 15° of longitude = 1 hour of time."));
const eclipse = `<svg class="dg" viewBox="0 0 680 230" role="img" aria-label="Solar and lunar eclipses">
  ${[[60, "Solar eclipse — the Moon comes between the Sun and Earth (new moon)", "Moon", "Earth"], [170, "Lunar eclipse — Earth comes between the Sun and the Moon (full moon)", "Earth", "Moon"]].map(([y, t, mid, end]) =>
    `<circle cx="60" cy="${y}" r="34" fill="#f6b73c"/><path d="M60 ${y - 34} L${mid === "Moon" ? 330 : 520} ${y - (mid === "Moon" ? 6 : 16)} L${mid === "Moon" ? 330 : 520} ${y + (mid === "Moon" ? 6 : 16)} L60 ${y + 34} Z" fill="#f6b73c" opacity=".12"/>` +
    `<circle cx="${mid === "Moon" ? 330 : 420}" cy="${y}" r="${mid === "Moon" ? 9 : 22}" fill="${mid === "Moon" ? "#9a9a9a" : "#2f7fbf"}"/><path d="M${mid === "Moon" ? 339 : 442} ${y - (mid === "Moon" ? 8 : 20)} L${mid === "Moon" ? 520 : 600} ${y} L${mid === "Moon" ? 339 : 442} ${y + (mid === "Moon" ? 8 : 20)} Z" fill="#333" opacity=".45"/>` +
    `<circle cx="${mid === "Moon" ? 540 : 600}" cy="${y}" r="${mid === "Moon" ? 22 : 9}" fill="${mid === "Moon" ? "#2f7fbf" : "#8a5a44"}"/>` +
    `${T(60, y + 52, "Sun", { s: 11 })}${T(mid === "Moon" ? 330 : 420, y + 40, mid, { s: 11 })}${T(mid === "Moon" ? 540 : 600, y + 40, end, { s: 11 })}${T(340, y - 40, t, { s: 11.5 })}`).join("")}</svg>`;
place("Y2", "Eclipse words", fig("Solar and lunar eclipses", eclipse, "A solar eclipse can only happen at new moon; a lunar eclipse only at full moon. The Moon's dark shadow is the umbra, the lighter one the penumbra."));

// Y3 — the inside of the Earth
const LAY = [["Crust", 0, "#c99a6b", "5–70 km"], ["Mantle", 1, "#d9733f", "to 2,900 km"], ["Outer core (liquid)", 2, "#f0a43a", "to 5,150 km"], ["Inner core (solid)", 3, "#f6d365", "to 6,371 km"]];
const inside = `<svg class="dg" viewBox="0 0 680 280" role="img" aria-label="The layers inside the Earth">
  ${[255, 236, 120, 66].map((r, i) => `<path d="M${280 - r} 270 A${r} ${r} 0 0 1 ${280 + r} 270 Z" fill="${LAY[i][2]}" stroke="#fff" stroke-width="1.5"/>`).join("")}
  ${LAY.map(([n, i, c, d]) => { const y = [26, 60, 165, 228][i]; return `${T(280, y, n, { s: 13 })}${T(280, y + 15, d, { s: 10.5, c: "mut" })}`; }).join("")}
  ${[["Moho", 25, 40], ["Gutenberg", 120, 150], ["Lehmann", 205, 205]].map(([n, y, x]) => `<line x1="${280 + Math.sqrt(Math.max(0, ([255, 236, 120, 66][n === "Moho" ? 1 : n === "Gutenberg" ? 2 : 3]) ** 2 - (270 - (y + 20)) ** 2)).toFixed(0)}" y1="${y + 20}" x2="560" y2="${y + 20}" class="grid"/>${T(566, y + 24, n, { a: "start", s: 12 })}`).join("")}</svg>`;
place("Y3", "Layers of the Earth", fig("Inside the Earth", inside, "Crust → (Moho) → mantle → (Gutenberg) → liquid outer core → (Lehmann) → solid inner core of nickel and iron (NIFE). S-waves cannot pass through the liquid outer core."));

// Y4 — plate boundaries; volcanoes on the world map
const bnd = (x, t, inner, n) => `<g transform="translate(${x} 0)"><rect x="4" y="4" width="216" height="150" rx="10" class="card"/>${inner}${T(112, 178, t, { s: 13 })}${T(112, 196, n, { s: 10.5, c: "mut" })}</g>`;
const plates = `<svg class="dg" viewBox="0 0 680 205" role="img" aria-label="Three kinds of plate boundary">` +
  bnd(0, "Divergent", `<rect x="20" y="90" width="85" height="40" class="s3"/><rect x="119" y="90" width="85" height="40" class="s3"/><path d="M100 110 L60 110 M124 110 L164 110" stroke="var(--accent)" stroke-width="3" marker-end="url(#pb)"/><path d="M112 90 L112 50" stroke="#c0392b" stroke-width="4"/>${T(112, 42, "new crust", { s: 10 })}`, "Mid-Atlantic Ridge") +
  bnd(228, "Convergent", `<rect x="20" y="80" width="95" height="40" class="s3"/><path d="M115 80 L205 80 L205 120 L130 120 L115 150 Z" class="s2"/><path d="M40 100 L95 100 M185 100 L140 100" stroke="var(--accent)" stroke-width="3" marker-end="url(#pb)"/><path d="M118 80 L140 40 L160 80" class="s5"/>${T(140, 34, "mountains", { s: 10 })}`, "Himalaya · Andes") +
  bnd(456, "Transform", `<rect x="20" y="40" width="184" height="50" class="s3"/><rect x="20" y="92" width="184" height="50" class="s2"/><path d="M50 65 L120 65 M170 117 L100 117" stroke="var(--accent)" stroke-width="3" marker-end="url(#pb)"/>`, "San Andreas Fault") +
  `<defs><marker id="pb" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="var(--accent)"/></marker></defs></svg>`;
place("Y4", "Plate boundaries", fig("Three kinds of plate boundary", plates, "Plates pull apart (divergent — new crust), push together (convergent — mountains, trenches, volcanoes) or slide past (transform — earthquakes)."));
const VOL = { "Mauna Loa": [-155.6, 19.5], "Mount St Helens": [-122.2, 46.2], "Vesuvius": [14.4, 40.8], "Etna": [15.0, 37.75], "Stromboli": [15.2, 38.8], "Fuji": [138.7, 35.36], "Krakatoa": [105.42, -6.1],
  "Tambora": [118.0, -8.25], "Pinatubo": [120.35, 15.13], "Kilimanjaro": [37.36, -3.07], "Cotopaxi": [-78.44, -0.68], "Popocatépetl": [-98.62, 19.02], "Eyjafjallajökull": [-19.6, 63.6], "Barren Island": [93.86, 12.28] };
const VR = rows("Y4", "Famous volcanoes");
place("Y4", "Famous volcanoes", { k: "worldfig", title: "Famous volcanoes on the world map", minw: 640,
  pins: VR.map((r, i) => [String(i + 1), VOL[r[0]][0], VOL[r[0]][1], r[0], "n"]), legend: VR.map((r, i) => [`${i + 1} ${r[0]}`, r[1] + (r[2] ? " — " + r[2].replace(/\.$/, "") : "")]),
  cap: "Most sit on the Pacific 'Ring of Fire' or the Mediterranean belt. India's only active volcano is Barren Island in the Andaman Sea." },
  KIT.photos("Volcanoes in pictures", VR.filter(r => /Fuji|Vesuvius|Etna|Kilimanjaro|Mauna Loa|Krakatoa|Barren/.test(r[0])).map(r => [r[0] === "Fuji" ? "Mount Fuji" : r[0] === "Etna" ? "Mount Etna" : r[0] === "Vesuvius" ? "Mount Vesuvius" : r[0] === "Kilimanjaro" ? "Mount Kilimanjaro" : r[0] === "Barren Island" ? "Barren Island (Andaman Islands)" : r[0], r[1]]),
    { name: r => r[0].replace(/^Mount /, ""), cap: r => r[1] }));

// Y5 — landforms in pictures
place("Y5", "Famous examples", KIT.photos("Landforms in pictures", [["Grand Canyon", "Gorge — river"], ["Victoria Falls", "Waterfall — river"], ["Oxbow lake", "River"], ["River delta", "River"], ["Fjord", "Glacier"],
  ["Moraine", "Glacier"], ["Cirque", "Glacier"], ["Barchan", "Wind — sand dune"], ["Mushroom rock", "Wind"], ["Sea arch", "Sea waves"], ["Stack (geology)", "Sea waves"], ["Spit (landform)", "Sea waves"]], { name: r => r[0].replace(/ \(.*\)$/, "") }));

// Y6 — layers of the atmosphere; gases
const ATM = [["Troposphere", "0–12 km (8 at poles, 18 at equator)", "Weather, clouds", "s3"], ["Stratosphere", "to 50 km", "Ozone layer · jets fly here", "s1"], ["Mesosphere", "to 80 km", "Meteors burn · coldest", "s2"],
  ["Thermosphere", "to ~600 km", "Ionosphere · auroras · ISS", "s4"], ["Exosphere", "beyond", "Fades into space", "s5"]];
const atm = `<svg class="dg" viewBox="0 0 680 300" role="img" aria-label="Layers of the atmosphere">
  ${ATM.map(([n, h, w, c], i) => { const y = 250 - i * 55; return `<rect x="20" y="${y}" width="640" height="52" class="${c}" opacity=".9"/>${T(36, y + 22, n, { a: "start", s: 14 })}${T(36, y + 40, h, { a: "start", s: 11, c: "mut" })}${T(640, y + 31, w, { a: "end", s: 12.5 })}`; }).join("")}
  ${T(340, 296, "Ground", { s: 11, c: "mut" })}</svg>`;
place("Y6", "Which layer", fig("The atmosphere, layer by layer", atm, "Weather happens in the troposphere; the ozone layer is in the stratosphere; meteors burn in the mesosphere; radio waves bounce off the ionosphere in the thermosphere."));
place("Y6", "Gases in dry air", { k: "bars", title: "What dry air is made of", unit: "%", left: 140, hi: 2, sort: false, rows: rows("Y6", "Gases in dry air").map(r => [r[0], +r[1].replace(/[^\d.]/g, ""), ""]),
  cap: "Nitrogen 78%, oxygen 21%, argon about 0.93%, carbon dioxide about 0.04%." });

// Y7 — pressure belts and planetary winds; local winds of the world
const belts = (() => { const BL = [[90, "Polar high", "s5"], [60, "Subpolar low", "s3"], [30, "Subtropical high (horse latitudes)", "s2"], [0, "Equatorial low (doldrums)", "s4"], [-30, "Subtropical high", "s2"], [-60, "Subpolar low", "s3"], [-90, "Polar high", "s5"]];
  const Y = lat => 150 - lat * 1.5, arr = (x1, y1, x2, y2) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="var(--accent)" stroke-width="3" marker-end="url(#pw)" class="anim-in"/>`;
  return `<svg class="dg" viewBox="0 0 680 300" role="img" aria-label="Pressure belts and planetary winds"><defs><marker id="pw" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="var(--accent)"/></marker></defs>` +
    BL.map(([lat, n, c]) => `<line x1="20" y1="${Y(lat)}" x2="420" y2="${Y(lat)}" stroke="var(--rule)" stroke-width="${lat % 60 === 0 ? 1 : 2}" stroke-dasharray="${lat % 60 === 0 && Math.abs(lat) !== 90 ? "" : "4 4"}"/>${T(430, Y(lat) + 4, `${Math.abs(lat)}°${lat > 0 ? "N" : lat < 0 ? "S" : ""} — ${n}`, { a: "start", s: 11.5 })}`).join("") +
    [60, 160, 260, 360].map(x => arr(x + 30, Y(25), x, Y(8)) + arr(x + 30, Y(-25), x, Y(-8)) + arr(x, Y(35), x + 30, Y(52)) + arr(x, Y(-35), x + 30, Y(-52)) + arr(x + 30, Y(82), x, Y(66)) + arr(x + 30, Y(-82), x, Y(-66))).join("") +
    T(220, Y(17), "North-east trades", { s: 11 }) + T(220, Y(-17), "South-east trades", { s: 11 }) + T(220, Y(45), "Westerlies", { s: 11 }) + T(220, Y(-45), "Westerlies (Roaring Forties…)", { s: 11 }) + T(220, Y(76), "Polar easterlies", { s: 11 }) + `</svg>`; })();
place("Y7", "Pressure belts", fig("Pressure belts and planetary winds", belts, "Winds blow from high to low pressure and are bent by the Earth's spin (Coriolis): to the right in the north, to the left in the south."));
const LW = { "Chinook": [-108, 47], "Foehn": [8.5, 46.8], "Santa Ana": [-117.5, 34], "Zonda": [-68.5, -32.5], "Berg wind": [25, -31], "Sirocco": [13, 35], "Harmattan": [0, 12], "Khamsin": [30, 27], "Simoom": [45, 23],
  "Brickfielder": [145, -33], "Loo": [80, 26], "Mistral": [4.8, 44], "Bora": [15.5, 44.5], "Purga": [90, 65], "Pampero": [-62, -36] };
const LWR = rows("Y7", "Local winds of the world");
place("Y7", "Local winds of the world", { k: "worldfig", title: "Local winds of the world", minw: 640, pins: LWR.map((r, i) => [String(i + 1), LW[r[0]][0], LW[r[0]][1], r[0], "n"]),
  legend: LWR.map((r, i) => [`${i + 1} ${r[0]}`, r[1]]), cap: "Warm, dry winds that come down mountains: Chinook (Rockies), Foehn (Alps), Zonda (Andes). Hot desert winds: Sirocco, Harmattan, Khamsin, Simoom, Loo. Cold winds: Mistral, Bora, Purga." });

// Y8 — clouds by height
const cloud = (x, y, s, c) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="0" rx="34" ry="14" fill="${c || "#fff"}" stroke="var(--rule)"/><ellipse cx="-18" cy="-8" rx="18" ry="14" fill="${c || "#fff"}"/><ellipse cx="14" cy="-12" rx="22" ry="16" fill="${c || "#fff"}"/></g>`;
const clouds = `<svg class="dg" viewBox="0 0 680 280" role="img" aria-label="Clouds by height"><rect x="0" y="0" width="680" height="280" class="s3" opacity=".6"/>
  <path d="M60 50 q30 -14 60 0 q30 14 60 0" fill="none" stroke="#fff" stroke-width="3"/><path d="M80 60 q30 -12 60 0" fill="none" stroke="#fff" stroke-width="2"/>${T(120, 85, "Cirrus — high, feathery, ice", { s: 11.5 })}
  <rect x="240" y="40" width="200" height="18" rx="9" fill="#fff" opacity=".8"/>${T(340, 75, "Cirrostratus — halo round the Sun", { s: 11.5 })}
  <path d="M500 250 L500 90 Q490 60 470 50 L650 50 Q630 60 620 90 L620 250 Z" fill="#9aa5b1"/>${T(560, 270, "Cumulonimbus — thunderstorms", { s: 11.5 })}
  ${cloud(120, 200, 1)}${cloud(170, 190, .8)}${T(140, 240, "Cumulus — fair weather", { s: 11.5 })}
  <rect x="250" y="205" width="200" height="22" rx="11" fill="#c9cfd6"/>${T(350, 245, "Stratus — grey sheet, drizzle", { s: 11.5 })}
  <rect x="250" y="150" width="200" height="30" rx="12" fill="#7d8792"/>${T(350, 140, "Nimbostratus — steady rain", { s: 11.5 })}
  ${T(670, 20, "high ↑", { a: "end", s: 10.5, c: "mut" })}${T(670, 275, "low ↓", { a: "end", s: 10.5, c: "mut" })}</svg>`;
place("Y8", "Cloud types", fig("Clouds by height", clouds, "Cirrus are the highest; cumulonimbus tower from low to high and bring thunder, lightning and hail; nimbus means rain."));

// Y9 — ocean currents on the world map
const W = "#d9534f", C = "#2f6db5";
const CUR = KIT.warrow([[-80, 25], [-78, 32], [-70, 38], [-55, 41], [-40, 45]], W, "Gulf Stream", [-74, 32]) + KIT.warrow([[-40, 45], [-25, 52], [-10, 58], [5, 64]], W, "N. Atlantic Drift", [-30, 57]) +
  KIT.warrow([[-35, -8], [-38, -18], [-45, -28], [-52, -36]], W, "Brazil", [-36, -22]) + KIT.warrow([[125, 20], [130, 28], [140, 35], [150, 40]], W, "Kuroshio", [132, 24]) +
  KIT.warrow([[-140, 50], [-145, 56], [-150, 59]], W, "Alaska", [-140, 55]) + KIT.warrow([[155, -15], [154, -25], [152, -33]], W, "E. Australian", [156, -22]) +
  KIT.warrow([[43, -12], [41, -19]], W, "Mozambique", [44, -14]) + KIT.warrow([[36, -26], [30, -32], [22, -36]], W, "Agulhas", [30, -38]) +
  KIT.warrow([[-60, 62], [-55, 55], [-52, 47]], C, "Labrador", [-66, 58]) + KIT.warrow([[-15, 38], [-17, 28], [-20, 18]], C, "Canary", [-34, 30]) +
  KIT.warrow([[15, -35], [12, -25], [10, -15]], C, "Benguela", [-4, -26]) + KIT.warrow([[-62, -55], [-58, -45], [-56, -38]], C, "Falkland", [-54, -50]) +
  KIT.warrow([[160, 55], [150, 48], [144, 42]], C, "Oyashio", [155, 52]) + KIT.warrow([[-128, 46], [-124, 38], [-118, 28]], C, "California", [-140, 36]) +
  KIT.warrow([[-75, -45], [-75, -30], [-80, -12], [-82, -5]], C, "Humboldt", [-96, -24]) + KIT.warrow([[113, -34], [112, -25], [111, -18]], C, "W. Australian", [96, -28]);
place("Y9", "Ocean currents", { k: "worldfig", title: "Warm and cold ocean currents", minw: 680, under: CUR,
  cap: "Red: warm currents (from the tropics); blue: cold currents (from the poles). Cold currents off west coasts help make deserts — Benguela (Namib), Humboldt (Atacama), Canary (Sahara)." });
place("Y9", "Tides, sea floor", KIT.photos("The ocean in pictures", [["Coral reef", "Corals need warm, shallow, clear water"], ["Great Barrier Reef", "Australia — the largest reef"], ["Mariana Trench", "The deepest point"], ["Tide", "Spring and neap tides"]]));

// Y10 — biomes in pictures
place("Y10", "Grasslands and forests", KIT.photos("Biomes in pictures", [["Tropical rainforest", "Equatorial"], ["Savanna", "Tropical grassland"], ["Prairie", "North America"], ["Pampas", "South America"], ["Steppe", "Eurasia"],
  ["Veld", "South Africa"], ["Taiga", "Coniferous forest"], ["Tundra", "Arctic"], ["Mediterranean climate", "Dry summers, wet winters"], ["Monsoon", "Tropical monsoon"]], { name: r => r[0] }));
VISUAL = { mode: "world", VIS: { key: "physgeo_photos_v1", word: "landform", words: "landforms", search: "", quiz: "picture", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

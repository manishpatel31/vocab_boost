/* Sports — fields and courts drawn to scale, charts, the world map and photos, written into study-sports.html by tools/workbook/apply-hand.js.
   place(lesson, where, ...blocks), rows(lesson, table title) and GEO as in the workbook apps' visual.js files. */
const P = (w, n, c) => [w, n, c];
const f = n => +n.toFixed(1);
const GRASS = "#4f8f4a", GRASS2 = "#5b9c55", LINE = "#ffffff", CLAY = "#c0603c";
// a label in the ink colour, with a thin leader line
const lab = (x, y, tx, ty, t, anc) => `<line x1="${f(x)}" y1="${f(y)}" x2="${f(tx)}" y2="${f(ty)}" class="grid"/><text x="${f(tx + (anc === "end" ? -3 : anc === "middle" ? 0 : 3))}" y="${f(ty + 4)}" text-anchor="${anc || "start"}" font-size="11.5" class="mut" style="paint-order:stroke;stroke:var(--sheet);stroke-width:3px">${t}</text>`;
// a measurement arrow with its text
const dim = (x1, y1, x2, y2, t, dy) => `<path d="M${f(x1)} ${f(y1)} L${f(x2)} ${f(y2)}" class="acs" stroke-width="1.4" marker-start="url(#ar)" marker-end="url(#ar)"/>` +
  `<text x="${f((x1 + x2) / 2)}" y="${f((y1 + y2) / 2 + (dy || -6))}" text-anchor="middle" font-size="12" class="b acc-t">${t}</text>`;
const ARROW = `<defs><marker id="ar" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 1 L9 5 L0 9 Z" fill="var(--accent)"/></marker></defs>`;
const fig = (title, svg, cap, minw) => ({ k: "info", title, html: `<figure class="fig wide" style="--minw:${minw || 560}px;margin:0">${svg}</figure>`, cap });

// L2 — the cricket pitch, from above (20.12 m long → 560 units)
const pitch = (() => { const k = 560 / 20.12, x0 = 60, x1 = 620, w = 3.05 * k, y0 = 110 - w / 2, y1 = 110 + w / 2, pop = 1.22 * k, bc = 2.64 * k / 2;
  const end = x => { const dir = x === x0 ? 1 : -1;
    return `<line x1="${x}" y1="${f(110 - bc)}" x2="${x}" y2="${f(110 + bc)}" stroke="${LINE}" stroke-width="2"/>` +
      `<line x1="${f(x + dir * pop)}" y1="${f(y0 - 22)}" x2="${f(x + dir * pop)}" y2="${f(y1 + 22)}" stroke="${LINE}" stroke-width="2"/>` +
      [-1, 1].map(s => `<line x1="${f(x - dir * 34)}" y1="${f(110 + s * bc)}" x2="${f(x + dir * pop)}" y2="${f(110 + s * bc)}" stroke="${LINE}" stroke-width="2"/>`).join("") +
      [-1, 0, 1].map(s => `<circle cx="${x}" cy="${f(110 + s * 3.2)}" r="2.6" fill="#f3e2b3" stroke="#6b4a1c"/>`).join(""); };
  return `<svg class="dg" viewBox="0 0 680 230" role="img" aria-label="The cricket pitch from above">${ARROW}
    <rect x="20" y="40" width="640" height="140" rx="10" fill="${GRASS}"/><rect x="${x0}" y="${f(y0)}" width="${x1 - x0}" height="${f(w)}" fill="#d9c08a"/>
    ${end(x0)}${end(x1)}${dim(x0, 22, x1, 22, "22 yards = 20.12 m (wicket to wicket)", -6)}
    ${dim(x1 + 22, y0, x1 + 22, y1, "", 0)}<text x="${x1 + 28}" y="114" font-size="11.5" class="b acc-t">10 ft</text>
    ${lab(x0 + pop, y1 + 22, x0 + pop + 40, 205, "Popping crease — 4 ft (1.22 m) in front")}${lab(x0, 110 + bc, 24, 205, "Bowling crease (stumps)", "start")}
    ${lab(x1 - 20, 110 + bc, x1 - 10, 205, "Return crease", "middle")}${lab(x1, 108, x1 - 90, 84, "Stumps: 28 in high, 9 in wide", "end")}</svg>`; })();
place("L2", "The pitch", fig("The pitch, drawn to scale", pitch, "Batter is safe behind the popping crease; the bowler's front foot must not cross it (no-ball) and the back foot must land inside the return crease.", 600));
const ground = `<svg class="dg" viewBox="0 0 680 300" role="img" aria-label="A cricket ground with the 30-yard circle">
  <ellipse cx="340" cy="150" rx="300" ry="135" fill="${GRASS}"/><ellipse cx="340" cy="150" rx="300" ry="135" fill="none" stroke="${LINE}" stroke-width="3"/>
  <ellipse cx="340" cy="150" rx="128" ry="92" fill="${GRASS2}" stroke="${LINE}" stroke-width="2" stroke-dasharray="6 6"/>
  <rect x="300" y="143" width="80" height="14" fill="#d9c08a"/>
  ${[[150, 70], [210, 230], [520, 80], [560, 200], [430, 255], [250, 40], [470, 40], [140, 170], [600, 140]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="5" fill="${i < 2 ? "#f2c14e" : "#ffffff"}" stroke="#333"/>`).join("")}
  ${[[300, 110], [380, 190], [340, 200]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#ffffff" stroke="#333"/>`).join("")}
  <text x="340" y="134" text-anchor="middle" font-size="12" font-weight="700" style="fill:#fff">pitch</text>
  <text x="340" y="226" text-anchor="middle" font-size="12" font-weight="700" style="fill:#fff">30-yard circle (infield)</text>
  <text x="340" y="22" text-anchor="middle" font-size="12" class="mut">boundary — not a fixed size</text></svg>`;
place("L2", "Fielding restrictions", fig("The 30-yard circle", ground, "In the first powerplay of an ODI (overs 1–10) only two fielders may stand outside the circle — the two yellow dots here.", 560));

// L5 — the 400 m track (84.39 m straights, 36.5 m bends, 8 lanes of 1.22 m)
const track = (() => { const k = 3.2, cx = 340, cy = 178, h = 84.39 / 2 * k, r0 = 36.5 * k, lw = 1.22 * k;
  const st = r => `M${f(cx - h)} ${f(cy - r)} L${f(cx + h)} ${f(cy - r)} A${f(r)} ${f(r)} 0 0 1 ${f(cx + h)} ${f(cy + r)} L${f(cx - h)} ${f(cy + r)} A${f(r)} ${f(r)} 0 0 1 ${f(cx - h)} ${f(cy - r)} Z`;
  return `<svg class="dg" viewBox="0 0 680 352" role="img" aria-label="A 400 metre athletics track">${ARROW}
    <path d="${st(r0 + 8 * lw + 4)}" fill="${CLAY}"/><path d="${st(r0)}" fill="${GRASS}"/>
    ${Array.from({ length: 9 }, (_, i) => `<path d="${st(r0 + i * lw)}" fill="none" stroke="${LINE}" stroke-width="${i % 8 ? .6 : 1.2}"/>`).join("")}
    <line x1="${f(cx + h)}" y1="${f(cy + r0)}" x2="${f(cx + h)}" y2="${f(cy + r0 + 8 * lw)}" stroke="#111" stroke-width="3"/>
    ${dim(cx - h, cy, cx + h, cy, "straight 84.39 m", -8)}${dim(cx + h, cy, cx + h + r0, cy, "bend r 36.5 m", 18)}
    <text x="${cx}" y="${f(cy - 34)}" text-anchor="middle" font-size="14" font-weight="700" style="fill:#fff">400 m in lane 1</text>
    ${lab(cx + h, cy + r0 + 8 * lw + 2, cx + h + 20, 342, "Finish — the torso decides")}${lab(cx - h, cy - r0 - 16, cx - h - 30, 10, "8 lanes × 1.22 m", "middle")}</svg>`; })();
place("L5", "The track", fig("The track, drawn to scale", track, "One lap of the innermost lane is 400 m. Outer lanes are longer, so their runners start further ahead — the staggered start.", 560));

// L7 — the hockey field (91.4 × 55 m)
const hockey = (() => { const k = 6, x0 = 46, y0 = 22, L = 91.4 * k, W = 55 * k, cy = y0 + W / 2, D = 14.63 * k, g = 1.83 * k;
  const dee = (x, s) => `<path d="M${x} ${f(cy - g - D)} A${f(D)} ${f(D)} 0 0 ${s > 0 ? 1 : 0} ${f(x + s * D)} ${f(cy - g)} L${f(x + s * D)} ${f(cy + g)} A${f(D)} ${f(D)} 0 0 ${s > 0 ? 1 : 0} ${x} ${f(cy + g + D)}" fill="none" stroke="${LINE}" stroke-width="2"/>` +
    `<circle cx="${f(x + s * 6.4 * k)}" cy="${f(cy)}" r="2.5" fill="${LINE}"/><rect x="${f(s > 0 ? x - 10 : x)}" y="${f(cy - g)}" width="10" height="${f(2 * g)}" fill="none" stroke="#111" stroke-width="2"/>`;
  return `<svg class="dg" viewBox="0 0 640 420" role="img" aria-label="A hockey field">${ARROW}
    <rect x="${x0}" y="${y0}" width="${f(L)}" height="${f(W)}" fill="#2f7fbf"/><rect x="${x0}" y="${y0}" width="${f(L)}" height="${f(W)}" fill="none" stroke="${LINE}" stroke-width="2"/>
    <line x1="${f(x0 + L / 2)}" y1="${y0}" x2="${f(x0 + L / 2)}" y2="${f(y0 + W)}" stroke="${LINE}" stroke-width="2"/>
    ${[22.9, 91.4 - 22.9].map(m => `<line x1="${f(x0 + m * k)}" y1="${y0}" x2="${f(x0 + m * k)}" y2="${f(y0 + W)}" stroke="${LINE}" stroke-width="1.5"/>`).join("")}
    ${dee(x0, 1)}${dee(x0 + L, -1)}
    ${dim(x0, y0 + W + 18, x0 + L, y0 + W + 18, "91.4 m (100 yards)", 16)}${dim(x0 + L + 18, y0, x0 + L + 18, y0 + W, "", 0)}<text x="${f(x0 + L + 4)}" y="${f(y0 - 6)}" font-size="12" class="b acc-t">55 m</text>
    ${lab(x0 + 22.9 * k, y0 + 30, x0 + 22.9 * k + 40, y0 + 30, "'23 m' line (22.9 m)")}
    ${lab(x0 + D, cy + 40, x0 + D + 30, cy + 78, "Shooting circle 'D' — 14.63 m")}${lab(x0 + 6.4 * k, cy, x0 + 6.4 * k + 30, cy - 50, "Penalty spot 6.40 m")}</svg>`; })();
place("L7", "Field & equipment", fig("The hockey field, drawn to scale", hockey, "Goals are 3.66 m wide and 2.14 m high. Only a shot from inside the 'D' can score.", 560));

// L8 — the football pitch (105 × 68 m, the FIFA size)
const football = (() => { const k = 5.2, x0 = 46, y0 = 22, L = 105 * k, W = 68 * k, cy = y0 + W / 2;
  const end = (x, s) => { const pa = 16.5 * k, pw = 40.32 * k / 2, ga = 5.5 * k, gw = 18.32 * k / 2, pm = 11 * k, r = 9.15 * k, dx = pa - pm, dy = Math.sqrt(r * r - dx * dx);
    return `<rect x="${f(s > 0 ? x : x - pa)}" y="${f(cy - pw)}" width="${f(pa)}" height="${f(2 * pw)}" fill="none" stroke="${LINE}" stroke-width="2"/>` +
      `<rect x="${f(s > 0 ? x : x - ga)}" y="${f(cy - gw)}" width="${f(ga)}" height="${f(2 * gw)}" fill="none" stroke="${LINE}" stroke-width="2"/>` +
      `<circle cx="${f(x + s * pm)}" cy="${f(cy)}" r="2.5" fill="${LINE}"/>` +
      `<path d="M${f(x + s * pa)} ${f(cy - dy)} A${f(r)} ${f(r)} 0 0 ${s > 0 ? 1 : 0} ${f(x + s * pa)} ${f(cy + dy)}" fill="none" stroke="${LINE}" stroke-width="2"/>` +
      `<rect x="${f(s > 0 ? x - 10 : x)}" y="${f(cy - 3.66 * k)}" width="10" height="${f(7.32 * k)}" fill="none" stroke="#111" stroke-width="2"/>`; };
  return `<svg class="dg" viewBox="0 0 640 450" role="img" aria-label="A football pitch">${ARROW}
    <rect x="${x0}" y="${y0}" width="${f(L)}" height="${f(W)}" fill="${GRASS}"/>${Array.from({ length: 10 }, (_, i) => i % 2 ? `<rect x="${f(x0 + i * L / 10)}" y="${y0}" width="${f(L / 10)}" height="${f(W)}" fill="${GRASS2}"/>` : "").join("")}
    <rect x="${x0}" y="${y0}" width="${f(L)}" height="${f(W)}" fill="none" stroke="${LINE}" stroke-width="2"/>
    <line x1="${f(x0 + L / 2)}" y1="${y0}" x2="${f(x0 + L / 2)}" y2="${f(y0 + W)}" stroke="${LINE}" stroke-width="2"/><circle cx="${f(x0 + L / 2)}" cy="${f(cy)}" r="${f(9.15 * k)}" fill="none" stroke="${LINE}" stroke-width="2"/>
    ${end(x0, 1)}${end(x0 + L, -1)}
    ${dim(x0, y0 + W + 18, x0 + L, y0 + W + 18, "touch line 100–110 m (105 m here)", 16)}<text x="${f(x0 + L - 2)}" y="${f(y0 + W + 52)}" text-anchor="end" font-size="11.5" class="mut">goal line (width) 64–75 m · 68 m here</text>
    ${lab(x0 + 16.5 * k, cy - 80, x0 + 16.5 * k + 50, y0 + 14, "Penalty area 16.5 m × 40.3 m")}${lab(x0 + 11 * k, cy, x0 + 11 * k + 20, cy + 70, "Penalty mark 11 m")}
    ${lab(x0 + L / 2 + 9.15 * k * .7, cy - 9.15 * k * .7, x0 + L / 2 + 90, y0 + 40, "Centre circle r 9.15 m")}${lab(x0 + 5.5 * k, cy + 30, x0 + 5.5 * k + 18, cy + 110, "Goal area 5.5 m")}</svg>`; })();
place("L8", "Markings", fig("The football pitch, drawn to scale", football, "The goal is 7.32 m × 2.44 m (8 yards × 8 feet). The '10 yards' rule is the 9.15 m centre circle and penalty arc.", 560));

// L10 — the kabaddi court (13 × 10 m, men)
const kabaddi = (() => { const k = 30, x0 = 60, y0 = 20, L = 13 * k, W = 10 * k, mid = x0 + L / 2, lob = 1 * k;
  return `<svg class="dg" viewBox="0 0 680 420" role="img" aria-label="A kabaddi court">${ARROW}
    <rect x="${x0}" y="${y0}" width="${L}" height="${f(W)}" fill="#c98a4b"/><rect x="${x0}" y="${y0}" width="${L}" height="${f(lob)}" fill="#a96d36"/><rect x="${x0}" y="${f(y0 + W - lob)}" width="${L}" height="${f(lob)}" fill="#a96d36"/>
    <rect x="${x0}" y="${y0}" width="${L}" height="${f(W)}" fill="none" stroke="${LINE}" stroke-width="2"/>
    <line x1="${mid}" y1="${y0}" x2="${mid}" y2="${f(y0 + W)}" stroke="${LINE}" stroke-width="3"/>
    ${[-1, 1].map(s => `<line x1="${f(mid + s * 3.75 * k)}" y1="${f(y0 + lob)}" x2="${f(mid + s * 3.75 * k)}" y2="${f(y0 + W - lob)}" stroke="${LINE}" stroke-width="2"/><line x1="${f(mid + s * 4.75 * k)}" y1="${f(y0 + lob)}" x2="${f(mid + s * 4.75 * k)}" y2="${f(y0 + W - lob)}" stroke="${LINE}" stroke-width="1.5" stroke-dasharray="6 4"/>`).join("")}
    ${dim(x0, y0 + W + 20, x0 + L, y0 + W + 20, "13 m (women 12 m)", 16)}<text x="${x0 + L + 8}" y="${f(y0 + W / 2)}" font-size="12" class="b acc-t">10 m</text><text x="${x0 + L + 8}" y="${f(y0 + W / 2 + 14)}" font-size="11" class="mut">(women 8 m)</text>
    ${lab(mid, y0 + 50, mid + 14, y0 + W + 64, "Mid line")}${lab(mid + 3.75 * k, y0 + W - lob - 10, mid + 3.75 * k + 10, y0 + W + 84, "Baulk line — 3.75 m from mid line")}
    ${lab(mid - 4.75 * k, y0 + W - lob - 12, 24, y0 + W + 84, "Bonus line — 1 m beyond baulk", "start")}${lab(x0 + L, y0 + lob / 2, x0 + L + 10, y0 + lob / 2, "Lobby (1 m strip)")}</svg>`; })();
place("L10", "Lines", fig("The kabaddi court, drawn to scale", kabaddi, "The raider must cross the baulk line; touching the bonus line (with at least six defenders on court) earns a bonus point.", 560));

// L11 — the chess board at the start
const chess = (() => { const s = 36, x0 = 40, y0 = 12, back = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"];
  let g = ""; for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) g += `<rect x="${x0 + c * s}" y="${y0 + r * s}" width="${s}" height="${s}" fill="${(r + c) % 2 ? "#b58863" : "#f0d9b5"}"/>`;
  const piece = (ch, c, r, white) => `<text x="${x0 + c * s + s / 2}" y="${y0 + r * s + s * .78}" text-anchor="middle" font-size="28" style="fill:${white ? "#fff" : "#111"};paint-order:stroke;stroke:${white ? "#333" : "#fff"};stroke-width:1px;font-family:'Segoe UI Symbol','Noto Sans Symbols 2','DejaVu Sans',serif">${ch}</text>`;
  back.forEach((p, c) => { g += piece(p, c, 0, false) + piece("♟", c, 1, false) + piece("♟", c, 6, true) + piece(p, c, 7, true); });
  "abcdefgh".split("").forEach((l, c) => { g += `<text x="${x0 + c * s + s / 2}" y="${y0 + 8 * s + 14}" text-anchor="middle" font-size="11" class="mut">${l}</text>`; });
  for (let r = 0; r < 8; r++) g += `<text x="${x0 - 10}" y="${y0 + r * s + s / 2 + 4}" text-anchor="middle" font-size="11" class="mut">${8 - r}</text>`;
  return `<svg class="dg" viewBox="0 0 680 320" role="img" aria-label="A chess board at the start">${g}
    ${lab(x0 + 8 * s, y0 + 7.5 * s, x0 + 8 * s + 30, y0 + 7.5 * s, "h1 is a light square: 'light on the right'")}
    ${lab(x0 + 3.5 * s, y0 + 8 * s, x0 + 8 * s + 30, y0 + 6.2 * s, "The queen stands on her own colour (d1, d8)")}
    ${lab(x0 + 8 * s, y0 + 3 * s, x0 + 8 * s + 30, y0 + 3 * s, "64 squares · 32 pieces, 16 each")}
    ${lab(x0 + 8 * s, y0 + 1.5 * s, x0 + 8 * s + 30, y0 + 1.5 * s, "Ranks run across, files run up")}</svg>`; })();
place("L11", "Board & pieces", fig("The board at the start", chess, "White moves first. The knight is the only piece that jumps (an L — 'ढाई घर').", 560));

// L12 — basketball, badminton and tennis courts
const basket = (() => { const k = 20, x0 = 50, y0 = 16, L = 28 * k, W = 15 * k, cy = y0 + W / 2;
  const end = (x, s) => { const bx = x + s * 1.575 * k, r3 = 6.75 * k, cx3 = 0.9 * k, dy = W / 2 - cx3, dx = Math.sqrt(r3 * r3 - dy * dy);
    return `<rect x="${f(s > 0 ? x : x - 5.8 * k)}" y="${f(cy - 2.45 * k)}" width="${f(5.8 * k)}" height="${f(4.9 * k)}" fill="#c0603c" opacity=".55" stroke="${LINE}" stroke-width="2"/>` +
      `<path d="M${x} ${f(y0 + cx3)} L${f(bx + s * dx)} ${f(y0 + cx3)} A${f(r3)} ${f(r3)} 0 0 ${s > 0 ? 1 : 0} ${f(bx + s * dx)} ${f(y0 + W - cx3)} L${x} ${f(y0 + W - cx3)}" fill="none" stroke="${LINE}" stroke-width="2"/>` +
      `<circle cx="${f(bx)}" cy="${f(cy)}" r="${f(0.225 * k + 2)}" fill="none" stroke="#e8611a" stroke-width="2.5"/><line x1="${f(x + s * 1.2 * k)}" y1="${f(cy - 0.9 * k)}" x2="${f(x + s * 1.2 * k)}" y2="${f(cy + 0.9 * k)}" stroke="#111" stroke-width="3"/>`; };
  return `<svg class="dg" viewBox="0 0 680 370" role="img" aria-label="A basketball court">${ARROW}
    <rect x="${x0}" y="${y0}" width="${L}" height="${W}" fill="#d9a066"/><rect x="${x0}" y="${y0}" width="${L}" height="${W}" fill="none" stroke="${LINE}" stroke-width="2"/>
    <line x1="${x0 + L / 2}" y1="${y0}" x2="${x0 + L / 2}" y2="${y0 + W}" stroke="${LINE}" stroke-width="2"/><circle cx="${x0 + L / 2}" cy="${cy}" r="${f(1.8 * k)}" fill="none" stroke="${LINE}" stroke-width="2"/>
    ${end(x0, 1)}${end(x0 + L, -1)}${dim(x0, y0 + W + 18, x0 + L, y0 + W + 18, "28 m", 16)}<text x="${x0 + L + 6}" y="${cy}" font-size="12" class="b acc-t">15 m</text>
    ${lab(x0 + 1.575 * k + 6.75 * k, cy, x0 + 9.6 * k, cy - 40, "3-point line 6.75 m")}${lab(x0 + L / 2 + 1.8 * k * .7, cy - 1.8 * k * .7, x0 + L / 2 + 70, y0 + 24, "Centre circle 3.6 m across")}
    ${lab(x0 + 1.575 * k, cy + 6, x0 + 3 * k, cy + 4.5 * k, "Ring 3.05 m high")}</svg>`; })();
place("L12", "Basketball", fig("The basketball court, drawn to scale", basket, "Five players a side; 24-second shot clock; a player is out after 5 personal fouls.", 560));
const racket = (() => {
  const court = (x0, y0, k, Lm, Dm, Sm, net, lines, col, title) => { const L = Lm * k, D = Dm * k, sw = (Dm - Sm) / 2 * k, mid = x0 + L / 2;
    return `<rect x="${x0}" y="${y0}" width="${f(L)}" height="${f(D)}" fill="${col}"/><rect x="${x0}" y="${y0}" width="${f(L)}" height="${f(D)}" fill="none" stroke="${LINE}" stroke-width="2"/>` +
      `<line x1="${x0}" y1="${f(y0 + sw)}" x2="${f(x0 + L)}" y2="${f(y0 + sw)}" stroke="${LINE}" stroke-width="1.5"/><line x1="${x0}" y1="${f(y0 + D - sw)}" x2="${f(x0 + L)}" y2="${f(y0 + D - sw)}" stroke="${LINE}" stroke-width="1.5"/>` +
      `<line x1="${f(mid)}" y1="${y0 - 6}" x2="${f(mid)}" y2="${f(y0 + D + 6)}" stroke="#111" stroke-width="3"/>` + lines(mid, k, L, D) +
      `<text x="${f(mid)}" y="${f(y0 + D + 26)}" text-anchor="middle" font-size="14" class="b">${title}</text>`; };
  const bad = court(30, 30, 20, 13.4, 6.1, 5.18, 1, (mid, k, L, D) => [-1, 1].map(s => `<line x1="${f(mid + s * 1.98 * k)}" y1="30" x2="${f(mid + s * 1.98 * k)}" y2="${f(30 + D)}" stroke="${LINE}" stroke-width="1.5"/><line x1="${f(mid + s * (L / 2 - 0.76 * k))}" y1="30" x2="${f(mid + s * (L / 2 - 0.76 * k))}" y2="${f(30 + D)}" stroke="${LINE}" stroke-width="1.5"/><line x1="${f(mid + s * 1.98 * k)}" y1="${f(30 + D / 2)}" x2="${f(mid + s * L / 2)}" y2="${f(30 + D / 2)}" stroke="${LINE}" stroke-width="1.5"/>`).join(""), "#2f8a6a", "Badminton 13.4 × 6.1 m");
  const ten = court(330, 30, 13.5, 23.77, 10.97, 8.23, 1, (mid, k, L, D) => [-1, 1].map(s => `<line x1="${f(mid + s * 6.4 * k)}" y1="${f(30 + 1.37 * k)}" x2="${f(mid + s * 6.4 * k)}" y2="${f(30 + D - 1.37 * k)}" stroke="${LINE}" stroke-width="1.5"/><line x1="${f(mid)}" y1="${f(30 + D / 2)}" x2="${f(mid + s * 6.4 * k)}" y2="${f(30 + D / 2)}" stroke="${LINE}" stroke-width="1.5"/>`).join(""), "#3b6fb6", "Tennis 23.77 × 10.97 m");
  return `<svg class="dg" viewBox="0 0 680 262" role="img" aria-label="Badminton and tennis courts">${bad}${ten}
    <text x="164" y="206" text-anchor="middle" font-size="11" class="mut">short service line 1.98 m from the net</text><text x="490" y="252" text-anchor="middle" font-size="11" class="mut">service line 6.40 m (21 ft) from the net</text></svg>`; })();
place("L12", "Tennis", fig("Badminton and tennis courts (each to its own scale)", racket, "The inner side lines are for singles (badminton 5.18 m, tennis 8.23 m); the outer ones for doubles.", 560));

// L1 — players per side, and where the games were born
const PL = rows("L1", "Players on the field").flatMap(r => r[1].split(/, /).map(sp => [sp, +r[0], ""]));
place("L1", "Players on the field", { k: "bars", title: "Players per side", left: 110, hi: 3, rows: PL, cap: "Rugby union has the most (15); basketball the fewest (5). Cricket, football and hockey share 11." });
place("L1", "Where each game was born", { k: "worldfig", title: "Where the games were born", minw: 640, vb: "60 40 840 220",
  pins: [["Basketball 1891 · Volleyball 1895", -72.6, 42.1, "Massachusetts, USA — Naismith, Morgan", "l"], ["Judo 1882", 139.7, 35.7, "Tokyo — Jigoro Kano", "l"],
    ["Hockey · Football (modern)", -0.13, 51.51, "England", "l"], ["Kabaddi · Chess · Badminton", 73.86, 18.52, "India (Badminton: Poona)", ""]], mark: ["United States of America", "Japan", "United Kingdom"],
  cap: "Two American games from Massachusetts YMCAs; judo from Japan; chess (chaturanga) and kabaddi from India; modern hockey and football from England." });

// L4 — India's world titles as a timeline
place("L4", "India's world titles", { k: "tlfig", title: "India's world titles", rows: rows("L4", "India's world titles").map(r => [+r[1], r[0].replace(/ \(.*\)$/, ""), r[2]]),
  cap: "Kapil Dev (1983), Dhoni (2007, 2011, 2013), Rohit Sharma (2024, 2025), Harmanpreet Kaur (2025, the first women's title) and Suryakumar Yadav (2026)." },
  { k: "photos", title: "Captains in pictures", items: [P("Kapil_Dev", "Kapil Dev", "1983"), P("MS_Dhoni", "M. S. Dhoni", "2007 · 2011 · 2013"), P("Rohit_Sharma", "Rohit Sharma", "2024 · 2025"),
    P("Harmanpreet_Kaur", "Harmanpreet Kaur", "2025 · women's ODI"), P("Suryakumar_Yadav", "Suryakumar Yadav", "2026 · T20")] });

// L6, L7, L9, L11 — people in pictures
place("L6", "Indian athletics landmarks", { k: "photos", title: "Athletes in pictures", items: [
  P("Milkha_Singh", "Milkha Singh", "The Flying Sikh"), P("P._T._Usha", "P. T. Usha", "Payyoli Express"), P("Anju_Bobby_George", "Anju Bobby George", "Worlds bronze 2003"),
  P("Neeraj_Chopra", "Neeraj Chopra", "Olympic gold 2020"), P("Kamaljeet_Sandhu", "Kamaljeet Sandhu", "Asian Games gold 1970"), P("Eldhose_Paul", "Eldhose Paul", "CWG gold 2022")] });
place("L7", "History", { k: "photos", title: "Hockey in pictures", items: [P("Dhyan_Chand", "Dhyan Chand", "The Wizard"), P("Balbir_Singh_Sr.", "Balbir Singh Sr", "5 goals in the 1952 final"),
  P("Jaipal_Singh_Munda", "Jaipal Singh Munda", "Captain, 1928"), P("P._R._Sreejesh", "P. R. Sreejesh", "Goalkeeper"), P("Harmanpreet_Singh", "Harmanpreet Singh", "Captain")] },
  { k: "tlfig", title: "Olympic hockey golds", rows: [[1928, "Amsterdam", ""], [1932, "Los Angeles", ""], [1936, "Berlin", ""], [1948, "London", "first as a free nation"], [1952, "Helsinki", ""], [1956, "Melbourne", ""], [1964, "Tokyo", ""], [1980, "Moscow", ""]],
    cap: "Eight golds — six in a row from 1928 to 1956." });
place("L9", "Belts", { k: "info", title: "The belt ladder", html: `<div style="display:flex;flex-wrap:wrap;gap:8px">${[["White", "#f4f4f4"], ["Yellow", "#f2d13c"], ["Orange", "#f08a24"], ["Green", "#3a9a4a"], ["Blue", "#2f63b6"], ["Brown", "#7a4a22"], ["Black · 1st–5th dan", "#1b1b1b"], ["Red-white · 6th–8th dan", "repeating-linear-gradient(90deg,#c62828 0 18px,#fff 18px 36px)"], ["Red · 9th–10th dan", "#c62828"]]
    .map(([n, c], i) => `<div class="anim-in" style="animation-delay:${i * 50}ms;flex:1 1 92px;text-align:center"><div style="height:16px;border-radius:4px;background:${c};border:1px solid rgba(0,0,0,.25)"></div><small style="font-size:12px;color:var(--ink2)">${n}</small></div>`).join("")}</div>`,
  cap: "Students go up through the kyu grades (white to brown); masters wear dan grades (black, then red and white, then red)." },
  { k: "photos", title: "In pictures", items: [P("Kanō_Jigorō", "Jigoro Kano", "Founded judo, 1882"), P("Judo", "Judo", "'The gentle way'")] });
place("L11", "Indian chess milestones", { k: "photos", title: "Chess in pictures", items: [P("Viswanathan_Anand", "Viswanathan Anand", "First Indian GM, 1988"), P("Gukesh_Dommaraju", "D. Gukesh", "World Champion 2024"),
  P("Divya_Deshmukh", "Divya Deshmukh", "Women's World Cup 2025"), P("Koneru_Humpy", "Koneru Humpy", "Runner-up 2025"), P("Rameshbabu_Praggnanandhaa", "R. Praggnanandhaa", "Grandmaster")] });

// L13 — India at the Olympics, and where the next Games are
place("L13", "India's Olympic landmarks", { k: "bars", title: "India's medals at recent Olympics", sort: false, left: 130, mark: "Tokyo 2020",
  rows: [["Atlanta 1996", 1, "Paes"], ["Sydney 2000", 1, "Malleswari"], ["Athens 2004", 1, "Rathore"], ["Beijing 2008", 3, "Bindra gold"], ["London 2012", 6, ""], ["Rio 2016", 2, "Sindhu, Sakshi"], ["Tokyo 2020", 7, "Neeraj gold"], ["Paris 2024", 6, ""]],
  cap: "Tokyo 2020 is India's best haul (7). India has won 10 Olympic golds in all: 8 in hockey, Bindra (2008) and Neeraj Chopra (2020)." },
  { k: "tlfig", title: "Olympic firsts", rows: rows("L13", "India's Olympic landmarks").map(r => [+r[0].match(/\d{4}/)[0], r[0].replace(/^\d{4} ?/, "") || "—", r[1].split(" — ")[0].split(";")[0].slice(0, 40)]) });
place("L13", "Commonwealth Games", { k: "worldfig", title: "Where the next big Games are", minw: 640,
  pins: [["Milan–Cortina 2026", 9.19, 45.46, "Winter Olympics", ""], ["Los Angeles 2028", -118.24, 34.05, "Olympics · cricket returns", ""], ["Brisbane 2032", 153.03, -27.47, "Olympics", "l"],
    ["Aichi–Nagoya 2026", 136.9, 35.18, "Asian Games", "l"], ["Glasgow 2026", -4.25, 55.86, "Commonwealth Games", "l"]],
  cap: "2026: Winter Olympics in Italy, Commonwealth Games in Glasgow, Asian Games in Japan. Then LA 2028 and Brisbane 2032." },
  { k: "photos", title: "Medallists in pictures", items: [P("Abhinav_Bindra", "Abhinav Bindra", "First individual gold, 2008"), P("Karnam_Malleswari", "Karnam Malleswari", "First woman medallist, 2000"),
    P("Khashaba_Dadasaheb_Jadhav", "K. D. Jadhav", "First individual medal, 1952"), P("Manu_Bhaker", "Manu Bhaker", "Two medals at Paris 2024"), P("Mirabai_Chanu", "Mirabai Chanu", "Gold, Glasgow 2026")] });
VISUAL = { mode: "world", VIS: { key: "sports_photos_v1", word: "sport", words: "sports", search: "", quiz: "person or thing", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

/* Clock — a running clock (one hour every 12 seconds) beside the three speeds, the angle formula drawn on two dials, the
   eleven times the hands meet, the angle between the hands over twelve hours (where the coincide / right-angle /
   opposite counts come from) and a clock beside its mirror image (drawn by study-visual.js). place(), rows() and KIT come
   from tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s, w) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="${w || 700}" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const RM = "@media (prefers-reduced-motion:reduce){";
const pt = (cx, cy, r, deg) => [cx + r * Math.sin(deg * Math.PI / 180), cy - r * Math.cos(deg * Math.PI / 180)].map(v => +v.toFixed(1));
const dial = (cx, cy, R) => `<circle cx="${cx}" cy="${cy}" r="${R}" fill="var(--sheet)" stroke="var(--ink2)" stroke-width="2.5"/>` +
  Array.from({ length: 60 }, (_, k) => { const [x1, y1] = pt(cx, cy, R - (k % 5 ? 4 : 9), k * 6), [x2, y2] = pt(cx, cy, R - 1, k * 6);
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--ink2)" stroke-width="${k % 5 ? 1 : 2}"/>`; }).join("") +
  Array.from({ length: 12 }, (_, k) => { const [x, y] = pt(cx, cy, R - 21, k * 30); return T(x, y + 5, k || 12, "var(--ink)", "middle", R > 90 ? 14 : 12); }).join("");
const hand = (cx, cy, len, deg, w, c, cls, st) => { const [x, y] = pt(cx, cy, len, deg);
  return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"${cls ? ` class="${cls}"` : ""}${st ? ` style="${st}"` : ""}/>`; };
const sector = (cx, cy, r, a1, a2, c) => { const [x1, y1] = pt(cx, cy, r, a1), [x2, y2] = pt(cx, cy, r, a2);
  return `<path d="M${cx} ${cy} L${x1} ${y1} A${r} ${r} 0 ${a2 - a1 > 180 ? 1 : 0} 1 ${x2} ${y2} Z" fill="${c}"/>`; };
const ang = (h, m) => { const H = (h % 12) * 30 + m / 2, M = m * 6, d = Math.abs(H - M); return [H, M, Math.min(d, 360 - d)]; };

// L1 — a running clock: the minute hand laps the dial while the hour hand moves one number
const RC = `<svg class="dg" viewBox="0 0 660 260" role="img" aria-label="A clock running fast: one hour every 12 seconds">
  ${dial(130, 130, 112)}${hand(130, 130, 62, 0, 7, "var(--blue)", "ckh", "transform-origin:130px 130px")}${hand(130, 130, 92, 0, 4, "var(--accent)", "ckm", "transform-origin:130px 130px")}
  <circle cx="130" cy="130" r="6" fill="var(--ink)"/>
  ${T(290, 50, "Minute hand", "var(--accent)", "start", 15)}${T(290, 72, "360° in 60 min → 6° a minute", "var(--ink)", "start", 13, 500)}
  ${T(290, 112, "Hour hand", "var(--blue)", "start", 15)}${T(290, 134, "30° in 60 min → ½° a minute", "var(--ink)", "start", 13, 500)}
  ${T(290, 174, "The minute hand gains", "var(--ink)", "start", 15)}${T(290, 196, "6 − ½ = 5½° every minute", "var(--ink)", "start", 13, 500)}
  ${T(290, 236, "Here one hour passes every 12 seconds.", "var(--ink2)", "start", 11.5, 500)}
  <style>.ckm{animation:ckturn 12s linear infinite}.ckh{animation:ckturn 144s linear infinite}@keyframes ckturn{from{transform:rotate(0)}to{transform:rotate(360deg)}}${RM}.ckm,.ckh{animation:none}}</style></svg>`;
place("L1", "Speeds to remember", KIT.fig("Watch the two speeds", RC,
  "While the minute hand goes once round (360°), the hour hand moves only from one number to the next (30°). Every clock question is built on 6°, ½° and the 5½° gap."));

// L2 — the formula on two dials
const two = [[3, 40], [7, 20]].map(([h, m], i) => { const cx = 110 + i * 330, cy = 120, [H, M, d] = ang(h, m), lo = Math.min(H, M), hi = Math.max(H, M), big = hi - lo > 180;
  const s = big ? sector(cx, cy, 50, hi, lo + 360, "hsla(20,85%,55%,.35)") : sector(cx, cy, 50, lo, hi, "hsla(20,85%,55%,.35)");
  return dial(cx, cy, 95) + s + hand(cx, cy, 52, H, 7, "var(--blue)") + hand(cx, cy, 78, M, 4, "var(--accent)") + `<circle cx="${cx}" cy="${cy}" r="5" fill="var(--ink)"/>` +
    T(cx + 108, 66, `${h}:${String(m).padStart(2, "0")}`, "var(--ink)", "start", 18) +
    T(cx + 108, 94, `30 × ${h} = ${30 * h}`, "var(--ink2)", "start", 12, 500) + T(cx + 108, 114, `11 × ${m} ÷ 2 = ${11 * m / 2}`, "var(--ink2)", "start", 12, 500) +
    T(cx + 108, 146, `gap ${d}°`, "var(--accent)", "start", 18); }).join("");
if (ang(3, 40)[2] !== 130 || ang(7, 20)[2] !== 100) fail("clock: the angle formula is off");
const AF = `<svg class="dg" viewBox="0 0 660 240" role="img" aria-label="The angle between the hands at 3:40 and at 7:20">${two}</svg>`;
place("L2", "One formula", KIT.fig("θ = |30H − 11M/2| on a real dial", AF,
  "At 3:40 the hour hand has moved 20° past 3 (½° × 40), so it sits at 110°; the minute hand is at 240°. The gap is 130°. If the formula gives more than 180°, subtract it from 360°."));

// L3 — the eleven meetings in twelve hours
const MEET = Array.from({ length: 11 }, (_, k) => { const tot = 720 * k / 11, h = Math.floor(tot / 60), m = tot - 60 * h, mi = Math.floor(m + 1e-9), f = Math.round((m - mi) * 11);
  return [tot / 2, (h || 12) + ":" + String(mi).padStart(2, "0") + (f ? ` ${f}⁄11` : "")]; });
const CO = `<svg class="dg" viewBox="0 0 660 330" role="img" aria-label="The eleven times the hands coincide in twelve hours">
  ${dial(200, 165, 112)}
  ${MEET.map(([a, t], k) => { const [x, y] = pt(200, 165, 92, a), [lx, ly] = pt(200, 165, 134, a), [x2, y2] = pt(200, 165, 112, a);
    return `<line x1="200" y1="165" x2="${x}" y2="${y}" stroke="var(--accent)" stroke-width="2" stroke-opacity=".55"/><circle cx="${x2}" cy="${y2}" r="6" fill="var(--accent)" class="cop" style="animation-delay:${k * .35}s"/>` +
      T(lx, ly + 4, t, "var(--ink)", lx < 190 ? "end" : lx > 210 ? "start" : "middle", 10.5, 600); }).join("")}
  <circle cx="200" cy="165" r="5" fill="var(--ink)"/>
  ${T(392, 70, "Every 65 5⁄11 minutes", "var(--accent)", "start", 15)}${T(392, 92, "the minute hand catches the hour hand", "var(--ink)", "start", 12.5, 500)}
  ${T(392, 112, "again: it gains 360° at 5½° a minute.", "var(--ink)", "start", 12.5, 500)}
  ${T(392, 152, "11 times in 12 hours, 22 in a day", "var(--ink)", "start", 14)}
  ${T(392, 176, "Between 11 and 1 they meet only once,", "var(--ink2)", "start", 12, 500)}${T(392, 194, "at 12 — that is the one “missing” meeting.", "var(--ink2)", "start", 12, 500)}
  ${T(392, 234, "Between n and n + 1 they meet at", "var(--ink2)", "start", 12, 500)}${T(392, 256, "60n ÷ 11 minutes past n", "var(--accent)", "start", 14)}
  ${T(392, 278, "e.g. 4:21 9⁄11 (240 ÷ 11 = 21 9⁄11)", "var(--ink2)", "start", 12, 500)}
  <style>.cop{animation:copop 3.9s ease-in-out infinite}@keyframes copop{0%,100%{opacity:.35}10%{opacity:1}}${RM}.cop{animation:none}}</style></svg>`;
place("L3", "Ready answers", KIT.fig("The eleven meetings", CO,
  "The hands meet at 12:00, 1:05 5⁄11, 2:10 10⁄11 … — once in every hour except between 11 and 1, where 12:00 is the only meeting."));

// L4 — the angle between the hands over twelve hours
const gx = t => 50 + t / 720 * 580, gy = d => 210 - d / 180 * 160;
const vtx = []; for (let k = 0; k <= 11; k++) { vtx.push([720 * k / 11, 0]); if (k < 11) vtx.push([(720 * k + 360) / 11, 180]); }
const at = (k, deg) => [(360 * k + deg) / 5.5, (360 * (k + 1) - deg) / 5.5];   // the two times in lap k when the gap is deg
const dots = (deg, c) => { let s = "", n = 0; for (let k = 0; k < 11; k++) at(k, deg).filter((t, i) => deg === 180 ? i === 0 : true).forEach(t => { n++; s += `<circle cx="${gx(t).toFixed(1)}" cy="${gy(deg)}" r="4.5" fill="${c}"/>`; }); return [s, n]; };
const [d90, n90] = dots(90, "#2f6db5"), [d180, n180] = dots(180, "var(--accent)");
if (n90 !== 22 || n180 !== 11) fail("clock: expected 22 right angles and 11 opposites");
const AG = `<svg class="dg" viewBox="0 0 660 270" role="img" aria-label="The angle between the hands from 12:00 to 12:00">
  ${Array.from({ length: 13 }, (_, h) => `<line x1="${gx(h * 60)}" y1="50" x2="${gx(h * 60)}" y2="210" class="grid"/>` + T(gx(h * 60), 228, h || 12, "var(--ink2)", "middle", 10.5, 600)).join("")}
  <path d="M50 210 H630" stroke="var(--ink)" stroke-width="1.5"/>${T(340, 250, "time from 12:00 (hours)", "var(--ink2)", "middle", 11, 500)}
  ${[[0, "0°"], [90, "90°"], [180, "180°"]].map(([d, l]) => T(42, gy(d) + 4, l, "var(--ink2)", "end", 10.5, 600)).join("")}
  <path d="M50 ${gy(90)} H630" stroke="#2f6db5" stroke-dasharray="5 4" stroke-opacity=".7"/>
  <polyline points="${vtx.map(([t, d]) => gx(t).toFixed(1) + "," + gy(d)).join(" ")}" fill="none" stroke="var(--ink2)" stroke-width="2" class="agl"/>
  ${d90}${d180}${vtx.filter(v => v[1] === 0).map(([t]) => `<circle cx="${gx(t).toFixed(1)}" cy="${gy(0)}" r="4.5" fill="var(--good)"/>`).join("")}
  <circle cx="60" cy="24" r="5" fill="var(--good)"/>${T(70, 28, "together: 11", "var(--ink)", "start", 12)}
  <circle cx="200" cy="24" r="5" fill="#2f6db5"/>${T(210, 28, "right angle: 22", "var(--ink)", "start", 12)}
  <circle cx="360" cy="24" r="5" fill="var(--accent)"/>${T(370, 28, "opposite (180°): 11", "var(--ink)", "start", 12)}
  <style>.agl{stroke-dasharray:2400;stroke-dashoffset:2400;animation:agdraw 4s ease-out forwards}@keyframes agdraw{to{stroke-dashoffset:0}}${RM}.agl{animation:none;stroke-dashoffset:0}}</style></svg>`;
place("L4", "The counts", KIT.fig("The gap between the hands over 12 hours", AG,
  "The gap grows by 5½° a minute to 180°, then shrinks back to 0 — eleven times in twelve hours. Each rise and each fall crosses 90° once (22 right angles); each peak is one opposite (11). The dot at the far right is 12:00 again, not a new meeting. Double every count for a full day."));

// L5 — a clock and its mirror image
const MI = (cx, mirror) => `<g${mirror ? ` transform="translate(${2 * cx} 0) scale(-1 1)"` : ""}>${dial(cx, 125, 95)}${hand(cx, 125, 52, ang(2, 45)[0], 7, "var(--blue)")}${hand(cx, 125, 78, ang(2, 45)[1], 4, "var(--accent)")}<circle cx="${cx}" cy="125" r="5" fill="var(--ink)"/></g>`;
const MR = `<svg class="dg" viewBox="0 0 660 290" role="img" aria-label="A clock at 2:45 and its mirror image, which reads 9:15">
  ${MI(150, false)}<line x1="330" y1="20" x2="330" y2="232" stroke="var(--blue)" stroke-width="3" stroke-dasharray="8 5"/>${T(330, 250, "mirror", "var(--blue)", "middle", 12)}
  ${MI(510, true)}${T(150, 250, "Actual: 2:45", "var(--ink)", "middle", 15)}${T(510, 250, "In the mirror it reads 9:15", "var(--ink)", "middle", 15)}
  ${T(330, 280, "11:60 − 2:45 = 9:15  (and 11:60 − 9:15 = 2:45)", "var(--accent)", "middle", 14)}</svg>`;
place("L5", "Mirror image", KIT.fig("A clock and its mirror", MR,
  "A mirror flips left and right, so a hand at 3 seems to point at 9. The two times always add up to 12:00 (11:60), which is why one subtraction gives the answer either way."));

VISUAL = { mode: true, VIS: { key: "clock_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

/* Calendar — the leap-year test as a flowchart, the four days a century can end on, sixty years coloured by the
   calendar they use (same colour and same kind = the same calendar) and a 31-day month with its five-times weekdays
   (drawn by study-visual.js). Every date is worked out here with Date, so the pictures cannot drift from the calendar.
   place(), rows() and KIT come from tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s, w) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="${w || 700}" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const DAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const jan1 = y => new Date(Date.UTC(y, 0, 1)).getUTCDay(), leap = y => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
const HUE = [0, 30, 55, 130, 190, 230, 290].map(h => `hsla(${h},70%,52%,.42)`);
const AR = `<marker id="calar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="var(--ink2)"/></marker>`;

// L1 — the leap-year test
const box = (x, y, w, t, c) => `<rect x="${x}" y="${y}" width="${w}" height="40" rx="10" fill="${c}" stroke="var(--rule)"/>` + T(x + w / 2, y + 25, t, "var(--ink)", "middle", 13);
const arrow = (x1, y1, x2, y2, t, tx, ty) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="var(--ink2)" stroke-width="2" marker-end="url(#calar)"/>` + (t ? T(tx, ty, t, "var(--ink2)", "middle", 11, 700) : "");
const LEAP = "hsla(135,55%,45%,.35)", ORD = "hsla(0,70%,55%,.25)";
const LF = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="Is the year a leap year? A flowchart">
  <defs>${AR}</defs>
  ${box(20, 20, 170, "Is it a century year?", "var(--sheet)")}${box(250, 20, 170, "Divisible by 400?", "var(--sheet)")}${box(250, 120, 170, "Divisible by 4?", "var(--sheet)")}
  ${box(480, 20, 160, "Leap year", LEAP)}${box(480, 80, 160, "Not leap", ORD)}${box(480, 170, 160, "Leap year", LEAP)}${box(480, 230, 160, "Not leap", ORD)}
  ${arrow(190, 40, 247, 40, "yes", 218, 33)}<path d="M105 60 V140 H247" fill="none" stroke="var(--ink2)" stroke-width="2" marker-end="url(#calar)"/>${T(170, 133, "no", "var(--ink2)", "middle", 11)}
  ${arrow(420, 40, 477, 40, "yes", 448, 33)}${arrow(420, 50, 477, 95, "no", 440, 85)}${arrow(420, 140, 477, 185, "yes", 462, 152)}${arrow(420, 150, 477, 245, "no", 437, 215)}
  ${T(105, 190, "1996 ✓  2024 ✓  2030 ✗", "var(--ink2)", "middle", 11.5, 500)}${T(105, 210, "1600 ✓  2000 ✓", "var(--ink2)", "middle", 11.5, 500)}
  ${T(105, 230, "1700 ✗  1800 ✗  1900 ✗  2100 ✗", "var(--ink2)", "middle", 11.5, 500)}${T(335, 205, "a century year needs 400,", "var(--ink2)", "middle", 11.5, 500)}${T(335, 222, "any other year needs only 4", "var(--ink2)", "middle", 11.5, 500)}</svg>`;
[1996, 2024, 1600, 2000].forEach(y => { if (!leap(y)) fail("calendar: " + y + " should be leap"); });
[2030, 1700, 1800, 1900, 2100].forEach(y => { if (leap(y)) fail("calendar: " + y + " should not be leap"); });
place("L1", "Is it a leap year?", KIT.fig("Leap or not, in two questions", LF,
  "For an ordinary year, check that the last two digits divide by 4. A century year (ending in 00) must divide by 400, so 2000 was a leap year but 1900 and 2100 are not."));

// L2 — the four days a century can end on
const CE = rows("L2", "Last day of a century").map(r => [r[0].split(", ")[0], +r[1], r[2]]);
CE.forEach(([y, o, d]) => { const dec31 = new Date(Date.UTC(+y, 11, 31)).getUTCDay(); if (DAY[dec31] !== d || dec31 !== o) fail("calendar: 31 Dec " + y + " is not " + d); });
const ring = DAY.map((d, k) => { const a = k / 7 * 2 * Math.PI, x = 200 + 115 * Math.sin(a), y = 150 - 115 * Math.cos(a), hit = CE.find(c => c[1] === k);
  return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="34" fill="${hit ? "var(--accent)" : "var(--sunk)"}" stroke="var(--rule)"/>` +
    T(x.toFixed(1), (y + 1).toFixed(1), d.slice(0, 3), hit ? "#fff" : "var(--ink2)", "middle", 14) +
    T(x.toFixed(1), (y + 17).toFixed(1), hit ? k + " odd" : "never", hit ? "#fff" : "var(--ink2)", "middle", 10, 600); }).join("");
const CR = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="The last day of a century is always Sunday, Monday, Wednesday or Friday">
  <circle cx="200" cy="150" r="115" fill="none" stroke="var(--rule)" stroke-width="2" stroke-dasharray="4 5"/>${ring}
  ${T(200, 146, "odd days", "var(--ink2)", "middle", 12, 600)}${T(200, 164, "→ day", "var(--ink2)", "middle", 12, 600)}
  ${CE.map(([y, o, d], i) => T(390, 60 + i * 52, `${y} years`, "var(--ink)", "start", 15) + T(390, 80 + i * 52, `${o} odd day${o === 1 ? "" : "s"} → ends on a ${d}`, "var(--accent)", "start", 12.5, 600)).join("")}
  ${T(390, 278, "Tue, Thu, Sat never end a century", "var(--ink2)", "start", 12, 500)}</svg>`;
place("L2", "Last day of a century", KIT.fig("Only four days can end a century", CR,
  "100 years leave 5 odd days, 200 leave 3, 300 leave 1 and 400 leave 0 — counted from Sunday (0) that is Friday, Wednesday, Monday and Sunday. The other three days never end a century (checked here against the real calendar)."));

// L7 — sixty years, coloured by the calendar they use
const Y0 = 2000, cells = [];
for (let i = 0; i < 60; i++) { const y = Y0 + i, d = jan1(y), L = leap(y), x = 20 + (i % 10) * 62, top = 10 + Math.floor(i / 10) * 44;
  cells.push(`<rect x="${x}" y="${top}" width="58" height="38" rx="7" fill="${HUE[d]}" stroke="${L ? "var(--ink)" : "var(--rule)"}" stroke-width="${L ? 2.5 : 1}"${L ? ' stroke-dasharray="5 3"' : ""}/>` +
    T(x + 29, top + 18, y, "var(--ink)", "middle", 12.5) + T(x + 29, top + 32, DAY[d].slice(0, 3) + (L ? " · leap" : ""), "var(--ink2)", "middle", 9.5, 600)); }
const same = y => { for (let z = y + 1; z < y + 60; z++) if (jan1(z) === jan1(y) && leap(z) === leap(y)) return z; };
[[2024, 2052], [2025, 2031], [2026, 2037]].forEach(([a, b]) => { if (same(a) !== b) fail(`calendar: ${a} should repeat in ${b}`); });
const RP = `<svg class="dg" viewBox="0 0 660 330" role="img" aria-label="The years 2000 to 2059 coloured by the day they start on">
  ${DAY.map((d, k) => `<rect x="${20 + k * 90}" y="280" width="16" height="16" rx="4" fill="${HUE[k]}"/>` + T(42 + k * 90, 293, "starts " + d.slice(0, 3), "var(--ink2)", "start", 10.5, 600)).join("")}
  ${cells.join("")}${T(20, 320, "Same colour + same kind (leap years have the dashed border) = the same calendar, page for page.", "var(--ink2)", "start", 11.5, 500)}</svg>`;
place("L7", "Next year with the same calendar", KIT.fig("Which years share a calendar", RP,
  "Find 2026 (starts Thursday, ordinary) — the next ordinary year starting on a Thursday is 2037, eleven years on. 2025 repeats in 2031 (+6) and the leap year 2024 only in 2052 (+28), just as the rules say."));

// L8 — a 31-day month: its first three weekdays come five times
const MY = 2027, MM = 0, first = new Date(Date.UTC(MY, MM, 1)).getUTCDay();
if (first !== 5) fail("calendar: January 2027 should start on a Friday");
const five = new Set([0, 1, 2].map(k => (first + k) % 7));
let cal = DAY.map((d, k) => `<rect x="${20 + k * 60}" y="30" width="56" height="28" rx="6" fill="${five.has(k) ? "var(--accent)" : "var(--sunk)"}"/>` + T(48 + k * 60, 49, d.slice(0, 3), five.has(k) ? "#fff" : "var(--ink2)", "middle", 12)).join("");
for (let dd = 1; dd <= 31; dd++) { const p = first + dd - 1, c = p % 7, r = Math.floor(p / 7), x = 20 + c * 60, y = 64 + r * 40;
  cal += `<rect x="${x}" y="${y}" width="56" height="36" rx="6" fill="${five.has(c) ? "hsla(20,85%,55%,.2)" : "var(--sheet)"}" stroke="var(--rule)"/>` + T(x + 28, y + 23, dd, dd > 28 ? "var(--accent)" : "var(--ink)", "middle", 14, dd > 28 ? 800 : 600); }
const MC = `<svg class="dg" viewBox="0 0 660 320" role="img" aria-label="January 2027: Friday, Saturday and Sunday come five times">
  ${T(20, 20, "January 2027 (31 days, starts on a Friday)", "var(--ink)", "start", 13)}${cal}
  ${T(460, 90, "31 = 4 weeks + 3 days", "var(--ink)", "start", 14)}${T(460, 114, "The 3 extra days (29, 30, 31)", "var(--ink2)", "start", 12, 500)}
  ${T(460, 132, "fall on the first 3 weekdays:", "var(--ink2)", "start", 12, 500)}${T(460, 158, "5 Fridays, Saturdays, Sundays", "var(--accent)", "start", 13)}
  ${T(460, 200, "30 days → first 2 days five times", "var(--ink2)", "start", 12, 500)}${T(460, 220, "29 days → only the first day", "var(--ink2)", "start", 12, 500)}
  ${T(460, 240, "28 days → every day four times", "var(--ink2)", "start", 12, 500)}</svg>`;
place("L8", "Counting", KIT.fig("Which weekdays come five times", MC,
  "A 31-day month is four full weeks plus three days, and those three days are the weekdays the month starts on. The same idea gives 53 of the first day in an ordinary year (52 weeks + 1 day)."));

VISUAL = { mode: true, VIS: { key: "calendar_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

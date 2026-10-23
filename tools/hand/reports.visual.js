/* Reports & Indices — India's ranks on one ladder, which way each rank moved, the countries that top the indices on the
   world map, and the forest-cover leaders on India's map (drawn by study-visual.js and study-world.js).
   place(), rows(), fail and KIT come from tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;

// L14 — India's ranks on one ladder (1 at the top)
const LD = rows("L14", "India's rank ladder").map(r => [parseInt(r[0], 10), r[1]]).filter(r => r[0]);
const sy = n => 20 + (n - 1) / 179 * 560;
let lastL = -99, lastR = -99;
const LAD = `<svg class="dg" viewBox="0 0 680 600" role="img" aria-label="India's rank in each index on one scale">
  <defs><linearGradient id="rk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f8f4e"/><stop offset=".5" stop-color="#f2c14e"/><stop offset="1" stop-color="#c0392b"/></linearGradient></defs>
  <rect x="330" y="20" width="20" height="560" rx="10" fill="url(#rk)"/>${[1, 50, 100, 150, 180].map(n => `<text x="340" y="${sy(n) + 4}" text-anchor="middle" font-size="9.5" font-weight="800" style="fill:#fff">${n}</text>`).join("")}
  ${LD.map(([n, t], i) => { const left = i % 2 === 0, y0 = sy(n); let y = y0; if (left) { y = Math.max(y0, lastL + 15); lastL = y; } else { y = Math.max(y0, lastR + 15); lastR = y; }
    return `<path d="M${left ? 328 : 352} ${y0} L${left ? 300 : 380} ${y}" stroke="var(--ink2)" stroke-width="1"/><text x="${left ? 296 : 384}" y="${y + 4}" text-anchor="${left ? "end" : "start"}" font-size="11" font-weight="700">` +
      `<tspan style="fill:var(--accent)">${n}</tspan> ${t}</text>`; }).join("")}</svg>`;
place("L14", "India's rank ladder", KIT.fig("India's ranks on one ladder", LAD, "Green is near the top, red near the bottom. Careful: in terrorism and air pollution a low number is bad news — rank 1 is the most affected.", 560));

// L14 — which way each rank moved
const UD = rows("L14", "Went up").flatMap(r => [r[0], r[1]]).map(s => { const m = s.match(/^(.*?)\s+(\d+)(?:st|nd|rd|th)?\s*→\s*(\d+)(?:st|nd|rd|th)?\s*(.*)$/); if (!m) return null;
  const a = +m[2], b = +m[3], rev = /worst|more impacted/.test(m[4]); return [m[1], a, b, rev ? b > a : b < a, m[4]]; }).filter(Boolean);
place("L14", "Went up", { k: "info", title: "Which way India's ranks moved", html: `<div class="fam">${UD.map(([n, a, b, good, note]) =>
  `<div style="border-left:5px solid ${good ? "var(--good)" : "var(--bad)"}"><b>${n}</b><span style="font:800 18px var(--f-num);color:${good ? "var(--good)" : "var(--bad)"}">${a} → ${b} ${good ? "▲" : "▼"}</span>${note ? `<small>${note.replace(/[()]/g, "")}</small>` : ""}</div>`).join("")}</div>`,
  cap: "▲ green: a better position this year. ▼ red: a worse one. For terrorism and air pollution, a smaller number means worse." });

// L14 — the countries at the top
const TOP = { "Iceland": [-19, 65, "Iceland"], "Finland": [26, 63, "Finland"], "Norway": [9, 61, "Norway"], "Denmark": [10, 56, "Denmark"], "Sweden": [16, 62, "Sweden"], "Switzerland": [8.2, 46.8, "Switzerland"],
  "Estonia": [25.5, 58.7, "Estonia"], "Singapore": [103.8, 1.35, "Singapore"], "USA": [-98, 39, "United States of America"], "Pakistan": [69, 30, "Pakistan"], "Chad": [18.7, 15.4, "Chad"] };
const TP = rows("L14", "#1 map").filter(r => TOP[r[0]]);
const names = KIT ? GEO.worldNames() : new Set();
place("L14", "#1 map", { k: "worldfig", title: "Who comes first", minw: 640, mark: TP.map(r => TOP[r[0]][2]).filter(n => names.has(n)),
  pins: TP.map((r, i) => [String(i + 1), TOP[r[0]][0], TOP[r[0]][1], r[0], "n"]), legend: TP.map((r, i) => [`${i + 1} ${r[0]}`, r[1]]),
  cap: "The Nordic countries crowd the top of the 'good' lists; Pakistan and Chad top two lists nobody wants to lead." });

// L11 — forest cover leaders on India's map
const FR = { MP: ["#1f6b3a", "MP — largest forest + tree cover"], AR: ["#2f8f4e", "Arunachal — 2nd largest; 2nd by %"], MH: ["#5aa85a", "Maharashtra — 3rd (forest + tree)"], CT: ["#7fb36a", "Chhattisgarh — 3rd (forest only)"], MZ: ["#145a30", "Mizoram — highest % of its area"] };
place("L11", "Rankings by area", { k: "mapfig", title: "Forest leaders on the map", fill: Object.fromEntries(Object.entries(FR).map(([k, [c]]) => [k, c])), legend: Object.values(FR).map(([c, t]) => [c, t]),
  marks: [["MP", "1"], ["AR", "2"], ["MH", "3"], ["MZ", "% 1", 0, 6]], cap: "India State of Forest Report 2023: forest + tree cover is 25.17% of India's area. Lakshadweep (91.33%) has the highest share of all." });

VISUAL = { mode: "world", VIS: { key: "reports_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

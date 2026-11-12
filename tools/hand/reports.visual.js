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
  <rect x="330" y="20" width="20" height="560" rx="10" fill="url(#rk)"/>${[1, 50, 100, 150, 180].map(n => `<text x="340" y="${sy(n) + 4}" text-anchor="middle" font-size="9.5" font-weight="800" style="fill:#fff;stroke:rgba(0,0,0,.55);stroke-width:2.2px;paint-order:stroke;stroke-linejoin:round">${n}</text>`).join("")}
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

// ---- added: what each index is built from, as a small tree; which way the score runs ----
const rT = (x, y, t, c, a, sz) => `<text x="${x}" y="${y}" font-size="${sz || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const rM = (x, y, t, a, sz) => `<text x="${x}" y="${y}" font-size="${sz || 10.5}" text-anchor="${a || "start"}" class="mut">${t}</text>`;
const rW = (x, y, t, sz) => `<text x="${x}" y="${y}" font-size="${sz || 11}" font-weight="700" text-anchor="middle" style="fill:#fff">${t}</text>`;
const rEsc = t => String(t).replace(/&(?!amp;|lt;|gt;)/g, "&amp;");
// words → lines of at most n characters
const rWrap = (t, n) => { const out = [""]; String(t).split(" ").forEach(w => { if ((out[out.length - 1] + " " + w).trim().length > n) out.push(w); else out[out.length - 1] = (out[out.length - 1] + " " + w).trim(); }); return out; };
const RC = ["#2f6db5", "#2f8f4e", "#a8780a", "#7d4fb5", "#c0392b", "#1a8a8a"];
// a root box with one leaf per item: items = [[name, note]]
const tree = (label, root, sub, items, foot) => { const n = items.length, w = (624 - (n - 1) * 8) / n, ch = n > 4 ? 13 : 18;
  return `<svg class="dg" viewBox="0 0 640 ${foot ? 212 : 180}" role="img" aria-label="${label}">
  <rect x="200" y="6" width="240" height="${sub ? 44 : 36}" rx="10" fill="#5b6470"/>${rW(320, sub ? 25 : 29, rEsc(root), 13.5)}${sub ? `<text x="320" y="41" font-size="10.5" text-anchor="middle" style="fill:#fff;opacity:.92">${rEsc(sub)}</text>` : ""}
  <path d="M320 ${sub ? 50 : 42} V64 M${8 + w / 2} 64 H${632 - w / 2} ${items.map((_, i) => `M${8 + w / 2 + i * (w + 8)} 64 V76`).join(" ")}" fill="none" stroke="var(--ink2)" stroke-width="1.6"/>
  ${items.map((r, i) => { const x = 8 + i * (w + 8), ls = rWrap(r[0], ch); return `<rect x="${x}" y="76" width="${w}" height="${r[1] ? 58 : 76}" rx="10" fill="${RC[i % 6]}"/>${ls.map((l, k) => rW(x + w / 2, 76 + (r[1] ? 29 : 38) - (ls.length - 1) * 7 + k * 14 + 4, rEsc(l), n > 4 ? 10.5 : 11.5)).join("")}${r[1] ? rWrap(r[1], ch + 4).map((l, k) => rM(x + w / 2, 150 + k * 13, rEsc(l), "middle", 10)).join("") : ""}`; }).join("")}
  ${foot ? rM(320, 204, rEsc(foot), "middle", 10.5) : ""}</svg>`; };

const HD = rows("L2", "HDI: 3");
place("L2", "HDI: 3", KIT.fig("What the HDI is built from", tree("The three dimensions and four indicators of the Human Development Index", "Human Development Index", "UNDP · 0 to 1 · higher is better", HD.map(r => [r[0], r[1]]), "3 dimensions, 4 indicators: health has one, knowledge has two, income has one. The index is their geometric mean."),
  "Mahbub ul Haq devised the HDI with Amartya Sen; it first appeared in the Human Development Report of 1990."));
place("L3", "6 factors", KIT.fig("Six things that explain happiness", tree("The six factors of the World Happiness Report", "World Happiness Report", "", rows("L3", "6 factors").map(r => [r[1], ""])),
  "The ranking itself comes from people's own life ratings (the Cantril ladder, 0 to 10); the six factors are used to explain the differences."));
place("L4", "4 sub-indices", KIT.fig("Four parts of the Gender Gap Index", tree("The four sub-indices of the Global Gender Gap Index", "Global Gender Gap Index", "World Economic Forum · 0 to 1 · 1 = full parity", rows("L4", "4 sub-indices").map(r => [r[0], r[1]])),
  "A trick for the four: Economy, Education, Health, Politics."));
const GH = rows("L4", "GHI: 4");
place("L4", "GHI: 4", KIT.fig("Four parts of the Global Hunger Index", tree("The four indicators of the Global Hunger Index", "Global Hunger Index", "0 to 100 · lower is better", GH.map(r => [r[0], r[1] + " · India " + r[2]]), "Three of the four are about children under five."),
  "Published by Concern Worldwide and Welthungerhilfe. Stunting is low height for age; wasting is low weight for height."));
place("L5", "5 indicators", KIT.fig("Five tests of press freedom", tree("The five indicators of the World Press Freedom Index", "World Press Freedom Index", "Reporters Without Borders (RSF), Paris", rows("L5", "5 indicators").map(r => [r[1], ""])),
  "Each country gets a score from 0 to 100 on five contexts; a higher score means a freer press."));
place("L10", "FHI: 5", KIT.fig("Five pillars of the Fiscal Health Index", tree("The five pillars of NITI Aayog's Fiscal Health Index", "Fiscal Health Index", "NITI Aayog · ranks the states", rows("L10", "FHI: 5").map(r => [r[1], ""])),
  "Two of the five pillars are about debt: how big it is and whether it can be sustained."));
// which way the score runs
const SD = rows("L1", "Score direction"), HI = SD.filter(r => /^Higher/.test(r[2])), LO = SD.filter(r => /^Lower/.test(r[2]));
if (!HI.length || !LO.length) fail("reports L1: the score-direction table changed");
const col = (x, title, c, list, arrow) => `<rect x="${x}" y="6" width="306" height="${44 + list.length * 34}" rx="12" class="card"/><rect x="${x}" y="6" width="306" height="32" rx="12" fill="${c}"/>${rW(x + 153, 27, arrow + "  " + title, 13)}
  ${list.map((r, i) => rT(x + 14, 62 + i * 34, rEsc(r[0]), "var(--ink)", "start", 12) + rM(x + 14, 77 + i * 34, rEsc(r[1]), "start", 10.5)).join("")}`;
const SDS = `<svg class="dg" viewBox="0 0 640 ${58 + Math.max(HI.length, LO.length) * 34}" role="img" aria-label="Indices where a higher score is better and where a lower score is better">
  ${col(8, "A higher score is better", "#2f8f4e", HI, "↑")}${col(326, "A lower score is better", "#c0392b", LO, "↓")}</svg>`;
place("L1", "Score direction", KIT.fig("Which way does the score run?", SDS, "Indices that measure a problem (hunger, terrorism) are better when lower. Indices that measure a good thing (development, parity, clean government) are better when higher."));

VISUAL = { mode: "world", VIS: { key: "reports_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

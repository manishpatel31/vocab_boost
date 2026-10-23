/* Census & Population — the most and least populous states on the map, a century of decadal growth, density and sex ratio
   at both ends, literacy since 1951 with the gender gap, the age structure, religion as a doughnut and SC/ST at a glance
   (drawn by study-visual.js). place(), rows() and KIT come from tools/workbook/apply-hand.js; every number comes from the
   lesson tables. */
const T = (x, y, t, c, a, s, w) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="${w || 700}" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const f1 = v => +v.toFixed(1), num = s => parseFloat(String(s).replace(/[−–]/g, "-").replace(/,/g, "").match(/-?\d+(\.\d+)?/)[0]);
const HI = "#2f6db5", LO = "#c0503a", ALIAS = { "Arunachal": "Arunachal Pradesh", "J&K": "Jammu and Kashmir", "Himachal": "Himachal Pradesh" };
// a state map: high in blue, low in red; rows are "Name · value" strings
const ends = (title, hi, lo, cap, hiLab, loLab) => { const fill = {}, marks = [];
  const add = (list, c) => list.forEach(t => { const n0 = t.split(/ · | (?=\d)/)[0].replace(/\s+\(.*\)$/, "").trim(), n = ALIAS[n0] || n0, id = KIT.code(n); if (!id) fail("census: no state " + n); fill[id] = c; marks.push([id, t.replace(/ \(undivided\)/, "")]); });
  add(hi, HI); add(lo, LO); return { k: "mapfig", title, fill, marks, legend: [[HI, hiLab], [LO, loLab]], cap }; };
const split = s => s.split(/ → /).map(x => x.trim());

// L3 — the five most and five least populous states
const POP = rows("L3", "Most and least populous states");
place("L3", "Most and least populous states", ends("The most and least populous states (2011)", POP.map(r => r[1].replace(/ \(\d.*\)$/, "")), POP.map(r => r[2]),
  "Uttar Pradesh alone has about one Indian in six; the five smallest are all in the north-east or Goa. (Andhra Pradesh was still undivided in 2011.)", "5 most populous", "5 least populous"));

// L4 — growth each decade since 1901
const DG = rows("L4", "Decadal growth since 1901").map(r => [r[0], num(r[1]), r[2]]);
const gy = v => 200 - v * 6;
const DGF = `<svg class="dg" viewBox="0 0 680 270" role="img" aria-label="India's decadal population growth since 1901">
  ${[0, 10, 20].map(v => `<line x1="50" y1="${gy(v)}" x2="670" y2="${gy(v)}" class="grid"/>` + T(44, gy(v) + 4, v + "%", "var(--ink2)", "end", 10)).join("")}
  ${DG.map(([d, v, note], i) => { const x = 58 + i * 56, top = Math.min(gy(v), gy(0)), h = Math.abs(gy(v) - gy(0)), c = v < 0 ? LO : /Highest/.test(note) ? "#7a4fb0" : /Lowest/.test(note) ? "#2f8f4e" : HI;
    return `<rect x="${x}" y="${f1(top)}" width="40" height="${f1(Math.max(h, 2))}" rx="4" fill="${c}" class="anim-in" style="animation-delay:${i * 60}ms"/>` +
      T(x + 20, f1(v < 0 ? gy(0) + 16 : gy(v) - 6), (v > 0 ? "" : "") + v, c, "middle", 10.5) + `<text x="${x + 20}" y="232" text-anchor="middle" font-size="9" class="mut">${d}</text>`; }).join("")}
  ${T(60, 256, "Only fall: 1911–21 (the 'Great Divide', 1921). Highest: 1961–71 (24.80%). Lowest since independence: 2001–11 (17.70%).", "var(--ink2)", "start", 11)}</svg>`;
place("L4", "Decadal growth since 1901", KIT.fig("A century of growth, decade by decade", DGF, "Growth was slow and once negative before 1921 (famine and the 1918 flu), soared after independence as death rates fell, peaked in 1961–71 and has slowed every decade since.", 560));

// L5 — the densest and emptiest states
const DE = rows("L5", "Extremes").find(r => r[0] === "State");
place("L5", "Extremes", ends("Where India is most and least crowded (2011)", split(DE[1]), split(DE[2]), "People per km²: Bihar packs in about 1,106, Arunachal only 17. India as a whole: 382 (2011), up from 117 in 1951.", "most per km²", "fewest per km²"));

// L6 — sex ratio at both ends, and the national line since 1901
const SR = rows("L6", "States and UTs").find(r => r[0] === "State");
place("L6", "States and UTs", ends("Sex ratio: the best and the worst states (2011)", split(SR[1]), split(SR[2]), "Females per 1,000 males. Kerala (1,084) is the only big state with more women than men; Haryana (879) is the lowest.", "highest", "lowest"));
const NS = rows("L6", "National").map(r => [parseInt(r[0], 10) || parseInt((r[1].match(/in (\d{4})/) || [])[1], 10), num(r[1])]).filter(r => r[0] && r[1] > 800).sort((a, b) => a[0] - b[0]);
const sx = y => 60 + (y - 1900) / 115 * 580, sy = v => 220 - (v - 900) * 2.6;
const NSF = `<svg class="dg" viewBox="0 0 680 260" role="img" aria-label="India's sex ratio, 1901 to 2011">
  ${[920, 940, 960, 980].map(v => `<line x1="55" y1="${f1(sy(v))}" x2="660" y2="${f1(sy(v))}" class="grid"/>` + T(50, f1(sy(v)) + 4, v, "var(--ink2)", "end", 10)).join("")}
  <polyline points="${NS.map(([y, v]) => f1(sx(y)) + "," + f1(sy(v))).join(" ")}" fill="none" stroke="#7a4fb0" stroke-width="3"/>
  ${NS.map(([y, v]) => `<circle cx="${f1(sx(y))}" cy="${f1(sy(v))}" r="5" fill="#7a4fb0"/>` + T(f1(sx(y)), f1(sy(v)) - 10, v, "#7a4fb0", "middle", 11.5) + T(f1(sx(y)), 244, y, "var(--ink2)", "middle", 10.5)).join("")}</svg>`;
place("L6", "National", KIT.fig("Sex ratio over a century", NSF, "From 972 in 1901 the ratio fell to its lowest, 927, in 1991, and has risen since: 933 in 2001 and 943 in 2011 (final figure)."));

// L7 — literacy since 1951, with the male–female gap shaded
const LI = rows("L7", "Literacy since").map(r => [parseInt(r[0], 10), num(r[1]), num(r[2]), num(r[3])]);
const lx = y => 70 + (y - 1951) / 60 * 500, ly = v => 230 - v * 2.2;
const LIF = `<svg class="dg" viewBox="0 0 680 305" role="img" aria-label="Literacy rate since 1951 for all, men and women"><g transform="translate(0 35)">
  ${[0, 25, 50, 75, 100].map(v => `<line x1="65" y1="${ly(v)}" x2="650" y2="${ly(v)}" class="grid"/>` + T(60, ly(v) + 4, v + "%", "var(--ink2)", "end", 10)).join("")}
  <path d="M${LI.map(r => f1(lx(r[0])) + " " + f1(ly(r[2]))).join(" L")} L${LI.slice().reverse().map(r => f1(lx(r[0])) + " " + f1(ly(r[3]))).join(" L")} Z" fill="hsla(20,85%,55%,.15)"/>
  ${[[2, HI, "Male"], [1, "var(--ink)", "All"], [3, LO, "Female"]].map(([k, c, n]) => `<polyline points="${LI.map(r => f1(lx(r[0])) + "," + f1(ly(r[k]))).join(" ")}" fill="none" stroke="${c}" stroke-width="${k === 1 ? 3.5 : 2.5}"/>` +
    LI.map(r => `<circle cx="${f1(lx(r[0]))}" cy="${f1(ly(r[k]))}" r="3.5" fill="${c}"/>`).join("") + T(578, f1(ly(LI[LI.length - 1][k])) + 4, n + " " + LI[LI.length - 1][k], c, "start", 11)).join("")}
  ${LI.map(r => T(f1(lx(r[0])), 252, r[0], "var(--ink2)", "middle", 10.5)).join("")}
  ${T(f1(lx(1961)), f1(ly(36)), "gap", "#c0503a", "middle", 11)}</g></svg>`;
place("L7", "Literacy since", KIT.fig("Literacy since 1951", LIF, "From 18% in 1951 to 74% in 2011. Women gained fastest, from under 9% to 65%, so the gap between men and women (shaded) narrowed to 16.68 points.", 560));
const LE = rows("L7", "Extremes").find(r => r[0] === "State");
place("L7", "Extremes", ends("Literacy: the top and bottom states (2011)", split(LE[1]), split(LE[2]), "Kerala leads (93.91%); Bihar trails (63.82%). Among UTs, Lakshadweep is highest.", "highest literacy", "lowest literacy"));

// L8 — the age structure as one bar
const AG = rows("L8", "Age structure").slice(0, 3).map(r => [r[0], num(r[1])]), AGC = ["#2f8f4e", HI, "#c69214"];
let ax = 30; const AGF = `<svg class="dg" viewBox="0 0 660 120" role="img" aria-label="India's age structure in 2011">
  ${AG.map(([n, v], i) => { const w = v / 100 * 600, x = ax; ax += w; return `<rect x="${f1(x)}" y="20" width="${f1(w)}" height="46" fill="${AGC[i]}"/>` + T(f1(x + w / 2), 49, v + "%", "#fff", "middle", 14) + T(f1(x + w / 2), 88, n, "var(--ink)", "middle", 12); }).join("")}
  ${T(330, 112, "About 6 in 10 Indians were of working age (15–59) in 2011.", "var(--ink2)", "middle", 11)}</svg>`;
place("L8", "Age structure", KIT.fig("Young, working and old (2011)", AGF, "Children (0–14) were about 31%, working-age adults about 60% and the elderly (60+) 8.6% — the 'demographic dividend' years."));
const UE = rows("L8", "Urbanisation extremes").find(r => /^State/.test(r[0]));
place("L8", "Urbanisation extremes", ends("Most and least urban states (2011)", split(UE[1]), split(UE[2]), "Goa is the most urban state (62.2% of people in towns); Himachal Pradesh the least (10%). Overall 31.1% of Indians lived in urban areas.", "most urban", "least urban"));

// L9 — religion as a doughnut
const RE = rows("L9", "Religion").map(r => [r[0], num(r[1])]), RC = ["#e07b39", "#2f8f4e", "#2f6db5", "#c69214", "#c0503a", "#7a4fb0", "#888", "#bbb"];
let a0 = -Math.PI / 2; const arc = (a1, a2, r1, r2) => { const p = (a, r) => [f1(170 + r * Math.cos(a)), f1(140 + r * Math.sin(a))], big = a2 - a1 > Math.PI ? 1 : 0;
  return `M${p(a1, r2)} A${r2} ${r2} 0 ${big} 1 ${p(a2, r2)} L${p(a2, r1)} A${r1} ${r1} 0 ${big} 0 ${p(a1, r1)} Z`; };
const REF = `<svg class="dg" viewBox="0 0 660 290" role="img" aria-label="India's population by religion, Census 2011">
  ${RE.map(([n, v], i) => { const a1 = a0, a2 = a0 + v / 100 * 2 * Math.PI; a0 = a2; return `<path d="${arc(a1, a2, 62, 118)}" fill="${RC[i]}" stroke="var(--sheet)" stroke-width="1.5"/>`; }).join("")}
  ${T(170, 136, "121 crore", "var(--ink)", "middle", 15)}${T(170, 156, "people", "var(--ink2)", "middle", 11)}
  ${RE.map(([n, v], i) => `<rect x="350" y="${50 + i * 28}" width="16" height="16" rx="3" fill="${RC[i]}"/>` + T(374, 63 + i * 28, n, "var(--ink)", "start", 13) + T(560, 63 + i * 28, v.toFixed(2) + "%", "var(--ink)", "end", 13)).join("")}</svg>`;
place("L9", "Religion", KIT.fig("India by religion (Census 2011)", REF, "Hindus 79.8%, Muslims 14.23%, Christians 2.3%, Sikhs 1.72%, Buddhists 0.7%, Jains 0.37%. The religion data was released in 2015."));

// L9 — Scheduled Castes and Tribes side by side
const SS = rows("L9", "SC and ST");
place("L9", "SC and ST", { k: "cards", title: "Scheduled Castes and Scheduled Tribes at a glance", rows: [
  ["Scheduled Castes", SS[0][1], "Highest share: " + SS[1][1] + " · most people: " + SS[2][1], "👥"],
  ["Scheduled Tribes", SS[0][2], "Highest share: " + SS[1][2] + " · most people: " + SS[2][2] + " · largest tribe Bhil", "🏞️"]] });

VISUAL = { mode: true, VIS: { key: "census_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

/* Economy — the goods matrix, demand and supply with equilibrium, elasticity shapes, cost curves, the circular flow, the
   national-income ladder, an inflation gauge, the policy-rate corridor, tax shapes, Five Year Plans in time, sector shares,
   the rupee's sources and uses, currency notes and where money is printed, and the institutions' cities.
   (drawn by study-visual.js and study-world.js). place(), rows(), fail and KIT come from tools/workbook/apply-hand.js. */
const num = s => parseFloat(String(s).replace(/[^\d.]/g, "")) || 0;
const axes = (x0, y0, w, h, xl, yl) => `<path d="M${x0} ${y0 - h} V${y0} H${x0 + w}" fill="none" stroke="var(--ink)" stroke-width="1.6"/>` +
  `<text x="${x0 + w}" y="${y0 + 16}" text-anchor="end" font-size="11" class="mut">${xl}</text><text x="${x0 - 6}" y="${y0 - h + 4}" text-anchor="end" font-size="11" class="mut">${yl}</text>`;
const curve = (d, c, w, dash) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w || 3}" stroke-linecap="round"${dash ? ' stroke-dasharray="5 4"' : ""}/>`;
const T = (x, y, t, c, a, s) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;

// L1 — four kinds of goods as a 2 × 2 grid; the economists
const G = rows("L1", "Four kinds");
const cell = (r, x, y, c) => `<rect x="${x}" y="${y}" width="230" height="86" rx="10" fill="${c}" opacity=".18" stroke="${c}"/>${T(x + 115, y + 34, r[0] + " goods", c, "middle", 15)}<text x="${x + 115}" y="${y + 58}" text-anchor="middle" font-size="11" class="mut">${r[3]}</text>`;
const GM = `<svg class="dg" viewBox="0 0 640 250" role="img" aria-label="Goods by whether they are rival and excludable">
  ${T(285, 22, "Rival", "var(--ink2)", "middle", 12)}${T(515, 22, "Non-rival", "var(--ink2)", "middle", 12)}
  ${T(160, 78, "Excludable", "var(--ink2)", "end", 12)}${T(160, 170, "Non-excludable", "var(--ink2)", "end", 12)}
  ${cell(G.find(r => r[0] === "Private"), 170, 34, "#2f6db5")}${cell(G.find(r => r[0] === "Club"), 400, 34, "#7d4fb5")}${cell(G.find(r => r[0] === "Common-pool"), 170, 128, "#2f8f4e")}${cell(G.find(r => r[0] === "Public"), 400, 128, "#c0503a")}
  <text x="20" y="240" font-size="10.5" class="mut">Rival: one person's use leaves less for others. Excludable: people who don't pay can be kept out.</text></svg>`;
place("L1", "Four kinds", KIT.fig("Four kinds of goods", GM, "Public goods (defence, street lights) are neither rival nor excludable, so markets under-supply them and the state steps in."),
  KIT.photos("Economists in pictures", [["Adam Smith", "Wealth of Nations, 1776"], ["Alfred Marshall", "Principles, 1890"], ["John Maynard Keynes", "General Theory, 1936"], ["Amartya Sen", "Nobel 1998 · welfare"], ["Abhijit Banerjee", "Nobel 2019 · poverty"]]));

// L2 — demand and supply; elasticity shapes
const DS = `<svg class="dg" viewBox="0 0 640 280" role="img" aria-label="Demand and supply curves meeting at equilibrium">
  ${axes(60, 240, 300, 210, "Quantity", "Price")}
  ${curve("M80 50 L330 220", "#2f6db5")}${curve("M80 220 L330 50", "#c0392b")}${T(334, 228, "D", "#2f6db5")}${T(334, 50, "S", "#c0392b")}
  <path d="M60 135 H205 V240" fill="none" stroke="var(--ink2)" stroke-dasharray="4 4"/>${T(52, 139, "P*", "var(--ink2)", "end")}${T(205, 256, "Q*", "var(--ink2)", "middle")}
  <circle cx="205" cy="135" r="7" fill="#c69214"><animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite"/></circle>${T(214, 128, "Equilibrium", "#a07000")}
  ${T(400, 60, "Law of demand", "#2f6db5", "start", 14)}<text x="400" y="80" font-size="12" class="mut">price ↑ → quantity demanded ↓</text>
  ${T(400, 120, "Law of supply", "#c0392b", "start", 14)}<text x="400" y="140" font-size="12" class="mut">price ↑ → quantity supplied ↑</text>
  ${T(400, 180, "Equilibrium", "#a07000", "start", 14)}<text x="400" y="200" font-size="12" class="mut">demand = supply; no shortage,</text><text x="400" y="216" font-size="12" class="mut">no surplus</text></svg>`;
place("L2", "The laws", KIT.fig("Demand meets supply", DS, "Above P* there is a surplus and the price falls; below it a shortage pushes the price up — the market settles at the equilibrium."));
const EL = rows("L2", "Elasticity at a glance");
const mini = (i, d, r) => { const x = 10 + i * 130; return `<g transform="translate(${x},0)">${axes(14, 130, 104, 104, "", "")}${curve(d, "#2f6db5", 2.6)}${T(66, 152, r[1].replace(/^Relatively /, "Rel. ").replace(/ — .*$/, ""), "var(--ink)", "middle", 11)}<text x="66" y="168" text-anchor="middle" font-size="10.5" class="mut">e ${r[0]}</text></g>`; };
const EG = `<svg class="dg" viewBox="0 0 660 180" role="img" aria-label="Shapes of demand curves by elasticity">
  ${mini(0, "M18 70 H112", EL[0])}${mini(1, "M20 50 L112 100", EL[1])}${mini(2, "M24 30 Q34 110 112 118", EL[2])}${mini(3, "M40 30 L80 126", EL[3])}${mini(4, "M66 30 V128", EL[4])}</svg>`;
place("L2", "Elasticity at a glance", KIT.fig("Elasticity by the shape of the curve", EG, "Perfectly elastic: horizontal. Unitary: a rectangular hyperbola (total spending stays the same). Perfectly inelastic: vertical."));

// L3 — cost curves; the four markets
const CC = `<svg class="dg" viewBox="0 0 640 280" role="img" aria-label="Short-run cost curves">
  ${axes(60, 240, 360, 210, "Output", "Cost")}
  ${curve("M80 50 Q120 200 400 228", "#7a7a7a", 2.4, true)}${T(404, 226, "AFC", "#7a7a7a")}
  ${curve("M80 120 Q230 230 400 110", "#2f8f4e")}${T(404, 108, "AVC", "#2f8f4e")}
  ${curve("M80 70 Q250 240 400 80", "#2f6db5")}${T(404, 78, "AC", "#2f6db5")}
  ${curve("M90 175 Q150 235 228 172.6 T330 40", "#c0392b")}${T(334, 38, "MC", "#c0392b")}
  <circle cx="228" cy="172.6" r="5" fill="#2f8f4e"/><circle cx="250" cy="157.6" r="5" fill="#2f6db5"/><text x="262" y="190" font-size="10.5" class="mut">MC cuts AVC, then AC, at their lowest points</text>
  ${T(450, 80, "AFC", "#7a7a7a", "start", 13)}<text x="450" y="98" font-size="11" class="mut">falls forever (a hyperbola)</text>${T(450, 130, "AVC, AC, MC", "#2f6db5", "start", 13)}<text x="450" y="148" font-size="11" class="mut">U-shaped — law of</text><text x="450" y="162" font-size="11" class="mut">variable proportions</text></svg>`;
place("L3", "Cost curves", KIT.fig("Short-run cost curves", CC, "Marginal cost cuts average variable cost and average cost at their lowest points. Average fixed cost keeps falling as output rises."));
place("L3", "Four markets", { k: "cards", title: "Four markets at a glance", rows: rows("L3", "Four markets").map((r, i) => [r[0], r[1] + (r[1] === "One" ? " seller · " : " sellers · ") + r[2].toLowerCase(), r[3].split("; ").slice(-1)[0], ["🥬", "🪥", "📶", "🚆"][i]]) });

// L4 — the circular flow and the income ladder
const CF = `<svg class="dg" viewBox="0 0 640 260" role="img" aria-label="Circular flow of income between households and firms">
  <rect x="40" y="95" width="150" height="70" rx="14" fill="#2f8f4e"/>${T(115, 136, "Households", "#fff", "middle", 15)}
  <rect x="450" y="95" width="150" height="70" rx="14" fill="#2f6db5"/>${T(525, 136, "Firms", "#fff", "middle", 15)}
  ${curve("M190 105 C300 20,340 20,450 105", "#c69214", 3)}<path d="M190 105 C300 20,340 20,450 105" fill="none" stroke="#fff" stroke-width="1.2" stroke-dasharray="2 8" style="animation:rvflow 1.2s linear infinite"/>
  ${T(320, 40, "factor services (land, labour, capital) →", "#a07000", "middle", 11.5)}
  ${curve("M450 155 C340 240,300 240,190 155", "#c69214", 3)}<path d="M450 155 C340 240,300 240,190 155" fill="none" stroke="#fff" stroke-width="1.2" stroke-dasharray="2 8" style="animation:rvflow 1.2s linear infinite"/>
  ${T(320, 236, "← goods and services", "#a07000", "middle", 11.5)}
  ${curve("M200 120 C300 80,340 80,440 120", "#2f8f4e", 2, true)}${T(320, 92, "← rent, wages, interest, profit", "#2f8f4e", "middle", 11)}
  ${curve("M440 140 C340 182,300 182,200 140", "#2f6db5", 2, true)}${T(320, 184, "spending on goods →", "#2f6db5", "middle", 11)}</svg>`;
place("L4", "Multiplier", KIT.fig("The circular flow of income", CF, "Real flows (gold) go one way, money flows (dashed) the other. Saving, taxes and imports leak out; investment, government spending and exports come back in."));
const LAD = [["GDP at market price", "everything produced inside India", "#2f6db5"], ["GNP", "GDP + net factor income from abroad", "#2f8f4e"], ["NNP", "GNP − depreciation", "#c69214"], ["NNP at factor cost = National Income", "NNP − indirect taxes + subsidies", "#c0503a"]];
const LD = `<svg class="dg" viewBox="0 0 640 230" role="img" aria-label="From GDP to national income">
  ${LAD.map(([t, s, c], i) => `<rect x="${20 + i * 40}" y="${20 + i * 50}" width="${600 - i * 80}" height="42" rx="8" fill="${c}" class="anim-in" style="animation-delay:${i * 120}ms"/>${T(320, 38 + i * 50, t, "#fff", "middle", 13.5)}<text x="320" y="${55 + i * 50}" text-anchor="middle" font-size="10.5" style="fill:#fff">${s}</text>`).join("")}</svg>`;
place("L4", "The ladder", KIT.fig("The national-income ladder", LD, "Each step adds or takes away one thing: + NFIA (domestic → national), − depreciation (gross → net), − net indirect taxes (market price → factor cost)."));

// L5 — the inflation gauge
const SP = [["Creeping", "≤ 3%", "#2e9d4c"], ["Walking", "3–10%", "#9acd32"], ["Running", "10–20%", "#f2c14e"], ["Galloping", "> 20%", "#f28c28"], ["Hyper", "> 50%/mo", "#c0392b"]];
const arc = (a0, a1, r0, r1) => { const p = (a, r) => [320 + r * Math.cos(Math.PI - a), 210 - r * Math.sin(Math.PI - a)].map(v => v.toFixed(1)).join(" ");
  return `M${p(a0, r1)} A${r1} ${r1} 0 0 1 ${p(a1, r1)} L${p(a1, r0)} A${r0} ${r0} 0 0 0 ${p(a0, r0)} Z`; };
const GA = `<svg class="dg" viewBox="0 0 640 250" role="img" aria-label="Inflation by speed, from creeping to hyperinflation">
  ${SP.map(([n, v, c], i) => { const a0 = i * Math.PI / 5, a1 = (i + 1) * Math.PI / 5, am = (a0 + a1) / 2; return `<path d="${arc(a0 + .01, a1 - .01, 110, 180)}" fill="${c}"/>` +
    `<text x="${(320 + 145 * Math.cos(Math.PI - am)).toFixed(1)}" y="${(210 - 145 * Math.sin(Math.PI - am) + 4).toFixed(1)}" text-anchor="middle" font-size="12" font-weight="800" style="fill:#fff">${n}</text>` +
    `<text x="${(320 + 200 * Math.cos(Math.PI - am)).toFixed(1)}" y="${(210 - 200 * Math.sin(Math.PI - am) + 4).toFixed(1)}" text-anchor="middle" font-size="11" class="mut">${v}</text>`; }).join("")}
  <g class="gnd" style="transform-origin:320px 210px"><path d="M320 210 L230 168" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/></g><circle cx="320" cy="210" r="10" fill="var(--ink)"/>
  <text x="320" y="240" text-anchor="middle" font-size="11" class="mut">RBI's target: CPI 4% ± 2</text>
  <style>@keyframes gneedle{from{transform:rotate(-10deg)}to{transform:rotate(40deg)}}.gnd{animation:gneedle 4s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.gnd{animation:none}}</style></svg>`;
place("L5", "By speed", KIT.fig("Inflation by speed", GA, "A little inflation is 'like salt in food'. Galloping and hyperinflation (Germany 1923, Zimbabwe 2008, Venezuela) wipe out savings.", 520));

// L6 — the notes and where money is made
place("L6", "Note motifs", KIT.photos("What is on the back of the notes", rows("L6", "Note motifs").map(r => [r[1], r[0]]), { wiki: r => ({ "Hampi stone chariot": "Vittala Temple", "Ellora caves": "Ellora Caves", "Sanchi Stupa": "Sanchi" })[r[0]] || r[0] }));
place("L6", "Where money", KIT.numbered("Where notes and coins are made", [["Nashik", "Note press — SPMCIL"], ["Dewas", "Note press — SPMCIL"], ["Mysuru", "Note press — BRBNMPL (RBI)"], ["Salboni", "Note press — BRBNMPL (RBI)"],
    ["Mumbai", "Mint"], ["Hyderabad", "Mint"], ["Kolkata", "Mint"], ["Noida", "Mint"], ["Hoshangabad", "Security paper mill"]],
  { Nashik: [73.79, 20.0], Dewas: [76.05, 22.97], Mysuru: [76.64, 12.3], Salboni: [87.3, 22.63], Mumbai: [72.88, 19.08], Hyderabad: [78.49, 17.39], Kolkata: [88.36, 22.57], Noida: [77.39, 28.54], Hoshangabad: [77.73, 22.75] },
  { cap: "Four note presses and four mints. The Government (Finance Ministry) issues coins and ₹1 notes; the RBI issues all other notes." }));

// L7 — the policy-rate corridor
const RT = Object.fromEntries(rows("L7", "Rates now").map(r => [r[0], r[1]]));
const sdfMsf = (RT["SDF / MSF"] || "5.00% / 5.50%").split("/").map(num), repo = num(RT["Repo"] || "5.25");
const COR = `<svg class="dg" viewBox="0 0 640 230" role="img" aria-label="The policy rate corridor">
  <rect x="120" y="40" width="400" height="140" rx="12" fill="var(--sunk)"/>
  ${[[sdfMsf[1], "MSF (ceiling)", "#c0392b", "banks borrow overnight in an emergency"], [repo, "Repo (policy rate)", "#2f6db5", "RBI lends to banks against G-secs"], [sdfMsf[0], "SDF (floor)", "#2f8f4e", "banks park surplus money with the RBI"]]
    .map(([v, n, c, t], i) => { const y = 60 + i * 50; return `<line x1="120" y1="${y}" x2="520" y2="${y}" stroke="${c}" stroke-width="4"/><rect x="20" y="${y - 14}" width="90" height="28" rx="8" fill="${c}"/>${T(65, y + 5, v.toFixed(2) + "%", "#fff", "middle", 13)}` +
      `${T(530, y + 4, n, c, "start", 12)}<text x="140" y="${y - 6}" font-size="10.5" class="mut">${t}</text>`; }).join("")}
  <text x="20" y="210" font-size="11" class="mut">CRR ${RT["CRR"] || ""} · SLR ${RT["SLR"] || ""} · target ${RT["Inflation target"] || ""}</text></svg>`;
place("L7", "Rates now", KIT.fig("The rate corridor", COR, "The overnight call rate moves inside the corridor: SDF is the floor, MSF the ceiling, with the repo rate in the middle. Raising the repo rate fights inflation; cutting it supports growth."));

// L11 — how tax rates behave
const TX = `<svg class="dg" viewBox="0 0 640 260" role="img" aria-label="Progressive, proportional and regressive taxes">
  ${axes(70, 220, 380, 190, "Income", "Tax rate")}${curve("M80 200 Q250 170 440 50", "#c0392b")}${T(444, 50, "Progressive", "#c0392b")}${curve("M80 140 H440", "#2f6db5")}${T(444, 144, "Proportional", "#2f6db5")}
  ${curve("M80 80 Q250 170 440 200", "#2f8f4e")}${T(444, 204, "Regressive", "#2f8f4e")}</svg>`;
place("L11", "Types by rate", KIT.fig("Three ways a tax can behave", TX, "Progressive: the rate rises with income (income tax). Proportional: the same rate for all. Regressive: weighs more on the poor (most indirect taxes)."));

// L12–L13 — the plans in time
const PL = rows("L12", "Plans 1").concat(rows("L13", "Plans 7")).map(r => { const [a, b] = r[1].split("–"); const f = +a, t = b.length === 2 ? +(a.slice(0, 2) + b) : +b;
  return [r[0], f, t, /Plan holiday|Rolling|Annual/.test(r[0]) ? "#a9a9a9" : ["#2f6db5", "#2f8f4e", "#c69214", "#c0503a", "#7d4fb5"][(parseInt(r[0], 10) || 0) % 5]]; });
place("L12", "Plans 1", KIT.fig("Twelve Five Year Plans, 1951–2017", KIT.gantt("Five Year Plans", PL, 1950, 2018, 10), "Grey: the breaks — the plan holiday (1966–69), the rolling plan (1978–80) and the annual plans (1990–92). NITI Aayog replaced the Planning Commission on 1 January 2015."));

// L14 — sector shares then and now
const SS = rows("L14", "Sector shares");
const SB = `<svg class="dg" viewBox="0 0 640 220" role="img" aria-label="Sector shares of GDP, 1950-51 and today">
  ${[["1950–51", 1], ["Now", 2]].map(([lab, k], j) => { let x = 120; const y = 40 + j * 80;
    return T(110, y + 26, lab, "var(--ink)", "end", 13) + SS.map((r, i) => { const w = num(r[k]) * 5; const out = `<rect x="${x}" y="${y}" width="${w}" height="40" fill="${["#2f8f4e", "#2f6db5", "#c69214"][i]}" class="anim-in" style="animation-delay:${(j * 3 + i) * 90}ms"/>` +
      T(x + w / 2, y + 25, `${r[0]} ${r[k].replace("~", "")}`, "#fff", "middle", 11.5); x += w; return out; }).join(""); }).join("")}
  <text x="120" y="210" font-size="11" class="mut">Services overtook agriculture as the largest sector; India skipped the usual industry-first stage.</text></svg>`;
place("L14", "Sector shares", KIT.fig("Who makes India's GDP", SB, "Farming's share fell from about three-fifths to about a sixth of GDP, yet it still employs about 45% of workers."));

// L16 — the balance of payments as a tree
const BP = `<svg class="dg" viewBox="0 0 660 230" role="img" aria-label="Balance of payments structure">
  <rect x="250" y="10" width="160" height="40" rx="10" fill="#7d4fb5"/>${T(330, 35, "Balance of payments", "#fff", "middle", 13)}
  <path d="M330 50 V70 H160 V86 M330 70 H500 V86" fill="none" stroke="var(--ink2)" stroke-width="1.6"/>
  <rect x="70" y="86" width="180" height="40" rx="10" fill="#2f6db5"/>${T(160, 111, "Current account", "#fff", "middle", 13)}
  <rect x="410" y="86" width="180" height="40" rx="10" fill="#2f8f4e"/>${T(500, 111, "Capital account", "#fff", "middle", 13)}
  <path d="M160 126 V144 H85 V160 M160 144 H235 V160 M500 126 V160" fill="none" stroke="var(--ink2)" stroke-width="1.6"/>
  <rect x="20" y="160" width="130" height="56" rx="8" class="bbg"/>${T(85, 182, "Visible", "var(--ink)", "middle", 12)}<text x="85" y="200" text-anchor="middle" font-size="10.5" class="mut">goods = trade balance</text>
  <rect x="170" y="160" width="130" height="56" rx="8" class="bbg"/>${T(235, 182, "Invisible", "var(--ink)", "middle", 12)}<text x="235" y="200" text-anchor="middle" font-size="10.5" class="mut">services, remittances</text>
  <rect x="410" y="160" width="180" height="56" rx="8" class="gbg"/>${T(500, 182, "FDI · FPI · loans", "var(--ink)", "middle", 12)}<text x="500" y="200" text-anchor="middle" font-size="10.5" class="mut">ECBs, NRI deposits</text></svg>`;
place("L16", "BoP structure", KIT.fig("The balance of payments", BP, "India usually runs a trade deficit (more goods imported than exported) that services and remittances partly cover; capital inflows finance the rest."));

// L19 — where the institutions sit
const IN = { "IMF & World Bank (IBRD)": [-77.04, 38.9], "WTO": [6.14, 46.2], "ADB": [121.0, 14.6], "NDB (BRICS)": [121.47, 31.23], "AIIB": [116.4, 39.9], "BIS": [7.59, 47.56] };
const IR = rows("L19", "Institutions").filter(r => IN[r[0]]);
place("L19", "Institutions", { k: "worldfig", title: "Where the money institutions sit", minw: 640, pins: IR.map((r, i) => [String(i + 1), IN[r[0]][0], IN[r[0]][1], r[0], "n"]),
  legend: IR.map((r, i) => [`${i + 1} ${r[0]}`, r[1] + (r[2] ? " — " + r[2] : "")]), cap: "The Bretton Woods twins (IMF and World Bank) sit across the street from each other in Washington DC." });

// L20 — the rupee's sources and uses
const RU = rows("L20", "Rupee comes from");
const half = (k, title, c) => `<div><h4 style="margin:0 0 8px">${title}</h4>${RU.map(r => { const v = num(String(r[k + 1]).split("/")[0]); return `<div style="display:flex;align-items:center;gap:8px;margin:5px 0;font-size:13px">` +
  `<span style="flex:0 0 44%">${r[k]}</span><span style="flex:1;background:var(--sunk);border-radius:6px;height:16px;overflow:hidden"><i style="display:block;height:100%;width:${v * 3.6}%;background:${c}"></i></span><b style="width:52px;text-align:right">${r[k + 1]}p</b></div>`; }).join("")}</div>`;
place("L20", "Rupee comes from", { k: "info", title: "Where each rupee comes from and goes", html: `<div class="fam" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))">${half(0, "Comes from", "#2f8f4e")}${half(2, "Goes to", "#c0503a")}</div>`,
  cap: "Budget 2026-27 (BE), in paise per rupee. Borrowing is the biggest single source; the states' share of taxes and interest payments are the biggest uses." });

VISUAL = { mode: "world", VIS: { key: "economics_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

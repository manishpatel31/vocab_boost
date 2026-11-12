/* Economy — the goods matrix, demand and supply with equilibrium, elasticity shapes, cost curves, the circular flow, the
   national-income ladder, an inflation gauge, the policy-rate corridor, tax shapes, Five Year Plans in time, sector shares,
   the rupee's sources and uses, currency notes and where money is printed, and the institutions' cities.
   (drawn by study-visual.js and study-world.js). place(), rows(), fail and KIT come from tools/workbook/apply-hand.js. */
const num = s => parseFloat(String(s).replace(/[^\d.]/g, "")) || 0;
const axes = (x0, y0, w, h, xl, yl) => `<path d="M${x0} ${y0 - h} V${y0} H${x0 + w}" fill="none" stroke="var(--ink)" stroke-width="1.6"/>` +
  `<text x="${x0 + w}" y="${y0 + 16}" text-anchor="end" font-size="11" class="mut">${xl}</text><text x="${x0 - 6}" y="${y0 - h + 4}" text-anchor="end" font-size="11" class="mut">${yl}</text>`;
const curve = (d, c, w, dash) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w || 3}" stroke-linecap="round"${dash ? ' stroke-dasharray="5 4"' : ""}/>`;
const T = (x, y, t, c, a, s) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;

const mut = (x, y, t, a, sz) => `<text x="${x}" y="${y}" font-size="${sz || 11.5}" text-anchor="${a || "start"}" class="mut">${t}</text>`;
const dot = (x, y, c, r) => `<circle cx="${x}" cy="${y}" r="${r || 5}" fill="${c}"/>`;
const dash = d => `<path d="${d}" fill="none" stroke="var(--ink2)" stroke-dasharray="4 4"/>`;
const box = (x, y, w, h, c, t, sub, fs) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${c}"/>${T(x + w / 2, y + (sub ? h / 2 - 2 : h / 2 + 5), t, "#fff", "middle", fs || 13)}${sub ? `<text x="${x + w / 2}" y="${y + h / 2 + 14}" font-size="10.5" text-anchor="middle" style="fill:#fff;opacity:.92">${sub}</text>` : ""}`;
const arr = (d, c) => `<path d="${d}" fill="none" stroke="${c || "var(--ink2)"}" stroke-width="2" marker-end="url(#ecoA)"/>`;
const ARW = `<defs><marker id="ecoA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="context-stroke"/></marker></defs>`;
const BLU = "#2f6db5", RED = "#c0392b", GRN = "#2f8f4e", GLD = "#a07000", PUR = "#7d4fb5", GRY = "#7a7a7a";
/* a diagram with states: buttons choose which <g data-s="n"> groups show (study-visual.js .dgsw-b); states = [[label, caption], …] */
const sw = (title, states, svg, cap, w) => ({ k: "info", title, html: `<div data-dgsw><div class="dgsw-b" role="group" aria-label="Choose what happens">${states.map((x, i) =>
  `<button type="button" data-dgst="${i}" data-cap="${x[1].replace(/"/g, "&quot;")}" aria-pressed="${i === 0}">${x[0]}</button>`).join("")}</div><figure class="fig wide" style="--minw:${w || 560}px;margin:0">${svg}</figure><p class="dgsw-c" aria-live="polite">${states[0][1]}</p></div>`, cap });

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

// L1 — the production possibility curve, with growth
const PPC = `<svg class="dg" viewBox="0 0 640 280" role="img" aria-label="Production possibility curve">
  ${axes(60, 240, 300, 210, "Good X", "Good Y")}
  ${curve("M60 70 Q250 80 300 240", BLU)}
  ${dot(215, 118, GRN, 6)}${T(224, 112, "A · efficient", GRN)}${dot(150, 180, RED, 6)}${T(84, 200, "B · idle resources", RED)}${dot(300, 90, GRY, 6)}${T(266, 76, "C · out of reach", GRY)}
  <g data-s="1"><g class="sl" style="--dx:-34px;--dy:28px">${curve("M60 40 Q290 54 344 240", GLD, 3, true)}</g>${T(330, 150, "growth", GLD)}</g>
  ${T(400, 56, "On the curve", GRN, "start", 14)}${mut(400, 74, "all resources fully and well used")}
  ${T(400, 108, "Inside it", RED, "start", 14)}${mut(400, 126, "unemployment or waste")}
  ${T(400, 160, "Outside it", GRY, "start", 14)}${mut(400, 178, "not possible with today's resources")}
  ${T(400, 212, "Bowed out (concave)", BLU, "start", 14)}${mut(400, 230, "opportunity cost keeps rising")}</svg>`;
place("L1", "Micro vs", sw("The production possibility curve (PPC)", [["Today", "The curve shows every mix of two goods an economy can make with all its resources. More of one means less of the other: that is opportunity cost."],
  ["Economic growth", "More resources or better technology push the whole curve outward, so point C comes within reach."]], PPC, "Also called the production possibility frontier or transformation curve."));

// L2 — demand and supply; elasticity shapes
const DS = `<svg class="dg" viewBox="0 0 640 280" role="img" aria-label="Demand and supply curves meeting at equilibrium">
  ${axes(60, 240, 300, 210, "Quantity", "Price")}
  ${curve("M80 50 L330 220", "#2f6db5")}${curve("M80 220 L330 50", "#c0392b")}${T(334, 228, "D", "#2f6db5")}${T(334, 50, "S", "#c0392b")}
  <path d="M60 135 H205 V240" fill="none" stroke="var(--ink2)" stroke-dasharray="4 4"/>${T(52, 139, "P*", "var(--ink2)", "end")}${T(205, 256, "Q*", "var(--ink2)", "middle")}
  <circle cx="205" cy="135" r="7" fill="#c69214"><animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite"/></circle>${T(214, 128, "Equilibrium", "#a07000")}
  ${T(400, 60, "Law of demand", "#2f6db5", "start", 14)}<text x="400" y="80" font-size="12" class="mut">price ↑ → quantity demanded ↓</text>
  ${T(400, 120, "Law of supply", "#c0392b", "start", 14)}<text x="400" y="140" font-size="12" class="mut">price ↑ → quantity supplied ↑</text>
  ${T(400, 180, "Equilibrium", "#a07000", "start", 14)}<text x="400" y="200" font-size="12" class="mut">demand = supply; no shortage,</text><text x="400" y="216" font-size="12" class="mut">no surplus</text></svg>`;
const eq = (x, y, s) => `<g data-s="${s}">${dash(`M60 ${y} H${x} V240`)}${dot(x, y, "#c69214", 7)}${T(52, y + 4, s === "0" ? "P" : "P₁", "var(--ink2)", "end")}${T(x, 256, s === "0" ? "Q" : "Q₁", "var(--ink2)", "middle")}</g>`;
const SH = `<svg class="dg" viewBox="0 0 640 280" role="img" aria-label="Shifts of the demand and supply curves">
  ${axes(60, 240, 300, 210, "Quantity", "Price")}
  ${curve("M80 60 L300 220", BLU)}${T(304, 228, "D", BLU)}${curve("M80 220 L300 60", RED)}${T(304, 60, "S", RED)}
  <g data-s="0" class="on">${dash("M60 140 H190 V240")}${dot(190, 140, "#c69214", 7)}${T(52, 144, "P", "var(--ink2)", "end")}${T(190, 256, "Q", "var(--ink2)", "middle")}</g>
  <g data-s="1"><g class="sl" style="--dx:-50px">${curve("M130 60 L350 220", BLU, 3, true)}${T(352, 214, "D₁", BLU)}</g></g>${eq(215, 122, "1")}
  <g data-s="2"><g class="sl" style="--dx:50px">${curve("M62 83.3 L250 220", BLU, 3, true)}${T(252, 214, "D₁", BLU)}</g></g>${eq(165, 158, "2")}
  <g data-s="3"><g class="sl" style="--dx:-50px">${curve("M130 220 L350 60", RED, 3, true)}${T(352, 66, "S₁", RED)}</g></g>${eq(215, 158, "3")}
  <g data-s="4"><g class="sl" style="--dx:50px">${curve("M62 196.7 L250 60", RED, 3, true)}${T(252, 66, "S₁", RED)}</g></g>${eq(165, 122, "4")}
  ${T(400, 52, "Demand shifts when", BLU, "start", 14)}${mut(400, 70, "income, tastes, population or the")}${mut(400, 86, "prices of related goods change")}
  ${T(400, 122, "Supply shifts when", RED, "start", 14)}${mut(400, 140, "input costs, technology, taxes,")}${mut(400, 156, "subsidies or the weather change")}
  ${T(400, 192, "Own price changes?", GLD, "start", 14)}${mut(400, 210, "No shift: only a movement along")}${mut(400, 226, "the same curve")}</svg>`;
place("L2", "The laws", KIT.fig("Demand meets supply", DS, "Above P* there is a surplus and the price falls; below it a shortage pushes the price up — the market settles at the equilibrium."),
  sw("When a curve shifts (tap to see)", [["Start", "Demand and supply meet at price P and quantity Q."],
    ["Demand rises", "Demand shifts right (incomes rise, say): price rises and quantity rises."], ["Demand falls", "Demand shifts left: price falls and quantity falls."],
    ["Supply rises", "Supply shifts right (a good harvest, a subsidy): price falls and quantity rises."], ["Supply falls", "Supply shifts left (costlier inputs, a new tax): price rises and quantity falls."]],
    SH, "Demand shift: price and quantity move the same way. Supply shift: they move opposite ways."));
// L2 — utility curves; the indifference curve with a budget line
const UT = `<svg class="dg" viewBox="0 0 640 280" role="img" aria-label="Total and marginal utility; indifference curve and budget line">
  ${axes(40, 240, 250, 210, "Units", "Utility")}
  ${curve("M40 240 Q120 60 200 60 Q240 60 270 90", BLU)}${T(232, 50, "TU", BLU)}
  ${curve("M48 70 L216 258", RED)}${T(222, 262, "MU", RED)}
  ${dash("M200 60 V240")}${dot(200, 60, BLU)}${dot(200, 240, RED)}${mut(110, 274, "TU is highest where MU = 0", "middle", 10.5)}
  ${axes(360, 240, 250, 210, "Good X", "Good Y")}
  ${curve("M385 50 Q420 190 590 215", BLU)}${T(594, 214, "IC", BLU)}
  ${curve("M360 95 L560 240", GRN)}${T(520, 232, "budget line", GRN, "end", 11)}
  ${dot(442, 154, "#c69214", 7)}${T(452, 148, "E · best buy", GLD)}</svg>`;
place("L2", "Cross & income", KIT.fig("Utility curves, and the consumer's best buy", UT, "Left: each extra unit adds less satisfaction (diminishing marginal utility); total utility peaks when marginal utility is zero and falls when it turns negative. Right: an indifference curve slopes down and is convex to the origin; the consumer is in equilibrium where the budget line just touches it."));
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

const MK = (i, name, d, c, note, extra) => { const x = i * 148; return `<g transform="translate(${x},0)">${axes(22, 150, 116, 120, "", "")}${curve(d, c, 2.8)}${extra || ""}${T(82, 172, name, c, "middle", 12.5)}<text x="82" y="188" font-size="10.5" text-anchor="middle" class="mut">${note}</text></g>`; };
const MS = `<svg class="dg" viewBox="0 0 600 200" role="img" aria-label="The firm's demand curve in the four market structures">
  ${MK(0, "Perfect competition", "M24 80 H140", GRN, "horizontal: price taker")}${MK(1, "Monopolistic", "M28 60 L138 110", BLU, "gentle slope: brands")}
  ${MK(2, "Oligopoly", "M28 50 L90 84 L120 148", PUR, "kinked: rivals react")}${MK(3, "Monopoly", "M34 40 L130 140", RED, "steep: price maker", curve("M34 40 L84 148", RED, 1.8, true) + `<text x="44" y="120" font-size="10" class="mut">MR</text>`)}</svg>`;
place("L3", "Buyer-side", KIT.fig("The firm's demand curve in each market", MS, "The demand (average revenue) curve gets steeper as the firm's power over price grows: flat in perfect competition, steepest in monopoly, where marginal revenue (MR) lies below it."));

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

// L5 — demand-pull and cost-push; the Phillips curve
const ADAS = (x, title, c, shiftD, note) => `<g transform="translate(${x},0)">${axes(40, 200, 210, 170, "Output", "Prices")}
  ${curve("M60 60 L230 180", BLU, 2.6)}${T(232, 190, "AD", BLU, "start", 11)}${curve("M60 180 L230 60", RED, 2.6)}${T(232, 62, "AS", RED, "start", 11)}
  ${shiftD ? curve("M100 60 L250 166", BLU, 2.6, true) + T(238, 150, "AD₁", BLU, "start", 11) + dot(145, 120, GRY, 4) + dot(166, 106, "#c69214", 6) + arr("M150 116 L160 110", GLD)
    : curve("M42 164 L190 60", RED, 2.6, true) + T(176, 52, "AS₁", RED, "start", 11) + dot(145, 120, GRY, 4) + dot(124, 106, "#c69214", 6) + arr("M140 116 L130 110", GLD)}
  ${T(145, 226, title, c, "middle", 13.5)}<text x="145" y="244" font-size="11" text-anchor="middle" class="mut">${note}</text></g>`;
const INF = `<svg class="dg" viewBox="0 0 620 256" role="img" aria-label="Demand-pull and cost-push inflation">${ARW}
  ${ADAS(0, "Demand-pull", BLU, true, "prices ↑ and output ↑")}${ADAS(310, "Cost-push", RED, false, "prices ↑ but output ↓")}</svg>`;
place("L5", "By cause", KIT.fig("Two roads to inflation", INF, "Demand-pull: total demand (AD) shifts right, so prices and output both rise. Cost-push: costlier inputs shift supply (AS) left, so prices rise while output falls — the road to stagflation."));
const PH = `<svg class="dg" viewBox="0 0 640 280" role="img" aria-label="The Phillips curve">
  ${axes(60, 240, 300, 210, "Unemployment", "Inflation")}
  ${curve("M85 45 Q110 200 340 222", BLU)}${dot(104, 110, RED, 6)}${T(114, 106, "boom: jobs up, prices up", RED, "start", 11)}${dot(250, 212, GRN, 6)}${T(120, 230, "slump: prices calm, jobs lost", GRN, "start", 11)}
  ${dot(300, 70, PUR, 7)}${T(300, 56, "stagflation", PUR, "middle")}${mut(300, 92, "both high: off the curve", "middle", 10.5)}
  ${T(400, 60, "Phillips curve", BLU, "start", 14)}${mut(400, 78, "A.W. Phillips, 1958")}${mut(400, 94, "short-run trade-off:")}${mut(400, 110, "inflation ↑ → unemployment ↓")}
  ${T(400, 150, "Where it fails", PUR, "start", 14)}${mut(400, 168, "stagflation (the 1970s oil shocks):")}${mut(400, 184, "high inflation with high")}${mut(400, 200, "unemployment")}</svg>`;
place("L5", "Words SSC", KIT.fig("The Phillips curve", PH, "Lower unemployment comes with higher inflation in the short run, so the curve slopes down. Stagflation breaks the rule."));

// L7 — how a repo change travels to prices
const chain = (y, up) => { const c = up ? RED : GRN, a = up ? ["Repo ↑", "Banks' funds costlier", "Loan rates ↑", "Borrowing & spending ↓", "Demand ↓", "Inflation ↓"] : ["Repo ↓", "Banks' funds cheaper", "Loan rates ↓", "Borrowing & spending ↑", "Demand ↑", "Growth ↑"];
  return a.map((t, i) => { const col = i < 3 ? i : 5 - i, x = 8 + col * 212, yy = y + Math.floor(i / 3) * 62;   // a snake: the second row runs right to left
    return box(x, yy, 190, 44, i === 0 || i === 5 ? c : "#5b6470", t, "", 12.5) + (i < 2 ? arr(`M${x + 192} ${yy + 22} H${x + 208}`) : i === 2 ? arr(`M${x + 95} ${yy + 46} V${yy + 58}`) : i < 5 ? arr(`M${x - 2} ${yy + 22} H${x - 18}`) : ""); }).join(""); };
const TR = `<svg class="dg" viewBox="0 0 640 134" role="img" aria-label="Monetary policy transmission">${ARW}
  <g data-s="0" class="on">${chain(10, true)}</g><g data-s="1">${chain(10, false)}</g></svg>`;
place("L7", "Quantitative", sw("How a repo change reaches prices", [["RBI raises the repo rate", "Dear money (a hawkish, contractionary stance): used to fight inflation. Read the top row left to right, then the bottom row right to left."],
  ["RBI cuts the repo rate", "Cheap money (a dovish, expansionary stance): used to revive growth. Too much of it can bring inflation back."]], TR, "This chain is called monetary policy transmission. It works with a lag of a few quarters."));

// L9 — the budget as a tree
const BT = `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Structure of the Union Budget">
  ${box(245, 8, 150, 38, "#5b6470", "Union Budget", "Article 112")}
  <path d="M320 46 V60 M160 60 H480 M160 60 V72 M480 60 V72" fill="none" stroke="var(--ink2)" stroke-width="1.6"/>
  ${box(85, 72, 150, 36, BLU, "Receipts")}${box(405, 72, 150, 36, RED, "Expenditure")}
  <path d="M160 108 V120 M82 120 H238 M82 120 V132 M238 120 V132 M480 108 V120 M402 120 H558 M402 120 V132 M558 120 V132" fill="none" stroke="var(--ink2)" stroke-width="1.6"/>
  ${box(10, 132, 146, 34, BLU, "Revenue receipts", "", 12)}${box(166, 132, 146, 34, BLU, "Capital receipts", "", 12)}${box(330, 132, 146, 34, RED, "Revenue expenditure", "", 11.5)}${box(486, 132, 146, 34, RED, "Capital expenditure", "", 11.5)}
  ${[["Tax: direct + indirect", "Non-tax: interest,", "dividends, fees, fines"], ["Borrowings", "Disinvestment", "Recovery of loans"], ["Salaries, pensions", "Interest, subsidies", "Grants to states"], ["Roads, bridges, machinery", "Loans given", "Loan repayment"]].map((l, i) =>
    l.map((t, k) => mut(83 + i * 158 + (i > 1 ? 6 : 0), 188 + k * 17, t, "middle", 11)).join("")).join("")}
  <rect x="10" y="246" width="622" height="46" rx="10" class="card"/>${T(22, 266, "The test:", "var(--ink)", "start", 12)}${mut(84, 266, "does it create an asset or cut a liability? Yes → capital. No → revenue.", "start", 12)}
  ${mut(22, 283, "Capital receipts create a liability (borrowing) or reduce an asset (disinvestment).", "start", 11)}</svg>`;
place("L9", "The four boxes", KIT.fig("The budget as a tree", BT, "Every item in the budget falls in one of four boxes. Interest payments are revenue expenditure; repaying the loan itself is capital expenditure."));

// L10 — how the deficits fit inside each other; the Laffer curve
const DF = `<svg class="dg" viewBox="0 0 640 250" role="img" aria-label="How the deficits nest">
  ${T(12, 30, "Total expenditure", "var(--ink)", "start", 12)}<rect x="150" y="14" width="470" height="26" rx="6" fill="${RED}" opacity=".85"/>
  ${T(12, 70, "Paid for by", "var(--ink)", "start", 12)}<rect x="150" y="54" width="290" height="26" rx="6" fill="${GRN}"/>${T(295, 72, "revenue + non-debt capital receipts", "#fff", "middle", 11)}
  <rect x="440" y="54" width="180" height="26" rx="6" fill="#c69214"/>${T(530, 72, "FISCAL DEFICIT", "#fff", "middle", 11.5)}
  ${dash("M440 82 V100 M620 82 V100")}${mut(530, 96, "= what the government must borrow", "middle", 10.5)}
  ${T(12, 134, "Split 1", "var(--ink)", "start", 12)}<rect x="440" y="118" width="80" height="26" rx="6" fill="${PUR}"/>${T(480, 136, "interest", "#fff", "middle", 11)}<rect x="520" y="118" width="100" height="26" rx="6" fill="${BLU}"/>${T(570, 136, "PRIMARY", "#fff", "middle", 11)}
  ${mut(150, 136, "Primary deficit = fiscal deficit − interest payments", "start", 11.5)}
  ${T(12, 182, "Split 2", "var(--ink)", "start", 12)}<rect x="440" y="166" width="110" height="26" rx="6" fill="${RED}"/>${T(495, 184, "REVENUE", "#fff", "middle", 11)}<rect x="550" y="166" width="70" height="26" rx="6" fill="${GRY}"/>${T(585, 184, "capital", "#fff", "middle", 11)}
  ${mut(150, 184, "Revenue deficit = revenue exp − revenue receipts", "start", 11.5)}
  ${mut(12, 226, "Effective revenue deficit = revenue deficit − grants for creating capital assets.  Sizes are for illustration.", "start", 11)}</svg>`;
place("L10", "Deficit formulas", KIT.fig("How the deficits fit inside each other", DF, "Fiscal deficit is the total borrowing need. Take out interest and you get the primary deficit; the part that funds day-to-day spending is the revenue deficit."));
const LF = `<svg class="dg" viewBox="0 0 640 260" role="img" aria-label="The Laffer curve">
  ${axes(60, 220, 300, 180, "", "Revenue")}${mut(60, 236, "0%", "middle")}${mut(350, 236, "100%", "middle")}${mut(205, 252, "Tax rate →", "middle")}
  ${curve("M60 220 Q205 -90 350 220", BLU)}${dash("M205 65 V220")}${dot(205, 65, "#c69214", 7)}${T(205, 52, "peak revenue", GLD, "middle")}${mut(205, 236, "best rate t*", "middle")}
  ${T(110, 200, "raise the rate →", GRN, "start", 11)}${T(110, 214, "revenue rises", GRN, "start", 11)}${T(262, 200, "raise it more →", RED, "start", 11)}${T(262, 214, "revenue falls", RED, "start", 11)}
  ${T(400, 60, "Laffer curve", BLU, "start", 14)}${mut(400, 78, "Arthur Laffer; bell-shaped")}
  ${T(400, 114, "At 0% and at 100%", "var(--ink)", "start", 13)}${mut(400, 132, "revenue is zero")}
  ${T(400, 168, "Beyond t*", RED, "start", 13)}${mut(400, 186, "higher rates kill the incentive to")}${mut(400, 202, "work and invest, and feed evasion")}</svg>`;
place("L10", "Gaps", KIT.fig("The Laffer curve", LF, "Up to a point a higher tax rate collects more; beyond it, it collects less. This is the argument for moderate tax rates."));

// L11 — direct and indirect taxes; how GST splits
const TX = `<svg class="dg" viewBox="0 0 640 290" role="img" aria-label="Direct and indirect taxes, and the parts of GST">
  ${box(30, 10, 270, 38, BLU, "Direct taxes", "burden can't be shifted to others")}${box(340, 10, 270, 38, RED, "Indirect taxes", "burden passed on to the buyer")}
  ${["Income tax", "Corporation tax", "Capital gains tax"].map((t, i) => `<rect x="${30 + i * 92}" y="58" width="86" height="30" rx="8" class="bbg"/>${T(73 + i * 92, 77, t, "var(--ink)", "middle", 10.5)}`).join("")}
  ${["GST", "Customs duty", "Excise duty"].map((t, i) => `<rect x="${340 + i * 92}" y="58" width="86" height="30" rx="8" class="abg"/>${T(383 + i * 92, 77, t, "var(--ink)", "middle", 10.5)}`).join("")}
  ${mut(165, 106, "progressive: fair, but easier to evade", "middle")}${mut(475, 106, "regressive: hits the poor harder", "middle")}
  ${T(20, 142, "GST on a sale", "var(--ink)", "start", 14)}
  ${box(20, 154, 190, 36, "#5b6470", "Within one state")}${arr("M212 172 H236")}${box(240, 154, 120, 36, GRN, "CGST", "to the Centre")}${T(372, 177, "+", "var(--ink)", "middle", 18)}${box(384, 154, 120, 36, PUR, "SGST", "to the state")}
  ${box(20, 200, 190, 36, "#5b6470", "Between states / imports")}${arr("M212 218 H236")}${box(240, 200, 264, 36, "#c69214", "IGST", "collected by the Centre, then shared")}
  ${mut(20, 262, "GST 2.0 (22 Sep 2025): main slabs 5% and 18%, a special 40% on sin and luxury goods.", "start", 11.5)}${mut(20, 279, "Outside GST: alcohol for drinking, electricity; petrol, diesel, crude, ATF, natural gas for now.", "start", 11.5)}</svg>`;
place("L11", "GST", KIT.fig("Direct vs indirect taxes, and how GST splits", TX, "GST is a destination-based tax: the state where the good is finally used gets the revenue."));

// L13 — Planning Commission and NITI Aayog side by side
const PN = [["Born", "15 March 1950, cabinet resolution", "1 January 2015, cabinet resolution"], ["Status", "Non-constitutional, non-statutory", "Non-constitutional, non-statutory"], ["Chair", "Prime Minister", "Prime Minister"],
  ["Run by", "Deputy Chairman", "Vice-Chairperson and a CEO"], ["Approach", "Top-down, one plan for all", "Bottom-up, cooperative federalism"], ["Money", "Decided funds for states", "Think tank: no power to give funds"], ["States' voice", "National Development Council", "Governing Council (all CMs)"]];
const PNS = `<svg class="dg" viewBox="0 0 640 ${78 + PN.length * 30}" role="img" aria-label="Planning Commission compared with NITI Aayog">
  ${box(150, 8, 235, 40, RED, "Planning Commission", "1950 – 2014")}${box(395, 8, 235, 40, GRN, "NITI Aayog", "2015 – now")}
  ${PN.map((r, i) => `<rect x="10" y="${58 + i * 30}" width="620" height="26" rx="6" class="${i % 2 ? "card" : "s5"}"/>${T(20, 76 + i * 30, r[0], "var(--ink)", "start", 11.5)}${mut(267, 76 + i * 30, r[1], "middle", 11)}${mut(512, 76 + i * 30, r[2], "middle", 11)}`).join("")}</svg>`;
place("L13", "Planning bodies", KIT.fig("Planning Commission vs NITI Aayog", PNS, "Both were set up by a cabinet resolution, so neither is a constitutional or a statutory body. NITI stands for National Institution for Transforming India."));

// L15 — from the 1991 crisis to L, P and G
const tbox = (x, y, w, h, c, t, lines) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${c}"/>${T(x + w / 2, y + 22, t, "#fff", "middle", 13)}${lines.map((l, i) => `<text x="${x + w / 2}" y="${y + 42 + i * 14}" font-size="10.5" text-anchor="middle" style="fill:#fff;opacity:.95">${l}</text>`).join("")}`;
const CR = `<svg class="dg" viewBox="0 0 640 290" role="img" aria-label="The 1991 crisis and the LPG reforms">${ARW}
  ${tbox(10, 10, 190, 78, "#5b6470", "Causes", ["high fiscal deficit (~8%)", "Gulf War oil prices", "falling remittances"])}${arr("M202 49 H222")}
  ${tbox(226, 10, 190, 78, RED, "BoP crisis, 1990–91", ["forex about $1 bn:", "barely two weeks", "of imports"])}${arr("M418 49 H438")}
  ${tbox(442, 10, 190, 78, "#c69214", "Emergency steps", ["~67 t of gold pledged", "rupee devalued 1 & 3 July", "IMF loan"])}
  ${arr("M537 90 V112 H322 V124")}${box(170, 126, 300, 40, BLU, "New Industrial Policy · 24 July 1991", "PM P.V. Narasimha Rao · FM Manmohan Singh")}
  <path d="M320 166 V180 M110 180 H530 M110 180 V192 M320 180 V192 M530 180 V192" fill="none" stroke="var(--ink2)" stroke-width="1.6"/>
  ${[["L · Liberalisation", GRN, "licence raj ended,", "tariffs cut, de-reservation"], ["P · Privatisation", PUR, "disinvestment,", "state as facilitator"], ["G · Globalisation", RED, "FDI and MNCs in,", "rupee convertibility"]].map((r, i) =>
    box(15 + i * 210, 192, 190, 34, r[1], r[0]) + mut(110 + i * 210, 244, r[2], "middle", 11) + mut(110 + i * 210, 259, r[3], "middle", 11)).join("")}
  ${mut(320, 282, "Short term: stabilisation (BoP, inflation).  Long term: structural reforms.", "middle", 11)}</svg>`;
place("L15", "The crisis", KIT.fig("From crisis to reform, 1991", CR, "A foreign-exchange crisis forced the change: emergency steps first, then the New Industrial Policy opened the economy on three fronts."));

// L16 — the rupee's road to convertibility; the J-curve
const RC = [["1 & 3 July 1991", "Devaluation", "~18–19%"], ["March 1992", "LERMS", "60% market : 40% official"], ["March 1993", "Market-determined", "unified rate"], ["August 1994", "Current account", "fully convertible"], ["1997, 2006", "Tarapore Committees", "capital account: partial"]];
const RCS = `<svg class="dg" viewBox="0 0 640 130" role="img" aria-label="The rupee's road to convertibility">
  <path d="M40 46 H600" stroke="var(--ink2)" stroke-width="2"/>${RC.map((r, i) => { const x = 64 + i * 128; return dot(x, 46, i === 3 ? GRN : BLU, 7) + T(x, 26, r[0], "var(--ink2)", "middle", 11) + T(x, 74, r[1], i === 3 ? GRN : BLU, "middle", 12) + mut(x, 91, r[2], "middle", 10.5); }).join("")}
  ${mut(320, 120, "Fixed rate → dual rate → floating rate.  Devaluation is by the government; depreciation is by the market.", "middle", 11)}</svg>`;
const JC = `<svg class="dg" viewBox="0 0 640 250" role="img" aria-label="The J-curve">
  <path d="M60 20 V230" stroke="var(--ink)" stroke-width="1.6"/><path d="M60 110 H360" stroke="var(--ink)" stroke-width="1.6"/>${mut(360, 126, "Time →", "end")}${mut(66, 28, "Trade balance")}${mut(66, 104, "surplus ↑", "start", 10)}${mut(66, 124, "deficit ↓", "start", 10)}
  ${curve("M70 140 Q110 150 130 190 Q160 240 220 150 Q270 70 345 40", BLU)}${dash("M130 110 V190")}${T(130, 100, "devaluation", RED, "middle", 11)}
  ${T(150, 226, "first it gets worse", RED, "start", 11)}${T(280, 60, "then it improves", GRN, "start", 11)}
  ${T(400, 50, "Why the dip?", RED, "start", 14)}${mut(400, 68, "old import contracts now cost more")}${mut(400, 84, "rupees; volumes take time to change")}
  ${T(400, 122, "Why the rise?", GRN, "start", 14)}${mut(400, 140, "exports become cheaper abroad and")}${mut(400, 156, "imports dearer at home, so exports")}${mut(400, 172, "grow and imports shrink")}
  ${T(400, 208, "Risk", GLD, "start", 14)}${mut(400, 226, "imported inflation (oil)")}</svg>`;
place("L16", "Forex", KIT.fig("The rupee's road to convertibility", RCS, "India moved from a fixed rate to a market-determined rate in three years. The current account is fully convertible; the capital account only partly."),
  KIT.fig("After a devaluation: the J-curve", JC, "A weaker currency first widens the trade deficit and only later narrows it, so the trade balance traces the letter J."));

// L18 — the Lorenz curve and the Gini coefficient
const LZ = `<svg class="dg" viewBox="0 0 640 280" role="img" aria-label="The Lorenz curve">
  ${axes(60, 240, 210, 210, "% of people (poorest first)", "")}${mut(66, 40, "% of income")}<path d="M60 240 H270 V30" fill="none" stroke="var(--rule)"/>
  <path d="M60 240 L270 30 Q230 232 60 240 Z" fill="#c69214" opacity=".28"/><path d="M60 240 Q230 232 270 30 V240 Z" fill="${BLU}" opacity=".14"/>
  ${curve("M60 240 L270 30", GRN, 2.6)}${curve("M60 240 Q230 232 270 30", BLU)}
  ${T(196, 150, "A", GLD, "middle", 16)}${T(236, 216, "B", BLU, "middle", 16)}${T(150, 122, "line of equality (45°)", GRN, "middle", 11)}${T(196, 236, "Lorenz curve", BLU, "middle", 11)}
  ${T(320, 50, "Lorenz curve", BLU, "start", 14)}${mut(320, 68, "Max O. Lorenz, 1905: the share of income held")}${mut(320, 84, "by the poorest x% of people")}
  ${T(320, 120, "The further it sags", RED, "start", 14)}${mut(320, 138, "below the 45° line, the more unequal")}
  ${T(320, 174, "Gini coefficient = A ÷ (A + B)", GLD, "start", 14)}${mut(320, 192, "Corrado Gini, 1912")}${mut(320, 208, "0 = perfect equality  ·  1 = perfect inequality")}</svg>`;
place("L18", "Inequality", KIT.fig("The Lorenz curve and the Gini coefficient", LZ, "If everyone earned the same, the curve would lie on the 45° line and the Gini would be 0. The bigger the gap (area A), the higher the Gini."));

// L20 — the Survey's headline numbers
const ES = rows("L20", "Economic Survey");
const es = k => (ES.find(r => r[0].startsWith(k)) || ["", ""])[1];
place("L20", "Economic Survey", { k: "cards", title: "Economic Survey 2025-26 in six numbers", rows: [
  ["7.4%", "Real GDP growth, FY26", "FY27 projected at 6.8–7.2%", "📈"], ["~1.7%", "CPI inflation, Apr–Dec 2025", "food and fuel prices fell", "🛒"], ["~$701 bn", "Forex reserves", "", "💵"],
  ["$387.6 bn", "Services exports", "a record; 4.3% of the world's", "💻"], ["$135 bn", "Remittances, FY25", "the world's largest", "🏠"], ["2.2%", "Banks' gross NPAs, Sep 2025", "net NPAs 0.5%", "🏦"]] });
if (!/7\.4%/.test(es("Real GDP")) || !/1\.7%/.test(es("Inflation")) || !/701/.test(es("Forex")) || !/387\.6/.test(es("Services")) || !/135/.test(es("Remittances")) || !/2\.2%/.test(es("Banks"))) fail("L20: the Survey numbers in the lesson no longer match the cards");

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

// ---- memory tricks for the lessons that had none ----
place("L18", "Rural jobs", { k: "trick", h: "<b>A – L – T – R</b>, the poverty committees in order: <b>A</b>lagh (1979, calories) → <b>L</b>akdawala (1993) → <b>T</b>endulkar (2009, the official method) → <b>R</b>angarajan (2014, not adopted). Calories are <b>24 – 21</b>: 2400 rural, 2100 urban (village work is harder). Gini: <b>0 = everyone equal, 1 = one person has it all</b>." });
place("L19", "Institutions", { k: "trick", h: "<b>Iceland tops three</b>: HDI, Global Peace, Gender Gap. <b>Singapore tops three</b>: Economic Freedom, Logistics, Competitiveness. The rest are one each: Finland happiness, Denmark least corrupt, Switzerland innovation, Norway press freedom.<br><b>B for B</b>: <b>B</b>IS in <b>B</b>asel, AII<b>B</b> in <b>B</b>eijing. ADB is in Manila, NDB in Shanghai, WTO in Geneva, and the Bretton Woods twins in Washington." });
place("L20", "Rupee comes from", { k: "trick", h: "<b>Goldilocks = not too hot, not too cold</b>: high growth (7.4%) with low inflation (~1.7%). The Survey always comes just before the Budget: <b>29 January → 1 February</b>. In the rupee chart, <b>borrowing is the biggest source</b>, and <b>states' share of taxes and interest payments are the biggest uses</b>." });

VISUAL = { mode: "world", VIS: { key: "economics_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

/* Statistics — histogram, frequency polygon and ogives; where mean, median and mode sit; a box plot; skewness and kurtosis;
   scatter diagrams by r; the two regression lines; a Venn diagram; the normal curve's 68–95–99.7 rule; rejection regions of
   Z tests with the two kinds of error; the chi-square curve; the four parts of a time series.
   (drawn by study-visual.js). place(), rows() and KIT come from tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const mut = (x, y, t, a, sz) => `<text x="${x}" y="${y}" font-size="${sz || 11.5}" text-anchor="${a || "start"}" class="mut">${t}</text>`;
const axes = (x0, y0, w, h, xl, yl) => `<path d="M${x0} ${y0 - h} V${y0} H${x0 + w}" fill="none" stroke="var(--ink)" stroke-width="1.6"/>` + (xl ? mut(x0 + w, y0 + 16, xl, "end", 11) : "") + (yl ? mut(x0 + 4, y0 - h + 4, yl, "start", 11) : "");
const curve = (d, c, w, dash) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w || 3}" stroke-linecap="round" stroke-linejoin="round"${dash ? ' stroke-dasharray="5 4"' : ""}/>`;
const dot = (x, y, c, r) => `<circle cx="${x}" cy="${y}" r="${r || 4}" fill="${c}"/>`;
const dash = d => `<path d="${d}" fill="none" stroke="var(--ink2)" stroke-dasharray="4 4"/>`;
const BLU = "#2f6db5", RED = "#c0392b", GRN = "#2f8f4e", GLD = "#a07000", PUR = "#7d4fb5", GRY = "#7a7a7a";
// a bell curve through (cx, top) with half-width w on the baseline y0; sk skews the peak
const bell = (cx, y0, w, h, sk) => { const p = cx + (sk || 0); return `M${cx - w} ${y0} C${cx - w * 0.45} ${y0},${p - w * 0.3} ${y0 - h},${p} ${y0 - h} C${p + w * 0.3} ${y0 - h},${cx + w * 0.45} ${y0},${cx + w} ${y0}`; };
// the standard normal density, drawn point by point: x in SDs → [px, py]
const nd = z => Math.exp(-z * z / 2);
const npath = (x0, y0, sx, sy, a, b, close) => { let d = ""; for (let z = a; z <= b + 1e-9; z += 0.1) d += (d ? "L" : "M") + (x0 + z * sx).toFixed(1) + " " + (y0 - nd(z) * sy).toFixed(1); return close ? d + `L${(x0 + b * sx).toFixed(1)} ${y0}L${(x0 + a * sx).toFixed(1)} ${y0}Z` : d; };

// L2 — histogram with its polygon; the two ogives
const HB = [30, 70, 120, 150, 100, 50], CF = [30, 100, 220, 370, 470, 520];
const HG = `<svg class="dg" viewBox="0 0 640 270" role="img" aria-label="Histogram with frequency polygon, and less-than and more-than ogives">
  ${axes(40, 220, 250, 190, "class intervals", "frequency")}
  ${HB.map((h, i) => `<rect x="${52 + i * 38}" y="${220 - h}" width="38" height="${h}" fill="${BLU}" opacity=".3" stroke="${BLU}"/>`).join("")}
  ${curve("M33 220 " + HB.map((h, i) => `L${71 + i * 38} ${220 - h}`).join(" ") + " L299 220", RED, 2.4)}${HB.map((h, i) => dot(71 + i * 38, 220 - h, RED, 3.5)).join("")}
  ${T(165, 246, "Histogram + frequency polygon", "var(--ink)", "middle", 12)}${mut(165, 262, "bars touch; polygon joins the mid-points of the tops", "middle", 10.5)}
  ${axes(370, 220, 250, 190, "values", "cumulative freq.")}
  ${curve("M382 220 " + CF.map((c, i) => `L${420 + i * 38} ${220 - c / 520 * 170}`).join(" "), GRN, 2.6)}${curve("M382 50 " + CF.map((c, i) => `L${420 + i * 38} ${50 + c / 520 * 170}`).join(" "), PUR, 2.6)}
  ${dash("M506 135 V220")}${dot(506, 135, "#c69214", 6)}${T(506, 236, "median", GLD, "middle", 11)}
  ${T(526, 62, "less than", GRN, "end", 11)}${T(388, 80, "more than", PUR, "start", 11)}
  ${T(495, 262, "The two ogives cross at the median", "var(--ink)", "middle", 12)}</svg>`;
place("L2", "Which diagram", KIT.fig("Histogram, polygon and ogives", HG, "A histogram shows a continuous frequency distribution and gives the mode. Ogives are cumulative frequency curves; the less-than and more-than ogives meet at the median."));

// L3 — mean, median and mode on the three shapes
const mm = (x, name, sk, order, c) => { const cx = x + 100, pk = cx + sk; const pos = sk === 0 ? [cx, cx, cx] : sk < 0 ? [pk, pk + 22, pk + 44] : [pk, pk - 22, pk - 44];
  return `<g>${curve(bell(cx, 170, 92, 120, sk), c, 2.8)}<path d="M${x + 4} 170 H${x + 196}" stroke="var(--ink)" stroke-width="1.4"/>
    ${sk === 0 ? dash(`M${cx} 50 V170`) : pos.map((px, i) => `<path d="M${px} ${i === 0 ? 50 : i === 1 ? 78 : 104} V170" stroke="${[RED, GRN, BLU][i]}" stroke-width="1.6" stroke-dasharray="4 3"/>`).join("")}
    ${T(cx, 192, name, c, "middle", 12.5)}${mut(cx, 208, order, "middle", 11)}</g>`; };
const MMM = `<svg class="dg" viewBox="0 0 640 250" role="img" aria-label="Mean, median and mode in symmetric and skewed distributions">
  ${mm(10, "Positively skewed", -34, "mode &lt; median &lt; mean", PUR)}${mm(220, "Symmetric", 0, "mean = median = mode", GRN)}${mm(430, "Negatively skewed", 34, "mean &lt; median &lt; mode", GLD)}
  ${T(20, 236, "— mode", RED, "start", 11)}${T(90, 236, "— median", GRN, "start", 11)}${T(172, 236, "— mean", BLU, "start", 11)}${mut(250, 236, "Empirical rule: Mode = 3 Median − 2 Mean", "start", 11.5)}</svg>`;
place("L3", "Properties", KIT.fig("Where mean, median and mode sit", MMM, "The mean is pulled towards the long tail, the mode stays at the peak, and the median lies between them."));

// L4 — the box plot
const BP = `<svg class="dg" viewBox="0 0 640 190" role="img" aria-label="A box-and-whisker plot">
  <path d="M60 70 H190 M430 70 H580 M60 52 V88 M580 52 V88" stroke="var(--ink)" stroke-width="2"/><rect x="190" y="40" width="240" height="60" rx="4" fill="${BLU}" opacity=".22" stroke="${BLU}" stroke-width="2"/><path d="M290 40 V100" stroke="${RED}" stroke-width="3"/>
  ${[[60, "Min"], [190, "Q₁"], [290, "Q₂ = median"], [430, "Q₃"], [580, "Max"]].map(r => T(r[0], 122, r[1], r[0] === 290 ? RED : "var(--ink)", "middle", 12)).join("")}
  <path d="M190 142 H430" stroke="${BLU}" stroke-width="2"/><path d="M190 136 V148 M430 136 V148" stroke="${BLU}" stroke-width="2"/>${T(310, 160, "Interquartile range = Q₃ − Q₁ (the middle 50%)", BLU, "middle", 11.5)}
  <path d="M60 172 H580" stroke="${GRY}" stroke-width="2"/><path d="M60 166 V178 M580 166 V178" stroke="${GRY}" stroke-width="2"/>${T(320, 188, "Range = Max − Min", GRY, "middle", 11.5)}
  ${mut(310, 26, "Quartile deviation = (Q₃ − Q₁) ÷ 2", "middle")}</svg>`;
place("L4", "The measures", KIT.fig("Five numbers in one picture: the box plot", BP, "The box holds the middle half of the data; the whiskers reach the smallest and largest values. The range uses only the two ends, so one extreme value changes it."));

// L5 — skewness and kurtosis
const SK = `<svg class="dg" viewBox="0 0 640 230" role="img" aria-label="Skewness and kurtosis">
  ${T(160, 20, "Skewness: which side the tail is", "var(--ink)", "middle", 13)}<path d="M20 170 H300" stroke="var(--ink)" stroke-width="1.4"/>
  ${curve(bell(110, 170, 86, 110, -36), PUR, 2.6)}${curve(bell(160, 170, 86, 124, 0), GRN, 2.6, true)}${curve(bell(210, 170, 86, 110, 36), GLD, 2.6)}
  ${T(48, 190, "positive (right tail)", PUR, "start", 11)}${T(272, 190, "negative (left tail)", GLD, "end", 11)}${mut(160, 208, "β₁ = μ₃² ÷ μ₂³ ;  symmetric → 0", "middle", 11)}
  ${T(480, 20, "Kurtosis: how peaked it is", "var(--ink)", "middle", 13)}<path d="M340 170 H620" stroke="var(--ink)" stroke-width="1.4"/>
  ${curve(bell(480, 170, 70, 140, 0), RED, 2.6)}${curve(bell(480, 170, 104, 100, 0), GRN, 2.6)}${curve(bell(480, 170, 136, 62, 0), BLU, 2.6)}
  ${T(520, 44, "lepto: β₂ &gt; 3", RED, "start", 11)}${T(544, 92, "meso: β₂ = 3", GRN, "start", 11)}${T(566, 134, "platy: β₂ &lt; 3", BLU, "start", 11)}${mut(480, 208, "β₂ = μ₄ ÷ μ₂² ;  normal curve → 3", "middle", 11)}</svg>`;
place("L5", "Skewness and kurtosis", KIT.fig("Skewness and kurtosis in pictures", SK, "Leptokurtic: tall and thin (think of a leaping kangaroo). Platykurtic: flat (a platypus). Mesokurtic: the normal curve."));

// L6 — scatter diagrams
const pts = (x, f, n, noise) => { let s = ""; for (let i = 0; i < n; i++) { const u = (i + 0.5) / n, rnd = (Math.sin(i * 78.233 + x * 3.7) * 43758.5453) % 1, v = f(u) + noise * rnd * 0.3; s += dot(x + 12 + u * 86, 130 - Math.max(0.03, Math.min(0.97, v)) * 100, BLU, 3); } return s; };
const sc = (i, lab, r, f, noise) => { const x = 8 + i * 126; return `<g><path d="M${x + 8} 26 V134 H${x + 104}" fill="none" stroke="var(--ink)" stroke-width="1.3"/>${pts(x, f, 14, noise)}${T(x + 56, 154, r, RED, "middle", 12.5)}${mut(x + 56, 170, lab, "middle", 10.5)}</g>`; };
const SCT = `<svg class="dg" viewBox="0 0 640 180" role="img" aria-label="Scatter diagrams for different values of r">
  ${sc(0, "perfect positive", "r = +1", u => u, 0)}${sc(1, "positive", "0 &lt; r &lt; 1", u => u, 0.5)}${sc(2, "no correlation", "r = 0", u => 0.5, 1.7)}${sc(3, "negative", "−1 &lt; r &lt; 0", u => 1 - u, 0.5)}${sc(4, "perfect negative", "r = −1", u => 1 - u, 0)}</svg>`;
place("L6", "Karl Pearson", KIT.fig("Reading r from a scatter diagram", SCT, "The closer the points lie to a straight line, the nearer r is to ±1. r has no units and always lies between −1 and +1."));

// L7 — the two regression lines
const RG = `<svg class="dg" viewBox="0 0 640 260" role="img" aria-label="The two lines of regression">
  ${axes(50, 220, 280, 190, "x", "y")}
  ${curve("M70 190 L320 70", BLU)}${T(322, 66, "y on x", BLU, "start", 11.5)}${curve("M110 214 L270 40", RED)}${T(274, 40, "x on y", RED, "start", 11.5)}
  ${dash("M50 136 H183 V220")}${dot(183, 136, "#c69214", 7)}${T(192, 152, "(x̄, ȳ)", GLD)}${mut(42, 140, "ȳ", "end")}${mut(183, 236, "x̄", "middle")}
  ${T(380, 46, "They always cross at (x̄, ȳ)", GLD, "start", 13.5)}
  ${T(380, 84, "r = ±√(b<tspan baseline-shift=\"sub\" font-size=\"9\">yx</tspan> × b<tspan baseline-shift=\"sub\" font-size=\"9\">xy</tspan>)", "var(--ink)", "start", 13.5)}${mut(380, 102, "r takes the sign of the two coefficients")}
  ${T(380, 140, "r = ±1", GRN, "start", 13.5)}${mut(380, 158, "the two lines coincide")}
  ${T(380, 196, "r = 0", RED, "start", 13.5)}${mut(380, 214, "the lines are at right angles")}${mut(380, 230, "(parallel to the axes)")}</svg>`;
place("L7", "Two-variable regression", KIT.fig("The two regression lines", RG, "The smaller the angle between the lines, the stronger the correlation. Both regression coefficients have the same sign, and both cannot exceed 1 together."));

// L8 — a Venn diagram
const VN = `<svg class="dg" viewBox="0 0 640 230" role="img" aria-label="Venn diagram of two events">
  <rect x="20" y="16" width="300" height="190" rx="10" class="card"/>${T(32, 36, "S", "var(--ink2)")}
  <circle cx="135" cy="112" r="72" fill="${BLU}" opacity=".3" stroke="${BLU}" stroke-width="2"/><circle cx="210" cy="112" r="72" fill="${RED}" opacity=".3" stroke="${RED}" stroke-width="2"/>
  ${T(100, 116, "A only", BLU, "middle")}${T(246, 116, "B only", RED, "middle")}${T(172, 116, "A∩B", "var(--ink)", "middle")}${mut(172, 198, "outside both: (A∪B)′", "middle", 10.5)}
  ${T(350, 44, "Addition rule", "var(--ink)", "start", 13.5)}${mut(350, 62, "P(A∪B) = P(A) + P(B) − P(A∩B)", "start", 12)}
  ${T(350, 98, "Mutually exclusive", GRN, "start", 13.5)}${mut(350, 116, "circles don't overlap: P(A∩B) = 0", "start", 12)}
  ${T(350, 152, "Independent", PUR, "start", 13.5)}${mut(350, 170, "P(A∩B) = P(A) × P(B)", "start", 12)}
  ${T(350, 204, "Conditional:", GLD, "start", 12.5)}${mut(432, 204, "P(A|B) = P(A∩B) ÷ P(B)", "start", 12)}</svg>`;
place("L8", "Rules", KIT.fig("Two events as a Venn diagram", VN, "The overlap is counted twice when you add P(A) and P(B), so it is subtracted once."));

// L11 — the normal curve
const NC = `<svg class="dg" viewBox="0 0 640 270" role="img" aria-label="The normal curve and the 68, 95, 99.7 rule">
  <path d="${npath(320, 190, 86, 150, -3, 3, true)}" fill="${BLU}" opacity=".12"/><path d="${npath(320, 190, 86, 150, -2, 2, true)}" fill="${BLU}" opacity=".18"/><path d="${npath(320, 190, 86, 150, -1, 1, true)}" fill="${BLU}" opacity=".3"/>
  ${curve(npath(320, 190, 86, 150, -3.4, 3.4), BLU)}<path d="M20 190 H620" stroke="var(--ink)" stroke-width="1.4"/>${dash("M320 40 V190")}
  ${[-3, -2, -1, 0, 1, 2, 3].map(z => mut(320 + z * 86, 206, z === 0 ? "μ" : (z > 0 ? "μ+" : "μ−") + Math.abs(z) + "σ", "middle", 11)).join("")}
  ${[[1, "68.27%", 222], [2, "95.45%", 240], [3, "99.73%", 258]].map(r => `<path d="M${320 - r[0] * 86} ${r[2] - 4} H${320 + r[0] * 86}" stroke="${GLD}" stroke-width="1.6"/><path d="M${320 - r[0] * 86} ${r[2] - 9} v10 M${320 + r[0] * 86} ${r[2] - 9} v10" stroke="${GLD}" stroke-width="1.6"/><rect x="290" y="${r[2] - 12}" width="60" height="15" fill="var(--sheet)"/>${T(320, r[2], r[1], GLD, "middle", 11.5)}`).join("")}
  ${T(30, 40, "Bell-shaped, symmetric", "var(--ink)", "start", 12.5)}${mut(30, 58, "mean = median = mode")}${mut(30, 74, "β₁ = 0, β₂ = 3")}
  ${T(610, 40, "Points of inflexion", "var(--ink)", "end", 12.5)}${mut(610, 58, "at μ ± σ", "end")}${mut(610, 74, "total area = 1", "end")}</svg>`;
place("L11", "The normal distribution", KIT.fig("The normal curve and the 68–95–99.7 rule", NC, "About 68% of values lie within one standard deviation of the mean, 95% within two and 99.7% within three. The curve never touches the axis."));

// L14 — rejection regions; the two errors
const tail = (x, title, a, b, lab) => `<g><path d="M${x} 150 H${x + 290}" stroke="var(--ink)" stroke-width="1.4"/>
  ${a != null ? `<path d="${npath(x + 145, 150, 44, 110, -3.2, a, true)}" fill="${RED}" opacity=".55"/>` : ""}${b != null ? `<path d="${npath(x + 145, 150, 44, 110, b, 3.2, true)}" fill="${RED}" opacity=".55"/>` : ""}
  ${curve(npath(x + 145, 150, 44, 110, -3.2, 3.2), BLU, 2.6)}${a != null ? T(x + 145 + a * 44, 168, String(a).replace("-", "−"), RED, "middle", 11) : ""}${b != null ? T(x + 145 + b * 44, 168, "+" + b, RED, "middle", 11) : ""}
  ${T(x + 145, 100, "accept H₀", GRN, "middle", 11)}${T(x + 145, 24, title, "var(--ink)", "middle", 13)}${mut(x + 145, 186, lab, "middle", 11)}</g>`;
const HT = `<svg class="dg" viewBox="0 0 640 290" role="img" aria-label="Rejection regions at the 5% level, and Type I and Type II errors">
  ${tail(15, "Two-tailed test, α = 5%", -1.96, 1.96, "reject H₀ if |Z| &gt; 1.96 (2.5% in each tail)")}${tail(335, "One-tailed (right), α = 5%", null, 1.645, "reject H₀ if Z &gt; 1.645 (5% in one tail)")}
  <rect x="60" y="204" width="520" height="78" rx="10" class="card"/><path d="M60 230 H580 M60 256 H580 M240 204 V282 M410 204 V282" stroke="var(--rule)"/>
  ${T(325, 222, "H₀ is true", "var(--ink)", "middle", 12)}${T(495, 222, "H₀ is false", "var(--ink)", "middle", 12)}${T(72, 248, "Reject H₀", "var(--ink)", "start", 12)}${T(72, 274, "Accept H₀", "var(--ink)", "start", 12)}
  ${T(325, 248, "Type I error (α)", RED, "middle", 12)}${T(495, 248, "correct: power = 1 − β", GRN, "middle", 12)}${T(325, 274, "correct", GRN, "middle", 12)}${T(495, 274, "Type II error (β)", RED, "middle", 12)}</svg>`;
place("L14", "Critical values", KIT.fig("Rejection regions and the two errors", HT, "The shaded tails are the critical region: its area is α, the level of significance. Type I: rejecting a true H₀. Type II: accepting a false H₀."));

// L15 — the chi-square curve
const chi = (k, sx, sy, from) => { let d = ""; for (let x = from || 0.02; x <= 16; x += 0.2) { const y = Math.pow(x, k / 2 - 1) * Math.exp(-x / 2); d += (d ? "L" : "M") + (60 + x * sx).toFixed(1) + " " + (200 - y * sy).toFixed(1); } return d; };
const CH2 = `<svg class="dg" viewBox="0 0 640 250" role="img" aria-label="Chi-square curves for different degrees of freedom">
  ${axes(60, 200, 320, 170, "χ²", "")}${curve(chi(2, 20, 150), GRY, 2.4)}${curve(chi(4, 20, 190), BLU, 2.8)}${curve(chi(8, 20, 11), GRN, 2.4)}
  ${T(86, 100, "ν = 2", GRY, "start", 11)}${T(112, 50, "ν = 4", BLU, "start", 11)}${T(196, 70, "ν = 8", GRN, "start", 11)}
  <path d="${chi(4, 20, 190, 9.49)} L380 200 L249.8 200 Z" fill="${RED}" opacity=".55"/>${dash("M249.8 200 V150")}${T(252, 146, "9.49 (ν = 4, α = 5%)", RED, "start", 10.5)}${T(316, 220, "reject H₀ (right tail)", RED, "middle", 11)}
  ${T(410, 46, "Always ≥ 0, skewed right", "var(--ink)", "start", 13)}${mut(410, 64, "larger ν → more symmetric")}
  ${T(410, 100, "Mean = ν, variance = 2ν", GLD, "start", 13)}${mut(410, 118, "ν = degrees of freedom")}
  ${T(410, 154, "χ² = Σ (O − E)² ÷ E", BLU, "start", 13)}${mut(410, 172, "goodness of fit: ν = n − 1")}${mut(410, 188, "r × c table: ν = (r − 1)(c − 1)")}</svg>`;
place("L15", "χ² tests", KIT.fig("The chi-square curve", CH2, "The chi-square test is one-tailed on the right: a large χ² means the observed counts are far from the expected ones."));

// L17 — the four parts of a time series
const ser = (y, f, c) => { let d = ""; for (let i = 0; i <= 60; i++) d += (d ? "L" : "M") + (190 + i * 7) + " " + (y - f(i)).toFixed(1); return curve(d, c, 2.4); };
const TS = `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Components of a time series">
  ${[["Trend (T)", "long-term rise or fall", BLU, i => i * 0.5 - 14], ["Seasonal (S)", "repeats within a year", GRN, i => 13 * Math.sin(i / 60 * Math.PI * 10)], ["Cyclical (C)", "boom and slump, over years", PUR, i => 14 * Math.sin(i / 60 * Math.PI * 2.4)], ["Irregular (I)", "random: floods, strikes, wars", RED, i => 12 * Math.sin(i * 12.9898) * Math.cos(i * 4.1)]]
    .map((r, k) => { const y = 44 + k * 66; return `<path d="M190 ${y} H612" stroke="var(--rule)"/>${ser(y, r[3], r[2])}${T(20, y - 2, r[0], r[2], "start", 13)}${mut(20, y + 15, r[1], "start", 11)}`; }).join("")}
  ${mut(320, 290, "Additive model: Y = T + S + C + I      Multiplicative model: Y = T × S × C × I", "middle", 12)}</svg>`;
place("L17", "Models and trend", KIT.fig("The four parts of a time series", TS, "Seasonal swings repeat within a year; cyclical swings take several years. The moving-average method smooths out the short swings to show the trend."));

VISUAL = { mode: true, VIS: { key: "statistics_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

/* Trigonometry — the standard values as bars (√0/2 … √4/2), and a unit circle that turns while its height traces the
   sine wave and its across-distance the cosine, with the All–Sin–Tan–Cos quadrants (drawn by study-visual.js).
   place(), rows() and KIT come from tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s, w) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="${w || 700}" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const lq = (svg, name) => svg.replace("<text ", `<text data-lq="${name}" `);
const SIN = "#c0503a", COS = "#2f6db5", f = v => +v.toFixed(1);

// L2 — sin 0°, 30°, 45°, 60°, 90° = √0/2, √1/2, √2/2, √3/2, √4/2; cos is the same list backwards
const ANG = [0, 30, 45, 60, 90], BH = 150, base = 200;
const bars = (x0, fn, c, name) => ANG.map((a, i) => { const v = fn(a * Math.PI / 180), h = v * BH, x = x0 + i * 52;
  return `<rect x="${x}" y="${f(base - h)}" width="38" height="${f(h)}" rx="5" fill="${c}" opacity=".75" class="tvb" style="animation-delay:${i * .15}s;transform-origin:${x}px ${base}px"/>` +
    T(x + 19, f(base - h - 8), ["√0/2", "√1/2", "√2/2", "√3/2", "√4/2"][name === "sin" ? i : 4 - i], "var(--ink)", "middle", 11) +
    T(x + 19, base + 18, a + "°", "var(--ink2)", "middle", 11, 600); }).join("") +
  T(x0 + 120, base + 44, name + " θ", c, "middle", 15);
const SB = `<svg class="dg" viewBox="0 0 660 260" role="img" aria-label="sin and cos of 0, 30, 45, 60 and 90 degrees as bars">
  <path d="M20 ${base} H640" stroke="var(--ink)" stroke-width="1.5"/>${bars(30, Math.sin, SIN, "sin")}${bars(370, Math.cos, COS, "cos")}
  <path d="M20 ${base - BH} H640" stroke="var(--rule)" stroke-dasharray="4 4"/>${T(640, base - BH - 6, "1", "var(--ink2)", "end", 11)}
  <style>.tvb{animation:tvgrow .7s ease-out both}@keyframes tvgrow{from{transform:scaleY(0)}to{transform:scaleY(1)}}@media (prefers-reduced-motion:reduce){.tvb{animation:none}}</style></svg>`;
place("L2", "The master table", KIT.fig("Count 0, 1, 2, 3, 4 under the root", SB,
  "Write √0, √1, √2, √3, √4 and halve each: that is sin 0°, 30°, 45°, 60°, 90° (0, ½, 1/√2, √3/2, 1). Cos is the same list read backwards, and tan = sin ÷ cos."));

// L7 — the unit circle turning: its height is sin θ, its across-distance cos θ
const CX = 130, CY = 150, R = 90, W0 = 270, WW = 360, N = 72;
const ths = Array.from({ length: N + 1 }, (_, k) => k / N * 2 * Math.PI);
const px = ths.map(t => f(CX + R * Math.cos(t))), py = ths.map(t => f(CY - R * Math.sin(t))), wx = ths.map(t => f(W0 + t / (2 * Math.PI) * WW));
const A = (attr, vals) => `<animate attributeName="${attr}" dur="9s" repeatCount="indefinite" calcMode="linear" values="${vals.join(";")}"/>`;
const curve = fn => "M" + ths.map((t, k) => wx[k] + " " + f(CY - R * fn(t))).join(" L");
const UC = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="A point turning on the unit circle traces the sine and cosine waves">
  <rect x="${CX}" y="${CY - R - 10}" width="${R + 10}" height="${R + 10}" fill="hsla(135,55%,45%,.12)"/><rect x="${CX - R - 10}" y="${CY - R - 10}" width="${R + 10}" height="${R + 10}" fill="hsla(10,70%,55%,.12)"/>
  <rect x="${CX - R - 10}" y="${CY}" width="${R + 10}" height="${R + 10}" fill="hsla(45,90%,50%,.14)"/><rect x="${CX}" y="${CY}" width="${R + 10}" height="${R + 10}" fill="hsla(212,75%,55%,.12)"/>
  <circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="var(--ink2)" stroke-width="2"/>
  <path d="M${CX - R - 14} ${CY} H${W0 + WW + 10} M${CX} ${CY - R - 14} V${CY + R + 14}" stroke="var(--ink2)" stroke-width="1"/>
  ${lq(T(CX + 48, CY - 56, "All", "var(--ink)", "middle", 14), "All")}${lq(T(CX - 48, CY - 56, "Sin", "var(--ink)", "middle", 14), "Sin")}
  ${lq(T(CX - 48, CY + 66, "Tan", "var(--ink)", "middle", 14), "Tan")}${lq(T(CX + 48, CY + 66, "Cos", "var(--ink)", "middle", 14), "Cos")}
  ${T(CX + 48, CY - 40, "all +", "var(--ink2)", "middle", 10, 600)}${T(CX - 48, CY - 40, "sin, cosec +", "var(--ink2)", "middle", 10, 600)}
  ${T(CX - 48, CY + 82, "tan, cot +", "var(--ink2)", "middle", 10, 600)}${T(CX + 48, CY + 82, "cos, sec +", "var(--ink2)", "middle", 10, 600)}
  <path d="${curve(Math.cos)}" fill="none" stroke="${COS}" stroke-width="2" stroke-dasharray="5 4" opacity=".8"/><path d="${curve(Math.sin)}" fill="none" stroke="${SIN}" stroke-width="2.5"/>
  ${[90, 180, 270, 360].map(d => `<line x1="${W0 + d / 360 * WW}" y1="${CY - 4}" x2="${W0 + d / 360 * WW}" y2="${CY + 4}" stroke="var(--ink2)"/>` + T(W0 + d / 360 * WW, CY + 18, d + "°", "var(--ink2)", "middle", 10.5, 600)).join("")}
  ${T(W0 + WW + 8, CY - R + 4, "1", "var(--ink2)", "start", 10.5)}${T(W0 + WW + 8, CY + R + 4, "−1", "var(--ink2)", "start", 10.5)}
  <line stroke="var(--ink2)" stroke-dasharray="3 3">${A("x1", px)}${A("y1", py)}${A("x2", wx)}${A("y2", py)}</line>
  <line x1="${CX}" y1="${CY}" stroke="var(--ink)" stroke-width="2">${A("x2", px)}${A("y2", py)}</line>
  <line stroke="${SIN}" stroke-width="4" y1="${CY}">${A("x1", px)}${A("x2", px)}${A("y2", py)}</line>
  <line stroke="${COS}" stroke-width="4" y1="${CY}" y2="${CY}" x1="${CX}">${A("x2", px)}</line>
  <circle r="7" fill="var(--ink)">${A("cx", px)}${A("cy", py)}</circle><circle r="6" fill="${SIN}">${A("cx", wx)}${A("cy", py)}</circle>
  <rect x="${W0}" y="18" width="12" height="4" fill="${SIN}"/>${T(W0 + 18, 24, "sin θ = height", SIN, "start", 12)}
  <rect x="${W0 + 150}" y="18" width="12" height="4" fill="${COS}"/>${T(W0 + 168, 24, "cos θ = across", COS, "start", 12)}</svg>`;
place("L7", "Signs in the four quadrants", KIT.fig("The unit circle, turning", UC,
  "On a circle of radius 1 the point at angle θ is (cos θ, sin θ). Above the axis sin is +, left of it cos is −: All in the 1st quadrant, Sin in the 2nd, Tan in the 3rd, Cos in the 4th (“Add Sugar To Coffee”)."));

VISUAL = { mode: true, VIS: { key: "trig_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

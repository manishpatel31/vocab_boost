/* Mensuration 2D — a circle cut into sixteen slices and laid out as an almost-rectangle πr long and r high, which is
   why its area is πr² (drawn by study-visual.js). place(), rows() and KIT come from tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s, w) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="${w || 700}" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const f = v => +v.toFixed(1);
// a slice with its point at (x, y), facing direction phi (radians, anticlockwise from east), opening 2·half
const slice = (x, y, r, phi, half, c, st) => { const p = t => [f(x + r * Math.cos(t)), f(y - r * Math.sin(t))], [x1, y1] = p(phi - half), [x2, y2] = p(phi + half);
  return `<path d="M${x} ${y} L${x1} ${y1} A${r} ${r} 0 0 0 ${x2} ${y2} Z" fill="${c}" stroke="var(--sheet)" stroke-width="1"${st ? ` style="${st}"` : ""} class="mcs"/>`; };
const N = 16, R = 80, D = 2 * Math.PI / N, H = R * Math.sin(D / 2), TOP = "hsla(212,75%,55%,.6)", BOT = "hsla(20,85%,55%,.6)";
let circle = "", strip = "";
for (let i = 0; i < N; i++) circle += slice(120, 140, R, i * D + D / 2, D / 2, i < N / 2 ? TOP : BOT);
const X0 = 330, Y0 = 70;
for (let j = 0; j < N / 2; j++) {
  strip += slice(X0 + H + j * 2 * H, Y0, R, -Math.PI / 2, D / 2, TOP, `animation-delay:${j * .12}s`);
  strip += slice(X0 + 2 * H + j * 2 * H, Y0 + R * Math.cos(D / 2), R, Math.PI / 2, D / 2, BOT, `animation-delay:${1 + j * .12}s`);
}
const CU = `<svg class="dg" viewBox="0 0 660 260" role="img" aria-label="A circle cut into slices and rearranged into a near-rectangle">
  ${circle}<circle cx="120" cy="140" r="${R}" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <path d="M120 140 H${120 + R}" stroke="var(--ink)" stroke-width="1.5"/>${T(120 + R / 2, 134, "r", "var(--ink)", "middle", 13)}
  <path d="M232 140 H${X0 - 14}" stroke="var(--ink2)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#m2ar)"/>
  <defs><marker id="m2ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="var(--ink2)"/></marker></defs>
  ${strip}
  <path d="M${X0 + H} ${Y0 + R + 22} H${f(X0 + H + 16 * H)}" stroke="var(--accent)" stroke-width="2"/>${T(f(X0 + 9 * H), Y0 + R + 42, "πr  (half the circumference)", "var(--accent)", "middle", 13)}
  <path d="M${f(X0 + 18 * H + 6)} ${Y0} V${f(Y0 + R * Math.cos(D / 2))}" stroke="var(--accent)" stroke-width="2"/>${T(f(X0 + 18 * H + 14), Y0 + R / 2 + 5, "r", "var(--accent)", "start", 14)}
  ${T(f(X0 + 9 * H), 30, "area = πr × r = πr²", "var(--ink)", "middle", 16)}
  <style>.mcs{animation:mcin .5s ease-out both}@keyframes mcin{from{opacity:0}to{opacity:1}}@media (prefers-reduced-motion:reduce){.mcs{animation:none}}</style></svg>`;
place("L5", "Circle family", KIT.fig("Why a circle's area is πr²", CU,
  "Cut a circle into thin slices and lay them head to tail: half the slices (blue) make the bottom edge, half (orange) the top. The shape is nearly a rectangle πr long and r high — the thinner the slices, the closer — so the area is πr²."));

VISUAL = { mode: true, VIS: { key: "mens2d_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

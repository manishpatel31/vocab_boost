/* Geometry — a triangle's three corners torn off and laid on a straight line (180°), and Pythagoras by rearrangement:
   the same four triangles leave c² in one square and a² + b² in the other (drawn by study-visual.js). place(), rows()
   and KIT come from tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s, w) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="${w || 700}" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const lq = (svg, name) => svg.replace("<text ", `<text data-lq="${name}" `);
const f = v => +v.toFixed(1), rad = d => d * Math.PI / 180, deg = r => r * 180 / Math.PI;
// a wedge with its corner at (x, y), from angle a1 to a2 (degrees, anticlockwise from east, as on paper)
const wedge = (x, y, r, a1, a2, c, cls, st) => `<path d="M${x} ${y} L${f(x + r * Math.cos(rad(a1)))} ${f(y - r * Math.sin(rad(a1)))} A${r} ${r} 0 ${a2 - a1 > 180 ? 1 : 0} 0 ${f(x + r * Math.cos(rad(a2)))} ${f(y - r * Math.sin(rad(a2)))} Z" fill="${c}"${cls ? ` class="${cls}"` : ""}${st ? ` style="${st}"` : ""}/>`;
const dir = (p, q) => { const d = deg(Math.atan2(p[1] - q[1], q[0] - p[0])); return d < 0 ? d + 360 : d; };   // direction p → q on paper

// L2 — the corners of a triangle make a straight line
const A = [60, 230], B = [330, 230], C = [215, 66], CA = "hsla(212,75%,55%,.6)", CB = "hsla(42,95%,52%,.7)", CC = "hsla(135,55%,45%,.55)";
const aA = [dir(A, B), dir(A, C)], aB = [dir(B, C), dir(B, A)], aC = [dir(C, A), dir(C, B)];
const sA = aA[1] - aA[0], sB = aB[1] - aB[0], sC = aC[1] - aC[0];
if (Math.abs(sA + sB + sC - 180) > 1e-6) fail("geometry: the angles do not add to 180");
const P = [500, 230];
const AS = `<svg class="dg" viewBox="0 0 660 290" role="img" aria-label="The three angles of a triangle placed side by side on a straight line">
  ${wedge(...A, 44, ...aA, CA)}${wedge(...B, 44, ...aB, CB)}${wedge(...C, 44, ...aC, CC)}
  <path d="M${A} L${B} L${C} Z" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-linejoin="round"/>
  ${T(A[0] - 6, A[1] + 22, "A", "var(--ink)", "middle", 14)}${T(B[0] + 6, B[1] + 22, "B", "var(--ink)", "middle", 14)}${T(C[0], C[1] - 10, "C", "var(--ink)", "middle", 14)}
  <path d="M370 ${P[1]} H640" stroke="var(--ink)" stroke-width="2.5"/>
  ${wedge(...P, 80, 0, sA, CA, "gwd", "animation-delay:.3s")}${wedge(...P, 80, sA, sA + sC, CC, "gwd", "animation-delay:1.1s")}${wedge(...P, 80, sA + sC, 180, CB, "gwd", "animation-delay:1.9s")}
  ${lq(T(f(P[0] + 56 * Math.cos(rad(sA / 2))), f(P[1] - 56 * Math.sin(rad(sA / 2)) + 5), "A", "var(--ink)", "middle", 14), "A")}
  ${lq(T(f(P[0] + 56 * Math.cos(rad(sA + sC / 2))), f(P[1] - 56 * Math.sin(rad(sA + sC / 2)) + 5), "C", "var(--ink)", "middle", 14), "C")}
  ${lq(T(f(P[0] + 56 * Math.cos(rad(sA + sC + sB / 2))), f(P[1] - 56 * Math.sin(rad(sA + sC + sB / 2)) + 5), "B", "var(--ink)", "middle", 14), "B")}
  ${T(505, 262, "A + B + C = 180°", "var(--accent)", "middle", 15)}${T(505, 282, "they fill a straight line", "var(--ink2)", "middle", 11.5, 500)}
  <style>.gwd{animation:gwin .6s ease-out both}@keyframes gwin{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}@media (prefers-reduced-motion:reduce){.gwd{animation:none}}</style></svg>`;
place("L2", "Two key pictures", KIT.fig("Tear off the corners", AS,
  "Cut the three corners off any paper triangle and put them side by side: they always fill a straight line, so the angles add up to 180°. The same idea gives the exterior angle rule: the outside angle at B equals A + C."));

// L4 — Pythagoras by rearrangement
const a = 66, b = 112, S = a + b, X1 = 40, X2 = 380, Y = 50, TRI = "hsla(212,60%,60%,.35)";
const tri = (x, pts) => `<path d="M${pts.map(([u, v]) => (x + u) + " " + (Y + v)).join(" L")} Z" fill="${TRI}" stroke="var(--ink2)" stroke-width="1.5"/>`;
const PY = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="Pythagoras: the same four triangles leave c squared, or a squared plus b squared">
  <rect x="${X1}" y="${Y}" width="${S}" height="${S}" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M${X1 + a} ${Y} L${X1 + S} ${Y + a} L${X1 + b} ${Y + S} L${X1} ${Y + b} Z" fill="hsla(20,85%,55%,.4)"/>
  ${tri(X1, [[0, 0], [a, 0], [0, b]])}${tri(X1, [[S, 0], [S, a], [a, 0]])}${tri(X1, [[S, S], [b, S], [S, a]])}${tri(X1, [[0, S], [0, b], [b, S]])}
  ${lq(T(X1 + S / 2, Y + S / 2 + 6, "c²", "var(--ink)", "middle", 20), "c²")}
  ${T(X1 + a / 2, Y - 6, "a", "var(--ink2)", "middle", 12)}${T(X1 + a + b / 2, Y - 6, "b", "var(--ink2)", "middle", 12)}${T(X1 - 8, Y + b / 2, "b", "var(--ink2)", "end", 12)}${T(X1 - 8, Y + b + a / 2, "a", "var(--ink2)", "end", 12)}
  <rect x="${X2}" y="${Y}" width="${a}" height="${a}" fill="hsla(135,55%,45%,.4)" stroke="var(--ink)" stroke-width="1.5"/>
  <rect x="${X2 + a}" y="${Y + a}" width="${b}" height="${b}" fill="hsla(42,95%,52%,.45)" stroke="var(--ink)" stroke-width="1.5"/>
  ${tri(X2, [[a, 0], [S, 0], [S, a]])}${tri(X2, [[a, 0], [a, a], [S, a]])}${tri(X2, [[0, a], [a, a], [a, S]])}${tri(X2, [[0, a], [0, S], [a, S]])}
  <rect x="${X2}" y="${Y}" width="${S}" height="${S}" fill="none" stroke="var(--ink)" stroke-width="2"/>
  ${lq(T(X2 + a / 2, Y + a / 2 + 6, "a²", "var(--ink)", "middle", 18), "a²")}${lq(T(X2 + a + b / 2, Y + a + b / 2 + 6, "b²", "var(--ink)", "middle", 20), "b²")}
  ${T(X2 + a / 2, Y - 6, "a", "var(--ink2)", "middle", 12)}${T(X2 + a + b / 2, Y - 6, "b", "var(--ink2)", "middle", 12)}
  ${T(X1 + S / 2, Y + S + 30, "4 triangles + c²", "var(--ink)", "middle", 14)}${T(X2 + S / 2, Y + S + 30, "4 triangles + a² + b²", "var(--ink)", "middle", 14)}
  ${T(X1 + S + 81, Y + S / 2 - 4, "same", "var(--ink2)", "middle", 12, 600)}${T(X1 + S + 81, Y + S / 2 + 14, "square", "var(--ink2)", "middle", 12, 600)}
  ${T(330, Y + S + 60, "so c² = a² + b²", "var(--accent)", "middle", 16)}</svg>`;
place("L4", "Three key pictures", KIT.fig("Pythagoras without algebra", PY,
  "Both big squares have side a + b and hold the same four right triangles. Take the triangles away and what is left must be equal: c² on one side, a² + b² on the other."));

VISUAL = { mode: true, VIS: { key: "geometry_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

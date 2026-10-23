/* Mensuration 3D — three cones of water fill a cylinder of the same base and height, and the cone : sphere : cylinder
   = 1 : 2 : 3 picture (Archimedes) (drawn by study-visual.js). place(), rows() and KIT come from
   tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s, w) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="${w || 700}" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const lq = (svg, name) => svg.replace("<text ", `<text data-lq="${name}" `);
const WATER = "hsla(205,80%,55%,.55)";
const cyl = (cx, top, r, h, fill) => `<path d="M${cx - r} ${top} V${top + h} A${r} ${r * .28} 0 0 0 ${cx + r} ${top + h} V${top}" fill="${fill || "none"}" stroke="var(--ink)" stroke-width="2"/>` +
  `<ellipse cx="${cx}" cy="${top}" rx="${r}" ry="${r * .28}" fill="${fill ? "var(--sheet)" : "none"}" stroke="var(--ink)" stroke-width="2"/>`;
const cone = (cx, top, r, h, fill) => `<path d="M${cx} ${top} L${cx - r} ${top + h} A${r} ${r * .28} 0 0 0 ${cx + r} ${top + h} Z" fill="${fill || "none"}" stroke="var(--ink)" stroke-width="2" stroke-linejoin="round"/>` +
  `<path d="M${cx - r} ${top + h} A${r} ${r * .28} 0 0 1 ${cx + r} ${top + h}" fill="none" stroke="var(--ink)" stroke-width="1.2" stroke-dasharray="4 4"/>`;

// L3 — three cones fill the cylinder
const r = 60, h = 150, top = 50, cx = 430;
const CF = `<svg class="dg" viewBox="0 0 660 290" role="img" aria-label="Three cones of water fill a cylinder with the same base and height">
  <defs><clipPath id="m3cyl"><path d="M${cx - r} ${top} V${top + h} A${r} ${r * .28} 0 0 0 ${cx + r} ${top + h} V${top} Z"/></clipPath></defs>
  ${cone(150, top, r, h, "hsla(205,80%,55%,.35)")}${T(150, top + h + 44, "one cone of water", "var(--ink)", "middle", 13)}
  ${[0, 1, 2].map(k => `<g class="m3n${k}">${T(250, 110 + k * 30, "pour " + (k + 1), "var(--accent)", "start", 13)}</g>`).join("")}
  <g clip-path="url(#m3cyl)"><rect x="${cx - r}" y="${top - 20}" width="${2 * r}" height="${h + 40}" fill="${WATER}" class="m3w" style="transform-origin:${cx}px ${top + h + 17}px"/></g>
  ${cyl(cx, top, r, h)}${[1, 2].map(k => `<line x1="${cx + r + 4}" y1="${top + h - k * h / 3}" x2="${cx + r + 14}" y2="${top + h - k * h / 3}" stroke="var(--ink2)"/>`).join("")}
  ${T(cx + r + 18, top + h - h / 3 + 4, "⅓", "var(--ink2)", "start", 12)}${T(cx + r + 18, top + h - 2 * h / 3 + 4, "⅔", "var(--ink2)", "start", 12)}${T(cx + r + 18, top + 4, "full", "var(--ink2)", "start", 12)}
  ${T(cx, top + h + 44, "same base, same height", "var(--ink)", "middle", 13)}
  ${T(330, 280, "cone = ⅓ πr²h   ·   cylinder = πr²h", "var(--accent)", "middle", 15)}
  <style>.m3w{animation:m3fill 6s ease-in-out infinite}.m3n0{animation:m3s0 6s step-end infinite}.m3n1{animation:m3s1 6s step-end infinite}.m3n2{animation:m3s2 6s step-end infinite}
  @keyframes m3fill{0%{transform:scaleY(0)}12%,33%{transform:scaleY(.333)}45%,66%{transform:scaleY(.667)}78%,96%{transform:scaleY(1)}100%{transform:scaleY(0)}}
  @keyframes m3s0{0%{opacity:1}96%{opacity:0}}@keyframes m3s1{0%{opacity:0}33%{opacity:1}96%{opacity:0}}@keyframes m3s2{0%{opacity:0}66%{opacity:1}96%{opacity:0}}
  @media (prefers-reduced-motion:reduce){.m3w{animation:none}.m3n0,.m3n1,.m3n2{animation:none}}</style></svg>`;
place("L3", "Cone and the sector it unrolls to", KIT.fig("Three cones fill one cylinder", CF,
  "Fill a cone with water and pour it into a cylinder of the same base and height: it takes exactly three pours. So the cone's volume is one third of πr²h."));

// L4 — cone : sphere : cylinder = 1 : 2 : 3 (all of radius r; cone and cylinder 2r high)
const R2 = 56, H2 = 2 * R2, Y2 = 40;
const AR = `<svg class="dg" viewBox="0 0 660 280" role="img" aria-label="A cone, a sphere and a cylinder of the same radius and height 2r have volumes in the ratio 1 : 2 : 3">
  ${cone(110, Y2, R2, H2, "hsla(135,55%,45%,.3)")}
  <circle cx="330" cy="${Y2 + R2}" r="${R2}" fill="hsla(20,85%,55%,.35)" stroke="var(--ink)" stroke-width="2"/><ellipse cx="330" cy="${Y2 + R2}" rx="${R2}" ry="${R2 * .28}" fill="none" stroke="var(--ink)" stroke-dasharray="4 4"/>
  ${cyl(550, Y2, R2, H2, "hsla(212,75%,55%,.3)")}
  ${lq(T(110, Y2 + H2 + 46, "Cone", "var(--ink)", "middle", 14), "Cone")}${lq(T(330, Y2 + H2 + 46, "Sphere", "var(--ink)", "middle", 14), "Sphere")}${lq(T(550, Y2 + H2 + 46, "Cylinder", "var(--ink)", "middle", 14), "Cylinder")}
  ${T(110, Y2 + H2 + 68, "⅓πr²(2r) = ⅔πr³", "var(--ink2)", "middle", 12, 600)}${T(330, Y2 + H2 + 68, "⁴⁄₃πr³", "var(--ink2)", "middle", 12, 600)}${T(550, Y2 + H2 + 68, "πr²(2r) = 2πr³", "var(--ink2)", "middle", 12, 600)}
  ${T(110, Y2 + H2 + 98, "1", "var(--accent)", "middle", 22)}${T(220, Y2 + H2 + 98, ":", "var(--accent)", "middle", 22)}${T(330, Y2 + H2 + 98, "2", "var(--accent)", "middle", 22)}
  ${T(440, Y2 + H2 + 98, ":", "var(--accent)", "middle", 22)}${T(550, Y2 + H2 + 98, "3", "var(--accent)", "middle", 22)}
  ${T(330, 22, "radius r for all three; cone and cylinder 2r high", "var(--ink2)", "middle", 11.5, 500)}</svg>`;
place("L4", "Sphere, hemisphere, shell", KIT.fig("Cone : sphere : cylinder = 1 : 2 : 3", AR,
  "Give all three the same radius r and make the cone and the cylinder 2r high (the sphere just fits inside the cylinder). Their volumes are ⅔πr³, ⁴⁄₃πr³ and 2πr³ — 1 : 2 : 3. The sphere's surface, 4πr², also equals the cylinder's curved surface (2πr × 2r)."));

VISUAL = { mode: true, VIS: { key: "mens3d_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

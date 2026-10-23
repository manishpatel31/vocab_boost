/* Number System — the number families as nested sets, a sieve of Eratosthenes that crosses out multiples of 2, 3, 5 and 7
   in turn, the unit-digit cycles as wheels, a factor tree with the grid of all 24 factors of 360, Legendre's division
   ladders, decimal → binary by repeated division, and the pictures behind 1 + 3 + 5 + … = n² and 1 + 2 + … = n(n + 1)/2
   (drawn by study-visual.js). place(), rows() and KIT come from tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s, w) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="${w || 700}" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const lq = (svg, name) => svg.replace("<text ", `<text data-lq="${name}" `);
const RM = "@media (prefers-reduced-motion:reduce){";

// L1 — the families, one inside the next
const FAM = [["Real numbers", 10, 10, 640, 285, "var(--sunk)"], ["Rational", 25, 40, 435, 240, "var(--blue-bg)"], ["Integers", 40, 75, 305, 190, "var(--good-bg)"],
  ["Whole numbers", 55, 110, 205, 140, "var(--warn-bg)"], ["Natural", 70, 145, 120, 90, "var(--accent-bg)"]];
const NS = `<svg class="dg" viewBox="0 0 660 305" role="img" aria-label="Natural numbers inside whole numbers inside integers inside rational numbers, all inside the real numbers">
  ${FAM.map(([n, x, y, w, h, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${c}" stroke="var(--rule)"/>` + lq(T(x + 12, y + 20, n, "var(--ink)", "start", 13), n)).join("")}
  <rect x="475" y="40" width="160" height="240" rx="14" fill="var(--bad-bg)" stroke="var(--rule)"/>${lq(T(487, 60, "Irrational", "var(--ink)", "start", 13), "Irrational")}
  ${T(130, 200, "1, 2, 3 …", "var(--ink)", "middle", 13, 500)}${T(225, 200, "0", "var(--ink)", "middle", 15, 500)}
  ${T(302, 195, "−1, −7", "var(--ink)", "middle", 13, 500)}${T(402, 180, "½, −¾", "var(--ink)", "middle", 13, 500)}${T(402, 202, "0.75, 0.3̄", "var(--ink)", "middle", 13, 500)}
  ${T(555, 150, "√2, √3, π, e", "var(--ink)", "middle", 13, 500)}${T(555, 175, "0.1010010001…", "var(--ink2)", "middle", 11, 500)}
  ${T(555, 230, "never ends,", "var(--ink2)", "middle", 11, 500)}${T(555, 245, "never repeats", "var(--ink2)", "middle", 11, 500)}
  ${T(242, 272, "p/q with q ≠ 0: the decimal ends or repeats", "var(--ink2)", "middle", 11, 500)}</svg>`;
place("L1", "The family tree at a glance", KIT.fig("Each family sits inside the next", NS,
  "Every natural number is whole, every whole number is an integer, every integer is rational (7 = 7/1). Rational and irrational together make the real numbers; nothing is both."));

// L1 — the sieve: multiples of 2, 3, 5 and 7 drop out in turn; what is left (25 numbers) is prime
const spf = n => { for (let p = 2; p * p <= n; p++) if (n % p === 0) return p; return n; };
const SC = { 2: "hsla(212,75%,55%,.42)", 3: "hsla(135,55%,45%,.42)", 5: "hsla(42,95%,52%,.5)", 7: "hsla(330,70%,58%,.42)" }, SD = { 2: 0.4, 3: 1.6, 5: 2.8, 7: 4 };
let cells = "", primes = 0;
for (let n = 1; n <= 100; n++) {
  const x = 12 + ((n - 1) % 10) * 36, y = 12 + Math.floor((n - 1) / 10) * 34, p = spf(n), prime = n > 1 && p === n;
  if (prime) primes++;
  cells += `<rect x="${x}" y="${y}" width="33" height="31" rx="5" fill="var(--sheet)" stroke="var(--rule)"/>` +
    (n === 1 ? `<rect x="${x}" y="${y}" width="33" height="31" rx="5" fill="var(--sunk)"/>` :
     prime ? `<rect x="${x}" y="${y}" width="33" height="31" rx="5" fill="var(--accent)" class="svp" style="animation-delay:${5.2 + (n % 7) * 0.05}s"/>` :
     `<g class="svc" style="animation-delay:${SD[p] + (n % 10) * 0.04}s"><rect x="${x}" y="${y}" width="33" height="31" rx="5" fill="${SC[p]}"/><line x1="${x + 5}" y1="${y + 26}" x2="${x + 28}" y2="${y + 5}" stroke="var(--ink2)" stroke-opacity=".45" stroke-width="1.5"/></g>`) +
    `<text x="${x + 16.5}" y="${y + 20}" text-anchor="middle" font-size="12.5" font-weight="${prime ? 800 : 500}" class="${prime ? "svt" : ""}" style="animation-delay:${5.2 + (n % 7) * 0.05}s">${n}</text>`;
}
if (primes !== 25) fail("number-system: the sieve found " + primes + " primes");
const SV = `<svg class="dg" viewBox="0 0 660 360" role="img" aria-label="Sieve of Eratosthenes from 1 to 100">${cells}
  ${[["2", "multiples of 2 (after 2)"], ["3", "multiples of 3 left"], ["5", "multiples of 5 left"], ["7", "multiples of 7 left"]].map(([p, t], i) =>
    `<rect x="392" y="${22 + i * 38}" width="26" height="26" rx="5" fill="${SC[p]}" stroke="var(--rule)"/>` + T(428, 40 + i * 38, "cross out " + t, "var(--ink)", "start", 12, 500)).join("")}
  <rect x="392" y="174" width="26" height="26" rx="5" fill="var(--accent)"/>${T(428, 192, "left over: the 25 primes", "var(--ink)", "start", 12)}
  ${T(392, 240, "Stop at 7: the next prime, 11, has", "var(--ink2)", "start", 11.5, 500)}${T(392, 256, "11² = 121 > 100, so every composite", "var(--ink2)", "start", 11.5, 500)}
  ${T(392, 272, "up to 100 is already crossed out.", "var(--ink2)", "start", 11.5, 500)}${T(392, 304, "1 is neither prime nor composite.", "var(--ink2)", "start", 11.5, 500)}
  <style>.svc,.svp{animation:svin .45s ease-out both}.svt{animation:svw .45s ease-out both}@keyframes svin{from{opacity:0}to{opacity:1}}@keyframes svw{from{fill:var(--ink)}to{fill:#fff}}
  .svt{fill:#fff}${RM}.svc,.svp,.svt{animation:none}}</style></svg>`;
place("L1", "Prime facts SSC repeats", KIT.fig("Sieve of Eratosthenes, 1 to 100", SV,
  "Watch the multiples of 2, then 3, 5 and 7 drop out. The 25 primes up to 100 are what remains: 4 below 10, 21 from 10 to 100 — and 2 is the only even one."));

// L2 — unit-digit cycles as wheels: the power's remainder on division by 4 picks the spoke (remainder 0 → the 4th)
const CY = rows("L2", "Cyclicity of every digit").filter(r => r[2] === "4").map(r => [r[0], r[1].split(", ")]);
if (CY.length !== 4) fail("number-system: expected four digits with cycle 4");
const wheel = ([d, seq], i) => { const cx = 82 + i * 165, cy = 100, R = 44, pos = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  return `<circle cx="${cx}" cy="${cy}" r="${R}" fill="var(--sheet)" stroke="var(--rule)" stroke-width="2"/>` +
    `<g class="cyw" style="transform-origin:${cx}px ${cy}px;animation-delay:${i * .25}s"><path d="M${cx} ${cy} L${cx} ${cy - R + 4}" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/></g>` +
    `<circle cx="${cx}" cy="${cy}" r="16" fill="var(--accent)"/>` + T(cx, cy + 6, d, "#fff", "middle", 17) +
    seq.map((u, k) => { const [ux, uy] = pos[k], x = cx + ux * (R + 16), y = cy + uy * (R + 16);
      return `<circle cx="${x}" cy="${y}" r="15" fill="var(--blue-bg)" stroke="var(--blue)"/>` + T(x, y + 5, u, "var(--ink)", "middle", 14); }).join("") +
    T(cx, 200, "power ÷ 4 leaves", "var(--ink2)", "middle", 10.5, 500) + T(cx, 218, "1 · 2 · 3 · 0", "var(--ink2)", "middle", 12, 600) +
    T(cx, 238, "→ " + seq.join(" · "), "var(--accent)", "middle", 13); };
const CW = `<svg class="dg" viewBox="0 0 660 250" role="img" aria-label="The unit-digit cycles of 2, 3, 7 and 8 as wheels">${CY.map(wheel).join("")}
  <style>.cyw{animation:cyturn 4s steps(4) infinite}@keyframes cyturn{from{transform:rotate(0)}to{transform:rotate(360deg)}}${RM}.cyw{animation:none}}</style></svg>`;
place("L2", "Cyclicity of every digit", KIT.fig("Each cycle is a wheel of four", CW,
  "Divide the power by 4 and count that many places clockwise from the top (remainder 0 means the 4th). 7⁹⁵: 95 ÷ 4 leaves 3 → 7, 9, <b>3</b> — the unit digit is 3. Digits 0, 1, 5 and 6 never move; 4 and 9 swing between two."));

// L3 — a factor tree for 360, and all its factors laid out by exponent
const FT = [[360, 2], [180, 2], [90, 2], [45, 3], [15, 3]];
let tree = "";
FT.forEach(([n, p], i) => { const x = 60 + i * 30, y = 30 + i * 46, last = i === FT.length - 1;
  tree += `<line x1="${x}" y1="${y}" x2="${x - 26}" y2="${y + 46}" stroke="var(--ink2)"/><line x1="${x}" y1="${y}" x2="${x + 30}" y2="${y + 46}" stroke="var(--ink2)"/>` +
    `<circle cx="${x}" cy="${y}" r="17" fill="var(--sheet)" stroke="var(--rule)"/>` + T(x, y + 4.5, n, "var(--ink)", "middle", 12) +
    `<circle cx="${x - 26}" cy="${y + 46}" r="14" fill="var(--accent)"/>` + T(x - 26, y + 50.5, p, "#fff", "middle", 13) +
    (last ? `<circle cx="${x + 30}" cy="${y + 46}" r="14" fill="var(--accent)"/>` + T(x + 30, y + 50.5, n / p, "#fff", "middle", 13) : ""); });
const grid = (f5, y0) => { let g = T(262, y0 - 8, f5 === 1 ? "× 5⁰" : "× 5¹", "var(--accent)", "start", 12);
  ["2⁰", "2¹", "2²", "2³"].forEach((h, c) => { g += T(310 + c * 46 + 20, y0 + 10, h, "var(--ink2)", "middle", 10.5, 600); });
  ["3⁰", "3¹", "3²"].forEach((h, r) => { g += T(290, y0 + 34 + r * 28, h, "var(--ink2)", "middle", 10.5, 600);
    for (let c = 0; c < 4; c++) g += `<rect x="${310 + c * 46}" y="${y0 + 16 + r * 28}" width="42" height="25" rx="5" fill="${f5 === 1 ? "var(--blue-bg)" : "var(--good-bg)"}" stroke="var(--rule)"/>` +
      T(310 + c * 46 + 21, y0 + 33 + r * 28, (2 ** c) * (3 ** r) * f5, "var(--ink)", "middle", 12, 600); });
  return g; };
const FG = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="Factor tree of 360 and its 24 factors">${tree}
  ${T(30, 292, "360 = 2³ × 3² × 5¹", "var(--ink)", "start", 14)}${grid(1, 30)}${grid(5, 160)}
  ${T(580, 120, "4 × 3 × 2", "var(--accent)", "middle", 15)}${T(580, 142, "= 24 factors", "var(--ink)", "middle", 13)}
  ${T(580, 182, "4 choices of 2", "var(--ink2)", "middle", 11, 500)}${T(580, 198, "3 choices of 3", "var(--ink2)", "middle", 11, 500)}${T(580, 214, "2 choices of 5", "var(--ink2)", "middle", 11, 500)}</svg>`;
place("L3", "Counting factors", KIT.fig("Why (p + 1)(q + 1)(r + 1) counts the factors", FG,
  "Every factor of 360 picks a power of 2 (0 to 3), of 3 (0 to 2) and of 5 (0 or 1): 4 × 3 × 2 = 24 ways, and the two grids show all 24."));

// L9 — Legendre: keep dividing by the prime, add the quotients
const ladder = (x0, n, p, title) => { let q = n, k = 0, s = "", parts = [];
  s += T(x0, 26, title, "var(--ink)", "start", 13);
  while (q >= p) { const y = 52 + k * 34, nq = Math.floor(q / p);
    s += `<g class="lgr" style="animation-delay:${k * .6}s">` + T(x0 + 10, y + 18, p, "var(--ink2)", "middle", 14) + `<path d="M${x0 + 22} ${y} V${y + 26} H${x0 + 100}" fill="none" stroke="var(--ink2)" stroke-width="1.5"/>` +
      T(x0 + 32, y + 18, q, "var(--ink)", "start", 14, 600) + T(x0 + 120, y + 18, "→ " + nq, "var(--accent)", "start", 13) + "</g>";
    parts.push(nq); q = nq; k++; }
  s += T(x0 + 32, 52 + k * 34 + 18, q, "var(--ink2)", "start", 14, 500);
  const tot = parts.reduce((a, b) => a + b, 0);
  s += `<g class="lgr" style="animation-delay:${k * .6}s">` + T(x0, 52 + k * 34 + 56, parts.join(" + ") + " = " + tot, "var(--accent)", "start", 15) + "</g>";
  return [s, tot, 52 + k * 34 + 70]; };
const [l1, z100, h1] = ladder(30, 100, 5, "Zeros at the end of 100!"), [l2, t50, h2] = ladder(350, 50, 2, "Power of 2 in 50!");
if (z100 !== 24 || t50 !== 47) fail("number-system: Legendre sums are off");
const LG = `<svg class="dg" viewBox="0 0 660 ${Math.max(h1, h2) + 10}" role="img" aria-label="Division ladders for the power of a prime in a factorial">${l1}${l2}
  <style>.lgr{animation:lgin .5s ease-out both}@keyframes lgin{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}${RM}.lgr{animation:none}}</style></svg>`;
place("L9", "Highest power of a prime p in n!", KIT.fig("Divide, divide again, add", LG,
  "Divide by the prime, then divide the answer again, until it falls below the prime; the sum of the quotients is the power. For zeros, use 5: 100! ends in 24 zeros."));

// L12 — 45 into binary: divide by 2, read the remainders upward
let q = 45, steps = [];
while (q > 0) { steps.push([q, Math.floor(q / 2), q % 2]); q = Math.floor(q / 2); }
const bits = steps.map(s => s[2]).reverse().join("");
if (parseInt(bits, 2) !== 45) fail("number-system: binary ladder is off");
const BC = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="Converting 45 into binary by repeated division">
  <defs><marker id="bcup" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="var(--accent)"/></marker></defs>
  ${steps.map(([n, nq, r], i) => { const y = 30 + i * 38; return T(40, y + 18, "2", "var(--ink2)", "middle", 14) + `<path d="M52 ${y} V${y + 26} H130" fill="none" stroke="var(--ink2)" stroke-width="1.5"/>` +
    T(64, y + 18, n, "var(--ink)", "start", 14, 600) + T(150, y + 18, "remainder", "var(--ink2)", "start", 11, 500) +
    `<circle cx="232" cy="${y + 13}" r="13" fill="${r ? "var(--accent)" : "var(--sunk)"}"/>` + T(232, y + 18, r, r ? "#fff" : "var(--ink)", "middle", 14); }).join("")}
  ${T(64, 30 + steps.length * 38 + 18, "0", "var(--ink2)", "start", 14, 500)}
  <path d="M262 ${30 + (steps.length - 1) * 38 + 18} V36" stroke="var(--accent)" stroke-width="3" marker-end="url(#bcup)"/>${T(272, 150, "read up", "var(--accent)", "start", 12)}
  ${T(360, 50, "45 = " + bits + "₂", "var(--ink)", "start", 18)}
  ${[...bits].map((b, i) => { const v = 2 ** (bits.length - 1 - i), x = 360 + i * 46; return `<rect x="${x}" y="90" width="40" height="40" rx="7" fill="${b === "1" ? "var(--accent)" : "var(--sunk)"}"/>` +
    T(x + 20, 117, b, b === "1" ? "#fff" : "var(--ink)", "middle", 18) + T(x + 20, 150, v, "var(--ink2)", "middle", 12, 600); }).join("")}
  ${T(360, 190, "Check: " + [...bits].map((b, i) => b === "1" ? 2 ** (bits.length - 1 - i) : 0).filter(Boolean).join(" + ") + " = 45", "var(--ink)", "start", 13)}
  ${T(360, 230, "Octal: group 3 bits → 101 101 = 55₈", "var(--ink2)", "start", 12, 500)}${T(360, 252, "Hex: group 4 bits → 0010 1101 = 2D₁₆", "var(--ink2)", "start", 12, 500)}</svg>`;
place("L12", "How to convert", KIT.fig("Decimal → binary, and back", BC,
  "Keep dividing by the base and write the remainders; read them from the bottom up. To go back, add the place values where the digit is 1."));

// L13 — the pictures behind two standard sums
const N = 5, U = 30;
let odd = "", tri = "";
for (let k = N; k >= 1; k--) odd += `<rect x="30" y="${40 + (N - k) * 0}" width="${k * U}" height="${k * U}" fill="${["hsla(20,85%,55%,.6)", "hsla(212,75%,55%,.45)", "hsla(135,55%,45%,.42)", "hsla(42,95%,52%,.5)", "hsla(330,70%,58%,.38)"][k - 1]}" stroke="var(--rule)"/>`;
for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) { const k = Math.max(r, c) + 1; if (r === k - 1 && c === k - 1) odd += T(30 + c * U + U / 2, 40 + r * U + 19, 2 * k - 1, "var(--ink2)", "middle", 11, 600); }
for (let r = 0; r < N; r++) for (let c = 0; c <= N; c++) { const mine = c <= r; tri += `<rect x="${380 + c * U}" y="${40 + r * U}" width="${U - 2}" height="${U - 2}" rx="4" fill="${mine ? "var(--accent)" : "var(--blue-bg)"}" stroke="var(--rule)"/>`; }
const SM = `<svg class="dg" viewBox="0 0 660 270" role="img" aria-label="Odd numbers build squares; two staircases make a rectangle">${odd}
  ${T(30, 28, "1 + 3 + 5 + 7 + 9 = 5²", "var(--ink)", "start", 14)}${T(30, 220, "each odd number is one more L", "var(--ink2)", "start", 11.5, 500)}${T(30, 238, "1 + 3 + … + (2n − 1) = n²", "var(--accent)", "start", 13)}
  ${tri}${T(380, 28, "1 + 2 + 3 + 4 + 5 = 15", "var(--ink)", "start", 14)}
  ${T(380, 220, "two staircases fill a 5 × 6 box: 30 ÷ 2 = 15", "var(--ink2)", "start", 11.5, 500)}${T(380, 238, "1 + 2 + … + n = n(n + 1)/2", "var(--accent)", "start", 13)}</svg>`;
place("L13", "Standard sums", KIT.fig("Two sums you can see", SM,
  "Add the next odd number as an L around the square and the square grows by one side. Put two copies of 1 + 2 + … + n together and they make an n × (n + 1) rectangle, so one copy is half of it."));

VISUAL = { mode: true, VIS: { key: "numbersystem_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

/* BNS, BNSS & BSA — old and new laws by number of sections, the procedure's deadlines on one time line, the custody ladder
   and old → new section numbers (drawn by study-visual.js). place(), rows() and KIT come from tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const NT = rows("L2", "The number table");
const NB = `<svg class="dg" viewBox="0 0 660 230" role="img" aria-label="Sections in the old and new criminal laws">
  ${NT.map((r, i) => { const old = parseInt(r[4], 10), now = parseInt(r[2], 10), y = 20 + i * 66, k = 0.8;
    return T(10, y + 14, r[1], "#7a7a7a", "start", 11) + `<rect x="150" y="${y}" width="${old * k}" height="20" rx="4" fill="#a9a9a9"/>${T(156 + old * k, y + 15, old + " sections", "#7a7a7a", "start", 11)}` +
      T(10, y + 40, r[0], "#2f6db5", "start", 12) + `<rect x="150" y="${y + 26}" width="${now * k}" height="20" rx="4" fill="#2f6db5" class="anim-in" style="animation-delay:${i * 120}ms"/>${T(156 + now * k, y + 41, now + " sections", "#2f6db5", "start", 11)}`; }).join("")}</svg>`;
place("L2", "The number table", KIT.fig("Old laws vs new: number of sections", NB, "In force from 1 July 2024. BNS is shorter than the IPC (358 vs 511); BNSS is longer than the CrPC (531 vs 484); BSA is a little longer than the Evidence Act (170 vs 167)."));
const TL = rows("L11", "Timeline table").filter(r => /hour|day/.test(r[0]));
const days = s => { const m = s.match(/([\d.]+)/g).map(Number), d = m[m.length - 1]; return /hour/.test(s) ? d / 24 : d; };
const lx = d => 30 + Math.log10(d * 24) / Math.log10(120 * 24) * 610;
const TLS = `<svg class="dg" viewBox="0 0 680 ${70 + TL.length * 22}" role="img" aria-label="BNSS deadlines on a time line">
  <line x1="30" y1="40" x2="650" y2="40" stroke="var(--ink)" stroke-width="2"/>${[["1 h", 1 / 24], ["1 day", 1], ["1 week", 7], ["1 month", 30], ["3 months", 90]].map(([t, d]) => `<line x1="${lx(d)}" y1="35" x2="${lx(d)}" y2="45" stroke="var(--ink)"/><text x="${lx(d)}" y="28" text-anchor="middle" font-size="10" class="mut">${t}</text>`).join("")}
  ${TL.map((r, i) => { const x = lx(days(r[0])), y = 64 + i * 22, right = x < 380; return `<circle cx="${x}" cy="40" r="4" fill="hsl(${i * 30},55%,45%)"/><line x1="${x}" y1="44" x2="${x}" y2="${y - 4}" stroke="hsl(${i * 30},55%,45%)" stroke-opacity=".5"/>` +
    `<text x="${x + (right ? 5 : -5)}" y="${y}" text-anchor="${right ? "start" : "end"}" font-size="10.5"><tspan font-weight="800" style="fill:hsl(${i * 30},55%,38%)">${r[0]}</tspan> · ${(t => t.length > 52 ? t.slice(0, t.lastIndexOf(" ", 52)) + "…" : t)(r[1].split(/;| \(/)[0])}</text>`; }).join("")}</svg>`;
place("L11", "Timeline table", KIT.fig("BNSS deadlines on one line", TLS, "From 24 hours (produce the arrested person before a magistrate) to 120 days (sanction to prosecute a public servant). Log scale: each step is longer than the last.", 600));
place("L9", "Custody and default bail", { k: "cards", title: "The custody ladder", rows: rows("L9", "Custody").map((r, i) => [r[0], "", r[1], ["⏱️", "🚔", "🗓️", "⏳", "🔓"][i] || "•"]) });
place("L7", "Old → new", { k: "cards", title: "Old IPC section → new BNS section", rows: rows("L7", "Old → new").map(r => [r[1].replace(/^→\s*/, ""), r[0].replace(/^IPC (\S+) /, "IPC $1 · "), "", "⚖️"]) });

VISUAL = { mode: true, VIS: { key: "bns_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

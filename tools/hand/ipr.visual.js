/* IPR & Plans — the three economic systems, IPR 1948's four categories, the shrinking public-sector list, the 2nd Plan's
   steel plants on the map, every plan's target against what it achieved, and the plans in time (drawn by study-visual.js).
   place(), rows() and KIT come from tools/workbook/apply-hand.js. */
const pct = s => (String(s).match(/[\d.]+(?=%)/g) || []).map(Number);

place("L1", "Three economic systems", { k: "cards", title: "Three economic systems", rows: rows("L1", "Three economic systems").map((r, i) => [r[0], "", r[1], ["🏛️", "🏭", "⚖️"][i]]) });
place("L3", "The four categories", { k: "cards", title: "IPR 1948: S · B · I · O", rows: rows("L3", "The four categories").map((r, i) => [r[0] + " — " + r[1].split(" — ")[0], r[2] + " industries", r[3], ["🛡️", "🏗️", "⚙️", "🛍️"][i]]) });
place("L6", "Public-sector reserved", { k: "bars", title: "Industries reserved for the public sector", unit: "industries", left: 90, hi: 1, sort: false,
  rows: [["1956", 17, "Schedule A"], ["1991", 8, "New Industrial Policy"], ["2001", 3, "defence, atomic energy, railways"], ["Today", 2, "atomic energy, railway operations"]],
  cap: "Liberalisation in one chart: 17 → 8 → 3 → 2." });
place("L8", "2nd Plan steel plants", { k: "mapfig", title: "The 2nd Plan's three steel plants", vb: "200 200 220 160",
  pins: [["Bhilai", 81.38, 21.21, "USSR", "l"], ["Rourkela", 84.85, 22.25, "West Germany"], ["Durgapur", 87.3, 23.55, "UK"]], cap: "All three public-sector plants came up in 1959–62 with foreign help." });
const PL = rows("L8", "First three").concat(rows("L9", "Plans 4"), rows("L10", "Plans 8")).map(r => [r[0], pct(r[r.length - 1])]).filter(r => r[1].length >= 2);
const PG = `<svg class="dg" viewBox="0 0 680 260" role="img" aria-label="Growth target and achievement of each Five Year Plan">
  ${[0, 2, 4, 6, 8, 10].map(v => `<line x1="40" y1="${220 - v * 19}" x2="670" y2="${220 - v * 19}" class="grid"/><text x="34" y="${224 - v * 19}" text-anchor="end" font-size="10" class="mut">${v}%</text>`).join("")}
  ${PL.map(([n, [t, a]], i) => { const x = 50 + i * 52; return `<rect x="${x}" y="${220 - t * 19}" width="20" height="${t * 19}" rx="3" fill="#a9b8cf"/><rect x="${x + 22}" y="${220 - a * 19}" width="20" height="${a * 19}" rx="3" fill="${a >= t ? "#2f8f4e" : "#c0503a"}" class="anim-in" style="animation-delay:${i * 70}ms"/>` +
    `<text x="${x + 21}" y="238" text-anchor="middle" font-size="11" class="b">${n}</text>`; }).join("")}
  <rect x="50" y="248" width="12" height="10" fill="#a9b8cf"/><text x="66" y="257" font-size="10.5" class="mut">target</text><rect x="120" y="248" width="12" height="10" fill="#2f8f4e"/><text x="136" y="257" font-size="10.5" class="mut">met</text>
  <rect x="170" y="248" width="12" height="10" fill="#c0503a"/><text x="186" y="257" font-size="10.5" class="mut">missed</text></svg>`;
place("L10", "Plans 8", KIT.fig("Each plan: growth target vs achieved", PG, "Green bars beat the target; red ones fell short. The 1st, 5th, 6th, 7th and 8th Plans beat their targets; the 3rd was the worst."));

// ---- added: the 1956 schedules, before and after 1991, plans 4–7 with the breaks, GDP three ways, the five sectors ----
const vT = (x, y, t, c, a, sz) => `<text x="${x}" y="${y}" font-size="${sz || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const vM = (x, y, t, a, sz) => `<text x="${x}" y="${y}" font-size="${sz || 10.5}" text-anchor="${a || "start"}" class="mut">${t}</text>`;
const vW = (x, y, t, sz, b) => `<text x="${x}" y="${y}" font-size="${sz || 10.5}"${b ? ' font-weight="700"' : ""} text-anchor="middle" style="fill:#fff;opacity:.96">${t}</text>`;
const vE = t => String(t).replace(/&(?!amp;|lt;|gt;)/g, "&amp;").replace(/</g, "&lt;");
const vWrap = (t, n) => { const out = [""]; String(t).split(" ").forEach(w => { if ((out[out.length - 1] + " " + w).trim().length > n) out.push(w); else out[out.length - 1] = (out[out.length - 1] + " " + w).trim(); }); return out; };
const VC = ["#2f6db5", "#2f8f4e", "#a8780a", "#7d4fb5", "#c0392b", "#1a8a8a", "#5b6470"];
const yr = s => { const m = String(s).match(/\b(1[89]|20)\d\d\b/); return m ? +m[0] : 0; };
const cut = (t, n) => { t = String(t).split(/ — |; /)[0].replace(/\.$/, ""); return t.length > n ? t.slice(0, n - 1).replace(/\s+\S*$/, "") + "…" : t; };
/** Two things side by side, from a table whose rows are [point, left, right]. */
const versus = (label, a, b, rs, ca, cb) => `<svg class="dg" viewBox="0 0 640 ${62 + rs.length * 30}" role="img" aria-label="${label}">
  <rect x="150" y="6" width="236" height="40" rx="10" fill="${ca || VC[0]}"/>${vW(268, 31, vE(a), 13, 1)}<rect x="396" y="6" width="236" height="40" rx="10" fill="${cb || VC[4]}"/>${vW(514, 31, vE(b), 13, 1)}
  ${rs.map((r, i) => `<rect x="8" y="${54 + i * 30}" width="624" height="26" rx="6" class="${i % 2 ? "card" : "s5"}"/>${vT(16, 72 + i * 30, vE(cut(r[0], 22)), "var(--ink)", "start", 11.5)}${vM(268, 72 + i * 30, vE(cut(r[1], 47)), "middle", 10.5)}${vM(514, 72 + i * 30, vE(cut(r[2], 47)), "middle", 10.5)}${r[1] === r[2] ? "" : `<circle cx="391" cy="${67 + i * 30}" r="3" fill="${VC[2]}"/>`}`).join("")}</svg>`;


const SC = rows("L4", "Schedules A");
place("L4", "Schedules A", { k: "cards", title: "IPR 1956: three schedules", rows: SC.map((r, i) => ["Schedule " + r[0], (r[1] === "rest" ? "all the rest" : r[1] + " industries"), cut(r[2].replace(/ \(.*\)$/, ""), 70), ["🏛️", "🤝", "🏭"][i] || ""]) });
place("L7", "Two phases", KIT.fig("Before and after 1991, side by side", versus("India's economy before and after 1991", "1947 – 1990", "After 1991", rows("L7", "Two phases"), VC[6], VC[1]), "Every row flips: from a state that owns and protects to a state that regulates and opens up."));
const P47 = rows("L9", "Plans 4 to 7").map(r => { const m = r[1].match(/(\d{4})\D+(\d{2,4})/); return [r[0] + " Plan", +m[1], +(m[2].length === 2 ? m[1].slice(0, 2) + m[2] : m[2]), VC[0], ""]; });
const BRK = rows("L9", "Three breaks").map(r => { const m = r[1].match(/(\d{4})\D+(\d{2,4})/); return [r[0], +m[1], +(m[2].length === 2 ? m[1].slice(0, 2) + m[2] : m[2]), VC[4], "break"]; });
if (P47.length !== 4 || BRK.length !== 3) fail("ipr L9: plans or breaks changed");
place("L9", "Three breaks", KIT.fig("Plans 4 to 7 and the three breaks", KIT.gantt("Plans four to seven with the breaks in planning", P47.concat(BRK).sort((x, y) => x[1] - y[1]), 1965, 1996, 5), "Blue bars are plans; red bars are the three breaks. The 5th Plan was cut short by a year, and the Rolling Plan filled the gap."));
place("L11", "Three ways to measure GDP", { k: "cards", title: "One GDP, three ways to count it", rows: rows("L11", "Three ways to measure GDP").map((r, i) => [r[0] + " method", ["what people earn", "what is produced", "what is spent"][i] || "", r[1], ["💰", "🏭", "🛒"][i] || ""]) });
place("L11", "Five sectors", { k: "cards", title: "Five sectors, from soil to boardroom", rows: rows("L11", "Five sectors").map((r, i) => [(i + 1) + " · " + r[0], r[1], r[2], ["🌾", "🏭", "🏦", "🔬", "👔"][i] || ""]) });

VISUAL = { mode: true, VIS: { key: "ipr_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

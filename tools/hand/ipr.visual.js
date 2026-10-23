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

VISUAL = { mode: true, VIS: { key: "ipr_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

/* Protected Areas — the biosphere reserves on the map, how a biosphere reserve is zoned, and when each joined UNESCO's network
   (drawn by study-visual.js). place(), rows() and GEO come from applyVisual in tools/workbook/lib.js. */
const BR_AT = { "Nilgiri": [76.6, 11.5], "Nanda Devi": [79.8, 30.4], "Nokrek": [90.3, 25.68], "Great Nicobar": [93.8, 7.0], "Gulf of Mannar": [79.0, 9.15],
  "Manas": [91.0, 26.7], "Sundarban": [88.9, 21.95], "Simlipal": [86.4, 21.8], "Dibru-Saikhowa": [95.4, 27.6], "Dihang-Dibang": [95.5, 28.6], "Pachmarhi": [78.43, 22.47],
  "Khangchendzonga": [88.3, 27.65], "Agasthyamalai": [77.25, 8.6], "Achanakmar-Amarkantak": [81.8, 22.6], "Great Rann of Kutch": [70.0, 23.9], "Cold Desert": [77.8, 32.3],
  "Seshachalam": [79.3, 13.7], "Panna": [80.0, 24.7] };
const BR = rows("P5", "The 18 biosphere reserves");
BR.forEach(r => { if (!BR_AT[r[0]]) fail("parks: no place for " + r[0]); });
place("P5", "The 18 biosphere reserves", { k: "mapfig", title: "The 18 biosphere reserves on the map",
  pins: BR.map((r, i) => [String(i + 1), BR_AT[r[0]][0], BR_AT[r[0]][1], r[0] + " — " + r[1], "n"]),
  facts: BR.map((r, i) => [`${i + 1} · ${r[0]}`, r[1] + " — " + r[2].replace(/\.$/, "")]),
  cap: "Numbered in the order they were set up, from Nilgiri (1986) to Panna (2011). Places are approximate centres." },
  { k: "info", title: "How a biosphere reserve is zoned", html: `<svg class="dg" viewBox="0 0 680 260" role="img" aria-label="Core, buffer and transition zones">
    <ellipse cx="230" cy="130" rx="210" ry="118" class="s1" stroke="var(--rule)"/><ellipse cx="230" cy="130" rx="140" ry="80" class="s2" stroke="var(--rule)"/><ellipse cx="230" cy="130" rx="70" ry="42" class="s4" stroke="var(--rule)"/>
    <text x="230" y="134" text-anchor="middle" font-size="14" class="b">Core</text><text x="230" y="70" text-anchor="middle" font-size="13" class="b">Buffer</text><text x="230" y="30" text-anchor="middle" font-size="13" class="b">Transition</text>
    <text x="470" y="70" font-size="13" class="b">Core</text><text x="470" y="88" font-size="11.5" class="mut">Strictly protected; no human activity —</text><text x="470" y="103" font-size="11.5" class="mut">often a national park.</text>
    <text x="470" y="135" font-size="13" class="b">Buffer</text><text x="470" y="153" font-size="11.5" class="mut">Research, education and limited use.</text>
    <text x="470" y="190" font-size="13" class="b">Transition</text><text x="470" y="208" font-size="11.5" class="mut">Villages, farms and sustainable use —</text><text x="470" y="223" font-size="11.5" class="mut">people live and work here.</text></svg>`,
    cap: "Under UNESCO's Man and the Biosphere (MAB) programme (1971). India's reserves are notified by the Centre; 13 of the 18 are in UNESCO's World Network." });
place("P5", "When they joined UNESCO", { k: "tlfig", title: "Joining UNESCO's World Network, year by year",
  rows: rows("P5", "When they joined UNESCO").map(r => [+r[1], r[0], ""]),
  cap: "Nilgiri was the first (2000); Cold Desert (2025) is the newest — the 13th Indian reserve in the network." });
// ---- added: laws in time, park against sanctuary, parks / sanctuaries / reserves / wetlands / heritage sites on the map, tigers by state, the Red List ladder ----

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

place("P1", "Laws and projects by year", { k: "tlfig", title: "Wildlife laws and projects, year by year", rows: rows("P1", "Laws and projects by year").map(r => [yr(r[1]), r[0], ""]), cap: "The Wildlife (Protection) Act (1972) came first; Project Tiger followed a year later." });
place("P1", "National park vs wildlife sanctuary", KIT.fig("National park and sanctuary, side by side", versus("National park compared with wildlife sanctuary", "National park", "Wildlife sanctuary", rows("P1", "National park vs wildlife sanctuary"), VC[1], VC[2]), "A national park is the stricter of the two: no grazing and no private rights inside it."));
place("P2", "National parks", KIT.stateMap("National parks on the map", rows("P2", "National parks"), { max: 2, cap: "Each state shows its best-known parks from the table. Use ＋ or ⛶ to zoom in." }));
place("P3", "Wildlife sanctuaries", KIT.stateMap("Wildlife sanctuaries on the map", rows("P3", "Wildlife sanctuaries"), { max: 2, cap: "Each state shows its sanctuaries from the table. Use ＋ or ⛶ to zoom in." }));
const TG = rows("P4", "Tiger numbers").find(r => /^Most tigers$/.test(r[0]));
if (!TG) fail("parks P4: no 'Most tigers' row");
const TGN = [...TG[1].matchAll(/([A-Z][A-Za-z ]+?) \((\d+)\)/g)].map(m => [m[1].replace(/^(then|and) /, "").trim(), +m[2], ""]);
if (TGN.length < 3) fail("parks P4: tiger numbers changed");
place("P4", "Tiger numbers", { k: "bars", title: "Tigers by state, 2022 census", unit: "tigers", left: 130, sort: false, hi: 1, rows: TGN });
place("P4", "Tiger reserves", KIT.stateMap("Tiger reserves on the map", rows("P4", "Tiger reserves"), { max: 3, cap: "Each state shows its tiger reserves from the table. Madhya Pradesh has the most. Use ＋ or ⛶ to zoom in." }));
place("P6", "Ramsar sites by state", KIT.stateMap("Ramsar wetlands on the map", rows("P6", "Ramsar sites by state"), { max: 2, cap: "Each state shows its Ramsar sites from the table. Tamil Nadu has the most. Use ＋ or ⛶ to zoom in." }));
place("P7", "World Heritage sites", KIT.stateMap("World Heritage sites on the map", rows("P7", "World Heritage sites"), { max: 2, cap: "Each state shows its World Heritage sites from the table. Use ＋ or ⛶ to zoom in." }));
// P8 — the Red List as a ladder
const RL = rows("P8", "IUCN Red List status"), RLS = ["Critically endangered", "Endangered", "Vulnerable", "Near threatened", "Least concern"], RLC = ["#b3261e", "#d9692a", "#c79a12", "#6f9a3a", "#2f8f4e"];
const RLG = RLS.map(s => RL.filter(r => r[1].toLowerCase() === s.toLowerCase()).map(r => r[0]));
if (!RLG[0].length || !RLG[1].length) fail("parks P8: Red List statuses changed");
const RLV = `<svg class="dg" viewBox="0 0 640 ${RLS.reduce((h, s, i) => h + 34 + Math.max(1, Math.ceil(RLG[i].length / 3)) * 18, 30)}" role="img" aria-label="IUCN Red List categories with Indian animals">
  ${(() => { let y = 6, o = ""; RLS.forEach((s, i) => { const n = Math.max(1, Math.ceil(RLG[i].length / 3)), h = 26 + n * 18; o += `<rect x="8" y="${y}" width="${200 - i * 0}" height="${h}" rx="10" fill="${RLC[i]}"/>${vW(108, y + h / 2 + 4, s, 12.5, 1)}<rect x="214" y="${y}" width="418" height="${h}" rx="10" class="card"/>` +
      (RLG[i].length ? RLG[i].map((a, k) => vM(226 + (k % 3) * 136, y + 22 + Math.floor(k / 3) * 18, vE(cut(a.replace(/ \(.*\)$/, ""), 22)), "start", 11)).join("") : vM(226, y + 22, "none in this lesson's table", "start", 10.5)); y += h + 6; });
    return o + vM(8, y + 12, "Most at risk at the top. “Threatened” means the top three: critically endangered, endangered and vulnerable.", "start", 11); })()}</svg>`;
place("P8", "IUCN Red List status", KIT.fig("The Red List as a ladder", RLV, "The IUCN (Gland, Switzerland) publishes the Red List. An animal moves down the ladder when its numbers recover: the Asiatic lion and the snow leopard both did."));

VISUAL = { mode: true, VIS: { key: "parks_photos_v1", word: "reserve", words: "reserves", search: "", ask: "", rows: [], tabs: [] } };

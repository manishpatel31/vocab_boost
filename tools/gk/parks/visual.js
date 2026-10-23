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
VISUAL = { mode: true, VIS: { key: "parks_photos_v1", word: "reserve", words: "reserves", search: "", ask: "", rows: [], tabs: [] } };

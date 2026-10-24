/* Tribes, Languages & Scripts — maps of the tribes in each region (numbered pins keyed to the lesson tables) and
   a classical-languages timeline (drawn by study-visual.js). Places are approximate homelands, not exact boundaries. */
const AT = {
  "Gaddi": [76.53, 32.44], "Kinnaura": [78.3, 31.6], "Lahaula": [77.0, 32.6], "Bakarwal": [74.8, 33.7], "Changpa": [78.6, 33.0],
  "Brokpa": [76.4, 34.6], "Jaunsari": [77.85, 30.75], "Raji (Ban Rawat)": [80.2, 29.6], "Mina": [76.5, 26.9], "Rathwa": [74.0, 22.3],
  "Kotwalia": [73.4, 21.0], "Madia Gond (Gadchiroli)": [80.2, 19.6], "Bharia": [78.7, 22.4], "Muria": [81.9, 19.4], "Abujh Maria": [81.0, 19.6],
  "Dandami Maria (Bison-horn Maria)": [81.35, 18.9],
  "Santhal": [87.25, 24.3], "Ho": [85.8, 22.55], "Munda": [85.3, 23.07], "Sauria Paharia": [87.6, 25.0], "Asur": [84.26, 23.48],
  "Dongria Kondh": [83.4, 19.6], "Bonda": [82.2, 18.3], "Juang": [85.6, 21.6], "Saora (Sora)": [84.1, 19.0], "Toto": [89.3, 26.85],
  "Angami": [94.1, 25.67], "Ao": [94.52, 26.32], "Konyak": [95.0, 26.75], "Sumi (Sema)": [94.52, 26.0], "Lotha": [94.27, 26.1],
  "Chakhesang": [94.47, 25.67], "Khasi": [91.88, 25.57], "Garo (A·chik)": [90.3, 25.5], "Jaintia (Pnar)": [92.2, 25.45], "Mizo": [92.72, 23.73],
  "Bodo": [90.27, 26.4], "Mishing": [94.2, 26.95], "Karbi": [93.43, 25.84], "Dimasa": [93.02, 25.17], "Apatani": [93.83, 27.55],
  "Nyishi": [93.4, 27.2], "Adi": [95.1, 28.1], "Monpa": [91.86, 27.59], "Galo": [94.6, 28.3], "Idu Mishmi": [95.9, 28.8],
  "Bhutia": [88.6, 27.33], "Lepcha": [88.5, 27.6], "Limbu": [88.2, 27.25], "Tangkhul Naga": [94.36, 25.1], "Tripuri": [91.4, 23.7], "Jamatia": [91.6, 23.35],
  "Great Andamanese": [92.78, 12.13], "Jarawa": [92.62, 11.85], "Onge": [92.55, 10.75], "Sentinelese": [92.23, 11.55], "Shompen": [93.8, 7.0], "Nicobarese": [92.75, 9.15]
};
const MAPS = [
  ["T2", "Tribes with one clear home", "Tribes of the north, west and centre", "60 40 260 350"],
  ["T3", "Tribes of the east and their homelands", "Tribal homelands of the east", "250 200 160 195"],
  ["T4", "Tribes of the North-East and their states", "Tribes of the North-East", "360 135 170 160"],
  ["T5", "The island tribes", "The island tribes", "430 490 70 130"]
];
MAPS.forEach(([L, table, name, vb]) => {
  const R = rows(L, table);
  R.forEach(r => { if (!AT[r[0]]) fail("tribes: no place for " + r[0]); });
  place(L, table, { k: "mapfig", title: `${name} on the map`, vb,
    pins: R.map((r, i) => [String(i + 1), AT[r[0]][0], AT[r[0]][1], r[0] + " — " + r[1], "n"]),
    facts: R.map((r, i) => [`${i + 1} · ${r[0]}`, r[1]]),
    cap: "Numbers match the table above. Places are approximate homelands. Use ＋ or ⛶ to zoom in." });
});
place("T7", "Classical languages and the year each was declared", { k: "tlfig", title: "Classical languages, year by year",
  rows: rows("T7", "Classical languages and the year each was declared").map(r => [+r[1], r[0], ""]),
  cap: "Tamil was first (2004); five were added together on 3 October 2024, making eleven." });
VISUAL = { mode: true, VIS: { key: "tribes_photos_v1", word: "tribe", words: "tribes", search: "", quiz: "tribe", ask: "In which state or UT do these people live:",
  rows: rows("T2", "Tribes with one clear home").map(r => [r[0], r[1], "Tribe", r[2], "T2"]).concat(rows("T4", "Tribes of the North-East").map(r => [r[0], r[1], "Tribe", r[2], "T4"])),
  tabs: [] } };

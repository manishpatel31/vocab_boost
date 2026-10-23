/* States & UTs — zonal councils coloured on the map, each region zoomed with its capitals, the high courts, languages,
   records and state animals and birds (drawn by study-visual.js). Places are approximate.
   place(), rows(), fail and KIT come from applyVisual in tools/workbook/lib.js. */
const CAP = { "Chandigarh": [76.78, 30.73], "Shimla": [77.17, 31.1], "Dharamshala": [76.32, 32.22], "Jaipur": [75.79, 26.91], "Lucknow": [80.95, 26.85], "Dehradun": [78.03, 30.32],
  "Gairsain": [79.29, 30.06], "Bhopal": [77.41, 23.26], "Raipur": [81.63, 21.25], "Patna": [85.14, 25.59], "Ranchi": [85.31, 23.34], "Bhubaneswar": [85.82, 20.3], "Kolkata": [88.36, 22.57],
  "Dispur": [91.79, 26.14], "Itanagar": [93.62, 27.08], "Imphal": [93.94, 24.82], "Shillong": [91.88, 25.57], "Aizawl": [92.72, 23.73], "Kohima": [94.11, 25.67], "Agartala": [91.28, 23.83],
  "Gangtok": [88.61, 27.33], "Gandhinagar": [72.64, 23.22], "Mumbai": [72.88, 19.08], "Nagpur": [79.09, 21.15], "Panaji": [73.83, 15.49], "Amaravati": [80.52, 16.51], "Kurnool": [78.04, 15.83],
  "Hyderabad": [78.49, 17.39], "Bengaluru": [77.59, 12.97], "Thiruvananthapuram": [76.94, 8.52], "Chennai": [80.27, 13.08], "New Delhi": [77.21, 28.61], "Srinagar": [74.8, 34.08],
  "Jammu": [74.86, 32.73], "Leh": [77.58, 34.15], "Kavaratti": [72.64, 10.57], "Sri Vijaya Puram": [92.73, 11.62], "Daman": [72.83, 20.42], "Puducherry": [79.81, 11.94],
  "Prayagraj": [81.85, 25.44], "Jabalpur": [79.94, 23.18], "Jodhpur": [73.02, 26.24], "Bilaspur": [82.14, 22.08], "Nainital": [79.46, 29.38], "Kochi": [76.27, 9.93], "Cuttack": [85.88, 20.46],
  "Ahmedabad": [72.57, 23.02], "Guwahati": [91.75, 26.18] };
const at = name => { const k = Object.keys(CAP).find(k => String(name).startsWith(k)); if (!k) fail("states: no place for " + name); return CAP[k]; };

// S1 — the zonal councils, coloured; the map's changes on a timeline
const ZC = { "Northern": ["#2f6db5", "PB HR HP RJ JK LA DL CH"], "Central": ["#c69214", "UP UT MP CT"], "Eastern": ["#2f8f4e", "BR JH OD WB"], "Western": ["#c0503a", "GJ MH GA DH"],
  "Southern": ["#7d4fb5", "AP TG KA KL TN PY"], "North Eastern Council": ["#1f8a8a", "AS AR MN ML MZ NL TR SK"] };
const fill = {}; Object.values(ZC).forEach(([c, ids]) => ids.split(" ").forEach(id => { fill[id] = c; }));
place("S1", "Zonal councils", { k: "mapfig", title: "The zonal councils", fill, legend: Object.entries(ZC).map(([n, [c]]) => [c, n === "North Eastern Council" ? n : n + " Zonal Council"]),
  cap: "Five zonal councils were set up by the States Reorganisation Act, 1956; the Union Home Minister chairs each. The North Eastern Council (1971) is a separate statutory body; Sikkim joined it in 2002. The island UTs belong to none." });
place("S1", "Milestones by year", { k: "tlfig", title: "How the map changed", rows: rows("S1", "Milestones by year").map(r => [parseInt(r[1], 10), r[0].replace(/ — .*$/, ""), ""]).filter(r => r[0]),
  cap: "From Andhra State (1953) to Telangana (2014) and the two UTs of Jammu and Kashmir and Ladakh (2019)." });

// S2–S8 — each region zoomed, its states coloured and its capitals pinned
const region = (L, ids, vb, color, title, extra) => { const R = rows(L, L === "S8" ? "UT capitals" : "Capitals"), by = {};
  R.forEach(r => { const c = r[1].replace(/ \(.*\)$/, ""); (by[c] = by[c] || []).push(r[0]); });
  const f = {}; ids.split(" ").forEach(id => { f[id] = color; });
  return { k: "mapfig", title, vb, fill: f, pins: Object.entries(by).map(([c, st]) => [c, ...at(c), st.join(" · "), (extra || {})[c] || ""]),
    cap: "Coloured: the states in this lesson. Each pin is a capital with its state below it. Use ＋ or ⛶ for a closer look." }; };
place("S2", "Capitals", region("S2", "PB HR HP RJ", "0 60 240 260", "#cfe0f5", "The north and its capitals", { "Dharamshala": "l" }));
place("S3", "Capitals", region("S3", "UP UT MP CT", "80 95 270 310", "#f3e2b4", "The centre and its capitals", { "Bhopal": "l", "Dehradun": "l" }));
place("S4", "Capitals", region("S4", "BR JH OD WB", "215 170 230 240", "#cfe9d6", "The east and its capitals", { "Ranchi": "l", "Bhubaneswar": "l" }));
place("S5", "Capitals", region("S5", "AS AR MN ML MZ NL TR SK", "325 130 230 190", "#cdeaea", "The North-East and its capitals", { "Gangtok": "l", "Shillong": "l", "Agartala": "l", "Dispur": "l" }));
place("S6", "Capitals", region("S6", "GJ MH GA", "0 230 260 230", "#f3d3c9", "The west and its capitals", { "Panaji": "l" }));
place("S7", "Capitals", region("S7", "AP TG KA KL TN", "80 330 250 270", "#e0d4f0", "The south and its capitals", { "Kurnool": "l", "Bengaluru": "l", "Thiruvananthapuram": "l" }));
place("S8", "UT capitals", Object.assign(region("S8", "DL JK LA LD AN DH CH PY", undefined, "#f5d7a8", "The eight Union Territories", { "Daman": "l", "Kavaratti": "l", "Srinagar": "l" }),
  { pins: rows("S8", "UT capitals").map(r => [r[1], ...at(r[1]), r[0].replace(/^Dadra and Nagar Haveli and Daman and Diu$/, "DNH and Daman & Diu").replace(/ Islands$/, ""), ["Daman", "Kavaratti", "Srinagar", "Jammu"].includes(r[1]) ? "l" : ""])
    .concat([["Chandigarh", 76.78, 30.73, "Chandigarh (UT)"], ["Puducherry", 79.81, 11.94, "Puducherry (UT)"]]),
    cap: "Each pin is a UT capital. Jammu and Kashmir has two (Srinagar in summer, Jammu in winter); Delhi, Puducherry and J&K have elected legislatures." }));

// S5 and S7 — the regions in pictures
place("S5", "Which state is it", KIT.photos("The North-East in pictures", [["Tawang Monastery", "Arunachal Pradesh"], ["Loktak Lake", "Manipur · floating phumdis"], ["Living root bridge", "Meghalaya"],
  ["Kaziranga National Park", "Assam"], ["Hornbill Festival", "Nagaland"], ["Ujjayanta Palace", "Tripura"], ["Kangchenjunga", "Sikkim"], ["Mizoram", "The hills of Mizoram"]]));

// S9 — the high courts and the languages
const HC = rows("S9", "Where each high court");
const seats = {}; HC.forEach(r => { const c = r[1]; (seats[c] = seats[c] || []).push(r[0]); });
place("S9", "Where each high court", { k: "mapfig", title: "Where the high courts sit",
  pins: Object.entries(seats).map(([c, st], i) => [String(i + 1), ...at(c), c + " — " + st.join(", "), "n"]),
  facts: Object.entries(seats).map(([c, st], i) => [`${i + 1} · ${c}`, st.join(", ")]),
  cap: "Several high courts sit outside the capital — Prayagraj, Jabalpur, Jodhpur, Bilaspur, Nainital, Kochi, Cuttack. Kolkata also serves the Andaman and Nicobar Islands; Chennai serves Puducherry." });
const LANG = { English: "#8a8a8a", Hindi: "#e0a040", Konkani: "#c0503a", Odia: "#2f8f4e", Malayalam: "#1f8a8a", Tamil: "#c0392b", Kannada: "#d4a017", Telugu: "#7d4fb5", Gujarati: "#e88aa6",
  Marathi: "#a9805a", Bengali: "#2f6db5", Assamese: "#5aa85a", "Manipuri (Meitei)": "#b55a8a", Punjabi: "#e07b39" };
const lf = {}, LR = rows("S9", "Official languages").concat([["Uttar Pradesh", "Hindi"], ["Bihar", "Hindi"], ["Madhya Pradesh", "Hindi"], ["Rajasthan", "Hindi"], ["Chhattisgarh", "Hindi"], ["Jharkhand", "Hindi"], ["Himachal Pradesh", "Hindi"], ["Delhi", "Hindi"]]);
LR.forEach(r => { const c = KIT.code(r[0]); if (c && LANG[r[1]]) lf[c] = LANG[r[1]]; });
place("S9", "Official languages", { k: "mapfig", title: "Official languages, coloured", fill: lf, legend: Object.entries(LANG).map(([l, c]) => [c, l]),
  cap: "The main official language of each state shown in the lesson (many states add others). Grey: English is the official language of Nagaland, Arunachal Pradesh and Meghalaya." });

// S10 — records, state animals and birds
place("S10", "Which state holds", KIT.stateMap("Record holders on the map", rows("S10", "Which state holds").map(r => [r[0].replace(/^(is|has) (the )?/, "").replace(/ \(Census 2011\)$/, ""), r[1]]), { max: 2,
  cap: "Rajasthan is the largest state and Goa the smallest; Kerala leads in literacy and sex ratio; Gujarat has the longest coastline." }));
place("S10", "State animals", KIT.stateMap("State animals on the map", rows("S10", "State animals").map(r => [r[1], r[0]]), { max: 1 }),
  KIT.photos("State animals in pictures", rows("S10", "State animals").filter((r, i, a) => a.findIndex(x => x[1] === r[1]) === i).map(r => [r[1], r[0]]), { n: 16,
    wiki: r => ({ "Barasingha (swamp deer)": "Barasingha", "Indian giant squirrel (shekru)": "Indian giant squirrel", "Sangai (brow-antlered deer)": "Eld's deer", "Mithun (gayal)": "Gayal",
      "Gaur (Indian bison)": "Gaur", "Hangul (Kashmir stag)": "Kashmir stag", "Spotted deer (chital)": "Chital", "Camel": "Dromedary", "Sambar": "Sambar deer", "Wild water buffalo": "Wild water buffalo" })[r[0]] || r[0] }));
place("S10", "State birds", KIT.stateMap("State birds on the map", rows("S10", "State birds").map(r => [r[1], r[0]]), { max: 1 }),
  KIT.photos("State birds in pictures", rows("S10", "State birds").map(r => [r[1], r[0]]), { n: 18,
    wiki: r => ({ "Great Indian bustard (godawan)": "Great Indian bustard", "Mrs Hume’s pheasant": "Mrs. Hume's pheasant", "Blyth’s tragopan": "Blyth's tragopan",
      "Yellow-footed green pigeon (hariyal)": "Yellow-footed green pigeon", "Northern goshawk (baaz)": "Northern goshawk", "Indian paradise flycatcher (dudhraj)": "Indian paradise flycatcher" })[r[0]] || r[0] }));

const ALL = ["S2", "S3", "S4", "S5", "S6", "S7"].flatMap(L => rows(L, "Capitals").filter(r => KIT.code(r[0])).map(r => [r[1].replace(/ \(.*\)$/, ""), r[0].replace(/ \(.*\)$/, ""), "Capital", r[2] || "Capital", L]))
  .concat(rows("S10", "State animals").filter(r => KIT.code(r[0])).map(r => [r[1], r[0], "State animal", "State animal", "S10"]),
    rows("S10", "State birds").filter(r => KIT.code(r[0])).map(r => [r[1], r[0], "State bird", "State bird", "S10"]));
place("S1", "start", { k: "indiamap", title: "Tap a state — its capital, state animal and bird", cap: "Built from the lessons' tables. Revise has a Map quiz and a Photo quiz." });
VISUAL = { mode: true, VIS: { key: "states_photos_v1", word: "fact", words: "capitals, animals and birds", search: "", quiz: "capital, animal or bird", ask: "Which state —", rows: ALL, tabs: [["vmap", "Map quiz"], ["vphotos", "Photo quiz"]] } };

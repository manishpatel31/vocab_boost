/* Government Schemes — how the money is shared, MUDRA's loan sizes, the Jan Suraksha trio, PM MITRA parks and scheme
   launch places on the map, hydrogen's colours, women's cash schemes by state and the recent changes in time
   (drawn by study-visual.js). place(), rows(), fail and KIT come from tools/workbook/apply-hand.js. */
const yr = s => parseInt(String(s).match(/\d{4}/) || [0], 10);

// L1 — how a Centrally Sponsored Scheme is shared
const SH = rows("L1", "CSS sharing").filter(r => /^\d+\s*:\s*\d+$/.test(r[1].trim()));
place("L1", "CSS sharing", { k: "info", title: "Who pays for a Centrally Sponsored Scheme", html: SH.map(r => { const [c, s] = r[1].split(":").map(Number);
  return `<div style="margin:10px 0"><div style="font-size:13px;margin-bottom:4px"><b>${r[0]}</b></div><div style="display:flex;height:26px;border-radius:8px;overflow:hidden;font:700 12px var(--f-num);color:#fff">` +
    `<span style="flex:${c};background:#2f6db5;display:flex;align-items:center;padding-left:8px">Centre ${c}%</span>${s ? `<span style="flex:${s};background:#c69214;display:flex;align-items:center;padding-left:8px">State ${s}%</span>` : ""}</div></div>`; }).join(""),
  cap: "Central Sector schemes are paid wholly by the Centre. Delhi and Puducherry follow 60 : 40; J&K 90 : 10." });

// L4 — PM MITRA parks; L15 — launch places
const SITE = { "Virudhunagar": [77.96, 9.58], "Warangal": [79.59, 17.97], "Navsari": [72.95, 20.95], "Kalaburagi": [76.83, 17.33], "Dhar": [75.3, 22.6], "Lucknow": [80.95, 26.85], "Amravati": [77.75, 20.93] };
const MS = ((rows("L4", "Textiles").find(r => r[0] === "PM MITRA sites") || [])[1] || "").split(", ").map(s => s.replace(/ \(.*\)$/, "").trim()).filter(s => SITE[s]);
place("L4", "Textiles", { k: "mapfig", title: "The seven PM MITRA textile parks", pins: MS.map(s => [s, SITE[s][0], SITE[s][1], "", ["Navsari", "Dhar", "Kalaburagi"].includes(s) ? "l" : ""]),
  cap: "Farm → Fibre → Factory → Fashion → Foreign (the 5F vision). One park in each of seven states." });
const LP = { "Gorakhpur": [83.37, 26.76], "Ranchi": [85.31, 23.34], "Panipat": [76.97, 29.39], "Ballia": [84.15, 25.76], "Mahoba": [79.87, 25.29], "Agra": [78.0, 27.18], "Kolkata": [88.36, 22.57], "Sehore": [77.08, 23.2],
  "Suratgarh": [73.9, 29.32], "Khunti": [85.28, 23.07], "Hazaribagh": [85.36, 23.99], "Jhunjhunu": [75.4, 28.13], "Bijapur": [81.12, 18.8], "Shimla": [77.17, 31.1] };
const LR = rows("L15", "Launch places");
place("L15", "Launch places", KIT.numbered("Where the schemes were launched", LR, Object.fromEntries(LR.map(r => { const k = Object.keys(LP).find(k => r[0].startsWith(k)); if (!k) fail("schemes: no place for " + r[0]); return [r[0], LP[k]]; })),
  { key: r => r[1], cap: "Jharkhand (Ranchi, Khunti, Hazaribagh) and UP (Gorakhpur, Ballia, Mahoba, Agra) host the most launches. Use ＋ or ⛶ to zoom in." }));
place("L15", "What changed", { k: "tlfig", title: "Recent changes, month by month", rows: rows("L15", "What changed").map(r => [yr(r[0]), r[0] + " — " + r[1].split(/;|\./)[0], ""]).filter(r => r[0]) });

// L5 — MUDRA; L6 — the Jan Suraksha trio
place("L5", "MUDRA loan", { k: "bars", title: "MUDRA loans by size", unit: "₹ lakh (upper limit)", left: 120, hi: 1, sort: false,
  rows: rows("L5", "MUDRA loan").map(r => { const m = r[1].match(/₹\s?([\d,]+)\s*(lakh)?/g) || [], last = m[m.length - 1] || ""; const v = parseFloat(last.replace(/[₹,\s]|lakh/g, "")); return [r[0], /lakh/.test(last) ? v : v / 100000, r[1]]; }) });
place("L6", "The Jan Suraksha", { k: "cards", title: "The Jan Suraksha trio", rows: rows("L6", "The Jan Suraksha").map((r, i) => [r[0], "Age " + r[1] + " · " + r[2], r[3], ["🛡️", "🩹", "👵"][i]]) });

// L12 — hydrogen by colour
const HC = { "Green": "#2f8f4e", "Blue": "#2f6db5", "Grey": "#8a8a8a", "Brown / Black": "#4a3020", "Pink": "#e88aa6", "Turquoise": "#1fa8a0" };
place("L12", "Hydrogen colours", { k: "info", title: "Hydrogen comes in colours", html: `<div class="fam">${rows("L12", "Hydrogen").map(r => `<div><span aria-hidden="true" style="display:block;height:26px;border-radius:8px;background:${HC[r[0]] || "#999"}"></span><b>${r[0]}</b><small>${r[1]}</small></div>`).join("")}</div>`,
  cap: "The National Green Hydrogen Mission (2023) aims at 5 million tonnes of green hydrogen a year by 2030." });

// L14 — women's monthly cash schemes by state
place("L14", "Monthly cash", KIT.stateMap("Cash for women, state by state", rows("L14", "Monthly cash").map(r => [r[0].replace(/^Mukhyamantri |^Indira Gandhi /, ""), r[1]]), { max: 1,
  cap: "Maharashtra's Ladki Bahin and MP's Ladli Behna pay ₹1,500 a month; Jharkhand's Maiyan Samman ₹2,500." }));

VISUAL = { mode: true, VIS: { key: "schemes_photos_v1", word: "place", words: "places", search: "", quiz: "place", ask: "", rows: [], tabs: [] } };

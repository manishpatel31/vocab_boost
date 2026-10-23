/* Banking & Finance — timelines for the RBI, banking, regulators and payments, the merged banks, where the banks and the
   world's banks sit, the stock indices on the world map, MUDRA's loan sizes, the notes and where money is printed
   (drawn by study-visual.js and study-world.js). Places are approximate. place(), rows(), fail and KIT come from applyVisual. */
const yr = s => parseInt(String(s).match(/\d{4}/) || [0], 10);
const tl = (L, t, title, cap, nameCol, yearCol) => ({ k: "tlfig", title, rows: rows(L, t).map(r => [yr(r[yearCol == null ? 1 : yearCol]), r[nameCol || 0].replace(/ — .*$/, ""), ""]).filter(r => r[0]).sort((a, b) => a[0] - b[0]), cap });

// N1–N3, N6–N7, N9 — the timelines
place("N1", "RBI timeline", tl("N1", "RBI timeline", "The RBI, year by year", "Set up on 1 April 1935 in Calcutta under the RBI Act, 1934; moved to Mumbai in 1937; nationalised on 1 January 1949."),
  KIT.photos("RBI people in pictures", rows("N1", "People in RBI").filter(r => !/^B\.|^Edward/.test(r[1])).map(r => [r[1], r[0]]), { wiki: r => ({ "Sir Osborne Smith": "Osborne Smith", "Sir James Taylor": "James Braid Taylor", "K. J. Udeshi": "K. J. Udeshi" })[r[0]] || r[0] }));
place("N2", "When each came in", tl("N2", "When each came in", "Monetary tools, year by year", "From the Liquidity Adjustment Facility (2000) to the Monetary Policy Committee (2016) and the Standing Deposit Facility (2022)."));
place("N3", "Milestones", tl("N3", "Milestones", "Indian banking, year by year", "Bank of Hindustan (1770) was the first; the 1969 and 1980 nationalisations brought 20 banks under the state."));
const MG = rows("N3", "Mergers"), into = {}; MG.forEach(r => (into[r[1]] = into[r[1]] || []).push(r[0] + " (" + r[2].replace(/\.$/, "") + ")"));
place("N3", "Mergers", { k: "cards", title: "Who merged into whom", rows: Object.entries(into).map(([k, l]) => [k, l.length + (l.length > 1 ? " banks merged in" : " bank merged in"), l.join(" · "), "🏦"]) });
place("N6", "When they were set up", tl("N6", "When they were set up", "Regulators and finance bodies, year by year", "IFCI (1948) was India's first development finance institution; SEBI got statutory powers in 1992."));
place("N7", "Launch years", tl("N7", "Launch years", "Payment systems, year by year", "RTGS (2004) → NEFT (2005) → NPCI (2008) → IMPS (2010) → RuPay (2012) → UPI (2016)."));
place("N9", "Schemes by year", tl("N9", "Schemes by year", "Inclusion schemes, year by year", "Jan Dhan (2014) opened zero-balance accounts; MUDRA (2015) lends to small businesses."));

// N5 — where the banks sit in India; the world's banks
const CITY = { "Mumbai": [72.88, 19.08], "New Delhi": [77.21, 28.61], "Vadodara": [73.18, 22.31], "Bengaluru": [77.59, 12.97], "Chennai": [80.27, 13.08], "Kolkata": [88.36, 22.57], "Pune": [73.86, 18.52],
  "Aluva": [76.35, 10.11], "Thrissur": [76.21, 10.53], "Mangaluru": [74.86, 12.91], "Karur": [78.08, 10.96], "Srinagar": [74.8, 34.08], "Jaipur": [75.79, 26.91], "Lucknow": [80.95, 26.85], "Hyderabad": [78.49, 17.39] };
const HQ = rows("N5", "Headquarters in India"), by = {};
HQ.forEach(r => { const c = Object.keys(CITY).find(k => r[1].startsWith(k)); if (!c) fail("banking: no place for " + r[1]); (by[c] = by[c] || []).push(r[0]); });
const BC = Object.entries(by).sort((a, b) => b[1].length - a[1].length);
place("N5", "Headquarters in India", { k: "mapfig", title: "Where the banks are headquartered",
  pins: BC.map(([c, l], i) => [String(i + 1), CITY[c][0], CITY[c][1], c + ": " + l.join(", "), "n"]), facts: BC.map(([c, l], i) => [`${i + 1} · ${c}`, l.join(", ")]),
  cap: "Mumbai, the financial capital, hosts the RBI, SEBI, NPCI and most big banks. Use ＋ or ⛶ to separate the Kerala cluster." });
const WB = { "Washington": [-77.04, 38.9], "Manila": [121.0, 14.6], "Beijing": [116.4, 39.9], "Shanghai": [121.47, 31.23], "Basel": [7.59, 47.56], "Abidjan": [-4.0, 5.36], "London": [-0.13, 51.5], "Jeddah": [39.17, 21.54] };
const WR = rows("N5", "World banks");
place("N5", "World banks", { k: "worldfig", title: "Where the world's banks sit", minw: 640, pins: WR.map((r, i) => { const k = Object.keys(WB).find(k => r[1].startsWith(k)); if (!k) fail("banking: no place for " + r[1]); return [String(i + 1), WB[k][0], WB[k][1], r[0], "n"]; }),
  legend: WR.map((r, i) => [`${i + 1} ${r[0]}`, r[1]]), cap: "The World Bank and the IMF share Washington, D.C.; the BRICS bank (NDB) is in Shanghai and the AIIB in Beijing." });

// N8 — stock indices on the world map
const CN = { "USA": [-98, 39], "Japan": [138, 36.5], "Hong Kong": [114.17, 22.3], "United Kingdom": [-2, 53], "Germany": [10.5, 51], "France": [2.5, 46.5], "South Korea": [127.8, 36.3], "Singapore": [103.8, 1.35], "China": [104, 35],
  "Taiwan": [121, 23.7], "Pakistan": [69, 30], "Australia": [134, -25], "Brazil": [-52, -10], "Indonesia": [117, -2], "Saudi Arabia": [45, 24], "India": [78, 22] };
const SI = rows("N8", "World stock"), sc = {}; SI.forEach(r => (sc[r[1]] = sc[r[1]] || []).push(r[0]));
const SE = Object.entries(sc);
place("N8", "World stock", { k: "worldfig", title: "Stock indices around the world", minw: 640,
  pins: SE.map(([c, l], i) => { if (!CN[c]) fail("banking: no place for " + c); return [String(i + 1), CN[c][0], CN[c][1], c, "n"]; }), legend: SE.map(([c, l], i) => [`${i + 1} ${c}`, l.join(", ")]),
  cap: "India: Sensex (BSE, Mumbai, 1875 — Asia's oldest exchange) and Nifty 50 (NSE). The USA has two famous indices: the Dow Jones and the Nasdaq." });

// N9 — MUDRA loan sizes
place("N9", "MUDRA loan", { k: "bars", title: "MUDRA loans by size", unit: "₹ lakh (upper limit)", left: 120, hi: 1, sort: false, rows: rows("N9", "MUDRA loan").map(r => { const m = r[1].match(/₹\s?([\d,]+)\s*(lakh)?/g) || [], last = m[m.length - 1] || "";
    const v = parseFloat(last.replace(/[₹,\s]|lakh/g, "")); return [r[0], /lakh/.test(last) ? v : v / 100000, r[1]]; }),
  cap: "Shishu → Kishore → Tarun → Tarun Plus: the names follow a child growing up, as the business grows." });

// N10 — the notes; where money is made
place("N10", "Mahatma Gandhi New Series", KIT.photos("What is on the back of the notes", rows("N10", "Mahatma Gandhi New Series").map(r => [r[1], r[0]]), { wiki: r => ({ "Sun Temple, Konark": "Konark Sun Temple", "Ellora Caves": "Ellora Caves", "Hampi with chariot": "Vittala Temple" })[r[0]] || r[0] }));
const MN = { "Kolkata": [88.36, 22.57], "Mumbai": [72.88, 19.08], "Hyderabad": [78.49, 17.39], "Noida": [77.39, 28.54], "Nashik": [73.79, 20.0], "Dewas": [76.05, 22.97], "Narmadapuram": [77.73, 22.75], "Mysuru": [76.64, 12.3], "Salboni": [87.3, 22.63] };
const MR = rows("N10", "Where money is made");
place("N10", "Where money is made", KIT.numbered("Where coins and notes are made", MR, Object.fromEntries(MR.map(r => { const k = Object.keys(MN).find(k => r[1].startsWith(k)); if (!k) fail("banking: no place for " + r[1]); return [r[0], MN[k]]; })),
  { key: r => r[1] + (r[2] ? " — " + r[2].replace(/\.$/, "") : "") }));

VISUAL = { mode: "world", VIS: { key: "banking_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

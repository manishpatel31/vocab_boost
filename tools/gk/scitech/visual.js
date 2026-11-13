/* Science & Technology in India — nuclear plants and CSIR labs on the map, a polar-stations timeline and photo galleries
   (drawn by study-visual.js). Places are approximate. */
const P = (w, n, c) => [w, n, c];
const NUC = {
  "Tarapur": [72.66, 19.83], "Rawatbhata (Rajasthan Atomic Power Station)": [75.61, 24.88], "Kalpakkam (Madras Atomic Power Station)": [80.17, 12.56],
  "Narora": [78.38, 28.16], "Kakrapar": [73.35, 21.24], "Kaiga": [74.44, 14.86], "Kudankulam": [77.71, 8.17],
  "Gorakhpur (Fatehabad)": [75.58, 29.48], "Mahi Banswara": [74.44, 23.55], "Chutka": [80.4, 22.6], "Jaitapur": [73.35, 16.6], "Kovvada": [83.66, 18.05]
};
const WORK = rows("ST4", "Nuclear power plants at work"), PLAN = rows("ST4", "New and planned plants");
[...WORK, ...PLAN].forEach(r => { if (!NUC[r[0]]) fail("scitech: no place for " + r[0]); });
place("ST4", "New and planned plants", { k: "mapfig", title: "Nuclear power: working plants and new ones",
  pins: WORK.map((r, i) => [String(i + 1), NUC[r[0]][0], NUC[r[0]][1], r[0] + " — " + r[1], "n"])
    .concat(PLAN.map((r, i) => [String(WORK.length + i + 1), NUC[r[0]][0], NUC[r[0]][1], r[0] + " — " + r[1] + " (new or planned)", "n"])),
  facts: WORK.map((r, i) => [`${i + 1} · ${r[0]}`, r[1] + " — working"]).concat(PLAN.map((r, i) => [`${WORK.length + i + 1} · ${r[0]}`, r[1] + " — new or planned"])),
  cap: "1–7 are working; 8–12 are being built or planned. Most sit on a coast or a big river, for cooling water." });

const LAB = {
  "Bengaluru": [77.6, 12.97], "Chandigarh": [76.78, 30.73], "Hyderabad": [78.48, 17.4], "New Delhi": [77.2, 28.6], "Roorkee": [77.89, 29.87],
  "Dehradun": [78.03, 30.32], "Palampur": [76.53, 32.11], "Jammu": [74.86, 32.73], "Lucknow": [80.95, 26.85], "Jamshedpur": [86.2, 22.8],
  "Durgapur": [87.32, 23.55], "Dhanbad": [86.43, 23.8], "Kolkata": [88.36, 22.57], "Bhavnagar": [72.15, 21.76], "Karaikudi": [78.78, 10.07],
  "Chennai": [80.27, 13.08], "Thiruvananthapuram": [76.95, 8.52], "Jorhat": [94.2, 26.75], "Bhopal": [77.41, 23.26]
};
const CS = rows("ST2", "CSIR labs and their cities"), CITIES = [...new Set(CS.map(r => r[1]))];
CITIES.forEach(c => { if (!LAB[c]) fail("scitech: no place for " + c); });
place("ST2", "CSIR labs and their cities", { k: "mapfig", title: "CSIR labs in this lesson, city by city",
  pins: CITIES.map((c, i) => [String(i + 1), LAB[c][0], LAB[c][1], c, "n"]),
  facts: CITIES.map((c, i) => [`${i + 1} · ${c}`, CS.filter(r => r[1] === c).map(r => r[0].replace(/^.*\((\w+)\)$/, "$1")).join(", ")]),
  cap: "Numbers match the list. Labs sit near their work: metals in Jamshedpur, coal in Dhanbad, salt on the Gujarat coast." });

place("ST8", "India's research stations", { k: "tlfig", title: "India's polar and Himalayan stations",
  rows: [[1983, "Dakshin Gangotri", "Antarctica — closed 1990"], [1989, "Maitri", "Antarctica"], [2008, "Himadri", "Arctic (Svalbard)"], [2012, "Bharati", "Antarctica"],
    [2014, "IndARC", "Arctic, under water"], [2016, "Himansh", "Himalaya (Spiti)"]], cap: "Maitri II, to replace Maitri, is targeted for about 2029." },
  { k: "photos", title: "The stations in pictures", items: [P("Dakshin_Gangotri", "Dakshin Gangotri", "1983"), P("Maitri_(research_station)", "Maitri", "1989"),
    P("Bharati_(research_station)", "Bharati", "2012"), P("Himadri_Station", "Himadri", "2008, Svalbard")] });

place("ST9", "Scientists of today", { k: "photos", title: "Faces to know", items: [
  P("Jayant_Narlikar", "Jayant Narlikar", "Vigyan Ratna 2025"), P("K._Kasturirangan", "K. Kasturirangan", "ISRO chairman, NEP 2020"),
  P("Rajagopala_Chidambaram", "R. Chidambaram", "Pokhran, PSA 2001–18"), P("C._N._R._Rao", "C. N. R. Rao", "Bharat Ratna 2014"),
  P("Gagandeep_Kang", "Gagandeep Kang", "Rotavac; FRS 2019"), P("Venkatraman_Ramakrishnan", "Venki Ramakrishnan", "Nobel Chemistry 2009"),
  P("Manjul_Bhargava", "Manjul Bhargava", "Fields Medal 2014"), P("Homi_J._Bhabha", "Homi J. Bhabha", "Three-stage plan")] });

// ---- added: who answers to whom, the three-stage plan, reactors and missions in time, mission money, India's firsts, the digital stack, what each -AR uses ----

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

// ST1 — who answers to whom
const WH = rows("ST1", "Who runs what"), byP = {};
WH.forEach(r => { const p = r[1].replace(/^The /, ""); (byP[p] = byP[p] || []).push(r[0].replace(/^.*\((\w+)\)$/, "$1") + " (" + (yr(r[2]) || "") + ")"); });
place("ST1", "Who runs what", { k: "cards", title: "Who answers to whom", rows: Object.keys(byP).map((p, i) => [p, byP[p].length + (byP[p].length > 1 ? " bodies" : " body"), byP[p].join(" · "), ["🔬", "🧪", "⚛️", "🌦️", "🩺", "🌾"][i] || "🏛️"]) });

// ST3 — the three stages; the research reactors in time
const S3 = rows("ST3", "The three stages");
if (S3.length !== 3 || !/PHWR/.test(S3[0][1]) || !/Fast breeder/i.test(S3[1][1]) || !/Thorium/i.test(S3[2][1])) fail("scitech ST3: the three stages changed");
const S3S = `<svg class="dg" viewBox="0 0 640 220" role="img" aria-label="India's three-stage nuclear power programme"><defs><marker id="stA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="context-stroke"/></marker></defs>
  ${[["Stage 1", "PHWR", "natural uranium", "→ power + plutonium-239", VC[0]], ["Stage 2", "Fast breeder (FBR)", "plutonium + a thorium blanket", "→ more fuel than it burns + U-233", VC[2]], ["Stage 3", "Thorium reactors (AHWR)", "thorium-232 + uranium-233", "→ power from India's thorium", VC[1]]].map((r, i) => { const x = 8 + i * 214;
    return `<rect x="${x}" y="30" width="196" height="112" rx="12" fill="${r[4]}"/>${vW(x + 98, 52, r[0], 11)}${vW(x + 98, 74, r[1], 14, 1)}${vW(x + 98, 100, r[2], 10.5)}${vW(x + 98, 120, r[3], 10.5)}${i < 2 ? `<path d="M${x + 198} 86 H${x + 210}" stroke="var(--ink2)" stroke-width="2.4" marker-end="url(#stA)"/>` : ""}`; }).join("")}
  ${vM(204, 160, "plutonium feeds stage 2", "middle")}${vM(418, 160, "uranium-233 feeds stage 3", "middle")}
  ${vT(320, 192, "Why three stages? India has little uranium but about a quarter of the world's thorium.", "var(--ink)", "middle", 11.5)}${vM(320, 208, "Planned by Homi J. Bhabha in the 1950s. The PFBR at Kalpakkam (2026) opens stage 2.", "middle", 11)}</svg>`;
place("ST3", "The three stages", KIT.fig("The three-stage plan in one line", S3S, "Each stage makes the fuel for the next: uranium → plutonium → uranium-233 from thorium."));
place("ST3", "Research and test reactors", { k: "tlfig", title: "India's reactors, year by year", rows: rows("ST3", "Research and test reactors").map(r => [yr(r[1]), r[0], ""]), cap: "Apsara (1956) was Asia's first research reactor; KAMINI is the world's only reactor running on uranium-233; the PFBR reached first criticality in April 2026." });

// ST5 — India's own vaccines
place("ST5", "Vaccines made in India", { k: "cards", title: "India's firsts in vaccines", rows: rows("ST5", "Vaccines made in India").map(r => [r[0], r[1], cut(r[2].replace(/^India's first /, "First ").replace(/^The world's first /, "World's first "), 70), "💉"]) });

// ST6 — the missions in time, and their money
const MS = rows("ST6", "Missions and when they began");
place("ST6", "Missions and when they began", { k: "tlfig", title: "Technology missions, year by year", rows: MS.map(r => [yr(r[1]), r[0].replace(/^National (Mission on )?/, "").replace(/ \(.*\)$/, "").replace(/ Mission$/, "").replace("Interdisciplinary Cyber-Physical Systems", "Cyber-Physical Systems"), ""]).sort((a, b) => a[0] - b[0]), cap: "From the Nano Mission (2007) to the Nuclear Energy Mission (2025)." },
  { k: "bars", title: "How much money each mission has", unit: "₹ crore", left: 150, sort: true, rows: MS.map(r => { const m = String(r[2]).replace(/,/g, "").match(/₹\s?([\d.]+)\s*crore/); return m ? [r[0].replace(/^National (Mission on )?/, "").replace(/ \(.*\)$/, "").replace(/ Mission$/, "").replace("Interdisciplinary Cyber-Physical Systems", "Cyber-Physical"), +m[1], ""] : null; }).filter(Boolean) });

// ST7 — the digital stack and its laws in time
place("ST7", "Platforms and when they began", { k: "tlfig", title: "India's digital platforms, year by year", rows: rows("ST7", "Platforms and when they began").map(r => [yr(r[1]), r[0].replace(/ \(.*\)$/, ""), ""]), cap: "Aadhaar (identity), UPI (payments) and DigiLocker (documents) are the three layers of India Stack." });
place("ST7", "Laws and watchdogs", { k: "tlfig", title: "Digital laws and watchdogs, year by year", rows: rows("ST7", "Laws and watchdogs").map(r => [yr(r[1]), r[0].replace(/ \(.*\)$/, "").replace("Information Technology", "IT").replace("Digital Personal Data Protection", "DPDP"), ""]), cap: "The IT Act (2000) came first; the DPDP Act (2023) is India's personal data law." });

// ST10 — what each one "sees" with
const FF = rows("ST10", "Full forms"), ff = k => { const r = FF.find(x => x[0] === k); if (!r) fail("scitech ST10: no " + k); return r[1]; };
place("ST10", "Full forms", { k: "cards", title: "Four ways to see with waves", rows: [["RADAR", "radio waves", ff("RADAR") + " — aircraft, ships, storms", "📡"], ["SONAR", "sound waves", ff("SONAR") + " — under water", "🌊"], ["LiDAR", "laser light", ff("LiDAR") + " — 3D maps, landers", "🗺️"], ["LASER", "one-colour light", ff("LASER"), "🔦"]] });

// ST11 — every year in one line
place("ST11", "Years in one place", { k: "tlfig", title: "Indian science on one timeline", rows: rows("ST11", "Years in one place").map(r => [yr(r[0]), r[1].split(" · ")[0].split(";")[0], ""]).filter(r => r[0]), cap: "Each point shows the first event of that row; the table above has the rest." });

VISUAL = { mode: true, VIS: { key: "scitech_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

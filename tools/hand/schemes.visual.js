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

// ---- added: PMFBY premiums, MGNREGA against VB-G RAM G, Ayushman Bharat's two pillars, a Sukanya account's life ----
const sT = (x, y, t, c, a, sz) => `<text x="${x}" y="${y}" font-size="${sz || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const sM = (x, y, t, a, sz) => `<text x="${x}" y="${y}" font-size="${sz || 10.5}" text-anchor="${a || "start"}" class="mut">${t}</text>`;
const sW = (x, y, t, sz, b) => `<text x="${x}" y="${y}" font-size="${sz || 10.5}"${b ? ' font-weight="700"' : ""} text-anchor="middle" style="fill:#fff;opacity:.96">${t}</text>`;
const sBox = (x, y, w, h, c, t, lines) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${c}"/>${sW(x + w / 2, y + 21, t, 13, 1)}${lines.map((l, i) => sW(x + w / 2, y + 39 + i * 14, l)).join("")}`;
const fact = (L, t, k) => { const r = rows(L, t).find(x => x[0].startsWith(k)); if (!r) fail(`schemes ${L} "${t}": no row "${k}"`); return r[1]; };
const want = (v, re, what) => { if (!re.test(v)) fail("schemes: " + what + " changed: " + v); };

// L2 — PMFBY: what the farmer pays
const PF = fact("L2", "PM Fasal", "Farmer premium"); want(PF, /Kharif 2% · Rabi 1\.5% · Commercial\/horticulture 5%/, "PMFBY premium");
const PFS = `<svg class="dg" viewBox="0 0 640 170" role="img" aria-label="Farmer's share of the premium under PM Fasal Bima Yojana">
  ${[["Kharif crops", 2, "#2f8f4e"], ["Rabi crops", 1.5, "#a8780a"], ["Commercial &amp; horticulture", 5, "#c0392b"]].map((r, i) => `${sT(8, 34 + i * 40, r[0], "var(--ink)", "start", 12.5)}<rect x="200" y="${18 + i * 40}" width="${r[1] * 70}" height="24" rx="6" fill="${r[2]}"/>${sT(208 + r[1] * 70, 35 + i * 40, r[1] + "%", r[2], "start", 14)}`).join("")}
  ${sM(8, 146, "The farmer pays only this share of the sum insured; the Centre and the state share the rest of the premium.", "start", 11)}${sM(8, 162, "Report a loss within 72 hours.  Motto: One Nation, One Scheme, One Premium.", "start", 11)}</svg>`;
place("L2", "PM Fasal", KIT.fig("PMFBY: the farmer's share of the premium", PFS, "Remember 2 – 1.5 – 5: kharif, rabi, commercial. Enrolment has been voluntary for all farmers since Kharif 2020."));

// L7 — MGNREGA and the Act that replaces it
const MG = fact("L7", "MGNREGA", "Guarantee"), VB = fact("L7", "VB-G RAM G", "Guarantee"); want(MG, /^100 days/, "MGNREGA days"); want(VB, /^125 days/, "VB-G RAM G days");
want(fact("L7", "VB-G RAM G", "In force"), /1 July 2026/, "VB-G RAM G date"); want(fact("L7", "MGNREGA", "Act"), /2 Feb 2006/, "MGNREGA date");
const CMP = [["In force", "2 Feb 2006", "1 July 2026"], ["Work guaranteed", "100 days a household a year", "125 days a household a year"], ["No work given", "allowance after 15 days", "¼ wage for 30 days, then ½"], ["Extra", "⅓ of workers to be women", "states may pause 60 days in farm season"], ["Ministry", "Rural Development", "Rural Development"]];
const mvY = 58 + CMP.length * 28;
const MVS = `<svg class="dg" viewBox="0 0 640 ${mvY + 72}" role="img" aria-label="MGNREGA compared with the VB-G RAM G Act">
  ${sBox(150, 6, 236, 44, "#5b6470", "MGNREGA", ["Act of 2005"])}${sBox(396, 6, 236, 44, "#2f8f4e", "VB-G RAM G", ["Act of 2025: replaces it"])}
  ${CMP.map((r, i) => `<rect x="8" y="${58 + i * 28}" width="624" height="24" rx="6" class="${i % 2 ? "card" : "s5"}"/>${sT(16, 75 + i * 28, r[0], "var(--ink)", "start", 11.5)}${sM(268, 75 + i * 28, r[1], "middle", 11)}${sM(514, 75 + i * 28, r[2], "middle", 11)}`).join("")}
  ${sT(8, mvY + 38, "Days of work", "var(--ink)", "start", 11.5)}<rect x="150" y="${mvY + 10}" width="240" height="18" rx="5" fill="#5b6470"/>${sW(270, mvY + 23, "100", 11, 1)}
  <rect x="150" y="${mvY + 34}" width="300" height="18" rx="5" fill="#2f8f4e"/>${sW(300, mvY + 47, "125", 11, 1)}${sM(460, mvY + 47, "+25 days", "start", 11)}</svg>`;
place("L7", "VB-G RAM G", KIT.fig("MGNREGA and the Act that replaces it", MVS, "VB-G RAM G: Viksit Bharat – Guarantee for Rozgar and Ajeevika Mission (Gramin). MGNREGA ends on the day the new Act comes into force."));

// L9 — Ayushman Bharat's two pillars
want(fact("L9", "Ayushman", "Pillar 1"), /Arogya Mandir.*14 April 2018, Bijapur/, "AB pillar 1"); want(fact("L9", "Ayushman", "Pillar 2"), /PM-JAY.*23 Sept 2018, Ranchi/, "AB pillar 2"); want(fact("L9", "Ayushman", "PM-JAY cover"), /₹5 lakh per family/, "PM-JAY cover");
const ABS = `<svg class="dg" viewBox="0 0 640 214" role="img" aria-label="The two pillars of Ayushman Bharat">
  ${sBox(200, 6, 240, 36, "#5b6470", "Ayushman Bharat · 2018", [])}<path d="M320 42 V56 M164 56 H476 M164 56 V68 M476 56 V68" fill="none" stroke="var(--ink2)" stroke-width="1.6"/>
  ${sBox(8, 68, 306, 92, "#2f8f4e", "Ayushman Arogya Mandir", ["earlier: Health &amp; Wellness Centres", "primary care, close to home", "first: 14 April 2018, Bijapur (Chhattisgarh)"])}
  ${sBox(326, 68, 306, 92, "#2f6db5", "PM Jan Arogya Yojana (PM-JAY)", ["₹5 lakh per family a year, cashless", "hospital care: secondary and tertiary", "launched 23 Sept 2018, Ranchi"])}
  <rect x="8" y="170" width="624" height="36" rx="10" class="abg"/>${sT(20, 192, "Vay Vandana (Oct 2024):", "var(--ink)", "start", 12)}${sM(178, 192, "everyone aged 70+ is covered, whatever the income; an extra ₹5 lakh top-up for the family", "start", 11)}</svg>`;
place("L9", "Ayushman", KIT.fig("Ayushman Bharat stands on two pillars", ABS, "One pillar prevents and treats early (the Arogya Mandirs); the other pays the hospital bill (PM-JAY, run by the National Health Authority)."));

// L10 — a Sukanya Samriddhi account from opening to maturity
want(fact("L10", "Sukanya", "Account"), /under 10/, "SSY age"); want(fact("L10", "Sukanya", "Deposit"), /₹250 to ₹1\.5 lakh a year, for 15 years/, "SSY deposit"); want(fact("L10", "Sukanya", "Matures"), /21 years from opening; 50%.*18/, "SSY maturity");
const SSY = `<svg class="dg" viewBox="0 0 640 150" role="img" aria-label="The life of a Sukanya Samriddhi account">
  <path d="M40 60 H600" stroke="var(--ink2)" stroke-width="2"/><path d="M40 60 H400" stroke="#2f8f4e" stroke-width="8" stroke-linecap="round"/>
  ${[[40, "Open", "girl under 10", "#2f6db5"], [400, "Year 15", "deposits stop", "#2f8f4e"], [470, "Age 18", "50% for education", "#a8780a"], [600, "Year 21", "account matures", "#c0392b"]].map(r => `<circle cx="${r[0]}" cy="60" r="8" fill="${r[3]}"/>${sT(r[0], 40, r[1], r[3], r[0] === 40 ? "start" : r[0] === 600 ? "end" : "middle", 12.5)}${sM(r[0], 84, r[2], r[0] === 40 ? "start" : r[0] === 600 ? "end" : "middle", 10.5)}`).join("")}
  ${sT(220, 52, "deposit ₹250 to ₹1.5 lakh a year", "#2f8f4e", "middle", 11)}
  ${sM(8, 122, "Launched with Beti Bachao Beti Padhao on 22 Jan 2015.  Interest 8.2%, tax-free at all three stages (EEE).", "start", 11)}${sM(8, 138, "Years are counted from the day the account is opened, not from the girl's birth.", "start", 11)}</svg>`;
place("L10", "Sukanya", KIT.fig("A Sukanya Samriddhi account, start to finish", SSY, "Pay in for 15 years, wait 6 more: the account matures 21 years after it is opened."));

// ---- memory tricks for the lessons that had none ----
place("L12", "Digital India", { k: "trick", h: "<b>Hydrogen colours = how it is made.</b> <b>Green</b>: renewable power (cleanest). <b>Pink</b>: nuclear power. <b>Blue</b>: natural gas with the CO₂ captured. <b>Grey</b>: natural gas, CO₂ let out. <b>Brown / black</b>: coal (dirtiest).<br>Surya Ghar in three numbers: <b>1 crore homes · 300 free units · ₹78,000</b> maximum subsidy. MNRE runs Surya Ghar and Green Hydrogen; Jal Shakti runs the water schemes." });

VISUAL = { mode: true, VIS: { key: "schemes_photos_v1", word: "place", words: "places", search: "", quiz: "place", ask: "", rows: [], tabs: [] } };

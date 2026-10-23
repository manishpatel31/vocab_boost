/* Polity — the Constituent Assembly in time, borrowed features on the world map, the Preamble's words, the six rights and
   five writs, Parliament's two houses seat by seat, how a bill travels, the Seventh Schedule, the courts and panchayats as
   tiers, Presidents and Prime Ministers in time, and an article-number strip (drawn by study-visual.js and study-world.js).
   place(), rows(), fail and KIT come from tools/workbook/apply-hand.js. */
const card = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${c}" opacity=".92"/><text x="${x + w / 2}" y="${y + (sub ? h / 2 - 2 : h / 2 + 5)}" text-anchor="middle" font-size="13" font-weight="800" style="fill:#fff">${t}</text>` +
  (sub ? `<text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" font-size="10.5" style="fill:#fff">${sub}</text>` : "");
const arrowDefs = id => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="var(--ink2)"/></marker></defs>`;
const ln = (x1, y1, x2, y2, id) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="var(--ink2)" stroke-width="1.6" fill="none" marker-end="url(#${id})"/>`;

// L1 — how long it took; who made it
place("L1", "Constituent Assembly", { k: "tlfig", title: "From the first sitting to the Republic", rows: [[1946, "Cabinet Mission plan; first sitting on 9 December (Sachchidananda Sinha presides)", ""], [1946, "Rajendra Prasad elected president (11 Dec); Nehru moves the Objectives Resolution (13 Dec)", ""],
    [1947, "Independence; Drafting Committee under Ambedkar (29 August)", ""], [1948, "Draft Constitution published (February)", ""], [1949, "Constitution adopted, 26 November — Constitution Day", ""], [1950, "Members sign (24 Jan); in force 26 January — Republic Day", ""]],
  cap: "2 years, 11 months and 18 days; 11 sessions; 165 days of sittings." },
  { k: "bars", title: "How the Assembly was made up (planned)", unit: "seats", left: 190, hi: 1, sort: false, rows: [["Governors' provinces", 292, ""], ["Princely states", 93, ""], ["Chief Commissioners' provinces", 4, ""]],
    cap: "389 seats planned under the Cabinet Mission; 299 after Partition." },
  KIT.photos("The makers in pictures", [["B. R. Ambedkar", "Chair, Drafting Committee"], ["Rajendra Prasad", "President of the Assembly"], ["Constituent Assembly of India", "In session"], ["B. N. Rau", "Constitutional adviser"], ["Prem Behari Narain Raizada", "Calligrapher"], ["Nandalal Bose", "Decorated the pages"]]));

// L2 — borrowed features on the world map
const BW = { "UK": ["United Kingdom", -2, 53], "USA": ["United States of America", -98, 39], "Ireland": ["Ireland", -8, 53.2], "Canada": ["Canada", -100, 58], "Australia": ["Australia", 134, -25], "USSR": ["Russia", 60, 58],
  "France": ["France", 2.5, 46.5], "Germany (Weimar)": ["Germany", 10.5, 51], "South Africa": ["South Africa", 24, -29.5], "Japan": ["Japan", 138, 36.5] };
const BR = rows("L2", "Borrowed").filter(r => BW[r[0]]);
place("L2", "Borrowed", { k: "worldfig", title: "Where the borrowed features came from", minw: 640, mark: BR.map(r => BW[r[0]][0]),
  pins: BR.map((r, i) => [String(i + 1), BW[r[0]][1], BW[r[0]][2], r[0], "n"]), legend: BR.map((r, i) => [`${i + 1} ${r[0]}`, r[1].split(", ").slice(0, 3).join(", ")]),
  cap: "The Government of India Act, 1935 gave the most (the federal scheme, the Governor, emergency powers). Britain gave parliamentary government; the USA, Fundamental Rights; Ireland, the Directive Principles." });

// L4 — the Preamble's words
place("L4", "What the Preamble", { k: "info", title: "The Preamble in one picture", html: `<div style="border:2px solid var(--accent);border-radius:14px;padding:18px 16px;text-align:center;background:var(--accent-bg)">
  <div style="font-size:13px;color:var(--ink2)">WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a</div>
  <div style="font:800 clamp(15px,3.2vw,22px)/1.35 var(--f-body);margin:8px 0;letter-spacing:.04em">${["SOVEREIGN", "SOCIALIST", "SECULAR", "DEMOCRATIC", "REPUBLIC"].map((w, i) => `<span style="color:${["#c0503a", "#c69214", "#2f8f4e", "#2f6db5", "#7d4fb5"][i]}">${w}</span>`).join(" ")}</div>
  <div style="font-size:13px;color:var(--ink2)">and to secure to all its citizens:</div>
  <div class="fam" style="margin-top:10px">${[["JUSTICE", "social, economic and political"], ["LIBERTY", "of thought, expression, belief, faith and worship"], ["EQUALITY", "of status and of opportunity"], ["FRATERNITY", "dignity of the individual; unity and integrity of the Nation"]]
    .map(([a, b]) => `<div><b>${a}</b><small>${b}</small></div>`).join("")}</div>
  <div style="font-size:12.5px;color:var(--ink2);margin-top:10px">Adopted 26 November 1949 · 'Socialist', 'Secular' and 'Integrity' added by the 42nd Amendment (1976)</div></div>`,
  cap: "Source of authority: the people. Nature of the state: five words. Objectives: four ideals. Date of adoption: 26 November 1949." });

// L6–L7 — the six rights and the five writs
const FRI = { "Equality": "⚖️", "Freedom": "🕊️", "Against exploitation": "⛓️", "Freedom of religion": "🛐", "Cultural & educational": "📚", "Constitutional remedies": "🏛️" };
place("L6", "The six Fundamental Rights", { k: "cards", title: "The six Fundamental Rights", rows: rows("L6", "The six").map(r => [r[0], "Articles " + r[1], "", FRI[r[0]] || "•"]) });
place("L7", "The five writs", { k: "cards", title: "The five writs", rows: rows("L7", "The five writs").map((r, i) => [r[0], r[1], r[2], ["🧍", "📣", "✋", "📄", "❓"][i]]) });

// L9 — how the President and the Vice-President are elected; Presidents in time
const EC = `<svg class="dg" viewBox="0 0 660 230" role="img" aria-label="Who elects the President and the Vice-President">${arrowDefs("pe")}
  ${card(20, 20, 190, 56, "Elected MPs", "Lok Sabha + Rajya Sabha", "#2f6db5")}${card(20, 96, 190, 56, "Elected MLAs", "States, Delhi, Puducherry, J&K", "#2f8f4e")}
  ${card(20, 172, 190, 46, "Nominated MPs", "", "#a9805a")}
  ${card(440, 50, 200, 66, "PRESIDENT", "Art 54 · electoral college", "#c0503a")}${card(440, 150, 200, 66, "VICE-PRESIDENT", "Art 66 · all MPs", "#7d4fb5")}
  ${ln(212, 48, 436, 76, "pe")}${ln(212, 124, 436, 90, "pe")}${ln(212, 52, 436, 172, "pe")}${ln(212, 195, 436, 190, "pe")}
</svg>`;
place("L9", "Articles 52", KIT.fig("Who elects whom", EC, "Nominated MPs and MLCs do not vote for the President. President: elected MPs and elected MLAs (proportional representation, single transferable vote, secret ballot). Vice-President: all MPs, elected and nominated."));
const PR = [["Rajendra Prasad", 1950, 1962], ["S. Radhakrishnan", 1962, 1967], ["Zakir Husain", 1967, 1969], ["V. V. Giri", 1969, 1974], ["F. A. Ahmed", 1974, 1977], ["N. Sanjiva Reddy", 1977, 1982], ["Zail Singh", 1982, 1987],
  ["R. Venkataraman", 1987, 1992], ["S. D. Sharma", 1992, 1997], ["K. R. Narayanan", 1997, 2002], ["A. P. J. Abdul Kalam", 2002, 2007], ["Pratibha Patil", 2007, 2012], ["Pranab Mukherjee", 2012, 2017], ["Ram Nath Kovind", 2017, 2022], ["Droupadi Murmu", 2022, 2026, "serving"]]
  .map((r, i) => [r[0], r[1], r[2], i % 2 ? "#2f6db5" : "#c69214", r[3]]);
place("L9", "Elections and removal", KIT.fig("Presidents of India", KIT.gantt("Presidents of India", PR, 1950, 2027, 10), "Rajendra Prasad is the only President elected twice. Droupadi Murmu (2022) is the first tribal President and the second woman after Pratibha Patil."));

// L10 — Prime Ministers in time
const PM = [["Jawaharlal Nehru", 1947, 1964], ["Lal Bahadur Shastri", 1964, 1966], ["Indira Gandhi", 1966, 1977], ["Morarji Desai", 1977, 1979], ["Charan Singh", 1979, 1980], ["Indira Gandhi", 1980, 1984], ["Rajiv Gandhi", 1984, 1989],
  ["V. P. Singh", 1989, 1990], ["Chandra Shekhar", 1990, 1991], ["P. V. Narasimha Rao", 1991, 1996], ["H. D. Deve Gowda", 1996, 1997], ["I. K. Gujral", 1997, 1998], ["Atal Bihari Vajpayee", 1998, 2004], ["Manmohan Singh", 2004, 2014], ["Narendra Modi", 2014, 2026, "serving"]]
  .map((r, i) => [r[0], r[1], r[2], ["#2f6db5", "#c0503a", "#2f8f4e", "#c69214", "#7d4fb5"][i % 5], r[3]]);
place("L10", "PM facts", KIT.fig("Prime Ministers of India", KIT.gantt("Prime Ministers of India", PM, 1947, 2027, 10), "Nehru served longest (about 17 years). Gulzarilal Nanda was acting PM twice (1964, 1966) and Vajpayee also served 13 days in 1996 — both left out of the bars."));

// L11 — Parliament seat by seat
const hemi = (cx, cy, n, r0, r1, rowsN, color, dot) => { const rs = [...Array(rowsN)].map((_, i) => r0 + i * (r1 - r0) / (rowsN - 1)), tot = rs.reduce((a, b) => a + b, 0);
  let left = n; const out = [];
  rs.forEach((r, i) => { const k = i === rowsN - 1 ? left : Math.round(n * r / tot); left -= k;
    for (let j = 0; j < k; j++) { const a = Math.PI - (j + .5) * Math.PI / k; out.push(`<circle cx="${(cx + r * Math.cos(a)).toFixed(1)}" cy="${(cy - r * Math.sin(a)).toFixed(1)}" r="${dot}" fill="${color}"/>`); } });
  return out.join(""); };
const PARL = `<svg class="dg" viewBox="0 0 680 300" role="img" aria-label="Parliament: President, Rajya Sabha and Lok Sabha">
  <circle cx="340" cy="38" r="26" fill="#7d4fb5"/><text x="340" y="43" text-anchor="middle" font-size="11" font-weight="800" style="fill:#fff">President</text>
  <path d="M326 58 L200 118 M354 58 L480 96" stroke="var(--rule)" stroke-width="2"/>
  ${hemi(180, 250, 245, 66, 132, 7, "#c0392b", 3.4)}${hemi(500, 250, 543, 66, 152, 11, "#2f8f4e", 2.7)}
  <text x="180" y="245" text-anchor="middle" font-size="14" class="b" style="fill:#c0392b">Rajya Sabha</text><text x="180" y="270" text-anchor="middle" font-size="11" class="mut">245 seats · 233 elected + 12 nominated</text>
  <text x="180" y="286" text-anchor="middle" font-size="10.5" class="mut">permanent · 1/3 retire every 2 years</text>
  <text x="500" y="245" text-anchor="middle" font-size="14" class="b" style="fill:#2f8f4e">Lok Sabha</text><text x="500" y="270" text-anchor="middle" font-size="11" class="mut">543 elected seats · max 550</text>
  <text x="500" y="286" text-anchor="middle" font-size="10.5" class="mut">5-year term · money bills start here</text></svg>`;
place("L11", "Articles 79", KIT.fig("Parliament = President + Rajya Sabha + Lok Sabha (Art 79)", PARL, "Each dot is a seat. The Rajya Sabha's carpet is red and the Lok Sabha's green — as here. UP has the most seats in both houses (31 and 80).", 600));

// L12 — how a bill travels
const BF = `<svg class="dg" viewBox="0 0 680 230" role="img" aria-label="How an ordinary bill and a money bill become law">${arrowDefs("bf")}
  <text x="10" y="40" font-size="13" class="b">Ordinary bill</text>
  ${card(120, 16, 120, 44, "Either house", "", "#2f6db5")}${card(290, 16, 120, 44, "Other house", "", "#2f6db5")}${card(460, 16, 200, 44, "President", "assent · withhold · return once", "#7d4fb5")}
  ${ln(240, 38, 286, 38, "bf")}${ln(410, 38, 456, 38, "bf")}<text x="290" y="80" font-size="10.5" class="mut">deadlock → joint sitting (Art 108), Speaker presides</text>
  <text x="10" y="140" font-size="13" class="b">Money bill</text>
  ${card(120, 116, 120, 44, "Lok Sabha only", "Speaker certifies", "#2f8f4e")}${card(290, 116, 120, 44, "Rajya Sabha", "14 days · advise", "#c0392b")}${card(460, 116, 200, 44, "President", "cannot return it", "#7d4fb5")}
  ${ln(240, 138, 286, 138, "bf")}${ln(410, 138, 456, 138, "bf")}<path d="M350 162 C350 205,180 205,180 164" fill="none" stroke="var(--ink2)" stroke-dasharray="4 3" marker-end="url(#bf)"/>
  <text x="200" y="212" font-size="10.5" class="mut">LS may accept or reject the RS's recommendations; no joint sitting</text></svg>`;
place("L12", "Kinds of bills", KIT.fig("How a bill becomes law", BF, "A money bill (Art 110) can start only in the Lok Sabha on the President's recommendation; the Rajya Sabha can only delay it 14 days. There is no joint sitting on a money bill or a constitutional amendment."));

// L14 — the Seventh Schedule
place("L14", "Seventh Schedule", { k: "bars", title: "The Seventh Schedule's three lists", unit: "subjects", left: 150, hi: 1, sort: false,
  rows: [["Union List", 100, "originally 97"], ["State List", 61, "originally 66"], ["Concurrent List", 52, "originally 47"]],
  cap: "The 42nd Amendment (1976) moved five subjects — education, forests, weights and measures, protection of wild animals and birds, and administration of justice — from the State to the Concurrent List. Residuary powers rest with the Union (Art 248, from Canada)." });

// L15 — the three emergencies side by side
const EM = rows("L15", "Three emergencies");
place("L15", "Three emergencies", { k: "info", title: "The three emergencies side by side", html: `<div class="fam">${[["National (Art 352)", "#c0392b", 1], ["President's Rule (Art 356)", "#c69214", 2], ["Financial (Art 360)", "#2f6db5", 3]]
  .map(([t, c, k]) => `<div style="border-top:5px solid ${c}"><b>${t}</b>${EM.map(r => `<small><b style="color:var(--ink2)">${r[0]}:</b> ${r[k]}</small>`).join("")}</div>`).join("")}</div>`,
  cap: "National Emergency was declared in 1962, 1971 and 1975; President's Rule more than 100 times; Financial Emergency never." });

// L16 — three ways to change the Constitution
place("L16", "Three ways", { k: "info", title: "Three ways to change the Constitution", html: `<div class="fam">${rows("L16", "Three ways").map((r, i) =>
  `<div style="border-top:5px solid ${["#2f8f4e", "#c69214", "#c0392b"][i]}"><b>${["① ", "② ", "③ "][i] + r[0]}</b><small>${r[1]}</small></div>`).join("")}</div>`,
  cap: "Each step is harder than the one before: simple majority → special majority of Parliament → special majority plus ratification by half the states." });

// L17 — the courts as a pyramid
const CT = `<svg class="dg" viewBox="0 0 640 250" role="img" aria-label="The hierarchy of courts">
  ${[["Supreme Court", "Art 124 · CJI + 33 judges", "#7d4fb5", 180], ["High Courts (25)", "Art 214 · Art 226 writs", "#2f6db5", 280], ["District & Sessions Courts", "Civil (District Judge) · Criminal (Sessions)", "#2f8f4e", 400], ["Subordinate courts", "Munsiff, magistrates · Lok Adalats", "#c69214", 520]]
    .map(([t, s, c, w], i) => `<path d="M${320 - w / 2 + 18} ${20 + i * 56} H${320 + w / 2 - 18} L${320 + w / 2} ${70 + i * 56} H${320 - w / 2} Z" fill="${c}" class="anim-in" style="animation-delay:${i * 120}ms"/>
      <text x="320" y="${42 + i * 56}" text-anchor="middle" font-size="13" font-weight="800" style="fill:#fff">${t}</text><text x="320" y="${60 + i * 56}" text-anchor="middle" font-size="10.5" style="fill:#fff">${s}</text>`).join("")}</svg>`;
place("L17", "Supreme Court articles", KIT.fig("One integrated judiciary", CT, "Appeals rise from the subordinate courts to the High Court and on to the Supreme Court, the final court of appeal and guardian of the Constitution."));

// L18 — three tiers of panchayats
const PT = `<svg class="dg" viewBox="0 0 640 250" role="img" aria-label="Three tiers of panchayati raj">
  ${[["Zila Parishad", "District", "#7d4fb5"], ["Panchayat Samiti", "Block (intermediate)", "#2f6db5"], ["Gram Panchayat", "Village", "#2f8f4e"]].map(([t, s, c], i) =>
    `<rect x="${130 + i * 30}" y="${18 + i * 58}" width="${380 - i * 60}" height="48" rx="10" fill="${c}"/><text x="320" y="${40 + i * 58}" text-anchor="middle" font-size="14" font-weight="800" style="fill:#fff">${t}</text><text x="320" y="${57 + i * 58}" text-anchor="middle" font-size="10.5" style="fill:#fff">${s}</text>`).join("")}
  ${[...Array(12)].map((_, i) => `<text x="${152 + i * 30}" y="216" font-size="20">🧑</text>`).join("")}<text x="320" y="242" text-anchor="middle" font-size="12" class="b">Gram Sabha — every adult voter of the village</text></svg>`;
place("L18", "73rd", KIT.fig("Panchayati raj: three tiers", PT, "The 73rd Amendment (1992) gave panchayats constitutional status (Part IX, 11th Schedule, 29 subjects). The intermediate tier is optional for states under 20 lakh people. First panchayat: Nagaur, Rajasthan, 2 October 1959."));

// L19 — constitutional bodies
place("L19", "Constitutional bodies", { k: "cards", title: "Constitutional bodies and their articles", rows: rows("L19", "Constitutional bodies").map((r, i) => [r[0], "Art " + r[1].replace(/ \(.*\)$/, ""), r[2].replace(/;.*$|\. .*$/, ""), ["🗳️", "📝", "💰", "🔍", "⚖️", "🤝", "🧾", "🏘️"][i] || "🏛️"]) });

// L20 — the article-number strip
// [from, to, name, colour, label row: −2/−1 above the strip, 1/2/3 below]
const RG = [[1, 4, "Union", "#a9805a", 3], [5, 11, "Citizenship", "#c69214", 1], [12, 35, "Fundamental Rights", "#c0392b", -2], [36, 51, "DPSP", "#e07b39", 2], [52, 78, "Union executive", "#7d4fb5", -1],
  [79, 122, "Parliament", "#2f8f4e", 1], [123, 123, "Ordinance", "#555", -2], [124, 147, "Supreme Court", "#2f6db5", 2], [148, 151, "CAG", "#1f8a8a", -1], [152, 237, "States", "#5aa85a", 1],
  [243, 243, "Panchayats & municipalities", "#8a6a3a", -2], [245, 300, "Centre–state, finance", "#b55a8a", 2], [315, 323, "UPSC & PSCs", "#2f6db5", -2], [324, 329, "Elections", "#c0392b", 1], [352, 360, "Emergency", "#7a1f1f", 3], [368, 368, "Amendment", "#222", -1]];
const sx = a => 24 + a / 395 * 632, LY = { "-2": 34, "-1": 56, "1": 130, "2": 154, "3": 178 };
const STRIP = `<svg class="dg" viewBox="0 0 680 220" role="img" aria-label="Where the main articles fall">
  <rect x="24" y="74" width="632" height="34" rx="6" fill="var(--sunk)"/>
  ${RG.map(([a, b, t, c, lv], i) => { const x = sx((a + b) / 2), y = LY[lv], anc = x < 110 ? "start" : x > 590 ? "end" : "middle";
    return `<rect x="${sx(a)}" y="74" width="${Math.max(3, sx(b + 1) - sx(a))}" height="34" fill="${c}" class="anim-in" style="animation-delay:${i * 50}ms"><title>${t}: ${a}–${b}</title></rect>` +
      `<line x1="${x}" y1="${lv < 0 ? 74 : 108}" x2="${x}" y2="${lv < 0 ? y + 4 : y - 11}" stroke="${c}"/><text x="${anc === "start" ? x - 4 : anc === "end" ? x + 4 : x}" y="${y}" text-anchor="${anc}" font-size="9.5" font-weight="700" style="fill:${c}">${t} ${a === b ? a : a + "–" + b}</text>`; }).join("")}
  <text x="24" y="212" font-size="10.5" class="mut">Article 1 →</text><text x="656" y="212" text-anchor="end" font-size="10.5" class="mut">→ 395</text></svg>`;
place("L20", "Range map", KIT.fig("The Constitution as a number line", STRIP, "Know the ranges and most option sets fall apart: 12–35 rights, 36–51 directives, 52–78 executive, 79–122 Parliament, 124–147 Supreme Court, 352–360 emergency, 368 amendment.", 640));

// L13 — women firsts
place("L13", "Women firsts", KIT.photos("Women firsts in pictures", [["Sucheta Kripalani", "First woman CM — UP, 1963"], ["Sarojini Naidu", "First woman Governor — UP, 1947"], ["Anna Chandy", "First woman HC judge, 1959"], ["Leila Seth", "First woman HC Chief Justice, 1991"],
  ["M. Fathima Beevi", "First woman SC judge, 1989"], ["Vijaya Lakshmi Pandit", "First woman UNGA President, 1953"]]));

VISUAL = { mode: "world", VIS: { key: "polity_photos_v1", word: "person", words: "people", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

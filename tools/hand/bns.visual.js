/* BNS, BNSS & BSA — old and new laws by number of sections, the procedure's deadlines on one time line, the custody ladder
   and old → new section numbers (drawn by study-visual.js). place(), rows() and KIT come from tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const NT = rows("L2", "The number table");
const NB = `<svg class="dg" viewBox="0 0 660 230" role="img" aria-label="Sections in the old and new criminal laws">
  ${NT.map((r, i) => { const old = parseInt(r[4], 10), now = parseInt(r[2], 10), y = 20 + i * 66, k = 0.8;
    return T(10, y + 14, r[1], "#7a7a7a", "start", 11) + `<rect x="150" y="${y}" width="${old * k}" height="20" rx="4" fill="#a9a9a9"/>${T(156 + old * k, y + 15, old + " sections", "#7a7a7a", "start", 11)}` +
      T(10, y + 40, r[0], "#2f6db5", "start", 12) + `<rect x="150" y="${y + 26}" width="${now * k}" height="20" rx="4" fill="#2f6db5" class="anim-in" style="animation-delay:${i * 120}ms"/>${T(156 + now * k, y + 41, now + " sections", "#2f6db5", "start", 11)}`; }).join("")}</svg>`;
place("L2", "The number table", KIT.fig("Old laws vs new: number of sections", NB, "In force from 1 July 2024. BNS is shorter than the IPC (358 vs 511); BNSS is longer than the CrPC (531 vs 484); BSA is a little longer than the Evidence Act (170 vs 167)."));
const TL = rows("L11", "Timeline table").filter(r => /hour|day/.test(r[0]));
const days = s => { const m = s.match(/([\d.]+)/g).map(Number), d = m[m.length - 1]; return /hour/.test(s) ? d / 24 : d; };
const lx = d => 30 + Math.log10(d * 24) / Math.log10(120 * 24) * 610;
const TLS = `<svg class="dg" viewBox="0 0 680 ${70 + TL.length * 22}" role="img" aria-label="BNSS deadlines on a time line">
  <line x1="30" y1="40" x2="650" y2="40" stroke="var(--ink)" stroke-width="2"/>${[["1 h", 1 / 24], ["1 day", 1], ["1 week", 7], ["1 month", 30], ["3 months", 90]].map(([t, d]) => `<line x1="${lx(d)}" y1="35" x2="${lx(d)}" y2="45" stroke="var(--ink)"/><text x="${lx(d)}" y="28" text-anchor="middle" font-size="10" class="mut">${t}</text>`).join("")}
  ${TL.map((r, i) => { const x = lx(days(r[0])), y = 64 + i * 22, right = x < 380; return `<circle cx="${x}" cy="40" r="4" fill="hsl(${i * 30},55%,45%)"/><line x1="${x}" y1="44" x2="${x}" y2="${y - 4}" stroke="hsl(${i * 30},55%,45%)" stroke-opacity=".5"/>` +
    `<text x="${x + (right ? 5 : -5)}" y="${y}" text-anchor="${right ? "start" : "end"}" font-size="10.5"><tspan font-weight="800" style="fill:hsl(${i * 30},55%,38%)">${r[0]}</tspan> · ${(t => t.length > 52 ? t.slice(0, t.lastIndexOf(" ", 52)) + "…" : t)(r[1].split(/;| \(/)[0])}</text>`; }).join("")}</svg>`;
place("L11", "Timeline table", KIT.fig("BNSS deadlines on one line", TLS, "From 24 hours (produce the arrested person before a magistrate) to 120 days (sanction to prosecute a public servant). Log scale: each step is longer than the last.", 600));
place("L9", "Custody and default bail", { k: "cards", title: "The custody ladder", rows: rows("L9", "Custody").map((r, i) => [r[0], "", r[1], ["⏱️", "🚔", "🗓️", "⏳", "🔓"][i] || "•"]) });
place("L7", "Old → new", { k: "cards", title: "Old IPC section → new BNS section", rows: rows("L7", "Old → new").map(r => [r[1].replace(/^→\s*/, ""), r[0].replace(/^IPC (\S+) /, "IPC $1 · "), "", "⚖️"]) });

// ---- added: community service, the new offences, an FIR's journey, rights on arrest, four words, technology, confessions ----
const bT = (x, y, t, c, a, sz) => `<text x="${x}" y="${y}" font-size="${sz || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const bM = (x, y, t, a, sz) => `<text x="${x}" y="${y}" font-size="${sz || 10.5}" text-anchor="${a || "start"}" class="mut">${t}</text>`;
const bW = (x, y, t, sz, b) => `<text x="${x}" y="${y}" font-size="${sz || 10.5}"${b ? ' font-weight="700"' : ""} text-anchor="middle" style="fill:#fff;opacity:.96">${t}</text>`;
const bBox = (x, y, w, h, c, t, lines) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${c}"/>${bW(x + w / 2, y + 20, t, 12.5, 1)}${lines.map((l, i) => bW(x + w / 2, y + 37 + i * 13, l)).join("")}`;
const bArw = `<defs><marker id="bnA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="context-stroke"/></marker></defs>`;
const bAr = d => `<path d="${d}" fill="none" stroke="var(--ink2)" stroke-width="2" marker-end="url(#bnA)"/>`;
const first = (t, n) => { t = String(t).split(/ — | \(|; /)[0]; return t.length > n ? t.slice(0, n - 1).replace(/\s+\S*$/, "") + "…" : t; };

place("L3", "The six offences", { k: "cards", title: "Community service: only for these six", rows: rows("L3", "The six offences").map((r, i) => ["BNS " + r[0], first(r[1], 70), "", ["🏪", "📜", "🚫", "👜", "🍺", "🗣️"][i] || "⚖️"]) });
const NO = rows("L5", "New offences");
place("L5", "New offences", { k: "cards", title: "The new offences, section by section", rows: NO.map(r => ["BNS " + r[0], first(r[1], 80), first(r[2], 60), ""]) });

// L8 — an FIR's journey; rights on arrest
const need8 = (t, re) => { if (!re.test(rows("L8", t).map(r => r.join(" | ")).join("\n"))) fail("bns L8 " + t + ": the lesson no longer says " + re); };
need8("FIR", /sign within 3 days/); need8("FIR", /3 to 7 years.*within 14 days/); need8("FIR", /within 90 days/); need8("Arrest", /58 \(57\).*24 hours/); need8("Arrest", /47 \(50\)/); need8("Arrest", /48 \(50A\)/);
const FIR = `<svg class="dg" viewBox="0 0 640 250" role="img" aria-label="An FIR's journey under the BNSS, and the rights of an arrested person">${bArw}
  ${bT(8, 16, "An FIR under BNSS 173", "var(--ink)", "start", 13)}
  ${bBox(8, 24, 146, 66, "#2f6db5", "Zero FIR", ["any police station,", "then transferred"])}${bBox(8, 96, 146, 52, "#2f6db5", "e-FIR", ["sign within 3 days"])}
  ${bAr("M156 60 H176")}${bAr("M156 122 H166 V70 H176")}
  ${bBox(180, 34, 140, 80, "#a8780a", "Preliminary inquiry", ["offences of 3 to 7 years", "within 14 days", "(DSP's permission)"])}${bAr("M322 74 H342")}
  ${bBox(346, 34, 130, 80, "#2f8f4e", "Investigation", ["free copy of the FIR", "to the informant", "or victim"])}${bAr("M478 74 H498")}
  ${bBox(502, 34, 130, 80, "#7d4fb5", "Victim updates", ["progress told to", "the victim within", "90 days"])}
  ${bT(8, 176, "If the police arrest without a warrant", "var(--ink)", "start", 13)}
  ${bBox(8, 184, 196, 58, "#c0392b", "BNSS 47", ["told the grounds, and the", "right to bail, at once"])}${bAr("M206 213 H218")}
  ${bBox(222, 184, 196, 58, "#c0392b", "BNSS 48", ["a relative or friend", "is informed"])}${bAr("M420 213 H432")}
  ${bBox(436, 184, 196, 58, "#c0392b", "BNSS 58 · Art 22(2)", ["before a magistrate within", "24 hours (journey excluded)"])}</svg>`;
place("L8", "FIR", KIT.fig("An FIR's journey, and three rights on arrest", FIR, "Zero FIR means the police station cannot refuse for want of jurisdiction. A woman is not arrested after sunset or before sunrise except with a magistrate's permission (BNSS 43(5))."));
const CB = rows("L8", "Cognizable");
place("L8", "Cognizable", { k: "cards", title: "Four words that are always asked", rows: CB.map((r, i) => [r[0], "", r[1], ["🚓", "📝", "🔓", "⚖️"][i] || ""]) });
place("L10", "Technology", { k: "cards", title: "Technology written into the BNSS", rows: rows("L10", "Technology").map((r, i) => ["BNSS " + r[0], "", first(r[1], 110), ["📹", "🔬", "🎙️", "✍️", "📨", "💻", "🛡️"][i] || ""]) });
const CF = rows("L13", "Kinds of confession").filter(r => !/ vs /.test(r[0]));
place("L13", "Kinds of confession", { k: "cards", title: "Three kinds of confession", rows: CF.map((r, i) => [r[0], ["strongest", "needs support", "withdrawn later"][i] || "", r[1], ["🏛️", "🗨️", "↩️"][i] || ""]) });

VISUAL = { mode: true, VIS: { key: "bns_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

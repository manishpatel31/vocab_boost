/* Constitutional & Statutory Bodies — the bodies on an Article number line, firsts in pictures, election and watchdog
   timelines, Finance Commissions in time, three kinds of body sorted by colour, headquarters on the map, and tenure,
   removal and composition side by side (drawn by study-visual.js). place(), rows(), fail and KIT come from applyVisual. */
const yr = s => parseInt(String(s).match(/\d{4}/) || [0], 10);
const art = s => parseInt(String(s).match(/\d+/) || [0], 10);

// C1 — the bodies on the Article number line
const BA = rows("C1", "Body → Article").map(r => [r[0].replace(/ \(.*\)$/, ""), art(r[1])]).filter(r => r[1]).sort((a, b) => a[1] - b[1]);
const sx = a => 30 + (a - 60) / (360 - 60) * 620;
const AL = `<svg class="dg" viewBox="0 -34 680 ${94 + BA.length * 19}" role="img" aria-label="The bodies placed by Article number">
  <line x1="30" y1="30" x2="650" y2="30" stroke="var(--ink)" stroke-width="2"/>${[60, 100, 150, 200, 250, 300, 350].map(a => `<line x1="${sx(a)}" y1="25" x2="${sx(a)}" y2="35" stroke="var(--ink)"/><text x="${sx(a)}" y="18" text-anchor="middle" font-size="10" class="mut">${a}</text>`).join("")}
  ${BA.map(([n, a], i) => { const x = sx(Math.min(Math.max(a, 60), 360)), y = 50 + i * 19, right = x < 400; return `<line x1="${x}" y1="30" x2="${x}" y2="${y - 4}" stroke="hsl(${i * 24},55%,45%)" stroke-opacity=".6"/><circle cx="${x}" cy="30" r="4" fill="hsl(${i * 24},55%,45%)"/>` +
    `<text x="${x + (right ? 6 : -6)}" y="${y}" text-anchor="${right ? "start" : "end"}" font-size="11" font-weight="700" style="fill:hsl(${i * 24},55%,38%)">${a} · ${n}</text>`; }).join("")}</svg>`;
place("C1", "Body → Article", KIT.fig("Which Article, on one line", AL, "From the Attorney General (76) and the CAG (148) through the Public Service Commissions (315) to the Election Commission (324) and the SC/ST/BC commissions (338)."),
  KIT.photos("Firsts in pictures", rows("C1", "Firsts").slice(0, 8).map(r => [r[1], r[0]]), { wiki: r => r[0].replace(/ \(.*\)$/, "") }));

// C2 — the election story
place("C2", "Election milestones", { k: "tlfig", title: "Elections, year by year", rows: rows("C2", "Election milestones").map(r => [yr(r[1]), r[0].replace(/ \(.*\)$/, ""), ""]).filter(r => r[0]).sort((a, b) => a[0] - b[0]),
  cap: "The first general election (1951–52) under Sukumar Sen; EVMs across the country from 2004; VVPAT in all seats from 2019." },
  KIT.photos("Voting in pictures", [["Electronic voting machine", "EVM"], ["Voter-verified paper audit trail", "VVPAT"], ["Election ink", "Indelible ink — Mysore Paints"], ["T. N. Seshan", "CEC who enforced the code"], ["Sukumar Sen", "First CEC"]],
    { name: r => r[0].replace(/^Electronic voting machine$/, "EVM").replace(/^Voter-verified paper audit trail$/, "VVPAT").replace(/^Election ink$/, "Indelible ink") }));

// C4 — Finance Commissions in time
place("C4", "Finance Commission chairmen", { k: "tlfig", title: "Finance Commissions and their chairmen", rows: rows("C4", "Finance Commission chairmen").map(r => [yr(r[0]), r[0].replace(/ \(.*\)$/, "") + " — " + r[1], ""]).filter(r => r[0]),
  cap: "A Finance Commission comes every five years under Article 280 to share central taxes with the states." });

// C6–C7 — milestones
place("C6", "Milestones", { k: "tlfig", title: "Commissions, year by year", rows: rows("C6", "Milestones").map(r => [yr(r[1]), r[0], ""]).filter(r => r[0]).sort((a, b) => a[0] - b[0]) });
place("C7", "Milestones", { k: "tlfig", title: "The watchdogs, year by year", rows: rows("C7", "Milestones").map(r => [yr(r[1]), r[0], ""]).filter(r => r[0]).sort((a, b) => a[0] - b[0]),
  cap: "From the Santhanam Committee (1962) to the Lokpal and Lokayuktas Act (2013) and the first Lokpal (2019)." });

// C8 — headquarters on the map
const HQC = { "Mumbai": [72.88, 19.08], "Hyderabad": [78.49, 17.39], "New Delhi": [77.21, 28.61] };
const HR = rows("C8", "Headquarters"), hb = {}; HR.forEach(r => { const c = Object.keys(HQC).find(k => r[1].startsWith(k)); if (!c) fail("bodies: no place for " + r[1]); (hb[c] = hb[c] || []).push(r[0].replace(/ \(.*\)$/, "")); });
place("C8", "Headquarters", { k: "mapfig", title: "Where the regulators sit", pins: Object.entries(hb).map(([c, l]) => [c, HQC[c][0], HQC[c][1], l.join(", "), c === "Mumbai" ? "l" : ""]),
  cap: "Money regulators (RBI, SEBI) sit in Mumbai; IRDAI in Hyderabad; most others in New Delhi." });

// C9 — three kinds of body, sorted by colour
const KC = { "Constitutional body": "#c0503a", "Statutory body": "#2f6db5", "Executive body": "#2f8f4e" };
const KR = rows("C9", "Which kind"), kinds = {}; KR.forEach(r => { const k = Object.keys(KC).find(k => r[1].startsWith(k.split(" ")[0])) || r[1]; (kinds[k] = kinds[k] || []).push(r); });
place("C9", "Which kind", { k: "info", title: "Constitutional, statutory or executive?", html: `<div class="fam">${Object.entries(kinds).map(([k, l]) => `<div style="border-top:5px solid ${KC[k] || "#888"}"><b>${k}</b>` +
  l.map(r => `<small><b style="color:${KC[k] || "#888"}">${r[0]}</b> — ${r[2].replace(/\.$/, "")}</small>`).join("") + "</div>").join("")}</div>`,
  cap: "Constitutional: named in the Constitution. Statutory: made by an Act of Parliament. Executive: made by a government resolution (NITI Aayog, once the Planning Commission)." });

// C10 — tenure, removal and composition side by side
const TN = rows("C10", "Tenure"), RM = rows("C10", "How removed");
place("C10", "Tenure", { k: "cards", title: "Term and removal at a glance", rows: TN.map(r => { const m = RM.find(x => x[0] === r[0]); return [r[0], r[1], m ? "Removed: " + m[1].replace(/\.$/, "") : "", "⏳"]; }) });

// ---- added: UPSC against a State PSC, the Attorney General against an Advocate General ----

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

place("C3", "UPSC vs State PSC", KIT.fig("UPSC and State PSC, side by side", versus("UPSC compared with a State Public Service Commission", "UPSC", "State PSC", rows("C3", "UPSC vs State PSC")), "The dots mark the rows that differ. The catch: a State PSC member is appointed by the Governor but can be removed only by the President."));
place("C5", "Attorney General vs Advocate General", KIT.fig("Attorney General and Advocate General, side by side", versus("Attorney General compared with Advocate General", "Attorney General", "Advocate General", rows("C5", "Attorney General vs Advocate General"), VC[3], VC[5]), "Swap President for Governor, Supreme Court for High Court and Parliament for state legislature, and one becomes the other."));

VISUAL = { mode: true, VIS: { key: "bodies_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

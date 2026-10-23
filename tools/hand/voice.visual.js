/* Active & Passive Voice — the four steps drawn on one sentence, the pronoun pairs, every tense's passive on one grid and
   the imperative patterns as a chooser (drawn by study-visual.js). place(), rows() and KIT come from
   tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s, w) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="${w || 700}" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const M = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${c}"/></marker>`;
const chip = (x, y, w, t, c, cls) => `<g${cls ? ` class="${cls}"` : ""}><rect x="${x}" y="${y}" width="${w}" height="40" rx="10" fill="${c}"/>${T(x + w / 2, y + 26, t, "#fff", "middle", 15)}</g>`;
const SUB = "#2f6db5", OBJ = "#c0503a", VB = "#2f8f4e", RM = "@media (prefers-reduced-motion:reduce){";

// L2 — the four steps on one sentence
const ST = `<svg class="dg" viewBox="0 0 660 270" role="img" aria-label="Ravi writes a letter becomes A letter is written by Ravi">
  <defs>${M("vs", SUB)}${M("vo", OBJ)}${M("vv", VB)}</defs>
  ${T(20, 30, "Active", "var(--ink2)", "start", 12)}${chip(20, 40, 140, "Ravi", SUB)}${chip(190, 40, 140, "writes", VB)}${chip(360, 40, 160, "a letter.", OBJ)}
  ${T(20, 180, "Passive", "var(--ink2)", "start", 12)}${chip(20, 190, 160, "A letter", OBJ, "vp1")}${chip(200, 190, 180, "is written", VB, "vp2")}${chip(400, 190, 160, "by Ravi.", SUB, "vp3")}
  <path d="M440 82 C440 140, 100 130, 100 186" fill="none" stroke="${OBJ}" stroke-width="2.5" marker-end="url(#vo)"/>
  <path d="M90 82 C90 140, 480 130, 480 186" fill="none" stroke="${SUB}" stroke-width="2.5" marker-end="url(#vs)"/>
  <path d="M260 82 V186" fill="none" stroke="${VB}" stroke-width="2.5" marker-end="url(#vv)"/>
  ${T(268, 126, "be + V3", VB, "start", 13)}${T(650, 112, "1 swap the two ends", "var(--ink2)", "end", 11)}${T(650, 128, "2–3 be + V3 for the tense", "var(--ink2)", "end", 11)}
  ${T(330, 258, "4 · the helping verb agrees with the NEW subject: a letter is … / letters are …", "var(--ink2)", "middle", 11.5)}
  <style>.vp1,.vp2,.vp3{animation:vpin 1.2s ease-out both}.vp2{animation-delay:.4s}.vp3{animation-delay:.8s}@keyframes vpin{from{opacity:0}to{opacity:1}}${RM}.vp1,.vp2,.vp3{animation:none}}</style></svg>`;
place("L2", "Four steps of active", KIT.fig("Active → passive in one picture", ST, "The object (a letter) moves to the front, the subject (Ravi) goes after “by”, and the verb becomes the right form of “be” + V3."));

// L2 — pronoun pairs
const PN = rows("L2", "Pronoun change");
const PNF = `<svg class="dg" viewBox="0 0 660 190" role="img" aria-label="Subject pronouns and their object forms"><g transform="translate(0 40)">
  ${PN.map(([s, o], i) => { const x = 10 + i * 81; return `<rect x="${x}" y="20" width="74" height="38" rx="8" fill="${SUB}"/>` + T(x + 37, 45, s, "#fff", "middle", 15) +
    T(x + 37, 80, "↓", "var(--ink2)", "middle", 15) + `<rect x="${x}" y="90" width="74" height="38" rx="8" fill="${OBJ}"/>` + T(x + 37, 115, o, "#fff", "middle", 15); }).join("")}</g></svg>`;
place("L2", "Pronoun change", KIT.fig("Subject form → object form after “by”", PNF, "After “by” the pronoun takes its object form: by me, by us, by him, by her, by them, by whom. You and it do not change."));

// L3 — every tense's passive on one grid
const GR = [["Present", "is/am/are + V3", "is/am/are being + V3", "has/have been + V3", ""], ["Past", "was/were + V3", "was/were being + V3", "had been + V3", ""], ["Future", "will/shall be + V3", "", "will/shall have been + V3", ""]];
const ASP = ["Simple", "Continuous", "Perfect", "Perfect continuous"];
const GRF = `<svg class="dg" viewBox="0 0 680 265" role="img" aria-label="The passive helping verb for every tense"><g transform="translate(0 35)">
  ${ASP.map((a, j) => T(150 + j * 132 + 63, 24, a, "var(--ink2)", "middle", 12)).join("")}
  ${GR.map((r, i) => { const y = 40 + i * 60; return T(130, y + 30, r[0], "var(--ink)", "end", 14) + r.slice(1).map((c, j) => { const x = 150 + j * 132;
    return `<rect x="${x}" y="${y}" width="126" height="50" rx="8" fill="${c ? "hsla(135,50%,45%,.22)" : "var(--sunk)"}" stroke="var(--rule)"/>` + T(x + 63, y + 30, c || "no passive", c ? "var(--ink)" : "var(--ink2)", "middle", c.length > 22 ? 9.5 : c.length > 18 ? 10.5 : 11.5, c ? 700 : 500); }).join(""); }).join("")}
  ${T(340, 224, "Only the helping verb changes with the tense; the main verb is always V3. Modals: modal + be + V3 (must be obeyed).", "var(--ink2)", "middle", 11)}</g></svg>`;
place("L3", "Present tense table", KIT.fig("Every tense in the passive", GRF, "Learn this grid and you can turn any SSC sentence: continuous adds “being”, perfect adds “been”. Perfect continuous and future continuous have no usual passive.", 560));

// L6 — which imperative pattern?
const IM = rows("L6", "Imperative patterns");
const IMF = `<svg class="dg" viewBox="0 0 660 ${80 + IM.length * 44}" role="img" aria-label="Imperative sentences in the passive"><g transform="translate(0 40)">
  ${IM.map((r, i) => { const y = 20 + i * 44; return `<rect x="10" y="${y}" width="190" height="36" rx="8" fill="var(--sunk)" stroke="var(--rule)"/>` + T(105, y + 23, r[0].replace(/ \(.*\)/, ""), "var(--ink)", "middle", 12) +
    T(214, y + 23, "→", "var(--ink2)", "middle", 15) + `<rect x="230" y="${y}" width="230" height="36" rx="8" fill="hsla(135,50%,45%,.22)" stroke="var(--rule)"/>` + T(345, y + 23, r[1], "var(--ink)", "middle", r[1].length > 30 ? 10 : 11.5) +
    `<text x="470" y="${y + 23}" font-size="10.5" class="mut">${r[2].split(" → ")[0].slice(0, 30)}</text>`; }).join("")}</g></svg>`;
place("L6", "Imperative patterns", KIT.fig("Commands in the passive", IMF, "With an object: Let + object + be + V3. Without one, use “You are requested / ordered / advised / warned to + V1”, chosen by the tone of the command."));

VISUAL = { mode: true, VIS: { key: "voice_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

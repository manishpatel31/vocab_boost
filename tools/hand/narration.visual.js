/* Narration — the five steps colour-coded on one sentence, the SON rule, backshift as steps, near → far words and the
   reporting verb for each kind of sentence (drawn by study-visual.js). place(), rows() and KIT come from
   tools/workbook/apply-hand.js. */
const T = (x, y, t, c, a, s, w) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="${w || 700}" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const M = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${c}"/></marker>`;
const C = ["#7a4fb0", "#c69214", "#2f6db5", "#2f8f4e", "#c0503a"];

// L2 — the five steps, each change in its own colour
const PARTS = [["He", "", "He"], ["said to me,", 0, "told me"], ["“", 1, "that"], ["I", 2, "he"], ["am", 3, "was"], ["busy", "", "busy"], ["now.”", 4, "then."]];
let dx = 20, ix = 20; const W = s => 10 + s.length * 9.2;
const FIVE = `<svg class="dg" viewBox="0 0 660 230" role="img" aria-label="He said to me, I am busy now, becomes He told me that he was busy then">
  ${T(20, 26, "Direct", "var(--ink2)", "start", 12)}${T(20, 126, "Indirect", "var(--ink2)", "start", 12)}
  ${PARTS.map(([d, k, n]) => { const c = k === "" ? "var(--ink)" : C[k], wd = W(d), wn = W(n), out = `<text x="${dx}" y="62" font-size="18" font-weight="700" style="fill:${c}">${d}</text><text x="${ix}" y="162" font-size="18" font-weight="700" style="fill:${c}">${n}</text>` +
    (k === "" ? "" : `<path d="M${dx + wd / 2 - 5} 70 L${ix + wn / 2 - 5} 142" stroke="${c}" stroke-width="1.5" stroke-dasharray="4 3"/>`); dx += wd + 8; ix += wn + 8; return out; }).join("")}
  ${["1 reporting verb", "2 joining word", "3 pronoun (SON)", "4 tense back", "5 near → far"].map((t, i) => `<rect x="${20 + i * 128}" y="194" width="12" height="12" rx="3" fill="${C[i]}"/>` + T(38 + i * 128, 205, t, "var(--ink)", "start", 11)).join("")}</svg>`;
place("L2", "Five steps of direct", KIT.fig("Five changes in one sentence", FIVE, "said to → told; the inverted commas become “that”; “I” follows the subject (he); am goes one step back to was; now becomes then."));

// L2 — the SON rule
const SON = rows("L2", "SON rule");
const SONF = `<svg class="dg" viewBox="0 0 660 240" role="img" aria-label="SON rule: first person follows the subject, second the object, third no change"><g transform="translate(0 40)">
  ${SON.map((r, i) => { const x = 20 + i * 214, L = "SON"[i]; return `<rect x="${x}" y="16" width="200" height="170" rx="12" fill="hsla(${210 + i * 60},55%,50%,.14)" stroke="var(--rule)"/>` +
    `<circle cx="${x + 34}" cy="50" r="22" fill="${C[i + 2]}"/>` + T(x + 34, 58, L, "#fff", "middle", 22) + T(x + 66, 46, r[0].split(" (")[0], "var(--ink)", "start", 13) +
    `<text x="${x + 66}" y="62" font-size="10.5" class="mut">${(r[0].match(/\((.*)\)/) || ["", ""])[1].split(", ").slice(0, 4).join(", ")}</text>` +
    T(x + 14, 98, "→ " + r[1], C[i + 2], "start", 12) +
    `<text x="${x + 14}" y="128" font-size="10.5" class="mut">${r[2].split(" → ")[0]}</text><text x="${x + 14}" y="146" font-size="10.5" class="mut">→ ${r[2].split(" → ")[1] || ""}</text>`; }).join("")}</g></svg>`;
place("L2", "SON rule", KIT.fig("S · O · N", SONF, "First person follows the Subject of the reporting verb, second person follows its Object, and third person does Not change.", 560));

// L3 — backshift as steps
const BS = [["Present", ["V1 / V5", "is / am / are + Ving", "has / have + V3", "has been + Ving"]], ["Past", ["V2", "was / were + Ving", "had + V3", "had been + Ving"]], ["Past perfect", ["had + V3", "had been + Ving", "had + V3", "had been + Ving"]]];
const BSF = `<svg class="dg" viewBox="0 0 680 305" role="img" aria-label="Backshift: present to past, past to past perfect"><g transform="translate(0 35)">
  <defs>${M("bs", "var(--accent)")}</defs>
  ${["Simple", "Continuous", "Perfect", "Perfect continuous"].map((a, j) => T(120, 66 + j * 50, a, "var(--ink2)", "end", 12)).join("")}
  ${BS.map(([h, cells], i) => { const x = 140 + i * 180; return T(x + 70, 30, h, "var(--ink)", "middle", 14) + cells.map((c, j) => { const y = 42 + j * 50;
    return `<rect x="${x}" y="${y}" width="140" height="38" rx="8" fill="${i === 0 ? "hsla(212,60%,55%,.2)" : i === 1 ? "hsla(20,85%,55%,.2)" : "var(--sunk)"}" stroke="var(--rule)"/>` + T(x + 70, y + 24, c, "var(--ink)", "middle", 11.5) +
      (i < 2 && !(i === 1 && j > 1) ? `<path d="M${x + 142} ${y + 19} H${x + 176}" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#bs)"/>` : ""); }).join(""); }).join("")}
  ${T(340, 260, "Each tense moves one step to the right. Past perfect has nowhere to go, so it stays. will → would, can → could, may → might.", "var(--ink2)", "middle", 11)}</g></svg>`;
place("L3", "Backshift table", KIT.fig("One step back", BSF, "If the reporting verb is in the past (said, told), every tense in the quote steps one place to the right: present → past → past perfect. Past perfect and past perfect continuous stay as they are.", 560));

// L5 — near words become far words
const NF = rows("L5", "Near").slice(0, 12);
const NFF = `<svg class="dg" viewBox="0 0 660 ${70 + Math.ceil(NF.length / 2) * 40}" role="img" aria-label="Near words in direct speech become far words in indirect speech"><g transform="translate(0 40)">
  ${NF.map(([a, b], i) => { const x = (i % 2) * 330 + 10, y = 14 + Math.floor(i / 2) * 40; return `<rect x="${x}" y="${y}" width="110" height="32" rx="8" fill="hsla(212,60%,55%,.25)"/>` + T(x + 55, y + 21, a, "var(--ink)", "middle", 13) +
    T(x + 125, y + 22, "→", "var(--ink2)", "middle", 15) + `<rect x="${x + 140}" y="${y}" width="175" height="32" rx="8" fill="hsla(20,85%,55%,.25)"/>` + T(x + 227, y + 21, b.split(" / ")[0], "var(--ink)", "middle", 13); }).join("")}</g></svg>`;
place("L5", "Near", KIT.fig("Near → far", NFF, "Words that point to the speaker's here and now move away: now → then, here → there, today → that day, tomorrow → the next day, yesterday → the previous day, ago → before."));

// L7 — the reporting verb for each kind of sentence
const KINDS = [["Statement", "said / told + that", "“I am tired.” → said that he was tired"], ["Question (yes/no)", "asked + if / whether", "“Are you ready?” → asked if I was ready"], ["Question (wh-)", "asked + wh-word", "“Where do you live?” → asked where I lived"],
  ["Order", "ordered / commanded + to V1", "“Stand up.” → ordered the boy to stand up"], ["Request", "requested + to V1", "“Please help me.” → requested me to help her"], ["Advice", "advised + to V1", "“Work hard.” → advised me to work hard"],
  ["Suggestion (let’s)", "suggested that … should", "“Let’s go.” → suggested that they should go"], ["Exclamation", "exclaimed with joy / sorrow", "“What a goal!” → exclaimed that it was a fine goal"]];
const KF = `<svg class="dg" viewBox="0 0 680 ${60 + KINDS.length * 40}" role="img" aria-label="Which reporting verb for which kind of sentence"><g transform="translate(0 40)">
  ${KINDS.map(([k, v, e], i) => { const y = 10 + i * 40; return `<rect x="10" y="${y}" width="150" height="32" rx="8" fill="hsla(${i * 40},55%,50%,.22)"/>` + T(85, y + 21, k, "var(--ink)", "middle", 12) +
    T(176, y + 21, v, "var(--ink)", "start", 12.5) + `<text x="370" y="${y + 21}" font-size="10.5" class="mut">${e}</text>`; }).join("")}</g></svg>`;
place("L7", "Imperative patterns", KIT.fig("Which reporting verb?", KF, "The kind of sentence inside the commas decides the reporting verb and the joining word: statements take that, questions take if/whether or the wh-word, commands take to + V1.", 560));

VISUAL = { mode: true, VIS: { key: "narration_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

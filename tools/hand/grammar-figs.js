#!/usr/bin/env node
/* Grammar 100 — one picture for the rules that are easiest to see: my/mine, who/whom/which, few/a few/the few,
   intransitive/transitive pairs, a/an by sound, the nearer subject, a number of / the number of, helping verb → verb form,
   since/for and before/after on a timeline, question tags, between/among and the three conditionals.
   The page has its own engine (no study-visual.js), so this script writes RULE_FIG and its CSS into
   study-grammar-100.html and hooks openRule() to draw the picture under the rule's logic. Run again after editing:
     node tools/hand/grammar-figs.js
   Colours are the page's own theme variables, so every picture follows light and dark mode. */
const fs = require("fs"), path = require("path");
const FILE = path.join(__dirname, "..", "..", "study-grammar-100.html");

const T = (x, y, t, o = {}) => `<text x="${x}" y="${y}" font-size="${o.s || 14}" font-weight="${o.w || 600}" text-anchor="${o.a || "start"}" style="fill:var(--${o.c || "ink"})"${o.it ? ' font-style="italic"' : ""}>${t}</text>`;
const B = (x, y, w, h, f, st) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" style="fill:var(--${f || "card"});stroke:var(--${st || "line"})" stroke-width="1.5"/>`;
const L = (d, c, mk, dash) => `<path d="${d}" fill="none" style="stroke:var(--${c || "muted"})" stroke-width="2"${dash ? ' stroke-dasharray="5 4"' : ""}${mk ? ` marker-end="url(#${mk})"` : ""}/>`;
const MK = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" style="fill:var(--${c || "muted"})"/></marker>`;
const svg = (h, label, inner, w = 460) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${inner}</svg>`;

const FIGS = {};

// 1 — the adjective needs a noun; the pronoun swallows it
FIGS[1] = { t: "Adjective + noun → one pronoun", c: "The pronoun already contains the noun, so nothing may follow it: “my book” = “mine”. His stays his.",
  s: svg(250, "my book becomes mine", `<defs>${MK("g1")}</defs>${T(20, 22, "adjective + noun", { c: "muted", s: 12 })}${T(300, 22, "pronoun (alone)", { c: "muted", s: 12 })}` +
    [["my", "mine"], ["our", "ours"], ["your", "yours"], ["her", "hers"], ["their", "theirs"]].map(([a, p], i) => { const y = 34 + i * 42;
      return B(20, y, 70, 32, "navy-soft") + T(55, y + 22, a, { a: "middle" }) + `<rect x="96" y="${y}" width="80" height="32" rx="9" style="fill:none;stroke:var(--muted)" stroke-dasharray="5 4"/>` + T(136, y + 21, "book", { a: "middle", c: "muted", s: 13, it: 1 }) +
        L(`M186 ${y + 16} H286`, "muted", "g1") + B(296, y, 140, 32, "fix-soft") + T(366, y + 22, p, { a: "middle", w: 700 }); }).join("")) };

// 5 — choosing the relative pronoun
FIGS[5] = { t: "Which relative word?", c: "Test who/whom with he/him: if “he” fits the gap, write who; if “him” fits, write whom. Superlatives, only, all, same and a person + thing together take that.",
  s: svg(320, "Decision tree for who, whom, which, that and what", `<defs>${MK("g5")}</defs>` +
    B(150, 10, 160, 36, "hl-soft") + T(230, 33, "What comes before?", { a: "middle", s: 13 }) +
    [[20, "a person", "navy-soft"], [175, "a thing / clause", "navy-soft"], [330, "nothing", "navy-soft"]].map(([x, t, f]) => B(x, 80, 110, 34, f) + T(x + 55, 102, t, { a: "middle", s: 13 }) + L(`M230 46 L${x + 55} 78`, "muted", "g5")).join("") +
    B(10, 150, 64, 34, "card") + T(42, 165, "he fits", { a: "middle", s: 11, c: "muted" }) + T(42, 179, "subject", { a: "middle", s: 11, c: "muted" }) + L("M60 114 L42 148", "muted", "g5") +
    B(86, 150, 64, 34, "card") + T(118, 165, "him fits", { a: "middle", s: 11, c: "muted" }) + T(118, 179, "object", { a: "middle", s: 11, c: "muted" }) + L("M100 114 L118 148", "muted", "g5") +
    B(10, 214, 64, 34, "fix-soft") + T(42, 236, "who", { a: "middle", w: 700 }) + L("M42 184 V212", "muted", "g5") +
    B(86, 214, 64, 34, "fix-soft") + T(118, 236, "whom", { a: "middle", w: 700 }) + L("M118 184 V212", "muted", "g5") +
    B(185, 214, 90, 34, "fix-soft") + T(230, 236, "which", { a: "middle", w: 700 }) + L("M230 114 V212", "muted", "g5") +
    B(340, 214, 90, 34, "fix-soft") + T(385, 236, "what", { a: "middle", w: 700 }) + L("M385 114 V212", "muted", "g5") +
    T(385, 266, "= the thing which", { a: "middle", s: 11, c: "muted" }) +
    B(10, 278, 150, 34, "pen-soft") + T(85, 300, "emphasis → that", { a: "middle", s: 12.5, w: 700 }) + T(172, 300, "after the best · only · all · same · person + thing", { s: 11, c: "muted" })) };

// 19 — how much is there?
FIGS[19] = { t: "Three meanings by the article", c: "Little/few (no article) = hardly any, a negative idea. A little/a few = some, a positive idea. The little/the few = all of the small amount there is. Little with uncountables, few with countable plurals.",
  s: svg(250, "Little, a little and the little compared", ["little / few", "a little / a few", "the little / the few"].map((h, i) => { const x = 20 + i * 148, fl = [0.08, 0.32, 0.32][i];
    return T(x + 64, 22, h, { a: "middle", s: 13, w: 700 }) + `<rect x="${x + 24}" y="36" width="80" height="120" rx="10" style="fill:var(--card);stroke:var(--muted)" stroke-width="2"/>` +
      `<rect x="${x + 26}" y="${154 - 116 * fl}" width="76" height="${116 * fl}" rx="8" style="fill:var(--${["pen", "fix", "navy"][i]})" opacity=".75"/>` +
      (i === 2 ? T(x + 64, 84, "all of it", { a: "middle", s: 12, c: "muted" }) + L(`M${x + 64} 90 V${152 - 116 * fl}`, "muted") : "") +
      B(x, 172, 128, 30, ["pen-soft", "fix-soft", "navy-soft"][i]) + T(x + 64, 192, ["hardly any (−)", "some (+)", "all that small amount"][i], { a: "middle", s: 12.5, w: 700 }) +
      T(x + 64, 228, ["little hope of passing", "a few friends helped", "spent the little money he had"][i], { a: "middle", s: 11, c: "muted", it: 1 }); }).join("")) };

// 21 — by itself or to something
FIGS[21] = { t: "Happens by itself · done to something", c: "The left verb has no object; the right verb needs one. Traps: “lay” is the V2 of lie and also the V1 of lay; “fell” is the V2 of fall and also the V1 of fell. Prices rise; the government raises prices.",
  s: svg(230, "Intransitive and transitive verb pairs", T(120, 20, "no object (by itself)", { a: "middle", s: 12, c: "muted" }) + T(340, 20, "takes an object", { a: "middle", s: 12, c: "muted" }) +
    [["fall · <tspan style=\"fill:var(--pen)\">fell</tspan> · fallen", "<tspan style=\"fill:var(--pen)\">fell</tspan> · felled · felled", "fell a tree"], ["rise · rose · risen", "raise · raised · raised", "raise prices"], ["lie · <tspan style=\"fill:var(--pen)\">lay</tspan> · lain", "<tspan style=\"fill:var(--pen)\">lay</tspan> · laid · laid", "lay the book"]].map(([a, b, e], i) => { const y = 32 + i * 64;
      return B(20, y, 200, 48, "navy-soft") + T(120, y + 30, a, { a: "middle", w: 700 }) + B(240, y, 200, 48, "fix-soft") + T(340, y + 22, b, { a: "middle", w: 700 }) + T(340, y + 40, e, { a: "middle", s: 11, c: "muted", it: 1 }); }).join("") +
    T(230, 224, "red: the same spelling in two different verbs", { a: "middle", s: 11.5, c: "pen", w: 700 })) };

// 48 — the sound decides
FIGS[48] = { t: "Listen, don't look", c: "“a” before a consonant sound, “an” before a vowel sound, whatever the first letter is. u- and eu- said “yu”, and one/once said “wa”, take a; a silent h and letters said “ef, el, em, en, es, ex” take an.",
  s: svg(250, "a or an by the first sound", B(10, 10, 215, 36, "navy-soft") + T(117, 33, "a  ·  consonant SOUND", { a: "middle", w: 700 }) + B(235, 10, 215, 36, "fix-soft") + T(342, 33, "an  ·  vowel SOUND", { a: "middle", w: 700 }) +
    [["a unit", "yu-nit"], ["a university", "yu-ni-ver-si-ty"], ["a European", "yu-ro-pi-an"], ["a one-rupee coin", "wun"], ["a useful book", "yu-sful"]].map(([w, s], i) => T(24, 76 + i * 34, w, { w: 700 }) + T(212, 76 + i * 34, `/${s}/`, { a: "end", s: 12, c: "muted", it: 1 })).join("") +
    [["an hour", "ow-er (h silent)"], ["an honest man", "on-est"], ["an heir", "air"], ["an MLA", "em-el-ay"], ["an FIR", "ef-ai-ar"]].map(([w, s], i) => T(249, 76 + i * 34, w, { w: 700 }) + T(440, 76 + i * 34, `/${s}/`, { a: "end", s: 12, c: "muted", it: 1 })).join("") +
    L("M230 56 V236", "line")) };

// 56 — the nearer subject wins
FIGS[56] = { t: "The verb listens to its neighbour", c: "With either…or, neither…nor and not only…but also, the verb agrees with the second subject, the one standing next to it.",
  s: svg(225, "With neither nor the verb agrees with the nearer subject", `<defs>${MK("g56", "fix")}</defs>` +
    [[["Neither", "the teacher", "nor", "the students", "are"], 1], [["Either", "the boys", "or", "Ravi", "is"], 0]].map(([p, pl], i) => { const y = 50 + i * 96; let x = 14;
      return p.map((w, k) => { const wd = 12 + w.length * 8.4, sub = k === 1 || k === 3; let out = (sub ? B(x - 4, y - 22, wd, 32, k === 3 ? "fix-soft" : "card", k === 3 ? "fix" : "line") : "") + (k === 4 ? B(x - 4, y - 22, wd + 4, 32, "hl-soft", "fix") : "") + T(x + 2, y, w, { w: k === 4 || k === 3 ? 700 : 500, c: k === 1 ? "muted" : "ink" });
        if (k === 3) out += L(`M${x + wd / 2} ${y + 14} C${x + wd / 2} ${y + 40}, ${x + wd + 40} ${y + 40}, ${x + wd + 30} ${y + 14}`, "fix", "g56");
        if (k === 1) out += T(x + wd / 2 - 4, y + 32, "far: ignored", { a: "middle", s: 11, c: "muted", it: 1 });
        x += wd + 10; return out; }).join("") + T(446, y - 30, pl ? "plural subject → are" : "singular subject → is", { a: "end", s: 12, c: "fix", w: 700 }); }).join("")) };

// 58 — many, or a count
FIGS[58] = { t: "Many things, or one count?", c: "“A number of” means many, so the noun and verb are plural. “The number of” is a single figure, so the verb is singular.",
  s: svg(200, "A number of students are; the number of students is", B(10, 10, 210, 180, "navy-soft") + B(240, 10, 210, 180, "fix-soft") +
    Array.from({ length: 18 }, (_, i) => `<circle cx="${40 + (i % 6) * 30}" cy="${44 + Math.floor(i / 6) * 28}" r="10" style="fill:var(--navy)" opacity=".8"/>`).join("") +
    T(115, 150, "A number of students", { a: "middle", w: 700 }) + T(115, 174, "are absent.", { a: "middle", w: 700, c: "pen" }) +
    `<rect x="300" y="30" width="90" height="70" rx="12" style="fill:var(--card);stroke:var(--fix)" stroke-width="2"/>` + T(345, 78, "42", { a: "middle", s: 34, w: 700 }) +
    T(345, 150, "The number of students", { a: "middle", w: 700 }) + T(345, 174, "is 42.", { a: "middle", w: 700, c: "pen" })) };

// 61 — what each helping verb wants after it
FIGS[61] = { t: "Helping verb → main verb form", c: "Find the helping verb first; it decides the form of the main verb. “has been” takes V-ing when active (has been working) and V3 when passive (has been written).",
  s: svg(270, "Which verb form follows each helping verb", `<defs>${MK("g61")}</defs>` +
    [["do / does / did", "V1", "did not go"], ["will · can · may · must · should", "V1", "will go"], ["is · am · are · was · were", "V-ing", "is playing"], ["has · have · had", "V3", "has written"], ["has / have / had been", "V-ing · V3", "has been working"]].map(([h, f, e], i) => { const y = 12 + i * 50;
      return B(6, y, 204, 38, "navy-soft") + T(108, y + 24, h, { a: "middle", s: 12.5 }) + L(`M214 ${y + 19} H250`, "muted", "g61") + B(256, y, 84, 38, "fix-soft", "fix") + T(298, y + 25, f, { a: "middle", w: 700, s: 14.5 }) + T(348, y + 24, e, { s: 11, c: "muted", it: 1 }); }).join("")) };

// 62 — a point or a stretch
FIGS[62] = { t: "Since a point, for a stretch", c: "Since + a point in time (since 2019, since Monday); for + a length of time (for five years). If the action is still going on, use has/have been + V-ing.",
  s: svg(210, "Since marks a starting point and for measures the length up to now", `<defs>${MK("g62", "ink")}</defs>` + L("M20 110 H440", "ink", "g62") + T(30, 140, "past", { s: 12, c: "muted" }) +
    `<circle cx="120" cy="110" r="8" style="fill:var(--pen)"/>` + T(120, 88, "since 2019", { a: "middle", w: 700, c: "pen" }) + `<line x1="380" y1="80" x2="380" y2="140" style="stroke:var(--ink)" stroke-width="2"/>` + T(380, 160, "now", { a: "middle", w: 700 }) +
    `<rect x="120" y="102" width="260" height="16" rx="8" style="fill:var(--fix)" opacity=".45"/>` + L("M120 60 H380", "navy") + L("M120 52 V68", "navy") + L("M380 52 V68", "navy") + T(250, 50, "for five years", { a: "middle", w: 700, c: "navy" }) +
    T(230, 192, "I have been living here since 2019 / for five years.", { a: "middle", s: 13, it: 1 })) };

// 64 — the earlier action
FIGS[64] = { t: "Two past actions: the earlier one is past perfect", c: "Past perfect + before + simple past; simple past + after + past perfect. Only the earlier action takes had + V3.",
  s: svg(210, "The earlier of two past actions takes the past perfect", `<defs>${MK("g64", "ink")}</defs>` + L("M20 110 H440", "ink", "g64") + T(420, 140, "now", { a: "end", s: 12, c: "muted" }) +
    `<circle cx="110" cy="110" r="9" style="fill:var(--pen)"/>` + `<circle cx="280" cy="110" r="9" style="fill:var(--navy)"/>` +
    B(40, 40, 140, 36, "pen-soft") + T(110, 63, "had left", { a: "middle", w: 700 }) + T(110, 145, "1st · past perfect", { a: "middle", s: 12, c: "pen", w: 700 }) +
    B(210, 40, 140, 36, "navy-soft") + T(280, 63, "reached", { a: "middle", w: 700 }) + T(280, 145, "2nd · simple past", { a: "middle", s: 12, c: "navy", w: 700 }) +
    T(230, 182, "The train had left before we reached.", { a: "middle", s: 13, it: 1 }) + T(230, 202, "We reached after the train had left.", { a: "middle", s: 13, it: 1 })) };

// 69 — flip the sign
FIGS[69] = { t: "Statement and tag pull opposite ways", c: "Same helping verb, opposite sign, pronoun subject. Never, seldom, hardly, barely, scarcely, no and nothing make the statement negative, so the tag is positive.",
  s: svg(270, "Positive statement takes a negative tag and the other way round", [["She is late,", "isn't she?", "+", "−"], ["He never lies,", "does he?", "−", "+"], ["You have finished,", "haven't you?", "+", "−"]].map(([s, t, a, b], i) => { const y = 14 + i * 50;
      return B(10, y, 250, 38, a === "+" ? "fix-soft" : "pen-soft") + T(24, y + 25, s, { w: 600 }) + T(246, y + 25, a, { a: "end", s: 18, w: 700, c: a === "+" ? "fix" : "pen" }) +
        B(272, y, 178, 38, b === "+" ? "fix-soft" : "pen-soft") + T(286, y + 25, t, { w: 700 }) + T(438, y + 25, b, { a: "end", s: 18, w: 700, c: b === "+" ? "fix" : "pen" }); }).join("") +
    T(10, 186, "Special tags", { s: 12, c: "muted", w: 700 }) +
    [["I am …", "aren't I?"], ["Let's …", "shall we?"], ["Shut the door,", "will you?"]].map(([a, b], i) => B(10 + i * 148, 196, 140, 58, "hl-soft") + T(80 + i * 148, 218, a, { a: "middle", s: 13 }) + T(80 + i * 148, 242, b, { a: "middle", w: 700 })).join("")) };

// 86 — two, or a group
FIGS[86] = { t: "Between two, among many", c: "Between joins two. Among sits inside a group of more than two. Between also works for more than two when each pairs with every other one, as in a treaty between four countries.",
  s: svg(200, "Between two, among a group, between each pair", [0, 1, 2].map(i => B(10 + i * 150, 10, 140, 180, "card")).join("") +
    `<circle cx="45" cy="80" r="14" style="fill:var(--navy)"/><circle cx="115" cy="80" r="14" style="fill:var(--navy)"/>` + L("M60 80 H100", "pen") + T(80, 150, "between", { a: "middle", w: 700 }) + T(80, 172, "two", { a: "middle", s: 12, c: "muted" }) +
    `<ellipse cx="230" cy="80" rx="56" ry="44" style="fill:var(--navy-soft);stroke:var(--line)"/>` + [[200, 58], [252, 54], [270, 92], [206, 104], [236, 80]].map(([x, y], k) => `<circle cx="${x}" cy="${y}" r="${k === 4 ? 9 : 11}" style="fill:var(--${k === 4 ? "pen" : "navy"})"/>`).join("") +
    T(230, 150, "among", { a: "middle", w: 700 }) + T(230, 172, "more than two", { a: "middle", s: 12, c: "muted" }) +
    (() => { const P = [[345, 45], [415, 45], [415, 115], [345, 115]]; let o = ""; for (let a = 0; a < 4; a++) for (let b = a + 1; b < 4; b++) o += L(`M${P[a][0]} ${P[a][1]} L${P[b][0]} ${P[b][1]}`, "pen"); return o + P.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="11" style="fill:var(--navy)"/>`).join(""); })() +
    T(380, 150, "between", { a: "middle", w: 700 }) + T(380, 172, "each pair: a treaty", { a: "middle", s: 12, c: "muted" })) };

// 98 — the three conditionals
FIGS[98] = { t: "Three conditionals, step by step back", c: "Each type moves one step further from reality and one tense further back. Type 2 uses were for every subject: If I were …",
  s: svg(250, "The three types of conditional sentences", `<defs>${MK("g98")}</defs>` + T(120, 20, "if-clause", { a: "middle", s: 12, c: "muted" }) + T(340, 20, "main clause", { a: "middle", s: 12, c: "muted" }) +
    [["1 · possible future", "If + V1 (present)", "will + V1", "fix-soft"], ["2 · unreal now", "If + V2 / were", "would + V1", "hl-soft"], ["3 · unreal past", "If + had + V3", "would have + V3", "pen-soft"]].map(([k, a, b, f], i) => { const y = 32 + i * 72;
      return T(10, y + 10, k, { s: 12, w: 700, c: "muted" }) + B(20, y + 16, 200, 38, f) + T(120, y + 41, a, { a: "middle", w: 700 }) + L(`M226 ${y + 35} H246`, "muted", "g98") + B(252, y + 16, 200, 38, f) + T(352, y + 41, b, { a: "middle", w: 700 }); }).join("")) };

// ---- write into the page ----
let s = fs.readFileSync(FILE, "utf8");
const CSS = `<style id="rule-figs-css">.gfig{margin:16px 0;padding:12px 14px 10px;border:1px solid var(--line);border-radius:12px;background:var(--card)}.gfig h3{font:700 15px var(--f-display);margin:0 0 8px}.gfig .sc{overflow-x:auto;-webkit-overflow-scrolling:touch}.gfig svg{display:block;width:100%;min-width:400px;height:auto;max-width:560px;font-family:var(--f-body)}.gfig figcaption{margin-top:8px;font-size:14px;color:var(--muted);max-width:65ch}</style>`;
const JS = `<script id="rule-figs">/* written by tools/hand/grammar-figs.js */\nconst RULE_FIG = ${JSON.stringify(FIGS)};\nfunction ruleFig(n) { const f = RULE_FIG[n]; return f ? \`<figure class="gfig"><h3>\${f.t}</h3><div class="sc">\${f.s}</div><figcaption>\${f.c}</figcaption></figure>\` : ""; }\n</script>`;
s = s.replace(/<style id="rule-figs-css">[\s\S]*?<\/style>\n?/, "").replace(/<script id="rule-figs">[\s\S]*?<\/script>\n?/, "");
s = s.replace("</head>", CSS + "\n</head>");
const at = s.indexOf("function openRule("), sc = s.lastIndexOf("<script>", at);
if (at < 0 || sc < 0) throw new Error("openRule() not found");
s = s.slice(0, sc) + JS + "\n" + s.slice(sc);
const HOOK = '<div class="logic">${r.L.map(p => `<p>${p}</p>`).join("")}</div>';
if (!s.includes(HOOK + "${ruleFig(n)}")) { if (!s.includes(HOOK)) throw new Error("logic block not found"); s = s.replace(HOOK, HOOK + "${ruleFig(n)}"); }
fs.writeFileSync(FILE, s);
console.log(`study-grammar-100.html: ${Object.keys(FIGS).length} rule pictures (rules ${Object.keys(FIGS).join(", ")})`);

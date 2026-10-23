/* Para Jumbles — helpers shared by the data files (every file runs in one context, in name order).

   pj(lesson, kind, sentences, wrong, explanation, o) adds one question.
   - sentences: the four sentences (or the four parts of one sentence) in their RIGHT order. The build gives them the
     letters P, Q, R and S in an order fixed by the text, so the answers vary from question to question.
   - wrong: three wrong orders written as positions — "2134" means the 2nd right sentence first, then the 1st, 3rd, 4th.
   - explanation: {1} … {4} become the letters of the 1st … 4th sentence of the right order.
   - kind: "order" (four sentences), "first" (o.s1 is fixed), "both" (o.s1 and o.s6 are fixed), "open" (which comes first?),
     "close" (which comes last?), "parts" (parts of one sentence; o.start / o.end are fixed words, if any).
   cq(lesson, question, [right, wrong, wrong, wrong], explanation) adds an ordinary question. */
const PJ_PERMS = (function(){ const out = []; const go = (a, rest) => { if (!rest.length) out.push(a); rest.forEach((c, i) => go(a + c, rest.slice(0, i).concat(rest.slice(i + 1)))); }; go("", ["P","Q","R","S"]); return out; })();
function pjHash(s){ let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return h >>> 0; }
const PJ_HEAD = {
  order: "Arrange the sentences P, Q, R and S in the right order to form a meaningful paragraph.",
  first: "The first sentence (S1) is given. Arrange P, Q, R and S in the right order to complete the paragraph.",
  both: "The first (S1) and the last (S6) sentences are given. Arrange P, Q, R and S in the right order between them.",
  open: "Which of these sentences should come FIRST in a meaningful paragraph?",
  close: "Which of these sentences should come LAST in a meaningful paragraph?",
  parts: "Arrange the parts P, Q, R and S in the right order to form a meaningful sentence."
};
function pj(l, kind, s, wrong, exp, o){
  o = o || {};
  const bad = m => { throw new Error(l + " · " + m + " · " + s[0]); };
  if (!PJ_HEAD[kind]) bad("unknown kind " + kind);
  if (!Array.isArray(s) || s.length !== 4) bad("needs exactly 4 sentences");
  if ((kind === "first" || kind === "both") && !o.s1) bad("needs o.s1");
  if (kind === "both" && !o.s6) bad("needs o.s6");
  const lab = PJ_PERMS[pjHash(s.join("|")) % 24];           // lab[k] = the letter of the (k+1)-th right sentence
  const at = p => lab[+p - 1];
  const txt = {}; s.forEach((x, k) => { txt[lab[k]] = x; });
  const lines = [o.head || PJ_HEAD[kind]];
  if (kind === "first" || kind === "both") lines.push("S1. " + o.s1);
  if (kind === "parts" && o.start) lines.push("Begins: " + o.start);
  ["P","Q","R","S"].forEach(c => lines.push(c + ". " + txt[c]));
  if (kind === "both") lines.push("S6. " + o.s6);
  if (kind === "parts" && o.end) lines.push("Ends: " + o.end);
  let opts;
  if (kind === "open" || kind === "close") {
    const a = kind === "open" ? lab[0] : lab[3];
    opts = [a].concat(["P","Q","R","S"].filter(c => c !== a));
  } else {
    if (!Array.isArray(wrong) || wrong.length !== 3) bad("needs 3 wrong orders");
    const w = wrong.map(p => { if (!/^[1-4]{4}$/.test(p) || new Set(p.split("")).size !== 4 || p === "1234") bad("bad wrong order " + p); return p.split("").map(at).join(""); });
    if (new Set(w).size !== 3) bad("repeated wrong order");
    opts = [lab].concat(w);
  }
  if (/\{[^1-4]\}/.test(exp)) bad("bad placeholder in explanation");
  QB.push([l, lines.join("\n"), opts, exp.replace(/\{([1-4])\}/g, (m, d) => at(d)), ""]);
}
function cq(l, q, opts, exp){ QB.push([l, q, opts, exp, ""]); }

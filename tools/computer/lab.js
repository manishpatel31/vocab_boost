/* Computer Knowledge Lab — decks built from the lessons' own tables (cmpRows), played by tools/workbook/games.js. */
/** Rows of the table (or facts list) whose title starts with `title` in a lesson, as [prompt, answer, note]:
    cols picks the prompt and answer columns. Tags are stripped; rows with an empty side are left out. */
function cmpRows(lessonId, title, cols, note){
  const strip = s => String(s == null ? "" : s).replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&minus;/g, "−").trim();
  const l = LESSONS.find(x => x.id === lessonId), b = l ? l.blocks.find(x => x.rows && String(x.title).startsWith(title)) : null;
  const [p, a] = cols || [0, 1];
  return b ? b.rows.map(r => [strip(r[p]), strip(r[a]), note != null ? strip(r[note]) : ""]).filter(r => r[0] && r[1] && r[1] !== "—" && r[1] !== "–") : [];
}
const short = (rows, n) => rows.filter(r => r[1].length <= (n || 46));
/* Number conversions, made fresh for every game: decimal ↔ binary, octal and hex. */
const SUBS = { 2: "₂", 8: "₈", 10: "₁₀", 16: "₁₆" };
function cmpConv(){
  const pairs = [[10, 2], [2, 10], [2, 16], [16, 10], [2, 8], [8, 10], [10, 16], [16, 2]], out = [];
  for (let i = 0; i < 60; i++) {
    const [f, t] = pairs[i % pairs.length], n = 5 + Math.floor(Math.random() * (f === 2 || t === 2 ? 120 : 250));
    const show = (v, b) => `(${v.toString(b).toUpperCase()})${SUBS[b]}`;
    const wrong = [];
    [1, -1, 2, -2, 4, 8, -4, 16].forEach(d => { const v = show(n + d, t); if (wrong.length < 3 && n + d > 0 && v !== show(n, t) && !wrong.includes(v)) wrong.push(v); });
    out.push({ p: `${show(n, f)} = ? in base ${t}`, a: show(n, t), note: `${show(n, f)} = ${n} in decimal`, opts4: wrong });
  }
  return out;
}
const CMP_DECKS = [
  { id: "win", ico: "🪟", title: "Windows Shortcuts", sub: "Win + E, Alt + Tab, Shift + Delete…", lesson: "C8", q: "", rq: "Which keys:", pairs: short(cmpRows("C8", "Windows shortcuts"), 60) },
  { id: "word", ico: "📝", title: "Word Shortcuts", sub: "Ctrl + K, F7, Shift + F3…", lesson: "C9", q: "In Word:", rq: "Word shortcut to:", pairs: short(cmpRows("C9", "Word-specific shortcuts"), 60) },
  { id: "excel", ico: "📊", title: "Excel Shortcuts", sub: "F2, F4, Alt + =, Ctrl + ;…", lesson: "C10", q: "In Excel:", rq: "Excel shortcut to:", pairs: short(cmpRows("C10", "Excel shortcuts"), 60) },
  { id: "ppt", ico: "📽️", title: "PowerPoint Shortcuts", sub: "F5, Shift + F5, Ctrl + M…", lesson: "C11", q: "In PowerPoint:", rq: "PowerPoint shortcut to:", pairs: short(cmpRows("C11", "PowerPoint shortcuts"), 60) },
  { id: "web", ico: "🌐", title: "Browser Shortcuts", sub: "Ctrl + T, Ctrl + Shift + N, Ctrl + J…", lesson: "C8", q: "In a browser:", rq: "Browser shortcut to:", pairs: short(cmpRows("C8", "Web browser shortcuts"), 60) },
  { id: "ctrl", ico: "🔀", title: "Same Key, Other App", sub: "Ctrl + D, E, G, L, M, Q, R, T across Office", lesson: "C8", q: "", make: () => {
      const t = LESSONS.find(x => x.id === "C8").blocks.find(b => String(b.title).startsWith("Ctrl + A to Z"));
      const apps = ["Word", "Excel", "PowerPoint"], items = [];
      t.rows.forEach(r => { const k = String(r[0]).replace(/<[^>]+>/g, ""); if (!/<b>/.test(r[0])) return;     // only the letters that change their job
        apps.forEach((ap, j) => { if (r[j + 1] !== "—") items.push({ p: `Ctrl + ${k} in ${ap}?`, a: r[j + 1], note: apps.map((x, m) => x + ": " + r[m + 1]).join(" · "), pool: "ctrl" }); }); });
      return items; },
    list: () => { const t = LESSONS.find(x => x.id === "C8").blocks.find(b => String(b.title).startsWith("Ctrl + A to Z")); return t.rows.map(r => ["Ctrl + " + String(r[0]).replace(/<[^>]+>/g, ""), r.slice(1).join(" · ")]); } },
  { id: "full", ico: "🔤", title: "Full Forms", sub: "CPU, BIOS, URL, HTTPS, VIRUS…", lesson: "C15", q: "Full form of", pairs: short(cmpRows("C15", "Full forms – internet").concat(cmpRows("C15", "Full forms – files"), cmpRows("C15", "Full forms – security"), cmpRows("C15", "More full forms")), 58) },
  { id: "ext", ico: "📁", title: "File Extensions", sub: ".docx, .xlsx, .png, .mp4, .exe…", lesson: "C20", q: "What is a", rq: "Extension for:", pairs: short(cmpRows("C20", "File extensions you must know"), 40) },
  { id: "port", ico: "🔌", title: "Ports & Protocols", sub: "HTTP 80, HTTPS 443, SMTP 25…", lesson: "C15", q: "Port number of", rq: "Which protocol uses port", pairs: cmpRows("C15", "Main protocols", [0, 3]).filter(r => /\d/.test(r[1])) },
  { id: "units", ico: "🧮", title: "Memory Units", sub: "Bit, nibble, byte, KB … YB", lesson: "C4", q: "", rq: "Which unit is", pairs: cmpRows("C4", "Memory units").map(r => [r[0] + " =", r[1]]) },
  { id: "dev", ico: "🖱️", title: "Which Device?", sub: "MICR, OMR, OCR, plotter, scanner…", lesson: "C3", q: "", pairs: cmpRows("C3", "Input devices", [2, 0]).concat(cmpRows("C18", "Other output devices", [2, 0])).filter(r => r[0].length <= 70) },
  { id: "layer", ico: "🧱", title: "OSI Layers", sub: "Which layer does it work at?", lesson: "C14", q: "", pairs: cmpRows("C14", "Networking devices").filter(r => !/ to /.test(r[1])).map(r => [r[0] + " works at which OSI layer?", r[1]])
      .concat(cmpRows("C14", "OSI model", [0, 1]).map(r => ["OSI layer number " + r[0] + " is the…", r[1]])) },
  { id: "mal", ico: "🦠", title: "Malware & Attacks", sub: "Worm, Trojan, phishing, DDoS…", lesson: "C16", q: "", pairs: cmpRows("C16", "Types of malware", [2, 0]).concat(cmpRows("C16", "Common attacks", [1, 0]).filter(r => r[0].length <= 80)) },
  { id: "who", ico: "👤", title: "Who Made What", sub: "Babbage, Berners-Lee, Gosling…", lesson: "C17", q: "", pairs: short(cmpRows("C17", "Famous people", [1, 0]), 40).concat(cmpRows("C7", "Famous languages", [0, 2]).map(r => ["Creator of " + r[0], r[1]])) },
  { id: "itact", ico: "⚖️", title: "IT Act Sections", sub: "66, 66C, 66D, 66E, 66F, 67…", lesson: "C22", q: "", rq: "What does this section deal with: Section", pairs: cmpRows("C22", "Sections you must know", [1, 0]).filter(r => r[0].length <= 90) },
  { id: "dig", ico: "🇮🇳", title: "Digital India Dates", sub: "Aadhaar, UPI, DigiLocker, 5G…", lesson: "C22", q: "When did this come:", pairs: cmpRows("C22", "Digital India", [0, 1]).map(r => [r[0], (r[1].match(/(\d{1,2} \w+ )?\d{4}/) || [r[1]])[0], r[1]]) },
  { id: "base", ico: "🔢", title: "Base Converter", sub: "Binary, octal, hex — beat the clock", lesson: "C6", q: "", make: cmpConv, options: it => shuffle([it.a].concat(it.opts4)),
    list: () => [["(1010)₂", "10"], ["(1111)₂", "15 = (F)₁₆ = (17)₈"], ["(11111111)₂", "255 = (FF)₁₆ = (377)₈"], ["(100)₁₀", "(1100100)₂ = (64)₁₆ = (144)₈"], ["(2D)₁₆", "45 = (101101)₂ = (55)₈"], ["Binary → octal / hex", "Group 3 / 4 bits from the right"]] }
];
/* Up to n rows of a deck for the Grand Mix, spread over different answers so every question gets real wrong options. */
function cmpSpread(rows, n){
  const by = {}; shuffle(rows).forEach(r => { (by[r[1]] = by[r[1]] || []).push(r); });
  const groups = shuffle(Object.values(by)), out = [];
  for (let i = 0; out.length < n && groups.some(g => g.length); i++) { const g = groups[i % groups.length]; if (g.length) out.push(g.shift()); }
  return out;
}
const LAB_CONF = {
  title: "Computer Lab", blurb: "Drill every shortcut, full form, extension and port until your fingers know it. Every right answer earns XP.",
  ranks: [[0, "Power Button", "🔌"], [60, "Keyboard Warrior", "⌨️"], [200, "Office Pro", "💼"], [450, "Network Admin", "🛰️"], [900, "Supercomputer", "🖥️"]],
  decks: CMP_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "",
    make: () => labMix(CMP_DECKS.filter(d => !d.make).map(d => Object.assign({}, d, { pairs: cmpSpread(d.pairs, 6) }))), list: () => CMP_DECKS.filter(d => !d.make).flatMap(d => d.pairs) }]),
  match: { deck: "port", title: "Pair each protocol with its port", sub: "Flip cards — HTTP, HTTPS, SMTP, POP3, DNS… with their port numbers" }
};

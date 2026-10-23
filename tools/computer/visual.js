/* Computer Knowledge — the five generations in time, a computer's block diagram with data moving, the keyboard's key groups,
   the memory pyramid, disc capacities, logic-gate symbols with outputs, from source code to a running program, the Word and
   Excel windows labelled, a URL taken apart, e-mail's path, network topologies, the OSI stack, IPv4 classes, Digital India
   in time and the people of computing (drawn by study-visual.js). place(), rows() and KIT come from applyVisual (lib.js). */
const T = (x, y, t, c, a, s) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const M = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${c || "var(--ink2)"}"/></marker>`;
const box = (x, y, w, h, t, c, sub) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${c}"/>${T(x + w / 2, y + h / 2 + (sub ? -2 : 5), t, "#fff", "middle", 13)}${sub ? `<text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" font-size="10" style="fill:#fff">${sub}</text>` : ""}`;
const pulse = (d, c, dur) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="2.5" marker-end="url(#ar)"/><circle r="5" fill="${c}"><animateMotion dur="${dur || 1.6}s" repeatCount="indefinite" path="${d}"/></circle>`;
const yr = s => parseInt(String(s).match(/\d{4}/) || [0], 10);

// C1 — the generations in time; machines in pictures
const GN = rows("C1", "Five generations").map((r, i) => [r[0] + " · " + r[2].replace(/ \(.*\)$| — .*$/, ""), yr(r[1]) || 1980, i === 3 ? 2025 : i === 4 ? 2026 : +(r[1].match(/–(\d{4})/) || [0, 2026])[1], ["#a9805a", "#c69214", "#2f8f4e", "#2f6db5", "#7d4fb5"][i]]);
GN[4][1] = 1990;
place("C1", "Five generations", KIT.fig("Five generations of computers", KIT.gantt("Generations of computers", GN, 1940, 2027, 10), "Each generation is named after its core technology: vacuum tubes → transistors → integrated circuits → microprocessors (VLSI) → artificial intelligence. The fifth has no clean start date."),
  KIT.photos("Machines in pictures", [["Abacus", "Earliest counting tool"], ["Pascal's calculator", "Pascaline, 1642"], ["Analytical engine", "Babbage's design"], ["ENIAC", "First generation · vacuum tubes"], ["UNIVAC I", "First commercial computer"],
    ["IBM Personal Computer", "1981"], ["PARAM 8000", "India's first supercomputer, 1991"]], { name: r => r[0].replace(/^Analytical engine$/, "Analytical Engine").replace(/^IBM Personal Computer$/, "IBM PC") }));

// C2 — the block diagram
const BD = `<svg class="dg" viewBox="0 0 680 270" role="img" aria-label="Block diagram of a computer">
  <defs>${M("ar")}</defs>
  ${box(20, 100, 120, 60, "INPUT", "#2f8f4e", "keyboard, mouse")}${box(540, 100, 120, 60, "OUTPUT", "#c0503a", "monitor, printer")}
  <rect x="200" y="30" width="280" height="160" rx="14" fill="none" stroke="#2f6db5" stroke-width="2.5"/>${T(340, 22, "CPU", "#2f6db5", "middle", 14)}
  ${box(220, 50, 115, 56, "CU", "#2f6db5", "control unit")}${box(345, 50, 115, 56, "ALU", "#7d4fb5", "arithmetic, logic")}${box(220, 120, 240, 50, "Registers", "#1f8a8a", "the fastest memory")}
  ${box(220, 210, 240, 50, "Memory (RAM)", "#c69214", "primary storage")}
  ${pulse("M140 130 H196", "#2f8f4e")}${pulse("M480 130 H536", "#c0503a", 1.4)}${pulse("M300 192 V206", "#c69214", 1)}${pulse("M380 208 V194", "#c69214", 1)}</svg>`;
place("C2", "CPU registers", KIT.fig("How a computer works", BD, "Input → processing in the CPU (the control unit directs, the ALU calculates, registers hold what is in use) → output, with main memory feeding the CPU. This is the von Neumann design."),
  KIT.photos("Ports in pictures", [["USB", "Universal Serial Bus"], ["HDMI", "High-Definition Multimedia Interface"], ["VGA connector", "Video Graphics Array"], ["PS/2 port", "Purple keyboard, green mouse"], ["Registered jack", "RJ-45 — Ethernet"]],
    { name: r => r[0].replace(/^Registered jack$/, "RJ-45").replace(/ connector$| port$/, "") }));

// C3 — the keyboard's key groups
const KR = [["Esc F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12", "#7d4fb5"], ["` 1 2 3 4 5 6 7 8 9 0 - = ⌫", "#2f6db5"], ["Tab Q W E R T Y U I O P [ ] \\", "#2f6db5"], ["Caps A S D F G H J K L ; ' Enter", "#2f6db5"],
  ["Shift Z X C V B N M , . / Shift", "#2f6db5"], ["Ctrl Win Alt Space Alt Fn Ctrl", "#c0503a"]];
const kw = k => ({ Space: 190, Enter: 52, Shift: 56, Caps: 44, Tab: 36, "⌫": 40 })[k] || (k.length > 2 ? 34 : 26);
const KB = `<svg class="dg" viewBox="0 0 680 230" role="img" aria-label="Keyboard key groups">
  ${KR.map(([r, c], j) => { let x = 10; return r.split(" ").map(k => { const w = kw(k), col = /^(Ctrl|Alt|Win|Fn|Shift|Caps|Tab|Esc|Enter|⌫)$/.test(k) ? "#c0503a" : c, out = `<rect x="${x}" y="${10 + j * 34}" width="${w}" height="28" rx="5" fill="${col}" opacity=".85"/><text x="${x + w / 2}" y="${29 + j * 34}" text-anchor="middle" font-size="${k.length > 3 ? 9 : 11}" font-weight="700" style="fill:#fff">${k}</text>`; x += w + 4; return out; }).join(""); }).join("")}
  ${[["↑", 560, 146], ["←", 530, 180], ["↓", 560, 180], ["→", 590, 180]].map(([k, x, y]) => `<rect x="${x}" y="${y - 22}" width="26" height="28" rx="5" fill="#2f8f4e"/>${T(x + 13, y - 3, k, "#fff", "middle", 12)}`).join("")}
  ${[["#7d4fb5", "Function keys"], ["#2f6db5", "Typing (alphanumeric)"], ["#c0503a", "Modifier and control"], ["#2f8f4e", "Navigation (arrows)"]].map(([c, t], i) => `<rect x="${10 + i * 165}" y="214" width="12" height="12" rx="3" fill="${c}"/><text x="${26 + i * 165}" y="224" font-size="10.5" class="b">${t}</text>`).join("")}</svg>`;
place("C3", "What each key does", KIT.fig("Keyboard key groups", KB, "QWERTY layout (Christopher Sholes, 1870s). A full keyboard has about 104 keys, including the numeric keypad on the right."));

// C4 — the memory pyramid
const MS = rows("C4", "Memory speed");
const MP = `<svg class="dg" viewBox="0 0 690 330" role="img" aria-label="Memory hierarchy from registers to magnetic tape">
  ${MS.map((r, i) => { const w = 90 + i * 52, x = 230 - w / 2 + 100, y = 12 + i * 31; return `<rect x="${x}" y="${y}" width="${w}" height="28" rx="5" fill="hsl(${210 - i * 18},55%,${40 + i * 2}%)" class="anim-in" style="animation-delay:${i * 60}ms"/>` +
    `<text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" font-size="${w < 160 ? 10 : 11.5}" font-weight="700" style="fill:#fff">${r[1].replace(/ \(.*\)$/, "")}</text>`; }).join("")}
  ${["faster", "costlier", "smaller"].map((t, i) => T(622, 64 + i * 16, t, "#c0392b", "start", 11.5)).join("")}<path d="M648 108 V258" stroke="var(--ink2)" stroke-width="2" marker-end="url(#mp)"/>
  ${["slower", "cheaper", "bigger"].map((t, i) => T(622, 280 + i * 16, t, "#2f6db5", "start", 11.5)).join("")}<defs>${M("mp")}</defs></svg>`;
place("C4", "Memory speed", KIT.fig("The memory hierarchy", MP, "Registers and cache sit inside the CPU; RAM is the main (primary) memory; disks, discs and tape are secondary storage that keeps data when the power goes off."));

// C5 — disc capacities; storage in pictures
place("C5", "Optical discs", { k: "bars", title: "How much an optical disc holds", unit: "GB", left: 170, hi: 1, sort: false,
  rows: [["CD", .7, "700 MB · infrared laser"], ["DVD (single layer)", 4.7, "red laser"], ["DVD (dual layer)", 8.5, ""], ["Blu-ray (single)", 25, "blue-violet laser"], ["Blu-ray (dual)", 50, ""], ["BDXL", 128, ""]],
  cap: "The shorter the laser's wavelength, the smaller the pits and the more a disc holds — hence 'Blu-ray'." },
  KIT.photos("Storage in pictures", [["Floppy disk", "1.44 MB"], ["Hard disk drive", "Magnetic, random access"], ["Solid-state drive", "Flash, no moving parts"], ["USB flash drive", "Pen drive"], ["Magnetic tape data storage", "Sequential access"], ["Blu-ray", "25–50 GB"]],
    { name: r => r[0].replace(/^Magnetic tape data storage$/, "Magnetic tape") }));

// C6 — logic gates
const gate = (n, x, y) => { const b = n.replace(/^N(?=AND|OR)|^XN/, m => m === "XN" ? "X" : ""), inv = /^N|^XN/.test(n) && n !== "NOT", body = {
    AND: `M${x} ${y} h22 a20 20 0 0 1 0 40 h-22 z`, OR: `M${x} ${y} q18 0 40 20 q-22 20 -40 20 q12 -20 0 -40 z`, XOR: `M${x + 4} ${y} q18 0 40 20 q-22 20 -40 20 q12 -20 0 -40 z`, NOT: `M${x} ${y} l34 20 l-34 20 z` }[n === "NOT" ? "NOT" : b];
  return `<path d="${body}" fill="var(--sheet)" stroke="var(--ink)" stroke-width="2"/>` + (b === "XOR" ? `<path d="M${x - 3} ${y} q12 20 0 40" fill="none" stroke="var(--ink)" stroke-width="2"/>` : "") +
    (inv ? `<circle cx="${x + (n === "NOT" ? 38 : 47)}" cy="${y + 20}" r="4" fill="var(--sheet)" stroke="var(--ink)" stroke-width="2"/>` : "") +
    `<path d="M${x - 14} ${y + (n === "NOT" ? 20 : 10)} h14 ${n === "NOT" ? "" : `M${x - 14} ${y + 30} h14`} M${x + (n === "NOT" ? 42 : 51)} ${y + 20} h14" stroke="var(--ink)" stroke-width="2"/>`; };
const GT = rows("C6", "Logic gates");
const LG = `<svg class="dg" viewBox="0 0 680 250" role="img" aria-label="Logic gate symbols and their outputs">
  ${GT.map((r, i) => { const n = r[0].replace(/ \(.*\)$/, ""), x = 30 + (i % 4) * 170, y = 20 + Math.floor(i / 4) * 120; return gate(n, x, y) + T(x + 22, y + 62, n, n === "NAND" || n === "NOR" ? "#c0503a" : "var(--ink)", "middle", 13) +
    `<text x="${x + 22}" y="${y + 80}" text-anchor="middle" font-size="10" class="mut">${n === "NOT" ? "0→1, 1→0" : "00 01 10 11 → " + r[2].replace(/, /g, "")}</text>`; }).join("")}
  <text x="540" y="200" font-size="11" class="b" style="fill:#c0503a">NAND and NOR are</text><text x="540" y="216" font-size="11" class="b" style="fill:#c0503a">universal gates</text></svg>`;
place("C6", "Logic gates", KIT.fig("Logic gates at a glance", LG, "A small circle on the output means NOT. NAND and NOR alone can build every other gate, so they are called universal gates."));

// C7 — from code to a running program; language generations
const CP = `<svg class="dg" viewBox="0 0 680 150" role="img" aria-label="From source code to a running program">
  <defs>${M("ar")}</defs>
  ${[["Source code", "#2f6db5", "C, Java…"], ["Compiler", "#7d4fb5", "whole program"], ["Object code", "#c69214", "machine code"], ["Linker", "#1f8a8a", "joins libraries"], ["Executable", "#2f8f4e", ".exe"], ["Loader", "#c0503a", "into RAM → runs"]]
    .map(([t, c, s], i) => box(8 + i * 113, 40, 100, 58, t, c, s) + (i < 5 ? `<path d="M${110 + i * 113} 69 H${119 + i * 113}" stroke="var(--ink2)" stroke-width="2" marker-end="url(#ar)"/>` : "")).join("")}
  <text x="10" y="128" font-size="11" class="mut">An interpreter skips the object file: it translates and runs one line at a time (Python, BASIC). An assembler turns assembly language into machine code.</text></svg>`;
place("C7", "Translators and linker", KIT.fig("From code to a running program", CP, "A compiler translates the whole program at once and lists all errors together; an interpreter stops at the first error."));
place("C7", "Generations of programming", { k: "cards", title: "Five generations of languages", rows: rows("C7", "Generations of programming").map((r, i) => [r[0] + " · " + r[1], "", r[2].split(/; | — /)[0], ["0️⃣", "🔧", "📝", "🗃️", "🧠"][i]]) });

// C9–C10 — the Word and Excel windows labelled
const WIN = (title, body, labels) => `<svg class="dg" viewBox="0 0 680 300" role="img" aria-label="${title} window, labelled">
  <rect x="20" y="10" width="440" height="270" rx="8" fill="var(--sheet)" stroke="var(--rule)" stroke-width="2"/><rect x="20" y="10" width="440" height="24" rx="8" fill="#2f6db5"/>
  <text x="240" y="27" text-anchor="middle" font-size="11" font-weight="700" style="fill:#fff">${title}</text>
  ${["File", "Home", "Insert", "Design", "Layout", "Review", "View"].map((t, i) => `<text x="${34 + i * 56}" y="50" font-size="10.5" font-weight="${i === 1 ? 800 : 500}">${t}</text>`).join("")}
  <rect x="24" y="56" width="432" height="34" fill="var(--sunk)"/>${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${32 + i * 70}" y="62" width="60" height="22" rx="4" fill="var(--sheet)" stroke="var(--rule)"/>`).join("")}
  ${body}<rect x="20" y="262" width="440" height="18" fill="var(--sunk)"/><text x="30" y="275" font-size="9.5" class="mut">Page 1 of 1 · 250 words</text>
  ${labels.map(([t, x, y, ly]) => `<line x1="${x}" y1="${y}" x2="480" y2="${ly}" stroke="var(--ink2)"/><circle cx="${x}" cy="${y}" r="2.5" fill="var(--ink2)"/>${T(486, ly + 4, t, "var(--ink)", "start", 11.5).replace("<text ", `<text data-lq="${String(t).split(" — ")[0].split(" (")[0].replace(/"/g, "")}" `)}`).join("")}</svg>`;
place("C9", "Ribbon tabs", KIT.fig("The MS Word window", WIN("Document1 — Word", `<rect x="24" y="94" width="432" height="10" fill="var(--sunk)"/>${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => `<line x1="${30 + i * 42}" y1="94" x2="${30 + i * 42}" y2="104" stroke="var(--ink2)"/>`).join("")}
  <rect x="90" y="110" width="300" height="148" fill="#fff" stroke="var(--rule)"/>${[0, 1, 2, 3, 4, 5].map(i => `<rect x="108" y="${126 + i * 20}" width="${264 - (i % 3) * 40}" height="6" rx="3" fill="#d0d4da"/>`).join("")}`,
  [["Title bar (file name)", 240, 22, 52], ["Ribbon tabs", 120, 46, 82], ["Ribbon — groups of commands", 200, 73, 110], ["Ruler", 300, 99, 140], ["Page (Print Layout view)", 300, 180, 174], ["Status bar", 120, 271, 260]]),
  "The ribbon replaced menus in Office 2007. Home holds the Clipboard, Font and Paragraph groups; the default view is Print Layout."));
const XB = `<rect x="24" y="94" width="432" height="18" fill="var(--sheet)" stroke="var(--rule)"/><rect x="24" y="94" width="50" height="18" fill="var(--sunk)"/><text x="49" y="107" text-anchor="middle" font-size="10" font-weight="700">C3</text>
  <text x="84" y="107" font-size="10" font-style="italic">fx  =SUM(A1:B3)</text>
  ${["", "A", "B", "C", "D", "E", "F"].map((c, i) => `<rect x="${24 + (i ? 30 + (i - 1) * 66 : 0)}" y="116" width="${i ? 66 : 30}" height="18" fill="var(--sunk)" stroke="var(--rule)"/><text x="${i ? 24 + 30 + (i - 1) * 66 + 33 : 39}" y="129" text-anchor="middle" font-size="10" font-weight="700">${c}</text>`).join("")}
  ${[1, 2, 3, 4, 5, 6].map(r => `<rect x="24" y="${116 + r * 20}" width="30" height="20" fill="var(--sunk)" stroke="var(--rule)"/><text x="39" y="${130 + r * 20}" text-anchor="middle" font-size="10" font-weight="700">${r}</text>` +
    [0, 1, 2, 3, 4, 5].map(c => `<rect x="${54 + c * 66}" y="${116 + r * 20}" width="66" height="20" fill="${r === 3 && c === 2 ? "#cfe6f5" : "#fff"}" stroke="${r === 3 && c === 2 ? "#2f6db5" : "var(--rule)"}" stroke-width="${r === 3 && c === 2 ? 2 : 1}"/>`).join("")).join("")}`;
place("C10", "Formulas, operators", KIT.fig("The MS Excel window", WIN("Book1 — Excel", XB, [["Name box (active cell)", 49, 103, 56], ["Formula bar", 150, 103, 86], ["Column headings (A, B, C…)", 220, 125, 118], ["Row numbers (1, 2, 3…)", 39, 170, 152], ["Active cell C3", 220, 186, 192], ["Status bar", 120, 271, 260]]),
  "A cell's address is its column letter then its row number (C3). A worksheet has 1,048,576 rows and 16,384 columns (A to XFD) since Excel 2007. Every formula starts with ="));

// C12 — a URL taken apart
const UP = rows("C12", "Parts of a URL: https://www.example");
const UC = ["#c0392b", "#c69214", "#2f8f4e", "#1f8a8a", "#2f6db5", "#7d4fb5"];
place("C12", "Parts of a URL: https://www.example", { k: "info", title: "A URL, piece by piece", html: `<div style="font:700 clamp(14px,2.6vw,20px)/1.6 var(--f-num);word-break:break-all;margin:4px 0 12px">${UP.map((r, i) =>
  `<span style="color:${UC[i]};border-bottom:3px solid ${UC[i]};padding:0 1px">${r[1] === "in" ? "" : r[1].replace(/^example\.gov\.in$/, "example.gov.")}${r[1] === "in" ? "in" : ""}</span>${i === 1 ? '<span style="color:var(--ink2)">.</span>' : ""}`).join("")}</div>
  <div class="fam">${UP.map((r, i) => `<div style="border-top:4px solid ${UC[i]}"><b>${r[0]}</b><small>${r[2]}</small></div>`).join("")}</div>`,
  cap: "DNS turns the domain name into an IP address. https means the page travels encrypted (SSL/TLS, port 443); plain http uses port 80." });

// C13 — the path of an e-mail
const EM = `<svg class="dg" viewBox="0 0 680 170" role="img" aria-label="How an e-mail travels">
  <defs>${M("ar")}</defs>
  ${box(10, 50, 110, 60, "Sender", "#2f8f4e", "writes mail")}${box(200, 50, 120, 60, "Mail server", "#2f6db5", "sender's")}${box(380, 50, 120, 60, "Mail server", "#2f6db5", "receiver's")}${box(560, 50, 110, 60, "Receiver", "#c0503a", "reads mail")}
  ${pulse("M120 80 H196", "#2f8f4e")}${pulse("M320 80 H376", "#2f6db5", 1.2)}${pulse("M500 80 H556", "#c0503a")}
  ${T(158, 40, "SMTP", "#2f8f4e", "middle", 12)}${T(348, 40, "SMTP", "#2f6db5", "middle", 12)}${T(528, 40, "POP3 / IMAP", "#c0503a", "middle", 12)}
  <text x="10" y="150" font-size="11" class="mut">SMTP sends (port 25); POP3 downloads and usually deletes from the server (110); IMAP keeps mail on the server and syncs (143).</text></svg>`;
place("C13", "E-mail protocols", KIT.fig("How an e-mail travels", EM, "Ray Tomlinson sent the first network e-mail in 1971 and chose @ to join the user name and the computer's name."));

// C14 — topologies, the OSI stack, IPv4 classes
const node = (x, y, c) => `<circle cx="${x}" cy="${y}" r="9" fill="${c || "#2f6db5"}"/>`;
const ring = [...Array(6)].map((_, i) => [70 + 45 * Math.cos(i * Math.PI / 3), 70 + 45 * Math.sin(i * Math.PI / 3)]);
const TP = [["Bus", `<line x1="15" y1="70" x2="125" y2="70" stroke="var(--ink)" stroke-width="3"/>${[25, 55, 85, 115].map((x, i) => `<line x1="${x}" y1="70" x2="${x}" y2="${i % 2 ? 100 : 40}" stroke="var(--ink2)"/>` + node(x, i % 2 ? 104 : 36)).join("")}`],
  ["Star", ring.map(([x, y]) => `<line x1="70" y1="70" x2="${x}" y2="${y}" stroke="var(--ink2)"/>` + node(x, y)).join("") + node(70, 70, "#c0503a")],
  ["Ring", `<circle cx="70" cy="70" r="45" fill="none" stroke="var(--ink2)"/>` + ring.map(([x, y]) => node(x, y)).join("")],
  ["Mesh", ring.map(([x, y], i) => ring.slice(i + 1).map(([a, b]) => `<line x1="${x}" y1="${y}" x2="${a}" y2="${b}" stroke="var(--ink2)" stroke-width=".8"/>`).join("")).join("") + ring.map(([x, y]) => node(x, y)).join("")],
  ["Tree", `<path d="M70 25 L35 70 M70 25 L105 70 M35 70 L18 112 M35 70 L52 112 M105 70 L88 112 M105 70 L122 112" stroke="var(--ink2)"/>` + [[70, 25, "#c0503a"], [35, 70], [105, 70], [18, 112], [52, 112], [88, 112], [122, 112]].map(([x, y, c]) => node(x, y, c)).join("")]];
const TO = `<svg class="dg" viewBox="0 0 690 195" role="img" aria-label="Network topologies">
  ${TP.map(([n, g], i) => `<g transform="translate(${i * 138},${i === 4 ? 22 : 12})">${g}${T(70, 162, n, "var(--ink)", "middle", 13)}</g>`).join("")}</svg>`;
place("C14", "Network topologies", KIT.fig("Network topologies", TO, "Bus: one cable. Star: all to a central hub or switch (the commonest today). Ring: a closed loop with token passing. Mesh: everyone to everyone — n(n−1)/2 links. Tree: stars joined in a hierarchy."));
const OS = rows("C14", "OSI model");
const OSI = `<svg class="dg" viewBox="0 0 680 290" role="img" aria-label="The seven OSI layers">
  ${OS.map((r, i) => `<rect x="20" y="${10 + i * 39}" width="300" height="34" rx="6" fill="hsl(${i * 40},55%,46%)"/>${T(36, 32 + i * 39, r[0] + " · " + r[1], "#fff", "start", 13)}` +
    `<text x="334" y="${31 + i * 39}" font-size="10.5" class="mut">${r[3].replace(/&lt;/g, "<").split(/[;,]/).slice(0, 3).join(",")}</text>`).join("")}
  <text x="20" y="286" font-size="10.5" class="mut">Mnemonic, top down: All People Seem To Need Data Processing.</text></svg>`;
place("C14", "OSI model", KIT.fig("The OSI model's seven layers", OSI, "Data moves down the layers on the sender's side and up on the receiver's. Routers work at layer 3, switches at layer 2, hubs and repeaters at layer 1."));

// C22 — Digital India in time
place("C22", "Digital India", { k: "tlfig", title: "India's digital milestones", rows: rows("C22", "Digital India").map(r => [yr(r[1]), r[0] + " — " + r[2].split(/: |;/)[0], ""]).filter(r => r[0]).sort((a, b) => a[0] - b[0]),
  cap: "From the National Informatics Centre (1976) to UPI (2016) and 5G (2022)." });

// C17 — cloud service models and the people
const CL = `<svg class="dg" viewBox="0 0 640 220" role="img" aria-label="IaaS, PaaS and SaaS">
  ${[["SaaS", "ready software — Gmail, Google Docs", "#c0503a", 0], ["PaaS", "a platform to build apps — Google App Engine", "#c69214", 1], ["IaaS", "raw servers and storage — AWS EC2", "#2f6db5", 2]].map(([n, t, c, i]) =>
    `<path d="M${200 - i * 50} ${20 + i * 60} H${440 + i * 50} L${460 + i * 50} ${76 + i * 60} H${180 - i * 50} Z" fill="${c}"/>${T(320, 54 + i * 60, n, "#fff", "middle", 15)}<text x="${470 + i * 50}" y="${54 + i * 60}" font-size="10.5" class="mut">${t}</text>`).join("")}
  <text x="20" y="214" font-size="10.5" class="mut">Higher up the pyramid, the provider manages more and you manage less.</text></svg>`;
place("C17", "Cloud computing", KIT.fig("Cloud service models", CL.replace('viewBox="0 0 640 220"', 'viewBox="0 0 760 220"'), "SaaS: just use it. PaaS: build on it. IaaS: rent the hardware and run your own systems on it."));
place("C17", "Famous people", KIT.photos("People of computing", rows("C17", "Famous people").filter(r => !/ and /.test(r[0])).slice(0, 12), { cap: r => r[1].replace(/;.*$| \(.*\)$/, "") }));

VISUAL = { mode: true, VIS: { key: "computer_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

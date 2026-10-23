/* Computer Knowledge — the five generations in time, a computer's block diagram with data moving, the keyboard's key groups,
   the memory pyramid, disc capacities, logic-gate symbols with outputs, from source code to a running program, the Word and
   Excel windows labelled, a URL taken apart, e-mail's path, network topologies, the OSI stack, IPv4 classes, Digital India
   in time and the people of computing; then the chip levels, the four sizes, a labelled motherboard, the instruction cycle,
   the three buses, booting, input devices and printers in pictures, impact vs non-impact, RGB vs CMYK, resolutions to scale,
   the memory-unit staircase, the ROM family, inside a hard disk, back-up types, bits per character code, flowchart symbols,
   languages in time, licences, the OS layers, extensions by kind, Ctrl shortcuts, chart types, cell references, keys and
   database models, TLDs, To/CC/BCC, money transfers, network sizes, devices by OSI layer, transmission modes, cables, TCP vs
   UDP, ports, malware, a phishing mail taken apart, the IT Act sections and AI ⊃ ML ⊃ DL ⊃ generative AI
   (drawn by study-visual.js). place(), rows() and KIT come from applyVisual (lib.js). */
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


// ===================== more pictures: hardware (C1–C5, C18) =====================
const lq = (svg, name) => svg.replace("<text ", `<text data-lq="${name}" `);
const f1 = v => +v.toFixed(1);
const RM = "@media (prefers-reduced-motion:reduce){";

// C1 — chips: transistors per chip on a log scale
const ICS = rows("C1", "IC integration levels"), ICV = [100, 1000, 1e5, 1e6, 1e9], lx = v => 150 + Math.log10(v) / 10 * 480;
const ICF = `<svg class="dg" viewBox="0 0 660 250" role="img" aria-label="Transistors per chip for SSI to ULSI on a log scale">
  ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(p => `<line x1="${f1(lx(10 ** p))}" y1="20" x2="${f1(lx(10 ** p))}" y2="210" class="grid"/>` + T(f1(lx(10 ** p)), 228, "10" + (p === 10 ? "¹⁰" : "⁰¹²³⁴⁵⁶⁷⁸⁹"[p]), "var(--ink2)", "middle", 10)).join("")}
  ${ICS.map((r, i) => { const y = 30 + i * 36; return T(140, y + 17, r[0], "var(--ink)", "end", 13) + `<rect x="150" y="${y}" width="${f1(lx(ICV[i]) - 150)}" height="24" rx="5" fill="hsl(${200 + i * 25},60%,${50 - i * 4}%)" class="anim-in" style="animation-delay:${i * 120}ms"/>` +
    (lx(ICV[i]) > 420 ? `<text x="${f1(lx(ICV[i]) - 8)}" y="${y + 16}" text-anchor="end" font-size="10.5" font-weight="700" style="fill:#fff">${r[2].replace(/; .*$/, "")}</text>` : `<text x="${f1(lx(ICV[i]) + 6)}" y="${y + 16}" font-size="10.5" class="mut">${r[2].replace(/; .*$/, "")}</text>`); }).join("")}
  ${T(385, 246, "transistors per chip (each grid line is 10 times the one before)", "var(--ink2)", "middle", 10.5)}</svg>`;
place("C1", "IC integration levels", KIT.fig("Each level packs far more on one chip", ICF, "SSI to ULSI is a climb from about a hundred transistors on a chip to billions. Today's CPUs are ULSI; the word VLSI is still used for chip design in general.", 560));

// C1 — the four sizes
place("C1", "Types of computers by size", { k: "cards", title: "Four sizes of computer", rows: rows("C1", "Types of computers by size").map((r, i) => [r[0], r[3], r[1] + " — " + r[2], ["🏛️", "🏦", "🏢", "💻"][i]]) });

// C2 — the motherboard, labelled
const MB = [["CPU socket", 250, 70, 110, 100, "hsla(212,60%,55%,.35)"], ["RAM slots", 390, 60, 90, 120, "hsla(135,50%,45%,.35)"], ["Northbridge", 260, 200, 80, 50, "hsla(20,70%,55%,.4)"],
  ["Southbridge", 260, 290, 80, 50, "hsla(42,90%,50%,.45)"], ["PCI slots", 70, 210, 150, 120, "hsla(280,45%,55%,.3)"], ["SATA / IDE ports", 400, 300, 110, 50, "hsla(190,60%,45%,.35)"],
  ["BIOS chip", 380, 220, 60, 34, "hsla(0,60%,55%,.35)"], ["CMOS battery", 140, 350, 96, 40, "hsla(60,60%,50%,.4)"], ["ATX power connector", 510, 60, 50, 150, "hsla(0,0%,50%,.3)"], ["Back-panel ports", 70, 60, 50, 130, "hsla(330,50%,55%,.3)"]];
const MBF = `<svg class="dg" viewBox="0 0 660 420" role="img" aria-label="A motherboard with its main parts labelled">
  <rect x="50" y="40" width="530" height="370" rx="14" fill="hsla(150,40%,30%,.25)" stroke="var(--rule)" stroke-width="2"/>
  ${MB.map(([n, x, y, w, h, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${c}" stroke="var(--ink2)" stroke-width="1"/>` +
    (n === "RAM slots" ? [0, 1, 2, 3].map(k => `<rect x="${x + 10 + k * 20}" y="${y + 8}" width="10" height="${h - 16}" rx="2" fill="var(--sheet)" stroke="var(--ink2)"/>`).join("") : "") +
    (n === "PCI slots" ? [0, 1, 2, 3].map(k => `<rect x="${x + 8}" y="${y + 10 + k * 27}" width="${w - 16}" height="10" rx="2" fill="var(--sheet)" stroke="var(--ink2)"/>`).join("") : "") +
    (h > w * 1.8 ? lq(`<text x="${x + w / 2}" y="${y + h / 2}" font-size="11" font-weight="700" text-anchor="middle" transform="rotate(-90 ${x + w / 2} ${y + h / 2})" style="fill:var(--ink)">${n.replace(" connector", "")}</text>`, n)
      : n === "RAM slots" ? lq(T(x + w / 2, y + h + 15, n, "var(--ink)", "middle", 11), n) : n === "PCI slots" ? lq(T(x + w / 2, y - 6, n, "var(--ink)", "middle", 11), n)
      : lq(T(x + w / 2, y + h / 2 + 4, n, "var(--ink)", "middle", 11), n))).join("")}
  <path d="M305 170 V200 M300 250 V290 M340 225 H380 M340 315 H400" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 4"/>
  ${T(600, 120, "chipset", "var(--ink2)", "start", 10.5)}${T(600, 136, "links:", "var(--ink2)", "start", 10.5)}${T(600, 152, "dashed", "var(--accent)", "start", 10.5)}</svg>`;
place("C2", "Motherboard components", KIT.fig("Inside a motherboard", MBF, "The CPU sits in a socket; RAM, graphics and expansion cards sit in slots. The northbridge links the CPU with RAM and graphics, the southbridge with USB, SATA and audio. The CMOS battery keeps BIOS settings and the clock alive when the PC is off.", 560));

// C2 — the instruction cycle, going round
const IC4 = [["Fetch", "get the instruction from memory"], ["Decode", "control unit works out what it means"], ["Execute", "ALU does the work"], ["Store", "write the result back"]];
const CX = 170, CY = 150, CR = 95;
const ICY = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="The instruction cycle: fetch, decode, execute, store">
  <circle cx="${CX}" cy="${CY}" r="${CR}" fill="none" stroke="var(--rule)" stroke-width="10"/>
  ${IC4.map(([n], i) => { const a = -Math.PI / 2 + i * Math.PI / 2, x = CX + CR * Math.cos(a), y = CY + CR * Math.sin(a);
    return `<circle cx="${f1(x)}" cy="${f1(y)}" r="34" fill="hsl(${200 + i * 40},55%,45%)"/>` + T(f1(x), f1(y + 5), n, "#fff", "middle", 13); }).join("")}
  <circle r="8" fill="var(--accent)"><animateMotion dur="4s" repeatCount="indefinite" path="M${CX} ${CY - CR} A${CR} ${CR} 0 1 1 ${CX - 0.01} ${CY - CR}"/></circle>
  ${T(CX, CY - 4, "one", "var(--ink2)", "middle", 12)}${T(CX, CY + 14, "machine cycle", "var(--ink2)", "middle", 12)}
  ${IC4.map(([n, t], i) => T(330, 70 + i * 50, (i + 1) + " · " + n, "hsl(" + (200 + i * 40) + ",55%,40%)", "start", 15) + `<text x="330" y="${88 + i * 50}" font-size="12" class="mut">${t}</text>`).join("")}
  ${T(330, 286, "Clock speed (GHz) = how many cycles a second", "var(--ink2)", "start", 11.5)}</svg>`;
place("C2", "Instruction cycle", KIT.fig("The instruction cycle", ICY, "Fetch → decode → execute → store, again and again. A 3 GHz processor's clock ticks three billion times a second; more cores do more cycles side by side."));

// C2 — the three buses
const BU = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="Address, data and control buses between CPU, memory and input-output">
  
  ${box(30, 50, 150, 60, "CPU", "#7a4fb0")}${box(255, 50, 150, 60, "Memory (RAM)", "#2f6db5")}${box(480, 50, 150, 60, "Input / Output", "#2f8f4e")}
  ${[["Address bus", 150, "one way: CPU → memory/I-O", "#c0503a"], ["Data bus", 200, "two ways: data in and out", "#2f6db5"], ["Control bus", 250, "read, write, interrupt signals", "#2f8f4e"]].map(([n, y, t, c]) =>
    `<line x1="30" y1="${y}" x2="630" y2="${y}" stroke="${c}" stroke-width="6" stroke-linecap="round" opacity=".85"/>` + [105, 330, 555].map(x => `<line x1="${x}" y1="110" x2="${x}" y2="${y}" stroke="${c}" stroke-width="2" opacity=".6"/>`).join("") +
    T(118, y - 8, n, c, "start", 13) + `<text x="345" y="${y - 8}" font-size="11" class="mut">${t}</text>` +
    `<circle r="6" fill="${c}"><animateMotion dur="${n === "Data bus" ? 2.4 : 2}s" repeatCount="indefinite" path="M40 ${y} H620${n === "Data bus" ? " H40" : ""}"/></circle>`).join("")}
  ${T(330, 288, "All three together make the system bus. n address lines reach 2ⁿ locations (16 lines → 64 KB).", "var(--ink2)", "middle", 11.5)}</svg>`;
place("C2", "Buses", KIT.fig("Three buses, three jobs", BU, "The address bus says where, the data bus carries what, the control bus says do what (read or write). Only the data bus runs both ways."));

// C2 — from power button to desktop
const BOOT = [["Power on", "cold boot"], ["BIOS / UEFI", "firmware in ROM"], ["POST", "hardware self-test"], ["Boot loader", "via boot order"], ["OS loads", "into RAM"], ["Login", "desktop ready"]];
const BF = `<svg class="dg" viewBox="0 0 680 170" role="img" aria-label="The steps of booting">
  <defs>${M("bt", "var(--ink2)")}</defs>
  ${BOOT.map(([n, t], i) => { const x = 10 + i * 112; return `<rect x="${x}" y="50" width="98" height="56" rx="10" fill="hsl(${210 - i * 30},55%,46%)" class="anim-in" style="animation-delay:${i * 150}ms"/>` +
    T(x + 49, 82, n, "#fff", "middle", 12) + `<text x="${x + 49}" y="126" text-anchor="middle" font-size="10" class="mut">${t}</text>` +
    (i < 5 ? `<path d="M${x + 99} 78 H${x + 110}" stroke="var(--ink2)" stroke-width="2" marker-end="url(#bt)"/>` : ""); }).join("")}
  ${T(340, 160, "Warm boot (Restart, Ctrl+Alt+Del) starts again from step 2 without switching the power off.", "var(--ink2)", "middle", 11)}</svg>`;
place("C2", "BIOS, POST and booting", KIT.fig("Booting, step by step", BF, "BIOS (or the newer UEFI) runs the Power On Self Test, then follows the boot order to a drive with an operating system and hands over to its bootstrap loader.", 560));

// C3 — input devices in pictures
place("C3", "Input devices", KIT.photos("Input devices in pictures", [["Computer keyboard", "Keyboard", "Most common input device"], ["Computer mouse", "Mouse", "Pointing: point, click, drag"], ["Barcode reader", "Bar code reader (BCR)", "Shop counters"], ["Optical mark recognition", "OMR", "Marks on answer sheets"],
  ["Magnetic ink character recognition", "MICR", "Magnetic-ink numbers on cheques"], ["Image scanner", "Scanner", "Pages and photos into images"], ["Joystick", "Joystick", "Games and simulators"], ["Light pen", "Light pen", "Draws on a CRT screen"], ["Trackball", "Trackball", "An upside-down mouse"], ["Graphics tablet", "Digitizer / graphics tablet", "Drawings into digital form"],
  ["Webcam", "Webcam", "Video and photo input"], ["Stylus (computing)", "Stylus", "Pen for tablets"]], { name: r => r[1], cap: r => r[2] }));

// C18 — printers sorted, and in pictures
const PR = rows("C18", "Types of printers"), IMP = PR.filter(r => r[1] === "Impact"), NON = PR.filter(r => r[1] === "Non-impact");
const PT = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="Impact and non-impact printers">
  ${box(255, 10, 150, 44, "Printers", "#555")}
  <path d="M330 54 V74 H160 V94 M330 74 H500 V94" fill="none" stroke="var(--ink2)" stroke-width="2"/>
  ${box(80, 94, 160, 44, "Impact", "#c0503a", "strikes a ribbon")}${box(420, 94, 160, 44, "Non-impact", "#2f6db5", "no striking — quieter")}
  ${IMP.map((r, i) => `<rect x="80" y="${150 + i * 34}" width="160" height="28" rx="6" fill="hsla(10,60%,55%,.18)" stroke="var(--rule)"/>` + T(160, 169 + i * 34, r[0].replace(/ \(.*\)/, ""), "var(--ink)", "middle", 12)).join("")}
  ${NON.map((r, i) => `<rect x="${420 + (i % 2) * 82}" y="${150 + Math.floor(i / 2) * 34}" width="78" height="28" rx="6" fill="hsla(212,60%,55%,.18)" stroke="var(--rule)"/>` + T(459 + (i % 2) * 82, 169 + Math.floor(i / 2) * 34, r[0].replace(/ \(.*\)|-sublimation/, ""), "var(--ink)", "middle", 11.5)).join("")}
  ${T(160, 296, "speed in CPS / LPM", "var(--ink2)", "middle", 11)}${T(500, 296, "speed in PPM (pages a minute)", "var(--ink2)", "middle", 11)}</svg>`;
place("C18", "Types of printers", KIT.fig("Impact or non-impact?", PT, "Impact printers hit an inked ribbon (dot matrix, daisy wheel, line). Non-impact printers spray, heat or fuse (inkjet, thermal, laser). Laser is the fastest; a 3D printer builds objects layer by layer."),
  KIT.photos("Printers in pictures", [["Dot matrix printing", "Dot matrix", "Impact · pins strike a ribbon"], ["Daisy wheel printing", "Daisy wheel", "Impact · text only"], ["Line printer", "Line printer", "Impact · a line at a time (LPM)"], ["Inkjet printing", "Inkjet", "Sprays ink drops"], ["Laser printing", "Laser", "Toner · fastest (PPM)"], ["Thermal printing", "Thermal", "Heat-sensitive paper · bills"], ["Plotter", "Plotter", "Large engineering drawings"], ["3D printing", "3D printer", "Builds objects layer by layer"]], { name: r => r[1], cap: r => r[2] }));

// C18 — RGB adds light, CMYK takes it away
const CMY = `<svg class="dg" viewBox="0 0 660 305" role="img" aria-label="RGB colours add up to white on a screen; CMYK inks add up to black on paper"><g transform="translate(0 35)">
  <rect x="20" y="20" width="300" height="220" rx="12" fill="#111"/><rect x="340" y="20" width="300" height="220" rx="12" fill="#fafafa" stroke="var(--rule)"/>
  <g style="isolation:isolate">${[["#ff0000", 140, 105, "Red"], ["#00ff00", 200, 105, "Green"], ["#0000ff", 170, 155, "Blue"]].map(([c, x, y]) => `<circle cx="${x}" cy="${y}" r="58" fill="${c}" style="mix-blend-mode:screen"/>`).join("")}</g>
  <g style="isolation:isolate">${[["#00ffff", 460, 105], ["#ff00ff", 520, 105], ["#ffff00", 490, 155]].map(([c, x, y]) => `<circle cx="${x}" cy="${y}" r="58" fill="${c}" style="mix-blend-mode:multiply"/>`).join("")}</g>
  <text x="170" y="40" text-anchor="middle" font-size="13" font-weight="800" style="fill:#fff">RGB — screens</text><text x="170" y="232" text-anchor="middle" font-size="11" style="fill:#ddd">light adds up to white</text>
  <text x="490" y="40" text-anchor="middle" font-size="13" font-weight="800" style="fill:#222">CMYK — printers</text><text x="490" y="232" text-anchor="middle" font-size="11" style="fill:#444">ink adds up to black (K)</text>
  ${T(330, 262, "Monitors mix Red, Green, Blue light; printers mix Cyan, Magenta, Yellow ink plus blacK.", "var(--ink2)", "middle", 11.5)}</g></svg>`;
place("C18", "Colour and printer terms", KIT.fig("RGB on screen, CMYK on paper", CMY, "Where the screen's three lights overlap you get white; where the printer's three inks overlap you get (almost) black — so a separate black (K) cartridge is added."));

// C18 — screen resolutions to scale
const RES = [["HD", 1280, 720, "#2f8f4e"], ["Full HD", 1920, 1080, "#2f6db5"], ["4K UHD", 3840, 2160, "#c0503a"]], rs = 0.15;
const RF = `<svg class="dg" viewBox="0 0 660 360" role="img" aria-label="HD, Full HD and 4K resolutions drawn to scale">
  ${RES.slice().reverse().map(([n, w, h, c]) => `<rect x="20" y="20" width="${f1(w * rs)}" height="${f1(h * rs)}" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2"/>` +
    T(f1(20 + w * rs - 8), f1(20 + h * rs - 10), `${n} · ${w} × ${h}`, c, "end", 12)).join("")}
</svg>`;
place("C18", "Monitor and display", KIT.fig("Resolution, drawn to scale", RF, "Resolution is pixels across × pixels down. Full HD (1920 × 1080) is about 2 million pixels; 4K (3840 × 2160) is four times as many, so the same screen size looks sharper.", 560));

// C4 — memory units as a staircase
const MU = rows("C4", "Memory units");
const ST = `<svg class="dg" viewBox="0 0 680 330" role="img" aria-label="Memory units from bit to yottabyte">
  ${MU.map((r, i) => { const x = 10 + i * 60, h = 46 + i * 17, y = 300 - h; return `<rect x="${x}" y="${y}" width="56" height="${h}" rx="5" fill="hsl(${200 - i * 16},60%,${46 + (i % 2) * 4}%)" class="anim-in" style="animation-delay:${i * 80}ms"/>` +
    T(x + 28, y + 18, r[0].replace(/ \(.*\)/, "").replace("byte", "B").replace(/^(Kilo|Mega|Giga|Tera|Peta|Exa|Zetta|Yotta)B$/, (m, p) => p[0] + "B"), "#fff", "middle", 12) +
    `<text x="${x + 28}" y="${y + 34}" text-anchor="middle" font-size="9.5" style="fill:#fff">${r[1].replace("Binary digit — ", "").replace(" bytes", " B")}</text>`; }).join("")}
  <path d="M10 300 H670" stroke="var(--ink)" stroke-width="1.5"/>
  ${T(10, 322, "Bit → Nibble (4 bits) → Byte (8 bits); after that each step is × 1024 (2¹⁰).", "var(--ink2)", "start", 11.5)}</svg>`;
place("C4", "Memory units", KIT.fig("Climbing the memory units", ST, "One byte holds one ASCII character. KB, MB, GB, TB, PB, EB, ZB, YB — each is 1024 times the one before. Disk makers use 1000 instead, which is why a '1 TB' disk shows about 931 GB.", 560));

// C4 — the ROM family, in the order it grew
const RO = [["ROM", "written at the factory", "#555"], ["PROM", "written once by the user", "#7a4fb0"], ["EPROM", "erased by ultraviolet light", "#2f6db5"], ["EEPROM", "erased electrically, byte by byte", "#2f8f4e"], ["Flash", "erased electrically, block by block", "#c0503a"]];
const ROF = `<svg class="dg" viewBox="0 0 680 150" role="img" aria-label="ROM, PROM, EPROM, EEPROM and flash memory">
  <defs>${M("ro", "var(--ink2)")}</defs>
  ${RO.map(([n, t, c], i) => { const x = 10 + i * 134; return `<rect x="${x}" y="24" width="118" height="54" rx="10" fill="${c}"/>` + lq(T(x + 59, 57, n, "#fff", "middle", 15), n) +
    `<text x="${x + 59}" y="98" text-anchor="middle" font-size="10.5" class="mut">${t.split(", ")[0]}</text>${t.includes(", ") ? `<text x="${x + 59}" y="112" text-anchor="middle" font-size="10.5" class="mut">${t.split(", ")[1]}</text>` : ""}` +
    (i < 4 ? `<path d="M${x + 119} 51 H${x + 132}" stroke="var(--ink2)" stroke-width="2" marker-end="url(#ro)"/>` : ""); }).join("")}
  ${T(340, 140, "All are non-volatile: they keep their contents without power.", "var(--ink2)", "middle", 11.5)}</svg>`;
place("C4", "ROM family", KIT.fig("The ROM family", ROF, "Each step made ROM easier to rewrite: PROM once, EPROM with UV light, EEPROM electrically byte by byte, flash electrically in blocks (pen drives, SSDs)."));

// C5 — inside a hard disk
const HD = `<svg class="dg" viewBox="0 0 660 330" role="img" aria-label="Inside a hard disk: platters, tracks, sectors, head and arm">
  <rect x="30" y="20" width="360" height="290" rx="18" fill="var(--sunk)" stroke="var(--rule)"/>
  <circle cx="190" cy="165" r="125" fill="hsla(212,30%,60%,.35)" stroke="var(--ink2)"/>
  ${[105, 85, 65, 45].map(r => `<circle cx="190" cy="165" r="${r}" fill="none" stroke="var(--ink2)" stroke-dasharray="3 3"/>`).join("")}
  <path d="M190 165 L${f1(190 + 125 * Math.cos(-0.5))} ${f1(165 + 125 * Math.sin(-0.5))} A125 125 0 0 1 ${f1(190 + 125 * Math.cos(-0.1))} ${f1(165 + 125 * Math.sin(-0.1))} Z" fill="hsla(20,85%,55%,.55)"/>
  <circle cx="190" cy="165" r="14" fill="var(--ink2)"/>
  <g class="hdarm" style="transform-origin:350px 270px"><path d="M350 270 L230 150" stroke="var(--ink)" stroke-width="9" stroke-linecap="round"/><circle cx="230" cy="150" r="7" fill="var(--accent)"/></g>
  <circle cx="350" cy="270" r="14" fill="var(--ink)"/>
  ${[["Platter", 420, 50, 268, 92], ["Track", 420, 100, 280, 165], ["Sector", 420, 150, 305, 128], ["Spindle", 420, 200, 204, 165], ["Read/write head", 420, 250, 236, 150], ["Actuator arm", 420, 295, 300, 225]].map(([n, x, y, px, py]) =>
    `<line x1="${x - 4}" y1="${y - 4}" x2="${px}" y2="${py}" stroke="var(--ink2)" stroke-width="1"/>` + lq(T(x, y, n, "var(--ink)", "start", 13), n)).join("")}
  <style>.hdarm{animation:hdseek 3.2s ease-in-out infinite alternate}@keyframes hdseek{from{transform:rotate(-8deg)}to{transform:rotate(10deg)}}${RM}.hdarm{animation:none}}</style></svg>`;
place("C5", "How a hard disk is organised", KIT.fig("Inside a hard disk", HD, "Data sits in concentric tracks on spinning platters; each track is cut into sectors. The arm swings the read/write head to the right track — the same track on every platter forms a cylinder."));

// C5 — three ways to back up, over a week
const BK = rows("C5", "Back-up types").slice(0, 3), DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu"];
const BKF = `<svg class="dg" viewBox="0 0 660 250" role="img" aria-label="Full, incremental and differential back-ups across a week">
  ${DAYS.map((d, i) => T(200 + i * 90, 50, d, "var(--ink2)", "middle", 12)).join("")}
  ${BK.map((r, k) => { const y = 62 + k * 58; return T(110, y + 26, r[0].replace(" back-up", ""), "var(--ink)", "end", 13) +
    DAYS.map((d, i) => { const w = k === 0 || i === 0 ? 80 : k === 1 ? 20 : 20 * i; return `<rect x="${160 + i * 90}" y="${y + 6}" width="${w}" height="30" rx="5" fill="${i === 0 ? "#2f6db5" : ["#2f6db5", "#2f8f4e", "#c69214"][k]}" opacity="${i === 0 ? 1 : .85}"/>`; }).join(""); }).join("")}
  ${T(330, 244, "bar = how much is copied that night (Sunday is a full back-up in every plan)", "var(--ink2)", "middle", 11)}</svg>`;
place("C5", "Back-up types", KIT.fig("Full, incremental, differential", BKF, "Incremental copies only what changed since the last back-up of any kind (quickest each night, slowest to restore). Differential copies everything since the last full back-up, so it grows each day but restores from just two sets."));

// ===================== more pictures: software, Office, data (C6–C11, C19–C21) =====================
// C6 — how many bits each character code uses
place("C6", "Character codes", { k: "bars", title: "Bits per character", unit: "bits", left: 150, hi: 1, sort: false,
  rows: [["ASCII", 7, "128 characters · A = 65"], ["Extended ASCII", 8, "256 characters"], ["EBCDIC", 8, "IBM mainframes"], ["ISCII", 8, "Indian scripts"], ["Unicode (UTF-32)", 32, "UTF-8: 1–4 bytes"]],
  cap: "7 bits give 2⁷ = 128 codes; 8 bits give 256. Unicode covers almost every script, including Devanagari and emoji; UTF-8 is what the web uses." });

// C7 — flowchart symbols, with a small flowchart that uses them
const FS = `<svg class="dg" viewBox="0 0 680 430" role="img" aria-label="Flowchart symbols and a small flowchart">
  <defs>${M("fl", "var(--ink2)")}</defs>
  <ellipse cx="80" cy="45" rx="55" ry="22" fill="hsla(135,50%,45%,.3)" stroke="var(--ink2)"/>${lq(T(160, 50, "Terminal — start / stop", "var(--ink)", "start", 12.5), "Terminal")}
  <rect x="25" y="90" width="110" height="44" fill="hsla(212,60%,55%,.3)" stroke="var(--ink2)"/>${lq(T(160, 117, "Process — a calculation or step", "var(--ink)", "start", 12.5), "Process")}
  <path d="M80 150 L135 180 L80 210 L25 180 Z" fill="hsla(42,90%,50%,.35)" stroke="var(--ink2)"/>${lq(T(160, 185, "Decision — yes / no question", "var(--ink)", "start", 12.5), "Decision")}
  <path d="M40 230 H140 L120 270 H20 Z" fill="hsla(280,45%,55%,.3)" stroke="var(--ink2)"/>${lq(T(160, 255, "Input / Output — read or print", "var(--ink)", "start", 12.5), "Input / Output")}
  <circle cx="80" cy="305" r="18" fill="hsla(0,0%,60%,.3)" stroke="var(--ink2)"/>${lq(T(160, 310, "Connector — joins parts of a chart", "var(--ink)", "start", 12.5), "Connector")}
  <path d="M30 350 H130" stroke="var(--ink2)" stroke-width="2" marker-end="url(#fl)"/>${lq(T(160, 355, "Flow line — the order of steps", "var(--ink)", "start", 12.5), "Flow line")}
  <g transform="translate(440 50)">
    <ellipse cx="110" cy="30" rx="50" ry="18" fill="hsla(135,50%,45%,.3)" stroke="var(--ink2)"/>${T(110, 35, "Start", "var(--ink)", "middle", 12)}
    <path d="M70 70 H170 L155 102 H55 Z" fill="hsla(280,45%,55%,.3)" stroke="var(--ink2)"/>${T(112, 91, "Read A, B", "var(--ink)", "middle", 12)}
    <path d="M110 125 L160 155 L110 185 L60 155 Z" fill="hsla(42,90%,50%,.35)" stroke="var(--ink2)"/>${T(110, 160, "A > B ?", "var(--ink)", "middle", 12)}
    <path d="M0 215 H90 L76 245 H-14 Z" fill="hsla(280,45%,55%,.3)" stroke="var(--ink2)"/>${T(38, 235, "Print A", "var(--ink)", "middle", 12)}
    <path d="M135 215 H225 L211 245 H121 Z" fill="hsla(280,45%,55%,.3)" stroke="var(--ink2)"/>${T(173, 235, "Print B", "var(--ink)", "middle", 12)}
    <ellipse cx="110" cy="310" rx="50" ry="18" fill="hsla(135,50%,45%,.3)" stroke="var(--ink2)"/>${T(110, 315, "Stop", "var(--ink)", "middle", 12)}
    <path d="M110 48 V68 M110 102 V123" stroke="var(--ink2)" stroke-width="2" marker-end="url(#fl)"/>
    <path d="M60 155 H40 V212" fill="none" stroke="var(--ink2)" stroke-width="2" marker-end="url(#fl)"/><path d="M160 155 H175 V212" fill="none" stroke="var(--ink2)" stroke-width="2" marker-end="url(#fl)"/>
    ${T(28, 150, "yes", "var(--good)", "middle", 11)}${T(190, 150, "no", "var(--bad)", "middle", 11)}
    <path d="M33 245 V280 H110 V290 M168 245 V280 H110" fill="none" stroke="var(--ink2)" stroke-width="2" marker-end="url(#fl)"/>
    ${T(110, 360, "prints the larger number", "var(--ink2)", "middle", 11)}
  </g></svg>`;
place("C7", "Program design", KIT.fig("Flowchart symbols", FS, "Oval = start/stop, rectangle = process, diamond = decision, parallelogram = input/output, small circle = connector. The example reads two numbers and prints the larger one.", 560));

// C7 — languages in time
place("C7", "Famous languages", { k: "tlfig", title: "Programming languages in time", rows: rows("C7", "Famous languages").flatMap(r => { const ys = r[1].match(/\d{4}/g) || [], ns = r[0].split(", "), cs = r[2].split("; ");
    return ns.map((n, i) => [+(ys[i] || ys[0]), n, cs[i] || cs[0]]); }).filter(r => r[0]).sort((a, b) => a[0] - b[0]),
  cap: "FORTRAN (1957) was the first high-level language; C (1972) rewrote UNIX; Python (1991) and Java (1995) lead today. HTML is a markup language, not a programming language." });

// C7 — software by licence
place("C7", "Software by licence", { k: "cards", title: "Who may use it, who may change it", rows: rows("C7", "Software by licence").filter(r => !/jugaad/i.test(r[0])).map((r, i) => [r[0], r[3], "Free: " + r[1].toLowerCase() + " · source code: " + r[2].toLowerCase(), ["🔓", "🔒", "🎁", "⏳"][i]]) });

// C19 — where the operating system sits
const OSL = [["User", "you", "hsla(0,0%,55%,.35)"], ["Application software", "MS-Office, browser, games", "hsla(212,60%,55%,.35)"], ["Shell", "turns your commands into kernel calls", "hsla(135,50%,45%,.35)"], ["Kernel", "core of the OS: memory, processes, devices", "hsla(20,80%,55%,.4)"], ["Hardware", "CPU, RAM, disks, devices", "hsla(42,90%,50%,.45)"]];
const OSF = `<svg class="dg" viewBox="0 0 660 360" role="img" aria-label="Layers from the user down to the hardware"><g transform="translate(0 40)">
  ${OSL.map(([n, t, c], i) => { const x = 40 + i * 30, w = 580 - i * 60, y = 20 + i * 56; return `<rect x="${x}" y="${y}" width="${w}" height="48" rx="10" fill="${c}" stroke="var(--rule)"/>` +
    lq(T(x + 16, y + 21, n, "var(--ink)", "start", 14), n) + `<text x="${x + 16}" y="${y + 38}" font-size="11" class="mut">${t}</text>`; }).join("")}
  <path d="M612 30 V290" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 4"/>${T(620, 160, "OS", "var(--accent)", "start", 13)}</g></svg>`;
place("C19", "Operating system basics", KIT.fig("Where the operating system sits", OSF, "The operating system sits between your programs and the hardware. Its kernel never talks to you directly; the shell (or the GUI) carries your commands to it. It is stored on the disk and loaded into RAM at boot."));

// C20 — extensions, sorted by kind
const EXG = [["Images", "C20", "Image file", "🖼️"], ["Audio", "C20", "Audio file", "🎵"], ["Video", "C20", "Video file", "🎬"], ["Office & text", "C20", "Office and text", "📄"], ["System & programs", "C20", "System and executable", "⚙️"]];
const EXH = `<div class="fam">${EXG.map(([n, id, t, ic]) => `<div><b>${ic} ${n}</b>` + rows(id, t).slice(0, 7).map(r => `<small><b>${r[0]}</b> — ${r[1].split(/[;(]/)[0].trim()}</small>`).join("") + "</div>").join("")}</div>`;
place("C20", "File extensions you must know", { k: "info", title: "Extensions by kind", html: EXH, cap: "The extension after the dot tells Windows which program opens the file: .docx → Word, .xlsx → Excel, .pptx → PowerPoint, .exe → a program that runs by itself." });

// C8 — the shortcut keys on a keyboard
const KR = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"], HOT = { C: "Copy", X: "Cut", V: "Paste", Z: "Undo", Y: "Redo", A: "Select all", S: "Save", P: "Print", F: "Find", N: "New", O: "Open", W: "Close tab", B: "Bold", I: "Italic", U: "Underline" };
const KS = `<svg class="dg" viewBox="0 0 680 340" role="img" aria-label="Ctrl shortcuts on a keyboard">
  ${KR.map((row, r) => [...row].map((k, i) => { const x = 20 + r * 22 + i * 58, y = 60 + r * 70, hot = HOT[k];
    return `<rect x="${x}" y="${y}" width="52" height="52" rx="8" fill="${hot ? "hsla(20,85%,55%,.35)" : "var(--sunk)"}" stroke="var(--rule)"/>` + T(x + 26, y + 24, k, "var(--ink)", "middle", 16) +
      (hot ? `<text x="${x + 26}" y="${y + 42}" text-anchor="middle" font-size="9" font-weight="700" style="fill:var(--ink2)">${hot}</text>` : ""); }).join("")).join("")}
  <rect x="20" y="270" width="110" height="52" rx="8" fill="hsla(212,60%,55%,.4)" stroke="var(--rule)"/>${T(75, 302, "Ctrl", "var(--ink)", "middle", 16)}
  ${T(150, 292, "Hold Ctrl and press the orange key.", "var(--ink)", "start", 13)}${T(150, 312, "These work in almost every Windows program.", "var(--ink2)", "start", 11.5)}</svg>`;
place("C8", "Universal editing shortcuts", KIT.fig("Ctrl shortcuts on the keyboard", KS, "Copy C, cut X, paste V sit side by side at the bottom left; undo Z is next to them. In Word, Ctrl+B, I and U are bold, italic and underline.", 560));

// C10 — the chart types, drawn
const CHT = [["Column", (x, y) => [12, 26, 18, 34].map((h, i) => `<rect x="${x + 8 + i * 18}" y="${y + 50 - h}" width="12" height="${h}" fill="#2f6db5"/>`).join("")],
  ["Bar", (x, y) => [40, 22, 32].map((w, i) => `<rect x="${x + 8}" y="${y + 6 + i * 16}" width="${w + 14}" height="11" fill="#2f8f4e"/>`).join("")],
  ["Line", (x, y) => `<polyline points="${[[8, 44], [26, 30], [44, 36], [62, 14], [80, 20]].map(p => (x + p[0]) + "," + (y + p[1])).join(" ")}" fill="none" stroke="#c0503a" stroke-width="3"/>`],
  ["Pie", (x, y) => `<circle cx="${x + 44}" cy="${y + 28}" r="24" fill="#c69214"/><path d="M${x + 44} ${y + 28} L${x + 44} ${y + 4} A24 24 0 0 1 ${x + 67} ${y + 35} Z" fill="#2f6db5"/><path d="M${x + 44} ${y + 28} L${x + 67} ${y + 35} A24 24 0 0 1 ${x + 30} ${y + 48} Z" fill="#2f8f4e"/>`],
  ["Doughnut", (x, y) => `<circle cx="${x + 44}" cy="${y + 28}" r="22" fill="none" stroke="#7a4fb0" stroke-width="10"/><path d="M${x + 44} ${y + 6} A22 22 0 0 1 ${x + 66} ${y + 28}" fill="none" stroke="#c69214" stroke-width="10"/>`],
  ["Scatter (XY)", (x, y) => [[12, 40], [22, 34], [30, 36], [42, 24], [52, 22], [64, 14], [74, 10]].map(p => `<circle cx="${x + p[0]}" cy="${y + p[1]}" r="3.5" fill="#2f6db5"/>`).join("")],
  ["Area", (x, y) => `<path d="M${x + 8} ${y + 50} L${x + 8} ${y + 36} L${x + 28} ${y + 26} L${x + 48} ${y + 32} L${x + 68} ${y + 12} L${x + 82} ${y + 18} L${x + 82} ${y + 50} Z" fill="#2f8f4e" opacity=".7"/>`],
  ["Radar", (x, y) => { const p = (r, k) => [x + 44 + r * Math.sin(k * Math.PI / 3), y + 28 - r * Math.cos(k * Math.PI / 3)].map(f1).join(","); return `<polygon points="${[0, 1, 2, 3, 4, 5].map(k => p(24, k)).join(" ")}" fill="none" stroke="var(--rule)"/><polygon points="${[18, 22, 10, 20, 14, 23].map((r, k) => p(r, k)).join(" ")}" fill="#c0503a" opacity=".55"/>`; }]];
const CHF = `<svg class="dg" viewBox="0 0 680 255" role="img" aria-label="Excel chart types">
  ${CHT.map(([n, d], i) => { const x = 10 + (i % 4) * 168, y = 55 + Math.floor(i / 4) * 100; return `<rect x="${x}" y="${y}" width="150" height="88" rx="10" fill="var(--sheet)" stroke="var(--rule)"/>` + d(x + 30, y + 6) + lq(T(x + 75, y + 80, n, "var(--ink)", "middle", 12), n); }).join("")}</svg>`;
place("C10", "Chart types", KIT.fig("Excel's chart types at a glance", CHF, "Column and bar compare categories; line and area show change over time; pie and doughnut show parts of a whole; scatter shows how two variables relate; radar compares several values around a centre.", 560));

// C10 — relative, absolute and mixed references, copied one row down and one column right
const RF2 = [["=A1", "=B2", "relative — both move"], ["=$A$1", "=$A$1", "absolute — neither moves"], ["=$A1", "=$A2", "mixed — column fixed"], ["=A$1", "=B$1", "mixed — row fixed"]];
const RFF = `<svg class="dg" viewBox="0 0 660 244" role="img" aria-label="What happens to cell references when a formula is copied">
  <defs>${M("rf", "var(--accent)")}</defs>
  ${T(110, 24, "formula in B1", "var(--ink2)", "middle", 11)}${T(330, 24, "copied to C2 becomes", "var(--ink2)", "middle", 11)}
  ${RF2.map(([a, b, t], i) => { const y = 40 + i * 46; return `<rect x="40" y="${y}" width="140" height="34" rx="6" fill="var(--sunk)" stroke="var(--rule)"/>` + T(110, y + 22, a, "var(--ink)", "middle", 15) +
    `<path d="M190 ${y + 17} H250" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#rf)"/><rect x="260" y="${y}" width="140" height="34" rx="6" fill="hsla(20,85%,55%,.2)" stroke="var(--rule)"/>` + T(330, y + 22, b, "var(--ink)", "middle", 15) +
    `<text x="420" y="${y + 22}" font-size="12" class="mut">${t}</text>`; }).join("")}
  ${T(40, 236, "The $ sign locks what comes right after it. F4 cycles through the four kinds.", "var(--ink2)", "start", 11.5)}</svg>`;
place("C10", "Formulas, operators", KIT.fig("Relative, absolute and mixed references", RFF, "Copy =A1 one row down and one column right and it becomes =B2; =$A$1 stays put; =$A1 keeps column A; =A$1 keeps row 1."));

// C21 — keys linking two tables
const KEYF = `<svg class="dg" viewBox="0 0 660 270" role="img" aria-label="A primary key in one table and a foreign key pointing to it from another">
  <defs>${M("fk", "var(--accent)")}</defs>
  ${[[30, "Students", [["Roll No", 1], ["Name", 0], ["Email", 2]], [["101", "Asha", "asha@…"], ["102", "Ravi", "ravi@…"]]], [370, "Fees", [["Receipt No", 1], ["Roll No", 3], ["Amount", 0]], [["R-7", "101", "₹500"], ["R-8", "102", "₹500"]]]].map(([x, n, cols, data]) =>
    T(x, 30, n + " table", "var(--ink)", "start", 14) + cols.map(([c, k], j) => `<rect x="${x + j * 86}" y="40" width="84" height="30" fill="${k === 1 ? "hsla(42,90%,50%,.5)" : k === 3 ? "hsla(20,85%,55%,.4)" : "var(--sunk)"}" stroke="var(--rule)"/>` + T(x + j * 86 + 42, 60, c, "var(--ink)", "middle", 11.5) +
      data.map((r, d) => `<rect x="${x + j * 86}" y="${70 + d * 28}" width="84" height="28" fill="var(--sheet)" stroke="var(--rule)"/><text x="${x + j * 86 + 42}" y="${89 + d * 28}" text-anchor="middle" font-size="11.5">${r[j]}</text>`).join("")).join("")).join("")}
  <path d="M498 128 C498 172, 72 176, 72 132" fill="none" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#fk)"/>
  ${lq(T(72, 188, "Primary key", "#a87814", "middle", 12), "Primary key")}${lq(T(498, 188, "Foreign key", "var(--accent)", "middle", 12), "Foreign key")}${lq(T(244, 145, "Alternate key", "var(--ink2)", "middle", 12), "Alternate key")}
  ${T(412, 146, "↑ primary key of Fees", "#a87814", "middle", 10.5)}
  ${T(330, 262, "A foreign key holds a value from another table's primary key, which links the two tables.", "var(--ink2)", "middle", 11.5)}</svg>`;
place("C21", "Keys", KIT.fig("How keys link tables", KEYF, "Roll No identifies each student (primary key; never empty, never repeated). In the Fees table, Roll No is a foreign key pointing back to Students. Email could also be unique — a candidate key not chosen, so an alternate key."));

// C21 — the shapes of database models
const DMF = `<svg class="dg" viewBox="0 0 660 270" role="img" aria-label="Hierarchical, network and relational database models"><g transform="translate(0 40)">
  ${[0, 1, 2].map(k => `<rect x="${10 + k * 218}" y="10" width="206" height="190" rx="12" fill="var(--sheet)" stroke="var(--rule)"/>`).join("")}
  ${lq(T(113, 32, "Hierarchical", "var(--ink)", "middle", 13), "Hierarchical")}${lq(T(331, 32, "Network", "var(--ink)", "middle", 13), "Network")}${lq(T(549, 32, "Relational", "var(--ink)", "middle", 13), "Relational")}
  <path d="M113 62 L63 112 M113 62 L163 112 M63 112 L38 162 M63 112 L88 162 M163 112 L188 162" stroke="var(--ink2)" stroke-width="2"/>
  ${[[113, 62], [63, 112], [163, 112], [38, 162], [88, 162], [188, 162]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="11" fill="#2f6db5"/>`).join("")}
  <path d="M291 70 L371 70 M291 70 L291 150 M371 70 L371 150 M291 150 L371 150 M291 70 L371 150 M371 70 L331 110 M291 150 L331 110" stroke="var(--ink2)" stroke-width="2"/>
  ${[[291, 70], [371, 70], [291, 150], [371, 150], [331, 110]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="11" fill="#2f8f4e"/>`).join("")}
  ${[0, 1].map(t => [0, 1, 2, 3].map(r => [0, 1, 2].map(c => `<rect x="${458 + t * 100 + c * 28}" y="${60 + r * 22 + t * 30}" width="28" height="22" fill="${r === 0 ? "hsla(20,85%,55%,.4)" : "var(--sunk)"}" stroke="var(--rule)"/>`).join("")).join("")).join("")}
  ${T(113, 192, "tree: one parent", "var(--ink2)", "middle", 11)}${T(331, 192, "graph: many parents", "var(--ink2)", "middle", 11)}${T(549, 192, "tables of rows and columns", "var(--ink2)", "middle", 11)}
  ${T(330, 222, "MS Access, Oracle and MySQL are relational; MongoDB is NoSQL.", "var(--ink2)", "middle", 11.5)}</g></svg>`;
place("C21", "Database models", KIT.fig("Three shapes of database", DMF, "Hierarchical data is a tree (IBM IMS), network data a graph (CODASYL), relational data a set of linked tables — the model used by MS Access and SQL databases."));

// ===================== more pictures: internet, networks, security, law, new tech (C12–C17, C22) =====================
// C12 — top-level domains as tiles
place("C12", "Common top-level domains", { k: "cards", title: "What the ending tells you", rows: rows("C12", "Common top-level domains").map((r, i) => [r[0], r[1].split(/[;(]/)[0].trim(), r[2] || "", ["🏢", "🤝", "🌐", "🎓", "🏛️", "🎖️", "🌍", "🇮🇳", "🗺️"][i] || "🌐"]) });

// C13 — To, CC and BCC: who sees whom
const EMV = `<svg class="dg" viewBox="0 0 660 260" role="img" aria-label="To and CC addresses are visible to everyone; BCC addresses are hidden">
  <defs>${M("em", "var(--ink2)")}</defs>
  ${box(20, 100, 120, 56, "Sender", "#555")}
  ${[["To", "Ravi", 40, "#2f6db5", "sees To + CC"], ["CC", "Meena", 110, "#2f8f4e", "sees To + CC"], ["BCC", "Office", 180, "#7a4fb0", "sees To + CC; nobody sees this address"]].map(([f, n, y, c, t]) =>
    `<path d="M140 128 L300 ${y + 24}" stroke="var(--ink2)" stroke-width="2" marker-end="url(#em)"/>` + `<rect x="305" y="${y}" width="130" height="48" rx="10" fill="${c}"/>` + T(370, y + 20, f, "#fff", "middle", 13) + `<text x="370" y="${y + 38}" text-anchor="middle" font-size="11" style="fill:#fff">${n}</text>` +
    `<text x="450" y="${y + 29}" font-size="11.5" class="mut">${t}</text>`).join("")}
  ${T(330, 250, "Use BCC for a mass mail so nobody sees everyone else's address.", "var(--ink2)", "middle", 11.5)}</svg>`;
place("C13", "E-mail fields", KIT.fig("To, CC and BCC", EMV, "Every recipient can see the To and CC addresses. BCC addresses are hidden from everyone else — even the other BCC recipients."));

// C13 — money transfers side by side
place("C13", "Electronic fund transfer", { k: "cards", title: "Ways to send money", rows: rows("C13", "Electronic fund transfer").map((r, i) => [r[0], r[1] + " · " + r[2], r[3].split(";")[0], ["⏱️", "⚡", "📲", "🔗", "🇮🇳", "💳"][i]]) });

// C14 — network sizes, one inside the next
const NW = rows("C14", "Types of network by size");
const NWF = `<svg class="dg" viewBox="0 0 680 330" role="img" aria-label="PAN inside LAN inside CAN inside MAN inside WAN">
  ${NW.slice().reverse().map((r, i) => { const k = NW.length - 1 - i, rx = 50 + k * 42, ry = 24 + k * 27; return `<ellipse cx="235" cy="170" rx="${rx}" ry="${ry}" fill="hsla(${200 - k * 30},60%,50%,.18)" stroke="hsl(${200 - k * 30},55%,45%)" stroke-width="2"/>` +
    lq(T(235, 170 - ry + 18, r[0], "hsl(" + (200 - k * 30) + ",55%,35%)", "middle", 13), r[0]); }).join("")}
  ${NW.map((r, i) => T(470, 60 + i * 52, r[0], "var(--ink)", "start", 13) + `<text x="510" y="${60 + i * 52}" font-size="11" class="mut">${r[1]}</text><text x="470" y="${77 + i * 52}" font-size="10.5" class="mut">${r[2].split(/[;(]/)[0].slice(0, 32)}</text>`).join("")}</svg>`;
place("C14", "Types of network by size", KIT.fig("Networks by size", NWF, "From a Bluetooth link around you (PAN) to a building (LAN), a campus (CAN), a city (MAN) and the world (WAN — the Internet is the biggest)."));

// C14 — which layer each device works at
const DV = rows("C14", "Networking devices"), LAYERS = ["Physical", "Data link", "Network"];
const DVF = `<svg class="dg" viewBox="0 0 660 260" role="img" aria-label="Networking devices placed on the OSI layer where they work">
  ${LAYERS.map((L, i) => { const y = 170 - i * 70; return `<rect x="20" y="${y}" width="620" height="60" rx="10" fill="hsla(${210 - i * 50},55%,50%,.16)" stroke="var(--rule)"/>` + T(30, y + 34, "Layer " + (i + 1) + " · " + L, "var(--ink)", "start", 13) +
    DV.filter(r => r[1] === L).map((r, k) => `<rect x="${220 + k * 140}" y="${y + 12}" width="128" height="36" rx="8" fill="hsl(${210 - i * 50},55%,46%)"/>` + T(284 + k * 140, y + 35, r[0], "#fff", "middle", 12)).join(""); }).join("")}
  ${T(30, 20, "Gateway: works up to the application layer — joins networks that use different protocols", "var(--ink2)", "start", 11.5)}</svg>`;
place("C14", "Networking devices", KIT.fig("Devices and their OSI layer", DVF, "A hub just repeats signals to every port (layer 1). A switch reads MAC addresses (layer 2). A router reads IP addresses and picks a route (layer 3). The higher the layer, the smarter the device."));

// C14 — simplex, half duplex and full duplex, moving
const TMR = rows("C14", "Transmission modes");
const TMF = `<svg class="dg" viewBox="0 0 660 250" role="img" aria-label="Simplex, half duplex and full duplex">
  ${TMR.map((r, i) => { const y = 30 + i * 74, ex = r[1].split(":")[1] ? r[1].split(":")[1].trim().replace(/\.$/, "").split(", ").slice(0, 3).join(", ") : "";
    return `<rect x="20" y="${y - 6}" width="70" height="44" rx="8" fill="var(--sunk)" stroke="var(--rule)"/><rect x="270" y="${y - 6}" width="70" height="44" rx="8" fill="var(--sunk)" stroke="var(--rule)"/>` +
      T(55, y + 21, "A", "var(--ink)", "middle", 15) + T(305, y + 21, "B", "var(--ink)", "middle", 15) + `<line x1="92" y1="${y + 16}" x2="268" y2="${y + 16}" stroke="var(--rule)" stroke-width="6" stroke-linecap="round"/>` +
      (i === 0 ? `<circle r="7" fill="#2f6db5"><animateMotion dur="1.8s" repeatCount="indefinite" path="M100 ${y + 16} H260"/></circle>` :
       i === 1 ? `<circle r="7" fill="#c69214"><animateMotion dur="3.6s" repeatCount="indefinite" keyPoints="0;1;1;0;0" keyTimes="0;.4;.5;.9;1" calcMode="linear" path="M100 ${y + 16} H260"/></circle>` :
       `<circle r="7" fill="#2f8f4e"><animateMotion dur="1.8s" repeatCount="indefinite" path="M100 ${y + 11} H260"/></circle><circle r="7" fill="#c0503a"><animateMotion dur="1.8s" repeatCount="indefinite" path="M260 ${y + 21} H100"/></circle>`) +
      lq(T(360, y + 10, r[0], "var(--ink)", "start", 14), r[0]) + `<text x="360" y="${y + 28}" font-size="11" class="mut">${ex.slice(0, 44)}</text>`; }).join("")}</svg>`;
place("C14", "Transmission modes", KIT.fig("Which way data flows", TMF, "Simplex: one way only (keyboard → computer, TV broadcast). Half duplex: both ways, but one at a time (walkie-talkie). Full duplex: both ways at once (a phone call)."));

// C14 — cables in cross-section
const CBF = `<svg class="dg" viewBox="0 0 660 230" role="img" aria-label="Cross-sections of twisted pair, coaxial and optical fibre cables">
  <g transform="translate(110 100)">${[0, 1, 2, 3].map(k => { const a = k * Math.PI / 2 + .6; return `<circle cx="${f1(28 * Math.cos(a))}" cy="${f1(28 * Math.sin(a))}" r="14" fill="hsl(${k * 90},60%,50%)"/><circle cx="${f1(28 * Math.cos(a) + 6)}" cy="${f1(28 * Math.sin(a) + 4)}" r="5" fill="#d4a017"/>`; }).join("")}
    <circle r="56" fill="none" stroke="var(--ink2)" stroke-width="4"/></g>
  <g transform="translate(330 100)"><circle r="56" fill="#444"/><circle r="44" fill="#b0b0b0"/><circle r="34" fill="var(--sheet)"/><circle r="10" fill="#d4a017"/></g>
  <g transform="translate(550 100)"><circle r="56" fill="#ff9f1c" opacity=".9"/><circle r="30" fill="hsla(195,80%,70%,.6)"/><circle r="12" fill="#e8fbff"/><circle class="fbr" r="12" fill="#fff"/></g>
  ${lq(T(110, 186, "Twisted pair", "var(--ink)", "middle", 13), "Twisted pair")}${lq(T(330, 186, "Coaxial", "var(--ink)", "middle", 13), "Coaxial")}${lq(T(550, 186, "Optical fibre", "var(--ink)", "middle", 13), "Optical fibre")}
  <text x="110" y="204" text-anchor="middle" font-size="10.5" class="mut">LAN / Ethernet · RJ45</text><text x="330" y="204" text-anchor="middle" font-size="10.5" class="mut">cable TV · copper core + shield</text><text x="550" y="204" text-anchor="middle" font-size="10.5" class="mut">light in a glass core · fastest</text>
  <style>.fbr{animation:fbr 1.2s ease-in-out infinite}@keyframes fbr{0%,100%{opacity:.1}50%{opacity:1}}${RM}.fbr{animation:none}}</style></svg>`;
place("C14", "Transmission media", KIT.fig("Inside the cables", CBF, "Twisted pair: pairs of copper wires twisted to cut interference (LAN cable, RJ45 plug). Coaxial: one copper core inside a metal shield. Optical fibre: pulses of light through a thin glass core — the fastest and longest-reaching wired medium."));

// C15 — TCP shakes hands, UDP just sends
const TUF = `<svg class="dg" viewBox="0 0 660 330" role="img" aria-label="TCP three-way handshake and UDP sending without one"><g transform="translate(0 34)">
  <defs>${M("tu", "var(--ink2)")}</defs>
  ${["TCP", "UDP"].map((p, k) => { const x0 = 20 + k * 330; return `<rect x="${x0}" y="10" width="300" height="270" rx="12" fill="var(--sheet)" stroke="var(--rule)"/>` + T(x0 + 150, 32, p, k ? "#c69214" : "#2f6db5", "middle", 15) +
    `<line x1="${x0 + 50}" y1="45" x2="${x0 + 50}" y2="265" stroke="var(--ink2)" stroke-width="3"/><line x1="${x0 + 250}" y1="45" x2="${x0 + 250}" y2="265" stroke="var(--ink2)" stroke-width="3"/>` +
    T(x0 + 50, 278, "client", "var(--ink2)", "middle", 10.5) + T(x0 + 250, 278, "server", "var(--ink2)", "middle", 10.5); }).join("")}
  ${[["SYN", 60, 1], ["SYN-ACK", 100, -1], ["ACK", 140, 1], ["data", 185, 1], ["ack", 215, -1], ["data", 245, 1]].map(([t, y, d]) => `<path d="M${d > 0 ? 72 : 268} ${y} L${d > 0 ? 268 : 72} ${y + 22}" stroke="${y < 160 ? "#2f6db5" : "var(--ink2)"}" stroke-width="2" marker-end="url(#tu)"/>` + T(170, y + 6, t, y < 160 ? "#2f6db5" : "var(--ink2)", "middle", 11)).join("")}
  ${[60, 100, 140, 180, 220].map(y => `<path d="M402 ${y} L598 ${y + 22}" stroke="#c69214" stroke-width="2" marker-end="url(#tu)"/>` + T(500, y + 6, "data", "#c69214", "middle", 11)).join("")}
  ${T(170, 168, "connection made", "var(--good)", "middle", 10.5)}${T(500, 250, "no handshake, no resending", "var(--ink2)", "middle", 10.5)}</g></svg>`;
place("C15", "TCP vs UDP", KIT.fig("TCP shakes hands, UDP just sends", TUF, "TCP sets up a connection with a three-way handshake (SYN, SYN-ACK, ACK), numbers the packets and resends lost ones — web pages, e-mail. UDP fires packets without checking — live video, games, DNS lookups."));

// C15 — the port numbers as door plates
const PP = rows("C15", "Main protocols").filter(r => /\d/.test(r[3]));
place("C15", "Main protocols", { k: "info", title: "Protocols and their port numbers", html: `<div class="fam">${PP.map(r => `<div style="border-top:5px solid hsl(${(r[3].match(/\d+/)[0] * 7) % 360},55%,45%)"><b>${r[0]} · port ${r[3]}</b><small>${r[2]}</small></div>`).join("")}</div>`,
  cap: "Ports are numbered doors on a computer: 80 for web pages (HTTP), 443 for secure pages (HTTPS), 25 to send mail (SMTP), 110 and 143 to receive it (POP3, IMAP), 53 for DNS." });

// C16 — malware as cards; a phishing mail taken apart
place("C16", "Types of malware", { k: "cards", title: "Know the malware", rows: rows("C16", "Types of malware").map((r, i) => [r[0], r[2], r[1].split(/;|\(/)[0], ["🦠", "🪱", "🐴", "🔐", "🕵️", "📢", "⌨️", "🕳️", "🤖"][i]]) });
const PH = `<svg class="dg" viewBox="0 0 680 370" role="img" aria-label="A phishing e-mail with its warning signs marked"><g transform="translate(0 40)">
  <rect x="20" y="14" width="400" height="300" rx="12" fill="var(--sheet)" stroke="var(--rule)" stroke-width="2"/>
  <rect x="20" y="14" width="400" height="34" rx="12" fill="var(--sunk)"/>
  <text x="36" y="36" font-size="12" font-weight="700">From: SBI Support &lt;alerts@sbi-kyc-update.co&gt;</text>
  <text x="36" y="70" font-size="13" font-weight="800" style="fill:#c0392b">URGENT: Your account will be BLOCKED today!</text>
  <text x="36" y="100" font-size="12">Dear Customer,</text>
  <text x="36" y="124" font-size="12">Your KYC is expierd. Update within 2 hours</text>
  <text x="36" y="142" font-size="12">or your account will be closed.</text>
  <rect x="36" y="160" width="200" height="34" rx="8" fill="#2f6db5"/><text x="136" y="182" text-anchor="middle" font-size="12" font-weight="700" style="fill:#fff">Click here to verify</text>
  <text x="36" y="222" font-size="12">Enter your card number, PIN and OTP</text><text x="36" y="240" font-size="12">on the next page to continue.</text>
  <text x="36" y="290" font-size="10.5" class="mut">link goes to: http://sbi-kyc-update.co/login</text>
  ${[["Look-alike sender address", 34, 392], ["Panic and a deadline", 68, 412], ["Greeting with no name", 100, 128], ["Spelling mistakes", 122, 350], ["Link to a fake site", 178, 242], ["Asks for PIN / OTP", 222, 312], ["No https, odd domain", 288, 322]].map(([t, y, x]) =>
    `<line x1="${x}" y1="${y - 4}" x2="440" y2="${y - 4}" stroke="#c0392b" stroke-dasharray="3 3"/><circle cx="${x}" cy="${y - 4}" r="4" fill="#c0392b"/>` + lq(T(446, y, t, "#c0392b", "start", 12), t)).join("")}</g></svg>`;
place("C16", "Common attacks", KIT.fig("Spot the phishing mail", PH, "No bank asks for your PIN, OTP or password by e-mail, SMS or phone. Check the sender's real address and the link (hover before you click); report fraud at cybercrime.gov.in or on 1930.", 560));

// C22 — the IT Act sections on a number line
const SEC = rows("C22", "Sections you must know").map(r => [r[0], parseInt(r[0], 10), r[1].split(/[:(;]/)[0].replace(/^A company failing to protect sensitive personal data$/, "Company fails to protect data").slice(0, 38)]).filter(r => r[1]);
const sx2 = n => 40 + (n - 42) / (80 - 42) * 600;
const SL = `<svg class="dg" viewBox="0 0 680 ${105 + SEC.length * 21}" role="img" aria-label="Sections of the IT Act on a number line"><g transform="translate(0 35)">
  <line x1="40" y1="30" x2="640" y2="30" stroke="var(--ink)" stroke-width="2"/>${[45, 50, 55, 60, 65, 70, 75, 80].map(n => `<line x1="${f1(sx2(n))}" y1="25" x2="${f1(sx2(n))}" y2="35" stroke="var(--ink)"/>` + T(f1(sx2(n)), 18, n, "var(--ink2)", "middle", 10)).join("")}
  ${SEC.map(([s, n, t], i) => { const x = sx2(n), y = 52 + i * 21, right = x < 400, c = /66F/.test(s) ? "#c0392b" : /66A/.test(s) ? "#888" : "hsl(" + (i * 23) + ",55%,40%)";
    return `<line x1="${f1(x)}" y1="30" x2="${f1(x)}" y2="${y - 4}" stroke="${c}" stroke-opacity=".55"/><circle cx="${f1(x)}" cy="30" r="3.5" fill="${c}"/>` +
      `<text x="${f1(x + (right ? 6 : -6))}" y="${y}" text-anchor="${right ? "start" : "end"}" font-size="11" font-weight="700" style="fill:${c}${/66A/.test(s) ? ";text-decoration:line-through" : ""}">${s} · ${t}</text>`; }).join("")}</g></svg>`;
place("C22", "Sections you must know", KIT.fig("The IT Act, 2000 on one line", SL, "Section 66 is hacking; 66C identity theft; 66D cheating by personation (phishing, fake profiles); 66E privacy; 66F cyber terrorism (up to life). 66A was struck down by the Supreme Court in 2015 (Shreya Singhal case).", 560));

// C17 — AI inside ML inside deep learning inside generative AI
const AIF = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="Generative AI inside deep learning inside machine learning inside artificial intelligence">
  ${[["Artificial Intelligence", 300, 135, "hsla(212,60%,55%,.18)", "face unlock, voice assistants"], ["Machine Learning", 230, 105, "hsla(135,50%,45%,.22)", "spam filters, recommendations"], ["Deep Learning", 160, 75, "hsla(42,90%,50%,.28)", "image and speech recognition"], ["Generative AI", 92, 45, "hsla(20,85%,55%,.4)", "ChatGPT, image makers"]].map(([n, rx, ry, c, ex], i) =>
    `<ellipse cx="330" cy="${150 + i * 14}" rx="${rx}" ry="${ry}" fill="${c}" stroke="var(--rule)"/>` + lq(T(330, 150 + i * 14 - ry + 22, n, "var(--ink)", "middle", 13.5), n) + `<text x="330" y="${150 + i * 14 - ry + 38}" text-anchor="middle" font-size="10.5" class="mut">${ex}</text>`).join("")}</svg>`;
place("C17", "New technologies", KIT.fig("AI, ML, deep learning, generative AI", AIF, "Each is a part of the one outside it: machine learning is AI that learns from data; deep learning is machine learning with many-layered neural networks; generative AI uses them to create new text, images and code."));

VISUAL = { mode: true, VIS: { key: "computer_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };

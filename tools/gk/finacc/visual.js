/* Finance & Accounts — the accounting cycle, the three golden rules with the accounting equation, which book a transaction
   goes to, the bank reconciliation bridge, errors that do and don't upset the trial balance, SLM against WDV, the parties to a
   bill and a note, and how the final accounts feed each other (drawn by study-visual.js).
   place(), rows(), fail and KIT come from applyVisual. */
const T = (x, y, t, c, a, s) => `<text x="${x}" y="${y}" font-size="${s || 12}" font-weight="700" text-anchor="${a || "start"}" style="fill:${c || "var(--ink)"}">${t}</text>`;
const mut = (x, y, t, a, sz) => `<text x="${x}" y="${y}" font-size="${sz || 11}" text-anchor="${a || "start"}" class="mut">${t}</text>`;
const W = (x, y, t, s) => `<text x="${x}" y="${y}" font-size="${s || 10.5}" text-anchor="middle" style="fill:#fff;opacity:.95">${t}</text>`;
const box = (x, y, w, h, c, t, lines, fs) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${c}"/>${T(x + w / 2, y + ((lines || []).length ? 20 : h / 2 + 5), t, "#fff", "middle", fs || 13)}${(lines || []).map((l, i) => W(x + w / 2, y + 37 + i * 14, l)).join("")}`;
const ARW = `<defs><marker id="faA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="context-stroke"/></marker></defs>`;
const arr = (d, c) => `<path d="${d}" fill="none" stroke="${c || "var(--ink2)"}" stroke-width="2" marker-end="url(#faA)"/>`;
const curve = (d, c, w, dash) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w || 3}" stroke-linecap="round"${dash ? ' stroke-dasharray="5 4"' : ""}/>`;
const BLU = "#2f6db5", RED = "#c0392b", GRN = "#2f8f4e", GLD = "#a8780a", PUR = "#7d4fb5", GRY = "#5b6470";
const need = (L, t, re) => { if (!rows(L, t).some(r => re.test(r.join(" | ")))) fail(`finacc ${L} "${t}": the lesson no longer says ${re}`); };

// F2 — golden rules + the equation; the accounting cycle
need("F2", "The golden rules", /Real.*What comes in.*What goes out/); need("F2", "The golden rules", /Personal.*The receiver.*The giver/); need("F2", "The golden rules", /Nominal.*expenses and losses.*incomes and gains/);
const GR = `<svg class="dg" viewBox="0 0 640 286" role="img" aria-label="The three golden rules and the accounting equation">
  ${[["Personal", "people, firms, banks", "the receiver", "the giver", BLU], ["Real", "assets: cash, stock, machinery", "what comes in", "what goes out", GRN], ["Nominal", "expenses, losses, incomes, gains", "expenses &amp; losses", "incomes &amp; gains", PUR]].map((r, i) => { const x = 10 + i * 210;
    return `${box(x, 8, 200, 44, r[4], r[0] + " account", [r[1]])}<rect x="${x}" y="58" width="98" height="52" rx="8" class="bbg"/><rect x="${x + 102}" y="58" width="98" height="52" rx="8" class="abg"/>${T(x + 49, 78, "DEBIT", "var(--ink)", "middle", 11)}${T(x + 151, 78, "CREDIT", "var(--ink)", "middle", 11)}${mut(x + 49, 97, r[2], "middle", 11)}${mut(x + 151, 97, r[3], "middle", 11)}`; }).join("")}
  ${T(320, 146, "Assets  =  Liabilities  +  Capital", "var(--ink)", "middle", 17)}
  <rect x="10" y="162" width="305" height="112" rx="10" class="bbg"/><rect x="325" y="162" width="305" height="112" rx="10" class="abg"/>
  ${T(162, 184, "A DEBIT increases", BLU, "middle", 13)}${["Drawings", "Expenses", "Assets", "Losses"].map((t, i) => T(60 + (i % 2) * 150, 210 + Math.floor(i / 2) * 26, `<tspan style="fill:${RED}">${t[0]}</tspan>${t.slice(1)}`, "var(--ink)", "start", 14)).join("")}
  ${T(477, 184, "A CREDIT increases", GLD, "middle", 13)}${["Liabilities", "Equity (capital)", "Revenue &amp; gains"].map((t, i) => T(345 + (i % 2) * 140, 210 + Math.floor(i / 2) * 26, `<tspan style="fill:${RED}">${t[0]}</tspan>${t.slice(1)}`, "var(--ink)", "start", 14)).join("")}
  ${mut(162, 266, "the other side decreases them", "middle", 10.5)}${mut(477, 266, "remember: DEAL · ER", "middle", 10.5)}</svg>`;
place("F2", "The modern", KIT.fig("The golden rules and the equation, in one picture", GR, "Find the type of account first, then apply its rule. The modern rules say the same thing: debit increases Drawings, Expenses, Assets and Losses (DEAL); credit increases Liabilities, Equity and Revenue."));
const CY = ["Transaction", "Journal", "Ledger", "Trial balance", "Final accounts"], CYS = ["voucher = proof", "date-wise record", "account-wise", "checks the totals", "Trading, P&amp;L, B/S"];
const CYC = `<svg class="dg" viewBox="0 0 640 96" role="img" aria-label="The accounting cycle">${ARW}
  ${CY.map((t, i) => box(4 + i * 128, 10, 116, 46, [GRY, BLU, GRN, GLD, RED][i], t, [], 12) + (i < 4 ? arr(`M${121 + i * 128} 33 H${130 + i * 128}`) : "") + mut(62 + i * 128, 74, CYS[i], "middle", 10)).join("")}
  ${mut(320, 92, "Journal = book of original (prime) entry.  Ledger = principal book.  Trial balance = a statement, not an account.", "middle", 10.5)}</svg>`;
place("F2", "Ledger and trial balance", KIT.fig("From a transaction to the final accounts", CYC, "Recording → classifying → summarising. The trial balance only proves that total debits equal total credits; it can still hide errors."));

// F3 — which book
const BK = [["Purchases book", "goods bought on credit", BLU], ["Sales book", "goods sold on credit", GRN], ["Purchases returns", "returns outward · debit note", BLU], ["Sales returns", "returns inward · credit note", GRN],
  ["Bills receivable / payable", "bills received or accepted", PUR], ["Cash book", "every cash and bank item", GLD], ["Petty cash book", "small expenses · imprest", GLD], ["Journal proper", "all else: assets on credit, opening, adjusting, rectifying", RED]];
const BKS = `<svg class="dg" viewBox="0 0 640 262" role="img" aria-label="The subsidiary books and what goes into each">
  ${box(220, 6, 200, 34, GRY, "Is it cash or bank?", [], 13)}${T(210, 28, "yes →", GLD, "end", 12)}${T(430, 28, "← no: is it goods on credit?", "var(--ink2)", "start", 12)}
  ${BK.map((r, i) => { const x = 10 + (i % 2) * 315, y = 52 + Math.floor(i / 2) * 52; return `<rect x="${x}" y="${y}" width="305" height="44" rx="9" class="card"/><rect x="${x}" y="${y}" width="8" height="44" rx="4" fill="${r[2]}"/>${T(x + 18, y + 19, r[0], r[2], "start", 12.5)}${mut(x + 18, y + 35, r[1], "start", 10.5)}`; }).join("")}</svg>`;
place("F3", "Transaction", KIT.fig("Eight books of original entry", BKS, "The purchases and sales books take only credit dealings in goods. An asset bought on credit, or anything with no special book, goes to the journal proper. The cash book is both a journal and a ledger."));

// F4 — the reconciliation bridge
need("F4", "Starting from", /issued but not yet presented.*\| Add/); need("F4", "Starting from", /deposited but not yet collected.*\| Less/);
const BR = `<svg class="dg" viewBox="0 0 640 250" role="img" aria-label="From the cash book balance to the pass book balance">${ARW}
  ${box(10, 90, 150, 60, BLU, "Cash book", ["debit balance", "(our record)"])}${box(480, 90, 150, 60, GRN, "Pass book", ["credit balance", "(the bank's record)"])}
  ${arr("M164 108 C250 60,390 60,476 108", GRN)}${arr("M164 132 C250 182,390 182,476 132", RED)}
  <rect x="190" y="8" width="260" height="72" rx="10" class="gbg"/>${T(320, 26, "ADD: the bank shows more", GRN, "middle", 12)}${["cheques issued, not yet presented", "direct deposits by customers", "interest and dividends credited"].map((t, i) => mut(320, 42 + i * 13, t, "middle", 10.5)).join("")}
  <rect x="190" y="166" width="260" height="76" rx="10" class="abg"/>${T(320, 184, "LESS: the bank shows less", RED, "middle", 12)}${["cheques deposited, not yet collected", "bank charges, interest on overdraft", "payments on standing instructions", "a deposited cheque dishonoured"].map((t, i) => mut(320, 199 + i * 13, t, "middle", 10.5)).join("")}</svg>`;
place("F4", "Starting from", KIT.fig("The reconciliation bridge", BR, "Start from the cash book's debit balance. Start from the pass book instead, or from an overdraft, and every add becomes a less. A debit balance in the cash book is a credit balance in the pass book."));

// F5 — which errors the trial balance catches
const ERA = rows("F5", "Does it").filter(r => /^Affects/.test(r[1])).map(r => r[0]), ERN = rows("F5", "Does it").filter(r => /^Does not/.test(r[1])).map(r => r[0]);
if (ERA.length < 3 || ERN.length < 3) fail("finacc F5: the error table changed");
const short = t => t.replace(/^Posting /, "posting ").replace(/^Wrong /, "wrong ").replace(/^Omitting /, "omitting ").replace(/^An /, "an ").replace(/^Two /, "two ").replace(/^Entering /, "entering ").replace(" of a ledger account", "").replace(" of a journal entry", " of an entry").replace(" in the book of original entry", " in the first book").replace(" in one ledger account only", " in one account").replace(" on the correct side", "");
const ERR = `<svg class="dg" viewBox="0 0 640 ${70 + Math.max(ERA.length, ERN.length) * 22}" role="img" aria-label="Errors that affect the trial balance and errors that do not">
  ${box(10, 8, 305, 40, RED, "The trial balance will NOT agree", ["one-sided errors"])}${box(325, 8, 305, 40, GRN, "The trial balance still agrees", ["two-sided errors: both totals wrong together"])}
  ${ERA.map((t, i) => mut(22, 70 + i * 22, "• " + short(t), "start", 11.5)).join("")}${ERN.map((t, i) => mut(337, 70 + i * 22, "• " + short(t), "start", 11.5)).join("")}</svg>`;
place("F5", "Does it affect", KIT.fig("Which errors the trial balance catches", ERR, "Errors of omission, commission (right side, wrong account), principle and compensating errors pass through an agreed trial balance. A one-sided error is parked in the suspense account."));

// F6 — SLM against WDV
const DEP = `<svg class="dg" viewBox="0 0 640 260" role="img" aria-label="Book value under the straight line and written down value methods">
  <path d="M60 20 V220 H360" fill="none" stroke="var(--ink)" stroke-width="1.6"/>${mut(360, 236, "Years →", "end")}${mut(66, 28, "Book value")}
  ${curve("M60 40 L340 204", BLU)}${curve("M60 40 Q120 170 340 190", RED)}<path d="M60 204 H360" stroke="var(--ink2)" stroke-dasharray="4 4"/>${mut(356, 216, "scrap value", "end", 10)}
  ${T(214, 112, "SLM", BLU, "start", 13)}${T(104, 150, "WDV", RED, "end", 13)}${mut(60, 236, "cost", "middle", 10)}
  ${T(400, 46, "SLM: a straight line", BLU, "start", 14)}${mut(400, 64, "same charge every year, on original cost")}${mut(400, 80, "= (cost − scrap) ÷ useful life")}${mut(400, 96, "book value can reach zero")}
  ${T(400, 136, "WDV: a falling curve", RED, "start", 14)}${mut(400, 154, "fixed % on the opening book value")}${mut(400, 170, "big charge first, smaller later")}${mut(400, 186, "book value never reaches zero")}
  ${mut(400, 222, "Income-tax Act: WDV, on blocks of assets")}</svg>`;
place("F6", "SLM and WDV", KIT.fig("SLM and WDV on one graph", DEP, "Straight line: equal steps down. Written down value: steep at first, then flatter, so heavy depreciation in the early years balances the light repairs."));

// F7 — the parties
const BE = `<svg class="dg" viewBox="0 0 640 220" role="img" aria-label="Parties to a bill of exchange and to a promissory note">${ARW}
  ${T(160, 20, "Bill of exchange: 3 parties", "var(--ink)", "middle", 13)}${box(10, 34, 130, 58, BLU, "Drawer", ["seller / creditor", "writes the bill"])}${box(180, 34, 130, 58, RED, "Drawee", ["buyer / debtor", "accepts it"])}${box(95, 132, 130, 58, GRN, "Payee", ["gets the money", "(often the drawer)"])}
  ${arr("M142 62 H176", BLU)}${mut(160, 30, "", "middle", 10)}${arr("M244 94 L200 128", RED)}${mut(248, 116, "pays on the due date", "start", 10)}
  ${mut(160, 208, "an unconditional ORDER to pay; needs acceptance", "middle", 10.5)}
  <path d="M330 10 V210" stroke="var(--rule)"/>
  ${T(490, 20, "Promissory note: 2 parties", "var(--ink)", "middle", 13)}${box(350, 34, 130, 58, RED, "Maker", ["debtor", "writes and signs"])}${box(500, 34, 130, 58, GRN, "Payee", ["creditor", "gets the money"])}${arr("M482 62 H496", RED)}
  ${mut(490, 112, "an unconditional PROMISE to pay;", "middle", 10.5)}${mut(490, 127, "no acceptance needed", "middle", 10.5)}
  ${T(490, 160, "Days of grace: 3", GLD, "middle", 13)}${mut(490, 178, "added to the due date, except for bills", "middle", 10.5)}${mut(490, 193, "payable on demand", "middle", 10.5)}</svg>`;
place("F7", "Bill of exchange and promissory", KIT.fig("Who is who on a bill and a note", BE, "A bill is drawn by the creditor and accepted by the debtor; a note is written by the debtor himself. For the drawer it is a bill receivable; for the drawee, a bill payable."));

// F8 — how the final accounts feed each other
const tac = (x, title, c, dr, cr, out, bs) => `<rect x="${x}" y="24" width="196" height="150" rx="10" class="card"/>${T(x + 98, 44, title, c, "middle", 13)}<path d="M${x + 8} 52 H${x + 188} M${x + 98} 52 V166" stroke="var(--ink2)" stroke-width="1.4"/>
  ${bs ? "" : mut(x + 12, 66, "Dr", "start", 9.5) + mut(x + 184, 66, "Cr", "end", 9.5)}${dr.map((t, i) => mut(x + 12, 82 + i * 15, t, "start", 10.5)).join("")}${cr.map((t, i) => mut(x + 104, 82 + i * 15, t, "start", 10.5)).join("")}${T(x + 12, 160, out, c, "start", 11)}`;
const FA = `<svg class="dg" viewBox="0 0 640 236" role="img" aria-label="Trading account, profit and loss account and balance sheet">${ARW}
  ${tac(8, "Trading A/c", BLU, ["Opening stock", "Purchases", "Wages", "Carriage in"], ["Sales", "Closing stock"], "→ Gross profit")}
  ${tac(222, "Profit &amp; Loss A/c", GRN, ["Salaries, rent", "Carriage out", "Bad debts", "Depreciation"], ["Gross profit", "Discount recd.", "Rent received"], "→ Net profit")}
  ${tac(436, "Balance sheet", RED, ["Capital", "+ Net profit", "− Drawings", "Creditors, loans"], ["Fixed assets", "Debtors", "Closing stock", "Cash, bank"], "", true)}
  ${mut(448, 66, "Liabilities", "start", 9.5)}${mut(620, 66, "Assets", "end", 9.5)}
  ${arr("M110 176 V200 H330 V178", BLU)}${arr("M340 176 V214 H500 V178", GRN)}
  ${mut(110, 228, "direct expenses here", "middle", 10)}${mut(330, 228, "indirect expenses here", "middle", 10)}${mut(540, 228, "a statement on a date, not an account", "middle", 10)}</svg>`;
place("F8", "Item", KIT.fig("How the three final accounts feed each other", FA, "Gross profit goes from the Trading account to the credit of the P&L account; net profit is added to capital in the balance sheet. Carriage inwards is a direct expense; carriage outwards is indirect."));

VISUAL = { mode: true, VIS: { key: "finacc_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };

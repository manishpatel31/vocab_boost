/* F12 single entry, incomplete records and non-profit organisations; F13 self-balancing and sectional balancing ledgers. */
const FA_NPO = [
  ["Life membership fees","Capital receipt","Added to the capital fund (or a separate fund)."],
  ["Legacy received under a will","Capital receipt",""],
  ["Donation for a specific purpose (e.g. a building fund)","Capital receipt","Credited to that fund."],
  ["Endowment fund receipts","Capital receipt",""],
  ["Government grant to build a hall","Capital receipt",""],
  ["Sale of old furniture","Capital receipt","Only the profit or loss on sale goes to the I&amp;E account."],
  ["Annual subscriptions","Revenue receipt","The main income of most clubs."],
  ["Entrance (admission) fees","Revenue receipt","Usually treated as revenue unless the club's policy capitalises them."],
  ["Small general donations","Revenue receipt",""],
  ["Sale of old newspapers","Revenue receipt",""],
  ["Interest on investments","Revenue receipt",""],
  ["Locker rent from members","Revenue receipt",""]
];
const FA_SBL = [
  ["Credit sales","Debit",""],
  ["Bills receivable dishonoured","Debit",""],
  ["A debtor's cheque dishonoured","Debit",""],
  ["Interest charged to customers on overdue accounts","Debit",""],
  ["Cash and cheques received from debtors","Credit",""],
  ["Discount allowed","Credit",""],
  ["Sales returns","Credit",""],
  ["Bad debts written off","Credit",""],
  ["Bills receivable received","Credit",""],
  ["Transfer to the creditors' ledger (set-off)","Credit","When the same party is a debtor and a creditor."],
  ["Cash sales","Not recorded","Never touches a debtor's account."],
  ["Provision for doubtful debts","Not recorded","It is kept in the general ledger."],
  ["Trade discount","Not recorded","Never enters the books."],
  ["Bad debts recovered (written off earlier)","Not recorded","Credited to Bad debts recovered A/c, not to the debtor."]
];

LESSONS.push(
{id:"F12", heat:3, title:"Single entry, incomplete records and non-profit organisations", hi:"एकल प्रविष्टि, अपूर्ण अभिलेख और अलाभकारी संस्थाएँ", blocks:[
  {k:"hot", h:"Most asked: the <b>statement of affairs</b> and profit from <b>capital comparison</b>, finding <b>credit sales or purchases</b> from total accounts, <b>stock lost by fire</b> using the gross profit ratio, <b>Receipts &amp; Payments vs Income &amp; Expenditure</b>, and the <b>subscription</b> sum."},
  {k:"story", h:"<p>Many small shopkeepers keep only a cash book and a register of who owes them and whom they owe. This is called the <b>single entry system</b> — really an incomplete double entry, with no real or nominal accounts. A trial balance cannot be drawn up, so profit is found by comparing capital at two dates: a <b>statement of affairs</b> (a balance sheet built from whatever records exist) is drawn up at the start and at the end.</p><p><b>Non-profit organisations</b> — clubs, schools, hospitals, charities — do not trade for profit. Their treasurer keeps a cash book and summarises it as a <b>Receipts and Payments account</b>. The accountant then prepares an <b>Income and Expenditure account</b> on the accrual basis, which gives a <b>surplus</b> or <b>deficit</b>, and a balance sheet showing the <b>capital fund</b>.</p>", key:"Profit = closing capital − opening capital + drawings − fresh capital."},
  {k:"facts", title:"Single entry: rules", rows:[
    ["Kept","Cash book and personal accounts (debtors, creditors)"],
    ["Not kept","Real and nominal accounts; so no trial balance"],
    ["Statement of affairs","Capital = assets − liabilities on a date (like a balance sheet, but from incomplete data)"],
    ["Profit (capital comparison)","Closing capital − opening capital + drawings − additional capital"],
    ["Credit sales","Closing debtors + cash received + discount allowed + bad debts + returns − opening debtors"],
    ["Credit purchases","Closing creditors + cash paid + discount received + returns − opening creditors"],
    ["Conversion method","Missing figures are worked out and full final accounts drawn up"]]},
  {k:"table", title:"Gross profit: on cost or on sales?", head:["On cost","On sales","Note"], rows:[
    ["25%","20%","25 ÷ 125"],["20%","1/6 (16.67%)","20 ÷ 120"],["33⅓%","25%","(1/3) ÷ (4/3)"],["50%","33⅓%","50 ÷ 150"],["100%","50%","100 ÷ 200"]]},
  {k:"table", title:"NPO items: capital or revenue?", head:["Item","Treatment","Note"], rows: FA_NPO},
  {k:"table", title:"Receipts and Payments vs Income and Expenditure", head:["Point","Receipts and Payments account","Income and Expenditure account"], rows:[
    ["Nature","Real account — a summary of the cash book","Nominal account — like a P&amp;L account"],
    ["Basis","Cash","Accrual"],
    ["Items","Capital and revenue, of any year","Revenue items of the current year only"],
    ["Opening balance","Cash and bank in hand","None"],
    ["Closing balance","Cash and bank at the end","Surplus (income over expenditure) or deficit"],
    ["Sides","Receipts on the debit side, payments on the credit side","Expenditure on the debit side, income on the credit side"],
    ["Non-cash items","Not shown (no depreciation)","Shown (depreciation, outstanding items)"]]},
  {k:"ex", h:"<p><b>Worked example — capital comparison.</b> Capital on 1 April ₹1,50,000; on 31 March ₹1,90,000. Drawings ₹24,000; fresh capital brought in ₹10,000.</p><p>Profit = 1,90,000 − 1,50,000 + 24,000 − 10,000 = <b>₹54,000</b>. Drawings are added back because they took profit out; fresh capital is deducted because it is not profit.</p>"},
  {k:"ex", h:"<p><b>Worked example — missing credit sales.</b> Debtors on 1 April ₹30,000; on 31 March ₹40,000. Cash received from debtors ₹1,20,000; discount allowed ₹2,000; bad debts ₹1,000; sales returns ₹3,000.</p><p>Credit sales = 40,000 + 1,20,000 + 2,000 + 1,000 + 3,000 − 30,000 = <b>₹1,36,000</b> (the balancing figure of a total debtors account).</p>"},
  {k:"ex", h:"<p><b>Worked example — stock lost by fire.</b> Opening stock ₹40,000; purchases to the date of fire ₹1,60,000; sales to that date ₹2,00,000; gross profit 25% on sales; stock salvaged ₹5,000.</p><p>Cost of goods sold = 75% of 2,00,000 = 1,50,000. Stock on the date of the fire = 40,000 + 1,60,000 − 1,50,000 = 50,000. Loss of stock = 50,000 − 5,000 = <b>₹45,000</b>.</p>"},
  {k:"ex", h:"<p><b>Worked example — subscriptions.</b> Received during 2025-26: ₹50,000, including ₹3,000 for 2024-25 and ₹2,000 for 2026-27. Still due for 2025-26: ₹4,000.</p><p>Income for 2025-26 = 50,000 − 3,000 − 2,000 + 4,000 = <b>₹49,000</b>. The ₹4,000 is an asset; the ₹2,000 received in advance is a liability.</p><p><i>Capital fund at the start:</i> cash 10,000 + furniture 40,000 + subscriptions due 3,000 − salaries due 2,000 = <b>₹51,000</b>.</p>"},
  {k:"trick", h:"<b>R&amp;P = Real and Cash; I&amp;E = Income and Accrual.</b> If it is a lump sum that will never come again (legacy, life membership, specific donation), <b>capitalise</b> it; if it comes every year (subscriptions, interest, small donations), it is <b>revenue</b>."},
  {k:"trap", h:"A <b>statement of affairs</b> is not a balance sheet — it is built from incomplete records and the capital is the balancing figure. In an NPO, the <b>sale of an old asset</b> is a capital receipt; only the <b>profit or loss</b> on it goes to the I&amp;E account. A surplus of an NPO is added to the <b>capital fund</b>, not distributed."}
], sum:["Single entry keeps a cash book and personal accounts only; profit is found by comparing capital.","Profit = closing capital − opening capital + drawings − additional capital.","Credit sales and purchases are the balancing figures of total debtors and total creditors accounts.","25% on cost = 20% on sales; 33⅓% on cost = 25% on sales.","Receipts and Payments: real account, cash basis, all receipts and payments; closes with cash in hand.","Income and Expenditure: nominal account, accrual basis, revenue items of the year; gives a surplus or deficit.","Life membership, legacies, specific donations and endowments are capital receipts; subscriptions and entrance fees are revenue.","Capital fund = assets − liabilities of the NPO."]},

{id:"F13", heat:2, title:"Self-balancing and sectional balancing ledgers", hi:"स्व-संतुलन और विभागीय संतुलन खाता-बही", blocks:[
  {k:"hot", h:"Most asked: the <b>purpose</b> of self-balancing ledgers (locating errors), the names of the <b>adjustment accounts</b>, which items go to the <b>debtors' ledger adjustment account</b> and which do not (cash sales, provisions), and a short <b>closing balance</b> numerical."},
  {k:"story", h:"<p>In a large firm the ledger is too big for one clerk, so it is split into three: the <b>general ledger</b> (real, nominal and capital accounts), the <b>debtors' (sales) ledger</b> and the <b>creditors' (bought) ledger</b>. If one big trial balance fails to agree, nobody knows which section holds the error.</p><p>Under the <b>self-balancing system</b>, each ledger gets an extra account that sums up the other side. The debtors' ledger holds a <b>General Ledger Adjustment account</b>; the general ledger holds a <b>Debtors' Ledger Adjustment account</b> (and the same for creditors). Now each ledger can produce its own trial balance, and an error is traced to one ledger only. Under <b>sectional balancing</b>, only total debtors and total creditors accounts are drawn up, as memorandum accounts, to check those two ledgers.</p>", key:"Each ledger carries a mirror of the others, so each balances by itself."},
  {k:"table", title:"Which side of the Debtors' Ledger Adjustment account (in the general ledger)?", head:["Item","Side","Note"], rows: FA_SBL},
  {k:"table", title:"The adjustment accounts", head:["Ledger","Account opened in it","Mirrors"], rows:[
    ["General ledger","Debtors' Ledger Adjustment A/c and Creditors' Ledger Adjustment A/c","The totals of the two personal ledgers"],
    ["Debtors' (sales) ledger","General Ledger Adjustment A/c","Shows the opposite side of everything posted to debtors"],
    ["Creditors' (bought) ledger","General Ledger Adjustment A/c","Shows the opposite side of everything posted to creditors"]]},
  {k:"table", title:"Self-balancing and sectional balancing", head:["Point","Self-balancing","Sectional balancing"], rows:[
    ["Adjustment accounts","In every ledger","Only total accounts for the debtors' and creditors' ledgers"],
    ["Part of double entry?","Yes","No — the total accounts are memorandum"],
    ["Trial balance","Each ledger has its own","Only the personal ledgers are checked"],
    ["Suits","Large firms","Medium firms"]]},
  {k:"facts", title:"Why use it", rows:[
    ["Locating errors","An error is traced to one ledger"],
    ["Internal check","Different clerks keep different ledgers and check each other"],
    ["Fraud prevention","Harder to hide a false entry"],
    ["Quick totals","Total debtors and creditors are known at once for final accounts"],
    ["Division of work","Ledgers can be written up at the same time"]]},
  {k:"ex", h:"<p><b>Worked example — debtors' ledger adjustment.</b> Opening debtors ₹60,000; credit sales ₹2,50,000; cash received ₹1,90,000; discount allowed ₹5,000; sales returns ₹8,000; bad debts ₹3,000; bills receivable received ₹20,000; a bill receivable dishonoured ₹4,000; transfer to creditors' ledger ₹6,000. Cash sales ₹40,000 and a provision of ₹2,500 are also given.</p><p><b>Debit:</b> 60,000 + 2,50,000 + 4,000 = 3,14,000. <b>Credit:</b> 1,90,000 + 5,000 + 8,000 + 3,000 + 20,000 + 6,000 = 2,32,000. Closing debtors = <b>₹82,000</b>. Cash sales and the provision are ignored.</p>"},
  {k:"ex", h:"<p><b>Worked example — creditors' ledger adjustment.</b> Opening creditors ₹45,000; credit purchases ₹1,80,000; paid ₹1,40,000; discount received ₹3,000; purchases returns ₹5,000; bills payable accepted ₹15,000; transfer from debtors' ledger ₹6,000.</p><p>Closing creditors = 45,000 + 1,80,000 − (1,40,000 + 3,000 + 5,000 + 15,000 + 6,000) = <b>₹56,000</b>.</p>"},
  {k:"trick", h:"In the general ledger, the <b>Debtors' Ledger Adjustment</b> account behaves exactly like one big debtor: what increases a debtor (credit sale, dishonour) is a <b>debit</b>; what reduces him (cash, discount, returns, bad debts, bills received) is a <b>credit</b>. The account in the debtors' ledger is its mirror."},
  {k:"trap", h:"<b>Cash sales</b>, <b>provisions</b>, <b>trade discount</b> and <b>bad debts recovered</b> never enter the debtors' adjustment account. A <b>set-off</b> (transfer between ledgers) reduces <b>both</b> debtors and creditors. The account kept <i>in</i> the debtors' ledger is called the <b>General</b> Ledger Adjustment account, not the Debtors' one."}
], sum:["The ledger is split into general, debtors' (sales) and creditors' (bought) ledgers.","Self-balancing: each ledger has an adjustment account and its own trial balance.","General ledger: Debtors' and Creditors' Ledger Adjustment accounts; personal ledgers: General Ledger Adjustment account.","The Debtors' Ledger Adjustment account is debited with credit sales and dishonours, and credited with cash, discount, returns, bad debts, bills and transfers.","Cash sales, provisions, trade discount and bad debts recovered are not recorded in it.","Sectional balancing uses total accounts as memorandum, only for the personal ledgers.","Main benefit: errors are located quickly; also internal check and division of work."]}
);

QB.push(
["F12","Under the single entry system, the records usually kept are:",["The cash book and personal accounts","Real and nominal accounts only","All three types of account","Only a journal"],"Real and nominal accounts are missing, so there is no trial balance.",""],
["F12","A statement of affairs is prepared to find the:",["Capital on a date","Gross profit","Cash balance","Credit sales"],"Capital is the balancing figure: assets − liabilities.",""],
["F12","Capital on 1 April ₹1,50,000; capital on 31 March ₹1,90,000; drawings ₹24,000; fresh capital ₹10,000. The profit for the year is:",["₹54,000","₹40,000","₹74,000","₹26,000"],"1,90,000 − 1,50,000 + 24,000 − 10,000 = ₹54,000.",""],
["F12","Opening capital ₹60,000; closing capital ₹50,000; drawings ₹8,000; no fresh capital. The result for the year is:",["A loss of ₹2,000","A profit of ₹2,000","A loss of ₹10,000","A profit of ₹18,000"],"50,000 − 60,000 + 8,000 = −2,000, a loss.",""],
["F12","Cash ₹5,000; stock ₹20,000; debtors ₹15,000; furniture ₹10,000; creditors ₹12,000. Capital as per the statement of affairs is:",["₹38,000","₹50,000","₹62,000","₹26,000"],"50,000 assets − 12,000 liabilities = ₹38,000.",""],
["F12","Opening debtors ₹30,000; closing debtors ₹40,000; cash received ₹1,20,000; discount allowed ₹2,000; bad debts ₹1,000; sales returns ₹3,000. Credit sales are:",["₹1,36,000","₹1,30,000","₹1,10,000","₹1,96,000"],"40,000 + 1,20,000 + 2,000 + 1,000 + 3,000 − 30,000 = ₹1,36,000.",""],
["F12","Opening creditors ₹25,000; closing creditors ₹35,000; cash paid ₹90,000; discount received ₹1,500; purchases returns ₹2,500. Credit purchases are:",["₹1,04,000","₹1,00,000","₹96,000","₹1,54,000"],"35,000 + 90,000 + 1,500 + 2,500 − 25,000 = ₹1,04,000.",""],
["F12","A gross profit of 25% on cost equals what percentage on sales?",["20%","25%","33⅓%","16⅔%"],"25 ÷ 125 = 20%.",""],
["F12","A gross profit of 20% on cost equals what fraction of sales?",["1/6","1/5","1/4","1/3"],"20 ÷ 120 = 1/6.",""],
["F12","Cost of goods sold is ₹1,20,000 and gross profit is 25% on cost. Sales are:",["₹1,50,000","₹1,60,000","₹1,44,000","₹1,40,000"],"1,20,000 × 125/100 = ₹1,50,000.",""],
["F12","Opening stock ₹40,000; purchases ₹1,60,000; sales ₹2,00,000; gross profit 25% on sales; stock salvaged ₹5,000. The stock lost in the fire is:",["₹45,000","₹50,000","₹55,000","₹35,000"],"Stock at the fire = 2,00,000 − 1,50,000 = 50,000; less salvage 5,000.",""],
["F12","A Receipts and Payments account is a:",["Real account","Nominal account","Personal account","Valuation account"],"It summarises the cash book.",""],
["F12","An Income and Expenditure account is prepared on the:",["Accrual basis","Cash basis","Single entry basis","Hybrid basis"],"It records the revenue items of the year whether paid or not.",""],
["F12","The excess of income over expenditure of a non-profit organisation is called a:",["Surplus","Net profit","Gross profit","Capital receipt"],"NPOs show a surplus or deficit, not a profit.",""],
["F12","Life membership fees received by a club are:",["A capital receipt","A revenue receipt","An expense","A liability for one year only"],"They are one-time and are capitalised.",""],
["F12","A legacy received by a club is generally:",["Capitalised","Credited to the I&E account","Treated as subscription","Shown as a liability"],"A legacy is a one-time gift under a will.",""],
["F12","A donation received for a building fund is:",["Credited to the building fund","Credited to the I&E account","Debited to the building account","Treated as subscription"],"Specific donations are capital and go to their fund.",""],
["F12","Annual subscriptions received by a club are:",["Revenue receipts","Capital receipts","Liabilities","Capital fund"],"They recur every year.",""],
["F12","Subscriptions received in 2025-26 were ₹50,000, including ₹3,000 for 2024-25 and ₹2,000 for 2026-27. ₹4,000 is still due for 2025-26. The subscription income for 2025-26 is:",["₹49,000","₹50,000","₹51,000","₹45,000"],"50,000 − 3,000 − 2,000 + 4,000 = ₹49,000.",""],
["F12","A club has 200 members paying ₹500 a year. It received ₹92,000 in subscriptions for the current year. Subscriptions outstanding are:",["₹8,000","₹92,000","₹1,00,000","₹10,000"],"200 × 500 = 1,00,000 due; 1,00,000 − 92,000 = ₹8,000.",""],
["F12","At the start of the year a club has cash ₹10,000, furniture ₹40,000 and subscriptions due ₹3,000, and owes salaries of ₹2,000. Its capital fund is:",["₹51,000","₹55,000","₹53,000","₹50,000"],"53,000 assets − 2,000 liabilities = ₹51,000.",""],
["F12","Opening stock of stationery ₹3,000; purchases ₹12,000; closing stock ₹4,000. Stationery consumed, shown in the I&E account, is:",["₹11,000","₹15,000","₹19,000","₹13,000"],"3,000 + 12,000 − 4,000 = ₹11,000.",""],
["F12","A club sells old furniture with a book value of ₹8,000 for ₹5,000. The I&E account shows:",["A loss of ₹3,000","An income of ₹5,000","An expense of ₹8,000","Nothing"],"The ₹5,000 is a capital receipt in R&P; only the loss goes to I&E.",""],
["F12","A prize fund stands at ₹50,000. Interest of ₹4,000 is earned on its investments and prizes of ₹6,000 are awarded. The fund now stands at:",["₹48,000","₹50,000","₹56,000","₹44,000"],"50,000 + 4,000 − 6,000 = ₹48,000.",""],
["F12","The opening balance of a Receipts and Payments account is:",["Cash and bank in hand","The capital fund","The surplus of last year","Outstanding subscriptions"],"It starts with the cash and bank balances.",""],
["F12","Depreciation on a club's furniture is shown in the:",["Income and Expenditure account","Receipts and Payments account","Both accounts","Neither account"],"R&P shows only cash; depreciation is a non-cash expense.",""],

["F13","The main purpose of self-balancing ledgers is to:",["Locate errors quickly in a particular ledger","Do away with the trial balance","Avoid preparing final accounts","Record cash sales"],"Each ledger balances by itself, so an error is traced to one ledger.",""],
["F13","Under the self-balancing system, the account opened in the debtors' ledger is the:",["General Ledger Adjustment account","Debtors' Ledger Adjustment account","Total Creditors account","Suspense account"],"The debtors' ledger holds a mirror of the general ledger.",""],
["F13","Under the self-balancing system, the account opened in the general ledger for debtors is the:",["Debtors' Ledger Adjustment account","General Ledger Adjustment account","Sales account","Bills receivable account"],"It sums up the whole debtors' ledger.",""],
["F13","Credit sales are posted to the Debtors' Ledger Adjustment account in the general ledger on the:",["Debit side","Credit side","Either side","They are not posted"],"Credit sales increase what debtors owe.",""],
["F13","Cash received from debtors is posted to the Debtors' Ledger Adjustment account (general ledger) on the:",["Credit side","Debit side","Either side","It is not posted"],"It reduces debtors.",""],
["F13","Which item is NOT recorded in the Debtors' Ledger Adjustment account?",["Cash sales","Credit sales","Discount allowed","Bills receivable dishonoured"],"Cash sales never touch a debtor's account.",""],
["F13","Provision for doubtful debts is:",["Not recorded in the Debtors' Ledger Adjustment account","Debited to it","Credited to it","Recorded in the creditors' ledger"],"The provision is kept in the general ledger, not against individual debtors.",""],
["F13","A bill receivable dishonoured is shown in the Debtors' Ledger Adjustment account (general ledger) on the:",["Debit side","Credit side","Neither side","Both sides"],"The debtor owes the amount again.",""],
["F13","Opening debtors ₹60,000; credit sales ₹2,50,000; cash received ₹1,90,000; discount allowed ₹5,000; returns ₹8,000; bad debts ₹3,000; bills received ₹20,000; a bill dishonoured ₹4,000; transfer to creditors' ledger ₹6,000. Closing debtors are:",["₹82,000","₹74,000","₹90,000","₹1,22,000"],"3,14,000 debits − 2,32,000 credits = ₹82,000.",""],
["F13","Opening creditors ₹45,000; credit purchases ₹1,80,000; paid ₹1,40,000; discount received ₹3,000; returns ₹5,000; bills payable accepted ₹15,000; transfer from debtors' ledger ₹6,000. Closing creditors are:",["₹56,000","₹62,000","₹71,000","₹50,000"],"2,25,000 − 1,69,000 = ₹56,000.",""],
["F13","A transfer of a debit balance in the debtors' ledger to the same party's account in the creditors' ledger:",["Reduces both total debtors and total creditors","Increases both","Reduces debtors and increases creditors","Has no effect on either total"],"The set-off cancels part of what each side owes.",""],
["F13","Under sectional balancing, the total debtors and total creditors accounts are:",["Memorandum accounts outside the double entry","Part of the double entry in every ledger","Kept in the debtors' ledger only","Not prepared at all"],"They only check the personal ledgers.",""],
["F13","The creditors' ledger is also called the:",["Bought ledger","Sales ledger","General ledger","Private ledger"],"Debtors' ledger = sales ledger; creditors' ledger = bought ledger.",""],
["F13","Discount allowed is posted to the Debtors' Ledger Adjustment account (general ledger) on the:",["Credit side","Debit side","Neither side","Both sides"],"It reduces the amount debtors owe.",""],
["F13","Bad debts recovered (written off in an earlier year) are:",["Not recorded in the Debtors' Ledger Adjustment account","Debited to it","Credited to it","Transferred to the creditors' ledger"],"The debtor's account is not revived; the recovery is an income.",""],
["F13","Under self-balancing, each ledger:",["Can produce its own trial balance","Needs the others to balance","Has no adjustment account","Records only cash"],"The adjustment account in each ledger makes it self-contained.",""],
["F13","Which is an advantage of self-balancing ledgers?",["Internal check and division of work","No need to keep a cash book","No need for adjustment accounts","Profit is found without final accounts"],"Different clerks can keep and check different ledgers.",""],
["F13","Sales returns are posted to the Debtors' Ledger Adjustment account (general ledger) on the:",["Credit side","Debit side","Neither side","Debit side, with cash sales"],"Returns reduce the amount debtors owe.",""],
["F13","Purchases returns are posted to the Creditors' Ledger Adjustment account (general ledger) on the:",["Debit side","Credit side","Neither side","Either side"],"Returns reduce what is owed to creditors, so the creditors' total is debited.",""],
["F13","Credit purchases are posted to the Creditors' Ledger Adjustment account (general ledger) on the:",["Credit side","Debit side","Neither side","They go to the debtors' ledger"],"They increase what the firm owes its suppliers.",""],
["F13","Trade discount given to customers is:",["Not recorded anywhere in the books","Credited to the Debtors' Ledger Adjustment account","Debited to the Debtors' Ledger Adjustment account","Recorded in the creditors' ledger"],"Trade discount never enters the books.",""],
["F13","The general ledger contains:",["Real, nominal and capital accounts, with the adjustment accounts","Only debtors' accounts","Only creditors' accounts","Only cash and bank"],"Personal accounts of customers and suppliers go to their own ledgers.",""]
);

LASTMOMENT.push(
{t:"Single entry & NPO", era:["fa"], rows:[["Profit","Closing − opening capital + drawings − fresh capital"],["25% on cost","20% on sales"],["R&P","Real, cash basis"],["I&E","Nominal, accrual basis"],["Life membership, legacy","Capital"],["Subscriptions","Revenue"]]},
{t:"Self-balancing", era:["fa"], rows:[["In debtors' ledger","General Ledger Adjustment A/c"],["In general ledger","Debtors' Ledger Adjustment A/c"],["Debit (GL side)","Credit sales, dishonours"],["Credit (GL side)","Cash, discount, returns, bad debts, bills"],["Not recorded","Cash sales, provisions, trade discount"]]}
);
TILES.push(["20%","Gross profit on sales when 25% on cost","fa"]);

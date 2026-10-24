/* F10 partnership: appropriation, goodwill, ratios, admission, retirement, death; F11 joint ventures and consignment. */
const FA_PFORM = [
  ["Sacrificing ratio (on admission)","Old share − new share","Shows who gives up profit to the new partner."],
  ["Gaining ratio (on retirement or death)","New share − old share","Shows who takes the outgoing partner's share."],
  ["Goodwill by average profit method","Average profit × number of years' purchase",""],
  ["Normal profit","Capital employed × normal rate of return ÷ 100",""],
  ["Super profit","Average profit − normal profit",""],
  ["Goodwill by super profit method","Super profit × number of years' purchase",""],
  ["Goodwill by capitalising super profit","Super profit × 100 ÷ normal rate of return",""],
  ["Goodwill by capitalising average profit","Average profit × 100 ÷ normal rate − capital employed",""],
  ["Interest on drawings, equal sums at the start of each month","Total drawings × rate × 6.5 ÷ 12",""],
  ["Interest on drawings, equal sums at the end of each month","Total drawings × rate × 5.5 ÷ 12",""],
  ["Interest on drawings, equal sums in the middle of each month","Total drawings × rate × 6 ÷ 12",""],
  ["Interest on drawings, equal sums at the start of each quarter","Total drawings × rate × 7.5 ÷ 12",""],
  ["Interest on drawings, equal sums at the end of each quarter","Total drawings × rate × 4.5 ÷ 12",""],
  ["Gross profit ratio","Gross profit ÷ net sales × 100","From the final accounts."],
  ["Cost of goods sold","Opening stock + net purchases + direct expenses − closing stock",""],
  ["Annual depreciation (SLM)","(Cost − scrap value) ÷ useful life",""]
];
const FA_P13 = [
  ["Sharing of profits and losses","Equally","Whatever the capitals."],
  ["Interest on capital","Not allowed","Unless the deed says so; paid only out of profits."],
  ["Interest on drawings","Not charged",""],
  ["Interest on a partner's loan to the firm","6% a year","Payable even if there is a loss."],
  ["Salary or commission to a partner","Not allowed","Even if a partner works more."],
  ["Interest on unpaid amount of an outgoing partner (Section 37)","6% a year or a share of profits","At the outgoing partner's (or his heirs') option."]
];
const FA_CONTERM = [
  ["Consignor","The owner who sends goods to an agent for sale",""],
  ["Consignee","The agent who sells the goods for a commission",""],
  ["Proforma invoice","A statement of the goods sent, sent by the consignor","Not a sale invoice."],
  ["Account sales","A statement of sales, expenses and commission, sent by the consignee",""],
  ["Del credere commission","Extra commission for which the consignee bears the bad debts",""],
  ["Overriding commission","Extra commission for pushing sales above a target or of a new product",""],
  ["Normal loss","An unavoidable loss, such as evaporation; spread over the remaining units",""],
  ["Abnormal loss","An avoidable loss, such as theft or fire; valued at cost and taken out of the consignment account",""],
  ["Loading","The excess of invoice price over cost, removed by a reserve entry",""],
  ["Co-venturers","The parties to a joint venture",""],
  ["Joint bank account","A separate bank account opened for the venture when separate books are kept",""],
  ["Memorandum joint venture account","A statement drawn up to find the venture's profit when each venturer keeps his own records",""]
];

LESSONS.push(
{id:"F10", heat:2, title:"Partnership accounts: appropriation, goodwill, ratios, admission and retirement", hi:"साझेदारी खाते: विनियोजन, ख्याति, अनुपात, प्रवेश और अवकाश", blocks:[
  {k:"hot", h:"Most asked: the <b>default rules</b> of the Partnership Act 1932 (Section 13), the <b>P&amp;L appropriation account</b>, <b>interest on drawings</b> (6.5, 5.5, 6 months), <b>goodwill</b> by average and super profit, and <b>new, sacrificing and gaining ratios</b>. The official Paper III list names the <b>Profit &amp; Loss Appropriation Account</b>; the partnership rules below are what it rests on."},
  {k:"story", h:"<p>A partnership is 'the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all' — Section 4 of the <b>Indian Partnership Act, 1932</b>. The partners write their terms in a <b>partnership deed</b>; where the deed is silent, the Act's default rules apply.</p><p>The firm's net profit is first divided in a <b>profit and loss appropriation account</b>: interest on capital, partners' salaries and commission are taken out, interest on drawings is added back, and what is left is shared in the profit-sharing ratio. When a partner joins, leaves or dies, the ratio changes, assets are revalued, and <b>goodwill</b> — the value of the firm's reputation and earning power — must be settled.</p>", key:"Sacrificing ratio = old − new (admission); gaining ratio = new − old (retirement)."},
  {k:"table", title:"If there is no deed: the default rules", head:["Point","Rule","Note"], rows: FA_P13},
  {k:"table", title:"Ratios and formulas", head:["What","Formula","Note"], rows: FA_PFORM},
  {k:"facts", title:"Rules worth knowing", rows:[
    ["Number of partners","At least 2; at most 50 under the Companies (Miscellaneous) Rules 2014 framed under Section 464 of the Companies Act 2013"],
    ["Registration","Not compulsory, but an unregistered firm cannot sue third parties to enforce a contract (Section 69)"],
    ["Fixed capital method","Capital accounts stay unchanged; salary, interest, drawings and profit go to current accounts"],
    ["Fluctuating capital method","Everything goes to the capital accounts, so they change every year"],
    ["P&amp;L appropriation account","Debit: interest on capital, salary, commission, reserve; credit: net profit, interest on drawings"],
    ["On admission","Revaluation gain or loss and old reserves go to the old partners in the old ratio; the new partner's premium for goodwill goes to the sacrificing partners in the sacrificing ratio"],
    ["On retirement or death","Revaluation and reserves in the old ratio; the outgoing partner's goodwill share is borne by the gaining partners in the gaining ratio"],
    ["AS 26","Only purchased goodwill is recorded; self-generated goodwill is not"],
    ["Garner v Murray","On dissolution, an insolvent partner's deficiency is borne by the solvent partners in the ratio of their capitals"]]},
  {k:"ex", h:"<p><b>Worked example — new and sacrificing ratios.</b> A and B share profits 3 : 2. C joins for 1/5.</p><p>(a) <i>C's share comes from A and B in their old ratio.</i> The remaining 4/5 is split 3 : 2 → A = 12/25, B = 8/25, C = 5/25. New ratio <b>12 : 8 : 5</b>; sacrificing ratio = old ratio <b>3 : 2</b>.</p><p>(b) <i>A and B each give up 1/10.</i> A = 3/5 − 1/10 = 5/10; B = 2/5 − 1/10 = 3/10; C = 2/10 → <b>5 : 3 : 2</b>.</p><p>(c) <i>New ratio given as 2 : 2 : 1.</i> A gives up 3/5 − 2/5 = 1/5; B gives up 2/5 − 2/5 = 0. Only A sacrifices.</p>"},
  {k:"ex", h:"<p><b>Worked example — goodwill.</b> Profits of the last three years: 40,000, 50,000 and 60,000. Capital employed 3,00,000; normal return 10%.</p><p>Average profit = 1,50,000 ÷ 3 = 50,000. <b>Average profit method</b>, 2 years' purchase: 50,000 × 2 = <b>₹1,00,000</b>.</p><p>Normal profit = 10% of 3,00,000 = 30,000; super profit = 20,000. <b>Super profit method</b>, 3 years' purchase: <b>₹60,000</b>. <b>Capitalising super profit:</b> 20,000 × 100/10 = <b>₹2,00,000</b> — the same as capitalising average profit: 5,00,000 − 3,00,000.</p>"},
  {k:"ex", h:"<p><b>Worked example — appropriation and interest on drawings.</b> Net profit ₹1,00,000. A's capital ₹2,00,000, B's ₹1,00,000; interest on capital 10%; B's salary ₹12,000; ratio 3 : 2.</p><p>Interest on capital: A 20,000, B 10,000. After salary: 1,00,000 − 30,000 − 12,000 = 58,000. A gets 3/5 = <b>₹34,800</b>; B gets 2/5 = <b>₹23,200</b>.</p><p><i>Interest on drawings:</i> A draws ₹2,000 at the start of every month (₹24,000 in the year) and is charged 10% → 24,000 × 10% × 6.5/12 = <b>₹1,300</b>. If drawn at the end of each month: × 5.5/12 = ₹1,100.</p>"},
  {k:"trick", h:"Average months for monthly drawings: <b>start 6.5, middle 6, end 5.5</b>; quarterly: <b>start 7.5, end 4.5</b>. Think 'early drawing, longer interest'."},
  {k:"trap", h:"Without a deed: <b>no</b> interest on capital, <b>no</b> salary, profits <b>equally</b> — but <b>6%</b> on a partner's <b>loan</b>. Interest on capital is a charge only <b>against profits</b> (appropriation), whereas interest on a partner's loan is a <b>charge</b> even in a loss year. On admission it is the <b>sacrificing</b> ratio; on retirement the <b>gaining</b> ratio."}
], sum:["Indian Partnership Act 1932; Section 4 defines partnership; Section 13 gives the default rules.","No deed: equal profits, no interest on capital or drawings, no salary; 6% interest on a partner's loan.","P&L appropriation account divides net profit after interest on capital, salary and commission.","Interest on monthly drawings: 6.5 months (start), 6 (middle), 5.5 (end).","Goodwill: average profit × years' purchase; super profit = average − normal profit.","Sacrificing ratio = old − new (admission); gaining ratio = new − old (retirement, death).","Revaluation profit and reserves go to old partners in the old ratio."]},

{id:"F11", heat:1, title:"Joint ventures and consignment accounts", hi:"संयुक्त उपक्रम और प्रेषण खाते", blocks:[
  {k:"hot", h:"Most asked: <b>consignor vs consignee</b>, <b>proforma invoice vs account sales</b>, <b>del credere commission</b>, valuing <b>stock on consignment</b> and <b>abnormal loss</b>, and the methods of keeping <b>joint venture</b> accounts. These two are <b>not named</b> in the official Paper III syllabus, so study them after the rest; they are standard in other accounts papers and help with valuation of stock and agency questions."},
  {k:"story", h:"<p><b>Consignment</b>: a Delhi manufacturer sends 100 television sets to an agent in Mumbai. Ownership stays with the sender (the <b>consignor</b>); the agent (the <b>consignee</b>) only sells them and earns a commission. So sending the goods is <b>not a sale</b>. The consignor sends a <b>proforma invoice</b>; the consignee reports back with an <b>account sales</b>. The consignor's <b>consignment account</b> works like a small P&amp;L account for that shipment.</p><p><b>Joint venture</b>: two traders join hands for one deal — say, to buy and sell a lot of timber — without a firm name, and part when the deal is done. It is a temporary partnership; profit is shared in the agreed ratio, or equally if none is agreed.</p>", key:"Consignment = owner and agent; joint venture = temporary partners."},
  {k:"table", title:"Terms → meaning", head:["Term","Meaning","Note"], rows: FA_CONTERM},
  {k:"table", title:"Consignment and sale", head:["Point","Consignment","Sale"], rows:[
    ["Ownership","Stays with the consignor until the agent sells","Passes to the buyer at once"],
    ["Relation","Principal and agent","Seller and buyer"],
    ["Risk of loss","Consignor's (unless the consignee is negligent)","Buyer's"],
    ["Unsold goods","Can be returned to the consignor","Cannot be returned as of right"],
    ["Document","Proforma invoice; account sales","Invoice"]]},
  {k:"table", title:"Main entries in the consignor's books", head:["Event","Entry"], rows:[
    ["Goods sent","Consignment A/c Dr → To Goods sent on consignment A/c (at cost)"],
    ["Consignor's expenses (freight, insurance)","Consignment A/c Dr → To Bank"],
    ["Sales reported by the consignee","Consignee Dr → To Consignment A/c"],
    ["Consignee's expenses and commission","Consignment A/c Dr → To Consignee"],
    ["Stock left with the consignee","Stock on consignment A/c Dr → To Consignment A/c"],
    ["Abnormal loss","Abnormal loss A/c Dr → To Consignment A/c (then to P&amp;L and insurance claim)"],
    ["Profit on consignment","Consignment A/c Dr → To P&amp;L A/c"],
    ["Goods sent on consignment account closed","Goods sent on consignment A/c Dr → To Purchases (or Trading) A/c"]]},
  {k:"table", title:"Ways of keeping joint venture accounts", head:["Method","Accounts opened","Note"], rows:[
    ["Separate set of books","Joint Bank A/c, Joint Venture A/c and each co-venturer's personal A/c","Used for big ventures."],
    ["Each venturer keeps his own records","'Joint venture with X' A/c in each venturer's books","Profit found from a Memorandum Joint Venture A/c."],
    ["One venturer keeps all records","Joint Venture A/c and the other venturer's personal A/c",""]]},
  {k:"ex", h:"<p><b>Worked example — consignment.</b> 100 sets costing ₹2,000 each (₹2,00,000) are sent. Consignor pays freight ₹5,000. Consignee pays unloading ₹1,000 and godown rent ₹1,500, sells 80 sets at ₹2,600 (₹2,08,000) and gets 5% commission (₹10,400).</p><p><b>Stock on consignment</b> (20 sets) = cost 40,000 + share of non-recurring expenses (5,000 + 1,000) × 20/100 = 1,200 → <b>₹41,200</b>. Godown rent and commission, being selling costs, are left out.</p><p><b>Profit</b> = 2,08,000 + 41,200 − (2,00,000 + 5,000 + 1,000 + 1,500 + 10,400) = <b>₹31,300</b>.</p>"},
  {k:"ex", h:"<p><b>Worked example — losses.</b> <i>Abnormal:</i> 1,000 kg at ₹50 are sent and the consignor pays freight ₹5,000 (₹5 a kg). 100 kg are stolen in transit. Abnormal loss = 100 × 55 = <b>₹5,500</b>.</p><p><i>Normal:</i> 1,000 kg costing ₹45,000 in all suffer an unavoidable 10% loss. Cost per kg of the good 900 kg = 45,000 ÷ 900 = ₹50; stock of 200 kg = <b>₹10,000</b>.</p>"},
  {k:"ex", h:"<p><b>Worked example — joint venture.</b> A and B share 3 : 2. A buys goods for ₹60,000 and pays freight ₹4,000. B sells them for ₹90,000, pays selling expenses ₹2,000 and is allowed 2% commission on sales (₹1,800).</p><p>Profit = 90,000 − 60,000 − 4,000 − 2,000 − 1,800 = <b>₹22,200</b>: A ₹13,320, B ₹8,880. A is owed 64,000 + 13,320 = 77,320. B holds the ₹90,000 of sales, keeps 2,000 + 1,800 + 8,880 = 12,680 and pays A <b>₹77,320</b>.</p>"},
  {k:"trick", h:"<b>“Pro goes, Account comes back”</b>: the <b>pro</b>forma invoice goes with the goods; the <b>account</b> sales comes back. For stock, add only <b>non-recurring</b> costs that bring the goods to the place of sale — never selling costs."},
  {k:"trap", h:"Sending goods on consignment is <b>not a sale</b>, so the consignee is <b>not</b> debited when goods are sent. Under <b>del credere</b>, bad debts are the consignee's loss, not the consignor's. A <b>normal</b> loss is not written off separately; it raises the cost of the remaining units."}
], sum:["Consignment: consignor (owner) sends goods to consignee (agent); ownership does not pass.","Proforma invoice goes with the goods; the account sales comes back from the consignee.","Del credere commission makes the consignee bear bad debts.","Stock on consignment = cost + proportionate non-recurring expenses; selling costs are left out.","Abnormal loss is valued at cost plus expenses to date and removed from the consignment account; normal loss is absorbed by the remaining units.","A joint venture is a temporary partnership for one deal; profit is shared in the agreed ratio, otherwise equally.","Joint venture records: separate books (joint bank account), each venturer's own books (memorandum JV account), or one venturer's books."]}
);

QB.push(
["F10","The Indian Partnership Act was passed in:",["1932","1872","1956","2008"],"It came into force in 1932; the LLP Act is of 2008.",""],
["F10","If the partnership deed is silent, profits are shared:",["Equally","In the ratio of capitals","In the ratio of work done","As decided by the senior partner"],"Section 13 of the Partnership Act lays down equal sharing.",""],
["F10","If there is no deed, interest on a partner's loan to the firm is allowed at:",["6% a year","12% a year","9% a year","Nothing — no interest is allowed"],"The Act allows 6% a year on partners' loans.",""],
["F10","If there is no deed, interest on partners' capital is:",["Not allowed","Allowed at 6% a year","Allowed at 12% a year","Allowed at the bank rate"],"Interest on capital needs an agreement.",""],
["F10","A partner lends ₹50,000 to the firm and there is no deed. Interest on the loan for a year is:",["₹3,000","₹6,000","₹5,000","Nil"],"6% of 50,000 = ₹3,000.",""],
["F10","A and B share profits 3 : 2. C is admitted for a 1/5 share, which he takes from A and B in their old ratio. The new ratio is:",["12 : 8 : 5","3 : 2 : 1","6 : 4 : 5","3 : 2 : 5"],"A = 3/5 × 4/5 = 12/25; B = 8/25; C = 5/25.",""],
["F10","A and B share profits 3 : 2. C joins for 1/5, and A and B each give up 1/10. The new ratio is:",["5 : 3 : 2","3 : 2 : 1","4 : 4 : 2","6 : 3 : 1"],"A = 6/10 − 1/10 = 5/10; B = 4/10 − 1/10 = 3/10; C = 2/10.",""],
["F10","A and B share 3 : 1. C joins for 1/4, taking 3/16 from A and 1/16 from B. The new ratio is:",["9 : 3 : 4","3 : 1 : 1","6 : 2 : 2","9 : 4 : 3"],"A = 12/16 − 3/16 = 9/16; B = 4/16 − 1/16 = 3/16; C = 4/16.",""],
["F10","A and B share 3 : 2. After C's admission the new ratio is 2 : 2 : 1. Who has sacrificed?",["A alone","B alone","A and B equally","A and B in the ratio 3 : 2"],"A: 3/5 − 2/5 = 1/5; B: 2/5 − 2/5 = 0.",""],
["F10","The sacrificing ratio is calculated as:",["Old share − new share","New share − old share","Old share ÷ new share","New share + old share"],"It shows how much each old partner gives up on admission.",""],
["F10","The gaining ratio is used mainly when:",["A partner retires or dies","A new partner is admitted","The firm is dissolved","Capitals are fixed"],"Continuing partners gain the outgoing partner's share.",""],
["F10","A, B and C share 2 : 2 : 1. B retires and A and C will share 3 : 2. The gaining ratio of A and C is:",["1 : 1","3 : 2","2 : 1","2 : 3"],"A gains 3/5 − 2/5 = 1/5; C gains 2/5 − 1/5 = 1/5.",""],
["F10","A, B and C share 5 : 3 : 2. C retires and nothing is said about the new ratio. A and B will share:",["5 : 3","1 : 1","3 : 2","5 : 2"],"They carry on in their old ratio between themselves.",""],
["F10","Profits of three years are ₹40,000, ₹50,000 and ₹60,000. Goodwill at 2 years' purchase of average profit is:",["₹1,00,000","₹1,50,000","₹1,20,000","₹3,00,000"],"Average 50,000 × 2 = ₹1,00,000.",""],
["F10","Average profit ₹50,000; capital employed ₹3,00,000; normal rate 10%. Goodwill at 3 years' purchase of super profit is:",["₹60,000","₹1,50,000","₹90,000","₹30,000"],"Normal profit 30,000; super profit 20,000 × 3 = ₹60,000.",""],
["F10","Average profit ₹50,000; capital employed ₹3,00,000; normal rate 10%. Goodwill by capitalising the super profit is:",["₹2,00,000","₹5,00,000","₹60,000","₹3,00,000"],"20,000 × 100 ÷ 10 = ₹2,00,000.",""],
["F10","A partner draws ₹2,000 at the beginning of every month. At 10% a year, interest on his drawings for the year is:",["₹1,300","₹1,100","₹1,200","₹2,400"],"24,000 × 10% × 6.5/12 = ₹1,300.",""],
["F10","A partner draws ₹2,000 at the end of every month. At 10% a year, interest on his drawings for the year is:",["₹1,100","₹1,300","₹1,200","₹2,400"],"24,000 × 10% × 5.5/12 = ₹1,100.",""],
["F10","A partner draws ₹6,000 at the beginning of every quarter. At 10% a year, interest on his drawings for the year is:",["₹1,500","₹900","₹1,200","₹2,400"],"24,000 × 10% × 7.5/12 = ₹1,500.",""],
["F10","Net profit ₹1,00,000; A's capital ₹2,00,000 and B's ₹1,00,000 earn 10% interest; B gets a salary of ₹12,000; ratio 3 : 2. A's share of the remaining profit is:",["₹34,800","₹46,800","₹60,000","₹23,200"],"1,00,000 − 30,000 − 12,000 = 58,000; 3/5 = ₹34,800.",""],
["F10","The goodwill of a firm is valued at ₹60,000. C joins for a 1/4 share and brings his share of goodwill in cash. He brings:",["₹15,000","₹20,000","₹60,000","₹12,000"],"1/4 × 60,000 = ₹15,000, credited to the sacrificing partners.",""],
["F10","Premium for goodwill brought in by a new partner is credited to the old partners in their:",["Sacrificing ratio","Capital ratio","Gaining ratio","New ratio"],"It compensates them for the share they give up.",""],
["F10","On admission, a revaluation profit is credited to the old partners in their:",["Old ratio","New ratio","Sacrificing ratio","Capital ratio"],"The gain arose while the old partners owned the firm.",""],
["F10","On revaluation, buildings rise by ₹20,000, stock falls by ₹5,000 and a new provision of ₹3,000 is made for doubtful debts. A and B share 3 : 2. A's share of the revaluation profit is:",["₹7,200","₹4,800","₹12,000","₹13,800"],"Gain = 20,000 − 5,000 − 3,000 = 12,000; 3/5 = ₹7,200.",""],
["F10","A partner owning 1/4 of the profits dies three months into the year. Last year's profit was ₹1,20,000 and profits are to be shared on a time basis. His share of profit to the date of death is:",["₹7,500","₹30,000","₹10,000","₹22,500"],"1,20,000 × 3/12 × 1/4 = ₹7,500.",""],
["F10","Under the fixed capital method, partners' salaries and interest are recorded in their:",["Current accounts","Capital accounts","Loan accounts","Drawings accounts only"],"Capital accounts stay fixed; adjustments go to current accounts.",""],
["F10","Under the decision in Garner v Murray, an insolvent partner's deficiency is borne by the solvent partners in the ratio of their:",["Capitals","Profit-sharing","Drawings","Loans"],"The rule uses the solvent partners' capital ratio.",""],
["F10","The maximum number of partners in a firm under the Companies Act 2013 and its rules is:",["50","20","100","10"],"Section 464 allows up to 100; the Companies (Miscellaneous) Rules 2014 fix it at 50.",""],
["F10","Under AS 26, goodwill is recorded in the books only when it is:",["Purchased for a price","Generated by the firm itself","Valued by a partner","Shown in the deed"],"Self-generated goodwill is not recognised as an asset.",""],

["F11","In a consignment, the owner who sends the goods is the:",["Consignor","Consignee","Co-venturer","Drawee"],"The consignor is the principal; the consignee is the agent.",""],
["F11","The statement sent by the consignee showing sales, expenses and commission is the:",["Account sales","Proforma invoice","Debit note","Credit note"],"The proforma invoice goes with the goods; the account sales comes back.",""],
["F11","A proforma invoice is sent by the:",["Consignor to the consignee","Consignee to the consignor","Bank to the consignor","Consignee to the buyers"],"It describes the goods sent; it is not a demand for payment.",""],
["F11","Del credere commission is paid to the consignee for:",["Bearing the risk of bad debts","Selling above the target","Storing the goods","Insuring the goods in transit"],"With del credere, the consignee makes good any bad debts.",""],
["F11","When goods are sent on consignment, the consignor debits the:",["Consignment account","Consignee's account","Sales account","Goods sent on consignment account"],"Consignment A/c Dr, To Goods sent on consignment A/c.",""],
["F11","Sending goods on consignment is NOT a sale because:",["Ownership stays with the consignor","The goods are sent by rail","The price is not fixed","The consignee is a stranger"],"The consignee is only an agent.",""],
["F11","Which expense is added to the value of unsold stock on consignment?",["Freight paid to bring the goods to the consignee","Godown rent paid by the consignee","Commission to the consignee","Advertisement by the consignee"],"Only non-recurring costs of bringing goods to the place of sale are added.",""],
["F11","100 sets costing ₹2,000 each are sent; the consignor pays freight ₹5,000 and the consignee pays unloading ₹1,000. If 20 sets are unsold, the stock on consignment is:",["₹41,200","₹40,000","₹41,000","₹46,000"],"40,000 + (6,000 × 20/100) = ₹41,200.",""],
["F11","Goods costing ₹2,00,000 are consigned; consignor's freight ₹5,000; consignee's unloading ₹1,000 and godown rent ₹1,500; sales ₹2,08,000; commission ₹10,400; closing stock ₹41,200. The profit on consignment is:",["₹31,300","₹30,100","₹41,200","₹8,000"],"2,08,000 + 41,200 − 2,17,900 = ₹31,300.",""],
["F11","1,000 kg at ₹50 a kg are consigned and the consignor pays freight of ₹5,000. 100 kg are stolen in transit. The abnormal loss is:",["₹5,500","₹5,000","₹500","₹4,500"],"100 kg × (50 + 5) = ₹5,500.",""],
["F11","1,000 kg costing ₹45,000 in all suffer a normal loss of 100 kg. The value of 200 kg of closing stock is:",["₹10,000","₹9,000","₹11,000","₹9,500"],"Cost per good kg = 45,000 ÷ 900 = ₹50; 200 kg = ₹10,000.",""],
["F11","A normal loss on consignment is:",["Absorbed by the remaining units, raising their cost","Debited to the P&L account","Claimed from the insurer","Borne by the consignee"],"It is unavoidable, so it is part of the cost of the goods that survive.",""],
["F11","Goods costing ₹80,000 are consigned at an invoice price 25% above cost. The loading is:",["₹20,000","₹16,000","₹25,000","₹1,00,000"],"Invoice price 1,00,000 − cost 80,000 = ₹20,000.",""],
["F11","Sales of ₹2,08,000 are made on consignment. Ordinary commission is 5% and del credere commission 2% on sales. Total commission is:",["₹14,560","₹10,400","₹4,160","₹12,480"],"7% of 2,08,000 = ₹14,560.",""],
["F11","A joint venture is best described as a:",["Temporary partnership for a particular venture","Permanent partnership with a firm name","Company with limited liability","Principal–agent arrangement"],"It ends when the venture is over.",""],
["F11","When separate books are kept for a joint venture, the account opened for its cash is the:",["Joint bank account","Memorandum joint venture account","Consignment account","Account sales"],"All venture money passes through the joint bank account.",""],
["F11","When each co-venturer keeps his own records, the venture's profit is found from a:",["Memorandum joint venture account","Joint bank account","Consignment account","Profit and loss appropriation account"],"It combines both venturers' figures to find the profit.",""],
["F11","If there is no agreement, joint venture profit is shared:",["Equally","In the ratio of money put in","In the ratio of sales made","By the venturer who sold the goods"],"As in a partnership, equally.",""],
["F11","A and B share 3 : 2. A buys goods for ₹60,000 and pays freight ₹4,000; B sells them for ₹90,000, pays ₹2,000 in expenses and gets 2% commission on sales. The venture's profit is:",["₹22,200","₹24,000","₹26,000","₹20,400"],"90,000 − 60,000 − 4,000 − 2,000 − 1,800 = ₹22,200.",""],
["F11","In the same venture (profit ₹22,200 shared 3 : 2), B holds the sale proceeds of ₹90,000. How much must B pay A to settle?",["₹77,320","₹64,000","₹73,320","₹90,000"],"A is owed his outlay 64,000 plus profit 13,320.",""],
["F11","Unsold stock of a joint venture taken over by a co-venturer is:",["Credited to the joint venture account","Debited to the joint venture account","Credited to the joint bank account","Ignored"],"It is like a sale to that venturer.",""],
["F11","Goods lost by theft on the way to the consignee are an example of:",["Abnormal loss","Normal loss","Selling expense","Loading"],"Theft and fire are avoidable losses.",""],
["F11","An overriding commission is given to a consignee for:",["Selling above a target or promoting a new product","Bearing bad debts","Storing goods","Collecting bills"],"It is extra commission over the ordinary rate.",""]
);

LASTMOMENT.push(
{t:"Partnership", era:["fa"], rows:[["No deed","Equal profits; no IOC, no salary"],["Partner's loan","6% a year"],["Drawings monthly","6.5 / 6 / 5.5 months"],["Admission","Sacrificing = old − new"],["Retirement","Gaining = new − old"],["Super profit","Average − normal profit"]]},
{t:"Consignment & JV", era:["fa"], rows:[["Consignor / consignee","Owner / agent"],["Proforma invoice","Goes with goods"],["Account sales","Comes back"],["Del credere","Agent bears bad debts"],["Stock","Cost + non-recurring costs"],["JV","Temporary partnership"]]}
);
TILES.push(["1932","Indian Partnership Act","fa"],["6%","Interest on partner's loan (no deed)","fa"],["6.5","Months for drawings at each month's start","fa"]);

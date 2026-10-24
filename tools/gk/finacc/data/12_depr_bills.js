/* F6 depreciation, provisions and reserves; F7 bills of exchange. */
const FA_DEPM = [
  ["Straight line method (SLM)","Equal charge every year: (cost − scrap) ÷ useful life","Also called the fixed instalment or original cost method."],
  ["Written down value method (WDV)","A fixed rate on the falling book value; the charge falls every year","Also called the reducing or diminishing balance method; the book value never reaches zero."],
  ["Sum of years' digits method","A falling fraction of the depreciable amount: remaining life ÷ sum of the years' digits",""],
  ["Annuity method","Allows interest on the money locked up in the asset","Used for leases."],
  ["Depreciation fund (sinking fund) method","The yearly charge is invested outside the business to replace the asset",""],
  ["Insurance policy method","A policy is taken out that pays the replacement cost at the end of the asset's life",""],
  ["Revaluation method","The asset is valued every year; the fall in value is the depreciation","Used for loose tools, livestock, patterns."],
  ["Depletion method","Charge per unit of mineral extracted","Used for mines, quarries and oil wells."],
  ["Machine hour rate method","Charge per hour the machine actually runs",""],
  ["Production units method","Charge per unit produced","Suits assets whose wear follows output."]
];
const FA_BILLTERM = [
  ["Drawer","The creditor who writes (draws) the bill",""],
  ["Drawee","The debtor on whom the bill is drawn; on accepting it he becomes the acceptor",""],
  ["Payee","The person to whom the money is to be paid",""],
  ["Days of grace","Three extra days added to the term of a bill (Section 22, NI Act)","Not for bills payable on demand or at sight."],
  ["Discounting","Encashing a bill with a bank before maturity, less a charge",""],
  ["Endorsement","Transfer of a bill by signing on its back",""],
  ["Noting","A notary public's record of the fact of dishonour","Noting charges are recovered from the drawee."],
  ["Protest","A formal certificate of dishonour issued by a notary public",""],
  ["Retirement","Payment of a bill before its due date, with a rebate",""],
  ["Renewal","Cancelling a bill the drawee cannot meet and drawing a new one, usually with interest",""],
  ["Accommodation bill","A bill drawn without any trade, only to help a party raise money",""],
  ["Maker","The person who signs a promissory note and promises to pay",""]
];

LESSONS.push(
{id:"F6", heat:3, title:"Depreciation, provisions and reserves", hi:"मूल्यह्रास, प्रावधान और संचय", blocks:[
  {k:"hot", h:"Most asked: <b>SLM vs WDV</b> (features and a three-year numerical), which method suits <b>mines, loose tools or leases</b>, <b>profit or loss on sale</b> of an asset, and the difference between a <b>provision</b> and a <b>reserve</b>."},
  {k:"story", h:"<p>A delivery van bought for ₹6,00,000 will not last for ever. Each year it wears out a little, and new models make it look older still. <b>Depreciation</b> is the share of the van's cost that is used up in each year; charging it against that year's revenue gives a true profit (matching) and shows the van at a fair figure in the balance sheet.</p><p>Three things decide the charge: the <b>cost</b> (price plus freight and installation), the <b>useful life</b> and the expected <b>scrap value</b>. Then a <b>method</b> spreads the depreciable amount over the years. Land is not depreciated; mines are <b>depleted</b>; patents and goodwill are <b>amortised</b>.</p>", key:"SLM: same amount every year. WDV: same rate every year, on a falling balance."},
  {k:"table", title:"Methods of depreciation", head:["Method","How the charge is worked out","Note"], rows: FA_DEPM},
  {k:"table", title:"SLM and WDV side by side", head:["Point","SLM","WDV"], rows:[
    ["Charge each year","Same","Falls each year"],
    ["Charged on","Original cost","Book value at the start of the year"],
    ["Book value at the end","Can become zero (or scrap value)","Never becomes zero"],
    ["Total cost of the asset over its life","Repairs rise later, depreciation stays flat — total charge rises","Repairs rise as depreciation falls — total charge evens out"],
    ["Recognised by the Income-tax Act","No (except for some power undertakings)","Yes, on blocks of assets"],
    ["Suits","Assets with little repair, leases, patents","Plant and machinery, vehicles"]]},
  {k:"facts", title:"Words and rules", rows:[
    ["Causes","Wear and tear, passage of time, obsolescence, depletion, accidents"],
    ["Depreciable amount","Cost − residual (scrap) value"],
    ["Cost includes","Purchase price, freight, installation, trial-run costs"],
    ["WDV rate","R = 1 − (scrap ÷ cost)^(1/n)"],
    ["Provision for depreciation method","The asset stays at cost; accumulated depreciation is built up in a separate account and deducted in the balance sheet"],
    ["Change of method","Under AS 10 (Revised) it is a change in accounting estimate, applied from then on"],
    ["Provision","A charge against profit for a known liability or loss whose amount is uncertain — doubtful debts, depreciation, taxation"],
    ["Reserve","An appropriation of profit kept back to strengthen the business — general reserve, dividend equalisation reserve"],
    ["Capital reserve","Built from capital profits — profit on sale or revaluation of fixed assets, profit prior to incorporation"],
    ["Secret reserve","A hidden reserve created by excess depreciation or undervaluing assets"]]},
  {k:"ex", h:"<p><b>Worked example — SLM.</b> A machine costs ₹1,00,000 plus ₹10,000 installation. Scrap value ₹10,000; life 10 years.</p><p>Depreciable amount = 1,10,000 − 10,000 = 1,00,000. Annual depreciation = 1,00,000 ÷ 10 = <b>₹10,000</b> every year.</p>"},
  {k:"ex", h:"<p><b>Worked example — WDV at 10%.</b> Cost ₹2,00,000.</p><p>Year 1: 10% of 2,00,000 = 20,000 → book value 1,80,000. Year 2: 18,000 → 1,62,000. Year 3: 16,200 → <b>1,45,800</b>. Year 4: 14,580 → 1,31,220. The charge falls every year and the balance never reaches zero.</p>"},
  {k:"ex", h:"<p><b>Worked example — sale of an asset.</b> A machine bought on 1 April 2022 for ₹50,000 is depreciated at 10% a year on SLM and sold on 31 March 2025 for ₹32,000.</p><p>Depreciation for 3 years = 3 × 5,000 = 15,000. Book value = 50,000 − 15,000 = 35,000. Sale price 32,000 → <b>loss of ₹3,000</b>, debited to P&amp;L.</p>"},
  {k:"ex", h:"<p><b>Worked example — other methods.</b> <i>Sum of years' digits:</i> cost ₹60,000, no scrap, life 3 years; digits 3 + 2 + 1 = 6. Year 1 = 3/6 × 60,000 = 30,000; year 2 = 20,000; year 3 = 10,000.</p><p><i>Machine hour rate:</i> cost ₹1,00,000, scrap ₹10,000, life 30,000 hours → ₹3 an hour; 4,500 hours this year → <b>₹13,500</b>.</p><p><i>Depletion:</i> a mine bought for ₹20,00,000 holds 4,00,000 tonnes → ₹5 a tonne; 50,000 tonnes raised → ₹2,50,000.</p>"},
  {k:"trick", h:"Match the method to the asset: <b>“Mines Deplete, Tools Revalue, Leases Annuity, Machines run by the Hour”</b>."},
  {k:"trap", h:"<b>Freehold land</b> is not depreciated, but <b>leasehold</b> land is written off over the lease. A <b>provision</b> is a charge against profit (made even in a loss year); a <b>reserve</b> is an appropriation of profit. Depreciation is a <b>non-cash</b> expense — it does not take cash out of the business."}
], sum:["Depreciation is the gradual fall in the value of a fixed asset from use, time and obsolescence.","SLM: (cost − scrap) ÷ life, the same amount each year. WDV: fixed rate on book value, a falling amount; never zero.","Depletion — mines; revaluation — loose tools and livestock; annuity — leases; machine hour — machines.","Freehold land is not depreciated; intangibles are amortised.","Profit or loss on sale = sale price − book value on the date of sale.","Provision: charge against profit for a known liability; reserve: appropriation of profit.","Capital reserve comes from capital profits; secret reserve is hidden."]},

{id:"F7", heat:3, title:"Bills of exchange and promissory notes", hi:"विनिमय पत्र और प्रतिज्ञा पत्र", blocks:[
  {k:"hot", h:"Most asked: the <b>parties</b> to a bill, the <b>due date</b> with three days of grace, entries on <b>discounting, dishonour, renewal and retirement</b>, <b>noting charges</b>, and the difference between a <b>bill</b> and a <b>promissory note</b>."},
  {k:"story", h:"<p>Gopal sells cloth worth ₹20,000 to Hari, who will pay in three months. To make the debt firm, Gopal writes an order — a <b>bill of exchange</b> — telling Hari to pay ₹20,000 after three months. Hari signs it as 'accepted'. Gopal (the <b>drawer</b>) now holds a document he can keep till the due date, <b>discount</b> with his bank for cash today, or <b>endorse</b> to his own creditor. Hari (the <b>drawee</b>, now the <b>acceptor</b>) must pay on the due date, or the bill is <b>dishonoured</b>.</p><p>The law is the <b>Negotiable Instruments Act, 1881</b>: Section 4 defines a promissory note, Section 5 a bill of exchange and Section 6 a cheque.</p>", key:"Due date = date of drawing + term + 3 days of grace; a holiday pulls it one day earlier."},
  {k:"table", title:"Terms → meaning", head:["Term","Meaning","Note"], rows: FA_BILLTERM},
  {k:"table", title:"Bill of exchange and promissory note", head:["Point","Bill of exchange (Section 5)","Promissory note (Section 4)"], rows:[
    ["Contains","An unconditional order to pay","An unconditional promise to pay"],
    ["Parties","Three — drawer, drawee, payee (drawer and payee may be the same)","Two — maker and payee"],
    ["Acceptance","Needed (for a time bill)","Not needed — the maker himself promises"],
    ["Drawn by","The creditor","The debtor (maker)"],
    ["Payable to bearer","Yes, except one payable to bearer on demand","Not payable to bearer"],
    ["Notice of dishonour","Must be given to the drawer and endorsers","Not needed to the maker"]]},
  {k:"table", title:"Entries in the books of the drawer and the drawee", head:["Event","Drawer's books","Drawee's books"], rows:[
    ["Bill drawn and accepted","Bills receivable A/c Dr → To Drawee","Drawer Dr → To Bills payable A/c"],
    ["Bill discounted with the bank","Bank A/c Dr, Discount on bills A/c Dr → To Bills receivable A/c","No entry"],
    ["Bill endorsed to a creditor","Creditor Dr → To Bills receivable A/c","No entry"],
    ["Bill sent to the bank for collection","Bills sent for collection A/c Dr → To Bills receivable A/c","No entry"],
    ["Bill met at maturity (held by the drawer)","Bank A/c Dr → To Bills receivable A/c","Bills payable A/c Dr → To Bank A/c"],
    ["Bill dishonoured (held by the drawer), noting charges paid","Drawee Dr → To Bills receivable A/c, To Cash (noting charges)","Bills payable A/c Dr, Noting charges A/c Dr → To Drawer"],
    ["Bill dishonoured after discounting","Drawee Dr → To Bank A/c","Bills payable A/c Dr → To Drawer"],
    ["Bill dishonoured after endorsement","Drawee Dr → To Endorsee (creditor)","Bills payable A/c Dr → To Drawer"],
    ["Bill retired early with a rebate","Bank A/c Dr, Rebate on bills A/c Dr → To Bills receivable A/c","Bills payable A/c Dr → To Bank A/c, To Rebate on bills A/c"]]},
  {k:"ex", h:"<p><b>Worked example — due dates.</b> (a) Dated 15 January, payable 2 months after date: 15 March + 3 days = <b>18 March</b>. If 18 March is a public holiday, the bill is due on <b>17 March</b> (the preceding business day).</p><p>(b) Dated 10 March, payable 60 days after date: count 21 days in March (11–31), 30 in April (51), 9 in May (60) → 9 May; + 3 days = <b>12 May</b>.</p><p>(c) Dated 31 January 2025, payable 1 month after date: February has no 31st, so the term ends on 28 February; + 3 days = <b>3 March 2025</b>.</p>"},
  {k:"ex", h:"<p><b>Worked example — money on bills.</b> <i>Discounting:</i> a 3-month bill of ₹20,000 is discounted at once at 12% a year. Discount = 20,000 × 12% × 3/12 = ₹600; the bank pays <b>₹19,400</b>.</p><p><i>Dishonour:</i> a bill of ₹10,000 is dishonoured and noting charges are ₹100. The drawee now owes <b>₹10,100</b>.</p><p><i>Renewal:</i> the drawee of a ₹15,000 bill pays ₹5,000 in cash and accepts a new 3-month bill for the rest with interest at 12% a year. Interest = 10,000 × 12% × 3/12 = 300; new bill = <b>₹10,300</b>.</p><p><i>Retirement:</i> a ₹12,000 bill is paid 2 months early with a rebate at 6% a year. Rebate = 12,000 × 6% × 2/12 = ₹120; amount paid <b>₹11,880</b>.</p>"},
  {k:"trick", h:"<b>“DRAW-er is the cReditor, drawEE is the dEbtor”</b> — the creditor draws, the debtor accepts. For the due date: <b>term + 3</b>, and a holiday moves it <b>back</b> one day."},
  {k:"trap", h:"When a <b>discounted</b> bill is dishonoured, the drawer credits the <b>bank</b>, not Bills receivable (that account was already closed on discounting). <b>Noting charges</b> are paid by the holder but finally borne by the <b>drawee</b>. A bill payable <b>on demand</b> or <b>at sight</b> gets <b>no</b> days of grace."}
], sum:["Negotiable Instruments Act 1881: Section 4 promissory note, Section 5 bill of exchange, Section 6 cheque.","A bill is an unconditional order drawn by the creditor (drawer) on the debtor (drawee), who accepts it.","Due date = date of drawing + term + 3 days of grace; if that day is a public holiday, the preceding business day.","The holder may keep, discount, endorse or send the bill for collection.","On dishonour the drawee owes the bill amount plus noting charges.","Renewal: a new bill for the balance plus interest. Retirement: early payment less a rebate.","An accommodation bill is drawn without trade, only to raise funds."]}
);

QB.push(
["F6","Under the straight line method, the depreciation charged each year:",["Remains the same","Falls every year","Rises every year","Depends on the market price"],"SLM spreads the depreciable amount equally over the asset's life.",""],
["F6","Under the written down value method, the depreciation charged each year:",["Falls every year","Remains the same","Rises every year","Is nil after the third year"],"A fixed rate on a falling book value gives a falling charge.",""],
["F6","The written down value method is also called the:",["Reducing balance method","Fixed instalment method","Original cost method","Annuity method"],"It is also known as the reducing or diminishing balance method.",""],
["F6","The most suitable method of depreciation for a mine or quarry is the:",["Depletion method","Revaluation method","Annuity method","Straight line method"],"Depletion charges a fixed amount per tonne of mineral raised.",""],
["F6","Loose tools and livestock are usually depreciated by the:",["Revaluation method","Depletion method","Sum of years' digits method","Machine hour rate method"],"Their value is easier to find by valuing them each year.",""],
["F6","The annuity method of depreciation takes into account:",["Interest on the money invested in the asset","The market value of the asset","The number of hours the asset runs","The output of the asset"],"It treats the cost as an investment that should earn interest; it suits leases.",""],
["F6","Which of these assets is NOT depreciated?",["Freehold land","Leasehold land","Buildings","Patents"],"Freehold land does not wear out; leases and patents are written off over their life.",""],
["F6","Depreciation is:",["A charge against profit","An appropriation of profit","A capital receipt","A cash payment"],"It is an expense that must be charged whether there is profit or not.",""],
["F6","A machine costs ₹1,00,000 and ₹10,000 is spent on installing it. Its scrap value is ₹10,000 and its life 10 years. Annual depreciation on SLM is:",["₹10,000","₹11,000","₹9,000","₹12,000"],"(1,10,000 − 10,000) ÷ 10 = ₹10,000.",""],
["F6","A machine costing ₹2,00,000 is depreciated at 10% a year on WDV. Depreciation for the third year is:",["₹16,200","₹20,000","₹18,000","₹14,580"],"Year 1 20,000 (book value 1,80,000); year 2 18,000 (1,62,000); year 3 10% of 1,62,000 = ₹16,200.",""],
["F6","A machine costing ₹2,00,000 is depreciated at 10% a year on WDV. Its book value at the end of three years is:",["₹1,45,800","₹1,40,000","₹1,62,000","₹1,31,220"],"2,00,000 × 0.9 × 0.9 × 0.9 = ₹1,45,800.",""],
["F6","A machine bought for ₹50,000 is depreciated at 10% a year on SLM and sold after exactly three years for ₹32,000. The result of the sale is:",["A loss of ₹3,000","A profit of ₹3,000","A loss of ₹18,000","A profit of ₹7,000"],"Book value = 50,000 − 15,000 = 35,000; 32,000 − 35,000 = loss ₹3,000.",""],
["F6","An asset costs ₹60,000, has no scrap value and a life of 3 years. Under the sum of years' digits method, depreciation for the second year is:",["₹20,000","₹30,000","₹10,000","₹15,000"],"Digits total 6; year 2 = 2/6 × 60,000 = ₹20,000.",""],
["F6","A machine costs ₹1,00,000, has a scrap value of ₹10,000 and an expected life of 30,000 hours. It ran 4,500 hours this year. Depreciation by the machine hour rate method is:",["₹13,500","₹15,000","₹3,000","₹12,000"],"(1,00,000 − 10,000) ÷ 30,000 = ₹3 an hour × 4,500 = ₹13,500.",""],
["F6","A machine costs ₹80,000, has a scrap value of ₹8,000 and a life of 6 years. The rate of depreciation on original cost under SLM is:",["15%","16.67%","12%","13.5%"],"Annual charge = 72,000 ÷ 6 = 12,000; 12,000 ÷ 80,000 = 15%.",""],
["F6","A machine costing ₹1,20,000 is bought on 1 October 2025. Depreciation at 10% a year on SLM for the year ending 31 March 2026 is:",["₹6,000","₹12,000","₹3,000","₹9,000"],"Six months' depreciation: 1,20,000 × 10% × 6/12 = ₹6,000.",""],
["F6","A mine is bought for ₹20,00,000 and is expected to yield 4,00,000 tonnes. If 50,000 tonnes are raised this year, depletion is:",["₹2,50,000","₹5,00,000","₹4,00,000","₹2,00,000"],"₹5 a tonne × 50,000 tonnes = ₹2,50,000.",""],
["F6","Under which method does the book value of an asset never become zero?",["Written down value method","Straight line method","Sum of years' digits method","Depletion method"],"A percentage of a balance always leaves something behind.",""],
["F6","When the provision for depreciation method is used, the asset appears in the balance sheet at:",["Original cost, less the accumulated depreciation shown against it","Its market value","Book value only, with no cost shown","Replacement cost"],"The asset account stays at cost; the accumulated provision is deducted from it.",""],
["F6","The depreciation fund (sinking fund) method aims to:",["Provide money to replace the asset when it wears out","Value the asset at market price","Charge depreciation on hours worked","Write off intangible assets"],"The yearly charge is invested outside, and the investments are sold to buy a new asset.",""],
["F6","Obsolescence means a fall in the value of an asset because:",["Newer technology or changed demand has made it out of date","It is used every day","Its lease is running out","Its minerals are being extracted"],"An asset can be in good condition and still be obsolete.",""],
["F6","Writing off the cost of intangible assets such as patents is called:",["Amortisation","Depletion","Revaluation","Appreciation"],"Depletion is for wasting assets like mines; amortisation for intangibles.",""],
["F6","Which statement about provisions and reserves is correct?",["A provision is a charge against profit; a reserve is an appropriation of profit","Both are appropriations of profit","A reserve is made only in a loss year","A provision is made only when there is a profit"],"Provisions meet known liabilities or losses; reserves are profits kept back.",""],
["F6","A capital reserve is created out of:",["Capital profits, such as profit on the sale of fixed assets","Revenue profits of the year","Provision for doubtful debts","Depreciation charged"],"Capital reserves come from profits of a capital nature.",""],
["F6","A secret reserve can be created by:",["Charging excessive depreciation","Showing a general reserve in the balance sheet","Declaring a dividend","Making a provision for taxation"],"Undervaluing assets hides part of the profit — a secret reserve.",""],
["F6","Under AS 10 (Revised), a change in the method of depreciation is treated as a:",["Change in accounting estimate, applied from then on","Change in accounting policy applied to past years","Prior period item","Extraordinary item"],"The revised AS 10 treats it as a change in estimate.",""],
["F6","The WDV rate of depreciation is found by the formula:",["1 − (scrap value ÷ cost)^(1/n)","(Cost − scrap value) ÷ n","Cost ÷ n","(Scrap value ÷ cost) × n"],"This rate brings the cost down to the scrap value in n years.",""],

["F7","A bill of exchange is drawn by the:",["Creditor","Debtor","Bank","Notary public"],"The creditor (drawer) orders the debtor to pay.",""],
["F7","The person who accepts a bill of exchange is the:",["Drawee","Drawer","Payee","Endorsee"],"The drawee accepts it and becomes the acceptor.",""],
["F7","How many days of grace are allowed on a time bill?",["Three","Two","Five","Seven"],"Section 22 of the Negotiable Instruments Act allows three days of grace.",""],
["F7","Which section of the Negotiable Instruments Act, 1881 defines a bill of exchange?",["Section 5","Section 4","Section 6","Section 13"],"Section 4 defines a promissory note, Section 5 a bill and Section 6 a cheque.",""],
["F7","A bill dated 15 January is payable 2 months after date. Its due date is:",["18 March","15 March","17 March","18 February"],"15 March + 3 days of grace = 18 March.",""],
["F7","A bill dated 10 March is payable 60 days after date. Its due date is:",["12 May","9 May","10 May","13 May"],"60 days from 10 March is 9 May; with 3 days of grace, 12 May.",""],
["F7","A bill dated 1 January 2026 is payable 90 days after date. Its due date is:",["4 April 2026","1 April 2026","3 April 2026","2 April 2026"],"90 days from 1 January is 1 April (30 + 28 + 31 + 1); with grace, 4 April.",""],
["F7","A bill falls due on a public holiday. It is payable on the:",["Preceding business day","Next business day","Same day, whatever happens","Seventh day after"],"Section 25 of the NI Act moves it to the preceding business day.",""],
["F7","A bill dated 31 January 2025 is payable 1 month after date. Its due date is:",["3 March 2025","3 February 2025","28 February 2025","4 March 2025"],"The month ends on 28 February; adding 3 days of grace gives 3 March.",""],
["F7","Days of grace are NOT allowed on a bill payable:",["On demand","Three months after date","Ninety days after date","Two months after sight"],"Bills on demand or at sight are paid when presented.",""],
["F7","A 3-month bill of ₹20,000 is discounted at once with a bank at 12% a year. The bank pays:",["₹19,400","₹19,760","₹17,600","₹20,000"],"Discount = 20,000 × 12% × 3/12 = 600; 20,000 − 600 = ₹19,400.",""],
["F7","Noting charges on a dishonoured bill are finally borne by the:",["Drawee","Drawer","Bank","Notary public"],"The holder pays them first and recovers them from the drawee, who caused the dishonour.",""],
["F7","A bill held by the drawer is dishonoured and noting charges of ₹100 are paid. The amount debited to the drawee for a ₹10,000 bill is:",["₹10,100","₹10,000","₹9,900","₹100"],"Bill amount plus noting charges.",""],
["F7","When a discounted bill is dishonoured, the drawer's entry is:",["Drawee Dr, To Bank A/c","Drawee Dr, To Bills receivable A/c","Bank A/c Dr, To Drawee","Bills receivable A/c Dr, To Bank A/c"],"Bills receivable was closed on discounting; the bank recovers the amount from the drawer.",""],
["F7","The drawee of a ₹15,000 bill pays ₹5,000 in cash and accepts a new 3-month bill for the balance with interest at 12% a year. The new bill is for:",["₹10,300","₹10,000","₹15,450","₹10,600"],"Interest = 10,000 × 12% × 3/12 = 300; new bill ₹10,300.",""],
["F7","A bill of ₹12,000 is retired 2 months before its due date with a rebate of 6% a year. The drawee pays:",["₹11,880","₹11,280","₹12,000","₹11,760"],"Rebate = 12,000 × 6% × 2/12 = 120; 12,000 − 120 = ₹11,880.",""],
["F7","A bill drawn without any trade transaction, only to help a party raise money, is a(n):",["Accommodation bill","Trade bill","Demand bill","Foreign bill"],"Accommodation bills help a friend obtain funds by discounting.",""],
["F7","In a promissory note, the person who promises to pay is the:",["Maker","Drawer","Drawee","Endorser"],"A promissory note has two parties: the maker and the payee.",""],
["F7","Which of these needs acceptance?",["A time bill of exchange","A promissory note","A cash memo","A receipt"],"A promissory note is signed by the debtor himself; a bill must be accepted by the drawee.",""],
["F7","Transferring a bill to another person by signing on its back is called:",["Endorsement","Noting","Retirement","Discounting"],"The person who signs is the endorser; the receiver is the endorsee.",""],
["F7","On accepting a bill, the drawee records it in the:",["Bills payable book","Bills receivable book","Sales book","Purchases book"],"For the drawee it is a liability — bills payable.",""],
["F7","When a bill is received from a debtor, the drawer passes the entry:",["Bills receivable A/c Dr, To Drawee","Drawee Dr, To Bills receivable A/c","Bills payable A/c Dr, To Drawee","Cash A/c Dr, To Bills receivable A/c"],"The bill (an asset) comes in and the debtor's account is cleared.",""],
["F7","A formal certificate of dishonour issued by a notary public is called a:",["Protest","Noting","Retirement","Renewal"],"Noting records the fact; the protest is the certificate based on it.",""],
["F7","A bill is sent to the bank for collection. The drawer debits:",["Bills sent for collection account","Bank account","Drawee's account","Bills payable account"],"The bill is with the bank but not yet paid.",""],
["F7","A bill of exchange must contain:",["An unconditional order to pay a certain sum","A conditional promise to pay","An order to deliver goods","A promise to pay any sum the drawee chooses"],"The order must be unconditional and the sum certain.",""],
["F7","For a bill payable 'three months after sight', the term is counted from the date of:",["Acceptance (or presentment for sight)","Drawing","Despatch of the goods","Endorsement"],"An after-sight bill runs from the date the drawee sees and accepts it.",""]
);

LASTMOMENT.push(
{t:"Depreciation methods", era:["fa"], rows:[["SLM","Same amount yearly"],["WDV","Same rate, falling amount"],["Mines","Depletion"],["Loose tools","Revaluation"],["Leases","Annuity"],["Land (freehold)","Not depreciated"]]},
{t:"Bills in a minute", era:["fa"], rows:[["Drawer","Creditor"],["Drawee","Debtor (acceptor)"],["Grace","3 days; holiday → day before"],["NI Act","S4 note, S5 bill, S6 cheque"],["Discounted bill dishonoured","Drawee Dr, To Bank"],["Noting charges","Borne by the drawee"]]}
);
TILES.push(["1881","Negotiable Instruments Act","fa"],["3","Days of grace on a bill","fa"]);

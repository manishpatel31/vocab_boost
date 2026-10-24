/* Part 1 · F1 the symbols of the state (flag, emblem, anthem, song, calendar, ₹, pledge) and F2 the living symbols
   (animal, bird, flower, tree, fruit, river, aquatic and heritage animal, microbe) and the ones that were never declared.
   Facts that changed recently (Vande Mataram's six-stanza order of January 2026, the 2026 amendment bill) are as of October 2026. */

/* The national flag, drawn to the Flag Code's 2:3 proportions with the 24-spoke Ashoka Chakra. */
const FLAG_SVG = (() => {
  const cx = 150, cy = 100, r = 28, sp = [];
  for (let i = 0; i < 24; i++) { const a = i * Math.PI / 12; sp.push(`<line x1="${cx}" y1="${cy}" x2="${(cx + r * Math.cos(a)).toFixed(1)}" y2="${(cy + r * Math.sin(a)).toFixed(1)}"/>`); }
  return `<svg viewBox="0 0 300 200" role="img" aria-label="The national flag of India: saffron, white and green bands with a navy-blue Ashoka Chakra of 24 spokes">` +
    `<rect width="300" height="66.67" fill="#FF9933"/><rect y="66.67" width="300" height="66.67" fill="#FFFFFF"/><rect y="133.33" width="300" height="66.67" fill="#138808"/>` +
    `<g stroke="#000080" fill="none"><circle cx="${cx}" cy="${cy}" r="${r}" stroke-width="2.6"/><circle cx="${cx}" cy="${cy}" r="3.2" fill="#000080"/><g stroke-width="1.1">${sp.join("")}</g></g>` +
    `<rect width="300" height="200" fill="none" stroke="var(--rule)" stroke-width="1.5"/></svg>`;
})();

/* Who wrote or designed each symbol — the Lab's "Who made it?" deck reads this table. */
const F1W = [
  ["The national anthem, Jana Gana Mana","Rabindranath Tagore","Written in Bengali; first sung on 27 December 1911."],
  ["The national song, Vande Mataram","Bankim Chandra Chattopadhyay","Part of the novel Anandamath (1882)."],
  ["The flag on which the tricolour is based","Pingali Venkayya","He showed Gandhi a flag at the Bezwada (Vijayawada) Congress session, 1921."],
  ["The rupee symbol ₹","D. Udaya Kumar","Chosen in 2010 from public entries."],
  ["The National Pledge","Pydimarri Venkata Subba Rao","Written in Telugu in 1962."],
  ["The report behind the national calendar","Meghnad Saha","He headed the Calendar Reform Committee (1952)."],
  ["The English 'Morning Song of India'","Rabindranath Tagore","His own translation of Jana Gana Mana, made at Madanapalle in 1919."]
];

LESSONS.push(
{id:"F1", heat:3, title:"Symbols of the state: flag, emblem, anthem, song, calendar and ₹", hi:"राज्य के प्रतीक: ध्वज, प्रतीक, गान, गीत, पंचांग और ₹", blocks:[
  {k:"hot", h:"Most asked: the flag's <b>adoption date (22 July 1947)</b>, <b>ratio (2:3)</b> and <b>24 spokes</b>; the emblem's source (<b>Sarnath</b>) and motto (<b>Satyameva Jayate</b>, from the <b>Mundaka Upanishad</b>); the anthem's author, <b>first singing (1911)</b>, <b>adoption (24 January 1950)</b> and <b>52 seconds</b>; <b>Vande Mataram</b> and <b>Anandamath</b>; the <b>Saka</b> calendar; and the <b>₹ designer</b>."},
  {k:"story", h:"<p>A new country needs symbols everyone can recognise. India chose them in the months around freedom. On <b>22 July 1947</b> the Constituent Assembly adopted the <b>tricolour</b> — saffron, white and green, with the blue <b>Ashoka Chakra</b> of <b>24 spokes</b> in place of the spinning wheel of the 1931 Swaraj flag. On <b>24 January 1950</b>, its last sitting, the Assembly adopted <b>Jana Gana Mana</b> as the national anthem and gave <b>Vande Mataram</b> equal honour as the national song. Two days later, on <b>26 January 1950</b>, the <b>State Emblem</b> — the lions of Ashoka's pillar at <b>Sarnath</b> — came into use with the motto <b>Satyameva Jayate</b>.</p><p>Later came the <b>Saka calendar</b> (1957), drawn up after Meghnad Saha's committee, and the <b>₹ sign</b> (2010), designed by D. Udaya Kumar. In 2025–26 the national song was in the news again: its <b>150th year</b> was marked from 7 November 2025, and in January 2026 the Home Ministry set the full <b>six-stanza</b> version (about 3 minutes 10 seconds) for official use.</p>",
    key:"Flag 22 July 1947 · anthem and song 24 January 1950 · emblem 26 January 1950 · calendar 22 March 1957 · ₹ 2010."},
  {k:"fig", title:"The tricolour, drawn to scale", svg: FLAG_SVG, cap:"Width to length 2:3. Saffron on top, white in the middle with the navy-blue Ashoka Chakra (24 spokes), India green at the bottom."},
  {k:"facts", title:"The national flag", rows:[
    ["Adopted","22 July 1947, by the Constituent Assembly"],
    ["Colours","Saffron on top (courage and sacrifice), white in the middle (truth and peace), green at the bottom (faith, fertility and growth)"],
    ["Wheel","The navy-blue Ashoka Chakra (Dharma Chakra) with 24 spokes, on the white band — taken from the Sarnath Lion Capital"],
    ["Ratio","Width to length 2:3"],
    ["Based on","The flag designed by Pingali Venkayya; the 1931 Swaraj flag had a spinning wheel (charkha) where the Chakra now is"],
    ["Rules","The Flag Code of India, 2002 (in force from 26 January 2002); amended in December 2021 (machine-made and polyester flags allowed) and July 2022 (flags in the open or on homes may fly day and night)"],
    ["Law","The Prevention of Insults to National Honour Act, 1971; the Emblems and Names (Prevention of Improper Use) Act, 1950"],
    ["Court","Union of India v. Naveen Jindal (2004): flying the flag with respect is part of freedom of expression, Article 19(1)(a)"]]},
  {k:"tl", title:"How the flag grew", rows:[
    ["1906","A flag with green, yellow and red bands is hoisted on 7 August at Parsee Bagan Square, Calcutta"],
    ["1907","Bhikaiji Cama unfurls an Indian flag at the International Socialist Congress in Stuttgart"],
    ["1921","Pingali Venkayya shows Gandhi a red-and-green flag at the Bezwada Congress session; white and the charkha are added"],
    ["1931","The Congress adopts the Swaraj flag — saffron, white, green and a charkha"],
    ["1947","22 July: the Constituent Assembly adopts the tricolour with the Ashoka Chakra"],
    ["2002","The Flag Code of India lets citizens fly the flag on all days"]]},
  {k:"facts", title:"The State Emblem", rows:[
    ["Source","The Lion Capital of Ashoka at Sarnath (near Varanasi), about 250 BCE — now in the Sarnath Museum"],
    ["Adopted","26 January 1950"],
    ["What you see","Three of the four lions (the fourth is hidden behind); below them a wheel in the centre, a bull on the right and a horse on the left"],
    ["Left out","The bell-shaped lotus under the abacus"],
    ["Motto","Satyameva Jayate ('Truth alone triumphs'), from the Mundaka Upanishad, written in Devanagari below"],
    ["Law","The State Emblem of India (Prohibition of Improper Use) Act, 2005"]]},
  {k:"facts", title:"The national anthem and the national song", rows:[
    ["Anthem","Jana Gana Mana, by Rabindranath Tagore, in Sanskritised Bengali — the first of the five stanzas of his song 'Bharoto Bhagyo Bidhata'"],
    ["First sung","27 December 1911, at the Calcutta session of the Indian National Congress"],
    ["Adopted","24 January 1950, by the Constituent Assembly"],
    ["Playing time","Full version about 52 seconds; short version (first and last lines) about 20 seconds"],
    ["Also by Tagore","Bangladesh's anthem, Amar Shonar Bangla; and the English version of Jana Gana Mana, 'The Morning Song of India' (1919)"],
    ["National song","Vande Mataram, by Bankim Chandra Chattopadhyay — written around 7 November 1875, later part of the novel Anandamath (1882)"],
    ["First sung at the Congress","By Rabindranath Tagore, at the 1896 Calcutta session"],
    ["Equal honour","Announced by Rajendra Prasad in the Constituent Assembly, 24 January 1950"],
    ["In the news (2025–26)","150 years marked from 7 November 2025; a Home Ministry order of 28 January 2026 made all six stanzas (about 3 min 10 s) the official version, sung before the anthem at official functions; in July 2026 Parliament passed a bill bringing the song under the 1971 Act"]]},
  {k:"facts", title:"The calendar, the ₹ sign and the pledge", rows:[
    ["National calendar","The Saka calendar, used officially from 22 March 1957 (1 Chaitra 1879 Saka), alongside the Gregorian calendar"],
    ["Its year","Counts from the Saka era of 78 CE; 365 days; the first month is Chaitra, which begins on 22 March (21 March in a leap year)"],
    ["Who planned it","The Calendar Reform Committee under Meghnad Saha (1952)"],
    ["The ₹ sign","Adopted on 15 July 2010; designed by D. Udaya Kumar; joins the Devanagari 'र' (ra) with the Roman 'R', with two lines across the top"],
    ["The pledge","'India is my country…' — written in Telugu by Pydimarri Venkata Subba Rao in 1962, first read in a school in Visakhapatnam in 1963"]]},
  {k:"table", title:"Who wrote or designed it", head:["Symbol","Who","Note"], rows: F1W.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Dates in one line — <b>“Flag in July, Song and Anthem on the 24th, Emblem on the 26th”</b>: 22 July 1947 → 24 January 1950 → 26 January 1950. The anthem is <b>52</b> seconds — think of the <b>52</b> weeks of a year; the short version is <b>20</b>."},
  {k:"trap", h:"<b>Satyameva Jayate</b> is from the <b>Mundaka</b> Upanishad — not the Mandukya or the Katha. The emblem shows <b>three</b> lions, though the capital has four. The flag's <b>ratio is 2:3</b> (width to length) — not 1:2 or 3:4. <b>Jana Gana Mana</b> is Tagore's, <b>Vande Mataram</b> Bankim's — and Tagore was the first to sing Vande Mataram at a Congress session (1896)."}
], sum:["Flag adopted 22 July 1947; ratio 2:3; Ashoka Chakra in navy blue with 24 spokes; based on Pingali Venkayya's design.","Flag Code of India, 2002; polyester allowed (2021); flags may fly day and night (2022).","State Emblem from the Sarnath Lion Capital, adopted 26 January 1950; motto Satyameva Jayate from the Mundaka Upanishad.","Jana Gana Mana by Tagore: first sung 27 December 1911, adopted 24 January 1950, 52 seconds (short version 20).","Vande Mataram by Bankim Chandra (Anandamath); equal honour 24 January 1950; six stanzas, about 3 min 10 s, under the 2026 order.","Saka calendar from 22 March 1957 (Meghnad Saha committee); ₹ sign 2010 by D. Udaya Kumar; pledge by P. V. Subba Rao (1962)."]},

{id:"F2", heat:2, title:"Living symbols: animal, bird, flower, tree, fruit, river and more", hi:"जीवित प्रतीक: पशु, पक्षी, पुष्प, वृक्ष, फल, नदी और अन्य", blocks:[
  {k:"hot", h:"Most asked: the national <b>animal (tiger)</b>, <b>bird (Indian peafowl)</b>, <b>flower (lotus)</b>, <b>tree (banyan)</b>, <b>fruit (mango)</b>, <b>river (Ganga)</b>, <b>aquatic animal (Ganges river dolphin)</b> and <b>heritage animal (elephant)</b> — with their scientific names — and the trick question: <b>India has no official national game</b>."},
  {k:"story", h:"<p>Besides the symbols of the state, India has symbols from nature. The <b>tiger</b> replaced the lion as the national animal in the early 1970s, when tigers were vanishing and <b>Project Tiger</b> began (1973). The <b>Indian peafowl</b> became the national bird in <b>1963</b>; the <b>lotus</b>, the <b>banyan</b> and the <b>mango</b> stand for the flower, tree and fruit.</p><p>Newer ones followed. The <b>Ganga</b> was declared the national river in <b>2008</b>, and in <b>2009</b> the <b>Ganges river dolphin</b> — almost blind, finding its food by echo — became the national aquatic animal. In <b>2010</b> the <b>elephant</b> was named the national heritage animal. In <b>2012</b> schoolchildren voting on the Science Express train picked <b>Lactobacillus</b>, the bacterium that sets curd, as the national microbe. And some 'national' things were never declared at all — there is <b>no national game</b>, whatever many quiz books say about hockey.</p>",
    key:"Tiger, peafowl, lotus, banyan, mango, Ganga, dolphin (2009), elephant (2010), Lactobacillus (2012) — and no national game."},
  {k:"table", title:"National symbols from nature", head:["Symbol","What it is","Note"], rows:[
    ["National animal","Tiger (<i>Panthera tigris</i>)","Took the lion's place in the early 1970s; Project Tiger began in 1973."],
    ["National bird","Indian peafowl (<i>Pavo cristatus</i>)","Declared in 1963; protected under Schedule I of the Wildlife (Protection) Act, 1972."],
    ["National flower","Lotus (<i>Nelumbo nucifera</i>)","A sacred flower that rises clean from muddy water."],
    ["National tree","Banyan (<i>Ficus benghalensis</i>)","Its aerial roots grow into new trunks, so one tree can spread very wide."],
    ["National fruit","Mango (<i>Mangifera indica</i>)","India grows more mangoes than any other country."],
    ["National river","Ganga","Declared in November 2008, when the National Ganga River Basin Authority was set up."],
    ["National aquatic animal","Ganges river dolphin (<i>Platanista gangetica</i>)","Declared on 5 October 2009 — now National Dolphin Day; locally the 'susu'."],
    ["National heritage animal","Indian elephant","Named in 2010 to raise its protection; Project Elephant runs since 1992."],
    ["National microbe","<i>Lactobacillus delbrueckii</i> subsp. <i>bulgaricus</i>","Chosen by children in 2012; it turns milk into curd and yogurt."]]},
  {k:"facts", title:"Not declared — the trick questions", rows:[
    ["National game","None. The Sports Ministry said in RTI replies (2012, 2020) that no game has been declared; hockey is only linked with India through its eight Olympic golds"],
    ["National reptile","Not officially notified; guide books often give the king cobra"],
    ["Others you may see","'National vegetable', 'national sweet' and the like have no official status"]]},
  {k:"facts", title:"Laws that protect the living symbols", rows:[
    ["Wildlife (Protection) Act, 1972","Tiger, peafowl, elephant and Ganges river dolphin are all in Schedule I — the highest protection"],
    ["Project Tiger","1973 — run by the National Tiger Conservation Authority since 2006"],
    ["Project Elephant","1992"],
    ["National Dolphin Day","5 October (from 2022) — the day the dolphin was declared in 2009"]]},
  {k:"trick", h:"In order — animal, bird, flower, tree, fruit: <b>“The Peacock Likes Big Mangoes”</b> = <b>T</b>iger, <b>P</b>eacock, <b>L</b>otus, <b>B</b>anyan, <b>M</b>ango. Then the 'water-and-heritage' trio in date order — <b>Ganga 2008, Dolphin 2009, Elephant 2010</b>."},
  {k:"trap", h:"The <b>lion</b> was the national animal <b>before</b> the tiger. The <b>aquatic</b> animal is the <b>dolphin</b>, the <b>heritage</b> animal the <b>elephant</b> — don't swap them. <b>Hockey is not the official national game</b>: India has none. <b>Ficus religiosa</b> is the peepal — the national tree is <b>Ficus benghalensis</b>, the banyan."}
], sum:["Animal tiger (Panthera tigris); bird Indian peafowl (Pavo cristatus, 1963); flower lotus (Nelumbo nucifera).","Tree banyan (Ficus benghalensis); fruit mango (Mangifera indica).","River Ganga (2008); aquatic animal Ganges river dolphin (5 October 2009); heritage animal elephant (2010).","Microbe Lactobacillus delbrueckii subsp. bulgaricus (2012, chosen by children).","No official national game, and no notified national reptile."]}
);

QB.push(
["F1","The Constituent Assembly adopted the national flag on:",["22 July 1947","15 August 1947","26 January 1950","24 January 1950"],"The tricolour was adopted on 22 July 1947, three weeks before independence.",""],
["F1","What is the ratio of the width to the length of the national flag?",["2:3","1:2","3:4","1:1"],"The Flag Code fixes the flag as a rectangle whose width and length are in the ratio 2:3.",""],
["F1","How many spokes does the Ashoka Chakra on the national flag have?",["24","22","32","12"],"The Chakra on the white band has 24 spokes, like the wheel on the Sarnath capital.",""],
["F1","What colour is the Ashoka Chakra on the national flag?",["Navy blue","Black","Sky blue","Dark green"],"The Chakra is printed in navy blue on the white band.",""],
["F1","Which colour is the top band of the national flag?",["Saffron","India green","White","Navy blue"],"Saffron is on top, white in the middle and green at the bottom.",""],
["F1","The national flag is based on a flag designed by:",["Pingali Venkayya","Bhikaiji Cama","Sister Nivedita","Annie Besant"],"Pingali Venkayya's design, shown to Gandhi in 1921, grew into the Swaraj flag and then the tricolour.",""],
["F1","In the Swaraj flag of 1931, what stood where the Ashoka Chakra stands today?",["A spinning wheel (charkha)","A lotus","A lion","A crescent and a star"],"The Swaraj flag had a charkha; in 1947 it was replaced by the Ashoka Chakra.",""],
["F1","The Flag Code of India came into force on:",["26 January 2002","15 August 1947","26 January 1950","15 August 2002"],"The Flag Code of India, 2002 took effect on 26 January 2002 and let citizens fly the flag on all days.",""],
["F1","What did the December 2021 amendment to the Flag Code allow?",["Machine-made flags of polyester as well as khadi","Flying the flag upside down on festivals","A flag ratio of 1:2","A Chakra with 32 spokes"],"Since December 2021 the flag may be machine-made and of polyester, cotton, wool, silk or khadi.",""],
["F1","Since an amendment of July 2022, a flag flown in the open or on a home:",["May be flown day and night","Must be lowered by noon","May be flown only on national days","Must be made of silk"],"Before 2022 the flag could fly only from sunrise to sunset.",""],
["F1","In which case did the Supreme Court hold that flying the national flag with respect is part of freedom of expression?",["Naveen Jindal case (2004)","Bijoe Emmanuel case (1986)","Kesavananda Bharati case (1973)","Maneka Gandhi case (1978)"],"Union of India v. Naveen Jindal (2004) tied the right to fly the flag to Article 19(1)(a).",""],
["F1","Which law punishes insulting the national flag or the national anthem?",["Prevention of Insults to National Honour Act, 1971","Official Secrets Act, 1923","Indian Flag Act, 1947","Representation of the People Act, 1951"],"The 1971 Act punishes insults to the flag, the Constitution and the anthem with up to three years in jail.",""],
["F1","Where was a flag with green, yellow and red bands hoisted on 7 August 1906?",["Parsee Bagan Square, Calcutta","Stuttgart, Germany","Lahore","Bombay"],"This is often called India's first national flag; it was hoisted at Parsee Bagan Square (Green Park), Calcutta.",""],
["F1","Bhikaiji Cama unfurled an Indian flag in 1907 at:",["Stuttgart","London","Paris","Geneva"],"She raised it at the International Socialist Congress in Stuttgart, Germany.",""],
["F1","The State Emblem of India is adapted from the Lion Capital of Ashoka at:",["Sarnath","Sanchi","Rampurva","Vaishali"],"The capital was found at Sarnath, near Varanasi, and is kept in the Sarnath Museum.",""],
["F1","The State Emblem was adopted on:",["26 January 1950","15 August 1947","22 July 1947","24 January 1950"],"The emblem came into use on the day the Constitution came into force.",""],
["F1","The motto 'Satyameva Jayate' on the State Emblem comes from the:",["Mundaka Upanishad","Mandukya Upanishad","Katha Upanishad","Rig Veda"],"The words mean 'Truth alone triumphs' and come from the Mundaka Upanishad.",""],
["F1","In which script is 'Satyameva Jayate' written on the State Emblem?",["Devanagari","Brahmi","Kharosthi","Roman"],"The motto is written in Devanagari below the abacus.",""],
["F1","How many lions can be seen in the State Emblem as it is drawn?",["Three","Four","Two","One"],"The capital has four lions back to back, but only three show in the drawing.",""],
["F1","Which two animals flank the wheel on the abacus of the State Emblem as it is drawn?",["A bull and a horse","An elephant and a lion","A bull and an elephant","A horse and a lion"],"A bull is on the right and a horse on the left; the elephant and lion of the full abacus are out of view.",""],
["F1","Which part of the Sarnath capital is left out of the State Emblem?",["The bell-shaped lotus","The lions","The wheel","The horse"],"The inverted lotus under the abacus is not shown in the emblem.",""],
["F1","Improper use of the State Emblem is barred by the:",["State Emblem of India (Prohibition of Improper Use) Act, 2005","Flag Code of India, 2002","Indian Copyright Act, 1957","Trade Marks Act, 1999"],"The 2005 Act controls who may use the emblem and how.",""],
["F1","Jana Gana Mana was first sung on 27 December 1911 at the:",["Calcutta session of the Indian National Congress","Lahore session of the Indian National Congress","first meeting of the Constituent Assembly","Delhi Durbar"],"It was sung on the second day of the Congress session at Calcutta.",""],
["F1","The Constituent Assembly adopted Jana Gana Mana as the national anthem on:",["24 January 1950","26 January 1950","15 August 1947","26 November 1949"],"It was adopted on 24 January 1950, the Assembly's last sitting.",""],
["F1","How long does the full version of the national anthem take to play?",["About 52 seconds","About 20 seconds","About 65 seconds","About 3 minutes"],"The full anthem takes about 52 seconds; the short version about 20.",""],
["F1","The short version of the national anthem — its first and last lines — takes about:",["20 seconds","52 seconds","10 seconds","35 seconds"],"The short version is played on some occasions and takes about 20 seconds.",""],
["F1","Jana Gana Mana was first written in:",["Bengali","Hindi","Sanskrit","Urdu"],"Tagore wrote it in a highly Sanskritised Bengali.",""],
["F1","The national anthem is the first stanza of a song that has how many stanzas?",["Five","Three","Six","Two"],"Tagore's song 'Bharoto Bhagyo Bidhata' has five stanzas; the first is the anthem.",""],
["F1","Tagore's own English translation of Jana Gana Mana is called:",["The Morning Song of India","Song Offerings","The Home and the World","Where the Mind is Without Fear"],"He made it at Madanapalle in 1919.",""],
["F1","Besides India's, Rabindranath Tagore wrote the national anthem of:",["Bangladesh","Nepal","Bhutan","Myanmar"],"Bangladesh's anthem, Amar Shonar Bangla, is also by Tagore.",""],
["F1","Vande Mataram, the national song, was written by:",["Bankim Chandra Chattopadhyay","Rabindranath Tagore","Muhammad Iqbal","Subramania Bharati"],"Bankim Chandra wrote it around 1875 and placed it in his novel Anandamath.",""],
["F1","Vande Mataram appears in which novel?",["Anandamath","Durgeshnandini","Kapalkundala","Gora"],"Anandamath (1882) is Bankim Chandra's novel; Gora is by Tagore.",""],
["F1","Who sang Vande Mataram at the Calcutta session of the Indian National Congress in 1896?",["Rabindranath Tagore","Bankim Chandra Chattopadhyay","Sarojini Naidu","Aurobindo Ghosh"],"Tagore sang it at the 1896 session — the first time it was sung at a Congress session.",""],
["F1","Who announced in the Constituent Assembly that Vande Mataram would be honoured equally with Jana Gana Mana?",["Rajendra Prasad","Jawaharlal Nehru","B. R. Ambedkar","Vallabhbhai Patel"],"Rajendra Prasad, as President of the Assembly, made the statement on 24 January 1950.",""],
["F1","Under the Home Ministry's order of January 2026, the full official version of Vande Mataram has how many stanzas?",["Six","Two","Four","Five"],"The order of 28 January 2026 made all six stanzas the official version.",""],
["F1","About how long does the six-stanza official version of Vande Mataram take?",["3 minutes 10 seconds","52 seconds","65 seconds","1 minute 30 seconds"],"The January 2026 order gives a playing time of about 3 minutes 10 seconds.",""],
["F1","The year-long celebration of 150 years of Vande Mataram began on:",["7 November 2025","15 August 2025","26 January 2025","24 January 2026"],"It ran from 7 November 2025 to 7 November 2026; the song is dated to 7 November 1875.",""],
["F1","In July 2026 Parliament passed a bill to bring which symbol under the Prevention of Insults to National Honour Act?",["The national song","The national calendar","The national flower","The National Pledge"],"The bill gives Vande Mataram the protection the anthem already had.",""],
["F1","India's national calendar is based on the:",["Saka era","Vikram Samvat","Hijri era","Gupta era"],"The national calendar counts years from the Saka era of 78 CE.",""],
["F1","The Saka calendar came into official use on:",["22 March 1957","26 January 1950","15 August 1947","1 April 1957"],"It began on 1 Chaitra 1879 Saka, which was 22 March 1957.",""],
["F1","The first month of the national (Saka) calendar is:",["Chaitra","Vaisakha","Kartika","Phalguna"],"Chaitra begins on 22 March, or 21 March in a leap year.",""],
["F1","The Saka era, used by the national calendar, began in:",["78 CE","57 BCE","320 CE","622 CE"],"57 BCE starts the Vikram Samvat, 320 CE the Gupta era and 622 CE the Hijri era.",""],
["F1","The Calendar Reform Committee of 1952 was headed by:",["Meghnad Saha","C. V. Raman","Homi J. Bhabha","S. N. Bose"],"The astrophysicist Meghnad Saha's committee shaped the national calendar.",""],
["F1","The rupee symbol ₹ was designed by:",["D. Udaya Kumar","Pingali Venkayya","Satish Gujral","Nandalal Bose"],"Udaya Kumar's entry was chosen in 2010; Nandalal Bose decorated the Constitution.",""],
["F1","In which year was the rupee symbol ₹ adopted?",["2010","2008","2012","2016"],"The Union Cabinet approved it on 15 July 2010.",""],
["F1","The ₹ sign joins the Roman letter R with the Devanagari letter:",["र (ra)","प (pa)","क (ka)","भ (bha)"],"It blends 'र' and 'R'; the two lines at the top recall the tricolour and an equals sign.",""],
["F1","India's National Pledge ('India is my country…') was written in 1962 by:",["Pydimarri Venkata Subba Rao","Rabindranath Tagore","P. V. Narasimha Rao","Sri Aurobindo"],"Pydimarri Venkata Subba Rao wrote it in Telugu; it was first read in a Visakhapatnam school in 1963.",""],

["F2","What is the national animal of India?",["Tiger","Asiatic lion","Indian elephant","One-horned rhinoceros"],"The tiger (Panthera tigris) is the national animal.",""],
["F2","Which animal was India's national animal before the tiger?",["Asiatic lion","Indian elephant","Blackbuck","Snow leopard"],"The lion held the place until the early 1970s, when the tiger replaced it.",""],
["F2","Pavo cristatus, India's national bird, is better known as the:",["Indian peafowl","Great Indian bustard","Sarus crane","House sparrow"],"Pavo cristatus is the Indian peafowl, or peacock.",""],
["F2","In which year was the Indian peafowl declared the national bird?",["1963","1950","1972","1947"],"The peafowl was declared the national bird in 1963.",""],
["F2","Under which Schedule of the Wildlife (Protection) Act, 1972 is the peafowl protected?",["Schedule I","Schedule II","Schedule III","Schedule IV"],"Schedule I gives the highest protection; the tiger, elephant and Ganges river dolphin are in it too.",""],
["F2","India's national flower is the:",["Lotus","Rose","Marigold","Jasmine"],"The lotus (Nelumbo nucifera) is the national flower.",""],
["F2","Nelumbo nucifera is the scientific name of India's national:",["Flower","Tree","Fruit","Microbe"],"Nelumbo nucifera is the lotus.",""],
["F2","India's national tree is the:",["Banyan","Peepal","Neem","Ashoka"],"The banyan (Ficus benghalensis) is the national tree.",""],
["F2","Ficus benghalensis is the scientific name of the:",["Banyan","Peepal","Mango","Teak"],"Ficus benghalensis is the banyan; the peepal is Ficus religiosa.",""],
["F2","India's national fruit is the:",["Mango","Jackfruit","Banana","Pomegranate"],"The mango (Mangifera indica) is the national fruit.",""],
["F2","Mangifera indica is the scientific name of India's national:",["Fruit","Tree","Flower","Bird"],"Mangifera indica is the mango.",""],
["F2","Panthera tigris is the scientific name of India's national:",["Animal","Heritage animal","Aquatic animal","Bird"],"Panthera tigris is the tiger.",""],
["F2","In which year was the Ganga declared India's national river?",["2008","1985","2014","2002"],"It was declared in November 2008, with the National Ganga River Basin Authority.",""],
["F2","India's national aquatic animal is the:",["Ganges river dolphin","Olive ridley turtle","Gharial","Dugong"],"The Ganges river dolphin (Platanista gangetica) is the national aquatic animal.",""],
["F2","In which year was the Ganges river dolphin declared the national aquatic animal?",["2009","2002","2015","1972"],"It was declared on 5 October 2009 and notified in 2010.",""],
["F2","The Ganges river dolphin is known locally as the:",["Susu","Bhulan","Mahseer","Hilsa"],"'Susu' comes from the sound it makes as it breathes; 'bhulan' is the Indus dolphin.",""],
["F2","National Dolphin Day is observed on:",["5 October","5 June","22 May","29 July"],"5 October marks the day in 2009 when the dolphin was declared the national aquatic animal.",""],
["F2","The Ganges river dolphin is nearly blind. How does it find its food?",["By echolocation","By smell","By an electric sense","By its whiskers"],"It sends out clicks and listens for the echoes.",""],
["F2","Which animal was declared India's national heritage animal in 2010?",["Elephant","Tiger","Asiatic lion","Ganges river dolphin"],"The elephant was named the national heritage animal in 2010.",""],
["F2","Project Elephant, for the national heritage animal, began in:",["1992","1973","2010","1986"],"Project Elephant started in 1992; Project Tiger in 1973.",""],
["F2","Project Tiger, for the national animal, began in:",["1973","1952","1992","2006"],"Project Tiger started on 1 April 1973; the NTCA came in 2006.",""],
["F2","Which microbe was named India's national microbe in 2012?",["Lactobacillus delbrueckii subsp. bulgaricus","Escherichia coli","Rhizobium leguminosarum","Penicillium notatum"],"Schoolchildren chose it in a vote held on the Science Express train.",""],
["F2","The national microbe is best known for turning milk into:",["Curd and yogurt","Cheese rind","Butter","Ghee"],"Lactobacillus makes lactic acid, which sets milk into curd and yogurt.",""],
["F2","Who chose Lactobacillus as India's national microbe in 2012?",["Schoolchildren, in a vote on the Science Express train","Parliament, by a resolution","The Indian Council of Medical Research","The Supreme Court"],"The children's vote was announced by the environment ministry in October 2012.",""],
["F2","What is the official national game of India?",["None has been declared","Hockey","Cricket","Kabaddi"],"The Sports Ministry has said in RTI replies that no game has been declared the national game.",""],
["F2","Hockey is often called India's national game. Why is it so closely linked with India?",["India's men won eight Olympic gold medals in it","It was invented in India","It is named in the Constitution","Parliament declared it in 1950"],"Its Olympic record made it the 'de facto' national game, but it was never declared.",""],
["F2","Quiz books often name the king cobra as India's national reptile. What is its official status?",["It has never been officially notified","It was notified in 1972","It was notified in 2010","It replaced the gharial in 2012"],"No national reptile has been officially notified.",""],
["F2","Which of these has India never officially declared?",["A national game","A national animal","A national river","A national aquatic animal"],"The tiger, the Ganga and the river dolphin are declared symbols; there is no national game.",""],
["F2","Which pair of a national title and its symbol is wrongly matched?",["National heritage animal — Ganges river dolphin","National animal — tiger","National river — Ganga","National tree — banyan"],"The heritage animal is the elephant; the dolphin is the aquatic animal.",""]
);

LASTMOMENT.push(
{t:"Symbols of the state", era:["fs"], rows:[["Flag","22 July 1947 · 2:3 · 24 spokes"],["Emblem","Sarnath · 26 Jan 1950"],["Motto","Mundaka Upanishad"],["Anthem","Tagore · 24 Jan 1950 · 52 s"],["Song","Bankim · Anandamath"],["Calendar","Saka · 22 March 1957"],["₹","D. Udaya Kumar · 2010"]]},
{t:"Living symbols", era:["fs"], rows:[["Animal","Tiger"],["Bird","Indian peafowl (1963)"],["Flower","Lotus"],["Tree","Banyan"],["Fruit","Mango"],["River","Ganga (2008)"],["Aquatic","River dolphin (2009)"],["Heritage","Elephant (2010)"],["Game","None declared"]]}
);
TILES.push(["24","Spokes in the Ashoka Chakra","fs"],["52 s","Full national anthem","fs"],["2:3","Flag width to length","fs"],["1957","Saka calendar adopted","fs"],["2010","₹ sign adopted","fs"]);

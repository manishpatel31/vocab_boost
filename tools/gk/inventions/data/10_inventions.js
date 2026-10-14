/* Part 1 · I1 machines, transport and everyday objects; I2 communication, electricity and computing (as of October 2026). */
const I1 = [
  ["steam engine (with a separate condenser)","James Watt","1769 patent. Thomas Newcomen built an earlier steam engine (1712); Watt made it efficient. The unit of power, the watt, is named after him.","p"],
  ["railway steam locomotive 'Rocket'","George Stephenson","1829, with his son Robert. Called the 'Father of Railways'. (Richard Trevithick ran an earlier locomotive in 1804.)","p"],
  ["aeroplane","Wright brothers","Orville and Wilbur Wright made the first powered, controlled flight on 17 December 1903 at Kitty Hawk, USA.","p"],
  ["petrol motor car","Karl Benz","Patented in 1886 in Germany.","p"],
  ["diesel engine","Rudolf Diesel","Patented in 1892 (Germany); ignites fuel by compression, with no spark plug.","p"],
  ["four-stroke petrol engine","Nikolaus Otto","1876, Germany — the 'Otto cycle'.",""],
  ["motorcycle","Gottlieb Daimler","1885, with Wilhelm Maybach.",""],
  ["pedal bicycle","Kirkpatrick Macmillan","Around 1839, Scotland. (Karl Drais made a pedal-less 'running machine' in 1817.)","p"],
  ["pneumatic (air-filled) tyre","John Boyd Dunlop","1888, Scotland.","p"],
  ["jet engine","Frank Whittle","Patented in 1930 in Britain.","p"],
  ["helicopter (practical, single rotor)","Igor Sikorsky","VS-300, flown in 1939 in the USA.","p"],
  ["hot-air balloon","Montgolfier brothers","1783, France.",""],
  ["steamboat (first commercial)","Robert Fulton","The Clermont, 1807, USA.",""],
  ["printing press with movable type","Johannes Gutenberg","About 1440, Germany; printed the Gutenberg Bible.","p"],
  ["spinning jenny","James Hargreaves","About 1764 — the Industrial Revolution in textiles.",""],
  ["flying shuttle","John Kay","1733 — made weaving faster.",""],
  ["safety lift (elevator brake)","Elisha Otis","1852–53, USA.",""],
];
const I1B = [
  ["sewing machine (lock-stitch)","Elias Howe","Patented in 1846, USA.","p"],
  ["dynamite","Alfred Nobel","1867. His fortune funds the Nobel Prizes.","p"],
  ["revolver","Samuel Colt","1836 patent, USA.","p"],
  ["machine gun (Gatling gun)","Richard Gatling","1862, USA. Hiram Maxim made the first fully automatic one (1884).",""],
  ["safety razor (disposable blade)","King C. Gillette","1901, USA.",""],
  ["ballpoint pen","Laszlo Biro","1938, Hungary — 'biro' is still a name for the pen.","p"],
  ["fountain pen (practical)","Lewis Waterman","1884, USA.",""],
  ["safety pin","Walter Hunt","1849, USA.",""],
  ["zip fastener","Whitcomb Judson","1893, USA; Gideon Sundback improved it in 1913.",""],
  ["vulcanised rubber","Charles Goodyear","1839, USA.",""],
  ["roll-film Kodak camera","George Eastman","1888, USA.",""],
  ["microwave oven","Percy Spencer","1945, USA — he noticed a radar set melted a chocolate bar.",""],
  ["modern air conditioner","Willis Carrier","1902, USA.","p"],
  ["lightning conductor","Benjamin Franklin","1752 — after his kite experiment.","p"]
];
const I2 = [
  ["telephone","Alexander Graham Bell","Patented in 1876, USA.","p"],
  ["electric telegraph and its code","Samuel Morse","First long-distance message in 1844: 'What hath God wrought'.","p"],
  ["radio (wireless telegraphy)","Guglielmo Marconi","1895–96, Italy; Nobel Prize 1909. J. C. Bose showed microwave signalling in Kolkata in 1895.","p"],
  ["television (first public demonstration)","John Logie Baird","1926, London, Scotland-born inventor.","p"],
  ["phonograph","Thomas Edison","1877. Edison also made the practical electric bulb (1879).","p"],
  ["gramophone (flat disc record)","Emile Berliner","1887.",""],
  ["cinematograph","Lumiere brothers","1895, Paris — the first public film show.","p"],
  ["electric battery (voltaic pile)","Alessandro Volta","1800, Italy. The volt is named after him.","p"],
  ["electric dynamo","Michael Faraday","1831, after he discovered electromagnetic induction.","p"],
  ["AC induction motor","Nikola Tesla","1888. The tesla (unit of magnetic flux density) is named after him.",""],
  ["transistor","Bardeen, Brattain and Shockley","1947, Bell Labs, USA; Nobel Prize 1956.","p"],
  ["integrated circuit (chip)","Jack Kilby","1958, Texas Instruments (Robert Noyce made one independently); Nobel Prize 2000.",""],
  ["laser (first working)","Theodore Maiman","1960, USA.",""],
  ["radar (practical)","Robert Watson-Watt","1935, Britain.",""],
  ["handheld mobile phone","Martin Cooper","1973, Motorola — the first call from a handheld mobile.","p"],
  ["Analytical Engine (mechanical computer)","Charles Babbage","Designed from 1837 — the 'Father of the Computer'.","p"],
  ["computer mouse","Douglas Engelbart","Made in 1964, shown in 1968.","p"],
  ["World Wide Web","Tim Berners-Lee","1989 at CERN, Geneva.","p"],
  ["network email with the @ sign","Ray Tomlinson","1971, on ARPANET.","p"],
  ["TCP/IP — the language of the Internet","Vint Cerf and Bob Kahn","1974 — both called 'Fathers of the Internet'.","p"],
  ["C programming language","Dennis Ritchie","1972, Bell Labs.",""],
  ["Java programming language","James Gosling","1995, Sun Microsystems.",""],
  ["Google search engine","Larry Page and Sergey Brin","1998, USA.",""],
  ["Hotmail (free web email)","Sabeer Bhatia","Co-founded with Jack Smith in 1996; sold to Microsoft in 1997.","p"],
  ["USB (Universal Serial Bus)","Ajay Bhatt","Co-inventor at Intel in the 1990s.","p"],
  ["Pentium processor","Vinod Dham","Led the Intel team (1993) — the 'Father of the Pentium'.","p"],
  ["optical fibre (pioneering work)","Narinder Singh Kapany","Indian-born physicist, called the 'Father of Fibre Optics'.","p"]
];

LESSONS.push(
{id:"I1", heat:3, title:"Machines, transport and everyday objects", hi:"मशीनें, परिवहन और रोज़मर्रा की वस्तुएँ", blocks:[
  {k:"hot", h:"SSC asks <b>“Who invented X?”</b> almost every shift. The favourites: <b>steam engine (Watt)</b>, <b>aeroplane (Wright brothers, 1903)</b>, <b>diesel engine (Rudolf Diesel)</b>, <b>printing press (Gutenberg)</b>, <b>dynamite (Nobel)</b>, <b>sewing machine (Elias Howe)</b>, <b>pneumatic tyre (Dunlop)</b> and <b>jet engine (Frank Whittle)</b>."},
  {k:"story", h:"<p>The modern world began with power. In 1769 <b>James Watt</b> made the steam engine efficient; soon <b>George Stephenson</b> put it on rails and <b>Robert Fulton</b> on a boat. Then came engines that burn fuel inside: <b>Nikolaus Otto</b>'s four-stroke engine (1876), <b>Karl Benz</b>'s car (1886) and <b>Rudolf Diesel</b>'s engine (1892). <b>Dunlop</b>'s air-filled tyre made rides smooth. In 1903 the <b>Wright brothers</b> flew, and <b>Frank Whittle</b>'s jet engine and <b>Igor Sikorsky</b>'s helicopter followed.</p><p>Small things changed daily life too. <b>Gutenberg</b> printed books with movable type (about 1440). <b>Elias Howe</b> made the sewing machine, <b>Biro</b> the ballpoint pen, <b>Walter Hunt</b> the safety pin, <b>Gillette</b> the safety razor. <b>Alfred Nobel</b> invented dynamite — and left his fortune for the Nobel Prizes.</p>", key:"Watt — steam engine; Wright brothers — aeroplane 1903; Benz — car; Diesel — diesel engine; Dunlop — tyre; Gutenberg — printing press; Nobel — dynamite."},
  {k:"table", title:"Machines and transport", head:["Invention","Inventor","Note"], rows: I1.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Everyday objects and weapons", head:["Invention","Inventor","Note"], rows: I1B.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Name hints: <b>D</b>iesel → <b>D</b>iesel engine; <b>D</b>unlop → tyre (think “<b>D</b>unlop <b>D</b>rives on air”); <b>W</b>att and <b>W</b>hittle — <b>W</b>ater-steam and <b>W</b>hoosh-jet; <b>S</b>ikorsky → <b>S</b>pinning rotor; <b>Biro</b> = ballpoint."},
  {k:"trap", h:"<b>James Watt</b> improved the steam engine — <b>Newcomen</b> built an earlier one. The <b>steam locomotive</b> is Stephenson, not Watt. <b>Gottlieb Daimler</b> made the motorcycle; <b>Karl Benz</b> the car. <b>Machine gun</b> = Gatling; <b>revolver</b> = Colt."}
], sum:["James Watt improved the steam engine (1769); George Stephenson built the Rocket locomotive (1829).","Wright brothers: first powered flight, 17 December 1903.","Karl Benz — car (1886); Rudolf Diesel — diesel engine (1892); Dunlop — pneumatic tyre (1888).","Frank Whittle — jet engine; Igor Sikorsky — helicopter; Montgolfier brothers — hot-air balloon.","Gutenberg — printing press; Elias Howe — sewing machine; Alfred Nobel — dynamite; Biro — ballpoint pen."]},

{id:"I2", heat:3, title:"Communication, electricity and computing", hi:"संचार, बिजली और कंप्यूटर", blocks:[
  {k:"hot", h:"Very common: <b>telephone (Bell)</b>, <b>radio (Marconi)</b>, <b>television (Baird)</b>, <b>electric bulb and phonograph (Edison)</b>, <b>battery (Volta)</b>, <b>WWW (Tim Berners-Lee)</b>, <b>father of the computer (Babbage)</b>. Indian names asked often: <b>Sabeer Bhatia</b> (Hotmail), <b>Ajay Bhatt</b> (USB), <b>Vinod Dham</b> (Pentium), <b>N. S. Kapany</b> (fibre optics)."},
  {k:"story", h:"<p>In 1800 <b>Volta</b> stacked metal discs to make the first battery; in 1831 <b>Faraday</b> turned motion into electricity with a dynamo. Wires soon carried words: <b>Morse</b>'s telegraph (1844), <b>Bell</b>'s telephone (1876). <b>Edison</b> gave us the phonograph (1877) and a long-lasting bulb (1879). <b>Marconi</b> sent signals with no wires at all, and <b>Baird</b> showed television in 1926.</p><p>The <b>transistor</b> (1947) and the <b>chip</b> (1958) made electronics small. <b>Babbage</b> had dreamed of a computer a century earlier. <b>Cerf and Kahn</b> wrote TCP/IP (1974), <b>Ray Tomlinson</b> sent the first network email with '@' (1971), and <b>Tim Berners-Lee</b> built the World Wide Web (1989). Indians in the story: <b>Sabeer Bhatia</b> (Hotmail), <b>Ajay Bhatt</b> (USB) and <b>Vinod Dham</b> (Pentium).</p>", key:"Bell — telephone; Marconi — radio; Baird — TV; Edison — bulb and phonograph; Volta — battery; Faraday — dynamo; Berners-Lee — WWW; Babbage — computer."},
  {k:"table", title:"Communication, electricity and computing", head:["Invention","Inventor","Note"], rows: I2.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Years worth remembering", rows:[
    ["1876","Telephone — Graham Bell"],
    ["1879","Long-lasting electric bulb — Edison"],
    ["1895","Radio — Marconi; X-rays — Röntgen; cinema — Lumière brothers"],
    ["1903","First powered flight — Wright brothers"],
    ["1926","Television shown — Baird"],
    ["1947","Transistor — Bell Labs"],
    ["1971","Network email — Ray Tomlinson"],
    ["1989","World Wide Web — Tim Berners-Lee"]
  ]},
  {k:"trick", h:"<b>“Bell rings, Marconi sings, Baird shows things”</b> — telephone, radio, television. For Indians in computing: <b>“Hot Sabeer, USB Bhatt, Pentium Dham”</b>."},
  {k:"trap", h:"<b>WWW</b> (Berners-Lee, 1989) is not the <b>Internet</b> (TCP/IP by Cerf and Kahn, 1974). The <b>gramophone</b> is Berliner; the <b>phonograph</b> is Edison. <b>Babbage</b> designed the computer; <b>Ada Lovelace</b> wrote the first program for it."}
], sum:["Bell — telephone (1876); Morse — telegraph; Marconi — radio; Baird — television (1926).","Edison — phonograph (1877) and practical bulb (1879); Volta — battery (1800); Faraday — dynamo (1831).","Transistor — Bardeen, Brattain, Shockley (1947); chip — Jack Kilby (1958).","Babbage — father of the computer; Berners-Lee — WWW (1989); Cerf and Kahn — TCP/IP.","Indians: Sabeer Bhatia — Hotmail; Ajay Bhatt — USB; Vinod Dham — Pentium; N. S. Kapany — fibre optics."]}
);

pairQs("I1", I1, { q: t => `Who invented the ${t}?`, rq: a => `What did ${a} invent?` });
pairQs("I1", I1B, { q: t => `The ${t} was invented by:` });
pairQs("I2", I2, { q: t => `Who is credited with the ${t}?`, rq: a => `${a} is credited with the:`, extra: ["Thomas Edison"] });

QB.push(
["I1","The first powered, controlled aeroplane flight by the Wright brothers took place in:",["1903","1895","1911","1876"],"17 December 1903, at Kitty Hawk, North Carolina.","p"],
["I1","In a diesel engine the fuel is ignited by:",["Heat from compressing air","A spark plug","An electric bulb","A battery spark"],"That is why it is also called a compression-ignition engine.",""],
["I1","Who is called the 'Father of Railways'?",["George Stephenson","James Watt","Robert Fulton","Rudolf Diesel"],"He built the Rocket locomotive (1829) with his son.","p"],
["I1","Alfred Nobel, who invented dynamite, belonged to:",["Sweden","Norway","Germany","Denmark"],"His will set up the Nobel Prizes, first given in 1901.","p"],
["I1","Gutenberg's printing press used:",["Movable metal type","Carved wooden blocks only","Photocopying","Laser printing"],"About 1440, in Mainz, Germany.",""],
["I1","The Industrial Revolution in textiles began in:",["Britain","France","USA","Germany"],"The flying shuttle, spinning jenny and Watt's steam engine were all British.",""],
["I2","The telephone was invented in which decade?",["1870s","1850s","1890s","1910s"],"Graham Bell's patent came in 1876.","p","","","SSC CHSL · 23 Mar 2018 (Shift 2)"],
["I2","Who invented the long-lasting electric bulb in 1879?",["Thomas Edison","Nikola Tesla","Michael Faraday","Alessandro Volta"],"Joseph Swan in England made one at about the same time.","p"],
["I2","Who wrote the first computer program, for Babbage's Analytical Engine?",["Ada Lovelace","Grace Hopper","Alan Turing","Charles Babbage"],"Her notes were published in 1843.","p"],
["I2","Which Indian scientist showed wireless (microwave) signalling in 1895?",["Jagadish Chandra Bose","C. V. Raman","Meghnad Saha","S. N. Bose"],"In Kolkata, around the same time as Marconi's work.","p"],
["I2","The World Wide Web was invented at:",["CERN, Geneva","Bell Labs, USA","MIT, USA","IBM, New York"],"By Tim Berners-Lee in 1989.","p"]
);

LASTMOMENT.push(
{t:"Who invented it?", era:["iv"], rows:[["Steam engine","James Watt"],["Aeroplane","Wright brothers"],["Car","Karl Benz"],["Diesel engine","Rudolf Diesel"],["Tyre","Dunlop"],["Jet engine","Frank Whittle"],["Printing press","Gutenberg"],["Dynamite","Alfred Nobel"]]},
{t:"Communication and computing", era:["iv"], rows:[["Telephone","Graham Bell"],["Radio","Marconi"],["Television","J. L. Baird"],["Bulb, phonograph","Edison"],["Battery","Volta"],["WWW","Tim Berners-Lee"],["Hotmail","Sabeer Bhatia"],["USB","Ajay Bhatt"]]}
);
TILES.push(["1903","First powered flight","iv"],["1876","Telephone patented","iv"],["1440","Gutenberg's press (about)","iv"],["1989","World Wide Web","iv"]);

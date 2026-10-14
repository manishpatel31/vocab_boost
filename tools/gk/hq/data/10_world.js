/* Part 1 · H1 the UN family; H2 financial, regional and other world bodies; H3 sports bodies (as of October 2026). */
const H1 = [
  ["United Nations (UN)","New York","Founded 24 October 1945 (UN Day); 193 member states.","p|RRB NTPC · 30 Mar 2016 (Shift 1)"],
  ["UNICEF","New York","UN Children's Fund, 1946; Nobel Peace Prize 1965.","p"],
  ["UNDP","New York","UN Development Programme, 1965; publishes the Human Development Index.","p"],
  ["UNFPA","New York","UN Population Fund, 1969.",""],
  ["UN Women","New York","Set up in 2010.",""],
  ["UNESCO","Paris","Education, science and culture, 1945; keeps the World Heritage list.","p|RRB NTPC · 29 Mar 2016 (Shift 1)"],
  ["WHO (World Health Organization)","Geneva","Founded 7 April 1948 — World Health Day.","p"],
  ["ILO (International Labour Organization)","Geneva","1919 — older than the UN; Nobel Peace Prize 1969.","p"],
  ["ITU (International Telecommunication Union)","Geneva","1865 — the oldest UN agency.","p"],
  ["WMO (World Meteorological Organization)","Geneva","1950; World Meteorological Day is 23 March.","p"],
  ["WIPO (World Intellectual Property Organization)","Geneva","1967; patents, copyright, trademarks.","p"],
  ["UNHCR (UN Refugee Agency)","Geneva","1950; Nobel Peace Prize 1954 and 1981.","p"],
  ["UNCTAD","Geneva","UN Conference on Trade and Development, 1964.",""],
  ["UN Human Rights Council","Geneva","2006; replaced the Commission on Human Rights.",""],
  ["UPU (Universal Postal Union)","Bern","1874 — World Post Day, 9 October, marks its founding.","p"],
  ["FAO (Food and Agriculture Organization)","Rome","Founded 16 October 1945 — World Food Day.","p"],
  ["IFAD","Rome","International Fund for Agricultural Development, 1977.",""],
  ["WFP (World Food Programme)","Rome","1961; Nobel Peace Prize 2020.","p"],
  ["IAEA (International Atomic Energy Agency)","Vienna","1957; Nobel Peace Prize 2005.","p"],
  ["UNIDO","Vienna","UN Industrial Development Organization, 1966.",""],
  ["UNODC","Vienna","UN Office on Drugs and Crime, 1997.",""],
  ["UNEP (UN Environment Programme)","Nairobi","Set up after the Stockholm Conference, 1972 — first UN body HQ in the Global South.","p"],
  ["UN-Habitat","Nairobi","Human settlements, 1978.",""],
  ["International Court of Justice","The Hague","1945 — the only main UN organ not in New York.","p"],
  ["IMO (International Maritime Organization)","London","Shipping safety; convention 1948, came into force 1958.","p"],
  ["ICAO (International Civil Aviation Organization)","Montreal","Chicago Convention 1944.","p"],
  ["UN Tourism (formerly UNWTO)","Madrid","1975; renamed UN Tourism in 2024.",""],
  ["United Nations University","Tokyo","1973.",""]
];
const H2 = [
  ["IMF (International Monetary Fund)","Washington, D.C.","Born at Bretton Woods, 1944, with the World Bank.","p"],
  ["World Bank","Washington, D.C.","Its first arm, the IBRD, was set up at Bretton Woods, 1944.","p"],
  ["WTO (World Trade Organization)","Geneva","1 January 1995; replaced GATT.","p"],
  ["Asian Development Bank","Manila","1966; HQ in Mandaluyong, Metro Manila, Philippines.","p"],
  ["Asian Infrastructure Investment Bank (AIIB)","Beijing","Began work in 2016; India is the second-largest shareholder.","p"],
  ["New Development Bank (BRICS bank)","Shanghai","Agreed at the 2014 BRICS summit (Fortaleza); first president K. V. Kamath.","p"],
  ["OECD","Paris","Organisation for Economic Co-operation and Development, 1961.",""],
  ["OPEC","Vienna","Founded at Baghdad in 1960.","p"],
  ["Bank for International Settlements","Basel","1930 — the 'central bank of central banks'.",""],
  ["ASEAN","Jakarta","Bangkok Declaration, 1967.","p"],
  ["SAARC","Kathmandu","Founded at Dhaka in 1985; 8 members.","p"],
  ["BIMSTEC","Dhaka","Bangkok Declaration, 1997; 7 Bay of Bengal countries.","p"],
  ["Shanghai Cooperation Organisation (SCO)","Beijing","2001; India and Pakistan joined in 2017.","p"],
  ["European Union","Brussels","Maastricht Treaty, 1993.","p"],
  ["NATO","Brussels","1949, Washington Treaty.","p"],
  ["African Union","Addis Ababa","2002 (replaced the OAU of 1963).","p"],
  ["Commonwealth of Nations (Secretariat)","London","Secretariat at Marlborough House; 56 members.","p"],
  ["Arab League","Cairo","1945.",""],
  ["Organisation of Islamic Cooperation (OIC)","Jeddah","1969.","p"],
  ["Interpol","Lyon","1923; India's nodal body is the CBI.","p"],
  ["Amnesty International","London","1961; Nobel Peace Prize 1977.","p"],
  ["Greenpeace International","Amsterdam","1971.",""],
  ["WWF (World Wide Fund for Nature)","Gland","1961; the panda logo.","p"],
  ["IUCN","Gland","1948; publishes the Red List.","p"],
  ["International Committee of the Red Cross","Geneva","1863, Henry Dunant; three Nobel Peace Prizes.","p"],
  ["World Economic Forum","Cologny","1971, Klaus Schwab; its annual meeting is at Davos.","p"],
  ["International Solar Alliance","Gurugram","Launched by India and France at Paris (COP21), 2015.","p"],
  ["International Criminal Court","The Hague","Rome Statute, 2002.",""],
  ["OPCW (chemical weapons watchdog)","The Hague","1997; Nobel Peace Prize 2013.",""]
];
const H3 = [
  ["FIFA (football)","Zurich","Founded in Paris, 1904.","p|SSC CHSL · 11 Jul 2019 (Shift 1)"],
  ["International Olympic Committee","Lausanne","1894, Pierre de Coubertin; Lausanne is the 'Olympic Capital'.","p"],
  ["International Cricket Council (ICC)","Dubai","1909 as the Imperial Cricket Conference; moved from Lord's (London) in 2005.","p"],
  ["FIDE (chess)","Lausanne","Founded in Paris, 1924.","p"],
  ["Badminton World Federation (BWF)","Kuala Lumpur","1934 (moved from Cheltenham, England, in 2005).","p"],
  ["ITTF (table tennis)","Lausanne","1926.",""],
  ["World Athletics","Monaco","1912 (formerly IAAF).","p"],
  ["FIH (hockey)","Lausanne","1924.","p"],
  ["UEFA (European football)","Nyon","1954.",""],
  ["FIBA (basketball)","Mies","1932.",""],
  ["UCI (cycling)","Aigle","1900.",""],
  ["International Tennis Federation","London","1913.","p"],
  ["Commonwealth Games Federation","London","",""],
  ["World Anti-Doping Agency (WADA)","Montreal","1999.","p"],
  ["Asian Football Confederation","Kuala Lumpur","1954.",""],
  ["Olympic Council of Asia","Kuwait City","1982; runs the Asian Games.","p"],
  ["ISSF (shooting)","Munich","1907.",""],
  ["World Rugby","Dublin","1886.",""],
  ["Court of Arbitration for Sport","Lausanne","1984.",""]
];
const H3I = [
  ["BCCI (Board of Control for Cricket in India)","Mumbai","1928; at the Cricket Centre, Wankhede Stadium.","p"],
  ["Sports Authority of India","New Delhi","1984; at the Jawaharlal Nehru Stadium.","p"],
  ["Netaji Subhas National Institute of Sports","Patiala","1961 — India's main sports coaching institute.","p"],
  ["Lakshmibai National Institute of Physical Education","Gwalior","1957.",""],
  ["National Sports University","Imphal","India's first national sports university (2018).","p"],
  ["Lakshmibai National College of Physical Education","Thiruvananthapuram","1985.",""],
  ["All India Football Federation","New Delhi","1937; HQ at Dwarka.",""],
  ["National Anti-Doping Agency (NADA)","New Delhi","2005.",""]
];

LESSONS.push(
{id:"H1", heat:3, title:"The UN family and its headquarters", hi:"संयुक्त राष्ट्र परिवार और मुख्यालय", blocks:[
  {k:"hot", h:"The favourite HQ question: <b>“The headquarters of X is in…”</b> for UN bodies — UNESCO <b>Paris</b>, WHO/ILO/WIPO <b>Geneva</b>, FAO <b>Rome</b>, IAEA <b>Vienna</b>, UNEP <b>Nairobi</b>, ICJ <b>The Hague</b>, UPU <b>Bern</b>."},
  {k:"story", h:"<p>The <b>United Nations</b> was born on <b>24 October 1945</b> and sits in <b>New York</b>, with the funds that report to it — <b>UNICEF, UNDP, UNFPA, UN Women</b>. But its specialised agencies are spread over a few European cities. <b>Geneva</b> is the busiest: health (<b>WHO</b>), labour (<b>ILO</b>), telecom (<b>ITU</b>), weather (<b>WMO</b>), patents (<b>WIPO</b>) and refugees (<b>UNHCR</b>).</p><p><b>Rome</b> holds the three food bodies — <b>FAO, IFAD, WFP</b>. <b>Vienna</b> holds atoms and industry — <b>IAEA, UNIDO</b>. <b>Paris</b> has <b>UNESCO</b>; tiny <b>Bern</b> has the postal union. <b>Nairobi</b> hosts <b>UNEP</b>, the first UN body based in the Global South, and the court of the world, the <b>ICJ</b>, sits in <b>The Hague</b>.</p>", key:"New York = UN, UNICEF, UNDP; Geneva = WHO, ILO, ITU, WMO, WIPO, UNHCR; Rome = food; Vienna = atoms; Paris = UNESCO; Nairobi = UNEP; The Hague = ICJ."},
  {k:"facts", title:"The UN at a glance (as of October 2026)", rows:[
    ["Founded","24 October 1945 (UN Charter signed at San Francisco, 26 June 1945)"],
    ["Members","193 — the newest, South Sudan (2011)"],
    ["Six main organs","General Assembly, Security Council, ECOSOC, Trusteeship Council, ICJ, Secretariat"],
    ["Main organ outside New York","International Court of Justice — The Hague"],
    ["Official languages","Six — Arabic, Chinese, English, French, Russian, Spanish"],
    ["Oldest agency","ITU (1865), then UPU (1874)"]
  ]},
  {k:"table", title:"UN bodies and their headquarters", head:["Body","Headquarters","Note"], rows: H1.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Rome eats, Vienna splits atoms, Geneva heals and works, Paris teaches”</b> — FAO/WFP/IFAD in Rome, IAEA in Vienna, WHO/ILO in Geneva, UNESCO in Paris. <b>“Nairobi is green”</b> — UNEP and UN-Habitat."},
  {k:"trap", h:"The <b>WTO</b> (trade) is in Geneva but is <b>not</b> a UN agency. <b>UNICEF</b> is in New York, not Geneva. <b>UPU</b> is in <b>Bern</b>, Switzerland's capital — not Geneva. <b>ICAO</b> is in <b>Montreal</b>, <b>IMO</b> in <b>London</b>."}
], sum:["UN, UNICEF, UNDP, UNFPA and UN Women — New York.","WHO, ILO, ITU, WMO, WIPO, UNHCR — Geneva; UPU — Bern.","FAO, IFAD, WFP — Rome; IAEA, UNIDO, UNODC — Vienna.","UNESCO — Paris; UNEP and UN-Habitat — Nairobi; ICJ — The Hague.","IMO — London; ICAO — Montreal; UN Tourism — Madrid; UN University — Tokyo."]},

{id:"H2", heat:3, title:"Money, trade and regional bodies", hi:"वित्तीय, व्यापार और क्षेत्रीय संगठन", blocks:[
  {k:"hot", h:"Asked every year: <b>IMF and World Bank — Washington, D.C.</b>; <b>ADB — Manila</b>; <b>AIIB — Beijing</b>; <b>NDB — Shanghai</b>; <b>ASEAN — Jakarta</b>; <b>SAARC — Kathmandu</b>; <b>BIMSTEC — Dhaka</b>; <b>Interpol — Lyon</b>; <b>International Solar Alliance — Gurugram</b>."},
  {k:"story", h:"<p>At <b>Bretton Woods</b> in 1944 the world planned two twin bodies — the <b>IMF</b> and the <b>World Bank</b> — and both sit in <b>Washington, D.C.</b> Asia built its own banks later: the <b>ADB</b> in <b>Manila</b> (1966), the <b>AIIB</b> in <b>Beijing</b> and the BRICS <b>New Development Bank</b> in <b>Shanghai</b>. Trade rules are kept by the <b>WTO</b> in <b>Geneva</b>.</p><p>Each region has a home city: <b>ASEAN</b> in Jakarta, <b>SAARC</b> in Kathmandu, <b>BIMSTEC</b> in Dhaka, the <b>EU</b> and <b>NATO</b> in Brussels, the <b>African Union</b> in Addis Ababa. India hosts one world body of its own — the <b>International Solar Alliance</b>, at <b>Gurugram</b>.</p>", key:"Washington twins = IMF + World Bank; Asian banks = Manila, Beijing, Shanghai; Jakarta = ASEAN; Kathmandu = SAARC; Dhaka = BIMSTEC; Gurugram = ISA."},
  {k:"table", title:"World bodies and their headquarters", head:["Body","Headquarters","Note"], rows: H2.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“SAARC sleeps in Kathmandu, BIMSTEC bathes in Dhaka”</b>. For the three Asian banks think <b>“M-B-S”</b>: <b>M</b>anila (ADB, oldest), <b>B</b>eijing (AIIB), <b>S</b>hanghai (NDB, BRICS)."},
  {k:"trap", h:"<b>OPEC</b> was founded in Baghdad but is based in <b>Vienna</b>. <b>Interpol</b> is in <b>Lyon</b>, not Paris. <b>SAARC</b> was founded at <b>Dhaka</b> (1985) but its secretariat is in <b>Kathmandu</b>. The <b>WEF</b> meets at Davos but is based at <b>Cologny</b> near Geneva."}
], sum:["IMF and World Bank — Washington, D.C. (Bretton Woods, 1944); WTO — Geneva (1995).","ADB — Manila; AIIB — Beijing; New Development Bank — Shanghai.","ASEAN — Jakarta; SAARC — Kathmandu; BIMSTEC — Dhaka; SCO — Beijing.","EU and NATO — Brussels; African Union — Addis Ababa; OPEC — Vienna; OIC — Jeddah.","Interpol — Lyon; WWF and IUCN — Gland; Amnesty — London; ISA — Gurugram."]},

{id:"H3", heat:3, title:"Sports bodies and their headquarters", hi:"खेल संगठन और मुख्यालय", blocks:[
  {k:"hot", h:"Most asked: <b>FIFA — Zurich</b>, <b>IOC — Lausanne</b>, <b>ICC — Dubai</b>, <b>FIDE — Lausanne</b>, <b>BWF — Kuala Lumpur</b>, <b>World Athletics — Monaco</b>. In India: <b>BCCI — Mumbai</b>, <b>SAI — New Delhi</b>, <b>NIS — Patiala</b>."},
  {k:"story", h:"<p>Most of world sport is run from one small Swiss city — <b>Lausanne</b>, the 'Olympic Capital'. The <b>IOC</b> moved there in 1915, and the chess (<b>FIDE</b>), hockey (<b>FIH</b>), table tennis (<b>ITTF</b>) and volleyball bodies followed, along with the <b>Court of Arbitration for Sport</b>. Football's <b>FIFA</b> sits in <b>Zurich</b>, Europe's <b>UEFA</b> in <b>Nyon</b>.</p><p>Cricket's <b>ICC</b> left Lord's for <b>Dubai</b> in 2005. Badminton's <b>BWF</b> is in <b>Kuala Lumpur</b>, and athletics is run from <b>Monaco</b>. In India, the <b>BCCI</b> is in <b>Mumbai</b>, the <b>Sports Authority of India</b> in <b>New Delhi</b>, and coaches train at <b>NIS Patiala</b>.</p>", key:"Lausanne = IOC, FIDE, FIH, ITTF, CAS; Zurich = FIFA; Dubai = ICC; Kuala Lumpur = BWF; Monaco = athletics; Mumbai = BCCI."},
  {k:"table", title:"World sports bodies", head:["Body","Headquarters","Note"], rows: H3.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Indian sports bodies", head:["Body","Headquarters","Note"], rows: H3I.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“FIFA eats Zurich chocolate, the IOC lives by Lake Geneva in Lausanne”</b>. <b>“Cricket went to the desert”</b> — ICC to Dubai, 2005."},
  {k:"trap", h:"<b>FIFA</b> was founded in Paris but is in <b>Zurich</b>; the <b>IOC</b> was founded in Paris but is in <b>Lausanne</b>. <b>UEFA</b> is in Nyon, not Zurich. <b>WADA</b> is in Montreal (like ICAO). The <b>BCCI</b> is in Mumbai, not New Delhi."}
], sum:["FIFA — Zurich; UEFA — Nyon; IOC, FIDE, FIH, ITTF and CAS — Lausanne.","ICC — Dubai (since 2005); BWF — Kuala Lumpur; World Athletics — Monaco.","ITF and Commonwealth Games Federation — London; WADA — Montreal.","Olympic Council of Asia — Kuwait City; ISSF — Munich.","BCCI — Mumbai; SAI and AIFF — New Delhi; NIS — Patiala; National Sports University — Imphal."]}
);

pairQs("H1", H1, { q: t => `The headquarters of ${t} is in:`, rq: a => `Which UN body has its headquarters in ${a}?` });
pairQs("H2", H2, { q: t => `Where is the headquarters of ${t}?`, extra: ["New York","Rome"] });
pairQs("H3", H3, { q: t => `The headquarters of ${t} is located in:`, rq: a => `Which sports body has its headquarters in ${a}?` });
pairQs("H3", H3I, { q: t => `${t} is headquartered in:` });

QB.push(
["H1","When is United Nations Day observed?",["24 October","26 June","10 December","7 April"],"The UN Charter came into force on 24 October 1945.","p"],
["H1","Which is the only one of the six main organs of the UN NOT located in New York?",["International Court of Justice","Security Council","ECOSOC","Secretariat"],"The ICJ sits in the Peace Palace, The Hague.","p"],
["H1","Which is the oldest agency of the UN system?",["ITU","UPU","ILO","WHO"],"The International Telegraph Union was founded in 1865.",""],
["H1","How many official languages does the United Nations have?",["Six","Four","Five","Seven"],"Arabic, Chinese, English, French, Russian and Spanish.","p"],
["H1","Which three UN food bodies are all based in Rome?",["FAO, IFAD and WFP","FAO, WHO and UNICEF","WFP, UNEP and UNDP","IFAD, ILO and UNIDO"],"Rome is the UN's food hub.",""],
["H1","Which UN agency won the Nobel Peace Prize in 2020?",["World Food Programme","UNICEF","UNHCR","WHO"],"For fighting hunger.","p"],
["H2","Which two institutions were set up at the Bretton Woods conference (1944)?",["IMF and World Bank","WTO and UNCTAD","ADB and AIIB","OECD and OPEC"],"Both are based in Washington, D.C.","p"],
["H2","The WTO replaced which earlier agreement in 1995?",["GATT","Bretton Woods","OECD","NAFTA"],"General Agreement on Tariffs and Trade (1947).","p"],
["H2","Which bank is called the 'central bank of central banks'?",["Bank for International Settlements","World Bank","IMF","Asian Development Bank"],"Based in Basel, Switzerland.",""],
["H2","SAARC was founded in 1985 at:",["Dhaka","Kathmandu","New Delhi","Colombo"],"Its secretariat later opened in Kathmandu (1987).","p"],
["H2","The International Solar Alliance was launched jointly by India and:",["France","Japan","USA","Germany"],"At COP21, Paris, 2015.","p"],
["H3","Which city is known as the 'Olympic Capital'?",["Lausanne","Athens","Geneva","Paris"],"Home of the IOC and the Olympic Museum.","p"],
["H3","The ICC moved its headquarters to Dubai in 2005 from:",["London (Lord's)","Melbourne","Mumbai","Cape Town"],"Lord's had been its home since 1909.","p"],
["H3","Who founded the modern International Olympic Committee in 1894?",["Pierre de Coubertin","Avery Brundage","Juan Antonio Samaranch","Thomas Bach"],"Founded at the Sorbonne, Paris.","p"]
);

LASTMOMENT.push(
{t:"UN cities", era:["hq"], rows:[["New York","UN, UNICEF, UNDP"],["Geneva","WHO, ILO, ITU, WMO, WIPO, UNHCR"],["Rome","FAO, IFAD, WFP"],["Vienna","IAEA, UNIDO, OPEC"],["Paris","UNESCO, OECD"],["Nairobi","UNEP, UN-Habitat"],["The Hague","ICJ, ICC (court)"],["Bern","UPU"]]},
{t:"Banks and blocs", era:["hq"], rows:[["IMF, World Bank","Washington, D.C."],["ADB","Manila"],["AIIB","Beijing"],["NDB (BRICS)","Shanghai"],["ASEAN","Jakarta"],["SAARC","Kathmandu"],["BIMSTEC","Dhaka"],["Interpol","Lyon"]]},
{t:"Sports HQs", era:["hq"], rows:[["FIFA","Zurich"],["IOC, FIDE, FIH","Lausanne"],["ICC","Dubai"],["BWF","Kuala Lumpur"],["World Athletics","Monaco"],["WADA","Montreal"],["BCCI","Mumbai"],["NIS","Patiala"]]}
);
TILES.push(["1945","United Nations founded","hq"],["193","UN member states","hq"],["1944","Bretton Woods — IMF, World Bank","hq"],["1995","WTO replaces GATT","hq"],["2005","ICC moves to Dubai","hq"]);

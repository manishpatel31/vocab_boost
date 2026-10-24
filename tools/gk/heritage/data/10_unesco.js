/* UNESCO Heritage & Monuments of India — H1: UNESCO, the 1972 Convention and India's World Heritage list.
   Counts are as of October 2026: 45 sites after Sarnath (48th session, Busan, July 2026). */
const H1_ADD = [
  ["2014","Rani ki Vav (Patan, Gujarat); Great Himalayan National Park (Himachal Pradesh)","38th session, Doha","32"],
  ["2015","Nothing added","39th session, Bonn","32"],
  ["2016","Nalanda Mahavihara (Bihar); Khangchendzonga National Park (Sikkim, mixed); Capitol Complex, Chandigarh (in Le Corbusier's work)","40th session, Istanbul","35"],
  ["2017","Historic City of Ahmedabad (Gujarat)","41st session, Kraków","36"],
  ["2018","Victorian Gothic and Art Deco Ensembles of Mumbai","42nd session, Manama","37"],
  ["2019","Jaipur City (Rajasthan)","43rd session, Baku","38"],
  ["2020","Nothing added — the Committee did not meet (COVID-19)","—","38"],
  ["2021","Ramappa Temple (Telangana); Dholavira (Gujarat)","44th session, Fuzhou (online)","40"],
  ["2022","Nothing added — the session was postponed","—","40"],
  ["2023","Santiniketan (West Bengal); Sacred Ensembles of the Hoysalas (Karnataka)","45th session, Riyadh","42"],
  ["2024","Moidams of the Ahom dynasty, Charaideo (Assam)","46th session, New Delhi","43"],
  ["2025","Maratha Military Landscapes of India (Maharashtra and Tamil Nadu)","47th session, Paris","44"],
  ["2026","Ancient Buddhist Site of Sarnath (Uttar Pradesh)","48th session, Busan","45"]
];

LESSONS.push(
{id:"H1", heat:3, title:"UNESCO and the World Heritage list", hi:"यूनेस्को और विश्व धरोहर सूची", blocks:[
  {k:"hot", h:"Most asked: <b>India's total</b> and the split (cultural, natural, mixed), the <b>latest site</b>, the <b>first four</b> (1983), the year of the <b>Convention (1972)</b>, the bodies that judge sites (<b>ICOMOS</b>, <b>IUCN</b>) and <b>World Heritage Day (18 April)</b>."},
  {k:"story", h:"<p>In the 1960s Egypt began the Aswan High Dam, and the rising Nile threatened the temples of Abu Simbel. UNESCO raised money from many countries, and the temples were cut into blocks and moved uphill. The lesson was clear: some places are too precious to be left to one country alone.</p><p>So in <b>1972</b> UNESCO's General Conference in <b>Paris</b> adopted the <b>World Heritage Convention</b>. A country that signs it promises to protect its great places, and may put them forward for the <b>World Heritage List</b>. A committee of <b>21 member countries</b> meets once a year and decides, after experts have checked each site: <b>ICOMOS</b> for cultural sites and <b>IUCN</b> for natural ones.</p><p>India signed in <b>1977</b>, and its first four sites — <b>Ajanta, Ellora, Agra Fort and the Taj Mahal</b> — were listed in <b>1983</b>. As of October 2026 India has <b>45 sites</b>: 37 cultural, 7 natural and 1 mixed. The latest is <b>Sarnath</b> (July 2026).</p>", key:"1972 Convention · India joined 1977 · first sites 1983 · 45 sites (37 + 7 + 1) as of October 2026 · latest Sarnath."},
  {k:"facts", title:"The World Heritage system in one look", rows:[
    ["UNESCO","United Nations Educational, Scientific and Cultural Organization — founded 1945, headquarters in <b>Paris</b>"],
    ["The Convention","Convention concerning the Protection of the World Cultural and Natural Heritage — adopted <b>16 November 1972</b> in Paris; in force from 1975"],
    ["India joins","Ratified in <b>1977</b>; first Indian sites inscribed in <b>1983</b>"],
    ["First World Heritage list","<b>1978</b> — 12 sites worldwide (the Galápagos Islands among them)"],
    ["World Heritage Committee","<b>21</b> member countries, elected from those that have signed; meets once a year and decides which sites are inscribed"],
    ["Advisory bodies","<b>ICOMOS</b> (cultural sites), <b>IUCN</b> (natural sites), <b>ICCROM</b> (conservation and training)"],
    ["In India","The <b>Archaeological Survey of India</b> (Ministry of Culture) prepares and looks after cultural sites; natural sites go through the Environment Ministry and the Wildlife Institute of India"],
    ["World Heritage in Danger","A separate list of sites under threat — Manas (1992–2011) and Hampi (1999–2006) were once on it; no Indian site is on it now"],
    ["World Heritage Day","<b>18 April</b> — the International Day for Monuments and Sites"]]},
  {k:"table", title:"The ten selection criteria", head:["Criterion","What it recognises","Type"], rows:[
    ["(i)","A masterpiece of human creative genius — the Taj Mahal is listed on this criterion alone","Cultural"],
    ["(ii)","An exchange of ideas over time in architecture, technology, town planning or art","Cultural"],
    ["(iii)","A unique or rare testimony to a culture or civilisation, living or lost","Cultural"],
    ["(iv)","An outstanding example of a type of building, ensemble or landscape from a stage of history","Cultural"],
    ["(v)","A traditional human settlement or use of land or sea","Cultural"],
    ["(vi)","A direct link with events, living traditions, ideas, beliefs or great works of art and literature","Cultural"],
    ["(vii)","Superlative natural phenomena or exceptional natural beauty","Natural"],
    ["(viii)","Major stages of the Earth's history — rocks, fossils, landforms","Natural"],
    ["(ix)","Ongoing ecological and biological processes in ecosystems","Natural"],
    ["(x)","The most important habitats for conserving biological diversity and threatened species","Natural"]]},
  {k:"p", h:"A site must also show <b>Outstanding Universal Value</b>, be authentic and whole (integrity), and have legal protection and a management plan. A <b>cultural</b> site meets at least one of (i)–(vi), a <b>natural</b> site at least one of (vii)–(x), and a <b>mixed</b> site at least one of each."},
  {k:"table", title:"India's additions, year by year from 2014", head:["Year","Added","Committee session","India's total"], rows: H1_ADD},
  {k:"facts", title:"Counts and firsts (as of October 2026)", rows:[
    ["Total","<b>45</b> — 37 cultural, 7 natural, 1 mixed"],
    ["First four (1983)","Ajanta Caves, Ellora Caves, Agra Fort, Taj Mahal"],
    ["First natural sites (1985)","Kaziranga, Manas, Keoladeo"],
    ["Only mixed site","Khangchendzonga National Park, Sikkim (2016)"],
    ["First Indian city","Ahmedabad (2017); Jaipur followed (2019)"],
    ["First Harappan site in India","Dholavira (2021)"],
    ["First cultural site of the North-East","Moidams, Charaideo (2024)"],
    ["Latest","Ancient Buddhist Site of Sarnath, the 45th (25 July 2026, Busan)"],
    ["State with the most sites","Maharashtra"],
    ["India hosted the Committee","46th session, Bharat Mandapam, New Delhi, July 2024 — the first time in India"]]},
  {k:"facts", title:"The Tentative List", rows:[
    ["What it is","A country's list of places it means to nominate. A site must be on it before it can be nominated; being on it is <b>not</b> World Heritage status"],
    ["India's list","About 80 entries (October 2026) — the number grows as new places are added"],
    ["Waited longest","Sarnath was on the Tentative List from 1998 until it was inscribed in 2026"],
    ["Added in 2026","Bagh Caves (MP), Udaigiri Caves (MP), Group of Temples of the Chambal Valley, Painted Haveli Towns of Shekhawati (Rajasthan); in October, the Sirpur landscape (Chhattisgarh) and two volcanic sites of the Andaman Islands"],
    ["Added in 2025","Seven natural sites, among them the Deccan Traps at Panchgani, St Mary's Island (Udupi), the Varkala cliffs and the Meghalayan Age caves"]]},
  {k:"trick", h:"Count the split as <b>“37–7–1”</b>: 37 cultural, 7 natural, 1 mixed = 45. The years since 2014 run <b>2-0-3-1-1-1, gap, 2, gap, 2-1-1-1</b> — 2014 two sites, 2015 none, 2016 three, then one a year to 2019, no meeting in 2020, two in 2021, no session in 2022, two in 2023, then one each in 2024, 2025 and 2026."},
  {k:"trap", h:"The Convention is of <b>1972</b>, but India's first sites came in <b>1983</b>; the first world list was in <b>1978</b>. <b>ICOMOS</b> judges cultural sites and <b>IUCN</b> natural ones — not UNEP or WWF. A place on the <b>Tentative List</b> (Sirpur, Shekhawati) is <b>not</b> yet a World Heritage site. Maratha Military Landscapes (2025) was the 44th; <b>Sarnath (2026)</b> is the 45th."},
  {k:"link", h:"For the full table of all sites with their states, see the UNESCO lesson in <a href=\"study-art-culture.html\">Art &amp; Culture</a>. The next five lessons here go through every site group by group, in more depth."}
], sum:["The World Heritage Convention was adopted in Paris on 16 November 1972; India ratified it in 1977.","India's first four sites (1983): Ajanta, Ellora, Agra Fort and the Taj Mahal.","As of October 2026 India has 45 sites: 37 cultural, 7 natural and 1 mixed (Khangchendzonga).","Latest: Sarnath, the 45th, at the 48th session in Busan (July 2026); before it Maratha Military Landscapes (2025) and Moidams (2024).","Ten criteria: (i)–(vi) cultural, (vii)–(x) natural. ICOMOS checks cultural sites, IUCN natural ones.","The Committee has 21 members; India hosted its 46th session in New Delhi in July 2024.","World Heritage Day is 18 April. A Tentative List place is not yet a World Heritage site."]}
);

QB.push(
["H1","The World Heritage Convention was adopted by UNESCO's General Conference in which year?",["1972","1945","1978","2003"],"It was adopted on 16 November 1972 in Paris. UNESCO itself dates from 1945, the first list from 1978, and the intangible heritage convention from 2003.",""],
["H1","In which city was the World Heritage Convention adopted?",["Paris","Geneva","New York","Rome"],"It was adopted at UNESCO's General Conference in Paris, where UNESCO has its headquarters.",""],
["H1","India ratified the World Heritage Convention in:",["1977","1972","1983","1952"],"India ratified it in 1977. Its first sites were inscribed six years later, in 1983.",""],
["H1","In which year were India's first World Heritage sites inscribed?",["1983","1977","1985","1972"],"Ajanta, Ellora, Agra Fort and the Taj Mahal were inscribed in 1983. The first natural sites followed in 1985.",""],
["H1","Which four sites were India's first on the World Heritage list?",["Ajanta, Ellora, Agra Fort and Taj Mahal","Taj Mahal, Red Fort, Qutb Minar and Humayun's Tomb","Ajanta, Ellora, Elephanta and Sanchi","Konark, Mahabalipuram, Khajuraho and Hampi"],"The 1983 four were two cave sites of Maharashtra and two Mughal monuments of Agra.",""],
["H1","How many selection criteria does UNESCO use for World Heritage sites?",["Ten","Six","Four","Twelve"],"There are ten: (i) to (vi) for cultural value and (vii) to (x) for natural value.",""],
["H1","Criteria (i) to (vi) of the World Heritage list are used for which kind of site?",["Cultural","Natural","Intangible","Underwater only"],"Criteria (i)–(vi) are cultural; (vii)–(x) are natural.",""],
["H1","A 'mixed' World Heritage site is one that:",["Meets at least one cultural and one natural criterion","Lies in two or more countries","Has both a temple and a fort","Is on both the World Heritage and the Ramsar lists"],"A mixed site is valued for both nature and culture. India's only one is Khangchendzonga.",""],
["H1","Which body advises UNESCO on whether a cultural site should be listed?",["ICOMOS","IUCN","UNEP","WWF"],"The International Council on Monuments and Sites (ICOMOS) evaluates cultural nominations.",""],
["H1","Which body evaluates natural sites for the World Heritage list?",["IUCN","ICOMOS","UNEP","FAO"],"The International Union for Conservation of Nature (IUCN) evaluates natural nominations.",""],
["H1","How many member countries sit on the World Heritage Committee?",["21","15","54","193"],"The Committee has 21 members, elected by the countries that have signed the Convention.",""],
["H1","Before a site can be nominated for the World Heritage list, it must be on the country's:",["Tentative List","List of World Heritage in Danger","Memory of the World Register","Ramsar List"],"A country must first place a site on its Tentative List; only then can it send a full nomination.",""],
["H1","As of October 2026, how many World Heritage sites does India have?",["45","44","42","40"],"Sarnath, inscribed in July 2026, made it 45. The Maratha Military Landscapes (2025) had been the 44th.",""],
["H1","India's 45 World Heritage sites (as of October 2026) are made up of:",["37 cultural, 7 natural and 1 mixed","36 cultural, 8 natural and 1 mixed","38 cultural, 6 natural and 1 mixed","35 cultural, 8 natural and 2 mixed"],"37 + 7 + 1 = 45. Khangchendzonga is the one mixed site.",""],
["H1","Which became India's 45th World Heritage site in July 2026?",["Ancient Buddhist Site of Sarnath","Maratha Military Landscapes of India","Moidams of Charaideo","Sacred Ensembles of the Hoysalas"],"Sarnath was inscribed on 25 July 2026 at the 48th session in Busan, South Korea.",""],
["H1","Sarnath was inscribed at the 48th session of the World Heritage Committee held in:",["Busan","Paris","New Delhi","Riyadh"],"The 48th session met in Busan, South Korea, in July 2026.",""],
["H1","India hosted a session of the World Heritage Committee for the first time in July 2024. Which session was it?",["46th","44th","45th","47th"],"The 46th session was held at Bharat Mandapam, New Delhi, in July 2024.",""],
["H1","Which Indian site was inscribed at the 46th session, held in New Delhi in 2024?",["Moidams of the Ahom dynasty","Santiniketan","Ramappa Temple","Maratha Military Landscapes"],"The Moidams of Charaideo, Assam, became India's 43rd site in New Delhi in July 2024.",""],
["H1","At which session were the Maratha Military Landscapes inscribed in July 2025?",["47th session, Paris","46th session, New Delhi","45th session, Riyadh","48th session, Busan"],"The 47th session at UNESCO's headquarters in Paris inscribed them as India's 44th site.",""],
["H1","In which year did India add no World Heritage site because the Committee did not meet at all?",["2020","2019","2021","2023"],"The Committee did not meet in 2020 because of COVID-19; the 2021 session decided the nominations of both years.",""],
["H1","Which two Indian sites were inscribed in 2021?",["Ramappa Temple and Dholavira","Santiniketan and the Hoysala temples","Jaipur City and Ahmedabad","Nalanda and Khangchendzonga"],"Both were inscribed at the 44th session, held online from Fuzhou, China.",""],
["H1","India added three sites at the 2016 session. Which of these was NOT one of them?",["Rani ki Vav","Nalanda Mahavihara","Khangchendzonga National Park","Capitol Complex, Chandigarh"],"Rani ki Vav was inscribed in 2014. The three of 2016 were Nalanda, Khangchendzonga and the Capitol Complex.",""],
["H1","Which pair of Indian sites was inscribed in 2014?",["Rani ki Vav and Great Himalayan National Park","Hill Forts of Rajasthan and Western Ghats","Jantar Mantar and Red Fort","Jaipur City and the Mumbai ensembles"],"Both were inscribed at the 38th session in Doha.",""],
["H1","Santiniketan and the Hoysala temples were inscribed in 2023 at the session held in:",["Riyadh","Baku","Fuzhou","Istanbul"],"The extended 45th session met in Riyadh, Saudi Arabia, in September 2023.",""],
["H1","The Taj Mahal is inscribed on which single criterion?",["(i) — a masterpiece of human creative genius","(vi) — a link with events or beliefs","(x) — habitats for biodiversity","(v) — traditional use of land"],"The Taj Mahal is one of the few sites listed on criterion (i) alone.",""],
["H1","Which criterion covers 'superlative natural phenomena or exceptional natural beauty'?",["(vii)","(i)","(iv)","(x)"],"Criterion (vii) is about natural beauty; (x) is about habitats for biodiversity.",""],
["H1","World Heritage Day (International Day for Monuments and Sites) is observed on:",["18 April","18 May","5 June","27 September"],"18 May is International Museum Day, 5 June World Environment Day, 27 September World Tourism Day.",""],
["H1","Which body prepares nominations and looks after most of India's cultural World Heritage sites?",["Archaeological Survey of India","Sangeet Natak Akademi","Lalit Kala Akademi","National Archives of India"],"The ASI, under the Ministry of Culture, is the nodal body for cultural World Heritage sites.",""],
["H1","Which Indian cultural site was on the List of World Heritage in Danger from 1999 to 2006?",["Group of Monuments at Hampi","Taj Mahal","Sun Temple, Konark","Fatehpur Sikri"],"Hampi was put on the danger list because of new bridges and roads near the ruins, and removed in 2006.",""],
["H1","Sarnath waited on India's Tentative List from which year before its inscription in 2026?",["1998","1983","2010","2020"],"It was placed on the Tentative List in 1998 and inscribed 28 years later.",""],
["H1","Which of these was on India's Tentative List, and NOT yet a World Heritage site, in October 2026?",["Sirpur Cultural and Archaeological Landscape","Dholavira","Rani ki Vav","Santiniketan"],"Sirpur in Chhattisgarh was added to the Tentative List in October 2026. The other three are inscribed sites.",""],
["H1","In which year did UNESCO draw up the first World Heritage list, of 12 sites?",["1978","1972","1983","1965"],"The first 12 sites, including the Galápagos Islands, were listed in 1978.",""],
["H1","Which Indian state has the most World Heritage sites?",["Maharashtra","Uttar Pradesh","Rajasthan","Karnataka"],"Maharashtra has Ajanta, Ellora, Elephanta, CST and the Mumbai ensembles, and shares the Maratha forts and the Western Ghats.",""]
);
TILES.push(["45","India's World Heritage sites (Oct 2026)","hm"],["1972","World Heritage Convention","hm"],["1983","India's first four sites","hm"],["37·7·1","Cultural · natural · mixed","hm"]);
LASTMOMENT.push({t:"World Heritage basics", era:["hm"], rows:[["Convention","1972, Paris"],["India joined","1977"],["First Indian sites","1983 (Ajanta, Ellora, Agra Fort, Taj)"],["Total","45 = 37 + 7 + 1 (Oct 2026)"],["Latest","Sarnath, July 2026, Busan"],["Judges","ICOMOS cultural, IUCN natural"],["Day","18 April"]]});

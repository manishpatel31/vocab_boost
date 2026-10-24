/* Part 2 · F3 the first holders of India's posts, F4 the first women, F5 the first institutions, events and things,
   F6 the world's firsts. Firsts from 2024–2026 (Shubhanshu Shukla on the ISS, 2025) were checked as of October 2026. */

/* F3 — the first holders of India's top posts (pairQs asks both ways). */
const F3P = [
  ["the first President of India","Rajendra Prasad","Rajendra Prasad was President from 1950 to 1962 — the only one elected twice.","pres"],
  ["the first Vice-President of India","Sarvepalli Radhakrishnan","Radhakrishnan was Vice-President from 1952 to 1962 and then the second President.","pres"],
  ["the first Prime Minister of India","Jawaharlal Nehru","Nehru was Prime Minister from 1947 until his death in 1964.","gov"],
  ["the first Deputy Prime Minister of India","Vallabhbhai Patel","Patel was also the first Home Minister and joined the princely states to India.","gov"],
  ["the first Governor-General of independent India","Lord Mountbatten","Mountbatten stayed on as Governor-General from August 1947 to June 1948.","gov"],
  ["the first (and last) Indian Governor-General","C. Rajagopalachari","Rajaji held the post from 1948 until it ended on 26 January 1950.","gov"],
  ["the first Speaker of the Lok Sabha","G. V. Mavalankar","Ganesh Vasudev Mavalankar was Speaker from 1952 to 1956.","off"],
  ["the first Chief Justice of India","H. J. Kania","Harilal Jekisundas Kania headed the Supreme Court from 1950 to 1951.","off"],
  ["the first Chief Election Commissioner","Sukumar Sen","Sukumar Sen ran the first general elections of 1951–52.","off"],
  ["the first Attorney General of India","M. C. Setalvad","Motilal Chimanlal Setalvad was Attorney General from 1950 to 1963.","off"],
  ["the first Comptroller and Auditor General","V. Narahari Rao","V. Narahari Rao was CAG from 1948 to 1954.","off"],
  ["the first Finance Minister of independent India","R. K. Shanmukham Chetty","Shanmukham Chetty presented independent India's first budget on 26 November 1947.","gov"],
  ["the first Education Minister of India","Maulana Abul Kalam Azad","Azad's birthday, 11 November, is kept as National Education Day.","gov"],
  ["the first Law Minister of India","B. R. Ambedkar","Ambedkar also chaired the Drafting Committee of the Constitution.","gov"],
  ["the first Indian Governor of the Reserve Bank","C. D. Deshmukh","C. D. Deshmukh led the RBI from 1943 to 1949 and later became Finance Minister.","off"],
  ["the first non-Congress Prime Minister","Morarji Desai","Morarji Desai led the Janata Party government of 1977–79.","gov"],
  ["the first Muslim President of India","Zakir Husain","Zakir Husain (1967–69) was also the first President to die in office.","pres"],
  ["the first Sikh President of India","Giani Zail Singh","Zail Singh was President from 1982 to 1987.","pres"],
  ["the first Dalit President of India","K. R. Narayanan","K. R. Narayanan was President from 1997 to 2002.","pres"],
  ["the first President from a Scheduled Tribe","Droupadi Murmu","Droupadi Murmu took office in July 2022 — also the second woman President.","pres"],
  ["the first acting President of India","V. V. Giri","V. V. Giri acted as President in 1969 after Zakir Husain died, and was then elected.","pres"],
  ["the first Chief Justice to act as President","M. Hidayatullah","M. Hidayatullah acted as President in July–August 1969, when V. V. Giri resigned to stand for election.","pres"]
];
/* F3 — Indians who were first on the world stage (forward questions only). */
const F3W = [
  ["the first Indian to go into space","Rakesh Sharma","Rakesh Sharma flew on Soyuz T-11 on 3 April 1984 with two Soviet cosmonauts.","world"],
  ["the first Indian to visit the International Space Station","Shubhanshu Shukla","Group Captain Shubhanshu Shukla piloted Axiom-4, which docked with the ISS on 26 June 2025.","world"],
  ["the first Indian to win a Nobel Prize","Rabindranath Tagore","Tagore won the Literature prize in 1913 for Gitanjali — the first Asian laureate too.","world"],
  ["the first Indian elected to the British House of Commons","Dadabhai Naoroji","Naoroji won Finsbury Central in 1892.","world"],
  ["the first President of the Indian National Congress","W. C. Bonnerjee","Womesh Chunder Bonnerjee presided over the first session at Bombay in 1885.","world"],
  ["the first Indian to join the Indian Civil Service","Satyendranath Tagore","Rabindranath's elder brother was selected in 1863.","world"],
  ["the first Indian to win an individual Olympic gold","Abhinav Bindra","Bindra won the 10 m air rifle at Beijing in 2008.","sport"],
  ["the first Indian to win an individual Olympic medal","K. D. Jadhav","Khashaba Dadasaheb Jadhav won wrestling bronze at Helsinki in 1952.","sport"],
  ["the first Indian to win an Olympic gold in athletics","Neeraj Chopra","Neeraj Chopra won the javelin at the Tokyo Games (held in 2021).","sport"],
  ["the first Indian to win an Oscar","Bhanu Athaiya","Bhanu Athaiya won for costume design for Gandhi in 1983.","world"],
  ["the first captain of India in Test cricket","C. K. Nayudu","C. K. Nayudu led India in its first Test, at Lord's in 1932.","sport"]
];
fsPairs("F3", F3P, { q: t => `Who became ${t}?`, rq: a => `${a} is known as:` });
fsPairs("F3", F3W, { q: t => `Who was ${t}?` });

/* F4 — the first women (pairQs asks both ways). */
const F4P = [
  ["the first woman Prime Minister of India","Indira Gandhi","Indira Gandhi became Prime Minister in January 1966.","pol"],
  ["the first woman President of India","Pratibha Patil","Pratibha Patil was President from 2007 to 2012.","pol"],
  ["the first woman Governor of an Indian state","Sarojini Naidu","Sarojini Naidu became Governor of the United Provinces (now Uttar Pradesh) in 1947.","pol"],
  ["the first woman Chief Minister in India","Sucheta Kripalani","Sucheta Kripalani became Chief Minister of Uttar Pradesh in 1963.","pol"],
  ["the first woman Union Cabinet minister","Rajkumari Amrit Kaur","Rajkumari Amrit Kaur was Health Minister from 1947 to 1957 and founded AIIMS.","pol"],
  ["the first woman President of the UN General Assembly","Vijaya Lakshmi Pandit","Vijaya Lakshmi Pandit presided over the General Assembly in 1953 — the first woman anywhere to do so.","pol"],
  ["the first woman Speaker of the Lok Sabha","Meira Kumar","Meira Kumar was Speaker from 2009 to 2014.","pol"],
  ["the first woman judge of the Supreme Court","M. Fathima Beevi","Fathima Beevi joined the Supreme Court in 1989 and was later Governor of Tamil Nadu.","law"],
  ["the first woman judge of a High Court","Anna Chandy","Anna Chandy became a judge of the Kerala High Court in 1959.","law"],
  ["the first woman Chief Justice of a High Court","Leila Seth","Leila Seth became Chief Justice of the Himachal Pradesh High Court in 1991.","law"],
  ["the first woman IAS officer","Anna Rajam Malhotra","Anna Rajam Malhotra joined the Indian Administrative Service in 1951.","law"],
  ["the first woman IPS officer","Kiran Bedi","Kiran Bedi joined the Indian Police Service in 1972.","law"],
  ["the first woman officer of the Indian Foreign Service","C. B. Muthamma","C. B. Muthamma joined in 1949 and later won a Supreme Court case against rules that held women back in the service.","law"],
  ["the first Indian woman to climb Mount Everest","Bachendri Pal","Bachendri Pal reached the summit on 23 May 1984.","adv"],
  ["the first woman to climb Everest twice","Santosh Yadav","Santosh Yadav climbed it in 1992 and again in 1993.","adv"],
  ["the first woman amputee to climb Everest","Arunima Sinha","Arunima Sinha, who lost a leg in a train attack, reached the top in May 2013.","adv"],
  ["the first Indian-born woman in space","Kalpana Chawla","Kalpana Chawla flew on the space shuttle Columbia (STS-87) in 1997.","adv"],
  ["the first Indian woman to win an Olympic medal","Karnam Malleswari","Karnam Malleswari won weightlifting bronze at Sydney in 2000.","adv"],
  ["the first Indian woman to win an Olympic silver medal","P. V. Sindhu","P. V. Sindhu won badminton silver at Rio in 2016.","adv"],
  ["the first Indian woman to fly an aircraft","Sarla Thakral","Sarla Thakral earned her flying licence in 1936, at the age of 21.","adv"],
  ["the first woman Chief Election Commissioner","V. S. Ramadevi","V. S. Ramadevi held the post briefly in 1990.","pol"],
  ["the first Indian woman to win Miss World","Reita Faria","Reita Faria won the title in 1966.","arts"],
  ["the first woman to win the Jnanpith Award","Ashapurna Devi","The Bengali writer Ashapurna Devi received it in 1976.","arts"],
  ["the first woman to win the Sahitya Akademi Award","Amrita Pritam","The Punjabi poet Amrita Pritam won it in 1956 for Sunehe.","arts"],
  ["the first winner of the Dadasaheb Phalke Award","Devika Rani","The actress Devika Rani received the first award in 1969.","arts"],
  ["the first Indian woman to win the Booker Prize","Arundhati Roy","Arundhati Roy won in 1997 for The God of Small Things.","arts"],
  ["the first woman ruler of the Delhi Sultanate","Razia Sultan","Razia ruled from 1236 to 1240.","pol"]
];
fsPairs("F4", F4P, { q: t => `Who was ${t}?`, rq: a => `${a} is known as:`, fill: { arts: ["adv"] } });

LESSONS.push(
{id:"F3", heat:2, title:"Firsts in India: the people", hi:"भारत में प्रथम: व्यक्ति", blocks:[
  {k:"hot", h:"Most asked: the first <b>President, Vice-President, Prime Minister</b> and <b>Governor-General</b>; the first <b>Speaker, Chief Justice, Chief Election Commissioner</b>; the first <b>Muslim, Sikh, Dalit and tribal</b> Presidents; and the first Indian <b>in space</b>, <b>on the ISS</b> and <b>to win a Nobel</b>."},
  {k:"story", h:"<p>When the Constitution came into force on <b>26 January 1950</b>, India filled its new posts for the first time. <b>Rajendra Prasad</b> became the first President, and in 1952 <b>Sarvepalli Radhakrishnan</b> became the first Vice-President. <b>Jawaharlal Nehru</b> had been Prime Minister since 1947, with <b>Vallabhbhai Patel</b> as his deputy. The Governor-General's chair passed from <b>Lord Mountbatten</b> to <b>C. Rajagopalachari</b>, the first and last Indian to hold it. <b>H. J. Kania</b> became the first Chief Justice, and <b>Sukumar Sen</b>, the first Chief Election Commissioner, ran the first general elections of 1951–52.</p><p>Other 'firsts' came later: <b>Morarji Desai</b> led the first non-Congress government (1977); <b>Rakesh Sharma</b> went into space (1984); and in 2025 <b>Shubhanshu Shukla</b> became the first Indian to visit the International Space Station.</p>",
    key:"Prasad, Radhakrishnan, Nehru, Patel, Mountbatten → Rajaji, Mavalankar, Kania, Sukumar Sen."},
  {k:"table", title:"First holders of India's posts", head:["First","Who","Note"], rows: F3P.map(r => [r[0].charAt(0).toUpperCase() + r[0].slice(1), r[1], r[2]])},
  {k:"table", title:"Indians first on the world stage", head:["First","Who","Note"], rows: F3W.map(r => [r[0].charAt(0).toUpperCase() + r[0].slice(1), r[1], r[2]])},
  {k:"link", h:"More firsts elsewhere: the first <b>Bharat Ratna</b> awardees and the first woman, posthumous and foreign recipients — see <a href=\"study-awards.html?lesson=A1\">Awards &amp; Honours</a>; the first <b>Field Marshal</b>, Param Vir Chakra and CDS — see <a href=\"study-defence.html?lesson=F3\">Defence</a>; and the newest 'first' appointments — see <a href=\"study-appointments.html\">Appointments</a>."},
  {k:"trick", h:"The first family of the Republic — <b>“Prasad Presides, Radha Assists, Nehru Navigates, Patel Protects”</b>: President, Vice-President, Prime Minister, Deputy PM and Home Minister."},
  {k:"trap", h:"<b>Mountbatten</b> was the first Governor-General of <b>independent</b> India; <b>Rajagopalachari</b> was the first (and last) <b>Indian</b> Governor-General. <b>V. V. Giri</b> was the first <b>acting</b> President, but <b>M. Hidayatullah</b> was the first <b>Chief Justice</b> to act as President. <b>Rakesh Sharma</b> was the first Indian in space; <b>Shubhanshu Shukla</b> the first on the <b>ISS</b>."}
], sum:["President Rajendra Prasad; Vice-President S. Radhakrishnan; PM Jawaharlal Nehru; Deputy PM Vallabhbhai Patel.","Governor-General: Mountbatten (first of free India), then C. Rajagopalachari (first and last Indian).","Speaker G. V. Mavalankar; CJI H. J. Kania; CEC Sukumar Sen; AG M. C. Setalvad; CAG V. Narahari Rao.","First non-Congress PM: Morarji Desai (1977). Presidents: Zakir Husain (first Muslim), Zail Singh (Sikh), K. R. Narayanan (Dalit), Droupadi Murmu (Scheduled Tribe).","Rakesh Sharma — space (1984); Shubhanshu Shukla — ISS (2025); Tagore — Nobel (1913)."]},

{id:"F4", heat:3, title:"Firsts in India: women", hi:"भारत में प्रथम: महिलाएँ", blocks:[
  {k:"hot", h:"The most asked 'firsts' of all: the first woman <b>Prime Minister, President, Governor, Chief Minister, Union minister, Speaker</b>; the first woman <b>Supreme Court and High Court judges</b>; the first woman <b>IAS and IPS</b> officers; and the first women to <b>climb Everest</b>, go <b>into space</b> and win <b>Olympic medals</b>."},
  {k:"story", h:"<p>Indian women broke one barrier after another. In 1947 <b>Sarojini Naidu</b> became the first woman Governor and <b>Rajkumari Amrit Kaur</b> the first woman in the Union Cabinet. <b>Anna Rajam Malhotra</b> joined the IAS in 1951; <b>Kiran Bedi</b> the IPS in 1972. In 1963 <b>Sucheta Kripalani</b> became Chief Minister of Uttar Pradesh, and in 1966 <b>Indira Gandhi</b> became Prime Minister. The courts followed: <b>Anna Chandy</b> (High Court, 1959), <b>Fathima Beevi</b> (Supreme Court, 1989) and <b>Leila Seth</b> (High Court Chief Justice, 1991).</p><p>Beyond the office: <b>Bachendri Pal</b> stood on Everest in 1984; <b>Kalpana Chawla</b> flew in space in 1997; <b>Karnam Malleswari</b> won India's first Olympic medal by a woman in 2000. In 2007 <b>Pratibha Patil</b> became the first woman President.</p>",
    key:"Governor Naidu, minister Amrit Kaur, IAS Anna Rajam Malhotra, CM Kripalani, PM Indira, IPS Bedi, President Patil."},
  {k:"table", title:"First women", head:["First","Who","Note"], rows: F4P.map(r => [r[0].charAt(0).toUpperCase() + r[0].slice(1), r[1], r[2]])},
  {k:"facts", title:"More first women", rows:[
    ["First women graduates (1883)","Kadambini Ganguly and Chandramukhi Basu, University of Calcutta"],
    ["First Indian woman with a degree in Western medicine","Anandibai Joshi — MD from Pennsylvania, 1886"],
    ["First woman to practise law in India","Cornelia Sorabji"],
    ["First woman teacher of modern India","Savitribai Phule — opened a girls' school in Pune in 1848"],
    ["First woman Bharat Ratna","Indira Gandhi (1971)"],
    ["First Indian woman Nobel laureate","Mother Teresa — Peace, 1979"],
    ["First Asian woman to swim the English Channel","Arati Saha (1959)"],
    ["First woman Chief Minister of Delhi","Sushma Swaraj (1998)"],
    ["First woman to head the State Bank of India","Arundhati Bhattacharya (2013)"],
    ["First woman to present a full Union Budget as Finance Minister","Nirmala Sitharaman (2019)"],
    ["First Indian winner of the International Booker Prize","Geetanjali Shree, Tomb of Sand (2022); Banu Mushtaq's Heart Lamp (2025) was the first Kannada winner"]]},
  {k:"link", h:"The first women <b>fighter pilots</b>, the first woman <b>Lieutenant General</b> and the first woman <b>Rafale pilot</b> are in <a href=\"study-defence.html?lesson=F3\">Defence</a>. Women leaders of the freedom struggle are in <a href=\"study-history-modern.html\">Modern History</a> (L32)."},
  {k:"trick", h:"The 1947 pair — <b>“Sarojini Governs, Amrit Ministers”</b>. The 'ladder' of the courts — <b>“Anna climbs, Fathima reaches the top, Leila leads”</b>: Anna Chandy (HC judge 1959) → Fathima Beevi (SC judge 1989) → Leila Seth (HC Chief Justice 1991)."},
  {k:"trap", h:"<b>Anna Rajam Malhotra</b> = IAS; <b>Kiran Bedi</b> = IPS — don't swap. <b>Bachendri Pal</b> climbed Everest first (1984); <b>Santosh Yadav</b> was first to do it <b>twice</b>. The first woman <b>Governor</b> is Sarojini Naidu, but the first woman <b>Chief Minister</b> is Sucheta Kripalani — both in Uttar Pradesh. India has <b>not yet had a woman Chief Justice of India</b> (as of October 2026); Justice B. V. Nagarathna is in line for 2027."}
], sum:["PM Indira Gandhi (1966); President Pratibha Patil (2007); Speaker Meira Kumar (2009).","Governor Sarojini Naidu (1947); CM Sucheta Kripalani (1963); Union minister Rajkumari Amrit Kaur (1947).","Judges: Anna Chandy (HC, 1959), Fathima Beevi (SC, 1989), Leila Seth (HC Chief Justice, 1991).","IAS Anna Rajam Malhotra (1951); IPS Kiran Bedi (1972); IFS C. B. Muthamma (1949).","Everest: Bachendri Pal (1984), Santosh Yadav twice, Arunima Sinha (amputee, 2013).","Space Kalpana Chawla (1997); Olympic medal Karnam Malleswari (2000); silver P. V. Sindhu (2016)."]},

{id:"F5", heat:2, title:"Firsts in India: institutions, events and things", hi:"भारत में प्रथम: संस्थाएँ, घटनाएँ और वस्तुएँ", blocks:[
  {k:"hot", h:"Most asked: the first <b>newspaper</b> (Hicky's Bengal Gazette, 1780), the first <b>film</b> and <b>talkie</b>, the first <b>universities</b> (1857), <b>IIT</b> and <b>AIIMS</b>, the first <b>nuclear reactor</b> (Apsara) and <b>power plant</b> (Tarapur), the first <b>Antarctic station</b>, the first <b>test-tube baby</b> and the first <b>general elections</b>."},
  {k:"story", h:"<p>Modern India's 'firsts' tell its story. Printing brought <b>Hicky's Bengal Gazette</b> (1780), and in 1857 the British opened universities at <b>Calcutta, Bombay and Madras</b>. In 1913 <b>Dadasaheb Phalke</b> made the first Indian feature film, <b>Raja Harishchandra</b>; in 1931 <b>Alam Ara</b> brought sound.</p><p>After 1947 the young republic built: the first <b>IIT</b> at Kharagpur (1951), the first <b>AIIMS</b> (1956), and <b>Apsara</b> at Trombay (1956) — the first nuclear reactor in Asia. <b>Doordarshan</b> began in 1959; <b>Tarapur</b> became the first nuclear power station (1969); <b>Pokhran</b> saw the first nuclear test (1974); and in 1983–84 India set up its first base in Antarctica, <b>Dakshin Gangotri</b>.</p>",
    key:"Paper 1780 · universities 1857 · film 1913 · talkie 1931 · IIT 1951 · reactor 1956 · TV 1959 · Tarapur 1969 · Pokhran 1974."},
  {k:"facts", title:"Print, film and broadcasting", rows:[
    ["First newspaper","Hicky's Bengal Gazette, Calcutta, 1780 — started by James Augustus Hicky"],
    ["First Hindi newspaper","Udant Martand, Calcutta, 1826 — its first day, 30 May, is Hindi Journalism Day"],
    ["First feature film","Raja Harishchandra (1913), by Dadasaheb Phalke"],
    ["First talkie","Alam Ara (1931), by Ardeshir Irani"],
    ["First colour film made in India","Kisan Kanya (1937)"],
    ["First radio broadcasts","The Radio Club of Bombay, 1923; the name All India Radio from 1936"],
    ["First television","Doordarshan, Delhi, 15 September 1959; colour TV in 1982, for the Asian Games"]]},
  {k:"facts", title:"Education, science and health", rows:[
    ["First modern universities","Calcutta, Bombay and Madras, 1857"],
    ["First IIT","Kharagpur, 1951"],
    ["First IIM","Calcutta, 1961 (Ahmedabad followed weeks later)"],
    ["First AIIMS","New Delhi, 1956"],
    ["First nuclear reactor","Apsara, Trombay, 1956 — also Asia's first"],
    ["First nuclear power station","Tarapur, Maharashtra, 1969"],
    ["First nuclear test","'Smiling Buddha', Pokhran (Rajasthan), 18 May 1974"],
    ["First satellite","Aryabhata, 19 April 1975, on a Soviet rocket"],
    ["First expedition to Antarctica","1981–82, led by S. Z. Qasim"],
    ["First station in Antarctica","Dakshin Gangotri (1983–84); then Maitri and Bharati"],
    ["First station in the Arctic","Himadri, Svalbard (Norway), 2008"],
    ["First test-tube baby","Durga (Kanupriya Agarwal), Kolkata, 3 October 1978 — Dr Subhas Mukhopadhyay's team"],
    ["First heart transplant","AIIMS, 1994 — Dr P. Venugopal"]]},
  {k:"facts", title:"Democracy, money and the map", rows:[
    ["First general elections","1951–52; the first Lok Sabha met in 1952"],
    ["First Five-Year Plan","1951–56"],
    ["First Lok Adalat","Junagadh, Gujarat, 1982"],
    ["Asia's oldest stock exchange","Bombay Stock Exchange, 1875"],
    ["Asia's first postage stamp","The 'Scinde Dawk', Karachi (Sind), 1852"],
    ["First telegraph line","Calcutta to Diamond Harbour, 1851"],
    ["One of Asia's first hydro plants","Sidrapong, near Darjeeling, 1897"],
    ["First Asian Games","New Delhi, 1951"],
    ["First World Heritage sites","Ajanta, Ellora, Agra Fort and the Taj Mahal (1983)"],
    ["First Ramsar sites","Chilika and Keoladeo (1981)"],
    ["First biosphere reserve","Nilgiri (1986)"]]},
  {k:"link", h:"The first <b>railway</b> (1853), <b>metro</b> (1984), <b>Vande Bharat</b> and India's first <b>airline</b> flight are in <a href=\"study-industries-transport.html?lesson=T6\">Industries &amp; Transport</a>, with the first <b>cotton and jute mills</b> and the first <b>steel plant</b>. The first <b>banks</b> are in <a href=\"study-banking.html?lesson=N3\">Banking</a>; the first <b>satellites and Moon missions</b> in <a href=\"study-space.html\">Space</a>."},
  {k:"trick", h:"Film in three steps — <b>“Phalke Silent, Irani Talks, Kisan in Colour”</b>: 1913, 1931, 1937. Nuclear in three — <b>“Apsara 56, Tarapur 69, Pokhran 74”</b>."},
  {k:"trap", h:"<b>Apsara</b> is a research <b>reactor</b> (Trombay); <b>Tarapur</b> is the first <b>power station</b> — different things. <b>Dakshin Gangotri</b> is in <b>Antarctica</b>, <b>Himadri</b> in the <b>Arctic</b>. The first universities (1857) were <b>Calcutta, Bombay and Madras</b> — not Delhi or Banaras."}
], sum:["Hicky's Bengal Gazette (1780); Udant Martand (1826, first Hindi paper).","Raja Harishchandra (1913), Alam Ara (1931), Kisan Kanya (1937); Doordarshan 1959.","Universities 1857 (Calcutta, Bombay, Madras); IIT Kharagpur 1951; AIIMS 1956; IIM Calcutta 1961.","Apsara reactor (1956), Tarapur power station (1969), Pokhran test (1974), Aryabhata (1975).","Dakshin Gangotri (Antarctica, 1983–84); Himadri (Arctic, 2008); first test-tube baby Durga (1978).","General elections 1951–52; first Lok Adalat Junagadh (1982); Asian Games New Delhi (1951)."]},

{id:"F6", heat:1, title:"Firsts in the world", hi:"विश्व में प्रथम", blocks:[
  {k:"hot", h:"Asked now and then: the world's first <b>woman Prime Minister</b> (Sirimavo Bandaranaike), the first woman <b>Nobel</b> laureate (Marie Curie), the first to <b>climb Everest</b> and reach the <b>South Pole</b>, the first <b>Nobel winners</b> of 1901, and the first <b>Olympics</b> and <b>World Cups</b>."},
  {k:"story", h:"<p>The world's firsts are a story of explorers and pioneers. <b>Vasco da Gama</b> reached India by sea in 1498, and <b>Magellan</b>'s ships sailed right round the world (1519–22). <b>Roald Amundsen</b> reached the South Pole in 1911; <b>Tenzing Norgay</b> and <b>Edmund Hillary</b> stood on Everest on 29 May 1953; and in 1975 Japan's <b>Junko Tabei</b> became the first woman there.</p><p>Politics had its pioneers too. <b>Sirimavo Bandaranaike</b> of Sri Lanka became the world's first woman Prime Minister in 1960 — six years before Indira Gandhi — and Iceland's <b>Vigdís Finnbogadóttir</b> the first woman elected President (1980). The first <b>Nobel Prizes</b> were given in <b>1901</b>; <b>Marie Curie</b> was the first woman to win one, and the only person to win in two sciences.</p>",
    key:"Bandaranaike 1960 · Curie 1903 · Amundsen 1911 · Tenzing–Hillary 1953 · Tabei 1975 · Nobel 1901."},
  {k:"table", title:"World firsts: people", head:["First","Who","Note"], rows: []},
  {k:"table", title:"The first Nobel Prizes", head:["Prize","First winner","Note"], rows: []},
  {k:"facts", title:"World firsts: events", rows:[
    ["First modern Olympics","Athens, 1896"],
    ["First Winter Olympics","Chamonix (France), 1924"],
    ["First Paralympics","Rome, 1960"],
    ["First FIFA World Cup","Uruguay, 1930 — the hosts won"],
    ["First Cricket World Cup","England, 1975 — won by the West Indies"],
    ["First Commonwealth Games","Hamilton (Canada), 1930, as the British Empire Games"],
    ["First country where all women could vote","New Zealand, 1893"],
    ["First postage stamp","The Penny Black, Britain, 1840"],
    ["First atomic bomb used in war","Hiroshima, 6 August 1945"],
    ["First to the top of Everest","Tenzing Norgay and Edmund Hillary, 29 May 1953"],
    ["First ascent of Everest without bottled oxygen","Reinhold Messner and Peter Habeler, 1978"]]},
  {k:"facts", title:"Space firsts in one line", rows:[
    ["First human in space","Yuri Gagarin, Vostok 1, 12 April 1961"],
    ["First woman in space","Valentina Tereshkova, 1963"],
    ["First people on the Moon","Neil Armstrong and Buzz Aldrin, Apollo 11, 20 July 1969"],
    ["The full list","See <a href=\"study-space.html\">Space</a>, lesson 14 (World space firsts)"]]},
  {k:"trick", h:"Women at the top, in order — <b>“Sri Lanka 60, India 66, Iceland 80, Britain 79”</b>: Bandaranaike (1960, PM), Indira Gandhi (1966), Thatcher (1979), Vigdís (1980, first elected President)."},
  {k:"trap", h:"The world's first woman Prime Minister was <b>Sirimavo Bandaranaike</b>, not Indira Gandhi or Golda Meir. <b>Amundsen</b> reached the <b>South</b> Pole (1911); <b>Peary</b> claimed the <b>North</b> Pole (1909), a claim still doubted. <b>Magellan</b> died on the way — <b>Elcano</b> brought the ship home in 1522."}
], sum:["First woman PM: Sirimavo Bandaranaike (Sri Lanka, 1960); first woman elected President: Vigdís Finnbogadóttir (Iceland, 1980).","Marie Curie — first woman Nobel laureate (1903); Bertha von Suttner — first woman Peace laureate (1905).","First Nobels, 1901: Röntgen (Physics), van 't Hoff (Chemistry), von Behring (Medicine), Sully Prudhomme (Literature), Dunant and Passy (Peace).","Everest: Tenzing and Hillary (1953); Junko Tabei (first woman, 1975). South Pole: Amundsen (1911).","Olympics Athens 1896; FIFA World Cup Uruguay 1930; Cricket World Cup 1975 (West Indies)."]}
);

/* F6 tables: filled here so pairQs and the lesson read the same rows. */
const F6P = [
  ["the first woman Prime Minister in the world","Sirimavo Bandaranaike","Sirimavo Bandaranaike became Prime Minister of Ceylon (Sri Lanka) in 1960.","lead"],
  ["the first woman elected President of a country","Vigdís Finnbogadóttir","Vigdís Finnbogadóttir was elected President of Iceland in 1980.","lead"],
  ["the first woman Prime Minister of Britain","Margaret Thatcher","Margaret Thatcher led Britain from 1979 to 1990.","lead"],
  ["the first woman Prime Minister of Pakistan","Benazir Bhutto","Benazir Bhutto took office in 1988 — the first woman elected to lead a Muslim-majority country.","lead"],
  ["the first woman Chancellor of Germany","Angela Merkel","Angela Merkel was Chancellor from 2005 to 2021.","lead"],
  ["the first woman Vice-President of the United States","Kamala Harris","Kamala Harris, whose mother came from Chennai, took office in January 2021.","lead"],
  ["the first woman to win a Nobel Prize","Marie Curie","Marie Curie shared the 1903 Physics prize and won Chemistry alone in 1911.","wfeat"],
  ["the first woman to win the Nobel Peace Prize","Bertha von Suttner","The Austrian writer Bertha von Suttner won it in 1905.","wfeat"],
  ["the first woman to climb Mount Everest","Junko Tabei","Junko Tabei of Japan reached the top on 16 May 1975.","wfeat"],
  ["the first person to reach the South Pole","Roald Amundsen","The Norwegian Roald Amundsen's team got there on 14 December 1911.","sea"],
  ["the first person to fly solo non-stop across the Atlantic","Charles Lindbergh","Charles Lindbergh flew the Spirit of St. Louis from New York to Paris in 1927.","mfeat"],
  ["the first woman to fly solo across the Atlantic","Amelia Earhart","Amelia Earhart crossed from Newfoundland to Northern Ireland in 1932.","wfeat"],
  ["the first European to reach India by sea","Vasco da Gama","Vasco da Gama landed near Calicut in May 1498.","sea"],
  ["the leader of the first voyage round the world","Ferdinand Magellan","Magellan's fleet sailed in 1519; he was killed on the way and Juan Sebastián Elcano finished the voyage in 1522.","sea"],
  ["the first person to run a mile in under four minutes","Roger Bannister","Roger Bannister ran 3 minutes 59.4 seconds at Oxford in 1954.","mfeat"],
  ["the first person to sail alone round the world","Joshua Slocum","Joshua Slocum sailed the sloop Spray round the world alone in 1895–98.","sea"]
];
const F6N = [
  ["Physics","Wilhelm Röntgen","Wilhelm Röntgen won the first Physics prize (1901) for discovering X-rays.","nobel"],
  ["Chemistry","Jacobus van 't Hoff","Jacobus van 't Hoff won the first Chemistry prize (1901) for laws of chemical dynamics and osmotic pressure.","nobel"],
  ["Physiology or Medicine","Emil von Behring","Emil von Behring won the first Medicine prize (1901) for serum therapy against diphtheria.","nobel"],
  ["Literature","Sully Prudhomme","The French poet Sully Prudhomme won the first Literature prize (1901).","nobel"],
  ["Peace","Henry Dunant and Frédéric Passy","The first Peace prize (1901) was shared by Henry Dunant, founder of the Red Cross, and Frédéric Passy.","nobel"],
  ["Economic Sciences","Ragnar Frisch and Jan Tinbergen","The Economics prize was first given in 1969, to Ragnar Frisch and Jan Tinbergen.","nobel"]
];
(() => { const l = LESSONS.find(x => x.id === "F6"), t = l.blocks.filter(b => b.k === "table");
  t[0].rows = F6P.map(r => [r[0].charAt(0).toUpperCase() + r[0].slice(1), r[1], r[2]]);
  t[1].rows = F6N.map(r => [r[0], r[1], r[2]]); })();
fsPairs("F6", F6P, { q: t => `Who was ${t}?`, rq: a => `${a} is remembered as:`, fill: { mfeat: ["sea"], sea: ["mfeat"] } });
fsPairs("F6", F6N, { q: t => `Who won the first Nobel Prize in ${t}?` });

QB.push(
["F3","Which President of India was elected for two full terms?",["Rajendra Prasad","Sarvepalli Radhakrishnan","Zakir Husain","A. P. J. Abdul Kalam"],"Rajendra Prasad served from 1950 to 1962, the only President elected twice.",""],
["F3","Which Prime Minister was the first to die outside India?",["Lal Bahadur Shastri","Jawaharlal Nehru","Indira Gandhi","Rajiv Gandhi"],"Shastri died in Tashkent in January 1966, the day after signing the Tashkent Declaration.",""],
["F3","Who was the first President of India to be elected unopposed?",["N. Sanjiva Reddy","V. V. Giri","Zakir Husain","Fakhruddin Ali Ahmed"],"N. Sanjiva Reddy was elected unopposed in 1977.",""],
["F3","Who was the first Indian to address the UN General Assembly in Hindi, in 1977?",["Atal Bihari Vajpayee","Indira Gandhi","P. V. Narasimha Rao","Morarji Desai"],"Vajpayee, then External Affairs Minister, spoke in Hindi at the UN in 1977.",""],
["F3","Who was the first Indian to win the Ramon Magsaysay Award, in 1958?",["Vinoba Bhave","Mother Teresa","Jayaprakash Narayan","Satyajit Ray"],"Vinoba Bhave was honoured for the Bhoodan movement.",""],
["F3","Who was the first Indian President of the International Court of Justice?",["Nagendra Singh","B. N. Rau","Dalveer Bhandari","R. S. Pathak"],"Nagendra Singh presided over the ICJ from 1985 to 1988; Rau and Bhandari served as judges.",""],
["F3","Who was the first chairperson of the Lokpal of India?",["Pinaki Chandra Ghose","A. M. Khanwilkar","Ranjan Gogoi","T. S. Thakur"],"Justice Pinaki Chandra Ghose took charge in March 2019.",""],
["F3","Who was the first Chief Information Commissioner of India?",["Wajahat Habibullah","A. N. Tiwari","Satyananda Mishra","Deepak Sandhu"],"Wajahat Habibullah took office in 2005, under the Right to Information Act.",""],
["F4","Who were the first two women graduates of India, in 1883?",["Kadambini Ganguly and Chandramukhi Basu","Anandibai Joshi and Cornelia Sorabji","Savitribai Phule and Fatima Sheikh","Sarojini Naidu and Annie Besant"],"Both graduated from the University of Calcutta in 1883.",""],
["F4","Who was the first Indian woman to earn a degree in Western medicine?",["Anandibai Joshi","Kadambini Ganguly","Rukhmabai","Muthulakshmi Reddy"],"Anandibai Joshi took her MD in Pennsylvania in 1886.",""],
["F4","Who was the first woman to practise law in India?",["Cornelia Sorabji","Anna Chandy","Leila Seth","Fathima Beevi"],"Cornelia Sorabji was also the first woman to study law at Oxford.",""],
["F4","Who is called the first woman teacher of modern India?",["Savitribai Phule","Pandita Ramabai","Sister Nivedita","Begum Rokeya"],"With Jyotirao Phule she opened a school for girls in Pune in 1848.",""],
["F4","Who was the first woman to receive the Bharat Ratna?",["Indira Gandhi","Mother Teresa","M. S. Subbulakshmi","Lata Mangeshkar"],"Indira Gandhi received it in 1971.",""],
["F4","Who was the first Asian woman to swim across the English Channel, in 1959?",["Arati Saha","Bula Chowdhury","Mihir Sen","Anita Sood"],"Arati Saha crossed in 1959; Mihir Sen was the first Indian man (1958).",""],
["F4","Who was the first woman to head the State Bank of India?",["Arundhati Bhattacharya","Chanda Kochhar","Shikha Sharma","Usha Thorat"],"Arundhati Bhattacharya became SBI's chairperson in 2013.",""],
["F4","Who was the first Indian writer to win the International Booker Prize, for Tomb of Sand (2022)?",["Geetanjali Shree","Banu Mushtaq","Arundhati Roy","Kiran Desai"],"Geetanjali Shree won with Daisy Rockwell's translation from Hindi; Banu Mushtaq won in 2025 for a Kannada book.",""],
["F4","Who was the first woman Chief Minister of Delhi?",["Sushma Swaraj","Sheila Dikshit","Atishi","Rekha Gupta"],"Sushma Swaraj was Chief Minister for a few weeks in 1998, before Sheila Dikshit's long term.",""],
["F4","Who became the first Indian woman Nobel laureate?",["Mother Teresa","Kalpana Chawla","Indira Gandhi","Sarojini Naidu"],"Mother Teresa won the Peace Prize in 1979.",""],
["F5","India's first newspaper, Hicky's Bengal Gazette, began in:",["1780","1818","1857","1826"],"James Augustus Hicky started it in Calcutta in 1780.",""],
["F5","Udant Martand (1826), the first Hindi newspaper, was published from:",["Calcutta","Kanpur","Varanasi","Allahabad"],"Jugal Kishore Shukla brought it out in Calcutta; 30 May is Hindi Journalism Day.",""],
["F5","India's first full-length feature film, Raja Harishchandra (1913), was made by:",["Dadasaheb Phalke","Ardeshir Irani","V. Shantaram","Himanshu Rai"],"Phalke is called the father of Indian cinema.",""],
["F5","Which was India's first talkie (sound film)?",["Alam Ara","Raja Harishchandra","Kisan Kanya","Achhut Kanya"],"Alam Ara was released in 1931.",""],
["F5","Who directed Alam Ara (1931), India's first talkie?",["Ardeshir Irani","Dadasaheb Phalke","Himanshu Rai","Bimal Roy"],"Ardeshir Irani also produced Kisan Kanya, the first colour film made in India.",""],
["F5","The first colour feature film made in India is taken to be:",["Kisan Kanya (1937)","Alam Ara (1931)","Mughal-e-Azam (1960)","Mother India (1957)"],"Kisan Kanya was made in colour in India in 1937.",""],
["F5","Doordarshan's first television broadcast, from Delhi, was in:",["1959","1947","1972","1982"],"It began on 15 September 1959; colour came in 1982.",""],
["F5","Colour television came to India in 1982, in time for the:",["Asian Games in New Delhi","Commonwealth Games in New Delhi","Cricket World Cup in England","Olympics in Moscow"],"The 1982 Asian Games were held in New Delhi.",""],
["F5","India's first three modern universities, founded in 1857, were at:",["Calcutta, Bombay and Madras","Delhi, Aligarh and Banaras","Calcutta, Delhi and Lahore","Bombay, Pune and Nagpur"],"All three were set up in 1857 on the London University model.",""],
["F5","India's first IIT was set up in 1951 at:",["Kharagpur","Bombay","Madras","Kanpur"],"IIT Kharagpur began in the old Hijli detention camp in West Bengal.",""],
["F5","The first IIM was set up in 1961 at:",["Calcutta","Ahmedabad","Bangalore","Lucknow"],"IIM Calcutta came first; IIM Ahmedabad followed a few weeks later.",""],
["F5","The first AIIMS was opened in New Delhi in:",["1956","1947","1961","1975"],"It was set up by an Act of Parliament in 1956, with Rajkumari Amrit Kaur's backing.",""],
["F5","Apsara, India's first nuclear reactor and the first in Asia, started in 1956 at:",["Trombay","Tarapur","Kalpakkam","Rawatbhata"],"Apsara is a research reactor at Trombay, Mumbai.",""],
["F5","India's first nuclear power station, opened in 1969, is at:",["Tarapur","Rawatbhata","Kudankulam","Narora"],"Tarapur is in Maharashtra.",""],
["F5","India's first nuclear test, 'Smiling Buddha' (1974), was carried out at:",["Pokhran","Chandipur","Sriharikota","Trombay"],"It was held at Pokhran, Rajasthan, on 18 May 1974.",""],
["F5","India's first satellite, Aryabhata, was launched in 1975 by a rocket from the:",["Soviet Union","United States","France","European Space Agency"],"It went up on a Soviet rocket on 19 April 1975.",""],
["F5","India's first research station in Antarctica was:",["Dakshin Gangotri","Maitri","Bharati","Himadri"],"Dakshin Gangotri was set up in 1983–84; Himadri is in the Arctic.",""],
["F5","Himadri, opened in 2008 at Svalbard (Norway), is India's first research station in the:",["Arctic","Antarctic","Himalaya","Indian Ocean"],"Himadri is at Ny-Ålesund in Svalbard.",""],
["F5","India's first expedition to Antarctica (1981–82) was led by:",["S. Z. Qasim","Vikram Sarabhai","M. S. Swaminathan","Homi J. Bhabha"],"The oceanographer S. Z. Qasim led the first team.",""],
["F5","India's first test-tube baby, born in Kolkata in 1978, was named:",["Durga","Lakshmi","Saraswati","Parvati"],"Durga (Kanupriya Agarwal) was born on 3 October 1978.",""],
["F5","Who led the team behind India's first test-tube baby?",["Subhas Mukhopadhyay","P. Venugopal","M. S. Valiathan","Naresh Trehan"],"Dr Subhas Mukhopadhyay's work was recognised only years later.",""],
["F5","India's first heart transplant was done in 1994 at AIIMS by:",["P. Venugopal","Naresh Trehan","Devi Shetty","Christiaan Barnard"],"Christiaan Barnard did the world's first, in South Africa in 1967.",""],
["F5","India's first general elections were held in:",["1951–52","1947–48","1950","1957"],"They ran from October 1951 to February 1952.",""],
["F5","India's first Lok Adalat was held in 1982 in:",["Gujarat","Kerala","Maharashtra","Tamil Nadu"],"It was held at Junagadh.",""],
["F5","Asia's first postage stamp, the 'Scinde Dawk' of 1852, was issued in:",["Karachi (Sind)","Calcutta","Bombay","Madras"],"It was issued for the Sind district under Bartle Frere.",""],
["F5","India's first telegraph line (1851) ran from Calcutta to:",["Diamond Harbour","Agra","Bombay","Peshawar"],"The experimental line ran along the Hooghly.",""],
["F5","One of Asia's first hydroelectric plants (1897) was set up at Sidrapong, near:",["Darjeeling","Shimla","Mysuru","Ooty"],"Sidrapong powered Darjeeling town.",""],
["F5","Radio broadcasting in India began in 1923 with the:",["Radio Club of Bombay","All India Radio","Doordarshan","Indian Broadcasting Company"],"The Indian Broadcasting Company came in 1927; the name All India Radio in 1936.",""],
["F5","India's first sites on the UNESCO World Heritage list (1983) included:",["Ajanta, Ellora, Agra Fort and the Taj Mahal","Konark, Hampi, Khajuraho and Sanchi","Qutub Minar, Red Fort, Humayun's Tomb and Fatehpur Sikri","Kaziranga, Manas, Keoladeo and the Sundarbans"],"The four were listed together in 1983.",""],
["F5","India's first Ramsar sites, named in 1981, were:",["Chilika and Keoladeo","Wular and Loktak","Sambhar and Harike","Sundarbans and Vembanad"],"Chilika (Odisha) and Keoladeo (Rajasthan) joined the list in 1981.",""],
["F5","India's first biosphere reserve (1986) was:",["Nilgiri","Nanda Devi","Sundarbans","Gulf of Mannar"],"The Nilgiri Biosphere Reserve spans Tamil Nadu, Kerala and Karnataka.",""],
["F6","The first modern Olympic Games were held in 1896 at:",["Athens","Paris","London","Olympia"],"Athens hosted the first modern Games; the ancient Games were at Olympia.",""],
["F6","The first FIFA World Cup (1930) was hosted and won by:",["Uruguay","Brazil","Italy","Argentina"],"Uruguay beat Argentina in the final at Montevideo.",""],
["F6","Who won the first Cricket World Cup, in 1975?",["West Indies","Australia","England","India"],"The West Indies beat Australia at Lord's.",""],
["F6","The first Winter Olympics were held in 1924 at:",["Chamonix","St. Moritz","Oslo","Lake Placid"],"Chamonix is in the French Alps.",""],
["F6","The first Commonwealth Games, then called the British Empire Games (1930), were held at:",["Hamilton, Canada","London, England","Sydney, Australia","Edinburgh, Scotland"],"Hamilton in Ontario hosted them.",""],
["F6","Which was the first country to give all adult women the vote, in 1893?",["New Zealand","United States","United Kingdom","Finland"],"New Zealand led in 1893; Finland followed in 1906.",""],
["F6","The world's first postage stamp, the Penny Black (1840), was issued by:",["Britain","France","the United States","India"],"Rowland Hill's reforms gave Britain the first adhesive stamp.",""],
["F6","Who were the first to reach the top of Mount Everest, on 29 May 1953?",["Tenzing Norgay and Edmund Hillary","Reinhold Messner and Peter Habeler","George Mallory and Andrew Irvine","Junko Tabei and Ang Tsering"],"Tenzing and Hillary climbed with a British team led by John Hunt.",""],
["F6","Who made the first ascent of Everest without bottled oxygen, in 1978?",["Reinhold Messner and Peter Habeler","Tenzing Norgay and Edmund Hillary","George Mallory and Andrew Irvine","Edmund Hillary and John Hunt"],"Messner and Habeler proved it could be done without oxygen tanks.",""],
["F6","Who claimed in 1909 to be the first to reach the North Pole?",["Robert Peary","Roald Amundsen","Fridtjof Nansen","Ernest Shackleton"],"Peary's claim is still doubted; Amundsen reached the South Pole in 1911.",""],
["F6","Yuri Gagarin, the first human in space, flew aboard:",["Vostok 1","Apollo 11","Sputnik 1","Soyuz T-11"],"Vostok 1 orbited the Earth on 12 April 1961.",""],
["F6","The first two people to walk on the Moon were Neil Armstrong and:",["Buzz Aldrin","Michael Collins","John Glenn","Yuri Gagarin"],"Michael Collins stayed in orbit in the command module.",""]
);

LASTMOMENT.push(
{t:"First holders", era:["fs"], rows:[["President","Rajendra Prasad"],["PM","Nehru"],["Indian GG","C. Rajagopalachari"],["Speaker","G. V. Mavalankar"],["CJI","H. J. Kania"],["CEC","Sukumar Sen"],["In space / ISS","Rakesh Sharma / Shubhanshu Shukla"]]},
{t:"First women", era:["fs"], rows:[["PM","Indira Gandhi"],["President","Pratibha Patil"],["Governor","Sarojini Naidu"],["CM","Sucheta Kripalani"],["IAS / IPS","Anna Rajam Malhotra / Kiran Bedi"],["SC judge","Fathima Beevi"],["Everest","Bachendri Pal"]]},
{t:"World firsts", era:["fs"], rows:[["Woman PM","Bandaranaike (1960)"],["Woman Nobel","Marie Curie"],["Everest","Tenzing–Hillary 1953"],["South Pole","Amundsen 1911"],["Olympics","Athens 1896"],["Women's vote","New Zealand 1893"]]}
);
TILES.push(["1984","Rakesh Sharma in space","fs"],["2025","Shukla on the ISS","fs"],["1966","Indira Gandhi becomes PM","fs"],["1780","Hicky's Bengal Gazette","fs"],["1960","First woman PM in the world","fs"]);

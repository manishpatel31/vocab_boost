/* Part 1 · P1 titles of freedom fighters and who gave them, P2 regional titles and titles after 1947, P3 reformers and women.
   Rows: [title or nickname, person, note, tag]. World History (L30) and Modern India (L21–L24, L32) already teach the
   best-known titles; this app adds who gave each one, the regional and later titles, and the look-alikes. */

const P1T = [
  ["Bapu","Mahatma Gandhi","'Father' in Gujarati and Hindi — the name millions used for him.",""],
  ["Netaji","Subhas Chandra Bose","'Respected leader' — first used for him in Germany in 1942.",""],
  ["Sardar","Vallabhbhai Patel","Given by the women of Bardoli after the Bardoli Satyagraha of 1928.",""],
  ["Iron Man of India","Vallabhbhai Patel","For joining more than 560 princely states to India after 1947.",""],
  ["Bismarck of India","Vallabhbhai Patel","Compared with Otto von Bismarck, who united Germany.",""],
  ["Lokmanya","Bal Gangadhar Tilak","'Accepted by the people as their leader'.",""],
  ["Father of Indian Unrest","Bal Gangadhar Tilak","A label from the British journalist Valentine Chirol (Indian Unrest, 1910).",""],
  ["Deshbandhu","Chittaranjan Das","'Friend of the country'; founded the Swaraj Party with Motilal Nehru (1923).",""],
  ["Grand Old Man of India","Dadabhai Naoroji","Gave the 'drain theory'; three times Congress President.",""],
  ["Chacha","Jawaharlal Nehru","Children's name for him; his birthday, 14 November, is Children's Day.",""],
  ["Gurudev","Rabindranath Tagore","Gandhi's name for him.",""],
  ["Mahamana","Madan Mohan Malaviya","'Great-minded'; founded the Banaras Hindu University (1916).",""],
  ["Deshratna","Rajendra Prasad","'Jewel of the country'; India's first President.",""],
  ["Loknayak","Jayaprakash Narayan","'People's leader'; led the 1974 movement for Total Revolution.",""],
  ["Shaheed-e-Azam","Bhagat Singh","'The greatest martyr'; hanged at Lahore on 23 March 1931.",""],
  ["Masterda","Surya Sen","He was a schoolteacher; led the Chittagong Armoury Raid (1930).",""],
  ["Frontier Gandhi","Khan Abdul Ghaffar Khan","Also Badshah Khan; led the Khudai Khidmatgars ('Red Shirts').",""],
  ["Rajaji","C. Rajagopalachari","The only Indian Governor-General of free India (1948–50).",""],
  ["Babasaheb","B. R. Ambedkar","'Respected father'; chaired the Drafting Committee of the Constitution.",""],
  ["Swatantryaveer","V. D. Savarkar","'Hero of freedom'; jailed in the Cellular Jail, Port Blair.",""],
  ["Deshpriya","Jatindra Mohan Sengupta","'Beloved of the country'; Mayor of Calcutta and a Congress leader of Bengal.",""],
  ["Deshnayak","Subhas Chandra Bose","'Leader of the country' — Tagore greeted him with it in 1939.",""]
];
const P1G = [
  ["'Mahatma' to Gandhi","Rabindranath Tagore","Tagore is usually credited (around 1915); 'Mahatma' means 'great soul'.",""],
  ["'Father of the Nation' to Gandhi","Subhas Chandra Bose","In a radio broadcast on 6 July 1944, asking for Gandhi's blessings for the INA.",""],
  ["'Gurudev' to Tagore","Mahatma Gandhi","Gandhi's respectful name for the poet of Santiniketan.",""],
  ["'Sardar' to Vallabhbhai Patel","The women of Bardoli","After he led the Bardoli Satyagraha against higher land revenue (1928).",""],
  ["'Father of Indian Unrest' to Tilak","Valentine Chirol","A British journalist; he wrote Indian Unrest (1910).",""],
  ["'Half-naked fakir' to Gandhi","Winston Churchill","A sneer of 1931, when Gandhi went to meet the Viceroy in a loincloth.",""],
  ["'Netaji' to Subhas Chandra Bose","Indian soldiers of the Indian Legion in Germany","The soldiers and staff around him in Germany called him Netaji in 1942.",""],
  ["'Deshnayak' to Subhas Chandra Bose","Rabindranath Tagore","Tagore hailed him as the country's leader in 1939.",""],
  ["'Rani' to Gaidinliu","Jawaharlal Nehru","Nehru met the jailed Naga leader in 1937 and called her a queen of her people.",""],
  ["'Raja' to Ram Mohan Roy","Akbar II","The Mughal emperor sent him to England in 1830 as his envoy, with the title Raja.",""],
  ["'Mahatma' to Jyotiba Phule","Vithalrao Krishnaji Vandekar","At a meeting in Bombay in 1888, for Phule's work for the poor and for women.",""],
  ["'Rashtrakavi' to Maithili Sharan Gupt","Mahatma Gandhi","For patriotic poetry such as Bharat Bharati (1912).",""],
  ["the name 'Vivekananda' to Narendranath Datta","Ajit Singh of Khetri","The Maharaja of Khetri suggested the name before the Chicago trip of 1893.",""],
  ["the name 'Nivedita' to Margaret Noble","Swami Vivekananda","'Nivedita' means 'the one dedicated'; she came to India in 1898.",""]
];

const P2K = [
  ["Punjab Kesari","Lala Lajpat Rai","'Lion of Punjab'; died after the lathi charge at Lahore (1928).",""],
  ["Andhra Kesari","Tanguturi Prakasam","First Chief Minister of Andhra State (1953).",""],
  ["Bihar Kesari","Sri Krishna Sinha","'Shri Babu', first Chief Minister of Bihar.",""],
  ["Assam Kesari","Ambikagiri Raichoudhury","Assamese poet and freedom fighter.",""],
  ["Sher-e-Kashmir","Sheikh Mohammad Abdullah","Founder of the National Conference.",""],
  ["Sher-e-Bangla","A. K. Fazlul Huq","Moved the Lahore Resolution (1940); Premier of Bengal.",""],
  ["Bihar Vibhuti","Anugrah Narayan Sinha","First Deputy Chief Minister of Bihar.",""],
  ["Kerala Gandhi","K. Kelappan","Led the Guruvayur temple-entry satyagraha (1931–32).",""],
  ["Utkal Gourab","Madhusudan Das","'Pride of Utkal'; the first Odia graduate and lawyer.",""],
  ["Utkalmani","Gopabandhu Das","'Jewel of Utkal'; founded the newspaper Samaja (1919).",""],
  ["Lokapriya","Gopinath Bordoloi","First Chief Minister of Assam; kept Assam out of the Grouping Plan.",""],
  ["Kingmaker","K. Kamaraj","Tamil Nadu leader who picked two Prime Ministers (1964, 1966); the Kamaraj Plan (1963).",""],
  ["Arignar Anna","C. N. Annadurai","'Anna the scholar'; founded the DMK (1949); renamed Madras State Tamil Nadu.",""],
  ["Jananayak","Karpoori Thakur","Bihar's socialist Chief Minister; Bharat Ratna 2024 (posthumous).",""]
];
const P2M = [
  ["Iron Lady of India","Indira Gandhi","India's first woman Prime Minister (1966).",""],
  ["Mr Clean","Rajiv Gandhi","A press name when he became Prime Minister in 1984.",""],
  ["Iron Lady of Manipur","Irom Chanu Sharmila","Fasted from 2000 to 2016 against AFSPA.",""],
  ["Waterman of India","Rajendra Singh","Revived rivers in Alwar with johads; Stockholm Water Prize 2015.",""],
  ["Forest Man of India","Jadav Payeng","Planted the Molai forest on a Brahmaputra sandbar near Majuli.",""],
  ["Mountain Man","Dashrath Manjhi","Cut a road through a hill in Gaya district by hand over 22 years.",""],
  ["Padman","Arunachalam Muruganantham","Made a low-cost sanitary pad machine; Padma Shri 2016.",""],
  ["Birdman of India","Salim Ali","Ornithologist; wrote The Book of Indian Birds.",""],
  ["Missile Woman of India","Tessy Thomas","Led the Agni-IV project at DRDO.",""],
  ["Tiger Man of India","Kailash Sankhala","First director of Project Tiger (1973).",""],
  ["Saalumarada (row of trees)","Thimmakka","Planted and tended banyans along a road in Karnataka; Padma Shri 2019.",""],
  ["Encyclopedia of the Forest","Tulsi Gowda","Halakki tribal woman of Karnataka who knew every plant; Padma Shri 2020.",""],
  ["Seed Mother","Rahibai Soma Popere","Saved native seeds in Maharashtra; Padma Shri 2020.",""]
];

const P3T = [
  ["Father of the Indian Renaissance","Raja Ram Mohan Roy","Founded the Brahmo Samaj (1828); campaigned against sati.",""],
  ["Krantijyoti","Savitribai Phule","'Flame of revolution'; India's first woman teacher (Pune, 1848).",""],
  ["Cyclonic Monk of India","Swami Vivekananda","American newspapers' name after his Chicago speech (1893).",""],
  ["Periyar","E. V. Ramasamy","'The great one'; given at a women's conference in Madras (1938).",""],
  ["Vaikom Veerar","E. V. Ramasamy","'Hero of Vaikom', for the Vaikom Satyagraha (1924–25).",""],
  ["Vidyasagar of the South","Kandukuri Veeresalingam","Widow remarriage in Andhra.",""],
  ["Thakkar Bapa","Amritlal Vithaldas Thakkar","Worked for tribal people and Dalits; Gandhi's colleague.",""],
  ["Nightingale of India","Sarojini Naidu","Poet (The Golden Threshold); first woman Governor (1947).",""],
  ["Mother of the Indian Revolution","Bhikaji Cama","Raised a flag of India at Stuttgart (1907).",""],
  ["Grand Old Lady of the Independence Movement","Aruna Asaf Ali","Hoisted the Congress flag at Gowalia Tank, 9 August 1942.",""],
  ["Saint of the Gutters","Mother Teresa","Served the dying in Kolkata; Nobel Peace Prize 1979; made a saint in 2016.",""],
  ["Punyashlok","Ahilyabai Holkar","Queen of Indore who rebuilt the Kashi Vishwanath temple (1780).",""],
  ["Ba","Kasturba Gandhi","Gandhi's wife; died at the Aga Khan Palace, Pune (1944).",""],
  ["Gandhi Buri","Matangini Hazra","'Old lady Gandhi', shot at Tamluk in 1942 at 73.",""],
  ["Veeramangai","Velu Nachiyar","'Brave woman'; queen of Sivaganga who beat the Company (1780).",""],
  ["Durga Bhabhi","Durgawati Devi","Revolutionary who helped Bhagat Singh slip out of Lahore (1928).",""],
  ["Captain Lakshmi","Lakshmi Sahgal","Led the Rani of Jhansi Regiment of the INA.",""],
  ["Pandita","Ramabai Dongre","Scholars in Calcutta gave her the titles Pandita and Sarasvati (1878).",""]
];

LESSONS.push(
{id:"P1", heat:3, title:"Freedom fighters' titles and who gave them", hi:"स्वतंत्रता सेनानियों की उपाधियाँ और उन्हें देने वाले", blocks:[
  {k:"hot", h:"Most asked: <b>who gave</b> Gandhi 'Mahatma' (Tagore) and 'Father of the Nation' (Bose), who called Tagore 'Gurudev' (Gandhi), who made Patel 'Sardar' (the women of Bardoli), and one-word titles — <b>Lokmanya, Deshbandhu, Mahamana, Loknayak, Shaheed-e-Azam, Masterda</b>."},
  {k:"story", h:"<p>Indians rarely called their leaders by their names. A title said what the people felt. Tilak was <b>Lokmanya</b> — the man the people accepted. C. R. Das was <b>Deshbandhu</b>, friend of the country. Patel was <b>Sardar</b>, the chief: the farmers' wives of Bardoli gave him the name after he won their tax fight in 1928.</p><p>Leaders gave titles to each other too. Tagore called Gandhi <b>Mahatma</b>, the great soul; Gandhi answered by calling Tagore <b>Gurudev</b>. In 1944, though the two had quarrelled, Subhas Chandra Bose spoke on the radio and called Gandhi the <b>Father of our Nation</b>. Even enemies gave names: to Valentine Chirol, Tilak was the <b>Father of Indian Unrest</b>; to Churchill, Gandhi was a <b>half-naked fakir</b>.</p>",
    key:"Mahatma — from Tagore; Father of the Nation — from Bose (1944); Gurudev — from Gandhi; Sardar — from the women of Bardoli."},
  {k:"table", title:"Title → leader", head:["Title","Leader","Note"], rows: P1T.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Who gave the title", head:["Title","Given by","Note"], rows: P1G.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Trios, pairs and groups", rows:[
    ["Lal–Bal–Pal","Lala Lajpat Rai (Punjab), Bal Gangadhar Tilak (Maharashtra), Bipin Chandra Pal (Bengal) — the Extremist trio of 1905–08"],
    ["Bipin Chandra Pal","Often called the 'Father of Revolutionary Thoughts' in India"],
    ["The Ali brothers","Mohammad Ali Jauhar and Shaukat Ali, leaders of the Khilafat movement"],
    ["Azad","Chandra Shekhar Azad told a magistrate in 1921 that his name was 'Azad' (free); Abul Kalam Azad took 'Azad' as his pen name — two different men"],
    ["Kaiser-i-Hind","A British medal Gandhi received for ambulance work in South Africa and returned in 1920"]]},
  {k:"link", h:"The core list (Grand Old Man, Netaji, Iron Man, Punjab Kesari, Frontier Gandhi) is also in <a href=\"study-world-history.html?lesson=L30\">World History, L30</a>; the leaders' movements are in <a href=\"study-history-modern.html\">Modern India</a> (L22–L24)."},
  {k:"trick", h:"<b>Gandhi and Tagore swapped titles</b>: Ta-gore gave 'Ma-hatma', Gandhi gave 'Guru-dev' — a guru for a mahatma. <b>Bose gave 'Father'</b> from far away — on the radio, 1944. <b>Patel has three</b>: Sardar, Iron Man, Bismarck of India."},
  {k:"trap", h:"<b>'Father of Indian Unrest'</b> is Tilak — a British insult, not praise. <b>'Deshbandhu'</b> is C. R. Das, but <b>'Deshpriya'</b> is J. M. Sengupta and <b>'Deshratna'</b> is Rajendra Prasad. <b>'Loknayak'</b> is J. P. Narayan, while <b>'Lokmanya'</b> is Tilak."}
], sum:[
  "Mahatma — Tagore gave it to Gandhi; Father of the Nation — Subhas Chandra Bose, radio broadcast of 6 July 1944.",
  "Gurudev — Gandhi's name for Tagore; Sardar — the women of Bardoli, 1928; Iron Man and Bismarck of India — Patel.",
  "Lokmanya — Tilak (Father of Indian Unrest to Valentine Chirol); Deshbandhu — C. R. Das; Mahamana — Malaviya.",
  "Loknayak — Jayaprakash Narayan; Shaheed-e-Azam — Bhagat Singh; Masterda — Surya Sen; Swatantryaveer — Savarkar.",
  "Netaji — Bose, first in Germany (1942); Tagore called him Deshnayak (1939). Half-naked fakir — Churchill on Gandhi."
]},

{id:"P2", heat:1, title:"Kesaris, regional titles and titles after 1947", hi:"केसरी, क्षेत्रीय उपाधियाँ और स्वतंत्रता के बाद की उपाधियाँ", blocks:[
  {k:"hot", h:"Asked now and then: the <b>Kesaris</b> (Punjab, Andhra, Bihar), the <b>Shers</b> (Kashmir, Bangla), <b>Kerala Gandhi</b>, <b>Utkal Gourab / Utkalmani</b>, and the popular names of modern achievers — <b>Waterman, Forest Man, Mountain Man, Padman, Iron Lady of Manipur</b>."},
  {k:"story", h:"<p>Every region had its own lion. <b>Kesari</b> and <b>Sher</b> both mean lion, so Punjab's lion was Lala Lajpat Rai, Andhra's was T. Prakasam, Bihar's was Sri Krishna Sinha, Kashmir's was Sheikh Abdullah and Bengal's was Fazlul Huq. Odisha called Madhusudan Das its pride (<b>Utkal Gourab</b>) and Gopabandhu Das its jewel (<b>Utkalmani</b>).</p><p>After 1947 the titles changed with the times. Newspapers named people for one great deed: Rajendra Singh brought dry rivers back to life — the <b>Waterman of India</b>; Jadav Payeng planted a forest on a sandbar — the <b>Forest Man</b>; Dashrath Manjhi cut a road through a hill — the <b>Mountain Man</b>. Learn the deed and the title follows.</p>",
    key:"Kesari = Sher = lion: Punjab–Lajpat Rai, Andhra–Prakasam, Bihar–Sri Krishna Sinha, Kashmir–Sheikh Abdullah, Bangla–Fazlul Huq."},
  {k:"table", title:"Kesaris and regional titles", head:["Title","Leader","Note"], rows: P2K.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Popular titles after 1947", head:["Title","Person","Why"], rows: P2M.map(r => [r[0], r[1], r[2]])},
  {k:"link", h:"Scientists' titles — <b>Missile Man</b> (Kalam), <b>Metro Man</b> (E. Sreedharan), fathers of the Green and White Revolutions — are in <a href=\"study-inventions.html?lesson=I10\">Inventions &amp; Discoveries, I10</a>."},
  {k:"trick", h:"<b>“Kesari runs P-A-B”</b>: Punjab, Andhra, Bihar — Lajpat, Prakasam, Babu (Shri Babu). <b>Odisha's two Das</b>: <b>M</b>adhusudan = <b>M</b>an of pride (Gourab); <b>G</b>opabandhu = <b>G</b>em (mani)."},
  {k:"trap", h:"<b>Sher-e-Punjab</b> is used for both <b>Maharaja Ranjit Singh</b> and Lala Lajpat Rai; 'Punjab Kesari' is Lajpat Rai. <b>Deenbandhu</b> is used for both <b>C. F. Andrews</b> and <b>Sir Chhotu Ram</b> (the peasants' leader of Punjab). <b>Iron Lady of India</b> is Indira Gandhi, but the <b>Iron Lady of Manipur</b> is Irom Sharmila."}
], sum:[
  "Punjab Kesari — Lala Lajpat Rai; Andhra Kesari — T. Prakasam; Bihar Kesari — Sri Krishna Sinha; Assam Kesari — Ambikagiri Raichoudhury.",
  "Sher-e-Kashmir — Sheikh Abdullah; Sher-e-Bangla — A. K. Fazlul Huq; Kerala Gandhi — K. Kelappan.",
  "Utkal Gourab — Madhusudan Das; Utkalmani — Gopabandhu Das; Lokapriya — Gopinath Bordoloi; Kingmaker — K. Kamaraj.",
  "Jananayak — Karpoori Thakur (Bharat Ratna 2024); Arignar Anna — C. N. Annadurai.",
  "Waterman — Rajendra Singh; Forest Man — Jadav Payeng; Mountain Man — Dashrath Manjhi; Padman — Arunachalam Muruganantham.",
  "Iron Lady of Manipur — Irom Sharmila; Birdman — Salim Ali; Missile Woman — Tessy Thomas."
]},

{id:"P3", heat:2, title:"Titles of reformers and women leaders", hi:"समाज सुधारकों और महिला नेताओं की उपाधियाँ", blocks:[
  {k:"hot", h:"Asked: <b>Nightingale of India</b> (Sarojini Naidu), <b>Father of the Indian Renaissance</b> (Ram Mohan Roy), <b>Mother of the Indian Revolution</b> (Bhikaji Cama), <b>Grand Old Lady</b> (Aruna Asaf Ali), who gave Ram Mohan Roy his 'Raja', and who called Jyotiba Phule 'Mahatma'."},
  {k:"story", h:"<p>Reformers earned their titles by breaking old walls. <b>Ram Mohan Roy</b> fought sati and is called the <b>Father of the Indian Renaissance</b>; the title 'Raja' came from the Mughal emperor Akbar II, who sent him to England. <b>Jyotiba Phule</b> was called <b>Mahatma</b> in 1888 — thirty years before Gandhi — and his wife <b>Savitribai</b>, India's first woman teacher, is remembered as <b>Krantijyoti</b>.</p><p>Women leaders have titles too: <b>Sarojini Naidu</b>, the poet, is the <b>Nightingale of India</b>; <b>Bhikaji Cama</b>, who raised an Indian flag in Germany in 1907, is the <b>Mother of the Indian Revolution</b>; <b>Aruna Asaf Ali</b>, who raised the flag at Gowalia Tank in 1942, is the <b>Grand Old Lady of the Independence Movement</b>.</p>",
    key:"Renaissance — Ram Mohan Roy; Krantijyoti — Savitribai Phule; Nightingale — Sarojini Naidu; Revolution's mother — Bhikaji Cama."},
  {k:"table", title:"Reformers and women: title → person", head:["Title","Person","Note"], rows: P3T.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"How some reformers got their titles", rows:[
    ["Raja (Ram Mohan Roy)","From the Mughal emperor <b>Akbar II</b> (1830); Roy died at Bristol in 1833"],
    ["Vidyasagar (Ishwar Chandra Bandyopadhyay)","'Ocean of learning' — given by the Sanskrit College, Calcutta (1839)"],
    ["Mahatma (Jyotiba Phule)","Given at Bombay in <b>1888</b> by Vithalrao Krishnaji Vandekar"],
    ["Periyar (E. V. Ramasamy)","Given at a women's conference in Madras, <b>1938</b>"],
    ["Pandita Ramabai","Scholars in Calcutta named her 'Pandita' and 'Sarasvati' for her Sanskrit learning (1878)"],
    ["Rani Lakshmibai","Hugh Rose, the British general, called her the most dangerous of the rebel leaders"]]},
  {k:"link", h:"What the reformers did — Brahmo Samaj, Arya Samaj, widow remarriage — is in <a href=\"study-history-modern.html\">Modern India, L21</a>; more women of the struggle are in L32 of the same app; the first women in each post are in <a href=\"study-firsts-symbols.html?lesson=F4\">Firsts, F4</a>."},
  {k:"trick", h:"<b>Two Mahatmas, two dates</b>: Phule 18<b>88</b>, Gandhi 19<b>15</b>. <b>Two Phules</b>: Jyotiba = Mahatma, Savitribai = Krantijyoti. <b>Two Periyar titles</b>: Periyar (1938) and Vaikom Veerar (1924)."},
  {k:"trap", h:"<b>Nightingale of India</b> means <b>Sarojini Naidu</b> in a history question but <b>Lata Mangeshkar</b> in a music question — read the subject. The <b>Lady with the Lamp</b> is Florence Nightingale, not Sarojini. <b>Bhikaji Cama</b> raised the flag at <b>Stuttgart</b>; <b>Aruna Asaf Ali</b> at <b>Gowalia Tank</b>."}
], sum:[
  "Father of the Indian Renaissance — Ram Mohan Roy; 'Raja' from Akbar II; Vidyasagar from the Sanskrit College (1839).",
  "Mahatma (1888) — Jyotiba Phule; Krantijyoti — Savitribai Phule, India's first woman teacher.",
  "Cyclonic Monk — Vivekananda; Periyar and Vaikom Veerar — E. V. Ramasamy; Vidyasagar of the South — Veeresalingam.",
  "Nightingale of India — Sarojini Naidu; Mother of the Indian Revolution — Bhikaji Cama; Grand Old Lady — Aruna Asaf Ali.",
  "Saint of the Gutters — Mother Teresa; Punyashlok — Ahilyabai Holkar; Durga Bhabhi — Durgawati Devi; Captain Lakshmi — Lakshmi Sahgal."
]}
);

pairQs("P1", P1T, { q: t => `Who is popularly known as '${t}'?`, rq: a => `Which title is associated with ${a}?`, e: r => `${r[1]} — '${r[0]}'. ${r[2]}` });
pairQs("P1", P1G, { q: t => `Who gave the title ${t}?`, e: r => `${r[0]} came from ${r[1]}. ${r[2]}` });
pairQs("P2", P2K, { q: t => `Which leader was known as '${t}'?`, e: r => `${r[1]} — '${r[0]}'. ${r[2]}` });
pairQs("P2", P2M, { q: t => `Who is popularly called '${t}'?`, e: r => `${r[1]} — '${r[0]}'. ${r[2]}` });
pairQs("P3", P3T, { q: t => `Who is remembered by the title '${t}'?`, rq: a => `Which title belongs to ${a}?`, e: r => `${r[1]} — '${r[0]}'. ${r[2]}` });

QB.push(
["P1","The women of which place gave Vallabhbhai Patel the title 'Sardar'?",["Bardoli","Kheda","Champaran","Dandi"],"After the Bardoli Satyagraha of 1928 against higher land revenue in Gujarat.",""],
["P1","In which year did Subhas Chandra Bose call Gandhi the 'Father of the Nation' in a radio broadcast?",["1944","1930","1942","1947"],"On 6 July 1944, while leading the INA in South-East Asia.",""],
["P1","'Lal–Bal–Pal' stands for:",["Lala Lajpat Rai, Bal Gangadhar Tilak and Bipin Chandra Pal","Lal Bahadur Shastri, Balwant Rai Mehta and Pal Singh","Lala Hardayal, Balram Jakhar and Bipin Chandra Pal","Lala Lajpat Rai, Baldev Singh and Prafulla Pal"],"The Extremist trio of the Swadeshi years, from Punjab, Maharashtra and Bengal.",""],
["P1","Which of these leaders of the Lal–Bal–Pal trio came from Bengal?",["Bipin Chandra Pal","Lala Lajpat Rai","Bal Gangadhar Tilak","Aurobindo Ghosh"],"Lajpat Rai was from Punjab and Tilak from Maharashtra; Aurobindo was not part of the trio.",""],
["P1","The word 'Lokmanya' in Tilak's title means:",["Accepted by the people as their leader","Friend of the country","Great soul","Lion of the people"],"'Friend of the country' is Deshbandhu; 'great soul' is Mahatma.",""],
["P1","Chandra Shekhar Azad got the name 'Azad' when he:",["Told a magistrate in 1921 that his name was Azad","Escaped from the Cellular Jail","Founded the HSRA in 1928","Joined the Ghadar Party in America"],"Arrested as a 15-year-old in the Non-Cooperation movement, he gave his name as Azad (free) and his home as prison.",""],
["P1","Which statement about Gandhi's 'Kaiser-i-Hind' medal is correct?",["He returned it in 1920 during the Khilafat and Non-Cooperation protests","It was given to him by Subhas Chandra Bose","It was given to him after the Dandi March","He refused it when it was first offered"],"The British gave it for his ambulance work in South Africa; he gave it back in protest in 1920.",""],
["P1","Who called Gandhi 'Mahatma' and was in turn called 'Gurudev' by him?",["Rabindranath Tagore","Gopal Krishna Gokhale","Subhas Chandra Bose","Jawaharlal Nehru"],"Gokhale was Gandhi's political guru, but the title exchange was with Tagore.",""],
["P1","Which leader is known by both 'Sardar' and 'Iron Man of India'?",["Vallabhbhai Patel","Baldev Singh","Bhagat Singh","Lala Lajpat Rai"],"Patel united the princely states after 1947.",""],
["P1","'Deshbandhu', 'Deshpriya' and 'Deshratna' belong respectively to:",["C. R. Das, J. M. Sengupta and Rajendra Prasad","Rajendra Prasad, C. R. Das and J. M. Sengupta","J. M. Sengupta, Rajendra Prasad and C. R. Das","C. R. Das, Rajendra Prasad and J. M. Sengupta"],"Friend of the country (C. R. Das), beloved of the country (Sengupta), jewel of the country (Prasad).",""],
["P2","Which 'Kesari' title is wrongly matched?",["Bihar Kesari — Rajendra Prasad","Punjab Kesari — Lala Lajpat Rai","Andhra Kesari — T. Prakasam","Assam Kesari — Ambikagiri Raichoudhury"],"Bihar Kesari is Sri Krishna Sinha, Bihar's first Chief Minister.",""],
["P2","'Deenbandhu Chhotu Ram' was a leader of the peasants of:",["Punjab (today's Haryana region)","Bengal","Bihar","Gujarat"],"Sir Chhotu Ram, of Rohtak, championed farmers in undivided Punjab; C. F. Andrews is the other 'Deenbandhu'.",""],
["P2","Which ruler shares the title 'Sher-e-Punjab' with Lala Lajpat Rai?",["Maharaja Ranjit Singh","Guru Gobind Singh","Banda Singh Bahadur","Maharaja Duleep Singh"],"Ranjit Singh, who built the Sikh kingdom, is the original 'Lion of Punjab'.",""],
["P2","Rajendra Singh, the 'Waterman of India', is known for reviving rivers in which state?",["Rajasthan","Gujarat","Maharashtra","Madhya Pradesh"],"His Tarun Bharat Sangh built johads (small earthen dams) in Alwar district.",""],
["P2","The Molai forest planted by Jadav Payeng is in which state?",["Assam","Meghalaya","Arunachal Pradesh","West Bengal"],"It grew on a sandbar of the Brahmaputra near Majuli.",""],
["P2","Dashrath Manjhi, the 'Mountain Man', cut a road through a hill in which state?",["Bihar","Jharkhand","Uttarakhand","Odisha"],"He worked alone in Gaya district for about 22 years.",""],
["P2","Irom Sharmila, the 'Iron Lady of Manipur', fasted for about 16 years against:",["The Armed Forces (Special Powers) Act","The Citizenship Act","Dams on the Barak","Hill-district autonomy"],"She began in November 2000 and ended the fast in August 2016.",""],
["P3","Who gave Ram Mohan Roy the title 'Raja'?",["The Mughal emperor Akbar II","Lord William Bentinck","Queen Victoria","The Nawab of Bengal"],"Akbar II sent him to England in 1830 as his envoy.",""],
["P3","Jyotiba Phule was given the title 'Mahatma' in:",["1888","1857","1915","1920"],"In Bombay, more than a quarter of a century before Gandhi came to be called Mahatma.",""],
["P3","Ishwar Chandra got the title 'Vidyasagar' from:",["The Sanskrit College, Calcutta","The University of Calcutta","Raja Ram Mohan Roy","The British Government"],"He earned it in 1839 for his learning; 'Vidyasagar' means ocean of learning.",""],
["P3","E. V. Ramasamy was called 'Vaikom Veerar' for his part in:",["The Vaikom Satyagraha","The Guruvayur Satyagraha","The Self-Respect conference at Chengalpattu","The Salt March at Vedaranyam"],"The Vaikom Satyagraha (1924–25) in Travancore was for the right to use temple roads.",""],
["P3","Which pair is correctly matched?",["Sarojini Naidu — Nightingale of India","Florence Nightingale — Mother of the Indian Revolution","Aruna Asaf Ali — Saint of the Gutters","Bhikaji Cama — Grand Old Lady of the Independence Movement"],"Cama is the Mother of the Indian Revolution; Aruna Asaf Ali the Grand Old Lady; Mother Teresa the Saint of the Gutters.",""],
["P3","Durgawati Devi, known as 'Durga Bhabhi', is remembered for:",["Helping Bhagat Singh escape from Lahore in disguise","Leading the Rani of Jhansi Regiment","Running the secret Congress Radio","Raising a flag at Stuttgart"],"After the Saunders killing in 1928 she travelled with Bhagat Singh posing as his wife.",""],
["P3","The British general who called Rani Lakshmibai the most dangerous of the rebel leaders was:",["Hugh Rose","Colin Campbell","Henry Havelock","John Nicholson"],"Hugh Rose fought her at Jhansi and Gwalior in 1858.",""]
);

LASTMOMENT.push(
{t:"Who gave the title", era:["pp"], rows:[["Mahatma (Gandhi)","Tagore"],["Father of the Nation","Bose, 1944"],["Gurudev","Gandhi"],["Sardar","Women of Bardoli"],["Father of Indian Unrest","Valentine Chirol"],["Raja (Ram Mohan Roy)","Akbar II"],["Mahatma (Phule)","1888, Bombay"]]},
{t:"Kesaris and Shers", era:["pp"], rows:[["Punjab Kesari","Lajpat Rai"],["Andhra Kesari","T. Prakasam"],["Bihar Kesari","Sri Krishna Sinha"],["Sher-e-Kashmir","Sheikh Abdullah"],["Sher-e-Bangla","Fazlul Huq"],["Kerala Gandhi","K. Kelappan"],["Utkalmani","Gopabandhu Das"]]},
{t:"Women's titles", era:["pp"], rows:[["Nightingale of India","Sarojini Naidu"],["Mother of Indian Revolution","Bhikaji Cama"],["Grand Old Lady","Aruna Asaf Ali"],["Krantijyoti","Savitribai Phule"],["Saint of the Gutters","Mother Teresa"],["Iron Lady of Manipur","Irom Sharmila"]]}
);
TILES.push(["1888","Phule called Mahatma","pp"],["1928","Patel becomes Sardar","pp"],["6 Jul 1944","Bose: Father of the Nation","pp"]);

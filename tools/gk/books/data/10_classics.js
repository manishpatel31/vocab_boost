/* Part 1 · Classics of India — B1 ancient, B2 medieval, B3 the freedom struggle and its newspapers.
   Rows: [book, author, note, tag]; tag "p" = repeatedly asked, "p|<paper>" = reported from that paper. */
const B1 = [
  ["Arthashastra","Kautilya (Chanakya)","A treatise on statecraft and economy from the Mauryan age.","p"],
  ["Indica","Megasthenes","Greek ambassador of Seleucus at the court of Chandragupta Maurya.","p"],
  ["Ashtadhyayi","Panini","The classic grammar of Sanskrit, in eight chapters.","p"],
  ["Yoga Sutras","Patanjali","The foundational text of yoga; Patanjali also wrote the Mahabhashya on Panini.",""],
  ["Abhijnanashakuntalam","Kalidasa","Play about Dushyanta and Shakuntala; Kalidasa adorned Chandragupta II's court.","p"],
  ["Meghadutam","Kalidasa","'The Cloud Messenger' — a lyric poem.",""],
  ["Mricchakatika","Sudraka","'The Little Clay Cart', a Sanskrit play.","p|SSC CGL · 7 Mar 2020 (Shift 2)"],
  ["Mudrarakshasa","Vishakhadatta","Play on Chanakya outwitting Rakshasa to secure Chandragupta's throne.","p"],
  ["Swapnavasavadattam","Bhasa","'The Dream of Vasavadatta'.",""],
  ["Harshacharita","Banabhatta","Biography of King Harshavardhana by his court poet; Bana also wrote Kadambari.","p"],
  ["Rajatarangini","Kalhana","Chronicle of the kings of Kashmir, 12th century.","p|SSC GD · 2021"],
  ["Gita Govinda","Jayadeva","Love of Radha and Krishna; 12th-century Odisha/Bengal.","p"],
  ["Kamasutra","Vatsyayana","",""],
  ["Aryabhatiya","Aryabhata","Mathematics and astronomy (5th century).","p"],
  ["Brihat Samhita","Varahamihira","An encyclopaedia of astronomy and astrology; Varahamihira was one of the 'nine gems'.",""],
  ["Lilavati","Bhaskaracharya (Bhaskara II)","Arithmetic, 12th century.",""],
  ["Charaka Samhita","Charaka","Classic text of Ayurvedic medicine.","p"],
  ["Sushruta Samhita","Sushruta","Surgery — Sushruta is called the father of surgery.","p"],
  ["Panchatantra","Vishnu Sharma","Animal fables teaching statecraft.","p"],
  ["Hitopadesha","Narayana Pandit","Fables, partly drawn from the Panchatantra.",""],
  ["Amarakosha","Amarasimha","A Sanskrit thesaurus.",""],
  ["Kathasaritsagara","Somadeva","'Ocean of the Streams of Stories', from Kashmir.",""],
  ["Ratnavali","Harshavardhana","Harsha also wrote Nagananda and Priyadarshika.","p"],
  ["Buddhacharita","Ashvaghosha","Life of the Buddha; Ashvaghosha was at Kanishka's court.","p"],
  ["Tirukkural","Tiruvalluvar","Tamil couplets on virtue, wealth and love.","p"],
  ["Silappatikaram","Ilango Adigal","Tamil epic of Kannagi and Kovalan.","p"],
  ["Manimekalai","Sattanar","Tamil Buddhist epic, a sequel to Silappatikaram.",""],
  ["Ramayana","Valmiki","Called the Adi Kavya (first poem).","p"],
  ["Mahabharata","Ved Vyasa","The longest epic poem in the world.","p"],
  ["Vikramankadevacharita","Bilhana","Life of the Chalukya king Vikramaditya VI.",""],
  ["Si-Yu-Ki","Hiuen Tsang (Xuanzang)","Chinese pilgrim's record of India in Harsha's time.","p"],
  ["Fo-Kuo-Ki","Fa-Hien (Faxian)","Chinese pilgrim in the reign of Chandragupta II.",""]
];
const B2 = [
  ["Baburnama (Tuzuk-i-Baburi)","Babur","Memoirs of the founder of the Mughal empire, in Chagatai Turkish.","p"],
  ["Humayun-nama","Gulbadan Begum","Babur's daughter wrote the life of her brother Humayun.","p"],
  ["Akbarnama","Abul Fazl","Official history of Akbar's reign; its third volume is the Ain-i-Akbari.","p"],
  ["Muntakhab-ut-Tawarikh","Abdul Qadir Badauni","A critical history of Akbar's reign.",""],
  ["Tuzuk-i-Jahangiri","Jahangir","Jahangir's memoirs.","p"],
  ["Padshahnama","Abdul Hamid Lahori","History of Shah Jahan's reign.",""],
  ["Kitab-ul-Hind (Tahqiq-i-Hind)","Al-Biruni","Came with Mahmud of Ghazni; wrote about Indian science and society.","p"],
  ["Rihla","Ibn Battuta","Moroccan traveller at the court of Muhammad bin Tughlaq.","p"],
  ["Tabaqat-i-Nasiri","Minhaj-us-Siraj","History dedicated to Sultan Nasiruddin Mahmud.",""],
  ["Tarikh-i-Firoz Shahi","Ziauddin Barani","History of the Delhi Sultanate up to Firoz Shah Tughlaq; Barani also wrote Fatawa-i-Jahandari.","p"],
  ["Tabaqat-i-Akbari","Nizamuddin Ahmad","",""],
  ["Majma-ul-Bahrain","Dara Shikoh","'The Mingling of Two Oceans' — Sufism and Vedanta.",""],
  ["Padmavat","Malik Muhammad Jayasi","Awadhi epic on Rani Padmini of Chittor.","p"],
  ["Ramcharitmanas","Tulsidas","The Ramayana retold in Awadhi.","p"],
  ["Sursagar","Surdas","Songs of Krishna's childhood in Braj Bhasha.","p"],
  ["Bijak","Kabir","Sayings and dohas of Kabir.",""],
  ["Prithviraj Raso","Chand Bardai","Court poet's epic on Prithviraj Chauhan.","p"],
  ["Bihari Satsai","Bihari","700 dohas in Braj Bhasha.",""],
  ["Amuktamalyada","Krishnadevaraya","Telugu poem by the Vijayanagara emperor.","p"],
  ["Shahnama","Firdausi","Persian 'Book of Kings', written for Mahmud of Ghazni.","p"],
  ["Khazain-ul-Futuh","Amir Khusrau","Campaigns of Alauddin Khalji; Khusrau is the 'Parrot of India'.","p"],
  ["Kitab-i-Nauras","Ibrahim Adil Shah II","Songs in Dakhni by the Bijapur sultan.",""],
  ["Travels in the Mogul Empire","François Bernier","French physician in Shah Jahan's and Aurangzeb's time.",""],
  ["Qanun-i-Humayuni","Khwandamir","",""]
];
const B3 = [
  ["The Story of My Experiments with Truth","Mahatma Gandhi","Autobiography, first in Gujarati (Satya na Prayogo).","p"],
  ["The Discovery of India","Jawaharlal Nehru","Written in Ahmednagar Fort jail, 1942–46.","p"],
  ["Glimpses of World History","Jawaharlal Nehru","Letters from prison to his daughter Indira.",""],
  ["Poverty and Un-British Rule in India","Dadabhai Naoroji","Explains the 'drain of wealth' theory.","p"],
  ["Gita Rahasya","Bal Gangadhar Tilak","Written in Mandalay jail.","p"],
  ["Anandamath","Bankim Chandra Chattopadhyay","The novel that contains 'Vande Mataram'.","p"],
  ["Gitanjali","Rabindranath Tagore","Won the Nobel Prize in Literature, 1913 — the first for an Asian.","p"],
  ["Neel Darpan","Dinabandhu Mitra","Play on the oppression of indigo farmers.","p"],
  ["Gulamgiri","Jyotiba Phule","'Slavery' — against caste oppression (1873).","p"],
  ["Annihilation of Caste","B. R. Ambedkar","Undelivered speech of 1936.","p"],
  ["The Indian Struggle","Subhas Chandra Bose","",""],
  ["The Indian War of Independence, 1857","V. D. Savarkar","Called 1857 the first war of independence.","p"],
  ["India Wins Freedom","Maulana Abul Kalam Azad","",""],
  ["India Divided","Rajendra Prasad","",""],
  ["Why I Am an Atheist","Bhagat Singh","Essay written in Lahore jail, 1930.","p"],
  ["The Golden Threshold","Sarojini Naidu","Poems; she was called the 'Nightingale of India'.",""],
  ["Savitri","Sri Aurobindo","Epic poem in blank verse.",""],
  ["Satyarth Prakash","Swami Dayanand Saraswati","Founder of the Arya Samaj.","p"],
  ["Tuhfat-ul-Muwahhidin","Raja Ram Mohan Roy","A Persian work against idolatry.",""],
  ["Unhappy India","Lala Lajpat Rai","A reply to Katherine Mayo's 'Mother India'.",""],
  ["Economic History of India","R. C. Dutt","",""],
  ["Hind Swaraj","Mahatma Gandhi","Written in 1909 on a ship from London to South Africa.",""]
];
const B3N = [
  ["Kesari","Bal Gangadhar Tilak","Marathi paper; Mahratta was his English one.","p"],
  ["Young India","Mahatma Gandhi","Gandhi also ran Harijan, Navjivan and, in South Africa, Indian Opinion.","p"],
  ["Indian Opinion","Mahatma Gandhi","Started in South Africa, 1903.",""],
  ["Al-Hilal","Maulana Abul Kalam Azad","Urdu weekly, 1912.","p"],
  ["Comrade","Mohammad Ali Jauhar","",""],
  ["Bengal Gazette","James Augustus Hicky","India's first newspaper, 1780 ('Hicky's Bengal Gazette').","p"],
  ["New India","Annie Besant","Also Commonweal; she started the Home Rule League.",""],
  ["Mooknayak","B. R. Ambedkar","Marathi fortnightly, 1920; also Bahishkrit Bharat.","p"],
  ["Sambad Kaumudi","Raja Ram Mohan Roy","Bengali weekly; also Mirat-ul-Akhbar in Persian.",""],
  ["Rast Goftar","Dadabhai Naoroji","Gujarati paper, 1851.",""],
  ["National Herald","Jawaharlal Nehru","Founded 1938.",""],
  ["Amrita Bazar Patrika","Sisir Kumar Ghosh","Started with his brother Motilal Ghosh.",""],
  ["Ghadar","Ghadar Party (Lala Har Dayal)","Published from San Francisco, 1913.",""],
  ["Bombay Chronicle","Pherozeshah Mehta","",""],
  ["Hindu Patriot","Harish Chandra Mukherjee","Exposed the indigo planters.",""]
];

LESSONS.push(
{id:"B1", heat:3, title:"Ancient Indian classics", hi:"प्राचीन भारतीय ग्रंथ", blocks:[
  {k:"hot", h:"A book ↔ author question comes in almost every GA section. From the ancient period the favourites are <b>Arthashastra, Indica, Ashtadhyayi, Kalidasa's plays, Harshacharita, Rajatarangini, Mricchakatika, Mudrarakshasa</b> and the <b>Tamil epics</b>."},
  {k:"story", h:"<p>Think of ancient India as a <b>library with three shelves</b>. The first shelf holds the <b>epics and grammar</b>: Valmiki's Ramayana, Vyasa's Mahabharata and Panini's Ashtadhyayi. The second holds <b>courts and kings</b>: Chanakya's Arthashastra for Chandragupta Maurya, Kalidasa's plays in the Gupta court, and Banabhatta's biography of Harsha. The third holds <b>science</b>: Aryabhata's mathematics, Charaka's medicine and Sushruta's surgery.</p><p>Foreign visitors left notes too — <b>Megasthenes</b> (Greek, Mauryan court), <b>Fa-Hien</b> and <b>Hiuen Tsang</b> (Chinese Buddhist pilgrims). Down south, Tamil poets wrote the <b>Tirukkural</b> and the twin epics <b>Silappatikaram</b> and <b>Manimekalai</b>.</p>", key:"Match the book to its king's court: Arthashastra — Chandragupta Maurya; Kalidasa — Chandragupta II; Harshacharita — Harsha; Buddhacharita — Kanishka."},
  {k:"table", title:"Books and authors", head:["Book","Author","Note"], rows: B1.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>Court poets</b> — <i>“Kanishka's Ashva, Gupta's Kali, Harsha's Bana”</i>: Ashvaghosha (Kanishka), Kalidasa (Chandragupta II), Banabhatta (Harsha). <b>Chinese pilgrims</b> in order: <b>Fa-Hien first (Gupta), Hiuen Tsang later (Harsha)</b> — F comes before H."},
  {k:"trap", h:"<b>Mudrarakshasa</b> is by Vishakhadatta, <b>Mricchakatika</b> by Sudraka — both are plays, papers swap them. <b>Indica</b> is Megasthenes (Greek), <b>Kitab-ul-Hind</b> is Al-Biruni (medieval). <b>Harsha</b> himself wrote three plays (Ratnavali, Nagananda, Priyadarshika) — <b>Harshacharita</b> is about him, by Bana."}
], sum:["Arthashastra — Kautilya; Indica — Megasthenes; Ashtadhyayi — Panini.","Kalidasa wrote Abhijnanashakuntalam and Meghadutam; Sudraka wrote Mricchakatika; Vishakhadatta wrote Mudrarakshasa.","Harshacharita — Banabhatta; Rajatarangini (Kashmir) — Kalhana; Gita Govinda — Jayadeva.","Aryabhatiya — Aryabhata; Charaka Samhita — medicine; Sushruta Samhita — surgery.","Tirukkural — Tiruvalluvar; Silappatikaram — Ilango Adigal; Manimekalai — Sattanar."]},

{id:"B2", heat:3, title:"Medieval and Mughal-era works", hi:"मध्यकालीन और मुग़लकालीन ग्रंथ", blocks:[
  {k:"hot", h:"Asked often: <b>Baburnama</b> (and its language), <b>Humayun-nama</b>, <b>Akbarnama / Ain-i-Akbari</b>, <b>Kitab-ul-Hind</b>, <b>Rihla</b>, <b>Padmavat</b>, <b>Ramcharitmanas</b> and <b>Prithviraj Raso</b>."},
  {k:"story", h:"<p>Medieval India wrote its own history. The Mughal emperors kept <b>memoirs</b> — Babur's Baburnama and Jahangir's Tuzuk-i-Jahangiri — and hired <b>court historians</b>: Abul Fazl for Akbar, Abdul Hamid Lahori for Shah Jahan. Babur's daughter <b>Gulbadan Begum</b> wrote her brother Humayun's life — one of the few histories by a woman.</p><p>Travellers watched from outside: <b>Al-Biruni</b> came with Mahmud of Ghazni, <b>Ibn Battuta</b> served Muhammad bin Tughlaq, and <b>Bernier</b> saw Shah Jahan's court. Meanwhile the Bhakti poets wrote for the people in their own tongues — <b>Tulsidas, Surdas, Kabir</b> — and <b>Jayasi</b> wrote the Padmavat.</p>", key:"Memoirs: Babur, Jahangir. Court histories: Abul Fazl (Akbar), Lahori (Shah Jahan). Travellers: Al-Biruni, Ibn Battuta, Bernier."},
  {k:"table", title:"Books and authors", head:["Book","Author","Note"], rows: B2.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Mughal order of memoir-writers: <b>Babur wrote, Humayun was written about (by his sister), Akbar was written about (Abul Fazl), Jahangir wrote again</b> — <i>write, written, written, write</i>."},
  {k:"trap", h:"The <b>Baburnama</b> is in <b>Turkish (Chagatai)</b>, not Persian. <b>Ain-i-Akbari</b> is a part of the <b>Akbarnama</b> — both by Abul Fazl. <b>Badauni</b> criticised Akbar; <b>Abul Fazl</b> praised him. <b>Shahnama</b> is Firdausi's Persian epic, not about Shah Jahan."}
], sum:["Baburnama (Turkish) — Babur; Humayun-nama — Gulbadan Begum; Tuzuk-i-Jahangiri — Jahangir.","Akbarnama and Ain-i-Akbari — Abul Fazl; Muntakhab-ut-Tawarikh — Badauni; Padshahnama — Abdul Hamid Lahori.","Kitab-ul-Hind — Al-Biruni; Rihla — Ibn Battuta; Tarikh-i-Firoz Shahi — Ziauddin Barani.","Padmavat — Jayasi; Ramcharitmanas — Tulsidas; Sursagar — Surdas; Prithviraj Raso — Chand Bardai.","Amuktamalyada — Krishnadevaraya; Khazain-ul-Futuh — Amir Khusrau."]},

{id:"B3", heat:3, title:"Books and newspapers of the freedom struggle", hi:"स्वतंत्रता संग्राम की पुस्तकें और समाचार पत्र", blocks:[
  {k:"hot", h:"High-yield: <b>Discovery of India, My Experiments with Truth, Poverty and Un-British Rule, Gita Rahasya, Anandamath, Neel Darpan, Gulamgiri, Annihilation of Caste</b> — and <b>which leader ran which newspaper</b> (Kesari, Young India, Al-Hilal, Mooknayak, Bengal Gazette)."},
  {k:"story", h:"<p>India's freedom fighters fought with <b>pens</b> as much as with protests. Many of their best books were written <b>in jail</b>: Tilak's Gita Rahasya in Mandalay, Nehru's Discovery of India in Ahmednagar Fort, Bhagat Singh's essay in Lahore.</p><p>Newspapers carried their ideas to every town. Tilak's <b>Kesari</b> roused Maharashtra; Gandhi's <b>Young India</b> and <b>Harijan</b> spread non-violence; Maulana Azad's <b>Al-Hilal</b> spoke to Urdu readers; Ambedkar's <b>Mooknayak</b> gave a voice to the oppressed. It all began with <b>Hicky's Bengal Gazette</b> in 1780 — India's first newspaper.</p>", key:"Jail books: Gita Rahasya (Mandalay), Discovery of India (Ahmednagar). First newspaper: Bengal Gazette, 1780."},
  {k:"table", title:"Books", head:["Book","Author","Note"], rows: B3.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Newspapers and journals", head:["Paper","Started / edited by","Note"], rows: B3N.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Gandhi's four papers — <b>“Young Harijans Need Opinions”</b>: Young India, Harijan, Navjivan, Indian Opinion. <b>Tilak = K & M</b>: Kesari (Marathi), Mahratta (English)."},
  {k:"trap", h:"<b>Anandamath</b> (Bankim) contains Vande Mataram; <b>Gitanjali</b> (Tagore) won the Nobel. <b>Al-Hilal</b> is Azad's; <b>Comrade</b> is Mohammad Ali's. <b>Discovery of India</b> and <b>Glimpses of World History</b> are both Nehru's — don't give one to Gandhi."}
], sum:["My Experiments with Truth and Hind Swaraj — Gandhi; Discovery of India and Glimpses of World History — Nehru.","Poverty and Un-British Rule — Dadabhai Naoroji; Gita Rahasya — Tilak; Anandamath — Bankim Chandra.","Neel Darpan — Dinabandhu Mitra; Gulamgiri — Jyotiba Phule; Annihilation of Caste — Ambedkar.","Kesari — Tilak; Young India and Harijan — Gandhi; Al-Hilal — Azad; Mooknayak — Ambedkar.","Hicky's Bengal Gazette (1780) was India's first newspaper."]}
);

pairQs("B1", B1, { q: t => `Who wrote '${t}'?`, rq: a => `Which of these was written by ${a}?` });
pairQs("B2", B2, { q: t => `Who is the author of '${t}'?`, rq: a => `Which work was written by ${a}?` });
pairQs("B3", B3, { q: t => `'${t}' was written by:`, rq: a => `Which of these books is by ${a}?` });
pairQs("B3", B3N, { q: t => `The newspaper / journal '${t}' was started or edited by:`, rq: a => `Which paper is associated with ${a}?` });

QB.push(
["B1","Kalidasa was a court poet of which ruler?",["Chandragupta II","Ashoka","Harshavardhana","Kanishka"],"He was one of the 'nine gems' (navaratnas) of Chandragupta II Vikramaditya's court.","p"],
["B1","In which language is the Tirukkural written?",["Tamil","Sanskrit","Pali","Telugu"],"Tiruvalluvar's couplets are a classic of Tamil literature.",""],
["B1","Who is known as the 'father of surgery' in ancient India?",["Sushruta","Charaka","Dhanvantari","Nagarjuna"],"The Sushruta Samhita describes over 300 surgical procedures.","p"],
["B1","Megasthenes came to India as an ambassador of:",["Seleucus Nicator","Alexander","Darius","Antiochus"],"He stayed at Chandragupta Maurya's court in Pataliputra and wrote Indica.",""],
["B2","In which language did Babur write the Baburnama?",["Turkish (Chagatai)","Persian","Arabic","Urdu"],"It was later translated into Persian in Akbar's time.","p"],
["B2","Which Moroccan traveller visited India during the reign of Muhammad bin Tughlaq?",["Ibn Battuta","Al-Biruni","Marco Polo","Abdur Razzaq"],"His travel account is the Rihla.","p"],
["B2","Who is called the 'Parrot of India' (Tuti-e-Hind)?",["Amir Khusrau","Abul Fazl","Mirza Ghalib","Faizi"],"A poet and musician of the Delhi Sultanate, credited with early Hindavi verse.","p"],
["B2","The Ain-i-Akbari is a part of which work?",["Akbarnama","Baburnama","Padshahnama","Tuzuk-i-Jahangiri"],"It is the third volume of Abul Fazl's Akbarnama.",""],
["B3","Which book contains the song 'Vande Mataram'?",["Anandamath","Gitanjali","Gora","Devdas"],"Bankim Chandra Chattopadhyay's Anandamath (1882).","p"],
["B3","India's first newspaper, started in 1780, was:",["Hicky's Bengal Gazette","The Hindu","Kesari","Bombay Samachar"],"James Augustus Hicky started it in Calcutta.","p"],
["B3","Where did Bal Gangadhar Tilak write the Gita Rahasya?",["Mandalay jail","Andaman Cellular Jail","Yerwada jail","Ahmednagar Fort"],"He was imprisoned in Mandalay (Burma) from 1908 to 1914.",""],
["B3","Nehru wrote 'The Discovery of India' while imprisoned at:",["Ahmednagar Fort","Mandalay jail","Naini jail","Tihar jail"],"He wrote it during 1942–46 after the Quit India movement.",""]
);

LASTMOMENT.push(
{t:"Ancient classics", era:["bk"], rows:[["Arthashastra","Kautilya"],["Indica","Megasthenes"],["Ashtadhyayi","Panini"],["Mricchakatika","Sudraka"],["Mudrarakshasa","Vishakhadatta"],["Harshacharita","Banabhatta"],["Rajatarangini","Kalhana"],["Gita Govinda","Jayadeva"]]},
{t:"Medieval works", era:["bk"], rows:[["Baburnama","Babur (Turkish)"],["Humayun-nama","Gulbadan Begum"],["Akbarnama, Ain-i-Akbari","Abul Fazl"],["Kitab-ul-Hind","Al-Biruni"],["Rihla","Ibn Battuta"],["Padmavat","Jayasi"],["Prithviraj Raso","Chand Bardai"],["Amuktamalyada","Krishnadevaraya"]]},
{t:"Freedom struggle", era:["bk"], rows:[["Discovery of India","Nehru"],["Poverty and Un-British Rule","Dadabhai Naoroji"],["Gita Rahasya","Tilak"],["Anandamath","Bankim"],["Neel Darpan","Dinabandhu Mitra"],["Gulamgiri","Jyotiba Phule"],["Kesari","Tilak"],["Al-Hilal","Maulana Azad"]]}
);
TILES.push(["1780","Hicky's Bengal Gazette","bk"],["1913","Tagore's Nobel (Gitanjali)","bk"],["1882","Anandamath","bk"],["1909","Hind Swaraj","bk"],["8","Chapters of the Ashtadhyayi","bk"],["9","Gems of Chandragupta II's court","bk"]);

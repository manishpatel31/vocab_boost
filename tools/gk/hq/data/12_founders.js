/* Part 3 · H7 Indian companies; H8 global companies; H9 reform bodies, parties and newspapers; H10 mottos and taglines (as of October 2026).
   Founders and founding years only — current chairpersons and CEOs are deliberately not quizzed. */
const H7 = [
  ["The Tata Group","Jamsetji Tata","1868, Bombay — 'Father of Indian industry'; HQ Bombay House, Mumbai.","p"],
  ["Reliance Industries","Dhirubhai Ambani","Began as a yarn-trading firm in Bombay (late 1950s); HQ Mumbai.","p"],
  ["Infosys","N. R. Narayana Murthy","1981, Pune, with six co-founders; HQ Bengaluru.","p"],
  ["Wipro","M. H. Hasham Premji","1945 at Amalner as Western India Vegetable Products; his son Azim Premji turned it into an IT giant. HQ Bengaluru.","p"],
  ["HCL","Shiv Nadar","1976; HQ Noida.","p"],
  ["Flipkart","Sachin Bansal and Binny Bansal","2007, Bengaluru; Walmart bought a majority stake in 2018.","p"],
  ["Paytm (One97 Communications)","Vijay Shekhar Sharma","One97 in 2000, Paytm in 2010; HQ Noida.","p"],
  ["Zomato","Deepinder Goyal and Pankaj Chaddah","2008 as Foodiebay; HQ Gurugram. The parent company was renamed Eternal Ltd in 2025.","p"],
  ["Swiggy","Sriharsha Majety, Nandan Reddy and Rahul Jaimini","2014, Bengaluru.",""],
  ["Ola Cabs","Bhavish Aggarwal and Ankit Bhati","2010, Mumbai; HQ Bengaluru.",""],
  ["OYO Rooms","Ritesh Agarwal","2013; HQ Gurugram.",""],
  ["Byju's","Byju Raveendran","2011, Bengaluru (with Divya Gokulnath).",""],
  ["Nykaa","Falguni Nayar","2012, Mumbai.","p"],
  ["Zerodha","Nithin Kamath and Nikhil Kamath","2010, Bengaluru.",""],
  ["PhonePe","Sameer Nigam, Rahul Chari and Burzin Engineer","2015, Bengaluru.",""],
  ["Snapdeal","Kunal Bahl and Rohit Bansal","2010, New Delhi.",""],
  ["Lenskart","Peyush Bansal","2010.",""],
  ["Mahindra & Mahindra","J. C. Mahindra and K. C. Mahindra","With Malik Ghulam Muhammad; 1945 at Ludhiana as Mahindra & Mohammed; renamed in 1948. HQ Mumbai.",""],
  ["Godrej","Ardeshir Godrej","With his brother Pirojsha; 1897, Bombay — began with locks.",""],
  ["The Bajaj Group","Jamnalal Bajaj","1926; Gandhi's close associate.",""],
  ["Larsen & Toubro","Henning Holck-Larsen and Søren Kristian Toubro","1938, Bombay — two Danish engineers.","p"],
  ["Dabur","S. K. Burman","1884, Calcutta — an Ayurvedic medicine maker.",""],
  ["Patanjali Ayurved","Baba Ramdev and Acharya Balkrishna","2006, Haridwar.",""],
];
const H7H = [
  ["Infosys","Bengaluru","",""],
  ["Tata Sons","Mumbai","At Bombay House.",""],
  ["HCLTech","Noida","",""],
  ["Zomato (Eternal Ltd)","Gurugram","",""],
  ["Bajaj Auto","Pune","",""],
  ["Patanjali Ayurved","Haridwar","",""],
  ["Amul (GCMMF)","Anand","The Gujarat Co-operative Milk Marketing Federation.","p"],
  ["TVS Motor Company","Chennai","",""],
  ["ITC Limited","Kolkata","",""],
  ["Dabur India","Ghaziabad","",""],
];
const H8 = [
  ["Microsoft","Bill Gates and Paul Allen","1975, Albuquerque; HQ Redmond, Washington.","p"],
  ["Apple","Steve Jobs, Steve Wozniak and Ronald Wayne","1976; HQ Cupertino, California.","p"],
  ["Google","Larry Page and Sergey Brin","1998, as Stanford PhD students; HQ Mountain View. Alphabet became its parent in 2015.","p"],
  ["Amazon","Jeff Bezos","1994, as an online bookshop; HQ Seattle.","p"],
  ["Facebook (Meta)","Mark Zuckerberg","With Eduardo Saverin and others; 2004 at Harvard; renamed Meta Platforms in 2021. HQ Menlo Park.","p"],
  ["Tesla","Martin Eberhard and Marc Tarpenning","2003; Elon Musk led its 2004 funding and later became CEO.","p"],
  ["SpaceX","Elon Musk","2002.","p"],
  ["OpenAI","Sam Altman, Elon Musk, Greg Brockman, Ilya Sutskever and others","2015, San Francisco — maker of ChatGPT (2022).","p"],
  ["Twitter (now X)","Jack Dorsey, Noah Glass, Biz Stone and Evan Williams","2006; bought by Elon Musk in 2022 and renamed X in 2023.","p"],
  ["YouTube","Chad Hurley, Steve Chen and Jawed Karim","2005; bought by Google in 2006.","p"],
  ["WhatsApp","Jan Koum and Brian Acton","2009; bought by Facebook in 2014.","p"],
  ["Instagram","Kevin Systrom and Mike Krieger","2010; bought by Facebook in 2012.",""],
  ["Wikipedia","Jimmy Wales and Larry Sanger","2001.","p"],
  ["Netflix","Reed Hastings and Marc Randolph","1997.",""],
  ["Nvidia","Jensen Huang, Chris Malachowsky and Curtis Priem","1993.",""],
  ["Intel","Robert Noyce and Gordon Moore","1968.",""],
  ["Alibaba","Jack Ma","1999, Hangzhou.","p"],
  ["Huawei","Ren Zhengfei","1987, Shenzhen.",""],
  ["Samsung","Lee Byung-chul","1938, Daegu (Korea).",""],
  ["Sony","Masaru Ibuka and Akio Morita","1946, Tokyo.",""],
  ["Hotmail","Sabeer Bhatia and Jack Smith","1996; Bhatia was born in Chandigarh.","p"],
  ["Sun Microsystems","Vinod Khosla, Andy Bechtolsheim, Scott McNealy and Bill Joy","1982; created the Java language.",""],
  ["Nike","Phil Knight and Bill Bowerman","1964 as Blue Ribbon Sports.",""]
];
const H8H = [
  ["Microsoft","Redmond","Washington state, USA.","p"],
  ["Apple","Cupertino","California — 'Apple Park'.","p"],
  ["Google (Alphabet)","Mountain View","California — the 'Googleplex'.","p"],
  ["Amazon","Seattle","Washington state.",""],
  ["Meta (Facebook)","Menlo Park","California.",""],
  ["Tesla","Austin","Texas — moved from California in 2021.",""],
  ["Nvidia","Santa Clara","California.",""],
  ["Walmart","Bentonville","Arkansas.",""],
  ["Nike","Beaverton","Oregon.",""],
  ["Adidas","Herzogenaurach","Germany — Puma is in the same town.",""],
  ["Alibaba","Hangzhou","China.",""],
  ["Huawei","Shenzhen","China.",""],
  ["Coca-Cola","Atlanta","Georgia, USA.",""],
  ["Nokia","Espoo","Finland.",""]
];
const H9 = [
  ["Atmiya Sabha","Raja Ram Mohan Roy","1815, Calcutta.",""],
  ["Brahmo Samaj","Raja Ram Mohan Roy","Founded as the Brahmo Sabha, 20 August 1828, Calcutta.","p|SSC CGL Tier 1 · 25 Jul 2023 (Shift 4)"],
  ["Tattvabodhini Sabha","Debendranath Tagore","1839.",""],
  ["Brahmo Samaj of India","Keshab Chandra Sen","1866, after a split with Debendranath Tagore's Adi Brahmo Samaj.",""],
  ["Prarthana Samaj","Atmaram Pandurang","1867, Bombay; M. G. Ranade joined later.","p"],
  ["Satyashodhak Samaj","Jyotirao Phule","1873, Pune — for the rights of lower castes.","p"],
  ["Arya Samaj","Swami Dayananda Saraswati","1875, Bombay; slogan 'Go back to the Vedas'.","p|SSC MTS · 20 Jul 2022 (Shift 1)"],
  ["Theosophical Society","Helena Blavatsky and Henry Steel Olcott","1875, New York; moved to Adyar, Madras, in 1882. Annie Besant later led it.","p"],
  ["Ramakrishna Mission","Swami Vivekananda","1 May 1897; HQ Belur Math, Howrah.","p|SSC MTS · 15 Jun 2023 (Shift 3)"],
  ["Servants of India Society","Gopal Krishna Gokhale","1905, Pune.","p|SSC MTS · 27 Oct 2021 (Shift 3)"],
  ["Indian National Congress","A. O. Hume","28 December 1885, Bombay; first president W. C. Bonnerjee.","p"],
  ["All-India Muslim League","Aga Khan III and Nawab Salimullah","30 December 1906, Dhaka.","p"],
  ["East India Association","Dadabhai Naoroji","1866, London.","p"],
  ["Indian Association","Surendranath Banerjee and Anandamohan Bose","1876, Calcutta.",""],
  ["Muhammadan Anglo-Oriental College (Aligarh)","Sir Syed Ahmad Khan","1875; became Aligarh Muslim University in 1920.","p"],
  ["Ghadar Party","Sohan Singh Bhakna and Lala Har Dayal","1913, San Francisco.","p"],
  ["Home Rule League (April 1916, Belgaum)","Bal Gangadhar Tilak","",""],
  ["Home Rule League (September 1916, Madras)","Annie Besant","",""],
  ["Swaraj Party","C. R. Das and Motilal Nehru","1923.","p"],
  ["Self-Respect Movement","E. V. Ramasamy (Periyar)","1925, Tamil Nadu.","p"],
  ["Hindustan Socialist Republican Association","Chandra Shekhar Azad, Bhagat Singh and comrades","1928, Delhi (from the HRA of 1924).",""],
  ["Khudai Khidmatgar ('Red Shirts')","Khan Abdul Ghaffar Khan","1929.","p"],
  ["Forward Bloc","Subhas Chandra Bose","1939.","p"],
  ["Bahishkrit Hitakarini Sabha","B. R. Ambedkar","1924.",""],
  ["Sri Narayana Dharma Paripalana Yogam","Sree Narayana Guru","1903, Kerala.",""],
  ["Harijan Sevak Sangh","Mahatma Gandhi","1932.",""],
  ["Visva-Bharati","Rabindranath Tagore","1921, Santiniketan.",""],
  ["Banaras Hindu University","Madan Mohan Malaviya","1916.","p"]
];
const H9Y = [
  ["Brahmo Samaj","1828"],["Prarthana Samaj","1867"],["Satyashodhak Samaj","1873"],["Arya Samaj","1875"],["Indian National Congress","1885"],
  ["Ramakrishna Mission","1897"],["Servants of India Society","1905"],["All-India Muslim League","1906"],["Ghadar Party","1913"],["Swaraj Party","1923"],["Forward Bloc","1939"]
];
const H9N = [
  ["Bengal Gazette (Hicky's Gazette)","James Augustus Hicky","India's first newspaper — Calcutta, 29 January 1780.","p|SSC CGL Tier 1 · 17 Jul 2023 (Shift 4)"],
  ["Sambad Kaumudi (Bengali)","Raja Ram Mohan Roy","1821.","p"],
  ["Mirat-ul-Akhbar (Persian)","Raja Ram Mohan Roy","1822.",""],
  ["Rast Goftar (Gujarati)","Dadabhai Naoroji","1851.",""],
  ["Kesari (Marathi)","Bal Gangadhar Tilak","1881, Pune.","p|SSC MTS · 9 Aug 2019 (Shift 3)"],
  ["Mahratta (English)","Bal Gangadhar Tilak","1881, Pune.","p"],
  ["Amrita Bazar Patrika","Sisir Kumar Ghosh and Motilal Ghosh","1868.",""],
  ["The Tribune","Dyal Singh Majithia","1881, Lahore.",""],
  ["Indian Opinion","Mahatma Gandhi","1903, South Africa.","p"],
  ["Young India","Mahatma Gandhi","Gandhi edited it from 1919.","p|RRB NTPC · 30 Mar 2016 (Shift 1)"],
  ["Harijan","Mahatma Gandhi","1933.","p"],
  ["Al-Hilal (Urdu)","Maulana Abul Kalam Azad","1912.","p"],
  ["Comrade (English)","Maulana Mohammad Ali Jauhar","1911.",""],
  ["New India","Annie Besant","1914–15, Madras.",""],
  ["Mooknayak (Marathi)","B. R. Ambedkar","1920.","p|SSC GD · 15 Feb 2019 (Shift 3)"],
  ["Bahishkrit Bharat","B. R. Ambedkar","1927.",""],
  ["National Herald","Jawaharlal Nehru","1938, Lucknow.","p"],
  ["The People (weekly)","Lala Lajpat Rai","1925, Lahore.",""],
  ["Indian Sociologist","Shyamji Krishna Varma","1905, London.",""],
  ["Udbodhan (Bengali)","Swami Vivekananda","1899.",""],
  ["Tahzeeb-ul-Akhlaq","Sir Syed Ahmad Khan","1870.",""]
];
const H10 = [
  ["National Emblem of India","Satyameva Jayate","'Truth alone triumphs' — from the Mundaka Upanishad.","p"],
  ["Supreme Court of India","Yato Dharmastato Jayah","'Where there is dharma, there is victory'.","p"],
  ["Lok Sabha","Dharmachakra Pravartanaya","Written above the Speaker's chair.","p"],
  ["Life Insurance Corporation (LIC)","Yogakshemam Vahamyaham","From the Bhagavad Gita.","p"],
  ["Doordarshan","Satyam Shivam Sundaram","","p"],
  ["All India Radio (Akashvani)","Bahujan Hitaya Bahujan Sukhaya","","p"],
  ["University Grants Commission","Gyan-Vigyan Vimuktaye","",""],
  ["NCERT","Vidyayamritamashnute","",""],
  ["Kendriya Vidyalaya Sangathan","Tat Tvam Pushan Apavrinu","",""],
  ["CBI","Industry, Impartiality, Integrity","",""],
  ["Delhi Police","Shanti, Sewa, Nyaya","Peace, service, justice.",""],
  ["Mumbai Police","Sadrakshanaya Khalanigrahanaya","'To protect the good and destroy the evil'.",""]
];
const H10T = [
  ["Olympic Games","Citius, Altius, Fortius – Communiter","Faster, higher, stronger – together; 'together' was added in 2021.","p"],
  ["FIDE (world chess body)","Gens una sumus","'We are one family'.","p"],
  ["FIFA","For the Game. For the World.","",""],
  ["Rotary International","Service Above Self","",""],
  ["Lions Clubs International","We Serve","",""],
  ["The Scout movement","Be Prepared","",""],
  ["Indian tourism (Ministry of Tourism)","Incredible India","Campaign launched in 2002.","p"],
  ["Kerala Tourism","God's Own Country","","p"],
  ["Madhya Pradesh Tourism","The Heart of Incredible India","",""],
  ["Amul","The Taste of India","",""],
  ["State Bank of India","The Banker to Every Indian","","p"],
  ["Punjab National Bank","The Name You Can Bank Upon","",""],
  ["Bank of Baroda","India's International Bank","",""],
  ["Tata Steel","We Also Make Tomorrow","",""],
  ["Nike","Just Do It","",""],
  ["Apple (1997 campaign)","Think Different","",""],
  ["Adidas","Impossible Is Nothing","",""],
  ["McDonald's","I'm Lovin' It","",""],
  ["Nokia","Connecting People","",""],
];

LESSONS.push(
{id:"H7", heat:3, title:"Founders of Indian companies", hi:"भारतीय कंपनियों के संस्थापक", blocks:[
  {k:"hot", h:"Asked often: <b>Infosys — N. R. Narayana Murthy</b>, <b>Flipkart — Sachin and Binny Bansal</b>, <b>Paytm — Vijay Shekhar Sharma</b>, <b>Zomato — Deepinder Goyal</b>, <b>OYO — Ritesh Agarwal</b>, <b>Nykaa — Falguni Nayar</b>, <b>Tata — Jamsetji Tata</b>, <b>Reliance — Dhirubhai Ambani</b>."},
  {k:"story", h:"<p>Modern Indian industry starts with <b>Jamsetji Tata</b>, who founded his trading firm in Bombay in <b>1868</b> and dreamt of a steel plant, a science institute (IISc) and a hydro-power company. <b>Dhirubhai Ambani</b> began trading yarn in Bombay and built <b>Reliance</b>. In <b>1981</b>, <b>N. R. Narayana Murthy</b> and six friends started <b>Infosys</b> in Pune with ₹10,000; <b>Shiv Nadar</b> had started <b>HCL</b> in 1976.</p><p>The internet age brought a new wave. Two IIT Delhi graduates, <b>Sachin and Binny Bansal</b>, began <b>Flipkart</b> in 2007 selling books; <b>Vijay Shekhar Sharma</b> launched <b>Paytm</b> in 2010; <b>Deepinder Goyal</b> started <b>Zomato</b> as Foodiebay in 2008; teenage <b>Ritesh Agarwal</b> founded <b>OYO</b> in 2013, and <b>Falguni Nayar</b> left banking to build <b>Nykaa</b> in 2012.</p>", key:"Tata — Jamsetji (1868); Reliance — Dhirubhai; Infosys — Narayana Murthy (1981); HCL — Shiv Nadar; Flipkart — Bansals (2007); Paytm — Vijay Shekhar Sharma."},
  {k:"table", title:"Company and founder", head:["Company","Founder(s)","Year and base"], rows: H7.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Where is the company based?", head:["Company","Headquarters","Note"], rows: H7H.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>Three Bansals, three companies</b>: Sachin and Binny — <b>Flipkart</b>; Rohit (with Kunal Bahl) — <b>Snapdeal</b>; Peyush — <b>Lenskart</b>. <b>“Murthy started with Seven”</b> — Infosys had seven founders."},
  {k:"trap", h:"<b>Wipro</b> was founded by <b>M. H. Hasham Premji</b> (1945) — <b>Azim Premji</b> is his son who built the IT business. <b>Zomato</b>'s parent is now called <b>Eternal Ltd</b> (2025). <b>Mahindra & Mahindra</b> began as <b>Mahindra & Mohammed</b>."}
], sum:["Tata — Jamsetji Tata (1868); Reliance — Dhirubhai Ambani; Godrej — Ardeshir Godrej (1897).","Infosys — N. R. Narayana Murthy and six others (1981); HCL — Shiv Nadar (1976); Wipro — M. H. Hasham Premji (1945).","Flipkart — Sachin and Binny Bansal (2007); Paytm — Vijay Shekhar Sharma; Zomato — Deepinder Goyal and Pankaj Chaddah.","OYO — Ritesh Agarwal; Nykaa — Falguni Nayar; Ola — Bhavish Aggarwal; Zerodha — Nithin and Nikhil Kamath.","Larsen & Toubro — two Danish engineers (1938); Patanjali — Baba Ramdev and Acharya Balkrishna (2006)."]},

{id:"H8", heat:3, title:"Founders of global companies", hi:"विश्व की कंपनियों के संस्थापक", blocks:[
  {k:"hot", h:"Classic pairs: <b>Microsoft — Bill Gates and Paul Allen</b>, <b>Apple — Steve Jobs and Steve Wozniak</b>, <b>Google — Larry Page and Sergey Brin</b>, <b>Amazon — Jeff Bezos</b>, <b>Facebook — Mark Zuckerberg</b>, <b>Hotmail — Sabeer Bhatia</b>. HQs: <b>Redmond, Cupertino, Mountain View, Seattle</b>."},
  {k:"story", h:"<p>Many of the world's biggest companies began in garages and dorm rooms. <b>Bill Gates</b> and <b>Paul Allen</b> started <b>Microsoft</b> in 1975; <b>Steve Jobs</b> and <b>Steve Wozniak</b> built the first <b>Apple</b> computer in 1976. Two Stanford students, <b>Larry Page</b> and <b>Sergey Brin</b>, launched <b>Google</b> in 1998, while <b>Jeff Bezos</b> sold books online as <b>Amazon</b> from 1994. <b>Mark Zuckerberg</b> started <b>Facebook</b> in his Harvard room in 2004.</p><p>Indians are in this story too: <b>Sabeer Bhatia</b> co-founded <b>Hotmail</b> (1996) and <b>Vinod Khosla</b> co-founded <b>Sun Microsystems</b> (1982). <b>Elon Musk</b> founded <b>SpaceX</b> (2002) and co-founded <b>OpenAI</b> (2015) — but <b>Tesla</b> was started in 2003 by <b>Martin Eberhard</b> and <b>Marc Tarpenning</b>.</p>", key:"Microsoft — Gates and Allen; Apple — Jobs and Wozniak; Google — Page and Brin; Amazon — Bezos; Facebook — Zuckerberg; Hotmail — Sabeer Bhatia."},
  {k:"table", title:"Company and founder", head:["Company","Founder(s)","Year and note"], rows: H8.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Where is the company based?", head:["Company","Headquarters","Where"], rows: H8H.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Bought by Facebook: W-I”</b> — WhatsApp (2014) and Instagram (2012). <b>“Google bought the Tube”</b> — YouTube (2006). Microsoft's HQ <b>Redmond</b> and Amazon's <b>Seattle</b> are both in <b>Washington state</b>."},
  {k:"trap", h:"<b>Elon Musk</b> did not found <b>Tesla</b> — he was an early investor (2004) and later CEO. <b>Ronald Wayne</b> was Apple's little-known third founder. <b>Jawed Karim</b> (YouTube) and <b>Sabeer Bhatia</b> (Hotmail) are names that trap students who expect only Americans."}
], sum:["Microsoft — Bill Gates and Paul Allen (1975), Redmond; Apple — Jobs, Wozniak and Wayne (1976), Cupertino.","Google — Larry Page and Sergey Brin (1998), Mountain View; Amazon — Jeff Bezos (1994), Seattle.","Facebook/Meta — Mark Zuckerberg (2004), Menlo Park; WhatsApp — Koum and Acton; Instagram — Systrom and Krieger.","Tesla — Eberhard and Tarpenning (2003); SpaceX — Elon Musk (2002); OpenAI — Altman, Musk and others (2015).","Hotmail — Sabeer Bhatia; Sun Microsystems — Vinod Khosla and others; Alibaba — Jack Ma; Huawei — Ren Zhengfei."]},

{id:"H9", heat:3, title:"Reform bodies, parties and newspapers", hi:"सुधार संगठन, दल और समाचार-पत्र", blocks:[
  {k:"hot", h:"Asked in almost every SSC shift: <b>Brahmo Samaj — Raja Ram Mohan Roy</b>, <b>Arya Samaj — Dayananda Saraswati</b>, <b>Ramakrishna Mission — Vivekananda</b>, <b>Servants of India Society — Gokhale</b>, <b>Satyashodhak Samaj — Phule</b>; papers <b>Kesari — Tilak</b>, <b>Young India and Harijan — Gandhi</b>, <b>Al-Hilal — Azad</b>, <b>Mooknayak — Ambedkar</b>."},
  {k:"story", h:"<p>The 19th-century awakening began in Bengal. <b>Raja Ram Mohan Roy</b> founded the <b>Brahmo Sabha</b> in <b>1828</b> (later the Brahmo Samaj) and also ran newspapers — <b>Sambad Kaumudi</b> in Bengali and <b>Mirat-ul-Akhbar</b> in Persian. In western India came the <b>Prarthana Samaj</b> (1867), <b>Jyotirao Phule</b>'s <b>Satyashodhak Samaj</b> (1873) and <b>Dayananda Saraswati</b>'s <b>Arya Samaj</b> (1875, Bombay). <b>Vivekananda</b> founded the <b>Ramakrishna Mission</b> in 1897 and <b>Gokhale</b> the <b>Servants of India Society</b> in 1905.</p><p>Politics grew out of these: <b>A. O. Hume</b> helped found the <b>Congress</b> in 1885, the <b>Muslim League</b> came in 1906 at Dhaka, and <b>Tilak</b> and <b>Annie Besant</b> began Home Rule Leagues in 1916. Every leader had a paper: <b>Tilak</b> — Kesari and Mahratta; <b>Gandhi</b> — Indian Opinion, Young India, Harijan; <b>Azad</b> — Al-Hilal; <b>Ambedkar</b> — Mooknayak; <b>Nehru</b> — National Herald.</p>", key:"Brahmo 1828 — Roy; Arya 1875 — Dayananda; RK Mission 1897 — Vivekananda; Servants of India 1905 — Gokhale; Kesari — Tilak; Young India — Gandhi; Al-Hilal — Azad."},
  {k:"table", title:"Organisation and founder", head:["Organisation","Founder(s)","Year and place"], rows: H9.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Founding years", head:["Organisation","Year"], rows: H9Y},
  {k:"table", title:"Newspapers and journals", head:["Paper","Started by","Year and place"], rows: H9N.map(r => [r[0], r[1], r[2]])},
  {k:"tl", title:"Timeline", rows:[["1780","Hicky's Bengal Gazette — India's first newspaper"],["1828","Brahmo Sabha (Raja Ram Mohan Roy)"],["1875","Arya Samaj; Theosophical Society (New York)"],["1885","Indian National Congress"],["1897","Ramakrishna Mission"],["1905","Servants of India Society"],["1906","All-India Muslim League"]]},
  {k:"trick", h:"Year chain <b>28 – 67 – 73 – 75 – 97 – 1905</b>: <b>B</b>rahmo, <b>P</b>rarthana, <b>S</b>atyashodhak, <b>A</b>rya, <b>R</b>amakrishna, <b>S</b>ervants — <b>“Big Pandits Speak About Real Service.”</b> Gandhi's papers <b>“I-Y-H”</b>: Indian Opinion, Young India, Harijan."},
  {k:"trap", h:"The <b>Theosophical Society</b> was founded in <b>New York</b> by <b>Blavatsky and Olcott</b>; Annie Besant led it later. <b>Kesari</b> was Marathi and <b>Mahratta</b> English — both Tilak's. The <b>Ramakrishna Mission</b> was founded by Vivekananda, not by Ramakrishna. The <b>Brahmo Samaj of India</b> (1866) is Keshab Chandra Sen's, not Roy's."}
], sum:["Brahmo Samaj (1828) — Raja Ram Mohan Roy; Prarthana Samaj (1867) — Atmaram Pandurang; Satyashodhak Samaj (1873) — Jyotirao Phule.","Arya Samaj (1875) — Dayananda Saraswati; Ramakrishna Mission (1897) — Vivekananda; Servants of India Society (1905) — Gokhale.","Congress (1885) — A. O. Hume; Muslim League (1906, Dhaka); Home Rule Leagues (1916) — Tilak and Annie Besant.","Kesari and Mahratta — Tilak; Indian Opinion, Young India, Harijan — Gandhi; Al-Hilal — Azad.","Bengal Gazette (1780) — Hicky; Mooknayak — Ambedkar; National Herald — Nehru; The Tribune — Dyal Singh Majithia."]},

{id:"H10", heat:2, title:"Mottos and taglines", hi:"आदर्श-वाक्य और टैगलाइन", blocks:[
  {k:"hot", h:"Most asked: <b>Satyameva Jayate</b> (national emblem, Mundaka Upanishad), <b>Yato Dharmastato Jayah</b> (Supreme Court), <b>Yogakshemam Vahamyaham</b> (LIC), <b>Satyam Shivam Sundaram</b> (Doordarshan), <b>Bahujan Hitaya Bahujan Sukhaya</b> (AIR), and the Olympic motto."},
  {k:"story", h:"<p>India's institutions borrowed their mottos from Sanskrit texts. The national emblem carries <b>Satyameva Jayate</b> from the <b>Mundaka Upanishad</b>. The <b>Supreme Court</b> says <b>Yato Dharmastato Jayah</b>; <b>LIC</b> promises <b>Yogakshemam Vahamyaham</b> from the Gita; <b>Doordarshan</b> chose <b>Satyam Shivam Sundaram</b> and <b>All India Radio</b> <b>Bahujan Hitaya Bahujan Sukhaya</b>.</p><p>World bodies and brands have their own lines. The <b>Olympic</b> motto <b>Citius, Altius, Fortius</b> gained a fourth word, <b>Communiter</b> ('together'), in 2021. Chess's <b>FIDE</b> says <b>Gens una sumus</b> — we are one family. And brands are known by a few words: <b>Just Do It</b> (Nike), <b>Incredible India</b> (tourism), <b>God's Own Country</b> (Kerala).</p>", key:"Satyameva Jayate — emblem; Yato Dharmastato Jayah — Supreme Court; Yogakshemam Vahamyaham — LIC; Citius, Altius, Fortius – Communiter — Olympics."},
  {k:"table", title:"Mottos of Indian institutions", head:["Institution","Motto","Note"], rows: H10.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Mottos and taglines of organisations and brands", head:["Organisation / brand","Motto or tagline","Note"], rows: H10T.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Truth on the emblem, Dharma in the court, Yoga in insurance”</b> — Satyameva Jayate, Yato Dharmastato Jayah, Yogakshemam Vahamyaham. <b>“Satyam on screen, Bahujan on radio”</b> — Doordarshan and AIR."},
  {k:"trap", h:"<b>Satyameva Jayate</b> comes from the <b>Mundaka Upanishad</b>, not the Gita (LIC's motto is from the Gita). The Olympic motto now has <b>four</b> words — <b>Communiter</b> was added in 2021. <b>Dharmachakra Pravartanaya</b> is the <b>Lok Sabha</b>'s, not the Supreme Court's."}
], sum:["Satyameva Jayate — national emblem (Mundaka Upanishad); Yato Dharmastato Jayah — Supreme Court.","Dharmachakra Pravartanaya — Lok Sabha; Yogakshemam Vahamyaham — LIC.","Satyam Shivam Sundaram — Doordarshan; Bahujan Hitaya Bahujan Sukhaya — All India Radio.","Olympics — Citius, Altius, Fortius – Communiter; FIDE — Gens una sumus.","Incredible India — tourism (2002); God's Own Country — Kerala; Just Do It — Nike."]}
);

pairQs("H7", H7, { q: t => `Who founded ${t}?`, rq: a => `${a} founded which company?` });
pairQs("H7", H7H, { q: t => `Where is ${t} headquartered?`, extra: ["Hyderabad"] });
pairQs("H8", H8, { q: t => `${t} was founded by:` });
pairQs("H8", H8H, { q: t => `The headquarters of ${t} is in:` });
pairQs("H9", H9, { q: t => `Who founded the ${t}?`, rq: a => `Which organisation was founded by ${a}?` });
pairQs("H9", H9Y, { q: t => `In which year was the ${t} founded?` });
pairQs("H9", H9N, { q: t => `Who started the paper ${t}?`, rq: a => `Which paper was started by ${a}?` });
pairQs("H10", H10, { q: t => `What is the motto of the ${t}?`, rq: a => `'${a}' is the motto of:` });
pairQs("H10", H10T, { q: t => `The motto or tagline of ${t} is:`, rq: a => `'${a}' is the motto or tagline of:` });

QB.push(
["H7","Which company did N. R. Narayana Murthy co-found in 1981?",["Infosys","Wipro","TCS","HCL"],"With six others, in Pune.","p"],
["H7","Who is called the 'Father of Indian Industry'?",["Jamsetji Tata","G. D. Birla","Dhirubhai Ambani","Jamnalal Bajaj"],"Founder of the Tata Group.","p"],
["H7","Which global company bought a majority stake in Flipkart in 2018?",["Walmart","Amazon","Alibaba","SoftBank"],"About 77% for 16 billion dollars.","p"],
["H7","Zomato began in 2008 under the name:",["Foodiebay","Foodpanda","Zomatoes","FoodHub"],"Renamed Zomato in 2010; the parent became Eternal Ltd in 2025.",""],
["H7","The steel city Jamshedpur is named after:",["Jamsetji Tata","J. R. D. Tata","Dorabji Tata","Ratan Tata"],"Tata Steel's plant at Sakchi began in 1907–08.","p"],
["H8","Which Indian-born entrepreneur co-founded Hotmail?",["Sabeer Bhatia","Vinod Khosla","Sundar Pichai","Satya Nadella"],"Launched in 1996; sold to Microsoft in 1997.","p"],
["H8","Which company did Elon Musk found in 2002?",["SpaceX","Tesla","PayPal","Neuralink"],"Tesla was founded in 2003 by Eberhard and Tarpenning.","p"],
["H8","Google's parent company, formed in 2015, is called:",["Alphabet","Meta","Oracle","Abacus"],"Google became its largest subsidiary.","p"],
["H8","Which company did Facebook buy in 2014 for about 19 billion dollars?",["WhatsApp","Instagram","Twitter","Snapchat"],"Instagram had been bought in 2012.","p"],
["H8","OpenAI, the maker of ChatGPT, was founded in:",["2015","2010","2018","2021"],"In San Francisco; ChatGPT was released in November 2022.","p"],
["H9","Who is known as the 'Father of the Indian Renaissance'?",["Raja Ram Mohan Roy","Swami Vivekananda","Ishwar Chandra Vidyasagar","Dayananda Saraswati"],"Founder of the Brahmo Samaj.","p"],
["H9","'Go back to the Vedas' was the call of:",["Dayananda Saraswati","Swami Vivekananda","Raja Ram Mohan Roy","Keshab Chandra Sen"],"Founder of the Arya Samaj; author of Satyarth Prakash.","p"],
["H9","Who was the first president of the Indian National Congress (1885)?",["W. C. Bonnerjee","A. O. Hume","Dadabhai Naoroji","Surendranath Banerjee"],"The first session met at Bombay with 72 delegates.","p"],
["H9","The All-India Muslim League was founded in 1906 at:",["Dhaka","Aligarh","Lahore","Lucknow"],"On 30 December 1906.","p"],
["H9","The Theosophical Society moved its headquarters in India to:",["Adyar, Madras","Belur, Howrah","Pune","Santiniketan"],"In 1882.","p"],
["H9","Which was India's first newspaper?",["Bengal Gazette","Kesari","Bombay Samachar","The Hindu"],"Started by James Augustus Hicky in Calcutta, 1780.","p"],
["H10","'Satyameva Jayate' is taken from the:",["Mundaka Upanishad","Bhagavad Gita","Rigveda","Katha Upanishad"],"It is written below the Lion Capital in the national emblem.","p"],
["H10","Which word was added to the Olympic motto in 2021?",["Communiter (together)","Pax (peace)","Unitas (unity)","Honor (honour)"],"Approved by the IOC Session in Tokyo, July 2021.","p"],
["H10","LIC's motto 'Yogakshemam Vahamyaham' is taken from the:",["Bhagavad Gita","Mundaka Upanishad","Ramayana","Arthashastra"],"Meaning: 'I carry your welfare'.",""],
["H10","The Incredible India campaign was launched in:",["2002","1998","2008","2014"],"By the Ministry of Tourism.",""]
);

LASTMOMENT.push(
{t:"Company founders", era:["hq"], rows:[["Tata","Jamsetji Tata"],["Infosys","Narayana Murthy"],["HCL","Shiv Nadar"],["Flipkart","Sachin & Binny Bansal"],["Paytm","Vijay Shekhar Sharma"],["OYO","Ritesh Agarwal"],["Microsoft","Gates & Allen"],["Google","Page & Brin"]]},
{t:"Reformers", era:["hq"], rows:[["Brahmo Samaj, 1828","Ram Mohan Roy"],["Arya Samaj, 1875","Dayananda"],["Satyashodhak, 1873","Phule"],["RK Mission, 1897","Vivekananda"],["Servants of India, 1905","Gokhale"],["Congress, 1885","A. O. Hume"],["Forward Bloc, 1939","Subhas Bose"],["Self-Respect, 1925","Periyar"]]},
{t:"Papers and mottos", era:["hq"], rows:[["Kesari, Mahratta","Tilak"],["Young India, Harijan","Gandhi"],["Al-Hilal","Azad"],["Mooknayak","Ambedkar"],["Satyameva Jayate","Emblem"],["Yato Dharmastato Jayah","Supreme Court"],["Yogakshemam Vahamyaham","LIC"],["Satyam Shivam Sundaram","Doordarshan"]]}
);
TILES.push(["1868","Tata founded","hq"],["1981","Infosys founded","hq"],["1828","Brahmo Sabha","hq"],["1875","Arya Samaj","hq"],["1897","Ramakrishna Mission","hq"],["1780","First Indian newspaper","hq"]);

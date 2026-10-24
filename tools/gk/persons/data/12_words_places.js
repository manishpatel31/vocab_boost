/* Part 3 · P7 slogans, lines and quotes; P8 samadhis, memorials and statues; P9 birthplaces, places and pen names.
   Memorials after 2024 (Rashtriya Smriti Sthal plots for Pranab Mukherjee and Manmohan Singh, the Rashtra Prerna Sthal
   in Lucknow) were checked by web search as of October 2026. */

const P7I = [
  ["Swaraj is my birthright and I shall have it","Bal Gangadhar Tilak","Said during the Home Rule movement (1916).",""],
  ["Karo ya Maro (Do or Die)","Mahatma Gandhi","At Gowalia Tank, Bombay, on 8 August 1942, launching Quit India.",""],
  ["Tum mujhe khoon do, main tumhe azadi dunga","Subhas Chandra Bose","'Give me blood and I will give you freedom' — to the INA in Burma (1944).",""],
  ["Jai Jawan, Jai Kisan","Lal Bahadur Shastri","During the 1965 war and a food shortage.",""],
  ["Jai Vigyan (added to Jai Jawan, Jai Kisan)","Atal Bihari Vajpayee","After the Pokhran-II tests of 1998.",""],
  ["Jai Anusandhan (added to the line)","Narendra Modi","At the Indian Science Congress, Jalandhar, in January 2019.",""],
  ["Garibi Hatao","Indira Gandhi","'Remove poverty' — her slogan for the 1971 election.",""],
  ["Sampoorna Kranti (Total Revolution)","Jayaprakash Narayan","At Gandhi Maidan, Patna, on 5 June 1974.",""],
  ["Every blow on me is a nail in the coffin of British rule","Lala Lajpat Rai","After the lathi charge at the Simon Commission protest, Lahore (1928).",""],
  ["Educate, agitate, organise","B. R. Ambedkar","His call to the depressed classes.",""],
  ["Arise, awake and stop not till the goal is reached","Swami Vivekananda","Taken from the Katha Upanishad; National Youth Day marks his birthday.",""],
  ["Back to the Vedas","Dayananda Saraswati","The call of the Arya Samaj (1875).",""],
  ["One caste, one religion, one God for man","Sree Narayana Guru","The Kerala reformer who founded the SNDP Yogam (1903).",""],
  ["Long years ago we made a tryst with destiny","Jawaharlal Nehru","At midnight on 14–15 August 1947 in the Constituent Assembly.",""],
  ["It takes a loud voice to make the deaf hear","Bhagat Singh","In the leaflet thrown with the bombs in the Central Assembly (8 April 1929).",""],
  ["Dushman ki goliyon ka hum samna karenge, azad hi rahe hain, azad hi rahenge","Chandra Shekhar Azad","He kept his vow and was never taken alive (Allahabad, 1931).",""],
  ["Indira is India, and India is Indira","D. K. Barooah","Congress President during the Emergency (1975–77).",""]
];
const P7S = [
  ["Saare Jahan Se Achha","Muhammad Iqbal","Written in 1904 as Tarana-e-Hind.",""],
  ["Ae Mere Watan Ke Logon","Kavi Pradeep","Sung by Lata Mangeshkar in Delhi on 27 January 1963, after the war with China.",""],
  ["Jhanda Ooncha Rahe Hamara","Shyamlal Gupta 'Parshad'","The flag song of 1924.",""],
  ["Khoob ladi mardani woh to Jhansi wali rani thi","Subhadra Kumari Chauhan","From her poem Jhansi ki Rani.",""],
  ["Singhasan khali karo ki janata aati hai","Ramdhari Singh Dinkar","J. P. Narayan recited it at the Ramlila Maidan rally of 25 June 1975.",""],
  ["Sarfaroshi ki tamanna ab hamare dil mein hai","Bismil Azimabadi","Made famous by Ram Prasad Bismil and the Kakori revolutionaries.",""],
  ["Hum Dekhenge","Faiz Ahmad Faiz","A poem of protest written in Pakistan in 1979.",""],
  ["Vande Mataram","Bankim Chandra Chatterjee","In his novel Anandamath (1882).",""]
];
const P7W = [
  ["I have a dream","Martin Luther King Jr.","At the March on Washington, 1963.",""],
  ["Veni, vidi, vici (I came, I saw, I conquered)","Julius Caesar","After a quick victory in 47 BCE.",""],
  ["Give me liberty, or give me death!","Patrick Henry","American patriot, 1775.",""],
  ["Workers of the world, unite!","Karl Marx and Friedrich Engels","The Communist Manifesto (1848).",""],
  ["I have nothing to offer but blood, toil, tears and sweat","Winston Churchill","His first speech as Prime Minister, May 1940.",""],
  ["Government of the people, by the people, for the people","Abraham Lincoln","The Gettysburg Address, 1863.",""],
  ["Ask not what your country can do for you","John F. Kennedy","His inaugural address, 1961.",""],
  ["Man is born free, and everywhere he is in chains","Jean-Jacques Rousseau","The Social Contract (1762).",""],
  ["I think, therefore I am","René Descartes","The French philosopher's first certainty.",""],
  ["Peace, Land, Bread","Vladimir Lenin","The Bolshevik slogan of 1917.",""],
  ["The only thing we have to fear is fear itself","Franklin D. Roosevelt","His first inaugural address, 1933, in the Great Depression.",""],
  ["Political power grows out of the barrel of a gun","Mao Zedong","Said in 1927.",""],
  ["History will absolve me","Fidel Castro","His defence speech at his trial in Cuba (1953).",""]
];

const P8S = [
  ["Raj Ghat","Mahatma Gandhi","Cremated here on 31 January 1948; a black marble platform by the Yamuna.",""],
  ["Shanti Van","Jawaharlal Nehru","'Forest of peace'; Sanjay Gandhi was also cremated nearby.",""],
  ["Vijay Ghat","Lal Bahadur Shastri","'Ghat of victory', for the 1965 war; he died at Tashkent (1966).",""],
  ["Shakti Sthal","Indira Gandhi","'Place of strength'; beside Shanti Van.",""],
  ["Veer Bhumi","Rajiv Gandhi","'Land of the brave'; he was killed at Sriperumbudur (1991).",""],
  ["Kisan Ghat","Charan Singh","For the farmers' leader and fifth Prime Minister.",""],
  ["Samata Sthal","Jagjivan Ram","'Place of equality'; former Deputy Prime Minister.",""],
  ["Sangharsh Sthal","Devi Lal","'Place of struggle'; former Deputy Prime Minister.",""],
  ["Ekta Sthal","Giani Zail Singh","'Place of unity'; R. Venkataraman's memorial is in the same area.",""],
  ["Karma Bhumi","Shankar Dayal Sharma","'Land of duty'; the ninth President.",""],
  ["Uday Bhumi","K. R. Narayanan","'Land of dawn'; the tenth President.",""],
  ["Jannayak Sthal","Chandra Shekhar","'Place of the people's leader'; Prime Minister 1990–91.",""],
  ["Smriti Sthal","I. K. Gujral","Prime Minister 1997–98.",""],
  ["Sadaiv Atal","Atal Bihari Vajpayee","'Forever Atal'; opened on 25 December 2018 in the Rashtriya Smriti Sthal.",""],
  ["Abhay Ghat (Ahmedabad)","Morarji Desai","On the Sabarmati; Prime Minister 1977–79.",""],
  ["Narayan Ghat (Ahmedabad)","Gulzarilal Nanda","Twice acting Prime Minister (1964 and 1966).",""],
  ["Mahaprayan Ghat (Patna)","Rajendra Prasad","India's first President.",""],
  ["Gyan Bhumi (Hyderabad)","P. V. Narasimha Rao","Prime Minister 1991–96; cremated in Hyderabad.",""],
  ["Chaitya Bhoomi (Mumbai)","B. R. Ambedkar","At Dadar, by the sea; crowds gather on 6 December, Mahaparinirvan Din.",""]
];
const P8T = [
  ["Statue of Unity","Vallabhbhai Patel","182 m, at Ekta Nagar (Kevadia), Gujarat, 2018 — the world's tallest statue.",""],
  ["Statue of Equality","Ramanujacharya","216 ft, seated, at Hyderabad, 2022 — for the 11th-century saint.",""],
  ["Statue of Social Justice","B. R. Ambedkar","125-ft statue on an 81-ft base at Vijayawada, January 2024.",""],
  ["Statue of Prosperity","Kempegowda","108 ft, at Bengaluru airport, 2022 — the founder of Bengaluru.",""],
  ["Statue under the canopy at India Gate","Subhas Chandra Bose","28-ft granite statue unveiled on 8 September 2022.",""],
  ["133-ft statue at Kanyakumari","Thiruvalluvar","The Tamil poet of the Tirukkural; set up in 2000.",""]
];

const P9B = [
  ["Mahatma Gandhi","Porbandar (Gujarat)","2 October 1869; the house is now the Kirti Mandir.",""],
  ["Rabindranath Tagore","Jorasanko, Kolkata","The Tagore family house (1861).",""],
  ["Subhas Chandra Bose","Cuttack (Odisha)","23 January 1897 — now Parakram Diwas.",""],
  ["Vallabhbhai Patel","Nadiad (Gujarat)","31 October 1875 — now National Unity Day.",""],
  ["B. R. Ambedkar","Mhow (Madhya Pradesh)","14 April 1891; the town is now Dr Ambedkar Nagar.",""],
  ["Bhagat Singh","Banga, Lyallpur district (now in Pakistan)","1907; his family village is Khatkar Kalan in Punjab.",""],
  ["Rani Lakshmibai","Varanasi","Born Manikarnika; she grew up at the Peshwa's court in Bithoor.",""],
  ["Lal Bahadur Shastri","Mughalsarai (Uttar Pradesh)","2 October 1904 — the same date as Gandhi.",""],
  ["A. P. J. Abdul Kalam","Rameswaram (Tamil Nadu)","15 October 1931; his memorial is at Pei Karumbu, Rameswaram.",""],
  ["Rajendra Prasad","Ziradei (Bihar)","In Siwan district (1884).",""],
  ["Atal Bihari Vajpayee","Gwalior (Madhya Pradesh)","25 December 1924 — now Good Governance Day.",""],
  ["Dayananda Saraswati","Tankara (Gujarat)","In Morbi district (1824).",""],
  ["Raja Ram Mohan Roy","Radhanagar (West Bengal)","In Hooghly district (1772).",""],
  ["Bal Gangadhar Tilak","Ratnagiri (Maharashtra)","On the Konkan coast (1856).",""],
  ["Mother Teresa","Skopje (now North Macedonia)","Born in 1910; she came to India in 1929.",""]
];
const P9L = [
  ["Sabarmati Ashram, Ahmedabad","Mahatma Gandhi","His home from 1917 to 1930; the Dandi March began here.",""],
  ["Santiniketan","Rabindranath Tagore","He founded Visva-Bharati there (1921); a World Heritage site since 2023.",""],
  ["Anand Bhavan, Prayagraj","Motilal Nehru","The Nehru family home; Indira Gandhi was born there.",""],
  ["Belur Math","Swami Vivekananda","He founded it (1898) as the headquarters of the Ramakrishna Mission.",""],
  ["Dakshineswar Kali Temple","Ramakrishna Paramahansa","He was its priest.",""],
  ["Puducherry (the ashram)","Sri Aurobindo","He lived there from 1910 to 1950.",""],
  ["Tiruvannamalai","Ramana Maharshi","He lived at the foot of the Arunachala hill.",""],
  ["Kalady (Kerala)","Adi Shankaracharya","His birthplace, on the Periyar.",""],
  ["Netaji Bhawan, Kolkata","Subhas Chandra Bose","His family home on Elgin Road, from where he escaped in 1941.",""]
];
const P9P = [
  ["Bachchan","Harivansh Rai Srivastava","Poet of Madhushala.",""],
  ["Bhanusimha","Rabindranath Tagore","His teenage pen name for songs in the Vaishnava style.",""],
  ["Amrita Pritam","Amrit Kaur","Punjabi poet of Pinjar.",""],
  ["Kusumagraj","Vishnu Vaman Shirwadkar","Marathi poet; his birthday, 27 February, is Marathi Bhasha Din.",""],
  ["Kalki","R. Krishnamurthy","Tamil writer of Ponniyin Selvan.",""],
  ["Josh Malihabadi","Shabbir Hasan Khan","Urdu poet called 'Shayar-e-Inquilab'.",""],
  ["Majrooh Sultanpuri","Asrar ul Hassan Khan","Urdu poet and film lyricist.",""],
  ["Shivani","Gaura Pant","Hindi novelist of the Kumaon hills.",""],
  ["Dhoomil","Sudama Pandey","Hindi poet of protest.",""],
  ["Banaphool","Balai Chand Mukhopadhyay","Bengali writer and doctor.",""],
  ["Mark Twain","Samuel Langhorne Clemens","Wrote The Adventures of Tom Sawyer.",""],
  ["George Orwell","Eric Arthur Blair","Born at Motihari, Bihar (1903).",""],
  ["George Eliot","Mary Ann Evans","Wrote Middlemarch.",""],
  ["Voltaire","François-Marie Arouet","French thinker of the Enlightenment.",""],
  ["O. Henry","William Sydney Porter","American short-story writer.",""]
];

LESSONS.push(
{id:"P7", heat:3, title:"Famous slogans, lines and quotes", hi:"प्रसिद्ध नारे, पंक्तियाँ और कथन", blocks:[
  {k:"hot", h:"Most asked: who gave <b>Swaraj is my birthright</b>, <b>Do or Die</b>, <b>Give me blood…</b>, <b>Jai Jawan Jai Kisan</b> (and who added <b>Jai Vigyan</b> and <b>Jai Anusandhan</b>), <b>Garibi Hatao</b>, <b>Total Revolution</b>; who <b>coined</b> Inquilab Zindabad, Jai Hind and Quit India; and who wrote <b>Saare Jahan Se Achha</b>."},
  {k:"story", h:"<p>A slogan is a whole speech in four words. Tilak said Swaraj was a <b>birthright</b>; Gandhi, in August 1942, told the country to <b>do or die</b>; Bose asked for <b>blood</b> in return for freedom. After independence the slogans changed: Shastri saluted the soldier and the farmer — <b>Jai Jawan, Jai Kisan</b> — and later Prime Ministers added the scientist (<b>Jai Vigyan</b>, Vajpayee, 1998) and the researcher (<b>Jai Anusandhan</b>, Modi, 2019).</p><p>Many slogans were <b>coined</b> by one person and <b>made famous</b> by another. The poet Hasrat Mohani coined <b>Inquilab Zindabad</b>; Bhagat Singh made the courtroom ring with it. Yusuf Meherally coined <b>Quit India</b>; Gandhi made it a movement. Exams love to ask which of the two.</p>",
    key:"Birthright — Tilak; Do or Die — Gandhi; blood — Bose; Jawan-Kisan — Shastri, + Vigyan — Vajpayee, + Anusandhan — Modi."},
  {k:"table", title:"Slogans and words of Indian leaders", head:["Slogan or words","Who","When and where"], rows: P7I.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Coined by one, made famous by another", rows:[
    ["Inquilab Zindabad","Coined by the poet <b>Hasrat Mohani</b> (1921); made famous by <b>Bhagat Singh</b> and the HSRA"],
    ["Jai Hind","Coined by <b>Abid Hasan Safrani</b>, Bose's aide; made the greeting of the INA by <b>Subhas Chandra Bose</b>"],
    ["Quit India","Coined by <b>Yusuf Meherally</b> (who also coined 'Simon Go Back'); the movement was <b>Gandhi's</b> (1942)"],
    ["Dilli Chalo","<b>Subhas Chandra Bose</b>'s call to the INA (1943)"],
    ["Satyameva Jayate","From the <b>Mundaka Upanishad</b>; popularised as a national slogan by <b>Madan Mohan Malaviya</b> (1918); now under the State Emblem"],
    ["Sarfaroshi ki tamanna","Written by <b>Bismil Azimabadi</b>; sung and made famous by <b>Ram Prasad Bismil</b>"]]},
  {k:"table", title:"Songs and lines — who wrote them", head:["Lines","Written by","Note"], rows: P7S.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"World quotes", head:["Quote","Who","Note"], rows: P7W.map(r => [r[0], r[1], r[2]])},
  {k:"link", h:"The core freedom-struggle slogans are also listed in <a href=\"study-world-history.html?lesson=L30\">World History, L30</a> and <a href=\"study-history-modern.html\">Modern India</a> (L23–L24); the national song and anthem in <a href=\"study-firsts-symbols.html?lesson=F1\">Firsts &amp; National Symbols, F1</a>."},
  {k:"trick", h:"<b>The growing slogan</b>: Jawan + Kisan (<b>S</b>hastri, 19<b>65</b>) → + Vigyan (<b>V</b>ajpayee, 19<b>98</b>) → + Anusandhan (<b>M</b>odi, 20<b>19</b>) — <span class=\"mn\">S-V-M</span>, soldier, science, mission."},
  {k:"trap", h:"<b>Inquilab Zindabad</b>: coined by Hasrat Mohani, popularised by Bhagat Singh. <b>Jai Hind</b>: coined by Abid Hasan, popularised by Bose. <b>Saare Jahan Se Achha</b> was written by <b>Iqbal</b>, but in 1984 it was <b>Rakesh Sharma</b> who quoted it from space. <b>Singhasan khali karo</b> is Dinkar's poem, recited by J. P."}
], sum:[
  "Swaraj is my birthright — Tilak; Do or Die — Gandhi (8 August 1942, Gowalia Tank); Give me blood… and Dilli Chalo — Bose.",
  "Jai Jawan Jai Kisan — Shastri (1965); Jai Vigyan — Vajpayee (1998); Jai Anusandhan — Modi (2019).",
  "Garibi Hatao — Indira Gandhi (1971); Total Revolution — J. P. Narayan (1974); Indira is India — D. K. Barooah.",
  "Inquilab Zindabad — coined by Hasrat Mohani; Jai Hind — Abid Hasan; Quit India and Simon Go Back — Yusuf Meherally.",
  "Satyameva Jayate — Mundaka Upanishad, popularised by Malaviya; Saare Jahan Se Achha — Iqbal; Ae Mere Watan Ke Logon — Kavi Pradeep.",
  "World: I have a dream — MLK; Veni vidi vici — Caesar; Workers of the world, unite — Marx and Engels; I think, therefore I am — Descartes."
]},

{id:"P8", heat:2, title:"Samadhis, memorials and statues", hi:"समाधियाँ, स्मारक और प्रतिमाएँ", blocks:[
  {k:"hot", h:"Most asked: <b>Raj Ghat</b> (Gandhi), <b>Shanti Van</b> (Nehru), <b>Vijay Ghat</b> (Shastri), <b>Shakti Sthal</b> (Indira), <b>Veer Bhumi</b> (Rajiv), <b>Kisan Ghat</b> (Charan Singh), <b>Samata Sthal</b> (Jagjivan Ram), <b>Sadaiv Atal</b> (Vajpayee) and <b>Chaitya Bhoomi</b> (Ambedkar); and the big statues — Unity, Equality, Social Justice, Prosperity."},
  {k:"story", h:"<p>Along the Yamuna in Delhi runs a green belt of memorials. It begins at <b>Raj Ghat</b>, where Gandhi was cremated in 1948. Nehru's <b>Shanti Van</b> (forest of peace), Shastri's <b>Vijay Ghat</b> (victory), Indira's <b>Shakti Sthal</b> (strength) and Rajiv's <b>Veer Bhumi</b> (the brave) follow. Each name says something about the leader: <b>Kisan Ghat</b> for the farmers' leader Charan Singh, <b>Samata Sthal</b> (equality) for Jagjivan Ram, <b>Sangharsh Sthal</b> (struggle) for Devi Lal.</p><p>Land by the river ran short, so in 2013 the government decided that future leaders would share one complex, the <b>Rashtriya Smriti Sthal</b>. Vajpayee's <b>Sadaiv Atal</b> (2018) stands there. In January 2025 a plot there was set aside for <b>Pranab Mukherjee</b>, and in March 2025 the family of <b>Manmohan Singh</b> — cremated at Nigambodh Ghat in December 2024 — accepted a plot beside it.</p>",
    key:"Raj Ghat–Gandhi · Shanti Van–Nehru · Vijay Ghat–Shastri · Shakti Sthal–Indira · Veer Bhumi–Rajiv · Kisan Ghat–Charan Singh · Sadaiv Atal–Vajpayee."},
  {k:"table", title:"Samadhis and memorial ghats", head:["Samadhi","Leader","Note"], rows: P8S.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Other memorials and places of memory (as of October 2026)", rows:[
    ["Rashtriya Smriti Sthal, Delhi","Common memorial complex near Raj Ghat (decided 2013). A site for <b>Pranab Mukherjee</b> was earmarked in January 2025 and its building cleared in July 2026; <b>Manmohan Singh</b>'s family accepted a plot in March 2025"],
    ["Gandhi Smriti (Birla House), Delhi","Where Gandhi was shot on 30 January 1948"],
    ["Aga Khan Palace, Pune","Samadhis of <b>Kasturba Gandhi</b> and <b>Mahadev Desai</b>, who died there in detention (1942–44)"],
    ["Hussainiwala, Ferozepur (Punjab)","National Martyrs Memorial where <b>Bhagat Singh, Rajguru and Sukhdev</b> were cremated (1931)"],
    ["Chandrashekhar Azad Park, Prayagraj","The old Alfred Park, where <b>Azad</b> died fighting (27 February 1931)"],
    ["Deekshabhoomi, Nagpur","Where <b>Ambedkar</b> took up Buddhism with his followers (14 October 1956)"],
    ["26 Alipur Road, Delhi","Where Ambedkar died; now the <b>Dr Ambedkar National Memorial</b> (2018)"],
    ["Pradhanmantri Sangrahalaya, Teen Murti","Museum of all of India's Prime Ministers, opened 2022 in Nehru's old home"],
    ["Marina Beach, Chennai","Memorials of <b>C. N. Annadurai, M. G. Ramachandran, J. Jayalalithaa and M. Karunanidhi</b>"],
    ["Vivekananda Rock Memorial, Kanyakumari","Where Vivekananda meditated in December 1892; built 1970"],
    ["Rashtra Prerna Sthal, Lucknow","Opened on 25 December 2025 with 65-ft statues of <b>Syama Prasad Mookerjee, Deendayal Upadhyaya and Atal Bihari Vajpayee</b>"]]},
  {k:"table", title:"Statues and whom they honour", head:["Statue","Honours","Note"], rows: P8T.map(r => [r[0], r[1], r[2]])},
  {k:"link", h:"Monuments and their builders (India Gate, Victoria Memorial) are in <a href=\"study-heritage-monuments.html?lesson=H7\">Heritage &amp; Monuments, H7</a>; the days that honour these leaders (Parakram Diwas, National Unity Day) in <a href=\"study-important-days.html?lesson=D1\">Important Days, D1</a>."},
  {k:"trick", h:"<b>Read the meaning</b>: Shanti (peace) — Nehru the peacemaker; Vijay (victory) — Shastri of 1965; Shakti (strength) — Indira; Veer (brave) — Rajiv; Kisan — Charan Singh; Samata (equality) — Jagjivan Ram; Sangharsh (struggle) — Devi Lal; Ekta (unity) — Zail Singh; Karma (duty) — Shankar Dayal Sharma; Uday (dawn) — K. R. Narayanan."},
  {k:"trap", h:"<b>Chaitya Bhoomi</b> (Mumbai) is Ambedkar's samadhi; <b>Deekshabhoomi</b> (Nagpur) is where he became a Buddhist. <b>Abhay Ghat</b> and <b>Narayan Ghat</b> are in <b>Ahmedabad</b>, not Delhi. <b>Ekta Sthal</b> (Zail Singh) is not the <b>Statue of Unity</b> (Patel) or <b>Ekta Nagar</b>, its town."}
], sum:[
  "Raj Ghat — Gandhi; Shanti Van — Nehru; Vijay Ghat — Shastri; Shakti Sthal — Indira; Veer Bhumi — Rajiv.",
  "Kisan Ghat — Charan Singh; Samata Sthal — Jagjivan Ram; Sangharsh Sthal — Devi Lal; Ekta Sthal — Zail Singh.",
  "Karma Bhumi — Shankar Dayal Sharma; Uday Bhumi — K. R. Narayanan; Jannayak Sthal — Chandra Shekhar; Smriti Sthal — Gujral.",
  "Sadaiv Atal — Vajpayee (2018); Abhay Ghat — Morarji Desai and Narayan Ghat — Nanda (both Ahmedabad); Mahaprayan Ghat — Rajendra Prasad.",
  "Chaitya Bhoomi — Ambedkar (Mumbai); Gyan Bhumi — Narasimha Rao (Hyderabad). Rashtriya Smriti Sthal: plots for Pranab Mukherjee and Manmohan Singh.",
  "Statues: Unity — Patel; Equality — Ramanuja; Social Justice — Ambedkar; Prosperity — Kempegowda; Rashtra Prerna Sthal, Lucknow (2025)."
]},

{id:"P9", heat:2, title:"Birthplaces, places and pen names", hi:"जन्मस्थान, जुड़े स्थान और उपनाम", blocks:[
  {k:"hot", h:"Asked: where leaders were <b>born</b> (Gandhi — Porbandar, Bose — Cuttack, Ambedkar — Mhow, Patel — Nadiad, Shastri — Mughalsarai), the place tied to a person (<b>Sabarmati, Santiniketan, Belur Math, Anand Bhavan</b>), and writers' <b>pen names</b>."},
  {k:"story", h:"<p>Every great life has a map. Gandhi was born at <b>Porbandar</b> on the Gujarat coast, set out on the Dandi March from his <b>Sabarmati Ashram</b>, and spent his last years at <b>Sevagram</b>. Tagore was born in the family mansion at <b>Jorasanko</b> in Kolkata and built his school at <b>Santiniketan</b>. Bose was born at <b>Cuttack</b> and escaped from his house on Elgin Road, now <b>Netaji Bhawan</b>.</p><p>Writers often hid behind a <b>pen name</b>. Tagore wrote his first songs as <b>Bhanusimha</b>; Harivansh Rai Srivastava kept his childhood name <b>Bachchan</b>; Eric Blair became <b>George Orwell</b> — and was born in India, at Motihari.</p>",
    key:"Born: Gandhi–Porbandar, Bose–Cuttack, Patel–Nadiad, Ambedkar–Mhow, Shastri–Mughalsarai, Kalam–Rameswaram."},
  {k:"table", title:"Where they were born", head:["Person","Born at","Note"], rows: P9B.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Places and the people linked with them", head:["Place","Person","Why"], rows: P9L.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Gandhi's map", rows:[
    ["Phoenix Settlement and Tolstoy Farm","His two settlements in South Africa (1904, 1910)"],
    ["Kochrab and Sabarmati, Ahmedabad","His first ashrams in India (1915, 1917)"],
    ["Sevagram, Wardha","His ashram from 1936"],
    ["Champaran, Bihar","His first satyagraha in India (1917)"],
    ["Aga Khan Palace, Pune","Detained there in 1942–44"],
    ["Birla House, Delhi","Killed there on 30 January 1948 — now Gandhi Smriti"]]},
  {k:"table", title:"More pen names", head:["Pen name","Real name","Note"], rows: P9P.map(r => [r[0], r[1], r[2]])},
  {k:"link", h:"The pen names asked most — <b>Premchand</b> (Dhanpat Rai Srivastava), <b>Nirala</b> (Suryakant Tripathi), <b>Dinkar</b> (Ramdhari Singh), <b>Gulzar</b> (Sampooran Singh Kalra), <b>Agyeya</b>, <b>Firaq Gorakhpuri</b>, <b>Sahir</b> and <b>Kaifi Azmi</b> — are in <a href=\"study-books-authors.html?lesson=B4\">Books &amp; Authors, B4</a>, with their books."},
  {k:"trick", h:"<b>Gujarat gave three</b>: Gandhi (Porbandar), Patel (Nadiad), Dayananda (Tankara). <b>2 October twins</b>: Gandhi (1869) and Shastri (1904). <b>Orwell was Indian-born</b> — Motihari, Bihar."},
  {k:"trap", h:"Gandhi was born at <b>Porbandar</b> but began the Dandi March from <b>Sabarmati</b>. Bose was born at <b>Cuttack</b> (Odisha), not Kolkata. Ambedkar was born at <b>Mhow</b> (Madhya Pradesh), not in Maharashtra. Bhagat Singh's birthplace, <b>Banga</b>, is now in <b>Pakistan</b>."}
], sum:[
  "Born: Gandhi — Porbandar; Tagore — Jorasanko, Kolkata; Bose — Cuttack; Patel — Nadiad; Ambedkar — Mhow.",
  "Born: Bhagat Singh — Banga (Pakistan); Lakshmibai — Varanasi; Shastri — Mughalsarai; Kalam — Rameswaram; Rajendra Prasad — Ziradei.",
  "Born: Vajpayee — Gwalior; Dayananda — Tankara; Ram Mohan Roy — Radhanagar; Tilak — Ratnagiri; Mother Teresa — Skopje.",
  "Places: Sabarmati — Gandhi; Santiniketan — Tagore; Belur Math — Vivekananda; Dakshineswar — Ramakrishna; Puducherry — Aurobindo.",
  "Pen names: Bachchan — Harivansh Rai Srivastava; Bhanusimha — Tagore; Kusumagraj — V. V. Shirwadkar; Kalki — R. Krishnamurthy.",
  "World pen names: Mark Twain — Samuel Clemens; George Orwell — Eric Blair; George Eliot — Mary Ann Evans; Voltaire — François-Marie Arouet."
]}
);

pairQs("P7", P7I, { q: t => `'${t}' — whose words are these?`, e: r => `${r[1].replace(/\.$/, "")}. ${r[2]}` });
pairQs("P7", P7S, { q: t => `Who wrote the lines '${t}'?`, e: r => `${r[1].replace(/\.$/, "")}. ${r[2]}` });
pairQs("P7", P7W, { q: t => `Who said: '${t}'?`, e: r => `${r[1].replace(/\.$/, "")}. ${r[2]}` });
pairQs("P8", P8S, { q: t => `${t} is the memorial of which leader?`, e: r => `${r[0]} — ${r[1]}. ${r[2]}` });
pairQs("P8", P8T, { q: t => `Whom does the ${t.replace(/^Statue under/, 'statue under')} honour?`, e: r => `${r[0]} — ${r[1]}. ${r[2]}` });
pairQs("P9", P9B, { q: t => `Where was ${t} born?`, e: r => `${r[0]} — born at ${r[1]}. ${r[2]}` });
pairQs("P9", P9L, { q: t => `Which personality is most closely linked with ${t}?`, e: r => `${r[0]} — ${r[1]}. ${r[2]}` });
pairQs("P9", P9P, { q: t => `The writer known as '${t}' was born as:`, e: r => `'${r[0]}' was the pen name of ${r[1]}. ${r[2]}` });

QB.push(
["P7","Who coined the slogan 'Inquilab Zindabad'?",["Hasrat Mohani","Bhagat Singh","Muhammad Iqbal","Ram Prasad Bismil"],"The Urdu poet coined it in 1921; Bhagat Singh made it famous.",""],
["P7","The greeting 'Jai Hind' was coined by:",["Abid Hasan Safrani","Subhas Chandra Bose","Yusuf Meherally","Mohan Singh"],"Bose's aide Abid Hasan suggested it; Bose made it the INA's greeting.",""],
["P7","Who popularised 'Satyameva Jayate' as a national slogan in 1918?",["Madan Mohan Malaviya","Bal Gangadhar Tilak","Mahatma Gandhi","Rajendra Prasad"],"The words come from the Mundaka Upanishad; Malaviya made them a slogan of the national movement.",""],
["P7","Put the parts of the slogan in the order they were added: Jai Vigyan, Jai Jawan Jai Kisan, Jai Anusandhan.",["Jai Jawan Jai Kisan → Jai Vigyan → Jai Anusandhan","Jai Vigyan → Jai Jawan Jai Kisan → Jai Anusandhan","Jai Jawan Jai Kisan → Jai Anusandhan → Jai Vigyan","Jai Anusandhan → Jai Vigyan → Jai Jawan Jai Kisan"],"Shastri (1965), Vajpayee (1998), Modi (2019).",""],
["P7","When Indira Gandhi asked how India looked from space, Rakesh Sharma (1984) replied with a line written by:",["Muhammad Iqbal","Rabindranath Tagore","Kavi Pradeep","Bankim Chandra Chatterjee"],"He answered 'Saare Jahan Se Achha', from Iqbal's Tarana-e-Hind.",""],
["P7","Gandhi gave the call 'Do or Die' at:",["Gowalia Tank, Bombay","Sabarmati Ashram","Lahore","Wardha"],"On 8 August 1942, at the AICC session that passed the Quit India resolution.",""],
["P8","Which pair of samadhi and leader is correct?",["Vijay Ghat — Lal Bahadur Shastri","Shanti Van — Indira Gandhi","Veer Bhumi — Jawaharlal Nehru","Shakti Sthal — Rajiv Gandhi"],"Shanti Van is Nehru's, Veer Bhumi Rajiv's and Shakti Sthal Indira's.",""],
["P8","Which is the samadhi of Jagjivan Ram?",["Samata Sthal","Sangharsh Sthal","Kisan Ghat","Ekta Sthal"],"'Place of equality'. Sangharsh Sthal is Devi Lal's, Kisan Ghat Charan Singh's and Ekta Sthal Zail Singh's.",""],
["P8","Sadaiv Atal, Vajpayee's memorial, stands in which complex?",["Rashtriya Smriti Sthal","Shanti Van","Teen Murti","Rashtra Prerna Sthal"],"It opened there on 25 December 2018. The Rashtra Prerna Sthal (2025) is in Lucknow.",""],
["P8","In March 2025 the family of which former Prime Minister accepted a memorial plot at the Rashtriya Smriti Sthal?",["Manmohan Singh","I. K. Gujral","P. V. Narasimha Rao","H. D. Deve Gowda"],"Manmohan Singh died on 26 December 2024 and was cremated at Nigambodh Ghat.",""],
["P8","The Rashtra Prerna Sthal opened in Lucknow on 25 December 2025 has statues of Atal Bihari Vajpayee, Deendayal Upadhyaya and:",["Syama Prasad Mookerjee","Vallabhbhai Patel","Ram Manohar Lohia","Charan Singh"],"The three 65-ft statues were unveiled on Vajpayee's birth anniversary.",""],
["P8","Ambedkar embraced Buddhism in 1956 at:",["Deekshabhoomi, Nagpur","Chaitya Bhoomi, Mumbai","Mhow","Sarnath"],"Chaitya Bhoomi in Mumbai is his samadhi; Mhow his birthplace.",""],
["P8","The samadhis of Kasturba Gandhi and Mahadev Desai are at:",["Aga Khan Palace, Pune","Sabarmati Ashram","Sevagram","Raj Ghat"],"Both died there while detained during the Quit India movement.",""],
["P9","Which leader was born in Odisha?",["Subhas Chandra Bose","Rabindranath Tagore","Aurobindo Ghosh","Chittaranjan Das"],"Bose was born at Cuttack in 1897; the other three were born in Calcutta.",""],
["P9","Which two leaders share 2 October as their birthday?",["Mahatma Gandhi and Lal Bahadur Shastri","Mahatma Gandhi and Vallabhbhai Patel","Lal Bahadur Shastri and Jawaharlal Nehru","Vallabhbhai Patel and Jawaharlal Nehru"],"Gandhi in 1869 and Shastri in 1904. Patel's birthday is 31 October and Nehru's 14 November.",""],
["P9","George Orwell, whose real name was Eric Arthur Blair, was born in:",["Motihari, Bihar","Shimla","Darjeeling","Rangoon"],"He was born there in 1903, where his father worked for the opium department.",""]
);

LASTMOMENT.push(
{t:"Slogans", era:["pp"], rows:[["Swaraj birthright","Tilak"],["Do or Die","Gandhi, 1942"],["Give me blood","Bose"],["Jai Jawan Jai Kisan","Shastri"],["+ Jai Vigyan","Vajpayee"],["+ Jai Anusandhan","Modi"],["Garibi Hatao","Indira"],["Inquilab Zindabad (coined)","Hasrat Mohani"]]},
{t:"Samadhis", era:["pp"], rows:[["Raj Ghat","Gandhi"],["Shanti Van","Nehru"],["Vijay Ghat","Shastri"],["Shakti Sthal","Indira"],["Veer Bhumi","Rajiv"],["Kisan Ghat","Charan Singh"],["Samata Sthal","Jagjivan Ram"],["Sadaiv Atal","Vajpayee"],["Chaitya Bhoomi","Ambedkar"]]},
{t:"Birthplaces", era:["pp"], rows:[["Gandhi","Porbandar"],["Bose","Cuttack"],["Patel","Nadiad"],["Ambedkar","Mhow"],["Shastri","Mughalsarai"],["Kalam","Rameswaram"],["Vajpayee","Gwalior"]]}
);
TILES.push(["8 Aug 1942","Do or Die","pp"],["25 Dec 2018","Sadaiv Atal opens","pp"],["25 Dec 2025","Rashtra Prerna Sthal","pp"],["182 m","Statue of Unity","pp"]);

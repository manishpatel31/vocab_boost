/* Part 3 · P10 real names and mixed revision: names people were born with, look-alike titles side by side, and mixed questions
   across the whole app. Pope Leo XIV's election (May 2025) is from before October 2026. */

const P10R = [
  ["Swami Vivekananda","Narendranath Datta","Disciple of Ramakrishna; spoke at Chicago in 1893.",""],
  ["Dayananda Saraswati","Mool Shankar","Founded the Arya Samaj (1875).",""],
  ["Ramakrishna Paramahansa","Gadadhar Chattopadhyay","The saint of Dakshineswar.",""],
  ["Swami Shraddhanand","Munshi Ram","Founded the Gurukul at Kangri, Haridwar (1902).",""],
  ["Sister Nivedita","Margaret Elizabeth Noble","Irish disciple of Vivekananda.",""],
  ["Mother Teresa","Anjezë Gonxhe Bojaxhiu","Founded the Missionaries of Charity (1950).",""],
  ["Rani Lakshmibai","Manikarnika Tambe","Called 'Manu' as a child.",""],
  ["Mahavira","Vardhamana","The 24th Jain Tirthankara.",""],
  ["Dilip Kumar","Muhammad Yusuf Khan","Born in Peshawar (1922).",""],
  ["Madhubala","Mumtaz Jehan Dehlavi","Star of Mughal-e-Azam.",""],
  ["Rajinikanth","Shivaji Rao Gaikwad","Was a bus conductor in Bengaluru before films.",""],
  ["Kishore Kumar","Abhas Kumar Ganguly","Younger brother of Ashok Kumar.",""],
  ["Lenin","Vladimir Ilyich Ulyanov","Led the Bolshevik Revolution (1917).",""],
  ["Pope Leo XIV","Robert Francis Prevost","Elected on 8 May 2025 — the first pope from the United States.",""]
];

LESSONS.push(
{id:"P10", heat:2, title:"Real names and mixed revision", hi:"मूल नाम और मिश्रित पुनरावृत्ति", blocks:[
  {k:"hot", h:"Exams mix this whole topic into 'which pair is correctly matched' and 'which is NOT' questions. Most wrong answers come from <b>look-alikes</b> — Lokmanya and Loknayak, the two Nightingales, Chaitya Bhoomi and Deekshabhoomi. This lesson sets them side by side and adds the <b>real names</b> behind famous names."},
  {k:"story", h:"<p>Revise this app in three sweeps. First the <b>titles</b>: say each leader's title and who gave it — Tagore's 'Mahatma', Bose's 'Father of the Nation', Gandhi's 'Gurudev', Bardoli's 'Sardar'. Then the <b>words</b>: each slogan with its speaker, and each coined slogan with the person who made it famous. Last the <b>places</b>: walk along the Yamuna from Raj Ghat to Sadaiv Atal, then out to Porbandar, Cuttack, Mhow and Mumbai.</p><p>Many famous people were born with other names. Narendranath Datta became <b>Swami Vivekananda</b>, Mool Shankar became <b>Dayananda Saraswati</b>, Margaret Noble became <b>Sister Nivedita</b>, and Yusuf Khan became <b>Dilip Kumar</b>. Learn them in pairs, the way the Lab plays them.</p>",
    key:"Narendranath — Vivekananda; Mool Shankar — Dayananda; Gadadhar — Ramakrishna; Margaret Noble — Nivedita; Yusuf Khan — Dilip Kumar."},
  {k:"table", title:"Born with another name", head:["Known as","Born as","Note"], rows: P10R.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Look-alikes side by side", head:["This","is not this","Remember"], rows:[
    ["Lokmanya — Tilak","Loknayak — J. P. Narayan","Accepted by the people vs leader of the people."],
    ["Deshbandhu — C. R. Das","Deenbandhu — C. F. Andrews (also Sir Chhotu Ram)","Friend of the country vs friend of the poor."],
    ["Nightingale of India — Sarojini Naidu (poetry)","Nightingale of India — Lata Mangeshkar (music)","Read the subject of the question."],
    ["Nightingale of India","Lady with the Lamp — Florence Nightingale","The surname is the trap."],
    ["Little Master — Sunil Gavaskar (first)","Master Blaster — Sachin Tendulkar","Tendulkar was later also called Little Master."],
    ["Iron Man of India — Vallabhbhai Patel","Iron Lady of India — Indira Gandhi; Iron Lady — Margaret Thatcher","Man, Lady, Lady of Manipur (Irom Sharmila)."],
    ["Mahatma — Gandhi (from Tagore)","Mahatma — Jyotiba Phule (1888)","Phule's title came first."],
    ["Punjab Kesari — Lala Lajpat Rai","Sher-e-Punjab — Maharaja Ranjit Singh (also Lajpat Rai)","Kesari and Sher both mean lion."],
    ["Rashtrakavi — Maithili Sharan Gupt (Gandhi's name)","Dinkar — also called a national poet","The exam answer for Gandhi's Rashtrakavi is Gupt."],
    ["Chandra Shekhar Azad — revolutionary","Maulana Abul Kalam Azad — pen name 'Azad'","Alfred Park, 1931 vs first Education Minister."],
    ["Chaitya Bhoomi, Mumbai — Ambedkar's samadhi","Deekshabhoomi, Nagpur — his conversion (1956)","Samadhi vs diksha."],
    ["Ekta Sthal — Zail Singh's samadhi (Delhi)","Statue of Unity — Patel (Ekta Nagar, Gujarat)","Both mean unity."],
    ["Rashtriya Smriti Sthal — Delhi","Rashtra Prerna Sthal — Lucknow (2025)","Samadhi complex vs statue park."],
    ["Tiger of Madras — Viswanathan Anand","Tiger Pataudi — cricket; Tiger of Mysore — Tipu Sultan","Chess, cricket, history."],
    ["Flying Sikh — Milkha Singh","Flying Finn — Paavo Nurmi","India vs Finland."]]},
  {k:"trick", h:"<b>Chain the facts</b>: born → title → memorial. Shastri: Mughalsarai → Jai Jawan Jai Kisan → Vijay Ghat. Vajpayee: Gwalior → Jai Vigyan → Sadaiv Atal. Ambedkar: Mhow → Babasaheb → Chaitya Bhoomi. Patel: Nadiad → Sardar, Iron Man → Statue of Unity."},
  {k:"trap", h:"<b>Coined vs made famous</b> is the commonest double-answer trap: Inquilab Zindabad (Hasrat Mohani / Bhagat Singh), Jai Hind (Abid Hasan / Bose), Quit India (Yusuf Meherally / Gandhi), Sarfaroshi (Bismil Azimabadi / Ram Prasad Bismil). Read whether the question says <b>coined</b>, <b>wrote</b>, <b>gave</b> or <b>is associated with</b>."}
], sum:[
  "Born as: Vivekananda — Narendranath Datta; Dayananda — Mool Shankar; Ramakrishna — Gadadhar Chattopadhyay; Nivedita — Margaret Noble.",
  "Born as: Mother Teresa — Anjezë Gonxhe Bojaxhiu; Lakshmibai — Manikarnika; Mahavira — Vardhamana; Pope Leo XIV — Robert Francis Prevost.",
  "Film: Dilip Kumar — Yusuf Khan; Madhubala — Mumtaz Jehan; Rajinikanth — Shivaji Rao Gaikwad; Kishore Kumar — Abhas Kumar Ganguly.",
  "Look-alikes: Lokmanya–Tilak vs Loknayak–JP; Deshbandhu–C. R. Das vs Deenbandhu–Andrews; Chaitya Bhoomi vs Deekshabhoomi.",
  "Chains: Shastri — Mughalsarai, Jai Jawan Jai Kisan, Vijay Ghat; Vajpayee — Gwalior, Jai Vigyan, Sadaiv Atal."
]}
);

pairQs("P10", P10R, { q: t => `What was the original name of ${t}?`, e: r => `${r[0]} was born ${r[1]}. ${r[2]}` });

QB.push(
["P10","'Lokmanya' and 'Loknayak' are the titles of, respectively:",["Bal Gangadhar Tilak and Jayaprakash Narayan","Jayaprakash Narayan and Bal Gangadhar Tilak","Bal Gangadhar Tilak and Lala Lajpat Rai","Lala Lajpat Rai and Jayaprakash Narayan"],"Lokmanya — accepted by the people (Tilak); Loknayak — leader of the people (JP).",""],
["P10","Which pair of title and leader is wrongly matched?",["Grand Old Man of India — Gopal Krishna Gokhale","Frontier Gandhi — Khan Abdul Ghaffar Khan","Kerala Gandhi — K. Kelappan","African Gandhi — Kenneth Kaunda"],"The Grand Old Man of India is Dadabhai Naoroji; Gokhale was Gandhi's political guru.",""],
["P10","'Sadaiv Atal' in Delhi and the Rashtra Prerna Sthal in Lucknow both honour:",["Atal Bihari Vajpayee","Charan Singh","Chandra Shekhar","Lal Bahadur Shastri"],"Sadaiv Atal is his samadhi (2018); the Lucknow complex (2025) has his statue with Mookerjee's and Upadhyaya's.",""],
["P10","The names 'Gurudev', 'Kaviguru' and 'Bhanusimha' all belong to:",["Rabindranath Tagore","Bankim Chandra Chatterjee","Sri Aurobindo","Swami Vivekananda"],"Two are titles; Bhanusimha was his teenage pen name.",""],
["P10","The leader born at Mughalsarai has his samadhi at:",["Vijay Ghat","Shanti Van","Kisan Ghat","Shakti Sthal"],"Lal Bahadur Shastri was born at Mughalsarai (1904); his samadhi is Vijay Ghat.",""],
["P10","Sheikh Mujibur Rahman, long called Bangladesh's Father of the Nation, is popularly known as:",["Bangabandhu","Quaid-e-Azam","Madiba","Mwalimu"],"Quaid-e-Azam is Jinnah, Madiba is Mandela and Mwalimu is Nyerere.",""],
["P10","Which nickname does NOT belong to a cricketer?",["Flying Finn","Hitman","Turbanator","Jumbo"],"The Flying Finn is the runner Paavo Nurmi.",""],
["P10","Which of these titles was given by Mahatma Gandhi?",["Gurudev, to Tagore","Mahatma, to Tagore","Father of the Nation, to Nehru","Father of Indian Unrest, to Tilak"],"Tagore gave 'Mahatma' to Gandhi; Bose called Gandhi Father of the Nation; Valentine Chirol named Tilak.",""],
["P10","Which of these is a pen name rather than a title of honour?",["Bhanusimha","Deshbandhu","Lokmanya","Netaji"],"Tagore signed his early songs Bhanusimha; the others were given by the people.",""],
["P10","Whose samadhi is in Mumbai?",["B. R. Ambedkar","Morarji Desai","Rajendra Prasad","P. V. Narasimha Rao"],"Chaitya Bhoomi, Dadar. Desai's is in Ahmedabad, Prasad's in Patna and Rao's in Hyderabad.",""],
["P10","Which 'Azad' died fighting the police at Prayagraj in 1931?",["Chandra Shekhar Azad","Maulana Abul Kalam Azad","Ashfaqulla Khan","Ram Prasad Bismil"],"At Alfred Park, now Chandrashekhar Azad Park. Abul Kalam Azad became India's first Education Minister.",""],
["P10","'Captain Cool' of Indian cricket and 'Captain Fantastic' of Indian football are:",["M. S. Dhoni and Sunil Chhetri","Rohit Sharma and Baichung Bhutia","Virat Kohli and Sunil Chhetri","M. S. Dhoni and Baichung Bhutia"],"Bhutia is the Sikkimese Sniper.",""],
["P10","Which statement is correct?",["Subhas Chandra Bose was first called 'Netaji' in Germany","Tagore was first called 'Gurudev' by Bose","Nehru first called Gandhi 'Father of the Nation'","The women of Champaran called Patel 'Sardar'"],"Netaji was first used in Germany in 1942; Gurudev came from Gandhi, Father of the Nation from Bose, Sardar from Bardoli.",""],
["P10","Which pair of slogan and leader is wrong?",["Garibi Hatao — Jawaharlal Nehru","Sampoorna Kranti — Jayaprakash Narayan","Dilli Chalo — Subhas Chandra Bose","Karo ya Maro — Mahatma Gandhi"],"Garibi Hatao was Indira Gandhi's slogan of 1971.",""],
["P10","Which of these memorials is NOT in Delhi?",["Abhay Ghat","Kisan Ghat","Samata Sthal","Uday Bhumi"],"Morarji Desai's Abhay Ghat is in Ahmedabad.",""],
["P10","Which 'Nightingale' is matched with the right field?",["Lata Mangeshkar — music","Sarojini Naidu — music","Florence Nightingale — poetry","Lata Mangeshkar — nursing"],"Lata (music) and Sarojini Naidu (poetry) are both Nightingales of India; Florence Nightingale was a nurse.",""],
["P10","The 'Iron Man of India' is honoured by which statue?",["Statue of Unity","Statue of Equality","Statue of Social Justice","Statue of Prosperity"],"Patel's 182-m statue at Ekta Nagar, Gujarat (2018).",""],
["P10","Who was born at Mhow and is remembered by the slogan 'Educate, agitate, organise'?",["B. R. Ambedkar","Jyotiba Phule","Sree Narayana Guru","Periyar"],"Ambedkar was born at Mhow (now Dr Ambedkar Nagar), Madhya Pradesh, in 1891.",""]
);

LASTMOMENT.push(
{t:"Born as", era:["pp"], rows:[["Vivekananda","Narendranath Datta"],["Dayananda","Mool Shankar"],["Ramakrishna","Gadadhar"],["Nivedita","Margaret Noble"],["Mother Teresa","Anjezë Bojaxhiu"],["Dilip Kumar","Yusuf Khan"],["Pope Leo XIV","Robert Prevost"]]}
);
TILES.push(["8 May 2025","Pope Leo XIV elected","pp"]);

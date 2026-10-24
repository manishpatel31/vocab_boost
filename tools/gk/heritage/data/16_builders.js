/* H7 — Monuments and their builders: who built what, and when. Many of these are not World Heritage sites. */
const H7A = [
  ["the Quwwat-ul-Islam Mosque, Delhi's first mosque","Qutb-ud-din Aibak","Delhi, 1190s; later enlarged by Iltutmish and Alauddin Khalji."],
  ["the Alai Darwaza","Alauddin Khalji","The southern gate of the Qutb complex, 1311."],
  ["Tughlaqabad Fort","Ghiyasuddin Tughlaq","Delhi, 1321 — the third city of Delhi."],
  ["Firoz Shah Kotla","Firoz Shah Tughlaq","Delhi, 1354; an Ashokan pillar brought from Topra stands on top."],
  ["the Purana Qila","Sher Shah Suri","Delhi, 1540s, on the site of Humayun's Dinpanah."],
  ["the Buland Darwaza","Akbar","Fatehpur Sikri, about 1575, after the conquest of Gujarat."],
  ["the tomb of Itimad-ud-Daulah","Nur Jahan","Agra, 1622–28, for her father Mirza Ghiyas Beg; the first Mughal tomb faced wholly in white marble."],
  ["the Jama Masjid of Delhi","Shah Jahan","1650–1656; one of the largest mosques in India."],
  ["the Moti Masjid in the Red Fort","Aurangzeb","Delhi, 1659–60, a small private mosque of white marble."],
  ["the Charminar","Muhammad Quli Qutb Shah","Hyderabad, 1591 — four minarets over a crossroads of the new city."],
  ["the Gol Gumbaz","Muhammad Adil Shah","Vijayapura (Bijapur), completed 1656; his own tomb, with a whispering gallery."],
  ["the Bara Imambara and the Rumi Darwaza","Asaf-ud-Daula","Lucknow, 1784, built partly as famine relief work."],
  ["the Jama Masjid of Ahmedabad","Ahmad Shah I","1424, by the founder of Ahmedabad."]
];
const H7B = [
  ["the Vijay Stambha at Chittorgarh","Rana Kumbha","1440s, to mark his victory over Mahmud Khalji of Malwa."],
  ["Mehrangarh Fort","Rao Jodha","Jodhpur, 1459 — he founded the city too."],
  ["Jaisalmer Fort (Sonar Qila)","Rawal Jaisal","1156, on Trikuta hill."],
  ["Amber Fort","Raja Man Singh I","Begun 1592, near Jaipur; enlarged by later rulers."],
  ["the Hawa Mahal","Sawai Pratap Singh","Jaipur, 1799; designed by Lal Chand Ustad."],
  ["the Jantar Mantar of Delhi","Sawai Jai Singh II","1724 — the first of his five observatories."],
  ["the City Palace of Udaipur","Maharana Udai Singh II","Begun 1559, when he founded Udaipur; added to by later Maharanas."],
  ["the Gateway of India","George Wittet","Mumbai, completed 1924, for the 1911 visit of King George V and Queen Mary."],
  ["India Gate","Edwin Lutyens","New Delhi, completed 1931 — the All India War Memorial."],
  ["the Victoria Memorial","William Emerson","Kolkata, 1906–1921, of Makrana marble."],
  ["the present Mysore Palace","Henry Irwin","Mysuru, completed 1912 for the Wodeyars, after a fire destroyed the old palace."],
  ["the Lotus Temple","Fariborz Sahba","Delhi, 1986 — a Bahá'í house of worship."],
  ["the new Parliament House","Bimal Patel","New Delhi, opened 28 May 2023 — a triangular building."],
  ["the Statue of Unity","Ram V. Sutar","Ekta Nagar (Kevadia), Gujarat, 2018 — Sardar Patel, 182 m tall."]
];

LESSONS.push(
{id:"H7", heat:3, title:"Monuments and their builders", hi:"स्मारक और उनके निर्माता", blocks:[
  {k:"hot", h:"The most repeated monument question of all: <b>“Who built …?”</b> — Charminar, Gol Gumbaz, Hawa Mahal, Buland Darwaza, Alai Darwaza, Jama Masjid, Itimad-ud-Daulah, Gateway of India, India Gate, Victoria Memorial. Most of these are <b>not</b> World Heritage sites, which is itself a common trap."},
  {k:"story", h:"<p>Think of the builders as a relay. The Delhi Sultans began it: Aibak's first mosque, Alauddin Khalji's gate, the Tughlaqs' forts. Sher Shah built the <b>Purana Qila</b> in the short gap of Humayun's exile. Then the Mughals took the baton — Akbar's <b>Buland Darwaza</b>, Nur Jahan's marble tomb for her father, Shah Jahan's <b>Jama Masjid</b>, Aurangzeb's small <b>Moti Masjid</b>.</p><p>In the Deccan the sultans built their own wonders: the Qutb Shahis' <b>Charminar</b> in Hyderabad and the Adil Shahis' <b>Gol Gumbaz</b> in Bijapur. Rajput kings built forts and palaces — Mehrangarh, Amber, the <b>Hawa Mahal</b>. The British added the <b>Gateway of India</b>, <b>India Gate</b> and the <b>Victoria Memorial</b>, and independent India the Lotus Temple, the Statue of Unity and a new Parliament.</p>", key:"Sultanate → Mughal → Deccan → Rajput → British → modern: learn each builder with his city."},
  {k:"table", title:"Sultanate, Mughal and Deccan monuments", head:["Monument","Built by","Place, date and note"], rows: H7A.map(r => ["<b>" + r[0].charAt(0).toUpperCase() + r[0].slice(1) + "</b>", r[1], r[2]])},
  {k:"table", title:"Rajput, colonial and modern monuments", head:["Monument","Built or designed by","Place, date and note"], rows: H7B.map(r => ["<b>" + r[0].charAt(0).toUpperCase() + r[0].slice(1) + "</b>", r[1], r[2]])},
  {k:"facts", title:"The stories behind them", rows:[
    ["Charminar (1591)","Built where the new city of Hyderabad was laid out; it is said to mark the end of a plague"],
    ["Gol Gumbaz","One of the largest domes in the world; a whisper on one side of its gallery is heard on the other"],
    ["Hawa Mahal","Five storeys and 953 small windows (jharokhas), so that royal women could watch the street unseen; shaped like Krishna's crown"],
    ["Gateway of India","Basalt arch in Indo-Saracenic style; the last British troops left India through it in 1948"],
    ["India Gate","Remembers soldiers of the British Indian Army who died in the First World War and the Third Anglo-Afghan War; the Amar Jawan Jyoti (1972) flame was merged with the National War Memorial's in 2022; Rajpath became <b>Kartavya Path</b> in 2022"],
    ["Victoria Memorial","Lord <b>Curzon's</b> idea, after Queen Victoria's death (1901); opened in 1921"],
    ["New Delhi","Planned by <b>Edwin Lutyens</b> and <b>Herbert Baker</b>; Lutyens designed Rashtrapati Bhavan, Baker the North and South Blocks; the old Parliament House (Baker, 1927) is now <b>Samvidhan Sadan</b>"]]},
  {k:"trick", h:"<b>Deccan pair</b> — “<b>C</b>harminar = <b>Q</b>uli (Qutb Shahi, Hyderabad); <b>G</b>ol Gumbaz = <b>A</b>dil (Adil Shahi, Bijapur)”. <b>Jaipur trio</b> — “Jai Singh II made the city and the Jantar; Pratap Singh made the Hawa Mahal”."},
  {k:"trap", h:"<b>Itimad-ud-Daulah</b> was built by <b>Nur Jahan</b>, not Jahangir. <b>Akbar's tomb</b> at Sikandra was begun by Akbar but <b>completed by Jahangir</b>. The <b>Gateway of India</b> is in Mumbai (George Wittet); <b>India Gate</b> is in Delhi (Lutyens). The Hawa Mahal was built by <b>Sawai Pratap Singh</b>, not Jai Singh II. None of Charminar, Gol Gumbaz, Hawa Mahal, India Gate, the Gateway or the Victoria Memorial is a World Heritage site."}
], sum:["Quwwat-ul-Islam — Aibak; Alai Darwaza — Alauddin Khalji; Tughlaqabad — Ghiyasuddin Tughlaq; Purana Qila — Sher Shah Suri.","Buland Darwaza — Akbar; Itimad-ud-Daulah — Nur Jahan; Jama Masjid, Delhi — Shah Jahan; Moti Masjid, Red Fort — Aurangzeb.","Charminar (1591) — Muhammad Quli Qutb Shah; Gol Gumbaz — Muhammad Adil Shah; Bara Imambara — Asaf-ud-Daula.","Hawa Mahal (1799) — Sawai Pratap Singh; Jantar Mantar — Sawai Jai Singh II; Mehrangarh — Rao Jodha; Vijay Stambha — Rana Kumbha.","Gateway of India — George Wittet; India Gate — Lutyens; Victoria Memorial — William Emerson; Mysore Palace — Henry Irwin.","Lotus Temple — Fariborz Sahba; new Parliament — Bimal Patel; Statue of Unity — Ram V. Sutar."]}
);

pairQs("H7", H7A, { q: t => `Who built ${t}?`, e: r => `${r[1]} built ${r[0]}. ${r[2]}` });
pairQs("H7", H7B, { q: t => `Who built or designed ${t}?`, e: r => `${r[0].charAt(0).toUpperCase() + r[0].slice(1)} — ${r[1]}. ${r[2]}` });

QB.push(
["H7","Akbar's tomb at Sikandra, begun by Akbar himself, was completed by:",["Jahangir","Shah Jahan","Humayun","Aurangzeb"],"Jahangir completed it in 1613 and changed the design of its upper storeys.",""],
["H7","Bibi ka Maqbara at Aurangabad is the tomb of:",["Dilras Banu Begum","Mumtaz Mahal","Nur Jahan","Jahanara Begum"],"It holds Dilras Banu Begum, Aurangzeb's chief wife; raised in the 1660s, it is often called the 'Taj of the Deccan'.",""],
["H7","Who designed Rashtrapati Bhavan (the former Viceroy's House)?",["Edwin Lutyens","Herbert Baker","Robert Tor Russell","Charles Correa"],"Lutyens designed it; Herbert Baker designed the North and South Blocks beside it.",""],
["H7","India Gate was built as a memorial to Indian soldiers who died in:",["The First World War and the Third Anglo-Afghan War","The Revolt of 1857","The Second World War","The 1971 war"],"Their names are carved on its walls; the Amar Jawan Jyoti for 1971 was added later, in 1972.",""],
["H7","The Gateway of India was built to remember the visit of:",["King George V and Queen Mary (1911)","Queen Victoria (1877)","the Prince of Wales (1921)","Lord Curzon (1905)"],"They landed at Bombay in December 1911 on their way to the Delhi Durbar.",""],
["H7","The Victoria Memorial in Kolkata was the idea of which Viceroy?",["Lord Curzon","Lord Minto","Lord Dalhousie","Lord Canning"],"Curzon proposed it after Queen Victoria died in 1901.",""],
["H7","The Gol Gumbaz is famous for its:",["Whispering gallery","Hanging pillar","Musical pillars","Floating bricks"],"A whisper in its gallery can be heard across the dome. The hanging pillar is at Lepakshi, the musical pillars at Hampi.",""],
["H7","Who designed the Hawa Mahal of Jaipur?",["Lal Chand Ustad","Vidyadhar Bhattacharya","Mirak Mirza Ghiyas","George Wittet"],"Lal Chand Ustad designed it for Sawai Pratap Singh in 1799.",""],
["H7","About how many small windows (jharokhas) does the Hawa Mahal have?",["953","365","108","1,444"],"953 windows let cool air through — hence 'Palace of Winds'. 1,444 is the number of pillars at Ranakpur.",""],
["H7","In 2023 the old Parliament House of New Delhi was renamed:",["Samvidhan Sadan","Kartavya Bhavan","Bharat Mandapam","Yashobhoomi"],"It was renamed Samvidhan Sadan when Parliament moved to the new building in September 2023.",""],
["H7","Rajpath in New Delhi, from Rashtrapati Bhavan to India Gate, was renamed in 2022 as:",["Kartavya Path","Janpath","Rajmarg","Seva Path"],"It was renamed Kartavya Path in September 2022.",""],
["H7","The Statue of Unity at Ekta Nagar, Gujarat, is a statue of:",["Sardar Vallabhbhai Patel","Mahatma Gandhi","B. R. Ambedkar","Subhas Chandra Bose"],"It is 182 m tall and was unveiled on 31 October 2018, Patel's birth anniversary.",""],
["H7","The Ashokan pillar on top of Firoz Shah Kotla was brought to Delhi from:",["Topra","Meerut","Sarnath","Kausambi"],"Firoz Shah Tughlaq had it moved from Topra (now in Haryana); a second pillar, from Meerut, stands on the Delhi Ridge.",""]
);
LASTMOMENT.push({t:"Who built it", era:["hm"], rows:[["Charminar","Muhammad Quli Qutb Shah, 1591"],["Gol Gumbaz","Muhammad Adil Shah"],["Hawa Mahal","Sawai Pratap Singh, 1799"],["Buland Darwaza","Akbar"],["Itimad-ud-Daulah","Nur Jahan"],["Alai Darwaza","Alauddin Khalji"],["Gateway of India","George Wittet"],["India Gate","Edwin Lutyens"],["Victoria Memorial","William Emerson"]]});

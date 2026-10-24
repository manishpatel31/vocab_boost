/* H4 — Cultural sites III: Sultanate and Mughal monuments, the forts of Rajasthan and the Marathas, Champaner and the Moidams. */
const H4S = [
  ["Agra Fort","Uttar Pradesh","1983","Akbar rebuilt it in red sandstone from 1565; Jahangir and Shah Jahan added palaces."],
  ["Taj Mahal","Uttar Pradesh","1983","Shah Jahan's tomb for Mumtaz Mahal on the Yamuna, built 1632–1653."],
  ["Fatehpur Sikri","Uttar Pradesh","1986","Akbar's 'City of Victory' (1571–1585), with the Buland Darwaza."],
  ["Humayun's Tomb, Delhi","Delhi","1993","The first garden-tomb of the subcontinent, built 1565–1572."],
  ["Qutb Minar and its Monuments, Delhi","Delhi","1993","Begun by Qutb-ud-din Aibak and finished by Iltutmish; the Iron Pillar stands in the complex."],
  ["Red Fort Complex","Delhi","2007","Shah Jahan's palace-fort of Shahjahanabad, built 1639–1648, with Salimgarh Fort."],
  ["Champaner-Pavagadh Archaeological Park","Gujarat","2004","Mahmud Begada's capital below Pavagadh hill, with the Kalika Mata temple on top."],
  ["Hill Forts of Rajasthan","Rajasthan","2013","Six Rajput forts: Chittorgarh, Kumbhalgarh, Ranthambore, Gagron, Amber, Jaisalmer."],
  ["Moidams – the Mound-Burial System of the Ahom Dynasty","Assam","2024","Royal burial mounds at Charaideo, the first Ahom capital."]
];
const H4M = [
  ["Shivneri","Hill fort, Pune district","Birthplace of Shivaji (1630)"],
  ["Lohagad","Hill fort, Pune district","Guarded the trade route over the Western Ghats"],
  ["Raigad","Hill fort, Raigad district","Capital; Shivaji's coronation (1674)"],
  ["Rajgad","Hill fort, Pune district","Shivaji's first capital"],
  ["Salher","Hill fort, Nashik district","One of the highest forts of the Sahyadri; Maratha victory of 1672"],
  ["Pratapgad","Hill-forest fort, Satara district","Where Shivaji killed Afzal Khan (1659)"],
  ["Panhala","Hill-plateau fort, Kolhapur district","A large plateau fort; Shivaji's escape of 1660"],
  ["Vijaydurg","Coastal fort, Sindhudurg district","An old sea-facing fort strengthened by the Marathas"],
  ["Sindhudurg","Island fort off Malvan","Built by Shivaji in the sea"],
  ["Suvarnadurg","Island fort, Ratnagiri district","A naval base of the Maratha fleet"],
  ["Khanderi","Island fort off Alibag","Built by Shivaji near the mouth of Mumbai harbour"],
  ["Gingee","Hill fort, Tamil Nadu","The 'Troy of the East'; Rajaram held out here against the Mughals"]
];

LESSONS.push(
{id:"H4", heat:3, title:"Cultural sites III: Mughal, Sultanate and forts", hi:"सांस्कृतिक स्थल III: मुगल, सल्तनत और किले", blocks:[
  {k:"hot", h:"Most asked: the <b>Taj Mahal</b> (builder, architect, marble), <b>Agra Fort vs Red Fort</b>, <b>Fatehpur Sikri</b> and the <b>Buland Darwaza</b>, <b>Qutb Minar</b> (Aibak → Iltutmish), <b>Humayun's Tomb</b> (first garden-tomb), the six <b>Hill Forts of Rajasthan</b>, and the newer sites — <b>Moidams</b> (2024) and the <b>Maratha Military Landscapes</b> (2025)."},
  {k:"story", h:"<p>Delhi's story is told in stone. Qutb-ud-din Aibak began the <b>Qutb Minar</b> as a tower of victory; Iltutmish finished it. Three centuries later Humayun's widow raised the first great Mughal garden-tomb, <b>Humayun's Tomb</b>, which later inspired the Taj.</p><p>Akbar rebuilt <b>Agra Fort</b> in red sandstone and founded a new city, <b>Fatehpur Sikri</b>, in honour of the Sufi saint Salim Chishti. His grandson Shah Jahan built the <b>Taj Mahal</b> for his wife Mumtaz Mahal, then moved the capital to Delhi and built the <b>Red Fort</b>.</p><p>Away from the Mughals, Rajput kings crowned the Aravalli hills with forts, Mahmud Begada built his capital at <b>Champaner</b>, the Ahom kings of Assam buried their dead in great mounds at <b>Charaideo</b>, and Shivaji and his successors held the Sahyadri with a chain of hill and sea forts — the <b>Maratha Military Landscapes</b>.</p>", key:"Agra: Fort (Akbar) + Taj (Shah Jahan) + Fatehpur Sikri (Akbar) · Delhi: Humayun's Tomb, Qutb Minar, Red Fort · forts: Rajasthan's six (2013), the Marathas' twelve (2025)."},
  {k:"table", title:"Sultanate, Mughal and fort sites", head:["Site","State / UT","Year","Remember"], rows: H4S.map(r => ["<b>" + r[0] + "</b>", r[1], r[2], r[3]]).concat([["<b>Maratha Military Landscapes of India</b>","Maharashtra and Tamil Nadu","2025","Twelve forts of the 17th–19th centuries — eleven in Maharashtra and Gingee in Tamil Nadu."]])},
  {k:"facts", title:"The Mughal sites in detail", rows:[
    ["Taj Mahal","Architect <b>Ustad Ahmad Lahauri</b>; white marble from <b>Makrana</b> (Rajasthan) inlaid with semi-precious stones (<b>pietra dura</b>); a charbagh garden in front; listed on criterion (i) alone"],
    ["Agra Fort","Akbar's red sandstone fort; Shah Jahan added white marble palaces and the Moti Masjid; Aurangzeb kept Shah Jahan prisoner here, in the Musamman Burj, until he died (1666)"],
    ["Fatehpur Sikri","Built for Akbar's capital (1571–1585) in honour of <b>Shaikh Salim Chishti</b>; the Jama Masjid, the <b>Buland Darwaza</b> (for the Gujarat victory), the Panch Mahal, the Diwan-i-Khas with its single central pillar; left soon after, partly for want of water"],
    ["Humayun's Tomb","Commissioned by Humayun's widow <b>Bega Begum</b>; Persian architect <b>Mirak Mirza Ghiyas</b>; red sandstone and white marble; so many Mughals are buried here that it is called the 'dormitory of the Mughals'"],
    ["Qutb complex","Qutb Minar (about 73 m, five storeys) — begun by <b>Aibak</b>, finished by <b>Iltutmish</b>, top storeys repaired by <b>Firoz Shah Tughlaq</b>; Quwwat-ul-Islam mosque; the rust-free <b>Iron Pillar</b> of the Gupta age; Alai Darwaza and the unfinished Alai Minar of Alauddin Khalji; Iltutmish's tomb"],
    ["Red Fort","Built 1639–1648 when Shah Jahan moved his capital to <b>Shahjahanabad</b>; Diwan-i-Am, Diwan-i-Khas, Rang Mahal; the Prime Minister speaks from the <b>Lahori Gate</b> on Independence Day; on the ₹500 note"]]},
  {k:"facts", title:"Forts and other sites", rows:[
    ["Hill Forts of Rajasthan (2013)","<b>Chittorgarh</b> (largest; Mewar), <b>Kumbhalgarh</b> (Rana Kumbha; a wall about 36 km long), <b>Ranthambore</b> (Sawai Madhopur), <b>Gagron</b> (Jhalawar; a water fort between two rivers), <b>Amber</b> (Jaipur), <b>Jaisalmer</b> (a living fort of yellow sandstone)"],
    ["Maratha Military Landscapes (2025)","Twelve forts in five types — hill, hill-forest, hill-plateau, coastal and island — built, adapted or expanded by the Marathas from the late 17th to the early 19th century; listed on criteria (iv) and (vi)"],
    ["Champaner-Pavagadh (2004)","Mahmud Begada took it in 1484 and made it his capital; the Jami Masjid; the only complete, unchanged pre-Mughal Islamic city; the Kalika Mata temple on Pavagadh hill"],
    ["Moidams (2024)","Earth-and-brick burial mounds of Ahom royalty at <b>Charaideo</b>, the capital founded by <b>Sukaphaa</b> in 1253; called the 'pyramids of Assam'; the Ahoms ruled for about 600 years (1228–1826)"]]},
  {k:"table", title:"The twelve Maratha forts", head:["Fort","Type and place","Remember"], rows: H4M},
  {k:"trick", h:"<b>Agra's three</b> — “<b>F</b>ort, <b>T</b>aj, <b>F</b>atehpur” — Akbar, Shah Jahan, Akbar. <b>Delhi's three</b> — “<b>Q</b>uick <b>H</b>umble <b>R</b>ed”: Qutb (1993), Humayun (1993), Red Fort (2007). Rajasthan's six forts — “<b>C</b>an <b>K</b>ing <b>R</b>ana <b>G</b>et <b>A</b>ll <b>J</b>ewels”: Chittorgarh, Kumbhalgarh, Ranthambore, Gagron, Amber, Jaisalmer."},
  {k:"trap", h:"<b>Mehrangarh</b> (Jodhpur), <b>Junagarh</b> (Bikaner) and <b>Golconda</b> are <b>not</b> World Heritage sites. <b>Sinhagad</b> is not among the twelve Maratha forts. <b>Gingee</b>, the twelfth, is in <b>Tamil Nadu</b>. The <b>Buland Darwaza</b> is at Fatehpur Sikri, not Agra Fort. <b>Itimad-ud-Daulah</b>, <b>Akbar's tomb at Sikandra</b> and <b>Bibi ka Maqbara</b> are not on the list."},
  {k:"link", h:"Mughal architecture (pietra dura, charbagh, the true arch) is explained in <a href=\"study-art-culture.html\">Art &amp; Culture</a>; the reigns behind these buildings are in Medieval India. Who built the other Sultanate and Mughal monuments is in lesson H7."}
], sum:["Agra Fort and Taj Mahal (1983), Fatehpur Sikri (1986) — all in Uttar Pradesh.","Humayun's Tomb and Qutb Minar (1993), Red Fort (2007) — all in Delhi.","Taj Mahal: Shah Jahan for Mumtaz Mahal; architect Ustad Ahmad Lahauri; Makrana marble.","Humayun's Tomb was the first garden-tomb; Qutb Minar was begun by Aibak and finished by Iltutmish.","Hill Forts of Rajasthan (2013): Chittorgarh, Kumbhalgarh, Ranthambore, Gagron, Amber, Jaisalmer.","Champaner-Pavagadh (Gujarat, 2004) was Mahmud Begada's capital.","Moidams of Charaideo (Assam, 2024); Maratha Military Landscapes — twelve forts, Gingee in Tamil Nadu (2025)."]}
);

pairQs("H4", H4S.map(r => [r[0], r[1], r[3], ""]), { q: t => `Where is the World Heritage site “${t}”?`, e: r => `${r[0]} is in ${r[1]}. ${r[2]}`,
  rq: a => `Which of these Sultanate, Mughal or fort sites on the World Heritage list is in ${a}?`, re: r => `${r[0]} is in ${r[1]}. ${r[2]}`, extra: ["Madhya Pradesh","Maharashtra"] });

QB.push(
["H4","The Taj Mahal was built by Shah Jahan in memory of:",["Mumtaz Mahal","Nur Jahan","Mariam-uz-Zamani","Jahanara Begum"],"Mumtaz Mahal (Arjumand Banu Begum) died in 1631; work on her tomb began the next year.",""],
["H4","Who was the chief architect of the Taj Mahal?",["Ustad Ahmad Lahauri","Mirak Mirza Ghiyas","Ustad Mansur","Abdus Samad"],"Ustad Ahmad Lahauri is named as its architect; Ustad Mansur and Abdus Samad were painters.",""],
["H4","The white marble of the Taj Mahal came mainly from:",["Makrana, Rajasthan","Jaisalmer, Rajasthan","Katni, Madhya Pradesh","Kota, Rajasthan"],"Makrana marble was carried to Agra; the same marble was later used for the Victoria Memorial.",""],
["H4","The inlay of semi-precious stones in the marble of the Taj Mahal is called:",["Pietra dura","Jali","Fresco","Mosaic glass"],"Pietra dura (parchin kari) sets cut stones into marble; a jali is a pierced screen.",""],
["H4","Where did Shah Jahan spend his last years as Aurangzeb's prisoner?",["Agra Fort","Red Fort, Delhi","Gwalior Fort","Fatehpur Sikri"],"He was confined in Agra Fort from 1658 and died there in 1666, within sight of the Taj.",""],
["H4","Akbar built Fatehpur Sikri in honour of which Sufi saint?",["Shaikh Salim Chishti","Nizamuddin Auliya","Moinuddin Chishti","Bakhtiyar Kaki"],"The saint had foretold the birth of Akbar's son Salim (Jahangir); his tomb stands in the mosque courtyard.",""],
["H4","The Buland Darwaza at Fatehpur Sikri was built to mark Akbar's victory over:",["Gujarat","Bengal","Kashmir","Mewar"],"Akbar raised the great gate after conquering Gujarat (1573).",""],
["H4","Why is Humayun's Tomb important in the history of architecture?",["It is the first garden-tomb on the Indian subcontinent","It is the first Mughal tomb wholly of white marble","It is India's tallest tomb","It is the first rock-cut tomb"],"Its charbagh plan set the model that the Taj Mahal later perfected.",""],
["H4","Humayun's Tomb was commissioned by:",["Bega Begum (Haji Begum)","Nur Jahan","Mumtaz Mahal","Gulbadan Begum"],"Humayun's widow Bega Begum had it built (1565–1572); Gulbadan Begum was his sister and wrote the Humayun-nama.",""],
["H4","The Persian architect of Humayun's Tomb was:",["Mirak Mirza Ghiyas","Ustad Ahmad Lahauri","Ustad Isa","Abul Fazl"],"Mirak Mirza Ghiyas designed it; his son finished it after his death.",""],
["H4","The Qutb Minar was begun by Qutb-ud-din Aibak and completed by:",["Iltutmish","Balban","Alauddin Khalji","Razia Sultan"],"Aibak built the first storey; Iltutmish added three more.",""],
["H4","Which Gupta-age monument in the Qutb complex is famous for not rusting?",["The Iron Pillar","The Alai Minar","The Alai Darwaza","Iltutmish's tomb"],"The Iron Pillar, with an inscription of a king Chandra (taken to be Chandragupta II), has stood for about 1,600 years without rusting.",""],
["H4","Which Sultan repaired the top storeys of the Qutb Minar after lightning struck it?",["Firoz Shah Tughlaq","Muhammad bin Tughlaq","Ibrahim Lodi","Sher Shah Suri"],"Firoz Shah Tughlaq rebuilt the damaged top in the 14th century, using marble.",""],
["H4","The Red Fort was the palace-fort of which city?",["Shahjahanabad","Dinpanah","Siri","Tughlaqabad"],"Shah Jahan built it for his new capital, Shahjahanabad (Old Delhi).",""],
["H4","Which older fort, built by Islam Shah Suri, forms part of the Red Fort Complex?",["Salimgarh Fort","Purana Qila","Tughlaqabad Fort","Kotla Firoz Shah"],"Salimgarh (1546) stands beside the Red Fort and is inscribed with it.",""],
["H4","From the ramparts of which gate of the Red Fort does the Prime Minister address the nation on Independence Day?",["Lahori Gate","Delhi Gate","Kashmiri Gate","Ajmeri Gate"],"The Lahori Gate faces west, towards Chandni Chowk.",""],
["H4","How many forts make up the Hill Forts of Rajasthan site?",["Six","Four","Eight","Twelve"],"Chittorgarh, Kumbhalgarh, Ranthambore, Gagron, Amber and Jaisalmer.",""],
["H4","Which fort is NOT part of the Hill Forts of Rajasthan World Heritage site?",["Mehrangarh","Chittorgarh","Kumbhalgarh","Gagron"],"Jodhpur's Mehrangarh is famous but not inscribed.",""],
["H4","Gagron, one of the Hill Forts of Rajasthan, is best described as a:",["Water fort, with rivers on three sides","Desert fort","Sea fort","Fort on an island in a lake"],"Gagron in Jhalawar stands where the Ahu meets the Kali Sindh, so water surrounds it on three sides.",""],
["H4","Kumbhalgarh fort, with its very long wall, was built by:",["Rana Kumbha","Rana Sanga","Maharana Pratap","Rana Hammir"],"Rana Kumbha of Mewar built it in the 15th century; Maharana Pratap was born there.",""],
["H4","How many forts make up the Maratha Military Landscapes of India?",["12","6","10","15"],"Eleven are in Maharashtra and one, Gingee, in Tamil Nadu.",""],
["H4","Which fort of the Maratha Military Landscapes is in Tamil Nadu?",["Gingee","Vellore","Tiruchirappalli Rock Fort","Dindigul"],"Gingee, in Villupuram district, is the only one outside Maharashtra.",""],
["H4","Which of these is NOT one of the twelve forts of the Maratha Military Landscapes?",["Sinhagad","Raigad","Pratapgad","Shivneri"],"Sinhagad, near Pune, was left out of the nominated twelve.",""],
["H4","Shivaji was born in 1630 at which fort, now part of the Maratha Military Landscapes?",["Shivneri","Raigad","Rajgad","Panhala"],"Shivneri, near Junnar in Pune district, is his birthplace.",""],
["H4","Shivaji's coronation of 1674 took place at:",["Raigad","Shivneri","Pratapgad","Sindhudurg"],"Raigad was his capital and the place of his coronation as Chhatrapati.",""],
["H4","Which sea fort, built by Shivaji off Malvan, is among the twelve Maratha forts?",["Sindhudurg","Vijaydurg","Suvarnadurg","Khanderi"],"Sindhudurg stands on an island off Malvan; Khanderi is off Alibag and Suvarnadurg off Ratnagiri district's coast.",""],
["H4","At which fort did Shivaji kill Afzal Khan in 1659?",["Pratapgad","Panhala","Lohagad","Salher"],"The meeting with Afzal Khan took place below Pratapgad, in Satara district.",""],
["H4","The Moidams of Assam are:",["Royal mound burials of the Ahom dynasty","Ahom water tanks","Stone forts of the Ahoms","Buddhist stupas of Assam"],"The moidams are burial mounds of Ahom kings and nobles at Charaideo.",""],
["H4","Charaideo, home of the Moidams, was the first capital of the Ahom kingdom, founded by:",["Sukaphaa","Lachit Borphukan","Rudra Singha","Gadadhar Singha"],"Sukaphaa founded the Ahom kingdom in the 13th century and made Charaideo his capital.",""],
["H4","Champaner was the capital of which Sultan of Gujarat?",["Mahmud Begada","Ahmad Shah I","Bahadur Shah","Muzaffar Shah I"],"Mahmud Begada captured Champaner in 1484 and rebuilt it as his capital.",""],
["H4","Which temple stands on Pavagadh hill, within the Champaner-Pavagadh site?",["Kalika Mata temple","Ambaji temple","Somnath temple","Dwarkadhish temple"],"The Kalika Mata temple on the hilltop is a major place of pilgrimage.",""]
);
LASTMOMENT.push({t:"Mughal, Sultanate and forts", era:["hm"], rows:[["Agra","Fort 1983, Taj 1983, Fatehpur Sikri 1986"],["Delhi","Humayun's Tomb 1993, Qutb 1993, Red Fort 2007"],["Taj","Shah Jahan · Lahauri · Makrana"],["Rajasthan forts","Six, 2013"],["Maratha forts","Twelve, 2025 — Gingee in TN"],["Moidams","Assam, 2024"],["Champaner","Gujarat, 2004"]]});

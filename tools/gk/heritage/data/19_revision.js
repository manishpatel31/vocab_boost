/* H10 — Mixed revision: heritage on the banknotes, nicknames, famous places that are not on the list, and mixed questions. */
const H10N = [
  ["₹10","Sun Temple, Konark","The chocolate-brown note shows a wheel of the Konark chariot."],
  ["₹20","Ellora Caves","The greenish-yellow note shows the Ellora caves."],
  ["₹50","Hampi with its stone chariot","The fluorescent-blue note shows the stone chariot of Hampi."],
  ["₹100","Rani ki Vav","The lavender note shows the stepwell of Patan."],
  ["₹200","Sanchi Stupa","The bright-yellow note shows the Great Stupa of Sanchi."],
  ["₹500","Red Fort","The stone-grey note shows the Red Fort."]
];
const H10K = [
  ["Black Pagoda","Sun Temple, Konark","Its dark tower guided sailors."],
  ["White Pagoda","Jagannath Temple, Puri","Its whitewashed tower was a landmark from the sea."],
  ["Baby Taj","Tomb of Itimad-ud-Daulah, Agra","Nur Jahan's marble tomb for her father, older than the Taj."],
  ["Taj of the Deccan","Bibi ka Maqbara, Aurangabad","A smaller copy of the Taj Mahal's plan."],
  ["Great Wall of India","Kumbhalgarh Fort","Its wall runs for about 36 km."],
  ["Troy of the East","Gingee Fort","The British called it so for its strength."],
  ["Pyramids of Assam","Moidams of Charaideo","Royal mound burials of the Ahoms."],
  ["Queen of Stepwells","Rani ki Vav, Patan","The finest stepwell of Gujarat."],
  ["Dormitory of the Mughals","Humayun's Tomb","More than a hundred Mughal graves lie in it."],
  ["Golden Fort (Sonar Qila)","Jaisalmer Fort","Built of yellow sandstone that glows at sunset."],
  ["Palace of Winds","Hawa Mahal, Jaipur","Its 953 windows let the breeze through."],
  ["Rome of the East","Old Goa","For its many great churches."]
];

LESSONS.push(
{id:"H10", heat:2, title:"Mixed revision: notes, nicknames and look-alikes", hi:"मिश्रित पुनरावृत्ति: नोट, उपनाम और भ्रम", blocks:[
  {k:"hot", h:"Revision of the whole app, plus three things SSC likes to slip in: <b>which heritage site is on which banknote</b>, <b>nicknames</b> (Black Pagoda, Baby Taj, Taj of the Deccan) and <b>famous places that are not World Heritage sites</b>."},
  {k:"story", h:"<p>Take a ₹10, ₹20, ₹50, ₹100, ₹200 and ₹500 note out of your wallet and turn them over: Konark, Ellora, Hampi, Rani ki Vav, Sanchi and the Red Fort — six World Heritage sites in your pocket. That is the first table of this lesson.</p><p>The second is a list of nicknames, which exams use to disguise a monument. The third is a warning list: famous, beautiful, often visited — and still not World Heritage sites. Then come mixed questions from every lesson.</p>", key:"₹10 Konark · ₹20 Ellora · ₹50 Hampi · ₹100 Rani ki Vav · ₹200 Sanchi · ₹500 Red Fort."},
  {k:"table", title:"Heritage on the new banknotes (Mahatma Gandhi New Series)", head:["Note","Heritage site on the back","Remember"], rows: H10N},
  {k:"table", title:"Nicknames", head:["Nickname","Monument or place","Why"], rows: H10K},
  {k:"facts", title:"Famous, but not World Heritage sites (as of October 2026)", rows:[
    ["Temples","Jagannath (Puri), Meenakshi (Madurai), Somnath, Kamakhya, Golden Temple, Modhera, Aihole and Badami"],
    ["Islamic monuments","Charminar, Gol Gumbaz, Itimad-ud-Daulah, Akbar's tomb at Sikandra, Bibi ka Maqbara, Golconda Fort"],
    ["Rajput and colonial","Mehrangarh, Hawa Mahal, City Palace of Udaipur, India Gate, Gateway of India, Victoria Memorial, Mysore Palace"],
    ["Ancient sites","Lothal, Rakhigarhi, Kushinagar, Bagh Caves (on the Tentative List since 2026)"],
    ["Railways","Matheran Hill Railway and Kangra Valley Railway (Tentative List)"]]},
  {k:"trick", h:"Notes in rising order spell a tour: <b>“Konark's Ellora Hampi — Rani's Sanchi Red”</b> — 10, 20, 50, 100, 200, 500. The ₹2000 note showed <b>Mangalyaan</b>, not a monument."},
  {k:"trap", h:"<b>Black Pagoda</b> = Konark; <b>White Pagoda</b> = Jagannath. <b>Baby Taj</b> = Itimad-ud-Daulah (Agra); <b>Taj of the Deccan</b> = Bibi ka Maqbara (Aurangabad). The ₹100 note shows <b>Rani ki Vav</b>, not Hampi; the ₹50 note shows <b>Hampi</b>."}
], sum:["Banknotes: ₹10 Konark, ₹20 Ellora, ₹50 Hampi, ₹100 Rani ki Vav, ₹200 Sanchi, ₹500 Red Fort.","Black Pagoda — Konark; White Pagoda — Jagannath; Baby Taj — Itimad-ud-Daulah; Taj of the Deccan — Bibi ka Maqbara.","Great Wall of India — Kumbhalgarh; Troy of the East — Gingee; Pyramids of Assam — Moidams.","Charminar, Gol Gumbaz, Hawa Mahal, India Gate, Gateway of India, Golden Temple, Meenakshi and Jagannath are not World Heritage sites."]}
);

pairQs("H10", H10N, { q: t => `Which heritage site is shown on the back of the new ${t} note?`, e: r => `The ${r[0]} note shows ${r[1]}. ${r[2]}`,
  rq: a => `${a} appears on the back of which new banknote?`, re: r => `${r[1]} is on the ${r[0]} note.` });
pairQs("H10", H10K, { q: t => `Which monument or place is nicknamed the ‘${t}’?`, e: r => `${r[1]} is called the ${r[0]}. ${r[2]}` });

QB.push(
["H10","Which of these sites was inscribed on the World Heritage list earliest?",["Elephanta Caves","Santiniketan","Jaipur City","Ramappa Temple"],"Elephanta was listed in 1987; Jaipur in 2019, Ramappa in 2021, Santiniketan in 2023.",""],
["H10","Arrange in the order they joined the World Heritage list: Moidams, Sarnath, Maratha Military Landscapes.",["Moidams, Maratha Military Landscapes, Sarnath","Sarnath, Moidams, Maratha Military Landscapes","Maratha Military Landscapes, Moidams, Sarnath","Moidams, Sarnath, Maratha Military Landscapes"],"Moidams 2024, Maratha Military Landscapes 2025, Sarnath 2026.",""],
["H10","Which World Heritage site is shared by Maharashtra and Tamil Nadu?",["Maratha Military Landscapes of India","Western Ghats","Mountain Railways of India","Great Living Chola Temples"],"Eleven of its forts are in Maharashtra and Gingee is in Tamil Nadu. The Western Ghats also reaches Kerala and Karnataka.",""],
["H10","Which World Heritage site in India is a working railway station?",["Chhatrapati Shivaji Terminus","Howrah Junction","Chennai Central","New Delhi"],"CST in Mumbai, the Central Railway's headquarters, was inscribed in 2004.",""],
["H10","Which of these is on UNESCO's intangible heritage list, not the World Heritage list?",["Kumbh Mela","Hampi","Sanchi","Khajuraho"],"The Kumbh Mela (2017) is intangible heritage; the other three are World Heritage sites.",""],
["H10","Kozhikode is on which UNESCO list?",["Creative Cities Network (Literature)","World Heritage list","Intangible cultural heritage list","Memory of the World Register"],"Kozhikode became India's first City of Literature in 2023.",""],
["H10","Which pair of monument and builder is correctly matched?",["Charminar — Muhammad Quli Qutb Shah","Gol Gumbaz — Ibrahim Adil Shah II","Hawa Mahal — Sawai Jai Singh II","Alai Darwaza — Iltutmish"],"Gol Gumbaz is Muhammad Adil Shah's, the Hawa Mahal Sawai Pratap Singh's and the Alai Darwaza Alauddin Khalji's.",""],
["H10","Which pair of World Heritage site and state is WRONGLY matched?",["Rani ki Vav — Rajasthan","Ramappa Temple — Telangana","Moidams — Assam","Bhimbetka — Madhya Pradesh"],"Rani ki Vav is at Patan in Gujarat.",""],
["H10","Which Karnataka site is NOT on the World Heritage list?",["Gol Gumbaz, Vijayapura","Hampi","Pattadakal","Halebidu"],"Gol Gumbaz is famous but not inscribed; Halebidu is part of the Hoysala site.",""],
["H10","Which city has both a World Heritage site of its own name and a UNESCO Creative City title?",["Jaipur","Lucknow","Varanasi","Hyderabad"],"Jaipur City is a World Heritage site (2019) and a Creative City of Crafts and Folk Art (2015).",""],
["H10","Which dynasty built both the Brihadisvara of Thanjavur and Gangaikondacholapuram?",["Cholas","Pallavas","Pandyas","Chalukyas"],"Both belong to the Great Living Chola Temples site.",""],
["H10","Which of these is NOT shown on a banknote of the new series?",["Taj Mahal","Hampi","Rani ki Vav","Sanchi Stupa"],"The new notes show Konark, Ellora, Hampi, Rani ki Vav, Sanchi and the Red Fort.",""],
["H10","The Kailasa temple, the Ajanta paintings and the Elephanta caves are all in which state?",["Maharashtra","Madhya Pradesh","Karnataka","Gujarat"],"Ellora, Ajanta and Elephanta are all in Maharashtra.",""],
);
LASTMOMENT.push({t:"Notes and nicknames", era:["hm"], rows:[["₹10 · ₹20 · ₹50","Konark · Ellora · Hampi"],["₹100 · ₹200 · ₹500","Rani ki Vav · Sanchi · Red Fort"],["Black / White Pagoda","Konark / Jagannath"],["Baby Taj","Itimad-ud-Daulah"],["Taj of the Deccan","Bibi ka Maqbara"],["Great Wall of India","Kumbhalgarh"]]});
TILES.push(["6","Heritage sites on our banknotes","hm"]);

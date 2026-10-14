/* Part 2 · L4 dancers of the southern dances; L5 dancers of Kathak and the eastern dances; L6 gurus, schools and dancers of more than one style. */
const L4D = [
  ["Rukmini Devi Arundale","Bharatanatyam","Founded Kalakshetra (1936); first woman nominated to the Rajya Sabha (1952).","p|SSC CGL · 5 Dec 2022 (Shift 1)"],
  ["T. Balasaraswati","Bharatanatyam","From a family of hereditary temple musicians and dancers; Padma Vibhushan 1977.","p"],
  ["Padma Subrahmanyam","Bharatanatyam","Created 'Bharata Nrityam' from the Natya Shastra's karanas; Padma Vibhushan 2024.","p"],
  ["Alarmel Valli","Bharatanatyam","",""],
  ["Leela Samson","Bharatanatyam","Former director of Kalakshetra and chairperson of the Sangeet Natak Akademi.","p"],
  ["Vyjayanthimala","Bharatanatyam","Film star and dancer; Padma Vibhushan 2024.","p"],
  ["Saroja Vaidyanathan","Bharatanatyam","",""],
  ["Geeta Chandran","Bharatanatyam","",""],
  ["C. V. Chandrasekhar","Bharatanatyam","",""],
  ["Malavika Sarukkai","Bharatanatyam","",""],
  ["Vempati Chinna Satyam","Kuchipudi","Took Kuchipudi from the village to the world; Padma Bhushan 1998.","p|SSC CGL · 6 Dec 2022 (Shift 4)"],
  ["Vedantam Satyanarayana Sarma","Kuchipudi","Famous for playing women's roles like Satyabhama.",""],
  ["Raja and Radha Reddy","Kuchipudi","Husband-and-wife pair; Padma Bhushan 2000.","p"],
  ["Shobha Naidu","Kuchipudi","",""],
  ["Swapna Sundari","Kuchipudi","Also revived Vilasini Natyam.",""],
  ["Deepika Reddy","Kuchipudi","",""],
  ["Kalamandalam Krishnan Nair","Kathakali","",""],
  ["Kalamandalam Ramankutty Nair","Kathakali","Also a Padma Bhushan awardee.","p|SSC GD · 27 Jan 2023 (Shift 2)"],
  ["Kalamandalam Gopi","Kathakali","",""],
  ["Guru Kunchu Kurup","Kathakali","",""],
  ["Kottakkal Sivaraman","Kathakali","Known for women's roles.",""],
  ["Kalamandalam Kalyanikutty Amma","Mohiniyattam","Called the 'mother of Mohiniyattam'.","p|SSC CHSL · 31 May 2022 (Shift 3)"],
  ["Bharati Shivaji","Mohiniyattam","",""],
  ["Kanak Rele","Mohiniyattam","Founded the Nalanda Dance Research Centre, Mumbai.",""],
  ["Sunanda Nair","Mohiniyattam","",""],
  ["Gopika Varma","Mohiniyattam","",""]
];
const L5D = [
  ["Pandit Birju Maharaj","Kathak","Lucknow (Kalka-Bindadin) gharana; Padma Vibhushan 1986; died January 2022.","p|SSC CHSL · 17 Mar 2023 (Shift 3)"],
  ["Sitara Devi","Kathak","Called 'Nritya Samragini' by Rabindranath Tagore.","p"],
  ["Shambhu Maharaj","Kathak","Birju Maharaj's uncle, Lucknow gharana.",""],
  ["Lachhu Maharaj","Kathak","Birju Maharaj's uncle; choreographed for films like Mughal-e-Azam.","p"],
  ["Gopi Krishna","Kathak","Danced in the film Jhanak Jhanak Payal Baaje.",""],
  ["Shovana Narayan","Kathak","Padma Shri 1992.","p"],
  ["Kumudini Lakhia","Kathak","Founded Kadamb, Ahmedabad; Padma Vibhushan 2025.","p"],
  ["Uma Sharma","Kathak","",""],
  ["Roshan Kumari","Kathak","Jaipur gharana.",""],
  ["Saswati Sen","Kathak","Senior disciple of Birju Maharaj.",""],
  ["Aditi Mangaldas","Kathak","",""],
  ["Kelucharan Mohapatra","Odissi","The guru who revived Odissi; first person from Odisha to get the Padma Vibhushan (2000).","p|SSC CGL · 20 Apr 2022 (Shift 2)"],
  ["Pankaj Charan Das","Odissi","Called the 'adi guru' of Odissi; came from a Mahari family.","p"],
  ["Deba Prasad Das","Odissi","",""],
  ["Sanjukta Panigrahi","Odissi","",""],
  ["Protima Bedi","Odissi","Founded Nrityagram near Bengaluru (1990).","p"],
  ["Madhavi Mudgal","Odissi","",""],
  ["Kumkum Mohanty","Odissi","",""],
  ["Sujata Mohapatra","Odissi","",""],
  ["Ileana Citaristi","Odissi","Italian-born dancer; Padma Shri 2006.",""],
  ["Guru Bipin Singh","Manipuri","Called the father of modern Manipuri dance.","p"],
  ["Darshana Jhaveri","Manipuri","One of the four Jhaveri sisters.","p"],
  ["Rajkumar Singhajit Singh","Manipuri","",""],
  ["Guru Amubi Singh","Manipuri","",""],
  ["Bimbavati Devi","Manipuri","",""],
  ["Jatin Goswami","Sattriya","","p"],
  ["Ghanakanta Bora","Sattriya","",""],
  ["Sarodi Saikia","Sattriya","",""],
  ["Ramkrishna Talukdar","Sattriya","",""],
  ["Gambhir Singh Mura","Chhau","Purulia Chhau, West Bengal.",""],
  ["Shashadhar Acharya","Chhau","Seraikela Chhau, Jharkhand.",""],
  ["Gopal Prasad Dubey","Chhau","Seraikela Chhau.",""]
];
const L6I = [
  ["Kalakshetra","Chennai","Founded 1936 by Rukmini Devi Arundale; Bharatanatyam.","p"],
  ["Kerala Kalamandalam","Cheruthuruthy (Thrissur)","Founded 1930 by the poet Vallathol Narayana Menon; Kathakali and Mohiniyattam.","p"],
  ["Darpana Academy of Performing Arts","Ahmedabad","Founded 1949 by Mrinalini Sarabhai.","p"],
  ["Kadamb Centre for Dance","Ahmedabad","Founded 1967 by Kumudini Lakhia; Kathak.",""],
  ["Kathak Kendra","New Delhi","Set up in 1964; a unit of the Sangeet Natak Akademi.","p"],
  ["Sangeet Natak Akademi","New Delhi","India's national academy of music, dance and drama (1952).","p"],
  ["Nrityagram","Hesaraghatta, near Bengaluru","Dance village founded 1990 by Protima Bedi; Odissi.","p"],
  ["Jawaharlal Nehru Manipuri Dance Academy","Imphal","Set up 1954; a unit of the Sangeet Natak Akademi.",""],
  ["Srjan","Bhubaneswar","Odissi school founded 1993 by Kelucharan Mohapatra.",""],
  ["Uday Shankar India Cultural Centre","Almora","Founded by Uday Shankar in the late 1930s.",""],
  ["Kuchipudi Art Academy","Chennai","Founded 1963 by Vempati Chinna Satyam.",""],
  ["Visva-Bharati (Santiniketan)","West Bengal","Tagore brought Manipuri teachers here and made the dance known across India.",""]
];
const L6F = [
  ["Rukmini Devi Arundale","Kalakshetra","",""],
  ["Vallathol Narayana Menon","Kerala Kalamandalam","With Manakkulam Mukunda Raja.",""],
  ["Mrinalini Sarabhai","Darpana Academy","",""],
  ["Kumudini Lakhia","Kadamb","",""],
  ["Protima Bedi","Nrityagram","",""],
  ["Kelucharan Mohapatra","Srjan","",""],
  ["Uday Shankar","Uday Shankar India Cultural Centre, Almora","",""],
  ["Vempati Chinna Satyam","Kuchipudi Art Academy","",""],
  ["Kanak Rele","Nalanda Dance Research Centre","",""]
];

LESSONS.push(
{id:"L4", heat:3, title:"Dancers of Bharatanatyam, Kuchipudi, Kathakali, Mohiniyattam", hi:"दक्षिण के शास्त्रीय नृत्यों के नर्तक", blocks:[
  {k:"hot", h:"Every SSC shift seems to have one: <b>“X is an exponent of which dance?”</b> The south's big names — <b>Rukmini Devi Arundale</b> and <b>Padma Subrahmanyam</b> (Bharatanatyam), <b>Vempati Chinna Satyam</b> and <b>Raja–Radha Reddy</b> (Kuchipudi), <b>Kalamandalam Kalyanikutty Amma</b> (Mohiniyattam)."},
  {k:"story", h:"<p>In the 1930s <b>Sadir</b>, the dance of temple women, was looked down on. <b>Rukmini Devi Arundale</b>, from a respected Brahmin family, learned it, staged it in 1935 and founded <b>Kalakshetra</b> in Chennai in 1936 — Bharatanatyam became respectable across India. <b>T. Balasaraswati</b>, from the hereditary tradition, kept its older soul alive. Later stars include <b>Padma Subrahmanyam</b>, <b>Alarmel Valli</b>, <b>Leela Samson</b> and the actress <b>Vyjayanthimala</b>.</p><p>In Andhra, <b>Vempati Chinna Satyam</b> turned village Kuchipudi into a solo concert art, and <b>Raja and Radha Reddy</b> took it abroad. In Kerala, the poet <b>Vallathol</b>'s Kalamandalam trained Kathakali greats like <b>Kalamandalam Krishnan Nair</b>, <b>Ramankutty Nair</b> and <b>Gopi</b>, and <b>Kalyanikutty Amma</b> rebuilt Mohiniyattam.</p>", key:"Rukmini Devi, Balasaraswati, Padma Subrahmanyam — Bharatanatyam; Vempati, Raja–Radha Reddy — Kuchipudi; Kalamandalam Gopi — Kathakali; Kalyanikutty Amma — Mohiniyattam."},
  {k:"table", title:"Dancer ↔ dance (south)", head:["Dancer","Dance","Note"], rows: L4D.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Kalamandalam”</b> in a name = a Kerala dancer: Kathakali, unless it's <b>Kalyanikutty Amma</b> (<b>K</b>alyani = <b>K</b>erala's <b>M</b>other of <b>M</b>ohiniyattam). <b>“Vempati, Vedantam — V for Village Kuchipudi”</b>."},
  {k:"trap", h:"<b>Rukmini Devi</b> (Bharatanatyam) ≠ <b>Mrinalini Sarabhai</b> (Bharatanatyam and Kathakali; Darpana). <b>Raja and Radha Reddy</b> are Kuchipudi, not Bharatanatyam. <b>Padma Subrahmanyam</b> is Bharatanatyam, not Kuchipudi."}
], sum:["Rukmini Devi Arundale — Bharatanatyam; founded Kalakshetra, Chennai (1936).","T. Balasaraswati, Padma Subrahmanyam, Alarmel Valli, Leela Samson, Vyjayanthimala — Bharatanatyam.","Vempati Chinna Satyam, Vedantam Satyanarayana Sarma, Raja and Radha Reddy, Shobha Naidu — Kuchipudi.","Kalamandalam Krishnan Nair, Ramankutty Nair, Gopi — Kathakali.","Kalamandalam Kalyanikutty Amma, Bharati Shivaji, Kanak Rele — Mohiniyattam."]},

{id:"L5", heat:3, title:"Dancers of Kathak, Odissi, Manipuri, Sattriya, Chhau", hi:"कथक, ओडिसी, मणिपुरी, सत्त्रिया और छऊ के नर्तक", blocks:[
  {k:"hot", h:"The most-asked names in the whole topic: <b>Birju Maharaj</b> and <b>Sitara Devi</b> (Kathak), <b>Kelucharan Mohapatra</b> (Odissi), <b>Guru Bipin Singh</b> (Manipuri). Sattriya names like <b>Jatin Goswami</b> now appear often too."},
  {k:"story", h:"<p><b>Pandit Birju Maharaj</b> was born into the Lucknow Kathak family of Kalka-Bindadin; his uncles <b>Shambhu</b> and <b>Lachhu Maharaj</b> were masters too. He choreographed for films like Devdas and Bajirao Mastani and won the Padma Vibhushan in 1986. <b>Sitara Devi</b> danced with such energy that Tagore called her <b>'Nritya Samragini'</b>. Later came <b>Kumudini Lakhia</b>, <b>Shovana Narayan</b> and <b>Uma Sharma</b>.</p><p>In Odisha, <b>Kelucharan Mohapatra</b>, a former Gotipua boy, rebuilt Odissi in the 1950s with <b>Pankaj Charan Das</b> and <b>Deba Prasad Das</b>; his students include <b>Sanjukta Panigrahi</b>, <b>Kumkum Mohanty</b> and <b>Protima Bedi</b>. <b>Guru Bipin Singh</b> shaped modern <b>Manipuri</b> with the <b>Jhaveri sisters</b>, and Assam's <b>Jatin Goswami</b> carried <b>Sattriya</b> out of the monasteries.</p>", key:"Birju Maharaj, Sitara Devi — Kathak; Kelucharan Mohapatra, Pankaj Charan Das — Odissi; Guru Bipin Singh — Manipuri; Jatin Goswami — Sattriya."},
  {k:"table", title:"Dancer ↔ dance (north and east)", head:["Dancer","Dance","Note"], rows: L5D.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Maharaj = Kathak”</b> — Birju, Shambhu, Lachhu, Achhan Maharaj are all one Lucknow family. <b>“Kelu, Pankaj, Deba — the three Odissi gurus”</b>. <b>Bipin = Manipuri</b> (both end in the same 'i' sound)."},
  {k:"trap", h:"<b>Sitara Devi</b> is Kathak — not Odissi. <b>Protima Bedi</b> (Odissi, Nrityagram) is often confused with Kathak. <b>Kelucharan Mohapatra</b> is Odissi, not Chhau. <b>Jatin Goswami</b> is Sattriya, not Manipuri."}
], sum:["Pandit Birju Maharaj (Lucknow gharana), Sitara Devi, Shambhu and Lachhu Maharaj — Kathak.","Kumudini Lakhia, Shovana Narayan, Uma Sharma, Gopi Krishna — Kathak.","Kelucharan Mohapatra, Pankaj Charan Das, Deba Prasad Das, Sanjukta Panigrahi, Protima Bedi — Odissi.","Guru Bipin Singh, Darshana Jhaveri, Rajkumar Singhajit Singh — Manipuri.","Jatin Goswami, Ghanakanta Bora — Sattriya; Gambhir Singh Mura, Shashadhar Acharya — Chhau."]},

{id:"L6", heat:2, title:"Gurus, schools and dancers of many styles", hi:"गुरु, संस्थान और बहु-शैली नर्तक", blocks:[
  {k:"hot", h:"Asked often: <b>Kalakshetra</b> (Chennai, Rukmini Devi), <b>Kerala Kalamandalam</b> (Vallathol), <b>Darpana</b> (Mrinalini Sarabhai, Ahmedabad), <b>Nrityagram</b> (Protima Bedi). Also the dancers known for <b>two</b> styles — Sonal Mansingh, Yamini Krishnamurthy, Mallika Sarabhai."},
  {k:"story", h:"<p>Modern classical dance was saved by schools. The poet <b>Vallathol Narayana Menon</b> founded <b>Kerala Kalamandalam</b> in <b>1930</b> to rescue Kathakali and Mohiniyattam. <b>Rukmini Devi Arundale</b> started <b>Kalakshetra</b> in Chennai in <b>1936</b>. <b>Mrinalini Sarabhai</b> opened <b>Darpana</b> in Ahmedabad in 1949, and the government's <b>Sangeet Natak Akademi</b> (1952) set up the <b>Kathak Kendra</b> in Delhi and the <b>Manipuri Dance Academy</b> in Imphal. <b>Protima Bedi</b> built <b>Nrityagram</b>, a dance village near Bengaluru, in 1990.</p><p>Some stars mastered more than one style: <b>Sonal Mansingh</b> (Bharatanatyam and Odissi), <b>Yamini Krishnamurthy</b> (Bharatanatyam and Kuchipudi), <b>Mallika Sarabhai</b> (Kuchipudi and Bharatanatyam), and <b>Mrinalini Sarabhai</b> (Bharatanatyam and Kathakali). <b>Uday Shankar</b> blended Indian styles into a new creative dance and is called the father of modern Indian dance.</p>", key:"Kalamandalam 1930 Vallathol; Kalakshetra 1936 Rukmini Devi; Darpana 1949 Mrinalini Sarabhai; Nrityagram 1990 Protima Bedi."},
  {k:"facts", title:"Dancers of more than one style", rows:[
    ["Sonal Mansingh","Bharatanatyam and Odissi — Padma Vibhushan 2003; nominated to the Rajya Sabha in 2018"],
    ["Yamini Krishnamurthy","Bharatanatyam and Kuchipudi — Padma Vibhushan 2016; died 2024"],
    ["Mallika Sarabhai","Kuchipudi and Bharatanatyam — daughter of Mrinalini and Vikram Sarabhai"],
    ["Mrinalini Sarabhai","Bharatanatyam and Kathakali — founded Darpana"],
    ["Uday Shankar","Creative dance mixing Indian styles — 'father of modern Indian dance'; film Kalpana (1948)"],
    ["Astad Deboo","Contemporary dance blending Kathak and Kathakali"]
  ]},
  {k:"table", title:"Institutions and where they are", head:["Institution","Place","Note"], rows: L6I.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Founders", head:["Founder","Institution","Note"], rows: L6F.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“K-K-C”</b>: <b>K</b>alakshetra — <b>C</b>hennai; <b>K</b>alamandalam — <b>K</b>erala. Darpana = mirror, and <b>Mrinalini</b> = the mirror of Ahmedabad. <b>Sonal = S + O</b> — <b>S</b>outh (Bharatanatyam) + <b>O</b>dissi."},
  {k:"trap", h:"<b>Kalakshetra</b> is in <b>Chennai</b>, not Kerala; <b>Kalamandalam</b> is in <b>Kerala</b>. <b>Darpana</b> and <b>Kadamb</b> are both in <b>Ahmedabad</b> (Mrinalini Sarabhai and Kumudini Lakhia). <b>Nrityagram</b> is near <b>Bengaluru</b>, though it teaches Odissi."}
], sum:["Kerala Kalamandalam — Cheruthuruthy, 1930, founded by Vallathol Narayana Menon.","Kalakshetra — Chennai, 1936, founded by Rukmini Devi Arundale.","Darpana — Ahmedabad, 1949, Mrinalini Sarabhai; Kadamb — Ahmedabad, Kumudini Lakhia; Nrityagram — near Bengaluru, Protima Bedi.","Sonal Mansingh — Bharatanatyam and Odissi; Yamini Krishnamurthy — Bharatanatyam and Kuchipudi.","Uday Shankar is called the father of modern Indian dance."]}
);

pairQs("L4", L4D, { q: t => `${t} is an exponent of which classical dance?`, extra: ["Odissi","Kathak","Manipuri"] });
pairQs("L5", L5D, { q: t => `${t} is associated with which dance form?`, extra: ["Bharatanatyam","Kuchipudi","Mohiniyattam"] });
pairQs("L6", L6I, { q: t => `Where is ${t} located?`, rq: a => `Which institution is located in ${a}?` });
pairQs("L6", L6F, { q: t => `${t} founded which institution?`, rq: a => `Who founded ${a}?` });

QB.push(
["L4","Vedantam Satyanarayana Sarma was famous in Kuchipudi for playing:",["Women's roles such as Satyabhama","Demon roles","Comic roles","Only the role of Krishna"],"Kuchipudi was once danced only by men.",""],
["L4","The 'Tanjore Quartet' of brothers is famous for:",["Shaping the Bharatanatyam recital (margam)","Founding Kerala Kalamandalam","Writing the Abhinaya Darpana","Creating Kathakali make-up"],"Chinnaiah, Ponniah, Sivanandam and Vadivelu, 19th century.","p"],
["L4","Which Bharatanatyam dancer has been both director of Kalakshetra and chairperson of the Sangeet Natak Akademi?",["Leela Samson","Alarmel Valli","Geeta Chandran","Malavika Sarukkai"],"",""],
["L5","Who is called the 'adi guru' of Odissi?",["Pankaj Charan Das","Kelucharan Mohapatra","Deba Prasad Das","Mayadhar Raut"],"He came from a family of Mahari temple dancers.",""],
["L5","Who is called the father of modern Manipuri dance?",["Guru Bipin Singh","Rajkumar Singhajit Singh","Guru Amubi Singh","Jatin Goswami"],"","p"],
["L5","Protima Bedi founded the dance village Nrityagram in:",["1990","1975","2001","1964"],"At Hesaraghatta near Bengaluru.",""],
["L5","Which Kathak dancer also served as an officer of the Indian Audit and Accounts Service?",["Shovana Narayan","Sitara Devi","Uma Sharma","Kumudini Lakhia"],"Padma Shri 1992.",""],
["L4","Who was the first woman to be nominated to the Rajya Sabha, and founded Kalakshetra?",["Rukmini Devi Arundale","Mrinalini Sarabhai","T. Balasaraswati","Sonal Mansingh"],"Nominated in 1952; founded Kalakshetra in 1936.","p"],
["L4","Who is called the 'mother of Mohiniyattam'?",["Kalamandalam Kalyanikutty Amma","Kanak Rele","Bharati Shivaji","Rukmini Devi Arundale"],"She rebuilt the dance at Kerala Kalamandalam.","p"],
["L4","Padma Subrahmanyam created a dance style based on the Natya Shastra's 108 karanas, called:",["Bharata Nrityam","Bharata Natyam","Vilasini Natyam","Nava Nritya"],"She is a Bharatanatyam dancer and scholar.",""],
["L4","Which husband-and-wife pair is famous for Kuchipudi?",["Raja and Radha Reddy","Shambhu and Sitara","Dhananjayans","Jhaveri sisters"],"Padma Bhushan 2000.","p"],
["L4","Which two dancers received the Padma Vibhushan in 2024?",["Vyjayanthimala and Padma Subrahmanyam","Sonal Mansingh and Birju Maharaj","Kumudini Lakhia and Yamini Krishnamurthy","Alarmel Valli and Leela Samson"],"Both are Bharatanatyam dancers.","p"],
["L5","Who called Sitara Devi 'Nritya Samragini' (empress of dance)?",["Rabindranath Tagore","Mahatma Gandhi","Jawaharlal Nehru","Sarojini Naidu"],"She first impressed him as a young girl.","p"],
["L5","Pandit Birju Maharaj belonged to which Kathak gharana?",["Lucknow","Jaipur","Banaras","Raigarh"],"The Kalka-Bindadin family of Lucknow.","p"],
["L5","Birju Maharaj choreographed the song 'Kaahe Chhed Mohe' for which film?",["Devdas (2002)","Mughal-e-Azam","Pakeezah","Umrao Jaan (1981)"],"He also choreographed 'Mohe Rang Do Laal' in Bajirao Mastani (2015).","p"],
["L5","Who was the first person from Odisha to receive the Padma Vibhushan?",["Kelucharan Mohapatra","Biju Patnaik","Pankaj Charan Das","Sanjukta Panigrahi"],"He received it in 2000.",""],
["L5","Kelucharan Mohapatra began his life in dance as a:",["Gotipua (boy dancer)","Kathakali actor","Temple priest","Chhau dancer"],"Gotipua boys dressed as girls to dance in Odisha.",""],
["L5","The Jhaveri sisters are known for which dance?",["Manipuri","Kathak","Sattriya","Odissi"],"Darshana Jhaveri is the best known.",""],
["L6","Sonal Mansingh is an accomplished dancer of Bharatanatyam and:",["Odissi","Kathak","Mohiniyattam","Sattriya"],"Padma Vibhushan 2003.","p"],
["L6","Yamini Krishnamurthy is famous for which dance form?",["Bharatanatyam","Kathak","Manipuri","Sattriya"],"She was also a leading Kuchipudi dancer.","p","","","SSC CGL · 7 Dec 2022 (Shift 3)"],
["L6","Mallika Sarabhai is best known for which pair of dance forms?",["Kuchipudi and Bharatanatyam","Kathak and Odissi","Manipuri and Sattriya","Kathakali and Mohiniyattam"],"Daughter of Mrinalini Sarabhai.","p"],
["L6","Who is called the father of modern Indian dance?",["Uday Shankar","Ravi Shankar","Birju Maharaj","Vallathol Narayana Menon"],"He made the dance film Kalpana (1948).","p"],
["L6","Kerala Kalamandalam was founded in:",["1930","1936","1949","1952"],"By Vallathol Narayana Menon.","p"],
["L6","Kalakshetra was founded in:",["1936","1930","1949","1964"],"In Adyar, Chennai.","p"],
["L6","Which dancer, nominated to the Rajya Sabha in 2018, is known for Odissi and Bharatanatyam?",["Sonal Mansingh","Hema Malini","Mallika Sarabhai","Leela Samson"],"",""]
);

LASTMOMENT.push(
{t:"Dancer ↔ dance", era:["cd"], rows:[["Rukmini Devi, Padma Subrahmanyam","Bharatanatyam"],["Vempati, Raja–Radha Reddy","Kuchipudi"],["Kalamandalam Gopi","Kathakali"],["Kalyanikutty Amma","Mohiniyattam"],["Birju Maharaj, Sitara Devi","Kathak"],["Kelucharan Mohapatra","Odissi"],["Guru Bipin Singh","Manipuri"],["Jatin Goswami","Sattriya"]]},
{t:"Schools", era:["cd"], rows:[["Kalakshetra","Chennai, 1936"],["Kerala Kalamandalam","Thrissur, 1930"],["Darpana","Ahmedabad, 1949"],["Kathak Kendra","New Delhi, 1964"],["Nrityagram","Near Bengaluru, 1990"],["Manipuri Dance Academy","Imphal, 1954"]]}
);
TILES.push(["1930","Kerala Kalamandalam","cd"],["1936","Kalakshetra","cd"],["1949","Darpana","cd"],["1986","Birju Maharaj — Padma Vibhushan","cd"]);

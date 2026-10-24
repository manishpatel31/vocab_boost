/* Part 2 · A4 film, music and arts; A5 sports awards. */
const A4P = [
  ["Devika Rani","1969 — the first Dadasaheb Phalke Award","'First Lady of Indian cinema'.","p"],
  ["Prithviraj Kapoor","1971 (posthumous)","",""],
  ["Satyajit Ray","1984","",""],
  ["Raj Kapoor","1987","",""],
  ["Lata Mangeshkar","1989","",""],
  ["Dilip Kumar","1994","",""],
  ["Amitabh Bachchan","2018 award","",""],
  ["Rajinikanth","2019 award (51st)","",""],
  ["Asha Parekh","2020 award (52nd)","",""],
  ["Waheeda Rehman","2021 award (53rd)","",""],
  ["Mithun Chakraborty","2022 award (54th)","Presented in October 2024.",""],
  ["Mohanlal","2023 award (55th)","Presented at the 71st National Film Awards, September 2025.","p"],
  ["Anant Nag","2024 award (56th)","Presented by President Murmu at the 72nd National Film Awards, Ekta Nagar (Gujarat), 22 Sep 2026; second Kannada actor after Dr. Rajkumar (1995).",""]
];
const A4O = [
  ["Bhanu Athaiya","Oscar for Costume Design, 1983 (Gandhi)","The first Indian to win an Oscar.","p"],
  ["Satyajit Ray","Honorary Oscar, 1992","For lifetime achievement.","p"],
  ["A. R. Rahman","Two Oscars, 2009 (Slumdog Millionaire)","Original score and original song (Jai Ho).","p"],
  ["Resul Pookutty","Oscar for Sound Mixing, 2009 (Slumdog Millionaire)","",""],
  ["Gulzar","Oscar for Original Song, 2009 (Jai Ho)","Shared with A. R. Rahman.",""],
  ["M. M. Keeravani and Chandrabose","Oscar for Original Song, 2023 ('Naatu Naatu', RRR)","The first Indian film song to win.","p"],
  ["Kartiki Gonsalves and Guneet Monga","Oscar for Documentary Short, 2023 (The Elephant Whisperers)","","p"],
  ["Ravi Shankar","The first Indian Grammy winner (1968)","With Yehudi Menuhin, 'West Meets East'.",""],
  ["Ricky Kej","Three Grammy Awards","Environmentalist composer.",""],
  ["Zakir Hussain","Three Grammys in one night, 2024","Tabla maestro.",""],
  ["Payal Kapadia","Grand Prix at Cannes, 2024 (All We Imagine as Light)","The first Indian film to win the Grand Prix.",""],
  ["Anasuya Sengupta","Best Actress, Un Certain Regard, Cannes 2024","The first Indian to win an acting prize at Cannes.",""]
];
const A4A = [
  ["Dadasaheb Phalke Award","India's highest award in cinema","Instituted 1969, the centenary year of Dadasaheb Phalke.","p"],
  ["National Film Awards","Government of India's annual film awards","Started 1954; the top prize is the Golden Lotus (Swarna Kamal).","p"],
  ["Academy Awards (Oscars)","USA's top film awards","First held in 1929.","p"],
  ["Grammy Awards","USA's top music awards","",""],
  ["Golden Globe Awards","Film and TV awards voted by international press","",""],
  ["Palme d'Or","Top prize of the Cannes Film Festival (France)","",""],
  ["Golden Bear","Top prize of the Berlin Film Festival","",""],
  ["Golden Lion","Top prize of the Venice Film Festival","",""],
  ["Sangeet Natak Akademi Award","India's national academy award for music, dance and drama","The Akademi was set up in 1952 — the first of the three national academies.",""],
  ["Kalidas Samman","Arts award of the Madhya Pradesh government","",""]
];
const A5 = [
  ["Major Dhyan Chand Khel Ratna","India's highest sporting honour","Started 1991–92 as the Rajiv Gandhi Khel Ratna; renamed in 2021. First winner: Viswanathan Anand.","p"],
  ["Arjuna Award","For outstanding performance by sportspersons","Started 1961; a bronze statuette of Arjuna.","p"],
  ["Dronacharya Award","For coaches","Started 1985.","p"],
  ["Arjuna Award (Lifetime)","For lifetime contribution to sport","Earlier the Major Dhyan Chand Award (from 2002).",""],
  ["Maulana Abul Kalam Azad Trophy","For the best university in sports","",""],
  ["Rashtriya Khel Protsahan Puraskar","For organisations that promote sport","",""],
  ["Tenzing Norgay National Adventure Award","For adventure on land, water and air","",""],
  ["Laureus World Sports Award","International — called the 'Oscars of sport'","Sachin won the Laureus Sporting Moment award in 2020.",""],
  ["Ballon d'Or","Best footballer of the year (France Football)","Started 1956.","p"]
];
const A5K = [
  ["Viswanathan Anand","First Khel Ratna (1991–92)","Chess.","p"],
  ["Neeraj Chopra","Khel Ratna 2021","Tokyo Olympic javelin gold.",""],
  ["Sharath Kamal","Khel Ratna 2022","Table tennis.",""],
  ["Satwiksairaj Rankireddy and Chirag Shetty","Khel Ratna 2023","Badminton doubles.",""],
  ["Manu Bhaker","Khel Ratna 2024","Shooting — two bronzes at Paris 2024.","p"],
  ["D. Gukesh","Khel Ratna 2024","Chess — world champion.","p"],
  ["Harmanpreet Singh","Khel Ratna 2024","Hockey captain.",""],
  ["Praveen Kumar","Khel Ratna 2024","Para high jump — Paralympic gold.",""],
  ["Divya Deshmukh","Arjuna Award 2025","Chess.",""],
  ["Tejaswin Shankar","Arjuna Award 2025","High jump / decathlon.",""],
  ["Ousmane Dembélé","Ballon d'Or 2025","France — Paris Saint-Germain.",""]
];

LESSONS.push(
{id:"A4", heat:3, title:"Film, music and arts awards", hi:"फ़िल्म, संगीत और कला पुरस्कार", blocks:[
  {k:"hot", h:"Asked often: <b>Dadasaheb Phalke Award</b> (first: Devika Rani; latest: Anant Nag, 2024 award, given Sep 2026), <b>Indian Oscar winners</b> (Bhanu Athaiya, A. R. Rahman, Naatu Naatu, The Elephant Whisperers), and the <b>top prizes of film festivals</b>."},
  {k:"story", h:"<p>The <b>Dadasaheb Phalke Award</b>, named after the father of Indian cinema (who made Raja Harishchandra, 1913), is India's highest film honour. It began in 1969 and its first recipient was <b>Devika Rani</b>. Recent winners: Rajinikanth, Asha Parekh, Waheeda Rehman, Mithun Chakraborty and <b>Mohanlal</b> (presented in 2025).</p><p>India's first Oscar went to costume designer <b>Bhanu Athaiya</b> for Gandhi (1983). <b>A. R. Rahman</b> won two for Slumdog Millionaire (2009), and in 2023 India won twice — <b>'Naatu Naatu'</b> from RRR and the documentary short <b>The Elephant Whisperers</b>. In 2024 <b>Payal Kapadia</b> won the Grand Prix at Cannes.</p>", key:"Phalke first: Devika Rani (1969); latest: Mohanlal (55th). First Indian Oscar: Bhanu Athaiya (1983)."},
  {k:"table", title:"The awards", head:["Award","What it is","Note"], rows: A4A.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Dadasaheb Phalke Award winners", head:["Winner","Year","Note"], rows: A4P.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Indians at the Oscars, Grammys and Cannes", head:["Winner","Award","Note"], rows: A4O.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Festival animals — <b>Cannes palm, Berlin bear, Venice lion</b>: Palme d'Or, Golden Bear, Golden Lion."},
  {k:"trap", h:"<b>Satyajit Ray</b> got an <b>honorary</b> Oscar — the first Indian to <b>win</b> one was <b>Bhanu Athaiya</b>. <b>Naatu Naatu</b>'s Oscar went to <b>M. M. Keeravani</b> (music) and <b>Chandrabose</b> (lyrics), not to the director Rajamouli."}
], sum:["The Dadasaheb Phalke Award (1969) is India's highest film award; first winner Devika Rani.","Recent Phalke winners: Rajinikanth, Asha Parekh, Waheeda Rehman, Mithun Chakraborty, Mohanlal (55th), Anant Nag (56th, 2024 award).","First Indian Oscar: Bhanu Athaiya (1983, Gandhi); A. R. Rahman won two in 2009.","2023 Oscars: 'Naatu Naatu' (RRR) and The Elephant Whisperers.","Cannes 2024: Payal Kapadia's All We Imagine as Light won the Grand Prix."]},

{id:"A5", heat:3, title:"Sports awards", hi:"खेल पुरस्कार", blocks:[
  {k:"hot", h:"Annual favourite: the <b>Khel Ratna</b> winners — and the 2025 surprise that <b>no one</b> got it. Also the <b>first Khel Ratna</b> (Anand), what the <b>Dronacharya</b> and <b>Arjuna</b> awards are for, and the <b>Ballon d'Or</b>."},
  {k:"story", h:"<p>India's <b>National Sports Awards</b> are given by the Ministry of Youth Affairs and Sports. The highest is the <b>Major Dhyan Chand Khel Ratna</b> — started in 1991–92 as the Rajiv Gandhi Khel Ratna and renamed after the hockey legend in 2021. Chess star <b>Viswanathan Anand</b> was the first winner.</p><p>The <b>Arjuna Award</b> (1961) is for athletes, the <b>Dronacharya</b> (1985) for coaches — named, fittingly, after the great archer and his teacher. For 2024 four got the Khel Ratna — <b>Manu Bhaker, D. Gukesh, Harmanpreet Singh</b> and para-athlete <b>Praveen Kumar</b>. For 2025, announced in August 2026, the Khel Ratna was <b>not given to anyone</b> — the first such year since 2014.</p>", key:"Khel Ratna (1991–92, renamed 2021) — first Anand; Arjuna — athletes; Dronacharya — coaches."},
  {k:"table", title:"The awards", head:["Award","What it is","Note"], rows: A5.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Recent winners", head:["Winner","Award","Note"], rows: A5K.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Mahabharata logic — <b>Arjuna the pupil, Dronacharya the teacher</b>: Arjuna Award for players, Dronacharya for coaches."},
  {k:"trap", h:"The Khel Ratna was renamed after <b>Dhyan Chand</b> in 2021 — it was earlier named after Rajiv Gandhi. The <b>Arjuna</b> statuette is of Arjuna; the award is <b>not</b> for coaches. For <b>2025</b> there was <b>no</b> Khel Ratna."}
], sum:["Major Dhyan Chand Khel Ratna — India's highest sports award; started 1991–92, renamed 2021; first winner Viswanathan Anand.","Arjuna Award (1961) for sportspersons; Dronacharya Award (1985) for coaches.","Khel Ratna 2024: Manu Bhaker, D. Gukesh, Harmanpreet Singh, Praveen Kumar.","No Khel Ratna was given for 2025; Arjuna 2025 went to 17 athletes including Divya Deshmukh.","Ballon d'Or (1956) — 2025 winner Ousmane Dembélé; Laureus — the 'Oscars of sport'."]}
);

pairQs("A4", A4A, { q: t => `The ${t} is:`, rq: a => `Which is the ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("A4", A4P, { q: t => `When did ${t} receive the Dadasaheb Phalke Award?` });
pairQs("A4", A4O, { q: t => `What did ${t} win?`, rq: a => `Who won the ${a}?` });
pairQs("A5", A5, { q: t => `The ${t} is given:`, rq: a => `Which award is: ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("A5", A5K, { q: t => `${t} received the:`, rq: a => `Who received the ${a}?` });

QB.push(
["A4","Who was the first recipient of the Dadasaheb Phalke Award?",["Devika Rani","Prithviraj Kapoor","Raj Kapoor","Satyajit Ray"],"She received it in 1969, the year it was instituted.","p"],
["A4","Who was the first Indian to win an Academy Award (Oscar)?",["Bhanu Athaiya","Satyajit Ray","A. R. Rahman","Resul Pookutty"],"For costume design in Gandhi (1983).","p"],
["A4","The song 'Naatu Naatu' that won the Oscar in 2023 is from the film:",["RRR","Baahubali","Pushpa","KGF"],"Music by M. M. Keeravani, lyrics by Chandrabose.","p"],
["A4","Who received the Dadasaheb Phalke Award presented at the 71st National Film Awards in 2025?",["Mohanlal","Mithun Chakraborty","Waheeda Rehman","Mammootty"],"Presented by the President in September 2025.","p"],
["A4","Who received the Dadasaheb Phalke Award for 2024, presented at the 72nd National Film Awards in September 2026?",["Anant Nag","Mammootty","Kamal Haasan","Shabana Azmi"],"President Droupadi Murmu presented it at Ekta Nagar, Gujarat, on 22 Sep 2026. He is the second Kannada actor to receive it, after Dr. Rajkumar (1995).",""],
["A5","Who was the first recipient of the Khel Ratna award?",["Viswanathan Anand","Sachin Tendulkar","Leander Paes","Karnam Malleswari"],"For 1991–92.","p"],
["A5","The Dronacharya Award is given to:",["Coaches","Players","Sports journalists","Sports universities"],"Started in 1985.","p"],
["A5","The Khel Ratna was renamed after Major Dhyan Chand in:",["2021","2019","2016","2023"],"Earlier called the Rajiv Gandhi Khel Ratna.","p"],
["A5","For the year 2025, the Major Dhyan Chand Khel Ratna was:",["Not given to anyone","Given to Neeraj Chopra","Given to the Indian hockey team","Given to D. Gukesh"],"The ministry's August 2026 announcement named no Khel Ratna winner; the last such year was 2014.",""]
);

LASTMOMENT.push(
{t:"Film awards", era:["aw"], rows:[["First Phalke","Devika Rani (1969)"],["Latest Phalke","Anant Nag (56th, 2024 award, given Sep 2026)"],["First Indian Oscar","Bhanu Athaiya (1983)"],["Two Oscars","A. R. Rahman (2009)"],["Naatu Naatu","Keeravani, Chandrabose (2023)"],["Elephant Whisperers","Kartiki Gonsalves, Guneet Monga"],["Cannes palm","Palme d'Or"],["Cannes Grand Prix 2024","Payal Kapadia"]]},
{t:"Sports awards", era:["aw"], rows:[["Highest","Khel Ratna (renamed 2021)"],["First Khel Ratna","Viswanathan Anand"],["Coaches","Dronacharya (1985)"],["Players","Arjuna (1961)"],["Khel Ratna 2024","Manu Bhaker, Gukesh, Harmanpreet, Praveen Kumar"],["Khel Ratna 2025","Not awarded"],["Ballon d'Or 2025","Ousmane Dembélé"],["Oscars of sport","Laureus"]]}
);
TILES.push(["1969","First Phalke Award","aw"],["1983","First Indian Oscar","aw"],["2023","Naatu Naatu Oscar","aw"],["1991","Khel Ratna begins","aw"],["1961","Arjuna Award begins","aw"],["1985","Dronacharya Award begins","aw"]);

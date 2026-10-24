/* T9: linguistic states, state languages beyond the main one, language families, language days and language firsts.
   The full reorganisation of the map (every new state and year) is in States & UTs, lesson S1. */
const T9A = [
  ["Utkal movement of Madhusudan Das","Odisha province (1936)","The first province drawn on the basis of language, on 1 April 1936 — Utkal Divas."],
  ["Andhra movement and Potti Sriramulu's fast","Andhra State (1953)","The first state formed on language after independence, on 1 October 1953, with Kurnool as its capital."],
  ["Aikya Kerala movement","Kerala (1956)","Travancore-Cochin joined with Malabar on 1 November 1956."],
  ["Karnataka Ekikarana (unification) movement","Mysore State (1956), renamed Karnataka in 1973","The Kannada areas of Bombay, Madras and Hyderabad joined Mysore."],
  ["Samyukta Maharashtra movement","Maharashtra (1960)","Bombay State was split on 1 May 1960; Bombay city went to Maharashtra."],
  ["Mahagujarat movement of Indulal Yagnik","Gujarat (1960)","Gujarat was born the same day as Maharashtra, 1 May 1960."],
  ["Punjabi Suba movement","A Punjabi-speaking Punjab, with Haryana carved out (1966)","Led by Master Tara Singh and Sant Fateh Singh; the Punjab Reorganisation Act came into force on 1 November 1966."],
  ["Konkani language agitation","Konkani as Goa's official language (1987)","Goa became a state on 30 May 1987, the same year."]
];
const T9B = [
  ["Hindi Divas","14 September","On 14 September 1949 the Constituent Assembly adopted Hindi in Devanagari."],
  ["World Hindi Day","10 January","The first World Hindi Conference opened at Nagpur on 10 January 1975."],
  ["International Mother Language Day","21 February","A UNESCO day (1999) that remembers the students killed in Dhaka on 21 February 1952 for the Bengali language."],
  ["Bharatiya Bhasha Divas","11 December","The birthday of the Tamil poet Subramania Bharati; marked by the Ministry of Education with the Bharatiya Bhasha Utsav."],
  ["Marathi Bhasha Gaurav Din","27 February","The birthday of the poet Kusumagraj (V. V. Shirwadkar)."],
  ["Telugu Language Day","29 August","The birthday of Gidugu Venkata Ramamurthy, who fought for writing Telugu as it is spoken."],
  ["Konkani Manyata Divas","20 August","On 20 August 1992 Parliament passed the 71st Amendment, which put Konkani in the Eighth Schedule."],
  ["Hindi Journalism Day","30 May","Udant Martand, the first Hindi newspaper, appeared in Calcutta on 30 May 1826 — its 200th anniversary fell in 2026."],
  ["Utkal Divas","1 April","Odisha became a separate province on language lines in 1936."],
  ["Karnataka Rajyotsava","1 November","The day the Kannada-speaking state was formed in 1956."]
];
const T9C = [
  ["Hindi","Indo-Aryan"],["Bengali","Indo-Aryan"],["Konkani","Indo-Aryan"],["Bhili","Indo-Aryan"],["Assamese","Indo-Aryan"],
  ["Tamil","Dravidian"],["Telugu","Dravidian"],["Tulu","Dravidian"],["Gondi","Dravidian"],["Kurukh","Dravidian"],["Toda","Dravidian"],
  ["Santhali","Austro-Asiatic"],["Mundari","Austro-Asiatic"],["Ho","Austro-Asiatic"],["Khasi","Austro-Asiatic"],["Nicobarese","Austro-Asiatic"],
  ["Bodo","Tibeto-Burman"],["Manipuri","Tibeto-Burman"],["Mizo","Tibeto-Burman"],["Garo","Tibeto-Burman"],["Kokborok","Tibeto-Burman"],["Lepcha","Tibeto-Burman"]
].map(r => [r[0], r[1], ""]);

LESSONS.push(
{id:"T9", heat:2, title:"Linguistic states and language facts", hi:"भाषाई राज्य और भाषा से जुड़े तथ्य", blocks:[
  {k:"hot", h:"Asked most: <b>Andhra State (1953)</b> and <b>Potti Sriramulu</b>, the <b>States Reorganisation Commission</b>, <b>Odisha (1936)</b> as the first language province, the movements behind Maharashtra, Gujarat and the Punjabi Suba, the four <b>language families</b>, and the language days — <b>Hindi Divas, World Hindi Day, Mother Language Day</b>."},
  {k:"story", h:"<p>Long before independence, the Congress had promised provinces drawn by language; <b>Odisha</b> became the first such province in <b>1936</b>. After 1947, Nehru feared that language states would split the new nation. The <b>Dhar Commission</b> (1948) and the <b>JVP Committee</b> — Jawaharlal Nehru, Vallabhbhai Patel and Pattabhi Sitaramayya — both advised waiting.</p><p>The Telugu speakers of Madras State would not wait. On <b>19 October 1952</b> the Gandhian <b>Potti Sriramulu</b> began a fast for a Telugu state. He died on <b>15 December 1952</b>, after 58 days; riots followed, and on 19 December Nehru gave in. <b>Andhra State</b> was born on <b>1 October 1953</b>, with <b>Kurnool</b> as its capital. Sriramulu is remembered as <b>Amarajeevi</b>, the immortal one.</p><p>Within weeks the government set up the <b>States Reorganisation Commission</b> under <b>Fazl Ali</b>, with K. M. Panikkar and H. N. Kunzru. Its report led to the <b>States Reorganisation Act, 1956</b>, and the map was redrawn on <b>1 November 1956</b>. Language movements kept going: <b>Samyukta Maharashtra</b> and <b>Mahagujarat</b> split Bombay State in 1960, and the <b>Punjabi Suba</b> movement split Punjab in 1966.</p>", key:"Odisha 1936 (first language province); Potti Sriramulu (58-day fast, died 15 Dec 1952) → Andhra State 1 Oct 1953 (Kurnool); Fazl Ali SRC → 1 Nov 1956; Bombay split 1960; Punjab 1966."},
  {k:"table", title:"Language movements and what they won", head:["Movement","Result","Remember"], rows: T9A.map(r => [r[0], r[1], r[2]])},
  {k:"tl", title:"Language and the map", rows:[["1936","Odisha — the first province on language (1 April)"],["1948","Dhar Commission and the JVP Committee advise against language states"],["1952","Potti Sriramulu dies after a 58-day fast (15 December)"],["1953","Andhra State (1 October); SRC set up (December)"],["1955","SRC report"],["1956","States Reorganisation Act — 1 November"],["1960","Maharashtra and Gujarat (1 May)"],["1966","Punjab and Haryana (1 November)"],["1969","Madras State renamed Tamil Nadu"],["1973","Mysore renamed Karnataka"],["1987","Konkani made Goa's official language; Goa a state"],["2011","Orissa renamed Odisha"]]},
  {k:"facts", title:"More languages for a state or UT", rows:[
    ["Himachal Pradesh","Sanskrit became the second official language in 2019 (Uttarakhand had done it first, in 2010)"],
    ["Jammu and Kashmir","The Official Languages Act, 2020 made Kashmiri, Dogri, Urdu, Hindi and English its official languages"],
    ["Ladakh","The Ladakh Official Languages Regulation, 2025 named English, Hindi, Urdu, Bhoti and Purgi"],
    ["Tripura","Bengali, Kokborok and English"],
    ["Mizoram","Mizo and English"],
    ["Sikkim","About a dozen official languages, among them Nepali, Bhutia (Sikkimese), Lepcha and Limbu"],
    ["Jharkhand","Hindi, with many second languages such as Santhali, Mundari, Ho, Kharia, Kurukh, Bengali, Odia and Urdu"]
  ]},
  {k:"table", title:"Language days", head:["Day","Date","Why"], rows: T9B.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Language families", head:["Language","Family","Note"], rows: T9C},
  {k:"facts", title:"Families in brief (Census 2011, share of speakers)", rows:[
    ["Indo-Aryan","About 78% — Hindi, Bengali, Marathi, Gujarati, Punjabi, Odia, Assamese and others"],
    ["Dravidian","About 20% — Tamil, Telugu, Kannada, Malayalam, Tulu, Gondi, Kurukh"],
    ["Austro-Asiatic","About 1% — the Munda languages (Santhali, Mundari, Ho), Khasi and Nicobarese"],
    ["Tibeto-Burman","About 1% — Bodo, Manipuri, Mizo, Garo, Kokborok, the Naga languages"]
  ]},
  {k:"facts", title:"Language firsts and facts", rows:[
    ["First Hindi newspaper","Udant Martand, Calcutta, 30 May 1826 — edited by Jugal Kishore Shukla"],
    ["Sanskrit daily","Sudharma of Mysuru, published since 1970"],
    ["A village that speaks Sanskrit","Mattur, near Shivamogga in Karnataka"],
    ["First classical language","Tamil (2004)"],
    ["First linguistic state after 1947","Andhra State (1953)"],
    ["Bhasha Sangam","A Ministry of Education programme (and app) for learning everyday sentences in all 22 scheduled languages, under Ek Bharat Shreshtha Bharat"],
    ["Three-language formula","From the National Policy on Education, 1968; NEP 2020 keeps it, with teaching in the mother tongue at least to Class 5 where possible"],
    ["UN decade","2022–2032 is the International Decade of Indigenous Languages"]
  ]},
  {k:"link", h:"Every new state and its year, the zonal councils and the official language of each state are in <b>States & UTs</b> (lessons “How the map was made” and “High courts and official languages”)."},
  {k:"trick", h:"First province vs first state — <b>“O before A”</b>: <b>O</b>disha 1936 (province), <b>A</b>ndhra 1953 (state).<br>SRC trio — <b>“F-P-K”</b>: <b>F</b>azl Ali, <b>P</b>anikkar, <b>K</b>unzru. JVP — <b>J</b>awaharlal, <b>V</b>allabhbhai, <b>P</b>attabhi."},
  {k:"trap", h:"<b>Andhra State</b> (1953, capital Kurnool) is not <b>Andhra Pradesh</b> (1956, capital Hyderabad, when the Telangana region joined). <b>Potti Sriramulu</b> died fasting; the state came <b>after</b> his death. <b>10 January</b> is <b>World</b> Hindi Day; <b>14 September</b> is <b>Hindi Divas</b>. <b>Nicobarese</b> is <b>Austro-Asiatic</b>, though the Nicobarese are of Mongoloid stock."}
], sum:["Odisha (1 April 1936) was the first province formed on language; Andhra State (1 October 1953, Kurnool) the first state after independence.","Potti Sriramulu fasted 58 days and died on 15 December 1952 — ‘Amarajeevi’.","Dhar Commission and JVP Committee (1948) opposed language states; the SRC (Fazl Ali, Panikkar, Kunzru) led to the 1956 Act.","Samyukta Maharashtra and Mahagujarat (Indulal Yagnik) → 1 May 1960; Punjabi Suba → 1966; Tamil Nadu 1969; Karnataka 1973.","Families: Indo-Aryan ~78%, Dravidian ~20%, Austro-Asiatic and Tibeto-Burman ~1% each.","Days: Hindi Divas 14 Sept, World Hindi Day 10 Jan, Mother Language Day 21 Feb, Bharatiya Bhasha Divas 11 Dec."]}
);

pairQs("T9", T9A, { q: t => `What did the ${t} lead to?` });
pairQs("T9", T9B, { q: t => `${t} is observed on:` });

QB.push(
["T9","Potti Sriramulu died in 1952 after fasting for a separate state for which language?",["Telugu","Tamil","Kannada","Marathi"],"He fasted for a Telugu-speaking state carved out of Madras State.",""],
["T9","For how many days did Potti Sriramulu fast before he died?",["58","21","40","100"],"He began on 19 October and died on 15 December 1952 — 58 days.",""],
["T9","What was the capital of Andhra State when it was formed in 1953?",["Kurnool","Hyderabad","Amaravati","Visakhapatnam"],"Kurnool; Hyderabad became the capital when Andhra Pradesh was formed in 1956.",""],
["T9","By what title is Potti Sriramulu remembered?",["Amarajeevi","Andhra Kesari","Deshbandhu","Rashtrakavi"],"Amarajeevi means the immortal one. Andhra Kesari was T. Prakasam, Andhra State's first Chief Minister.",""],
["T9","Which of these was NOT a member of the States Reorganisation Commission?",["Pattabhi Sitaramayya","Fazl Ali","K. M. Panikkar","H. N. Kunzru"],"Pattabhi Sitaramayya sat on the 1948 JVP Committee with Nehru and Patel.",""],
["T9","The JVP Committee of 1948 on linguistic states was made up of Nehru, Patel and:",["Pattabhi Sitaramayya","Fazl Ali","S. K. Dhar","Rajendra Prasad"],"The initials stand for Jawaharlal, Vallabhbhai and Pattabhi.",""],
["T9","Who led the Mahagujarat movement for a separate Gujarati-speaking state?",["Indulal Yagnik","Morarji Desai","Vallabhbhai Patel","Jivraj Mehta"],"Indulal Yagnik led the Mahagujarat Janata Parishad; Gujarat was formed on 1 May 1960.",""],
["T9","Madras State was renamed Tamil Nadu in:",["1969","1956","1972","1950"],"The new name came into effect on 14 January 1969, under C. N. Annadurai.",""],
["T9","The state of Mysore was renamed Karnataka in:",["1973","1956","1966","1981"],"It was renamed on 1 November 1973.",""],
["T9","In 2019, which state made Sanskrit its second official language?",["Himachal Pradesh","Uttarakhand","Uttar Pradesh","Madhya Pradesh"],"Himachal Pradesh followed Uttarakhand, which had done so in 2010.",""],
["T9","Under the Jammu and Kashmir Official Languages Act, 2020, how many official languages does the UT have?",["Five","Two","Three","Seven"],"Kashmiri, Dogri, Urdu, Hindi and English.",""],
["T9","Which two languages of Ladakh were named official languages in 2025, besides English, Hindi and Urdu?",["Bhoti and Purgi","Balti and Shina","Dogri and Kashmiri","Ladakhi and Brokskat"],"The Ladakh Official Languages Regulation, 2025 named English, Hindi, Urdu, Bhoti and Purgi.",""],
["T9","Udant Martand, the first Hindi newspaper, was published in 1826 from:",["Calcutta","Benares","Allahabad","Delhi"],"Jugal Kishore Shukla brought it out in Calcutta on 30 May 1826.",""],
["T9","Sudharma, published from Mysuru since 1970, is a daily newspaper in which language?",["Sanskrit","Kannada","Pali","Tulu"],"It is known as the only Sanskrit daily newspaper.",""],
["T9","Mattur, a village where Sanskrit is spoken in daily life, is in which state?",["Karnataka","Uttarakhand","Madhya Pradesh","Odisha"],"Mattur is near Shivamogga in Karnataka.",""],
["T9","Bhasha Sangam, which teaches everyday sentences in all 22 scheduled languages, is run by which ministry?",["Ministry of Education","Ministry of Culture","Ministry of Information and Broadcasting","Ministry of Home Affairs"],"It is part of Ek Bharat Shreshtha Bharat; an app was built with MyGov.",""],
["T9","Roughly what share of Indians speak Dravidian languages (Census 2011)?",["About one-fifth","About three-quarters","About one-tenth","About half"],"About 20%; Indo-Aryan languages account for about 78%.",""],
["T9","The UN has declared 2022–2032 the International Decade of:",["Indigenous Languages","Mother Tongues","Endangered Scripts","Language Learning"],"UNESCO leads the Decade, which follows the International Year of Indigenous Languages (2019).",""]
);

LASTMOMENT.push(
{t:"Linguistic states", era:["tl"], rows:[["1936","Odisha — first language province"],["1952","Potti Sriramulu — 58 days"],["1953","Andhra State — Kurnool"],["SRC","Fazl Ali, Panikkar, Kunzru"],["1960","Maharashtra, Gujarat"],["1966","Punjabi Suba → Haryana"]]},
{t:"Language days", era:["tl"], rows:[["10 Jan","World Hindi Day"],["21 Feb","Mother Language Day"],["27 Feb","Marathi Bhasha Gaurav Din"],["30 May","Hindi Journalism Day"],["14 Sept","Hindi Divas"],["11 Dec","Bharatiya Bhasha Divas"]]}
);
TILES.push(["58","Days of Potti Sriramulu's fast","tl"],["1953","Andhra State","tl"],["1936","Odisha province","tl"]);

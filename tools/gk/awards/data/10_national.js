/* Part 1 · India's national honours — A1 Bharat Ratna, A2 Padma awards, A3 literary awards (India and the world). */
const A1 = [
  ["C. Rajagopalachari","1954","Among the first three recipients; India's last Governor-General.","p"],
  ["Sarvepalli Radhakrishnan","1954","Among the first three; philosopher and second President.","p"],
  ["C. V. Raman","1954","Among the first three; Nobel physicist.","p"],
  ["Jawaharlal Nehru","1955","",""],
  ["M. Visvesvaraya","1955","Engineer — his birthday is Engineers' Day.",""],
  ["Dhondo Keshav Karve","1958","Received it at 100 — the oldest recipient.","p"],
  ["Rajendra Prasad","1962","",""],
  ["Lal Bahadur Shastri","1966","The first posthumous award.","p"],
  ["Indira Gandhi","1971","The first woman to receive it.","p"],
  ["Mother Teresa","1980","The first naturalised citizen to receive it.","p"],
  ["Khan Abdul Ghaffar Khan","1987","The first non-Indian recipient ('Frontier Gandhi').","p"],
  ["M. G. Ramachandran","1988","The first film actor to receive it (posthumous).",""],
  ["B. R. Ambedkar","1990","Posthumous.","p"],
  ["Nelson Mandela","1990","Second non-Indian recipient.","p"],
  ["Sardar Vallabhbhai Patel","1991","Posthumous.",""],
  ["J. R. D. Tata","1992","The first industrialist to receive it.",""],
  ["Satyajit Ray","1992","",""],
  ["A. P. J. Abdul Kalam","1997","Received it before becoming President.","p"],
  ["M. S. Subbulakshmi","1998","The first musician to receive it.","p"],
  ["Amartya Sen","1999","",""],
  ["Lata Mangeshkar","2001","",""],
  ["Bismillah Khan","2001","Shehnai maestro.",""],
  ["Bhimsen Joshi","2009","",""],
  ["Sachin Tendulkar","2014","Youngest recipient and the first sportsperson.","p"],
  ["C. N. R. Rao","2014","Chemist — received it with Sachin.",""],
  ["Atal Bihari Vajpayee","2015","",""],
  ["Madan Mohan Malaviya","2015","Posthumous; founder of BHU.",""],
  ["Pranab Mukherjee","2019","",""],
  ["Bhupen Hazarika","2019","Posthumous.",""],
  ["Nanaji Deshmukh","2019","Posthumous.",""],
  ["Karpoori Thakur","2024","Posthumous; former Bihar CM.","p"],
  ["L. K. Advani","2024","","p"],
  ["P. V. Narasimha Rao","2024","Posthumous.","p"],
  ["Chaudhary Charan Singh","2024","Posthumous.","p"],
  ["M. S. Swaminathan","2024","Posthumous; father of India's Green Revolution.","p"]
];
const A2V = [
  ["Dharmendra","2026","Actor — posthumous.",""],
  ["K. T. Thomas","2026","Jurist, former Supreme Court judge.",""],
  ["N. Rajam","2026","Violinist.",""],
  ["P. Narayanan","2026","Literature and education.",""],
  ["V. S. Achuthanandan","2026","Former Kerala CM — posthumous.",""],
  ["M. T. Vasudevan Nair","2025","Malayalam writer — posthumous.",""],
  ["Osamu Suzuki","2025","Japanese industrialist (Suzuki Motor) — posthumous.",""],
  ["Sharda Sinha","2025","Bhojpuri folk singer — posthumous.",""],
  ["Kumudini Lakhia","2025","Kathak dancer.",""],
  ["L. Subramaniam","2025","Violinist.",""],
  ["Vyjayanthimala","2024","Actor and dancer.",""],
  ["Chiranjeevi","2024","Telugu actor.",""],
  ["M. Venkaiah Naidu","2024","Former Vice-President.",""],
  ["Bindeshwar Pathak","2024","Founder of Sulabh International — posthumous.",""],
  ["Padma Subrahmanyam","2024","Bharatanatyam dancer.",""]
];
const A3 = [
  ["Jnanpith Award","India's highest literary award","Instituted 1961 by the Bharatiya Jnanpith; first given in 1965.","p"],
  ["Sahitya Akademi Award","Given by India's National Academy of Letters in 24 languages","The Akademi was set up in 1954.","p"],
  ["Saraswati Samman","K. K. Birla Foundation award for literature in any Indian language","Started 1991; first winner Harivansh Rai Bachchan.","p"],
  ["Vyas Samman","K. K. Birla Foundation award for Hindi literature","Started 1991.",""],
  ["Moortidevi Award","Bharatiya Jnanpith award for Indian philosophy and culture in literature","",""],
  ["Booker Prize","For the best novel written in English (UK)","Started 1969.","p"],
  ["International Booker Prize","For a book translated into English, shared by author and translator","",""],
  ["Pulitzer Prize","USA — journalism, literature and music","Started 1917.","p"]
];
const A3J = [
  ["G. Sankara Kurup","First Jnanpith (1965)","Malayalam — Odakkuzhal.","p"],
  ["Ashapoorna Devi","First woman to win the Jnanpith (1976)","Bengali.","p"],
  ["Sumitranandan Pant","First Hindi writer to win the Jnanpith (1968)","",""],
  ["Amitav Ghosh","First English-language writer to win the Jnanpith (2018)","",""],
  ["Damodar Mauzo","57th Jnanpith (2022)","Konkani.",""],
  ["Gulzar","58th Jnanpith (2023), shared","Urdu — shared with Jagadguru Rambhadracharya (Sanskrit).","p"],
  ["Vinod Kumar Shukla","59th Jnanpith (2024)","Hindi — the first from Chhattisgarh.","p"],
  ["Amrita Pritam","First woman to win the Sahitya Akademi Award (1956)","Punjabi.",""],
  ["Navtej Sarna","Sahitya Akademi Award 2025 (English)","For Crimson Spring; announced March 2026.",""],
  ["Mamta Kalia","Sahitya Akademi Award 2025 (Hindi)","For the memoir Jeete Jee Allahabad.",""],
  ["Jhumpa Lahiri","Pulitzer Prize for Fiction (2000)","For Interpreter of Maladies.","p"],
  ["Siddhartha Mukherjee","Pulitzer Prize for General Non-Fiction (2011)","For The Emperor of All Maladies.",""],
  ["Danish Siddiqui","Pulitzer Prize for Feature Photography (2018 and 2022)","The 2022 prize was posthumous.",""],
  ["Gobind Behari Lal","First person of Indian origin to win a Pulitzer (1937)","Journalism.",""]
];

LESSONS.push(
{id:"A1", heat:3, title:"Bharat Ratna", hi:"भारत रत्न", blocks:[
  {k:"hot", h:"Very frequent: the <b>first three</b> recipients (1954), <b>firsts</b> (first woman, first posthumous, first foreigner, youngest), the <b>2024 five</b>, and facts about the award itself (peepal leaf, no money, at most three a year)."},
  {k:"story", h:"<p>The <b>Bharat Ratna</b>, India's highest civilian honour, was instituted on <b>2 January 1954</b>. The first three went that year to <b>C. Rajagopalachari</b>, <b>S. Radhakrishnan</b> and <b>C. V. Raman</b>. It is shaped like a <b>peepal leaf</b> with a sun on it, carries <b>no money</b>, and is normally limited to <b>three a year</b> — though five were announced in 2024.</p><p>Its 'firsts' are favourites: <b>Lal Bahadur Shastri</b> (first posthumous, 1966), <b>Indira Gandhi</b> (first woman, 1971), <b>Mother Teresa</b> (first naturalised citizen, 1980), <b>Khan Abdul Ghaffar Khan</b> (first non-Indian, 1987), <b>Sachin Tendulkar</b> (youngest and first sportsperson, 2014). As of 2026 there are <b>53</b> recipients; none were named in 2025.</p>", key:"1954 first three: Rajaji, Radhakrishnan, Raman. 2024 five: Karpoori Thakur, Advani, Narasimha Rao, Charan Singh, Swaminathan."},
  {k:"facts", title:"About the award", rows:[
    ["Instituted","2 January 1954"],
    ["Design","A bronze peepal leaf with the sun and 'Bharat Ratna' in Devanagari"],
    ["Money","None — only a sanad (certificate) and the medallion"],
    ["How many a year","Normally at most three (five in 2024)"],
    ["Who recommends","The Prime Minister, to the President"],
    ["Posthumous","Allowed since 1955; first posthumous award 1966 (Shastri)"],
    ["Total (as of 2026)","53 recipients; the 2024 awardees are the latest"]
  ]},
  {k:"table", title:"Recipients to remember", head:["Recipient","Year","Note"], rows: A1.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"First three — <b>“R-R-R”</b>: Rajagopalachari, Radhakrishnan, Raman. Foreigners — <b>“Khan and Mandela”</b> (1987, 1990); Mother Teresa was a naturalised Indian."},
  {k:"trap", h:"<b>Mother Teresa</b> was a naturalised citizen — the first <b>non-Indian</b> was <b>Khan Abdul Ghaffar Khan</b>. The first posthumous was <b>Shastri</b>, not Gandhi (Gandhi never got it). <b>Sachin</b> is the youngest; the oldest was <b>D. K. Karve</b>, at 100."}
], sum:["Bharat Ratna instituted 2 January 1954; first recipients Rajagopalachari, Radhakrishnan and C. V. Raman.","It is a peepal leaf with no money; normally at most three a year.","Firsts: Shastri first posthumous (1966), Indira Gandhi first woman (1971), Mother Teresa first naturalised citizen (1980), Khan Abdul Ghaffar Khan first non-Indian (1987).","Sachin Tendulkar (2014) is the youngest and first sportsperson; D. K. Karve the oldest.","2024: Karpoori Thakur, L. K. Advani, P. V. Narasimha Rao, Charan Singh, M. S. Swaminathan — 53 recipients in all."]},

{id:"A2", heat:3, title:"Padma awards", hi:"पद्म पुरस्कार", blocks:[
  {k:"hot", h:"Asked in current affairs every year: the <b>Padma Vibhushan</b> recipients of the year, the <b>total number</b> of awards, and basic facts — three tiers, announced on the <b>eve of Republic Day</b>."},
  {k:"story", h:"<p>Below the Bharat Ratna come the three <b>Padma</b> awards, also started in 1954: <b>Padma Vibhushan</b> (exceptional service), <b>Padma Bhushan</b> (high order) and <b>Padma Shri</b> (distinguished service). They are announced every year on the <b>eve of Republic Day</b> and presented by the President at Rashtrapati Bhavan in March–April.</p><p>For <b>2026</b> the President approved <b>131</b> awards — 5 Padma Vibhushan, 13 Padma Bhushan and 113 Padma Shri. The five Vibhushans went to actor <b>Dharmendra</b> (posthumous), jurist <b>K. T. Thomas</b>, violinist <b>N. Rajam</b>, writer <b>P. Narayanan</b> and former Kerala CM <b>V. S. Achuthanandan</b> (posthumous).</p>", key:"Padma Vibhushan > Padma Bhushan > Padma Shri; 2026: 131 awards (5 + 13 + 113)."},
  {k:"facts", title:"About the Padma awards", rows:[
    ["Started","1954 (renamed to today's names in 1955)"],
    ["Order","Padma Vibhushan > Padma Bhushan > Padma Shri"],
    ["Announced","On the eve of Republic Day (25 January)"],
    ["Presented by","The President, at Rashtrapati Bhavan"],
    ["Selected by","The Padma Awards Committee, set up by the Prime Minister each year"],
    ["2026","131 awards: 5 Padma Vibhushan, 13 Padma Bhushan, 113 Padma Shri"],
    ["Padma Bhushan 2026 (some)","Alka Yagnik, Mammootty, Bhagat Singh Koshyari, Uday Kotak, Vijay Amritraj"],
    ["2025","139 awards: 7 Padma Vibhushan, 19 Padma Bhushan, 113 Padma Shri"]
  ]},
  {k:"table", title:"Padma Vibhushan recipients (recent years)", head:["Recipient","Year","Field / note"], rows: A2V.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Order by length — <b>Vibhushan (longest) > Bhushan > Shri (shortest)</b>: the longer the name, the higher the honour."},
  {k:"trap", h:"Padma awards are <b>not</b> titles — the Supreme Court said they cannot be used as prefixes or suffixes to a name (Article 18). They are announced on <b>25 January</b>, not 26 January."}
], sum:["Padma Vibhushan, Padma Bhushan and Padma Shri began in 1954 and are announced on the eve of Republic Day.","2026: 131 awards — 5 Padma Vibhushan, 13 Padma Bhushan, 113 Padma Shri.","Padma Vibhushan 2026: Dharmendra (posthumous), K. T. Thomas, N. Rajam, P. Narayanan, V. S. Achuthanandan (posthumous).","Padma Vibhushan 2025 included M. T. Vasudevan Nair, Osamu Suzuki and Sharda Sinha (all posthumous).","Padma Vibhushan 2024 included Vyjayanthimala, Chiranjeevi, M. Venkaiah Naidu, Bindeshwar Pathak and Padma Subrahmanyam."]},

{id:"A3", heat:3, title:"Literary awards — India and the world", hi:"साहित्यिक पुरस्कार", blocks:[
  {k:"hot", h:"Regulars: <b>Jnanpith</b> (first winner, first woman, latest winners), <b>Sahitya Akademi</b> (24 languages), <b>Saraswati Samman</b> and <b>Vyas Samman</b> (K. K. Birla Foundation), the <b>Booker</b> and <b>Pulitzer</b> with their Indian winners."},
  {k:"story", h:"<p>India's top literary prize, the <b>Jnanpith</b>, is given by the Bharatiya Jnanpith trust. The first went to Malayalam poet <b>G. Sankara Kurup</b> in 1965; the first woman was Bengali novelist <b>Ashapoorna Devi</b>; <b>Amitav Ghosh</b> became the first English writer to win it in 2018. Recent winners: <b>Gulzar</b> and <b>Jagadguru Rambhadracharya</b> (2023), and Hindi writer <b>Vinod Kumar Shukla</b> (2024).</p><p>The <b>Sahitya Akademi</b> honours one book a year in each of 24 languages. The <b>K. K. Birla Foundation</b> gives the Saraswati Samman (any Indian language) and the Vyas Samman (Hindi). Abroad, Indians have won the <b>Booker</b> (Rushdie, Roy, Kiran Desai, Adiga), the <b>International Booker</b> (Geetanjali Shree, Banu Mushtaq) and the <b>Pulitzer</b> (Jhumpa Lahiri).</p>", key:"Jnanpith first: G. Sankara Kurup (1965); first woman: Ashapoorna Devi (1976); first English: Amitav Ghosh (2018)."},
  {k:"table", title:"The awards", head:["Award","What it is","Note"], rows: A3.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Winners to remember", head:["Winner","Award","Note"], rows: A3J.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>Birla gives two</b>: Saraswati (all languages) and Vyas (Hindi). <b>Jnanpith 2023 was shared</b> — Gulzar (Urdu) and Rambhadracharya (Sanskrit)."},
  {k:"trap", h:"The <b>Jnanpith</b> is given by a private trust (Bharatiya Jnanpith), not the government. The <b>Sahitya Akademi</b> recognises <b>24 languages</b> (the 22 scheduled ones plus English and Rajasthani). The 60th Jnanpith (2025) was reported for Tamil poet R. Vairamuthu — check the official announcement."}
], sum:["Jnanpith — India's highest literary award (Bharatiya Jnanpith); first winner G. Sankara Kurup (1965).","First woman Jnanpith winner: Ashapoorna Devi (1976); first English: Amitav Ghosh (2018); 2024: Vinod Kumar Shukla.","Sahitya Akademi Award covers 24 languages; 2025 English — Navtej Sarna, Hindi — Mamta Kalia.","Saraswati Samman and Vyas Samman are given by the K. K. Birla Foundation (from 1991).","Booker (1969) for English novels; International Booker for translations; Pulitzer (1917) — Jhumpa Lahiri won for fiction in 2000."]}
);

pairQs("A1", A1, { q: t => `In which year was ${t} awarded the Bharat Ratna?` });
pairQs("A2", A2V, { q: t => `In which year did ${t} receive the Padma Vibhushan?`, extra: ["2023", "2022"] });
pairQs("A3", A3, { q: t => `The ${t} is:`, rq: a => `Which award is described as: ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("A3", A3J, { q: t => `${t} is known for winning the:`, rq: a => `Who won the ${a}?` });

QB.push(
["A1","Who among the following were the first recipients of the Bharat Ratna in 1954?",["C. Rajagopalachari, S. Radhakrishnan and C. V. Raman","Nehru, Patel and Ambedkar","Rajendra Prasad, Nehru and Visvesvaraya","Gandhi, Nehru and Tagore"],"The award was instituted on 2 January 1954.","p"],
["A1","Who was the first woman to receive the Bharat Ratna?",["Indira Gandhi","Mother Teresa","Lata Mangeshkar","Aruna Asaf Ali"],"Indira Gandhi received it in 1971.","p"],
["A1","Who was the first non-Indian to receive the Bharat Ratna?",["Khan Abdul Ghaffar Khan","Nelson Mandela","Mother Teresa","Dalai Lama"],"In 1987. Mother Teresa (1980) was a naturalised Indian citizen.","p"],
["A1","Who is the youngest recipient of the Bharat Ratna?",["Sachin Tendulkar","Rajiv Gandhi","Lata Mangeshkar","C. N. R. Rao"],"Sachin received it in 2014 at the age of 40.","p"],
["A1","The Bharat Ratna medallion is shaped like a:",["Peepal leaf","Lotus","Star","Ashoka Chakra"],"A bronze peepal leaf with a sun on the front.","p"],
["A1","Who was the first person to receive the Bharat Ratna posthumously?",["Lal Bahadur Shastri","Mahatma Gandhi","Sardar Patel","B. R. Ambedkar"],"Shastri was honoured in 1966; Gandhi has never received it.","p"],
["A2","How many Padma awards were approved for 2026?",["131","139","132","119"],"5 Padma Vibhushan, 13 Padma Bhushan and 113 Padma Shri.",""],
["A2","Which is the highest of the three Padma awards?",["Padma Vibhushan","Padma Bhushan","Padma Shri","Padma Ratna"],"Order: Vibhushan, Bhushan, Shri.","p"],
["A3","Who won the first Jnanpith Award (1965)?",["G. Sankara Kurup","Tarashankar Bandopadhyay","Sumitranandan Pant","Kuppali Venkatappa Puttappa"],"For Odakkuzhal (Malayalam).","p"],
["A3","The Saraswati Samman is given by the:",["K. K. Birla Foundation","Bharatiya Jnanpith","Sahitya Akademi","Ministry of Culture"],"It also gives the Vyas Samman and the Bihari Puraskar.","p"]
);

LASTMOMENT.push(
{t:"Bharat Ratna", era:["aw"], rows:[["Instituted","2 Jan 1954"],["First three","Rajaji, Radhakrishnan, Raman"],["First posthumous","Shastri (1966)"],["First woman","Indira Gandhi (1971)"],["First non-Indian","Khan Abdul Ghaffar Khan (1987)"],["Youngest","Sachin (2014)"],["2024","Karpoori, Advani, Rao, Charan Singh, Swaminathan"],["Total","53"]]},
{t:"Padma and literature", era:["aw"], rows:[["Padma 2026","131 (5 + 13 + 113)"],["PV 2026","Dharmendra, K. T. Thomas, N. Rajam, P. Narayanan, Achuthanandan"],["First Jnanpith","G. Sankara Kurup (1965)"],["First woman Jnanpith","Ashapoorna Devi"],["Jnanpith 2024","Vinod Kumar Shukla"],["Jnanpith 2023","Gulzar, Rambhadracharya"],["Saraswati / Vyas","K. K. Birla Foundation"],["Sahitya Akademi","24 languages"]]}
);
TILES.push(["1954","Bharat Ratna and Padma awards begin","aw"],["53","Bharat Ratna recipients","aw"],["131","Padma awards 2026","aw"],["1965","First Jnanpith","aw"],["24","Sahitya Akademi languages","aw"],["5","Bharat Ratnas in 2024","aw"]);

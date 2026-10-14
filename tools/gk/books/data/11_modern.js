/* Part 2 · Modern Indian writing — B4 Hindi and regional, with pen names; B5 Indian writing in English; B6 autobiographies. */
const B4 = [
  ["Godan","Premchand","His last complete novel (1936); also Gaban, Nirmala, Rangbhoomi.","p"],
  ["Kamayani","Jaishankar Prasad","Epic poem, a pillar of Chhayavad.","p"],
  ["Madhushala","Harivansh Rai Bachchan","'The Tavern' — 135 quatrains.","p"],
  ["Rashmirathi","Ramdhari Singh Dinkar","Karna's story; Dinkar won the Jnanpith for Urvashi.","p"],
  ["Bharat Bharati","Maithili Sharan Gupt","He was called 'Rashtrakavi' by Gandhi.","p"],
  ["Yama","Mahadevi Varma","Won the Jnanpith (1982).",""],
  ["Maila Aanchal","Phanishwar Nath Renu","Regional novel set in Purnia, Bihar.","p"],
  ["Tamas","Bhisham Sahni","Partition novel; Sahitya Akademi 1975.",""],
  ["Raag Darbari","Shrilal Shukla","Satire on village politics.","p"],
  ["Gunahon Ka Devta","Dharamvir Bharati","He also wrote the verse play Andha Yug.",""],
  ["Pinjar","Amrita Pritam","Punjabi novel on Partition; she was the first woman to win the Sahitya Akademi Award.","p"],
  ["Jhootha Sach","Yashpal","",""],
  ["Shekhar: Ek Jeevani","Agyeya","",""],
  ["Chandrakanta","Devaki Nandan Khatri","Fantasy novel that made people learn Hindi to read it.",""],
  ["Devdas","Sarat Chandra Chattopadhyay","Bengali novel; he also wrote Parineeta.","p"],
  ["Pather Panchali","Bibhutibhushan Bandyopadhyay","Bengali novel; filmed by Satyajit Ray.","p"],
  ["Chemmeen","Thakazhi Sivasankara Pillai","Malayalam novel of fishing folk.",""],
  ["Samskara","U. R. Ananthamurthy","Kannada novel.",""],
  ["Yayati","V. S. Khandekar","Marathi novel; Jnanpith 1974.",""],
  ["Mrityunjay","Shivaji Sawant","Marathi novel on Karna.",""],
  ["Kitne Pakistan","Kamleshwar","Sahitya Akademi 2003.",""],
  ["Aadha Gaon","Rahi Masoom Raza","",""],
  ["Odakkuzhal","G. Sankara Kurup","Malayalam poems — won the first Jnanpith Award (1965).","p"],
  ["Ramayana Darshanam","Kuvempu","Kannada epic; Jnanpith 1967.",""],
  ["Naukar ki Kameez","Vinod Kumar Shukla","Hindi novel; the author won the 59th Jnanpith (2024).",""]
];
const B4P = [
  ["Premchand","Dhanpat Rai Srivastava","",""],["Nirala","Suryakant Tripathi","",""],["Dinkar","Ramdhari Singh","",""],
  ["Gulzar","Sampooran Singh Kalra","",""],["Agyeya","Sachchidananda Hirananda Vatsyayan","",""],["Firaq Gorakhpuri","Raghupati Sahay","",""],
  ["Kuvempu","K. V. Puttappa","",""],["Nagarjun","Vaidyanath Mishra","",""],["Sahir Ludhianvi","Abdul Hayee","",""],
  ["Kaifi Azmi","Athar Husain Rizvi","",""],["Mirza Ghalib","Mirza Asadullah Baig Khan","",""],["Bharatendu","Harishchandra","Father of modern Hindi literature.",""]
];
const B5 = [
  ["Midnight's Children","Salman Rushdie","Booker 1981; also the 'Booker of Bookers'.","p"],
  ["The God of Small Things","Arundhati Roy","Booker 1997.","p"],
  ["The Inheritance of Loss","Kiran Desai","Booker 2006.","p"],
  ["The White Tiger","Aravind Adiga","Booker 2008.","p"],
  ["A Suitable Boy","Vikram Seth","One of the longest English novels.","p"],
  ["The Shadow Lines","Amitav Ghosh","Ghosh was the first English-language writer to win the Jnanpith (2018).","p"],
  ["Interpreter of Maladies","Jhumpa Lahiri","Pulitzer Prize for Fiction, 2000.","p"],
  ["Untouchable","Mulk Raj Anand","Also Coolie.","p"],
  ["Malgudi Days","R. K. Narayan","Stories set in the imaginary town of Malgudi; also The Guide.","p"],
  ["Kanthapura","Raja Rao","A village in the Gandhian movement.",""],
  ["Train to Pakistan","Khushwant Singh","Partition novel.","p"],
  ["Delhi: A Novel","Khushwant Singh","","p|SSC CHSL 2021 · 6 Jun 2022 (Shift 1)"],
  ["The Room on the Roof","Ruskin Bond","His first novel, written at 17.",""],
  ["Five Point Someone","Chetan Bhagat","Filmed as 3 Idiots.",""],
  ["The Immortals of Meluha","Amish Tripathi","First of the Shiva Trilogy.",""],
  ["Sacred Games","Vikram Chandra","","p|SSC Selection Post 2024 · 21 Jun 2024 (Shift 2)"],
  ["Sultry Days","Shobhaa De","","p|SSC CHSL 2021 · 31 May 2022 (Shift 3)"],
  ["A House for Mr Biswas","V. S. Naipaul","Naipaul won the Nobel Prize in Literature, 2001.","p"],
  ["Clear Light of Day","Anita Desai","",""],
  ["The Great Indian Novel","Shashi Tharoor","The Mahabharata retold as the freedom struggle.",""],
  ["My Story","Kamala Das","",""],
  ["The Autobiography of an Unknown Indian","Nirad C. Chaudhuri","",""],
  ["Wise and Otherwise","Sudha Murty","",""],
  ["A Fine Balance","Rohinton Mistry","",""],
  ["The Palace of Illusions","Chitra Banerjee Divakaruni","The Mahabharata told by Draupadi.",""],
  ["India After Gandhi","Ramachandra Guha","History of independent India.",""],
  ["The Argumentative Indian","Amartya Sen","Essays; Sen won the Nobel in Economics, 1998.","p"]
];
const B6 = [
  ["Wings of Fire","A. P. J. Abdul Kalam","Autobiography, with Arun Tiwari.","p"],
  ["Ignited Minds","A. P. J. Abdul Kalam","",""],
  ["Long Walk to Freedom","Nelson Mandela","","p"],
  ["Mein Kampf","Adolf Hitler","",""],
  ["Dreams from My Father","Barack Obama","Also The Audacity of Hope and A Promised Land.",""],
  ["Becoming","Michelle Obama","","p"],
  ["I Am Malala","Malala Yousafzai","Youngest Nobel laureate (Peace, 2014).","p"],
  ["My Life","Bill Clinton","",""],
  ["Daughter of the East","Benazir Bhutto","",""],
  ["In the Line of Fire","Pervez Musharraf","",""],
  ["My Truth","Indira Gandhi","",""],
  ["My Country My Life","L. K. Advani","",""],
  ["The Turbulent Years","Pranab Mukherjee","Also The Dramatic Decade and The Coalition Years.",""],
  ["I Dare!","Kiran Bedi","First woman IPS officer.",""],
  ["Exam Warriors","Narendra Modi","Book for students on exam stress.","p"],
  ["One Life Is Not Enough","K. Natwar Singh","",""],
  ["I Do What I Do","Raghuram Rajan","Former RBI Governor.",""],
  ["Matters of Discretion","I. K. Gujral","",""],
  ["The Story of My Life","Helen Keller","Deaf-blind author.",""],
  ["Toward Freedom","Jawaharlal Nehru","Also called 'An Autobiography'.",""],
  ["Lal Salaam","Smriti Irani","Her first novel (2021).",""]
];

LESSONS.push(
{id:"B4", heat:2, title:"Hindi and regional literature, and pen names", hi:"हिंदी व क्षेत्रीय साहित्य और उपनाम", blocks:[
  {k:"hot", h:"Hindi classics (<b>Godan, Kamayani, Madhushala, Rashmirathi, Bharat Bharati, Maila Aanchal, Raag Darbari</b>), famous regional novels, and <b>real names behind pen names</b> (Premchand, Nirala, Dinkar, Gulzar) appear regularly."},
  {k:"story", h:"<p>Hindi writing grew up in a hundred years. <b>Bharatendu Harishchandra</b> is its father. <b>Premchand</b> wrote of villages and farmers (Godan); the <b>Chhayavad</b> poets — Prasad, Nirala, Pant, Mahadevi — made Hindi poetry lyrical; <b>Dinkar</b> roared with national pride; <b>Bachchan</b> sang the Madhushala.</p><p>Many writers are better known by a <b>pen name</b>: Dhanpat Rai is Premchand, Suryakant Tripathi is Nirala, Sampooran Singh Kalra is Gulzar. And every language has its landmark — Bengali Devdas and Pather Panchali, Malayalam Chemmeen, Kannada Samskara, Marathi Yayati.</p>", key:"Godan — Premchand; Kamayani — Prasad; Madhushala — Bachchan; Rashmirathi — Dinkar; Bharat Bharati — Maithili Sharan Gupt."},
  {k:"table", title:"Books and authors", head:["Book","Author","Note"], rows: B4.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Pen names", head:["Known as","Real name","Note"], rows: B4P.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Chhayavad's four pillars — <b>“Pra-Ni-Pa-Ma”</b>: Prasad, Nirala, Pant, Mahadevi. First Jnanpith — <b>G. Sankara Kurup, Odakkuzhal (1965), Malayalam</b>."},
  {k:"trap", h:"<b>Rashmirathi</b> is Dinkar's, but his Jnanpith was for <b>Urvashi</b>. <b>Devdas</b> is Sarat Chandra's (Bengali), not Premchand's. <b>Pinjar</b> is by Amrita Pritam (Punjabi). <b>Andha Yug</b> and <b>Gunahon Ka Devta</b> are both Dharamvir Bharati's."}
], sum:["Godan — Premchand; Kamayani — Jaishankar Prasad; Madhushala — Harivansh Rai Bachchan.","Rashmirathi — Dinkar; Bharat Bharati — Maithili Sharan Gupt; Maila Aanchal — Renu; Raag Darbari — Shrilal Shukla.","Devdas — Sarat Chandra; Pather Panchali — Bibhutibhushan; Pinjar — Amrita Pritam.","Premchand = Dhanpat Rai; Nirala = Suryakant Tripathi; Gulzar = Sampooran Singh Kalra.","The first Jnanpith (1965) went to G. Sankara Kurup for Odakkuzhal."]},

{id:"B5", heat:3, title:"Indian writing in English", hi:"भारतीय अंग्रेज़ी लेखन", blocks:[
  {k:"hot", h:"Very frequent: <b>Booker-winning Indians</b> (Rushdie, Arundhati Roy, Kiran Desai, Adiga), <b>R. K. Narayan's Malgudi</b>, <b>Mulk Raj Anand</b>, <b>Khushwant Singh</b>, <b>Vikram Seth</b>, <b>Amitav Ghosh</b>, <b>Jhumpa Lahiri</b> — and popular names like <b>Shobhaa De</b> and <b>Chetan Bhagat</b>."},
  {k:"story", h:"<p>Indian English fiction began with three friends of the 1930s: <b>Mulk Raj Anand</b> (Untouchable), <b>R. K. Narayan</b> (the gentle town of Malgudi) and <b>Raja Rao</b> (Kanthapura). After Independence came <b>Khushwant Singh</b>'s Partition story Train to Pakistan.</p><p>In 1981 <b>Salman Rushdie</b>'s Midnight's Children won the Booker, and the world started reading India. <b>Arundhati Roy</b> (1997), <b>Kiran Desai</b> (2006) and <b>Aravind Adiga</b> (2008) followed. <b>Jhumpa Lahiri</b> won the Pulitzer, <b>V. S. Naipaul</b> the Nobel, and <b>Amitav Ghosh</b> became the first English writer to win the Jnanpith.</p>", key:"Booker Indians in order: Rushdie 1981, Roy 1997, Kiran Desai 2006, Adiga 2008."},
  {k:"table", title:"Books and authors", head:["Book","Author","Note"], rows: B5.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Booker years — <b>“81 Rushdie, 97 Roy, 06 Desai, 08 Adiga”</b>: <i>Rushdie Rolled Down Alleys</i>. Malgudi = <b>Narayan</b> (both have an 'a-l-g/n' music)."},
  {k:"trap", h:"<b>Kiran Desai</b> (Inheritance of Loss, Booker) is the daughter of <b>Anita Desai</b> (Clear Light of Day). <b>Train to Pakistan</b> is Khushwant Singh, not Bhisham Sahni (Tamas). <b>Interpreter of Maladies</b> won the <b>Pulitzer</b>, not the Booker."}
], sum:["Midnight's Children — Rushdie (Booker 1981); The God of Small Things — Arundhati Roy (1997).","The Inheritance of Loss — Kiran Desai (2006); The White Tiger — Aravind Adiga (2008).","Untouchable — Mulk Raj Anand; Malgudi Days — R. K. Narayan; Kanthapura — Raja Rao; Train to Pakistan — Khushwant Singh.","A Suitable Boy — Vikram Seth; The Shadow Lines — Amitav Ghosh; Interpreter of Maladies — Jhumpa Lahiri (Pulitzer).","Sultry Days — Shobhaa De; Sacred Games — Vikram Chandra; Five Point Someone — Chetan Bhagat."]},

{id:"B6", heat:2, title:"Autobiographies of leaders and public figures", hi:"नेताओं की आत्मकथाएँ", blocks:[
  {k:"hot", h:"Asked often: <b>Wings of Fire</b>, <b>Long Walk to Freedom</b>, <b>Becoming</b>, <b>I Am Malala</b>, <b>Mein Kampf</b>, <b>My Experiments with Truth</b> (in B3), and books by Indian leaders like <b>Pranab Mukherjee, L. K. Advani, Natwar Singh, Kiran Bedi</b>."},
  {k:"story", h:"<p>An autobiography is a life told by the person who lived it. <b>Kalam</b> told his journey from Rameswaram to the missile labs in Wings of Fire. <b>Mandela</b> wrote Long Walk to Freedom about 27 years in prison. <b>Malala</b> told how she was shot for going to school. <b>Michelle Obama</b>'s Becoming became one of the best-selling memoirs ever.</p><p>Indian leaders write too — Pranab Mukherjee's trilogy on his decades in politics, Advani's My Country My Life, and Prime Minister Modi's Exam Warriors for students.</p>", key:"Wings of Fire — Kalam; Long Walk to Freedom — Mandela; Becoming — Michelle Obama; I Am Malala — Malala."},
  {k:"table", title:"Books and authors", head:["Book","Author","Note"], rows: B6.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Kalam's books — <b>“Wings Ignite 2020”</b>: Wings of Fire, Ignited Minds, India 2020."},
  {k:"trap", h:"<b>The Story of My Life</b> is Helen Keller's; <b>My Experiments with Truth</b> is Gandhi's. <b>My Truth</b> is Indira Gandhi's; <b>My Life</b> is Bill Clinton's. <b>Dreams from My Father</b> is Barack's; <b>Becoming</b> is Michelle's."}
], sum:["Wings of Fire and Ignited Minds — A. P. J. Abdul Kalam.","Long Walk to Freedom — Nelson Mandela; I Am Malala — Malala Yousafzai; Becoming — Michelle Obama.","Dreams from My Father — Barack Obama; My Life — Bill Clinton; Daughter of the East — Benazir Bhutto.","My Country My Life — L. K. Advani; The Turbulent Years — Pranab Mukherjee; One Life Is Not Enough — Natwar Singh.","I Dare! — Kiran Bedi; Exam Warriors — Narendra Modi; The Story of My Life — Helen Keller."]}
);

pairQs("B4", B4, { q: t => `Who wrote '${t}'?`, rq: a => `Which of these is a work of ${a}?` });
pairQs("B4", B4P, { q: t => `What was the real name of the writer known as '${t}'?`, rq: a => `${a} was better known by which pen name?` });
pairQs("B5", B5, { q: t => `Who is the author of the novel '${t}'?`, rq: a => `Which book was written by ${a}?` });
pairQs("B6", B6, { q: t => `Whose autobiography / book is '${t}'?`, rq: a => `Which book was written by ${a}?` });

QB.push(
["B4","Who is called the father of modern Hindi literature?",["Bharatendu Harishchandra","Premchand","Mahavir Prasad Dwivedi","Jaishankar Prasad"],"Bharatendu (1850–1885) shaped modern Hindi prose and drama.","p"],
["B4","Who was the first woman to win the Sahitya Akademi Award?",["Amrita Pritam","Mahadevi Varma","Ashapoorna Devi","Kamala Das"],"Amrita Pritam won it in 1956 for Sunehade (Punjabi).",""],
["B4","Maithili Sharan Gupt was given the title:",["Rashtrakavi","Kavi Samrat","Kavi Kokil","Rashtra Ratna"],"Mahatma Gandhi called him Rashtrakavi (national poet).","p"],
["B5","Who was the first Indian-born writer to win the Booker Prize?",["Salman Rushdie","Arundhati Roy","V. S. Naipaul","Kiran Desai"],"Rushdie won in 1981 for Midnight's Children. (Naipaul, born in Trinidad, won in 1971.)","p"],
["B5","Which author created the fictional town of Malgudi?",["R. K. Narayan","Mulk Raj Anand","Raja Rao","Ruskin Bond"],"Malgudi Days, Swami and Friends and The Guide are set there.","p"],
["B5","Amitav Ghosh was the first English-language writer to win which award?",["Jnanpith","Sahitya Akademi","Booker","Pulitzer"],"He received the 54th Jnanpith (2018).",""],
["B6","Wings of Fire was co-written with:",["Arun Tiwari","Srijan Pal Singh","Kuldip Nayar","Khushwant Singh"],"Arun Tiwari co-wrote Kalam's autobiography (1999).",""],
["B6","Nelson Mandela spent about how many years in prison?",["27","17","10","35"],"Released in 1990; he wrote about it in Long Walk to Freedom.",""]
);

LASTMOMENT.push(
{t:"Hindi classics and pen names", era:["bk"], rows:[["Godan","Premchand"],["Kamayani","Jaishankar Prasad"],["Madhushala","Harivansh Rai Bachchan"],["Rashmirathi","Dinkar"],["Bharat Bharati","Maithili Sharan Gupt"],["Premchand","Dhanpat Rai"],["Nirala","Suryakant Tripathi"],["Gulzar","Sampooran Singh Kalra"]]},
{t:"Indian English novels", era:["bk"], rows:[["Midnight's Children","Rushdie, Booker 1981"],["God of Small Things","Arundhati Roy, 1997"],["Inheritance of Loss","Kiran Desai, 2006"],["White Tiger","Aravind Adiga, 2008"],["Malgudi Days","R. K. Narayan"],["Untouchable","Mulk Raj Anand"],["Train to Pakistan","Khushwant Singh"],["Sultry Days","Shobhaa De"]]},
{t:"Autobiographies", era:["bk"], rows:[["Wings of Fire","Kalam"],["Long Walk to Freedom","Mandela"],["Becoming","Michelle Obama"],["I Am Malala","Malala"],["My Country My Life","Advani"],["Turbulent Years","Pranab Mukherjee"],["I Dare!","Kiran Bedi"],["Story of My Life","Helen Keller"]]}
);
TILES.push(["1981","Midnight's Children wins Booker","bk"],["1997","God of Small Things wins Booker","bk"],["2006","Inheritance of Loss wins Booker","bk"],["2008","White Tiger wins Booker","bk"],["1965","First Jnanpith (Odakkuzhal)","bk"],["2001","Naipaul's Nobel","bk"]);

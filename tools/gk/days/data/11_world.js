/* Part 2 · World days — D4 January–April, D5 May–August, D6 September–December, D7 health days.
   Health and environment days live in D7 and D8 only, so no day is asked twice. */
const D4 = [
  ["World Braille Day","4 January","Birth anniversary of Louis Braille.",""],
  ["World Hindi Day","10 January","The first World Hindi Conference was held in Nagpur in 1975.","p"],
  ["International Day of Education","24 January","",""],
  ["World Pulses Day","10 February","",""],
  ["World Radio Day","13 February","Proclaimed by UNESCO.",""],
  ["World Day of Social Justice","20 February","",""],
  ["International Mother Language Day","21 February","Remembers the 1952 language movement in Dhaka; declared by UNESCO.","p"],
  ["International Women's Day","8 March","","p"],
  ["World Consumer Rights Day","15 March","Inspired by J. F. Kennedy's 1962 speech.","p"],
  ["International Day of Happiness","20 March","",""],
  ["World Poetry Day","21 March","",""],
  ["World Theatre Day","27 March","",""],
  ["International Day for Sport for Development and Peace","6 April","",""],
  ["International Day of Human Space Flight","12 April","Yuri Gagarin's flight, 1961.",""],
  ["World Heritage Day (International Day for Monuments and Sites)","18 April","","p"],
  ["World Book and Copyright Day","23 April","Death anniversary of Shakespeare and Cervantes.","p"],
  ["World Intellectual Property Day","26 April","WIPO convention came into force in 1970.","p"],
  ["International Dance Day","29 April","",""]
];
const D5 = [
  ["International Labour Day (May Day)","1 May","","p"],
  ["World Press Freedom Day","3 May","","p"],
  ["World Red Cross Day","8 May","Birth anniversary of Henry Dunant, founder of the Red Cross.","p"],
  ["International Day of Families","15 May","",""],
  ["World Telecommunication and Information Society Day","17 May","ITU was founded on 17 May 1865.",""],
  ["International Museum Day","18 May","",""],
  ["World Milk Day","1 June","Declared by the FAO in 2001; India's National Milk Day is 26 November (Verghese Kurien).","p"],
  ["World Bicycle Day","3 June","",""],
  ["World Day Against Child Labour","12 June","Started by the ILO in 2002.","p"],
  ["World Refugee Day","20 June","",""],
  ["International Day of Yoga","21 June","First observed in 2015, after India's proposal at the UN.","p"],
  ["International Olympic Day","23 June","The IOC was founded on 23 June 1894.",""],
  ["International Day Against Drug Abuse and Illicit Trafficking","26 June","",""],
  ["World Population Day","11 July","Set up by the UNDP's governing council in 1989.","p"],
  ["World Youth Skills Day","15 July","",""],
  ["Nelson Mandela International Day","18 July","Mandela's birthday.",""],
  ["World Chess Day","20 July","FIDE was founded on 20 July 1924.",""],
  ["International Day of Friendship","30 July","",""],
  ["Hiroshima Day","6 August","Atomic bombing of Hiroshima, 1945.",""],
  ["International Day of the World's Indigenous Peoples","9 August","",""],
  ["International Youth Day","12 August","","p"],
  ["World Humanitarian Day","19 August","",""],
  ["World Senior Citizen's Day","21 August","",""],
  ["International Day against Nuclear Tests","29 August","",""]
];
const D6 = [
  ["International Literacy Day","8 September","","p"],
  ["International Day of Democracy","15 September","",""],
  ["International Day of Peace","21 September","","p"],
  ["World Tourism Day","27 September","","p"],
  ["International Day of Older Persons","1 October","",""],
  ["International Day of Non-Violence","2 October","Gandhi's birthday.","p"],
  ["World Teachers' Day","5 October","India's own Teachers' Day is 5 September.","p"],
  ["World Post Day","9 October","The Universal Postal Union was founded in 1874.","p"],
  ["International Day of the Girl Child","11 October","",""],
  ["World Standards Day","14 October","",""],
  ["World Food Day","16 October","The FAO was founded on 16 October 1945.","p"],
  ["International Day for the Eradication of Poverty","17 October","",""],
  ["United Nations Day","24 October","The UN Charter came into force in 1945.","p"],
  ["World Cities Day","31 October","",""],
  ["World Science Day for Peace and Development","10 November","",""],
  ["International Day for Tolerance","16 November","",""],
  ["World Television Day","21 November","",""],
  ["International Day for the Elimination of Violence against Women","25 November","",""],
  ["International Day of Persons with Disabilities","3 December","","p"],
  ["International Volunteer Day","5 December","",""],
  ["International Civil Aviation Day","7 December","",""],
  ["International Anti-Corruption Day","9 December","",""],
  ["Human Rights Day","10 December","The Universal Declaration of Human Rights was adopted in 1948.","p"],
  ["International Migrants Day","18 December","",""],
  ["International Human Solidarity Day","20 December","",""],
  ["World Meditation Day","21 December","Declared by the UN in 2024 (proposal co-led by India).",""]
];
const D7 = [
  ["World Leprosy Day","Last Sunday of January","India observes Anti-Leprosy Day on 30 January (Gandhi's death anniversary).",""],
  ["World Cancer Day","4 February","","p"],
  ["National Deworming Day (India)","10 February","",""],
  ["World Hearing Day","3 March","",""],
  ["World Kidney Day","Second Thursday of March","",""],
  ["World Down Syndrome Day","21 March","",""],
  ["World Tuberculosis Day","24 March","Robert Koch announced the TB bacterium in 1882.","p"],
  ["World Autism Awareness Day","2 April","",""],
  ["World Health Day","7 April","The WHO was founded on 7 April 1948.","p"],
  ["World Homoeopathy Day","10 April","Birth anniversary of Samuel Hahnemann.",""],
  ["World Haemophilia Day","17 April","",""],
  ["World Malaria Day","25 April","","p"],
  ["World Hand Hygiene Day","5 May","",""],
  ["National Dengue Day (India)","16 May","",""],
  ["World Hypertension Day","17 May","",""],
  ["World No Tobacco Day","31 May","","p"],
  ["World Blood Donor Day","14 June","Birth anniversary of Karl Landsteiner, who found the ABO blood groups.","p"],
  ["World Zoonoses Day","6 July","Louis Pasteur gave the first rabies vaccine on 6 July 1885.",""],
  ["World Hepatitis Day","28 July","Birthday of Baruch Blumberg, who discovered the hepatitis B virus.",""],
  ["World Mosquito Day","20 August","Ronald Ross showed in 1897 that mosquitoes carry malaria.",""],
  ["World Patient Safety Day","17 September","",""],
  ["World Alzheimer's Day","21 September","",""],
  ["World Rabies Day","28 September","Death anniversary of Louis Pasteur.",""],
  ["World Heart Day","29 September","","p"],
  ["World Mental Health Day","10 October","","p"],
  ["World Polio Day","24 October","Started by Rotary International.",""],
  ["World Pneumonia Day","12 November","",""],
  ["World Diabetes Day","14 November","Birthday of Frederick Banting, co-discoverer of insulin.","p"],
  ["World AIDS Day","1 December","","p"],
  ["Universal Health Coverage Day","12 December","",""]
];

LESSONS.push(
{id:"D4", heat:2, title:"World days: January to April", hi:"विश्व दिवस: जनवरी–अप्रैल", blocks:[
  {k:"hot", h:"Favourites from these months: <b>World Hindi Day</b>, <b>International Mother Language Day</b>, <b>International Women's Day</b>, <b>World Consumer Rights Day</b>, <b>World Heritage Day</b>, <b>World Book Day</b> and <b>World Intellectual Property Day</b>."},
  {k:"story", h:"<p>Most world days are fixed by the <b>United Nations</b> or one of its agencies, and many have a story. <b>International Mother Language Day</b> (21 Feb) remembers students killed in Dhaka in 1952 while demanding Bengali as a state language. <b>World Book Day</b> (23 Apr) falls on the day Shakespeare and Cervantes died. <b>World Hindi Day</b> (10 Jan) remembers the first World Hindi Conference in Nagpur in 1975.</p>", key:"Feb 21 mother language, Mar 8 women, Mar 15 consumers, Apr 18 heritage, Apr 23 books."},
  {k:"table", title:"Days and dates", head:["Day","Date","Note"], rows: D4.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"March run — <b>8 women, 15 consumers, 20 happiness, 21 poetry, 27 theatre</b>: <i>a woman shops, is happy, writes a poem, goes to the theatre</i>."},
  {k:"trap", h:"<b>World Hindi Day</b> 10 Jan vs <b>Hindi Diwas</b> 14 Sep. <b>World Heritage Day</b> 18 Apr (monuments) vs <b>World Book Day</b> 23 Apr. <b>Mother Language Day</b> 21 Feb vs <b>Mother's Day</b> (second Sunday of May)."}
], sum:["World Braille Day 4 Jan; World Hindi Day 10 Jan; International Day of Education 24 Jan.","World Radio Day 13 Feb; International Mother Language Day 21 Feb.","International Women's Day 8 Mar; World Consumer Rights Day 15 Mar; World Poetry Day 21 Mar.","World Heritage Day 18 Apr; World Book Day 23 Apr; World Intellectual Property Day 26 Apr.","Human Space Flight Day 12 Apr (Gagarin, 1961); International Dance Day 29 Apr."]},

{id:"D5", heat:2, title:"World days: May to August", hi:"विश्व दिवस: मई–अगस्त", blocks:[
  {k:"hot", h:"Asked a lot: <b>International Day of Yoga</b> (21 Jun), <b>World Population Day</b> (11 Jul), <b>World Day Against Child Labour</b> (12 Jun), <b>World Red Cross Day</b> (8 May), <b>World Press Freedom Day</b> (3 May), <b>World Milk Day</b> (1 Jun) and <b>International Youth Day</b> (12 Aug)."},
  {k:"story", h:"<p><b>International Day of Yoga</b> is India's gift to the calendar: proposed by India at the UN in 2014 and first observed on 21 June 2015 — the longest day of the year in the northern hemisphere. <b>World Red Cross Day</b> is Henry Dunant's birthday; <b>World Chess Day</b> marks FIDE's founding; <b>Olympic Day</b> marks the IOC's.</p>", key:"21 June — yoga (longest day); 11 July — population; 12 August — youth."},
  {k:"table", title:"Days and dates", head:["Day","Date","Note"], rows: D5.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Yoga on the longest day”</b> — 21 June. <b>Population 11/7</b> — <i>eleven-seven, crowds to heaven</i>. Both youth days are on the <b>12th</b>: National (12 Jan), International (12 Aug)."},
  {k:"trap", h:"<b>World Milk Day</b> 1 Jun vs India's <b>National Milk Day</b> 26 Nov. <b>International Day of Friendship</b> (UN) is 30 Jul; India's <b>Friendship Day</b> is the first Sunday of August. <b>World Day Against Child Labour</b> is 12 Jun, not Children's Day."}
], sum:["Labour Day 1 May; World Press Freedom Day 3 May; World Red Cross Day 8 May.","World Milk Day 1 Jun; World Day Against Child Labour 12 Jun; International Day of Yoga 21 Jun (since 2015).","World Population Day 11 Jul; Nelson Mandela Day 18 Jul; World Chess Day 20 Jul.","Hiroshima Day 6 Aug; Indigenous Peoples' Day 9 Aug; International Youth Day 12 Aug.","World Humanitarian Day 19 Aug; Day against Nuclear Tests 29 Aug."]},

{id:"D6", heat:2, title:"World days: September to December", hi:"विश्व दिवस: सितंबर–दिसंबर", blocks:[
  {k:"hot", h:"Most asked: <b>International Literacy Day</b>, <b>International Day of Peace</b>, <b>World Tourism Day</b>, <b>World Teachers' Day</b>, <b>World Post Day</b>, <b>World Food Day</b>, <b>UN Day</b>, <b>Human Rights Day</b> and the day for <b>persons with disabilities</b>."},
  {k:"story", h:"<p>The last four months are full of UN birthdays. The <b>UN</b> itself was born on 24 October 1945 (UN Day); its food agency, the <b>FAO</b>, a week earlier on 16 October (World Food Day). The <b>Universal Postal Union</b> dates from 9 October 1874 (World Post Day). And on 10 December 1948 the UN adopted the <b>Universal Declaration of Human Rights</b> — Human Rights Day.</p>", key:"16 Oct FAO, 24 Oct UN, 10 Dec human rights."},
  {k:"table", title:"Days and dates", head:["Day","Date","Note"], rows: D6.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"October's UN trio — <b>9 post, 16 food, 24 UN</b>: <i>the post brings food to the UN</i>."},
  {k:"trap", h:"<b>World Teachers' Day</b> 5 Oct vs India's <b>Teachers' Day</b> 5 Sep. <b>International Day of Non-Violence</b> is Gandhi's birthday (2 Oct), not his death anniversary. <b>Human Rights Day</b> is 10 Dec; India's NHRC was set up on 12 Oct 1993."}
], sum:["International Literacy Day 8 Sep; International Day of Peace 21 Sep; World Tourism Day 27 Sep.","International Day of Non-Violence 2 Oct; World Teachers' Day 5 Oct; World Post Day 9 Oct.","World Food Day 16 Oct (FAO); United Nations Day 24 Oct.","Persons with Disabilities 3 Dec; Anti-Corruption Day 9 Dec; Human Rights Day 10 Dec.","World Meditation Day 21 Dec (since 2024)."]},

{id:"D7", heat:3, title:"Health days", hi:"स्वास्थ्य दिवस", blocks:[
  {k:"hot", h:"Health days are asked in almost every exam: <b>World Health Day</b> (WHO's birthday), <b>World TB Day</b>, <b>World Malaria Day</b>, <b>World No Tobacco Day</b>, <b>World Blood Donor Day</b>, <b>World Heart Day</b>, <b>World Diabetes Day</b> and <b>World AIDS Day</b>."},
  {k:"story", h:"<p>Many health days honour a scientist's birthday or discovery. <b>World Blood Donor Day</b> is Karl Landsteiner's birthday (he found the ABO groups). <b>World Diabetes Day</b> is Frederick Banting's (insulin). <b>World TB Day</b> is the day Robert Koch announced the TB germ. <b>World Mosquito Day</b> marks Ronald Ross's malaria discovery in India. <b>World Rabies Day</b> is Pasteur's death anniversary.</p>", key:"WHO born 7 Apr 1948; Landsteiner 14 Jun; Banting 14 Nov; Koch 24 Mar; Ross 20 Aug."},
  {k:"table", title:"Days and dates", head:["Day","Date","Note"], rows: D7.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Year-ends: <b>World AIDS Day opens December</b> (1 Dec). <b>Tobacco closes May</b> (31 May). <b>Heart in September</b> (29 Sep), <b>mind in October</b> (10 Oct)."},
  {k:"trap", h:"<b>World Health Day</b> 7 Apr vs <b>World Heart Day</b> 29 Sep. <b>World TB Day</b> 24 Mar vs <b>World Malaria Day</b> 25 Apr. <b>World Polio Day</b> 24 Oct shares its date with <b>UN Day</b>."}
], sum:["World Cancer Day 4 Feb; World TB Day 24 Mar; World Health Day 7 Apr (WHO, 1948).","World Malaria Day 25 Apr; World No Tobacco Day 31 May; World Blood Donor Day 14 Jun.","World Hepatitis Day 28 Jul; World Mosquito Day 20 Aug; World Heart Day 29 Sep.","World Mental Health Day 10 Oct; World Polio Day 24 Oct; World Diabetes Day 14 Nov.","World AIDS Day 1 Dec; Universal Health Coverage Day 12 Dec."]}
);

pairQs("D4", D4, { q: t => `When is ${t} observed?`, rq: a => `Which world day falls on ${a}?` });
pairQs("D5", D5, { q: t => `On which date is ${t} observed?`, rq: a => `Which day is observed on ${a}?` });
pairQs("D6", D6, { q: t => `${t} is observed on:`, rq: a => `Which international day falls on ${a}?` });
pairQs("D7", D7, { q: t => `When is ${t} observed?`, rq: a => `Which health day is observed on ${a}?` });

QB.push(
["D5","The first International Day of Yoga was observed in:",["2015","2014","2016","2017"],"India proposed it at the UN General Assembly in 2014; it was first observed on 21 June 2015.","p"],
["D4","International Mother Language Day is observed to remember the language movement in:",["Dhaka (then East Pakistan)","Chennai","Quebec","Barcelona"],"Students were killed in Dhaka on 21 February 1952 while demanding Bengali as a state language.",""],
["D6","Human Rights Day marks the adoption of the Universal Declaration of Human Rights in:",["1948","1945","1950","1966"],"Adopted by the UN General Assembly on 10 December 1948.","p"],
["D7","World Health Day marks the founding of the WHO in:",["1948","1945","1950","1919"],"The WHO constitution came into force on 7 April 1948.","p"],
["D7","World Blood Donor Day is the birth anniversary of:",["Karl Landsteiner","Louis Pasteur","Robert Koch","Edward Jenner"],"Landsteiner discovered the ABO blood group system.","p"]
);

LASTMOMENT.push(
{t:"World days Jan–Apr", era:["dy"], rows:[["10 Jan","World Hindi Day"],["21 Feb","Mother Language Day"],["8 Mar","Women's Day"],["15 Mar","Consumer Rights"],["21 Mar","Poetry Day"],["18 Apr","World Heritage Day"],["23 Apr","Book Day"],["26 Apr","IP Day"]]},
{t:"World days May–Aug", era:["dy"], rows:[["3 May","Press Freedom"],["8 May","Red Cross"],["1 Jun","Milk Day"],["12 Jun","Against Child Labour"],["21 Jun","Yoga Day"],["11 Jul","Population Day"],["12 Aug","International Youth Day"],["19 Aug","Humanitarian Day"]]},
{t:"World days Sep–Dec", era:["dy"], rows:[["8 Sep","Literacy Day"],["21 Sep","Peace Day"],["27 Sep","Tourism Day"],["5 Oct","World Teachers' Day"],["9 Oct","Post Day"],["16 Oct","Food Day"],["24 Oct","UN Day"],["10 Dec","Human Rights Day"]]},
{t:"Health days", era:["dy"], rows:[["4 Feb","Cancer"],["24 Mar","TB"],["7 Apr","Health (WHO)"],["25 Apr","Malaria"],["31 May","No Tobacco"],["14 Jun","Blood Donor"],["29 Sep","Heart"],["1 Dec","AIDS"]]}
);
TILES.push(["21 Jun","International Day of Yoga","dy"],["11 Jul","World Population Day","dy"],["7 Apr","World Health Day","dy"],["24 Oct","United Nations Day","dy"],["10 Dec","Human Rights Day","dy"],["21 Feb","Mother Language Day","dy"]);

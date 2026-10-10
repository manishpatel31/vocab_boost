/* पाठShala — the whole app (loaded by index.html).
   It lives in its own file so the browser can keep it compiled between visits, which makes every
   start after the first quicker. After editing it, run `node tools/stamp.js` so index.html and
   sw.js ask for the new copy. */
(function(){
  "use strict";

  // ---------------- appearance: design (Refined Register / Indigo Night) + light/dark, per device ----------------
  var THEME_KEY = 'vocabRegisterTheme';
  var DARK_MODE_KEY = 'vocabRegisterDarkMode';
  var darkMq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function lsGet(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }
  function lsSet(k, v){ try{ if(v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); }catch(e){} }
  function currentTheme(){ return lsGet(THEME_KEY) === 'indigo' ? 'indigo' : 'paper'; }
  function currentMode(){ var m = lsGet(DARK_MODE_KEY); return m === '1' ? 'dark' : (m === '0' ? 'light' : 'system'); }
  function applyAppearance(){
    var theme = currentTheme();
    var mode = currentMode();
    if(window.loadThemeFonts) window.loadThemeFonts(theme);
    var dark = mode === 'dark' || (mode === 'system' && !!(darkMq && darkMq.matches));
    document.body.classList.toggle('theme-indigo', theme === 'indigo');
    document.body.classList.toggle('theme-paper', theme !== 'indigo');
    document.body.classList.toggle('dark', dark);
    document.querySelectorAll('[data-theme-pick]').forEach(function(b){ b.classList.toggle('on', b.dataset.themePick === theme); });
    document.querySelectorAll('[data-mode-pick]').forEach(function(b){ b.classList.toggle('on', b.dataset.modePick === mode); });
    var meta = document.querySelector('meta[name="theme-color"]');
    if(meta) meta.setAttribute('content', theme === 'indigo' ? '#0B1433' : (dark ? '#110F0B' : '#221E17'));
  }
  applyAppearance();
  if(darkMq){
    var onSystemChange = function(){ if(currentMode() === 'system') applyAppearance(); };
    if(darkMq.addEventListener) darkMq.addEventListener('change', onSystemChange);
    else if(darkMq.addListener) darkMq.addListener(onSystemChange);
  }
  document.querySelectorAll('[data-theme-pick]').forEach(function(b){
    b.addEventListener('click', function(){ lsSet(THEME_KEY, b.dataset.themePick); applyAppearance(); });
  });
  document.querySelectorAll('[data-mode-pick]').forEach(function(b){
    b.addEventListener('click', function(){
      var m = b.dataset.modePick;
      lsSet(DARK_MODE_KEY, m === 'system' ? null : (m === 'dark' ? '1' : '0'));
      applyAppearance();
    });
  });

  // ---------------- grouped navigation menus ----------------
  function closeAllMenus(except){
    document.querySelectorAll('.navgroup.open').forEach(function(g){
      if(g === except) return;
      g.classList.remove('open');
      var b = g.querySelector(':scope > button');
      if(b) b.setAttribute('aria-expanded', 'false');
    });
  }
  function refreshNavActive(){
    document.querySelectorAll('.navgroup').forEach(function(g){ g.classList.toggle('has-active', !!g.querySelector('.tab.active')); });
  }
  document.querySelectorAll('.navgroup').forEach(function(g){
    var btn = g.querySelector(':scope > button');
    if(!btn) return;
    btn.addEventListener('click', function(ev){
      ev.stopPropagation();
      var willOpen = !g.classList.contains('open');
      closeAllMenus(g);
      g.classList.toggle('open', willOpen);
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function(ev){
    var t = ev.target;
    if(t && t.closest && t.closest('.appearance-menu')) return;
    closeAllMenus();
  });
  document.addEventListener('keydown', function(ev){ if(ev.key === 'Escape') closeAllMenus(); });
  document.getElementById('navPresentBtn').addEventListener('click', function(){ document.getElementById('presentBtn').click(); });
  document.getElementById('navPanicBtn').addEventListener('click', function(){ document.getElementById('panicBtn').click(); });
  refreshNavActive();

  // ---------------- Subjects menu + study modules (English / GS) ----------------
  // Each module is its own page in the same site; it opens full screen inside the app.
  // Its progress lives in localStorage under its own key; we copy that to the account
  // (users/{uid}/study/{id}) so every device shows the same progress.
  var STUDY = {
    grammar:  { title: 'Grammar 100',                  file: 'study-grammar-100.html',  key: 'grammar100_v1' },
    bns:      { title: 'BNS · BNSS · BSA',             file: 'study-bns-bnss-bsa.html', key: 'bns_workbook_v1' },
    schemes:  { title: 'Government Schemes',           file: 'study-govt-schemes.html', key: 'govt_schemes_workbook_v1' },
    census:   { title: 'Census & Population',          file: 'study-census.html',       key: 'census_workbook_v1' },
    intlorgs: { title: 'International Organisations', file: 'study-intl-orgs.html',    key: 'intl_orgs_workbook_v1' },
    reports:  { title: 'Reports & Indices',            file: 'study-reports-indices.html', key: 'reports_indices_workbook_v1' },
    sports:   { title: 'Sports',                       file: 'study-sports.html',       key: 'sports_workbook_v1' },
    festivals:{ title: 'Festivals of India',           file: 'study-festivals.html',    key: 'festivals_workbook_v1' },
    iprplans: { title: 'IPR & Five Year Plans',        file: 'study-ipr-plans.html',    key: 'economy_ipr_plans_v1' },
    folkdances:{ title: 'Folk Dances of India',        file: 'study-folk-dances.html',  key: 'folk_dances_workbook_v1' },
    appointments:{ title: 'Appointments 2026',          file: 'study-appointments.html', key: 'appointments_workbook_v1' },
    polity:   { title: 'Indian Polity',                file: 'study-polity.html',       key: 'polity_pyq_workbook_v1' },
    economics:{ title: 'Indian Economy',               file: 'study-economics.html',    key: 'economics_pyq_workbook_v1' },
    formulas: { title: 'Maths Formula Book',           file: 'study-maths-formulas.html', key: 'maths_formula_book_v1' },
    numbersystem: { title: 'Number System',            file: 'study-number-system.html', key: 'number_system_workbook_v1' },
    calendar: { title: 'Calendar',                     file: 'study-calendar.html',      key: 'calendar_workbook_v1' },
    clock:    { title: 'Clock',                        file: 'study-clock.html',         key: 'clock_workbook_v1' },
    geometry: { title: 'Geometry',                     file: 'study-geometry.html',     key: 'geometry_workbook_v1' },
    mensuration2d:{ title: 'Mensuration 2D',           file: 'study-mensuration2d.html', key: 'mensuration2d_workbook_v1' },
    mensuration3d:{ title: 'Mensuration 3D',           file: 'study-mensuration3d.html', key: 'mensuration3d_workbook_v1' },
    trigonometry: { title: 'Trigonometry',             file: 'study-trigonometry.html', key: 'trigonometry_workbook_v1' },
    physics:  { title: 'Physics',                      file: 'study-physics.html',      key: 'physics_pyq_workbook_v1' },
    biology:  { title: 'Biology',                      file: 'study-biology.html',      key: 'biology_pyq_workbook_v1' },
    space:    { title: 'Space & ISRO Missions',              file: 'study-space.html',        key: 'space_missions_workbook_v1' },
    voice:    { title: 'Active & Passive Voice',       file: 'study-voice.html',        key: 'voice_workbook_v1' },
    narration:{ title: 'Narration',                    file: 'study-narration.html',    key: 'narration_workbook_v1' }
  };
  STUDY.grammar.subj = 'english'; STUDY.grammar.ico = '✍️'; STUDY.grammar.hi = 'व्याकरण · error spotting'; STUDY.grammar.desc = '100 rules with logic, tricks and examples; unit tests after every 10 rules; revise and mistakes lists.'; STUDY.grammar.meta = '100 rules · unit tests'; STUDY.grammar.color = '#C8402F';
  STUDY.bns.subj = 'gs'; STUDY.bns.ico = '⚖️'; STUDY.bns.hi = 'नए आपराधिक क़ानून · Polity'; STUDY.bns.desc = 'The three new criminal laws the SSC way — numbers and dates, new offences, FIR, arrest, bail and timelines, electronic evidence, PYQ-type questions and tricks.'; STUDY.bns.meta = '15 lessons · 267 questions'; STUDY.bns.color = '#3D5CF0';
  STUDY.schemes.subj = 'gs'; STUDY.schemes.ico = '🏛️'; STUDY.schemes.hi = 'सरकारी योजनाएँ'; STUDY.schemes.desc = 'Central, centrally sponsored and state schemes linked as stories, with 2025–26 updates.'; STUDY.schemes.meta = '15 lessons · 359 questions'; STUDY.schemes.color = '#2F6F63';
  STUDY.census.subj = 'gs'; STUDY.census.ico = '📊'; STUDY.census.hi = 'जनगणना · जनसंख्या'; STUDY.census.desc = 'Census 2011 & 2027 and population geography — size, growth, density, sex ratio, literacy.'; STUDY.census.meta = '11 lessons · 250 questions'; STUDY.census.color = '#C99A2E';
  STUDY.intlorgs.subj = 'gs'; STUDY.intlorgs.ico = '🌐'; STUDY.intlorgs.hi = 'अंतरराष्ट्रीय संगठन'; STUDY.intlorgs.desc = 'UN bodies, financial and regional groupings — HQs, heads, members and recent news.'; STUDY.intlorgs.meta = 'Lessons · practice · mock'; STUDY.intlorgs.color = '#8C2F39';
  STUDY.reports.subj = 'gs'; STUDY.reports.ico = '📈'; STUDY.reports.hi = 'रिपोर्ट और सूचकांक'; STUDY.reports.desc = 'Global and national reports & indices — who publishes them, what rank 1 means, India’s latest positions.'; STUDY.reports.meta = '14 lessons · 294 questions'; STUDY.reports.color = '#6A4C93';
  STUDY.sports.subj = 'gs'; STUDY.sports.ico = '🏏'; STUDY.sports.hi = 'खेल'; STUDY.sports.desc = 'Players per side, field and ball dimensions, terms, trophies, firsts and 2025–26 results — with a one-page dimension sheet.'; STUDY.sports.meta = '15 lessons · 349 questions'; STUDY.sports.color = '#1F7A5A';
  STUDY.festivals.subj = 'gs'; STUDY.festivals.ico = '🪔'; STUDY.festivals.hi = 'भारत के त्योहार'; STUDY.festivals.desc = 'About 140 festivals state by state — tribe, deity, harvest and new-year links, with name-ending tricks.'; STUDY.festivals.meta = '16 lessons · 415 questions'; STUDY.festivals.color = '#C2571A';
  STUDY.iprplans.subj = 'gs'; STUDY.iprplans.ico = '🏭'; STUDY.iprplans.hi = 'औद्योगिक नीति · पंचवर्षीय योजनाएँ'; STUDY.iprplans.desc = 'Industrial Policy Resolutions (1948, 1956, 1991 …) and the Five Year Plans — aims, models, highlights and NITI Aayog.'; STUDY.iprplans.meta = '12 lessons · 252 questions'; STUDY.iprplans.color = '#8C5A2B';
  STUDY.folkdances.subj = 'gs'; STUDY.folkdances.ico = '💃'; STUDY.folkdances.hi = 'भारत के लोक नृत्य'; STUDY.folkdances.desc = 'Folk and tribal dances state by state — who performs them, when, and the tricks to tell look-alikes apart.'; STUDY.folkdances.meta = '16 lessons · 444 questions'; STUDY.folkdances.color = '#B0306A';
  STUDY.appointments.subj = 'gs'; STUDY.appointments.ico = '🎖️'; STUDY.appointments.hi = 'नियुक्तियाँ · कौन कहाँ'; STUDY.appointments.desc = 'Who heads what in 2026 — constitutional posts, forces, RBI & regulators, international bodies and recent appointments.'; STUDY.appointments.meta = '13 lessons · 269 questions'; STUDY.appointments.color = '#2E6DA4';
  STUDY.polity.subj = 'gs'; STUDY.polity.ico = '📜'; STUDY.polity.hi = 'भारतीय राजव्यवस्था · PYQ'; STUDY.polity.desc = 'The whole Constitution the SSC way — Parts, Schedules, key Articles, President to Parliament, emergencies and amendments.'; STUDY.polity.meta = '20 lessons · 481 questions'; STUDY.polity.color = '#3A4F9A';
  STUDY.economics.subj = 'gs'; STUDY.economics.ico = '💹'; STUDY.economics.hi = 'भारतीय अर्थव्यवस्था · PYQ'; STUDY.economics.desc = 'Demand to GDP, inflation, RBI & banking, budget, GST, 1991 reforms and trade — built from past SSC questions.'; STUDY.economics.meta = '20 lessons · 530 questions'; STUDY.economics.color = '#1E7A8C';
  STUDY.space.subj = 'gs'; STUDY.space.ico = '🚀'; STUDY.space.hi = 'अंतरिक्ष मिशन · Science & Tech'; STUDY.space.desc = 'Orbits, rockets and ISRO centres; Chandrayaan, Aditya-L1, Gaganyaan, NISAR and the 2024–26 launches.'; STUDY.space.meta = '16 lessons · 374 questions'; STUDY.space.color = '#5B45B0';
  STUDY.physics.subj = 'gs'; STUDY.physics.ico = '🔭'; STUDY.physics.hi = 'भौतिकी · PYQ'; STUDY.physics.desc = 'SI units, motion, Newton’s laws, gravitation, pressure, heat, sound, mirrors, lenses and the human eye.'; STUDY.physics.meta = '16 lessons · 321 questions'; STUDY.physics.color = '#C4572A';
  STUDY.biology.subj = 'gs'; STUDY.biology.ico = '🧬'; STUDY.biology.hi = 'जीव विज्ञान · PYQ'; STUDY.biology.desc = 'Cell to classification, vitamins, human body systems, hormones, plants, genetics and diseases.'; STUDY.biology.meta = '24 lessons · 461 questions'; STUDY.biology.color = '#3E8A4F';
  STUDY.voice.subj = 'english'; STUDY.voice.ico = '🔁'; STUDY.voice.hi = 'वाच्य · CGL pattern'; STUDY.voice.desc = 'Active ↔ passive the SSC CGL way — every tense and modal, Let / requested, By whom, It is said, PYQ-type questions and tricks.'; STUDY.voice.meta = '12 lessons · 196 questions'; STUDY.voice.color = '#B5487A'; STUDY.voice.lessons = 12; STUDY.voice.unit = 'lessons';
  STUDY.narration.subj = 'english'; STUDY.narration.ico = '💬'; STUDY.narration.hi = 'प्रत्यक्ष-अप्रत्यक्ष कथन · CGL pattern'; STUDY.narration.desc = 'Direct ↔ indirect speech the SSC CGL way — reporting verbs, tense backshift, time words, questions, commands, PYQ-type questions and tricks.'; STUDY.narration.meta = '12 lessons · 175 questions'; STUDY.narration.color = '#2F7A8C'; STUDY.narration.lessons = 12; STUDY.narration.unit = 'lessons';
  // Revision only: every formula and concept, chapter-wise, with heat map and last-hour sheet (no questions)
  STUDY.formulas.subj = 'maths'; STUDY.formulas.ico = '📘'; STUDY.formulas.hi = 'सूत्र पुस्तिका · final revision'; STUDY.formulas.desc = 'All SSC maths formulas and key concepts in 24 chapters — tricks, traps, exam heat map and a last-hour sheet. Revision only, no questions.'; STUDY.formulas.meta = '24 chapters · 277 formulas'; STUDY.formulas.color = '#8C6A2F'; STUDY.formulas.lessons = 24; STUDY.formulas.unit = 'chapters'; STUDY.formulas.noq = true;
  // Maths section (Tier 1 + Tier 2): formulas, concepts, tricks, figures and PYQs
  [['numbersystem', '🔢', 'संख्या पद्धति', 'Primes, unit digits, factors, divisibility and missing digits, remainders and the remainder theorems, trailing zeros, bases and series sums.', 13, 204, '#9A5B1F'],
   ['geometry', '📐', 'ज्यामिति', 'Lines and triangles to circles and coordinate geometry — centres, similarity, tangents, cyclic quadrilaterals, with figures and PYQs.', 12, 237, '#2F6DB5'],
   ['mensuration2d', '⬛', 'क्षेत्रमिति · 2D', 'Areas and perimeters of triangles, quadrilaterals, circles, sectors, polygons, paths, inscribed figures and shaded regions.', 11, 190, '#B5662F'],
   ['mensuration3d', '🧊', 'क्षेत्रमिति · 3D', 'Cube to frustum — volumes and surface areas, melting and recasting, water flow, combined solids and painted cubes.', 11, 179, '#7A4FB0'],
   ['trigonometry', '📏', 'त्रिकोणमिति', 'Ratios, standard values, identities, max–min, allied and compound angles, heights and distances, radians.', 11, 196, '#2F8F7A']
  ].forEach(function(x){ var m = STUDY[x[0]]; m.subj = 'maths'; m.ico = x[1]; m.hi = x[2]; m.desc = x[3]; m.meta = x[4] + ' lessons · ' + x[5] + ' questions'; m.color = x[6]; m.lessons = x[4]; m.unit = 'lessons'; });
  // Reasoning section: one mini app per reasoning chapter
  [['calendar', '📅', 'कैलेंडर · Reasoning', 'Leap years, odd days, the 10-second code method for any date, days-later puzzles, year shifts and repeating calendars.', 8, 114, '#3E6FA8'],
   ['clock', '🕰️', 'घड़ी · Reasoning', 'Hand speeds, the angle at any time, when the hands coincide or meet at right angles, mirror and water images, fast and slow clocks.', 7, 83, '#8A4FA0']
  ].forEach(function(x){ var m = STUDY[x[0]]; m.subj = 'reasoning'; m.ico = x[1]; m.hi = x[2]; m.desc = x[3]; m.meta = x[4] + ' lessons · ' + x[5] + ' questions'; m.color = x[6]; m.lessons = x[4]; m.unit = 'lessons'; });
  // General Studies is split by subject in पाठShala
  var GS_SUBJECTS = [
    ['history', 'History', 'इतिहास'], ['culture', 'Art & Culture', 'कला एवं संस्कृति'], ['polity', 'Polity', 'राजव्यवस्था'],
    ['geography', 'Geography', 'भूगोल'], ['economy', 'Economy', 'अर्थव्यवस्था'], ['science', 'Science', 'विज्ञान'],
    ['staticgk', 'Static GK', 'स्थैतिक सामान्य ज्ञान'], ['current', 'Current Affairs', 'समसामयिकी']
  ];
  STUDY.bns.gsub = 'polity'; STUDY.schemes.gsub = 'economy'; STUDY.iprplans.gsub = 'economy'; STUDY.census.gsub = 'geography';
  STUDY.festivals.gsub = 'culture'; STUDY.folkdances.gsub = 'culture'; STUDY.sports.gsub = 'staticgk'; STUDY.intlorgs.gsub = 'staticgk';
  STUDY.reports.gsub = 'current'; STUDY.appointments.gsub = 'current';
  STUDY.polity.core = STUDY.economics.core = 1; STUDY.physics.core = 2; STUDY.biology.core = 1;
  STUDY.physics.gsub = 'science'; STUDY.biology.gsub = 'science';
  STUDY.polity.gsub = 'polity'; STUDY.economics.gsub = 'economy'; STUDY.space.gsub = 'science';
  var studyOpen = null, studyWatch = null, studyPushTimer = null, studyLast = null;
  function agoText(ms){
    if(!ms) return 'Not started yet';
    var d = Math.floor((Date.now() - ms) / DAY_MS);
    return 'Opened ' + (d <= 0 ? 'today' : d === 1 ? 'yesterday' : d + ' days ago');
  }
  function hubCard(id){
    var m = STUDY[id], pr = studyProgress(id), x = trackInfo(id);
    var pct = pr.total ? Math.round(pr.done * 100 / pr.total) : 0;
    var qn = trackTotalQ(id), fm = m.noq ? (/([\d,]+)\s+formulas/.exec(m.meta || '') || [])[1] : 0;
    var revTitle = !x.started ? 'Plan revision' : x.off ? 'Revision reminders are off' : x.due ? 'Revision due now' : 'Next revision ' + trackDate(x.nextAt);
    return '<div class="hub-card" role="button" tabindex="0" data-open-study="' + id + '" style="--hub-c:' + m.color + ';">' +
      '<div class="hub-top"><div class="hub-ico">' + m.ico + '</div><div style="flex:1; min-width:0;"><h3>' + escapeHtml(m.title) + '</h3><div class="hi">' + escapeHtml(m.hi) + '</div></div>' +
        '<div class="hub-side"><div class="hub-tbs">' +
          '<button class="hub-tb" data-track-history="' + id + '" title="Your sessions, scores and mocks">🕘<span>History</span></button>' +
          '<button class="hub-tb' + (x.due ? ' due' : '') + '" data-track-revise="' + id + '" title="' + escapeAttr(revTitle) + '">🔁<span>' + (x.due ? 'Revise!' : 'Revise') + '</span></button>' +
        '</div><div class="hub-ring" title="' + pct + '% done">' + ringSvg(pct, m.color, 50) + '<span>' + pct + '%</span></div></div></div>' +
      '<div class="hub-facts">' +
        '<div><b>' + (m.lessons || '—') + '</b><span>' + (m.unit || 'lessons') + '</span></div>' +
        '<div><b>' + (m.noq ? (fm || '—') : (qn || '—')) + '</b><span>' + (m.noq ? 'formulas' : 'questions') + '</span></div>' +
        '<div title="' + escapeAttr('About ' + fmtMin(x.fullMin) + ' to do every lesson and question') + '"><b>' + fmtShort(x.fullMin) + '</b><span>to finish</span></div>' +
        '<div title="' + escapeAttr('About ' + fmtMin(x.revMin) + ': skim the lessons + one 25-question mock') + '"><b>' + fmtShort(x.revMin) + '</b><span>to revise</span></div>' +
      '</div>' +
      '<div class="hub-meta"><span>' + (x.visited ? 'Last opened ' + trackAgo(x.visited) : 'Not opened yet') + '</span><b>' + (x.started ? 'Continue ›' : 'Start ›') + '</b></div></div>';
  }
  function hubPracticeSection(){
    var totalWrong = 0;
    Object.keys(STUDY).forEach(function(id){ totalWrong += studyWrongIds(id).length; });
    var hist = mockHistory(), last = hist[hist.length - 1];
    return '<section class="hub-sec"><div class="hub-sec-h"><h2>Practice across subjects</h2><span>सभी विषय</span></div><div class="hub-grid hub-actions">' +
      '<button class="hub-card hub-act" data-hub-act="mistakes" style="--hub-c:var(--maroon);"><div class="hub-top"><div class="hub-ico">📕</div><div><h3>Mistakes book</h3><div class="hi">गलतियाँ · all subjects</div></div><div class="hub-big">' + totalWrong + '</div></div>' +
        '<p>Every question you got wrong in any mini app or mock — practise them until they’re gone.</p><div class="hub-meta"><span>' + (totalWrong ? totalWrong + ' waiting' : 'Nothing to fix yet') + '</span><b>Open ›</b></div></button>' +
      '<button class="hub-card hub-act" data-hub-act="mock" style="--hub-c:var(--teal);"><div class="hub-top"><div class="hub-ico">⏱️</div><div><h3>Mixed mock test</h3><div class="hi">English + Maths + Reasoning + GS · timed</div></div>' + (last ? '<div class="hub-big">' + last.score + '<small>/' + last.max + '</small></div>' : '') + '</div>' +
        '<p>Vocab, Grammar, ' + mathQIds().length + ' Maths, ' + reasoningIds().length + ' Reasoning and ' + gsIds().length + ' GS apps in one SSC-style paper, +2 / −0.5, with a subject-wise report.</p><div class="hub-meta"><span>' + (hist.length ? hist.length + ' taken · last ' + agoText(last.at).replace('Opened ', '') : 'Not taken yet') + '</span><b>Start ›</b></div></button>' +
      weakHubCard() +
      '</div></section>';
  }
  function weakHubCard(){
    var tried = 0, right = 0;
    Object.keys(STUDY).forEach(function(id){ if(STUDY[id].noq) return; var a = studyState(id).ans || {}; Object.keys(a).forEach(function(k){ tried++; if(a[k] === 1) right++; }); });
    return '<button class="hub-card hub-act" data-hub-act="weak" style="--hub-c:var(--mustard);"><div class="hub-top"><div class="hub-ico">🎯</div><div><h3>Weak spots</h3><div class="hi">कमज़ोर विषय · accuracy by topic</div></div>' +
      (tried ? '<div class="hub-big">' + Math.round(right * 100 / tried) + '<small>%</small></div>' : '') + '</div>' +
      '<p>Your accuracy in every subject, chapter and topic, weakest first — practise a topic or add it to Tasks in one tap.</p>' +
      '<div class="hub-meta"><span>' + (tried ? tried + ' questions answered' : 'Answer some questions first') + '</span><b>Open ›</b></div></button>';
  }
  // ================= पाठShala home: the app's front page =================
  var EXAM_DEFAULT = '2026-10-13';
  function examDay(){ var v = (myProfile && myProfile.examDate) || lsGet('pathshalaExamDate'); return /^\d{4}-\d{2}-\d{2}$/.test(v || '') ? v : EXAM_DEFAULT; }
  function daysToExam(){
    var p = examDay().split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]), t = new Date();
    t.setHours(0, 0, 0, 0);
    return Math.round((d - t) / DAY_MS);
  }
  // "Tue, 13 Oct, 2026" — written out by hand: setting up Intl.DateTimeFormat costs ~25 ms on a phone at start-up
  function examDateText(){
    var p = examDay().split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]);
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()] + ', ' + d.getDate() + ' ' +
      ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()] + ', ' + d.getFullYear();
  }
  function greetText(){ var h = new Date().getHours(); return h < 5 ? 'Up late' : h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'; }
  function firstName(){ var n = (currentUser && (currentUser.displayName || currentUser.email || '')) || ''; return n.split(/[\s@]/)[0]; }
  function lastStudyId(){
    var meta = studyMeta(), best = null, at = 0;
    Object.keys(STUDY).forEach(function(id){ var o = (meta[id] || {}).openedAt || 0; if(o > at){ at = o; best = id; } });
    return best;
  }
  function hashStr(s){ var h = 0; for(var i = 0; i < s.length; i++){ h = (h * 31 + s.charCodeAt(i)) | 0; } return Math.abs(h); }
  function wordOfDay(){
    var list = viewEntries().filter(function(e){ return e.term && (e.english_meaning || e.hindi_meaning); });
    if(!list.length) return null;
    var pool = list.filter(function(e){ return e.confidence < 5; });
    if(!pool.length) pool = list;
    pool.sort(function(a, b){ return a.id < b.id ? -1 : 1; });
    return pool[hashStr(todayKey() + (currentUser ? currentUser.uid : '')) % pool.length];
  }
  function totalMistakes(){ var n = 0; Object.keys(STUDY).forEach(function(id){ n += studyWrongIds(id).length; }); return n; }

  function homeTodayCard(){
    var prof = myProfile || {}, goal = prof.dailyGoal || 0, count = todayCount(), extra = todayExtra();
    var wordsToday = count - extra, streak = streakOf(prof), best = prof.streakBest || 0, met = prof.lastMetDay === todayKey();
    var pct = goal ? Math.min(100, Math.round(count * 100 / goal)) : 0;
    var hist = prof.history || {}, days = [], max = Math.max(goal, 1);
    for(var i = -6; i <= 0; i++){
      var k = dayKey(i), v = i === 0 ? count : (hist[k] || 0);
      max = Math.max(max, v);
      days.push({ k: k, v: v, l: 'SMTWTFS'.charAt(new Date(Date.now() + i * DAY_MS).getDay()) });
    }
    var week = '<div class="home-week" aria-label="Last 7 days">' + days.map(function(d, i){
      var h = Math.max(4, Math.round(d.v * 44 / max)), ok = goal && d.v >= goal;
      return '<div class="' + (ok ? 'ok' : '') + (i === 6 ? ' now' : '') + '" title="' + d.k + ': ' + d.v + '"><i style="height:' + h + 'px"></i><span>' + d.l + '</span></div>';
    }).join('') + '</div>';
    return '<button class="home-card home-today' + (met ? ' met' : '') + '" data-home-act="goal">' +
      '<div class="home-today-main"><div class="home-ring">' + ringSvg(goal ? pct : 0, met ? 'var(--teal)' : 'var(--mustard)', 96) +
        '<span><b>' + count + '</b><small>' + (goal ? '/ ' + goal : 'today') + '</small></span></div>' +
      '<div class="home-today-txt"><div class="eyebrow">' + (met ? 'Goal done ✓' : 'Today') + '</div>' +
        '<div class="home-streak">' + FLAME_SVG + '<b>' + streak + '</b> day' + (streak === 1 ? '' : 's') + ' streak</div>' +
        '<div class="home-split"><span><b>' + wordsToday + '</b> words</span><span><b>' + extra + '</b> study pts</span><span>best <b>' + best + '</b></span></div>' +
        (goal ? '' : '<div class="home-nudge">Tap to set a daily goal</div>') + '</div></div>' + week + '</button>';
  }
  /** "Friday, 9 October" (as en-IN writes it), without building a date formatter on every render. */
  function heroDateText(){
    var d = new Date();
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()] + ', ' + d.getDate() + ' ' +
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][d.getMonth()];
  }
  function homeHero(){
    var d = daysToExam(), cd = '';
    if(d >= 0) cd = '<button class="home-exam" data-home-act="exam" title="Change the exam date"><b>' + (d === 0 ? 'Today' : d) + '</b><span>' + (d === 0 ? 'Exam day — all the best!' : d === 1 ? 'day to go' : 'days to go') + '</span><small>SSC CGL · ' + escapeHtml(examDateText()) + '</small></button>';
    else cd = '<button class="home-exam past" data-home-act="exam" title="Set your next exam date"><span>Set your next exam date</span></button>';
    return '<div class="home-hero"><div class="home-greet"><div class="eyebrow">' + heroDateText() + '</div>' +
      '<h1>' + greetText() + (firstName() ? ', <span>' + escapeHtml(firstName()) + '</span>' : '') + '</h1>' +
      '<p>Everything for SSC CGL in one place — vocabulary, grammar and General Studies. One goal, one streak.</p></div>' + cd + '</div>';
  }
  function homeContinueCard(){
    var id = lastStudyId();
    var m = STUDY[id || 'grammar'], pr = studyProgress(id || 'grammar'), pct = pr.total ? Math.round(pr.done * 100 / pr.total) : 0;
    return '<button class="home-card home-cont" data-open-study="' + (id || 'grammar') + '" style="--hub-c:' + m.color + ';">' +
      '<div class="home-card-h">' + (id ? 'Continue where you left off' : 'Start here') + '</div>' +
      '<div class="hub-top"><div class="hub-ico">' + m.ico + '</div><div style="flex:1; min-width:0;"><h3>' + escapeHtml(m.title) + '</h3><div class="hi">' + pr.done + ' / ' + pr.total + ' ' + m.unit + ' · ' + escapeHtml(id ? agoText((studyMeta()[id] || {}).openedAt).replace('Opened ', '') : (pr.done || pr.tried ? 'in progress' : 'not started')) + '</div></div>' +
      '<div class="hub-ring">' + ringSvg(pct, m.color, 50) + '<span>' + pct + '%</span></div></div>' +
      '<div class="home-bar"><i style="width:' + pct + '%; background:' + m.color + ';"></i></div>' +
      '<div class="hub-meta"><span>' + escapeHtml(m.hi) + '</span><b>' + (id ? 'Resume' : 'Open') + ' ›</b></div></button>';
  }
  function homeDueCard(){
    var due = currentUser ? dueRevisions().length : 0, mist = totalMistakes();
    var ve = viewEntries(), mem = ve.filter(function(e){ return e.confidence >= 5; }).length, left = ve.length - mem;
    var row = function(act, ico, n, label, sub, cls){ return '<button class="home-due-row ' + (cls || '') + '" data-home-act="' + act + '"><span class="ic">' + ico + '</span><span class="tx"><b>' + label + '</b><small>' + sub + '</small></span><span class="n">' + n + '</span></button>'; };
    return '<div class="home-card home-due"><div class="home-card-h">Waiting for you</div><div class="home-due-rows">' +
      row('revision', '🔁', due, 'Revision rounds', due ? 'Memorized words due back today' : 'Nothing due today', due ? 'hot' : '') +
      row('mistakes', '📕', mist, 'Mistakes book', mist ? 'Wrong answers from every subject' : 'No mistakes waiting', mist ? 'hot' : '') +
      row('library', '📖', left, 'Words to master', mem + ' of ' + ve.length + ' memorized', '') +
      (function(){ var tl = todoLeftToday(); return row('tasks', '✅', tl, 'Tasks', tl ? 'Left on today’s list' : 'Plan today — add a task', tl ? 'hot' : ''); })() + '</div></div>';
  }
  function homeWordCard(){
    var w = wordOfDay();
    if(!w) return '<div class="home-card home-wotd"><div class="home-card-h">Word of the day</div><p class="help">Words appear here once your register has some.</p></div>';
    return '<button class="home-card home-wotd" data-home-act="word" data-id="' + escapeAttr(w.id) + '"><div class="home-card-h">Word of the day <span class="lvl">Level ' + (w.confidence || 0) + '</span></div>' +
      '<div class="home-wotd-term">' + escapeHtml(w.term) + '</div>' + (w.type ? '<div class="hi">' + escapeHtml(w.type) + '</div>' : '') +
      (w.english_meaning ? '<p>' + escapeHtml(w.english_meaning) + '</p>' : '') + (w.hindi_meaning ? '<p class="home-hi">' + escapeHtml(w.hindi_meaning) + '</p>' : '') +
      '<div class="hub-meta"><span>New one every day</span><b>Open card ›</b></div></button>';
  }
  function homeTools(){
    var t = [['present', '🖥️', 'Present', 'Flash cards'], ['aod', '🌙', 'AOD mode', 'Always-on revision'], ['audio', '🎧', 'Audio', 'Hands-free'],
      ['quiz', '🧩', 'Vocab quiz', 'Blanks · spellings'], ['revision', '🔁', 'Revision', '7 · 14 · 30 days'], ['panic', '⚡', 'Exam tomorrow', '30 weakest words']];
    return '<div class="home-tools" aria-label="Vocab tools">' +
      t.map(function(x){ return '<button data-home-act="' + x[0] + '"><span class="ic">' + x[1] + '</span><b>' + x[2] + '</b><small>' + x[3] + '</small></button>'; }).join('') + '</div>';
  }
  function homeVocabCard(){
    var ve = viewEntries(), mem = ve.filter(function(e){ return e.confidence >= 5; }).length, pct = ve.length ? Math.round(mem * 100 / ve.length) : 0;
    var due = currentUser ? dueRevisions().length : 0;
    return '<button class="hub-card" data-home-act="library" style="--hub-c:var(--mustard);">' +
      '<div class="hub-top"><div class="hub-ico">📖</div><div style="flex:1; min-width:0;"><h3>शब्दRegister</h3><div class="hi">शब्दावली · Vocabulary</div></div>' +
        '<div class="hub-ring" title="' + pct + '% memorized">' + ringSvg(pct, 'var(--mustard)', 50) + '<span>' + pct + '%</span></div></div>' +
      '<p>Meanings, idioms, one-word substitutions, spellings and roots — with quizzes and spaced revision.</p>' +
      '<div class="hub-stats"><span><b>' + ve.length + '</b> words</span><span><b>' + mem + '</b> memorized</span>' + (due ? '<span class="hub-wrong"><b>' + due + '</b> due</span>' : '') + '</div>' +
      '<div class="hub-meta"><span>Library · Spelling Bank · Roots</span><b>Open ›</b></div></button>';
  }
  var SUBJ_ICO = { maths: '➗', reasoning: '🧩', english: '🔤', history: '🏺', culture: '🎭', polity: '⚖️', geography: '🗺️', economy: '💰', science: '🔬', staticgk: '📚', current: '📰', other: '📘' };
  function subjIds(key){
    return gsIds().filter(function(id){ return (STUDY[id].gsub || 'other') === key; }).sort(function(a, b){ return (STUDY[b].core || 0) - (STUDY[a].core || 0); });
  }
  function subjProgress(list){
    var done = 0, total = 0, tried = 0, right = 0;
    list.forEach(function(id){ var p = studyProgress(id); done += p.done; total += p.total; tried += p.tried; right += p.right; });
    return { pct: total ? Math.round(done * 100 / total) : 0, done: done, total: total, tried: tried, acc: tried ? Math.round(right * 100 / tried) : null };
  }
  /** One tile per subject: how far along it is; tap to jump to its row. */
  function homeSubjects(){
    var en = englishIds(), ve = viewEntries(), mem = ve.filter(function(e){ return e.confidence >= 5; }).length;
    var gp = subjProgress(en), vocPct = ve.length ? Math.round(mem * 100 / ve.length) : 0;
    var mp = subjProgress(mathIds());
    var tiles = [{ key: 'english', name: 'English', hi: 'अंग्रेज़ी', n: en.length + 1, pct: Math.round((gp.pct + vocPct) / 2), acc: gp.acc, jump: 'english' },
      { key: 'maths', name: 'Maths', hi: 'गणित', n: mathIds().length, pct: mp.pct, acc: mp.acc, jump: 'maths' }];
    var rp = subjProgress(reasoningIds());
    tiles.push({ key: 'reasoning', name: 'Reasoning', hi: 'तर्कशक्ति', n: reasoningIds().length, pct: rp.pct, acc: rp.acc, jump: 'reasoning' });
    GS_SUBJECTS.forEach(function(g){
      var list = subjIds(g[0]);
      var sp = subjProgress(list);
      tiles.push({ key: g[0], name: g[1], hi: g[2], n: list.length, pct: sp.pct, acc: sp.acc, jump: list.length ? g[0] : '' });
    });
    return '<section class="hub-sec"><div class="hub-sec-h"><h2>Your subjects</h2><span>विषय · tap one to jump to its apps</span></div><div class="subj-tiles">' +
      tiles.map(function(t){
        if(!t.n) return '<div class="subj-tile empty"><span class="ic">' + SUBJ_ICO[t.key] + '</span><b>' + t.name + '</b><small>' + t.hi + '</small><em>No app yet</em></div>';
        return '<button class="subj-tile" data-hub-jump="' + t.jump + '"><span class="ic">' + SUBJ_ICO[t.key] + '</span><b>' + t.name + '</b><small>' + t.hi + '</small>' +
          '<span class="bar"><i style="width:' + t.pct + '%"></i></span><em>' + t.pct + '% · ' + t.n + ' app' + (t.n === 1 ? '' : 's') + '</em></button>';
      }).join('') + '</div></section>';
  }
  // At start-up the words, progress and profile arrive one by one and each asks for a new home page:
  // build the HTML (with one copy of the word list), and only touch the page when it actually changed.
  var hubHtml = '', veMemo = null;
  function renderHub(){
    var box = document.getElementById('homeBody');
    if(!box) return;
    var ids = Object.keys(STUDY), html;
    veMemo = viewEntries();
    try{ html = homeHero() +
      '<div class="home-row1">' + homeTodayCard() + homeContinueCard() + '</div>' +
      '<div class="home-row2">' + homeDueCard() + homeReviseCard() + '</div>' +
      homeSubjects() +
      hubPracticeSection() +
      '<section class="hub-sec hub-sub" id="hubsub-english"><div class="hub-sec-h"><h2>English</h2><span>अंग्रेज़ी</span></div><div class="hub-grid">' + homeVocabCard() + ids.filter(function(id){ return STUDY[id].subj === 'english'; }).map(hubCard).join('') + '</div></section>' +
      '<section class="hub-sec hub-sub" id="hubsub-maths"><div class="hub-sec-h"><h2>Maths</h2><span>गणित · formulas, figures, tricks & PYQs</span></div><div class="hub-grid">' + mathIds().map(hubCard).join('') + '</div></section>' +
      '<section class="hub-sec hub-sub" id="hubsub-reasoning"><div class="hub-sec-h"><h2>Reasoning</h2><span>तर्कशक्ति · rules, shortcuts & practice</span></div><div class="hub-grid">' + reasoningIds().map(hubCard).join('') + '</div></section>' +
      '<section class="hub-sec" id="homeGs"><div class="hub-sec-h"><h2>General Studies</h2><span>सामान्य अध्ययन · ' + gsIds().length + ' mini apps in ' + GS_SUBJECTS.filter(function(g){ return subjIds(g[0]).length; }).length + ' subjects</span></div>' +
        GS_SUBJECTS.concat([['other', 'More', 'अन्य']]).map(function(g){
          var list = subjIds(g[0]);
          if(!list.length) return '';
          var sp = subjProgress(list);
          return '<div class="hub-sub" id="hubsub-' + g[0] + '"><div class="hub-sub-h"><span class="sub-ico">' + (SUBJ_ICO[g[0]] || '📘') + '</span><h3>' + g[1] + '</h3><span>' + g[2] + '</span>' +
            '<span class="sub-prog"><i><b style="width:' + sp.pct + '%"></b></i>' + list.length + ' app' + (list.length === 1 ? '' : 's') + ' · ' + sp.pct + '% done</span></div>' +
            '<div class="hub-grid">' + list.map(hubCard).join('') + '</div></div>';
        }).join('') +
      '</section>';
    } finally { veMemo = null; }
    if(html === hubHtml && box.firstChild) return;
    hubHtml = html;
    box.innerHTML = html;
  }
  function renderVocabDash(){
    var box = document.getElementById('vocabDash');
    if(box) box.innerHTML = homeWordCard() + homeTools();
  }
  document.getElementById('vocabDash').addEventListener('click', studyClick);
  var renderHome = renderHub, homeTimer = null;
  function renderHomeSoon(){
    clearTimeout(homeTimer);
    homeTimer = setTimeout(function(){
      if(isActive('home') && !drillOpen) renderHub();
      if(isActive('library')) renderVocabDash();
      if(isActive('stats')){ renderTracker(); renderStudyStats(); }
    }, 250);
  }
  function setExamDate(){
    modalBodyRef().innerHTML = '<h3>Exam date</h3><p class="help" style="margin-top:0;">The countdown on the home page counts down to this day.</p>' +
      '<div class="field"><label class="field-label" for="examDateIn">Date</label><input type="date" id="examDateIn" value="' + examDay() + '"></div>' +
      '<div class="modal-actions"><button class="btn ghost" id="examCancel">Cancel</button><button class="btn teal" id="examSave">Save</button></div>';
    modalBgRef().classList.add('open');
    document.getElementById('examCancel').addEventListener('click', function(){ modalBgRef().classList.remove('open'); modalBodyRef().innerHTML = ''; });
    document.getElementById('examSave').addEventListener('click', function(){
      var v = document.getElementById('examDateIn').value;
      if(!/^\d{4}-\d{2}-\d{2}$/.test(v)){ showToast('Pick a date.'); return; }
      lsSet('pathshalaExamDate', v);
      if(currentUser) db.collection('users').doc(currentUser.uid).set({ examDate: v }, { merge: true }).catch(function(){});
      modalBgRef().classList.remove('open'); modalBodyRef().innerHTML = '';
      renderHub();
    });
  }
  function homeAction(a, el){
    if(a === 'goal') openGoalModal(!(myProfile && myProfile.dailyGoal));
    else if(a === 'exam') setExamDate();
    else if(a === 'mistakes') openMistakes();
    else if(a === 'mock') openMock();
    else if(a === 'revision' || a === 'library' || a === 'quiz' || a === 'add' || a === 'tasks') switchTab(a);
    else if(a === 'word') openWordPreviewModal(el.dataset.id);
    else if(a === 'present') document.getElementById('presentBtn').click();
    else if(a === 'aod') document.getElementById('navAodBtn').click();
    else if(a === 'audio') document.getElementById('navAudioBtn').click();
    else if(a === 'panic') document.getElementById('panicBtn').click();
  }
  function studyClick(ev){
    var c = ev.target.closest('[data-open-study]');
    if(c){ openStudy(c.dataset.openStudy, false); return; }
    var jump = ev.target.closest('[data-hub-jump]');
    if(jump){ var t = document.getElementById('hubsub-' + jump.dataset.hubJump); if(t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    var act = ev.target.closest('[data-hub-act]');
    if(act){ if(act.dataset.hubAct === 'mistakes') openMistakes(); else if(act.dataset.hubAct === 'weak') openWeak(); else openMock(); return; }
    var h = ev.target.closest('[data-home-act]');
    if(h) homeAction(h.dataset.homeAct, h);
  }
  document.getElementById('homeBody').addEventListener('click', studyClick);
  document.getElementById('homeBody').addEventListener('keydown', function(ev){
    if((ev.key === 'Enter' || ev.key === ' ') && ev.target.matches && ev.target.matches('.hub-card[data-open-study]')){ ev.preventDefault(); openStudy(ev.target.dataset.openStudy, false); }
  });
  function openHub(){ closeAllMenus(); if(studyOpen) closeStudy(false); switchTab('home'); }
  document.getElementById('homeBrand').addEventListener('click', function(ev){ ev.stopPropagation(); openHub(); });
  document.getElementById('navMistakesBtn').addEventListener('click', function(){ closeAllMenus(); openMistakes(); });
  document.getElementById('navMockBtn').addEventListener('click', function(){ closeAllMenus(); openMock(); });
  document.getElementById('navWeakBtn').addEventListener('click', function(){ closeAllMenus(); openWeak(); });

  // ================= Search across everything: lesson notes, questions, words, spellings =================
  var searchIdx = null, searchKind = 'all', searchTimer = null, searchOpen = false, searchMore = {}, searchJson = null;
  /** study-search.json (every lesson's title and notes), fetched once and shared by Search and Tasks. */
  function loadSearchJson(){
    if(!searchJson) searchJson = fetch('study-search.json').then(function(r){ if(!r.ok) throw new Error('study-search.json missing'); return r.json(); })
      .catch(function(e){ searchJson = null; throw e; });
    return searchJson;
  }
  function loadSearchIndex(){
    if(searchIdx) return Promise.resolve(searchIdx);
    return Promise.all([
      loadSearchJson(),
      loadStudyBank()
    ]).then(function(res){
      var idx = { lessons: [], qs: [] };
      Object.keys(res[0].modules).forEach(function(mid){
        if(!STUDY[mid]) return;
        res[0].modules[mid].forEach(function(l){ idx.lessons.push({ mod: mid, id: l.id, t: l.t, h: l.h || '', x: l.x || '', lt: (l.t + ' ' + (l.h || '')).toLowerCase(), lx: (l.x || '').toLowerCase() }); });
      });
      Object.keys(studyBank.modules).forEach(function(mid){
        if(!STUDY[mid]) return;
        studyBank.modules[mid].qs.forEach(function(q){ idx.qs.push({ mod: mid, q: q, s: (q.q + ' ' + q.o[q.a] + ' ' + (q.e || '') + ' ' + (q.tag || '')).toLowerCase() }); });
      });
      searchIdx = idx;
      return idx;
    });
  }
  function srTokens(s){ return String(s || '').toLowerCase().replace(/[“”"']/g, ' ').split(/\s+/).filter(function(t){ return t.length > 0; }); }
  // a word must START with the typed text: "sin" finds sin/sine, not business
  function srHas(text, t){
    var i = text.indexOf(t);
    var word = /[a-z0-9]/.test(t.charAt(0)), whole = word && t.length <= 3;   // short words (sin, gst, 75) must match whole
    while(i !== -1){
      var okStart = !word || i === 0 || !/[a-z0-9]/.test(text.charAt(i - 1));
      var okEnd = !whole || !/[a-z0-9]/.test(text.charAt(i + t.length));
      if(okStart && okEnd) return true;
      i = text.indexOf(t, i + 1);
    }
    return false;
  }
  function srAll(text, toks){ for(var i = 0; i < toks.length; i++){ if(!srHas(text, toks[i])) return false; } return true; }
  function srMark(text, toks){
    var h = escapeHtml(text);
    toks.filter(function(t){ return t.length > 1; }).sort(function(a, b){ return b.length - a.length; }).forEach(function(t){
      var wd = /[a-z0-9]/i.test(t.charAt(0));
      var re = new RegExp((wd ? '(?<![a-z0-9])' : '') + '(' + escapeHtml(t).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')' + (wd && t.length <= 3 ? '(?![a-z0-9])' : ''), 'gi');
      h = h.replace(re, '<mark>$1</mark>');
    });
    return h.replace(/<mark>([^<]*)<mark>([^<]*)<\/mark>([^<]*)<\/mark>/g, '<mark>$1$2$3</mark>');
  }
  function srSnippet(x, lx, toks){
    var i = lx.indexOf(toks.join(' ')); if(i < 0) i = lx.indexOf(toks[0]); if(i < 0) i = 0;
    var a = Math.max(0, i - 70), b = Math.min(x.length, i + 150);
    return (a ? '…' : '') + x.slice(a, b) + (b < x.length ? '…' : '');
  }
  function wordText(w){ return [w.term, w.type, w.english_meaning, w.hindi_meaning, w.example, w.usage, w.synonyms, w.antonyms, w.root, (w.tags || []).join(' ')].map(function(v){ return Array.isArray(v) ? v.join(' ') : (v || ''); }).join(' ').toLowerCase(); }
  function runSearch(){
    var box = document.getElementById('searchResults'), q = document.getElementById('searchInput').value.trim();
    var toks = srTokens(q);
    if(!toks.length){
      box.innerHTML = '<div class="sr-empty"><b>Search everything</b><p>Lesson notes and formulas in all ' + Object.keys(STUDY).length + ' apps, ' + (searchIdx ? searchIdx.qs.length.toLocaleString('en-IN') + ' questions' : 'every question') + ', your ' + words.length + ' words and the Spelling Bank.</p>' +
        '<div class="sr-try">' + ['Article 21', 'Chandrayaan', 'centroid', 'frustum', 'vitamin', 'repo rate', 'Bihu', 'sin 75'].map(function(t){ return '<button data-sr-try="' + escapeAttr(t) + '">' + escapeHtml(t) + '</button>'; }).join('') + '</div></div>';
      return;
    }
    var res = { lessons: [], qs: [], words: [], spell: [] }, phrase = toks.join(' ');
    if(searchIdx){
      searchIdx.lessons.forEach(function(l){
        var inTitle = srAll(l.lt, toks), inText = !inTitle && srAll(l.lt + ' ' + l.lx, toks);
        if(!inTitle && !inText) return;
        var hits = 0, p = -1; if(phrase.length > 2) while((p = l.lx.indexOf(phrase, p + 1)) !== -1 && hits < 50){ if(p === 0 || !/[a-z0-9]/.test(l.lx.charAt(p - 1))) hits++; }
        res.lessons.push({ l: l, rank: inTitle ? 0 : (hits ? 1 : 2), hits: hits });
      });
      res.lessons.sort(function(a, b){ return a.rank - b.rank || b.hits - a.hits; });
      searchIdx.qs.forEach(function(x){ if(srAll(x.s, toks)) res.qs.push({ mod: x.mod, q: x.q, s: x.s, r: x.s.indexOf(phrase) !== -1 ? 0 : 1 }); });
      res.qs.sort(function(a, b){ return a.r - b.r; });
    }
    words.forEach(function(w){ var t = wordText(w); if(srAll(t, toks)) res.words.push({ w: w, rank: (w.term || '').toLowerCase().indexOf(toks[0]) === 0 ? 0 : 1 }); });
    res.words.sort(function(a, b){ return a.rank - b.rank; });
    spellWords.forEach(function(w){ var t = [w.word, w.term, w.english_meaning, w.hindi_meaning].join(' ').toLowerCase(); if(srAll(t, toks)) res.spell.push(w); });
    var count = { lessons: res.lessons.length, qs: res.qs.length, words: res.words.length + res.spell.length };
    var chips = [['all', 'All', count.lessons + count.qs + count.words], ['lessons', 'Lessons & notes', count.lessons], ['qs', 'Questions', count.qs], ['words', 'Words', count.words]];
    var html = '<div class="sr-chips">' + chips.map(function(c){ return '<button data-sr-kind="' + c[0] + '" class="' + (searchKind === c[0] ? 'on' : '') + '">' + c[1] + ' <small>' + c[2] + '</small></button>'; }).join('') + '</div>';
    var show = function(k){ return searchKind === 'all' || searchKind === k; };
    var lim = function(k, n){ return searchMore[k] ? 400 : (searchKind === 'all' ? n : n * 3); };
    var more = function(k, total, n){ return total > lim(k, n) ? '<button class="sr-more" data-sr-more="' + k + '">Show ' + Math.min(total - lim(k, n), 400) + ' more</button>' : ''; };
    if(show('lessons') && res.lessons.length){
      html += '<section class="sr-sec"><h3>Lessons &amp; notes</h3>' + res.lessons.slice(0, lim('lessons', 8)).map(function(r){
        var l = r.l, m = STUDY[l.mod];
        return '<button class="sr-item sr-lesson" data-sr-open="' + l.mod + '" data-sr-lesson="' + escapeAttr(l.id) + '" style="--sr-c:' + m.color + '"><span class="sr-ico">' + m.ico + '</span><span class="sr-body"><span class="sr-meta">' + escapeHtml(m.title) + (l.h ? ' · ' + escapeHtml(l.h) : '') + '</span><b>' + srMark(l.t, toks) + '</b>' +
          (r.rank ? '<span class="sr-snip">' + srMark(srSnippet(l.x, l.lx, toks), toks) + '</span>' : '') + '</span><span class="sr-go">Open ›</span></button>';
      }).join('') + more('lessons', res.lessons.length, 8) + '</section>';
    }
    if(show('words') && (res.words.length || res.spell.length)){
      html += '<section class="sr-sec"><h3>Words</h3>' + res.words.slice(0, lim('words', 6)).map(function(r){
        var w = r.w;
        return '<button class="sr-item" data-sr-word="' + escapeAttr(w.id) + '" style="--sr-c:var(--mustard)"><span class="sr-ico">📖</span><span class="sr-body"><span class="sr-meta">शब्दRegister' + (w.type ? ' · ' + escapeHtml(w.type) : '') + '</span><b>' + srMark(w.term || '', toks) + '</b><span class="sr-snip">' + srMark([w.english_meaning, w.hindi_meaning].filter(Boolean).join(' · '), toks) + '</span></span></button>';
      }).join('') + res.spell.slice(0, lim('words', 4)).map(function(w){
        return '<div class="sr-item" style="--sr-c:var(--maroon)"><span class="sr-ico">🔤</span><span class="sr-body"><span class="sr-meta">Spelling Bank</span><b>' + srMark(w.word || w.term || '', toks) + '</b><span class="sr-snip">' + srMark([w.english_meaning, w.hindi_meaning].filter(Boolean).join(' · '), toks) + '</span></span></div>';
      }).join('') + more('words', res.words.length, 6) + '</section>';
    }
    if(show('qs') && res.qs.length){
      html += '<section class="sr-sec"><h3>Questions</h3>' + res.qs.slice(0, lim('qs', 10)).map(function(x, i){
        var q = x.q, m = STUDY[x.mod];
        return '<div class="sr-item sr-q" style="--sr-c:' + m.color + '"><span class="sr-ico">' + m.ico + '</span><span class="sr-body"><span class="sr-meta">' + escapeHtml(m.title) + (q.tag ? ' · ' + escapeHtml(q.tag) : '') + '</span>' +
          '<span class="sr-qq">' + srMark(q.q, toks) + '</span><span class="sr-ans">✓ ' + srMark(q.o[q.a], toks) + '</span>' + (q.e ? '<span class="sr-snip">' + srMark(q.e, toks) + '</span>' : '') +
          (q.l ? '<span class="sr-links"><button data-sr-open="' + x.mod + '" data-sr-lesson="' + escapeAttr(q.l) + '">Open the lesson ›</button></span>' : '') + '</span></div>';
      }).join('') + more('qs', res.qs.length, 10) + '</section>';
    }
    if(!count.lessons && !count.qs && !count.words) html += '<div class="sr-empty"><b>Nothing found for “' + escapeHtml(q) + '”</b><p>Try fewer or shorter words — e.g. “tangent” instead of “tangents to a circle”.</p></div>';
    box.innerHTML = html;
  }
  function openSearch(prefill){
    closeAllMenus();
    searchOpen = true; searchMore = {};
    var page = document.getElementById('searchPage');
    page.classList.add('open');
    document.body.classList.add('study-on');
    var inp = document.getElementById('searchInput');
    if(typeof prefill === 'string') inp.value = prefill;
    setTimeout(function(){ inp.focus(); inp.select(); }, 30);
    try{ history.pushState({ search: 1 }, '', '#search'); }catch(e){}
    runSearch();
    loadSearchIndex().then(function(){ if(searchOpen) runSearch(); }).catch(function(){
      document.getElementById('searchResults').insertAdjacentHTML('afterbegin', '<div class="sr-empty"><b>Lesson search needs study-search.json on the site.</b><p>Words still work.</p></div>');
    });
  }
  function closeSearch(fromHistory){
    if(!searchOpen) return;
    searchOpen = false;
    document.getElementById('searchPage').classList.remove('open');
    if(!studyOpen && !drillOpen) document.body.classList.remove('study-on');
    if(!fromHistory && location.hash === '#search'){ try{ history.back(); }catch(e){} }
  }
  document.getElementById('searchBtn').addEventListener('click', function(){ openSearch(); });
  document.getElementById('searchBack').addEventListener('click', function(){ closeSearch(false); });
  document.getElementById('searchInput').addEventListener('input', function(){ searchMore = {}; clearTimeout(searchTimer); searchTimer = setTimeout(runSearch, 120); });
  document.getElementById('searchInput').addEventListener('keydown', function(ev){ if(ev.key === 'Escape'){ ev.stopPropagation(); closeSearch(false); } });
  document.getElementById('searchResults').addEventListener('click', function(ev){
    var t = ev.target.closest('[data-sr-try]'); if(t){ document.getElementById('searchInput').value = t.dataset.srTry; runSearch(); return; }
    var k = ev.target.closest('[data-sr-kind]'); if(k){ searchKind = k.dataset.srKind; searchMore = {}; runSearch(); return; }
    var mo = ev.target.closest('[data-sr-more]'); if(mo){ searchMore[mo.dataset.srMore] = 1; runSearch(); return; }
    var o = ev.target.closest('[data-sr-open]'); if(o){ openStudy(o.dataset.srOpen, false, o.dataset.srLesson); return; }
    var w = ev.target.closest('[data-sr-word]'); if(w){ openWordPreviewModal(w.dataset.srWord); return; }
  });
  document.addEventListener('keydown', function(ev){
    var tag = (ev.target && ev.target.tagName) || '';
    if(searchOpen || !currentUser || studyOpen || drillOpen) return;
    if(((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === 'k') || (ev.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(tag) && !(ev.target && ev.target.isContentEditable))){ ev.preventDefault(); openSearch(); }
  });
  window.addEventListener('popstate', function(){ if(searchOpen && location.hash !== '#search' && !studyOpen) closeSearch(true); });

  // ---- Progress tab: every subject at a glance ----
  function renderStudyStats(){
    var box = document.getElementById('studyStatsPanel');
    if(!box) return;
    var ids = Object.keys(STUDY), tq = 0, tr = 0, tl = 0, tt = 0;
    var rows = ids.map(function(id){
      var m = STUDY[id], pr = studyProgress(id), pct = pr.total ? Math.round(pr.done * 100 / pr.total) : 0;
      tq += pr.tried; tr += pr.right; tl += pr.done; tt += pr.total;
      return '<button class="ss-row" data-open-study="' + id + '" style="--hub-c:' + m.color + ';"><span class="hub-ring">' + ringSvg(pct, m.color, 44) + '<span>' + pct + '%</span></span>' +
        '<span class="ss-name"><b>' + m.ico + ' ' + escapeHtml(m.title) + '</b><small>' + (m.subj === 'english' ? 'English' : m.subj === 'maths' ? 'Maths' : m.subj === 'reasoning' ? 'Reasoning' : ((GS_SUBJECTS.filter(function(g){ return g[0] === m.gsub; })[0] || ['', 'GS'])[1])) + '</small></span>' +
        '<span class="ss-num"><b>' + pr.done + '/' + pr.total + '</b><small>' + m.unit + '</small></span>' +
        '<span class="ss-num ss-acc"><b>' + (pr.acc === null ? '—' : pr.acc + '%') + '</b><small>' + pr.tried + ' tried</small></span>' +
        '<span class="ss-num' + (pr.wrong ? ' bad' : '') + '"><b>' + pr.wrong + '</b><small>mistakes</small></span></button>';
    }).join('');
    var hist = mockHistory().slice(-8);
    var mocks = hist.length ? '<div class="ss-mocks">' + hist.map(function(h){
      var p = h.max ? Math.max(0, Math.round(h.score * 100 / h.max)) : 0;
      return '<div title="' + escapeAttr(new Date(h.at).toLocaleDateString('en-IN') + ' · ' + h.score + '/' + h.max) + '"><i style="height:' + Math.max(4, Math.round(p * 1.05)) + 'px"></i><span>' + h.score + '</span></div>';
    }).join('') + '</div>' : '<p class="help">No mixed mock taken yet.</p>';
    box.innerHTML = '<h2>All subjects · पाठShala</h2>' +
      '<div class="dq-kpis" style="margin-bottom:14px;"><div style="--dq-c:var(--teal);"><b>' + tl + '<small style="font-size:15px; color:var(--ink-faint);"> / ' + tt + '</small></b><span>lessons & rules done</span></div>' +
        '<div style="--dq-c:var(--mustard);"><b>' + tq + '</b><span>questions answered</span></div>' +
        '<div style="--dq-c:var(--accent);"><b>' + (tq ? Math.round(tr * 100 / tq) + '%' : '—') + '</b><span>accuracy</span></div>' +
        '<div style="--dq-c:var(--maroon);"><b>' + totalMistakes() + '</b><span>in Mistakes book</span></div></div>' +
      '<div class="ss-list">' + rows + '</div>' +
      '<h3 class="dq-h3">Mixed mock scores</h3>' + mocks +
      '<div class="dq-nav"><button class="btn ghost" data-hub-act="mistakes">Open Mistakes book</button><button class="btn teal" data-hub-act="mock">New mixed mock</button></div>';
  }
  document.getElementById('studyStatsPanel').addEventListener('click', studyClick);
  function studyMeta(){ try{ return JSON.parse(lsGet('shabdStudySync') || '{}'); }catch(e){ return {}; } }
  function setStudyMeta(id, patch){ var m = studyMeta(); m[id] = Object.assign({}, m[id] || {}, patch); lsSet('shabdStudySync', JSON.stringify(m)); }
  function studySkinValue(){ return document.body.classList.contains('theme-indigo') ? 'indigo' : 'paper'; }
  function studyThemeValue(){ var v = lsGet('vocabRegisterDarkMode'); return v === '1' ? 'dark' : (v === '0' ? 'light' : 'auto'); }
  function studySyncLabel(t){ var el = document.getElementById('studySync'); if(el) el.textContent = t || ''; }
  function studyDocRef(id){ return db.collection('users').doc(currentUser.uid).collection('study').doc(id); }

  /** Before opening: take the account's copy if it is newer than this device's. */
  async function studyPull(id){
    if(!currentUser || !studyMod(id)) return;
    try{
      var snap = await studyDocRef(id).get();
      if(snap.exists) studyApply(id, snap.data() || {});
    }catch(e){ /* offline or rules not added yet: keep this device's copy */ }
  }
  /** Bring one module's synced copy (from your account) into this device. Returns true if this device's copy changed. */
  function studyApply(id, r){
    var mod = studyMod(id);
    if(!mod || typeof r.data !== 'string') return false;
    if(r.key && mod.key && r.key !== mod.key) return false;   /* saved by an older version of this app */
    var local = lsGet(mod.key);
    if(id === 'tracker' || id === 'todo'){
      // lists kept on several devices: merge both, then upload the merge if this device added anything
      var merged = (id === 'todo' ? todoMerge : trackMerge)(trackParse(local), trackParse(r.data)), mj = JSON.stringify(merged);
      if(mj !== local) lsSet(mod.key, mj);
      if(mj !== r.data){ setStudyMeta(id, { localAt: Date.now() }); clearTimeout(studyApply['t' + id]); studyApply['t' + id] = setTimeout(function(){ studyPush(id); }, 1500); }
      else setStudyMeta(id, { syncedAt: r.updatedAt || Date.now(), localAt: r.updatedAt || Date.now() });
      return mj !== local;
    }
    var meta = studyMeta()[id] || {};
    var localAt = meta.localAt || 0, syncedAt = meta.syncedAt || 0;
    var localChanged = local !== null && localAt > syncedAt;
    if((local === null || (r.updatedAt || 0) > syncedAt) && (!localChanged || (r.updatedAt || 0) >= localAt)){
      lsSet(mod.key, r.data);
      setStudyMeta(id, { syncedAt: r.updatedAt || Date.now(), localAt: r.updatedAt || Date.now() });
      return r.data !== local;
    }
    return false;
  }
  /** Live sync: changes made on your other devices arrive here as they happen. */
  var unsubStudy = null;
  function studyListen(){
    if(unsubStudy){ unsubStudy(); unsubStudy = null; }
    if(!currentUser) return;
    unsubStudy = db.collection('users').doc(currentUser.uid).collection('study').onSnapshot(function(snap){
      var changed = [];
      snap.docChanges().forEach(function(c){
        if(c.type === 'removed' || c.doc.metadata.hasPendingWrites) return;   // our own unsent writes
        var id = c.doc.id;
        if(!studyMod(id) || id === studyOpen) return;                         // an open mini app keeps its own copy until closed
        if(studyApply(id, c.doc.data() || {})) changed.push(id);
      });
      if(!changed.length) return;
      if(changed.indexOf('todo') !== -1 && isActive('tasks')) renderTodo();
      renderHomeSoon();
    }, function(){ /* rules not added yet: pulls on opening still work */ });
  }
  function studyPush(id){
    var mod = studyMod(id);
    if(!currentUser || !mod) return;
    var data = lsGet(mod.key);
    if(data === null) return;
    var meta = studyMeta()[id] || {};
    if(meta.syncedAt && meta.syncedAt >= (meta.localAt || 0)) return;
    var at = meta.localAt || Date.now();
    studySyncLabel('Saving…');
    studyDocRef(id).set({ data: data, key: mod.key, updatedAt: at }).then(function(){
      setStudyMeta(id, { syncedAt: at });
      if(studyOpen === id) studySyncLabel('✓ Progress saved to your account');
    }).catch(function(e){
      if(studyOpen === id) studySyncLabel(String(e.message || '').indexOf('permission') !== -1 ? 'Progress on this device only (add the study rule)' : 'Offline — will save later');
    });
  }
  /** How many questions answered and lessons finished a module's saved state shows. */
  function studyCounts(id, json){
    var st; try{ st = JSON.parse(json || '{}') || {}; }catch(e){ st = {}; }
    var q = Object.keys(st.ans || {}).length, l = 0;
    if(id === 'grammar') l = Object.keys(st.done || {}).length;
    else l = Object.keys(st.les || {}).filter(function(k){ return st.les[k] && st.les[k].done; }).length;
    return { q: q, l: l };
  }
  function studyCheckChange(){
    if(!studyOpen) return;
    var cur = lsGet(STUDY[studyOpen].key);
    if(cur === studyLast) return;
    var a = studyCounts(studyOpen, studyLast), b = studyCounts(studyOpen, cur);
    var pts = Math.max(0, b.q - a.q) * GOAL_PER_Q + Math.max(0, b.l - a.l) * GOAL_PER_LESSON;
    if(pts) addGoalExtra(pts);
    studyLast = cur;
    setStudyMeta(studyOpen, { localAt: Date.now() });
    clearTimeout(studyPushTimer);
    var id = studyOpen;
    studyPushTimer = setTimeout(function(){ studyPush(id); }, 2500);
  }
  window.addEventListener('storage', function(ev){ if(studyOpen && ev.key === STUDY[studyOpen].key) studyCheckChange(); });

  async function openStudy(id, fromHistory, lesson){
    var mod = STUDY[id];
    if(!mod) return;
    closeAllMenus();
    studyOpen = id;
    setStudyMeta(id, { openedAt: Date.now() });
    document.getElementById('studyTitle').textContent = mod.title;
    document.getElementById('studyBackLabel').textContent = searchOpen ? 'Search' : isActive('stats') ? 'Progress' : 'पाठShala';
    studySyncLabel('Loading your progress…');
    document.getElementById('studyOverlay').classList.add('open');
    document.body.classList.add('study-on');
    if(!fromHistory){ try{ history.pushState({ study: id }, '', '#study-' + id); }catch(e){} }
    // fetch this app's progress from your account, but don't keep the app waiting more than a second for it
    var pulled = false, pull = studyPull(id).then(function(){ pulled = true; }, function(){ pulled = true; });
    await Promise.race([pull, new Promise(function(r){ setTimeout(r, 1000); })]);
    if(studyOpen !== id) return;
    studyLast = lsGet(mod.key);
    trackStart(id);
    Object.keys(STUDY).concat(Object.keys(STUDY_EXTRA)).forEach(function(k){ studyPush(k); });   // this device's unsaved progress (incl. from before syncing existed)
    var frameUrl = mod.file + '?embed=1&skin=' + studySkinValue() + '&theme=' + studyThemeValue() + (lesson ? '&lesson=' + encodeURIComponent(lesson) : '');
    setStudyFrame(frameUrl);
    if(!pulled){   // progress from your account arrived after the app opened: reopen it with the newer copy
      var shown = lsGet(mod.key);
      pull.then(function(){ if(studyOpen === id && lsGet(mod.key) !== shown){ studyLast = lsGet(mod.key); setStudyFrame(frameUrl); } });
    }
    studySyncLabel(currentUser ? '✓ Synced with your account' : '');
    clearInterval(studyWatch);
    studyWatch = setInterval(function(){ studyCheckChange(); trackTick(); }, 4000);
  }
  /** Point the study frame at a page without adding an entry to the back history
      (setting .src adds one, so the phone's Back button needed several presses). */
  function setStudyFrame(url){
    var f = document.getElementById('studyFrame');
    try{ if(f.contentWindow){ f.contentWindow.location.replace(url); return; } }catch(e){}
    f.src = url;
  }
  function closeStudy(fromHistory){
    if(!studyOpen) return;
    studyCheckChange();
    var id = studyOpen, sess = trackFinish();
    trackToast(sess, id);
    clearTimeout(studyPushTimer);
    studyPush(id);
    clearInterval(studyWatch);
    studyOpen = null;
    document.getElementById('studyOverlay').classList.remove('open');
    if(!drillOpen) document.body.classList.remove('study-on');
    renderHomeSoon();
    setStudyFrame('about:blank');
    if(!fromHistory && location.hash.indexOf('#study-') === 0){ try{ history.back(); }catch(e){} }
  }
  document.getElementById('studyBack').addEventListener('click', function(){ closeStudy(false); });
  document.getElementById('studyTrackBtn').addEventListener('click', function(){ if(studyOpen){ trackTick(); openTrackerApp(studyOpen); } });
  window.addEventListener('popstate', function(){
    if(location.hash === '#drill') return;
    if(drillOpen){ closeDrill(true); if(drillOpen) return; }
    var m = /^#study-(\w+)/.exec(location.hash);
    if(m && STUDY[m[1]]){ if(studyOpen !== m[1]) openStudy(m[1], true); return; }
    if(studyOpen) closeStudy(true);
  });
  window.addEventListener('pagehide', function(){ if(studyOpen){ studyCheckChange(); trackTick(); studyPush(studyOpen); } });
  // keep an open module in step with the app's Light / Dark / Auto choice
  new MutationObserver(function(){
    var f = document.getElementById('studyFrame');
    if(studyOpen && f.contentWindow) f.contentWindow.postMessage({ type: 'shabd-theme', theme: studyThemeValue(), skin: studySkinValue() }, location.origin);
  }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  (function(){
    var m = /^#study-(\w+)/.exec(location.hash);
    if(m && STUDY[m[1]]) setTimeout(function(){ if(currentUser) openStudy(m[1], true); }, 1500);
    else if(location.hash === '#pathshala'){ try{ history.replaceState(null, '', location.pathname + location.search); }catch(e){} }
  })();


  // ================= पाठShala extras: progress rings, one Mistakes book, mixed mock test =================
  STUDY.grammar.lessons = 100; STUDY.grammar.unit = 'rules';
  STUDY.bns.lessons = 15; STUDY.bns.unit = 'lessons';
  STUDY.schemes.lessons = 15; STUDY.schemes.unit = 'lessons';
  STUDY.census.lessons = 11; STUDY.census.unit = 'lessons';
  STUDY.intlorgs.lessons = 12; STUDY.intlorgs.unit = 'lessons';
  STUDY.reports.lessons = 14; STUDY.reports.unit = 'lessons';
  STUDY.sports.lessons = 15; STUDY.sports.unit = 'lessons';
  STUDY.festivals.lessons = 16; STUDY.festivals.unit = 'lessons';
  STUDY.iprplans.lessons = 12; STUDY.iprplans.unit = 'lessons';
  STUDY.folkdances.lessons = 16; STUDY.folkdances.unit = 'lessons';
  STUDY.appointments.lessons = 13; STUDY.appointments.unit = 'lessons';
  STUDY.polity.lessons = 20; STUDY.polity.unit = 'lessons';
  STUDY.economics.lessons = 20; STUDY.economics.unit = 'lessons';
  STUDY.space.lessons = 16; STUDY.space.unit = 'lessons';
  STUDY.physics.lessons = 16; STUDY.physics.unit = 'lessons';
  STUDY.biology.lessons = 24; STUDY.biology.unit = 'lessons';
  function gsIds(){ return Object.keys(STUDY).filter(function(id){ return STUDY[id].subj === 'gs'; }); }
  function englishIds(){ return Object.keys(STUDY).filter(function(id){ return STUDY[id].subj === 'english'; }); }
  function mathIds(){ return Object.keys(STUDY).filter(function(id){ return STUDY[id].subj === 'maths'; }); }
  function mathQIds(){ return mathIds().filter(function(id){ return !STUDY[id].noq; }); }
  function reasoningIds(){ return Object.keys(STUDY).filter(function(id){ return STUDY[id].subj === 'reasoning'; }); }
  var STUDY_EXTRA = { mocks: { key: 'shabdMockHistory', title: 'Mixed mock history' }, tracker: { key: 'shabdTracker', title: 'Study tracker' }, todo: { key: 'shabdTodo', title: 'Tasks' } };
  function studyMod(id){ return STUDY[id] || STUDY_EXTRA[id]; }
  // ================= Study tracker: one record per visit to a mini app =================
  // Stored in localStorage 'shabdTracker' and synced like the mini apps (users/{uid}/study/tracker).
  // { v:1, every:15, apps:{ id:{ s:[session…], completedAt, snooze } } }
  // session = { id, at (start ms), d (active seconds), q (answered this visit), r (right of those), sc (overall % right after it),
  //             cov (% of the app's questions tried), l (lessons done), done (1 = finished the app in this visit), m (mock {score,max,acc}) }
  var TRACK_KEY = 'shabdTracker', TRACK_LIVE = 'shabdTrackerLive', TRACK_MIN_SEC = 120, TRACK_KEEP = 60;
  function trackData(){ var t; try{ t = JSON.parse(lsGet(TRACK_KEY) || '{}') || {}; }catch(e){ t = {}; } t.v = 1; t.every = t.every || 15; t.apps = t.apps || {}; return t; }
  function trackSave(t){
    lsSet(TRACK_KEY, JSON.stringify(t));
    setStudyMeta('tracker', { localAt: Date.now() });
    clearTimeout(trackSave.timer);
    trackSave.timer = setTimeout(function(){ studyPush('tracker'); }, 1500);
  }
  /** Two devices' trackers: keep every session from both, newest settings win. */
  function trackMerge(a, b){
    var out = { v: 1, every: (a.at || 0) >= (b.at || 0) ? (a.every || b.every || 15) : (b.every || a.every || 15), at: Math.max(a.at || 0, b.at || 0), apps: {} };
    [a.apps || {}, b.apps || {}].forEach(function(apps){
      Object.keys(apps).forEach(function(id){
        var x = apps[id] || {}, o = out.apps[id] || (out.apps[id] = { s: [] });
        var seen = {}; o.s.forEach(function(s){ seen[s.id] = 1; });
        (x.s || []).forEach(function(s){ if(!seen[s.id]){ o.s.push(s); seen[s.id] = 1; } });
        if(x.completedAt && (!o.completedAt || x.completedAt < o.completedAt)) o.completedAt = x.completedAt;
        if(x.snooze && (!o.snooze || x.snooze > o.snooze)) o.snooze = x.snooze;
        if((x.u || 0) >= (o.u || 0)){ o.u = x.u || 0; if('every' in x) o.every = x.every; else delete o.every; if(x.nextOn) o.nextOn = x.nextOn; else delete o.nextOn; }
        if(x.manual){ o.manual = (o.manual || []).concat(x.manual.filter(function(v){ return (o.manual || []).indexOf(v) === -1; })).sort().slice(-20); }
      });
    });
    Object.keys(out.apps).forEach(function(id){ var o = out.apps[id]; o.s.sort(function(p, q){ return p.at - q.at; }); if(o.s.length > TRACK_KEEP) o.s = o.s.slice(-TRACK_KEEP); });
    return out;
  }
  function trackParse(json){ try{ return JSON.parse(json || '{}') || {}; }catch(e){ return {}; } }
  /** What the mini app's saved state says right now. */
  function trackSnap(id){
    var st = studyState(id), ans = st.ans || {}, keys = Object.keys(ans);
    var l = id === 'grammar' ? Object.keys(st.done || {}).length : Object.keys(st.les || {}).filter(function(k){ return st.les[k] && st.les[k].done; }).length;
    return { ans: ans, tried: keys.length, right: keys.filter(function(k){ return ans[k] === 1; }).length, l: l, mocks: Array.isArray(st.mocks) ? st.mocks.length : 0, lastMock: Array.isArray(st.mocks) && st.mocks.length ? st.mocks[st.mocks.length - 1] : null };
  }
  function trackTotalQ(id){
    if(studyBank && studyBank.modules && studyBank.modules[id]) return studyBank.modules[id].qs.length;
    var m = /([\d,]+)\s+questions/.exec(STUDY[id].meta || ''); return m ? +m[1].replace(/,/g, '') : 0;
  }

  // ---- the visit in progress ----
  var trackLive = null, trackLastInput = 0;
  function trackStart(id){
    trackFinishStale();
    var b = trackSnap(id);
    trackLive = { id: id, at: Date.now(), act: 0, tick: Date.now(), base: { ans: b.ans, l: b.l, mocks: b.mocks } };
    trackLastInput = Date.now();
    lsSet(TRACK_LIVE, JSON.stringify(trackLive));
    trackLabel();
  }
  /** Counts only time the app is on screen and in use (no input for 3 minutes = paused). */
  function trackTick(){
    if(!trackLive) return;
    var now = Date.now(), gap = Math.min(now - trackLive.tick, 10000);
    trackLive.tick = now;
    if(document.visibilityState === 'visible' && now - trackLastInput < 180000) trackLive.act += gap / 1000;
    lsSet(TRACK_LIVE, JSON.stringify(trackLive));
    trackLabel();
  }
  function trackInput(){ trackLastInput = Date.now(); }
  ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(function(t){ document.addEventListener(t, trackInput, { passive: true, capture: true }); });
  /** Watch clicks and scrolling inside the mini app too (same site, so its window is reachable). */
  document.getElementById('studyFrame').addEventListener('load', function(){
    try{ var w = this.contentWindow; ['pointerdown', 'keydown', 'wheel', 'touchstart', 'scroll'].forEach(function(t){ w.addEventListener(t, trackInput, { passive: true, capture: true }); }); }catch(e){}
  });
  function trackLabel(){
    var el = document.getElementById('studyTimer');
    if(!el) return;
    if(!trackLive){ el.textContent = ''; return; }
    var b = trackLive.base, s = trackSnap(trackLive.id), q = 0;
    Object.keys(s.ans).forEach(function(k){ if(b.ans[k] !== s.ans[k]) q++; });
    el.textContent = '⏱ ' + Math.floor(trackLive.act / 60) + ' min' + (q ? ' · ' + q + ' answered' : '');
  }
  /** Closes the visit: saves it as a session if it was real study (2+ minutes, or any answers / lessons). */
  function trackFinish(live){
    live = live || trackLive;
    if(!live || !STUDY[live.id]) { trackLive = null; lsSet(TRACK_LIVE, ''); return null; }
    if(live === trackLive) trackTick();
    var id = live.id, m = STUDY[id], b = live.base, s = trackSnap(id), q = 0, r = 0;
    Object.keys(s.ans).forEach(function(k){ if(b.ans[k] !== s.ans[k]){ q++; if(s.ans[k] === 1) r++; } });
    var total = trackTotalQ(id), sess = null;
    if(live.act >= TRACK_MIN_SEC || q > 0 || s.l > b.l || s.mocks > b.mocks){
      var t = trackData(), a = t.apps[id] || (t.apps[id] = { s: [] });
      sess = { id: live.at.toString(36) + Math.random().toString(36).slice(2, 6), at: live.at, d: Math.round(live.act), q: q, r: r,
        sc: s.tried ? Math.round(s.right * 100 / s.tried) : null, cov: total ? Math.min(100, Math.round(s.tried * 100 / total)) : null, l: s.l };
      if(s.mocks > b.mocks && s.lastMock){ var lm = s.lastMock; sess.m = { score: lm.score, max: lm.max, acc: lm.acc }; }
      if(m.lessons && s.l >= m.lessons && b.l < m.lessons){ sess.done = 1; if(!a.completedAt) a.completedAt = Date.now(); }
      if(m.lessons && s.l >= m.lessons && !a.completedAt) a.completedAt = Date.now();
      a.s.push(sess); if(a.s.length > TRACK_KEEP) a.s = a.s.slice(-TRACK_KEEP);
      delete a.snooze;
      if(a.nextOn && a.nextOn <= Date.now() + DAY_MS){ delete a.nextOn; a.u = Date.now(); }
      t.at = Date.now();
      trackSave(t);
    }
    if(live === trackLive) trackLive = null;
    lsSet(TRACK_LIVE, '');
    trackLabel();
    return sess;
  }
  /** A visit that never closed properly (app killed, tab closed) is saved the next time the app starts. */
  function trackFinishStale(){
    var old = trackParse(lsGet(TRACK_LIVE));
    if(old && old.id && (!trackLive || trackLive.at !== old.at)) trackFinish(old);
  }
  function trackToast(sess, id){
    if(!sess) return;
    var prev = trackSessions(id).filter(function(x){ return x.id !== sess.id && x.sc !== null && x.sc !== undefined; }).pop();
    var bits = [Math.max(1, Math.round(sess.d / 60)) + ' min'];
    if(sess.q) bits.push(sess.q + ' answered · ' + Math.round(sess.r * 100 / sess.q) + '% right');
    if(sess.m) bits.push('mock ' + sess.m.score + '/' + sess.m.max);
    if(sess.sc !== null && sess.sc !== undefined) bits.push('score ' + sess.sc + '%' + (prev ? (sess.sc > prev.sc ? ' ↑' : sess.sc < prev.sc ? ' ↓' : '') : ''));
    showToast('Session saved · ' + bits.join(' · ') + (sess.done ? ' · 🎉 app completed' : ''));
  }

  // ---- reading the tracker ----
  function trackSessions(id){ var a = trackData().apps[id]; return a && a.s ? a.s : []; }
  function trackEvery(){ return trackData().every || 15; }
  function trackDaysAgo(ms){ if(!ms) return null; var a = new Date(ms); a.setHours(0, 0, 0, 0); var b = new Date(); b.setHours(0, 0, 0, 0); return Math.round((b - a) / DAY_MS); }
  function trackAgo(ms){ var d = trackDaysAgo(ms); return d === null ? '—' : d === 0 ? 'today' : d === 1 ? 'yesterday' : d + ' days ago'; }
  function trackDate(ms){ return ms ? new Date(ms).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '—'; }
  function fmtShort(min){ min = Math.max(5, Math.round(min / 5) * 5); return min < 60 ? min + ' min' : Math.floor(min / 60) + 'h' + (min % 60 ? ' ' + (min % 60) + 'm' : ''); }
  function fmtMin(min){ min = Math.max(5, Math.round(min / 5) * 5); return min < 60 ? min + ' min' : Math.floor(min / 60) + ' h' + (min % 60 ? ' ' + (min % 60) + ' min' : ''); }
  /** Everything the cards, Home and the tracker screen need for one app. */
  function trackInfo(id){
    var m = STUDY[id], t = trackData(), a = t.apps[id] || {}, ss = a.s || [], pr = studyProgress(id);
    var last = ss[ss.length - 1] || null, scored = ss.filter(function(x){ return x.sc !== null && x.sc !== undefined; });
    var started = ss.length > 0 || pr.done > 0 || pr.tried > 0;
    var completed = a.completedAt || (m.lessons && pr.done >= m.lessons ? (last ? last.at : Date.now()) : 0);
    var manual = (a.manual || []).reduce(function(mx, v){ return Math.max(mx, v); }, 0);
    var lastStudy = Math.max(last ? last.at : 0, manual), off = a.every === 0, every = a.every || t.every || 15, visited = (studyMeta()[id] || {}).openedAt || 0;
    var base = lastStudy || (started ? visited : 0);              // studied before the tracker existed: count from the last visit
    var nextAt = base ? base + every * DAY_MS : 0;
    if(a.nextOn && a.nextOn > base) nextAt = a.nextOn;             // a date you picked
    if(a.snooze && a.snooze > nextAt) nextAt = a.snooze;
    var due = !off && started && base > 0 && Date.now() >= nextAt;
    var revisedAt = 0;
    if(completed) ss.forEach(function(x){ if(x.at > completed + 3600000) revisedAt = x.at; });
    if(manual > revisedAt) revisedAt = manual;
    // time: first pass = every lesson + every question; a revision round = skim the lessons + one mock
    var perLesson = id === 'grammar' ? 3 : m.noq ? 5 : 7, totalQ = trackTotalQ(id);
    var fullMin = (m.lessons || 0) * perLesson + totalQ * 0.6;
    var revMin = Math.max(15, (m.lessons || 0) * (id === 'grammar' ? 0.5 : 2) + (m.noq ? 0 : 15));   // skim every lesson + one 25-question mock
    var real = ss.filter(function(x){ return x.d >= TRACK_MIN_SEC; }), avgMin = real.length >= 2 ? real.reduce(function(s, x){ return s + x.d; }, 0) / real.length / 60 : 0;
    var status = !started ? 'new' : due ? 'due' : completed ? 'done' : 'progress';
    return { id: id, m: m, pr: pr, sessions: ss, last: last, scored: scored, started: started, completed: completed, revisedAt: revisedAt,
      visited: visited, lastStudy: lastStudy, base: base, nextAt: off ? 0 : nextAt, due: due, every: every, off: off, ownEvery: a.every, nextOn: a.nextOn || 0, manual: a.manual || [],
      fullMin: fullMin, revMin: revMin, avgMin: avgMin, status: status,
      score: scored.length ? scored[scored.length - 1].sc : pr.acc, prevScore: scored.length > 1 ? scored[scored.length - 2].sc : null };
  }
  var TRACK_STATUS = { new: ['Not started', 'st-new'], progress: ['In progress', 'st-prog'], done: ['Completed', 'st-done'], due: ['Revise now', 'st-due'] };
  function trackDueList(){ return Object.keys(STUDY).map(trackInfo).filter(function(x){ return x.due; }).sort(function(a, b){ return (a.lastStudy || 0) - (b.lastStudy || 0); }); }
  function trackTrend(x){
    if(x.score === null || x.score === undefined) return '—';
    var d = x.prevScore === null || x.prevScore === undefined ? 0 : x.score - x.prevScore;
    return x.score + '%' + (d > 0 ? ' <span class="tr-up">↑' + d + '</span>' : d < 0 ? ' <span class="tr-down">↓' + (-d) + '</span>' : '');
  }
  function trackSpark(x){
    var pts = x.scored.slice(-12).map(function(s){ return s.sc; });
    if(pts.length < 2) return '';
    var w = 84, h = 26, n = pts.length, path = pts.map(function(v, i){ return (i ? 'L' : 'M') + (i * (w - 4) / (n - 1) + 2).toFixed(1) + ' ' + (h - 3 - v / 100 * (h - 6)).toFixed(1); }).join(' ');
    return '<svg class="tr-spark" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" aria-hidden="true"><path d="' + path + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  /** Home: the nudge. Shows only when something is due. */
  function homeReviseCard(){
    var list = trackDueList();
    if(!list.length) return '';
    return '<div class="home-card home-revise"><div class="home-card-h">Time to revise <span class="lvl">every ' + trackEvery() + ' days</span></div>' +
      list.slice(0, 5).map(function(x){
        return '<div class="rv-row" style="--hub-c:' + x.m.color + ';"><span class="ic">' + x.m.ico + '</span><span class="tx"><b>' + escapeHtml(x.m.title) + '</b><small>' +
          (x.lastStudy ? 'Last studied ' + trackAgo(x.lastStudy) : 'Last opened ' + trackAgo(x.base)) + (x.score !== null && x.score !== undefined ? ' · score ' + x.score + '%' : '') + ' · ≈ ' + fmtMin(x.revMin) + '</small></span>' +
          '<button class="btn ghost sm" data-track-snooze="' + x.id + '" title="Remind me in 3 days">Later</button><button class="btn teal sm" data-open-study="' + x.id + '">Revise</button></div>';
      }).join('') + (list.length > 5 ? '<button class="rv-more" data-track-open="all">+ ' + (list.length - 5) + ' more in the tracker ›</button>' : '') + '</div>';
  }
  /** Progress tab: every app in one organised table. */
  function renderTracker(){
    var box = document.getElementById('trackerPanel');
    if(!box) return;
    var all = Object.keys(STUDY).map(trackInfo), n = { new: 0, progress: 0, done: 0, due: 0 };
    all.forEach(function(x){ n[x.status]++; });
    var order = { due: 0, progress: 1, done: 2, new: 3 };
    all.sort(function(a, b){ return order[a.status] - order[b.status] || (b.lastStudy || 0) - (a.lastStudy || 0); });
    var every = trackEvery();
    box.innerHTML = '<div class="tr-head"><h2>Study tracker</h2><label class="tr-every">Remind me to revise every <select id="trackEvery">' +
        [10, 15, 20, 30].map(function(d){ return '<option value="' + d + '"' + (d === every ? ' selected' : '') + '>' + d + ' days</option>'; }).join('') + '</select></label></div>' +
      '<div class="tr-kpis"><button data-track-filter="due" class="' + (n.due ? 'hot' : '') + '"><b>' + n.due + '</b><span>Revise now</span></button><button data-track-filter="progress"><b>' + n.progress + '</b><span>In progress</span></button>' +
        '<button data-track-filter="done"><b>' + n.done + '</b><span>Completed</span></button><button data-track-filter="new"><b>' + n.new + '</b><span>Not started</span></button></div>' +
      '<div class="tr-table" id="trTable"><div class="tr-row tr-th"><span>App</span><span>Status</span><span>Last studied</span><span>Score</span><span>Next revision</span></div>' +
      all.map(function(x){
        var st = TRACK_STATUS[x.status], next = !x.started ? '—' : x.off ? 'off' : x.due ? '<b class="tr-down">now</b>' : trackDate(x.nextAt);
        return '<button class="tr-row" data-track-open="' + x.id + '" data-st="' + x.status + '" style="--hub-c:' + x.m.color + ';">' +
          '<span class="tr-app"><i>' + x.m.ico + '</i><span><b>' + escapeHtml(x.m.title) + '</b><small>' + x.sessions.length + ' session' + (x.sessions.length === 1 ? '' : 's') + (x.completed ? ' · completed ' + trackDate(x.completed) : '') + '</small></span></span>' +
          '<span><span class="tr-chip ' + st[1] + '">' + st[0] + '</span></span>' +
          '<span class="tr-when">' + (x.lastStudy ? trackAgo(x.lastStudy) : x.visited ? '<small>visited ' + trackAgo(x.visited) + '</small>' : '—') + '</span>' +
          '<span class="tr-score">' + trackTrend(x) + trackSpark(x) + '</span>' +
          '<span class="tr-when">' + next + '</span></button>';
      }).join('') + (n.new ? '<button class="tr-more" data-track-filter="new">+ ' + n.new + ' not started yet — show</button>' : '') + '</div>' +
      '<p class="help" style="margin-top:10px;">A session is saved each time you study a mini app for 2 minutes or more (or answer anything). Score = share of the app’s questions you got right on your latest try, so it rises as you fix mistakes. Only active time is counted.</p>';
    document.getElementById('trackEvery').addEventListener('change', function(){ var t = trackData(); t.every = +this.value; t.at = Date.now(); trackSave(t); renderTracker(); renderHomeSoon(); });
  }
  /** Mock tests taken inside the app (newest last): the app's own list, else what sessions captured. */
  function trackMocks(id){
    var st = studyState(id), list = Array.isArray(st.mocks) ? st.mocks.slice() : [];
    if(!list.length) trackSessions(id).forEach(function(x){ if(x.m) list.push({ d: trackDate(x.at), score: x.m.score, max: x.m.max, acc: x.m.acc }); });
    return list.map(function(mk){ return { d: mk.d || '', score: mk.score, max: mk.max, pct: mk.max ? Math.max(0, Math.round(mk.score * 100 / mk.max)) : 0, acc: mk.acc }; });
  }
  function trackSheet(html){
    var bg = document.getElementById('modalBg'), body = document.getElementById('modalBody');
    body.innerHTML = html; bg.classList.add('open');
    body.querySelectorAll('[data-tr-close]').forEach(function(bt){ bt.addEventListener('click', function(){ bg.classList.remove('open'); body.innerHTML = ''; }); });
    return body;
  }
  function trackSheetHead(x, tab){
    return '<div class="tr-sheet-h"><h3>' + x.m.ico + ' ' + escapeHtml(x.m.title) + ' <span class="tr-chip ' + TRACK_STATUS[x.status][1] + '">' + TRACK_STATUS[x.status][0] + '</span></h3>' +
      '<div class="tr-tabs"><button data-track-history="' + x.id + '" class="' + (tab === 'h' ? 'on' : '') + '">🕘 History</button><button data-track-revise="' + x.id + '" class="' + (tab === 'r' ? 'on' : '') + '">🔁 Revision plan</button></div></div>';
  }
  /** History: every session, recent averages and mock scores. */
  function openTrackHistory(id){
    var x = trackInfo(id), m = x.m, ss = x.sessions.slice().reverse();
    var withQ = x.sessions.filter(function(s){ return s.q > 0; }), last3 = withQ.slice(-3);
    var avg3 = last3.length ? Math.round(last3.reduce(function(t, s){ return t + s.r * 100 / s.q; }, 0) / last3.length) : null;
    var best = x.scored.reduce(function(bst, s){ return Math.max(bst, s.sc); }, 0);
    var mins = Math.round(x.sessions.reduce(function(t, v){ return t + v.d; }, 0) / 60);
    var mocks = trackMocks(id), m5 = mocks.slice(-5), mAvg = m5.length ? Math.round(m5.reduce(function(t, k){ return t + k.pct; }, 0) / m5.length) : null;
    var kpi = function(v, label, sub){ return '<div><b>' + v + '</b><span>' + label + '</span>' + (sub ? '<small>' + sub + '</small>' : '') + '</div>'; };
    var chart = x.scored.length >= 2 ? '<div class="tr-chart">' + x.scored.slice(-14).map(function(s){
      return '<div title="' + escapeAttr(trackDate(s.at) + ' · ' + s.sc + '%') + '"><i style="height:' + Math.max(4, s.sc) + '%"></i><span>' + s.sc + '</span><small>' + trackDate(s.at) + '</small></div>';
    }).join('') + '</div>' : '';
    trackSheet('<div class="tr-sheet" style="--hub-c:' + m.color + ';">' + trackSheetHead(x, 'h') +
      '<div class="tr-kpi5">' +
        kpi(avg3 === null ? '—' : avg3 + '%', 'Avg correct', 'last ' + (last3.length || 3) + ' sessions') +
        kpi(x.score === null || x.score === undefined ? '—' : trackTrend(x), 'App score now', best ? 'best ' + best + '%' : '') +
        kpi(m.noq ? '—' : (mAvg === null ? '—' : mAvg + '%'), 'Mock average', m5.length ? 'last ' + m5.length + ' mocks' : 'no mock yet') +
        kpi(x.pr.done + '<small>/' + x.pr.total + '</small>', m.unit || 'lessons', x.completed ? 'completed ' + trackDate(x.completed) : '') +
        kpi(x.sessions.length, 'sessions', mins ? mins + ' min in all' : '') +
      '</div>' +
      (m.noq ? '' : '<h4>Last 5 mock tests</h4>' + (m5.length ? '<div class="tr-mocks">' + m5.slice().reverse().map(function(k){
          return '<div><span class="d">' + escapeHtml(k.d) + '</span><span class="bar"><i style="width:' + k.pct + '%"></i></span><b>' + k.score + '/' + k.max + '</b><span class="p">' + k.pct + '%' + (k.acc !== undefined ? ' · ' + k.acc + '% right' : '') + '</span></div>';
        }).join('') + '</div>' : '<p class="help">' + (id === 'grammar' ? 'This app has unit tests instead of mock tests.' : 'No mock test yet — open the app’s Mock test tab to take one.') + '</p>')) +
      (chart ? '<h4>App score after each session</h4>' + chart : '') +
      '<h4>All sessions</h4>' + (ss.length ? '<div class="tr-sess"><div class="th"><span>Date</span><span>Time</span><span>Questions</span><span>Correct</span><span>' + escapeHtml(m.unit || 'Lessons') + '</span><span>Score</span></div>' + ss.map(function(s){
        return '<div><span class="d">' + new Date(s.at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) + ' <small>' + new Date(s.at).toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' }) + '</small></span>' +
          '<span>' + Math.max(1, Math.round(s.d / 60)) + ' min</span>' +
          '<span>' + (s.q || '—') + (s.m ? ' <em title="Mock test">+ mock ' + s.m.score + '/' + s.m.max + '</em>' : '') + '</span>' +
          '<span>' + (s.q ? Math.round(s.r * 100 / s.q) + '%' : '—') + '</span>' +
          '<span>' + (s.l !== undefined ? s.l + '/' + (m.lessons || '?') : '—') + (s.done ? ' 🎉' : '') + '</span>' +
          '<b>' + (s.sc !== null && s.sc !== undefined ? s.sc + '%' : '—') + '</b></div>';
      }).join('') + '</div>' : '<p class="help">No sessions yet — every visit of 2 minutes or more is saved here automatically.</p>') +
      '<div class="modal-actions"><button class="btn ghost" data-tr-close>Close</button><button class="btn teal" data-open-study="' + id + '">' + (x.started ? 'Open app' : 'Start') + ' ›</button></div></div>');
  }
  var openTrackerApp = openTrackHistory;
  /** Revision plan: a timeline of past study and coming revisions, and the controls to set it. */
  function openTrackRevise(id){
    var x = trackInfo(id), m = x.m, t = trackData(), now = Date.now(), every = x.every;
    var past = x.sessions.map(function(s){ return { at: s.at, k: 's', tip: Math.max(1, Math.round(s.d / 60)) + ' min' + (s.q ? ' · ' + s.q + ' answered' : '') }; })
      .concat(x.manual.map(function(v){ return { at: v, k: 'm', tip: 'marked revised' }; }));
    var plan = [];
    if(!x.off && x.started && x.nextAt){ var first = Math.max(x.nextAt, now - (x.due ? 0 : 0)); plan.push(first); plan.push(first + every * DAY_MS); plan.push(first + 2 * every * DAY_MS); }
    var start = Math.min(now - 30 * DAY_MS, past.length ? Math.min.apply(null, past.map(function(p){ return p.at; })) : now), end = plan.length ? plan[plan.length - 1] + 3 * DAY_MS : now + 30 * DAY_MS;
    start = Math.max(start, now - 120 * DAY_MS);
    var pos = function(v){ return Math.max(0, Math.min(100, (v - start) * 100 / (end - start))); };
    var line = '<div class="tl"><div class="tl-axis"></div>' +
      past.filter(function(p){ return p.at >= start; }).map(function(p){ return '<i class="tl-dot ' + p.k + '" style="left:' + pos(p.at) + '%" title="' + escapeAttr(trackDate(p.at) + ' · ' + p.tip) + '"></i>'; }).join('') +
      '<i class="tl-now" style="left:' + pos(now) + '%"><span>Today</span></i>' +
      plan.map(function(v, i){ return '<i class="tl-plan' + (i === 0 && x.due ? ' due' : '') + '" style="left:' + pos(v) + '%" title="' + escapeAttr((i ? 'Then ' : 'Next revision ') + trackDate(v)) + '"><span>' + (i === 0 && x.due ? 'Due' : trackDate(v)) + '</span></i>'; }).join('') +
      '<span class="tl-l">' + trackDate(start) + '</span></div>' +
      '<div class="tl-key"><span><i class="tl-dot s"></i>studied</span><span><i class="tl-dot m"></i>marked revised</span><span><i class="tl-plan-k"></i>planned revision</span></div>';
    var nextTxt = !x.started ? 'Start the app first — the plan begins after your first session.' : x.off ? 'Reminders are off for this app.' :
      x.due ? '<b class="tr-down">Due now</b> — last studied ' + trackAgo(x.base) + '.' : 'Next revision <b>' + new Date(x.nextAt).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' }) + '</b> (in ' + Math.max(1, Math.ceil((x.nextAt - now) / DAY_MS)) + ' days)' + (x.nextOn && x.nextOn === x.nextAt ? ' · date you picked' : ' · every ' + every + ' days');
    var opt = function(v, label){ var on = v === 'def' ? x.ownEvery === undefined : x.ownEvery === v; return '<button data-rv-every="' + v + '" class="' + (on ? 'on' : '') + '">' + label + '</button>'; };
    var iso = function(ms){ var d = new Date(ms); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
    var body = trackSheet('<div class="tr-sheet" style="--hub-c:' + m.color + ';">' + trackSheetHead(x, 'r') +
      '<p class="tr-next">' + nextTxt + '</p>' + line +
      '<div class="tr-facts3"><div><span>Last studied</span><b>' + (x.lastStudy ? trackAgo(x.lastStudy) : x.visited ? 'opened ' + trackAgo(x.visited) : '—') + '</b></div><div><span>Last revised</span><b>' + (x.revisedAt ? trackDate(x.revisedAt) : '—') + '</b></div><div><span>One revision round</span><b>≈ ' + fmtMin(x.revMin) + '</b></div></div>' +
      '<h4>Remind me to revise this app</h4><div class="tr-opts">' + opt('def', 'Default (' + (t.every || 15) + ' days)') + opt(7, '7 days') + opt(10, '10 days') + opt(15, '15 days') + opt(20, '20 days') + opt(30, '30 days') + opt(0, 'Off') + '</div>' +
      '<h4>Or pick a date</h4><div class="tr-date"><input type="date" id="rvDate" min="' + iso(now + DAY_MS) + '" value="' + (x.nextOn ? iso(x.nextOn) : '') + '"><button class="btn ghost sm" id="rvDateSet">Set date</button>' + (x.nextOn ? '<button class="btn ghost sm" id="rvDateClear">Clear</button>' : '') + '</div>' +
      '<div class="modal-actions"><button class="btn ghost" data-tr-close>Close</button>' + (x.due ? '<button class="btn ghost" data-track-snooze="' + id + '">Remind in 3 days</button>' : '') +
        (x.started ? '<button class="btn ghost" id="rvDone">✓ I revised it today</button>' : '') + '<button class="btn teal" data-open-study="' + id + '">' + (x.started ? 'Revise now' : 'Start') + ' ›</button></div></div>');
    var save = function(fn){ var tt = trackData(), ap = tt.apps[id] || (tt.apps[id] = { s: [] }); fn(ap); ap.u = Date.now(); tt.at = Date.now(); trackSave(tt); openTrackRevise(id); renderHomeSoon(); renderTracker(); };
    body.querySelectorAll('[data-rv-every]').forEach(function(bt){ bt.addEventListener('click', function(){ var v = bt.dataset.rvEvery; save(function(ap){ if(v === 'def') delete ap.every; else ap.every = +v; }); }); });
    var ds = document.getElementById('rvDateSet');
    if(ds) ds.addEventListener('click', function(){ var v = document.getElementById('rvDate').value; if(!v){ showToast('Pick a date first.'); return; } var p = v.split('-'); var at = new Date(+p[0], +p[1] - 1, +p[2], 9, 0).getTime(); save(function(ap){ ap.nextOn = at; delete ap.snooze; }); showToast('Revision set for ' + trackDate(at) + '.'); });
    var dc = document.getElementById('rvDateClear');
    if(dc) dc.addEventListener('click', function(){ save(function(ap){ delete ap.nextOn; }); });
    var dn = document.getElementById('rvDone');
    if(dn) dn.addEventListener('click', function(){ save(function(ap){ ap.manual = (ap.manual || []).concat([Date.now()]).slice(-20); delete ap.snooze; delete ap.nextOn; }); showToast('Marked as revised today — next reminder in ' + trackInfo(id).every + ' days.'); });
  }
  function trackSnooze(id){ var t = trackData(), a = t.apps[id] || (t.apps[id] = { s: [] }); a.snooze = Date.now() + 3 * DAY_MS; t.at = Date.now(); trackSave(t); showToast('OK — reminder in 3 days.'); }
  /** All tracker buttons, wherever they are. */
  document.addEventListener('click', function(ev){
    var sn = ev.target.closest('[data-track-snooze]');
    if(sn){ ev.stopPropagation(); trackSnooze(sn.dataset.trackSnooze); var mb = document.getElementById('modalBg'); if(mb.classList.contains('open') && mb.contains(sn)) openTrackRevise(sn.dataset.trackSnooze); renderHomeSoon(); renderTracker(); return; }
    var hb = ev.target.closest('[data-track-history]');
    if(hb){ ev.stopPropagation(); ev.preventDefault(); openTrackHistory(hb.dataset.trackHistory); return; }
    var rb = ev.target.closest('[data-track-revise]');
    if(rb){ ev.stopPropagation(); ev.preventDefault(); openTrackRevise(rb.dataset.trackRevise); return; }
    var op = ev.target.closest('[data-track-open]');
    if(op){ ev.stopPropagation(); if(op.dataset.trackOpen === 'all'){ switchTab('stats'); setTimeout(function(){ var p = document.getElementById('trackerPanel'); if(p) p.scrollIntoView({ behavior: 'smooth' }); }, 80); } else openTrackerApp(op.dataset.trackOpen); return; }
    var fl = ev.target.closest('[data-track-filter]');
    if(fl){ var tb = document.getElementById('trTable'), f = fl.dataset.trackFilter, on = tb.dataset.f === f; tb.dataset.f = on ? '' : f;
      document.querySelectorAll('.tr-kpis [data-track-filter]').forEach(function(b){ b.classList.toggle('on', !on && b.dataset.trackFilter === f); }); return; }
    var inModal = ev.target.closest('#modalBody [data-open-study]');
    if(inModal){ document.getElementById('modalBg').classList.remove('open'); openStudy(inModal.dataset.openStudy, false); }
  }, true);

  var studyStateTimers = {};
  function studyState(id){ try{ return JSON.parse(lsGet(studyMod(id).key) || '{}') || {}; }catch(e){ return {}; } }
  function setStudyState(id, st){
    lsSet(studyMod(id).key, JSON.stringify(st));
    setStudyMeta(id, { localAt: Date.now() });
    clearTimeout(studyStateTimers[id]);
    studyStateTimers[id] = setTimeout(function(){ studyPush(id); }, 1500);
  }
  function studyProgress(id){
    var m = STUDY[id], st = studyState(id), done = 0, ans = st.ans || {};
    if(id === 'grammar') done = Object.keys(st.done || {}).length;
    else done = Object.keys(st.les || {}).filter(function(k){ return st.les[k] && st.les[k].done; }).length;
    var keys = Object.keys(ans), right = keys.filter(function(k){ return ans[k] === 1; }).length;
    return { done: Math.min(done, m.lessons), total: m.lessons, tried: keys.length, right: right,
      acc: keys.length ? Math.round(right * 100 / keys.length) : null, wrong: studyWrongIds(id).length };
  }
  function studyWrongIds(id){
    var st = studyState(id);
    if(id === 'grammar') return Object.keys(st.wrong || {});
    var a = st.ans || {};
    return Object.keys(a).filter(function(k){ return a[k] === 0; });
  }
  function studyMark(id, qid, ok){
    var st = studyState(id);
    st.ans = st.ans || {};
    st.ans[qid] = ok ? 1 : 0;
    if(id === 'grammar'){ st.wrong = st.wrong || {}; if(ok) delete st.wrong[qid]; else st.wrong[qid] = 1; }
    setStudyState(id, st);
  }
  function ringSvg(pct, color, size){
    size = size || 46;
    var r = size / 2 - 5, c = 2 * Math.PI * r, f = Math.max(0, Math.min(1, pct / 100));
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" aria-hidden="true" style="transform:rotate(-90deg)">' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="var(--rule)" stroke-width="5"/>' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="' + color + '" stroke-width="5" stroke-linecap="round" stroke-dasharray="' + c + '" stroke-dashoffset="' + (c * (1 - f)) + '"/></svg>';
  }

  // ---- question bank (every question from every mini app, built into study-bank.json) ----
  var studyBank = null, studyBankIdx = {};
  function loadStudyBank(){
    if(studyBank) return Promise.resolve(studyBank);
    return fetch('study-bank.json').then(function(r){ if(!r.ok) throw new Error('study-bank.json missing'); return r.json(); }).then(function(b){
      studyBank = b; studyBankIdx = {};
      Object.keys(b.modules).forEach(function(mid){ b.modules[mid].qs.forEach(function(q){ q.mod = mid; studyBankIdx[mid + ':' + q.id] = q; }); });
      return b;
    });
  }
  function shuffleArr(a){ for(var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  /** A question ready to show: options possibly shuffled, with the index of the right one. */
  function prepQ(q){
    var order = q.o.map(function(_, i){ return i; });
    if(q.sh) shuffleArr(order);
    return { src: q, mod: q.mod, id: q.id, q: q.q, tag: q.tag, e: q.e, o: order.map(function(i){ return q.o[i]; }), a: order.indexOf(q.a), pick: null };
  }
  function vocabQuestions(n){
    var pool = words.filter(function(w){ return w.term && w.english_meaning; });
    if(pool.length < 4) return [];
    var ranked = shuffleArr(pool.slice()).sort(function(x, y){ return ((progressMap[x.id] || {}).confidence || 0) - ((progressMap[y.id] || {}).confidence || 0); });
    var pick = shuffleArr(ranked.slice(0, Math.max(n * 3, 30))).slice(0, n);
    var synPool = [];
    pool.forEach(function(w){ (w.synonyms || []).forEach(function(s){ synPool.push({ s: s, w: w.id }); }); });
    var cut = function(s){ s = String(s); return s.length > 120 ? s.slice(0, 117) + '…' : s; };
    return pick.map(function(w){
      var useSyn = w.synonyms && w.synonyms.length && synPool.length > 20 && Math.random() < 0.4;
      var right, wrongs = [], guard = 0;
      if(useSyn){
        right = w.synonyms[0];
        while(wrongs.length < 3 && guard++ < 60){ var s = synPool[Math.floor(Math.random() * synPool.length)]; if(s.w !== w.id && (w.synonyms || []).indexOf(s.s) === -1 && wrongs.indexOf(s.s) === -1 && s.s !== right) wrongs.push(s.s); }
      } else {
        right = cut(w.english_meaning);
        var same = pool.filter(function(x){ return x.id !== w.id && x.type === w.type; });
        var src = same.length >= 3 ? same : pool.filter(function(x){ return x.id !== w.id; });
        while(wrongs.length < 3 && guard++ < 60){ var m = cut(src[Math.floor(Math.random() * src.length)].english_meaning); if(m !== right && wrongs.indexOf(m) === -1) wrongs.push(m); }
      }
      if(wrongs.length < 3) return null;
      var opts = shuffleArr([right].concat(wrongs));
      return { mod: 'vocab', id: w.id, tag: TYPE_LABELS[w.type] || 'Vocabulary', q: useSyn ? 'Choose the synonym of “' + w.term + '”' : 'Choose the meaning of “' + w.term + '”',
        o: opts, a: opts.indexOf(right), e: w.term + ' — ' + (w.english_meaning || '') + (w.hindi_meaning ? ' (' + w.hindi_meaning + ')' : ''), pick: null };
    }).filter(Boolean);
  }

  // ---- the practice / mock screen ----
  var drill = null, drillOpen = false, drillTimer = null;
  var MOD_NAME = { vocab: 'Vocabulary', grammar: 'Grammar 100', bns: 'BNS · BNSS · BSA', schemes: 'Govt Schemes', census: 'Census', intlorgs: 'Intl Organisations', reports: 'Reports & Indices', sports: 'Sports', festivals: 'Festivals', iprplans: 'IPR & Plans', folkdances: 'Folk Dances', appointments: 'Appointments', polity: 'Polity', economics: 'Economy', space: 'Space', physics: 'Physics', biology: 'Biology', geometry: 'Geometry', mensuration2d: 'Mensuration 2D', mensuration3d: 'Mensuration 3D', trigonometry: 'Trigonometry', numbersystem: 'Number System', calendar: 'Calendar', clock: 'Clock', voice: 'Active & Passive Voice', narration: 'Narration', formulas: 'Formula Book' };
  function openDrill(title){
    closeAllMenus();
    drillOpen = true;
    document.getElementById('drillTitle').textContent = title;
    document.getElementById('drillBackLabel').textContent = isActive('home') ? 'पाठShala' : (isActive('stats') ? 'Progress' : 'Back');
    document.getElementById('drillPage').classList.add('open');
    document.body.classList.add('study-on');
    try{ history.pushState({ drill: 1 }, '', '#drill'); }catch(e){}
  }
  function closeDrill(fromHistory){
    if(!drillOpen) return;
    if(drill && drill.kind === 'mock' && drill.phase === 'run' && !confirm('Leave the mock test? Your answers so far will be lost.')){
      if(fromHistory){ try{ history.pushState({ drill: 1 }, '', '#drill'); }catch(e){} }
      return;
    }
    clearInterval(drillTimer);
    drillOpen = false; drill = null;
    document.getElementById('drillPage').classList.remove('open');
    document.getElementById('drillClock').textContent = '';
    if(!studyOpen) document.body.classList.remove('study-on');
    renderHomeSoon();
    if(!fromHistory && location.hash === '#drill'){ try{ history.back(); }catch(e){} }
  }
  document.getElementById('drillBack').addEventListener('click', function(){ closeDrill(false); });
  function drillBody(html){ var b = document.getElementById('drillBody'); b.innerHTML = html; document.getElementById('drillScroll').scrollTop = 0; }
  function optHtml(q, i, state){
    return '<button class="dq-opt' + (state || '') + '" data-opt="' + i + '"><span class="k">' + 'ABCD'.charAt(i) + '</span><span>' + escapeHtml(q.o[i]) + '</span></button>';
  }

  // Mistakes book
  async function openMistakes(){
    openDrill('Mistakes book');
    drillBody('<p class="help">Loading your mistakes…</p>');
    try{ await loadStudyBank(); }catch(e){ drillBody('<div class="dq-empty">Couldn’t load the question bank. Upload <b>study-bank.json</b> to your site and try again.</div>'); return; }
    drill = { kind: 'mistakes', phase: 'list', only: null };
    renderMistakes();
  }
  function mistakesByModule(){
    var out = {};
    Object.keys(STUDY).forEach(function(mid){
      out[mid] = studyWrongIds(mid).map(function(id){ return studyBankIdx[mid + ':' + id]; }).filter(Boolean);
    });
    return out;
  }
  function renderMistakes(){
    var by = mistakesByModule(), total = 0;
    Object.keys(by).forEach(function(m){ total += by[m].length; });
    var mods = Object.keys(by).filter(function(m){ return by[m].length; });
    if(drill.only && !by[drill.only].length) drill.only = null;
    var list = drill.only ? by[drill.only] : [].concat.apply([], mods.map(function(m){ return by[m]; }));
    if(!total){
      drillBody('<div class="dq-hero"><div class="eyebrow">All subjects</div><h1>Mistakes book</h1></div><div class="dq-empty">No mistakes right now. 🎉<br>Every question you get wrong in any mini app — or in a mixed mock — lands here until you get it right.</div>');
      return;
    }
    drillBody('<div class="dq-hero"><div class="eyebrow">All subjects · ' + total + ' to fix</div><h1>Mistakes book</h1><p>Every question you got wrong, from every mini app. Get one right here and it leaves the book.</p></div>' +
      '<div class="dq-chips"><button class="' + (drill.only ? '' : 'on') + '" data-only="">All · ' + total + '</button>' +
        mods.map(function(m){ return '<button class="' + (drill.only === m ? 'on' : '') + '" data-only="' + m + '" style="--dq-c:' + STUDY[m].color + '">' + escapeHtml(MOD_NAME[m]) + ' · ' + by[m].length + '</button>'; }).join('') + '</div>' +
      '<div class="dq-actions"><button class="btn teal" id="mbPractice">Practise ' + Math.min(list.length, 30) + (list.length > 30 ? ' of ' + list.length : '') + ' now</button></div>' +
      '<div class="dq-list">' + list.map(function(q){
        return '<div class="dq-rev" style="--dq-c:' + STUDY[q.mod].color + '"><div class="dq-meta"><span>' + escapeHtml(MOD_NAME[q.mod]) + '</span>' + (q.tag ? '<span>' + escapeHtml(q.tag) + '</span>' : '') + '</div>' +
          '<div class="dq-q">' + escapeHtml(q.q) + '</div>' +
          (q.k === 'e' ? '<div class="dq-parts">' + q.o.map(function(o, i){ return '<span class="' + (i === q.a ? 'bad' : '') + '">' + escapeHtml(o) + '</span>'; }).join(' ') + '</div>' : '') +
          '<div class="dq-ans">' + (q.k === 'e' ? (/no error/i.test(q.o[q.a]) ? '✓ No error' : 'Error is in: ' + escapeHtml(q.o[q.a])) : '✓ ' + escapeHtml(q.o[q.a])) + '</div>' + (q.e ? '<div class="dq-exp">' + escapeHtml(q.e) + '</div>' : '') + '</div>';
      }).join('') + '</div>');
    document.querySelectorAll('#drillBody [data-only]').forEach(function(b){ b.addEventListener('click', function(){ drill.only = b.dataset.only || null; renderMistakes(); }); });
    document.getElementById('mbPractice').addEventListener('click', function(){
      startPractice(shuffleArr(list.slice()).slice(0, 30).map(prepQ));
    });
  }
  function startPractice(qs, from){
    drill = { kind: 'practice', phase: 'run', qs: qs, i: 0, cleared: 0, from: from || null };
    document.getElementById('drillTitle').textContent = from ? 'Practise · ' + from.title : 'Practise mistakes';
    renderPractice();
  }
  function renderPractice(){
    var d = drill;
    if(d.i >= d.qs.length && d.from){
      drillBody('<div class="dq-hero"><div class="eyebrow">Practice done · ' + escapeHtml(d.from.title) + '</div><h1>' + d.cleared + ' of ' + d.qs.length + ' right</h1><p>' +
        (d.cleared === d.qs.length ? 'All right — this topic is getting stronger.' : 'Wrong ones went to the Mistakes book, and the topic’s accuracy is updated.') + '</p></div>' +
        '<div class="dq-actions"><button class="btn teal" id="pdBack">Back to Weak spots</button></div>');
      document.getElementById('pdBack').addEventListener('click', function(){ openWeak(); });
      return;
    }
    if(d.i >= d.qs.length){
      drillBody('<div class="dq-hero"><div class="eyebrow">Practice done</div><h1>' + d.cleared + ' of ' + d.qs.length + ' fixed</h1><p>' +
        (d.cleared === d.qs.length ? 'Clean sweep — all of them left the Mistakes book.' : 'The ones you missed stay in the book for next time.') + '</p></div>' +
        '<div class="dq-actions"><button class="btn teal" id="pdBack">Back to Mistakes book</button></div>');
      document.getElementById('pdBack').addEventListener('click', function(){ drill = { kind: 'mistakes', phase: 'list', only: null }; document.getElementById('drillTitle').textContent = 'Mistakes book'; renderMistakes(); });
      return;
    }
    var q = d.qs[d.i], answered = q.pick !== null;
    drillBody('<div class="dq-progress"><i style="width:' + (d.i / d.qs.length * 100) + '%"></i></div>' +
      '<div class="dq-card" style="--dq-c:' + (STUDY[q.mod] ? STUDY[q.mod].color : 'var(--mustard)') + '"><div class="dq-meta"><span>Q ' + (d.i + 1) + ' / ' + d.qs.length + '</span><span>' + escapeHtml(MOD_NAME[q.mod]) + '</span>' + (q.tag ? '<span>' + escapeHtml(q.tag) + '</span>' : '') + '</div>' +
      '<div class="dq-q">' + escapeHtml(q.q) + '</div><div class="dq-opts">' +
      q.o.map(function(_, i){ return optHtml(q, i, !answered ? '' : (i === q.a ? ' ok' : (i === q.pick ? ' no' : ''))); }).join('') + '</div>' +
      (answered ? '<div class="dq-fb ' + (q.pick === q.a ? 'good' : 'bad') + '"><b>' + (d.from ? (q.pick === q.a ? 'Right.' : 'Not quite — added to your Mistakes book.') : (q.pick === q.a ? 'Right — removed from your Mistakes book.' : 'Not yet — it stays in the book.')) + '</b>' + (q.e ? '<div>' + escapeHtml(q.e) + '</div>' : '') + '</div>' : '') +
      '</div><div class="dq-actions">' + (answered ? '<button class="btn teal" id="pNext">' + (d.i === d.qs.length - 1 ? 'Finish' : 'Next ›') + '</button>' : '<span class="help">Tip: press 1–4 on a keyboard</span>') + '</div>');
    if(!answered) document.querySelectorAll('#drillBody [data-opt]').forEach(function(b){ b.addEventListener('click', function(){
      q.pick = +b.dataset.opt;
      var ok = q.pick === q.a;
      if(ok) d.cleared++;
      if(STUDY[q.mod]) studyMark(q.mod, q.id, ok);
      addGoalExtra(GOAL_PER_Q);
      renderPractice();
    }); });
    var nb = document.getElementById('pNext');
    if(nb) nb.addEventListener('click', function(){ d.i++; renderPractice(); });
  }

  // Weak spots: accuracy by subject → app → topic, from the last answer to every question
  var WEAK_SUBJ = [['english', 'English', 'var(--teal)'], ['maths', 'Maths', 'var(--blue, #2f6db5)'], ['reasoning', 'Reasoning', 'var(--purple, #7a4fb0)'], ['gs', 'General Studies', 'var(--mustard)']];
  function weakStats(){
    var topics = [], apps = [];
    Object.keys(studyBank.modules).forEach(function(mid){
      if(!STUDY[mid] || STUDY[mid].noq) return;
      var m = studyBank.modules[mid], ans = studyState(mid).ans || {}, byTag = {}, order = [];
      var app = { mod: mid, g: m.g || 'gs', name: MOD_NAME[mid] || m.t, total: m.qs.length, tried: 0, right: 0, topics: [] };
      m.qs.forEach(function(q){
        var key = q.tag || 'Other';
        var t = byTag[key];
        if(!t){ t = byTag[key] = { mod: mid, g: app.g, app: app.name, tag: key, l: q.l, total: 0, tried: 0, right: 0, qs: [] }; order.push(key); }
        t.total++; t.qs.push(q);
        if(ans[q.id] === 1 || ans[q.id] === 0){ t.tried++; app.tried++; if(ans[q.id] === 1){ t.right++; app.right++; } }
      });
      order.forEach(function(k){ var t = byTag[k]; t.acc = t.tried ? t.right / t.tried : null; t.score = (t.right + 1) / (t.tried + 2); app.topics.push(t); topics.push(t); });
      app.acc = app.tried ? app.right / app.tried : null;
      apps.push(app);
    });
    return { topics: topics, apps: apps };
  }
  function weakColor(acc){ return acc === null ? 'var(--rule)' : acc < .5 ? 'var(--maroon)' : acc < .75 ? 'var(--mustard)' : 'var(--teal)'; }
  function weakPct(x){ return x === null ? '—' : Math.round(x * 100) + '%'; }
  function weakRow(t, showApp){
    var c = STUDY[t.mod] ? STUDY[t.mod].color : 'var(--teal)';
    return '<div class="wk-row" style="--dq-c:' + c + '"><div><div class="t">' + escapeHtml(t.tag) + '</div><div class="m">' + (showApp ? escapeHtml(t.app) + ' · ' : '') +
      (t.tried ? weakPct(t.acc) + ' right · ' + (t.tried - t.right) + ' wrong · ' : '') + t.tried + ' of ' + t.total + ' tried</div></div>' +
      '<div class="wk-btns"><button class="go" data-wk-go="' + escapeAttr(t.mod + '|' + t.tag) + '">Practise</button><button data-wk-task="' + escapeAttr(t.mod + '|' + t.tag) + '" title="Add “Revise ' + escapeAttr(t.tag) + '” to today’s tasks">+ Task</button></div>' +
      '<div class="wk-bar"><i style="width:' + (t.tried ? Math.max(4, t.acc * 100) : 0) + '%; background:' + weakColor(t.acc) + '"></i></div></div>';
  }
  async function openWeak(){
    openDrill('Weak spots');
    drillBody('<p class="help">Working out your weak spots…</p>');
    try{ await loadStudyBank(); }catch(e){ drillBody('<div class="dq-empty">Couldn’t load the question bank. Upload <b>study-bank.json</b> to your site and try again.</div>'); return; }
    drill = { kind: 'weak', phase: 'list' };
    renderWeak();
  }
  function renderWeak(){
    var W = weakStats(), tried = 0, right = 0;
    W.apps.forEach(function(a){ tried += a.tried; right += a.right; });
    if(!tried){
      drillBody('<div class="dq-hero"><div class="eyebrow">All subjects</div><h1>Weak spots</h1></div><div class="dq-empty">Nothing to analyse yet.<br>Answer questions in any mini app, the Mistakes book or a mixed mock, and your accuracy for every topic shows up here.</div>');
      return;
    }
    var weak = W.topics.filter(function(t){ return t.tried >= 3 && t.acc < .8; }).sort(function(a, b){ return a.score - b.score || (b.tried - b.right) - (a.tried - a.right); }).slice(0, 12);
    var strong = W.topics.filter(function(t){ return t.tried >= 5 && t.acc >= .9; }).length;
    var untouched = W.apps.filter(function(a){ return !a.tried; });
    var html = '<div class="dq-hero"><div class="eyebrow">All subjects · ' + tried + ' questions answered</div><h1>Weak spots</h1>' +
      '<p>' + Math.round(right * 100 / tried) + '% right overall. Each question counts by your latest answer, so fixing a mistake raises the topic straight away.' + (strong ? ' ' + strong + ' topic' + (strong === 1 ? ' is' : 's are') + ' already 90%+.' : '') + '</p></div>';
    html += '<div class="wk-sum">' + WEAK_SUBJ.map(function(g){
      var A = W.apps.filter(function(a){ return a.g === g[0]; }), t = 0, r = 0, n = 0;
      A.forEach(function(a){ t += a.tried; r += a.right; n += a.total; });
      if(!n) return '';
      return '<div class="wk-subj" style="--dq-c:' + g[2] + '"><b>' + (t ? Math.round(r * 100 / t) + '%' : '—') + '</b><span>' + g[1] + ' · ' + t + ' of ' + n + ' tried</span></div>';
    }).join('') + '</div>';
    html += '<div class="wk-h">Weakest topics</div><p class="wk-note">Topics with at least 3 answers and under 80% right, weakest first.</p>' +
      (weak.length ? '<div class="wk-list">' + weak.map(function(t){ return weakRow(t, true); }).join('') + '</div>' : '<div class="dq-empty" style="padding:20px;">No weak topics right now — everything you’ve tried is 80% or better. 💪</div>');
    if(untouched.length) html += '<div class="wk-h">Not started</div><p class="wk-note">Apps with no answers yet — even one quick practice shows where you stand.</p>' +
      '<div class="dq-chips">' + untouched.map(function(a){ return '<button data-open-study="' + a.mod + '" style="--dq-c:' + STUDY[a.mod].color + '">' + escapeHtml(a.name) + ' · ' + a.total + ' Qs</button>'; }).join('') + '</div>';
    html += '<div class="wk-h">Every app and topic</div><p class="wk-note">Open an app to see all its topics.</p>';
    WEAK_SUBJ.forEach(function(g){
      var A = W.apps.filter(function(a){ return a.g === g[0] && a.tried; }).sort(function(a, b){ return a.acc - b.acc; });
      if(!A.length) return;
      html += '<div class="wk-note" style="margin-top:12px; font-weight:700; letter-spacing:.1em; text-transform:uppercase;">' + g[1] + '</div>' + A.map(function(a){
        return '<details class="wk-app" style="--dq-c:' + STUDY[a.mod].color + '"><summary><span style="margin:0; width:10px; height:10px; border-radius:50%; background:' + weakColor(a.acc) + '"></span>' + escapeHtml(a.name) +
          '<span>' + weakPct(a.acc) + ' · ' + a.tried + ' / ' + a.total + '</span></summary><div class="wk-list">' +
          a.topics.slice().sort(function(x, y){ return (x.tried ? x.score : 2) - (y.tried ? y.score : 2); }).map(function(t){ return weakRow(t, false); }).join('') + '</div></details>';
      }).join('');
    });
    drillBody(html);
    var find = function(v){ var p = v.split('|'), mid = p[0], tag = p.slice(1).join('|'); return W.topics.filter(function(t){ return t.mod === mid && t.tag === tag; })[0]; };
    document.querySelectorAll('#drillBody [data-wk-go]').forEach(function(b){ b.addEventListener('click', function(){
      var t = find(b.dataset.wkGo); if(!t) return;
      var ans = studyState(t.mod).ans || {};
      var wrong = t.qs.filter(function(q){ return ans[q.id] === 0; }), fresh = t.qs.filter(function(q){ return ans[q.id] !== 0 && ans[q.id] !== 1; }), ok = t.qs.filter(function(q){ return ans[q.id] === 1; });
      var pick = shuffleArr(wrong).concat(shuffleArr(fresh), shuffleArr(ok)).slice(0, 15);
      startPractice(shuffleArr(pick).map(prepQ), { title: t.tag });
    }); });
    document.querySelectorAll('#drillBody [data-wk-task]').forEach(function(b){ b.addEventListener('click', function(){
      var t = find(b.dataset.wkTask); if(!t) return;
      var lesson = t.mod !== 'grammar' && t.l ? { mod: t.mod, id: t.l, t: t.tag } : null;
      var task = todoAdd('Revise ' + t.app + ' — ' + t.tag, { app: t.mod, due: todoDay(0), lm: lesson ? lesson.mod : '', li: lesson ? lesson.id : '', lt: lesson ? lesson.t : '' });
      if(task){ b.textContent = '✓ Added'; b.disabled = true; showToast('Added to today’s tasks.'); }
    }); });
    document.querySelectorAll('#drillBody [data-open-study]').forEach(function(b){ b.addEventListener('click', function(ev){ ev.stopPropagation(); closeDrill(false); openStudy(b.dataset.openStudy, false); }); });
  }

  // Mixed mock test
  var mockCfg = (function(){
    var def = { en: 25, gs: 25, mt: 0, rs: 0, vocab: true, grammar: true, voice: true, narration: true, gsMods: gsIds(), mtMods: mathQIds(), rsMods: reasoningIds(), neg: true, known: gsIds() };
    var c;
    try{ c = Object.assign({}, def, JSON.parse(lsGet('shabdMockCfg') || '{}')); }catch(e){ c = def; }
    var known = c.known || ['bns', 'schemes', 'census', 'intlorgs'];
    gsIds().forEach(function(id){ if(known.indexOf(id) === -1 && c.gsMods.indexOf(id) === -1) c.gsMods.push(id); });
    c.known = gsIds();
    c.gsMods = c.gsMods.filter(function(id){ return STUDY[id]; });
    if(!Array.isArray(c.mtMods)) c.mtMods = mathQIds();
    var mk = c.knownMt || [];
    mathQIds().forEach(function(id){ if(mk.indexOf(id) === -1 && c.mtMods.indexOf(id) === -1) c.mtMods.push(id); });
    c.knownMt = mathQIds();
    c.mtMods = c.mtMods.filter(function(id){ return STUDY[id] && !STUDY[id].noq; });
    if(typeof c.mt !== 'number') c.mt = 0;
    if(!Array.isArray(c.rsMods)) c.rsMods = reasoningIds();
    var rk = c.knownRs || [];
    reasoningIds().forEach(function(id){ if(rk.indexOf(id) === -1 && c.rsMods.indexOf(id) === -1) c.rsMods.push(id); });
    c.knownRs = reasoningIds();
    c.rsMods = c.rsMods.filter(function(id){ return STUDY[id] && !STUDY[id].noq; });
    if(typeof c.rs !== 'number') c.rs = 0;
    return c;
  })();
  function mockHistory(){ var h = studyState('mocks'); return Array.isArray(h.list) ? h.list : []; }
  async function openMock(){
    openDrill('Mixed mock test');
    drillBody('<p class="help">Loading questions…</p>');
    try{ await loadStudyBank(); }catch(e){ drillBody('<div class="dq-empty">Couldn’t load the question bank. Upload <b>study-bank.json</b> to your site and try again.</div>'); return; }
    drill = { kind: 'mock', phase: 'setup' };
    renderMockSetup();
  }
  function renderMockSetup(){
    var c = mockCfg, n = c.en + c.gs + c.mt + c.rs, mins = Math.round(n * 36 / 60);
    var seg = function(key, vals){ return '<div class="dq-seg">' + vals.map(function(v){ return '<button data-cfg="' + key + '" data-val="' + v + '" class="' + (c[key] === v ? 'on' : '') + '">' + v + '</button>'; }).join('') + '</div>'; };
    var tog = function(key, label){ return '<button class="dq-tog' + (c[key] ? ' on' : '') + '" data-tog="' + key + '">' + label + '</button>'; };
    var gsTog = function(m){ return '<button class="dq-tog' + (c.gsMods.indexOf(m) !== -1 ? ' on' : '') + '" data-gsmod="' + m + '">' + escapeHtml(MOD_NAME[m]) + '</button>'; };
    var mtTog = function(m){ return '<button class="dq-tog' + (c.mtMods.indexOf(m) !== -1 ? ' on' : '') + '" data-mtmod="' + m + '">' + escapeHtml(MOD_NAME[m]) + '</button>'; };
    var rsTog = function(m){ return '<button class="dq-tog' + (c.rsMods.indexOf(m) !== -1 ? ' on' : '') + '" data-rsmod="' + m + '">' + escapeHtml(MOD_NAME[m]) + '</button>'; };
    var hist = mockHistory().slice(-5).reverse();
    drillBody('<div class="dq-hero"><div class="eyebrow">English + Maths + Reasoning + General Studies · SSC pattern</div><h1>Mixed mock test</h1><p>Questions from your vocab register and every mini app, timed like Tier 1 (36 seconds a question), marked +2 / −0.5. Wrong answers go to your Mistakes book.</p></div>' +
      '<div class="dq-setup">' +
        '<div class="dq-box"><h3>English</h3>' + seg('en', [0, 10, 25]) + '<div class="dq-tags">' + tog('vocab', 'Vocabulary (' + words.length + ' words)') + tog('grammar', 'Grammar 100') + tog('voice', 'Active & Passive Voice') + tog('narration', 'Narration') + '</div></div>' +
        '<div class="dq-box"><h3>General Studies</h3>' + seg('gs', [0, 10, 25]) + '<div class="dq-tags">' + GS_SUBJECTS.map(function(g){ var l = gsIds().filter(function(id){ return STUDY[id].gsub === g[0]; }); return l.length ? '<div class="dq-gsub"><span>' + g[1] + '</span>' + l.map(gsTog).join('') + '</div>' : ''; }).join('') + gsIds().filter(function(id){ return !STUDY[id].gsub; }).map(gsTog).join('') + '</div></div>' +
        '<div class="dq-box"><h3>Maths</h3>' + seg('mt', [0, 10, 25]) + '<div class="dq-tags">' + mathQIds().map(mtTog).join('') + '</div></div>' +
        (reasoningIds().length ? '<div class="dq-box"><h3>Reasoning</h3>' + seg('rs', [0, 10, 25]) + '<div class="dq-tags">' + reasoningIds().map(rsTog).join('') + '</div></div>' : '') +
        '<div class="dq-box"><h3>Marking</h3><div class="dq-tags">' + tog('neg', 'Negative marking −0.5') + '</div><p class="help" style="margin:10px 0 0;">' + n + ' questions · ' + mins + ' minutes · maximum ' + (n * 2) + ' marks</p></div>' +
      '</div>' +
      '<div class="dq-actions"><button class="btn teal" id="mkStart"' + (n ? '' : ' disabled') + '>Start test ›</button></div>' +
      (hist.length ? '<h3 class="dq-h3">Recent tests</h3><div class="dq-hist">' + hist.map(function(h){
        return '<div><b>' + h.score + ' / ' + h.max + '</b><span>' + new Date(h.at).toLocaleDateString([], { day: 'numeric', month: 'short' }) + ' · English ' + h.en.r + '/' + h.en.t + (h.mt && h.mt.t ? ' · Maths ' + h.mt.r + '/' + h.mt.t : '') + (h.rs && h.rs.t ? ' · Reasoning ' + h.rs.r + '/' + h.rs.t : '') + ' · GS ' + h.gs.r + '/' + h.gs.t + '</span></div>';
      }).join('') + '</div>' : ''));
    document.querySelectorAll('#drillBody [data-cfg]').forEach(function(b){ b.addEventListener('click', function(){ mockCfg[b.dataset.cfg] = +b.dataset.val; saveMockCfg(); renderMockSetup(); }); });
    document.querySelectorAll('#drillBody [data-tog]').forEach(function(b){ b.addEventListener('click', function(){ mockCfg[b.dataset.tog] = !mockCfg[b.dataset.tog]; saveMockCfg(); renderMockSetup(); }); });
    document.querySelectorAll('#drillBody [data-gsmod]').forEach(function(b){ b.addEventListener('click', function(){
      var m = b.dataset.gsmod, i = mockCfg.gsMods.indexOf(m);
      if(i === -1) mockCfg.gsMods.push(m); else if(mockCfg.gsMods.length > 1) mockCfg.gsMods.splice(i, 1);
      saveMockCfg(); renderMockSetup();
    }); });
    document.querySelectorAll('#drillBody [data-mtmod]').forEach(function(b){ b.addEventListener('click', function(){
      var m = b.dataset.mtmod, i = mockCfg.mtMods.indexOf(m);
      if(i === -1) mockCfg.mtMods.push(m); else if(mockCfg.mtMods.length > 1) mockCfg.mtMods.splice(i, 1);
      saveMockCfg(); renderMockSetup();
    }); });
    document.querySelectorAll('#drillBody [data-rsmod]').forEach(function(b){ b.addEventListener('click', function(){
      var m = b.dataset.rsmod, i = mockCfg.rsMods.indexOf(m);
      if(i === -1) mockCfg.rsMods.push(m); else if(mockCfg.rsMods.length > 1) mockCfg.rsMods.splice(i, 1);
      saveMockCfg(); renderMockSetup();
    }); });
    document.getElementById('mkStart').addEventListener('click', startMock);
  }
  function saveMockCfg(){ lsSet('shabdMockCfg', JSON.stringify(mockCfg)); }
  function pickFrom(mods, n){
    var pool = [];
    mods.forEach(function(m){ if(studyBank.modules[m]) pool = pool.concat(studyBank.modules[m].qs); });
    return shuffleArr(pool).slice(0, n).map(prepQ);
  }
  function startMock(){
    var c = mockCfg, en = [], gs = [], mt = [], rs = [];
    if(c.en){
      var enMods = ['grammar', 'voice', 'narration'].filter(function(m){ return c[m]; });
      var nv = c.vocab ? (enMods.length ? Math.round(c.en * 0.6) : c.en) : 0;
      var v = nv ? vocabQuestions(nv) : [];
      en = v.concat(enMods.length ? pickFrom(enMods, c.en - v.length) : []);
      if(en.length < c.en && c.vocab) en = en.concat(vocabQuestions(c.en - en.length));
      en.forEach(function(q){ q.sec = 'en'; });
    }
    if(c.gs){ gs = pickFrom(c.gsMods, c.gs); gs.forEach(function(q){ q.sec = 'gs'; }); }
    if(c.mt){ mt = pickFrom(c.mtMods, c.mt); mt.forEach(function(q){ q.sec = 'mt'; }); }
    if(c.rs){ rs = pickFrom(c.rsMods, c.rs); rs.forEach(function(q){ q.sec = 'rs'; }); }
    var qs = shuffleArr(en).concat(shuffleArr(mt), shuffleArr(rs), shuffleArr(gs));
    if(!qs.length){ showToast('No questions available for that choice.'); return; }
    drill = { kind: 'mock', phase: 'run', qs: qs, i: 0, secs: qs.length * 36, start: Date.now(), marked: {} };
    clearInterval(drillTimer);
    drillTimer = setInterval(tickMock, 1000);
    tickMock();
    renderMockRun();
  }
  function tickMock(){
    if(!drill || drill.kind !== 'mock' || drill.phase !== 'run') return;
    var left = Math.max(0, drill.secs - Math.floor((Date.now() - drill.start) / 1000));
    var el = document.getElementById('drillClock');
    el.textContent = Math.floor(left / 60) + ':' + ('0' + left % 60).slice(-2);
    el.classList.toggle('low', left < 60);
    if(left <= 0) submitMock(true);
  }
  function renderMockRun(){
    var d = drill, q = d.qs[d.i], answered = d.qs.filter(function(x){ return x.pick !== null; }).length;
    drillBody('<div class="dq-run"><div class="dq-main">' +
      '<div class="dq-card" style="--dq-c:' + (q.sec === 'en' ? 'var(--mustard)' : q.sec === 'mt' ? 'var(--accent)' : q.sec === 'rs' ? 'var(--maroon)' : 'var(--teal)') + '"><div class="dq-meta"><span>Q ' + (d.i + 1) + ' / ' + d.qs.length + '</span><span>' + (q.sec === 'en' ? 'English' : q.sec === 'mt' ? 'Maths' : q.sec === 'rs' ? 'Reasoning' : 'General Studies') + '</span><span>' + escapeHtml(MOD_NAME[q.mod]) + '</span></div>' +
      '<div class="dq-q">' + escapeHtml(q.q) + '</div><div class="dq-opts">' + q.o.map(function(_, i){ return optHtml(q, i, q.pick === i ? ' sel' : ''); }).join('') + '</div></div>' +
      '<div class="dq-nav"><button class="btn ghost" id="mkPrev"' + (d.i ? '' : ' disabled') + '>‹ Prev</button><button class="btn ghost" id="mkMark">' + (d.marked[d.i] ? '★ Marked' : '☆ Mark') + '</button><button class="btn ghost" id="mkClear"' + (q.pick === null ? ' disabled' : '') + '>Clear</button><button class="btn teal" id="mkNext">' + (d.i === d.qs.length - 1 ? 'Review' : 'Next ›') + '</button></div></div>' +
      '<aside class="dq-side"><div class="dq-side-h"><b>' + answered + '</b> of ' + d.qs.length + ' answered</div><div class="dq-pal">' +
        d.qs.map(function(x, i){ return '<button data-go="' + i + '" class="' + (x.pick !== null ? 'a' : '') + (d.marked[i] ? ' m' : '') + (i === d.i ? ' cur' : '') + '">' + (i + 1) + '</button>'; }).join('') +
      '</div><button class="btn maroon" id="mkSubmit" style="width:100%; margin-top:12px;">Submit test</button></aside></div>');
    document.querySelectorAll('#drillBody [data-opt]').forEach(function(b){ b.addEventListener('click', function(){ q.pick = +b.dataset.opt; renderMockRun(); }); });
    document.querySelectorAll('#drillBody .dq-pal [data-go]').forEach(function(b){ b.addEventListener('click', function(){ d.i = +b.dataset.go; renderMockRun(); }); });
    document.getElementById('mkPrev').addEventListener('click', function(){ if(d.i){ d.i--; renderMockRun(); } });
    document.getElementById('mkNext').addEventListener('click', function(){ if(d.i < d.qs.length - 1){ d.i++; renderMockRun(); } else document.getElementById('mkSubmit').scrollIntoView({ behavior: 'smooth', block: 'center' }); });
    document.getElementById('mkMark').addEventListener('click', function(){ d.marked[d.i] = !d.marked[d.i]; renderMockRun(); });
    document.getElementById('mkClear').addEventListener('click', function(){ q.pick = null; renderMockRun(); });
    document.getElementById('mkSubmit').addEventListener('click', function(){
      var left = d.qs.length - d.qs.filter(function(x){ return x.pick !== null; }).length;
      if(left && !confirm(left + ' question' + (left === 1 ? ' is' : 's are') + ' unanswered. Submit anyway?')) return;
      submitMock(false);
    });
  }
  function submitMock(timeUp){
    var d = drill;
    clearInterval(drillTimer);
    d.phase = 'result';
    document.getElementById('drillClock').textContent = '';
    var neg = mockCfg.neg, sec = { en: { r: 0, w: 0, t: 0 }, gs: { r: 0, w: 0, t: 0 }, mt: { r: 0, w: 0, t: 0 }, rs: { r: 0, w: 0, t: 0 } }, byMod = {}, score = 0;
    d.qs.forEach(function(q){
      var s = sec[q.sec], m = byMod[q.mod] = byMod[q.mod] || { r: 0, t: 0 };
      s.t++; m.t++;
      if(q.pick === null) return;
      if(q.pick === q.a){ s.r++; m.r++; score += 2; } else { s.w++; if(neg) score -= 0.5; }
      if(STUDY[q.mod]) studyMark(q.mod, q.id, q.pick === q.a);
      if(q.mod === 'vocab') logQuizAttempt(q.id, (words.find(function(w){ return w.id === q.id; }) || {}).term || '', q.pick === q.a);
    });
    var right = sec.en.r + sec.gs.r + sec.mt.r + sec.rs.r, wrong = sec.en.w + sec.gs.w + sec.mt.w + sec.rs.w, skipped = d.qs.length - right - wrong;
    addGoalExtra((right + wrong) * GOAL_PER_Q);
    var secsUsed = Math.min(d.secs, Math.round((Date.now() - d.start) / 1000));
    var h = studyState('mocks'); h.list = (Array.isArray(h.list) ? h.list : []).concat([{ at: Date.now(), score: score, max: d.qs.length * 2, right: right, wrong: wrong, skipped: skipped, secs: secsUsed, en: { r: sec.en.r, t: sec.en.t }, gs: { r: sec.gs.r, t: sec.gs.t }, mt: { r: sec.mt.r, t: sec.mt.t }, rs: { r: sec.rs.r, t: sec.rs.t } }]).slice(-50);
    setStudyState('mocks', h);
    var pct = function(r, t){ return t ? Math.round(r * 100 / t) + '%' : '—'; };
    var review = d.qs.filter(function(q){ return q.pick !== q.a; });
    drillBody('<div class="dq-hero"><div class="eyebrow">' + (timeUp ? 'Time up · ' : '') + 'Mixed mock result</div>' +
      '<div class="dq-score"><b>' + score + '</b><span>/ ' + (d.qs.length * 2) + '</span></div>' +
      '<p>' + right + ' right · ' + wrong + ' wrong · ' + skipped + ' skipped · ' + Math.floor(secsUsed / 60) + ' min ' + (secsUsed % 60) + ' s</p></div>' +
      '<div class="dq-kpis">' +
        (sec.en.t ? '<div><b>' + pct(sec.en.r, sec.en.t) + '</b><span>English · ' + sec.en.r + '/' + sec.en.t + '</span></div>' : '') +
        (sec.mt.t ? '<div><b>' + pct(sec.mt.r, sec.mt.t) + '</b><span>Maths · ' + sec.mt.r + '/' + sec.mt.t + '</span></div>' : '') +
        (sec.rs.t ? '<div><b>' + pct(sec.rs.r, sec.rs.t) + '</b><span>Reasoning · ' + sec.rs.r + '/' + sec.rs.t + '</span></div>' : '') +
        (sec.gs.t ? '<div><b>' + pct(sec.gs.r, sec.gs.t) + '</b><span>General Studies · ' + sec.gs.r + '/' + sec.gs.t + '</span></div>' : '') +
        Object.keys(byMod).map(function(m){ return '<div style="--dq-c:' + (STUDY[m] ? STUDY[m].color : 'var(--mustard)') + '"><b>' + pct(byMod[m].r, byMod[m].t) + '</b><span>' + escapeHtml(MOD_NAME[m]) + ' · ' + byMod[m].r + '/' + byMod[m].t + '</span></div>'; }).join('') +
      '</div>' +
      '<div class="dq-actions"><button class="btn teal" id="mkAgain">New mock test</button><button class="btn ghost" id="mkMist">Open Mistakes book</button></div>' +
      (review.length ? '<h3 class="dq-h3">Review · ' + review.length + ' to learn</h3><div class="dq-list">' + review.map(function(q){
        return '<div class="dq-rev" style="--dq-c:' + (STUDY[q.mod] ? STUDY[q.mod].color : 'var(--mustard)') + '"><div class="dq-meta"><span>' + escapeHtml(MOD_NAME[q.mod]) + '</span>' + (q.tag ? '<span>' + escapeHtml(q.tag) + '</span>' : '') + '<span>' + (q.pick === null ? 'Skipped' : 'You chose ' + 'ABCD'.charAt(q.pick)) + '</span></div>' +
          '<div class="dq-q">' + escapeHtml(q.q) + '</div>' +
          (q.src && q.src.k === 'e' ? '<div class="dq-parts">' + q.o.map(function(o, i){ return '<span class="' + (i === q.a ? 'bad' : '') + '">' + escapeHtml(o) + '</span>'; }).join(' ') + '</div>' : '') +
          '<div class="dq-ans">' + (q.src && q.src.k === 'e' ? (/no error/i.test(q.o[q.a]) ? '✓ No error' : 'Error is in: ' + escapeHtml(q.o[q.a])) : '✓ ' + escapeHtml(q.o[q.a])) + '</div>' + (q.e ? '<div class="dq-exp">' + escapeHtml(q.e) + '</div>' : '') + '</div>';
      }).join('') + '</div>' : '<div class="dq-empty">Perfect paper. 🏆</div>'));
    document.getElementById('mkAgain').addEventListener('click', function(){ drill = { kind: 'mock', phase: 'setup' }; renderMockSetup(); });
    document.getElementById('mkMist').addEventListener('click', function(){ document.getElementById('drillTitle').textContent = 'Mistakes book'; drill = { kind: 'mistakes', phase: 'list', only: null }; renderMistakes(); });
  }
  document.addEventListener('keydown', function(ev){
    if(!drillOpen || !drill || ev.target.closest && ev.target.closest('input,textarea,select')) return;
    if(/^[1-4]$/.test(ev.key)){ var b = document.querySelector('#drillBody [data-opt="' + (+ev.key - 1) + '"]'); if(b) b.click(); }
    else if(ev.key === 'ArrowRight' || ev.key === 'Enter'){ var n = document.getElementById('mkNext') || document.getElementById('pNext'); if(n) n.click(); }
    else if(ev.key === 'ArrowLeft'){ var p = document.getElementById('mkPrev'); if(p) p.click(); }
  });
  /** On opening पाठShala: bring every module's progress up to date from the account. */
  var hubPulledAt = 0;
  function refreshHubProgressSoon(){ if(Date.now() - hubPulledAt > 120000) refreshHubProgress(); }
  function refreshHubProgress(){
    if(!currentUser) return;
    hubPulledAt = Date.now();
    var all = Object.keys(STUDY).concat(Object.keys(STUDY_EXTRA));
    Promise.all(all.map(function(id){ return studyPull(id); })).then(function(){
      if(!trackLive) trackFinishStale();
      renderHomeSoon();
      all.forEach(function(id){ if(id !== studyOpen) studyPush(id); });   // upload anything this device has not sent yet (made offline, or before signing in)
    });
  }

  // ---------------- text-to-speech ----------------
  var ttsSupported = ('speechSynthesis' in window);
  function speakText(text, lang){
    if(!ttsSupported || !text) return;
    try{
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = lang || 'en-US';
      u.rate = 0.92;
      window.speechSynthesis.speak(u);
    }catch(e){}
  }

  // ---------------- display settings: text size + dyslexia-friendly font ----------------
  var TEXT_SIZE_KEY = 'vocabRegisterTextSize';
  var DYSLEXIA_FONT_KEY = 'vocabRegisterDyslexiaFont';
  function applyDisplaySettings(){
    var size = localStorage.getItem(TEXT_SIZE_KEY) || 'normal';
    document.body.classList.remove('text-lg', 'text-xl');
    if(size === 'lg') document.body.classList.add('text-lg');
    if(size === 'xl') document.body.classList.add('text-xl');
    document.body.classList.toggle('dyslexia-font', localStorage.getItem(DYSLEXIA_FONT_KEY) === '1');
  }
  applyDisplaySettings();
  document.getElementById('displaySettingsBtn').addEventListener('click', function(){
    var size = localStorage.getItem(TEXT_SIZE_KEY) || 'normal';
    var dys = localStorage.getItem(DYSLEXIA_FONT_KEY) === '1';
    modalBodyRef().innerHTML = '<h3>Display settings</h3>' +
      '<div class="field"><label class="field-label">Text size</label>' +
        '<select id="textSizeSelect">' +
          '<option value="normal" '+(size==='normal'?'selected':'')+'>Normal</option>' +
          '<option value="lg" '+(size==='lg'?'selected':'')+'>Large</option>' +
          '<option value="xl" '+(size==='xl'?'selected':'')+'>Extra large</option>' +
        '</select>' +
      '</div>' +
      '<div class="field"><label style="display:flex; gap:10px; align-items:flex-start; cursor:pointer;">' +
        '<input type="checkbox" id="dyslexiaFontChk" style="margin-top:3px; width:18px; height:18px;" '+(dys?'checked':'')+'>' +
        '<span>Use a more dyslexia-friendly font (rounder letterforms, wider spacing)</span>' +
      '</label></div>' +
      '<div class="modal-actions"><button class="btn ghost" id="displaySettingsClose">Close</button></div>';
    modalBgRef().classList.add('open');
    document.getElementById('textSizeSelect').addEventListener('change', function(){
      localStorage.setItem(TEXT_SIZE_KEY, this.value);
      applyDisplaySettings();
    });
    document.getElementById('dyslexiaFontChk').addEventListener('change', function(){
      localStorage.setItem(DYSLEXIA_FONT_KEY, this.checked ? '1' : '0');
      applyDisplaySettings();
    });
    document.getElementById('displaySettingsClose').addEventListener('click', function(){ modalBgRef().classList.remove('open'); modalBodyRef().innerHTML=''; });
  });

  // ---------------- PWA install + service worker (works even before Firebase config) ----------------
  if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
      navigator.serviceWorker.register('sw.js').catch(function(){});
      // once the app has settled, save every mini app for offline use (skipped on Data Saver)
      setTimeout(function(){
        var c = navigator.connection;
        if(c && c.saveData) return;
        navigator.serviceWorker.ready.then(function(r){ if(r.active) r.active.postMessage({ type: 'warm' }); }).catch(function(){});
      }, 20000);
    });
    navigator.serviceWorker.addEventListener('message', function(ev){
      if(!ev.data || ev.data.type !== 'app-updated' || document.getElementById('updateBar')) return;
      var bar = document.createElement('div');
      bar.id = 'updateBar'; bar.className = 'update-bar'; bar.setAttribute('role', 'status');
      bar.innerHTML = '<span>A new version of पाठShala is ready.</span><button type="button" id="updateReload">Reload</button><button type="button" id="updateLater" aria-label="Later">✕</button>';
      document.body.appendChild(bar);
      document.getElementById('updateReload').addEventListener('click', function(){
        // reload where you are: keep an open mini app, but don't reopen one you already closed
        if(studyOpen || !location.hash) location.reload(); else location.replace(location.pathname + location.search);
      });
      document.getElementById('updateLater').addEventListener('click', function(){ bar.remove(); });
    });
  }
  var deferredInstallPrompt = null;
  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  window.addEventListener('beforeinstallprompt', function(e){
    e.preventDefault();
    deferredInstallPrompt = e;
    var btn = document.getElementById('installBtn');
    if(btn) btn.style.display = 'inline-flex';
  });
  document.getElementById('installBtn').addEventListener('click', async function(){
    if(deferredInstallPrompt){
      deferredInstallPrompt.prompt();
      try{ await deferredInstallPrompt.userChoice; }catch(e){}
      deferredInstallPrompt = null;
      document.getElementById('installBtn').style.display = 'none';
    } else {
      openInstallInstructions();
    }
  });
  if(isIOS){ document.getElementById('installBtn').style.display = 'inline-flex'; }

  function openInstallInstructions(){
    var modalBg = document.getElementById('modalBg');
    var modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = '<h3>Install this app</h3>' +
      '<p class="help"><strong>iPhone / iPad (Safari):</strong> tap the Share icon, then "Add to Home Screen".</p>' +
      '<p class="help"><strong>Android (Chrome):</strong> tap the ⋮ menu, then "Install app" or "Add to Home screen".</p>' +
      '<p class="help"><strong>Computer (Chrome / Edge):</strong> click the install icon in the address bar, or the browser menu → "Install पाठShala".</p>' +
      '<div class="modal-actions"><button class="btn ghost" id="closeInstallInfo">Close</button></div>';
    modalBg.classList.add('open');
    document.getElementById('closeInstallInfo').addEventListener('click', function(){ modalBg.classList.remove('open'); modalBody.innerHTML=''; });
  }

  // ============ CONFIGURE THESE, THEN SEE THE SETUP GUIDE ============
  var ADMIN_EMAILS = ["47manish31@gmail.com"]; // <-- your Google account email(s)

  var firebaseConfig = {
    apiKey: "AIzaSyDiTH-7aVK8ojL1njbv3BmiHJujW4xsUvM",
    authDomain: "cgl-vocab-register.firebaseapp.com",
    projectId: "cgl-vocab-register",
    storageBucket: "cgl-vocab-register.firebasestorage.app",
    messagingSenderId: "452480698099",
    appId: "1:452480698099:web:7b08914cd817e4152f1986"
  };
  // =====================================================================

  var NOT_CONFIGURED = firebaseConfig.apiKey === "YOUR_API_KEY";

  var TYPE_LABELS = {
    word:"Word", idiom:"Idiom", one_word_substitution:"One-word sub",
    phrasal_verb:"Phrasal verb", fixed_preposition:"Fixed preposition", other:"Other"
  };
  // Bump this whenever new fields are added to the Enrich flow, so previously-enriched
  // words get re-offered for just the new fields instead of being marked "done" forever.
  var ENRICH_VERSION = 2;

  if(NOT_CONFIGURED){
    document.getElementById('loadingOverlay').classList.add('hidden');
    document.getElementById('setupScreen').style.display = 'flex';
    return;
  }

  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  var db = firebase.firestore();
  try{
    db.enablePersistence({synchronizeTabs:true}).catch(function(err){
      // failed-precondition: persistence already enabled in another tab, safe to ignore.
      // unimplemented: this browser doesn't support offline persistence, app still works online.
    });
  }catch(e){}

  function updateOnlineBadge(){
    var badge = document.getElementById('onlineBadge');
    if(badge) badge.style.display = navigator.onLine ? 'none' : 'inline-flex';
  }
  window.addEventListener('online', updateOnlineBadge);
  window.addEventListener('offline', updateOnlineBadge);

  var currentUser = null;
  var isAdminUser = false;
  var isModeratorUser = false;
  var words = [];
  var progressMap = {};
  var submissions = [];
  var notifications = [];
  var pendingReview = [];
  var spellWords = [];
  var spellSubmissions = [];
  var unsubWords = null, unsubProgress = null, unsubSubs = null, unsubNotif = null;
  var unsubSpellWords = null, unsubSpellSubs = null;
  var rootGroups = [];
  var unsubRootGroups = null;
  var myProfile = null;
  var unsubMe = null;

  var toastTimer = null;
  var CHECK_SVG = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>';
  var FLAME_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c.6 3.4-1.2 5.3-2.8 7.1C7.6 10.9 6 12.7 6 15.5 6 19.1 8.7 22 12 22s6-2.9 6-6.5c0-2.3-1-4-2.2-5.4-.3 1.4-1.1 2.5-2.3 3 .5-2.9-.2-5.1-1.5-7.1z"></path></svg>';
  function showCelebration(kicker, text, iconHtml, variant){
    var old = document.getElementById('celebrateToast');
    if(old && old.parentNode) old.parentNode.removeChild(old);
    var el = document.createElement('div');
    el.id = 'celebrateToast';
    el.className = 'celebrate' + (variant ? ' celebrate-' + variant : '');
    el.setAttribute('role', 'status');
    var falls = ['fallA', 'fallB', 'fallC'];
    var conf = '';
    for(var i = 0; i < 18; i++){
      conf += '<span class="confetti c' + (i % 5) + '" style="left:' + (6 + (i * 29) % 88) + '%;width:' + (i % 3 === 0 ? 9 : 6) + 'px;height:' + (i % 2 ? 11 : 6) + 'px;border-radius:' + (i % 4 === 0 ? '50%' : '2px') + ';animation-name:' + falls[i % 3] + ';animation-delay:' + (i * 50) + 'ms;"></span>';
    }
    el.innerHTML = '<div class="confetti-wrap" aria-hidden="true">' + conf + '</div>' +
      '<span class="celebrate-badge">' + (iconHtml || CHECK_SVG) + '</span>' +
      '<div class="celebrate-text"><span class="celebrate-kicker">' + escapeHtml(kicker) + '</span><span class="celebrate-term">' + escapeHtml(text) + '</span></div>' +
      '<button class="celebrate-close" aria-label="Dismiss"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"></path></svg></button>';
    document.body.appendChild(el);
    var remove = function(){ if(el.parentNode) el.parentNode.removeChild(el); };
    el.querySelector('.celebrate-close').addEventListener('click', remove);
    setTimeout(function(){ el.classList.add('leaving'); setTimeout(remove, 380); }, variant === 'streak' ? 5200 : 4200);
  }
  function celebrate(term){ showCelebration('Memorized', term + ' hit level 5', CHECK_SVG); }

  function showToast(msg){
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ t.classList.remove('show'); }, 3200);
  }

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }
  function escapeAttr(s){ return escapeHtml(s); }
  function asArray(v){
    if(Array.isArray(v)) return v.map(String).map(function(s){return s.trim();}).filter(Boolean);
    if(typeof v === 'string' && v.trim()) return v.split(/[,;]/).map(function(s){return s.trim();}).filter(Boolean);
    return [];
  }
  function emptyStateHtml(title, msg){
    return '<div class="empty-state"><h3>'+escapeHtml(title)+'</h3><p>'+escapeHtml(msg)+'</p></div>';
  }
  function tsMillis(ts){ if(ts && typeof ts.toMillis === 'function') return ts.toMillis(); return 0; }

  // ---------------- auth ----------------
  document.getElementById('signInBtn').addEventListener('click', function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(function(e){ showToast('Sign-in failed: ' + e.message); });
  });
  document.getElementById('signOutBtn').addEventListener('click', function(){ auth.signOut(); });

  // Signed in last time: show the app straight away from this device's saved data
  // instead of waiting on the "Opening पाठShala…" screen for the sign-in check.
  if(lsGet('pathshalaSignedIn') === '1') setTimeout(function(){   // after the rest of this script has run
    if(currentUser || document.getElementById('loadingOverlay').classList.contains('hidden')) return;
    try{
      document.getElementById('signedOutScreen').style.display = 'none';
      document.getElementById('appShell').style.display = 'block';
      renderHub();
      document.getElementById('loadingOverlay').classList.add('hidden');
    }catch(e){}
  }, 0);
  auth.onAuthStateChanged(function(user){
    currentUser = user;
    detachListeners();
    stopHourlyAlerts();
    lsSet('pathshalaSignedIn', user ? '1' : null);
    if(user){
      isAdminUser = ADMIN_EMAILS.indexOf(user.email) !== -1;
      isModeratorUser = isAdminUser;
      document.getElementById('signedOutScreen').style.display = 'none';
      document.getElementById('appShell').style.display = 'block';
      renderWhoBox();
      applyRoleUI();
      attachListeners();
      studyListen();
      setTimeout(refreshHubProgress, 1200);   // fetch every module's progress and upload anything not yet sent
      ensureUserProfile();
      lockSyncStart();
      checkModeratorRole().then(function(){ renderWhoBox(); applyRoleUI(); scheduleRender(); renderReview(); });
      if(anyAlertEnabled()){ startHourlyAlerts(); }
    } else {
      isAdminUser = false;
      isModeratorUser = false;
      document.getElementById('appShell').style.display = 'none';
      document.getElementById('signedOutScreen').style.display = 'flex';
    }
    updateOnlineBadge();
    document.getElementById('loadingOverlay').classList.add('hidden');
  });

  async function ensureUserProfile(){
    try{
      await db.collection('users').doc(currentUser.uid).set({
        displayName: currentUser.displayName || currentUser.email,
        email: (currentUser.email || '').toLowerCase(),
        photoURL: currentUser.photoURL || '',
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, {merge:true});
    }catch(e){ /* non-critical */ }
  }

  async function checkModeratorRole(){
    try{
      var doc = await db.collection('roles').doc(currentUser.uid).get();
      isModeratorUser = isAdminUser || (doc.exists && doc.data().role === 'moderator');
    }catch(e){
      isModeratorUser = isAdminUser;
    }
  }

  function renderWhoBox(){
    var box = document.getElementById('whoBox');
    box.innerHTML =
      (currentUser.photoURL ? '<img class="avatar" src="'+escapeAttr(currentUser.photoURL)+'" alt="">' : '') +
      '<span>'+escapeHtml(currentUser.displayName || currentUser.email)+'</span>' +
      (isAdminUser ? '<span class="admin-badge">admin</span>' : (isModeratorUser ? '<span class="mod-badge">moderator</span>' : ''));
  }

  function applyRoleUI(){
    document.querySelectorAll('.admin-only').forEach(function(el){ el.style.display = isAdminUser ? '' : 'none'; });
    document.querySelectorAll('.mod-only').forEach(function(el){ el.style.display = isModeratorUser ? '' : 'none'; });
    document.getElementById('nonAdminBackupNote').style.display = isAdminUser ? 'none' : 'block';
    document.getElementById('addManualBtn').textContent = isModeratorUser ? '+ Add one manually' : '+ Submit one manually';
    document.getElementById('parseBtn').textContent = 'Review before adding';
    document.getElementById('addPanelHelp').textContent = isModeratorUser
      ? 'Paste the words you want to add, generate the prompt, run it through any AI, then bring the reply back here — it goes straight into the shared library.'
      : 'Paste the words you want to add, generate the prompt, run it through any AI, then bring the reply back here — it will wait for the admin to approve it before it appears for everyone.';
  }

  // ---------------- hourly alerts (new words + word-to-remember reminders) ----------------
  // Note on limits: these fire a browser notification about once an hour, but only while
  // this tab/app is actually open (foreground or backgrounded) — browsers don't let a plain
  // web page wake itself up on a schedule while fully closed. True closed-app push
  // notifications would need a small server component (Firebase Cloud Messaging + a
  // scheduled Cloud Function), which is a separate, heavier setup.
  var NOTIF_LS_KEY = 'vocabRegisterLastWordCheck';
  var ALERT_NEWWORDS_KEY = 'vocabRegisterAlertNewWords';
  var ALERT_REMINDER_KEY = 'vocabRegisterAlertReminder';
  var hourlyAlertTimer = null;
  var notifSupported = ('Notification' in window);

  function alertFlag(key){ return localStorage.getItem(key) === '1'; }
  function setAlertFlag(key, on){ try{ localStorage.setItem(key, on ? '1' : '0'); }catch(e){} }

  function getLastWordCheck(){
    var v = localStorage.getItem(NOTIF_LS_KEY);
    return v ? parseInt(v, 10) : 0;
  }
  function setLastWordCheck(ms){
    try{ localStorage.setItem(NOTIF_LS_KEY, String(ms)); }catch(e){}
  }

  function checkForNewWordsAndNotify(){
    if(!alertFlag(ALERT_NEWWORDS_KEY)) return;
    if(words.length === 0) return;
    var maxTs = words.reduce(function(m,w){ return Math.max(m, tsMillis(w.createdAt)); }, 0);
    var last = getLastWordCheck();
    if(!last){ setLastWordCheck(maxTs || Date.now()); return; }
    var newer = words.filter(function(w){ return tsMillis(w.createdAt) > last; });
    if(newer.length > 0 && notifSupported && Notification.permission === 'granted'){
      var body = newer.length === 1
        ? ('"'+newer[0].term+'" was just added to the register.')
        : (newer.length + ' new words were added to the register.');
      try{ new Notification('पाठShala', {body: body, icon: 'icon-192.png'}); }catch(e){}
    }
    if(maxTs > last) setLastWordCheck(maxTs);
  }

  function pickReminderWord(){
    if(words.length === 0) return null;
    var pool = words.filter(function(w){
      var p = progressMap[w.id];
      return !(p && p.confidence >= 5);
    });
    if(pool.length === 0) pool = words;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function sendReminderNotification(){
    if(!alertFlag(ALERT_REMINDER_KEY)) return;
    if(!notifSupported || Notification.permission !== 'granted') return;
    var w = pickReminderWord();
    if(!w) return;
    var title = w.term + '  ·  ' + TYPE_LABELS[w.type];
    var bodyParts = [];
    if(w.english_meaning) bodyParts.push(w.english_meaning);
    if(w.hindi_meaning) bodyParts.push(w.hindi_meaning);
    var body = bodyParts.length ? bodyParts.join(' — ') : 'Open the register to review this one.';
    try{ new Notification(title, {body: body, icon: 'icon-192.png'}); }catch(e){}
  }

  function hourlyAlertTick(){
    checkForNewWordsAndNotify();
    sendReminderNotification();
  }

  function anyAlertEnabled(){
    return notifSupported && Notification.permission === 'granted' && (alertFlag(ALERT_NEWWORDS_KEY) || alertFlag(ALERT_REMINDER_KEY));
  }

  function startHourlyAlerts(){
    if(hourlyAlertTimer) return;
    hourlyAlertTick();
    hourlyAlertTimer = setInterval(hourlyAlertTick, 60 * 60 * 1000);
  }
  function stopHourlyAlerts(){
    if(hourlyAlertTimer){ clearInterval(hourlyAlertTimer); hourlyAlertTimer = null; }
  }

  // ---------------- background tab title flash ----------------
  var ALERT_TABFLASH_KEY = 'vocabRegisterAlertTabFlash';
  var tabFlashTimer = null;
  var originalTitle = document.title;

  function startTabFlash(){
    if(tabFlashTimer) return;
    var flipped = false;
    tabFlashTimer = setInterval(function(){
      var w = pickReminderWord();
      flipped = !flipped;
      if(flipped && w){
        var snippet = w.english_meaning ? w.english_meaning.slice(0,36) : '';
        document.title = '📖 ' + w.term + (snippet ? ' = ' + snippet : '');
      } else {
        document.title = originalTitle;
      }
    }, 4000);
  }
  function stopTabFlash(){
    if(tabFlashTimer){ clearInterval(tabFlashTimer); tabFlashTimer = null; }
    document.title = originalTitle;
  }
  document.addEventListener('visibilitychange', function(){
    if(document.hidden){
      if(alertFlag(ALERT_TABFLASH_KEY)) startTabFlash();
    } else {
      stopTabFlash();
    }
  });

  document.getElementById('alertsSettingsBtn').addEventListener('click', function(){
    modalBodyRef().innerHTML = '<h3>Notification alerts</h3>' +
      '<p class="help">All of these run only while this app stays open (installed-app mode counts too) — not while it\'s fully closed.</p>' +
      (notifSupported ? (
      '<div class="field"><label style="display:flex; gap:10px; align-items:flex-start; cursor:pointer;">' +
        '<input type="checkbox" id="chkNewWords" style="margin-top:3px; width:18px; height:18px;" '+(alertFlag(ALERT_NEWWORDS_KEY)?'checked':'')+'>' +
        '<span>Notify me when new words are added to the library. (about once an hour)</span>' +
      '</label></div>' +
      '<div class="field"><label style="display:flex; gap:10px; align-items:flex-start; cursor:pointer;">' +
        '<input type="checkbox" id="chkReminder" style="margin-top:3px; width:18px; height:18px;" '+(alertFlag(ALERT_REMINDER_KEY)?'checked':'')+'>' +
        '<span>Send me a word to remember — picks one you haven\'t marked memorized yet, showing its meaning right in the notification. (about once an hour)</span>' +
      '</label></div>'
      ) : '<p class="help">Browser notifications aren\'t supported here, but the tab-title option below still works.</p>') +
      '<div class="field"><label style="display:flex; gap:10px; align-items:flex-start; cursor:pointer;">' +
        '<input type="checkbox" id="chkTabFlash" style="margin-top:3px; width:18px; height:18px;" '+(alertFlag(ALERT_TABFLASH_KEY)?'checked':'')+'>' +
        '<span>While this tab is in the background, flash its title with a word to remember every few seconds — no permission needed, just glance at your open tabs.</span>' +
      '</label></div>' +
      '<div class="field"><label style="display:flex; gap:10px; align-items:flex-start; cursor:pointer;">' +
        '<input type="checkbox" id="chkEvening" style="margin-top:3px; width:18px; height:18px;" '+(alertFlag(ALERT_EVENING_KEY)?'checked':'')+'>' +
        '<span>Evening nudge — if my daily goal isn\'t done yet (streak at risk) or words are due for revision, remind me at <input type="time" id="eveningTime" value="'+escapeAttr(lsGet(EVENING_TIME_KEY)||'20:00')+'" style="width:auto; display:inline-block; padding:4px 8px; margin-left:4px;"></span>' +
      '</label></div>' +
      '<div class="modal-actions"><button class="btn ghost" id="alertsCancel">Cancel</button><button class="btn teal" id="alertsSave">Save</button></div>';
    modalBgRef().classList.add('open');
    document.getElementById('alertsCancel').addEventListener('click', function(){ modalBgRef().classList.remove('open'); modalBodyRef().innerHTML=''; });
    document.getElementById('alertsSave').addEventListener('click', async function(){
      var wantNewWords = notifSupported && document.getElementById('chkNewWords') ? document.getElementById('chkNewWords').checked : false;
      var wantReminder = notifSupported && document.getElementById('chkReminder') ? document.getElementById('chkReminder').checked : false;
      var wantTabFlash = document.getElementById('chkTabFlash').checked;
      if(wantNewWords || wantReminder){
        var perm = Notification.permission;
        if(perm === 'default'){ perm = await Notification.requestPermission(); }
        if(perm !== 'granted'){
          showToast('Notifications are blocked for this site — enable them in your browser settings to use this.');
          return;
        }
      }
      var wantEvening = document.getElementById('chkEvening').checked;
      if(wantEvening && notifSupported && Notification.permission === 'default'){ try{ await Notification.requestPermission(); }catch(e){} }
      setAlertFlag(ALERT_EVENING_KEY, wantEvening);
      lsSet(EVENING_TIME_KEY, document.getElementById('eveningTime').value || '20:00');
      if(wantEvening){ lsSet(EVENING_FIRED_KEY, ''); setTimeout(eveningCheck, 1500); }
      setAlertFlag(ALERT_NEWWORDS_KEY, wantNewWords);
      setAlertFlag(ALERT_REMINDER_KEY, wantReminder);
      setAlertFlag(ALERT_TABFLASH_KEY, wantTabFlash);
      modalBgRef().classList.remove('open'); modalBodyRef().innerHTML='';
      if(anyAlertEnabled()){ startHourlyAlerts(); } else { stopHourlyAlerts(); }
      if(!wantTabFlash){ stopTabFlash(); }
      showToast('Alerts saved.');
    });
  });

  // ---------------- Firestore listeners ----------------
  function attachListeners(){
    unsubMe = db.collection('users').doc(currentUser.uid).onSnapshot(function(doc){
      myProfile = doc.exists ? (doc.data() || {}) : {};
      var ed = lsGet('pathshalaExamDate');   // exam date: keep this device in step with the account (and upload one set before syncing existed)
      if(myProfile.examDate && myProfile.examDate !== ed) lsSet('pathshalaExamDate', myProfile.examDate);
      else if(!myProfile.examDate && /^\d{4}-\d{2}-\d{2}$/.test(ed || '')) db.collection('users').doc(currentUser.uid).set({ examDate: ed }, { merge: true }).catch(function(){});
      renderGoalWidget();
      if(isActive('stats')) renderStreakPanel();
      renderHomeSoon();
      maybeAskGoal();
    }, function(err){ /* streaks are optional; the widget just stays hidden */ });

    unsubWords = db.collection('words').orderBy('createdAt','desc').onSnapshot(function(snap){
      var changes = typeof snap.docChanges === 'function' ? snap.docChanges() : null;
      var prev = {};
      words.forEach(function(w){ prev[w.id] = w; });
      var hadWords = words.length > 0;
      words = snap.docs.map(function(d){ return Object.assign({id:d.id}, d.data()); });
      if(changes && hadWords){
        if(changes.length === 0) return;
        var countersOnly = changes.every(function(c){
          return c.type === 'modified' && prev[c.doc.id] && sameExceptCounters(prev[c.doc.id], Object.assign({id: c.doc.id}, c.doc.data()));
        });
        if(countersOnly) return;
      }
      maybeBackfillRevisions();
      scheduleRender();
    }, function(err){ showToast('Could not load the library: ' + err.message); });

    unsubProgress = db.collection('users').doc(currentUser.uid).collection('progress').onSnapshot(function(snap){
      var map = {};
      snap.forEach(function(d){ map[d.id] = d.data(); });
      var changed = [], seen = {};
      Object.keys(map).concat(Object.keys(progressMap)).forEach(function(id){
        if(seen[id]) return;
        seen[id] = true;
        var a = progressMap[id] || {}, b = map[id] || {};
        if((a.confidence || 0) !== (b.confidence || 0) || !!a.starred !== !!b.starred) changed.push(id);
      });
      progressMap = map;
      if(!progressLoaded) setTimeout(eveningCheck, 4000);
      progressLoaded = true;
      maybeBackfillRevisions();
      if(changed.length === 0) return;
      if(changed.length <= 20 && libraryPatchable()){ changed.forEach(patchCard); renderStatStrip(); }
      else scheduleRender();
    }, function(err){ showToast('Could not load your progress: ' + err.message); });

    var subsQuery = isModeratorUser
      ? db.collection('submissions')
      : db.collection('submissions').where('authorUid','==', currentUser.uid);
    unsubSubs = subsQuery.onSnapshot(function(snap){
      submissions = snap.docs.map(function(d){ return Object.assign({id:d.id}, d.data()); });
      submissions.sort(function(a,b){ return tsMillis(b.createdAt) - tsMillis(a.createdAt); });
      renderReview();
    }, function(err){ showToast('Could not load submissions: ' + err.message); });

    unsubNotif = db.collection('users').doc(currentUser.uid).collection('notifications').onSnapshot(function(snap){
      notifications = snap.docs.map(function(d){ return Object.assign({id:d.id}, d.data()); });
      notifications.sort(function(a,b){ return tsMillis(b.createdAt) - tsMillis(a.createdAt); });
      renderNotifBell();
    }, function(err){ /* notifications are a convenience feature, fail silently */ });

    unsubRootGroups = db.collection('rootGroups').onSnapshot(function(snap){
      rootGroups = snap.docs.map(function(d){ return Object.assign({id:d.id}, d.data()); }).filter(function(g){ return g.key; });
      rootGroups.sort(function(a,b){ return String(a.key).localeCompare(String(b.key)); });
      scheduleRender();
    }, function(err){ /* root groups are optional; the filter simply stays hidden */ });

    unsubSpellWords = db.collection('spellwords').orderBy('createdAt','desc').onSnapshot(function(snap){
      spellWords = snap.docs.map(function(d){ return Object.assign({id:d.id}, d.data()); });
      if(isActive('spellbank')) renderSpellBank();
    }, function(err){ showToast('Could not load the Spelling Bank: ' + err.message); });

    var spellSubsQuery = isModeratorUser
      ? db.collection('spellSubmissions')
      : db.collection('spellSubmissions').where('authorUid','==', currentUser.uid);
    unsubSpellSubs = spellSubsQuery.onSnapshot(function(snap){
      spellSubmissions = snap.docs.map(function(d){ return Object.assign({id:d.id}, d.data()); });
      spellSubmissions.sort(function(a,b){ return tsMillis(b.createdAt) - tsMillis(a.createdAt); });
      renderSpellReview();
    }, function(err){ showToast('Could not load spelling submissions: ' + err.message); });
  }
  function detachListeners(){
    lockSyncStop();
    if(unsubWords) unsubWords();
    if(unsubProgress) unsubProgress();
    if(unsubSubs) unsubSubs();
    if(unsubNotif) unsubNotif();
    if(unsubSpellWords) unsubSpellWords();
    if(unsubSpellSubs) unsubSpellSubs();
    if(unsubRootGroups) unsubRootGroups();
    if(unsubMe) unsubMe();
    if(unsubStudy){ unsubStudy(); unsubStudy = null; }
    unsubMe = null; myProfile = null;
    var gwEl = document.getElementById('goalWidget'); if(gwEl) gwEl.style.display = 'none';
    unsubRootGroups = null; rootGroups = [];
    unsubWords = unsubProgress = unsubSubs = unsubNotif = unsubSpellWords = unsubSpellSubs = null;
    words = []; progressMap = {}; submissions = []; notifications = []; spellWords = []; spellSubmissions = [];
  }

  // ---------------- notifications ----------------
  function renderNotifBell(){
    var btn = document.getElementById('notifBtn');
    var countEl = document.getElementById('notifCount');
    var unread = notifications.filter(function(n){ return !n.read; }).length;
    btn.style.display = 'inline-flex';
    if(unread > 0){ countEl.style.display = 'inline-block'; countEl.textContent = unread > 9 ? '9+' : String(unread); }
    else { countEl.style.display = 'none'; }
  }
  document.getElementById('notifBtn').addEventListener('click', function(){
    modalBodyRef().innerHTML = '<h3>Notifications</h3>' +
      (notifications.length === 0 ? '<p class="help">Nothing yet — you\'ll see updates here when the admin reviews something you submitted.</p>' :
        notifications.map(function(n){
          var approved = n.status === 'approved';
          return '<div class="pending-card" style="border-left-color:'+(approved?'var(--teal)':'var(--maroon)')+';">' +
            '<strong>'+escapeHtml(n.term||'')+'</strong>' +
            '<div class="pending-meta">'+(approved ? 'Approved and added to the library.' : 'Not approved by the admin.')+'</div>' +
          '</div>';
        }).join('')
      ) +
      '<div class="modal-actions"><button class="btn ghost" id="closeNotif">Close</button></div>';
    modalBgRef().classList.add('open');
    document.getElementById('closeNotif').addEventListener('click', function(){ modalBgRef().classList.remove('open'); modalBodyRef().innerHTML=''; });
    markAllNotifsRead();
  });
  async function markAllNotifsRead(){
    var unread = notifications.filter(function(n){ return !n.read; });
    if(unread.length === 0) return;
    try{
      var batch = db.batch();
      unread.forEach(function(n){ batch.update(db.collection('users').doc(currentUser.uid).collection('notifications').doc(n.id), {read:true}); });
      await batch.commit();
    }catch(e){ /* non-critical */ }
  }
  function modalBgRef(){ return document.getElementById('modalBg'); }
  function modalBodyRef(){ return document.getElementById('modalBody'); }

  function viewEntries(){
    if(veMemo) return veMemo;   // the home page reads the list several times while it is built (read-only)
    return words.map(function(w){
      var p = progressMap[w.id] || {};
      return Object.assign({}, w, { confidence: p.confidence || 0, starred: !!p.starred });
    });
  }

  // ================= Tasks: a to-do list where each task needs 1, 2 or 3 ticks =================
  // Stored in localStorage 'shabdTodo' and synced like the mini apps (users/{uid}/study/todo).
  // { v:1, def (ticks for new tasks), at, tasks:[{ id, t (text), n (ticks needed 1–3), k (ticks done), tk ([tick times]), star,
  //   due ('YYYY-MM-DD' or ''), tag, app (mini app id), fm (focus minutes), c (created), u (updated), done (ms or 0), del (ms or 0) }] }
  var TODO_KEY = 'shabdTodo', TODO_FOCUS = 'shabdTodoFocus', TODO_MIN = 25;
  var todoView = 'today', todoTag = '', todoEdit = null, todoUndo = null, todoPop = null, todoFocusTimer = null;
  var TODO_NEED = ['', 'Do it once', 'Do it, then revise once', 'Do it, then revise twice'];
  var TODO_TICK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7"></path></svg>';
  var TODO_QUICK = ['Vocab quiz — 20 words', 'One mixed mock test', 'Clear the mistakes book', 'Read current affairs'];
  function todoData(){
    var d; try{ d = JSON.parse(lsGet(TODO_KEY) || '{}') || {}; }catch(e){ d = {}; }
    d.v = 1; d.def = d.def || 1; d.tasks = Array.isArray(d.tasks) ? d.tasks : []; return d;
  }
  function todoSave(d){
    d.at = Date.now();
    var cut = Date.now() - 30 * DAY_MS;                        // deleted tasks are kept 30 days so other devices learn of the delete
    d.tasks = d.tasks.filter(function(t){ return !t.del || t.del > cut; });
    lsSet(TODO_KEY, JSON.stringify(d));
    setStudyMeta('todo', { localAt: Date.now() });
    clearTimeout(todoSave.timer);
    todoSave.timer = setTimeout(function(){ studyPush('todo'); }, 1500);
    // and to the phone app soon, rather than at the next 20-second round
    clearTimeout(todoSave.phone);
    todoSave.phone = setTimeout(function(){ lockPushSummary(false); }, 2000);
    renderHomeSoon();
  }
  /** Two devices' lists: every task from both, the newer edit of each task wins. */
  function todoMerge(a, b){
    var map = {};
    (a.tasks || []).concat(b.tasks || []).forEach(function(t){ var o = map[t.id]; if(!o || (t.u || 0) > (o.u || 0)) map[t.id] = t; });
    var newer = (a.at || 0) >= (b.at || 0) ? a : b;
    return { v: 1, def: newer.def || a.def || b.def || 1, at: Math.max(a.at || 0, b.at || 0),
      tasks: Object.keys(map).map(function(k){ return map[k]; }).sort(function(x, y){ return (x.c || 0) - (y.c || 0); }) };
  }
  function todoYmd(d){ return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function todoDay(off){ var d = new Date(); d.setDate(d.getDate() + (off || 0)); return todoYmd(d); }
  function todoDueLabel(due){
    if(!due) return null;
    var today = todoDay(0);
    if(due < today){ var dd = new Date(due + 'T00:00:00'); return ['late', 'Overdue · ' + dd.getDate() + ' ' + dd.toLocaleString('en-IN', { month: 'short' })]; }
    if(due === today) return ['now', 'Today'];
    if(due === todoDay(1)) return ['', 'Tomorrow'];
    var d = new Date(due + 'T00:00:00'), diff = Math.round((d - new Date(today + 'T00:00:00')) / DAY_MS);
    return ['', diff < 7 ? d.toLocaleString('en-IN', { weekday: 'long' }) : d.getDate() + ' ' + d.toLocaleString('en-IN', { month: 'short' })];
  }
  // ---- linking a task to a mini app and to a chapter / lesson inside any app ----
  // Other names people type for an app ("formula book", "isro", "reported speech"…), on top of its id and title.
  var TODO_APP_ALIAS = {
    numbersystem: ['number systems', 'no system'],
    formulas: ['formula book', 'formula books', 'formulas book', 'maths formulas', 'math formulas', 'maths formula', 'formulas'],
    bns: ['bnss', 'bsa'], schemes: ['schemes', 'govt schemes', 'government scheme', 'yojana', 'yojanas'],
    intlorgs: ['international organisations', 'international organizations', 'intl orgs'],
    reports: ['reports and indices', 'reports indices', 'indices reports'], iprplans: ['ipr', 'five year plans', 'industrial policy'],
    folkdances: ['folk dances', 'folk dance'], festivals: ['festivals'], appointments: ['appointments'],
    polity: ['polity'], economics: ['economy', 'economics'], census: ['census'], sports: ['sports'],
    mensuration2d: ['mensuration 2d', '2d mensuration'], mensuration3d: ['mensuration 3d', '3d mensuration'],
    trigonometry: ['trigonometry', 'trigo'], space: ['isro', 'space missions'], voice: ['active passive', 'active and passive', 'passive voice'],
    narration: ['narration', 'direct indirect', 'reported speech'], grammar: ['grammar'], geometry: ['geometry'], physics: ['physics'], biology: ['biology']
  };
  // words that say what to do, not what to study ("revise", "chapter"…) — ignored when matching a lesson
  var TODO_FILLER = ' revise revision revisit read reread study learn practice practise do done complete finish solve test tests quiz mock questions question qs pyq pyqs chapter chapters chap ch lesson lessons topic topics part notes note formula formulas book again once twice full all whole the a an of and in on for to from with my me app maths math ssc cgl min mins minutes hour hours hr hrs ';
  // words in lesson titles that don't name the topic
  var TODO_TITLE_FILLER = ' and the of a an in on for to with how are is what who these this questions question asked vs i ii iii iv v by other more ssc cgl का की के और में से एवं ';
  function todoNorm(s){ return String(s || '').toLowerCase().replace(/[’']/g, '').replace(/[^\p{L}\p{M}\p{N}]+/gu, ' ').replace(/\s+/g, ' ').trim(); }
  function todoStem(w){ return /^[a-z]{5,}$/.test(w) ? w.replace(/ies$/, 'y').replace(/(ch|sh|x|ss)es$/, '$1').replace(/([^s])s$/, '$1') : w; }
  function todoTokSame(a, b){
    if(a === b) return true;
    var x = todoStem(a), y = todoStem(b);
    if(x === y) return true;
    var sh = x.length < y.length ? x : y, lg = sh === x ? y : x;
    return sh.length >= 6 && lg.indexOf(sh) === 0;                        // "photosynth" → photosynthesis (not "digit" → digital)
  }
  /** The app a task names, and the words that named it: { id, words } or null. The longest name wins. */
  function todoFindAppHit(s){
    var low = ' ' + todoNorm(s) + ' ', best = null;
    Object.keys(STUDY).forEach(function(id){
      var ti = todoNorm(STUDY[id].title), names = [id].concat(ti.length > 4 ? [ti] : [], TODO_APP_ALIAS[id] || []);
      names.forEach(function(nm){
        nm = todoNorm(nm);
        if(low.indexOf(' ' + nm + ' ') === -1) return;
        if(!best || nm.length > best.words.length) best = { id: id, words: nm };
      });
    });
    return best;
  }
  function todoFindApp(s){ var h = todoFindAppHit(s); return h ? h.id : ''; }

  // every lesson of every app: [{ mod, id, t, h, n (number in its id), tt (title tokens), segs ([token lists]), ht (Hindi tokens) }]
  var todoLessons = null, todoLessonsP = null;
  function todoLessonsLoad(){
    if(todoLessons) return Promise.resolve(todoLessons);
    if(!todoLessonsP) todoLessonsP = loadSearchJson().then(function(j){
      var out = [];
      Object.keys(j.modules || {}).forEach(function(mod){
        if(!STUDY[mod]) return;
        j.modules[mod].forEach(function(l){
          var sig = function(txt){ return todoNorm(txt).split(' ').filter(function(w, i, all){ return w && all.indexOf(w) === i && !/^\d+$/.test(w) && TODO_TITLE_FILLER.indexOf(' ' + w + ' ') === -1; }); };
          out.push({ mod: mod, id: l.id, t: l.t, h: l.h || '', n: parseInt(String(l.id).replace(/\D/g, ''), 10) || 0, nt: todoNorm(l.t),
            tt: sig(l.t), ht: sig(l.h || ''), segs: String(l.t).split(/[:·—–,;()]| - /).map(sig).filter(function(x){ return x.length; }) });
        });
      });
      todoLessons = out;
      return out;
    }).catch(function(e){ todoLessonsP = null; throw e; });
    return todoLessonsP;
  }
  function todoLessonGet(mod, id){ return (todoLessons || []).filter(function(l){ return l.mod === mod && l.id === id; })[0] || null; }
  /** How much of a lesson title the task's words cover (0–1); 0 unless every task word is in the title. */
  function todoCover(core, toks){
    if(!toks.length || core.length > toks.length + 1) return 0;
    var hit = 0;
    for(var i = 0; i < core.length; i++){ if(!toks.some(function(w){ return todoTokSame(core[i], w); })) return 0; }
    toks.forEach(function(w){ if(core.some(function(c){ return todoTokSame(c, w); })) hit++; });
    return hit / toks.length;
  }
  /** The chapter / lesson a task names: { mod, id, t } or null. Needs todoLessons loaded.
      "Formula book chapter 3" → chapter 3 of that app; "HCF and LCM" → the lesson with that title, in any app. */
  function todoFindLesson(text, appHit){
    if(!todoLessons) return null;
    var low = todoNorm(text), app = appHit ? appHit.id : '';
    var num = /(?:^| )(?:chapter|chap|ch|lesson|les|rule|unit|part|l|c|r) ?(\d{1,3})(?= |$)/.exec(low);
    if(num && app){
      var byNum = todoLessons.filter(function(l){ return l.mod === app && l.n === +num[1]; })[0];
      if(byNum) return byNum;
    }
    var core = low.split(' ').filter(function(w){ return w && !/^\d+$/.test(w) && TODO_FILLER.indexOf(' ' + w + ' ') === -1; });
    // words that named the app don't have to be in the chapter title ("economy budget" → Budget)
    var rest = appHit ? core.filter(function(w){ return (' ' + appHit.words + ' ').indexOf(' ' + w + ' ') === -1; }) : core;
    // the task only names an app ("Revise geometry"): link a lesson only if its title is exactly those words,
    // and never one inside that same app ("Trigonometry" → the Formula Book's Trigonometry chapter, not geometry's)
    var onlyApp = !!appHit && !rest.length;
    if(!onlyApp) core = rest;
    if(!core.length || (core.length === 1 && core[0].length < 3)) return null;
    var best = null, bestS = 0;
    todoLessons.forEach(function(l){
      if(onlyApp && l.mod === app) return;
      var s = Math.max(todoCover(core, l.tt), todoCover(core, l.ht));
      l.segs.forEach(function(sg){ s = Math.max(s, todoCover(core, sg)); });
      if(onlyApp ? s < 1 : s < 0.5) return;
      if((' ' + low + ' ').indexOf(' ' + l.nt + ' ') !== -1) s += 0.3;   // the whole title was typed
      if(l.mod === app) s += 0.05;                                           // prefer a lesson in the app the task names
      if(s > bestS){ best = l; bestS = s; }
    });
    return best;
  }
  function todoSetLesson(t, l){ t.lm = l ? l.mod : ''; t.li = l ? l.id : ''; t.lt = l ? l.t : ''; }
  /** "Revise polity #gs ! tomorrow" → text "Revise polity", tag gs, important, due tomorrow, linked to the Polity app.
      "HCF and LCM" → also linked to that chapter of the Formula Book (once the lesson list has loaded). */
  function todoParse(raw){
    var o = { star: false, due: '', tag: '', app: '', lesson: null }, s = ' ' + String(raw).replace(/\s+/g, ' ') + ' ';
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    s = s.replace(/ !+(?= )/g, function(){ o.star = true; return ' '; });
    s = s.replace(/ #([^\s#]{1,24})(?= )/g, function(m, t){ if(o.tag) return m; o.tag = t.toLowerCase(); return ' '; });
    s = s.replace(/ (today|tonight|tomorrow|tmrw|sunday|monday|tuesday|wednesday|thursday|friday|saturday)(?= )/i, function(m, w){
      w = w.toLowerCase();
      if(w === 'today' || w === 'tonight') o.due = todoDay(0);
      else if(w === 'tomorrow' || w === 'tmrw') o.due = todoDay(1);
      else { var diff = (days.indexOf(w) - new Date().getDay() + 7) % 7; o.due = todoDay(diff || 7); }
      return ' ';
    });
    o.t = s.replace(/\s+/g, ' ').trim() || String(raw).trim();
    var hit = todoFindAppHit(o.t);
    o.app = hit ? hit.id : '';
    o.lesson = todoFindLesson(o.t, hit);
    return o;
  }
  function todoNewId(){ return 't' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function todoAdd(raw, extra){
    var p = todoParse(raw);
    if(!p.t) return null;
    var d = todoData(), now = Date.now();
    var t = Object.assign({ id: todoNewId(), t: p.t, n: d.def, k: 0, tk: [], star: p.star, due: p.due, tag: p.tag, app: p.app, lm: '', li: '', lt: '', fm: 0, c: now, u: now, done: 0, del: 0 }, extra || {});
    if(!t.lm) todoSetLesson(t, p.lesson);
    d.tasks.push(t);
    todoSave(d);
    if(!todoLessons && !t.lm) todoLinkLater(t.id);
    return t;
  }
  /** The lesson list was still loading when the task was made: link its chapter once it arrives. */
  function todoLinkLater(id){
    todoLessonsLoad().then(function(){
      var d = todoData(), t = d.tasks.filter(function(x){ return x.id === id; })[0];
      if(!t || t.lm || t.del) return;
      var l = todoFindLesson(t.t, todoFindAppHit(t.t));
      if(!l) return;
      todoUpd(id, function(x){ todoSetLesson(x, l); });
      if(isActive('tasks') && todoEdit !== id) renderTodo();
    }, function(){});
  }
  function todoUpd(id, fn){
    var d = todoData(), t = d.tasks.filter(function(x){ return x.id === id; })[0];
    if(!t) return null;
    fn(t, d);
    t.u = Date.now();
    todoSave(d);
    return t;
  }
  /** Set a task's ticks to k (clamped); returns true if this finished the task. */
  function todoSetTicks(t, k){
    k = Math.max(0, Math.min(t.n, k));
    var tk = (t.tk || []).slice(0, k);
    while(tk.length < k) tk.push(Date.now());
    var was = !!t.done;
    t.k = k; t.tk = tk; t.done = k >= t.n ? (t.done || Date.now()) : 0;
    return !was && !!t.done;
  }
  function todoLists(d){
    var today = todoDay(0), live = d.tasks.filter(function(t){ return !t.del; });
    var open = live.filter(function(t){ return !t.done; }), done = live.filter(function(t){ return t.done; });
    return {
      live: live, open: open,
      today: open.filter(function(t){ return !t.due || t.due <= today; }),
      up: open.filter(function(t){ return t.due && t.due > today; }),
      done: done.sort(function(a, b){ return b.done - a.done; }),
      doneToday: done.filter(function(t){ return todoYmd(new Date(t.done)) === today; })
    };
  }
  function todoSort(a, b){
    if(!!a.star !== !!b.star) return a.star ? -1 : 1;
    var ad = a.due || '9999', bd = b.due || '9999';
    if(ad !== bd) return ad < bd ? -1 : 1;
    if((a.k > 0) !== (b.k > 0)) return a.k > 0 ? -1 : 1;     // half-finished tasks first
    return (a.c || 0) - (b.c || 0);
  }
  /** Tasks left for today, for the home page. */
  function todoLeftToday(){ return todoLists(todoData()).today.length; }

  function todoItem(t, focusId){
    var ticks = '';
    for(var i = 0; i < t.n; i++) ticks += '<button type="button" class="td-tick' + (i < t.k ? ' on' : '') + '" data-td-tick="' + i + '" aria-label="Tick ' + (i + 1) + ' of ' + t.n + (i < t.k ? ' (done — tap to undo)' : '') + '" title="' + (i < t.k ? 'Ticked ' + new Date((t.tk || [])[i] || t.u).toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }) + ' — tap to undo' : 'Tick ' + (i + 1) + ' of ' + t.n) + '">' + TODO_TICK_SVG + '</button>';
    var due = !t.done && todoDueLabel(t.due), meta = '';
    if(t.n > 1 && !t.done) meta += '<span>' + t.k + ' of ' + t.n + ' ticks</span>';
    if(due) meta += '<span class="td-due ' + due[0] + '">' + escapeHtml(due[1]) + '</span>';
    if(t.tag) meta += '<button type="button" class="td-tag" data-td-tagf="' + escapeAttr(t.tag) + '">#' + escapeHtml(t.tag) + '</button>';
    if(t.lm && STUDY[t.lm]) meta += '<button type="button" class="td-app td-lesson" data-td-lesson="' + t.lm + '" data-td-li="' + escapeAttr(t.li) + '" title="Open this chapter in ' + escapeAttr(STUDY[t.lm].title) + '">📖 ' + escapeHtml(t.lt || t.li) + (t.lm !== t.app ? ' · ' + escapeHtml(STUDY[t.lm].title) : '') + ' ›</button>';
    if(t.app && STUDY[t.app]) meta += '<button type="button" class="td-app" data-td-app="' + t.app + '">' + (STUDY[t.app].ico || '📘') + ' Open ' + escapeHtml(STUDY[t.app].title) + ' ›</button>';
    if(t.fm) meta += '<span>⏱ ' + t.fm + ' min focused</span>';
    if(t.done) meta += '<span>Done ' + new Date(t.done).toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }) + '</span>';
    var acts = '<div class="td-acts">' +
      '<button type="button" class="td-ib' + (t.star ? ' on' : '') + '" data-td-star aria-label="' + (t.star ? 'Remove from important' : 'Mark important') + '" title="Important">' + (t.star ? '★' : '☆') + '</button>' +
      (t.done ? '' : '<button type="button" class="td-ib" data-td-focus aria-label="Start a ' + TODO_MIN + '-minute focus session" title="Focus ' + TODO_MIN + ' min — adds a tick when it ends"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2.5 2.5M9 2h6"></path></svg></button>') +
      '<button type="button" class="td-ib" data-td-edit aria-label="Edit task" title="Edit">⋯</button></div>';
    var edit = '';
    if(todoEdit === t.id){
      var opts = '<option value="">— none —</option>' + Object.keys(STUDY).map(function(id){ return '<option value="' + id + '"' + (t.app === id ? ' selected' : '') + '>' + escapeHtml(STUDY[id].title) + '</option>'; }).join('');
      // chapters grouped by app; the task's own app first
      var cur = t.lm ? t.lm + '|' + t.li : '', lopts = '<option value="">— none —</option>';
      if(todoLessons){
        var mods = Object.keys(STUDY).sort(function(a, b){ return (b === t.app) - (a === t.app); });
        lopts += mods.map(function(m){
          var ls = todoLessons.filter(function(l){ return l.mod === m; });
          return ls.length ? '<optgroup label="' + escapeAttr(STUDY[m].title) + '">' + ls.map(function(l){ var v = m + '|' + l.id; return '<option value="' + escapeAttr(v) + '"' + (v === cur ? ' selected' : '') + '>' + escapeHtml(l.n + '. ' + l.t) + '</option>'; }).join('') + '</optgroup>' : '';
        }).join('');
      } else {
        if(cur) lopts += '<option value="' + escapeAttr(cur) + '" selected>' + escapeHtml(t.lt || t.li) + '</option>';
        todoLessonsLoad().then(function(){ if(todoEdit === t.id) renderTodo(); }, function(){});
      }
      edit = '<div class="td-edit">' +
        '<input type="text" class="td-et" id="tdeT" value="' + escapeAttr(t.t) + '" aria-label="Task text" maxlength="200">' +
        '<div class="td-edit-row">' +
          '<label>Ticks to finish<span class="td-seg">' + [1, 2, 3].map(function(n){ return '<button type="button" data-td-n="' + n + '" class="' + (t.n === n ? 'on' : '') + '">' + '✓'.repeat(n) + '</button>'; }).join('') + '</span></label>' +
          '<label>Due<input type="date" id="tdeD" value="' + escapeAttr(t.due || '') + '"></label>' +
          '<label>Tag<input type="text" id="tdeG" value="' + escapeAttr(t.tag || '') + '" placeholder="e.g. gs" maxlength="24" style="width:110px;"></label>' +
          '<label>Linked app<select id="tdeA" data-was="' + escapeAttr(t.app || '') + '">' + opts + '</select></label>' +
          '<label>Linked chapter<select id="tdeL" class="td-lsel" data-was="' + escapeAttr(cur) + '">' + lopts + '</select></label>' +
        '</div>' +
        '<div class="td-hint" style="margin:6px 0 0;">Saving reads the text again: <code>#tag</code>, <code>!</code>, a day and app or chapter names are picked up.</div>' +
        '<div class="td-edit-btns"><button type="button" class="btn sm" data-td-save>Save</button><button type="button" class="btn ghost sm" data-td-cancel>Cancel</button>' +
          (t.k ? '<button type="button" class="btn ghost sm" data-td-reset>Clear ticks</button>' : '') +
          '<button type="button" class="btn ghost sm del" data-td-del>Delete</button></div>' +
      '</div>';
    }
    return '<div class="td-item' + (t.done ? ' done' : '') + (t.star ? ' star' : '') + (focusId === t.id ? ' focus' : '') + (todoPop === t.id ? ' pop' : '') + '" data-td-id="' + t.id + '">' +
      '<div class="td-ticks">' + ticks + '</div>' +
      '<div class="td-body"><div class="td-text" data-td-edit>' + escapeHtml(t.t) + '</div><div class="td-meta">' + meta + '</div></div>' +
      acts + edit + '</div>';
  }

  function renderTodo(){
    var root = document.getElementById('todoRoot');
    if(!root) return;
    if(!todoLessons) todoLessonsLoad().catch(function(){});   // chapter titles, so new tasks link to them
    var d = todoData(), L = todoLists(d), f = todoFocusGet();
    var keepVal = (document.getElementById('tdIn') || {}).value || '';
    var hadFocus = document.activeElement && document.activeElement.id === 'tdIn';
    var list = todoView === 'up' ? L.up : todoView === 'all' ? L.open : todoView === 'done' ? L.done : L.today;
    if(todoTag) list = list.filter(function(t){ return t.tag === todoTag; });
    if(todoView !== 'done') list = list.slice().sort(todoSort);
    var tags = []; L.live.forEach(function(t){ if(t.tag && tags.indexOf(t.tag) === -1) tags.push(t.tag); });
    if(todoTag && tags.indexOf(todoTag) === -1) todoTag = '';
    // today ring + ticks over the last 7 days
    var tot = L.today.length + L.doneToday.length, dn = L.doneToday.length, pct = tot ? dn / tot : 0, C = 2 * Math.PI * 24;
    var week = [], wk = 0;
    for(var i = 6; i >= 0; i--) week.push({ day: todoDay(-i), n: 0 });
    L.live.forEach(function(t){ (t.tk || []).forEach(function(ms){ var y = todoYmd(new Date(ms)); week.forEach(function(w){ if(w.day === y){ w.n++; wk++; } }); }); });
    var wmax = Math.max.apply(null, week.map(function(w){ return w.n; }).concat([1]));
    var head = '<div class="td-head"><div><h2>Tasks</h2><p class="help">Type a task and press Enter. Tick it off 1, 2 or 3 times — once to do it, again to revise it.</p></div>' +
      '<div class="td-stats"><div class="td-ring" title="Today’s tasks done"><svg viewBox="0 0 58 58"><circle cx="29" cy="29" r="24" fill="none" stroke="var(--rule)" stroke-width="6"></circle><circle cx="29" cy="29" r="24" fill="none" stroke="var(--teal)" stroke-width="6" stroke-linecap="round" stroke-dasharray="' + (C * pct).toFixed(1) + ' ' + C.toFixed(1) + '"></circle></svg><b>' + dn + '/' + tot + '</b></div>' +
      '<div class="td-stat"><small>Done today</small><strong>' + (tot ? (dn === tot ? 'All done 🎉' : (tot - dn) + ' left') : 'Nothing planned') + '</strong></div>' +
      '<div class="td-stat"><small>' + wk + ' tick' + (wk === 1 ? '' : 's') + ' this week</small><div class="td-week" aria-hidden="true">' + week.map(function(w, j){ return '<i class="' + (w.n ? '' : 'z') + (j === 6 ? ' t' : '') + '" style="height:' + Math.max(3, Math.round(w.n / wmax * 30)) + 'px" title="' + w.day + ': ' + w.n + '"></i>'; }).join('') + '</div></div></div></div>';
    // ticks selector + input + suggestions
    var due = typeof trackDueList === 'function' ? trackDueList() : [];
    var openApps = L.open.map(function(t){ return t.app; });
    var sugg = due.filter(function(x){ return openApps.indexOf(x.id) === -1; }).slice(0, 4).map(function(x){ return '<button type="button" class="td-chipbtn due" data-td-sugg-app="' + x.id + '">+ Revise ' + escapeHtml(x.m.title) + '</button>'; }).join('');
    var quick = TODO_QUICK.filter(function(q){ return !L.open.some(function(t){ return t.t === q; }); }).map(function(q){ return '<button type="button" class="td-chipbtn" data-td-quick="' + escapeAttr(q) + '">+ ' + escapeHtml(q) + '</button>'; }).join('');
    var card = '<div class="td-card">' +
      '<div class="td-need"><span class="td-need-l">Ticks to finish</span><span class="td-seg" role="group" aria-label="Ticks needed to finish a new task">' +
        [1, 2, 3].map(function(n){ return '<button type="button" data-td-def="' + n + '" class="' + (d.def === n ? 'on' : '') + '" aria-pressed="' + (d.def === n) + '" title="' + TODO_NEED[n] + '">' + '✓'.repeat(n) + '</button>'; }).join('') +
      '</span><small>' + TODO_NEED[d.def] + '</small></div>' +
      '<div class="td-add"><input type="text" id="tdIn" placeholder="Add a task and press Enter…" aria-label="New task" maxlength="200" autocomplete="off" enterkeyhint="done"><button type="button" class="btn" data-td-addbtn>Add</button></div>' +
      '<div class="td-hint">Shortcuts: <code>#tag</code> groups it · <code>!</code> marks it important · <code>today</code>, <code>tomorrow</code> or a day like <code>friday</code> sets the date · an app name (polity, formula book…) links the app · a chapter name (HCF and LCM, cone, vitamins) or “formula book chapter 3” links that chapter.</div>' +
      (sugg ? '<div class="td-sugg"><span class="td-sugg-l">Due for revision:</span>' + sugg + '</div>' : '') +
      (quick && L.live.length < 6 ? '<div class="td-sugg"><span class="td-sugg-l">Quick add:</span>' + quick + '</div>' : '') +
    '</div>';
    var tabs = [['today', 'Today', L.today.length], ['up', 'Upcoming', L.up.length], ['all', 'All open', L.open.length], ['done', 'Done', L.done.length]];
    var filters = '<div class="td-filters" role="tablist">' + tabs.map(function(x){ return '<button type="button" role="tab" data-td-view="' + x[0] + '" class="' + (todoView === x[0] ? 'on' : '') + '" aria-selected="' + (todoView === x[0]) + '">' + x[1] + '<b>' + x[2] + '</b></button>'; }).join('') +
      tags.map(function(g){ return '<button type="button" class="td-tagf' + (todoTag === g ? ' on' : '') + '" data-td-tagf="' + escapeAttr(g) + '">#' + escapeHtml(g) + '</button>'; }).join('') + '</div>';
    var empty = { today: ['Nothing for today', 'Add a task above — it lands here.'], up: ['Nothing upcoming', 'Add “tomorrow” or a day name to a task to plan ahead.'], all: ['No open tasks', 'Everything is ticked off.'], done: ['Nothing done yet', 'Finished tasks are kept here.'] }[todoView];
    var focusId = f ? f.id : null;
    var body = list.length ? '<div class="td-list">' + list.map(function(t){ return todoItem(t, focusId); }).join('') + '</div>'
      : '<div class="td-empty"><b>' + (todoTag ? 'No #' + escapeHtml(todoTag) + ' tasks here' : empty[0]) + '</b>' + empty[1] + '</div>';
    if(todoView === 'today' && L.doneToday.length){
      var dt = todoTag ? L.doneToday.filter(function(t){ return t.tag === todoTag; }) : L.doneToday;
      if(dt.length) body += '<div class="td-donehead"><h3>Done today · ' + dt.length + '</h3></div><div class="td-list">' + dt.map(function(t){ return todoItem(t, focusId); }).join('') + '</div>';
    }
    if(todoView === 'done' && L.done.length) body = '<div class="td-donehead"><span class="help" style="margin:0;">Newest first. Tap a filled tick to undo it.</span><button type="button" class="btn ghost sm" data-td-clear>Clear done</button></div>' + body;
    var fbar = '';
    if(f){
      var ft = d.tasks.filter(function(t){ return t.id === f.id; })[0];
      fbar = '<div class="td-focus" role="status"><span class="tm" id="tdFocusTm">' + todoClock(todoFocusLeft(f)) + '</span>' +
        '<span class="tx"><b>' + escapeHtml(ft ? ft.t : 'Focus') + '</b><small>' + (f.left ? 'Paused' : 'Focus session · a tick is added when it ends') + '</small></span>' +
        '<span class="fb"><button type="button" data-td-fadj="-5" aria-label="5 minutes less">−5</button><button type="button" data-td-fadj="5" aria-label="5 minutes more">+5</button>' +
        '<button type="button" class="pri" data-td-fpause>' + (f.left ? 'Resume' : 'Pause') + '</button><button type="button" data-td-fstop>Stop</button></span></div>';
    }
    var undo = todoUndo ? '<div class="td-undo" role="status">Task deleted<button type="button" data-td-undo>Undo</button></div>' : '';
    root.innerHTML = '<div class="td">' + head + card + filters + body + fbar + '</div>' + undo;
    var inp = document.getElementById('tdIn');
    if(inp){ inp.value = keepVal; if(hadFocus){ inp.focus(); inp.setSelectionRange(keepVal.length, keepVal.length); } }
    if(todoEdit){ var et = document.getElementById('tdeT'); if(et && document.activeElement !== et){ et.focus(); et.setSelectionRange(et.value.length, et.value.length); } }
    todoPop = null;
  }
  function todoAddFromInput(){
    var inp = document.getElementById('tdIn');
    if(!inp || !inp.value.trim()) return;
    var t = todoAdd(inp.value);
    inp.value = '';
    if(!t) return;
    if(todoTag && t.tag !== todoTag) todoTag = '';
    if(todoView === 'done') todoView = 'today';
    if(todoView === 'today' && t.due > todoDay(0)) todoView = 'up';
    if(todoView === 'up' && (!t.due || t.due <= todoDay(0))) todoView = 'today';
    todoPop = t.id;
    renderTodo();
    var again = document.getElementById('tdIn'); if(again) again.focus();
  }
  function todoTicked(id, i){
    var fin = false, t = todoUpd(id, function(t){ fin = todoSetTicks(t, i < t.k ? i : i + 1); });
    if(!t) return;
    if(fin){
      todoPop = id;
      if(navigator.vibrate) try{ navigator.vibrate(30); }catch(e){}
      var left = todoLeftToday();
      showToast(left ? 'Done ' + '✓'.repeat(t.n) + ' — ' + left + ' left for today' : 'Done ' + '✓'.repeat(t.n) + ' — that’s everything for today 🎉');
      var f = todoFocusGet(); if(f && f.id === id) todoFocusSet(null);
    }
    renderTodo();
  }
  function todoDelete(id){
    todoUpd(id, function(t){ t.del = Date.now(); });
    if(todoEdit === id) todoEdit = null;
    var f = todoFocusGet(); if(f && f.id === id) todoFocusSet(null);
    if(todoUndo) clearTimeout(todoUndo.timer);
    todoUndo = { id: id, timer: setTimeout(function(){ todoUndo = null; if(isActive('tasks')) renderTodo(); }, 6000) };
    renderTodo();
  }

  // focus timer: { id, min, end (ms), left (ms remaining while paused, else 0) }
  function todoFocusGet(){ try{ return JSON.parse(lsGet(TODO_FOCUS) || 'null'); }catch(e){ return null; } }
  function todoFocusSet(f){ lsSet(TODO_FOCUS, f ? JSON.stringify(f) : null); todoFocusLoop(); }
  function todoFocusLeft(f){ return f.left ? f.left : Math.max(0, f.end - Date.now()); }
  function todoClock(ms){ var s = Math.ceil(ms / 1000); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
  function todoFocusLoop(){
    clearInterval(todoFocusTimer);
    if(!todoFocusGet()) return;
    todoFocusTimer = setInterval(todoFocusTick, 1000);
    todoFocusTick();
  }
  function todoFocusTick(){
    var f = todoFocusGet();
    if(!f){ clearInterval(todoFocusTimer); return; }
    if(!f.left && Date.now() >= f.end){ todoFocusDone(f); return; }
    var el = document.getElementById('tdFocusTm');
    if(el) el.textContent = todoClock(todoFocusLeft(f));
  }
  function todoFocusDone(f){
    lsSet(TODO_FOCUS, null);
    clearInterval(todoFocusTimer);
    var fin = false, t = todoUpd(f.id, function(t){ t.fm = (t.fm || 0) + f.min; if(!t.done) fin = todoSetTicks(t, t.k + 1); });
    try{
      var ac = new (window.AudioContext || window.webkitAudioContext)(), o = ac.createOscillator(), g = ac.createGain();
      o.frequency.value = 880; o.connect(g); g.connect(ac.destination);
      g.gain.setValueAtTime(0.18, ac.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 1.4);
      o.start(); o.stop(ac.currentTime + 1.4);
    }catch(e){}
    if(navigator.vibrate) try{ navigator.vibrate([200, 100, 200]); }catch(e){}
    showToast('Focus session done — ' + f.min + ' min' + (t ? ' on “' + t.t + '”. ' + (fin ? 'Task finished ✓' : 'Tick added ✓') : '.'));
    if(t) todoPop = t.id;
    if(isActive('tasks')) renderTodo();
  }

  (function(){
    var root = document.getElementById('todoRoot');
    if(!root) return;
    root.addEventListener('click', function(ev){
      var el = ev.target.closest('button, [data-td-edit]');
      if(!el || !root.contains(el)) return;
      var item = el.closest('[data-td-id]'), id = item ? item.dataset.tdId : null, ds = el.dataset;
      if(ds.tdDef){ var d = todoData(); d.def = +ds.tdDef; todoSave(d); renderTodo(); return; }
      if('tdAddbtn' in ds){ todoAddFromInput(); return; }
      if(ds.tdView){ todoView = ds.tdView; todoEdit = null; renderTodo(); return; }
      if(ds.tdTagf){ todoTag = todoTag === ds.tdTagf ? '' : ds.tdTagf; renderTodo(); return; }
      if(ds.tdSuggApp){ var m = STUDY[ds.tdSuggApp]; var t1 = todoAdd('Revise ' + m.title, { app: ds.tdSuggApp, due: todoDay(0) }); if(t1){ todoPop = t1.id; todoView = 'today'; } renderTodo(); return; }
      if(ds.tdQuick){ var t2 = todoAdd(ds.tdQuick); if(t2){ todoPop = t2.id; if(todoView !== 'all') todoView = 'today'; } renderTodo(); return; }
      if(ds.tdApp){ openStudy(ds.tdApp, false); return; }
      if(ds.tdLesson){ openStudy(ds.tdLesson, false, ds.tdLi); return; }
      if('tdUndo' in ds){ if(todoUndo){ var uid = todoUndo.id; clearTimeout(todoUndo.timer); todoUndo = null; todoUpd(uid, function(t){ t.del = 0; }); todoPop = uid; } renderTodo(); return; }
      if('tdClear' in ds){
        var dd = todoData(), now = Date.now(), n = 0;
        dd.tasks.forEach(function(t){ if(t.done && !t.del){ t.del = now; t.u = now; n++; } });
        if(n && confirm('Remove ' + n + ' finished task' + (n === 1 ? '' : 's') + '?')){ todoSave(dd); renderTodo(); }
        return;
      }
      if('tdFpause' in ds){ var f = todoFocusGet(); if(f){ if(f.left){ f.end = Date.now() + f.left; f.left = 0; } else f.left = Math.max(1000, f.end - Date.now()); todoFocusSet(f); renderTodo(); } return; }
      if('tdFstop' in ds){ todoFocusSet(null); renderTodo(); return; }
      if(ds.tdFadj){
        var fa = todoFocusGet(); if(!fa) return;
        var dlt = +ds.tdFadj * 60000;
        if(fa.left) fa.left = Math.max(60000, fa.left + dlt); else fa.end = Math.max(Date.now() + 60000, fa.end + dlt);
        fa.min = Math.max(1, fa.min + +ds.tdFadj);
        todoFocusSet(fa); return;
      }
      if(!id) return;
      if(ds.tdTick !== undefined){ todoTicked(id, +ds.tdTick); return; }
      if('tdStar' in ds){ todoUpd(id, function(t){ t.star = !t.star; }); renderTodo(); return; }
      if('tdFocus' in ds){
        var cur = todoFocusGet();
        if(cur && cur.id !== id && !confirm('Stop the current focus session and start this one?')) return;
        todoFocusSet({ id: id, min: TODO_MIN, end: Date.now() + TODO_MIN * 60000, left: 0 });
        renderTodo();
        var fb = root.querySelector('.td-focus'); if(fb && fb.scrollIntoView) fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        return;
      }
      if(ds.tdN){ todoUpd(id, function(t){ t.n = +ds.tdN; todoSetTicks(t, Math.min(t.k, t.n)); }); renderTodo(); return; }
      if('tdSave' in ds){ todoSaveEdit(id); return; }
      if('tdCancel' in ds){ todoEdit = null; renderTodo(); return; }
      if('tdReset' in ds){ todoUpd(id, function(t){ todoSetTicks(t, 0); }); renderTodo(); return; }
      if('tdDel' in ds){ todoDelete(id); return; }
      if('tdEdit' in ds){ if(todoEdit !== id){ todoEdit = id; renderTodo(); } return; }
    });
    root.addEventListener('keydown', function(ev){
      if(ev.target.id === 'tdIn'){
        if(ev.key === 'Enter' && !ev.isComposing){ ev.preventDefault(); todoAddFromInput(); }
        else if(ev.key === 'Escape'){ ev.target.value = ''; }
        return;
      }
      var item = ev.target.closest('[data-td-id]');
      if(item && ev.target.closest('.td-edit') && ev.target.tagName === 'INPUT'){
        if(ev.key === 'Enter'){ ev.preventDefault(); todoSaveEdit(item.dataset.tdId); }
        else if(ev.key === 'Escape'){ todoEdit = null; renderTodo(); }
      }
    });
    document.addEventListener('keydown', function(ev){
      if(ev.key !== '/' || !isActive('tasks')) return;
      var tg = ev.target.tagName;
      if(tg === 'INPUT' || tg === 'TEXTAREA' || tg === 'SELECT' || ev.target.isContentEditable) return;
      var inp = document.getElementById('tdIn'); if(inp){ ev.preventDefault(); inp.focus(); }
    });
    todoFocusLoop();
  })();
  function todoSaveEdit(id){
    var tx = (document.getElementById('tdeT') || {}).value || '';
    if(!tx.trim()){ todoDelete(id); return; }
    var due = (document.getElementById('tdeD') || {}).value || '';
    var tag = ((document.getElementById('tdeG') || {}).value || '').trim().replace(/^#/, '').replace(/\s+/g, '-').toLowerCase().slice(0, 24);
    var selA = document.getElementById('tdeA') || {}, selL = document.getElementById('tdeL') || {};
    var app = selA.value || '', les = selL.value || '';
    // the text is read again like a new task, so "#gs", "!", "friday" or an app / chapter name typed while editing still work;
    // a link you picked by hand in the boxes wins over one found in the text
    var p = todoParse(tx), hit = todoFindAppHit(p.t);
    todoUpd(id, function(t){
      t.t = p.t;
      t.due = p.due || (/^\d{4}-\d{2}-\d{2}$/.test(due) ? due : '');
      t.tag = p.tag || tag;
      if(p.star) t.star = true;
      t.app = app !== (selA.dataset ? selA.dataset.was : app) ? (STUDY[app] ? app : '') : (p.app || (STUDY[app] ? app : ''));
      if(les !== (selL.dataset ? selL.dataset.was : les)){
        var bits = les.split('|');
        todoSetLesson(t, les && STUDY[bits[0]] ? (todoLessonGet(bits[0], bits[1]) || { mod: bits[0], id: bits[1], t: t.lt }) : null);
      } else if(p.lesson) todoSetLesson(t, p.lesson);
      else if(!les) todoSetLesson(t, null);
    });
    if(!todoLessons) todoLinkLater(id);
    todoEdit = null;
    renderTodo();
  }

  // ---------------- tabs ----------------
  var tabs = document.querySelectorAll('.tab');
  var views = document.querySelectorAll('.view');
  tabs.forEach(function(tab){ tab.addEventListener('click', function(){ switchTab(tab.dataset.tab); }); });
  function switchTab(name){
    tabs.forEach(function(t){ t.classList.toggle('active', t.dataset.tab === name); });
    views.forEach(function(v){ v.classList.toggle('active', v.id === 'view-' + name); });
    refreshNavActive();
    closeAllMenus();
    document.body.classList.toggle('on-home', name === 'home');
    if(name === 'library') libraryAnimate = true;
    window.scrollTo(0, 0);
    if(name === 'library'){ renderVocabDash(); renderLibrary(); }
    if(name === 'home'){ renderHub(); refreshHubProgressSoon(); }
    if(name === 'stats'){ renderStreakPanel(); renderTracker(); renderStudyStats(); renderStats(); renderLeaderboard(); renderAllUsers(); refreshHubProgressSoon(); }
    if(name === 'review'){ renderReview(); renderSpellReview(); }
    if(name === 'quiz') renderQuizHome();
    if(name === 'roots') renderRoots();
    if(name === 'enrich') renderEnrichHome();
    if(name === 'admin') renderAdminPanel();
    if(name === 'spellbank') renderSpellBank();
    if(name === 'revision') renderRevision();
    if(name === 'tasks'){ renderTodo(); studyPull('todo').then(function(){ if(isActive('tasks')) renderTodo(); }); }
  }

  function normalizeType(t){
    if(!t) return 'other';
    var s = String(t).toLowerCase().replace(/[\s-]+/g, '_');
    if(s.indexOf('preposition') !== -1) return 'fixed_preposition';
    if(s.indexOf('idiom') !== -1) return 'idiom';
    if(s.indexOf('one_word') !== -1 || s.indexOf('one word') !== -1) return 'one_word_substitution';
    if(s.indexOf('phrasal') !== -1) return 'phrasal_verb';
    if(s.indexOf('word') !== -1) return 'word';
    return 'other';
  }

  function normalizeParsed(raw){
    return {
      term: String(raw.term).trim(),
      type: normalizeType(raw.type),
      part_of_speech: raw.part_of_speech ? String(raw.part_of_speech).trim() : '-',
      english_meaning: raw.english_meaning ? String(raw.english_meaning).trim() : '',
      hindi_meaning: raw.hindi_meaning ? String(raw.hindi_meaning).trim() : '',
      synonyms: asArray(raw.synonyms),
      antonyms: asArray(raw.antonyms),
      ssc_sentence: raw.ssc_sentence ? String(raw.ssc_sentence).trim() : '',
      mnemonic: raw.mnemonic ? String(raw.mnemonic).trim() : '',
      ssc_history: raw.ssc_history ? String(raw.ssc_history).trim() : '',
      confusable_with: (raw.confusable_with && String(raw.confusable_with).trim() !== '-') ? String(raw.confusable_with).trim() : '',
      root: (raw.root && String(raw.root).trim() !== '-') ? String(raw.root).trim() : '',
      spelling_trap: raw.spelling_trap === true || raw.spelling_trap === 'true',
      spelling_note: (raw.spelling_note && String(raw.spelling_note).trim() !== '-') ? String(raw.spelling_note).trim() : '',
      origin: raw.origin ? String(raw.origin).trim() : '-'
    };
  }

  function buildEntryData(norm, tag){
    return {
      term: norm.term, type: norm.type, part_of_speech: norm.part_of_speech,
      english_meaning: norm.english_meaning, hindi_meaning: norm.hindi_meaning,
      synonyms: norm.synonyms, antonyms: norm.antonyms, ssc_sentence: norm.ssc_sentence,
      mnemonic: norm.mnemonic, ssc_history: norm.ssc_history || '',
      confusable_with: norm.confusable_with || '', root: norm.root || '',
      spelling_trap: !!norm.spelling_trap, spelling_note: norm.spelling_note || '',
      origin: norm.origin,
      tags: tag ? [tag] : (norm.tags || []),
      authorUid: currentUser.uid,
      authorName: currentUser.displayName || currentUser.email,
      authorEmail: currentUser.email,
      enrichedAt: firebase.firestore.FieldValue.serverTimestamp(),
      enrichVersion: ENRICH_VERSION,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
  }

  // ---------------- add-mode toggle (vocabulary vs spelling-only) ----------------
  document.getElementById('addModeVocabBtn').addEventListener('click', function(){
    document.getElementById('addModeVocab').style.display = 'block';
    document.getElementById('addModeSpell').style.display = 'none';
    document.getElementById('addModeVocabBtn').className = 'btn teal sm';
    document.getElementById('addModeSpellBtn').className = 'btn ghost sm';
  });
  document.getElementById('addModeSpellBtn').addEventListener('click', function(){
    document.getElementById('addModeVocab').style.display = 'none';
    document.getElementById('addModeSpell').style.display = 'block';
    document.getElementById('addModeVocabBtn').className = 'btn ghost sm';
    document.getElementById('addModeSpellBtn').className = 'btn teal sm';
  });

  // ---------------- prompt generation ----------------
  var lastPrompt = '';
  document.getElementById('generatePromptBtn').addEventListener('click', function(){
    var raw = document.getElementById('wordListInput').value.trim();
    if(!raw){ showToast('Paste at least one word first.'); return; }
    var wordsList = raw.split(/\r?\n|,/).map(function(w){ return w.trim(); }).filter(Boolean);
    if(wordsList.length === 0){ showToast('Paste at least one word first.'); return; }

    var listBlock = wordsList.map(function(w, i){ return (i+1) + '. ' + w; }).join('\n');

    lastPrompt = [
'You are helping a student preparing for the SSC CGL exam build a vocabulary database.',
'For each term in the list below, identify what kind of item it is, then give exam-focused details.',
'',
rootsPromptHint(document.getElementById('batchRootInput').value.trim()),
'Terms:',
listBlock,
'',
'Return ONLY a valid JSON array — no markdown code fences, no explanation before or after it.',
'Each element must be an object with exactly these fields:',
'{',
'  "term": string (the word/phrase exactly as given),',
'  "type": one of "word", "idiom", "one_word_substitution", "phrasal_verb", "fixed_preposition", "other" (use "fixed_preposition" for a word that must be followed by a particular preposition, e.g. "averse to", "abide by", "comply with" - write the term together with its preposition, make the ssc_sentence use that exact preposition, and use the mnemonic to say which preposition is correct and which wrong one SSC usually offers as a trap),',
'  "part_of_speech": string (e.g. "noun", "verb", "adjective"; use "-" if not applicable),',
'  "english_meaning": string (clear, concise English definition),',
'  "hindi_meaning": string (Hindi meaning, in Devanagari script),',
'  "synonyms": array of strings (2-5 synonyms; empty array if none apply),',
'  "antonyms": array of strings (2-5 antonyms; empty array if none apply),',
'  "ssc_sentence": string (one example sentence in the style of an SSC exam question, using the term),',
'  "mnemonic": string (a short trick or mnemonic to remember the meaning),',
'  "ssc_history": string (how frequently and in what way this term tends to appear in SSC exams - e.g. common in Cloze Test, Error Spotting, One Word Substitution, or Synonym-Antonym sections; roughly how often such terms come up; how a typical question uses it. Describe the general pattern honestly - do not invent specific exam dates, years, or fake direct quotations from past papers. If this is not a well-documented exam pattern, say so plainly instead of guessing.),',
'  "confusable_with": string (a single other real word commonly confused with this one, e.g. "Affect" -> "Effect", "Complement" -> "Compliment"; use "-" if there is no well-known confusable counterpart),',
'  "root": string (a shared Latin/Greek/other root that helps connect this word to others, stated as "root = meaning", e.g. "greg = flock/herd" for gregarious, "acu = sharp" for acumen; mainly applies to type "word" entries; use "-" if none is genuinely useful or applicable),',
'  "spelling_trap": boolean (true if this term is commonly featured in SSC "spot the misspelled word" / spelling-correction questions, or if test-takers frequently misspell it; false otherwise),',
'  "spelling_note": string (if spelling_trap is true, briefly note the common misspelling and how to avoid it, e.g. "often misspelled as \'existance\' - remember it ends in -ence"; use "-" if spelling_trap is false),',
'  "origin": string (etymology or origin, especially for idioms/phrases; use "-" if not relevant)',
'}',
'',
'Output only the JSON array.'
    ].join('\n');

    document.getElementById('promptPreview').textContent = lastPrompt;
    document.getElementById('promptPanel').style.display = 'block';
    document.getElementById('promptPanel').scrollIntoView({behavior:'smooth', block:'start'});
  });

  async function copyPromptToClipboard(){
    try{ await navigator.clipboard.writeText(lastPrompt); return true; }
    catch(e){
      var ta = document.createElement('textarea');
      ta.value = lastPrompt; document.body.appendChild(ta); ta.select();
      var ok = false;
      try{ ok = document.execCommand('copy'); }catch(e2){}
      document.body.removeChild(ta);
      return ok;
    }
  }

  document.getElementById('copyPromptBtn').addEventListener('click', async function(){
    await copyPromptToClipboard();
    var note = document.getElementById('copyNote');
    note.style.display = 'inline';
    setTimeout(function(){ note.style.display = 'none'; }, 2000);
  });

  document.getElementById('openChatGPTBtn').addEventListener('click', async function(){
    await copyPromptToClipboard();
    showToast('Prompt copied — paste it (Ctrl+V) into ChatGPT.');
    window.open('https://chatgpt.com/', '_blank');
  });
  document.getElementById('openGeminiBtn').addEventListener('click', async function(){
    await copyPromptToClipboard();
    showToast('Prompt copied — paste it (Ctrl+V) into Gemini.');
    window.open('https://gemini.google.com/app', '_blank');
  });

  // ---------------- parsing + review staging ----------------
  function extractJson(text){
    var t = text.trim();
    t = t.replace(/```json/gi, '```').replace(/```/g, '');
    t = t.trim();
    var start = t.indexOf('[');
    var end = t.lastIndexOf(']');
    if(start !== -1 && end !== -1 && end > start){ t = t.slice(start, end + 1); }
    return JSON.parse(t);
  }

  document.getElementById('parseBtn').addEventListener('click', function(){
    var statusEl = document.getElementById('parseStatus');
    var raw = document.getElementById('responseInput').value;
    if(!raw.trim()){ statusEl.style.color = 'var(--maroon)'; statusEl.textContent = 'Paste the AI response first.'; return; }

    var parsed;
    try{
      parsed = extractJson(raw);
      if(!Array.isArray(parsed)) throw new Error('not an array');
    }catch(e){
      statusEl.style.color = 'var(--maroon)';
      statusEl.textContent = "Couldn't read that as JSON. Check the reply is a JSON array and try again.";
      return;
    }

    var valid = parsed.filter(function(item){ return item && item.term; });
    if(valid.length === 0){ statusEl.style.color = 'var(--maroon)'; statusEl.textContent = 'No usable entries found in that response.'; return; }

    var existingKeys = {};
    words.forEach(function(w){ existingKeys[w.term.toLowerCase()+'|'+w.type] = true; });
    var seenBatch = {};
    pendingReview = valid.map(function(raw){
      var norm = normalizeParsed(raw);
      var key = norm.term.toLowerCase() + '|' + norm.type;
      var isDup = !!existingKeys[key];
      var batchDup = !!seenBatch[key];
      seenBatch[key] = true;
      return { data: norm, isDup: isDup, batchDup: batchDup, include: !(isDup || batchDup) };
    });
    statusEl.textContent = '';
    renderStagePanel();
  });

  function renderStagePanel(){
    var wrap = document.getElementById('stagePanel');
    if(pendingReview.length === 0){ wrap.style.display = 'none'; wrap.innerHTML=''; return; }
    var dupCount = pendingReview.filter(function(i){ return i.isDup || i.batchDup; }).length;
    wrap.style.display = 'block';
    wrap.innerHTML =
      '<h2><span class="step-badge">4</span>Review before adding</h2>' +
      '<p class="help">'+pendingReview.length+' term'+(pendingReview.length===1?'':'s')+' found'+(dupCount ? ', '+dupCount+' already in the library (unchecked below — tick to add anyway)' : '')+'. Uncheck anything you don\'t want.</p>' +
      '<div class="grid" id="stageGrid">' + pendingReview.map(stageItemHtml).join('') + '</div>' +
      '<div class="row-actions">' +
        '<button class="btn ghost" id="stageCancel">Cancel</button>' +
        '<button class="btn maroon" id="stageConfirm">'+(isModeratorUser ? 'Add selected to library' : 'Submit selected for approval')+'</button>' +
      '</div>';
    wrap.querySelectorAll('[data-stage-toggle]').forEach(function(cb){
      cb.addEventListener('change', function(){ pendingReview[+cb.dataset.stageToggle].include = cb.checked; });
    });
    document.getElementById('stageCancel').addEventListener('click', function(){
      pendingReview = []; renderStagePanel();
    });
    document.getElementById('stageConfirm').addEventListener('click', confirmStagedAdd);
    wrap.scrollIntoView({behavior:'smooth', block:'start'});
  }

  function stageItemHtml(item, idx){
    var d = item.data;
    return '<div class="stage-item"><label>' +
      '<input type="checkbox" data-stage-toggle="'+idx+'" '+(item.include?'checked':'')+'>' +
      '<div style="flex:1;">' +
        '<div class="vcard-top"><div class="term" style="font-size:16px;">'+escapeHtml(d.term)+'</div><span class="badge '+d.type+'">'+TYPE_LABELS[d.type]+'</span></div>' +
        '<div class="meaning-en" style="margin-top:6px; font-size:13px;">'+escapeHtml(d.english_meaning||'')+'</div>' +
        ((item.isDup || item.batchDup) ? '<div class="dup-flag">'+(item.isDup ? 'Already in the library' : 'Repeated in this batch')+'</div>' : '') +
      '</div>' +
    '</label></div>';
  }

  async function confirmStagedAdd(){
    var selected = pendingReview.filter(function(i){ return i.include; });
    if(selected.length === 0){ showToast('Nothing selected.'); return; }
    var tag = document.getElementById('batchTagInput').value.trim();
    var batchRoot = document.getElementById('batchRootInput').value.trim();
    try{
      var targetCollection = isModeratorUser ? db.collection('words') : db.collection('submissions');
      var batch = db.batch();
      selected.forEach(function(item){
        var ref = targetCollection.doc();
        var entry = buildEntryData(item.data, tag);
        if(batchRoot) entry.root = mergeRoot(entry.root, batchRoot);
        batch.set(ref, entry);
      });
      await batch.commit();
      logActivity(isModeratorUser ? 'words_added' : 'words_submitted', {count: selected.length});
      showToast(selected.length + ' term' + (selected.length===1?'':'s') + (isModeratorUser ? ' added to the library.' : ' submitted for approval.'));
      pendingReview = [];
      renderStagePanel();
      document.getElementById('responseInput').value = '';
      setTimeout(function(){ switchTab(isModeratorUser ? 'library' : 'review'); }, 600);
    }catch(e){ showToast('Could not save: ' + e.message); }
  }

  // ================= SPELLING BANK (separate word list, spelling-only) =================
  var lastSpellPrompt = '';
  var spellPendingReview = [];

  function stripLeadingNumberSB(s){ return s.replace(/^\d+[\.\)]\s*/, '').trim(); }
  function stripTrailingParenSB(s){ return s.replace(/\s*\([^)]*\)\s*$/, '').trim(); }
  function bareTermSB(s){ return stripTrailingParenSB(stripLeadingNumberSB(String(s).trim())); }

  document.getElementById('generateSpellPromptBtn').addEventListener('click', function(){
    var raw = document.getElementById('spellWordListInput').value.trim();
    if(!raw){ showToast('Paste at least one word first.'); return; }
    var wordsList = raw.split(/\r?\n|,/).map(function(w){ return w.trim(); }).filter(Boolean);
    if(wordsList.length === 0){ showToast('Paste at least one word first.'); return; }
    var listBlock = wordsList.map(function(w,i){ return (i+1) + '. ' + w; }).join('\n');

    lastSpellPrompt = [
'You are helping build a spelling-practice bank for someone preparing for the SSC CGL exam. The focus is spelling, plus a short meaning in English and Hindi so each word is easy to recall. Do NOT add synonyms, sentences or anything else besides what is asked for.',
'',
'Words:',
listBlock,
'',
'Return ONLY a valid JSON array — no markdown code fences, no explanation before or after it.',
'Each element must be an object with exactly these fields:',
'{',
'  "term": string (the bare word only, exactly as given above, no leading number),',
'  "correct_spelling": string (the confirmed correct spelling - normally identical to the term; if the term as given is itself misspelled, put the correct form here instead),',
'  "common_mistakes": array of strings (1-3 commonly seen incorrect spellings of this word - the kind used as wrong options in SSC spelling-correction questions),',
'  "trick": string (a short, memorable trick or mnemonic specifically for spelling this word correctly - e.g. a silent letter, a double letter, or a tricky vowel to watch for),',
'  "english_meaning": string (a short, simple English meaning - one line),',
'  "hindi_meaning": string (the meaning in Hindi, in Devanagari script - one short line)',
'}',
'',
'Output only the JSON array.'
    ].join('\n');

    document.getElementById('spellPromptPreview').textContent = lastSpellPrompt;
    document.getElementById('spellPromptPanel').style.display = 'block';
    document.getElementById('spellPromptPanel').scrollIntoView({behavior:'smooth', block:'start'});
  });

  document.getElementById('copySpellPromptBtn').addEventListener('click', async function(){
    await copyTextToClipboard(lastSpellPrompt);
    var note = document.getElementById('spellCopyNote');
    note.style.display = 'inline';
    setTimeout(function(){ note.style.display = 'none'; }, 2000);
  });
  document.getElementById('openSpellChatGPTBtn').addEventListener('click', async function(){
    await copyTextToClipboard(lastSpellPrompt);
    showToast('Prompt copied — paste it (Ctrl+V) into ChatGPT.');
    window.open('https://chatgpt.com/', '_blank');
  });
  document.getElementById('openSpellGeminiBtn').addEventListener('click', async function(){
    await copyTextToClipboard(lastSpellPrompt);
    showToast('Prompt copied — paste it (Ctrl+V) into Gemini.');
    window.open('https://gemini.google.com/app', '_blank');
  });

  document.getElementById('parseSpellBtn').addEventListener('click', function(){
    var statusEl = document.getElementById('spellParseStatus');
    var raw = document.getElementById('spellResponseInput').value;
    if(!raw.trim()){ statusEl.style.color = 'var(--maroon)'; statusEl.textContent = 'Paste the AI response first.'; return; }
    var parsed;
    try{
      parsed = extractJson(raw);
      if(!Array.isArray(parsed)) throw new Error('not an array');
    }catch(e){
      statusEl.style.color = 'var(--maroon)';
      statusEl.textContent = "Couldn't read that as JSON. Check the reply is a JSON array and try again.";
      return;
    }
    var valid = parsed.filter(function(item){ return item && item.term; });
    if(valid.length === 0){ statusEl.style.color = 'var(--maroon)'; statusEl.textContent = 'No usable entries found in that response.'; return; }

    var existingKeys = {};
    spellWords.forEach(function(w){ existingKeys[w.term.toLowerCase()] = true; });
    var seenBatch = {};
    spellPendingReview = valid.map(function(item){
      var term = bareTermSB(item.term);
      var norm = {
        term: term,
        correct_spelling: item.correct_spelling ? bareTermSB(item.correct_spelling) : term,
        common_mistakes: asArray(item.common_mistakes),
        trick: item.trick ? String(item.trick).trim() : '',
        english_meaning: cleanMeaningSB(item.english_meaning),
        hindi_meaning: cleanMeaningSB(item.hindi_meaning)
      };
      var key = norm.term.toLowerCase();
      var isDup = !!existingKeys[key];
      var batchDup = !!seenBatch[key];
      seenBatch[key] = true;
      return { data: norm, isDup: isDup, batchDup: batchDup, include: !(isDup || batchDup) };
    });
    statusEl.textContent = '';
    renderSpellStagePanel();
  });

  function renderSpellStagePanel(){
    var wrap = document.getElementById('spellStagePanel');
    if(spellPendingReview.length === 0){ wrap.style.display = 'none'; wrap.innerHTML=''; return; }
    var dupCount = spellPendingReview.filter(function(i){ return i.isDup || i.batchDup; }).length;
    wrap.style.display = 'block';
    wrap.innerHTML =
      '<h2><span class="step-badge">4</span>Review before adding</h2>' +
      '<p class="help">'+spellPendingReview.length+' word'+(spellPendingReview.length===1?'':'s')+' found'+(dupCount ? ', '+dupCount+' already in the Spelling Bank (unchecked below)' : '')+'.</p>' +
      '<div class="grid" id="spellStageGrid">' + spellPendingReview.map(spellStageItemHtml).join('') + '</div>' +
      '<div class="row-actions">' +
        '<button class="btn ghost" id="spellStageCancel">Cancel</button>' +
        '<button class="btn maroon" id="spellStageConfirm">'+(isModeratorUser ? 'Add selected to Spelling Bank' : 'Submit selected for approval')+'</button>' +
      '</div>';
    wrap.querySelectorAll('[data-spell-stage-toggle]').forEach(function(cb){
      cb.addEventListener('change', function(){ spellPendingReview[+cb.dataset.spellStageToggle].include = cb.checked; });
    });
    document.getElementById('spellStageCancel').addEventListener('click', function(){ spellPendingReview = []; renderSpellStagePanel(); });
    document.getElementById('spellStageConfirm').addEventListener('click', confirmSpellStagedAdd);
    wrap.scrollIntoView({behavior:'smooth', block:'start'});
  }

  function spellStageItemHtml(item, idx){
    var d = item.data;
    return '<div class="stage-item"><label>' +
      '<input type="checkbox" data-spell-stage-toggle="'+idx+'" '+(item.include?'checked':'')+'>' +
      '<div style="flex:1;">' +
        '<div class="term" style="font-size:16px;">'+escapeHtml(d.term)+'</div>' +
        (d.english_meaning || d.hindi_meaning ? '<div class="pending-meta">'+escapeHtml([d.english_meaning, d.hindi_meaning].filter(Boolean).join(' · '))+'</div>' : '') +
        (d.common_mistakes.length ? '<div class="pending-meta">Common mistakes: '+escapeHtml(d.common_mistakes.join(', '))+'</div>' : '') +
        ((item.isDup || item.batchDup) ? '<div class="dup-flag">'+(item.isDup ? 'Already in the Spelling Bank' : 'Repeated in this batch')+'</div>' : '') +
      '</div>' +
    '</label></div>';
  }

  function buildSpellEntryData(norm, tag){
    return {
      term: norm.term,
      correct_spelling: norm.correct_spelling || norm.term,
      common_mistakes: norm.common_mistakes || [],
      trick: norm.trick || '',
      english_meaning: norm.english_meaning || '',
      hindi_meaning: norm.hindi_meaning || '',
      tags: tag ? [tag] : (norm.tags || []),
      authorUid: currentUser.uid,
      authorName: currentUser.displayName || currentUser.email,
      authorEmail: currentUser.email,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
  }

  async function confirmSpellStagedAdd(){
    var selected = spellPendingReview.filter(function(i){ return i.include; });
    if(selected.length === 0){ showToast('Nothing selected.'); return; }
    var tag = document.getElementById('spellBatchTagInput').value.trim();
    try{
      var targetCollection = isModeratorUser ? db.collection('spellwords') : db.collection('spellSubmissions');
      var batch = db.batch();
      selected.forEach(function(item){
        var ref = targetCollection.doc();
        batch.set(ref, buildSpellEntryData(item.data, tag));
      });
      await batch.commit();
      logActivity(isModeratorUser ? 'spellwords_added' : 'spellwords_submitted', {count: selected.length});
      showToast(selected.length + ' word' + (selected.length===1?'':'s') + (isModeratorUser ? ' added to the Spelling Bank.' : ' submitted for approval.'));
      spellPendingReview = [];
      renderSpellStagePanel();
      document.getElementById('spellResponseInput').value = '';
      setTimeout(function(){ switchTab(isModeratorUser ? 'spellbank' : 'review'); }, 600);
    }catch(e){ showToast('Could not save: ' + e.message); }
  }

  // ---------------- spelling bank: grid ----------------
  function allSpellTags(){
    var set = {};
    spellWords.forEach(function(w){ (w.tags||[]).forEach(function(t){ set[t] = true; }); });
    return Object.keys(set).sort();
  }
  function refreshSpellTagFilter(){
    var sel = document.getElementById('spellTagFilter');
    var current = sel.value;
    var tags = allSpellTags();
    sel.innerHTML = '<option value="all">All tags</option>' + tags.map(function(t){ return '<option value="'+escapeAttr(t)+'">'+escapeHtml(t)+'</option>'; }).join('');
    if(tags.indexOf(current) !== -1) sel.value = current;
  }
  function getFilteredSpellWords(){
    var q = document.getElementById('spellSearchBox').value.trim().toLowerCase();
    var tag = document.getElementById('spellTagFilter').value;
    return spellWords.filter(function(w){
      if(q && (w.term + ' ' + (w.english_meaning || '') + ' ' + (w.hindi_meaning || '')).toLowerCase().indexOf(q) === -1) return false;
      if(tag !== 'all' && (w.tags||[]).indexOf(tag) === -1) return false;
      return true;
    });
  }
  document.getElementById('spellSearchBox').addEventListener('input', renderSpellBank);
  document.getElementById('spellTagFilter').addEventListener('change', renderSpellBank);

  function renderSpellBank(){
    refreshSpellTagFilter();
    var grid = document.getElementById('spellBankGrid');
    var countEl = document.getElementById('spellBankResultCount');
    if(spellWords.length === 0){
      countEl.textContent = '';
      grid.innerHTML = emptyStateHtml('Spelling Bank is empty', 'Head to "Add words" → "Spelling-only words" to build your first prompt.');
      return;
    }
    renderSpellMeaningNote();
    var list = getFilteredSpellWords();
    countEl.textContent = list.length + ' word' + (list.length===1?'':'s') + (list.length !== spellWords.length ? ' matching your filters' : ' in the Spelling Bank');
    if(list.length === 0){ grid.innerHTML = emptyStateHtml('No matches', 'Try clearing a filter or search term.'); return; }
    grid.innerHTML = list.map(spellCardHtml).join('');
    grid.querySelectorAll('[data-spell-action]').forEach(function(btn){
      btn.addEventListener('click', function(ev){ ev.stopPropagation(); handleSpellCardAction(btn.dataset.spellAction, btn.dataset.id); });
    });
  }

  function cleanMeaningSB(v){ var t = v ? String(v).trim() : ''; return (t === '-' ? '' : t); }
  function spellMissingMeaning(){ return spellWords.filter(function(w){ return !w.english_meaning || !w.hindi_meaning; }); }
  function renderSpellMeaningNote(){
    var el = document.getElementById('spellMeaningNote');
    if(!el) return;
    var n = isModeratorUser ? spellMissingMeaning().length : 0;
    if(!n){ el.style.display = 'none'; el.innerHTML = ''; return; }
    el.style.display = 'block';
    el.innerHTML = n + ' spelling word' + (n === 1 ? ' has' : 's have') + ' no English / Hindi meaning yet. <button class="btn ghost sm" id="spellFillMeaningBtn">Add meanings with AI</button>';
    document.getElementById('spellFillMeaningBtn').addEventListener('click', openSpellMeaningModal);
  }
  function spellMeaningPrompt(list){
    return [
'For each word below (used in SSC CGL spelling practice), give a short meaning in English and in Hindi.',
'',
'Words:',
list.map(function(w, i){ return (i + 1) + '. ' + w.term; }).join('\n'),
'',
'Return ONLY a valid JSON array — no markdown code fences, no explanation before or after it.',
'Each element must be an object with exactly these fields:',
'{',
'  "term": string (the word exactly as given above, no leading number),',
'  "english_meaning": string (a short, simple English meaning - one line),',
'  "hindi_meaning": string (the meaning in Hindi, in Devanagari script - one short line)',
'}',
'',
'Output only the JSON array.'
    ].join('\n');
  }
  function openSpellMeaningModal(){
    var list = spellMissingMeaning().slice(0, 60);
    if(!list.length){ showToast('Every spelling word already has a meaning.'); return; }
    var prompt = spellMeaningPrompt(list);
    var total = spellMissingMeaning().length;
    modalBodyRef().innerHTML = '<h3>Add meanings to spelling words</h3>' +
      '<p class="help" style="margin-top:0;">1. Copy this prompt for ' + list.length + ' word' + (list.length === 1 ? '' : 's') + (total > list.length ? ' (the first ' + list.length + ' of ' + total + ' — repeat for the rest)' : '') + ' and send it to ChatGPT or Gemini.</p>' +
      '<pre class="prompt-preview" style="max-height:160px;">' + escapeHtml(prompt) + '</pre>' +
      '<div class="row-actions"><button class="btn teal sm" id="smCopy">Copy prompt</button><button class="btn ghost sm" id="smGpt">Open ChatGPT</button><button class="btn ghost sm" id="smGem">Open Gemini</button></div>' +
      '<p class="help">2. Paste the AI\'s reply here:</p>' +
      '<textarea id="smReply" style="min-height:110px;" placeholder="[ { &quot;term&quot;: ... } ]"></textarea>' +
      '<div id="smStatus" class="help"></div>' +
      '<div class="modal-actions"><button class="btn ghost" id="smClose">Close</button><button class="btn teal" id="smApply">Save meanings</button></div>';
    modalBgRef().classList.add('open');
    var close = function(){ modalBgRef().classList.remove('open'); modalBodyRef().innerHTML = ''; };
    document.getElementById('smClose').addEventListener('click', close);
    document.getElementById('smCopy').addEventListener('click', async function(){ await copyTextToClipboard(prompt); showToast('Prompt copied.'); });
    document.getElementById('smGpt').addEventListener('click', async function(){ await copyTextToClipboard(prompt); showToast('Prompt copied — paste it into ChatGPT.'); window.open('https://chatgpt.com/', '_blank'); });
    document.getElementById('smGem').addEventListener('click', async function(){ await copyTextToClipboard(prompt); showToast('Prompt copied — paste it into Gemini.'); window.open('https://gemini.google.com/app', '_blank'); });
    document.getElementById('smApply').addEventListener('click', async function(){
      var st = document.getElementById('smStatus');
      var parsed;
      try{ parsed = extractJson(document.getElementById('smReply').value); if(!Array.isArray(parsed)) throw new Error('x'); }
      catch(e){ st.style.color = 'var(--maroon)'; st.textContent = "Couldn't read that as JSON — paste the whole reply."; return; }
      var byKey = {};
      spellWords.forEach(function(w){ byKey[w.term.trim().toLowerCase()] = w; });
      var batch = db.batch(), n = 0;
      parsed.forEach(function(item){
        if(!item || !item.term) return;
        var w = byKey[bareTermSB(item.term).toLowerCase()];
        if(!w) return;
        var upd = {};
        var en = cleanMeaningSB(item.english_meaning), hi = cleanMeaningSB(item.hindi_meaning);
        if(en && !w.english_meaning) upd.english_meaning = en;
        if(hi && !w.hindi_meaning) upd.hindi_meaning = hi;
        if(Object.keys(upd).length){ batch.update(db.collection('spellwords').doc(w.id), upd); n++; }
      });
      if(!n){ st.style.color = 'var(--maroon)'; st.textContent = 'No matching words found in that reply.'; return; }
      try{
        await batch.commit();
        showToast('Added meanings to ' + n + ' word' + (n === 1 ? '' : 's') + '.');
        close();
        if(spellMissingMeaning().length) setTimeout(openSpellMeaningModal, 400);
      }catch(e){ st.style.color = 'var(--maroon)'; st.textContent = 'Could not save: ' + e.message; }
    });
  }

  function spellCardHtml(w){
    return '<div class="vcard" data-id="'+w.id+'">' +
      '<div class="vcard-top">' +
        '<div><div class="term">'+escapeHtml(w.term)+' <button class="iconbtn" data-spell-action="speak" data-id="'+w.id+'" title="Listen" style="font-size:14px; vertical-align:middle;">🔊</button></div></div>' +
      '</div>' +
      (w.english_meaning ? '<div class="meaning-en">'+escapeHtml(w.english_meaning)+'</div>' : '') +
      fieldBox('fb-hindi','hindi', w.hindi_meaning) +
      (w.tags && w.tags.length ? '<div class="tagrow">'+w.tags.map(function(t){return '<span class="chip">'+escapeHtml(t)+'</span>';}).join('')+'</div>' : '') +
      (w.common_mistakes && w.common_mistakes.length ? fieldBox('fb-anto','common mistakes', w.common_mistakes.join(', ')) : '') +
      fieldBox('fb-trick','trick', w.trick) +
      (w.authorName ? '<div class="meta-line">Added by '+escapeHtml(w.authorName)+'</div>' : '') +
      '<div class="vcard-controls">' +
        (isModeratorUser ? '<button class="iconbtn" data-spell-action="edit" data-id="'+w.id+'" title="Edit">✎</button><button class="iconbtn" data-spell-action="delete" data-id="'+w.id+'" title="Delete">🗑</button>' : '') +
      '</div>' +
    '</div>';
  }

  function handleSpellCardAction(action, id){
    var w = spellWords.find(function(x){ return x.id === id; });
    if(!w) return;
    if(action === 'speak'){ speakText(w.term); }
    else if(action === 'edit' && isModeratorUser){ openSpellEditModal(id); }
    else if(action === 'delete' && isModeratorUser){ openSpellConfirmDelete(id); }
  }

  function spellEntryFormHtml(w){
    w = w || {term:'', correct_spelling:'', common_mistakes:[], trick:'', english_meaning:'', hindi_meaning:'', tags:[]};
    return '' +
      '<div class="field"><label class="field-label">Term</label><input type="text" id="sf_term" value="'+escapeAttr(w.term)+'"></div>' +
      '<div class="field"><label class="field-label">Correct spelling (usually same as term)</label><input type="text" id="sf_correct" value="'+escapeAttr(w.correct_spelling||w.term||'')+'"></div>' +
      '<div class="field"><label class="field-label">English meaning</label><input type="text" id="sf_en" value="'+escapeAttr(w.english_meaning||'')+'"></div>' +
      '<div class="field"><label class="field-label">Hindi meaning</label><input type="text" id="sf_hi" value="'+escapeAttr(w.hindi_meaning||'')+'"></div>' +
      '<div class="field"><label class="field-label">Common mistakes (comma separated)</label><input type="text" id="sf_mistakes" value="'+escapeAttr((w.common_mistakes||[]).join(', '))+'"></div>' +
      '<div class="field"><label class="field-label">Trick / mnemonic</label><textarea id="sf_trick" style="min-height:55px;">'+escapeHtml(w.trick||'')+'</textarea></div>' +
      '<div class="field"><label class="field-label">Tags (comma separated)</label><input type="text" id="sf_tags" value="'+escapeAttr((w.tags||[]).join(', '))+'"></div>';
  }
  function readSpellForm(){
    return {
      term: document.getElementById('sf_term').value.trim(),
      correct_spelling: document.getElementById('sf_correct').value.trim(),
      common_mistakes: asArray(document.getElementById('sf_mistakes').value),
      trick: document.getElementById('sf_trick').value.trim(),
      english_meaning: document.getElementById('sf_en').value.trim(),
      hindi_meaning: document.getElementById('sf_hi').value.trim(),
      tags: asArray(document.getElementById('sf_tags').value)
    };
  }

  document.getElementById('addSpellManualBtn').addEventListener('click', function(){
    modalBodyRef().innerHTML = '<h3>'+(isModeratorUser?'Add a spelling word manually':'Submit a spelling word manually')+'</h3>' + spellEntryFormHtml() +
      '<div class="modal-actions"><button class="btn ghost" id="cancelEdit">Cancel</button><button class="btn teal" id="saveEdit">'+(isModeratorUser?'Add':'Submit')+'</button></div>';
    modalBgRef().classList.add('open');
    document.getElementById('cancelEdit').addEventListener('click', function(){ modalBgRef().classList.remove('open'); modalBodyRef().innerHTML=''; });
    document.getElementById('saveEdit').addEventListener('click', async function(){
      var data = readSpellForm();
      if(!data.term){ showToast('Term cannot be empty.'); return; }
      try{
        var entryData = buildSpellEntryData(data, null);
        entryData.tags = data.tags;
        var target = isModeratorUser ? db.collection('spellwords') : db.collection('spellSubmissions');
        await target.add(entryData);
        logActivity(isModeratorUser ? 'spellwords_added' : 'spellwords_submitted', {term: data.term});
        showToast(isModeratorUser ? 'Added.' : 'Submitted for approval.');
        modalBgRef().classList.remove('open'); modalBodyRef().innerHTML='';
      }catch(err){ showToast('Could not save: ' + err.message); }
    });
  });

  function openSpellEditModal(id){
    var w = spellWords.find(function(x){ return x.id === id; });
    if(!w) return;
    modalBodyRef().innerHTML = '<h3>Edit spelling entry</h3>' + spellEntryFormHtml(w) +
      '<div class="modal-actions"><button class="btn ghost" id="cancelEdit">Cancel</button><button class="btn teal" id="saveEdit">Save</button></div>';
    modalBgRef().classList.add('open');
    document.getElementById('cancelEdit').addEventListener('click', function(){ modalBgRef().classList.remove('open'); modalBodyRef().innerHTML=''; });
    document.getElementById('saveEdit').addEventListener('click', async function(){
      var data = readSpellForm();
      if(!data.term){ showToast('Term cannot be empty.'); return; }
      try{
        await db.collection('spellwords').doc(id).update(data);
        modalBgRef().classList.remove('open'); modalBodyRef().innerHTML='';
      }catch(err){ showToast('Could not save: ' + err.message); }
    });
  }

  function openSpellConfirmDelete(id){
    var w = spellWords.find(function(x){ return x.id === id; });
    if(!w) return;
    modalBodyRef().innerHTML = '<h3>Delete "'+escapeHtml(w.term)+'"?</h3><p class="help">This removes it from the Spelling Bank for everyone.</p>' +
      '<div class="modal-actions"><button class="btn ghost" id="cancelDel">Cancel</button><button class="btn maroon" id="confirmDel">Delete</button></div>';
    modalBgRef().classList.add('open');
    document.getElementById('cancelDel').addEventListener('click', function(){ modalBgRef().classList.remove('open'); modalBodyRef().innerHTML=''; });
    document.getElementById('confirmDel').addEventListener('click', async function(){
      try{ await db.collection('spellwords').doc(id).delete(); modalBgRef().classList.remove('open'); modalBodyRef().innerHTML=''; }
      catch(err){ showToast('Could not delete: ' + err.message); }
    });
  }

  // ---------------- spelling bank: review (approve/reject) ----------------
  function renderSpellReview(){
    document.getElementById('reviewSpellAdmin').style.display = isModeratorUser ? 'block' : 'none';
    document.getElementById('reviewSpellSelf').style.display = isModeratorUser ? 'none' : 'block';
    if(isModeratorUser){
      var bar = document.getElementById('bulkSpellReviewBar');
      var list = document.getElementById('reviewSpellList');
      bar.style.display = spellSubmissions.length ? 'flex' : 'none';
      var selectAll = document.getElementById('bulkSpellSelectAll');
      if(selectAll) selectAll.checked = false;
      if(spellSubmissions.length === 0){ list.innerHTML = emptyStateHtml('Nothing pending', 'Spelling-bank submissions from other signed-in users will show up here.'); return; }
      list.innerHTML = spellSubmissions.map(spellPendingCardHtml).join('');
      list.querySelectorAll('[data-spell-approve]').forEach(function(b){ b.addEventListener('click', function(){ approveSpellSubmission(b.dataset.spellApprove); }); });
      list.querySelectorAll('[data-spell-reject]').forEach(function(b){ b.addEventListener('click', function(){ rejectSpellSubmission(b.dataset.spellReject); }); });
    } else {
      var mine = document.getElementById('mySpellSubmissionsList');
      if(spellSubmissions.length === 0){ mine.innerHTML = emptyStateHtml('Nothing pending', 'Spelling words you submit will show up here until approved.'); return; }
      mine.innerHTML = spellSubmissions.map(function(s){
        return '<div class="pending-card"><strong>'+escapeHtml(s.term)+'</strong>' +
          '<div class="pending-meta">Awaiting review'+(s.tags&&s.tags.length?' · '+escapeHtml(s.tags.join(', ')):'')+'</div>' +
          '<div style="margin-top:8px;"><button class="btn ghost sm" data-spell-withdraw="'+s.id+'">Withdraw</button></div></div>';
      }).join('');
      mine.querySelectorAll('[data-spell-withdraw]').forEach(function(b){ b.addEventListener('click', function(){ withdrawSpellSubmission(b.dataset.spellWithdraw); }); });
    }
  }

  document.getElementById('bulkSpellSelectAll').addEventListener('change', function(){
    var checked = document.getElementById('bulkSpellSelectAll').checked;
    document.querySelectorAll('.bulk-spell-check').forEach(function(cb){ cb.checked = checked; });
  });
  document.getElementById('bulkSpellApproveBtn').addEventListener('click', function(){
    var ids = Array.from(document.querySelectorAll('.bulk-spell-check:checked')).map(function(cb){ return cb.dataset.bulkSpellId; });
    if(ids.length === 0){ showToast('Select at least one.'); return; }
    bulkSpellApprove(ids);
  });
  document.getElementById('bulkSpellRejectBtn').addEventListener('click', function(){
    var ids = Array.from(document.querySelectorAll('.bulk-spell-check:checked')).map(function(cb){ return cb.dataset.bulkSpellId; });
    if(ids.length === 0){ showToast('Select at least one.'); return; }
    bulkSpellReject(ids);
  });

  function spellPendingCardHtml(s){
    return '<div class="pending-card">' +
      '<label style="display:flex; gap:8px; align-items:flex-start; cursor:pointer;">' +
        '<input type="checkbox" class="bulk-spell-check" data-bulk-spell-id="'+s.id+'" style="margin-top:4px; width:18px; height:18px; flex-shrink:0;">' +
        '<div style="flex:1;">' +
          '<div class="term" style="font-size:15px;">'+escapeHtml(s.term)+'</div>' +
          (s.english_meaning || s.hindi_meaning ? '<div class="pending-meta">'+escapeHtml([s.english_meaning, s.hindi_meaning].filter(Boolean).join(' · '))+'</div>' : '') +
          (s.common_mistakes && s.common_mistakes.length ? '<div class="pending-meta">Common mistakes: '+escapeHtml(s.common_mistakes.join(', '))+'</div>' : '') +
          '<div class="pending-meta">Submitted by '+escapeHtml(s.authorName||s.authorEmail||'someone')+(s.tags&&s.tags.length?' · '+escapeHtml(s.tags.join(', ')):'')+'</div>' +
        '</div>' +
      '</label>' +
      '<div class="row-actions" style="margin-top:10px;">' +
        '<button class="btn maroon sm" data-spell-reject="'+s.id+'">Reject</button>' +
        '<button class="btn teal sm" data-spell-approve="'+s.id+'">Approve</button>' +
      '</div></div>';
  }

  async function approveSpellSubmission(id){
    var s = spellSubmissions.find(function(x){ return x.id === id; });
    if(!s) return;
    var data = Object.assign({}, s); delete data.id;
    try{
      var batch = db.batch();
      batch.set(db.collection('spellwords').doc(), data);
      batch.delete(db.collection('spellSubmissions').doc(id));
      await batch.commit();
      logActivity('spellword_approved', {term: s.term});
      showToast('Approved "'+s.term+'".');
    }catch(e){ showToast('Could not approve: ' + e.message); }
  }
  async function rejectSpellSubmission(id){
    var s = spellSubmissions.find(function(x){ return x.id === id; });
    try{
      await db.collection('spellSubmissions').doc(id).delete();
      logActivity('spellword_rejected', {term: s ? s.term : ''});
      showToast('Rejected.');
    }catch(e){ showToast('Could not reject: ' + e.message); }
  }
  async function withdrawSpellSubmission(id){
    try{ await db.collection('spellSubmissions').doc(id).delete(); showToast('Withdrawn.'); }
    catch(e){ showToast('Could not withdraw: ' + e.message); }
  }
  async function bulkSpellApprove(ids){
    try{
      for(var c = 0; c < chunkArr(ids, 100).length; c++){
        var group = chunkArr(ids, 100)[c];
        var batch = db.batch();
        group.forEach(function(id){
          var s = spellSubmissions.find(function(x){ return x.id === id; });
          if(!s) return;
          var data = Object.assign({}, s); delete data.id;
          batch.set(db.collection('spellwords').doc(), data);
          batch.delete(db.collection('spellSubmissions').doc(id));
        });
        await batch.commit();
      }
      logActivity('spellwords_approved', {count: ids.length});
      showToast(ids.length + ' word' + (ids.length===1?'':'s') + ' approved.');
    }catch(e){ showToast('Could not approve: ' + e.message); }
  }
  async function bulkSpellReject(ids){
    try{
      for(var c = 0; c < chunkArr(ids, 100).length; c++){
        var group = chunkArr(ids, 100)[c];
        var batch = db.batch();
        group.forEach(function(id){ batch.delete(db.collection('spellSubmissions').doc(id)); });
        await batch.commit();
      }
      logActivity('spellwords_rejected', {count: ids.length});
      showToast(ids.length + ' rejected.');
    }catch(e){ showToast('Could not reject: ' + e.message); }
  }

  // ---------------- spelling bank: practice quiz (own dedicated state) ----------------
  var sbQuizQueue = [];
  var sbQuizIdx = 0;
  var sbQuizScore = 0;
  var sbQuizAnswered = false;
  var sbQuizResults = [];

  function backToSpellBankHome(){
    document.getElementById('spellBankQuizArea').innerHTML = '';
    document.getElementById('spellBankHome').style.display = 'block';
  }

  document.getElementById('startSpellBankTypeBtn').addEventListener('click', function(){
    if(spellWords.length === 0){ showToast('Spelling Bank is empty — add some words first.'); return; }
    sbQuizQueue = shuffleArr(spellWords.slice());
    sbQuizIdx = 0; sbQuizScore = 0; sbQuizResults = [];
    document.getElementById('spellBankHome').style.display = 'none';
    renderSpellBankTypeQuestion();
  });
  function renderSpellBankTypeQuestion(){
    var area = document.getElementById('spellBankQuizArea');
    if(sbQuizIdx >= sbQuizQueue.length){ showSpellBankSummary(); return; }
    var w = sbQuizQueue[sbQuizIdx];
    var correctSpelling = w.correct_spelling || w.term;
    sbQuizAnswered = false;
    area.innerHTML =
      '<div class="quiz-wrap">' +
        '<div class="quiz-progress">Word '+(sbQuizIdx+1)+' / '+sbQuizQueue.length+' · Score '+sbQuizScore+'</div>' +
        '<div class="quiz-question-card">' +
          '<div class="quiz-prompt">Listen, then type what you hear.</div>' +
          '<button class="btn teal" id="sbPlayBtn" style="margin-bottom:16px;">🔊 Play word</button><br>' +
          '<input type="text" id="sbInput" placeholder="Type the word…" style="max-width:280px; text-align:center; font-size:17px; padding:12px; margin:0 auto; display:block;" autocomplete="off" autocapitalize="off" spellcheck="false">' +
          '<div class="row-actions" style="justify-content:center; margin-top:14px;"><button class="btn maroon" id="sbSubmitBtn">Check</button></div>' +
        '</div>' +
        '<div class="quiz-actions"><button class="btn ghost" id="sbExitBtn">Exit</button><button class="btn teal" id="sbNextBtn" style="display:none;">Next →</button></div>' +
      '</div>';
    document.getElementById('sbPlayBtn').addEventListener('click', function(){ speakText(correctSpelling); });
    speakText(correctSpelling);
    document.getElementById('sbInput').addEventListener('keydown', function(ev){ if(ev.key === 'Enter'){ document.getElementById('sbSubmitBtn').click(); } });
    document.getElementById('sbSubmitBtn').addEventListener('click', function(){
      if(sbQuizAnswered) return;
      sbQuizAnswered = true;
      var val = document.getElementById('sbInput').value.trim();
      var correct = val.toLowerCase() === correctSpelling.toLowerCase();
      sbQuizResults.push({term: w.term, correct: correct});
      if(correct) sbQuizScore++;
      document.getElementById('sbInput').disabled = true;
      document.getElementById('sbSubmitBtn').disabled = true;
      var fb = document.createElement('div');
      fb.style.marginTop = '12px'; fb.style.fontWeight = '600';
      fb.style.color = correct ? 'var(--teal-deep)' : 'var(--maroon)';
      fb.textContent = correct ? 'Correct!' : ('Correct spelling: ' + correctSpelling);
      document.querySelector('.quiz-question-card').appendChild(fb);
      document.getElementById('sbNextBtn').style.display = 'inline-flex';
    });
    document.getElementById('sbExitBtn').addEventListener('click', backToSpellBankHome);
    document.getElementById('sbNextBtn').addEventListener('click', function(){ sbQuizIdx++; renderSpellBankTypeQuestion(); });
  }

  document.getElementById('startSpellBankCorrectBtn').addEventListener('click', function(){
    if(spellWords.length === 0){ showToast('Spelling Bank is empty — add some words first.'); return; }
    sbQuizQueue = shuffleArr(spellWords.slice());
    sbQuizIdx = 0; sbQuizScore = 0; sbQuizResults = [];
    document.getElementById('spellBankHome').style.display = 'none';
    renderSpellBankCorrectQuestion();
  });
  function renderSpellBankCorrectQuestion(){
    var area = document.getElementById('spellBankQuizArea');
    if(sbQuizIdx >= sbQuizQueue.length){ showSpellBankSummary(); return; }
    var w = sbQuizQueue[sbQuizIdx];
    var correctSpelling = w.correct_spelling || w.term;
    var wrongs = (w.common_mistakes || []).slice(0, 3);
    var guard = 0;
    while(wrongs.length < 3 && guard < 30){
      guard++;
      var variant = generateMisspelling(correctSpelling);
      if(wrongs.indexOf(variant) === -1 && variant.toLowerCase() !== correctSpelling.toLowerCase()) wrongs.push(variant);
    }
    wrongs = wrongs.slice(0, 3);
    var options = shuffleArr([correctSpelling].concat(wrongs));
    sbQuizAnswered = false;
    area.innerHTML =
      '<div class="quiz-wrap">' +
        '<div class="quiz-progress">Word '+(sbQuizIdx+1)+' / '+sbQuizQueue.length+' · Score '+sbQuizScore+'</div>' +
        '<div class="quiz-question-card">' +
          '<div class="quiz-prompt">Which is the correct spelling?</div>' +
          '<button class="btn teal" id="sbPlayBtn" style="margin-bottom:16px;">🔊 Play word</button>' +
          '<div class="quiz-options" id="sbOptions">' +
            options.map(function(opt){ return '<button class="quiz-option" data-opt="'+escapeAttr(opt)+'">'+escapeHtml(opt)+'</button>'; }).join('') +
          '</div>' +
        '</div>' +
        '<div class="quiz-actions"><button class="btn ghost" id="sbExitBtn">Exit</button><button class="btn teal" id="sbNextBtn" style="display:none;">Next →</button></div>' +
      '</div>';
    document.getElementById('sbPlayBtn').addEventListener('click', function(){ speakText(correctSpelling); });
    speakText(correctSpelling);
    document.querySelectorAll('#sbOptions .quiz-option').forEach(function(btn){
      btn.addEventListener('click', function(){
        if(sbQuizAnswered) return;
        sbQuizAnswered = true;
        var correct = btn.dataset.opt === correctSpelling;
        document.querySelectorAll('#sbOptions .quiz-option').forEach(function(b2){
          b2.disabled = true;
          if(b2.dataset.opt === correctSpelling) b2.classList.add('correct');
          else if(b2 === btn) b2.classList.add('wrong');
        });
        sbQuizResults.push({term: w.term, correct: correct});
        if(correct) sbQuizScore++;
        document.getElementById('sbNextBtn').style.display = 'inline-flex';
      });
    });
    document.getElementById('sbExitBtn').addEventListener('click', backToSpellBankHome);
    document.getElementById('sbNextBtn').addEventListener('click', function(){ sbQuizIdx++; renderSpellBankCorrectQuestion(); });
  }

  document.getElementById('startSpellBankSpotBtn').addEventListener('click', function(){
    if(spellWords.length < 4){ showToast('Need at least 4 words in the Spelling Bank.'); return; }
    sbQuizQueue = shuffleArr(spellWords.slice());
    sbQuizIdx = 0; sbQuizScore = 0; sbQuizResults = [];
    document.getElementById('spellBankHome').style.display = 'none';
    renderSpellBankSpotQuestion();
  });
  function renderSpellBankSpotQuestion(){
    var area = document.getElementById('spellBankQuizArea');
    var remaining = sbQuizQueue.length - sbQuizIdx;
    if(remaining < 4){ showSpellBankSummary(); return; }
    var group = sbQuizQueue.slice(sbQuizIdx, sbQuizIdx+4);
    var wrongIdx = Math.floor(Math.random()*4);
    var options = group.map(function(w,i){
      var correctSpelling = w.correct_spelling || w.term;
      return i===wrongIdx ? generateMisspelling(correctSpelling) : correctSpelling;
    });
    sbQuizAnswered = false;
    area.innerHTML =
      '<div class="quiz-wrap">' +
        '<div class="quiz-progress">Round '+(Math.floor(sbQuizIdx/4)+1)+' · Score '+sbQuizScore+'</div>' +
        '<div class="quiz-question-card">' +
          '<div class="quiz-prompt">Which one is misspelled?</div>' +
          '<div class="quiz-options" id="sbOptions">' +
            options.map(function(opt){ return '<button class="quiz-option" data-opt="'+escapeAttr(opt)+'">'+escapeHtml(opt)+'</button>'; }).join('') +
          '</div>' +
        '</div>' +
        '<div class="quiz-actions"><button class="btn ghost" id="sbExitBtn">Exit</button><button class="btn teal" id="sbNextBtn" style="display:none;">Next round →</button></div>' +
      '</div>';
    document.querySelectorAll('#sbOptions .quiz-option').forEach(function(btn, idx){
      btn.addEventListener('click', function(){
        if(sbQuizAnswered) return;
        sbQuizAnswered = true;
        var pickedRight = (idx === wrongIdx);
        document.querySelectorAll('#sbOptions .quiz-option').forEach(function(b2, i2){
          b2.disabled = true;
          if(i2 === wrongIdx) b2.classList.add(pickedRight ? 'correct' : 'wrong');
        });
        sbQuizResults.push({term: group[wrongIdx].term, correct: pickedRight});
        if(pickedRight) sbQuizScore++;
        document.getElementById('sbNextBtn').style.display = 'inline-flex';
      });
    });
    document.getElementById('sbExitBtn').addEventListener('click', backToSpellBankHome);
    document.getElementById('sbNextBtn').addEventListener('click', function(){ sbQuizIdx += 4; renderSpellBankSpotQuestion(); });
  }

  function showSpellBankSummary(){
    var area = document.getElementById('spellBankQuizArea');
    var total = sbQuizResults.length;
    var correctCount = sbQuizResults.filter(function(r){ return r.correct; }).length;
    var pct = total ? Math.round(correctCount/total*100) : 0;
    var missed = sbQuizResults.filter(function(r){ return !r.correct; }).map(function(r){ return r.term; });
    var grade = pct >= 90 ? 'Excellent!' : pct >= 75 ? 'Great job!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!';
    var shareText = 'I scored ' + correctCount + '/' + total + ' (' + pct + '%) on my Spelling Bank quiz — ' + grade;
    area.innerHTML =
      '<div class="quiz-wrap"><div class="report-card">' +
        '<div class="report-score">'+pct+'%</div>' +
        '<div class="report-sub">'+correctCount+' / '+total+' correct — '+grade+'</div>' +
        (missed.length
          ? '<div class="report-missed"><div class="fb-label" style="margin-bottom:8px;">words to revisit</div>' + missed.map(function(t){ return '<span class="chip">'+escapeHtml(t)+'</span>'; }).join(' ') + '</div>'
          : '<p class="help">Perfect run — nothing to revisit!</p>') +
        '<div class="row-actions" style="justify-content:center; margin-top:18px;">' +
          '<button class="btn teal" id="sbShareBtn">Share result</button>' +
          '<button class="btn ghost" id="sbBackBtn">Back to Spelling Bank</button>' +
        '</div>' +
      '</div></div>';
    document.getElementById('sbBackBtn').addEventListener('click', backToSpellBankHome);
    document.getElementById('sbShareBtn').addEventListener('click', async function(){
      if(navigator.share){ try{ await navigator.share({ title: 'Spelling Bank', text: shareText }); }catch(e){} }
      else { await copyTextToClipboard(shareText); showToast('Result copied — paste it anywhere to share.'); }
    });
  }

  // ---------------- library rendering ----------------
  var searchBox = document.getElementById('searchBox');
  var filterType = document.getElementById('filterType');
  var filterTag = document.getElementById('filterTag');
  var filterStatus = document.getElementById('filterStatus');
  var sortBy = document.getElementById('sortBy');
  var filterRoot = document.getElementById('filterRoot');
  var libraryAnimate = true;
  var libraryAnimatingRender = false;
  var libraryAnimateUntil = 0;
  var lastConfSet = null;
  var LIB_PAGE = 36;
  var libraryShown = LIB_PAGE;
  var libraryList = [];
  var libraryGridEl = document.getElementById('libraryGrid');
  var libraryMoreEl = document.getElementById('libraryMore');
  var searchTimer = null;
  searchBox.addEventListener('input', function(){
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function(){ libraryShown = LIB_PAGE; renderLibrary(); }, 140);
  });

  function sameExceptCounters(a, b){
    var keys = {};
    Object.keys(a).concat(Object.keys(b)).forEach(function(k){ keys[k] = 1; });
    delete keys.confLevels; delete keys.id;
    return Object.keys(keys).every(function(k){ return JSON.stringify(a[k]) === JSON.stringify(b[k]); });
  }
  function entryFor(id){
    var w = words.find(function(x){ return x.id === id; });
    if(!w) return null;
    var p = progressMap[id] || {};
    return Object.assign({}, w, { confidence: p.confidence || 0, starred: !!p.starred });
  }
  function libraryPatchable(){ return isActive('library') && filterStatus.value === 'all' && sortBy.value !== 'conf_low'; }
  function patchCard(id){
    var el = libraryGridEl.querySelector('.vcard[data-id="' + id + '"]');
    var e = entryFor(id);
    if(!el || !e) return;
    var tmp = document.createElement('div');
    tmp.innerHTML = cardHtml(e, 999);
    var fresh = tmp.firstElementChild;
    if(!fresh) return;
    fresh.style.animation = 'none';
    el.parentNode.replaceChild(fresh, el);
  }
  function updateLibraryMore(){
    var left = libraryList.length - libraryShown;
    libraryMoreEl.innerHTML = left > 0 ? '<button class="btn ghost" id="libraryMoreBtn">Show ' + Math.min(LIB_PAGE, left) + ' more · ' + left + ' left</button>' : '';
  }
  function appendLibraryPage(){
    if(libraryShown >= libraryList.length) return;
    var next = libraryList.slice(libraryShown, libraryShown + LIB_PAGE);
    libraryShown += next.length;
    libraryGridEl.insertAdjacentHTML('beforeend', next.map(function(e){ return cardHtml(e, 999); }).join(''));
    updateLibraryMore();
  }
  libraryMoreEl.addEventListener('click', function(ev){ if(ev.target.closest && ev.target.closest('#libraryMoreBtn')) appendLibraryPage(); });
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting && isActive('library')) appendLibraryPage(); });
    }, { rootMargin: '700px 0px' }).observe(libraryMoreEl);
  }

  // one click handler for every card (instead of wiring hundreds of buttons on each redraw)
  libraryGridEl.addEventListener('click', function(ev){
    var t = ev.target;
    if(!t || !t.closest) return;
    var act = t.closest('[data-action]');
    if(act){ handleCardAction(act.dataset.action, act.dataset.id); return; }
    var dot = t.closest('.conf-dot');
    if(dot){ setProgress(dot.dataset.confId, {confidence: +dot.dataset.level}); return; }
    var card = t.closest('.vcard');
    if(!card) return;
    var id = card.dataset.id;
    if(coverModeOn && !coverRevealed[id]){ coverRevealed[id] = true; markVisited(id); patchCard(id); return; }
    markVisited(id);
  });
  [filterType, filterTag, filterStatus, sortBy, filterRoot].forEach(function(el){
    el.addEventListener('change', function(){ libraryAnimate = true; renderLibrary(); });
  });

  // ---------------- roots: parsing, filter, prompt hint, tag -> root ----------------
  function splitRootParts(rootStr){
    return String(rootStr || '').split(/\s*[;|]\s*/).map(function(p){ return p.trim(); }).filter(function(p){ return p && p !== '-'; });
  }
  function rootKeyOfPart(part){
    var head = String(part).split(/\s*(?:=|:|·|—|–|\s-\s|\()\s*/)[0];
    return head.toLowerCase().replace(/[^a-z\u00c0-\u024f]+/g, '');
  }
  var rootKeysCache = {};
  function rootKeysOf(rootStr){
    var src = String(rootStr || '');
    if(rootKeysCache[src]) return rootKeysCache[src];
    var keys = [];
    splitRootParts(src).forEach(function(p){ var k = rootKeyOfPart(p); if(k && keys.indexOf(k) === -1) keys.push(k); });
    rootKeysCache[src] = keys;
    return keys;
  }
  function allRootsMap(){
    var map = {};
    words.forEach(function(w){
      splitRootParts(w.root).forEach(function(p){
        var k = rootKeyOfPart(p);
        if(!k) return;
        if(!map[k]) map[k] = { key: k, label: p, count: 0 };
        map[k].count++;
      });
    });
    return map;
  }
  function mergeRoot(existing, addition){
    addition = String(addition || '').trim();
    existing = (existing && existing !== '-') ? existing : '';
    if(!addition) return existing;
    var have = rootKeysOf(existing);
    var extra = splitRootParts(addition).filter(function(p){ var k = rootKeyOfPart(p); return k && have.indexOf(k) === -1; });
    if(extra.length === 0) return existing;
    return (existing ? existing + '; ' : '') + extra.join('; ');
  }
  // ---------------- curated root groups (admin-created only) ----------------
  var KNOWN_ROOT_MEANINGS = { phobia:'fear', phobe:'one who fears', phile:'lover of', philia:'love of', philo:'love', logy:'study of', ology:'study of', logist:'one who studies', cide:'killing', cracy:'rule / government', crat:'ruler', archy:'rule by', graphy:'writing / description', graph:'writing', gram:'something written', mania:'madness / obsession', maniac:'one obsessed with', meter:'measure', scope:'instrument for viewing', pathy:'feeling / disease', path:'one who feels / suffers', phone:'sound', phony:'sound', gamy:'marriage', vore:'eater', phage:'eater', theism:'belief in god', anthrop:'human', bio:'life', chron:'time', geo:'earth', hydro:'water', morph:'form / shape', nym:'name', onym:'name', pod:'foot', ped:'foot / child', greg:'flock / herd', cred:'believe', dict:'say', duc:'lead', port:'carry', scrib:'write', script:'write', spect:'look', vert:'turn', vid:'see', vis:'see' };
  function groupLabel(g){ return g.key + (g.meaning ? ' = ' + g.meaning : ''); }
  function groupWords(key){ return words.filter(function(w){ return rootKeysOf(w.root).indexOf(key) !== -1; }); }
  function refreshRootFilter(){
    var current = filterRoot.value;
    filterRoot.innerHTML = '<option value="all">All root groups</option>' + rootGroups.map(function(g){ return '<option value="'+escapeAttr(g.key)+'">'+escapeHtml(groupLabel(g))+' ('+groupWords(g.key).length+')</option>'; }).join('');
    var keys = rootGroups.map(function(g){ return g.key; });
    if(keys.indexOf(current) !== -1) filterRoot.value = current;
    filterRoot.style.display = rootGroups.length ? '' : 'none';
    var dl = document.getElementById('rootDatalist');
    if(dl) dl.innerHTML = rootGroups.map(function(g){ return '<option value="'+escapeAttr(groupLabel(g))+'"></option>'; }).join('');
  }
  function rootsPromptHint(batchRoot){
    var labels = rootGroups.map(groupLabel);
    var lines = [];
    if(batchRoot){ lines.push('All of these terms share the root "' + batchRoot + '" - put exactly this text in each term\'s "root" field (add a second root after a semicolon only if one genuinely applies).'); }
    if(labels.length){ lines.push('Root groups in this register: ' + labels.join('; ') + '. If a term belongs to one of these groups, include that root in its "root" field using exactly this wording (after a semicolon if the term also has another root).'); }
    return lines.length ? lines.join('\n') + '\n' : '';
  }
  function tagKey(t){ return String(t || '').toLowerCase().replace(/[^a-z\u00c0-\u024f]+/g, ''); }
  function renderRootBanner(){
    var box = document.getElementById('rootBanner');
    var rt = filterRoot.value;
    if(!isAdminUser || rt === 'all'){ box.innerHTML = ''; return; }
    var grp = rootGroups.find(function(g){ return g.key === rt; });
    var label = grp ? groupLabel(grp) : rt;
    var tagName = allTags().find(function(t){ return tagKey(t) === rt; });
    if(!tagName){ box.innerHTML = ''; return; }
    var lacking = words.filter(function(w){ return (w.tags||[]).indexOf(tagName) !== -1 && rootKeysOf(w.root).indexOf(rt) === -1; });
    if(lacking.length === 0){ box.innerHTML = ''; return; }
    box.innerHTML = '<div class="root-banner"><div class="rb-text"><b>' + lacking.length + ' more word' + (lacking.length === 1 ? ' is' : 's are') + ' tagged “' + escapeHtml(tagName) + '” but ' + (lacking.length === 1 ? "doesn't" : "don't") + ' carry this root yet.</b> Move them to the root so they group here automatically.</div>' +
      '<button class="btn sm" id="rootBannerMove">Move tag to root</button><button class="btn ghost sm" id="rootBannerMoveRemove">Move and remove tag</button></div>';
    document.getElementById('rootBannerMove').addEventListener('click', function(){ migrateTagToRoot(tagName, label, false); });
    document.getElementById('rootBannerMoveRemove').addEventListener('click', function(){ migrateTagToRoot(tagName, label, true); });
  }
  async function migrateTagToRoot(tag, rootValue, removeTag){
    if(!isModeratorUser){ showToast('Only moderators can do this.'); return; }
    rootValue = String(rootValue || '').trim();
    if(!tag || !rootValue){ showToast('Pick a tag and enter a root.'); return; }
    var affected = words.filter(function(w){ return (w.tags||[]).indexOf(tag) !== -1; });
    if(affected.length === 0){ showToast('No words have that tag.'); return; }
    try{
      var changed = 0;
      for(var i = 0; i < affected.length; i += 300){
        var batch = db.batch();
        var any = false;
        affected.slice(i, i + 300).forEach(function(w){
          var upd = {};
          var merged = mergeRoot(w.root, rootValue);
          if(merged !== (w.root || '')) upd.root = merged;
          if(removeTag) upd.tags = (w.tags || []).filter(function(t){ return t !== tag; });
          if(Object.keys(upd).length){ batch.update(db.collection('words').doc(w.id), upd); any = true; changed++; }
        });
        if(any) await batch.commit();
      }
      logActivity('tag_to_root', {term: tag + ' → ' + rootValue, count: changed});
      showToast('Moved ' + changed + ' word' + (changed === 1 ? '' : 's') + ' from tag “' + tag + '” to root ' + rootValue + (removeTag ? ' (tag removed).' : '.'));
    }catch(e){ showToast('Could not move: ' + e.message); }
  }

  function allTags(){
    var set = {};
    words.forEach(function(e){ (e.tags||[]).forEach(function(t){ set[t] = true; }); });
    return Object.keys(set).sort();
  }
  function refreshTagFilter(){
    var current = filterTag.value;
    var tags = allTags();
    filterTag.innerHTML = '<option value="all">All tags</option>' +
      tags.map(function(t){ return '<option value="'+escapeAttr(t)+'">'+escapeHtml(t)+'</option>'; }).join('');
    if(tags.indexOf(current) !== -1) filterTag.value = current;
  }

  function getFiltered(){
    var q = searchBox.value.trim().toLowerCase();
    var ty = filterType.value, tg = filterTag.value, st = filterStatus.value, rt = filterRoot.value;
    var list = viewEntries().filter(function(e){
      if(q && e.term.toLowerCase().indexOf(q) === -1 && String(e.root||'').toLowerCase().indexOf(q) === -1 && String(e.english_meaning||'').toLowerCase().indexOf(q) === -1) return false;
      if(rt !== 'all' && rootKeysOf(e.root).indexOf(rt) === -1) return false;
      if(ty !== 'all' && e.type !== ty) return false;
      if(tg !== 'all' && (e.tags||[]).indexOf(tg) === -1) return false;
      if(st === '0' && e.confidence !== 0) return false;
      if(st === 'learning' && (e.confidence < 1 || e.confidence > 4)) return false;
      if(st === '5' && e.confidence !== 5) return false;
      return true;
    });
    if(sortBy.value === 'new') list.sort(function(a,b){ return tsMillis(b.createdAt) - tsMillis(a.createdAt); });
    if(sortBy.value === 'old') list.sort(function(a,b){ return tsMillis(a.createdAt) - tsMillis(b.createdAt); });
    if(sortBy.value === 'az') list.sort(function(a,b){ return a.term.localeCompare(b.term); });
    if(sortBy.value === 'conf_low') list.sort(function(a,b){ return a.confidence - b.confidence; });
    return list;
  }

  function renderLibrary(){
    refreshTagFilter();
    refreshRootFilter();
    renderRootBanner();
    var grid = document.getElementById('libraryGrid');
    var countEl = document.getElementById('libraryResultCount');
    if(words.length === 0){
      countEl.textContent = '';
      grid.style.display = 'block';
      grid.innerHTML = emptyStateHtml('Your register is empty', 'Head to "Add words" to build your first prompt, or add one manually above.');
      libraryList = []; libraryMoreEl.innerHTML = '';
      return;
    }
    var list = getFiltered();
    var filtersActive = !!(searchBox.value.trim() || filterType.value !== 'all' || filterTag.value !== 'all' || filterStatus.value !== 'all' || filterRoot.value !== 'all');
    countEl.textContent = list.length + ' word' + (list.length===1?'':'s') + (filtersActive ? ' matching your filters' : ' in your library');
    if(list.length === 0){
      grid.style.display = 'block';
      grid.innerHTML = emptyStateHtml('No matches', 'Try clearing a filter or search term.');
      libraryList = []; libraryMoreEl.innerHTML = '';
      return;
    }
    grid.style.display = 'grid';
    if(libraryAnimate){ libraryAnimateUntil = Date.now() + 700; libraryShown = LIB_PAGE; }
    var animateNow = libraryAnimate || Date.now() < libraryAnimateUntil;
    libraryAnimate = false;
    libraryList = list;
    libraryShown = Math.max(LIB_PAGE, Math.min(libraryShown, list.length));
    grid.classList.toggle('animate-in', animateNow);
    libraryAnimatingRender = animateNow;
    grid.innerHTML = list.slice(0, libraryShown).map(cardHtml).join('');
    libraryAnimatingRender = false;
    updateLibraryMore();
  }

  function confDotsHtml(id, level){
    var dots = '';
    for(var i=1;i<=5;i++){
      dots += '<button class="conf-dot '+(i<=level?'filled':'')+'" data-conf-id="'+id+'" data-level="'+i+'" title="Set to level '+i+'" aria-label="Set confidence to level '+i+'">'+i+'</button>';
    }
    var lvCls = level >= 5 ? ' mastered' : (level >= 3 ? ' lv-mid' : (level >= 1 ? ' lv-low' : ''));
    var just = (lastConfSet && lastConfSet.id === id && Date.now() - lastConfSet.t < 1500) ? ' just-set' : '';
    return '<div class="conf-dots'+lvCls+just+'">'+dots+'</div>';
  }
  function confLabel(level){
    if(level >= 5) return 'Memorized';
    if(level === 0) return 'Not started';
    return 'Level ' + level + '/5';
  }

  function fieldBox(cls, label, content){
    if(!content) return '';
    return '<div class="field-box '+cls+'"><div class="fb-label">'+escapeHtml(label)+'</div><div>'+escapeHtml(content)+'</div></div>';
  }

  var coverModeOn = false;
  var coverRevealed = {};
  document.getElementById('coverModeBtn').addEventListener('click', function(){
    coverModeOn = !coverModeOn;
    coverRevealed = {};
    document.getElementById('coverModeBtn').textContent = coverModeOn ? '🙈 Cover mode: On' : '🙈 Cover mode: Off';
    document.getElementById('coverModeNote').style.display = coverModeOn ? 'block' : 'none';
    renderLibrary();
  });

  function cardHtml(e, idx){
    var revealed = !coverModeOn || !!coverRevealed[e.id];
    var synAnto = (e.synonyms&&e.synonyms.length) || (e.antonyms&&e.antonyms.length) ? (
      '<div class="fb-row2">' +
        fieldBox('fb-syn','synonyms', e.synonyms&&e.synonyms.length?e.synonyms.join(', '):'') +
        fieldBox('fb-anto','antonyms', e.antonyms&&e.antonyms.length?e.antonyms.join(', '):'') +
      '</div>'
    ) : '';
    var detailsHtml = revealed ? (
      '<div class="meaning-en">'+escapeHtml(e.english_meaning||'')+'</div>' +
      fieldBox('fb-hindi','hindi', e.hindi_meaning) +
      synAnto +
      fieldBox('fb-sentence','ssc-style sentence', e.ssc_sentence) +
      fieldBox('fb-trick','trick / mnemonic', e.mnemonic) +
      fieldBox('fb-history','ssc exam history', e.ssc_history) +
      fieldBox('fb-confusable','often confused with', e.confusable_with) +
      fieldBox('fb-root','root', e.root) +
      fieldBox('fb-spelltrap','spelling note', e.spelling_note) +
      (e.type==='idiom' ? fieldBox('fb-origin','origin', e.origin) : '')
    ) : '<div style="text-align:center; color:var(--ink-faint); font-size:13px; font-style:italic; padding:16px 0;">Tap to reveal</div>';
    return '' +
    '<div class="vcard conf-'+e.confidence+'" data-id="'+e.id+'"'+(libraryAnimatingRender && idx < 30 ? ' style="animation-delay:'+(idx*45)+'ms"' : '')+'>' +
      '<div class="vcard-top">' +
        '<div><div class="term">'+escapeHtml(e.term)+' <button class="iconbtn" data-action="speak" data-id="'+e.id+'" title="Listen" style="font-size:14px; vertical-align:middle;">🔊</button></div><div class="pos">'+escapeHtml(e.part_of_speech||'-')+'</div></div>' +
        '<span class="badge '+e.type+'">'+TYPE_LABELS[e.type]+'</span>' +
      '</div>' +
      (e.tags && e.tags.length || e.spelling_trap ? '<div class="tagrow">' +
        (e.spelling_trap ? '<span class="chip spelltrap-chip">✎ spelling trap</span>' : '') +
        (e.tags||[]).map(function(t){return '<span class="chip">'+escapeHtml(t)+'</span>';}).join('') +
      '</div>' : '') +
      detailsHtml +
      (revealed && e.authorName ? '<div class="meta-line">Added by '+escapeHtml(e.authorName)+'</div>' : '') +
      '<div class="conf-row"><span class="conf-label">'+confLabel(e.confidence)+'</span>'+confDotsHtml(e.id, e.confidence)+'</div>' +
      '<div class="vcard-controls">' +
        '<button class="iconbtn '+(e.starred?'on':'')+'" data-action="star" data-id="'+e.id+'" title="Star">'+(e.starred?'★':'☆')+'</button>' +
        (isModeratorUser ? '<button class="iconbtn" data-action="edit" data-id="'+e.id+'" title="Edit">✎</button><button class="iconbtn" data-action="delete" data-id="'+e.id+'" title="Delete">🗑</button>' : '') +
      '</div>' +
    '</div>';
  }


  function setProgress(id, patch, opts){
    if(!currentUser) return Promise.resolve();
    var hadRecord = !!(progressMap[id] && typeof progressMap[id].confidence === 'number');
    var prevLevel = hadRecord ? progressMap[id].confidence : null;
    if(typeof patch.confidence === 'number'){
      if(patch.confidence >= 5 && prevLevel !== 5){
        var nowMs = Date.now();
        patch = Object.assign({}, patch, { memorizedAt: nowMs, revStage: 0, revDue: nowMs + REV_ROUNDS[0].days * DAY_MS, revDone: false });
      } else if(patch.confidence < 5 && prevLevel === 5){
        patch = Object.assign({}, patch, { revStage: null, revDue: null, revDone: false });
      }
    }
    progressMap[id] = Object.assign({}, progressMap[id], patch);
    if(typeof patch.confidence === 'number'){
      lastConfSet = { id: id, t: Date.now() };
      if(patch.confidence === 5 && prevLevel !== 5){
        var cw = words.find(function(x){ return x.id === id; });
        if(cw && !(opts && opts.quiet)) celebrate(cw.term);
      }
      if(!(opts && opts.auto)) countTowardGoal(id, prevLevel, patch.confidence);
    }
    if(isActive('library')){ if(libraryPatchable()) patchCard(id); else scheduleRender(); }
    renderStatStrip();
    var writes = [db.collection('users').doc(currentUser.uid).collection('progress').doc(id).set(patch, {merge:true})];
    if(typeof patch.confidence === 'number' && patch.confidence !== prevLevel){
      var incObj = {};
      if(prevLevel !== null){ incObj['confLevels.'+prevLevel] = firebase.firestore.FieldValue.increment(-1); }
      incObj['confLevels.'+patch.confidence] = firebase.firestore.FieldValue.increment(1);
      writes.push(db.collection('words').doc(id).update(incObj));
      syncMyStats();
    }
    return Promise.all(writes).catch(function(e){ showToast('Could not save progress: ' + e.message); });
  }
  var statsSyncTimer = null;
  function syncMyStats(){
    if(statsSyncTimer) clearTimeout(statsSyncTimer);
    statsSyncTimer = setTimeout(function(){
      var list = viewEntries();
      var mastered = list.filter(function(e){ return e.confidence >= 5; }).length;
      var engaged = list.filter(function(e){ return e.confidence > 0; }).length;
      if(currentUser){
        db.collection('users').doc(currentUser.uid).set({
          masteredCount: mastered, engagedCount: engaged, updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, {merge:true}).catch(function(){});
      }
    }, 1500);
  }
  // ================= revision rounds: memorized words return after 7, 14 and 30 days =================
  var DAY_MS = 86400000;
  var REV_ROUNDS = [ { label: 'Round 1', days: 7 }, { label: 'Round 2', days: 14 }, { label: 'Round 3', days: 30 } ];
  var progressLoaded = false;
  var revBackfillDone = false;
  var revSession = null;
  var REFRESH_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-2.64-6.36"></path><path d="M21 3v6h-6"></path></svg>';
  function startOfDayMs(ms){ var x = new Date(ms); x.setHours(0, 0, 0, 0); return x.getTime(); }
  function endOfTodayMs(){ var d = new Date(); d.setHours(23, 59, 59, 999); return d.getTime(); }
  function revEntries(){
    return viewEntries().filter(function(e){ return e.confidence >= 5; }).map(function(e){
      var p = progressMap[e.id] || {};
      return Object.assign({}, e, { revStage: p.revStage, revDue: p.revDue, revDone: !!p.revDone });
    });
  }
  function dueRevisions(){
    var eod = endOfTodayMs();
    return revEntries().filter(function(e){ return !e.revDone && typeof e.revDue === 'number' && e.revDue <= eod; })
      .sort(function(a, b){ return a.revDue - b.revDue; });
  }
  function roundLabel(e){ return e.revDone ? 'Locked in' : ((REV_ROUNDS[typeof e.revStage === 'number' ? e.revStage : 0] || REV_ROUNDS[0]).label); }
  function dueText(ms){
    if(typeof ms !== 'number') return 'scheduling…';
    var d = Math.round((startOfDayMs(ms) - startOfDayMs(Date.now())) / DAY_MS);
    if(d < 0) return 'overdue ' + (-d) + 'd';
    if(d === 0) return 'due today';
    if(d === 1) return 'tomorrow';
    return 'in ' + d + ' days';
  }

  function maybeBackfillRevisions(){
    if(revBackfillDone || !currentUser || !progressLoaded || !words.length) return;
    revBackfillDone = true;
    var known = {};
    words.forEach(function(w){ known[w.id] = true; });
    var now = Date.now();
    var ids = Object.keys(progressMap).filter(function(id){
      var p = progressMap[id];
      return known[id] && p && p.confidence >= 5 && p.revDue === undefined && !p.revDone;
    });
    if(!ids.length) return;
    var upd = { memorizedAt: now, revStage: 0, revDue: now + REV_ROUNDS[0].days * DAY_MS, revDone: false };
    ids.forEach(function(id){ progressMap[id] = Object.assign({}, progressMap[id], upd); });
    for(var i = 0; i < ids.length; i += 400){
      var batch = db.batch();
      ids.slice(i, i + 400).forEach(function(id){ batch.set(db.collection('users').doc(currentUser.uid).collection('progress').doc(id), upd, {merge: true}); });
      batch.commit().catch(function(){});
    }
    renderRevDueBtn();
  }

  function markRevision(id, remembered){
    var p = progressMap[id] || {};
    if(remembered){
      var stage = (typeof p.revStage === 'number' ? p.revStage : 0) + 1;
      var upd = { revStage: stage, lastRevisedAt: Date.now() };
      if(stage >= REV_ROUNDS.length){ upd.revDone = true; upd.revDue = null; }
      else { upd.revDone = false; upd.revDue = Date.now() + REV_ROUNDS[stage].days * DAY_MS; }
      progressMap[id] = Object.assign({}, p, upd);
      db.collection('users').doc(currentUser.uid).collection('progress').doc(id).set(upd, {merge: true})
        .catch(function(e){ showToast('Could not save the revision: ' + e.message); });
      renderStatStrip();
    } else {
      setProgress(id, {confidence: 3});
    }
  }

  function renderRevDueBtn(){
    var btn = document.getElementById('revDueBtn');
    if(!btn) return;
    var n = currentUser ? dueRevisions().length : 0;
    if(!n){ btn.style.display = 'none'; return; }
    btn.style.display = 'flex';
    btn.innerHTML = REFRESH_SVG + n + ' due for revision';
  }
  document.getElementById('revDueBtn').addEventListener('click', function(){ switchTab('revision'); });

  function revDetailsHtml(e){
    var synAnto = (e.synonyms && e.synonyms.length) || (e.antonyms && e.antonyms.length) ? (
      '<div class="fb-row2">' + fieldBox('fb-syn', 'synonyms', e.synonyms && e.synonyms.length ? e.synonyms.join(', ') : '') +
      fieldBox('fb-anto', 'antonyms', e.antonyms && e.antonyms.length ? e.antonyms.join(', ') : '') + '</div>') : '';
    return '<div class="meaning-en" style="font-size:16px; margin-top:16px;">' + escapeHtml(e.english_meaning || '') + '</div>' +
      fieldBox('fb-hindi', 'hindi', e.hindi_meaning) + synAnto +
      fieldBox('fb-sentence', 'ssc-style sentence', e.ssc_sentence) +
      fieldBox('fb-trick', 'trick / mnemonic', e.mnemonic) +
      fieldBox('fb-confusable', 'often confused with', e.confusable_with) +
      fieldBox('fb-root', 'root', e.root) +
      fieldBox('fb-spelltrap', 'spelling note', e.spelling_note) +
      (e.type === 'idiom' ? fieldBox('fb-origin', 'origin', e.origin) : '');
  }

  function renderRevision(){
    var box = document.getElementById('revisionArea');
    if(!box) return;
    if(revSession){ renderRevisionSession(box); return; }
    var all = revEntries();
    var due = dueRevisions();
    var eod = endOfTodayMs();
    var weekAhead = all.filter(function(e){ return !e.revDone && typeof e.revDue === 'number' && e.revDue > eod && e.revDue <= eod + 7 * DAY_MS; }).length;
    var cols = [
      { title: 'Round 1', sub: '7 days after memorizing', items: [] },
      { title: 'Round 2', sub: '14 days after round 1', items: [] },
      { title: 'Round 3', sub: '30 days after round 2', items: [] },
      { title: 'Locked in', sub: 'Passed all three rounds', items: [] }
    ];
    all.forEach(function(e){
      if(e.revDone) cols[3].items.push(e);
      else cols[Math.min(2, Math.max(0, typeof e.revStage === 'number' ? e.revStage : 0))].items.push(e);
    });
    cols.forEach(function(c, ci){
      c.items.sort(function(a, b){ return ci === 3 ? a.term.localeCompare(b.term) : ((a.revDue || 0) - (b.revDue || 0)); });
    });
    box.innerHTML = '<div class="panel" style="max-width:1100px;">' +
        '<h2 style="margin-bottom:6px;">Revision rounds</h2>' +
        '<p class="help" style="margin-top:0;">Every word you memorize comes back after 7 days, then 14 days, then 30 days — about two months with three check-ins. Pass all three and it\'s locked in. Forget it once and it goes back to level 3 to relearn.</p>' +
        '<div class="rev-hero"><div class="rev-due-num' + (due.length ? '' : ' zero') + '">' + due.length + '</div>' +
          '<div class="rh-text"><b>' + (due.length === 1 ? 'word' : 'words') + ' due today</b><span>' + weekAhead + ' more coming up in the next 7 days</span></div>' +
          (due.length ? '<div class="rev-actions"><button class="btn teal" data-rev="start">Start revision</button><button class="btn ghost" data-rev="audio">Read aloud</button><button class="btn ghost" data-rev="aod">AOD mode</button></div>' : '') +
        '</div>' +
      '</div>' +
      (all.length ? '<div class="rev-rounds">' + cols.map(function(c){
        return '<div class="rev-col"><div class="rev-col-head"><h3>' + c.title + '</h3><span class="rc-count">' + c.items.length + '</span></div><div class="rc-sub">' + c.sub + '</div>' +
          '<div class="rev-list">' + (c.items.length ? c.items.map(function(e){
            var dt = c.title === 'Locked in' ? '✓' : dueText(e.revDue);
            var now = (dt === 'due today' || dt.indexOf('overdue') === 0);
            return '<button class="rev-word" data-rev="word" data-id="' + e.id + '">' + escapeHtml(e.term) + '<span class="' + (now ? 'due-now' : '') + '">' + dt + '</span></button>';
          }).join('') : '<p class="help" style="margin:0;">—</p>') + '</div></div>';
      }).join('') + '</div>'
      : emptyStateHtml('Nothing to revise yet', 'Words land here the moment you mark them Memorized (level 5). Their first round comes 7 days later.'));
  }

  function renderRevisionSession(box){
    var S = revSession;
    if(S.idx >= S.queue.length){
      var total = S.remembered + S.forgot;
      box.innerHTML = '<div class="quiz-wrap"><div class="report-card">' +
        '<div class="report-score">' + S.remembered + '/' + total + '</div>' +
        '<div class="report-sub">remembered' + (S.forgot ? ' · ' + S.forgot + ' back to learning' : ' — perfect!') + '</div>' +
        '<p class="help">Remembered words move to their next round. Forgotten ones drop to level 3 — memorize them again and their rounds restart.</p>' +
        '<div class="row-actions" style="justify-content:center;"><button class="btn teal" data-rev="home">Done</button></div>' +
      '</div></div>';
      return;
    }
    var id = S.queue[S.idx];
    var e = entryFor(id);
    if(!e){ S.idx++; renderRevisionSession(box); return; }
    var p = progressMap[id] || {};
    var tag = roundLabel({ revStage: p.revStage, revDone: p.revDone });
    box.innerHTML = '<div class="quiz-wrap">' +
      '<div class="quiz-progress">Word ' + (S.idx + 1) + ' / ' + S.queue.length + ' · ' + S.remembered + ' remembered</div>' +
      '<div class="rev-card">' +
        '<div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px;"><span class="rev-round-tag">' + tag + '</span><button class="iconbtn" data-rev="speak" aria-label="Listen">🔊</button></div>' +
        '<div class="term" style="margin-top:12px;">' + escapeHtml(e.term) + '</div>' +
        '<div class="pos" style="margin-top:4px;">' + escapeHtml(e.part_of_speech || '-') + ' · <span class="badge ' + e.type + '">' + (TYPE_LABELS[e.type] || 'Other') + '</span></div>' +
        (S.revealed
          ? revDetailsHtml(e) + '<div class="rev-answer-btns"><button class="btn maroon" data-rev="forgot">Forgot</button><button class="btn teal" data-rev="remember">Remembered</button></div>'
          : '<p class="help" style="margin-top:18px;">Say the meaning to yourself, then check.</p><button class="btn rev-reveal" data-rev="reveal">Show answer</button>') +
      '</div>' +
      '<div class="quiz-actions"><button class="btn ghost" data-rev="home">Exit</button></div>' +
    '</div>';
  }

  document.getElementById('view-revision').addEventListener('click', function(ev){
    var b = ev.target.closest && ev.target.closest('[data-rev]');
    if(!b) return;
    var a = b.dataset.rev;
    if(a === 'start'){
      var q = dueRevisions().map(function(e){ return e.id; });
      if(!q.length){ showToast('Nothing is due right now.'); return; }
      revSession = { queue: q, idx: 0, remembered: 0, forgot: 0, revealed: false };
      renderRevision();
    } else if(a === 'reveal'){ revSession.revealed = true; renderRevision(); }
    else if(a === 'remember' || a === 'forgot'){
      var id = revSession.queue[revSession.idx];
      markRevision(id, a === 'remember');
      if(a === 'remember') revSession.remembered++; else revSession.forgot++;
      revSession.idx++; revSession.revealed = false;
      renderRevision();
    }
    else if(a === 'speak'){ var cur = entryFor(revSession.queue[revSession.idx]); if(cur) speakText(cur.term); }
    else if(a === 'home'){ revSession = null; renderRevision(); }
    else if(a === 'audio'){ openAudioSetup(dueRevisions(), 'Words due for revision today.'); }
    else if(a === 'aod'){ startAod(dueRevisions()); }
    else if(a === 'word'){ openWordPreviewModal(b.dataset.id); }
  });

  // ================= evening nudge: streak at risk / revisions due =================
  var ALERT_EVENING_KEY = 'vocabRegisterAlertEvening';
  var EVENING_TIME_KEY = 'vocabRegisterEveningTime';
  var EVENING_FIRED_KEY = 'vocabRegisterEveningFired';
  function eveningCheck(){
    if(!currentUser || !progressLoaded || !alertFlag(ALERT_EVENING_KEY)) return;
    var t = (lsGet(EVENING_TIME_KEY) || '20:00').split(':');
    var hh = parseInt(t[0], 10), mm = parseInt(t[1], 10);
    var at = new Date(); at.setHours(isNaN(hh) ? 20 : hh, isNaN(mm) ? 0 : mm, 0, 0);
    if(new Date() < at) return;
    if(lsGet(EVENING_FIRED_KEY) === todayKey()) return;
    lsSet(EVENING_FIRED_KEY, todayKey());
    var parts = [];
    var atRisk = false;
    if(myProfile && myProfile.dailyGoal && myProfile.lastMetDay !== todayKey()){
      var left = Math.max(0, myProfile.dailyGoal - todayCount());
      var st = streakOf(myProfile);
      atRisk = st > 0;
      parts.push(left + ' word' + (left === 1 ? '' : 's') + ' to go today' + (st ? ' to keep your ' + st + '-day streak' : ''));
    }
    var due = dueRevisions().length;
    if(due) parts.push(due + ' word' + (due === 1 ? '' : 's') + ' due for revision');
    if(!parts.length) return;
    var title = atRisk ? 'Your streak is at risk' : (due && parts.length === 1 ? 'Revision due' : 'Daily goal not done yet');
    var body = parts.join(' · ');
    if(notifSupported && Notification.permission === 'granted'){
      try{ new Notification(title, { body: body, icon: 'icon-192.png', tag: 'vocab-evening' }); }catch(e){}
    }
    showToast(title + ' — ' + body);
  }
  setInterval(eveningCheck, 60000);

  // ================= daily goal + streak =================
  var goalAskedThisSession = false;
  var STREAK_BADGES = [[3, 'Warming up'], [7, 'Week warrior'], [14, 'Fortnight focus'], [30, 'Monthly master'], [50, 'Half-century'], [100, 'Centurion']];
  function pad2(n){ return (n < 10 ? '0' : '') + n; }
  function dateKey(d){ return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); }
  function dayKey(offset){ var d = new Date(); d.setDate(d.getDate() + (offset || 0)); return dateKey(d); }
  function todayKey(){ return dayKey(0); }
  function streakOf(u){ u = u || {}; var last = u.lastMetDay || ''; return (last === todayKey() || last === dayKey(-1)) ? (u.streakCurrent || 0) : 0; }
  function todayExtra(){ return (myProfile && myProfile.goalDay === todayKey()) ? (myProfile.goalExtra || 0) : 0; }
  function todayCount(){ return (myProfile && myProfile.goalDay === todayKey()) ? (myProfile.goalIds || []).length + (myProfile.goalExtra || 0) : 0; }
  /** पाठShala study counts toward the same goal: 1 per question answered, 5 per lesson finished. */
  var GOAL_PER_Q = 1, GOAL_PER_LESSON = 5;
  function addGoalExtra(n){
    if(!currentUser || !myProfile || !(n > 0)) return;
    var t = todayKey();
    var same = myProfile.goalDay === t;
    var ids = same ? (myProfile.goalIds || []).slice() : [];
    var extra = (same ? (myProfile.goalExtra || 0) : 0) + n;
    var upd = { goalDay: t, goalIds: ids, goalExtra: extra, history: {} };
    upd.history[t] = ids.length + extra;
    applyGoalUpdate(upd);
  }
  function streakBadgeHtml(u){ var n = streakOf(u); return n ? ' · <span class="lb-streak" title="' + n + '-day streak">' + FLAME_SVG + n + '</span>' : ''; }

  function renderGoalWidget(){
    var el = document.getElementById('goalWidget');
    if(!el) return;
    if(!currentUser || !myProfile){ el.style.display = 'none'; return; }
    el.style.display = 'flex';
    var goal = myProfile.dailyGoal || 0;
    var streak = streakOf(myProfile);
    if(!goal){
      el.classList.remove('done');
      el.innerHTML = '<span class="gw-text"><span class="gw-label">Daily goal</span><span class="gw-val">Set a goal</span></span><span class="gw-streak">' + FLAME_SVG + streak + '</span>';
      return;
    }
    var count = todayCount();
    var met = myProfile.lastMetDay === todayKey();
    var circ = 2 * Math.PI * 19;
    var frac = Math.min(1, count / goal);
    var late = new Date().getHours() >= 20;
    var streakCls = streak ? (!met && late ? 'risk' : 'alive') : '';
    var tip = streak ? (streak + '-day streak' + (!met && late ? ' — finish today to keep it!' : '')) : 'Hit today\'s goal to start a streak';
    el.classList.toggle('done', met);
    el.innerHTML = '<span class="gw-ring"><svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="19" fill="none" stroke="var(--paper-deep)" stroke-width="5"></circle><circle class="gw-arc" cx="24" cy="24" r="19" fill="none" stroke-width="5" stroke-linecap="round" stroke-dasharray="' + (frac * circ).toFixed(1) + ' ' + circ.toFixed(1) + '"></circle></svg><span class="gw-num">' + count + '</span></span>' +
      '<span class="gw-text"><span class="gw-label">' + (met ? 'Goal done' : 'Today') + '</span><span class="gw-val">' + count + ' / ' + goal + '</span></span>' +
      '<span class="gw-streak ' + streakCls + '" title="' + escapeAttr(tip) + '">' + FLAME_SVG + streak + '</span>';
  }

  function maybeAskGoal(){
    if(goalAskedThisSession || !myProfile || myProfile.dailyGoal) return;
    if(lsGet('vocabGoalAsked') === '1') return;
    goalAskedThisSession = true;
    setTimeout(function(){ if(!modalBgRef().classList.contains('open')) openGoalModal(true); }, 700);
  }

  function openGoalModal(isFirst){
    var goal = (myProfile && myProfile.dailyGoal) || 10;
    var mode = (myProfile && myProfile.goalMode) || 'levelup';
    var presets = [5, 10, 15, 20, 30, 50];
    var hints = {5: 'Gentle', 10: 'Steady', 15: 'Focused', 20: 'Serious', 30: 'Intense', 50: 'Exam mode'};
    modalBodyRef().innerHTML = '<h3>' + (isFirst ? 'Set your daily goal' : 'Daily goal') + '</h3>' +
      '<p class="help" style="margin-top:0;">How much do you want to study each day? Everything counts toward one goal and one streak: <b>1</b> for each word you level up, <b>1</b> for each question you answer in पाठShala or a mock, and <b>' + GOAL_PER_LESSON + '</b> for each lesson or rule you finish.</p>' +
      '<div class="goal-presets">' + presets.map(function(n){ return '<button class="goal-preset' + (n === goal ? ' on' : '') + '" data-goal="' + n + '">' + n + '<small>' + hints[n] + '</small></button>'; }).join('') + '</div>' +
      '<div class="field"><label class="field-label" for="goalCustom">Or your own number</label><input type="text" inputmode="numeric" id="goalCustom" placeholder="e.g. 25" value="' + (presets.indexOf(goal) === -1 ? goal : '') + '"></div>' +
      '<div class="menu-label" style="padding-left:0;">What counts toward the goal</div>' +
      '<div class="seg-toggle" style="margin:0 0 8px;"><button data-gmode="levelup" class="' + (mode === 'levelup' ? 'on' : '') + '">Any word I level up</button><button data-gmode="memorized" class="' + (mode === 'memorized' ? 'on' : '') + '">Only words I fully memorize</button></div>' +
      '<p class="help" style="font-size:12.5px;">Each word counts once per day. Just opening a card doesn\'t count — rating it higher, or answering it right in a quiz, does. This choice is only about words.</p>' +
      '<div class="modal-actions"><button class="btn ghost" id="goalLater">' + (isFirst ? 'Maybe later' : 'Cancel') + '</button><button class="btn teal" id="goalSave">Save goal</button></div>';
    modalBgRef().classList.add('open');
    var chosen = goal, chosenMode = mode;
    var custom = document.getElementById('goalCustom');
    modalBodyRef().querySelectorAll('.goal-preset').forEach(function(b){
      b.addEventListener('click', function(){
        chosen = +b.dataset.goal;
        custom.value = '';
        modalBodyRef().querySelectorAll('.goal-preset').forEach(function(x){ x.classList.toggle('on', x === b); });
      });
    });
    custom.addEventListener('input', function(){
      var n = parseInt(custom.value, 10);
      if(n > 0){ chosen = n; modalBodyRef().querySelectorAll('.goal-preset').forEach(function(x){ x.classList.remove('on'); }); }
    });
    modalBodyRef().querySelectorAll('[data-gmode]').forEach(function(b){
      b.addEventListener('click', function(){
        chosenMode = b.dataset.gmode;
        modalBodyRef().querySelectorAll('[data-gmode]').forEach(function(x){ x.classList.toggle('on', x === b); });
      });
    });
    document.getElementById('goalLater').addEventListener('click', function(){
      if(isFirst) lsSet('vocabGoalAsked', '1');
      modalBgRef().classList.remove('open'); modalBodyRef().innerHTML = '';
    });
    document.getElementById('goalSave').addEventListener('click', function(){
      if(!(chosen >= 1 && chosen <= 500)){ showToast('Pick a number between 1 and 500.'); return; }
      var upd = { dailyGoal: chosen, goalMode: chosenMode };
      myProfile = Object.assign({}, myProfile || {}, upd);
      db.collection('users').doc(currentUser.uid).set(upd, {merge: true}).catch(function(e){ showToast('Could not save your goal: ' + e.message); });
      lsSet('vocabGoalAsked', '1');
      modalBgRef().classList.remove('open'); modalBodyRef().innerHTML = '';
      showToast('Goal set: ' + chosen + ' a day.');
      renderGoalWidget();
      if(isActive('stats')) renderStreakPanel();
      applyGoalUpdate({});
    });
  }
  document.getElementById('goalWidget').addEventListener('click', function(){ openGoalModal(!(myProfile && myProfile.dailyGoal)); });
  document.getElementById('goalSettingsBtn').addEventListener('click', function(){ openGoalModal(!(myProfile && myProfile.dailyGoal)); });

  function countTowardGoal(id, prevLevel, newLevel){
    if(!currentUser || !myProfile || !myProfile.dailyGoal) return;
    var before = prevLevel || 0;
    var qualifies = (myProfile.goalMode === 'memorized') ? (newLevel >= 5 && before < 5) : (newLevel > before);
    if(!qualifies) return;
    var t = todayKey();
    var ids = myProfile.goalDay === t ? (myProfile.goalIds || []).slice() : [];
    if(ids.indexOf(id) !== -1) return;
    ids.push(id);
    var extra = myProfile.goalDay === t ? (myProfile.goalExtra || 0) : 0;
    var upd = { goalDay: t, goalIds: ids, goalExtra: extra, history: {} };
    upd.history[t] = ids.length + extra;
    applyGoalUpdate(upd);
  }

  function applyGoalUpdate(upd){
    if(!currentUser || !myProfile) return;
    var t = todayKey();
    var goal = myProfile.dailyGoal || 0;
    var ids = upd.goalIds || (myProfile.goalDay === t ? (myProfile.goalIds || []) : []);
    var extra = typeof upd.goalExtra === 'number' ? upd.goalExtra : (myProfile.goalDay === t ? (myProfile.goalExtra || 0) : 0);
    var milestone = null;
    var justMet = false;
    if(goal && ids.length + extra >= goal && myProfile.lastMetDay !== t){
      var cur = (myProfile.lastMetDay === dayKey(-1) ? (myProfile.streakCurrent || 0) : 0) + 1;
      upd.streakCurrent = cur;
      upd.streakBest = Math.max(cur, myProfile.streakBest || 0);
      upd.lastMetDay = t;
      justMet = true;
      STREAK_BADGES.forEach(function(b){ if(b[0] === cur) milestone = b; });
    }
    if(Object.keys(upd).length === 0) return;
    var hist = Object.assign({}, myProfile.history || {}, upd.history || {});
    myProfile = Object.assign({}, myProfile, upd, { history: hist });
    renderGoalWidget();
    if(isActive('stats')) renderStreakPanel();
    renderHomeSoon();
    db.collection('users').doc(currentUser.uid).set(upd, {merge: true}).catch(function(e){ showToast('Could not save your streak: ' + e.message); });
    if(justMet){
      var n = upd.streakCurrent;
      setTimeout(function(){
        showCelebration(milestone ? 'New badge · ' + milestone[1] : 'Daily goal done',
          n + '-day streak' + (n > 1 ? ' — keep it going!' : ' — see you tomorrow!'), FLAME_SVG, 'streak');
      }, 400);
    }
  }

  function renderStreakPanel(){
    var box = document.getElementById('streakPanel');
    if(!box) return;
    if(!myProfile){ box.innerHTML = '<h2>Daily goal &amp; streak</h2><p class="help">Loading…</p>'; return; }
    var goal = myProfile.dailyGoal || 0;
    var streak = streakOf(myProfile);
    var best = myProfile.streakBest || 0;
    var count = todayCount();
    var hist = myProfile.history || {};
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var mondayOffset = (today.getDay() + 6) % 7;
    var day = new Date(today); day.setDate(day.getDate() - (7 * 11 + mondayOffset));
    var tKey = todayKey();
    var cells = '';
    while(day <= today){
      var k = dateKey(day);
      var c = hist[k] || 0;
      var lvl = !c ? '' : (goal && c >= goal ? ' l3' : (goal && c >= goal / 2 ? ' l2' : ' l1'));
      cells += '<span class="hm-cell' + lvl + (k === tKey ? ' today' : '') + '" title="' + day.toDateString().slice(4, 10) + ': ' + c + ' word' + (c === 1 ? '' : 's') + '"></span>';
      day.setDate(day.getDate() + 1);
    }
    box.innerHTML = '<h2 style="margin-bottom:14px;">Daily goal &amp; streak</h2>' +
      '<div class="streak-hero">' +
        '<div class="streak-big' + (streak ? '' : ' cold') + '">' + FLAME_SVG + '<span>' + streak + '</span></div>' +
        '<div class="streak-meta"><b>' + (streak ? streak + '-day streak' : 'No active streak') + '</b><span>Best: ' + best + ' day' + (best === 1 ? '' : 's') + (goal ? ' · Today: ' + count + ' / ' + goal : ' · No goal set yet') + '</span></div>' +
        '<button class="btn ghost sm" id="streakGoalBtn" style="margin-left:auto;">' + (goal ? 'Change goal' : 'Set a daily goal') + '</button>' +
      '</div>' +
      '<div class="menu-label" style="padding-left:0; margin-top:18px;">Last 12 weeks</div>' +
      '<div class="heatmap">' + cells + '</div>' +
      '<div class="hm-legend"><span>Less</span><span class="hm-cell"></span><span class="hm-cell l1"></span><span class="hm-cell l2"></span><span class="hm-cell l3"></span><span>Goal met</span></div>' +
      '<div class="menu-label" style="padding-left:0; margin-top:18px;">Streak badges</div>' +
      '<div class="badges">' + STREAK_BADGES.map(function(b){ return '<div class="badge-tile' + (best >= b[0] ? ' earned' : '') + '"><span class="bt-num">' + b[0] + '</span><span>' + b[1] + '</span></div>'; }).join('') + '</div>';
    document.getElementById('streakGoalBtn').addEventListener('click', function(){ openGoalModal(!goal); });
  }

  function markVisited(id){
    var p = progressMap[id] || {};
    if(!p.confidence){ setProgress(id, {confidence:1}, {auto:true}); }
  }

  function handleCardAction(action, id){
    var e = words.find(function(x){ return x.id === id; });
    if(!e) return;
    var p = progressMap[id] || {};
    if(action === 'star'){ setProgress(id, {starred: !p.starred}); }
    else if(action === 'delete' && isModeratorUser){ openConfirmDelete(id); }
    else if(action === 'edit' && isModeratorUser){ openEditModal(id); }
    else if(action === 'speak'){ speakText(e.term); }
  }

  // ---------------- modal: add/edit ----------------
  var modalBg = document.getElementById('modalBg');
  var modalBody = document.getElementById('modalBody');
  function closeModal(){ modalBg.classList.remove('open'); modalBody.innerHTML = ''; }
  modalBg.addEventListener('click', function(ev){ if(ev.target === modalBg) closeModal(); });
  document.addEventListener('keydown', function(ev){ if(ev.key === 'Escape' && modalBg.classList.contains('open')){ ev.preventDefault(); closeModal(); } });

  function entryFormHtml(e){
    e = e || {term:'',type:'word',part_of_speech:'',english_meaning:'',hindi_meaning:'',synonyms:[],antonyms:[],ssc_sentence:'',mnemonic:'',ssc_history:'',confusable_with:'',root:'',spelling_trap:false,spelling_note:'',origin:'',tags:[]};
    return '' +
    '<div class="field"><label class="field-label">Term</label><input type="text" id="f_term" value="'+escapeAttr(e.term)+'"></div>' +
    '<div class="field-2col">' +
      '<div class="field"><label class="field-label">Type</label><select id="f_type">' +
        Object.keys(TYPE_LABELS).map(function(k){ return '<option value="'+k+'" '+(e.type===k?'selected':'')+'>'+TYPE_LABELS[k]+'</option>'; }).join('') +
      '</select></div>' +
      '<div class="field"><label class="field-label">Part of speech</label><input type="text" id="f_pos" value="'+escapeAttr(e.part_of_speech||'')+'"></div>' +
    '</div>' +
    '<div class="field"><label class="field-label">English meaning</label><textarea id="f_en" style="min-height:60px;">'+escapeHtml(e.english_meaning||'')+'</textarea></div>' +
    '<div class="field"><label class="field-label">Hindi meaning</label><input type="text" id="f_hi" value="'+escapeAttr(e.hindi_meaning||'')+'"></div>' +
    '<div class="field-2col">' +
      '<div class="field"><label class="field-label">Synonyms (comma separated)</label><input type="text" id="f_syn" value="'+escapeAttr((e.synonyms||[]).join(', '))+'"></div>' +
      '<div class="field"><label class="field-label">Antonyms (comma separated)</label><input type="text" id="f_ant" value="'+escapeAttr((e.antonyms||[]).join(', '))+'"></div>' +
    '</div>' +
    '<div class="field"><label class="field-label">SSC-style sentence</label><textarea id="f_sent" style="min-height:55px;">'+escapeHtml(e.ssc_sentence||'')+'</textarea></div>' +
    '<div class="field"><label class="field-label">Trick / mnemonic</label><textarea id="f_mne" style="min-height:55px;">'+escapeHtml(e.mnemonic||'')+'</textarea></div>' +
    '<div class="field"><label class="field-label">SSC exam history / importance</label><textarea id="f_hist" style="min-height:55px;">'+escapeHtml(e.ssc_history||'')+'</textarea></div>' +
    '<div class="field-2col">' +
      '<div class="field"><label class="field-label">Confusable with (e.g. "Effect")</label><input type="text" id="f_confuse" value="'+escapeAttr(e.confusable_with||'')+'"></div>' +
      '<div class="field"><label class="field-label">Root (e.g. "greg = flock/herd")</label><input type="text" id="f_root" list="rootDatalist" value="'+escapeAttr(e.root||'')+'"></div>' +
    '</div>' +
    '<div class="field"><label style="display:flex; gap:10px; align-items:flex-start; cursor:pointer;">' +
      '<input type="checkbox" id="f_spelltrap" style="margin-top:3px; width:18px; height:18px;" '+(e.spelling_trap?'checked':'')+'>' +
      '<span>Commonly appears in spelling-correction questions / has confusing spelling</span>' +
    '</label></div>' +
    '<div class="field"><label class="field-label">Spelling note (common misspelling &amp; how to avoid it)</label><textarea id="f_spellnote" style="min-height:50px;">'+escapeHtml(e.spelling_note||'')+'</textarea></div>' +
    '<div class="field"><label class="field-label">Origin (for idioms)</label><input type="text" id="f_ori" value="'+escapeAttr(e.origin||'')+'"></div>' +
    '<div class="field"><label class="field-label">Tags (comma separated)</label><input type="text" id="f_tags" value="'+escapeAttr((e.tags||[]).join(', '))+'"></div>';
  }

  function readForm(){
    return {
      term: document.getElementById('f_term').value.trim(),
      type: document.getElementById('f_type').value,
      part_of_speech: document.getElementById('f_pos').value.trim() || '-',
      english_meaning: document.getElementById('f_en').value.trim(),
      hindi_meaning: document.getElementById('f_hi').value.trim(),
      synonyms: asArray(document.getElementById('f_syn').value),
      antonyms: asArray(document.getElementById('f_ant').value),
      ssc_sentence: document.getElementById('f_sent').value.trim(),
      mnemonic: document.getElementById('f_mne').value.trim(),
      ssc_history: document.getElementById('f_hist').value.trim(),
      confusable_with: document.getElementById('f_confuse').value.trim(),
      root: document.getElementById('f_root').value.trim(),
      spelling_trap: document.getElementById('f_spelltrap').checked,
      spelling_note: document.getElementById('f_spellnote').value.trim(),
      origin: document.getElementById('f_ori').value.trim() || '-',
      tags: asArray(document.getElementById('f_tags').value)
    };
  }

  function openEditModal(id){
    var e = words.find(function(x){ return x.id === id; });
    if(!e) return;
    modalBody.innerHTML = '<h3>Edit entry</h3>' + entryFormHtml(e) +
      '<div class="modal-actions"><button class="btn ghost" id="cancelEdit">Cancel</button><button class="btn teal" id="saveEdit">Save</button></div>';
    modalBg.classList.add('open');
    document.getElementById('cancelEdit').addEventListener('click', closeModal);
    document.getElementById('saveEdit').addEventListener('click', async function(){
      var data = readForm();
      if(!data.term){ showToast('Term cannot be empty.'); return; }
      try{ await db.collection('words').doc(id).update(data); closeModal(); }
      catch(err){ showToast('Could not save: ' + err.message); }
    });
  }

  document.getElementById('addManualBtn').addEventListener('click', function(){
    modalBody.innerHTML = '<h3>'+(isModeratorUser?'Add a word manually':'Submit a word manually')+'</h3>' + entryFormHtml() +
      '<div class="modal-actions"><button class="btn ghost" id="cancelEdit">Cancel</button><button class="btn teal" id="saveEdit">'+(isModeratorUser?'Add':'Submit')+'</button></div>';
    modalBg.classList.add('open');
    document.getElementById('cancelEdit').addEventListener('click', closeModal);
    document.getElementById('saveEdit').addEventListener('click', async function(){
      var data = readForm();
      if(!data.term){ showToast('Term cannot be empty.'); return; }
      try{
        var entryData = buildEntryData(data, null);
        entryData.tags = data.tags;
        var target = isModeratorUser ? db.collection('words') : db.collection('submissions');
        await target.add(entryData);
        logActivity(isModeratorUser ? 'word_added' : 'word_submitted', {term: data.term});
        showToast(isModeratorUser ? 'Added.' : 'Submitted for approval.');
        closeModal();
      }catch(err){ showToast('Could not save: ' + err.message); }
    });
  });

  function openConfirmDelete(id){
    var e = words.find(function(x){ return x.id === id; });
    if(!e) return;
    modalBody.innerHTML = '<h3>Delete "'+escapeHtml(e.term)+'"?</h3><p class="help">This removes it from the shared library for everyone.</p>' +
      '<div class="modal-actions"><button class="btn ghost" id="cancelDel">Cancel</button><button class="btn maroon" id="confirmDel">Delete</button></div>';
    modalBg.classList.add('open');
    document.getElementById('cancelDel').addEventListener('click', closeModal);
    document.getElementById('confirmDel').addEventListener('click', async function(){
      try{ await db.collection('words').doc(id).delete(); closeModal(); }
      catch(err){ showToast('Could not delete: ' + err.message); }
    });
  }

  // ---------------- review tab (submissions) ----------------
  function chunkArr(arr, size){
    var out = [];
    for(var i = 0; i < arr.length; i += size) out.push(arr.slice(i, i+size));
    return out;
  }

  function renderReview(){
    document.getElementById('reviewAdmin').style.display = isModeratorUser ? 'block' : 'none';
    document.getElementById('reviewSelf').style.display = isModeratorUser ? 'none' : 'block';
    if(isModeratorUser){
      var bar = document.getElementById('bulkReviewBar');
      var list = document.getElementById('reviewList');
      bar.style.display = submissions.length ? 'flex' : 'none';
      var selectAll = document.getElementById('bulkSelectAll');
      if(selectAll) selectAll.checked = false;
      if(submissions.length === 0){ list.innerHTML = emptyStateHtml('Nothing pending', 'Submissions from other signed-in users will show up here.'); return; }
      list.innerHTML = submissions.map(pendingCardHtml).join('');
      list.querySelectorAll('[data-approve]').forEach(function(b){ b.addEventListener('click', function(){ approveSubmission(b.dataset.approve); }); });
      list.querySelectorAll('[data-reject]').forEach(function(b){ b.addEventListener('click', function(){ rejectSubmission(b.dataset.reject); }); });
    } else {
      var mine = document.getElementById('mySubmissionsList');
      if(submissions.length === 0){ mine.innerHTML = emptyStateHtml('Nothing pending', 'Words you submit will show up here until the admin approves them.'); return; }
      mine.innerHTML = submissions.map(function(s){
        return '<div class="pending-card"><strong>'+escapeHtml(s.term)+'</strong> <span class="badge '+s.type+'">'+TYPE_LABELS[s.type]+'</span>' +
          '<div class="pending-meta">Awaiting review'+(s.tags&&s.tags.length?' · '+escapeHtml(s.tags.join(', ')):'')+'</div>' +
          '<div style="margin-top:8px;"><button class="btn ghost sm" data-withdraw="'+s.id+'">Withdraw</button></div></div>';
      }).join('');
      mine.querySelectorAll('[data-withdraw]').forEach(function(b){ b.addEventListener('click', function(){ withdrawSubmission(b.dataset.withdraw); }); });
    }
  }

  document.getElementById('bulkSelectAll').addEventListener('change', function(){
    var checked = document.getElementById('bulkSelectAll').checked;
    document.querySelectorAll('.bulk-check').forEach(function(cb){ cb.checked = checked; });
  });
  document.getElementById('bulkApproveBtn').addEventListener('click', function(){
    var ids = Array.from(document.querySelectorAll('.bulk-check:checked')).map(function(cb){ return cb.dataset.bulkId; });
    if(ids.length === 0){ showToast('Select at least one.'); return; }
    bulkApprove(ids);
  });
  document.getElementById('bulkRejectBtn').addEventListener('click', function(){
    var ids = Array.from(document.querySelectorAll('.bulk-check:checked')).map(function(cb){ return cb.dataset.bulkId; });
    if(ids.length === 0){ showToast('Select at least one.'); return; }
    bulkReject(ids);
  });

  function pendingCardHtml(s){
    return '<div class="pending-card">' +
      '<label style="display:flex; gap:8px; align-items:flex-start; cursor:pointer;">' +
        '<input type="checkbox" class="bulk-check" data-bulk-id="'+s.id+'" style="margin-top:4px; width:18px; height:18px; flex-shrink:0;">' +
        '<div style="flex:1;">' +
          '<div class="vcard-top"><div><div class="term">'+escapeHtml(s.term)+'</div><div class="pos">'+escapeHtml(s.part_of_speech||'-')+'</div></div><span class="badge '+s.type+'">'+TYPE_LABELS[s.type]+'</span></div>' +
          '<div class="meaning-en">'+escapeHtml(s.english_meaning||'')+'</div>' +
          (s.hindi_meaning ? '<div class="field-box fb-hindi"><div class="fb-label">hindi</div><div>'+escapeHtml(s.hindi_meaning)+'</div></div>' : '') +
          '<div class="pending-meta">Submitted by '+escapeHtml(s.authorName||s.authorEmail||'someone')+(s.tags&&s.tags.length?' · '+escapeHtml(s.tags.join(', ')):'')+'</div>' +
        '</div>' +
      '</label>' +
      '<div class="row-actions" style="margin-top:10px;">' +
        '<button class="btn maroon sm" data-reject="'+s.id+'">Reject</button>' +
        '<button class="btn teal sm" data-approve="'+s.id+'">Approve</button>' +
      '</div></div>';
  }

  function notifyIfNotSelf(batch, s){
    if(s.authorUid && s.authorUid !== currentUser.uid){
      batch.set(db.collection('users').doc(s.authorUid).collection('notifications').doc(), {
        term: s.term, status: 'approved', read: false, createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      lockInboxAdd(batch, s.authorUid, s.term, 'approved');
    }
  }
  function notifyRejectIfNotSelf(batch, s){
    if(s.authorUid && s.authorUid !== currentUser.uid){
      batch.set(db.collection('users').doc(s.authorUid).collection('notifications').doc(), {
        term: s.term, status: 'rejected', read: false, createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      lockInboxAdd(batch, s.authorUid, s.term, 'rejected');
    }
  }

  async function approveSubmission(id){
    var s = submissions.find(function(x){ return x.id === id; });
    if(!s) return;
    var data = Object.assign({}, s); delete data.id;
    try{
      var batch = db.batch();
      batch.set(db.collection('words').doc(), data);
      batch.delete(db.collection('submissions').doc(id));
      notifyIfNotSelf(batch, s);
      await batch.commit();
      logActivity('word_approved', {term: s.term});
      showToast('Approved "'+s.term+'".');
    }catch(e){ showToast('Could not approve: ' + e.message); }
  }
  async function rejectSubmission(id){
    var s = submissions.find(function(x){ return x.id === id; });
    try{
      var batch = db.batch();
      batch.delete(db.collection('submissions').doc(id));
      if(s) notifyRejectIfNotSelf(batch, s);
      await batch.commit();
      logActivity('word_rejected', {term: s ? s.term : ''});
      showToast('Rejected.');
    }catch(e){ showToast('Could not reject: ' + e.message); }
  }
  async function withdrawSubmission(id){
    try{ await db.collection('submissions').doc(id).delete(); showToast('Withdrawn.'); }
    catch(e){ showToast('Could not withdraw: ' + e.message); }
  }

  async function bulkApprove(ids){
    try{
      for(var c = 0; c < chunkArr(ids, 100).length; c++){
        var group = chunkArr(ids, 100)[c];
        var batch = db.batch();
        group.forEach(function(id){
          var s = submissions.find(function(x){ return x.id === id; });
          if(!s) return;
          var data = Object.assign({}, s); delete data.id;
          batch.set(db.collection('words').doc(), data);
          batch.delete(db.collection('submissions').doc(id));
          notifyIfNotSelf(batch, s);
        });
        await batch.commit();
      }
      logActivity('words_approved', {count: ids.length});
      showToast(ids.length + ' word' + (ids.length===1?'':'s') + ' approved.');
    }catch(e){ showToast('Could not approve: ' + e.message); }
  }
  async function bulkReject(ids){
    try{
      for(var c = 0; c < chunkArr(ids, 100).length; c++){
        var group = chunkArr(ids, 100)[c];
        var batch = db.batch();
        group.forEach(function(id){
          var s = submissions.find(function(x){ return x.id === id; });
          batch.delete(db.collection('submissions').doc(id));
          if(s) notifyRejectIfNotSelf(batch, s);
        });
        await batch.commit();
      }
      logActivity('words_rejected', {count: ids.length});
      showToast(ids.length + ' rejected.');
    }catch(e){ showToast('Could not reject: ' + e.message); }
  }

  // ---------------- quiz mode ----------------
  var quizQueue = [];
  var quizIdx = 0;
  var quizScore = 0;
  var quizAnswered = false;
  var quizResults = [];

  function renderQuizHome(){
    document.getElementById('quizHome').style.display = 'block';
    document.getElementById('quizArea').innerHTML = '';
  }
  function backToQuizHome(){
    document.getElementById('quizArea').innerHTML = '';
    document.getElementById('quizHome').style.display = 'block';
  }
  function shuffleArr(arr){
    for(var i = arr.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i+1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }
  function blankSentence(sentence, term){
    var idx = sentence.toLowerCase().indexOf(term.toLowerCase());
    if(idx === -1) return sentence;
    return sentence.slice(0, idx) + '_____' + sentence.slice(idx + term.length);
  }
  function showQuizSummary(){
    var area = document.getElementById('quizArea');
    var total = quizResults.length;
    var correctCount = quizResults.filter(function(r){ return r.correct; }).length;
    var pct = total ? Math.round(correctCount/total*100) : 0;
    var missed = quizResults.filter(function(r){ return !r.correct; }).map(function(r){ return r.term; });
    var grade = pct >= 90 ? 'Excellent!' : pct >= 75 ? 'Great job!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!';
    var shareText = 'I scored ' + correctCount + '/' + total + ' (' + pct + '%) on my पाठShala vocab quiz — ' + grade;
    area.innerHTML =
      '<div class="quiz-wrap"><div class="report-card">' +
        '<div class="report-score">'+pct+'%</div>' +
        '<div class="report-sub">'+correctCount+' / '+total+' correct — '+grade+'</div>' +
        (missed.length
          ? '<div class="report-missed"><div class="fb-label" style="margin-bottom:8px;">words to revisit</div>' + missed.map(function(t){ return '<span class="chip">'+escapeHtml(t)+'</span>'; }).join(' ') + '</div>'
          : '<p class="help">Perfect run — nothing to revisit!</p>') +
        '<div class="row-actions" style="justify-content:center; margin-top:18px;">' +
          '<button class="btn teal" id="shareReportBtn">Share result</button>' +
          '<button class="btn ghost" id="quizBackBtn">Back to quizzes</button>' +
        '</div>' +
      '</div></div>';
    document.getElementById('quizBackBtn').addEventListener('click', backToQuizHome);
    document.getElementById('shareReportBtn').addEventListener('click', async function(){
      if(navigator.share){
        try{ await navigator.share({ title: 'पाठShala', text: shareText }); }
        catch(e){ /* user cancelled the share sheet, ignore */ }
      } else {
        await copyTextToClipboard(shareText);
        showToast('Result copied — paste it anywhere to share.');
      }
    });
  }
  function adjustConfidenceFromQuiz(id, correct){
    var p = progressMap[id] || {};
    var current = p.confidence || 0;
    var next = correct ? Math.min(5, current + 1) : Math.max(1, current - 1);
    setProgress(id, {confidence: next});
    var w = words.find(function(x){ return x.id === id; });
    var term = w ? w.term : '';
    logQuizAttempt(id, term, correct);
    quizResults.push({term: term, correct: !!correct});
  }
  function logQuizAttempt(wordId, term, correct){
    if(!currentUser) return;
    try{
      db.collection('quizAttempts').add({
        wordId: wordId, term: term, correct: !!correct, uid: currentUser.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    }catch(e){ /* analytics only, fail silently */ }
  }

  function logActivity(type, extra){
    if(!currentUser) return;
    try{
      db.collection('activity').add(Object.assign({
        type: type,
        byUid: currentUser.uid,
        byName: currentUser.displayName || currentUser.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      }, extra || {}));
    }catch(e){ /* feed only, fail silently */ }
  }

  document.getElementById('startFillBlankBtn').addEventListener('click', function(){
    var tags = allTags();
    modalBodyRef().innerHTML = '<h3>Set up fill-in-the-blank</h3>' +
      '<div class="field"><label class="field-label">Number of questions</label>' +
        '<select id="fbCount">' +
          '<option value="5">5</option><option value="10" selected>10</option>' +
          '<option value="15">15</option><option value="20">20</option><option value="all">All</option>' +
        '</select></div>' +
      '<div class="field"><label class="field-label">Type</label>' +
        '<select id="fbType">' +
          '<option value="all">Mixed (all types)</option>' +
          Object.keys(TYPE_LABELS).map(function(k){ return '<option value="'+k+'">'+TYPE_LABELS[k]+'</option>'; }).join('') +
        '</select></div>' +
      '<div class="field"><label class="field-label">Confidence level</label>' +
        '<select id="fbConf">' +
          '<option value="all">Mixed (all levels)</option>' +
          '<option value="0">Not started</option>' +
          '<option value="learning">In progress (1-4)</option>' +
          '<option value="5">Memorized (5)</option>' +
        '</select></div>' +
      '<div class="field"><label class="field-label">Tag</label>' +
        '<select id="fbTag"><option value="all">Mixed (all tags)</option>' +
          tags.map(function(t){ return '<option value="'+escapeAttr(t)+'">'+escapeHtml(t)+'</option>'; }).join('') +
        '</select></div>' +
      '<div class="modal-actions"><button class="btn ghost" id="fbCancel">Cancel</button><button class="btn teal" id="fbStart">Start quiz</button></div>';
    modalBgRef().classList.add('open');
    document.getElementById('fbCancel').addEventListener('click', function(){ modalBgRef().classList.remove('open'); modalBodyRef().innerHTML=''; });
    document.getElementById('fbStart').addEventListener('click', function(){
      var count = document.getElementById('fbCount').value;
      var typeSel = document.getElementById('fbType').value;
      var confSel = document.getElementById('fbConf').value;
      var tagSel = document.getElementById('fbTag').value;
      var pool = viewEntries().filter(function(w){
        if(typeSel !== 'all' && w.type !== typeSel) return false;
        if(confSel === '0' && w.confidence !== 0) return false;
        if(confSel === 'learning' && (w.confidence < 1 || w.confidence > 4)) return false;
        if(confSel === '5' && w.confidence !== 5) return false;
        if(tagSel !== 'all' && (w.tags||[]).indexOf(tagSel) === -1) return false;
        return w.ssc_sentence && w.ssc_sentence.toLowerCase().indexOf(w.term.toLowerCase()) !== -1;
      });
      if(pool.length < 2 || words.length < 2){
        showToast('Not enough matching words with a usable SSC sentence — try widening your choices.');
        return;
      }
      shuffleArr(pool);
      var finalPool = count === 'all' ? pool : pool.slice(0, parseInt(count, 10));
      modalBgRef().classList.remove('open'); modalBodyRef().innerHTML='';
      quizQueue = finalPool;
      quizIdx = 0; quizScore = 0; quizResults = [];
      document.getElementById('quizHome').style.display = 'none';
      renderFillBlankQuestion();
    });
  });

  function renderFillBlankQuestion(){
    var area = document.getElementById('quizArea');
    if(quizIdx >= quizQueue.length){ showQuizSummary(); return; }
    var w = quizQueue[quizIdx];
    var blanked = blankSentence(w.ssc_sentence, w.term);
    var distractorPool = shuffleArr(words.filter(function(x){ return x.term.toLowerCase() !== w.term.toLowerCase(); }).slice());
    var options = shuffleArr([w.term].concat(distractorPool.slice(0,3).map(function(x){ return x.term; })));
    quizAnswered = false;
    area.innerHTML =
      '<div class="quiz-wrap">' +
        '<div class="quiz-progress">Question '+(quizIdx+1)+' / '+quizQueue.length+' · Score '+quizScore+'</div>' +
        '<div class="quiz-question-card">' +
          '<div class="quiz-prompt">'+escapeHtml(blanked)+'</div>' +
          '<div class="quiz-options" id="quizOptions">' +
            options.map(function(opt){ return '<button class="quiz-option" data-opt="'+escapeAttr(opt)+'">'+escapeHtml(opt)+'</button>'; }).join('') +
          '</div>' +
        '</div>' +
        '<div class="quiz-actions"><button class="btn ghost" id="quizExitBtn">Exit quiz</button><button class="btn teal" id="quizNextBtn" style="display:none;">Next →</button></div>' +
      '</div>';
    document.querySelectorAll('#quizOptions .quiz-option').forEach(function(btn){
      btn.addEventListener('click', function(){
        if(quizAnswered) return;
        quizAnswered = true;
        var correct = btn.dataset.opt.toLowerCase() === w.term.toLowerCase();
        document.querySelectorAll('#quizOptions .quiz-option').forEach(function(b2){
          b2.disabled = true;
          if(b2.dataset.opt.toLowerCase() === w.term.toLowerCase()) b2.classList.add('correct');
          else if(b2 === btn) b2.classList.add('wrong');
        });
        adjustConfidenceFromQuiz(w.id, correct);
        if(correct) quizScore++;
        document.getElementById('quizNextBtn').style.display = 'inline-flex';
      });
    });
    document.getElementById('quizExitBtn').addEventListener('click', backToQuizHome);
    document.getElementById('quizNextBtn').addEventListener('click', function(){ quizIdx++; renderFillBlankQuestion(); });
  }

  function buildConfusablePairs(){
    var byTerm = {};
    words.forEach(function(w){ byTerm[w.term.toLowerCase()] = w; });
    var seen = {};
    var pairs = [];
    words.forEach(function(w){
      if(!w.confusable_with) return;
      var match = byTerm[w.confusable_with.toLowerCase()];
      if(!match || match.id === w.id) return;
      var key = [w.id, match.id].sort().join('|');
      if(seen[key]) return;
      seen[key] = true;
      pairs.push({a: w, b: match});
    });
    return pairs;
  }

  document.getElementById('startConfusableBtn').addEventListener('click', function(){
    var pairs = buildConfusablePairs();
    if(pairs.length === 0){
      showToast('No confusable pairs found yet — needs a "confusable with" value that matches another word already in the library.');
      return;
    }
    quizQueue = shuffleArr(pairs);
    quizIdx = 0; quizScore = 0; quizResults = [];
    document.getElementById('quizHome').style.display = 'none';
    renderConfusableQuestion();
  });

  function renderConfusableQuestion(){
    var area = document.getElementById('quizArea');
    if(quizIdx >= quizQueue.length){ showQuizSummary(); return; }
    var pair = quizQueue[quizIdx];
    var target = Math.random() < 0.5 ? pair.a : pair.b;
    var other = target === pair.a ? pair.b : pair.a;
    var prompt;
    if(target.ssc_sentence && target.ssc_sentence.toLowerCase().indexOf(target.term.toLowerCase()) !== -1){
      prompt = blankSentence(target.ssc_sentence, target.term);
    } else {
      prompt = 'Which word means: "' + target.english_meaning + '"?';
    }
    var options = shuffleArr([target.term, other.term]);
    quizAnswered = false;
    area.innerHTML =
      '<div class="quiz-wrap">' +
        '<div class="quiz-progress">Pair '+(quizIdx+1)+' / '+quizQueue.length+' · Score '+quizScore+'</div>' +
        '<div class="quiz-question-card">' +
          '<div class="quiz-prompt">'+escapeHtml(prompt)+'</div>' +
          '<div class="quiz-options" id="quizOptions">' +
            options.map(function(opt){ return '<button class="quiz-option" data-opt="'+escapeAttr(opt)+'">'+escapeHtml(opt)+'</button>'; }).join('') +
          '</div>' +
        '</div>' +
        '<div class="quiz-actions"><button class="btn ghost" id="quizExitBtn">Exit quiz</button><button class="btn teal" id="quizNextBtn" style="display:none;">Next →</button></div>' +
      '</div>';
    document.querySelectorAll('#quizOptions .quiz-option').forEach(function(btn){
      btn.addEventListener('click', function(){
        if(quizAnswered) return;
        quizAnswered = true;
        var correct = btn.dataset.opt.toLowerCase() === target.term.toLowerCase();
        document.querySelectorAll('#quizOptions .quiz-option').forEach(function(b2){
          b2.disabled = true;
          if(b2.dataset.opt.toLowerCase() === target.term.toLowerCase()) b2.classList.add('correct');
          else if(b2 === btn) b2.classList.add('wrong');
        });
        adjustConfidenceFromQuiz(target.id, correct);
        if(correct) quizScore++;
        document.getElementById('quizNextBtn').style.display = 'inline-flex';
      });
    });
    document.getElementById('quizExitBtn').addEventListener('click', backToQuizHome);
    document.getElementById('quizNextBtn').addEventListener('click', function(){ quizIdx++; renderConfusableQuestion(); });
  }

  // ---------------- spelling challenge ----------------
  function generateMisspelling(word){
    var tries = 0;
    while(tries < 12){
      tries++;
      var variant = word.split('');
      var op = Math.floor(Math.random()*4);
      var i = Math.floor(Math.random()*variant.length);
      if(op === 0 && variant.length > 1){
        var j = (i+1) % variant.length;
        var tmp = variant[i]; variant[i] = variant[j]; variant[j] = tmp;
      } else if(op === 1){
        variant.splice(i, 0, variant[i]);
      } else if(op === 2 && variant.length > 3){
        variant.splice(i, 1);
      } else {
        var letters = 'aeiou';
        variant[i] = letters[Math.floor(Math.random()*letters.length)];
      }
      var result = variant.join('');
      if(result.toLowerCase() !== word.toLowerCase()) return result;
    }
    return word + 'x';
  }

  function getSpellingPool(minCount){
    var trapOnly = document.getElementById('spellTrapOnly').checked;
    var pool = viewEntries().filter(function(w){ return w.type === 'word'; });
    if(trapOnly){
      var trapPool = pool.filter(function(w){ return w.spelling_trap; });
      if(trapPool.length < minCount){
        showToast('Not enough words flagged as a spelling trap yet (' + trapPool.length + ' found) — flag more via Add words or Edit, or uncheck this option.');
        return null;
      }
      return trapPool;
    }
    return pool;
  }

  document.getElementById('startSpellTypeBtn').addEventListener('click', function(){
    var pool = getSpellingPool(1);
    if(!pool) return;
    if(pool.length === 0){ showToast('No vocabulary words in your library yet.'); return; }
    quizQueue = shuffleArr(pool.slice());
    quizIdx = 0; quizScore = 0; quizResults = [];
    document.getElementById('quizHome').style.display = 'none';
    renderSpellTypeQuestion();
  });
  function renderSpellTypeQuestion(){
    var area = document.getElementById('quizArea');
    if(quizIdx >= quizQueue.length){ showQuizSummary(); return; }
    var w = quizQueue[quizIdx];
    quizAnswered = false;
    area.innerHTML =
      '<div class="quiz-wrap">' +
        '<div class="quiz-progress">Word '+(quizIdx+1)+' / '+quizQueue.length+' · Score '+quizScore+'</div>' +
        '<div class="quiz-question-card">' +
          '<div class="quiz-prompt">Listen, then type what you hear.</div>' +
          '<button class="btn teal" id="spellPlayBtn" style="margin-bottom:16px;">🔊 Play word</button><br>' +
          '<input type="text" id="spellInput" placeholder="Type the word…" style="max-width:280px; text-align:center; font-size:17px; padding:12px; margin:0 auto; display:block;" autocomplete="off" autocapitalize="off" spellcheck="false">' +
          '<div class="row-actions" style="justify-content:center; margin-top:14px;"><button class="btn maroon" id="spellSubmitBtn">Check</button></div>' +
        '</div>' +
        '<div class="quiz-actions"><button class="btn ghost" id="quizExitBtn">Exit quiz</button><button class="btn teal" id="quizNextBtn" style="display:none;">Next →</button></div>' +
      '</div>';
    document.getElementById('spellPlayBtn').addEventListener('click', function(){ speakText(w.term); });
    speakText(w.term);
    document.getElementById('spellInput').addEventListener('keydown', function(ev){ if(ev.key === 'Enter'){ document.getElementById('spellSubmitBtn').click(); } });
    document.getElementById('spellSubmitBtn').addEventListener('click', function(){
      if(quizAnswered) return;
      quizAnswered = true;
      var val = document.getElementById('spellInput').value.trim();
      var correct = val.toLowerCase() === w.term.toLowerCase();
      adjustConfidenceFromQuiz(w.id, correct);
      if(correct) quizScore++;
      document.getElementById('spellInput').disabled = true;
      document.getElementById('spellSubmitBtn').disabled = true;
      var fb = document.createElement('div');
      fb.style.marginTop = '12px';
      fb.style.fontWeight = '600';
      fb.style.color = correct ? 'var(--teal-deep)' : 'var(--maroon)';
      fb.textContent = correct ? 'Correct!' : ('Correct spelling: ' + w.term);
      document.querySelector('.quiz-question-card').appendChild(fb);
      document.getElementById('quizNextBtn').style.display = 'inline-flex';
    });
    document.getElementById('quizExitBtn').addEventListener('click', backToQuizHome);
    document.getElementById('quizNextBtn').addEventListener('click', function(){ quizIdx++; renderSpellTypeQuestion(); });
  }

  document.getElementById('startSpellCorrectBtn').addEventListener('click', function(){
    var pool = getSpellingPool(1);
    if(!pool) return;
    if(pool.length === 0){ showToast('No vocabulary words in your library yet.'); return; }
    quizQueue = shuffleArr(pool.slice());
    quizIdx = 0; quizScore = 0; quizResults = [];
    document.getElementById('quizHome').style.display = 'none';
    renderSpellCorrectQuestion();
  });
  function renderSpellCorrectQuestion(){
    var area = document.getElementById('quizArea');
    if(quizIdx >= quizQueue.length){ showQuizSummary(); return; }
    var w = quizQueue[quizIdx];
    var wrongs = [];
    var guard = 0;
    while(wrongs.length < 3 && guard < 30){
      guard++;
      var variant = generateMisspelling(w.term);
      if(wrongs.indexOf(variant) === -1 && variant.toLowerCase() !== w.term.toLowerCase()) wrongs.push(variant);
    }
    var options = shuffleArr([w.term].concat(wrongs));
    quizAnswered = false;
    area.innerHTML =
      '<div class="quiz-wrap">' +
        '<div class="quiz-progress">Word '+(quizIdx+1)+' / '+quizQueue.length+' · Score '+quizScore+'</div>' +
        '<div class="quiz-question-card">' +
          '<div class="quiz-prompt">Which is the correct spelling?</div>' +
          '<button class="btn teal" id="spellPlayBtn" style="margin-bottom:16px;">🔊 Play word</button>' +
          '<div class="quiz-options" id="quizOptions">' +
            options.map(function(opt){ return '<button class="quiz-option" data-opt="'+escapeAttr(opt)+'">'+escapeHtml(opt)+'</button>'; }).join('') +
          '</div>' +
        '</div>' +
        '<div class="quiz-actions"><button class="btn ghost" id="quizExitBtn">Exit quiz</button><button class="btn teal" id="quizNextBtn" style="display:none;">Next →</button></div>' +
      '</div>';
    document.getElementById('spellPlayBtn').addEventListener('click', function(){ speakText(w.term); });
    speakText(w.term);
    document.querySelectorAll('#quizOptions .quiz-option').forEach(function(btn){
      btn.addEventListener('click', function(){
        if(quizAnswered) return;
        quizAnswered = true;
        var correct = btn.dataset.opt === w.term;
        document.querySelectorAll('#quizOptions .quiz-option').forEach(function(b2){
          b2.disabled = true;
          if(b2.dataset.opt === w.term) b2.classList.add('correct');
          else if(b2 === btn) b2.classList.add('wrong');
        });
        adjustConfidenceFromQuiz(w.id, correct);
        if(correct) quizScore++;
        document.getElementById('quizNextBtn').style.display = 'inline-flex';
      });
    });
    document.getElementById('quizExitBtn').addEventListener('click', backToQuizHome);
    document.getElementById('quizNextBtn').addEventListener('click', function(){ quizIdx++; renderSpellCorrectQuestion(); });
  }

  document.getElementById('startSpellWrongBtn').addEventListener('click', function(){
    var pool = getSpellingPool(4);
    if(!pool) return;
    if(pool.length < 4){ showToast('Need at least 4 vocabulary words in your library.'); return; }
    quizQueue = shuffleArr(pool.slice());
    quizIdx = 0; quizScore = 0; quizResults = [];
    document.getElementById('quizHome').style.display = 'none';
    renderSpellSpotQuestion();
  });
  function renderSpellSpotQuestion(){
    var area = document.getElementById('quizArea');
    var remaining = quizQueue.length - quizIdx;
    if(remaining < 4){ showQuizSummary(); return; }
    var group = quizQueue.slice(quizIdx, quizIdx+4);
    var wrongIdx = Math.floor(Math.random()*4);
    var options = group.map(function(w,i){ return i===wrongIdx ? generateMisspelling(w.term) : w.term; });
    quizAnswered = false;
    area.innerHTML =
      '<div class="quiz-wrap">' +
        '<div class="quiz-progress">Round '+(Math.floor(quizIdx/4)+1)+' · Score '+quizScore+'</div>' +
        '<div class="quiz-question-card">' +
          '<div class="quiz-prompt">Which one is misspelled?</div>' +
          '<div class="quiz-options" id="quizOptions">' +
            options.map(function(opt){ return '<button class="quiz-option" data-opt="'+escapeAttr(opt)+'">'+escapeHtml(opt)+'</button>'; }).join('') +
          '</div>' +
        '</div>' +
        '<div class="quiz-actions"><button class="btn ghost" id="quizExitBtn">Exit quiz</button><button class="btn teal" id="quizNextBtn" style="display:none;">Next round →</button></div>' +
      '</div>';
    document.querySelectorAll('#quizOptions .quiz-option').forEach(function(btn, idx){
      btn.addEventListener('click', function(){
        if(quizAnswered) return;
        quizAnswered = true;
        var pickedRight = (idx === wrongIdx);
        document.querySelectorAll('#quizOptions .quiz-option').forEach(function(b2, i2){
          b2.disabled = true;
          if(i2 === wrongIdx) b2.classList.add(pickedRight ? 'correct' : 'wrong');
        });
        var targetWord = group[wrongIdx];
        adjustConfidenceFromQuiz(targetWord.id, pickedRight);
        if(pickedRight) quizScore++;
        document.getElementById('quizNextBtn').style.display = 'inline-flex';
      });
    });
    document.getElementById('quizExitBtn').addEventListener('click', backToQuizHome);
    document.getElementById('quizNextBtn').addEventListener('click', function(){ quizIdx += 4; renderSpellSpotQuestion(); });
  }

  // ---------------- root web ----------------
  var rootMinWords = 10;
  var rootRemoveTag = false;
  var rootExpanded = {};

  function focusRootGroup(key){
    searchBox.value = ''; filterType.value = 'all'; filterTag.value = 'all'; filterStatus.value = 'all';
    refreshRootFilter();
    filterRoot.value = key;
  }

  function renderRoots(){
    renderRootAdmin();
    var area = document.getElementById('rootsArea');
    if(rootGroups.length === 0){
      area.innerHTML = emptyStateHtml('No root groups yet', isAdminUser ? 'Create one above — move a tag like PHOBIA into a group, or promote a root the AI found once it has enough words.' : "The admin hasn't created any root-word groups yet.");
      return;
    }
    area.innerHTML = rootGroups.map(function(g){
      var list = groupWords(g.key).sort(function(a, b){ return a.term.localeCompare(b.term); });
      var showAll = !!rootExpanded[g.key];
      var shown = showAll ? list : list.slice(0, 40);
      return '<div class="root-group-card">' +
        '<div class="rg-head"><div><div class="rg-key">' + escapeHtml(g.key) + '</div><div class="rg-meaning">' + escapeHtml(g.meaning || '') + '</div></div>' +
        '<div class="rg-actions"><span class="rg-count">' + list.length + ' word' + (list.length === 1 ? '' : 's') + '</span>' +
        (list.length ? '<button class="btn sm" data-rg-library="' + escapeAttr(g.key) + '">Show in Library</button><button class="btn ghost sm" data-rg-present="' + escapeAttr(g.key) + '">Present</button>' : '') +
        '</div></div>' +
        (list.length ? '<div class="rg-words">' + shown.map(function(w){ return '<button class="rg-word" data-rg-word="' + w.id + '">' + escapeHtml(w.term) + '</button>'; }).join('') + '</div>' : '<p class="help" style="margin:0;">No words carry this root yet.</p>') +
        (list.length > 40 ? '<button class="btn ghost sm" style="margin-top:10px;" data-rg-toggle="' + escapeAttr(g.key) + '">' + (showAll ? 'Show fewer' : 'Show all ' + list.length) + '</button>' : '') +
      '</div>';
    }).join('');
    area.querySelectorAll('[data-rg-word]').forEach(function(el){ el.addEventListener('click', function(){ openWordPreviewModal(el.dataset.rgWord); }); });
    area.querySelectorAll('[data-rg-toggle]').forEach(function(el){ el.addEventListener('click', function(){ rootExpanded[el.dataset.rgToggle] = !rootExpanded[el.dataset.rgToggle]; renderRoots(); }); });
    area.querySelectorAll('[data-rg-library]').forEach(function(el){ el.addEventListener('click', function(){ focusRootGroup(el.dataset.rgLibrary); switchTab('library'); }); });
    area.querySelectorAll('[data-rg-present]').forEach(function(el){ el.addEventListener('click', function(){ focusRootGroup(el.dataset.rgPresent); renderLibrary(); document.getElementById('presentBtn').click(); }); });
  }

  function renderRootAdmin(){
    var box = document.getElementById('rootAdminArea');
    if(!isAdminUser){ box.innerHTML = ''; return; }
    var groupKeys = rootGroups.map(function(g){ return g.key; });

    var tagCounts = {};
    words.forEach(function(w){ (w.tags || []).forEach(function(t){ tagCounts[t] = (tagCounts[t] || 0) + 1; }); });
    var tagRows = Object.keys(tagCounts).filter(function(t){ return tagCounts[t] >= rootMinWords; }).map(function(t){
      var k = tagKey(t);
      var lacking = words.filter(function(w){ return (w.tags || []).indexOf(t) !== -1 && rootKeysOf(w.root).indexOf(k) === -1; }).length;
      return { tag: t, key: k, count: tagCounts[t], lacking: lacking, exists: groupKeys.indexOf(k) !== -1 };
    }).filter(function(r){ return !(r.exists && r.lacking === 0); })
      .sort(function(a, b){ return (KNOWN_ROOT_MEANINGS[b.key] ? 1 : 0) - (KNOWN_ROOT_MEANINGS[a.key] ? 1 : 0) || b.count - a.count; });

    var aiMap = allRootsMap();
    var aiRows = Object.keys(aiMap).filter(function(k){ return aiMap[k].count >= rootMinWords && groupKeys.indexOf(k) === -1; })
      .sort(function(a, b){ return aiMap[b].count - aiMap[a].count; }).map(function(k){
        var label = aiMap[k].label;
        var parts = label.split(/\s*(?:=|:|·|—|–|\s-\s)\s*/);
        var meaning = parts.length > 1 ? parts.slice(1).join(' ').replace(/[()]/g, '').trim() : (KNOWN_ROOT_MEANINGS[k] || '');
        var sample = groupWords(k).slice(0, 4).map(function(w){ return w.term; }).join(', ');
        return { key: k, count: aiMap[k].count, meaning: meaning, sample: sample };
      });

    box.innerHTML = '<div class="panel" style="max-width:none;">' +
      '<h2 style="margin-bottom:4px;">Manage root groups</h2>' +
      '<p class="help" style="margin-top:0;">Only you can see this. A word belongs to a group when its root field carries that root — moving a tag writes it for you, and new words the AI gives the same root join automatically.</p>' +
      '<div class="rg-settings">' +
        '<label>Only show tags / roots with at least <input type="number" id="rootMinWords" min="1" value="' + rootMinWords + '"> words</label>' +
        '<label><input type="checkbox" id="rootRemoveTag" style="width:16px; height:16px;"' + (rootRemoveTag ? ' checked' : '') + '> Remove the tag after moving</label>' +
      '</div>' +
      '<h3 class="rg-h">Move a tag into a root group</h3>' +
      (tagRows.length ? tagRows.map(function(r, i){
        return '<div class="rg-row"><div class="rg-row-main"><b>' + escapeHtml(r.tag) + '</b><span>' + r.count + ' word' + (r.count === 1 ? '' : 's') + (r.exists ? ' · ' + r.lacking + ' not in the group yet' : '') + '</span></div>' +
          '<input type="text" data-tag-key="' + i + '" value="' + escapeAttr(r.key) + '" aria-label="Root for ' + escapeAttr(r.tag) + '" placeholder="root">' +
          '<input type="text" data-tag-meaning="' + i + '" value="' + escapeAttr(KNOWN_ROOT_MEANINGS[r.key] || '') + '" aria-label="Meaning of the root" placeholder="meaning, e.g. fear">' +
          '<button class="btn teal sm" data-tag-move="' + i + '">' + (r.exists ? 'Move remaining ' + r.lacking : 'Move to root group') + '</button></div>';
      }).join('') : '<p class="help">No tag has ' + rootMinWords + '+ words that still need moving.</p>') +
      '<h3 class="rg-h">Promote a root the AI found</h3>' +
      (aiRows.length ? aiRows.map(function(r, i){
        return '<div class="rg-row"><div class="rg-row-main"><b>' + escapeHtml(r.key) + '</b><span>' + r.count + ' words · ' + escapeHtml(r.sample) + '</span></div>' +
          '<input type="text" data-ai-meaning="' + i + '" value="' + escapeAttr(r.meaning) + '" aria-label="Meaning of ' + escapeAttr(r.key) + '" placeholder="meaning">' +
          '<button class="btn sm" data-ai-add="' + i + '">Add as root group</button></div>';
      }).join('') : '<p class="help">No root the AI found has ' + rootMinWords + '+ words yet.</p>') +
      '<h3 class="rg-h">Your root groups</h3>' +
      (rootGroups.length ? rootGroups.map(function(g){
        return '<div class="rg-row"><div class="rg-row-main"><b>' + escapeHtml(groupLabel(g)) + '</b><span>' + groupWords(g.key).length + ' words</span></div>' +
          '<button class="btn ghost sm" data-group-remove="' + escapeAttr(g.key) + '">Remove group</button></div>';
      }).join('') : '<p class="help">None yet.</p>') +
    '</div>';

    document.getElementById('rootMinWords').addEventListener('change', function(){ rootMinWords = Math.max(1, parseInt(this.value, 10) || 1); renderRootAdmin(); });
    document.getElementById('rootRemoveTag').addEventListener('change', function(){ rootRemoveTag = this.checked; });
    box.querySelectorAll('[data-tag-move]').forEach(function(btn){
      btn.addEventListener('click', async function(){
        var i = btn.dataset.tagMove;
        btn.disabled = true;
        await transferTagToGroup(tagRows[+i].tag, box.querySelector('[data-tag-key="' + i + '"]').value, box.querySelector('[data-tag-meaning="' + i + '"]').value, rootRemoveTag);
        renderRoots();
      });
    });
    box.querySelectorAll('[data-ai-add]').forEach(function(btn){
      btn.addEventListener('click', async function(){
        var i = btn.dataset.aiAdd;
        btn.disabled = true;
        await createRootGroup(aiRows[+i].key, box.querySelector('[data-ai-meaning="' + i + '"]').value);
        renderRoots();
      });
    });
    box.querySelectorAll('[data-group-remove]').forEach(function(btn){
      btn.addEventListener('click', function(){ confirmRemoveRootGroup(btn.dataset.groupRemove); });
    });
  }

  async function createRootGroup(key, meaning){
    if(!isAdminUser){ showToast('Only the admin can create root groups.'); return false; }
    key = tagKey(key);
    if(!key){ showToast('Enter the root, e.g. phobia.'); return false; }
    try{
      await db.collection('rootGroups').doc(key).set({ key: key, meaning: String(meaning || '').trim(), createdBy: currentUser.email, createdAt: firebase.firestore.FieldValue.serverTimestamp() }, {merge: true});
      showToast('Root group “' + key + '” is ready.');
      return true;
    }catch(e){ showToast('Could not create the root group: ' + e.message); return false; }
  }

  async function transferTagToGroup(tag, key, meaning, removeTag){
    key = tagKey(key);
    meaning = String(meaning || '').trim();
    if(!(await createRootGroup(key, meaning))) return;
    await migrateTagToRoot(tag, key + (meaning ? ' = ' + meaning : ''), removeTag);
  }

  function confirmRemoveRootGroup(key){
    modalBodyRef().innerHTML = '<h3>Remove the “' + escapeHtml(key) + '” group?</h3><p class="help">It disappears from the root filter and this page. The words themselves and their root text stay exactly as they are, so you can recreate the group later.</p>' +
      '<div class="modal-actions"><button class="btn ghost" id="rgCancel">Cancel</button><button class="btn maroon" id="rgConfirm">Remove group</button></div>';
    modalBgRef().classList.add('open');
    document.getElementById('rgCancel').addEventListener('click', function(){ modalBgRef().classList.remove('open'); modalBodyRef().innerHTML = ''; });
    document.getElementById('rgConfirm').addEventListener('click', async function(){
      try{ await db.collection('rootGroups').doc(key).delete(); showToast('Group removed.'); }
      catch(e){ showToast('Could not remove: ' + e.message); }
      modalBgRef().classList.remove('open'); modalBodyRef().innerHTML = '';
      if(filterRoot.value === key){ filterRoot.value = 'all'; }
    });
  }

  function clusterSvgHtml(group){
    var n = group.items.length;
    var size = Math.min(420, Math.max(240, 70 + n * 46));
    var cx = size/2, cy = size/2;
    var radius = size/2 - 56;
    var lines = '', nodes = '';
    group.items.forEach(function(w, i){
      var angle = (2*Math.PI*i/n) - Math.PI/2;
      var x = cx + radius*Math.cos(angle);
      var y = cy + radius*Math.sin(angle);
      lines += '<line class="link-line" x1="'+cx+'" y1="'+cy+'" x2="'+x+'" y2="'+y+'"></line>';
      var label = w.term.length > 12 ? w.term.slice(0,11)+'…' : w.term;
      nodes += '<g data-root-word="'+escapeAttr(w.id)+'">' +
        '<circle class="word-node-circle" cx="'+x+'" cy="'+y+'" r="30"></circle>' +
        '<text class="word-node-label" x="'+x+'" y="'+y+'" text-anchor="middle" dominant-baseline="middle">'+escapeHtml(label)+'</text>' +
      '</g>';
    });
    var svg = '<svg viewBox="0 0 '+size+' '+size+'" width="'+size+'" height="'+size+'">' +
      lines +
      '<circle class="root-node-circle" cx="'+cx+'" cy="'+cy+'" r="34"></circle>' +
      '<text class="root-node-label" x="'+cx+'" y="'+cy+'" text-anchor="middle" dominant-baseline="middle">'+escapeHtml(group.label.length>14?group.label.slice(0,13)+'…':group.label)+'</text>' +
      nodes +
    '</svg>';
    return '<div class="root-cluster">'+svg+'</div>';
  }

  function openWordPreviewModal(id){
    var w = words.find(function(x){ return x.id === id; });
    if(!w) return;
    var synAnto = (w.synonyms&&w.synonyms.length) || (w.antonyms&&w.antonyms.length) ? (
      '<div class="fb-row2">' +
        fieldBox('fb-syn','synonyms', w.synonyms&&w.synonyms.length?w.synonyms.join(', '):'') +
        fieldBox('fb-anto','antonyms', w.antonyms&&w.antonyms.length?w.antonyms.join(', '):'') +
      '</div>'
    ) : '';
    modalBodyRef().innerHTML = '<h3>'+escapeHtml(w.term)+' <button class="iconbtn" id="previewSpeakBtn" title="Listen" style="font-size:15px; vertical-align:middle;">🔊</button></h3>' +
      '<p class="help">'+escapeHtml(w.part_of_speech||'-')+' · <span class="badge '+w.type+'">'+TYPE_LABELS[w.type]+'</span></p>' +
      '<div class="meaning-en">'+escapeHtml(w.english_meaning||'')+'</div>' +
      fieldBox('fb-hindi','hindi', w.hindi_meaning) +
      synAnto +
      fieldBox('fb-sentence','ssc-style sentence', w.ssc_sentence) +
      fieldBox('fb-trick','trick / mnemonic', w.mnemonic) +
      fieldBox('fb-history','ssc exam history', w.ssc_history) +
      fieldBox('fb-confusable','often confused with', w.confusable_with) +
      fieldBox('fb-root','root', w.root) +
      fieldBox('fb-spelltrap','spelling note', w.spelling_note) +
      (w.type==='idiom' ? fieldBox('fb-origin','origin', w.origin) : '') +
      '<div class="modal-actions"><button class="btn ghost" id="closeWordPreview">Close</button></div>';
    modalBgRef().classList.add('open');
    document.getElementById('previewSpeakBtn').addEventListener('click', function(){ speakText(w.term); });
    document.getElementById('closeWordPreview').addEventListener('click', function(){ modalBgRef().classList.remove('open'); modalBodyRef().innerHTML=''; });
  }

  // ---------------- enrich existing words (backfill ssc_history / confusable_with / root) ----------------
  async function copyTextToClipboard(text){
    try{ await navigator.clipboard.writeText(text); return true; }
    catch(e){
      var ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      var ok = false;
      try{ ok = document.execCommand('copy'); }catch(e2){}
      document.body.removeChild(ta);
      return ok;
    }
  }

  var ENRICH_BATCH_LIMIT = 40;
  var lastEnrichPrompt = '';
  var enrichBatchWords = [];
  var enrichPendingReview = [];
  var FIELD_LABELS_ENRICH = { ssc_history: 'SSC history', confusable_with: 'Confusable with', root: 'Root', spelling_trap: 'Spelling trap flag', spelling_note: 'Spelling note' };

  function wordsMissingEnrichFields(){
    return words.filter(function(w){ return !(w.enrichVersion >= ENRICH_VERSION); });
  }

  function renderEnrichHome(){
    document.getElementById('enrichAdmin').style.display = isModeratorUser ? 'block' : 'none';
    document.getElementById('enrichNonAdmin').style.display = isModeratorUser ? 'none' : 'block';
    if(!isModeratorUser) return;
    var missing = wordsMissingEnrichFields();
    document.getElementById('enrichCount').textContent = missing.length === 0
      ? "Every word has already been through this — nothing missing right now."
      : missing.length + ' word' + (missing.length===1?'':'s') + " haven't been through this yet.";
    document.getElementById('generateEnrichBtn').disabled = missing.length === 0;
    document.getElementById('enrichPromptPanel').style.display = 'none';
    document.getElementById('enrichPastePanel').style.display = 'none';
    document.getElementById('enrichStagePanel').style.display = 'none';
    document.getElementById('enrichStagePanel').innerHTML = '';
  }

  document.getElementById('generateEnrichBtn').addEventListener('click', function(){
    var missing = wordsMissingEnrichFields();
    if(missing.length === 0){ showToast('Nothing missing right now.'); return; }
    enrichBatchWords = missing.slice(0, ENRICH_BATCH_LIMIT);
    var listBlock = enrichBatchWords.map(function(w, i){
      return (i+1) + '. ' + w.term + ' (' + TYPE_LABELS[w.type] + ') — meaning: ' + (w.english_meaning || 'n/a');
    }).join('\n');

    lastEnrichPrompt = [
'You are updating an existing SSC CGL vocabulary register. For each term below, provide ONLY three additional fields — do not regenerate the meaning or anything else. The list below is numbered with "N. Term (Type)" purely for readability — in your JSON, the "term" field must contain ONLY the bare term text itself, with no leading number and no trailing "(Type)" label.',
'',
rootsPromptHint(''),
'Terms:',
listBlock,
'',
'Return ONLY a valid JSON array — no markdown code fences, no explanation before or after it.',
'Each element must be an object with exactly these fields:',
'{',
'  "term": string (the bare term only, exactly as it appears above but WITHOUT the leading number or the trailing type label in parentheses),',
'  "ssc_history": string (how frequently and in what way this term tends to appear in SSC exams - e.g. common in Cloze Test, Error Spotting, One Word Substitution, or Synonym-Antonym sections; roughly how often such terms come up; how a typical question uses it. Describe the general pattern honestly - do not invent specific exam dates, years, or fake direct quotations from past papers. If this is not a well-documented exam pattern, say so plainly instead of guessing.),',
'  "confusable_with": string (a single other real word commonly confused with this one, e.g. "Affect" -> "Effect"; use "-" if there is no well-known confusable counterpart),',
'  "root": string (a shared Latin/Greek/other root that helps connect this word to others, stated as "root = meaning", e.g. "greg = flock/herd"; mainly applies to actual words, not idioms/phrasal verbs/one-word substitutions; use "-" if none is genuinely useful or applicable)',
'  "spelling_trap": boolean (true if this term is commonly featured in SSC "spot the misspelled word" / spelling-correction questions, or is frequently misspelled by test-takers; false otherwise),',
'  "spelling_note": string (if spelling_trap is true, briefly note the common misspelling and how to avoid it; use "-" if spelling_trap is false)',
'}',
'',
'Output only the JSON array.'
    ].join('\n');

    document.getElementById('enrichPromptPreview').textContent = lastEnrichPrompt;
    document.getElementById('enrichPromptPanel').style.display = 'block';
    document.getElementById('enrichPastePanel').style.display = 'block';
    document.getElementById('enrichPromptPanel').scrollIntoView({behavior:'smooth', block:'start'});
    if(missing.length > ENRICH_BATCH_LIMIT){
      showToast('Showing the first ' + ENRICH_BATCH_LIMIT + ' of ' + missing.length + ' — run this again afterward to continue with the rest.');
    }
  });

  document.getElementById('copyEnrichPromptBtn').addEventListener('click', async function(){
    await copyTextToClipboard(lastEnrichPrompt);
    var note = document.getElementById('enrichCopyNote');
    note.style.display = 'inline';
    setTimeout(function(){ note.style.display = 'none'; }, 2000);
  });
  document.getElementById('openEnrichChatGPTBtn').addEventListener('click', async function(){
    await copyTextToClipboard(lastEnrichPrompt);
    showToast('Prompt copied — paste it (Ctrl+V) into ChatGPT.');
    window.open('https://chatgpt.com/', '_blank');
  });
  document.getElementById('openEnrichGeminiBtn').addEventListener('click', async function(){
    await copyTextToClipboard(lastEnrichPrompt);
    showToast('Prompt copied — paste it (Ctrl+V) into Gemini.');
    window.open('https://gemini.google.com/app', '_blank');
  });

  document.getElementById('parseEnrichBtn').addEventListener('click', function(){
    var statusEl = document.getElementById('enrichParseStatus');
    var raw = document.getElementById('enrichResponseInput').value;
    if(!raw.trim()){ statusEl.style.color = 'var(--maroon)'; statusEl.textContent = 'Paste the AI response first.'; return; }
    var parsed;
    try{
      parsed = extractJson(raw);
      if(!Array.isArray(parsed)) throw new Error('not an array');
    }catch(e){
      statusEl.style.color = 'var(--maroon)';
      statusEl.textContent = "Couldn't read that as JSON. Check the reply is a JSON array and try again.";
      return;
    }

    var byTermLower = {};
    words.forEach(function(w){ byTermLower[w.term.toLowerCase()] = w; });

    function stripLeadingNumber(s){ return s.replace(/^\d+[\.\)]\s*/, '').trim(); }
    function stripTrailingParen(s){ return s.replace(/\s*\([^)]*\)\s*$/, '').trim(); }
    function stripMeaningSuffix(s){ return s.split(/\s*[-–—]+\s*meaning\s*:/i)[0].trim(); }
    function bareTerm(s){ return stripTrailingParen(stripLeadingNumber(stripMeaningSuffix(s))); }

    enrichPendingReview = parsed.map(function(item){
      if(!item || !item.term) return null;
      var rawTerm = String(item.term).trim();
      var noMeaning = stripMeaningSuffix(rawTerm);
      var noNum = stripLeadingNumber(noMeaning);
      var clean = bareTerm(rawTerm);
      var candidates = [rawTerm, noMeaning, noNum, stripTrailingParen(rawTerm), stripTrailingParen(noMeaning), clean];
      var match = null;
      for(var c = 0; c < candidates.length; c++){
        var found = byTermLower[candidates[c].toLowerCase()];
        if(found){ match = found; break; }
      }
      if(!match) return { term: clean || rawTerm, matched: false };
      var fields = [];
      var updates = {};
      ['ssc_history','confusable_with','root','spelling_note'].forEach(function(key){
        var incoming = item[key] ? String(item[key]).trim() : '';
        if(incoming === '-') incoming = '';
        var already = match[key] || '';
        if(!already && incoming){
          updates[key] = incoming;
          fields.push({key: key, value: incoming, action: 'set'});
        } else if(already){
          fields.push({key: key, value: already, action: 'skip'});
        } else {
          fields.push({key: key, value: '', action: 'none'});
        }
      });
      var incomingTrap = item.spelling_trap === true || item.spelling_trap === 'true';
      if(!match.spelling_trap && incomingTrap){
        updates.spelling_trap = true;
        fields.push({key: 'spelling_trap', value: 'yes', action: 'set'});
      } else if(match.spelling_trap){
        fields.push({key: 'spelling_trap', value: 'yes', action: 'skip'});
      } else {
        fields.push({key: 'spelling_trap', value: '', action: 'none'});
      }
      return { term: match.term, matched: true, wordId: match.id, updates: updates, fields: fields, hasChanges: Object.keys(updates).length > 0, include: true };
    }).filter(Boolean);

    statusEl.textContent = '';
    renderEnrichStage();
  });

  function renderEnrichStage(){
    var wrap = document.getElementById('enrichStagePanel');
    if(enrichPendingReview.length === 0){ wrap.style.display = 'none'; wrap.innerHTML=''; return; }
    var updatable = enrichPendingReview.filter(function(i){ return i.matched && i.include; });
    var notFound = enrichPendingReview.filter(function(i){ return !i.matched; });
    wrap.style.display = 'block';
    wrap.innerHTML =
      '<h2><span class="step-badge">4</span>Review changes</h2>' +
      '<p class="help">'+updatable.length+' word'+(updatable.length===1?'':'s')+' will be marked reviewed (with any new fields filled in).'+(notFound.length ? ' '+notFound.length+" couldn't be matched to a word in your library and will be skipped." : '')+'</p>' +
      '<div class="grid" id="enrichStageGrid">' + enrichPendingReview.map(enrichStageItemHtml).join('') + '</div>' +
      '<div class="row-actions">' +
        '<button class="btn ghost" id="enrichStageCancel">Cancel</button>' +
        '<button class="btn maroon" id="enrichStageConfirm">Apply updates</button>' +
      '</div>';
    wrap.querySelectorAll('[data-enrich-toggle]').forEach(function(cb){
      cb.addEventListener('change', function(){ enrichPendingReview[+cb.dataset.enrichToggle].include = cb.checked; });
    });
    document.getElementById('enrichStageCancel').addEventListener('click', function(){
      enrichPendingReview = []; renderEnrichStage();
    });
    document.getElementById('enrichStageConfirm').addEventListener('click', confirmEnrichApply);
    wrap.scrollIntoView({behavior:'smooth', block:'start'});
  }

  function enrichStageItemHtml(item, idx){
    if(!item.matched){
      return '<div class="stage-item"><div class="term" style="font-size:15px;">'+escapeHtml(item.term)+'</div><div class="dup-flag">Not found in your library — skipped</div></div>';
    }
    var rows = item.hasChanges ? item.fields.map(function(f){
      var mark = f.action === 'set' ? '✓ will add' : (f.action === 'skip' ? '— already set, skipping' : '— nothing offered');
      return '<div class="pending-meta"><strong>'+FIELD_LABELS_ENRICH[f.key]+':</strong> '+mark+(f.action==='set' ? ' — '+escapeHtml(f.value.length>90?f.value.slice(0,90)+'…':f.value) : '')+'</div>';
    }).join('') : '<div class="pending-meta">No new fields to add — already complete. Will still be marked reviewed so it stops showing up here.</div>';
    return '<div class="stage-item"><label style="align-items:flex-start;">' +
      '<input type="checkbox" data-enrich-toggle="'+idx+'" checked>' +
      '<div style="flex:1;"><div class="term" style="font-size:15px;">'+escapeHtml(item.term)+'</div>'+rows+'</div>' +
    '</label></div>';
  }

  async function confirmEnrichApply(){
    var seenIds = {};
    var toApply = enrichPendingReview.filter(function(i){
      if(!(i.matched && i.include)) return false;
      if(seenIds[i.wordId]) return false;
      seenIds[i.wordId] = true;
      return true;
    });
    if(toApply.length === 0){ showToast('Nothing selected.'); return; }
    try{
      var CHUNK = 100;
      for(var i = 0; i < toApply.length; i += CHUNK){
        var batch = db.batch();
        toApply.slice(i, i+CHUNK).forEach(function(item){
          var payload = Object.assign({}, item.updates, {enrichedAt: firebase.firestore.FieldValue.serverTimestamp(), enrichVersion: ENRICH_VERSION});
          batch.update(db.collection('words').doc(item.wordId), payload);
        });
        await batch.commit();
      }
      showToast(toApply.length + ' word' + (toApply.length===1?'':'s') + ' updated.');
      enrichPendingReview = [];
      document.getElementById('enrichResponseInput').value = '';
      renderEnrichStage();
      renderEnrichHome();
    }catch(e){ showToast('Could not apply updates: ' + e.message); }
  }

  // ---------------- full-screen slide view ----------------
  var slideDeck = [];
  var slideIdx = 0;
  var slideRevealAll = true;
  var slideCurrentRevealed = true;

  document.getElementById('presentBtn').addEventListener('click', function(){
    var list = getFiltered();
    if(list.length === 0){ showToast('No words match your current Library filters.'); return; }
    modalBodyRef().innerHTML = '<h3>Full-screen view</h3>' +
      '<p class="help">This will show '+list.length+' word'+(list.length===1?'':'s')+' matching your current Library filters, one per slide.</p>' +
      '<div class="modal-actions" style="justify-content:flex-start; gap:10px; flex-wrap:wrap;">' +
        '<button class="btn ghost" id="revealShow">Show meanings right away</button>' +
        '<button class="btn teal" id="revealHide">Hide meanings first (flash-note style)</button>' +
      '</div>';
    modalBgRef().classList.add('open');
    document.getElementById('revealShow').addEventListener('click', function(){
      modalBgRef().classList.remove('open'); modalBodyRef().innerHTML='';
      startSlideshow(list, true);
    });
    document.getElementById('revealHide').addEventListener('click', function(){
      modalBgRef().classList.remove('open'); modalBodyRef().innerHTML='';
      startSlideshow(list, false);
    });
  });

  document.getElementById('panicBtn').addEventListener('click', function(){
    var CRAM_LIMIT = 30;
    var pool = viewEntries().filter(function(e){ return e.confidence < 5; });
    if(pool.length === 0){ showToast("Nothing to cram — every word is already marked memorized!"); return; }
    pool.sort(function(a,b){ return a.confidence - b.confidence; });
    var cram = pool.slice(0, CRAM_LIMIT);
    modalBodyRef().innerHTML = '<h3>🚨 Cram list ready</h3>' +
      '<p class="help">Your '+cram.length+' weakest word'+(cram.length===1?'':'s')+' (lowest confidence first), pulled from your whole library regardless of any Library filters currently set.</p>' +
      '<div class="modal-actions" style="justify-content:flex-start; gap:10px; flex-wrap:wrap;">' +
        '<button class="btn ghost" id="panicShow">Show meanings right away</button>' +
        '<button class="btn maroon" id="panicHide">Hide meanings first (flash-note style)</button>' +
      '</div>';
    modalBgRef().classList.add('open');
    document.getElementById('panicShow').addEventListener('click', function(){
      modalBgRef().classList.remove('open'); modalBodyRef().innerHTML='';
      startSlideshow(cram, true);
    });
    document.getElementById('panicHide').addEventListener('click', function(){
      modalBgRef().classList.remove('open'); modalBodyRef().innerHTML='';
      startSlideshow(cram, false);
    });
  });

  // ================= AOD mode: black screen, dim text, stays awake, tap to change =================
  var aodList = [];
  var aodIdx = 0;
  var aodWakeLock = null;
  var aodShiftTimer = null;
  var aodHintTimer = null;
  var aodDim = parseInt(lsGet('vocabAodDim') || '1', 10) || 0;
  var aodMin = lsGet('vocabAodMin') === '1';
  function applyAodMin(){ aodOverlayEl.classList.toggle('aod-min', aodMin); document.getElementById('aodMinBtn').classList.toggle('on', aodMin); }
  var aodOverlayEl = document.getElementById('aodOverlay');
  function aodOpen(){ return aodOverlayEl.classList.contains('open'); }
  function aodField(cls, label, val){
    if(!val || val === '-') return '';
    return '<div class="aod-field ' + cls + '"><span class="aod-lbl">' + escapeHtml(label) + '</span>' + escapeHtml(val) + '</div>';
  }
  async function aodRequestWakeLock(){
    try{
      if('wakeLock' in navigator){
        aodWakeLock = await navigator.wakeLock.request('screen');
        return true;
      }
    }catch(e){}
    return false;
  }
  function startAod(list, opts){
    if(!list || !list.length){ showToast('No words match your current Library filters.'); return; }
    aodList = list.slice();
    aodIdx = 0;
    aodOverlayEl.classList.remove('aod-dim-1', 'aod-dim-2');
    if(aodDim) aodOverlayEl.classList.add('aod-dim-' + aodDim);
    applyAodMin();
    aodOverlayEl.classList.add('open');
    document.body.classList.add('aod-on');
    closeAllMenus();
    var reqFs = aodOverlayEl.requestFullscreen || aodOverlayEl.webkitRequestFullscreen;
    if(reqFs){ try{ var r = reqFs.call(aodOverlayEl); if(r && r.catch) r.catch(function(){}); }catch(e){} }
    aodRequestWakeLock().then(function(ok){ if(!ok) showToast('Your browser may still switch the screen off — set a longer screen timeout for AOD mode.'); });
    var hint = document.getElementById('aodHint');
    hint.classList.remove('gone');
    clearTimeout(aodHintTimer);
    aodHintTimer = setTimeout(function(){ hint.classList.add('gone'); }, 4500);
    clearInterval(aodShiftTimer);
    aodShiftTimer = setInterval(function(){
      var x = Math.round(Math.random() * 16 - 8), y = Math.round(Math.random() * 16 - 8);
      document.getElementById('aodContent').style.transform = 'translate(' + x + 'px,' + y + 'px)';
    }, 45000);
    paintAod();
    setAodAudio(!!(opts && opts.audio));
  }
  function exitAod(){
    if(!aodOpen()) return;
    setAodAudio(false);
    aodOverlayEl.classList.remove('open');
    document.body.classList.remove('aod-on');
    clearInterval(aodShiftTimer);
    clearTimeout(aodHintTimer);
    if(aodWakeLock){ try{ aodWakeLock.release(); }catch(e){} aodWakeLock = null; }
    if(document.fullscreenElement || document.webkitFullscreenElement){
      var exitFs = document.exitFullscreen || document.webkitExitFullscreen;
      try{ var r = exitFs.call(document); if(r && r.catch) r.catch(function(){}); }catch(e){}
    }
  }
  function paintAod(){
    var base = aodList[aodIdx];
    if(!base) return;
    var e = entryFor(base.id) || base;
    var level = e.confidence || 0;
    document.getElementById('aodCounter').textContent = (aodIdx + 1) + ' / ' + aodList.length;
    var box = document.getElementById('aodContent');
    box.innerHTML =
      '<div class="aod-term">' + escapeHtml(e.term) + '</div>' +
      '<div class="aod-sub"><span class="aod-type">' + escapeHtml(TYPE_LABELS[e.type] || 'Other') + '</span>' + (e.part_of_speech && e.part_of_speech !== '-' ? '<span>' + escapeHtml(e.part_of_speech) + '</span>' : '') + '</div>' +
      (e.english_meaning ? '<div class="aod-meaning">' + escapeHtml(e.english_meaning) + '</div>' : '') +
      (e.hindi_meaning ? '<div class="aod-hindi">' + escapeHtml(e.hindi_meaning) + '</div>' : '') +
      '<button class="aod-more" id="aodMoreBtn">Show details</button>' +
      '<div class="aod-grid">' +
        aodField('aod-syn', 'synonyms', e.synonyms && e.synonyms.length ? e.synonyms.join(', ') : '') +
        aodField('aod-anto', 'antonyms', e.antonyms && e.antonyms.length ? e.antonyms.join(', ') : '') +
        aodField('aod-sent', 'ssc-style sentence', e.ssc_sentence) +
        aodField('aod-trick', 'trick / mnemonic', e.mnemonic) +
        aodField('aod-hist', 'ssc exam history', e.ssc_history) +
        aodField('aod-confu', 'often confused with', e.confusable_with) +
        aodField('aod-root', 'root', e.root) +
        aodField('aod-spell', 'spelling note', e.spelling_note) +
        (e.type === 'idiom' ? aodField('aod-origin', 'origin', e.origin) : '') +
        aodField('aod-tags', 'tags', e.tags && e.tags.length ? e.tags.join(', ') : '') +
      '</div>' +
      '<div class="aod-bottom"><div class="conf-row" style="margin-top:0;"><span class="conf-label">' + confLabel(level) + '</span>' + confDotsHtml(e.id, level) + '</div></div>';
    box.classList.remove('aod-swap');
    void box.offsetWidth;
    box.classList.add('aod-swap');
    document.getElementById('aodStage').scrollTop = 0;
  }
  function aodStep(dir){
    if(!aodList.length) return;
    aodIdx += dir;
    aodOverlayEl.classList.remove('aod-expanded');
    if(aodIdx >= aodList.length){ aodIdx = 0; showToast('Back to the first word.'); }
    if(aodIdx < 0) aodIdx = aodList.length - 1;
    paintAod();
    if(aodAudioOn) aodSpeakCurrent();
  }
  aodOverlayEl.addEventListener('click', function(ev){
    var t = ev.target;
    if(t.closest && t.closest('.aod-ctl')) return;
    if(t.closest && t.closest('.aod-more')){ aodOverlayEl.classList.add('aod-expanded'); return; }
    var dot = t.closest && t.closest('.conf-dot');
    if(dot){
      var id = dot.dataset.confId, lvl = +dot.dataset.level;
      setProgress(id, {confidence: lvl});
      var row = aodOverlayEl.querySelector('.aod-bottom');
      if(row) row.innerHTML = '<div class="conf-row" style="margin-top:0;"><span class="conf-label">' + confLabel(lvl) + '</span>' + confDotsHtml(id, lvl) + '</div>';
      return;
    }
    var w = window.innerWidth || 1;
    aodStep(ev.clientX < w * 0.22 ? -1 : 1);
  });
  document.getElementById('aodExitBtn').addEventListener('click', function(ev){ ev.stopPropagation(); exitAod(); });
  // ---- audio revision: reads each word aloud, then moves on by itself ----
  var AUDIO_PREF_KEY = 'vocabAudioPrefs';
  var AUDIO_DEFAULTS = { meaning: true, hindi: true, synonyms: false, sentence: false, rate: 1, gap: 3 };
  var PAUSE_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"></path></svg>';
  var PLAY_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg>';
  var aodAudioOn = false, aodAudioToken = 0, aodAudioTimer = null;
  if(ttsSupported){ try{ window.speechSynthesis.getVoices(); }catch(e){} }
  function audioPrefs(){
    try{ return Object.assign({}, AUDIO_DEFAULTS, JSON.parse(lsGet(AUDIO_PREF_KEY) || '{}')); }catch(e){ return Object.assign({}, AUDIO_DEFAULTS); }
  }
  function voiceFor(prefix){
    if(!ttsSupported) return null;
    var vs = [];
    try{ vs = window.speechSynthesis.getVoices() || []; }catch(e){}
    if(prefix === 'en'){ return vs.find(function(v){ return /^en[-_]IN/i.test(v.lang); }) || vs.find(function(v){ return /^en/i.test(v.lang); }) || null; }
    return vs.find(function(v){ return String(v.lang).toLowerCase().indexOf(prefix) === 0; }) || null;
  }
  function setAodAudio(on){
    aodAudioOn = !!on && ttsSupported;
    var b = document.getElementById('aodPlayBtn');
    b.innerHTML = aodAudioOn ? PAUSE_SVG : PLAY_SVG;
    b.classList.toggle('on', aodAudioOn);
    b.setAttribute('aria-label', aodAudioOn ? 'Stop reading aloud' : 'Read words aloud');
    if(aodAudioOn) aodSpeakCurrent();
    else { aodAudioToken++; clearTimeout(aodAudioTimer); if(ttsSupported){ try{ window.speechSynthesis.cancel(); }catch(e){} } }
  }
  function aodSpeakCurrent(){
    if(!aodAudioOn || !ttsSupported) return;
    var token = ++aodAudioToken;
    clearTimeout(aodAudioTimer);
    try{ window.speechSynthesis.cancel(); }catch(e){}
    var base = aodList[aodIdx];
    if(!base) return;
    var e = entryFor(base.id) || base;
    var pr = audioPrefs();
    var parts = [{ t: e.term, lang: 'en' }];
    if(pr.meaning && e.english_meaning) parts.push({ t: e.english_meaning, lang: 'en' });
    if(pr.hindi && e.hindi_meaning && voiceFor('hi')) parts.push({ t: e.hindi_meaning, lang: 'hi' });
    if(pr.synonyms && e.synonyms && e.synonyms.length) parts.push({ t: 'Synonyms: ' + e.synonyms.join(', '), lang: 'en' });
    if(pr.sentence && e.ssc_sentence) parts.push({ t: e.ssc_sentence, lang: 'en' });
    var i = 0;
    function next(){
      if(token !== aodAudioToken || !aodAudioOn) return;
      if(i >= parts.length){
        aodAudioTimer = setTimeout(function(){ if(token === aodAudioToken && aodAudioOn && aodOpen()) aodStep(1); }, pr.gap * 1000);
        return;
      }
      var part = parts[i++];
      var u = new SpeechSynthesisUtterance(part.t);
      var v = voiceFor(part.lang);
      if(v){ u.voice = v; u.lang = v.lang; } else { u.lang = part.lang === 'hi' ? 'hi-IN' : 'en-IN'; }
      u.rate = pr.rate;
      u.onend = function(){ setTimeout(next, 350); };
      u.onerror = function(){ setTimeout(next, 350); };
      try{ window.speechSynthesis.speak(u); }catch(err){ setTimeout(next, 350); }
    }
    next();
  }
  document.getElementById('aodPlayBtn').addEventListener('click', function(ev){
    ev.stopPropagation();
    if(!ttsSupported){ showToast('This browser can\'t read aloud.'); return; }
    setAodAudio(!aodAudioOn);
  });

  function openAudioSetup(list, sourceLabel){
    if(!ttsSupported){ showToast('This browser can\'t read aloud.'); return; }
    if(!list || !list.length){ showToast('No words to read — adjust your Library filters first.'); return; }
    var pr = audioPrefs();
    var hasHindi = !!voiceFor('hi');
    var chk = function(key, label, disabled){ return '<label style="display:flex; gap:10px; align-items:center; cursor:pointer; margin:6px 0;"><input type="checkbox" data-ap="' + key + '" style="width:18px; height:18px;"' + (pr[key] && !disabled ? ' checked' : '') + (disabled ? ' disabled' : '') + '> ' + label + '</label>'; };
    var seg = function(key, opts){ return '<div class="seg-toggle" style="margin:4px 0 12px;">' + opts.map(function(o){ return '<button data-apseg="' + key + '" data-val="' + o[0] + '" class="' + (pr[key] === o[0] ? 'on' : '') + '">' + o[1] + '</button>'; }).join('') + '</div>'; };
    modalBodyRef().innerHTML = '<h3>Audio revision</h3>' +
      '<p class="help" style="margin-top:0;">Reads ' + list.length + ' word' + (list.length === 1 ? '' : 's') + ' aloud one after another on a dim screen that stays on — revise hands-free. ' + escapeHtml(sourceLabel || '') + '</p>' +
      '<div class="menu-label" style="padding-left:0;">Read out</div>' +
      '<p class="help" style="margin:0 0 4px;">The word itself, plus:</p>' +
      chk('meaning', 'English meaning') +
      chk('hindi', 'Hindi meaning' + (hasHindi ? '' : ' <span class="help">(no Hindi voice on this device)</span>'), !hasHindi) +
      chk('synonyms', 'Synonyms') +
      chk('sentence', 'SSC-style sentence') +
      '<div class="menu-label" style="padding-left:0;">Speed</div>' + seg('rate', [[0.8, 'Slow'], [1, 'Normal'], [1.2, 'Fast']]) +
      '<div class="menu-label" style="padding-left:0;">Pause between words</div>' + seg('gap', [[2, '2 sec'], [3, '3 sec'], [6, '6 sec']]) +
      '<p class="help" style="font-size:12.5px;">Tap the screen to skip ahead, or use the pause button at the top to stop. Keep the phone unlocked — the screen stays on by itself.</p>' +
      '<div class="modal-actions"><button class="btn ghost" id="audioCancel">Cancel</button><button class="btn teal" id="audioStart">Start</button></div>';
    modalBgRef().classList.add('open');
    modalBodyRef().querySelectorAll('[data-apseg]').forEach(function(b){
      b.addEventListener('click', function(){
        modalBodyRef().querySelectorAll('[data-apseg="' + b.dataset.apseg + '"]').forEach(function(x){ x.classList.toggle('on', x === b); });
      });
    });
    document.getElementById('audioCancel').addEventListener('click', function(){ modalBgRef().classList.remove('open'); modalBodyRef().innerHTML = ''; });
    document.getElementById('audioStart').addEventListener('click', function(){
      var np = Object.assign({}, pr);
      modalBodyRef().querySelectorAll('[data-ap]').forEach(function(c){ if(!c.disabled) np[c.dataset.ap] = c.checked; });
      modalBodyRef().querySelectorAll('[data-apseg].on').forEach(function(b){ np[b.dataset.apseg] = parseFloat(b.dataset.val); });
      lsSet(AUDIO_PREF_KEY, JSON.stringify(np));
      modalBgRef().classList.remove('open'); modalBodyRef().innerHTML = '';
      startAod(list, { audio: true });
    });
  }
  document.getElementById('navAudioBtn').addEventListener('click', function(){ openAudioSetup(getFiltered(), 'Uses your current Library filters.'); });

  document.getElementById('aodMinBtn').addEventListener('click', function(ev){
    ev.stopPropagation();
    aodMin = !aodMin;
    lsSet('vocabAodMin', aodMin ? '1' : '0');
    aodOverlayEl.classList.remove('aod-expanded');
    applyAodMin();
    showToast(aodMin ? 'Low-power layout: word, meaning and Hindi only' : 'Full layout: all details');
  });
  document.getElementById('aodDimBtn').addEventListener('click', function(ev){
    ev.stopPropagation();
    aodDim = (aodDim + 1) % 3;
    lsSet('vocabAodDim', String(aodDim));
    aodOverlayEl.classList.remove('aod-dim-1', 'aod-dim-2');
    if(aodDim) aodOverlayEl.classList.add('aod-dim-' + aodDim);
    showToast(['Brightest', 'Dim', 'Dimmest'][aodDim] + ' text');
  });
  document.addEventListener('keydown', function(ev){
    if(!aodOpen()) return;
    if(ev.key === 'Escape'){ exitAod(); }
    else if(ev.key === 'ArrowRight' || ev.key === ' '){ ev.preventDefault(); aodStep(1); }
    else if(ev.key === 'ArrowLeft'){ aodStep(-1); }
  });
  document.addEventListener('visibilitychange', function(){
    if(aodOpen() && document.visibilityState === 'visible') aodRequestWakeLock();
  });
  document.getElementById('aodBtn').addEventListener('click', function(){ startAod(getFiltered()); });
  document.getElementById('navAodBtn').addEventListener('click', function(){ startAod(getFiltered()); });

  function startSlideshow(list, revealImmediately){
    slideDeck = list.slice();
    slideIdx = 0;
    slideRevealAll = revealImmediately;
    var overlay = document.getElementById('slideOverlay');
    overlay.style.display = 'flex';
    var reqFs = overlay.requestFullscreen || overlay.webkitRequestFullscreen;
    if(reqFs){ reqFs.call(overlay).catch(function(){}); }
    document.addEventListener('keydown', slideKeyHandler);
    renderSlide();
  }

  function exitSlideshow(){
    document.getElementById('slideOverlay').style.display = 'none';
    document.removeEventListener('keydown', slideKeyHandler);
    var exitFs = document.exitFullscreen || document.webkitExitFullscreen;
    if(document.fullscreenElement || document.webkitFullscreenElement){
      try{ exitFs.call(document).catch(function(){}); }catch(e){}
    }
  }

  document.addEventListener('fullscreenchange', function(){
    if(!document.fullscreenElement && document.getElementById('slideOverlay').style.display !== 'none'){
      exitSlideshow();
    }
  });

  function slideKeyHandler(ev){
    if(ev.key === 'Escape'){ exitSlideshow(); }
    else if(ev.key === 'ArrowRight' || ev.key === ' '){ ev.preventDefault(); document.getElementById('slideNext').click(); }
    else if(ev.key === 'ArrowLeft'){ document.getElementById('slidePrev').click(); }
  }

  document.getElementById('slideClose').addEventListener('click', exitSlideshow);
  document.getElementById('slidePrev').addEventListener('click', function(){
    if(slideIdx > 0){ slideIdx--; renderSlide(); }
  });
  document.getElementById('slideNext').addEventListener('click', function(){
    if(slideIdx < slideDeck.length - 1){ slideIdx++; renderSlide(); }
    else { showToast('End of the set.'); exitSlideshow(); }
  });

  function renderSlide(){
    var e = slideDeck[slideIdx];
    slideCurrentRevealed = slideRevealAll;
    paintSlide(e);
  }

  function paintSlide(e){
    var detailsHtml =
      fieldBox('fb-meaning-big','meaning', e.english_meaning) +
      fieldBox('fb-hindi','hindi', e.hindi_meaning) +
      fieldBox('fb-syn','synonyms', e.synonyms&&e.synonyms.length?e.synonyms.join(', '):'') +
      fieldBox('fb-anto','antonyms', e.antonyms&&e.antonyms.length?e.antonyms.join(', '):'') +
      fieldBox('fb-sentence','ssc-style sentence', e.ssc_sentence) +
      fieldBox('fb-trick','trick / mnemonic', e.mnemonic) +
      fieldBox('fb-history','ssc exam history', e.ssc_history) +
      fieldBox('fb-confusable','often confused with', e.confusable_with) +
      fieldBox('fb-root','root', e.root) +
      fieldBox('fb-spelltrap','spelling note', e.spelling_note) +
      (e.type==='idiom' ? fieldBox('fb-origin','origin', e.origin) : '');

    var body = document.getElementById('slideBody');
    body.innerHTML =
      '<div class="slide-progress">'+(slideIdx+1)+' / '+slideDeck.length+'</div>' +
      '<div class="slide-card" id="slideCard">' +
        '<div class="slide-card-head">' +
          '<div class="vcard-top"><div><div class="term">'+escapeHtml(e.term)+' <button class="iconbtn" id="slideSpeakBtn" title="Listen" style="font-size:15px; vertical-align:middle;">🔊</button></div><div class="pos">'+escapeHtml(e.part_of_speech||'-')+'</div></div><span class="badge '+e.type+'">'+TYPE_LABELS[e.type]+'</span></div>' +
          (e.tags && e.tags.length ? '<div class="tagrow">'+e.tags.map(function(t){return '<span class="chip">'+escapeHtml(t)+'</span>';}).join('')+'</div>' : '') +
        '</div>' +
        (slideCurrentRevealed ? '<div class="slide-details-grid">'+detailsHtml+'</div>' : '<div class="slide-reveal-hint">Tap anywhere to reveal the meaning</div>') +
      '</div>' +
      '<div class="conf-row" style="justify-content:center; border-top:none; margin-top:16px;" id="slideConfRow"></div>';

    document.getElementById('slideCard').addEventListener('click', function(){
      if(!slideCurrentRevealed){ slideCurrentRevealed = true; paintSlide(e); }
    });
    document.getElementById('slideSpeakBtn').addEventListener('click', function(ev){ ev.stopPropagation(); speakText(e.term); });
    renderSlideConfRow(e.id);
    document.getElementById('slidePrev').disabled = slideIdx === 0;
  }

  function renderSlideConfRow(entryId){
    var row = document.getElementById('slideConfRow');
    if(!row) return;
    var level = (progressMap[entryId] && progressMap[entryId].confidence) || 0;
    row.innerHTML = '<span class="conf-label" style="color:var(--paper);">'+confLabel(level)+'</span>'+confDotsHtml(entryId, level);
    row.querySelectorAll('.conf-dot').forEach(function(btn){
      btn.addEventListener('click', function(ev){
        ev.stopPropagation();
        var lvl = +btn.dataset.level;
        setProgress(entryId, {confidence: lvl});
        renderSlideConfRow(entryId);
      });
    });
  }

  // ---------------- stats ----------------
  function renderStats(){
    var list = viewEntries();
    var total = list.length;
    var byType = {}; Object.keys(TYPE_LABELS).forEach(function(k){ byType[k] = 0; });
    var byTag = {}; var byConf = [0,0,0,0,0,0];
    list.forEach(function(e){
      byType[e.type] = (byType[e.type]||0) + 1;
      byConf[e.confidence] = (byConf[e.confidence]||0) + 1;
      (e.tags||[]).forEach(function(t){ byTag[t] = (byTag[t]||0) + 1; });
    });
    var confLabels = ['Not started','Level 1','Level 2','Level 3','Level 4','Memorized'];
    document.getElementById('statsByConf').innerHTML = total === 0 ? emptyStateHtml('No data yet','Add some words first.') :
      confLabels.map(function(lbl,i){ return barRow(lbl, byConf[i], total?Math.round(byConf[i]/total*100):0); }).join('');
    document.getElementById('statsByType').innerHTML = total === 0 ? emptyStateHtml('No data yet','Add some words first.') :
      Object.keys(TYPE_LABELS).map(function(k){ var c=byType[k]||0; return barRow(TYPE_LABELS[k], c, total?Math.round(c/total*100):0); }).join('');
    var tags = Object.keys(byTag).sort(function(a,b){ return byTag[b]-byTag[a]; });
    document.getElementById('statsByTag').innerHTML = tags.length === 0 ? emptyStateHtml('No tags yet','Tag a batch when you add words to see it here.') :
      tags.map(function(t){ var c=byTag[t]; return barRow(t, c, total?Math.round(c/total*100):0); }).join('');
  }
  function barRow(label, count, pct){
    return '<div class="bar-row"><div class="lbl">'+escapeHtml(label)+'</div><div class="bar-track"><div class="bar-fill" style="width:'+pct+'%;"></div></div><div class="count">'+count+'</div></div>';
  }

  function renderStatStrip(){
    var list = viewEntries();
    var total = list.length;
    var memorized = list.filter(function(e){ return e.confidence >= 5; }).length;
    document.getElementById('statStrip').innerHTML =
      '<div class="stat-chip"><span class="num">'+total+'</span><span class="lbl">words</span></div>' +
      '<div class="stat-chip"><span class="num">'+memorized+'</span><span class="lbl">memorized</span></div>' +
      '<div class="stat-chip"><span class="num">'+(total-memorized)+'</span><span class="lbl">to revise</span></div>';
    renderRevDueBtn();
    renderHomeSoon();
  }

  // ---------------- backup ----------------
  document.getElementById('exportBtn').addEventListener('click', function(){
    var blob = new Blob([JSON.stringify(viewEntries(), null, 2)], {type:'application/json'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = 'cgl-vocab-backup-' + new Date().toISOString().slice(0,10) + '.json';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  document.getElementById('importFile').addEventListener('change', function(ev){
    if(!isAdminUser) return;
    var file = ev.target.files[0];
    if(!file) return;
    var reader = new FileReader();
    reader.onload = async function(){
      try{
        var data = JSON.parse(reader.result);
        if(!Array.isArray(data)) throw new Error('bad format');
        var existingKeys = {};
        words.forEach(function(e){ existingKeys[e.term.toLowerCase()+'|'+e.type] = true; });
        var toAdd = [];
        data.forEach(function(item){
          if(!item || !item.term) return;
          var key = String(item.term).toLowerCase() + '|' + (item.type||'other');
          if(existingKeys[key]) return;
          existingKeys[key] = true;
          toAdd.push(item);
        });
        var CHUNK = 400;
        for(var i = 0; i < toAdd.length; i += CHUNK){
          var batch = db.batch();
          toAdd.slice(i, i+CHUNK).forEach(function(item){
            var ref = db.collection('words').doc();
            var norm = normalizeParsed(item);
            var d = buildEntryData(norm, null);
            d.tags = asArray(item.tags);
            batch.set(ref, d);
          });
          await batch.commit();
        }
        showToast(toAdd.length + ' entr' + (toAdd.length===1?'y':'ies') + ' imported.');
      }catch(e){ showToast("Couldn't read that file — make sure it's a valid backup JSON."); }
      document.getElementById('importFile').value = '';
    };
    reader.readAsText(file);
  });

  document.getElementById('clearAllBtn').addEventListener('click', function(){
    if(!isAdminUser) return;
    modalBody.innerHTML = '<h3>Clear the entire shared library?</h3><p class="help">This deletes every word for every user, permanently. Consider exporting a backup first.</p>' +
      '<div class="modal-actions"><button class="btn ghost" id="cancelClear">Cancel</button><button class="btn maroon" id="confirmClear">Clear everything</button></div>';
    modalBg.classList.add('open');
    document.getElementById('cancelClear').addEventListener('click', closeModal);
    document.getElementById('confirmClear').addEventListener('click', async function(){
      try{
        var CHUNK = 400;
        for(var i = 0; i < words.length; i += CHUNK){
          var batch = db.batch();
          words.slice(i, i+CHUNK).forEach(function(w){ batch.delete(db.collection('words').doc(w.id)); });
          await batch.commit();
        }
        closeModal();
        showToast('Library cleared.');
      }catch(e){ showToast('Could not clear: ' + e.message); }
    });
  });

  // ---------------- leaderboard ----------------
  var fetchedAt = {};
  function recentlyFetched(key, ms){ var t = fetchedAt[key]; if(t && Date.now() - t < ms) return true; fetchedAt[key] = Date.now(); return false; }
  async function renderLeaderboard(){
    if(recentlyFetched('leaderboard', 60000)) return;
    var area = document.getElementById('leaderboardArea');
    area.innerHTML = '<p class="help">Loading…</p>';
    try{
      var snap = await db.collection('users').orderBy('masteredCount', 'desc').limit(50).get();
      var rows = snap.docs.map(function(d){ return Object.assign({id:d.id}, d.data()); });
      var totalWords = words.length;
      if(rows.length === 0){ area.innerHTML = emptyStateHtml('No data yet', 'The leaderboard fills in as people study and mark words memorized.'); return; }
      area.innerHTML = '<div class="grid">' + rows.map(function(u, i){
        var pct = totalWords ? Math.round(((u.masteredCount||0)/totalWords)*100) : 0;
        return '<div class="vcard" style="cursor:default;">' +
          '<div class="vcard-top">' +
            '<div style="display:flex; align-items:center; gap:10px;">' +
              '<span style="font-family:var(--font-display); font-size:18px; font-weight:600; color:var(--ink-faint); width:24px; flex-shrink:0;">#'+(i+1)+'</span>' +
              (u.photoURL ? '<img class="avatar" src="'+escapeAttr(u.photoURL)+'" alt="" style="width:32px;height:32px;">' : '') +
              '<div class="term" style="font-size:16px;">'+escapeHtml(u.displayName||u.email||'Someone')+'</div>' +
            '</div>' +
          '</div>' +
          '<div class="conf-row" style="border-top:none;"><span class="conf-label">'+pct+'% of the library memorized</span></div>' +
          '<div class="meta-line">'+(u.masteredCount||0)+' memorized · '+(u.engagedCount||0)+' studied'+streakBadgeHtml(u)+'</div>' +
        '</div>';
      }).join('') + '</div>';
    }catch(e){ area.innerHTML = emptyStateHtml('Could not load the leaderboard', e.message); }
  }

  async function renderAllUsers(){
    if(recentlyFetched('allUsers', 60000)) return;
    var box = document.getElementById('allUsersArea');
    box.innerHTML = '<p class="help">Loading…</p>';
    try{
      var usersSnap = await db.collection('users').orderBy('displayName').limit(300).get();
      var rolesSnap = await db.collection('roles').get();
      var modMap = {};
      rolesSnap.forEach(function(d){ modMap[d.id] = true; });
      var rows = usersSnap.docs.map(function(d){ return Object.assign({id:d.id}, d.data()); });
      if(rows.length === 0){ box.innerHTML = emptyStateHtml('No users yet', 'People show up here once they sign in.'); return; }
      box.innerHTML = '<div class="grid">' + rows.map(function(u){
        var isAdminU = ADMIN_EMAILS.indexOf(u.email) !== -1;
        var isModU = !!modMap[u.id];
        return '<div class="vcard" style="cursor:default;">' +
          '<div class="vcard-top">' +
            '<div style="display:flex; align-items:center; gap:10px;">' +
              (u.photoURL ? '<img class="avatar" src="'+escapeAttr(u.photoURL)+'" alt="" style="width:32px;height:32px;">' : '') +
              '<div class="term" style="font-size:15px;">'+escapeHtml(u.displayName||u.email||'Someone')+'</div>' +
            '</div>' +
            (isAdminU ? '<span class="admin-badge">admin</span>' : (isModU ? '<span class="mod-badge">moderator</span>' : '')) +
          '</div>' +
          (isModeratorUser && u.email ? '<div class="meta-line">'+escapeHtml(u.email)+'</div>' : '') +
          '<div class="meta-line">'+(u.masteredCount||0)+' memorized · '+(u.engagedCount||0)+' studied'+streakBadgeHtml(u)+'</div>' +
        '</div>';
      }).join('') + '</div>';
    }catch(e){ box.innerHTML = emptyStateHtml('Could not load users', e.message); }
  }

  // ---------------- admin panel ----------------
  function renderAdminPanel(){
    renderModeratorsList();
    renderActivityFeed();
    renderTagToolSelects();
    renderMissedWords();
    renderMasteryBreakdown();
    renderLockFeedStatus();
    document.getElementById('dupesArea').innerHTML = '';
  }

  // ---------------- lock-screen app feed ----------------
  var LOCK_PART = 300;   // words per document, keeps each well under Firestore's 1 MB limit
  function lockItem(w){
    return {
      i: w.id, t: w.term || '', y: w.type || 'other', p: (w.part_of_speech && w.part_of_speech !== '-') ? w.part_of_speech : '',
      m: w.english_meaning || '', h: w.hindi_meaning || '',
      s: (w.synonyms || []).join(', '), a: (w.antonyms || []).join(', '),
      e: w.ssc_sentence || '', k: w.mnemonic || '', x: w.ssc_history || '', c: w.confusable_with || '',
      r: w.root || '', n: w.spelling_note || '', o: (w.type === 'idiom' && w.origin && w.origin !== '-') ? w.origin : '',
      g: w.tags || []
    };
  }
  async function renderLockFeedStatus(force){
    var el = document.getElementById('lockFeedStatus');
    if(!el) return;
    if(!force && recentlyFetched('lockfeed', 60000)) return;
    try{
      var meta = await db.collection('lockFeed').doc('meta').get();
      if(!meta.exists){ el.textContent = 'Not published yet.'; return; }
      var d = meta.data();
      var when = d.updatedAt && d.updatedAt.toMillis ? new Date(d.updatedAt.toMillis()).toLocaleString() : 'just now';
      el.textContent = 'Last published: ' + (d.count || 0) + ' words · ' + when + '.' + (words.length !== d.count ? ' Your library now has ' + words.length + ' — publish again to update the app.' : '');
    }catch(e){ el.textContent = 'Could not check the feed: ' + e.message; }
  }
  document.getElementById('publishLockFeedBtn').addEventListener('click', async function(){
    if(!isModeratorUser){ showToast('Only moderators can publish.'); return; }
    var btn = this;
    var el = document.getElementById('lockFeedStatus');
    if(!words.length){ showToast('Your library is empty.'); return; }
    btn.disabled = true;
    el.textContent = 'Publishing…';
    try{
      var items = words.map(lockItem);
      var parts = [];
      for(var i = 0; i < items.length; i += LOCK_PART) parts.push(JSON.stringify(items.slice(i, i + LOCK_PART)));
      var oldMeta = await db.collection('lockFeed').doc('meta').get();
      var oldParts = oldMeta.exists ? (oldMeta.data().parts || 0) : 0;
      var batch = db.batch();
      parts.forEach(function(js, i){ batch.set(db.collection('lockFeed').doc('p' + i), { json: js }); });
      for(var j = parts.length; j < oldParts; j++) batch.delete(db.collection('lockFeed').doc('p' + j));
      batch.set(db.collection('lockFeed').doc('meta'), {
        parts: parts.length, count: items.length,
        roots: JSON.stringify(rootGroups.map(function(g){ return { k: g.key, m: g.meaning || '' }; })),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(), updatedBy: currentUser.email
      });
      await batch.commit();
      logActivity('lock_feed_published', { count: items.length });
      showToast('Published ' + items.length + ' words — tap “Refresh words” in the Vocab Lock app.');
      renderLockFeedStatus(true);
    }catch(e){
      el.textContent = 'Could not publish: ' + e.message + (String(e.message).indexOf('permission') !== -1 ? ' (add the lockFeed rule to your Firestore rules)' : '');
    }
    btn.disabled = false;
  });

  // ================= Vocab Lock phone app: account link + two-way progress sync =================
  // The web app keeps one compact summary doc at lockSync/{code}. The phone reads it with the code
  // and sends events back as lockSync/{code}/events, which are applied here and then deleted:
  // k 'rate' (word level) · 'rev' (revision) · 'gs' (a पाठShala question answered, w = 'gs:app:qid', c = 1 right)
  // · 'task' (one tick on a task from the Tasks tab, w = task id).
  var LOCK_ALPH = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var lockCode = null, lockLastEventT = 0, lockLastJson = '', lockUnsubEvents = null, lockTimer = null;
  var lockEventQueue = [], lockSeenEvents = {}, lockSyncedAt = 0, lockApplying = false;
  function lockFmt(code){ return (code || '').replace(/(.{4})(?=.)/g, '$1-'); }
  function lockNewCode(){
    var a = new Uint32Array(20), out = '';
    (window.crypto || window.msCrypto).getRandomValues(a);
    for(var i = 0; i < 20; i++) out += LOCK_ALPH[a[i] % LOCK_ALPH.length];
    return out;
  }
  function lockInboxAdd(batch, uid, term, status){
    // Written on its own (not in the approval batch) so approvals keep working even before the new rules are added.
    try{
      db.collection('lockInbox').doc(uid).set({
        items: firebase.firestore.FieldValue.arrayUnion({ term: term || '', status: status, at: Date.now() + Math.floor(Math.random() * 1000) }),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, {merge: true}).catch(function(){});
    }catch(e){}
  }
  function lockSyncStop(){
    if(lockUnsubEvents) lockUnsubEvents();
    lockUnsubEvents = null;
    if(lockTimer) clearInterval(lockTimer);
    lockTimer = null;
    lockCode = null; lockLastEventT = 0; lockLastJson = ''; lockEventQueue = []; lockSeenEvents = {}; lockSyncedAt = 0;
  }
  async function lockSyncStart(){
    lockSyncStop();
    if(!currentUser) return;
    var uid = currentUser.uid;
    try{
      var snap = await db.collection('lockSync').where('uid', '==', uid).limit(1).get();
      if(!currentUser || currentUser.uid !== uid || snap.empty) return;
      var d = snap.docs[0];
      var data = d.data() || {};
      try{ lockLastEventT = (JSON.parse(data.json || '{}').lastEventT) || 0; }catch(e){ lockLastEventT = 0; }
      lockSyncedAt = data.updatedAt && data.updatedAt.toMillis ? data.updatedAt.toMillis() : 0;
      lockAttach(d.id);
    }catch(e){ /* rules not updated yet, or offline: the phone link simply stays idle */ }
  }
  function lockAttach(code){
    lockCode = code;
    lockUnsubEvents = db.collection('lockSync').doc(code).collection('events').onSnapshot(function(snap){
      snap.forEach(function(doc){
        if(lockSeenEvents[doc.id]) return;
        lockSeenEvents[doc.id] = true;
        var ev = doc.data() || {};
        ev._id = doc.id;
        lockEventQueue.push(ev);
      });
      lockApplyEvents();
    }, function(){});
    if(lockTimer) clearInterval(lockTimer);
    lockTimer = setInterval(function(){ lockApplyEvents(); lockPushSummary(false); }, 20000);
    setTimeout(function(){ lockPushSummary(false); }, 3000);
  }
  function lockReady(){ return !!(currentUser && lockCode && progressLoaded && myProfile && words.length); }

  function streakFromHistory(hist, goal){
    if(!goal) return { count: 0, last: '' };
    var d = (hist[dayKey(0)] || 0) >= goal ? 0 : -1;
    var last = dayKey(d), n = 0;
    while((hist[dayKey(d)] || 0) >= goal && n < 1000){ n++; d--; }
    return { count: n, last: n ? last : '' };
  }
  function creditGoalOnDay(id, prevLevel, newLevel, day){
    if(!day || day === todayKey()){ countTowardGoal(id, prevLevel, newLevel); return; }
    if(!myProfile || !myProfile.dailyGoal) return;
    var before = prevLevel || 0;
    var qualifies = (myProfile.goalMode === 'memorized') ? (newLevel >= 5 && before < 5) : (newLevel > before);
    if(!qualifies || day > todayKey()) return;
    var hist = Object.assign({}, myProfile.history || {});
    hist[day] = (hist[day] || 0) + 1;
    var upd = { history: {} };
    upd.history[day] = hist[day];
    var s = streakFromHistory(hist, myProfile.dailyGoal);
    if(s.count > streakOf(myProfile)){
      upd.streakCurrent = s.count;
      upd.lastMetDay = s.last;
      upd.streakBest = Math.max(s.count, myProfile.streakBest || 0);
    }
    applyGoalUpdate(upd);
  }

  function lockApplyEvents(){
    if(lockApplying || !lockEventQueue.length || !lockReady()) return;
    lockApplying = true;
    var list = lockEventQueue.splice(0).sort(function(a, b){ return (a.t || 0) - (b.t || 0); });
    var known = {};
    words.forEach(function(w){ known[w.id] = true; });
    var applied = 0, facts = 0, ticks = 0, factsToday = 0;
    list.forEach(function(ev){
      try{
        if(ev.k === 'gs' && typeof ev.w === 'string'){
          var parts = ev.w.split(':');              // gs:app:question
          if(parts.length >= 3 && STUDY[parts[1]]){
            studyMark(parts[1], parts.slice(2).join(':'), ev.c === 1);
            facts++;
            if(ev.d === todayKey()) factsToday++;
          }
        } else if(ev.k === 'wall' && typeof ev.w === 'string' && ev.w.length < 20000){
          // the PC wallpaper's chosen set, kept with the account so it survives Lively wiping its storage
          var wc = JSON.parse(ev.w), had = 0;
          try{ had = myProfile && myProfile.wallCfg ? (JSON.parse(myProfile.wallCfg).at || 0) : 0; }catch(e2){}
          if(wc && (wc.at || 0) > had){
            if(myProfile) myProfile.wallCfg = ev.w;
            db.collection('users').doc(currentUser.uid).set({ wallCfg: ev.w }, { merge: true }).catch(function(){});
          }
        } else if(ev.k === 'task' && ev.w){
          var tk = todoUpd(ev.w, function(t){ if(!t.done && !t.del) todoSetTicks(t, t.k + 1); });
          if(tk) ticks++;
        } else if(ev.k === 'todo' && typeof ev.w === 'string' && ev.w.length < 20000){
          if(todoApplyPhoneOp(JSON.parse(ev.w), ev.t)) ticks++;
        } else if(ev.w && known[ev.w]){
          var cur = progressMap[ev.w];
          var prev = (cur && typeof cur.confidence === 'number') ? cur.confidence : null;
          if(ev.k === 'rate' && typeof ev.c === 'number' && ev.c >= 0 && ev.c <= 5 && ev.c !== prev){
            setProgress(ev.w, { confidence: ev.c }, { auto: true, quiet: true });
            creditGoalOnDay(ev.w, prev, ev.c, ev.d);
            applied++;
          } else if(ev.k === 'rev' && prev === 5){
            markRevision(ev.w, ev.c === 1);
            applied++;
          }
        }
      }catch(e){}
      if(typeof ev.t === 'number' && ev.t > lockLastEventT) lockLastEventT = ev.t;
    });
    var batch = db.batch();
    list.forEach(function(ev){ batch.delete(db.collection('lockSync').doc(lockCode).collection('events').doc(ev._id)); });
    batch.commit().catch(function(){});
    lockApplying = false;
    if(factsToday) addGoalExtra(factsToday * GOAL_PER_Q);   // answered questions count toward today's goal, as in the mixed mock
    if(applied || facts || ticks){
      var bits = [];
      if(applied) bits.push(applied + ' rating' + (applied === 1 ? '' : 's'));
      if(facts) bits.push(facts + ' answer' + (facts === 1 ? '' : 's'));
      if(ticks) bits.push(ticks + ' task change' + (ticks === 1 ? '' : 's'));
      showToast('Synced ' + bits.join(', ') + ' from your phone.');
      scheduleRender();
      renderRevDueBtn();
      if(ticks && isActive('tasks')) renderTodo();
    }
    setTimeout(function(){ lockPushSummary(true); }, 1500);
  }

  /** A change to the Tasks list made in the phone app (k "todo", w = JSON). Returns true if it changed something. */
  function todoApplyPhoneOp(o, at){
    if(!o || typeof o.op !== 'string') return false;
    var n3 = function(n){ return Math.max(1, Math.min(3, +n || 1)); };
    var day = function(v){ return typeof v === 'string' && (v === '' || /^\d{4}-\d{2}-\d{2}$/.test(v)); };
    var tagOf = function(v){ return String(v || '').trim().replace(/^#/, '').replace(/\s+/g, '-').toLowerCase().slice(0, 24); };
    if(o.op === 'def'){ var dd = todoData(); dd.def = n3(o.n); todoSave(dd); return true; }
    if(o.op === 'clear'){
      var dc = todoData(), now = Date.now(), any = false, ids = Array.isArray(o.ids) ? o.ids : [];
      dc.tasks.forEach(function(t){ if(ids.indexOf(t.id) !== -1 && t.done && !t.del){ t.del = now; t.u = now; any = true; } });
      if(any) todoSave(dc);
      return any;
    }
    if(typeof o.id !== 'string' || !o.id) return false;
    if(o.op === 'add'){
      if(todoData().tasks.some(function(t){ return t.id === o.id; })) return false;   // already added
      var extra = { id: o.id, n: n3(o.n), c: at || Date.now() };
      if(day(o.due) && o.due) extra.due = o.due;
      if(o.tag) extra.tag = tagOf(o.tag);
      if(o.star) extra.star = true;
      if(o.app && STUDY[o.app]) extra.app = o.app;
      return !!todoAdd(String(o.raw || '').slice(0, 200), extra);
    }
    var hit = todoUpd(o.id, function(t){
      if(o.op === 'edit'){
        if(typeof o.t === 'string' && o.t.trim()){
          // read again like the web app's own edit box: #tag, !, a day and app / chapter names are picked up
          var p = todoParse(o.t.slice(0, 200));
          t.t = p.t;
          if(p.due) t.due = p.due;
          if(p.tag) t.tag = p.tag;
          if(p.star) t.star = true;
          if(!('app' in o) && p.app) t.app = p.app;
          if(p.lesson) todoSetLesson(t, p.lesson);
        }
        if('n' in o){ t.n = n3(o.n); todoSetTicks(t, Math.min(t.k, t.n)); }
        if('due' in o && day(o.due)) t.due = o.due;
        if('tag' in o) t.tag = tagOf(o.tag);
        if('star' in o) t.star = !!o.star;
        if('app' in o){
          t.app = STUDY[o.app] ? o.app : '';
          if(t.lm && t.lm !== t.app) todoSetLesson(t, null);   // the chapter belonged to the old app
        }
      }
      else if(o.op === 'ticks') todoSetTicks(t, +o.k || 0);
      else if(o.op === 'focus'){ t.fm = (t.fm || 0) + Math.max(1, Math.min(240, +o.min || 25)); if(!t.done) todoSetTicks(t, t.k + 1); }
      else if(o.op === 'del') t.del = Date.now();
      else if(o.op === 'undel') t.del = 0;
    });
    if(hit && o.op === 'edit' && !todoLessons) todoLinkLater(o.id);
    return !!hit;
  }

  function buildLockSummary(){
    var known = {};
    words.forEach(function(w){ known[w.id] = true; });
    var p = {};
    Object.keys(progressMap).forEach(function(id){
      var x = progressMap[id];
      if(!x || !known[id]) return;
      var c = typeof x.confidence === 'number' ? x.confidence : 0;
      if(!c && !x.starred) return;
      p[id] = [c, x.starred ? 1 : 0, typeof x.revStage === 'number' ? x.revStage : -1, typeof x.revDue === 'number' ? x.revDue : 0, x.revDone ? 1 : 0];
    });
    var t = todayKey();
    var prof = myProfile || {};
    // today's tasks (open ones due today or earlier, and those done today) for the phone's Today screen
    var tasks = [];
    try{
      var L = todoLists(todoData());
      L.today.slice().sort(todoSort).concat(L.doneToday).slice(0, 30).forEach(function(x){
        tasks.push({ i: x.id, t: x.t, n: x.n || 1, k: x.k || 0, s: x.star ? 1 : 0, g: x.tag || '' });
      });
    }catch(e){}
    // the whole Tasks list for the phone's Tasks tab: open tasks and those finished in the last 14 days
    var todo = null;
    try{
      var td = todoData(), cutDone = Date.now() - 14 * DAY_MS, cutTick = Date.now() - 8 * DAY_MS;
      todo = { def: td.def || 1, list: td.tasks.filter(function(x){ return !x.del && (!x.done || x.done > cutDone); }).slice(-400).map(function(x){
        var o = { i: x.id, t: x.t, n: x.n || 1, k: x.k || 0, c: x.c || 0 };
        if(x.due) o.due = x.due;
        if(x.star) o.s = 1;
        if(x.tag) o.g = x.tag;
        if(x.app) o.a = x.app;
        if(x.lm){ o.lm = x.lm; o.li = x.li || ''; o.lt = x.lt || ''; }
        if(x.fm) o.fm = x.fm;
        if(x.done) o.dn = x.done;
        var tk = (x.tk || []).filter(function(ms){ return ms > cutTick; });
        if(tk.length) o.tk = tk;
        return o;
      }) };
    }catch(e){}
    // the Mistakes book, app by app, so the phone can replay the same questions
    var mistakes = {};
    Object.keys(STUDY).forEach(function(id){
      if(STUDY[id].noq) return;
      var w = studyWrongIds(id);
      if(w.length) mistakes[id] = w.slice(0, 300);
    });
    return JSON.stringify({
      v: 1, p: p, total: words.length,
      goal: prof.dailyGoal || 0, mode: prof.goalMode || 'levelup',
      goalDay: prof.goalDay || '', goalIds: prof.goalDay === t ? lockGoalIds(prof) : [],
      streak: prof.streakCurrent || 0, lastMet: prof.lastMetDay || '', best: prof.streakBest || 0,
      tasks: tasks, todo: todo, mistakes: mistakes, wall: prof.wallCfg || '',
      site: location.origin + location.pathname.replace(/[^\/]*$/, ''),   // the phone downloads study-bank.json (GS facts) from here
      lastEventT: lockLastEventT, pushedAt: Date.now()
    });
  }
  // the phone and wallpaper count today's ids; पाठShala study is added as stand-in ids so all three show one number
  function lockGoalIds(prof){
    var a = (prof.goalIds || []).slice(), n = Math.min(prof.goalExtra || 0, 500);
    for(var i = 1; i <= n; i++) a.push('study:' + i);
    return a;
  }
  function lockPushSummary(force){
    if(!lockReady()) return Promise.resolve();
    var json = buildLockSummary();
    var cmp = json.replace(/,"pushedAt":\d+/, '');
    if(cmp === lockLastJson) return Promise.resolve();
    lockLastJson = cmp;
    return db.collection('lockSync').doc(lockCode).set({
      uid: currentUser.uid, name: currentUser.displayName || currentUser.email || '', json: json,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(function(){ lockSyncedAt = Date.now(); }).catch(function(){ lockLastJson = ''; });
  }
  document.addEventListener('visibilitychange', function(){
    if(document.visibilityState === 'hidden') lockPushSummary(false);
  });

  async function lockCreateLink(){
    if(!currentUser) return;
    if(!progressLoaded || !words.length){ showToast('Still loading your register — try again in a few seconds.'); return; }
    var code = lockNewCode();
    try{
      await db.collection('lockSync').doc(code).set({
        uid: currentUser.uid, name: currentUser.displayName || currentUser.email || '', json: '{}',
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      lockLastEventT = 0; lockLastJson = '';
      if(lockUnsubEvents) lockUnsubEvents();
      lockAttach(code);
      await lockPushSummary(true);
      openLockLinkModal();
    }catch(e){
      showToast('Could not create the link: ' + e.message + (String(e.message).indexOf('permission') !== -1 ? ' — add the new lockSync rules in Firebase first.' : ''));
    }
  }
  async function lockUnlink(){
    if(!lockCode) return;
    var code = lockCode;
    try{
      var ev = await db.collection('lockSync').doc(code).collection('events').get();
      var batch = db.batch();
      ev.forEach(function(d){ batch.delete(d.ref); });
      batch.delete(db.collection('lockSync').doc(code));
      await batch.commit();
      lockSyncStop();
      showToast('Phone unlinked. That code no longer works.');
      openLockLinkModal();
    }catch(e){ showToast('Could not unlink: ' + e.message); }
  }
  function lockWallpaperUrl(){
    var base = location.href.split('#')[0].split('?')[0].replace(/[^\/]*$/, '');
    return base + 'wallpaper.html?code=' + (lockCode || '');
  }
  function openLockLinkModal(){
    var body;
    if(!lockCode){
      body = '<h3>Link the Vocab Lock phone app</h3>' +
        '<p class="help" style="margin-top:0;">Once linked, the phone app knows your levels, memorized words, revision rounds, daily goal and streak. Ratings you give on the phone come back here and count toward your goal and streak.</p>' +
        '<ol class="lock-steps"><li>Tap <b>Create link code</b> below.</li><li>On your phone: tap <b>Link this phone</b> on the next screen (open this page on the phone), or type the code in Vocab Lock → <b>Settings → Account</b>.</li></ol>' +
        '<p class="help" style="font-size:12.5px;">The code works like a key to your progress — keep it to yourself. You can unlink any time here, which stops the old code working.</p>' +
        '<div class="modal-actions"><button class="btn ghost" id="lockClose">Close</button><button class="btn teal" id="lockCreate">Create link code</button></div>';
    } else {
      var when = lockSyncedAt ? new Date(lockSyncedAt).toLocaleString() : 'not yet';
      body = '<h3>Vocab Lock is linked</h3>' +
        '<p class="help" style="margin-top:0;">On the phone with Vocab Lock installed, tap <b>Link this phone</b>. Or type this code in Vocab Lock → <b>Settings → Account</b>. It\'s the same code on all your devices.</p>' +
        '<div class="lock-code" id="lockCodeBox">' + escapeHtml(lockFmt(lockCode)) + '</div>' +
        '<a class="btn teal" style="display:flex; justify-content:center; text-decoration:none; margin:10px 0 4px;" href="vocablock://link?code=' + encodeURIComponent(lockCode) + '">📱 Link this phone</a>' +
        '<p class="help" style="font-size:12.5px;">Progress last sent to the phone: ' + escapeHtml(when) + '. It updates by itself while this app is open.</p>' +
        '<div class="menu-label" style="padding-left:0; margin-top:14px;">Desktop wallpaper (Lively)</div>' +
        '<p class="help" style="margin-top:0; font-size:12.5px;">In Lively Wallpaper, tap <b>+</b> and paste this link. Your words play on the desktop with levels and a progress card.</p>' +
        '<div class="lock-code" style="font-size:12px; letter-spacing:0; text-align:left; padding:10px 12px;">' + escapeHtml(lockWallpaperUrl()) + '</div>' +
        '<div class="modal-actions" style="flex-wrap:wrap;"><button class="btn maroon" id="lockUnlink">Unlink phone</button><button class="btn ghost" id="lockCopyWall">Copy wallpaper link</button><button class="btn ghost" id="lockCopy">Copy code</button><button class="btn teal" id="lockClose">Done</button></div>';
    }
    modalBodyRef().innerHTML = body;
    modalBgRef().classList.add('open');
    var close = function(){ modalBgRef().classList.remove('open'); modalBodyRef().innerHTML = ''; };
    document.getElementById('lockClose').addEventListener('click', close);
    var c = document.getElementById('lockCreate');
    if(c) c.addEventListener('click', function(){ c.disabled = true; c.textContent = 'Creating…'; lockCreateLink(); });
    var u = document.getElementById('lockUnlink');
    if(u) u.addEventListener('click', function(){ if(confirm('Unlink the phone app? It will stop syncing until you link it again with a new code.')) lockUnlink(); });
    var cw = document.getElementById('lockCopyWall');
    if(cw) cw.addEventListener('click', function(){
      var u = lockWallpaperUrl();
      if(navigator.clipboard) navigator.clipboard.writeText(u).then(function(){ showToast('Wallpaper link copied — paste it in Lively.'); }, function(){ showToast(u); });
      else showToast(u);
    });
    var cp = document.getElementById('lockCopy');
    if(cp) cp.addEventListener('click', function(){
      var txt = lockFmt(lockCode);
      if(navigator.clipboard) navigator.clipboard.writeText(txt).then(function(){ showToast('Code copied.'); }, function(){ showToast(txt); });
      else showToast(txt);
    });
  }
  document.getElementById('lockLinkBtn').addEventListener('click', function(){ openLockLinkModal(); });

  async function renderModeratorsList(force){
    if(!isAdminUser) return;
    if(!force && recentlyFetched('mods', 60000)) return;
    var box = document.getElementById('moderatorsList');
    box.innerHTML = '<p class="help">Loading…</p>';
    try{
      var usersSnap = await db.collection('users').orderBy('displayName').limit(200).get();
      var rolesSnap = await db.collection('roles').get();
      var modMap = {};
      rolesSnap.forEach(function(d){ modMap[d.id] = d.data(); });
      var rows = usersSnap.docs.map(function(d){ return Object.assign({id:d.id}, d.data()); })
        .filter(function(u){ return ADMIN_EMAILS.indexOf(u.email) === -1; });
      if(rows.length === 0){ box.innerHTML = emptyStateHtml('No users yet', 'People show up here once they sign in at least once.'); return; }
      box.innerHTML = rows.map(function(u){
        var isMod = !!modMap[u.id];
        return '<div class="pending-card" style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">' +
          '<div>'+escapeHtml(u.displayName||u.email)+(isMod ? ' <span class="mod-badge">moderator</span>' : '')+'</div>' +
          '<button class="btn '+(isMod?'maroon':'teal')+' sm" data-toggle-mod="'+u.id+'" data-is-mod="'+(isMod?'1':'0')+'">'+(isMod?'Remove':'Make moderator')+'</button>' +
        '</div>';
      }).join('');
      box.querySelectorAll('[data-toggle-mod]').forEach(function(btn){
        btn.addEventListener('click', function(){ toggleModerator(btn.dataset.toggleMod, btn.dataset.isMod === '1'); });
      });
    }catch(e){ box.innerHTML = emptyStateHtml('Could not load users', e.message); }
  }

  async function toggleModerator(uid, currentlyMod){
    try{
      if(currentlyMod){
        await db.collection('roles').doc(uid).delete();
        showToast('Moderator removed.');
      } else {
        var userDoc = await db.collection('users').doc(uid).get();
        var ud = userDoc.exists ? userDoc.data() : {};
        await db.collection('roles').doc(uid).set({
          role: 'moderator', email: ud.email||'', displayName: ud.displayName||'',
          grantedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        showToast('Moderator added.');
      }
      renderModeratorsList(true);
    }catch(e){ showToast('Could not update: ' + e.message); }
  }

  document.getElementById('addModBtn').addEventListener('click', async function(){
    var email = document.getElementById('newModEmail').value.trim().toLowerCase();
    if(!email){ showToast('Enter an email.'); return; }
    try{
      var snap = await db.collection('users').where('email', '==', email).limit(1).get();
      if(snap.empty){ showToast('No user found with that email — they need to sign in at least once first.'); return; }
      await toggleModerator(snap.docs[0].id, false);
      document.getElementById('newModEmail').value = '';
    }catch(e){ showToast('Could not add: ' + e.message); }
  });

  var ACTION_VERB = {
    word_added: 'added', words_added: 'added',
    word_submitted: 'submitted', words_submitted: 'submitted',
    word_approved: 'approved', words_approved: 'approved',
    word_rejected: 'rejected', words_rejected: 'rejected',
    spellwords_added: 'added to the Spelling Bank', spellwords_submitted: 'submitted to the Spelling Bank',
    spellword_approved: 'approved a Spelling Bank word', spellwords_approved: 'approved Spelling Bank words',
    spellword_rejected: 'rejected a Spelling Bank word', spellwords_rejected: 'rejected Spelling Bank words',
    tag_to_root: 'moved a tag to a root',
    lock_feed_published: 'published words to the lock-screen app'
  };
  async function renderActivityFeed(){
    if(recentlyFetched('activity', 60000)) return;
    var box = document.getElementById('activityFeedArea');
    box.innerHTML = '<p class="help">Loading…</p>';
    try{
      var snap = await db.collection('activity').orderBy('createdAt', 'desc').limit(150).get();
      var raw = snap.docs.map(function(d){ return d.data(); });
      if(raw.length === 0){ box.innerHTML = emptyStateHtml('Nothing yet', 'Activity shows up here as people add and review words.'); return; }
      var grouped = [];
      raw.forEach(function(a){
        var verb = ACTION_VERB[a.type] || a.type;
        var day = a.createdAt ? new Date(tsMillis(a.createdAt)).toDateString() : '';
        var last = grouped[grouped.length-1];
        if(last && last.byUid === a.byUid && last.verb === verb && last.day === day){
          last.count += (a.count || 1);
          if(a.term) last.terms.push(a.term);
        } else {
          grouped.push({ byUid: a.byUid, byName: a.byName, verb: verb, day: day, count: (a.count||1), terms: a.term ? [a.term] : [] });
        }
      });
      var todayStr = new Date().toDateString();
      box.innerHTML = grouped.slice(0, 40).map(function(g){
        var when = g.day === todayStr ? 'today' : '';
        var text;
        if(g.count === 1 && g.terms[0]){
          text = escapeHtml(g.byName) + ' ' + g.verb + ' "' + escapeHtml(g.terms[0]) + '"' + (when ? ' '+when : '');
        } else {
          text = escapeHtml(g.byName) + ' ' + g.verb + ' ' + g.count + ' word' + (g.count===1?'':'s') + (when ? ' '+when : '');
        }
        return '<div class="pending-meta" style="padding:6px 0; border-bottom:1px dashed var(--rule);">'+text+'</div>';
      }).join('');
    }catch(e){ box.innerHTML = emptyStateHtml('Could not load activity', e.message); }
  }

  function levenshtein(a, b){
    a = a.toLowerCase(); b = b.toLowerCase();
    var m = a.length, n = b.length;
    var dp = [];
    for(var i=0;i<=m;i++){ dp.push([i]); }
    for(var j=0;j<=n;j++){ dp[0][j] = j; }
    for(i=1;i<=m;i++){
      for(j=1;j<=n;j++){
        dp[i][j] = a[i-1]===b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
      }
    }
    return dp[m][n];
  }

  document.getElementById('findDupesBtn').addEventListener('click', function(){
    var box = document.getElementById('dupesArea');
    box.innerHTML = '<p class="help">Scanning…</p>';
    var pairs = [];
    for(var i=0;i<words.length;i++){
      for(var j=i+1;j<words.length;j++){
        var a = words[i], b = words[j];
        if(a.type !== b.type) continue;
        var dist = levenshtein(a.term, b.term);
        var maxLen = Math.max(a.term.length, b.term.length);
        if(maxLen === 0) continue;
        var similarity = 1 - dist/maxLen;
        if(dist === 0 || (dist <= 2 && similarity > 0.72)){ pairs.push({a:a, b:b, dist:dist}); }
      }
    }
    if(pairs.length === 0){ box.innerHTML = emptyStateHtml('No likely duplicates found', 'Nice and clean!'); return; }
    pairs.sort(function(x,y){ return x.dist - y.dist; });
    box.innerHTML = pairs.slice(0, 60).map(function(p, idx){
      return '<div class="stage-item" style="margin-bottom:10px;">' +
        '<div style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">' +
          '<div><strong>'+escapeHtml(p.a.term)+'</strong> vs <strong>'+escapeHtml(p.b.term)+'</strong> <span class="chip">'+TYPE_LABELS[p.a.type]+'</span></div>' +
          '<div class="row-actions" style="margin:0;">' +
            '<button class="btn ghost sm" data-keep-a="'+idx+'">Delete "'+escapeHtml(p.b.term)+'"</button>' +
            '<button class="btn ghost sm" data-keep-b="'+idx+'">Delete "'+escapeHtml(p.a.term)+'"</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
    box.querySelectorAll('[data-keep-a]').forEach(function(btn){
      btn.addEventListener('click', function(){ deleteDuplicate(pairs[+btn.dataset.keepA].b.id); });
    });
    box.querySelectorAll('[data-keep-b]').forEach(function(btn){
      btn.addEventListener('click', function(){ deleteDuplicate(pairs[+btn.dataset.keepB].a.id); });
    });
  });

  async function deleteDuplicate(id){
    try{ await db.collection('words').doc(id).delete(); showToast('Deleted.'); document.getElementById('findDupesBtn').click(); }
    catch(e){ showToast('Could not delete: ' + e.message); }
  }

  function renderTagToolSelects(){
    var tags = allTags();
    var optsHtml = tags.map(function(t){ return '<option value="'+escapeAttr(t)+'">'+escapeHtml(t)+'</option>'; }).join('');
    document.getElementById('renameTagFrom').innerHTML = optsHtml || '<option value="">No tags yet</option>';
    document.getElementById('deleteTagSelect').innerHTML = optsHtml || '<option value="">No tags yet</option>';
  }

  document.getElementById('renameTagBtn').addEventListener('click', async function(){
    var from = document.getElementById('renameTagFrom').value;
    var to = document.getElementById('renameTagTo').value.trim();
    if(!from || !to){ showToast('Pick a tag and enter a new name.'); return; }
    var affected = words.filter(function(w){ return (w.tags||[]).indexOf(from) !== -1; });
    if(affected.length === 0){ showToast('No words have that tag.'); return; }
    try{
      var CHUNK = 300;
      for(var i=0;i<affected.length;i+=CHUNK){
        var batch = db.batch();
        affected.slice(i,i+CHUNK).forEach(function(w){
          var seen = {};
          var newTags = (w.tags||[]).map(function(t){ return t===from ? to : t; }).filter(function(t){
            if(seen[t]) return false; seen[t]=true; return true;
          });
          batch.update(db.collection('words').doc(w.id), {tags:newTags});
        });
        await batch.commit();
      }
      showToast('Renamed "'+from+'" to "'+to+'" on '+affected.length+' word'+(affected.length===1?'':'s')+'.');
      document.getElementById('renameTagTo').value = '';
      renderTagToolSelects();
    }catch(e){ showToast('Could not rename: ' + e.message); }
  });

  document.getElementById('deleteTagBtn').addEventListener('click', async function(){
    var tag = document.getElementById('deleteTagSelect').value;
    if(!tag){ showToast('Pick a tag.'); return; }
    var affected = words.filter(function(w){ return (w.tags||[]).indexOf(tag) !== -1; });
    if(affected.length === 0){ showToast('No words have that tag.'); return; }
    try{
      var CHUNK = 300;
      for(var i=0;i<affected.length;i+=CHUNK){
        var batch = db.batch();
        affected.slice(i,i+CHUNK).forEach(function(w){
          var newTags = (w.tags||[]).filter(function(t){ return t !== tag; });
          batch.update(db.collection('words').doc(w.id), {tags:newTags});
        });
        await batch.commit();
      }
      showToast('Removed "'+tag+'" from '+affected.length+' word'+(affected.length===1?'':'s')+'.');
      renderTagToolSelects();
    }catch(e){ showToast('Could not remove tag: ' + e.message); }
  });

  async function renderMissedWords(){
    if(recentlyFetched('missed', 120000)) return;
    var box = document.getElementById('missedWordsArea');
    box.innerHTML = '<p class="help">Loading…</p>';
    try{
      var snap = await db.collection('quizAttempts').orderBy('createdAt', 'desc').limit(1000).get();
      var agg = {};
      snap.forEach(function(d){
        var a = d.data();
        if(!agg[a.wordId]) agg[a.wordId] = {term: a.term, wrong: 0, total: 0};
        agg[a.wordId].total++;
        if(!a.correct) agg[a.wordId].wrong++;
      });
      var rows = Object.keys(agg).map(function(id){ return agg[id]; })
        .filter(function(r){ return r.total >= 3; })
        .sort(function(a,b){ return (b.wrong/b.total) - (a.wrong/a.total); });
      if(rows.length === 0){ box.innerHTML = emptyStateHtml('Not enough quiz data yet', 'Shows up once a word has been attempted a few times across quizzes.'); return; }
      box.innerHTML = rows.slice(0, 30).map(function(r){
        var pct = Math.round(r.wrong/r.total*100);
        return '<div class="bar-row"><div class="lbl">'+escapeHtml(r.term)+'</div><div class="bar-track"><div class="bar-fill" style="width:'+pct+'%; background:var(--maroon);"></div></div><div class="count">'+pct+'%</div></div>';
      }).join('');
    }catch(e){ box.innerHTML = emptyStateHtml('Could not load', e.message); }
  }

  function renderMasteryBreakdown(){
    var box = document.getElementById('masteryBreakdownArea');
    var withData = words.filter(function(w){ return w.confLevels && Object.keys(w.confLevels).length; });
    var buckets = [
      {label:'0–20%', items:[]}, {label:'21–40%', items:[]}, {label:'41–60%', items:[]},
      {label:'61–80%', items:[]}, {label:'81–100%', items:[]}
    ];
    withData.forEach(function(w){
      var total = Object.keys(w.confLevels).reduce(function(s,k){ return s + Math.max(0, w.confLevels[k]||0); }, 0);
      if(total === 0) return;
      var weighted = Object.keys(w.confLevels).reduce(function(s,k){ return s + (parseInt(k,10) * Math.max(0, w.confLevels[k]||0)); }, 0);
      var pct = Math.round(weighted / (5*total) * 100);
      var idx = pct <= 20 ? 0 : pct <= 40 ? 1 : pct <= 60 ? 2 : pct <= 80 ? 3 : 4;
      buckets[idx].items.push({id: w.id, term: w.term, pct: pct});
    });
    var anyWords = buckets.some(function(b){ return b.items.length > 0; });
    if(!anyWords){ box.innerHTML = emptyStateHtml('No data yet', 'Fills in as people set a confidence level on words.'); return; }
    buckets.forEach(function(b){ b.items.sort(function(a,b2){ return a.term.localeCompare(b2.term); }); });
    box.innerHTML = '<div class="mastery-columns">' + buckets.map(function(b){
      return '<div class="mastery-col">' +
        '<div class="mastery-col-head">'+b.label+'</div>' +
        '<div class="mastery-col-count">'+b.items.length+' word'+(b.items.length===1?'':'s')+'</div>' +
        '<div class="mastery-col-list">' +
          (b.items.length
            ? b.items.map(function(it){ return '<button class="mastery-word-chip" data-mastery-word="'+it.id+'">'+escapeHtml(it.term)+'</button>'; }).join('')
            : '<span class="pending-meta">—</span>') +
        '</div>' +
      '</div>';
    }).join('') + '</div>';
    box.querySelectorAll('[data-mastery-word]').forEach(function(btn){
      btn.addEventListener('click', function(){ openWordPreviewModal(btn.dataset.masteryWord); });
    });
  }

  // ---------------- render all ----------------
  var renderTimer = null;
  function scheduleRender(){
    if(renderTimer) return;
    renderTimer = setTimeout(function(){ renderTimer = null; renderAll(); }, 16);
  }
  function isActive(name){ var v = document.getElementById('view-' + name); return !!(v && v.classList.contains('active')); }
  function renderAll(){
    renderStatStrip();
    if(isActive('home') && !drillOpen) renderHub();
    if(isActive('library')) renderLibrary();
    if(isActive('stats')) renderStats();
    if(isActive('roots')) renderRoots();
    if(isActive('revision') && !revSession) renderRevision();
  }

})();

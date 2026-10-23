# Chapter-app tools

These scripts make the chapter apps (`study-number-system.html`, `study-calendar.html`,
`study-clock.html`) from plain data files, so an app can be rebuilt or extended at any time.
Every app shares the page design of `study-trigonometry.html`; only the data block is swapped.
The engine and styles themselves live in `study-core.js` and `study-core.css`, which the
Maths, Reasoning, Physics, BNS, Voice and Narration pages load. A fix there reaches all of them.
After changing either file (or the main app's `app.js`), run `node tools/stamp.js`: it updates the
`?v=` stamps in the pages and `sw.js` so phones fetch the new copy.

```
tools/
  build_app.py        data → study-<name>.html
  index_app.js        app → study-search.json (search) + study-bank.json (Mistakes, mocks, phone app)
  check_app.js        opens the app in a browser and reports errors
  stamp.js            refreshes the ?v= stamps after app.js or study-core.* change
  lib/mathlib.py      maths helpers for writing questions (primes, factors, remainders, bases …)
  lib/idx.js          shared code for index_app.js
  apps/<name>/        one folder per app:
    app.py            file name, title, Hindi title, subject (maths / reasoning)
    lessons*.py       LESSONS – the lessons, made of blocks
    qb.py             QB – the question bank
    rest.py           HEAT, TILES, PAIRS, COVERS, FIND, APP – home screen, revise cards, rule finder
```

## Change an existing app

1. Edit the files in `tools/apps/<name>/` (e.g. add a question to `qb.py`).
2. `python3 tools/build_app.py <name>`
3. `node tools/index_app.js study-<name>.html <module id> <subject>`
   (module ids: `numbersystem`, `calendar`, `clock`; subjects: `maths`, `reasoning`)
4. `node tools/check_app.js study-<name>.html` – should end with “no errors”.
5. Bump `VERSION` in `sw.js` so phones and browsers pick up the new files (`stamp.js` does this for you
   when it changes a stamp).

## Make a new app

1. Copy the folder of the closest app (Calendar or Clock for reasoning, Number System for maths)
   to `tools/apps/<new-name>/` and edit `app.py`.
2. Replace the lessons, questions and revise data.
3. Run steps 2–5 above; for a new module add `--after <module id>` to place it in the bank.
4. Add the app to `index.html`: its entry in the `STUDY` list, and in the Maths or Reasoning section.

## Data at a glance

- **Lesson**: `{"id": "L1", "heat": 0–3, "title", "hi" (Hindi), "blocks": [...], "sum": [...]}`.
  Block kinds (`k`): `hot` (why it's asked), `p` (text), `formula`, `table`, `facts`, `tl`, `fig` / `figs` (SVG),
  `ex` (worked example with `steps` and `ans`), `trick`, `trap`, `link`, `q` (inline check).
- **Question** (`qb.py`): `[lesson id, question, [right answer, 3 wrong], explanation]`.
  The first option is the right one; the app shuffles them. The `Q()` helper in each `qb.py` refuses
  repeated or missing options, and can check the answer against a calculation.
- Question ids come from the question text, so **don't give two questions the same wording**, and
  rewording a question resets its Mistakes history. `build_app.py` stops if two questions match.

## Workbook apps: History and Computer Knowledge

The History pages, Computer Knowledge, Chemistry and the Static GK and Geography apps share one engine and look in
`tools/workbook/` (`head.html`, `engine.js`, `workbook.css`, `games.js`, `tail.html`, and `lib.js`, which loads a data
folder, checks it and writes a page). Each build also writes the shared files `study-workbook.js` (engine.js),
`study-workbook.css` (workbook.css) and `study-games.js` (the Lab games) at the site root; every page loads them, so
they download once and stay cached. Run `node tools/stamp.js` after a build so pages ask for the new copies.
Each family has its own data folder and build script. Edit the data, never the built pages.

A lesson is the usual object, plus a `story` block (`h`, and a one-line `key`) that opens it in plain words.
A question may carry an 8th field: the paper candidates reported it from (shown as a 📜 tag and a
"Reported in papers" filter). An app may have a `HEATMAP` (lessons × exams, 0–3, with the exam pattern and
tips), shown on Learn and as the first Revise tab. Plans are worked out from the lessons' `heat`, so a new
lesson joins the plans by itself.

### History (`tools/history/`)

The six History pages — `study-history.html` (the hub) and `study-history-ancient`, `-medieval`, `-modern`,
`study-art-culture`, `study-world-history`.

```
tools/history/
  apps.js        which lessons go in which app, in what order (and Modern India's parts)
  build.js       data → the six pages; stops on a missing lesson, a repeated question or bad options
  data/1x_*.js   lessons L1–L30          data/2x_*.js   their questions
  data/3x_*.js   newer lessons, with their questions
  data/40_revise.js   timeline, last-moment cards, number tiles (each tagged with its era)
  data/41_stories.js  the two-minute story that opens each of L1–L30, and the hub's app intros
  data/flags.json     which of the 2x questions are marked "repeatedly asked"
```

After a change: `node tools/history/build.js`, then for each subject app
`node tools/index_app.js <file> <id> gs` (ids `histancient`, `histmedieval`, `histmodern`, `artculture`,
`worldhist`; the hub has no questions and is not indexed), then `node tools/check_app.js <file>`.

### Computer Knowledge (`tools/computer/`)

```
tools/computer/
  build.js                    data + lab.js → the hub study-computer.html and one app per part in PARTS
                              (study-computer-hardware/-software/-internet.html); PARTS sets each part's lessons and order
  lab.js                      the Lab tab: decks built from the lesson tables (cmpRows) and a base-converter drill;
                              each part plays the decks whose lesson it holds
  data/10_hardware.js         Part 1: C1–C6 and C18 (output devices), with their questions, last-moment cards and tiles
  data/11_software_office.js  Part 2: C7, C19 (operating systems), C20 (file extensions), C8–C11, C21 (Access & DBMS)
  data/12_internet_network_security.js  Part 3: C12–C16, C22 (cyber law & Digital India), C17
  data/20_reported.js         questions candidates reported after a paper, each with that paper
  data/40_exam.js             heat map, exam pattern, tips, intro
```

Lesson ids never change (saved progress hangs on them), so a new lesson takes the next free id and is placed
in `PARTS` in build.js. The hub and the three parts share one saved state (`APP.shared` in the engine: one
localStorage key, `computer_knowledge_v1`), so answers, bookmarks, finished lessons and Lab XP made before the split
carry over; each page keeps its own plan in `S.plans[id]` and tags its mocks with its id. The hub holds every lesson's
title, summary, tricks and traps but no questions; `?lesson=C9` on the hub opens that lesson in its part. A question's 6th and 7th fields keep the options in the order written (for
"all of the above"): field 6 is the right answer's place, field 7 is 1. Questions with an 8th field came from a paper.

After a change: `node tools/computer/build.js`, then index the three parts as one module:
`node tools/index_app.js study-computer-hardware.html,study-computer-software.html,study-computer-internet.html computer gs`,
and `node tools/check_app.js <file>` for the hub and each part.

### Chemistry (`tools/chemistry/`)

```
tools/chemistry/
  build.js                    data + lab.js → study-chemistry.html
  lab.js                      the Lab tab: periodic table (all 118 elements and their exam facts), Find it!,
                              Memory Match and the quiz-game decks; scores are kept in the app's own state (S.lab)
  data/10_basics.js           K1–K5, with their questions, last-moment cards and tiles
  data/11_reactions.js        K6–K10
  data/12_carbon_life.js      K11–K14
  data/13_gases_env_nuclear.js  K15–K18
  data/40_exam.js             heat map, exam pattern, tips, intro
```

A page can add its own tabs: `APP.tabs` lists them, and a tab the engine does not know (Chemistry's `lab`) is drawn
by the page's script (`page.extra` in `writePage`) through `render<Tab>()`, with `leave<Tab>()` called on leaving it.

After a change: `node tools/chemistry/build.js`, `node tools/index_app.js study-chemistry.html chemistry gs`,
`node tools/check_app.js study-chemistry.html`.

### Static GK (`tools/gk/`)

Static GK and geography apps from one build. The first five (Books & Authors, Important Days, Defence, Awards & Honours,
Protected Areas) are listed in `APPS` in build.js; later ones keep their config in `tools/gk/<dir>/app.json`
(id, file, key, era, title, hi, parts) and are picked up automatically.

```
tools/gk/
  build.js                    APPS (file, storage key, parts) → study-books-authors, study-important-days,
                              study-defence, study-awards, study-protected-areas; pairQs() turns fact tables into questions
  <app>/data/1x_*.js          lessons, their tables and questions, last-moment cards and tiles
  <app>/data/40_exam.js       group, heat map, exam pattern, tips, intro
  <app>/lab.js                the Lab decks (built from lesson tables with labRows) for tools/workbook/games.js
```

A table row is `[prompt, answer, note, tag]`; tag `"p"` marks a repeatedly asked fact and `"p|SSC CGL · 7 Mar 2020 (Shift 2)"`
a question verified from that paper. The build stops on a lesson with fewer than 12 questions or a repeated question.

`tools/workbook/games.js` is the shared Lab engine (60-second decks, combos, XP ranks, Memory Match), set up by each
page's `LAB_CONF`; Chemistry uses it too.

After a change: `node tools/gk/build.js [app]`, `node tools/index_app.js study-<file>.html <id> gs`,
`node tools/check_app.js study-<file>.html`.

### Pictures (`visual.js`)

An app's pictures live beside its data, in `tools/gk/<app>/visual.js` (or `tools/history/visual/<id>.js`). The build runs it
with `place(lesson, where, ...blocks)` — where is `"start"`, `"end"`, `"story"` or the start of a block's title, and the
blocks go after it — `rows(lesson, table title)` (that table's rows as plain text, so the pictures follow the data),
`GEO` (`tools/workbook/geo.js`: places for the maps), `KIT` (`tools/workbook/visual-kit.js`: map projections, animated
arrows, numbered maps, state maps, photo galleries from table rows, `fig` for a drawn SVG and `gantt` for time bars) and
`fail`. It ends by setting `VISUAL = { mode: true | "world" | "rivers" | [...], VIS }`; "world" also loads `study-world.js`,
"rivers" `study-rivers.js`. The History apps keep theirs in `tools/history/visual/<app id>.js`; Chemistry and Computer in
`tools/chemistry/visual.js` and `tools/computer/visual.js`. VIS sets the photo cache key, the words used by the quizzes, the Map quiz rows
`[name, state, kind, note, lesson]` and the extra Revise tabs (`vphotos`, `vmap`).

The blocks are drawn by `study-visual.js`: `photos` (items `[Wikipedia title, name, caption]`), `indiamap`, `mapfig`
(pins `[label, lon, lat, note, "l" | "n"]` — "n" is a numbered badge — `marks` on states, `fill` {state id: colour} with a
`legend` [[colour, text]], `under` SVG drawn over the states, `vb` to zoom), `rivermap`, `worldfig` (`mark` country
names, pins, `legend`, `vb` to zoom), `statechart`, `tlfig` (rows `[year, label, note]`; becomes a vertical list when
the labels would crowd), `bars`, `calendar` (rows `[month, day, label]`), `cards`, `shelf` (book covers) and `info`
(ready HTML or SVG).

The hand-built pages take theirs from `tools/hand/<name>.visual.js` (same API): `node tools/workbook/apply-hand.js
sports|intlorgs|polity|economics|biology|space|physics|reports|schemes|appointments|ipr|bns|trigonometry|geometry|mensuration2d|mensuration3d|number-system|clock|calendar|census|voice|narration` checks every place against the page's lessons and writes
the blocks in, just before the boot (pages on `study-core.js`, like Physics: at the end of their own script, as
study-core.js itself draws the blocks and adds the quiz tabs). After any of these, run `node tools/stamp.js`.
The chapter apps built by `build_app.py` (Number System, Clock, Calendar) get theirs the same way: when
`tools/hand/<folder>.visual.js` exists, `build_app.py` runs apply-hand on the page it has just written, so a rebuild keeps the pictures.
The hand-built subject apps get their Plan and Lab tabs from `study-plan-lab.js`, which builds both from the page's own lessons
(the Lab: one game per lesson from its `table` and `facts` blocks, first column → second column and back when the answers are
unique; tables about the exam itself are skipped). `node tools/hand/plan-lab.js` adds it, with `study-games.js`, to the pages that
do not have it yet; then `node tools/stamp.js`.

**Reported in papers.** The hand-built subject apps and the `study-core.js` apps follow the workbook convention: a question row's
8th field (index 7) names the paper it was asked in, in the form `"SSC CGL · 13 Sep 2024 (Shift 1)"`. The engine shows it as a
📜 "Reported in" tag on the question (practice, lesson quiz, mock review) and adds a "Reported in papers" Practice filter and mock
source when the page has any. A shorter row is padded with fields 6 and 7 set to `0` (`""` for field 5 if it has none), which
keeps the shuffled option order. Tag a question only when a named paper (exam, date and shift) is shown to have asked the same fact
with the same answer, and record each tag in `tools/hand/reported.json` (`page`, `qtext`, `answer`, `src`, `url`, `note`) so it can
be audited; the rest stay exam-style practice. `index_app.js` carries the field into study-bank.json as `rp` (app.js already uses
`src` on a question for the question it was prepared from).

Grammar 100 has its own engine, so its pictures (13 rules) live in `tools/hand/grammar-figs.js`, which writes `RULE_FIG` and its CSS
into study-grammar-100.html and hooks `openRule()` to draw a rule's picture under its logic: `node tools/hand/grammar-figs.js`.
Its questions live in the page's `DATA` (each rule's `Q`, each unit's `test`), which `index_app.js` cannot read; after changing them,
`node tools/index_grammar.js` refreshes the `grammar` module in study-bank.json (`--check` only reports whether it is up to date).
A figure may animate with CSS or SMIL (`<animate>`); study-visual.js starts SMIL animations when the figure scrolls into view,
because Chrome leaves them still in figures drawn after the page has loaded.
Colours: draw with the theme variables (`var(--ink)`, `var(--accent)`, `var(--sheet)` …); text on an accent-coloured shape takes
`var(--on-acc)` (white in light mode, near-black in dark). As a safety net, study-visual.js measures every label of a figure
against the shapes painted behind it when the figure comes into view, and nudges any label under 3:1 contrast lighter or darker
(again whenever the theme changes).

For any of these, bump `VERSION` in `sw.js` (or run `node tools/stamp.js` if `app.js` changed).

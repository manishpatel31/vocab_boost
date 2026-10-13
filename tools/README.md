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

The History pages and Computer Knowledge share one engine and look in `tools/workbook/`
(`head.html`, `engine.js`, `tail.html`, and `lib.js`, which loads a data folder, checks it and writes a page).
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
  build.js                    data → study-computer.html
  data/10_hardware.js         C1–C6, with their questions, last-moment cards and tiles
  data/11_software_office.js  C7–C11
  data/12_internet_network_security.js  C12–C17
  data/20_reported.js         questions candidates reported after a paper, each with that paper
  data/40_exam.js             heat map, exam pattern, tips, intro
```

After a change: `node tools/computer/build.js`, `node tools/index_app.js study-computer.html computer gs`,
`node tools/check_app.js study-computer.html`.

For either, bump `VERSION` in `sw.js` (or run `node tools/stamp.js` if `app.js` changed).

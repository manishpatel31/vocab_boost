# Chapter-app tools

These scripts make the chapter apps (`study-number-system.html`, `study-calendar.html`,
`study-clock.html`) from plain data files, so an app can be rebuilt or extended at any time.
Every app shares the page design of `study-trigonometry.html`; only the data block is swapped.
The engine and styles themselves live in `study-core.js` and `study-core.css`, which the
Maths, Reasoning, Physics, BNS, Voice and Narration pages load. A fix there reaches all of them.
After changing either file, bump `?v=` where the pages load it (and in `sw.js`) so phones fetch the new copy.

```
tools/
  build_app.py        data → study-<name>.html
  index_app.js        app → study-search.json (search) + study-bank.json (Mistakes, mocks, phone app)
  check_app.js        opens the app in a browser and reports errors
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
5. Bump `VERSION` in `sw.js` so phones and browsers pick up the new files.

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

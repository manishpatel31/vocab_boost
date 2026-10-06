# पाठShala — SSC study app

A free, long-term study app for all SSC exams (CGL Tier 1 & 2, CHSL, CPO, Steno).
Vocabulary, General Studies and Maths in one place, with one daily goal, one streak and progress that syncs across devices.

**Live site:** https://manishpatel31.github.io/vocab_boost/

## What's inside

| Section | What it does |
|---|---|
| **Home** | Today's goal, streak, revision due, and every subject as a card |
| **Vocab** | Word of the day, all words, Spelling Bank, Roots, Add words, Present, AOD, Audio |
| **Practice** | Mistakes book, Mixed mock (English + Maths + Reasoning + GS), Vocab quiz, Revision, Exam tomorrow |
| **Progress** | Study points, streak, per-subject progress |
| **Search** | One box that searches lessons and notes across every mini app |

## Mini apps (23)

Each mini app is one self-contained page (`study-<name>.html`) with lessons, a quick-revise tab and practice questions. About 7,000 questions in total.

**English:** Grammar 100, `study-voice` (Active & Passive Voice), `study-narration` (Narration / direct–indirect speech) — both built around the SSC CGL pattern

**General Studies**
- Polity: `study-polity`, `study-bns-bnss-bsa` (BNS · BNSS · BSA: 15 lessons on the three new criminal laws from recent SSC questions — numbers and dates, new offences, FIR, arrest, bail and timelines, electronic evidence, section finder and drills)
- Economy: `study-economics`, `study-ipr-plans` (IPR & Five Year Plans), `study-govt-schemes`
- Science: `study-physics`, `study-biology`
- Current affairs & static GK: `study-appointments`, `study-reports-indices`, `study-intl-orgs`, `study-sports`, `study-space`, `study-census`
- Culture: `study-festivals`, `study-folk-dances`

**Reasoning:** `study-calendar` (Calendar: 8 lessons — leap years, odd days and the century rule, the code method for any date, given-day and days-later questions, year shifts, repeating calendars and counting weekdays — with 114 questions checked against a real calendar), `study-clock` (Clock: 7 lessons — hand speeds, angle at any time, time for a given angle, how often the hands coincide or meet at right angles, mirror and water images, fast and slow clocks, directions and clock strikes — with 83 computed questions)

**Maths:** `study-maths-formulas` (Formula Book: every formula and key concept in 24 chapters, with tricks, traps, exam heat map and a last-hour sheet — revision only, no questions), `study-number-system` (Number System: 13 lessons — primes, unit digits, factors, divisibility, remainders and theorems, trailing zeros, digit counting, reversed digits, bases and series sums — with 204 computer-checked questions), `study-geometry`, `study-mensuration2d`, `study-mensuration3d`, `study-trigonometry`

## Files

| File | Purpose |
|---|---|
| `index.html` | The main app (Home, Vocab, Practice, Progress, Search, sign-in) |
| `study-*.html` | The mini apps. Loaded inside `index.html`; each also works on its own |
| `study-bank.json` | Every practice question, tagged by app and lesson. Used by Mixed mock, Mistakes book, wallpaper and the phone app |
| `study-search.json` | Lesson text index used by Search |
| `wallpaper.html` | Live desktop wallpaper (works with Lively Wallpaper) showing words and GS/Maths fact cards |
| `sw.js` | Service worker: offline use and caching |
| `manifest.json`, `*.png` | Install-to-home-screen settings and icons |

> **Please don't rename, move or delete these files.** The app, the offline cache, search and the Android companion all look for them at these exact names and paths.

## Features

- Phone and PC layouts, Paper and Indigo themes, each with Light / Dark / Auto
- Opens instantly after the first visit, even on slow mobile data: the app, its libraries and fonts load from the saved copy and update in the background (a “new version is ready” bar offers a reload); every mini app, the question bank and search are saved for offline use once the app is idle; installable on a phone
- Progress saved to your account (Firebase) and synced across devices
- One unified daily goal and streak across vocab and all study apps
- Study tracker: every visit to a mini app is saved as a session (active time, questions answered, score), with score trends, time estimates, last visited / studied / completed dates and a reminder to revise each app every 15 days (10–30, adjustable)
- Tasks: a to-do list — type a task and press Enter; each task needs 1, 2 or 3 ticks to finish (do it, then revise it). Shortcuts for #tags, ! important and due dates (today, tomorrow, a weekday), app names and chapter names (or "formula book chapter 3") become links to the app and to that chapter, editing a task re-reads its shortcuts, revision-due apps are suggested, a 25-minute focus timer adds a tick when it ends, Today / Upcoming / Done lists, undo delete, synced across devices
- Deep links: Search results open the exact lesson
- Companion Android app "Vocab Lock" shows words and GS/Maths facts on the lock screen

## Adding a new mini app

1. Build the page as `study-<name>.html` in the same format as the existing ones (lessons, quick-revise, practice, progress synced to the account).
2. Add its questions and lesson text to `study-bank.json` and `study-search.json`.
3. Register it in `index.html` (the `STUDY` list and name map) so it gets a card on Home.
4. Add the file to the `WARM` list in `sw.js` and bump `VERSION` (e.g. `shabd-v15` → `shabd-v16`) so phones pick up the change.
5. Commit and push. GitHub Pages updates in a minute or two.

## Hosting & notes

- Hosted on GitHub Pages straight from the `main` branch root.
- The Firebase config inside `index.html` is meant to be public. Data is protected by Firestore security rules, not by hiding the config.
- The Android project lives in a separate **private** repository because it contains the app signing key.

*Made for SSC aspirants. Questions are for practice; always check current facts against official sources.*

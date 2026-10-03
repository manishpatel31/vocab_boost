# पाठShala — SSC study app

A free, long-term study app for all SSC exams (CGL Tier 1 & 2, CHSL, CPO, Steno).
Vocabulary, General Studies and Maths in one place, with one daily goal, one streak and progress that syncs across devices.

**Live site:** https://manishpatel31.github.io/vocab_boost/

## What's inside

| Section | What it does |
|---|---|
| **Home** | Today's goal, streak, revision due, and every subject as a card |
| **Vocab** | Word of the day, all words, Spelling Bank, Roots, Add words, Present, AOD, Audio |
| **Practice** | Mistakes book, Mixed mock (English + Maths + GS), Vocab quiz, Revision, Exam tomorrow |
| **Progress** | Study points, streak, per-subject progress |
| **Search** | One box that searches lessons and notes across every mini app |

## Mini apps (20)

Each mini app is one self-contained page (`study-<name>.html`) with lessons, a quick-revise tab and practice questions. About 5,100 questions in total.

**English:** Grammar 100

**General Studies**
- Polity: `study-polity`, `study-bns-bnss-bsa` (BNS · BNSS · BSA)
- Economy: `study-economics`, `study-ipr-plans` (IPR & Five Year Plans), `study-govt-schemes`
- Science: `study-physics`, `study-biology`
- Current affairs & static GK: `study-appointments`, `study-reports-indices`, `study-intl-orgs`, `study-sports`, `study-space`, `study-census`
- Culture: `study-festivals`, `study-folk-dances`

**Maths:** `study-geometry`, `study-mensuration2d`, `study-mensuration3d`, `study-trigonometry`

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
- Works offline once opened; installable on a phone
- Progress saved to your account (Firebase) and synced across devices
- One unified daily goal and streak across vocab and all study apps
- Deep links: Search results open the exact lesson
- Companion Android app "Vocab Lock" shows words and GS/Maths facts on the lock screen

## Adding a new mini app

1. Build the page as `study-<name>.html` in the same format as the existing ones (lessons, quick-revise, practice, progress synced to the account).
2. Add its questions and lesson text to `study-bank.json` and `study-search.json`.
3. Register it in `index.html` (the `STUDY` list and name map) so it gets a card on Home.
4. Add the file to the list in `sw.js` and bump the cache version (e.g. `shabd-v10` → `shabd-v11`) so phones pick it up.
5. Commit and push. GitHub Pages updates in a minute or two.

## Hosting & notes

- Hosted on GitHub Pages straight from the `main` branch root.
- The Firebase config inside `index.html` is meant to be public. Data is protected by Firestore security rules, not by hiding the config.
- The Android project lives in a separate **private** repository because it contains the app signing key.

*Made for SSC aspirants. Questions are for practice; always check current facts against official sources.*

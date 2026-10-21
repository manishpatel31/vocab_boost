# Prompt: turn any study material into a पाठShala mini app

Use this to turn a PDF, a PPT, a YouTube transcript, class notes or a book chapter into a mini app.

1. Open any AI chat, such as ChatGPT, Gemini, Claude or Copilot.
2. Attach the file or paste the text.
3. Paste everything between the two `=====` lines below.
4. Copy the AI's whole answer and give it to Claude in this repo with the line **"Build a mini app from this"**.

Long files: the AI may stop part-way. Type `continue` until it prints `=== END OF EXTRACT ===`, then paste every part together.

=====================================================================

You are preparing study material for an SSC / Railway / state-exam preparation app. The app is used by candidates in India, many of whom have never studied this subject before. I have attached (or pasted) a source: a PDF, PPT, YouTube transcript, notes or a book chapter.

Your job is to extract **everything useful** from it into the exact structure below. A developer will convert your output into an app automatically, so follow the format strictly.

## Rules

1. **Do not miss content.** Go through the source from start to end. Every fact, date, name, number, definition, list, table, example, mnemonic and shortcut in the source must appear somewhere in your output. If the source is long, work part by part and do not summarise it away.
2. **Do not make things up.** Facts must come from the source. Where you add something from your own knowledge (a missing fact, a story, a trick, a question), mark it `[ADDED]`. Where you are not sure a fact is right, mark it `[CHECK]`.
3. **Keep the source's facts but rewrite in simple English.** Write short sentences that a Class 10 student understands, and explain every technical term the first time it appears. Add the Hindi name in brackets where one is commonly used, e.g. `Fundamental Rights (मौलिक अधिकार)`.
4. **Exam focus.** Note what SSC CGL, CHSL, MTS, CPO, RRB NTPC, Group D and state exams usually ask from each part. Use your own knowledge here and mark it `[ADDED]`.
5. **Past-year questions (PYQs).** Mark a question as a PYQ only if the source itself says which exam and year it came from. Copy that label exactly, e.g. `SSC CGL 2023 · 14 Jul shift 2`. Never guess an exam or year.
6. **Output plain text in the format below.** Do not write code, JSON, tables drawn with box characters or long introductions. Use `|` to separate columns.

## Output format

Start with this header, once:

```
=== SOURCE ===
Title of the source:
Type: (PDF / PPT / YouTube transcript / notes / book)
Author / channel / publisher (if shown):
Subject: (e.g. Polity, Geography, Physics, Reasoning)
Suggested app name: (English) | (Hindi)
Exams it suits: (e.g. SSC CGL, CHSL, RRB NTPC)
What the source covers in one line:
What it does NOT cover that the exam asks (your view, [ADDED]):
```

Split the content into **lessons** of about 20–40 minutes of study each, in a sensible learning order. Usually there are 5–20 lessons. Group them into 2–4 **parts** if the subject is large. Then give each lesson in this exact layout:

```
=== LESSON 1 ===
Part: (e.g. Part 1 · The Constitution)
Title: (English) | (Hindi)
Exam weight: 3   (3 = asked in almost every paper, 2 = often, 1 = sometimes)
Exam weight by exam: CGL 3 | CHSL 2 | NTPC 2   (your estimate, [ADDED])

--- WHY IT MATTERS ---
2–3 sentences: what the exam asks from this lesson, the exact kind of question.

--- STORY ---
3–5 short paragraphs that explain the lesson to a complete beginner as a story or with an everyday example (a kitchen, a cricket match, a family, a train journey). After reading it the student should understand the idea before seeing a single fact.
Remember this: one line that sums up the lesson.

--- FACTS: (heading) ---
term | fact
term | fact
(One block per topic. Two columns only. Repeat with a new heading as often as needed.)

--- TABLE: (heading) ---
Column 1 | Column 2 | Column 3 | ...
row | row | row | ...
(Use for comparisons, lists with several attributes, article numbers, schedules, etc. Every row must have the same number of columns as the header.)

--- TIMELINE: (heading) ---
year or date | what happened
(Only if the lesson has dates. In time order.)

--- EXPLANATION ---
Plain paragraphs for anything that needs reasoning, a process, a cause and effect, or a worked example. For maths or reasoning, write each method step by step with one solved example.

--- TRICKS ---
- Mnemonics, short forms, memory hooks, patterns and shortcuts. Keep the ones in the source and add your own [ADDED]. Every trick must say what it decodes to.

--- TRAPS ---
- Things candidates confuse or get wrong: similar names, swapped dates, "first" vs "first commercial", exceptions to a rule, wrong options that examiners love.

--- SUMMARY ---
- 4–8 one-line points: the lesson in a nutshell. Plain text, no formatting.

--- QUESTIONS ---
At least 25 multiple-choice questions for this lesson, from easy to hard, covering every fact block. Use exactly this layout for each:

Q: question text
A: the correct answer
W: wrong option 1 | wrong option 2 | wrong option 3
E: one or two lines explaining why the answer is right and why the tempting wrong option is wrong
Tag: (one of: PYQ <exam label exactly as in the source> / often asked / from source / [ADDED])

(Rules for questions: four different options; wrong options must be believable and from the same category as the answer; no "all of the above" or "none of the above" unless the source uses them; no two questions with the same wording; include statement-type questions ("Which of the following is/are correct?"), match-the-following written as one question, and "odd one out" where they suit the subject.)
```

After all the lessons, give these once:

```
=== LAST-MOMENT REVISION ===
(6–15 cards. Each card is a heading and 6–12 short "term | fact" lines that a student can read in the 10 minutes before the exam.)

Card: (heading)
term | fact
term | fact

=== QUICK TILES ===
(25–60 tiny flash facts: a number, date or short term, and what it means. One per line.)
value | meaning
e.g. 1950 | Constitution came into force (26 January)

=== EXAM PATTERN ===
(For each exam that asks this subject: where it sits in the paper, number of questions, marks, negative marking. [ADDED] if not from the source.)
Exam | Section | Questions | Marks | Negative marking

=== HOW TO STUDY THIS SUBJECT ===
- 4–6 tips: what to learn first, what to revise daily, what carries the most marks, common mistakes.

=== GAPS AND DOUBTS ===
- Anything in the source that looked wrong, outdated (old data, changed rules, renamed schemes) or unclear.
- Important exam topics the source did not cover.

=== END OF EXTRACT ===
```

If you run out of space, stop at the end of a lesson, write `=== CONTINUED IN NEXT PART (next: LESSON n) ===`, and carry on from that lesson when I type `continue`. Do not restart or repeat finished lessons.

Begin now with the header.

=====================================================================

## Notes for the build (for Claude)

The extract maps onto the workbook format in `tools/workbook/`:

| Extract | Workbook field |
|---|---|
| Each LESSON | `LESSONS.push({ id, g, heat, title, hi, part, blocks, sum })` |
| Exam weight | `heat` |
| Exam weight by exam | `HEATMAP.rows[i].v` |
| WHY IT MATTERS | the `hot` block |
| STORY / Remember this | the `story` block, with its `key` |
| FACTS | a `facts` block |
| TABLE | a `table` block |
| TIMELINE | a `tl` block |
| EXPLANATION | a `p` block |
| TRICKS | a `trick` block |
| TRAPS | a `trap` block |
| SUMMARY | `sum` |
| QUESTIONS | `QB` rows `[lesson, q, [A, W, W, W], E, flag, "", "", src]` |
| LAST-MOMENT REVISION | `LASTMOMENT` |
| QUICK TILES | `TILES` |
| EXAM PATTERN and HOW TO STUDY | `HEATMAP.pattern` and `HEATMAP.tips` |

How the QUESTIONS tags map:

- `PYQ …` gives `flag "p"` and puts the exam label in `src`.
- `often asked` gives `flag "p"`.
- Every other tag gives an empty flag.

Before building, check every `[CHECK]` and `[ADDED]` fact and each item under GAPS AND DOUBTS. Then copy `tools/computer/` as the template: one data folder, one `build.js`, and then the registration steps in `tools/README.md`.

# Cursor Solution Fundamentals — paste-ready prompt

How to use this (for you, not for the AI):

This is a **later** job. Run it only after the Solutions Finder has already written `solution-*.md` files inside the `wb-rec-*` folders.

You paste **one prompt, one time**, into **one** new Cursor Agent chat. Stop there.

1. Open a **new Cursor Agent chat** with the `aoo-static-gh` folder available.
2. Copy **everything from the line `COPY FROM HERE` down to `COPY TO HERE`**.
3. Paste it as your only message. Do not add extra instructions.
4. Let that one agent run until these exist under `super-review-1/`:
   - `FUNDAMENTAL-SOLUTIONS.md`
   - `_solution-fundamentals-ledger.json`

This job does not find new solutions. It does not reopen recordings. It does not fix the website. It only boils every existing solution / suggestion / idea down to the **general human thought** underneath it — in plain English, with no website leftovers.

---

COPY FROM HERE

You are Cursor Agent in Agent mode. You are an expert at naming the **real constructive thought** underneath many specific solutions, suggestions, and ideas.

This message is the only prompt the human will give you. There is no second prompt. You must do the whole job from this one message.

You have exactly one job: read every existing `solution-*.md` under the review folders, boil each one down to the **fundamental solution / suggestion / idea** — what they were really saying people should get, feel, or be treated as — and write those boiled thoughts in **plain everyday English**, **at most 3 sentences each**. Do nothing else. Do not invent new ideas. Do not say whether an idea is right or wrong. Do not reopen recordings. Do not rewrite the original solution files. Do not fix the website.

## Why this work exists (do not skip; this is the quality bar)

The `solution-*.md` files already say what to do **on this website**, with page names, button names, borrowed product names, and “show X here / rename Y / put Z below.” That is too local to think with.

The founder needs one page where each entry is the **same kind of good idea you would recognize on any product**, even if you had never seen this website, never heard the product names, and were given no other context. If the sentence only makes sense after you know which page it was on, you have not boiled far enough.

Many solution files are the **same fundamental thought** said on different screens or in different minutes. Those must become **one** entry. Keeping them separate because the page names differ is a failure.

## Fresh start

Solution-fundamentals may have been attempted earlier. Ignore prior output.

Treat as non-evidence and do not read them for conclusions:

- any existing `FUNDAMENTAL-SOLUTIONS.md`
- any existing `_solution-fundamentals-ledger.json`
- this prompt file itself
- `PROMPT-cursor-solution-finder.md`
- `PROMPT-cursor-issue-finder.md`
- `PROMPT-cursor-theme-*.md`
- any `issue-*.md`
- any raw recorder file (`audio.*`, `events.json`, screenshots, `viewer.js`, etc.)
- the live website HTML / CSS / JS

**Allowed input — open only these:**

- every `solution-*.md` under `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/wb-rec-*/`
- each folder’s `_solution-coverage-ledger.json` **only** to know `solution_count`, `solutions_written`, and `zero_solution_reason` (skip list)

That is the whole universe.

## Skip rule (mandatory)

**Exclude every folder with zero solutions.**

If `_solution-coverage-ledger.json` says `solution_count: 0`, or the folder has no `solution-*.md` files, **do not invent an entry for that folder**. Record the folder name and the one-line `zero_solution_reason` in the ledger under `folders_skipped_zero_solutions`. Do not invent a fundamental from silence.

Known zero-solution folders from the completed solutions run (still verify yourself; do not trust this list alone):

- `wb-rec-260815-1928`
- `wb-rec-260815-1950`
- `wb-rec-260815-2201`

If a folder has solutions, every `solution-*.md` in it must be accounted for: either as its own fundamental, or merged into a shared fundamental with other sources.

## What you are extracting

For each solution file (and for each merge group), answer only this:

**What was the constructive thought at the root — not which screen, not which button, not whether it is correct, not the exact wording they used for this site.**

Strip:

- page names, button names, product names, company names, URLs
- this website’s special words
- “this is right / that is correct / they should ship this”
- expert talk (design words, finance words, tool words)
- local placement talk (“put it under Adjust eligibility”, “on Explore banks”)

Keep:

- the **kind of good thing** in ordinary life (be honest about price, keep choices that can all be true on at once, do not surprise people later, help people save money with real tips, speak like someone on their side)
- the **kind of user feeling** they wanted (trust, ease, no friction, no fooling, clear consequence of filling something in)
- the **kind of company stance** they wanted (stand with the customer, do not hype, do not hide what changes the answer)

The test: cover the original solution title with your hand. Read only your 1–3 sentences. A stranger who has never seen this website must still understand the idea. If they would need the page name to get it, rewrite.

## What this job is not

- Not a judgment of which idea is best.
- Not a “this is correct / that is wrong” list.
- Not a website changelog.
- Not a new solutions finder (do not reopen audio, clicks, or screenshots).
- Not a theme / issue job.
- Not a place to invent your own product advice.

If a solution file only restates a defect with no constructive direction, that should not have been a solution file — but if it exists, boil only the constructive part, or note in the ledger that it had no boilable constructive thought and skip the entry. Do not invent a good idea to fill the gap.

## Hard laws

1. **Boil, then merge.** Same fundamental idea across many `solution-*.md` files becomes **one** entry. Different fundamentals stay separate even if they lived in the same minute.
2. **At most 3 short sentences** per fundamental. Prefer 2. One is enough when the root is one idea. Never a fourth sentence. Never a bullet list inside an entry.
3. **No jargon.** If a school student would have to look the word up, do not use it. Forbidden unless rewritten in ordinary words: hero, CTA, UX, UI, affordance, eligibility, dropdown, accordion, checkbox, viewport, layout, copy, footer, disclaimer (as a legal word), CIBIL, NBFC, EMI, ROI, MCLR, BPLR, scheme, concession, overdraft, tenure, co-applicant, intelligence layer, product principle, borrowed pattern. Prefer: form, list, button, extra questions, money, name, choice, tip, honesty, trust, surprise, help.
4. **No website-specific leftovers.** Do not name this company, this product, this page, this button, this recording, or this review. Do not say “on the home page” or “in Explore banks.” The sentence must stand alone.
5. **Do not write “this is right / that is correct.”** Do not grade the idea. Do not say should/must as a verdict on truth. You may say what the thought **is** (“Tell people plainly whether a price is high or low”) without saying “this is the correct product strategy.”
6. **Do not add facts** that are not in the solution files. Boil. Do not invent a nicer-sounding idea.
7. **Do not suggest owners, timelines, or code.** Do not edit `solution-*.md`. Do not edit the website. Do not commit.
8. **Same evidence → same boiled sentences and same merge groups.** Be deterministic. Everyday words. Short. Concrete.
9. **Every non-zero solution file must appear** in the source map of exactly one fundamental entry. No orphans. No double-counting across two fundamentals unless you truly split two distinct directions from one file (rare; prefer one file → one fundamental or one merge group).

## How to boil (do this for every solution file, then merge)

1. Inventory all `solution-*.md` paths. Skip zero-solution folders.
2. For each file, read far enough to name the root: the human summary (first ≤4 lines), `pinpoint`, `for_topic`, `kind`, and **Exact solution (or idea…)**. Read **Why they said it that way** only if the root is still unclear. Do not read Evidence-by-file dumps unless needed to resolve a conflict.
3. Ask: **what good thing for a person were they aiming at?** Not the control’s name. Not the page. The thought.
4. Name it as if it could guide a ticket app, a shop, a bank form, or a government site — because at the root it could.
5. Write 1–3 sentences. Then delete every proper name and every “this is correct.”
6. Read it out with no other context. If it still needs this website to make sense, boil again.
7. Check it is not a local fix in disguise. “Show Adjust eligibility as columns” is local. “Questions that change the answer should stay in view, already filled, so people are not surprised later” is fundamental.
8. After all files are boiled, **merge** entries whose fundamental thought is the same. Keep one best 1–3 sentence block. List every source path under it.
9. Split only when two thoughts are truly different (example: “be honest about whether a price is low” is not the same as “never call the product AI”).

## Bad vs good (copy this standard)

**Solution about keeping extra form questions visible and already filled**

- Bad (this website): Keep Adjust eligibility open as pre-filled columns on Explore banks.
- Bad (judgment): This is the correct form layout.
- Good: Questions that change the answer should stay in view and already filled in. People should see that filling them matters, and they should not get a surprise later.

**Solution about Google Flights honesty vs Amazon sale hype**

- Bad (this website): Add Google Flights-style honesty on Explore banks rates, not Amazon Prime Day hype.
- Bad (judgment): Google Flights is right; Amazon is wrong.
- Good: Tell people plainly whether a price looks low, high, or unlikely to fall. Do not use fake urgency that makes a fool of them.

**Solution about Apple/Amazon multi-select filters**

- Bad (this website): Bank type All / Public / Private should be checkboxes like Apple and Amazon.
- Bad (judgment): Checkboxes are the correct pattern.
- Good: When more than one choice can be true at once, let people keep more than one on. Do not force them to turn the others off.

**Solution about “we suggest hacks” / lawyers for you**

- Bad (this website): Eighth unique point on Explore banks — we suggest you hacks; we are lawyers who squeeze the bank.
- Bad (judgment): Hacks are the correct product.
- Good: People want clear tips that can save them a lot of money, not only a list of offers. Stand on their side and help them get a better deal.

**Solution about never mentioning AI**

- Bad (this website): Never say AI on the Explore banks intelligence copy.
- Bad (judgment): Not saying AI is correct branding.
- Good: Show the help as a normal product recommendation. Do not label it as machine magic, because that can break trust.

**Solution about maybe trimming homepage story sections**

- Bad (this website): Maybe cut some of the four homepage story sections.
- Bad (judgment): Fewer sections is correct.
- Good: If several blocks repeat the same strength, consider fewer blocks so the story stays clear and does not feel long for no reason.

These goods are the **kind** of writing required. They are not the required wording. Write from the files.

## Merge rules (mandatory)

Merge when the boiled root is the same, even if:

- the page differed
- the button differed
- one file called it an idea and another called it a proposed change
- they continued the talk across folders

Do **not** merge when only the mood is similar but the thought differs. Example:

- “Keep choices that can all be true on together” ≠ “Explain what each choice costs you”
- “Do not surprise people later” ≠ “Do not coach people to game the form”

When you merge, the sentences must still fit every source file. If they do not, you merged too far — split.

## How Cursor must execute

This job is medium. **Do it yourself in this chat.** Do not launch Task children. Do not ask the human to confirm.

1. Inventory
2. Skip zero-solution folders
3. Read and boil every `solution-*.md`
4. Merge same fundamentals
5. Write the human file and the ledger
6. Verify

Forbidden: asking the user to paste anything; opening issue files or recordings; editing solution files; editing the website; committing; inventing entries for empty folders.

### Step 1 — Inventory

Run:

```bash
find "/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1" -path '*/wb-rec-*/solution-*.md' | sort
```

Also list every `wb-rec-*` folder and read each `_solution-coverage-ledger.json` only for `solution_count` / `zero_solution_reason` / `solutions_written`.

If `find` returns **zero** solution files, stop. Reply only: Solutions Finder output is missing; run that job first. Do not invent fundamentals.

Keep the full path list of solution files. That list is the **source universe**. Every path must appear in exactly one fundamental’s source map (unless you logged a rare “no boilable constructive thought” skip with evidence).

### Step 2 — Read and boil

For each solution file, in folder time order then `solution-01`, `solution-02`, …: boil using the laws and the procedure above.

### Step 3 — Merge

Group boiled drafts by fundamental sameness. Produce one final entry per group.

### Step 4 — Write

Write two files:

1. Human deliverable:

`/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/FUNDAMENTAL-SOLUTIONS.md`

2. Machine ledger:

`/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/_solution-fundamentals-ledger.json`

### Human file shape (mandatory)

First lines after the title: **at most 4 short human lines**. No jargon. No tool names. No JSON. Those 4 lines must say: every discussed solution/suggestion/idea is restated as the general thought underneath it; same thoughts are merged; empty folders were skipped; readable with no other context.

Then:

```markdown
# Fundamental solutions, suggestions, and ideas

<source count> source solution files used.
<zero-folder count> folders skipped because nothing was discussed.

## 1. <Plain title of the fundamental thought>

<source count> source file(s)

<1 to 3 short sentences in everyday English.>
```

Rules for the body:

- Number entries `1`, `2`, `3`… in a stable order: first by the earliest source folder time, then by earliest `solution-NN` inside that merge group.
- The title is plain English of the fundamental thought, not a website filename.
- Do not put source paths in the human sentences. Source paths belong only in the ledger (and optionally a short index section at the end of the human file).
- Do not add “how to build this,” owners, or priority.
- Do not say the idea is right or wrong.

Optional short index at the end of the human file (allowed):

```markdown
## Source map

### 1. <same title>
- wb-rec-.../solution-....md
- wb-rec-.../solution-....md
```

If you include the Source map, keep it path-only. No new explanations.

### Ledger shape (mandatory)

```json
{
  "job": "solution-fundamentals",
  "source_solution_files_total": 0,
  "source_solution_files_used": [],
  "folders_skipped_zero_solutions": [
    {"folder": "wb-rec-...", "zero_solution_reason": "..."}
  ],
  "fundamentals_count": 0,
  "fundamentals": [
    {
      "id": "fund-01",
      "title": "",
      "sentences": "",
      "source_files": ["wb-rec-.../solution-....md"],
      "source_count": 0
    }
  ],
  "orphans_or_unboilable": [],
  "solution_files_left_untouched": true,
  "website_left_untouched": true
}
```

`source_solution_files_used.length` must equal the `find` count of `solution-*.md` minus any rare `orphans_or_unboilable` entries you documented. Prefer zero orphans.

Every `solution-*.md` from non-zero folders must appear in exactly one `fundamentals[].source_files` list, or in `orphans_or_unboilable` with a one-line reason.

### Step 5 — Verify before you reply

- `FUNDAMENTAL-SOLUTIONS.md` exists
- `_solution-fundamentals-ledger.json` exists
- every `solution-*.md` from non-zero folders is mapped exactly once
- zero-solution folders are listed as skipped, with reasons, and have **no** fake fundamentals
- every human entry is 1–3 sentences (count them)
- no entry names this website, its pages, or its buttons
- no entry says “this is correct / this is right / the right way”
- no jargon from the forbidden list unless rewritten in ordinary words
- first ≤4 lines are human, no JSON
- merge groups make sense: same root thought, not only same mood
- you did not open `issue-*.md` or recorder files
- you did not edit existing `solution-*.md`
- you did not edit the website

Fail any of those → rewrite the files before you reply. Do not explain the failure in a long chat. Fix it.

## Reply to the user with only

- how many source solution files were used
- which folders were skipped for zero solutions (name + one-line reason)
- how many fundamental entries after merging
- confirmation that `FUNDAMENTAL-SOLUTIONS.md` and `_solution-fundamentals-ledger.json` are written
- the list: entry number + plain title + the boiled 1–3 sentences (so they can read it in chat too)

Do not paste the original solution bodies.
Do not paste JSON.

COPY TO HERE

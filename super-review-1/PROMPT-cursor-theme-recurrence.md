# Cursor Theme Recurrence — paste-ready prompt

How to use this (for you, not for the AI):

This is a **later** job. Run it only after the Theme Grouper has already written files in `super-review-1/themes/`.

You paste **one prompt, one time**, into **one** new Cursor Agent chat. Stop there.

1. Open a **new Cursor Agent chat** with the `aoo-static-gh` folder available.
2. Copy **everything from the line `COPY FROM HERE` down to `COPY TO HERE`**.
3. Paste it as your only message. Do not add extra instructions.
4. Let that one agent run until `super-review-1/themes/_theme-recurrence.md` exists.

This job does not find issues. It does not group issues. It does not reopen recordings. It only ranks the themes that already exist.

---

COPY FROM HERE

You are Cursor Agent in Agent mode. You are an expert Theme Ranker.

This message is the only prompt the human will give you. There is no second prompt. You must do the whole job from this one message.

You have exactly one job: read every theme file already written by the Theme Grouper, count **how many times that same type of issue was discussed**, and write **one** ranking file, sorted **highest to lowest**, with **the ranking metadata** — why each theme got that count and that place. Do nothing else. Do not fix the website. Do not suggest fixes. Do not invent themes. Do not invent issues. Do not reopen recordings. Do not reread `issue-*.md`. Do not regroup.

A number without the decision is incomplete. For every rank, the file must show: what you counted, what you refused to count (continuations), what beat what, and whether YAML and body disagreed.

## Confirm the count (do not get this wrong)

**Times discussed** = number of **threads** in that theme.

- One complaint continued in the next recording because the clip ended = **1**, not 2.
- Two separate complaints of the same kind (same type of thing wrong) = **2**.
- Do **not** sort by `issue_file_count`. That number is how many issue files were written, which inflates a single continued talk.

If a theme file’s YAML `thread_count` disagrees with how many thread subsections are actually in the body, **the body wins**. Record the disagreement in the ledger. Do not silently pick the YAML.

## Strict input lock (non-negotiable)

**Allowed input — open only these:**

`/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/theme-*.md`

That pattern is the whole universe. The ranking must include every file `find` returns for that pattern.

**Allowed only as a completeness check, not as a source of counts:**

- `themes/_theme-index.md` — to see which theme files should exist
- `themes/_grouping-ledger.json` — to see the list of `themes_written`

If index/ledger and `theme-*.md` disagree, **the live `theme-*.md` files win**. Note the mismatch in the ledger. Do not invent a theme to match the index.

**Forbidden input — do not open, do not skim, do not “just check”:**

- any `wb-rec-*/issue-*.md`
- any `wb-rec-*/_theme-cards.json`
- any raw recorder file (`audio.*`, `events.json`, `screenshots/*`, `pages.json`, `manifest.json`, `viewer.*`, `_coverage-ledger.json`)
- the Shroffin website
- this prompt file, the Issue Finder prompt, and the Theme Grouper prompt
- any older `_theme-recurrence.md` (overwrite it)

If a theme file is missing `thread_count` or a Threads section: count the distinct thread subsections you can see; if you cannot count, mark `times_discussed: not stated in theme file` and still list the theme at the bottom, after the numbered ranks. Never fill the hole from issue files or recordings.

## Why this work exists (do not skip)

The founder cannot steer a launch from 15 long theme write-ups. They need one page that answers: **which kind of problem did we keep hitting, how many separate times, and why does this rank sit here?** Highest first. Missing a theme from this ranking is a failure. Counting a continued clip as two hits is a failure. Hiding the ranking decisions is a failure.

## Fresh start

A ranking may already exist. Ignore it. Overwrite `_theme-recurrence.md` and `_recurrence-ledger.json`.

## How Cursor must execute

This job is small. **Do it yourself in this chat.** Do not launch Task children. Do not ask the human to confirm.

1. Inventory
2. Read every `theme-*.md` in full
3. Count threads per theme and write down the decision for that count
4. Sort highest to lowest and write down why each row beat the next (or tied)
5. Write the ranking file (including metadata), then the ledger
6. Verify

Forbidden: asking the user to paste anything; opening issue files or recordings; editing theme files; editing the website; committing.

### Step 1 — Inventory

Run:

```bash
find "/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes" -name 'theme-*.md' | sort
```

If this returns **zero** files, stop. Reply only: Theme Grouper output is missing; run that job first. Do not invent themes.

Also list `themes/` so you can see `_theme-index.md` / `_grouping-ledger.json` if present. You may open those two only to check the expected list of theme files.

Keep the full `theme-*.md` path list. That list is the **universe**. Every path must appear in the ranking exactly once.

### Step 2 — Read

Read every `theme-*.md` in full. Do not read only the YAML. You need:

- heading / `theme_title`
- 4-line human summary
- `pinpoint`
- `thread_count` (YAML)
- actual **Threads (members)** subsections (body) — this is the count source
- each thread title, and whether that thread is marked continued across folders
- `issue_file_count` (show as extra info only; do not sort by it)

### Step 3 — Count and sort

For each theme:

- `times_discussed` = number of distinct threads in the body (one continued chain = one thread)
- `issue_files_written` = `issue_file_count` from the theme file (display only)
- `pinpoint` = the theme pinpoint
- `theme_file` = filename
- `thread_titles_counted` = list of thread titles that made the number
- `threads_collapsed_as_one` = continued chains you counted as 1, with the issue-file paths named in that theme file (do not open those issue files)
- `yaml_thread_count` vs `body_thread_count` and who won
- `why_this_count` = 2–4 plain sentences: what you counted, what you did not double-count, and why

Sort by `times_discussed` **descending** (highest first).

Tie-break, in this order:

1. Earlier theme number `NN` first (`theme-01` before `theme-04`)
2. Then ASCII filename

For every row, write `why_this_rank`:

- If it is above the next row: “Ranked above [title] because 5 separate talks vs 3.”
- If it is a tie: “Tied with [title] on 3 talks; placed first because theme number 01 before 04.”
- Rank 1 still needs this vs rank 2. The last row still needs this vs the row above (or “lowest because only 1 separate talk”).

Do not change ranks to make a round list. Do not drop a theme with `times_discussed: 1`. A theme discussed once still belongs on the list, at the bottom of the scored ranks. Do not invent a “why” that is not in the theme file (no “this felt more important”). The only ranking reasons allowed are: thread count, continuation collapsed, YAML/body disagreement, and the two tie-breaks above.

### Step 4 — Write the ranking file

Write:

`/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-recurrence.md`

This is the human deliverable. A non-developer should understand it without any other file.

### File shape (mandatory)

First lines after the title: **at most 4 short human lines**. No jargon without a plain phrase. No tool names. No JSON in those 4 lines. Those 4 lines must say: this is a count of how many separate times each kind of problem was discussed; continued clips count as one; sorted most to least; each row also says why it sits there.

Then **How this ranking was decided** (required, before the list). Plain language. Cover:

- Count rule: threads, not issue files
- Continuation rule: one talk across two clips = 1
- Sort rule: highest `times_discussed` first
- Tie-break: lower theme number, then filename
- Body beats YAML when they disagree
- Input: theme files only

Then a numbered list, **highest first**, with **one block per theme** (not a bare number). Each block must contain:

- rank (1 = most discussed)
- times discussed (the thread count)
- theme title in plain English
- one-sentence pinpoint
- theme filename (so they can open the full write-up)
- issue files written (second number, clearly labeled as **not** the sort key)
- **Why this count:** which thread titles were counted; which continued chains were collapsed to 1; YAML vs body if they differed
- **Why this rank:** why it sits above/below/tied with its neighbor, using only the allowed reasons

After the list, a short note in plain language:

- Times discussed = separate talks of that kind. One talk split across two recordings still counts as 1.
- Issue files written = how many issue files sit under that theme, including continuations. This is not the rank.
- Rank is not “importance.” It is only how many separate times that type came up in the theme files.

Do not paste the full theme bodies. Do not suggest fixes. Do not add extra ranking reasons (launch risk, founder emphasis, your taste).

Then YAML for machines, agreeing with the list and with the why-text:

```yaml
---
ranking_id: "theme-recurrence"
sort: "times_discussed_desc"
count_meaning: "threads_not_issue_files"
tie_break: ["theme_number_asc", "filename_asc"]
body_beats_yaml: true
universe_theme_files: ["theme-01-....md"]
rules_used:
  - "times_discussed = distinct threads in the theme body"
  - "continued clip chain = 1"
  - "sort descending by times_discussed"
  - "ties: earlier theme NN, then filename"
rows:
  - rank: 1
    times_discussed: 0
    issue_files_written: 0
    theme_title: ""
    pinpoint: ""
    theme_file: "theme-NN-....md"
    thread_titles_counted: []
    threads_collapsed_as_one: []
    yaml_thread_count: 0
    body_thread_count: 0
    count_source: "body"
    why_this_count: ""
    why_this_rank: ""
    beat: "theme-NN-....md or null"
    tied_with: []
---
```

`rows.length` must equal the number of `theme-*.md` files. Ranks must be 1..N with no gaps. Every `why_this_count` and `why_this_rank` must be non-empty.

### Step 5 — Ledger (mandatory, last)

Write `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_recurrence-ledger.json`

```json
{
  "universe_count": 0,
  "universe_theme_files": ["theme-01-....md"],
  "ranking_file": "_theme-recurrence.md",
  "sort": "times_discussed_desc",
  "count_meaning": "threads_not_issue_files",
  "tie_break": ["theme_number_asc", "filename_asc"],
  "body_beats_yaml": true,
  "yaml_body_disagreements": [],
  "rank_decisions": [
    {
      "theme_file": "theme-NN-....md",
      "rank": 1,
      "times_discussed": 0,
      "why_this_count": "",
      "why_this_rank": ""
    }
  ],
  "every_universe_path_ranked_once": true,
  "evidence_sources_used": ["themes/theme-*.md only"],
  "forbidden_files_opened": []
}
```

`universe_theme_files.length` must equal live `find` of `theme-*.md`. Every path appears exactly once in the ranking. If counts do not match, you are not done.

## Verify before you reply

- `_theme-recurrence.md` exists
- `_recurrence-ledger.json` exists
- parent `find` count of `theme-*.md` equals rows in the ranking equals `universe_count`
- list is sorted highest `times_discussed` first
- no theme file missing; no theme file listed twice
- first 4 lines are human, no JSON
- “How this ranking was decided” exists
- every row has non-empty `why_this_count` and `why_this_rank`
- you did not open `issue-*.md` or recorder files

## Reply to the user with only

- how many theme files were ranked
- the ranked list: rank, times discussed, theme title
- confirmation `_theme-recurrence.md` is written

Do not paste theme file contents.

COPY TO HERE

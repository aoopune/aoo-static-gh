# Cursor Theme Grouper — paste-ready prompt

How to use this (for you, not for the AI):

You paste **one prompt, one time**, into **one** new Cursor Agent chat. Stop there. You do not launch the parallel agents. You do not paste a second prompt. The agent that receives this message must start all child agents itself.

1. Open a **new Cursor Agent chat** with the `aoo-static-gh` folder available.
2. Copy **everything from the line `COPY FROM HERE` down to `COPY TO HERE`**.
3. Paste it as your only message. Do not add extra instructions.
4. Let that one agent run until `super-review-1/themes/_grouping-ledger.json` exists and every `issue-*.md` is listed in exactly one theme.

This prompt assumes issue files already exist from the Issue Finder run. Those files are the only source. It does not find new issues. It does not reopen recordings. It only groups what Issue Finder already wrote.

---

COPY FROM HERE

You are Cursor Agent in Agent mode. You are an expert Theme Grouper.

This message is the only prompt the human will give you. There is no second prompt. There is no per-folder prompt for the human to paste. You must do the whole job from this one message.

**Parallel agents are your job, not the human’s.** After you inventory every `issue-*.md`, you must immediately launch one Task child agent per `wb-rec-*` folder that contains issue files, all in a single assistant message so they run in parallel. Do not ask the human to start agents. Do not ask the human to confirm. Do not wait. Do not group issues yourself in this parent chat. Do not tell the human to open 30 chats.

You have exactly one job: take every `issue-*.md` already written by Issue Finder, and group them **thematically**. Write one detailed file per theme, plus one index, plus one ledger. Do nothing else. Do not fix the website. Do not suggest fixes. Do not assign owners. Do not invent issues. Do not reopen recordings. Do not look at the live site. Do not independently QA anything.

**Those issue files are the crux.** Issue Finder already joined speech, clicks, screenshots, and time. You are not allowed to redo that join. You only cluster the finished issue files.

Listing issue filenames is not the job. The job is to **join** those issue files with each other, because many of them are the same complaint continued across recordings, and many others are different complaints that belong to the same kind of problem. A folder name is not a theme. A page URL is not a theme. A tag is not a theme. The theme is the kind of thing they were attacking, named only after you line the issue files up.

## Strict input lock (non-negotiable)

**Allowed input — open only these files, and only to group them:**

`/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/wb-rec-*/issue-*.md`

That pattern is the whole universe. If `find` did not return a path as `issue-*.md` inside a `wb-rec-*` folder, you must not use it as evidence.

**Forbidden input — do not open, do not skim, do not “just check,” do not use to fill a gap:**

- anything else in a `wb-rec-*` folder: `audio.*`, `events.json`, `screenshots/`, `pages.json`, `tabs.json`, `console.json`, `manifest.json`, `replay.spec.ts`, `index.html`, `viewer.js`, `viewer.css`, `_coverage-ledger.json`
- the Shroffin website (HTML, CSS, JS, localhost, live pages)
- this prompt file and the Issue Finder prompt
- any `ISSUE_INDEX.md` / `ISSUE-INDEX.md` / `THEME_INDEX.md`
- any older `themes/` files (those are previous output, not evidence; overwrite or delete them as this run’s output only)

**This run may write (working files, not evidence):**

- `wb-rec-*/_theme-cards.json` — a compression of facts **already in** that folder’s issue files. A card must not add a URL, quote, object name, continuation, or pinpoint that is not in the issue file.
- `themes/*` — this run’s output.

If an issue file omits continuation, a quote, a screenshot name, a URL, or a pinpoint: write `not stated in issue file`. Never fill the hole from recordings, from the site, from memory, or from a screenshot. An incomplete issue file still must be grouped, using only what it actually contains.

## Why this work exists (do not skip; this is the quality bar)

Shroffin is the founder’s first startup. This website is the first public showcase of that startup. The founder has been building this site alone since 1 April 2026 and is about to launch in a few days. The co-founder is a software engineer at a large company (~50 LPA, ~15 years, senior in that company’s tech hierarchy) and did not build this website. They reviewed the live local site together. Issue Finder already recovered what they discussed, as one file per issue, split across recording folders because the recorder caps at about 10 minutes.

Those files now sit in:

`/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/wb-rec-*/issue-*.md`

A founder cannot steer a launch from 80 separate files in 30 folders. The files must be grouped so that “the Zero block,” “hidden eligibility,” “missing advice before the bank list,” and “charges that read like legal fine print” are each one place to read. Missing an issue from the grouping is a failure. Dumping unrelated problems into “misc” to look tidy is a failure. Splitting one continued complaint into many themes because it crossed folders is a failure.

## Fresh start

Thematic grouping may already have been attempted. Ignore it.

Treat as non-evidence. Do not open them. Do not use them to complete a missing field:

- any existing `themes/` folder (overwrite or delete leftover `theme-*.md`, `_theme-index.md`, `_grouping-ledger.json` as this run’s output only)
- any `ISSUE_INDEX.md` / `ISSUE-INDEX.md` / `THEME_INDEX.md`
- any `_coverage-ledger.json`
- any previous `_theme-cards.json` (overwrite on this run, and only from issue files)
- this prompt file itself
- the Issue Finder prompt file
- **all raw recorder files, with no exception:** `audio.*`, `events.json`, `screenshots/*`, `viewer.js`, `viewer.css`, `index.html`, `replay.spec.ts`, `manifest.json`, `pages.json`, `tabs.json`, `console.json`
- the live or local Shroffin site

Continuation is whatever the issue files already wrote (`continuation`, `continued_from_folder`, `continued_into_folder`, and the continuation section in the body). If those fields are empty, the thread is standalone. Do not look next door in the recording dump to “confirm.”

Rebuild every theme only from current `issue-*.md` files (YAML + body). Cards may only compress those files.

## What “a theme” is

A theme is one **kind of problem** they kept treating as wrong, broken, confusing, ugly, dishonest, missing, risky, inconsistent, hard to use, badly worded, badly designed, or needing change.

Examples of a real theme (names may differ; these are the *kind* of grouping, not a required list):

- Homepage Zero block: scroll looks broken, wording mixes bank vs customer, supporting line too small
- Homepage story slides: too many, too thin, fade on scroll, duplicate “built around you”
- Explore banks missing advice / hacks before the list
- Eligibility extras hidden, look optional, must still change the loan
- CIBIL as an exact number instead of a range
- Charges and footnotes that read like legal jargon, missing rupee math, missing “highest in market”

A theme is **not**:

- “Homepage” (a place, not a kind of problem — homepage may hold several themes)
- “Explore banks” (same)
- “Copy” or “UX” or “misc” (too vague to steer a launch)
- One recording folder
- One issue file that merely continued in the next folder (that is a **thread**, inside a theme)

### Threads vs themes vs leftover related talk

- **Issue file:** one `issue-*.md` already written by Issue Finder.
- **Thread:** the same complaint continued across folders (`continuation` / `continued_from_folder` / `continued_into_folder`). Collapse those files into one member of a theme. List every file in the chain. Do not count them as separate unrelated members.
- **Theme:** several threads that are the same *kind* of attack (same class of object + same class of defect), even if they are not a literal continuation.
- **Related discussion:** analogies, examples, pros/cons already inside an issue file. Carry them into that theme file. Do not drop them. Do not promote them to a new theme unless they were a second distinct problem (Issue Finder already split those).

### Hard grouping laws

1. Every `issue-*.md` under every `wb-rec-*` folder appears in **exactly one** theme, **exactly once**. Continuation files appear together as one thread, but every path is still cited.
2. Do not invent issues that have no issue file. Do not add facts that are not written in an issue file.
3. Do not drop an issue because it is short, low-confidence, ASR-messy, thin, or from a 2-minute folder. Group the file you have.
4. Do not merge two different problems into one theme member because they happened on the same page or in the same minute.
5. Do not split one problem into two themes because they repeated themselves or because the recorder split the talk.
6. Do not use page URL as the only clustering key.
7. Do not create a `misc` / `other` / `ungrouped` theme unless, after an honest pass, a file truly shares no kind-of-problem with any other thread. If you must, that theme must list the file and a one-sentence reason it did not fit. Zero leftover files with no reason is required otherwise.
8. Same evidence must always produce the same theme split and the same title. Be deterministic.
9. Prefer about **8–20 themes**. If you have 3, you over-merged. If you have 40, you over-split. Do not force a round number.
10. Do not suggest fixes, owners, timelines, or code changes.
11. Do not edit the Shroffin website. Do not edit existing `issue-*.md` files. Do not commit.
12. Do not open any file that is not an `issue-*.md` except: (a) `find`/`ls` for inventory, (b) `_theme-cards.json` this run writes and later reads as a map of issue files, (c) `themes/` this run writes. Opening a recorder file or a site file is a contract failure.

## How Cursor must execute (this is the runtime contract)

You are the **parent / orchestrator** that received this single prompt. You do not write theme files yourself. You only:

1. Inventory every `wb-rec-*` folder and every `issue-*.md`
2. Launch one **card** child agent per folder that has issue files **yourself**, in parallel, using the Task tool
3. Verify cards when children return
4. Launch **one** theme-grouper child with the full inventory and card confirmation
5. Verify the grouping ledger — relaunch only the failed child, yourself, no human prompt

Forbidden:

- Asking the user to launch, paste, or confirm anything
- Writing 30 chats for the user
- Reading all issue files and grouping them serially in this parent thread instead of Task children
- Stopping after inventory to “wait for approval”
- Grouping from filenames and tags only, without the children having read the issue bodies
- Opening recordings, screenshots, manifests, or the website “for context”

Cursor facts you must obey:

- Child agents launched with the Task tool **cannot see this chat**. Each Task `prompt` must contain the full child contract below, plus the exact folder path and the list of issue files in that folder.
- Use `subagent_type: generalPurpose`. Do **not** use `explore` (too shallow; will skip files). Do not use `shell` for grouping work.
- To run card children in parallel, send **one assistant message containing many Task tool calls** (one Task per folder that has `issue-*.md`). That is the only way Cursor runs them together.
- Target: every folder that has at least one issue file, in that one message. If the tool layer rejects or drops some, immediately send another message with Task calls for every folder that still has no `_theme-cards.json`. Do not start grouping in the parent while waiting.
- Folders with **zero** issue files: do not launch a card child. Record them in the parent inventory as `issue_count: 0`. They still belong in `_grouping-ledger.json` as empty contributors.
- You may use Glob / Shell only to `find` / `ls` issue files and later to verify outputs, not to read recorder dumps and not for writing theme files.
- Do not edit HTML/CSS/JS of the Shroffin site. Do not commit. Do not push.
- Parent inventory is **only** the `issue-*.md` list plus which folders have zero of them. Do not read `manifest.json`. Do not read `_coverage-ledger.json`.

### Step 1 — Inventory (parent)

Run:

```bash
find "/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1" -path '*/wb-rec-*/issue-*.md' | sort
```

Also list folders:

```bash
ls -1 "/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1" | grep '^wb-rec-' | sort
```

Confirm the 30 folders exist, in this time order (folder name `wb-rec-YYMMDD-HHMM` is IST clock time):

1. wb-rec-260815-1928
2. wb-rec-260815-1929
3. wb-rec-260815-1950
4. wb-rec-260815-1951
5. wb-rec-260815-2000
6. wb-rec-260815-2009
7. wb-rec-260815-2018
8. wb-rec-260815-2106
9. wb-rec-260815-2116
10. wb-rec-260815-2125
11. wb-rec-260815-2134
12. wb-rec-260815-2201
13. wb-rec-260815-2204
14. wb-rec-260815-2206
15. wb-rec-260815-2213
16. wb-rec-260815-2222
17. wb-rec-260815-2231
18. wb-rec-260815-2240
19. wb-rec-260815-2249
20. wb-rec-260815-2302
21. wb-rec-260815-2304
22. wb-rec-260815-2313
23. wb-rec-260815-2322
24. wb-rec-260815-2332
25. wb-rec-260815-2341
26. wb-rec-260815-2355
27. wb-rec-260816-0004
28. wb-rec-260816-0013
29. wb-rec-260816-0029
30. wb-rec-260816-0031

If a folder is missing or an extra `wb-rec-*` exists, include the extra. Never drop a folder because it has zero issues.

Keep the full list of issue paths. This list is the **universe**. The later grouping must cite every path in that universe. Do not trust a remembered count. Count from `find`.

Expected shape: on the order of ~80 issue files. If you find far fewer than ~70, stop and report — Issue Finder output may be incomplete. If you find extras, still group every file `find` returned.

Do not read issue bodies in the parent. Pass paths to children. Do not read any non-issue file during inventory.

### Step 2 — Launch card children (parent)

For each folder that contains at least one `issue-*.md`, one Task:

- description: `Cards in <folder-name>`
- subagent_type: `generalPurpose`
- prompt: the entire **Folder Card Contract** (below) with these placeholders filled:

  - `{{FOLDER}}` = absolute path of this folder
  - `{{FOLDER_NAME}}` = `wb-rec-...`
  - `{{SEQUENCE_INDEX}}` = 1..30
  - `{{ISSUE_FILES}}` = newline-separated list of issue filenames in that folder (exact names from find)

Do not shorten the contract. Children have no other context.

### Step 3 — Verify cards (parent, after card children return)

For every folder that had issue files:

- `_theme-cards.json` exists
- `cards.length` equals the number of `issue-*.md` in that folder
- every issue filename from find appears as `path` in exactly one card
- every card has non-empty: `issue_id`, `issue_title`, `pinpoint`, `page_url`, `on_screen_object`, `tags`, `continuation`, `summary_4_lines`
- no card has `status: skipped`

If a folder fails, relaunch **only that folder’s** card child with the same full contract plus a note of what was missing. Do not patch cards yourself.

### Step 4 — Launch the grouper (parent)

When every card file passes, launch **one** Task:

- description: `Group issues into themes`
- subagent_type: `generalPurpose`
- prompt: the entire **Theme Grouper Contract** (below) with:

  - the full `find` list of issue paths
  - the full list of `_theme-cards.json` paths
  - zero-issue folder names
  - `{{UNIVERSE_COUNT}}` = number of issue files from find

Do not shorten the contract. Do not group in the parent.

### Step 5 — Verify grouping (parent, after the grouper returns)

Check all of the following. If any fails, relaunch **only the grouper** with the same full contract plus a note of what was missing. Do not patch theme files yourself.

- `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_grouping-ledger.json` exists
- `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-index.md` exists
- `theme-*.md` files exist for every theme the ledger names
- Parent re-runs `find` on `issue-*.md` itself. That count **equals** `universe_issue_files.length` **equals** the number of issue paths cited across all themes (each path exactly once)
- no issue path is missing; no issue path appears in two themes
- each theme file starts with a human summary of at most 4 lines
- ledger `ungrouped` is `[]` unless a documented leftover theme exists, and even then every leftover path is listed
- no `status: skipped`
- ledger `evidence_sources_used` is `["issue-*.md only"]` and `forbidden_files_opened` is `[]`

When all checks pass, reply to the user with only:

- how many issue files were in the universe
- how many themes
- for each theme: filename + one-line pinpoint + how many threads + how many issue files
- which folders had zero issues (name only)
- which threads continue across folders (theme + from-file → to-file)

Do not paste theme contents into chat.

---

# Folder Card Contract

(Parent: paste this whole section into every card-child Task prompt, with placeholders replaced.)

You are Cursor Agent, a child worker. You cannot see the parent chat. This prompt is your only instruction.

You are an expert Issue Reader. One job: read every issue file in `{{FOLDER}}` and write one card per issue into `_theme-cards.json` in that same folder.

## Assigned work

- Folder: `{{FOLDER}}`
- Name: `{{FOLDER_NAME}}`
- Sequence index: `{{SEQUENCE_INDEX}}` of 30
- Issue files in this folder (complete list; you must produce one card for each):

```
{{ISSUE_FILES}}
```

## Absolute laws

1. Do not invent issues. Do not drop issues.
2. Do not suggest fixes, owners, timelines, or code changes.
3. Ignore previous `_theme-cards.json`. Overwrite it.
4. You must **read every listed issue file in full**. Listing a filename without opening it is a failure. Do not read only the YAML. Read the 4-line summary, YAML, Exact issue section, How the files join, Pinpoint, Related discussion, Chronology, Cross-recording continuation, and JSON.
5. **Open no other file in this folder.** Not `audio.*`, not screenshots, not `events.json`, not `pages.json`, not `manifest.json`, not `viewer.*`, not `_coverage-ledger.json`. If a fact is missing from the issue file, the card field is `not stated in issue file`.
6. Do not edit issue files. Do not edit the Shroffin website. Do not commit.
7. Do not write theme files. Cards only.
8. Every card field must be traceable to a sentence or YAML key in that issue file. If you cannot point to it, omit it / mark not stated. Do not guess from the filename.

## What to extract per issue file

After the full read, one card object:

- `path`: filename only, e.g. `issue-01-....md`
- `abs_path`: absolute path
- `issue_id`: from YAML
- `issue_title`: from heading / YAML
- `summary_4_lines`: the 4 human lines (array of 1–4 strings)
- `pinpoint`: YAML pinpoint
- `page_url`
- `page_title`
- `on_screen_object`
- `tags`
- `severity_as_spoken`
- `confidence`
- `continuation`: standalone | continues_from_prev | continues_into_next | both
- `continued_from_folder`
- `continued_into_folder`
- `related_issue_files`
- `quotes_sample`: up to 3 short quotes from the body
- `related_discussion_one_liners`: up to 5 compressed bullets of analogies / pros-cons / user-future talk (do not drop the existence of related talk; if the section is long, compress, do not omit the kind of talk)
- `kind_hint`: one short phrase in their terms for clustering, e.g. `hidden-eligibility-columns`, `missing-advice-layer`, `zero-block-scroll`, `legal-charge-notes`. This is a hint for the grouper, not the final theme name.
- `distinct_from_other_files_in_this_folder`: if this folder has multiple issues, one sentence on why this is not the same problem as the others

## Write

Write `{{FOLDER}}/_theme-cards.json`:

```json
{
  "folder": "{{FOLDER_NAME}}",
  "sequence_index": {{SEQUENCE_INDEX}},
  "issue_count": 0,
  "cards": []
}
```

`cards.length` must equal the listed issue file count. If it does not, you are not done.

## Return to parent

Short machine list only: folder name; issue_count; each path + kind_hint + continuation; confirmation `_theme-cards.json` is written.

END Folder Card Contract

---

# Theme Grouper Contract

(Parent: paste this whole section into the single grouper Task prompt, with placeholders replaced.)

You are Cursor Agent, a child worker. You cannot see the parent chat. This prompt is your only instruction.

You are an expert Theme Grouper. One job: group every issue file in the universe into themes, and write the theme files, the index, and the grouping ledger.

## Assigned work

- Root: `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/`
- Output directory: `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/`
- Universe count: `{{UNIVERSE_COUNT}}`
- Universe issue paths (complete `find` list; every path must appear in exactly one theme):

```
{{UNIVERSE_PATHS}}
```

- Card files (read all of these):

```
{{CARD_PATHS}}
```

- Folders with zero issues (cite in the ledger as empty contributors; do not invent issues for them):

```
{{ZERO_ISSUE_FOLDERS}}
```

## Absolute laws

1. Group **only** from `issue-*.md` files. Cards are a map of those files, not a second source. Do not invent issues. Do not reopen the website. Do not open recorder files.
2. Do not suggest fixes, owners, timelines, or code changes.
3. Ignore previous `themes/` output. Delete leftover `theme-*.md` that this run does not still stand behind. Overwrite `_theme-index.md` and `_grouping-ledger.json`.
4. You must **read every issue file in the universe**. Cards are a map, not a substitute. If a card and the issue body disagree, the issue body wins. Say that you did this.
5. You must **read every `_theme-cards.json` this run produced**. Do not treat a card as proof of a fact that is not in the issue file.
6. Collapse continuation chains into threads **only** using continuation fields and continuation sections inside issue files. If those are empty, do not go looking in recordings. Treat as standalone.
7. Every universe path appears in exactly one theme, exactly once.
8. Related discussion must not be dropped. Roll it into the theme file under Related discussion — still only what the issue files already contain.
9. Do not edit issue files. Do not edit the Shroffin website. Do not commit.
10. Do not quote speech, clicks, or screenshots unless that quote/filename already appears in an issue file.

## Cursor tools you must use (and how)

1. Shell `find "/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1" -path '*/wb-rec-*/issue-*.md' | sort` — confirm the universe matches what the parent passed. If it does not, use the live find list of **issue files only** and note the mismatch in the ledger. Do not find/read any other file types.
2. Read every `_theme-cards.json` in full (this run’s map only).
3. Read every `issue-*.md` in full (batch Read calls). Do not stop after YAML. These are the only evidence files.
4. Create `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/` if needed.
5. Write theme files, then the index, then the ledger last.
6. Never Read `audio.*`, `events.json`, `screenshots/*`, `pages.json`, `manifest.json`, or site HTML.

## How to group (join first, then name the theme)

Work in this order. Never write a theme from tags alone.

1. **Build the universe table.** One row per issue file: id, title, pinpoint, page, object, continuation links, kind_hint, folder sequence.
2. **Collapse threads.** Follow only `continued_from_folder` / `continued_into_folder` and matching pinpoints **as written in the issue files**. A chain A → B → C is **one thread**. If two files share a page but their pinpoints are different defects, they are different threads. If continuation is not stated in the files, do not infer it from folder order alone unless the pinpoints clearly name the same object and the same defect.
3. **Cluster threads by kind.** Ask: would the two people recognize these as the same *sort* of attack? Same class of object + same class of defect → same theme. Different defect on the same screen → different theme (or different members of a broader theme only if they clearly talked about them as one family).
   - Same family example: several charge-note files about legal jargon, missing rupee math, missing “highest” labels — one theme “charges that do not explain themselves,” with distinct members.
   - Not the same family: hidden eligibility columns vs missing advice/hacks vs CIBIL exact-vs-range — three themes, even though all sit on Explore banks.
4. **Name the theme** from their words and the joined defect, in plain English. ASCII kebab filename. Not `design`, not `explore-banks`, not `misc`.
5. **Keep gathering related talk** already in those issue files (Google Flights, Amazon sale, juicer, lawyers, etc.) into Related discussion of that theme.
6. If a thread does not fit any cluster, do not hide it. Either it is its own small theme (allowed) or a documented leftover with a reason (last resort).

### Pinpoint test (required, per theme)

In one concrete sentence: **what kind of thing on the site is wrong, in what way, according to them.**

Bad: “Explore banks UX.”  
Bad: “Copy issues.”  
Good: “On Explore banks, extra eligibility questions sit behind Adjust eligibility instead of as columns, look optional, and still change the loan — that hiding is the theme.”

## What to write

Create directory:

`/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/`

### A. One file per theme

`theme-NN-short-kebab-title.md`

- `NN` is `01`, `02`, … in the order the theme **first becomes clear** in recording time (earliest issue file in the theme).
- Title is the pinpoint of the cluster, not a vague bucket.
- ASCII kebab-case. No spaces.

### File shape (mandatory)

The first lines after the title heading must be a **human summary of at most 4 short lines**. A non-developer should understand the cluster from those 4 lines alone. No jargon without a plain phrase. No tool names. No JSON in those 4 lines.

Then YAML. Then human body. Then JSON. Both machine blocks must agree with the human body.

```markdown
# <Theme title in plain English>

<line 1>
<line 2>
<line 3>
<line 4>

---
theme_id: "theme-NN-short-kebab-title"
theme_title: "<same as heading>"
pinpoint: "<one sentence: what kind of object is wrong, in what way>"
thread_count: 0
issue_file_count: 0
issue_files: ["wb-rec-.../issue-....md"]
folders: ["wb-rec-..."]
pages: ["<urls>"]
severity_as_spoken_range: ["unstated"]
confidence_range: ["high"]
tags: []
---

## Exact theme
The joined conclusion: what kind of problem this is, on which parts of the site. Quote them. This section is the theme, not a file list.

## Threads (members)
One subsection per thread. For each thread:
- thread title (plain English)
- issue files in time order (paths)
- whether it continues across folders
- pinpoint of this thread (may be narrower than the theme)
- 2–4 sentence recap from the issue files, with quotes
Do not merge two different defects into one thread.

## How the files join (required)
Why these threads are one theme and not several. What is shared (object class + defect class). What was kept as separate threads inside the theme, and why.

## Related discussion (not the theme itself)
Analogies, examples, pros/cons, user/company/future talk rolled up from the member issue files. Do not omit.

## Chronology across recordings
Time-ordered: folder + issue file + what became clear.

## Evidence by issue file (every file in this theme — no omissions)
One bullet per issue file in this theme:
- relative path from `super-review-1/`
- what you took (pinpoint, continuation, a quote)
- `supports_theme` | `related_discussion` | `continuation_link`

## JSON
{
  "theme_id": "theme-NN-short-kebab-title",
  "theme_title": "",
  "pinpoint": "",
  "thread_count": 0,
  "issue_file_count": 0,
  "issue_files": [],
  "folders": [],
  "pages": [],
  "threads": [{"title": "", "issue_files": [], "continuation": "standalone"}],
  "related_discussion_present": true
}
```

### B. Index

Write `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-index.md`

Human-first. At most a short intro (why this list exists). Then one section per theme in NN order: title, 1–2 sentence pinpoint, thread count, issue file count, link to `theme-NN-....md`. No JSON in the intro. No fixes.

### C. Grouping ledger (mandatory, last)

Write `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_grouping-ledger.json`

```json
{
  "universe_count": 0,
  "universe_issue_files": ["wb-rec-.../issue-....md"],
  "zero_issue_folders": [],
  "themes_written": ["theme-01-....md"],
  "theme_count": 0,
  "assignment": [
    {
      "issue_file": "wb-rec-.../issue-....md",
      "theme_file": "theme-01-....md",
      "thread_title": ""
    }
  ],
  "ungrouped": [],
  "continuation_threads": [
    {
      "theme_file": "theme-01-....md",
      "issue_files_in_order": []
    }
  ],
  "card_files_read": [],
  "every_universe_path_assigned_once": true,
  "evidence_sources_used": ["issue-*.md only"],
  "forbidden_files_opened": []
}
```

`universe_issue_files.length` must equal live `find` count. `assignment.length` must equal that count. Each universe path appears exactly once in `assignment`. If counts do not match, you are not done.

## Return to parent

Short machine list only:

- universe_count
- theme_count
- each theme filename + pinpoint + thread_count + issue_file_count
- ungrouped (must be [])
- confirmation `_grouping-ledger.json` and `_theme-index.md` are written

Do not write theme files anywhere except `themes/`.

END Theme Grouper Contract

COPY TO HERE

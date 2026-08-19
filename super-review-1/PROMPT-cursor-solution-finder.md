# Cursor Solutions and Suggestions Finder — paste-ready prompt

How to use this (for you, not for the AI):

You paste **one prompt, one time**, into **one** new Cursor Agent chat. Stop there. You do not launch the parallel agents. You do not paste a second prompt. The agent that receives this message must start all folder-agents itself.

This is a **different job** from the Issue Finder. Issue files already exist in the `wb-rec-*` folders. This job does **not** rewrite those defects. It recovers the other half of the same review: solutions, suggestions, potential suggestions, borrowed patterns from other products, user-convenience ideas, and how the two of you think about Shroffin.

1. Open a **new Cursor Agent chat** with the `aoo-static-gh` folder available.
2. Copy **everything from the line `COPY FROM HERE` down to `COPY TO HERE`**.
3. Paste it as your only message. Do not add extra instructions.
4. Let that one agent run until every `wb-rec-*` folder has a `_solution-coverage-ledger.json` file.

Do not reuse the issue-finder chat. Do not overwrite `issue-*.md` or `_coverage-ledger.json`.

---

COPY FROM HERE

You are Cursor Agent in Agent mode. You are an expert **Solutions and Suggestions Finder**.

That expert name is the correct one for this job. You recover every constructive direction the founder and co-founder actually discussed — a proposed change, a maybe, a pattern from another product that can be applied here, a user-convenience idea, or a standing way Shroffin should treat people. You are not an Issue Finder. You are not a product advisor inventing your own roadmap. You do not fix the website.

This message is the only prompt the human will give you. There is no second prompt. There is no per-folder prompt for the human to paste. You must do the whole job from this one message.

**Parallel agents are your job, not the human’s.** After you inventory the `wb-rec-*` folders, you must immediately launch one Task child agent per folder, all in a single assistant message so they run in parallel. Do not ask the human to start agents. Do not ask the human to confirm. Do not wait. Do not process folders one-by-one yourself in this parent chat. Do not tell the human to open 30 chats.

You have exactly one job: find every solution, suggestion, potential suggestion, applicable borrowed pattern, user-convenience idea, and company-thinking “good thing to do” that the founder and co-founder actually discussed while reviewing the Shroffin website, and write one detailed file per finding. Do nothing else. Do not fix the website. Do not implement. Do not assign owners. Do not invent solutions they never discussed. Do not independently QA the screenshots for ideas they never talked about. Do not rewrite the existing issue files.

Opening every file is not the job. The job is to **join** those files, because they are all about the same moments of the same review. Speech, clicks, page, screenshots, and timestamps are one event split across files. The actual solution is what you can name only after that join. A quote from the transcript alone is not a solution. A screenshot alone is not a solution. A click alone is not a solution. The solution is the constructive thing they were aiming at, recovered by lining those files up.

## Why this work exists (do not skip; this is the quality bar)

Shroffin is the founder’s first startup. This website is the first public showcase of that startup. The founder has been building this site alone since 1 April 2026 and is about to launch in a few days. The co-founder is a software engineer at a large company (~50 LPA, ~15 years, senior in that company’s tech hierarchy) and did not build this website. They reviewed the live local site together using the Workbooks Recorder Chrome extension (https://github.com/workbooks-dev/workbooks-recorder).

The recording dump is:

`/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/`

Each `wb-rec-*` subfolder is one recording, generally under 10 minutes because of the recorder cap. One topic often starts in one folder and continues in the next. Never treat a folder as a closed universe.

The site will be seen by Shroffin users, startup investors, possible hires, friends and family, and the general public. First-24-hour traffic is meant to be in the tens of thousands. Every discussed solution or suggestion must be recovered completely. Missing a solution is a failure.

Most **issues** (what they treated as wrong) are already written as `issue-*.md` in these folders. That work is done. Do not redo it. This job is the rest of the same talk: what they said to **do**, what they **borrowed** from other products, how they think about the **user’s convenience**, and how they think about **the company**. A solution may sit next to an already-written issue. A solution may also exist with no issue file at all.

## Fresh start

Solution-finding may have been attempted earlier. Ignore prior solution output.

Treat as non-evidence and do not read them for conclusions:

- any existing `solution-*.md`
- any `SOLUTION_INDEX.md` / `SOLUTION-INDEX.md`
- any `_solution-coverage-ledger.json` from a previous run (overwrite on this run)
- this prompt file itself
- `PROMPT-cursor-issue-finder.md`
- do not treat `viewer.js` / `viewer.css` as discussion; still open them fully, confirm they are only the replay player, and record that confirmation in the ledger

**Existing issue files are helpers, not the source of truth, and not the output.**

You MAY read `issue-*.md` and the issue-run `_coverage-ledger.json` in a folder. Use them only as a map:

- to know which stretches were already classified as defects, so you do not write another defect file
- to jump to timestamps where they also proposed a fix, an analogy, or a company rule
- to cross-link `linked_issue_files` when a solution answers or sits next to a known issue

You MUST still join the raw recorder files. You MUST still walk the full timeline so you do not miss solutions that never became issue files (honesty analogies, user-convenience rules, “good thing to do” talk, company thinking). Copying an issue file, renaming it, or restating “what is wrong” as if it were a solution is a failure.

Do not edit, delete, or overwrite `issue-*.md` or `_coverage-ledger.json`.

Rebuild every solution only from raw recorder files and their metadata. Issue files are a shortcut for topic names and timestamps, not a substitute for the join.

## What “a solution” is

A solution (or suggestion / potential suggestion / good thing to do) is something the two people treated as a **constructive direction**: what to do, what to try, what to copy from elsewhere, how the user should be treated, or how Shroffin should behave.

Include all of these. None is optional when they actually discussed it:

1. **Proposed change** — they said to do X on the site or in the product as shown on the site. (“Show these extras as columns.” “Keep them pre-filled.” “Never write mandatory.”)
2. **Potential suggestion** — tentative, maybe, what-if, not decided. (“Maybe we should remove this section.” “Can we trim some of these sections?”)
3. **Borrowed pattern** — they talked about another product, profession, or everyday thing, and treated it as something that **can be applied** here even though it is not Shroffin. Google Flights honesty, Amazon/Apple checkboxes, Amazon sale / Prime Day as a warning, juicer guarantees, lawyers who squeeze the bank, furniture “No EMI”. The outside talk **is** the finding when they used it as a model, a warning, or a method.
4. **User convenience** — how filling, choosing, trusting, or moving through the site should feel for the customer. (“Don’t increase the friction.” “They should feel that the details are useful.” “I don’t want a surprise later.”)
5. **Company thinking / product principle** — a standing way Shroffin should treat people or do the job. (“We are lawyers for you.” “Don’t make a fool of the customer.” “The user wants hacks, not tell-me-my-loan.”) This counts even when they never named a button.

For each finding, you must pinpoint **what the solution is for**: which topic / page / object / user-job it was meant to serve. A solution without its subject is incomplete.

Include, inside that solution’s file, all related talk on the same topic even when that talk is not itself the solution: examples, analogies, pros/cons, “what if we put it here vs there”, disagreement between the two speakers, how they think about the user, the company, and the future. Related talk must not be dropped. Related talk must not become a separate solution file unless they clearly raised a second distinct direction.

### What is not a solution file

- Pure **issue** talk: they only treated something as wrong, broken, confusing, ugly, dishonest, missing, or badly worded, and they offered **no** direction, analogy-to-apply, convenience rule, or company principle. That already lives in `issue-*.md`. Do not rewrite it.
- Pure off-topic chat (personal stories, bar talk, going out) unless they used it as an example for a solution / company / user idea. In that case it belongs under Related discussion of that solution.
- Your own ideas. If they did not discuss it, it is not a file.
- Recorder UI (`viewer.js` / `viewer.css` / player chrome).

If a stretch has **both** a defect and a proposed direction, write **only** the direction here, and link the existing issue file in `linked_issue_files`. One line may name the defect so a reader knows what the solution is for. Do not paste the issue.

If a folder has no discussed solution / suggestion / applicable pattern / convenience rule / company principle, create no solution file. Still write `_solution-coverage-ledger.json` explaining that with evidence.

### Calibration (same review; use as a feel for split, not as files to copy)

These are the kind of findings this job wants. Do not copy these titles unless the join in that folder still supports them.

- **Proposed change:** Extra eligibility stays on screen as already-filled columns; never stamp fields mandatory; show what filling changes (e.g. existing EMIs can move the loan by ₹10 lakh).
- **Borrowed pattern:** Bank type All / Public / Private should work like Apple/Amazon multi-select checkboxes so more than one can stay on.
- **Borrowed pattern + company thinking:** Google Flights-style honesty on whether a rate/price is low, high, or unlikely to go down — applied to Shroffin — **and** the warning that Amazon-sale / Prime Day hype makes a fool of the customer. Outside products, applicable here.
- **Company thinking:** Indian users want hacks that save lakhs (wait, take it in a wife’s name, get a salary slip), not “tell me my loan”; “we are lawyers for you / squeeze the bank.”
- **Potential suggestion:** Maybe cut some of the four homepage story sections; maybe remove a slide that only repeats a quality already said.
- **Not a solution file:** “Both zeros look broken while scrolling” with no constructive direction — that is an issue. Leave it.
- **Related, not its own file:** CTO / product-vs-engineering aside while they design the intelligence layer. Keep it under Related discussion of that solution.

When two speakers disagree (one likes Google Flights honesty, the other feels fooled when a site says “prices are low”), that disagreement **is** part of the same solution file. Mark `decidedness: disagreement`. Do not pick a winner they did not pick.

## How Cursor must execute (this is the runtime contract)

You are the **parent / orchestrator** that received this single prompt. You do not extract solutions yourself. You only:

1. Inventory the folders
2. Launch one child agent per folder **yourself**, in parallel, using the Task tool
3. Verify coverage when children return
4. Relaunch any child that failed or skipped files — again yourself, no human prompt

Forbidden:

- Asking the user to launch, paste, or confirm anything
- Writing 30 solution-finder chats for the user
- Doing the folder work serially in this parent thread instead of Task children
- Stopping after inventory to “wait for approval”
- Writing or rewriting `issue-*.md`
- Overwriting `_coverage-ledger.json` from the issue run

Cursor facts you must obey:

- Child agents launched with the Task tool **cannot see this chat**. Each Task `prompt` must contain the full Folder Agent Contract below, plus the exact folder path, plus the previous and next folder paths.
- Use `subagent_type: generalPurpose`. Do **not** use `explore` (too shallow; will skip files). Do not use `shell` for this work.
- To run in parallel, send **one assistant message containing many Task tool calls** (one Task per `wb-rec-*` folder). That is the only way Cursor runs them together.
- Target: all 30 folders in that one message. If the tool layer rejects or drops some, immediately send another message with Task calls for every folder that still has no `_solution-coverage-ledger.json`. Do not start reading transcripts in the parent while waiting.
- You may use Glob / Shell only for inventory and later verification, not for solution writing.
- Do not edit HTML/CSS/JS of the Shroffin site. Do not commit. Do not push.

### Step 1 — Inventory (parent)

Run a directory listing of:

`/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/`

Confirm these 30 folders exist, in this time order (folder name `wb-rec-YYMMDD-HHMM` is IST clock time; `manifest.json` `started_at` / `ended_at` is the true sequence):

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

If a folder is missing or an extra `wb-rec-*` exists, include the extra and still process every `wb-rec-*`. Never drop a folder because it is short or because `audio.text` is empty. Never drop a folder because it already has issue files. Never drop a folder because the issue ledger said `zero_issue_reason` — that folder may still hold company talk, a borrowed pattern, or a convenience rule.

For each folder, read `manifest.json` only far enough to pass the child: `id`, `start_url`, `started_at`, `ended_at`, `duration_ms`, `events_count`, `screenshots_count`.

Known traps (children must still process these, not skip them):

- 1928 (~5s) and 1950 (~7s): empty / tiny transcripts. Still use events, screenshots, manifest. Likely zero solutions; still ledger.
- 2201 (~11s): tiny transcript, often off-topic bar talk. Still process. Do not invent a solution from the unchanged Explore banks screenshot.
- Several folders are 2–6 minutes (2018, 2134, 2204, 2249, 2302, 0029). They are real sessions, not noise.
- Time gaps (for example 2018 → 2106) may be a break. Do not assume continuation across a long gap unless speech at the boundary is clearly the same unfinished topic. Do assume continuation across short gaps (under ~15 minutes) when the last topic of A matches the first topic of B.

### Step 2 — Launch children (parent)

For each folder, one Task:

- description: `Solutions in <folder-name>`
- subagent_type: `generalPurpose`
- prompt: the entire **Folder Agent Contract** (below) with these placeholders filled:

  - `{{FOLDER}}` = absolute path of this folder
  - `{{FOLDER_NAME}}` = `wb-rec-...`
  - `{{PREV_FOLDER}}` = absolute path of previous folder in the list, or `NONE`
  - `{{NEXT_FOLDER}}` = absolute path of next folder in the list, or `NONE`
  - `{{PREV_NAME}}` / `{{NEXT_NAME}}` = names or `NONE`
  - `{{SEQUENCE_INDEX}}` = 1..30
  - `{{STARTED_AT}}` `{{ENDED_AT}}` `{{DURATION_MS}}` `{{START_URL}}` from manifest

Do not shorten the contract. Children have no other context.

### Step 3 — Verify (parent, after all children return)

For every folder:

- `_solution-coverage-ledger.json` exists
- `_coverage-ledger.json` (issue run) is still present and was not overwritten
- no `issue-*.md` was edited or deleted
- Parent re-runs `find` itself and checks: disk file count minus `issue-*.md`, minus `_coverage-ledger.json`, minus new `solution-*.md`, minus `_solution-coverage-ledger.json`, minus `PROMPT-*.md` **equals** `files_in_folder.length` **equals** `file_usage.length` **equals** keys in `file_status`
- every raw file has `status: fully_read` or `fully_read_chunked` or `fully_read_image` or a hard reason (`binary_audio_untranscribed_use_text_artifacts`, `player_chrome_fully_read_confirmed`)
- no `status: skipped`
- every `file_usage` entry has non-empty `facts_taken` (even if the fact is “file is empty” or “generic player, no session talk”)
- solution files exist for every solution the child’s returned list names
- each solution file starts with a human summary of at most 4 lines
- each solution file pinpoints **what the solution is for** (the topic / subject), not only a vague “good idea”

If any folder fails verification, relaunch **only that folder’s** child with the same full contract plus a note of what was missing. Do not patch solution files yourself.

When all ledgers pass, reply to the user with only:

- how many folders processed
- how many solution files per folder (name + count)
- which folders had zero solutions, and the one-line reason from the ledger
- which solutions continue across folders (name + from-folder → to-folder)
- which solutions are linked to existing issue files (solution name + issue filename)

Do not paste solution contents into chat.

---

# Folder Agent Contract

(Parent: paste this whole section into every Task prompt, with placeholders replaced.)

You are Cursor Agent, a child worker. You cannot see the parent chat. This prompt is your only instruction.

You are an expert **Solutions and Suggestions Finder**. One job: recover every solution, suggestion, potential suggestion, applicable borrowed pattern, user-convenience idea, and company-thinking “good thing to do” discussed in `{{FOLDER}}`, and write one markdown file per finding inside that same folder.

You are not an Issue Finder. Do not write `issue-*.md`. Do not overwrite `_coverage-ledger.json`.

## Assigned work

- Folder: `{{FOLDER}}`
- Name: `{{FOLDER_NAME}}`
- Sequence index: `{{SEQUENCE_INDEX}}` of 30
- Manifest window: `{{STARTED_AT}}` → `{{ENDED_AT}}` (`{{DURATION_MS}}` ms)
- Start URL: `{{START_URL}}`
- Previous recording: `{{PREV_FOLDER}}` (`{{PREV_NAME}}`)
- Next recording: `{{NEXT_FOLDER}}` (`{{NEXT_NAME}}`)

## Absolute laws

1. Find only solutions / suggestions / applicable patterns / convenience rules / company principles they actually discussed.
2. Do not invent solutions from your own taste, from screenshot-only ideas they never mentioned, or from engineering guesses.
3. Do not implement fixes, owners, timelines, or code changes. Do not “improve” their idea.
4. Ignore previous solution-finding files in this folder (`solution-*.md`, old `_solution-coverage-ledger.json`). Overwrite the solution ledger at the end.
5. Existing `issue-*.md` may be read as a map. They must not be edited, deleted, or copied as solutions.
6. You must **read every raw recorder file** in `{{FOLDER}}`. That is the input, not the output. Listing a filename without opening it is a failure. Skipping a file because it looks like a player, is empty, is huge, is binary, is a screenshot, “probably duplicates another file,” or “the issue file already covers this” is a failure.
7. You must **correlate** every raw file with the others. They are not independent notes. They are slices of one discussion. The actual solution is the joined fact, not a quote from one file.
   - Same clock: convert speech, events, and screenshots to milliseconds from session start and line them up.
   - Same moment: at time T, what they said + what they clicked + what was on screen + which page/URL + which field/button.
   - Same object: name the on-screen thing using pages.json + click locator + screenshot together, not from memory. If the talk is company-level with no control, say that honestly; still join time + screen so you know they were (or were not) looking at the site.
   - Same words: when `audio.text` / `.srt` / `.tsv` / `.json` disagree, pick the reading that matches the click and the screenshot at that time. Say that you did this.
   - A sentence in `audio.srt` is not a solution until that join is done. If you cannot join speech to screen and click (or to a clear idle-on-this-page company talk), you have not found the solution yet — keep reading. Do not publish a vague theme.
8. Topics continue across the 10-minute cap. Read the previous folder’s ending and the next folder’s beginning. If this folder’s last topic is unfinished, say so. If this folder’s first topic is a continuation, say so. Write the solution file **in this folder** for the part discussed here. Cross-link the other folder by name. Do not skip writing just because it started earlier. Do not skip writing just because it continues later.
9. Same evidence must always produce the same solution split and the same title. Be deterministic.
10. Related discussion that is not itself the solution still goes into that solution file. Do not drop it.
11. Do not edit the Shroffin website. Do not commit.
12. **Leave issue things.** If they only named a defect and offered no direction, analogy-to-apply, convenience rule, or company principle, write no file for that stretch. If they named a defect **and** a direction, write the direction and link the issue file.

## Cursor tools you must use (and how)

This is how you actually work in Cursor. Follow it. Do not “just remember the folder”.

1. **Shell** `find "{{FOLDER}}" -type f | sort`  
   Keep the full list. Split it into:
   - **raw recorder files** (coverage universe): everything except `issue-*.md`, `_coverage-ledger.json`, `solution-*.md`, `_solution-coverage-ledger.json`, `PROMPT-*.md`
   - **helper issue files** (optional map): `issue-*.md` and `_coverage-ledger.json` if present

2. **Optional helper pass (recommended, not a substitute).**  
   If `issue-*.md` exist, read each one far enough to take: title, pinpoint, speech_clock, screenshot_files, continuation, and whether Related discussion already names a proposed fix / analogy / principle. Use that as a **map of timestamps and topics**. Then still walk the raw timeline. Many solutions live in talk the issue files labelled “Related discussion” or never filed at all.

3. **Read `manifest.json` in full.**  
   Use: format, id, start_url, urls, started_at, ended_at, duration_ms, events_count, screenshots_count, console_count, tabs_count, pages_count, mic, viewport, audio.file, capture_model.

4. **Read all speech artifacts. None is optional.**  
   They disagree. That is expected (Whisper). You must read all and reconcile:

   - `audio.text` — plain transcript (may be empty)
   - `audio.txt` — another plain dump (may differ)
   - `audio_sentences.txt` — sentence-level (missing in a few folders; if missing, record that)
   - `audio.srt` — timed cues (primary clock for speech)
   - `audio.vtt` — same family as srt
   - `audio.tsv` — start/end in milliseconds + text
   - `audio.lrc` — timed lyrics-style
   - `audio.json` — full Whisper object: segments, words, start/end seconds, probability, avg_logprob, no_speech_prob, language (often wrong, e.g. `mr` on English/Hindi speech — do not trust `language`)

   `audio.json` is large. Use Read with offset/limit repeatedly until the file is fully consumed. Never stop after the first chunk. Use word-level timestamps and low `probability` as a warning that ASR may have misheard. When ASR copies disagree, prefer the reading that matches the screenshot + click at that time. Quote the raw ASR; in your own pinpoint sentence you may add `(ASR likely meant: …)` only when screenshot/click makes the intended word obvious. Never silently “correct” without saying so.

5. **`audio.webm`**  
   Binary mic recording. You cannot listen. **Do not play, transcribe, or run this file.** Record in the ledger: `binary_audio_untranscribed_use_text_artifacts`. Do not treat this as a skip of the session. The text artifacts are the speech.

6. **`events.json` in full.**  
   Align `t` (ms from session start) and `ts` with transcript clocks.  
   `audio.tsv` start/end are milliseconds. `audio.srt` is `HH:MM:SS,mmm`. `audio.json` words are seconds. Convert to one clock: milliseconds from session start.  
   Event kinds you will see: landmark_snapshot, idle, focus, click, dblclick, input, change, submit, key, scroll, navigation, tab_switch, marker, note, pause, resume, timeout, network, assertion, waiting_start, waiting_end.  
   For solution pinpoint, clicks/focus/input/scroll/navigation/landmark_snapshot matter most. Idle is still metadata (they often design out loud while idle — Google Flights, lawyers, company rules). Extract from click targets: accessible_name, text, label, placeholder, id, css, locators, URL, t.

7. **`pages.json` in full.**  
   Page title, headings, landmarks, forms, fields, nav. This is what the site contained. Use it to name the on-screen object the solution is **for**.

8. **`tabs.json` in full.**  
   Which tab/URL they were on and when.

9. **`console.json` in full.**  
   Often `[]`. Empty is a finding: no console errors captured. Still read it.

10. **`replay.spec.ts` in full.**  
    Playwright replay of the session. Comments include idle gaps and locators. Use it as a second timeline of what they did.

11. **`index.html` in full.**  
    Replay viewer. Read the whole file. It may inline copies of manifest/events/tabs/screenshots. Extract: any inlined session ids, URLs, timestamps, event counts, screenshot lists. Confirm whether it adds discussion that is not in the JSON files. Ledger `player_shell_with_inlined_json_fully_read` plus what you extracted. Do not mine new solutions only from viewer chrome.

12. **`viewer.js` and `viewer.css` in full.**  
    Read both files completely. Confirm they are the generic player (no session-specific talk). Extract file role + byte size + that confirmation into the ledger. Status: `player_chrome_fully_read_confirmed`. Do not write solutions about the recorder UI.

13. **`screenshots/index.json` in full.**  
    Every shot: file, t, reason (start|periodic|…), url, mask_rects. Build a time index: for any speech time T, pick the screenshot with the nearest `t` that is ≤ T, and also note the next shot.

14. **Every screenshot image**  
    Use the Read tool on each `screenshots/*.jpg` (and any `*.png`). Cursor can see images. You must look at them, not only the index. That is how you pinpoint *what* the solution was for.  
    If there are many shots, still read them all. Batch Read calls. Tie each solution to one or more screenshot filenames when the talk is about the screen.  
    Screenshots are for correlation, not for inventing extra ideas.

15. **Previous / next folder (mandatory, even if NONE is not applicable)**  
    If `{{PREV_FOLDER}}` is not NONE, read at least:

    - `manifest.json`
    - last ~2 minutes of `audio.srt` and `audio.tsv` (and matching tail of `audio.text`)
    - last 5 screenshots
    - last 20 non-idle events in `events.json`
    - filenames of any `issue-*.md` / `solution-*.md` at the boundary if present (names only from listing is not enough for speech; you still need the audio tail)

    If `{{NEXT_FOLDER}}` is not NONE, read the same from the **start** of that folder (first ~2 minutes, first 5 screenshots, first 20 non-idle events).

    Use this only to detect continuation and to avoid splitting or dropping a topic. You write files only into `{{FOLDER}}`.

## How to find solutions (join first, then name the solution)

Work in time order. Never write a solution from one file in isolation. Never treat “I read every file” as done if you have not joined them.

The files in the folder are one recording cut into parts:

| What they were doing | Where it lives |
|---|---|
| What they said | `audio.*` (all transcript forms + word times in `audio.json`) |
| What they pointed at / clicked / typed / scrolled | `events.json` + `replay.spec.ts` |
| What was on the page | screenshots + `pages.json` + `tabs.json` + `manifest.json` |
| When | every timestamp, converted to one millisecond clock |
| Extra site/runtime signal | `console.json` (even if empty) |
| Player wrapper, not talk | `index.html`, `viewer.js`, `viewer.css` — still confirm, still join counts/ids if inlined |
| Already-known defects (map only) | `issue-*.md` — timestamps and topic names; not proof of a solution |

Method:

1. Build **one** timeline: speech cues + events + screenshots, all on millisecond clock. This timeline is the correlation object. Files are only feeds into it.
2. Walk the timeline. At each beat, fill this join before you decide anything:
   - said: (quote + which audio file)
   - doing: (click/focus/scroll/idle + locator)
   - seeing: (screenshot filename + what is visible)
   - where: (URL + page title + on-screen object name)
3. A solution exists when that join shows they treated something as a direction to take, a pattern to apply, a maybe, a convenience rule, or a company principle — including when the words are about Google Flights, Amazon, lawyers, or another outside thing, as long as they used it as a model or warning for Shroffin / this user / this page.
4. Pinpoint, in one concrete sentence, the **joined** fact: **what to do (or what good thing), for which topic, on which page/object if any, according to them, and why they said it that way.**
   Bad: “make it better” (one-file guess).  
   Bad: “they mentioned Google Flights” with no applied point.  
   Bad: restating the issue (“Adjust eligibility is hidden”) as if that were the solution.  
   Good: “On Explore banks, at 00:00:01, they said to show the extra eligibility questions as columns directly instead of behind Adjust eligibility; they were looking at the five-column bank table in `screenshots/0001.jpg` — the solution is for the extras vs the bank list.”  
   Good: “While idle on Explore banks, they described Google Flights ‘prices are low / high / unlikely to go down’ as honesty the user should get, and Amazon Prime Day as the opposite (making a fool of the customer). The solution is an honesty/advice layer for this page’s rates, borrowed from those products, even though those products are not Shroffin.”
5. Keep gathering until they change topic. That whole stretch, including side examples, belongs in one solution file. Analogies stay in the **same** file when they serve one direction. Split only when they clearly raise a second distinct direction (example: checkbox filters vs a separate “we are lawyers for you” product principle aimed at a different user-job).
6. If they return to the same direction later in this folder, it is the same solution (append chronology). If they raise a different direction about the same screen, that is a new solution, and you cross-link.
7. If ASR is garbage but a click + screenshot + a few recoverable words show they were clearly proposing a specific direction, still record it, mark `confidence: low` or `medium`, and quote the raw ASR. The join is what saves you when one file is wrong.
8. If two files conflict, do not average them and do not pick the longest transcript. Resolve using the join (screen + click win over a mismatched word). Write the conflict in ASR notes.
9. Do not merge two different directions into one file because they happened in the same minute.
10. Do not split one direction into many files because they repeated themselves.
11. Do not output a file-by-file dump and call that the solution. The solution is the conclusion of the join. The file dump is the proof.
12. Do not skip a borrowed-pattern stretch because “it is not about our company.” If they said it in this review as a model, warning, or method, it belongs.

## What to write

For each solution, write exactly one file in `{{FOLDER}}`:

`solution-NN-short-kebab-title.md`

- `NN` is `01`, `02`, … in the order the solution **first becomes clear** in this folder.
- Title is the pinpoint of the direction, not a vague theme (`show-extra-eligibility-as-prefilled-columns`, not `ideas` or `misc`).
- ASCII kebab-case. No spaces.

Overwrite if a previous run left a `solution-*.md` with the same name. Do not keep old extra solution files that this run does not still stand behind. Delete leftover `solution-*.md` from older runs that are not in this run’s set. Never delete `issue-*.md`.

### File shape (mandatory)

The first lines after the title heading must be a **human summary of at most 4 short lines**. A non-developer should understand the proposed good thing, what it is for, and why they wanted it, from those 4 lines alone. No jargon without a plain phrase. No tool names. No JSON in those 4 lines.

Then YAML (machine). Then human body. Then JSON (machine). Both machine blocks must agree with the human body. If they disagree, the file is wrong.

Use this shape:

```markdown
# <Solution title in plain English>

<line 1 — the good thing / direction, in everyday words>
<line 2 — what topic / page / user-job this is for>
<line 3 — why they said it that way (user, trust, company, borrowed example)>
<line 4 — decided, maybe, or they disagreed — only if that is true; else a last plain fact>

---
solution_id: "{{FOLDER_NAME}}/solution-NN-short-kebab-title"
solution_title: "<same as heading>"
folder: "{{FOLDER_NAME}}"
sequence_index: {{SEQUENCE_INDEX}}
recording_id: "<manifest.id>"
recording_started_at: "{{STARTED_AT}}"
recording_ended_at: "{{ENDED_AT}}"
duration_ms: {{DURATION_MS}}
page_url: "<url they were on when this was discussed, or null if not about a page>"
page_title: "<from pages.json / landmark, or null>"
on_screen_object: "<button/text/block/control this is for, or none-company-talk>"
for_topic: "<the subject this solution serves — required>"
pinpoint: "<one sentence: what to do / the good thing, for that topic, according to them>"
kind: ["<proposed_change|potential_suggestion|borrowed_pattern|user_convenience|company_thinking|product_principle — one or more>"]
decidedness: "<decided|leaning|brainstorm|disagreement|unstated>"
basis: "<why they said it that way, from their words — user convenience, trust, Indian user, analogy, company role, etc.>"
analog_source: "<Google Flights|Amazon|Apple|lawyers|juicer|none|other named source>"
linked_issue_files: ["issue-NN-....md or empty"]
severity_as_spoken: "<critical|high|medium|low|unstated — only if they implied stakes; else unstated>"
confidence: "<high|medium|low>"
asr_conflict: "<false|true>"
continuation: "<standalone|continues_from_prev|continues_into_next|both>"
continued_from_folder: "<{{PREV_NAME}} or null>"
continued_into_folder: "<{{NEXT_NAME}} or null>"
related_solution_files: ["solution-NN-....md"]
source_files_used: ["<every raw recorder file in this folder — complete list, same as find minus helpers and outputs>"]
speech_clock: ["<srt cue range or tsv start-end ms>"]
event_t_ms: [<t values>]
screenshot_files: ["screenshots/00NN.jpg"]
tags: ["<from their words: convenience, trust, honesty, layout, copy, intelligence, company, borrowed-pattern, ...>"]
---

## Exact solution
The joined conclusion: what they said to do, try, copy, or stand for. Quote them. Name what it is **for**. This section is the solution, not a file list, and not a restatement of the defect.

## What this is for
The topic / page / control / user-job. If this sits next to an existing issue file, name that file in one line and say the issue is the problem, this file is the direction. Do not paste the issue.

## Why they said it that way
Basis, from their words: user convenience, trust, launch, Indian user, analogy, company role, fear of scam, friction, etc. Include disagreement if they did not agree.

## How the files join (required)
At the key time(s), write the join in this order so a human and a machine can see they belong together:
- time (ms and clock)
- what they said (quote + audio file)
- what they did (event kind + locator from events.json / replay.spec.ts)
- what was on screen (screenshot filename + what you see)
- what page/object (URL + pages.json name), or idle company-talk on this URL
- therefore the actual solution is: <one sentence, including what it is for>

If a file did not add a new fact at that moment, still say so here or in Evidence by file. Do not skip the join because one feed was idle or empty. Idle + outside-product talk still joins to the page they were sitting on.

## Pinpoint
One paragraph that a machine and a human can both parse: topic + (page + object if any) + direction + why they cared (user / trust / company / borrowed pattern), using only the joined evidence, not one file alone.

## Related discussion (not the solution itself)
Examples, analogies that support this same direction, pros/cons, brainstorming, company/user/future talk, CTO asides, the defect this direction answers. Do not omit. Do not promote a supporting analogy to a second file unless it is a second distinct direction.

## Chronology in this recording
Time-ordered beats. Each beat: clock + what was said + what was clicked/focused/scrolled + which screenshot. Include idle-talk (they often design during `idle` events).

## Cross-recording continuation
If this topic starts or ends mid-thought, state what the previous/next folder was doing. Quote the boundary lines. If standalone, say so.

## Evidence by file (every raw recorder file in the folder — no omissions)
One bullet per **raw recorder** file in `{{FOLDER}}`. The bullet count must equal the `find` file count minus `issue-*.md`, `_coverage-ledger.json`, this solution file, other solution files, and `_solution-coverage-ledger.json`. Every raw file gets a bullet even if it did not change the solution conclusion.

Each bullet must contain:
- relative path
- what you took from it (quote, timestamp, URL, locator, screenshot time, empty-array, player-chrome confirmation, etc.)
- how it was used for **this** solution: `supports_solution` | `related_discussion` | `timeline_alignment` | `checked_no_extra_signal`

Metadata that always counts as “used”: filenames, timestamps, duration, viewport, URL, locator strings, screenshot `t` and `reason`, empty console, duplicate transcript text that you reconciled.

After the raw-file bullets, add a short **Helper issue files** subsection if any `issue-*.md` were read: filename + how it was used as a map (`timestamp_map` | `cross_link` | `not_used`). Helpers must not appear in `source_files_used`.

## ASR notes
Where transcripts disagree, show the variants (text vs srt vs tsv vs json words) and which one you used, and why (usually screenshot/click).

## JSON
```json
{
  "solution_id": "{{FOLDER_NAME}}/solution-NN-short-kebab-title",
  "solution_title": "",
  "folder": "{{FOLDER_NAME}}",
  "sequence_index": 0,
  "recording_id": "",
  "recording_started_at": "",
  "recording_ended_at": "",
  "duration_ms": 0,
  "page_url": "",
  "page_title": "",
  "on_screen_object": "",
  "for_topic": "",
  "pinpoint": "",
  "kind": [],
  "decidedness": "unstated",
  "basis": "",
  "analog_source": "none",
  "linked_issue_files": [],
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": false,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_solution_files": [],
  "source_files_used": [],
  "speech_clock": [],
  "event_t_ms": [],
  "screenshot_files": [],
  "tags": [],
  "quotes": [{"clock": "", "text": "", "artifact": "audio.srt"}],
  "clicks": [{"t_ms": 0, "name": "", "css": ""}],
  "related_discussion_present": true
}
```
```

## Coverage ledger (mandatory, last)

Write `{{FOLDER}}/_solution-coverage-ledger.json` **after** solution files. It is how the parent proves you did not skip files. Do not write `_coverage-ledger.json` (that name belongs to the issue run).

```json
{
  "folder": "{{FOLDER_NAME}}",
  "sequence_index": {{SEQUENCE_INDEX}},
  "recording_id": "",
  "started_at": "{{STARTED_AT}}",
  "ended_at": "{{ENDED_AT}}",
  "duration_ms": {{DURATION_MS}},
  "prev_folder": "{{PREV_NAME}}",
  "next_folder": "{{NEXT_NAME}}",
  "files_in_folder": ["relative/path", "...every raw recorder file..."],
  "file_status": {
    "manifest.json": "fully_read",
    "audio.json": "fully_read_chunked",
    "audio.webm": "binary_audio_untranscribed_use_text_artifacts",
    "viewer.js": "player_chrome_fully_read_confirmed",
    "screenshots/0000.jpg": "fully_read_image"
  },
  "files_missing_expected": ["audio_sentences.txt or none"],
  "helper_issue_files_read": ["issue-01-....md"],
  "screenshots_index_count": 0,
  "screenshots_files_seen": 0,
  "solutions_written": ["solution-01-....md"],
  "solution_count": 0,
  "zero_solution_reason": null,
  "linked_issues": [{"solution_file": "", "issue_file": ""}],
  "continuations": [{"solution_file": "", "direction": "from|into", "other_folder": ""}],
  "prev_boundary_read": true,
  "next_boundary_read": true,
  "issue_files_left_untouched": true
}
```

`files_in_folder` + `file_status` must cover every **raw recorder** file from `find` (exclude `issue-*.md`, `_coverage-ledger.json`, `solution-*.md`, `_solution-coverage-ledger.json`, `PROMPT-*.md`). If counts do not match, you are not done. Go back and read the missing file.

Add `file_usage` (required): one object per raw recorder file:

```json
"file_usage": [
  {
    "path": "audio.srt",
    "bytes": 0,
    "status": "fully_read",
    "facts_taken": ["cue 00:01:02 speech proposing prefilled columns"],
    "used_for": ["supports_solution", "timeline_alignment"]
  }
]
```

`file_usage.length` must equal `files_in_folder.length`. Parent will fail the folder if this is short.

`screenshots_index_count` must equal `screenshots_files_seen` and equal the number of image files.

`audio.webm` must never have been played. Status must be `binary_audio_untranscribed_use_text_artifacts`.

## Return to parent

Return a short machine list only:

- folder name
- solution_count
- solution filenames + one-line pinpoint each (must include what it is for)
- zero_solution_reason if any
- continuation pairs
- linked issue files
- confirmation that `_solution-coverage-ledger.json` is written
- confirmation that `issue-*.md` and `_coverage-ledger.json` were not modified

Do not write solutions into any other folder.

END Folder Agent Contract

COPY TO HERE

# Cursor Issue Finder — paste-ready prompt

How to use this (for you, not for the AI):

You paste **one prompt, one time**, into **one** new Cursor Agent chat. Stop there. You do not launch the parallel agents. You do not paste a second prompt. The agent that receives this message must start all folder-agents itself.

1. Open a **new Cursor Agent chat** with the `aoo-static-gh` folder available.
2. Copy **everything from the line `COPY FROM HERE` down to `COPY TO HERE`**.
3. Paste it as your only message. Do not add extra instructions.
4. Let that one agent run until every `wb-rec-*` folder has a `_coverage-ledger.json` file.

---

COPY FROM HERE

You are Cursor Agent in Agent mode. You are an expert Issue Finder.

This message is the only prompt the human will give you. There is no second prompt. There is no per-folder prompt for the human to paste. You must do the whole job from this one message.

**Parallel agents are your job, not the human’s.** After you inventory the `wb-rec-*` folders, you must immediately launch one Task child agent per folder, all in a single assistant message so they run in parallel. Do not ask the human to start agents. Do not ask the human to confirm. Do not wait. Do not process folders one-by-one yourself in this parent chat. Do not tell the human to open 30 chats.

You have exactly one job: find every real issue that the founder and co-founder actually discussed while reviewing the Shroffin website, and write one detailed file per issue. Do nothing else. Do not fix the website. Do not suggest fixes. Do not assign owners. Do not invent issues that were not discussed. Do not independently QA the screenshots for bugs they never talked about.

Opening every file is not the job. The job is to **join** those files, because they are all about the same moments of the same review. Speech, clicks, page, screenshots, and timestamps are one event split across files. The actual issue is what you can name only after that join. A quote from the transcript alone is not an issue. A screenshot alone is not an issue. A click alone is not an issue. The issue is the thing on the site they were attacking, recovered by lining those files up.

## Why this work exists (do not skip; this is the quality bar)

Shroffin is the founder’s first startup. This website is the first public showcase of that startup. The founder has been building this site alone since 1 April 2026 and is about to launch in a few days. The co-founder is a software engineer at a large company (~50 LPA, ~15 years, senior in that company’s tech hierarchy) and did not build this website. They reviewed the live local site together using the Workbooks Recorder Chrome extension (https://github.com/workbooks-dev/workbooks-recorder).

The recording dump is:

`/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/`

Each `wb-rec-*` subfolder is one recording, generally under 10 minutes because of the recorder cap. One topic often starts in one folder and continues in the next. Never treat a folder as a closed universe.

The site will be seen by Shroffin users, startup investors, possible hires, friends and family, and the general public. First-24-hour traffic is meant to be in the tens of thousands. Every discussed issue must be recovered completely. Missing an issue is a failure.

## Fresh start

Issue-finding was already attempted earlier. Ignore it.

Treat as non-evidence and do not read them for conclusions:

- any existing `issue-*.md`
- any `ISSUE_INDEX.md` / `ISSUE-INDEX.md`
- any `_coverage-ledger.json` from a previous run (overwrite on this run)
- this prompt file itself
- do not treat `viewer.js` / `viewer.css` as discussion; still open them fully, confirm they are only the replay player, and record that confirmation in the ledger

Rebuild every issue only from raw recorder files and their metadata.

## What “an issue” is

An issue is something the two people treated as wrong, broken, confusing, ugly, dishonest, missing, risky, inconsistent, hard to use, badly worded, badly designed, or needing change on the website or in the product as shown on the website.

Include, inside that issue’s file, all related talk on the same topic even when that talk is not itself the issue: examples, analogies (Google Flights, Amazon sale, juicer, lawyers, etc.), pros/cons, “what if we put it here vs there”, how they think about the user, the company, and the future. Related talk must not be dropped. Related talk must not become a separate issue file unless they clearly raised a second distinct problem.

Do not create a file for pure off-topic chat (personal stories, bar talk) unless they used it as an example for a website/product issue. In that case it belongs under Related discussion of that issue.

If a folder has no discussed website/product issue, create no issue file. Still write `_coverage-ledger.json` explaining that with evidence.

## How Cursor must execute (this is the runtime contract)

You are the **parent / orchestrator** that received this single prompt. You do not extract issues yourself. You only:

1. Inventory the folders
2. Launch one child agent per folder **yourself**, in parallel, using the Task tool
3. Verify coverage when children return
4. Relaunch any child that failed or skipped files — again yourself, no human prompt

Forbidden:

- Asking the user to launch, paste, or confirm anything
- Writing 30 issue-finder chats for the user
- Doing the folder work serially in this parent thread instead of Task children
- Stopping after inventory to “wait for approval”

Cursor facts you must obey:

- Child agents launched with the Task tool **cannot see this chat**. Each Task `prompt` must contain the full Folder Agent Contract below, plus the exact folder path, plus the previous and next folder paths.
- Use `subagent_type: generalPurpose`. Do **not** use `explore` (too shallow; will skip files). Do not use `shell` for this work.
- To run in parallel, send **one assistant message containing many Task tool calls** (one Task per `wb-rec-*` folder). That is the only way Cursor runs them together.
- Target: all 30 folders in that one message. If the tool layer rejects or drops some, immediately send another message with Task calls for every folder that still has no `_coverage-ledger.json`. Do not start reading transcripts in the parent while waiting.
- You may use Glob / Shell only for inventory and later verification, not for issue writing.
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

If a folder is missing or an extra `wb-rec-*` exists, include the extra and still process every `wb-rec-*`. Never drop a folder because it is short or because `audio.text` is empty.

For each folder, read `manifest.json` only far enough to pass the child: `id`, `start_url`, `started_at`, `ended_at`, `duration_ms`, `events_count`, `screenshots_count`.

Known traps (children must still process these, not skip them):

- 1928 (~5s) and 1950 (~7s): empty / tiny transcripts. Still use events, screenshots, manifest.
- 2201 (~11s): tiny transcript. Still process.
- Several folders are 2–6 minutes (2018, 2134, 2204, 2249, 2302, 0029). They are real sessions, not noise.
- Time gaps (for example 2018 → 2106) may be a break. Do not assume continuation across a long gap unless speech at the boundary is clearly the same unfinished topic. Do assume continuation across short gaps (under ~15 minutes) when the last topic of A matches the first topic of B.

### Step 2 — Launch children (parent)

For each folder, one Task:

- description: `Issues in <folder-name>`
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

- `_coverage-ledger.json` exists
- Parent re-runs `find` itself and checks: disk file count (minus new `issue-*.md`, minus `_coverage-ledger.json`, minus this prompt) **equals** `files_in_folder.length` **equals** `file_usage.length` **equals** keys in `file_status`
- every raw file has `status: fully_read` or `fully_read_chunked` or `fully_read_image` or a hard reason (`binary_audio_untranscribed_use_text_artifacts`, `player_chrome_fully_read_confirmed`)
- no `status: skipped`
- every `file_usage` entry has non-empty `facts_taken` (even if the fact is “file is empty” or “generic player, no session talk”)
- issue files exist for every issue the child’s returned list names
- each issue file starts with a human summary of at most 4 lines

If any folder fails verification, relaunch **only that folder’s** child with the same full contract plus a note of what was missing. Do not patch issue files yourself.

When all ledgers pass, reply to the user with only:

- how many folders processed
- how many issue files per folder (name + count)
- which folders had zero issues, and the one-line reason from the ledger
- which issues continue across folders (name + from-folder → to-folder)

Do not paste issue contents into chat.

---

# Folder Agent Contract

(Parent: paste this whole section into every Task prompt, with placeholders replaced.)

You are Cursor Agent, a child worker. You cannot see the parent chat. This prompt is your only instruction.

You are an expert Issue Finder. One job: recover every issue discussed in `{{FOLDER}}` and write one markdown file per issue inside that same folder.

## Assigned work

- Folder: `{{FOLDER}}`
- Name: `{{FOLDER_NAME}}`
- Sequence index: `{{SEQUENCE_INDEX}}` of 30
- Manifest window: `{{STARTED_AT}}` → `{{ENDED_AT}}` (`{{DURATION_MS}}` ms)
- Start URL: `{{START_URL}}`
- Previous recording: `{{PREV_FOLDER}}` (`{{PREV_NAME}}`)
- Next recording: `{{NEXT_FOLDER}}` (`{{NEXT_NAME}}`)

## Absolute laws

1. Find only issues they actually discussed.
2. Do not invent issues from your own taste, from screenshot-only bugs they never mentioned, or from engineering guesses.
3. Do not suggest fixes, owners, timelines, or code changes.
4. Ignore previous issue-finding files in this folder (`issue-*.md`, old ledgers). Overwrite the ledger at the end.
5. You must **read every file** in `{{FOLDER}}`. That is the input, not the output. Listing a filename without opening it is a failure. Skipping a file because it looks like a player, is empty, is huge, is binary, is a screenshot, or “probably duplicates another file” is a failure.
6. You must **correlate** every file with the others. They are not independent notes. They are slices of one discussion. The actual issue is the joined fact, not a quote from one file.
   - Same clock: convert speech, events, and screenshots to milliseconds from session start and line them up.
   - Same moment: at time T, what they said + what they clicked + what was on screen + which page/URL + which field/button.
   - Same object: name the on-screen thing using pages.json + click locator + screenshot together, not from memory.
   - Same words: when `audio.text` / `.srt` / `.tsv` / `.json` disagree, pick the reading that matches the click and the screenshot at that time. Say that you did this.
   - A sentence in `audio.srt` is not an issue until that join is done. If you cannot join speech to screen and click, you have not found the issue yet — keep reading. Do not publish a vague theme.
7. Topics continue across the 10-minute cap. Read the previous folder’s ending and the next folder’s beginning. If this folder’s last topic is unfinished, say so. If this folder’s first topic is a continuation, say so. Write the issue file **in this folder** for the part discussed here. Cross-link the other folder by name. Do not skip writing just because it started earlier. Do not skip writing just because it continues later.
8. Same evidence must always produce the same issue split and the same title. Be deterministic.
9. Related discussion that is not itself the issue still goes into that issue file. Do not drop it.
10. Do not edit the Shroffin website. Do not commit.

## Cursor tools you must use (and how)

This is how you actually work in Cursor. Follow it. Do not “just remember the folder”.

1. **Shell** `find "{{FOLDER}}" -type f | sort`  
   Keep the full list. This is the coverage universe.

2. **Read `manifest.json` in full.**  
   Use: format, id, start_url, urls, started_at, ended_at, duration_ms, events_count, screenshots_count, console_count, tabs_count, pages_count, mic, viewport, audio.file, capture_model.

3. **Read all speech artifacts. None is optional.**  
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

4. **`audio.webm`**  
   Binary mic recording. You cannot listen. Record in the ledger: `binary_audio_untranscribed_use_text_artifacts`. Do not treat this as a skip of the session. The text artifacts are the speech.

5. **`events.json` in full.**  
   Align `t` (ms from session start) and `ts` with transcript clocks.  
   `audio.tsv` start/end are milliseconds. `audio.srt` is `HH:MM:SS,mmm`. `audio.json` words are seconds. Convert to one clock: milliseconds from session start.  
   Event kinds you will see: landmark_snapshot, idle, focus, click, dblclick, input, change, submit, key, scroll, navigation, tab_switch, marker, note, pause, resume, timeout, network, assertion, waiting_start, waiting_end.  
   For issue pinpoint, clicks/focus/input/scroll/navigation/landmark_snapshot matter most. Idle is still metadata (they were talking while idle). Extract from click targets: accessible_name, text, label, placeholder, id, css, locators, URL, t.

6. **`pages.json` in full.**  
   Page title, headings, landmarks, forms, fields, nav. This is what the site contained. Use it to name the on-screen object they meant.

7. **`tabs.json` in full.**  
   Which tab/URL they were on and when.

8. **`console.json` in full.**  
   Often `[]`. Empty is a finding: no console errors captured. Still read it.

9. **`replay.spec.ts` in full.**  
   Playwright replay of the session. Comments include idle gaps and locators. Use it as a second timeline of what they did.

10. **`index.html` in full.**  
    Replay viewer. Read the whole file. It may inline copies of manifest/events/tabs/screenshots. Extract: any inlined session ids, URLs, timestamps, event counts, screenshot lists. Confirm whether it adds discussion that is not in the JSON files. Ledger `player_shell_with_inlined_json_fully_read` plus what you extracted. Do not mine new issues only from viewer chrome.

11. **`viewer.js` and `viewer.css` in full.**  
    Read both files completely. Confirm they are the generic player (no session-specific talk). Extract file role + byte size + that confirmation into the ledger. Status: `player_chrome_fully_read_confirmed`. Do not write issues about the recorder UI.

12. **`screenshots/index.json` in full.**  
    Every shot: file, t, reason (start|periodic|…), url, mask_rects. Build a time index: for any speech time T, pick the screenshot with the nearest `t` that is ≤ T, and also note the next shot.

13. **Every screenshot image**  
    Use the Read tool on each `screenshots/*.jpg` (and any `*.png`). Cursor can see images. You must look at them, not only the index. That is how you pinpoint *what* they were pointing at.  
    If there are many shots, still read them all. Batch Read calls. Tie each issue to one or more screenshot filenames.  
    Screenshots are for correlation, not for inventing extra visual bugs.

14. **Previous / next folder (mandatory, even if NONE is not applicable)**  
    If `{{PREV_FOLDER}}` is not NONE, read at least:

    - `manifest.json`
    - last ~2 minutes of `audio.srt` and `audio.tsv` (and matching tail of `audio.text`)
    - last 5 screenshots
    - last 20 non-idle events in `events.json`

    If `{{NEXT_FOLDER}}` is not NONE, read the same from the **start** of that folder (first ~2 minutes, first 5 screenshots, first 20 non-idle events).

    Use this only to detect continuation and to avoid splitting or dropping a topic. You write files only into `{{FOLDER}}`.

## How to find issues (join first, then name the issue)

Work in time order. Never write an issue from one file in isolation. Never treat “I read every file” as done if you have not joined them.

The files in the folder are one recording cut into parts:

| What they were doing | Where it lives |
|---|---|
| What they said | `audio.*` (all transcript forms + word times in `audio.json`) |
| What they pointed at / clicked / typed / scrolled | `events.json` + `replay.spec.ts` |
| What was on the page | screenshots + `pages.json` + `tabs.json` + `manifest.json` |
| When | every timestamp, converted to one millisecond clock |
| Extra site/runtime signal | `console.json` (even if empty) |
| Player wrapper, not talk | `index.html`, `viewer.js`, `viewer.css` — still confirm, still join counts/ids if inlined |

Method:

1. Build **one** timeline: speech cues + events + screenshots, all on millisecond clock. This timeline is the correlation object. Files are only feeds into it.
2. Walk the timeline. At each beat, fill this join before you decide anything:
   - said: (quote + which audio file)
   - doing: (click/focus/scroll/idle + locator)
   - seeing: (screenshot filename + what is visible)
   - where: (URL + page title + on-screen object name)
3. An issue exists only when that join shows they treated something on the site as wrong, broken, confusing, ugly, dishonest, missing, risky, inconsistent, hard to use, badly worded, badly designed, or needing change.
4. Pinpoint, in one concrete sentence, the **joined** fact: **what object on which page is wrong, in what way, according to them.**
   Bad: “spacing is off” (one-file guess).  
   Bad: “they said ‘this is not centre’” with no screen.  
   Good: “On Explore banks, at 01:12, they said the block is not centred; they were idle on that hero; screenshot `screenshots/0014.jpg` shows more gap above ‘Get a fair view of home loans’ than below the CBE button — that uneven gap is the issue.”
5. Keep gathering until they change topic. That whole stretch, including side examples, belongs in one issue file. Analogies (Google Flights, Amazon, juicer, lawyers) stay in Related discussion of the **same** joined issue, not as separate issues.
6. If they return to the same problem later in this folder, it is the same issue (append chronology). If they raise a different problem about the same screen, that is a new issue, and you cross-link.
7. If ASR is garbage but a click + screenshot + a few recoverable words show they were clearly attacking a specific control, still record the issue, mark `confidence: low` or `medium`, and quote the raw ASR. The join is what saves you when one file is wrong.
8. If two files conflict, do not average them and do not pick the longest transcript. Resolve using the join (screen + click win over a mismatched word). Write the conflict in ASR notes.
9. Do not merge two different problems into one file because they happened in the same minute.
10. Do not split one problem into many files because they repeated themselves.
11. Do not output a file-by-file dump and call that the issue. The issue is the conclusion of the join. The file dump is the proof.

## What to write

For each issue, write exactly one file in `{{FOLDER}}`:

`issue-NN-short-kebab-title.md`

- `NN` is `01`, `02`, … in the order the issue **first becomes clear** in this folder.
- Title is the pinpoint, not a vague theme (`hero-block-vertical-spacing`, not `design` or `misc`).
- ASCII kebab-case. No spaces.

Overwrite if a previous run left an `issue-*.md` with the same name. Do not keep old extra issue files that this run does not still stand behind. Delete leftover `issue-*.md` from older runs that are not in this run’s set.

### File shape (mandatory)

The first lines after the title heading must be a **human summary of at most 4 short lines**. A non-developer should understand the problem from those 4 lines alone. No jargon without a plain phrase. No tool names. No JSON in those 4 lines.

Then YAML (machine). Then human body. Then JSON (machine). Both machine blocks must agree with the human body. If they disagree, the file is wrong.

Use this shape:

```markdown
# <Issue title in plain English>

<line 1>
<line 2>
<line 3>
<line 4>

---
issue_id: "{{FOLDER_NAME}}/issue-NN-short-kebab-title"
issue_title: "<same as heading>"
folder: "{{FOLDER_NAME}}"
sequence_index: {{SEQUENCE_INDEX}}
recording_id: "<manifest.id>"
recording_started_at: "{{STARTED_AT}}"
recording_ended_at: "{{ENDED_AT}}"
duration_ms: {{DURATION_MS}}
page_url: "<url they were on when this issue was discussed>"
page_title: "<from pages.json / landmark>"
on_screen_object: "<button/text/block/control they meant>"
pinpoint: "<one sentence: what is wrong with that object>"
severity_as_spoken: "<critical|high|medium|low|unstated — only if they implied stakes; else unstated>"
confidence: "<high|medium|low>"
asr_conflict: "<false|true>"
continuation: "<standalone|continues_from_prev|continues_into_next|both>"
continued_from_folder: "<{{PREV_NAME}} or null>"
continued_into_folder: "<{{NEXT_NAME}} or null>"
related_issue_files: ["issue-NN-....md"]
source_files_used: ["<every raw file in this folder — complete list, same as find>"]
speech_clock: ["<srt cue range or tsv start-end ms>"]
event_t_ms: [<t values>]
screenshot_files: ["screenshots/00NN.jpg"]
tags: ["<from their words: copy, layout, spacing, trust, interaction, data, navigation, ...>"]
---

## Exact issue
The joined conclusion: what is wrong, on which page, on which control/text/layout. Quote them. This section is the issue, not a file list.

## How the files join (required)
At the key time(s), write the join in this order so a human and a machine can see they belong together:
- time (ms and clock)
- what they said (quote + audio file)
- what they did (event kind + locator from events.json / replay.spec.ts)
- what was on screen (screenshot filename + what you see)
- what page/object (URL + pages.json name)
- therefore the actual issue is: <one sentence>

If a file did not add a new fact at that moment, still say so here or in Evidence by file. Do not skip the join because one feed was idle or empty.

## Pinpoint
One paragraph that a machine and a human can both parse: page + object + defect + why they cared (user / trust / launch), using only the joined evidence, not one file alone.

## Related discussion (not the issue itself)
Examples, analogies, pros/cons, brainstorming, company/user/future talk that sat on this topic. Do not omit.

## Chronology in this recording
Time-ordered beats. Each beat: clock + what was said + what was clicked/focused/scrolled + which screenshot. Include idle-talk (they often talk during `idle` events).

## Cross-recording continuation
If this topic starts or ends mid-thought, state what the previous/next folder was doing. Quote the boundary lines. If standalone, say so.

## Evidence by file (every file in the folder — no omissions)
One bullet per **raw** file in `{{FOLDER}}`. The bullet count must equal the `find` file count (minus this issue file, other issue files, and the ledger). Every file gets a bullet even if it did not change the issue conclusion.

Each bullet must contain:
- relative path
- what you took from it (quote, timestamp, URL, locator, screenshot time, empty-array, player-chrome confirmation, etc.)
- how it was used for **this** issue: `supports_issue` | `related_discussion` | `timeline_alignment` | `checked_no_extra_signal`

Metadata that always counts as “used”: filenames, timestamps, duration, viewport, URL, locator strings, screenshot `t` and `reason`, empty console, duplicate transcript text that you reconciled.

## ASR notes
Where transcripts disagree, show the variants (text vs srt vs tsv vs json words) and which one you used, and why (usually screenshot/click).

## JSON
```json
{
  "issue_id": "{{FOLDER_NAME}}/issue-NN-short-kebab-title",
  "issue_title": "",
  "folder": "{{FOLDER_NAME}}",
  "sequence_index": 0,
  "recording_id": "",
  "recording_started_at": "",
  "recording_ended_at": "",
  "duration_ms": 0,
  "page_url": "",
  "page_title": "",
  "on_screen_object": "",
  "pinpoint": "",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": false,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": [],
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

Write `{{FOLDER}}/_coverage-ledger.json` **after** issue files. It is how the parent proves you did not skip files.

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
  "files_in_folder": ["relative/path", "...every raw file..."],
  "file_status": {
    "manifest.json": "fully_read",
    "audio.json": "fully_read_chunked",
    "audio.webm": "binary_audio_untranscribed_use_text_artifacts",
    "viewer.js": "player_chrome_fully_read_confirmed",
    "screenshots/0000.jpg": "fully_read_image"
  },
  "files_missing_expected": ["audio_sentences.txt or none"],
  "screenshots_index_count": 0,
  "screenshots_files_seen": 0,
  "issues_written": ["issue-01-....md"],
  "issue_count": 0,
  "zero_issue_reason": null,
  "continuations": [{"issue_file": "", "direction": "from|into", "other_folder": ""}],
  "prev_boundary_read": true,
  "next_boundary_read": true
}
```

`files_in_folder` + `file_status` must cover every raw file from `find`. If counts do not match, you are not done. Go back and read the missing file.

Add `file_usage` (required): one object per raw file:

```json
"file_usage": [
  {
    "path": "audio.srt",
    "bytes": 0,
    "status": "fully_read",
    "facts_taken": ["cue 00:01:02 speech about hero spacing"],
    "used_for": ["supports_issue", "timeline_alignment"]
  }
]
```

`file_usage.length` must equal `files_in_folder.length`. Parent will fail the folder if this is short.

`screenshots_index_count` must equal `screenshots_files_seen` and equal the number of image files.

## Return to parent

Return a short machine list only:

- folder name
- issue_count
- issue filenames + one-line pinpoint each
- zero_issue_reason if any
- continuation pairs
- confirmation that `_coverage-ledger.json` is written

Do not write issues into any other folder.

END Folder Agent Contract

COPY TO HERE

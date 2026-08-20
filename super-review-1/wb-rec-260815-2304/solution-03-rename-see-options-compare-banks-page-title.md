# Rename See options to Compare banks and fix Explore banks page title

The blue button under the loan form should say Compare banks, not See options.
The page title Explore banks is wrong too — explore sounds like dumping everything in, but the job is to compare.
They said this twice: Explore doesn't work.
Decided — not a maybe.

---
solution_id: "wb-rec-260815-2304/solution-03-rename-see-options-compare-banks-page-title"
solution_title: "Rename See options to Compare banks and fix Explore banks page title"
folder: "wb-rec-260815-2304"
sequence_index: 21
recording_id: "6033ef99-94cd-427e-b722-e831e6342b86"
recording_started_at: "2026-08-15T17:34:55.529Z"
recording_ended_at: "2026-08-15T17:43:48.848Z"
duration_ms: 533319
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "See options button on Loan inputs card; page H1/title Explore banks"
for_topic: "Button and page names on Explore banks should say compare, not options or explore"
pinpoint: "On Explore banks, they said the See options button should be named Compare banks, and that Explore banks does not work because explore means dump everything in while the job is compare."
kind: ["proposed_change", "user_convenience"]
decidedness: "decided"
basis: "Name should match what the customer is actually doing — comparing banks, not browsing all options or exploring everything"
analog_source: "none"
linked_issue_files: ["issue-03-see-options-explore-banks-naming.md"]
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: ["solution-01-extra-eligibility-prefilled-columns-tooltips-no-mandatory.md", "solution-02-show-column-importance-stars-meter-tiered-cards.md"]
source_files_used: ["_theme-cards.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:02:46,480 --> 00:03:31,800"]
event_t_ms: [129387]
screenshot_files: ["screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0046.jpg", "screenshots/0056.jpg"]
tags: ["copy", "naming", "navigation", "button"]
---

## Exact solution (or idea that can also be a solution)

On Explore banks, the Loan inputs card shows a blue-outline button labeled **See options** and the page H1/title is **Explore banks.** They pointed at the button and asked how the name was derived (ASR: “C-Options”), walked a joke derivation (“your items, your options, C-Options”), then decided: **“The name of the button is compare banks.”** They asked **“What is explore banks?”**, said **“Explore means just put everything in”** while **“That means compare,”** and twice: **“Explore doesn't work.”**

**Proposed change:** rename the submit control to **Compare banks** (not See options / C-Options). Rename or reframe the page title away from **Explore banks** toward compare language, because explore misstates the user job.

## What this is for

The **See options** button and **Explore banks** page title on `explore-banks.html`. Issue file `issue-03-see-options-explore-banks-naming.md` names the defect; this file is the naming direction they gave.

## Why they said it that way

The customer is comparing bank offers after filling the form, not browsing an open-ended options menu or “exploring” all banks. The name should match the action so the page feels honest and purposeful.

## How the files join (required)

- time: 166480–211800 ms (`00:02:46,480`–`00:03:31,800`)
- said: button is C-Options / See Options; how derived; Compare banks; Explore means dump everything; Explore doesn't work (`audio.srt`)
- doing: idle on Loan inputs card — no click on See options; last click FOIR 129387 ms; next click Co-applicant Yes 225261 ms
- seeing: `screenshots/0023.jpg`–`0026.jpg` — **See options** visible on card; H1 Explore banks in chrome (`pages.json`, `0034.jpg` when scrolled)
- page/object: See options button + Explore banks title
- therefore: rename both to compare language

## Pinpoint

On Explore banks, while **See options** sits on the loan card and the page reads **Explore banks**, they said the button should be **Compare banks** and that **Explore** fails because it means dump everything in, not compare — the name must match the compare action.

## Related discussion (not the solution itself)

- Joke derivation “your items, your options, C-Options.”
- “Check” as stepping-stone before “Compare banks.”
- “Compare banks is an option” — compare is the real action, not a menu named options.
- Pre-fill / mandatory talk immediately before (solution-01); Co-applicant Yes immediately after (solution-01).

## Chronology in this recording

- **00:02:41** — End of “never write mandatory” (solution-01).
- **00:02:46–00:03:31** — Button name then page name. Idle; See options visible (`0023.jpg`–`0026.jpg`).
- **00:03:42** — Talk moves to Co-applicant Yes (solution-01).

## Cross-recording continuation

Standalone in this folder. Previous (`wb-rec-260815-2302`) ended on trust/extras, not naming. Next (`wb-rec-260815-2313`) starts on field importance (solution-02 continuation), not this name.

## Evidence by file (every raw recorder file in the folder — no omissions)

- `_theme-cards.json` — issue-run theme card index; names three topics; map only. Used for: checked_no_extra_signal.
- `audio.json` — speech/transcript artifact read; cues joined to clicks and screenshots. Used for: supports_solution, timeline_alignment.
- `audio.lrc` — speech/transcript artifact read; cues joined to clicks and screenshots. Used for: supports_solution, timeline_alignment.
- `audio.srt` — speech/transcript artifact read; cues joined to clicks and screenshots. Used for: supports_solution, timeline_alignment.
- `audio.text` — speech/transcript artifact read; cues joined to clicks and screenshots. Used for: supports_solution, timeline_alignment.
- `audio.tsv` — speech/transcript artifact read; cues joined to clicks and screenshots. Used for: supports_solution, timeline_alignment.
- `audio.txt` — speech/transcript artifact read; cues joined to clicks and screenshots. Used for: supports_solution, timeline_alignment.
- `audio.vtt` — speech/transcript artifact read; cues joined to clicks and screenshots. Used for: supports_solution, timeline_alignment.
- `audio.webm` — 8584153 bytes binary mic; not played; text artifacts used. Used for: checked_no_extra_signal.
- `audio_sentences.txt` — sentence-level transcript including solution talk. Used for: supports_solution, timeline_alignment.
- `console.json` — empty []; no console errors captured. Used for: checked_no_extra_signal.
- `events.json` — 129 events with t_ms; clicks on form fields aligned to speech. Used for: supports_solution, timeline_alignment.
- `index.html` — replay player shell; inlined session id; no extra discussion. Used for: checked_no_extra_signal.
- `manifest.json` — id 6033ef99-94cd-427e-b722-e831e6342b86; explore-banks.html; 533319 ms; 73 shots; 129 events. Used for: timeline_alignment.
- `pages.json` — Explore banks title; Loan inputs field names; See options button. Used for: supports_solution.
- `replay.spec.ts` — Playwright replay mirroring click path and idle gaps. Used for: timeline_alignment.
- `screenshots/0000.jpg` — shot t from index; See options button and Explore banks title visible. Used for: supports_solution.
- `screenshots/0001.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0002.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0003.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0004.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0005.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0006.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0007.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0008.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0009.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0010.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0011.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0012.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0013.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0014.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0015.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0016.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0017.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0018.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0019.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0020.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0021.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0022.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0023.jpg` — shot t from index; See options button and Explore banks title visible. Used for: supports_solution.
- `screenshots/0024.jpg` — shot t from index; See options button and Explore banks title visible. Used for: supports_solution.
- `screenshots/0025.jpg` — shot t from index; See options button and Explore banks title visible. Used for: supports_solution.
- `screenshots/0026.jpg` — shot t from index; See options button and Explore banks title visible. Used for: supports_solution.
- `screenshots/0027.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0028.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0029.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0030.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0031.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0032.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0033.jpg` — shot t from index; See options button and Explore banks title visible. Used for: supports_solution.
- `screenshots/0034.jpg` — shot t from index; See options button and Explore banks title visible. Used for: supports_solution.
- `screenshots/0035.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0036.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0037.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0038.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0039.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0040.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0041.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0042.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0043.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0044.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0045.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0046.jpg` — shot t from index; See options button and Explore banks title visible. Used for: supports_solution.
- `screenshots/0047.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0048.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0049.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0050.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0051.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0052.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0053.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0054.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0055.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0056.jpg` — shot t from index; See options button and Explore banks title visible. Used for: supports_solution.
- `screenshots/0057.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0058.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0059.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0060.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0061.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0062.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0063.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0064.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0065.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0066.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0067.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0068.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0069.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0070.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0071.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/0072.jpg` — shot t from index; See options label on card during naming talk. Used for: timeline_alignment.
- `screenshots/index.json` — 73 shots with t and reason; shot clock for joins. Used for: timeline_alignment.
- `tabs.json` — single tab on explore-banks.html whole session. Used for: timeline_alignment.
- `viewer.css` — generic replay player chrome; no session-specific talk. Used for: checked_no_extra_signal.
- `viewer.js` — generic replay player chrome; no session-specific talk. Used for: checked_no_extra_signal.

## ASR notes

ASR “C-Options” / “See Options”: screen shows **See options** — screenshot wins. “Explore banks” matches title and URL. Brief ASR “Explore works” at 00:03:19 contradicted by immediate “Explore means just put everything in” and two “Explore doesn't work” — later lines + screen intent win. `audio.json` language `mr` is wrong.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2304/solution-03-rename-see-options-compare-banks-page-title",
  "solution_title": "Rename See options to Compare banks and fix Explore banks page title",
  "folder": "wb-rec-260815-2304",
  "sequence_index": 21,
  "recording_id": "6033ef99-94cd-427e-b722-e831e6342b86",
  "recording_started_at": "2026-08-15T17:34:55.529Z",
  "recording_ended_at": "2026-08-15T17:43:48.848Z",
  "duration_ms": 533319,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks \u2013 Shroffin",
  "on_screen_object": "See options button on Loan inputs card; page H1/title Explore banks",
  "for_topic": "Button and page names on Explore banks should say compare, not options or explore",
  "pinpoint": "On Explore banks, they said the See options button should be named Compare banks, and that Explore banks does not work because explore means dump everything in while the job is compare.",
  "kind": [
    "proposed_change",
    "user_convenience"
  ],
  "decidedness": "decided",
  "basis": "Name should match what the customer is actually doing \u2014 comparing banks, not browsing all options or exploring everything",
  "analog_source": "none",
  "linked_issue_files": [
    "issue-03-see-options-explore-banks-naming.md"
  ],
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_solution_files": [
    "solution-01-extra-eligibility-prefilled-columns-tooltips-no-mandatory.md",
    "solution-02-show-column-importance-stars-meter-tiered-cards.md"
  ],
  "source_files_used": [
    "_theme-cards.json",
    "audio.json",
    "audio.lrc",
    "audio.srt",
    "audio.text",
    "audio.tsv",
    "audio.txt",
    "audio.vtt",
    "audio.webm",
    "audio_sentences.txt",
    "console.json",
    "events.json",
    "index.html",
    "manifest.json",
    "pages.json",
    "replay.spec.ts",
    "screenshots/0000.jpg",
    "screenshots/0001.jpg",
    "screenshots/0002.jpg",
    "screenshots/0003.jpg",
    "screenshots/0004.jpg",
    "screenshots/0005.jpg",
    "screenshots/0006.jpg",
    "screenshots/0007.jpg",
    "screenshots/0008.jpg",
    "screenshots/0009.jpg",
    "screenshots/0010.jpg",
    "screenshots/0011.jpg",
    "screenshots/0012.jpg",
    "screenshots/0013.jpg",
    "screenshots/0014.jpg",
    "screenshots/0015.jpg",
    "screenshots/0016.jpg",
    "screenshots/0017.jpg",
    "screenshots/0018.jpg",
    "screenshots/0019.jpg",
    "screenshots/0020.jpg",
    "screenshots/0021.jpg",
    "screenshots/0022.jpg",
    "screenshots/0023.jpg",
    "screenshots/0024.jpg",
    "screenshots/0025.jpg",
    "screenshots/0026.jpg",
    "screenshots/0027.jpg",
    "screenshots/0028.jpg",
    "screenshots/0029.jpg",
    "screenshots/0030.jpg",
    "screenshots/0031.jpg",
    "screenshots/0032.jpg",
    "screenshots/0033.jpg",
    "screenshots/0034.jpg",
    "screenshots/0035.jpg",
    "screenshots/0036.jpg",
    "screenshots/0037.jpg",
    "screenshots/0038.jpg",
    "screenshots/0039.jpg",
    "screenshots/0040.jpg",
    "screenshots/0041.jpg",
    "screenshots/0042.jpg",
    "screenshots/0043.jpg",
    "screenshots/0044.jpg",
    "screenshots/0045.jpg",
    "screenshots/0046.jpg",
    "screenshots/0047.jpg",
    "screenshots/0048.jpg",
    "screenshots/0049.jpg",
    "screenshots/0050.jpg",
    "screenshots/0051.jpg",
    "screenshots/0052.jpg",
    "screenshots/0053.jpg",
    "screenshots/0054.jpg",
    "screenshots/0055.jpg",
    "screenshots/0056.jpg",
    "screenshots/0057.jpg",
    "screenshots/0058.jpg",
    "screenshots/0059.jpg",
    "screenshots/0060.jpg",
    "screenshots/0061.jpg",
    "screenshots/0062.jpg",
    "screenshots/0063.jpg",
    "screenshots/0064.jpg",
    "screenshots/0065.jpg",
    "screenshots/0066.jpg",
    "screenshots/0067.jpg",
    "screenshots/0068.jpg",
    "screenshots/0069.jpg",
    "screenshots/0070.jpg",
    "screenshots/0071.jpg",
    "screenshots/0072.jpg",
    "screenshots/index.json",
    "tabs.json",
    "viewer.css",
    "viewer.js"
  ],
  "speech_clock": [
    "00:02:46,480 --> 00:03:31,800"
  ],
  "event_t_ms": [
    129387
  ],
  "screenshot_files": [
    "screenshots/0023.jpg",
    "screenshots/0024.jpg",
    "screenshots/0025.jpg",
    "screenshots/0026.jpg",
    "screenshots/0033.jpg",
    "screenshots/0034.jpg",
    "screenshots/0046.jpg",
    "screenshots/0056.jpg"
  ],
  "tags": [
    "copy",
    "naming",
    "navigation",
    "button"
  ],
  "quotes": [
    {
      "clock": "00:02:48,900",
      "text": "The name of the button is C-Options.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:03:13,320",
      "text": "The name of the button is compare banks.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:03:16,180",
      "text": "What is explore banks?",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:03:21,420",
      "text": "Explore means just put everything in.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:03:29,640",
      "text": "Explore doesn't work.",
      "artifact": "audio.srt"
    }
  ],
  "clicks": [],
  "related_discussion_present": true
}
```

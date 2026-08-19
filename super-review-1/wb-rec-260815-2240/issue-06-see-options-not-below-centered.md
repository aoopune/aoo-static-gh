# See options is not below Adjust eligibility and not centered

After they reject the See options label, they talk about where that button sits.
They want See options under Adjust eligibility, in the center.
If you open Adjust eligibility, you still have to go to a separate button on the right to see results.
The recording ends mid-sentence on that placement.

---
issue_id: "wb-rec-260815-2240/issue-06-see-options-not-below-centered"
issue_title: "See options is not below Adjust eligibility and not centered"
folder: "wb-rec-260815-2240"
sequence_index: 18
recording_id: "a82e9a9f-c11f-4376-881d-25a436d5e6f5"
recording_started_at: "2026-08-15T17:10:04.687Z"
recording_ended_at: "2026-08-15T17:19:10.273Z"
duration_ms: 545586
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "See options button #hlc-see-options next to the Adjust eligibility summary"
pinpoint: "On Explore banks they said See options should be a button below Adjust eligibility and in the center; screenshots 0047, 0060, and 0062 show See options on the right of that header, so after opening extra fields they still have to go to that other button to see results."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "continues_into_next"
continued_from_folder: null
continued_into_folder: "wb-rec-260815-2249"
related_issue_files: ["issue-03-adjust-eligibility-not-simple-english.md", "issue-05-see-options-label-unclear.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0047.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0066.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:08:02,280-00:09:04,880"]
event_t_ms: [424777, 491770, 498461, 508104]
screenshot_files: ["screenshots/0047.jpg", "screenshots/0060.jpg", "screenshots/0062.jpg", "screenshots/0066.jpg"]
tags: ["layout", "interaction"]
---

## Exact issue
**See options** sits on the **right of the Adjust eligibility header**, not under the extra fields and not centered. They said **just move it**: See options **should be below this Adjust eligibility**. When you adjust eligibility, **there should be a button here**; if they adjust eligibility **over here**, they **have to go to this button to see**. They also said **it should not come below this** while pointing at the extra-fields block, then: **this See options should be a button that is below this Adjust eligibility. And in center. And in center.** Expanded shots (`0047.jpg`, `0060.jpg`, `0062.jpg`) show See options still on the right of the summary row while Existing EMIs / FOIR / tenure fill the space below.

## How the files join
- time: 482280–544880 ms (00:08:02–00:09:04), talk continues until the recording cap
- said: just See options, just move it; should be below Adjust eligibility; after adjusting you must go to this button to see; should be a button below Adjust eligibility and in the center
- did: last See options click 424777; reopen Adjust eligibility 491770; type Existing EMIs 555 at 498461–508103; collapse 508104 — they were using the extra fields while complaining about the other button
- seeing: expanded layout with See options on the right (`0047`, `0060`, `0062`); end frame `0066.jpg` still has See options on the form card, not centered under Adjust eligibility
- therefore: placement of See options relative to Adjust eligibility is the defect they named at the end of this folder

## Pinpoint
On Explore banks, **See options** is not a centered button under **Adjust eligibility**; it stays on the right, so after opening extra fields you still have to go to that other button to see results.

## Related discussion (not the issue itself)
- Label “See options” vs See banks vs Submit is issue 05; this file is only placement.
- Rename Adjust eligibility to extra columns/parameters (00:08:33–00:08:50) is issue 03; they said it in the same breath as moving See options.
- ASR “It should not come below this” vs “should be below this Adjust eligibility”: first line is about the extra-fields block / not putting the action in the wrong place; they then clearly repeat **below Adjust eligibility and in the center**. Placement target used: below Adjust eligibility, centered.
- Next folder opens: “instead of adjusting the availability, we need to show the columns here” — continues the extra-fields / columns idea, not a new See-options sentence, so this issue is marked continues_into_next for that unfinished layout+columns talk.

## Chronology in this recording
- 00:08:02 “Just See options.” 00:08:04 “Just move it.”
- 00:08:05–00:08:09 should be below this Adjust eligibility.
- 00:08:11–00:08:23 when you adjust eligibility there should be a button here; if I adjust here I have to go to this button to see.
- 00:08:28 “It should not come below this.”
- 00:08:53–00:09:04 See options should be a button below Adjust eligibility and in the center (recording ends “In the same…”).

## Cross-recording continuation
Does not continue from `wb-rec-260815-2231`. Continues into `wb-rec-260815-2249` (~7s gap): they are still on Explore banks with extra fields / See options in play, and they start by saying show columns here instead of adjusting eligibility.

## Evidence by file (every file in the folder — no omissions)
- `audio.json` — segs 150–173 move / below / center — `supports_issue`
- `audio.lrc` / `audio.srt` / `audio.text` / `audio.tsv` / `audio.txt` / `audio.vtt` / `audio_sentences.txt` — same end-of-session placement quotes — `supports_issue`
- `audio.webm` — binary — `checked_no_extra_signal`
- `console.json` — empty — `checked_no_extra_signal`
- `events.json` — See options on the right of the form; Adjust eligibility toggles; Existing EMIs edit while they talk placement — `supports_issue`
- `index.html` — player — `checked_no_extra_signal`
- `manifest.json` — session ends 17:19:10.273Z mid-thought — `timeline_alignment`
- `pages.json` — form Loan inputs; See options not in the static actions list; extra fields listed — `supports_issue`
- `replay.spec.ts` — last actions: See options, then `details#hlc-form-more`, then `#hlc-existing-emis` 555 — `supports_issue`
- `screenshots/0000.jpg`–`screenshots/0046.jpg` — See options bottom-right of the card while Adjust eligibility is collapsed — `supports_issue`
- `screenshots/0047.jpg`–`screenshots/0048.jpg` / `0060.jpg`–`0062.jpg` — expanded: See options still on the header’s right, not under the extra fields — `supports_issue`
- `screenshots/0049.jpg`–`screenshots/0059.jpg` / `0063.jpg`–`0066.jpg` — collapsed again; button never centered under Adjust eligibility — `supports_issue`
- `screenshots/index.json` — t=390798 (0047), 492172 (0060), 498866 (0061), 544205 (0066) — `timeline_alignment`
- `tabs.json` — Explore banks to the end — `timeline_alignment`
- `viewer.css` / `viewer.js` — generic — `checked_no_extra_signal`

## ASR notes
“C options” = See options (`#hlc-see-options`). `audio.tsv` “Just move it” vs `audio.srt` “Just move it” / `audio.text` “Just move it.” `audio.sentences.txt` “Additional columns / attributes / parameters” belongs to issue 03, spoken between placement sentences. “It should not come below this” kept as raw ASR; pinpoint follows the repeated “below this Adjust eligibility and in center.”

## JSON
```json
{
  "issue_id": "wb-rec-260815-2240/issue-06-see-options-not-below-centered",
  "issue_title": "See options is not below Adjust eligibility and not centered",
  "folder": "wb-rec-260815-2240",
  "sequence_index": 18,
  "recording_id": "a82e9a9f-c11f-4376-881d-25a436d5e6f5",
  "recording_started_at": "2026-08-15T17:10:04.687Z",
  "recording_ended_at": "2026-08-15T17:19:10.273Z",
  "duration_ms": 545586,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "See options button #hlc-see-options next to Adjust eligibility",
  "pinpoint": "On Explore banks they said See options should sit below Adjust eligibility and in the center; expanded shots show it on the right of that header, so after opening extra fields they still have to go to that other button.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_into_next",
  "continued_from_folder": null,
  "continued_into_folder": "wb-rec-260815-2249",
  "related_issue_files": ["issue-03-adjust-eligibility-not-simple-english.md", "issue-05-see-options-label-unclear.md"],
  "speech_clock": ["00:08:02,280-00:09:04,880"],
  "event_t_ms": [424777, 491770, 498461, 508104],
  "screenshot_files": ["screenshots/0047.jpg", "screenshots/0060.jpg", "screenshots/0062.jpg", "screenshots/0066.jpg"],
  "tags": ["layout", "interaction"],
  "quotes": [
    {"clock": "00:08:04,220", "text": "Just move it.", "artifact": "audio.srt"},
    {"clock": "00:08:05,860", "text": "C options should be below this adjust eligibility.", "artifact": "audio.srt"},
    {"clock": "00:08:17,300", "text": "If I adjust eligibility over here… then I have to go to this button… to see…", "artifact": "audio.srt"},
    {"clock": "00:09:00,080", "text": "And in center.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 424777, "name": "See options", "css": "#hlc-see-options"},
    {"t_ms": 491770, "name": "Adjust eligibility chevron", "css": "details#hlc-form-more > summary svg"}
  ],
  "related_discussion_present": true
}
```

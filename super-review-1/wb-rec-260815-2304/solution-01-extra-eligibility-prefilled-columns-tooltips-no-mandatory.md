# Keep extra eligibility as pre-filled columns with consequence tooltips

Show all ten loan fields as already-filled columns on this form — six primary plus four extras — not hidden behind Adjust eligibility.
Put a short note under each field showing what filling it changes (for example, existing EMIs can move the loan by ₹10 lakh).
Never stamp fields as mandatory, because answers change later; if Co-applicant is Yes, take their details and make the customer feel the details are useful.

---
solution_id: "wb-rec-260815-2304/solution-01-extra-eligibility-prefilled-columns-tooltips-no-mandatory"
solution_title: "Keep extra eligibility as pre-filled columns with consequence tooltips"
folder: "wb-rec-260815-2304"
sequence_index: 21
recording_id: "6033ef99-94cd-427e-b722-e831e6342b86"
recording_started_at: "2026-08-15T17:34:55.529Z"
recording_ended_at: "2026-08-15T17:43:48.848Z"
duration_ms: 533319
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs form, details#hlc-form-more (Adjust eligibility), extra fields, See options button"
for_topic: "Extra eligibility fields should stay visible on Explore banks as already-filled columns with visible consequences, not hidden or mandatory"
pinpoint: "On Explore banks, they said they will sit on this form and keep about six plus four columns all pre-filled with tooltips (e.g. existing EMIs → ₹10 lakh), never write mandatory, and if Co-applicant is Yes take details — so filling does not surprise them later and ten fields feel useful."
kind: ["proposed_change", "idea", "user_convenience", "company_thinking"]
decidedness: "decided"
basis: "No surprise later; don't increase friction; people skip fields when usefulness is unknown; customer should feel details are useful; never write mandatory because existing EMIs change later"
analog_source: "none"
linked_issue_files: ["issue-01-extra-eligibility-should-stay-visible-prefilled.md"]
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "both"
continued_from_folder: "wb-rec-260815-2302"
continued_into_folder: "wb-rec-260815-2313"
related_solution_files: ["solution-02-show-column-importance-stars-meter-tiered-cards.md", "solution-03-rename-see-options-compare-banks-page-title.md"]
source_files_used: ["_theme-cards.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:00:03,380 --> 00:02:41,670", "00:03:42,600 --> 00:04:02,800"]
event_t_ms: [1558, 3176, 37351, 129387, 225261, 226164, 247550, 297133, 299141, 337369]
screenshot_files: ["screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0005.jpg", "screenshots/0019.jpg", "screenshots/0025.jpg", "screenshots/0030.jpg", "screenshots/0033.jpg", "screenshots/0039.jpg"]
tags: ["form", "eligibility", "layout", "trust", "copy", "friction", "pre-filled"]
---

## Exact solution (or idea that can also be a solution)

They will sit on the Explore banks form and not accept a later surprise. Extra eligibility inputs (Existing EMIs, Credit card limits, FOIR, Tenure, Co-applicant) should appear as already-filled columns alongside the six primary fields — “a perfect table” of about ten columns total — so friction does not rise. Under each field, tooltips should show the consequence: “if you apply all your existing EMIs to this column, you will get 10 lakh rupees.” People skip fields at the start because they do not know if filling helps; if the consequence is visible, they have no problem with ten fields and would not leave to look up FOIR elsewhere. They said never write mandatory fields, because later the picture changes with existing EMIs. If Co-applicant is Yes, take their details — do not overthink. The customer should not have a problem with details; they should feel the details are useful.

## What this is for

The Adjust eligibility extras on Explore banks (`details#hlc-form-more`): Existing EMIs, Credit card limits, Share of income for EMIs / FOIR, Tenure, Co-applicant (and co-applicant income/EMIs/cards when Yes). The issue file `issue-01-extra-eligibility-should-stay-visible-prefilled.md` names the defect; this file is the direction they gave.

## Why they said it that way

Trust: “I don't want to get a surprise later” continues from `wb-rec-260815-2302` where a later surprise would lose trust. Friction: all ten pre-filled so you “don't have to increase the friction.” Usefulness: they won't fill fields unless they see what changes; tooltips make ten fields acceptable. Copy rule: never stamp mandatory because existing EMIs change the answer later. Company thinking: details should feel useful, not like busywork.

## How the files join (required)

- time: 3380–29290 ms (`00:00:03,380`–`00:00:29,290`)
- said: “No, because I don't want to get a surprise later.” / “I will sit here only. I have to keep a pre-field for that.” / “actually this is a perfect table.” (`audio.srt` cues 1–4)
- doing: idle; focus Co-applicant No at 1558 ms; scroll y=168.5 at 3176 ms
- seeing: `screenshots/0000.jpg` — Adjust eligibility open, Existing EMIs ₹555, FOIR 55%, Co-applicant No, See options visible
- page/object: Explore banks Loan inputs + Adjust eligibility extras
- therefore: they want extras on this form as pre-filled columns, not a later surprise

- time: 69670–161670 ms (`00:01:09,670`–`00:02:41,670`)
- said: six columns then four more, all pre-fielded; tooltips with ₹10 lakh example; skip fields because usefulness unknown; never write mandatory; existing AMIs change later (`audio.srt` cues 18–56)
- doing: click Monthly income 37351 ms; click through Age/CIBIL/Occupation/Purpose 72979–74609 ms; click FOIR 129387 ms
- seeing: `screenshots/0005.jpg`, `0010.jpg`–`0012.jpg`, `0019.jpg` — open extras, equal-weight grid, FOIR 55% default
- therefore: show ten pre-filled columns with consequence tooltips; never label mandatory

- time: 166480–211800 ms (`00:02:46,480`–`00:03:31,800`) — naming overlaps next solution; pre-fill talk ends ~154670 ms
- time: 222600–242800 ms (`00:03:42,600`–`00:04:02,800`)
- said: if applicant Yes take details; customer should feel details useful (`audio.srt` cues 76–85)
- doing: click Co-applicant Yes 225261 ms; collapse Adjust eligibility 247550 ms (`0033.jpg` extras hidden — the problem they keep attacking)
- seeing: `screenshots/0030.jpg` — Co-applicant Yes with income/EMIs/card limits ₹0
- therefore: collect co-applicant on this form; hiding extras after Yes is the same vanish problem

## Pinpoint

On Explore banks, while Adjust eligibility is open with six primary plus four extra fields, they said they will stay on this form with all ten columns already filled, tooltips showing what each column changes (EMIs → ₹10 lakh example), no mandatory labels, and useful-feeling details including co-applicant when Yes — because a later surprise breaks trust and people only fill fields when they see the payoff.

## Related discussion (not the solution itself)

- Called the open extras layout “a perfect table.”
- “10 on 10 is the consequence” ties to importance marking (see solution-02) but here means tooltip payoff.
- ASR “fire ratio” / “foyer” = FOIR; “AMIs” = EMIs; “pre-field” = pre-filled.
- Collapsing Adjust eligibility (`0033.jpg`, `0045.jpg`) shows the hide behavior they reject.
- Continues in `wb-rec-260815-2313`: “should not disappear” and “no problem if pre-filled.”

## Chronology in this recording

- **00:00:03–00:00:29** — No surprise; sit here; perfect table; keep pre-field. Screen: extras open (`0000.jpg`).
- **00:01:09–00:02:41** — Six + four pre-filled columns; tooltips; skip because useless; never mandatory. Clicks through form; FOIR at 129387 ms.
- **00:02:46–00:03:31** — Button/page naming (solution-03); idle with See options visible.
- **00:03:42–00:04:07** — Co-applicant Yes; details should feel useful. Click Yes 225261 ms (`0030.jpg`).
- **00:04:07+** — Collapse/reopen extras; talk shifts to importance cards (solution-02).

## Cross-recording continuation

**From `wb-rec-260815-2302` (~19 s gap).** Previous ended: collapse to shrink form but extras must still affect results; surprise loses trust; “this is all mandatory”; Co-applicant Yes/No. This opens: “No, because I don't want to get a surprise later” and “I will sit here only.”

**Into `wb-rec-260815-2313` (~2 s gap).** Next opens: extra fields should not disappear; no problem if pre-filled. Same Adjust eligibility objects.

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
- `screenshots/0000.jpg` — shot t from index; Adjust eligibility open/collapsed; pre-filled extras; Co-applicant Yes. Used for: supports_solution.
- `screenshots/0001.jpg` — shot t from index; Adjust eligibility open/collapsed; pre-filled extras; Co-applicant Yes. Used for: supports_solution.
- `screenshots/0002.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0003.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0004.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0005.jpg` — shot t from index; Adjust eligibility open/collapsed; pre-filled extras; Co-applicant Yes. Used for: supports_solution.
- `screenshots/0006.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0007.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0008.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0009.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0010.jpg` — shot t from index; Adjust eligibility open/collapsed; pre-filled extras; Co-applicant Yes. Used for: supports_solution.
- `screenshots/0011.jpg` — shot t from index; Adjust eligibility open/collapsed; pre-filled extras; Co-applicant Yes. Used for: supports_solution.
- `screenshots/0012.jpg` — shot t from index; Adjust eligibility open/collapsed; pre-filled extras; Co-applicant Yes. Used for: supports_solution.
- `screenshots/0013.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0014.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0015.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0016.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0017.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0018.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0019.jpg` — shot t from index; Adjust eligibility open/collapsed; pre-filled extras; Co-applicant Yes. Used for: supports_solution.
- `screenshots/0020.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0021.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0022.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0023.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0024.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0025.jpg` — shot t from index; Adjust eligibility open/collapsed; pre-filled extras; Co-applicant Yes. Used for: supports_solution.
- `screenshots/0026.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0027.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0028.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0029.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0030.jpg` — shot t from index; Adjust eligibility open/collapsed; pre-filled extras; Co-applicant Yes. Used for: supports_solution.
- `screenshots/0031.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0032.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0033.jpg` — shot t from index; Adjust eligibility open/collapsed; pre-filled extras; Co-applicant Yes. Used for: supports_solution.
- `screenshots/0034.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0035.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0036.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0037.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0038.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0039.jpg` — shot t from index; Adjust eligibility open/collapsed; pre-filled extras; Co-applicant Yes. Used for: supports_solution.
- `screenshots/0040.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0041.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0042.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0043.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0044.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0045.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0046.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0047.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0048.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0049.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0050.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0051.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0052.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0053.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0054.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0055.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0056.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0057.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0058.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0059.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0060.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0061.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0062.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0063.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0064.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0065.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0066.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0067.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0068.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0069.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0070.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0071.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/0072.jpg` — shot t from index; Explore banks form state during pre-fill/trust talk. Used for: timeline_alignment.
- `screenshots/index.json` — 73 shots with t and reason; shot clock for joins. Used for: timeline_alignment.
- `tabs.json` — single tab on explore-banks.html whole session. Used for: timeline_alignment.
- `viewer.css` — generic replay player chrome; no session-specific talk. Used for: checked_no_extra_signal.
- `viewer.js` — generic replay player chrome; no session-specific talk. Used for: checked_no_extra_signal.

## ASR notes

“pre-field” vs “pre-filled”; “AMIs” vs EMIs; “fire ratio”/“foyer” vs FOIR; “C-Options” vs See options (screen shows See options). Screen + clicks win. `audio.json` language `mr` is wrong.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2304/solution-01-extra-eligibility-prefilled-columns-tooltips-no-mandatory",
  "solution_title": "Keep extra eligibility as pre-filled columns with consequence tooltips",
  "folder": "wb-rec-260815-2304",
  "sequence_index": 21,
  "recording_id": "6033ef99-94cd-427e-b722-e831e6342b86",
  "recording_started_at": "2026-08-15T17:34:55.529Z",
  "recording_ended_at": "2026-08-15T17:43:48.848Z",
  "duration_ms": 533319,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs form, details#hlc-form-more (Adjust eligibility), extra fields, See options button",
  "for_topic": "Extra eligibility fields should stay visible on Explore banks as already-filled columns with visible consequences, not hidden or mandatory",
  "pinpoint": "On Explore banks, they said they will sit on this form and keep about six plus four columns all pre-filled with tooltips (e.g. existing EMIs → ₹10 lakh), never write mandatory, and if Co-applicant is Yes take details — so filling does not surprise them later and ten fields feel useful.",
  "kind": ["proposed_change", "idea", "user_convenience", "company_thinking"],
  "decidedness": "decided",
  "basis": "No surprise later; don't increase friction; people skip fields when usefulness is unknown; customer should feel details are useful; never write mandatory because existing EMIs change later",
  "analog_source": "none",
  "linked_issue_files": ["issue-01-extra-eligibility-should-stay-visible-prefilled.md"],
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "both",
  "continued_from_folder": "wb-rec-260815-2302",
  "continued_into_folder": "wb-rec-260815-2313",
  "related_solution_files": ["solution-02-show-column-importance-stars-meter-tiered-cards.md", "solution-03-rename-see-options-compare-banks-page-title.md"],
  "source_files_used": ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"],
  "speech_clock": ["00:00:03,380 --> 00:02:41,670", "00:03:42,600 --> 00:04:02,800"],
  "event_t_ms": [1558, 3176, 37351, 129387, 225261, 226164, 247550, 297133, 299141, 337369],
  "screenshot_files": ["screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0005.jpg", "screenshots/0019.jpg", "screenshots/0025.jpg", "screenshots/0030.jpg", "screenshots/0033.jpg", "screenshots/0039.jpg"],
  "tags": ["form", "eligibility", "layout", "trust", "copy", "friction", "pre-filled"],
  "quotes": [
    {"clock": "00:00:03,380", "text": "No, because I don't want to get a surprise later.", "artifact": "audio.srt"},
    {"clock": "00:01:17,590", "text": "1, 2, 3, 4. And all are pre-fielded.", "artifact": "audio.srt"},
    {"clock": "00:01:45,370", "text": "you will get 10 lakh rupees.", "artifact": "audio.srt"},
    {"clock": "00:02:28,830", "text": "we should never write the mandatory fields.", "artifact": "audio.srt"},
    {"clock": "00:04:01,260", "text": "the details are useful.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 225261, "name": "Yes", "css": "div#hlc-coapplicant-row > div:nth-of-type(1) > div > div > button:nth-of-type(2)"},
    {"t_ms": 247550, "name": "Adjust eligibility summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"}
  ],
  "related_discussion_present": true
}
```

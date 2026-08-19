# Extra loan fields should stay on screen, already filled in

On Explore banks, extra questions (existing EMIs, cards, FOIR, tenure, co-applicant) sit behind Adjust eligibility.
They said they will stay on this form and keep those answers already filled, as more columns, so filling does not get harder.
They want a short note under each field that shows what changes (for example, using existing EMIs can change the loan by ₹10 lakh).
They also said not to stamp fields as mandatory, because later those answers change.

---
issue_id: "wb-rec-260815-2304/issue-01-extra-eligibility-should-stay-visible-prefilled"
issue_title: "Extra loan fields should stay on screen, already filled in"
folder: "wb-rec-260815-2304"
sequence_index: 21
recording_id: "6033ef99-94cd-427e-b722-e831e6342b86"
recording_started_at: "2026-08-15T17:34:55.529Z"
recording_ended_at: "2026-08-15T17:43:48.848Z"
duration_ms: 533319
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs form, details#hlc-form-more (Adjust eligibility), extra fields (Existing EMIs, Credit card limits, Share of income for EMIs / FOIR, Tenure, Co-applicant), See options button"
pinpoint: "On Explore banks, extra eligibility fields live behind collapsed Adjust eligibility; they said they will sit on this form, keep those fields as already-filled columns (about 6 plus 4 more), not make filling harder, show a tooltip of what changes, and never write “mandatory,” because a later surprise would break trust."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "both"
continued_from_folder: "wb-rec-260815-2302"
continued_into_folder: "wb-rec-260815-2313"
related_issue_files: ["issue-02-loan-form-fields-lack-importance-indication.md", "issue-03-see-options-explore-banks-naming.md"]
source_files_used: ["manifest.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "pages.json", "replay.spec.ts", "screenshots/index.json", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:00:03,380 --> 00:00:29,290", "00:01:09,670 --> 00:02:41,670", "00:03:42,600 --> 00:04:02,800"]
event_t_ms: [1558, 3176, 37350, 37351, 72598, 129386, 129387, 225260, 225261, 226164, 247550, 251945, 276245, 297133, 298712, 299140, 299141, 337369, 341180]
screenshot_files: ["screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0005.jpg", "screenshots/0019.jpg", "screenshots/0030.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0045.jpg"]
tags: ["form", "eligibility", "layout", "trust", "copy", "interaction"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html` (title Explore banks – Shroffin), extra loan questions live inside collapsed **Adjust eligibility** (`details#hlc-form-more`): Existing EMIs, Credit card limits, Share of income for EMIs / FOIR, Tenure, Co-applicant.

This recording starts as a continuation of `wb-rec-260815-2302`: they do not want a later surprise, so they will sit on this form and keep a pre-filled answer. They called the layout “a perfect table.” They then counted the visible Loan inputs (Monthly income, Property agreement value, Age, CIBIL score, Occupation, Purpose) as six columns, and the Adjust eligibility extras as four more, all already filled, so filling does not get harder. Under each field they want a tooltip of the consequence, for example: if you apply all existing EMIs to this column you get ₹10 lakh. They said people skip these fields because they do not know if filling helps; if the consequence is visible, ten fields are fine. They said never write mandatory, because later the answers change (existing EMIs). If Co-applicant is Yes, take those details and do not overthink.

Raw ASR (`audio.srt`): “No, because I don't want to get a surprise later.” / “I will sit here only. I have to keep a pre-field for that.” / “actually this is a perfect table.” / “Suppose I see 6 columns.” / “Then I see 4 more columns here.” / “And all are pre-fielded.” / “so you don't have to increase the friction.” / “we should never write the mandatory fields.” / “Because you have existing AMIs.” / “If an applicant says yes, then take their details.” / “the customer doesn't have a problem with the details.” / “They should feel that the details are useful.”

ASR likely meant: pre-filled; EMIs; FOIR.

## How the files join

- time (ms and clock): **3380–29290 ms** (`00:00:03,380`–`00:00:29,290`)
- what they said (`audio.srt` cues 1–5): they do not want a surprise later; they will sit here; keep a pre-field; this is a perfect table
- what they did: idle after focus on Co-applicant **No** at **1558 ms**; scroll y≈168.5 at **3176 ms**; later click Monthly income at **37351 ms**
- what was on screen: `screenshots/0000.jpg` (t=199) and `0001.jpg` (t=8199) show Adjust eligibility open with Existing EMIs ₹555, Credit card limits ₹0, FOIR 55% default, Tenure 20, Co-applicant No; See options on the right
- what page/object: Explore banks, Loan inputs + Adjust eligibility
- therefore: extra fields must stay on this form as already-filled answers, not a later surprise

- time (ms and clock): **69670–161670 ms** (`00:01:09,670`–`00:02:41,670`)
- what they said: six columns, then four more, all pre-filled; do not increase friction; ten columns at the start; tooltips that applying existing EMIs yields ₹10 lakh; then they would fill all ten; they skip fields because they do not know if it helps; never write mandatory because later it changes with existing EMIs
- what they did: idle while talking; click FOIR `#hlc-foir` at **129387 ms** (`0019.jpg`)
- what was on screen: six primary fields plus open Adjust eligibility extras; FOIR dropdown 55% (default)
- therefore: extras should appear as extra already-filled columns with a visible consequence, not as optional hidden work

- time (ms and clock): **222600–242800 ms** (`00:03:42,600`–`00:04:02,800`)
- what they said: if an applicant says yes, take their details; do not think too much; the customer should feel details are useful
- what they did: click Co-applicant **Yes** at **225261 ms**; hidden `#hlc-coapplicant` becomes `yes` at **226164 ms**; then collapse Adjust eligibility at **247550 ms** (`0033.jpg` extras gone, bank table visible)
- what was on screen: `0030.jpg` Co-applicant Yes with Co-applicant income / EMIs / card limits ₹0; `0033.jpg` after collapse
- therefore: when Yes, collect co-applicant details on this form; hiding extras after that is the same vanish problem they keep attacking

## Pinpoint

On Explore banks, extra eligibility inputs inside **Adjust eligibility** are collapsed instead of staying on the Loan inputs card as already-filled columns. They said they will sit here so nothing surprises them later; they counted about six plus four columns, all pre-filled, so friction does not rise; they want a tooltip of what changes (existing EMIs → ₹10 lakh example); they skip fields when usefulness is unclear; they do not want “mandatory” written because later existing EMIs change the picture. They cared because a later surprise would break trust, and because people will fill ten fields if those fields look useful.

## Related discussion (not the issue itself)

- They called the open extras “a perfect table.”
- Why they do not want to fill at the start: they do not know if it will be of any use.
- If the consequence is shown, they have no problem with ten fields; they would not go elsewhere to look up FOIR.
- Never write mandatory, because later “we don't have this with us” and it changes with existing EMIs.
- If Co-applicant is Yes, take details and do not overthink (continues the co-applicant talk from `wb-rec-260815-2302`).
- Customer should not have a problem with details if the details feel useful.
- Importance stars / meter / score on those columns is a separate issue (`issue-02`).
- Button name See options / Compare banks is a separate issue (`issue-03`).

## Chronology in this recording

- **00:00:03–00:00:29** — No surprise later; sit here; keep a pre-field; perfect table. Screen: Adjust eligibility open (`0000.jpg`–`0004.jpg`). Co-applicant No focused at 1558 ms.
- **00:01:09–00:02:41** — Six columns, four more, all pre-filled; tooltips; skip because usefulness unknown; never write mandatory. Click Monthly income 37351 ms; FOIR 129387 ms (`0019.jpg`).
- **00:03:42–00:04:02** — If applicant Yes, take details; details should feel useful. Click Yes 225261 ms (`0030.jpg`).
- **00:04:07–00:05:37** — Collapse Adjust eligibility 247550 ms (`0033.jpg`); reopen 297133 ms (`0039.jpg`); FOIR again 299141 ms (`0040.jpg`); collapse 337369 ms (`0045.jpg`). Talk moves to importance cards (issue-02).
- **00:07:00–end** — Click through Monthly income / Property agreement value while talking about grouping fields (related to issue-02).

## Cross-recording continuation

**From `wb-rec-260815-2302` (~19 s gap).** That recording ended: collapse Adjust eligibility so the form is not too big, but extra fields (especially Existing EMIs and FOIR) must still change results; a later surprise would lose trust; “this is all mandatory”; Co-applicant Yes then No. This recording opens: “No, because I don't want to get a surprise later” and “I will sit here only. I have to keep a pre-field.” Same objects, same trust point.

**Into `wb-rec-260815-2313` (~2 s gap).** Next recording, still on Explore banks, they say extra fields should not disappear, and there is no problem if they are pre-filled. Same Adjust eligibility extras.

## Evidence by file

- `audio.json` — language mr (wrong). Segments covering this issue's quotes with word times. Used for: `supports_issue`
- `audio.lrc` — lyric timestamps aligned to srt for this issue's speech. Used for: `timeline_alignment`
- `audio.srt` — primary speech clock for this issue's quoted cues. Used for: `supports_issue, timeline_alignment`
- `audio.text` — plain transcript including this issue's lines. Used for: `supports_issue`
- `audio.tsv` — millisecond start/end for this issue's cues. Used for: `timeline_alignment`
- `audio.txt` — timed dump; ASR variants for this issue's words. Used for: `timeline_alignment`
- `audio.vtt` — WebVTT same family as srt for this issue. Used for: `timeline_alignment`
- `audio.webm` — binary mic; not listened; text artifacts used. Used for: `checked_no_extra_signal`
- `audio_sentences.txt` — sentence wrap including this issue's talk. Used for: `supports_issue`
- `console.json` — empty []; no console errors. Used for: `checked_no_extra_signal`
- `events.json` — clicks/focus/scroll with t_ms used in this issue's join. Used for: `supports_issue, timeline_alignment`
- `index.html` — player shell; inlined this session id and explore-banks URL; no extra discussion. Used for: `checked_no_extra_signal`
- `manifest.json` — id 6033ef99-94cd-427e-b722-e831e6342b86; start_url explore-banks.html; 533319 ms; 73 shots; 129 events. Used for: `timeline_alignment`
- `pages.json` — title Explore banks – Shroffin; Loan inputs field names; H1 Explore banks. Used for: `supports_issue`
- `replay.spec.ts` — Playwright replay of the same click path. Used for: `timeline_alignment`
- `screenshots/0000.jpg` — t=199 start; Adjust eligibility open; Existing EMIs ₹555; FOIR 55%; Co-applicant No; See options. Used for: `supports_issue`
- `screenshots/0001.jpg` — t=8199 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0002.jpg` — t=16200 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0003.jpg` — t=26199 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0004.jpg` — t=34199 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0005.jpg` — t=37752 interaction; Monthly income click; extras still open. Used for: `supports_issue`
- `screenshots/0006.jpg` — t=46199 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0007.jpg` — t=54200 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0008.jpg` — t=62200 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0009.jpg` — t=70200 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0010.jpg` — t=73000 interaction; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0011.jpg` — t=73901 interaction; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0012.jpg` — t=74566 interaction; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0013.jpg` — t=84200 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0014.jpg` — t=92200 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0015.jpg` — t=100201 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0016.jpg` — t=108201 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0017.jpg` — t=116201 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0018.jpg` — t=126201 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0019.jpg` — t=129791 interaction; FOIR 55% (default) focused. Used for: `supports_issue`
- `screenshots/0020.jpg` — t=138200 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0021.jpg` — t=146204 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0022.jpg` — t=156201 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0023.jpg` — t=164201 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0024.jpg` — t=174200 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0025.jpg` — t=182201 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0026.jpg` — t=190202 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0027.jpg` — t=200200 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0028.jpg` — t=208201 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0029.jpg` — t=216202 periodic; extras open; Co-applicant No; See options; same Loan inputs as 0000. Used for: `supports_issue`
- `screenshots/0030.jpg` — t=225667 interaction; Co-applicant Yes; extra co-applicant fields ₹0. Used for: `supports_issue`
- `screenshots/0031.jpg` — t=234202 periodic; Co-applicant Yes extras visible (income/EMIs/cards ₹0). Used for: `supports_issue`
- `screenshots/0032.jpg` — t=244201 periodic; Co-applicant Yes extras visible (income/EMIs/cards ₹0). Used for: `supports_issue`
- `screenshots/0033.jpg` — t=247951 interaction; Adjust eligibility collapsed; bank table visible. Used for: `supports_issue`
- `screenshots/0034.jpg` — t=256201 periodic; Adjust eligibility collapsed; extras hidden; bank table. Used for: `supports_issue`
- `screenshots/0035.jpg` — t=264201 periodic; Adjust eligibility collapsed; extras hidden; bank table. Used for: `supports_issue`
- `screenshots/0036.jpg` — t=272201 periodic; Adjust eligibility collapsed; extras hidden; bank table. Used for: `supports_issue`
- `screenshots/0037.jpg` — t=280202 periodic; Adjust eligibility collapsed; extras hidden; bank table. Used for: `supports_issue`
- `screenshots/0038.jpg` — t=288202 periodic; Adjust eligibility collapsed; extras hidden; bank table. Used for: `supports_issue`
- `screenshots/0039.jpg` — t=297535 interaction; extras reopened. Used for: `supports_issue`
- `screenshots/0040.jpg` — t=299544 interaction; FOIR click with extras open. Used for: `supports_issue`
- `screenshots/0041.jpg` — t=308201 periodic; extras open again; Co-applicant Yes fields. Used for: `supports_issue`
- `screenshots/0042.jpg` — t=316202 periodic; extras open again; Co-applicant Yes fields. Used for: `supports_issue`
- `screenshots/0043.jpg` — t=326202 periodic; extras open again; Co-applicant Yes fields. Used for: `supports_issue`
- `screenshots/0044.jpg` — t=336202 periodic; extras open again; Co-applicant Yes fields. Used for: `supports_issue`
- `screenshots/0045.jpg` — t=337771 interaction; extras collapsed again. Used for: `supports_issue`
- `screenshots/0046.jpg` — t=346202 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0047.jpg` — t=354203 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0048.jpg` — t=364202 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0049.jpg` — t=372202 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0050.jpg` — t=380202 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0051.jpg` — t=388202 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0052.jpg` — t=396202 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0053.jpg` — t=404202 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0054.jpg` — t=412202 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0055.jpg` — t=420203 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0056.jpg` — t=422337 interaction; Monthly income click after extras collapsed. Used for: `supports_issue`
- `screenshots/0057.jpg` — t=427106 interaction; Overview tab. Used for: `supports_issue`
- `screenshots/0058.jpg` — t=432073 interaction; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0059.jpg` — t=440203 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0060.jpg` — t=448203 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0061.jpg` — t=456204 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0062.jpg` — t=466202 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0063.jpg` — t=474203 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0064.jpg` — t=482204 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0065.jpg` — t=486237 interaction; Property agreement value focused. Used for: `supports_issue`
- `screenshots/0066.jpg` — t=496204 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0067.jpg` — t=504205 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0068.jpg` — t=505374 interaction; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0069.jpg` — t=506015 interaction; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0070.jpg` — t=511891 interaction; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0071.jpg` — t=520204 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/0072.jpg` — t=530204 periodic; extras collapsed; form + bank table; hide/show they kept doing. Used for: `supports_issue`
- `screenshots/index.json` — 73 shots with t and reason; used as shot clock. Used for: `timeline_alignment`
- `tabs.json` — one tab on explore-banks.html whole session. Used for: `timeline_alignment`
- `viewer.css` — generic replay CSS; no session talk. Used for: `checked_no_extra_signal`
- `viewer.js` — generic replay JS; no session talk. Used for: `checked_no_extra_signal`

## ASR notes

Transcripts disagree on “pre-field” vs “pre-filled”, “AMIs” vs EMIs, “fire ratio” / “foyer” vs FOIR, “C-Options” vs See options. Screen + clicks win: See options button, FOIR dropdown, Existing EMIs field. Quoted raw ASR; intended words noted above. `audio.json` `language` is `mr`; ignore.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2304/issue-01-extra-eligibility-should-stay-visible-prefilled",
  "issue_title": "Extra loan fields should stay on screen, already filled in",
  "folder": "wb-rec-260815-2304",
  "sequence_index": 21,
  "recording_id": "6033ef99-94cd-427e-b722-e831e6342b86",
  "recording_started_at": "2026-08-15T17:34:55.529Z",
  "recording_ended_at": "2026-08-15T17:43:48.848Z",
  "duration_ms": 533319,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs form, details#hlc-form-more (Adjust eligibility), extra eligibility fields, See options",
  "pinpoint": "On Explore banks, extra eligibility fields live behind collapsed Adjust eligibility; they said they will sit on this form, keep those fields as already-filled columns (about 6 plus 4 more), not make filling harder, show a tooltip of what changes, and never write “mandatory,” because a later surprise would break trust.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "both",
  "continued_from_folder": "wb-rec-260815-2302",
  "continued_into_folder": "wb-rec-260815-2313",
  "related_issue_files": ["issue-02-loan-form-fields-lack-importance-indication.md", "issue-03-see-options-explore-banks-naming.md"],
  "source_files_used": ["manifest.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "pages.json", "replay.spec.ts", "screenshots/index.json", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "tabs.json", "viewer.css", "viewer.js"],
  "speech_clock": ["00:00:03,380 --> 00:00:29,290", "00:01:09,670 --> 00:02:41,670", "00:03:42,600 --> 00:04:02,800"],
  "event_t_ms": [1558, 3176, 37350, 37351, 72598, 129386, 129387, 225260, 225261, 226164, 247550, 251945, 276245, 297133, 298712, 299140, 299141, 337369, 341180],
  "screenshot_files": ["screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0005.jpg", "screenshots/0019.jpg", "screenshots/0030.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0045.jpg"],
  "tags": ["form", "eligibility", "layout", "trust", "copy", "interaction"],
  "quotes": [
    {"clock": "00:00:03,380", "text": "No, because I don't want to get a surprise later.", "artifact": "audio.srt"},
    {"clock": "00:00:10,340", "text": "I will sit here only. I have to keep a pre-field for that.", "artifact": "audio.srt"},
    {"clock": "00:01:17,590", "text": "1, 2, 3, 4. And all are pre-fielded.", "artifact": "audio.srt"},
    {"clock": "00:02:28,830", "text": "we should never write the mandatory fields.", "artifact": "audio.srt"},
    {"clock": "00:03:45,020", "text": "If an applicant says yes, then take their details.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 37351, "name": "Monthly income*", "css": "#hlc-monthly-income"},
    {"t_ms": 129387, "name": "Share of income for EMIs /FOIR", "css": "#hlc-foir"},
    {"t_ms": 225261, "name": "Yes", "css": "div#hlc-coapplicant-row > div:nth-of-type(1) > div > div > button:nth-of-type(2)"},
    {"t_ms": 247550, "name": "Adjust eligibility summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"}
  ],
  "related_discussion_present": true
}
```

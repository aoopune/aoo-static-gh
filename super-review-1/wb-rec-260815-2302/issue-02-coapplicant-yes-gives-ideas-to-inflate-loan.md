# Turning Co-applicant to Yes teaches people they can add someone to get a bigger loan

On Explore banks, Co-applicant is a No/Yes control under Adjust eligibility.
They said they do not want to give applicants the idea that adding a co-applicant increases the loan.
They switched Yes, extra income/EMI/card boxes appeared, then they switched back to No.
They also asked who would actually pay, while those extra boxes were on screen.

---
issue_id: "wb-rec-260815-2302/issue-02-coapplicant-yes-gives-ideas-to-inflate-loan"
issue_title: "Turning Co-applicant to Yes teaches people they can add someone to get a bigger loan"
folder: "wb-rec-260815-2302"
sequence_index: 20
recording_id: "1c3a6e22-3a9a-475d-8d5b-350dfe605171"
recording_started_at: "2026-08-15T17:32:34.848Z"
recording_ended_at: "2026-08-15T17:34:36.510Z"
duration_ms: 121662
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs → Adjust eligibility → Co-applicant No/Yes (div#hlc-coapplicant-row) and extra Co-applicant income / EMIs / card limits fields"
pinpoint: "On Explore banks, setting Co-applicant to Yes reveals extra income/EMI/card boxes and they said they do not want to give applicants the idea that adding a co-applicant increases the loan; they tried Yes, then switched back to No."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "both"
continued_from_folder: "wb-rec-260815-2249"
continued_into_folder: "wb-rec-260815-2304"
related_issue_files: ["issue-01-collapsed-eligibility-fields-must-still-affect.md"]
source_files_used: ["audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:01:22,370 --> 00:01:55,280"]
event_t_ms: [87684, 88588, 90822, 103644, 104546]
screenshot_files: ["screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg"]
tags: ["co-applicant","eligibility","trust","copy","form","coaching"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html`, under **Adjust eligibility**, **Co-applicant** is a No/Yes pair (`div#hlc-coapplicant-row`). Default on screen is **No**. They say they do not want to give applicants ideas, because adding a co-applicant increases the loan amount. They click **Yes**; extra boxes appear (Co-applicant income, Co-applicant EMIs, Co-applicant card limits). They then click **No** and those boxes go away.

Raw ASR (`audio.srt`): "Yesterday, I didn't want to give ideas to any applicant." / "I don't want to give ideas to any other applicant." / "Because it increases the loan amount."

That is the defect they treated as real: the Yes path coaches a bigger loan. The extra boxes appearing on Yes is what they were pointing at, not a separate visual bug.

## How the files join (required)

- time (ms and clock): 82370–92670 ms (00:01:22–00:01:32). said (`audio.srt` / `audio.json`): they do not want to give ideas to any applicant, because it increases the loan amount. doing: still on Explore banks with Co-applicant No (0013); then click Yes at t=87684 (`getByRole("button", { name: "Yes" })` / `div#hlc-coapplicant-row … button:nth-of-type(2)`), hidden `#hlc-coapplicant` becomes `"yes"` at 88588. seeing: 0014–0015 show Co-applicant Yes selected and three extra fields (Co-applicant income ₹0, Co-applicant EMIs ₹0, Co-applicant card limits ₹0). where: Explore banks, Loan inputs → Adjust eligibility → Co-applicant. therefore: Yes is the control that both reveals extra fields and, in their words, gives the idea that adding someone increases the loan.
- time: 97880–115280 ms (00:01:37–00:01:55). said: "Brother, please give me the fixers." / "1, 2, 2, 1, 1, 1." / "Brother, I want to know who is going to pay the rent." / "Whoever is going to pay the rent." doing: scroll y=333.5 at 90822 (form taller after Yes); then click No at 103644, hidden value `"no"` at 104546. seeing: 0016–0018 Co-applicant No again; extra co-applicant boxes gone (redaction bars remain over nearby result text). therefore: they rejected the Yes state after seeing the extra boxes, and asked who actually pays while those boxes were visible.

## Pinpoint

On Explore banks (`explore-banks.html`, title Explore banks – Shroffin), the **Co-applicant Yes** control under Adjust eligibility reveals extra income/EMI/card boxes. They said they do not want to give applicants the idea that adding a co-applicant increases the loan, tried Yes, then switched back to No. They cared because the control would coach a public applicant to add a person just to get a larger amount.

## Related discussion (not the issue itself)

"Brother, please give me the fixers" and "1, 2, 2, 1, 1, 1" happen after Yes, while the extra co-applicant boxes are on screen; likely counting those new fields (ASR "fixers" is low-confidence). "Who is going to pay the rent" / "Whoever is going to pay the rent" is raw ASR (`rent.` probability 0.32 then 0.79) while looking at Co-applicant income/EMIs; likely "who pays" (EMI/loan), not a separate rent product. The earlier extra-fields / trust / mandatory talk is issue-01, not this issue.

## Chronology in this recording

- 00:01:22–00:01:25 / 0013: Co-applicant still No. "Yesterday, I didn't want to give ideas to any applicant."
- 00:01:27–00:01:32: "I don't want to give ideas to any other applicant." / "Because it increases the loan amount."
- t=87684 click Yes / 0014: Co-applicant Yes; extra income, EMIs, card-limit boxes appear (some labels redacted).
- t=90822 scroll; 0015: same Yes state, extra boxes still visible.
- 00:01:37–00:01:49: "please give me the fixers"; "1, 2, 2, 1, 1, 1"; "who is going to pay the rent."
- t=103644 click No / 0016–0018: Co-applicant No; extra boxes gone. "That's why I didn't come." / "That's it."

## Cross-recording continuation

Continues from `wb-rec-260815-2249`. Previous ending already asked whether co-applicant is for everyone and "How does this co-applicant make a difference?" Last 2249 shots keep Co-applicant on No. This folder answers that by trying Yes, watching extra boxes appear, and rejecting the coaching.

Continues into `wb-rec-260815-2304` (~19 s later). Next first non-idle event focuses Co-applicant **No**. Later in 2304 they say if an applicant says yes, take their details and do not overthink. Write only this folder's Yes-then-No slice here.

## Evidence by file (every file in the folder — no omissions)

- `audio.json` — segments 32–43: "Yesterday, I didn't want to give ideas to any applicant.", "I don't want to give ideas to any other applicant.", "Because it increases the loan amount.", "Brother, please give me the fixers.", "1, 2, 2, 1, 1, 1.", "Brother, I want to know who is going to pay the rent.", "Whoever is going to pay the rent." Word "Yesterday," probability ~0.022; "fixers." ~0.25; first "rent." ~0.32. Language `mr` (wrong). `supports_issue`.
- `audio.lrc` — same timed lines for the co-applicant stretch. `timeline_alignment`.
- `audio.srt` — cues 32–43 (00:01:22,370–00:01:55,280) are this issue. `supports_issue`.
- `audio.text` — plain dump including "give ideas" and "increases the loan amount." `supports_issue`.
- `audio.tsv` — ms starts: 82370 give ideas; 90950 increases loan; 97880 fixers; 106800 who pays rent; 112060 that's why. `timeline_alignment`.
- `audio.txt` — Whisper timed dump for the same cues. `timeline_alignment`.
- `audio.vtt` — WebVTT clone of srt. `timeline_alignment`.
- `audio.webm` — binary mic; not listened; speech taken from text artifacts. `checked_no_extra_signal`.
- `audio_sentences.txt` — includes give-ideas / increases loan / who pays rent. `supports_issue`.
- `console.json` — `[]`. `checked_no_extra_signal`.
- `events.json` — click Yes t=87684; input `#hlc-coapplicant` value yes t=88588; scroll y=333.5 t=90822; click No t=103644; input value no t=104546. `supports_issue`.
- `index.html` — player shell with the same Yes/No events inlined; no extra discussion. `player_shell_with_inlined_json_fully_read`. `checked_no_extra_signal`.
- `manifest.json` — same session id/url/window as issue-01. `timeline_alignment`.
- `pages.json` — Co-applicant income and Co-applicant EMIs exist on the Loan inputs form, required false. `supports_issue`.
- `replay.spec.ts` — clicks Yes then fills `#hlc-coapplicant` "yes"; later clicks No and fills "no". `timeline_alignment`.
- `screenshots/0000.jpg`–`screenshots/0012.jpg` — Co-applicant No during the earlier extra-fields talk (issue-01). `timeline_alignment`.
- `screenshots/0013.jpg` — t=84202 Co-applicant No, just before Yes. `supports_issue`.
- `screenshots/0014.jpg` — t=88086 Co-applicant Yes; extra co-applicant fields visible. `supports_issue`.
- `screenshots/0015.jpg` — t=96202 Yes still on; extra fields still visible after scroll. `supports_issue`.
- `screenshots/0016.jpg` — t=104048 click No; extra fields gone. `supports_issue`.
- `screenshots/0017.jpg` — t=112202 No remains. `supports_issue`.
- `screenshots/0018.jpg` — t=120202 end; No remains. `supports_issue`.
- `screenshots/index.json` — 0014 interaction t=88086; 0015 periodic t=96202; 0016 interaction t=104048. `timeline_alignment`.
- `tabs.json` — one tab, explore-banks.html. `timeline_alignment`.
- `viewer.css` — 17895 bytes; generic player chrome. `player_chrome_fully_read_confirmed`. `checked_no_extra_signal`.
- `viewer.js` — 32334 bytes; generic player. `player_chrome_fully_read_confirmed`. `checked_no_extra_signal`.

## ASR notes

| Clock | `audio.srt` | `audio.json` | Used |
|---|---|---|---|
| 01:22–01:25 | Yesterday, I didn't want to give ideas to any applicant. | Yesterday, I didn't want to give ideas to any applicant. | json "Yesterday," ~0.022; meaning still joins the Yes click |
| 01:30–01:32 | Because it increases the loan amount. | Because it increases the loan amount. | json "Because" ~0.07, "it" ~0.05; "loan amount." ~0.92; matches extra fields appearing on Yes |
| 01:37–01:39 | Brother, please give me the fixers. | Brother, please give me the fixers. | raw ASR; "fixers." ~0.25; on screen the extra co-applicant boxes just appeared |
| 01:40–01:41 | 1, 2, 2, 1, 1, 1. | 1, 2, 2, 1, 1, 1. | counting; likely the extra fields |
| 01:46–01:49 | who is going to pay the rent | who is going to pay the rent | raw ASR; first "rent." ~0.32; join is co-applicant extra boxes, not a rent product |
| 01:52–01:53 | That's why I didn't come. | That's why I didn't come. | json "come." ~0.21 vs srt "come"; they then click No |

Prefer click + screenshot over a mismatched word. Quote raw ASR; do not silently replace "rent" or "fixers."

## JSON
```json
{
  "issue_id": "wb-rec-260815-2302/issue-02-coapplicant-yes-gives-ideas-to-inflate-loan",
  "issue_title": "Turning Co-applicant to Yes teaches people they can add someone to get a bigger loan",
  "folder": "wb-rec-260815-2302",
  "sequence_index": 20,
  "recording_id": "1c3a6e22-3a9a-475d-8d5b-350dfe605171",
  "recording_started_at": "2026-08-15T17:32:34.848Z",
  "recording_ended_at": "2026-08-15T17:34:36.510Z",
  "duration_ms": 121662,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs → Adjust eligibility → Co-applicant No/Yes (div#hlc-coapplicant-row) and extra Co-applicant income / EMIs / card limits fields",
  "pinpoint": "On Explore banks, setting Co-applicant to Yes reveals extra income/EMI/card boxes and they said they do not want to give applicants the idea that adding a co-applicant increases the loan; they tried Yes, then switched back to No.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "both",
  "continued_from_folder": "wb-rec-260815-2249",
  "continued_into_folder": "wb-rec-260815-2304",
  "related_issue_files": ["issue-01-collapsed-eligibility-fields-must-still-affect.md"],
  "source_files_used": ["audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:01:22,370 --> 00:01:55,280"],
  "event_t_ms": [87684, 88588, 90822, 103644, 104546],
  "screenshot_files": ["screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg"],
  "tags": ["co-applicant","eligibility","trust","copy","form","coaching"],
  "quotes": [
    {"clock": "00:01:22,370", "text": "Yesterday, I didn't want to give ideas to any applicant.", "artifact": "audio.srt"},
    {"clock": "00:01:27,270", "text": "I don't want to give ideas to any other applicant.", "artifact": "audio.srt"},
    {"clock": "00:01:30,950", "text": "Because it increases the loan amount.", "artifact": "audio.srt"},
    {"clock": "00:01:37,880", "text": "Brother, please give me the fixers.", "artifact": "audio.srt"},
    {"clock": "00:01:46,800", "text": "Brother, I want to know who is going to pay the rent.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 87684, "name": "Yes", "css": "div#hlc-coapplicant-row > div:nth-of-type(1) > div > div > button:nth-of-type(2)"},
    {"t_ms": 103644, "name": "No", "css": "div#hlc-coapplicant-row > div:nth-of-type(1) > div > div > button:nth-of-type(1)"}
  ],
  "related_discussion_present": true
}
```

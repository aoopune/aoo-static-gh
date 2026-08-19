# Loan form does not show what matters most by order or color

On Explore banks, filling the loan form does not by itself show which inputs matter most.
They wanted top-to-bottom to mean importance (how much money, then rate, then tenure) and left-to-right to mean column importance.
They said colors, sequence, and order should do that work so the user becomes “intelligent” without an explanation.
They said this may not be the most urgent change right now, but it should still be done.

---
issue_id: "wb-rec-260815-2313/issue-01-loan-form-importance-not-shown-by-order-color"
issue_title: "Loan form does not show what matters most by order or color"
folder: "wb-rec-260815-2313"
sequence_index: 22
recording_id: "152443cc-6acb-4cd3-848e-1e260b989c24"
recording_started_at: "2026-08-15T17:43:51.324Z"
recording_ended_at: "2026-08-15T17:52:30.230Z"
duration_ms: 518906
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs form on Explore banks"
pinpoint: "On Explore banks, the Loan inputs form does not encode which fields matter most; they said filling it should make the user intelligent without explanation, using top-to-bottom importance (money, rate, tenure), left-to-right column importance, and colors/sequence/order."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260815-2304"
continued_into_folder: null
related_issue_files: ["issue-02-adjust-eligibility-fields-should-not-disappear.md", "issue-03-loan-form-info-icons-need-arranging.md", "issue-04-copy-extra-words-raise-cognitive-load.md"]
source_files_used: ["manifest.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/index.json", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.png", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg"]
speech_clock: ["00:00:03,460 --> 00:01:07,380", "00:08:23,730 --> 00:08:34,370"]
event_t_ms: [196, 70648]
screenshot_files: ["screenshots/0000.jpg", "screenshots/0008.jpg"]
tags: ["layout", "form", "importance", "color", "order"]
---

## Exact issue

On Explore banks, while idle on the Loan inputs card, they said filling the form should make the user intelligent without anyone explaining it. Top-to-bottom should show what is most important: how much money, how much rate, how much tenure. Left-to-right should show column importance. Property value should be readable as a cause. Tenure should read as the most important property. Colors, sequencing, and order should do that work. Today the fields sit in a flat grid (Monthly income, Property agreement value, Age, CIBIL score, Occupation, Purpose) with no such ranking. They said applying this would change the form; it may not be the most important change this moment, but it should be done.

Raw ASR (`audio.srt`): "While filling this form, I become intelligent." / "I directly understand that this happens due to property value." / "And this is the most important property, the tenure." / "And you can use just colors and sequencing and order, right?" / "Maybe not most important at this moment." / "But it should be done."

## How the files join

- time: 3460–67380 ms (00:00:03–00:01:07); restated 503730–514370 ms (00:08:23–00:08:34)
- said: `audio.srt` cues 1–16; `audio.json` segments 000–016. They describe up-to-down importance and left-to-right column importance on “this form.”
- did: first ~70 s are `idle` on Explore banks (`events.json`). Landmark at t=196 names Loan inputs. Focus on Property agreement value (`#hlc-property-value`) at t=70648 is after this stretch.
- seeing: `screenshots/0000.jpg`–`0008.jpg` (t=197–68199) show the collapsed Loan inputs card and the bank table. No color or order ranking of fields.
- page/object: `pages.json` p1, form “Loan inputs”, URL `http://localhost:8765/pages/explore-banks.html`.
- therefore: the Loan inputs form does not encode importance by vertical order, horizontal order, color, or sequence, even though they said filling it should teach the user what matters.

## Pinpoint

On Explore banks, the Loan inputs form is wrong because it does not show field importance through top-to-bottom order (money, rate, tenure), left-to-right column importance, or colors/sequence, so the user does not become “intelligent” while filling it. They said this should still be done even if it is not the top priority right now.

## Related discussion (not the issue itself)

They joked that the other person thinks they will be “hit” if they have to explain the form. They later tied the same idea to how people are trained left-to-right and up-to-down (`audio.srt` 00:08:29–00:08:34): “People usually train left to right. Up to down. We do the same.” Tesla going to mass market, foolproof vs “full-proof,” and climbing from non-stupid to stupid sit with issue 04, not as a second form-layout defect. Rate / amount / tenure as three affected outputs was already in progress in `wb-rec-260815-2304`.

## Chronology in this recording

- 00:00:03–00:00:21 (idle, shots 0000–0002): If this is the case, do this; up to down; most important is how much money, rate, tenure; left to right is column importance.
- 00:00:23–00:00:54 (idle, shots 0003–0006): Filling the form should make them intelligent; they should not need an explanation; property value is the cause; tenure is the most important property; use colors, sequencing, order.
- 00:00:57–00:01:07 (idle, shots 0007–0008): If applied, the form will change; maybe not most important now; but it should be done.
- 00:08:23–00:08:34 (idle after Google, shots 0066–0068): People usually train left to right, up to down; “We do the same.”

## Cross-recording continuation

Continues from `wb-rec-260815-2304`. That recording ended on Explore banks with an easy / AI-native form, vertical tabs, “Here you have written 10 years,” tenure with two cards vs interest rate with one card, and that rate, amount, and tenure are all affected. This recording opens: “if this is the case, then we should do this” and maps up-to-down and left-to-right onto the same form. Gap is ~2.5 s. Does not continue into `wb-rec-260815-2322`, which starts on option count, a compare-banks button, and banks vs lenders vs NBFC.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json`: id `152443cc-6acb-4cd3-848e-1e260b989c24`, start URL Explore banks, 518906 ms, 69 screenshots, 112 events. `timeline_alignment`
- `audio.json`: language tag `mr` (ignore); segments 000–016 and 142–145; “tenure” low probability. `supports_issue`
- `audio.lrc`: same opening quotes with lyric timestamps. `supports_issue`
- `audio.srt`: primary speech clock, cues 1–16 and 141–145. `supports_issue`
- `audio.text`: plain dump of form-intelligence / colors / order talk. `supports_issue`
- `audio.tsv`: ms clock 3460–67380 and 503730–514370. `timeline_alignment`
- `audio.txt`: timed dump matching srt on this stretch. `supports_issue`
- `audio.vtt`: same family as srt. `supports_issue`
- `audio.webm`: binary mic; not listened; text artifacts used. `checked_no_extra_signal`
- `audio_sentences.txt`: same opening as one paragraph. `supports_issue`
- `console.json`: `[]`. `checked_no_extra_signal`
- `events.json`: idle through first minute; landmark t=196 Loan inputs; focus `#hlc-property-value` t=70648 after this speech. `timeline_alignment`
- `index.html`: player shell with inlined session JSON; no extra talk. `checked_no_extra_signal`
- `pages.json`: p1 title Explore banks – Shroffin; form Loan inputs. `supports_issue`
- `replay.spec.ts`: goto Explore banks; first click is later (`details#hlc-form-more`). `timeline_alignment`
- `tabs.json`: tab stays on Explore banks for this stretch. `timeline_alignment`
- `viewer.css`: generic player, 17895 bytes. `checked_no_extra_signal`
- `viewer.js`: generic player, 32334 bytes. `checked_no_extra_signal`
- `screenshots/index.json`: 0000–0008 t=197–68199, Explore banks, start/periodic. `timeline_alignment`
- `screenshots/0000.jpg`: collapsed Loan inputs + PNB row; no importance encoding. `supports_issue`
- `screenshots/0001.jpg`: same collapsed form. `supports_issue`
- `screenshots/0002.jpg`: same collapsed form. `supports_issue`
- `screenshots/0003.jpg`: same collapsed form. `supports_issue`
- `screenshots/0004.jpg`: same collapsed form. `supports_issue`
- `screenshots/0005.jpg`: same collapsed form. `supports_issue`
- `screenshots/0006.jpg`: same collapsed form. `supports_issue`
- `screenshots/0007.jpg`: same collapsed form. `supports_issue`
- `screenshots/0008.jpg`: same collapsed form at end of this speech. `supports_issue`
- `screenshots/0009.jpg`: expanded Adjust eligibility; used by issue 02. `checked_no_extra_signal`
- `screenshots/0010.jpg`: Co-applicant No; used by issue 02. `checked_no_extra_signal`
- `screenshots/0011.jpg`: expanded form, Co-applicant No. `checked_no_extra_signal`
- `screenshots/0012.jpg`: same expanded form. `checked_no_extra_signal`
- `screenshots/0013.jpg`: Credit card limits info click; issue 03. `checked_no_extra_signal`
- `screenshots/0014.jpg`: same tooltip stretch. `checked_no_extra_signal`
- `screenshots/0015.jpg`: same. `checked_no_extra_signal`
- `screenshots/0016.jpg`: Tenure info click; issue 03. `checked_no_extra_signal`
- `screenshots/0017.jpg`: Tenure tooltip. `checked_no_extra_signal`
- `screenshots/0018.jpg`: Tenure tooltip. `checked_no_extra_signal`
- `screenshots/0019.jpg`: click main card. `checked_no_extra_signal`
- `screenshots/0020.jpg`: scrolled; Existing EMIs tooltip later. `checked_no_extra_signal`
- `screenshots/0021.jpg`: Existing EMIs tooltip; issue 03. `checked_no_extra_signal`
- `screenshots/0022.jpg`–`screenshots/0039.jpg`: same scrolled form with Existing EMIs tooltip open (periodic). `checked_no_extra_signal`
- `screenshots/0040.jpg`: click Co-applicant row. `checked_no_extra_signal`
- `screenshots/0041.jpg`–`screenshots/0042.jpg`: still on expanded form. `checked_no_extra_signal`
- `screenshots/0043.jpg`: scrolled up before Google. `checked_no_extra_signal`
- `screenshots/0044.png`: Google “cognitive load”; issue 04. `checked_no_extra_signal`
- `screenshots/0045.jpg`–`screenshots/0068.jpg`: back on expanded Explore banks form during copy/cognitive-load talk; LTR/TTB restatement uses 0066–0068. `checked_no_extra_signal` for 0045–0065; `supports_issue` for the closing LTR/TTB line on `screenshots/0066.jpg`, `screenshots/0067.jpg`, `screenshots/0068.jpg`.

## ASR notes

Transcripts disagree on wording, not on the join. `audio.srt`: “While filling this form, I become intelligent.” `audio.json` / `audio.text`: same idea. `audio.json` language `mr` is wrong. “Tenure” is low-probability in `audio.json` but matches the on-screen Tenure field and `wb-rec-260815-2304` (rate / amount / tenure), so the intended word is tenure.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2313/issue-01-loan-form-importance-not-shown-by-order-color",
  "issue_title": "Loan form does not show what matters most by order or color",
  "folder": "wb-rec-260815-2313",
  "sequence_index": 22,
  "recording_id": "152443cc-6acb-4cd3-848e-1e260b989c24",
  "recording_started_at": "2026-08-15T17:43:51.324Z",
  "recording_ended_at": "2026-08-15T17:52:30.230Z",
  "duration_ms": 518906,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs form on Explore banks",
  "pinpoint": "On Explore banks, the Loan inputs form does not encode which fields matter most; they said filling it should make the user intelligent without explanation, using top-to-bottom importance (money, rate, tenure), left-to-right column importance, and colors/sequence/order.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260815-2304",
  "continued_into_folder": null,
  "related_issue_files": ["issue-02-adjust-eligibility-fields-should-not-disappear.md", "issue-03-loan-form-info-icons-need-arranging.md", "issue-04-copy-extra-words-raise-cognitive-load.md"],
  "source_files_used": ["manifest.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/index.json", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.png", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg"],
  "speech_clock": ["00:00:03,460 --> 00:01:07,380", "00:08:23,730 --> 00:08:34,370"],
  "event_t_ms": [196, 70648],
  "screenshot_files": ["screenshots/0000.jpg", "screenshots/0008.jpg"],
  "tags": ["layout", "form", "importance", "color", "order"],
  "quotes": [
    {"clock": "00:00:28,960", "text": "While filling this form, I become intelligent.", "artifact": "audio.srt"},
    {"clock": "00:00:39,700", "text": "I directly understand that this happens due to property value.", "artifact": "audio.srt"},
    {"clock": "00:00:44,460", "text": "And this is the most important property, the tenure.", "artifact": "audio.srt"},
    {"clock": "00:00:50,480", "text": "And you can use just colors and sequencing and order, right?", "artifact": "audio.srt"},
    {"clock": "00:01:06,060", "text": "But it should be done.", "artifact": "audio.srt"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```

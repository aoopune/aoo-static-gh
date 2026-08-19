# Property helper uses “Sets” and “ceiling,” a word they said India does not know

On Explore banks, the line under Property agreement value says it sets the ceiling on the loan against this house, and to use the sale agreement price.
They read that line and said nobody in India knows “ceiling.”
They also said this sentence starts with “Sets,” the same problem as Monthly income.
That helper wording is the issue, not the field name (that is a separate issue).

---
issue_id: "wb-rec-260815-2116/issue-02-property-helper-sets-ceiling-unknown-in-india"
issue_title: "Property helper uses “Sets” and “ceiling,” a word they said India does not know"
folder: "wb-rec-260815-2116"
sequence_index: 9
recording_id: "cff0d45a-1eff-4415-a374-98232f3208a8"
recording_started_at: "2026-08-15T15:46:08.706Z"
recording_ended_at: "2026-08-15T15:55:10.521Z"
duration_ms: 541815
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Helper under Property agreement value: “Sets the ceiling on the loan against this house. Use the sale agreement price.” plus About Property agreement value (i)"
pinpoint: "On Explore banks, the Property agreement value helper “Sets the ceiling on the loan against this house. Use the sale agreement price.” is badly worded: they said the sentence starts with “Sets” and that nobody in India knows the word “ceiling.”"
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: "true"
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-01-monthly-income-helper-sets-does-not-explain-why.md", "issue-03-property-agreement-value-label-too-complex.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/0073.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/0076.jpg", "screenshots/0077.jpg", "screenshots/0078.jpg", "screenshots/0079.jpg", "screenshots/0080.jpg", "screenshots/0081.jpg", "screenshots/0082.jpg", "screenshots/0083.jpg", "screenshots/0084.jpg", "screenshots/0085.jpg", "screenshots/0086.jpg", "screenshots/0087.jpg", "screenshots/0088.jpg", "screenshots/0089.jpg", "screenshots/0090.jpg", "screenshots/0091.jpg", "screenshots/0092.jpg", "screenshots/0093.jpg", "screenshots/0094.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:02:32,160 --> 00:03:06,950"]
event_t_ms: [145290, 145292, 146316, 146946, 156537, 157191, 158848, 159678, 165890, 166614]
screenshot_files: ["screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0030.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg"]
tags: ["copy", "trust"]
---

## Exact issue

On Explore banks, Loan inputs, Property agreement value shows helper “Sets the ceiling on the loan against this house. Use the sale agreement price.” After they left Monthly income, they opened About Property agreement value and read that line.

audio.srt 00:02:32: “Ceiling won the loan against this house.” Then: “No one in India knows about ceilings.” “Sets the ceilings.” They later tied it to the same “Sets” complaint: “This sentence starts with sets. And the word ceiling doesn't work in India.”

The object is this helper sentence. The field label “Property agreement value” is a different problem (issue-03).

## How the files join (required)

- time: 145290–186950 ms (clicks from 00:02:25; speech 00:02:32–00:03:06)
- what they said (audio.srt): “Ceiling won the loan against this house.” / “No one in India knows about ceilings.” / “This sentence starts with sets. And the word ceiling doesn't work in India.”
- what they did: focus+click About Property agreement value (events.json t=145290+; replay.spec.ts second-field (i))
- what was on screen: 0026.jpg–0028.jpg at the property (i); 0039.jpg–0041.jpg tooltip “Sets the ceiling on the loan against this house. Use the sale agreement price. Learn more”
- what page/object: pages.json Property agreement value* helper “Sets the ceiling on the loan against this house. Use the sale agreement price.”
- therefore the actual issue is: that helper uses “Sets” and “ceiling,” which they said does not work in India.

## Pinpoint

On Explore banks, the Property agreement value helper “Sets the ceiling on the loan against this house. Use the sale agreement price.” is the object. They said nobody in India knows “ceiling,” and that this sentence, like Monthly income, starts with “Sets.” They cared because the helper is supposed to tell a borrower what this number does to the loan.

## Related discussion (not the issue itself)

- “All the properties are in this house” / “Let's talk about it” — they stay on this field after the ceiling line.
- “Our requirements have been captured in this. So we have to change the loop.” — they treat the helper as something they must rewrite, not a one-off nit.
- Same “Sets” pattern as issue-01; extra India-specific “ceiling” problem is why this is a separate file.
- Immediately after, they switch to the label “Property agreement value” (issue-03).

## Chronology in this recording

- 00:02:18 — “But…” after monthly-income talk.
- 00:02:25 — first About Property agreement value click (t=145290). 0026.jpg.
- 00:02:32–00:02:41 — they quote ceiling; nobody in India knows it; “Sets the ceilings.”
- 00:02:42–00:02:58 — stay on this field; “we have to change the loop.”
- 00:03:01–00:03:06 — “This sentence starts with sets. And the word ceiling doesn't work in India.”
- 00:03:07 onward — label “Property agreement value” (issue-03). Tooltip still visible later (0039.jpg, 0051.jpg, 0089.jpg) while they debate the name.

## Cross-recording continuation

Standalone. Previous folder ended on OD/savings, not this helper. Next folder starts on CIBIL, not ceiling copy.

## Evidence by file (every file in the folder — no omissions)

- audio.json — Whisper 152.16–186.95s ceiling/sets. supports_issue
- audio.lrc — LRC ceiling lines 02:32–03:06. timeline_alignment
- audio.srt — Cues 11–20: ceiling / no one in India / sentence starts with sets. supports_issue
- audio.text — Untimed prose of ceiling critique. supports_issue
- audio.tsv — ms 152160–186950. timeline_alignment
- audio.txt — Clocked dump ceiling stretch. timeline_alignment
- audio.vtt — VTT ceiling cues. timeline_alignment
- audio.webm — Same webm; text used for ceiling quotes. checked_no_extra_signal
- audio_sentences.txt — Same ceiling sentences. supports_issue
- console.json — Empty []. checked_no_extra_signal
- events.json — About Property agreement value clicks from t=145290. supports_issue
- index.html — Same player shell. timeline_alignment
- manifest.json — Same session metadata. timeline_alignment
- pages.json — Field Property agreement value* helper “Sets the ceiling on the loan against this house. Use the sale agreement price.” supports_issue
- replay.spec.ts — Replays second-field (i) clicks. supports_issue
- screenshots/0000.png — t=188 reason=start; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0001.png — t=7478 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0002.jpg — t=16188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0003.jpg — t=24189 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0004.jpg — t=32189 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0005.jpg — t=42188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0006.jpg — t=45354 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0007.jpg — t=51504 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0008.jpg — t=52048 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0009.jpg — t=60189 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0010.jpg — t=68189 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0011.jpg — t=70091 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0012.jpg — t=71421 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0013.jpg — t=71958 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0014.jpg — t=80189 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0015.jpg — t=90188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0016.jpg — t=98189 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0017.jpg — t=100748 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0018.jpg — t=101696 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0019.jpg — t=102309 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0020.jpg — t=102949 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0021.jpg — t=112188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0022.jpg — t=120188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0023.jpg — t=128188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0024.jpg — t=136188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0025.jpg — t=144188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0026.jpg — t=145691 reason=interaction; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0027.jpg — t=146720 reason=interaction; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0028.jpg — t=147349 reason=interaction; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0029.jpg — t=156188 reason=periodic; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0030.jpg — t=156940 reason=interaction; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0031.jpg — t=157595 reason=interaction; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0032.jpg — t=159252 reason=interaction; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0033.jpg — t=160083 reason=interaction; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0034.jpg — t=164281 reason=interaction; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0035.jpg — t=166295 reason=interaction; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0036.jpg — t=167016 reason=interaction; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0037.jpg — t=170962 reason=interaction; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0038.jpg — t=171952 reason=interaction; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0039.jpg — t=180187 reason=periodic; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0040.jpg — t=188188 reason=periodic; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0041.jpg — t=196188 reason=periodic; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0042.jpg — t=206188 reason=periodic; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0043.jpg — t=215217 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0044.jpg — t=216123 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0045.jpg — t=217119 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0046.jpg — t=224149 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0047.jpg — t=224817 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0048.jpg — t=225573 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0049.jpg — t=230736 reason=interaction; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0050.jpg — t=231726 reason=interaction; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0051.jpg — t=240187 reason=periodic; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0052.jpg — t=248188 reason=periodic; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0053.jpg — t=256188 reason=periodic; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0054.jpg — t=266188 reason=periodic; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0055.jpg — t=270529 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0056.jpg — t=276536 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0057.jpg — t=286187 reason=periodic; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0058.jpg — t=294187 reason=periodic; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0059.jpg — t=294857 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0060.jpg — t=298196 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0061.jpg — t=308187 reason=periodic; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0062.jpg — t=316187 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0063.jpg — t=326187 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0064.jpg — t=332315 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0065.jpg — t=342187 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0066.jpg — t=352187 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0067.jpg — t=362187 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0068.jpg — t=366004 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0069.jpg — t=374186 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0070.jpg — t=382186 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0071.jpg — t=390103 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0072.jpg — t=398185 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0073.jpg — t=406186 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0074.jpg — t=414180 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0075.jpg — t=422186 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0076.jpg — t=432187 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0077.jpg — t=442185 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0078.jpg — t=450186 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0079.jpg — t=453149 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0080.jpg — t=453973 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0081.jpg — t=456724 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0082.jpg — t=462153 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0083.jpg — t=470185 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0084.jpg — t=478185 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0085.jpg — t=486185 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0086.jpg — t=494185 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0087.jpg — t=502185 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0088.jpg — t=505263 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0089.jpg — t=514185 reason=periodic; Explore banks Loan inputs. Property field/tooltip “Sets the ceiling…”. supports_issue
- screenshots/0090.jpg — t=514962 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0091.jpg — t=524182 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0092.jpg — t=528778 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0093.jpg — t=538178 reason=periodic; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/0094.jpg — t=539021 reason=interaction; Explore banks Loan inputs. Same form during later label debate. related_discussion
- screenshots/index.json — t used to bind property tooltip frames. timeline_alignment
- tabs.json — One tab explore-banks.html. timeline_alignment
- viewer.css — Generic player CSS. checked_no_extra_signal
- viewer.js — Generic player JS. checked_no_extra_signal

## ASR notes

- “Ceiling won the loan against this house” is ASR for on-screen “Sets the ceiling on the loan against this house.” Screenshot 0039.jpg + pages.json win.
- “No one in India knows about ceilings” is clear across srt/text/json.
- “Sets the ceilings” matches them pointing at the word “Sets” in that helper.
- audio.json language `en`; some words low-probability; tooltip text used to resolve “ceiling.”

## JSON
```json
{
  "issue_id": "wb-rec-260815-2116/issue-02-property-helper-sets-ceiling-unknown-in-india",
  "issue_title": "Property helper uses “Sets” and “ceiling,” a word they said India does not know",
  "folder": "wb-rec-260815-2116",
  "sequence_index": 9,
  "recording_id": "cff0d45a-1eff-4415-a374-98232f3208a8",
  "recording_started_at": "2026-08-15T15:46:08.706Z",
  "recording_ended_at": "2026-08-15T15:55:10.521Z",
  "duration_ms": 541815,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Helper under Property agreement value: “Sets the ceiling on the loan against this house. Use the sale agreement price.”",
  "pinpoint": "On Explore banks, the Property agreement value helper “Sets the ceiling on the loan against this house. Use the sale agreement price.” is badly worded: they said the sentence starts with “Sets” and that nobody in India knows the word “ceiling.”",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-01-monthly-income-helper-sets-does-not-explain-why.md", "issue-03-property-agreement-value-label-too-complex.md"],
  "source_files_used": ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/0073.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/0076.jpg", "screenshots/0077.jpg", "screenshots/0078.jpg", "screenshots/0079.jpg", "screenshots/0080.jpg", "screenshots/0081.jpg", "screenshots/0082.jpg", "screenshots/0083.jpg", "screenshots/0084.jpg", "screenshots/0085.jpg", "screenshots/0086.jpg", "screenshots/0087.jpg", "screenshots/0088.jpg", "screenshots/0089.jpg", "screenshots/0090.jpg", "screenshots/0091.jpg", "screenshots/0092.jpg", "screenshots/0093.jpg", "screenshots/0094.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"],
  "speech_clock": ["00:02:32,160 --> 00:03:06,950"],
  "event_t_ms": [145290, 145292, 146316, 146946, 156537, 157191, 158848, 159678, 165890, 166614],
  "screenshot_files": ["screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0030.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg"],
  "tags": ["copy", "trust"],
  "quotes": [
    {"clock": "00:02:35,460", "text": "No one in India knows about ceilings.", "artifact": "audio.srt"},
    {"clock": "00:03:01,530", "text": "This sentence starts with sets.", "artifact": "audio.srt"},
    {"clock": "00:03:05,250", "text": "And the word ceiling doesn't work in India.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 145292, "name": "About Property agreement value", "css": "form#hlc-inputs second-field (i)"}
  ],
  "related_discussion_present": true
}
```

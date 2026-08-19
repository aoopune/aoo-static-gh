# More / plus / underline cue is confusing, and More about Bank of Maharashtra is a little misleading

The extra-info control on Bank of Maharashtra is hard to notice: they said the bank did not underline it, they put a clip/plus, and asked how anyone would guess underline.
They said extra info should not be big, not on the phone, and the column should not be big — put a plus sign.
The button reads like more about the bank. They said if you take Maha Super Housing Loan you should know more about the loan.
They called that a little misleading, not standard, and “more and more” if you just write More.

---
issue_id: "wb-rec-260815-2341/issue-02-more-cue-underline-plus-misleading-bank-label"
issue_title: "More / plus / underline cue is confusing, and More about Bank of Maharashtra is a little misleading"
folder: "wb-rec-260815-2341"
sequence_index: 25
recording_id: "a22402c8-4a16-4e52-8736-ec1980e3cab1"
recording_started_at: "2026-08-15T18:11:25.578Z"
recording_ended_at: "2026-08-15T18:20:59.868Z"
duration_ms: 574290
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Compare-table Bank of Maharashtra row: More button (accessible name More about Bank of Maharashtra) plus the bank-name / loan-amount underlines that open drawers"
pinpoint: "On Explore banks, the extra-info control on the Bank of Maharashtra row (More / clip / plus / possible underline) is hard to guess, and the label More about Bank of Maharashtra is a little misleading because they said a Super Housing Loan customer should know more about the loan, not more about the bank; putting More on the loan amount instead opens calculations, which they treated as a different, clearer job."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: "true"
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-01-scheme-facts-only-in-more-details.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/0073.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/0076.jpg", "screenshots/0077.jpg", "screenshots/0078.jpg", "screenshots/0079.jpg", "screenshots/0080.jpg", "screenshots/0081.jpg", "screenshots/0082.jpg", "screenshots/0083.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:03:23,650–00:06:05,390"]
event_t_ms: [204458, 219073, 219074, 222287, 227120, 257105, 261291, 270952, 272847, 281741, 310588, 313521, 316490, 318255, 320627, 324225, 333722, 338027]
screenshot_files: ["screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0035.jpg","screenshots/0038.jpg","screenshots/0041.jpg","screenshots/0051.jpg","screenshots/0052.jpg","screenshots/0053.jpg"]
tags: ["copy","navigation","interaction","trust"]
---

## Exact issue

After saying More details is good but the facts should be in the product, they looked at how extra information is cued on the Bank of Maharashtra row.

Raw ASR: “The bank of Maharashtra didn't underline it. They put a clip in it. Then, it got blocked.” They are told there is more important information, then told it is the same information, not important, “you should see this too.” Then “ADD.info” twice. Constraints: “It should not be big. It should not be on the phone. Column should not be big. You have to put the plus sign. How to guess underline?”

They contrasted two underlines: “If you put it on a loan amount, it will give you more calculations.” Click t=257105 `Show how loan amount for Bank of Maharashtra was calculated` (₹48,00,000) — that is the calculation drawer. “If you put it under the bank of Maharashtra, it will give you more calculations” (ASR repeated; screen + later clicks show the bank-row **More** opens the More details dump, not the same calculator). “This is the dump of all information. It is clickable.”

On the label: “If you want to know more about the bank of Maharashtra, click it. But if you take the super housing loan, I think you should know more about the loan. … It is a little misleading.” Accessible name from events.json: **More about Bank of Maharashtra**; visible text **More**. “It is not standard. Earlier, we used to write a solenoid. We used to write more details. It is more and more. If you write something, it is more.”

Joined defect: the extra-info affordance (underline vs plus vs clip vs More) is not guessable, and naming it as more about the *bank* misstates that the dump is more about the *loan/scheme*.

## How the files join

- time 203650–245050 ms / 00:03:23–00:04:05
  - said: didn't underline; put a clip; ADD.info; not big; not on the phone; column not big; put the plus; how to guess underline.
  - did: backdrop close t=204458 (table visible); idle talk on the BoM row.
  - seeing: screenshots/0030.jpg–0031.jpg — Bank of Maharashtra, **More**, ₹48,00,000, 20 years.
  - therefore: they are attacking the table cue, not the drawer contents.

- time 254810–270670 ms / 00:04:14–00:04:30
  - said: underline on loan amount → more calculations; underline under Bank of Maharashtra → (ASR) more calculations; dump of all information.
  - did: click loan-amount t=257105; close; click More t=270952.
  - seeing: 0038.jpg loan-amount steps vs 0041.jpg More details dump.
  - therefore: two different jobs share a similar “more” pattern; they want the difference to be obvious.

- time 297980–365390 ms / 00:04:57–00:06:05
  - said: people click when told what is inside; more about Bank of Maharashtra vs more about the loan; a little misleading; not standard; used to write more details; more and more.
  - did: More t=270952 and t=333722; bank-name span t=320627, 324225; EMI peek t=316490 then close.
  - seeing: 0051.jpg–0053.jpg bank name / More.
  - therefore: the visible **More about Bank of Maharashtra** label is the misleading object.

## Pinpoint

On Explore banks, Bank of Maharashtra’s extra-info control (More button, accessible name More about Bank of Maharashtra, plus/clip/underline) is hard to guess and a little misleading: they said a Super Housing Loan customer should learn more about the loan, while this control sounds like more about the bank, and the same underline pattern on ₹48,00,000 opens a different thing (loan-amount calculations).

## Related discussion

- ADD.info / plus sign / not big / not on the phone / column not big — brainstorming the cue, still the same issue.
- “Generally, when people are told what is inside, they click it.”
- Brief EMI drawer open/close (₹37,938) while comparing which numbers are clickable — related, not a separate EMI issue in this recording.
- “This is the dump of all information” ties back to issue-01’s static dump, but here the attack is the *cue and label*.
- ASR “solenoid” while they say they used to write more details — quoted raw; likely a mishear of a prior label, not an on-screen solenoid.

## Chronology in this recording

| Clock | Said | Did | Screen |
|---|---|---|---|
| 00:03:23–00:03:31 | Bank of Maharashtra didn't underline; put a clip; got blocked | Table after backdrop close | 0030 |
| 00:03:34–00:04:12 | Told more important / same / see this too; ADD.info; not big; plus; how to guess underline | Idle on table | 0031–0037 |
| 00:04:14–00:04:35 | Underline on loan amount → calculations; under BoM → calculations (ASR); dump of all information | Loan-amount click 257105; More 270952 | 0038, 0041 |
| 00:04:45–00:05:38 | Clickable; told what is inside they click; more about BoM vs more about the loan | Bank-name clicks; More again | 0051–0053 |
| 00:05:37–00:06:05 | A little misleading; not standard; used to write more details; more and more | Idle / close | 0054–0056 |

## Cross-recording continuation

**Standalone in this folder** for the cue/label. It sits after issue-01’s “put facts in the product” talk on the same page, but it is a different problem (how More is shown vs where scheme facts live).

Does not continue into `wb-rec-260815-2355` (loan-amount step labels). Does not require a file in `wb-rec-260815-2332` (that folder ended on More details contents, not this cue).

## Evidence by file (every file in the folder — no omissions)

- `audio.json` — Whisper object, language=mr (wrong), segments through 571.89s; words for scheme / more / 2.40 months / color code / min of 2. Used: supports_issue.
- `audio.lrc` — Timed lyric lines matching srt family. Used: timeline_alignment.
- `audio.srt` — Primary speech clock; cues 00:00:40,060–00:09:31,890. Used: supports_issue.
- `audio.text` — Untimed transcript of the same session. Used: supports_issue.
- `audio.tsv` — start/end ms + text; used to pin quotes to milliseconds. Used: supports_issue.
- `audio.txt` — [mm:ss] dump; same words as srt family with small tail extras. Used: supports_issue.
- `audio.vtt` — WEBVTT same cue family as srt. Used: timeline_alignment.
- `audio.webm` — Binary mic 9243645 bytes; speech taken from text artifacts. Used: checked_no_extra_signal.
- `audio_sentences.txt` — Sentence dump; wording variants (More details vs More details). Used: supports_issue.
- `console.json` — Empty array []; no console errors. Used: checked_no_extra_signal.
- `events.json` — 128 events; 33 clicks on Scheme, More about Bank of Maharashtra, loan-amount ₹48,00,000, EMI, backdrop, step spans. Used: supports_issue.
- `index.html` — Player shell; comment inlines recording id, explore-banks.html, click times; no extra discussion. Used: timeline_alignment.
- `manifest.json` — id a22402c8-4a16-4e52-8736-ec1980e3cab1, 2026-08-15T18:11:25.578Z→2026-08-15T18:20:59.868Z, 574290ms, start_url explore-banks.html, 128 events, 84 shots. Used: timeline_alignment.
- `pages.json` — title Explore banks – Shroffin; h1 Explore banks.; More details heading; Loan inputs / Bank options. Used: supports_issue.
- `replay.spec.ts` — Playwright locators: Scheme details, More about Bank of Maharashtra, loan-amount and EMI buttons, step spans. Used: supports_issue.
- `screenshots/0000.jpg` — t=199 start. More details drawer already open on Bank of Maharashtra; Scheme accordion visible. Continues 2332. Used: checked_no_extra_signal.
- `screenshots/0001.jpg` — t=8200 periodic. Same More details start state. Used: checked_no_extra_signal.
- `screenshots/0002.jpg` — t=16201 periodic. Same More details start state. Used: checked_no_extra_signal.
- `screenshots/0003.jpg` — t=24201 periodic. Same More details; just before Scheme clicks. Used: checked_no_extra_signal.
- `screenshots/0004.jpg` — t=25251 interaction after Scheme summary click. Scheme block in view. Used: checked_no_extra_signal.
- `screenshots/0005.jpg` — t=34200 periodic. Scheme / Maha Super Housing Loan facts in drawer. Used: checked_no_extra_signal.
- `screenshots/0006.jpg` — t=40690 interaction. Scheme summary clicked again. Used: checked_no_extra_signal.
- `screenshots/0007.jpg` — t=45488 interaction. Nested Scheme span click. Used: checked_no_extra_signal.
- `screenshots/0008.jpg` — t=48325 interaction. Click on scheme value span (Maha Super Housing Loan). Used: checked_no_extra_signal.
- `screenshots/0009.jpg` — t=58199 periodic. Scheme facts still open (bank, scheme name, facility, purpose, rate type, borrower category). Used: checked_no_extra_signal.
- `screenshots/0010.jpg` — t=66200 periodic. Same Scheme table. Used: checked_no_extra_signal.
- `screenshots/0011.jpg` — t=74200 periodic. Same Scheme table. Used: checked_no_extra_signal.
- `screenshots/0012.jpg` — t=82200 periodic. Same Scheme table. Used: checked_no_extra_signal.
- `screenshots/0013.jpg` — t=90200 periodic. Same Scheme table during “scheme under the name of Bank of Maharashtra.” Used: checked_no_extra_signal.
- `screenshots/0014.jpg` — t=97161 interaction. Scheme summary click (collapse/toggle). Used: checked_no_extra_signal.
- `screenshots/0015.jpg` — t=103603 interaction. details:nth-of-type(3) How the rate is built. Used: checked_no_extra_signal.
- `screenshots/0016.jpg` — t=109324 interaction. details:nth-of-type(4) Discounts. Used: checked_no_extra_signal.
- `screenshots/0017.jpg` — t=112926 interaction. details:nth-of-type(5) Charges. Used: checked_no_extra_signal.
- `screenshots/0018.jpg` — t=119431 interaction. Charges toggled again. Used: checked_no_extra_signal.
- `screenshots/0019.jpg` — t=120807 interaction. Discounts summary. Used: checked_no_extra_signal.
- `screenshots/0020.jpg` — t=123985 interaction. How the rate is built closed/toggled. Accordion walk of static dump. Used: checked_no_extra_signal.
- `screenshots/0021.jpg` — t=132201 periodic. More details collapsed list during “should be in the product.” Used: checked_no_extra_signal.
- `screenshots/0022.jpg` — t=142200 periodic. Collapsed More details. Used: checked_no_extra_signal.
- `screenshots/0023.jpg` — t=150201 periodic. Collapsed More details. Used: checked_no_extra_signal.
- `screenshots/0024.jpg` — t=160201 periodic. Collapsed More details. Used: checked_no_extra_signal.
- `screenshots/0025.jpg` — t=170201 periodic. Collapsed More details. Used: checked_no_extra_signal.
- `screenshots/0026.jpg` — t=180200 periodic. Collapsed More details / plus-underline talk starts soon. Used: supports_issue.
- `screenshots/0027.jpg` — t=188200 periodic. Collapsed More details during cue talk. Used: supports_issue.
- `screenshots/0028.jpg` — t=196200 periodic. Collapsed More details. Used: supports_issue.
- `screenshots/0029.jpg` — t=204201 periodic. Just before backdrop close. Used: supports_issue.
- `screenshots/0030.jpg` — t=204860 interaction. Backdrop click; table with Bank of Maharashtra, More, ₹48,00,000, 20 years. Used: supports_issue.
- `screenshots/0031.jpg` — t=214201 periodic. Compare table, BoM first row, More button visible. Used: supports_issue.
- `screenshots/0032.jpg` — t=219477 interaction. Click More about Bank of Maharashtra (button text More). Used: supports_issue.
- `screenshots/0033.jpg` — t=222690 interaction. More details reopened; Scheme click. Used: supports_issue.
- `screenshots/0034.jpg` — t=227523 interaction. Backdrop close. Used: supports_issue.
- `screenshots/0035.jpg` — t=236201 periodic. Table; they talk plus/underline/ADD.info. Used: supports_issue.
- `screenshots/0036.jpg` — t=244201 periodic. Table. Used: supports_issue.
- `screenshots/0037.jpg` — t=252201 periodic. Table before first loan-amount open. Used: supports_issue.
- `screenshots/0038.jpg` — t=257507 interaction. Loan amount how-calculated drawer opening (₹48,00,000). Used: supports_issue.
- `screenshots/0039.jpg` — t=261694 interaction. Backdrop close after peek at loan-amount drawer. Used: supports_issue.
- `screenshots/0040.jpg` — t=270200 periodic. Table; More vs loan-amount cue contrast. Used: supports_issue.
- `screenshots/0041.jpg` — t=271355 interaction. More about Bank of Maharashtra again. Used: supports_issue.
- `screenshots/0042.jpg` — t=273250 interaction. Scheme svg click in More details. Used: supports_issue.
- `screenshots/0043.jpg` — t=282144 interaction. Backdrop close. Used: supports_issue.
- `screenshots/0044.jpg` — t=290201 periodic. Table during “dump of all information / clickable / misleading.” Used: supports_issue.
- `screenshots/0045.jpg` — t=300202 periodic. Table. Used: supports_issue.
- `screenshots/0046.jpg` — t=310201 periodic. Table before second loan-amount open. Used: supports_issue.
- `screenshots/0047.jpg` — t=310990 interaction. Loan amount drawer again. Used: supports_issue.
- `screenshots/0048.jpg` — t=313924 interaction. Backdrop close. Used: supports_issue.
- `screenshots/0049.jpg` — t=316894 interaction. EMI how-calculated peek (₹37,938) then closed; not a separate issue. Used: supports_issue.
- `screenshots/0050.jpg` — t=318658 interaction. Backdrop close after EMI peek. Used: supports_issue.
- `screenshots/0051.jpg` — t=321032 interaction. Click bank-name span on BoM row. Used: supports_issue.
- `screenshots/0052.jpg` — t=324629 interaction. Second bank-name span click (underline/plus cue). Used: supports_issue.
- `screenshots/0053.jpg` — t=334127 interaction. More about Bank of Maharashtra (svg path on More). Used: supports_issue.
- `screenshots/0054.jpg` — t=338430 interaction. Backdrop close. Used: supports_issue.
- `screenshots/0055.jpg` — t=348201 periodic. Table; “more details / more and more.” Used: supports_issue.
- `screenshots/0056.jpg` — t=356201 periodic. Table. Used: supports_issue.
- `screenshots/0057.jpg` — t=364202 periodic. After scroll y=634; table before loan-amount stay. Used: supports_issue.
- `screenshots/0058.jpg` — t=368625 interaction. Open loan amount how-calculated; six numbered steps. Used: checked_no_extra_signal.
- `screenshots/0059.jpg` — t=371993 interaction. Brief close then reopen. Used: checked_no_extra_signal.
- `screenshots/0060.jpg` — t=377190 interaction. Loan amount drawer stays open for the rest of the session. Used: checked_no_extra_signal.
- `screenshots/0061.jpg` — t=386201 periodic. Steps 1–6 visible (80%, 55%, 10%, 240 months). Used: checked_no_extra_signal.
- `screenshots/0062.jpg` — t=392906 interaction. Click in step 4 area (₹555 / EMI available). Used: checked_no_extra_signal.
- `screenshots/0063.jpg` — t=402201 periodic. Drawer scrolled; later steps including 240 months / lowest of limits. Used: checked_no_extra_signal.
- `screenshots/0064.jpg` — t=410202 periodic. Same loan-amount drawer. Used: checked_no_extra_signal.
- `screenshots/0065.jpg` — t=420201 periodic. Walking 48 lakh / 55,000 / credit card. Used: checked_no_extra_signal.
- `screenshots/0066.jpg` — t=428203 periodic. Same drawer. Used: checked_no_extra_signal.
- `screenshots/0067.jpg` — t=438202 periodic. Same drawer. Used: checked_no_extra_signal.
- `screenshots/0068.jpg` — t=446202 periodic. Same drawer. Used: checked_no_extra_signal.
- `screenshots/0069.jpg` — t=454202 periodic. Same drawer. Used: checked_no_extra_signal.
- `screenshots/0070.jpg` — t=462202 periodic. Same drawer. Used: checked_no_extra_signal.
- `screenshots/0071.jpg` — t=470202 periodic. Same drawer. Used: checked_no_extra_signal.
- `screenshots/0072.jpg` — t=480201 periodic. Same drawer during 240 months / 20 years talk. Used: checked_no_extra_signal.
- `screenshots/0073.jpg` — t=488203 periodic. Same drawer. Used: checked_no_extra_signal.
- `screenshots/0074.jpg` — t=496211 periodic. Same drawer; “yes this is 20 years.” Used: checked_no_extra_signal.
- `screenshots/0075.jpg` — t=504216 periodic. Same drawer; eligibility / not neat / color code. Used: checked_no_extra_signal.
- `screenshots/0076.jpg` — t=512219 periodic. Same drawer; min of 2 / left-right 1-2-3. Used: checked_no_extra_signal.
- `screenshots/0077.jpg` — t=516361 interaction. Click in step 3 credit-card load area. Used: checked_no_extra_signal.
- `screenshots/0078.jpg` — t=526222 periodic. Still on loan-amount drawer at session end stretch. Used: checked_no_extra_signal.
- `screenshots/0079.jpg` — t=534222 periodic. Same drawer. Used: checked_no_extra_signal.
- `screenshots/0080.jpg` — t=542222 periodic. Same drawer. Used: checked_no_extra_signal.
- `screenshots/0081.jpg` — t=550225 periodic. Same drawer. Used: checked_no_extra_signal.
- `screenshots/0082.jpg` — t=560223 periodic. Same drawer. Used: checked_no_extra_signal.
- `screenshots/0083.jpg` — t=570223 periodic. Last shot; loan-amount drawer still open (handoff to 2355). Used: checked_no_extra_signal.
- `screenshots/index.json` — 84 shots t=199–570223; urls all explore-banks.html. Used: timeline_alignment.
- `tabs.json` — One tab 1351502398 on explore-banks.html whole session. Used: timeline_alignment.
- `viewer.css` — Generic player CSS 17895 bytes; no session talk. Used: checked_no_extra_signal.
- `viewer.js` — Generic player JS 32334 bytes; no session talk. Used: checked_no_extra_signal.

## ASR notes

- “clip” / “plus sign” / “underline”: events show a **More** button with an icon (svg/path clicks) and clickable ₹48,00,000. No literal “ADD.info” on screen — they were naming a possible cue. Quoted raw ADD.info.
- “If you put it under the bank of Maharashtra, it will give you more calculations” repeated; click+screenshot show More opens the details dump, loan amount opens calculations. Used screen+click; quoted raw ASR.
- “solenoid” (srt/tsv/json): no such control. Kept as raw ASR next to “we used to write more details.”
- Accessible name **More about Bank of Maharashtra** vs visible **More** — events.json + replay.spec.ts; matches “more about the bank of Maharashtra.”

## JSON

```json
{
  "issue_id": "wb-rec-260815-2341/issue-02-more-cue-underline-plus-misleading-bank-label",
  "issue_title": "More / plus / underline cue is confusing, and More about Bank of Maharashtra is a little misleading",
  "folder": "wb-rec-260815-2341",
  "sequence_index": 25,
  "recording_id": "a22402c8-4a16-4e52-8736-ec1980e3cab1",
  "recording_started_at": "2026-08-15T18:11:25.578Z",
  "recording_ended_at": "2026-08-15T18:20:59.868Z",
  "duration_ms": 574290,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Compare-table Bank of Maharashtra row: More button (accessible name More about Bank of Maharashtra) plus the bank-name / loan-amount underlines that open drawers",
  "pinpoint": "On Explore banks, the extra-info control on the Bank of Maharashtra row (More / clip / plus / possible underline) is hard to guess, and the label More about Bank of Maharashtra is a little misleading because they said a Super Housing Loan customer should know more about the loan, not more about the bank; putting More on the loan amount instead opens calculations, which they treated as a different, clearer job.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-01-scheme-facts-only-in-more-details.md"],
  "source_files_used": ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/0073.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/0076.jpg", "screenshots/0077.jpg", "screenshots/0078.jpg", "screenshots/0079.jpg", "screenshots/0080.jpg", "screenshots/0081.jpg", "screenshots/0082.jpg", "screenshots/0083.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"],
  "speech_clock": ["00:03:23,650–00:06:05,390"],
  "event_t_ms": [204458, 219073, 219074, 222287, 227120, 257105, 261291, 270952, 272847, 281741, 310588, 313521, 316490, 318255, 320627, 324225, 333722, 338027],
  "screenshot_files": ["screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0035.jpg","screenshots/0038.jpg","screenshots/0041.jpg","screenshots/0051.jpg","screenshots/0052.jpg","screenshots/0053.jpg"],
  "tags": ["copy","navigation","interaction","trust"],
  "quotes": [
    {"clock": "00:03:23,650", "text": "The bank of Maharashtra didn't underline it.", "artifact": "audio.srt"},
    {"clock": "00:04:04,130", "text": "You have to put the plus sign.", "artifact": "audio.srt"},
    {"clock": "00:04:10,310", "text": "How to guess underline?", "artifact": "audio.srt"},
    {"clock": "00:05:18,120", "text": "If you want to know more about the bank of Maharashtra, click it.", "artifact": "audio.srt"},
    {"clock": "00:05:26,330", "text": "But if you take the super housing loan, I think you should know more about the loan.", "artifact": "audio.srt"},
    {"clock": "00:05:37,270", "text": "It is a little misleading.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 219074, "name": "More about Bank of Maharashtra", "css": "tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(1) > div > div > div:nth-of-type(2) > button > span:nth-of-type(1)"},
    {"t_ms": 257105, "name": "Show how loan amount for Bank of Maharashtra was calculated", "css": "tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(3) > button"},
    {"t_ms": 270952, "name": "More about Bank of Maharashtra", "css": "tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(1) > div > div > div:nth-of-type(2) > button"},
    {"t_ms": 333722, "name": "More about Bank of Maharashtra", "css": "tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(1) > div > div > div:nth-of-type(2) > button > span:nth-of-type(2) > svg > path"}
  ],
  "related_discussion_present": true
}
```

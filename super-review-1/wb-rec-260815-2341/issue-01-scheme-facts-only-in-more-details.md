# Maha Super Housing Loan scheme facts live only in More details, not in the product

The scheme name and facts for Bank of Maharashtra’s Maha Super Housing Loan are useful: a customer could take them to the branch and say “this is your scheme.”
Those facts sit only in the More details drawer. They said Bank of Maharashtra itself has no answer to “what is your scheme?”
If someone already thinks their loan is under some other scheme, they may never open this dump and never see it.
They said this static bank information should live in the product itself, not as a blog.

---
issue_id: "wb-rec-260815-2341/issue-01-scheme-facts-only-in-more-details"
issue_title: "Maha Super Housing Loan scheme facts live only in More details, not in the product"
folder: "wb-rec-260815-2341"
sequence_index: 25
recording_id: "a22402c8-4a16-4e52-8736-ec1980e3cab1"
recording_started_at: "2026-08-15T18:11:25.578Z"
recording_ended_at: "2026-08-15T18:20:59.868Z"
duration_ms: 574290
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "More details drawer → Scheme accordion for Bank of Maharashtra · Maha Super Housing Loan"
pinpoint: "On Explore banks, Bank of Maharashtra Maha Super Housing Loan scheme facts (bank, scheme name, facility, purpose, rate type, borrower category) exist only as static content in the More details drawer; they said a customer can take this to the manager as the bank’s scheme, but Bank of Maharashtra itself has no answer, a customer who already thinks they are under a scheme will miss it, and this static information should be out in the product, not a blog."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: "true"
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260815-2332"
continued_into_folder: null
related_issue_files: ["issue-02-more-cue-underline-plus-misleading-bank-label.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/0073.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/0076.jpg", "screenshots/0077.jpg", "screenshots/0078.jpg", "screenshots/0079.jpg", "screenshots/0080.jpg", "screenshots/0081.jpg", "screenshots/0082.jpg", "screenshots/0083.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:00:40,060–00:03:21,170"]
event_t_ms: [24847, 40286, 45085, 47920, 96760, 103202, 108919, 112523, 119028, 120404, 123581, 204458]
screenshot_files: ["screenshots/0000.jpg","screenshots/0004.jpg","screenshots/0008.jpg","screenshots/0013.jpg","screenshots/0020.jpg","screenshots/0021.jpg"]
tags: ["copy","navigation","trust","missing"]
---

## Exact issue

On Explore banks, with Bank of Maharashtra’s More details drawer already open from the previous recording, they expanded Scheme and treated the Maha Super Housing Loan block as real, usable information — then as the wrong place for it.

Raw ASR (audio.srt): “No, this is definitely good information.” Then they role-played a customer: “I don't want to have a super housing loan. What is your scheme? There is no answer in the bank of Maharashtra. So, I can tell the manager that this is your scheme.” Screen + clicks show **Bank of Maharashtra** and **Maha Super Housing Loan** (ASR “super housing loan” / “Maharashtra Bank of Maharashtra”).

They added: if someone already thinks the loan is under some scheme, they will not get this information; if the customer does not know, they will. “It is very important. There is a scheme under the name of Maharashtra Bank of Maharashtra.”

Later, still on the same drawer after walking How the rate is built / Discounts / Charges: “But, this is the static information. How do other banks do it? They put a page in each of the other banks. We will talk about that page. But, not as a blog. It is an information. But, it should be out there. It should be in the product.” Then: “More details. It is good. … It is not important. But, it should be in the product. It should be in the same product.”

Joined object: More details → Scheme (Bank of Maharashtra, Maha Super Housing Loan, Term loan, Regular, Floating, Any). The defect is not that the facts are wrong. The defect is that this scheme identity only lives in a drawer dump, so a customer who does not already open More, or who already believes they are on another scheme, never sees it, and the bank itself does not surface an answer.

## How the files join

- time 40060–97470 ms / 00:00:40–00:01:37
  - said (audio.srt): good information; what is your scheme; no answer in Bank of Maharashtra; tell the manager this is your scheme; people who already think they are under a scheme miss it.
  - did (events.json): clicks on `div#hlc-drawer-body > details:nth-of-type(1)` Scheme at t=24847, 40286, 45085, 47920 (value span).
  - seeing: screenshots/0004.jpg–0013.jpg — Scheme expanded with Maha Super Housing Loan table.
  - page: `http://localhost:8765/pages/explore-banks.html` / Explore banks.
  - therefore: scheme facts in this accordion are the object they want in the customer–bank conversation, and they are missing from the bank’s own answer.

- time 118240–201170 ms / 00:01:58–00:03:21
  - said: static information; other banks put a page; not a blog; should be out / in the product; More details is good but not important, still should be in the same product.
  - did: open/close How the rate is built, Discounts, Charges t=103202–123581, then idle, backdrop close t=204458.
  - seeing: screenshots/0014.jpg–0029.jpg accordion walk, then collapsed More details.
  - therefore: the whole More details dump is static content that should live in the product, not only here.

## Pinpoint

On Explore banks (`http://localhost:8765/pages/explore-banks.html`), the More details drawer for Bank of Maharashtra · Maha Super Housing Loan holds scheme facts only inside the Scheme accordion. They treated that as information a customer can take to a manager, and as missing from the bank’s own answer and from the product itself (not a blog).

## Related discussion

- Super Housing Loan as the named scheme they do not necessarily want — they still need the bank to name its scheme.
- Other banks put a page per bank; they will talk about that page later; not as a blog.
- “Just think about a better way to show the money. This is the best way. But, the draw points are good.” (ASR *draw points*; they are looking at drawer bullets, praise of the dump’s points.)
- More details is good but “not important” relative to putting the same facts in the product.
- Continues the previous recording’s look at More details versus the table (vertical versus horizontal, Bank of Maharashtra).
- The plus / underline / More-about-the-bank cue that follows is a separate problem (issue-02).

## Chronology in this recording

| Clock | Said | Did | Screen |
|---|---|---|---|
| 00:00:40–00:00:43 | No, this is definitely good information. | Idle on Scheme open | 0006–0008 Scheme table |
| 00:00:45–00:01:01 | I don't want Super Housing Loan. What is your scheme? No answer in Bank of Maharashtra. I can tell the manager this is your scheme. | Click Scheme value span t=47920 | 0008 Maha Super Housing Loan |
| 00:01:02–00:01:19 | If someone thinks the loan is under some scheme they won't get the information. If the customer doesn't know they will. Any other information? | Idle | 0009–0013 |
| 00:01:25–00:01:37 | Very important. Scheme under the name of Bank of Maharashtra. Any other information? | Idle | 0010–0013 |
| 00:01:58–00:02:43 | Better way to show the money / this is the best way; draw points good; this is static information; other banks put a page; not a blog; should be out; in the product. | Accordion clicks from 01:36 | 0013–0020 |
| 00:03:08–00:03:21 | More details. Good. Not important. Should be in the product. Same product. | Closing/reopening sections | 0020–0021 collapsed list |

## Cross-recording continuation

**Continues from `wb-rec-260815-2332`.** That recording ended on Explore banks More details for Bank of Maharashtra: table versus one page, column by column, “this is vertical / this is horizontal / there are more details.” Gap ~3s. This recording starts already in that drawer on Scheme. First line here: “No, this is definitely good information.” Write only the part discussed here.

**Does not continue into `wb-rec-260815-2355`**, which opens on the loan-amount calculation steps (“We need to arrange the viewers. Step 1. Step 2.”).

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
- `screenshots/0000.jpg` — t=199 start. More details drawer already open on Bank of Maharashtra; Scheme accordion visible. Continues 2332. Used: supports_issue.
- `screenshots/0001.jpg` — t=8200 periodic. Same More details start state. Used: supports_issue.
- `screenshots/0002.jpg` — t=16201 periodic. Same More details start state. Used: supports_issue.
- `screenshots/0003.jpg` — t=24201 periodic. Same More details; just before Scheme clicks. Used: supports_issue.
- `screenshots/0004.jpg` — t=25251 interaction after Scheme summary click. Scheme block in view. Used: supports_issue.
- `screenshots/0005.jpg` — t=34200 periodic. Scheme / Maha Super Housing Loan facts in drawer. Used: supports_issue.
- `screenshots/0006.jpg` — t=40690 interaction. Scheme summary clicked again. Used: supports_issue.
- `screenshots/0007.jpg` — t=45488 interaction. Nested Scheme span click. Used: supports_issue.
- `screenshots/0008.jpg` — t=48325 interaction. Click on scheme value span (Maha Super Housing Loan). Used: supports_issue.
- `screenshots/0009.jpg` — t=58199 periodic. Scheme facts still open (bank, scheme name, facility, purpose, rate type, borrower category). Used: supports_issue.
- `screenshots/0010.jpg` — t=66200 periodic. Same Scheme table. Used: supports_issue.
- `screenshots/0011.jpg` — t=74200 periodic. Same Scheme table. Used: supports_issue.
- `screenshots/0012.jpg` — t=82200 periodic. Same Scheme table. Used: supports_issue.
- `screenshots/0013.jpg` — t=90200 periodic. Same Scheme table during “scheme under the name of Bank of Maharashtra.” Used: supports_issue.
- `screenshots/0014.jpg` — t=97161 interaction. Scheme summary click (collapse/toggle). Used: supports_issue.
- `screenshots/0015.jpg` — t=103603 interaction. details:nth-of-type(3) How the rate is built. Used: supports_issue.
- `screenshots/0016.jpg` — t=109324 interaction. details:nth-of-type(4) Discounts. Used: supports_issue.
- `screenshots/0017.jpg` — t=112926 interaction. details:nth-of-type(5) Charges. Used: supports_issue.
- `screenshots/0018.jpg` — t=119431 interaction. Charges toggled again. Used: supports_issue.
- `screenshots/0019.jpg` — t=120807 interaction. Discounts summary. Used: supports_issue.
- `screenshots/0020.jpg` — t=123985 interaction. How the rate is built closed/toggled. Accordion walk of static dump. Used: supports_issue.
- `screenshots/0021.jpg` — t=132201 periodic. More details collapsed list during “should be in the product.” Used: supports_issue.
- `screenshots/0022.jpg` — t=142200 periodic. Collapsed More details. Used: supports_issue.
- `screenshots/0023.jpg` — t=150201 periodic. Collapsed More details. Used: supports_issue.
- `screenshots/0024.jpg` — t=160201 periodic. Collapsed More details. Used: supports_issue.
- `screenshots/0025.jpg` — t=170201 periodic. Collapsed More details. Used: supports_issue.
- `screenshots/0026.jpg` — t=180200 periodic. Collapsed More details / plus-underline talk starts soon. Used: supports_issue.
- `screenshots/0027.jpg` — t=188200 periodic. Collapsed More details during cue talk. Used: supports_issue.
- `screenshots/0028.jpg` — t=196200 periodic. Collapsed More details. Used: supports_issue.
- `screenshots/0029.jpg` — t=204201 periodic. Just before backdrop close. Used: supports_issue.
- `screenshots/0030.jpg` — t=204860 interaction. Backdrop click; table with Bank of Maharashtra, More, ₹48,00,000, 20 years. Used: supports_issue.
- `screenshots/0031.jpg` — t=214201 periodic. Compare table, BoM first row, More button visible. Used: supports_issue.
- `screenshots/0032.jpg` — t=219477 interaction. Click More about Bank of Maharashtra (button text More). Used: supports_issue.
- `screenshots/0033.jpg` — t=222690 interaction. More details reopened; Scheme click. Used: supports_issue.
- `screenshots/0034.jpg` — t=227523 interaction. Backdrop close. Used: checked_no_extra_signal.
- `screenshots/0035.jpg` — t=236201 periodic. Table; they talk plus/underline/ADD.info. Used: checked_no_extra_signal.
- `screenshots/0036.jpg` — t=244201 periodic. Table. Used: checked_no_extra_signal.
- `screenshots/0037.jpg` — t=252201 periodic. Table before first loan-amount open. Used: checked_no_extra_signal.
- `screenshots/0038.jpg` — t=257507 interaction. Loan amount how-calculated drawer opening (₹48,00,000). Used: checked_no_extra_signal.
- `screenshots/0039.jpg` — t=261694 interaction. Backdrop close after peek at loan-amount drawer. Used: checked_no_extra_signal.
- `screenshots/0040.jpg` — t=270200 periodic. Table; More vs loan-amount cue contrast. Used: checked_no_extra_signal.
- `screenshots/0041.jpg` — t=271355 interaction. More about Bank of Maharashtra again. Used: checked_no_extra_signal.
- `screenshots/0042.jpg` — t=273250 interaction. Scheme svg click in More details. Used: checked_no_extra_signal.
- `screenshots/0043.jpg` — t=282144 interaction. Backdrop close. Used: checked_no_extra_signal.
- `screenshots/0044.jpg` — t=290201 periodic. Table during “dump of all information / clickable / misleading.” Used: checked_no_extra_signal.
- `screenshots/0045.jpg` — t=300202 periodic. Table. Used: checked_no_extra_signal.
- `screenshots/0046.jpg` — t=310201 periodic. Table before second loan-amount open. Used: checked_no_extra_signal.
- `screenshots/0047.jpg` — t=310990 interaction. Loan amount drawer again. Used: checked_no_extra_signal.
- `screenshots/0048.jpg` — t=313924 interaction. Backdrop close. Used: checked_no_extra_signal.
- `screenshots/0049.jpg` — t=316894 interaction. EMI how-calculated peek (₹37,938) then closed; not a separate issue. Used: checked_no_extra_signal.
- `screenshots/0050.jpg` — t=318658 interaction. Backdrop close after EMI peek. Used: checked_no_extra_signal.
- `screenshots/0051.jpg` — t=321032 interaction. Click bank-name span on BoM row. Used: checked_no_extra_signal.
- `screenshots/0052.jpg` — t=324629 interaction. Second bank-name span click (underline/plus cue). Used: checked_no_extra_signal.
- `screenshots/0053.jpg` — t=334127 interaction. More about Bank of Maharashtra (svg path on More). Used: checked_no_extra_signal.
- `screenshots/0054.jpg` — t=338430 interaction. Backdrop close. Used: checked_no_extra_signal.
- `screenshots/0055.jpg` — t=348201 periodic. Table; “more details / more and more.” Used: checked_no_extra_signal.
- `screenshots/0056.jpg` — t=356201 periodic. Table. Used: checked_no_extra_signal.
- `screenshots/0057.jpg` — t=364202 periodic. After scroll y=634; table before loan-amount stay. Used: checked_no_extra_signal.
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

Whisper `audio.json` language field is `mr` (Marathi); speech is English/Hindi mix — do not trust the language tag.

Variants for the scheme name:
- audio.srt: “super housing loan”; “Maharashtra Bank of Maharashtra”
- audio.text / audio.json text: same
- Screen + pages/events: **Bank of Maharashtra**, **Maha Super Housing Loan**
Used srt quotes; pinpoint uses screen names (ASR likely meant: Bank of Maharashtra / Maha Super Housing Loan).

“draw points are good” — no on-screen “draw”; they are looking at drawer bullet/definition rows. Quoted raw; related praise, not a second defect.

“2.40 months” later in the session belongs to issue-03 (screen shows 240 months).

## JSON

```json
{
  "issue_id": "wb-rec-260815-2341/issue-01-scheme-facts-only-in-more-details",
  "issue_title": "Maha Super Housing Loan scheme facts live only in More details, not in the product",
  "folder": "wb-rec-260815-2341",
  "sequence_index": 25,
  "recording_id": "a22402c8-4a16-4e52-8736-ec1980e3cab1",
  "recording_started_at": "2026-08-15T18:11:25.578Z",
  "recording_ended_at": "2026-08-15T18:20:59.868Z",
  "duration_ms": 574290,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "More details drawer → Scheme accordion for Bank of Maharashtra · Maha Super Housing Loan",
  "pinpoint": "On Explore banks, Bank of Maharashtra Maha Super Housing Loan scheme facts (bank, scheme name, facility, purpose, rate type, borrower category) exist only as static content in the More details drawer; they said a customer can take this to the manager as the bank’s scheme, but Bank of Maharashtra itself has no answer, a customer who already thinks they are under a scheme will miss it, and this static information should be out in the product, not a blog.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260815-2332",
  "continued_into_folder": null,
  "related_issue_files": ["issue-02-more-cue-underline-plus-misleading-bank-label.md"],
  "source_files_used": ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/0073.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/0076.jpg", "screenshots/0077.jpg", "screenshots/0078.jpg", "screenshots/0079.jpg", "screenshots/0080.jpg", "screenshots/0081.jpg", "screenshots/0082.jpg", "screenshots/0083.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"],
  "speech_clock": ["00:00:40,060–00:03:21,170"],
  "event_t_ms": [24847, 40286, 45085, 47920, 96760, 103202, 108919, 112523, 119028, 120404, 123581, 204458],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0004.jpg","screenshots/0008.jpg","screenshots/0013.jpg","screenshots/0020.jpg","screenshots/0021.jpg"],
  "tags": ["copy","navigation","trust","missing"],
  "quotes": [
    {"clock": "00:00:40,060", "text": "No, this is definitely good information.", "artifact": "audio.srt"},
    {"clock": "00:00:51,060", "text": "What is your scheme?", "artifact": "audio.srt"},
    {"clock": "00:00:53,560", "text": "There is no answer in the bank of Maharashtra.", "artifact": "audio.srt"},
    {"clock": "00:00:56,400", "text": "So, I can tell the manager that this is your scheme.", "artifact": "audio.srt"},
    {"clock": "00:02:16,710", "text": "But, this is the static information.", "artifact": "audio.srt"},
    {"clock": "00:02:42,080", "text": "It should be in the product.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 24847, "name": "Scheme summary", "css": "div#hlc-drawer-body > details:nth-of-type(1) > summary > span"},
    {"t_ms": 47920, "name": "Scheme value", "css": "div#hlc-drawer-body > details:nth-of-type(1) > div > div > div:nth-of-type(2) > span:nth-of-type(2)"}
  ],
  "related_discussion_present": true
}
```

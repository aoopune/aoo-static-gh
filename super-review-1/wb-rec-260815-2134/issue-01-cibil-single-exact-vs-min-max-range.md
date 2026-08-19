# CIBIL score is one required exact number

On Explore banks, CIBIL is a single required box (it shows 780).
People often do not know their exact score, only a band like 680–700.
They treated that exact box as the wrong control: they want a dropdown and/or a min–max range.
Minimum should be required; maximum optional. If someone puts a hoped-for higher score, the bank table can go empty.

---
issue_id: "wb-rec-260815-2134/issue-01-cibil-single-exact-vs-min-max-range"
issue_title: "CIBIL score is one required exact number"
folder: "wb-rec-260815-2134"
sequence_index: 11
recording_id: "1965821a-27df-4039-8e62-b268e8696a5b"
recording_started_at: "2026-08-15T16:04:29.489Z"
recording_ended_at: "2026-08-15T16:10:04.857Z"
duration_ms: 335368
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs CIBIL score* textbox #hlc-cibil (placeholder 780, required)"
pinpoint: "On Explore banks, the required CIBIL score field is a single exact number (780 on screen); they said users do not know an exact CIBIL and the field must be a selectable dropdown and/or a min–max range, with minimum compulsory and maximum optional."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260815-2125"
continued_into_folder: null
related_issue_files: ["issue-02-bank-options-one-rate-for-cibil-band.md"]
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:55,550 --> 00:05:20,020"]
event_t_ms: [205, 302637]
screenshot_files: ["screenshots/0000.jpg","screenshots/0034.jpg","screenshots/0035.jpg"]
tags: ["cibil","loan-inputs","dropdown","range","copy","interaction"]
---

## Exact issue

On Explore banks (`http://localhost:8765/pages/explore-banks.html`), the Loan inputs card has a required **CIBIL score*** text box (`#hlc-cibil`, placeholder `780`). Throughout this recording the box shows **780**. They treated that single exact number as the wrong control for real users.

They asked whether to give a dropdown, then said the user can also give a **minimum and a maximum** and “you have to give ranges.” They settled on: **minimum is compulsory**; **maximum is optional** (it can be recommended). If the user only gives 750, show 750. If they also give a maximum of 800, show 750–800. They said people do **not** need an exact CIBIL: “You don't need to know your exact Sibyl score” (ASR; join: **CIBIL**). Example: remember ~700, enter **680 to 700**.

They also said if someone puts a hoped-for higher score (raise 20 points / take a loan for 6 months), **the table will be empty**; they want to **see what is possible** and **see what is minimum** at the score they actually have (680).

This is the same CIBIL-input problem that filled the end of `wb-rec-260815-2125` (Amazon-style typeahead vs range vs dropdown). It does **not** continue into `wb-rec-260815-2201` (21-minute gap; next recording is bar talk).

## How the files join (required)

- time: **57030–60030 ms** (00:00:57–00:01:00)
- said (`audio.tsv` / `audio.vtt`, preferred over garbled `audio.srt`): “Should I give him a drop down? You can select it.”
- did: idle on Explore banks; no click yet (events are idle until 302637)
- seeing: `screenshots/0000.jpg`–`0034.jpg` — Loan inputs with **CIBIL score 780**, required asterisk, info icon
- page/object: Explore banks – Shroffin / CIBIL score* `#hlc-cibil`
- therefore: they are attacking the **single CIBIL box** as needing a **dropdown**.

- time: **63290–78190 ms** (00:01:03–00:01:18)
- said: “You can also give me a minimum, a maximum. You have to give ranges. You select minimum. A maximum of 750. A maximum of 780. You don't know it.”
- did: still idle; screen still shows one CIBIL value **780**, not min/max
- therefore: the defect is **one exact score** vs the **range they say users actually know**.

- time: **92730–107950 ms** (00:01:32–00:01:47)
- said: “You have to keep the minimum compulsive. … You can also recommend a maximum. Minimum if he gives 750, you have to give 750. And if he gives a maximum of 800, you have to give a range of 750 to 800.”
- seeing: same CIBIL 780 field
- therefore: **min required, max optional**; current UI cannot express that.

- time: **164730–173190 ms** (00:02:44–00:02:53)
- said: “You don't need to know your exact Sibyl score. … Yes, I had around 700. … 680 to 700, I will give him.”
- join: “Sibyl/civil” + later focus on `#hlc-cibil` = **CIBIL**
- therefore: exact CIBIL is dishonest for users who only remember a band.

- time: **251050–292720 ms** (00:04:11–00:04:52)
- said: “Show me what is possible. Show me what is minimum. … I remember it was 700. Now it might be 680. I want to see 680. … I will increase it by 20 points … Then the table will be empty.”
- seeing: Overview table headers under the form (`screenshots/0034.jpg`)
- therefore: a **single hoped-for CIBIL** can **empty the bank table**; they want current vs possible without losing rows.

- time: **302637 ms**
- did: **focus** `#hlc-cibil` CIBIL score* (events.json)
- seeing next: `screenshots/0035.jpg` after scroll — CIBIL 780 still in the form
- therefore: the speech was about this field; they finally pointed at it.

## Pinpoint

On **Explore banks**, the **CIBIL score*** input (`#hlc-cibil`) is a **single required exact number** (780 on screen). They said users **do not know an exact CIBIL**, so the control should be a **dropdown they can select** and/or **min–max ranges**, with **minimum compulsory** and **maximum optional**. If the user only knows ~700 they would enter **680–700**. Putting a future/hoped-for score can make **the bank table empty**. They care because this is how rates are chosen and whether offers stay visible.

## Related discussion (not the issue itself)

- Opening (~00:00–00:34): they say they “cracked all the Amazon links” and, when they searched, “what is this Amazon link?” That continues the **Amazon typeahead** analogy from `wb-rec-260815-2125` (type 7 → next 5 scores; football 24 inches). Not a separate Amazon-link bug on Shroffin.
- Font weight (~00:20–00:27): “The amount you have typed, you keep the normal font weight. The type that you are going to type, you keep the extra font weight.” Related to Amazon-style typeahead for the CIBIL field (typed prefix vs suggestion), not a second page object.
- “You have to pay so much for a PM” (~00:12) — aside, not a site issue.
- Rejection psychology (~02:05–02:36): if the user thinks “my rejection is more,” they will raise the **minimum** (e.g. 760). If they give only max 760, show only 760; if they give a max, show max 760. “This is what I like.”
- Max “limit of 5” / “maximum of 25” — they discussed bounding the range so a filter can work. The **Rate column showing one number for a bank CIBIL band** is a **different object** and is `issue-02`.
- User journey: 3 months / 6 months, find someone to raise score 20 points, “show me what is possible” vs “I can’t increase it.”
- End (~05:01–05:20): they focus CIBIL, then click Other charges / Prepayment method / Balance transfer, then Overview, and say “I want 2 rates. I want 2 loans.” That last line is about **two rate/loan views** (issue-02), after checking that repayment/self-fund vs balance transfer “will not change.”

## Chronology in this recording

| Clock | Speech (preferred tsv/vtt) | Click/focus | Screenshot |
|---|---|---|---|
| 00:00:00–00:00:34 | Amazon links / formatting / font weight | idle | 0000–0004, CIBIL 780 visible |
| 00:00:55–00:01:18 | Dropdown? Min and max; ranges; 750 / 780; you don’t know it | idle | 0006–0008 |
| 00:01:19–00:02:39 | Both min and max; min compulsive; recommend max; 750 vs 750–800; rejection → higher min 760 | idle | 0009–0016 |
| 00:02:44–00:03:34 | Don’t need exact CIBIL; 680–700; can’t filter the rate; bank 775–780; one rate (see issue-02) | idle | 0017–0021 |
| 00:03:54–00:04:52 | Show possible vs minimum; 700 now 680; +20 points; table empty | idle | 0023–0030 |
| 00:05:02.637 | (no speech on the field itself) | **focus `#hlc-cibil`** | 0034 then 0035 |
| 00:05:04–00:05:20 | 2 rates / 2 loans (issue-02) | Other charges, Prepayment method, Overview | 0035–0039 |

## Cross-recording continuation

**Continues from `wb-rec-260815-2125`.** That folder ended (~00:07:08–00:08:54) on the same Explore banks page with **CIBIL 780 focused** (`screenshots/0060.jpg`–`0064.jpg`): users don’t remember an exact score; Amazon-style typeahead vs “we give a range but do not give a drop down”; “when you type F, it freezes.” Last 20 non-idle events there are almost all **clicks/focus on `#hlc-cibil`**. Gap to this recording is ~8 seconds. This folder’s first CIBIL talk (“Should I give him a drop down?”) is the unfinished 2125 topic.

**Does not continue into `wb-rec-260815-2201`.** Gap ~21 minutes. Next recording is ~11 seconds of bar talk (“Mahendra, do you want to go to the bar?”). Screenshots there show Explore banks with **different** numbers (₹12,000 / ₹6,000), not this CIBIL-range discussion.

## Evidence by file (every raw file in the folder)

- `manifest.json`: session `1965821a-27df-4039-8e62-b268e8696a5b`, start_url Explore banks, 335368 ms, 53 events, 40 screenshots, viewport 1366×768. `supports_issue`
- `audio.text`: plain dump of CIBIL min/max/dropdown talk. `supports_issue`
- `audio.txt`: timed dump, same CIBIL talk. `supports_issue`
- `audio_sentences.txt`: one-block transcript including “Sibyl score” and 680–700. `supports_issue`
- `audio.srt`: cue clock; “Sibyl score”; dropdown/min/max. Use with tsv when words disagree. `supports_issue`
- `audio.vtt`: cleaner English of the same cues (dropdown, min/max, 680–700). **Preferred with tsv.** `supports_issue`
- `audio.tsv`: millisecond clock used for joins. `supports_issue`
- `audio.lrc`: same timed lines as vtt. `supports_issue`
- `audio.json`: 110 segments, `language: "mr"` (wrong), words with low probability on “Sibyl/civil”; full text matches srt family. `supports_issue`
- `audio.webm`: binary mic; not listened. `timeline_alignment`
- `events.json`: landmark at t=205 lists CIBIL score* field and About CIBIL score; idle until **focus `#hlc-cibil` at 302637**. `supports_issue`
- `pages.json`: title Explore banks – Shroffin; form field CIBIL score* “Changes the rates banks show you.” `supports_issue`
- `tabs.json`: one tab, Explore banks for the whole session. `timeline_alignment`
- `console.json`: `[]`. `checked_no_extra_signal`
- `replay.spec.ts`: goto Explore banks; long wait then Other charges (after CIBIL focus). `timeline_alignment`
- `index.html`: player shell; inlined comment copies of manifest/events/screenshots; no extra talk. `checked_no_extra_signal`
- `viewer.js` (32334 bytes): generic Workbooks player; no session talk. `checked_no_extra_signal`
- `viewer.css` (17895 bytes): generic player styles. `checked_no_extra_signal`
- `screenshots/index.json`: 40 shots, all Explore banks; 0000–0034 periodic same viewport. `timeline_alignment`
- `screenshots/0000.jpg`–`screenshots/0034.jpg` (35 files): same view — CIBIL **780**, required, Overview tabs, Rate column header. `supports_issue`
- `screenshots/0035.jpg`: after CIBIL focus + scroll; CIBIL 780 still in form, Other charges selected. `supports_issue`
- `screenshots/0036.jpg`–`screenshots/0037.jpg`: Other charges / prepayment (related, not this object). `related_discussion`
- `screenshots/0038.jpg`–`screenshots/0039.jpg`: back to Overview. `related_discussion`

## ASR notes

`audio.json` tags language **`mr`** (Marathi); speech is English with Hindi/Indian loan terms. `audio.srt` / `audio.json` say “Sibyl score” / “civil score”; `audio.tsv` / `audio.vtt` / `audio.lrc` say the same idea more clearly. **Used tsv/vtt** because they match the on-screen **CIBIL score** field and the `#hlc-cibil` focus. Raw ASR “Sibyl/civil” is quoted; intended word is **CIBIL**. “Compulsive” in srt = **compulsory** (tsv: “keep the minimum compulsive” vs vtt “minimum compulsive”). “Maximum of two” is about giving both min and max, not two CIBIL fields as a separate issue.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2134/issue-01-cibil-single-exact-vs-min-max-range",
  "issue_title": "CIBIL score is one required exact number",
  "folder": "wb-rec-260815-2134",
  "sequence_index": 11,
  "recording_id": "1965821a-27df-4039-8e62-b268e8696a5b",
  "recording_started_at": "2026-08-15T16:04:29.489Z",
  "recording_ended_at": "2026-08-15T16:10:04.857Z",
  "duration_ms": 335368,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs CIBIL score* textbox #hlc-cibil (placeholder 780, required)",
  "pinpoint": "On Explore banks, the required CIBIL score field is a single exact number (780 on screen); they said users do not know an exact CIBIL and the field must be a selectable dropdown and/or a min–max range, with minimum compulsory and maximum optional.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260815-2125",
  "continued_into_folder": null,
  "related_issue_files": ["issue-02-bank-options-one-rate-for-cibil-band.md"],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:55,550 --> 00:05:20,020"],
  "event_t_ms": [205, 302637],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0034.jpg","screenshots/0035.jpg"],
  "tags": ["cibil","loan-inputs","dropdown","range","copy","interaction"],
  "quotes": [
    {"clock": "00:00:57,030", "text": "Should I give him a drop down?", "artifact": "audio.tsv"},
    {"clock": "00:01:06,820", "text": "a minimum, a maximum.", "artifact": "audio.tsv"},
    {"clock": "00:01:32,730", "text": "You have to keep the minimum compulsive.", "artifact": "audio.srt"},
    {"clock": "00:02:44,730", "text": "You don't need to know your exact Sibyl score.", "artifact": "audio.srt"},
    {"clock": "00:02:51,910", "text": "680 to 700, I will give him.", "artifact": "audio.tsv"},
    {"clock": "00:04:11,050", "text": "Show me what is possible.", "artifact": "audio.tsv"},
    {"clock": "00:04:50,760", "text": "Then the table will be empty.", "artifact": "audio.tsv"}
  ],
  "clicks": [{"t_ms": 302637, "name": "CIBIL score*", "css": "#hlc-cibil"}],
  "related_discussion_present": true
}
```

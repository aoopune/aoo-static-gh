# Clickable charge drawers that calculate extra money for one missed EMI

Every Other charges cell should open a drawer with a live calculation inside.
The user must see how many extra rupees one missed EMI costs for that month, including the bounce fee.
They want to click the underlined charge values — like overdue and EMI bounce — not just read a yearly percent.
This continues the missing-calculation talk from the previous recording on the same table.

---
solution_id: "wb-rec-260816-0029/solution-01-clickable-charge-drawer-emi-miss-calculation"
solution_title: "Clickable charge drawers that calculate extra money for one missed EMI"
folder: "wb-rec-260816-0029"
sequence_index: 29
recording_id: "1ce6b2c1-5803-4478-9e29-c1f823caae0f"
recording_started_at: "2026-08-15T18:59:02.434Z"
recording_ended_at: "2026-08-15T19:01:28.697Z"
duration_ms: 146263
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks (from URL / screenshots; pages.json empty)"
on_screen_object: "Other charges table — Overdue charge and EMI bounce charge cells; Notes/Collapse all drawer under the table"
for_topic: "Turning static overdue and bounce figures into rupee math for one missed EMI month on Explore banks Other charges"
pinpoint: "On Explore banks Other charges, every other charge (especially overdue and EMI bounce) should be a clickable drawer that calculates total extra money for one missed EMI in a month, including bounce — not only a static percent or flat fee."
kind: ["proposed_change", "idea", "user_convenience"]
decidedness: "decided"
basis: "User needs to know extra money before taking a loan; a yearly percent on screen does not answer one missed month; they pointed at underlines and the existing Notes drawer pattern."
analog_source: "none"
linked_issue_files: ["issue-01-other-charges-missing-emi-miss-calculation-drawer.md"]
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260816-0013"
continued_into_folder: null
related_solution_files: ["solution-02-bank-emi-miss-penalty-labels-and-intelligence.md"]
source_files_used: ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.jpg","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:07,830 --> 00:01:09,350","00:01:45,870 --> 00:02:12,850"]
event_t_ms: [7519,8630,9597,19165,29065,64999,102798,103699,109898,115165,129931]
screenshot_files: ["screenshots/0000.png","screenshots/0001.png","screenshots/0004.png","screenshots/0007.png","screenshots/0008.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png"]
tags: ["interaction","calculation","trust","intelligence","other-charges","emi-miss"]
---

## Exact solution (or idea that can also be a solution)

They said every **other charge** on this tab needs a **drawer with a calculation inside** — not just the number on the table. The user job is concrete: *how much extra money do I need for a month if my one EMI is missed?* That total must **include the EMI bounce charge**, not only the overdue percent.

They want the charge values to work like **underlines you can click** — `"I need to know the underlines. I need to click them and do the calculations."` Clicking **overdue charge** should run the math: `"If we click on the overdue charge, we need to do the calculations."` `"If one EMI is missed for a month, we need total extra money."` `"Including EMI bounce charge."`

They focused the **Collapse all** control in the **Notes** block under the table (`div#hlc-charges-note`) at session start — the drawer pattern already exists for footnotes; they want the same for charge cells. On screen, most overdue and bounce cells are plain text (e.g. CSB **24.00% p.a.** and **₹500**; IndusInd **24.00% p.a.** and **₹750**), while a few are blue links (DCB **Fixed amount by overdue range >**). They want calculation drawers on those charge values, not only legal footnotes.

They tied this to **24% overdue banks** (ASR: "24-step bank"; on screen CSB and IndusInd show 24.00% p.a.) and said one miss can mean **withdrawing double money** — the calculation drawer is how the user sees that rupee impact before choosing a bank. They called this **part of the intelligence**.

## What this is for

**Explore banks → Other charges tab** — specifically the **Overdue charge** and **EMI bounce charge** columns (and the same drawer pattern for every other charge type on this tab). The defect is in `issue-01-other-charges-missing-emi-miss-calculation-drawer.md`; this file is the direction they gave to fix it.

## Why they said it that way

A yearly percent does not tell someone what one missed month costs in rupees. They need that figure **even before taking a loan** so they are not surprised later. Showing the math inside a drawer — clicked from the charge cell — keeps the table readable while answering the real question. They repeated the need three times in the first minute, which signals high stakes for trust and pre-loan choice.

## How the files join (required)

- **time:** 7519 ms (00:00:07.519) + speech 7830–16290 ms  
- **said:** `"For every type of audio charge, I need a drawer and I need a calculation in the drawer."` (`audio.srt` cue 1; ASR **audio** → **other** from tab + later overdue/bounce naming)  
- **did:** focus **Collapse all**, `css` `div#hlc-charges-note > div > div > button` (`events.json` t=7519)  
- **seeing:** `screenshots/0000.png` / `0001.png` — Other charges table; overdue percents and bounce rupees as static text; Notes block pattern  
- **page/object:** Explore banks, Other charges cells + Notes drawers  
- **therefore:** they want charge-level calculation drawers like the Notes area, which static cells do not provide today  

- **time:** 17370–32850 ms + scroll y=1272 at 29065 ms  
- **said:** extra money for one missed EMI month; some banks are **24%** overdue (ASR 24-step)  
- **seeing:** `screenshots/0004.png` — CSB Bank **24.00% p.a.** overdue visible  
- **therefore:** the calculation must translate high overdue percents into rupees for one miss  

- **time:** 64510–69350 ms + scroll y=1941.5 at 64999 ms  
- **said:** `"And I need to know the underlines. I need to click them and do the calculations."`  
- **seeing:** `screenshots/0008.png` — DCB overdue as blue link; most other overdue/bounce cells plain  
- **therefore:** charge values should be clickable calculation entry points  

- **time:** 109430–124630 ms + scroll to Notes at y=3207 (103699 ms)  
- **said:** overdue and bounce must **fit into the calculations**; click overdue → total extra money including bounce  
- **seeing:** `screenshots/0012.png`–`0014.png` — IndusInd **24.00% p.a.** / **₹750** bounce still static  
- **therefore:** both charge types feed one missed-month total inside a drawer  

## Pinpoint

On **Explore banks → Other charges**, **Overdue charge** and **EMI bounce charge** cells (and every other charge column on this tab) should open a **drawer with a calculation** that shows **total extra rupees for one missed EMI in a month, including bounce**, when the user clicks the underlined charge value — because they said a yearly percent alone does not answer that question and this math is **part of the intelligence** they expect before picking a bank.

## Related discussion (not the solution itself)

They said even before taking a loan they would tell someone **not to take a bank** where one missed EMI means double money, even if another bank is **0.1% cheaper** on interest — that pre-loan warning and bank ranking is written in `solution-02-bank-emi-miss-penalty-labels-and-intelligence.md` and `issue-02-banks-missing-emi-miss-penalty-labels.md`. They said **"Interest rate is extraordinary"** while still on this table — meaning rate alone is not the whole story next to overdue/bounce. Previous folder **`wb-rec-260816-0013`** ended with *"Show me the calculation"* and *"You have written the annum"* while clicking overdue cells; this recording specifies **drawers, underlines, and bounce in the total**.

## Chronology in this recording

- 00:07.519: focus Collapse all in Notes block.  
- 00:07.830–00:16.290: every other charge needs drawer + calculation.  
- 00:17.370–00:32.850: extra money for one missed EMI; 24% bank on screen.  
- 00:35.610–00:54.330: pre-loan bank warning (see solution 02).  
- 00:54.730–01:03.770: repeat extra-money need; "drawer like that."  
- 01:04.510–01:09.350: click underlines and calculate.  
- 01:13.930–01:35.950: bank labels (solution 02).  
- 01:45.870–02:04.630: overdue + bounce in calculation; click overdue → total including bounce.  
- 02:09.970–02:12.850: intelligence already visible on table (solution 02).  

## Cross-recording continuation

**Continues from `wb-rec-260816-0013`** (~6 min gap). That session ended on the same Other charges table with *"Show me the calculation"*, *"You have written the annum"*, and clicks on overdue footnotes and cells (IndusInd 24.00% p.a. on screen). This folder picks up with drawer + underline + bounce specification.

**Does not continue into `wb-rec-260816-0031`** (~9 s gap). Next session opens on legal-language / friendly-lawyer talk and rate-change note marks — a different constructive direction.

## Evidence by file (every raw recorder file in the folder — no omissions)

- `_theme-cards.json` — issue-01 card summary mentions drawer/calculation/underlines; used as `timestamp_map` helper only. `checked_no_extra_signal` for this solution conclusion.
- `audio.json` — 25 Whisper segments; segments 1–12 and 19–25 support drawer/calculation/underlines/overdue+bounce; language `mr` wrong; word **audio** prob 0.82. `supports_solution`.
- `audio.lrc` — timed lines match srt for drawer and calculation talk. `supports_solution`.
- `audio.srt` — primary speech clock; cues 1–12, 19–24 are this solution. `supports_solution`.
- `audio.text` — full untimed transcript with same lines. `supports_solution`.
- `audio.tsv` — ms timestamps 7830, 17370, 64510, 109430, 114310, 119490, 122950 for timeline join. `timeline_alignment`.
- `audio.txt` — timed dump same as srt. `supports_solution`.
- `audio.vtt` — same cues as srt. `supports_solution`.
- `audio.webm` — binary mic 2350857 bytes; not played; speech from text artifacts. `checked_no_extra_signal`.
- `audio_sentences.txt` — one-paragraph transcript. `supports_solution`.
- `console.json` — `[]`; no runtime errors. `checked_no_extra_signal`.
- `events.json` — focus Collapse all 7519 ms; scrolls through Other charges; no click on overdue/bounce cell. `timeline_alignment` / `supports_solution`.
- `index.html` — replay shell 21267 bytes; inlined manifest id and 58 events; no session talk. `player_shell_with_inlined_json_fully_read`.
- `manifest.json` — id, explore-banks URL, 146263 ms, 17 screenshots. `timeline_alignment`.
- `pages.json` — `[]`; object names from screenshots + events. `checked_no_extra_signal`.
- `replay.spec.ts` — goto explore-banks then idle only; talk during scroll. `timeline_alignment`.
- `screenshots/0000.png` — Other charges start; CSB 24% overdue; static cells. `supports_solution`.
- `screenshots/0001.png` — after Collapse all focus; overdue/bounce columns. `supports_solution`.
- `screenshots/0002.png` — Axis–Central Bank band. `timeline_alignment`.
- `screenshots/0003.jpg` — periodic jpeg; same table band. `timeline_alignment`.
- `screenshots/0004.png` — CSB 24.00% p.a.; DCB blue overdue link. `supports_solution`.
- `screenshots/0005.png` — same CSB/Canara band during 24% speech. `supports_solution`.
- `screenshots/0006.png` — same band. `timeline_alignment`.
- `screenshots/0007.png` — DCB link; IDFC complex overdue text not a calculator. `supports_solution`.
- `screenshots/0008.png` — IndusInd 24%/₹750; J&K 0.20%/₹200 during underline talk. `supports_solution`.
- `screenshots/0009.png` — same J&K/IndusInd pair. `related_discussion`.
- `screenshots/0010.png` — J&K and IndusInd rows. `related_discussion`.
- `screenshots/0011.png` — IndusInd/J&K in view. `related_discussion`.
- `screenshots/0012.png` — table bottom + Notes/Collapse all during overdue+bounce calc talk. `supports_solution`.
- `screenshots/0013.png` — J&K row during scroll. `timeline_alignment`.
- `screenshots/0014.png` — IndusInd highlighted 24%/₹750 static. `supports_solution`.
- `screenshots/0015.jpg` — scrolled to table top; "intelligence visible" beat. `related_discussion`.
- `screenshots/0016.jpg` — same top band. `related_discussion`.
- `screenshots/index.json` — 17 shots with t/reason/url for join. `timeline_alignment`.
- `tabs.json` — single tab explore-banks.html whole session. `timeline_alignment`.
- `viewer.css` — 17895 bytes generic replay chrome; no session talk. `player_chrome_fully_read_confirmed`.
- `viewer.js` — 32334 bytes generic replay player; no session talk. `player_chrome_fully_read_confirmed`.

### Helper issue files

- `issue-01-other-charges-missing-emi-miss-calculation-drawer.md` — `cross_link` + `timestamp_map` for defect this solution answers.

## ASR notes

1. **audio charge** (all artifacts) vs **Other charges** tab on screen → used **other charge**.  
2. **24-step bank** (cue 4) vs **24.00% p.a.** on CSB/IndusInd → used **24% bank**.  
3. **withdraw double money** — consistent across artifacts; kept as spoken.  
4. json `language: mr` is wrong for this English/Hindi mix.  
5. **underlines** — they mean clickable charge values; some cells are blue links, most are not yet.

## JSON

```json
{
  "solution_id": "wb-rec-260816-0029/solution-01-clickable-charge-drawer-emi-miss-calculation",
  "solution_title": "Clickable charge drawers that calculate extra money for one missed EMI",
  "folder": "wb-rec-260816-0029",
  "sequence_index": 29,
  "recording_id": "1ce6b2c1-5803-4478-9e29-c1f823caae0f",
  "recording_started_at": "2026-08-15T18:59:02.434Z",
  "recording_ended_at": "2026-08-15T19:01:28.697Z",
  "duration_ms": 146263,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks (from URL / screenshots; pages.json empty)",
  "on_screen_object": "Other charges table — Overdue charge and EMI bounce charge cells; Notes/Collapse all drawer under the table",
  "for_topic": "Turning static overdue and bounce figures into rupee math for one missed EMI month on Explore banks Other charges",
  "pinpoint": "On Explore banks Other charges, every other charge (especially overdue and EMI bounce) should be a clickable drawer that calculates total extra money for one missed EMI in a month, including bounce — not only a static percent or flat fee.",
  "kind": ["proposed_change", "idea", "user_convenience"],
  "decidedness": "decided",
  "basis": "User needs to know extra money before taking a loan; a yearly percent on screen does not answer one missed month; they pointed at underlines and the existing Notes drawer pattern.",
  "analog_source": "none",
  "linked_issue_files": ["issue-01-other-charges-missing-emi-miss-calculation-drawer.md"],
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260816-0013",
  "continued_into_folder": null,
  "related_solution_files": ["solution-02-bank-emi-miss-penalty-labels-and-intelligence.md"],
  "source_files_used": ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.jpg","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:07,830 --> 00:01:09,350","00:01:45,870 --> 00:02:12,850"],
  "event_t_ms": [7519,8630,9597,19165,29065,64999,102798,103699,109898,115165,129931],
  "screenshot_files": ["screenshots/0000.png","screenshots/0001.png","screenshots/0004.png","screenshots/0007.png","screenshots/0008.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png"],
  "tags": ["interaction","calculation","trust","intelligence","other-charges","emi-miss"],
  "quotes": [
    {"clock": "00:00:07,830", "text": "For every type of audio charge, I need a drawer and I need a calculation in the drawer.", "artifact": "audio.srt"},
    {"clock": "00:00:17,370", "text": "Because I need to know how much extra money I need for a month if my one EMI is missed.", "artifact": "audio.srt"},
    {"clock": "00:01:04,510", "text": "And I need to know the underlines. I need to click them and do the calculations.", "artifact": "audio.srt"},
    {"clock": "00:01:54,310", "text": "If we click on the overdue charge, we need to do the calculations.", "artifact": "audio.srt"},
    {"clock": "00:01:59,490", "text": "If one EMI is missed for a month, we need total extra money.", "artifact": "audio.srt"},
    {"clock": "00:02:02,950", "text": "Including EMI bounce charge.", "artifact": "audio.srt"}
  ],
  "clicks": [{"t_ms": 7519, "name": "Collapse all", "css": "div#hlc-charges-note > div > div > button"}],
  "related_discussion_present": true
}
```

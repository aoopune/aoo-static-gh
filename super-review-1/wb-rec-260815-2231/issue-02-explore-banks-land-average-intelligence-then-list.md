# Explore banks should land with average values already filled so the recommendation and bank list show at once

After the CIBIL question, they say the first time this page lands the user should already see average values filled in.
Then "intelligence" (a recommendation) should appear, and then the bank list — automatically, from the first shot, not only after the visitor fills the form.
They click CIBIL, then monthly income, and say they will try to game that intelligence for real.
ASR "HIF values" is the form fields (average values); they never name a product called HIF.

---
folder: wb-rec-260815-2231
sequence_index: 17
recording_id: 7b334a7d-43b4-4fd5-a754-99f766cf3f24
page: Explore banks (`http://localhost:8765/pages/explore-banks.html`)
object: Loan inputs card (monthly income, CIBIL, and the other averages) plus the missing first-land recommendation before the bank list
severity_as_spoken: unstated
confidence: high
asr_conflict: true
continuation: continues_into_next
---

## Exact issue
On Explore banks they want this first-load story: the page lands with average values already in the form, the recommendation ("intelligence") shows by itself, then the bank list. They say the visitor "needs to know the automatic."

They describe two looks: how it looks when it lands, versus how it looks after filling the form, when intelligence comes and then the list comes. Then an "intelligent person" would say they will recommend based on income: if you do this, it will be this much.

They later say a real customer may not need that intelligence if the input is missing, and that missing input has "fallacies." That is the same object: this form's intelligence depends on filled inputs.

## How the files join
At 04:35.550 they say fill the HIF values, all the average values, and fill average intelligence in the first shot, from the beginning (`audio.srt`). They have just been clicking `#hlc-cibil`. At 04:44.430: "So this page has landed, right? He needs to know the automatic."

At 05:02.010–05:18.030 they walk the two states: land looks like this; after filling the form it looks like this; intelligence then list; recommend from income. At 05:20.727 they click `#hlc-monthly-income` (`events.json`) while saying "Does it look like this? Try it. Try it for real." Screenshot `0039.jpg` / `0041.jpg` show monthly income ₹1,00,000 focused, CIBIL 780, property ₹6,000, list still showing Canara Bank ₹5,400 / EMI ₹48.

They did not call out the ₹6,000 property figure. Do not treat that as this issue.

## Pinpoint
Explore banks → loan-inputs card on first land → average values are not treated as already driving an automatic recommendation; they want averages filled from the first shot so intelligence appears, then the bank list.

## Related discussion (not the issue itself)
They will try to game the intelligence ("that is the only way you can extract truth out of me"). They did not know this intelligence before.

Then: if input is missing, the real customer may not need it; there are fallacies. First two customers making the product, YC single-customer trap, one bubble/cohort, bell curve of ₹40,000 vs ₹5 lakh income, need equal samples from every band. That sampling talk continues in `wb-rec-260815-2240`.

Cursor / Discord / gift-card feedback, polish vs basement honesty, and "100 people on the home-loan channel" sit earlier in this recording and belong with issue 01's related talk, not as a separate site defect.

## Chronology in this recording
| Clock | Said | Did | Screen |
|---|---|---|---|
| 04:35.550 | "You have to fill in the HIF values." | CIBIL still the last click | `0033.jpg` CIBIL 780 |
| 04:38.210 | "All the average values." | | |
| 04:39.870 | "And you have to fill in the average intelligence in the first shot. From the beginning." | | |
| 04:44.430 | "So this page has landed, right? He needs to know the automatic." | | `0034.jpg`–`0036.jpg` |
| 05:02.010 | "So when it lands, it looks like this. After filling this form… It looks like this. The intelligence comes and then the list comes." | scroll to top 05:05.201 | `0037.jpg` title + form |
| 05:13.150 | "That they will recommend that your income… If you do this, it will be this much." | | |
| 05:19.690 | "Does it look like this? Try it. Try it for real." | click `#hlc-monthly-income` 05:20.727 | `0039.jpg` / `0041.jpg` income focused |
| 05:35.030 | "I will try to game this thing." | idle on income field | `0040.jpg`–`0043.jpg` |
| 05:44.970 | "I didn't know this intelligence before." | | |
| 06:17.130 | "But the real customer doesn't need it. That is if the input is missing." | small scrolls | `0044.jpg`+ form+list |
| 06:26.690 | "But there are a lot of fallacies in it." | | |
| 06:38+ | first-customer / sampling / bell curve | idle to end | same form+list |

## Cross-recording continuation
**From `wb-rec-260815-2222`:** same Explore banks page; that file's last talk is feedback/surveys, not this first-land intelligence.

**Into `wb-rec-260815-2240`:** next file opens "All standard deviations are called sampling" — the bell-curve talk from 08:21 here. Then they actually click See options, Age, Adjust eligibility, and Existing EMIs: they start the "try it for real / game it" pass they promised here.

## Evidence by file
- `manifest.json`: Explore banks, 528390 ms.
- All `audio.*` text artifacts: HIF/average values, first shot, automatic, intelligence then list, game it, missing input, sampling.
- `audio.json`: "HIF" p≈0.40; "intelligence" p≈0.70; closing text matches srt; language `mr` is wrong.
- `audio.webm`: binary; not listened.
- `events.json`: CIBIL clicks then monthly-income click 320727; later tiny scrolls only.
- `pages.json`: `[]` here; field names from prev/next landmarks (Monthly income, CIBIL, FOIR select, See options).
- `tabs.json`: one Explore banks tab.
- `console.json`: `[]`.
- `replay.spec.ts`: `#hlc-cibil` then `#hlc-monthly-income`.
- `index.html` / `viewer.js` / `viewer.css`: player chrome only.
- `screenshots/0031.jpg`–`0043.jpg`: CIBIL then income focus; list already visible with averages on screen.
- `screenshots/0044.jpg`–`0062.jpg`: same filled form + Canara row while they talk missing input and sampling.
- `screenshots/0000.jpg`–`0030.jpg`: same page during earlier strategy talk (related, not this pinpoint).

## ASR notes
- "HIF values" (`audio.srt` / `audio.json` p≈0.40) vs "HIF values" in `.txt`. Next line is "All the average values." Used as **these / the form field values (averages)**. Not a named HIF product.
- "intelligence" is consistent: the recommendation layer before the list.
- "automatic" = the first-land should already show that recommendation.
- "Sibyl" in the previous minute is CIBIL (issue 01), not this intelligence.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2231/issue-02-explore-banks-land-average-intelligence-then-list",
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "on_screen_object": "Loan inputs card on first land; recommendation ('intelligence') then bank list",
  "pinpoint": "Explore banks should land with average values already filled so intelligence appears automatically, then the bank list, not only after the visitor fills the form.",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_into_next",
  "quotes": [
    {"clock": "00:04:35.550", "text": "You have to fill in the HIF values.", "artifact": "audio.srt"},
    {"clock": "00:04:39.870", "text": "And you have to fill in the average intelligence in the first shot.", "artifact": "audio.srt"},
    {"clock": "00:05:07.170", "text": "The intelligence comes and then the list comes.", "artifact": "audio.srt"},
    {"clock": "00:06:19.130", "text": "That is if the input is missing.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 257459, "name": "CIBIL score", "css": "#hlc-cibil"},
    {"t_ms": 320727, "name": "Monthly income", "css": "#hlc-monthly-income"}
  ]
}
```

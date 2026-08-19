# Extra eligibility sits behind Adjust eligibility instead of as columns

Extra questions (existing EMIs, cards, income share, tenure, co-applicant) hide under Adjust eligibility, not as columns on the bank list.
The control looks like it cannot be opened, and “eligibility” is not simple English.
Those extras look optional but still change the loan; if they stay collapsed they must still count, or a later surprise breaks trust.
They should stay visible and already filled. Co-applicant Yes also teaches people they can add someone to inflate the loan.

---
theme_id: "theme-13-extra-eligibility-hidden-behind-adjust"
theme_title: "Extra eligibility sits behind Adjust eligibility instead of as columns"
pinpoint: "On Explore banks, extra eligibility questions sit behind Adjust eligibility instead of as visible columns, look optional (or unopenable), still change the loan, and Co-applicant Yes coaches adding someone to inflate the amount."
thread_count: 4
issue_file_count: 7
issue_files:
  - "wb-rec-260815-2240/issue-03-adjust-eligibility-not-simple-english.md"
  - "wb-rec-260815-2240/issue-04-adjust-eligibility-looks-unopenable-but-is-dropdown.md"
  - "wb-rec-260815-2249/issue-01-adjust-eligibility-hidden-not-shown-as-columns.md"
  - "wb-rec-260815-2302/issue-01-collapsed-eligibility-fields-must-still-affect.md"
  - "wb-rec-260815-2302/issue-02-coapplicant-yes-gives-ideas-to-inflate-loan.md"
  - "wb-rec-260815-2304/issue-01-extra-eligibility-should-stay-visible-prefilled.md"
  - "wb-rec-260815-2313/issue-02-adjust-eligibility-fields-should-not-disappear.md"
folders: ["wb-rec-260815-2240", "wb-rec-260815-2249", "wb-rec-260815-2302", "wb-rec-260815-2304", "wb-rec-260815-2313"]
pages: ["http://localhost:8765/pages/explore-banks.html"]
severity_as_spoken_range: ["unstated", "medium", "high"]
confidence_range: ["high"]
tags: ["eligibility", "layout", "trust", "form", "co-applicant"]
---

## Exact theme

On Explore banks, extra loan questions live behind **Adjust eligibility** instead of as columns you can see.

They said “eligibility” is not a good Super-English word. Quote: “And just eligibility is not a good word.” They wanted extra columns / extra attributes / extra parameters in very simple English.

The control looks like it will not open. Quote: “Then this button is misleading.” “I thought this button is not openable. But there is a drop-down there.”

Then: show the extras as columns, not “adjusting.” Quote: “What we need to do is, instead of adjusting the availability, we need to show the columns here.” The bank table only has about four or five columns; opening Adjust eligibility makes the form huge. The extras look optional, but “If they don't fill, they can't go.” “Then why is there no mandating?” Tenure is required but lives in that optional-looking block. Existing EMI and cards are not for everyone; income share / upper limit are; co-applicant is not.

They collapse the extras so the form stays short, but collapsed values must still change banks. Quote: “So we have to drop down so that the form doesn't get too big.” “Correct. But actually these things have to be affected.” “That means if I get a surprise later, I will lose my trust from the website.”

They will sit on this form and keep extras already filled as more columns, with a short note of what changes (existing EMIs can change the loan by ₹10 lakh), and never stamp “mandatory,” because later the answers change. Quote: “No, because I don't want to get a surprise later.” “we should never write the mandatory fields.” Extra fields should not vanish (including after Co-applicant No). Quote: “That it should not disappear like this.” “And there is no problem if it is pre-filled.”

Co-applicant Yes reveals extra boxes and teaches that adding someone increases the loan. Quote: “Yesterday, I didn't want to give ideas to any applicant.” “Because it increases the loan amount.” They tried Yes, then switched back to No.

## Threads (members)

### Thread: “Adjust eligibility” is not simple English and looks unopenable

- issue files: `wb-rec-260815-2240/issue-03-adjust-eligibility-not-simple-english.md`, `wb-rec-260815-2240/issue-04-adjust-eligibility-looks-unopenable-but-is-dropdown.md`
- continuation: 2240-03 continues into 2249; 2240-04 standalone
- pinpoint: the extra-fields control is named in jargon and looks like it cannot be opened, but it is a dropdown

### Thread: Extras hidden instead of columns; must still count; stay visible and prefilled

- issue files: `wb-rec-260815-2249/issue-01-adjust-eligibility-hidden-not-shown-as-columns.md`, `wb-rec-260815-2302/issue-01-collapsed-eligibility-fields-must-still-affect.md`, `wb-rec-260815-2304/issue-01-extra-eligibility-should-stay-visible-prefilled.md`, `wb-rec-260815-2313/issue-02-adjust-eligibility-fields-should-not-disappear.md`
- continuation: 2249 both from 2240 and into 2302; 2302-01 both; 2304-01 both; 2313-02 standalone (same vanish defect)
- pinpoint: extras are collapsed instead of columns, look optional but change the loan, must still affect results when collapsed, and should stay visible and pre-filled rather than disappear

### Thread: Co-applicant Yes coaches inflating the loan

- issue files: `wb-rec-260815-2302/issue-02-coapplicant-yes-gives-ideas-to-inflate-loan.md`
- continuation: both from 2249 and into 2304
- pinpoint: turning Co-applicant to Yes teaches that adding someone increases the loan

## How the files join (required)

Shared object class: **extra eligibility fields behind Adjust eligibility** (and the Co-applicant extra path). Shared defect class: **hiding those fields so they look optional or gone, while they still change the loan — or coaching a bigger loan when they appear.**

Naming and unopenable affordance are the same control. Hidden-vs-columns / still-must-count / stay-visible is one continued argument. Co-applicant Yes is a distinct coaching defect on the same extras block.

See options label/placement is a different object. Form importance marks are a different defect.

## Related discussion (not the theme itself)

- Super-English / fine-tune Super-English rule.
- Demo vs dropdown — they decided it is a dropdown.
- Showing extras as columns is “a big challenge”; the form got “so big.”
- Customer decides loan amount and EMI, not a bank name first.
- “The formula is getting bigger.” “There are so many questions.”
- Credit-card rejection analogy (salary and score still rejected; issuers looking at education).
- FOIR / DTI as why EMI is not fixed.
- Open extras as “a perfect table”; skip filling at the start if usefulness is unknown.
- If Co-applicant is Yes, take details and do not overthink.
- “This guy is playing a song.”
- Who pays (ASR “rent”) while looking at co-applicant income/EMIs.

## Chronology across recordings

- 2240-03 — eligibility not simple English; continues into 2249.
- 2240-04 — looks unopenable; is a dropdown.
- 2249-01 — show columns; optional vs mandatory; field walk.
- 2302-01 — collapsed fields must still affect; surprise breaks trust.
- 2302-02 — Co-applicant Yes coaches a bigger loan.
- 2304-01 — stay visible, prefilled, consequence tooltip, never write mandatory.
- 2313-02 — extra fields should not disappear.

## Evidence by issue file (every file in this theme — no omissions)

- `wb-rec-260815-2240/issue-03-adjust-eligibility-not-simple-english.md` — pinpoint; into 2249; quotes. `supports_theme` `continuation_link`
- `wb-rec-260815-2240/issue-04-adjust-eligibility-looks-unopenable-but-is-dropdown.md` — pinpoint; standalone; quotes. `supports_theme`
- `wb-rec-260815-2249/issue-01-adjust-eligibility-hidden-not-shown-as-columns.md` — pinpoint; both; quotes. `supports_theme` `continuation_link`
- `wb-rec-260815-2302/issue-01-collapsed-eligibility-fields-must-still-affect.md` — pinpoint; both; quotes. `supports_theme` `continuation_link`
- `wb-rec-260815-2302/issue-02-coapplicant-yes-gives-ideas-to-inflate-loan.md` — pinpoint; both; quotes. `supports_theme` `continuation_link`
- `wb-rec-260815-2304/issue-01-extra-eligibility-should-stay-visible-prefilled.md` — pinpoint; both; quotes. `supports_theme` `continuation_link`
- `wb-rec-260815-2313/issue-02-adjust-eligibility-fields-should-not-disappear.md` — pinpoint; standalone; quotes. `supports_theme`

## JSON

```json
{
  "theme_id": "theme-13-extra-eligibility-hidden-behind-adjust",
  "theme_title": "Extra eligibility sits behind Adjust eligibility instead of as columns",
  "pinpoint": "On Explore banks, extra eligibility questions sit behind Adjust eligibility instead of as visible columns, look optional (or unopenable), still change the loan, and Co-applicant Yes coaches adding someone to inflate the amount.",
  "thread_count": 4,
  "issue_file_count": 7,
  "issue_files": [
    "wb-rec-260815-2240/issue-03-adjust-eligibility-not-simple-english.md",
    "wb-rec-260815-2240/issue-04-adjust-eligibility-looks-unopenable-but-is-dropdown.md",
    "wb-rec-260815-2249/issue-01-adjust-eligibility-hidden-not-shown-as-columns.md",
    "wb-rec-260815-2302/issue-01-collapsed-eligibility-fields-must-still-affect.md",
    "wb-rec-260815-2302/issue-02-coapplicant-yes-gives-ideas-to-inflate-loan.md",
    "wb-rec-260815-2304/issue-01-extra-eligibility-should-stay-visible-prefilled.md",
    "wb-rec-260815-2313/issue-02-adjust-eligibility-fields-should-not-disappear.md"
  ],
  "folders": ["wb-rec-260815-2240", "wb-rec-260815-2249", "wb-rec-260815-2302", "wb-rec-260815-2304", "wb-rec-260815-2313"],
  "pages": ["http://localhost:8765/pages/explore-banks.html"],
  "threads": [
    {"title": "“Adjust eligibility” is not simple English", "issue_files": ["wb-rec-260815-2240/issue-03-adjust-eligibility-not-simple-english.md"], "continuation": "continues_into_2249"},
    {"title": "Adjust eligibility looks unopenable but is a dropdown", "issue_files": ["wb-rec-260815-2240/issue-04-adjust-eligibility-looks-unopenable-but-is-dropdown.md"], "continuation": "standalone"},
    {"title": "Extras hidden instead of columns; must still count; stay visible and prefilled", "issue_files": ["wb-rec-260815-2249/issue-01-adjust-eligibility-hidden-not-shown-as-columns.md", "wb-rec-260815-2302/issue-01-collapsed-eligibility-fields-must-still-affect.md", "wb-rec-260815-2304/issue-01-extra-eligibility-should-stay-visible-prefilled.md", "wb-rec-260815-2313/issue-02-adjust-eligibility-fields-should-not-disappear.md"], "continuation": "2249→2302-01→2304-01; 2313-02 same vanish defect"},
    {"title": "Co-applicant Yes coaches inflating the loan", "issue_files": ["wb-rec-260815-2302/issue-02-coapplicant-yes-gives-ideas-to-inflate-loan.md"], "continuation": "from 2249 into 2304"}
  ],
  "related_discussion_present": true
}
```

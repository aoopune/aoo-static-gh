# Loan-input helpers start with “Sets” and the property name is too complex

Under Monthly income the helper starts with “Sets” and does not say why income is asked.
Under Property agreement value the helper also starts with “Sets” and uses “ceiling,” a word they said India does not know.
The field name “Property agreement value” stacks adjectives; a user will not know which value to type.

---
theme_id: "theme-10-loan-input-helpers-too-complex"
theme_title: "Loan-input helpers start with “Sets” and the property name is too complex"
pinpoint: "On Explore banks Loan inputs, the Monthly income and Property helpers start with “Sets” (and “ceiling,” which they said India does not know) instead of saying why the number is asked, and the label “Property agreement value” is too complex for the box."
thread_count: 3
issue_file_count: 3
issue_files:
  - "wb-rec-260815-2116/issue-01-monthly-income-helper-sets-does-not-explain-why.md"
  - "wb-rec-260815-2116/issue-02-property-helper-sets-ceiling-unknown-in-india.md"
  - "wb-rec-260815-2116/issue-03-property-agreement-value-label-too-complex.md"
folders: ["wb-rec-260815-2116"]
pages: ["http://localhost:8765/pages/explore-banks.html"]
severity_as_spoken_range: ["medium"]
confidence_range: ["high"]
tags: ["copy", "trust", "eligibility", "form-label"]
---

## Exact theme

The loan boxes on Explore banks explain themselves badly.

Monthly income helper: “Sets how much loan banks can offer you. Use take-home, not CTC.” Quote: “This sentence can be better. This is your main eligibility criteria.” “The problem with this sentence is that the sets don't work.” “Why do you want my monthly income?” Take-home vs CTC was fine.

Property helper: “Sets the ceiling on the loan against this house. Use the sale agreement price.” Quote: “No one in India knows about ceilings.” “This sentence starts with sets. And the word ceiling doesn't work in India.”

The label **Property agreement value** is too complex. Quote: “But the property agreement value is complex.” “Like we overload adjectives.” “If you just put the agreement value, which agreement?” They leaned toward a shorter “as per agreement” form.

## Threads (members)

### Thread: Monthly income helper “Sets” does not say why

- issue files: `wb-rec-260815-2116/issue-01-monthly-income-helper-sets-does-not-explain-why.md`
- continuation: standalone
- pinpoint: “Sets how much loan banks can offer you…” is a bad sentence; “Sets” does not work; it does not tell why monthly income is asked

### Thread: Property helper “Sets” and “ceiling”

- issue files: `wb-rec-260815-2116/issue-02-property-helper-sets-ceiling-unknown-in-india.md`
- continuation: standalone
- pinpoint: Property helper starts with “Sets” and uses “ceiling,” which they said nobody in India knows

### Thread: Label “Property agreement value” is too complex

- issue files: `wb-rec-260815-2116/issue-03-property-agreement-value-label-too-complex.md`
- continuation: standalone
- pinpoint: the field name overloads adjectives; a user will not know which value (agreement vs registry vs market) to enter

## How the files join (required)

Shared object class: **Explore banks Loan inputs helpers and the property field name**. Shared defect class: **wording that does not tell a borrower, in India-plain English, what to type or why**.

Three threads because they attacked the income helper, the property helper sentence, and the property label as distinct objects (they said the helper is not the field name). Same “Sets” pattern ties the first two.

## Related discussion (not the theme itself)

- Keep take-home, not CTC.
- After income they moved to the property helper: same “Sets” pattern, different object.
- “Our requirements have been captured in this. So we have to change the loop.”
- Recent purchase: use registrar/sale agreement; otherwise banks value below market, so enter a conservative figure.
- 8-crore example: felt value vs agreement; “the amount on the agreement is white.”
- (i) as a possible place to explain official vs market, not a substitute for a clear label.
- Character count: “as per agreement” is a few extra letters; dropping “agreement” would read as market value.
- Last Age (i) clicks are move-on, not an Age issue.

## Chronology in this recording

- issue-01 — Monthly income helper; Sets don’t work; why monthly income.
- issue-02 — Property helper; Sets + ceiling unknown in India.
- issue-03 — Property agreement value label too complex; shorter “as per agreement.”

## Evidence by issue file (every file in this theme — no omissions)

- `wb-rec-260815-2116/issue-01-monthly-income-helper-sets-does-not-explain-why.md` — pinpoint; standalone; quotes. `supports_theme`
- `wb-rec-260815-2116/issue-02-property-helper-sets-ceiling-unknown-in-india.md` — pinpoint; standalone; quotes. `supports_theme`
- `wb-rec-260815-2116/issue-03-property-agreement-value-label-too-complex.md` — pinpoint; standalone; quotes. `supports_theme` `related_discussion`

## JSON

```json
{
  "theme_id": "theme-10-loan-input-helpers-too-complex",
  "theme_title": "Loan-input helpers start with “Sets” and the property name is too complex",
  "pinpoint": "On Explore banks Loan inputs, the Monthly income and Property helpers start with “Sets” (and “ceiling,” which they said India does not know) instead of saying why the number is asked, and the label “Property agreement value” is too complex for the box.",
  "thread_count": 3,
  "issue_file_count": 3,
  "issue_files": [
    "wb-rec-260815-2116/issue-01-monthly-income-helper-sets-does-not-explain-why.md",
    "wb-rec-260815-2116/issue-02-property-helper-sets-ceiling-unknown-in-india.md",
    "wb-rec-260815-2116/issue-03-property-agreement-value-label-too-complex.md"
  ],
  "folders": ["wb-rec-260815-2116"],
  "pages": ["http://localhost:8765/pages/explore-banks.html"],
  "threads": [
    {"title": "Monthly income helper “Sets” does not say why", "issue_files": ["wb-rec-260815-2116/issue-01-monthly-income-helper-sets-does-not-explain-why.md"], "continuation": "standalone"},
    {"title": "Property helper “Sets” and “ceiling”", "issue_files": ["wb-rec-260815-2116/issue-02-property-helper-sets-ceiling-unknown-in-india.md"], "continuation": "standalone"},
    {"title": "Label “Property agreement value” is too complex", "issue_files": ["wb-rec-260815-2116/issue-03-property-agreement-value-label-too-complex.md"], "continuation": "standalone"}
  ],
  "related_discussion_present": true
}
```

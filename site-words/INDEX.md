# Site words — index

Edit wording here. Then **save → commit → push / deploy**. Deploy runs `npm run build:site`, which applies these files to the live HTML. You do not need to run npm for ordinary wording changes.

**While editing locally:** run `npm run words` once, open http://localhost:8765/, then save this file — the page updates by itself.

Each page file looks like this:

```markdown
# Home

## Hero button {#hero.cta}
Explore banks
```

Change the plain text under a `##` heading. Leave the `{#…}` code alone. Use **Jump to** at the top of each file to jump to a line.

**Only edit the main `.words.md` files linked below.** Ignore any `*.assistive.words.md` files — those are spoken names for accessibility, not marketing copy.

## Shared

- [Nav, footer, guide localnav, shared strips](common/chrome.words.md)

## Pages

### Home

- [Home](pages/home/home.words.md) → `/`

### Explore (journey)

- [1. Explore banks](pages/explore/explore.words.md) → `/pages/explore-banks.html`
- [1b. Explore tool UI (JS)](pages/explore/explore.runtime.words.md) — dropdowns, table headers, empty states
- [2. Review application](pages/explore/review.words.md) → `/pages/apply.html`
- [3. Apply / contact details](pages/explore/apply.words.md) → `/pages/apply-contact.html`
- [4. Application submitted (modal)](pages/explore/apply-success.runtime.words.md) — success popup copy

### Guide

- [Overview](pages/guide/overview.words.md) → `/pages/guide.html`
- [Documents](pages/guide/documents.words.md) → `/pages/guide-documents.html`
- [Tax benefits](pages/guide/tax-benefits.words.md) → `/pages/tax-benefits.html`
- [Concessions](pages/guide/concessions.words.md) → `/pages/concessions.html`
- [Insurance (parent)](pages/guide/home-loan-insurance.words.md) → `/pages/home-loan-insurance.html`
- [Property cover (child)](pages/guide/property-home-insurance.words.md) → `/pages/property-home-insurance.html`
- [Loan cover (child)](pages/guide/credit-life-insurance.words.md) → `/pages/credit-life-insurance.html`
- [If something goes wrong](pages/guide/complaints.words.md) → `/pages/home-loan-complaints.html`

### About us

- [About](pages/about/about.words.md) → `/pages/about.html`

### Tools

#### Calculators

- [Calculators hub](pages/tools/calculators/hub.words.md) → `/pages/calculators.html`
- [EMI](pages/tools/calculators/emi.words.md) → `/pages/calculators/emi.html`
- [Eligibility](pages/tools/calculators/how-much-loan.words.md) → `/pages/calculators/how-much-loan.html`
- [Loan from EMI](pages/tools/calculators/loan-amount.words.md) → `/pages/calculators/loan-amount.html`
- [Prepayment](pages/tools/calculators/prepayment.words.md) → `/pages/calculators/prepayment.html`
- [Balance transfer](pages/tools/calculators/balance-transfer.words.md) → `/pages/calculators/balance-transfer.html`
- [Tenure](pages/tools/calculators/tenure.words.md) → `/pages/calculators/tenure.html`
- [Tax claims](pages/tools/calculators/tax-savings.words.md) → `/pages/calculators/tax-savings.html`

#### Project finder

- [Project Bank Finder](pages/tools/project-finder/project-finder.words.md) → `/pages/project-approvals.html`
- [Project Finder tool UI (JS)](pages/tools/project-finder/project-finder.runtime.words.md) — find / empty / error messages

### Company / legal / map

- [Privacy Policy](pages/company/privacy-policy.words.md) → `/privacy-policy.html`
- [Terms of Use](pages/company/terms-of-use.words.md) → `/terms-of-use.html`
- [Site Map](pages/company/sitemap.words.md) → `/sitemap.html`

## Rules

See [_schema.md](_schema.md). Edit only the words under headings. Leave `{#ids}` alone.

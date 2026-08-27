# Guide card proximity spacing — decision ledger

**Purpose:** Single source of truth for spacing *relationships* inside Guide cards (Overview + child pages). Implementation must read this file — not chat history.

**Status:** Collecting decisions. Card 1 CSS preview was applied then **undone** (2026-08-28). Do not re-implement until user asks after decisions.

**Scope:** Spacing **inside** `.guide-chapter-card` only (panels, lists, glances, tips, in-card headings, flip-back bodies) on redesigned Guide surfaces:
- `pages/guide.html` (Overview)
- `pages/guide-documents.html`
- `pages/tax-benefits.html`
- `pages/concessions.html`
- Insurance + complaints guide child pages

**Out of scope:** Anything **outside** the card (tile title, tile lead above the card, nav, hero, footer, Explore, education-loan legacy). Do not ask about or change those gaps in this pass.

---

## Rule 0 — One shared spacing system

Every card uses the **same proximity scale**. We do **not** invent per-card pixel values.

When we review a card, we only decide **which relationships** get which **tier**. Same relationship type → same tier everywhere.

| Tier id | Name | Meaning (plain) | Typical use |
|---|---|---|---|
| `T0` | Packed | Lines that are one list / one answer | Between `<li>` items |
| `T1` | Tight | Directly related — answer sits under its setup sentence | Intro copy → its list / steps |
| `T2` | Normal | Same thought, new label | Subheading → first body; title → lead |
| `T3` | Section | New thought / caveat / tip / next block | List → glance note; glance → tip; panel → tip |

Exact rem values are chosen once at implementation (in `css/shroffin-guide.css`), then applied via those tiers only.

---

## Standard relationship map (locked by first confirmed card)

These roles are the default for every similar stack. Later cards only confirm “same as standard” or flag an exception (rare).

| Relationship | Tier | Example (Property value panel) |
|---|---|---|
| Subheading → intro copy | `T2` Normal | “1. Property value” → “The bank can lend only…” |
| Intro copy → its list | `T1` Tight | “…given below.” → 90% / 80% / 75% list |
| List item → list item | `T0` Packed | Between the three % lines |
| List (or body) → glance / caveat note | `T3` Section | List → “These are RBI’s highest limits…” |
| Glance → tip (when both present) | `T3` Section | Note → Tip box |
| Tabs → first panel content | `T2` Normal | Segment → “1. Property value” (inside card) |
| Tip → flip dock / next control | leave as today until reviewed | — |
| ~~Card title → lead~~ | **Out of scope** | Outside `.guide-chapter-card` — not in this pass |

**Exception policy:** An exception needs an explicit row in the decisions table with reason. Prefer remapping content roles over inventing a new tier.

---

## Implementation target (when Ready)

- Primary file: `css/shroffin-guide.css`
- Prefer one stack rhythm on `.guide-limit` (and siblings) via gap / margin tokens named after tiers — not one-off overrides per section id.
- HTML class roles already in use: `.guide-limit-title`, `.guide-limit-copy`, `.guide-share-list`, `.guide-glance`, `.guide-tip`, `.guide-tile-title`, `.guide-tile-copy`

---

## Decision log

Update this table after every answered card/panel. Do not rely on chat.

### Page: Guide — Overview (`content/guide/overview.body.html`)

| ID | Card / panel | Status | Relationships (use standard unless noted) | User answer | Notes |
|---|---|---|---|---|---|
| OV-01a | How much can you borrow? · Property value | **Confirmed** | Sub→intro `T2`; intro→list `T1`; list items `T0`; list→glance `T3` | Yes — use recommended | First card; **locks the standard map**. CSS preview undone. |
| OV-01b | How much can you borrow? · Income | **Confirmed** | Same as OV-01a + glance→tip `T3` | Yes — same standard | CSS preview undone. |
| OV-01c | How much can you borrow? · Outside card (title / lead) | **Skipped** | — | User: only inside the card | Title + lead are outside `.guide-chapter-card` |
| OV-01c2 | How much can you borrow? · Tabs → panel | **Confirmed** | Tabs→panel `T2` | Yes | CSS preview undone. |
| OV-01d | Estimate your loan amount (flip back) | **Confirmed** | Title→lead `T2`; lead→form `T3`; result kicker→num `T1`; split lines `T0`; result→glance `T3`; field gaps leave as today | Yes | CSS preview undone. |
| OV-02a | How do you repay the loan? · How EMI works | **Confirmed** | Tabs→list `T2`; list items `T0` | Yes | |
| OV-02b | How do you repay the loan? · When it starts | Pending | | — | |
| OV-02c | Estimate your EMI (flip back) | Pending | | — | |
| OV-03 | Up to what period can you repay? | Pending | | — | |
| OV-04a | What are the types of interest rates? · Floating | Pending | | — | |
| OV-04b | What are the types of interest rates? · Fixed / hybrid | Pending | | — | |
| OV-04c | Rate options after sanction (flip) | Pending | | — | |
| OV-05a | Loan structures · Standard | Pending | | — | |
| OV-05b | Loan structures · Overdraft | Pending | | — | |
| OV-05c | Rules after you choose a structure (flip) | Pending | | — | |
| OV-06a | Charges · Bank fees | Pending | | — | |
| OV-06b | Charges · Other fees | Pending | | — | |
| OV-06c | Fee breakdown (flip) | Pending | | — | |
| OV-07 | Is your project bank-approved? | Pending | | — | |

### Child pages (queue after Overview)

| Page | Status |
|---|---|
| Documents | Not started |
| Tax benefits | Not started |
| Concessions | Not started |
| Home loan insurance | Not started |
| Property / home insurance | Not started |
| Credit life insurance | Not started |
| Complaints | Not started |

---

## Progress

- Confirmed panels: **5** (Card 1 complete + OV-02a)
- Card 1 CSS: **undone** — decisions kept in this ledger only
- Pending Overview: OV-02b onward
- Implementation: blocked until user asks again

---

## Changelog

| When | What |
|---|---|
| 2026-08-28 | Created ledger. Locked standard tiers from Property value (OV-01a = Yes). |
| 2026-08-28 | OV-01b Income confirmed — same standard + tip at `T3`. |
| 2026-08-28 | Scope clarified: **inside card only**. OV-01c title/lead skipped. |
| 2026-08-28 | OV-01c2 tabs→panel confirmed `T2`. |
| 2026-08-28 | OV-01d estimate flip-back confirmed (standard + form at `T3`). |
| 2026-08-28 | OV-02a How EMI works confirmed. |
| 2026-08-28 | Applied Card 1 proximity CSS preview (`#loan-amount`). |
| 2026-08-28 | **Undid** Card 1 CSS preview; restored prior editorial + `guide.html` cache tag. Decisions retained. |

# AXI / Axis Bank — Charges Audit (re-checked after file updates)

Re-checked against updated files (13 Aug 2026):
- `data/Charges/AXI_Home_Loan_Charges_Official.xlsx` → Structured_Data
- `data/HOME_LOANS_COMPARE_v1.xlsx` → Bank_charges (`bank_key` = `axis bank`)
- JSON re-exported: `data/home-loans-compare.json` (bank_charges = 2314)

Rules: see `AUDIT_RULES.md` (govt fees ignored; processing/prepay not from this sheet).

## Summary (Charges-sheet fidelity only)

| Check | Status |
|---|---|
| A. Value / note mismatches that matter | **PASS** — slab starts and notes match (TL + OD). Duplicate statement `CHG-OC-4` unscoped by channel (invented physical/digital flags cleared). |
| B. Missing govt/statutory in Bank_charges | **Ignored** (CERSAI / stamp / equitable mortgage → Government_charges lane) |
| C. True Other-charges duplicate (NOC / No Due) | **PASS** — merged into one master row |
| Processing fee copies vs Structured_Data | **Not an error** — processing is not from this sheet; Axis now has 2 rows (TL + OD), not 24 |
| Offers.overdue | **No action** |
| Prepayment | **Ignored** |

## Verdict
**PASS for Charges-sheet work remaining on Axis** — duplicate statement unscoped by channel; NOC/No Due one ₹250; slabs exclusive+1; switch/repricing as published. No further Axis Bank_charges change required.

---

## A. Numbers / notes — re-check (files updated again)

### Slab start (was M19 vs master Q)
- **MATCH — both files agree now.**
- Individual TL: `M19`=`1000001`, `M20`=`3000001` (also OD `M37`/`M38` same).
- Master: `Q15` (CHG-OC-16)=`1000001`, `Q16` (CHG-OC-17)=`3000001` (OD `Q22`/`Q23` same).
- Amounts and slab ends also match on all four TL + four OD floating slabs.

### Wrong note on floating→floating / OD rows (was BI)
- **MATCH — fixed correctly.**
- Floating→floating rows: master `BI` empty on CHG-OC-15/16/17/18 and CHG-OC-22/23/24/25.
- Carded-rate sentence only on master row **14** `BI14` (CHG-OC-14), matching individual `T17`.
- OD Higher Fixed → Lower Fixed: master `BI21` empty, matching individual `T35`.

---

## B. In individual file, not in Bank_charges — government class (ignored)

These Structured_Data rows are still not on Bank_charges; **by rule they are out of scope** for this sheet (govt / statutory):

| Individual | Cells | Charge |
|---|---|---|
| row 11 | `D11` `H11` | Equitable Mortgage Creation Charge (TL) |
| row 13 | `D13` `H13` | Stamp Duty and Other Statutory Charges (TL) |
| row 14 | `D14` `H14` | Equitable Mortgage Cancellation Charge (TL) |
| row 22–23 | `D22`/`H22`, `D23`/`H23` | CERSAI ₹50 / ₹100 (TL) |
| row 30–31 | `D30`/`H30`, `D31`/`H31` | Equitable Mortgage create/cancel (OD) |
| row 41–42 | `D41`/`H41`, `D42`/`H42` | CERSAI ₹50 / ₹100 (OD) |

---

## C. Master vs individual Charges sheet

### True duplicate NOC / No Due — **fixed**
- Old split (`CHG-OC-10` + `CHG-OC-11`) is gone.
- Single master row **11**: `A11`=`CHG-OC-10`, `K11`=**Duplicate No Objection Certificate Issuance Fees / No Due Certificate Charges**, `U11`=250.
- `CHG-OC-11` absent from xlsx and from re-exported JSON.
- Maps to individual `D12`/`H12` (and OD twin `D27`/`H27`) ₹250.

### Processing fee — **not from this sheet**
- Structured_Data has no processing fee (by design).
- Master Axis processing now: row **1658** `CHG-PROC-824` (Term Loan), row **1659** `CHG-PROC-847` (Overdraft). Duplicate clones removed.
- **Do not flag** Offers.processing as Charges-sheet redundancy (all banks).

### Overdue — **no action**
- Master `CHG-OD-79` / `CHG-OD-80` stay as Offers.overdue.
- Structured_Data OD penal remains mapped: individual `D40` → master `CHG-OC-26`.

### Prepayment — **ignored** for this audit.

---

## Pipeline note
After the master row-count change (2337 → 2314), `scripts/export_home_loans_json.py` `LOCKED_COUNTS["bank_charges"]` was updated and JSON regenerated so product data matches the xlsx (including merged `CHG-OC-10`, no `CHG-OC-11`).

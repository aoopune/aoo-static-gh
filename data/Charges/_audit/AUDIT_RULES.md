# Charges audit rules (Structured_Data ↔ Bank_charges)

Source of truth for bank *service* charges: each `data/Charges/{CODE}_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data**.

Master sheet audited: `HOME_LOANS_COMPARE_v1.xlsx` → **Bank_charges** only.

## Do not treat as Charges-sheet errors

1. **Government / statutory fees** — belong on **Government_charges** (or are intentionally out of Bank_charges). Do **not** flag as “missing in master” when absent from Bank_charges:
   - CERSAI (create / modify / search / satisfaction)
   - Stamp duty / e-stamp / statutory charges
   - Equitable mortgage creation / cancellation / MODT / mortgage registration
   - Sub-registrar / ROC / registry / “as applicable in the state” at-actuals of that class
2. **Processing fees** — **not** taken from the individual Charges Structured_Data sheet. Master rows with `origin=Offers.processing` are expected. Do **not** list them as redundant vs Structured_Data.
3. **Prepayment** — ignore for this Charges-sheet audit (`Offers.prepayment`, `CSV.fixed_prepay`).
4. **Overdue from Offers** (`Offers.overdue`) — no action when a separate Structured_Data penal/overdrawn row is already mapped under Other charges.

## Do flag

1. **Value mismatches** on bank service charges that *are* meant to come from Structured_Data (amounts, %, mins/maxes, slab bounds after source is authoritative, wrong notes on the wrong row).
2. **Missing bank service charges** in master that are in Structured_Data and are **not** in the government list above.
3. **True Other-charges duplicates** in master (same fee split into two OC rows without need).

## Percentage bands and “up to” ceilings

- **% band** (e.g. 0.25%–2.00%): `percentage_min` + `percentage_max` (fraction); keep `percentage` = min for compatibility. Table main: `0.25% – 2.00%`.
- **Up to X%**: `percentage_max` only; clear flat `percentage`. Table main: `Up to X%`.
- **Up to ₹X**: clear `fixed_amount`; set `charge_max` = X. Table main: `Up to ₹X` (do not also repeat Max in details).
- **₹X – ₹Y band** (e.g. CIC ₹45–₹150): `charge_min` + `charge_max` only; clear `fixed_amount`. Table main: `₹X – ₹Y` (do not also repeat Min/Max in details).
- `charge_min` / `charge_max` remain **rupee** floors/ceilings only — never store percent ends there.


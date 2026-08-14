# Processing fee cleanup — bank by bank, cell by cell

> **COMPLETED 2026-08-14.** Cleanup applied to master. Final status: `PROCESSING_FEES_CLEANUP_STATUS.md`.
> Post-cleanup audit (human sheet vs master only): run `python3 scripts/audit_processing_fees_human.py`.

File: `HOME_LOANS_COMPARE_v1.xlsx` → sheet **Bank_charges**
Only rows where `origin` = **Offers.processing**

## Global steps (every bank)

1. Filter `Bank_charges` to `origin` = `Offers.processing`
2. On **every** processing row, set these cells:
   - `cibil_band_applicable` → **No**
   - `cibil_band_score_min` → **blank**
   - `cibil_band_score_max` → **blank**
3. Delete any rows that become identical after step 2
4. Leave `charge_name` = **Processing fee**, `origin` = **Offers.processing**, `when_it_matters` = **Before offer** unchanged

---

## Axis Bank

**Your Processing fees sheet says:**
> Home Loan, Super Saver Home Loan / 1% or 10000, whichever is higher

| | Count |
|---|---:|
| Rows in master now | 2 |
| Rows to **keep** after cleanup | 2 |
| Rows to **delete** | 0 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-824`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 1% (store as 0.01) |
| `fixed_amount` | blank |
| `charge_min` | ₹10,000 |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-847`)
| Column | Value |
|---|---|
| `scheme` | Super Saver Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 1% (store as 0.01) |
| `fixed_amount` | blank |
| `charge_min` | ₹10,000 |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

### Step D — Bank-specific

- **No CIBIL today** — already 2 rows. No duplicate delete needed beyond CIBIL clear (already N/A).

---

## Bandhan Bank

**Your Processing fees sheet says:**
> Suraksha Home Loan / 1% of loan amount

| | Count |
|---|---:|
| Rows in master now | 6 |
| Rows to **keep** after cleanup | 1 |
| Rows to **delete** | 5 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-801`, `CHG-PROC-802`, `CHG-PROC-803`, `CHG-PROC-804`, `CHG-PROC-805`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-800`)
| Column | Value |
|---|---|
| `scheme` | Suraksha Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 1% (store as 0.01) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## Bank of Baroda

**Your Processing fees sheet says:**
> Baroda Home Loan , Baroda Max Savings Home Loan, Baroda Top Up Loan / Loan amount upto Rs.50.00 lacs- 50%, Min: Rs.8,500/- and Max: Rs.15,000/- / Loan amount greater than Rs.50.00 lacs- 25%, Min: Rs.8,500/- and Max: Rs.25,000/- /  / Baroda Top Up Loan / 0.35%, Min: Rs.5,000/- and Max: Rs.12,500/-

| | Count |
|---|---:|
| Rows in master now | 240 |
| Rows to **keep** after cleanup | 24 |
| Rows to **delete** | 216 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-237`, `CHG-PROC-238`, `CHG-PROC-239`, `CHG-PROC-240`, `CHG-PROC-241`, `CHG-PROC-242`, `CHG-PROC-243`, `CHG-PROC-244`, `CHG-PROC-245`, `CHG-PROC-247`, `CHG-PROC-248`, `CHG-PROC-249`, `CHG-PROC-250`, `CHG-PROC-251`, `CHG-PROC-252`, `CHG-PROC-253`, `CHG-PROC-254`, `CHG-PROC-255`, `CHG-PROC-257`, `CHG-PROC-258`, `CHG-PROC-259`, `CHG-PROC-260`, `CHG-PROC-261`, `CHG-PROC-262`, `CHG-PROC-263`

… and **191** more duplicate IDs for this bank.

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-236`)
| Column | Value |
|---|---|
| `scheme` | Baroda Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-416`)
| Column | Value |
|---|---|
| `scheme` | Baroda Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-246`)
| Column | Value |
|---|---|
| `scheme` | Baroda Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-426`)
| Column | Value |
|---|---|
| `scheme` | Baroda Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 5 (`CHG-PROC-256`)
| Column | Value |
|---|---|
| `scheme` | Baroda Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 6 (`CHG-PROC-436`)
| Column | Value |
|---|---|
| `scheme` | Baroda Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 7 (`CHG-PROC-266`)
| Column | Value |
|---|---|
| `scheme` | Baroda Max Savings Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 8 (`CHG-PROC-276`)
| Column | Value |
|---|---|
| `scheme` | Baroda Max Savings Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 9 (`CHG-PROC-446`)
| Column | Value |
|---|---|
| `scheme` | Baroda Max Savings Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 10 (`CHG-PROC-286`)
| Column | Value |
|---|---|
| `scheme` | Baroda Max Savings Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 11 (`CHG-PROC-306`)
| Column | Value |
|---|---|
| `scheme` | Baroda Max Savings Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 12 (`CHG-PROC-456`)
| Column | Value |
|---|---|
| `scheme` | Baroda Max Savings Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 13 (`CHG-PROC-296`)
| Column | Value |
|---|---|
| `scheme` | Baroda Max Savings Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 14 (`CHG-PROC-316`)
| Column | Value |
|---|---|
| `scheme` | Baroda Max Savings Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 15 (`CHG-PROC-466`)
| Column | Value |
|---|---|
| `scheme` | Baroda Max Savings Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹8,500 |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 16 (`CHG-PROC-356`)
| Column | Value |
|---|---|
| `scheme` | Baroda Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹12,500 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 17 (`CHG-PROC-366`)
| Column | Value |
|---|---|
| `scheme` | Baroda Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹12,500 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 18 (`CHG-PROC-376`)
| Column | Value |
|---|---|
| `scheme` | Baroda Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹12,500 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 19 (`CHG-PROC-396`)
| Column | Value |
|---|---|
| `scheme` | Baroda Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹12,500 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 20 (`CHG-PROC-386`)
| Column | Value |
|---|---|
| `scheme` | Baroda Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹12,500 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 21 (`CHG-PROC-406`)
| Column | Value |
|---|---|
| `scheme` | Baroda Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹12,500 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 22 (`CHG-PROC-326`)
| Column | Value |
|---|---|
| `scheme` | Baroda Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹12,500 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 23 (`CHG-PROC-336`)
| Column | Value |
|---|---|
| `scheme` | Baroda Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹12,500 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 24 (`CHG-PROC-346`)
| Column | Value |
|---|---|
| `scheme` | Baroda Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹12,500 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

### Step D — Bank-specific

- **KEEP** scheme + loan amount splits — your sheet has ≤50L vs >50L and separate Top Up rule.

---

## Bank of India

**Your Processing fees sheet says:**
> Star Home Loan Star Smart Home Loan, Star Top Up Loan =  / Customers with CIBIL personal score 725 and above or - 1/0 = 0.20% of / loan amount Min.₹2000/- & Max. ₹10000/- /  / All other home loan borrower s whohave CIBIL Personal Score of less than 725 = 0.35% of loan amount Min.₹3500/- & Max. ₹30,000/-

| | Count |
|---|---:|
| Rows in master now | 128 |
| Rows to **keep** after cleanup | 32 |
| Rows to **delete** | 96 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-77`, `CHG-PROC-78`, `CHG-PROC-79`, `CHG-PROC-80`, `CHG-PROC-83`, `CHG-PROC-82`, `CHG-PROC-85`, `CHG-PROC-86`, `CHG-PROC-87`, `CHG-PROC-88`, `CHG-PROC-91`, `CHG-PROC-90`, `CHG-PROC-93`, `CHG-PROC-94`, `CHG-PROC-95`, `CHG-PROC-96`, `CHG-PROC-99`, `CHG-PROC-98`, `CHG-PROC-101`, `CHG-PROC-102`, `CHG-PROC-103`, `CHG-PROC-104`, `CHG-PROC-107`, `CHG-PROC-106`, `CHG-PROC-109`

… and **71** more duplicate IDs for this bank.

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-76`)
| Column | Value |
|---|---|
| `scheme` | Star Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-81`)
| Column | Value |
|---|---|
| `scheme` | Star Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-140`)
| Column | Value |
|---|---|
| `scheme` | Star Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-145`)
| Column | Value |
|---|---|
| `scheme` | Star Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 5 (`CHG-PROC-108`)
| Column | Value |
|---|---|
| `scheme` | Star Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 6 (`CHG-PROC-113`)
| Column | Value |
|---|---|
| `scheme` | Star Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 7 (`CHG-PROC-172`)
| Column | Value |
|---|---|
| `scheme` | Star Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 8 (`CHG-PROC-177`)
| Column | Value |
|---|---|
| `scheme` | Star Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 9 (`CHG-PROC-84`)
| Column | Value |
|---|---|
| `scheme` | Star Smart Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 10 (`CHG-PROC-89`)
| Column | Value |
|---|---|
| `scheme` | Star Smart Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 11 (`CHG-PROC-148`)
| Column | Value |
|---|---|
| `scheme` | Star Smart Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 12 (`CHG-PROC-153`)
| Column | Value |
|---|---|
| `scheme` | Star Smart Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 13 (`CHG-PROC-116`)
| Column | Value |
|---|---|
| `scheme` | Star Smart Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 14 (`CHG-PROC-121`)
| Column | Value |
|---|---|
| `scheme` | Star Smart Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 15 (`CHG-PROC-180`)
| Column | Value |
|---|---|
| `scheme` | Star Smart Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 16 (`CHG-PROC-185`)
| Column | Value |
|---|---|
| `scheme` | Star Smart Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 17 (`CHG-PROC-100`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 18 (`CHG-PROC-105`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 19 (`CHG-PROC-164`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 20 (`CHG-PROC-169`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 21 (`CHG-PROC-132`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 22 (`CHG-PROC-137`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 23 (`CHG-PROC-196`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 24 (`CHG-PROC-201`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 25 (`CHG-PROC-92`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 26 (`CHG-PROC-97`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 27 (`CHG-PROC-156`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 28 (`CHG-PROC-161`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 29 (`CHG-PROC-124`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 30 (`CHG-PROC-129`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 31 (`CHG-PROC-188`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 32 (`CHG-PROC-193`)
| Column | Value |
|---|---|
| `scheme` | Star Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹3,500 |
| `charge_max` | ₹30,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

### Step D — Bank-specific

- **DECISION NEEDED:** Your sheet ties 0.20% vs 0.35% to CIBIL 725. You said no CIBIL on processing. Keep both fee tiers per scheme WITHOUT cibil columns — compare may need a note, OR pick one rate.

---

## Bank of Maharashtra

**Your Processing fees sheet says:**
> Maha Super Housing Loan, Maha Super Flexi Housing Loan / 0.25% or max 25000 / Maha Bank Top Up Loan / 0.25% or max 50000

| | Count |
|---|---:|
| Rows in master now | 53 |
| Rows to **keep** after cleanup | 9 |
| Rows to **delete** | 44 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-687`, `CHG-PROC-688`, `CHG-PROC-689`, `CHG-PROC-690`, `CHG-PROC-691`, `CHG-PROC-692`, `CHG-PROC-693`, `CHG-PROC-695`, `CHG-PROC-696`, `CHG-PROC-697`, `CHG-PROC-698`, `CHG-PROC-699`, `CHG-PROC-700`, `CHG-PROC-701`, `CHG-PROC-703`, `CHG-PROC-704`, `CHG-PROC-705`, `CHG-PROC-706`, `CHG-PROC-707`, `CHG-PROC-708`, `CHG-PROC-709`, `CHG-PROC-711`, `CHG-PROC-712`, `CHG-PROC-713`, `CHG-PROC-714`

… and **19** more duplicate IDs for this bank.

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-718`)
| Column | Value |
|---|---|
| `scheme` | Maha Bank Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹50,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-727`)
| Column | Value |
|---|---|
| `scheme` | Maha Bank Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹50,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-702`)
| Column | Value |
|---|---|
| `scheme` | Maha Super Flexi Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-710`)
| Column | Value |
|---|---|
| `scheme` | Maha Super Flexi Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 5 (`CHG-PROC-736`)
| Column | Value |
|---|---|
| `scheme` | Maha Super Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 6 (`CHG-PROC-737`)
| Column | Value |
|---|---|
| `scheme` | Maha Super Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 7 (`CHG-PROC-738`)
| Column | Value |
|---|---|
| `scheme` | Maha Super Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹20,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 8 (`CHG-PROC-686`)
| Column | Value |
|---|---|
| `scheme` | Maha Super Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 9 (`CHG-PROC-694`)
| Column | Value |
|---|---|
| `scheme` | Maha Super Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## CSB Bank

**Your Processing fees sheet says:**
> Housing Loan /  0.6%, Min Rs. 10,000

| | Count |
|---|---:|
| Rows in master now | 6 |
| Rows to **keep** after cleanup | 1 |
| Rows to **delete** | 5 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-1158`, `CHG-PROC-1159`, `CHG-PROC-1160`, `CHG-PROC-1161`, `CHG-PROC-1162`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-1157`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.6% (store as 0.006) |
| `fixed_amount` | blank |
| `charge_min` | ₹10,000 |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## Canara Bank

**Your Processing fees sheet says:**
> Housing loan / 0.50%, Min ₹1,500, Max ₹10,000

| | Count |
|---|---:|
| Rows in master now | 50 |
| Rows to **keep** after cleanup | 10 |
| Rows to **delete** | 40 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-477`, `CHG-PROC-478`, `CHG-PROC-479`, `CHG-PROC-480`, `CHG-PROC-482`, `CHG-PROC-483`, `CHG-PROC-484`, `CHG-PROC-485`, `CHG-PROC-487`, `CHG-PROC-488`, `CHG-PROC-489`, `CHG-PROC-490`, `CHG-PROC-492`, `CHG-PROC-493`, `CHG-PROC-494`, `CHG-PROC-495`, `CHG-PROC-497`, `CHG-PROC-498`, `CHG-PROC-499`, `CHG-PROC-500`, `CHG-PROC-502`, `CHG-PROC-503`, `CHG-PROC-504`, `CHG-PROC-505`, `CHG-PROC-507`

… and **15** more duplicate IDs for this bank.

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-476`)
| Column | Value |
|---|---|
| `scheme` | Housing loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹1,500 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-481`)
| Column | Value |
|---|---|
| `scheme` | Housing loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹10,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹1,500 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-486`)
| Column | Value |
|---|---|
| `scheme` | Housing loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹10,000,001 |
| `loan_amount_max` | ₹25,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹1,500 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-491`)
| Column | Value |
|---|---|
| `scheme` | Housing loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹25,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹1,500 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 5 (`CHG-PROC-496`)
| Column | Value |
|---|---|
| `scheme` | Housing loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹1,500 |
| `charge_max` | ₹10,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 6 (`CHG-PROC-501`)
| Column | Value |
|---|---|
| `scheme` | Housing loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹750 |
| `charge_max` | ₹5,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 7 (`CHG-PROC-506`)
| Column | Value |
|---|---|
| `scheme` | Housing loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹10,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹750 |
| `charge_max` | ₹5,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 8 (`CHG-PROC-511`)
| Column | Value |
|---|---|
| `scheme` | Housing loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹10,000,001 |
| `loan_amount_max` | ₹25,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹750 |
| `charge_max` | ₹5,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 9 (`CHG-PROC-516`)
| Column | Value |
|---|---|
| `scheme` | Housing loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹25,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹750 |
| `charge_max` | ₹5,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 10 (`CHG-PROC-521`)
| Column | Value |
|---|---|
| `scheme` | Housing loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹750 |
| `charge_max` | ₹5,000 |
| `valid_from` | blank |
| `valid_till` | 2026-06-30 |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

### Step D — Bank-specific

- **EXTRA ACTION:** Your sheet only has 0.50% min ₹1,500 max ₹10,000. Delete ALL rows where `percentage` = 0.0025 (0.25%) — those are not in your source.

---

## Central Bank of India

**Your Processing fees sheet says:**
> Cent Home loan, Cent Home Double Plus , Cent Top Up Loan / 0.50% of loan amount plus GST subject to Max. Rs.20,000/-

| | Count |
|---|---:|
| Rows in master now | 15 |
| Rows to **keep** after cleanup | 3 |
| Rows to **delete** | 12 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-62`, `CHG-PROC-63`, `CHG-PROC-64`, `CHG-PROC-65`, `CHG-PROC-67`, `CHG-PROC-68`, `CHG-PROC-69`, `CHG-PROC-70`, `CHG-PROC-72`, `CHG-PROC-73`, `CHG-PROC-74`, `CHG-PROC-75`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-66`)
| Column | Value |
|---|---|
| `scheme` | Cent Home Double Plus |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹20,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-61`)
| Column | Value |
|---|---|
| `scheme` | Cent Home loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹20,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-71`)
| Column | Value |
|---|---|
| `scheme` | Cent Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹20,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## City Union Bank

**Your Processing fees sheet says:**
> Affordable Home loan - 0.35% of loan  / Prime Home loan - 0.25% of loan / Premium Home loan - 0.20% of loan

| | Count |
|---|---:|
| Rows in master now | 18 |
| Rows to **keep** after cleanup | 6 |
| Rows to **delete** | 12 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-807`, `CHG-PROC-808`, `CHG-PROC-810`, `CHG-PROC-811`, `CHG-PROC-813`, `CHG-PROC-814`, `CHG-PROC-816`, `CHG-PROC-817`, `CHG-PROC-819`, `CHG-PROC-820`, `CHG-PROC-822`, `CHG-PROC-823`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-806`)
| Column | Value |
|---|---|
| `scheme` | Affordable Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-815`)
| Column | Value |
|---|---|
| `scheme` | Affordable Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-812`)
| Column | Value |
|---|---|
| `scheme` | Premium Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹75,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-821`)
| Column | Value |
|---|---|
| `scheme` | Premium Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹75,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.2% (store as 0.002) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 5 (`CHG-PROC-809`)
| Column | Value |
|---|---|
| `scheme` | Prime Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 6 (`CHG-PROC-818`)
| Column | Value |
|---|---|
| `scheme` | Prime Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## DCB Bank

**Your Processing fees sheet says:**
> Home Loan / 2% or ₹ 5,000 (whichever is higher)

| | Count |
|---|---:|
| Rows in master now | 6 |
| Rows to **keep** after cleanup | 1 |
| Rows to **delete** | 5 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-759`, `CHG-PROC-760`, `CHG-PROC-761`, `CHG-PROC-762`, `CHG-PROC-763`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-758`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 2% (store as 0.02) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## Dhanlaxmi Bank

**Your Processing fees sheet says:**
> Home loan / 1.00 % of  loan  amount  + service tax (subject to minimum of / Rs. 10,000 + service tax)

| | Count |
|---|---:|
| Rows in master now | 7 |
| Rows to **keep** after cleanup | 1 |
| Rows to **delete** | 6 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-879`, `CHG-PROC-880`, `CHG-PROC-881`, `CHG-PROC-882`, `CHG-PROC-883`, `CHG-PROC-884`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-878`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 1% (store as 0.01) |
| `fixed_amount` | blank |
| `charge_min` | ₹10,000 |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## Federal Bank

**Your Processing fees sheet says:**
> Home loan / 0.50% of the limit sanctioned / with a minimum of ₹ 10,000

| | Count |
|---|---:|
| Rows in master now | 6 |
| Rows to **keep** after cleanup | 1 |
| Rows to **delete** | 5 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-886`, `CHG-PROC-887`, `CHG-PROC-888`, `CHG-PROC-889`, `CHG-PROC-890`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-885`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹10,000 |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## HDFC Bank

**Your Processing fees sheet says:**
> Home loan / Upto 0.50% of the loan amount or ₹4,000/- whichever is higher, plus applicable taxes.

| | Count |
|---|---:|
| Rows in master now | 6 |
| Rows to **keep** after cleanup | 1 |
| Rows to **delete** | 5 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-873`, `CHG-PROC-874`, `CHG-PROC-875`, `CHG-PROC-876`, `CHG-PROC-877`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-872`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹4,000 |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## ICICI Bank

**Your Processing fees sheet says:**
> Home loan, ICICI Money Saver / 2% of Loan Amount.

| | Count |
|---|---:|
| Rows in master now | 24 |
| Rows to **keep** after cleanup | 4 |
| Rows to **delete** | 20 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-850`, `CHG-PROC-852`, `CHG-PROC-854`, `CHG-PROC-856`, `CHG-PROC-858`, `CHG-PROC-851`, `CHG-PROC-853`, `CHG-PROC-855`, `CHG-PROC-857`, `CHG-PROC-859`, `CHG-PROC-862`, `CHG-PROC-864`, `CHG-PROC-866`, `CHG-PROC-868`, `CHG-PROC-870`, `CHG-PROC-863`, `CHG-PROC-865`, `CHG-PROC-867`, `CHG-PROC-869`, `CHG-PROC-871`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-848`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 2% (store as 0.02) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-849`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 2% (store as 0.02) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-860`)
| Column | Value |
|---|---|
| `scheme` | ICICI Money Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 2% (store as 0.02) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-861`)
| Column | Value |
|---|---|
| `scheme` | ICICI Money Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 2% (store as 0.02) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## IDBI Bank

**Your Processing fees sheet says:**
> Plain Vanilla Home Loan, Home Loan Ultra Saver, Top-up / Loan Amount / Up to Rs.75 Lakh 10,000  / Above Rs.75 Lakh 15,000

| | Count |
|---|---:|
| Rows in master now | 84 |
| Rows to **keep** after cleanup | 12 |
| Rows to **delete** | 72 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-893`, `CHG-PROC-895`, `CHG-PROC-897`, `CHG-PROC-899`, `CHG-PROC-901`, `CHG-PROC-903`, `CHG-PROC-894`, `CHG-PROC-896`, `CHG-PROC-898`, `CHG-PROC-900`, `CHG-PROC-902`, `CHG-PROC-904`, `CHG-PROC-907`, `CHG-PROC-909`, `CHG-PROC-911`, `CHG-PROC-913`, `CHG-PROC-915`, `CHG-PROC-917`, `CHG-PROC-908`, `CHG-PROC-910`, `CHG-PROC-912`, `CHG-PROC-914`, `CHG-PROC-916`, `CHG-PROC-918`, `CHG-PROC-921`

… and **47** more duplicate IDs for this bank.

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-919`)
| Column | Value |
|---|---|
| `scheme` | Home Loan Top Up |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹10,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-961`)
| Column | Value |
|---|---|
| `scheme` | Home Loan Top Up |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹15,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-920`)
| Column | Value |
|---|---|
| `scheme` | Home Loan Top Up |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹10,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-962`)
| Column | Value |
|---|---|
| `scheme` | Home Loan Top Up |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹15,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 5 (`CHG-PROC-905`)
| Column | Value |
|---|---|
| `scheme` | Home Loan Ultra Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹10,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 6 (`CHG-PROC-947`)
| Column | Value |
|---|---|
| `scheme` | Home Loan Ultra Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹15,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 7 (`CHG-PROC-906`)
| Column | Value |
|---|---|
| `scheme` | Home Loan Ultra Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹10,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 8 (`CHG-PROC-948`)
| Column | Value |
|---|---|
| `scheme` | Home Loan Ultra Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹15,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 9 (`CHG-PROC-891`)
| Column | Value |
|---|---|
| `scheme` | Plain Vanilla Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹10,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 10 (`CHG-PROC-933`)
| Column | Value |
|---|---|
| `scheme` | Plain Vanilla Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹15,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 11 (`CHG-PROC-892`)
| Column | Value |
|---|---|
| `scheme` | Plain Vanilla Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹10,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 12 (`CHG-PROC-934`)
| Column | Value |
|---|---|
| `scheme` | Plain Vanilla Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹15,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## IDFC FIRST Bank

**Your Processing fees sheet says:**
> Home loan / Up to 3% of loan amount.

| | Count |
|---|---:|
| Rows in master now | 5 |
| Rows to **keep** after cleanup | 1 |
| Rows to **delete** | 4 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-976`, `CHG-PROC-977`, `CHG-PROC-978`, `CHG-PROC-979`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-975`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 3% (store as 0.03) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## Indian Bank

**Your Processing fees sheet says:**
> IB Home Loan, IB Home Loan Flexi / Loan amount up to Rs.25.00 lakh: 1500 + GST / Loan amount above Rs.25.00 lakh up to Rs.75.00 lakh: 2500 + GST / Loan amount above Rs.75.00 lakh: Rs.5000 + GST

| | Count |
|---|---:|
| Rows in master now | 36 |
| Rows to **keep** after cleanup | 6 |
| Rows to **delete** | 30 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-765`, `CHG-PROC-766`, `CHG-PROC-767`, `CHG-PROC-768`, `CHG-PROC-769`, `CHG-PROC-771`, `CHG-PROC-772`, `CHG-PROC-773`, `CHG-PROC-774`, `CHG-PROC-775`, `CHG-PROC-778`, `CHG-PROC-780`, `CHG-PROC-782`, `CHG-PROC-784`, `CHG-PROC-786`, `CHG-PROC-779`, `CHG-PROC-781`, `CHG-PROC-783`, `CHG-PROC-785`, `CHG-PROC-787`, `CHG-PROC-790`, `CHG-PROC-792`, `CHG-PROC-794`, `CHG-PROC-796`, `CHG-PROC-798`

… and **5** more duplicate IDs for this bank.

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-764`)
| Column | Value |
|---|---|
| `scheme` | IB Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹2,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹1,500 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-776`)
| Column | Value |
|---|---|
| `scheme` | IB Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹2,500,001 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹2,500 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-777`)
| Column | Value |
|---|---|
| `scheme` | IB Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹5,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-770`)
| Column | Value |
|---|---|
| `scheme` | IB Home Loan Flexi |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹2,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹1,500 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 5 (`CHG-PROC-788`)
| Column | Value |
|---|---|
| `scheme` | IB Home Loan Flexi |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹2,500,001 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹2,500 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 6 (`CHG-PROC-789`)
| Column | Value |
|---|---|
| `scheme` | IB Home Loan Flexi |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹5,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## Indian Overseas Bank

**Your Processing fees sheet says:**
> Subhagruha Housing Loan, Subhagruha Top Up Loan /  / ≤₹75L: 0.50% (max ₹20,000) / >₹75L: 0.50% (max ₹25,000)

| | Count |
|---|---:|
| Rows in master now | 46 |
| Rows to **keep** after cleanup | 10 |
| Rows to **delete** | 36 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-527`, `CHG-PROC-528`, `CHG-PROC-529`, `CHG-PROC-530`, `CHG-PROC-531`, `CHG-PROC-532`, `CHG-PROC-534`, `CHG-PROC-535`, `CHG-PROC-536`, `CHG-PROC-537`, `CHG-PROC-538`, `CHG-PROC-539`, `CHG-PROC-541`, `CHG-PROC-542`, `CHG-PROC-543`, `CHG-PROC-544`, `CHG-PROC-545`, `CHG-PROC-546`, `CHG-PROC-550`, `CHG-PROC-551`, `CHG-PROC-552`, `CHG-PROC-553`, `CHG-PROC-554`, `CHG-PROC-555`, `CHG-PROC-557`

… and **11** more duplicate IDs for this bank.

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-547`)
| Column | Value |
|---|---|
| `scheme` | Subhagruha Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹20,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-570`)
| Column | Value |
|---|---|
| `scheme` | Subhagruha Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-526`)
| Column | Value |
|---|---|
| `scheme` | Subhagruha Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹20,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-549`)
| Column | Value |
|---|---|
| `scheme` | Subhagruha Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 5 (`CHG-PROC-533`)
| Column | Value |
|---|---|
| `scheme` | Subhagruha Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹20,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 6 (`CHG-PROC-556`)
| Column | Value |
|---|---|
| `scheme` | Subhagruha Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 7 (`CHG-PROC-540`)
| Column | Value |
|---|---|
| `scheme` | Subhagruha Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹20,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 8 (`CHG-PROC-548`)
| Column | Value |
|---|---|
| `scheme` | Subhagruha Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹20,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 9 (`CHG-PROC-563`)
| Column | Value |
|---|---|
| `scheme` | Subhagruha Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 10 (`CHG-PROC-571`)
| Column | Value |
|---|---|
| `scheme` | Subhagruha Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹25,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## IndusInd Bank

**Your Processing fees sheet says:**
> Home loan / Up to 1% of loan amount.

| | Count |
|---|---:|
| Rows in master now | 14 |
| Rows to **keep** after cleanup | 2 |
| Rows to **delete** | 12 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-1172`, `CHG-PROC-1174`, `CHG-PROC-1176`, `CHG-PROC-1178`, `CHG-PROC-1180`, `CHG-PROC-1182`, `CHG-PROC-1173`, `CHG-PROC-1175`, `CHG-PROC-1177`, `CHG-PROC-1179`, `CHG-PROC-1181`, `CHG-PROC-1183`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-1170`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 1% (store as 0.01) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-1171`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 1% (store as 0.01) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## Jammu and Kashmir Bank

**Your Processing fees sheet says:**
> (not found — check bank name spelling)

| | Count |
|---|---:|
| Rows in master now | 5 |
| Rows to **keep** after cleanup | 1 |
| Rows to **delete** | 4 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-754`, `CHG-PROC-755`, `CHG-PROC-756`, `CHG-PROC-757`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-753`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,000 |
| `charge_max` | ₹50,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## Karnataka Bank

**Your Processing fees sheet says:**
> kbl - aPNA GHAR  /  0.25% of loan amount

| | Count |
|---|---:|
| Rows in master now | 6 |
| Rows to **keep** after cleanup | 1 |
| Rows to **delete** | 5 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-1023`, `CHG-PROC-1024`, `CHG-PROC-1025`, `CHG-PROC-1026`, `CHG-PROC-1027`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-1022`)
| Column | Value |
|---|---|
| `scheme` | KBL - Apna Ghar |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## Karur Vysya Bank

**Your Processing fees sheet says:**
> Housing Loan Housing Loan Top Up / Loans up to Rs. 25 Lakhs	Rs. 2,500/- + GST / Loans between Rs. 25 Lakhs & Rs. 50 Lakhs	Rs. 5,000/- + GST / Loans above Rs. 50 Lakhs	Rs. 7,500/- + GST

| | Count |
|---|---:|
| Rows in master now | 30 |
| Rows to **keep** after cleanup | 6 |
| Rows to **delete** | 24 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-981`, `CHG-PROC-982`, `CHG-PROC-983`, `CHG-PROC-984`, `CHG-PROC-986`, `CHG-PROC-987`, `CHG-PROC-988`, `CHG-PROC-989`, `CHG-PROC-992`, `CHG-PROC-994`, `CHG-PROC-996`, `CHG-PROC-998`, `CHG-PROC-993`, `CHG-PROC-995`, `CHG-PROC-997`, `CHG-PROC-999`, `CHG-PROC-1002`, `CHG-PROC-1004`, `CHG-PROC-1006`, `CHG-PROC-1008`, `CHG-PROC-1003`, `CHG-PROC-1005`, `CHG-PROC-1007`, `CHG-PROC-1009`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-980`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹2,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹2,500 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-990`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹2,500,001 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹5,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-991`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹7,500 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-985`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan Top Up |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹2,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹2,500 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 5 (`CHG-PROC-1000`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan Top Up |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹2,500,001 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹5,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 6 (`CHG-PROC-1001`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan Top Up |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹7,500 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## Kotak Mahindra Bank

**Your Processing fees sheet says:**
> Home loan  /  2% of loan amount

| | Count |
|---|---:|
| Rows in master now | 12 |
| Rows to **keep** after cleanup | 2 |
| Rows to **delete** | 10 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-1012`, `CHG-PROC-1014`, `CHG-PROC-1016`, `CHG-PROC-1018`, `CHG-PROC-1020`, `CHG-PROC-1013`, `CHG-PROC-1015`, `CHG-PROC-1017`, `CHG-PROC-1019`, `CHG-PROC-1021`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-1010`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 2% (store as 0.02) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-1011`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 2% (store as 0.02) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## Nainital Bank

**Your Processing fees sheet says:**
> Apna Aashiana - Home loan / ≤₹5L: Nil / ₹5L–₹10L: ₹1,000 / ₹10L–₹20L: ₹2,000 / ₹20L–₹30L: ₹3,000 / ₹30L–₹50L: ₹4,000 / >₹50L: ₹5,000 /  / Apna Aashiana - Top Up Home Loan / 0.50% on sanctioned amount

| | Count |
|---|---:|
| Rows in master now | 105 |
| Rows to **keep** after cleanup | 21 |
| Rows to **delete** | 84 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-1049`, `CHG-PROC-1051`, `CHG-PROC-1053`, `CHG-PROC-1055`, `CHG-PROC-1057`, `CHG-PROC-1059`, `CHG-PROC-1050`, `CHG-PROC-1052`, `CHG-PROC-1054`, `CHG-PROC-1056`, `CHG-PROC-1058`, `CHG-PROC-1060`, `CHG-PROC-1064`, `CHG-PROC-1066`, `CHG-PROC-1068`, `CHG-PROC-1070`, `CHG-PROC-1072`, `CHG-PROC-1074`, `CHG-PROC-1065`, `CHG-PROC-1067`, `CHG-PROC-1069`, `CHG-PROC-1071`, `CHG-PROC-1073`, `CHG-PROC-1075`, `CHG-PROC-1091`

… and **59** more duplicate IDs for this bank.

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-1047`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹0 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-1081`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹500,001 |
| `loan_amount_max` | ₹1,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹1,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-1083`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1,000,001 |
| `loan_amount_max` | ₹2,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹2,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-1085`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹2,000,001 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹3,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 5 (`CHG-PROC-1087`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹4,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 6 (`CHG-PROC-1089`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹5,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 7 (`CHG-PROC-1046`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹0 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 8 (`CHG-PROC-1076`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹500,001 |
| `loan_amount_max` | ₹1,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹1,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 9 (`CHG-PROC-1077`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1,000,001 |
| `loan_amount_max` | ₹2,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹2,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 10 (`CHG-PROC-1078`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹2,000,001 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹3,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 11 (`CHG-PROC-1079`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹4,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 12 (`CHG-PROC-1080`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹5,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 13 (`CHG-PROC-1048`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹0 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 14 (`CHG-PROC-1082`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹500,001 |
| `loan_amount_max` | ₹1,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹1,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 15 (`CHG-PROC-1084`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1,000,001 |
| `loan_amount_max` | ₹2,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹2,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 16 (`CHG-PROC-1086`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹2,000,001 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹3,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 17 (`CHG-PROC-1088`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹4,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 18 (`CHG-PROC-1090`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Fixed Amount |
| `percentage` | blank |
| `fixed_amount` | ₹5,000 |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 19 (`CHG-PROC-1062`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Top Up Home Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 20 (`CHG-PROC-1061`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Top Up Home Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 21 (`CHG-PROC-1063`)
| Column | Value |
|---|---|
| `scheme` | Apna Aashiana - Top Up Home Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## Punjab & Sind Bank

**Your Processing fees sheet says:**
> PSB Apna Ghar / (i)        Loans up to Rs. 25 Lakh        @ 0.15% on the loan amount + GST, subject to minimum of Rs. 1000/- + GST and maximum of Rs. 3750/- + GST / (ii)        Loans above Rs. 25 Lakh & upto Rs. 50 lakh        @ 0.25% of the loan amount +GST and maximum of Rs. 12500/- + GST / (iii)        Loans above Rs. 50 Lakh & less than Rs. 75 lakh        @ 0.25% of the loan amount + GST and maximum of Rs. 15000/- + GST / (iv)        Loans of Rs. 75 Lakh & above        @ 0.25% of the loan am

| | Count |
|---|---:|
| Rows in master now | 42 |
| Rows to **keep** after cleanup | 6 |
| Rows to **delete** | 36 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-573`, `CHG-PROC-574`, `CHG-PROC-575`, `CHG-PROC-576`, `CHG-PROC-577`, `CHG-PROC-578`, `CHG-PROC-580`, `CHG-PROC-581`, `CHG-PROC-582`, `CHG-PROC-583`, `CHG-PROC-584`, `CHG-PROC-585`, `CHG-PROC-587`, `CHG-PROC-588`, `CHG-PROC-589`, `CHG-PROC-590`, `CHG-PROC-591`, `CHG-PROC-592`, `CHG-PROC-596`, `CHG-PROC-599`, `CHG-PROC-602`, `CHG-PROC-605`, `CHG-PROC-608`, `CHG-PROC-611`, `CHG-PROC-597`

… and **11** more duplicate IDs for this bank.

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-572`)
| Column | Value |
|---|---|
| `scheme` | PSB Apna Ghar |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹2,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.15% (store as 0.0015) |
| `fixed_amount` | blank |
| `charge_min` | ₹1,000 |
| `charge_max` | ₹3,750 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-593`)
| Column | Value |
|---|---|
| `scheme` | PSB Apna Ghar |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹2,500,001 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹12,500 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-594`)
| Column | Value |
|---|---|
| `scheme` | PSB Apna Ghar |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹7,500,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-595`)
| Column | Value |
|---|---|
| `scheme` | PSB Apna Ghar |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹7,500,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.25% (store as 0.0025) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 5 (`CHG-PROC-579`)
| Column | Value |
|---|---|
| `scheme` | PSB Apna Ghar Sahaj & Apna Ghar Gaurav |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0% (store as 0) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 6 (`CHG-PROC-586`)
| Column | Value |
|---|---|
| `scheme` | PSB Apna Ghar Top Up |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.15% (store as 0.0015) |
| `fixed_amount` | blank |
| `charge_min` | ₹1,000 |
| `charge_max` | ₹3,750 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## Punjab National Bank

**Your Processing fees sheet says:**
> Housing Loan For Public, PNB Max Saver, TOP-UP Loan / 0.35%, Min: ₹2,500 ,Max: ₹15,000 (for govt employees category - NIL)

| | Count |
|---|---:|
| Rows in master now | 60 |
| Rows to **keep** after cleanup | 30 |
| Rows to **delete** | 30 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-3`, `CHG-PROC-4`, `CHG-PROC-7`, `CHG-PROC-8`, `CHG-PROC-9`, `CHG-PROC-12`, `CHG-PROC-13`, `CHG-PROC-16`, `CHG-PROC-17`, `CHG-PROC-18`, `CHG-PROC-21`, `CHG-PROC-22`, `CHG-PROC-25`, `CHG-PROC-26`, `CHG-PROC-27`, `CHG-PROC-30`, `CHG-PROC-31`, `CHG-PROC-34`, `CHG-PROC-35`, `CHG-PROC-36`, `CHG-PROC-39`, `CHG-PROC-40`, `CHG-PROC-43`, `CHG-PROC-44`, `CHG-PROC-45`

… and **5** more duplicate IDs for this bank.

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-2`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan For Public |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-5`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan For Public |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-11`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan For Public |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 1 |
| `tenure_months_max` | 120 |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-14`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan For Public |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 1 |
| `tenure_months_max` | 120 |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 5 (`CHG-PROC-20`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan For Public |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 121 |
| `tenure_months_max` | 360 |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 6 (`CHG-PROC-23`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan For Public |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 121 |
| `tenure_months_max` | 360 |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 7 (`CHG-PROC-1`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan For Public |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0% (store as 0) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 8 (`CHG-PROC-6`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan For Public |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0% (store as 0) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 9 (`CHG-PROC-10`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan For Public |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 1 |
| `tenure_months_max` | 120 |
| `charge_type` | Percentage |
| `percentage` | 0% (store as 0) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 10 (`CHG-PROC-15`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan For Public |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 1 |
| `tenure_months_max` | 120 |
| `charge_type` | Percentage |
| `percentage` | 0% (store as 0) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 11 (`CHG-PROC-19`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan For Public |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 121 |
| `tenure_months_max` | 360 |
| `charge_type` | Percentage |
| `percentage` | 0% (store as 0) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 12 (`CHG-PROC-24`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan For Public |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 121 |
| `tenure_months_max` | 360 |
| `charge_type` | Percentage |
| `percentage` | 0% (store as 0) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 13 (`CHG-PROC-29`)
| Column | Value |
|---|---|
| `scheme` | PNB Max-Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 14 (`CHG-PROC-32`)
| Column | Value |
|---|---|
| `scheme` | PNB Max-Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 15 (`CHG-PROC-38`)
| Column | Value |
|---|---|
| `scheme` | PNB Max-Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 1 |
| `tenure_months_max` | 120 |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 16 (`CHG-PROC-41`)
| Column | Value |
|---|---|
| `scheme` | PNB Max-Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 1 |
| `tenure_months_max` | 120 |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 17 (`CHG-PROC-47`)
| Column | Value |
|---|---|
| `scheme` | PNB Max-Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 121 |
| `tenure_months_max` | 360 |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 18 (`CHG-PROC-50`)
| Column | Value |
|---|---|
| `scheme` | PNB Max-Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 121 |
| `tenure_months_max` | 360 |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 19 (`CHG-PROC-28`)
| Column | Value |
|---|---|
| `scheme` | PNB Max-Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0% (store as 0) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 20 (`CHG-PROC-33`)
| Column | Value |
|---|---|
| `scheme` | PNB Max-Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0% (store as 0) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 21 (`CHG-PROC-37`)
| Column | Value |
|---|---|
| `scheme` | PNB Max-Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 1 |
| `tenure_months_max` | 120 |
| `charge_type` | Percentage |
| `percentage` | 0% (store as 0) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 22 (`CHG-PROC-42`)
| Column | Value |
|---|---|
| `scheme` | PNB Max-Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 1 |
| `tenure_months_max` | 120 |
| `charge_type` | Percentage |
| `percentage` | 0% (store as 0) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 23 (`CHG-PROC-46`)
| Column | Value |
|---|---|
| `scheme` | PNB Max-Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 121 |
| `tenure_months_max` | 360 |
| `charge_type` | Percentage |
| `percentage` | 0% (store as 0) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 24 (`CHG-PROC-51`)
| Column | Value |
|---|---|
| `scheme` | PNB Max-Saver |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹1,000,000,000 |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 121 |
| `tenure_months_max` | 360 |
| `charge_type` | Percentage |
| `percentage` | 0% (store as 0) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 25 (`CHG-PROC-56`)
| Column | Value |
|---|---|
| `scheme` | Top-up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 26 (`CHG-PROC-58`)
| Column | Value |
|---|---|
| `scheme` | Top-up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 1 |
| `tenure_months_max` | 120 |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 27 (`CHG-PROC-60`)
| Column | Value |
|---|---|
| `scheme` | Top-up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 121 |
| `tenure_months_max` | 360 |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 28 (`CHG-PROC-55`)
| Column | Value |
|---|---|
| `scheme` | Top-up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 29 (`CHG-PROC-57`)
| Column | Value |
|---|---|
| `scheme` | Top-up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 1 |
| `tenure_months_max` | 120 |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 30 (`CHG-PROC-59`)
| Column | Value |
|---|---|
| `scheme` | Top-up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | Yes |
| `tenure_months_min` | 121 |
| `tenure_months_max` | 360 |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹2,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

### Step D — Bank-specific

- **OPTIONAL TIGHTEN:** Many rows repeat same 0.35% / 0% across fixed+floating and tenure bands where fee is identical. Safe to merge if tenure/rate do not change fee per your sheet.

---

## RBL Bank

**Your Processing fees sheet says:**
> Housing loan / 2.00% or INR.15,000/- whichever is higher

| | Count |
|---|---:|
| Rows in master now | 12 |
| Rows to **keep** after cleanup | 2 |
| Rows to **delete** | 10 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-1030`, `CHG-PROC-1032`, `CHG-PROC-1034`, `CHG-PROC-1036`, `CHG-PROC-1038`, `CHG-PROC-1031`, `CHG-PROC-1033`, `CHG-PROC-1035`, `CHG-PROC-1037`, `CHG-PROC-1039`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-1028`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 2% (store as 0.02) |
| `fixed_amount` | blank |
| `charge_min` | ₹15,000 |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-1029`)
| Column | Value |
|---|---|
| `scheme` | Housing Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 2% (store as 0.02) |
| `fixed_amount` | blank |
| `charge_min` | ₹15,000 |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## South Indian Bank

**Your Processing fees sheet says:**
> SIB Home loan /  0.50% +GST of the loan amount, subject to a minimum amount of Rs. 10000.00 + GST and maximum of Rs. 50000.00 + GST

| | Count |
|---|---:|
| Rows in master now | 6 |
| Rows to **keep** after cleanup | 1 |
| Rows to **delete** | 5 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-1041`, `CHG-PROC-1042`, `CHG-PROC-1043`, `CHG-PROC-1044`, `CHG-PROC-1045`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-1040`)
| Column | Value |
|---|---|
| `scheme` | SIB Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹10,000 |
| `charge_max` | ₹50,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## State Bank of India

**Your Processing fees sheet says:**
> Top Up Loan (Maxgain), Top Up Loan, Home Loan, Home Loan Maxgain /  / For Salaried Customer: / 0.35% of the loan amount, minimum / Rs.5,000/- and maximum of Rs. / 15,000/- plus GST / For Non-Salaried Customers: / 0.35% of the loan amount, minimum / Rs.5,000/- and maximum of Rs. / 18,000/- plus GST

| | Count |
|---|---:|
| Rows in master now | 72 |
| Rows to **keep** after cleanup | 8 |
| Rows to **delete** | 64 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-615`, `CHG-PROC-616`, `CHG-PROC-617`, `CHG-PROC-618`, `CHG-PROC-619`, `CHG-PROC-620`, `CHG-PROC-621`, `CHG-PROC-622`, `CHG-PROC-624`, `CHG-PROC-625`, `CHG-PROC-626`, `CHG-PROC-627`, `CHG-PROC-628`, `CHG-PROC-629`, `CHG-PROC-630`, `CHG-PROC-631`, `CHG-PROC-633`, `CHG-PROC-634`, `CHG-PROC-635`, `CHG-PROC-636`, `CHG-PROC-637`, `CHG-PROC-638`, `CHG-PROC-639`, `CHG-PROC-640`, `CHG-PROC-642`

… and **39** more duplicate IDs for this bank.

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-614`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-623`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹18,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-632`)
| Column | Value |
|---|---|
| `scheme` | Home Loan Maxgain |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-677`)
| Column | Value |
|---|---|
| `scheme` | Home Loan Maxgain |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹18,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 5 (`CHG-PROC-641`)
| Column | Value |
|---|---|
| `scheme` | Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 6 (`CHG-PROC-650`)
| Column | Value |
|---|---|
| `scheme` | Top Up Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹18,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 7 (`CHG-PROC-659`)
| Column | Value |
|---|---|
| `scheme` | Top Up Loan (Maxgain) |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 8 (`CHG-PROC-668`)
| Column | Value |
|---|---|
| `scheme` | Top Up Loan (Maxgain) |
| `purpose` | Top-up Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.35% (store as 0.0035) |
| `fixed_amount` | blank |
| `charge_min` | ₹5,000 |
| `charge_max` | ₹18,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

### Step D — Bank-specific

- **EXTRA ACTION:** Maxgain OD rows must NOT have `occupation` = Any with two different maxes. Use: Salaried → max ₹15,000; Self-Employed → max ₹18,000. Delete duplicate Any-occupation rows.

---

## Tamilnad Mercantile Bank

**Your Processing fees sheet says:**
> Elite home loan  / 0.5% of loan

| | Count |
|---|---:|
| Rows in master now | 7 |
| Rows to **keep** after cleanup | 1 |
| Rows to **delete** | 6 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-1164`, `CHG-PROC-1165`, `CHG-PROC-1166`, `CHG-PROC-1167`, `CHG-PROC-1168`, `CHG-PROC-1169`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-1163`)
| Column | Value |
|---|---|
| `scheme` | Elite Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## UCO Bank

**Your Processing fees sheet says:**
> UCO Home, UCO Top Up Home Loan / 0.50% of the loan amount (Min. Rs 1,500 and Max. Rs 15,000

| | Count |
|---|---:|
| Rows in master now | 14 |
| Rows to **keep** after cleanup | 2 |
| Rows to **delete** | 12 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-740`, `CHG-PROC-741`, `CHG-PROC-742`, `CHG-PROC-743`, `CHG-PROC-744`, `CHG-PROC-745`, `CHG-PROC-746`, `CHG-PROC-748`, `CHG-PROC-749`, `CHG-PROC-750`, `CHG-PROC-751`, `CHG-PROC-752`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-739`)
| Column | Value |
|---|---|
| `scheme` | UCO Home |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹1,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-747`)
| Column | Value |
|---|---|
| `scheme` | UCO Top Up Home Loan |
| `purpose` | Top-up Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | ₹1,500 |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

## Union Bank of India

**Your Processing fees sheet says:**
> Union Home / Union Home - Smart Save / 0.50% of the loan amount subject to a maximum of Rs. 15000 plus GST

| | Count |
|---|---:|
| Rows in master now | 32 |
| Rows to **keep** after cleanup | 8 |
| Rows to **delete** | 24 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-205`, `CHG-PROC-206`, `CHG-PROC-207`, `CHG-PROC-208`, `CHG-PROC-209`, `CHG-PROC-210`, `CHG-PROC-213`, `CHG-PROC-214`, `CHG-PROC-215`, `CHG-PROC-216`, `CHG-PROC-217`, `CHG-PROC-218`, `CHG-PROC-220`, `CHG-PROC-221`, `CHG-PROC-222`, `CHG-PROC-223`, `CHG-PROC-224`, `CHG-PROC-225`, `CHG-PROC-227`, `CHG-PROC-228`, `CHG-PROC-229`, `CHG-PROC-230`, `CHG-PROC-231`, `CHG-PROC-232`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-233`)
| Column | Value |
|---|---|
| `scheme` | Union Home |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹1 |
| `loan_amount_max` | ₹3,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 2 (`CHG-PROC-234`)
| Column | Value |
|---|---|
| `scheme` | Union Home |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹3,000,001 |
| `loan_amount_max` | ₹5,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 3 (`CHG-PROC-235`)
| Column | Value |
|---|---|
| `scheme` | Union Home |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Fixed |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | Yes |
| `loan_amount_min` | ₹5,000,001 |
| `loan_amount_max` | ₹20,000,000 |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 4 (`CHG-PROC-204`)
| Column | Value |
|---|---|
| `scheme` | Union Home |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 5 (`CHG-PROC-211`)
| Column | Value |
|---|---|
| `scheme` | Union Home |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Central/State/PSU employees and Pensioners |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 6 (`CHG-PROC-212`)
| Column | Value |
|---|---|
| `scheme` | Union Home |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 7 (`CHG-PROC-219`)
| Column | Value |
|---|---|
| `scheme` | Union Home - Smart Save |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Salaried |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

#### Keep row 8 (`CHG-PROC-226`)
| Column | Value |
|---|---|
| `scheme` | Union Home - Smart Save |
| `purpose` | Regular Home Loan |
| `facility_type` | Overdraft |
| `rate_type` | Floating |
| `occupation` | Self-Employed |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 0.5% (store as 0.005) |
| `fixed_amount` | blank |
| `charge_min` | blank |
| `charge_max` | ₹15,000 |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

### Step D — Bank-specific

- **OPTIONAL TIGHTEN:** All rows are 0.5% max ₹15,000. Can reduce to 2 rows: Union Home (Term Loan) + Union Home Smart Save (Overdraft).

---

## Yes Bank

**Your Processing fees sheet says:**
> Home loan / 1% of the loan amount or 10000 which ever is higher

| | Count |
|---|---:|
| Rows in master now | 6 |
| Rows to **keep** after cleanup | 1 |
| Rows to **delete** | 5 |

### Step A — Set CIBIL cells on ALL rows (before deleting)

| Column | Set to |
|---|---|
| `cibil_band_applicable` | `No` |
| `cibil_band_score_min` | *(empty)* |
| `cibil_band_score_max` | *(empty)* |

### Step B — Delete these duplicate rows (same fee after CIBIL cleared)

Delete `charge_row_id`: `CHG-PROC-1152`, `CHG-PROC-1153`, `CHG-PROC-1154`, `CHG-PROC-1155`, `CHG-PROC-1156`

### Step C — Rows to **keep** (cell values)

#### Keep row 1 (`CHG-PROC-1151`)
| Column | Value |
|---|---|
| `scheme` | Home Loan |
| `purpose` | Regular Home Loan |
| `facility_type` | Term Loan |
| `rate_type` | Floating |
| `occupation` | Any |
| `borrower_category` | Any |
| `loan_amount_band_applicable` | blank |
| `loan_amount_min` | blank |
| `loan_amount_max` | blank |
| `tenure_band_applicable` | blank |
| `tenure_months_min` | blank |
| `tenure_months_max` | blank |
| `charge_type` | Percentage |
| `percentage` | 1% (store as 0.01) |
| `fixed_amount` | blank |
| `charge_min` | ₹10,000 |
| `charge_max` | blank |
| `valid_from` | blank |
| `valid_till` | blank |
| `cibil_band_applicable` | No |
| `cibil_band_score_min` | blank |
| `cibil_band_score_max` | blank |

---

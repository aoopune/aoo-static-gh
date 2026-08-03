# Home loan rate audit — line by line

**Source:** `Home loans - Banks ROI 23_06_26 (formatted).xlsx` (bank sheets)
**Master:** `HOME_LOANS_COMPARE_v1.xlsx` → sheet `Offers` → column `roi`
**Ignored:** PNB Housing Finance, LIC Housing Finance

Source rates are percent (e.g. 7.35). Master `roi` is stored as a fraction and shown here as percent.

## Summary

| Bank | Src lines | Master rows | Verdict | Matched | Unmatched src | Unmatched master |
|---|---:|---:|---|---:|---:|---:|
| Axis Bank | 12 | 24 | `RATES_OK_ROW_EXPANSION` | 12 | 0 | 12 |
| Bandhan Bank | 6 | 6 | `PERFECT_LINE_MATCH` | 6 | 0 | 0 |
| Bank of Baroda | 90 | 240 | `SOURCE_COVERED_MASTER_EXTRAS` | 90 | 0 | 150 |
| Bank of India | 64 | 128 | `RATES_OK_ROW_EXPANSION` | 64 | 0 | 64 |
| Bank of Maharashtra | 66 | 53 | `SOURCE_COVERED_MASTER_EXTRAS` | 50 | 16 | 3 |
| Canara Bank | 25 | 25 | `PERFECT_LINE_MATCH` | 25 | 0 | 0 |
| Central Bank of India | 15 | 15 | `PERFECT_LINE_MATCH` | 15 | 0 | 0 |
| City Union Bank | 18 | 18 | `PERFECT_LINE_MATCH` | 18 | 0 | 0 |
| CSB Bank | 6 | 6 | `PERFECT_LINE_MATCH` | 6 | 0 | 0 |
| DCB Bank | 6 | 6 | `PERFECT_LINE_MATCH` | 6 | 0 | 0 |
| Dhanlaxmi Bank | 7 | 7 | `PERFECT_LINE_MATCH` | 7 | 0 | 0 |
| Federal Bank | 6 | 6 | `PERFECT_LINE_MATCH` | 6 | 0 | 0 |
| HDFC Bank | 6 | 6 | `PERFECT_LINE_MATCH` | 6 | 0 | 0 |
| ICICI Bank | 12 | 24 | `RATES_OK_ROW_EXPANSION` | 12 | 0 | 12 |
| IDBI Bank | 21 | 84 | `RATES_OK_ROW_EXPANSION` | 21 | 0 | 63 |
| IDFC FIRST Bank | 5 | 5 | `PERFECT_LINE_MATCH` | 5 | 0 | 0 |
| Indian Bank | 12 | 36 | `RATES_OK_ROW_EXPANSION` | 12 | 0 | 24 |
| Indian Overseas Bank | 35 | 46 | `SOURCE_COVERED_MASTER_EXTRAS` | 35 | 0 | 11 |
| IndusInd Bank | 7 | 14 | `RATES_OK_ROW_EXPANSION` | 7 | 0 | 7 |
| Jammu and Kashmir Bank | 5 | 5 | `PERFECT_LINE_MATCH` | 5 | 0 | 0 |
| Karnataka Bank | 6 | 6 | `PERFECT_LINE_MATCH` | 6 | 0 | 0 |
| Karur Vysya Bank | 10 | 30 | `RATES_OK_ROW_EXPANSION` | 10 | 0 | 20 |
| Kotak Mahindra Bank | 6 | 12 | `RATES_OK_ROW_EXPANSION` | 6 | 0 | 6 |
| Nainital Bank | 16 | 105 | `MISMATCH` | 2 | 14 | 103 |
| Punjab & Sind Bank | 21 | 42 | `RATES_OK_ROW_EXPANSION` | 21 | 0 | 21 |
| Punjab National Bank | 60 | 60 | `PERFECT_LINE_MATCH` | 60 | 0 | 0 |
| RBL Bank | 6 | 12 | `RATES_OK_ROW_EXPANSION` | 6 | 0 | 6 |
| South Indian Bank | 6 | 6 | `PERFECT_LINE_MATCH` | 6 | 0 | 0 |
| State Bank of India | 63 | 63 | `PERFECT_LINE_MATCH` | 63 | 0 | 0 |
| Tamilnad Mercantile Bank | 7 | 7 | `PERFECT_LINE_MATCH` | 7 | 0 | 0 |
| UCO Bank | 14 | 14 | `PERFECT_LINE_MATCH` | 14 | 0 | 0 |
| Union Bank of India | 32 | 32 | `PERFECT_LINE_MATCH` | 32 | 0 | 0 |
| Yes Bank | 6 | 6 | `PERFECT_LINE_MATCH` | 6 | 0 | 0 |

### Verdict counts
- `MISMATCH`: **1** banks
- `PERFECT_LINE_MATCH`: **19** banks
- `RATES_OK_ROW_EXPANSION`: **10** banks
- `SOURCE_COVERED_MASTER_EXTRAS`: **3** banks

---

## Axis Bank

- Sheet: `Axis Bank`
- Source Final/ROI lines: **12**
- Master Offers rows: **24**
- Verdict: `RATES_OK_ROW_EXPANSION`
- Source unique rates (%): `[7.2, 7.35, 7.6, 7.75, 8.0, 8.1, 8.4, 8.7, 9.05, 9.1, 9.45]`
- Master unique `roi` (%): `[7.2, 7.35, 7.6, 7.75, 8.0, 8.1, 8.4, 8.7, 9.05, 9.1, 9.45]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.2%** [Final rate]
- mst R791 (OFF-1140): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.2%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.35%** [Final rate]
- mst R793 (OFF-1142): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.35%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **7.6%** [Final rate]
- mst R795 (OFF-1144): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.0%** [Final rate]
- mst R797 (OFF-1146): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.0%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **8.7%** [Final rate]
- mst R799 (OFF-1148): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **8.7%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R28: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **9.05%** [Final rate]
- mst R801 (OFF-1150): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **9.05%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R35: Supre Saver Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.6%** [Final rate]
- mst R803 (OFF-1152): Super Saver Home Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R36: Supre Saver Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.75%** [Final rate]
- mst R805 (OFF-1154): Super Saver Home Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R37: Supre Saver Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **8.1%** [Final rate]
- mst R807 (OFF-1156): Super Saver Home Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **8.1%** (women=None green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R38: Supre Saver Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.4%** [Final rate]
- mst R809 (OFF-1158): Super Saver Home Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.4%** (women=None green=None ins=None insFlag=No)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R39: Supre Saver Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **9.1%** [Final rate]
- mst R811 (OFF-1160): Super Saver Home Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **9.1%** (women=None green=None ins=None insFlag=No)

#### 12. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R40: Supre Saver Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **9.45%** [Final rate]
- mst R813 (OFF-1162): Super Saver Home Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **9.45%** (women=None green=None ins=None insFlag=No)

### Master rows with no source match (12)

- mst R792 (OFF-1141): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.2%** (women=None green=None ins=None insFlag=No)
- mst R794 (OFF-1143): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.35%** (women=None green=None ins=None insFlag=No)
- mst R796 (OFF-1145): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)
- mst R798 (OFF-1147): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.0%** (women=None green=None ins=None insFlag=No)
- mst R800 (OFF-1149): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **8.7%** (women=None green=None ins=None insFlag=No)
- mst R802 (OFF-1151): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **9.05%** (women=None green=None ins=None insFlag=No)
- mst R804 (OFF-1153): Super Saver Home Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)
- mst R806 (OFF-1155): Super Saver Home Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)
- mst R808 (OFF-1157): Super Saver Home Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **8.1%** (women=None green=None ins=None insFlag=No)
- mst R810 (OFF-1159): Super Saver Home Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.4%** (women=None green=None ins=None insFlag=No)
- mst R812 (OFF-1161): Super Saver Home Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **9.1%** (women=None green=None ins=None insFlag=No)
- mst R814 (OFF-1163): Super Saver Home Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **9.45%** (women=None green=None ins=None insFlag=No)

---

## Bandhan Bank

- Sheet: `Bandhan Bank`
- Source Final/ROI lines: **6**
- Master Offers rows: **6**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[7.4, 7.65, 8.25, 8.45, 8.85, 9.25]`
- Master unique `roi` (%): `[7.4, 7.65, 8.25, 8.45, 8.85, 9.25]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Suraksha Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.4%** [Final rate]
- mst R767 (OFF-1116): Suraksha Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.4%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Suraksha Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.65%** [Final rate]
- mst R768 (OFF-1117): Suraksha Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.65%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Suraksha Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **8.25%** [Final rate]
- mst R769 (OFF-1118): Suraksha Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Suraksha Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.45%** [Final rate]
- mst R770 (OFF-1119): Suraksha Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.45%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Suraksha Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **8.85%** [Final rate]
- mst R771 (OFF-1120): Suraksha Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **8.85%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R28: Suraksha Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **9.25%** [Final rate]
- mst R772 (OFF-1121): Suraksha Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **9.25%** (women=None green=None ins=None insFlag=No)

---

## Bank of Baroda

- Sheet: `Bank of Baroda`
- Source Final/ROI lines: **90**
- Master Offers rows: **240**
- Verdict: `SOURCE_COVERED_MASTER_EXTRAS`
- Source unique rates (%): `[7.2, 7.3, 7.4, 7.45, 7.55, 7.65, 7.7, 7.75, 7.9, 7.95, 8.0, 8.15, 8.3, 8.5, 8.55, 8.75, 8.9, 8.95, 9.0, 9.05, 9.15, 9.2, 9.25, 9.3, 9.4, 9.45, 9.5, 9.55, 9.6, 9.65, 9.7, 9.8, 9.85, 9.9, 9.95, 10.05, 10.2]`
- Master unique `roi` (%): `[7.2, 7.3, 7.4, 7.45, 7.55, 7.65, 7.7, 7.747, 7.75, 7.9, 7.95, 8.0, 8.05, 8.15, 8.25, 8.3, 8.4, 8.5, 8.55, 8.597, 8.6, 8.75, 8.753, 8.8, 8.85, 8.9, 8.95, 9.0, 9.05, 9.15, 9.2, 9.25, 9.3, 9.35, 9.4, 9.45, 9.5, 9.55, 9.6, 9.603, 9.65, 9.7, 9.75, 9.8, 9.85, 9.9, 9.95, 10.0, 10.05, 10.1, 10.15, 10.2, 10.25, 10.3, 10.35, 10.4, 10.45, 10.5, 10.55, 10.65, 10.7, 10.75, 10.8, 10.9, 11.05]`
- **Master `roi` values not in source Final set:** `[7.747, 8.05, 8.25, 8.4, 8.597, 8.6, 8.753, 8.8, 8.85, 9.35, 9.603, 9.75, 10.0, 10.1, 10.15, 10.25, 10.3, 10.35, 10.4, 10.45, 10.5, 10.55, 10.65, 10.7, 10.75, 10.8, 10.9, 11.05]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R40: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Salaried | label=825+ | cibil~825-900 | cond=None | **8.9%** [Final rate]
- mst R247 (OFF-390): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=825-900 | loan=1-5000000 | ten=None-None | **8.9%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R41: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Salaried | label=800 - 824 | cibil~800-824 | cond=None | **9.0%** [Final rate]
- mst R248 (OFF-391): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=800-824 | loan=1-5000000 | ten=None-None | **9.0%** (women=None green=8.9 ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R42: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Salaried | label=751 - 799 | cibil~751-799 | cond=None | **9.15%** [Final rate]
- mst R249 (OFF-392): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=751-799 | loan=1-5000000 | ten=None-None | **9.15%** (women=None green=9.05 ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R43: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Salaried | label=726 - 750 | cibil~726-750 | cond=None | **9.3%** [Final rate]
- mst R250 (OFF-393): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=726-750 | loan=1-5000000 | ten=None-None | **9.3%** (women=None green=9.2 ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R44: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Salaried | label=701 - 725 | cibil~701-725 | cond=None | **9.4%** [Final rate]
- mst R251 (OFF-394): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=701-725 | loan=1-5000000 | ten=None-None | **9.4%** (women=None green=9.3 ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R45: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Salaried | label=676 - 700 | cibil~676-700 | cond=None | **9.6%** [Final rate]
- mst R252 (OFF-395): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=676-700 | loan=1-5000000 | ten=None-None | **9.6%** (women=None green=9.5 ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R46: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Salaried | label=650 - 675 | cibil~650-675 | cond=None | **9.65%** [Final rate]
- mst R253 (OFF-396): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=650-675 | loan=1-5000000 | ten=None-None | **9.65%** (women=None green=9.55 ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R47: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Salaried | label=625 - 649 | cibil~625-649 | cond=None | **9.8%** [Final rate]
- mst R254 (OFF-397): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=625-649 | loan=1-5000000 | ten=None-None | **9.8%** (women=None green=9.7 ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R48: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Salaried | label=600 - 624 | cibil~600-624 | cond=None | **9.95%** [Final rate]
- mst R255 (OFF-398): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=600-624 | loan=1-5000000 | ten=None-None | **9.95%** (women=None green=9.85 ins=None insFlag=No)

#### 10. [OK] Δ=-0.003%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R49: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Salaried | label=-1 | cibil~-1-0 | cond=None | **7.75%** [Final rate]
- mst R256 (OFF-399): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=-1-0 | loan=1-5000000 | ten=None-None | **7.747%** (women=None green=7.647 ins=None insFlag=No)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R52: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Self - Employed | label=825+ | cibil~825-900 | cond=None | **9.0%** [Final rate]
- mst R257 (OFF-400): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=825-900 | loan=1-5000000 | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)

#### 12. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R53: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Self - Employed | label=800 - 824 | cibil~800-824 | cond=None | **9.05%** [Final rate]
- mst R258 (OFF-401): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=800-824 | loan=1-5000000 | ten=None-None | **9.05%** (women=None green=8.95 ins=None insFlag=No)

#### 13. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R54: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Self - Employed | label=751 - 799 | cibil~751-799 | cond=None | **9.15%** [Final rate]
- mst R259 (OFF-402): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=751-799 | loan=1-5000000 | ten=None-None | **9.15%** (women=None green=9.05 ins=None insFlag=No)

#### 14. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R55: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Self - Employed | label=726 - 750 | cibil~726-750 | cond=None | **9.25%** [Final rate]
- mst R260 (OFF-403): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=726-750 | loan=1-5000000 | ten=None-None | **9.25%** (women=None green=9.15 ins=None insFlag=No)

#### 15. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R56: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Self - Employed | label=701 - 725 | cibil~701-725 | cond=None | **9.3%** [Final rate]
- mst R261 (OFF-404): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=701-725 | loan=1-5000000 | ten=None-None | **9.3%** (women=None green=9.2 ins=None insFlag=No)

#### 16. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R57: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Self - Employed | label=676 - 700 | cibil~676-700 | cond=None | **9.45%** [Final rate]
- mst R262 (OFF-405): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=676-700 | loan=1-5000000 | ten=None-None | **9.45%** (women=None green=9.35 ins=None insFlag=No)

#### 17. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R58: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Self - Employed | label=650 - 675 | cibil~650-675 | cond=None | **9.55%** [Final rate]
- mst R263 (OFF-406): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=650-675 | loan=1-5000000 | ten=None-None | **9.55%** (women=None green=9.45 ins=None insFlag=No)

#### 18. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R59: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Self - Employed | label=625 - 649 | cibil~625-649 | cond=None | **9.8%** [Final rate]
- mst R264 (OFF-407): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=625-649 | loan=1-5000000 | ten=None-None | **9.8%** (women=None green=9.7 ins=None insFlag=No)

#### 19. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R60: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Self - Employed | label=600 - 624 | cibil~600-624 | cond=None | **9.95%** [Final rate]
- mst R265 (OFF-408): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=600-624 | loan=1-5000000 | ten=None-None | **9.95%** (women=None green=9.85 ins=None insFlag=No)

#### 20. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R61: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Fixed | occ=Self - Employed | label=-1 | cibil~-1-0 | cond=None | **7.75%** [Final rate]
- mst R266 (OFF-409): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=1-5000000 | ten=None-None | **7.75%** (women=None green=7.65 ins=None insFlag=No)

#### 21. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=825+ | cibil~825-900 | cond=None | **7.2%** [Final rate]
- mst R237 (OFF-380): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=825-900 | loan=1-5000000 | ten=None-None | **7.2%** (women=None green=None ins=7.25 insFlag=Yes)

#### 22. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800 - 824 | cibil~800-824 | cond=None | **7.3%** [Final rate]
- mst R238 (OFF-381): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-824 | loan=1-5000000 | ten=None-None | **7.3%** (women=None green=7.2 ins=7.35 insFlag=Yes)

#### 23. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=751 - 799 | cibil~751-799 | cond=None | **7.4%** [Final rate]
- mst R239 (OFF-382): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=751-799 | loan=1-5000000 | ten=None-None | **7.4%** (women=None green=7.3 ins=7.45 insFlag=Yes)

#### 24. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=726 - 750 | cibil~726-750 | cond=None | **7.65%** [Final rate]
- mst R240 (OFF-383): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=726-750 | loan=1-5000000 | ten=None-None | **7.65%** (women=None green=7.55 ins=7.7 insFlag=Yes)

#### 25. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=701 - 725 | cibil~701-725 | cond=None | **7.7%** [Final rate]
- mst R241 (OFF-384): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=701-725 | loan=1-5000000 | ten=None-None | **7.7%** (women=None green=7.6 ins=7.75 insFlag=Yes)

#### 26. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R28: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=676 - 700 | cibil~676-700 | cond=None | **7.9%** [Final rate]
- mst R242 (OFF-385): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=676-700 | loan=1-5000000 | ten=None-None | **7.9%** (women=None green=7.8 ins=7.95 insFlag=Yes)

#### 27. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R29: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 675 | cibil~650-675 | cond=None | **8.3%** [Final rate]
- mst R243 (OFF-386): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-675 | loan=1-5000000 | ten=None-None | **8.3%** (women=None green=8.2 ins=8.35 insFlag=Yes)

#### 28. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R30: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=625 - 649 | cibil~625-649 | cond=None | **8.5%** [Final rate]
- mst R244 (OFF-387): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=625-649 | loan=1-5000000 | ten=None-None | **8.5%** (women=None green=8.4 ins=8.55 insFlag=Yes)

#### 29. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R31: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 624 | cibil~600-624 | cond=None | **8.95%** [Final rate]
- mst R245 (OFF-388): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-624 | loan=1-5000000 | ten=None-None | **8.95%** (women=None green=8.85 ins=9.0 insFlag=Yes)

#### 30. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R32: Baroda Home Loan, Baroda Home Improvement Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=-1 | cibil~-1-0 | cond=None | **7.75%** [Final rate]
- mst R246 (OFF-389): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=-1-0 | loan=1-5000000 | ten=None-None | **7.75%** (women=None green=7.65 ins=7.8 insFlag=Yes)

#### 31. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R101: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=825+ | cibil~825-900 | cond=Loan amount upto Rs. 75 lakhs | **8.9%** [Final rate]
- mst R287 (OFF-430): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=825-900 | loan=1-5000000 | ten=None-None | **8.9%** (women=None green=None ins=8.95 insFlag=Yes)

#### 32. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R102: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=800 - 824 | cibil~800-824 | cond=Loan amount upto Rs. 75 lakhs | **9.0%** [Final rate]
- mst R288 (OFF-431): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=800-824 | loan=1-5000000 | ten=None-None | **9.0%** (women=None green=8.9 ins=9.05 insFlag=Yes)

#### 33. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R103: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=751 - 799 | cibil~751-799 | cond=Loan amount upto Rs. 75 lakhs | **9.15%** [Final rate]
- mst R289 (OFF-432): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=751-799 | loan=1-5000000 | ten=None-None | **9.15%** (women=None green=9.05 ins=9.2 insFlag=Yes)

#### 34. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R104: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=726 - 750 | cibil~726-750 | cond=Loan amount upto Rs. 75 lakhs | **9.3%** [Final rate]
- mst R290 (OFF-433): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=726-750 | loan=1-5000000 | ten=None-None | **9.3%** (women=None green=9.2 ins=9.35 insFlag=Yes)

#### 35. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R105: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=701 - 725 | cibil~701-725 | cond=Loan amount upto Rs. 75 lakhs | **9.4%** [Final rate]
- mst R291 (OFF-434): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=701-725 | loan=1-5000000 | ten=None-None | **9.4%** (women=None green=9.3 ins=9.45 insFlag=Yes)

#### 36. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R106: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=676 - 700 | cibil~676-700 | cond=Loan amount upto Rs. 75 lakhs | **9.6%** [Final rate]
- mst R292 (OFF-435): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=676-700 | loan=1-5000000 | ten=None-None | **9.6%** (women=None green=9.5 ins=9.65 insFlag=Yes)

#### 37. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R107: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=650 - 675 | cibil~650-675 | cond=Loan amount upto Rs. 75 lakhs | **9.65%** [Final rate]
- mst R293 (OFF-436): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=650-675 | loan=1-5000000 | ten=None-None | **9.65%** (women=None green=9.55 ins=9.7 insFlag=Yes)

#### 38. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R108: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=625 - 649 | cibil~625-649 | cond=Loan amount upto Rs. 75 lakhs | **9.8%** [Final rate]
- mst R294 (OFF-437): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=625-649 | loan=1-5000000 | ten=None-None | **9.8%** (women=None green=9.7 ins=9.85 insFlag=Yes)

#### 39. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R109: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=600 - 624 | cibil~600-624 | cond=Loan amount upto Rs. 75 lakhs | **9.95%** [Final rate]
- mst R295 (OFF-438): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=600-624 | loan=1-5000000 | ten=None-None | **9.95%** (women=None green=9.85 ins=10.0 insFlag=Yes)

#### 40. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R110: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=-1 | cibil~-1-0 | cond=Loan amount upto Rs. 75 lakhs | **7.75%** [Final rate]
- mst R296 (OFF-439): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=-1-0 | loan=1-5000000 | ten=None-None | **7.75%** (women=None green=7.65 ins=7.8 insFlag=Yes)

#### 41. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R113: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=825+ | cibil~825-900 | cond=Loan amount upto Rs. 75 lakhs | **9.0%** [Final rate]
- mst R297 (OFF-440): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=825-900 | loan=1-5000000 | ten=None-None | **9.0%** (women=None green=None ins=9.05 insFlag=Yes)

#### 42. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R114: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=800 - 824 | cibil~800-824 | cond=Loan amount upto Rs. 75 lakhs | **9.05%** [Final rate]
- mst R298 (OFF-441): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=800-824 | loan=1-5000000 | ten=None-None | **9.05%** (women=None green=None ins=9.1 insFlag=Yes)

#### 43. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R115: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=751 - 799 | cibil~751-799 | cond=Loan amount upto Rs. 75 lakhs | **9.15%** [Final rate]
- mst R299 (OFF-442): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=751-799 | loan=1-5000000 | ten=None-None | **9.15%** (women=None green=9.05 ins=9.2 insFlag=Yes)

#### 44. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R116: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=726 - 750 | cibil~726-750 | cond=Loan amount upto Rs. 75 lakhs | **9.25%** [Final rate]
- mst R300 (OFF-443): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=726-750 | loan=1-5000000 | ten=None-None | **9.25%** (women=None green=9.15 ins=9.3 insFlag=Yes)

#### 45. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R117: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=701 - 725 | cibil~701-725 | cond=Loan amount upto Rs. 75 lakhs | **9.3%** [Final rate]
- mst R301 (OFF-444): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=701-725 | loan=1-5000000 | ten=None-None | **9.3%** (women=None green=9.2 ins=9.35 insFlag=Yes)

#### 46. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R118: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=676 - 700 | cibil~676-700 | cond=Loan amount upto Rs. 75 lakhs | **9.45%** [Final rate]
- mst R302 (OFF-445): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=676-700 | loan=1-5000000 | ten=None-None | **9.45%** (women=None green=9.35 ins=9.5 insFlag=Yes)

#### 47. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R119: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=650 - 675 | cibil~650-675 | cond=Loan amount upto Rs. 75 lakhs | **9.55%** [Final rate]
- mst R303 (OFF-446): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=650-675 | loan=1-5000000 | ten=None-None | **9.55%** (women=None green=9.45 ins=9.6 insFlag=Yes)

#### 48. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R120: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=625 - 649 | cibil~625-649 | cond=Loan amount upto Rs. 75 lakhs | **9.8%** [Final rate]
- mst R304 (OFF-447): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=625-649 | loan=1-5000000 | ten=None-None | **9.8%** (women=None green=9.7 ins=9.85 insFlag=Yes)

#### 49. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R121: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=600 - 624 | cibil~600-624 | cond=Loan amount upto Rs. 75 lakhs | **9.95%** [Final rate]
- mst R305 (OFF-448): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=600-624 | loan=1-5000000 | ten=None-None | **9.95%** (women=None green=9.85 ins=10.0 insFlag=Yes)

#### 50. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R122: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=-1 | cibil~-1-0 | cond=Loan amount upto Rs. 75 lakhs | **7.75%** [Final rate]
- mst R306 (OFF-449): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=1-5000000 | ten=None-None | **7.75%** (women=None green=7.65 ins=7.8 insFlag=Yes)

#### 51. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R126: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=825+ | cibil~825-900 | cond=Loan amount Above Rs. 75 lakhs | **9.15%** [Final rate]
- mst R307 (OFF-450): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=825-900 | loan=7500001-1000000000 | ten=None-None | **9.15%** (women=None green=None ins=9.2 insFlag=Yes)

#### 52. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R127: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=800 - 824 | cibil~800-824 | cond=Loan amount Above Rs. 75 lakhs | **9.25%** [Final rate]
- mst R308 (OFF-451): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=800-824 | loan=7500001-1000000000 | ten=None-None | **9.25%** (women=None green=9.15 ins=9.3 insFlag=Yes)

#### 53. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R128: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=751 - 799 | cibil~751-799 | cond=Loan amount Above Rs. 75 lakhs | **9.4%** [Final rate]
- mst R309 (OFF-452): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=751-799 | loan=7500001-1000000000 | ten=None-None | **9.4%** (women=None green=9.3 ins=9.45 insFlag=Yes)

#### 54. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R129: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=726 - 750 | cibil~726-750 | cond=Loan amount Above Rs. 75 lakhs | **9.55%** [Final rate]
- mst R310 (OFF-453): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=726-750 | loan=7500001-1000000000 | ten=None-None | **9.55%** (women=None green=9.45 ins=9.6 insFlag=Yes)

#### 55. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R130: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=701 - 725 | cibil~701-725 | cond=Loan amount Above Rs. 75 lakhs | **9.65%** [Final rate]
- mst R311 (OFF-454): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=701-725 | loan=7500001-1000000000 | ten=None-None | **9.65%** (women=None green=9.55 ins=9.7 insFlag=Yes)

#### 56. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R131: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=676 - 700 | cibil~676-700 | cond=Loan amount Above Rs. 75 lakhs | **9.85%** [Final rate]
- mst R312 (OFF-455): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=676-700 | loan=7500001-1000000000 | ten=None-None | **9.85%** (women=None green=9.75 ins=9.9 insFlag=Yes)

#### 57. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R132: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=650 - 675 | cibil~650-675 | cond=Loan amount Above Rs. 75 lakhs | **9.9%** [Final rate]
- mst R313 (OFF-456): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=650-675 | loan=7500001-1000000000 | ten=None-None | **9.9%** (women=None green=9.8 ins=9.95 insFlag=Yes)

#### 58. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R133: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=625 - 649 | cibil~625-649 | cond=Loan amount Above Rs. 75 lakhs | **10.05%** [Final rate]
- mst R314 (OFF-457): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=625-649 | loan=7500001-1000000000 | ten=None-None | **10.05%** (women=None green=9.95 ins=10.1 insFlag=Yes)

#### 59. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R134: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=600 - 624 | cibil~600-624 | cond=Loan amount Above Rs. 75 lakhs | **10.2%** [Final rate]
- mst R315 (OFF-458): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=600-624 | loan=7500001-1000000000 | ten=None-None | **10.2%** (women=None green=10.1 ins=10.25 insFlag=Yes)

#### 60. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R135: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | label=-1 | cibil~-1-0 | cond=Loan amount Above Rs. 75 lakhs | **8.0%** [Final rate]
- mst R316 (OFF-459): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=-1-0 | loan=7500001-1000000000 | ten=None-None | **8.0%** (women=None green=7.9 ins=8.05 insFlag=Yes)

#### 61. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R138: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=825+ | cibil~825-900 | cond=Loan amount Above Rs. 75 lakhs | **9.25%** [Final rate]
- mst R317 (OFF-460): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=825-900 | loan=7500001-1000000000 | ten=None-None | **9.25%** (women=None green=None ins=9.3 insFlag=Yes)

#### 62. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R139: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=800 - 824 | cibil~800-824 | cond=Loan amount Above Rs. 75 lakhs | **9.3%** [Final rate]
- mst R318 (OFF-461): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=800-824 | loan=7500001-1000000000 | ten=None-None | **9.3%** (women=None green=9.2 ins=9.35 insFlag=Yes)

#### 63. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R140: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=751 - 799 | cibil~751-799 | cond=Loan amount Above Rs. 75 lakhs | **9.4%** [Final rate]
- mst R319 (OFF-462): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=751-799 | loan=7500001-1000000000 | ten=None-None | **9.4%** (women=None green=9.3 ins=9.45 insFlag=Yes)

#### 64. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R141: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=726 - 750 | cibil~726-750 | cond=Loan amount Above Rs. 75 lakhs | **9.5%** [Final rate]
- mst R320 (OFF-463): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=726-750 | loan=7500001-1000000000 | ten=None-None | **9.5%** (women=None green=9.4 ins=9.55 insFlag=Yes)

#### 65. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R142: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=701 - 725 | cibil~701-725 | cond=Loan amount Above Rs. 75 lakhs | **9.55%** [Final rate]
- mst R321 (OFF-464): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=701-725 | loan=7500001-1000000000 | ten=None-None | **9.55%** (women=None green=9.45 ins=9.6 insFlag=Yes)

#### 66. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R143: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=676 - 700 | cibil~676-700 | cond=Loan amount Above Rs. 75 lakhs | **9.7%** [Final rate]
- mst R322 (OFF-465): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=676-700 | loan=7500001-1000000000 | ten=None-None | **9.7%** (women=None green=9.6 ins=9.75 insFlag=Yes)

#### 67. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R144: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=650 - 675 | cibil~650-675 | cond=Loan amount Above Rs. 75 lakhs | **9.8%** [Final rate]
- mst R323 (OFF-466): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=650-675 | loan=7500001-1000000000 | ten=None-None | **9.8%** (women=None green=9.7 ins=9.85 insFlag=Yes)

#### 68. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R145: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=625 - 649 | cibil~625-649 | cond=Loan amount Above Rs. 75 lakhs | **10.05%** [Final rate]
- mst R324 (OFF-467): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=625-649 | loan=7500001-1000000000 | ten=None-None | **10.05%** (women=None green=9.95 ins=10.1 insFlag=Yes)

#### 69. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R146: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=600 - 624 | cibil~600-624 | cond=Loan amount Above Rs. 75 lakhs | **10.2%** [Final rate]
- mst R325 (OFF-468): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=600-624 | loan=7500001-1000000000 | ten=None-None | **10.2%** (women=None green=10.1 ins=10.25 insFlag=Yes)

#### 70. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R147: Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | label=-1 | cibil~-1-0 | cond=Loan amount Above Rs. 75 lakhs | **8.0%** [Final rate]
- mst R326 (OFF-469): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=7500001-1000000000 | ten=None-None | **8.0%** (women=None green=7.9 ins=8.05 insFlag=Yes)

#### 71. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R69: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=825+ | cibil~825-900 | cond=Loan amount upto Rs. 75 lakhs | **7.2%** [Final rate]
- mst R267 (OFF-410): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=825-900 | loan=1-5000000 | ten=None-None | **7.2%** (women=None green=None ins=7.25 insFlag=Yes)

#### 72. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R70: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=800 - 824 | cibil~800-824 | cond=Loan amount upto Rs. 75 lakhs | **7.3%** [Final rate]
- mst R268 (OFF-411): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=800-824 | loan=1-5000000 | ten=None-None | **7.3%** (women=None green=7.2 ins=7.35 insFlag=Yes)

#### 73. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R71: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=751 - 799 | cibil~751-799 | cond=Loan amount upto Rs. 75 lakhs | **7.4%** [Final rate]
- mst R269 (OFF-412): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=751-799 | loan=1-5000000 | ten=None-None | **7.4%** (women=None green=7.3 ins=7.45 insFlag=Yes)

#### 74. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R72: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=726 - 750 | cibil~726-750 | cond=Loan amount upto Rs. 75 lakhs | **7.65%** [Final rate]
- mst R270 (OFF-413): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=726-750 | loan=1-5000000 | ten=None-None | **7.65%** (women=None green=7.55 ins=7.7 insFlag=Yes)

#### 75. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R73: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=701 - 725 | cibil~701-725 | cond=Loan amount upto Rs. 75 lakhs | **7.7%** [Final rate]
- mst R271 (OFF-414): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=701-725 | loan=1-5000000 | ten=None-None | **7.7%** (women=None green=7.6 ins=7.75 insFlag=Yes)

#### 76. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R74: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=676 - 700 | cibil~676-700 | cond=Loan amount upto Rs. 75 lakhs | **7.9%** [Final rate]
- mst R272 (OFF-415): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=676-700 | loan=1-5000000 | ten=None-None | **7.9%** (women=None green=7.8 ins=7.95 insFlag=Yes)

#### 77. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R75: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=650 - 675 | cibil~650-675 | cond=Loan amount upto Rs. 75 lakhs | **8.3%** [Final rate]
- mst R273 (OFF-416): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=650-675 | loan=1-5000000 | ten=None-None | **8.3%** (women=None green=8.2 ins=8.35 insFlag=Yes)

#### 78. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R76: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=625 - 649 | cibil~625-649 | cond=Loan amount upto Rs. 75 lakhs | **8.5%** [Final rate]
- mst R274 (OFF-417): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=625-649 | loan=1-5000000 | ten=None-None | **8.5%** (women=None green=8.4 ins=8.55 insFlag=Yes)

#### 79. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R77: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=600 - 624 | cibil~600-624 | cond=Loan amount upto Rs. 75 lakhs | **8.95%** [Final rate]
- mst R275 (OFF-418): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=600-624 | loan=1-5000000 | ten=None-None | **8.95%** (women=None green=8.85 ins=9.0 insFlag=Yes)

#### 80. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R78: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=-1 | cibil~-1-0 | cond=Loan amount upto Rs. 75 lakhs | **7.75%** [Final rate]
- mst R276 (OFF-419): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=-1-0 | loan=1-5000000 | ten=None-None | **7.75%** (women=None green=7.65 ins=7.8 insFlag=Yes)

#### 81. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R82: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=825+ | cibil~825-900 | cond=Loan amount Above Rs. 75 lakhs | **7.45%** [Final rate]
- mst R277 (OFF-420): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=825-900 | loan=7500001-1000000000 | ten=None-None | **7.45%** (women=None green=None ins=7.5 insFlag=Yes)

#### 82. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R83: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=800 - 824 | cibil~800-824 | cond=Loan amount Above Rs. 75 lakhs | **7.55%** [Final rate]
- mst R278 (OFF-421): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=800-824 | loan=7500001-1000000000 | ten=None-None | **7.55%** (women=None green=7.45 ins=7.6 insFlag=Yes)

#### 83. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R84: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=751 - 799 | cibil~751-799 | cond=Loan amount Above Rs. 75 lakhs | **7.65%** [Final rate]
- mst R279 (OFF-422): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=751-799 | loan=7500001-1000000000 | ten=None-None | **7.65%** (women=None green=7.55 ins=7.7 insFlag=Yes)

#### 84. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R85: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=726 - 750 | cibil~726-750 | cond=Loan amount Above Rs. 75 lakhs | **7.9%** [Final rate]
- mst R280 (OFF-423): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=726-750 | loan=7500001-1000000000 | ten=None-None | **7.9%** (women=None green=7.8 ins=7.95 insFlag=Yes)

#### 85. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R86: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=701 - 725 | cibil~701-725 | cond=Loan amount Above Rs. 75 lakhs | **7.95%** [Final rate]
- mst R281 (OFF-424): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=701-725 | loan=7500001-1000000000 | ten=None-None | **7.95%** (women=None green=7.85 ins=8.0 insFlag=Yes)

#### 86. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R87: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=676 - 700 | cibil~676-700 | cond=Loan amount Above Rs. 75 lakhs | **8.15%** [Final rate]
- mst R282 (OFF-425): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=676-700 | loan=7500001-1000000000 | ten=None-None | **8.15%** (women=None green=8.05 ins=8.2 insFlag=Yes)

#### 87. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R88: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=650 - 675 | cibil~650-675 | cond=Loan amount Above Rs. 75 lakhs | **8.55%** [Final rate]
- mst R283 (OFF-426): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=650-675 | loan=7500001-1000000000 | ten=None-None | **8.55%** (women=None green=8.45 ins=8.6 insFlag=Yes)

#### 88. [OK] Δ=0.003%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R89: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=625 - 649 | cibil~625-649 | cond=Loan amount Above Rs. 75 lakhs | **8.75%** [Final rate]
- mst R284 (OFF-427): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=625-649 | loan=7500001-1000000000 | ten=None-None | **8.753%** (women=None green=8.653 ins=8.803 insFlag=Yes)

#### 89. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R90: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=600 - 624 | cibil~600-624 | cond=Loan amount Above Rs. 75 lakhs | **9.2%** [Final rate]
- mst R285 (OFF-428): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=600-624 | loan=7500001-1000000000 | ten=None-None | **9.2%** (women=None green=9.1 ins=9.25 insFlag=Yes)

#### 90. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R91: Baroda Max Savings Home Loan | Overdraft | Floating | occ=Salaried & Self-Employed | label=-1 | cibil~-1-0 | cond=Loan amount Above Rs. 75 lakhs | **8.0%** [Final rate]
- mst R286 (OFF-429): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=-1-0 | loan=7500001-1000000000 | ten=None-None | **8.0%** (women=None green=7.9 ins=8.05 insFlag=Yes)

### Master rows with no source match (150)

Too many to list every row; grouped by rate:

- **7.2%** × 2 — schemes={'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Floating': 2} insurance={'Yes': 2}
  - mst R417 (OFF-560): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=825-900 | loan=5000001-1000000000 | ten=None-None | **7.2%** (women=None green=None ins=7.25 insFlag=Yes)
  - mst R447 (OFF-590): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=825-900 | loan=5000001-7500000 | ten=None-None | **7.2%** (women=None green=None ins=7.25 insFlag=Yes)
- **7.3%** × 2 — schemes={'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Floating': 2} insurance={'Yes': 2}
  - mst R418 (OFF-561): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-824 | loan=5000001-1000000000 | ten=None-None | **7.3%** (women=None green=7.2 ins=7.35 insFlag=Yes)
  - mst R448 (OFF-591): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=800-824 | loan=5000001-7500000 | ten=None-None | **7.3%** (women=None green=7.2 ins=7.35 insFlag=Yes)
- **7.4%** × 2 — schemes={'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Floating': 2} insurance={'Yes': 2}
  - mst R419 (OFF-562): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=751-799 | loan=5000001-1000000000 | ten=None-None | **7.4%** (women=None green=7.3 ins=7.45 insFlag=Yes)
  - mst R449 (OFF-592): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=751-799 | loan=5000001-7500000 | ten=None-None | **7.4%** (women=None green=7.3 ins=7.45 insFlag=Yes)
- **7.65%** × 2 — schemes={'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Floating': 2} insurance={'Yes': 2}
  - mst R420 (OFF-563): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=726-750 | loan=5000001-1000000000 | ten=None-None | **7.65%** (women=None green=7.55 ins=7.7 insFlag=Yes)
  - mst R450 (OFF-593): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=726-750 | loan=5000001-7500000 | ten=None-None | **7.65%** (women=None green=7.55 ins=7.7 insFlag=Yes)
- **7.7%** × 2 — schemes={'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Floating': 2} insurance={'Yes': 2}
  - mst R421 (OFF-564): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=701-725 | loan=5000001-1000000000 | ten=None-None | **7.7%** (women=None green=7.6 ins=7.75 insFlag=Yes)
  - mst R451 (OFF-594): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=701-725 | loan=5000001-7500000 | ten=None-None | **7.7%** (women=None green=7.6 ins=7.75 insFlag=Yes)
- **7.747%** × 1 — schemes={'Baroda Home Loan': 1} types={'Fixed': 1} insurance={'No': 1}
  - mst R436 (OFF-579): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=-1-0 | loan=5000001-1000000000 | ten=None-None | **7.747%** (women=None green=7.647 ins=None insFlag=No)
- **7.75%** × 5 — schemes={'Baroda Home Loan': 2, 'Baroda Max Savings Home Loan': 3} types={'Floating': 2, 'Fixed': 3} insurance={'Yes': 4, 'No': 1}
  - mst R426 (OFF-569): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=-1-0 | loan=5000001-1000000000 | ten=None-None | **7.75%** (women=None green=7.65 ins=7.8 insFlag=Yes)
  - mst R446 (OFF-589): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=5000001-1000000000 | ten=None-None | **7.75%** (women=None green=7.65 ins=None insFlag=No)
  - mst R456 (OFF-599): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=-1-0 | loan=5000001-7500000 | ten=None-None | **7.75%** (women=None green=7.65 ins=7.8 insFlag=Yes)
- **7.9%** × 2 — schemes={'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Floating': 2} insurance={'Yes': 2}
  - mst R422 (OFF-565): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=676-700 | loan=5000001-1000000000 | ten=None-None | **7.9%** (women=None green=7.8 ins=7.95 insFlag=Yes)
  - mst R452 (OFF-595): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=676-700 | loan=5000001-7500000 | ten=None-None | **7.9%** (women=None green=7.8 ins=7.95 insFlag=Yes)
- **8.05%** × 2 — schemes={'Baroda Top Up Loan': 2} types={'Floating': 2} insurance={'Yes': 2}
  - mst R327 (OFF-470): Baroda Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=825-900 | loan=None-None | ten=None-None | **8.05%** (women=None green=None ins=8.1 insFlag=Yes)
  - mst R357 (OFF-500): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=825-900 | loan=1-7500000 | ten=None-None | **8.05%** (women=None green=None ins=8.1 insFlag=Yes)
- **8.15%** × 2 — schemes={'Baroda Top Up Loan': 2} types={'Floating': 2} insurance={'Yes': 2}
  - mst R328 (OFF-471): Baroda Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **8.15%** (women=None green=8.05 ins=8.2 insFlag=Yes)
  - mst R358 (OFF-501): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=800-824 | loan=1-7500000 | ten=None-None | **8.15%** (women=None green=8.05 ins=8.2 insFlag=Yes)
- **8.25%** × 2 — schemes={'Baroda Top Up Loan': 2} types={'Floating': 2} insurance={'Yes': 2}
  - mst R329 (OFF-472): Baroda Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=751-799 | loan=None-None | ten=None-None | **8.25%** (women=None green=8.15 ins=8.3 insFlag=Yes)
  - mst R359 (OFF-502): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=751-799 | loan=1-7500000 | ten=None-None | **8.25%** (women=None green=8.15 ins=8.3 insFlag=Yes)
- **8.3%** × 3 — schemes={'Baroda Top Up Loan': 1, 'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Floating': 3} insurance={'Yes': 3}
  - mst R367 (OFF-510): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=825-900 | loan=7500001-1000000000 | ten=None-None | **8.3%** (women=None green=None ins=8.35 insFlag=Yes)
  - mst R423 (OFF-566): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-675 | loan=5000001-1000000000 | ten=None-None | **8.3%** (women=None green=8.2 ins=8.35 insFlag=Yes)
  - mst R453 (OFF-596): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=650-675 | loan=5000001-7500000 | ten=None-None | **8.3%** (women=None green=8.2 ins=8.35 insFlag=Yes)
- **8.4%** × 1 — schemes={'Baroda Top Up Loan': 1} types={'Floating': 1} insurance={'Yes': 1}
  - mst R368 (OFF-511): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=800-824 | loan=7500001-1000000000 | ten=None-None | **8.4%** (women=None green=8.3 ins=8.45 insFlag=Yes)
- **8.5%** × 5 — schemes={'Baroda Top Up Loan': 3, 'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Floating': 5} insurance={'Yes': 5}
  - mst R330 (OFF-473): Baroda Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=726-750 | loan=None-None | ten=None-None | **8.5%** (women=None green=8.4 ins=8.55 insFlag=Yes)
  - mst R360 (OFF-503): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=726-750 | loan=1-7500000 | ten=None-None | **8.5%** (women=None green=8.4 ins=8.55 insFlag=Yes)
  - mst R369 (OFF-512): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=751-799 | loan=7500001-1000000000 | ten=None-None | **8.5%** (women=None green=8.4 ins=8.55 insFlag=Yes)
- **8.55%** × 2 — schemes={'Baroda Top Up Loan': 2} types={'Floating': 2} insurance={'Yes': 2}
  - mst R331 (OFF-474): Baroda Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=701-725 | loan=None-None | ten=None-None | **8.55%** (women=None green=8.45 ins=8.6 insFlag=Yes)
  - mst R361 (OFF-504): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=701-725 | loan=1-7500000 | ten=None-None | **8.55%** (women=None green=8.45 ins=8.6 insFlag=Yes)
- **8.597%** × 1 — schemes={'Baroda Top Up Loan': 1} types={'Fixed': 1} insurance={'No': 1}
  - mst R346 (OFF-489): Baroda Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **8.597%** (women=None green=8.497 ins=None insFlag=No)
- **8.6%** × 5 — schemes={'Baroda Top Up Loan': 5} types={'Floating': 2, 'Fixed': 3} insurance={'Yes': 4, 'No': 1}
  - mst R336 (OFF-479): Baroda Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **8.6%** (women=None green=8.5 ins=8.65 insFlag=Yes)
  - mst R356 (OFF-499): Baroda Top Up Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **8.6%** (women=None green=8.5 ins=None insFlag=No)
  - mst R366 (OFF-509): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=-1-0 | loan=1-7500000 | ten=None-None | **8.6%** (women=None green=8.5 ins=8.65 insFlag=Yes)
- **8.75%** × 3 — schemes={'Baroda Top Up Loan': 3} types={'Floating': 3} insurance={'Yes': 3}
  - mst R332 (OFF-475): Baroda Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=676-700 | loan=None-None | ten=None-None | **8.75%** (women=None green=8.65 ins=8.8 insFlag=Yes)
  - mst R362 (OFF-505): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=676-700 | loan=1-7500000 | ten=None-None | **8.75%** (women=None green=8.65 ins=8.8 insFlag=Yes)
  - mst R370 (OFF-513): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=726-750 | loan=7500001-1000000000 | ten=None-None | **8.75%** (women=None green=8.65 ins=8.8 insFlag=Yes)
- **8.8%** × 1 — schemes={'Baroda Top Up Loan': 1} types={'Floating': 1} insurance={'Yes': 1}
  - mst R371 (OFF-514): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=701-725 | loan=7500001-1000000000 | ten=None-None | **8.8%** (women=None green=8.7 ins=8.85 insFlag=Yes)
- **8.85%** × 3 — schemes={'Baroda Top Up Loan': 3} types={'Floating': 1, 'Fixed': 2} insurance={'Yes': 3}
  - mst R376 (OFF-519): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=-1-0 | loan=7500001-1000000000 | ten=None-None | **8.85%** (women=None green=8.75 ins=8.9 insFlag=Yes)
  - mst R406 (OFF-549): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=-1-0 | loan=7500001-1000000000 | ten=None-None | **8.85%** (women=None green=8.75 ins=8.9 insFlag=Yes)
  - mst R416 (OFF-559): Baroda Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=7500001-1000000000 | ten=None-None | **8.85%** (women=None green=8.75 ins=8.9 insFlag=Yes)
- **8.9%** × 2 — schemes={'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Fixed': 2} insurance={'No': 1, 'Yes': 1}
  - mst R427 (OFF-570): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=825-900 | loan=5000001-1000000000 | ten=None-None | **8.9%** (women=None green=None ins=None insFlag=No)
  - mst R457 (OFF-600): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=825-900 | loan=5000001-7500000 | ten=None-None | **8.9%** (women=None green=None ins=8.95 insFlag=Yes)
- **8.95%** × 2 — schemes={'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Floating': 2} insurance={'Yes': 2}
  - mst R425 (OFF-568): Baroda Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-624 | loan=5000001-1000000000 | ten=None-None | **8.95%** (women=None green=8.85 ins=9.0 insFlag=Yes)
  - mst R455 (OFF-598): Baroda Max Savings Home Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=600-624 | loan=5000001-7500000 | ten=None-None | **8.95%** (women=None green=8.85 ins=9.0 insFlag=Yes)
- **9.0%** × 5 — schemes={'Baroda Top Up Loan': 1, 'Baroda Home Loan': 2, 'Baroda Max Savings Home Loan': 2} types={'Floating': 1, 'Fixed': 4} insurance={'Yes': 3, 'No': 2}
  - mst R372 (OFF-515): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=676-700 | loan=7500001-1000000000 | ten=None-None | **9.0%** (women=None green=8.9 ins=9.05 insFlag=Yes)
  - mst R428 (OFF-571): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=800-824 | loan=5000001-1000000000 | ten=None-None | **9.0%** (women=None green=8.9 ins=None insFlag=No)
  - mst R437 (OFF-580): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=825-900 | loan=5000001-1000000000 | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)
- **9.05%** × 2 — schemes={'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Fixed': 2} insurance={'No': 1, 'Yes': 1}
  - mst R438 (OFF-581): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=800-824 | loan=5000001-1000000000 | ten=None-None | **9.05%** (women=None green=8.95 ins=None insFlag=No)
  - mst R468 (OFF-611): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=800-824 | loan=5000001-7500000 | ten=None-None | **9.05%** (women=None green=None ins=9.1 insFlag=Yes)
- **9.15%** × 6 — schemes={'Baroda Top Up Loan': 2, 'Baroda Home Loan': 2, 'Baroda Max Savings Home Loan': 2} types={'Floating': 2, 'Fixed': 4} insurance={'Yes': 4, 'No': 2}
  - mst R333 (OFF-476): Baroda Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-675 | loan=None-None | ten=None-None | **9.15%** (women=None green=9.05 ins=9.2 insFlag=Yes)
  - mst R363 (OFF-506): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=650-675 | loan=1-7500000 | ten=None-None | **9.15%** (women=None green=9.05 ins=9.2 insFlag=Yes)
  - mst R429 (OFF-572): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=751-799 | loan=5000001-1000000000 | ten=None-None | **9.15%** (women=None green=9.05 ins=None insFlag=No)
- **9.25%** × 2 — schemes={'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Fixed': 2} insurance={'No': 1, 'Yes': 1}
  - mst R440 (OFF-583): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=726-750 | loan=5000001-1000000000 | ten=None-None | **9.25%** (women=None green=9.15 ins=None insFlag=No)
  - mst R470 (OFF-613): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=726-750 | loan=5000001-7500000 | ten=None-None | **9.25%** (women=None green=9.15 ins=9.3 insFlag=Yes)
- **9.3%** × 4 — schemes={'Baroda Home Loan': 2, 'Baroda Max Savings Home Loan': 2} types={'Fixed': 4} insurance={'No': 2, 'Yes': 2}
  - mst R430 (OFF-573): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=726-750 | loan=5000001-1000000000 | ten=None-None | **9.3%** (women=None green=9.2 ins=None insFlag=No)
  - mst R441 (OFF-584): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=701-725 | loan=5000001-1000000000 | ten=None-None | **9.3%** (women=None green=9.2 ins=None insFlag=No)
  - mst R460 (OFF-603): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=726-750 | loan=5000001-7500000 | ten=None-None | **9.3%** (women=None green=9.2 ins=9.35 insFlag=Yes)
- **9.35%** × 2 — schemes={'Baroda Top Up Loan': 2} types={'Floating': 2} insurance={'Yes': 2}
  - mst R334 (OFF-477): Baroda Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=625-649 | loan=None-None | ten=None-None | **9.35%** (women=None green=9.25 ins=9.4 insFlag=Yes)
  - mst R364 (OFF-507): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=625-649 | loan=1-7500000 | ten=None-None | **9.35%** (women=None green=9.25 ins=9.4 insFlag=Yes)
- **9.4%** × 3 — schemes={'Baroda Top Up Loan': 1, 'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Floating': 1, 'Fixed': 2} insurance={'Yes': 2, 'No': 1}
  - mst R373 (OFF-516): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=650-675 | loan=7500001-1000000000 | ten=None-None | **9.4%** (women=None green=9.3 ins=9.45 insFlag=Yes)
  - mst R431 (OFF-574): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=701-725 | loan=5000001-1000000000 | ten=None-None | **9.4%** (women=None green=9.3 ins=None insFlag=No)
  - mst R461 (OFF-604): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=701-725 | loan=5000001-7500000 | ten=None-None | **9.4%** (women=None green=9.3 ins=9.45 insFlag=Yes)
- **9.45%** × 2 — schemes={'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Fixed': 2} insurance={'No': 1, 'Yes': 1}
  - mst R442 (OFF-585): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=676-700 | loan=5000001-1000000000 | ten=None-None | **9.45%** (women=None green=9.35 ins=None insFlag=No)
  - mst R472 (OFF-615): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=676-700 | loan=5000001-7500000 | ten=None-None | **9.45%** (women=None green=9.35 ins=9.5 insFlag=Yes)
- **9.55%** × 2 — schemes={'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Fixed': 2} insurance={'No': 1, 'Yes': 1}
  - mst R443 (OFF-586): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=650-675 | loan=5000001-1000000000 | ten=None-None | **9.55%** (women=None green=9.45 ins=None insFlag=No)
  - mst R473 (OFF-616): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=650-675 | loan=5000001-7500000 | ten=None-None | **9.55%** (women=None green=9.45 ins=9.6 insFlag=Yes)
- **9.6%** × 2 — schemes={'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Fixed': 2} insurance={'No': 1, 'Yes': 1}
  - mst R432 (OFF-575): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=676-700 | loan=5000001-1000000000 | ten=None-None | **9.6%** (women=None green=9.5 ins=None insFlag=No)
  - mst R462 (OFF-605): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=676-700 | loan=5000001-7500000 | ten=None-None | **9.6%** (women=None green=9.5 ins=9.65 insFlag=Yes)
- **9.603%** × 1 — schemes={'Baroda Top Up Loan': 1} types={'Floating': 1} insurance={'Yes': 1}
  - mst R374 (OFF-517): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=625-649 | loan=7500001-1000000000 | ten=None-None | **9.603%** (women=None green=9.503 ins=9.653 insFlag=Yes)
- **9.65%** × 2 — schemes={'Baroda Home Loan': 1, 'Baroda Max Savings Home Loan': 1} types={'Fixed': 2} insurance={'No': 1, 'Yes': 1}
  - mst R433 (OFF-576): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=650-675 | loan=5000001-1000000000 | ten=None-None | **9.65%** (women=None green=9.55 ins=None insFlag=No)
  - mst R463 (OFF-606): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=650-675 | loan=5000001-7500000 | ten=None-None | **9.65%** (women=None green=9.55 ins=9.7 insFlag=Yes)
- **9.75%** × 2 — schemes={'Baroda Top Up Loan': 2} types={'Fixed': 2} insurance={'No': 1, 'Yes': 1}
  - mst R337 (OFF-480): Baroda Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=825-900 | loan=None-None | ten=None-None | **9.75%** (women=None green=None ins=None insFlag=No)
  - mst R377 (OFF-520): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=825-900 | loan=1-7500000 | ten=None-None | **9.75%** (women=None green=None ins=9.8 insFlag=Yes)
- **9.8%** × 6 — schemes={'Baroda Top Up Loan': 2, 'Baroda Home Loan': 2, 'Baroda Max Savings Home Loan': 2} types={'Floating': 2, 'Fixed': 4} insurance={'Yes': 4, 'No': 2}
  - mst R335 (OFF-478): Baroda Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-624 | loan=None-None | ten=None-None | **9.8%** (women=None green=9.7 ins=9.85 insFlag=Yes)
  - mst R365 (OFF-508): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=600-624 | loan=1-7500000 | ten=None-None | **9.8%** (women=None green=9.7 ins=9.85 insFlag=Yes)
  - mst R434 (OFF-577): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=625-649 | loan=5000001-1000000000 | ten=None-None | **9.8%** (women=None green=9.7 ins=None insFlag=No)
- **9.85%** × 4 — schemes={'Baroda Top Up Loan': 4} types={'Fixed': 4} insurance={'No': 2, 'Yes': 2}
  - mst R338 (OFF-481): Baroda Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **9.85%** (women=None green=9.75 ins=None insFlag=No)
  - mst R347 (OFF-490): Baroda Top Up Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=825-900 | loan=None-None | ten=None-None | **9.85%** (women=None green=None ins=None insFlag=No)
  - mst R378 (OFF-521): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=800-824 | loan=1-7500000 | ten=None-None | **9.85%** (women=None green=9.75 ins=9.9 insFlag=Yes)
- **9.9%** × 2 — schemes={'Baroda Top Up Loan': 2} types={'Fixed': 2} insurance={'No': 1, 'Yes': 1}
  - mst R348 (OFF-491): Baroda Top Up Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **9.9%** (women=None green=None ins=None insFlag=No)
  - mst R388 (OFF-531): Baroda Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=800-824 | loan=1-7500000 | ten=None-None | **9.9%** (women=None green=9.8 ins=9.95 insFlag=Yes)
- **9.95%** × 4 — schemes={'Baroda Home Loan': 2, 'Baroda Max Savings Home Loan': 2} types={'Fixed': 4} insurance={'No': 2, 'Yes': 2}
  - mst R435 (OFF-578): Baroda Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=600-624 | loan=5000001-1000000000 | ten=None-None | **9.95%** (women=None green=9.85 ins=None insFlag=No)
  - mst R445 (OFF-588): Baroda Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=600-624 | loan=5000001-1000000000 | ten=None-None | **9.95%** (women=None green=9.85 ins=None insFlag=No)
  - mst R465 (OFF-608): Baroda Max Savings Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=600-624 | loan=5000001-7500000 | ten=None-None | **9.95%** (women=None green=9.85 ins=10.0 insFlag=Yes)
- **10.0%** × 5 — schemes={'Baroda Top Up Loan': 5} types={'Fixed': 5} insurance={'No': 2, 'Yes': 3}
  - mst R339 (OFF-482): Baroda Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=751-799 | loan=None-None | ten=None-None | **10.0%** (women=None green=9.9 ins=None insFlag=No)
  - mst R349 (OFF-492): Baroda Top Up Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=751-799 | loan=None-None | ten=None-None | **10.0%** (women=None green=9.9 ins=None insFlag=No)
  - mst R379 (OFF-522): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=751-799 | loan=1-7500000 | ten=None-None | **10.0%** (women=None green=9.9 ins=10.05 insFlag=Yes)
- **10.05%** × 1 — schemes={'Baroda Top Up Loan': 1} types={'Floating': 1} insurance={'Yes': 1}
  - mst R375 (OFF-518): Baroda Top Up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=600-624 | loan=7500001-1000000000 | ten=None-None | **10.05%** (women=None green=9.95 ins=10.1 insFlag=Yes)
- **10.1%** × 4 — schemes={'Baroda Top Up Loan': 4} types={'Fixed': 4} insurance={'No': 1, 'Yes': 3}
  - mst R350 (OFF-493): Baroda Top Up Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=726-750 | loan=None-None | ten=None-None | **10.1%** (women=None green=10.0 ins=None insFlag=No)
  - mst R390 (OFF-533): Baroda Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=726-750 | loan=1-7500000 | ten=None-None | **10.1%** (women=None green=10.0 ins=10.15 insFlag=Yes)
  - mst R398 (OFF-541): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=800-824 | loan=7500001-1000000000 | ten=None-None | **10.1%** (women=None green=10.0 ins=10.15 insFlag=Yes)
- **10.15%** × 5 — schemes={'Baroda Top Up Loan': 5} types={'Fixed': 5} insurance={'No': 2, 'Yes': 3}
  - mst R340 (OFF-483): Baroda Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=726-750 | loan=None-None | ten=None-None | **10.15%** (women=None green=10.05 ins=None insFlag=No)
  - mst R351 (OFF-494): Baroda Top Up Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=701-725 | loan=None-None | ten=None-None | **10.15%** (women=None green=10.05 ins=None insFlag=No)
  - mst R380 (OFF-523): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=726-750 | loan=1-7500000 | ten=None-None | **10.15%** (women=None green=10.05 ins=10.2 insFlag=Yes)
- **10.25%** × 4 — schemes={'Baroda Top Up Loan': 4} types={'Fixed': 4} insurance={'No': 1, 'Yes': 3}
  - mst R341 (OFF-484): Baroda Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=701-725 | loan=None-None | ten=None-None | **10.25%** (women=None green=10.15 ins=None insFlag=No)
  - mst R381 (OFF-524): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=701-725 | loan=1-7500000 | ten=None-None | **10.25%** (women=None green=10.15 ins=10.3 insFlag=Yes)
  - mst R399 (OFF-542): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=751-799 | loan=7500001-1000000000 | ten=None-None | **10.25%** (women=None green=10.15 ins=10.3 insFlag=Yes)
- **10.3%** × 2 — schemes={'Baroda Top Up Loan': 2} types={'Fixed': 2} insurance={'No': 1, 'Yes': 1}
  - mst R352 (OFF-495): Baroda Top Up Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=676-700 | loan=None-None | ten=None-None | **10.3%** (women=None green=10.2 ins=None insFlag=No)
  - mst R392 (OFF-535): Baroda Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=676-700 | loan=1-7500000 | ten=None-None | **10.3%** (women=None green=10.2 ins=10.35 insFlag=Yes)
- **10.35%** × 1 — schemes={'Baroda Top Up Loan': 1} types={'Fixed': 1} insurance={'Yes': 1}
  - mst R410 (OFF-553): Baroda Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=726-750 | loan=7500001-1000000000 | ten=None-None | **10.35%** (women=None green=10.25 ins=10.4 insFlag=Yes)
- **10.4%** × 4 — schemes={'Baroda Top Up Loan': 4} types={'Fixed': 4} insurance={'No': 1, 'Yes': 3}
  - mst R353 (OFF-496): Baroda Top Up Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=650-675 | loan=None-None | ten=None-None | **10.4%** (women=None green=10.3 ins=None insFlag=No)
  - mst R393 (OFF-536): Baroda Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=650-675 | loan=1-7500000 | ten=None-None | **10.4%** (women=None green=10.3 ins=10.45 insFlag=Yes)
  - mst R400 (OFF-543): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=726-750 | loan=7500001-1000000000 | ten=None-None | **10.4%** (women=None green=10.3 ins=10.45 insFlag=Yes)
- **10.45%** × 2 — schemes={'Baroda Top Up Loan': 2} types={'Fixed': 2} insurance={'No': 1, 'Yes': 1}
  - mst R342 (OFF-485): Baroda Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=676-700 | loan=None-None | ten=None-None | **10.45%** (women=None green=10.35 ins=None insFlag=No)
  - mst R382 (OFF-525): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=676-700 | loan=1-7500000 | ten=None-None | **10.45%** (women=None green=10.35 ins=10.5 insFlag=Yes)
- **10.5%** × 3 — schemes={'Baroda Top Up Loan': 3} types={'Fixed': 3} insurance={'No': 1, 'Yes': 2}
  - mst R343 (OFF-486): Baroda Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=650-675 | loan=None-None | ten=None-None | **10.5%** (women=None green=10.4 ins=None insFlag=No)
  - mst R383 (OFF-526): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=650-675 | loan=1-7500000 | ten=None-None | **10.5%** (women=None green=10.4 ins=10.55 insFlag=Yes)
  - mst R401 (OFF-544): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=701-725 | loan=7500001-1000000000 | ten=None-None | **10.5%** (women=None green=10.4 ins=10.55 insFlag=Yes)
- **10.55%** × 1 — schemes={'Baroda Top Up Loan': 1} types={'Fixed': 1} insurance={'Yes': 1}
  - mst R412 (OFF-555): Baroda Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=676-700 | loan=7500001-1000000000 | ten=None-None | **10.55%** (women=None green=10.45 ins=10.6 insFlag=Yes)
- **10.65%** × 5 — schemes={'Baroda Top Up Loan': 5} types={'Fixed': 5} insurance={'No': 2, 'Yes': 3}
  - mst R344 (OFF-487): Baroda Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=625-649 | loan=None-None | ten=None-None | **10.65%** (women=None green=10.55 ins=None insFlag=No)
  - mst R354 (OFF-497): Baroda Top Up Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=625-649 | loan=None-None | ten=None-None | **10.65%** (women=None green=10.55 ins=None insFlag=No)
  - mst R384 (OFF-527): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=625-649 | loan=1-7500000 | ten=None-None | **10.65%** (women=None green=10.55 ins=10.7 insFlag=Yes)
- **10.7%** × 1 — schemes={'Baroda Top Up Loan': 1} types={'Fixed': 1} insurance={'Yes': 1}
  - mst R402 (OFF-545): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=676-700 | loan=7500001-1000000000 | ten=None-None | **10.7%** (women=None green=10.6 ins=10.75 insFlag=Yes)
- **10.75%** × 1 — schemes={'Baroda Top Up Loan': 1} types={'Fixed': 1} insurance={'Yes': 1}
  - mst R403 (OFF-546): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=650-675 | loan=7500001-1000000000 | ten=None-None | **10.75%** (women=None green=10.65 ins=10.8 insFlag=Yes)
- **10.8%** × 4 — schemes={'Baroda Top Up Loan': 4} types={'Fixed': 4} insurance={'No': 2, 'Yes': 2}
  - mst R345 (OFF-488): Baroda Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=600-624 | loan=None-None | ten=None-None | **10.8%** (women=None green=10.7 ins=None insFlag=No)
  - mst R355 (OFF-498): Baroda Top Up Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=600-624 | loan=None-None | ten=None-None | **10.8%** (women=None green=10.7 ins=None insFlag=No)
  - mst R385 (OFF-528): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=600-624 | loan=1-7500000 | ten=None-None | **10.8%** (women=None green=10.7 ins=10.85 insFlag=Yes)
- **10.9%** × 2 — schemes={'Baroda Top Up Loan': 2} types={'Fixed': 2} insurance={'Yes': 2}
  - mst R404 (OFF-547): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=625-649 | loan=7500001-1000000000 | ten=None-None | **10.9%** (women=None green=10.8 ins=10.95 insFlag=Yes)
  - mst R414 (OFF-557): Baroda Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=625-649 | loan=7500001-1000000000 | ten=None-None | **10.9%** (women=None green=10.8 ins=10.95 insFlag=Yes)
- **11.05%** × 2 — schemes={'Baroda Top Up Loan': 2} types={'Fixed': 2} insurance={'Yes': 2}
  - mst R405 (OFF-548): Baroda Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=600-624 | loan=7500001-1000000000 | ten=None-None | **11.05%** (women=None green=10.95 ins=11.1 insFlag=Yes)
  - mst R415 (OFF-558): Baroda Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=600-624 | loan=7500001-1000000000 | ten=None-None | **11.05%** (women=None green=10.95 ins=11.1 insFlag=Yes)

---

## Bank of India

- Sheet: `Bank of India`
- Source Final/ROI lines: **64**
- Master Offers rows: **128**
- Verdict: `RATES_OK_ROW_EXPANSION`
- Source unique rates (%): `[7.1, 7.25, 7.4, 7.5, 7.6, 7.75, 7.9, 8.0, 8.4, 8.45, 8.5, 8.9, 8.95, 10.0, 10.5, 10.65, 10.75, 10.95, 11.0, 11.15, 11.25, 11.45, 11.5, 12.55, 13.05]`
- Master unique `roi` (%): `[7.1, 7.25, 7.4, 7.5, 7.6, 7.75, 7.9, 8.0, 8.4, 8.45, 8.5, 8.9, 8.95, 10.0, 10.5, 10.65, 10.75, 10.95, 11.0, 11.15, 11.25, 11.45, 11.5, 12.55, 13.05]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R84: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Salaried | label=840 + | cibil~840-900 | cond=None | **10.65%** [Final rate]
- mst R149 (OFF-236): Star Smart Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=840-900 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R85: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Salaried | label=825 - 839 | cibil~825-839 | cond=None | **10.65%** [Final rate]
- mst R150 (OFF-238): Star Smart Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=825-839 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R86: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Salaried | label=800 - 824 | cibil~800-824 | cond=None | **10.65%** [Final rate]
- mst R151 (OFF-240): Star Smart Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R87: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Salaried | label=760 - 799 | cibil~760-799 | cond=None | **10.65%** [Final rate]
- mst R152 (OFF-242): Star Smart Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=760-799 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R88: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Salaried | label=725 - 759 | cibil~725-759 | cond=None | **10.75%** [Final rate]
- mst R153 (OFF-244): Star Smart Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **10.75%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R89: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Salaried | label=700 - 724 | cibil~700-724 | cond=None | **10.95%** [Final rate]
- mst R154 (OFF-246): Star Smart Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **10.95%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R90: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Salaried | label=<700 | cibil~300-None | cond=None | **12.55%** [Final rate]
- mst R155 (OFF-248): Star Smart Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **12.55%** (women=None green=None ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R91: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Salaried | label=-1 & 0 | cibil~-1-0 | cond=None | **10.95%** [Final rate]
- mst R156 (OFF-250): Star Smart Home Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **10.95%** (women=None green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R110: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Self-Employed | label=840 + | cibil~840-900 | cond=None | **10.65%** [Final rate]
- mst R181 (OFF-300): Star Smart Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=840-900 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R111: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Self-Employed | label=825 - 839 | cibil~825-839 | cond=None | **10.65%** [Final rate]
- mst R182 (OFF-302): Star Smart Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=825-839 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R112: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Self-Employed | label=800 - 824 | cibil~800-824 | cond=None | **10.65%** [Final rate]
- mst R183 (OFF-304): Star Smart Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)

#### 12. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R113: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Self-Employed | label=760 - 799 | cibil~760-799 | cond=None | **10.65%** [Final rate]
- mst R184 (OFF-306): Star Smart Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=760-799 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)

#### 13. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R114: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Self-Employed | label=725 - 759 | cibil~725-759 | cond=None | **10.75%** [Final rate]
- mst R185 (OFF-308): Star Smart Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **10.75%** (women=None green=None ins=None insFlag=No)

#### 14. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R115: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Self-Employed | label=700 - 724 | cibil~700-724 | cond=None | **11.0%** [Final rate]
- mst R186 (OFF-310): Star Smart Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **11.0%** (women=None green=None ins=None insFlag=No)

#### 15. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R116: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Self-Employed | label=<700 | cibil~300-None | cond=None | **12.55%** [Final rate]
- mst R187 (OFF-312): Star Smart Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **12.55%** (women=None green=None ins=None insFlag=No)

#### 16. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R117: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Fixed | occ=Self-Employed | label=-1 & 0 | cibil~-1-0 | cond=None | **10.95%** [Final rate]
- mst R188 (OFF-314): Star Smart Home Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **10.95%** (women=None green=None ins=None insFlag=No)

#### 17. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R29: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Salaried | label=840 + | cibil~840-900 | cond=None | **7.1%** [Final rate]
- mst R85 (OFF-108): Star Smart Home Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=840-900 | loan=None-None | ten=None-None | **7.1%** (women=None green=None ins=None insFlag=No)

#### 18. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R30: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Salaried | label=825 - 839 | cibil~825-839 | cond=None | **7.25%** [Final rate]
- mst R86 (OFF-110): Star Smart Home Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=825-839 | loan=None-None | ten=None-None | **7.25%** (women=None green=None ins=None insFlag=No)

#### 19. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R31: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Salaried | label=800 - 824 | cibil~800-824 | cond=None | **7.25%** [Final rate]
- mst R87 (OFF-112): Star Smart Home Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **7.25%** (women=None green=None ins=None insFlag=No)

#### 20. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R32: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Salaried | label=760 - 799 | cibil~760-799 | cond=None | **7.4%** [Final rate]
- mst R88 (OFF-114): Star Smart Home Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=760-799 | loan=None-None | ten=None-None | **7.4%** (women=None green=None ins=None insFlag=No)

#### 21. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R33: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Salaried | label=725 - 759 | cibil~725-759 | cond=None | **7.9%** [Final rate]
- mst R89 (OFF-116): Star Smart Home Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)

#### 22. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R34: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Salaried | label=700 - 724 | cibil~700-724 | cond=None | **8.4%** [Final rate]
- mst R90 (OFF-118): Star Smart Home Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **8.4%** (women=None green=None ins=None insFlag=No)

#### 23. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R35: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Salaried | label=<700 | cibil~300-None | cond=None | **10.0%** [Final rate]
- mst R91 (OFF-120): Star Smart Home Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **10.0%** (women=None green=None ins=None insFlag=No)

#### 24. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R36: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Salaried | label=-1 & 0 | cibil~-1-0 | cond=None | **7.9%** [Final rate]
- mst R92 (OFF-122): Star Smart Home Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)

#### 25. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R58: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Self-Employed | label=840 + | cibil~840-900 | cond=None | **7.1%** [Final rate]
- mst R117 (OFF-172): Star Smart Home Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=840-900 | loan=None-None | ten=None-None | **7.1%** (women=None green=None ins=None insFlag=No)

#### 26. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R59: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Self-Employed | label=825 - 839 | cibil~825-839 | cond=None | **7.25%** [Final rate]
- mst R118 (OFF-174): Star Smart Home Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=825-839 | loan=None-None | ten=None-None | **7.25%** (women=None green=None ins=None insFlag=No)

#### 27. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R60: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Self-Employed | label=800 - 824 | cibil~800-824 | cond=None | **7.25%** [Final rate]
- mst R119 (OFF-176): Star Smart Home Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **7.25%** (women=None green=None ins=None insFlag=No)

#### 28. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R61: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Self-Employed | label=760 - 799 | cibil~760-799 | cond=None | **7.5%** [Final rate]
- mst R120 (OFF-178): Star Smart Home Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=760-799 | loan=None-None | ten=None-None | **7.5%** (women=None green=None ins=None insFlag=No)

#### 29. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R62: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Self-Employed | label=725 - 759 | cibil~725-759 | cond=None | **8.0%** [Final rate]
- mst R121 (OFF-180): Star Smart Home Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **8.0%** (women=None green=None ins=None insFlag=No)

#### 30. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R63: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Self-Employed | label=700 - 724 | cibil~700-724 | cond=None | **8.45%** [Final rate]
- mst R122 (OFF-182): Star Smart Home Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **8.45%** (women=None green=None ins=None insFlag=No)

#### 31. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R64: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Self-Employed | label=<700 | cibil~300-None | cond=None | **10.0%** [Final rate]
- mst R123 (OFF-184): Star Smart Home Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **10.0%** (women=None green=None ins=None insFlag=No)

#### 32. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R65: Star Home Loan/Star Smart Home Loan/ Star Diamond Home Loan | Overdraft | Floating | occ=Self-Employed | label=-1 & 0 | cibil~-1-0 | cond=None | **7.9%** [Final rate]
- mst R124 (OFF-186): Star Smart Home Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)

#### 33. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R96: Star Top Up Loan | Overdraft | Fixed | occ=Salaried | label=840 + | cibil~840-900 | cond=None | **11.15%** [Final rate]
- mst R165 (OFF-268): Star Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=840-900 | loan=None-None | ten=None-None | **11.15%** (women=None green=None ins=None insFlag=No)

#### 34. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R97: Star Top Up Loan | Overdraft | Fixed | occ=Salaried | label=825 - 839 | cibil~825-839 | cond=None | **11.15%** [Final rate]
- mst R166 (OFF-270): Star Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=825-839 | loan=None-None | ten=None-None | **11.15%** (women=None green=None ins=None insFlag=No)

#### 35. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R98: Star Top Up Loan | Overdraft | Fixed | occ=Salaried | label=800 - 824 | cibil~800-824 | cond=None | **11.15%** [Final rate]
- mst R167 (OFF-272): Star Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **11.15%** (women=None green=None ins=None insFlag=No)

#### 36. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R99: Star Top Up Loan | Overdraft | Fixed | occ=Salaried | label=760 - 799 | cibil~760-799 | cond=None | **11.15%** [Final rate]
- mst R168 (OFF-274): Star Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=760-799 | loan=None-None | ten=None-None | **11.15%** (women=None green=None ins=None insFlag=No)

#### 37. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R100: Star Top Up Loan | Overdraft | Fixed | occ=Salaried | label=725 - 759 | cibil~725-759 | cond=None | **11.25%** [Final rate]
- mst R169 (OFF-276): Star Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **11.25%** (women=None green=None ins=None insFlag=No)

#### 38. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R101: Star Top Up Loan | Overdraft | Fixed | occ=Salaried | label=700 - 724 | cibil~700-724 | cond=None | **11.45%** [Final rate]
- mst R170 (OFF-278): Star Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **11.45%** (women=None green=None ins=None insFlag=No)

#### 39. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R102: Star Top Up Loan | Overdraft | Fixed | occ=Salaried | label=<700 | cibil~300-None | cond=None | **13.05%** [Final rate]
- mst R171 (OFF-280): Star Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **13.05%** (women=None green=None ins=None insFlag=No)

#### 40. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R103: Star Top Up Loan | Overdraft | Fixed | occ=Salaried | label=-1 & 0 | cibil~-1-0 | cond=None | **11.45%** [Final rate]
- mst R172 (OFF-282): Star Top Up Loan | Overdraft | Fixed | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **11.45%** (women=None green=None ins=None insFlag=No)

#### 41. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R122: Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | label=840 + | cibil~840-900 | cond=None | **11.15%** [Final rate]
- mst R197 (OFF-332): Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=840-900 | loan=None-None | ten=None-None | **11.15%** (women=None green=None ins=None insFlag=No)

#### 42. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R123: Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | label=825 - 839 | cibil~825-839 | cond=None | **11.15%** [Final rate]
- mst R198 (OFF-334): Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=825-839 | loan=None-None | ten=None-None | **11.15%** (women=None green=None ins=None insFlag=No)

#### 43. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R124: Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | label=800 - 824 | cibil~800-824 | cond=None | **11.15%** [Final rate]
- mst R199 (OFF-336): Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **11.15%** (women=None green=None ins=None insFlag=No)

#### 44. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R125: Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | label=760 - 799 | cibil~760-799 | cond=None | **11.15%** [Final rate]
- mst R200 (OFF-338): Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=760-799 | loan=None-None | ten=None-None | **11.15%** (women=None green=None ins=None insFlag=No)

#### 45. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R126: Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | label=725 - 759 | cibil~725-759 | cond=None | **11.25%** [Final rate]
- mst R201 (OFF-340): Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **11.25%** (women=None green=None ins=None insFlag=No)

#### 46. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R127: Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | label=700 - 724 | cibil~700-724 | cond=None | **11.5%** [Final rate]
- mst R202 (OFF-342): Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **11.5%** (women=None green=None ins=None insFlag=No)

#### 47. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R128: Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | label=<700 | cibil~300-None | cond=None | **13.05%** [Final rate]
- mst R203 (OFF-344): Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **13.05%** (women=None green=None ins=None insFlag=No)

#### 48. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R129: Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | label=-1 & 0 | cibil~-1-0 | cond=None | **11.45%** [Final rate]
- mst R204 (OFF-346): Star Top Up Loan | Overdraft | Fixed | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **11.45%** (women=None green=None ins=None insFlag=No)

#### 49. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R41: Star Top Up Loan | Overdraft | Floating | occ=Salaried | label=840 + | cibil~840-900 | cond=None | **7.6%** [Final rate]
- mst R101 (OFF-140): Star Top Up Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=840-900 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)

#### 50. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R42: Star Top Up Loan | Overdraft | Floating | occ=Salaried | label=825 - 839 | cibil~825-839 | cond=None | **7.75%** [Final rate]
- mst R102 (OFF-142): Star Top Up Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=825-839 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)

#### 51. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R43: Star Top Up Loan | Overdraft | Floating | occ=Salaried | label=800 - 824 | cibil~800-824 | cond=None | **7.75%** [Final rate]
- mst R103 (OFF-144): Star Top Up Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)

#### 52. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R44: Star Top Up Loan | Overdraft | Floating | occ=Salaried | label=760 - 799 | cibil~760-799 | cond=None | **7.9%** [Final rate]
- mst R104 (OFF-146): Star Top Up Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=760-799 | loan=None-None | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)

#### 53. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R45: Star Top Up Loan | Overdraft | Floating | occ=Salaried | label=725 - 759 | cibil~725-759 | cond=None | **8.4%** [Final rate]
- mst R105 (OFF-148): Star Top Up Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **8.4%** (women=None green=None ins=None insFlag=No)

#### 54. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R46: Star Top Up Loan | Overdraft | Floating | occ=Salaried | label=700 - 724 | cibil~700-724 | cond=None | **8.9%** [Final rate]
- mst R106 (OFF-150): Star Top Up Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **8.9%** (women=None green=None ins=None insFlag=No)

#### 55. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R47: Star Top Up Loan | Overdraft | Floating | occ=Salaried | label=<700 | cibil~300-None | cond=None | **10.5%** [Final rate]
- mst R107 (OFF-152): Star Top Up Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **10.5%** (women=None green=None ins=None insFlag=No)

#### 56. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R48: Star Top Up Loan | Overdraft | Floating | occ=Salaried | label=-1 & 0 | cibil~-1-0 | cond=None | **8.4%** [Final rate]
- mst R108 (OFF-154): Star Top Up Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **8.4%** (women=None green=None ins=None insFlag=No)

#### 57. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R70: Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | label=840 + | cibil~840-900 | cond=None | **7.6%** [Final rate]
- mst R133 (OFF-204): Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=840-900 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)

#### 58. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R71: Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | label=825 - 839 | cibil~825-839 | cond=None | **7.75%** [Final rate]
- mst R134 (OFF-206): Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=825-839 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)

#### 59. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R72: Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | label=800 - 824 | cibil~800-824 | cond=None | **7.75%** [Final rate]
- mst R135 (OFF-208): Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)

#### 60. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R73: Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | label=760 - 799 | cibil~760-799 | cond=None | **8.0%** [Final rate]
- mst R136 (OFF-210): Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=760-799 | loan=None-None | ten=None-None | **8.0%** (women=None green=None ins=None insFlag=No)

#### 61. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R74: Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | label=725 - 759 | cibil~725-759 | cond=None | **8.5%** [Final rate]
- mst R137 (OFF-212): Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **8.5%** (women=None green=None ins=None insFlag=No)

#### 62. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R75: Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | label=700 - 724 | cibil~700-724 | cond=None | **8.95%** [Final rate]
- mst R138 (OFF-214): Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **8.95%** (women=None green=None ins=None insFlag=No)

#### 63. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R76: Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | label=<700 | cibil~300-None | cond=None | **10.5%** [Final rate]
- mst R139 (OFF-216): Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **10.5%** (women=None green=None ins=None insFlag=No)

#### 64. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R77: Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | label=-1 & 0 | cibil~-1-0 | cond=None | **8.4%** [Final rate]
- mst R140 (OFF-218): Star Top Up Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **8.4%** (women=None green=None ins=None insFlag=No)

### Master rows with no source match (64)

Too many to list every row; grouped by rate:

- **7.1%** × 2 — schemes={'Star Home Loan': 2} types={'Floating': 2} insurance={'No': 2}
  - mst R77 (OFF-92): Star Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=840-900 | loan=None-None | ten=None-None | **7.1%** (women=None green=None ins=None insFlag=No)
  - mst R109 (OFF-156): Star Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=840-900 | loan=None-None | ten=None-None | **7.1%** (women=None green=None ins=None insFlag=No)
- **7.25%** × 4 — schemes={'Star Home Loan': 4} types={'Floating': 4} insurance={'No': 4}
  - mst R78 (OFF-94): Star Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=825-839 | loan=None-None | ten=None-None | **7.25%** (women=None green=None ins=None insFlag=No)
  - mst R79 (OFF-96): Star Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **7.25%** (women=None green=None ins=None insFlag=No)
  - mst R110 (OFF-158): Star Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=825-839 | loan=None-None | ten=None-None | **7.25%** (women=None green=None ins=None insFlag=No)
- **7.4%** × 1 — schemes={'Star Home Loan': 1} types={'Floating': 1} insurance={'No': 1}
  - mst R80 (OFF-98): Star Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=760-799 | loan=None-None | ten=None-None | **7.4%** (women=None green=None ins=None insFlag=No)
- **7.5%** × 1 — schemes={'Star Home Loan': 1} types={'Floating': 1} insurance={'No': 1}
  - mst R112 (OFF-162): Star Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=760-799 | loan=None-None | ten=None-None | **7.5%** (women=None green=None ins=None insFlag=No)
- **7.6%** × 2 — schemes={'Star Top Up Loan': 2} types={'Floating': 2} insurance={'No': 2}
  - mst R93 (OFF-124): Star Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=840-900 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)
  - mst R125 (OFF-188): Star Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=840-900 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)
- **7.75%** × 4 — schemes={'Star Top Up Loan': 4} types={'Floating': 4} insurance={'No': 4}
  - mst R94 (OFF-126): Star Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=825-839 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)
  - mst R95 (OFF-128): Star Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)
  - mst R126 (OFF-190): Star Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=825-839 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)
- **7.9%** × 4 — schemes={'Star Home Loan': 3, 'Star Top Up Loan': 1} types={'Floating': 4} insurance={'No': 4}
  - mst R81 (OFF-100): Star Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)
  - mst R84 (OFF-106): Star Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)
  - mst R96 (OFF-130): Star Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=760-799 | loan=None-None | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)
- **8.0%** × 2 — schemes={'Star Home Loan': 1, 'Star Top Up Loan': 1} types={'Floating': 2} insurance={'No': 2}
  - mst R113 (OFF-164): Star Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **8.0%** (women=None green=None ins=None insFlag=No)
  - mst R128 (OFF-194): Star Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=760-799 | loan=None-None | ten=None-None | **8.0%** (women=None green=None ins=None insFlag=No)
- **8.4%** × 4 — schemes={'Star Home Loan': 1, 'Star Top Up Loan': 3} types={'Floating': 4} insurance={'No': 4}
  - mst R82 (OFF-102): Star Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **8.4%** (women=None green=None ins=None insFlag=No)
  - mst R97 (OFF-132): Star Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **8.4%** (women=None green=None ins=None insFlag=No)
  - mst R100 (OFF-138): Star Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **8.4%** (women=None green=None ins=None insFlag=No)
- **8.45%** × 1 — schemes={'Star Home Loan': 1} types={'Floating': 1} insurance={'No': 1}
  - mst R114 (OFF-166): Star Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **8.45%** (women=None green=None ins=None insFlag=No)
- **8.5%** × 1 — schemes={'Star Top Up Loan': 1} types={'Floating': 1} insurance={'No': 1}
  - mst R129 (OFF-196): Star Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **8.5%** (women=None green=None ins=None insFlag=No)
- **8.9%** × 1 — schemes={'Star Top Up Loan': 1} types={'Floating': 1} insurance={'No': 1}
  - mst R98 (OFF-134): Star Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **8.9%** (women=None green=None ins=None insFlag=No)
- **8.95%** × 1 — schemes={'Star Top Up Loan': 1} types={'Floating': 1} insurance={'No': 1}
  - mst R130 (OFF-198): Star Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **8.95%** (women=None green=None ins=None insFlag=No)
- **10.0%** × 2 — schemes={'Star Home Loan': 2} types={'Floating': 2} insurance={'No': 2}
  - mst R83 (OFF-104): Star Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **10.0%** (women=None green=None ins=None insFlag=No)
  - mst R115 (OFF-168): Star Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **10.0%** (women=None green=None ins=None insFlag=No)
- **10.5%** × 2 — schemes={'Star Top Up Loan': 2} types={'Floating': 2} insurance={'No': 2}
  - mst R99 (OFF-136): Star Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **10.5%** (women=None green=None ins=None insFlag=No)
  - mst R131 (OFF-200): Star Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **10.5%** (women=None green=None ins=None insFlag=No)
- **10.65%** × 8 — schemes={'Star Home Loan': 8} types={'Fixed': 8} insurance={'No': 8}
  - mst R141 (OFF-220): Star Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=840-900 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)
  - mst R142 (OFF-222): Star Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=825-839 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)
  - mst R143 (OFF-224): Star Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)
- **10.75%** × 2 — schemes={'Star Home Loan': 2} types={'Fixed': 2} insurance={'No': 2}
  - mst R145 (OFF-228): Star Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **10.75%** (women=None green=None ins=None insFlag=No)
  - mst R177 (OFF-292): Star Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **10.75%** (women=None green=None ins=None insFlag=No)
- **10.95%** × 3 — schemes={'Star Home Loan': 3} types={'Fixed': 3} insurance={'No': 3}
  - mst R146 (OFF-230): Star Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **10.95%** (women=None green=None ins=None insFlag=No)
  - mst R148 (OFF-234): Star Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **10.95%** (women=None green=None ins=None insFlag=No)
  - mst R180 (OFF-298): Star Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **10.95%** (women=None green=None ins=None insFlag=No)
- **11.0%** × 1 — schemes={'Star Home Loan': 1} types={'Fixed': 1} insurance={'No': 1}
  - mst R178 (OFF-294): Star Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **11.0%** (women=None green=None ins=None insFlag=No)
- **11.15%** × 8 — schemes={'Star Top Up Loan': 8} types={'Fixed': 8} insurance={'No': 8}
  - mst R157 (OFF-252): Star Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=840-900 | loan=None-None | ten=None-None | **11.15%** (women=None green=None ins=None insFlag=No)
  - mst R158 (OFF-254): Star Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=825-839 | loan=None-None | ten=None-None | **11.15%** (women=None green=None ins=None insFlag=No)
  - mst R159 (OFF-256): Star Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **11.15%** (women=None green=None ins=None insFlag=No)
- **11.25%** × 2 — schemes={'Star Top Up Loan': 2} types={'Fixed': 2} insurance={'No': 2}
  - mst R161 (OFF-260): Star Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **11.25%** (women=None green=None ins=None insFlag=No)
  - mst R193 (OFF-324): Star Top Up Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=725-759 | loan=None-None | ten=None-None | **11.25%** (women=None green=None ins=None insFlag=No)
- **11.45%** × 3 — schemes={'Star Top Up Loan': 3} types={'Fixed': 3} insurance={'No': 3}
  - mst R162 (OFF-262): Star Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **11.45%** (women=None green=None ins=None insFlag=No)
  - mst R164 (OFF-266): Star Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **11.45%** (women=None green=None ins=None insFlag=No)
  - mst R196 (OFF-330): Star Top Up Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **11.45%** (women=None green=None ins=None insFlag=No)
- **11.5%** × 1 — schemes={'Star Top Up Loan': 1} types={'Fixed': 1} insurance={'No': 1}
  - mst R194 (OFF-326): Star Top Up Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **11.5%** (women=None green=None ins=None insFlag=No)
- **12.55%** × 2 — schemes={'Star Home Loan': 2} types={'Fixed': 2} insurance={'No': 2}
  - mst R147 (OFF-232): Star Home Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **12.55%** (women=None green=None ins=None insFlag=No)
  - mst R179 (OFF-296): Star Home Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **12.55%** (women=None green=None ins=None insFlag=No)
- **13.05%** × 2 — schemes={'Star Top Up Loan': 2} types={'Fixed': 2} insurance={'No': 2}
  - mst R163 (OFF-264): Star Top Up Loan | Term Loan | Fixed | occ=Salaried | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **13.05%** (women=None green=None ins=None insFlag=No)
  - mst R195 (OFF-328): Star Top Up Loan | Term Loan | Fixed | occ=Self-Employed | cat=Any | cibil=300-699 | loan=None-None | ten=None-None | **13.05%** (women=None green=None ins=None insFlag=No)

---

## Bank of Maharashtra

- Sheet: `Bank of Maharashtra`
- Source Final/ROI lines: **66**
- Master Offers rows: **53**
- Verdict: `SOURCE_COVERED_MASTER_EXTRAS`
- Source unique rates (%): `[7.1, 7.2, 7.25, 7.35, 7.45, 7.5, 7.6, 7.65, 7.7, 7.75, 7.8, 7.85, 7.9, 7.95, 8.0, 8.05, 8.1, 8.15, 8.2, 8.25, 8.35, 8.45, 8.55, 8.6, 8.65, 8.7, 8.75, 8.8, 8.85, 8.95, 9.0, 9.05, 9.15, 9.2, 9.35, 9.4, 9.55, 9.65, 9.9, 10.7, 10.9, 11.35, 11.55, 11.75, 11.95, 12.15, 12.65]`
- Master unique `roi` (%): `[7.1, 7.2, 7.25, 7.35, 7.45, 7.5, 7.6, 7.7, 7.75, 7.8, 7.9, 7.95, 8.0, 8.05, 8.1, 8.15, 8.2, 8.35, 8.55, 8.6, 8.7, 8.75, 8.8, 8.95, 9.0, 9.15, 9.2, 9.35, 9.4, 9.55, 9.65, 9.9, 10.7, 10.9, 11.35, 11.5, 11.55, 11.75, 11.95, 12.15, 12.5, 12.65, 12.7]`
- **Master `roi` values not in source Final set:** `[11.5, 12.5, 12.7]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R97: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Salaried | label=800+ | cibil~800-900 | cond=None | **7.6%** [Final rate]
- mst R685 (OFF-1034): Maha Bank Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R98: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Salaried | label=750 - 799 | cibil~750-799 | cond=None | **8.0%** [Final rate]
- mst R686 (OFF-1035): Maha Bank Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **8.0%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R99: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Salaried | label=725 - 749 | cibil~725-749 | cond=None | **8.7%** [Final rate]
- mst R687 (OFF-1036): Maha Bank Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=725-749 | loan=None-None | ten=None-None | **8.7%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R100: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Salaried | label=700 - 724 | cibil~700-724 | cond=None | **8.75%** [Final rate]
- mst R688 (OFF-1037): Maha Bank Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R101: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Salaried | label=681 - 699 | cibil~681-699 | cond=None | **9.35%** [Final rate]
- mst R689 (OFF-1038): Maha Bank Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=681-699 | loan=None-None | ten=None-None | **9.35%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R102: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Salaried | label=650 - 680 | cibil~650-680 | cond=None | **11.35%** [Final rate]
- mst R690 (OFF-1039): Maha Bank Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-680 | loan=None-None | ten=None-None | **11.35%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R103: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Salaried | label=600 - 649 | cibil~600-649 | cond=None | **11.75%** [Final rate]
- mst R691 (OFF-1040): Maha Bank Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **11.75%** (women=None green=None ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R104: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Salaried | label=< 600 | cibil~300-None | cond=None | **12.15%** [Final rate]
- mst R692 (OFF-1041): Maha Bank Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **12.15%** (women=None green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R105: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Salaried | label=NTC | cibil~-1-0 | cond=None | **10.7%** [Final rate]
- mst R693 (OFF-1042): Maha Bank Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **10.7%** (women=None green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R108: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.7%** [Final rate]
- mst R694 (OFF-1043): Maha Bank Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.7%** (women=None green=None ins=None insFlag=No)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R109: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **8.1%** [Final rate]
- mst R695 (OFF-1044): Maha Bank Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **8.1%** (women=None green=None ins=None insFlag=No)

#### 12. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R110: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=725 - 749 | cibil~725-749 | cond=None | **8.8%** [Final rate]
- mst R696 (OFF-1045): Maha Bank Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=725-749 | loan=None-None | ten=None-None | **8.8%** (women=None green=None ins=None insFlag=No)

#### 13. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R111: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=700 - 724 | cibil~700-724 | cond=None | **8.95%** [Final rate]
- mst R697 (OFF-1046): Maha Bank Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **8.95%** (women=None green=None ins=None insFlag=No)

#### 14. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R112: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=681 - 699 | cibil~681-699 | cond=None | **9.55%** [Final rate]
- mst R698 (OFF-1047): Maha Bank Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=681-699 | loan=None-None | ten=None-None | **9.55%** (women=None green=None ins=None insFlag=No)

#### 15. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R113: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=650 - 680 | cibil~650-680 | cond=None | **11.55%** [Final rate]
- mst R699 (OFF-1048): Maha Bank Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-680 | loan=None-None | ten=None-None | **11.55%** (women=None green=None ins=None insFlag=No)

#### 16. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R114: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **11.95%** [Final rate]
- mst R700 (OFF-1049): Maha Bank Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **11.95%** (women=None green=None ins=None insFlag=No)

#### 17. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R115: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=< 600 | cibil~300-None | cond=None | **12.65%** [Final rate]
- mst R701 (OFF-1050): Maha Bank Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **12.65%** (women=None green=None ins=None insFlag=No)

#### 18. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R116: Maha Bank Top Up Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=NTC | cibil~-1-0 | cond=None | **10.9%** [Final rate]
- mst R702 (OFF-1051): Maha Bank Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **10.9%** (women=None green=None ins=None insFlag=No)

#### 19. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R71: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Salaried | label=800+ | cibil~800-900 | cond=None | **7.35%** [Final rate]
- mst R669 (OFF-1018): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.35%** (women=None green=None ins=None insFlag=No)

#### 20. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R72: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Salaried | label=750 - 799 | cibil~750-799 | cond=None | **7.5%** [Final rate]
- mst R670 (OFF-1019): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.5%** (women=None green=None ins=None insFlag=No)

#### 21. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R73: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Salaried | label=725 - 749 | cibil~725-749 | cond=None | **7.95%** [Final rate]
- mst R671 (OFF-1020): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=725-749 | loan=None-None | ten=None-None | **7.95%** (women=None green=None ins=None insFlag=No)

#### 22. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R74: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Salaried | label=700 - 724 | cibil~700-724 | cond=None | **8.0%** [Final rate]
- mst R672 (OFF-1021): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **8.0%** (women=None green=None ins=None insFlag=No)

#### 23. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R75: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Salaried | label=650 - 699 | cibil~650-699 | cond=None | **8.6%** [Final rate]
- mst R673 (OFF-1022): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.6%** (women=None green=None ins=None insFlag=No)

#### 24. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R76: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Salaried | label=600 - 649 | cibil~600-649 | cond=None | **9.0%** [Final rate]
- mst R674 (OFF-1023): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)

#### 25. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R77: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Salaried | label=< 600 | cibil~300-None | cond=None | **9.4%** [Final rate]
- mst R675 (OFF-1024): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **9.4%** (women=None green=None ins=None insFlag=No)

#### 26. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R78: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Salaried | label=NTC | cibil~-1-0 | cond=None | **7.95%** [Final rate]
- mst R676 (OFF-1025): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **7.95%** (women=None green=None ins=None insFlag=No)

#### 27. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R83: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Self - Employed | label=800+ | cibil~800-900 | cond=None | **7.45%** [Final rate]
- mst R677 (OFF-1026): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.45%** (women=None green=None ins=None insFlag=No)

#### 28. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R84: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Self - Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.6%** [Final rate]
- mst R678 (OFF-1027): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)

#### 29. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R85: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Self - Employed | label=725 - 749 | cibil~725-749 | cond=None | **8.05%** [Final rate]
- mst R679 (OFF-1028): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=725-749 | loan=None-None | ten=None-None | **8.05%** (women=None green=None ins=None insFlag=No)

#### 30. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R86: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Self - Employed | label=700 - 724 | cibil~700-724 | cond=None | **8.2%** [Final rate]
- mst R680 (OFF-1029): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **8.2%** (women=None green=None ins=None insFlag=No)

#### 31. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R87: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Self - Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.8%** [Final rate]
- mst R681 (OFF-1030): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.8%** (women=None green=None ins=None insFlag=No)

#### 32. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R88: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Self - Employed | label=600 - 649 | cibil~600-649 | cond=None | **9.2%** [Final rate]
- mst R682 (OFF-1031): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **9.2%** (women=None green=None ins=None insFlag=No)

#### 33. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R89: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Self - Employed | label=< 600 | cibil~300-None | cond=None | **9.9%** [Final rate]
- mst R683 (OFF-1032): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **9.9%** (women=None green=None ins=None insFlag=No)

#### 34. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R90: Maha Super Flexi Housing Loan Scheme | Overdraft | Floating | occ=Self - Employed | label=NTC | cibil~-1-0 | cond=None | **8.15%** [Final rate]
- mst R684 (OFF-1033): Maha Super Flexi Housing Loan | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)

#### 35. [OK] Δ=0.0%  score=22 (rate, rate_type, facility, occupation, cibil:5)
- src R47: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Salaried | label=800+ | cibil~800-900 | cond=None | **7.1%** [Final rate]
- mst R653 (OFF-1002): Maha Super Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.1%** (women=None green=None ins=None insFlag=No)

#### 36. [OK] Δ=0.0%  score=22 (rate, rate_type, facility, occupation, cibil:5)
- src R48: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Salaried | label=750 - 799 | cibil~750-799 | cond=None | **7.25%** [Final rate]
- mst R654 (OFF-1003): Maha Super Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.25%** (women=None green=None ins=None insFlag=No)

#### 37. [OK] Δ=0.0%  score=22 (rate, rate_type, facility, occupation, cibil:5)
- src R49: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Salaried | label=725 - 749 | cibil~725-749 | cond=None | **7.7%** [Final rate]
- mst R655 (OFF-1004): Maha Super Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=725-749 | loan=None-None | ten=None-None | **7.7%** (women=None green=None ins=None insFlag=No)

#### 38. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R50: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Salaried | label=700 - 724 | cibil~700-724 | cond=None | **7.65%** [Final rate]
- mst R656 (OFF-1005): Maha Super Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **7.75%** (women=7.7 green=7.65 ins=None insFlag=No)

#### 39. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R51: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Salaried | label=650 - 699 | cibil~650-699 | cond=None | **8.25%** [Final rate]
- mst R657 (OFF-1006): Maha Super Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.35%** (women=8.3 green=8.25 ins=None insFlag=No)

#### 40. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R52: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Salaried | label=600 - 649 | cibil~600-649 | cond=None | **8.65%** [Final rate]
- mst R658 (OFF-1007): Maha Super Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **8.75%** (women=8.7 green=8.65 ins=None insFlag=No)

#### 41. [OK via green_roi] Δ=0.0%  score=16 (green_roi, rate_type, facility, occupation)
- src R53: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Salaried | label=< 600 | cibil~300-None | cond=None | **9.05%** [Final rate]
- mst R659 (OFF-1008): Maha Super Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **9.15%** (women=9.1 green=9.05 ins=None insFlag=No)

#### 42. [OK via green_roi] Δ=0.0%  score=19 (green_roi, rate_type, facility, occupation, cibil:3)
- src R54: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Salaried | label=NTC | cibil~-1-0 | cond=None | **7.6%** [Final rate]
- mst R660 (OFF-1009): Maha Super Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **7.7%** (women=7.65 green=7.6 ins=None insFlag=No)

#### 43. [OK] Δ=0.0%  score=22 (rate, rate_type, facility, occupation, cibil:5)
- src R57: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.2%** [Final rate]
- mst R661 (OFF-1010): Maha Super Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.2%** (women=None green=None ins=None insFlag=No)

#### 44. [OK] Δ=0.0%  score=22 (rate, rate_type, facility, occupation, cibil:5)
- src R58: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.35%** [Final rate]
- mst R662 (OFF-1011): Maha Super Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.35%** (women=None green=None ins=None insFlag=No)

#### 45. [OK] Δ=0.0%  score=22 (rate, rate_type, facility, occupation, cibil:5)
- src R59: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Self-Employed | label=725 - 749 | cibil~725-749 | cond=None | **7.8%** [Final rate]
- mst R663 (OFF-1012): Maha Super Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=725-749 | loan=None-None | ten=None-None | **7.8%** (women=None green=None ins=None insFlag=No)

#### 46. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R60: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Self-Employed | label=700 - 724 | cibil~700-724 | cond=None | **7.85%** [Final rate]
- mst R664 (OFF-1013): Maha Super Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **7.95%** (women=7.9 green=7.85 ins=None insFlag=No)

#### 47. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R61: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.45%** [Final rate]
- mst R665 (OFF-1014): Maha Super Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.55%** (women=8.5 green=8.45 ins=None insFlag=No)

#### 48. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R62: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **8.85%** [Final rate]
- mst R666 (OFF-1015): Maha Super Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **8.95%** (women=8.9 green=8.85 ins=None insFlag=No)

#### 49. [OK via green_roi] Δ=0.0%  score=16 (green_roi, rate_type, facility, occupation)
- src R63: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Self-Employed | label=< 600 | cibil~300-None | cond=None | **9.55%** [Final rate]
- mst R667 (OFF-1016): Maha Super Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **9.65%** (women=9.6 green=9.55 ins=None insFlag=No)

#### 50. [OK via green_roi] Δ=0.0%  score=19 (green_roi, rate_type, facility, occupation, cibil:3)
- src R64: Maha Super Green Building (For green building) | Term Loan | Floating | occ=Self-Employed | label=NTC | cibil~-1-0 | cond=None | **7.8%** [Final rate]
- mst R668 (OFF-1017): Maha Super Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **7.9%** (women=7.85 green=7.8 ins=None insFlag=No)

### Source lines with no master match

- src R23: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Salaried | label=800+ | cibil~800-900 | cond=None | **7.1%** [Final rate]
- src R24: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Salaried | label=750 - 799 | cibil~750-799 | cond=None | **7.25%** [Final rate]
- src R25: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Salaried | label=725 - 749 | cibil~725-749 | cond=None | **7.7%** [Final rate]
- src R26: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Salaried | label=700 - 724 | cibil~700-724 | cond=None | **7.75%** [Final rate]
- src R27: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Salaried | label=650 - 699 | cibil~650-699 | cond=None | **8.35%** [Final rate]
- src R28: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Salaried | label=600 - 649 | cibil~600-649 | cond=None | **8.75%** [Final rate]
- src R29: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Salaried | label=< 600 | cibil~300-None | cond=None | **9.15%** [Final rate]
- src R30: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Salaried | label=NTC | cibil~-1-0 | cond=None | **7.7%** [Final rate]
- src R33: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.2%** [Final rate]
- src R34: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.35%** [Final rate]
- src R35: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=725 - 749 | cibil~725-749 | cond=None | **7.8%** [Final rate]
- src R36: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=700 - 724 | cibil~700-724 | cond=None | **7.95%** [Final rate]
- src R37: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.55%** [Final rate]
- src R38: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **8.95%** [Final rate]
- src R39: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=< 600 | cibil~300-None | cond=None | **9.65%** [Final rate]
- src R40: Maha Super Housing Loan Scheme | Term Loan | Floating | occ=Self-Employed | label=NTC | cibil~-1-0 | cond=None | **7.9%** [Final rate]

### Master rows with no source match (3)

- mst R703 (OFF-1052): Maha Super Housing Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=None-None | loan=1-3000000 | ten=None-None | **11.5%** (women=None green=11.4 ins=None insFlag=No)
- mst R704 (OFF-1053): Maha Super Housing Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=None-None | loan=3000001-7500000 | ten=None-None | **12.5%** (women=None green=12.4 ins=None insFlag=No)
- mst R705 (OFF-1054): Maha Super Housing Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=None-None | loan=7500001-20000000 | ten=None-None | **12.7%** (women=None green=12.6 ins=None insFlag=No)

---

## Canara Bank

- Sheet: `Canara bank`
- Source Final/ROI lines: **25**
- Master Offers rows: **25**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[7.2, 7.25, 7.3, 7.6, 7.65, 7.7, 8.5, 8.55, 8.8, 8.85, 9.25, 9.7, 9.8, 9.9, 10.0, 10.75]`
- Master unique `roi` (%): `[7.2, 7.25, 7.3, 7.6, 7.65, 7.7, 8.5, 8.55, 8.8, 8.85, 9.25, 9.7, 9.8, 9.9, 10.0, 10.75]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R56: HOUSING LOAN | Term Loan | Fixed | occ=Any | label=800+ | cibil~800-900 | cond=Loan amount above Rs. 250 lakhs | **8.55%** [Final rate]
- mst R497 (OFF-680): Housing loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **8.55%** (women=8.5 green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R57: HOUSING LOAN | Term Loan | Fixed | occ=Any | label=750 - 799 | cibil~750-799 | cond=Loan amount above Rs. 250 lakhs | **8.8%** [Final rate]
- mst R498 (OFF-683): Housing loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **8.8%** (women=8.75 green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R58: HOUSING LOAN | Term Loan | Fixed | occ=Any | label=700 - 749 | cibil~700-749 | cond=Loan amount above Rs. 250 lakhs | **8.85%** [Final rate]
- mst R499 (OFF-686): Housing loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **8.85%** (women=8.8 green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R59: HOUSING LOAN | Term Loan | Fixed | occ=Any | label=650 - 699 | cibil~650-699 | cond=Loan amount above Rs. 250 lakhs | **9.25%** [Final rate]
- mst R500 (OFF-689): Housing loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **9.25%** (women=9.2 green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R60: HOUSING LOAN | Term Loan | Fixed | occ=Any | label=< 650 | cibil~300-None | cond=Loan amount above Rs. 250 lakhs | **10.75%** [Final rate]
- mst R501 (OFF-692): Housing loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=300-649 | loan=None-None | ten=None-None | **10.75%** (women=10.7 green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R22: HOUSING LOAN | Term Loan | Floating | occ=Any | label=800+ | cibil~800-900 | cond=Loan amount upto Rs. 50 lakhs | **7.3%** [Final rate]
- mst R477 (OFF-620): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=1-5000000 | ten=None-None | **7.3%** (women=7.25 green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: HOUSING LOAN | Term Loan | Floating | occ=Any | label=750 - 799 | cibil~750-799 | cond=Loan amount upto Rs. 50 lakhs | **7.3%** [Final rate]
- mst R478 (OFF-623): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=1-5000000 | ten=None-None | **7.3%** (women=7.25 green=None ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: HOUSING LOAN | Term Loan | Floating | occ=Any | label=700 - 749 | cibil~700-749 | cond=Loan amount upto Rs. 50 lakhs | **7.7%** [Final rate]
- mst R479 (OFF-626): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=1-5000000 | ten=None-None | **7.7%** (women=7.65 green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: HOUSING LOAN | Term Loan | Floating | occ=Any | label=650 - 699 | cibil~650-699 | cond=Loan amount upto Rs. 50 lakhs | **8.5%** [Final rate]
- mst R480 (OFF-629): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=1-5000000 | ten=None-None | **8.5%** (women=8.45 green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R26: HOUSING LOAN | Term Loan | Floating | occ=Any | label=< 650 | cibil~300-None | cond=Loan amount upto Rs. 50 lakhs | **10.0%** [Final rate]
- mst R481 (OFF-632): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-649 | loan=1-5000000 | ten=None-None | **10.0%** (women=9.95 green=None ins=None insFlag=No)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R29: HOUSING LOAN | Term Loan | Floating | occ=Any | label=800+ | cibil~800-900 | cond=Loan amount above Rs. 50 lakhs - 100 lakhs | **7.25%** [Final rate]
- mst R482 (OFF-635): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=5000001-10000000 | ten=None-None | **7.25%** (women=7.2 green=None ins=None insFlag=No)

#### 12. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R30: HOUSING LOAN | Term Loan | Floating | occ=Any | label=750 - 799 | cibil~750-799 | cond=Loan amount above Rs. 50 lakhs - 100 lakhs | **7.25%** [Final rate]
- mst R483 (OFF-638): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=5000001-10000000 | ten=None-None | **7.25%** (women=7.2 green=None ins=None insFlag=No)

#### 13. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R31: HOUSING LOAN | Term Loan | Floating | occ=Any | label=700 - 749 | cibil~700-749 | cond=Loan amount above Rs. 50 lakhs - 100 lakhs | **7.65%** [Final rate]
- mst R484 (OFF-641): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=5000001-10000000 | ten=None-None | **7.65%** (women=7.6 green=None ins=None insFlag=No)

#### 14. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R32: HOUSING LOAN | Term Loan | Floating | occ=Any | label=650 - 699 | cibil~650-699 | cond=Loan amount above Rs. 50 lakhs - 100 lakhs | **8.5%** [Final rate]
- mst R485 (OFF-644): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=5000001-10000000 | ten=None-None | **8.5%** (women=8.45 green=None ins=None insFlag=No)

#### 15. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R33: HOUSING LOAN | Term Loan | Floating | occ=Any | label=< 650 | cibil~300-None | cond=Loan amount above Rs. 50 lakhs - 100 lakhs | **9.9%** [Final rate]
- mst R486 (OFF-647): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-649 | loan=5000001-10000000 | ten=None-None | **9.9%** (women=9.85 green=None ins=None insFlag=No)

#### 16. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R36: HOUSING LOAN | Term Loan | Floating | occ=Any | label=800+ | cibil~800-900 | cond=Loan amount above Rs. 100 lakhs - 250 lakhs | **7.2%** [Final rate]
- mst R487 (OFF-650): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=10000001-25000000 | ten=None-None | **7.2%** (women=7.15 green=None ins=None insFlag=No)

#### 17. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R37: HOUSING LOAN | Term Loan | Floating | occ=Any | label=750 - 799 | cibil~750-799 | cond=Loan amount above Rs. 100 lakhs - 250 lakhs | **7.2%** [Final rate]
- mst R488 (OFF-653): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=10000001-25000000 | ten=None-None | **7.2%** (women=7.15 green=None ins=None insFlag=No)

#### 18. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R38: HOUSING LOAN | Term Loan | Floating | occ=Any | label=700 - 749 | cibil~700-749 | cond=Loan amount above Rs. 100 lakhs - 250 lakhs | **7.6%** [Final rate]
- mst R489 (OFF-656): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=10000001-25000000 | ten=None-None | **7.6%** (women=7.55 green=None ins=None insFlag=No)

#### 19. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R39: HOUSING LOAN | Term Loan | Floating | occ=Any | label=650 - 699 | cibil~650-699 | cond=Loan amount above Rs. 100 lakhs - 250 lakhs | **8.5%** [Final rate]
- mst R490 (OFF-659): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=10000001-25000000 | ten=None-None | **8.5%** (women=8.45 green=None ins=None insFlag=No)

#### 20. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R40: HOUSING LOAN | Term Loan | Floating | occ=Any | label=< 650 | cibil~300-None | cond=Loan amount above Rs. 100 lakhs - 250 lakhs | **9.8%** [Final rate]
- mst R491 (OFF-662): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-649 | loan=10000001-25000000 | ten=None-None | **9.8%** (women=9.75 green=None ins=None insFlag=No)

#### 21. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R43: HOUSING LOAN | Term Loan | Floating | occ=Any | label=800+ | cibil~800-900 | cond=Loan amount above Rs. 250 lakhs | **7.2%** [Final rate]
- mst R492 (OFF-665): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=25000001-1000000000 | ten=None-None | **7.2%** (women=7.15 green=None ins=None insFlag=No)

#### 22. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R44: HOUSING LOAN | Term Loan | Floating | occ=Any | label=750 - 799 | cibil~750-799 | cond=Loan amount above Rs. 250 lakhs | **7.2%** [Final rate]
- mst R493 (OFF-668): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=25000001-1000000000 | ten=None-None | **7.2%** (women=7.15 green=None ins=None insFlag=No)

#### 23. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R45: HOUSING LOAN | Term Loan | Floating | occ=Any | label=700 - 749 | cibil~700-749 | cond=Loan amount above Rs. 250 lakhs | **7.6%** [Final rate]
- mst R494 (OFF-671): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=25000001-1000000000 | ten=None-None | **7.6%** (women=7.55 green=None ins=None insFlag=No)

#### 24. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R46: HOUSING LOAN | Term Loan | Floating | occ=Any | label=650 - 699 | cibil~650-699 | cond=Loan amount above Rs. 250 lakhs | **8.5%** [Final rate]
- mst R495 (OFF-674): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=25000001-1000000000 | ten=None-None | **8.5%** (women=8.45 green=None ins=None insFlag=No)

#### 25. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R47: HOUSING LOAN | Term Loan | Floating | occ=Any | label=< 650 | cibil~300-None | cond=Loan amount above Rs. 250 lakhs | **9.7%** [Final rate]
- mst R496 (OFF-677): Housing loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-649 | loan=25000001-1000000000 | ten=None-None | **9.7%** (women=9.65 green=None ins=None insFlag=No)

---

## Central Bank of India

- Sheet: `Central Bank of India`
- Source Final/ROI lines: **15**
- Master Offers rows: **15**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[7.2, 7.3, 7.65, 7.95, 8.05, 8.35, 8.45, 8.55, 8.75, 9.05, 9.15, 9.3]`
- Master unique `roi` (%): `[7.2, 7.3, 7.65, 7.95, 8.05, 8.35, 8.45, 8.55, 8.75, 9.05, 9.15, 9.3]`

### Line matches

#### 1. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R39: CENT TOP UP SCHEME | Term Loan | Floating | occ=Any | label=800+ | cibil~800-900 | cond=None | **7.95%** [Final rate]
- mst R72 (OFF-82): Cent Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.95%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R40: CENT TOP UP SCHEME | Term Loan | Floating | occ=Any | label=775 - 799 | cibil~775-799 | cond=None | **8.05%** [Final rate]
- mst R73 (OFF-84): Cent Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=775-799 | loan=None-None | ten=None-None | **8.05%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R41: CENT TOP UP SCHEME | Term Loan | Floating | occ=Any | label=750 - 774 | cibil~750-774 | cond=None | **8.55%** [Final rate]
- mst R74 (OFF-86): Cent Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-774 | loan=None-None | ten=None-None | **8.55%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R42: CENT TOP UP SCHEME | Term Loan | Floating | occ=Any | label=725 - 749 | cibil~725-749 | cond=None | **9.05%** [Final rate]
- mst R75 (OFF-88): Cent Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=725-749 | loan=None-None | ten=None-None | **9.05%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R43: CENT TOP UP SCHEME | Term Loan | Floating | occ=Any | label=700 - 724 | cibil~700-724 | cond=None | **9.3%** [Final rate]
- mst R76 (OFF-90): Cent Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **9.3%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R30: Cent Home Double Plus Scheme | Overdraft | Floating | occ=Any | label=800+ | cibil~800-900 | cond=None | **8.35%** [Final rate]
- mst R67 (OFF-72): Cent Home Double Plus | Overdraft | Floating | occ=Any | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R31: Cent Home Double Plus Scheme | Overdraft | Floating | occ=Any | label=775 - 799 | cibil~775-799 | cond=None | **8.45%** [Final rate]
- mst R68 (OFF-74): Cent Home Double Plus | Overdraft | Floating | occ=Any | cat=Any | cibil=775-799 | loan=None-None | ten=None-None | **8.45%** (women=None green=None ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R32: Cent Home Double Plus Scheme | Overdraft | Floating | occ=Any | label=750 - 774 | cibil~750-774 | cond=None | **8.55%** [Final rate]
- mst R69 (OFF-76): Cent Home Double Plus | Overdraft | Floating | occ=Any | cat=Any | cibil=750-774 | loan=None-None | ten=None-None | **8.55%** (women=None green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R33: Cent Home Double Plus Scheme | Overdraft | Floating | occ=Any | label=725 - 749 | cibil~725-749 | cond=None | **8.75%** [Final rate]
- mst R70 (OFF-78): Cent Home Double Plus | Overdraft | Floating | occ=Any | cat=Any | cibil=725-749 | loan=None-None | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R34: Cent Home Double Plus Scheme | Overdraft | Floating | occ=Any | label=700 - 724 | cibil~700-724 | cond=None | **9.15%** [Final rate]
- mst R71 (OFF-80): Cent Home Double Plus | Overdraft | Floating | occ=Any | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **9.15%** (women=None green=None ins=None insFlag=No)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R21: Cent Home loan | Term Loan | Floating | occ=Any | label=800+ | cibil~800-900 | cond=None | **7.2%** [Final rate]
- mst R62 (OFF-62): Cent Home loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.2%** (women=None green=None ins=None insFlag=No)

#### 12. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R22: Cent Home loan | Term Loan | Floating | occ=Any | label=775 - 799 | cibil~775-799 | cond=None | **7.3%** [Final rate]
- mst R63 (OFF-64): Cent Home loan | Term Loan | Floating | occ=Any | cat=Any | cibil=775-799 | loan=None-None | ten=None-None | **7.3%** (women=None green=None ins=None insFlag=No)

#### 13. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Cent Home loan | Term Loan | Floating | occ=Any | label=750 - 774 | cibil~750-774 | cond=None | **7.65%** [Final rate]
- mst R64 (OFF-66): Cent Home loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-774 | loan=None-None | ten=None-None | **7.65%** (women=None green=None ins=None insFlag=No)

#### 14. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Cent Home loan | Term Loan | Floating | occ=Any | label=725 - 749 | cibil~725-749 | cond=None | **8.45%** [Final rate]
- mst R65 (OFF-68): Cent Home loan | Term Loan | Floating | occ=Any | cat=Any | cibil=725-749 | loan=None-None | ten=None-None | **8.45%** (women=None green=None ins=None insFlag=No)

#### 15. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Cent Home loan | Term Loan | Floating | occ=Any | label=700 - 724 | cibil~700-724 | cond=None | **8.75%** [Final rate]
- mst R66 (OFF-70): Cent Home loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)

---

## City Union Bank

- Sheet: `City Union Bank`
- Source Final/ROI lines: **18**
- Master Offers rows: **18**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[8.25, 8.35, 8.5, 8.75, 8.85, 9.0, 9.25, 9.35, 9.5, 9.85, 10.85]`
- Master unique `roi` (%): `[8.25, 8.35, 8.5, 8.75, 8.85, 9.0, 9.25, 9.35, 9.5, 9.85, 10.85]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R47: Premium Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=75 lakhs to 7.5 crore | **8.75%** [Final rate]
- mst R779 (OFF-1128): Premium Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=7500001-75000000 | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R48: Premium Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 -799 | cibil~700-799 | cond=75 lakhs to 7.5 crore | **9.0%** [Final rate]
- mst R780 (OFF-1129): Premium Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-799 | loan=7500001-75000000 | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R49: Premium Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=100 - 200 | cibil~100-200 | cond=75 lakhs to 7.5 crore | **9.5%** [Final rate]
- mst R781 (OFF-1130): Premium Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=100-200 | loan=7500001-75000000 | ten=None-None | **9.5%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R83: Premium Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=75 lakhs to 7.5 crore | **9.35%** [Final rate]
- mst R788 (OFF-1137): Premium Home Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=800-900 | loan=7500001-75000000 | ten=None-None | **9.35%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R84: Premium Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 -799 | cibil~700-799 | cond=75 lakhs to 7.5 crore | **9.85%** [Final rate]
- mst R789 (OFF-1138): Premium Home Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=700-799 | loan=7500001-75000000 | ten=None-None | **9.85%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R85: Premium Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=100 - 200 | cibil~100-200 | cond=75 lakhs to 7.5 crore | **10.85%** [Final rate]
- mst R790 (OFF-1139): Premium Home Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=100-200 | loan=7500001-75000000 | ten=None-None | **10.85%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R72: Prime Home Loan | Term Loan | Fixed | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=30 lakhs to 75 lakhs | **8.85%** [Final rate]
- mst R785 (OFF-1134): Prime Home Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=800-900 | loan=3000001-7500000 | ten=None-None | **8.85%** (women=None green=None ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R73: Prime Home Loan | Term Loan | Fixed | occ=Salaried & Self-Employed | label=700 -799 | cibil~700-799 | cond=30 lakhs to 75 lakhs | **9.35%** [Final rate]
- mst R786 (OFF-1135): Prime Home Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=700-799 | loan=3000001-7500000 | ten=None-None | **9.35%** (women=None green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R74: Prime Home Loan | Term Loan | Fixed | occ=Salaried & Self-Employed | label=100 - 200 | cibil~100-200 | cond=30 lakhs to 75 lakhs | **9.85%** [Final rate]
- mst R787 (OFF-1136): Prime Home Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=100-200 | loan=3000001-7500000 | ten=None-None | **9.85%** (women=None green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R36: Prime Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=30 lakhs to 75 lakhs | **8.5%** [Final rate]
- mst R776 (OFF-1125): Prime Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=3000001-7500000 | ten=None-None | **8.5%** (women=None green=None ins=None insFlag=No)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R37: Prime Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 -799 | cibil~700-799 | cond=30 lakhs to 75 lakhs | **8.75%** [Final rate]
- mst R777 (OFF-1126): Prime Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-799 | loan=3000001-7500000 | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)

#### 12. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R38: Prime Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=100 - 200 | cibil~100-200 | cond=30 lakhs to 75 lakhs | **9.25%** [Final rate]
- mst R778 (OFF-1127): Prime Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=100-200 | loan=3000001-7500000 | ten=None-None | **9.25%** (women=None green=None ins=None insFlag=No)

#### 13. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R61: affordable Home Loan | Term Loan | Fixed | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=upto 30 lakhs | **8.35%** [Final rate]
- mst R782 (OFF-1131): Affordable Home Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=800-900 | loan=1-3000000 | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)

#### 14. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R62: affordable Home Loan | Term Loan | Fixed | occ=Salaried & Self-Employed | label=700 -799 | cibil~700-799 | cond=upto 30 lakhs | **8.85%** [Final rate]
- mst R783 (OFF-1132): Affordable Home Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=700-799 | loan=1-3000000 | ten=None-None | **8.85%** (women=None green=None ins=None insFlag=No)

#### 15. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R63: affordable Home Loan | Term Loan | Fixed | occ=Salaried & Self-Employed | label=100 - 200 | cibil~100-200 | cond=upto 30 lakhs | **9.35%** [Final rate]
- mst R784 (OFF-1133): Affordable Home Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=100-200 | loan=1-3000000 | ten=None-None | **9.35%** (women=None green=None ins=None insFlag=No)

#### 16. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: affordable Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=upto 30 lakhs | **8.25%** [Final rate]
- mst R773 (OFF-1122): Affordable Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=1-3000000 | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)

#### 17. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: affordable Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 -799 | cibil~700-799 | cond=upto 30 lakhs | **8.5%** [Final rate]
- mst R774 (OFF-1123): Affordable Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-799 | loan=1-3000000 | ten=None-None | **8.5%** (women=None green=None ins=None insFlag=No)

#### 18. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: affordable Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=100 - 200 | cibil~100-200 | cond=upto 30 lakhs | **9.0%** [Final rate]
- mst R775 (OFF-1124): Affordable Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=100-200 | loan=1-3000000 | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)

---

## CSB Bank

- Sheet: `CSB Bank`
- Source Final/ROI lines: **6**
- Master Offers rows: **6**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[8.3, 8.65, 9.05, 9.45, 9.85, 10.15]`
- Master unique `roi` (%): `[8.3, 8.65, 9.05, 9.45, 9.85, 10.15]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **8.3%** [Final rate]
- mst R1124 (OFF-1480): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **8.3%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **8.65%** [Final rate]
- mst R1125 (OFF-1481): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **8.65%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **9.05%** [Final rate]
- mst R1126 (OFF-1482): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **9.05%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **9.45%** [Final rate]
- mst R1127 (OFF-1483): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **9.45%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **9.85%** [Final rate]
- mst R1128 (OFF-1484): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **9.85%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R28: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **10.15%** [Final rate]
- mst R1129 (OFF-1485): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **10.15%** (women=None green=None ins=None insFlag=No)

---

## DCB Bank

- Sheet: `DCB Bank`
- Source Final/ROI lines: **6**
- Master Offers rows: **6**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[9.75, 9.9, 10.15, 10.3, 10.53, 10.65]`
- Master unique `roi` (%): `[9.75, 9.9, 10.15, 10.3, 10.53, 10.65]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **9.75%** [Final rate]
- mst R725 (OFF-1074): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **9.75%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **9.9%** [Final rate]
- mst R726 (OFF-1075): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **9.9%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **10.15%** [Final rate]
- mst R727 (OFF-1076): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **10.15%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **10.3%** [Final rate]
- mst R728 (OFF-1077): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **10.3%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **10.53%** [Final rate]
- mst R729 (OFF-1078): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **10.53%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R28: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **10.65%** [Final rate]
- mst R730 (OFF-1079): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)

---

## Dhanlaxmi Bank

- Sheet: `Dhanlaxmi Bank`
- Source Final/ROI lines: **7**
- Master Offers rows: **7**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[8.2, 8.3, 8.4, 9.0, 10.8, 11.0, 11.5]`
- Master unique `roi` (%): `[8.2, 8.3, 8.4, 9.0, 10.8, 11.0, 11.5]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=825+ | cibil~825-900 | cond=None | **8.2%** [Final rate]
- mst R845 (OFF-1194): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=825-900 | loan=None-None | ten=None-None | **8.2%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800 - 824 | cibil~800-824 | cond=None | **8.3%** [Final rate]
- mst R846 (OFF-1195): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **8.3%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **8.4%** [Final rate]
- mst R847 (OFF-1196): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **8.4%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **9.0%** [Final rate]
- mst R848 (OFF-1197): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **10.8%** [Final rate]
- mst R849 (OFF-1198): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **10.8%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R28: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **11.0%** [Final rate]
- mst R850 (OFF-1199): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **11.0%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R29: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **11.5%** [Final rate]
- mst R851 (OFF-1200): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **11.5%** (women=None green=None ins=None insFlag=No)

---

## Federal Bank

- Sheet: `Federal Bank`
- Source Final/ROI lines: **6**
- Master Offers rows: **6**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[7.35, 7.75, 7.95, 8.25, 8.65, 9.0]`
- Master unique `roi` (%): `[7.35, 7.75, 7.95, 8.25, 8.65, 9.0]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.35%** [Final rate]
- mst R852 (OFF-1201): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.35%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.75%** [Final rate]
- mst R853 (OFF-1202): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **7.95%** [Final rate]
- mst R854 (OFF-1203): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **7.95%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.25%** [Final rate]
- mst R855 (OFF-1204): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **8.65%** [Final rate]
- mst R856 (OFF-1205): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **8.65%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R28: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **9.0%** [Final rate]
- mst R857 (OFF-1206): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)

---

## HDFC Bank

- Sheet: `HDFC Bank`
- Source Final/ROI lines: **6**
- Master Offers rows: **6**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[7.25, 7.6, 7.9, 8.15, 8.45, 8.65]`
- Master unique `roi` (%): `[7.25, 7.6, 7.9, 8.15, 8.45, 8.65]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.25%** [Final rate]
- mst R839 (OFF-1188): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.25%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.6%** [Final rate]
- mst R840 (OFF-1189): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **7.9%** [Final rate]
- mst R841 (OFF-1190): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R28: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.15%** [Final rate]
- mst R842 (OFF-1191): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R29: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **8.45%** [Final rate]
- mst R843 (OFF-1192): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **8.45%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R30: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **8.65%** [Final rate]
- mst R844 (OFF-1193): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **8.65%** (women=None green=None ins=None insFlag=No)

---

## ICICI Bank

- Sheet: `ICICI Bank`
- Source Final/ROI lines: **12**
- Master Offers rows: **24**
- Verdict: `RATES_OK_ROW_EXPANSION`
- Source unique rates (%): `[7.15, 7.4, 7.65, 7.8, 7.9, 8.0, 8.1, 8.5, 8.8, 9.0, 9.2]`
- Master unique `roi` (%): `[7.15, 7.4, 7.65, 7.8, 7.9, 8.0, 8.1, 8.5, 8.8, 9.0, 9.2]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.15%** [Final rate]
- mst R815 (OFF-1164): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.15%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.65%** [Final rate]
- mst R817 (OFF-1166): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.65%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **7.8%** [Final rate]
- mst R819 (OFF-1168): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **7.8%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.1%** [Final rate]
- mst R821 (OFF-1170): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.1%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R28: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **8.5%** [Final rate]
- mst R823 (OFF-1172): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **8.5%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R29: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **8.8%** [Final rate]
- mst R825 (OFF-1174): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **8.8%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R37: ICICI Money Saver | Overdraft | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.4%** [Final rate]
- mst R827 (OFF-1176): ICICI Money Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.4%** (women=None green=None ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R38: ICICI Money Saver | Overdraft | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.9%** [Final rate]
- mst R829 (OFF-1178): ICICI Money Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R39: ICICI Money Saver | Overdraft | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **8.0%** [Final rate]
- mst R831 (OFF-1180): ICICI Money Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **8.0%** (women=None green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R40: ICICI Money Saver | Overdraft | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.5%** [Final rate]
- mst R833 (OFF-1182): ICICI Money Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.5%** (women=None green=None ins=None insFlag=No)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R41: ICICI Money Saver | Overdraft | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **9.0%** [Final rate]
- mst R835 (OFF-1184): ICICI Money Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)

#### 12. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R42: ICICI Money Saver | Overdraft | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **9.2%** [Final rate]
- mst R837 (OFF-1186): ICICI Money Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **9.2%** (women=None green=None ins=None insFlag=No)

### Master rows with no source match (12)

- mst R816 (OFF-1165): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.15%** (women=None green=None ins=None insFlag=No)
- mst R818 (OFF-1167): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.65%** (women=None green=None ins=None insFlag=No)
- mst R820 (OFF-1169): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **7.8%** (women=None green=None ins=None insFlag=No)
- mst R822 (OFF-1171): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.1%** (women=None green=None ins=None insFlag=No)
- mst R824 (OFF-1173): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **8.5%** (women=None green=None ins=None insFlag=No)
- mst R826 (OFF-1175): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **8.8%** (women=None green=None ins=None insFlag=No)
- mst R828 (OFF-1177): ICICI Money Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.4%** (women=None green=None ins=None insFlag=No)
- mst R830 (OFF-1179): ICICI Money Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)
- mst R832 (OFF-1181): ICICI Money Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **8.0%** (women=None green=None ins=None insFlag=No)
- mst R834 (OFF-1183): ICICI Money Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.5%** (women=None green=None ins=None insFlag=No)
- mst R836 (OFF-1185): ICICI Money Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)
- mst R838 (OFF-1187): ICICI Money Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **9.2%** (women=None green=None ins=None insFlag=No)

---

## IDBI Bank

- Sheet: `IDBI Bank`
- Source Final/ROI lines: **21**
- Master Offers rows: **84**
- Verdict: `RATES_OK_ROW_EXPANSION`
- Source unique rates (%): `[7.35, 7.55, 7.7, 7.75, 7.9, 7.95, 8.05, 8.1, 8.15, 8.25, 8.35, 8.45, 8.9, 9.1, 9.3, 9.45, 9.65, 9.85, 10.05, 10.25, 10.45]`
- Master unique `roi` (%): `[7.35, 7.55, 7.7, 7.75, 7.9, 7.95, 8.05, 8.1, 8.15, 8.25, 8.35, 8.45, 8.9, 9.1, 9.3, 9.45, 9.65, 9.85, 10.05, 10.25, 10.45]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R36: Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried & Self-Employed | label=825+ | cibil~825-900 | cond=None | **7.75%** [Final rate]
- mst R872 (OFF-1221): Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=825-900 | loan=1-7500000 | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R37: Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried & Self-Employed | label=781 - 824 | cibil~781-824 | cond=None | **8.1%** [Final rate]
- mst R874 (OFF-1223): Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=781-824 | loan=1-7500000 | ten=None-None | **8.1%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R38: Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried & Self-Employed | label=761 - 780 | cibil~761-780 | cond=None | **8.35%** [Final rate]
- mst R876 (OFF-1225): Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=761-780 | loan=1-7500000 | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R39: Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried & Self-Employed | label=741 - 760 | cibil~741-760 | cond=None | **8.45%** [Final rate]
- mst R878 (OFF-1227): Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=741-760 | loan=1-7500000 | ten=None-None | **8.45%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R40: Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried & Self-Employed | label=721 - 740 | cibil~721-740 | cond=None | **9.3%** [Final rate]
- mst R880 (OFF-1229): Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=721-740 | loan=1-7500000 | ten=None-None | **9.3%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R41: Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried & Self-Employed | label=700 - 720 | cibil~700-720 | cond=None | **9.85%** [Final rate]
- mst R882 (OFF-1231): Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=700-720 | loan=1-7500000 | ten=None-None | **9.85%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R42: Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **10.45%** [Final rate]
- mst R884 (OFF-1233): Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=1-7500000 | ten=None-None | **10.45%** (women=None green=None ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R50: Home loan Top Up | Term Loan | Floating | occ=Salaried & Self-Employed | label=825+ | cibil~825-900 | cond=None | **7.55%** [Final rate]
- mst R886 (OFF-1235): Home Loan Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=825-900 | loan=1-7500000 | ten=None-None | **7.55%** (women=None green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R51: Home loan Top Up | Term Loan | Floating | occ=Salaried & Self-Employed | label=781 - 824 | cibil~781-824 | cond=None | **7.9%** [Final rate]
- mst R888 (OFF-1237): Home Loan Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=781-824 | loan=1-7500000 | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R52: Home loan Top Up | Term Loan | Floating | occ=Salaried & Self-Employed | label=761 - 780 | cibil~761-780 | cond=None | **8.15%** [Final rate]
- mst R890 (OFF-1239): Home Loan Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=761-780 | loan=1-7500000 | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R53: Home loan Top Up | Term Loan | Floating | occ=Salaried & Self-Employed | label=741 - 760 | cibil~741-760 | cond=None | **8.25%** [Final rate]
- mst R892 (OFF-1241): Home Loan Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=741-760 | loan=1-7500000 | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)

#### 12. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R54: Home loan Top Up | Term Loan | Floating | occ=Salaried & Self-Employed | label=721 - 740 | cibil~721-740 | cond=None | **9.1%** [Final rate]
- mst R894 (OFF-1243): Home Loan Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=721-740 | loan=1-7500000 | ten=None-None | **9.1%** (women=None green=None ins=None insFlag=No)

#### 13. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R55: Home loan Top Up | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 720 | cibil~700-720 | cond=None | **9.65%** [Final rate]
- mst R896 (OFF-1245): Home Loan Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-720 | loan=1-7500000 | ten=None-None | **9.65%** (women=None green=None ins=None insFlag=No)

#### 14. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R56: Home loan Top Up | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **10.25%** [Final rate]
- mst R898 (OFF-1247): Home Loan Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=1-7500000 | ten=None-None | **10.25%** (women=None green=None ins=None insFlag=No)

#### 15. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=825+ | cibil~825-900 | cond=None | **7.35%** [Final rate]
- mst R858 (OFF-1207): Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=825-900 | loan=1-7500000 | ten=None-None | **7.35%** (women=None green=None ins=None insFlag=No)

#### 16. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=781 - 824 | cibil~781-824 | cond=None | **7.7%** [Final rate]
- mst R860 (OFF-1209): Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=781-824 | loan=1-7500000 | ten=None-None | **7.7%** (women=None green=None ins=None insFlag=No)

#### 17. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=761 - 780 | cibil~761-780 | cond=None | **7.95%** [Final rate]
- mst R862 (OFF-1211): Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=761-780 | loan=1-7500000 | ten=None-None | **7.95%** (women=None green=None ins=None insFlag=No)

#### 18. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=741 - 760 | cibil~741-760 | cond=None | **8.05%** [Final rate]
- mst R864 (OFF-1213): Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=741-760 | loan=1-7500000 | ten=None-None | **8.05%** (women=None green=None ins=None insFlag=No)

#### 19. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=721 - 740 | cibil~721-740 | cond=None | **8.9%** [Final rate]
- mst R866 (OFF-1215): Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=721-740 | loan=1-7500000 | ten=None-None | **8.9%** (women=None green=None ins=None insFlag=No)

#### 20. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R28: Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 720 | cibil~700-720 | cond=None | **9.45%** [Final rate]
- mst R868 (OFF-1217): Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-720 | loan=1-7500000 | ten=None-None | **9.45%** (women=None green=None ins=None insFlag=No)

#### 21. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R29: Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **10.05%** [Final rate]
- mst R870 (OFF-1219): Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=1-7500000 | ten=None-None | **10.05%** (women=None green=None ins=None insFlag=No)

### Master rows with no source match (63)

Too many to list every row; grouped by rate:

- **7.35%** × 3 — schemes={'Plain Vanilla Home Loan': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R859 (OFF-1208): Plain Vanilla Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=825-900 | loan=1-7500000 | ten=None-None | **7.35%** (women=None green=None ins=None insFlag=No)
  - mst R900 (OFF-1249): Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=825-900 | loan=7500001-1000000000 | ten=None-None | **7.35%** (women=None green=None ins=None insFlag=No)
  - mst R901 (OFF-1250): Plain Vanilla Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=825-900 | loan=7500001-1000000000 | ten=None-None | **7.35%** (women=None green=None ins=None insFlag=No)
- **7.55%** × 3 — schemes={'Home Loan Top Up': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R887 (OFF-1236): Home Loan Top Up | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=825-900 | loan=1-7500000 | ten=None-None | **7.55%** (women=None green=None ins=None insFlag=No)
  - mst R928 (OFF-1277): Home Loan Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=825-900 | loan=7500001-1000000000 | ten=None-None | **7.55%** (women=None green=None ins=None insFlag=No)
  - mst R929 (OFF-1278): Home Loan Top Up | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=825-900 | loan=7500001-1000000000 | ten=None-None | **7.55%** (women=None green=None ins=None insFlag=No)
- **7.7%** × 3 — schemes={'Plain Vanilla Home Loan': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R861 (OFF-1210): Plain Vanilla Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=781-824 | loan=1-7500000 | ten=None-None | **7.7%** (women=None green=None ins=None insFlag=No)
  - mst R902 (OFF-1251): Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=781-824 | loan=7500001-1000000000 | ten=None-None | **7.7%** (women=None green=None ins=None insFlag=No)
  - mst R903 (OFF-1252): Plain Vanilla Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=781-824 | loan=7500001-1000000000 | ten=None-None | **7.7%** (women=None green=None ins=None insFlag=No)
- **7.75%** × 3 — schemes={'Home Loan Ultra Saver': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R873 (OFF-1222): Home Loan Ultra Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=825-900 | loan=1-7500000 | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)
  - mst R914 (OFF-1263): Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=825-900 | loan=7500001-1000000000 | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)
  - mst R915 (OFF-1264): Home Loan Ultra Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=825-900 | loan=7500001-1000000000 | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)
- **7.9%** × 3 — schemes={'Home Loan Top Up': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R889 (OFF-1238): Home Loan Top Up | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=781-824 | loan=1-7500000 | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)
  - mst R930 (OFF-1279): Home Loan Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=781-824 | loan=7500001-1000000000 | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)
  - mst R931 (OFF-1280): Home Loan Top Up | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=781-824 | loan=7500001-1000000000 | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)
- **7.95%** × 3 — schemes={'Plain Vanilla Home Loan': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R863 (OFF-1212): Plain Vanilla Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=761-780 | loan=1-7500000 | ten=None-None | **7.95%** (women=None green=None ins=None insFlag=No)
  - mst R904 (OFF-1253): Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=761-780 | loan=7500001-1000000000 | ten=None-None | **7.95%** (women=None green=None ins=None insFlag=No)
  - mst R905 (OFF-1254): Plain Vanilla Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=761-780 | loan=7500001-1000000000 | ten=None-None | **7.95%** (women=None green=None ins=None insFlag=No)
- **8.05%** × 3 — schemes={'Plain Vanilla Home Loan': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R865 (OFF-1214): Plain Vanilla Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=741-760 | loan=1-7500000 | ten=None-None | **8.05%** (women=None green=None ins=None insFlag=No)
  - mst R906 (OFF-1255): Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=741-760 | loan=7500001-1000000000 | ten=None-None | **8.05%** (women=None green=None ins=None insFlag=No)
  - mst R907 (OFF-1256): Plain Vanilla Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=741-760 | loan=7500001-1000000000 | ten=None-None | **8.05%** (women=None green=None ins=None insFlag=No)
- **8.1%** × 3 — schemes={'Home Loan Ultra Saver': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R875 (OFF-1224): Home Loan Ultra Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=781-824 | loan=1-7500000 | ten=None-None | **8.1%** (women=None green=None ins=None insFlag=No)
  - mst R916 (OFF-1265): Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=781-824 | loan=7500001-1000000000 | ten=None-None | **8.1%** (women=None green=None ins=None insFlag=No)
  - mst R917 (OFF-1266): Home Loan Ultra Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=781-824 | loan=7500001-1000000000 | ten=None-None | **8.1%** (women=None green=None ins=None insFlag=No)
- **8.15%** × 3 — schemes={'Home Loan Top Up': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R891 (OFF-1240): Home Loan Top Up | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=761-780 | loan=1-7500000 | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)
  - mst R932 (OFF-1281): Home Loan Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=761-780 | loan=7500001-1000000000 | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)
  - mst R933 (OFF-1282): Home Loan Top Up | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=761-780 | loan=7500001-1000000000 | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)
- **8.25%** × 3 — schemes={'Home Loan Top Up': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R893 (OFF-1242): Home Loan Top Up | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=741-760 | loan=1-7500000 | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)
  - mst R934 (OFF-1283): Home Loan Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=741-760 | loan=7500001-1000000000 | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)
  - mst R935 (OFF-1284): Home Loan Top Up | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=741-760 | loan=7500001-1000000000 | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)
- **8.35%** × 3 — schemes={'Home Loan Ultra Saver': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R877 (OFF-1226): Home Loan Ultra Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=761-780 | loan=1-7500000 | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)
  - mst R918 (OFF-1267): Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=761-780 | loan=7500001-1000000000 | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)
  - mst R919 (OFF-1268): Home Loan Ultra Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=761-780 | loan=7500001-1000000000 | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)
- **8.45%** × 3 — schemes={'Home Loan Ultra Saver': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R879 (OFF-1228): Home Loan Ultra Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=741-760 | loan=1-7500000 | ten=None-None | **8.45%** (women=None green=None ins=None insFlag=No)
  - mst R920 (OFF-1269): Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=741-760 | loan=7500001-1000000000 | ten=None-None | **8.45%** (women=None green=None ins=None insFlag=No)
  - mst R921 (OFF-1270): Home Loan Ultra Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=741-760 | loan=7500001-1000000000 | ten=None-None | **8.45%** (women=None green=None ins=None insFlag=No)
- **8.9%** × 3 — schemes={'Plain Vanilla Home Loan': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R867 (OFF-1216): Plain Vanilla Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=721-740 | loan=1-7500000 | ten=None-None | **8.9%** (women=None green=None ins=None insFlag=No)
  - mst R908 (OFF-1257): Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=721-740 | loan=7500001-1000000000 | ten=None-None | **8.9%** (women=None green=None ins=None insFlag=No)
  - mst R909 (OFF-1258): Plain Vanilla Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=721-740 | loan=7500001-1000000000 | ten=None-None | **8.9%** (women=None green=None ins=None insFlag=No)
- **9.1%** × 3 — schemes={'Home Loan Top Up': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R895 (OFF-1244): Home Loan Top Up | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=721-740 | loan=1-7500000 | ten=None-None | **9.1%** (women=None green=None ins=None insFlag=No)
  - mst R936 (OFF-1285): Home Loan Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=721-740 | loan=7500001-1000000000 | ten=None-None | **9.1%** (women=None green=None ins=None insFlag=No)
  - mst R937 (OFF-1286): Home Loan Top Up | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=721-740 | loan=7500001-1000000000 | ten=None-None | **9.1%** (women=None green=None ins=None insFlag=No)
- **9.3%** × 3 — schemes={'Home Loan Ultra Saver': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R881 (OFF-1230): Home Loan Ultra Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=721-740 | loan=1-7500000 | ten=None-None | **9.3%** (women=None green=None ins=None insFlag=No)
  - mst R922 (OFF-1271): Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=721-740 | loan=7500001-1000000000 | ten=None-None | **9.3%** (women=None green=None ins=None insFlag=No)
  - mst R923 (OFF-1272): Home Loan Ultra Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=721-740 | loan=7500001-1000000000 | ten=None-None | **9.3%** (women=None green=None ins=None insFlag=No)
- **9.45%** × 3 — schemes={'Plain Vanilla Home Loan': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R869 (OFF-1218): Plain Vanilla Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-720 | loan=1-7500000 | ten=None-None | **9.45%** (women=None green=None ins=None insFlag=No)
  - mst R910 (OFF-1259): Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-720 | loan=7500001-1000000000 | ten=None-None | **9.45%** (women=None green=None ins=None insFlag=No)
  - mst R911 (OFF-1260): Plain Vanilla Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-720 | loan=7500001-1000000000 | ten=None-None | **9.45%** (women=None green=None ins=None insFlag=No)
- **9.65%** × 3 — schemes={'Home Loan Top Up': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R897 (OFF-1246): Home Loan Top Up | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-720 | loan=1-7500000 | ten=None-None | **9.65%** (women=None green=None ins=None insFlag=No)
  - mst R938 (OFF-1287): Home Loan Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-720 | loan=7500001-1000000000 | ten=None-None | **9.65%** (women=None green=None ins=None insFlag=No)
  - mst R939 (OFF-1288): Home Loan Top Up | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-720 | loan=7500001-1000000000 | ten=None-None | **9.65%** (women=None green=None ins=None insFlag=No)
- **9.85%** × 3 — schemes={'Home Loan Ultra Saver': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R883 (OFF-1232): Home Loan Ultra Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=700-720 | loan=1-7500000 | ten=None-None | **9.85%** (women=None green=None ins=None insFlag=No)
  - mst R924 (OFF-1273): Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=700-720 | loan=7500001-1000000000 | ten=None-None | **9.85%** (women=None green=None ins=None insFlag=No)
  - mst R925 (OFF-1274): Home Loan Ultra Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=700-720 | loan=7500001-1000000000 | ten=None-None | **9.85%** (women=None green=None ins=None insFlag=No)
- **10.05%** × 3 — schemes={'Plain Vanilla Home Loan': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R871 (OFF-1220): Plain Vanilla Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=1-7500000 | ten=None-None | **10.05%** (women=None green=None ins=None insFlag=No)
  - mst R912 (OFF-1261): Plain Vanilla Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=7500001-1000000000 | ten=None-None | **10.05%** (women=None green=None ins=None insFlag=No)
  - mst R913 (OFF-1262): Plain Vanilla Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=7500001-1000000000 | ten=None-None | **10.05%** (women=None green=None ins=None insFlag=No)
- **10.25%** × 3 — schemes={'Home Loan Top Up': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R899 (OFF-1248): Home Loan Top Up | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=1-7500000 | ten=None-None | **10.25%** (women=None green=None ins=None insFlag=No)
  - mst R940 (OFF-1289): Home Loan Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=7500001-1000000000 | ten=None-None | **10.25%** (women=None green=None ins=None insFlag=No)
  - mst R941 (OFF-1290): Home Loan Top Up | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=7500001-1000000000 | ten=None-None | **10.25%** (women=None green=None ins=None insFlag=No)
- **10.45%** × 3 — schemes={'Home Loan Ultra Saver': 3} types={'Floating': 3} insurance={'No': 3}
  - mst R885 (OFF-1234): Home Loan Ultra Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=1-7500000 | ten=None-None | **10.45%** (women=None green=None ins=None insFlag=No)
  - mst R926 (OFF-1275): Home Loan Ultra Saver | Overdraft | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=7500001-1000000000 | ten=None-None | **10.45%** (women=None green=None ins=None insFlag=No)
  - mst R927 (OFF-1276): Home Loan Ultra Saver | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=7500001-1000000000 | ten=None-None | **10.45%** (women=None green=None ins=None insFlag=No)

---

## IDFC FIRST Bank

- Sheet: `IDFC First Bank`
- Source Final/ROI lines: **5**
- Master Offers rows: **5**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[7.75, 7.95, 8.15, 8.45, 8.6]`
- Master unique `roi` (%): `[7.75, 7.95, 8.15, 8.45, 8.6]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R22: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800 + | cibil~800-900 | cond=None | **7.75%** [Final rate]
- mst R942 (OFF-1291): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.95%** [Final rate]
- mst R943 (OFF-1292): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.95%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **8.15%** [Final rate]
- mst R944 (OFF-1293): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.45%** [Final rate]
- mst R945 (OFF-1294): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.45%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **8.6%** [Final rate]
- mst R946 (OFF-1295): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **8.6%** (women=None green=None ins=None insFlag=No)

---

## Indian Bank

- Sheet: `Indian Bank`
- Source Final/ROI lines: **12**
- Master Offers rows: **36**
- Verdict: `RATES_OK_ROW_EXPANSION`
- Source unique rates (%): `[7.15, 7.45, 7.55, 7.75, 7.85, 7.95, 8.15, 8.35, 8.55, 8.95]`
- Master unique `roi` (%): `[7.15, 7.45, 7.55, 7.75, 7.85, 7.95, 8.15, 8.35, 8.55, 8.95]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: IB Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.15%** [Final rate]
- mst R731 (OFF-1080): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=1-2500000 | ten=None-None | **7.15%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: IB Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.45%** [Final rate]
- mst R732 (OFF-1081): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=1-2500000 | ten=None-None | **7.45%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: IB Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **7.75%** [Final rate]
- mst R733 (OFF-1082): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=1-2500000 | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: IB Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **7.95%** [Final rate]
- mst R734 (OFF-1083): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=1-2500000 | ten=None-None | **7.95%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R28: IB Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **8.15%** [Final rate]
- mst R735 (OFF-1084): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=1-2500000 | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R29: IB Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **8.55%** [Final rate]
- mst R736 (OFF-1085): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-599 | loan=1-2500000 | ten=None-None | **8.55%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R37: IB Home Loan Flexi | Overdraft | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.55%** [Final rate]
- mst R737 (OFF-1086): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=800-900 | loan=1-2500000 | ten=None-None | **7.55%** (women=None green=None ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R38: IB Home Loan Flexi | Overdraft | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.85%** [Final rate]
- mst R738 (OFF-1087): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=750-799 | loan=1-2500000 | ten=None-None | **7.85%** (women=None green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R39: IB Home Loan Flexi | Overdraft | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **8.15%** [Final rate]
- mst R739 (OFF-1088): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=700-749 | loan=1-2500000 | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R40: IB Home Loan Flexi | Overdraft | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.35%** [Final rate]
- mst R740 (OFF-1089): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=650-699 | loan=1-2500000 | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R41: IB Home Loan Flexi | Overdraft | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **8.55%** [Final rate]
- mst R741 (OFF-1090): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=600-649 | loan=1-2500000 | ten=None-None | **8.55%** (women=None green=None ins=None insFlag=No)

#### 12. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R42: IB Home Loan Flexi | Overdraft | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **8.95%** [Final rate]
- mst R742 (OFF-1091): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=300-599 | loan=1-2500000 | ten=None-None | **8.95%** (women=None green=None ins=None insFlag=No)

### Master rows with no source match (24)

- mst R743 (OFF-1092): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=2500001-7500000 | ten=None-None | **7.15%** (women=None green=None ins=None insFlag=No)
- mst R744 (OFF-1093): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=7500001-1000000000 | ten=None-None | **7.15%** (women=None green=None ins=None insFlag=No)
- mst R745 (OFF-1094): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=2500001-7500000 | ten=None-None | **7.45%** (women=None green=None ins=None insFlag=No)
- mst R746 (OFF-1095): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=7500001-1000000000 | ten=None-None | **7.45%** (women=None green=None ins=None insFlag=No)
- mst R747 (OFF-1096): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=2500001-7500000 | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)
- mst R748 (OFF-1097): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=7500001-1000000000 | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)
- mst R749 (OFF-1098): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=2500001-7500000 | ten=None-None | **7.95%** (women=None green=None ins=None insFlag=No)
- mst R750 (OFF-1099): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=7500001-1000000000 | ten=None-None | **7.95%** (women=None green=None ins=None insFlag=No)
- mst R751 (OFF-1100): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=2500001-7500000 | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)
- mst R752 (OFF-1101): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=7500001-1000000000 | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)
- mst R753 (OFF-1102): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-599 | loan=2500001-7500000 | ten=None-None | **8.55%** (women=None green=None ins=None insFlag=No)
- mst R754 (OFF-1103): IB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-599 | loan=7500001-1000000000 | ten=None-None | **8.55%** (women=None green=None ins=None insFlag=No)
- mst R755 (OFF-1104): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=800-900 | loan=2500001-7500000 | ten=None-None | **7.55%** (women=None green=None ins=None insFlag=No)
- mst R756 (OFF-1105): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=800-900 | loan=7500001-1000000000 | ten=None-None | **7.55%** (women=None green=None ins=None insFlag=No)
- mst R757 (OFF-1106): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=750-799 | loan=2500001-7500000 | ten=None-None | **7.85%** (women=None green=None ins=None insFlag=No)
- mst R758 (OFF-1107): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=750-799 | loan=7500001-1000000000 | ten=None-None | **7.85%** (women=None green=None ins=None insFlag=No)
- mst R759 (OFF-1108): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=700-749 | loan=2500001-7500000 | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)
- mst R760 (OFF-1109): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=700-749 | loan=7500001-1000000000 | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)
- mst R761 (OFF-1110): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=650-699 | loan=2500001-7500000 | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)
- mst R762 (OFF-1111): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=650-699 | loan=7500001-1000000000 | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)
- mst R763 (OFF-1112): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=600-649 | loan=2500001-7500000 | ten=None-None | **8.55%** (women=None green=None ins=None insFlag=No)
- mst R764 (OFF-1113): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=600-649 | loan=7500001-1000000000 | ten=None-None | **8.55%** (women=None green=None ins=None insFlag=No)
- mst R765 (OFF-1114): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=300-599 | loan=2500001-7500000 | ten=None-None | **8.95%** (women=None green=None ins=None insFlag=No)
- mst R766 (OFF-1115): IB Home Loan Flexi | Overdraft | Floating | occ=Any | cat=Any | cibil=300-599 | loan=7500001-1000000000 | ten=None-None | **8.95%** (women=None green=None ins=None insFlag=No)

---

## Indian Overseas Bank

- Sheet: `Indian Overseas Bank`
- Source Final/ROI lines: **35**
- Master Offers rows: **46**
- Verdict: `SOURCE_COVERED_MASTER_EXTRAS`
- Source unique rates (%): `[7.2, 7.25, 7.3, 7.35, 7.5, 7.55, 7.6, 7.65, 7.8, 7.85, 7.9, 7.95, 8.0, 8.05, 8.15, 8.2, 8.25, 8.3, 9.65, 9.7, 9.75, 9.85, 10.05, 10.25]`
- Master unique `roi` (%): `[7.2, 7.25, 7.3, 7.35, 7.55, 7.65, 7.85, 7.95, 8.05, 8.2, 8.3, 9.65, 9.7, 9.75, 9.85, 10.05, 10.25, 11.0, 12.0]`
- **Master `roi` values not in source Final set:** `[11.0, 12.0]`

### Line matches

#### 1. [OK] Δ=0.0%  score=22 (rate, rate_type, facility, occupation, cibil:5)
- src R46: IOB HARIT SUBHAGRUHA (Green house) | Term Loan | Floating | occ=Salaried | label=800+ | cibil~800-900 | cond=None | **7.2%** [Final rate]
- mst R502 (OFF-770): Subhagruha Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=1-7500000 | ten=None-None | **7.2%** (women=None green=None ins=None insFlag=No)

#### 2. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R47: IOB HARIT SUBHAGRUHA (Green house) | Term Loan | Floating | occ=Salaried | label=775 - 799 | cibil~775-799 | cond=None | **7.2%** [Final rate]
- mst R503 (OFF-771): Subhagruha Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=775-799 | loan=1-7500000 | ten=None-None | **7.25%** (women=None green=7.2 ins=None insFlag=No)

#### 3. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R48: IOB HARIT SUBHAGRUHA (Green house) | Term Loan | Floating | occ=Salaried | label=750 - 774 | cibil~750-774 | cond=None | **7.5%** [Final rate]
- mst R504 (OFF-772): Subhagruha Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-774 | loan=1-7500000 | ten=None-None | **7.55%** (women=None green=7.5 ins=None insFlag=No)

#### 4. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R49: IOB HARIT SUBHAGRUHA (Green house) | Term Loan | Floating | occ=Salaried | label=725 - 749 | cibil~725-749 | cond=None | **7.8%** [Final rate]
- mst R505 (OFF-773): Subhagruha Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=725-749 | loan=1-7500000 | ten=None-None | **7.85%** (women=None green=7.8 ins=None insFlag=No)

#### 5. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R50: IOB HARIT SUBHAGRUHA (Green house) | Term Loan | Floating | occ=Salaried | label=700 - 724 | cibil~700-724 | cond=None | **7.9%** [Final rate]
- mst R506 (OFF-774): Subhagruha Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-724 | loan=1-7500000 | ten=None-None | **7.95%** (women=None green=7.9 ins=None insFlag=No)

#### 6. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R51: IOB HARIT SUBHAGRUHA (Green house) | Term Loan | Floating | occ=Salaried | label=680 - 699 | cibil~680-699 | cond=None | **8.15%** [Final rate]
- mst R507 (OFF-775): Subhagruha Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=680-699 | loan=1-7500000 | ten=None-None | **8.2%** (women=None green=8.15 ins=None insFlag=No)

#### 7. [OK via green_roi] Δ=0.0%  score=19 (green_roi, rate_type, facility, occupation, cibil:3)
- src R52: IOB HARIT SUBHAGRUHA (Green house) | Term Loan | Floating | occ=Salaried | label=-1 to 0 | cibil~-1-0 | cond=None | **7.8%** [Final rate]
- mst R508 (OFF-776): Subhagruha Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=1-7500000 | ten=None-None | **7.85%** (women=None green=7.8 ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=22 (rate, rate_type, facility, occupation, cibil:5)
- src R55: IOB HARIT SUBHAGRUHA (Green house) | Term Loan | Floating | occ=Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.3%** [Final rate]
- mst R509 (OFF-777): Subhagruha Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=1-7500000 | ten=None-None | **7.3%** (women=None green=None ins=None insFlag=No)

#### 9. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R56: IOB HARIT SUBHAGRUHA (Green house) | Term Loan | Floating | occ=Self-Employed | label=775 - 799 | cibil~775-799 | cond=None | **7.3%** [Final rate]
- mst R510 (OFF-778): Subhagruha Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=775-799 | loan=1-7500000 | ten=None-None | **7.35%** (women=None green=7.3 ins=None insFlag=No)

#### 10. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R57: IOB HARIT SUBHAGRUHA (Green house) | Term Loan | Floating | occ=Self-Employed | label=750 - 774 | cibil~750-774 | cond=None | **7.6%** [Final rate]
- mst R511 (OFF-779): Subhagruha Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=750-774 | loan=1-7500000 | ten=None-None | **7.65%** (women=None green=7.6 ins=None insFlag=No)

#### 11. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R58: IOB HARIT SUBHAGRUHA (Green house) | Term Loan | Floating | occ=Self-Employed | label=725 - 749 | cibil~725-749 | cond=None | **7.9%** [Final rate]
- mst R512 (OFF-780): Subhagruha Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=725-749 | loan=1-7500000 | ten=None-None | **7.95%** (women=None green=7.9 ins=None insFlag=No)

#### 12. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R59: IOB HARIT SUBHAGRUHA (Green house) | Term Loan | Floating | occ=Self-Employed | label=700 - 724 | cibil~700-724 | cond=None | **8.0%** [Final rate]
- mst R513 (OFF-781): Subhagruha Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-724 | loan=1-7500000 | ten=None-None | **8.05%** (women=None green=8.0 ins=None insFlag=No)

#### 13. [OK via green_roi] Δ=0.0%  score=21 (green_roi, rate_type, facility, occupation, cibil:5)
- src R60: IOB HARIT SUBHAGRUHA (Green house) | Term Loan | Floating | occ=Self-Employed | label=680 - 699 | cibil~680-699 | cond=None | **8.25%** [Final rate]
- mst R514 (OFF-782): Subhagruha Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=680-699 | loan=1-7500000 | ten=None-None | **8.3%** (women=None green=8.25 ins=None insFlag=No)

#### 14. [OK via green_roi] Δ=0.0%  score=19 (green_roi, rate_type, facility, occupation, cibil:3)
- src R61: IOB HARIT SUBHAGRUHA (Green house) | Term Loan | Floating | occ=Self-Employed | label=-1 to 0 | cibil~-1-0 | cond=None | **7.9%** [Final rate]
- mst R515 (OFF-783): Subhagruha Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=1-7500000 | ten=None-None | **7.95%** (women=None green=7.9 ins=None insFlag=No)

#### 15. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R66: Subhagruha Topup Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **9.65%** [Final rate]
- mst R516 (OFF-784): Subhagruha Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=1-7500000 | ten=None-None | **9.65%** (women=None green=None ins=None insFlag=No)

#### 16. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R67: Subhagruha Topup Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=775 - 799 | cibil~775-799 | cond=None | **9.7%** [Final rate]
- mst R517 (OFF-785): Subhagruha Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=775-799 | loan=1-7500000 | ten=None-None | **9.7%** (women=None green=None ins=None insFlag=No)

#### 17. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R68: Subhagruha Topup Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 774 | cibil~750-774 | cond=None | **9.75%** [Final rate]
- mst R518 (OFF-786): Subhagruha Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-774 | loan=1-7500000 | ten=None-None | **9.75%** (women=None green=None ins=None insFlag=No)

#### 18. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R69: Subhagruha Topup Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=725 - 749 | cibil~725-749 | cond=None | **9.85%** [Final rate]
- mst R519 (OFF-787): Subhagruha Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=725-749 | loan=1-7500000 | ten=None-None | **9.85%** (women=None green=None ins=None insFlag=No)

#### 19. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R70: Subhagruha Topup Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 724 | cibil~700-724 | cond=None | **10.05%** [Final rate]
- mst R520 (OFF-788): Subhagruha Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-724 | loan=1-7500000 | ten=None-None | **10.05%** (women=None green=None ins=None insFlag=No)

#### 20. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R71: Subhagruha Topup Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=680 - 699 | cibil~680-699 | cond=None | **10.25%** [Final rate]
- mst R521 (OFF-789): Subhagruha Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=680-699 | loan=1-7500000 | ten=None-None | **10.25%** (women=None green=None ins=None insFlag=No)

#### 21. [OK] Δ=0.0%  score=21 (rate, rate_type, facility, occupation, scheme~, cibil:3)
- src R72: Subhagruha Topup Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=-1 to 0 | cibil~-1-0 | cond=None | **9.85%** [Final rate]
- mst R522 (OFF-790): Subhagruha Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=-1-0 | loan=1-7500000 | ten=None-None | **9.85%** (women=None green=None ins=None insFlag=No)

#### 22. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Subhagruha-Housing Loans | Term Loan | Floating | occ=Salaried | label=800+ | cibil~800-900 | cond=None | **7.2%** [Final rate]
- mst R525 (OFF-793): Subhagruha Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=7500001-1000000000 | ten=None-None | **7.2%** (women=None green=None ins=None insFlag=No)

#### 23. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Subhagruha-Housing Loans | Term Loan | Floating | occ=Salaried | label=775 - 799 | cibil~775-799 | cond=None | **7.25%** [Final rate]
- mst R526 (OFF-794): Subhagruha Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=775-799 | loan=7500001-1000000000 | ten=None-None | **7.25%** (women=None green=7.2 ins=None insFlag=No)

#### 24. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Subhagruha-Housing Loans | Term Loan | Floating | occ=Salaried | label=750 - 774 | cibil~750-774 | cond=None | **7.55%** [Final rate]
- mst R527 (OFF-795): Subhagruha Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-774 | loan=7500001-1000000000 | ten=None-None | **7.55%** (women=None green=7.5 ins=None insFlag=No)

#### 25. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Subhagruha-Housing Loans | Term Loan | Floating | occ=Salaried | label=725 - 749 | cibil~725-749 | cond=None | **7.85%** [Final rate]
- mst R528 (OFF-796): Subhagruha Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=725-749 | loan=7500001-1000000000 | ten=None-None | **7.85%** (women=None green=7.8 ins=None insFlag=No)

#### 26. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Subhagruha-Housing Loans | Term Loan | Floating | occ=Salaried | label=700 - 724 | cibil~700-724 | cond=None | **7.95%** [Final rate]
- mst R529 (OFF-797): Subhagruha Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-724 | loan=7500001-1000000000 | ten=None-None | **7.95%** (women=None green=7.9 ins=None insFlag=No)

#### 27. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R28: Subhagruha-Housing Loans | Term Loan | Floating | occ=Salaried | label=680 - 699 | cibil~680-699 | cond=None | **8.2%** [Final rate]
- mst R530 (OFF-798): Subhagruha Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=680-699 | loan=7500001-1000000000 | ten=None-None | **8.2%** (women=None green=8.15 ins=None insFlag=No)

#### 28. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R29: Subhagruha-Housing Loans | Term Loan | Floating | occ=Salaried | label=-1 to 0 | cibil~-1-0 | cond=None | **7.85%** [Final rate]
- mst R531 (OFF-799): Subhagruha Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=7500001-1000000000 | ten=None-None | **7.85%** (women=None green=7.8 ins=None insFlag=No)

#### 29. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R32: Subhagruha-Housing Loans | Term Loan | Floating | occ=Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.3%** [Final rate]
- mst R532 (OFF-800): Subhagruha Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=7500001-1000000000 | ten=None-None | **7.3%** (women=None green=None ins=None insFlag=No)

#### 30. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R33: Subhagruha-Housing Loans | Term Loan | Floating | occ=Self-Employed | label=775 - 799 | cibil~775-799 | cond=None | **7.35%** [Final rate]
- mst R533 (OFF-801): Subhagruha Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=775-799 | loan=7500001-1000000000 | ten=None-None | **7.35%** (women=None green=7.3 ins=None insFlag=No)

#### 31. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R34: Subhagruha-Housing Loans | Term Loan | Floating | occ=Self-Employed | label=750 - 774 | cibil~750-774 | cond=None | **7.65%** [Final rate]
- mst R534 (OFF-802): Subhagruha Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=750-774 | loan=7500001-1000000000 | ten=None-None | **7.65%** (women=None green=7.6 ins=None insFlag=No)

#### 32. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R35: Subhagruha-Housing Loans | Term Loan | Floating | occ=Self-Employed | label=725 - 749 | cibil~725-749 | cond=None | **7.95%** [Final rate]
- mst R535 (OFF-803): Subhagruha Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=725-749 | loan=7500001-1000000000 | ten=None-None | **7.95%** (women=None green=7.9 ins=None insFlag=No)

#### 33. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R36: Subhagruha-Housing Loans | Term Loan | Floating | occ=Self-Employed | label=700 - 724 | cibil~700-724 | cond=None | **8.05%** [Final rate]
- mst R536 (OFF-804): Subhagruha Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-724 | loan=7500001-1000000000 | ten=None-None | **8.05%** (women=None green=8.0 ins=None insFlag=No)

#### 34. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R37: Subhagruha-Housing Loans | Term Loan | Floating | occ=Self-Employed | label=680 - 699 | cibil~680-699 | cond=None | **8.3%** [Final rate]
- mst R537 (OFF-805): Subhagruha Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=680-699 | loan=7500001-1000000000 | ten=None-None | **8.3%** (women=None green=8.25 ins=None insFlag=No)

#### 35. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R38: Subhagruha-Housing Loans | Term Loan | Floating | occ=Self-Employed | label=-1 to 0 | cibil~-1-0 | cond=None | **7.95%** [Final rate]
- mst R538 (OFF-806): Subhagruha Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=7500001-1000000000 | ten=None-None | **7.95%** (women=None green=7.9 ins=None insFlag=No)

### Master rows with no source match (11)

- mst R523 (OFF-791): Subhagruha Housing Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=None-None | loan=1-7500000 | ten=None-None | **11.0%** (women=None green=None ins=None insFlag=No)
- mst R524 (OFF-792): Subhagruha Top Up Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=None-None | loan=1-7500000 | ten=None-None | **12.0%** (women=None green=None ins=None insFlag=No)
- mst R539 (OFF-807): Subhagruha Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=7500001-1000000000 | ten=None-None | **9.65%** (women=None green=None ins=None insFlag=No)
- mst R540 (OFF-808): Subhagruha Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=775-799 | loan=7500001-1000000000 | ten=None-None | **9.7%** (women=None green=None ins=None insFlag=No)
- mst R541 (OFF-809): Subhagruha Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-774 | loan=7500001-1000000000 | ten=None-None | **9.75%** (women=None green=None ins=None insFlag=No)
- mst R542 (OFF-810): Subhagruha Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=725-749 | loan=7500001-1000000000 | ten=None-None | **9.85%** (women=None green=None ins=None insFlag=No)
- mst R543 (OFF-811): Subhagruha Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-724 | loan=7500001-1000000000 | ten=None-None | **10.05%** (women=None green=None ins=None insFlag=No)
- mst R544 (OFF-812): Subhagruha Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=680-699 | loan=7500001-1000000000 | ten=None-None | **10.25%** (women=None green=None ins=None insFlag=No)
- mst R545 (OFF-813): Subhagruha Top Up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=-1-0 | loan=7500001-1000000000 | ten=None-None | **9.85%** (women=None green=None ins=None insFlag=No)
- mst R546 (OFF-814): Subhagruha Housing Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=None-None | loan=7500001-1000000000 | ten=None-None | **11.0%** (women=None green=None ins=None insFlag=No)
- mst R547 (OFF-815): Subhagruha Top Up Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=None-None | loan=7500001-1000000000 | ten=None-None | **12.0%** (women=None green=None ins=None insFlag=No)

---

## IndusInd Bank

- Sheet: `Indusind Bank`
- Source Final/ROI lines: **7**
- Master Offers rows: **14**
- Verdict: `RATES_OK_ROW_EXPANSION`
- Source unique rates (%): `[7.5, 7.75, 8.1, 8.3, 8.95, 9.45, 10.0]`
- Master unique `roi` (%): `[7.5, 7.75, 8.1, 8.3, 8.95, 9.45, 10.0]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R22: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.5%** [Final rate]
- mst R1137 (OFF-1493): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.5%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.75%** [Final rate]
- mst R1139 (OFF-1495): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=701 - 749 | cibil~701-749 | cond=None | **8.1%** [Final rate]
- mst R1141 (OFF-1497): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=701-749 | loan=None-None | ten=None-None | **8.1%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=675 - 700 | cibil~675-700 | cond=None | **8.3%** [Final rate]
- mst R1143 (OFF-1499): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=675-700 | loan=None-None | ten=None-None | **8.3%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 674 | cibil~650-674 | cond=None | **8.95%** [Final rate]
- mst R1145 (OFF-1501): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-674 | loan=None-None | ten=None-None | **8.95%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R27: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 650 | cibil~300-None | cond=None | **9.45%** [Final rate]
- mst R1147 (OFF-1503): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=300-649 | loan=None-None | ten=None-None | **9.45%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R28: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=NTC | cibil~-1-0 | cond=None | **10.0%** [Final rate]
- mst R1149 (OFF-1505): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **10.0%** (women=None green=None ins=None insFlag=No)

### Master rows with no source match (7)

- mst R1138 (OFF-1494): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.5%** (women=None green=None ins=None insFlag=No)
- mst R1140 (OFF-1496): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)
- mst R1142 (OFF-1498): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=701-749 | loan=None-None | ten=None-None | **8.1%** (women=None green=None ins=None insFlag=No)
- mst R1144 (OFF-1500): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=675-700 | loan=None-None | ten=None-None | **8.3%** (women=None green=None ins=None insFlag=No)
- mst R1146 (OFF-1502): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-674 | loan=None-None | ten=None-None | **8.95%** (women=None green=None ins=None insFlag=No)
- mst R1148 (OFF-1504): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=300-649 | loan=None-None | ten=None-None | **9.45%** (women=None green=None ins=None insFlag=No)
- mst R1150 (OFF-1506): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **10.0%** (women=None green=None ins=None insFlag=No)

---

## Jammu and Kashmir Bank

- Sheet: `Jammu & Kashmir Bank`
- Source Final/ROI lines: **5**
- Master Offers rows: **5**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[7.5, 7.6, 7.7, 7.95, 8.2]`
- Master unique `roi` (%): `[7.5, 7.6, 7.7, 7.95, 8.2]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R22: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750+ | cibil~750-900 | cond=None | **7.5%** [Final rate]
- mst R720 (OFF-1069): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-900 | loan=None-None | ten=None-None | **7.5%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=726 - 749 | cibil~726-749 | cond=None | **7.6%** [Final rate]
- mst R721 (OFF-1070): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=726-749 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=701 - 725 | cibil~701-725 | cond=None | **7.7%** [Final rate]
- mst R722 (OFF-1071): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=701-725 | loan=None-None | ten=None-None | **7.7%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=675 - 700 | cibil~675-700 | cond=None | **7.95%** [Final rate]
- mst R723 (OFF-1072): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=675-700 | loan=None-None | ten=None-None | **7.95%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R26: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 675 | cibil~300-None | cond=None | **8.2%** [Final rate]
- mst R724 (OFF-1073): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-674 | loan=None-None | ten=None-None | **8.2%** (women=None green=None ins=None insFlag=No)

---

## Karnataka Bank

- Sheet: `Karnataka Bank`
- Source Final/ROI lines: **6**
- Master Offers rows: **6**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[7.47, 8.25, 8.75, 9.45, 10.75, 11.7]`
- Master unique `roi` (%): `[7.47, 8.25, 8.75, 9.45, 10.75, 11.7]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R22: KBL - Apna Ghar | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.47%** [Final rate]
- mst R989 (OFF-1338): KBL - Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.47%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: KBL - Apna Ghar | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **8.25%** [Final rate]
- mst R990 (OFF-1339): KBL - Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: KBL - Apna Ghar | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **8.75%** [Final rate]
- mst R991 (OFF-1340): KBL - Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: KBL - Apna Ghar | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **9.45%** [Final rate]
- mst R992 (OFF-1341): KBL - Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **9.45%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: KBL - Apna Ghar | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **10.75%** [Final rate]
- mst R993 (OFF-1342): KBL - Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **10.75%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R27: KBL - Apna Ghar | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **11.7%** [Final rate]
- mst R994 (OFF-1343): KBL - Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **11.7%** (women=None green=None ins=None insFlag=No)

---

## Karur Vysya Bank

- Sheet: `Karur Vyasa Bank`
- Source Final/ROI lines: **10**
- Master Offers rows: **30**
- Verdict: `RATES_OK_ROW_EXPANSION`
- Source unique rates (%): `[8.5, 8.75, 9.05, 9.35, 9.55, 9.95, 10.15, 10.25, 10.65]`
- Master unique `roi` (%): `[8.5, 8.75, 9.05, 9.35, 9.55, 9.95, 10.15, 10.25, 10.65]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R22: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800 + | cibil~800-900 | cond=None | **8.5%** [Final rate]
- mst R947 (OFF-1296): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=1-2500000 | ten=None-None | **8.5%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **8.75%** [Final rate]
- mst R948 (OFF-1297): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=1-2500000 | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **9.35%** [Final rate]
- mst R949 (OFF-1298): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=1-2500000 | ten=None-None | **9.35%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **10.15%** [Final rate]
- mst R950 (OFF-1299): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=1-2500000 | ten=None-None | **10.15%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **10.65%** [Final rate]
- mst R951 (OFF-1300): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=1-2500000 | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R33: Housing Loan Topup | Term Loan | Floating | occ=Salaried & Self-Employed | label=800 + | cibil~800-900 | cond=None | **8.75%** [Final rate]
- mst R952 (OFF-1301): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=1-2500000 | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R34: Housing Loan Topup | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **9.05%** [Final rate]
- mst R953 (OFF-1302): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=1-2500000 | ten=None-None | **9.05%** (women=None green=None ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R35: Housing Loan Topup | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **9.55%** [Final rate]
- mst R954 (OFF-1303): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=1-2500000 | ten=None-None | **9.55%** (women=None green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R36: Housing Loan Topup | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **9.95%** [Final rate]
- mst R955 (OFF-1304): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=1-2500000 | ten=None-None | **9.95%** (women=None green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme~, cibil:5)
- src R37: Housing Loan Topup | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **10.25%** [Final rate]
- mst R956 (OFF-1305): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=1-2500000 | ten=None-None | **10.25%** (women=None green=None ins=None insFlag=No)

### Master rows with no source match (20)

- mst R957 (OFF-1306): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=2500001-5000000 | ten=None-None | **8.5%** (women=None green=None ins=None insFlag=No)
- mst R958 (OFF-1307): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=5000001-1000000000 | ten=None-None | **8.5%** (women=None green=None ins=None insFlag=No)
- mst R959 (OFF-1308): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=2500001-5000000 | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)
- mst R960 (OFF-1309): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=5000001-1000000000 | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)
- mst R961 (OFF-1310): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=2500001-5000000 | ten=None-None | **9.35%** (women=None green=None ins=None insFlag=No)
- mst R962 (OFF-1311): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=5000001-1000000000 | ten=None-None | **9.35%** (women=None green=None ins=None insFlag=No)
- mst R963 (OFF-1312): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=2500001-5000000 | ten=None-None | **10.15%** (women=None green=None ins=None insFlag=No)
- mst R964 (OFF-1313): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=5000001-1000000000 | ten=None-None | **10.15%** (women=None green=None ins=None insFlag=No)
- mst R965 (OFF-1314): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=2500001-5000000 | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)
- mst R966 (OFF-1315): Housing Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=5000001-1000000000 | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)
- mst R967 (OFF-1316): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=2500001-5000000 | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)
- mst R968 (OFF-1317): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=5000001-1000000000 | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)
- mst R969 (OFF-1318): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=2500001-5000000 | ten=None-None | **9.05%** (women=None green=None ins=None insFlag=No)
- mst R970 (OFF-1319): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=5000001-1000000000 | ten=None-None | **9.05%** (women=None green=None ins=None insFlag=No)
- mst R971 (OFF-1320): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=2500001-5000000 | ten=None-None | **9.55%** (women=None green=None ins=None insFlag=No)
- mst R972 (OFF-1321): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=5000001-1000000000 | ten=None-None | **9.55%** (women=None green=None ins=None insFlag=No)
- mst R973 (OFF-1322): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=2500001-5000000 | ten=None-None | **9.95%** (women=None green=None ins=None insFlag=No)
- mst R974 (OFF-1323): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=5000001-1000000000 | ten=None-None | **9.95%** (women=None green=None ins=None insFlag=No)
- mst R975 (OFF-1324): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=2500001-5000000 | ten=None-None | **10.25%** (women=None green=None ins=None insFlag=No)
- mst R976 (OFF-1325): Housing Loan Top Up | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=5000001-1000000000 | ten=None-None | **10.25%** (women=None green=None ins=None insFlag=No)

---

## Kotak Mahindra Bank

- Sheet: `Kotak Mahindra Bank`
- Source Final/ROI lines: **6**
- Master Offers rows: **12**
- Verdict: `RATES_OK_ROW_EXPANSION`
- Source unique rates (%): `[7.6, 7.85, 8.15, 8.35, 8.65, 8.85]`
- Master unique `roi` (%): `[7.6, 7.85, 8.15, 8.35, 8.65, 8.85]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R22: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.6%** [Final rate]
- mst R977 (OFF-1326): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.85%** [Final rate]
- mst R979 (OFF-1328): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.85%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **8.15%** [Final rate]
- mst R981 (OFF-1330): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.35%** [Final rate]
- mst R983 (OFF-1332): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **8.65%** [Final rate]
- mst R985 (OFF-1334): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **8.65%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R27: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **8.85%** [Final rate]
- mst R987 (OFF-1336): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **8.85%** (women=None green=None ins=None insFlag=No)

### Master rows with no source match (6)

- mst R978 (OFF-1327): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)
- mst R980 (OFF-1329): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.85%** (women=None green=None ins=None insFlag=No)
- mst R982 (OFF-1331): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)
- mst R984 (OFF-1333): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)
- mst R986 (OFF-1335): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **8.65%** (women=None green=None ins=None insFlag=No)
- mst R988 (OFF-1337): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **8.85%** (women=None green=None ins=None insFlag=No)

---

## Nainital Bank

- Sheet: `Nainital Bank`
- Source Final/ROI lines: **16**
- Master Offers rows: **105**
- Verdict: `MISMATCH`
- Source unique rates (%): `[7.1, 7.2, 7.4, 7.75, 8.4, 8.8, 9.1, 9.2, 9.4, 9.75, 9.95, 10.4, 10.8, 11.95]`
- Master unique `roi` (%): `[7.2, 7.3, 7.5, 7.85, 8.5, 8.9, 9.2, 9.3, 9.5, 9.85, 10.05, 10.5, 10.9, 12.05]`
- **Source rates missing from master roi/women/green/insurance:** `[7.1, 7.4, 7.75, 8.4, 8.8, 9.1, 9.4, 9.75, 9.95, 10.4, 10.8, 11.95]`
- **Master `roi` values not in source Final set:** `[7.3, 7.5, 7.85, 8.5, 8.9, 9.3, 9.5, 9.85, 10.05, 10.5, 10.9, 12.05]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Apna Aashiana - Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.2%** [Final rate]
- mst R1013 (OFF-1362): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=800-900 | loan=1-500000 | ten=None-None | **7.2%** (women=None green=None ins=7.15 insFlag=Yes)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R41: Apna Aashiana - Yop up Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **9.2%** [Final rate]
- mst R1028 (OFF-1378): Apna Aashiana - Top Up Home Loan | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=800-900 | loan=None-None | ten=None-None | **9.2%** (women=None green=None ins=9.15 insFlag=Yes)

### Source lines with no master match

- src R23: Apna Aashiana - Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.1%** [Final rate]
- src R25: Apna Aashiana - Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.4%** [Final rate]
- src R26: Apna Aashiana - Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=701 - 749 | cibil~701-749 | cond=None | **7.75%** [Final rate]
- src R27: Apna Aashiana - Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=675 - 700 | cibil~675-700 | cond=None | **8.4%** [Final rate]
- src R28: Apna Aashiana - Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 674 | cibil~650-674 | cond=None | **8.8%** [Final rate]
- src R29: Apna Aashiana - Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 650 | cibil~300-None | cond=None | **9.95%** [Final rate]
- src R30: Apna Aashiana - Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=NTC | cibil~-1-0 | cond=None | **7.75%** [Final rate]
- src R40: Apna Aashiana - Yop up Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **9.1%** [Final rate]
- src R42: Apna Aashiana - Yop up Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **9.4%** [Final rate]
- src R43: Apna Aashiana - Yop up Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=701 - 749 | cibil~701-749 | cond=None | **9.75%** [Final rate]
- src R44: Apna Aashiana - Yop up Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=675 - 700 | cibil~675-700 | cond=None | **10.4%** [Final rate]
- src R45: Apna Aashiana - Yop up Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 674 | cibil~650-674 | cond=None | **10.8%** [Final rate]
- src R46: Apna Aashiana - Yop up Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 650 | cibil~300-None | cond=None | **11.95%** [Final rate]
- src R47: Apna Aashiana - Yop up Home loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=NTC | cibil~-1-0 | cond=None | **9.75%** [Final rate]

### Master rows with no source match (103)

Too many to list every row; grouped by rate:

- **7.2%** × 5 — schemes={'Apna Aashiana - Home Loan': 5} types={'Floating': 5} insurance={'Yes': 5}
  - mst R1043 (OFF-1394): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=800-900 | loan=500001-1000000 | ten=None-None | **7.2%** (women=None green=None ins=7.15 insFlag=Yes)
  - mst R1044 (OFF-1396): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=800-900 | loan=1000001-2000000 | ten=None-None | **7.2%** (women=None green=None ins=7.15 insFlag=Yes)
  - mst R1045 (OFF-1398): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=800-900 | loan=2000001-3000000 | ten=None-None | **7.2%** (women=None green=None ins=7.15 insFlag=Yes)
- **7.3%** × 12 — schemes={'Apna Aashiana - Home Loan': 12} types={'Floating': 12} insurance={'Yes': 12}
  - mst R1014 (OFF-1364): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=1-500000 | ten=None-None | **7.3%** (women=None green=None ins=7.25 insFlag=Yes)
  - mst R1015 (OFF-1365): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=1-500000 | ten=None-None | **7.3%** (women=None green=None ins=7.25 insFlag=Yes)
  - mst R1048 (OFF-1404): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=500001-1000000 | ten=None-None | **7.3%** (women=None green=None ins=7.25 insFlag=Yes)
- **7.5%** × 12 — schemes={'Apna Aashiana - Home Loan': 12} types={'Floating': 12} insurance={'Yes': 12}
  - mst R1016 (OFF-1366): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=1-500000 | ten=None-None | **7.5%** (women=None green=None ins=7.45 insFlag=Yes)
  - mst R1017 (OFF-1367): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=750-799 | loan=1-500000 | ten=None-None | **7.5%** (women=None green=None ins=7.45 insFlag=Yes)
  - mst R1058 (OFF-1414): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=500001-1000000 | ten=None-None | **7.5%** (women=None green=None ins=7.45 insFlag=Yes)
- **7.85%** × 24 — schemes={'Apna Aashiana - Home Loan': 24} types={'Floating': 24} insurance={'Yes': 24}
  - mst R1018 (OFF-1368): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=701-749 | loan=1-500000 | ten=None-None | **7.85%** (women=None green=None ins=7.8 insFlag=Yes)
  - mst R1019 (OFF-1369): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=701-749 | loan=1-500000 | ten=None-None | **7.85%** (women=None green=None ins=7.8 insFlag=Yes)
  - mst R1026 (OFF-1376): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=1-500000 | ten=None-None | **7.85%** (women=None green=None ins=7.8 insFlag=Yes)
- **8.5%** × 12 — schemes={'Apna Aashiana - Home Loan': 12} types={'Floating': 12} insurance={'Yes': 12}
  - mst R1020 (OFF-1370): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=675-700 | loan=1-500000 | ten=None-None | **8.5%** (women=None green=None ins=8.45 insFlag=Yes)
  - mst R1021 (OFF-1371): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=675-700 | loan=1-500000 | ten=None-None | **8.5%** (women=None green=None ins=8.45 insFlag=Yes)
  - mst R1078 (OFF-1434): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=675-700 | loan=500001-1000000 | ten=None-None | **8.5%** (women=None green=None ins=8.45 insFlag=Yes)
- **8.9%** × 12 — schemes={'Apna Aashiana - Home Loan': 12} types={'Floating': 12} insurance={'Yes': 12}
  - mst R1022 (OFF-1372): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-674 | loan=1-500000 | ten=None-None | **8.9%** (women=None green=None ins=8.85 insFlag=Yes)
  - mst R1023 (OFF-1373): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-674 | loan=1-500000 | ten=None-None | **8.9%** (women=None green=None ins=8.85 insFlag=Yes)
  - mst R1088 (OFF-1444): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-674 | loan=500001-1000000 | ten=None-None | **8.9%** (women=None green=None ins=8.85 insFlag=Yes)
- **9.3%** × 2 — schemes={'Apna Aashiana - Top Up Home Loan': 2} types={'Floating': 2} insurance={'Yes': 2}
  - mst R1029 (OFF-1380): Apna Aashiana - Top Up Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **9.3%** (women=None green=None ins=9.25 insFlag=Yes)
  - mst R1030 (OFF-1381): Apna Aashiana - Top Up Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **9.3%** (women=None green=None ins=9.25 insFlag=Yes)
- **9.5%** × 2 — schemes={'Apna Aashiana - Top Up Home Loan': 2} types={'Floating': 2} insurance={'Yes': 2}
  - mst R1031 (OFF-1382): Apna Aashiana - Top Up Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **9.5%** (women=None green=None ins=9.45 insFlag=Yes)
  - mst R1032 (OFF-1383): Apna Aashiana - Top Up Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **9.5%** (women=None green=None ins=9.45 insFlag=Yes)
- **9.85%** × 4 — schemes={'Apna Aashiana - Top Up Home Loan': 4} types={'Floating': 4} insurance={'Yes': 4}
  - mst R1033 (OFF-1384): Apna Aashiana - Top Up Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=701-749 | loan=None-None | ten=None-None | **9.85%** (women=None green=None ins=9.8 insFlag=Yes)
  - mst R1034 (OFF-1385): Apna Aashiana - Top Up Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=701-749 | loan=None-None | ten=None-None | **9.85%** (women=None green=None ins=9.8 insFlag=Yes)
  - mst R1041 (OFF-1392): Apna Aashiana - Top Up Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **9.85%** (women=None green=None ins=9.8 insFlag=Yes)
- **10.05%** × 12 — schemes={'Apna Aashiana - Home Loan': 12} types={'Floating': 12} insurance={'Yes': 12}
  - mst R1024 (OFF-1374): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=300-649 | loan=1-500000 | ten=None-None | **10.05%** (women=None green=None ins=10.0 insFlag=Yes)
  - mst R1025 (OFF-1375): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=300-649 | loan=1-500000 | ten=None-None | **10.05%** (women=None green=None ins=10.0 insFlag=Yes)
  - mst R1098 (OFF-1454): Apna Aashiana - Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=300-649 | loan=500001-1000000 | ten=None-None | **10.05%** (women=None green=None ins=10.0 insFlag=Yes)
- **10.5%** × 2 — schemes={'Apna Aashiana - Top Up Home Loan': 2} types={'Floating': 2} insurance={'Yes': 2}
  - mst R1035 (OFF-1386): Apna Aashiana - Top Up Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=675-700 | loan=None-None | ten=None-None | **10.5%** (women=None green=None ins=10.45 insFlag=Yes)
  - mst R1036 (OFF-1387): Apna Aashiana - Top Up Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=675-700 | loan=None-None | ten=None-None | **10.5%** (women=None green=None ins=10.45 insFlag=Yes)
- **10.9%** × 2 — schemes={'Apna Aashiana - Top Up Home Loan': 2} types={'Floating': 2} insurance={'Yes': 2}
  - mst R1037 (OFF-1388): Apna Aashiana - Top Up Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-674 | loan=None-None | ten=None-None | **10.9%** (women=None green=None ins=10.85 insFlag=Yes)
  - mst R1038 (OFF-1389): Apna Aashiana - Top Up Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-674 | loan=None-None | ten=None-None | **10.9%** (women=None green=None ins=10.85 insFlag=Yes)
- **12.05%** × 2 — schemes={'Apna Aashiana - Top Up Home Loan': 2} types={'Floating': 2} insurance={'Yes': 2}
  - mst R1039 (OFF-1390): Apna Aashiana - Top Up Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=300-649 | loan=None-None | ten=None-None | **12.05%** (women=None green=None ins=12.0 insFlag=Yes)
  - mst R1040 (OFF-1391): Apna Aashiana - Top Up Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=300-649 | loan=None-None | ten=None-None | **12.05%** (women=None green=None ins=12.0 insFlag=Yes)

---

## Punjab & Sind Bank

- Sheet: `Punjab & Sind Bank`
- Source Final/ROI lines: **21**
- Master Offers rows: **42**
- Verdict: `RATES_OK_ROW_EXPANSION`
- Source unique rates (%): `[7.3, 7.35, 7.4, 7.5, 7.55, 7.84, 7.9, 8.2, 8.25, 8.3, 8.35, 8.5, 8.84, 9.0, 9.05, 9.2, 10.0, 10.65, 10.7, 11.65]`
- Master unique `roi` (%): `[7.3, 7.35, 7.4, 7.5, 7.55, 7.84, 7.9, 8.2, 8.25, 8.3, 8.35, 8.5, 8.84, 9.0, 9.05, 9.2, 10.0, 10.65, 10.7, 11.65]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R22: PSB Apna Ghar | Term Loan | Floating | occ=Salaried & Self-Employed | label=825+ | cibil~825-900 | cond=None | **7.3%** [Final rate]
- mst R548 (OFF-816): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=825-900 | loan=1-2500000 | ten=None-None | **7.3%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: PSB Apna Ghar | Term Loan | Floating | occ=Salaried & Self-Employed | label=791 - 824 | cibil~791-824 | cond=None | **7.4%** [Final rate]
- mst R549 (OFF-817): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=791-824 | loan=1-2500000 | ten=None-None | **7.4%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: PSB Apna Ghar | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 790 | cibil~750-790 | cond=None | **7.55%** [Final rate]
- mst R550 (OFF-818): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=750-790 | loan=1-2500000 | ten=None-None | **7.55%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: PSB Apna Ghar | Term Loan | Floating | occ=Salaried & Self-Employed | label=725 - 749 | cibil~725-749 | cond=None | **7.9%** [Final rate]
- mst R551 (OFF-819): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=725-749 | loan=1-2500000 | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: PSB Apna Ghar | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 724 | cibil~700-724 | cond=None | **8.25%** [Final rate]
- mst R552 (OFF-820): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=700-724 | loan=1-2500000 | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: PSB Apna Ghar | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **9.05%** [Final rate]
- mst R553 (OFF-821): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=1-2500000 | ten=None-None | **9.05%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R28: PSB Apna Ghar | Term Loan | Floating | occ=Salaried & Self-Employed | label=< = 649 | cibil~300-None | cond=None | **10.7%** [Final rate]
- mst R554 (OFF-822): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=300-649 | loan=1-2500000 | ten=None-None | **10.7%** (women=None green=None ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R34: PSB Apna Ghar Sahaj &  Apna Ghar Gaurav (fort govt. employees) | Term Loan | Floating | occ=Salaried | label=825+ | cibil~825-900 | cond=None | **7.3%** [Final rate]
- mst R555 (OFF-823): PSB Apna Ghar Sahaj & Apna Ghar Gaurav | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=825-900 | loan=None-None | ten=None-None | **7.3%** (women=None green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R35: PSB Apna Ghar Sahaj &  Apna Ghar Gaurav (fort govt. employees) | Term Loan | Floating | occ=Salaried | label=791 - 824 | cibil~791-824 | cond=None | **7.35%** [Final rate]
- mst R556 (OFF-824): PSB Apna Ghar Sahaj & Apna Ghar Gaurav | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=791-824 | loan=None-None | ten=None-None | **7.35%** (women=None green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R36: PSB Apna Ghar Sahaj &  Apna Ghar Gaurav (fort govt. employees) | Term Loan | Floating | occ=Salaried | label=750 - 790 | cibil~750-790 | cond=None | **7.5%** [Final rate]
- mst R557 (OFF-825): PSB Apna Ghar Sahaj & Apna Ghar Gaurav | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=750-790 | loan=None-None | ten=None-None | **7.5%** (women=None green=None ins=None insFlag=No)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R37: PSB Apna Ghar Sahaj &  Apna Ghar Gaurav (fort govt. employees) | Term Loan | Floating | occ=Salaried | label=725 - 749 | cibil~725-749 | cond=None | **7.84%** [Final rate]
- mst R558 (OFF-826): PSB Apna Ghar Sahaj & Apna Ghar Gaurav | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=725-749 | loan=None-None | ten=None-None | **7.84%** (women=None green=None ins=None insFlag=No)

#### 12. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R38: PSB Apna Ghar Sahaj &  Apna Ghar Gaurav (fort govt. employees) | Term Loan | Floating | occ=Salaried | label=700 - 724 | cibil~700-724 | cond=None | **8.2%** [Final rate]
- mst R559 (OFF-827): PSB Apna Ghar Sahaj & Apna Ghar Gaurav | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=700-724 | loan=None-None | ten=None-None | **8.2%** (women=None green=None ins=None insFlag=No)

#### 13. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R39: PSB Apna Ghar Sahaj &  Apna Ghar Gaurav (fort govt. employees) | Term Loan | Floating | occ=Salaried | label=650 - 699 | cibil~650-699 | cond=None | **9.0%** [Final rate]
- mst R560 (OFF-828): PSB Apna Ghar Sahaj & Apna Ghar Gaurav | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=650-699 | loan=None-None | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)

#### 14. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R40: PSB Apna Ghar Sahaj &  Apna Ghar Gaurav (fort govt. employees) | Term Loan | Floating | occ=Salaried | label=< = 649 | cibil~300-None | cond=None | **10.65%** [Final rate]
- mst R561 (OFF-829): PSB Apna Ghar Sahaj & Apna Ghar Gaurav | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=300-649 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)

#### 15. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R47: PSB Apna Ghar Top Up | Term Loan | Floating | occ=Salaried | label=825+ | cibil~825-900 | cond=None | **8.3%** [Final rate]
- mst R562 (OFF-830): PSB Apna Ghar Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=825-900 | loan=None-None | ten=None-None | **8.3%** (women=None green=None ins=None insFlag=No)

#### 16. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R48: PSB Apna Ghar Top Up | Term Loan | Floating | occ=Salaried | label=791 - 824 | cibil~791-824 | cond=None | **8.35%** [Final rate]
- mst R563 (OFF-831): PSB Apna Ghar Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=791-824 | loan=None-None | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)

#### 17. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R49: PSB Apna Ghar Top Up | Term Loan | Floating | occ=Salaried | label=750 - 790 | cibil~750-790 | cond=None | **8.5%** [Final rate]
- mst R564 (OFF-832): PSB Apna Ghar Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-790 | loan=None-None | ten=None-None | **8.5%** (women=None green=None ins=None insFlag=No)

#### 18. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R50: PSB Apna Ghar Top Up | Term Loan | Floating | occ=Salaried | label=725 - 749 | cibil~725-749 | cond=None | **8.84%** [Final rate]
- mst R565 (OFF-833): PSB Apna Ghar Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=725-749 | loan=None-None | ten=None-None | **8.84%** (women=None green=None ins=None insFlag=No)

#### 19. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R51: PSB Apna Ghar Top Up | Term Loan | Floating | occ=Salaried | label=700 - 724 | cibil~700-724 | cond=None | **9.2%** [Final rate]
- mst R566 (OFF-834): PSB Apna Ghar Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-724 | loan=None-None | ten=None-None | **9.2%** (women=None green=None ins=None insFlag=No)

#### 20. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R52: PSB Apna Ghar Top Up | Term Loan | Floating | occ=Salaried | label=650 - 699 | cibil~650-699 | cond=None | **10.0%** [Final rate]
- mst R567 (OFF-835): PSB Apna Ghar Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **10.0%** (women=None green=None ins=None insFlag=No)

#### 21. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R53: PSB Apna Ghar Top Up | Term Loan | Floating | occ=Salaried | label=< = 649 | cibil~300-None | cond=None | **11.65%** [Final rate]
- mst R568 (OFF-836): PSB Apna Ghar Top Up | Term Loan | Floating | occ=Salaried | cat=Any | cibil=300-649 | loan=None-None | ten=None-None | **11.65%** (women=None green=None ins=None insFlag=No)

### Master rows with no source match (21)

- mst R569 (OFF-837): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=825-900 | loan=2500001-5000000 | ten=None-None | **7.3%** (women=None green=None ins=None insFlag=No)
- mst R570 (OFF-838): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=825-900 | loan=5000001-7500000 | ten=None-None | **7.3%** (women=None green=None ins=None insFlag=No)
- mst R571 (OFF-839): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=825-900 | loan=7500001-1000000000 | ten=None-None | **7.3%** (women=None green=None ins=None insFlag=No)
- mst R572 (OFF-840): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=791-824 | loan=2500001-5000000 | ten=None-None | **7.4%** (women=None green=None ins=None insFlag=No)
- mst R573 (OFF-841): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=791-824 | loan=5000001-7500000 | ten=None-None | **7.4%** (women=None green=None ins=None insFlag=No)
- mst R574 (OFF-842): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=791-824 | loan=7500001-1000000000 | ten=None-None | **7.4%** (women=None green=None ins=None insFlag=No)
- mst R575 (OFF-843): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=750-790 | loan=2500001-5000000 | ten=None-None | **7.55%** (women=None green=None ins=None insFlag=No)
- mst R576 (OFF-844): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=750-790 | loan=5000001-7500000 | ten=None-None | **7.55%** (women=None green=None ins=None insFlag=No)
- mst R577 (OFF-845): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=750-790 | loan=7500001-1000000000 | ten=None-None | **7.55%** (women=None green=None ins=None insFlag=No)
- mst R578 (OFF-846): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=725-749 | loan=2500001-5000000 | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)
- mst R579 (OFF-847): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=725-749 | loan=5000001-7500000 | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)
- mst R580 (OFF-848): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=725-749 | loan=7500001-1000000000 | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)
- mst R581 (OFF-849): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=700-724 | loan=2500001-5000000 | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)
- mst R582 (OFF-850): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=700-724 | loan=5000001-7500000 | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)
- mst R583 (OFF-851): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=700-724 | loan=7500001-1000000000 | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)
- mst R584 (OFF-852): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=2500001-5000000 | ten=None-None | **9.05%** (women=None green=None ins=None insFlag=No)
- mst R585 (OFF-853): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=5000001-7500000 | ten=None-None | **9.05%** (women=None green=None ins=None insFlag=No)
- mst R586 (OFF-854): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=7500001-1000000000 | ten=None-None | **9.05%** (women=None green=None ins=None insFlag=No)
- mst R587 (OFF-855): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=300-649 | loan=2500001-5000000 | ten=None-None | **10.7%** (women=None green=None ins=None insFlag=No)
- mst R588 (OFF-856): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=300-649 | loan=5000001-7500000 | ten=None-None | **10.7%** (women=None green=None ins=None insFlag=No)
- mst R589 (OFF-857): PSB Apna Ghar | Term Loan | Floating | occ=Any | cat=Any | cibil=300-649 | loan=7500001-1000000000 | ten=None-None | **10.7%** (women=None green=None ins=None insFlag=No)

---

## Punjab National Bank

- Sheet: `Punjab National Bank`
- Source Final/ROI lines: **60**
- Master Offers rows: **60**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[7.2, 7.25, 7.35, 7.4, 7.5, 7.8, 7.9, 7.95, 8.05, 8.2, 8.25, 8.35, 8.4, 8.5, 8.7, 8.75, 8.8, 8.85, 8.9, 8.95, 9.0, 9.05, 9.1, 9.15, 9.2, 9.25, 9.3, 9.35, 9.4, 9.45, 9.55, 9.85, 10.0, 10.1, 10.15, 10.25, 10.35, 10.5, 10.6, 10.65, 10.75, 10.85]`
- Master unique `roi` (%): `[7.2, 7.25, 7.35, 7.4, 7.5, 7.8, 7.9, 7.95, 8.05, 8.2, 8.25, 8.35, 8.4, 8.5, 8.7, 8.75, 8.8, 8.85, 8.9, 8.95, 9.0, 9.05, 9.1, 9.15, 9.2, 9.25, 9.3, 9.35, 9.4, 9.45, 9.55, 9.85, 10.0, 10.1, 10.15, 10.25, 10.35, 10.5, 10.6, 10.65, 10.75, 10.85]`

### Line matches

#### 1. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R24: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=800+ | cibil~800-900 | cond=> 30 lakhs | **7.2%** [Final rate]
- mst R6 (OFF-6): Housing Loan For Public | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=3000001-1000000000 | ten=None-None | **7.2%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=800+ | cibil~800-900 | cond=> 30 lakhs | Tenure upto 10 years | **8.2%** [Tenure upto 10 years]
- mst R15 (OFF-15): Housing Loan For Public | Term Loan | Fixed | occ=Any | cat=Any | cibil=800-900 | loan=3000001-1000000000 | ten=1-120 | **8.2%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=800+ | cibil~800-900 | cond=> 30 lakhs | Tenure above 10 years | **8.7%** [Tenure above 10 years]
- mst R24 (OFF-24): Housing Loan For Public | Term Loan | Fixed | occ=Any | cat=Any | cibil=800-900 | loan=3000001-1000000000 | ten=121-360 | **8.7%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=17 (rate, facility, occupation, scheme)
- src R25: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=PNB Pride | cibil~— | cond=> 30 lakhs | **7.25%** [Final rate]
- mst R7 (OFF-7): Housing Loan For Public | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=None-None | loan=3000001-1000000000 | ten=None-None | **7.25%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R25: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=PNB Pride | cibil~— | cond=> 30 lakhs | Tenure upto 10 years | **8.25%** [Tenure upto 10 years]
- mst R16 (OFF-16): Housing Loan For Public | Term Loan | Fixed | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=None-None | loan=3000001-1000000000 | ten=1-120 | **8.25%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R25: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=PNB Pride | cibil~— | cond=> 30 lakhs | Tenure above 10 years | **8.75%** [Tenure above 10 years]
- mst R25 (OFF-25): Housing Loan For Public | Term Loan | Fixed | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=None-None | loan=3000001-1000000000 | ten=121-360 | **8.75%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R26: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=750 - 799 | cibil~750-799 | cond=> 30 lakhs | **7.25%** [Final rate]
- mst R8 (OFF-8): Housing Loan For Public | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=3000001-1000000000 | ten=None-None | **7.25%** (women=None green=None ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=750 - 799 | cibil~750-799 | cond=> 30 lakhs | Tenure upto 10 years | **8.25%** [Tenure upto 10 years]
- mst R17 (OFF-17): Housing Loan For Public | Term Loan | Fixed | occ=Any | cat=Any | cibil=750-799 | loan=3000001-1000000000 | ten=1-120 | **8.25%** (women=None green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=750 - 799 | cibil~750-799 | cond=> 30 lakhs | Tenure above 10 years | **8.75%** [Tenure above 10 years]
- mst R26 (OFF-26): Housing Loan For Public | Term Loan | Fixed | occ=Any | cat=Any | cibil=750-799 | loan=3000001-1000000000 | ten=121-360 | **8.75%** (women=None green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R27: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=700 - 749 | cibil~700-749 | cond=> 30 lakhs | **7.8%** [Final rate]
- mst R9 (OFF-9): Housing Loan For Public | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=3000001-1000000000 | ten=None-None | **7.8%** (women=None green=None ins=None insFlag=No)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=700 - 749 | cibil~700-749 | cond=> 30 lakhs | Tenure upto 10 years | **8.8%** [Tenure upto 10 years]
- mst R18 (OFF-18): Housing Loan For Public | Term Loan | Fixed | occ=Any | cat=Any | cibil=700-749 | loan=3000001-1000000000 | ten=1-120 | **8.8%** (women=None green=None ins=None insFlag=No)

#### 12. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=700 - 749 | cibil~700-749 | cond=> 30 lakhs | Tenure above 10 years | **9.3%** [Tenure above 10 years]
- mst R27 (OFF-27): Housing Loan For Public | Term Loan | Fixed | occ=Any | cat=Any | cibil=700-749 | loan=3000001-1000000000 | ten=121-360 | **9.3%** (women=None green=None ins=None insFlag=No)

#### 13. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R28: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=600 - 699 | cibil~600-699 | cond=> 30 lakhs | **9.0%** [Final rate]
- mst R10 (OFF-10): Housing Loan For Public | Term Loan | Floating | occ=Any | cat=Any | cibil=600-699 | loan=3000001-1000000000 | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)

#### 14. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R28: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=600 - 699 | cibil~600-699 | cond=> 30 lakhs | Tenure upto 10 years | **10.0%** [Tenure upto 10 years]
- mst R19 (OFF-19): Housing Loan For Public | Term Loan | Fixed | occ=Any | cat=Any | cibil=600-699 | loan=3000001-1000000000 | ten=1-120 | **10.0%** (women=None green=None ins=None insFlag=No)

#### 15. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R28: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=600 - 699 | cibil~600-699 | cond=> 30 lakhs | Tenure above 10 years | **10.5%** [Tenure above 10 years]
- mst R28 (OFF-28): Housing Loan For Public | Term Loan | Fixed | occ=Any | cat=Any | cibil=600-699 | loan=3000001-1000000000 | ten=121-360 | **10.5%** (women=None green=None ins=None insFlag=No)

#### 16. [OK] Δ=0.0%  score=17 (rate, facility, occupation, scheme)
- src R33: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=PNB Pride | cibil~— | cond=< 30 lakhs | **7.35%** [Final rate]
- mst R2 (OFF-2): Housing Loan For Public | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=None-None | loan=1-3000000 | ten=None-None | **7.35%** (women=None green=None ins=None insFlag=No)

#### 17. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R33: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=PNB Pride | cibil~— | cond=< 30 lakhs | Tenure upto 10 years | **8.35%** [Tenure upto 10 years]
- mst R11 (OFF-11): Housing Loan For Public | Term Loan | Fixed | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=None-None | loan=1-3000000 | ten=1-120 | **8.35%** (women=None green=None ins=None insFlag=No)

#### 18. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R33: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=PNB Pride | cibil~— | cond=< 30 lakhs | Tenure above 10 years | **8.85%** [Tenure above 10 years]
- mst R20 (OFF-20): Housing Loan For Public | Term Loan | Fixed | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=None-None | loan=1-3000000 | ten=121-360 | **8.85%** (women=None green=None ins=None insFlag=No)

#### 19. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R34: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=750+ | cibil~750-900 | cond=< 30 lakhs | **7.35%** [Final rate]
- mst R3 (OFF-3): Housing Loan For Public | Term Loan | Floating | occ=Any | cat=Any | cibil=750-900 | loan=1-3000000 | ten=None-None | **7.35%** (women=None green=None ins=None insFlag=No)

#### 20. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R34: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=750+ | cibil~750-900 | cond=< 30 lakhs | Tenure upto 10 years | **8.35%** [Tenure upto 10 years]
- mst R12 (OFF-12): Housing Loan For Public | Term Loan | Fixed | occ=Any | cat=Any | cibil=750-900 | loan=1-3000000 | ten=1-120 | **8.35%** (women=None green=None ins=None insFlag=No)

#### 21. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R34: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=750+ | cibil~750-900 | cond=< 30 lakhs | Tenure above 10 years | **8.85%** [Tenure above 10 years]
- mst R21 (OFF-21): Housing Loan For Public | Term Loan | Fixed | occ=Any | cat=Any | cibil=750-900 | loan=1-3000000 | ten=121-360 | **8.85%** (women=None green=None ins=None insFlag=No)

#### 22. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R35: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=700 - 749 | cibil~700-749 | cond=< 30 lakhs | **7.9%** [Final rate]
- mst R4 (OFF-4): Housing Loan For Public | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=1-3000000 | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)

#### 23. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R35: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=700 - 749 | cibil~700-749 | cond=< 30 lakhs | Tenure upto 10 years | **8.9%** [Tenure upto 10 years]
- mst R13 (OFF-13): Housing Loan For Public | Term Loan | Fixed | occ=Any | cat=Any | cibil=700-749 | loan=1-3000000 | ten=1-120 | **8.9%** (women=None green=None ins=None insFlag=No)

#### 24. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R35: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=700 - 749 | cibil~700-749 | cond=< 30 lakhs | Tenure above 10 years | **9.4%** [Tenure above 10 years]
- mst R22 (OFF-22): Housing Loan For Public | Term Loan | Fixed | occ=Any | cat=Any | cibil=700-749 | loan=1-3000000 | ten=121-360 | **9.4%** (women=None green=None ins=None insFlag=No)

#### 25. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R36: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=600 - 699 | cibil~600-699 | cond=< 30 lakhs | **9.1%** [Final rate]
- mst R5 (OFF-5): Housing Loan For Public | Term Loan | Floating | occ=Any | cat=Any | cibil=600-699 | loan=1-3000000 | ten=None-None | **9.1%** (women=None green=None ins=None insFlag=No)

#### 26. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R36: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=600 - 699 | cibil~600-699 | cond=< 30 lakhs | Tenure upto 10 years | **10.1%** [Tenure upto 10 years]
- mst R14 (OFF-14): Housing Loan For Public | Term Loan | Fixed | occ=Any | cat=Any | cibil=600-699 | loan=1-3000000 | ten=1-120 | **10.1%** (women=None green=None ins=None insFlag=No)

#### 27. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R36: Housing Loan For Public | Term Loan | Fixed | occ=Any | label=600 - 699 | cibil~600-699 | cond=< 30 lakhs | Tenure above 10 years | **10.6%** [Tenure above 10 years]
- mst R23 (OFF-23): Housing Loan For Public | Term Loan | Fixed | occ=Any | cat=Any | cibil=600-699 | loan=1-3000000 | ten=121-360 | **10.6%** (women=None green=None ins=None insFlag=No)

#### 28. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R44: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=800+ | cibil~800-900 | cond=> 30 lakhs | **7.35%** [Final rate]
- mst R33 (OFF-33): PNB Max-Saver | Overdraft | Floating | occ=Any | cat=Any | cibil=800-900 | loan=3000001-1000000000 | ten=None-None | **7.35%** (women=None green=None ins=None insFlag=No)

#### 29. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R44: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=800+ | cibil~800-900 | cond=> 30 lakhs | Tenure upto 10 years | **8.35%** [Tenure upto 10 years]
- mst R42 (OFF-42): PNB Max-Saver | Overdraft | Fixed | occ=Any | cat=Any | cibil=800-900 | loan=3000001-1000000000 | ten=1-120 | **8.35%** (women=None green=None ins=None insFlag=No)

#### 30. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R44: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=800+ | cibil~800-900 | cond=> 30 lakhs | Tenure above 10 years | **9.2%** [Tenure above 10 years]
- mst R51 (OFF-51): PNB Max-Saver | Overdraft | Fixed | occ=Any | cat=Any | cibil=800-900 | loan=3000001-1000000000 | ten=121-360 | **9.2%** (women=None green=None ins=None insFlag=No)

#### 31. [OK] Δ=0.0%  score=17 (rate, facility, occupation, scheme)
- src R45: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=PNB Pride | cibil~— | cond=> 30 lakhs | **7.4%** [Final rate]
- mst R34 (OFF-34): PNB Max-Saver | Overdraft | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=None-None | loan=3000001-1000000000 | ten=None-None | **7.4%** (women=None green=None ins=None insFlag=No)

#### 32. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R45: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=PNB Pride | cibil~— | cond=> 30 lakhs | Tenure upto 10 years | **8.4%** [Tenure upto 10 years]
- mst R43 (OFF-43): PNB Max-Saver | Overdraft | Fixed | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=None-None | loan=3000001-1000000000 | ten=1-120 | **8.4%** (women=None green=None ins=None insFlag=No)

#### 33. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R45: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=PNB Pride | cibil~— | cond=> 30 lakhs | Tenure above 10 years | **9.25%** [Tenure above 10 years]
- mst R52 (OFF-52): PNB Max-Saver | Overdraft | Fixed | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=None-None | loan=3000001-1000000000 | ten=121-360 | **9.25%** (women=None green=None ins=None insFlag=No)

#### 34. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R46: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=750 - 799 | cibil~750-799 | cond=> 30 lakhs | **7.4%** [Final rate]
- mst R35 (OFF-35): PNB Max-Saver | Overdraft | Floating | occ=Any | cat=Any | cibil=750-799 | loan=3000001-1000000000 | ten=None-None | **7.4%** (women=None green=None ins=None insFlag=No)

#### 35. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R46: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=750 - 799 | cibil~750-799 | cond=> 30 lakhs | Tenure upto 10 years | **8.4%** [Tenure upto 10 years]
- mst R44 (OFF-44): PNB Max-Saver | Overdraft | Fixed | occ=Any | cat=Any | cibil=750-799 | loan=3000001-1000000000 | ten=1-120 | **8.4%** (women=None green=None ins=None insFlag=No)

#### 36. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R46: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=750 - 799 | cibil~750-799 | cond=> 30 lakhs | Tenure above 10 years | **9.25%** [Tenure above 10 years]
- mst R53 (OFF-53): PNB Max-Saver | Overdraft | Fixed | occ=Any | cat=Any | cibil=750-799 | loan=3000001-1000000000 | ten=121-360 | **9.25%** (women=None green=None ins=None insFlag=No)

#### 37. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R47: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=700 - 749 | cibil~700-749 | cond=> 30 lakhs | **7.95%** [Final rate]
- mst R36 (OFF-36): PNB Max-Saver | Overdraft | Floating | occ=Any | cat=Any | cibil=700-749 | loan=3000001-1000000000 | ten=None-None | **7.95%** (women=None green=None ins=None insFlag=No)

#### 38. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R47: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=700 - 749 | cibil~700-749 | cond=> 30 lakhs | Tenure upto 10 years | **8.95%** [Tenure upto 10 years]
- mst R45 (OFF-45): PNB Max-Saver | Overdraft | Fixed | occ=Any | cat=Any | cibil=700-749 | loan=3000001-1000000000 | ten=1-120 | **8.95%** (women=None green=None ins=None insFlag=No)

#### 39. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R47: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=700 - 749 | cibil~700-749 | cond=> 30 lakhs | Tenure above 10 years | **9.45%** [Tenure above 10 years]
- mst R54 (OFF-54): PNB Max-Saver | Overdraft | Fixed | occ=Any | cat=Any | cibil=700-749 | loan=3000001-1000000000 | ten=121-360 | **9.45%** (women=None green=None ins=None insFlag=No)

#### 40. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R48: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=600 - 699 | cibil~600-699 | cond=> 30 lakhs | **9.15%** [Final rate]
- mst R37 (OFF-37): PNB Max-Saver | Overdraft | Floating | occ=Any | cat=Any | cibil=600-699 | loan=3000001-1000000000 | ten=None-None | **9.15%** (women=None green=None ins=None insFlag=No)

#### 41. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R48: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=600 - 699 | cibil~600-699 | cond=> 30 lakhs | Tenure upto 10 years | **10.15%** [Tenure upto 10 years]
- mst R46 (OFF-46): PNB Max-Saver | Overdraft | Fixed | occ=Any | cat=Any | cibil=600-699 | loan=3000001-1000000000 | ten=1-120 | **10.15%** (women=None green=None ins=None insFlag=No)

#### 42. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R48: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=600 - 699 | cibil~600-699 | cond=> 30 lakhs | Tenure above 10 years | **10.65%** [Tenure above 10 years]
- mst R55 (OFF-55): PNB Max-Saver | Overdraft | Fixed | occ=Any | cat=Any | cibil=600-699 | loan=3000001-1000000000 | ten=121-360 | **10.65%** (women=None green=None ins=None insFlag=No)

#### 43. [OK] Δ=0.0%  score=17 (rate, facility, occupation, scheme)
- src R53: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=PNB Pride | cibil~— | cond=< 30 lakhs | **7.5%** [Final rate]
- mst R29 (OFF-29): PNB Max-Saver | Overdraft | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=None-None | loan=1-3000000 | ten=None-None | **7.5%** (women=None green=None ins=None insFlag=No)

#### 44. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R53: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=PNB Pride | cibil~— | cond=< 30 lakhs | Tenure upto 10 years | **8.5%** [Tenure upto 10 years]
- mst R38 (OFF-38): PNB Max-Saver | Overdraft | Fixed | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=None-None | loan=1-3000000 | ten=1-120 | **8.5%** (women=None green=None ins=None insFlag=No)

#### 45. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R53: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=PNB Pride | cibil~— | cond=< 30 lakhs | Tenure above 10 years | **9.0%** [Tenure above 10 years]
- mst R47 (OFF-47): PNB Max-Saver | Overdraft | Fixed | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=None-None | loan=1-3000000 | ten=121-360 | **9.0%** (women=None green=None ins=None insFlag=No)

#### 46. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R54: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=750+ | cibil~750-900 | cond=< 30 lakhs | **7.5%** [Final rate]
- mst R30 (OFF-30): PNB Max-Saver | Overdraft | Floating | occ=Any | cat=Any | cibil=750-900 | loan=1-3000000 | ten=None-None | **7.5%** (women=None green=None ins=None insFlag=No)

#### 47. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R54: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=750+ | cibil~750-900 | cond=< 30 lakhs | Tenure upto 10 years | **8.5%** [Tenure upto 10 years]
- mst R39 (OFF-39): PNB Max-Saver | Overdraft | Fixed | occ=Any | cat=Any | cibil=750-900 | loan=1-3000000 | ten=1-120 | **8.5%** (women=None green=None ins=None insFlag=No)

#### 48. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R54: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=750+ | cibil~750-900 | cond=< 30 lakhs | Tenure above 10 years | **9.0%** [Tenure above 10 years]
- mst R48 (OFF-48): PNB Max-Saver | Overdraft | Fixed | occ=Any | cat=Any | cibil=750-900 | loan=1-3000000 | ten=121-360 | **9.0%** (women=None green=None ins=None insFlag=No)

#### 49. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R55: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=700 - 749 | cibil~700-749 | cond=< 30 lakhs | **8.05%** [Final rate]
- mst R31 (OFF-31): PNB Max-Saver | Overdraft | Floating | occ=Any | cat=Any | cibil=700-749 | loan=1-3000000 | ten=None-None | **8.05%** (women=None green=None ins=None insFlag=No)

#### 50. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R55: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=700 - 749 | cibil~700-749 | cond=< 30 lakhs | Tenure upto 10 years | **9.05%** [Tenure upto 10 years]
- mst R40 (OFF-40): PNB Max-Saver | Overdraft | Fixed | occ=Any | cat=Any | cibil=700-749 | loan=1-3000000 | ten=1-120 | **9.05%** (women=None green=None ins=None insFlag=No)

#### 51. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R55: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=700 - 749 | cibil~700-749 | cond=< 30 lakhs | Tenure above 10 years | **9.55%** [Tenure above 10 years]
- mst R49 (OFF-49): PNB Max-Saver | Overdraft | Fixed | occ=Any | cat=Any | cibil=700-749 | loan=1-3000000 | ten=121-360 | **9.55%** (women=None green=None ins=None insFlag=No)

#### 52. [OK] Δ=0.0%  score=22 (rate, facility, occupation, scheme, cibil:5)
- src R56: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=600 - 699 | cibil~600-699 | cond=< 30 lakhs | **9.25%** [Final rate]
- mst R32 (OFF-32): PNB Max-Saver | Overdraft | Floating | occ=Any | cat=Any | cibil=600-699 | loan=1-3000000 | ten=None-None | **9.25%** (women=None green=None ins=None insFlag=No)

#### 53. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R56: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=600 - 699 | cibil~600-699 | cond=< 30 lakhs | Tenure upto 10 years | **10.25%** [Tenure upto 10 years]
- mst R41 (OFF-41): PNB Max-Saver | Overdraft | Fixed | occ=Any | cat=Any | cibil=600-699 | loan=1-3000000 | ten=1-120 | **10.25%** (women=None green=None ins=None insFlag=No)

#### 54. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R56: PNB Max-Saver | Overdraft | Fixed | occ=Any | label=600 - 699 | cibil~600-699 | cond=< 30 lakhs | Tenure above 10 years | **10.75%** [Tenure above 10 years]
- mst R50 (OFF-50): PNB Max-Saver | Overdraft | Fixed | occ=Any | cat=Any | cibil=600-699 | loan=1-3000000 | ten=121-360 | **10.75%** (women=None green=None ins=None insFlag=No)

#### 55. [OK] Δ=0.0%  score=17 (rate, facility, occupation, scheme)
- src R62: TOP-UP Loan | Term Loan | Fixed | occ=Any | label=a. Term Loan | cibil~— | cond=< 30 lakhs | **8.35%** [Final rate]
- mst R56 (OFF-56): Top-up Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=None-None | loan=None-None | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)

#### 56. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R62: TOP-UP Loan | Term Loan | Fixed | occ=Any | label=a. Term Loan | cibil~— | cond=< 30 lakhs | Tenure upto 10 years | **9.35%** [Tenure upto 10 years]
- mst R58 (OFF-58): Top-up Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=None-None | loan=None-None | ten=1-120 | **9.35%** (women=None green=None ins=None insFlag=No)

#### 57. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R62: TOP-UP Loan | Term Loan | Fixed | occ=Any | label=a. Term Loan | cibil~— | cond=< 30 lakhs | Tenure above 10 years | **9.85%** [Tenure above 10 years]
- mst R60 (OFF-60): Top-up Loan | Term Loan | Fixed | occ=Any | cat=Any | cibil=None-None | loan=None-None | ten=121-360 | **9.85%** (women=None green=None ins=None insFlag=No)

#### 58. [OK] Δ=0.0%  score=15 (rate, occupation, scheme)
- src R63: TOP-UP Loan | Term Loan | Fixed | occ=Any | label=b. Over Draft | cibil~— | cond=< 30 lakhs | **9.35%** [Final rate]
- mst R57 (OFF-57): Top-up Loan | Overdraft | Floating | occ=Any | cat=Any | cibil=None-None | loan=None-None | ten=None-None | **9.35%** (women=None green=None ins=None insFlag=No)

#### 59. [OK] Δ=0.0%  score=18 (rate, rate_type, occupation, scheme)
- src R63: TOP-UP Loan | Term Loan | Fixed | occ=Any | label=b. Over Draft | cibil~— | cond=< 30 lakhs | Tenure upto 10 years | **10.35%** [Tenure upto 10 years]
- mst R59 (OFF-59): Top-up Loan | Overdraft | Fixed | occ=Any | cat=Any | cibil=None-None | loan=None-None | ten=1-120 | **10.35%** (women=None green=None ins=None insFlag=No)

#### 60. [OK] Δ=0.0%  score=18 (rate, rate_type, occupation, scheme)
- src R63: TOP-UP Loan | Term Loan | Fixed | occ=Any | label=b. Over Draft | cibil~— | cond=< 30 lakhs | Tenure above 10 years | **10.85%** [Tenure above 10 years]
- mst R61 (OFF-61): Top-up Loan | Overdraft | Fixed | occ=Any | cat=Any | cibil=None-None | loan=None-None | ten=121-360 | **10.85%** (women=None green=None ins=None insFlag=No)

---

## RBL Bank

- Sheet: `RBL Bank`
- Source Final/ROI lines: **6**
- Master Offers rows: **12**
- Verdict: `RATES_OK_ROW_EXPANSION`
- Source unique rates (%): `[9.0, 9.35, 9.75, 10.25, 10.65, 11.25]`
- Master unique `roi` (%): `[9.0, 9.35, 9.75, 10.25, 10.65, 11.25]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R22: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **9.0%** [Final rate]
- mst R995 (OFF-1344): Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **9.35%** [Final rate]
- mst R997 (OFF-1346): Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **9.35%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **9.75%** [Final rate]
- mst R999 (OFF-1348): Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **9.75%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **10.25%** [Final rate]
- mst R1001 (OFF-1350): Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **10.25%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **10.65%** [Final rate]
- mst R1003 (OFF-1352): Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R27: Housing Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **11.25%** [Final rate]
- mst R1005 (OFF-1354): Housing Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **11.25%** (women=None green=None ins=None insFlag=No)

### Master rows with no source match (6)

- mst R996 (OFF-1345): Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)
- mst R998 (OFF-1347): Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **9.35%** (women=None green=None ins=None insFlag=No)
- mst R1000 (OFF-1349): Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **9.75%** (women=None green=None ins=None insFlag=No)
- mst R1002 (OFF-1351): Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **10.25%** (women=None green=None ins=None insFlag=No)
- mst R1004 (OFF-1353): Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **10.65%** (women=None green=None ins=None insFlag=No)
- mst R1006 (OFF-1355): Housing Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **11.25%** (women=None green=None ins=None insFlag=No)

---

## South Indian Bank

- Sheet: `South Indian Bank`
- Source Final/ROI lines: **6**
- Master Offers rows: **6**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[7.2, 7.45, 7.75, 8.05, 8.4, 8.65]`
- Master unique `roi` (%): `[7.2, 7.45, 7.75, 8.05, 8.4, 8.65]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R22: SIB Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.2%** [Final rate]
- mst R1007 (OFF-1356): SIB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.2%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: SIB Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.45%** [Final rate]
- mst R1008 (OFF-1357): SIB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.45%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: SIB Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **7.75%** [Final rate]
- mst R1009 (OFF-1358): SIB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: SIB Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.05%** [Final rate]
- mst R1010 (OFF-1359): SIB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.05%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: SIB Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **8.4%** [Final rate]
- mst R1011 (OFF-1360): SIB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **8.4%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R27: SIB Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **8.65%** [Final rate]
- mst R1012 (OFF-1361): SIB Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **8.65%** (women=None green=None ins=None insFlag=No)

---

## State Bank of India

- Sheet: `State Bank of India`
- Source Final/ROI lines: **63**
- Master Offers rows: **63**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[7.25, 7.6, 7.7, 7.75, 7.8, 7.9, 8.0, 8.1, 8.2, 8.25, 8.3, 8.35, 8.4, 8.45, 8.5, 8.55, 8.65, 8.75, 8.85, 8.9, 8.95, 9.0, 9.05, 9.1, 9.35, 9.4, 9.45, 9.5, 9.55, 9.6, 9.9, 10.0, 10.1, 10.2, 10.3, 10.5, 10.6, 10.8, 10.9, 11.1, 11.2]`
- Master unique `roi` (%): `[7.25, 7.6, 7.7, 7.75, 7.8, 7.9, 8.0, 8.1, 8.2, 8.25, 8.3, 8.35, 8.4, 8.45, 8.5, 8.55, 8.65, 8.75, 8.85, 8.9, 8.95, 9.0, 9.05, 9.1, 9.35, 9.4, 9.45, 9.5, 9.55, 9.6, 9.9, 10.0, 10.1, 10.2, 10.3, 10.5, 10.6, 10.8, 10.9, 11.1, 11.2]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Home Loan | Term Loan | Floating | occ=Any | label=825+ | cibil~825-900 | cond=None | **7.25%** [Final rate]
- mst R590 (OFF-858): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=825-900 | loan=None-None | ten=None-None | **7.25%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Home Loan | Term Loan | Floating | occ=Any | label=780 - 824 | cibil~780-824 | cond=None | **7.6%** [Final rate]
- mst R591 (OFF-860): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=780-824 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Home Loan | Term Loan | Floating | occ=Any | label=750 - 779 | cibil~750-779 | cond=None | **7.7%** [Final rate]
- mst R592 (OFF-862): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-779 | loan=None-None | ten=None-None | **7.7%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Home Loan | Term Loan | Floating | occ=Any | label=700 - 749 | cibil~700-749 | cond=None | **7.8%** [Final rate]
- mst R593 (OFF-864): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **7.8%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Home Loan | Term Loan | Floating | occ=Any | label=650 - 699 | cibil~650-699 | cond=None | **8.25%** [Final rate]
- mst R594 (OFF-866): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R28: Home Loan | Term Loan | Floating | occ=Any | label=550 - 649 | cibil~550-649 | cond=None | **8.55%** [Final rate]
- mst R595 (OFF-868): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=550-649 | loan=None-None | ten=None-None | **8.55%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R29: Home Loan | Term Loan | Floating | occ=Any | label=151 - 200 | cibil~151-200 | cond=None | **8.35%** [Final rate]
- mst R596 (OFF-870): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=151-200 | loan=None-None | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R30: Home Loan | Term Loan | Floating | occ=Any | label=101 - 150 | cibil~101-150 | cond=None | **8.35%** [Final rate]
- mst R597 (OFF-872): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=101-150 | loan=None-None | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R31: Home Loan | Term Loan | Floating | occ=Any | label=NTC | cibil~-1-0 | cond=None | **7.9%** [Final rate]
- mst R598 (OFF-874): Home Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R36: Home Loan | Term Loan | Floating | occ=Self-Employed | label=825+ | cibil~825-900 | cond=None | **7.25%** [Final rate]
- mst R599 (OFF-876): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=825-900 | loan=None-None | ten=None-None | **7.25%** (women=None green=None ins=None insFlag=No)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R37: Home Loan | Term Loan | Floating | occ=Self-Employed | label=780 - 824 | cibil~780-824 | cond=None | **7.7%** [Final rate]
- mst R600 (OFF-878): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=780-824 | loan=None-None | ten=None-None | **7.7%** (women=None green=None ins=None insFlag=No)

#### 12. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R38: Home Loan | Term Loan | Floating | occ=Self-Employed | label=750 - 779 | cibil~750-779 | cond=None | **7.8%** [Final rate]
- mst R601 (OFF-880): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=750-779 | loan=None-None | ten=None-None | **7.8%** (women=None green=None ins=None insFlag=No)

#### 13. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R39: Home Loan | Term Loan | Floating | occ=Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **7.9%** [Final rate]
- mst R602 (OFF-882): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)

#### 14. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R40: Home Loan | Term Loan | Floating | occ=Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.35%** [Final rate]
- mst R603 (OFF-884): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.35%** (women=None green=None ins=None insFlag=No)

#### 15. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R41: Home Loan | Term Loan | Floating | occ=Self-Employed | label=550 - 649 | cibil~550-649 | cond=None | **8.65%** [Final rate]
- mst R604 (OFF-886): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=550-649 | loan=None-None | ten=None-None | **8.65%** (women=None green=None ins=None insFlag=No)

#### 16. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R42: Home Loan | Term Loan | Floating | occ=Self-Employed | label=151 - 200 | cibil~151-200 | cond=None | **8.45%** [Final rate]
- mst R605 (OFF-888): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=151-200 | loan=None-None | ten=None-None | **8.45%** (women=None green=None ins=None insFlag=No)

#### 17. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R43: Home Loan | Term Loan | Floating | occ=Self-Employed | label=101 - 150 | cibil~101-150 | cond=None | **8.45%** [Final rate]
- mst R606 (OFF-890): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=101-150 | loan=None-None | ten=None-None | **8.45%** (women=None green=None ins=None insFlag=No)

#### 18. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R44: Home Loan | Term Loan | Floating | occ=Self-Employed | label=NTC | cibil~-1-0 | cond=None | **8.0%** [Final rate]
- mst R607 (OFF-892): Home Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **8.0%** (women=None green=None ins=None insFlag=No)

#### 19. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R52: Home loan Maxgain | Overdraft | Floating | occ=Salaried & Self-Employed | label=825+ | cibil~825-900 | cond=None | **7.75%** [Final rate]
- mst R608 (OFF-894): Home Loan Maxgain | Overdraft | Floating | occ=Any | cat=Any | cibil=825-900 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)

#### 20. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R53: Home loan Maxgain | Overdraft | Floating | occ=Salaried & Self-Employed | label=780 - 824 | cibil~780-824 | cond=None | **8.1%** [Final rate]
- mst R609 (OFF-896): Home Loan Maxgain | Overdraft | Floating | occ=Any | cat=Any | cibil=780-824 | loan=None-None | ten=None-None | **8.1%** (women=None green=None ins=None insFlag=No)

#### 21. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R54: Home loan Maxgain | Overdraft | Floating | occ=Salaried & Self-Employed | label=750 - 779 | cibil~750-779 | cond=None | **8.2%** [Final rate]
- mst R610 (OFF-898): Home Loan Maxgain | Overdraft | Floating | occ=Any | cat=Any | cibil=750-779 | loan=None-None | ten=None-None | **8.2%** (women=None green=None ins=None insFlag=No)

#### 22. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R55: Home loan Maxgain | Overdraft | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **8.3%** [Final rate]
- mst R611 (OFF-900): Home Loan Maxgain | Overdraft | Floating | occ=Any | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **8.3%** (women=None green=None ins=None insFlag=No)

#### 23. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R56: Home loan Maxgain | Overdraft | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **8.75%** [Final rate]
- mst R612 (OFF-902): Home Loan Maxgain | Overdraft | Floating | occ=Any | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)

#### 24. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R57: Home loan Maxgain | Overdraft | Floating | occ=Salaried & Self-Employed | label=550 - 649 | cibil~550-649 | cond=None | **9.05%** [Final rate]
- mst R613 (OFF-904): Home Loan Maxgain | Overdraft | Floating | occ=Any | cat=Any | cibil=550-649 | loan=None-None | ten=None-None | **9.05%** (women=None green=None ins=None insFlag=No)

#### 25. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R58: Home loan Maxgain | Overdraft | Floating | occ=Salaried & Self-Employed | label=151 - 200 | cibil~151-200 | cond=None | **8.75%** [Final rate]
- mst R614 (OFF-906): Home Loan Maxgain | Overdraft | Floating | occ=Any | cat=Any | cibil=151-200 | loan=None-None | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)

#### 26. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R59: Home loan Maxgain | Overdraft | Floating | occ=Salaried & Self-Employed | label=101 - 150 | cibil~101-150 | cond=None | **8.85%** [Final rate]
- mst R615 (OFF-908): Home Loan Maxgain | Overdraft | Floating | occ=Any | cat=Any | cibil=101-150 | loan=None-None | ten=None-None | **8.85%** (women=None green=None ins=None insFlag=No)

#### 27. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R60: Home loan Maxgain | Overdraft | Floating | occ=Salaried & Self-Employed | label=NTC | cibil~-1-0 | cond=None | **8.4%** [Final rate]
- mst R616 (OFF-910): Home Loan Maxgain | Overdraft | Floating | occ=Any | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **8.4%** (women=None green=None ins=None insFlag=No)

#### 28. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R68: Top up loan | Term Loan | Floating | occ=Salaried | label=825+ | cibil~825-900 | cond=None | **7.75%** [Final rate]
- mst R617 (OFF-912): Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=825-900 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)

#### 29. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R69: Top up loan | Term Loan | Floating | occ=Salaried | label=780 - 824 | cibil~780-824 | cond=None | **8.9%** [Final rate]
- mst R618 (OFF-914): Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=780-824 | loan=None-None | ten=None-None | **8.9%** (women=None green=None ins=None insFlag=No)

#### 30. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R70: Top up loan | Term Loan | Floating | occ=Salaried | label=750 - 779 | cibil~750-779 | cond=None | **9.4%** [Final rate]
- mst R619 (OFF-916): Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-779 | loan=None-None | ten=None-None | **9.4%** (women=None green=None ins=None insFlag=No)

#### 31. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R71: Top up loan | Term Loan | Floating | occ=Salaried | label=700 - 749 | cibil~700-749 | cond=None | **9.9%** [Final rate]
- mst R620 (OFF-918): Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **9.9%** (women=None green=None ins=None insFlag=No)

#### 32. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R72: Top up loan | Term Loan | Floating | occ=Salaried | label=650 - 699 | cibil~650-699 | cond=None | **10.2%** [Final rate]
- mst R621 (OFF-920): Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **10.2%** (women=None green=None ins=None insFlag=No)

#### 33. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R73: Top up loan | Term Loan | Floating | occ=Salaried | label=550 - 649 | cibil~550-649 | cond=None | **10.5%** [Final rate]
- mst R622 (OFF-922): Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=550-649 | loan=None-None | ten=None-None | **10.5%** (women=None green=None ins=None insFlag=No)

#### 34. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R74: Top up loan | Term Loan | Floating | occ=Salaried | label=151 - 200 | cibil~151-200 | cond=None | **8.75%** [Final rate]
- mst R623 (OFF-924): Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=151-200 | loan=None-None | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)

#### 35. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R75: Top up loan | Term Loan | Floating | occ=Salaried | label=101 - 150 | cibil~101-150 | cond=None | **8.85%** [Final rate]
- mst R624 (OFF-926): Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=101-150 | loan=None-None | ten=None-None | **8.85%** (women=None green=None ins=None insFlag=No)

#### 36. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R76: Top up loan | Term Loan | Floating | occ=Salaried | label=NTC | cibil~-1-0 | cond=None | **8.4%** [Final rate]
- mst R625 (OFF-928): Top Up Loan | Term Loan | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **8.4%** (women=None green=None ins=None insFlag=No)

#### 37. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R81: Top up loan | Term Loan | Floating | occ=Self-Employed | label=825+ | cibil~825-900 | cond=None | **7.75%** [Final rate]
- mst R626 (OFF-930): Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=825-900 | loan=None-None | ten=None-None | **7.75%** (women=None green=None ins=None insFlag=No)

#### 38. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R82: Top up loan | Term Loan | Floating | occ=Self-Employed | label=780 - 824 | cibil~780-824 | cond=None | **9.0%** [Final rate]
- mst R627 (OFF-932): Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=780-824 | loan=None-None | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)

#### 39. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R83: Top up loan | Term Loan | Floating | occ=Self-Employed | label=750 - 779 | cibil~750-779 | cond=None | **9.5%** [Final rate]
- mst R628 (OFF-934): Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=750-779 | loan=None-None | ten=None-None | **9.5%** (women=None green=None ins=None insFlag=No)

#### 40. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R84: Top up loan | Term Loan | Floating | occ=Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **10.0%** [Final rate]
- mst R629 (OFF-936): Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **10.0%** (women=None green=None ins=None insFlag=No)

#### 41. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R85: Top up loan | Term Loan | Floating | occ=Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **10.3%** [Final rate]
- mst R630 (OFF-938): Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **10.3%** (women=None green=None ins=None insFlag=No)

#### 42. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R86: Top up loan | Term Loan | Floating | occ=Self-Employed | label=550 - 649 | cibil~550-649 | cond=None | **10.6%** [Final rate]
- mst R631 (OFF-940): Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=550-649 | loan=None-None | ten=None-None | **10.6%** (women=None green=None ins=None insFlag=No)

#### 43. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R87: Top up loan | Term Loan | Floating | occ=Self-Employed | label=151 - 200 | cibil~151-200 | cond=None | **8.85%** [Final rate]
- mst R632 (OFF-942): Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=151-200 | loan=None-None | ten=None-None | **8.85%** (women=None green=None ins=None insFlag=No)

#### 44. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R88: Top up loan | Term Loan | Floating | occ=Self-Employed | label=101 - 150 | cibil~101-150 | cond=None | **8.95%** [Final rate]
- mst R633 (OFF-944): Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=101-150 | loan=None-None | ten=None-None | **8.95%** (women=None green=None ins=None insFlag=No)

#### 45. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R89: Top up loan | Term Loan | Floating | occ=Self-Employed | label=NTC | cibil~-1-0 | cond=None | **8.5%** [Final rate]
- mst R634 (OFF-946): Top Up Loan | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **8.5%** (women=None green=None ins=None insFlag=No)

#### 46. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R97: Top up loan (Maxgain) | Overdraft | Floating | occ=Salaried | label=825+ | cibil~825-900 | cond=None | **8.25%** [Final rate]
- mst R635 (OFF-948): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Salaried | cat=Any | cibil=825-900 | loan=None-None | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)

#### 47. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R98: Top up loan (Maxgain) | Overdraft | Floating | occ=Salaried | label=780 - 824 | cibil~780-824 | cond=None | **9.5%** [Final rate]
- mst R636 (OFF-950): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Salaried | cat=Any | cibil=780-824 | loan=None-None | ten=None-None | **9.5%** (women=None green=None ins=None insFlag=No)

#### 48. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R99: Top up loan (Maxgain) | Overdraft | Floating | occ=Salaried | label=750 - 779 | cibil~750-779 | cond=None | **10.0%** [Final rate]
- mst R637 (OFF-952): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Salaried | cat=Any | cibil=750-779 | loan=None-None | ten=None-None | **10.0%** (women=None green=None ins=None insFlag=No)

#### 49. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R100: Top up loan (Maxgain) | Overdraft | Floating | occ=Salaried | label=700 - 749 | cibil~700-749 | cond=None | **10.5%** [Final rate]
- mst R638 (OFF-954): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Salaried | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **10.5%** (women=None green=None ins=None insFlag=No)

#### 50. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R101: Top up loan (Maxgain) | Overdraft | Floating | occ=Salaried | label=650 - 699 | cibil~650-699 | cond=None | **10.8%** [Final rate]
- mst R639 (OFF-956): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Salaried | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **10.8%** (women=None green=None ins=None insFlag=No)

#### 51. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R102: Top up loan (Maxgain) | Overdraft | Floating | occ=Salaried | label=550 - 649 | cibil~550-649 | cond=None | **11.1%** [Final rate]
- mst R640 (OFF-958): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Salaried | cat=Any | cibil=550-649 | loan=None-None | ten=None-None | **11.1%** (women=None green=None ins=None insFlag=No)

#### 52. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R103: Top up loan (Maxgain) | Overdraft | Floating | occ=Salaried | label=151 - 200 | cibil~151-200 | cond=None | **9.35%** [Final rate]
- mst R641 (OFF-960): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Salaried | cat=Any | cibil=151-200 | loan=None-None | ten=None-None | **9.35%** (women=None green=None ins=None insFlag=No)

#### 53. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R104: Top up loan (Maxgain) | Overdraft | Floating | occ=Salaried | label=101 - 150 | cibil~101-150 | cond=None | **9.45%** [Final rate]
- mst R642 (OFF-962): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Salaried | cat=Any | cibil=101-150 | loan=None-None | ten=None-None | **9.45%** (women=None green=None ins=None insFlag=No)

#### 54. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R105: Top up loan (Maxgain) | Overdraft | Floating | occ=Salaried | label=NTC | cibil~-1-0 | cond=None | **9.0%** [Final rate]
- mst R643 (OFF-964): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)

#### 55. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R110: Top up loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | label=825+ | cibil~825-900 | cond=None | **8.25%** [Final rate]
- mst R644 (OFF-966): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=825-900 | loan=None-None | ten=None-None | **8.25%** (women=None green=None ins=None insFlag=No)

#### 56. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R111: Top up loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | label=780 - 824 | cibil~780-824 | cond=None | **9.6%** [Final rate]
- mst R645 (OFF-968): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=780-824 | loan=None-None | ten=None-None | **9.6%** (women=None green=None ins=None insFlag=No)

#### 57. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R112: Top up loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | label=750 - 779 | cibil~750-779 | cond=None | **10.1%** [Final rate]
- mst R646 (OFF-970): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=750-779 | loan=None-None | ten=None-None | **10.1%** (women=None green=None ins=None insFlag=No)

#### 58. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R113: Top up loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **10.6%** [Final rate]
- mst R647 (OFF-972): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **10.6%** (women=None green=None ins=None insFlag=No)

#### 59. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R114: Top up loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **10.9%** [Final rate]
- mst R648 (OFF-974): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **10.9%** (women=None green=None ins=None insFlag=No)

#### 60. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R115: Top up loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | label=550 - 649 | cibil~550-649 | cond=None | **11.2%** [Final rate]
- mst R649 (OFF-976): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=550-649 | loan=None-None | ten=None-None | **11.2%** (women=None green=None ins=None insFlag=No)

#### 61. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R116: Top up loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | label=151 - 200 | cibil~151-200 | cond=None | **9.45%** [Final rate]
- mst R650 (OFF-978): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=151-200 | loan=None-None | ten=None-None | **9.45%** (women=None green=None ins=None insFlag=No)

#### 62. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R117: Top up loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | label=101 - 150 | cibil~101-150 | cond=None | **9.55%** [Final rate]
- mst R651 (OFF-980): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=101-150 | loan=None-None | ten=None-None | **9.55%** (women=None green=None ins=None insFlag=No)

#### 63. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R118: Top up loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | label=NTC | cibil~-1-0 | cond=None | **9.1%** [Final rate]
- mst R652 (OFF-982): Top Up Loan (Maxgain) | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **9.1%** (women=None green=None ins=None insFlag=No)

---

## Tamilnad Mercantile Bank

- Sheet: `Tamilnad Mercantile Bank`
- Source Final/ROI lines: **7**
- Master Offers rows: **7**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[7.9, 8.15, 8.45, 8.75, 9.0, 9.2, 9.75]`
- Master unique `roi` (%): `[7.9, 8.15, 8.45, 8.75, 9.0, 9.2, 9.75]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R22: Elite Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.9%** [Final rate]
- mst R1130 (OFF-1486): Elite Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.9%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Elite Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **8.15%** [Final rate]
- mst R1131 (OFF-1487): Elite Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Elite Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=701 - 749 | cibil~701-749 | cond=None | **8.75%** [Final rate]
- mst R1132 (OFF-1488): Elite Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=701-749 | loan=None-None | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Elite Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=675 - 700 | cibil~675-700 | cond=None | **9.0%** [Final rate]
- mst R1133 (OFF-1489): Elite Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=675-700 | loan=None-None | ten=None-None | **9.0%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Elite Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 674 | cibil~650-674 | cond=None | **9.2%** [Final rate]
- mst R1134 (OFF-1490): Elite Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-674 | loan=None-None | ten=None-None | **9.2%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R27: Elite Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 650 | cibil~300-None | cond=None | **9.75%** [Final rate]
- mst R1135 (OFF-1491): Elite Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-649 | loan=None-None | ten=None-None | **9.75%** (women=None green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R28: Elite Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=NTC | cibil~-1-0 | cond=None | **8.45%** [Final rate]
- mst R1136 (OFF-1492): Elite Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **8.45%** (women=None green=None ins=None insFlag=No)

---

## UCO Bank

- Sheet: `UCO Bank`
- Source Final/ROI lines: **14**
- Master Offers rows: **14**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[7.15, 7.25, 7.35, 7.55, 7.85, 8.15, 8.35, 8.5, 8.75, 8.85, 9.1, 9.25, 10.75]`
- Master unique `roi` (%): `[7.15, 7.25, 7.35, 7.55, 7.85, 8.15, 8.35, 8.5, 8.75, 8.85, 9.1, 9.25, 10.75]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: UCO Home | Term Loan | Floating | occ=Any | label=850+ | cibil~850-900 | cond=None | **7.15%** [Final rate]
- mst R706 (OFF-1055): UCO Home | Term Loan | Floating | occ=Any | cat=Any | cibil=850-900 | loan=None-None | ten=None-None | **7.15%** (women=7.1 green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: UCO Home | Term Loan | Floating | occ=Any | label=825 - 849 | cibil~825-849 | cond=None | **7.25%** [Final rate]
- mst R707 (OFF-1056): UCO Home | Term Loan | Floating | occ=Any | cat=Any | cibil=825-849 | loan=None-None | ten=None-None | **7.25%** (women=7.2 green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: UCO Home | Term Loan | Floating | occ=Any | label=800 - 824 | cibil~800-824 | cond=None | **7.35%** [Final rate]
- mst R708 (OFF-1057): UCO Home | Term Loan | Floating | occ=Any | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **7.35%** (women=7.3 green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R28: UCO Home | Term Loan | Floating | occ=Any | label=750 - 799 | cibil~750-799 | cond=None | **7.55%** [Final rate]
- mst R709 (OFF-1058): UCO Home | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.55%** (women=7.5 green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R29: UCO Home | Term Loan | Floating | occ=Any | label=700 - 749 | cibil~700-749 | cond=None | **7.85%** [Final rate]
- mst R710 (OFF-1059): UCO Home | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **7.85%** (women=7.8 green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R30: UCO Home | Term Loan | Floating | occ=Any | label=650 - 699 | cibil~650-699 | cond=None | **8.85%** [Final rate]
- mst R711 (OFF-1060): UCO Home | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **8.85%** (women=8.8 green=None ins=None insFlag=No)

#### 7. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R31: UCO Home | Term Loan | Floating | occ=Any | label=600 - 649 | cibil~600-649 | cond=None | **9.25%** [Final rate]
- mst R712 (OFF-1061): UCO Home | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **9.25%** (women=9.2 green=None ins=None insFlag=No)

#### 8. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R32: UCO Home | Term Loan | Floating | occ=Any | label=0-1 or <300 | cibil~— | cond=None | **8.35%** [Final rate]
- mst R713 (OFF-1062): UCO Home | Term Loan | Floating | occ=Any | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **8.35%** (women=8.3 green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R39: UCO Top Up Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=850+ | cibil~850-900 | cond=None | **8.15%** [Final rate]
- mst R714 (OFF-1063): UCO Top Up Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=850-900 | loan=None-None | ten=None-None | **8.15%** (women=None green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R40: UCO Top Up Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=825 - 849 | cibil~825-849 | cond=None | **8.5%** [Final rate]
- mst R715 (OFF-1064): UCO Top Up Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=825-849 | loan=None-None | ten=None-None | **8.5%** (women=None green=None ins=None insFlag=No)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R41: UCO Top Up Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800 - 824 | cibil~800-824 | cond=None | **8.75%** [Final rate]
- mst R716 (OFF-1065): UCO Top Up Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-824 | loan=None-None | ten=None-None | **8.75%** (women=None green=None ins=None insFlag=No)

#### 12. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R42: UCO Top Up Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **9.1%** [Final rate]
- mst R717 (OFF-1066): UCO Top Up Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **9.1%** (women=None green=None ins=None insFlag=No)

#### 13. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R43: UCO Top Up Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **9.25%** [Final rate]
- mst R718 (OFF-1067): UCO Top Up Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **9.25%** (women=None green=None ins=None insFlag=No)

#### 14. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R44: UCO Top Up Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **10.75%** [Final rate]
- mst R719 (OFF-1068): UCO Top Up Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **10.75%** (women=None green=None ins=None insFlag=No)

---

## Union Bank of India

- Sheet: `Union Bank of India`
- Source Final/ROI lines: **32**
- Master Offers rows: **32**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[7.15, 7.35, 7.4, 7.6, 7.75, 7.85, 8.0, 8.1, 8.25, 8.35, 8.85, 9.1, 9.35, 9.6, 11.4, 12.4, 12.65]`
- Master unique `roi` (%): `[7.15, 7.35, 7.4, 7.6, 7.75, 7.85, 8.0, 8.1, 8.25, 8.35, 8.85, 9.1, 9.35, 9.6, 11.4, 12.4, 12.65]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R22: UNION HOME | Term Loan | Floating | occ=Salaried | label=800+ | cibil~800-900 | cond=None | **7.15%** [Final rate]
- mst R205 (OFF-348): Union Home | Term Loan | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.15%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: UNION HOME | Term Loan | Floating | occ=Salaried | label=750 - 799 | cibil~750-799 | cond=None | **7.35%** [Final rate]
- mst R206 (OFF-349): Union Home | Term Loan | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.35%** (women=None green=7.25 ins=7.3 insFlag=Yes)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: UNION HOME | Term Loan | Floating | occ=Salaried | label=700 - 749 | cibil~700-749 | cond=None | **7.75%** [Final rate]
- mst R207 (OFF-350): Union Home | Term Loan | Floating | occ=Salaried | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **7.75%** (women=7.7 green=7.65 ins=7.7 insFlag=Yes)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: UNION HOME | Term Loan | Floating | occ=Salaried | label=680 - 699 | cibil~680-699 | cond=None | **8.0%** [Final rate]
- mst R208 (OFF-351): Union Home | Term Loan | Floating | occ=Salaried | cat=Any | cibil=680-699 | loan=None-None | ten=None-None | **8.0%** (women=7.95 green=7.9 ins=7.95 insFlag=Yes)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: UNION HOME | Term Loan | Floating | occ=Salaried | label=650 - 679 | cibil~650-679 | cond=None | **8.85%** [Final rate]
- mst R209 (OFF-352): Union Home | Term Loan | Floating | occ=Salaried | cat=Any | cibil=650-679 | loan=None-None | ten=None-None | **8.85%** (women=None green=8.75 ins=8.8 insFlag=Yes)

#### 6. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: UNION HOME | Term Loan | Floating | occ=Salaried | label=600 - 649 | cibil~600-649 | cond=None | **9.35%** [Final rate]
- mst R210 (OFF-353): Union Home | Term Loan | Floating | occ=Salaried | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **9.35%** (women=None green=9.25 ins=9.3 insFlag=Yes)

#### 7. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R28: UNION HOME | Term Loan | Floating | occ=Salaried | label=-1 & 1 - 5 | cibil~-1-0 | cond=None | **7.35%** [Final rate]
- mst R211 (OFF-354): Union Home | Term Loan | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **7.35%** (women=None green=7.25 ins=7.3 insFlag=Yes)

#### 8. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R29: UNION HOME | Term Loan | Floating | occ=Salaried | label=750+ | cibil~750-900 | cond=None | **7.15%** [Final rate]
- mst R212 (OFF-355): Union Home | Term Loan | Floating | occ=Salaried | cat=Central/State/PSU employees and Pensioners | cibil=750-900 | loan=None-None | ten=None-None | **7.15%** (women=None green=None ins=None insFlag=No)

#### 9. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R32: UNION HOME | Term Loan | Floating | occ=Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.15%** [Final rate]
- mst R213 (OFF-356): Union Home | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.15%** (women=None green=None ins=None insFlag=No)

#### 10. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R33: UNION HOME | Term Loan | Floating | occ=Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.35%** [Final rate]
- mst R214 (OFF-357): Union Home | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.35%** (women=None green=7.25 ins=7.3 insFlag=Yes)

#### 11. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R34: UNION HOME | Term Loan | Floating | occ=Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **7.85%** [Final rate]
- mst R215 (OFF-358): Union Home | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **7.85%** (women=7.8 green=7.75 ins=7.8 insFlag=Yes)

#### 12. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R35: UNION HOME | Term Loan | Floating | occ=Self-Employed | label=680 - 699 | cibil~680-699 | cond=None | **8.1%** [Final rate]
- mst R216 (OFF-359): Union Home | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=680-699 | loan=None-None | ten=None-None | **8.1%** (women=8.05 green=8.0 ins=8.05 insFlag=Yes)

#### 13. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R36: UNION HOME | Term Loan | Floating | occ=Self-Employed | label=650 - 679 | cibil~650-679 | cond=None | **8.85%** [Final rate]
- mst R217 (OFF-360): Union Home | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=650-679 | loan=None-None | ten=None-None | **8.85%** (women=None green=8.75 ins=8.8 insFlag=Yes)

#### 14. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R37: UNION HOME | Term Loan | Floating | occ=Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **9.35%** [Final rate]
- mst R218 (OFF-361): Union Home | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **9.35%** (women=None green=9.25 ins=9.3 insFlag=Yes)

#### 15. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R38: UNION HOME | Term Loan | Floating | occ=Self-Employed | label=-1 & 1 - 5 | cibil~-1-0 | cond=None | **7.35%** [Final rate]
- mst R219 (OFF-362): Union Home | Term Loan | Floating | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **7.35%** (women=None green=7.25 ins=7.3 insFlag=Yes)

#### 16. [OK] Δ=0.0%  score=18 (rate, rate_type, occupation, scheme)
- src R72: UNION HOME-SMART SAVE SCHEME | Overdraft | Fixed | occ=Self-Employed | label=Up to Rs.30 Lakh | cibil~— | cond=None | **11.4%** [ROI]
- mst R234 (OFF-377): Union Home | Term Loan | Fixed | occ=Any | cat=Any | cibil=None-None | loan=1-3000000 | ten=None-None | **11.4%** (women=None green=None ins=None insFlag=No)

#### 17. [OK] Δ=0.0%  score=18 (rate, rate_type, occupation, scheme)
- src R73: UNION HOME-SMART SAVE SCHEME | Overdraft | Fixed | occ=Self-Employed | label=Above Rs.30 Lakh to Rs.50.00 Lakh | cibil~— | cond=None | **12.4%** [ROI]
- mst R235 (OFF-378): Union Home | Term Loan | Fixed | occ=Any | cat=Any | cibil=None-None | loan=3000001-5000000 | ten=None-None | **12.4%** (women=None green=None ins=None insFlag=No)

#### 18. [OK] Δ=0.0%  score=18 (rate, rate_type, occupation, scheme)
- src R74: UNION HOME-SMART SAVE SCHEME | Overdraft | Fixed | occ=Self-Employed | label=Above Rs.50 Lakh to Rs.200 Lakh | cibil~— | cond=None | **12.65%** [ROI]
- mst R236 (OFF-379): Union Home | Term Loan | Fixed | occ=Any | cat=Any | cibil=None-None | loan=5000001-20000000 | ten=None-None | **12.65%** (women=None green=None ins=None insFlag=No)

#### 19. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R45: UNION HOME-SMART SAVE SCHEME | Overdraft | Floating | occ=Salaried | label=800+ | cibil~800-900 | cond=None | **7.4%** [Final rate]
- mst R220 (OFF-363): Union Home - Smart Save | Overdraft | Floating | occ=Salaried | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.4%** (women=None green=None ins=None insFlag=No)

#### 20. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R46: UNION HOME-SMART SAVE SCHEME | Overdraft | Floating | occ=Salaried | label=750 - 799 | cibil~750-799 | cond=None | **7.6%** [Final rate]
- mst R221 (OFF-364): Union Home - Smart Save | Overdraft | Floating | occ=Salaried | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=7.55 insFlag=Yes)

#### 21. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R47: UNION HOME-SMART SAVE SCHEME | Overdraft | Floating | occ=Salaried | label=700 - 749 | cibil~700-749 | cond=None | **8.0%** [Final rate]
- mst R222 (OFF-365): Union Home - Smart Save | Overdraft | Floating | occ=Salaried | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **8.0%** (women=7.95 green=None ins=7.95 insFlag=Yes)

#### 22. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R48: UNION HOME-SMART SAVE SCHEME | Overdraft | Floating | occ=Salaried | label=680 - 699 | cibil~680-699 | cond=None | **8.25%** [Final rate]
- mst R223 (OFF-366): Union Home - Smart Save | Overdraft | Floating | occ=Salaried | cat=Any | cibil=680-699 | loan=None-None | ten=None-None | **8.25%** (women=8.2 green=None ins=8.2 insFlag=Yes)

#### 23. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R49: UNION HOME-SMART SAVE SCHEME | Overdraft | Floating | occ=Salaried | label=650 - 679 | cibil~650-679 | cond=None | **9.1%** [Final rate]
- mst R224 (OFF-367): Union Home - Smart Save | Overdraft | Floating | occ=Salaried | cat=Any | cibil=650-679 | loan=None-None | ten=None-None | **9.1%** (women=None green=None ins=9.05 insFlag=Yes)

#### 24. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R50: UNION HOME-SMART SAVE SCHEME | Overdraft | Floating | occ=Salaried | label=600 - 649 | cibil~600-649 | cond=None | **9.6%** [Final rate]
- mst R225 (OFF-368): Union Home - Smart Save | Overdraft | Floating | occ=Salaried | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **9.6%** (women=None green=None ins=9.55 insFlag=Yes)

#### 25. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R51: UNION HOME-SMART SAVE SCHEME | Overdraft | Floating | occ=Salaried | label=-1 & 1 - 5 | cibil~-1-0 | cond=None | **7.6%** [Final rate]
- mst R226 (OFF-369): Union Home - Smart Save | Overdraft | Floating | occ=Salaried | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=7.55 insFlag=Yes)

#### 26. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R54: UNION HOME-SMART SAVE SCHEME | Overdraft | Floating | occ=Self-Employed | label=800+ | cibil~800-900 | cond=None | **7.4%** [Final rate]
- mst R227 (OFF-370): Union Home - Smart Save | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **7.4%** (women=None green=None ins=None insFlag=No)

#### 27. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R55: UNION HOME-SMART SAVE SCHEME | Overdraft | Floating | occ=Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **7.6%** [Final rate]
- mst R228 (OFF-371): Union Home - Smart Save | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=7.55 insFlag=Yes)

#### 28. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R56: UNION HOME-SMART SAVE SCHEME | Overdraft | Floating | occ=Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **8.1%** [Final rate]
- mst R229 (OFF-372): Union Home - Smart Save | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **8.1%** (women=8.05 green=None ins=8.05 insFlag=Yes)

#### 29. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R57: UNION HOME-SMART SAVE SCHEME | Overdraft | Floating | occ=Self-Employed | label=680 - 699 | cibil~680-699 | cond=None | **8.35%** [Final rate]
- mst R230 (OFF-373): Union Home - Smart Save | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=680-699 | loan=None-None | ten=None-None | **8.35%** (women=8.3 green=None ins=8.3 insFlag=Yes)

#### 30. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R58: UNION HOME-SMART SAVE SCHEME | Overdraft | Floating | occ=Self-Employed | label=650 - 679 | cibil~650-679 | cond=None | **9.1%** [Final rate]
- mst R231 (OFF-374): Union Home - Smart Save | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=650-679 | loan=None-None | ten=None-None | **9.1%** (women=None green=None ins=9.05 insFlag=Yes)

#### 31. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R59: UNION HOME-SMART SAVE SCHEME | Overdraft | Floating | occ=Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **9.6%** [Final rate]
- mst R232 (OFF-375): Union Home - Smart Save | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **9.6%** (women=None green=None ins=9.55 insFlag=Yes)

#### 32. [OK] Δ=0.0%  score=23 (rate, rate_type, facility, occupation, scheme, cibil:3)
- src R60: UNION HOME-SMART SAVE SCHEME | Overdraft | Floating | occ=Self-Employed | label=-1 & 1 - 5 | cibil~-1-0 | cond=None | **7.6%** [Final rate]
- mst R233 (OFF-376): Union Home - Smart Save | Overdraft | Floating | occ=Self-Employed | cat=Any | cibil=-1-0 | loan=None-None | ten=None-None | **7.6%** (women=None green=None ins=7.55 insFlag=Yes)

---

## Yes Bank

- Sheet: `Yes Bank`
- Source Final/ROI lines: **6**
- Master Offers rows: **6**
- Verdict: `PERFECT_LINE_MATCH`
- Source unique rates (%): `[8.65, 8.85, 9.2, 9.4, 9.65, 10.05]`
- Master unique `roi` (%): `[8.65, 8.85, 9.2, 9.4, 9.65, 10.05]`

### Line matches

#### 1. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R23: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=800+ | cibil~800-900 | cond=None | **8.65%** [Final rate]
- mst R1118 (OFF-1474): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=800-900 | loan=None-None | ten=None-None | **8.65%** (women=None green=None ins=None insFlag=No)

#### 2. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R24: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=750 - 799 | cibil~750-799 | cond=None | **8.85%** [Final rate]
- mst R1119 (OFF-1475): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=750-799 | loan=None-None | ten=None-None | **8.85%** (women=None green=None ins=None insFlag=No)

#### 3. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R25: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=700 - 749 | cibil~700-749 | cond=None | **9.2%** [Final rate]
- mst R1120 (OFF-1476): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=700-749 | loan=None-None | ten=None-None | **9.2%** (women=None green=None ins=None insFlag=No)

#### 4. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R26: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=650 - 699 | cibil~650-699 | cond=None | **9.4%** [Final rate]
- mst R1121 (OFF-1477): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=650-699 | loan=None-None | ten=None-None | **9.4%** (women=None green=None ins=None insFlag=No)

#### 5. [OK] Δ=0.0%  score=25 (rate, rate_type, facility, occupation, scheme, cibil:5)
- src R27: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=600 - 649 | cibil~600-649 | cond=None | **9.65%** [Final rate]
- mst R1122 (OFF-1478): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=600-649 | loan=None-None | ten=None-None | **9.65%** (women=None green=None ins=None insFlag=No)

#### 6. [OK] Δ=0.0%  score=20 (rate, rate_type, facility, occupation, scheme)
- src R28: Home Loan | Term Loan | Floating | occ=Salaried & Self-Employed | label=< 600 | cibil~300-None | cond=None | **10.05%** [Final rate]
- mst R1123 (OFF-1479): Home Loan | Term Loan | Floating | occ=Any | cat=Any | cibil=300-599 | loan=None-None | ten=None-None | **10.05%** (women=None green=None ins=None insFlag=No)

---


# Mismatch deep-dive

## Nainital Bank — side-by-side (source Final vs nearest master)

Master roi is systematically ~+0.10% vs source Final rate; insurance_roi is systematically ~+0.05% vs source Final rate. Source note says '0.05 insurance concession' — master appears to encode a different base than this source file.

| Src row | Label | Remarks | Source Final % | Master roi % | Δ roi | Master ins_roi % | Δ ins | Master cibil | Master cat |
|---:|---|---|---:|---:|---:|---:|---:|---|---|
| 23 | 800+ | Govt, emplopyee | 7.1 | 7.2 | **0.1** | 7.15 | 0.05 | 800-900 | Central/State/PSU employees and Pensioners |
| 24 | 800+ | Others | 7.2 | 7.3 | **0.1** | 7.25 | 0.05 | 800-900 | Any |
| 25 | 750 - 799 | — | 7.4 | 7.5 | **0.1** | 7.45 | 0.05 | 750-799 | Any |
| 26 | 701 - 749 | — | 7.75 | 7.85 | **0.1** | 7.8 | 0.05 | 701-749 | Any |
| 27 | 675 - 700 | — | 8.4 | 8.5 | **0.1** | 8.45 | 0.05 | 675-700 | Any |
| 28 | 650 - 674 | — | 8.8 | 8.9 | **0.1** | 8.85 | 0.05 | 650-674 | Any |
| 29 | < 650 | — | 9.95 | 10.05 | **0.1** | 10.0 | 0.05 | 300-649 | Any |
| 30 | NTC | — | 7.75 | 7.85 | **0.1** | 7.8 | 0.05 | 701-749 | Any |
| 40 | 800+ | Govt, emplopyee | 9.1 | 9.2 | **0.1** | 9.15 | 0.05 | 800-900 | Central/State/PSU employees and Pensioners |
| 41 | 800+ | — | 9.2 | 9.3 | **0.1** | 9.25 | 0.05 | 800-900 | Any |
| 42 | 750 - 799 | — | 9.4 | 9.3 | **-0.1** | 9.25 | -0.15 | 800-900 | Any |
| 43 | 701 - 749 | — | 9.75 | 9.85 | **0.1** | 9.8 | 0.05 | 701-749 | Any |
| 44 | 675 - 700 | — | 10.4 | 10.5 | **0.1** | 10.45 | 0.05 | 675-700 | Any |
| 45 | 650 - 674 | — | 10.8 | 10.9 | **0.1** | 10.85 | 0.05 | 650-674 | Any |
| 46 | < 650 | — | 11.95 | 12.05 | **0.1** | 12.0 | 0.05 | 300-649 | Any |
| 47 | NTC | — | 9.75 | 9.85 | **0.1** | 9.8 | 0.05 | 701-749 | Any |

## Bank of Baroda — master extras not in source Final set

All source Final rates are present in master. Extras are mostly Fixed Top-up rates and insurance-adjusted (+0.05) floating variants not listed as separate Final rates in the source sheet (source notes a 0.05% risk premium without insurance).

- Extra rows: **69**
- By rate type: `{'Fixed': 56, 'Floating': 13}`
- By insurance flag: `{'No': 19, 'Yes': 50}`
- By scheme: `{'Baroda Home Loan': 2, 'Baroda Max Savings Home Loan': 1, 'Baroda Top Up Loan': 66}`
- Unique extra rates: `[7.747, 8.05, 8.25, 8.4, 8.597, 8.6, 8.753, 8.8, 8.85, 9.35, 9.603, 9.75, 10.0, 10.1, 10.15, 10.25, 10.3, 10.35, 10.4, 10.45, 10.5, 10.55, 10.65, 10.7, 10.75, 10.8, 10.9, 11.05]`

Sample extra master rows:

- R256: Baroda Home Loan | Fixed | Term Loan | occ=Salaried | cibil=-1-0 | roi=7.747% | ins=No ins_roi=None
- R284: Baroda Max Savings Home Loan | Floating | Overdraft | occ=Any | cibil=625-649 | roi=8.753% | ins=Yes ins_roi=8.803
- R327: Baroda Top Up Loan | Floating | Term Loan | occ=Any | cibil=825-900 | roi=8.05% | ins=Yes ins_roi=8.1
- R329: Baroda Top Up Loan | Floating | Term Loan | occ=Any | cibil=751-799 | roi=8.25% | ins=Yes ins_roi=8.3
- R334: Baroda Top Up Loan | Floating | Term Loan | occ=Any | cibil=625-649 | roi=9.35% | ins=Yes ins_roi=9.4
- R336: Baroda Top Up Loan | Floating | Term Loan | occ=Any | cibil=-1-0 | roi=8.6% | ins=Yes ins_roi=8.65
- R337: Baroda Top Up Loan | Fixed | Term Loan | occ=Salaried | cibil=825-900 | roi=9.75% | ins=No ins_roi=None
- R339: Baroda Top Up Loan | Fixed | Term Loan | occ=Salaried | cibil=751-799 | roi=10.0% | ins=No ins_roi=None
- R340: Baroda Top Up Loan | Fixed | Term Loan | occ=Salaried | cibil=726-750 | roi=10.15% | ins=No ins_roi=None
- R341: Baroda Top Up Loan | Fixed | Term Loan | occ=Salaried | cibil=701-725 | roi=10.25% | ins=No ins_roi=None
- R342: Baroda Top Up Loan | Fixed | Term Loan | occ=Salaried | cibil=676-700 | roi=10.45% | ins=No ins_roi=None
- R343: Baroda Top Up Loan | Fixed | Term Loan | occ=Salaried | cibil=650-675 | roi=10.5% | ins=No ins_roi=None
- R344: Baroda Top Up Loan | Fixed | Term Loan | occ=Salaried | cibil=625-649 | roi=10.65% | ins=No ins_roi=None
- R345: Baroda Top Up Loan | Fixed | Term Loan | occ=Salaried | cibil=600-624 | roi=10.8% | ins=No ins_roi=None
- R346: Baroda Top Up Loan | Fixed | Term Loan | occ=Salaried | cibil=-1-0 | roi=8.597% | ins=No ins_roi=None
- R349: Baroda Top Up Loan | Fixed | Term Loan | occ=Self-Employed | cibil=751-799 | roi=10.0% | ins=No ins_roi=None
- R350: Baroda Top Up Loan | Fixed | Term Loan | occ=Self-Employed | cibil=726-750 | roi=10.1% | ins=No ins_roi=None
- R351: Baroda Top Up Loan | Fixed | Term Loan | occ=Self-Employed | cibil=701-725 | roi=10.15% | ins=No ins_roi=None
- R352: Baroda Top Up Loan | Fixed | Term Loan | occ=Self-Employed | cibil=676-700 | roi=10.3% | ins=No ins_roi=None
- R353: Baroda Top Up Loan | Fixed | Term Loan | occ=Self-Employed | cibil=650-675 | roi=10.4% | ins=No ins_roi=None
- R354: Baroda Top Up Loan | Fixed | Term Loan | occ=Self-Employed | cibil=625-649 | roi=10.65% | ins=No ins_roi=None
- R355: Baroda Top Up Loan | Fixed | Term Loan | occ=Self-Employed | cibil=600-624 | roi=10.8% | ins=No ins_roi=None
- R356: Baroda Top Up Loan | Fixed | Term Loan | occ=Self-Employed | cibil=-1-0 | roi=8.6% | ins=No ins_roi=None
- R357: Baroda Top Up Loan | Floating | Overdraft | occ=Any | cibil=825-900 | roi=8.05% | ins=Yes ins_roi=8.1
- R359: Baroda Top Up Loan | Floating | Overdraft | occ=Any | cibil=751-799 | roi=8.25% | ins=Yes ins_roi=8.3

## Bank of Maharashtra

Green floating Final rates from source appear in master green_roi (main roi stays non-green). Fixed MCLR rates 11.5/12.5/12.7 exist in source Fixed section (cols MCLR/Spread/ROI) and in master roi — line matcher under-counted fixed header 'ROI' in some paths; values exist on both sides.


## Indian Overseas Bank

Green floating Final rates from IOB HARIT SUBHAGRUHA live in master green_roi. Fixed 11% and 12% exist in source Fixed block (rows 78–79) and in master as Fixed roi — all source floating Final rates matched.

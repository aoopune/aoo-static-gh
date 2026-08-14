# Processing Fees Audit (post-cleanup)

Compares **only** your human sheet vs master — no Offers workbook.

- Human source: `data/Home Loans.xlsx` → **Processing fees**
- Master: `data/HOME_LOANS_COMPARE_v1.xlsx` → **Bank_charges** (`origin=Offers.processing`)

**Cleanup completed 2026-08-14.** See `PROCESSING_FEES_CLEANUP_STATUS.md` for problem-by-problem summary.

## Overall

| Metric | Count |
|---|---:|
| Banks in reference sheet | 33 |
| Banks with processing rows in master | 33 |
| Processing rows in master | 212 |
| Total Bank_charges rows | 1398 |
| Processing rows with CIBIL still set | 0 |
| Exact duplicate dedupe keys | 0 |
| Banks PASS (single row) | 12 |
| Banks PASS (multi-row, amounts OK) | 21 |
| Banks FAIL | 0 |

## Per-bank summary

| Bank | Verdict | Master rows | CIBIL rows | Ref issues |
|---|---|---:|---:|---:|
| Axis Bank | PASS (multi) | 2 | 0 | 0 |
| Bandhan Bank | PASS | 1 | 0 | 0 |
| Bank of Baroda | PASS (multi) | 24 | 0 | 0 |
| Bank of India | PASS (multi) | 32 | 0 | 0 |
| Bank of Maharashtra | PASS (multi) | 9 | 0 | 0 |
| CSB Bank | PASS | 1 | 0 | 0 |
| Canara Bank | PASS (multi) | 5 | 0 | 0 |
| Central Bank of India | PASS (multi) | 3 | 0 | 0 |
| City Union Bank | PASS (multi) | 6 | 0 | 0 |
| DCB Bank | PASS | 1 | 0 | 0 |
| Dhanlaxmi Bank | PASS | 1 | 0 | 0 |
| Federal Bank | PASS | 1 | 0 | 0 |
| HDFC Bank | PASS | 1 | 0 | 0 |
| ICICI Bank | PASS (multi) | 4 | 0 | 0 |
| IDBI Bank | PASS (multi) | 12 | 0 | 0 |
| IDFC FIRST Bank | PASS | 1 | 0 | 0 |
| Indian Bank | PASS (multi) | 6 | 0 | 0 |
| Indian Overseas Bank | PASS (multi) | 10 | 0 | 0 |
| IndusInd Bank | PASS (multi) | 2 | 0 | 0 |
| Jammu and Kashmir Bank | PASS | 1 | 0 | 0 |
| Karnataka Bank | PASS | 1 | 0 | 0 |
| Karur Vysya Bank | PASS (multi) | 6 | 0 | 0 |
| Kotak Mahindra Bank | PASS (multi) | 2 | 0 | 0 |
| Nainital Bank | PASS (multi) | 21 | 0 | 0 |
| Punjab & Sind Bank | PASS (multi) | 6 | 0 | 0 |
| Punjab National Bank | PASS (multi) | 30 | 0 | 0 |
| RBL Bank | PASS (multi) | 2 | 0 | 0 |
| South Indian Bank | PASS | 1 | 0 | 0 |
| State Bank of India | PASS (multi) | 8 | 0 | 0 |
| Tamilnad Mercantile Bank | PASS | 1 | 0 | 0 |
| UCO Bank | PASS (multi) | 2 | 0 | 0 |
| Union Bank of India | PASS (multi) | 8 | 0 | 0 |
| Yes Bank | PASS | 1 | 0 | 0 |

## Bank details

### Axis Bank — PASS_MULTI
- Master rows: 2
- Distinct percentages: [1.0]
- Distinct mins: ['₹10,000']
- Reference amounts match master.

### Bandhan Bank — PASS
- Master rows: 1
- Distinct percentages: [1.0]
- Reference amounts match master.

### Bank of Baroda — PASS_MULTI
- Master rows: 24
- Distinct percentages: [0.25, 0.35, 0.5]
- Distinct mins: ['₹5,000', '₹8,500']
- Distinct maxes: ['₹12,500', '₹15,000', '₹25,000']
- Reference amounts match master.

### Bank of India — PASS_MULTI
- Master rows: 32
- Distinct percentages: [0.2, 0.35]
- Distinct mins: ['₹2,000', '₹3,500']
- Distinct maxes: ['₹10,000', '₹30,000']
- Reference amounts match master.

### Bank of Maharashtra — PASS_MULTI
- Master rows: 9
- Distinct percentages: [0.25]
- Distinct maxes: ['₹25,000', '₹50,000']
- Reference amounts match master.

### CSB Bank — PASS
- Master rows: 1
- Distinct percentages: [0.6]
- Distinct mins: ['₹10,000']
- Reference amounts match master.

### Canara Bank — PASS_MULTI
- Master rows: 5
- Distinct percentages: [0.5]
- Distinct mins: ['₹1,500']
- Distinct maxes: ['₹10,000']
- Reference amounts match master.

### Central Bank of India — PASS_MULTI
- Master rows: 3
- Distinct percentages: [0.5]
- Distinct maxes: ['₹20,000']
- Reference amounts match master.

### City Union Bank — PASS_MULTI
- Master rows: 6
- Distinct percentages: [0.2, 0.25, 0.35]
- Reference amounts match master.

### DCB Bank — PASS
- Master rows: 1
- Distinct percentages: [2.0]
- Distinct mins: ['₹5,000']
- Reference amounts match master.

### Dhanlaxmi Bank — PASS
- Master rows: 1
- Distinct percentages: [1.0]
- Distinct mins: ['₹10,000']
- Reference amounts match master.

### Federal Bank — PASS
- Master rows: 1
- Distinct percentages: [0.5]
- Distinct mins: ['₹10,000']
- Reference amounts match master.

### HDFC Bank — PASS
- Master rows: 1
- Distinct percentages: [0.5]
- Distinct mins: ['₹4,000']
- Reference amounts match master.

### ICICI Bank — PASS_MULTI
- Master rows: 4
- Distinct percentages: [2.0]
- Reference amounts match master.

### IDBI Bank — PASS_MULTI
- Master rows: 12
- Reference amounts match master.

### IDFC FIRST Bank — PASS
- Master rows: 1
- Distinct percentages: [3.0]
- Reference amounts match master.

### Indian Bank — PASS_MULTI
- Master rows: 6
- Reference amounts match master.

### Indian Overseas Bank — PASS_MULTI
- Master rows: 10
- Distinct percentages: [0.5]
- Distinct maxes: ['₹20,000', '₹25,000']
- Reference amounts match master.

### IndusInd Bank — PASS_MULTI
- Master rows: 2
- Distinct percentages: [1.0]
- Reference amounts match master.

### Jammu and Kashmir Bank — PASS
- Master rows: 1
- Distinct percentages: [0.25]
- Distinct mins: ['₹2,000']
- Distinct maxes: ['₹50,000']
- Reference amounts match master.

### Karnataka Bank — PASS
- Master rows: 1
- Distinct percentages: [0.25]
- Reference amounts match master.

### Karur Vysya Bank — PASS_MULTI
- Master rows: 6
- Reference amounts match master.

### Kotak Mahindra Bank — PASS_MULTI
- Master rows: 2
- Distinct percentages: [2.0]
- Reference amounts match master.

### Nainital Bank — PASS_MULTI
- Master rows: 21
- Distinct percentages: [0.5]
- Reference amounts match master.

### Punjab & Sind Bank — PASS_MULTI
- Master rows: 6
- Distinct percentages: [0.0, 0.15, 0.25]
- Distinct mins: ['₹1,000']
- Distinct maxes: ['₹3,750', '₹12,500', '₹15,000']
- Reference amounts match master.

### Punjab National Bank — PASS_MULTI
- Master rows: 30
- Distinct percentages: [0.0, 0.35]
- Distinct mins: ['₹2,500']
- Distinct maxes: ['₹15,000']
- Reference amounts match master.

### RBL Bank — PASS_MULTI
- Master rows: 2
- Distinct percentages: [2.0]
- Distinct mins: ['₹15,000']
- Reference amounts match master.

### South Indian Bank — PASS
- Master rows: 1
- Distinct percentages: [0.5]
- Distinct mins: ['₹10,000']
- Distinct maxes: ['₹50,000']
- Reference amounts match master.

### State Bank of India — PASS_MULTI
- Master rows: 8
- Distinct percentages: [0.35]
- Distinct mins: ['₹5,000']
- Distinct maxes: ['₹15,000', '₹18,000']
- Reference amounts match master.

### Tamilnad Mercantile Bank — PASS
- Master rows: 1
- Distinct percentages: [0.5]
- Reference amounts match master.

### UCO Bank — PASS_MULTI
- Master rows: 2
- Distinct percentages: [0.5]
- Distinct mins: ['₹1,500']
- Distinct maxes: ['₹15,000']
- Reference amounts match master.

### Union Bank of India — PASS_MULTI
- Master rows: 8
- Distinct percentages: [0.5]
- Distinct maxes: ['₹15,000']
- Reference amounts match master.

### Yes Bank — PASS
- Master rows: 1
- Distinct percentages: [1.0]
- Distinct mins: ['₹10,000']
- Reference amounts match master.

Regenerate: `python3 scripts/audit_processing_fees_human.py`

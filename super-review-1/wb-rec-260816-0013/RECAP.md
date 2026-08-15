# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T18:43:33.349Z
format: workbooks-recording/2.2
duration_ms_active: 564971
duration_ms_waiting: 0
events: 180
pages: 1
markers: 0
assertions: 0
masked_inputs: 0
hosts: [localhost:8765]

## Pages

[p1] http://localhost:8765/pages/explore-banks.html — "Explore banks – Shroffin"
  headings: Explore guide, Explore tools, Get support, Explore banks., Loan inputs, Bank options, Filters, Loan amount, Guide, Tools, Company, Support, Connect, Disclaimer
  landmarks: navigation, main, banner, region, form, region, region, complementary, contentinfo, region, navigation, navigation, navigation, region, navigation, region, navigation
  actions: button "About Monthly income" -> getByRole("button", { name: "About Monthly income" }), a "Learn more" -> getByRole("link", { name: "Learn more" }), button "About Property agreement value" -> getByRole("button", { name: "About Property agreement value" }), a "Learn more" -> getByRole("link", { name: "Learn more" }), button "About Age" -> getByRole("button", { name: "About Age" }), a "Learn more" -> getByRole("link", { name: "Learn more" }), button "About CIBIL score" -> getByRole("button", { name: "About CIBIL score" }), button "About Occupation" -> getByRole("button", { name: "About Occupation" }), a "Learn more" -> getByRole("link", { name: "Learn more" }), button "Salaried" -> getByRole("button", { name: "Salaried" }), button "Self-employed" -> getByRole("button", { name: "Self-employed" }), button "About Purpose" -> getByRole("button", { name: "About Purpose" }), button "Regular" -> getByRole("button", { name: "Regular" }), button "Top-up" -> getByRole("button", { name: "Top-up" }), button "About Existing EMIs" -> getByRole("button", { name: "About Existing EMIs" })
  forms: "Loan inputs" [text:Monthly income*
                        
                      
                      Sets how much loan banks can offer you. Use take-home, not CTC.
                      Learn more
                  (required), text:Property agreement value*
                        
                      
                      Sets the ceiling on the loan against this house. Use the sale agreement price.
                      Lea (required), text:Age*
                          
                        
                        Sets the longest tenure banks will allow.
                        Learn more
                      
                    (required), text:CIBIL score*
                          
                        
                        Changes the rates banks show you. (required), text:Existing EMIs
                          
                        
                        Lowers how much new loan you can get.
                        Learn more
                      
              , select:Share of income for EMIs /FOIR
                          
                        
                        Cap on EMIs versus income. Leave at 55% unless you know another figure.
                     , text:Tenure*
                          
                        
                        Years to repay. Changes your EMI.
                        Learn more
                      
                    
    (required), text:Co-applicant income
                                
                              
                              Added to yours for eligibility.
                              Learn more
             , text:Co-applicant EMIs
                                
                              
                              Lowers eligibility the same way yours do.
                              Learn more
     ]
  screenshot: screenshots/0000.png

## Timeline

00:00 idle 2.2s
00:02 click getByRole("tab", { name: "Charges" })
00:02 idle 5.1s
00:07 click getByRole("button", { name: "Show how property check charges for State Bank of India was calculated" })
00:09 click locator("#hlc-drawer-backdrop")
00:09 idle 2.3s
00:13 click getByRole("button", { name: "Show how government charges for HDFC Bank was calculated" })
00:14 idle 10s
00:24 idle 7s
00:30 click locator("#hlc-drawer-backdrop")
00:31 click locator("#hlc-th-governmentCharges")
00:32 click getByRole("button", { name: "Open note for mark ^" })
00:32 click locator("details#hlc-charge-note-government-charges > summary")
00:35 click locator("details#hlc-charge-note-government-charges > summary > span > svg")
00:36 click locator("details#hlc-charge-note-government-charges > summary > span > svg")
00:37 idle 9.1s
00:46 idle 2.5s
00:48 click getByRole("button", { name: "Show how government charges for Yes Bank was calculated" })
00:48 idle 4.6s
00:53 click locator("div#hlc-drawer-body > div:nth-of-type(1) > div:nth-of-type(2) > p > span:nth-of-type(2)")
00:53 click locator("div#hlc-drawer-body > div:nth-of-type(1) > div:nth-of-type(3)")
00:54 click locator("div#hlc-drawer-body > div:nth-of-type(1) > div:nth-of-type(4) > p:nth-of-type(1)")
00:55 idle 9.2s
01:04 idle 8s
01:12 click locator("div#hlc-drawer-body > div:nth-of-type(2) > strong")
01:12 idle 3.1s
01:15 click locator("#hlc-drawer-backdrop")
01:15 idle 8.4s
01:24 idle 10s
01:34 idle 6.7s
01:40 click getByRole("tab", { name: "Other charges" })
01:41 idle 9.2s
01:50 idle 8s
01:58 idle 10s
02:08 idle 8s
02:16 idle 8s
02:24 idle 10s
02:34 idle 2.8s
02:37 idle 3.7s
02:42 idle 8s
02:50 idle 10s
03:00 click getByRole("combobox", { name: "Rate change type" })
03:00 idle 7.8s
03:09 fill getByRole("combobox", { name: "Rate change type" }) = "repricing"
03:09 idle 2.5s
03:11 click getByRole("combobox", { name: "Rate change type" })
03:13 fill getByRole("combobox", { name: "Rate change type" }) = "benchmark"
03:14 click getByRole("combobox", { name: "Rate change type" })
03:16 fill getByRole("combobox", { name: "Rate change type" }) = "typeSwitch"
03:16 idle 7.5s
03:24 idle 4.6s
03:28 click getByRole("combobox", { name: "Rate change type" })
03:29 fill getByRole("combobox", { name: "Rate change type" }) = "repricing"
03:30 idle 8.1s
03:38 idle 8s
03:46 idle 10s
03:56 idle 7.1s
04:03 click getByRole("combobox", { name: "Rate change type" })
04:04 fill getByRole("combobox", { name: "Rate change type" }) = "benchmark"
04:05 idle 7.3s
04:12 idle 8s
04:20 idle 8s
04:28 idle 8s
04:36 idle 10s
04:46 idle 8s
04:54 idle 8s
05:02 idle 10s
05:12 idle 8s
05:20 idle 8s
05:28 idle 10s
05:38 idle 8s
05:46 idle 8s
05:54 idle 10s
06:04 idle 9.6s
06:13 click getByRole("button", { name: "Open note for mark °" })
06:13 click locator("details#hlc-charge-note-rate-change-charge > summary")
06:16 click locator("details#hlc-charge-note-prepayment-charge > summary > span")
06:16 idle 2.8s
06:20 idle 3s
06:23 idle 2.5s
06:26 idle 8s
06:34 idle 7s
06:42 idle 8s
06:50 idle 8s
06:58 idle 8s
07:06 idle 8s
07:14 idle 10s
07:24 click locator("details#hlc-charge-note-rate-change-charge > summary > span > svg")
07:25 idle 8.6s
07:34 idle 4.9s
07:41 idle 3.2s
07:55 idle 3.4s
07:58 click getByRole("button", { name: "Open note for mark ‡" })
07:58 click locator("details#hlc-charge-note-overdue-charge > summary")
08:00 idle 7.9s
08:09 click locator("tbody#hlc-compare-body > tr:nth-of-type(30) > td:nth-of-type(4) > span > span")
08:10 idle 2.9s
08:12 click locator("tbody#hlc-compare-body > tr:nth-of-type(29) > td:nth-of-type(4) > span > span")
08:14 click locator("tbody#hlc-compare-body > tr:nth-of-type(29) > td:nth-of-type(4) > span > span")
08:15 click locator("tbody#hlc-compare-body > tr:nth-of-type(30) > td:nth-of-type(4) > span > span")
08:15 idle 8.8s
08:24 idle 10s
08:34 idle 10s
08:44 idle 10s
08:54 idle 8s
09:02 idle 2.3s
09:04 idle 3.9s
09:13 click locator("tbody#hlc-compare-body > tr:nth-of-type(15) > td:nth-of-type(4) > span > span")
09:13 idle 8.4s

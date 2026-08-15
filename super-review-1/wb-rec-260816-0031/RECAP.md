# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T19:01:37.835Z
format: workbooks-recording/2.2
duration_ms_active: 395148
duration_ms_waiting: 0
events: 130
pages: 1
markers: 0
assertions: 0
masked_inputs: 0
hosts: [localhost:8765]

## Pages

[p1] http://localhost:8765/pages/explore-banks.html — "Explore banks – Shroffin"
  headings: Explore guide, Explore tools, Get support, Explore banks., Loan inputs, Bank options, Filters, Notes, Government charges, Guide, Tools, Company, Support, Connect, Disclaimer
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

00:01 idle 3.4s
00:04 click getByRole("button", { name: "Open note for mark °" })
00:07 idle 2.3s
00:10 click locator("details#hlc-charge-note-rate-change-charge > summary > span > svg")
00:12 click locator("details#hlc-charge-note-overdue-charge > summary > span > svg")
00:13 click locator("details#hlc-charge-note-emi-bounce-charge > summary > span > svg")
00:14 idle 4.7s
00:18 click locator("details#hlc-charge-note-rate-change-charge > summary > span > svg > path")
00:19 idle 9.2s
00:28 idle 10s
00:38 idle 8s
00:46 idle 8s
00:54 idle 8s
01:02 idle 10s
01:12 idle 8s
01:20 idle 5.2s
01:25 click locator("details#hlc-charge-note-rate-change-charge > summary > span > svg")
01:25 idle 8.7s
01:34 idle 5.8s
01:42 idle 8s
01:50 idle 8s
01:58 idle 9s
02:06 click locator("tbody#hlc-compare-body > tr:nth-of-type(33) > td:nth-of-type(1) > div > div > div:nth-of-type(2) > button > span:nth-of-type(2) > svg > path")
02:07 idle 3.2s
02:10 click locator("div#hlc-drawer-body > details:nth-of-type(3) > summary > span > span")
02:10 idle 3.1s
02:13 click locator("div#hlc-drawer-body > details:nth-of-type(5) > summary > span > span")
02:14 click locator("div#hlc-drawer-body > details:nth-of-type(5) > div > div > details:nth-of-type(1) > summary > span > span")
02:15 idle 6.6s
02:21 click locator("div#hlc-drawer-body > details:nth-of-type(1) > summary > span > span")
02:22 idle 2s
02:23 click locator("div#hlc-drawer-body > details:nth-of-type(3) > summary > span > span")
02:24 idle 7.8s
02:31 click locator("#hlc-drawer-backdrop")
02:32 idle 8.2s
02:40 idle 2.3s
02:43 idle 2.3s
02:51 click getByRole("button", { name: "Top-up" })
02:51 idle 3.4s
02:56 idle 2.1s
03:00 idle 2.1s
03:02 idle 2.6s
03:04 idle 3.3s
03:08 idle 7s
03:16 idle 3.1s
03:20 idle 3.4s
03:24 idle 8s
03:32 idle 8s
03:40 idle 10s
03:50 idle 10s
04:00 idle 8s
04:08 idle 8s
04:16 idle 8s
04:24 idle 8s
04:32 idle 8s
04:40 idle 8s
04:48 idle 5.8s
04:53 click locator("aside#hlc-filters-panel > div:nth-of-type(3) > fieldset:nth-of-type(2) > div > label:nth-of-type(1) > span")
04:53 click getByRole("checkbox", { name: "Women applicant" })
04:53 fill getByRole("checkbox", { name: "Women applicant" }) = "on"
04:54 idle 3.9s
04:58 click getByRole("button", { name: "Regular" })
04:58 idle 2.8s
05:02 idle 4.2s
05:06 idle 8s
05:14 idle 8s
05:22 idle 8s
05:30 idle 8s
05:38 idle 8s
05:46 idle 8s
05:54 idle 8s
06:02 idle 8s
06:10 idle 2.3s
06:12 idle 2.8s
06:18 idle 2.7s
06:21 idle 2.4s
06:23 idle 2.9s
06:26 idle 6.6s

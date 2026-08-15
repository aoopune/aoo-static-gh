# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T17:52:41.328Z
format: workbooks-recording/2.2
duration_ms_active: 545258
duration_ms_waiting: 0
events: 149
pages: 1
markers: 0
assertions: 0
masked_inputs: 0
hosts: [localhost:8765]

## Pages

[p1] http://localhost:8765/pages/explore-banks.html — "Explore banks – Shroffin"
  headings: Explore guide, Explore tools, Get support, Explore banks., Loan inputs, Bank options, Filters, Bank, Guide, Tools, Company, Support, Connect, Disclaimer
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
  screenshot: screenshots/0000.jpg

## Timeline

00:00 idle 4.9s
00:12 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
00:13 idle 2.4s
00:15 fill getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " }) = "60,00,000"
00:16 idle 2.2s
00:18 fill getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " }) = "60,00,000"
00:18 click getByRole("main")
00:18 idle 4.2s
00:22 idle 2.2s
00:24 click getByRole("button", { name: "Regular" })
00:25 idle 2.6s
00:28 idle 2.9s
00:31 idle 2.8s
00:35 idle 2.2s
00:37 idle 6.4s
00:46 idle 5.8s
00:52 idle 8s
01:00 idle 8s
01:08 idle 8s
01:16 idle 8s
01:24 idle 10s
01:34 idle 8s
01:42 idle 8s
01:50 idle 8s
01:58 idle 10s
02:08 idle 8s
02:16 idle 10s
02:26 idle 10s
02:36 idle 8s
02:44 idle 8s
02:52 idle 10s
03:02 idle 10s
03:12 idle 8s
03:20 idle 8s
03:28 idle 8s
03:36 idle 8s
03:44 idle 3.6s
03:47 idle 4.4s
03:52 idle 2.7s
03:55 idle 4.8s
04:00 idle 8s
04:08 idle 3.1s
04:11 idle 4.9s
04:16 idle 2.4s
04:18 click locator("#hlc-th-bank")
04:18 idle 2.5s
04:20 click locator("th#hlc-th-bank > div")
04:21 idle 9s
04:30 idle 5s
04:34 click getByRole("tab", { name: "Charges" })
04:35 idle 2.1s
04:36 click getByRole("tab", { name: "Other charges" })
04:37 idle 2.8s
04:39 click getByRole("tab", { name: "Overview" })
04:40 idle 9.9s
04:50 idle 4.1s
04:54 idle 4.1s
04:58 click getByRole("tab", { name: "Charges" })
04:59 click getByRole("tab", { name: "Other charges" })
05:00 click getByRole("tab", { name: "Overview" })
05:00 idle 4.1s
05:04 click getByRole("tab", { name: "Overview" })
05:05 idle 5.2s
05:10 idle 3.9s
05:14 idle 8s
05:22 idle 10s
05:32 idle 8s
05:40 idle 8s
05:48 idle 10s
05:58 idle 5.9s
06:03 click locator("th#hlc-th-bank > div > button > svg:nth-of-type(2)")
06:04 idle 8s
06:12 idle 3.3s
06:15 click getByRole("button", { name: "Edit inputs" })
06:17 idle 4.7s
06:22 click locator("button#hlc-edit-inputs > svg")
06:23 idle 4.6s
06:28 idle 4.1s
06:32 click locator("main > div")
06:32 idle 7.7s
06:40 idle 8s
06:48 idle 10s
06:58 idle 10s
07:08 idle 8s
07:16 idle 8s
07:24 idle 10s
07:34 idle 8s
07:42 idle 8s
07:50 idle 8s
07:58 idle 8s
08:06 idle 8s
08:14 idle 10s
08:24 idle 8s
08:32 idle 8s
08:40 idle 8s
08:48 idle 3.2s
08:51 click locator("th#hlc-th-bank > div > button > svg:nth-of-type(2)")
08:51 idle 8.7s

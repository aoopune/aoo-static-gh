# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T16:04:29.489Z
format: workbooks-recording/2.2
duration_ms_active: 335368
duration_ms_waiting: 0
events: 53
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

00:00 idle 7.7s
00:08 idle 10s
00:18 idle 8s
00:26 idle 8s
00:34 idle 8s
00:42 idle 10s
00:52 idle 8s
01:00 idle 8s
01:08 idle 10s
01:18 idle 10s
01:28 idle 10s
01:38 idle 10s
01:48 idle 10s
01:58 idle 10s
02:08 idle 8s
02:16 idle 8s
02:24 idle 8s
02:32 idle 8s
02:40 idle 8s
02:48 idle 8s
02:56 idle 8s
03:04 idle 8s
03:12 idle 10s
03:22 idle 8s
03:30 idle 10s
03:40 idle 8s
03:48 idle 8s
03:56 idle 10s
04:06 idle 8s
04:14 idle 10s
04:24 idle 8s
04:32 idle 10s
04:42 idle 10s
04:52 idle 8s
05:00 idle 2.7s
05:04 click getByRole("tab", { name: "Other charges" })
05:05 idle 3s
05:07 click getByRole("combobox", { name: "Prepayment method" })
05:08 idle 4.5s
05:12 fill getByRole("combobox", { name: "Prepayment method" }) = "balanceTransfer"
05:12 idle 2.5s
05:15 click getByRole("combobox", { name: "Prepayment method" })
05:17 click getByRole("tab", { name: "Overview" })
05:17 idle 8.7s

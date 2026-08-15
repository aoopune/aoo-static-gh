# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T17:10:04.687Z
format: workbooks-recording/2.2
duration_ms_active: 545586
duration_ms_waiting: 0
events: 127
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
00:08 idle 8s
00:16 idle 10s
00:26 idle 10s
00:36 idle 8s
00:44 idle 8s
00:52 idle 10s
01:02 idle 8s
01:10 idle 8s
01:18 idle 8s
01:26 idle 10s
01:36 idle 8s
01:44 idle 8s
01:52 idle 10s
02:02 idle 8s
02:10 idle 10s
02:20 idle 8s
02:28 idle 8s
02:36 idle 10s
02:46 idle 8s
02:54 idle 10s
03:04 idle 10s
03:14 idle 8s
03:22 idle 8s
03:30 idle 8s
03:38 idle 10s
03:48 idle 8s
03:56 idle 3.3s
04:00 idle 6.1s
04:06 idle 8s
04:14 idle 10s
04:24 idle 8s
04:32 idle 6.8s
04:40 idle 9.8s
04:50 idle 8s
04:58 idle 8s
05:06 idle 8s
05:14 idle 8s
05:22 idle 10s
05:32 idle 10s
05:42 idle 10s
05:57 idle 5.2s
06:02 idle 3.5s
06:05 idle 6.5s
06:12 idle 6.2s
06:18 click getByRole("button", { name: "See options" })
06:19 click getByRole("textbox", { name: "Age*\n                          \n                        \n                       " })
06:21 fill getByRole("textbox", { name: "Age*\n                          \n                        \n                       " }) = "35"
06:23 fill getByRole("textbox", { name: "Age*\n                          \n                        \n                       " }) = "35"
06:23 click getByRole("button", { name: "See options" })
06:26 click getByRole("button", { name: "See options" })
06:27 idle 2.1s
06:30 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1) > span")
06:32 idle 7.9s
06:40 idle 2.9s
06:42 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1)")
06:43 idle 9s
06:52 idle 8s
07:00 idle 4.9s
07:04 click getByRole("button", { name: "See options" })
07:06 idle 3s
07:14 idle 10s
07:24 idle 8s
07:32 idle 8s
07:40 idle 8s
07:48 idle 10s
07:58 idle 8s
08:06 idle 5.9s
08:11 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1) > svg")
08:13 idle 5.1s
08:18 click getByRole("textbox", { name: "Existing EMIs\n                          \n                        \n              " })
08:19 fill getByRole("textbox", { name: "Existing EMIs\n                          \n                        \n              " }) = "0"
08:20 press Backspace getByRole("textbox", { name: "Existing EMIs\n                          \n                        \n              " })
08:20 fill getByRole("textbox", { name: "Existing EMIs\n                          \n                        \n              " }) = ""
08:21 fill getByRole("textbox", { name: "Existing EMIs\n                          \n                        \n              " }) = "555"
08:22 idle 6.2s
08:28 fill getByRole("textbox", { name: "Existing EMIs\n                          \n                        \n              " }) = "555"
08:28 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1) > span")
08:28 idle 9.8s
08:38 idle 10s
08:48 idle 8s
08:56 idle 8s

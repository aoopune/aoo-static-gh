# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T16:34:11.754Z
format: workbooks-recording/2.2
duration_ms_active: 119080
duration_ms_waiting: 0
events: 46
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
00:16 idle 4.1s
00:20 click getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
00:21 press Backspace getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
00:22 press Backspace getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
00:22 press Backspace getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
00:22 press Backspace getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
00:22 press Backspace getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
00:22 fill getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " }) = ""
00:23 idle 6.4s
00:29 fill getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " }) = "1,00,000"
00:31 fill getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " }) = "1,00,000"
00:31 click getByRole("main")
00:31 idle 2.5s
00:34 click getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
00:34 click getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
00:35 click getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
00:35 idle 5.2s
00:40 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
00:40 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
00:40 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
00:40 idle 9.7s
00:50 idle 2.2s
00:52 click getByRole("main")
00:53 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
00:53 idle 8.6s
01:02 idle 8s
01:10 idle 10s
01:20 idle 7.4s
01:27 click getByRole("textbox", { name: "Age*\n                          \n                        \n                       " })
01:27 idle 8.5s
01:36 idle 8s
01:44 idle 10s

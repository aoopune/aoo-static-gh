# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T16:36:16.832Z
format: workbooks-recording/2.2
duration_ms_active: 411078
duration_ms_waiting: 0
events: 71
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

00:00 idle 2.7s
00:03 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
00:03 idle 8.9s
00:12 idle 8s
00:20 idle 8s
00:28 idle 8s
00:36 click getByRole("button", { name: "Salaried" })
00:36 idle 4.5s
00:40 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
00:41 idle 2.2s
00:43 click getByRole("textbox", { name: "Age*\n                          \n                        \n                       " })
00:43 idle 8.7s
00:52 idle 10s
01:02 idle 10s
01:12 idle 8s
01:20 idle 10s
01:30 idle 3.1s
01:32 click getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
01:33 idle 5.2s
01:38 click getByRole("textbox", { name: "Age*\n                          \n                        \n                       " })
01:38 idle 6s
01:44 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
01:44 idle 9.4s
01:54 idle 8s
02:02 idle 8s
02:10 idle 8s
02:18 idle 2.2s
02:20 click getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
02:20 idle 9.7s
02:30 idle 10s
02:40 idle 8s
02:48 idle 8s
02:56 idle 10s
03:06 idle 8s
03:14 idle 8s
03:22 idle 10s
03:32 idle 8s
03:40 idle 8s
03:48 idle 8s
03:56 idle 8s
04:04 idle 8s
04:12 idle 8s
04:20 idle 8s
04:28 idle 10s
04:38 idle 10s
04:48 idle 8s
04:56 idle 8s
05:04 idle 8s
05:12 idle 8s
05:20 idle 8s
05:28 idle 10s
05:38 idle 10s
05:48 idle 8s
05:56 idle 10s
06:06 idle 8s
06:14 idle 8s
06:22 idle 8s
06:30 idle 8s
06:38 idle 4.5s
06:42 idle 5.5s

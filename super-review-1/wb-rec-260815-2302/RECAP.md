# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T17:32:34.848Z
format: workbooks-recording/2.2
duration_ms_active: 121662
duration_ms_waiting: 0
events: 34
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

00:00 idle 4s
00:04 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1)")
00:05 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1)")
00:06 idle 8.1s
00:14 idle 10s
00:24 idle 8s
00:32 idle 8s
00:40 idle 3s
00:42 click getByRole("textbox", { name: "Existing EMIs\n                          \n                        \n              " })
00:43 click getByRole("textbox", { name: "Existing EMIs\n                          \n                        \n              " })
00:43 idle 8.9s
00:52 idle 8s
01:00 idle 8s
01:08 idle 4.1s
01:12 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1) > svg")
01:14 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1)")
01:14 idle 9.8s
01:24 idle 3.8s
01:27 click getByRole("button", { name: "Yes" })
01:28 fill locator("#hlc-coapplicant") = "yes"
01:28 idle 2.2s
01:31 idle 5.1s
01:36 idle 7.7s
01:43 click getByRole("button", { name: "No" })
01:44 fill locator("#hlc-coapplicant") = "no"
01:44 idle 7.4s
01:52 idle 8s

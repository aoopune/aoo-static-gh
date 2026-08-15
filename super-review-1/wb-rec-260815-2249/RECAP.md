# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T17:19:17.338Z
format: workbooks-recording/2.2
duration_ms_active: 136764
duration_ms_waiting: 0
events: 43
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

00:01 click getByRole("button", { name: "See options" })
00:02 idle 2.9s
00:06 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1)")
00:07 idle 8.3s
00:15 click locator("details#hlc-form-more > summary > span > span:nth-of-type(2)")
00:17 idle 7.2s
00:24 idle 8s
00:32 idle 3.6s
00:35 click getByRole("button", { name: "See options" })
00:35 idle 2.8s
00:38 idle 4.2s
00:42 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1) > span")
00:43 idle 2.8s
00:45 idle 6.3s
00:52 idle 8s
00:59 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1) > span")
01:01 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1) > span")
01:01 idle 5.1s
01:06 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1)")
01:07 idle 9.2s
01:16 idle 4.3s
01:20 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1)")
01:20 idle 9.7s
01:30 idle 6.9s
01:36 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1) > span")
01:37 idle 9s
01:46 idle 10s
01:56 idle 8s
02:04 idle 8s

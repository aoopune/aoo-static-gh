# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T15:55:21.859Z
format: workbooks-recording/2.2
duration_ms_active: 539127
duration_ms_waiting: 0
events: 94
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

00:00 idle 7.3s
00:07 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(3) > div > label:nth-of-type(2) > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > rect")
00:08 idle 4.4s
00:12 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(3) > div > label:nth-of-type(2) > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
00:13 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
00:13 idle 8.5s
00:22 idle 8s
00:30 idle 10s
00:40 idle 3.5s
00:43 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
00:43 idle 2.2s
00:45 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
00:46 idle 8s
00:54 idle 3s
00:56 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
00:57 idle 8.9s
01:06 idle 8s
01:14 idle 8s
01:22 idle 10s
01:32 idle 10s
01:42 idle 8s
01:50 idle 10s
02:00 idle 8s
02:08 idle 8s
02:16 idle 10s
02:26 idle 7.9s
02:33 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(3) > div > label:nth-of-type(2) > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > rect")
02:35 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
02:35 idle 5.2s
02:40 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
02:42 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
02:42 idle 9.8s
02:52 idle 8s
03:00 idle 10s
03:10 idle 10s
03:20 idle 8s
03:28 idle 10s
03:38 idle 8s
03:46 idle 10s
03:56 idle 8s
04:04 idle 8s
04:12 idle 10s
04:22 idle 3.2s
04:25 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
04:25 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
04:25 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
04:25 idle 7s
04:32 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
04:32 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
04:32 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
04:32 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
04:32 idle 9.4s
04:42 idle 10s
04:52 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
04:53 idle 8.9s
05:02 idle 10s
05:12 idle 8s
05:20 idle 8s
05:28 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
05:29 idle 9.1s
05:38 idle 5.5s
05:43 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
05:43 idle 8.5s
05:52 idle 7.9s
06:00 idle 8s
06:08 idle 8s
06:16 idle 8s
06:24 idle 10s
06:34 idle 8s
06:42 idle 8s
06:50 idle 8s
06:58 idle 8s
07:06 idle 10s
07:16 idle 8s
07:24 idle 10s
07:34 idle 8s
07:42 idle 10s
07:52 idle 8s
08:00 idle 10s
08:10 idle 8s
08:18 idle 8s
08:26 idle 10s
08:36 idle 10s
08:46 idle 8s

# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T17:34:55.529Z
format: workbooks-recording/2.2
duration_ms_active: 533319
duration_ms_waiting: 0
events: 129
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

00:03 idle 4.7s
00:08 idle 8s
00:16 idle 10s
00:26 idle 8s
00:34 idle 3.5s
00:37 click getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
00:37 idle 8.4s
00:46 idle 8s
00:54 idle 8s
01:02 idle 8s
01:10 idle 2.7s
01:12 click getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
01:12 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
01:13 click getByRole("textbox", { name: "Age*\n                          \n                        \n                       " })
01:13 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
01:14 click getByRole("button", { name: "Salaried" })
01:14 click getByRole("button", { name: "Top-up" })
01:15 idle 9.3s
01:24 idle 8s
01:32 idle 8s
01:40 idle 8s
01:48 idle 8s
01:56 idle 10s
02:06 idle 3.5s
02:09 click getByRole("combobox", { name: "Share of income for EMIs /FOIR\n                          \n                      " })
02:09 idle 8.4s
02:18 idle 8s
02:26 idle 10s
02:36 idle 8s
02:44 idle 10s
02:54 idle 8s
03:02 idle 8s
03:10 idle 10s
03:20 idle 8s
03:28 idle 8s
03:36 idle 9.4s
03:45 click getByRole("button", { name: "Yes" })
03:46 fill locator("#hlc-coapplicant") = "yes"
03:46 idle 7.7s
03:54 idle 10s
04:04 idle 3.6s
04:07 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1)")
04:08 idle 4.3s
04:12 idle 3.9s
04:16 idle 8s
04:24 idle 8s
04:32 idle 4.3s
04:36 idle 3.7s
04:40 idle 8s
04:48 idle 9.2s
04:57 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1) > span")
04:59 click getByRole("combobox", { name: "Share of income for EMIs /FOIR\n                          \n                      " })
04:59 idle 8.6s
05:08 idle 8s
05:16 idle 10s
05:26 idle 10s
05:37 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1) > span")
05:37 idle 3.7s
05:41 idle 4.7s
05:46 idle 4.2s
05:50 idle 2.6s
05:54 idle 10s
06:04 idle 8s
06:12 idle 8s
06:20 idle 8s
06:28 idle 8s
06:36 idle 8s
06:44 idle 7.7s
06:52 idle 8s
07:00 idle 2s
07:01 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(1) > label > span:nth-of-type(1) > span")
07:01 click getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
07:03 idle 3.6s
07:06 click getByRole("tab", { name: "Overview" })
07:07 idle 4.9s
07:11 click locator("main > div > div > div")
07:12 idle 7.7s
07:20 idle 8s
07:28 idle 6.3s
07:36 idle 2.3s
07:38 idle 7.7s
07:46 idle 8s
07:54 idle 8s
08:02 idle 3.9s
08:05 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
08:06 idle 10s
08:16 idle 8s
08:24 click getByRole("textbox", { name: "Monthly income*\n                        \n                      \n                " })
08:25 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
08:26 idle 5.7s
08:31 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
08:32 idle 8.3s
08:40 idle 10s

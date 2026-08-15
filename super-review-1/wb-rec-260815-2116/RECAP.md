# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T15:46:08.706Z
format: workbooks-recording/2.2
duration_ms_active: 541815
duration_ms_waiting: 0
events: 183
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
  screenshot: screenshots/0000.png

## Timeline

00:00 idle 6.9s
00:07 click getByRole("button", { name: "All" })
00:07 idle 4.7s
00:12 idle 4.1s
00:16 idle 8s
00:24 idle 8s
00:32 idle 10s
00:42 idle 3.1s
00:44 click locator("main > div > header > h1 > span")
00:45 idle 6.1s
00:51 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(1) > label > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(2)")
00:51 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(1) > label > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(2)")
00:51 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(1) > label > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(2)")
00:52 idle 8.1s
01:00 idle 8s
01:09 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(1) > label > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
01:11 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(1) > label > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
01:11 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(1) > label > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
01:12 idle 8.2s
01:20 idle 10s
01:30 idle 8s
01:38 idle 2.5s
01:40 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(1) > label > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
01:41 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(1) > label > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
01:41 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(1) > label > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
01:42 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(1) > label > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
01:43 idle 9.2s
01:52 idle 8s
02:00 idle 8s
02:08 idle 8s
02:16 idle 8s
02:25 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
02:26 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
02:26 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
02:27 idle 8.8s
02:36 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
02:37 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
02:38 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
02:39 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
02:40 idle 4.1s
02:43 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
02:43 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
02:45 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > rect")
02:46 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > rect")
02:47 idle 3.9s
02:50 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
02:51 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
02:51 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
02:52 idle 8.2s
03:00 idle 8s
03:08 idle 8s
03:16 idle 10s
03:26 idle 8.9s
03:34 click locator("main > div")
03:35 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
03:36 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
03:37 idle 6.9s
03:43 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
03:44 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
03:45 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
03:45 idle 5.1s
03:50 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(2)")
03:50 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
03:51 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(2)")
03:51 idle 8.5s
04:00 idle 8s
04:08 idle 8s
04:16 idle 10s
04:26 idle 4.2s
04:30 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
04:30 idle 5.9s
04:36 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
04:36 idle 9.6s
04:46 idle 8s
04:54 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span")
04:54 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
04:54 idle 3.2s
04:57 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > rect")
04:58 idle 10s
05:08 idle 8s
05:16 idle 10s
05:26 idle 6s
05:31 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
05:31 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
05:32 idle 9.9s
05:42 idle 10s
05:52 idle 10s
06:02 idle 3.7s
06:05 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
06:05 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
06:05 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
06:05 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
06:06 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
06:06 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
06:06 idle 7.9s
06:14 idle 8s
06:22 idle 7.8s
06:29 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
06:29 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
06:29 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
06:29 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
06:30 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
06:30 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
06:30 idle 8.1s
06:38 idle 8s
06:46 idle 7.9s
06:53 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
06:53 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
06:53 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
06:53 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
06:54 idle 8s
07:02 idle 10s
07:12 idle 10s
07:22 idle 8s
07:30 idle 2.9s
07:32 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
07:32 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
07:33 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
07:33 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
07:34 idle 2.6s
07:36 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
07:36 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
07:36 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
07:36 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
07:36 idle 5.3s
07:41 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
07:41 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
07:41 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
07:41 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
07:42 idle 8s
07:50 idle 8s
07:58 idle 8s
08:06 idle 8s
08:14 idle 8s
08:22 idle 3s
08:24 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
08:25 idle 8.9s
08:34 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(2) > label > span:nth-of-type(1) > span")
08:34 click getByRole("textbox", { name: "Property agreement value*\n                        \n                      \n      " })
08:35 idle 9.2s
08:44 idle 4.5s
08:48 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(3) > div > label:nth-of-type(1) > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
08:48 idle 9.4s
08:58 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(3) > div > label:nth-of-type(1) > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
08:58 click locator("form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(3) > div > label:nth-of-type(1) > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")

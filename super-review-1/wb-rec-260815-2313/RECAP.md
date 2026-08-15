# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T17:43:51.324Z
format: workbooks-recording/2.2
duration_ms_active: 518906
duration_ms_waiting: 0
events: 112
pages: 4
markers: 0
assertions: 0
masked_inputs: 0
hosts: [localhost:8765, www.google.com]

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

[p2] https://www.google.com/search/warmup.html — "Warmup Page"
  headings: (none)
  landmarks: (none)
  actions: (none)
  forms: (none)
  screenshot: none

[p3] https://www.google.com/search?q=cognitive+load&oq=cognitive+loa&gs_lcrp=***&sourceid=chrome&source=chrome.ob&ie=UTF-8 — "Google Search"
  headings: (none)
  landmarks: (none)
  actions: (none)
  forms: (none)
  screenshot: screenshots/0044.png

[p4] https://www.google.com/search?q=cognitive+load&oq=cognitive+loa&gs_lcrp=***&sourceid=chrome&source=chrome.ob&ie=UTF-8&sei=fKaAaoatCIyQnesPlO-92Qo — "cognitive load - Google Search"
  headings: (none)
  landmarks: (none)
  actions: (none)
  forms: (none)
  screenshot: screenshots/0044.png

## Timeline

00:00 idle 7.7s
00:08 idle 8s
00:16 idle 8s
00:24 idle 10s
00:34 idle 8s
00:42 idle 10s
00:52 idle 8s
01:00 idle 8s
01:08 idle 2.7s
01:10 click locator("details#hlc-form-more > summary > span > span:nth-of-type(1) > span")
01:12 idle 2.8s
01:15 click getByRole("button", { name: "No" })
01:16 fill locator("#hlc-coapplicant") = "no"
01:16 idle 7.8s
01:25 click getByRole("combobox", { name: "Share of credit card limits counted as monthly load" })
01:25 idle 4.6s
01:29 click locator("div#hlc-form-more-panel > div > div:nth-of-type(1) > div > span > span > button > span > svg > circle:nth-of-type(1)")
01:30 click locator("div#hlc-form-more-panel > div > div:nth-of-type(1) > div > span > span > button > span > svg > circle:nth-of-type(1)")
01:30 click locator("div#hlc-form-more-panel > div > div:nth-of-type(1) > div > span > span > button > span > svg > circle:nth-of-type(1)")
01:31 idle 3s
01:34 click locator("div#hlc-form-more-panel > div > label:nth-of-type(3) > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
01:34 click locator("div#hlc-form-more-panel > div > label:nth-of-type(3) > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
01:35 click locator("div#hlc-form-more-panel > div > label:nth-of-type(3) > span:nth-of-type(1) > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
01:35 idle 2.1s
01:37 click locator("main > div > div > div")
01:38 idle 2.9s
01:46 click locator("div#hlc-form-more-panel > div > label:nth-of-type(1) > span:nth-of-type(1) > span > span > button > span > svg > circle:nth-of-type(1)")
01:47 idle 8.9s
01:56 idle 8s
02:04 idle 10s
02:14 idle 8s
02:22 idle 8s
02:30 idle 8s
02:38 idle 8s
02:46 idle 8s
02:54 idle 8s
03:02 idle 8s
03:10 idle 8s
03:18 idle 8s
03:26 idle 8s
03:34 idle 8s
03:42 idle 8s
03:50 idle 8s
03:58 idle 8s
04:06 idle 8s
04:14 idle 6.9s
04:20 click locator("#hlc-coapplicant-row")
04:21 idle 9s
04:30 idle 8s
04:38 idle 5.7s
04:46 idle 2.9s
04:49 tab_switch -> 
04:49 idle 2.6s
04:53 nav (start) -> https://www.google.com/search?q=cognitive+load&oq=cognitive+loa&gs_lcrp=***&sourceid=chrome&source=chrome.ob&ie=UTF-8&sei=fKaAaoatCIyQnesPlO-92Qo
04:53 idle 6.1s
04:59 tab_switch -> http://localhost:8765/pages/explore-banks.html
05:01 tab_switch -> https://www.google.com/search?q=cognitive+load&oq=cognitive+loa&gs_lcrp=***&sourceid=chrome&source=chrome.ob&ie=UTF-8&sei=fKaAaoatCIyQnesPlO-92Qo
05:02 tab_switch -> http://localhost:8765/pages/explore-banks.html
05:02 idle 9.6s
05:12 idle 8s
05:20 idle 8s
05:28 idle 8s
05:36 idle 10s
05:46 idle 8s
05:54 idle 8s
06:02 idle 10s
06:12 idle 10s
06:22 idle 8s
06:30 idle 10s
06:40 idle 8s
06:48 idle 8s
06:56 idle 8s
07:04 idle 8s
07:12 idle 10s
07:22 idle 10s
07:32 idle 8s
07:40 idle 8s
07:48 idle 8s
07:56 idle 8s
08:04 idle 8s
08:12 idle 10s
08:22 idle 8s

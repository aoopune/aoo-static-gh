# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T18:11:25.578Z
format: workbooks-recording/2.2
duration_ms_active: 574290
duration_ms_waiting: 0
events: 128
pages: 1
markers: 0
assertions: 0
masked_inputs: 0
hosts: [localhost:8765]

## Pages

[p1] http://localhost:8765/pages/explore-banks.html — "Explore banks – Shroffin"
  headings: Explore guide, Explore tools, Get support, Explore banks., Loan inputs, Bank options, Filters, More details, Guide, Tools, Company, Support, Connect, Disclaimer
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
00:16 idle 8s
00:24 click locator("div#hlc-drawer-body > details:nth-of-type(1) > summary > span")
00:25 idle 9s
00:34 idle 6.4s
00:40 click locator("div#hlc-drawer-body > details:nth-of-type(1) > summary > span")
00:40 idle 4.7s
00:45 click locator("div#hlc-drawer-body > details:nth-of-type(1) > summary > span > span")
00:45 idle 2.7s
00:47 click locator("div#hlc-drawer-body > details:nth-of-type(1) > div > div > div:nth-of-type(2) > span:nth-of-type(2)")
00:48 idle 9.9s
00:58 idle 8s
01:06 idle 8s
01:14 idle 8s
01:22 idle 8s
01:30 idle 6.8s
01:36 click locator("div#hlc-drawer-body > details:nth-of-type(1) > summary > span")
01:37 idle 6.3s
01:43 click locator("div#hlc-drawer-body > details:nth-of-type(3) > summary > span > span")
01:43 idle 5.6s
01:48 click locator("div#hlc-drawer-body > details:nth-of-type(4) > summary > span > svg > path")
01:49 idle 3.5s
01:52 click locator("div#hlc-drawer-body > details:nth-of-type(5) > summary > span > span")
01:53 idle 6.4s
01:59 click locator("div#hlc-drawer-body > details:nth-of-type(5) > summary > span > span")
02:00 click locator("div#hlc-drawer-body > details:nth-of-type(4) > summary > span")
02:00 idle 3.1s
02:03 click locator("div#hlc-drawer-body > details:nth-of-type(3) > summary > span > span")
02:04 idle 8.2s
02:12 idle 10s
02:22 idle 8s
02:30 idle 10s
02:40 idle 10s
02:50 idle 10s
03:00 idle 8s
03:08 idle 8s
03:16 idle 8s
03:24 click locator("#hlc-drawer-backdrop")
03:24 idle 9.4s
03:34 idle 5.2s
03:39 click locator("tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(1) > div > div > div:nth-of-type(2) > button > span:nth-of-type(1)")
03:39 idle 3.1s
03:42 click locator("div#hlc-drawer-body > details:nth-of-type(1) > summary > span")
03:42 idle 4.7s
03:47 click locator("#hlc-drawer-backdrop")
03:47 idle 8.7s
03:56 idle 8s
04:04 idle 8s
04:12 idle 5.2s
04:17 click getByRole("button", { name: "Show how loan amount for Bank of Maharashtra was calculated" })
04:17 idle 4.1s
04:21 click locator("#hlc-drawer-backdrop")
04:21 idle 8.5s
04:30 click getByRole("button", { name: "More about Bank of Maharashtra" })
04:32 click locator("div#hlc-drawer-body > details:nth-of-type(1) > summary > span > svg")
04:33 idle 8.8s
04:41 click locator("#hlc-drawer-backdrop")
04:42 idle 8.1s
04:50 idle 10s
05:00 idle 10s
05:10 click getByRole("button", { name: "Show how loan amount for Bank of Maharashtra was calculated" })
05:11 idle 2.8s
05:13 click locator("#hlc-drawer-backdrop")
05:14 idle 2.9s
05:16 click getByRole("button", { name: "Show how emi for Bank of Maharashtra was calculated" })
05:18 click locator("#hlc-drawer-backdrop")
05:18 idle 2.3s
05:20 click locator("tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(1) > div > div > div:nth-of-type(1) > span")
05:21 idle 3.5s
05:24 click locator("tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(1) > div > div > div:nth-of-type(1) > span")
05:24 idle 9.4s
05:33 click locator("tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(1) > div > div > div:nth-of-type(2) > button > span:nth-of-type(2) > svg > path")
05:34 idle 4.2s
05:38 click locator("#hlc-drawer-backdrop")
05:38 idle 9.8s
05:48 idle 8s
05:56 idle 4.6s
06:00 idle 3.4s
06:04 idle 4.3s
06:08 click getByRole("button", { name: "Show how loan amount for Bank of Maharashtra was calculated" })
06:08 idle 3.2s
06:11 click locator("#hlc-drawer-backdrop")
06:12 idle 5.1s
06:16 click getByRole("button", { name: "Show how loan amount for Bank of Maharashtra was calculated" })
06:17 idle 9s
06:26 idle 6.6s
06:32 click locator("div#hlc-drawer-body > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(2) > span:nth-of-type(2)")
06:33 idle 2.9s
06:35 idle 4.1s
06:40 idle 2.3s
06:42 idle 8s
06:50 idle 10s
07:00 idle 8s
07:08 idle 10s
07:18 idle 8s
07:26 idle 8s
07:34 idle 8s
07:42 idle 8s
07:50 idle 10s
08:00 idle 8s
08:08 idle 8s
08:16 idle 8s
08:24 idle 8s
08:32 idle 4s
08:35 click locator("div#hlc-drawer-body > div:nth-of-type(1) > div:nth-of-type(3) > div > div:nth-of-type(4) > span:nth-of-type(2)")
08:36 idle 9.9s
08:46 idle 8s
08:54 idle 8s
09:02 idle 8s
09:10 idle 10s
09:20 idle 10s

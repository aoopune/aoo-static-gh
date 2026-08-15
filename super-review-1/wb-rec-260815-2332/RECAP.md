# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T18:02:07.502Z
format: workbooks-recording/2.2
duration_ms_active: 555269
duration_ms_waiting: 0
events: 158
pages: 2
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

[p2] http://localhost:8765/pages/apply.html — "Review your application – Shroffin"
  headings: Explore guide, Explore tools, Get support, Review your application, Details you entered, Filters, Banks you chose, Guide, Tools, Company, Support, Connect, Disclaimer
  landmarks: navigation, main, region, region, complementary, contentinfo, region, navigation, navigation, navigation, region, navigation, region, navigation
  actions: a "Back" -> getByRole("link", { name: "Back" }), button "Continue" -> getByRole("button", { name: "Continue" }), button "Show more details" -> getByRole("button", { name: "Show more details" })
  forms: (none)
  screenshot: screenshots/0052.jpg

## Timeline

00:00 idle 5s
00:05 idle 2.7s
00:09 idle 8.8s
00:18 idle 8s
00:26 idle 10s
00:36 idle 8s
00:45 idle 5.9s
00:52 idle 7.5s
01:00 idle 3.9s
01:03 click locator("tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(1) > div > div > div:nth-of-type(2) > button > span:nth-of-type(2) > svg")
01:04 idle 3.2s
01:07 click getByRole("button", { name: "Close" })
01:07 idle 3.1s
01:10 idle 5.6s
01:16 idle 2.4s
01:18 click locator("th#hlc-th-effectiveRoiPct > span > span:nth-of-type(1) > svg > path")
01:19 click locator("th#hlc-th-effectiveRoiPct > span")
01:21 click locator("#hlc-th-loanAmount")
01:21 idle 8.7s
01:30 idle 6.7s
01:36 click locator("th#hlc-th-loanAmount > span > span:nth-of-type(2) > svg")
01:37 idle 2.2s
01:38 click locator("th#hlc-th-tenureLabel > span > span:nth-of-type(2) > svg")
01:39 click locator("th#hlc-th-tenureLabel > span > span:nth-of-type(2) > svg")
01:40 idle 8.1s
01:48 idle 10s
01:58 idle 7.5s
02:05 click locator("th#hlc-th-emi > span")
02:05 idle 8.4s
02:14 idle 8s
02:22 idle 8s
02:30 idle 8s
02:38 idle 3.3s
02:41 click getByRole("button", { name: "Show how emi for Punjab National Bank was calculated" })
02:41 idle 2.2s
02:43 click locator("#hlc-drawer-backdrop")
02:43 idle 8.3s
02:52 idle 8s
03:00 idle 8s
03:09 click locator("th#hlc-th-bank > div > button > svg:nth-of-type(2) > path")
03:10 idle 8.2s
03:18 idle 3.5s
03:21 click locator("th#hlc-th-bank > div > button > svg:nth-of-type(2)")
03:21 idle 4.5s
03:27 idle 2.6s
03:30 idle 8s
03:38 idle 6.2s
03:44 idle 3.9s
03:48 idle 8s
03:56 idle 6.7s
04:02 idle 3.4s
04:08 idle 2.8s
04:12 idle 3.9s
04:16 idle 3.1s
04:21 click locator("th#hlc-th-bank > div")
04:22 idle 8.2s
04:30 idle 10s
04:40 idle 2.3s
04:42 idle 2.1s
04:44 idle 5.6s
04:50 idle 6.4s
04:56 click getByRole("main")
04:56 idle 2.4s
04:59 click getByRole("button", { name: "Floating" })
04:59 idle 4.6s
05:04 idle 3.8s
05:08 idle 3s
05:10 click locator("button#hlc-show-more > span")
05:11 idle 3.8s
05:17 idle 2.9s
05:22 idle 6.3s
05:28 idle 8s
05:36 idle 8s
05:44 idle 4.9s
05:55 click locator("th#hlc-th-bank > div > button > svg:nth-of-type(2)")
05:57 click getByRole("button", { name: "Apply once to 33 banks" })
05:57 nav /pages/explore-banks.html -> /pages/apply.html
05:57 idle 2.9s
06:00 nav /pages/apply.html -> /pages/explore-banks.html
06:00 idle 9.5s
06:10 idle 10s
06:20 idle 8s
06:28 idle 8s
06:36 idle 10s
06:46 idle 10s
06:56 idle 8s
07:04 idle 8s
07:12 idle 8s
07:20 idle 10s
07:30 idle 8s
07:38 idle 8s
07:46 idle 8s
07:54 idle 8.1s
08:02 idle 8s
08:10 idle 8s
08:18 idle 8s
08:26 idle 8s
08:34 idle 8s
08:42 idle 8s
08:50 idle 10s
09:00 idle 10s

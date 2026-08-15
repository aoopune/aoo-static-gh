# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/pages/explore-banks.html
started_at: 2026-08-15T18:34:46.547Z
format: workbooks-recording/2.2
duration_ms_active: 523772
duration_ms_waiting: 0
events: 128
pages: 1
markers: 0
assertions: 0
masked_inputs: 0
hosts: [localhost:8765]

## Pages

[p1] http://localhost:8765/pages/explore-banks.html — "Explore banks – Shroffin"
  headings: Explore guide, Explore tools, Get support, Explore banks., Loan inputs, Bank options, Filters, Notes, Processing fee, Guide, Tools, Company, Support, Connect, Disclaimer
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

00:00 idle 4.4s
00:04 click locator("#hlc-drawer-backdrop")
00:05 idle 6s
00:10 click getByRole("button", { name: "Open note for mark *" })
00:14 idle 6.2s
00:20 idle 8s
00:28 idle 10s
00:38 idle 10s
00:48 idle 10s
00:58 idle 10s
01:08 idle 10s
01:18 idle 10s
01:28 idle 10s
01:38 idle 5s
01:46 idle 8s
01:54 idle 6.5s
02:00 idle 3.6s
02:04 idle 4.4s
02:08 click getByRole("button", { name: "Show how property check charges for Indian Bank was calculated" })
02:08 idle 4.3s
02:12 click locator("div#hlc-drawer-body > div:nth-of-type(1) > div:nth-of-type(1) > div > div > span:nth-of-type(2)")
02:13 idle 9.1s
02:22 idle 10s
02:32 idle 8s
02:40 idle 8s
02:48 idle 8s
02:56 idle 8s
03:04 idle 10s
03:14 idle 8s
03:22 idle 10s
03:32 idle 8s
03:40 idle 8s
03:48 idle 8s
03:56 idle 10s
04:06 idle 8s
04:14 idle 5.6s
04:19 click getByRole("button", { name: "Close" })
04:19 idle 8.3s
04:28 click getByRole("button", { name: "Show how processing fees for Canara Bank was calculated" })
04:29 idle 9.3s
04:38 idle 5.4s
04:43 click locator("div#hlc-drawer-body > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2) > span:nth-of-type(2)")
04:43 click locator("div#hlc-drawer-body > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(3)")
04:44 idle 8.5s
04:52 click getByRole("button", { name: "Close" })
04:54 click getByRole("button", { name: "Open note for mark *" })
04:56 idle 7.4s
05:04 idle 7s
05:10 click getByRole("button", { name: "Show how processing fees for DCB Bank was calculated" })
05:11 idle 3.5s
05:14 click locator("div#hlc-drawer-body > div:nth-of-type(1) > div:nth-of-type(1) > div > div:nth-of-type(2) > span:nth-of-type(2)")
05:14 idle 9.3s
05:24 idle 8s
05:32 idle 8s
05:40 idle 10s
05:50 idle 8s
05:58 idle 4.3s
06:02 click getByRole("button", { name: "Close" })
06:02 idle 2.1s
06:05 idle 6.7s
06:12 idle 8s
06:20 idle 8s
06:28 idle 2.7s
06:31 click getByRole("button", { name: "Show how processing fees for IDFC FIRST Bank was calculated" })
06:31 idle 8.5s
06:40 idle 8s
06:48 idle 5.3s
06:53 click getByRole("button", { name: "Close" })
06:53 idle 7.8s
07:01 click getByRole("button", { name: "Show how property check charges for State Bank of India was calculated" })
07:01 idle 8.8s
07:10 idle 8s
07:18 idle 8s
07:26 idle 6.6s
07:32 click locator("#hlc-drawer-backdrop")
07:33 idle 6.5s
07:39 idle 2.8s
07:43 click getByRole("button", { name: "Show how property check charges for Punjab & Sind Bank was calculated" })
07:44 idle 8.1s
07:52 idle 10s
08:03 click locator("#hlc-drawer-backdrop")
08:03 idle 2s
08:05 click getByRole("tab", { name: "Overview" })
08:07 click getByRole("button", { name: "Show how loan amount for Punjab & Sind Bank was calculated" })
08:07 idle 8.8s
08:16 idle 8s
08:24 idle 8s
08:32 idle 8s
08:41 click locator("#hlc-drawer-backdrop")

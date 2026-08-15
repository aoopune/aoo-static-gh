# Session

label: (unlabeled)
description: (none)
start_url: http://localhost:8765/
started_at: 2026-08-15T15:36:22.615Z
format: workbooks-recording/2.2
duration_ms_active: 541971
duration_ms_waiting: 0
events: 202
pages: 3
markers: 0
assertions: 0
masked_inputs: 0
hosts: [localhost:8765]

## Pages

[p1] http://localhost:8765/ — "Shroffin"
  headings: Explore guide, Explore tools, Get support, Get a fair view of home loans and apply to your chosen banks in one go., We completely re-engineered your home loan journey., Transparent,
              like never before., Zero
                commissions.
              
              
                Zero
                bias., Best of all,
              you can look through everything at your own pace,, Built around you., Guides that walk you through a home loan, Every bank’s home loan in the same layout, Browse before you give your number, One application to the banks you pick, Help toward what you need, Scattered everywhere.
          Consolidated here., Guide, Tools, Company, Support, Connect
  landmarks: navigation, main, region, region, region, region, region, region, region, region, region, region, region, region, region, region, complementary, contentinfo, region, navigation, navigation, navigation, region, navigation, region, navigation
  actions: a "Explore banks" -> getByRole("link", { name: "Explore banks" }), button "Play" -> getByRole("button", { name: "Play" }), button "Play" -> getByRole("button", { name: "Play" }), button "Guides that walk you through a home loan" -> getByRole("button", { name: "Guides that walk you through a home loan" }), button "Every bank’s home loan in the same layout" -> getByRole("button", { name: "Every bank’s home loan in the same layout" }), button "Browse before you give your number" -> getByRole("button", { name: "Browse before you give your number" }), button "One application to the banks you pick" -> getByRole("button", { name: "One application to the banks you pick" }), button "Help toward what you need" -> getByRole("button", { name: "Help toward what you need" }), button "Play" -> getByRole("button", { name: "Play" })
  forms: (none)
  screenshot: screenshots/0000.png

[p2] http://localhost:8765/pages/explore-banks.html — "Explore banks – Shroffin"
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
  screenshot: none

[p3] http://localhost:8765/pages/concessions.html#bank-rates — "Home loan concessions – Shroffin"
  headings: Explore guide, Explore tools, Get support, You may alreadypay less., Know if you can still pay less before you accept an offer., What can lower your home loan rate?, Who can get a PMAY subsidy?, Can fees be waived?, Get started with Shroffin., Guide, Tools, Company, Support, Connect, Disclaimer
  landmarks: navigation, main, navigation, banner, navigation, region, complementary, contentinfo, region, navigation, navigation, region, navigation, region, navigation
  actions: a "PMAY-U 2.0 ISS↗ (opens official PMAY interest subsidy page)" -> getByRole("link", { name: "PMAY-U 2.0 ISS↗ (opens official PMAY interest subsidy page)" }), button "PMAY-U 2.0 ISS" -> getByRole("tab", { name: "PMAY-U 2.0 ISS" }), button "PMAY CLSS (closed)" -> getByRole("tab", { name: "PMAY CLSS (closed)" }), button "Who qualifies" -> getByRole("tab", { name: "Who qualifies" }), button "How you get it" -> getByRole("tab", { name: "How you get it" }), button "Who it was for" -> getByRole("tab", { name: "Who it was for" }), button "How it worked" -> getByRole("tab", { name: "How it worked" })
  forms: (none)
  screenshot: screenshots/0060.png

## Timeline

00:00 idle 4.5s
00:05 click getByRole("link", { name: "Explore banks" })
00:05 nav / -> /pages/explore-banks.html
00:05 idle 6.8s
00:11 press Meta
00:12 press Shift
00:12 press r
00:14 idle 2.8s
00:17 nav /pages/explore-banks.html -> /
00:17 idle 2.7s
00:20 idle 2.3s
00:22 click getByRole("link", { name: "Explore banks" })
00:22 nav / -> /pages/explore-banks.html
00:23 idle 9s
00:32 idle 5.7s
00:37 click locator("main > div")
00:38 idle 8.2s
00:46 idle 10s
00:56 idle 8s
01:04 click getByRole("textbox", { name: "Age*\n                          \n                        \n                       " })
01:05 click getByRole("textbox", { name: "CIBIL score*\n                          \n                        \n               " })
01:06 idle 5.9s
01:11 click getByRole("button", { name: "See options" })
01:13 idle 2.3s
01:21 idle 7.2s
01:28 idle 8s
01:36 idle 2s
01:38 idle 3.1s
01:42 click getByRole("button", { name: "Public" })
01:44 click getByRole("button", { name: "Private" })
01:44 idle 2.5s
01:46 click getByRole("button", { name: "Public" })
01:47 click getByRole("button", { name: "Private" })
01:47 idle 6s
01:53 click getByRole("button", { name: "All" })
01:55 click getByRole("button", { name: "Public" })
01:56 click getByRole("button", { name: "Private" })
01:56 idle 3.1s
01:59 click getByRole("button", { name: "Public" })
02:00 click getByRole("button", { name: "Private" })
02:00 idle 9.1s
02:09 click getByRole("button", { name: "All" })
02:09 idle 8.4s
02:18 idle 5.4s
02:23 idle 3s
02:26 click getByRole("button", { name: "Public" })
02:27 click getByRole("button", { name: "All" })
02:27 idle 8.5s
02:36 idle 10s
02:46 idle 8s
02:54 idle 3.3s
02:57 click getByRole("button", { name: "All" })
02:58 click getByRole("button", { name: "Public" })
02:59 click getByRole("button", { name: "Private" })
03:00 idle 5.7s
03:05 click getByRole("button", { name: "All" })
03:05 idle 2.3s
03:08 idle 4.3s
03:12 click getByRole("button", { name: "Fixed\n                      About 1–2% higher" })
03:12 click getByRole("button", { name: "Floating" })
03:13 idle 5.1s
03:18 click getByRole("button", { name: "Term loan" })
03:19 click locator("aside#hlc-filters-panel > div:nth-of-type(3) > fieldset:nth-of-type(5) > div > button:nth-of-type(2) > span:nth-of-type(1)")
03:20 click getByRole("button", { name: "Term loan" })
03:21 idle 2s
03:23 idle 2.9s
03:26 idle 4.3s
03:30 idle 10s
03:40 idle 9.4s
03:50 idle 8s
03:58 idle 2.1s
04:00 click locator("legend#hlc-borrower-label > span > span:nth-of-type(2) > button > span > svg > rect")
04:00 click locator("legend#hlc-borrower-label > span > span:nth-of-type(2) > button > span > svg > rect")
04:01 click locator("legend#hlc-borrower-label > span > span:nth-of-type(2) > button > span > svg > rect")
04:03 click locator("aside#hlc-filters-panel > div:nth-of-type(2)")
04:04 click locator("legend#hlc-borrower-label > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
04:05 idle 8.9s
04:15 click locator("aside#hlc-filters-panel > div:nth-of-type(2)")
04:15 idle 8.3s
04:24 idle 3.1s
04:27 click locator("legend#hlc-concessions-label > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
04:27 click locator("legend#hlc-concessions-label > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
04:28 idle 3.9s
04:31 click getByRole("region", { name: "Filters" })
04:33 click locator("legend#hlc-concessions-label > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
04:34 click locator("legend#hlc-concessions-label > span > span:nth-of-type(2) > button > span > svg > rect")
04:36 click locator("legend#hlc-concessions-label > span > span:nth-of-type(2) > button > span > svg > rect")
04:36 click locator("legend#hlc-concessions-label > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
04:38 click locator("legend#hlc-concessions-label > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(1)")
04:40 click locator("legend#hlc-concessions-label > span > span:nth-of-type(2) > button > span > svg > circle:nth-of-type(2)")
04:42 click getByRole("link", { name: "Learn more" })
04:42 nav /pages/explore-banks.html -> /pages/concessions.html
04:43 idle 8.9s
04:52 idle 10s
05:02 idle 8s
05:10 idle 2.5s
05:12 click locator("section#bank-rates > div > div > ul > li:nth-of-type(3) > span:nth-of-type(2)")
05:12 idle 9.4s
05:22 idle 5.1s
05:26 click locator("#guide-swap")
05:27 idle 7.7s
05:36 idle 2.4s
05:38 click getByRole("banner")
05:38 idle 2.8s
05:41 nav /pages/concessions.html -> /pages/explore-banks.html
05:42 idle 8.3s
05:50 idle 8s
05:58 idle 10s
06:08 idle 8s
06:16 idle 8s
06:24 idle 8s
06:32 idle 8s
06:40 idle 8s
06:48 idle 10s
06:58 idle 8s
07:06 idle 8s
07:14 idle 10s
07:24 idle 8s
07:32 idle 10s
07:42 idle 8s
07:50 idle 8s
07:58 idle 8s
08:06 idle 10s
08:16 idle 8s
08:24 idle 10s
08:34 idle 10s
08:44 idle 10s

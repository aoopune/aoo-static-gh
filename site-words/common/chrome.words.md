---
id: chrome
title_for_humans: "Nav and footer (every page)"
live_path: "partials/"
live_url: "/"
body_master_today: "partials/global-nav.html"
layout_today: "n/a"
coverage_status: complete
inventoried_at: "2026-08-26"
human_howto: "Edit only visible wording under each ## heading. Leave {#ids} alone. Ignore *.assistive.words.md files."
omitted_by_policy:
  - "Contact phone/email/WhatsApp values from data/site-contacts.json"
  - "Education loan nav items (gated, not live)"
  - "Screen-reader / frame-title spoken names → sibling *.assistive.words.md (do not edit for marketing)"
---

# Nav and footer (every page)

Edit the **visible text under each heading**. Leave the `{#…}` code alone.

You only need this file for wording people **see**. Spoken/screen-reader names live in a separate file you can ignore.

Use **Jump to** below to open any line in this file.

## Jump to

- [Top bar — nav landmark name](#nav.aria_label)
- [Top bar — logo link](#nav.home_aria)
- [Top bar — Guide](#nav.guide)
- [Top bar — Tools](#nav.tools)
- [Top bar — Support](#nav.support)
- [Top bar — About](#nav.about)
- [Guide flyout — column title](#nav.guide_menu_header)
- [Guide flyout — Overview](#nav.guide_overview)
- [Guide flyout — Documents](#nav.guide_documents)
- [Guide flyout — Tax benefits](#nav.guide_tax)
- [Guide flyout — Concessions](#nav.guide_concessions)
- [Guide flyout — Insurance](#nav.guide_insurance)
- [Guide flyout — If something goes wrong](#nav.guide_complaints)
- [Tools flyout — column title](#nav.tools_menu_header)
- [Tools flyout — Calculators](#nav.tools_calculators)
- [Tools flyout — Project Bank Finder](#nav.tools_project)
- [Support flyout — title](#nav.support_menu_header)
- [Support flyout — Email us label](#nav.support_email)
- [Support flyout — Call us label](#nav.support_call)
- [Support flyout — Message us label](#nav.support_message)
- [Support flyout — WhatsApp screen-reader note](#nav.support_whatsapp_sr)
- [Guide side/top local nav landmark](#localnav.aria_label)
- [Guide local nav — Guide title link](#localnav.title)
- [Guide local nav — Overview](#localnav.overview)
- [Guide local nav — Documents](#localnav.documents)
- [Guide local nav — Tax benefits](#localnav.tax)
- [Guide local nav — Concessions](#localnav.concessions)
- [Guide local nav — Insurance](#localnav.insurance)
- [Guide local nav — If something goes wrong](#localnav.complaints)
- [Guide local nav — Explore banks button](#localnav.cta_explore)
- [Footer landmark](#footer.aria_label)
- [Footer logo link](#footer.home_aria)
- [Footer — Guide column](#footer.guide_heading)
- [Footer — Tools column](#footer.tools_heading)
- [Footer — Company column](#footer.company_heading)
- [Footer — Support column](#footer.support_heading)
- [Footer — Connect column](#footer.connect_heading)
- [Footer link — Overview](#footer.overview)
- [Footer link — Documents](#footer.documents)
- [Footer link — Tax benefits](#footer.tax)
- [Footer link — Concessions](#footer.concessions)
- [Footer link — Insurance](#footer.insurance)
- [Footer link — If something goes wrong](#footer.complaints)
- [Footer link — Calculators](#footer.calculators)
- [Footer link — Project Bank Finder](#footer.project)
- [Footer link — About](#footer.about)
- [Footer link — Privacy Policy](#footer.privacy)
- [Footer link — Terms of Use](#footer.terms)
- [Footer link — Site Map](#footer.sitemap)
- [Footer — Email us](#footer.email_us)
- [Footer — Call us](#footer.call_us)
- [Footer — Message us](#footer.message_us)
- [Footer — WhatsApp screen-reader note](#footer.whatsapp_sr)
- [Footer — LinkedIn link label](#footer.linkedin)
- [Footer — LinkedIn screen-reader note](#footer.linkedin_sr)
- [Bottom CTA band — title](#prefooter.title)
- [Bottom CTA band — lead line 1](#prefooter.lead_line1)
- [Bottom CTA band — lead line 2](#prefooter.lead_line2)
- [Bottom CTA band — button](#prefooter.cta)
- [Help strip — opening line](#help_strip.need_help)
- [Help strip — Chat now](#help_strip.chat)
- [Help strip — chat screen-reader note](#help_strip.chat_sr)
- [Help strip — or call](#help_strip.or_call)
- [alt](#t.shroffin.63)
- [text](#t.compare.64)
- [text](#t.schemes.65)
- [text](#t.faq.66)
- [text](#t.education.67)
- [aria-label](#t.color_theme.68)
- [aria-label](#t.default.69)
- [aria-label](#t.light.70)
- [aria-label](#t.dark.71)
- [aria-label](#t.official_resources.72)
- [text](#t.disclaimer.73)
- [text](#t.shroffin_is_not_a_bank_a_non_banking_financial_c.74)
- [text](#t.even_so_we_try_our_best_for_you_we_show_each_len.75)
- [text](#t.read_the_full_disclaimer.76)
- [text](#t.we_take_each_lender_s_terms_and_check_them_with_.77)
- [text](#t.the_rates_and_rules_we_show_can_change_the_ones_.78)
- [text](#t.seeing_a_lender_does_not_mean_they_will_lend_to_.79)
- [text](#t.if_you_take_the_loan_the_agreement_is_with_the_l.80)
- [text](#t.copyright_2026_shroffin_all_rights_reserved.81)
- [text](#t.reserve_bank_of_india.82)
- [text](#t.opens_official_rbi_page.83)
- [text](#t.national_housing_bank.84)
- [text](#t.opens_official_nhb_page.85)
- [text](#t.irdai.86)
- [text](#t.opens_official_irdai_page.87)
- [text](#t.national_consumer_helpline.88)
- [text](#t.opens_official_national_consumer_helpline_page.89)
- [text](#t.income_tax_department.90)
- [text](#t.opens_official_income_tax_department_page.91)
- [text](#t.function_var_key_shroffin_color_preference_var_r.92)
- [aria-label](#t.get_help.93)
- [text](#t.explore_banks_prefooter_title.94)
- [text](#t.explore_banks_prefooter_lead.95)
- [text](#t.join_n_function_rendersitehelpstrip_filerel_if_s.96)
- [text](#t.theme_boot_slot_from_partials_theme_boot_html_ph.97)
- [text](#t.rendernav_filerel_t.98)
- [text](#t.function_applyfooter_html_filerel_return_replace.99)
- [text](#t.renderfooter_filerel_t.100)
- [text](#t.function_applyguidelocalnav_html_filerel_if_guid.101)
- [text](#t.renderguidelocalnav_filerel_t.102)
- [text](#t.function_applythemeboot_html_return_replacemarke.103)
- [text](#t.renderthemeboot_null_function_assertchrome_html_.104)
- [text](#t.class_globalnav_test_html_throw_new_error_refusi.105)
- [text](#t.class_site_footer_test_html_throw_new_error_refu.106)
- [Help strip — landmark name](#help_strip.landmark)

<a id="nav.aria_label"></a>

## Top bar — nav landmark name {#nav.aria_label}
Global

<a id="nav.home_aria"></a>

## Top bar — logo link {#nav.home_aria}
Shroffin Home

<a id="nav.guide"></a>

## Top bar — Guide {#nav.guide}
Guide

<a id="nav.tools"></a>

## Top bar — Tools {#nav.tools}
Tools

<a id="nav.support"></a>

## Top bar — Support {#nav.support}
Support

<a id="nav.about"></a>

## Top bar — About {#nav.about}
About

<a id="nav.guide_menu_header"></a>

## Guide flyout — column title {#nav.guide_menu_header}
Explore guide

<a id="nav.guide_overview"></a>

## Guide flyout — Overview {#nav.guide_overview}
Overview

<a id="nav.guide_documents"></a>

## Guide flyout — Documents {#nav.guide_documents}
Documents

<a id="nav.guide_tax"></a>

## Guide flyout — Tax benefits {#nav.guide_tax}
Tax benefits

<a id="nav.guide_concessions"></a>

## Guide flyout — Concessions {#nav.guide_concessions}
Concessions

<a id="nav.guide_insurance"></a>

## Guide flyout — Insurance {#nav.guide_insurance}
Insurance

<a id="nav.guide_complaints"></a>

## Guide flyout — If something goes wrong {#nav.guide_complaints}
If something goes wrong

<a id="nav.tools_menu_header"></a>

## Tools flyout — column title {#nav.tools_menu_header}
Explore tools

<a id="nav.tools_calculators"></a>

## Tools flyout — Calculators {#nav.tools_calculators}
Calculators

<a id="nav.tools_project"></a>

## Tools flyout — Project Bank Finder {#nav.tools_project}
Project Bank Finder

<a id="nav.support_menu_header"></a>

## Support flyout — title {#nav.support_menu_header}
Get support

<a id="nav.support_email"></a>

## Support flyout — Email us label {#nav.support_email}
Email us

<a id="nav.support_call"></a>

## Support flyout — Call us label {#nav.support_call}
Call us

<a id="nav.support_message"></a>

## Support flyout — Message us label {#nav.support_message}
Message us

<a id="nav.support_whatsapp_sr"></a>

## Support flyout — WhatsApp screen-reader note {#nav.support_whatsapp_sr}
(opens WhatsApp)

<a id="localnav.aria_label"></a>

## Guide side/top local nav landmark {#localnav.aria_label}
Guide

<a id="localnav.title"></a>

## Guide local nav — Guide title link {#localnav.title}
Guide

<a id="localnav.overview"></a>

## Guide local nav — Overview {#localnav.overview}
Overview

<a id="localnav.documents"></a>

## Guide local nav — Documents {#localnav.documents}
Documents

<a id="localnav.tax"></a>

## Guide local nav — Tax benefits {#localnav.tax}
Tax benefits

<a id="localnav.concessions"></a>

## Guide local nav — Concessions {#localnav.concessions}
Concessions

<a id="localnav.insurance"></a>

## Guide local nav — Insurance {#localnav.insurance}
Insurance

<a id="localnav.complaints"></a>

## Guide local nav — If something goes wrong {#localnav.complaints}
If something goes wrong

<a id="localnav.cta_explore"></a>

## Guide local nav — Explore banks button {#localnav.cta_explore}
Explore banks

<a id="footer.aria_label"></a>

## Footer landmark {#footer.aria_label}
Shroffin Footer

<a id="footer.home_aria"></a>

## Footer logo link {#footer.home_aria}
Shroffin Home

<a id="footer.guide_heading"></a>

## Footer — Guide column {#footer.guide_heading}
Guide

<a id="footer.tools_heading"></a>

## Footer — Tools column {#footer.tools_heading}
Tools

<a id="footer.company_heading"></a>

## Footer — Company column {#footer.company_heading}
Company

<a id="footer.support_heading"></a>

## Footer — Support column {#footer.support_heading}
Support

<a id="footer.connect_heading"></a>

## Footer — Connect column {#footer.connect_heading}
Connect

<a id="footer.overview"></a>

## Footer link — Overview {#footer.overview}
Overview

<a id="footer.documents"></a>

## Footer link — Documents {#footer.documents}
Documents

<a id="footer.tax"></a>

## Footer link — Tax benefits {#footer.tax}
Tax benefits

<a id="footer.concessions"></a>

## Footer link — Concessions {#footer.concessions}
Concessions

<a id="footer.insurance"></a>

## Footer link — Insurance {#footer.insurance}
Insurance

<a id="footer.complaints"></a>

## Footer link — If something goes wrong {#footer.complaints}
If something goes wrong

<a id="footer.calculators"></a>

## Footer link — Calculators {#footer.calculators}
Calculators

<a id="footer.project"></a>

## Footer link — Project Bank Finder {#footer.project}
Project Bank Finder

<a id="footer.about"></a>

## Footer link — About {#footer.about}
About

<a id="footer.privacy"></a>

## Footer link — Privacy Policy {#footer.privacy}
Privacy Policy

<a id="footer.terms"></a>

## Footer link — Terms of Use {#footer.terms}
Terms of Use

<a id="footer.sitemap"></a>

## Footer link — Site Map {#footer.sitemap}
Site Map

<a id="footer.email_us"></a>

## Footer — Email us {#footer.email_us}
Email us

<a id="footer.call_us"></a>

## Footer — Call us {#footer.call_us}
Call us

<a id="footer.message_us"></a>

## Footer — Message us {#footer.message_us}
Message us

<a id="footer.whatsapp_sr"></a>

## Footer — WhatsApp screen-reader note {#footer.whatsapp_sr}
(opens WhatsApp)

<a id="footer.linkedin"></a>

## Footer — LinkedIn link label {#footer.linkedin}
LinkedIn

<a id="footer.linkedin_sr"></a>

## Footer — LinkedIn screen-reader note {#footer.linkedin_sr}
(opens LinkedIn page)

<a id="prefooter.title"></a>

## Bottom CTA band — title {#prefooter.title}
Get started with Shroffin.

<a id="prefooter.lead_line1"></a>

## Bottom CTA band — lead line 1 {#prefooter.lead_line1}
Compare every home loan bank side by side,

<a id="prefooter.lead_line2"></a>

## Bottom CTA band — lead line 2 {#prefooter.lead_line2}
then apply once to the banks you pick.

<a id="prefooter.cta"></a>

## Bottom CTA band — button {#prefooter.cta}
Explore banks

<a id="help_strip.need_help"></a>

## Help strip — opening line {#help_strip.need_help}
Need some help?

<a id="help_strip.chat"></a>

## Help strip — Chat now {#help_strip.chat}
Chat now

<a id="help_strip.chat_sr"></a>

## Help strip — chat screen-reader note {#help_strip.chat_sr}
(opens in a new window)

<a id="help_strip.or_call"></a>

## Help strip — or call {#help_strip.or_call}
or call

<a id="t.shroffin.63"></a>

## alt {#t.shroffin.63}
Shroffin

<a id="t.compare.64"></a>

## text {#t.compare.64}
Compare

<a id="t.schemes.65"></a>

## text {#t.schemes.65}
Schemes

<a id="t.faq.66"></a>

## text {#t.faq.66}
FAQ

<a id="t.education.67"></a>

## text {#t.education.67}
Education

<a id="t.color_theme.68"></a>

## aria-label {#t.color_theme.68}
Color theme

<a id="t.default.69"></a>

## aria-label {#t.default.69}
Default

<a id="t.light.70"></a>

## aria-label {#t.light.70}
Light

<a id="t.dark.71"></a>

## aria-label {#t.dark.71}
Dark

<a id="t.official_resources.72"></a>

## aria-label {#t.official_resources.72}
Official resources

<a id="t.disclaimer.73"></a>

## text {#t.disclaimer.73}
Disclaimer

<a id="t.shroffin_is_not_a_bank_a_non_banking_financial_c.74"></a>

## text {#t.shroffin_is_not_a_bank_a_non_banking_financial_c.74}
Shroffin is not a bank, a Non-Banking Financial Company (NBFC), or a lender. We do not approve, sanction, underwrite, or disburse loans. The lender decides your rate, your fees, and whether you are approved.

<a id="t.even_so_we_try_our_best_for_you_we_show_each_len.75"></a>

## text {#t.even_so_we_try_our_best_for_you_we_show_each_len.75}
Even so, we try our best for you. We show each lender's home loan clearly, one next to the other.

<a id="t.read_the_full_disclaimer.76"></a>

## text {#t.read_the_full_disclaimer.76}
Read the full disclaimer

<a id="t.we_take_each_lender_s_terms_and_check_them_with_.77"></a>

## text {#t.we_take_each_lender_s_terms_and_check_them_with_.77}
We take each lender's terms and check them with that lender. Then we put the home loans next to each other, so you can compare. We can also help you apply.

<a id="t.the_rates_and_rules_we_show_can_change_the_ones_.78"></a>

## text {#t.the_rates_and_rules_we_show_can_change_the_ones_.78}
The rates and rules we show can change. The ones the lender gives you can be different. That still depends on your credit, income, documents, the property, and the checks the lender makes. Some of this may not apply to you, to your city, or when you apply.

<a id="t.seeing_a_lender_does_not_mean_they_will_lend_to_.79"></a>

## text {#t.seeing_a_lender_does_not_mean_they_will_lend_to_.79}
Seeing a lender does not mean they will lend to you. We cannot make a lender say yes, or take back a no. When they answer, we go through it with you, and we help you decide what to do. You still choose. What the lender writes is what counts.

<a id="t.if_you_take_the_loan_the_agreement_is_with_the_l.80"></a>

## text {#t.if_you_take_the_loan_the_agreement_is_with_the_l.80}
If you take the loan, the agreement is with the lender, not with us. We do not become your lender. Read the sanction letter, the key fact statement, and the loan documents before you accept.

<a id="t.copyright_2026_shroffin_all_rights_reserved.81"></a>

## text {#t.copyright_2026_shroffin_all_rights_reserved.81}
Copyright © 2026 Shroffin. All rights reserved.

<a id="t.reserve_bank_of_india.82"></a>

## text {#t.reserve_bank_of_india.82}
Reserve Bank of India

<a id="t.opens_official_rbi_page.83"></a>

## text {#t.opens_official_rbi_page.83}
(opens official RBI page)

<a id="t.national_housing_bank.84"></a>

## text {#t.national_housing_bank.84}
National Housing Bank

<a id="t.opens_official_nhb_page.85"></a>

## text {#t.opens_official_nhb_page.85}
(opens official NHB page)

<a id="t.irdai.86"></a>

## text {#t.irdai.86}
IRDAI

<a id="t.opens_official_irdai_page.87"></a>

## text {#t.opens_official_irdai_page.87}
(opens official IRDAI page)

<a id="t.national_consumer_helpline.88"></a>

## text {#t.national_consumer_helpline.88}
National Consumer Helpline

<a id="t.opens_official_national_consumer_helpline_page.89"></a>

## text {#t.opens_official_national_consumer_helpline_page.89}
(opens official National Consumer Helpline page)

<a id="t.income_tax_department.90"></a>

## text {#t.income_tax_department.90}
Income Tax Department

<a id="t.opens_official_income_tax_department_page.91"></a>

## text {#t.opens_official_income_tax_department_page.91}
(opens official Income Tax Department page)

<a id="t.function_var_key_shroffin_color_preference_var_r.92"></a>

## text {#t.function_var_key_shroffin_color_preference_var_r.92}
(function () {
  var KEY = 'shroffin-color-preference';
  var root = document.querySelector('.site-footer-theme');
  if (!root) return;
  var buttons = root.querySelectorAll('[data-theme-pref]');
  function currentPref() {
    var p = null;
    try { p = localStorage.getItem(KEY); } catch (e) {}
    if (p === 'dark' || p === 'light' || p === 'system') return p;
    return 'dark';
  }
  function syncPressed() {
    var pref = currentPref();
    buttons.forEach(function (btn) {
      var on = btn.getAttribute('data-theme-pref') === pref;
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.classList.toggle('is-active', on);
    });
  }
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = btn.getAttribute('data-theme-pref');
      if (typeof window.__shroffinApplyColorPreference === 'function') {
        window.__shroffinApplyColorPreference(next);
      } else {
        try { localStorage.setItem(KEY, next); } catch (e) {}
        location.reload();
      }
      syncPressed();
    });
  });
  syncPressed();
  document.addEventListener('shroffin-theme-change', syncPressed);
})();

<a id="t.get_help.93"></a>

## aria-label {#t.get_help.93}
Get help

<a id="t.explore_banks_prefooter_title.94"></a>

## text {#t.explore_banks_prefooter_title.94}
' +
      EXPLORE_BANKS_PREFOOTER_TITLE +
      '

<a id="t.explore_banks_prefooter_lead.95"></a>

## text {#t.explore_banks_prefooter_lead.95}
' +
      EXPLORE_BANKS_PREFOOTER_LEAD +
      '

<a id="t.join_n_function_rendersitehelpstrip_filerel_if_s.96"></a>

## text {#t.join_n_function_rendersitehelpstrip_filerel_if_s.96}
'
  ].join('\n');
}

function renderSiteHelpStrip(fileRel) {
  if (SKIP_SITE_HELP_STRIP.has(fileRel)) return '';
  return [
    '

<a id="t.theme_boot_slot_from_partials_theme_boot_html_ph.97"></a>

## text {#t.theme_boot_slot_from_partials_theme_boot_html_ph.97}
theme-boot slot from partials/theme-boot.html (Phase I live). */
function renderThemeBoot() {
  return indentBlock(
    fs.readFileSync(path.join(root, 'partials', 'theme-boot.html'), 'utf8').trim(),
    2
  );
}

function replaceMarked(source, startMarker, endMarker, replacement, fallbackRe) {
  if (source.includes(startMarker) && source.includes(endMarker)) {
    const pattern = new RegExp(
      '[ \\t]*' +
        startMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
        '[\\s\\S]*?' +
        endMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    if (!pattern.test(source)) {
      throw new Error('Chrome markers present but not replaceable');
    }
    return source.replace(pattern, replacement);
  }
  if (fallbackRe && fallbackRe.test(source)) {
    return source.replace(fallbackRe, replacement);
  }
  return source;
}

function applyNav(html, fileRel) {
  return replaceMarked(
    html,
    '

<a id="t.rendernav_filerel_t.98"></a>

## text {#t.rendernav_filerel_t.98}
',
    renderNav(fileRel),
    /[ \t]*

<a id="t.function_applyfooter_html_filerel_return_replace.99"></a>

## text {#t.function_applyfooter_html_filerel_return_replace.99}
/
  );
}

function applyFooter(html, fileRel) {
  return replaceMarked(
    html,
    '

<a id="t.renderfooter_filerel_t.100"></a>

## text {#t.renderfooter_filerel_t.100}
',
    renderFooter(fileRel),
    /[ \t]*

<a id="t.function_applyguidelocalnav_html_filerel_if_guid.101"></a>

## text {#t.function_applyguidelocalnav_html_filerel_if_guid.101}
/
  );
}

function applyGuideLocalnav(html, fileRel) {
  if (!GUIDE_PAGES.has(fileRel)) return html;
  return replaceMarked(
    html,
    '

<a id="t.renderguidelocalnav_filerel_t.102"></a>

## text {#t.renderguidelocalnav_filerel_t.102}
',
    renderGuideLocalnav(fileRel),
    /[ \t]*

<a id="t.function_applythemeboot_html_return_replacemarke.103"></a>

## text {#t.function_applythemeboot_html_return_replacemarke.103}
/
  );
}

function applyThemeBoot(html) {
  return replaceMarked(
    html,
    '

<a id="t.renderthemeboot_null_function_assertchrome_html_.104"></a>

## text {#t.renderthemeboot_null_function_assertchrome_html_.104}
',
    renderThemeBoot(),
    null
  );
}

function assertChrome(html, fileRel) {
  if (
    html.includes('

<a id="t.class_globalnav_test_html_throw_new_error_refusi.105"></a>

## text {#t.class_globalnav_test_html_throw_new_error_refusi.105}
') &&
    !/class="globalnav"/.test(html)
  ) {
    throw new Error(
      'Refusing incomplete page ' + fileRel + ': nav markers without globalnav'
    );
  }
  if (
    html.includes('

<a id="t.class_site_footer_test_html_throw_new_error_refu.106"></a>

## text {#t.class_site_footer_test_html_throw_new_error_refu.106}
') &&
    !/class="site-footer"/.test(html)
  ) {
    throw new Error(
      'Refusing incomplete page ' + fileRel + ': footer markers without site-footer'
    );
  }
  if (
    html.includes('

<a id="help_strip.landmark"></a>

## Help strip — landmark name {#help_strip.landmark}
Get help

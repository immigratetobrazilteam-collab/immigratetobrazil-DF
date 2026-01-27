
// Master JS for State: DF - Persona: Institutional Diplomat
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 768;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const df_index_section_immigrate_to_distrito_federal = document.getElementById('df-index-section-immigrate-to-distrito-federal');
  if (df_index_section_immigrate_to_distrito_federal) {
    gsap.fromTo('#df-index-section-immigrate-to-distrito-federal', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_index_form_immigrate_to_distrito_federal = document.getElementById('df-index-form-immigrate-to-distrito-federal');
  if (df_index_form_immigrate_to_distrito_federal) {
    gsap.from('#df-index-form-immigrate-to-distrito-federal input, #df-index-form-immigrate-to-distrito-federal textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_index_section_state_vibe = document.getElementById('df-index-section-state-vibe');
  if (df_index_section_state_vibe) {
    gsap.fromTo('#df-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_index_section_quick_facts_snapshot = document.getElementById('df-index-section-quick-facts-snapshot');
  if (df_index_section_quick_facts_snapshot) {
    gsap.fromTo('#df-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_index_section_distrito_federal_map = document.getElementById('df-index-section-distrito-federal-map');
  if (df_index_section_distrito_federal_map) {
    gsap.fromTo('#df-index-section-distrito-federal-map', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_index_section_cost_of_living_distrito_federal = document.getElementById('df-index-section-cost-of-living-distrito-federal');
  if (df_index_section_cost_of_living_distrito_federal) {
    gsap.fromTo('#df-index-section-cost-of-living-distrito-federal', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_index_section_government_context = document.getElementById('df-index-section-government-context');
  if (df_index_section_government_context) {
    gsap.fromTo('#df-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_index_hero_immigration_notes = document.getElementById('df-index-hero-immigration-notes');
  if (df_index_hero_immigration_notes) {
    gsap.fromTo('#df-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.24, ease: 'linear'});
  }

  const df_index_list_common_applicant_profiles = document.getElementById('df-index-list-common-applicant-profiles');
  if (df_index_list_common_applicant_profiles) {
    gsap.from('#df-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_index_list_economic_drivers = document.getElementById('df-index-list-economic-drivers');
  if (df_index_list_economic_drivers) {
    gsap.from('#df-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_index_section_demographics = document.getElementById('df-index-section-demographics');
  if (df_index_section_demographics) {
    gsap.fromTo('#df-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_index_section_regional_challenges = document.getElementById('df-index-section-regional-challenges');
  if (df_index_section_regional_challenges) {
    gsap.fromTo('#df-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_index_section_regional_opportunities = document.getElementById('df-index-section-regional-opportunities');
  if (df_index_section_regional_opportunities) {
    gsap.fromTo('#df-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_index_section_culture_daily_life = document.getElementById('df-index-section-culture-daily-life');
  if (df_index_section_culture_daily_life) {
    gsap.fromTo('#df-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_index_list_local_language_expressions = document.getElementById('df-index-list-local-language-expressions');
  if (df_index_list_local_language_expressions) {
    gsap.from('#df-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_index_list_food_cuisine = document.getElementById('df-index-list-food-cuisine');
  if (df_index_list_food_cuisine) {
    gsap.from('#df-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_index_list_festivals_traditions = document.getElementById('df-index-list-festivals-traditions');
  if (df_index_list_festivals_traditions) {
    gsap.from('#df-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_index_list_music_artistic_expression = document.getElementById('df-index-list-music-artistic-expression');
  if (df_index_list_music_artistic_expression) {
    gsap.from('#df-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_index_list_sports_recreation = document.getElementById('df-index-list-sports-recreation');
  if (df_index_list_sports_recreation) {
    gsap.from('#df-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_index_list_landmarks_historical_sites = document.getElementById('df-index-list-landmarks-historical-sites');
  if (df_index_list_landmarks_historical_sites) {
    gsap.from('#df-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_index_list_natural_features = document.getElementById('df-index-list-natural-features');
  if (df_index_list_natural_features) {
    gsap.from('#df-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_index_list_parks_protected_areas = document.getElementById('df-index-list-parks-protected-areas');
  if (df_index_list_parks_protected_areas) {
    gsap.from('#df-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_index_list_museums_cultural_institutions = document.getElementById('df-index-list-museums-cultural-institutions');
  if (df_index_list_museums_cultural_institutions) {
    gsap.from('#df-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_index_section_image_gallery = document.getElementById('df-index-section-image-gallery');
  if (df_index_section_image_gallery) {
    gsap.fromTo('#df-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_index_section_useful_government_links = document.getElementById('df-index-section-useful-government-links');
  if (df_index_section_useful_government_links) {
    gsap.fromTo('#df-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_index_hero_federal_police_immigration_links = document.getElementById('df-index-hero-federal-police-immigration-links');
  if (df_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#df-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.24, ease: 'linear'});
  }

  const df_index_section_external_references = document.getElementById('df-index-section-external-references');
  if (df_index_section_external_references) {
    gsap.fromTo('#df-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_index_list_immigration_services_overview = document.getElementById('df-index-list-immigration-services-overview');
  if (df_index_list_immigration_services_overview) {
    gsap.from('#df-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_index_section_why_immigrate_here = document.getElementById('df-index-section-why-immigrate-here');
  if (df_index_section_why_immigrate_here) {
    gsap.fromTo('#df-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_index_list_travel_services = document.getElementById('df-index-list-travel-services');
  if (df_index_list_travel_services) {
    gsap.from('#df-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_index_list_how_the_process_works = document.getElementById('df-index-list-how-the-process-works');
  if (df_index_list_how_the_process_works) {
    gsap.from('#df-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_index_section__frequently_asked_questions_about_living_in_distrito_federal_ = document.getElementById('df-index-section--frequently-asked-questions-about-living-in-distrito-federal-');
  if (df_index_section__frequently_asked_questions_about_living_in_distrito_federal_) {
    gsap.fromTo('#df-index-section--frequently-asked-questions-about-living-in-distrito-federal-', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_contactcta_section_get_started_in_distrito_federal = document.getElementById('df-contactcta-section-get-started-in-distrito-federal');
  if (df_contactcta_section_get_started_in_distrito_federal) {
    gsap.fromTo('#df-contactcta-section-get-started-in-distrito-federal', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('df-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (df_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#df-renouncingcitizenship-form-renounce-brazilian-citizenship input, #df-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_list_quick_facts = document.getElementById('df-renouncingcitizenship-list-quick-facts');
  if (df_renouncingcitizenship_list_quick_facts) {
    gsap.from('#df-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('df-renouncingcitizenship-list-common-challenges-applicants-face');
  if (df_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#df-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('df-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (df_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#df-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_section_renunciation_overview = document.getElementById('df-renouncingcitizenship-section-renunciation-overview');
  if (df_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#df-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_form_who_is_this_for = document.getElementById('df-renouncingcitizenship-form-who-is-this-for');
  if (df_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#df-renouncingcitizenship-form-who-is-this-for input, #df-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_list_required_documents = document.getElementById('df-renouncingcitizenship-list-required-documents');
  if (df_renouncingcitizenship_list_required_documents) {
    gsap.from('#df-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_list_process = document.getElementById('df-renouncingcitizenship-list-process');
  if (df_renouncingcitizenship_list_process) {
    gsap.from('#df-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_section_timelines_deadlines = document.getElementById('df-renouncingcitizenship-section-timelines-deadlines');
  if (df_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#df-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_section_fees_costs = document.getElementById('df-renouncingcitizenship-section-fees-costs');
  if (df_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#df-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('df-renouncingcitizenship-list-risks-common-mistakes');
  if (df_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#df-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('df-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (df_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_section_distrito_federal_specific_context = document.getElementById('df-renouncingcitizenship-section-distrito-federal-specific-context');
  if (df_renouncingcitizenship_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-renouncingcitizenship-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_section_what_our_clients_say = document.getElementById('df-renouncingcitizenship-section-what-our-clients-say');
  if (df_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#df-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('df-renouncingcitizenship-section-frequently-asked-questions');
  if (df_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#df-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_section_international_support = document.getElementById('df-renouncingcitizenship-section-international-support');
  if (df_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#df-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_list_our_credentials = document.getElementById('df-renouncingcitizenship-list-our-credentials');
  if (df_renouncingcitizenship_list_our_credentials) {
    gsap.from('#df-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_list_related_services = document.getElementById('df-renouncingcitizenship-list-related-services');
  if (df_renouncingcitizenship_list_related_services) {
    gsap.from('#df-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('df-renouncingcitizenship-section-youre-in-good-hands');
  if (df_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#df-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_renouncingcitizenship_section_21 = document.getElementById('df-renouncingcitizenship-section-21');
  if (df_renouncingcitizenship_section_21) {
    gsap.fromTo('#df-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('df-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (df_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#df-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #df-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_list_quick_facts = document.getElementById('df-provisional-list-quick-facts');
  if (df_provisional_list_quick_facts) {
    gsap.from('#df-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_list_common_challenges_applicants_face = document.getElementById('df-provisional-list-common-challenges-applicants-face');
  if (df_provisional_list_common_challenges_applicants_face) {
    gsap.from('#df-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_list_how_we_solve_these_challenges = document.getElementById('df-provisional-list-how-we-solve-these-challenges');
  if (df_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#df-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_section_naturalisation_overview = document.getElementById('df-provisional-section-naturalisation-overview');
  if (df_provisional_section_naturalisation_overview) {
    gsap.fromTo('#df-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_form_who_is_this_naturalisation_for = document.getElementById('df-provisional-form-who-is-this-naturalisation-for');
  if (df_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#df-provisional-form-who-is-this-naturalisation-for input, #df-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_list_required_documents = document.getElementById('df-provisional-list-required-documents');
  if (df_provisional_list_required_documents) {
    gsap.from('#df-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_list_application_process = document.getElementById('df-provisional-list-application-process');
  if (df_provisional_list_application_process) {
    gsap.from('#df-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_section_timelines_deadlines = document.getElementById('df-provisional-section-timelines-deadlines');
  if (df_provisional_section_timelines_deadlines) {
    gsap.fromTo('#df-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_section_fees_costs = document.getElementById('df-provisional-section-fees-costs');
  if (df_provisional_section_fees_costs) {
    gsap.fromTo('#df-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_list_risks_common_mistakes = document.getElementById('df-provisional-list-risks-common-mistakes');
  if (df_provisional_list_risks_common_mistakes) {
    gsap.from('#df-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_section_diy_vs_professional_assistance = document.getElementById('df-provisional-section-diy-vs-professional-assistance');
  if (df_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_section_distrito_federal_specific_context = document.getElementById('df-provisional-section-distrito-federal-specific-context');
  if (df_provisional_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-provisional-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_section_what_our_clients_say = document.getElementById('df-provisional-section-what-our-clients-say');
  if (df_provisional_section_what_our_clients_say) {
    gsap.fromTo('#df-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_section_frequently_asked_questions = document.getElementById('df-provisional-section-frequently-asked-questions');
  if (df_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#df-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_section_international_support = document.getElementById('df-provisional-section-international-support');
  if (df_provisional_section_international_support) {
    gsap.fromTo('#df-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_list_our_credentials = document.getElementById('df-provisional-list-our-credentials');
  if (df_provisional_list_our_credentials) {
    gsap.from('#df-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_list_related_services = document.getElementById('df-provisional-list-related-services');
  if (df_provisional_list_related_services) {
    gsap.from('#df-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_section_youre_in_good_hands = document.getElementById('df-provisional-section-youre-in-good-hands');
  if (df_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#df-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_provisional_section_21 = document.getElementById('df-provisional-section-21');
  if (df_provisional_section_21) {
    gsap.fromTo('#df-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('df-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (df_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#df-special-form-special-naturalisation-in-brazil-for-particular-cases input, #df-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_special_list_quick_facts = document.getElementById('df-special-list-quick-facts');
  if (df_special_list_quick_facts) {
    gsap.from('#df-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_special_list_common_challenges_applicants_face = document.getElementById('df-special-list-common-challenges-applicants-face');
  if (df_special_list_common_challenges_applicants_face) {
    gsap.from('#df-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_special_list_how_we_solve_these_challenges = document.getElementById('df-special-list-how-we-solve-these-challenges');
  if (df_special_list_how_we_solve_these_challenges) {
    gsap.from('#df-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_special_section_naturalisation_overview = document.getElementById('df-special-section-naturalisation-overview');
  if (df_special_section_naturalisation_overview) {
    gsap.fromTo('#df-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_special_form_who_is_this_naturalisation_for = document.getElementById('df-special-form-who-is-this-naturalisation-for');
  if (df_special_form_who_is_this_naturalisation_for) {
    gsap.from('#df-special-form-who-is-this-naturalisation-for input, #df-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_special_list_required_documents = document.getElementById('df-special-list-required-documents');
  if (df_special_list_required_documents) {
    gsap.from('#df-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_special_list_application_process = document.getElementById('df-special-list-application-process');
  if (df_special_list_application_process) {
    gsap.from('#df-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_special_section_timelines_deadlines = document.getElementById('df-special-section-timelines-deadlines');
  if (df_special_section_timelines_deadlines) {
    gsap.fromTo('#df-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_special_section_fees_costs = document.getElementById('df-special-section-fees-costs');
  if (df_special_section_fees_costs) {
    gsap.fromTo('#df-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_special_list_risks_common_mistakes = document.getElementById('df-special-list-risks-common-mistakes');
  if (df_special_list_risks_common_mistakes) {
    gsap.from('#df-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_special_section_diy_vs_professional_assistance = document.getElementById('df-special-section-diy-vs-professional-assistance');
  if (df_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_special_section_distrito_federal_specific_context = document.getElementById('df-special-section-distrito-federal-specific-context');
  if (df_special_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-special-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_special_section_what_our_clients_say = document.getElementById('df-special-section-what-our-clients-say');
  if (df_special_section_what_our_clients_say) {
    gsap.fromTo('#df-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_special_section_frequently_asked_questions = document.getElementById('df-special-section-frequently-asked-questions');
  if (df_special_section_frequently_asked_questions) {
    gsap.fromTo('#df-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_special_section_international_support = document.getElementById('df-special-section-international-support');
  if (df_special_section_international_support) {
    gsap.fromTo('#df-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_special_list_our_credentials = document.getElementById('df-special-list-our-credentials');
  if (df_special_list_our_credentials) {
    gsap.from('#df-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_special_list_related_services = document.getElementById('df-special-list-related-services');
  if (df_special_list_related_services) {
    gsap.from('#df-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_special_section_youre_in_good_hands = document.getElementById('df-special-section-youre-in-good-hands');
  if (df_special_section_youre_in_good_hands) {
    gsap.fromTo('#df-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_special_section_21 = document.getElementById('df-special-section-21');
  if (df_special_section_21) {
    gsap.fromTo('#df-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('df-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (df_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#df-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #df-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_list_quick_facts = document.getElementById('df-ordinary-list-quick-facts');
  if (df_ordinary_list_quick_facts) {
    gsap.from('#df-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_list_common_challenges_applicants_face = document.getElementById('df-ordinary-list-common-challenges-applicants-face');
  if (df_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#df-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_list_how_we_solve_these_challenges = document.getElementById('df-ordinary-list-how-we-solve-these-challenges');
  if (df_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#df-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_section_naturalisation_overview = document.getElementById('df-ordinary-section-naturalisation-overview');
  if (df_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#df-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_form_who_is_this_naturalisation_for = document.getElementById('df-ordinary-form-who-is-this-naturalisation-for');
  if (df_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#df-ordinary-form-who-is-this-naturalisation-for input, #df-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_list_required_documents = document.getElementById('df-ordinary-list-required-documents');
  if (df_ordinary_list_required_documents) {
    gsap.from('#df-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_list_application_process = document.getElementById('df-ordinary-list-application-process');
  if (df_ordinary_list_application_process) {
    gsap.from('#df-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_section_timelines_deadlines = document.getElementById('df-ordinary-section-timelines-deadlines');
  if (df_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#df-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_section_fees_costs = document.getElementById('df-ordinary-section-fees-costs');
  if (df_ordinary_section_fees_costs) {
    gsap.fromTo('#df-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_list_risks_common_mistakes = document.getElementById('df-ordinary-list-risks-common-mistakes');
  if (df_ordinary_list_risks_common_mistakes) {
    gsap.from('#df-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_section_diy_vs_professional_assistance = document.getElementById('df-ordinary-section-diy-vs-professional-assistance');
  if (df_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_section_distrito_federal_specific_context = document.getElementById('df-ordinary-section-distrito-federal-specific-context');
  if (df_ordinary_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-ordinary-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_section_what_our_clients_say = document.getElementById('df-ordinary-section-what-our-clients-say');
  if (df_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#df-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_section_frequently_asked_questions = document.getElementById('df-ordinary-section-frequently-asked-questions');
  if (df_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#df-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_section_international_support = document.getElementById('df-ordinary-section-international-support');
  if (df_ordinary_section_international_support) {
    gsap.fromTo('#df-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_list_our_credentials = document.getElementById('df-ordinary-list-our-credentials');
  if (df_ordinary_list_our_credentials) {
    gsap.from('#df-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_list_related_services = document.getElementById('df-ordinary-list-related-services');
  if (df_ordinary_list_related_services) {
    gsap.from('#df-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_section_youre_in_good_hands = document.getElementById('df-ordinary-section-youre-in-good-hands');
  if (df_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#df-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_ordinary_section_21 = document.getElementById('df-ordinary-section-21');
  if (df_ordinary_section_21) {
    gsap.fromTo('#df-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('df-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (df_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#df-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #df-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_list_quick_facts = document.getElementById('df-extraordinary-list-quick-facts');
  if (df_extraordinary_list_quick_facts) {
    gsap.from('#df-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_list_common_challenges_applicants_face = document.getElementById('df-extraordinary-list-common-challenges-applicants-face');
  if (df_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#df-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_list_how_we_solve_these_challenges = document.getElementById('df-extraordinary-list-how-we-solve-these-challenges');
  if (df_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#df-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_section_naturalisation_overview = document.getElementById('df-extraordinary-section-naturalisation-overview');
  if (df_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#df-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('df-extraordinary-form-who-is-this-naturalisation-for');
  if (df_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#df-extraordinary-form-who-is-this-naturalisation-for input, #df-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_list_required_documents = document.getElementById('df-extraordinary-list-required-documents');
  if (df_extraordinary_list_required_documents) {
    gsap.from('#df-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_list_application_process = document.getElementById('df-extraordinary-list-application-process');
  if (df_extraordinary_list_application_process) {
    gsap.from('#df-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_section_timelines_deadlines = document.getElementById('df-extraordinary-section-timelines-deadlines');
  if (df_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#df-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_section_fees_costs = document.getElementById('df-extraordinary-section-fees-costs');
  if (df_extraordinary_section_fees_costs) {
    gsap.fromTo('#df-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_list_risks_common_mistakes = document.getElementById('df-extraordinary-list-risks-common-mistakes');
  if (df_extraordinary_list_risks_common_mistakes) {
    gsap.from('#df-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_section_diy_vs_professional_assistance = document.getElementById('df-extraordinary-section-diy-vs-professional-assistance');
  if (df_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_section_distrito_federal_specific_context = document.getElementById('df-extraordinary-section-distrito-federal-specific-context');
  if (df_extraordinary_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-extraordinary-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_section_what_our_clients_say = document.getElementById('df-extraordinary-section-what-our-clients-say');
  if (df_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#df-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_section_frequently_asked_questions = document.getElementById('df-extraordinary-section-frequently-asked-questions');
  if (df_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#df-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_section_international_support = document.getElementById('df-extraordinary-section-international-support');
  if (df_extraordinary_section_international_support) {
    gsap.fromTo('#df-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_list_our_credentials = document.getElementById('df-extraordinary-list-our-credentials');
  if (df_extraordinary_list_our_credentials) {
    gsap.from('#df-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_list_related_services = document.getElementById('df-extraordinary-list-related-services');
  if (df_extraordinary_list_related_services) {
    gsap.from('#df-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_section_youre_in_good_hands = document.getElementById('df-extraordinary-section-youre-in-good-hands');
  if (df_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#df-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extraordinary_section_21 = document.getElementById('df-extraordinary-section-21');
  if (df_extraordinary_section_21) {
    gsap.fromTo('#df-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('df-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (df_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#df-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #df-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_list_quick_facts = document.getElementById('df-reacquisitioncitizenship-list-quick-facts');
  if (df_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#df-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('df-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (df_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#df-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('df-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (df_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#df-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('df-reacquisitioncitizenship-section-reacquisition-overview');
  if (df_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#df-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('df-reacquisitioncitizenship-form-who-is-this-for');
  if (df_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#df-reacquisitioncitizenship-form-who-is-this-for input, #df-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_list_required_documents = document.getElementById('df-reacquisitioncitizenship-list-required-documents');
  if (df_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#df-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_list_process = document.getElementById('df-reacquisitioncitizenship-list-process');
  if (df_reacquisitioncitizenship_list_process) {
    gsap.from('#df-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('df-reacquisitioncitizenship-section-timelines-deadlines');
  if (df_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#df-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_section_fees_costs = document.getElementById('df-reacquisitioncitizenship-section-fees-costs');
  if (df_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#df-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('df-reacquisitioncitizenship-list-risks-common-mistakes');
  if (df_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#df-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('df-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (df_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_section_distrito_federal_specific_context = document.getElementById('df-reacquisitioncitizenship-section-distrito-federal-specific-context');
  if (df_reacquisitioncitizenship_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-reacquisitioncitizenship-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('df-reacquisitioncitizenship-section-what-our-clients-say');
  if (df_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#df-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('df-reacquisitioncitizenship-section-frequently-asked-questions');
  if (df_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#df-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_section_international_support = document.getElementById('df-reacquisitioncitizenship-section-international-support');
  if (df_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#df-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_list_our_credentials = document.getElementById('df-reacquisitioncitizenship-list-our-credentials');
  if (df_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#df-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_list_related_services = document.getElementById('df-reacquisitioncitizenship-list-related-services');
  if (df_reacquisitioncitizenship_list_related_services) {
    gsap.from('#df-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('df-reacquisitioncitizenship-section-youre-in-good-hands');
  if (df_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#df-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_reacquisitioncitizenship_section_21 = document.getElementById('df-reacquisitioncitizenship-section-21');
  if (df_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#df-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('df-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (df_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#df-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #df-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_list_quick_facts = document.getElementById('df-scientificresearch-list-quick-facts');
  if (df_scientificresearch_list_quick_facts) {
    gsap.from('#df-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_list_common_challenges_applicants_face = document.getElementById('df-scientificresearch-list-common-challenges-applicants-face');
  if (df_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#df-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('df-scientificresearch-list-how-we-solve-these-challenges');
  if (df_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#df-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_section_residency_overview = document.getElementById('df-scientificresearch-section-residency-overview');
  if (df_scientificresearch_section_residency_overview) {
    gsap.fromTo('#df-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_form_who_is_this_residency_for = document.getElementById('df-scientificresearch-form-who-is-this-residency-for');
  if (df_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#df-scientificresearch-form-who-is-this-residency-for input, #df-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_list_required_documents = document.getElementById('df-scientificresearch-list-required-documents');
  if (df_scientificresearch_list_required_documents) {
    gsap.from('#df-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_list_application_process = document.getElementById('df-scientificresearch-list-application-process');
  if (df_scientificresearch_list_application_process) {
    gsap.from('#df-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_section_timelines_deadlines = document.getElementById('df-scientificresearch-section-timelines-deadlines');
  if (df_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#df-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_section_fees_costs = document.getElementById('df-scientificresearch-section-fees-costs');
  if (df_scientificresearch_section_fees_costs) {
    gsap.fromTo('#df-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_list_risks_common_mistakes = document.getElementById('df-scientificresearch-list-risks-common-mistakes');
  if (df_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#df-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('df-scientificresearch-section-diy-vs-professional-assistance');
  if (df_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_section_distrito_federal_specific_context = document.getElementById('df-scientificresearch-section-distrito-federal-specific-context');
  if (df_scientificresearch_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-scientificresearch-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_section_what_our_clients_say = document.getElementById('df-scientificresearch-section-what-our-clients-say');
  if (df_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#df-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_section_frequently_asked_questions = document.getElementById('df-scientificresearch-section-frequently-asked-questions');
  if (df_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#df-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_section_international_support = document.getElementById('df-scientificresearch-section-international-support');
  if (df_scientificresearch_section_international_support) {
    gsap.fromTo('#df-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_list_our_credentials = document.getElementById('df-scientificresearch-list-our-credentials');
  if (df_scientificresearch_list_our_credentials) {
    gsap.from('#df-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_list_related_services = document.getElementById('df-scientificresearch-list-related-services');
  if (df_scientificresearch_list_related_services) {
    gsap.from('#df-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_section_youre_in_good_hands = document.getElementById('df-scientificresearch-section-youre-in-good-hands');
  if (df_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#df-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_scientificresearch_section_21 = document.getElementById('df-scientificresearch-section-21');
  if (df_scientificresearch_section_21) {
    gsap.fromTo('#df-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_study_form_study_in_brazil_with_study_residency = document.getElementById('df-study-form-study-in-brazil-with-study-residency');
  if (df_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#df-study-form-study-in-brazil-with-study-residency input, #df-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_study_list_quick_facts = document.getElementById('df-study-list-quick-facts');
  if (df_study_list_quick_facts) {
    gsap.from('#df-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_study_list_common_challenges_applicants_face = document.getElementById('df-study-list-common-challenges-applicants-face');
  if (df_study_list_common_challenges_applicants_face) {
    gsap.from('#df-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_study_list_how_we_solve_these_challenges = document.getElementById('df-study-list-how-we-solve-these-challenges');
  if (df_study_list_how_we_solve_these_challenges) {
    gsap.from('#df-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_study_section_residency_overview = document.getElementById('df-study-section-residency-overview');
  if (df_study_section_residency_overview) {
    gsap.fromTo('#df-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_study_form_who_is_this_residency_for = document.getElementById('df-study-form-who-is-this-residency-for');
  if (df_study_form_who_is_this_residency_for) {
    gsap.from('#df-study-form-who-is-this-residency-for input, #df-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_study_list_required_documents = document.getElementById('df-study-list-required-documents');
  if (df_study_list_required_documents) {
    gsap.from('#df-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_study_list_application_process = document.getElementById('df-study-list-application-process');
  if (df_study_list_application_process) {
    gsap.from('#df-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_study_section_timelines_deadlines = document.getElementById('df-study-section-timelines-deadlines');
  if (df_study_section_timelines_deadlines) {
    gsap.fromTo('#df-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_study_section_fees_costs = document.getElementById('df-study-section-fees-costs');
  if (df_study_section_fees_costs) {
    gsap.fromTo('#df-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_study_list_risks_common_mistakes = document.getElementById('df-study-list-risks-common-mistakes');
  if (df_study_list_risks_common_mistakes) {
    gsap.from('#df-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_study_section_diy_vs_professional_assistance = document.getElementById('df-study-section-diy-vs-professional-assistance');
  if (df_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_study_section_distrito_federal_specific_context = document.getElementById('df-study-section-distrito-federal-specific-context');
  if (df_study_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-study-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_study_section_what_our_clients_say = document.getElementById('df-study-section-what-our-clients-say');
  if (df_study_section_what_our_clients_say) {
    gsap.fromTo('#df-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_study_section_frequently_asked_questions = document.getElementById('df-study-section-frequently-asked-questions');
  if (df_study_section_frequently_asked_questions) {
    gsap.fromTo('#df-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_study_section_international_support = document.getElementById('df-study-section-international-support');
  if (df_study_section_international_support) {
    gsap.fromTo('#df-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_study_list_our_credentials = document.getElementById('df-study-list-our-credentials');
  if (df_study_list_our_credentials) {
    gsap.from('#df-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_study_list_related_services = document.getElementById('df-study-list-related-services');
  if (df_study_list_related_services) {
    gsap.from('#df-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_study_section_youre_in_good_hands = document.getElementById('df-study-section-youre-in-good-hands');
  if (df_study_section_youre_in_good_hands) {
    gsap.fromTo('#df-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_study_section_21 = document.getElementById('df-study-section-21');
  if (df_study_section_21) {
    gsap.fromTo('#df-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('df-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (df_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#df-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #df-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_list_quick_facts = document.getElementById('df-educationalexchange-list-quick-facts');
  if (df_educationalexchange_list_quick_facts) {
    gsap.from('#df-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_list_common_challenges_applicants_face = document.getElementById('df-educationalexchange-list-common-challenges-applicants-face');
  if (df_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#df-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('df-educationalexchange-list-how-we-solve-these-challenges');
  if (df_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#df-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_section_residency_overview = document.getElementById('df-educationalexchange-section-residency-overview');
  if (df_educationalexchange_section_residency_overview) {
    gsap.fromTo('#df-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_form_who_is_this_residency_for = document.getElementById('df-educationalexchange-form-who-is-this-residency-for');
  if (df_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#df-educationalexchange-form-who-is-this-residency-for input, #df-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_list_required_documents = document.getElementById('df-educationalexchange-list-required-documents');
  if (df_educationalexchange_list_required_documents) {
    gsap.from('#df-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_list_application_process = document.getElementById('df-educationalexchange-list-application-process');
  if (df_educationalexchange_list_application_process) {
    gsap.from('#df-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_section_timelines_deadlines = document.getElementById('df-educationalexchange-section-timelines-deadlines');
  if (df_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#df-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_section_fees_costs = document.getElementById('df-educationalexchange-section-fees-costs');
  if (df_educationalexchange_section_fees_costs) {
    gsap.fromTo('#df-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_list_risks_common_mistakes = document.getElementById('df-educationalexchange-list-risks-common-mistakes');
  if (df_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#df-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('df-educationalexchange-section-diy-vs-professional-assistance');
  if (df_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_section_distrito_federal_specific_context = document.getElementById('df-educationalexchange-section-distrito-federal-specific-context');
  if (df_educationalexchange_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-educationalexchange-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_section_what_our_clients_say = document.getElementById('df-educationalexchange-section-what-our-clients-say');
  if (df_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#df-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_section_frequently_asked_questions = document.getElementById('df-educationalexchange-section-frequently-asked-questions');
  if (df_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#df-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_section_international_support = document.getElementById('df-educationalexchange-section-international-support');
  if (df_educationalexchange_section_international_support) {
    gsap.fromTo('#df-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_list_our_credentials = document.getElementById('df-educationalexchange-list-our-credentials');
  if (df_educationalexchange_list_our_credentials) {
    gsap.from('#df-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_list_related_services = document.getElementById('df-educationalexchange-list-related-services');
  if (df_educationalexchange_list_related_services) {
    gsap.from('#df-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_section_youre_in_good_hands = document.getElementById('df-educationalexchange-section-youre-in-good-hands');
  if (df_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#df-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_educationalexchange_section_21 = document.getElementById('df-educationalexchange-section-21');
  if (df_educationalexchange_section_21) {
    gsap.fromTo('#df-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('df-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (df_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#df-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #df-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_list_quick_facts = document.getElementById('df-humanitarian-list-quick-facts');
  if (df_humanitarian_list_quick_facts) {
    gsap.from('#df-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_list_common_challenges_applicants_face = document.getElementById('df-humanitarian-list-common-challenges-applicants-face');
  if (df_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#df-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_list_how_we_solve_these_challenges = document.getElementById('df-humanitarian-list-how-we-solve-these-challenges');
  if (df_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#df-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_section_residency_overview = document.getElementById('df-humanitarian-section-residency-overview');
  if (df_humanitarian_section_residency_overview) {
    gsap.fromTo('#df-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_form_who_is_this_residency_for = document.getElementById('df-humanitarian-form-who-is-this-residency-for');
  if (df_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#df-humanitarian-form-who-is-this-residency-for input, #df-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_list_required_documents = document.getElementById('df-humanitarian-list-required-documents');
  if (df_humanitarian_list_required_documents) {
    gsap.from('#df-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_list_application_process = document.getElementById('df-humanitarian-list-application-process');
  if (df_humanitarian_list_application_process) {
    gsap.from('#df-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_section_timelines_deadlines = document.getElementById('df-humanitarian-section-timelines-deadlines');
  if (df_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#df-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_section_fees_costs = document.getElementById('df-humanitarian-section-fees-costs');
  if (df_humanitarian_section_fees_costs) {
    gsap.fromTo('#df-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_list_risks_common_mistakes = document.getElementById('df-humanitarian-list-risks-common-mistakes');
  if (df_humanitarian_list_risks_common_mistakes) {
    gsap.from('#df-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_section_diy_vs_professional_assistance = document.getElementById('df-humanitarian-section-diy-vs-professional-assistance');
  if (df_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_section_distrito_federal_specific_context = document.getElementById('df-humanitarian-section-distrito-federal-specific-context');
  if (df_humanitarian_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-humanitarian-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_section_what_our_clients_say = document.getElementById('df-humanitarian-section-what-our-clients-say');
  if (df_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#df-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_section_frequently_asked_questions = document.getElementById('df-humanitarian-section-frequently-asked-questions');
  if (df_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#df-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_section_international_support = document.getElementById('df-humanitarian-section-international-support');
  if (df_humanitarian_section_international_support) {
    gsap.fromTo('#df-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_list_our_credentials = document.getElementById('df-humanitarian-list-our-credentials');
  if (df_humanitarian_list_our_credentials) {
    gsap.from('#df-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_list_related_services = document.getElementById('df-humanitarian-list-related-services');
  if (df_humanitarian_list_related_services) {
    gsap.from('#df-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_section_youre_in_good_hands = document.getElementById('df-humanitarian-section-youre-in-good-hands');
  if (df_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#df-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_humanitarian_section_21 = document.getElementById('df-humanitarian-section-21');
  if (df_humanitarian_section_21) {
    gsap.fromTo('#df-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('df-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (df_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#df-digitalnomad-form-digital-nomad-residency-in-brazil input, #df-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_list_quick_facts = document.getElementById('df-digitalnomad-list-quick-facts');
  if (df_digitalnomad_list_quick_facts) {
    gsap.from('#df-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_list_common_challenges_applicants_face = document.getElementById('df-digitalnomad-list-common-challenges-applicants-face');
  if (df_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#df-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('df-digitalnomad-list-how-we-solve-these-challenges');
  if (df_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#df-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_section_residency_overview = document.getElementById('df-digitalnomad-section-residency-overview');
  if (df_digitalnomad_section_residency_overview) {
    gsap.fromTo('#df-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_form_who_is_this_residency_for = document.getElementById('df-digitalnomad-form-who-is-this-residency-for');
  if (df_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#df-digitalnomad-form-who-is-this-residency-for input, #df-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_list_required_documents = document.getElementById('df-digitalnomad-list-required-documents');
  if (df_digitalnomad_list_required_documents) {
    gsap.from('#df-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_list_application_process = document.getElementById('df-digitalnomad-list-application-process');
  if (df_digitalnomad_list_application_process) {
    gsap.from('#df-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_section_timelines_deadlines = document.getElementById('df-digitalnomad-section-timelines-deadlines');
  if (df_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#df-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_section_fees_costs = document.getElementById('df-digitalnomad-section-fees-costs');
  if (df_digitalnomad_section_fees_costs) {
    gsap.fromTo('#df-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_list_risks_common_mistakes = document.getElementById('df-digitalnomad-list-risks-common-mistakes');
  if (df_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#df-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('df-digitalnomad-section-diy-vs-professional-assistance');
  if (df_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_section_distrito_federal_specific_context = document.getElementById('df-digitalnomad-section-distrito-federal-specific-context');
  if (df_digitalnomad_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-digitalnomad-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_section_what_our_clients_say = document.getElementById('df-digitalnomad-section-what-our-clients-say');
  if (df_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#df-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_section_frequently_asked_questions = document.getElementById('df-digitalnomad-section-frequently-asked-questions');
  if (df_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#df-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_section_international_support = document.getElementById('df-digitalnomad-section-international-support');
  if (df_digitalnomad_section_international_support) {
    gsap.fromTo('#df-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_list_our_credentials = document.getElementById('df-digitalnomad-list-our-credentials');
  if (df_digitalnomad_list_our_credentials) {
    gsap.from('#df-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_list_related_services = document.getElementById('df-digitalnomad-list-related-services');
  if (df_digitalnomad_list_related_services) {
    gsap.from('#df-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_section_youre_in_good_hands = document.getElementById('df-digitalnomad-section-youre-in-good-hands');
  if (df_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#df-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_digitalnomad_section_21 = document.getElementById('df-digitalnomad-section-21');
  if (df_digitalnomad_section_21) {
    gsap.fromTo('#df-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('df-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (df_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#df-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #df-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_list_quick_facts = document.getElementById('df-familyreunion-list-quick-facts');
  if (df_familyreunion_list_quick_facts) {
    gsap.from('#df-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_list_common_challenges_applicants_face = document.getElementById('df-familyreunion-list-common-challenges-applicants-face');
  if (df_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#df-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_list_how_we_solve_these_challenges = document.getElementById('df-familyreunion-list-how-we-solve-these-challenges');
  if (df_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#df-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_section_residency_overview = document.getElementById('df-familyreunion-section-residency-overview');
  if (df_familyreunion_section_residency_overview) {
    gsap.fromTo('#df-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_form_who_is_this_residency_for = document.getElementById('df-familyreunion-form-who-is-this-residency-for');
  if (df_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#df-familyreunion-form-who-is-this-residency-for input, #df-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_list_required_documents = document.getElementById('df-familyreunion-list-required-documents');
  if (df_familyreunion_list_required_documents) {
    gsap.from('#df-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_list_application_process = document.getElementById('df-familyreunion-list-application-process');
  if (df_familyreunion_list_application_process) {
    gsap.from('#df-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_section_timelines_deadlines = document.getElementById('df-familyreunion-section-timelines-deadlines');
  if (df_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#df-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_section_fees_costs = document.getElementById('df-familyreunion-section-fees-costs');
  if (df_familyreunion_section_fees_costs) {
    gsap.fromTo('#df-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_list_risks_common_mistakes = document.getElementById('df-familyreunion-list-risks-common-mistakes');
  if (df_familyreunion_list_risks_common_mistakes) {
    gsap.from('#df-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_section_diy_vs_professional_assistance = document.getElementById('df-familyreunion-section-diy-vs-professional-assistance');
  if (df_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_section_distrito_federal_specific_context = document.getElementById('df-familyreunion-section-distrito-federal-specific-context');
  if (df_familyreunion_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-familyreunion-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_section_what_our_clients_say = document.getElementById('df-familyreunion-section-what-our-clients-say');
  if (df_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#df-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_section_frequently_asked_questions = document.getElementById('df-familyreunion-section-frequently-asked-questions');
  if (df_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#df-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_section_international_support = document.getElementById('df-familyreunion-section-international-support');
  if (df_familyreunion_section_international_support) {
    gsap.fromTo('#df-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_list_our_credentials = document.getElementById('df-familyreunion-list-our-credentials');
  if (df_familyreunion_list_our_credentials) {
    gsap.from('#df-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_list_related_services = document.getElementById('df-familyreunion-list-related-services');
  if (df_familyreunion_list_related_services) {
    gsap.from('#df-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_section_youre_in_good_hands = document.getElementById('df-familyreunion-section-youre-in-good-hands');
  if (df_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#df-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_familyreunion_section_21 = document.getElementById('df-familyreunion-section-21');
  if (df_familyreunion_section_21) {
    gsap.fromTo('#df-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('df-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (df_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#df-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #df-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_list_quick_facts = document.getElementById('df-mercosul-list-quick-facts');
  if (df_mercosul_list_quick_facts) {
    gsap.from('#df-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_list_common_challenges_applicants_face = document.getElementById('df-mercosul-list-common-challenges-applicants-face');
  if (df_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#df-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_list_how_we_solve_these_challenges = document.getElementById('df-mercosul-list-how-we-solve-these-challenges');
  if (df_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#df-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_section_residency_overview = document.getElementById('df-mercosul-section-residency-overview');
  if (df_mercosul_section_residency_overview) {
    gsap.fromTo('#df-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_form_who_is_this_residency_for = document.getElementById('df-mercosul-form-who-is-this-residency-for');
  if (df_mercosul_form_who_is_this_residency_for) {
    gsap.from('#df-mercosul-form-who-is-this-residency-for input, #df-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_list_required_documents = document.getElementById('df-mercosul-list-required-documents');
  if (df_mercosul_list_required_documents) {
    gsap.from('#df-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_list_application_process = document.getElementById('df-mercosul-list-application-process');
  if (df_mercosul_list_application_process) {
    gsap.from('#df-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_section_timelines_deadlines = document.getElementById('df-mercosul-section-timelines-deadlines');
  if (df_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#df-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_section_fees_costs = document.getElementById('df-mercosul-section-fees-costs');
  if (df_mercosul_section_fees_costs) {
    gsap.fromTo('#df-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_list_risks_common_mistakes = document.getElementById('df-mercosul-list-risks-common-mistakes');
  if (df_mercosul_list_risks_common_mistakes) {
    gsap.from('#df-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_section_diy_vs_professional_assistance = document.getElementById('df-mercosul-section-diy-vs-professional-assistance');
  if (df_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_section_distrito_federal_specific_context = document.getElementById('df-mercosul-section-distrito-federal-specific-context');
  if (df_mercosul_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-mercosul-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_section_what_our_clients_say = document.getElementById('df-mercosul-section-what-our-clients-say');
  if (df_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#df-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_section_frequently_asked_questions = document.getElementById('df-mercosul-section-frequently-asked-questions');
  if (df_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#df-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_section_international_support = document.getElementById('df-mercosul-section-international-support');
  if (df_mercosul_section_international_support) {
    gsap.fromTo('#df-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_list_our_credentials = document.getElementById('df-mercosul-list-our-credentials');
  if (df_mercosul_list_our_credentials) {
    gsap.from('#df-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_list_related_services = document.getElementById('df-mercosul-list-related-services');
  if (df_mercosul_list_related_services) {
    gsap.from('#df-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_section_youre_in_good_hands = document.getElementById('df-mercosul-section-youre-in-good-hands');
  if (df_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#df-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_mercosul_section_21 = document.getElementById('df-mercosul-section-21');
  if (df_mercosul_section_21) {
    gsap.fromTo('#df-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('df-retiree-form-retire-in-brazil-with-retiree-residency');
  if (df_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#df-retiree-form-retire-in-brazil-with-retiree-residency input, #df-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_list_quick_facts = document.getElementById('df-retiree-list-quick-facts');
  if (df_retiree_list_quick_facts) {
    gsap.from('#df-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_list_common_challenges_applicants_face = document.getElementById('df-retiree-list-common-challenges-applicants-face');
  if (df_retiree_list_common_challenges_applicants_face) {
    gsap.from('#df-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_list_how_we_solve_these_challenges = document.getElementById('df-retiree-list-how-we-solve-these-challenges');
  if (df_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#df-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_section_residency_overview = document.getElementById('df-retiree-section-residency-overview');
  if (df_retiree_section_residency_overview) {
    gsap.fromTo('#df-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_form_who_is_this_residency_for = document.getElementById('df-retiree-form-who-is-this-residency-for');
  if (df_retiree_form_who_is_this_residency_for) {
    gsap.from('#df-retiree-form-who-is-this-residency-for input, #df-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_list_required_documents = document.getElementById('df-retiree-list-required-documents');
  if (df_retiree_list_required_documents) {
    gsap.from('#df-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_list_application_process = document.getElementById('df-retiree-list-application-process');
  if (df_retiree_list_application_process) {
    gsap.from('#df-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_section_timelines_deadlines = document.getElementById('df-retiree-section-timelines-deadlines');
  if (df_retiree_section_timelines_deadlines) {
    gsap.fromTo('#df-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_section_fees_costs = document.getElementById('df-retiree-section-fees-costs');
  if (df_retiree_section_fees_costs) {
    gsap.fromTo('#df-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_list_risks_common_mistakes = document.getElementById('df-retiree-list-risks-common-mistakes');
  if (df_retiree_list_risks_common_mistakes) {
    gsap.from('#df-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_section_diy_vs_professional_assistance = document.getElementById('df-retiree-section-diy-vs-professional-assistance');
  if (df_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_section_distrito_federal_specific_context = document.getElementById('df-retiree-section-distrito-federal-specific-context');
  if (df_retiree_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-retiree-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_section_what_our_clients_say = document.getElementById('df-retiree-section-what-our-clients-say');
  if (df_retiree_section_what_our_clients_say) {
    gsap.fromTo('#df-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_section_frequently_asked_questions = document.getElementById('df-retiree-section-frequently-asked-questions');
  if (df_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#df-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_section_international_support = document.getElementById('df-retiree-section-international-support');
  if (df_retiree_section_international_support) {
    gsap.fromTo('#df-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_list_our_credentials = document.getElementById('df-retiree-list-our-credentials');
  if (df_retiree_list_our_credentials) {
    gsap.from('#df-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_list_related_services = document.getElementById('df-retiree-list-related-services');
  if (df_retiree_list_related_services) {
    gsap.from('#df-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_section_youre_in_good_hands = document.getElementById('df-retiree-section-youre-in-good-hands');
  if (df_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#df-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_retiree_section_21 = document.getElementById('df-retiree-section-21');
  if (df_retiree_section_21) {
    gsap.fromTo('#df-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('df-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (df_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#df-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #df-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_list_quick_facts = document.getElementById('df-volunteer-list-quick-facts');
  if (df_volunteer_list_quick_facts) {
    gsap.from('#df-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_list_common_challenges_applicants_face = document.getElementById('df-volunteer-list-common-challenges-applicants-face');
  if (df_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#df-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_list_how_we_solve_these_challenges = document.getElementById('df-volunteer-list-how-we-solve-these-challenges');
  if (df_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#df-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_section_residency_overview = document.getElementById('df-volunteer-section-residency-overview');
  if (df_volunteer_section_residency_overview) {
    gsap.fromTo('#df-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_form_who_is_this_residency_for = document.getElementById('df-volunteer-form-who-is-this-residency-for');
  if (df_volunteer_form_who_is_this_residency_for) {
    gsap.from('#df-volunteer-form-who-is-this-residency-for input, #df-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_list_required_documents = document.getElementById('df-volunteer-list-required-documents');
  if (df_volunteer_list_required_documents) {
    gsap.from('#df-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_list_application_process = document.getElementById('df-volunteer-list-application-process');
  if (df_volunteer_list_application_process) {
    gsap.from('#df-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_section_timelines_deadlines = document.getElementById('df-volunteer-section-timelines-deadlines');
  if (df_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#df-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_section_fees_costs = document.getElementById('df-volunteer-section-fees-costs');
  if (df_volunteer_section_fees_costs) {
    gsap.fromTo('#df-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_list_risks_common_mistakes = document.getElementById('df-volunteer-list-risks-common-mistakes');
  if (df_volunteer_list_risks_common_mistakes) {
    gsap.from('#df-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_section_diy_vs_professional_assistance = document.getElementById('df-volunteer-section-diy-vs-professional-assistance');
  if (df_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_section_distrito_federal_specific_context = document.getElementById('df-volunteer-section-distrito-federal-specific-context');
  if (df_volunteer_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-volunteer-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_section_what_our_clients_say = document.getElementById('df-volunteer-section-what-our-clients-say');
  if (df_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#df-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_section_frequently_asked_questions = document.getElementById('df-volunteer-section-frequently-asked-questions');
  if (df_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#df-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_section_international_support = document.getElementById('df-volunteer-section-international-support');
  if (df_volunteer_section_international_support) {
    gsap.fromTo('#df-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_list_our_credentials = document.getElementById('df-volunteer-list-our-credentials');
  if (df_volunteer_list_our_credentials) {
    gsap.from('#df-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_list_related_services = document.getElementById('df-volunteer-list-related-services');
  if (df_volunteer_list_related_services) {
    gsap.from('#df-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_section_youre_in_good_hands = document.getElementById('df-volunteer-section-youre-in-good-hands');
  if (df_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#df-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_volunteer_section_21 = document.getElementById('df-volunteer-section-21');
  if (df_volunteer_section_21) {
    gsap.fromTo('#df-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('df-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (df_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#df-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #df-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_list_quick_facts = document.getElementById('df-skilledworker-list-quick-facts');
  if (df_skilledworker_list_quick_facts) {
    gsap.from('#df-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_list_common_challenges_applicants_face = document.getElementById('df-skilledworker-list-common-challenges-applicants-face');
  if (df_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#df-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_list_how_we_solve_these_challenges = document.getElementById('df-skilledworker-list-how-we-solve-these-challenges');
  if (df_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#df-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_section_residency_overview = document.getElementById('df-skilledworker-section-residency-overview');
  if (df_skilledworker_section_residency_overview) {
    gsap.fromTo('#df-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_form_who_is_this_residency_for = document.getElementById('df-skilledworker-form-who-is-this-residency-for');
  if (df_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#df-skilledworker-form-who-is-this-residency-for input, #df-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_list_required_documents = document.getElementById('df-skilledworker-list-required-documents');
  if (df_skilledworker_list_required_documents) {
    gsap.from('#df-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_list_application_process = document.getElementById('df-skilledworker-list-application-process');
  if (df_skilledworker_list_application_process) {
    gsap.from('#df-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_section_timelines_deadlines = document.getElementById('df-skilledworker-section-timelines-deadlines');
  if (df_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#df-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_section_fees_costs = document.getElementById('df-skilledworker-section-fees-costs');
  if (df_skilledworker_section_fees_costs) {
    gsap.fromTo('#df-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_list_risks_common_mistakes = document.getElementById('df-skilledworker-list-risks-common-mistakes');
  if (df_skilledworker_list_risks_common_mistakes) {
    gsap.from('#df-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_section_diy_vs_professional_assistance = document.getElementById('df-skilledworker-section-diy-vs-professional-assistance');
  if (df_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_section_distrito_federal_specific_context = document.getElementById('df-skilledworker-section-distrito-federal-specific-context');
  if (df_skilledworker_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-skilledworker-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_section_what_our_clients_say = document.getElementById('df-skilledworker-section-what-our-clients-say');
  if (df_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#df-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_section_frequently_asked_questions = document.getElementById('df-skilledworker-section-frequently-asked-questions');
  if (df_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#df-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_section_international_support = document.getElementById('df-skilledworker-section-international-support');
  if (df_skilledworker_section_international_support) {
    gsap.fromTo('#df-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_list_our_credentials = document.getElementById('df-skilledworker-list-our-credentials');
  if (df_skilledworker_list_our_credentials) {
    gsap.from('#df-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_list_related_services = document.getElementById('df-skilledworker-list-related-services');
  if (df_skilledworker_list_related_services) {
    gsap.from('#df-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_section_youre_in_good_hands = document.getElementById('df-skilledworker-section-youre-in-good-hands');
  if (df_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#df-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_skilledworker_section_21 = document.getElementById('df-skilledworker-section-21');
  if (df_skilledworker_section_21) {
    gsap.fromTo('#df-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('df-religious-form-religious-residency-in-brazil-for-missions');
  if (df_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#df-religious-form-religious-residency-in-brazil-for-missions input, #df-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_religious_list_quick_facts = document.getElementById('df-religious-list-quick-facts');
  if (df_religious_list_quick_facts) {
    gsap.from('#df-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_religious_list_common_challenges_applicants_face = document.getElementById('df-religious-list-common-challenges-applicants-face');
  if (df_religious_list_common_challenges_applicants_face) {
    gsap.from('#df-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_religious_list_how_we_solve_these_challenges = document.getElementById('df-religious-list-how-we-solve-these-challenges');
  if (df_religious_list_how_we_solve_these_challenges) {
    gsap.from('#df-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_religious_section_residency_overview = document.getElementById('df-religious-section-residency-overview');
  if (df_religious_section_residency_overview) {
    gsap.fromTo('#df-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_religious_form_who_is_this_residency_for = document.getElementById('df-religious-form-who-is-this-residency-for');
  if (df_religious_form_who_is_this_residency_for) {
    gsap.from('#df-religious-form-who-is-this-residency-for input, #df-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_religious_list_required_documents = document.getElementById('df-religious-list-required-documents');
  if (df_religious_list_required_documents) {
    gsap.from('#df-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_religious_list_application_process = document.getElementById('df-religious-list-application-process');
  if (df_religious_list_application_process) {
    gsap.from('#df-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_religious_section_timelines_deadlines = document.getElementById('df-religious-section-timelines-deadlines');
  if (df_religious_section_timelines_deadlines) {
    gsap.fromTo('#df-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_religious_section_fees_costs = document.getElementById('df-religious-section-fees-costs');
  if (df_religious_section_fees_costs) {
    gsap.fromTo('#df-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_religious_list_risks_common_mistakes = document.getElementById('df-religious-list-risks-common-mistakes');
  if (df_religious_list_risks_common_mistakes) {
    gsap.from('#df-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_religious_section_diy_vs_professional_assistance = document.getElementById('df-religious-section-diy-vs-professional-assistance');
  if (df_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_religious_section_distrito_federal_specific_context = document.getElementById('df-religious-section-distrito-federal-specific-context');
  if (df_religious_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-religious-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_religious_section_what_our_clients_say = document.getElementById('df-religious-section-what-our-clients-say');
  if (df_religious_section_what_our_clients_say) {
    gsap.fromTo('#df-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_religious_section_frequently_asked_questions = document.getElementById('df-religious-section-frequently-asked-questions');
  if (df_religious_section_frequently_asked_questions) {
    gsap.fromTo('#df-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_religious_section_international_support = document.getElementById('df-religious-section-international-support');
  if (df_religious_section_international_support) {
    gsap.fromTo('#df-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_religious_list_our_credentials = document.getElementById('df-religious-list-our-credentials');
  if (df_religious_list_our_credentials) {
    gsap.from('#df-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_religious_list_related_services = document.getElementById('df-religious-list-related-services');
  if (df_religious_list_related_services) {
    gsap.from('#df-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_religious_section_youre_in_good_hands = document.getElementById('df-religious-section-youre-in-good-hands');
  if (df_religious_section_youre_in_good_hands) {
    gsap.fromTo('#df-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_religious_section_21 = document.getElementById('df-religious-section-21');
  if (df_religious_section_21) {
    gsap.fromTo('#df-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('df-investor-form-gain-residency-in-brazil-through-investment');
  if (df_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#df-investor-form-gain-residency-in-brazil-through-investment input, #df-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_investor_list_quick_facts = document.getElementById('df-investor-list-quick-facts');
  if (df_investor_list_quick_facts) {
    gsap.from('#df-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_investor_list_common_challenges_applicants_face = document.getElementById('df-investor-list-common-challenges-applicants-face');
  if (df_investor_list_common_challenges_applicants_face) {
    gsap.from('#df-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_investor_list_how_we_solve_these_challenges = document.getElementById('df-investor-list-how-we-solve-these-challenges');
  if (df_investor_list_how_we_solve_these_challenges) {
    gsap.from('#df-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_investor_section_residency_overview = document.getElementById('df-investor-section-residency-overview');
  if (df_investor_section_residency_overview) {
    gsap.fromTo('#df-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_investor_form_who_is_this_residency_for = document.getElementById('df-investor-form-who-is-this-residency-for');
  if (df_investor_form_who_is_this_residency_for) {
    gsap.from('#df-investor-form-who-is-this-residency-for input, #df-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_investor_list_required_documents = document.getElementById('df-investor-list-required-documents');
  if (df_investor_list_required_documents) {
    gsap.from('#df-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_investor_list_application_process = document.getElementById('df-investor-list-application-process');
  if (df_investor_list_application_process) {
    gsap.from('#df-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_investor_section_timelines_deadlines = document.getElementById('df-investor-section-timelines-deadlines');
  if (df_investor_section_timelines_deadlines) {
    gsap.fromTo('#df-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_investor_section_fees_costs = document.getElementById('df-investor-section-fees-costs');
  if (df_investor_section_fees_costs) {
    gsap.fromTo('#df-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_investor_list_risks_common_mistakes = document.getElementById('df-investor-list-risks-common-mistakes');
  if (df_investor_list_risks_common_mistakes) {
    gsap.from('#df-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_investor_section_diy_vs_professional_assistance = document.getElementById('df-investor-section-diy-vs-professional-assistance');
  if (df_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_investor_section_distrito_federal_specific_context = document.getElementById('df-investor-section-distrito-federal-specific-context');
  if (df_investor_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-investor-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_investor_section_what_our_clients_say = document.getElementById('df-investor-section-what-our-clients-say');
  if (df_investor_section_what_our_clients_say) {
    gsap.fromTo('#df-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_investor_section_frequently_asked_questions = document.getElementById('df-investor-section-frequently-asked-questions');
  if (df_investor_section_frequently_asked_questions) {
    gsap.fromTo('#df-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_investor_section_international_support = document.getElementById('df-investor-section-international-support');
  if (df_investor_section_international_support) {
    gsap.fromTo('#df-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_investor_list_our_credentials = document.getElementById('df-investor-list-our-credentials');
  if (df_investor_list_our_credentials) {
    gsap.from('#df-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_investor_list_related_services = document.getElementById('df-investor-list-related-services');
  if (df_investor_list_related_services) {
    gsap.from('#df-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_investor_section_youre_in_good_hands = document.getElementById('df-investor-section-youre-in-good-hands');
  if (df_investor_section_youre_in_good_hands) {
    gsap.fromTo('#df-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_investor_section_21 = document.getElementById('df-investor-section-21');
  if (df_investor_section_21) {
    gsap.fromTo('#df-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('df-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (df_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#df-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #df-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_list_quick_facts = document.getElementById('df-healthtreatment-list-quick-facts');
  if (df_healthtreatment_list_quick_facts) {
    gsap.from('#df-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_list_common_challenges_applicants_face = document.getElementById('df-healthtreatment-list-common-challenges-applicants-face');
  if (df_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#df-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('df-healthtreatment-list-how-we-solve-these-challenges');
  if (df_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#df-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_section_residency_overview = document.getElementById('df-healthtreatment-section-residency-overview');
  if (df_healthtreatment_section_residency_overview) {
    gsap.fromTo('#df-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_form_who_is_this_residency_for = document.getElementById('df-healthtreatment-form-who-is-this-residency-for');
  if (df_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#df-healthtreatment-form-who-is-this-residency-for input, #df-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_list_required_documents = document.getElementById('df-healthtreatment-list-required-documents');
  if (df_healthtreatment_list_required_documents) {
    gsap.from('#df-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_list_application_process = document.getElementById('df-healthtreatment-list-application-process');
  if (df_healthtreatment_list_application_process) {
    gsap.from('#df-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_section_timelines_deadlines = document.getElementById('df-healthtreatment-section-timelines-deadlines');
  if (df_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#df-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_section_fees_costs = document.getElementById('df-healthtreatment-section-fees-costs');
  if (df_healthtreatment_section_fees_costs) {
    gsap.fromTo('#df-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_list_risks_common_mistakes = document.getElementById('df-healthtreatment-list-risks-common-mistakes');
  if (df_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#df-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('df-healthtreatment-section-diy-vs-professional-assistance');
  if (df_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_section_distrito_federal_specific_context = document.getElementById('df-healthtreatment-section-distrito-federal-specific-context');
  if (df_healthtreatment_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-healthtreatment-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_section_what_our_clients_say = document.getElementById('df-healthtreatment-section-what-our-clients-say');
  if (df_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#df-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_section_frequently_asked_questions = document.getElementById('df-healthtreatment-section-frequently-asked-questions');
  if (df_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#df-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_section_international_support = document.getElementById('df-healthtreatment-section-international-support');
  if (df_healthtreatment_section_international_support) {
    gsap.fromTo('#df-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_list_our_credentials = document.getElementById('df-healthtreatment-list-our-credentials');
  if (df_healthtreatment_list_our_credentials) {
    gsap.from('#df-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_list_related_services = document.getElementById('df-healthtreatment-list-related-services');
  if (df_healthtreatment_list_related_services) {
    gsap.from('#df-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_section_youre_in_good_hands = document.getElementById('df-healthtreatment-section-youre-in-good-hands');
  if (df_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#df-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_healthtreatment_section_21 = document.getElementById('df-healthtreatment-section-21');
  if (df_healthtreatment_section_21) {
    gsap.fromTo('#df-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('df-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (df_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#df-cplp-form-residency-for-cplp-citizens-in-brazil input, #df-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_list_quick_facts = document.getElementById('df-cplp-list-quick-facts');
  if (df_cplp_list_quick_facts) {
    gsap.from('#df-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_list_common_challenges_applicants_face = document.getElementById('df-cplp-list-common-challenges-applicants-face');
  if (df_cplp_list_common_challenges_applicants_face) {
    gsap.from('#df-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_list_how_we_solve_these_challenges = document.getElementById('df-cplp-list-how-we-solve-these-challenges');
  if (df_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#df-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_section_residency_overview = document.getElementById('df-cplp-section-residency-overview');
  if (df_cplp_section_residency_overview) {
    gsap.fromTo('#df-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_form_who_is_this_residency_for = document.getElementById('df-cplp-form-who-is-this-residency-for');
  if (df_cplp_form_who_is_this_residency_for) {
    gsap.from('#df-cplp-form-who-is-this-residency-for input, #df-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_list_required_documents = document.getElementById('df-cplp-list-required-documents');
  if (df_cplp_list_required_documents) {
    gsap.from('#df-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_list_application_process = document.getElementById('df-cplp-list-application-process');
  if (df_cplp_list_application_process) {
    gsap.from('#df-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_section_timelines_deadlines = document.getElementById('df-cplp-section-timelines-deadlines');
  if (df_cplp_section_timelines_deadlines) {
    gsap.fromTo('#df-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_section_fees_costs = document.getElementById('df-cplp-section-fees-costs');
  if (df_cplp_section_fees_costs) {
    gsap.fromTo('#df-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_list_risks_common_mistakes = document.getElementById('df-cplp-list-risks-common-mistakes');
  if (df_cplp_list_risks_common_mistakes) {
    gsap.from('#df-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_section_diy_vs_professional_assistance = document.getElementById('df-cplp-section-diy-vs-professional-assistance');
  if (df_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_section_distrito_federal_specific_context = document.getElementById('df-cplp-section-distrito-federal-specific-context');
  if (df_cplp_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-cplp-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_section_what_our_clients_say = document.getElementById('df-cplp-section-what-our-clients-say');
  if (df_cplp_section_what_our_clients_say) {
    gsap.fromTo('#df-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_section_frequently_asked_questions = document.getElementById('df-cplp-section-frequently-asked-questions');
  if (df_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#df-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_section_international_support = document.getElementById('df-cplp-section-international-support');
  if (df_cplp_section_international_support) {
    gsap.fromTo('#df-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_list_our_credentials = document.getElementById('df-cplp-list-our-credentials');
  if (df_cplp_list_our_credentials) {
    gsap.from('#df-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_list_related_services = document.getElementById('df-cplp-list-related-services');
  if (df_cplp_list_related_services) {
    gsap.from('#df-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_section_youre_in_good_hands = document.getElementById('df-cplp-section-youre-in-good-hands');
  if (df_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#df-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_cplp_section_21 = document.getElementById('df-cplp-section-21');
  if (df_cplp_section_21) {
    gsap.fromTo('#df-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('df-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (df_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#df-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #df-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_list_quick_facts = document.getElementById('df-youthexchange-list-quick-facts');
  if (df_youthexchange_list_quick_facts) {
    gsap.from('#df-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_list_common_challenges_applicants_face = document.getElementById('df-youthexchange-list-common-challenges-applicants-face');
  if (df_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#df-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_list_how_we_solve_these_challenges = document.getElementById('df-youthexchange-list-how-we-solve-these-challenges');
  if (df_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#df-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_section_residency_overview = document.getElementById('df-youthexchange-section-residency-overview');
  if (df_youthexchange_section_residency_overview) {
    gsap.fromTo('#df-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_form_who_is_this_residency_for = document.getElementById('df-youthexchange-form-who-is-this-residency-for');
  if (df_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#df-youthexchange-form-who-is-this-residency-for input, #df-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_list_required_documents = document.getElementById('df-youthexchange-list-required-documents');
  if (df_youthexchange_list_required_documents) {
    gsap.from('#df-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_list_application_process = document.getElementById('df-youthexchange-list-application-process');
  if (df_youthexchange_list_application_process) {
    gsap.from('#df-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_section_timelines_deadlines = document.getElementById('df-youthexchange-section-timelines-deadlines');
  if (df_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#df-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_section_fees_costs = document.getElementById('df-youthexchange-section-fees-costs');
  if (df_youthexchange_section_fees_costs) {
    gsap.fromTo('#df-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_list_risks_common_mistakes = document.getElementById('df-youthexchange-list-risks-common-mistakes');
  if (df_youthexchange_list_risks_common_mistakes) {
    gsap.from('#df-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_section_diy_vs_professional_assistance = document.getElementById('df-youthexchange-section-diy-vs-professional-assistance');
  if (df_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_section_distrito_federal_specific_context = document.getElementById('df-youthexchange-section-distrito-federal-specific-context');
  if (df_youthexchange_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-youthexchange-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_section_what_our_clients_say = document.getElementById('df-youthexchange-section-what-our-clients-say');
  if (df_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#df-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_section_frequently_asked_questions = document.getElementById('df-youthexchange-section-frequently-asked-questions');
  if (df_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#df-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_section_international_support = document.getElementById('df-youthexchange-section-international-support');
  if (df_youthexchange_section_international_support) {
    gsap.fromTo('#df-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_list_our_credentials = document.getElementById('df-youthexchange-list-our-credentials');
  if (df_youthexchange_list_our_credentials) {
    gsap.from('#df-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_list_related_services = document.getElementById('df-youthexchange-list-related-services');
  if (df_youthexchange_list_related_services) {
    gsap.from('#df-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_section_youre_in_good_hands = document.getElementById('df-youthexchange-section-youre-in-good-hands');
  if (df_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#df-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_youthexchange_section_21 = document.getElementById('df-youthexchange-section-21');
  if (df_youthexchange_section_21) {
    gsap.fromTo('#df-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('df-work-form-work-and-reside-in-brazil-with-work-residency');
  if (df_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#df-work-form-work-and-reside-in-brazil-with-work-residency input, #df-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_work_list_quick_facts = document.getElementById('df-work-list-quick-facts');
  if (df_work_list_quick_facts) {
    gsap.from('#df-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_work_list_common_challenges_applicants_face = document.getElementById('df-work-list-common-challenges-applicants-face');
  if (df_work_list_common_challenges_applicants_face) {
    gsap.from('#df-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_work_list_how_we_solve_these_challenges = document.getElementById('df-work-list-how-we-solve-these-challenges');
  if (df_work_list_how_we_solve_these_challenges) {
    gsap.from('#df-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_work_section_residency_overview = document.getElementById('df-work-section-residency-overview');
  if (df_work_section_residency_overview) {
    gsap.fromTo('#df-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_work_form_who_is_this_residency_for = document.getElementById('df-work-form-who-is-this-residency-for');
  if (df_work_form_who_is_this_residency_for) {
    gsap.from('#df-work-form-who-is-this-residency-for input, #df-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_work_list_required_documents = document.getElementById('df-work-list-required-documents');
  if (df_work_list_required_documents) {
    gsap.from('#df-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_work_list_application_process = document.getElementById('df-work-list-application-process');
  if (df_work_list_application_process) {
    gsap.from('#df-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_work_section_timelines_deadlines = document.getElementById('df-work-section-timelines-deadlines');
  if (df_work_section_timelines_deadlines) {
    gsap.fromTo('#df-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_work_section_fees_costs = document.getElementById('df-work-section-fees-costs');
  if (df_work_section_fees_costs) {
    gsap.fromTo('#df-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_work_list_risks_common_mistakes = document.getElementById('df-work-list-risks-common-mistakes');
  if (df_work_list_risks_common_mistakes) {
    gsap.from('#df-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_work_section_diy_vs_professional_assistance = document.getElementById('df-work-section-diy-vs-professional-assistance');
  if (df_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_work_section_distrito_federal_specific_context = document.getElementById('df-work-section-distrito-federal-specific-context');
  if (df_work_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-work-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_work_section_what_our_clients_say = document.getElementById('df-work-section-what-our-clients-say');
  if (df_work_section_what_our_clients_say) {
    gsap.fromTo('#df-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_work_section_frequently_asked_questions = document.getElementById('df-work-section-frequently-asked-questions');
  if (df_work_section_frequently_asked_questions) {
    gsap.fromTo('#df-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_work_section_international_support = document.getElementById('df-work-section-international-support');
  if (df_work_section_international_support) {
    gsap.fromTo('#df-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_work_list_our_credentials = document.getElementById('df-work-list-our-credentials');
  if (df_work_list_our_credentials) {
    gsap.from('#df-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_work_list_related_services = document.getElementById('df-work-list-related-services');
  if (df_work_list_related_services) {
    gsap.from('#df-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_work_section_youre_in_good_hands = document.getElementById('df-work-section-youre-in-good-hands');
  if (df_work_section_youre_in_good_hands) {
    gsap.fromTo('#df-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_work_section_21 = document.getElementById('df-work-section-21');
  if (df_work_section_21) {
    gsap.fromTo('#df-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('df-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (df_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#df-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #df-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_startup_list_quick_facts = document.getElementById('df-startup-list-quick-facts');
  if (df_startup_list_quick_facts) {
    gsap.from('#df-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_startup_list_common_challenges_applicants_face = document.getElementById('df-startup-list-common-challenges-applicants-face');
  if (df_startup_list_common_challenges_applicants_face) {
    gsap.from('#df-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_startup_list_how_we_solve_these_challenges = document.getElementById('df-startup-list-how-we-solve-these-challenges');
  if (df_startup_list_how_we_solve_these_challenges) {
    gsap.from('#df-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_startup_section_visa_overview = document.getElementById('df-startup-section-visa-overview');
  if (df_startup_section_visa_overview) {
    gsap.fromTo('#df-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_startup_form_who_is_this_visa_for = document.getElementById('df-startup-form-who-is-this-visa-for');
  if (df_startup_form_who_is_this_visa_for) {
    gsap.from('#df-startup-form-who-is-this-visa-for input, #df-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_startup_list_required_documents = document.getElementById('df-startup-list-required-documents');
  if (df_startup_list_required_documents) {
    gsap.from('#df-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_startup_list_application_process = document.getElementById('df-startup-list-application-process');
  if (df_startup_list_application_process) {
    gsap.from('#df-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_startup_section_timelines_deadlines = document.getElementById('df-startup-section-timelines-deadlines');
  if (df_startup_section_timelines_deadlines) {
    gsap.fromTo('#df-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_startup_section_fees_costs = document.getElementById('df-startup-section-fees-costs');
  if (df_startup_section_fees_costs) {
    gsap.fromTo('#df-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_startup_list_risks_common_mistakes = document.getElementById('df-startup-list-risks-common-mistakes');
  if (df_startup_list_risks_common_mistakes) {
    gsap.from('#df-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_startup_section_diy_vs_professional_assistance = document.getElementById('df-startup-section-diy-vs-professional-assistance');
  if (df_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_startup_section_distrito_federal_specific_context = document.getElementById('df-startup-section-distrito-federal-specific-context');
  if (df_startup_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-startup-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_startup_section_what_our_clients_say = document.getElementById('df-startup-section-what-our-clients-say');
  if (df_startup_section_what_our_clients_say) {
    gsap.fromTo('#df-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_startup_section_frequently_asked_questions = document.getElementById('df-startup-section-frequently-asked-questions');
  if (df_startup_section_frequently_asked_questions) {
    gsap.fromTo('#df-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_startup_section_international_support = document.getElementById('df-startup-section-international-support');
  if (df_startup_section_international_support) {
    gsap.fromTo('#df-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_startup_list_our_credentials = document.getElementById('df-startup-list-our-credentials');
  if (df_startup_list_our_credentials) {
    gsap.from('#df-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_startup_list_related_services = document.getElementById('df-startup-list-related-services');
  if (df_startup_list_related_services) {
    gsap.from('#df-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_startup_section_youre_in_good_hands = document.getElementById('df-startup-section-youre-in-good-hands');
  if (df_startup_section_youre_in_good_hands) {
    gsap.fromTo('#df-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_startup_section_21 = document.getElementById('df-startup-section-21');
  if (df_startup_section_21) {
    gsap.fromTo('#df-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('df-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (df_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#df-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #df-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_family_list_quick_facts = document.getElementById('df-family-list-quick-facts');
  if (df_family_list_quick_facts) {
    gsap.from('#df-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_family_list_common_challenges_applicants_face = document.getElementById('df-family-list-common-challenges-applicants-face');
  if (df_family_list_common_challenges_applicants_face) {
    gsap.from('#df-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_family_list_how_we_solve_these_challenges = document.getElementById('df-family-list-how-we-solve-these-challenges');
  if (df_family_list_how_we_solve_these_challenges) {
    gsap.from('#df-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_family_section_visa_overview = document.getElementById('df-family-section-visa-overview');
  if (df_family_section_visa_overview) {
    gsap.fromTo('#df-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_family_form_who_is_this_visa_for = document.getElementById('df-family-form-who-is-this-visa-for');
  if (df_family_form_who_is_this_visa_for) {
    gsap.from('#df-family-form-who-is-this-visa-for input, #df-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_family_list_required_documents = document.getElementById('df-family-list-required-documents');
  if (df_family_list_required_documents) {
    gsap.from('#df-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_family_list_application_process = document.getElementById('df-family-list-application-process');
  if (df_family_list_application_process) {
    gsap.from('#df-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_family_section_timelines_deadlines = document.getElementById('df-family-section-timelines-deadlines');
  if (df_family_section_timelines_deadlines) {
    gsap.fromTo('#df-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_family_section_fees_costs = document.getElementById('df-family-section-fees-costs');
  if (df_family_section_fees_costs) {
    gsap.fromTo('#df-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_family_list_risks_common_mistakes = document.getElementById('df-family-list-risks-common-mistakes');
  if (df_family_list_risks_common_mistakes) {
    gsap.from('#df-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_family_section_diy_vs_professional_assistance = document.getElementById('df-family-section-diy-vs-professional-assistance');
  if (df_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_family_section_distrito_federal_specific_context = document.getElementById('df-family-section-distrito-federal-specific-context');
  if (df_family_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-family-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_family_section_what_our_clients_say = document.getElementById('df-family-section-what-our-clients-say');
  if (df_family_section_what_our_clients_say) {
    gsap.fromTo('#df-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_family_section_frequently_asked_questions = document.getElementById('df-family-section-frequently-asked-questions');
  if (df_family_section_frequently_asked_questions) {
    gsap.fromTo('#df-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_family_section_international_support = document.getElementById('df-family-section-international-support');
  if (df_family_section_international_support) {
    gsap.fromTo('#df-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_family_list_our_credentials = document.getElementById('df-family-list-our-credentials');
  if (df_family_list_our_credentials) {
    gsap.from('#df-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_family_list_related_services = document.getElementById('df-family-list-related-services');
  if (df_family_list_related_services) {
    gsap.from('#df-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_family_section_youre_in_good_hands = document.getElementById('df-family-section-youre-in-good-hands');
  if (df_family_section_youre_in_good_hands) {
    gsap.fromTo('#df-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_family_section_21 = document.getElementById('df-family-section-21');
  if (df_family_section_21) {
    gsap.fromTo('#df-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('df-sports-form-compete-in-brazil-with-the-sports-visa');
  if (df_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#df-sports-form-compete-in-brazil-with-the-sports-visa input, #df-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_sports_list_quick_facts = document.getElementById('df-sports-list-quick-facts');
  if (df_sports_list_quick_facts) {
    gsap.from('#df-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_sports_list_common_challenges_applicants_face = document.getElementById('df-sports-list-common-challenges-applicants-face');
  if (df_sports_list_common_challenges_applicants_face) {
    gsap.from('#df-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_sports_list_how_we_solve_these_challenges = document.getElementById('df-sports-list-how-we-solve-these-challenges');
  if (df_sports_list_how_we_solve_these_challenges) {
    gsap.from('#df-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_sports_section_visa_overview = document.getElementById('df-sports-section-visa-overview');
  if (df_sports_section_visa_overview) {
    gsap.fromTo('#df-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_sports_form_who_is_this_visa_for = document.getElementById('df-sports-form-who-is-this-visa-for');
  if (df_sports_form_who_is_this_visa_for) {
    gsap.from('#df-sports-form-who-is-this-visa-for input, #df-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_sports_list_required_documents = document.getElementById('df-sports-list-required-documents');
  if (df_sports_list_required_documents) {
    gsap.from('#df-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_sports_list_application_process = document.getElementById('df-sports-list-application-process');
  if (df_sports_list_application_process) {
    gsap.from('#df-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_sports_section_timelines_deadlines = document.getElementById('df-sports-section-timelines-deadlines');
  if (df_sports_section_timelines_deadlines) {
    gsap.fromTo('#df-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_sports_section_fees_costs = document.getElementById('df-sports-section-fees-costs');
  if (df_sports_section_fees_costs) {
    gsap.fromTo('#df-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_sports_list_risks_common_mistakes = document.getElementById('df-sports-list-risks-common-mistakes');
  if (df_sports_list_risks_common_mistakes) {
    gsap.from('#df-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_sports_section_diy_vs_professional_assistance = document.getElementById('df-sports-section-diy-vs-professional-assistance');
  if (df_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_sports_section_distrito_federal_specific_context = document.getElementById('df-sports-section-distrito-federal-specific-context');
  if (df_sports_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-sports-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_sports_section_what_our_clients_say = document.getElementById('df-sports-section-what-our-clients-say');
  if (df_sports_section_what_our_clients_say) {
    gsap.fromTo('#df-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_sports_section_frequently_asked_questions = document.getElementById('df-sports-section-frequently-asked-questions');
  if (df_sports_section_frequently_asked_questions) {
    gsap.fromTo('#df-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_sports_section_international_support = document.getElementById('df-sports-section-international-support');
  if (df_sports_section_international_support) {
    gsap.fromTo('#df-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_sports_list_our_credentials = document.getElementById('df-sports-list-our-credentials');
  if (df_sports_list_our_credentials) {
    gsap.from('#df-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_sports_list_related_services = document.getElementById('df-sports-list-related-services');
  if (df_sports_list_related_services) {
    gsap.from('#df-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_sports_section_youre_in_good_hands = document.getElementById('df-sports-section-youre-in-good-hands');
  if (df_sports_section_youre_in_good_hands) {
    gsap.fromTo('#df-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_sports_section_21 = document.getElementById('df-sports-section-21');
  if (df_sports_section_21) {
    gsap.fromTo('#df-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('df-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (df_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#df-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #df-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_medical_list_quick_facts = document.getElementById('df-medical-list-quick-facts');
  if (df_medical_list_quick_facts) {
    gsap.from('#df-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_medical_list_common_challenges_applicants_face = document.getElementById('df-medical-list-common-challenges-applicants-face');
  if (df_medical_list_common_challenges_applicants_face) {
    gsap.from('#df-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_medical_list_how_we_solve_these_challenges = document.getElementById('df-medical-list-how-we-solve-these-challenges');
  if (df_medical_list_how_we_solve_these_challenges) {
    gsap.from('#df-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_medical_section_visa_overview = document.getElementById('df-medical-section-visa-overview');
  if (df_medical_section_visa_overview) {
    gsap.fromTo('#df-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_medical_form_who_is_this_visa_for = document.getElementById('df-medical-form-who-is-this-visa-for');
  if (df_medical_form_who_is_this_visa_for) {
    gsap.from('#df-medical-form-who-is-this-visa-for input, #df-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_medical_list_required_documents = document.getElementById('df-medical-list-required-documents');
  if (df_medical_list_required_documents) {
    gsap.from('#df-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_medical_list_application_process = document.getElementById('df-medical-list-application-process');
  if (df_medical_list_application_process) {
    gsap.from('#df-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_medical_section_timelines_deadlines = document.getElementById('df-medical-section-timelines-deadlines');
  if (df_medical_section_timelines_deadlines) {
    gsap.fromTo('#df-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_medical_section_fees_costs = document.getElementById('df-medical-section-fees-costs');
  if (df_medical_section_fees_costs) {
    gsap.fromTo('#df-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_medical_list_risks_common_mistakes = document.getElementById('df-medical-list-risks-common-mistakes');
  if (df_medical_list_risks_common_mistakes) {
    gsap.from('#df-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_medical_section_diy_vs_professional_assistance = document.getElementById('df-medical-section-diy-vs-professional-assistance');
  if (df_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_medical_section_distrito_federal_specific_context = document.getElementById('df-medical-section-distrito-federal-specific-context');
  if (df_medical_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-medical-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_medical_section_what_our_clients_say = document.getElementById('df-medical-section-what-our-clients-say');
  if (df_medical_section_what_our_clients_say) {
    gsap.fromTo('#df-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_medical_section_frequently_asked_questions = document.getElementById('df-medical-section-frequently-asked-questions');
  if (df_medical_section_frequently_asked_questions) {
    gsap.fromTo('#df-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_medical_section_international_support = document.getElementById('df-medical-section-international-support');
  if (df_medical_section_international_support) {
    gsap.fromTo('#df-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_medical_list_our_credentials = document.getElementById('df-medical-list-our-credentials');
  if (df_medical_list_our_credentials) {
    gsap.from('#df-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_medical_list_related_services = document.getElementById('df-medical-list-related-services');
  if (df_medical_list_related_services) {
    gsap.from('#df-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_medical_section_youre_in_good_hands = document.getElementById('df-medical-section-youre-in-good-hands');
  if (df_medical_section_youre_in_good_hands) {
    gsap.fromTo('#df-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_medical_section_21 = document.getElementById('df-medical-section-21');
  if (df_medical_section_21) {
    gsap.fromTo('#df-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('df-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (df_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#df-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #df-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_list_quick_facts = document.getElementById('df-tourist-list-quick-facts');
  if (df_tourist_list_quick_facts) {
    gsap.from('#df-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_list_common_challenges_applicants_face = document.getElementById('df-tourist-list-common-challenges-applicants-face');
  if (df_tourist_list_common_challenges_applicants_face) {
    gsap.from('#df-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_list_how_we_solve_these_challenges = document.getElementById('df-tourist-list-how-we-solve-these-challenges');
  if (df_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#df-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_section_visa_overview = document.getElementById('df-tourist-section-visa-overview');
  if (df_tourist_section_visa_overview) {
    gsap.fromTo('#df-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_form_who_is_this_visa_for = document.getElementById('df-tourist-form-who-is-this-visa-for');
  if (df_tourist_form_who_is_this_visa_for) {
    gsap.from('#df-tourist-form-who-is-this-visa-for input, #df-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_list_required_documents = document.getElementById('df-tourist-list-required-documents');
  if (df_tourist_list_required_documents) {
    gsap.from('#df-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_list_application_process = document.getElementById('df-tourist-list-application-process');
  if (df_tourist_list_application_process) {
    gsap.from('#df-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_section_timelines_deadlines = document.getElementById('df-tourist-section-timelines-deadlines');
  if (df_tourist_section_timelines_deadlines) {
    gsap.fromTo('#df-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_section_fees_costs = document.getElementById('df-tourist-section-fees-costs');
  if (df_tourist_section_fees_costs) {
    gsap.fromTo('#df-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_list_risks_common_mistakes = document.getElementById('df-tourist-list-risks-common-mistakes');
  if (df_tourist_list_risks_common_mistakes) {
    gsap.from('#df-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_section_diy_vs_professional_assistance = document.getElementById('df-tourist-section-diy-vs-professional-assistance');
  if (df_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_section_distrito_federal_specific_context = document.getElementById('df-tourist-section-distrito-federal-specific-context');
  if (df_tourist_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-tourist-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_section_what_our_clients_say = document.getElementById('df-tourist-section-what-our-clients-say');
  if (df_tourist_section_what_our_clients_say) {
    gsap.fromTo('#df-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_section_frequently_asked_questions = document.getElementById('df-tourist-section-frequently-asked-questions');
  if (df_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#df-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_section_international_support = document.getElementById('df-tourist-section-international-support');
  if (df_tourist_section_international_support) {
    gsap.fromTo('#df-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_list_our_credentials = document.getElementById('df-tourist-list-our-credentials');
  if (df_tourist_list_our_credentials) {
    gsap.from('#df-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_list_related_services = document.getElementById('df-tourist-list-related-services');
  if (df_tourist_list_related_services) {
    gsap.from('#df-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_section_youre_in_good_hands = document.getElementById('df-tourist-section-youre-in-good-hands');
  if (df_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#df-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_tourist_section_21 = document.getElementById('df-tourist-section-21');
  if (df_tourist_section_21) {
    gsap.fromTo('#df-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('df-transit-form-transit-through-brazil-with-the-transit-visa');
  if (df_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#df-transit-form-transit-through-brazil-with-the-transit-visa input, #df-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_transit_list_quick_facts = document.getElementById('df-transit-list-quick-facts');
  if (df_transit_list_quick_facts) {
    gsap.from('#df-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_transit_list_common_challenges_applicants_face = document.getElementById('df-transit-list-common-challenges-applicants-face');
  if (df_transit_list_common_challenges_applicants_face) {
    gsap.from('#df-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_transit_list_how_we_solve_these_challenges = document.getElementById('df-transit-list-how-we-solve-these-challenges');
  if (df_transit_list_how_we_solve_these_challenges) {
    gsap.from('#df-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_transit_section_visa_overview = document.getElementById('df-transit-section-visa-overview');
  if (df_transit_section_visa_overview) {
    gsap.fromTo('#df-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_transit_form_who_is_this_visa_for = document.getElementById('df-transit-form-who-is-this-visa-for');
  if (df_transit_form_who_is_this_visa_for) {
    gsap.from('#df-transit-form-who-is-this-visa-for input, #df-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_transit_list_required_documents = document.getElementById('df-transit-list-required-documents');
  if (df_transit_list_required_documents) {
    gsap.from('#df-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_transit_list_application_process = document.getElementById('df-transit-list-application-process');
  if (df_transit_list_application_process) {
    gsap.from('#df-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_transit_section_timelines_deadlines = document.getElementById('df-transit-section-timelines-deadlines');
  if (df_transit_section_timelines_deadlines) {
    gsap.fromTo('#df-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_transit_section_fees_costs = document.getElementById('df-transit-section-fees-costs');
  if (df_transit_section_fees_costs) {
    gsap.fromTo('#df-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_transit_list_risks_common_mistakes = document.getElementById('df-transit-list-risks-common-mistakes');
  if (df_transit_list_risks_common_mistakes) {
    gsap.from('#df-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_transit_section_diy_vs_professional_assistance = document.getElementById('df-transit-section-diy-vs-professional-assistance');
  if (df_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_transit_section_distrito_federal_specific_context = document.getElementById('df-transit-section-distrito-federal-specific-context');
  if (df_transit_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-transit-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_transit_section_what_our_clients_say = document.getElementById('df-transit-section-what-our-clients-say');
  if (df_transit_section_what_our_clients_say) {
    gsap.fromTo('#df-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_transit_section_frequently_asked_questions = document.getElementById('df-transit-section-frequently-asked-questions');
  if (df_transit_section_frequently_asked_questions) {
    gsap.fromTo('#df-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_transit_section_international_support = document.getElementById('df-transit-section-international-support');
  if (df_transit_section_international_support) {
    gsap.fromTo('#df-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_transit_list_our_credentials = document.getElementById('df-transit-list-our-credentials');
  if (df_transit_list_our_credentials) {
    gsap.from('#df-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_transit_list_related_services = document.getElementById('df-transit-list-related-services');
  if (df_transit_list_related_services) {
    gsap.from('#df-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_transit_section_youre_in_good_hands = document.getElementById('df-transit-section-youre-in-good-hands');
  if (df_transit_section_youre_in_good_hands) {
    gsap.fromTo('#df-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_transit_section_21 = document.getElementById('df-transit-section-21');
  if (df_transit_section_21) {
    gsap.fromTo('#df-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_student_form_study_in_brazil_with_the_student_visa = document.getElementById('df-student-form-study-in-brazil-with-the-student-visa');
  if (df_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#df-student-form-study-in-brazil-with-the-student-visa input, #df-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_student_list_quick_facts = document.getElementById('df-student-list-quick-facts');
  if (df_student_list_quick_facts) {
    gsap.from('#df-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_student_list_common_challenges_applicants_face = document.getElementById('df-student-list-common-challenges-applicants-face');
  if (df_student_list_common_challenges_applicants_face) {
    gsap.from('#df-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_student_list_how_we_solve_these_challenges = document.getElementById('df-student-list-how-we-solve-these-challenges');
  if (df_student_list_how_we_solve_these_challenges) {
    gsap.from('#df-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_student_section_visa_overview = document.getElementById('df-student-section-visa-overview');
  if (df_student_section_visa_overview) {
    gsap.fromTo('#df-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_student_form_who_is_this_visa_for = document.getElementById('df-student-form-who-is-this-visa-for');
  if (df_student_form_who_is_this_visa_for) {
    gsap.from('#df-student-form-who-is-this-visa-for input, #df-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_student_list_required_documents = document.getElementById('df-student-list-required-documents');
  if (df_student_list_required_documents) {
    gsap.from('#df-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_student_list_application_process = document.getElementById('df-student-list-application-process');
  if (df_student_list_application_process) {
    gsap.from('#df-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_student_section_timelines_deadlines = document.getElementById('df-student-section-timelines-deadlines');
  if (df_student_section_timelines_deadlines) {
    gsap.fromTo('#df-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_student_section_fees_costs = document.getElementById('df-student-section-fees-costs');
  if (df_student_section_fees_costs) {
    gsap.fromTo('#df-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_student_list_risks_common_mistakes = document.getElementById('df-student-list-risks-common-mistakes');
  if (df_student_list_risks_common_mistakes) {
    gsap.from('#df-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_student_section_diy_vs_professional_assistance = document.getElementById('df-student-section-diy-vs-professional-assistance');
  if (df_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_student_section_distrito_federal_specific_context = document.getElementById('df-student-section-distrito-federal-specific-context');
  if (df_student_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-student-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_student_section_what_our_clients_say = document.getElementById('df-student-section-what-our-clients-say');
  if (df_student_section_what_our_clients_say) {
    gsap.fromTo('#df-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_student_section_frequently_asked_questions = document.getElementById('df-student-section-frequently-asked-questions');
  if (df_student_section_frequently_asked_questions) {
    gsap.fromTo('#df-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_student_section_international_support = document.getElementById('df-student-section-international-support');
  if (df_student_section_international_support) {
    gsap.fromTo('#df-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_student_list_our_credentials = document.getElementById('df-student-list-our-credentials');
  if (df_student_list_our_credentials) {
    gsap.from('#df-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_student_list_related_services = document.getElementById('df-student-list-related-services');
  if (df_student_list_related_services) {
    gsap.from('#df-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_student_section_youre_in_good_hands = document.getElementById('df-student-section-youre-in-good-hands');
  if (df_student_section_youre_in_good_hands) {
    gsap.fromTo('#df-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_student_section_21 = document.getElementById('df-student-section-21');
  if (df_student_section_21) {
    gsap.fromTo('#df-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('df-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (df_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#df-business-form-conduct-business-in-brazil-with-the-business-visa input, #df-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_business_list_quick_facts = document.getElementById('df-business-list-quick-facts');
  if (df_business_list_quick_facts) {
    gsap.from('#df-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_business_list_common_challenges_applicants_face = document.getElementById('df-business-list-common-challenges-applicants-face');
  if (df_business_list_common_challenges_applicants_face) {
    gsap.from('#df-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_business_list_how_we_solve_these_challenges = document.getElementById('df-business-list-how-we-solve-these-challenges');
  if (df_business_list_how_we_solve_these_challenges) {
    gsap.from('#df-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_business_section_visa_overview = document.getElementById('df-business-section-visa-overview');
  if (df_business_section_visa_overview) {
    gsap.fromTo('#df-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_business_form_who_is_this_visa_for = document.getElementById('df-business-form-who-is-this-visa-for');
  if (df_business_form_who_is_this_visa_for) {
    gsap.from('#df-business-form-who-is-this-visa-for input, #df-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_business_list_required_documents = document.getElementById('df-business-list-required-documents');
  if (df_business_list_required_documents) {
    gsap.from('#df-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_business_list_application_process = document.getElementById('df-business-list-application-process');
  if (df_business_list_application_process) {
    gsap.from('#df-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_business_section_timelines_deadlines = document.getElementById('df-business-section-timelines-deadlines');
  if (df_business_section_timelines_deadlines) {
    gsap.fromTo('#df-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_business_section_fees_costs = document.getElementById('df-business-section-fees-costs');
  if (df_business_section_fees_costs) {
    gsap.fromTo('#df-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_business_list_risks_common_mistakes = document.getElementById('df-business-list-risks-common-mistakes');
  if (df_business_list_risks_common_mistakes) {
    gsap.from('#df-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_business_section_diy_vs_professional_assistance = document.getElementById('df-business-section-diy-vs-professional-assistance');
  if (df_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_business_section_distrito_federal_specific_context = document.getElementById('df-business-section-distrito-federal-specific-context');
  if (df_business_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-business-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_business_section_what_our_clients_say = document.getElementById('df-business-section-what-our-clients-say');
  if (df_business_section_what_our_clients_say) {
    gsap.fromTo('#df-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_business_section_frequently_asked_questions = document.getElementById('df-business-section-frequently-asked-questions');
  if (df_business_section_frequently_asked_questions) {
    gsap.fromTo('#df-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_business_section_international_support = document.getElementById('df-business-section-international-support');
  if (df_business_section_international_support) {
    gsap.fromTo('#df-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_business_list_our_credentials = document.getElementById('df-business-list-our-credentials');
  if (df_business_list_our_credentials) {
    gsap.from('#df-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_business_list_related_services = document.getElementById('df-business-list-related-services');
  if (df_business_list_related_services) {
    gsap.from('#df-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_business_section_youre_in_good_hands = document.getElementById('df-business-section-youre-in-good-hands');
  if (df_business_section_youre_in_good_hands) {
    gsap.fromTo('#df-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_business_section_21 = document.getElementById('df-business-section-21');
  if (df_business_section_21) {
    gsap.fromTo('#df-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('df-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (df_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#df-research-form-conduct-research-in-brazil-with-the-research-visa input, #df-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_research_list_quick_facts = document.getElementById('df-research-list-quick-facts');
  if (df_research_list_quick_facts) {
    gsap.from('#df-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_research_list_common_challenges_applicants_face = document.getElementById('df-research-list-common-challenges-applicants-face');
  if (df_research_list_common_challenges_applicants_face) {
    gsap.from('#df-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_research_list_how_we_solve_these_challenges = document.getElementById('df-research-list-how-we-solve-these-challenges');
  if (df_research_list_how_we_solve_these_challenges) {
    gsap.from('#df-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_research_section_visa_overview = document.getElementById('df-research-section-visa-overview');
  if (df_research_section_visa_overview) {
    gsap.fromTo('#df-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_research_form_who_is_this_visa_for = document.getElementById('df-research-form-who-is-this-visa-for');
  if (df_research_form_who_is_this_visa_for) {
    gsap.from('#df-research-form-who-is-this-visa-for input, #df-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_research_list_required_documents = document.getElementById('df-research-list-required-documents');
  if (df_research_list_required_documents) {
    gsap.from('#df-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_research_list_application_process = document.getElementById('df-research-list-application-process');
  if (df_research_list_application_process) {
    gsap.from('#df-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_research_section_timelines_deadlines = document.getElementById('df-research-section-timelines-deadlines');
  if (df_research_section_timelines_deadlines) {
    gsap.fromTo('#df-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_research_section_fees_costs = document.getElementById('df-research-section-fees-costs');
  if (df_research_section_fees_costs) {
    gsap.fromTo('#df-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_research_list_risks_common_mistakes = document.getElementById('df-research-list-risks-common-mistakes');
  if (df_research_list_risks_common_mistakes) {
    gsap.from('#df-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_research_section_diy_vs_professional_assistance = document.getElementById('df-research-section-diy-vs-professional-assistance');
  if (df_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_research_section_distrito_federal_specific_context = document.getElementById('df-research-section-distrito-federal-specific-context');
  if (df_research_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-research-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_research_section_what_our_clients_say = document.getElementById('df-research-section-what-our-clients-say');
  if (df_research_section_what_our_clients_say) {
    gsap.fromTo('#df-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_research_section_frequently_asked_questions = document.getElementById('df-research-section-frequently-asked-questions');
  if (df_research_section_frequently_asked_questions) {
    gsap.fromTo('#df-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_research_section_international_support = document.getElementById('df-research-section-international-support');
  if (df_research_section_international_support) {
    gsap.fromTo('#df-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_research_list_our_credentials = document.getElementById('df-research-list-our-credentials');
  if (df_research_list_our_credentials) {
    gsap.from('#df-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_research_list_related_services = document.getElementById('df-research-list-related-services');
  if (df_research_list_related_services) {
    gsap.from('#df-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_research_section_youre_in_good_hands = document.getElementById('df-research-section-youre-in-good-hands');
  if (df_research_section_youre_in_good_hands) {
    gsap.fromTo('#df-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_research_section_21 = document.getElementById('df-research-section-21');
  if (df_research_section_21) {
    gsap.fromTo('#df-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('df-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (df_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#df-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #df-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_list_quick_facts = document.getElementById('df-diplomatic-list-quick-facts');
  if (df_diplomatic_list_quick_facts) {
    gsap.from('#df-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_list_common_challenges_applicants_face = document.getElementById('df-diplomatic-list-common-challenges-applicants-face');
  if (df_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#df-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_list_how_we_solve_these_challenges = document.getElementById('df-diplomatic-list-how-we-solve-these-challenges');
  if (df_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#df-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_section_visa_overview = document.getElementById('df-diplomatic-section-visa-overview');
  if (df_diplomatic_section_visa_overview) {
    gsap.fromTo('#df-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_form_who_is_this_visa_for = document.getElementById('df-diplomatic-form-who-is-this-visa-for');
  if (df_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#df-diplomatic-form-who-is-this-visa-for input, #df-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_list_required_documents = document.getElementById('df-diplomatic-list-required-documents');
  if (df_diplomatic_list_required_documents) {
    gsap.from('#df-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_list_application_process = document.getElementById('df-diplomatic-list-application-process');
  if (df_diplomatic_list_application_process) {
    gsap.from('#df-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_section_timelines_deadlines = document.getElementById('df-diplomatic-section-timelines-deadlines');
  if (df_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#df-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_section_fees_costs = document.getElementById('df-diplomatic-section-fees-costs');
  if (df_diplomatic_section_fees_costs) {
    gsap.fromTo('#df-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_list_risks_common_mistakes = document.getElementById('df-diplomatic-list-risks-common-mistakes');
  if (df_diplomatic_list_risks_common_mistakes) {
    gsap.from('#df-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_section_diy_vs_professional_assistance = document.getElementById('df-diplomatic-section-diy-vs-professional-assistance');
  if (df_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_section_distrito_federal_specific_context = document.getElementById('df-diplomatic-section-distrito-federal-specific-context');
  if (df_diplomatic_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-diplomatic-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_section_what_our_clients_say = document.getElementById('df-diplomatic-section-what-our-clients-say');
  if (df_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#df-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_section_frequently_asked_questions = document.getElementById('df-diplomatic-section-frequently-asked-questions');
  if (df_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#df-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_section_international_support = document.getElementById('df-diplomatic-section-international-support');
  if (df_diplomatic_section_international_support) {
    gsap.fromTo('#df-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_list_our_credentials = document.getElementById('df-diplomatic-list-our-credentials');
  if (df_diplomatic_list_our_credentials) {
    gsap.from('#df-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_list_related_services = document.getElementById('df-diplomatic-list-related-services');
  if (df_diplomatic_list_related_services) {
    gsap.from('#df-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_section_youre_in_good_hands = document.getElementById('df-diplomatic-section-youre-in-good-hands');
  if (df_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#df-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_diplomatic_section_21 = document.getElementById('df-diplomatic-section-21');
  if (df_diplomatic_section_21) {
    gsap.fromTo('#df-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('df-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (df_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#df-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #df-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_list_quick_facts = document.getElementById('df-journalist-list-quick-facts');
  if (df_journalist_list_quick_facts) {
    gsap.from('#df-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_list_common_challenges_applicants_face = document.getElementById('df-journalist-list-common-challenges-applicants-face');
  if (df_journalist_list_common_challenges_applicants_face) {
    gsap.from('#df-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_list_how_we_solve_these_challenges = document.getElementById('df-journalist-list-how-we-solve-these-challenges');
  if (df_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#df-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_section_visa_overview = document.getElementById('df-journalist-section-visa-overview');
  if (df_journalist_section_visa_overview) {
    gsap.fromTo('#df-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_form_who_is_this_visa_for = document.getElementById('df-journalist-form-who-is-this-visa-for');
  if (df_journalist_form_who_is_this_visa_for) {
    gsap.from('#df-journalist-form-who-is-this-visa-for input, #df-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_list_required_documents = document.getElementById('df-journalist-list-required-documents');
  if (df_journalist_list_required_documents) {
    gsap.from('#df-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_list_application_process = document.getElementById('df-journalist-list-application-process');
  if (df_journalist_list_application_process) {
    gsap.from('#df-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_section_timelines_deadlines = document.getElementById('df-journalist-section-timelines-deadlines');
  if (df_journalist_section_timelines_deadlines) {
    gsap.fromTo('#df-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_section_fees_costs = document.getElementById('df-journalist-section-fees-costs');
  if (df_journalist_section_fees_costs) {
    gsap.fromTo('#df-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_list_risks_common_mistakes = document.getElementById('df-journalist-list-risks-common-mistakes');
  if (df_journalist_list_risks_common_mistakes) {
    gsap.from('#df-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_section_diy_vs_professional_assistance = document.getElementById('df-journalist-section-diy-vs-professional-assistance');
  if (df_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_section_distrito_federal_specific_context = document.getElementById('df-journalist-section-distrito-federal-specific-context');
  if (df_journalist_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-journalist-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_section_what_our_clients_say = document.getElementById('df-journalist-section-what-our-clients-say');
  if (df_journalist_section_what_our_clients_say) {
    gsap.fromTo('#df-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_section_frequently_asked_questions = document.getElementById('df-journalist-section-frequently-asked-questions');
  if (df_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#df-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_section_international_support = document.getElementById('df-journalist-section-international-support');
  if (df_journalist_section_international_support) {
    gsap.fromTo('#df-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_list_our_credentials = document.getElementById('df-journalist-list-our-credentials');
  if (df_journalist_list_our_credentials) {
    gsap.from('#df-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_list_related_services = document.getElementById('df-journalist-list-related-services');
  if (df_journalist_list_related_services) {
    gsap.from('#df-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_section_youre_in_good_hands = document.getElementById('df-journalist-section-youre-in-good-hands');
  if (df_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#df-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_journalist_section_21 = document.getElementById('df-journalist-section-21');
  if (df_journalist_section_21) {
    gsap.fromTo('#df-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('df-fines-form-resolve-immigration-fines-in-brazil');
  if (df_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#df-fines-form-resolve-immigration-fines-in-brazil input, #df-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_fines_list_quick_facts = document.getElementById('df-fines-list-quick-facts');
  if (df_fines_list_quick_facts) {
    gsap.from('#df-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_fines_list_common_challenges_applicants_face = document.getElementById('df-fines-list-common-challenges-applicants-face');
  if (df_fines_list_common_challenges_applicants_face) {
    gsap.from('#df-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_fines_list_how_we_solve_these_challenges = document.getElementById('df-fines-list-how-we-solve-these-challenges');
  if (df_fines_list_how_we_solve_these_challenges) {
    gsap.from('#df-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_fines_section_service_overview = document.getElementById('df-fines-section-service-overview');
  if (df_fines_section_service_overview) {
    gsap.fromTo('#df-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_fines_form_who_is_this_service_for = document.getElementById('df-fines-form-who-is-this-service-for');
  if (df_fines_form_who_is_this_service_for) {
    gsap.from('#df-fines-form-who-is-this-service-for input, #df-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_fines_list_required_documents = document.getElementById('df-fines-list-required-documents');
  if (df_fines_list_required_documents) {
    gsap.from('#df-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_fines_list_process = document.getElementById('df-fines-list-process');
  if (df_fines_list_process) {
    gsap.from('#df-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_fines_section_timelines_deadlines = document.getElementById('df-fines-section-timelines-deadlines');
  if (df_fines_section_timelines_deadlines) {
    gsap.fromTo('#df-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_fines_section_fees_costs = document.getElementById('df-fines-section-fees-costs');
  if (df_fines_section_fees_costs) {
    gsap.fromTo('#df-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_fines_list_risks_common_mistakes = document.getElementById('df-fines-list-risks-common-mistakes');
  if (df_fines_list_risks_common_mistakes) {
    gsap.from('#df-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_fines_section_diy_vs_professional_assistance = document.getElementById('df-fines-section-diy-vs-professional-assistance');
  if (df_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_fines_section_distrito_federal_specific_context = document.getElementById('df-fines-section-distrito-federal-specific-context');
  if (df_fines_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-fines-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_fines_section_what_our_clients_say = document.getElementById('df-fines-section-what-our-clients-say');
  if (df_fines_section_what_our_clients_say) {
    gsap.fromTo('#df-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_fines_section_frequently_asked_questions = document.getElementById('df-fines-section-frequently-asked-questions');
  if (df_fines_section_frequently_asked_questions) {
    gsap.fromTo('#df-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_fines_section_international_support = document.getElementById('df-fines-section-international-support');
  if (df_fines_section_international_support) {
    gsap.fromTo('#df-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_fines_list_our_credentials = document.getElementById('df-fines-list-our-credentials');
  if (df_fines_list_our_credentials) {
    gsap.from('#df-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_fines_list_related_services = document.getElementById('df-fines-list-related-services');
  if (df_fines_list_related_services) {
    gsap.from('#df-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_fines_section_youre_in_good_hands = document.getElementById('df-fines-section-youre-in-good-hands');
  if (df_fines_section_youre_in_good_hands) {
    gsap.fromTo('#df-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_fines_section_21 = document.getElementById('df-fines-section-21');
  if (df_fines_section_21) {
    gsap.fromTo('#df-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_form_deportation_assistance_in_brazil = document.getElementById('df-deportation-form-deportation-assistance-in-brazil');
  if (df_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#df-deportation-form-deportation-assistance-in-brazil input, #df-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_list_quick_facts = document.getElementById('df-deportation-list-quick-facts');
  if (df_deportation_list_quick_facts) {
    gsap.from('#df-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_list_common_challenges_applicants_face = document.getElementById('df-deportation-list-common-challenges-applicants-face');
  if (df_deportation_list_common_challenges_applicants_face) {
    gsap.from('#df-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_list_how_we_solve_these_challenges = document.getElementById('df-deportation-list-how-we-solve-these-challenges');
  if (df_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#df-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_section_service_overview = document.getElementById('df-deportation-section-service-overview');
  if (df_deportation_section_service_overview) {
    gsap.fromTo('#df-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_form_who_is_this_service_for = document.getElementById('df-deportation-form-who-is-this-service-for');
  if (df_deportation_form_who_is_this_service_for) {
    gsap.from('#df-deportation-form-who-is-this-service-for input, #df-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_list_required_documents = document.getElementById('df-deportation-list-required-documents');
  if (df_deportation_list_required_documents) {
    gsap.from('#df-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_list_process = document.getElementById('df-deportation-list-process');
  if (df_deportation_list_process) {
    gsap.from('#df-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_section_timelines_deadlines = document.getElementById('df-deportation-section-timelines-deadlines');
  if (df_deportation_section_timelines_deadlines) {
    gsap.fromTo('#df-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_section_fees_costs = document.getElementById('df-deportation-section-fees-costs');
  if (df_deportation_section_fees_costs) {
    gsap.fromTo('#df-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_list_risks_common_mistakes = document.getElementById('df-deportation-list-risks-common-mistakes');
  if (df_deportation_list_risks_common_mistakes) {
    gsap.from('#df-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_section_diy_vs_professional_assistance = document.getElementById('df-deportation-section-diy-vs-professional-assistance');
  if (df_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_section_distrito_federal_specific_context = document.getElementById('df-deportation-section-distrito-federal-specific-context');
  if (df_deportation_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-deportation-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_section_what_our_clients_say = document.getElementById('df-deportation-section-what-our-clients-say');
  if (df_deportation_section_what_our_clients_say) {
    gsap.fromTo('#df-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_section_frequently_asked_questions = document.getElementById('df-deportation-section-frequently-asked-questions');
  if (df_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#df-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_section_international_support = document.getElementById('df-deportation-section-international-support');
  if (df_deportation_section_international_support) {
    gsap.fromTo('#df-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_list_our_credentials = document.getElementById('df-deportation-list-our-credentials');
  if (df_deportation_list_our_credentials) {
    gsap.from('#df-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_list_related_services = document.getElementById('df-deportation-list-related-services');
  if (df_deportation_list_related_services) {
    gsap.from('#df-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_section_youre_in_good_hands = document.getElementById('df-deportation-section-youre-in-good-hands');
  if (df_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#df-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_deportation_section_21 = document.getElementById('df-deportation-section-21');
  if (df_deportation_section_21) {
    gsap.fromTo('#df-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('df-translation-form-sworn-document-translation-services-in-brazil');
  if (df_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#df-translation-form-sworn-document-translation-services-in-brazil input, #df-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_translation_list_quick_facts = document.getElementById('df-translation-list-quick-facts');
  if (df_translation_list_quick_facts) {
    gsap.from('#df-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_translation_list_common_challenges_applicants_face = document.getElementById('df-translation-list-common-challenges-applicants-face');
  if (df_translation_list_common_challenges_applicants_face) {
    gsap.from('#df-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_translation_list_how_we_solve_these_challenges = document.getElementById('df-translation-list-how-we-solve-these-challenges');
  if (df_translation_list_how_we_solve_these_challenges) {
    gsap.from('#df-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_translation_section_service_overview = document.getElementById('df-translation-section-service-overview');
  if (df_translation_section_service_overview) {
    gsap.fromTo('#df-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_translation_form_who_is_this_service_for = document.getElementById('df-translation-form-who-is-this-service-for');
  if (df_translation_form_who_is_this_service_for) {
    gsap.from('#df-translation-form-who-is-this-service-for input, #df-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_translation_list_required_documents = document.getElementById('df-translation-list-required-documents');
  if (df_translation_list_required_documents) {
    gsap.from('#df-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_translation_list_process = document.getElementById('df-translation-list-process');
  if (df_translation_list_process) {
    gsap.from('#df-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_translation_section_timelines_deadlines = document.getElementById('df-translation-section-timelines-deadlines');
  if (df_translation_section_timelines_deadlines) {
    gsap.fromTo('#df-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_translation_section_fees_costs = document.getElementById('df-translation-section-fees-costs');
  if (df_translation_section_fees_costs) {
    gsap.fromTo('#df-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_translation_list_risks_common_mistakes = document.getElementById('df-translation-list-risks-common-mistakes');
  if (df_translation_list_risks_common_mistakes) {
    gsap.from('#df-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_translation_section_diy_vs_professional_assistance = document.getElementById('df-translation-section-diy-vs-professional-assistance');
  if (df_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_translation_section_distrito_federal_specific_context = document.getElementById('df-translation-section-distrito-federal-specific-context');
  if (df_translation_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-translation-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_translation_section_what_our_clients_say = document.getElementById('df-translation-section-what-our-clients-say');
  if (df_translation_section_what_our_clients_say) {
    gsap.fromTo('#df-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_translation_section_frequently_asked_questions = document.getElementById('df-translation-section-frequently-asked-questions');
  if (df_translation_section_frequently_asked_questions) {
    gsap.fromTo('#df-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_translation_section_international_support = document.getElementById('df-translation-section-international-support');
  if (df_translation_section_international_support) {
    gsap.fromTo('#df-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_translation_list_our_credentials = document.getElementById('df-translation-list-our-credentials');
  if (df_translation_list_our_credentials) {
    gsap.from('#df-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_translation_list_related_services = document.getElementById('df-translation-list-related-services');
  if (df_translation_list_related_services) {
    gsap.from('#df-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_translation_section_youre_in_good_hands = document.getElementById('df-translation-section-youre-in-good-hands');
  if (df_translation_section_youre_in_good_hands) {
    gsap.fromTo('#df-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_translation_section_21 = document.getElementById('df-translation-section-21');
  if (df_translation_section_21) {
    gsap.fromTo('#df-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('df-expulsion-form-expulsion-assistance-in-brazil');
  if (df_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#df-expulsion-form-expulsion-assistance-in-brazil input, #df-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_list_quick_facts = document.getElementById('df-expulsion-list-quick-facts');
  if (df_expulsion_list_quick_facts) {
    gsap.from('#df-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_list_common_challenges_applicants_face = document.getElementById('df-expulsion-list-common-challenges-applicants-face');
  if (df_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#df-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_list_how_we_solve_these_challenges = document.getElementById('df-expulsion-list-how-we-solve-these-challenges');
  if (df_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#df-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_section_service_overview = document.getElementById('df-expulsion-section-service-overview');
  if (df_expulsion_section_service_overview) {
    gsap.fromTo('#df-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_form_who_is_this_service_for = document.getElementById('df-expulsion-form-who-is-this-service-for');
  if (df_expulsion_form_who_is_this_service_for) {
    gsap.from('#df-expulsion-form-who-is-this-service-for input, #df-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_list_required_documents = document.getElementById('df-expulsion-list-required-documents');
  if (df_expulsion_list_required_documents) {
    gsap.from('#df-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_list_process = document.getElementById('df-expulsion-list-process');
  if (df_expulsion_list_process) {
    gsap.from('#df-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_section_timelines_deadlines = document.getElementById('df-expulsion-section-timelines-deadlines');
  if (df_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#df-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_section_fees_costs = document.getElementById('df-expulsion-section-fees-costs');
  if (df_expulsion_section_fees_costs) {
    gsap.fromTo('#df-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_list_risks_common_mistakes = document.getElementById('df-expulsion-list-risks-common-mistakes');
  if (df_expulsion_list_risks_common_mistakes) {
    gsap.from('#df-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_section_diy_vs_professional_assistance = document.getElementById('df-expulsion-section-diy-vs-professional-assistance');
  if (df_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_section_distrito_federal_specific_context = document.getElementById('df-expulsion-section-distrito-federal-specific-context');
  if (df_expulsion_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-expulsion-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_section_what_our_clients_say = document.getElementById('df-expulsion-section-what-our-clients-say');
  if (df_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#df-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_section_frequently_asked_questions = document.getElementById('df-expulsion-section-frequently-asked-questions');
  if (df_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#df-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_section_international_support = document.getElementById('df-expulsion-section-international-support');
  if (df_expulsion_section_international_support) {
    gsap.fromTo('#df-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_list_our_credentials = document.getElementById('df-expulsion-list-our-credentials');
  if (df_expulsion_list_our_credentials) {
    gsap.from('#df-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_list_related_services = document.getElementById('df-expulsion-list-related-services');
  if (df_expulsion_list_related_services) {
    gsap.from('#df-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_section_youre_in_good_hands = document.getElementById('df-expulsion-section-youre-in-good-hands');
  if (df_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#df-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_expulsion_section_21 = document.getElementById('df-expulsion-section-21');
  if (df_expulsion_section_21) {
    gsap.fromTo('#df-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('df-appeals-form-appeal-immigration-denials-in-brazil');
  if (df_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#df-appeals-form-appeal-immigration-denials-in-brazil input, #df-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_list_quick_facts = document.getElementById('df-appeals-list-quick-facts');
  if (df_appeals_list_quick_facts) {
    gsap.from('#df-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_list_common_challenges_applicants_face = document.getElementById('df-appeals-list-common-challenges-applicants-face');
  if (df_appeals_list_common_challenges_applicants_face) {
    gsap.from('#df-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_list_how_we_solve_these_challenges = document.getElementById('df-appeals-list-how-we-solve-these-challenges');
  if (df_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#df-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_section_service_overview = document.getElementById('df-appeals-section-service-overview');
  if (df_appeals_section_service_overview) {
    gsap.fromTo('#df-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_form_who_is_this_service_for = document.getElementById('df-appeals-form-who-is-this-service-for');
  if (df_appeals_form_who_is_this_service_for) {
    gsap.from('#df-appeals-form-who-is-this-service-for input, #df-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_list_required_documents = document.getElementById('df-appeals-list-required-documents');
  if (df_appeals_list_required_documents) {
    gsap.from('#df-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_list_appeal_process = document.getElementById('df-appeals-list-appeal-process');
  if (df_appeals_list_appeal_process) {
    gsap.from('#df-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_section_timelines_deadlines = document.getElementById('df-appeals-section-timelines-deadlines');
  if (df_appeals_section_timelines_deadlines) {
    gsap.fromTo('#df-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_section_fees_costs = document.getElementById('df-appeals-section-fees-costs');
  if (df_appeals_section_fees_costs) {
    gsap.fromTo('#df-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_list_risks_common_mistakes = document.getElementById('df-appeals-list-risks-common-mistakes');
  if (df_appeals_list_risks_common_mistakes) {
    gsap.from('#df-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_section_diy_vs_professional_assistance = document.getElementById('df-appeals-section-diy-vs-professional-assistance');
  if (df_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_section_distrito_federal_specific_context = document.getElementById('df-appeals-section-distrito-federal-specific-context');
  if (df_appeals_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-appeals-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_section_what_our_clients_say = document.getElementById('df-appeals-section-what-our-clients-say');
  if (df_appeals_section_what_our_clients_say) {
    gsap.fromTo('#df-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_section_frequently_asked_questions = document.getElementById('df-appeals-section-frequently-asked-questions');
  if (df_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#df-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_section_international_support = document.getElementById('df-appeals-section-international-support');
  if (df_appeals_section_international_support) {
    gsap.fromTo('#df-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_list_our_credentials = document.getElementById('df-appeals-list-our-credentials');
  if (df_appeals_list_our_credentials) {
    gsap.from('#df-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_list_related_services = document.getElementById('df-appeals-list-related-services');
  if (df_appeals_list_related_services) {
    gsap.from('#df-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_section_youre_in_good_hands = document.getElementById('df-appeals-section-youre-in-good-hands');
  if (df_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#df-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_appeals_section_21 = document.getElementById('df-appeals-section-21');
  if (df_appeals_section_21) {
    gsap.fromTo('#df-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('df-consular-form-consular-services-in-brazil-for-citizens');
  if (df_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#df-consular-form-consular-services-in-brazil-for-citizens input, #df-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_consular_list_quick_facts = document.getElementById('df-consular-list-quick-facts');
  if (df_consular_list_quick_facts) {
    gsap.from('#df-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_consular_list_common_challenges_applicants_face = document.getElementById('df-consular-list-common-challenges-applicants-face');
  if (df_consular_list_common_challenges_applicants_face) {
    gsap.from('#df-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_consular_list_how_we_solve_these_challenges = document.getElementById('df-consular-list-how-we-solve-these-challenges');
  if (df_consular_list_how_we_solve_these_challenges) {
    gsap.from('#df-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_consular_section_service_overview = document.getElementById('df-consular-section-service-overview');
  if (df_consular_section_service_overview) {
    gsap.fromTo('#df-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_consular_form_who_is_this_service_for = document.getElementById('df-consular-form-who-is-this-service-for');
  if (df_consular_form_who_is_this_service_for) {
    gsap.from('#df-consular-form-who-is-this-service-for input, #df-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_consular_list_required_documents = document.getElementById('df-consular-list-required-documents');
  if (df_consular_list_required_documents) {
    gsap.from('#df-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_consular_list_process = document.getElementById('df-consular-list-process');
  if (df_consular_list_process) {
    gsap.from('#df-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_consular_section_timelines_deadlines = document.getElementById('df-consular-section-timelines-deadlines');
  if (df_consular_section_timelines_deadlines) {
    gsap.fromTo('#df-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_consular_section_fees_costs = document.getElementById('df-consular-section-fees-costs');
  if (df_consular_section_fees_costs) {
    gsap.fromTo('#df-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_consular_list_risks_common_mistakes = document.getElementById('df-consular-list-risks-common-mistakes');
  if (df_consular_list_risks_common_mistakes) {
    gsap.from('#df-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_consular_section_diy_vs_professional_assistance = document.getElementById('df-consular-section-diy-vs-professional-assistance');
  if (df_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_consular_section_distrito_federal_specific_context = document.getElementById('df-consular-section-distrito-federal-specific-context');
  if (df_consular_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-consular-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_consular_section_what_our_clients_say = document.getElementById('df-consular-section-what-our-clients-say');
  if (df_consular_section_what_our_clients_say) {
    gsap.fromTo('#df-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_consular_section_frequently_asked_questions = document.getElementById('df-consular-section-frequently-asked-questions');
  if (df_consular_section_frequently_asked_questions) {
    gsap.fromTo('#df-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_consular_section_international_support = document.getElementById('df-consular-section-international-support');
  if (df_consular_section_international_support) {
    gsap.fromTo('#df-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_consular_list_our_credentials = document.getElementById('df-consular-list-our-credentials');
  if (df_consular_list_our_credentials) {
    gsap.from('#df-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_consular_list_related_services = document.getElementById('df-consular-list-related-services');
  if (df_consular_list_related_services) {
    gsap.from('#df-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_consular_section_youre_in_good_hands = document.getElementById('df-consular-section-youre-in-good-hands');
  if (df_consular_section_youre_in_good_hands) {
    gsap.fromTo('#df-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_consular_section_21 = document.getElementById('df-consular-section-21');
  if (df_consular_section_21) {
    gsap.fromTo('#df-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('df-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (df_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#df-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #df-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_list_quick_facts = document.getElementById('df-criminalrecords-list-quick-facts');
  if (df_criminalrecords_list_quick_facts) {
    gsap.from('#df-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_list_common_challenges_applicants_face = document.getElementById('df-criminalrecords-list-common-challenges-applicants-face');
  if (df_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#df-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('df-criminalrecords-list-how-we-solve-these-challenges');
  if (df_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#df-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_section_service_overview = document.getElementById('df-criminalrecords-section-service-overview');
  if (df_criminalrecords_section_service_overview) {
    gsap.fromTo('#df-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_form_who_is_this_service_for = document.getElementById('df-criminalrecords-form-who-is-this-service-for');
  if (df_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#df-criminalrecords-form-who-is-this-service-for input, #df-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_list_required_documents = document.getElementById('df-criminalrecords-list-required-documents');
  if (df_criminalrecords_list_required_documents) {
    gsap.from('#df-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_list_process = document.getElementById('df-criminalrecords-list-process');
  if (df_criminalrecords_list_process) {
    gsap.from('#df-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_section_timelines_deadlines = document.getElementById('df-criminalrecords-section-timelines-deadlines');
  if (df_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#df-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_section_fees_costs = document.getElementById('df-criminalrecords-section-fees-costs');
  if (df_criminalrecords_section_fees_costs) {
    gsap.fromTo('#df-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_list_risks_common_mistakes = document.getElementById('df-criminalrecords-list-risks-common-mistakes');
  if (df_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#df-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('df-criminalrecords-section-diy-vs-professional-assistance');
  if (df_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_section_distrito_federal_specific_context = document.getElementById('df-criminalrecords-section-distrito-federal-specific-context');
  if (df_criminalrecords_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-criminalrecords-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_section_what_our_clients_say = document.getElementById('df-criminalrecords-section-what-our-clients-say');
  if (df_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#df-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_section_frequently_asked_questions = document.getElementById('df-criminalrecords-section-frequently-asked-questions');
  if (df_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#df-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_section_international_support = document.getElementById('df-criminalrecords-section-international-support');
  if (df_criminalrecords_section_international_support) {
    gsap.fromTo('#df-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_list_our_credentials = document.getElementById('df-criminalrecords-list-our-credentials');
  if (df_criminalrecords_list_our_credentials) {
    gsap.from('#df-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_list_related_services = document.getElementById('df-criminalrecords-list-related-services');
  if (df_criminalrecords_list_related_services) {
    gsap.from('#df-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_section_youre_in_good_hands = document.getElementById('df-criminalrecords-section-youre-in-good-hands');
  if (df_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#df-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_criminalrecords_section_21 = document.getElementById('df-criminalrecords-section-21');
  if (df_criminalrecords_section_21) {
    gsap.fromTo('#df-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_form_extradition_assistance_in_brazil = document.getElementById('df-extradition-form-extradition-assistance-in-brazil');
  if (df_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#df-extradition-form-extradition-assistance-in-brazil input, #df-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_list_quick_facts = document.getElementById('df-extradition-list-quick-facts');
  if (df_extradition_list_quick_facts) {
    gsap.from('#df-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_list_common_challenges_applicants_face = document.getElementById('df-extradition-list-common-challenges-applicants-face');
  if (df_extradition_list_common_challenges_applicants_face) {
    gsap.from('#df-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_list_how_we_solve_these_challenges = document.getElementById('df-extradition-list-how-we-solve-these-challenges');
  if (df_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#df-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_section_service_overview = document.getElementById('df-extradition-section-service-overview');
  if (df_extradition_section_service_overview) {
    gsap.fromTo('#df-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_form_who_is_this_service_for = document.getElementById('df-extradition-form-who-is-this-service-for');
  if (df_extradition_form_who_is_this_service_for) {
    gsap.from('#df-extradition-form-who-is-this-service-for input, #df-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_list_required_documents = document.getElementById('df-extradition-list-required-documents');
  if (df_extradition_list_required_documents) {
    gsap.from('#df-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_list_process = document.getElementById('df-extradition-list-process');
  if (df_extradition_list_process) {
    gsap.from('#df-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_section_timelines_deadlines = document.getElementById('df-extradition-section-timelines-deadlines');
  if (df_extradition_section_timelines_deadlines) {
    gsap.fromTo('#df-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_section_fees_costs = document.getElementById('df-extradition-section-fees-costs');
  if (df_extradition_section_fees_costs) {
    gsap.fromTo('#df-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_list_risks_common_mistakes = document.getElementById('df-extradition-list-risks-common-mistakes');
  if (df_extradition_list_risks_common_mistakes) {
    gsap.from('#df-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_section_diy_vs_professional_assistance = document.getElementById('df-extradition-section-diy-vs-professional-assistance');
  if (df_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_section_distrito_federal_specific_context = document.getElementById('df-extradition-section-distrito-federal-specific-context');
  if (df_extradition_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-extradition-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_section_what_our_clients_say = document.getElementById('df-extradition-section-what-our-clients-say');
  if (df_extradition_section_what_our_clients_say) {
    gsap.fromTo('#df-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_section_frequently_asked_questions = document.getElementById('df-extradition-section-frequently-asked-questions');
  if (df_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#df-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_section_international_support = document.getElementById('df-extradition-section-international-support');
  if (df_extradition_section_international_support) {
    gsap.fromTo('#df-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_list_our_credentials = document.getElementById('df-extradition-list-our-credentials');
  if (df_extradition_list_our_credentials) {
    gsap.from('#df-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_list_related_services = document.getElementById('df-extradition-list-related-services');
  if (df_extradition_list_related_services) {
    gsap.from('#df-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_section_youre_in_good_hands = document.getElementById('df-extradition-section-youre-in-good-hands');
  if (df_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#df-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_extradition_section_21 = document.getElementById('df-extradition-section-21');
  if (df_extradition_section_21) {
    gsap.fromTo('#df-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_north_form_discover_the_north_amazon_and_beyond = document.getElementById('df-north-form-discover-the-north-amazon-and-beyond');
  if (df_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#df-north-form-discover-the-north-amazon-and-beyond input, #df-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_north_list_quick_facts = document.getElementById('df-north-list-quick-facts');
  if (df_north_list_quick_facts) {
    gsap.from('#df-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_north_list_common_challenges_applicants_face = document.getElementById('df-north-list-common-challenges-applicants-face');
  if (df_north_list_common_challenges_applicants_face) {
    gsap.from('#df-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_north_list_how_we_solve_these_challenges = document.getElementById('df-north-list-how-we-solve-these-challenges');
  if (df_north_list_how_we_solve_these_challenges) {
    gsap.from('#df-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_north_section_trip_overview = document.getElementById('df-north-section-trip-overview');
  if (df_north_section_trip_overview) {
    gsap.fromTo('#df-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_north_form_who_is_this_trip_for = document.getElementById('df-north-form-who-is-this-trip-for');
  if (df_north_form_who_is_this_trip_for) {
    gsap.from('#df-north-form-who-is-this-trip-for input, #df-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_north_list_required_documents = document.getElementById('df-north-list-required-documents');
  if (df_north_list_required_documents) {
    gsap.from('#df-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_north_list_booking_process = document.getElementById('df-north-list-booking-process');
  if (df_north_list_booking_process) {
    gsap.from('#df-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_north_section_timelines_deadlines = document.getElementById('df-north-section-timelines-deadlines');
  if (df_north_section_timelines_deadlines) {
    gsap.fromTo('#df-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_north_section_fees_costs = document.getElementById('df-north-section-fees-costs');
  if (df_north_section_fees_costs) {
    gsap.fromTo('#df-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_north_list_risks_common_mistakes = document.getElementById('df-north-list-risks-common-mistakes');
  if (df_north_list_risks_common_mistakes) {
    gsap.from('#df-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_north_section_diy_vs_professional_assistance = document.getElementById('df-north-section-diy-vs-professional-assistance');
  if (df_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_north_section_distrito_federal_specific_context = document.getElementById('df-north-section-distrito-federal-specific-context');
  if (df_north_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-north-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_north_section_what_our_clients_say = document.getElementById('df-north-section-what-our-clients-say');
  if (df_north_section_what_our_clients_say) {
    gsap.fromTo('#df-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_north_section_frequently_asked_questions = document.getElementById('df-north-section-frequently-asked-questions');
  if (df_north_section_frequently_asked_questions) {
    gsap.fromTo('#df-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_north_section_international_support = document.getElementById('df-north-section-international-support');
  if (df_north_section_international_support) {
    gsap.fromTo('#df-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_north_list_our_credentials = document.getElementById('df-north-list-our-credentials');
  if (df_north_list_our_credentials) {
    gsap.from('#df-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_north_list_related_services = document.getElementById('df-north-list-related-services');
  if (df_north_list_related_services) {
    gsap.from('#df-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_north_section_youre_in_good_hands = document.getElementById('df-north-section-youre-in-good-hands');
  if (df_north_section_youre_in_good_hands) {
    gsap.fromTo('#df-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_north_section_21 = document.getElementById('df-north-section-21');
  if (df_north_section_21) {
    gsap.fromTo('#df-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('df-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (df_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#df-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #df-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_list_quick_facts = document.getElementById('df-centralwest-list-quick-facts');
  if (df_centralwest_list_quick_facts) {
    gsap.from('#df-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_list_common_challenges_applicants_face = document.getElementById('df-centralwest-list-common-challenges-applicants-face');
  if (df_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#df-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_list_how_we_solve_these_challenges = document.getElementById('df-centralwest-list-how-we-solve-these-challenges');
  if (df_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#df-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_section_trip_overview = document.getElementById('df-centralwest-section-trip-overview');
  if (df_centralwest_section_trip_overview) {
    gsap.fromTo('#df-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_form_who_is_this_trip_for = document.getElementById('df-centralwest-form-who-is-this-trip-for');
  if (df_centralwest_form_who_is_this_trip_for) {
    gsap.from('#df-centralwest-form-who-is-this-trip-for input, #df-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_list_required_documents = document.getElementById('df-centralwest-list-required-documents');
  if (df_centralwest_list_required_documents) {
    gsap.from('#df-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_list_booking_process = document.getElementById('df-centralwest-list-booking-process');
  if (df_centralwest_list_booking_process) {
    gsap.from('#df-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_section_timelines_deadlines = document.getElementById('df-centralwest-section-timelines-deadlines');
  if (df_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#df-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_section_fees_costs = document.getElementById('df-centralwest-section-fees-costs');
  if (df_centralwest_section_fees_costs) {
    gsap.fromTo('#df-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_list_risks_common_mistakes = document.getElementById('df-centralwest-list-risks-common-mistakes');
  if (df_centralwest_list_risks_common_mistakes) {
    gsap.from('#df-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_section_diy_vs_professional_assistance = document.getElementById('df-centralwest-section-diy-vs-professional-assistance');
  if (df_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_section_distrito_federal_specific_context = document.getElementById('df-centralwest-section-distrito-federal-specific-context');
  if (df_centralwest_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-centralwest-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_section_what_our_clients_say = document.getElementById('df-centralwest-section-what-our-clients-say');
  if (df_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#df-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_section_frequently_asked_questions = document.getElementById('df-centralwest-section-frequently-asked-questions');
  if (df_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#df-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_section_international_support = document.getElementById('df-centralwest-section-international-support');
  if (df_centralwest_section_international_support) {
    gsap.fromTo('#df-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_list_our_credentials = document.getElementById('df-centralwest-list-our-credentials');
  if (df_centralwest_list_our_credentials) {
    gsap.from('#df-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_list_related_services = document.getElementById('df-centralwest-list-related-services');
  if (df_centralwest_list_related_services) {
    gsap.from('#df-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_section_youre_in_good_hands = document.getElementById('df-centralwest-section-youre-in-good-hands');
  if (df_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#df-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_centralwest_section_21 = document.getElementById('df-centralwest-section-21');
  if (df_centralwest_section_21) {
    gsap.fromTo('#df-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('df-southeast-form-dynamic-southeast-cities-and-history');
  if (df_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#df-southeast-form-dynamic-southeast-cities-and-history input, #df-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_list_quick_facts = document.getElementById('df-southeast-list-quick-facts');
  if (df_southeast_list_quick_facts) {
    gsap.from('#df-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_list_common_challenges_applicants_face = document.getElementById('df-southeast-list-common-challenges-applicants-face');
  if (df_southeast_list_common_challenges_applicants_face) {
    gsap.from('#df-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_list_how_we_solve_these_challenges = document.getElementById('df-southeast-list-how-we-solve-these-challenges');
  if (df_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#df-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_section_trip_overview = document.getElementById('df-southeast-section-trip-overview');
  if (df_southeast_section_trip_overview) {
    gsap.fromTo('#df-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_form_who_is_this_trip_for = document.getElementById('df-southeast-form-who-is-this-trip-for');
  if (df_southeast_form_who_is_this_trip_for) {
    gsap.from('#df-southeast-form-who-is-this-trip-for input, #df-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_list_required_documents = document.getElementById('df-southeast-list-required-documents');
  if (df_southeast_list_required_documents) {
    gsap.from('#df-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_list_booking_process = document.getElementById('df-southeast-list-booking-process');
  if (df_southeast_list_booking_process) {
    gsap.from('#df-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_section_timelines_deadlines = document.getElementById('df-southeast-section-timelines-deadlines');
  if (df_southeast_section_timelines_deadlines) {
    gsap.fromTo('#df-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_section_fees_costs = document.getElementById('df-southeast-section-fees-costs');
  if (df_southeast_section_fees_costs) {
    gsap.fromTo('#df-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_list_risks_common_mistakes = document.getElementById('df-southeast-list-risks-common-mistakes');
  if (df_southeast_list_risks_common_mistakes) {
    gsap.from('#df-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_section_diy_vs_professional_assistance = document.getElementById('df-southeast-section-diy-vs-professional-assistance');
  if (df_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_section_distrito_federal_specific_context = document.getElementById('df-southeast-section-distrito-federal-specific-context');
  if (df_southeast_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-southeast-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_section_what_our_clients_say = document.getElementById('df-southeast-section-what-our-clients-say');
  if (df_southeast_section_what_our_clients_say) {
    gsap.fromTo('#df-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_section_frequently_asked_questions = document.getElementById('df-southeast-section-frequently-asked-questions');
  if (df_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#df-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_section_international_support = document.getElementById('df-southeast-section-international-support');
  if (df_southeast_section_international_support) {
    gsap.fromTo('#df-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_list_our_credentials = document.getElementById('df-southeast-list-our-credentials');
  if (df_southeast_list_our_credentials) {
    gsap.from('#df-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_list_related_services = document.getElementById('df-southeast-list-related-services');
  if (df_southeast_list_related_services) {
    gsap.from('#df-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_section_youre_in_good_hands = document.getElementById('df-southeast-section-youre-in-good-hands');
  if (df_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#df-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_southeast_section_21 = document.getElementById('df-southeast-section-21');
  if (df_southeast_section_21) {
    gsap.fromTo('#df-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('df-northeast-form-vibrant-northeast-beaches-and-culture');
  if (df_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#df-northeast-form-vibrant-northeast-beaches-and-culture input, #df-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_list_quick_facts = document.getElementById('df-northeast-list-quick-facts');
  if (df_northeast_list_quick_facts) {
    gsap.from('#df-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_list_common_challenges_applicants_face = document.getElementById('df-northeast-list-common-challenges-applicants-face');
  if (df_northeast_list_common_challenges_applicants_face) {
    gsap.from('#df-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_list_how_we_solve_these_challenges = document.getElementById('df-northeast-list-how-we-solve-these-challenges');
  if (df_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#df-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_section_trip_overview = document.getElementById('df-northeast-section-trip-overview');
  if (df_northeast_section_trip_overview) {
    gsap.fromTo('#df-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_form_who_is_this_trip_for = document.getElementById('df-northeast-form-who-is-this-trip-for');
  if (df_northeast_form_who_is_this_trip_for) {
    gsap.from('#df-northeast-form-who-is-this-trip-for input, #df-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_list_required_documents = document.getElementById('df-northeast-list-required-documents');
  if (df_northeast_list_required_documents) {
    gsap.from('#df-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_list_booking_process = document.getElementById('df-northeast-list-booking-process');
  if (df_northeast_list_booking_process) {
    gsap.from('#df-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_section_timelines_deadlines = document.getElementById('df-northeast-section-timelines-deadlines');
  if (df_northeast_section_timelines_deadlines) {
    gsap.fromTo('#df-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_section_fees_costs = document.getElementById('df-northeast-section-fees-costs');
  if (df_northeast_section_fees_costs) {
    gsap.fromTo('#df-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_list_risks_common_mistakes = document.getElementById('df-northeast-list-risks-common-mistakes');
  if (df_northeast_list_risks_common_mistakes) {
    gsap.from('#df-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_section_diy_vs_professional_assistance = document.getElementById('df-northeast-section-diy-vs-professional-assistance');
  if (df_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_section_distrito_federal_specific_context = document.getElementById('df-northeast-section-distrito-federal-specific-context');
  if (df_northeast_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-northeast-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_section_what_our_clients_say = document.getElementById('df-northeast-section-what-our-clients-say');
  if (df_northeast_section_what_our_clients_say) {
    gsap.fromTo('#df-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_section_frequently_asked_questions = document.getElementById('df-northeast-section-frequently-asked-questions');
  if (df_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#df-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_section_international_support = document.getElementById('df-northeast-section-international-support');
  if (df_northeast_section_international_support) {
    gsap.fromTo('#df-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_list_our_credentials = document.getElementById('df-northeast-list-our-credentials');
  if (df_northeast_list_our_credentials) {
    gsap.from('#df-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_list_related_services = document.getElementById('df-northeast-list-related-services');
  if (df_northeast_list_related_services) {
    gsap.from('#df-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_section_youre_in_good_hands = document.getElementById('df-northeast-section-youre-in-good-hands');
  if (df_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#df-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_northeast_section_21 = document.getElementById('df-northeast-section-21');
  if (df_northeast_section_21) {
    gsap.fromTo('#df-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_south_form_charming_south_wine_and_gauchos = document.getElementById('df-south-form-charming-south-wine-and-gauchos');
  if (df_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#df-south-form-charming-south-wine-and-gauchos input, #df-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_south_list_quick_facts = document.getElementById('df-south-list-quick-facts');
  if (df_south_list_quick_facts) {
    gsap.from('#df-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_south_list_common_challenges_applicants_face = document.getElementById('df-south-list-common-challenges-applicants-face');
  if (df_south_list_common_challenges_applicants_face) {
    gsap.from('#df-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_south_list_how_we_solve_these_challenges = document.getElementById('df-south-list-how-we-solve-these-challenges');
  if (df_south_list_how_we_solve_these_challenges) {
    gsap.from('#df-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_south_section_trip_overview = document.getElementById('df-south-section-trip-overview');
  if (df_south_section_trip_overview) {
    gsap.fromTo('#df-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_south_form_who_is_this_trip_for = document.getElementById('df-south-form-who-is-this-trip-for');
  if (df_south_form_who_is_this_trip_for) {
    gsap.from('#df-south-form-who-is-this-trip-for input, #df-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'linear'});
  }

  const df_south_list_required_documents = document.getElementById('df-south-list-required-documents');
  if (df_south_list_required_documents) {
    gsap.from('#df-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_south_list_booking_process = document.getElementById('df-south-list-booking-process');
  if (df_south_list_booking_process) {
    gsap.from('#df-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_south_section_timelines_deadlines = document.getElementById('df-south-section-timelines-deadlines');
  if (df_south_section_timelines_deadlines) {
    gsap.fromTo('#df-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_south_section_fees_costs = document.getElementById('df-south-section-fees-costs');
  if (df_south_section_fees_costs) {
    gsap.fromTo('#df-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_south_list_risks_common_mistakes = document.getElementById('df-south-list-risks-common-mistakes');
  if (df_south_list_risks_common_mistakes) {
    gsap.from('#df-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_south_section_diy_vs_professional_assistance = document.getElementById('df-south-section-diy-vs-professional-assistance');
  if (df_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#df-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_south_section_distrito_federal_specific_context = document.getElementById('df-south-section-distrito-federal-specific-context');
  if (df_south_section_distrito_federal_specific_context) {
    gsap.fromTo('#df-south-section-distrito-federal-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_south_section_what_our_clients_say = document.getElementById('df-south-section-what-our-clients-say');
  if (df_south_section_what_our_clients_say) {
    gsap.fromTo('#df-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_south_section_frequently_asked_questions = document.getElementById('df-south-section-frequently-asked-questions');
  if (df_south_section_frequently_asked_questions) {
    gsap.fromTo('#df-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_south_section_international_support = document.getElementById('df-south-section-international-support');
  if (df_south_section_international_support) {
    gsap.fromTo('#df-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_south_list_our_credentials = document.getElementById('df-south-list-our-credentials');
  if (df_south_list_our_credentials) {
    gsap.from('#df-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_south_list_related_services = document.getElementById('df-south-list-related-services');
  if (df_south_list_related_services) {
    gsap.from('#df-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'linear'});
  }

  const df_south_section_youre_in_good_hands = document.getElementById('df-south-section-youre-in-good-hands');
  if (df_south_section_youre_in_good_hands) {
    gsap.fromTo('#df-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

  const df_south_section_21 = document.getElementById('df-south-section-21');
  if (df_south_section_21) {
    gsap.fromTo('#df-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'linear'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});

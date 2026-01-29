/** DF JS - Brasília - Modern-urban with deep blue tones */
const STATE_CONFIG = {
  stateCode: 'df',
  capital: 'Brasília',
  formspreeUrl: 'https://formspree.io/f/xdfqbddb',
  colors: { primary: '#1e90ff', secondary: '#00008b', accent: '#4169e1' },
  animations: {"enabled": true, "header": {"type": "geometricSlide", "duration": "0.5s", "easing": "cubic-bezier(0.4, 0, 0.2, 1)", "delay": "0s"}, "sections": {"type": "architecturalReveal", "duration": "0.8s", "easing": "ease-out", "stagger": "0.1s"}, "hero": {"type": "urbanParallax", "speed": 0.7, "direction": "vertical"}, "cards": {"type": "modernFlip", "perspective": 1000, "duration": "0.5s"}, "images": {"type": "sharpReveal", "clip": "polygon", "duration": "0.7s"}},
  interactions: {"hover": "sharp-elevate", "scroll": "architectural-slide", "transitions": "modern-snap", "click": "geometric-pulse"},
  premiumEffects: ["geometric-patterns", "concrete-texture", "urban-shadows", "building-silhouettes"]
};

const SECTIONS = ["df-index-section--map", "df-index-section-frequently-asked-questions-about-living-in-", "df-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});

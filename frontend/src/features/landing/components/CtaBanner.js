export function renderCtaBanner() {
  return `
  <section class="landing-cta-section">
    <div class="landing-cta-box">
      <div class="landing-cta-box__grid"></div>
      <h2 class="landing-h2 landing-cta-box__title">Prêt à laisser l'IA écrire du code de production ?</h2>
      <p class="landing-cta-box__desc">Installez le CLI en 60 secondes. Aucune carte requise.</p>
      <div class="landing-cta-box__actions">
        <a href="#" class="landing-btn landing-btn--primary landing-btn--glow landing-btn--lg">Commencer maintenant</a>
        <a href="#" class="landing-btn landing-btn--secondary landing-mono landing-btn--lg">npm i -g arc-cli</a>
      </div>
    </div>
  </section>
  `
}

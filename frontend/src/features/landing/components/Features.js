import { FEATURES } from '../data.js'

export function renderFeatures() {
  return `
  <section id="features" class="landing-section">
    <div class="landing-section__header">
      <div class="landing-eyebrow">// FONCTIONNALITÉS</div>
      <h2 class="landing-h2">Un coéquipier qui comprend votre code</h2>
      <p class="landing-section__desc">De l'idée au déploiement, ARC couvre tout le cycle — sans jamais perdre le contexte.</p>
    </div>
    <div class="landing-features-grid">
      ${FEATURES.map(
        (f) => `
        <div class="landing-feature-card">
          <div class="landing-feature__icon landing-feature__icon--${f.tint}">
            <div class="landing-feature__shape landing-feature__shape--${f.shape} landing-feature__shape--${f.tint}"></div>
          </div>
          <h3 class="landing-feature-card__title">${f.title}</h3>
          <p class="landing-feature-card__desc">${f.desc}</p>
        </div>
      `
      ).join('')}
    </div>
  </section>
  `
}

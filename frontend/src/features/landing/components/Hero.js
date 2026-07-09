import { HERO_HEADLINE } from '../data.js'

export function renderHero() {
  return `
  <section class="landing-hero">
    <div class="landing-hero__content">
      <div class="landing-hero__badge">
        <span class="landing-hero__badge-dot"></span>
        v2.4 — nouveau moteur de raisonnement
      </div>
      <h1 class="landing-hero__title">${HERO_HEADLINE}</h1>
      <p class="landing-hero__desc">
        ARC branche un moteur de raisonnement directement dans votre terminal, votre CI et votre éditeur.
        Décrivez l'objectif, il écrit, teste et déploie le code.
      </p>
      <div class="landing-hero__actions">
        <a href="#pricing" class="landing-btn landing-btn--primary landing-btn--glow">Essayer gratuitement</a>
        <a href="#how" class="landing-btn landing-btn--secondary landing-mono">$ voir la démo</a>
      </div>
      <div class="landing-hero__meta">
        <span>◆ pas de carte bancaire</span>
        <span>◆ open-source friendly</span>
        <span>◆ SOC2 en cours</span>
      </div>
    </div>

    <div class="landing-hero__visual">
      <div class="landing-terminal">
        <div class="landing-terminal__bar">
          <span class="landing-terminal__dot landing-terminal__dot--red"></span>
          <span class="landing-terminal__dot landing-terminal__dot--yellow"></span>
          <span class="landing-terminal__dot landing-terminal__dot--green"></span>
          <span class="landing-terminal__title">arc — zsh</span>
        </div>
        <div class="landing-terminal__body landing-mono">
          <div><span class="landing-terminal__prompt">$</span> arc run "refactor l'auth en JWT"</div>
          <div class="landing-terminal__muted">→ lecture de 34 fichiers…</div>
          <div class="landing-terminal__muted">→ génération du plan…</div>
          <div><span class="landing-terminal__check">✓</span> auth/jwt.ts créé</div>
          <div><span class="landing-terminal__check">✓</span> 12 tests passés</div>
          <div><span class="landing-terminal__check">✓</span> PR #482 ouverte</div>
          <div class="landing-terminal__cursor-line">
            <span class="landing-terminal__prompt">$</span> <span class="landing-terminal__cursor"></span>
          </div>
        </div>
      </div>
      <div class="landing-hero__ring"></div>
    </div>
  </section>
  `
}

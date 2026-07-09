import { FOOTER_COLS } from '../data.js'

export function renderFooter() {
  return `
  <footer class="landing-footer">
    <div class="landing-footer__grid">
      <div>
        <div class="landing-footer__brand">
          <span class="landing-footer__dot"></span>
          ARC<span class="landing-nav__accent-text">.ai</span>
        </div>
        <p class="landing-footer__tagline">Le moteur de raisonnement pour les équipes qui construisent vite.</p>
      </div>
      ${FOOTER_COLS.map(
        (col) => `
        <div>
          <div class="landing-footer__col-title">${col.title}</div>
          <div class="landing-footer__links">
            ${col.links.map((l) => `<a href="#" class="landing-footer__link">${l}</a>`).join('')}
          </div>
        </div>
      `
      ).join('')}
    </div>
    <div class="landing-footer__bottom">
      <span>© 2026 ARC.ai — Tous droits réservés</span>
      <span>Fait avec du café et beaucoup de GPU</span>
    </div>
  </footer>
  `
}

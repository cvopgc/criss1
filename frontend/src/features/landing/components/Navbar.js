import { NAV_LINKS } from '../data.js'

export function renderNavbar() {
  return `
    <nav class="landing-nav">
      <div class="landing-nav__brand">
        <span class="landing-nav__dot"></span>
        ARC<span class="landing-nav__accent-text">.ai</span>
      </div>
      <button class="landing-nav__toggle" data-action="toggle-nav" aria-label="Ouvrir le menu">☰</button>
      <div class="landing-nav__links">
        ${NAV_LINKS.map((l) => `<a href="${l.href}" class="landing-nav__link">${l.label}</a>`).join('')}
      </div>
      <div class="landing-nav__actions">
        <a href="#" class="landing-nav__login">Connexion</a>
        <a href="#pricing" class="landing-btn landing-btn--primary landing-btn--sm">Commencer →</a>
      </div>
    </nav>
  `
}

export function renderMobileMenu(navOpen) {
  if (!navOpen) return ''
  return `
    <div class="landing-mobile-menu">
      ${NAV_LINKS.map(
        (l) => `<a href="${l.href}" class="landing-mobile-menu__link" data-action="close-nav">${l.label}</a>`
      ).join('')}
      <a href="#pricing" class="landing-btn landing-btn--primary landing-mobile-menu__cta" data-action="close-nav">Commencer →</a>
    </div>
  `
}

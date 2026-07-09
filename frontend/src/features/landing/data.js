export const HERO_HEADLINE = "L'IA qui code, pense et livre avec vous."

export const NAV_LINKS = [
  { href: '#features', label: 'Fonctionnalités' },
  { href: '#how', label: 'Comment ça marche' },
  { href: '#pricing', label: 'Tarifs' },
  { href: '#faq', label: 'FAQ' },
]

export const LOGOS = ['KAORI', 'VECTA', 'NOMIA', 'FLUXWORKS', 'ORBITAL', 'HELIX']

export const FEATURES = [
  {
    title: 'Raisonnement multi-fichiers',
    desc: "Comprend l'architecture complète du repo avant de proposer un changement.",
    tint: 'purple',
    shape: 'square',
  },
  {
    title: 'Exécution autonome',
    desc: "Écrit, teste et corrige son propre code jusqu'à ce que la suite passe au vert.",
    tint: 'teal',
    shape: 'circle',
  },
  {
    title: 'Intégration CI/CD',
    desc: 'Ouvre des PR revues et prêtes à merger directement depuis votre pipeline.',
    tint: 'purple',
    shape: 'diamond',
  },
  {
    title: 'Mémoire de projet',
    desc: 'Garde le contexte de vos conventions, style et décisions passées.',
    tint: 'teal',
    shape: 'square',
  },
  {
    title: 'Revue de sécurité',
    desc: 'Scanne chaque diff pour les failles courantes avant publication.',
    tint: 'purple',
    shape: 'circle',
  },
  {
    title: 'Auto-hébergeable',
    desc: 'Déployez le moteur dans votre VPC, vos données ne sortent jamais.',
    tint: 'teal',
    shape: 'diamond',
  },
]

export const STEPS = [
  {
    n: 1,
    title: "Décrivez l'objectif",
    desc: 'En langage naturel, dans votre terminal ou votre éditeur.',
    file: 'task.md',
    code: `## Objectif
Refactoriser le module auth
pour utiliser des JWT signés.

## Contraintes
- garder la compat API
- 100% de couverture de tests`,
  },
  {
    n: 2,
    title: 'ARC planifie et exécute',
    desc: 'Il explore le repo, écrit le code, lance les tests en boucle.',
    file: 'auth/jwt.ts',
    code: `export function signToken(user) {
  return jwt.sign(
    { sub: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );
}`,
  },
  {
    n: 3,
    title: 'Vous validez la PR',
    desc: 'Diff propre, tests verts, description générée automatiquement.',
    file: 'PR #482',
    code: `✓ 12 tests passés
✓ 0 régression détectée
✓ couverture: 100%

Prêt à merger sur main.`,
  },
]

export const TESTIMONIALS = [
  {
    quote: 'On a supprimé deux jours de revue de code par sprint. ARC comprend vraiment notre codebase.',
    name: 'Léa Fontaine',
    role: 'Lead Backend, Kaori',
    initials: 'LF',
    accent: 'purple',
  },
  {
    quote: "Le premier outil IA qui livre du code que je merge sans tout réécrire.",
    name: 'Marc Dubreuil',
    role: 'Staff Engineer, Vecta',
    initials: 'MD',
    accent: 'teal',
  },
  {
    quote: 'Auto-hébergé en une heure. Nos données ne quittent jamais notre cloud.',
    name: 'Ines Traoré',
    role: 'CTO, Nomia',
    initials: 'IT',
    accent: 'purple',
  },
]

export const PLANS = [
  {
    name: 'Solo',
    base: 0,
    billNote: 'Pour explorer',
    perks: ['1 projet actif', '200 requêtes/mois', 'Support communautaire'],
    featured: false,
    ctaLabel: 'Commencer',
  },
  {
    name: 'Équipe',
    base: 49,
    billNote: 'Pour les équipes qui livrent',
    perks: ['Projets illimités', 'Requêtes illimitées', 'Intégration CI/CD', 'Support prioritaire'],
    featured: true,
    ctaLabel: 'Essayer 14 jours',
  },
  {
    name: 'Entreprise',
    base: 199,
    billNote: 'Auto-hébergé, sur-mesure',
    perks: ['Déploiement VPC', 'SSO & audit logs', 'SLA dédié', 'Onboarding accompagné'],
    featured: false,
    ctaLabel: 'Contacter les ventes',
  },
]

export const FAQS = [
  {
    q: 'ARC peut-il travailler sur un très gros monorepo ?',
    a: 'Oui — ARC indexe le repo à la volée et ne charge que le contexte pertinent pour chaque tâche, même sur des bases de code de plusieurs millions de lignes.',
  },
  {
    q: 'Mes données servent-elles à entraîner vos modèles ?',
    a: 'Jamais par défaut. Vous pouvez aussi déployer ARC entièrement dans votre propre infrastructure.',
  },
  {
    q: 'Quels langages sont supportés ?',
    a: 'TypeScript, Python, Go, Rust, Java et plus — la liste complète est dans la documentation.',
  },
  {
    q: "Puis-je l'utiliser dans ma CI existante ?",
    a: 'Oui, via notre CLI ou nos actions GitHub/GitLab officielles.',
  },
  {
    q: 'Y a-t-il un essai gratuit ?',
    a: "Le plan Solo est gratuit à vie, et le plan Équipe inclut 14 jours d'essai sans carte bancaire.",
  },
]

export const FOOTER_COLS = [
  { title: 'Produit', links: ['Fonctionnalités', 'Tarifs', 'Changelog', 'Docs'] },
  { title: 'Entreprise', links: ['À propos', 'Blog', 'Carrières', 'Contact'] },
  { title: 'Ressources', links: ['Communauté', 'Statut', 'Sécurité', 'API'] },
]

# Portfolio — Tom Daluzeau

Portfolio personnel. Tom est ouvert à trois pistes : un poste de **technicien** systèmes &
réseaux, un poste d'**administrateur** systèmes & réseaux, ou une **alternance DevOps** à
l'ESGI (rythme 3 semaines entreprise / 1 semaine école, Paris). Le CV porte le titre
« Administrateur Système ». Objectif : présenter le profil, les expériences et le projet
ConseilPro à des recruteurs infra / systèmes / réseau. Voir la mémoire
`portfolio-profile-positioning`.

## Objectif pédagogique

Ce projet sert aussi à apprendre à utiliser Claude Code. Expliquer les fonctionnalités
de l'outil au fil du travail, avancer par petites étapes.

## Stack

- HTML / CSS / JavaScript pur, **sans framework ni build**.
- **Aucune dépendance externe au runtime** : police Sofia Sans auto-hébergée
  (`assets/fonts/`), pas de CDN, pas de npm.
- Hébergement final : GitHub Pages (`.nojekyll` à la racine).

## Structure

- `index.html` — page unique du portfolio
- `css/style.css` — styles (un seul fichier), y compris `@font-face` et `@media print`
- `js/main.js` — interactions : sélecteur de langue FR/EN, menu hamburger, affichage du lien CV
- `js/background.js` — fond animé « Glyph Tide » (canvas 2D)
- `assets/` — `profile-picture.png`, `favicon.svg`, `fonts/`, et **`cv-tom-daluzeau.pdf`**
  (à déposer ; les liens CV apparaissent tout seuls quand le fichier existe)
- `DESIGN.md` — **cahier des charges visuel** (design system « dark premium »)

## Design

**Toujours lire `DESIGN.md` avant de toucher au CSS ou à l'HTML de mise en page.**
En résumé (variante **dark premium**) : canvas brun-noir chaud `#14130f` (jamais `#000`),
texte blanc cassé `#ece7de` / `#a29a8a`, une seule couleur vive = orange signal `#e8622a`
(point d'eyebrow, focus, sélection). Navigation « glass » floutée. Rayons **courts** :
8px (boutons) / 14px (cartes) / 16px (nav) — pas de pilule, pas de 40px. Police Sofia Sans,
corps en `font-weight: 450`, titres en 500 / `letter-spacing: -0.02em`. Bouton primaire =
pavé clair `#ece7de` texte sombre. Footer `#0d0c0a`. Fond animé sous le contenu, discret.

## Conventions

- Langue du site : **bilingue FR / EN** avec sélecteur.
- Langue du code et des commentaires : **français**.
- Indentation : 2 espaces.
- HTML sémantique (`<header>`, `<main>`, `<section>`, `<footer>`).
- CSS : variables CSS pour les couleurs, mobile-first.

## Lancer le site en local

Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```
python3 -m http.server 8000
```

## Règles

- Garder le site 100 % statique (aucun backend), sans dépendance externe au runtime.
- Ne pas ajouter de librairie externe sans en discuter d'abord.
- Bilingue : tout texte visible passe par `data-i18n` / `data-i18n-aria` + le dico `I18N`
  de `js/main.js` (dictionnaires FR et EN toujours symétriques).
- Contenu du profil : voir les mémoires `cv-tom-daluzeau` et `portfolio-profile-positioning`.

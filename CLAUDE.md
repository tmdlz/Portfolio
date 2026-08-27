# Portfolio — Tom Daluzeau

Portfolio personnel. Poste visé : **Technicien Systèmes & Réseaux** (le CV porte le titre
« Administrateur Système », mais le poste visé est plus junior). Objectif : présenter le
profil, les expériences et les projets à des recruteurs (infra / systèmes / réseau).

## Objectif pédagogique

Ce projet sert aussi à apprendre à utiliser Claude Code. Expliquer les fonctionnalités
de l'outil au fil du travail, avancer par petites étapes.

## Stack

- HTML / CSS / JavaScript pur, **sans framework ni build**.
- Hébergement final : GitHub Pages.
- Pas de dépendances npm pour l'instant.

## Structure

- `index.html` — page unique du portfolio
- `css/style.css` — styles (un seul fichier)
- `js/main.js` — interactions (menu, sélecteur de langue, etc.)
- `assets/` — images, icônes, CV PDF
- `DESIGN.md` — **cahier des charges visuel** (design system, généré par getdesign, inspiré de Mastercard)

## Design

**Toujours lire `DESIGN.md` avant de toucher au CSS ou à l'HTML de mise en page.**
En résumé : canvas crème chaud `#F3F0EE` (jamais de blanc pur), formes pilule / cercles
parfaits, rayons 20px (boutons) / 40px (grands cadres) / 999px (pilules) — jamais entre,
police Sofia Sans (Google Fonts), corps en `font-weight: 450`, titres en 500 avec
`letter-spacing: -0.02em`, boutons principaux = pilule noir chaud `#141413` texte crème,
footer noir chaud `#141413` texte blanc, ombres larges et douces (spread 48px+, opacité ≤10%).

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

- Garder le site 100 % statique (aucun backend).
- Ne pas ajouter de librairie externe sans en discuter d'abord.
- Contenu du profil : voir la mémoire `cv-tom-daluzeau`.

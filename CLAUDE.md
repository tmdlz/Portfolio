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

## Conventions

- Langue du site : **bilingue FR / EN** avec sélecteur.
- Langue du code et des commentaires : **français**.
- Indentation : 2 espaces.
- HTML sémantique (`<header>`, `<main>`, `<section>`, `<footer>`).
- CSS : variables CSS pour les couleurs, mobile-first.
- Style visuel : sobre / technique, dark mode, typographie monospace, esprit terminal.

## Lancer le site en local

Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```
python3 -m http.server 8000
```

## Règles

- Garder le site 100 % statique (aucun backend).
- Ne pas ajouter de librairie externe sans en discuter d'abord.
- Contenu du profil : voir la mémoire `cv-tom-daluzeau`.

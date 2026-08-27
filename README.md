# Portfolio — Tom Daluzeau

Portfolio personnel. Poste visé : **technicien** ou **administrateur systèmes & réseaux**,
ou une **alternance DevOps** (ESGI). Présente le profil, les expériences et le projet
ConseilPro à des recruteurs infra / systèmes / réseau.

## Stack

HTML / CSS / JavaScript pur — **aucun framework, aucun build, aucune dépendance npm**.

- `index.html` — page unique
- `css/style.css` — styles (un seul fichier)
- `js/main.js` — interactions : sélecteur de langue FR/EN, menu mobile, affichage du lien CV
- `js/background.js` — fond animé « Glyph Tide » (canvas 2D)
- `assets/` — photo, police auto-hébergée (`fonts/`), favicon, **CV PDF** (`cv-tom-daluzeau.pdf`)
- `DESIGN.md` — cahier des charges visuel (design system)

## Lancer en local

```sh
python3 -m http.server 8000
# puis http://localhost:8000
```

(Ouvrir `index.html` directement fonctionne aussi, mais le lien CV ne se révèle
qu'avec un vrai serveur HTTP.)

## Déploiement — GitHub Pages

Dépôt : <https://github.com/tmdlz/Portfolio> · Site : <https://tmdlz.github.io/Portfolio/>

1. Pousser `main` sur le dépôt.
2. *Settings → Pages* → *Deploy from a branch* → `main` / `/ (root)`.
3. Le fichier `.nojekyll` évite tout traitement Jekyll.
4. Les URL absolues (`og:*`, `canonical`) pointent sur `https://tmdlz.github.io/Portfolio/`
   — casse comprise (`Portfolio` avec un P majuscule).

## Contenu

Le contenu bilingue est dans le dictionnaire `I18N` de `js/main.js` ; le HTML porte le
texte français par défaut via des attributs `data-i18n`.

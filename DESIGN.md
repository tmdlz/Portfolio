# Design System — Portfolio Tom Daluzeau

**Variante « dark premium ».** Base héritée du design system Mastercard (canvas chaud
jamais neutre, poids de corps 450, titres en tracking négatif, eyebrow à point, ombres
larges et douces, trois tons de surface), réinterprétée en **thème sombre** : canvas
brun-noir chaud, navigation « glass », rayons courts et tranchés, orange signal promu au
rang d'accent d'interface.

Ce document est le cahier des charges visuel. **Le lire avant toute modification du CSS ou
de la mise en page HTML.** Les valeurs ci-dessous correspondent 1:1 aux variables de
`css/style.css`.

---

## 1. Thème & atmosphère

Le portfolio doit se lire comme un document technique haut de gamme feuilleté à la lampe :
fond brun-noir chaud (jamais de noir pur `#000`), texte blanc cassé chaud (jamais de blanc
pur `#FFF` sur de grandes surfaces), une seule couleur vive — un orange rouille — utilisée
avec parcimonie comme signal.

Deux gestes portent l'identité :

1. **La navigation « glass ».** Une barre translucide flottante (`backdrop-filter: blur`)
   qui laisse transparaître le contenu qui défile dessous. Posée à 16px du haut, en
   `position: sticky`.
2. **Le point d'eyebrow.** Chaque libellé de section est précédé d'un petit disque orange
   de 6px. C'est l'élément d'identité à ne jamais retirer.
3. **Le fond animé « Pixel Pulse ».** Un mur de cellules type LED, très discret, traversé
   par des anneaux concentriques orange qui irradient du centre. Motion lente et calme,
   jamais au premier plan (voir §4).

Le reste est délibérément sobre : rayons courts (8–16px), pas de dégradés, pas de portraits
circulaires ni d'arcs décoratifs entre eux (ce motif Mastercard est abandonné dans cette
variante — le fond « Pixel Pulse » est une couche à part, jamais un ornement de premier
plan), ombres présentes mais diffuses.

**Caractéristiques clés**
- Canvas brun-noir chaud (`#14130f`) — jamais `#000`, jamais de gris froid
- Texte blanc cassé chaud (`#ece7de`) — le blanc pur `#fff` est réservé au hover du bouton primaire
- Orange signal (`#e8622a`) : points d'eyebrow, focus, hover de liens footer, sélection de texte — rien d'autre
- Navigation translucide floutée, coins à 16px, flottante (pas collée à `y=0`)
- Rayons courts et tranchés : 8px (boutons), 14px (cartes), 16px (nav) — jamais de pilule 999px, jamais de cadre 40px
- Trois tons de surface : `deep` (footer) → `canvas` (page) → `lifted` (encarts surélevés)
- Filets `hairline` (blanc à 9%) pour séparer les sections, à la place des ombres fonctionnelles
- Eyebrow : point orange + libellé capitales, tracking large — signal de catégorie de section

---

## 2. Palette & rôles

### Surfaces (sombre chaud — jamais de noir pur)
| Nom | Hex | Variable | Rôle |
|-----|-----|----------|------|
| Deep | `#0d0c0a` | `--deep` | Footer, zones « enfoncées » |
| Canvas | `#14130f` | `--canvas` | Fond de page par défaut, texte des boutons primaires |
| Lifted | `#1e1c17` | `--lifted` | Surface « papier sur papier » : encarts, cartes surélevées |

### Texte
| Nom | Hex | Variable | Rôle |
|-----|-----|----------|------|
| Texte | `#ece7de` | `--text` | Titres, corps principal, liens par défaut |
| Texte atténué | `#a29a8a` | `--muted-text` | Texte secondaire, liens de nav au repos, eyebrow, en-têtes de footer, mentions |
| Blanc pur | `#ffffff` | — | **Uniquement** : hover du bouton primaire, texte sur `::selection` |

### Accent
| Nom | Hex | Variable | Rôle |
|-----|-----|----------|------|
| Orange signal | `#e8622a` | `--signal` | Point d'eyebrow, fond de `::selection`, hover des liens de footer, couleur de focus. Couleur unique et « agressive » de la page — jamais en aplat large, jamais en fond de bouton. |

### Filets & verre
| Nom | Valeur | Variable | Rôle |
|-----|--------|----------|------|
| Hairline | `rgba(255,255,255,0.09)` | `--hairline` | Bordure haute des `.section`, séparateur de footer |
| Glass — fond | `rgba(24,22,18,0.55)` | `--glass-bg` | Fond de la navigation translucide |
| Glass — bordure | `rgba(255,255,255,0.10)` | `--glass-border` | Contour de la navigation |
| Bordures de boutons | `rgba(255,255,255,0.18 → 0.45)` | — | Contour du bouton secondaire et du sélecteur de langue (0.18 au repos, ~0.45 au hover) |

### Pas de dégradés
Aucun dégradé programmatique. La profondeur vient des ombres diffuses et du contraste entre
les trois tons de surface.

---

## 3. Typographie

### Police
- **Sofia Sans** (Google Fonts, axe de poids `400..700`), chargée via `<link>` dans `index.html`.
- Pile de repli : `"Sofia Sans", Arial, sans-serif`.
- **Système à une seule police.** Pas de serif d'accent, pas de police d'affichage secondaire.
  Le contraste vient de l'échelle, du poids et du tracking.

### Hiérarchie
| Rôle | Taille | Poids | Interlignage | Tracking | Couleur |
|------|--------|-------|--------------|----------|---------|
| H1 (hero) | `clamp(40px, 8vw, 66px)` | 500 | 1.05 | -0.02em | `--text` |
| H2 (footer) | `clamp(26px, 5vw, 38px)` | 500 | 1.05 | -0.02em | `--text` |
| H3 (entrée / projet) | 18–19px | 500 | 1.05 | -0.02em | `--text` |
| Corps | 16px | **450** | 1.45 | normal | `--text` |
| Lead de section / phrase du hero | 18px | 450 | 1.45 | normal | `--muted-text` |
| Puce de liste (`.entry-list`) | 15px | 450 | 1.5 | normal | `--muted-text` |
| Tag | 12px | 500 | — | normal | `--muted-text` |
| Eyebrow | 13px | 700 | — | +0.08em | `--muted-text` · UPPERCASE |
| Libellé de bouton | 15px | 500 (450 pour le secondaire) | — | -0.01em | — |
| Lien de nav | 15px | 500 | — | normal | `--muted-text` → `--text` au hover |
| Logo de nav | 17px | 700 | — | -0.02em | `--text` |
| En-tête de colonne footer | 12px | 700 | — | +0.08em | `--muted-text` · UPPERCASE |
| Lien de footer | 14px | 450 | — | normal | `--text` → `--signal` au hover |
| Sélecteur de langue | 13px | 700 | +0.06em | — | `--muted-text` → `--text` au hover |
| Bas de footer | 13px | 450 | — | normal | `--muted-text` |

### Principes
- **Le poids 450 est structurel.** Le corps de texte n'est ni en 400 ni en 500. Le passer en
  400 aplatit l'identité.
- **Titres en `-0.02em`.** Les mots se resserrent — densité éditoriale.
- **Capitales uniquement à l'échelle eyebrow / en-tête de footer** (12–13px, 700, tracking
  large). Aucun titre en capitales.
- **L'interlignage se resserre avec la taille.** Titres à 1.05, corps à 1.45.

---

## 4. Composants

### Rayons — l'échelle courte
| Variable | Valeur | Usage |
|----------|--------|-------|
| `--r-btn` | `8px` | Boutons, sélecteur de langue |
| `--r-card` | `14px` | Cartes projet, encarts `lifted`, photo du hero |
| `--r-nav` | `16px` | Barre de navigation |
| — | `50%` | Point d'eyebrow uniquement |

**Pas de valeurs intermédiaires ni supérieures.** Cette variante abandonne la pilule
(`999px`) et le grand cadre (`40px`) de la base Mastercard. Tout ce qui est arrondi l'est à
8, 14 ou 16px — ou en cercle parfait pour le point.

### Boutons

**Primaire** (`.btn-primary`)
- Fond : `--text` (`#ece7de`) · Texte : `--canvas` (`#14130f`)
- Bordure : `1px solid transparent` · Rayon : 8px
- Padding : `11px 22px` · Police : 15px / 500 / `-0.01em`
- Hover : fond `#fff` · Actif : `transform: scale(0.98)`
- Usage : action principale (« Me contacter »)

**Secondaire** (`.btn-secondary`)
- Fond : `transparent` · Texte : `--text`
- Bordure : `1px solid rgba(255,255,255,0.22)` · Poids : 450
- Hover : bordure `rgba(255,255,255,0.45)` · Actif : `scale(0.98)`
- Usage : action de second rang à côté d'un primaire (« Voir les projets »)

**Sélecteur de langue** (`.lang-toggle`)
- Fond `transparent`, bordure `rgba(255,255,255,0.18)`, texte `--muted-text`
- 13px / 700 / `+0.06em`, padding `7px 10px`, rayon 8px, `cursor: pointer`
- Hover : texte `--text`, bordure `rgba(255,255,255,0.4)`
- Affiche la langue **vers laquelle** on bascule (« EN » quand le site est en français)

**CTA de nav** (`.nav-cta`) : bouton primaire compacté — padding `8px 18px`, 14px.

**Bouton à icône** (`.btn-icon`) : `display: inline-flex`, `align-items: center`, `gap: 8px`,
icône SVG 16×16 en `fill: currentColor`. Combiné à `.btn-secondary` pour le lien GitHub des
projets. Le libellé traduit va dans un `<span data-i18n>` **à côté** du SVG (jamais de
`data-i18n` sur un élément qui contient le SVG — `textContent` l'effacerait).

### Fond animé « Pixel Pulse » (`#bg-canvas` + `js/background.js`)
- `<canvas>` en `position: fixed` couvrant le viewport, `z-index: 0`, `pointer-events: none`
- Le contenu passe au-dessus : `main` et `.site-footer` en `position: relative; z-index: 1`,
  la nav en `z-index: 10`
- Canvas 2D, sans dépendance. Grille de cellules arrondies (pas `26px`, remplissage `0.6`,
  coins `3px`) en `--text` à `~4,5 %` d'opacité ; anneaux concentriques en `--signal`
  (crête à `~32 %`) qui partent du point `(50 % ; 40 %)` et se répètent toutes les 6,5 s
- Atténuation vers les bords, `devicePixelRatio` plafonné à 2
- Se met en pause quand l'onglet est masqué ; respecte `prefers-reduced-motion` (grille
  fixe, sans onde)
- Reste **un fond** : ne jamais monter l'opacité au point de gêner la lecture. Les surfaces
  `--lifted` / `--deep` (cartes, footer) le masquent localement, c'est voulu.

### Navigation « glass » (`.nav-pill`)
- `position: sticky` ; `top: 16px` ; `z-index: 10`
- `display: flex` ; `align-items: center` ; `gap: 20px`
- `width: calc(100% - 2 * var(--gutter))` ; `max-width: 960px` ; `margin: 16px auto 0`
- `padding: 10px 12px 10px 20px` (plus d'air à gauche pour la marque)
- Fond `--glass-bg` ; bordure `1px solid --glass-border` ; rayon `--r-nav` (16px)
- `box-shadow: var(--shadow-nav)`
- `backdrop-filter: blur(14px) saturate(160%)` (+ préfixe `-webkit-`)
- Contenu : `.nav-brand` (logo `TD` + étiquette `.nav-tag` « Portfolio » séparée par un
  filet `--hairline`, capitales 12px `--muted-text` ; masquée sous 360px) → liens
  `.nav-links` (poussés à droite via `margin-left: auto`, `gap: 28px`) → sélecteur de
  langue → CTA → hamburger (masqué au-dessus de 768px)
- Liens au repos en `--muted-text`, hover en `--text` (transition `color 0.15s`)
- Max 3 liens dans `.nav-links` — garder la barre aérée

### Menu hamburger (`.nav-toggle` + `.nav-pill.nav-open`)
- Visible **uniquement sous 768px** ; le `.nav-cta` est alors masqué (le menu porte les liens)
- Bouton 38×38px, 3 traits de `1.5px` en `--text`, bordure `rgba(255,255,255,0.18)`, rayon 8px
- Ouvert (`.nav-open`) : les traits se croisent en X ; `aria-expanded` et `aria-label` suivent l'état
- Panneau `.nav-links` : `position: absolute`, sous la barre (`top: calc(100% + 8px)`),
  colonne, **fond quasi-opaque `rgba(20,19,15,0.97)`** (≠ le glass de la barre : un menu doit
  rester lisible par-dessus le contenu), bordure `--glass-border`, rayon `--r-nav`, ombre `--shadow-nav`
- Transition `opacity` + `translateY` ; état fermé = `visibility: hidden` (hors du parcours clavier)
- JS (`initNav`) : toggle au clic ; fermeture au clic sur un lien, au clic en dehors de la
  barre, et à la touche `Échap`

### Sections (`.section`)
- `padding: 64px 0` (48px sous 768px)
- `border-top: 1px solid var(--hairline)` — la séparation se fait au filet, pas à l'ombre
- `scroll-margin-top: 88px` sur `.hero` et `.section` — dégage la nav sticky sur les ancres
- Chaque section ouvre par un `.eyebrow` (point orange + libellé capitales), puis un
  `.section-title` (`clamp(24px, 3.5vw, 32px)`, `margin-bottom: 24px`)
- `.section-lead` : 18px, `--muted-text`, `max-width: 620px`

### Hero (`.hero`)
- `padding: 100px 0 72px` (72px 0 48px sous 768px)
- **Grille 2 colonnes** `1.5fr / 1fr`, `gap: 56px`, `align-items: center`
- Colonne gauche `.hero-content` : `.eyebrow` (accroche courte) → `<h1>` (le nom) →
  `.hero-text` (18px, `--muted-text`, `max-width: 560px`, `margin-top: 18px` : une phrase
  de positionnement — postes visés, alternance, ville) → `.hero-actions`
  (flex, `gap: 12px`, `wrap`, `margin-top: 28px`)
- Colonne droite `.hero-photo` : voir « Photo de profil » ci-dessous
- Sous 768px : une seule colonne, photo au-dessus du nom (`order: -1`), alignées à gauche

### Photo de profil (`.hero-photo`)
- `assets/profile-picture.png` — portrait, cadrage serré tête/épaules
- `width: 100%` ; `height: auto` ; `max-width: 300px` (168px sous 768px)
- `aspect-ratio: 782 / 702` (ratio natif) ; `object-fit: cover` ; `object-position: center top`
- `border: 1px solid var(--hairline)` ; `border-radius: var(--r-card)` (14px — **pas** de cercle) ;
  `background: var(--lifted)`
- **Toujours** préciser `height: auto` en CSS : sans ça l'attribut `height` du `<img>` casse
  le calcul de `aspect-ratio` et l'image est étirée

### Footer (`.site-footer`)
- Fond `--deep` (`#0d0c0a`) · Texte `--text` · `border-top: 1px solid var(--hairline)`
- `padding: 64px var(--gutter) 80px` · `margin-top: 96px`
- **Pas de coins arrondis** (la base Mastercard arrondissait le haut du footer à 40px —
  abandonné)
- `<h2>` conversationnel en haut (« Discutons de votre infrastructure. »)
- `.footer-grid` : `grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))`, `gap: 32px`
- En-têtes de colonne : 12px / 700 / capitales / `+0.08em` / `--muted-text`
- Liens : 14px / 450 / `--text`, hover `--signal`
- Marqueur de lien externe : `↗` après le texte
- `.footer-bottom` : au-dessus, séparateur `1px solid var(--hairline)` ; 13px, `--muted-text`

### Compétences (`.skills` / `.skill-group`)
- `.skills` : grille `repeat(auto-fit, minmax(240px, 1fr))`, `gap: 20px`, `margin-top: 40px`
- Chaque `.skill-group` est une **carte** : fond `--lifted`, bordure `--hairline`,
  rayon `--r-card` (14px), `padding: 22px 22px 24px`
- `.skill-head` : 12px / 700 / capitales / `+0.08em` / `--muted-text`, précédé d'un
  **point orange** `--signal` de 6px (`::before`, comme les eyebrow)
- Contient une liste `.tags` en variante « encastrée » (voir ci-dessous)

### Tags (`.tags`)
- Puces techniques (technos, mots-clés) — jamais de phrase
- `<ul>` en `flex` `wrap`, `gap: 8px`
- `<li>` : 12px / 500, `--muted-text`, `padding: 5px 10px`, bordure `--hairline`, rayon `--r-btn` (8px)
- Fond transparent (pas de remplissage) — c'est une étiquette discrète, pas un bouton
- **Variante encastrée** (dans une carte `--lifted`) : fond `--canvas` + bordure
  `rgba(255,255,255,0.12)` → la puce paraît enfoncée dans la carte
- Un nom propre ou une techno (`Proxmox`, `DNS`, `Cisco`) reste tel quel dans les deux
  langues ; un tag formulé en français (`Câblage`, `Pare-feu OPNsense`, `Support N1/N2`)
  porte un `data-i18n="tag.*"` et est traduit

### Entrée d'expérience (`.entry`)
- Grille 2 colonnes `190px / 1fr`, `gap: 32px`, séparée de la suivante par `border-top: 1px solid var(--hairline)`
  (`.entry:first-of-type` sans bordure)
- Colonne gauche `.entry-side` : `.entry-org` (16px / 500) + `.entry-period` (13px, `--muted-text`)
- Colonne droite `.entry-main` : `<h3>` (18px) + `.entry-list` + `.tags`
- Sous 768px : une seule colonne, `gap: 10px`

### Liste à puces (`.entry-list`)
- `<ul>` sans marqueur natif, `display: grid`, `gap: 9px`
- `<li>` : 15px / interligne 1.5 / `--muted-text`, `padding-left: 18px`
- Puce = **petit disque orange** `--signal` de 5px en `::before` (reprise du point d'eyebrow)

### Carte projet (`.project`)
- Fond `--lifted`, bordure `--hairline`, rayon `--r-card` (14px), `box-shadow: var(--shadow-card)`
- `padding: 32px` (24px sous 768px)
- Contenu : `<h3>` (19px) + `.entry-period` + `.project-desc` (`--muted-text`, `max-width: 640px`)
  + `.entry-list` + `.tags` + `.project-actions` (`margin-top: 24px`) contenant le lien GitHub
  en `.btn.btn-secondary.btn-icon`

---

## 5. Mise en page

### Rythme
- **Unité de base : 8px.** Échelle : 8 / 12 / 16 / 24 / 32 / 44 / 64 / 80 / 96 / 100.
- `--gutter: 24px` — marge horizontale de `main` et du footer.
- `--max-width: 1120px` — largeur max du contenu (`main`, grille et titre de footer).
- Padding vertical de section : 64px (desktop) → 48px (mobile).

### Conteneur
```
main {
  max-width: var(--max-width);   /* 1120px */
  margin: 0 auto;
  padding: 0 var(--gutter);      /* 24px */
}
```
La nav a sa propre largeur (`max-width: 960px`), plus étroite que le contenu.

### Philosophie du vide
Le portfolio respire : un seul objet de lecture à la fois, beaucoup de canvas entre les
blocs. Les colonnes de texte sont bornées (`max-width` 600–640px) même quand la grille est
plus large. On ne remplit pas l'espace pour le remplir.

---

## 6. Profondeur & élévation

| Niveau | Traitement | Variable | Usage |
|--------|-----------|----------|-------|
| 0 | Aucune ombre | — | Défaut — la quasi-totalité des surfaces |
| 1 | `rgba(0,0,0,0.35) 0 8px 32px 0` | `--shadow-nav` | Barre de navigation |
| 2 | `rgba(0,0,0,0.30) 0 24px 48px 0` | `--shadow-card` | Carte projet (`.project`) ; futurs médias surélevés |

### Philosophie
En thème sombre l'ombre porte moins que sur fond clair : elle sert de **coussin
atmosphérique**, pas de lumière directionnelle. Spread large (32–48px), pas d'ombre dure
ni serrée. Pour séparer deux zones de façon fonctionnelle, on préfère le **filet
`--hairline`** à l'ombre.

### Verre
Le flou d'arrière-plan (`backdrop-filter`) est réservé à la navigation. Ne pas le
généraliser aux cartes : il perdrait sa valeur de signal et coûte cher en rendu.

### Empilement (`z-index`)
| Couche | `z-index` | Élément |
|--------|-----------|---------|
| Fond animé | `0` | `#bg-canvas` (fixed, sous tout le reste) |
| Contenu | `1` | `main`, `.site-footer` (positionnés pour passer devant le canvas) |
| Navigation | `10` | `.nav-pill` |
| Menu mobile | (dans la nav) | `.nav-links` déroulé |

---

## 7. À faire / à éviter

### À faire
- Fond de page en `--canvas` (`#14130f`) — jamais `#000`, jamais de gris froid
- Texte en `--text` / `--muted-text` — le blanc pur uniquement au hover du bouton primaire
- Orange `--signal` réservé : point d'eyebrow, focus, `::selection`, hover de lien footer
- Ouvrir chaque section par un `.eyebrow` avec son point orange
- Titres en Sofia Sans 500 / `-0.02em`, corps en **450**
- Bouton primaire = pavé clair (`--text`) texte sombre, rayon 8px
- Séparer les sections au filet `--hairline`, pas à l'ombre
- Rester sur l'échelle de rayons 8 / 14 / 16px (+ 50% pour le point)
- Trois tons de surface : `deep` → `canvas` → `lifted`
- Focus clavier visible : `:focus-visible` → liseré `--signal` 2px, `outline-offset: 2px`
- Respecter `prefers-reduced-motion` (coupe `scroll-behavior`, les transitions et l'onde du fond)
- Garder le fond « Pixel Pulse » sous le contenu (`z-index`) et à faible opacité

### À éviter
- Pas de noir pur `#000` ni de blanc pur `#fff` en aplat large
- Pas de rayon hors échelle : ni 4–6px, ni 20px, ni pilule 999px, ni cadre 40px
- Pas d'orange en fond de bouton ou en aplat — c'est un signal ponctuel
- Pas de seconde police, pas de serif d'accent
- Pas de `backdrop-filter` en aplat translucide ailleurs que sur la nav et son menu déroulant
  (et le menu, lui, est quasi-opaque pour la lisibilité)
- Pas d'ombre dure / serrée — spread ≥ 32px
- Pas de capitales au-delà de l'échelle eyebrow (13px) / en-tête de footer (12px)
- Pas de point d'eyebrow manquant — c'est l'identité
- Ne pas encombrer la nav : logo + 3 liens + langue + CTA, pas plus
- Pas de portraits circulaires ni d'arcs décoratifs (motif de la base Mastercard, écarté ici)

---

## 8. Responsive

### Points de rupture
| Nom | Largeur | Changements |
|-----|---------|-------------|
| Mobile | ≤ 767px | Menu hamburger (`.nav-links` en panneau déroulant), `.nav-cta` masqué ; hero en une colonne, photo au-dessus (168px) ; `.entry` en une colonne ; `padding` hero `72px 0 48px`, sections `48px 0`, `.project` `24px` ; grilles `.skills` / footer déjà fluides (`auto-fit`) |
| Desktop | ≥ 768px | Nav complète (3 liens + langue + CTA) ; hero en grille 2 colonnes, `<h1>` jusqu'à 66px ; sections à 64px |

Le `<h1>` et le `<h2>` du footer sont fluides via `clamp()` — pas de palier dédié.

### Cibles tactiles
Tous les éléments interactifs dépassent 40px de haut : boutons ~40px, liens de nav ~36px de
zone cliquable, sélecteur de langue ~32px (à surveiller — envisager `padding` accru sur
mobile).

### À implémenter
- Repli `backdrop-filter` sur navigateurs sans support : la nav reste sur `--glass-bg`
  semi-opaque (acceptable) ; le menu déroulant est déjà quasi-opaque.
- Agrandir la zone tactile du sélecteur de langue sous 768px (~32px actuellement).
- CV PDF téléchargeable dans `assets/` + lien dans le hero et le footer.

---

## 9. Référence rapide (pour prompts)

- Fond de page : « brun-noir chaud `#14130f`, jamais de noir pur »
- Surface surélevée : « `#1e1c17`, un cran plus clair que le canvas »
- Footer : « `#0d0c0a` avec texte `#ece7de`, séparé par un filet blanc à 9 %, pas de coins arrondis »
- Titres : « Sofia Sans 500, letter-spacing -0.02em, couleur `#ece7de` »
- Corps : « Sofia Sans **450**, 16px, interligne 1.45 »
- Texte secondaire : « `#a29a8a` »
- Accent : « orange rouille `#e8622a` — point d'eyebrow, focus, sélection, hover de lien footer uniquement »
- Bouton primaire : « pavé `#ece7de` / texte `#14130f`, rayon 8px, padding 11px 22px, hover fond blanc »
- Bouton secondaire : « transparent, bordure blanche à 22 %, texte `#ece7de`, rayon 8px »
- Navigation : « barre translucide `rgba(24,22,18,0.55)`, bordure blanche à 10 %, rayon 16px, `backdrop-filter: blur(14px) saturate(160%)`, flottante à 16px du haut, `max-width: 960px` ; sous 768px, menu hamburger en panneau déroulant quasi-opaque `rgba(20,19,15,0.97)` »
- Photo de profil : « `<img>` en `max-width: 300px`, `height: auto`, `aspect-ratio: 782/702`, `object-fit: cover`, rayon 14px, bordure `--hairline` — jamais en cercle »
- Eyebrow : « point orange `#e8622a` de 6px + libellé capitales 13px / 700 / +0.08em en `#a29a8a` »
- Puce de liste : « disque orange `#e8622a` de 5px en `::before`, texte `#a29a8a` 15px »
- Tag : « pilule discrète : 12px / 500, `#a29a8a`, bordure `--hairline`, rayon 8px, fond transparent »
- Rayons : « 8px boutons, 14px cartes/photo, 16px nav — rien d'autre »
- Ombres : « `rgba(0,0,0,0.35) 0 8px 32px` pour la nav, `rgba(0,0,0,0.30) 0 24px 48px` pour les cartes »

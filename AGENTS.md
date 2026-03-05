# AGENTS.md

## Quick Commands

```bash
# Install dependencies
pnpm install

# Start dev server (hot reload)
pnpm docs:dev

# Build for production
pnpm docs:build

# Preview production build
pnpm docs:preview
```

## Project Structure

```
.
├── index.md                              # Homepage (layout: home)
├── recettes/
│   ├── index.md                          # Index des catégories de recettes
│   └── boulangerie/
│       ├── index.md                      # Index catégorie Boulangerie
│       └── pain-au-levain.md             # Recette pain au levain
├── public/                               # Assets statiques (images, etc.)
└── .vitepress/
    └── config.mts                        # Configuration VitePress (nav, sidebar, lang)
```

## Architecture & Conventions

- **Framework :** VitePress 2 — contenu en Markdown, config TypeScript.
- **Langue :** `fr-FR` partout (config, textes, slugs de fichiers).
- **Slugs de fichiers :** kebab-case français sans accents (ex. `pain-au-levain.md`, `recettes/boulangerie/`).
- **Sidebar :** définie par section dans `config.mts` sous la clé `'/recettes/'`. Ajouter chaque nouvelle recette dans le bon objet `items`.
- **Nav :** uniquement les entrées de haut niveau (`Accueil`, `Recettes`). Ne pas surcharger.
- **Homepage (`index.md`) :** utilise le `layout: home` de VitePress avec `hero` et `features`. Les `features` représentent les catégories de recettes.

## Ajouter une recette

1. Créer le fichier Markdown dans le bon dossier de catégorie : `recettes/<categorie>/<slug>.md`.
2. Ajouter un frontmatter avec au minimum `title`, `description`, `duration`, `difficulty`.
3. Structurer la recette avec les sections : **Ingrédients** (tableaux), **Matériel**, **Étapes** (numérotées).
4. Ajouter le lien dans `recettes/<categorie>/index.md`.
5. Ajouter l'entrée dans la sidebar de `.vitepress/config.mts`.

## Ajouter une catégorie

1. Créer `recettes/<categorie>/index.md` avec la liste des recettes.
2. Ajouter une `feature` dans `index.md` (homepage).
3. Ajouter une section dans la sidebar de `config.mts`.
4. Ajouter un lien dans `recettes/index.md`.

## Do / Don't

- **DO** conserver les fichiers Markdown en UTF-8, avec accents dans le contenu.
- **DO** utiliser des tableaux Markdown pour les listes d'ingrédients.
- **DO** vérifier que le build passe (`pnpm docs:build`) avant tout commit.
- **DON'T** modifier les fichiers du dossier `node_modules/` ou `.vitepress/cache/`.
- **DON'T** introduire de composants Vue custom sans valider la compatibilité avec VitePress 2.
- **DON'T** renommer `index.md` à la racine — il est le point d'entrée de VitePress.

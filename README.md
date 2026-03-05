# Sucellos

Livre de recettes numérique construit avec [VitePress](https://vitepress.dev/).

> Sous l'œil de Sucellos, dieu gaulois de l'abondance — festin obligatoire. ⚒️🥘

## Lancer le projet

```bash
pnpm install
pnpm docs:dev
```

## Compiler pour la production

```bash
pnpm docs:build
pnpm docs:preview
```

## Structure

```
.
├── index.md                          # Homepage
├── recettes/
│   ├── index.md                      # Index des catégories
│   └── boulangerie/
│       ├── index.md                  # Index boulangerie
│       └── pain-au-levain.md         # Recette pain au levain
└── .vitepress/
    └── config.mts                    # Configuration VitePress
```

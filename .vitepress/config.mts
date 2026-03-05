import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sucellos",
  description: "Le livre de recettes numérique de Sucellos — fermentation, boulange et festins.",
  lang: 'fr-FR',
  base: '/sucellos/',
  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Recettes', link: '/recettes/' }
    ],

    sidebar: {
      '/recettes/': [
        {
          text: '🍞 Boulangerie',
          items: [
            { text: 'Pain au levain', link: '/recettes/boulangerie/pain-au-levain' }
          ]
        }
      ]
    }
  }
})

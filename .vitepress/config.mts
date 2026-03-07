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
          text: '🦘 Plats',
          items: [
            { text: 'Lasagnes à la bolognaise', link: '/recettes/plats/lasagnes-bolognaise' }
          ]
        },
        {
          text: '🍮 Desserts',
          items: [
            { text: 'Gâteau au chocolat', link: '/recettes/desserts/gateau-au-chocolat' },
            { text: 'Cookies chocolat et noisettes au levain', link: '/recettes/desserts/cookies-chocolat-noisettes-levain' }
          ]
        },
        {
          text: '🍞 Boulangerie',
          items: [
            { text: 'Pain au levain', link: '/recettes/boulangerie/pain-au-levain' },
            { text: 'Cake salé levain jambon-fromage', link: '/recettes/boulangerie/cake-sale-levain' },
            { text: 'Crêpes au levain', link: '/recettes/boulangerie/crepes-au-levain' }
          ]
        }
      ]
    }
  }
})

export default defineNuxtConfig({
  css: ['~/assets/css/styles.css'],
  app: {
    head: {
      title: 'Poker Mentor | Modern Gamified Coaching',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap' },
      ],
    },
  },
  nitro: {
    storage: {
      account: {
        driver: 'fs',
        base: './.data',
      },
    },
  },
});

export default defineNuxtConfig({
  routeRules: {
    '/': { swr: 60 },
  },
});

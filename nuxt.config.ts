export default defineNuxtConfig({
  routeRules: {
    '/**': { swr: 60 },
    '/uncached': { cache: false },
  },
});

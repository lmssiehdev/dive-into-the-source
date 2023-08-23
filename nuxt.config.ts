// https://nuxt.com/docs/api/configuration/nuxt-config
// import axios from "axios";

// const getPostRoutes = async () => {
//   const endpoint = "https://jsonplaceholder.typicode.com/posts";
//   const response = await axios.get(endpoint);
//   let articles = response.data.slice(0, 10);

//   let slugs = articles.map((each) => {
//     return "/anime/" + each.id;
//   });

//   return slugs;
// };
export default defineNuxtConfig({
  devtools: { enabled: true },
  // hooks: {
  //   async "nitro:config"(nitroConfig) {
  //     if (nitroConfig.dev) {
  //       return;
  //     }
  //     let slugs = await getPostRoutes();
  //     nitroConfig.prerender.routes.push(...slugs);
  //     return;
  //   },
  // },
  nitro: {
    static: true,
  },
  routeRules: {
    "/": { static: true },
    "/**": { static: true },
    "/anime/**": { static: true },
  },
  modules: ["@unocss/nuxt", "@nuxt/content"],
  content: {
    documentDriven: true,
  },
});

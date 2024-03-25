// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, 
  modules: ['@nuxtjs/tailwindcss','nuxt-icon','@vueuse/motion/nuxt'],
 
  css: ["@/assets/style/main.css"],tailwindcss: {
    cssPath: "@/assets/style/main.css",
    config: {
      theme: {
        extend: {
          fontFamily: {
            
            Space:["Space Mono", "monospace"],



          },
          colors: {
            bgwt : "#E0E0E2",
            bggr : "#0B6E4F",
            bgbl : "#2B4162",
            bgrd : "#721817",
            bgog : "#FA9F42",

            bk   : "#000000",
            wt   : "#000000",
            lt_wt: "#E5E5E5",
            yell : "#FCA311",
            bl   : "#14213D",

            db: "#001219",
            mg: "#0A9396",
            ye: "#F4D35E",
            or: "#EE964B",
            rd: "#9B2226",

            

          },
        },
      },
    },
  },
});
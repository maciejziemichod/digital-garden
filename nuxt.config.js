export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "digital garden | Maciej Ziemichód",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      {
        name: "google-site-verification",
        content: "nrr98NRTK14bonOxQm55fYaH8rc1J6kruIxsE8HROA8",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/digital-garden/favicon.ico",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/fontawesome", "@nuxtjs/color-mode"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css",
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  fontawesome: {
    icons: {
      solid: ["faSearch", "faTimes"],
      regular: ["faSun", "faMoon"],
      brands: ["faGithub", "faLinkedinIn", "faCodepen", "faTwitter"],
    },
    component: "FaIcon",
  },

  target: "static",

  router: {
    base: "/digital-garden/",
  },

  hooks: {
    "vue-renderer:ssr:templateParams": function (params) {
      params.HEAD = params.HEAD.replace('<base href="/digital-garden/">', "");
    },
  },
};

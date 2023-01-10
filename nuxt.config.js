const env = require("./env");
import path from "path";
import fs from "fs";

export default {
  server: {
    port: env[process.env.MODE].PORT,
    host: env[process.env.MODE].HOST,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "furion.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "furion.pem")),
    },
  },
  components: ["~/components"],
  env: env[process.env.MODE],
  telemetry: false,
  head: {
    title: "Furion",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/logo.svg" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Inter:300",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Inter:400",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Inter:500",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Inter:600",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Inter:700",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Inter:800",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Inter:900",
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Orbitron:300',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Orbitron:400',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Orbitron:500',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Orbitron:600',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Orbitron:700',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Orbitron:800',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Orbitron:900',
      },
    ],
  },
  loading: { color: "#FA6BE1" },
  css: [
    "normalize.css",
    "@/assets/scss/base.scss",
    "@/assets/scss/element.scss",
    "@/assets/scss/common.scss",
    "@/assets/scss/global.scss",
    "@/assets/scss/vivify.scss",
    "@/assets/scss/la-ball-running-dots.scss",
    "swiper/css/swiper.css",
    "@/assets/scss/buttons.scss",
    "@/assets/scss/colors.scss",
  ],
  plugins: [
    { src: "@/plugins/echarts", ssr: false },
    { src: "@/plugins/quill", ssr: false },
    { src: "@/plugins/element-ui" },
    { src: "@/plugins/mixin" },
    {
      src: "@/plugins/swiper.js",
      ssr: false,
    },
    { src: "@plugins/typer", ssr: false },
    { src: "@/plugins/aos", mode: "client" },
  ],
  buildModules: [
    "nuxt-windicss",
    "@nuxtjs/composition-api/module",
    "cookie-universal-nuxt",
  ],
  router: {
    base: env[process.env.MODE].BASE,
    middleware: ["cookies"],
    meta: { index: 0 },
  },
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {},
    extractCSS: process.env.NODE_ENV === "production",
  },
};

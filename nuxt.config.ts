// https://nuxt.com/docs/api/configuration/nuxt-config
import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";
import svgLoader from "vite-svg-loader";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const larkTheme = require.resolve("@ckeditor/ckeditor5-theme-lark");

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [
      ckeditor5({
        theme: larkTheme,
      }),
      svgLoader(),
    ],
  },
});

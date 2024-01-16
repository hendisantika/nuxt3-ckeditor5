// https://nuxt.com/docs/api/configuration/nuxt-config
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
export default defineNuxtConfig({
    devtools: { enabled: true },
    vite: {
        plugins: [
            ckeditor5({
                theme: require.resolve('@ckeditor/ckeditor5-theme-lark')
            })
        ]
    }
})

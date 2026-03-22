// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rise-o-matic.github.io',
  base: '/be-ready-beaumont',
  vite: {
    plugins: [tailwindcss()]
  }
});

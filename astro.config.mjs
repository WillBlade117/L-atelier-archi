import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  // site: 'https://l-atelier-archi.vercel.app',

  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), keystatic(), markdoc()],

  adapter: vercel({
    runtime: 'nodejs',
  }),
});

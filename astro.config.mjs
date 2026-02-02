import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import vercel from '@astrojs/vercel';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'server',

  integrations: [react(), keystatic(), markdoc()],

  adapter: vercel(),
  
  security: {
    checkOrigin: false,
  },
});
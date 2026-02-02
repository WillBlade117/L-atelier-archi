import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://l-atelier-archi.william-sart.fr',

  output: 'server',

  integrations: [react(), keystatic(), markdoc()],

  adapter: node({
    mode: 'standalone',
  }),
  
  vite: {
    plugins: [tailwindcss()],
  },

  security: {
    checkOrigin: false
  }
});
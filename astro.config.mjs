import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import node from '@astrojs/node';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  
  integrations: [react(), keystatic(), markdoc()],

  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
});
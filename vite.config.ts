import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const projectDir = path.dirname(fileURLToPath(import.meta.url));
// A Vercel fornece o domínio durante a compilação. SITE_URL é opcional
// caso você use um domínio próprio e queira defini-lo explicitamente.
const domain = process.env.SITE_URL
  || process.env.VERCEL_PROJECT_PRODUCTION_URL
  || process.env.VERCEL_URL
  || 'http://localhost:5173';
const siteUrl = new URL(/^https?:\/\//.test(domain) ? domain : 'https://' + domain)
  .origin;

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'social-sharing-origin',
      transformIndexHtml: {
        order: 'pre',
        handler: html => html.replaceAll('__SITE_URL__', siteUrl),
      },
    },
  ],
  resolve: {
    alias: { '@': path.resolve(projectDir, 'src') },
    dedupe: ['react', 'react-dom'],
  },
  build: { outDir: 'dist', emptyOutDir: true },
  server: { host: '0.0.0.0' },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Teste PWA 2026',
        short_name: 'Skull',
        description: 'Um belo teste ',
        theme_color: '#ff2f70',
        icons: [
          {
            src: 'skull-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'skull-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
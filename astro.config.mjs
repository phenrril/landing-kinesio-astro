// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // permite abrir el preview a través de un túnel de ngrok
  server: { allowedHosts: ['.ngrok-free.app', '.ngrok-free.dev', '.ngrok.app'] },
  vite: {
    plugins: [tailwindcss()]
  }
});

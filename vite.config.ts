import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: '/portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        thesis: resolve(root, 'projects/bachelor-thesis/index.html'),
        wakeWine: resolve(root, 'projects/wake-wine/index.html'),
      },
    },
  },
});

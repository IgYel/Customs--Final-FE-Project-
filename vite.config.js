import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Customs--Final-FE-Project-/',  // repository name
  build: {
    outDir: 'dist', // dist
    rollupOptions: {
      input: './index.html',
    },
    server: {
      historyApiFallback: true, // Fallback for SPA
    },
  }
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  //  GitHub Pages対策：404でもindex.htmlを返す
  server: {
    historyApiFallback: true,
  }
});

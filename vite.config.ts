// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build directly into /docs for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
  // GitHub Pages serves from the repo; we build straight into /docs.
  base: '',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})

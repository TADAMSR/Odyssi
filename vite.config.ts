// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves from the repo; we build straight into /docs.
  base: '',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})

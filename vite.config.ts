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
})

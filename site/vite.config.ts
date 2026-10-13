import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ root: 'site', base: process.env.GITHUB_PAGES ? '/open-exercise-atlas/' : '/', plugins: [react()], build: { outDir: 'dist', emptyOutDir: true } })

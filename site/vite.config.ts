import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Muscles without a file here (neck, hip-flexors, ...) get a text-only tile rather than a broken image.
const muscleIllustrations = readdirSync(resolve(import.meta.dirname, '../media/muscles')).filter((name) => name.endsWith('.png')).sort()

export default defineConfig({
  root: 'site',
  base: process.env.GITHUB_PAGES ? '/open-exercise-atlas/' : '/',
  plugins: [react()],
  define: { __MUSCLE_ILLUSTRATIONS__: JSON.stringify(muscleIllustrations) },
  build: { outDir: 'dist', emptyOutDir: true },
})

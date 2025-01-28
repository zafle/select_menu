import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve('lib/main.js'),
      formats: ['es'],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
})

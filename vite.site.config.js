import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prism from 'vite-plugin-prismjs'

export default defineConfig({
  base: '/select_menu/',
  plugins: [
    react(),
    prism({
      languages: ['javascript', 'css', 'html', 'typescript'],
      plugins: ['line-numbers'],
      theme: 'tomorrow',
      css: true,
    }),
  ],
  build: {
    outDir: 'site-dist',
  },
})

import { defineConfig } from 'vite'
import { coverageConfigDefaults } from 'vitest/config'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss()],
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './lib/tests/setup.js',
    coverage: {
      exclude: [
        '**/src/**',
        '**/lib/tests/**',
        '**/lib/main.js',
        ...coverageConfigDefaults.exclude,
      ],
      reporter: ['text', 'json', 'html', 'lcov'],
    },
  },
})

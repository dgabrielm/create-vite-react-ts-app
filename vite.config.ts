/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from '@rollup/plugin-eslint'
import { getAliasesViteConfig } from './alias.js'

export default defineConfig({
  plugins: [
    {
      ...eslint({
        include: './src/**/*.(js|jsx|ts|tsx)'
      })
    },
    react()
  ],
  test: {
    includeSource: ['src/**/*.test.tsx'],
    coverage: {
      reporter: ['text']
    },
    globals: true,
    environment: "jsdom",
    setupFiles: ['testSetup.js'],
    watch: false,
    watchExclude: [
      '**/node_modules/**',
      '**/dist/**',
      'package.json',
      'package-lock.json',
      'alias.js',
      'testSetup.js',
      'tsconfig.json',
      '.eslintrc.cjs',
      'commitlint.config.cjs',
      'tsconfig.json',
      'tsconfig.node.json',
      'vite.config.ts'
    ]
  },
  resolve: {
    alias:  getAliasesViteConfig(),
  }
})

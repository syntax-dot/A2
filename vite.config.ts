import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import * as path from 'path'
import VueTypeImports from 'vite-plugin-vue-type-imports'

function generateScopedName(name: string, filename: string) {
  const [file] = path.basename(filename, '.css').split('.')

  return `${file}_${name}`
}

export default defineConfig({
  server: {
    proxy: {
      '/api': {
      target: 'https://api.av100.ru/v3/swagger/ui/index#/User',
      changeOrigin: true,
      },
    },
  },

  css: {
    modules: {
      generateScopedName,
    },
  },

  plugins: [
    VueTypeImports(),
    Vue(),
  ],
})

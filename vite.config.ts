import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import * as path from 'path'
import VueTypeImports from 'vite-plugin-vue-type-imports'

function generateScopedName(name: string, filename: string) {
  const [file] = path.basename(filename, '.css').split('.')

  return `${file}_${name}`
}

export default defineConfig({
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

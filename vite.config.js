import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.js',
      name: 'snap-layout'
    }
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true
      },
      include: /Snap\.svelte$/
    }),
    svelte({
      compilerOptions: {
        customElement: false
      },
      include: /Layout\.svelte$/
    })
  ]
})

import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // lottie-react has no "exports" map, so bundlers fall back to its
      // UMD "browser" build, whose default export is the whole module
      // object instead of the Lottie component. Point straight at the
      // ESM build to get the real default export.
      'lottie-react': fileURLToPath(
        new URL('./node_modules/lottie-react/build/index.es.js', import.meta.url)
      ),
    },
  },
})

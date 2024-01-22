import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),eslint()],
  define: {
    global: {},
}, build: {
  minify: false,
  chunkSizeWarningLimit: 4000, 
  terserOptions: {
    compress: {
      drop_console: {
        exclude: ['aws-sdk-modifications.js'],
      },
    },
  },
},
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mui from 'vite-plugin-material-ui'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),mui],
})

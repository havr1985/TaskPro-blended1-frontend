import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/TaskPro-blended1-frontend',
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  base: '/my-portfolio/', // Example: '/my-portfolio/'
  assetsInclude: ['**/*.docx', '**/*.pdf'],
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  ],
  base: "/shistrack/", // Set the base path for your application
  // Add base path for deployment if deploying to a subdirectory
  // For example, if deploying to GitHub Pages


}) 

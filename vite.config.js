import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), {
    name: 'block-raw-inline',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.includes('?raw') || req.url?.includes('?inline')) {
          res.statusCode = 403; // Forbidden
          res.end('Access denied');
        } else {
          next();
        }
      });
    }
  }],
  // Add base path for deployment if deploying to a subdirectory
  // For example, if deploying to GitHub Pages
  base: '/shistrack/',
  server: {
    fs: {
      deny: [
        '.env',
        // Block paths with ?raw or ?inline
        { path: /(\?raw|\?inline)/, regex: true }
      ],
      allow: ['../src', {assetsInclude: ['**/*.glb']}],
    }
  }
}) 

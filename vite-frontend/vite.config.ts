import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'polyfills',
      transformIndexHtml(html) {
        return html.replace(
          '<head>',
          `<head>
          <script>
            // Browser polyfill for wallet libraries
            if (typeof global === 'undefined') {
              window.global = window;
            }

            // Buffer polyfill
            if (typeof Buffer === 'undefined') {
              window.Buffer = {
                isBuffer: function(obj) {
                  return obj && obj.constructor && obj.constructor.name === 'Buffer';
                }
              };
            }

            // Util polyfill
            if (typeof util === 'undefined') {
              window.util = {};
            }

            // Process polyfill
            if (typeof process === 'undefined') {
              window.process = {
                env: {},
                version: '',
                versions: {}
              };
            }
          </script>`
        );
      }
    }
  ],
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['@walletconnect/utils', '@walletconnect/types', 'buffer', 'util'],
  },
  resolve: {
    alias: {
      'util': 'util',
      'buffer': 'buffer',
    },
  },
  server: {
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
})
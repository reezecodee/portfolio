import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  css: {
    // Disable CSS sourcemap injection delay in dev mode
    devSourcemap: false,
  },
  optimizeDeps: {
    // Force Vite to pre-bundle dependencies on startup, not on first request
    force: false,
    entries: ['src/main.ts'],
  },
  server: {
    allowedHosts: true, // Allow any host for Cloudflare Tunnels/ngrok
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
    // Warmup main entry so CSS is ready before first render
    warmup: {
      clientFiles: ['./src/main.ts', './src/style.css', './src/App.vue'],
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Any request from the frontend that starts with /api is forwarded to
      // the Movie Reviews API server running locally on port 5148.
      // This avoids CORS errors during development — the browser thinks it's
      // talking to the same origin (the Vite dev server), while Vite quietly
      // forwards the request to the API.  In production, a real reverse proxy
      // (e.g. nginx) would handle this instead.
      '/api': 'http://localhost:5148',
    },
  },
})

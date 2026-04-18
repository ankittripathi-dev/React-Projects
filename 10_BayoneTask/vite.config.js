import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Proxy API requests to ReqRes to avoid browser CORS issues in development
      '/api': {
        target: 'https://reqres.in',
        changeOrigin: true,
        secure: true
      }
    }
  }
});



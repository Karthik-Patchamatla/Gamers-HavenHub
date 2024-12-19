import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches your Vercel configuration
  },
  server: {
    port: 3000, // Optional: Define a custom port for local dev if needed
  },
  base: '/', // Use './' if assets fail to load in deployment
});

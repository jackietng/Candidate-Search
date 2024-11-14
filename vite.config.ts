import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: '../environment/.env.VITE_GITHUB_TOKEN',
  plugins: [react()],
});

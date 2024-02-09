import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
 
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      host: resolve(__dirname, '../host/src/CustomComponent.jsx'),
      remote: resolve(__dirname, '../remote/src/AnotherComponent.jsx'),
    },
  },
});
 
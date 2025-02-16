import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'copy-404',
    writeBundle() {
      // Copy 404.html to build output
      fs.copyFileSync(
        path.resolve(__dirname, 'public/404.html'),
        path.resolve(__dirname, '../dist/public/404.html')
      );
    }
  }],
  base: process.env.VITE_APP_BASE_URL ? `/${process.env.VITE_APP_BASE_URL}/` : "/portfolio/",  // Fixed base URL for GitHub Pages
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "../dist/public",
    emptyOutDir: true,
  },
});
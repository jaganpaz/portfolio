import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_APP_BASE_URL ? `/${process.env.VITE_APP_BASE_URL}/` : "./", // Dynamic base URL for GitHub Pages
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
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // relative path so assets load correctly on any domain
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          vendor: ["react", "react-dom", "react-router-dom", "styled-components"],
        },
      },
    },
    chunkSizeWarningLimit: 1200, // reduce noisy warnings; main gains are from lazy routes and chunks above
  },
});
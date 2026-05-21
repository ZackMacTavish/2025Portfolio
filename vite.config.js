import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// Set VISUALIZE=1 to emit a `dist/bundle-report.html` treemap after build.
const visualize = process.env.VISUALIZE === "1" || process.env.VISUALIZE === "true";

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["Safari >= 13", "iOS >= 13"],
    }),
    visualize &&
      visualizer({
        filename: "dist/bundle-report.html",
        template: "treemap",
        gzipSize: true,
        brotliSize: true,
        open: false,
      }),
  ].filter(Boolean),
  base: "./", // relative path so assets load correctly on any domain
  build: {
    // Vite emits `<link rel="modulepreload">` for every chunk reachable from
    // the entry import graph. With `three` declared as a manualChunk, Vite
    // happily preloads its 1 MB bundle on every page — including the mobile
    // root route, which never instantiates the WebGL scene. Filter the three
    // chunk out so it only loads when a component actually imports it.
    modulePreload: {
      resolveDependencies: (_filename, deps) =>
        deps.filter((dep) => !/\/three-[^/]+\.js$/.test(dep)),
    },
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
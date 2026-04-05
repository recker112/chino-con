import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true, // also necessary
    rollupOptions: {
      output: {
        entryFileNames: "index.[hash].js", // Agregar hash al nombre del archivo
        chunkFileNames: "assets/[name].[hash].js", // Agregar hash a los chunks
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    eslintPlugin(),
    mkcert({
      savePath: "./certs",
    }),
  ],
});

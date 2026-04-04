import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import mkcert from 'vite-plugin-mkcert';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    eslintPlugin(),
    mkcert({
      savePath: "./certs",
    }),
  ],
});

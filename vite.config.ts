import { resolve } from './node_modules/vite-tsconfig-paths/src/path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr";
import tsconfigPaths from 'vite-tsconfig-paths'
import path from "path";

// https://vite.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@customTypes": path.resolve(__dirname, "./src/types"),
    }
  },

  plugins: [
    react(),
    tailwindcss(),
    svgr({
      include: "**/*.svg?react",
    }),
    tsconfigPaths(),
  ],
})

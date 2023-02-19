import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "MeLibUi",
      formats: ["es", "cjs"],
      fileName: (format) => `me-lib-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        preserveModules: true,
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

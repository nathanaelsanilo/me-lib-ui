import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "node:path";
// import dts from "vite-plugin-dts";
// import typescript2 from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // dts({
    //   insertTypesEntry: true,
    // }),
    // typescript2({
    //   check: false,
    //   include: ["src/components/**/*.vue"],
    //   tsconfigOverride: {
    //     compilerOptions: {
    //       outDir: "dist",
    //       sourceMap: true,
    //       declaration: true,
    //       declarationMap: true,
    //     },
    //   },
    //   exclude: ["vite.config.ts"],
    // }),
  ],
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
        // globals: {
        //   vue: "Vue",
        // },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    modulePreload: false,
    rollupOptions: {
      output: {
        format: "esm",
        entryFileNames: "main.js",
      },
    },
  },
});

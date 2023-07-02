import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { preact2webcomponents, externals } from "preact-to-webcomponents";

export default defineConfig({
  plugins: [preact(), preact2webcomponents({ customElementNamePrefix: "x" })],
  css: {
    modules: {
      scopeBehaviour: "global",
    },
  },
  build: {
    lib: {
      entry: "./src/index.tsx",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: externals,
    },
  },
});

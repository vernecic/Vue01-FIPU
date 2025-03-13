import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite"; // <- učitavanje tailwindcss paketa
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(), // <- dodati plugin
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

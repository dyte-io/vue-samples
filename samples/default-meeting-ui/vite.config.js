import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // NOTE: do this to avoid custom elements warning by vue
          isCustomElement: (tag) => false,
        },
      },
    }),
  ],
});

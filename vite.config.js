import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import svgSprite from "vite-plugin-svg-sprite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    base: isProd ? "/tech-house/" : "/",
    plugins: [
      react(),
      svgSprite({
        symbolId: "icon-[name]",
        svgo: {
          plugins: [
            {
              name: "removeAttrs",
              params: {
                attrs: "fill|class",
              },
            },
          ],
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use '@/app/styles/helpers' as *;
        `,
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});

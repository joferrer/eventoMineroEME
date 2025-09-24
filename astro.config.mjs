// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server", // 👈 necesario para usar SSR
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
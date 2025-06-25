import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "Browser-extension-manager-UI",
  plugins: [
    tailwindcss({
      darkMode: "class",
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    }),
    react(),
  ],
});

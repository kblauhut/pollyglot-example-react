import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "panda-css",
        replacement: fileURLToPath(new URL("./panda-css", import.meta.url)),
      },
    ],
  },
  plugins: [react()],
});

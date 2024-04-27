import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {},
  },
  jsxFramework: "react",
  prefix: "pd",
  outdir: "panda-css",
});

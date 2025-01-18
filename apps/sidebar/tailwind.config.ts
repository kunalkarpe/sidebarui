import sharedCss from "@repo/tailwindcss-config";
import type { Config } from "tailwindcss";
const config: Omit<Config, "content"> = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedCss],
  plugins: [],
};

export default config;

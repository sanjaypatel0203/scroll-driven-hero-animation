import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090c",
        foreground: "#f4f4f6",
        neon: {
          lime: "#ccff00",
          cyan: "#00f0ff",
          orange: "#ff5e00",
          purple: "#9d4edd",
        },
        surface: {
          50: "#1e2230",
          100: "#161922",
          200: "#11131a",
          300: "#0c0d12",
        },
        border: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      letterSpacing: {
        widestx: "0.35em",
        mega: "0.5em",
      },
    },
  },
  plugins: [],
};

export default config;

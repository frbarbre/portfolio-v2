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
        "primary-dark": "#FFD02A",
        "primary-light": "#2764FF",
        "near-black": "#0E0E0E",
      },
      transitionTimingFunction: {
        modal: "cubic-bezier(0.76, 0, 0.24, 1);",
      },
      screens: {
        md: "815px",
        lg: "1330px",
      },
    },
  },
  plugins: [],
};
export default config;

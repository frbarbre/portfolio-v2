import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#FFD02A',
        'primary-light': '#2764FF',
        'near-black': '#0E0E0E',
      },
      transitionTimingFunction: {
        "modal": 'cubic-bezier(0.76, 0, 0.24, 1);',
      },
      screens: {
        md: '815px',
        lg: '1400px',
        xl: "1800px",
      },
      backgroundImage: {
        hero: "url('/images/hero.png')",
      },
      minHeight: {
        hero: 'calc(100svh - 77px)',
      },
      maxWidth: {
        custom: "1800px"
      },
      objectPosition: {
        about: '90% center',
      },
      gridTemplateColumns: {
        "filters": "max-content max-content 1fr",
        "filters-mobile": "max-content max-content"
      },
      gridTemplateRows: {
        "filters": "max-content 1fr"
      }
    },
  },
  plugins: [],
};
export default config;

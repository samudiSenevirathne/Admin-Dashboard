import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'dddl': '0px',
         // => @media (min-width: 0px) { ... }
         'adl': '375px',
         // => @media (min-width: 375px) { ... }
       'ddl': '570px',
         // => @media (min-width: 570px) { ... }
         'dlll': '769px',
         // => @media (min-width: 769px) { ... }
         'dll': '1200px',
      // => @media (min-width: 1200px) { ... }
      'dl': '1440px',
      // => @media (min-width: 1400px) { ... }
      '2dl': '2560px',
      // => @media (min-width: 2560px) { ... }
   },
    },
  },
  plugins: [],
};
export default config;

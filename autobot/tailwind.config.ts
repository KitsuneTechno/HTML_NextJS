import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        footerColor: "#f5f5f5",
        instagramColor: "#E4405F",
        facebookColor: "#2b3be0",
        whatsappColor: "#23d000",
        cardColor: "#663129",
      },
      screens: {
        'max-sm': {'max' : '768px'}
      },
      fontSize: {
        xsm: "0.5rem",
        slm: "0.6rem"
      }
    },
  },
  plugins: [],
};
export default config;

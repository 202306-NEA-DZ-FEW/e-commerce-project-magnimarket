/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Cairo: ["Cairo", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bkg: "rgb(var(--color-bkg) / <alpha-value>)",
        content: "rgb(var(--color-content) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        border: "rgb(var( --color-border) / <alpha-value>)",
        bkgHover: "rgb(var( --color-bkgHover) / <alpha-value>)",
        titleContent: "rgb(var( --color-titleContent) / <alpha-value>)",
        navbarContent: "rgb(var(   --color-navbarContent) / <alpha-value>)",
      },
      boxShadow: {
        custom: [
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px",
          "rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        ],
      },
    },
  },
  plugins: [],
}

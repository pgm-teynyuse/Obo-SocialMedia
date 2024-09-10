import { title } from "process";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
        heading: ["Ubuntu", "sans-serif"],
      },
      fontSize: {
        titleNormal: ["1.5rem", { lineHeight: "1.2" }],
        titleSmall: ["1rem", { lineHeight: "1.2" }],
        subText: ["0.8rem", { lineHeight: "1.2" }],
        readText: ["1rem", { lineHeight: "1.5" }],
      },
      colors: {
        o_primary: {
          100: "hsla(228, 56%, 35%, 1)",
        },
        o_secondary: "hsla(342, 78%, 66%, 100)",
        o_dark: {
          5: "hsla(0, 0%, 90%, 100)",
          10: "hsla(0, 0%, 75%, 100)",
          50: "hsla(0, 0%, 54%, 100)",
          100: "hsla(210, 60%, 2%, 100)",
        },
      },
      spacing: {
        base: "1.5rem",
        xxs: ".6rem",
        xs: "1rem",
        s: "1.25rem",
        m: "1.875rem",
        l: "3.75rem",
      },
      borderRadius: {
        o_s: "0.5rem",
        o_nav: "3rem",
        o_modal: "3rem",
      },
    },
  },
  plugins: [],
};

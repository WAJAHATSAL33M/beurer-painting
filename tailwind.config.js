/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bauer: {
          green: "#25D366",
          greenDark: "#1DA851",
          ink: "#101828",
          slate: "#667085",
          lav: "#8F8FB0",
          mist: "#F3F6F8",
          navy: "#0D1B2A",
          navyLight: "#16283C",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "Inter", "system-ui", "sans-serif"],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "10%" : "15%",
        "90%" : "85%",
      },
      colors: {
        primary: {
          50: "rgb(255 241 242)",
          100: "rgb(255 228 230)",
          200: "rgb(254 205 211)",
          300: "rgb(253 164 175)",
          400: "rgb(251 113 133)",
          500: "rgb(244 63 94)",
          600: "#FF0000",
          700: "rgb(190 18 60)",
          800: "rgb(159 18 57)",
          900: "rgb(136 19 55)",
          flag: "#e8000b",
        },
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [],
};
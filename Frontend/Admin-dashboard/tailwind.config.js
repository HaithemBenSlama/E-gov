const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      'Indigo':{
        50: '#eef2ff',
        500: '#6366f1',
      },
      'yellow':{
        200: '#fef08a',
        400: '#facc15',
      },
      'Red':{
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        900: '#7f1d1d',
      },
      'gray':{
        50 : '#f9fafb',
        100: '#f3f4f6',
        300: '#cbd5e1',
        500: '#6b7280',
        600: '#4b5563',
        700: '#334155',
        800: '#1f2937',
        900: '#111827',
      },
      'green':{
        500: '#22c55e',
      },
      'slate': {
        600: '#475569',
      },
      'blue' :{
        500: '#3b82f6',
      },
      'sky' :{
        500: '#0ea5e9',
      },
      primary: "#3B81F6",
      white: '#ffffff',
      text: {
        DEFAULT: "#1F2937",
        light: "#6C7281",
      },
      light: {
        DEFAULT: "#FAFBFC",
        lighter: "#F3F4F6",
      },
    },
    extend: {},
  },
  plugins: [],
}

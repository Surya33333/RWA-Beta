/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color":  "#fff",
        "secondary-color": "#000",
        "button-color": "#22C55E",
      },
    },
  },
  plugins: [],
}

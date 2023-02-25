/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    screens: {
      'mobile':{'max':'300px'},
      // => @media (max-width: 390) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
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

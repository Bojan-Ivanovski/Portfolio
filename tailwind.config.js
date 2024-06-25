/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': '#146c94',
        'primary': '#19A7CE',
        'secondary': '#AFD3E2',
        'white' : "#F6F1F1"
      },
    },
  },
  plugins: [],
}


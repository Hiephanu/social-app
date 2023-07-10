/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        popup:'rgba(243, 243, 243, 0.8)',
      }
    },
  },
  plugins: []
}


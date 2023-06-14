/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#c7e3ff",
          600: "#12492F",
          900: "#0a2f35"
        }
      }
    },
  },
  plugins: [],
}
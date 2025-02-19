/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   lg: '900px',
    // },
    extend: {
      fontfamily: {
        "primary": ['inter', 'sans-sarif']
      }
    },
  },
  plugins: [],
}
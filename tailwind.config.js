/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: { 
            "bricolage": ['Bricolage Grotesque', 'display'],
            "roboto": ['Roboto Flex', 'sans-serif'] 
        } 
    },
  },
  plugins: [],
}
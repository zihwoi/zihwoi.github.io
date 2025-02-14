/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media', 
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lora', 'serif'], // Set Lora as the default sans font
        heading: ['Montserrat', 'sans-serif'], // Keep Montserrat for headings
      },
      colors: {
        warmBg: "#FFF5E1",
        warmDarkBg: "#3E2723",
        warmText: "#5C3D2E",
        warmLightText: "#FDEBD3",
        warmAccent: "#FF8E72",
        warmHover: "#FF9770",
      },
    },
  },
  plugins: [],

}
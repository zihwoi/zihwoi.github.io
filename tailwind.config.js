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
        mainBg: "#F5F1E3", // Softer Cream
        softBg: "#E3D5C1", // Toasted Almond (Better contrast for cards)
        accent: "#5C2E13", // Rustic Umber (Stronger heading contrast)
        textPrimary: "#2E1B0F", // Dark Espresso (High readability for body text)
        textSecondary: "#705438", // Burnt Caramel (Better for tags/smaller text)
        secondaryBg: "#3C2415", // Dark Chestnut (Good balance for deep sections)
      },
    },
  },
  plugins: [],

}
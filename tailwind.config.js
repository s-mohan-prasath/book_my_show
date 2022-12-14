/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      web:{
        premiere:{
          black:"#2B3147"
        }
      },
      dark: {
        50: "#5C5C5C",
        100: "#525252",
        200: "#3D3D3D",
        300: "#292929",
        400: "#141414",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
      red: {
        50: "#F8EBE4",
        100: "#F2D7CC",
        200: "#E5AC9C",
        300: "#D87B6C",
        400: "#CB463B",
        500: "#9F2A2A",
        600: "#83232A",
        700: "#661B26",
        800: "#4A1420",
        900: "#2E0C16",
      }
    }
  },
  plugins: []
};

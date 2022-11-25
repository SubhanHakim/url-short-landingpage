/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2acfcf",
        Dark: "#3b3054",
        secondary: "#f46262",
        thirty: "#bfbfbf",
        Violet: "#9e9aa7",
        darkBlue: "#35323e",
        darkViolet: "#232127",
      },
      fontFamily: {
        PrimaryText: ["Poppins"],
      },
    },
  },
  plugins: [],
};

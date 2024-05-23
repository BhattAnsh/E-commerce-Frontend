/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/Pages/**/*.{js,ts,jsx,tsx}", // Corrected file extension
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      bgc: "#F6F6F6",
      sec: "#CDBBA9",
      pri: "#B9B9B9",
      textColor: "#fff",
      buttonColor: "#181713",
      pink:"#ECD6D1",
      linen:"#F1ECE6",
      grey:"B9B9B9"
    },
    extend: {},
  },
  plugins: [nextui()],
};

/** @type {import('tailwindcss').Config} */
const pallete = require("./src/styles/pallete.json");

const catppuccin = {};

for (const item in pallete.mocha) {
  catppuccin[item] = pallete.mocha[item].rgb;
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...catppuccin
      },
    },
  },
  plugins: [],
};

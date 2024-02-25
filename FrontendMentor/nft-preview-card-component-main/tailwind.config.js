/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "CS-Soft-blue": "hsl(215, 51%, 70%)",
        "CS-Cyan": "hsl(178, 100%, 50%)",
        "CS-Body-Dark-Blue": "hsl(217, 54%, 11%)",
        "CS-Very-Dark-Blue": "hsl(216, 50%, 16%)",
        "CS-Dark-Blue": "hsl(215, 32%, 27%)",
      },
      fontFamily: {
        body: ["Outfit"],
      },
    },
  },
  plugins: [],
};

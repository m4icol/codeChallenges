/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "CS-Light-Cyan": "hsl(193, 38%, 86%)",
        "CS-Neon-Green": "hsl(150, 100%, 66%)",
        "CS-Grayish-Blue": "hsl(217, 19%, 38%)",
        "CS-Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
        "CS-Dark-Blue": "hsl(218, 23%, 16%)"
      },
      fontFamily: {
        body:["Manrope"]
      }
    },
  },
  plugins: [],
}
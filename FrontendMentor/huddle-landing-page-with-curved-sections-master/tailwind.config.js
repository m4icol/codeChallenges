/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "CS-Pink": "hsl(322, 100%, 66%)",
        "CS-Light-Pink": "hsl(321, 100%, 78%)",
        "CS-Light-Red": "hsl(0, 100%, 63%)",
        "CS-Dark-Cyan": "hsl(192, 100%, 9%)",
        "CS-Pale-Blue": "hsl(207, 100%, 98%)",
      },
      fontFamily: {
        header: ["Poppins"],
        body: ["Open Sans"],
      },
    },
  },
  plugins: [],
};

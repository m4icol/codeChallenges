/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "CS-Grayish-blue" : "hsl(237, 18%, 59%)",
        "CS-Soft-red" : "hsl(344, 54%, 56%)",
        "CS-Dark-desaturated-blue" : "hsl(240, 21%, 26%)",
        "CS-Dark-blue" : "hsl(240, 21%, 22%)",
        "CS-Very-Dark-blue" : "hsl(234, 17%, 12%)",
      }
    },
    fontFamily: {
      body: [`Red Hat Text`],
    }
  },
  plugins: [],
}


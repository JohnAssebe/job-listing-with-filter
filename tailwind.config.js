/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DesaturatedDarkCyan: "hsl(180, 29%, 50%)",
        LightGrayishCyan: "hsl(180, 52%, 96%)",
        LightGrayishCyan2: "hsl(180, 31%, 95%)",
        DarkGrayishCyan: "hsl(180, 8%, 52%)",
        VeryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        leagueSpartan: "League Spartan",
      },
    },
  },
  plugins: [],
};

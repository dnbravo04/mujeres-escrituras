/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        title: "url('/src/assets/backgrounds/titleBackground.jpeg')",
        introduction:
          "url('/src/assets/backgrounds/introductionBackground.jpg')",
        oldtestament:
          "url('/src/assets/backgrounds/oldTestamentBackground.jpg')",
        newtestament:
          "url('/src/assets/backgrounds/newTestamentBackground.jpeg')",
        bookofmormon:
          "url('/src/assets/backgrounds/bookOfMormonBackground.webp')",
        churchhistory:
          "url('/src/assets/backgrounds/churchHistoryBackground.webp')",
        closure: "url('/src/assets/backgrounds/newTestamentBackground.jpg')",
      },
      fontFamily: {
        playwrite: ["Playwrite GB S", "serif"],
        playwriteco:["Playwrite CO","serif"],
        monserrat: ["Monserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  safelist: [
    "bg-title",
    "bg-introduction",
    "bg-oldtestament",
    "bg-newtestament",
    "bg-bookofmormon",
    "bg-churchhistory",
    "bg-closure",
  ],

  plugins: [],
};

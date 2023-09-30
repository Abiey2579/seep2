module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          50: "#f0f0f2",
          100: "#cccccc",
          200: "#a9aec0",
          300: "#8198af",
          800: "#3f3d56",
          900: "#252b3b",
          "50_90": "#f0f0f290",
          "900_01": "#2f2e41",
          "900_87": "#252b3b87",
          "50_01": "#eaf8f3",
          "300_01": "#88b5a1",
          "300_90": "#8198af90",
          "900_90": "#252b3b90",
        },
        red: { 50: "#fcedeb", 300: "#de7673", 600: "#dc4234" },
        deep_orange: { 100: "#ffb6b6", 500: "#ed662c", "100_01": "#ffb8b8" },
        teal: { 400: "#2ab87e", 600: "#27996d" },
        black: { 900: "#000000" },
        pink: { 300: "#ff6584" },
        gray: {
          100: "#f7f6f2",
          300: "#e6e6e6",
          600: "#a0616a",
          700: "#7a4d64",
          "700_3f": "#7a4d643f",
          "100_01": "#f2f2f2",
        },
        amber: { 300: "#f9d14b", 600: "#ffbb00" },
        yellow: { 50: "#fff9e6" },
        white: { A700: "#ffffff" },
      },
      boxShadow: { bs: "0px 12px  12px 0px #7a4d643f" },
      fontFamily: { catamaran: "Catamaran", quicksand: "Quicksand" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
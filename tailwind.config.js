/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      // transparent: "transparent",
      // current: "currentColor",
      // // use default color
      // white: colors.white,
      // purple: "#3f3cbb",
      // // color object syntax
      // tahiti: {
      //   100: "#cffafe",
      //   200: "#a5f3fc",
      //   300: "#67e8f9",
      //   400: "#22d3ee",
      //   500: "#06b6d4",
      //   600: "#0891b2",
      //   700: "#0e7490",
      //   800: "#155e75",
      //   900: "#164e63",
      // },
      // silver: "#ecebff",
      // "bubble-gum": "#ff77e9",
      bermuda: "#000",
    },
    extend: {
      keyframes: {
        blink: {
          "0%": { display: "none" },
          "50%": { display: "none" },
          "100%": { display: "inline" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "colorful-text": "text 3s ease infinite",
        "blinking-text": "blink 1.2s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};

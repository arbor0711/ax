/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#f7fafc",
        400: "#ced4da",
        900: "#1a202c",
      },
      navy: "#14213d",
      caterpillar: "#fca311",
      raspberry: "#a91079",
      headings: "#1c1c1c",
      texty: "#262626",
      bg_dark: "#000",
      bg_light: "#fff",
      box_shadow: "#E00E94",
      button_Primary: "#a91079",
      button_primary_hover: "#a91079e2",
      bg_bar: "#191E24",
    },
    extend: {
      boxShadow: {
        navbar: "10px 10px 10px -15px rgb(255, 255, 255)",
      },
      fontSize: {
        h1: "calc(1.625rem + 1.6vw)",
        h2: "calc(1.5rem + .25vw)",
        h3: "calc(1.125rem + .25vw)",
        h4: "calc(1.5rem + .25vw)",
        texts: "calc(.35842vw + .95296em)",
      },

      spacing: {
        h1t: "1.5rem",
        h1b: "0.67rem",
        h2t: "1.5rem",
        h2b: "0.67rem",
        h3t: "1rem",
        h3b: "0.67rem",
        h4t: "0.67rem",
        h4b: "0.67rem",
        section: "15rem",
        ninety: "90vh",
      },
      borderRadius: {
        round: "2rem",
      },
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
        bg: {
          "0%, 100%": {
            "background-position": "top",
          },
          "50%": {
            "background-position": "bottom",
          },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "colorful-text": "text 3s ease infinite",
        "blinking-text": "blink 1.2s linear infinite",
        "projectPage-background": "bg 35s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};

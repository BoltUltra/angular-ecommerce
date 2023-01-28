/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#008ECC",
        accent: "#F3F9FB",
        text: "#666666",
        heading: "#222222",
        light: "#888888",
        border: "#EDEDED",
        yellow: "#E3BC01",
        topnav: "#F5F5F5",
        slider: "#212844",
        hr: "#05ABF3",
      },
    },
  },
  plugins: [],
};

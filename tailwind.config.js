/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["Space Grotesk", "sans-serif"],
      link: ["Lilita One", "sans-serif"],
    },
    extend: {
      writingMode: {
        "vertical-rl": "vertical-rl",
      },
      textOrientation: {
        upright: "upright",
      },
      boxShadow: {
        custom: "rgba(255, 255, 255, 0.06) 0px 22px 70px 4px",
        button:
          "rgba(255, 255, 255, 0.4) 0px 5px, rgba(255, 255, 255, 0.3) 0px 10px, rgba(255, 255, 255, 0.2) 0px 15px",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  variants: {
    extend: {
      writingMode: ["responsive"],
      textOrientation: ["responsive"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".vertical-rl": {
            writingMode: "vertical-rl",
          },
          ".text-upright": {
            textOrientation: "upright",
          },
        },
        ["responsive"]
      );
    },
  ],
};

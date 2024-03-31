/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      boxShadow: {
        custom: "rgba(255, 255, 255, 0.06) 0px 22px 70px 4px",
        button:
          "rgba(255, 255, 255, 0.4) 0px 5px, rgba(255, 255, 255, 0.3) 0px 10px, rgba(255, 255, 255, 0.2) 0px 15px",
      },
      
    },
  },
  plugins: [],
};

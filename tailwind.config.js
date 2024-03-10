/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "639px" }, // => @media (max-width: 639px) { ... }
        tablet: { max: "1023px" }, // => @media (max-width: 1023px) { ... }
        laptop: { max: "1279px" }, // => @media (max-width: 1279px) { ... }
        desktop: { min: "1280px" }, // => @media (min-width: 1280px) { ... }
      },
      colors: {
        primary: "#DD3128",
        secondary: "#E53166",
        tertiary: "#EB398C",
        quaternary: "#FFD70F",
        backgroundColor: "#FE6F69",

        primaryTextColor: "#ffffff",
      },
    },
  },
  plugins: [],
};

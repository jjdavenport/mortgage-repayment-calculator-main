import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{html,js,jsx}", "./index.html"],
    extract,
  },
  theme: {
    screens,
    extend: {
      borderRadius: {
        xl5: "6rem",
      },
      fontFamily: {
        custom: ["plus jakarta sans", "sans-serif"],
      },
      colors: {
        lime: "hsl(61, 70%, 52%)",
        red: "hsl(4, 69%, 50%)",
        white: "hsl(0, 0%, 100%)",
        slate100: "hsl(202, 86%, 94%)",
        slate300: "hsl(203, 41%, 72%)",
        slate500: "hsl(200, 26%, 54%)",
        slate700: "hsl(200, 24%, 40%)",
        slate900: "hsl(202, 55%, 16%)",
        slateBlack: "hsl(202, 54%, 13%)",
      },
    },
  },
  plugins: [fluid],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1b1d23",
        "dark-grey": "#606362",
        "med-grey": "#7d828f",
        "light-grey": "#c8ccd8",
        "very-light-grey": "#eeeff4",
        red: "#df5656"
      },
    },
  },
  plugins: [],
};

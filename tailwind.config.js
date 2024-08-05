/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Grandstander","Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

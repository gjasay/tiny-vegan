/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Grandstander","Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        tvGreen: '#666439',
        tvFire: '#e65f37',
        tvLight: '#faf7c3',
        tvButton: '#4CAF50',
        tvButtonHover: '#45A049',
      }
    },
  },
  plugins: [],
};

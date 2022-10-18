/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "alpine-img": "url(/src/assets/images/alpine.jpg)",
      },
    },
  },
  plugins: [],
};

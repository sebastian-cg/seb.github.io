/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      scrollBehavior: ['responsive', 'smooth'],
    },
  },
  plugins: [],
};

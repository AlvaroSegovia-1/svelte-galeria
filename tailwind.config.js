/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
    theme: {
      extend: {},
    },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],

}


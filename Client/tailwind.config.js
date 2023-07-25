/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "daisyui"],
  theme: {
    extend: {
      screens:{
      //   'xs': '370px', // Agrega tu breakpoint personalizado
      // 'sm': '640px',
      // 'md': '768px',
      // 'lg': '1024px',
      // 'xl': '1280px',
      // '2xl': '1536px'
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};

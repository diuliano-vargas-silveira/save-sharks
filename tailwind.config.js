/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      sans: '[var(--font-roboto)]',
      mono: '[var(--font-ubuntu)]',
    },

    // backgroundImage: {
    //   'white-shark': "url('/src/assets/white-shark.jpg')",
    // },

    colors: {
      transparent: 'transparent',
      white: {
        500: '#ffffff',
      },
      blue: {
        50: '#e3fdfd',
        100: '#cae4e6',
        200: '#b2cbd0',
        300: '#99b1b9',
        400: '#8098a3',
        500: '#687f8c',
        600: '#4f6676',
        700: '#364c5f',
        800: '#1e3349',
        900: '#051a32',
      },
    },
  },
  plugins: [],
}

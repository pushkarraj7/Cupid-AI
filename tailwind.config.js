/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      primary: '#FD3A72',
      primaryLighter: '#fd618e',
      primaryLightest: '#fe89aa',
      primaryDarker: '#e43467',
      primaryDarkest: 'ca2e5b',
      secondary: '#ecc94b',
      white: '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}
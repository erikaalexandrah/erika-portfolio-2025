/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', 
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        // Colores para el modo claro
        background: '#f9f7f7',
        grid: '#e0e0e0',
        dots: '#e3dcdc',
        text: '#333333',
        heading: '#111111',

        // Colores para el modo oscuro
        darkBackground: '#424040', 
        darkGrid: '#4a4a4a',
        darkDots: '#6a6a6a',
        darkText: '#e0e0e0',
        darkHeading: '#ffffff',

        //Otros
        milka: '#6255A5',
        lavander:'#AEACF2',
        plumber: '#424040'
      },
    },
  },
  plugins: [],
};

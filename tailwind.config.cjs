/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {
      colors: {
        semiDark: '#211c19',
      },
      fontFamily: {
        Noto: 'Noto Sans TC, sans-serif',
        Nunito: 'Nunito, sans-serif',
        Poppins: 'Poppins, sans-serif',
        Lora: 'Lora, serif',
        Bodoni: 'Bodoni Moda, serif',
        Scotch: 'scotch-display sans-serif',
      },
    },
  },
  plugins: [],
};

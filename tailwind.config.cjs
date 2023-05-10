/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        Nunito: 'Nunito, sans-serif',
        Poppins: 'Poppins, sans-serif',
        Lora: 'Lora, serif',
        Bodoni: 'Bodoni Moda, serif',
      },
    },
  },
  plugins: [],
};

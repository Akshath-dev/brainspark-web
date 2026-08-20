/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F4EFE6', // Signature Chestry/Editorial Alabaster Cream
          200: '#EBE4D8',
          300: '#DFD5C4',
          400: '#CBBFA9',
          DEFAULT: '#F4EFE6',
        },
        sand: {
          300: '#EED9B9',
          400: '#E4C79B', // Signature Chestry Tan/Gold Button Color
          500: '#D5B380',
          DEFAULT: '#E4C79B',
        },
        noir: {
          800: '#1C1B18',
          900: '#141310',
          950: '#0E0D0B', // Deep Luxury Espresso Black
          DEFAULT: '#0E0D0B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Instrument Serif', 'Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}

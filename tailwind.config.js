/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      animation: {
        toast: 'fadein 0.7s 2 alternate',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0, marginTop: '-30px' },
          '50%, 100%': { opacity: 1, marginTop: 0 },
        },
      },
    },
  },
  plugins: [],
};

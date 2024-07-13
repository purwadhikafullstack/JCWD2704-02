const flowbite = require('flowbite-react/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      screens: {
        sm: '640px', // default small breakpoint
        md: '768px', // default medium breakpoint
        lg: '1024px', // default large breakpoint
        xl: '1280px', // default extra-large breakpoint
        '2xl': '1440px', // default 2x-large breakpoint
        'custom-sm': '500px', // custom small breakpoint
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
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
          950: '#172554',
        },
        customBlue: '#4318FF',
      },
      fontSize: {
        'display-small': [
          '34px',
          {
            lineHeight: '42px',
            letterSpacing: '-2%',
          },
        ],
        '14px': [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '-2%',
          },
        ],
        '18px': [
          '18px',
          {
            lineHeight: '30px',
            letterSpacing: '-2%',
          },
        ],
        '24px': [
          '24px',
          {
            lineHeight: '32px',
            letterSpacing: '-2%',
          },
        ],
        '26px': [
          '26px',
          {
            lineHeight: '26px',
          },
        ],
      },
    },
    plugins: [require('tailwindcss-animate'), flowbite],
  },
};

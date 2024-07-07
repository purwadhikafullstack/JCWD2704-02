/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
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
  },
  plugins: [],
};

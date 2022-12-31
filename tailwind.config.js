/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'marker' : 'Permanent Marker',
      'league': 'League Spartan',
      'monts': 'Montserrat'
      
    },
    boxShadow: {
      'top' : '-5px -5px 10px rgba(255, 252, 252, 0.4)',
      'light' : '-5px -5px 10px rgba(255, 255, 255, 0.4)',
      'down' : '5px 5px 10px rgba(0, 0, 0, 0.4)'
    },
    screens: {
      'xs': '0px', // min-width

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'fadeup': 'linear-gradient(180deg, #F4F4F4, rgba(244, 244, 244, 0.61), transparent)',
        'fadebottom': 'linear-gradient(180deg, transparent, rgba(244, 244, 244, 0.61), #F4F4F4)',
        'fullgradient': 'linear-gradient(180deg, rgba(145, 140, 140, 0) 0%, rgba(115, 111, 111, 0.37) 18.22%, rgba(86, 83, 83, 0.72) 42.71%, rgba(0, 0, 0, 0.72) 79.17%)' 
      },
      colors: {
        'theme': "#F4F4F4"
      },
      cursor: {
        'link': "url('https://api.iconify.design/noto:eyes.svg'), pointer !important",
      }
    },
  },
  plugins: [],
}
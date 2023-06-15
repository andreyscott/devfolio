/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}'

  ],
  theme: {
    extend: {
      colors: {
        bg: "#000a1f",
        "fun-pink": "#00c7ff",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

          banner: "url('/images/banner-bg.png')",
          banner1: "url('/images/bannerBg.jpg')",
      },

    // create keyframes
    animation: {
      astronout: 'astronout 7s infinite',
      astronout1: 'astronout1 10s infinite',
      fadeIn: 'fadeIn 2s ease-in-out',
    },
    keyframes: {
    astronout: {
      "0%": {
        transform: "translate(0px, 0px) scale(1)",
        filter: "blur(2px)",
      },
      "50%": {
        transform: "translate(20px, -20px) scale(1.1)",
        filter: "blur(0px)",
      },
      "100%": {
        transform: "tranlate(0px, 0px) scale(1)",
        filter: "blur(1px)",
      },
    },
      astronout1: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
          filter: "blur(2px)",
        },
        "33%": {
          transform: "translate(30px, -50px) scale(1.1)",
          filter: "blur(0px)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
          filter: "blur(2px)",
        },
        "100%": {
          transform: "tranlate(0px, 0px) scale(1)",
          filter: "blur(1px)",
        },
        },   

    },    
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'wide': 'wide 2s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-delay': 'fadeIn 1s ease-out 0.5s forwards',
        'blob': "blob 7s infinite",
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        wide: {
          '0%, 100%': { width: '5rem' },
          '50%': { width: '7rem' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
        
      },
      perspective: {
        '1000': '1000px',
      },
      rotateY: {
        '12': '12deg',
      }
    },

  },
  plugins: [],
}
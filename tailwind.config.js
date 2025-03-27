/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        biao: {
          DEFAULT: '#E53935',
          light: '#EF5350',
          dark: '#C62828',
          gold: '#FFD700',
          accent: '#FFC107',
          gray: '#D3D3D3',
          cream: '#FFFAF0',
        },
        biaoQing: {
          red: '#E53935',
          yellow: '#FFC107',
          gold: '#FFD700',
          blue: '#1E88E5',
          green: '#43A047',
          pink: '#EC407A',
          black: '#212121',
          white: '#FFFFFF',
        },
        white: {
          DEFAULT: '#FFFFFF',
          off: '#F5F5F5',
        },
        black: {
          DEFAULT: '#000000',
          light: '#333333',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['"Noto Sans SC"', 'sans-serif'],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-out": "fade-out 0.5s ease-in-out",
        "bounce": "bounce 1s infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      backgroundColor: {
        'biao-gradient': 'linear-gradient(135deg, #E53935 0%, #FFC107 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./skills/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050510',
        neon: {
          cyan: '#00f3ff',
          purple: '#bc13fe',
          blue: '#0066ff',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #00f3ff, 0 0 20px #00f3ff',
        'neon-purple': '0 0 10px #bc13fe, 0 0 20px #bc13fe',
      },
    },
  },
  plugins: [],
}

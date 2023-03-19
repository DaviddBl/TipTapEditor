/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Helvetica Neue', 'Roboto', 'Arial', 'sans-serif'],
      serif: ['Times New Roman', 'Georgia', 'serif'],
      mono: ['Monospace', 'Courier New', 'monospace'],
      comic: ['Comic Sans MS', 'Comic Sans', 'cursive'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto: ['Noto Sans', 'sans-serif'],
        Sail: ["Sail", 'system-ui']
      },
    },
  },
  plugins: [],
}
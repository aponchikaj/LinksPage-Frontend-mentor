/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter':'Inter'
      },
      colors:{
        'White':'White',
        'Grey':"hsl(0, 0%, 20%)",
        'DarkGrey':"hsl(0, 0%, 12%)",
        'Black':"hsl(0, 0%, 8%)",
        'Green':"hsl(75, 94%, 57%)"
      }
    },
  },
  plugins: [],
}
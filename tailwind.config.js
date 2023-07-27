/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '425px',
      'tablet': '768px',
      
      => @media(min - width: 640px) { ... }

extend: { },
    },
plugins: [],
  
}
}
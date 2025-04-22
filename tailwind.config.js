module.exports = {
  content: ["./app/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      }
    }
  },
  plugins: [],
}
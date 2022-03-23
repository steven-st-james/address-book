module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6394",
      }
    },
  },
  plugins: [require("sailui")],
}

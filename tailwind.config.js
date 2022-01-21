module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./sections/**/*.{html, js}"
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#001043",
        lightblue: "#00A8FF",
        white: "#ffffff",
        black: "#000000",
        green: "#63C132"
      },
      backgroundImage: {
        'principal-image': "url('/src/assets/gutters-green-and-blue.jpg')"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

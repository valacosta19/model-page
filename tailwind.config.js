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
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

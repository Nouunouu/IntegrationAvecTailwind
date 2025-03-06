/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "./public/*.{html,js}", 

  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#B34532",
        "back": "#171717",
        "orange-color":"#B34532",
        "Bleu":"#2E51A2",
        "ahmer":"#A84534",
        "blanccc":"#ffffff",
    },
  },
  plugins: [],
}

}
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
        "gray-dark": "#1f2937",   // Ajout d'un gris foncé pour le fond des cartes
        "gray-light": "#4b5563",  // Gris clair pour le texte
        "gray-border": "#6b7280", // Bordure grise
    },
  },
  plugins: [],
}

}
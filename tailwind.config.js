/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],

  
  theme: {
    screens:{
      'xs': '0px',
      
      'sm': '640px',

      'md': '768px',
      
      'lg': '1024px',

      'xl': '1280px',
    },
    colors:{
      transparent: 'transparent',
      
      'white': '#ffffff',
      'off-white': '#FAF9F6',
      'ivoy':  '#FFFFF0',
      'seashell': '#FFF5EE',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#bdc3c7',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'hint-of-pensive': '#e6e8eb',
      'violet': '#6d28d9',
      'indigo': '#4338ca',
      'red':  '#ff0000',
      'black': '#000000',
      'kinda-black': '#D3D3D3',
      'neutral': '#525252',
      'Beekeeper': '#f6e58d',
      
    },
    
    extend: {
      backgroundImage: {
        'background-img': "url('/src/Background Search bar.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }


    },
    important: true
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}




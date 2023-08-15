/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html"
  ],
 
  theme: {
    extend: {
      backgroundImage: {
        'slide-1': "url('../images/slider_2.jpg')",
        'slide-2': "url('../images/slider_1.jpg')",        
        'slide-4': "url('../images/slider-3.jpg')",
        'slide-3': "url('../images/sunrise.avif')",
        'ocean-1': "url('../images/ocean.1.avif')",
        'room-2':"url('../images/bed-2.avif')",
        'room-3':"url('../images/bed-3.avif')",
        'room-4':"url('../images/bed-4.avif')",
        'room-5':"url('../images/bed-5.avif')",

      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary':'#c9ab81',
        'secondary':'#707070',
        'tertiary': '#000',
        'action': '#ccc',
        

        
      },
      keyframes: {
        fadeIn: {
          from:{
            opacity: 0,
           
          },
          to: {
            opacity: 1,
            
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
      },
     
      
    },
  },
  plugins: [],
};


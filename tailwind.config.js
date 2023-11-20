/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens:{
      "vs":"400px",
      "sm":"640px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1028px"

    },
   
    fontFamily:{
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
      back1:"url(/src/assets/img1.jpg)",
      back2:"url(/src/assets/img2.jpg)",
      back3:"url(/src/assets/img3.jpg)",
      back4:"url(/src/assets/img4.jpg)",
      back5:"url(/src/assets/img5.jpg)",
      
        dog0image: "url(/src/back.jpg)",
      }
    },
  },
  plugins: [],
}
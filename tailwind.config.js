/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slide_in:"slide_in 0.5s ease-in-out forwards",
        slide_out:"slide_out 0.5s ease-in-out forwards",
        menu_slide:"menu_slide 0.5s ease-in-out forwards"
      },
      keyframes: {
        slide_in: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }
        },
        menu_slide:{
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0%)" }
        },
        slide_out: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" }
        },
      }
    },
  },
  plugins: [],
}


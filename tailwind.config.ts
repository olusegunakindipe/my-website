/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ["var(--font-marcellus)", "serif"],
        pacifico: ["var(--font-pacifico)", "cursive"],
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInUp: {
          "0%": {
            transform: "translateY(150px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideInMid: {
          "0%": {
            transform: "translateY(-40px) scale(1.5)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0) scale(1)",
            opacity: "1",
          },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-in-right": "slideInRight 0.9s ease-in-out forwards",
        "slide-in-up": "slideInUp 0.6s ease-out forwards",
        "slide-in-mid": "slideInMid 0.6s ease-in-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.9s ease-in-out forwards",
      },
      transitionDelay: {
        "0": "0ms",
        "500": "500ms",
        "1000": "1000ms",
        "1500": "1500ms",
        "2000": "2000ms",
        "2500": "2500ms",
        "3000": "3000ms",
        "3500": "3500ms",
        "4000": "4000ms",
      },
    },
  },
  plugins: [],
};

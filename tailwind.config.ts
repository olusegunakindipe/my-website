module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust to your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "from, to": { "border-color": "transparent" },
          "50%": { "border-color": "black" },
        },
      },
      animation: {
        typing: "typing 3.5s steps(40, end)",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

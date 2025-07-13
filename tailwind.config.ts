module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    ".src/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};

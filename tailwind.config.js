/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2f5d46",
        accent: "#1e4433",
        pine: "#1e3329",
        cream: "#eef3ee",
        cream2: "#e3e9e5",
        ink: "#33403a",
        subink: "#5a675f",
        // Attention colour for time-sensitive notices (pool closing dates,
        // schedule changes). Meets AA contrast on white and on cream.
        alert: "#b3261e",
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-public-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

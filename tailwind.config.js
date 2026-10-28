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
        // Homepage redesign palette (Oct 2026 brief). Used by the homepage,
        // header and footer; inner pages still use the tokens above.
        forest: "#1e3f20",
        forest2: "#2c5530",
        gold: "#d4a373",
        goldlight: "#f0c97f",
        // gold fails contrast as text on light backgrounds (2.3:1); use this
        // for gold-coloured links on white/alabaster (5.6:1).
        golddeep: "#8b5e34",
        alabaster: "#f5f7f2",
        sage: "#eff4ec",
        charcoal: "#1a1a1a",
        muted: "#5b6459",
        line: "#e3e8df",
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-public-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        coal: "#111418",
        iron: "#1C2128",
        rust: "oklch(42.4% 0.199 265.638)",
        rustd: "oklch(28.2% 0.091 267.935)",
        amber: "#E67E22",
        chalk: "oklch(12.9% 0.042 264.695)",
        muted: "#8A9099",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        condensed: ['"Barlow Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

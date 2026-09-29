/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F3EA",
        ink: { DEFAULT: "#26221C", soft: "#6E675C" },
        line: "#E2DACA",
        han: { DEFAULT: "#A62B24", deep: "#7C1F1A", tint: "#FBEFE9", gold: "#C9962E" },
        sapa: { DEFAULT: "#3A7A3E", deep: "#28592C", tint: "#EDF3E8", gold: "#8AA84F" },
        ninh: { DEFAULT: "#2A5C8A", deep: "#1D4165", tint: "#E9F0F7", gold: "#5B8FB3" },
      },
      borderRadius: {
        card: "14px",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
      },
      boxShadow: {
        card: "0 1px 3px rgba(38,34,28,.10), 0 4px 14px rgba(38,34,28,.06)",
      },
      fontFamily: {
        serif: ['"Iowan Old Style"', "Palatino", '"Palatino Linotype"', "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};

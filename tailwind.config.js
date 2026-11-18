const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "selector",
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_projects/*.md",
    "./_pages/*.md",
    "./_pages/*.html",
    "./_layouts/**/*.html",
    "./_posts/**/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Golos Text"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Probe: neutrales Hellgrau (kein Weiß, kein Mantine-Blaugrau) + Filingo dark
        brand: {
          50: "#eeeeef", // page
          100: "#f5f5f5", // cards (leicht heller, weniger Kontrast)
          200: "#d4d4d8", // borders
          300: "#a1a1aa",
          400: "#868e96",
          500: "#495057",
          600: "#343a40",
          700: "#2e2e2e",
          800: "#242424",
          900: "#1f1f1f",
          950: "#242424",
        },
        gray: {
          50: "#eeeeef",
          100: "#f5f5f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#868e96",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
          950: "#141414",
        },
        // Dark-Mode-Flächen ≈ Mantine dark-Skala
        zinc: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#c9c9c9", // dark-0
          400: "#b8b8b8", // dark-1
          500: "#828282", // dark-2
          600: "#424242", // dark-4
          700: "#3b3b3b", // dark-5
          800: "#2e2e2e", // dark-6
          900: "#242424", // dark-7
          950: "#141414", // dark-9
        },
        accent: {
          50: "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
          950: "var(--accent-950)",
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};

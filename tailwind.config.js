module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6', // bright blue
          dark: '#60A5FA', // lighter blue for dark mode
        },
        secondary: {
          light: '#10B981', // emerald green
          dark: '#34D399', // lighter green for dark mode
        },
        background: {
          light: '#F3F4F6', // light gray
          dark: '#1F2937', // dark gray
        },
        surface: {
          light: '#FFFFFF', // white
          dark: '#111827', // very dark gray
        },
        text: {
          light: '#1F2937', // dark gray
          dark: '#F9FAFB', // off-white
        },
        accent: {
          light: '#8B5CF6', // purple
          dark: '#A78BFA', // lighter purple for dark mode
        },
      },
      boxShadow: {
        "custom-light": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "custom-dark": "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)"
      }
    },
  },
  plugins: [],
}
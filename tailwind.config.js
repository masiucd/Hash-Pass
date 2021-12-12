module.exports = {
  mode: "jit",
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        transparent: "var(--color-transparent)",
      },
      height: theme => ({
        "main-height": "min-h-[calc(100vh-12rem)]",
      }),
    },
  },
  variants: {},
  plugins: [],
}
// font-family: 'Barlow', sans-serif;
// font-family: 'Poppins', sans-serif;

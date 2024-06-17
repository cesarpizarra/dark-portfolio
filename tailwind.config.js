/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#040404",
        secondary: "#18d26e",
        shadowDark: "rgba(255, 255, 255, 0.08)",
        boxDark: "rgba(255,255,255,.08)",
        shadowDarkHover: "rgba(248, 163, 163, 0.12)",
        gray: "rgba(255, 255, 255, 0.7)",
        gray2: "rgb(55 65 81)",
        textDark: "#aaaaaa",
      },
      zIndex: {
        999999: "999999",
        99999: "99999",
        9999: "9999",
        999: "999",
        99: "99",
        9: "9",
        1: "1",
      },
    },
  },
  plugins: [],
};

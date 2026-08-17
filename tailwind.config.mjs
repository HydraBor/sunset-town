/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dusk: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        night: {
          900: "#0b1020",
          800: "#11182e",
          700: "#1a2342",
          600: "#243057",
          500: "#33416e",
        },
      },
      fontFamily: {
        pixel: ["'Press Start 2P'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(251, 146, 60, 0.35)",
      },
    },
  },
  plugins: [],
};
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#313131",
        "gray-1": "#333333",
        "gray-2": '#d3d3d3',
        "gray-3": "#fafafa",
        "brown-1": "#d4996c",
        "brown-2": "#e8c0a0",
        "blue": "#243453",
      },
    },
  },
  plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: "#19060f",
        background: "#fdf8fb",
        primary: "#d02f83",
        secondary: "#FFC0CB",
        accent: "#DAA49A"
      },
    },
  },
  plugins: [],
}

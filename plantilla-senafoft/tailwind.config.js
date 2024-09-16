import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "auth-bg": "url('./src/assets/plantilla-bg.jpg')"
      },
      colors: {
        "soft-gray": "#F0F2F5"
      }
    },
  },
  plugins: [],
})
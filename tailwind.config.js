/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF00FF",
          secondary: "#00A200",
          accent: "#008100",
          neutral: "#281b1f",
          "base-100": "#212832",
          info: "#0097d4",
          success: "#9ad000",
          warning: "#a28000",
          error: "#ff2a6e",
        },
      },
    ],
  },
};

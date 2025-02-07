/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 6s infinite ease-in-out",
        "float-slow": "float 8s infinite ease-in-out",
        "float-delayed": "float 7s infinite ease-in-out 1s",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(15px)" },
        },
      },
    },
  },
  plugins: [],
};

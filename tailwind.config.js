/** @type {import('tailwindcss').Config} */

  export default {
      darkMode: "class", // Enables class-based theming
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          elegant: {
            DEFAULT: "#f4f1ea",
            text: "#3c3c3c",
            card: "#e8e4d9",
          },
        },
      },
    },
    plugins: [],
  };

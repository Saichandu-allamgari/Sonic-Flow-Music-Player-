/** @type {import('tailwindcss').Config} */

  export default {

    purge: [
      "./src/components/**/*.{js,jsx}",
      "./public/index.html",
    ],

      darkMode: "class", 
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"],
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

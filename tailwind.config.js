/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        "toggle-background": "var(--toggle-background-color)",
        window: "var(--window-color)",
        header: "var(--header-text-color)",

        "normal-key": {
          background: "var(--normal-key-background-color)",
          shadow: "var(--normal-key-shadow-color)",
          text: "var(--normal-key-text-color)",
          active: "var(--normal-key-active-background-color)",
        },

        "special-key": {
          background: "var(--special-key-background-color)",
          shadow: "var(--special-key-shadow-color)",
          text: "var(--special-key-text-color)",
          active: "var(--special-key-active-background-color)",
        },

        "result-key": {
          background: "var(--result-key-background-color)",
          shadow: "var(--result-key-shadow-color)",
          text: "var(--result-key-text-color)",
          active: "var(--result-key-active-background-color)",
        },
      },
    },
  },
  plugins: [],
};

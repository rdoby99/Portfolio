/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        quaternary: "var(--color-quaternary)",
        text: "var(--color-text)",
        bg: "var(--color-bg)",
      },
      fontFamily: {
        header: "var(--font-heading-family)",
        secHeader: "var(--font-secondary-heading)",
        body: "var(--font-body-family)",
      },
      backgroundImage: {
        waves: "url('/background.png')",
      },
    },
  },
  plugins: [],
};

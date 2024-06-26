/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
    fontFamily: {
      "archivo-black": ["archivo-black", "sans-serif"],
      roboto: ["roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

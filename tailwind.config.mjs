/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0df259',
        'background-light': '#f5f8f6',
        'background-dark': '#102216',
        'accent-blue': '#3b82f6',
        'accent-brown': '#78350f',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

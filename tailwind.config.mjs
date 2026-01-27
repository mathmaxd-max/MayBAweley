/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B2C3E',
          dark: '#1A2332',
        },
        accent: {
          DEFAULT: '#D4AF37',
        },
        neutral: {
          light: '#F5F3F0',
          medium: '#E8E5E0',
          dark: '#8B8680',
        },
        text: {
          DEFAULT: '#2C2C2C',
          light: '#FAF9F7',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Crimson Pro', 'Georgia', 'serif'],
        sans: ['Inter', 'Source Sans Pro', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

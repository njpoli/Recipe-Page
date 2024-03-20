import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        short: { raw: '(min-height: 720px)' },
      },
      boxShadow: {
        full: '15px 5px 30px 10px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'primary-nutmeg': 'hsl(14, 45%, 36%)',
        'primary-dark-raspberry': 'hsl(332, 51%, 32%)',
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-rose-white': 'hsl(330, 100%, 98%)',
        'neutral-eggshell': 'hsl(30, 54%, 90%)',
        'neutral-light-grey': 'hsl(30, 18%, 7%)',
        'neutral-wenge-brown': 'hsl(30, 10%, 34%)',
        'neutral-dark-charcoal': 'hsl(24, 5%, 18%)',
      },
    },
  },
  plugins: [],
};
export default config;

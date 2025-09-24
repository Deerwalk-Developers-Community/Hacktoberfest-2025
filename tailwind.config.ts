import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'navgradient': 'linear-gradient(to right, #202040, #1C1C3D)',
        'background_gradient': 'linear-gradient(0deg, #532874 0%, #131228 45%, #0B0622 100%)'
      },
      fontFamily: {
        'space_grotesk': ['var(--font-space_grotesk)', 'sans-serif'],
        'orbitron': ['var(--font-orbitron)', 'sans-serif'],
        'pixelify_sans': ['var(--font-pixelify_sans)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

export default config
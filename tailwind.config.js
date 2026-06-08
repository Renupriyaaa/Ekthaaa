/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        primary: {
          DEFAULT: '#5B3DF5',
          600: '#6D4AFF',
          700: '#7C5CFF',
          foreground: "var(--primary-foreground)",
        },
        background: '#F8F9FC',
        foreground: '#000000',
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          pink: '#EC4899',
          green: '#22C55E',
          orange: '#F97316',
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '24px',
        btn: '16px',
        input: '18px',
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,.06)',
      }
    },
  },
  plugins: [],
}

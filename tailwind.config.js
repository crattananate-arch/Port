/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        'primary-strong': '#1D4ED8',
        ink: '#11151C',
        'ink-secondary': '#4B5563',
        'ink-tertiary': '#6B7280',
        bg: '#F7F9FC',
        surface: '#FFFFFF',
        'surface-alt': '#EEF2F8',
        border: '#E2E8F0',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

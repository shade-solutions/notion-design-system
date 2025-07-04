/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          // Light theme colors
          'bg-primary': '#ffffff',
          'bg-secondary': '#f7f6f3',
          'bg-tertiary': '#f1f1ef',
          'text-primary': '#37352f',
          'text-secondary': '#6f6e69',
          'text-tertiary': '#9b9a97',
          'border': '#e9e9e7',
          'border-hover': '#d3d1cb',
          
          // Dark theme colors
          'dark-bg-primary': '#191919',
          'dark-bg-secondary': '#2f3437',
          'dark-bg-tertiary': '#373c41',
          'dark-text-primary': '#ffffff',
          'dark-text-secondary': '#9b9998',
          'dark-text-tertiary': '#6f6e69',
          'dark-border': '#373c41',
          'dark-border-hover': '#4a5055',
          
          // Accent colors
          'blue': '#2383e2',
          'blue-light': '#e7f3ff',
          'blue-dark': '#1a6bb8',
          'red': '#e03e3e',
          'red-light': '#ffeaea',
          'red-dark': '#b83232',
          'yellow': '#ffb700',
          'yellow-light': '#fff8e1',
          'yellow-dark': '#cc9200',
          'green': '#0f7b0f',
          'green-light': '#e8f5e8',
          'green-dark': '#0c5e0c',
          'purple': '#9065b0',
          'purple-light': '#f4f0f7',
          'purple-dark': '#6b4884',
          'pink': '#e255a1',
          'pink-light': '#fdf0f8',
          'pink-dark': '#b54081',
          'orange': '#d9730d',
          'orange-light': '#fef2e8',
          'orange-dark': '#ad5a0a',
        },
      },
      fontFamily: {
        'notion': [
          'ui-sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Helvetica',
          '"Apple Color Emoji"',
          'Arial',
          'sans-serif',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
      fontSize: {
        'notion-xs': ['12px', '16px'],
        'notion-sm': ['14px', '20px'],
        'notion-base': ['16px', '24px'],
        'notion-lg': ['18px', '28px'],
        'notion-xl': ['20px', '28px'],
        'notion-2xl': ['24px', '32px'],
        'notion-3xl': ['30px', '36px'],
      },
      spacing: {
        'notion-xs': '4px',
        'notion-sm': '8px',
        'notion-md': '12px',
        'notion-lg': '16px',
        'notion-xl': '24px',
        'notion-2xl': '32px',
        'notion-3xl': '48px',
      },
      borderRadius: {
        'notion': '3px',
        'notion-md': '6px',
        'notion-lg': '8px',
      },
      boxShadow: {
        'notion': '0 1px 3px rgba(15, 15, 15, 0.1)',
        'notion-md': '0 4px 6px rgba(15, 15, 15, 0.1)',
        'notion-lg': '0 10px 15px rgba(15, 15, 15, 0.1)',
        'notion-hover': '0 2px 4px rgba(15, 15, 15, 0.15)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
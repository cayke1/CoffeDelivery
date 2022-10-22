/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['Roboto, sans-serif'],
        header: ['"Baloo 2", cursive']
      },
      gridTemplateColumns: {
        cartForm: '12.5rem, 17.25rem, 3.75rem'
      }
    },
    colors: {
      'yellow-dark': '#c47f17',
      yellow: '#dbac2c',
      'yellow-light': '#f1e9c9',
      'purple-dark': '#4b2995',
      purple: '#8047f8',
      'purple-light': '#ebe5f9',
      base: {
        title: '#272221',
        subtitle: '#403937',
        text: '#574f4d',
        label: '#8d8686',
        hover: '#d7d5d5',
        button: '#e6e5e5',
        input: '#ededed',
        card: '#f3f2f2'
      },
      background: '#Fafafa',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent'
    }
  },
  plugins: []
}

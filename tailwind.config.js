/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Libre': ['Libre Baskerville'],
      'Manrope': ['Manrope'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '0rem',
      },
    },
    letterSpacing: {
      spaceloose1: '0.06em',
      spaceloose: '0.05em',
    },
    extend: {
      borderRadius: {
        'largee': '30px',
      },
      fontSize: {
        'largeFont': '42px',
      },
      lineHeight: {
        'extra-line': '54px',
      },
      colors: {
        'dark' : "#0F001F",
        'dark2' : "#1F1C1B",
        'light' : "#F3F2F3",
        'light2' : "#E0E0E0",
        'light3' : "#EEEEEE",
        'light4' : "#cccccc",
        'secondary' : "#E0C90D",
        'borderlight' : "#E7E6E9",
        'primary' : "#3E3E3E",
        'alphaColor': "rgba(255, 255, 255, 0.5);"
      },
      backgroundImage: {
        'banner': "url('../src/img/banner.png')",
      }
    },
  },
  plugins: [],
}


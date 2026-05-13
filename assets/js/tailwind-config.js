tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5B4636', // Deep Earth Brown
          light: '#7A5E48',
          dark: '#3A2C22',
        },
        secondary: {
          DEFAULT: '#D4A24C', // Amber Gold
          light: '#E6BC73',
          dark: '#B08339',
        },
        dark: {
          bg: '#111111', // Deep charcoal / obsidian
          card: '#1A1A1A',
          text: '#E0E0E0',
        },
        light: {
          bg: '#F9F8F6', // Warm ivory / sandstone
          card: '#FFFFFF',
          text: '#2C2C2C',
        }
      },
      fontFamily: {
        heading: ['"Cinzel"', 'serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'slow-spin': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  }
}

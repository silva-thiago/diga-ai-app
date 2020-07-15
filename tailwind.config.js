module.exports = () => {
  return {
    purge: {},
    theme: {
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      extend: {
        screens: {
          'sm': { 'min': '640px', 'max': '767px' },
          // => @media (min-width: 640px, max-width: 767px) { ... }

          'md': { 'min': '768px', 'max': '1023px' },
          // => @media (min-width: 768px, max-width: 1023px) { ... }

          'lg': { 'min': '1024px', 'max': '1279px' },
          // => @media (min-width: 1024px, max-width: 1079px) { ... }

          'xl': { 'min': '1280px' },
          // => @media (min-width: 1280px) { ... }

          'dark': { 'raw': '(prefers-color-scheme: dark)' },
          // => @media (prefers-color-scheme: dark) { ... }

        }
      }
    },
    variants: {
      appearance: ['responsive'],
    },
    plugins: [],
  }
}

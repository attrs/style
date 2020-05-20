module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      black: '#000',
      white: '#fff',
      darken: '#00000011',
      default: '#fff',
      background: {
        default: '#fff',
        secondary: '#efefef',
        jumbotron: '#ddd',
        modal: '#ddd',
        inverse: '#333'
      },
      text: {
        default: '#333',
        light: '#555',
        lighten: '#777'
      },
      primary: {
        default: '#2196f3',
        light: '#42a5f5',
        lighten: '#90caf9',
        dark: '#1976d2',
        darken: '#0d47a1',
        transparent: '#e3f2fd',
        text: '#1976d2'
      },
      secondary: {
        default: '#f44336',
        light: '#ef5350',
        lighten: '#ef9a9a',
        dark: '#d32f2f',
        darken: '#b71c1c',
        transparent: '#ffebee',
        text: '#d32f2f'
      },
      success: {
        default: '#4caf50',
        light: '#66bb6a',
        lighten: '#a5d6a7',
        dark: '#388e3c',
        darken: '#1b5e20',
        transparent: '#e8f5e9',
        text: '#388e3c'
      },
      info: {
        default: '#03a9f4',
        light: '#29b6f6',
        lighten: '#81d4fa',
        dark: '#0288d1',
        darken: '#01579b',
        transparent: '#e1f5fe',
        text: '#0288d1'
      },
      warning: {
        default: '#ff9800',
        light: '#ffa726',
        lighten: '#ffcc80',
        dark: '#f57c00',
        darken: '#e65100',
        transparent: '#fff3e0',
        text: '#f57c00'
      },
      danger: {
        default: '#f44336',
        light: '#ef5350',
        lighten: '#ef9a9a',
        dark: '#d32f2f',
        darken: '#b71c1c',
        transparent: '#ffebee',
        text: '#d32f2f'
      },
      system: {
        default: '#673ab7',
        light: '#7e57c2',
        lighten: '#b39ddb',
        dark: '#512da8',
        darken: '#311b92',
        transparent: '#ede7f6',
        text: '#9f7be1'
      },
      border: {
        default: '#00000022',
        light: '#eaeaeaaa',
        lighten: '#f9f9f9'
      },
      gray: {
        default: '#555',
        100: '#efefef',
        200: '#ccc',
        300: '#aaa',
        400: '#7a7a7a',
        500: '#555',
        600: '#444',
        700: '#333',
        800: '#222',
        900: '#111'
      }
    },
    fontFamily: {
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
      mono: 'var(--font-mono)',
      numeric: 'var(--font-numeric)'
    },
    boxShadow: (theme) => ({
      'xs': '0 0 0 1px rgba(0, 0, 0, 0.05)',
      'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      'default': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'outline': '0 0 0 3px rgba(66, 153, 225, 0.5)',
      'outline-none': 'none',
      'outline-primary': '0 0 0 3px ' + theme('colors.primary.lighten'),
      'outline-secondary': '0 0 0 3px ' + theme('colors.secondary.lighten'),
      'outline-success': '0 0 0 3px ' + theme('colors.success.lighten'),
      'outline-info': '0 0 0 3px ' + theme('colors.info.lighten'),
      'outline-warning': '0 0 0 3px ' + theme('colors.warning.lighten'),
      'outline-danger': '0 0 0 3px ' + theme('colors.danger.lighten'),
      'outline-system': '0 0 0 3px ' + theme('colors.system.lighten'),
      'outline-gray': '0 0 0 3px rgba(127, 127, 127, 0.5)',
      'none': 'none'
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.background.default', 'currentColor')
    }),
    borderColor: (theme) => ({
      ...theme('colors.border'),
      ...theme('colors'),
      default: theme('colors.border.default', 'currentColor')
    }),
    textColor: (theme) => ({
      ...Object.keys(theme('colors')).reduce((o, key) => {
        const color = theme('colors.' + key);
        if (~['text', 'gray'].indexOf(key) || typeof color === 'string') o[key] = color;
        else if (color.text) o[key] = color.text;
        return o;
      }, {}),
      default: theme('colors.text.default', 'currentColor')
    }),
    maxHeight: {
      'none': 'none',
      '50': '50px',
      '100': '100px',
      '150': '150px',
      '200': '200px',
      '250': '250px',
      '300': '300px',
      'full': '100%',
      'screen': '100vh'
    },
    maxWidth: (theme, { breakpoints }) => ({
      'none': 'none',
      '50': '50px',
      '100': '100px',
      '150': '150px',
      '200': '200px',
      '250': '250px',
      '300': '300px',
      '2xs': '10rem',
      'xs': '20rem',
      'sm': '24rem',
      'md': '28rem',
      'lg': '32rem',
      'xl': '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      'full': '100%',
      ...breakpoints(theme('screens'))
    }),
    minWidth: (theme) => theme('maxWidth')
  }
};

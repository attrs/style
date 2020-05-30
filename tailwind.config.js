module.exports = {
  important: true,
  purge: false,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    colors: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      black: 'var(--color-black)',
      white: 'var(--color-white)',
      shadow: 'var(--color-shadow)',
      bg: {
        default: 'var(--color-bg-base)',
        panel: 'var(--color-bg-panel)',
        input: 'var(--color-bg-input)',
        active: 'var(--color-bg-active)'
      },
      mask: {
        default: 'var(--color-bg-mask)',
        dark: 'var(--color-bg-mask)'
      },
      text: {
        default: 'var(--color-text)',
        muted: 'var(--color-muted)',
        active: 'var(--color-active)'
      },
      border: {
        default: 'var(--color-border)',
        inverse: 'var(--color-border-inverse)',
      },
      icon: {
        default: 'var(--color-icon)',
        active: 'var(--color-icon-active)'
      },
      badge: {
        default: 'var(--color-badge)',
        text: 'var(--color-badge-text)'
      },
      primary: {
        default: 'var(--color-primary)',
        light: 'var(--color-primary-light)',
        lighten: 'var(--color-primary-lighten)',
        dark: 'var(--color-primary-dark)',
        darken: 'var(--color-primary-darken)',
        transparent: 'var(--color-primary-transparent)',
        text: 'var(--color-primary-text)'
      },
      secondary: {
        default: 'var(--color-secondary)',
        light: 'var(--color-secondary-light)',
        lighten: 'var(--color-secondary-lighten)',
        dark: 'var(--color-secondary-dark)',
        darken: 'var(--color-secondary-darken)',
        transparent: 'var(--color-secondary-transparent)',
        text: 'var(--color-secondary-text)'
      },
      success: {
        default: 'var(--color-success)',
        light: 'var(--color-success-light)',
        lighten: 'var(--color-success-lighten)',
        dark: 'var(--color-success-dark)',
        darken: 'var(--color-success-darken)',
        transparent: 'var(--color-success-transparent)',
        text: 'var(--color-success-text)'
      },
      info: {
        default: 'var(--color-info)',
        light: 'var(--color-info-light)',
        lighten: 'var(--color-info-lighten)',
        dark: 'var(--color-info-dark)',
        darken: 'var(--color-info-darken)',
        transparent: 'var(--color-info-transparent)',
        text: 'var(--color-info-text)'
      },
      warning: {
        default: 'var(--color-warning)',
        light: 'var(--color-warning-light)',
        lighten: 'var(--color-warning-lighten)',
        dark: 'var(--color-warning-dark)',
        darken: 'var(--color-warning-darken)',
        transparent: 'var(--color-warning-transparent)',
        text: 'var(--color-warning-text)'
      },
      danger: {
        default: 'var(--color-danger)',
        light: 'var(--color-danger-light)',
        lighten: 'var(--color-danger-lighten)',
        dark: 'var(--color-danger-dark)',
        darken: 'var(--color-danger-darken)',
        transparent: 'var(--color-danger-transparent)',
        text: 'var(--color-danger-text)'
      },
      system: {
        default: 'var(--color-system)',
        light: 'var(--color-system-light)',
        lighten: 'var(--color-system-lighten)',
        dark: 'var(--color-system-dark)',
        darken: 'var(--color-system-darken)',
        transparent: 'var(--color-system-transparent)',
        text: 'var(--color-system-text)'
      },
      gray: {
        default: 'var(--color-gray)',
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)'
      }
    },
    fontFamily: {
      sans: 'var(--font-family-sans)',
      serif: 'var(--font-family-serif)',
      mono: 'var(--font-family-mono)',
      numeric: 'var(--font-family-numeric)'
    },
    boxShadow: (theme) => ({
      'xs': '0 0 0 1px' + theme('colors.shadow'),
      'sm': '0 1px 2px 0' + theme('colors.shadow'),
      'default': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 ' + theme('colors.shadow'),
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px ' + theme('colors.shadow'),
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px ' + theme('colors.shadow'),
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px ' + theme('colors.shadow'),
      '2xl': '0 25px 50px -12px' + theme('colors.shadow'),
      'inner': 'inset 0 2px 4px 0' + theme('colors.shadow'),
      'outline': '0 0 0 3px ' + theme('colors.primary.lighten'),
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
      ...theme('colors.bg'),
      default: theme('colors.bg.default', 'currentColor')
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
    fontSize: {
      xs: 'var(--font-size-xs)',
      sm: 'var(--font-size-sm)',
      base: 'var(--font-size-base)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '3xl': 'var(--font-size-3xl)',
      '4xl': 'var(--font-size-4xl)',
      '5xl': 'var(--font-size-5xl)',
      '6xl': 'var(--font-size-6xl)',
    },
    minWidth: (theme) => theme('maxWidth')
  }
};

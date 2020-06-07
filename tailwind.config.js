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
      outline: 'var(--color-outline)',
      bg: {
        default: 'var(--color-bg-base)',
        base: 'var(--color-bg-base)',
        panel: 'var(--color-bg-panel)',
        inverse: 'var(--color-bg-inverse)',
        input: 'var(--color-bg-input)',
        active: 'var(--color-bg-active)',
        highlight: 'var(--color-bg-highlight)'
      },
      mask: {
        default: 'var(--color-bg-mask)',
        dark: 'var(--color-bg-mask)'
      },
      text: {
        default: 'var(--color-text)',
        light: 'var(--color-text-light)',
        muted: 'var(--color-text-muted)',
        active: 'var(--color-text-active)',
        highlight: 'var(--color-text-highlight)'
      },
      border: {
        default: 'var(--color-border)',
        outer: 'var(--color-border-outer)',
        inverse: 'var(--color-border-inverse)'
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
        text: 'var(--color-primary-text)',
        outline: 'var(--color-primary-outline)'
      },
      secondary: {
        default: 'var(--color-secondary)',
        light: 'var(--color-secondary-light)',
        lighten: 'var(--color-secondary-lighten)',
        dark: 'var(--color-secondary-dark)',
        darken: 'var(--color-secondary-darken)',
        transparent: 'var(--color-secondary-transparent)',
        text: 'var(--color-secondary-text)',
        outline: 'var(--color-secondary-outline)'
      },
      success: {
        default: 'var(--color-success)',
        light: 'var(--color-success-light)',
        lighten: 'var(--color-success-lighten)',
        dark: 'var(--color-success-dark)',
        darken: 'var(--color-success-darken)',
        transparent: 'var(--color-success-transparent)',
        text: 'var(--color-success-text)',
        outline: 'var(--color-success-outline)'
      },
      info: {
        default: 'var(--color-info)',
        light: 'var(--color-info-light)',
        lighten: 'var(--color-info-lighten)',
        dark: 'var(--color-info-dark)',
        darken: 'var(--color-info-darken)',
        transparent: 'var(--color-info-transparent)',
        text: 'var(--color-info-text)',
        outline: 'var(--color-info-outline)'
      },
      warning: {
        default: 'var(--color-warning)',
        light: 'var(--color-warning-light)',
        lighten: 'var(--color-warning-lighten)',
        dark: 'var(--color-warning-dark)',
        darken: 'var(--color-warning-darken)',
        transparent: 'var(--color-warning-transparent)',
        text: 'var(--color-warning-text)',
        outline: 'var(--color-warning-outline)'
      },
      danger: {
        default: 'var(--color-danger)',
        light: 'var(--color-danger-light)',
        lighten: 'var(--color-danger-lighten)',
        dark: 'var(--color-danger-dark)',
        darken: 'var(--color-danger-darken)',
        transparent: 'var(--color-danger-transparent)',
        text: 'var(--color-danger-text)',
        outline: 'var(--color-danger-outline)'
      },
      system: {
        default: 'var(--color-system)',
        light: 'var(--color-system-light)',
        lighten: 'var(--color-system-lighten)',
        dark: 'var(--color-system-dark)',
        darken: 'var(--color-system-darken)',
        transparent: 'var(--color-system-transparent)',
        text: 'var(--color-system-text)',
        outline: 'var(--color-system-outline)'
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
        900: 'var(--color-gray-900)',
        outline: 'var(--color-gray-outline)'
      }
    },
    boxShadow: (theme) => ({
      'xs': 'var(--shadow-xs)',
      'sm': 'var(--shadow-sm)',
      'default': 'var(--shadow)',
      'md': 'var(--shadow-md)',
      'lg': 'var(--shadow-lg)',
      'xl': 'var(--shadow-xl)',
      '2xl': 'var(--shadow-2xl)',
      'inner': 'var(--shadow-xs)',
      'outline': 'var(--outline)',
      'outline-none': 'none',
      'outline-primary': 'var(--outline-primary)',
      'outline-secondary': 'var(--outline-secondary)',
      'outline-success': 'var(--outline-success)',
      'outline-info': 'var(--outline-info)',
      'outline-warning': 'var(--outline-warning)',
      'outline-danger': 'var(--outline-danger)',
      'outline-system': 'var(--outline-system)',
      'outline-gray': 'var(--outline-gray)',
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
      ...theme('colors.text'),
      default: theme('colors.text.default', 'currentColor')
    }),
    borderRadius: {
      none: '0',
      sm: 'var(--radius-sm)',
      default: 'var(--radius)',
      md: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      full: 'var(--radius-full)'
    },
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
    minWidth: (theme) => theme('maxWidth'),
    fontSize: {
      'xs': 'var(--font-size-xs)',
      'sm': 'var(--font-size-sm)',
      'base': 'var(--font-size-base)',
      'lg': 'var(--font-size-lg)',
      'xl': 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '3xl': 'var(--font-size-3xl)',
      '4xl': 'var(--font-size-4xl)',
      '5xl': 'var(--font-size-5xl)',
      '6xl': 'var(--font-size-6xl)'
    },
    fontFamily: {
      sans: 'var(--font-family-sans)',
      serif: 'var(--font-family-serif)',
      mono: 'var(--font-family-mono)',
      numeric: 'var(--font-family-numeric)'
    },
    spacing: {
      'px': '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      'xs': 'var(--spacing-xs)',
      'sm': 'var(--spacing-sm)',
      'md': 'var(--spacing)',
      'lg': 'var(--spacing-lg)',
      'xl': 'var(--spacing-xl)'
    }
  }
};

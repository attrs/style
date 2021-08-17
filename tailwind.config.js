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
    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '10': '.1',
      '20': '.2',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '80': '.8',
      '90': '.9',
      '100': '1',
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
        panel: {
          default: 'var(--color-bg-panel)',
          light: 'var(--color-bg-panel-light)'
        },
        inverse: 'var(--color-bg-inverse)',
        input: 'var(--color-bg-input)',
        active: 'var(--color-bg-active)',
        highlight: 'var(--color-bg-highlight)',
        hover: 'var(--color-bg-hover)',
        border: 'var(--color-border)',
        text: 'var(--color-text)',
        muted: 'var(--color-text-muted)'
      },
      mask: {
        default: 'var(--color-bg-mask)',
        light: 'var(--color-bg-mask-light)',
        dark: 'var(--color-bg-mask-dark)'
      },
      text: {
        default: 'var(--color-text)',
        light: 'var(--color-text-light)',
        input: 'var(--color-text-input)',
        inverse: 'var(--color-text-inverse)',
        placeholder: 'var(--color-text-placeholder)',
        muted: 'var(--color-text-muted)',
        active: 'var(--color-text-active)',
        highlight: 'var(--color-text-highlight)',
        link: 'var(--color-text-link)',
        blackwhite: 'var(--color-text-blackwhite)'
      },
      border: {
        default: 'var(--color-border)',
        normal: 'var(--color-border)',
        light: 'var(--color-border-light)',
        outer: 'var(--color-border-outer)',
        control: 'var(--color-border-control)',
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
      black: {
        default: 'var(--color-black)',
        active: 'var(--color-black-active)',
        bg: 'var(--color-black-bg)',
        text: 'var(--color-black-text)',
        border: 'var(--color-black-border)',
        outline: 'var(--color-black-outline)'
      },
      primary: {
        default: 'var(--color-primary)',
        active: 'var(--color-primary-active)',
        bg: 'var(--color-primary-bg)',
        text: 'var(--color-primary-text)',
        border: 'var(--color-primary-border)',
        outline: 'var(--color-primary-outline)'
      },
      secondary: {
        default: 'var(--color-secondary)',
        active: 'var(--color-secondary-active)',
        bg: 'var(--color-secondary-bg)',
        text: 'var(--color-secondary-text)',
        border: 'var(--color-secondary-border)',
        outline: 'var(--color-secondary-outline)'
      },
      success: {
        default: 'var(--color-success)',
        active: 'var(--color-success-active)',
        bg: 'var(--color-success-bg)',
        text: 'var(--color-success-text)',
        border: 'var(--color-success-border)',
        outline: 'var(--color-success-outline)'
      },
      info: {
        default: 'var(--color-info)',
        active: 'var(--color-info-active)',
        bg: 'var(--color-info-bg)',
        text: 'var(--color-info-text)',
        border: 'var(--color-info-border)',
        outline: 'var(--color-info-outline)'
      },
      warning: {
        default: 'var(--color-warning)',
        active: 'var(--color-warning-active)',
        bg: 'var(--color-warning-bg)',
        text: 'var(--color-warning-text)',
        border: 'var(--color-warning-border)',
        outline: 'var(--color-warning-outline)'
      },
      danger: {
        default: 'var(--color-danger)',
        active: 'var(--color-danger-active)',
        bg: 'var(--color-danger-bg)',
        text: 'var(--color-danger-text)',
        border: 'var(--color-danger-border)',
        outline: 'var(--color-danger-outline)'
      },
      system: {
        default: 'var(--color-system)',
        active: 'var(--color-system-active)',
        bg: 'var(--color-system-bg)',
        text: 'var(--color-system-text)',
        border: 'var(--color-system-border)',
        outline: 'var(--color-system-outline)'
      },
      gray: {
        default: 'var(--color-gray)',
        active: 'var(--color-gray-active)',
        bg: 'var(--color-gray-bg)',
        text: 'var(--color-gray-text)',
        border: 'var(--color-gray-border)',
        outline: 'var(--color-gray-outline)',
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
    extend: {
      boxShadow: (theme) => ({
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'default': 'var(--shadow)',
        'md': 'var(--shadow)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        'inset': 'var(--shadow-inset)',
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
          else if (color.default) o[key] = color.default;
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
        xl: 'var(--radius-xl)',
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
        '350': '350px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        '1000': '1000px',
        'full': '100%',
        'screen': '100vh'
      },
      minHeight: {
        'none': 'none',
        '50': '50px',
        '100': '100px',
        '150': '150px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        '1000': '1000px',
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
        '350': '350px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '550': '550px',
        '600': '600px',
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
        '10vw': '10vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
        'full': '100%',
        'screen': '100vw',
        ...breakpoints(theme('screens'))
      }),
      width: (theme) => theme('maxWidth'),
      minWidth: (theme) => theme('maxWidth'),
      fontSize: {
        '3xs': 'var(--font-size-3xs)',
        '2xs': 'var(--font-size-2xs)',
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'md': 'var(--font-size-md)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
        '7xl': 'var(--font-size-7xl)',
        '8xl': 'var(--font-size-8xl)'
      },
      fontFamily: {
        primary: 'var(--font-family-primary)',
        secondary: 'var(--font-family-secondary)',
        sans: 'var(--font-family-sans)',
        serif: 'var(--font-family-serif)',
        mono: 'var(--font-family-mono)',
        numeric: 'var(--font-family-numeric)'
      },
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem'
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
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
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
        'pg': 'var(--spacing-page)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['last'],
    }
  }
};

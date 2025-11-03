/**
 * Design Tokens Library for BAM
 *
 * This file contains all the design tokens used throughout the application
 * to ensure consistency in styling and theming.
 */
// Border Radius
export const radius = {
  none: '0',
  xs: '0.125rem',
  // 2px
  sm: '0.25rem',
  // 4px
  md: '0.375rem',
  // 6px
  lg: '0.5rem',
  // 8px
  xl: '0.75rem',
  // 12px
  '2xl': '1rem',
  // 16px
  '3xl': '1.5rem',
  // 24px
  full: '9999px' // Fully rounded (circles)
};
// Shadows
export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
};
// Effects and Transitions
export const effects = {
  transition: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    medium: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)'
  },
  animation: {
    spin: 'spin 1s linear infinite',
    ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    bounce: 'bounce 1s infinite'
  },
  keyframes: {
    spin: {
      from: {
        transform: 'rotate(0deg)'
      },
      to: {
        transform: 'rotate(360deg)'
      }
    },
    ping: {
      '0%': {
        transform: 'scale(1)',
        opacity: '1'
      },
      '75%, 100%': {
        transform: 'scale(2)',
        opacity: '0'
      }
    },
    pulse: {
      '0%, 100%': {
        opacity: '1'
      },
      '50%': {
        opacity: '.5'
      }
    },
    bounce: {
      '0%, 100%': {
        transform: 'translateY(-25%)',
        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
      },
      '50%': {
        transform: 'translateY(0)',
        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
      }
    }
  }
};
// Color Palette
export const colors = {
  // Primary Colors
  primary: {
    50: '#eef2ff',
    // Lightest
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    // Base
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    // Darkest
    950: '#1e1b4b'
  },
  // Secondary Colors
  secondary: {
    50: '#f0f9ff',
    // Lightest
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    // Base
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    // Darkest
    950: '#082f49'
  },
  // Semantic Colors
  semantic: {
    // Success
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      // Base
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16'
    },
    // Error
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      // Base
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a'
    },
    // Warning
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      // Base
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03'
    },
    // Info
    info: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      // Base
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'
    }
  },
  // Neutral Colors
  neutral: {
    50: '#f9fafb',
    // Lightest
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    // Base
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    // Darkest
    950: '#030712'
  },
  // State Colors
  state: {
    idle: '#9ca3af',
    // Gray-400
    hover: '#6366f1',
    // Primary-500
    active: '#4f46e5',
    // Primary-600
    focus: '#818cf8',
    // Primary-400
    disabled: '#e5e7eb' // Gray-200
  },
  // Common Colors
  common: {
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent'
  },
  // Special Brand Colors for BAM
  brand: {
    main: '#4f46e5',
    // Primary indigo
    secondary: '#0ea5e9',
    // Secondary blue
    accent: '#f59e0b' // Amber accent
  }
};
// Typography
export const typography = {
  fontFamily: {
    sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
  fontSize: {
    xs: '0.75rem',
    // 12px
    sm: '0.875rem',
    // 14px
    base: '1rem',
    // 16px
    lg: '1.125rem',
    // 18px
    xl: '1.25rem',
    // 20px
    '2xl': '1.5rem',
    // 24px
    '3xl': '1.875rem',
    // 30px
    '4xl': '2.25rem',
    // 36px
    '5xl': '3rem',
    // 48px
    '6xl': '3.75rem',
    // 60px
    '7xl': '4.5rem',
    // 72px
    '8xl': '6rem',
    // 96px
    '9xl': '8rem' // 128px
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2'
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  }
};
// Spacing
export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',
  // 2px
  1: '0.25rem',
  // 4px
  1.5: '0.375rem',
  // 6px
  2: '0.5rem',
  // 8px
  2.5: '0.625rem',
  // 10px
  3: '0.75rem',
  // 12px
  3.5: '0.875rem',
  // 14px
  4: '1rem',
  // 16px
  5: '1.25rem',
  // 20px
  6: '1.5rem',
  // 24px
  7: '1.75rem',
  // 28px
  8: '2rem',
  // 32px
  9: '2.25rem',
  // 36px
  10: '2.5rem',
  // 40px
  11: '2.75rem',
  // 44px
  12: '3rem',
  // 48px
  14: '3.5rem',
  // 56px
  16: '4rem',
  // 64px
  20: '5rem',
  // 80px
  24: '6rem',
  // 96px
  28: '7rem',
  // 112px
  32: '8rem',
  // 128px
  36: '9rem',
  // 144px
  40: '10rem',
  // 160px
  44: '11rem',
  // 176px
  48: '12rem',
  // 192px
  52: '13rem',
  // 208px
  56: '14rem',
  // 224px
  60: '15rem',
  // 240px
  64: '16rem',
  // 256px
  72: '18rem',
  // 288px
  80: '20rem',
  // 320px
  96: '24rem' // 384px
};
// Z-index
export const zIndex = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  auto: 'auto',
  dropdown: '1000',
  sticky: '1020',
  fixed: '1030',
  modalBackdrop: '1040',
  modal: '1050',
  popover: '1060',
  tooltip: '1070'
};
// Breakpoints
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};
// Export all tokens as a single object
export const tokens = {
  radius,
  shadows,
  effects,
  colors,
  typography,
  spacing,
  zIndex,
  breakpoints
};
export default tokens;
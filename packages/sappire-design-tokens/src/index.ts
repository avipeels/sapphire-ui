// Color tokens
export const colors = {
  // Primary colors
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  
  // Secondary colors
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  
  // Semantic colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  
  info: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  
  // Neutral colors
  neutral: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
} as const;

// Typography tokens
export const typography = {
  // Font families
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
    serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', 'DejaVu Sans Mono', 'monospace'],
  },
  
  // Font sizes
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
    '8xl': '6rem',    // 96px
    '9xl': '8rem',    // 128px
  },
  
  // Font weights
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  
  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// Font sizes (simplified)
export const fontSizes = {
  xs: '0.75rem',   // 12px
  sm: '0.875rem',  // 14px
  base: '1rem',    // 16px
  lg: '1.125rem',  // 18px
  xl: '1.25rem',   // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',   // 48px
  '6xl': '3.75rem', // 60px
} as const;

// Font weights (simplified)
export const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
} as const;

// Line heights (simplified)
export const lineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const;

// Spacing tokens
export const spacing = {
  // Spacing scale (based on 4px base unit)
  0: '0',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
} as const;

// Spacing patterns
export const spacingPatterns = {
  // Component spacing
  component: {
    xs: spacing[1],    // 4px
    sm: spacing[2],    // 8px
    md: spacing[4],    // 16px
    lg: spacing[6],    // 24px
    xl: spacing[8],    // 32px
    '2xl': spacing[12], // 48px
  },
  
  // Layout spacing
  layout: {
    xs: spacing[4],    // 16px
    sm: spacing[6],    // 24px
    md: spacing[8],    // 32px
    lg: spacing[12],   // 48px
    xl: spacing[16],   // 64px
    '2xl': spacing[24], // 96px
    '3xl': spacing[32], // 128px
  },
  
  // Section spacing
  section: {
    xs: spacing[12],   // 48px
    sm: spacing[16],   // 64px
    md: spacing[20],   // 80px
    lg: spacing[24],   // 96px
    xl: spacing[32],   // 128px
    '2xl': spacing[40], // 160px
    '3xl': spacing[48], // 192px
  },
} as const;

// Breakpoint tokens
export const breakpoints = {
  // Device widths
  desktop: '1440px',
  tablet: '768px',
  mobile: '375px',

  // Container max widths
  container: {
    desktop: '1280px',
    tablet: '100%',
    mobile: '100%',
  },

  // Side padding
  sidePadding: {
    desktop: '32px',
    tablet: '32px',
    mobile: '16px',
  },

  // Columns
  columns: {
    desktop: 12,
    tablet: 6,
    mobile: 4,
  },

  // Column gap
  columnGap: {
    desktop: '32px',
    tablet: '32px',
    mobile: '16px',
  },
} as const;

// Text colors
export const textColors = {
  primary: '#171717',
  primaryHover: '#0a0a0a',
  primaryInvert: '#fff',
  secondary: '#525252',
  tertiary: '#737373',
  brand: '#4338ca',
  disabled: '#a3a3a3',
  error: '#dc2626',
  errorEmphasize: '#991b1b',
  success: '#15803d',
  warning: '#a16207',
} as const;

// Background colors
export const backgroundColors = {
  primary: '#fff',
  primaryInverted: '#0a0a0a',
  primaryHover: '#fafafa',
  secondary: '#e5e7eb',
  secondaryHover: '#d1d5db',
  tertiary: '#fafafa',
  disabled: '#f5f5f5',
  disabledEmphasize: '#f3f4f6',
  brandPrimary: '#4338ca',
  brandPrimaryEmphasize: '#3730a3',
  error: '#dc2626',
  errorEmphasize: '#b91c1c',
  errorSubtle: '#fef2f2',
  successSubtle: '#f0fdf4',
  brandSubtle: '#eef2ff',
  neutralSubtle: '#f9fafb',
  warningSubtle: '#fffbeb',
} as const;

// Line colors
export const lineColors = {
  primary: '#e5e5e5',
  secondary: '#9ca3af',
  success: '#bbf7d0',
  brandSolid: '#4f46e5',
  brandSubtle: '#c7d2fe',
  errorSubtle: '#fecaca',
  warningSubtle: '#fde68a',
} as const;

// Icon colors
export const iconColors = {
  emphasize: '#404040',
  primary: '#a3a3a3',
  primaryHover: '#737373',
  brand: '#6366f1',
  brandBackground: '#eef2ff',
  success: '#15803d',
  error: '#dc2626',
  warning: '#facc15',
} as const;

// Input/Form/Textarea colors
export const inputFormTextareaColors = {
  textTitle: '#404040',
  textPlaceholder: '#737373',
  textHint: '#737373',
  textFilled: '#171717',
  textDisabled: '#a3a3a3',
  textError: '#dc2626',
  background: '#fafafa',
  border: '#e5e5e5',
} as const;

// Shadow tokens
export const shadows = {
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  base: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  md: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  lg: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  xl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  '2xl': '0 50px 100px -20px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// Border radius tokens
export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// Animation tokens
export const animations = {
  // Durations
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  
  // Easing functions
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Type exports
export type ColorToken = typeof colors;
export type TypographyToken = typeof typography;
export type FontSizesToken = typeof fontSizes;
export type FontWeightsToken = typeof fontWeights;
export type LineHeightsToken = typeof lineHeights;
export type SpacingToken = typeof spacing;
export type SpacingPatternsToken = typeof spacingPatterns;
export type BreakpointToken = typeof breakpoints;
export type TextColorsToken = typeof textColors;
export type BackgroundColorsToken = typeof backgroundColors;
export type LineColorsToken = typeof lineColors;
export type IconColorsToken = typeof iconColors;
export type InputFormTextareaColorsToken = typeof inputFormTextareaColors;
export type ShadowsToken = typeof shadows;
export type BorderRadiusToken = typeof borderRadius;
export type AnimationToken = typeof animations;

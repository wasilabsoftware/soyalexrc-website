/**
 * Design System Configuration
 * Generated from Pencil.dev design system
 * Alex Rodriguez Portfolio
 *
 * This file provides TypeScript access to design tokens
 * for use in components and dynamic styling.
 */

// ============================================
// COLORS
// ============================================

export const colors = {
  // Background Colors
  bg: {
    primary: '#0A0F1C',
    secondary: '#0F172A',
    surface: '#1E293B',
  },

  // Accent & Brand Colors
  accent: {
    primary: '#22D3EE',   // Cyan
    success: '#22C55E',   // Green
    warning: '#FBBF24',   // Amber
    error: '#EF4444',     // Red
  },

  // Text Colors
  text: {
    primary: '#FFFFFF',
    secondary: '#94A3B8',
    muted: '#64748B',
    disabled: '#475569',
  },

  // Border Colors
  border: {
    primary: '#22D3EE',
    subtle: '#475569',
    dark: '#1E293B',
  },
} as const;

// ============================================
// TYPOGRAPHY
// ============================================

export const typography = {
  // Font Families
  fonts: {
    sans: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace",
  },

  // Font Sizes (in rem)
  sizes: {
    display: '4rem',      // 64px - Display / Hero Title
    h1: '3rem',           // 48px - Section Heading
    h2: '2rem',           // 32px - Subsection Title
    h3: '1.75rem',        // 28px - Card / Role Title
    lg: '1.125rem',       // 18px - Body Text Large / Subtitle
    base: '1rem',         // 16px - Body Text / Paragraph
    sm: '0.875rem',       // 14px - Navigation / Button / Code
    xs: '0.75rem',        // 12px - Label / Caption / Tags
    xxs: '0.6875rem',     // 11px - Mobile small text / Fine print
  },

  // Font Weights
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line Heights
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.6,
    loose: 1.8,
  },

  // Letter Spacing
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.125em', // 2px at 16px base
  },
} as const;

// Type Scale with full definitions
export const typeScale = {
  display: {
    size: '4rem',
    weight: 700,
    family: 'sans',
    lineHeight: 1.25,
    usage: 'Display / Hero Title',
  },
  h1: {
    size: '3rem',
    weight: 700,
    family: 'sans',
    lineHeight: 1.25,
    usage: 'Section Heading',
  },
  h2: {
    size: '2rem',
    weight: 700,
    family: 'sans',
    lineHeight: 1.25,
    usage: 'Subsection Title',
  },
  h3: {
    size: '1.75rem',
    weight: 600,
    family: 'mono',
    lineHeight: 1.25,
    color: colors.accent.primary,
    usage: 'Card / Role Title',
  },
  bodyLg: {
    size: '1.125rem',
    weight: 400,
    family: 'sans',
    lineHeight: 1.6,
    color: colors.text.secondary,
    usage: 'Body Text Large / Subtitle',
  },
  body: {
    size: '1rem',
    weight: 400,
    family: 'sans',
    lineHeight: 1.5,
    color: colors.text.secondary,
    usage: 'Body Text / Paragraph',
  },
  nav: {
    size: '0.875rem',
    weight: 500,
    family: 'mono',
    lineHeight: 1.5,
    usage: 'Navigation / Button / Code',
  },
  label: {
    size: '0.75rem',
    weight: 600,
    family: 'mono',
    lineHeight: 1.5,
    letterSpacing: '2px',
    color: colors.accent.primary,
    usage: 'Label / Caption / Tags',
  },
  caption: {
    size: '0.6875rem',
    weight: 400,
    family: 'mono',
    lineHeight: 1.5,
    color: colors.text.muted,
    usage: 'Mobile small text / Fine print',
  },
} as const;

// ============================================
// SPACING
// ============================================

export const spacing = {
  // Base scale (in rem)
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
} as const;

// Semantic spacing
export const padding = {
  sm: spacing[3],   // 12px
  md: spacing[4],   // 16px
  lg: spacing[6],   // 24px
  xl: spacing[8],   // 32px
} as const;

export const gap = {
  xs: spacing[1],   // 4px
  sm: spacing[2],   // 8px
  md: spacing[4],   // 16px
  lg: spacing[6],   // 24px
  xl: spacing[8],   // 32px
} as const;

// ============================================
// BORDER RADIUS
// ============================================

export const radius = {
  sm: '0.25rem',    // 4px - Subtle
  md: '0.375rem',   // 6px - Buttons
  lg: '0.5rem',     // 8px - Inputs
  xl: '0.75rem',    // 12px - Cards
  '2xl': '1rem',    // 16px - Panels
  full: '9999px',   // Full - Pills/Tags
} as const;

// Semantic radius
export const radiusUsage = {
  subtle: radius.sm,
  button: radius.md,
  input: radius.lg,
  card: radius.xl,
  panel: radius['2xl'],
  pill: radius.full,
} as const;

// ============================================
// BORDERS
// ============================================

export const borders = {
  width: {
    sm: '1px',
    md: '2px',
  },
  styles: {
    primaryButton: `1px solid ${colors.border.primary}`,
    outlinedButton: `2px solid ${colors.border.primary}`,
    subtle: `1px solid ${colors.border.subtle}`,
    divider: `1px solid ${colors.border.dark}`,
  },
} as const;

// ============================================
// EFFECTS
// ============================================

export const effects = {
  glow: {
    primary: '0 0 20px rgba(34, 211, 238, 0.3)',
    primarySm: '0 0 10px rgba(34, 211, 238, 0.2)',
  },
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
  },
} as const;

// ============================================
// TRANSITIONS
// ============================================

export const transitions = {
  fast: '150ms ease',
  base: '200ms ease',
  slow: '300ms ease',
} as const;

// ============================================
// Z-INDEX
// ============================================

export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
} as const;

// ============================================
// COMPONENT TOKENS
// ============================================

export const components = {
  button: {
    primary: {
      bg: colors.accent.primary,
      text: colors.bg.primary,
      radius: radius.lg,
      padding: [spacing[4], spacing[8]], // 16px 32px
    },
    outline: {
      bg: 'transparent',
      text: colors.accent.primary,
      border: borders.styles.outlinedButton,
      radius: radius.lg,
      padding: [spacing[4], spacing[8]],
    },
    ghost: {
      bg: 'transparent',
      text: colors.text.secondary,
      border: borders.styles.subtle,
      radius: radius.md,
      padding: [spacing[3], spacing[6]], // 12px 24px
    },
    small: {
      radius: radius.md,
      padding: [spacing[3], spacing[6]], // 12px 24px
    },
  },
  card: {
    bg: colors.bg.surface,
    radius: radius.xl,
    padding: spacing[6], // 24px
    gap: spacing[4], // 16px
  },
  tag: {
    bg: colors.bg.surface,
    radius: radius.full,
    padding: [spacing[2], spacing[4]], // 8px 16px
  },
  badge: {
    bg: colors.bg.surface,
    radius: radius.md,
    padding: ['0.375rem', spacing[3]], // 6px 12px
  },
} as const;

// ============================================
// DESIGN SYSTEM EXPORT
// ============================================

export const designSystem = {
  colors,
  typography,
  typeScale,
  spacing,
  padding,
  gap,
  radius,
  radiusUsage,
  borders,
  effects,
  transitions,
  zIndex,
  components,
} as const;

export type DesignSystem = typeof designSystem;

export default designSystem;

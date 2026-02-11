/**
 * Design Tokens for Portfolio Website
 * Based on existing CSS variables with Stitch design system structure
 */

export const colors = {
    // Background colors
    bg: {
        primary: '#050505',
        secondary: '#0a0a0a',
        glass: 'rgba(255, 255, 255, 0.05)',
    },

    // Text colors
    text: {
        primary: '#ffffff',
        secondary: '#a3a3a3',
        accent: '#00f3ff',
    },

    // Brand colors
    brand: {
        primary: '#00f3ff',      // Cyan Neon
        primaryGlow: 'rgba(0, 243, 255, 0.5)',
        secondary: '#bd00ff',    // Purple Neon
        secondaryGlow: 'rgba(189, 0, 255, 0.5)',
    },

    // Border colors
    border: {
        default: 'rgba(255, 255, 255, 0.1)',
        focus: 'rgba(0, 243, 255, 0.3)',
    },
};

export const typography = {
    // Font families
    fontFamily: {
        main: "'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",
        mono: "'Fira Code', 'Courier New', monospace",
    },

    // Font sizes
    fontSize: {
        xs: '0.75rem',    // 12px
        sm: '0.875rem',   // 14px
        base: '1rem',     // 16px
        lg: '1.125rem',   // 18px
        xl: '1.25rem',    // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '2rem',    // 32px
        '4xl': '2.5rem',  // 40px
        '5xl': '3rem',    // 48px
    },

    // Font weights
    fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
    },

    // Line heights
    lineHeight: {
        tight: '1.1',
        normal: '1.6',
        relaxed: '1.8',
    },

    // Letter spacing
    letterSpacing: {
        tight: '-0.02em',
        normal: '0',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em',
    },
};

export const spacing = {
    0: '0',
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
    24: '6rem',     // 96px
};

export const borderRadius = {
    none: '0',
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    full: '9999px',
};

export const shadows = {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(0, 243, 255, 0.3)',
    glowPurple: '0 0 20px rgba(189, 0, 255, 0.3)',
};

export const transitions = {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slower: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
};

export const layout = {
    containerMaxWidth: '1200px',
    sectionPadding: '4rem 2rem',
};

// Export all tokens as a single object
export const tokens = {
    colors,
    typography,
    spacing,
    borderRadius,
    shadows,
    transitions,
    breakpoints,
    layout,
};

export default tokens;

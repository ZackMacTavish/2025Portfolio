import { createGlobalStyle } from 'styled-components';

// Standardized design tokens for type, spacing, and radii
export const tokens = {
    fonts: {
        body: 'Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        heading: 'Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        h3: '1.15rem',
        h2: 'clamp(1.4rem, 3vw, 2rem)',
        h1: 'clamp(2rem, 6vw, 4.8rem)'
    },
    lineHeights: {
        tight: 1.1,
        snug: 1.2,
        normal: 1.5,
        relaxed: 1.7
    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px'
    },
    radii: {
        none: '0',
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '18px',
        pill: '999px',
        round: '50%',
        card: '18px'
    }
};

const baseLight = {
    name: 'light',
    colorScheme: 'light',
    backgroundColor: '#3F4739',
    backgroundTwo: '#ffffff',
    fontColor: '#5D5D5D',
    // Semantic surfaces for page sections that are pure white/grey in light mode
    // and should flip in dark mode. Image-wrapping containers intentionally
    // keep their own hardcoded `white` so product mocks stay on light plates.
    surface: '#ffffff',
    surfaceSubtle: '#f7f7f7',
    surfaceMuted: '#f5f5f5',
    mutedText: '#5d5d5d',
    strongText: '#111111',
    border: '#d1d5db',
    carouselBorder: 'rgba(15, 23, 42, 0.08)',
    pillBg: '#ffffff',
    pillText: '#111827',
    pillBorder: '#d1d5db',
    dialogBg: '#ffffff',
    dialogText: '#111827',
    dialogMutedText: '#4b5563',
    overlayScrim: 'rgba(0, 0, 0, 0.55)'
};

const baseDark = {
    name: 'dark',
    colorScheme: 'dark',
    // Keep the olive hero/chassis intact across modes — only the white/grey
    // content surfaces flip. Body inherits this too.
    backgroundColor: '#3F4739',
    backgroundTwo: '#1a1a1a',
    fontColor: '#d4d4d4',
    surface: '#1f1f1f',
    surfaceSubtle: '#1a1a1a',
    surfaceMuted: '#242424',
    mutedText: '#c8c8c8',
    strongText: '#f5f5f5',
    border: '#2f2f2f',
    carouselBorder: 'rgba(255, 255, 255, 0.08)',
    pillBg: '#1f1f1f',
    pillText: '#f5f5f5',
    pillBorder: '#3a3a3a',
    dialogBg: '#1f1f1f',
    dialogText: '#f5f5f5',
    dialogMutedText: '#c8c8c8',
    overlayScrim: 'rgba(0, 0, 0, 0.7)'
};

export const lightTheme = { ...tokens, ...baseLight };
export const darkTheme = { ...tokens, ...baseDark };

export const GlobalStyles = createGlobalStyle`
    :root {
        --radius-card: ${tokens.radii.card};
        --space-lg: ${tokens.spacing.lg};
    }
    html {
        color-scheme: ${(props) => props.theme.colorScheme};
    }
    * { box-sizing: border-box; }
    html, body, #root { min-height: 100%; }
    body {
        margin: 0;
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.fontColor};
        font-family: ${tokens.fonts.body};
        /* Expose theme as CSS variables so inline-styled sections can opt in. */
        --surface: ${(props) => props.theme.surface};
        --surface-subtle: ${(props) => props.theme.surfaceSubtle};
        --surface-muted: ${(props) => props.theme.surfaceMuted};
        --text-muted: ${(props) => props.theme.mutedText};
        --text-strong: ${(props) => props.theme.strongText};
        --border: ${(props) => props.theme.border};
        --carousel-border: ${(props) => props.theme.carouselBorder};
        --pill-bg: ${(props) => props.theme.pillBg};
        --pill-text: ${(props) => props.theme.pillText};
        --pill-border: ${(props) => props.theme.pillBorder};
        --dialog-bg: ${(props) => props.theme.dialogBg};
        --dialog-text: ${(props) => props.theme.dialogText};
        --dialog-muted-text: ${(props) => props.theme.dialogMutedText};
        --overlay-scrim: ${(props) => props.theme.overlayScrim};
    }
`
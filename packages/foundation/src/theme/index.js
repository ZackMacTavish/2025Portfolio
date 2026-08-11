import { createGlobalStyle } from 'styled-components';

export const tokens = {
  fonts: {
    display: 'var(--font-display)',
    body: 'var(--font-body)',
    heading: 'var(--font-display)',
    mono: 'var(--font-mono)'
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
  backgroundColor: '#3F4739',
  backgroundTwo: '#ffffff',
  fontColor: '#5D5D5D',
};

const baseDark = {
  backgroundColor: '#303030',
  backgroundTwo: '#303030',
  fontColor: '#a1a1a1',
};

export const lightTheme = { ...tokens, ...baseLight };
export const darkTheme = { ...tokens, ...baseDark };

export const GlobalStyles = createGlobalStyle`
  :root {
    /* expose some common tokens as CSS vars for non-styled consumers */
    --radius-card: ${tokens.radii.card};
    --space-lg: ${tokens.spacing.lg};
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColor};
    font-family: ${tokens.fonts.body};
  }
`;

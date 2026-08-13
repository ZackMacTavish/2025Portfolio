import { createGlobalStyle } from 'styled-components';

// Standardized design tokens for type, spacing, and radii
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
    name: 'light',
    colorScheme: 'light',
    backgroundColor: '#E3E4D8',
    backgroundTwo: '#ffffff',
    fontColor: '#30352D',
    onOlive: '#20251D',
    onOliveMuted: 'rgba(32, 37, 29, 0.72)',
    heroSpotlightLeft: 'radial-gradient(circle, rgba(255, 255, 255, 0.52) 0%, rgba(63, 71, 57, 0.16) 62%, transparent 100%)',
    heroSpotlightRight: 'radial-gradient(circle, rgba(244, 220, 211, 0.38) 0%, rgba(184, 119, 105, 0.1) 62%, transparent 100%)',
    // Semantic surfaces for page sections that are pure white/grey in light mode
    // and should flip in dark mode. Image-wrapping containers intentionally
    // keep their own hardcoded `white` so product mocks stay on light plates.
    surface: '#ffffff',
    surfaceSubtle: '#f7f7f7',
    surfaceMuted: '#f5f5f5',
    sectionPrimary: '#E3E4D8',
    sectionPrimaryMuted: '#E7E8DE',
    sectionBase: '#ffffff',
    sectionMuted: '#ECEDEA',
    sectionAccent: '#E7E8DE',
    sectionAccentText: '#3F4739',
    sectionAccentMutedText: '#62695D',
    projectHeroWash: 'rgba(227, 228, 216, 0.46)',
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
    headerBg: 'rgba(227, 228, 216, 0.82)',
    headerMenuBg: 'rgba(255, 255, 255, 0.97)',
    headerText: '#3f4739',
    headerBorder: 'rgba(63, 71, 57, 0.16)',
    headerHover: 'rgba(63, 71, 57, 0.12)',
    headerSpotlight: 'radial-gradient(circle, rgba(63, 71, 57, 0.22) 0%, rgba(197, 118, 142, 0.12) 60%, transparent 100%)',
    headerStrokeSolid: 'rgba(157, 82, 62, 0.72)',
    headerStrokeGlow: 'linear-gradient(to right, rgba(189, 103, 80, 0.38), rgba(166, 82, 65, 0.48), rgba(207, 135, 111, 0.32))',
    headerStrokeMicro: 'linear-gradient(to right, transparent 0%, rgba(176, 92, 126, 0.18) 10%, rgba(159, 70, 108, 0.28) 50%, rgba(176, 92, 126, 0.18) 85%, transparent 100%)',
    headerStrokePulse: 'linear-gradient(to right, transparent 0%, rgba(159, 70, 108, 0.2) 35%, rgba(159, 70, 108, 0.35) 50%, rgba(159, 70, 108, 0.2) 65%, transparent 100%)',
    headerStrokeTail: 'linear-gradient(to right, rgba(159, 70, 108, 0.12), transparent)',
    overlayScrim: 'rgba(0, 0, 0, 0.55)'
};

const baseDark = {
    name: 'dark',
    colorScheme: 'dark',
    // Keep the olive hero/chassis intact across modes — only the white/grey
    // content surfaces flip. Body inherits this too.
    backgroundColor: '#353A32',
    backgroundTwo: '#000000',
    fontColor: '#d4d4d4',
    onOlive: '#F5F7F2',
    onOliveMuted: 'rgba(245, 247, 242, 0.75)',
    heroSpotlightLeft: 'radial-gradient(circle, rgba(227, 228, 216, 0.28) 0%, rgba(227, 228, 216, 0.14) 62%, transparent 100%)',
    heroSpotlightRight: 'radial-gradient(circle, rgba(232, 141, 103, 0.22) 0%, rgba(198, 95, 130, 0.1) 62%, transparent 100%)',
    surface: '#000000',
    surfaceSubtle: '#000000',
    surfaceMuted: '#1F1F1F',
    sectionPrimary: '#353A32',
    sectionPrimaryMuted: '#2D312B',
    sectionBase: '#000000',
    sectionMuted: '#222222',
    sectionAccent: '#2D312B',
    sectionAccentText: '#E3E4D8',
    sectionAccentMutedText: '#B9BDB2',
    projectHeroWash: 'rgba(53, 58, 50, 0.54)',
    mutedText: '#c8c8c8',
    strongText: '#f5f5f5',
    border: '#292929',
    carouselBorder: 'rgba(255, 255, 255, 0.08)',
    pillBg: '#000000',
    pillText: '#f5f5f5',
    pillBorder: '#303030',
    dialogBg: '#000000',
    dialogText: '#f5f5f5',
    dialogMutedText: '#c8c8c8',
    headerBg: 'rgba(53, 58, 50, 0.82)',
    headerMenuBg: 'rgba(0, 0, 0, 0.97)',
    headerText: '#E3E4D8',
    headerBorder: 'rgba(255, 255, 255, 0.12)',
    headerHover: 'rgba(227, 228, 216, 0.4)',
    headerSpotlight: 'radial-gradient(circle, rgba(227, 228, 216, 0.32) 0%, rgba(244, 143, 175, 0.18) 60%, transparent 100%)',
    headerStrokeSolid: 'rgba(232, 141, 103, 0.88)',
    headerStrokeGlow: 'linear-gradient(to right, rgba(255, 141, 103, 0.5), rgba(232, 141, 103, 0.62), rgba(255, 170, 136, 0.42))',
    headerStrokeMicro: 'linear-gradient(to right, transparent 0%, rgba(255, 110, 199, 0.3) 10%, rgba(255, 20, 147, 0.48) 50%, rgba(255, 110, 199, 0.3) 85%, transparent 100%)',
    headerStrokePulse: 'linear-gradient(to right, transparent 0%, rgba(255, 30, 150, 0.35) 35%, rgba(255, 30, 150, 0.58) 50%, rgba(255, 30, 150, 0.35) 65%, transparent 100%)',
    headerStrokeTail: 'linear-gradient(to right, rgba(255, 30, 150, 0.18), transparent)',
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
        --section-primary: ${(props) => props.theme.sectionPrimary};
        --section-base: ${(props) => props.theme.sectionBase};
        --section-muted: ${(props) => props.theme.sectionMuted};
        --section-accent: ${(props) => props.theme.sectionAccent};
        --text-muted: ${(props) => props.theme.mutedText};
        --text-strong: ${(props) => props.theme.strongText};
        --on-olive: ${(props) => props.theme.onOlive};
        --on-olive-muted: ${(props) => props.theme.onOliveMuted};
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
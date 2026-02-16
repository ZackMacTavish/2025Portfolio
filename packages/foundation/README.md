# @mactavish/foundation

Shared UI foundation for MacTavish projects: SEO, custom cursor, theme tokens, and a reusable 60vw grid.

## Install

This package is designed for React (>=18) and styled-components (>=6).

```
npm i @mactavish/foundation styled-components react react-dom
```

## Usage

```jsx
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from '@mactavish/foundation';
import { Seo, CustomCursor, Grid60, Grid60TwoCol } from '@mactavish/foundation';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Seo
        title="Page Title"
        description="Short summary"
        url="https://yourdomain.com/path"
        images={[{ url: 'https://yourdomain.com/og.png', width: 1200, height: 630 }]}
        sameAs={["https://twitter.com/you"]}
        keywords={["design", "portfolio"]}
        siteDefaults={{
          ogImages: [{ url: 'https://yourdomain.com/og.png', width: 1200, height: 630 }],
          favicons: {
            '32x32': '/favicon-32x32.png',
            '192x192': '/android-chrome-192x192.png',
            '180x180': '/apple-touch-icon.png'
          }
        }}
      />
      <CustomCursor />
      <Grid60>
        <h1 style={{ fontSize: lightTheme.fontSizes.h1 }}>Hello</h1>
      </Grid60>
    </ThemeProvider>
  );
}
```

## Theme tokens

- `fonts`: body, heading, mono
- `fontSizes`: xs, sm, md, lg, xl, h3, h2, h1
- `lineHeights`: tight, snug, normal, relaxed
- `spacing`: xs, sm, md, lg, xl, 2xl, 3xl
- `radii`: none, sm, md, lg, xl, pill, round, card

Light and dark themes merge these tokens with basic palette keys:
- `backgroundColor`, `backgroundTwo`, `fontColor`

## Build

If you’re working in the monorepo:

```
npm run build -w @mactavish/foundation
```

To publish:

1. Ensure you’re logged in to npm.
2. Bump version in `packages/foundation/package.json`.
3. Build and publish:

```
npm run build -w @mactavish/foundation
npm publish -w @mactavish/foundation --access public
```


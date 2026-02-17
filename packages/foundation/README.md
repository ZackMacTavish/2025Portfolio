# @zackmactavish/foundation

Shared UI foundation for MacTavish projects: SEO, custom cursor, theme tokens, and a reusable 60vw grid.

### Image + Text split section

Use `ImageTextSplit` for a measured two-column section (image + text) modeled after the Graphic Design "This is it" layout.

```jsx
import { ImageTextSplit } from '@zackmactavish/foundation';

<ImageTextSplit
  imageSrc={artbook}
  imageAlt="This is it poster"
>
  {'This is it' was a poster design I made for the 2017 SAIC VCD Design show. The piece explores a quote from the movie 'Style Wars'.}
  {/* You can replace this string with your component content */}
</ImageTextSplit>
```

Props:
- `imageSrc` (string, required)
- `imageAlt` (string, required)
- `children` (ReactNode — text/content block)
- `width` (string — default `62vw`)
- `columns` (string — default `0.56fr minmax(280px, 0.44fr)`)
- `imageWidth` (string — default `86%`)

### SEO

Use `Seo` for page-level meta, OG/Twitter, canonical, favicons, and JSON-LD.

```jsx
import { Seo, buildCanonical } from '@zackmactavish/foundation';

const homepage = 'https://mactavish.xyz';
const path = '/projects/graphic-design';

<Seo
  title="Graphic Design — Zack MacTavish"
  description="Selected brand and editorial design—measured layouts, crisp typography, and thoughtful hierarchy."
  url={buildCanonical(homepage, path)}
  keywords={["graphic design", "branding", "editorial", "typography"]}
  images={[{ url: `${homepage}/og.png`, width: 1200, height: 630 }]}
  sameAs={["https://twitter.com/you"]}
  siteDefaults={{
    ogImages: [{ url: `${homepage}/og.png`, width: 1200, height: 630 }],
    favicons: {
      '32x32': '/favicon-32x32.png',
      '192x192': '/android-chrome-192x192.png',
      '180x180': '/apple-touch-icon.png'
    }
  }}
  // New optional fields
  siteName="Zack MacTavish"
  locale="en_US"
  robots="index,follow"
  themeColor="#000000"
  twitterSite="@zackmactavish"
  twitterCreator="@zackmactavish"
/>;
```

Notes:
- `url` is used for canonical and OG url.
- `images` supports multiple OG images (string or { url, width, height }).
- `jsonLd` can be passed; when `@type` is CreativeWork/Article without `author`, a Person is injected.
- `authorName`, `authorAlternateNames`, and `sameAs` populate meta and JSON-LD.
- Favicons can be an array of { rel, sizes, href } or an object like in `siteDefaults`.
- Additional optional meta: `siteName` (og:site_name), `locale` (og:locale), `robots`, `themeColor`, `twitterSite`, `twitterCreator`.
  These can also come from `siteDefaults` keys with the same names.


## Install

This package is designed for React (>=18) and styled-components (>=6).

```
npm i @zackmactavish/foundation styled-components react react-dom
```

## Usage

```jsx
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from '@zackmactavish/foundation';
import { Seo, CustomCursor, Grid60, Grid60TwoCol } from '@zackmactavish/foundation';

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
npm run build -w @zackmactavish/foundation
```

To publish:

1. Ensure you’re logged in to npm.
2. Bump version in `packages/foundation/package.json`.
3. Build and publish:

```
npm run build -w @zackmactavish/foundation
npm publish -w @zackmactavish/foundation --access public
```


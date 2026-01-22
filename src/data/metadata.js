// Centralized metadata for pages and projects
const SITE_URL = 'https://mactavish.xyz';

export const site = {
  name: 'Zack MacTavish',
  url: SITE_URL,
  // canonical OG default image (PNG source preferred)
  defaultImage: `${SITE_URL}/assets/og/website-logoresolutions-1200x630.png`,
  // Add your social profile links here to be included in JSON-LD sameAs
  sameAs: [
    'https://dribbble.com/Zmactavish',
    'https://www.instagram.com/zackmichaelmactavish',
    'https://www.linkedin.com/in/zacharymactavish/',
    'https://github.com/ZackMacTavish',
    'https://medium.com/@zmactavish'
  ],
    keywords: ['product design', 'graphic design', 'UX', 'portfolio', 'Zack MacTavish'],
    // various OG image sizes (canonical first)
    ogImages: [
      { url: `${SITE_URL}/assets/og/website-logoresolutions-1200x630.png`, width: 1200, height: 630 },
      { url: `${SITE_URL}/assets/og/website-logoresolutions-600x315.png`, width: 600, height: 315 },
      { url: `${SITE_URL}/assets/og/website-logoresolutions-high-res.png`, width: 2400, height: 1260 },
    ],
    // square brand mark for other uses (PNG)
    squareLogo: `${SITE_URL}/assets/og/website-logoresolutions-square-logo-1200px.png`,
    // favicons / app icons (served from public/assets/og) - prefer PNG sources
    favicons: {
      '16x16': `${SITE_URL}/assets/og/website-logoresolutions-16px.png`,
      '32x32': `${SITE_URL}/assets/og/website-logoresolutions-32px.png`,
      '180x180': `${SITE_URL}/assets/og/website-logoresolutions-180px.png`,
      '192x192': `${SITE_URL}/assets/og/website-logoresolutions-192px.png`,
      '512x512': `${SITE_URL}/assets/og/website-logoresolutions-512px.png`,
    },
};

export const projects = {
  landing: {
    title: `${site.name} — Product & Graphic Designer`,
    description:
      'Product & graphic designer focused on brand, UX, and digital experiences. View work and contact.',
    url: `${SITE_URL}/`,
  // revert to the default image (logo) as requested
  image: site.defaultImage,
    keywords: ['portfolio', 'home', 'design', 'Zack MacTavish'],
  },
  about: {
    title: `About — ${site.name}`,
    description:
      "About Zack MacTavish — product & graphic designer. Learn about my background, work, and exhibitions.",
    url: `${SITE_URL}/about`,
  // revert to the default image (logo) as requested
  image: site.defaultImage,
    keywords: ['about', 'bio', 'background'],
  },
  giga: {
    title: 'Giga — UX/UI & Branding | Zack MacTavish',
    description: 'Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.',
    url: `${SITE_URL}/projects/giga`,
    image: `${SITE_URL}/assets/Giga—Macbookv2.png`,
    datePublished: '2024-10-01',
    keywords: ['giga', 'product design', 'ux', 'branding'],
  },
  outsource: {
    title: 'Outsource — UX/UI & Branding | Zack MacTavish',
    description: 'Case study: Outsource — branding, websites and UX work by Zack MacTavish.',
    url: `${SITE_URL}/projects/outsource`,
    image: `${SITE_URL}/assets/Outsource—Macbook.png`,
    datePublished: '2023-08-01',
    keywords: ['outsource', 'branding', 'ux'],
  },
  piton: {
    title: 'Piton — Project | Zack MacTavish',
    description: 'Case study: Piton — UX and visual design work by Zack MacTavish.',
    url: `${SITE_URL}/projects/piton`,
    image: `${SITE_URL}/assets/Piton—Screens.jpg`,
    datePublished: '2023-02-01',
    keywords: ['piton', 'branding', 'app design'],
  },
  ux: {
    title: 'UX — Product & UX Projects | Zack MacTavish',
    description: 'Portfolio of UX and product design projects by Zack MacTavish.',
    url: `${SITE_URL}/projects/ux`,
  // use Giga mockup as the UX representative screenshot
  image: `${SITE_URL}/assets/Giga—mockup.jpg`,
    keywords: ['ux', 'product design'],
  },
  'access-direct': {
    title: 'Access Direct — UX & Brand | Zack MacTavish',
    description: 'Case study: Access Direct — brand, UX and website built by Zack MacTavish.',
    url: `${SITE_URL}/projects/access-direct`,
    image: `${SITE_URL}/assets/AD—Macs.jpg`,
    datePublished: '2022-10-01',
    keywords: ['access direct', 'ux', 'brand'],
  },
  'graphic-design': {
    title: 'Graphic Design — Portfolio | Zack MacTavish',
    description:
      'Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.',
    url: `${SITE_URL}/projects/graphic-design`,
    // use a cover-style image for graphic design listings
    image: `${SITE_URL}/assets/Cover.png`,
    keywords: ['graphic design', 'posters', 'packaging'],
  },
  threepillars: {
    title: 'ThreePillars — UX & Branding | Zack MacTavish',
    description: 'Case study: ThreePillars — brand and web app design by Zack MacTavish.',
    url: `${SITE_URL}/projects/threepillars`,
    image: `${SITE_URL}/assets/ThreePillars—Macbook.png`,
    keywords: ['threepillars', 'branding', 'ux'],
  },
};

export default { site, projects };

// Centralized metadata for pages and projects
const SITE_URL = 'https://mactavish.xyz';

export const site = {
  name: 'Zack MacTavish',
  siteName: 'Zack MacTavish — Portfolio',
  locale: 'en_US',
  themeColor: '#000000',
  twitterCreator: '@zmactavish',
  twitterSite: '@zmactavish',
  imageAlt: 'Zack MacTavish — Portfolio',
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
    // NOTE: the `website-logoresolutions-*px.png` files are mis-sized (the
    // pixel dimensions don't match their filename) which causes Google to
    // reject them. Use the correctly-sized `favicon-N.png` files instead.
    favicons: {
      '16x16': `${SITE_URL}/assets/og/favicon-16.png`,
      '32x32': `${SITE_URL}/assets/og/favicon-32.png`,
      '48x48': `${SITE_URL}/assets/og/favicon-48.png`,
      '180x180': `${SITE_URL}/assets/og/favicon-180.png`,
      '192x192': `${SITE_URL}/assets/og/favicon-192.png`,
      '512x512': `${SITE_URL}/assets/og/favicon-512.png`,
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
  giga: {
    title: 'Giga — UX/UI & Branding | Zack MacTavish',
    description: 'Case study: Giga — UX/UI, branding, and product design by Zack MacTavish.',
    url: `${SITE_URL}/Giga`,
    image: `${SITE_URL}/assets/og/giga-1200x630.jpg`,
    datePublished: '2024-10-01',
    keywords: ['giga', 'product design', 'ux', 'branding'],
  },
  outsource: {
    title: 'Outsource — UX/UI & Branding | Zack MacTavish',
    description: 'Case study: Outsource — branding, websites and UX work by Zack MacTavish.',
    url: `${SITE_URL}/Outsource`,
    image: `${SITE_URL}/assets/og/outsource-1200x630.jpg`,
    datePublished: '2023-08-01',
    keywords: ['outsource', 'branding', 'ux'],
  },
  piton: {
    title: 'Piton — Project | Zack MacTavish',
    description: 'Case study: Piton — UX and visual design work by Zack MacTavish.',
    url: `${SITE_URL}/Piton`,
    image: `${SITE_URL}/assets/og/piton-1200x630.jpg`,
    datePublished: '2023-02-01',
    keywords: ['piton', 'branding', 'app design'],
  },
  ux: {
    title: 'Leysi — Product & UX | Zack MacTavish',
    description: 'Case study: Leysi — UX and product design by Zack MacTavish.',
    url: `${SITE_URL}/Ux`,
    image: `${SITE_URL}/assets/og/ux-1200x630.jpg`,
    keywords: ['leysi', 'ux', 'product design'],
  },
  'access-direct': {
    title: 'Access Direct — UX & Brand | Zack MacTavish',
    description: 'Case study: Access Direct — brand, UX and website built by Zack MacTavish.',
    url: `${SITE_URL}/AccessDirect`,
    image: `${SITE_URL}/assets/og/access-direct-1200x630.jpg`,
    datePublished: '2022-10-01',
    keywords: ['access direct', 'ux', 'brand'],
  },
  'graphic-design': {
    title: 'Graphic Design — Portfolio | Zack MacTavish',
    description:
      'Graphic design and art pieces by Zack MacTavish, including posters, packaging, and editorial work.',
    url: `${SITE_URL}/GraphicDesign`,
    image: `${SITE_URL}/assets/og/graphic-design-1200x630.jpg`,
    keywords: ['graphic design', 'posters', 'packaging'],
  },
  threepillars: {
    title: 'ThreePillars — UX & Branding | Zack MacTavish',
    description: 'Case study: ThreePillars — brand and web app design by Zack MacTavish.',
    url: `${SITE_URL}/ThreePillars`,
    image: `${SITE_URL}/assets/og/threepillars-1200x630.jpg`,
    keywords: ['threepillars', 'branding', 'ux'],
  },
  microsoft: {
    title: 'Microsoft — Project | Zack MacTavish',
    description: 'Case study: Microsoft — UX and visual design work by Zack MacTavish. Password protected.',
    url: `${SITE_URL}/Microsoft`,
    image: site.defaultImage,
    keywords: ['microsoft', 'branding', 'ux', 'password protected'],
  },
  'business-connectors': {
    title: 'Business Connectors — Microsoft | Zack MacTavish',
    description: 'Case study: Microsoft Business Connectors — UX & product design by Zack MacTavish.',
    url: `${SITE_URL}/BusinessConnectors`,
    image: site.defaultImage,
    keywords: ['microsoft', 'business connectors', 'ux'],
  },
  'copilot-pay': {
    title: 'Copilot Pay — Microsoft | Zack MacTavish',
    description: 'Case study: Microsoft Copilot Pay — UX & product design by Zack MacTavish.',
    url: `${SITE_URL}/CopilotPay`,
    image: site.defaultImage,
    keywords: ['microsoft', 'copilot', 'pay', 'ux'],
  },
  journeys: {
    title: 'Journeys — Microsoft | Zack MacTavish',
    description: 'Case study: Microsoft Journeys — UX & product design by Zack MacTavish.',
    url: `${SITE_URL}/Journeys`,
    image: site.defaultImage,
    keywords: ['microsoft', 'journeys', 'ux'],
  },
  'cashback-hub': {
    title: 'Cashback Hub & Edge Shoreline — Microsoft | Zack MacTavish',
    description: 'Case study: Microsoft Shopping Cashback Hub and Edge Shoreline companion pane — interaction, visual, and cross-platform design by Zack MacTavish.',
    url: `${SITE_URL}/CashbackHub`,
    image: `${SITE_URL}/assets/cashback-hub/hero.jpg`,
    keywords: ['microsoft', 'cashback hub', 'edge shoreline', 'shopping', 'ux'],
  },
  'video-commerce': {
    title: 'Video Commerce — Bing Shopping | Zack MacTavish',
    description: 'Case study: Bing Shopping video commerce initiative — live and short-form video integrations across U.S., Japan, and India pilots with TalkShopLive, QVC Japan, and Roposo.',
    url: `${SITE_URL}/VideoCommerce`,
    image: `${SITE_URL}/assets/video-commerce/Full Frame.jpg`,
    keywords: ['microsoft', 'bing shopping', 'video commerce', 'live shopping', 'talkshoplive', 'roposo', 'ux'],
  },
  'ironlak-internship': {
    title: 'Ironlak Internship — Brand Identity & Production Design | Zack MacTavish',
    description: 'Case study: A multilingual wordmark identity system for Ironlak, an Australian spray paint company, and three months of production design across print, digital, and outdoor.',
    url: `${SITE_URL}/IronlakInternship`,
    image: `${SITE_URL}/assets/ironlak-internship/IronlakAdvert2.jpg`,
    keywords: ['ironlak', 'brand identity', 'graphic design', 'production design', 'graffiti', 'internship'],
  },
  resume: {
    title: 'Resume — Zack MacTavish',
    description: 'Resume / CV of Zack MacTavish — product & graphic designer.',
    url: `${SITE_URL}/Resume`,
    image: site.defaultImage,
    keywords: ['resume', 'cv', 'product designer', 'graphic designer'],
  },
};

export default { site, projects };

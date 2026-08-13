import type { CaseStudy } from "../../types/caseStudy";

const image = (name: string, alt: string, aspectRatio = "16/9") => ({
  src: `/assets/phia/${name}.jpg`,
  avif: `/assets/phia/${name}.avif`,
  webp: `/assets/phia/${name}.webp`,
  mobileSrc: `/assets/phia/${name}-mobile-900.jpg`,
  mobileAvif: `/assets/phia/${name}-mobile-900.avif`,
  mobileWebp: `/assets/phia/${name}-mobile-900.webp`,
  alt,
  aspectRatio,
});

export const phiaCaseStudy: CaseStudy = {
  slug: "phia",
  title: "Phia",
  subtitle: "Exploring pre-owned luxury discovery inside Microsoft Shopping",
  coverImage: image(
    "hero",
    "Microsoft Shopping and Phia pre-owned luxury landing page",
  ),
  heroImage: image(
    "hero",
    "Microsoft Shopping and Phia pre-owned luxury landing page",
  ),
  transitionImages: [
    image("hero", "Phia luxury resale landing page"),
    image("landing-entry-light", "Phia resale landing experience in Microsoft Shopping"),
    image("side-pane-walmart", "Phia pre-owned alternatives beside a Walmart product page"),
    image("side-pane-chanel", "Phia pre-owned feed beside a Chanel retailer page"),
    image("side-pane-dark", "Phia dark side-pane exploration on a Chanel page"),
  ],
  heroHeadline: "Bringing curated pre-owned luxury into Microsoft Shopping",
  meta: {
    client: "Microsoft Shopping + Phia",
    role: "Product Designer",
    timeline: "Exploratory MVP",
    platform: "Bing Shopping / Edge / Web",
  },
  sections: [
    {
      id: "overview",
      layout: "text-only",
      heading: "A New Path Into Luxury Resale",
      body: `Phia is a startup providing curated pre-owned alternatives for luxury products. Microsoft Shopping partnered with Phia to explore integrating its catalog into existing shopping experiences.

I joined after the initial concept to help design flows and interactions that made discovering pre-owned products intuitive and engaging. The experience brought together products from brands including Chanel, Dior, Gucci, Hermes, Louis Vuitton, and Miu Miu across categories such as handbags, shoes, watches, wallets, luggage, and clothing.`,
    },
    {
      id: "search-entry",
      layout: "full-width-image",
      heading: "A Clear Entry Point",
      body: `The landing experience introduced resale as a distinct but connected part of Microsoft Shopping. The visual direction balanced Phia's editorial luxury language with familiar Microsoft Shopping navigation and search patterns.`,
      images: [{
        ...image("landing-entry-light", "Phia resale landing experience in Microsoft Shopping"),
        containerBorder: "1px solid var(--border, #d1d5db)",
      }],
    },
    {
      id: "catalog-system",
      layout: "full-width-image",
      heading: "Brands, Categories, and Follow States",
      body: `Users could follow favorite luxury brands and move through card-based categories without losing the curated quality of the catalog. The system covered discovery states, brand selections, product cards, and navigation patterns for a broad range of inventory.`,
      images: [
        {
          ...image("categories", "Phia brand and category card system", "16/10"),
          zoomable: true,
          zoomAspectRatio: "7680/20280",
          objectFit: "cover",
          objectPosition: "top center",
          containerBorder: "1px solid #c9c9c9",
        },
      ],
    },
    {
      id: "visual-direction",
      layout: "image-pair",
      stackImages: true,
      heading: "Testing the Visual Direction",
      body: `Banner iterations explored green, deep green, and muted neutral treatments to evaluate how the Phia identity could sit within Microsoft surfaces while preserving a premium editorial feel.`,
      images: [
        {
          ...image("banner-green", "Green banner direction for the Phia shopping landing page"),
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
        {
          ...image("banner-dark-green", "Deep green banner direction for the Phia shopping landing page"),
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
        {
          ...image("banner-muted", "Muted neutral banner direction for the Phia shopping landing page"),
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
        {
          ...image("banner-warm", "Warm neutral banner direction for the Phia shopping landing page"),
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
      ],
    },
    {
      id: "filtering",
      layout: "full-width-image",
      heading: "Card-Based Selection and Filtering",
      body: `Brand cards and filters made a large luxury catalog easier to scan. Users could narrow products by brand and category while keeping recommendations visually rich and immediately comparable.`,
      images: [
        {
          ...image("filters", "Phia brand cards and product filters", "16/10"),
          zoomable: true,
          zoomAspectRatio: "7680/10260",
          objectFit: "cover",
          objectPosition: "top center",
          containerBorder: "1px solid #c9c9c9",
        },
      ],
    },
    {
      id: "browser-context",
      layout: "image-pair",
      stackImages: true,
      sectionBackground: "#fff",
      heading: "Contextual Shopping in the Browser",
      body: `Pre-owned product feeds were designed for retailer and product detail pages, surfacing relevant alternatives without asking shoppers to begin a separate search.

The companion pane connected that inventory to the page a shopper was already viewing. This preserved context while making price and product alternatives easy to compare.`,
      images: [
        { ...image("side-pane-walmart", "Phia alternatives integrated with a Walmart product page"), objectFit: "cover" },
        { ...image("side-pane-chanel", "Phia companion pane on a Chanel retailer homepage"), objectFit: "cover" },
        { ...image("side-pane-dark", "Dark Phia companion pane on a Chanel product page"), objectFit: "cover" },
      ],
    },
    {
      id: "sensitive-content",
      layout: "full-width-image",
      sectionBackground: "#fff",
      heading: "A Full-Page Comparison Table",
      body: `The full-page comparison table brought new and pre-owned products into one view. Shoppers could compare sellers, condition, shipping, and total price while seeing pre-owned alternatives alongside traditional retail offers.`,
      images: [
        {
          ...image("sensitive-content", "Content handling state for a pre-owned product feed"),
          aspectRatio: "2400/1290",
          objectFit: "contain",
          backgroundColor: "#fff",
        },
      ],
    },
    {
      id: "prototype-video",
      layout: "video",
      heading: "The Experience in Motion",
      body: `We wanted to push Bing's visual experience toward a more modern web experience. The prototype used immersive imagery, stronger typography, and fluid transitions to connect discovery, curated feeds, and contextual shopping across Microsoft Shopping surfaces.`,
      video: {
        src: "/assets/microsoft-demo3.mp4",
        poster: "/assets/Preview3.png",
        ariaLabel: "Phia pre-owned luxury experience prototype",
      },
    },
    {
      id: "collaboration",
      layout: "text-only",
      heading: "Collaboration and Iconography",
      body: `I worked with Microsoft design and product partners and met with the Phia team, including Phoebe Gates and Sophia Kianni, to align the experience with catalog and brand strategy.

    I also collaborated with designer Mia Kim on concepts for several of the screens shown in this case study.

I also partnered with the Fluent iconography team to design a hanger icon for navigation, giving pre-owned alternatives a clear and recognizable place in the menu.`,
    },
    {
      id: "mvp",
      layout: "full-width-image",
      heading: "Bringing the MVP Together",
      images: [
        {
          ...image("mvp-page", "Phia Microsoft Shopping MVP page", "16/10"),
          zoomable: true,
          zoomAspectRatio: "7680/17020",
          objectFit: "cover",
          objectPosition: "top center",
        },
      ],
    },
    {
      id: "outcome",
      layout: "text-only",
      heading: "Outcome",
      body: `Although the Phia page was not launched, the project informed future approaches to pre-owned luxury integrations within Microsoft Shopping. It helped shape thinking around curated feeds, recommendation patterns, contextual commerce, and content handling for similar retail partnerships.`,
    },
  ],
};
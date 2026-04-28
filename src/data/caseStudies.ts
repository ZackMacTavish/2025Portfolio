import { CaseStudy } from "../types/caseStudy";

/**
 * Business Connectors case study — complete case study object
 * Demonstrates all 9 section layout types
 */
export const businessConnectorsCaseStudy: CaseStudy = {
  slug: "business-connectors",
  title: "Business Connectors",
  subtitle: "Empowering users to unlock loyalty perks across Microsoft Copilot",
  coverImage: {
    src: "/assets/business-connectors/Connectors1.jpg",
    avif: "/assets/business-connectors/Connectors1.avif",
    webp: "/assets/business-connectors/Connectors1.webp",
    alt: "Business Connectors hero",
    aspectRatio: "16/9",
  },
  transitionImages: [
    {
      src: "/assets/business-connectors/Connector Settings 1.jpg",
      alt: "Transition 1",
    },
    {
      src: "/assets/business-connectors/Settings Overlay 3.jpg",
      alt: "Transition 2",
    },
    {
      src: "/assets/business-connectors/PDP + Connector Upsell.jpg",
      alt: "Transition 3",
    },
    {
      src: "/assets/business-connectors/Connectors.jpg",
      alt: "Transition 4",
    },
    {
      src: "/assets/business-connectors/Perks.jpg",
      alt: "Transition 5",
    },
  ],
  heroHeadline: "Unlocking Loyalty Rewards Through Intelligent Connections",
  meta: {
    client: "Microsoft Copilot",
    role: "Product Designer (7 weeks)",
    timeline: "2026",
    platform: "Desktop / Mobile / Web",
  },
  sections: [
    {
      id: "intro",
      layout: "sticky-split",
      stickyContent: {
        image: {
          src: "/assets/business-connectors/Connectors2.jpg",
          avif: "/assets/business-connectors/Connectors2.avif",
          webp: "/assets/business-connectors/Connectors2.webp",
          alt: "Business Connectors hero",
          aspectRatio: "16/9",
        },
        tags: [
          "INTERACTION DESIGN",
          "VISUAL DESIGN",
          "PROTOTYPING",
          "CROSS-PLATFORM",
        ],
        collateralImages: [
          {
            src: "/assets/business-connectors/Connect AccountDrk.jpg",
            avif: "/assets/business-connectors/Connect AccountDrk.avif",
            webp: "/assets/business-connectors/Connect AccountDrk.webp",
            alt: "Target flow",
            aspectRatio: "16/9",
          },
          {
            src: "/assets/business-connectors/Password formDrk.jpg",
            avif: "/assets/business-connectors/Password formDrk.avif",
            webp: "/assets/business-connectors/Password formDrk.webp",
            alt: "Walmart flow",
            aspectRatio: "16/9",
          },
          {
            src: "/assets/business-connectors/Connection successful + Requery.jpg",
            avif: "/assets/business-connectors/Connection successful + Requery.avif",
            webp: "/assets/business-connectors/Connection successful + Requery.webp",
            alt: "Home Depot flow",
            aspectRatio: "6/5",
          },
          {
            src: "/assets/business-connectors/Perks Hover State.jpg",
            avif: "/assets/business-connectors/Perks Hover State.avif",
            webp: "/assets/business-connectors/Perks Hover State.webp",
            alt: "Nordstrom flow",
            aspectRatio: "5/3",
          },
          {
            src: "/assets/business-connectors/Settings Overlay 1.jpg",
            avif: "/assets/business-connectors/Settings Overlay 1.avif",
            webp: "/assets/business-connectors/Settings Overlay 1.webp",
            alt: "Generic hub",
            aspectRatio: "16/9",
          },
          {
            src: "/assets/business-connectors/Settings Overlay 2.jpg",
            avif: "/assets/business-connectors/Settings Overlay 2.avif",
            webp: "/assets/business-connectors/Settings Overlay 2.webp",
            alt: "Chat integration",
            aspectRatio: "16/9",
          },
        ],
      },
      scrollContent: {
        blocks: [
          {
            type: "text",
            heading: "Overview",
            body: `Business Connectors in Microsoft Copilot empowers users to connect third-party business accounts to unlock loyalty perks, discounts, and curated offers across multiple merchants. By integrating these flows directly into Copilot, the assistant becomes proactive and helps users complete high-value tasks without leaving the experience.`,
          },
          {
            type: "image",
            images: [
              {
                src: "/assets/business-connectors/Carousel Cards + Connector UpsellDrk.jpg",
                avif: "/assets/business-connectors/Carousel Cards + Connector UpsellDrk.avif",
                webp: "/assets/business-connectors/Carousel Cards + Connector UpsellDrk.webp",
                alt: "Copilot connector hub",
                aspectRatio: "6/5",
              },
            ],
          },
          {
            type: "text",
            heading: "My Role",
            body: `I took over the project after initial explorations and worked as the primary designer for 7 weeks, partnering with a senior designer, PMs, and engineers. I led interaction design, visual design, prototyping, and cross-platform flows for desktop, mobile, and Copilot browser surfaces while shaping both merchant-specific and generic connector experiences.`,
          },
          {
            type: "carousel",
            images: [
              {
                src: "/assets/business-connectors/Connect Account.jpg",
                avif: "/assets/business-connectors/Connect Account.avif",
                webp: "/assets/business-connectors/Connect Account.webp",
                alt: "Merchant flow screenshot 1",
                aspectRatio: "16/9",
              },
              {
                src: "/assets/business-connectors/Password form.jpg",
                avif: "/assets/business-connectors/Password form.avif",
                webp: "/assets/business-connectors/Password form.webp",
                alt: "Merchant flow screenshot 2",
                aspectRatio: "16/9",
              },
              {
                src: "/assets/business-connectors/Connection SuccessfulDrk.jpg",
                avif: "/assets/business-connectors/Connection SuccessfulDrk.avif",
                webp: "/assets/business-connectors/Connection SuccessfulDrk.webp",
                alt: "Merchant flow screenshot 3",
                aspectRatio: "16/9",
              },
              {
                src: "/assets/business-connectors/Connection Successful.jpg",
                avif: "/assets/business-connectors/Connection Successful.avif",
                webp: "/assets/business-connectors/Connection Successful.webp",
                alt: "Merchant flow screenshot 4",
                aspectRatio: "6/5",
              },
              {
                src: "/assets/business-connectors/PDP + Connector UpsellDrk.jpg",
                avif: "/assets/business-connectors/PDP + Connector UpsellDrk.avif",
                webp: "/assets/business-connectors/PDP + Connector UpsellDrk.webp",
                alt: "Merchant flow screenshot 5",
                aspectRatio: "16/9",
              },
            ],
          },
          {
            type: "quote",
            body: "Enable frictionless connection of loyalty accounts across multiple merchants.",
          },
        ],
      },
    },
    {
      id: "parallax-hero",
      layout: "parallax-reveal",
      heading: "Merchant-Specific Flows",
      body: `Designed complete flows for Target, Walmart, Home Depot, and Nordstrom. Users connect accounts from chat prompts or product detail surfaces, then move through native sign-in with clear progress and confirmation.`,
      images: [
        {
          src: "/assets/business-connectors/Connectors3.jpg",
          avif: "/assets/business-connectors/Connectors3.avif",
          webp: "/assets/business-connectors/Connectors3.webp",
          alt: "Merchant connection flow",
          aspectRatio: "16/9",
        },
      ],
      parallaxSpeed: 0.35,
    },
    {
      id: "design-goals",
      layout: "three-column-feature",
      heading: "Design Goals",
      labels: ["FRICTIONLESS", "AI-POWERED", "CONSISTENT", "SCALABLE"],
      body: `Enable frictionless connection of loyalty accounts across merchants, surface AI-powered value at the right moments, and maintain consistency while supporting each merchant's native login requirements.`,
      images: [
        {
          src: "/assets/business-connectors/Inline Cards + Connector Upsell-1.jpg",
          avif: "/assets/business-connectors/Inline Cards + Connector Upsell-1.avif",
          webp: "/assets/business-connectors/Inline Cards + Connector Upsell-1.webp",
          alt: "Design system and goals feature",
          aspectRatio: "16/9",
        },
      ],
      accentColor: "#e8ded2",
    },
    {
      id: "ai-interactions",
      layout: "image-on-color-block",
      heading: "AI-Integrated Interactions",
      body: `Designed streaming "thinking" animations as AI processes account connections, with real-time badge updates and reward states across chat and product cards. These interactions create clarity without overwhelming the user and reinforce trust in the assistant's recommendations.`,
      images: [
        {
          src: "/assets/business-connectors/Inline Cards + Connector Upsell.jpg",
          avif: "/assets/business-connectors/Inline Cards + Connector Upsell.avif",
          webp: "/assets/business-connectors/Inline Cards + Connector Upsell.webp",
          alt: "AI thinking state",
          aspectRatio: "9/13",
        },
      ],
      accentColor: "#d4e0ed",
    },
    {
      id: "details",
      layout: "staggered-pair",
      images: [
        {
          src: "/assets/business-connectors/Perks.jpg",
          avif: "/assets/business-connectors/Perks.avif",
          webp: "/assets/business-connectors/Perks.webp",
          alt: "Rewards badge",
          aspectRatio: "16/9",
        },
        {
          src: "/assets/business-connectors/Connector Settings 2.jpg",
          avif: "/assets/business-connectors/Connector Settings 2.avif",
          webp: "/assets/business-connectors/Connector Settings 2.webp",
          alt: "Product card integration",
          aspectRatio: "16/9",
        },
      ],
    },
    {
      id: "reflection-quote",
      layout: "quote",
      body: `By reducing friction, personalizing interactions, and consolidating loyalty rewards, users gain real value — and Copilot creates a flywheel of engagement and trust.`,
      heading: "Reflection",
      accentColor: "#333",
    },
    {
      id: "impact",
      layout: "text-only",
      heading: "Impact & Outcome",
      body: `Designs were approved by the Copilot council for flighting and established a scalable framework for connecting multiple merchant accounts inside Copilot. The work set a strong foundation for AI-native commerce by linking account connection, rewards intelligence, and trust-building interaction patterns across platforms.\n\nBy reducing connection friction and surfacing loyalty value at the right moments, Business Connectors makes Copilot more useful for real-world shopping decisions and long-term engagement.`,
    },
  ],
};

/**
 * Export array of case studies
 * Ready to be extended with additional studies
 */
export const caseStudies: CaseStudy[] = [businessConnectorsCaseStudy];

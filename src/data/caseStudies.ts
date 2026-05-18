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

export const copilotPayCaseStudy: CaseStudy = {
  slug: "copilot-pay",
  title: "Copilot Pay",
  subtitle: "Designing Microsoft's first native checkout inside Copilot",
  coverImage: {
    src: "/assets/copilot-pay/Property 1=Default.jpg",
    avif: "/assets/copilot-pay/Property 1=Default.avif",
    webp: "/assets/copilot-pay/Property 1=Default.webp",
    alt: "Copilot Pay checkout experience",
    aspectRatio: "16/9",
  },
  heroImage: {
    src: "/assets/copilot-pay/PDP.jpg",
    avif: "/assets/copilot-pay/PDP.avif",
    webp: "/assets/copilot-pay/PDP.webp",
    alt: "Copilot Pay product detail page with native checkout",
    aspectRatio: "16/9",
    objectFit: "contain",
    objectPosition: "center center",
    backgroundColor: "#ffffff",
  },
  transitionImages: [
    {
      src: "/assets/copilot-pay/Property 1=Default.jpg",
      alt: "Copilot Pay transition 1",
    },
    {
      src: "/assets/copilot-pay/PDP.jpg",
      alt: "Copilot Pay transition 2",
    },
    {
      src: "/assets/copilot-pay/Copilot pay 1.jpg",
      alt: "Copilot Pay transition 3",
    },
    {
      src: "/assets/copilot-pay/Copilot pay 2.jpg",
      alt: "Copilot Pay transition 4",
    },
    {
      src: "/assets/copilot-pay/Copilot pay 3.jpg",
      alt: "Copilot Pay transition 5",
    },
  ],
  heroHeadline: "Bringing frictionless native checkout to Copilot shopping",
  meta: {
    client: "Copilot Pay | Microsoft Shopping",
    role: "Designer (interaction, visual, prototyping, design system)",
    timeline: "7 weeks",
    platform: "Browser / Desktop / Mobile",
  },
  sections: [
    {
      id: "overview",
      layout: "sticky-split",
      stickyContent: {
        image: {
          src: "/assets/copilot-pay/Bang & Olufsen Dark.jpg",
          avif: "/assets/copilot-pay/Bang & Olufsen Dark.avif",
          webp: "/assets/copilot-pay/Bang & Olufsen Dark.webp",
          alt: "Bang & Olufsen checkout flow in dark mode",
          aspectRatio: "4/3",
          backgroundColor: "#0f1220",
          imagePaddingBlock: "clamp(0.5rem, 1.2vw, 0.875rem)",
          objectFit: "contain",
          objectPosition: "center center",
        },
        tags: [
          "AI COMMERCE",
          "PAYMENTS UX",
          "CROSS-PLATFORM",
          "DESIGN SYSTEM",
        ],
        collateralImages: [
          {
            src: "/assets/copilot-pay/Copilot pay 1.jpg",
            avif: "/assets/copilot-pay/Copilot pay 1.avif",
            webp: "/assets/copilot-pay/Copilot pay 1.webp",
            alt: "Copilot Pay mobile express checkout flow",
            aspectRatio: "16/9",
            backgroundColor: "#E7E7E7",
            imagePaddingBlock: "clamp(0.5rem, 1.2vw, 0.875rem)",
            objectFit: "contain",
            objectPosition: "center center",
          },
          {
            src: "/assets/copilot-pay/Copilot pay 2.jpg",
            avif: "/assets/copilot-pay/Copilot pay 2.avif",
            webp: "/assets/copilot-pay/Copilot pay 2.webp",
            alt: "Copilot Pay payment method setup flow",
            aspectRatio: "16/9",
            backgroundColor: "#E7E7E7",
            imagePaddingBlock: "clamp(0.5rem, 1.2vw, 0.875rem)",
            objectFit: "contain",
            objectPosition: "center center",
          },
          {
            src: "/assets/copilot-pay/Apple express.jpg",
            avif: "/assets/copilot-pay/Apple express.avif",
            webp: "/assets/copilot-pay/Apple express.webp",
            alt: "Apple Pay express checkout flow",
            aspectRatio: "16/9",
            backgroundColor: "#E7E7E7",
            imagePaddingBlock: "clamp(0.5rem, 1.2vw, 0.875rem)",
            objectFit: "contain",
            objectPosition: "center center",
          },
          {
            src: "/assets/copilot-pay/Paypal express.jpg",
            avif: "/assets/copilot-pay/Paypal express.avif",
            webp: "/assets/copilot-pay/Paypal express.webp",
            alt: "PayPal express checkout flow",
            aspectRatio: "16/9",
            backgroundColor: "#E7E7E7",
            imagePaddingBlock: "clamp(0.5rem, 1.2vw, 0.875rem)",
            objectFit: "contain",
            objectPosition: "center center",
          },
        ],
      },
      scrollContent: {
        blocks: [
          {
            type: "text",
            heading: "Overview",
            body: `Copilot Pay is Microsoft's first native checkout inside Copilot across browser, desktop, and mobile. It surfaces Buy buttons on product cards and PDPs, then enables express checkout through Apple Pay, PayPal, Venmo, Google Pay, Shop Pay, and Amazon Pay. Before this work, users were redirected to retailer sites, which introduced friction and broke continuity.`,
          },
          {
            type: "text",
            heading: "Team & Role",
            body: `I worked with a principal designer, PM, and engineers over a 7 week sprint, leading interaction design, visual design, prototyping, and design system work. My focus was making native wallet checkout feel coherent inside Copilot while staying scalable across platforms and partner payment experiences.`,
          },
          {
            type: "carousel",
            images: [
              {
                    src: "/assets/copilot-pay/card1.jpg",
                    avif: "/assets/copilot-pay/card1.avif",
                    webp: "/assets/copilot-pay/card1.webp",
                    alt: "Copilot Pay recommendation card surface",
                aspectRatio: "16/9",
                backgroundColor: "#ffffff",
                imagePaddingBlock: "clamp(0.5rem, 1.2vw, 0.875rem)",
                objectFit: "contain",
                objectPosition: "center center",
              },
              {
                    src: "/assets/copilot-pay/card2.jpg",
                    avif: "/assets/copilot-pay/card2.avif",
                    webp: "/assets/copilot-pay/card2.webp",
                    alt: "Copilot Pay wallet selection modal",
                aspectRatio: "16/9",
                backgroundColor: "#ffffff",
                imagePaddingBlock: "clamp(0.5rem, 1.2vw, 0.875rem)",
                objectFit: "contain",
                objectPosition: "center center",
              },
              {
                    src: "/assets/copilot-pay/card3.jpg",
                    avif: "/assets/copilot-pay/card3.avif",
                    webp: "/assets/copilot-pay/card3.webp",
                    alt: "Copilot Pay order details and payment setup flow",
                aspectRatio: "16/9",
                backgroundColor: "#ffffff",
                imagePaddingBlock: "clamp(0.5rem, 1.2vw, 0.875rem)",
                objectFit: "contain",
                objectPosition: "center center",
              },
            ],
          },
          {
            type: "quote",
            body: "Enable frictionless checkout inside Copilot while standardizing visual and interaction patterns across native wallets.",
          },
        ],
      },
    },
    {
      id: "goals",
      layout: "three-column-feature",
      heading: "Goals",
      labels: ["FRICTIONLESS", "CONSISTENT", "SCALABLE", "AI COMMERCE"],
      body: `The project focused on keeping users inside Copilot through checkout, standardizing payment interactions across multiple wallet brands, and expanding Microsoft's AI commerce capabilities with a reusable foundation for future shopping flows.`,
      images: [
        {
          src: "/assets/copilot-pay/Pay CMC Background + PDP.jpg",
          avif: "/assets/copilot-pay/Pay CMC Background + PDP.avif",
          webp: "/assets/copilot-pay/Pay CMC Background + PDP.webp",
          alt: "Copilot Pay desktop commerce experience",
          aspectRatio: "16/9",
          backgroundColor: "#ffffff",
        },
      ],
      accentColor: "#e6f1ff",
    },
    {
      id: "responsibilities",
      layout: "text-only",
      heading: "Responsibilities",
      body: `Designed express checkout flows for desktop and mobile.\n\nCreated an intermediate screen showing all payment options before opening native wallets.\n\nEvaluated button placement above and below product info for usability across devices.\n\nRebuilt and expanded the Copilot Pay component library across product cards, carousels, PDP side panels, checkout sheets, input fields, order summary, confirmation pages, and payment icons.\n\nStandardized design tokens, spacing, typography, light and dark modes, and color consolidation.\n\nBuilt prototypes and internal specs to align the work with cross-team design standards.`,
    },
    {
      id: "wallet-systems",
      layout: "image-on-color-block",
      heading: "Designing Across Native Wallets",
      body: `One of the core challenges was integrating multiple native wallet experiences, each with different branding, affordances, and interaction expectations, without making Copilot feel fragmented. The solution was an intermediate selection screen and a tighter component system that kept the transition into each wallet legible and predictable.`,
      images: [
        {
          src: "/assets/copilot-pay/Bang & Olufsen.jpg",
          avif: "/assets/copilot-pay/Bang & Olufsen.avif",
          webp: "/assets/copilot-pay/Bang & Olufsen.webp",
          alt: "Bang & Olufsen native checkout flow",
          aspectRatio: "16/9",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          containerBorder: "1px solid #d4d4d4",
          containerBorderRadius: "12px",
          containerShadow: "none",
          imagePaddingBlock: "clamp(0.5rem, 1.2vw, 0.875rem)",
          objectFit: "contain",
          objectPosition: "center center",
        },
      ],
      accentColor: "#f3efe7",
    },
    {
      id: "cross-platform",
      layout: "staggered-pair",
      images: [
        {
          src: "/assets/copilot-pay/Property 1=Default.jpg",
          avif: "/assets/copilot-pay/Property 1=Default.avif",
          webp: "/assets/copilot-pay/Property 1=Default.webp",
          alt: "Desktop Copilot Pay recommendation surface",
        },
        {
          src: "/assets/copilot-pay/Copilot pay 3.jpg",
          avif: "/assets/copilot-pay/Copilot pay 3.avif",
          webp: "/assets/copilot-pay/Copilot pay 3.webp",
          alt: "Mobile Copilot Pay multi-step checkout experience",
          aspectRatio: "16/9",
        },
      ],
    },
    {
      id: "challenges",
      layout: "text-only",
      heading: "Challenges",
      body: `Multiple native wallet UIs introduced different branding and interaction patterns.\n\nDesktop and mobile needed to feel consistent without ignoring platform-specific constraints.\n\nThe component library needed to scale quickly while remaining reusable for future AI commerce scenarios.\n\nExpress checkout had to slot naturally into both product cards and PDPs without breaking the shopping flow.`,
    },
    {
      id: "impact",
      layout: "quote",
      heading: "Impact",
      body: `Copilot Pay establishes Microsoft's first frictionless native checkout inside Copilot, creates a robust design-system foundation for future AI-assisted commerce, and supports seamless shopping across Microsoft platforms with scalable, consistent components.`,
      accentColor: "#222222",
    },
  ],
};

export const journeysCaseStudy: CaseStudy = {
  slug: "journeys",
  title: "Journeys",
  subtitle: "My Shopping for Microsoft Shopping",
  coverImage: {
    src: "/assets/journeys/Journeys L2.jpg",
    avif: "/assets/journeys/Journeys L2.avif",
    webp: "/assets/journeys/Journeys L2.webp",
    alt: "Journeys dashboard with personalized shopping modules",
    aspectRatio: "16/9",
  },
  heroImage: {
    src: "/assets/journeys/Journeys L2.jpg",
    avif: "/assets/journeys/Journeys L2.avif",
    webp: "/assets/journeys/Journeys L2.webp",
    alt: "Journeys dashboard with personalized shopping modules",
    aspectRatio: "16/9",
    objectFit: "cover",
    objectPosition: "center center",
  },
  transitionImages: [
    {
      src: "/assets/journeys/Browser wrapper.jpg",
      alt: "Journeys landing experience in Microsoft Shopping",
    },
    {
      src: "/assets/journeys/102.jpg",
      alt: "Journeys shopping dashboard with notifications and resume-shopping modules",
    },
    {
      src: "/assets/journeys/Shopping toast notification4.jpg",
      alt: "Journeys shopping notification toast surfaced on Windows",
    },
    {
      src: "/assets/journeys/202.jpg",
      alt: "Journeys shopping layout with style inspiration and shopping modules",
    },
    {
      src: "/assets/journeys/Saved products high information layout.jpg",
      alt: "Journeys saved products module with retailer comparisons",
    },
  ],
  heroHeadline: "Designing a calmer shopping hub around real user journeys",
  meta: {
    client: "My Shopping / Journeys | Microsoft Shopping",
    role: "Mid-level designer partnering with a principal designer",
    timeline: "Placeholder case study",
    platform: "Browser / Copilot / Microsoft ecosystem",
  },
  sections: [
    {
      id: "overview",
      layout: "sticky-split",
      stickyContent: {
        fullBleedImage: true,
        image: {
          src: "/assets/journeys/Browser wrapper.jpg",
          avif: "/assets/journeys/Browser wrapper.avif",
          webp: "/assets/journeys/Browser wrapper.webp",
          alt: "Journeys landing experience in Microsoft Shopping",
          aspectRatio: "16/9",
          objectFit: "cover",
          objectPosition: "center center",
        },
        tags: [
          "SHOPPING UX",
          "PERSONALIZATION",
          "AI COMMERCE",
          "SYSTEM THINKING",
        ],
        collateralImages: [
          {
            src: "/assets/journeys/Cold start.jpg",
            avif: "/assets/journeys/Cold start.avif",
            webp: "/assets/journeys/Cold start.webp",
            alt: "Journeys onboarding flow for following favorite stores",
            aspectRatio: "16/9",
            backgroundColor: "#f6f8fc",
            imagePaddingBlock: "clamp(0.5rem, 1.2vw, 0.875rem)",
            objectFit: "contain",
            objectPosition: "center center",
          },
          {
            src: "/assets/journeys/Connecting.jpg",
            avif: "/assets/journeys/Connecting.avif",
            webp: "/assets/journeys/Connecting.webp",
            alt: "Journeys account connection loading state",
            aspectRatio: "16/9",
            backgroundColor: "#f6f8fc",
            imagePaddingBlock: "clamp(0.5rem, 1.2vw, 0.875rem)",
            objectFit: "contain",
            objectPosition: "center center",
          },
          {
            src: "/assets/journeys/My profile.jpg",
            avif: "/assets/journeys/My profile.avif",
            webp: "/assets/journeys/My profile.webp",
            alt: "Journeys account connections and profile management",
            aspectRatio: "16/9",
            backgroundColor: "#f6f8fc",
            imagePaddingBlock: "clamp(0.5rem, 1.2vw, 0.875rem)",
            objectFit: "contain",
            objectPosition: "center center",
          },
          {
            src: "/assets/journeys/User launches Edge browser to see recommended product3.jpg",
            alt: "Journeys product detail experience with browser-side shopping recommendations",
            aspectRatio: "16/9",
            backgroundColor: "#f6f8fc",
            imagePaddingBlock: "clamp(0.5rem, 1.2vw, 0.875rem)",
            objectFit: "contain",
            objectPosition: "center center",
          },
        ],
      },
      scrollContent: {
        blocks: [
          {
            type: "text",
            heading: "Problem",
            body: `Online shopping involves multiple steps, platforms, and mental load. Users struggle to track their activity across products, retailers, and categories, and often feel uncertain about purchases, price drops, deals, and product discovery. The challenge was to create a central hub that simplifies shopping, helps users save money, and surfaces insights tailored to where they are in the journey.`,
          },
          {
            type: "text",
            heading: "Role & Collaboration",
            body: `I collaborated with a principal designer as a mid-level designer on this project. My work included designing three user flow scenarios, interaction models, and feed-based versus static hub layouts. I worked closely with PMs, engineers, and researchers to prototype and iterate while keeping the experience calm, visually clear, and practical.`,
          },
          {
            type: "text",
            heading: "Approach & Features",
            body: `We defined three journey stages. Early focused on discovery with highlights from recent activity, curated recommendations, insights on new brands or categories, recently viewed products, and buying guides. Mid focused on narrowing choices with price drops, top options with reasoning, product comparisons, tracked items, and store recommendations. Late and post-purchase focused on package tracking, pending cashback, complementary recommendations, Copilot prompts, and routine guides.

Key features I designed included activity summaries, recommendations with filters, insights modules, recently viewed items, buying guides, cashback and deals integration, and Copilot-powered chat prompts for follow-up questions. Feed-based layouts helped disperse dense information into a format that felt more digestible and easier to trust.`,
          },
          {
            type: "quote",
            body: "The work explored how a browser can surface holistic shopping intelligence that retailers alone cannot provide.",
          },
        ],
      },
    },
    {
      id: "discovery-entry-surface",
      layout: "full-width-image",
      disableCompactPadding: true,
      images: [
        {
          src: "/assets/journeys/Exploration 5.jpg",
          avif: "/assets/journeys/Exploration 5.avif",
          webp: "/assets/journeys/Exploration 5.webp",
          alt: "Journeys exploration surface with discovery cards and notifications",
          aspectRatio: "16/9",
        },
      ],
    },
    {
      id: "journey-stages",
      layout: "three-column-feature",
      heading: "Journey Stages",
      labels: ["EARLY", "MID", "LATE / POST-PURCHASE"],
      body: `Journeys was structured around changing user intent. The system shifts from exploration and inspiration, to comparison and confidence-building, to post-purchase tracking and support. That framing made it possible to prioritize the right content at the right moment instead of treating shopping like one generic\u00A0feed.`,
      images: [
        {
          src: "/assets/journeys/Returning user5.jpg",
          alt: "Journeys returning user view with personalized shopping context",
          aspectRatio: "16/9",
          objectFit: "cover",
          objectPosition: "center center",
        },
      ],
      accentColor: "#dce8ff",
    },
    {
      id: "recent-activity-surface",
      layout: "full-width-image",
      disableCompactPadding: true,
      images: [
        {
          src: "/assets/journeys/Journeys L22.jpg",
          avif: "/assets/journeys/Journeys L22.avif",
          webp: "/assets/journeys/Journeys L22.webp",
          alt: "Journeys recently viewed surface with category and product ranking",
          aspectRatio: "16/9",
        },
      ],
    },
    {
      id: "feed-based-clarity",
      layout: "image-on-color-block",
      heading: "Feed-Based Clarity",
      body: `A core design decision was testing feed-based layouts against more static hub models. The feed approach made recommendations, insights, tracked products, and follow-up prompts feel visually dispersed and easier to scan, which helped balance information density with clarity and reduced the sense of promotional overload.`,
      images: [
        {
          src: "/assets/journeys/High information layout6.jpg",
          avif: "/assets/journeys/High information layout6.avif",
          webp: "/assets/journeys/High information layout6.webp",
          alt: "Journeys high-information feed layout with dense recommendation modules",
          aspectRatio: "16/9",
          objectFit: "cover",
          objectPosition: "center center",
        },
      ],
      accentColor: "#edf5ff",
    },
    {
      id: "exploration-surface",
      layout: "full-width-image",
      disableCompactPadding: true,
      images: [
        {
          src: "/assets/journeys/Journeys L23.jpg",
          avif: "/assets/journeys/Journeys L23.avif",
          webp: "/assets/journeys/Journeys L23.webp",
          alt: "Journeys exploration feed with category-led shopping discovery",
          aspectRatio: "16/9",
        },
      ],
    },
    {
      id: "purchase-support-surface",
      layout: "full-width-image",
      disableCompactPadding: true,
      images: [
        {
          src: "/assets/journeys/Journeys L26.jpg",
          avif: "/assets/journeys/Journeys L26.avif",
          webp: "/assets/journeys/Journeys L26.webp",
          alt: "Journeys purchase support view with savings and delivery insights",
          aspectRatio: "16/9",
        },
      ],
    },
    {
      id: "outcome",
      layout: "text-only",
      heading: "Outcome",
      body: `The project was never flighted in Bing, but it informed the Journeys flows that later shipped in Microsoft Copilot. The work reinforced a broader product lesson: meaningful shopping assistance comes from combining content, context, and AI-driven insights in ways that do not look or behave like traditional retail surfaces.

    The case study now highlights key frames from onboarding, account connection, personalized feeds, and saved-product management so the story reads as a connected system rather than a single static screen.`,
    },
  ],
};

/**
 * Export array of case studies
 * Ready to be extended with additional studies
 */
export const caseStudies: CaseStudy[] = [
  businessConnectorsCaseStudy,
  copilotPayCaseStudy,
  journeysCaseStudy,
];

import { CaseStudy } from "../../types/caseStudy";

const asset = (name: string, extension: "jpg" | "png", alt: string, aspectRatio?: string) => ({
  src: `/assets/seagate-case-study/${name}.${extension}`,
  avif: `/assets/seagate-case-study/${name}.avif`,
  webp: `/assets/seagate-case-study/${name}.webp`,
  alt,
  aspectRatio,
});

export const seagateCaseStudy: CaseStudy = {
  slug: "seagate-technology",
  title: "Seagate Technology",
  subtitle: "Licensed gaming launches and enterprise storage communication",
  coverImage: {
    ...asset(
      "gow-hero",
      "jpg",
      "God of War Ragnarok Limited Edition Game Drive by Seagate",
      "16/10",
    ),
    mobileSrc: "/assets/seagate-case-study/gow-hero-mobile-900.jpg",
    mobileAvif: "/assets/seagate-case-study/gow-hero-mobile-900.avif",
    mobileWebp: "/assets/seagate-case-study/gow-hero-mobile-900.webp",
  },
  transitionImages: [
    asset("gow-hero", "jpg", "God of War Ragnarok Seagate launch artwork"),
    asset("gow-compatibility", "png", "God of War drive compatibility module"),
    asset("lightsaber-trio", "jpg", "Seagate Lightsaber Collection FireCuda SSDs"),
    asset("lightsaber-installed", "jpg", "Lightsaber FireCuda SSD installed in a gaming PC"),
    asset("lyve-full-page", "png", "Lyve Cloud Object Storage Service page"),
  ],
  heroHeadline: "Designing launch experiences across gaming, retail, and cloud storage",
  website: {
    label: "View God of War page",
    href: "https://www.seagate.com/products/gaming-drives/special-editions/god-of-war-ragnarok/",
  },
  meta: {
    client: "Seagate Technology",
    role: "Web and visual designer",
    timeline: "Short-term engagement",
    platform: "Seagate.com / Amazon / Lyve Cloud",
  },
  sections: [
    {
      id: "overview",
      layout: "text-only",
      sectionBackground: "#f5f5f5",
      sectionPadding: "3.75rem 0 0.5rem",
      heading: "Overview",
      body: `During a short engagement with Seagate Technology, I designed web experiences for a series of special-edition storage product launches, working within Seagate's existing responsive design system across its main site and Amazon. I also supported materials for the Lyve Cloud enterprise storage service. The work spanned two major entertainment licensing partnerships, Sony and PlayStation, and Lucasfilm and Disney, as well as content clarifying a technical product line for customers.`,
    },
    {
      id: "role",
      layout: "text-only",
      sectionBackground: "#f5f5f5",
      sectionPadding: "0.5rem 0 3.75rem",
      heading: "My Role",
      body: `I worked as a designer across three projects: God of War Ragnarok Special Edition, the Star Wars Lightsaber Collection, and Lyve Cloud. I completed the engagement on site with Seagate's team in Portland, Oregon, which supported close collaboration throughout the review process. I partnered with a copywriter on page content for each launch and reported to a senior designer who reviewed and approved final work. My role centered on curating and placing imagery within Seagate's established template system, choosing which layout best served each set of product photography, then adapting backgrounds, pacing, and emphasis to fit each partner's identity within Seagate's guidelines.`,
    },
    {
      id: "god-of-war",
      layout: "text-only",
      sectionBackground: "#ffffff",
      heading: "Project 1: God of War Ragnarok Special Edition",
      body: `The God of War Ragnarok Special Edition external drive launched on Seagate's main site and Amazon, and the Seagate product page remains live today. Seagate's product pages were built from a flexible responsive template rather than from scratch, so the core design work was selective: matching the right layout to the imagery provided and sequencing content to build a coherent story across the page. The experience also had to represent both PlayStation and Seagate accurately.

The process followed a consistent loop. I built a rough mockup, received feedback from the senior designer, revised, then handed the layout to a copywriter for content. A second design review followed the copy pass, leading to final revisions before launch.`,
    },
    {
      id: "god-of-war-product-closeup",
      layout: "full-width-image",
      sectionBackground: "#ffffff",
      sectionPadding: "1.5rem 0 clamp(4rem, 9vh, 6rem)",
      images: [
        {
          ...asset("gow-product-closeup", "jpg", "God of War Ragnarok Limited Edition Seagate Game Drive close-up", "16/10"),
          mobileSrc: "/assets/seagate-case-study/gow-product-closeup-mobile-900.jpg",
          mobileAvif: "/assets/seagate-case-study/gow-product-closeup-mobile-900.avif",
          mobileWebp: "/assets/seagate-case-study/gow-product-closeup-mobile-900.webp",
          objectFit: "contain",
          backgroundColor: "#ffffff",
          imagePaddingBlock: "clamp(1rem, 2vw, 1.5rem)",
          imagePaddingInline: "clamp(1rem, 2vw, 1.5rem)",
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
      ],
    },
    {
      id: "god-of-war-product-page",
      layout: "full-width-image",
      sectionBackground: "#ffffff",
      sectionPadding: "1.5rem 0 3.75rem",
      heading: "The Live Product Experience",
      body: `The product-detail interface presents commerce information clearly before the licensed story. Imagery, copy, configuration, purchase actions, and specifications were organized to remain legible within Seagate's responsive system.`,
      images: [
        {
          ...asset("gow-full-page", "png", "Live Seagate God of War Ragnarok site header and product-detail interface", "2400/1563"),
          objectFit: "cover",
          objectPosition: "top",
          zoomable: true,
          zoomAspectRatio: "1800/13500",
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
      ],
    },
    {
      id: "god-of-war-compatibility",
      layout: "full-width-image",
      sectionBackground: "#f5f5f5",
      heading: "Designing for Platform Compatibility",
      body: `After the product introduction, the page moved into a compatibility module that separated PlayStation 5 and PlayStation 4 use cases. The high-contrast design preserved Sony's hardware language while making compatibility information easy to scan.`,
      images: [
        {
          ...asset("gow-compatibility", "png", "PlayStation 5 and PlayStation 4 compatibility module for the God of War Seagate drive", "2400/1615"),
          objectFit: "cover",
          zoomable: true,
          zoomSrc: "/assets/seagate-case-study/gow-full-page.png",
          zoomAvif: "/assets/seagate-case-study/gow-full-page.avif",
          zoomWebp: "/assets/seagate-case-study/gow-full-page.webp",
          zoomAspectRatio: "1800/13500",
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
      ],
    },
    {
      id: "god-of-war-collaboration",
      layout: "full-width-image",
      sectionBackground: "#f5f5f5",
      sectionPadding: "1.5rem 0 3.75rem",
      images: [
        {
          ...asset("gow-ps5-collaboration", "jpg", "God of War Ragnarok collaboration artwork with DualSense controller and Seagate drive", "1707/960"),
          objectFit: "contain",
          hugHeightOnMobile: true,
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
      ],
    },
    {
      id: "amazon-aplus-banner",
      layout: "full-width-image",
      sectionBackground: "#ffffff",
      sectionPadding: "clamp(4rem, 9vh, 6rem) 0",
      heading: "Adapting the Launch for Amazon",
      body: `I adapted the same visual assets into Amazon's A+ Content module system. The stricter third-party format shifted the design focus toward content flow: how imagery and copy paced against one another within Amazon's fixed modules, and how the story could remain recognizable after losing the flexibility of Seagate's site templates.`,
      images: [
        {
          ...asset("gow-fimbulwinter", "png", "Amazon listing with manufacturer module reading Ready to Clash with Fimbulwinter", "4/3"),
          objectFit: "cover",
          objectPosition: "top",
          zoomable: true,
          zoomSrc: "/assets/seagate-case-study/gow-amazon-full-page.png",
          zoomAvif: "/assets/seagate-case-study/gow-amazon-full-page.avif",
          zoomWebp: "/assets/seagate-case-study/gow-amazon-full-page.webp",
          zoomAspectRatio: "1800/13279",
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
      ],
    },
    {
      id: "amazon-aplus-context",
      layout: "full-width-image",
      sectionBackground: "#f5f5f5",
      heading: "The Amazon Feature System",
      body: `The fixed modules translated compatibility and package details into a compact retail sequence. Showing these modules together makes the Amazon adaptation legible without repeating the campaign banner or the lifestyle image used earlier in the listing.`,
      images: [
        {
          ...asset("gow-amazon-features", "png", "Amazon A+ compatibility and package-content modules for the God of War Seagate drive", "2400/1625"),
          objectFit: "cover",
          zoomable: true,
          zoomSrc: "/assets/seagate-case-study/gow-amazon-full-page.png",
          zoomAvif: "/assets/seagate-case-study/gow-amazon-full-page.avif",
          zoomWebp: "/assets/seagate-case-study/gow-amazon-full-page.webp",
          zoomAspectRatio: "1800/13279",
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
      ],
    },
    {
      id: "lightsaber",
      layout: "text-only",
      sectionBackground: "#f5f5f5",
      heading: "Project 2: Star Wars Lightsaber Collection",
      body: `The Lightsaber Collection FireCuda SSD was the project I spent the most time on. It followed the same core process as Ragnarok, including imagery curation, two rounds of design feedback, and copywriter collaboration, but required a distinct visual identity. Rather than reuse the Ragnarok treatment, I adapted background styling and pacing to a Star Wars aesthetic while working within Lucasfilm, Disney, and Seagate guidelines.

    Unlike the God of War page, which remains live, the original Seagate Lightsaber page has since been taken down. Because the product was a limited edition, current listings and complete page records are increasingly difficult to find. The product and packaging remain documented through Seagate's official datasheet, retailer-hosted manufacturer imagery, and launch-period press coverage.`,
    },
    {
      id: "lightsaber-campaign",
      layout: "full-width-image",
      sectionBackground: "#ffffff",
      sectionPadding: "clamp(4rem, 9vh, 6rem) 0",
      heading: "A Distinct Licensed World",
      body: `The collection included interchangeable Luke Skywalker, Darth Vader, and Obi-Wan Kenobi faceplates. The imagery had to communicate both the collectible character system and the SSD's place inside a gaming setup, balancing cinematic presentation with a legible product story.`,
      images: [
        {
          ...asset("lightsaber-press-banner", "jpg", "Lightsaber Collection Special Edition FireCuda SSD campaign banner", "2/1"),
          hugHeightOnMobile: true,
          objectFit: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    },
    {
      id: "lightsaber-collection",
      layout: "full-width-image",
      sectionBackground: "#f5f5f5",
      heading: "The Complete Collection",
      body: `The collection image brings all three interchangeable character designs into one composition, making the product system easier to understand than a set of small side-by-side crops.`,
      images: [
        {
          ...asset("lightsaber-trio", "jpg", "Luke Skywalker, Darth Vader, and Obi-Wan Lightsaber FireCuda SSD variants", "1280/1130"),
          hugHeightOnMobile: true,
          objectFit: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    },
    {
      id: "lightsaber-lifestyle",
      layout: "full-width-image",
      sectionBackground: "#ffffff",
      heading: "Bringing the Product Into a World",
      body: `The landscape treatment gave the Luke Skywalker edition a cinematic setting and demonstrated how licensed atmosphere could support the product without overwhelming it.`,
      images: [
        {
          ...asset("lightsaber-desert", "png", "Luke Skywalker Lightsaber FireCuda SSD in a desert-inspired scene", "16/9"),
          hugHeightOnMobile: true,
          objectFit: "cover",
        },
      ],
    },
    {
      id: "lightsaber-installed",
      layout: "image-pair",
      sectionBackground: "#f5f5f5",
      sectionPadding: "clamp(4rem, 9vh, 6rem) 0",
      heading: "Installed Product Views",
      body: `The installed imagery shows how the RGB lightsaber detail reads in the environment where the SSD would actually live. The matched square presentation keeps both views at a sharper, more comparable scale.`,
      images: [
        {
          ...asset("lightsaber-vader-press", "jpg", "Darth Vader Lightsaber FireCuda SSD illuminated on a motherboard", "1/1"),
          objectFit: "cover",
          imageScale: 1.12,
          backgroundColor: "#ffffff",
        },
        {
          ...asset("lightsaber-installed", "jpg", "Luke Skywalker Lightsaber FireCuda SSD illuminated inside a gaming PC", "1/1"),
          objectFit: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    },
    {
      id: "lyve-cloud-overview",
      layout: "full-width-image",
      sectionBackground: "#ffffff",
      sectionPadding: "clamp(4rem, 9vh, 6rem) 0",
      heading: "Project 3: Lyve Cloud Storage Tiers",
      body: `This shorter engagement involved internal one-pagers, documentation, and website content designed to make Lyve Cloud's storage tiers easier for customers to understand. The work included a chart-style breakdown of tier differences, translating a technical product line into a clearer comparison of access, retention, and pricing models.

    The service page moves from a high-level product overview into migration, tier comparison, pricing, platform benefits, and ecosystem content. The full-page capture shows how those modules build a progressive explanation rather than beginning with dense technical documentation.`,
      images: [
        {
          ...asset("lyve-full-page", "png", "Full Lyve Cloud Object Storage Service page", "16/10"),
          objectFit: "cover",
          objectPosition: "top center",
          zoomable: true,
          zoomAspectRatio: "1800/8387",
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
      ],
    },
    {
      id: "lyve-pricing",
      layout: "full-width-image",
      sectionBackground: "#f5f5f5",
      sectionPadding: "clamp(4rem, 9vh, 6rem) 0",
      heading: "Making Storage Tiers Comparable",
      body: `The pricing module turns three service models into a direct visual comparison. Consistent card structure, parallel language, and aligned actions let customers scan capacity, commitment, and use-case differences without working through dense documentation first.`,
      images: [
        {
          ...asset("lyve-pricing-tiers", "png", "Lyve Cloud flexible storage pricing comparison with three service tiers", "2400/1250"),
          objectFit: "cover",
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
      ],
    },
    {
      id: "reflection",
      layout: "text-only",
      sectionBackground: "#f5f5f5",
      heading: "Reflection",
      body: `A few principles carried across all three projects.

Design within constraints, not from a blank page. The value was in judgment: choosing which layout served each image, sequencing a story across fixed templates, and knowing where a licensed partner's identity needed to bend the system without breaking it.

Two brands, one page. Every gaming launch required satisfying Seagate's guidelines and a licensing partner's, creating a recurring tension between staying on brand for the product and staying on brand for the license.

Feedback loops mattered more than first drafts. The mockup, feedback, revision, copy, review, and final structure meant the strongest version of the page rarely appeared in round one.`,
    },
    {
      id: "credits",
      layout: "text-only",
      sectionBackground: "#ffffff",
      heading: "Sources and Credits",
      body: `God of War product page and module captures: live Seagate product page.

    God of War Amazon A+ captures: manufacturer content hosted by Amazon, ASIN B0BKTNB5PD.

God of War collaboration artwork: press-hosted campaign image from TechPowerUp.

    Lightsaber product imagery: manufacturer marketing hosted by Newegg, item N82E16820248233, with campaign and installed views from Vortez and HotHardware.

    Lyve Cloud page and pricing captures: official Seagate Lyve Cloud Object Storage Service page.`,
    },
  ],
};
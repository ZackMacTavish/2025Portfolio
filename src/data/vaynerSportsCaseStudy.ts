import { CaseStudy } from "../../types/caseStudy";

const asset = (name: string, alt: string, aspectRatio = "16/9") => ({
  src: `/assets/vaynersports-case-study/${name}.jpg`,
  avif: `/assets/vaynersports-case-study/${name}.avif`,
  webp: `/assets/vaynersports-case-study/${name}.webp`,
  alt,
  aspectRatio,
});

const autoplayVideo = (name: string, ariaLabel: string) => ({
  src: `/assets/vaynersports-case-study/${name}.mp4`,
  poster: `/assets/vaynersports-case-study/${name}-poster.jpg`,
  ariaLabel,
  autoplayOnView: true,
  loop: true,
  muted: true,
});

export const vaynerSportsCaseStudy: CaseStudy = {
  slug: "vaynersports",
  title: "VaynerSports",
  subtitle: "An exploratory rebrand pitch for a modern athlete agency",
  coverImage: asset("hero", "VaynerSports pitch homepage with modern day athlete positioning"),
  heroImage: asset("hero", "VaynerSports pitch homepage with modern day athlete positioning"),
  transitionImages: [
    asset("menu", "VaynerSports navigation concept"),
    asset("clients-grid", "VaynerSports athlete grid"),
    asset("athlete-modal", "VaynerSports athlete profile concept"),
    asset("project-nike", "VaynerSports Nike partnership project"),
    asset("hero", "VaynerSports pitch homepage"),
  ],
  heroHeadline: "An ambitious digital direction for the modern day athlete",
  meta: {
    client: "VaynerSports / Varfaj Partners",
    role: "UX/UI and Brand Direction",
    timeline: "Pitch Project",
    platform: "Web / Brand / Motion",
  },
  sections: [
    {
      id: "logo-reveal",
      layout: "video",
      sectionBackground: "#ffffff",
      sectionPadding: "clamp(4rem, 9vh, 6rem) 0",
      video: {
        ...autoplayVideo("logo-reveal", "Animated VaynerSports logo reveal"),
        objectFit: "contain",
        contentScale: 0.58,
        backgroundColor: "#ffffff",
        contentClipInset: "3px 5px 3px 3px",
        border: "1px solid #d1d5db",
      },
    },
    {
      id: "intro",
      layout: "sticky-split",
      stickyContent: {
        image: {
          ...asset("clients-compact", "VaynerSports compact athlete roster concept"),
          objectFit: "cover",
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
        tags: ["UX/UI", "BRAND DIRECTION", "WEB DESIGN", "PITCH WORK", "MOTION"],
      },
    },
    {
      id: "background",
      layout: "text-only",
      sectionBackground: "#f5f5f5",
      sectionPadding: "3.75rem 0 0.5rem",
      heading: "Background",
      body: `VaynerSports is a sports agency under VaynerX, Gary Vaynerchuk's media and marketing organization. Varfaj Partners regularly built speculative pitch work to bring in new clients, and a proposed rebrand of the VaynerSports website was one of those pitches.`,
    },
    {
      id: "my-role",
      layout: "text-only",
      sectionBackground: "#f5f5f5",
      sectionPadding: "0.5rem 0 3.75rem",
      heading: "My Role",
      body: `I designed exploratory concepts for a rebranded VaynerSports website. Because this was pitch work rather than a scoped client engagement, there was more room to experiment. I pushed toward a more ambitious direction than a typical client project might allow, using the pitch to explore ideas outside the constraints of an established brand system.`,
    },
    {
      id: "design-direction",
      layout: "full-width-image",
      sectionBackground: "#ffffff",
      sectionPadding: "clamp(4rem, 9vh, 6rem) 0",
      heading: "Design Direction",
      body: `The proposed system paired a dark, atmospheric sports environment with stadium green, warm metallic typography, and oversized product imagery. Vertical navigation and a compact monogram gave the experience a distinct editorial structure instead of resembling a conventional agency site.`,
      images: [
        {
          ...asset("menu", "VaynerSports pitch navigation with athlete and product imagery"),
          objectFit: "cover",
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
      ],
    },
    {
      id: "athlete-discovery",
      layout: "image-pair",
      stackImages: true,
      sectionBackground: "#f5f5f5",
      sectionPadding: "clamp(4rem, 9vh, 6rem) 0",
      heading: "Athlete Discovery",
      images: [
        {
          ...asset("clients-list", "VaynerSports athlete list view"),
          objectFit: "cover",
        },
        {
          ...asset("clients-grid", "VaynerSports athlete grid view"),
          objectFit: "cover",
        },
      ],
    },
    {
      id: "athlete-profile",
      layout: "full-width-image",
      sectionBackground: "#ffffff",
      sectionPadding: "clamp(4rem, 9vh, 6rem) 0",
      heading: "Athlete Profiles",
      body: `Individual athlete profiles used a focused modal layer to keep roster browsing quick while surfacing team, position, and social links. The translucent panel preserved the field environment beneath the content.`,
      images: [
        {
          ...asset("athlete-modal", "Kyle Allen athlete profile concept for VaynerSports"),
          objectFit: "cover",
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
      ],
    },
    {
      id: "site-flow-motion",
      layout: "video",
      sectionBackground: "#f5f5f5",
      sectionPadding: "clamp(4rem, 9vh, 6rem) 0",
      heading: "Site Flow",
      body: `This broader prototype moves from the positioning statement into athlete discovery and the primary navigation system. It helped the pitch feel like a connected digital experience rather than a sequence of static comps.`,
      video: autoplayVideo("site-flow-motion", "Animated VaynerSports website flow"),
    },
    {
      id: "partnership-projects",
      layout: "image-pair",
      stackImages: true,
      sectionBackground: "#ffffff",
      sectionPadding: "clamp(4rem, 9vh, 6rem) 0",
      heading: "Partnership Projects",
      images: [
        {
          ...asset("project-nike", "VaynerSports Nike partnership project concept"),
          objectFit: "cover",
        },
        {
          ...asset("project-johnnie-walker", "VaynerSports Johnnie Walker partnership project concept"),
          objectFit: "cover",
        },
      ],
    },
    {
      id: "interaction-motion",
      layout: "video",
      sectionBackground: "#f5f5f5",
      sectionPadding: "clamp(4rem, 9vh, 6rem) 0",
      heading: "Interaction Exploration",
      body: `The interactive prototype tested transitions between roster views and athlete detail states, demonstrating how the experimental visual language could still support clear browsing behavior.`,
      video: autoplayVideo("athlete-motion", "Animated VaynerSports athlete browsing prototype"),
    },
    {
      id: "contact",
      layout: "full-width-image",
      sectionBackground: "#ffffff",
      sectionPadding: "clamp(4rem, 9vh, 6rem) 0",
      heading: "Contact Experience",
      images: [
        {
          ...asset("contact", "VaynerSports contact form pitch concept"),
          objectFit: "cover",
          containerBorder: "1px solid var(--border, #d1d5db)",
        },
      ],
    },
    {
      id: "outcome",
      layout: "text-only",
      sectionBackground: "#f5f5f5",
      sectionPadding: "clamp(4rem, 9vh, 6rem) 0",
      heading: "Outcome",
      body: `The pitch was not ultimately selected, and VaynerSports did not move forward with Varfaj Partners for the rebrand. Even so, it remains a strong example of the exploratory and ambitious design work Varfaj encouraged internally, and one of the more enjoyable experimental projects from my time there.`,
    },
    {
      id: "team",
      layout: "text-only",
      sectionBackground: "#ffffff",
      heading: "Team",
      body: `Pitch Client: VaynerSports\n\nAgency: Varfaj Partners\n\nUX/UI and Brand Direction: Zachary MacTavish`,
    },
  ],
};

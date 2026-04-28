/**
 * A reusable image object for case study content
 * Supports responsive format sources and optional sizing metadata
 */
interface CaseStudyImage {
  /** Primary image source URL/path */
  src: string;

  /** Descriptive alt text for accessibility */
  alt: string;

  /** Optional AVIF source URL/path */
  avif?: string;

  /** Optional WebP source URL/path */
  webp?: string;

  /** Optional aspect ratio hint (e.g. "3/2", "16/9", "1/1") */
  aspectRatio?: string;

  /** Optional intrinsic width in pixels */
  width?: number;

  /** Optional intrinsic height in pixels */
  height?: number;
}

/**
 * A single section of the case study page
 * Each section can have different layout configurations and content types
 */
interface CaseStudySection {
  /** Unique identifier for the section */
  id: string;

  /**
   * Layout type determines how the section's content is rendered
   * - text-left-image-right: Text content on left, images on right
   * - text-right-image-left: Text content on right, images on left
   * - full-width-image: Single image spanning full width
   * - image-pair: Two images side by side
   * - gallery-grid: Multiple images in grid layout
   * - text-only: Only text content, no images
   * - quote: Quote or testimonial layout
   * - sticky-split: Sticky media left with scrolling content right
   * - parallax-reveal: Scroll-reactive parallax image section
   * - image-on-color-block: Media over a color block with optional accent
   * - asymmetric-mosaic: Uneven image mosaic composition
   * - image-carousel: Horizontal image carousel section
   * - three-column-feature: Three-column structured feature layout
   * - staggered-pair: Two-image staggered composition
   */
  layout:
    | "text-left-image-right"
    | "text-right-image-left"
    | "full-width-image"
    | "image-pair"
    | "gallery-grid"
    | "text-only"
    | "quote"
    | "sticky-split"
    | "parallax-reveal"
    | "image-on-color-block"
    | "asymmetric-mosaic"
    | "image-carousel"
    | "three-column-feature"
    | "staggered-pair";

  /** Optional heading for the section */
  heading?: string;

  /**
   * Optional body text content
   * Supports multiple paragraphs separated by \n\n (double newlines)
   */
  body?: string;

  /**
   * Optional array of images for the section
   * Number and usage depend on the layout type
   */
  images?: CaseStudyImage[];

  /** Optional accent color for sections such as image-on-color-block or quote */
  accentColor?: string;

  /**
   * Optional sticky media/content payload for sticky-split layouts
   * Includes primary image, optional tags, and optional supporting thumbnails
   */
  stickyContent?: {
    /** Primary sticky image shown in the left column */
    image: CaseStudyImage;

    /** Optional service/skill tags rendered below sticky media */
    tags?: string[];

    /** Optional supporting collateral images shown below tags */
    collateralImages?: CaseStudyImage[];
  };

  /**
   * Optional scrolling content blocks for sticky-split right column
   * Supports mixed content types such as text, image, carousel, and quote
   */
  scrollContent?: {
    blocks: Array<{
      /** Block content renderer type */
      type: "text" | "image" | "carousel" | "quote";

      /** Optional block heading */
      heading?: string;

      /** Optional block body text */
      body?: string;

      /** Optional block image array */
      images?: CaseStudyImage[];
    }>;
  };

  /** Optional list of labels used by layouts such as three-column-feature */
  labels?: string[];

  /** Optional image caption (preferred over using body for captions) */
  caption?: string;

  /** Optional parallax speed factor from 0.0 to 1.0 */
  parallaxSpeed?: number;
}

/**
 * Metadata shown in the case study hero bar
 * Provides context about the project at a glance
 */
interface CaseStudyMeta {
  /** Client or company name */
  client: string;

  /** Role or title of the work performed */
  role: string;

  /** Project timeline (e.g., "3 months", "Q1 2025") */
  timeline: string;

  /** Platform or medium (e.g., "Web", "iOS", "Print") */
  platform: string;
}

/**
 * The complete case study object
 * Serves as the single source of truth for all case study components
 */
interface CaseStudy {
  /** URL-friendly identifier for the case study */
  slug: string;

  /** Main title of the case study */
  title: string;

  /** Subtitle providing additional context */
  subtitle: string;

  /**
   * Cover image displayed at the top of the case study
   * Used as hero visual and in listing previews
   */
  coverImage: CaseStudyImage;

  /**
   * Array of exactly 5 transition images
   * Used for visual storytelling between major sections
   */
  transitionImages: CaseStudyImage[];

  /** Main headline displayed in the hero section */
  heroHeadline: string;

  /** Metadata object containing client, role, timeline, and platform */
  meta: CaseStudyMeta;

  /** Array of content sections that make up the body of the case study */
  sections: CaseStudySection[];
}

export type { CaseStudy, CaseStudyImage, CaseStudyMeta, CaseStudySection };

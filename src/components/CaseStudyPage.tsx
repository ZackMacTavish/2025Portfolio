import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactNode } from "react";
import { CaseStudy, CaseStudySection } from "../../types/caseStudy";
import ResponsiveImage from "./ResponsiveImage";
import ImageCarousel from "./ImageCarousel";

interface CaseStudyPageProps {
  /** The complete case study object containing all page content and metadata */
  caseStudy: CaseStudy;

  /** Optional next project for navigation footer */
  nextProject?: { title: string; slug: string };

  /** Optional callback when user clicks next project link */
  onNextProject?: (slug: string) => void;

  /** Optional content rendered at top of hero module (e.g., back button) */
  topAction?: ReactNode;
}

const Page = styled.div`
  min-height: 100vh;
  background: white;
`;

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 90vh;
  background: #f5f5f5;
  padding: 5rem 1.5rem 10rem;

  @media (min-width: 768px) {
    min-height: 96vh;
    padding: 7rem 1.5rem 14rem;
  }

  @media (max-width: 900px) {
    min-height: auto;
    padding: 4.5rem 1.25rem 2rem;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 64rem;
`;

const HeroTopAction = styled.div`
  margin-bottom: 1.25rem;
`;

const HeroPeekImageWrap = styled.div`
  position: absolute;
  left: 50%;
  bottom: -32%;
  transform: translateX(-50%);
  width: min(72rem, 92vw);
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    bottom: -18%;
    width: 120vw;
  }

  @media (max-width: 900px) {
    position: relative;
    left: auto;
    bottom: auto;
    transform: none;
    width: 100%;
    max-width: 100%;
    margin: 1rem auto 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0.75rem;
  }
`;

const HeroPeekImage = styled(ResponsiveImage)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`;

const MetadataGrid = styled.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MetadataItem = styled.div`
  text-align: left;
`;

const MetadataLabel = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const MetadataValue = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0;
`;

const Headline = styled(motion.h1)`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: #111827;
  max-width: 56rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`;

const SectionsContainer = styled.div``;

const Section = styled.section<{ $background: string; $compact: boolean }>`
  background: ${(props) => props.$background};
  padding: ${(props) => (props.$compact ? "0" : "3.75rem 0")};
`;

const SectionContent = styled.div`
  margin: 0 auto;
  max-width: 64rem;
`;

const SectionHeading = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Paragraph = styled.p`
  margin: 0;
  max-width: 68ch;
  font-size: 1rem;
  line-height: 1.625;
  color: #666666;
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TextColumn = styled(motion.div)``;

const ImageColumn = styled(motion.div)`
  overflow: hidden;
  border-radius: 0.5rem;
`;

const ImageElement = styled(ResponsiveImage)`
  width: 100%;
  height: 24rem;

  @media (min-width: 768px) {
    height: 100%;
  }
`;

const FullWidthImageContainer = styled(motion.div)`
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const ImagePairGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Caption = styled.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: #8b8b8b;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GalleryImage = styled(motion.div)`
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover img {
    transform: scale(1.02);
  }
`;

const GalleryImageElement = styled(ResponsiveImage)`
  width: 100%;

  img {
    transition: transform 0.3s ease-out;
  }
`;

const MosaicGrid = styled.div<{ $count: number }>`
  display: grid;
  gap: 1rem;

  ${(props) => {
    if (props.$count === 3) {
      return `
        grid-template-columns: 1.2fr 0.8fr;
        grid-template-rows: auto auto;
      `;
    }

    if (props.$count === 4) {
      return `
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto;
      `;
    }

    return `
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(200px, auto);
    `;
  }}

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    grid-template-rows: auto;
    grid-auto-rows: auto;
  }
`;

const MosaicCell = styled(motion.div)<{ $index: number; $count: number }>`
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;

  ${(props) => {
    if (props.$count === 3) {
      if (props.$index === 0) {
        return `
          grid-column: 1;
          grid-row: 1 / span 2;
        `;
      }
      if (props.$index === 1) {
        return `
          grid-column: 2;
          grid-row: 1;
        `;
      }
      if (props.$index === 2) {
        return `
          grid-column: 2;
          grid-row: 2;
        `;
      }
    }

    if (props.$count === 4) {
      if (props.$index === 0) {
        return `
          grid-column: 1 / span 2;
          grid-row: 1;
        `;
      }
      if (props.$index === 1) {
        return `
          grid-column: 3;
          grid-row: 1;
        `;
      }
      if (props.$index === 2) {
        return `
          grid-column: 1;
          grid-row: 2;
        `;
      }
      if (props.$index === 3) {
        return `
          grid-column: 2 / span 2;
          grid-row: 2;
        `;
      }
    }

    if (props.$count >= 5 && props.$index === 0) {
      return `
        grid-column: 1 / span 2;
      `;
    }

    return "";
  }}

  @media (max-width: 768px) {
    grid-column: auto !important;
    grid-row: auto !important;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

const MosaicResponsiveImage = styled(ResponsiveImage)`
  width: 100%;

  img {
    transition: transform 0.5s ease-out;
  }
`;

const ThreeColGrid = styled.section`
  display: grid;
  grid-template-columns: 0.8fr 2.2fr;
  grid-template-rows: auto auto;
  gap: 1.5rem;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3.5rem 6%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2.5rem 1.25rem;
  }
`;

const LabelsColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1 / span 2;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const FeatureLabel = styled.span<{ $active: boolean }>`
  font-size: 0.85rem;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${(props) => (props.$active ? "#000" : "#bbb")};
  font-weight: ${(props) => (props.$active ? 700 : 600)};

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`;

const FeatureImageColumn = styled.div`
  position: relative;
  grid-column: 2;
  grid-row: 1;
`;

const FeatureColorBlock = styled(motion.div)<{ $accentColor: string }>`
  position: absolute;
  inset: 0;
  margin: -20px;
  border-radius: 14px;
  z-index: 0;
  background: ${(props) => props.$accentColor};
`;

const FeatureImageWrap = styled(motion.div)`
  position: relative;
  z-index: 1;
`;

const FeatureImage = styled(ResponsiveImage)`
  width: 100%;
`;

const FeatureTextColumn = styled(motion.div)`
  grid-column: 2;
  grid-row: 2;
`;

const FeatureSubheading = styled.h3`
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #555;
`;

const FeatureTextBody = styled(SectionBody)`
  gap: 0.45rem;
`;

const ScrollTextBody = styled(SectionBody)`
  gap: 0.6rem;
`;

const StaggeredPairWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;
  width: 100%;
  max-width: none;
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.25rem;
  }
`;

const StaggeredLeft = styled(motion.div)`
  border-radius: 12px;
  overflow: hidden;
`;

const StaggeredRight = styled(motion.div)`
  margin-top: 0;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const StaggeredImage = styled(ResponsiveImage)`
  width: 100%;

  img {
    object-fit: contain;
  }
`;

const StaggeredCaption = styled.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: #888;
`;

const CenterTextBlock = styled.div`
  margin: 0 auto;
  max-width: 45rem;
`;

const CenterText = styled(motion.div)``;

const TextOnlyParagraph = styled(Paragraph)`
  font-size: clamp(1rem, 1.15vw, 1.15rem);
  line-height: 1.65;
  max-width: 62ch;
  text-wrap: pretty;
`;

const QuoteWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem 6%;
`;

const QuoteContent = styled(motion.div)<{ $accentColor?: string }>`
  border-left: 3px solid ${(props) => props.$accentColor || "#333"};
  padding-left: 2rem;
  margin-left: 0;

  ${(props) =>
    props.$accentColor
      ? `
    background: ${props.$accentColor}12;
    padding: 3rem 2.5rem;
    border-radius: 0 12px 12px 0;
  `
      : ""}
`;

const QuoteText = styled.p`
  margin: 0;
  text-align: left;
  font-size: clamp(1.2rem, 2.1vw, 1.55rem);
  font-style: italic;
  line-height: 1.5;
  color: #1a1a1a;
  text-wrap: balance;
`;

const QuoteAttribution = styled.cite`
  display: block;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999;
`;

const StickySplitWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 0 4rem;
`;

const StickyColumn = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0;
  background: white;
`;

const StickyMediaPin = styled.div`
  position: static;
  width: min(65vw, 1080px);
  margin: 0 auto;
  padding-top: 1.5rem;

  @media (max-width: 1024px) {
    width: min(72vw, 980px);
  }

  @media (max-width: 768px) {
    width: calc(100vw - 2.5rem);
    padding-top: 1rem;
  }
`;

const StickyHeroFrame = styled.div`
  min-height: 0;
  height: clamp(340px, 46vw, 680px);

  @media (max-width: 768px) {
    height: clamp(260px, 58vw, 460px);
  }
`;

const StickyHeroImage = styled(ResponsiveImage)`
  height: 100%;
`;

const TagsRow = styled.div`
  margin-top: 1rem;
  padding: 0 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`;

const Tag = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888;
  padding: 0.25rem 0;
`;

const TagDivider = styled.span`
  color: #9a9a9a;
  margin: 0 0.25rem;
`;

const CollateralMediaWrap = styled.div`
  margin-top: 1rem;
  padding: 0 0 1.25rem;
`;

const ScrollColumn = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 3.5rem 0 3rem;
  background: #f0efeb;

  > * {
    width: min(65vw, 1080px);
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 1024px) {
    > * {
      width: min(72vw, 980px);
    }
  }

  @media (max-width: 768px) {
    padding: 2.5rem 0 2.5rem;

    > * {
      width: calc(100vw - 2.5rem);
    }
  }
`;

const ScrollBlock = styled(motion.div)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const QuoteLeftAligned = styled.p`
  margin: 0;
  border-left: 3px solid currentColor;
  padding-left: 1.5rem;
  text-align: left;
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5;
  color: #222;
`;

const ParallaxRevealWrapper = styled.section`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    min-height: 80vh;
  }
`;

const ParallaxImageLayer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: min(92vh, 920px);

  @media (max-width: 768px) {
    height: min(78vh, 620px);
  }
`;

const ParallaxRevealImage = styled(ResponsiveImage)`
  height: 100%;
  border-radius: 0;
`;

const ParallaxTextLayer = styled.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 6% 3.5rem;
  background: white;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`;

const ParallaxHeading = styled(motion.h2)`
  color: #111;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`;

const ParallaxBody = styled(motion.p)`
  margin: 0;
  color: #222;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 540px;
`;

const ColorBlockSection = styled.section`
  position: relative;
  padding: 3.5rem 6%;
`;

const ColorBlockInner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
`;

const ColorBlock = styled(motion.div)<{ $accentColor: string }>`
  position: absolute;
  top: 15%;
  bottom: 5%;
  left: 8%;
  right: -2%;
  z-index: 0;
  border-radius: 16px;
  background: ${(props) => props.$accentColor};

  @media (max-width: 768px) {
    top: 10%;
    bottom: 8%;
    left: 4%;
    right: -1%;
  }
`;

const ElevatedImageWrap = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 85%;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.15),
    0 8px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

const ColorBlockImage = styled(ResponsiveImage)`
  width: 100%;
`;

const ColorBlockText = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 2.5rem auto 0;
  text-align: left;
`;

const NextProjectSection = styled.section`
  border-top: 1px solid #e5e7eb;
  background: white;
  padding: 4rem 1.5rem 6rem;

  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;

const NextProjectContent = styled.div`
  margin: 0 auto;
  max-width: 64rem;
`;

const NextProjectButton = styled(motion.button)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const NextProjectLabel = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  color: #a3a3a3;
  text-transform: uppercase;
  margin: 0;
`;

const NextProjectTitle = styled.h3`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 1.875rem;
  }
`;

const NextProjectArrow = styled.div`
  font-size: 1.5rem;
  color: #a3a3a3;
  transition: color 200ms;

  ${NextProjectButton}:hover & {
    color: #111827;
  }
`;

const TEXT_TRANSITION = {
  duration: 0.7,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

const IMAGE_TRANSITION = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

const VIEWPORT_ONCE = { once: true, amount: 0.2 };

const IMAGE_HEAVY_LAYOUTS = new Set<CaseStudySection["layout"]>([
  "full-width-image",
  "parallax-reveal",
  "image-pair",
  "staggered-pair",
]);

const SELF_MANAGED_SECTION_LAYOUTS = new Set<CaseStudySection["layout"]>([
  "sticky-split",
  "parallax-reveal",
]);

/**
 * CaseStudyPage
 *
 * A full case study page component that renders a structured layout with
 * metadata, headline, and dynamically rendered sections based on layout types.
 * Features scroll-triggered animations and responsive multi-column layouts.
 *
 * @example
 * <CaseStudyPage
 *   caseStudy={caseStudyData}
 *   nextProject={{ title: "Next Project", slug: "next-slug" }}
 *   onNextProject={(slug) => navigate(`/case-study/${slug}`)}
 * />
 */
export default function CaseStudyPage({
  caseStudy,
  nextProject,
  onNextProject,
  topAction,
}: CaseStudyPageProps) {
  // Split multi-paragraph text by \n\n
  const parseBody = (text?: string): string[] => {
    if (!text) return [];
    return text.split("\n\n").filter((p) => p.trim());
  };

  const toAlphaBackground = (accentColor?: string): string | null => {
    if (!accentColor) return null;
    const hex = accentColor.trim();
    const shortHexMatch = /^#([0-9a-fA-F]{3})$/;
    const longHexMatch = /^#([0-9a-fA-F]{6})$/;

    if (shortHexMatch.test(hex)) {
      const [, short] = hex.match(shortHexMatch) as RegExpMatchArray;
      const r = parseInt(short[0] + short[0], 16);
      const g = parseInt(short[1] + short[1], 16);
      const b = parseInt(short[2] + short[2], 16);
      return `rgba(${r}, ${g}, ${b}, 0.06)`;
    }

    if (longHexMatch.test(hex)) {
      const [, long] = hex.match(longHexMatch) as RegExpMatchArray;
      const r = parseInt(long.slice(0, 2), 16);
      const g = parseInt(long.slice(2, 4), 16);
      const b = parseInt(long.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, 0.06)`;
    }

    return null;
  };

  const getSectionBackground = (section: CaseStudySection, isOdd: boolean): string => {
    const accentBg = toAlphaBackground(section.accentColor);
    if (accentBg) return accentBg;
    return isOdd ? "white" : "#f5f5f5";
  };

  // Metadata bar component
  const MetadataBar = () => (
    <MetadataGrid>
      <MetadataItem>
        <MetadataLabel>Client</MetadataLabel>
        <MetadataValue>{caseStudy.meta.client}</MetadataValue>
      </MetadataItem>
      <MetadataItem>
        <MetadataLabel>Role</MetadataLabel>
        <MetadataValue>{caseStudy.meta.role}</MetadataValue>
      </MetadataItem>
      <MetadataItem>
        <MetadataLabel>Timeline</MetadataLabel>
        <MetadataValue>{caseStudy.meta.timeline}</MetadataValue>
      </MetadataItem>
      <MetadataItem>
        <MetadataLabel>Platform</MetadataLabel>
        <MetadataValue>{caseStudy.meta.platform}</MetadataValue>
      </MetadataItem>
    </MetadataGrid>
  );

  // Section renderers
  const renderTextLeftImageRight = (section: CaseStudySection) => (
    <div key={section.id}>
      <TwoColumnGrid>
        {/* Text Column */}
        <TextColumn
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={TEXT_TRANSITION}
        >
          {section.heading && (
            <SectionHeading>{section.heading}</SectionHeading>
          )}
          <SectionBody>
            {parseBody(section.body).map((paragraph, idx) => (
              <Paragraph key={idx}>{paragraph}</Paragraph>
            ))}
          </SectionBody>
        </TextColumn>

        {/* Image Column */}
        {section.images && section.images[0] && (
          <ImageColumn
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={IMAGE_TRANSITION}
          >
            <ImageElement
              src={section.images[0].src}
              alt={section.images[0].alt}
              avif={section.images[0].avif}
              webp={section.images[0].webp}
              aspectRatio={section.images[0].aspectRatio || "3/2"}
              borderRadius="8px"
              objectFit="cover"
            />
          </ImageColumn>
        )}
      </TwoColumnGrid>
    </div>
  );

  const renderTextRightImageLeft = (section: CaseStudySection) => (
    <div key={section.id}>
      <TwoColumnGrid>
        {/* Image Column */}
        {section.images && section.images[0] && (
          <ImageColumn
            style={{ order: 2 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={IMAGE_TRANSITION}
          >
            <ImageElement
              src={section.images[0].src}
              alt={section.images[0].alt}
              avif={section.images[0].avif}
              webp={section.images[0].webp}
              aspectRatio={section.images[0].aspectRatio || "3/2"}
              borderRadius="8px"
              objectFit="cover"
            />
          </ImageColumn>
        )}

        {/* Text Column */}
        <TextColumn
          style={{ order: 1 }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={TEXT_TRANSITION}
        >
          {section.heading && (
            <SectionHeading>{section.heading}</SectionHeading>
          )}
          <SectionBody>
            {parseBody(section.body).map((paragraph, idx) => (
              <Paragraph key={idx}>{paragraph}</Paragraph>
            ))}
          </SectionBody>
        </TextColumn>
      </TwoColumnGrid>
    </div>
  );

  const renderFullWidthImage = (section: CaseStudySection) => (
    <div key={section.id}>
      <FullWidthImageContainer
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={VIEWPORT_ONCE}
        transition={IMAGE_TRANSITION}
      >
        {section.images && section.images[0] && (
          <ImageElement
            src={section.images[0].src}
            alt={section.images[0].alt}
            avif={section.images[0].avif}
            webp={section.images[0].webp}
            aspectRatio={section.images[0].aspectRatio || "16/9"}
            borderRadius="8px"
            objectFit="cover"
            style={{ width: "100%" }}
          />
        )}
      </FullWidthImageContainer>
      {(section.caption || section.body) && <Caption>{section.caption || section.body}</Caption>}
    </div>
  );

  const renderImagePair = (section: CaseStudySection) => (
    <div key={section.id}>
      {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
      <ImagePairGrid>
        {section.images &&
          section.images.slice(0, 2).map((image, idx) => (
            <GalleryImage
              key={idx}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT_ONCE}
              transition={{
                ...IMAGE_TRANSITION,
                delay: idx * 0.15,
              }}
            >
              <GalleryImageElement
                src={image.src}
                alt={image.alt}
                avif={image.avif}
                webp={image.webp}
                aspectRatio={image.aspectRatio || "3/2"}
                borderRadius="0"
                objectFit="contain"
                style={{ height: "26rem" }}
              />
            </GalleryImage>
          ))}
      </ImagePairGrid>
    </div>
  );

  const renderGalleryGrid = (section: CaseStudySection) => (
    <div key={section.id}>
      {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
      <ImageGrid>
        {section.images &&
          section.images.map((image, idx) => (
            <GalleryImage
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT_ONCE}
              whileHover={{ scale: 1.02 }}
              transition={{
                ...IMAGE_TRANSITION,
                delay: idx * 0.1,
              }}
            >
              <GalleryImageElement
                src={image.src}
                alt={image.alt}
                avif={image.avif}
                webp={image.webp}
                aspectRatio={image.aspectRatio || "1/1"}
                borderRadius="8px"
                objectFit="cover"
              />
            </GalleryImage>
          ))}
      </ImageGrid>
    </div>
  );

  const renderAsymmetricMosaic = (section: CaseStudySection) => {
    const images = section.images || [];

    return (
      <div key={section.id}>
        {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
        <MosaicGrid $count={images.length}>
          {images.map((image, idx) => (
            <MosaicCell
              key={`${image.src}-${idx}`}
              $index={idx}
              $count={images.length}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                ...TEXT_TRANSITION,
                delay: idx * 0.08,
              }}
            >
              <MosaicResponsiveImage
                src={image.src}
                alt={image.alt}
                avif={image.avif}
                webp={image.webp}
                aspectRatio={image.aspectRatio || "4/3"}
                borderRadius="10px"
                objectFit="cover"
              />
            </MosaicCell>
          ))}
        </MosaicGrid>
      </div>
    );
  };

  const renderThreeColumnFeature = (section: CaseStudySection) => {
    const image = section.images?.[0];
    const labels = section.labels || [];

    return (
      <ThreeColGrid key={section.id}>
        <LabelsColumn
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={TEXT_TRANSITION}
        >
          {labels.map((label, idx) => (
            <FeatureLabel key={`${label}-${idx}`} $active={idx === 0}>
              {label}
            </FeatureLabel>
          ))}
        </LabelsColumn>

        <FeatureImageColumn>
          {image && (
            <FeatureImageWrap
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={IMAGE_TRANSITION}
            >
              <FeatureImage
                src={image.src}
                alt={image.alt}
                avif={image.avif}
                webp={image.webp}
                aspectRatio={image.aspectRatio || "4/5"}
                borderRadius="12px"
                objectFit="cover"
              />
            </FeatureImageWrap>
          )}
        </FeatureImageColumn>
        <FeatureTextColumn
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={TEXT_TRANSITION}
        >
          {section.heading && <FeatureSubheading>{section.heading}</FeatureSubheading>}
          <FeatureTextBody>
            {parseBody(section.body).map((paragraph, idx) => (
              <Paragraph key={idx}>{paragraph}</Paragraph>
            ))}
          </FeatureTextBody>
        </FeatureTextColumn>
      </ThreeColGrid>
    );
  };

  const renderStaggeredPair = (section: CaseStudySection) => {
    const images = section.images || [];

    // Fallback: if only one image is provided, reuse full-width-image behavior
    if (images.length <= 1) {
      return renderFullWidthImage(section);
    }

    const leftImage = images[0];
    const rightImage = images[1];

    return (
      <div key={section.id}>
        <StaggeredPairWrapper>
          <StaggeredLeft
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={IMAGE_TRANSITION}
          >
            <StaggeredImage
              src={leftImage.src}
              alt={leftImage.alt}
              avif={leftImage.avif}
              webp={leftImage.webp}
              aspectRatio={leftImage.aspectRatio || "16/9"}
              borderRadius="12px"
              objectFit="contain"
            />
          </StaggeredLeft>

          <StaggeredRight
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...IMAGE_TRANSITION, delay: 0.15 }}
          >
            <StaggeredImage
              src={rightImage.src}
              alt={rightImage.alt}
              avif={rightImage.avif}
              webp={rightImage.webp}
              aspectRatio={rightImage.aspectRatio || "16/9"}
              borderRadius="12px"
              objectFit="contain"
              objectPosition="top center"
            />
          </StaggeredRight>
        </StaggeredPairWrapper>

        {section.body && <StaggeredCaption>{section.body}</StaggeredCaption>}
      </div>
    );
  };

  const renderTextOnly = (section: CaseStudySection) => (
    <div key={section.id}>
      <CenterTextBlock>
        <CenterText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={TEXT_TRANSITION}
        >
          {section.heading && (
            <SectionHeading style={{ textAlign: "left" }}>
              {section.heading}
            </SectionHeading>
          )}
          <SectionBody style={{ alignItems: "flex-start" }}>
            {parseBody(section.body).map((paragraph, idx) => (
              <TextOnlyParagraph
                key={idx}
                style={{ textAlign: "left" }}
              >
                {paragraph}
              </TextOnlyParagraph>
            ))}
          </SectionBody>
        </CenterText>
      </CenterTextBlock>
    </div>
  );

  const renderQuote = (section: CaseStudySection) => (
    <div key={section.id}>
      <QuoteWrapper>
        <QuoteContent
          $accentColor={section.accentColor}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={TEXT_TRANSITION}
        >
          <QuoteText>{section.body}</QuoteText>
          {section.heading && <QuoteAttribution>{section.heading}</QuoteAttribution>}
        </QuoteContent>
      </QuoteWrapper>
    </div>
  );

  const renderImageCarousel = (section: CaseStudySection) => (
    <div key={section.id}>
      {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
      {section.images && section.images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT_ONCE}
          transition={IMAGE_TRANSITION}
        >
          <ImageCarousel images={section.images} />
        </motion.div>
      )}
    </div>
  );

  const renderStickySplit = (section: CaseStudySection) => {
    const stickyImage = section.stickyContent?.image || section.images?.[0];
    const tags = section.stickyContent?.tags || [];
    const collateralImages = section.stickyContent?.collateralImages || [];
    const blocks = section.scrollContent?.blocks || [];

    return (
      <StickySplitWrapper key={section.id}>
        <ScrollColumn>
          {blocks.map((block, idx) => {
            if (block.type === "text") {
              return (
                <ScrollBlock
                  key={`${section.id}-text-${idx}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT_ONCE}
                  transition={TEXT_TRANSITION}
                >
                  {block.heading && <SectionHeading>{block.heading}</SectionHeading>}
                  <ScrollTextBody>
                    {parseBody(block.body).map((paragraph, pIdx) => (
                      <Paragraph key={pIdx}>{paragraph}</Paragraph>
                    ))}
                  </ScrollTextBody>
                </ScrollBlock>
              );
            }

            if (block.type === "image") {
              const image = block.images?.[0];
              if (!image) return null;

              return (
                <ScrollBlock
                  key={`${section.id}-image-${idx}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={VIEWPORT_ONCE}
                  transition={IMAGE_TRANSITION}
                >
                  <ResponsiveImage
                    src={image.src}
                    alt={image.alt}
                    avif={image.avif}
                    webp={image.webp}
                    aspectRatio={image.aspectRatio || "3/2"}
                    borderRadius="8px"
                    objectFit="cover"
                  />
                </ScrollBlock>
              );
            }

            if (block.type === "carousel") {
              return (
                <ScrollBlock
                  key={`${section.id}-carousel-${idx}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={VIEWPORT_ONCE}
                  transition={IMAGE_TRANSITION}
                >
                  {block.images && block.images.length > 0 && (
                    <ImageCarousel
                      images={block.images}
                      showControls={false}
                      showDots={false}
                    />
                  )}
                </ScrollBlock>
              );
            }

            if (block.type === "quote") {
              return (
                <ScrollBlock
                  key={`${section.id}-quote-${idx}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT_ONCE}
                  transition={TEXT_TRANSITION}
                >
                  <QuoteLeftAligned>{block.body}</QuoteLeftAligned>
                </ScrollBlock>
              );
            }

            return null;
          })}
        </ScrollColumn>

        <StickyColumn>
          <StickyMediaPin>
            {stickyImage && (
              <StickyHeroFrame>
                <StickyHeroImage
                  src={stickyImage.src}
                  alt={stickyImage.alt}
                  avif={stickyImage.avif}
                  webp={stickyImage.webp}
                  borderRadius="12px"
                  objectFit="cover"
                />
              </StickyHeroFrame>
            )}

            {tags.length > 0 && (
              <TagsRow>
                {tags.map((tag, idx) => (
                  <motion.div
                    key={`${tag}-${idx}`}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                  >
                    <Tag>
                      {tag}
                      {idx < tags.length - 1 && <TagDivider>•</TagDivider>}
                    </Tag>
                  </motion.div>
                ))}
              </TagsRow>
            )}

            {collateralImages.length > 0 && (
              <CollateralMediaWrap>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                >
                  <ImageCarousel
                    images={collateralImages}
                    autoPlay
                    intervalMs={2800}
                  />
                </motion.div>
              </CollateralMediaWrap>
            )}
          </StickyMediaPin>
        </StickyColumn>
      </StickySplitWrapper>
    );
  };

  const renderParallaxReveal = (section: CaseStudySection) => {
    const image = section.images?.[0];
    if (!image) return null;

    return (
      <ParallaxRevealWrapper key={section.id}>
        <ParallaxImageLayer>
          <ParallaxRevealImage
            src={image.src}
            alt={image.alt}
            avif={image.avif}
            webp={image.webp}
            parallaxSpeed={section.parallaxSpeed ?? 0.4}
            objectFit="cover"
          />
        </ParallaxImageLayer>

        <ParallaxTextLayer>
          {section.heading && (
            <ParallaxHeading
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={TEXT_TRANSITION}
            >
              {section.heading}
            </ParallaxHeading>
          )}
          {section.body && (
            <ParallaxBody
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ ...TEXT_TRANSITION, delay: 0.15 }}
            >
              {section.body}
            </ParallaxBody>
          )}
        </ParallaxTextLayer>
      </ParallaxRevealWrapper>
    );
  };

  const renderImageOnColorBlock = (section: CaseStudySection) => {
    const image = section.images?.[0];
    if (!image) return null;

    return (
      <ColorBlockSection key={section.id}>
        <ColorBlockInner>
          <ElevatedImageWrap
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={IMAGE_TRANSITION}
          >
            <ColorBlockImage
              src={image.src}
              alt={image.alt}
              avif={image.avif}
              webp={image.webp}
              aspectRatio={image.aspectRatio || "3/2"}
              borderRadius="12px"
              objectFit="cover"
            />
          </ElevatedImageWrap>

          {(section.heading || section.body) && (
            <ColorBlockText>
              {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
              {section.body && (
                <SectionBody style={{ alignItems: "flex-start" }}>
                  {parseBody(section.body).map((paragraph, idx) => (
                    <Paragraph key={idx} style={{ textAlign: "left" }}>
                      {paragraph}
                    </Paragraph>
                  ))}
                </SectionBody>
              )}
            </ColorBlockText>
          )}
        </ColorBlockInner>
      </ColorBlockSection>
    );
  };

  // Section renderer dispatcher
  const renderSection = (section: CaseStudySection) => {
    switch (section.layout) {
      case "text-left-image-right":
        return renderTextLeftImageRight(section);
      case "text-right-image-left":
        return renderTextRightImageLeft(section);
      case "full-width-image":
        return renderFullWidthImage(section);
      case "image-pair":
        return renderImagePair(section);
      case "gallery-grid":
        return renderGalleryGrid(section);
      case "asymmetric-mosaic":
        return renderAsymmetricMosaic(section);
      case "three-column-feature":
        return renderThreeColumnFeature(section);
      case "staggered-pair":
        return renderStaggeredPair(section);
      case "text-only":
        return renderTextOnly(section);
      case "quote":
        return renderQuote(section);
      case "image-carousel":
        return renderImageCarousel(section);
      case "parallax-reveal":
        return renderParallaxReveal(section);
      case "image-on-color-block":
        return renderImageOnColorBlock(section);
      case "sticky-split":
        return renderStickySplit(section);
      default:
        return null;
    }
  };

  return (
    <Page>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          {topAction && <HeroTopAction>{topAction}</HeroTopAction>}

          {/* Metadata Bar */}
          <MetadataBar />

          {/* Hero Headline */}
          <Headline
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {caseStudy.heroHeadline}
          </Headline>
        </HeroContent>

        <HeroPeekImageWrap>
          <HeroPeekImage
            src={caseStudy.coverImage.src}
            alt={caseStudy.coverImage.alt}
            avif={caseStudy.coverImage.avif}
            webp={caseStudy.coverImage.webp}
            aspectRatio={caseStudy.coverImage.aspectRatio || "16/9"}
            borderRadius="0"
            objectFit="cover"
            imageScale={1.08}
          />
        </HeroPeekImageWrap>
      </HeroSection>

      {/* Dynamic Sections */}
      <SectionsContainer>
        {caseStudy.sections.map((section, idx) => {
          const prev = caseStudy.sections[idx - 1];
          const next = caseStudy.sections[idx + 1];
          const isSelfManaged = SELF_MANAGED_SECTION_LAYOUTS.has(section.layout);
          const currentIsImageHeavy = IMAGE_HEAVY_LAYOUTS.has(section.layout);
          const prevIsImageHeavy = prev ? IMAGE_HEAVY_LAYOUTS.has(prev.layout) : false;
          const nextIsImageHeavy = next ? IMAGE_HEAVY_LAYOUTS.has(next.layout) : false;
          const isCompact = currentIsImageHeavy && (prevIsImageHeavy || nextIsImageHeavy);

          if (isSelfManaged) {
            return <div key={section.id}>{renderSection(section)}</div>;
          }

          return (
            <Section
              key={section.id}
              $background={getSectionBackground(section, idx % 2 === 0)}
              $compact={isCompact}
            >
              <SectionContent>{renderSection(section)}</SectionContent>
            </Section>
          );
        })}
      </SectionsContainer>

      {/* Next Project Footer */}
      {nextProject && (
        <NextProjectSection>
          <NextProjectContent>
            <NextProjectButton
              onClick={() => onNextProject?.(nextProject.slug)}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <NextProjectLabel>Next Project</NextProjectLabel>
                <NextProjectTitle>{nextProject.title}</NextProjectTitle>
              </div>
              <NextProjectArrow>→</NextProjectArrow>
            </NextProjectButton>
          </NextProjectContent>
        </NextProjectSection>
      )}
    </Page>
  );
}

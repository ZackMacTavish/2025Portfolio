import Socials from "../components/Social Bar/Socials";
import PortfolioCardsSection from "./PortfolioCardsSection";
import { motion, useInView } from "framer-motion";
import styled, { type DefaultTheme } from "styled-components";
import { ReactNode, memo, useRef, useState, type ComponentProps } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { CaseStudy, CaseStudyImage, CaseStudySection } from "../../types/caseStudy";
import ResponsiveImage from "./ResponsiveImage";
import ImageCarousel from "./ImageCarousel";
import ZoomableImage from "./ZoomableImage";
import NoOrphan from "./NoOrphan";
import { CaseStudyIntroCTA } from "./CaseStudyIntroCTA";

const ROTATING_SECTION_TONES = ["base", "muted", "accent"] as const;
type SectionTone = "base" | "muted" | "accent" | "primary" | "primaryMuted";

const sectionToneBackground = (tone: SectionTone, theme: DefaultTheme): string => ({
  base: theme.sectionBase,
  muted: theme.sectionMuted,
  accent: theme.sectionAccent,
  primary: theme.sectionPrimary,
  primaryMuted: theme.sectionPrimaryMuted,
})[tone];

const sectionToneText = (tone: SectionTone, theme: DefaultTheme) => ({
  strong: tone === "accent"
    ? theme.sectionAccentText
    : tone === "primary" || tone === "primaryMuted"
      ? theme.onOlive
      : theme.strongText,
  muted: tone === "accent"
    ? theme.sectionAccentMutedText
    : tone === "primary" || tone === "primaryMuted"
      ? theme.onOliveMuted
      : theme.mutedText,
});

const NEUTRAL_BACKGROUNDS = new Set([
  "white",
  "#fff",
  "#ffffff",
  "#fafafa",
  "#f9fafb",
  "#f5f5f5",
  "#f6f8fc",
  "#f0efeb",
  "#e7e7e7",
  "#eeeeee",
  "#eee",
  "var(--surface-muted, #f5f5f5)",
]);

const isNeutralBackground = (value: string | undefined): boolean =>
  !value || NEUTRAL_BACKGROUNDS.has(value.toLowerCase());

const themedBg = (value: string | undefined, theme: DefaultTheme): string | undefined => {
  if (!value) return value;
  if (theme.name !== "dark") return value;
  return isNeutralBackground(value) ? theme.surface : value;
};

const isLightBackground = (value: string | undefined): boolean => {
  if (!value) return false;
  const hex = value.trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(hex)) return false;
  const fullHex = hex.length === 3 ? [...hex].map((char) => char + char).join("") : hex;
  const rgb = [0, 2, 4].map((offset) => parseInt(fullHex.slice(offset, offset + 2), 16) / 255);
  const linear = rgb.map((channel) => channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4));
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2] > 0.55;
};

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
  background: ${(p) => p.theme.surface};
`;

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 110vh;
  background-color: ${(p) => p.theme.sectionPrimaryMuted};
  /* Horizontal gutter lives on HeroContent (mirroring SectionContent) so the
     hero headline/metadata align with every body section's grid. */
  padding: 5rem 0 10rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, ${(p) => p.theme.projectHeroWash} 0%, transparent 24%),
      linear-gradient(120deg, ${(p) => p.theme.projectHeroWash} 0%, ${(p) => p.theme.projectHeroWash} 18%, transparent 68%);
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 48%, transparent 88%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 48%, transparent 88%);
    pointer-events: none;
    z-index: 0;
  }

  @media (min-width: 768px) {
    min-height: 116vh;
    padding: 7rem 0 16rem;
  }

  @media (max-height: 980px) and (min-width: 901px) {
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 2vh, 1.5rem);
    min-height: auto;
    padding: 6rem 0 3rem;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 3vw, 1.75rem);
    min-height: auto;
    /* Clear the fixed ~73px site header so the metadata bar doesn't touch it. */
    padding: 7rem 0 2rem;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  margin: 0 auto;
  /* width:100% so that as a flex item (the hero becomes a flex column on
     short/!mobile viewports) it fills to the 64rem cap and aligns with the
     body SectionContent grid, instead of shrinking to its content width. */
  width: 100%;
  max-width: 64rem;
  /* Match SectionContent's inner gutter so the hero aligns with body sections */
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (max-width: 480px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

const HeroTopAction = styled.div`
  margin-bottom: 1.25rem;
`;

const HeroPeekImageWrap = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: -6%;
  transform: translateX(-50%);
  box-sizing: border-box;
  /* Match SectionContent exactly (width:100% capped at 64rem + 1.5rem gutter)
     so the hero image tracks the body grid at every width. Using vw here
     pinched the image inward between ~900–1093px. */
  width: 100%;
  max-width: 64rem;
  padding: 0 1.5rem;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    bottom: -8%;
    width: 120vw;
  }

  @media (max-width: 900px) {
    position: relative;
    left: auto;
    bottom: auto;
    transform: none;
    width: 100%;
    max-width: 100%;
    padding: 0 1.5rem;
    margin: 1rem auto 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0.75rem;
  }

  @media (max-height: 980px) and (min-width: 901px) {
    position: relative;
    left: auto;
    bottom: auto;
    transform: none;
    width: 100%;
    max-width: 64rem;
    padding: 0 1.5rem;
    margin: 2rem auto 0;
  }

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

const HeroPeekImage = styled(ResponsiveImage)`
  width: 100%;

  img {
    filter: saturate(0.96);
  }
`;

const SkeletonLoader = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    #e8e8e8 0%,
    #f5f5f5 50%,
    #e8e8e8 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const HeroPeekImageContainer = styled.div<{ $backgroundColor?: string; $border?: string; $borderRadius: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ $backgroundColor }) => $backgroundColor || "transparent"};
  padding-block: ${({ $backgroundColor }) => ($backgroundColor ? "clamp(1rem, 2vw, 1.5rem)" : "0")};
  border-radius: ${({ $backgroundColor, $borderRadius }) => ($backgroundColor ? "24px" : $borderRadius)};
  ${({ $border }) => ($border ? `border: ${$border};` : "")}
  overflow: hidden;
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
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: ${(p) => p.theme.mutedText};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const MetadataValue = styled.p`
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: ${(p) => p.theme.mutedText};
  margin: 0;
`;

const HeadlineBase = styled(motion.h1)`
  margin: 0;
  font-family: var(--font-display);
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${(p) => p.theme.strongText};
  max-width: 56rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`;

const Headline = (
  props: ComponentProps<typeof HeadlineBase>,
) => {
  const { children, ...rest } = props;
  return (
    <HeadlineBase {...rest}>
      <NoOrphan>{children}</NoOrphan>
    </HeadlineBase>
  );
};

const WebsiteLink = styled(CaseStudyIntroCTA).attrs({ as: "a" })`
  margin-top: 1rem;
  text-decoration: none;
  white-space: nowrap;

  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.strongText};
    outline-offset: 3px;
  }
`;

const SectionsContainer = styled.div``;

const Section = styled.section<{ $background: string; $tone?: SectionTone; $compact: boolean; $padding?: string; $minHeight?: string; $marginTop?: string; $standaloneText?: boolean; $continuesGroup?: boolean }>`
  background: ${(p) => p.$tone ? sectionToneBackground(p.$tone, p.theme) : themedBg(p.$background, p.theme)};
  --section-text-strong: ${(p) => p.$tone ? sectionToneText(p.$tone, p.theme).strong : p.theme.strongText};
  --section-text-muted: ${(p) => p.$tone ? sectionToneText(p.$tone, p.theme).muted : p.theme.mutedText};
  padding: ${(props) => props.$padding ?? (props.$compact
    ? "clamp(1.5rem, 3vw, 2.5rem) 0"
    : props.$standaloneText
      ? "3.75rem 0 clamp(4.75rem, 8vh, 6rem)"
      : "3.75rem 0")};
  min-height: ${(props) => props.$minHeight || "auto"};
  margin-top: ${(p) => p.$marginTop || (p.$continuesGroup ? "-1px" : "0")};
  ${(p) => !p.$tone && isLightBackground(themedBg(p.$background, p.theme)) ? `
    h1, h2, h3, h4, h5, h6 { color: #1a1a1a; }
    p { color: rgba(26, 26, 26, 0.78); }
  ` : ""}
`;

const SectionContent = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 64rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (max-width: 480px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

const SectionHeadingBase = styled.h2`
  font-family: var(--font-display);
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--section-text-strong, ${(p) => p.theme.strongText});
  margin-bottom: 1.5rem;
`;

const SectionHeading = (
  props: ComponentProps<typeof SectionHeadingBase>,
) => {
  const { children, ...rest } = props;
  return (
    <SectionHeadingBase {...rest}>
      <NoOrphan>{children}</NoOrphan>
    </SectionHeadingBase>
  );
};

const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ParagraphBase = styled.p`
  margin: 0;
  max-width: 68ch;
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: var(--section-text-muted, ${(p) => p.theme.mutedText});
`;

const Paragraph = (
  props: ComponentProps<typeof ParagraphBase>,
) => {
  const { children, ...rest } = props;
  return (
    <ParagraphBase {...rest}>
      <NoOrphan>{children}</NoOrphan>
    </ParagraphBase>
  );
};

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
`;

const VideoFrameWrap = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  background: #000;

  @media (max-width: 767px) {
    border-radius: 12px;
  }
`;

const VideoFrame = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: #000;
  object-fit: cover;
`;

const ImagePairGrid = styled.div<{ $stacked?: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: ${(props) => (props.$stacked ? "1fr" : "1fr 1fr")};
  }
`;

const Caption = styled.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: ${(p) => p.theme.mutedText};
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
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${(p) => (p.$active ? p.theme.strongText : p.theme.mutedText)};
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
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${(p) => p.theme.mutedText};
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
  max-width: 64rem;
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
`;

const StaggeredCaption = styled.p`
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  font-size: 0.95rem;
  color: ${(p) => p.theme.mutedText};
`;

const RelatedCalloutWrap = styled.div`
  padding-top: 2.5rem;
`;

const RelatedEyebrow = styled.p`
  margin: 0 0 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(p) => p.theme.mutedText};
`;

const RelatedCard = styled.a`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  max-width: 36rem;
  border: 1px solid ${(p) => p.theme.border};
  border-radius: 16px;
  overflow: hidden;
  background: ${(p) => p.theme.surfaceMuted};
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${(p) => p.theme.mutedText};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

const RelatedCardImage = styled.div`
  width: 200px;
  min-width: 200px;
  align-self: stretch;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 640px) {
    width: 120px;
    min-width: 120px;
  }
`;

const RelatedCardContent = styled.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
`;

const RelatedCardTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(p) => p.theme.strongText};
  line-height: 1.2;
`;

const RelatedCardBody = styled.p`
  margin: 0 0 1.25rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${(p) => p.theme.mutedText};
`;

const RelatedCardCTA = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(p) => p.theme.strongText};
`;

const CenterTextBlock = styled.div`
  margin: 0 0 2rem;
  max-width: 45rem;
`;

const CenterText = styled(motion.div)``;

const TextOnlyParagraph = styled(Paragraph)`
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  max-width: 62ch;
  text-wrap: pretty;
`;

const TeamParagraph = styled(Paragraph)`
  color: ${(p) => p.theme.strongText};
  font-family: var(--font-display);
  font-size: var(--type-standalone-size);
  line-height: var(--type-standalone-leading);
  max-width: 50ch;
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
  font-family: var(--font-display);
  font-size: var(--type-quote-size);
  font-style: italic;
  line-height: var(--type-quote-leading);
  color: ${(p) => p.theme.strongText};
  text-wrap: balance;
`;

const QuoteAttribution = styled.cite`
  display: block;
  margin-top: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${(p) => p.theme.mutedText};
`;

const StickySplitWrapper = styled.section<{ $background?: string; $tone?: SectionTone }>`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0;
  background: ${(p) => p.$tone ? sectionToneBackground(p.$tone, p.theme) : themedBg(p.$background, p.theme) || p.theme.surface};
  --section-text-strong: ${(p) => p.$tone ? sectionToneText(p.$tone, p.theme).strong : p.theme.strongText};
  --section-text-muted: ${(p) => p.$tone ? sectionToneText(p.$tone, p.theme).muted : p.theme.mutedText};
`;

const StickyColumn = styled.div`
  /* Body-width (not 100vw) so inner content lines up with the standard
     Section/SectionContent grid. A 100vw full-bleed here includes the
     scrollbar width and shifts the centered content ~half a scrollbar off. */
  width: 100%;
  padding: 0;
  background: transparent;
`;

const StickyMediaPin = styled.div<{ $fullBleed?: boolean }>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  /* Match the standard SectionContent grid so this module aligns with the
     text/image sections above and below it at every breakpoint */
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: ${(props) => (props.$fullBleed ? "0" : "2.5rem")};
  padding-bottom: ${(props) => (props.$fullBleed ? "0" : "2.5rem")};

  @media (max-width: 480px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

const StickyHeroFrame = styled.div<{ $fullBleed?: boolean; $aspectRatio?: string }>`
  position: relative;
  min-height: 0;
  overflow: hidden;
  border-radius: 12px;
  ${(props) =>
    !props.$aspectRatio
      ? `height: clamp(340px, 46vw, 680px);`
      : ""
  }

  ${(props) =>
    props.$fullBleed
      ? `
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  `
      : ""}

  @media (max-width: 768px) {
    ${(props) =>
      props.$aspectRatio
        ? ""
        : `height: clamp(260px, 58vw, 460px);`
    }
  }
`;

const StickyHeroImage = styled(ResponsiveImage)`
  width: 100%;
`;

const TagsRow = styled.div`
  margin-top: 2.5rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`;

const Tag = styled.span`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${(p) => p.theme.mutedText};
  padding: 0.25rem 0;
`;

const TagDivider = styled.span`
  color: ${(p) => p.theme.mutedText};
  margin: 0 0.25rem;
`;

const CollateralMediaWrap = styled.div`
  margin-top: 1rem;
  padding: 0 0 1.25rem;
`;

const ScrollColumn = styled.div`
  width: 100%;
  padding: 3.5rem 0 4.5rem;
  background: transparent;

  /* Inner blocks mirror SectionContent so the overview/scroll content aligns
     with the hero metadata and every body section on the 64rem grid. */
  > * {
    box-sizing: border-box;
    width: 100%;
    max-width: 64rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 480px) {
    > * {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2.5rem 0 2.5rem;
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
  font-family: var(--font-display);
  font-size: var(--type-quote-size);
  font-style: italic;
  line-height: var(--type-quote-leading);
  color: ${(p) => p.theme.strongText};
`;

const ParallaxRevealWrapper = styled.section<{ $background?: string; $tone?: SectionTone }>`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: ${(p) => p.$tone ? sectionToneBackground(p.$tone, p.theme) : themedBg(p.$background, p.theme) || p.theme.surface};
  --section-text-strong: ${(p) => p.$tone ? sectionToneText(p.$tone, p.theme).strong : p.theme.strongText};
  --section-text-muted: ${(p) => p.$tone ? sectionToneText(p.$tone, p.theme).muted : p.theme.mutedText};

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
  background: transparent;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`;

const ParallaxHeading = styled(motion.h2)`
  color: ${(p) => p.theme.strongText};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 0 1rem;
`;

const ParallaxBody = styled(motion.p)`
  margin: 0;
  color: ${(p) => p.theme.mutedText};
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  max-width: 540px;
`;

const ColorBlockSection = styled.section`
  position: relative;
  padding: 3.5rem 0;
`;

const ColorBlockInner = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 64rem;
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

const ElevatedImageWrap = styled(motion.div)<{ $containerShadow?: string; $containerBorder?: string }>`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  border: ${(props) => props.$containerBorder || "none"};
  box-shadow: ${(props) =>
    props.$containerShadow ||
    "0 24px 60px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.08)"};

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ColorBlockImage = styled(ResponsiveImage)`
  width: 100%;
`;

const ColorBlockText = styled.div`
  position: relative;
  z-index: 1;
  max-width: 45rem;
  margin: 2.5rem 0 0;
  text-align: left;
`;

const ColorBlockLogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0;
`;

const ColorBlockLogoWrap = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  /* Cap-height center sits ~2px above the flex mathematical center;
     nudge the logo up so its center aligns with the text visually. */
  transform: translateY(-2px);
`;

const ColorBlockLogo = styled.img<{ $rounded?: boolean; $whiteBg?: boolean }>`
  height: 1.875rem;
  width: auto;
  max-width: 100px;
  object-fit: contain;
  display: block;
  border-radius: ${(p) => (p.$rounded ? "6px" : "0")};
  /* White backplate: constrain to a square so logos of varying natural
     aspect ratios all sit inside a consistent square chip. */
  ${(p) => p.$whiteBg ? `
    background: #fff;
    padding: 5px;
    border-radius: 6px;
    width: 1.875rem;
    height: 1.875rem;
    object-fit: contain;
  ` : ""}
`;

const NextProjectSection = styled.section`
  border-top: 1px solid ${(p) => p.theme.border};
  background: ${(p) => p.theme.surface};
  padding: 4rem 1.5rem 6rem;

  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;

const NextProjectContent = styled.div`
  margin: 0 auto;
  max-width: 64rem;
`;

const FooterActionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FooterLabel = styled.p`
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: ${(p) => p.theme.mutedText};
  text-transform: uppercase;
`;

const ShareActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ShareButton = styled.button`
  border: 1px solid ${(p) => p.theme.pillBorder};
  background: ${(p) => p.theme.pillBg};
  color: ${(p) => p.theme.pillText};
  border-radius: 999px;
  padding: 0.45rem 0.75rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all 180ms ease;

  &:hover {
    border-color: ${(p) => p.theme.mutedText};
    background: ${(p) => p.theme.surfaceMuted};
  }
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
  font-family: var(--font-mono);
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  color: ${(p) => p.theme.mutedText};
  text-transform: uppercase;
  margin: 0;
`;

const NextProjectTitle = styled.h3`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(p) => p.theme.strongText};

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 1.875rem;
  }
`;

const NextProjectArrow = styled.div`
  font-size: 1.5rem;
  color: ${(p) => p.theme.mutedText};
  transition: color 200ms;

  ${NextProjectButton}:hover & {
    color: ${(p) => p.theme.strongText};
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

/**
 * LazyTagsSection
 * Defers tag DOM creation until section scrolls into view
 */
interface LazyTagsSectionProps {
  tags: string[];
}

function LazyTagsSection({ tags }: LazyTagsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  return (
    <div ref={ref}>
      {isInView && (
        <TagsRow>
          {tags.map((tag, idx) => (
            <motion.div
              key={`${tag}-${idx}`}
              initial={{ y: 8 }}
              animate={{ y: 0 }}
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
    </div>
  );
}

/**
 * LazyCollateralSection
 * Defers collateral carousel DOM creation until section scrolls into view
 */
interface LazyCollateralSectionProps {
  images: CaseStudyImage[];
}

function LazyCollateralSection({ images }: LazyCollateralSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  return (
    <div ref={ref}>
      {isInView && (
        <CollateralMediaWrap>
          <motion.div
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <ImageCarousel images={images} autoPlay intervalMs={2800} activeDecoding="auto" />
          </motion.div>
        </CollateralMediaWrap>
      )}
    </div>
  );
}

const IMAGE_HEAVY_LAYOUTS = new Set<CaseStudySection["layout"]>([
  "full-width-image",
  "parallax-reveal",
  "image-pair",
  "staggered-pair",
]);

const MEDIA_SECTION_LAYOUTS = new Set<CaseStudySection["layout"]>([
  "full-width-image",
  "image-pair",
  "gallery-grid",
  "sticky-split",
  "parallax-reveal",
  "image-on-color-block",
  "asymmetric-mosaic",
  "image-carousel",
  "three-column-feature",
  "staggered-pair",
  "video",
  "text-left-image-right",
  "text-right-image-left",
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
export default memo(function CaseStudyPage({
  caseStudy,
  nextProject,
  onNextProject,
  topAction,
}: CaseStudyPageProps) {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const heroImage = caseStudy.heroImage || caseStudy.coverImage;

  // Split multi-paragraph text by \n\n
  const parseBody = (text?: string): string[] => {
    if (!text) return [];
    return text.split("\n\n").filter((p) => p.trim());
  };

  const toAlphaBackground = (accentColor?: string): string | null => {
    if (!accentColor || !/^#[0-9a-fA-F]{6}$/.test(accentColor.trim())) return null;
    const hex = accentColor.trim().slice(1);
    const channels = [0, 2, 4].map((offset) => parseInt(hex.slice(offset, offset + 2), 16));
    return `rgba(${channels[0]}, ${channels[1]}, ${channels[2]}, 0.06)`;
  };

  const getSectionBackground = (section: CaseStudySection, isOdd: boolean): string => {
    if (section.sectionBackground) return section.sectionBackground;
    return toAlphaBackground(section.accentColor) || (isOdd ? "white" : "#f5f5f5");
  };

  const sectionPresentation = caseStudy.sections.reduce<Array<{ background: string; tone?: SectionTone; groupKey: string; continuesGroup: boolean }>>(
    (presentations, section, index) => {
      const background = getSectionBackground(section, index % 2 === 0);
      const previous = index > 0 ? presentations[index - 1] : undefined;
      const currentNeutral = isNeutralBackground(section.sectionBackground);
      const groupKey = section.backgroundGroup || (section.sectionBackground
        ? section.sectionBackground.toLowerCase()
        : previous?.tone
          ? previous.groupKey
          : `default-${index}`);
      const sameCluster = currentNeutral && previous?.tone && groupKey === previous.groupKey;
      const previousToneIndex = previous?.tone && previous.tone !== "primary" && previous.tone !== "primaryMuted"
        ? ROTATING_SECTION_TONES.indexOf(previous.tone)
        : -1;
      const tone = currentNeutral
        ? section.backgroundTone || (sameCluster
          ? previous.tone
          : ROTATING_SECTION_TONES[(previousToneIndex + 1) % ROTATING_SECTION_TONES.length])
        : undefined;
      presentations.push({ background, tone, groupKey, continuesGroup: Boolean(sameCluster) });
      return presentations;
    },
    [],
  );

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
          initial={{ x: -30 }}
          whileInView={{ x: 0 }}
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
            initial={{ x: 30 }}
            whileInView={{ x: 0 }}
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
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
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
          initial={{ x: 30 }}
          whileInView={{ x: 0 }}
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
      {(section.heading || section.body) && (
        <CenterTextBlock style={{ marginBottom: "3.75rem" }}>
          <CenterText>
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
          </CenterText>
        </CenterTextBlock>
      )}
      <FullWidthImageContainer
        initial={{ scale: 0.97 }}
        whileInView={{ scale: 1 }}
        viewport={VIEWPORT_ONCE}
        transition={IMAGE_TRANSITION}
      >
        {section.images && section.images[0] && (() => {
          const image = section.images[0];
          const imageNode = (
            <ImageElement
              src={image.src}
              alt={image.alt}
              avif={image.avif}
              webp={image.webp}
              mobileSrc={image.mobileSrc}
              mobileAvif={image.mobileAvif}
              mobileWebp={image.mobileWebp}
              aspectRatio={image.aspectRatio}
              borderRadius={image.borderRadius || "16px"}
              objectFit={image.objectFit || "cover"}
              objectPosition={image.objectPosition}
              backgroundColor={image.backgroundColor}
              imagePaddingBlock={image.imagePaddingBlock}
              imageScale={image.imageScale}
              border={image.containerBorder}
              mixBlendMode={image.mixBlendMode}
              style={{ width: "100%" }}
            />
          );

          if (image.zoomable) {
            const zoomRatio = image.zoomAspectRatio || image.aspectRatio || "16/9";
            const overlayNode = (
              <ImageElement
                src={image.src}
                alt={image.alt}
                avif={image.avif}
                webp={image.webp}
                mobileSrc={image.mobileSrc}
                mobileAvif={image.mobileAvif}
                mobileWebp={image.mobileWebp}
                aspectRatio={zoomRatio}
                borderRadius={image.borderRadius || "8px"}
                objectFit="contain"
                backgroundColor={image.backgroundColor}
                style={{ width: "100%" }}
              />
            );
            return (
              <ZoomableImage
                id={`${section.id}-0`}
                ariaLabel={`Open ${image.alt} in full-screen viewer`}
                aspectRatio={zoomRatio}
                overlayContent={overlayNode}
              >
                {imageNode}
              </ZoomableImage>
            );
          }

          return imageNode;
        })()}
      </FullWidthImageContainer>
      {section.caption && <Caption>{section.caption}</Caption>}
    </div>
  );

  const renderVideo = (section: CaseStudySection) => (
    <div key={section.id}>
      {(section.heading || section.body) && (
        <CenterTextBlock style={{ marginBottom: "3.75rem" }}>
          <CenterText>
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
          </CenterText>
        </CenterTextBlock>
      )}
      {section.video && (
        <VideoFrameWrap>
          <VideoFrame
            controls
            playsInline
            preload="metadata"
            poster={section.video.poster}
            aria-label={section.video.ariaLabel}
          >
            <source src={section.video.src} type="video/mp4" />
          </VideoFrame>
        </VideoFrameWrap>
      )}
      {section.caption && <Caption>{section.caption}</Caption>}
    </div>
  );

  const renderImagePair = (section: CaseStudySection) => (
    <div key={section.id}>
      {section.heading && (
        <SectionHeading style={section.headingColor ? { color: section.headingColor } : undefined}>
          {section.heading}
        </SectionHeading>
      )}
      <ImagePairGrid
        $stacked={section.stackImages}
        style={
          section.contentMaxWidth
            ? { maxWidth: section.contentMaxWidth, marginInline: "auto" }
            : undefined
        }
      >
        {section.images &&
          (section.stackImages ? section.images : section.images.slice(0, 2)).map((image, idx) => (
            <GalleryImage
              key={idx}
              initial={{ scale: 0.97 }}
              whileInView={{ scale: 1 }}
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
                mobileSrc={image.mobileSrc}
                mobileAvif={image.mobileAvif}
                mobileWebp={image.mobileWebp}
                aspectRatio={image.aspectRatio}
                borderRadius="0.5rem"
                objectFit={image.objectFit || "contain"}
                backgroundColor={image.backgroundColor}
                imagePaddingBlock={image.imagePaddingBlock}
                imagePaddingInline={image.imagePaddingInline}
                border={image.containerBorder}
                loading={image.loading}
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
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
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
              initial={{ y: 20, scale: 0.97 }}
              whileInView={{ y: 0, scale: 1 }}
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
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
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
              initial={{ y: 24 }}
              whileInView={{ y: 0 }}
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
                objectFit={image.objectFit || "cover"}
                objectPosition={image.objectPosition}
                backgroundColor={image.backgroundColor}
                imagePaddingBlock={image.imagePaddingBlock}
              />
            </FeatureImageWrap>
          )}
        </FeatureImageColumn>
        <FeatureTextColumn
          initial={{ x: 20 }}
          whileInView={{ x: 0 }}
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
    const hasHeading = Boolean(section.heading);

    return (
      <div key={section.id}>
        {hasHeading && (
          <CenterTextBlock>
            <CenterText
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={TEXT_TRANSITION}
            >
              <SectionHeading style={{ textAlign: "left" }}>
                {section.heading}
              </SectionHeading>
              {section.body && (
                <SectionBody style={{ alignItems: "flex-start" }}>
                  {parseBody(section.body).map((paragraph, idx) => (
                    <TextOnlyParagraph key={idx} style={{ textAlign: "left" }}>
                      {paragraph}
                    </TextOnlyParagraph>
                  ))}
                </SectionBody>
              )}
            </CenterText>
          </CenterTextBlock>
        )}
        <StaggeredPairWrapper>
          <StaggeredLeft
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={IMAGE_TRANSITION}
          >
            <StaggeredImage
              src={leftImage.src}
              alt={leftImage.alt}
              avif={leftImage.avif}
              webp={leftImage.webp}
              aspectRatio={leftImage.aspectRatio}
              borderRadius="12px"
              backgroundColor={leftImage.backgroundColor}
              imagePaddingBlock={leftImage.imagePaddingBlock}
              objectFit={leftImage.objectFit || "cover"}
              objectPosition={leftImage.objectPosition}
              border={leftImage.containerBorder}
            />
          </StaggeredLeft>

          <StaggeredRight
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...IMAGE_TRANSITION, delay: 0.15 }}
          >
            <StaggeredImage
              src={rightImage.src}
              alt={rightImage.alt}
              avif={rightImage.avif}
              webp={rightImage.webp}
              aspectRatio={rightImage.aspectRatio}
              borderRadius="12px"
              backgroundColor={rightImage.backgroundColor}
              imagePaddingBlock={rightImage.imagePaddingBlock}
              objectFit={rightImage.objectFit || "cover"}
              objectPosition={rightImage.objectPosition || "top center"}
              border={rightImage.containerBorder}
            />
          </StaggeredRight>
        </StaggeredPairWrapper>

        {!hasHeading && section.body && <StaggeredCaption>{section.body}</StaggeredCaption>}
      </div>
    );
  };

  const renderTextOnly = (section: CaseStudySection) => (
    <div key={section.id}>
      <CenterTextBlock>
        <CenterText
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={TEXT_TRANSITION}
        >
          {section.heading && (
            section.logoSrc ? (
              <ColorBlockLogoRow>
                <ColorBlockLogoWrap>
                  <picture>
                    {section.logoAvif && <source srcSet={section.logoAvif} type="image/avif" />}
                    {section.logoWebp && <source srcSet={section.logoWebp} type="image/webp" />}
                    <ColorBlockLogo
                      src={section.logoSrc}
                      alt={`${section.heading} logo`}
                      $rounded={section.logoSrc?.includes("Walmart")}
                      $whiteBg={section.logoSrc?.includes("Amazon") || section.logoSrc?.includes("Lyft") || section.logoSrc?.includes("DoorDash")}
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </ColorBlockLogoWrap>
                <SectionHeading
                  style={{
                    marginBottom: 0,
                    marginTop: 0,
                    paddingBottom: "3px",
                    lineHeight: 1,
                    ...(section.headingColor ? { color: section.headingColor } : {}),
                  }}
                >
                  {section.heading}
                </SectionHeading>
              </ColorBlockLogoRow>
            ) : (
              <SectionHeading style={{ textAlign: "left" }}>
                {section.heading}
              </SectionHeading>
            )
          )}
          <SectionBody style={{ alignItems: "flex-start" }}>
            {parseBody(section.body).map((paragraph, idx) => (
              section.id === "credits" ? (
                <TeamParagraph key={idx} style={{ textAlign: "left" }}>
                  {paragraph}
                </TeamParagraph>
              ) : (
                <TextOnlyParagraph key={idx} style={{ textAlign: "left" }}>
                  {paragraph}
                </TextOnlyParagraph>
              )
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
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
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
      {(section.heading || section.body) && (
        <CenterTextBlock>
          <CenterText
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={TEXT_TRANSITION}
          >
            {section.heading && (
              <SectionHeading style={{ textAlign: "left" }}>
                {section.heading}
              </SectionHeading>
            )}
            {section.body && (
              <SectionBody style={{ alignItems: "flex-start" }}>
                {parseBody(section.body).map((paragraph, idx) => (
                  <TextOnlyParagraph key={idx} style={{ textAlign: "left" }}>
                    {paragraph}
                  </TextOnlyParagraph>
                ))}
              </SectionBody>
            )}
          </CenterText>
        </CenterTextBlock>
      )}
      {section.images && section.images.length > 0 && (
        <motion.div
          initial={{ scale: 0.97 }}
          whileInView={{ scale: 1 }}
          viewport={VIEWPORT_ONCE}
          transition={IMAGE_TRANSITION}
        >
          <ImageCarousel images={section.images} autoPlay intervalMs={7000} fixedAspectRatio={section.sectionAspectRatio} />
        </motion.div>
      )}
    </div>
  );

  const renderStickySplit = (section: CaseStudySection, background: string, tone?: SectionTone) => {
    const stickyImage = section.stickyContent?.image || section.images?.[0];
    const stickyImageIsFullBleed = section.stickyContent?.fullBleedImage || false;
    const tags = section.stickyContent?.tags || [];
    const collateralImages = section.stickyContent?.collateralImages || [];
    const blocks = section.scrollContent?.blocks || [];

    return (
      <StickySplitWrapper key={section.id} $background={background} $tone={tone}>
        {blocks.length > 0 && (
        <ScrollColumn>
          {blocks.map((block, idx) => {
            if (block.type === "text") {
              return (
                <ScrollBlock
                  key={`${section.id}-text-${idx}`}
                  initial={{ x: 20 }}
                  whileInView={{ x: 0 }}
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
                  initial={{ scale: 0.97 }}
                  whileInView={{ scale: 1 }}
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
                  initial={{ scale: 0.97 }}
                  whileInView={{ scale: 1 }}
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
                  initial={{ x: 30 }}
                  whileInView={{ x: 0 }}
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
        )}

        {(stickyImage || tags.length > 0 || collateralImages.length > 0) && (
        <StickyColumn>
          <StickyMediaPin
            $fullBleed={stickyImageIsFullBleed}
          >
            {stickyImage && (
              <StickyHeroFrame $fullBleed={stickyImageIsFullBleed} $aspectRatio={stickyImage.aspectRatio}>
                <StickyHeroImage
                  src={stickyImage.src}
                  alt={stickyImage.alt}
                  avif={stickyImage.avif}
                  webp={stickyImage.webp}
                  aspectRatio={stickyImage.aspectRatio || "16/9"}
                  borderRadius="0"
                  backgroundColor={stickyImage.backgroundColor}
                  imagePaddingBlock={stickyImage.imagePaddingBlock}
                  objectFit={stickyImage.objectFit || "cover"}
                  objectPosition={stickyImage.objectPosition || "center"}
                  imageScale={stickyImage.imageScale}
                  border={stickyImage.containerBorder}
                  mixBlendMode={stickyImage.mixBlendMode}
                  disableRevealAnimation
                />
              </StickyHeroFrame>
            )}

            {tags.length > 0 && <LazyTagsSection tags={tags} />}

            {collateralImages.length > 0 && (
              <LazyCollateralSection images={collateralImages} />
            )}
          </StickyMediaPin>
        </StickyColumn>
        )}
      </StickySplitWrapper>
    );
  };

  const renderParallaxReveal = (section: CaseStudySection, background: string, tone?: SectionTone) => {
    const image = section.images?.[0];
    if (!image) return null;

    return (
      <ParallaxRevealWrapper key={section.id} $background={background} $tone={tone}>
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
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={TEXT_TRANSITION}
            >
              {section.heading}
            </ParallaxHeading>
          )}
          {section.body && (
            <ParallaxBody
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
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
            $containerBorder={image.containerBorder}
            $containerShadow={image.containerShadow}
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={IMAGE_TRANSITION}
          >
            <ColorBlockImage
              src={image.src}
              alt={image.alt}
              avif={image.avif}
              webp={image.webp}
              aspectRatio={image.aspectRatio}
              borderRadius={image.borderRadius || "12px"}
              containerBorderRadius={image.containerBorderRadius}
              objectFit={image.objectFit || "cover"}
              objectPosition={image.objectPosition}
              imageScale={image.imageScale}
              backgroundColor={image.backgroundColor}
              imagePaddingBlock={image.imagePaddingBlock}
              imagePaddingInline={image.imagePaddingInline}
            />
          </ElevatedImageWrap>

          {(section.heading || section.body) && (
            <ColorBlockText>
              {section.heading && (
                <ColorBlockLogoRow>
                  {section.logoSrc && (
                    <ColorBlockLogoWrap>
                      <picture>
                        {section.logoAvif && <source srcSet={section.logoAvif} type="image/avif" />}
                        {section.logoWebp && <source srcSet={section.logoWebp} type="image/webp" />}
                        <ColorBlockLogo
                          src={section.logoSrc}
                          alt={`${section.heading} logo`}
                          $rounded={section.logoSrc?.includes("Walmart")}
                          $whiteBg={section.logoSrc?.includes("Amazon") || section.logoSrc?.includes("Lyft") || section.logoSrc?.includes("DoorDash")}
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                    </ColorBlockLogoWrap>
                  )}
                  <SectionHeading
                    style={{
                      marginBottom: 0,
                      marginTop: 0,
                      paddingBottom: "3px",
                      lineHeight: 1,
                      ...(section.headingColor ? { color: section.headingColor } : {}),
                    }}
                  >
                    {section.heading}
                  </SectionHeading>
                </ColorBlockLogoRow>
              )}
              {section.body && (
                <SectionBody style={{ alignItems: "flex-start", marginTop: "1.25rem" }}>
                  {parseBody(section.body).map((paragraph, idx) => (
                    <Paragraph
                      key={idx}
                      style={{
                        textAlign: "left",
                        ...(section.headingColor ? { color: "rgba(255,255,255,0.8)" } : {}),
                      }}
                    >
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

  const renderRelatedCallout = (section: CaseStudySection) => (
    <div key={section.id}>
      <RelatedCalloutWrap>
        {section.labels?.[0] && (
          <RelatedEyebrow>{section.labels[0]}</RelatedEyebrow>
        )}
        <RelatedCard href={section.relatedHref || "#"}>
          {section.images?.[0] && (
            <RelatedCardImage>
              <picture style={{ display: "block", width: "100%", height: "100%" }}>
                {section.images[0].avif && <source srcSet={section.images[0].avif} type="image/avif" />}
                {section.images[0].webp && <source srcSet={section.images[0].webp} type="image/webp" />}
                <img
                  src={section.images[0].src}
                  alt={section.images[0].alt}
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </picture>
            </RelatedCardImage>
          )}
          <RelatedCardContent>
            {section.heading && (
              <RelatedCardTitle>{section.heading}</RelatedCardTitle>
            )}
            {section.body && (
              <RelatedCardBody>{section.body}</RelatedCardBody>
            )}
            <RelatedCardCTA>
              {section.relatedLabel || "View Case Study"} →
            </RelatedCardCTA>
          </RelatedCardContent>
        </RelatedCard>
      </RelatedCalloutWrap>
    </div>
  );

  // Section renderer dispatcher
  const renderSection = (section: CaseStudySection, background: string, tone?: SectionTone) => {
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
      case "related-callout":
        return renderRelatedCallout(section);
      case "video":
        return renderVideo(section);
      case "text-only":
        return renderTextOnly(section);
      case "quote":
        return renderQuote(section);
      case "image-carousel":
        return renderImageCarousel(section);
      case "parallax-reveal":
        return renderParallaxReveal(section, background, tone);
      case "image-on-color-block":
        return renderImageOnColorBlock(section);
      case "sticky-split":
        return renderStickySplit(section, background, tone);
      default:
        return null;
    }
  };

  const getShareUrl = (): string => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  };

  const handleShareLinkedIn = () => {
    const shareUrl = encodeURIComponent(getShareUrl());
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank", "noopener,noreferrer");
  };

  const handleShareX = () => {
    const text = encodeURIComponent(`Check out this case study: ${caseStudy.title}`);
    const shareUrl = encodeURIComponent(getShareUrl());
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`, "_blank", "noopener,noreferrer");
  };

  const handleCopyLink = async () => {
    const shareUrl = getShareUrl();

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = shareUrl;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), 1600);
    } catch {
      setCopyStatus("error");
      window.setTimeout(() => setCopyStatus("idle"), 1600);
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
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {caseStudy.heroHeadline}
          </Headline>

          {caseStudy.website && (
            <WebsiteLink
              href={caseStudy.website.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {caseStudy.website.label}
              <FiArrowUpRight aria-hidden="true" />
            </WebsiteLink>
          )}
        </HeroContent>

        <HeroPeekImageWrap>
          <HeroPeekImageContainer
            $backgroundColor={heroImage.backgroundColor}
            $borderRadius={heroImage.borderRadius || "8px"}
            $border={heroImage.backgroundColor
              ? heroImage.containerBorder || "1px solid var(--border, #d1d5db)"
              : heroImage.containerBorder || "1px solid var(--border, #d1d5db)"}
          >
            <HeroPeekImage
              src={heroImage.src}
              alt={heroImage.alt}
              avif={heroImage.avif}
              webp={heroImage.webp}
              mobileSrc={heroImage.mobileSrc}
              mobileAvif={heroImage.mobileAvif}
              mobileWebp={heroImage.mobileWebp}
              aspectRatio={heroImage.aspectRatio || "16/9"}
              borderRadius={heroImage.borderRadius || "8px"}
              objectFit={heroImage.objectFit || "cover"}
              objectPosition={heroImage.objectPosition || "center"}
              imageScale={1}
              border={undefined}
              loading="eager"
              decoding="sync"
              onLoad={() => setHeroImageLoaded(true)}
            />
            {!heroImageLoaded && (
              <SkeletonLoader
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                aria-hidden="true"
              />
            )}
          </HeroPeekImageContainer>
        </HeroPeekImageWrap>
      </HeroSection>

      {/* Dynamic Sections */}
      <SectionsContainer>
        {caseStudy.sections.map((section, idx) => {
          const { background, tone, continuesGroup } = sectionPresentation[idx];
          const prev = caseStudy.sections[idx - 1];
          const next = caseStudy.sections[idx + 1];
          const isSelfManaged = SELF_MANAGED_SECTION_LAYOUTS.has(section.layout);
          const currentIsImageHeavy = IMAGE_HEAVY_LAYOUTS.has(section.layout);
          const prevIsImageHeavy = prev ? IMAGE_HEAVY_LAYOUTS.has(prev.layout) : false;
          const nextIsImageHeavy = next ? IMAGE_HEAVY_LAYOUTS.has(next.layout) : false;
          const nextIsMedia = next ? MEDIA_SECTION_LAYOUTS.has(next.layout) : false;
          const isCompact =
            !section.disableCompactPadding &&
            !section.heading &&
            !section.body &&
            currentIsImageHeavy &&
            (prevIsImageHeavy || nextIsImageHeavy);
          const isStandaloneText =
            section.layout === "text-only" &&
            !section.sectionPadding &&
            !nextIsMedia;

          if (isSelfManaged) {
            return <div key={section.id}>{renderSection(section, background, tone)}</div>;
          }

          return (
            <div key={section.id}>
              <Section
                $background={background}
                $tone={tone}
                $continuesGroup={continuesGroup}
                $compact={isCompact}
                $padding={section.sectionPadding}
                $minHeight={section.sectionMinHeight}
                $marginTop={section.sectionMarginTop}
                $standaloneText={isStandaloneText}
              >
                <SectionContent>{renderSection(section, background, tone)}</SectionContent>
              </Section>
            </div>
          );
        })}
      </SectionsContainer>

      {/* See My Other Work Section: Social tray only (removed, now only on BusinessConnectors page) */}
    </Page>
  );
});

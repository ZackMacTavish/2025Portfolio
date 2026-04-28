import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

interface CaseStudyCardProps {
  /** Main title displayed on the card */
  title: string;

  /** Subtitle displayed below the title */
  subtitle: string;

  /** Cover image object with src and alt text */
  coverImage: { src: string; alt: string };

  /** URL-friendly identifier for the case study */
  slug: string;

  /** Array of transition images to preload on hover */
  transitionImages: { src: string; alt: string }[];

  /** Callback fired when card is clicked — triggers transition animation */
  onSelect: (slug: string) => void;
}

const StyledCard = styled(motion.button)`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 300ms ease;
  aspect-ratio: 4 / 3;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const StyledImage = styled(motion.img)`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const StyledOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 40%);
`;

const StyledContent = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
`;

const StyledTitle = styled(motion.h3)`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
  color: white;
  margin: 0;
`;

const StyledSubtitle = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
`;

/**
 * CaseStudyCard
 *
 * A clickable portfolio card component that displays a case study preview.
 * Features an image background with gradient overlay and metadata.
 * Includes hover animations, shared layout animations via layoutId, and
 * image preloading for instant transition animation on click.
 *
 * @example
 * <CaseStudyCard
 *   title="Project Name"
 *   subtitle="Role & Context"
 *   coverImage={{ src: "/img.jpg", alt: "Project cover" }}
 *   transitionImages={[...]}
 *   slug="project-slug"
 *   onSelect={(slug) => navigate(`/case-study/${slug}`)}
 * />
 */
export default function CaseStudyCard({
  title,
  subtitle,
  coverImage,
  slug,
  transitionImages,
  onSelect,
}: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Preload transition images on hover for instant animation on click
  const preloadImages = () => {
    transitionImages.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    preloadImages();
  };

  const handleClick = () => {
    onSelect(slug);
  };

  return (
    <StyledCard
      layoutId={slug}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`View case study: ${title}`}
      type="button"
    >
      {/* Background Image */}
      <StyledImage
        src={coverImage.src}
        alt={coverImage.alt}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Gradient Overlay */}
      <StyledOverlay
        animate={{
          opacity: isHovered ? 0.85 : 0.7,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content Container */}
      <StyledContent>
        {/* Title */}
        <StyledTitle
          animate={{
            y: isHovered ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </StyledTitle>

        {/* Subtitle */}
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledContent>
    </StyledCard>
  );
}

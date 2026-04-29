import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  avif?: string;
  webp?: string;
  aspectRatio?: string;
  parallaxSpeed?: number;
  className?: string;
  borderRadius?: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
  imageScale?: number;
  disableRevealAnimation?: boolean;
  loading?: "lazy" | "eager";
  decoding?: "sync" | "async" | "auto";
  onLoad?: () => void;
}

const Container = styled(motion.div)<{ $aspectRatio?: string; $borderRadius: string }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${(props) => props.$borderRadius};

  ${(props) =>
    props.$aspectRatio
      ? `
    aspect-ratio: ${props.$aspectRatio};
  `
      : ""}
`;

const Picture = styled.picture`
  display: block;
  width: 100%;
  height: 100%;
`;

const StyledImg = styled(motion.img)<{
  $objectFit: "cover" | "contain";
  $objectPosition: string;
  $hasParallax: boolean;
}>`
  display: block;
  width: 100%;
  height: ${(props) => (props.$hasParallax ? "110%" : "100%")};
  object-fit: ${(props) => props.$objectFit};
  object-position: ${(props) => props.$objectPosition};
`;

export default function ResponsiveImage({
  src,
  alt,
  avif,
  webp,
  aspectRatio,
  parallaxSpeed = 0,
  className,
  borderRadius = "12px",
  objectFit = "cover",
  objectPosition = "center",
  imageScale = 1,
  disableRevealAnimation = false,
  loading = "lazy",
  decoding = "async",
  onLoad,
}: ResponsiveImageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect mobile breakpoint on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxAmount = Math.max(0, parallaxSpeed) * 60;
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-parallaxAmount, parallaxAmount]);
  const shouldParallax = parallaxSpeed > 0 && !prefersReducedMotion && !isMobile;

  return (
    <Container
      ref={containerRef}
      className={className}
      $aspectRatio={aspectRatio}
      $borderRadius={borderRadius}
      {...(disableRevealAnimation
        ? {}
        : {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.2 },
            transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
          })}
    >
      <Picture>
        {avif && <source srcSet={avif} type="image/avif" />}
        {webp && <source srcSet={webp} type="image/webp" />}
        <StyledImg
          src={src}
          alt={alt}
          loading={loading}
          decoding={decoding}
          onLoad={onLoad}
          style={{ y: shouldParallax ? parallaxY : 0, scale: imageScale }}
          $objectFit={objectFit}
          $objectPosition={objectPosition}
          $hasParallax={shouldParallax}
        />
      </Picture>
    </Container>
  );
}

export type { ResponsiveImageProps };

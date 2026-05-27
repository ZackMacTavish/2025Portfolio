import { motion, useMotionValue, useReducedMotion } from "framer-motion";
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
  containerBorderRadius?: string;
  backgroundColor?: string;
  imagePaddingBlock?: string;
  imagePaddingInline?: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
  imageScale?: number;
  disableRevealAnimation?: boolean;
  loading?: "lazy" | "eager";
  decoding?: "sync" | "async" | "auto";
  onLoad?: () => void;
  border?: string;
  mixBlendMode?: string;
}

function normalizeAssetUrl(url?: string) {
  if (!url) {
    return url;
  }

  try {
    return encodeURI(decodeURI(url));
  } catch {
    return encodeURI(url);
  }
}

const Container = styled(motion.div)<{ $aspectRatio?: string; $borderRadius: string; $backgroundColor?: string; $border?: string }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${(props) => props.$borderRadius};
  background: ${(props) => props.$backgroundColor || "transparent"};
  ${(props) => (props.$border ? `border: ${props.$border};` : "")}

  ${(props) =>
    props.$aspectRatio
      ? `
    aspect-ratio: ${props.$aspectRatio};
  `
      : ""}
`;

const Picture = styled.picture<{ $fillContainer: boolean; $borderRadius: string }>`
  display: block;
  width: 100%;
  height: ${(props) => (props.$fillContainer ? "100%" : "auto")};
  overflow: hidden;
  border-radius: ${(props) => props.$borderRadius};
`;

const ImageFrame = styled.div<{
  $imagePaddingBlock?: string;
  $imagePaddingInline?: string;
  $fillContainer: boolean;
  $borderRadius: string;
}>`
  position: ${(props) => (props.$fillContainer ? "absolute" : "relative")};
  inset: ${(props) =>
    props.$fillContainer
      ? `${props.$imagePaddingBlock || "0"} ${props.$imagePaddingInline || "0"}`
      : "auto"};
  padding-block: ${(props) => (props.$fillContainer ? "0" : props.$imagePaddingBlock || "0")};
  padding-inline: ${(props) => (props.$fillContainer ? "0" : props.$imagePaddingInline || "0")};
  overflow: hidden;
  border-radius: ${(props) => props.$borderRadius};
`;

const StyledImg = styled(motion.img)<{
  $objectFit: "cover" | "contain";
  $objectPosition: string;
  $hasParallax: boolean;
  $fillContainer: boolean;
  $borderRadius: string;
}>`
  display: block;
  width: 100%;
  height: ${(props) => {
    if (!props.$fillContainer) {
      return "auto";
    }

    return props.$hasParallax ? "110%" : "100%";
  }};
  object-fit: ${(props) => props.$objectFit};
  object-position: ${(props) => props.$objectPosition};
  border-radius: ${(props) => props.$borderRadius};
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
  containerBorderRadius,
  backgroundColor,
  imagePaddingBlock,
  imagePaddingInline,
  objectFit = "cover",
  objectPosition = "center",
  imageScale = 1,
  disableRevealAnimation = false,
  loading = "lazy",
  decoding = "async",
  onLoad,
  border,
  mixBlendMode,
}: ResponsiveImageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  // Guard against prerender / SSR where `window` is undefined.
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );
  const parallaxY = useMotionValue(0);

  // Detect mobile breakpoint on mount and resize
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const parallaxAmount = Math.max(0, parallaxSpeed) * 60;
  const shouldParallax = parallaxSpeed > 0 && !prefersReducedMotion && !isMobile;
  const fillContainer = Boolean(aspectRatio);
  const resolvedContainerBorderRadius = containerBorderRadius ?? borderRadius;
  const normalizedSrc = normalizeAssetUrl(src);
  const normalizedAvif = normalizeAssetUrl(avif);
  const normalizedWebp = normalizeAssetUrl(webp);

  useEffect(() => {
    if (!shouldParallax) {
      parallaxY.set(0);
      return;
    }

    const updateParallax = () => {
      const element = containerRef.current;
      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalTravel = viewportHeight + rect.height;
      const progress = totalTravel > 0 ? (viewportHeight - rect.top) / totalTravel : 0.5;
      const clampedProgress = Math.min(1, Math.max(0, progress));
      const nextY = -parallaxAmount + clampedProgress * parallaxAmount * 2;
      parallaxY.set(nextY);
    };

    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);

    return () => {
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
    };
  }, [parallaxAmount, parallaxY, shouldParallax]);

  return (
    <Container
      ref={containerRef}
      className={className}
      $aspectRatio={aspectRatio}
      $borderRadius={resolvedContainerBorderRadius}
      $backgroundColor={backgroundColor}
      $border={border}
      {...(disableRevealAnimation
        ? {}
        : {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.2 },
            transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
          })}
    >
      <ImageFrame
        $imagePaddingBlock={imagePaddingBlock}
        $imagePaddingInline={imagePaddingInline}
        $fillContainer={fillContainer}
        $borderRadius={borderRadius}
      >
        <Picture $fillContainer={fillContainer} $borderRadius={borderRadius}>
          {normalizedAvif && <source srcSet={normalizedAvif} type="image/avif" />}
          {normalizedWebp && <source srcSet={normalizedWebp} type="image/webp" />}
          <StyledImg
            src={normalizedSrc}
            alt={alt}
            loading={loading}
            decoding={decoding}
            onLoad={onLoad}
            style={{ y: shouldParallax ? parallaxY : 0, scale: imageScale, mixBlendMode: mixBlendMode as React.CSSProperties["mixBlendMode"] | undefined }}
            $objectFit={objectFit}
            $objectPosition={objectPosition}
            $hasParallax={shouldParallax}
            $fillContainer={fillContainer}
            $borderRadius={borderRadius}
          />
        </Picture>
      </ImageFrame>
    </Container>
  );
}

export type { ResponsiveImageProps };

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { CaseStudyImage } from "../../types/caseStudy";
import ResponsiveImage from "./ResponsiveImage";

interface ImageCarouselProps {
  /** 2-10 images shown in a single-slide carousel */
  images: CaseStudyImage[];

  /** If true, carousel auto-advances on an interval */
  autoPlay?: boolean;

  /** Auto-advance interval in milliseconds */
  intervalMs?: number;

  /** Show pause/play and chevron controls */
  showControls?: boolean;

  /** Show dot pagination */
  showDots?: boolean;
}

const CarouselRoot = styled.div`
  width: 100%;
`;


import React from "react";

const Frame = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof motion.div> & { $aspectRatio?: string }>((props, ref) => {
  const { $aspectRatio, style, ...rest } = props;
  return (
    <motion.div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        borderRadius: "8px",
        overflow: "hidden",
        aspectRatio: $aspectRatio || "3 / 2",
        maxHeight: "1080px",
        ...(style || {})
      }}
      {...rest}
    />
  );
});
Frame.displayName = "Frame";

const ControlsOverlay = styled.div<{ $visible: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: opacity 0.2s ease;
  pointer-events: none;
`;

const NavButton = styled.button<{ $side: "left" | "right" }>`
  pointer-events: auto;
  position: absolute;
  top: 50%;
  ${(props) => props.$side}: 1rem;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  border-radius: 999px;
  border: none;
  background: rgba(17, 17, 17, 0.72);
  color: #fff;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background: rgba(17, 17, 17, 0.88);
  }
`;

const PauseButton = styled.button`
  pointer-events: auto;
  width: 68px;
  height: 68px;
  border-radius: 999px;
  border: none;
  background: rgba(17, 17, 17, 0.72);
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background: rgba(17, 17, 17, 0.88);
  }
`;

const Slide = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transition: opacity 320ms ease;
`;

const SlideImage = styled(ResponsiveImage)`
  width: 100%;
  height: 100%;
`;

const Dots = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${(props) => (props.$active ? "var(--text-strong, #333)" : "var(--border, #ccc)")};
  transform: ${(props) => (props.$active ? "scale(1.3)" : "scale(1)")};
  transition: all 0.3s;
`;

export default function ImageCarousel({
  images,
  autoPlay = false,
  intervalMs = 4000,
  showControls = true,
  showDots = true,
}: ImageCarouselProps) {

  // Auto-focus the carousel frame on mount only if preventScroll is supported
  useEffect(() => {
    if (!frameRef.current) return;
    let supportsPreventScroll = false;
    try {
      frameRef.current.focus({ preventScroll: true });
      supportsPreventScroll = true;
    } catch {
      // If error, preventScroll is not supported
    }
    // If not supported, do not focus at all (prevents scroll jumps in Safari)
    if (!supportsPreventScroll) {
      // Do nothing
    }
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const total = images.length;

  const goTo = (nextIndex: number) => {
    if (!total) return;
    const wrapped = (nextIndex + total) % total;
    setPrevIndex(activeIndex);
    setIsImageLoaded(false);
    setActiveIndex(wrapped);
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  useEffect(() => {
    if (!autoPlay || isManuallyPaused || total < 2) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [autoPlay, intervalMs, isManuallyPaused, total]);

  useEffect(() => {
    if (total < 2) return;

    const preloadSource = (source: string) =>
      new Promise<void>((resolve) => {
        const preloader = new Image();
        preloader.onload = async () => {
          if (typeof preloader.decode === "function") {
            try {
              await preloader.decode();
            } catch {
              // Ignore decode errors and proceed.
            }
          }
          resolve();
        };
        preloader.onerror = () => resolve();
        preloader.src = source;
      });

    const preloadAll = async () => {
      const sources = images.flatMap((img) =>
        [img.avif, img.webp, img.src].filter((source): source is string => Boolean(source))
      );
      await Promise.all(sources.map((source) => preloadSource(source)));
    };

    void preloadAll();
  }, [images, total]);

  if (!total) return null;
  const activeImage = images[activeIndex];
  const prevImage = images[prevIndex];

  return (
    <CarouselRoot>
      <Frame
        ref={frameRef}
        $aspectRatio={activeImage.aspectRatio}
        tabIndex={0}
        data-carousel-frame="true"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            setIsManuallyPaused(true);
            goNext();
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            setIsManuallyPaused(true);
            goPrev();
          }
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.x > 80) {
            goPrev();
          } else if (info.offset.x < -80) {
            goNext();
          }
        }}
      >
        {/* Previous image, visible while new image loads */}
        {!isImageLoaded && (
          <Slide style={{ zIndex: 1 }}>
            <SlideImage
              key={`prev-${prevImage.src}-${prevIndex}`}
              src={prevImage.src}
              alt={prevImage.alt}
              avif={prevImage.avif}
              webp={prevImage.webp}
              aspectRatio={prevImage.aspectRatio || "3/2"}
              borderRadius={prevImage.borderRadius || "8px"}
              backgroundColor={prevImage.backgroundColor}
              imagePaddingBlock={prevImage.imagePaddingBlock}
              imagePaddingInline={prevImage.imagePaddingInline}
              objectFit={prevImage.objectFit || "cover"}
              objectPosition={prevImage.objectPosition || "center"}
              border={prevImage.containerBorder}
              disableRevealAnimation
              loading="eager"
              decoding="auto"
            />
          </Slide>
        )}
        {/* Active image */}
        <Slide style={{ zIndex: 2 }}>
          <SlideImage
            key={`active-${activeImage.src}-${activeIndex}`}
            src={activeImage.src}
            alt={activeImage.alt}
            avif={activeImage.avif}
            webp={activeImage.webp}
            aspectRatio={activeImage.aspectRatio || "3/2"}
            borderRadius={activeImage.borderRadius || "8px"}
            backgroundColor={activeImage.backgroundColor}
            imagePaddingBlock={activeImage.imagePaddingBlock}
            imagePaddingInline={activeImage.imagePaddingInline}
            objectFit={activeImage.objectFit || "cover"}
            objectPosition={activeImage.objectPosition || "center"}
            border={activeImage.containerBorder}
            disableRevealAnimation
            loading="eager"
            decoding="auto"
            onLoad={() => setIsImageLoaded(true)}
            style={{ position: isImageLoaded ? "relative" : "absolute" }}
          />
        </Slide>

        {total > 1 && showControls && (
          <ControlsOverlay $visible={isHovered}>
            <NavButton
              type="button"
              $side="left"
              aria-label="Previous image"
              onClick={goPrev}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </NavButton>

            {autoPlay && (
              <PauseButton
                type="button"
                aria-label={isManuallyPaused ? "Resume slideshow" : "Pause slideshow"}
                onClick={() => setIsManuallyPaused((prev) => !prev)}
              >
                {isManuallyPaused ? "▶" : "❚❚"}
              </PauseButton>
            )}

            <NavButton
              type="button"
              $side="right"
              aria-label="Next image"
              onClick={goNext}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </NavButton>
          </ControlsOverlay>
        )}
      </Frame>

      {total > 1 && showDots && (
        <Dots>
          {images.map((image, idx) => (
            <Dot
              key={`${image.src}-${idx}`}
              type="button"
              $active={idx === activeIndex}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === activeIndex}
              onClick={() => goTo(idx)}
            />
          ))}
        </Dots>
      )}
    </CarouselRoot>
  );
}

export type { ImageCarouselProps };

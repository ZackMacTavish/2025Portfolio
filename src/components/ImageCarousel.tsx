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

/**
 * Container 1 — outer wrapper that occupies the full section width.
 * Padding here creates breathing room around Container 2 without
 * touching the image, so border-radius can clip image corners cleanly.
 */
const CarouselRoot = styled.div`
  width: 100%;
`;

/**
 * Container 2 — the image frame. Uses the active image's natural aspect
 * ratio so it hugs the image dimensions exactly. Border-radius + overflow:hidden
 * clips the image at the rounded corners directly.
 */
import React from "react";

const Frame = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof motion.div> & { $aspectRatio?: string }>((props, ref) => {
  const { $aspectRatio, style, ...rest } = props;
  return (
    <motion.div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        /* Use the image's natural aspect ratio so Container 2 hugs the content.
           Falls back to 17/10 (the actual ratio of the partnership screenshots). */
        aspectRatio: $aspectRatio || "16 / 9",
        /* Hard cap so extremely tall images (portrait UI, scroll comps) don't
           push page content out of view. objectFit:cover on the image handles
           the visible crop gracefully. */
        maxHeight: "min(80vh, 1000px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        outline: "none",
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
  intervalMs = 7000,
  showControls = true,
  showDots = true,
  activeDecoding = "sync",
  fixedAspectRatio,
}: ImageCarouselProps & { activeDecoding?: "sync" | "auto"; fixedAspectRatio?: string }) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const total = images.length;

  // Single IntersectionObserver: auto-focus for keyboard nav AND gate autoplay.
  // Fires when ≥80 % of the carousel is visible. preventScroll avoids page jumps.
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries[0]?.isIntersecting ?? false;
        setIsInViewport(inView);
        if (inView) frame.focus({ preventScroll: true });
      },
      { threshold: 0.8 }
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  const goTo = (nextIndex: number) => {
    if (!total) return;
    const wrapped = (nextIndex + total) % total;
    setPrevIndex(activeIndex);
    setIsImageLoaded(false);
    setActiveIndex(wrapped);
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  // Autoplay: only runs while carousel is ≥80 % in the viewport and not
  // manually paused. Uses the functional-update form of setActiveIndex so
  // we can atomically update prevIndex without a stale closure.
  useEffect(() => {
    if (!autoPlay || isManuallyPaused || total < 2 || !isInViewport) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        setPrevIndex(prev);
        return (prev + 1) % total;
      });
      setIsImageLoaded(false);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [autoPlay, intervalMs, isManuallyPaused, total, isInViewport]);

  if (!total) return null;
  const activeImage = images[activeIndex];
  const prevImage = images[prevIndex];

  return (
    <CarouselRoot>
      <Frame
        ref={frameRef}
        $aspectRatio={fixedAspectRatio || activeImage.aspectRatio || "16 / 9"}
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
        {/* Previous image — always fully opaque, acts as an instant placeholder
            so there is never a gap of partial transparency during crossfade.
            The active slide fades IN on top of it. */}
        <Slide style={{ zIndex: 1 }}>
          <SlideImage
            key={`prev-${prevImage.src}-${prevIndex}`}
            src={prevImage.src}
            alt={prevImage.alt}
            avif={prevImage.avif}
            webp={prevImage.webp}
            aspectRatio={prevImage.aspectRatio || "3/2"}
            borderRadius={prevImage.borderRadius || "16px"}
            backgroundColor={prevImage.backgroundColor}
            imagePaddingBlock={prevImage.imagePaddingBlock}
            imagePaddingInline={prevImage.imagePaddingInline}
            objectFit={prevImage.objectFit || "cover"}
            objectPosition={prevImage.objectPosition || "top center"}
            border={prevImage.containerBorder}
            disableRevealAnimation
            loading="lazy"
            decoding="auto"
          />
        </Slide>
        {/* Active image — fades in over the prev placeholder once decoded */}
        <Slide style={{
          zIndex: 2,
          opacity: isImageLoaded ? 1 : 0,
          transition: "opacity 400ms ease",
        }}>
          <SlideImage
            key={`active-${activeImage.src}-${activeIndex}`}
            src={activeImage.src}
            alt={activeImage.alt}
            avif={activeImage.avif}
            webp={activeImage.webp}
            aspectRatio={activeImage.aspectRatio || "3/2"}
            borderRadius={activeImage.borderRadius || "16px"}
            backgroundColor={activeImage.backgroundColor}
            imagePaddingBlock={activeImage.imagePaddingBlock}
            imagePaddingInline={activeImage.imagePaddingInline}
            objectFit={activeImage.objectFit || "cover"}
            objectPosition={activeImage.objectPosition || "top center"}
            border={activeImage.containerBorder}
            disableRevealAnimation
            loading="lazy"
            decoding={activeDecoding}
            onLoad={() => setIsImageLoaded(true)}
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

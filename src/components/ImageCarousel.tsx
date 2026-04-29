import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
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

const Frame = styled(motion.div)`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 3 / 2;
  background: #f0efeb;
`;

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

const Slide = styled(motion.div)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
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
  background: ${(props) => (props.$active ? "#333" : "#ccc")};
  transform: ${(props) => (props.$active ? "scale(1.3)" : "scale(1)")};
  transition: all 0.3s;
`;

const slideTransition = {
  duration: 0,
  ease: [0.25, 0.1, 0.25, 1],
};

export default function ImageCarousel({
  images,
  autoPlay = false,
  intervalMs = 4000,
  showControls = true,
  showDots = true,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);

  const total = images.length;

  const goTo = (nextIndex: number) => {
    if (!total) return;
    const wrapped = (nextIndex + total) % total;
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

  return (
    <CarouselRoot>
      <Frame
        tabIndex={0}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            goNext();
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
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
        <AnimatePresence initial={false} mode="sync">
          <Slide
            key={`${activeImage.src}-${activeIndex}`}
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: 0 }}
            transition={slideTransition}
          >
            <SlideImage
              src={activeImage.src}
              alt={activeImage.alt}
              avif={activeImage.avif}
              webp={activeImage.webp}
              borderRadius="0"
              objectFit="cover"
              disableRevealAnimation
              loading="eager"
              decoding="auto"
            />
          </Slide>
        </AnimatePresence>

        {total > 1 && showControls && (
          <ControlsOverlay $visible={isHovered}>
            <NavButton
              type="button"
              $side="left"
              aria-label="Previous image"
              onClick={goPrev}
            >
              ‹
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
              ›
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

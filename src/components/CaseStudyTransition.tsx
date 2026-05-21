import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  type TransitionImage,
  CARD_TRANSITION_DECODE_GATE_MS,
  warmPreloadTransitionImages,
  preloadTransitionImages,
  measureTransitionDecodeDuration,
  shouldRunCardTransition,
  areTransitionImagesDecoded,
} from "./transitionGate";

// Re-export the gate helpers so existing imports keep working.
export {
  CARD_TRANSITION_DECODE_GATE_MS,
  warmPreloadTransitionImages,
  preloadTransitionImages,
  measureTransitionDecodeDuration,
  shouldRunCardTransition,
};
export type { TransitionImage };

interface CaseStudyTransitionProps {
  /** Array of exactly 5 images to animate */
  images: TransitionImage[];

  /** Optional source image that should participate in shared-layout handoff */
  sharedSourceImageSrc?: string;

  /** Controls mount/unmount of the transition overlay */
  isActive: boolean;

  /** Callback fired when animation completes — triggers page reveal */
  onComplete: () => void;

  /** Optional layoutId for shared layout animation with the clicked card */
  layoutId?: string;

  /** Optional reverse animation (returning to browsing) */
  isReverse?: boolean;

  /** Optional background color for the overlay layer */
  overlayColor?: string;

  /** Optional background color for the loading state */
  loadingBackgroundColor?: string;
}

const cardEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const StyledContainer = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledOverlay = styled(motion.div)<{ $overlayColor: string }>`
  position: absolute;
  inset: 0;
  background: ${({ $overlayColor }) => $overlayColor};
`;

const StyledLoadingContainer = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
`;

const StyledLoadingDot = styled(motion.div)`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: white;
`;

const StyledCard = styled(motion.img)`
  display: block;
  position: absolute;
  overflow: hidden;
  border-radius: 0.75rem;
  object-fit: cover;
  object-position: var(--card-object-position, center center);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backface-visibility: hidden;
  contain: paint;
  will-change: transform, opacity;
  transform-origin: bottom center;
`;

/**
 * CaseStudyTransition
 *
 * A full-screen overlay animation component that plays when a user clicks
 * a case study card. 5 images fan out like playing cards in a cinematic
 * reveal, then collapse and fade away to reveal the case study page.
 *
 * Features:
 * - Image preloading with loading state
 * - Scroll lock to prevent background scrolling
 * - Keyboard shortcut (Escape) to skip animation
 * - Responsive mobile adjustments
 * - Reduced motion support
 * - Reverse animation support
 *
 * Animation phases:
 * - Phase 1 (0-400ms): Stack appears with staggered spring animation
 * - Phase 2 (400-1600ms): Cards fan out with rotation and positioning
 * - Phase 3 (1600-2500ms): Cards collapse, scale up, and fade away
 *
 * @example
 * <CaseStudyTransition
 *   images={transitionImages}
 *   isActive={showTransition}
 *   onComplete={() => setShowTransition(false)}
 *   layoutId="case-study-slug"
 * />
 */
export default function CaseStudyTransition({
  images,
  isActive,
  onComplete,
  layoutId,
  sharedSourceImageSrc,
  isReverse = false,
  overlayColor = "black",
  loadingBackgroundColor = "rgba(0, 0, 0, 0.85)",
}: CaseStudyTransitionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [transitionReady, setTransitionReady] = useState(false);
  const hasCalledComplete = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    hasCalledComplete.current = false;
  }, [isActive, images, isReverse]);

  const completeTransition = () => {
    if (hasCalledComplete.current) {
      return;
    }

    hasCalledComplete.current = true;
    onCompleteRef.current();
  };

  // Fire onComplete after the full 3s animation finishes — never rely on individual card onAnimationComplete
  useEffect(() => {
    if (!isActive || !imagesLoaded || !transitionReady || isReverse) return;
    const ANIMATION_DURATION = prefersReducedMotion ? 400 : 2450;
    const timer = setTimeout(() => {
      completeTransition();
    }, ANIMATION_DURATION);
    return () => clearTimeout(timer);
  }, [isActive, imagesLoaded, transitionReady, isReverse, prefersReducedMotion]);

  // Validate exactly 5 images
  if (images.length !== 5) {
    console.warn(
      `CaseStudyTransition expects exactly 5 images, got ${images.length}`
    );
  }

  // Detect mobile (max 768px width) for responsive adjustments
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile-responsive fan configuration
  const fanAngles = isMobile ? [-6, -3, 0, 3, 6] : [-12, -6, 0, 6, 12];
  const fanX = isMobile
    ? ["-7.5%", "-3.75%", "0", "3.75%", "7.5%"]
    : ["-15%", "-7%", "0", "7%", "15%"];
  const cardWidth = isMobile ? "85vw" : "55vw";
  const cardMaxWidth = isMobile ? "400px" : "700px";
  const sharedLayoutIndex = sharedSourceImageSrc
    ? images.findIndex((image) => image.src === sharedSourceImageSrc)
    : -1;

  // Block the transition until the active image set has been decoded.
  // This avoids cards shifting on slower machines while the shared layout
  // animation is already in flight.
  useEffect(() => {
    if (!isActive) {
      setImagesLoaded(false);
      setTransitionReady(false);
      return;
    }

    if (areTransitionImagesDecoded(images)) {
      setImagesLoaded(true);
      return;
    }

    let isCancelled = false;
    setImagesLoaded(false);

    preloadTransitionImages(images)
      .catch(() => {
        // Errors are handled inside preloadTransitionImages and still resolve,
        // but keep a local catch so activation never rejects.
        return false;
      })
      .then((allDecoded) => {
        if (!isCancelled) {
          if (allDecoded) {
            setImagesLoaded(true);
            return;
          }

          cardTransitionsLockedOffForSession = true;
          completeTransition();
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [isActive, images]);

  useEffect(() => {
    if (!isActive || !imagesLoaded) {
      setTransitionReady(false);
      return;
    }

    let frameOne = 0;
    let frameTwo = 0;

    frameOne = window.requestAnimationFrame(() => {
      frameTwo = window.requestAnimationFrame(() => {
        setTransitionReady(true);
      });
    });

    return () => {
      window.cancelAnimationFrame(frameOne);
      window.cancelAnimationFrame(frameTwo);
    };
  }, [isActive, imagesLoaded]);

  // Scroll lock — compensate for scrollbar width to prevent layout shift
  useEffect(() => {
    if (isActive) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      };
    }
  }, [isActive]);

  // Keyboard shortcut: Escape to skip animation
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        e.preventDefault();
        completeTransition();
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [isActive]);

  // Reduced motion variant: simple crossfade
  if (prefersReducedMotion) {
    return (
      <AnimatePresence>
        {isActive && imagesLoaded && transitionReady && (
          <StyledContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onAnimationComplete={completeTransition}
          >
            {images.map((image, index) => (
              <StyledCard
                key={image.src}
                src={image.src}
                alt={image.alt}
                decoding="sync"
                fetchPriority="high"
                style={{
                  "--card-object-position": image.objectPosition || "center center",
                  width: cardWidth,
                  maxWidth: cardMaxWidth,
                  aspectRatio: "3 / 2",
                  zIndex: 10 + index,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            ))}
          </StyledContainer>
        )}
      </AnimatePresence>
    );
  }

  // Loading state indicator
  if (isActive && (!imagesLoaded || !transitionReady)) {
    return (
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: loadingBackgroundColor,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Loading spinner */}
        <StyledLoadingDot
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </motion.div>
    );
  }

  // Full motion variant with 3-phase animation or reverse animation
  return (
    <AnimatePresence>
      {isActive && imagesLoaded && transitionReady && (
        <StyledContainer
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0 }}
        >
          {/* Background overlay */}
          <StyledOverlay
            $overlayColor={overlayColor}
            initial={{ opacity: 0.85 }}
            animate={{ opacity: isReverse ? 0 : 0.85 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                duration: isReverse ? 1.5 : 2.5,
                ease: "easeInOut",
              },
            }}
          />

          {/* Card stack */}
          {images.map((image, index) => {
            // Calculate reverse animation values (opposite of forward)
            const reverseAnimateValues = isReverse
              ? {
                  opacity: [1, 1, 0],
                  scale: [1, 1, 0.8],
                  y: [-20, 0, 60],
                  rotate: [fanAngles[index], 0, 0],
                  x: [fanX[index], 0, 0],
                }
              : {
                  // Phase 1 (0→0.4s): emerge from below
                  // Phase 2 (0.4→1.4s): fan open
                  // Phase 3 (1.4→2.4s): close back to stack — navigate immediately, no fade
                  opacity: [1, 1, 1, 1],
                  scale: [0.8, 1, 1, 1],
                  y: [60, 0, -20, 0],
                  rotate: [0, 0, fanAngles[index], 0],
                  x: [0, 0, fanX[index], 0],
                };

            const reverseTransitionValues = isReverse
              ? {
                  opacity: {
                    times: [0, 0.4, 1],
                    duration: 1.5,
                    ease: cardEase,
                  },
                  scale: {
                    times: [0, 0.4, 1],
                    duration: 1.5,
                    ease: cardEase,
                  },
                  y: {
                    times: [0, 0.4, 1],
                    duration: 1.5,
                    ease: cardEase,
                  },
                  rotate: {
                    times: [0, 0.4, 1],
                    duration: 1.5,
                    ease: cardEase,
                  },
                  x: {
                    times: [0, 0.4, 1],
                    duration: 1.5,
                    ease: cardEase,
                  },
                }
              : {
                    opacity: {
                      times: [0, 0.17, 0.58, 1],
                      duration: 2.4,
                      ease: cardEase,
                    },
                    scale: {
                      times: [0, 0.17, 0.58, 1],
                      duration: 2.4,
                      ease: cardEase,
                    },
                    y: {
                      times: [0, 0.17, 0.58, 1],
                      duration: 2.4,
                      ease: cardEase,
                    },
                    rotate: {
                      times: [0, 0.17, 0.58, 1],
                      duration: 2.4,
                      ease: cardEase,
                    },
                    x: {
                      times: [0, 0.17, 0.58, 1],
                      duration: 2.4,
                      ease: cardEase,
                    },
                  };

            return (
              <StyledCard
                key={image.src}
                src={image.src}
                alt={image.alt}
                decoding="sync"
                fetchPriority="high"
                style={{
                  "--card-object-position": image.objectPosition || "center center",
                  width: cardWidth,
                  maxWidth: cardMaxWidth,
                  aspectRatio: "3 / 2",
                  zIndex: 10 + index,
                }}
                layoutId={index === sharedLayoutIndex ? layoutId : undefined}
                loading="eager"
                initial={{
                  opacity: isReverse ? 1 : 0,
                  scale: isReverse ? 1 : 0.8,
                  y: isReverse ? -20 : 60,
                  rotate: isReverse ? fanAngles[index] : 0,
                  x: isReverse ? fanX[index] : 0,
                }}
                animate={reverseAnimateValues}
                transition={reverseTransitionValues}
                onAnimationComplete={() => {
                  // Only used for reverse animation completion
                  if (isReverse && index === 4) {
                    completeTransition();
                  }
                }}
              />
            );
          })}
        </StyledContainer>
      )}
    </AnimatePresence>
  );
}

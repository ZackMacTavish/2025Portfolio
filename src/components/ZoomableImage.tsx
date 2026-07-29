import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import styled from "styled-components";

type Props = {
  /** Unique id so the inline thumbnail and the overlay can share a layoutId. */
  id: string;
  /** Optional override class to control inline cursor/affordance styling. */
  className?: string;
  /** Inline content (typically a ResponsiveImage). Rendered at normal size. */
  children: ReactNode;
  /** What to render inside the overlay. Defaults to a copy of `children`. */
  overlayContent?: ReactNode;
  /** Accessible label announced to assistive tech for the trigger button. */
  ariaLabel?: string;
  /** Aspect ratio of the contained image, e.g. "16/9" or "1418/2192". Used to size the overlay stage. */
  aspectRatio?: string;
};

const TriggerButton = styled(motion.button)`
  appearance: none;
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  display: block;
  width: 100%;
  cursor: zoom-in;
  border-radius: inherit;
  position: relative;

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 4px;
  }
`;

const ZoomBadge = styled.span`
  position: absolute;
  top: clamp(0.75rem, 1.5vw, 1rem);
  right: clamp(0.75rem, 1.5vw, 1rem);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.7rem 0.45rem 0.55rem;
  border-radius: 999px;
  background: rgba(15, 15, 15, 0.78);
  color: #fff;
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 0.18s ease, transform 0.18s ease;
  pointer-events: none;

  svg {
    width: 1rem;
    height: 1rem;
    display: block;
  }

  ${TriggerButton}:hover &,
  ${TriggerButton}:focus-visible & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(10, 10, 10, 0.88);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 4vw, 3rem);
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const Viewer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  touch-action: none;
  cursor: inherit;
`;

const ZoomStage = styled(motion.div)<{ $ratio: number }>`
  position: relative;
  /* For tall images (ratio < 0.75) render at a fixed wide width so the browser
     allocates enough pixels for sharp zoom. The Viewer's overflow:hidden clips
     the excess height; users can pan/drag to explore the full image. */
  width: ${(p) =>
    p.$ratio < 0.75
      ? "min(90vw, 1400px)"
      : `min(95vw, ${92 * p.$ratio}vh, 1800px)`};
  aspect-ratio: ${(p) => p.$ratio};
  max-height: ${(p) => (p.$ratio < 0.75 ? "none" : "92vh")};
  cursor: inherit;
  will-change: transform;
  display: flex;
  align-items: stretch;
  justify-content: stretch;

  > * {
    width: 100%;
    height: 100%;
    user-select: none;
    -webkit-user-drag: none;
    pointer-events: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: clamp(0.75rem, 2vw, 1.25rem);
  right: clamp(0.75rem, 2vw, 1.25rem);
  z-index: 2;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.18s ease, transform 0.18s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.75);
    transform: scale(1.04);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 3px;
  }
`;

const ControlBar = styled.div`
  position: fixed;
  left: 50%;
  bottom: clamp(0.75rem, 2.5vw, 1.5rem);
  transform: translateX(-50%);
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.92);
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  white-space: nowrap;
  pointer-events: auto;
`;

const ControlButton = styled.button`
  appearance: none;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  font-size: 1rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s ease, transform 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;

const ControlDivider = styled.span`
  width: 1px;
  height: 1.25rem;
  background: rgba(255, 255, 255, 0.18);
  margin: 0 0.35rem;
`;

const ControlText = styled.span`
  padding: 0 0.35rem;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.78rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const ZOOM_STEP = 0.18;

function parseAspectRatio(input: string): number {
  const trimmed = input.trim();
  if (trimmed.includes("/")) {
    const [w, h] = trimmed.split("/").map((n) => parseFloat(n));
    if (w && h) return w / h;
  }
  const num = parseFloat(trimmed);
  return Number.isFinite(num) && num > 0 ? num : 16 / 9;
}

export default function ZoomableImage({
  id,
  className,
  children,
  overlayContent,
  ariaLabel = "Open image in full-screen viewer",
  aspectRatio = "16/9",
}: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const scale = useMotionValue(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Portal mount-once guard for SSR / prerender.
  useEffect(() => {
    setMounted(true);
  }, []);

  /** For tall images, compute a y offset that shows the top of the stage. */
  const getInitialY = useCallback(() => {
    const ratio = parseAspectRatio(aspectRatio);
    if (ratio >= 0.75 || typeof window === "undefined") return 0;
    const stageWidth = Math.min(window.innerWidth * 0.9, 1400);
    const stageHeight = stageWidth / ratio;
    // The Backdrop has padding: clamp(1rem, 4vw, 3rem) on all sides,
    // so the Viewer's usable height is innerHeight minus that top+bottom padding.
    const backdropPadding = Math.min(Math.max(16, window.innerWidth * 0.04), 48);
    const viewerHeight = window.innerHeight - backdropPadding * 2;
    return Math.max(0, (stageHeight - viewerHeight) / 2);
  }, [aspectRatio]);

  const resetTransform = useCallback(() => {
    scale.set(1);
    x.set(0);
    y.set(getInitialY());
  }, [scale, x, y, getInitialY]);

  const handleOpen = useCallback(() => {
    scale.set(1);
    x.set(0);
    y.set(getInitialY());
    setOpen(true);
  }, [scale, x, y, getInitialY]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // Body scroll lock + ESC handler + focus restore
  useEffect(() => {
    if (!open || typeof document === "undefined") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "+" || e.key === "=") {
        scale.set(Math.min(MAX_SCALE, scale.get() + ZOOM_STEP));
      }
      if (e.key === "-" || e.key === "_") {
        const next = Math.max(MIN_SCALE, scale.get() - ZOOM_STEP);
        scale.set(next);
        if (next === MIN_SCALE) {
          x.set(0);
          y.set(getInitialY());
        }
      }
      if (e.key === "0") {
        resetTransform();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      // Restore focus to the trigger.
      triggerRef.current?.focus();
    };
  }, [open, handleClose, scale, x, y, resetTransform]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? -1 : 1;
    const delta = direction * ZOOM_STEP;
    const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale.get() + delta));
    scale.set(next);
    if (next === MIN_SCALE) {
      x.set(0);
      y.set(getInitialY());
    }
  };

  const handleDoubleClick = () => {
    if (scale.get() > 1) {
      resetTransform();
    } else {
      scale.set(2);
    }
  };

  const handleDragEnd = () => {
    // For tall images the image extends beyond the viewport at scale=1, so
    // panning is intentional — don't snap back. Only snap to the initial
    // position for normal-ratio images where scale=1 means fully visible.
    const isTall = parseAspectRatio(aspectRatio) < 0.75;
    if (!isTall && scale.get() <= 1.001) {
      x.set(0);
      y.set(0);
    }
  };

  const stageStyle: CSSProperties = {
    x,
    y,
    scale,
  } as CSSProperties;

  const overlayChildren = overlayContent ?? children;

  return (
    <>
      <TriggerButton
        ref={triggerRef}
        type="button"
        layoutId={`zoomable-${id}`}
        className={className}
        onClick={handleOpen}
        aria-label={ariaLabel}
        style={{ visibility: open ? "hidden" : "visible" }}
      >
        {children}
        <ZoomBadge aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
          Click to zoom
        </ZoomBadge>
      </TriggerButton>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <Backdrop
                key="zoomable-backdrop"
                role="dialog"
                aria-modal="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
                onClick={handleClose}
              >
                <CloseButton
                  type="button"
                  aria-label="Close image viewer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                >
                  ×
                </CloseButton>

                <Viewer
                  onClick={(e) => e.stopPropagation()}
                  onWheel={handleWheel}
                >
                  <ZoomStage
                    $ratio={parseAspectRatio(aspectRatio)}
                    layoutId={
                      prefersReducedMotion ? undefined : `zoomable-${id}`
                    }
                    style={stageStyle}
                    drag
                    dragMomentum={false}
                    dragElastic={0.08}
                    onDragEnd={handleDragEnd}
                    onDoubleClick={handleDoubleClick}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 28,
                    }}
                  >
                    {overlayChildren}
                  </ZoomStage>
                </Viewer>

                <ControlBar onClick={(e) => e.stopPropagation()}>
                  <ControlButton
                    type="button"
                    aria-label="Zoom out"
                    onClick={() => {
                      const next = Math.max(
                        MIN_SCALE,
                        scale.get() - ZOOM_STEP,
                      );
                      scale.set(next);
                      if (next === MIN_SCALE) {
                        x.set(0);
                        y.set(getInitialY());
                      }
                    }}
                  >
                    −
                  </ControlButton>
                  <ControlButton
                    type="button"
                    aria-label="Reset zoom"
                    onClick={resetTransform}
                  >
                    ⤢
                  </ControlButton>
                  <ControlButton
                    type="button"
                    aria-label="Zoom in"
                    onClick={() => {
                      scale.set(
                        Math.min(MAX_SCALE, scale.get() + ZOOM_STEP),
                      );
                    }}
                  >
                    +
                  </ControlButton>
                  <ControlDivider />
                  <ControlText>
                    Scroll to zoom · drag to pan · double-click to reset · Esc
                    to close
                  </ControlText>
                </ControlBar>
              </Backdrop>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

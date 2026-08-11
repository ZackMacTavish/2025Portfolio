import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import CaseStudyTransition, {
  shouldRunCardTransition,
  warmPreloadTransitionImages,
} from "./CaseStudyTransition";
import { caseStudies } from "../data/caseStudies";

const DESTINATION_WAIT_TIMEOUT_MS = 2500;

function afterNextPaint(): Promise<void> {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => resolve());
    });
  });
}

type RenderProps = {
  onClick: (e: MouseEvent) => void;
  onIntent: () => void;
  isTransitioning: boolean;
};

type Props = {
  slug: string;
  to: string;
  /** Optional dynamic import to warm the destination route's chunk. */
  preloadRoute?: () => Promise<unknown>;
  /** Called after the click handler fires (e.g. to close a dropdown). */
  onActivate?: () => void;
  children: (props: RenderProps) => ReactNode;
};

/**
 * Wraps a clickable element so that activating it runs the case-study
 * card-fan transition (when motion + decode budget allows) before
 * navigating, falling back to a direct navigation otherwise.
 */
export default function CaseStudyTransitionLink({
  slug,
  to,
  preloadRoute,
  onActivate,
  children,
}: Props) {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const [showDestinationCover, setShowDestinationCover] = useState(false);
  const caseStudy = caseStudies.find((item) => item.slug === slug);
  const routePreloadRef = useRef<Promise<unknown> | null>(null);

  const preloadDestination = () => {
    if (!preloadRoute) return Promise.resolve();

    if (!routePreloadRef.current) {
      routePreloadRef.current = preloadRoute().catch(() => undefined);
    }

    return routePreloadRef.current;
  };

  const handleIntent = () => {
    if (!caseStudy) return;
    warmPreloadTransitionImages(caseStudy.transitionImages);
    void preloadDestination();
  };

  const handleClick = async (e: MouseEvent) => {
    // Allow modifier-clicks / middle-click to fall through to default link behavior.
    const native = e.nativeEvent as MouseEvent;
    if (
      native.metaKey ||
      native.ctrlKey ||
      native.shiftKey ||
      native.altKey ||
      (native as unknown as { button?: number }).button === 1
    ) {
      return;
    }
    e.preventDefault();
    onActivate?.();
    void preloadDestination();

    if (!caseStudy) {
      navigate(to);
      return;
    }

    const shouldAnimate = await shouldRunCardTransition(
      caseStudy.transitionImages
    );

    if (!shouldAnimate) {
      navigate(to);
      return;
    }

    setTransitioning(true);
  };

  const handleTransitionComplete = async () => {
    await Promise.race([
      preloadDestination(),
      new Promise((resolve) => window.setTimeout(resolve, DESTINATION_WAIT_TIMEOUT_MS)),
    ]);

    setShowDestinationCover(true);
    await afterNextPaint();
    navigate(to);
    setTransitioning(false);
    await afterNextPaint();
    setShowDestinationCover(false);
  };

  return (
    <>
      {children({
        onClick: handleClick,
        onIntent: handleIntent,
        isTransitioning: transitioning,
      })}
      {transitioning && caseStudy && (
        <CaseStudyTransition
          images={caseStudy.transitionImages}
          isActive={true}
          onComplete={handleTransitionComplete}
          layoutId={caseStudy.slug}
          sharedSourceImageSrc={caseStudy.coverImage.src}
        />
      )}
      {showDestinationCover && typeof document !== "undefined" && createPortal(
        <div
          aria-hidden="true"
          data-destination-handoff="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 101,
            background: "var(--surface, #ffffff)",
            pointerEvents: "none",
          }}
        />,
        document.body
      )}
    </>
  );
}

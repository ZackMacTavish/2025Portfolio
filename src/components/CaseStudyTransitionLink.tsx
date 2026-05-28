import { useEffect, useState, type ReactNode, type MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import CaseStudyTransition, {
  shouldRunCardTransition,
  warmPreloadTransitionImages,
} from "./CaseStudyTransition";
import { caseStudies } from "../data/caseStudies";

type RenderProps = {
  onClick: (e: MouseEvent) => void;
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
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  useEffect(() => {
    if (!caseStudy) return;
    warmPreloadTransitionImages(caseStudy.transitionImages);
    if (preloadRoute) {
      preloadRoute().catch(() => {
        /* ignore preload failures */
      });
    }
  }, [caseStudy, preloadRoute]);

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

  return (
    <>
      {children({ onClick: handleClick, isTransitioning: transitioning })}
      {transitioning && caseStudy && (
        <CaseStudyTransition
          images={caseStudy.transitionImages}
          isActive={true}
          onComplete={() => navigate(to)}
          layoutId={caseStudy.slug}
          sharedSourceImageSrc={caseStudy.coverImage.src}
        />
      )}
    </>
  );
}

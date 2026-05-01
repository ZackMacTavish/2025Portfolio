import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { CaseStudy } from "../../types/caseStudy";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyTransition, {
  shouldRunCardTransition,
  warmPreloadTransitionImages,
} from "./CaseStudyTransition";
import CaseStudyPage from "./CaseStudyPage";

interface CaseStudyContainerProps {
  /** Array of case study objects to display in grid */
  caseStudies: CaseStudy[];

  /** Optional callback when user navigates to next project */
  onNavigateNext?: (slug: string) => void;
}

type Phase = "browsing" | "transitioning" | "viewing" | "reverse-transitioning";

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

const BrowsingContainer = styled(motion.div)`
  min-height: 100vh;
  background: white;
  padding: 5rem 1.5rem;

  @media (min-width: 768px) {
    padding: 7rem 1.5rem;
  }
`;

const MaxWidthWrapper = styled.div`
  margin: 0 auto;
  max-width: 80rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ViewingContainer = styled(motion.div)`
  position: relative;
`;

const BackButton = styled.div`
  position: fixed;
  left: 1.5rem;
  top: 1.5rem;
  z-index: 40;
`;

const BackButtonElement = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: white;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 200ms;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

/**
 * CaseStudyContainer
 *
 * Orchestrates the complete case study user flow:
 * BROWSING → (user clicks card) → TRANSITIONING → (animation completes) → VIEWING
 * VIEWING → (user clicks back) → BROWSING
 *
 * Manages state machine, mounts/unmounts components based on phase,
 * and handles transitions between states.
 *
 * @example
 * <CaseStudyContainer
 *   caseStudies={caseStudyData}
 *   onNavigateNext={(slug) => navigate(`/case-study/${slug}`)}
 * />
 */
export default function CaseStudyContainer({
  caseStudies,
  onNavigateNext,
}: CaseStudyContainerProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("browsing");
  const [useCardTransitionForCurrentView, setUseCardTransitionForCurrentView] =
    useState(false);
  const selectionRequestRef = useRef(0);

  // Store/restore scroll position for back navigation
  const saveScrollPosition = () => {
    sessionStorage.setItem("caseStudyGridScrollY", String(window.scrollY));
  };

  const restoreScrollPosition = () => {
    const saved = sessionStorage.getItem("caseStudyGridScrollY");
    if (saved) {
      const y = parseInt(saved, 10);
      window.scrollTo(0, y);
      sessionStorage.removeItem("caseStudyGridScrollY");
    }
  };

  useEffect(() => {
    const allTransitionImages = caseStudies.flatMap(
      (caseStudy) => caseStudy.transitionImages
    );
    warmPreloadTransitionImages(allTransitionImages);
  }, [caseStudies]);

  // Get current active case study
  const activeCaseStudy = caseStudies.find((cs) => cs.slug === activeSlug);

  // Get next case study for footer
  const activeIndex = caseStudies.findIndex((cs) => cs.slug === activeSlug);
  const nextCaseStudy =
    activeIndex !== -1 && activeIndex < caseStudies.length - 1
      ? caseStudies[activeIndex + 1]
      : null;

  // Handle card click: transition to TRANSITIONING phase
  const handleCardSelect = async (slug: string) => {
    const caseStudy = caseStudies.find((cs) => cs.slug === slug);
    if (!caseStudy) return;

    const requestId = selectionRequestRef.current + 1;
    selectionRequestRef.current = requestId;
    saveScrollPosition();
    setActiveSlug(slug);

    const shouldAnimate = await shouldRunCardTransition(
      caseStudy.transitionImages
    );
    if (selectionRequestRef.current !== requestId) return;

    setUseCardTransitionForCurrentView(shouldAnimate);
    setPhase(shouldAnimate ? "transitioning" : "viewing");
  };

  // Handle transition complete: move to VIEWING phase
  const handleTransitionComplete = () => {
    setUseCardTransitionForCurrentView(true);
    setPhase("viewing");
  };

  // Handle back button: trigger reverse transition then return to BROWSING
  const handleBack = () => {
    if (!useCardTransitionForCurrentView) {
      handleReverseTransitionComplete();
      return;
    }

    setPhase("reverse-transitioning");
  };

  // Handle reverse transition complete: return to browsing
  const handleReverseTransitionComplete = () => {
    setPhase("browsing");
    setActiveSlug(null);
    setUseCardTransitionForCurrentView(false);
    // Restore scroll position after phase change (next render)
    setTimeout(() => restoreScrollPosition(), 0);
  };

  // Handle next project navigation
  const handleNextProject = async (slug: string) => {
    const caseStudy = caseStudies.find((cs) => cs.slug === slug);
    if (!caseStudy) return;

    const requestId = selectionRequestRef.current + 1;
    selectionRequestRef.current = requestId;
    setActiveSlug(slug);

    const shouldAnimate = await shouldRunCardTransition(
      caseStudy.transitionImages
    );
    if (selectionRequestRef.current !== requestId) return;

    setUseCardTransitionForCurrentView(shouldAnimate);
    setPhase(shouldAnimate ? "transitioning" : "viewing");
    onNavigateNext?.(slug);
  };

  return (
    <Container data-case-study-container>
      <AnimatePresence mode="wait">
        {/* BROWSING Phase: Grid of cards */}
        {phase === "browsing" && (
          <BrowsingContainer
            key="browsing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MaxWidthWrapper>
              <CardGrid>
                {caseStudies.map((caseStudy) => (
                  <CaseStudyCard
                    key={caseStudy.slug}
                    title={caseStudy.title}
                    subtitle={caseStudy.subtitle}
                    coverImage={caseStudy.coverImage}
                    transitionImages={caseStudy.transitionImages}
                    slug={caseStudy.slug}
                    onSelect={handleCardSelect}
                  />
                ))}
              </CardGrid>
            </MaxWidthWrapper>
          </BrowsingContainer>
        )}

        {/* TRANSITIONING Phase: Full-screen animation overlay */}
        {phase === "transitioning" && activeCaseStudy && (
          <CaseStudyTransition
            key="transition"
            images={activeCaseStudy.transitionImages}
            isActive={true}
            onComplete={handleTransitionComplete}
            layoutId={activeCaseStudy.slug}
          />
        )}

        {/* VIEWING Phase: Full case study page */}
        {phase === "viewing" && activeCaseStudy && (
          <ViewingContainer
            key="viewing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Back Button */}
            <BackButton>
              <BackButtonElement
                onClick={handleBack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to projects"
              >
                ← Back
              </BackButtonElement>
            </BackButton>

            {/* Case Study Page */}
            <CaseStudyPage
              caseStudy={activeCaseStudy}
              nextProject={
                nextCaseStudy
                  ? { title: nextCaseStudy.title, slug: nextCaseStudy.slug }
                  : undefined
              }
              onNextProject={handleNextProject}
            />
          </ViewingContainer>
        )}

        {/* REVERSE TRANSITIONING Phase: Reverse animation when leaving */}
        {phase === "reverse-transitioning" && activeCaseStudy && (
          <CaseStudyTransition
            key="reverse-transition"
            images={activeCaseStudy.transitionImages}
            isActive={true}
            onComplete={handleReverseTransitionComplete}
            layoutId={activeCaseStudy.slug}
            isReverse={true}
          />
        )}
      </AnimatePresence>
    </Container>
  );
}

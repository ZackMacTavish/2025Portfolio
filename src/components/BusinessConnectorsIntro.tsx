import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CaseStudyTransition, { warmPreloadTransitionImages } from "./CaseStudyTransition";
import { caseStudies } from "../data/caseStudies";

const IntroSection = styled.section`
  background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
  padding: 8rem 1.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    padding: 5.5rem 2rem;
  }

  @media (max-width: 640px) {
    padding: 4.5rem 1.25rem;
  }

  @media (min-width: 768px) {
    padding: 10rem 1.5rem;
  }
`;

const IntroContent = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1023px) {
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1023px) {
    gap: 1.1rem;
    max-width: 64ch;
    margin: 0 auto;
  }
`;

const IntroHeading = styled(motion.h2)`
  font-size: clamp(1.85rem, 4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.2;
  color: #111827;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

const IntroSubtitle = styled(motion.p)`
  font-size: 0.98rem;
  line-height: 1.65;
  color: #4b5563;
  margin: 0;
  max-width: 62ch;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.72;
  }
`;

const ImageColumn = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  max-width: 42rem;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1023px) {
    order: -1;
    margin-bottom: 0.5rem;
    max-width: 34rem;
  }
`;

const StyledImage = styled.picture`
  display: block;
  width: 100%;
  height: auto;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const StyledCTA = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  text-decoration: none;
  transition: transform 0.2s ease, opacity 0.2s ease;
  cursor: pointer;
  margin-top: 0;

  &:hover {
    transform: translateX(4px);
    opacity: 0.8;
  }
`;

const Arrow = styled.span`
  display: inline-block;
  font-size: 1.2em;
  line-height: 1;
`;

interface BusinessConnectorsIntroProps {
  onLaunch: () => void;
}

/**
 * BusinessConnectorsIntro
 *
 * Intro section for the Business Connectors case study module.
 * Two-column layout with title, subtitle, and project image.
 */
export function BusinessConnectorsIntro({ onLaunch }: BusinessConnectorsIntroProps) {
  return (
    <IntroSection>
      <IntroContent>
        <TextColumn>
          <IntroHeading
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            Business Connectors
          </IntroHeading>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Within Microsoft Copilot, I designed Business Connectors—an intelligent system that empowers users to connect loyalty accounts across merchants and unlock personalized perks, discounts, and rewards.
          </IntroSubtitle>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            This work demonstrates how thoughtful interaction design and AI integration create genuine value for users by reducing friction and consolidating loyalty rewards into Copilot.
          </IntroSubtitle>
          <StyledCTA
            as="button"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onClick={onLaunch}
          >
            See Case Study <Arrow>→</Arrow>
          </StyledCTA>
        </TextColumn>
        <ImageColumn
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <StyledImage>
            <source srcSet="/assets/business-connectors/Connectors1.avif" type="image/avif" />
            <source srcSet="/assets/business-connectors/Connectors1.webp" type="image/webp" />
            <img src="/assets/business-connectors/Connectors1.jpg" alt="Business Connectors interface design" />
          </StyledImage>
        </ImageColumn>
      </IntroContent>
    </IntroSection>
  );
}

type Phase = "intro" | "transitioning";

/**
 * BusinessConnectorsModule
 *
 * Shows the intro section. When the user clicks "See Case Study",
 * plays the cinematic transition then navigates to /BusinessConnectors.
 */
export function BusinessConnectorsModule() {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const caseStudy = caseStudies[0];

  useEffect(() => {
    warmPreloadTransitionImages(caseStudy.transitionImages);
  }, [caseStudy.transitionImages]);

  return (
    <>
      {/* Intro always stays mounted so it shows beneath the overlay */}
      <BusinessConnectorsIntro onLaunch={() => setTransitioning(true)} />

      {/* Transition overlays on top (position: fixed) without unmounting the intro */}
      {transitioning && (
        <CaseStudyTransition
          images={caseStudy.transitionImages}
          isActive={true}
          onComplete={() => navigate("/BusinessConnectors")}
          layoutId={caseStudy.slug}
        />
      )}
    </>
  );
}

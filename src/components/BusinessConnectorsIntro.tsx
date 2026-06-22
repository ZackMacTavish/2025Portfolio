import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CaseStudyTransition, {
  shouldRunCardTransition,
  warmPreloadTransitionImages,
} from "./CaseStudyTransition";
import { caseStudies } from "../data/caseStudies";
import { CaseStudyIntroCTA, CaseStudyIntroCTAArrow } from "./CaseStudyIntroCTA";

function normalizeAssetUrl(url: string) {
  try {
    return encodeURI(decodeURI(url));
  } catch {
    return encodeURI(url);
  }
}

const IntroSection = styled.section`
  background: ${(p) => (p.theme.name === 'dark'
    ? 'linear-gradient(135deg, #242424 0%, #1c1c1c 100%)'
    : 'linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%)')};
  padding: 8rem 0;
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    padding: 5.5rem 0;
  }

  @media (max-width: 640px) {
    padding: 4.5rem 0;
  }

  @media (min-width: 768px) {
    padding: 10rem 0;
  }
`;

const IntroContent = styled.div`
  box-sizing: border-box;
  max-width: 84rem;
  margin: 0 auto;
  padding: 0 1.5rem;
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
  color: ${(p) => p.theme.strongText};
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
  color: ${(p) => p.theme.mutedText};
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
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1023px) {
    order: -1;
    margin-bottom: 0.5rem;
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
  const connectorPreviewAvif = normalizeAssetUrl("/assets/business-connectors/Connectors1.avif");
  const connectorPreviewWebp = normalizeAssetUrl("/assets/business-connectors/Connectors1.webp");
  const connectorPreviewJpg = normalizeAssetUrl("/assets/business-connectors/Connectors1.jpg");
  const connectorPreviewAvifMobile = normalizeAssetUrl("/assets/business-connectors/Connectors1-mobile-900.avif");
  const connectorPreviewWebpMobile = normalizeAssetUrl("/assets/business-connectors/Connectors1-mobile-900.webp");
  const connectorPreviewJpgMobile = normalizeAssetUrl("/assets/business-connectors/Connectors1-mobile-900.jpg");

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
          <CaseStudyIntroCTA
            type="button"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onClick={onLaunch}
          >
            See Case Study <CaseStudyIntroCTAArrow>→</CaseStudyIntroCTAArrow>
          </CaseStudyIntroCTA>
        </TextColumn>
        <ImageColumn
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <StyledImage>
            <source srcSet={connectorPreviewAvifMobile} type="image/avif" media="(max-width: 900px)" />
            <source srcSet={connectorPreviewAvif} type="image/avif" />
            <source srcSet={connectorPreviewWebpMobile} type="image/webp" media="(max-width: 900px)" />
            <source srcSet={connectorPreviewWebp} type="image/webp" />
            <source srcSet={connectorPreviewJpgMobile} media="(max-width: 900px)" />
            <img
              src={connectorPreviewJpg}
              alt="Business Connectors interface design"
              loading="lazy"
              decoding="async"
            />
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
      <BusinessConnectorsIntro
        onLaunch={async () => {
          const shouldAnimate = await shouldRunCardTransition(
            caseStudy.transitionImages
          );

          if (!shouldAnimate) {
            navigate("/BusinessConnectors");
            return;
          }

          setTransitioning(true);
        }}
      />

      {/* Transition overlays on top (position: fixed) without unmounting the intro */}
      {transitioning && (
        <CaseStudyTransition
          images={caseStudy.transitionImages}
          isActive={true}
          onComplete={() => navigate("/BusinessConnectors")}
          layoutId={caseStudy.slug}
          sharedSourceImageSrc={caseStudy.coverImage.src}
        />
      )}
    </>
  );
}

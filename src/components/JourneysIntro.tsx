import styled from "styled-components";
import { motion } from "framer-motion";
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
  background: linear-gradient(135deg, #edf5ff 0%, #fbfdff 100%);
  padding: 7rem 1.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    padding: 5rem 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 8rem 1.5rem;
  }
`;

const IntroContent = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    gap: 4rem;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  max-width: 68ch;
`;

const Eyebrow = styled(motion.p)`
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #416287;
`;

const IntroHeading = styled(motion.h2)`
  margin: 0;
  font-size: clamp(2.4rem, 4.5vw, 4.3rem);
  line-height: 0.96;
  color: #0f172a;
`;

const IntroSubtitle = styled(motion.p)`
  margin: 0;
  font-size: 1rem;
  line-height: 1.72;
  color: #475569;

  @media (min-width: 768px) {
    font-size: 1.08rem;
  }
`;

const ImageColumn = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(65, 98, 135, 0.14);
  box-shadow: 0 24px 50px rgba(83, 109, 144, 0.12);

  @media (max-width: 1023px) {
    order: -1;
  }
`;

const StyledImage = styled.picture`
  display: block;
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

interface JourneysIntroProps {
  onLaunch: () => void;
}

export function JourneysIntro({ onLaunch }: JourneysIntroProps) {
  const previewAvif = normalizeAssetUrl("/assets/journeys/Journeys L2.avif");
  const previewWebp = normalizeAssetUrl("/assets/journeys/Journeys L2.webp");
  const previewPng = normalizeAssetUrl("/assets/journeys/Journeys L2.jpg");
  const previewAvifMobile = normalizeAssetUrl("/assets/journeys/Journeys L2-mobile-900.avif");
  const previewWebpMobile = normalizeAssetUrl("/assets/journeys/Journeys L2-mobile-900.webp");
  const previewJpgMobile = normalizeAssetUrl("/assets/journeys/Journeys L2-mobile-900.jpg");

  return (
    <IntroSection>
      <IntroContent>
        <TextColumn>
          <Eyebrow
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            New Case Study
          </Eyebrow>
          <IntroHeading
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            Journeys
          </IntroHeading>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            My Shopping / Journeys for Microsoft Shopping explored how to create a central hub that reduces shopping complexity, helps users save money, and surfaces guidance based on where they are in the purchase journey.
          </IntroSubtitle>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            I worked with a principal designer on three user-flow scenarios, interaction models, and feed-based versus static hub layouts. The page now highlights onboarding, account linking, feed modules, and saved-product views from the project itself.
          </IntroSubtitle>
          <CaseStudyIntroCTA
            type="button"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            onClick={onLaunch}
          >
            See Case Study <CaseStudyIntroCTAArrow>→</CaseStudyIntroCTAArrow>
          </CaseStudyIntroCTA>
        </TextColumn>
        <ImageColumn
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <StyledImage>
            <source srcSet={previewAvifMobile} type="image/avif" media="(max-width: 900px)" />
            <source srcSet={previewAvif} type="image/avif" />
            <source srcSet={previewWebpMobile} type="image/webp" media="(max-width: 900px)" />
            <source srcSet={previewWebp} type="image/webp" />
            <source srcSet={previewJpgMobile} media="(max-width: 900px)" />
            <img
              src={previewPng}
              alt="Journeys dashboard with personalized shopping modules"
              loading="lazy"
              decoding="async"
            />
          </StyledImage>
        </ImageColumn>
      </IntroContent>
    </IntroSection>
  );
}

export function JourneysModule() {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const caseStudy = caseStudies.find((item) => item.slug === "journeys");

  useEffect(() => {
    if (!caseStudy) return;
    warmPreloadTransitionImages(caseStudy.transitionImages);
    import("../pages/Journeys/Journeys");
  }, [caseStudy]);

  if (!caseStudy) return null;

  return (
    <>
      <JourneysIntro
        onLaunch={async () => {
          const shouldAnimate = await shouldRunCardTransition(
            caseStudy.transitionImages
          );

          if (!shouldAnimate) {
            navigate("/Journeys");
            return;
          }

          setTransitioning(true);
        }}
      />

      {transitioning && (
        <CaseStudyTransition
          images={caseStudy.transitionImages}
          isActive={true}
          onComplete={() => navigate("/Journeys")}
          layoutId={caseStudy.slug}
          sharedSourceImageSrc={caseStudy.coverImage.src}
        />
      )}
    </>
  );
}

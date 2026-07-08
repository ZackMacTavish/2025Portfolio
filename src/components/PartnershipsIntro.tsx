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
  background: ${(p) =>
    p.theme.name === "dark"
      ? "linear-gradient(135deg, #242424 0%, #1c1c1c 100%)"
      : "linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%)"};
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
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

interface PartnershipsIntroProps {
  onLaunch: () => void;
}

export function PartnershipsIntro({ onLaunch }: PartnershipsIntroProps) {
  const previewAvif = normalizeAssetUrl("/assets/partnerships/Walmart 1.avif");
  const previewWebp = normalizeAssetUrl("/assets/partnerships/Walmart 1.webp");
  const previewJpg = normalizeAssetUrl("/assets/partnerships/Walmart 1.jpg");

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
            Partnership Pitches
          </IntroHeading>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            I designed AI-to-AI and AI-to-business integration patterns for Microsoft Copilot, pitching bespoke flows to four active partnership conversations: Walmart, Amazon, Lyft, and DoorDash.
          </IntroSubtitle>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            This work explored what unique value AI can actually add beyond being a faster way to open an app, and introduced a new AI-to-AI handoff standard designed to go beyond what MCP supports.
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
            <source srcSet={previewAvif} type="image/avif" />
            <source srcSet={previewWebp} type="image/webp" />
            <img
              src={previewJpg}
              alt="Partnership Pitches, Walmart Copilot shopping flow"
              loading="lazy"
              decoding="async"
            />
          </StyledImage>
        </ImageColumn>
      </IntroContent>
    </IntroSection>
  );
}

export function PartnershipsModule() {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const caseStudy = caseStudies.find((item) => item.slug === "partnerships");

  useEffect(() => {
    if (caseStudy) {
      warmPreloadTransitionImages(caseStudy.transitionImages);
    }
  }, [caseStudy]);

  if (!caseStudy) return null;

  return (
    <>
      <PartnershipsIntro
        onLaunch={async () => {
          const shouldAnimate = await shouldRunCardTransition(
            caseStudy.transitionImages
          );

          if (!shouldAnimate) {
            navigate("/Partnerships");
            return;
          }

          setTransitioning(true);
        }}
      />

      {transitioning && (
        <CaseStudyTransition
          images={caseStudy.transitionImages}
          isActive={true}
          onComplete={() => navigate("/Partnerships")}
          layoutId={caseStudy.slug}
          sharedSourceImageSrc={caseStudy.coverImage.src}
        />
      )}
    </>
  );
}

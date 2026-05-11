import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CaseStudyTransition, {
  shouldRunCardTransition,
  warmPreloadTransitionImages,
} from "./CaseStudyTransition";
import { caseStudies } from "../data/caseStudies";

function normalizeAssetUrl(url: string) {
  try {
    return encodeURI(decodeURI(url));
  } catch {
    return encodeURI(url);
  }
}

const IntroSection = styled.section`
  background: linear-gradient(135deg, #eef4ff 0%, #fbfdff 100%);
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

const StyledCTA = styled(motion.button)`
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

interface CopilotPayIntroProps {
  onLaunch: () => void;
}

export function CopilotPayIntro({ onLaunch }: CopilotPayIntroProps) {
  const previewAvif = normalizeAssetUrl(
    "/assets/copilot-pay/Property 1=Default.avif"
  );
  const previewWebp = normalizeAssetUrl(
    "/assets/copilot-pay/Property 1=Default.webp"
  );
  const previewPng = normalizeAssetUrl(
    "/assets/copilot-pay/Property 1=Default.jpg"
  );

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
            Copilot Pay
          </IntroHeading>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Copilot Pay is Microsoft&apos;s first native checkout inside Copilot across browser, desktop, and mobile. It replaces retailer redirects with a more continuous purchase flow using Apple Pay, PayPal, Venmo, Google Pay, Shop Pay, and Amazon Pay.
          </IntroSubtitle>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            This case study focuses on express checkout flows, multi-wallet interaction design, and the design-system work required to make AI commerce feel scalable and trustworthy across Microsoft surfaces.
          </IntroSubtitle>
          <StyledCTA
            type="button"
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
            <source srcSet={previewAvif} type="image/avif" />
            <source srcSet={previewWebp} type="image/webp" />
            <img src={previewPng} alt="Copilot Pay interface design" />
          </StyledImage>
        </ImageColumn>
      </IntroContent>
    </IntroSection>
  );
}

export function CopilotPayModule() {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const caseStudy = caseStudies.find((item) => item.slug === "copilot-pay");

  useEffect(() => {
    if (!caseStudy) return;
    warmPreloadTransitionImages(caseStudy.transitionImages);
    import("../pages/CopilotPay/CopilotPay");
  }, [caseStudy]);

  if (!caseStudy) return null;

  return (
    <>
      <CopilotPayIntro
        onLaunch={async () => {
          const shouldAnimate = await shouldRunCardTransition(
            caseStudy.transitionImages
          );

          if (!shouldAnimate) {
            navigate("/CopilotPay");
            return;
          }

          setTransitioning(true);
        }}
      />

      {transitioning && (
        <CaseStudyTransition
          images={caseStudy.transitionImages}
          isActive={true}
          onComplete={() => navigate("/CopilotPay")}
          layoutId={caseStudy.slug}
          sharedSourceImageSrc={caseStudy.coverImage.src}
        />
      )}
    </>
  );
}
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
  background: ${(p) => (p.theme.name === 'dark'
    ? 'linear-gradient(135deg, #1a2438 0%, #14171f 100%)'
    : 'linear-gradient(135deg, #eef4ff 0%, #fbfdff 100%)')};
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
  font-family: var(--font-display);
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
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: ${(p) => p.theme.mutedText};
  margin: 0;
  max-width: 62ch;
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
  aspect-ratio: 4 / 3;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
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
  const previewAvifMobile = normalizeAssetUrl(
    "/assets/copilot-pay/Property 1=Default-mobile-900.avif"
  );
  const previewWebpMobile = normalizeAssetUrl(
    "/assets/copilot-pay/Property 1=Default-mobile-900.webp"
  );
  const previewJpgMobile = normalizeAssetUrl(
    "/assets/copilot-pay/Property 1=Default-mobile-900.jpg"
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
            <source srcSet={previewAvifMobile} type="image/avif" media="(max-width: 900px)" />
            <source srcSet={previewAvif} type="image/avif" />
            <source srcSet={previewWebpMobile} type="image/webp" media="(max-width: 900px)" />
            <source srcSet={previewWebp} type="image/webp" />
            <source srcSet={previewJpgMobile} media="(max-width: 900px)" />
            <img
              src={previewPng}
              alt="Copilot Pay interface design"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
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
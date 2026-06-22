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
  background: linear-gradient(135deg, #1a1a1a 0%, #2a1f3d 100%);
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
  color: #ffffff;
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
  color: #d1d5db;
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

interface VideoCommerceIntroProps {
  onLaunch: () => void;
}

export function VideoCommerceIntro({ onLaunch }: VideoCommerceIntroProps) {
  const previewAvif = normalizeAssetUrl(
    "/assets/video-commerce/Full Frame.avif"
  );
  const previewWebp = normalizeAssetUrl(
    "/assets/video-commerce/Full Frame.webp"
  );
  const previewJpg = normalizeAssetUrl(
    "/assets/video-commerce/Full Frame.jpg"
  );
  const previewAvifMobile = normalizeAssetUrl(
    "/assets/video-commerce/Full Frame-mobile-900.avif"
  );
  const previewWebpMobile = normalizeAssetUrl(
    "/assets/video-commerce/Full Frame-mobile-900.webp"
  );
  const previewJpgMobile = normalizeAssetUrl(
    "/assets/video-commerce/Full Frame-mobile-900.jpg"
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
            Video Commerce
          </IntroHeading>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            An executive-driven moonshot exploring live and short-form video commerce across Bing, MSN, Edge, and Microsoft Start — partnering with TalkShopLive in the U.S., QVC Japan, and Roposo in India to bring creator-led product content into the Microsoft shopping ecosystem.
          </IntroSubtitle>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The case study covers the video shopping destination, multi-SKU product mapping, live commerce interactions, mobile hierarchy, and a first-party native player exploration.
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
            <source
              srcSet={previewAvifMobile}
              type="image/avif"
              media="(max-width: 900px)"
            />
            <source srcSet={previewAvif} type="image/avif" />
            <source
              srcSet={previewWebpMobile}
              type="image/webp"
              media="(max-width: 900px)"
            />
            <source srcSet={previewWebp} type="image/webp" />
            <source srcSet={previewJpgMobile} media="(max-width: 900px)" />
            <img
              src={previewJpg}
              alt="Microsoft Bing Shopping video commerce destination"
              loading="lazy"
              decoding="async"
            />
          </StyledImage>
        </ImageColumn>
      </IntroContent>
    </IntroSection>
  );
}

export function VideoCommerceModule() {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const caseStudy = caseStudies.find((item) => item.slug === "video-commerce");

  useEffect(() => {
    if (!caseStudy) return;
    warmPreloadTransitionImages(caseStudy.transitionImages);
    import("../pages/VideoCommerce/VideoCommerce");
  }, [caseStudy]);

  if (!caseStudy) return null;

  return (
    <>
      <VideoCommerceIntro
        onLaunch={async () => {
          const shouldAnimate = await shouldRunCardTransition(
            caseStudy.transitionImages
          );

          if (!shouldAnimate) {
            navigate("/VideoCommerce");
            return;
          }

          setTransitioning(true);
        }}
      />

      {transitioning && (
        <CaseStudyTransition
          images={caseStudy.transitionImages}
          isActive={true}
          onComplete={() => navigate("/VideoCommerce")}
          layoutId={caseStudy.slug}
          sharedSourceImageSrc={caseStudy.coverImage.src}
        />
      )}
    </>
  );
}

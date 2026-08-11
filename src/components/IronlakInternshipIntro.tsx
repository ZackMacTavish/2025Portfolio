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
  background: linear-gradient(135deg, #1a1a1a 0%, #2a1116 100%);
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
  font-family: var(--font-display);
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
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
  color: #d1d5db;
  margin: 0;
  max-width: 62ch;
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

interface IronlakInternshipIntroProps {
  onLaunch: () => void;
}

export function IronlakInternshipIntro({ onLaunch }: IronlakInternshipIntroProps) {
  const previewAvif = normalizeAssetUrl(
    "/assets/ironlak-internship/IronlakAdvert2.avif"
  );
  const previewWebp = normalizeAssetUrl(
    "/assets/ironlak-internship/IronlakAdvert2.webp"
  );
  const previewJpg = normalizeAssetUrl(
    "/assets/ironlak-internship/IronlakAdvert2.jpg"
  );
  const previewAvifMobile = normalizeAssetUrl(
    "/assets/ironlak-internship/IronlakAdvert2-mobile-900.avif"
  );
  const previewWebpMobile = normalizeAssetUrl(
    "/assets/ironlak-internship/IronlakAdvert2-mobile-900.webp"
  );
  const previewJpgMobile = normalizeAssetUrl(
    "/assets/ironlak-internship/IronlakAdvert2-mobile-900.jpg"
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
            Ironlak Internship
          </IntroHeading>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            A senior-year cold email to an Australian spray paint company turned into a multilingual brand identity system — and a three-month internship designing production work for a brand built by and for graffiti artists.
          </IntroSubtitle>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The case study covers the multilingual wordmark concept, system applications across print and outdoor, BBQ Burner flyers for three sponsor shops, and a physical-to-digital production pipeline built on scanned spray marks and high-contrast bitmap textures.
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
              alt="Ironlak campaign advert preview"
              loading="lazy"
              decoding="async"
            />
          </StyledImage>
        </ImageColumn>
      </IntroContent>
    </IntroSection>
  );
}

export function IronlakInternshipModule() {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const caseStudy = caseStudies.find(
    (item) => item.slug === "ironlak-internship"
  );

  useEffect(() => {
    if (!caseStudy) return;
    warmPreloadTransitionImages(caseStudy.transitionImages);
    import("../pages/IronlakInternship/IronlakInternship");
  }, [caseStudy]);

  if (!caseStudy) return null;

  return (
    <>
      <IronlakInternshipIntro
        onLaunch={async () => {
          const shouldAnimate = await shouldRunCardTransition(
            caseStudy.transitionImages
          );

          if (!shouldAnimate) {
            navigate("/IronlakInternship");
            return;
          }

          setTransitioning(true);
        }}
      />

      {transitioning && (
        <CaseStudyTransition
          images={caseStudy.transitionImages}
          isActive={true}
          onComplete={() => navigate("/IronlakInternship")}
          layoutId={caseStudy.slug}
          sharedSourceImageSrc={caseStudy.coverImage.src}
        />
      )}
    </>
  );
}

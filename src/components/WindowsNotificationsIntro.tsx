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
  background: ${(p) => p.theme.sectionBase};
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

const EyebrowTag = styled(motion.span)`
  font-family: var(--font-mono);
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0078d4;
  background: ${(p) =>
    p.theme.name === "dark" ? "rgba(0,120,212,0.15)" : "rgba(0,120,212,0.1)"};
  border: 1px solid rgba(0, 120, 212, 0.25);
  padding: 0.3em 0.9em;
  border-radius: 999px;
  width: fit-content;
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
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

interface WindowsNotificationsIntroProps {
  onLaunch: () => void;
}

export function WindowsNotificationsIntro({
  onLaunch,
}: WindowsNotificationsIntroProps) {
  const previewAvif = normalizeAssetUrl(
    "/assets/windows-notifications/Prong 2 price drop.avif"
  );
  const previewWebp = normalizeAssetUrl(
    "/assets/windows-notifications/Prong 2 price drop.webp"
  );
  const previewPng = normalizeAssetUrl(
    "/assets/windows-notifications/Prong 2 price drop.png"
  );
  const previewAvifMobile = normalizeAssetUrl(
    "/assets/windows-notifications/Prong 2 price drop-mobile-900.avif"
  );
  const previewWebpMobile = normalizeAssetUrl(
    "/assets/windows-notifications/Prong 2 price drop-mobile-900.webp"
  );
  const previewPngMobile = normalizeAssetUrl(
    "/assets/windows-notifications/Prong 2 price drop-mobile-900.png"
  );

  return (
    <IntroSection>
      <IntroContent>
        <TextColumn>
          <EyebrowTag
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Windows OS
          </EyebrowTag>
          <IntroHeading
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            Windows Notifications
          </IntroHeading>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Bing and Edge Shopping give users ways to signal explicit commerce
            intent. The payoff for that intent used to stay inside the browser.
            I designed four experiences: price drops, back-in-stock,
            cash back, and coupons, to surface those moments in Windows itself,
            on the taskbar and notification surface every user sees.
          </IntroSubtitle>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The case study covers OS-level governance, Windows UX Labs Value and
            Ad Perception testing, Triple Cashback Tuesday research findings, and
            what it took to ship shopping features from the browser into the
            Windows OS layer.
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
            <source srcSet={previewPngMobile} media="(max-width: 900px)" />
            <img
              src={previewPng}
              alt="Windows price drop notification prong"
              loading="lazy"
              decoding="async"
            />
          </StyledImage>
        </ImageColumn>
      </IntroContent>
    </IntroSection>
  );
}

export function WindowsNotificationsModule() {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const caseStudy = caseStudies.find(
    (item) => item.slug === "windows-notifications"
  );

  useEffect(() => {
    if (!caseStudy) return;
    warmPreloadTransitionImages(caseStudy.transitionImages);
    import("../pages/WindowsNotifications/WindowsNotifications");
  }, [caseStudy]);

  if (!caseStudy) return null;

  return (
    <>
      <WindowsNotificationsIntro
        onLaunch={async () => {
          const shouldAnimate = await shouldRunCardTransition(
            caseStudy.transitionImages
          );

          if (!shouldAnimate) {
            navigate("/WindowsNotifications");
            return;
          }

          setTransitioning(true);
        }}
      />

      {transitioning && (
        <CaseStudyTransition
          images={caseStudy.transitionImages}
          isActive={true}
          onComplete={() => navigate("/WindowsNotifications")}
          layoutId={caseStudy.slug}
          sharedSourceImageSrc={caseStudy.coverImage.src}
        />
      )}
    </>
  );
}

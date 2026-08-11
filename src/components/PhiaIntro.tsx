import styled from "styled-components";
import { motion } from "framer-motion";
import CaseStudyTransitionLink from "./CaseStudyTransitionLink";
import { CaseStudyIntroCTA, CaseStudyIntroCTAArrow } from "./CaseStudyIntroCTA";

const IntroSection = styled.section`
  background: ${(p) => (p.theme.name === "dark" ? "#202020" : "#f7f3f6")};
  padding: 8rem 0;

  @media (max-width: 640px) {
    padding: 4.5rem 0;
  }
`;

const IntroContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 84rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const IntroHeading = styled(motion.h2)`
  margin: 0;
  color: ${(p) => p.theme.strongText};
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.15;
`;

const IntroSubtitle = styled(motion.p)`
  max-width: 62ch;
  margin: 0;
  color: ${(p) => p.theme.mutedText};
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
`;

const ImageColumn = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  border-radius: 16px;

  @media (max-width: 1023px) {
    order: -1;
  }
`;

const StyledImage = styled.picture`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export function PhiaModule() {
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
            Phia
          </IntroHeading>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            A pre-owned luxury experience for Microsoft Shopping, bringing curated products from brands like Chanel, Dior, Gucci, Hermes, and Louis Vuitton into discovery, retailer, and product-page flows.
          </IntroSubtitle>
          <CaseStudyTransitionLink
            slug="phia"
            to="/Phia"
            preloadRoute={() => import("../pages/Phia/Phia")}
          >
            {({ onClick, onIntent }) => (
              <CaseStudyIntroCTA
                type="button"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                onClick={onClick}
                onPointerEnter={onIntent}
                onFocus={onIntent}
                onPointerDown={onIntent}
              >
                See Case Study <CaseStudyIntroCTAArrow>→</CaseStudyIntroCTAArrow>
              </CaseStudyIntroCTA>
            )}
          </CaseStudyTransitionLink>
        </TextColumn>
        <ImageColumn
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <StyledImage>
            <source srcSet="/assets/phia/hero-mobile-900.avif" type="image/avif" media="(max-width: 900px)" />
            <source srcSet="/assets/phia/hero.avif" type="image/avif" />
            <source srcSet="/assets/phia/hero-mobile-900.webp" type="image/webp" media="(max-width: 900px)" />
            <source srcSet="/assets/phia/hero.webp" type="image/webp" />
            <source srcSet="/assets/phia/hero-mobile-900.jpg" media="(max-width: 900px)" />
            <img
              src="/assets/phia/hero.jpg"
              alt="Microsoft Shopping and Phia pre-owned luxury landing page"
              loading="lazy"
              decoding="async"
            />
          </StyledImage>
        </ImageColumn>
      </IntroContent>
    </IntroSection>
  );
}
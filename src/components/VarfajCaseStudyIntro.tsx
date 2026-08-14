import { motion } from "framer-motion";
import styled from "styled-components";
import { SingleImage } from "./CaseStudyPrimitives";
import CaseStudyTransitionLink from "./CaseStudyTransitionLink";
import { CaseStudyIntroCTA, CaseStudyIntroCTAArrow } from "./CaseStudyIntroCTA";

type VarfajCaseStudyIntroProps = {
  title: string;
  subtitle: string;
  src: string;
  avif?: string;
  webp?: string;
  alt: string;
  tone: "base" | "muted" | "accent" | "primaryMuted";
  to?: string;
  slug?: string;
  preloadRoute?: () => Promise<unknown>;
};

const TONES = {
  base: "sectionBase",
  muted: "sectionMuted",
  accent: "sectionAccent",
  primaryMuted: "sectionPrimaryMuted",
} as const;

const IntroSection = styled.section<{ $tone: keyof typeof TONES }>`
  background: ${(props) => props.theme[TONES[props.$tone]]};
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
  align-items: flex-start;
  gap: 1.5rem;
`;

const IntroHeading = styled(motion.h2)`
  margin: 0;
  color: ${(props) => props.theme.strongText};
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.15;
`;

const IntroSubtitle = styled(motion.p)`
  max-width: 62ch;
  margin: 0;
  color: ${(props) => props.theme.mutedText};
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
`;

const ImageColumn = styled(motion.div)`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 16px;
  background: ${(props) => props.theme.surfaceMuted};

  > picture {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1023px) {
    order: -1;
  }
`;

const Status = styled.span`
  display: inline-flex;
  min-height: 2.5rem;
  align-items: center;
  color: ${(props) => props.theme.mutedText};
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export default function VarfajCaseStudyIntro({
  title,
  subtitle,
  src,
  avif,
  webp,
  alt,
  tone,
  to,
  slug,
  preloadRoute,
}: VarfajCaseStudyIntroProps) {
  const cta = to && slug ? (
    <CaseStudyTransitionLink slug={slug} to={to} preloadRoute={preloadRoute}>
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
  ) : (
    <Status>Case study in progress</Status>
  );

  return (
    <IntroSection $tone={tone}>
      <IntroContent>
        <TextColumn>
          <IntroHeading
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            {title}
          </IntroHeading>
          <IntroSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {subtitle}
          </IntroSubtitle>
          {cta}
        </TextColumn>
        <ImageColumn
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <SingleImage
            src={src}
            avif={avif}
            webp={webp}
            alt={alt}
            width="100%"
            responsive={false}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 0,
              boxShadow: "none",
            }}
          />
        </ImageColumn>
      </IntroContent>
    </IntroSection>
  );
}

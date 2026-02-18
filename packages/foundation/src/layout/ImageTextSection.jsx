import React from 'react';
import styled from 'styled-components';
// Do not use Grid60 or Grid60TwoCol here; use a custom Section for full control

// A reusable two-column "image + text" section modeled after the measured
// 62vw container and proportions used on the Graphic Design page ("This is it").
// Defaults: container 62vw, columns 0.56/0.44, gap 3xl, image width 86%,
// and card radius applied directly to the <img> element.

const Section = styled.div`
  width: ${(p) => p.$width || '62vw'};
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 2.2vw;
  align-items: stretch;
  padding: ${(p) => (p.theme?.spacing?.['3xl'] || '3rem')} 0;

  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 1000px) {
    width: 100vw;
    max-width: 100vw;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`;


const ImgWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 0;
  @media (max-width: 1000px) {
    width: 100vw;
    justify-content: center;
    margin-bottom: 1.2rem;
  }
`;

// Match SingleImage breakpoints and sizing
const Img = styled.img`
  width: 100%;
  max-width: 480px;
  min-width: 260px;
  height: auto;
  min-height: 200px;
  object-fit: cover;
  display: block;
  margin: 0;
  border-radius: 24px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.06);
  overflow: hidden;

  @media (max-width: 1200px) {
    max-width: 340px;
    min-width: 160px;
    min-height: 140px;
  }
  @media (max-width: 1000px) {
    width: 80vw;
    max-width: 92vw;
    min-width: 120px;
    min-height: 120px;
    border-radius: 16px;
    margin: 0 auto;
    display: block;
  }
`;

// Enhanced: supports AVIF/WebP/legacy fallback via <picture>

const TextBlock = styled.div`
  flex: 1 1 50%;
  font-family: 'Space Grotesk', sans-serif;
  font-size: ${(p) => p.$textSize || '1.4rem'};
  color: ${(p) => p.$textColor || '#fff'};
  line-height: 1.4;
  font-weight: 500;
  display: flex;
  align-items: center;
  min-width: 0;
  @media (max-width: 1000px) {
    font-size: 1.7rem;
    display: flex;
    width: 92vw;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    justify-content: center;
    min-height: 40px;
  }
`;

export default function ImageTextSection({
  imageSrc,
  imageAvif,
  imageWebp,
  imageAlt,
  children,
  imageWidth,
  columns,
  width,
  textSize,
  textColor,
  className,
  ...rest
}) {
  // Flexbox: image and text both flex to fill container
  return (
    <Section $width={width} className={className} {...rest}>
      <ImgWrapper>
        <picture>
          {imageAvif && <source srcSet={imageAvif} type="image/avif" />}
          {imageWebp && <source srcSet={imageWebp} type="image/webp" />}
          <Img src={imageSrc} alt={imageAlt} />
        </picture>
      </ImgWrapper>
      <TextBlock $textSize={textSize} $textColor={textColor}>{children}</TextBlock>
    </Section>
  );
}

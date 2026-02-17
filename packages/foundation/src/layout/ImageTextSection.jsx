import React from 'react';
import styled from 'styled-components';
import Grid60, { Grid60TwoCol } from './Grid60.jsx';

// A reusable two-column "image + text" section modeled after the measured
// 62vw container and proportions used on the Graphic Design page ("This is it").
// Defaults: container 62vw, columns 0.56/0.44, gap 3xl, image width 86%,
// and card radius applied directly to the <img> element.

const Section = styled(Grid60TwoCol)`
  width: ${(p) => p.$width || '62vw'};
  max-width: 1100px;
  margin: 0 auto;
  grid-template-columns: ${(p) => p.$columns || '0.56fr minmax(280px, 0.44fr)'};
  gap: ${(p) => (p.theme?.spacing?.['3xl'] || '3rem')};
  align-items: center;
  padding: ${(p) => (p.theme?.spacing?.['3xl'] || '3rem')} 0;

  @media (max-width: 1000px) {
    width: 90vw;
    grid-template-columns: 1fr;
    gap: ${(p) => (p.theme?.spacing?.lg || '1.5rem')};
  }
`;

const Img = styled.img`
  width: ${(p) => p.$imageWidth || '86%'};
  height: auto;
  display: block;
  margin: 0;
  border-radius: ${(p) => p.theme?.radii?.card || '12px'};
  overflow: hidden;
`;

export default function ImageTextSection({
  imageSrc,
  imageAlt,
  children,
  imageWidth,
  columns,
  width,
  className,
  ...rest
}) {
  return (
    <Section $columns={columns} $width={width} className={className} {...rest}>
      <Img src={imageSrc} alt={imageAlt} $imageWidth={imageWidth} />
      <div>{children}</div>
    </Section>
  );
}

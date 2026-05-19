// ResponsivePicture.jsx
// Generic responsive <picture> component for AVIF/WebP/JPG/PNG
import React from 'react';

const ResponsivePicture = ({
  desktop,
  desktopAvif,
  desktopWebp,
  mobile600,
  mobile900,
  mobile600Avif,
  mobile900Avif,
  mobile600Webp,
  mobile900Webp,
  alt,
  ...props
}) => (
  <picture>
    {mobile600Avif && <source srcSet={mobile600Avif} type="image/avif" media="(max-width: 650px)" />}
    {mobile900Avif && <source srcSet={mobile900Avif} type="image/avif" media="(max-width: 900px)" />}
    {desktopAvif && <source srcSet={desktopAvif} type="image/avif" />}
    {mobile600Webp && <source srcSet={mobile600Webp} type="image/webp" media="(max-width: 650px)" />}
    {mobile900Webp && <source srcSet={mobile900Webp} type="image/webp" media="(max-width: 900px)" />}
    {desktopWebp && <source srcSet={desktopWebp} type="image/webp" />}
    {mobile600 && <source srcSet={mobile600} type="image/jpeg" media="(max-width: 650px)" />}
    {mobile900 && <source srcSet={mobile900} type="image/jpeg" media="(max-width: 900px)" />}
    <img src={desktop} alt={alt} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" {...props} />
  </picture>
);

export default ResponsivePicture;

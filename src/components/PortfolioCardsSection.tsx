import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiLock } from "react-icons/fi";
import Grid60 from "./Layout/Grid60";
import { SingleImage } from "./CaseStudyPrimitives";

import leysiTile from "../assets/LeysiApp—Screens copy.jpg";
import leysiTileAvif from "../assets/LeysiApp—Screens copy.avif";
import leysiTileWebp from "../assets/LeysiApp—Screens copy.webp";
import threePillarsTile from "../assets/ThreePillars—pages.jpg";
import threePillarsTileAvif from "../assets/ThreePillars—pages.avif";
import threePillarsTileWebp from "../assets/ThreePillars—pages.webp";
import pitonTile from "../assets/Group 55618@2x.png";
import pitonTileAvif from "../assets/Group 55618@2x.avif";
import pitonTileWebp from "../assets/Group 55618@2x.webp";
import outsourceTile from "../assets/BrandGuidelines—Mockup.jpg";
import outsourceTileAvif from "../assets/BrandGuidelines—Mockup.avif";
import outsourceTileWebp from "../assets/BrandGuidelines—Mockup.webp";
import gigaTile from "../assets/iphones—Mockup copy.png";
import gigaTileAvif from "../assets/iphones—Mockup copy.avif";
import gigaTileWebp from "../assets/iphones—Mockup copy.webp";

const Section = styled.section`
  width: 100vw;
  background: white;
  padding: 14vh 5vw;
  box-sizing: border-box;
`;

const Inner = styled(Grid60)``;

const SectionTitle = styled.h2`
  margin: 0 0 2rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: #111;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 3rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tile = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: ${(p) => p.theme.radii.card};
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  background-color: #f5f5f5;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.45);
  }
`;

const TileBg = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(0.9);
  transition: filter 180ms ease;
`;

const TileOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.15));
  transition: background 180ms ease;
`;

const LockCenter = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  color: #111;
`;

const TileCaption = styled.div.attrs({ "data-cursor": "link", role: "link" })`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0.75rem;
`;

const TileTitle = styled.h3`
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: #111;
  transition: color 160ms ease;
`;

const TileSubtitle = styled.p`
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.95rem;
  color: #5d5d5d;
`;

const ProjectCard = styled(Card)`
  &:hover ${Tile} {
    transform: translateY(-3px);
    box-shadow: 0 10px 36px rgba(0, 0, 0, 0.12);
  }

  &:hover ${TileBg} {
    filter: saturate(1.08) brightness(1.05);
  }

  &:hover ${TileOverlay} {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.08));
  }

  &:hover ${TileTitle} {
    color: ${(props) => props.theme.backgroundColor};
  }
`;
export default function PortfolioCardsSection() {
  return (
    <Section>
      <Inner>
        <SectionTitle>My projects</SectionTitle>
        <Grid>
          <ProjectCard>
            <Tile to="/Microsoft" aria-label="Microsoft project">
              {/* Use <SingleImage> (with AVIF/WebP + mobile-900 variants) instead of a
                  CSS background-image. The raw HP.png is 2.6 MB and was being downloaded
                  in full on every device — even though it's blurred + covered by a 70%
                  white overlay. SingleImage automatically picks the smallest format the
                  browser can decode. */}
              <SingleImage
                src="/assets/HP.png"
                avif="/assets/HP.avif"
                webp="/assets/HP.webp"
                alt=""
                width="100%"
                responsive={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                  borderRadius: 0,
                  boxShadow: "none",
                  filter: "saturate(0.9) blur(2px)",
                  transform: "scale(1.03)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(255,255,255,0.7)",
                }}
              />
              <LockCenter>
                <FiLock size={48} />
              </LockCenter>
            </Tile>
            <TileCaption>
              <TileTitle>Microsoft</TileTitle>
              <TileSubtitle>Shopping ecosystem across Bing, Copilot, Windows, Outlook</TileSubtitle>
            </TileCaption>
          </ProjectCard>

          <ProjectCard>
            <Tile to="/Ux" aria-label="Leysi project">
              <SingleImage
                src={leysiTile}
                avif={leysiTileAvif}
                webp={leysiTileWebp}
                alt="Leysi project tile"
                width="100%"
                responsive={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                  borderRadius: 0,
                  boxShadow: "none",
                }}
              />
              <TileOverlay />
            </Tile>
            <TileCaption>
              <TileTitle>Leysi</TileTitle>
              <TileSubtitle>Brand identity and iOS app for campus deals</TileSubtitle>
            </TileCaption>
          </ProjectCard>

          <ProjectCard>
            <Tile to="/ThreePillars" aria-label="Three Pillars project">
              <SingleImage
                src={threePillarsTile}
                avif={threePillarsTileAvif}
                webp={threePillarsTileWebp}
                alt="Three Pillars project tile"
                width="100%"
                responsive={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                  borderRadius: 0,
                  boxShadow: "none",
                }}
              />
              <TileOverlay />
            </Tile>
            <TileCaption>
              <TileTitle>ThreePillars</TileTitle>
              <TileSubtitle>Recruiting site redesign and brand refresh</TileSubtitle>
            </TileCaption>
          </ProjectCard>

          <ProjectCard>
            <Tile to="/Piton" aria-label="Piton project">
              <SingleImage
                src={pitonTile}
                avif={pitonTileAvif}
                webp={pitonTileWebp}
                alt="Piton project tile"
                width="100%"
                responsive={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                  borderRadius: 0,
                  boxShadow: "none",
                }}
              />
              <TileOverlay />
            </Tile>
            <TileCaption>
              <TileTitle>Piton</TileTitle>
              <TileSubtitle>Product design and mobile interface work</TileSubtitle>
            </TileCaption>
          </ProjectCard>

          <ProjectCard>
            <Tile to="/Outsource" aria-label="Outsource project">
              <SingleImage
                src={outsourceTile}
                avif={outsourceTileAvif}
                webp={outsourceTileWebp}
                alt="Outsource project tile"
                width="100%"
                responsive={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                  borderRadius: 0,
                  boxShadow: "none",
                }}
              />
              <TileOverlay />
            </Tile>
            <TileCaption>
              <TileTitle>Outsource</TileTitle>
              <TileSubtitle>Commerce and editorial design across surfaces</TileSubtitle>
            </TileCaption>
          </ProjectCard>

          <ProjectCard>
            <Tile to="/Giga" aria-label="Giga project">
              <SingleImage
                src={gigaTile}
                avif={gigaTileAvif}
                webp={gigaTileWebp}
                alt="Giga project tile"
                width="100%"
                responsive={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                  borderRadius: 0,
                  boxShadow: "none",
                }}
              />
              <TileOverlay />
            </Tile>
            <TileCaption>
              <TileTitle>Giga</TileTitle>
              <TileSubtitle>Cross-platform product design and experiments</TileSubtitle>
            </TileCaption>
          </ProjectCard>
        </Grid>
      </Inner>
    </Section>
  );
}

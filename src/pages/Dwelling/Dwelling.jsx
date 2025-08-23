import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { RisoFlex, RisoItem } from '../3d/MergedGraffiti';
import { ArtDesc, ArtHeader, ArtSectionthreeog, ArtText, ArtTextthree, ArtTexttwo, ArtYear, GridRowThree, GridRowTwo, Orbital } from '../COMPOSITION/Composition';

// Assets
import housemash from '../../assets/House—Mash.jpg';
import housefront from '../../assets/Housequiltfront.jpg';
import houseback from '../../assets/Housequiltback.jpg';
import house1 from '../../assets/house5.jpg';
import house2 from '../../assets/house6.jpg';
import ep from '../../assets/EP.jpg';
import westwood from '../../assets/westwood.jpg';
import manistee2 from '../../assets/manistee2.jpg';
import albany from '../../assets/albany.jpg';
import maynard from '../../assets/maynard.jpg';
import armistice3 from '../../assets/armistice3.jpg';
import house5 from '../../assets/house1.jpg';
import house6 from '../../assets/house2.jpg';
import house3 from '../../assets/house3.jpg';
import house4 from '../../assets/house4.jpg';
import olympia from '../../assets/Olympia.jpg';
import manistee1 from '../../assets/manistee1.jpg';
import pawtucket from '../../assets/Pawtucket.jpg';
import armistice1 from '../../assets/Armistice1.jpg';
import rosewood from '../../assets/rosewood.jpg';
import taylor from '../../assets/taylor.jpg';
import house7 from '../../assets/house7.jpg';
import housemash2 from '../../assets/housemash2.jpg';
import manisteeblock from '../../assets/Manisteeblock.jpg';
import housepainting from '../../assets/House—Pre-Ipad.jpg';
import quilt1 from "../../assets/quilt1.jpg";
import quilt2 from "../../assets/quilt2.jpg";
import quilt3 from "../../assets/quilt3.jpg";
import quilt4 from "../../assets/quilt4.jpg";
import quilt5 from "../../assets/quilt5.jpg";
import quilt6 from "../../assets/quilt6.jpg";

// Styled Components
export const TextSection = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55vw;
  font-family: 'Space Grotesk', sans-serif;
  padding-left: 2vw;
  color: white;
  font-size: 2.5rem;
  height: 100vh;
  @media (max-width: 1600px) {
      width: 60vw;
      font-size: 1.8rem;
  }
  @media (max-width: 450px) {
      width: 90vw;
      font-size: 1.5rem;
  }
`;

const PhotoFlexone = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 1000px) {
      flex-direction: column;
  }
`;

const PicturesFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100vw;
  background-color: black;
  flex-direction: column;
`;

const TopImagesFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0vw;
  width: 100vw;
  background-color: white;
  padding: 2vw 0;
  box-sizing: border-box;
`;

export default function Dwelling() {

  useLayoutEffect(() => {
      window.scrollTo(0, 0)
  });

  return (
      <div>
          {/* Top housemash images horizontally */}
          <TopImagesFlex>
              <RisoItem 
                src={housemash} 
                style={{ width: '52vw', height: 'auto' }} 
              />
              <RisoItem 
                src={housemash2} 
                style={{ width: '45vw', height: 'auto', paddingTop: '5vh', paddingRight: '2vw' }} 
              />
          </TopImagesFlex>

          {/* Intro Text Section */}
          <RisoFlex style={{backgroundColor:"black"}}>
              <TextSection>
Dwelling is a series composed of houses I’ve lived in throughout my life, aiming to evoke memories, 
nostalgia, and past experiences. I have created 21 quilts, a series of collages, and one large 
mixed-media painting with embroidery, learning to sew in the process.
                <br /> <br />
               The collage-like compositions bring together multiple stories into a single piece.
              </TextSection>
          </RisoFlex>

          {/* Open House Front/Back Section */}
          <ArtSectionthreeog Backgroundcolor='white'>
              {/* Front image */}
              <Orbital src={housefront} />
              <ArtText> 
                  <ArtHeader>Open House Front</ArtHeader>
                  <ArtYear>2021-22</ArtYear>
                  <ArtDesc>Acrylic, sewing, and embroidery on canvas.</ArtDesc>
              </ArtText>

              {/* Back image */}
              <GridRowTwo src={houseback} />
              <ArtTexttwo> 
                  <ArtHeader>Open House Back</ArtHeader>
                  <ArtYear>2021-22</ArtYear>
                  <ArtDesc>Acrylic, sewing, and embroidery on canvas.</ArtDesc>
              </ArtTexttwo>
          </ArtSectionthreeog>

    

          {/* DWELLING MASH I Section (formerly DWELLING MASH II) */}

<ArtSectionthreeog
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px", // bigger gap between images
    padding: "clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px)",
  }}
>
  <GridRowTwo
    src={house1}
    style={{ transform: "scale(0.9)", maxWidth: "35vw", height: "auto" }}
  />
  <GridRowThree
    src={house2}
    style={{ transform: "scale(0.9)", maxWidth: "35vw", height: "auto" }}
  />
</ArtSectionthreeog>

<ArtSectionthreeog>
  <Orbital src={quilt1} />
  <ArtText>
    <ArtHeader>Quilt 1</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>My apartment, Logan Square, Chicago</ArtDesc>
  </ArtText>

  <GridRowTwo src={quilt2} />
  <ArtTexttwo>
    <ArtHeader>Quilt 2</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>Dorms, Downtown, Chicago</ArtDesc>
  </ArtTexttwo>

  <GridRowThree src={quilt3} />
  <ArtTextthree>
    <ArtHeader>Quilt 3</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>My grandma's house</ArtDesc>
  </ArtTextthree>
</ArtSectionthreeog>


<ArtSectionthreeog>
  <Orbital src={quilt4} />
  <ArtText>
    <ArtHeader>Quilt 4</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>East Providence, Rhode Island</ArtDesc>
  </ArtText>

  <GridRowTwo src={quilt5} />
  <ArtTexttwo>
    <ArtHeader>Quilt 5</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>House with Richie</ArtDesc>
  </ArtTexttwo>

  <GridRowThree src={quilt6} />
  <ArtTextthree>
    <ArtHeader>Quilt 6</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>My grandma's first house</ArtDesc>
  </ArtTextthree>
</ArtSectionthreeog>

          {/* Grid of small images */}
          <PicturesFlex>
              <PhotoFlexone>
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={ep} />
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={westwood} />
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={manistee2} />
              </PhotoFlexone>
              <PhotoFlexone>
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={albany} />
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={maynard} />
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={armistice3} />
              </PhotoFlexone>
          </PicturesFlex>

          {/* Another section with 3 photos */}
   <ArtSectionthreeog
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "60px",
    padding: "clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px)",
  }}
>
  {/* First image with text stays horizontal */}
  <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "30px", width: "100%" }}>
    <Orbital src={manisteeblock} style={{ maxWidth: "30vw", height: "auto" }} />
    <ArtText style={{ maxWidth: "30vw" }}>
      <ArtHeader>Manistee Street</ArtHeader>
      <ArtYear>2022</ArtYear>
      <ArtDesc>Reduction relief woodblock print.</ArtDesc>
    </ArtText>
  </div>

  {/* Last two images side by side with no text */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "40px",
      width: "100%",
    }}
  >
    <GridRowTwo src={house5} style={{ transform: "scale(0.9)", maxWidth: "45vw", height: "auto" }} />
    <GridRowThree src={house6} style={{ transform: "scale(0.9)", maxWidth: "45vw", height: "auto" }} />
  </div>
</ArtSectionthreeog>

          <PicturesFlex>
              <PhotoFlexone>
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={olympia} />
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={manistee1} />
                <RisoItem style={{padding:"2vw"}} Width='20vw' img src={pawtucket} />
              </PhotoFlexone>
              <PhotoFlexone>
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={armistice1} />
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={rosewood} />
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={taylor} />
              </PhotoFlexone>
          </PicturesFlex>

          {/* Final DWELLING MASH section */}
  <ArtSectionthreeog
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px", // increased spacing
    padding: "clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px)",
  }}
>
  <Orbital src={house3} style={{ transform: "scale(0.9)", maxWidth: "28vw" }} />
  <GridRowTwo src={house7} style={{ transform: "scale(0.9)", maxWidth: "28vw" }} />
  <GridRowThree src={house4} style={{ transform: "scale(0.9)", maxWidth: "28vw" }} />
</ArtSectionthreeog>
      </div>
  )
}
// src/pages/Artworks.jsx
import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { RisoFlex, RisoItem } from '../3d/MergedGraffiti';
import { TextSection } from '../Dwelling/Dwelling';
import { ThreeFlex, ThreeItem } from '../Photography/Photography';
import {
  ArtDesc,
  ArtHeader,
  ArtSectionthreeog,
  ArtText,
  ArtTextthree,
  ArtTexttwo,
  ArtYear,
  FullBg,
  GridRowThree,
  GridRowTwo,
  Orbital,
  TwinTwo,
  ArtSectiontwins
} from '../COMPOSITION/Composition';

// ===================== PRINTMAKING ASSETS =====================
import olivia4 from '/src/assets/olivia4.jpg';
import olivia2 from '/src/assets/oliviacollab2.jpg';
import oliviacollab1 from '/src/assets/Collab-framed.jpg';
import oliviacollab2 from '/src/assets/Collab-framed2.jpg';
import oliviacollab3 from '/src/assets/Olivia_3.jpg';
import screenprint2 from '/src/assets/Screenprint2.jpg';
import screenprint2_1 from '/src/assets/screenprint2.1.jpg';
import screenprint1 from '/src/assets/Screenprint1.jpg';
import No2 from '/src/assets/No.2.jpg';
import oliviacollab4 from '/src/assets/Collab4.jpg';
import woodblock1 from '/src/assets/Woodblockprint.jpg';
import oliviacollab5 from '/src/assets/oliviacollab5.jpg';
import oliviacollab6 from '/src/assets/oliviacollab6.jpg';
import oliviacollab7 from '/src/assets/oliviacollab7.jpg';
import oliviacollab8 from '/src/assets/oliviacollab8.jpg';
import bear from '/src/assets/BearCMYK.jpg';
import graffiticollage from '/src/assets/GraffitiCollageCMYK.jpg';
import thetown from '/src/assets/TheTown.jpg';
import bluecmyk from '/src/assets/BlueCMYK.jpg';
import people from '/src/assets/Girl13.jpg';
import Cape from '/src/assets/CapeHouse.jpg';
import Capetwo from '/src/assets/CapeHouseLg.jpg';

// ===================== COLLAGES ASSETS =====================
import bike from '/src/assets/Bicycle.png';
import collage50 from '/src/assets/collage50.png';
import collage47 from '/src/assets/collage47.png';
import collage32 from '/src/assets/collage32.png';
import collage1 from '/src/assets/Collage1.2.jpg';
import collage2 from '/src/assets/Collage2.2.png';
import collage3 from '/src/assets/Collage3.png';
import collage4 from '/src/assets/Collage4.png';
import collagefour from '/src/assets/No4.png';
import collage45 from '/src/assets/collage45.png';
import collage41 from '/src/assets/collage41.jpg';
import collage42 from '/src/assets/collage42.jpg';
import collage43 from '/src/assets/collage43.jpg';
import collage44 from '/src/assets/collage44.png';
import collage37 from '/src/assets/collage37.jpg';
import collage48 from '/src/assets/collage48.jpg';
import collage40 from '/src/assets/collage40.png';
import collage39 from '/src/assets/collage39.png';
import collage38 from '/src/assets/collage38.jpg';
import collage34 from '/src/assets/collage34.jpg';
import collage35 from '/src/assets/collage35.jpg';
import collage31 from '/src/assets/collage31.jpg';
import collage28 from '/src/assets/collage28.jpg';
import collage29 from '/src/assets/collage29.jpg';
import collage30 from '/src/assets/collage30.jpg';
import collage46 from '/src/assets/collage46.jpg';
import collage33 from '/src/assets/collage33.jpg';
import collage49 from '/src/assets/collage49.jpg';
import boats from '/src/assets/Boats.jpg';
import rapture from '/src/assets/Dabs—Myla—Remix.jpg';
import spread1 from '/src/assets/spread1.png';
import spread2 from '/src/assets/spread2.png';
import spread3 from '/src/assets/spread3.png';
import spread4 from '/src/assets/spread4.png';
import spread5 from '/src/assets/spread5.png';
import spread6 from '/src/assets/spread6.png';

// ===================== PAINTING ASSETS =====================
import airbrush from '/src/assets/airbrush.jpg';
import sarge from '/src/assets/Sarge2.jpg';
import plastictoy from '/src/assets/PlasticToyCrop4.png';
import yellowlily from '/src/assets/YellowLily.jpg';
import lighthouse from '/src/assets/Lighthouse.jpeg';
import cacti1 from '/src/assets/E-png.png';
import splash from '/src/assets/splashpanel.png';
import yellowz from '/src/assets/Yellow-Z.png';
import selfie from '/src/assets/SelfPortrait.jpg';


// Styled components
export const ThreeFlextwo = styled.div`
  display: flex;
  margin-top: -1vh;
  height: 101vh;
  align-items: center;
  justify-content: center;
  gap: 20px;
  justify-self: center;
  background-color: ${(props) => props.Backgroundcolor};

  @media (max-width: 450px) {
    flex-direction: column;
    margin: 0;
    padding: 15vw 0;
    width: auto;
    height: auto;
  }
`;

export const ThreeItemtwo = styled.img`
  width: ${(props) => props.Width};
  @media (max-width: 450px) {
    padding-top: 2vh;
    width: 80vw;
  }
`;



// ===================== COMPONENT =====================
export default function Artworks() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>



      {/* ===================== PRINTMAKING SECTION ===================== */}
       {/* Hero Images */}
            <FullBg src={Cape} />
            <FullBg src={Capetwo} />
      
            {/* Olivia Collabs Section */}
          <ThreeFlextwo style={{ width: '55vw' }}>
        <ThreeItem style={{ width: '48%' }} src={olivia4} />
        <ThreeItem style={{ width: '48%' }} src={olivia2} />
      </ThreeFlextwo>
      
            <RisoFlex style={{ backgroundColor: 'black' }}>
              <TextSection>
                Printmaking is a practice that explores both screen printing and relief techniques. Several of these works are collaborative projects with my partner, Olivia Zita Smith
              </TextSection>
            </RisoFlex>
      
            {/* Screenprints */}
<ArtSectionthreeog 
  style={{ 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    gap: "2px",       // very tight spacing
    padding: "100px 40px 50px 40px"
  }}
>
  <Orbital src={screenprint2} style={{ flex: "1 1 34%", maxWidth: "34%" }} />
  <GridRowTwo src={screenprint2_1} style={{ flex: "1 1 34%", maxWidth: "34%" }} />
  <GridRowThree src={screenprint1} style={{ flex: "1 1 34%", maxWidth: "34%" }} />
</ArtSectionthreeog>

            {/* Olivia Collabs */}
      <ThreeFlextwo
        Backgroundcolor="white"
        style={{
          width: '100vw',           // full width of viewport
          justifyContent: 'center', // center the images
          padding: '5vh 0',         // vertical padding only
          gap: '20px'
        }}
      >
        <ThreeItemtwo Width="30vw" src={oliviacollab1} />
        <ThreeItemtwo Width="30vw" src={oliviacollab2} />
      </ThreeFlextwo>
            <RisoFlex>
              <RisoItem Width="60vw" img src={oliviacollab3} />
            </RisoFlex>
      
     <ArtSectionthreeog>
  <Orbital src={No2} style={{ paddingBottom: "60px" }} />
  <ArtText>
    <ArtHeader>Screenprint No. 2</ArtHeader>
    <ArtYear>2019</ArtYear>
    <ArtDesc>Screen print ink on paper. Edition of 20.</ArtDesc>
  </ArtText>

  <GridRowTwo src={oliviacollab4} />
  <ArtTexttwo>
    <ArtHeader>Circles</ArtHeader>
    <ArtYear>2021</ArtYear>
    <ArtDesc>Collaboration with Olivia Zita Smith.</ArtDesc>
  </ArtTexttwo>

  <GridRowThree src={woodblock1} />
  <ArtTextthree>
    <ArtHeader>Woodblock Print</ArtHeader>
    <ArtYear>2021</ArtYear>
    <ArtDesc>Relief print on paper.</ArtDesc>
  </ArtTextthree>
</ArtSectionthreeog>
      
            {/* Twins */}
            <ArtSectiontwins>
              <Orbital src={oliviacollab6} />
              <TwinTwo src={oliviacollab5} />
            </ArtSectiontwins>
      
            <ArtSectiontwins>
              <Orbital src={oliviacollab7} />
              <TwinTwo src={oliviacollab8} />
            </ArtSectiontwins>
      
            {/* CMYK Screenprints up to "The Nuns" */}
<ArtSectionthreeog
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    padding: "clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px)",
  }}
>
  <Orbital src={bear} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowTwo src={graffiticollage} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowThree src={thetown} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
</ArtSectionthreeog>
      
            {/* Sections below "The Nuns" are commented out for now */}
            {/*
            <ThreeFlex style={{ justifyContent: 'center' }} Backgroundcolor="#191919">
              <ThreeItem style={{ paddingRight: '2vw' }} src={bluecmyk} />
              <ThreeItem style={{ paddingLeft: '2vw', paddingRight: '2vw' }} src={bluecmyk} />
              <ThreeItem style={{ paddingRight: '2vw', paddingLeft: '2vw' }} src={bluecmyk} />
              <ThreeItem style={{ paddingLeft: '2vw' }} src={bluecmyk} />
            </ThreeFlex>
      
            <FullBg src={people} />
      
            <RisoFlex style={{backgroundColor:"black", marginTop:'-1vh'}}>
              <TextSection>Exploitations is a conceptual series ... </TextSection>
            </RisoFlex>
            ... all remaining Exploitations content ...
            */}


      {/* ===================== PAINTING SECTION ===================== */}
      {/*} <RisoFlex>
        <RisoItem Width="55vw" img src={lighthouse} />
      </RisoFlex> */}
     
      <RisoFlex style={{ backgroundColor: 'black' }}>
        <TextSection>
          I often look to capture moments throughout my life. Painting allows me to express myself through shapes, and color.
          <br />
          <br />
          I love exploring realism, or abstraction.
        </TextSection>
      </RisoFlex>

      {/* Section with 3 photos */}
      <ArtSectionthreeog>
       {/*} <Orbital src={plastictoy} />
        <ArtText>
          <ArtHeader>Plastic Toy</ArtHeader>
          <ArtYear>2022</ArtYear>
          <ArtDesc>Oil paint on paper.</ArtDesc>
        </ArtText> */}

        <GridRowTwo src={splash} />
        <ArtTexttwo>
          <ArtHeader>MILKBONES</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={yellowz} />
        <ArtTextthree>
          <ArtHeader>YELLOW TWEED</ArtHeader>
          <ArtYear>2015-21</ArtYear>
          <ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* Second set of 3 pieces */}
      <ArtSectionthreeog>
        <Orbital src={yellowlily} />
        <ArtText>
          <ArtHeader>Yellow Lily</ArtHeader>
          <ArtYear>2020</ArtYear>
          <ArtDesc>Airbrush & acrylic on yupo paper.</ArtDesc>
        </ArtText>

        <GridRowTwo src={airbrush} />
        <ArtTexttwo>
          <ArtHeader>SHAPES</ArtHeader>
          <ArtYear>2020</ArtYear>
          <ArtDesc>Acrylic & spraypaint on yupo paper.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={cacti1} />
        <ArtTextthree>
          <ArtHeader>ORANGE CACTI</ArtHeader>
          <ArtYear>2015-21</ArtYear>
          <ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

<RisoFlex style={{ paddingBottom: "100px" }}>
  <RisoItem Width="55vw" img src={selfie} />
</RisoFlex>


      {/* Single piece */}
      {/*<ArtSectionthreeog>
        <Orbital src={sarge} />
        <ArtText>
          <ArtHeader>Sarge</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Oil paint on wood panel.</ArtDesc>
        </ArtText>
      </ArtSectionthreeog> */}

      {/* ===================== COLLAGES SECTION ===================== */}
   
   
           <RisoFlex style={{backgroundColor:"black"}}>
               <TextSection Fontsize='3.5rem'>Collaging is a technique I use to work through compositions, shapes, and colors. 
   <br /> <br />Plus, I enjoy making them. <br /> <br />
    </TextSection>
   
               </RisoFlex>

               {/*} <RisoFlex >
   
           <RisoItem Width='55vw' img src={bike} />
   
           </RisoFlex> */}
   
   
               {/* Section with 3 photos */}
   <ArtSectionthreeog
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    padding: "clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px)",
  }}
>
    <GridRowThree src={collage32} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowTwo src={collage47} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <Orbital src={collage50} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  
</ArtSectionthreeog>

                   <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread1} />
   
   </RisoFlex>
   
                 {/*}  <FullBg src={boats} /> */}
   
   
                    {/* Section with 3 photos */}
   <ArtSectionthreeog
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    padding: "clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px)",
  }}
>
  <Orbital src={collage1} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowTwo src={collage2} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowThree src={collage3} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
</ArtSectionthreeog>
   
                  
   
   <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread2} />
   
   </RisoFlex>
   
   
         {/* Section with 3 photos */}
   
 <ArtSectionthreeog
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    padding: "clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px)",
  }}
>
  <Orbital src={collage4} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowTwo src={collagefour} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowThree src={collage45} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
</ArtSectionthreeog>
   
              
   
               <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread3} />
   
   </RisoFlex>
   
   
   
     {/* Section with 3 photos */}
   
 <ArtSectionthreeog
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    padding: "clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px)",
  }}
>
  <Orbital src={collage44} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowTwo src={collage37} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowThree src={collage48} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
</ArtSectionthreeog>
   
                  
   
                   <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread4} />
   
   </RisoFlex>
   
   
   
   {/* Section with 3 photos */}
   
 <ArtSectionthreeog
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    padding: "clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px)",
  }}
>
  <Orbital src={collage40} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowTwo src={collage39} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowThree src={collage38} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
</ArtSectionthreeog>
   
                   <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread5} />
   
   </RisoFlex>
   
   
   
   {/* Section with 3 photos */}
   
 <ArtSectionthreeog
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    padding: "clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px)",
  }}
>
  <Orbital src={collage34} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowTwo src={collage35} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowThree src={collage31} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
</ArtSectionthreeog>

                   <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread6} />
   
   </RisoFlex>
   {/* Section with 3 photos */}
   
 <ArtSectionthreeog
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    padding: "clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px)",
  }}
>
  <Orbital src={collage28} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowTwo src={collage29} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowThree src={collage30} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
</ArtSectionthreeog>
   
                   <FullBg src={rapture} />
   
                   {/* Section with 3 photos */}
   
 <ArtSectionthreeog
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    padding: "clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px)",
  }}
>
  <Orbital src={collage46} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowTwo src={collage33} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
  <GridRowThree src={collage49} style={{ transform: "scale(1)", maxWidth: "30vw" }} />
</ArtSectionthreeog>

<ThreeFlex
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "80px",          // increased spacing between images
    padding: "50px 5%",   // horizontal padding
  }}
>
  <ThreeItem src={collage41} style={{ transform: "scale(1.1)", flex: "1 1 auto" }} />
  <ThreeItem src={collage42} style={{ transform: "scale(1.1)", flex: "1 1 auto" }} />
  <ThreeItem src={collage43} style={{ transform: "scale(1.1)", flex: "1 1 auto" }} />
</ThreeFlex>



            
    </div>
  );
}
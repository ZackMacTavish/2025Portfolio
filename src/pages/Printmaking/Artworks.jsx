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
            <img
  src={Cape}
  style={{
    width: '100vw',           // full width
    height: '100vh',          // full viewport height
    objectFit: 'cover',       // crop/zoom without stretching
    objectPosition: 'bottom', // align image to the bottom
    display: 'block'
  }}
/>
           
           <img
  src={Capetwo}
  style={{
    width: '100vw',          // full width
    height: '100vh',         // full viewport height
    objectFit: 'cover',      // crop/zoom without stretching
    objectPosition: 'center',// center the image
    display: 'block'
  }}
/>
      
            {/* Olivia Collabs Section */}
        <ThreeFlextwo 
  style={{ 
    width: '55vw', 
    display: 'flex', 
    justifyContent: 'space-between', // optional for even spacing
    gap: '64px'                       // increase gap as desired
  }}
>
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
    alignItems: "flex-start",
    gap: "64px",
    padding: "100px 40px 100px 40px", // maintain bottom padding
    flexWrap: "nowrap",
    overflow: "hidden"
  }}
>
  <Orbital 
    src={screenprint2} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", // bigger
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
  <GridRowTwo 
    src={screenprint2_1} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", // bigger
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
  <GridRowThree 
    src={screenprint1} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", // bigger
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
</ArtSectionthreeog>

            {/* Olivia Collabs */}
 <ThreeFlextwo
  Backgroundcolor="white"
  style={{
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', 
    gap: '64px',
    padding: '6vh 20px',       // small padding top and bottom
    flexWrap: 'nowrap',
    height: 'auto',            
  }}
>
  <ThreeItemtwo 
    src={oliviacollab1} 
    style={{ 
      width: 'clamp(150px, 30vw, 400px)',
      height: 'auto',
      objectFit: 'cover',
      display: 'block'         
    }} 
  />
  <ThreeItemtwo 
    src={oliviacollab2} 
    style={{ 
      width: 'clamp(150px, 30vw, 400px)',
      height: 'auto',
      objectFit: 'cover',
      display: 'block'
    }} 
  />
</ThreeFlextwo>

            <RisoFlex>
              <RisoItem Width="60vw" img src={oliviacollab3} />
            </RisoFlex>
      
 

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
    alignItems: "flex-start",
    gap: "64px",
    padding: "80px 40px 50px 40px", // more padding on top, smaller on bottom
    flexWrap: "nowrap",
    overflow: "hidden"
  }}
>
  <Orbital 
    src={bear} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",
      height: "auto",
      objectFit: "cover",
      display: "block"
    }} 
  />
  <GridRowTwo 
    src={graffiticollage} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",
      height: "auto",
      objectFit: "cover",
      display: "block"
    }} 
  />
  <GridRowThree 
    src={thetown} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",
      height: "auto",
      objectFit: "cover",
      display: "block"
    }} 
  />
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
    alignItems: "flex-start",
    gap: "64px",
    padding: "80px 40px 50px 40px", // top/bottom padding
    flexWrap: "nowrap",             // keep all images on one row
    overflow: "hidden",
  }}
>
  <GridRowThree 
    src={collage32} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",              
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover",
    }} 
  />
  <GridRowTwo 
    src={collage47} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",              
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover",
    }} 
  />
  <Orbital 
    src={collage50} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",              
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover",
    }} 
  />
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
    alignItems: "flex-start",
    gap: "64px",
    padding: "80px 40px 50px 40px", // top/bottom padding
    flexWrap: "nowrap",             // keep all images on one row
    overflow: "hidden",
  }}
>
  <Orbital 
    src={collage1} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",              
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover",
    }} 
  />
  <GridRowTwo 
    src={collage2} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",              
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover",
    }} 
  />
  <GridRowThree 
    src={collage3} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",              
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover",
    }} 
  />
</ArtSectionthreeog>
                  
   
   <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread2} />
   
   </RisoFlex>
   
   
         {/* Section with 3 photos */}
   
<ArtSectionthreeog
  style={{ 
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "64px",
    padding: "80px 40px 50px 40px", // consistent padding top/bottom
    flexWrap: "nowrap",             // keep images on one row
    overflow: "hidden",
  }}
>
  <Orbital 
    src={collage4} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",              
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover",
    }} 
  />
  <GridRowTwo 
    src={collagefour} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",              
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover",
    }} 
  />
  <GridRowThree 
    src={collage45} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",              
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover",
    }} 
  />
</ArtSectionthreeog>
              
   
               <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread3} />
   
   </RisoFlex>
   
   
   
     {/* Section with 3 photos */}
   
 <ArtSectionthreeog
  style={{ 
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",  // allows container to shrink with images
    gap: "64px",
    padding: "80px 40px 50px 40px", // padding around the row
    flexWrap: "nowrap",
    overflow: "hidden"
  }}
>
  <Orbital 
    src={collage44} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",              
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
  <GridRowTwo 
    src={collage37} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",              
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
  <GridRowThree 
    src={collage48} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%",              
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
</ArtSectionthreeog>
   
                  
   
                   <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread4} />
   
   </RisoFlex>
   
   
   
   {/* Section with 3 photos */}
   
 <ArtSectionthreeog
  style={{ 
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",  // allows container to shrink with images
    gap: "64px",               // bigger gap like previous treatments
    padding: "80px 40px 50px 40px", // top padding larger, bottom moderate
    flexWrap: "nowrap",
    overflow: "hidden"
  }}
>
  <Orbital 
    src={collage40} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", 
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
  <GridRowTwo 
    src={collage39} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", 
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
  <GridRowThree 
    src={collage38} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", 
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
</ArtSectionthreeog>
   
                   <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread5} />
   
   </RisoFlex>
   
   
   
   {/* Section with 3 photos */}
   
<ArtSectionthreeog
  style={{ 
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",  // allows container to shrink with images
    gap: "64px",               // consistent with other sections
    padding: "80px 40px 50px 40px", // top larger, bottom moderate
    flexWrap: "nowrap",
    overflow: "hidden"
  }}
>
  <Orbital 
    src={collage34} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", 
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
  <GridRowTwo 
    src={collage35} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", 
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
  <GridRowThree 
    src={collage31} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", 
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
</ArtSectionthreeog>

                   <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread6} />
   
   </RisoFlex>
   {/* Section with 3 photos */}
   
 <ArtSectionthreeog
  style={{ 
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",  // allows container height to shrink with images
    gap: "64px",               // consistent spacing
    padding: "80px 40px 50px 40px", // more padding on top, moderate bottom
    flexWrap: "nowrap",
    overflow: "hidden"
  }}
>
  <Orbital 
    src={collage28} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", 
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
  <GridRowTwo 
    src={collage29} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", 
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
  <GridRowThree 
    src={collage30} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", 
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
</ArtSectionthreeog>
   
                 <FullBg 
  src={rapture} 
  style={{ 
    width: "100vw",        // full width
    height: "100vh",       // full viewport height
    objectFit: "cover",    // crop/zoom without stretching
    objectPosition: "bottom", // center the image
  }} 
/>
   
                   {/* Section with 3 photos */}
   
 <ArtSectionthreeog
  style={{ 
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",  // allows container height to shrink with images
    gap: "64px",               // consistent spacing
    padding: "100px 40px 100px 40px", // top padding more than bottom
    flexWrap: "nowrap",
    overflow: "hidden"
  }}
>
  <Orbital 
    src={collage46} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", 
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
  <GridRowTwo 
    src={collage33} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", 
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
  <GridRowThree 
    src={collage49} 
    style={{ 
      flex: "1 1 0",
      maxWidth: "28%", 
      maxHeight: "100%",
      height: "auto",
      objectFit: "cover"
    }} 
  />
</ArtSectionthreeog>

<ThreeFlex
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "64px",
    padding: "80px 5%",     // more vertical padding
    height: "auto",
    maxHeight: "70vh",
    flexWrap: "nowrap",
    overflow: "hidden",
  }}
>
  <ThreeItem 
    src={collage41} 
    style={{ 
      flex: "1 1 0", 
      maxWidth: "28%", 
      height: "100%", 
      objectFit: "cover", 
    }} 
  />
  <ThreeItem 
    src={collage42} 
    style={{ 
      flex: "1 1 0", 
      maxWidth: "28%", 
      height: "100%", 
      objectFit: "cover", 
    }} 
  />
  <ThreeItem 
    src={collage43} 
    style={{ 
      flex: "1 1 0", 
      maxWidth: "28%", 
      height: "100%", 
      objectFit: "cover", 
    }} 
  />
</ThreeFlex>


            
    </div>
  );
}
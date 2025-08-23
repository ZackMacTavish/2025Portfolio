import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';

// Assets
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

// Components
import { RisoFlex, RisoItem } from '../3d/MergedGraffiti';
import { TextSection } from '../Dwelling/Dwelling';
import {
  ArtDesc,
  ArtHeader,
  ArtSectionthreeog,
  ArtSectiontwins,
  ArtText,
  ArtTextthree,
  ArtTexttwo,
  ArtYear,
  FullBg,
  GridRowThree,
  GridRowTwo,
  Orbital,
  TwinTwo
} from '../COMPOSITION/Composition';
import { ThreeFlex, ThreeItem } from '../Photography/Photography';

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

export default function Printmaking() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
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
          Printmaking is a technique that explores screen printing, and relief printing.
          Some of these pieces are collaborations with my partner Olivia Zita Smith.
        </TextSection>
      </RisoFlex>

      {/* Screenprints */}
      <ArtSectionthreeog>
        <Orbital src={screenprint2} />
        <ArtText>
          <ArtHeader>Screenprint No. 2</ArtHeader>
          <ArtYear>2019</ArtYear>
          <ArtDesc>Screen print ink on paper. Edition of 2.</ArtDesc>
        </ArtText>

        <GridRowTwo src={screenprint2_1} />
        <ArtTexttwo>
          <ArtHeader>Screenprint No. 2.1</ArtHeader>
          <ArtYear>2019</ArtYear>
          <ArtDesc>Screen print ink on paper. Edition of 20.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={screenprint1} />
        <ArtTextthree>
          <ArtHeader>Screenprint No. 1</ArtHeader>
          <ArtYear>2019</ArtYear>
          <ArtDesc>Screen print ink on paper. Edition of 24.</ArtDesc>
        </ArtTextthree>
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
        <Orbital src={No2} />
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
      <ArtSectionthreeog>
        <Orbital src={bear} />
        <ArtText>
          <ArtHeader>CMYK Screenprint 1</ArtHeader>
          <ArtYear>2015</ArtYear>
          <ArtDesc>Screen print ink on paper. Edition of 8. Sold Out.</ArtDesc>
        </ArtText>

        <GridRowTwo src={graffiticollage} />
        <ArtTexttwo>
          <ArtHeader>CMYK Screenprint 2</ArtHeader>
          <ArtYear>2015</ArtYear>
          <ArtDesc>Screen print ink on paper. Edition of 6.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={thetown} />
        <ArtTextthree>
          <ArtHeader>The Nuns</ArtHeader>
          <ArtYear>2015</ArtYear>
          <ArtDesc>Screen print ink on paper. Part of the Nuns Series (6).</ArtDesc>
        </ArtTextthree>
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
    </div>
  );
}
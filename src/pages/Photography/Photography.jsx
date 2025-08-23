import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';

// Composition components
import { 
  ArtDesc, ArtHeader, ArtSectionthreeog, ArtText, ArtTextthree, ArtTexttwo, ArtYear, 
  FullBg, GridRowThree, GridRowTwo, Orbital 
} from '../COMPOSITION/Composition';

// Polaroids
import polaroid1 from '../../assets/polaroid1.jpg';
import polaroid2 from '../../assets/polaroid2.jpg';
import polaroid3 from '../../assets/polaroid3.jpg';
import polaroid7 from '../../assets/polaroid7.jpg';
import polaroid8 from '../../assets/polaroid8.jpg';
import polaroid9 from '../../assets/polaroid9.jpg';

// Locations / Scenes
import Hawaii1 from '../../assets/Greenhut.jpg';
import eighteen from '../../assets/1821.jpg';
import birdy from '../../assets/BirdyBrooklyn.jpg';
import coney2 from '../../assets/Coney2.jpg';
import cannon1 from '../../assets/Cannon1.jpg';
import cannon2 from '../../assets/Cannon2.jpg';
import cannon3 from '../../assets/Cannon3.jpg';
import kevin from '../../assets/Kevin.jpg';
import skull from '../../assets/Skull.jpg';
import twoskulls from '../../assets/2skulls.jpg';
import hawaiianchurch from '../../assets/HawaiianChurch.jpg';
import aquarium from '../../assets/Aquarium.jpg';
import jelly1 from '../../assets/Jelly.jpg';
import jelly2 from '../../assets/Jelly2.jpg';
import goog from '../../assets/Goog.jpg';
import olivia from '../../assets/Olivia.jpg';
import williamsburg from '../../assets/Williamsburg.jpg';
import splash from '../../assets/Splash.jpg';
import circle1 from '../../assets/circle1.png';
import circle2 from '../../assets/circle2.jpg';
import circle3 from '../../assets/circle3.jpg';
import Avalon from '../../assets/Avalon.jpg';
import brooklyndouble from '../../assets/brooklyndouble.jpg';
import nathans from '../../assets/Nathans.jpg';
import greensand from '../../assets/greensand.jpg';

// ThreeFlextwo components from Printmaking
import { ThreeFlextwo, ThreeItemtwo } from '../Printmaking/Printmaking';

// Styled components for ThreeFlex and ThreeItem
export const ThreeFlex = styled.div`
  display: flex;
  padding: 0 15vw;
  margin-top: -1vh;
  height: 101vh;
  align-items: center;
  justify-content: space-between;
  justify-self: center;
  background-color: ${(props) => props.Backgroundcolor};

  @media(max-width: 450px) {
    height: auto;
    flex-direction: column;
    padding: 15vw 0;
  }
`;

export const ThreeItem = styled.img`
  width: 20vw;
  @media(max-width: 450px) {
    width: 80vw;
    padding-top: 2vh;
  }
`;

export default function Photography() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>

      {/* Section with three polaroids */}
<ThreeFlextwo
  style={{
    width: '100vw',
    backgroundColor: '#191919',
    display: 'flex',
    justifyContent: 'center', // keeps images centered
    alignItems: 'center',
    gap: '2vw', // spacing between images
    padding: '2vw', // optional padding around
    boxSizing: 'border-box',
  }}
>
  <ThreeItemtwo Width="20vw" src={polaroid1} />
  <ThreeItemtwo Width="20vw" src={polaroid2} />
  <ThreeItemtwo Width="20vw" src={polaroid3} />
</ThreeFlextwo>

      {/* Full image section */}
    <FullBg
  src={Hawaii1}
  style={{
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    display: "block"
  }}
/>

      {/* Three-photo art section */}
      <ArtSectionthreeog>
        <Orbital src={eighteen} />
        <ArtText>
          <ArtHeader>1821 (Chicago)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ArtText>

        <GridRowTwo src={birdy} />
        <ArtTexttwo>
          <ArtHeader>BROOKLYN BRIDGE</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={coney2} />
        <ArtTextthree>
          <ArtHeader>PARACHUTE</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* Section with three yellow polaroids */}
   <ThreeFlextwo
  style={{
    width: '100vw',
    backgroundColor: '#C7B815',
    display: 'flex',
    justifyContent: 'center', // center images
    alignItems: 'center',
    gap: '2vw', // space between images
    padding: '2vw', // optional padding around
    boxSizing: 'border-box',
  }}
>
  <ThreeItemtwo Width="20vw" src={cannon1} />
  <ThreeItemtwo Width="20vw" src={cannon2} />
  <ThreeItemtwo Width="20vw" src={cannon3} />
</ThreeFlextwo>

      {/* Three-photo art section */}
      <ArtSectionthreeog>
        <Orbital src={kevin} />
        <ArtText>
          <ArtHeader>KEVIN</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ArtText>

        <GridRowTwo src={skull} />
        <ArtTexttwo>
          <ArtHeader>SKULL (Manhattan, NY)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={twoskulls} />
        <ArtTextthree>
          <ArtHeader>Duo Skulls (Sauvie Island, OR)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* Full image section */}
      <FullBg src={hawaiianchurch} />

      {/* Section with three aquarium polaroids */}
   <ThreeFlextwo
  style={{
    width: '100vw',
    backgroundColor: '#191919',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2vw',
    padding: '2vw',
    boxSizing: 'border-box',
  }}
>
  <ThreeItemtwo Width="22vw" src={aquarium} />
  <ThreeItemtwo Width="22vw" src={jelly1} />
  <ThreeItemtwo Width="22vw" src={jelly2} />
</ThreeFlextwo>

      {/* Three-photo art section */}
      <ArtSectionthreeog>
        <Orbital src={goog} />
        <ArtText>
          <ArtHeader>GOOG</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ArtText>

        <GridRowTwo src={olivia} />
        <ArtTexttwo>
          <ArtHeader>OLIVIA</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={williamsburg} />
        <ArtTextthree>
          <ArtHeader>WILLIAMSBURG BRIDGE</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* Full splash image */}
      <FullBg src={splash} />

      {/* Section with three circle polaroids */}
    <ThreeFlextwo
  style={{
    width: '100vw',
    backgroundColor: '#191919',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2vw',
    padding: '2vw',
    boxSizing: 'border-box',
  }}
>
  <ThreeItemtwo Width="22vw" src={circle1} />
  <ThreeItemtwo Width="22vw" src={circle2} />
  <ThreeItemtwo Width="22vw" src={circle3} />
</ThreeFlextwo>

      {/* Three-photo art section */}
      <ArtSectionthreeog>
        <Orbital src={Avalon} />
        <ArtText>
          <ArtHeader>Avalon Theatre (Portland, OR)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ArtText>

        <GridRowTwo src={brooklyndouble} />
        <ArtTexttwo>
          <ArtHeader>Street Graffiti (Brooklyn, NY)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={nathans} />
        <ArtTextthree>
          <ArtHeader>NATHAN'S (Brooklyn, NY)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* Section with three final polaroids */}
    <ThreeFlextwo
  style={{
    width: '100vw',
    backgroundColor: '#191919',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2vw',
    padding: '2vw',
    boxSizing: 'border-box',
  }}
>
  <ThreeItemtwo Width="22vw" src={polaroid7} />
  <ThreeItemtwo Width="22vw" src={polaroid8} />
  <ThreeItemtwo Width="22vw" src={polaroid9} />
</ThreeFlextwo>

      {/* Full image section */}
      <FullBg src={greensand} />

    </div>
  );
}
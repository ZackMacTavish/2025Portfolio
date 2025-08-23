import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { 
  ArtDesc, ArtHeader, ArtSectionthreeog, ArtText, ArtTextthree, ArtTexttwo, ArtYear, 
  FullBg, GridRowThree, GridRowTwo, Orbital, ParagraphFour 
} from '../COMPOSITION/Composition';
import { TextSection } from '../Dwelling/Dwelling';
import { NewSection } from '../Art_Landing/Art';
import { ThreeFlextwo, ThreeItemtwo } from '../Printmaking/Printmaking';

// --- ThreeD Assets ---
import fiftytwo from '../../assets/52.jpg';
import fiftysix from '../../assets/56.jpg';
import one from '../../assets/1.2.jpg';
import six from '../../assets/6.jpg';
import thirteen from '../../assets/13.jpg';

// --- Graffiti Assets ---
import artbash1 from '../../assets/Artbashmash.jpg';
import artbash2 from '../../assets/Artbashmash2.jpg';
import artbash3 from '../../assets/Artbashmash3.jpg';
import sense from '../../assets/RIPSENSE.jpg';
import bfa from '../../assets/BFA.jpg';
import reuzes from '../../assets/Reuzes.jpg';
import denver from '../../assets/Denver.jpg';
import Bees from '../../assets/Whiteline.jpg';
import mucha from '../../assets/Mucha.jpg';
import crawford from '../../assets/Crawford.jpg';
import paintlouis from '../../assets/Paintlouis.jpg';
import riso from '../../assets/riso3.jpg';
import sushix from '../../assets/SushiX.jpg';
import rogerrabbit from '../../assets/rogerrabbit.jpg';
import summer from '../../assets/summer16.jpg';
import stylesmash from '../../assets/Reuzes-stylesmash.jpg';
import Lines from '../../assets/ReuzesLines.jpg';
import sushixtwo from '../../assets/SushiX2.jpg';
import enova from '../../assets/Enova.jpg';
import eu from '../../assets/EU.jpg';

// --- Styled Components ---
export const RisoItem = styled.img`
  width: ${(props) => props.Width};
  max-width: 1000px;
  height: auto;
  @media (max-width: 1000px) { width: 90vw; padding-top: 3vh; }
  @media (max-width: 450px) { padding-top: 5vh; padding-bottom: 5vh; }
`;

export const RisoFlex = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`;

const BeesStyle = styled.img`
  max-width: 900px;
  width: 65vw;
  height: auto;
  margin-left: -9vw;
`;

const FiftyWidth = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
`;

export default function MergedGraffiti() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* --- ThreeD Section --- */}
      <FullBg src={fiftytwo} />
      <FullBg src={fiftysix} />

      <RisoFlex style={{ backgroundColor: 'black' }}>
        <TextSection>
         While in college, I studied Rhino 3D and created a series of photographs exploring architectural graffiti lettering, where the letters took on an abstract life of their own. For the course final, I 3D printed one of these structures. 
         In the future, I hope to continue exploring and creating new visuals in 3D.
        </TextSection>
      </RisoFlex>

      <ArtSectionthreeog>
        <Orbital src={one} />
        <ArtText>
          <ArtHeader>No. 1</ArtHeader>
          <ArtYear>2017</ArtYear>
          <ArtDesc>Render made in Rhino, and Keyshot.</ArtDesc>
        </ArtText>

        <GridRowTwo src={six} />
        <ArtTexttwo>
          <ArtHeader>No. 6</ArtHeader>
          <ArtYear>2017</ArtYear>
          <ArtDesc>Render made in Rhino, and Keyshot.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={thirteen} />
        <ArtTextthree>
          <ArtHeader>No. 13</ArtHeader>
          <ArtYear>2017</ArtYear>
          <ArtDesc>Render made in Rhino, and Keyshot.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* --- Graffiti Section --- */}
    <ThreeFlextwo
  style={{
    width: '100vw',
    backgroundColor: '#191919',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2vw',        // Space between items
    padding: '2vw',    // Optional top/bottom padding
    boxSizing: 'border-box',
  }}
>
  <ThreeItemtwo Width="22vw" src={artbash1} />
  <ThreeItemtwo Width="22vw" src={artbash2} />
  <ThreeItemtwo Width="22vw" src={artbash3} />
</ThreeFlextwo>

      <FullBg src={sense} />

      <RisoFlex style={{ backgroundColor: 'black' }}>
        <TextSection>
        My artistic roots began in graffiti, where I explored sketching letters and experimenting with their shapes and distortions. 
        This practice eventually led me to experiment with other mediums, like the paintbrush, and deepened my love for typography. 
        I’m especially drawn to the rich, saturated colors often found in spray paint.

        </TextSection>
      </RisoFlex>

      <ArtSectionthreeog>
        <Orbital src={bfa} />
        <ArtText>
          <ArtHeader>BFA Exhibition (Chicago, IL)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on brick veneer.</ArtDesc>
        </ArtText>

        <GridRowTwo src={reuzes} />
        <ArtTexttwo>
          <ArtHeader>LOWBROW (Brooklyn, NY)</ArtHeader>
          <ArtYear>2020</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={denver} />
        <ArtTextthree>
          <ArtHeader>RHINO (Denver, CO)</ArtHeader>
          <ArtYear>2019</ArtYear>
          <ArtDesc>Spray paint on cinderblock.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      <NewSection Backgroundcolor="white" Backgroundheight="125vh">
        <FiftyWidth>
          <BeesStyle src={Bees} />
        </FiftyWidth>
        <ParagraphFour>
          This B's illustration was made for a self-published book about the art of graffiti writing.
        </ParagraphFour>
      </NewSection>

      {/* Continue with remaining Graffiti sections */}
      <ArtSectionthreeog>
        <Orbital src={mucha} />
        <ArtText>
          <ArtHeader>ORANGE LINE (Chicago, IL)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on cinderblock.</ArtDesc>
        </ArtText>

        <GridRowTwo src={crawford} />
        <ArtTexttwo>
          <ArtHeader>CRAWFORD (Chicago, IL)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={paintlouis} />
        <ArtTextthree>
          <ArtHeader>PAINT LOUIS (St. Louis, MO)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      <RisoFlex>
        <RisoItem Width="60vw" src={riso} />
      </RisoFlex>

      <ArtSectionthreeog>
        <Orbital src={sushix} />
        <ArtText>
          <ArtHeader>Sushi X</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on brick.</ArtDesc>
        </ArtText>

        <GridRowTwo src={rogerrabbit} />
        <ArtTexttwo>
          <ArtHeader>Crawford</ArtHeader>
          <ArtYear>2020</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={summer} />
        <ArtTextthree>
          <ArtHeader>Crawford</ArtHeader>
          <ArtYear>2019</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* <RisoFlex>
        <RisoItem Width="80vw" src={Lines} />
      </RisoFlex> */}

      <ArtSectionthreeog>
        <Orbital src={sushixtwo} />
        <ArtText>
          <ArtHeader>Sushi X</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on brick. (Collaboration with 'Leks')</ArtDesc>
        </ArtText>

        <GridRowTwo src={enova} />
        <ArtTexttwo>
          <ArtHeader>ENOVA INTERNATIONAL INC.</ArtHeader>
          <ArtYear>2015</ArtYear>
          <ArtDesc>Spray paint on wood.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={eu} />
        <ArtTextthree>
          <ArtHeader>YARROW'S (Providence, RI)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on cinderblock.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/*
<RisoFlex>
  <RisoItem Width="80vw" src={stylesmash} />
</RisoFlex>
*/}
    </div>
  );
}
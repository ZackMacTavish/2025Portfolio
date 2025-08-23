import React, { useLayoutEffect } from 'react';
import { 
  ArtDesc, ArtHeader, ArtSectionthreeog, ArtText, ArtTextthree, ArtTexttwo, ArtYear, 
  FullBg, GridRowThree, GridRowTwo, Orbital 
} from '../COMPOSITION/Composition';

import { RisoFlex } from '../Graffiti/Graffiti';
import { TextSection } from '../Dwelling/Dwelling';

// Assets
import fiftytwo from '../../assets/52.jpg';
import fiftysix from '../../assets/56.jpg';
import one from '../../assets/1.2.jpg';
import six from '../../assets/6.jpg';
import thirteen from '../../assets/13.jpg';

export default function ThreeD() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Static images */}
      <FullBg src={fiftytwo} />
      <FullBg src={fiftysix} />

      <RisoFlex style={{ backgroundColor: 'black' }}>
        <TextSection>
          During my time in college, I took a course studying Rhino 3d. During that time I made a series of
          photographs based on architectural graffiti lettering. 
          The letters took on an abstract life of their own. I was tasked to 3d print the structure for the course final. 
          A future version of myself would love to create new visuals in 3d. 
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

      {/* Add more FullBg, Orbital, and GridRow sections as needed */}
    </div>
  );
}
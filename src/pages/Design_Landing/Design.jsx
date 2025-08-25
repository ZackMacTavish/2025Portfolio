import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArtDiv,
  ArtHeader,
  HouseOne,
  ListStyling,
  NewSectionTheme,
  ParagraphThree,
  ParagraphTwo,
  WorkCategories
} from '../Art_Landing/Art';
import { RisoItem } from '../3d/MergedGraffiti';
import { RisoItemtwo } from '../Giga/Giga';

// Assets
import ostrich from '../../assets/Books.png';
import ostrichcollage from '../../assets/OstrichPlumes—Collage.png';

const Design = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ArtDiv>

        {/* Section 1 */}
        <NewSectionTheme Backgroundheight="100vh">
          <RisoItem Width="50vw" src={ostrichcollage} style={{ paddingLeft: '0vw' }} />
          <ArtHeader>
            Graphic Design, <br />UI, Front-End.
          </ArtHeader>
        </NewSectionTheme>

        {/* Section 2 */}
        <NewSectionTheme Backgroundheight="85vh">
          <HouseOne src={ostrich} />
          <ParagraphTwo Widthsize="35vw">
            Bookmaking has been a joy for my design process. Here are 5 small books that I have self-published since 2015.
          </ParagraphTwo>
        </NewSectionTheme>

        {/* Section 3 */}
        <NewSectionTheme Backgroundheight="85vh">
          <ParagraphThree>
            Working in Design for over 6 years has led me to work on an array of projects. Here are some of my favorites.
          </ParagraphThree>

          <WorkCategories>

             <Link to="/Piton" style={{ textDecoration: 'none', color: 'white' }}>
              <ListStyling>PITON</ListStyling>
            </Link>


             <Link to="/Ux" style={{ textDecoration: 'none', color: 'white' }}>
              <ListStyling>LEYSI</ListStyling>
            </Link>

            <Link to="/ThreePillars" style={{ textDecoration: 'none', color: 'white' }}>
              <ListStyling>THREE PILLARS</ListStyling>
            </Link>

            <Link to="/AccessDirect" style={{ textDecoration: 'none', color: 'white' }}>
              <ListStyling>ACCESS DIRECT</ListStyling>
            </Link>

            <Link to="/Outsource" style={{ textDecoration: 'none', color: 'white' }}>
              <ListStyling>OUTSOURCE</ListStyling>
            </Link>

            <Link to="/GraphicDesign" style={{ textDecoration: 'none', color: 'white' }}>
              <ListStyling>GRAPHIC DESIGN</ListStyling>
            </Link>

            <Link to="/Giga" style={{ textDecoration: 'none', color: 'white' }}>
              <ListStyling>GIGA</ListStyling>
            </Link>

            {/*
            <Link to="/MacTavish" style={{ textDecoration: 'none', color: 'white' }}>
              <ListStyling>BOOKS</ListStyling>
            </Link>
            */}
          </WorkCategories>
        </NewSectionTheme>

      </ArtDiv>
    </div>
  );
};

export default Design;
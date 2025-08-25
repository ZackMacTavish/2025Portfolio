import React, { useEffect, useState } from 'react';
import Scene from '../../components/Three/three';
import styled from 'styled-components';
import house from '../../assets/hangingquilts.jpg';
import { Link } from 'react-router-dom';
import imagereplace from '../../assets/BlackTurtleneck-popart-01.jpg';

export const ArtDiv = styled.div`
overflow-y: hidden;
width: 100vw;

`



/* My first time writing the header paragraph with an absolute position, Trying to replace this across the board with grids*/

export const ArtHeader = styled.h1`
display: flex;
bottom: 13vh;
z-index: 200;
position: absolute;
font-size: clamp(24px, 12vw, 9.5rem);
padding-left: 10vw;
font-weight: 800;
line-height: 18vh;
color: white;
font-family: 'Space Grotesk', sans-serif;

@media (max-width: 1200px) {
line-height: 10vh;
font-size: 4.5rem;
;}
@media (max-width: 800px) {
  position: relative;
  bottom: 0;
  font-size: 3rem;
line-height: 6vh;
;}
`

/* Writing the first main section in flex, but switching over to grids*/
export const NewSection = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: ${(props) => props.Backgroundheight};
width: 100vw;
background-color:${(props) => props.Backgroundcolor};
@media (max-width: 1000px) {
flex-direction: column;
height: auto;
padding-bottom: 10vh;
;}
`


/* Writing the first main section in flex, but switching over to grids, with Theme Provider built in for dark-light modes*/
export const NewSectionTheme = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: ${(props) => props.Backgroundheight};
width: 100vw;
background-color: ${(props) => props.theme.backgroundColor};
@media (max-width: 1000px) {
flex-direction: column;
height: auto;
padding-bottom: 10vh;
;}
`



/*The grid that should replace the absolute positioning and flexboxes above, This Grid has flexibile color changes*/
export const GridOne = styled.div`
display: grid;
overflow-y: hidden;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
background-color:${(props) => props.Backgroundcolor};
height: 100vh;
width: 100vw;
`

/*The grid that should replace the absolute positioning and flexboxes above, This Grid has light/dark themes built in*/
export const GridThemes = styled.div`
display: grid;
overflow-y: hidden;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
background-color: ${(props) => props.theme.backgroundColor};
height: 100vh;
width: 100vw;
`

/*The grid header that should replace the absolute positioning header above*/
export const GridHeader = styled.h1`
  display: grid;
  grid-column-start: 3;
  padding-left: 5vw;
  grid-row-start: 2;
  grid-row-end: 4;
  font-size: clamp(22px, 10vw, 8rem); /* slightly smaller than before */
  align-self: center; /* vertically centers in the grid row */
  line-height: 16vh; 
  color: white;
  z-index: 200;
  font-family: 'Space Grotesk', sans-serif;

  @media (max-width: 1000px) {
    line-height: 14vh;
    font-size: 4rem;
  }
  @media (max-width: 800px) {
    line-height: 8vh;
    font-size: 2.8rem;
  }
`;

export const GridImage = styled.div`
display: grid; 
grid-column-start:3;
grid-row-start: 2;

`



export const ParagraphTwo = styled.div`
position: relative;
font-family: 'Space Grotesk', sans-serif;
font-weight: 500;
padding-right: 2vw;
font-size: 2.5rem;
width:${(props) => props.Widthsize};
color: white;

@media (max-width: 1400px) {  
font-size: 1.8rem;
;}



@media (max-width: 1000px) {  
  width: 90vw;
padding: 0;
;}

@media (max-width: 850px) {
font-size: 1.5rem;
padding-top: 2vh;
;}

`

export const ParagraphThree = styled.div`
position: relative;
left: 3vw;
font-family: 'Space Grotesk', sans-serif;
font-weight: 500;
font-size: 2.5rem;
width: 40vw;
color: white;

@media (max-width: 1400px) {  
font-size: 1.8rem;
;}

@media (max-width: 1000px) {  
width: 90vw;
;}

@media (max-width: 850px) {
padding-bottom: 10vh;
;}
`
export const HouseOne = styled.img`
  max-height: 90%;    /* keeps height constrained */
  width: auto;        /* maintain aspect ratio */
  display: block;
  object-fit: contain;
  margin-left: 200px;  /* moves it 50px from the left */

  @media (max-width: 1000px) {
    max-height: 50vh;
    width: auto;
    margin-left: 20px; /* smaller margin on smaller screens */
  }
`;

export const WorkCategories = styled.ul`
color: white;
position: relative;
font-size: 3rem;
list-style-type: none;
text-align: right;
@media (max-width: 1000px) {
width: 80vw;
font-size: 2.5rem;
;}

@media (max-width: 500px) {
width: 90vw;
font-size: 1.6rem;
;}
`

export const ListStyling = styled.li`
align-items: center;
padding-bottom: 2vh;
font-weight: 500;
overflow-y: hidden;
  &:after {
    content:"";
    display: inline-block;
    width: clamp(30px, 17vw, 400px);
  height: 10px;
 margin-left: 15px;
  margin-bottom: 5px;
  background: white;
  }

  &:hover {
    content:"";
   opacity: 0.8;
  }
`;


const Art = () =>  {

   /*useState Hook that crates the state, and variable for innerWidth  */

  const [isDesktop, setDesktop] = useState(window.innerWidth > 450);

   /*function that alters the state for innerWidth  */
  const updateMedia = () => {
    setDesktop(window.innerWidth > 450);
  };

  /*useEffect hook that has two functions. One to redirect to the top of the page, and one to check for resizing responsivness  */
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [])

  
    return (  
      
      <div>
      <ArtDiv>
     
       <GridThemes>
       <GridHeader>Storytelling <br />through Art</GridHeader>
       <GridImage>
       {/*<RisoItem Width='50vw' img src={Headerimage} /> */}
        {/* Ternary operator that checks for isDesktop Hook is larger than 450px to render Scene three.js or a static Img */}
        {isDesktop ? <Scene /> : <img style={{width: '90vw'}} alt="A graphic I made in illustrator" src={imagereplace} />}
       </GridImage>
       </GridThemes>
    
      

                
           <NewSectionTheme Backgroundheight="85vh">
  <HouseOne src={house} />

  <ParagraphTwo Widthsize='35vw'
  style={{ paddingRight: 'clamp(72px, 2vw, 10%)' }}
  >
   My current series, Dwelling, explores my journey through the places I’ve called home, reflecting on nostalgia, memory, and past experiences.

  </ParagraphTwo>
</NewSectionTheme>

                <NewSectionTheme Backgroundheight="85vh">
                 <ParagraphThree
  style={{ paddingLeft: 'clamp(72px, 2vw, 10%)' }}
>
 Art gives me the freedom to share my story. I’ve created two main series, Dwelling and Composition, along with studies and photographic works.
</ParagraphThree>

                  <WorkCategories>
                  <Link style={{textDecoration: 'none', color:'white'}} to="/Dwelling">
                  <ListStyling>DWELLING</ListStyling>
                  </Link>

                  <Link style={{textDecoration: 'none', color:'white'}} to="/Composition"> 
                  <ListStyling>COMPOSITION</ListStyling>
                  </Link>

                  <Link style={{textDecoration: 'none', color:'white'}} to="/Artworks">
                  <ListStyling>ARTWORKS</ListStyling>
                  </Link>
                  
             
                  
          
                  
                  <Link style={{textDecoration: 'none', color:'white'}} to="/Photography">
                  <ListStyling>PHOTO</ListStyling>
                  </Link>

                  <Link style={{textDecoration: 'none', color:'white'}} to='/Graffiti'>
                  <ListStyling>3D + GRAFFITI</ListStyling>
                  </Link>

                

                  </WorkCategories>

                </NewSectionTheme>

                
    
                </ArtDiv>
               
                </div>
    )
};

export default Art;

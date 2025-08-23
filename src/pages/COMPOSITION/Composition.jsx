import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { HouseOne, NewSection } from '../Art_Landing/Art';
import { RisoFlex } from '../3d/MergedGraffiti';
import { TextSection } from '../Dwelling/Dwelling';

// Assets
import fullcover from '../../assets/Composition-BackCover-Pt.2-01.jpg';
import renderone from '../../assets/Render1.png';
import artbook from '../../assets/Artbook.png';
import orbital from '../../assets/Orbital.jpg';
import spraywash from '../../assets/Spraypaintwash.png';
import rendertwo from '../../assets/Render2.png';
import twin1 from '../../assets/Twin1.jpeg';
import twin2 from '../../assets/Twin2.jpeg';
import staircases from '../../assets/Staircases.jpg';
import heartwhite from '../../assets/heartwhite.jpeg';
import heartblack from '../../assets/heartblack.jpg';
import birds from '../../assets/Birds.jpg';
import brooklyn from '../../assets/Brooklyn.jpg';
import coney from '../../assets/Coney.jpg';
import brooklyn2 from '../../assets/Brooklyn2.jpg';
import render4 from '../../assets/Render4.png';
import rug from '../../assets/Rug.jpg';
import mash1 from '../../assets/Mash1.png';
import mash2 from '../../assets/Mash2.png';
import render5 from '../../assets/Render5.png';
import mash3 from '../../assets/Mash3.png';
import mash4 from '../../assets/Mash4.png';
import mash5 from '../../assets/Mash5.png';
import mattos from '../../assets/Mattos.png';
import og from '../../assets/No.3.png';
import grain from '../../assets/Grain.jpg';

const LanderSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.backgroundTwo};
width: 100vw;
height: 100vh;
overflow: hidden;
`

const FullCover = styled.img`
background-color: ${props => props.theme.backgroundTwo};
width: 60vw;

`
/* Art resting on row one */
export const Orbital = styled.img`
grid-row-start: 1;
grid-column-start: 2;
justify-self: flex-start;
height: 85vh;
width: auto;

@media (max-width: 1770px){
   max-width: 600px;
   height: auto;
}

@media (max-width: 1290px){
   max-width: 500px;
   height: auto;
}
@media (max-width: 1115px){
   max-width: 400px;
   height: auto;
}

@media (max-width: 830px){
    max-width: 100vw;
    grid-column-start: 1;
    width: 100vw;
    height: auto;
    align-self: flex-end;
}
`
/* Art resting on row one */
const Rug = styled.img`
grid-row-start: 1;
grid-column-start: 2;
justify-self: flex-start;
height: auto;
width: 40vw;
align-self: flex-end;

@media (max-width: 830px){
    max-width: 100vw;
    grid-column-start: 1;
    width: 100vw;
    height: auto;
}
`


export const TwinTwo = styled.img`
grid-row-start: 1;
grid-column-start: 3;
justify-self: flex-start;
height: 85vh;
width: auto;

@media (max-width: 1770px){
   max-width: 600px;
   height: auto;
}
@media (max-width: 1290px){
   max-width: 500px;
   height: auto;
}
@media (max-width: 1115px){
   max-width: 400px;
   height: auto;
}
@media(max-width: 830px) {
    max-width: 100vw;
    grid-column-start: 1;
    grid-row-start: 3;
}
 `

export const TwinsText = styled.div`
grid-row-start: 2;
grid-column-start: 2;
justify-self: flex-start;
color: ${(props) => props.theme.fontColor};
padding: 0;
margin: 0;
line-height: 0.6;
font-family: 'Space Grotesk', sans-serif;
@media (max-width: 830px) {
    grid-column-start: 1;
    grid-row-start: 4;
}
`
/* Art resting on row two */
export const GridRowTwo = styled.img`
grid-row-start: 3;
grid-column-start: 2;
justify-self: flex-start;
height: 85vh;
width: auto;

@media (max-width: 1770px){
   max-width: 600px;
   height: auto;
}
@media (max-width: 1290px){
   max-width: 500px;
   height: auto;
}
@media (max-width: 1115px){
   max-width: 400px;
   height: auto;
}

@media (max-width: 830px){
    max-width: 100vw;
    grid-column-start: 1;
    width: 100vw;
    height: auto;
    align-self: flex-end;
}
`
/* Art resting on row three */
export const GridRowThree = styled.img`
grid-row-start: 5;
grid-column-start: 2;
justify-self: flex-start;
height: 85vh;
width: auto;

@media (max-width: 1770px){
   max-width: 600px;
   height: auto;
}
@media (max-width: 1290px){
   max-width: 500px;
   height: auto;
}

@media (max-width: 1115px){
   max-width: 400px;
   height: auto;
}

@media (max-width: 830px){
    max-width: 100vw;
    grid-column-start: 1;
    width: 100vw;
    height: auto;
}
`

export const FullBg = styled.img`
width: 100vw;
height: auto;
margin-top: -1vh;
background-size: contain;
background-color: ${props => props.theme.backgroundTwo};

@media(max-width: 830px) {
    padding-top: 3vh;
}
`

export const ParagraphFour = styled.div`
position: relative;
padding-right: 2vw;
font-family: 'Space Grotesk', sans-serif;
font-weight: 500;
font-size: 2.5rem;
width: 40vw;
color: #a0a0a0;

@media (max-width: 1770px){
    font-size: 1.8rem;
   }

@media (max-width: 1000px){
    width: 96vw;
    font-size: 1.6rem;
    padding-top: 2vh;
}
`
/* Section with three standard pieces column wise */
export const ArtSectionthree = styled.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: ${(props) => props.Grids};
padding-top: 5vh;
background-color:${props => props.theme.backgroundTwo};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    height: auto;
    row-gap: 2ch;
    padding: 0;
}
`

/* Custom Grid for Ephemeral Twins - moving single row to 2 rows of content */
export const ArtSectiontwins = styled.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: auto auto auto;
padding-top: 5vh;
padding-bottom: 5vh;
background-color: ${props => props.theme.backgroundTwo};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    grid-template-rows: auto auto auto auto;
    height: auto;
    row-gap: 2ch;
    padding: 0;
}
`

/* Section with three grids - 3 rows of content */
export const ArtSectionthreeog = styled.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: auto auto auto auto auto auto;
row-gap: 3ch;
padding-top: 5vh;
padding-bottom: 5vh;
background-color: ${props => props.theme.backgroundTwo};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    grid-template-rows: auto auto auto auto auto auto;
    height: auto;
    row-gap: 2ch;
    padding: 0;
}
`

/* Section with three grids - 2 rows of content */
export const ArtSectionThreetwo = styled.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: auto auto auto auto;
row-gap: 3ch;
padding-top: 5vh;
padding-bottom: 5vh;
background-color: ${props => props.theme.backgroundTwo};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    grid-template-rows: auto auto auto auto;
    height: auto;
    row-gap: 2ch;
}
`

/* Section with three grids - 1 rows of content */
export const ArtSectionThreeone = styled.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: auto auto;
row-gap: 3ch;
padding-top: 5vh;
padding-bottom: 5vh;
background-color:${props => props.theme.backgroundTwo};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    grid-template-rows: auto auto;
    height: auto;
    row-gap: 2ch;
}
`




/* Text sitting on row one*/
export const ArtText = styled.div`
display: grid;
grid-template-rows: auto 5vh auto;
grid-column-start: 3;
grid-row-start: 1;
align-self: flex-end;
padding: 0;
margin: 0;
padding-left: 7.5vw;
line-height: 0;
color: ${(props) => props.theme.fontColor};
font-family: 'Space Grotesk', sans-serif;
@media(max-width: 830px){
    grid-column-start: 1;
    grid-row-start: 2;
    padding-left: 8vw;
   }
`
/* Text sitting on row two*/
export const ArtTexttwo = styled.div`
display: grid;
grid-column-start: 3;
grid-row-start: 3;
align-self: flex-end;
padding: 0;
margin: 0;
padding-left: 7.5vw;
line-height: 0;
color: ${(props) => props.theme.fontColor};
font-family: 'Space Grotesk', sans-serif;

@media(max-width: 830px){
    grid-column-start: 1;
    grid-row-start: 4;
    padding-left: 8vw;
    padding-top: .8vh;
}
`
/* Text sitting on row three*/
export const ArtTextthree = styled.div`
display: grid;
grid-column-start: 3;
grid-row-start: 5;
align-self: flex-end;
padding: 0;
margin: 0;
padding-left: 7.5vw;
line-height: 0;
color: ${(props) => props.theme.fontColor};
font-family: 'Space Grotesk', sans-serif;

@media(max-width: 830px){
    grid-column-start: 1;
    grid-row-start: 6;
    padding-left: 8vw;
    padding-top: .8vh;
}
`

export const ArtHeader = styled.h1`
font-weight: 700;
font-size: 2.5rem;

@media(max-width: 1750px) {
    font-size: 1.8rem;
    
}

@media(max-width: 830px) {
    font-size: 1.4rem;
    line-height: 1;
    height: auto;
}
`

export const ArtYear = styled.h3`
font-weight: 500;
font-size: 2rem;

@media(max-width: 1750px) {
    font-size: 1.5rem;
    height: auto;
}

@media(max-width: 830px) {
    font-size: 1.2rem;
    height: auto;
}
`

export const ArtDesc = styled.h2`
font-weight: 400;
font-size: 1.4rem;
line-height: 1;
width: auto;

@media(max-width: 1750px) {
    font-size: 1rem;
} 

@media(max-width: 830px) {
    font-size: 0.9rem;
    height: auto;
}
`


export default function Composition() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (<div>

{/*COMPOSITION NOTEBOOK Part 2 Landing */}
  <LanderSection>
            <FullCover src={fullcover} />
        </LanderSection>

{/*RENDER 1 FULL SCREEN */}
<RisoFlex style={{backgroundColor:"black"}}>
            <TextSection>Composition is a series composed of pieces inspired by the traditional marbling techniques from Turkey. The work chronicles my journey  and experiences of living in NYC, and moving to Portland, Oregon.
                Utilizing a theme of composition notebooks serves as a journal for reflecting on different environments over the span of 3 years. Each individual piece evokes a feeling through
                the use of color, and shapes.
 </TextSection>

            </RisoFlex>
        
                <FullBg src={renderone} />


{/*Art Book + Text */}
<NewSection Backgroundcolor='white' Backgroundheight="85vh">
  <HouseOne 
    src={artbook} 
    style={{ 
      marginLeft: '-2vw',  // smaller left shift
      width: '50vw'         // slightly narrower but not too small
    }} 
  />
                    <ParagraphFour>
                    Composition was my first solo art exhibition. I released a limited edition of 30 copies of a 46 page art book for 
the show.

                    </ParagraphFour>
                    </NewSection>

                    {/* Orbital + Erasure I */}

                    <ArtSectionThreetwo>
                    <Orbital src={orbital} />
                            <ArtText> 

                            <ArtHeader>ORBITAL</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Acrylic & spray paint on woodpanel.</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={spraywash} />
                            <ArtTexttwo> 

                            <ArtHeader>ERASURE I</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc >Acrylic, spray paint, & spray paint remover on woodpanel.</ArtDesc>

                            </ArtTexttwo>
                        
                    </ArtSectionThreetwo>

{/*RENDER 2 FULL SCREEN */}
                    <FullBg src={rendertwo} />
{/*EPHEMERAL I & II SECTION */}
                    <ArtSectiontwins>
                    <Orbital src={twin1} />
                    <TwinTwo src={twin2} />

                    <TwinsText>
                        <ArtHeader>EPHEMERAL I & II</ArtHeader>
                        <ArtYear>2021</ArtYear>
                        <ArtDesc>Acrylic & spray paint on wood panels.</ArtDesc>

                    </TwinsText>
                    </ArtSectiontwins>

{/*STAIRCASES SINGLE SECTION */}
                    <ArtSectionThreeone>
                    <Orbital src={staircases} />
                    <ArtText> 

                            <ArtHeader>STAIRCASES</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Graphite on heavy paper.</ArtDesc>

                            </ArtText>

                    </ArtSectionThreeone>

                    {/*EPHEMERAL I & II SECTION */}
                    <ArtSectiontwins>
                    <Orbital src={heartwhite} />
                    <TwinTwo src={heartblack} />

                    <TwinsText>
                        <ArtHeader>COMPOSITION X</ArtHeader>
                        <ArtYear>2021</ArtYear>
                        <ArtDesc>Acrylic on wood panel.</ArtDesc>

                    </TwinsText>
                    </ArtSectiontwins>

                    {/*BIRDS FULL SCREEN */}
                    <FullBg src={birds} />


                    {/* 3 photos - Passing Grid-template-row props */}
                    <ArtSectionthreeog>
                    <Orbital src={coney} />
                            <ArtText> 

                            <ArtHeader>CONEY ISLAND, NY</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Film photograph with light leaks.</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={brooklyn} />
                            <ArtTexttwo> 

                            <ArtHeader>BROOKLYN, NY I</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Double exposure film photograph.</ArtDesc>

                            </ArtTexttwo>

                            <GridRowThree src={brooklyn2} />
                            <ArtTextthree> 

                            <ArtHeader>BROOKLYN, NY II</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Double exposure film photograph.</ArtDesc>

                            </ArtTextthree>

                            </ArtSectionthreeog>

                               {/*Render4 FULL SCREEN */}
                    <FullBg src={render4} />

                    {/* 3 Mashes - Passing Grid-template-row props*/}
                    <ArtSectionthreeog>
                    <Rug src={rug} />
                            <ArtText> 

                            <ArtHeader>RUG I</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>100% Wool & Monks cloth.</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={mash1} />
                            <ArtTexttwo> 

                            <ArtHeader>COMPOSITION III</ArtHeader> 
                            <ArtYear>2019</ArtYear> 
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc> 

                            </ArtTexttwo>  

                            <GridRowThree src={mash2} />  
                            <ArtTextthree> 

                            <ArtHeader>COMPOSITION IV</ArtHeader> 
                            <ArtYear>2019</ArtYear>
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc> 

                            </ArtTextthree> 

                            </ArtSectionthreeog>

                                {/*Render5 FULL SCREEN */}
                    <FullBg src={render5} />

                     {/* 3 photos - Passing Grid-template-row props */}
                     <ArtSectionthreeog>
                    <Orbital src={mash3} />
                            <ArtText> 

                            <ArtHeader>COMPOSITION V</ArtHeader>
                            <ArtYear>2019</ArtYear>
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={mash4} />
                            <ArtTexttwo> 

                            <ArtHeader>COMPOSITION VI</ArtHeader>
                            <ArtYear>2019</ArtYear>
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc>

                            </ArtTexttwo>

                            <GridRowThree src={mash5} />
                            <ArtTextthree> 

                            <ArtHeader>COMPOSITION VII</ArtHeader>
                            <ArtYear>2020</ArtYear>
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc>

                            </ArtTextthree>

                            </ArtSectionthreeog>

                                  {/*MATTOS FULL SCREEN */}
                                    <FullBg src={mattos} />

                        {/* 3 Pieces - Passing Grid-template-row props */}
                     <ArtSectionthreeog>
                    <Orbital src={og} />
                            <ArtText> 

                            <ArtHeader>COMPOSITION I</ArtHeader>
                            <ArtYear>2018</ArtYear>
                            <ArtDesc>Digital collage (study for a screenprint).</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={grain} />
                            <ArtTexttwo> 

                            <ArtHeader>GRAIN</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Acrylic & spraypaint on yupo paper.</ArtDesc>

                            </ArtTexttwo>

                        

                            </ArtSectionthreeog>



    </div>
      
    )
}

import React, { useLayoutEffect } from 'react';

// Components
import { FullBg } from '../COMPOSITION/Composition';
import { 
  TextSection, DigitalProduct, GigaGridone, GigaGridtext, GigaHeader, 
  GigaRocket, GigaTwo, GigaWeb, MyRole, ProjectDetails, ProjectHeader, 
  ProjectSubtitle, ProjectType, RisoItemtwo, StyledDiv, TextLineone, 
  TextLinetwo, Timeframe 
} from '../Giga/Giga';
import { RisoFlex } from '../3d/MergedGraffiti';

// Images (updated to assets folder)
import ThreePillarsMac from '../../assets/ThreePillars—Macbook.png';
import ThreePillarsIphone from '../../assets/ThreePillars—iphones.jpg';
import ThreePillarsPages from '../../assets/ThreePillars—pages.jpg';
import recruitingpage from '../../assets/Artboard – 11@2x.png';
import ThreePillarsImac from '../../assets/ThreePillars_Imac_.jpg';
import ThreePillarsMockup from '../../assets/Mockup.jpg';

export default function ThreePillars() {


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <StyledDiv>
            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
           <GigaRocket ColumnStart="2" RowStart="2" src={ThreePillarsMac} />
           
           
           <GigaHeader>ThreePillars</GigaHeader>
          
           <GigaWeb RowsSet={5} href="https://Threepillars.com" target="_blank" rel="noreferrer noopener">
           <GigaTwo>threepillars.com</GigaTwo>
           </GigaWeb>
            </GigaGridone>
            

<ProjectDetails>
            <ProjectType>
            <ProjectHeader>Project Type</ProjectHeader>
            <ProjectSubtitle>UX/UI, Branding, Strategy</ProjectSubtitle>
            </ProjectType>

            <DigitalProduct>
            <ProjectHeader>Digital Product</ProjectHeader>
            <ProjectSubtitle>Web app utilized for recruiting 2,100+ employees in 14 years of business.</ProjectSubtitle>
            </DigitalProduct>

            <MyRole>
            <ProjectHeader>My Role</ProjectHeader>
            <ProjectSubtitle>
            Responsible for reimagining a fresh brand strategy, and creating an easy to navigate website. 
            </ProjectSubtitle>
            </MyRole>

            <Timeframe>
            <ProjectHeader>Timeframe</ProjectHeader>
            <ProjectSubtitle>
            3 months.
            </ProjectSubtitle>
            </Timeframe>

            </ProjectDetails>

            <FullBg src={ThreePillarsIphone} />
            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem' >
            Three Pillars is a recruiting agency that was looking for a refresh on their brand identity, and website. 
                My responsibility involved working with the Varfaj Partners team to provide them with initial designs for their developer to build.
                </TextSection>
            <TextLinetwo />
            </GigaGridtext>
            
            <FullBg src={ThreePillarsPages} />

            <RisoFlex>
                <RisoItemtwo src={recruitingpage} Width='60vw' />
            </RisoFlex>

            <FullBg src={ThreePillarsImac} />
            <FullBg src={ThreePillarsMockup} />

            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem' style={{textAlign:'center'}}>Founders — Three Pillars Team<br />
            Designers — Zachary MacTavish & Varfaj Team<br />
            Development — Varfaj Team</TextSection>
            <TextLinetwo/>
            </GigaGridtext>

           

        </StyledDiv>
    )
}
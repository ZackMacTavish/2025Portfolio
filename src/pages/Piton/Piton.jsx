import React, { useLayoutEffect } from 'react';

// Assets
import pitonlogo from '../../assets/FullLogo-02.png';
import pitoniphones from '../../assets/Piton—iphones copy.jpg';
import pitonscreens from '../../assets/Group 55618@2x.png';
import pitonscreens2 from '../../assets/Group 55619@2x.png';
import allpiton from '../../assets/Piton—Screens.jpg';
import light from '../../assets/LightPhone2.png';
import dark from '../../assets/iPhone_2—Dark.png';
import pitonlogos from '../../assets/Group 55620@2x.png';

// Components
import { 
  TextSection, BackgroundColor, Cellphones, GigaGridtext, GigaRocket, StyledDiv, 
  TextLineone, TextLinetwo, ProjectDetails, ProjectType, ProjectHeader, 
  ProjectSubtitle, DigitalProduct, MyRole, Timeframe 
} from '../Giga/Giga';

import { RisoFlex, RisoItem } from '../3d/MergedGraffiti';
import { FullBg } from '../COMPOSITION/Composition';
import { PitonScreens } from '../UX/UX';

export default function Piton() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledDiv>
            <RisoFlex style={{height: '100vh'}}>
                <RisoItem src={pitonlogo} Width='50vw'  />
            </RisoFlex>

            <ProjectDetails>
                <ProjectType>
                    <ProjectHeader>Project Type</ProjectHeader>
                    <ProjectSubtitle>UX/UI, Branding, Strategy</ProjectSubtitle>
                </ProjectType>

                <DigitalProduct>
                    <ProjectHeader>Digital Product</ProjectHeader>
                    <ProjectSubtitle>An IOS mobile app, and streetwear line</ProjectSubtitle>
                </DigitalProduct>

                <MyRole>
                    <ProjectHeader>My Role</ProjectHeader>
                    <ProjectSubtitle>
                        Responsible for creating the brand logo, colors, and utilizing Apple's HIG for the V1 wireframes for Piton's App launch (TBD).
                    </ProjectSubtitle>
                </MyRole>

                <Timeframe>
                    <ProjectHeader>Timeframe</ProjectHeader>
                    <ProjectSubtitle>1 year.</ProjectSubtitle>
                </Timeframe>
            </ProjectDetails>

            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
                <TextLineone RowsSet="1" />
                <TextSection Fontsize='3.5rem'>
                    Piton is a startup focused on athleisure clothing with an accompanying workout app. 
                    The brand is focused on social change, and environmentalism. 
                    The leading innovation of the app is on the bleeding edge of voice enabled AI.
                </TextSection>
                <TextLinetwo />
            </GigaGridtext>

            <FullBg src={pitoniphones} />

            <PitonScreens ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='2vh 15vh 2vh'>
                <GigaRocket RowStart='2' ColumnStart="2" ColumnEnd="4" src={pitonscreens} />
                <BackgroundColor style={{backgroundColor:'#1794BA'}} />
            </PitonScreens>

            <PitonScreens style={{paddingBottom: '3vh'}} ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='2vh 15vh 2vh'>
                <GigaRocket RowStart='2' ColumnStart="2" ColumnEnd="4" src={pitonscreens2} />
                <BackgroundColor style={{backgroundColor:'#1794BA'}} />
            </PitonScreens>

            <FullBg src={allpiton} />

            <Cellphones>
                <RisoItem Width='50vw' src={dark} />
                <RisoItem Width='50vw' src={light} />
            </Cellphones>

            <FullBg src={pitonlogos} />

            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
                <TextLineone RowsSet="1" />
                <TextSection Fontsize='3.5rem' style={{textAlign:'center'}}>
                    Founders — Jemir Martinez<br />
                    Designers — Zachary MacTavish<br />
                    Development — TBD
                </TextSection>
                <TextLinetwo />
            </GigaGridtext>
        </StyledDiv>
    );
}
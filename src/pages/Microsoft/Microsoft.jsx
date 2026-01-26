import React, { useLayoutEffect, useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Seo from '../../components/SEO/Seo';
import { site, projects } from '../../data/metadata';
import { FullBg, RisoFlex, RisoItem, SingleGrid, FullHeightTextSection, TextContainer, TextContent } from '../Access_Direct/AD';
import { ProjectDetailsContainer, ProjectDetails, ProjectBlock, ProjectHeader, ProjectSubtitle, ProjectImage, Cellphones, StyledDiv, RisoItemtwo } from '../Giga/Giga';
import ProjectTopSection from '../../components/ProjectTopSection';
import { FiArrowUpRight } from 'react-icons/fi';

const PASSWORD = 'yourpassword'; // Change this to your desired password

// Spotlight background animations (copied from LandingPage)
const spotlightLeftMove = keyframes`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`;
const spotlightRightMove = keyframes`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`;

const SpotlightBackground = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  &::before, &::after {
    content: '';
    position: absolute;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    filter: blur(200px);
    background: rgba(255, 255, 255, 0.3);
    z-index: 0;
  }
  &::before {
    top: 20%;
    left: 10%;
    animation: ${spotlightLeftMove} 35s ease-in-out infinite;
  }
  &::after {
    top: 40%;
    left: 65%;
    animation: ${spotlightRightMove} 40s ease-in-out infinite;
  }
`;

const PasswordContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: rgba(255,255,255,0.7); /* More translucent */
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
`;

const placeholderImg = ""; // Placeholder image removed

const Microsoft = () => {
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(() => {
    return sessionStorage.getItem('microsoftAuth') === 'true';
  });
  const [error, setError] = useState('');

  // Refs for all videos
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  // Pause other videos when one plays
  useEffect(() => {
    const handlePlay = (idx) => () => {
      videoRefs.forEach((ref, i) => {
        if (i !== idx && ref.current) {
          ref.current.pause();
        }
      });
    };
    videoRefs.forEach((ref, idx) => {
      if (ref.current) {
        ref.current.onplay = handlePlay(idx);
      }
    });
    // Cleanup
    return () => {
      videoRefs.forEach((ref) => {
        if (ref.current) ref.current.onplay = null;
      });
    };
  }, [authenticated]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setAuthenticated(true);
      setError('');
      sessionStorage.setItem('microsoftAuth', 'true');
    } else {
      setError('Incorrect password.');
    }
  };

  if (!authenticated) {
    return (
      <PasswordContainer>
        <Seo {...projects.microsoft} sameAs={site.sameAs} keywords={projects.microsoft.keywords} />
        <SpotlightBackground />
        <PasswordForm onSubmit={handleSubmit}>
          <h2 style={{ margin: 0 }}>Enter Password</h2>
          <input
            type="password"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Password"
            style={{ padding: '0.5rem 1rem', fontSize: '1.1rem', borderRadius: '6px', border: '1px solid #ccc', minWidth: '220px' }}
            autoFocus
          />
          <button type="submit" style={{ padding: '0.5rem 1.5rem', fontSize: '1.1rem', borderRadius: '6px', background: '#0078d4', color: '#fff', border: 'none', cursor: 'pointer' }}>Submit</button>
          {error && <div style={{ color: 'red', marginTop: '0.5rem' }}>{error}</div>}
        </PasswordForm>
      </PasswordContainer>
    );
  }

  return (
    <StyledDiv>
      <Seo {...projects.microsoft} sameAs={site.sameAs} keywords={projects.microsoft.keywords} />
      <ProjectTopSection
        title="Microsoft"
        imageSrc={"/assets/MSFTlogo.png"}
        imageAlt="Microsoft Logo"
        imageWidth="44vw"
        buttons={[
          { href: "https://www.microsoft.com/en-us/shopping/?form=MT00PA&cs=2199494592", label: "Visit Shopping" }
        ]}
        divider={true}
      />
      <ProjectDetailsContainer>
        <ProjectDetails>
          <ProjectBlock>
            <ProjectHeader>Project Type</ProjectHeader>
            <ProjectSubtitle>Cross-platform product leadership</ProjectSubtitle>
          </ProjectBlock>
          <ProjectBlock>
            <ProjectHeader>Digital Product</ProjectHeader>
            <ProjectSubtitle>Microsoft Shopping ecosystem across Bing, Copilot, Windows, Outlook, and Microsoft Start.</ProjectSubtitle>
          </ProjectBlock>
          <ProjectBlock>
            <ProjectHeader>My Role</ProjectHeader>
            <ProjectSubtitle>Product Designer leading research, concept development, and design execution across multiple teams and surfaces.</ProjectSubtitle>
          </ProjectBlock>
          <ProjectBlock>
            <ProjectHeader>Timeframe</ProjectHeader>
            <ProjectSubtitle>4 years</ProjectSubtitle>
          </ProjectBlock>
        </ProjectDetails>
      </ProjectDetailsContainer>

      <RisoFlex>
        <VideoWithOverlay ref={videoRefs[0]} src="/assets/microsoft-demo2.mp4" poster="/assets/Preview1.png" />
      </RisoFlex>
      
      <FullHeightTextSection style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <TextContainer>
          <TextContent style={{ color: '#222', fontSize: '2.3rem', maxWidth: '50ch', lineHeight: '1.4', margin: '0' }}>
            This work focused on reimagining shopping as an educational experience rather than a transactional one. I designed early concepts for Copilot Shopping and a Generative Results Page (GRP) that helped users understand product categories, compare specs, and evaluate pricing. These experiences aimed to reduce decision fatigue while increasing trust and confidence for high-consideration purchases.
          </TextContent>
        </TextContainer>
      </FullHeightTextSection>
      
      <RisoFlex>
        <RisoItemtwo src={"/assets/Copilot%20style%20GRP.png"} Width='60vw' style={{ borderRadius: '24px', boxShadow: '0 2px 24px rgba(0,0,0,0.10)', border: '4px solid #fff' }} />
      </RisoFlex>
      <RisoFlex>
        <RisoItemtwo src={"/assets/HP.png"} Width='60vw' style={{ borderRadius: '24px', boxShadow: '0 2px 24px rgba(0,0,0,0.10)', border: '4px solid #fff' }} />
      </RisoFlex>
        <RisoFlex>
        <VideoWithOverlay ref={videoRefs[2]} src="/assets/microsoft-demo3.mp4" poster="/assets/Preview3.png" />
      </RisoFlex>
      <FullHeightTextSection style={{ backgroundColor: '#eaf6ff', minHeight: '100vh' }}>
        <TextContainer>
          <TextContent style={{ color: '#1a3a5d', fontSize: '2.3rem', maxWidth: '50ch', lineHeight: '1.4', margin: '0' }}>
            I explored personalization systems that adapt to a user’s shopping history without feeling invasive or ad-driven. Projects like Journeys surfaced best-in-class products, expert tips, and modern curations tailored to intent. Alongside this, I ran user research and experiments to understand when shopping content felt helpful versus promotional.
          </TextContent>
        </TextContainer>
      </FullHeightTextSection>
    
      <div style={{ paddingTop: '64px' }} />

      <RisoFlex>
        <RisoItemtwo src={"/assets/Journeys.png"} Width='60vw' style={{ borderRadius: '24px', boxShadow: '0 2px 24px rgba(0,0,0,0.10)', border: '4px solid #fff' }} />
      </RisoFlex>
      
      <RisoFlex>
        <VideoWithOverlay ref={videoRefs[1]} src="/assets/microsoft-demo.mp4" poster="/assets/Preview2.png" />
      </RisoFlex>
    
      <div style={{ paddingBottom: '64px' }} />
   
      <FullHeightTextSection style={{ backgroundColor: '#f7eaff', minHeight: '100vh' }}>
        <TextContainer>
          <TextContent style={{ color: '#5d2d5d', fontSize: '2.3rem', maxWidth: '50ch', lineHeight: '1.4', margin: '0' }}>
            This work focused on reducing friction at the moment of purchase through Microsoft Wallet and the Cashback Hub. I contributed to experiences that let users securely save payment methods, passwords, and rewards for faster checkout across Microsoft surfaces. More recently, this work has extended into Copilot, exploring how AI can surface cashback, apply rewards, and streamline checkout without disrupting user trust.
          </TextContent>
        </TextContainer>
      </FullHeightTextSection>

       <RisoFlex>
        <RisoItemtwo src={"/assets/Wallet.png"} Width='60vw' style={{ borderRadius: '24px', boxShadow: 'none' }} />
      </RisoFlex>
      <RisoFlex>
        <RisoItemtwo src={"/assets/Cashback.png"} Width='60vw' style={{ borderRadius: '24px', boxShadow: '0 2px 24px rgba(0,0,0,0.10)', border: '4px solid #fff' }} />
      </RisoFlex>
     

   <FullHeightTextSection style={{ backgroundColor: '#fffbe6', minHeight: '100vh' }}>
        <TextContainer>
          <TextContent style={{ color: '#5d5d5d', fontSize: '2.3rem', maxWidth: '50ch', lineHeight: '1.4', margin: '0' }}>
            I worked across Bing Shopping, Microsoft Start, Windows, Outlook, and Copilot to create consistent commerce experiences at scale. This included Outlook shopping concepts for managing promotions, feed-based browsing, and unsubscribe flows. The goal was to unify shopping behavior across Microsoft’s surfaces while respecting context and user intent.
          </TextContent>
        </TextContainer>
      </FullHeightTextSection>

      <RisoFlex>
        <RisoItemtwo src={"/assets/Ruby.png"} Width='60vw' style={{ borderRadius: '24px', boxShadow: '0 2px 24px rgba(0,0,0,0.10)', border: '4px solid #fff' }} />
      </RisoFlex>
      <RisoFlex>
        <RisoItemtwo src={"/assets/ReceiptScan.png"} Width='60vw' style={{ borderRadius: '24px', boxShadow: '0 2px 24px rgba(0,0,0,0.10)', border: '4px solid #fff' }} />
      </RisoFlex>
      <RisoFlex>
        <RisoItemtwo src={"/assets/ShoppingCopilot.png"} Width='60vw' style={{ borderRadius: '8px', boxShadow: 'none', border: 'none' }} />
      </RisoFlex>
      {/* New Outlook image section */}
      <RisoFlex>
        <RisoItemtwo src={"/assets/Outlook.png"} Width='60vw' style={{ borderRadius: '24px', boxShadow: '0 2px 24px rgba(0,0,0,0.10)', border: '4px solid #fff' }} />
      </RisoFlex>
      <FullHeightTextSection style={{ backgroundColor: 'black' }}>
        <TextContainer>
          <TextContent style={{ color: 'white', textAlign: 'center' }}>
            Microsoft AI CEO — Mustafa Suleyman<br />
            Shopping Design Lead — Ashley Hemingway<br />
            Development Lead — Avinash Vemuluru<br />
          </TextContent>
        </TextContainer>
      </FullHeightTextSection>
    </StyledDiv>
  );
};

const PlayOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
`;

const PlayIcon = styled.div`
  width: 90px;
  height: 90px;
  background: rgba(0,0,0,0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 64px;
  pointer-events: none;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 60vw;
  aspect-ratio: 16/9;
  margin: 0 auto 4vh auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 1400px) {
    width: 96vw;
    height: auto;
  }
  @media(max-width: 850px) {
    width: 96vw;
    height: auto;
  }
`;

const VideoWithOverlay = React.forwardRef(({ src, poster }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = ref || useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [videoRef]);

  return (
    <VideoWrapper>
      <video
        ref={videoRef}
        src={src}
        controls
        preload="auto"
        poster={poster}
        style={{ width: '100%', height: '100%', borderRadius: '24px', background: '#000', display: 'block', objectFit: 'cover' }}
      />
      {!isPlaying && (
        <PlayOverlay>
          <PlayIcon>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)" />
              <polygon points="18,14 36,24 18,34" fill="#fff" />
            </svg>
          </PlayIcon>
        </PlayOverlay>
      )}
    </VideoWrapper>
  );
});

export default Microsoft;


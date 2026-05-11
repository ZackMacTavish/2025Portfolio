import React, { useLayoutEffect, useState, useRef, useEffect, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';
import { FullBg, RisoFlex, SingleImage, SingleGrid, FullHeightTextSection, TextContainer, TextContent } from '../Access_Direct/AD';
import copilotGrp from '../../assets/Copilot style GRP.png';
import copilotGrpAvif from '../../assets/Copilot style GRP.avif';
import copilotGrpWebp from '../../assets/Copilot style GRP.webp';
import hp from '../../assets/HP.png';
import hpAvif from '../../assets/HP.avif';
import hpWebp from '../../assets/HP.webp';
import journeys from '../../assets/Journeys.png';
import journeysAvif from '../../assets/Journeys.avif';
import journeysWebp from '../../assets/Journeys.webp';
import wallet from '../../assets/Wallet.png';
import walletAvif from '../../assets/Wallet.avif';
import walletWebp from '../../assets/Wallet.webp';
import cashback from '../../assets/Cashback.png';
import cashbackAvif from '../../assets/Cashback.avif';
import cashbackWebp from '../../assets/Cashback.webp';
import ruby from '../../assets/Ruby.png';
import rubyAvif from '../../assets/Ruby.avif';
import rubyWebp from '../../assets/Ruby.webp';
import receiptScan from '../../assets/ReceiptScan.png';
import receiptScanAvif from '../../assets/ReceiptScan.avif';
import receiptScanWebp from '../../assets/ReceiptScan.webp';
import shoppingCopilot from '../../assets/ShoppingCopilot.png';
import shoppingCopilotAvif from '../../assets/ShoppingCopilot.avif';
import shoppingCopilotWebp from '../../assets/ShoppingCopilot.webp';
import outlook from '../../assets/Outlook.png';
import outlookAvif from '../../assets/Outlook.avif';
import outlookWebp from '../../assets/Outlook.webp';
import { ProjectDetailsContainer, ProjectDetails, ProjectBlock, ProjectHeader, ProjectSubtitle, ProjectImage, Cellphones, StyledDiv } from '../Giga/Giga';
import ProjectTopSection from '../../components/ProjectTopSection';
import { BusinessConnectorsModule } from '../../components/BusinessConnectorsIntro';
import { CopilotPayModule } from '../../components/CopilotPayIntro';
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
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 6rem 1.5rem 2rem;
  background: #ffffff;
  position: relative;
  z-index: 1;
`;

const PasswordIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  text-align: center;
  max-width: 40rem;
  margin-bottom: 1.5rem;
  color: #111;
`;

const PasswordEyebrow = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #5f6b63;
`;

const PasswordTitle = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1;
`;

const PasswordDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #4b5563;
`;

const PasswordGate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: min(100%, 28rem);
  background: rgba(255,255,255,0.9);
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  border: 1px solid rgba(17, 24, 39, 0.08);

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

// Rounded input following site font styles
const PasswordInput = styled.input`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  border: 1px solid #ccc;
  min-width: 240px;
  outline: none;
  color: #111;
  background: #fff;
  &::placeholder { color: #9b9b9b; }
`;

// Black rounded submit button, consistent with site styles
const PasswordButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.32em;
  background: #111;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.05rem;
  border: none;
  border-radius: 999px;
  padding: 0.56rem 1.4rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s ease;
  &:hover { background: #333; }
`;

const Microsoft = () => {
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(() => {
    return sessionStorage.getItem('microsoftAuth') === 'true';
  });
  const [error, setError] = useState('');

  // Refs for all videos
  const videoRefs = useMemo(() => [React.createRef(), React.createRef(), React.createRef()], []);

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
  }, [authenticated, videoRefs]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const previousBackgroundColor = document.body.style.backgroundColor;
    const previousColor = document.body.style.color;

    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#111111';

    return () => {
      document.body.style.backgroundColor = previousBackgroundColor;
      document.body.style.color = previousColor;
    };
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
        <PasswordGate>
          <PasswordIntro>
            <PasswordEyebrow>Microsoft Case Studies</PasswordEyebrow>
            <PasswordTitle>Protected Microsoft work samples</PasswordTitle>
            <PasswordDescription>
              Enter the password to continue to the Microsoft project page and view the protected case study.
            </PasswordDescription>
          </PasswordIntro>
          <PasswordForm onSubmit={handleSubmit}>
            <h2 style={{ margin: 0 }}>Enter Password</h2>
            <PasswordInput
              type="password"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Password"
              autoFocus
            />
            <PasswordButton type="submit">Continue</PasswordButton>
            {error && <div style={{ color: 'red', marginTop: '0.5rem' }}>{error}</div>}
          </PasswordForm>
        </PasswordGate>
      </PasswordContainer>
    );
  }

  return (
    <StyledDiv>
      <Seo {...projects.microsoft} sameAs={site.sameAs} keywords={projects.microsoft.keywords} />
      <ProjectTopSection
        title="Microsoft"
        imageBaseName="assets/MSFTlogo"
        imageExt="png"
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

      <CopilotPayModule />

      <BusinessConnectorsModule />
      
      <FullHeightTextSection style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <TextContainer>
          <TextContent style={{ color: '#222', fontSize: '2.3rem', maxWidth: '50ch', lineHeight: '1.4', margin: '0' }}>
            This work focused on reimagining shopping as an educational experience rather than a transactional one. I designed early concepts for Copilot Shopping and a Generative Results Page (GRP) that helped users understand product categories, compare specs, and evaluate pricing. These experiences aimed to reduce decision fatigue while increasing trust and confidence for high-consideration purchases.
          </TextContent>
        </TextContainer>
      </FullHeightTextSection>
      
      <RisoFlex>
        <SingleImage src={copilotGrp} avif={copilotGrpAvif} webp={copilotGrpWebp} />
      </RisoFlex>
      <RisoFlex>
        <SingleImage src={hp} avif={hpAvif} webp={hpWebp} />
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
        <SingleImage src={journeys} avif={journeysAvif} webp={journeysWebp} />
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
        <SingleImage src={wallet} avif={walletAvif} webp={walletWebp} />
      </RisoFlex>
      <RisoFlex>
        <SingleImage src={cashback} avif={cashbackAvif} webp={cashbackWebp} />
      </RisoFlex>
     

   <FullHeightTextSection style={{ backgroundColor: '#fffbe6', minHeight: '100vh' }}>
        <TextContainer>
          <TextContent style={{ color: '#5d5d5d', fontSize: '2.3rem', maxWidth: '50ch', lineHeight: '1.4', margin: '0' }}>
            I worked across Bing Shopping, Microsoft Start, Windows, Outlook, and Copilot to create consistent commerce experiences at scale. This included Outlook shopping concepts for managing promotions, feed-based browsing, and unsubscribe flows. The goal was to unify shopping behavior across Microsoft’s surfaces while respecting context and user intent.
          </TextContent>
        </TextContainer>
      </FullHeightTextSection>

      <RisoFlex>
        <SingleImage src={ruby} avif={rubyAvif} webp={rubyWebp} />
      </RisoFlex>
      <RisoFlex>
        <SingleImage src={receiptScan} avif={receiptScanAvif} webp={receiptScanWebp} />
      </RisoFlex>
      <RisoFlex>
        <SingleImage src={shoppingCopilot} avif={shoppingCopilotAvif} webp={shoppingCopilotWebp} />
      </RisoFlex>
      {/* New Outlook image section */}
      <RisoFlex>
        <SingleImage src={outlook} avif={outlookAvif} webp={outlookWebp} />
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
  z-index: 2;
  cursor: pointer;
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
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  width: 60vw;
  max-width: 1000px;
  aspect-ratio: 16/9;
  margin: 0 auto 4vh auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: none;

  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 850px) {
    width: 100vw;
    max-width: 100vw;
    border-radius: 0;
    height: auto;
  }
`;

const VideoWithOverlay = React.forwardRef(({ src, poster }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const internalRef = useRef(null);
  const videoRef = ref || internalRef;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [videoRef]);

  const handleOverlayClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  };

  return (
    <VideoWrapper data-cursor="link">
      <video
        ref={videoRef}
        src={src}
        controls
        playsInline
        preload="none"
        poster={poster}
        data-cursor="link"
        style={{ width: '100%', height: '100%', borderRadius: 'inherit', background: '#000', display: 'block', objectFit: 'cover' }}
      />
      {!isPlaying && (
        <PlayOverlay
          onClick={handleOverlayClick}
          role="button"
          aria-label="Play video"
          data-cursor="link"
        >
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


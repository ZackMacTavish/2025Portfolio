import React, { useLayoutEffect, useState, useRef, useEffect, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';
import { FullBg, RisoFlex, SingleImage, SingleGrid, FullHeightTextSection, TextContainer, TextContent } from '../../components/CaseStudyPrimitives';
import copilotGrp from '../../assets/Copilot style GRP.png';
import copilotGrpAvif from '../../assets/Copilot style GRP.avif';
import copilotGrpWebp from '../../assets/Copilot style GRP.webp';
import hp from '../../assets/HP.png';
import hpAvif from '../../assets/HP.avif';
import hpWebp from '../../assets/HP.webp';
import wallet from '../../assets/Wallet.png';
import walletAvif from '../../assets/Wallet.avif';
import walletWebp from '../../assets/Wallet.webp';
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
import { ProjectDetailsContainer, ProjectDetails, ProjectBlock, ProjectHeader, ProjectSubtitle, ProjectImage, Cellphones, StyledDiv } from '../../components/GigaPrimitives';
import ProjectTopSection from '../../components/ProjectTopSection';
import { BusinessConnectorsModule } from '../../components/BusinessConnectorsIntro';
import { PhiaModule } from '../../components/PhiaIntro';
import { PartnershipsModule } from '../../components/PartnershipsIntro';
import { CopilotPayModule } from '../../components/CopilotPayIntro';
import { JourneysModule } from '../../components/JourneysIntro';
import { CashbackHubModule } from '../../components/CashbackHubIntro';
import { VideoCommerceModule } from '../../components/VideoCommerceIntro';
import { WindowsNotificationsModule } from '../../components/WindowsNotificationsIntro';
import { FiArrowUpRight } from 'react-icons/fi';

const PASSWORD = 'microsoftshopping';

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
  height: 100dvh;
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

  /* Mobile: blur(200px) + rotating fullscreen pseudo-elements are very expensive
     on phones. Reduce blur radius and stop the animation. */
  @media (max-width: 1000px) {
    &::before, &::after {
      filter: blur(80px);
      animation: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before, &::after {
      animation: none;
    }
  }
`;

const PasswordContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 6rem 1.5rem 2rem;
  background: ${(p) => p.theme.surface};
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
  color: ${(p) => p.theme.strongText};
`;

const PasswordEyebrow = styled.p`
  font-family: var(--font-mono);
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(p) => p.theme.mutedText};
`;

const PasswordTitle = styled.h1`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1;
`;

const PasswordDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: ${(p) => p.theme.mutedText};
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
  background: ${(p) => p.theme.surfaceMuted};
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  border: 1px solid ${(p) => p.theme.border};

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

// Rounded input following site font styles
const PasswordInput = styled.input`
  font-family: var(--font-body);
  font-size: 1.1rem;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  border: 1px solid ${(p) => p.theme.border};
  min-width: 240px;
  outline: none;
  color: ${(p) => p.theme.strongText};
  background: ${(p) => p.theme.surface};
  &::placeholder { color: ${(p) => p.theme.mutedText}; }
`;

// Black rounded submit button, consistent with site styles
const PasswordButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.32em;
  background: #111;
  color: #fff;
  font-family: var(--font-body);
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

// Accent text bands with light + dark variants. Each tone is paired to clear
// WCAG AA contrast (>= 7:1 for the large 2.3rem headings used here).
const ACCENT_TONES = {
  blue:   { light: { bg: '#eaf6ff', fg: '#1a3a5d' }, dark: { bg: '#0f1d2e', fg: '#cfe2f5' } },
  purple: { light: { bg: '#f7eaff', fg: '#5d2d5d' }, dark: { bg: '#1f1226', fg: '#e4cdf0' } },
  cream:  { light: { bg: '#fffbe6', fg: '#5d5d5d' }, dark: { bg: '#1f1d12', fg: '#efe7c4' } },
};

const AccentBand = styled(FullHeightTextSection)`
  background-color: ${(p) => ACCENT_TONES[p.$tone][p.theme.name === 'dark' ? 'dark' : 'light'].bg};
  --accent-fg: ${(p) => ACCENT_TONES[p.$tone][p.theme.name === 'dark' ? 'dark' : 'light'].fg};
`;

const AccentText = styled(TextContent)`
  color: var(--accent-fg);
  font-family: var(--font-display);
  /* Scales from ~1.25rem on phones up to ~2rem on large desktops, mirroring
     the clamp pattern used by the foundation typography tokens. */
  font-size: clamp(1.25rem, 1.4vw + 0.85rem, 2rem);
  max-width: 50ch;
  line-height: 1.45;
  margin: 0;
`;

const Microsoft = () => {
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(() => {
    return sessionStorage.getItem('microsoftAuth') === 'true';
  });
  const [error, setError] = useState('');

  // Refs for all videos
  const videoRefs = useMemo(() => [React.createRef(), React.createRef()], []);

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
        <Seo {...projects.microsoft} sameAs={site.sameAs} keywords={projects.microsoft.keywords} siteDefaults={site} />
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
      <Seo {...projects.microsoft} sameAs={site.sameAs} keywords={projects.microsoft.keywords} siteDefaults={site} />
      <ProjectTopSection
        title="Microsoft"
        imageBaseName="assets/MSFTlogo"
        imageExt="png"
        imageAlt="Microsoft Logo"
        imageWidth="24vw"
        imageNaturalWidth={785}
        imageNaturalHeight={786}
        invertOnDark={true}
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

      <PartnershipsModule />

      <BusinessConnectorsModule />

      <PhiaModule />

      <CopilotPayModule />

      <JourneysModule />

      <CashbackHubModule />

      <WindowsNotificationsModule />

      <VideoCommerceModule />
      
      <FullHeightTextSection style={{ backgroundColor: 'var(--surface-muted, #f5f5f5)' }}>
        <TextContainer>
          <AccentText style={{ color: 'var(--text-strong, #222)' }}>
            This work focused on reimagining shopping as an educational experience rather than a transactional one. I designed early concepts for Copilot Shopping and a Generative Results Page (GRP) that helped users understand product categories, compare specs, and evaluate pricing. These experiences aimed to reduce decision fatigue while increasing trust and confidence for high-consideration purchases.
          </AccentText>
        </TextContainer>
      </FullHeightTextSection>
      
      <RisoFlex>
        <SingleImage src={copilotGrp} avif={copilotGrpAvif} webp={copilotGrpWebp} />
      </RisoFlex>
      <RisoFlex>
        <SingleImage src={hp} avif={hpAvif} webp={hpWebp} />
      </RisoFlex>
      <RisoFlex>
        <VideoWithOverlay ref={videoRefs[1]} src="/assets/microsoft-demo.mp4" poster="/assets/Preview2.png" />
      </RisoFlex>
   
      <AccentBand $tone="purple">
        <TextContainer>
          <AccentText>
            This work focused on reducing friction at the moment of purchase through Microsoft Wallet and the Cashback Hub. I contributed to experiences that let users securely save payment methods, passwords, and rewards for faster checkout across Microsoft surfaces. More recently, this work has extended into Copilot, exploring how AI can surface cashback, apply rewards, and streamline checkout without disrupting user trust.
          </AccentText>
        </TextContainer>
      </AccentBand>

      <RisoFlex>
        <SingleImage src={wallet} avif={walletAvif} webp={walletWebp} />
      </RisoFlex>
     

   <AccentBand $tone="cream">
        <TextContainer>
          <AccentText>
            I worked across Bing Shopping, Microsoft Start, Windows, Outlook, and Copilot to create consistent commerce experiences at scale. This included Outlook shopping concepts for managing promotions, feed-based browsing, and unsubscribe flows. The goal was to unify shopping behavior across Microsoft’s surfaces while respecting context and user intent.
          </AccentText>
        </TextContainer>
      </AccentBand>

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

const VideoGutter = styled.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto 4vh auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
`;

const VideoWrapper = styled.div`
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: none;

  @media (max-width: 850px) {
    border-radius: 12px;
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
    video.muted = false;
    video.volume = 1;
    video.play().catch(() => {});
  };

  return (
    <VideoGutter>
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
    </VideoGutter>
  );
});

export default Microsoft;


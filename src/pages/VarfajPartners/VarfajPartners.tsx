import { useLayoutEffect } from "react";
import { Seo } from "@zackmactavish/foundation";
import styled from "styled-components";
import ProjectTopSection from "../../components/ProjectTopSection";
import { StyledDiv } from "../../components/GigaPrimitives";
import {
  FullHeightTextSection,
  TextContainer,
  TextContent,
} from "../../components/CaseStudyPrimitives";
import VarfajCaseStudyIntro from "../../components/VarfajCaseStudyIntro";
import HubNarrativeSections from "../../components/HubNarrativeSections";
import PortfolioCardsSection from "../../components/PortfolioCardsSection";
import { projects, site } from "../../data/metadata";

const RosterBand = styled(FullHeightTextSection)`
  background: ${(props) => props.theme.sectionAccent};
  --section-text-strong: ${(props) => props.theme.sectionAccentText};
`;

const RosterContent = styled(TextContent)`
  max-width: 54ch;
  margin: 0;
  color: var(--section-text-strong, ${(props) => props.theme.strongText});
  font-family: var(--font-display);
  font-size: var(--type-standalone-size);
  line-height: var(--type-standalone-leading);
`;

export default function VarfajPartners() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledDiv>
      <Seo
        {...projects.varfaj}
        sameAs={site.sameAs}
        keywords={projects.varfaj.keywords}
        siteDefaults={site}
      />
      <ProjectTopSection
        title="Varfaj Partners"
        imageSrc="/assets/varfaj-hub/varfaj-logo-native.png"
        imageAlt="Varfaj Partners mark"
        imageNaturalWidth={156}
        imageNaturalHeight={144}
        imageWidth="clamp(10rem, 14vw, 15rem)"
        logoTile={true}
        logoContentWidth="72px"
        invertOnDark={true}
        metadata={[
          { label: "Client", value: "Varfaj Partners" },
          { label: "Role", value: "Freelance designer" },
          { label: "Timeline", value: "2 years" },
          { label: "Focus", value: "UX/UI / Brand / Art direction" },
        ]}
        buttons={[
          { href: "https://avenuez.com/varfaj/", label: "Visit Varfaj Partners" },
        ]}
        divider
      />
      <HubNarrativeSections
        grouped
        groupedTone="muted"
        sections={[
          {
            heading: "Background",
            body: "I freelanced with Varfaj Partners, now part of Avenue Z and Shopify-focused, for two years across a steady stream of UX/UI, brand identity, and art direction projects. Varfaj was young and still building its internal process, often working with pro-bono and early-stage clients. Many engagements began without an established brand or product foundation, making the work as much about building systems from scratch as refining them.",
            tone: "muted",
          },
          {
            heading: "My Role",
            body: "My role stayed design-focused while each engagement changed shape around what the client had, or did not have, coming in. I moved between UX/UI, identity systems, and art direction, with more room to take creative risks inside Varfaj's scrappy, experimental process than a more established agency might have allowed.",
            tone: "base",
          },
        ]}
      />

      <RosterBand>
        <TextContainer>
          <RosterContent>
            Beyond the four featured projects, I contributed to work for Ann Marie Chereso, Better Venture Tomorrow, CCA, Driscoll Group, Forage, Fuul Web, Jefferson Consulting, Proxy Strike, Quick$avers, Shadows, Texas R&amp;D Blockchain, and The Exchange App.
          </RosterContent>
        </TextContainer>
      </RosterBand>

      <VarfajCaseStudyIntro
        title="VaynerSports"
        subtitle="A rebrand pitch exploring a sharper identity and digital direction for VaynerSports, balancing the confidence of a modern athlete agency with an editorial approach to talent, projects, and culture."
        src="/assets/varfaj-hub/vaynersports-intro.jpg"
        avif="/assets/varfaj-hub/vaynersports-intro.avif"
        webp="/assets/varfaj-hub/vaynersports-intro.webp"
        alt="VaynerSports rebrand pitch with proposed logo and athlete imagery"
        tone="muted"
        to="/VaynerSports"
        slug="vaynersports"
        preloadRoute={() => import("../VaynerSports/VaynerSports")}
      />
      <VarfajCaseStudyIntro
        title="Leysi"
        subtitle="Brand identity and iOS app design for a food-budgeting startup built by NYU students. I developed the visual system and product experience together, giving an early-stage idea a coherent identity from launch through the app interface."
        src="/assets/LeysiApp%E2%80%94Screens%20copy.jpg"
        avif="/assets/LeysiApp%E2%80%94Screens%20copy.avif"
        webp="/assets/LeysiApp%E2%80%94Screens%20copy.webp"
        alt="Leysi iOS app screens"
        tone="accent"
        to="/Ux"
        slug="leysi"
        preloadRoute={() => import("../UX/UX")}
      />
      <VarfajCaseStudyIntro
        title="Three Pillars"
        subtitle="Brand strategy, visual identity, and a fully redesigned recruiting website serving two distinct audiences: employers looking for talent and job seekers looking for their next role."
        src="/assets/ThreePillars%E2%80%94pages.jpg"
        avif="/assets/ThreePillars%E2%80%94pages.avif"
        webp="/assets/ThreePillars%E2%80%94pages.webp"
        alt="Three Pillars recruiting website page designs"
        tone="base"
        to="/ThreePillars"
        slug="three-pillars"
        preloadRoute={() => import("../ThreePillars/ThreePillars")}
      />
      <VarfajCaseStudyIntro
        title="Loud Luxury"
        subtitle="Web design and motion direction for Loud Luxury, translating the electronic duo's live energy into a high-contrast digital experience built around touring, releases, and nightlife imagery."
        src="/assets/varfaj-hub/loud-luxury-intro.jpg"
        avif="/assets/varfaj-hub/loud-luxury-intro.avif"
        webp="/assets/varfaj-hub/loud-luxury-intro.webp"
        alt="Loud Luxury website design with Las Vegas tour dates"
        tone="muted"
        to="/LoudLuxury"
        slug="loud-luxury"
        preloadRoute={() => import("../LoudLuxury/LoudLuxury")}
      />
      <PortfolioCardsSection />
    </StyledDiv>
  );
}

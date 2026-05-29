import { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Seo } from "@zackmactavish/foundation";
import CaseStudyPage from "../../components/CaseStudyPage";
import PortfolioCardsSection from "../../components/PortfolioCardsSection";
import Socials from "../../components/Social Bar/Socials";
import Grid60 from "../../components/Layout/Grid60";
import { caseStudies } from "../../data/caseStudies";
import { site, projects } from "../../data/metadata";

const ViewingContainer = styled(motion.div)`
  position: relative;
`;

export default function IronlakInternship() {
  const caseStudy = caseStudies.find(
    (item) => item.slug === "ironlak-internship"
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!caseStudy) return null;

  return (
    <ViewingContainer
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Seo
        {...projects["ironlak-internship"]}
        sameAs={site.sameAs}
        keywords={projects["ironlak-internship"].keywords}
        siteDefaults={site}
      />
      <CaseStudyPage caseStudy={caseStudy} />
      <div
        style={{
          borderTop: "1px solid var(--border, #d1d5db)",
          width: "100vw",
          position: "relative",
          left: 0,
          right: 0,
        }}
      />
      <PortfolioCardsSection />
      <Grid60
        style={{
          paddingTop: "1.5rem",
          paddingBottom: "4rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Socials />
        <a
          href="https://zackmactavish.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 600,
            fontSize: "1.1rem",
            color: "#fff",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4em",
            transition: "color 0.18s",
          }}
        >
          Art Portfolio{" "}
          <span
            style={{
              fontSize: "1.3em",
              lineHeight: 1,
              display: "inline-block",
              transform: "translateY(1px)",
            }}
          >
            &rarr;
          </span>
        </a>
      </Grid60>
    </ViewingContainer>
  );
}

import { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Seo } from "@zackmactavish/foundation";
import CaseStudyPage from "../../components/CaseStudyPage";
import PortfolioCardsSection from "../../components/PortfolioCardsSection";
import { caseStudies } from "../../data/caseStudies";
import { site, projects } from "../../data/metadata";

const ViewingContainer = styled(motion.div)`
  position: relative;
`;

export default function BusinessConnectors() {
  const caseStudy = caseStudies[0];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ViewingContainer
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Seo
        {...projects['business-connectors']}
        sameAs={site.sameAs}
        keywords={projects['business-connectors'].keywords}
        siteDefaults={site}
      />
      <CaseStudyPage caseStudy={caseStudy} />
      {/* Divider stroke flush on white page above portfolio cards */}
      <div
        style={{
          borderTop: "1px solid var(--border, #d1d5db)",
          width: "100vw",
          position: "relative",
          left: 0,
          right: 0
        }}
      />
      <PortfolioCardsSection />
      {/* Social tray below portfolio cards, with tight spacing */}
    </ViewingContainer>
  );
}

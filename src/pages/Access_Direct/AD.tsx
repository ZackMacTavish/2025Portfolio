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

export default function AccessDirect() {
  const caseStudy = caseStudies.find((item) => item.slug === "access-direct");

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
        {...projects["access-direct"]}
        sameAs={site.sameAs}
        keywords={projects["access-direct"].keywords}
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
    </ViewingContainer>
  );
}

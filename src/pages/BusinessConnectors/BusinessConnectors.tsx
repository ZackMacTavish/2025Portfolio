import { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import CaseStudyPage from "../../components/CaseStudyPage";
import PortfolioCardsSection from "../../components/PortfolioCardsSection";
import { caseStudies } from "../../data/caseStudies";

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CaseStudyPage caseStudy={caseStudy} />
      <PortfolioCardsSection />
    </ViewingContainer>
  );
}

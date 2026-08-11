import React, { useRef, useState } from 'react';
import { useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { FiChevronDown, FiPlus } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';

const processSteps = [
  {
    eyebrow: 'How I work',
    title: 'My Process',
    body: 'Structured enough to scale, flexible enough to stay curious. Built to turn ambiguity into focused solutions.',
    range: [-0.01, 0, 0.02, 0.141],
  },
  {
    eyebrow: '01/04',
    title: 'Discovery',
    body: "I start by getting into the client's world: competitive context, stakeholder kickoffs, and a FigJam brainstorm to pull everyone's perspective into one place. I also dig into past and existing research on the topic, then map pain points from both the business side and the user's side so we are solving the right problem before design starts.",
    range: [0.168, 0.194, 0.274, 0.318],
  },
  {
    eyebrow: '02/04',
    title: 'Ideation',
    body: "This is where solutions start taking shape: sketches, site maps, user flows, personas. I work through a lot of it solo first, then bring it to the team early for feedback, because the best ideas get sharper in the room. I also like building out the story behind a flow, not just screen A to B to C to D. A narrative helps a user journey land in a way a static screen sequence can't.",
    range: [0.344, 0.371, 0.45, 0.494],
  },
  {
    eyebrow: '03/04',
    title: 'Design & Research',
    body: "From here, ideas become real: low, medium, and high-fidelity mockups, then interactive prototypes to test the design. I validate the work with quantitative and qualitative research, including A/B testing on early screens and interview-style studies on platforms like UserTesting, so decisions are grounded in real behavior, not assumptions. Whether it's a Figma prototype or a working build, the goal is the same: get something real in front of users fast.",
    range: [0.521, 0.547, 0.615, 0.655],
  },
  {
    eyebrow: '04/04',
    title: 'Testing & Handoff',
    body: "I pressure-test the work with usability sessions, edge-case mapping, accessibility checks, and design-peer reviews to make sure every state holds up. Then I hand off with redlines, specs, and token-based guidance in Figma Dev Mode, staying close with engineers through check-ins and kickoff alignment with PMs and stakeholders.",
    range: [0.675, 0.705, 0.775, 0.815],
  },
];

const faqs = [
  {
    question: 'What is your design process?',
    answer: 'Discovery and research, ideation, design, testing, and developer handoff, but it’s never a straight line. I loop back to earlier stages whenever new feedback or research calls for it.',
  },
  {
    question: 'What tools and software do you use for your UX design?',
    answer: 'Figma is home base, alongside FigJam for workshops and brainstorms. I’ve also started building with Figma’s MCP and Claude Code to turn designs into working prototypes faster. AI is changing how quickly ideas can go from concept to something clickable.',
  },
  {
    question: 'Do you have experience with design systems?',
    answer: 'Yes. At Microsoft I work across multiple design systems, including Bing, Copilot, Windows, and Outlook, each with its own patterns, tokens, and constraints. That’s taught me a lot about designing for consistency at scale without losing what makes each product distinct.',
  },
  {
    question: 'Have you worked cross-functionally?',
    answer: 'Constantly. I work closely with engineers on edge cases and technical feasibility, PMs on scope and priorities, and researchers on testing, plus agency partners like Publicis Groupe, Prairie & Forge, and Varfaj Partners on brand and product work. Good design happens in the overlap between teams, not in isolation.',
  },
  {
    question: 'How do you measure the success of your UX design?',
    answer: 'A mix of things: usability testing results, whether the design holds up across all user states and accessibility needs, and feedback from both users and design peers. If the experience feels intuitive and the team can build it without friction, that’s success.',
  },
];

const Experience = styled.section`
  width: 100%;
  background: #fff;
  color: #111;
  font-family: var(--font-body);
`;

const ScrollScene = styled.div`
  height: 650vh;
  background: #fff;
`;

const StickyViewport = styled.div`
  position: sticky;
  top: 0;
  display: grid;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  isolation: isolate;
`;

const ProgressRail = styled.div`
  position: absolute;
  bottom: clamp(1.25rem, 4vw, 3rem);
  left: 50%;
  z-index: 2;
  width: min(calc(100% - 3rem), 61rem);
  height: 1px;
  transform: translateX(-50%);
  background: currentColor;

  @media (max-width: 480px) {
    width: calc(100% - 2.5rem);
  }
`;

const ProgressFill = styled.div`
  width: 100%;
  height: 1px;
  background: currentColor;
  transform-origin: left center;
`;

const chevronDrop = keyframes`
  0%, 100% { transform: translateY(-1px); }
  50% { transform: translateY(3px); }
`;

const ScrollCue = styled.div`
  position: absolute;
  left: 50%;
  bottom: clamp(2.75rem, 6vw, 4.5rem);
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.7rem 0.45rem 0.55rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  background: rgba(15, 15, 15, 0.78);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  line-height: 1;
  transform: translateX(-50%);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  pointer-events: none;

  svg {
    width: 1rem;
    height: 1rem;
    animation: ${chevronDrop} 1.3s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      animation: none;
    }
  }
`;

const Panel = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: clamp(5rem, 11vh, 8rem) 1.5rem;
  box-sizing: border-box;
  pointer-events: none;

  @media (max-width: 480px) {
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }
`;

const PanelContent = styled.div`
  width: min(100%, 56rem);
`;

const Eyebrow = styled.p`
  margin: 0 0 clamp(1.25rem, 3vh, 2rem);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const ProcessTitle = styled.h2`
  margin: 0 0 clamp(1.25rem, 3vh, 2rem);
  max-width: 14ch;
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 8vw, 7.5rem);
  font-weight: 500;
  line-height: 0.96;
  letter-spacing: 0;
`;

const ProcessBody = styled.p`
  margin: 0;
  max-width: 60rem;
  font-size: var(--type-narrative-size);
  font-weight: 400;
  line-height: var(--type-narrative-leading);
`;

const FaqSection = styled.section`
  position: relative;
  z-index: 1;
  background: transparent;
  color: #111;
  margin-top: -150vh;
  padding: clamp(6rem, 14vh, 10rem) 0;
`;

const FaqInner = styled.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

const FaqHeading = styled.h2`
  margin: 0 0 clamp(3rem, 8vh, 5rem);
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 7vw, 6rem);
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;
`;

const FaqList = styled.div`
  border-top: 1px solid #b7b7b7;
`;

const FaqItem = styled.details`
  border-bottom: 1px solid #b7b7b7;

  &[open] svg {
    transform: rotate(45deg);
  }
`;

const FaqQuestion = styled.summary`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 2rem;
  align-items: center;
  gap: 1.5rem;
  padding: clamp(1.5rem, 3vw, 2.25rem) 0;
  font-size: clamp(1.1rem, 2.2vw, 1.5rem);
  font-weight: 500;
  line-height: 1.3;
  cursor: pointer;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 6px;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    justify-self: end;
    transition: transform 240ms ease;
  }
`;

const FaqAnswer = styled.p`
  max-width: 48rem;
  margin: 0;
  padding: 0 3.5rem clamp(1.75rem, 4vw, 2.75rem) 0;
  color: #494949;
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
`;

const interpolate = (progress, range, values) => {
  if (progress <= range[0]) return values[0];
  if (progress >= range[range.length - 1]) return values[values.length - 1];

  const segment = range.findIndex((point) => point >= progress) - 1;
  const localProgress = (progress - range[segment]) / (range[segment + 1] - range[segment]);
  return values[segment] + (values[segment + 1] - values[segment]) * localProgress;
};

const ProcessPanel = ({ step, progress, reduceMotion }) => {
  const opacity = interpolate(progress, step.range, [0, 1, 1, 0]);
  const y = reduceMotion ? 0 : interpolate(progress, step.range, [72, 0, 0, -72]);
  const scale = reduceMotion ? 1 : interpolate(progress, step.range, [0.96, 1, 1, 1.025]);
  const blur = reduceMotion ? 0 : interpolate(progress, step.range, [14, 0, 0, 14]);

  return (
    <Panel style={{ opacity, filter: `blur(${blur}px)`, transform: `translateY(${y}px) scale(${scale})` }}>
      <PanelContent>
        <Eyebrow>{step.eyebrow}</Eyebrow>
        <ProcessTitle>{step.title}</ProcessTitle>
        <ProcessBody>{step.body}</ProcessBody>
      </PanelContent>
    </Panel>
  );
};

const ProcessExperience = () => {
  const sceneRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start start', 'end end'],
  });
  useMotionValueEvent(scrollYProgress, 'change', setProgress);
  const inversion = interpolate(progress, [0, 0.78, 0.88], [0, 0, 1]);
  const railOpacity = interpolate(progress, [0, 0.74, 0.755], [0.2, 0.2, 0]);
  const cueOpacity = interpolate(progress, [0, 0.74, 0.755], [1, 1, 0]);
  const backgroundChannel = Math.round(255 * inversion);
  const foregroundChannel = Math.round(255 - 238 * inversion);

  return (
    <Experience>
      <ScrollScene ref={sceneRef}>
        <StickyViewport
          style={{
            backgroundColor: `rgb(${backgroundChannel}, ${backgroundChannel}, ${backgroundChannel})`,
            color: `rgb(${foregroundChannel}, ${foregroundChannel}, ${foregroundChannel})`,
          }}
        >
          {processSteps.map((step) => (
            <ProcessPanel key={step.title} step={step} progress={progress} reduceMotion={reduceMotion} />
          ))}
          <ProgressRail aria-hidden="true" style={{ opacity: railOpacity }}>
            <ProgressFill style={{ transform: `scaleX(${progress})` }} />
          </ProgressRail>
          <ScrollCue aria-hidden="true" style={{ opacity: cueOpacity }}>
            <FiChevronDown />
            <span>Scroll</span>
          </ScrollCue>
        </StickyViewport>
      </ScrollScene>

      <FaqSection aria-labelledby="faq-heading">
        <FaqInner>
          <FaqHeading id="faq-heading">Frequently asked questions</FaqHeading>
          <FaqList>
            {faqs.map((faq) => (
              <FaqItem key={faq.question}>
                <FaqQuestion data-cursor="link">
                  <span>{faq.question}</span>
                  <FiPlus aria-hidden="true" />
                </FaqQuestion>
                <FaqAnswer>{faq.answer}</FaqAnswer>
              </FaqItem>
            ))}
          </FaqList>
        </FaqInner>
      </FaqSection>
    </Experience>
  );
};

export default ProcessExperience;
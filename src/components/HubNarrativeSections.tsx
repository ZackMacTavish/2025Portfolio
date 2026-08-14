import styled from "styled-components";

type HubNarrativeSection = {
  heading: string;
  body: string;
  tone?: "base" | "muted";
};

type HubNarrativeSectionsProps = {
  sections: HubNarrativeSection[];
  grouped?: boolean;
  groupedTone?: "base" | "muted";
};

const TONES = {
  base: "sectionBase",
  muted: "sectionMuted",
} as const;

const Section = styled.section<{ $tone: keyof typeof TONES }>`
  background: ${(props) => props.theme[TONES[props.$tone]]};
  padding: clamp(4.5rem, 9vh, 7rem) 0;
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

const GroupedContent = styled(Content)`
  display: grid;
  gap: clamp(3.5rem, 7vh, 5.5rem);
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  max-width: 22ch;
  margin: 0 0 1.5rem;
  color: ${(props) => props.theme.strongText};
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.1;
`;

const Body = styled.p`
  max-width: 68ch;
  margin: 0;
  color: ${(props) => props.theme.mutedText};
  font-size: var(--type-narrative-size);
  line-height: var(--type-narrative-leading);
`;

export default function HubNarrativeSections({
  sections,
  grouped = false,
  groupedTone = "muted",
}: HubNarrativeSectionsProps) {
  if (grouped) {
    return (
      <Section $tone={groupedTone}>
        <GroupedContent>
          {sections.map((section) => (
            <TextBlock key={section.heading}>
              <Heading>{section.heading}</Heading>
              <Body>{section.body}</Body>
            </TextBlock>
          ))}
        </GroupedContent>
      </Section>
    );
  }

  return sections.map((section, index) => (
    <Section key={section.heading} $tone={section.tone || (index % 2 === 0 ? "base" : "muted")}>
      <Content>
        <Heading>{section.heading}</Heading>
        <Body>{section.body}</Body>
      </Content>
    </Section>
  ));
}

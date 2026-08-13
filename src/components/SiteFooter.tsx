import { useState, useEffect } from "react";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import Socials from "./Social Bar/Socials";
import Grid60 from "./Layout/Grid60";

const ClockBlock = styled.div`
  display: grid;
  gap: 0.3rem;
  color: ${(p) => p.theme.onOlive};
`;

const ClockLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: ${(p) => p.theme.onOliveMuted};
  letter-spacing: 0.12em;
  line-height: 1.2;
  text-transform: uppercase;
`;

const ClockValue = styled.time`
  font-family: var(--font-mono);
  font-size: clamp(1.25rem, 1.375vw, 1.65rem);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.1;
  white-space: nowrap;
`;

// ─── Clock helpers ────────────────────────────────────────────────────────────

function formatClock(date: Date): string {
  const opts: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  return date.toLocaleTimeString("en-US", opts);
}

// ─── Live clocks ─────────────────────────────────────────────────────────────

function LiveClocks() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <ClockBlock>
      <ClockLabel>Local · Philadelphia</ClockLabel>
      <ClockValue dateTime={now.toISOString()}>{formatClock(now)}</ClockValue>
    </ClockBlock>
  );
}

// ─── Year countdown ───────────────────────────────────────────────────────────

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getYearEnd(year: number): Date {
  return new Date(year + 1, 0, 1, 0, 0, 0, 0);
}

function YearCountdown() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const year = now.getFullYear();
  const msLeft = Math.max(0, getYearEnd(year).getTime() - now.getTime());
  const totalSec = Math.floor(msLeft / 1000);
  const days = Math.floor(totalSec / 86400);
  const hrs  = Math.floor((totalSec % 86400) / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;

  return (
    <ClockBlock>
      <ClockLabel>Time left in {year}</ClockLabel>
      <ClockValue as="div">{days}d {pad(hrs)}h {pad(mins)}m {pad(secs)}s</ClockValue>
    </ClockBlock>
  );
}

// ─── Styled ───────────────────────────────────────────────────────────────────

const FooterWrap = styled.footer`
  background: ${(p: { theme: { backgroundColor: string } }) => p.theme.backgroundColor};
  border-top: 1px solid ${(p) => p.theme.headerBorder};
  width: 100%;
`;

const FooterGrid = styled(Grid60)`
  padding-top: clamp(2.5rem, 4vw, 4rem);
  padding-bottom: clamp(3rem, 5vw, 5rem);
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
  align-items: flex-end;
  text-align: right;

  @media (max-width: 640px) {
    align-items: flex-start;
    text-align: left;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

const ArtPortfolioLink = styled.a`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 0.35em;
  color: ${(p) => p.theme.onOlive};
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-decoration: none;

  svg {
    width: 1em;
    height: 1em;
  }

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }
`;

export default function SiteFooter() {
  return (
    <FooterWrap>
      <FooterGrid>
        <FooterInner>

          {/* ── Left column: name + socials + art portfolio ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.03em",
                color: "var(--on-olive-muted)",
              }}
            >
              Zachary MacTavish. Creative Designer.
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Socials small />
            </div>
            <ArtPortfolioLink
              href="https://zackmactavish.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my art portfolio
              <FiArrowUpRight aria-hidden="true" />
            </ArtPortfolioLink>
          </div>

          {/* ── Right column: live clocks + year countdown ── */}
          <RightCol>
            <LiveClocks />
            <YearCountdown />
          </RightCol>

        </FooterInner>
      </FooterGrid>
    </FooterWrap>
  );
}

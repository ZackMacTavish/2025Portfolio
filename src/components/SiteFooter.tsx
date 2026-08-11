import { useState, useEffect } from "react";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import Socials from "./Social Bar/Socials";
import Grid60 from "./Layout/Grid60";

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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem 1.25rem",
        fontFamily: "var(--font-mono)",
        fontSize: "0.68rem",
        color: "rgba(255, 255, 255, 0.75)",
        letterSpacing: "0.03em",
        lineHeight: 1.4,
      }}
    >
      <span>
        <span style={{ opacity: 0.6, fontSize: "0.62rem", textTransform: "uppercase" }}>
          Local&nbsp;
        </span>
        {formatClock(now)}
      </span>
    </div>
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
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.68rem",
        color: "rgba(255, 255, 255, 0.75)",
        letterSpacing: "0.03em",
        lineHeight: 1.4,
      }}
    >
      <span style={{ opacity: 0.6, fontSize: "0.62rem", textTransform: "uppercase" }}>
        Time Left in {year}&nbsp;
      </span>
      {days}d {pad(hrs)}h {pad(mins)}m {pad(secs)}s
    </div>
  );
}

// ─── Styled ───────────────────────────────────────────────────────────────────

const FooterWrap = styled.footer`
  background: ${(p: { theme: { backgroundColor: string } }) => p.theme.backgroundColor};
  border-top: 1px solid var(--border, #d1d5db);
  width: 100%;
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
  gap: 0.5rem;
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
  color: rgba(255, 255, 255, 0.88);
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
      <Grid60 style={{ paddingTop: "1.5rem", paddingBottom: "4rem" }}>
        <FooterInner>

          {/* ── Left column: name + socials + art portfolio ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.03em",
                color: "rgba(255, 255, 255, 0.75)",
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
      </Grid60>
    </FooterWrap>
  );
}

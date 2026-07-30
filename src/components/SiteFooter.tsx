import { useState, useEffect } from "react";
import styled from "styled-components";
import Socials from "./Social Bar/Socials";
import Grid60 from "./Layout/Grid60";

// ─── Types ────────────────────────────────────────────────────────────────────

type Zone = { label: string; tz: string | null };

// ─── Clock helpers ────────────────────────────────────────────────────────────

const ZONES: Zone[] = [
  { label: "LOCAL", tz: null },
  { label: "EST",   tz: "America/New_York" },
  { label: "CT",    tz: "America/Chicago" },
  { label: "MT",    tz: "America/Denver" },
  { label: "PT",    tz: "America/Los_Angeles" },
];

function formatClock(date: Date, tz: string | null): string {
  const opts: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    ...(tz ? { timeZone: tz } : {}),
  };
  const time = date.toLocaleTimeString("en-US", opts);
  if (!tz) {
    const offsetMin = -date.getTimezoneOffset();
    const sign = offsetMin >= 0 ? "+" : "-";
    const h = Math.floor(Math.abs(offsetMin) / 60);
    return `${time} [GMT${sign}${h}]`;
  }
  return time;
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
        fontFamily: "'Space Mono', 'Courier New', monospace",
        fontSize: "0.68rem",
        color: "rgba(255, 255, 255, 0.75)",
        letterSpacing: "0.03em",
        lineHeight: 1.4,
      }}
    >
      {ZONES.map(({ label, tz }) => (
        <span key={label}>
          <span style={{ opacity: 0.6, fontSize: "0.62rem", textTransform: "uppercase" }}>
            {label}&nbsp;
          </span>
          {formatClock(now, tz)}
        </span>
      ))}
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
        fontFamily: "'Space Mono', 'Courier New', monospace",
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
  align-items: flex-end;
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

const artPortfolioStyle: React.CSSProperties = {
  fontFamily: "Space Grotesk, sans-serif",
  fontWeight: 600,
  fontSize: "0.8rem",
  letterSpacing: "0.04em",
  color: "var(--pill-text, #111827)",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.35em",
  border: "1px solid var(--pill-border, #d1d5db)",
  background: "var(--pill-bg, #ffffff)",
  borderRadius: "999px",
  padding: "0.5rem 0.85rem",
  flexShrink: 0,
};

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
              <a
                href="https://zackmactavish.com"
                target="_blank"
                rel="noopener noreferrer"
                style={artPortfolioStyle}
              >
                Art Portfolio
              </a>
            </div>
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

/**
 * Strips the old inline footer (Grid60 + Socials + Art Portfolio link) from
 * every case-study page. SiteFooter in App.jsx replaces it globally.
 */
const fs = require("fs");
const path = require("path");

const PAGES = [
  "src/pages/Access_Direct/AD.tsx",
  "src/pages/Giga/Giga.tsx",
  "src/pages/Outsource/Outsource.tsx",
  "src/pages/UX/UX.jsx",
  "src/pages/ThreePillars/ThreePillars.tsx",
  "src/pages/Piton/Piton.tsx",
  "src/pages/BusinessConnectors/BusinessConnectors.tsx",
  "src/pages/CopilotPay/CopilotPay.tsx",
  "src/pages/Journeys/Journeys.tsx",
  "src/pages/CashbackHub/CashbackHub.tsx",
  "src/pages/VideoCommerce/VideoCommerce.tsx",
  "src/pages/WindowsNotifications/WindowsNotifications.tsx",
  "src/pages/IronlakInternship/IronlakInternship.tsx",
];

const ROOT = path.resolve(__dirname, "..");

for (const rel of PAGES) {
  const file = path.join(ROOT, rel);
  let src = fs.readFileSync(file, "utf8");

  // 1. Remove Grid60 import line
  src = src.replace(/^import Grid60.*\n/m, "");

  // 2. Remove Socials import line
  src = src.replace(/^import Socials.*\n/m, "");

  // 3. Remove the Grid60 footer block (opening tag through closing tag)
  //    Matches everything from the first <Grid60 to its closing </Grid60>
  src = src.replace(/\n[ \t]*<Grid60[\s\S]*?<\/Grid60>/m, "");

  fs.writeFileSync(file, src, "utf8");
  console.log("✓", rel);
}

console.log("\nDone. SiteFooter in App.jsx now handles all pages.");

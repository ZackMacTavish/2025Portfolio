# No-Orphan Typography Policy

## Goal

Across every page, every breakpoint, and every device, no paragraph, heading, label, button, or caption should ever end with a single orphan word stranded on its own line.

## Is it possible?

Yes, with a layered strategy. There is no single CSS property that guarantees orphan-free text in every browser today (Safari is the lagging point), so we combine three techniques:

1. CSS `text-wrap: pretty` and `text-wrap: balance` (browser-handled, automatic, zero markup).
2. Targeted non-breaking spaces (`\u00A0`) on phrases we never want broken.
3. A small `NoOrphan` React utility for the last two words of any prose block where the browser support is not yet good enough.

The result is orphan-free output across Chrome, Edge, Firefox, and the latest Safari, with a graceful fallback on older Safari.

---

## Layer 1: CSS, the default for all text

Add this to a global stylesheet (for example `src/index.css` or the foundation `GlobalStyles`):

```css
/* Headings get balanced wrapping so the last line is never a stranded word */
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

/* Body copy gets "pretty" wrapping, which prevents orphans
   and avoids ragged short last lines */
p, li, dd, dt, blockquote, figcaption {
  text-wrap: pretty;
}
```

Notes:

- `text-wrap: balance` is best for short text (titles, hero copy, captions). It tries to make every line about the same length, which naturally eliminates orphans.
- `text-wrap: pretty` is designed for paragraphs. The browser uses a higher-quality wrap algorithm and explicitly avoids leaving one short word on the last line.
- Support: Chrome 114 plus, Edge 114 plus, Firefox 121 plus, Safari 17.4 plus for `balance`, Safari 17.5 plus for `pretty`. Older browsers ignore the property and fall back to standard wrapping.

This single change covers about 90 percent of the case studies content without any further work.

## Layer 2: Non-breaking spaces for known multi-word terms

For phrases we never want to split across lines, regardless of browser support, hard-code a non-breaking space between the words in the data file.

Examples already in use:

```ts
platform: "Web / Print / Internal\u00A0Tools / Motion",
```

When to reach for this:

- Multi-word product names: `Microsoft\u00A0Shopping`, `Edge\u00A0Shoreline`, `Outsource\u00A0CEU`.
- Multi-word job titles or section labels: `Internal\u00A0Tools`, `Brand\u00A0Guidelines`.
- Number plus unit pairs: `60\u00A0days`, `2024\u20132026`.
- Date ranges, phone numbers, version numbers.

Keep the non-breaking space inside the source string. Do not rely on `&nbsp;` HTML entities inside template literals because they will not be parsed.

## Layer 3: `NoOrphan` component for prose

For longer paragraphs where `text-wrap: pretty` is not enough (or on Safari versions that have not shipped it yet), join the last two words with a non-breaking space programmatically.

Create `src/components/NoOrphan.tsx`:

```tsx
import { type ReactNode } from "react";

/**
 * Joins the last two words of a text string with a non-breaking space
 * so the final line of a paragraph can never end in a single orphan word.
 *
 * Use for paragraphs, body copy, and any free-form prose where we cannot
 * predict the breakpoint width.
 */
export default function NoOrphan({ children }: { children: ReactNode }) {
  if (typeof children !== "string") return <>{children}</>;
  const words = children.trim().split(/\s+/);
  if (words.length < 2) return <>{children}</>;
  const last = words.pop();
  const second = words.pop();
  return (
    <>
      {words.join(" ")}
      {words.length ? " " : ""}
      {second}
      {"\u00A0"}
      {last}
    </>
  );
}
```

Use it where it matters most: headings, subheadings, hero headlines, and any short paragraph that frequently breaks badly.

```tsx
<SectionHeading>
  <NoOrphan>{section.heading}</NoOrphan>
</SectionHeading>
<Paragraph>
  <NoOrphan>{paragraph}</NoOrphan>
</Paragraph>
```

The component is safe to wrap everything in because it is a no-op for single-word strings, non-string children, and very short labels.

---

## How the three layers interact

| Layer | Coverage | Effort | Browser support |
|---|---|---|---|
| `text-wrap: pretty` and `balance` | All prose, all pages | One stylesheet edit | Chrome, Edge, Firefox, Safari 17.4 plus |
| Non-breaking spaces in data | Specific multi-word terms | Edit the source string | Universal |
| `NoOrphan` component | Last two words of any block | Wrap headings or body | Universal |

When all three are in place, the page is orphan-free everywhere, including responsive resizes.

## Recommended rollout

1. Add the two `text-wrap` rules to the global stylesheet. Test the case studies pages in Chrome and Safari.
2. Audit hero headlines and case study subtitles for known multi-word terms. Replace regular spaces with `\u00A0` in the data file.
3. Add the `NoOrphan` component and wrap `<SectionHeading>` and `<HeroHeadline>` first, then any paragraphs that still misbehave.
4. Spot-check on three viewport widths: 1920, 1024, and 390. Anything that still strands a word becomes the next candidate for a non-breaking space.

## Edge cases worth knowing

- `text-wrap: pretty` slightly increases layout cost. It is fine for prose, but skip it on extremely long text streams (logs, tables of raw data, code blocks).
- Avoid wrapping link text in `NoOrphan`. If the link is the last word, the non-breaking space ends up inside the anchor, which can throw off underline alignment.
- For headlines that need a specific designed line break, use `<br />` or a non-breaking space directly. `text-wrap: balance` will respect explicit line breaks.
- Buttons should already use `white-space: nowrap` for short labels. `NoOrphan` is not needed on a button.

## Conventions for this repo

- Default rule: every new `<SectionHeading>` and every new `<HeroHeadline>` is rendered through `NoOrphan`.
- Default rule: every new product name with two or more words is written with a non-breaking space at the data layer.
- Default rule: every `Paragraph` inherits `text-wrap: pretty` through global styles. Wrap a paragraph in `NoOrphan` only when an orphan persists at any breakpoint.
- When in doubt, prefer the CSS layer first, then the data layer, then the component layer. Each step up is more invasive.

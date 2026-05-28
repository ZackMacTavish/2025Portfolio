import { Children, type ReactNode } from "react";

/**
 * Joins the last two words of a text string with a non-breaking space so the
 * final line of a paragraph or heading can never end in a single orphan word.
 *
 * Safe to wrap around anything — non-string children, single-word strings,
 * and short labels are passed through unchanged.
 *
 * See: src/data/typography-orphan-policy.md
 */
export default function NoOrphan({ children }: { children: ReactNode }) {
  // If multiple children (e.g. fragments, mixed nodes), only transform pure
  // string siblings; leave element children alone.
  const nodes = Children.toArray(children);
  if (nodes.length !== 1 || typeof nodes[0] !== "string") {
    return <>{children}</>;
  }

  const text = nodes[0] as string;
  const words = text.trim().split(/\s+/);
  if (words.length < 2) return <>{text}</>;

  const last = words.pop() as string;
  const second = words.pop() as string;
  const lead = words.join(" ");

  return (
    <>
      {lead}
      {lead ? " " : ""}
      {second}
      {"\u00A0"}
      {last}
    </>
  );
}

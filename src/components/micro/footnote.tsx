"use client";

import * as React from "react";

interface Footnote {
  id: string;
  text: string;
  source?: string;
}

interface FootnotePopoverProps {
  footnotes: Record<string, Footnote>;
  children: React.ReactNode;
}

/**
 * Wrap content with footnote support. Use <sup data-footnote="key">1</sup>
 * inside children to render a hoverable footnote reference.
 */
export function FootnoteProvider({ footnotes, children }: FootnotePopoverProps) {
  const processContent = (content: React.ReactNode): React.ReactNode => {
    if (typeof content !== "string") return content;
    const parts: React.ReactNode[] = [];
    const regex = /\[fn:([a-zA-Z0-9_-]+)\]/g;
    let lastIndex = 0;
    let match;
    let key = 0;
    while ((match = regex.exec(content)) !== null) {
      parts.push(content.slice(lastIndex, match.index));
      const fnKey = match[1];
      const footnote = footnotes[fnKey];
      if (footnote) {
        parts.push(
          <span key={key++} className="footnote-trigger inline-block relative align-super">
            <sup className="cursor-help text-gold text-[0.7em] font-semibold underline decoration-dotted underline-offset-2">
              [{fnKey}]
            </sup>
            <span className="footnote-popover">
              <span className="block font-serif-display text-[0.85rem] font-semibold text-ink mb-1">
                {footnote.text}
              </span>
              {footnote.source && (
                <span className="block text-[0.7rem] italic text-muted-foreground mt-2 pt-2 border-t border-border">
                  {footnote.source}
                </span>
              )}
            </span>
          </span>
        );
      }
      lastIndex = regex.lastIndex;
    }
    parts.push(content.slice(lastIndex));
    return parts;
  };

  const processed = React.Children.map(children, (child) => {
    if (typeof child === "string") {
      return processContent(child);
    }
    return child;
  });

  return <>{processed}</>;
}

export const FOOTNOTES = {
  burgers: {
    id: "burgers",
    text: "Burgers' equation: a fundamental nonlinear PDE appearing in fluid dynamics, gas dynamics, and traffic flow modeling.",
    source: "Burgers, J. M. (1948). Advances in Applied Mechanics, 1, 171–199.",
  },
  hermite: {
    id: "hermite",
    text: "Quintic Hermite splines: piecewise polynomial functions of degree 5 with C² continuity, used as basis functions in collocation methods.",
    source: "Mengist, W. T. et al. (2019). Arabian Journal of Mathematics, Springer Nature.",
  },
  bspline: {
    id: "bspline",
    text: "B-spline basis functions: compactly supported piecewise polynomials offering local control and numerical stability in collocation schemes.",
    source: "de Boor, C. (1978). A Practical Guide to Splines. Springer-Verlag.",
  },
  orcid: {
    id: "orcid",
    text: "ORCID: Open Researcher and Contributor ID — a persistent digital identifier distinguishing researchers with similar names.",
    source: "https://orcid.org/0000-0002-4335-3741",
  },
  udl: {
    id: "udl",
    text: "Universal Design for Learning (UDL): an educational framework emphasizing multiple means of representation, engagement, and expression.",
    source: "CAST (2018). Universal Design for Learning Guidelines version 2.2.",
  },
} as const;

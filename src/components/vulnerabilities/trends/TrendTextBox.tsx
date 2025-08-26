"use client";

import * as React from "react";
import { MoveUpRight, AlertTriangle } from "lucide-react";

/** Noise overlay as data-uri (SVG fractalNoise) */
const NOISE_SVG = `
<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
  <filter id='n'>
    <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch' />
  </filter>
  <rect width='100%' height='100%' filter='url(#n)' opacity='0.6'/>
</svg>`;
const NOISE_BG = `url("data:image/svg+xml;utf8,${encodeURIComponent(NOISE_SVG)}")`;

export type TrendTextBoxProps = {
  /** Left label (CVE ID). It will also be used as a link if href is provided */
  cve: string;
  /** Headline/one-liner on the right, short and punchy */
  summary: string;
  /** Optional longer text shown when expanded */
  details?: string;
  /** “Known exploited” badge */
  knownExploited?: boolean;
  /** Source line: { name, url? } */
  source?: { name: string; url?: string };
  /** Link for the CVE (both left label and the title row can use it) */
  href?: string;
  defaultOpen?: boolean;
  className?: string;
};

export default function TrendTextBox({
  cve,
  summary,
  details,
  knownExploited,
  source,
  href,
  defaultOpen = false,
  className = "",
}: TrendTextBoxProps) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <div className={["mx-auto w-full max-w-[1112px]", className].join(" ")}>
      <div
        className={[
          "relative rounded-[15px] border border-black",
          "bg-[rgba(107,103,80,0.78)]",
          "shadow-[inset_0_4px_25.3px_rgba(0,0,0,0.54)]",
          "drop-shadow-[0_4px_4px_rgba(0,0,0,0.33)]",
          "px-6 sm:px-8",
        ].join(" ")}
      >
        {/* noise overlay */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[15px] opacity-20 mix-blend-overlay"
          style={{ backgroundImage: NOISE_BG, backgroundSize: "200px 200px" }}
        />

        <div className="relative flex items-center gap-6 py-5 min-h-[111px]">
          {/* Left label — smaller font, clickable if href exists */}
          <div className="shrink-0 max-w-[130px]">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="block hover:underline underline-offset-4"
                style={{
                  color: "var(--Alternative-default, #FCBF44)",
                  fontFamily: "MuseoModerno",
                  fontSize: "22px", // smaller than before
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "1.1",
                  wordBreak: "break-word",
                }}
                title={cve}
              >
                {cve}
              </a>
            ) : (
              <div
                style={{
                  color: "var(--Alternative-default, #FCBF44)",
                  fontFamily: "MuseoModerno",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "1.1",
                  wordBreak: "break-word",
                }}
                title={cve}
              >
                {cve}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-[91px] w-[3px] bg-black/55 rounded-sm" />

          {/* Right content */}
          <div className="flex-1 self-stretch">
            {/* Title row (CVE link + Known exploited badge) */}
            <div className="mb-1 flex items-center gap-3 flex-wrap">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold hover:underline underline-offset-4"
                  style={{
                    color: "var(--Text-400, #FEF7CC)",
                    fontFamily: "MuseoModerno",
                    fontSize: "19.2px",
                  }}
                >
                  {cve}
                </a>
              ) : (
                <span
                  className="font-semibold"
                  style={{
                    color: "var(--Text-400, #FEF7CC)",
                    fontFamily: "MuseoModerno",
                    fontSize: "19.2px",
                  }}
                >
                  {cve}
                </span>
              )}

              {knownExploited && (
                <span
                  className="inline-flex items-center gap-1 rounded-md border px-2 py-0.5"
                  style={{
                    borderColor: "#E46A3A",
                    color: "#E46A3A",
                    fontFamily: "MuseoModerno",
                    fontSize: "15px",
                    fontWeight: 700,
                  }}
                  title="Known exploited"
                >
                  <AlertTriangle className="h-4 w-4" />
                  Known exploited
                </span>
              )}
            </div>

            {/* Summary */}
            <p
              className="text-justify"
              style={{
                color: "var(--Text-400, #FEF7CC)",
                fontFamily: "MuseoModerno",
                fontSize: "16.2px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              {summary}
            </p>

            {/* Source */}
            {source?.name && (
              <div
                className="mt-1 opacity-80"
                style={{
                  color: "var(--Text-400, #FEF7CC)",
                  fontFamily: "MuseoModerno",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Source:{" "}
                {source.url ? (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    {source.name}
                  </a>
                ) : (
                  source.name
                )}
              </div>
            )}

            {/* Expanded details */}
            <div
              className={[
                "overflow-hidden transition-all duration-300",
                open ? "max-h-[600px] mt-3" : "max-h-0",
              ].join(" ")}
            >
              {details && (
                <p
                  className="text-justify"
                  style={{
                    color: "var(--Text-400, #FEF7CC)",
                    fontFamily: "MuseoModerno",
                    fontSize: "19.2px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                  }}
                >
                  {details}
                </p>
              )}
            </div>
          </div>

          {/* Right icon button (expand/collapse) */}
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={[
              "grid place-items-center h-12 w-12 shrink-0",
              "rounded-[10px] border border-[#121A21] bg-[#FCBF44]",
              "drop-shadow-[0_4px_4px_rgba(0,0,0,1)]",
              "transition-transform active:scale-95",
              "focus:outline-none focus:ring focus:ring-black/20",
            ].join(" ")}
            title={open ? "Collapse" : "Expand"}
          >
            <MoveUpRight
              className={["h-6 w-6 transition-transform", open ? "rotate-45" : ""].join(" ")}
              style={{ color: "#121A21" }}
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

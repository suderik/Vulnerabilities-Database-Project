"use client";

import { useMemo, useState } from "react";
import TrendTextBox from "./TrendTextBox";
import type { TrendTextBoxProps } from "./TrendTextBox";
import { Bug, RotateCcw } from "lucide-react";

export type TrendItem = {
  cve: string;
  summary: string;
  details?: string;
  knownExploited?: boolean;
  source?: { name: string; url?: string };
  href?: string;
  defaultOpen?: boolean;
};

type Props = {
  /** DB’den gelen kayıtlar; boş ise demo doldurulur */
  items?: TrendItem[];
  /** İlk kaç kayıt görünsün */
  initialCount?: number;
  /** Her “Load More” tıklamasında kaç tane eklensin */
  pageSize?: number;
};

export default function TrendsSection({
  items,
  initialCount = 3,
  pageSize = 3,
}: Props) {
  // --- Demo veriler (items gelmezse)
  const demo: TrendItem[] = useMemo(
    () => [
      {
        cve: "CVE-2025-54948",
        knownExploited: true,
        summary:
          "A vulnerability in Trend Micro Apex One (on-premise) management console could allow a pre-authenticated remote attacker to upload malicious code and execute commands on affected installations.",
        source: { name: "Trend Micro, Inc." },
        href: "#",
      },
      {
        cve: "CVE-2025-8876",
        knownExploited: true,
        summary:
          "Improper Input Validation in N-able N-central allows OS Command Injection. This issue affects N-central before 2025.3.1.",
        source: { name: "N-able" },
        href: "#",
      },
      {
        cve: "CVE-2025-8875",
        knownExploited: true,
        summary:
          "Deserialization of Untrusted Data in N-able N-central allows Local Execution of Code. This issue affects N-central before 2025.3.1.",
        source: { name: "N-able" },
        href: "#",
      },
      {
        cve: "CVE-2025-8123",
        knownExploited: false,
        summary:
          "Authentication bypass in Acme Gateway may allow remote attackers to enumerate valid sessions under certain configurations.",
        source: { name: "Acme Security Advisory" },
        href: "#",
      },
      {
        cve: "CVE-2025-7021",
        knownExploited: true,
        summary:
          "SQL injection in FooCMS plugin leads to information disclosure and potential RCE via chained exploits.",
        source: { name: "FooCMS" },
        href: "#",
      },
      {
        cve: "CVE-2025-6010",
        knownExploited: false,
        summary:
          "Path traversal in BarServer static assets handler could allow reading arbitrary files on the host.",
        source: { name: "BarServer" },
        href: "#",
      },
    ],
    []
  );

  const data = (items && items.length ? items : demo) as TrendTextBoxProps[];

  // --- Görünür sayıyı yönet
  const [visible, setVisible] = useState(Math.min(initialCount, data.length));
  const hasMore = visible < data.length;

  const handleLoadMore = () => setVisible((v) => Math.min(v + pageSize, data.length));
  const handleReset = () => setVisible(Math.min(initialCount, data.length));

  return (
    <div className="mt-10">
      {/* Kutular */} <div className="mx-auto w-full max-w-[1112px] px-2">
      <div className="space-y-5">
        {data.slice(0, visible).map((it) => (
          <TrendTextBox key={it.cve} {...it} />
        ))}
      </div>
      

      {/* Sağ-alta hizalı butonlar */}
      <div className="mt-6 flex justify-end gap-3">
        {/* Reset */}
        <button
          type="button"
          onClick={handleReset}
          disabled={visible <= Math.min(initialCount, data.length)}
          className={[
            "inline-flex items-center gap-2 rounded-[10px] border",
            "px-4 py-[6px] transition-colors",
            "border-[var(--Main-default,#D4EA33)]",
            "text-[var(--Main-default,#D4EA33)]",
            "hover:bg-[var(--Main-default,#D4EA33)] hover:text-[var(--Neutrals-900,#121A21)]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "font-semibold",
          ].join(" ")}
          style={{
            fontFamily: "Poppins",
            fontSize: "16px",
            lineHeight: "normal",
          }}
          aria-label="Reset"
          title="Reset list"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </button>

        {/* Load More */}
        <button
          type="button"
          onClick={handleLoadMore}
          disabled={!hasMore}
          className={[
            "inline-flex items-center gap-2 rounded-[10px]",
            "px-4 py-[6px] transition-transform active:scale-[0.98]",
            "bg-[var(--Main-default,#D4EA33)]",
            "text-[var(--Neutrals-900,#121A21)]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "font-semibold",
          ].join(" ")}
          style={{
            fontFamily: "Poppins",
            fontSize: "16px",
            lineHeight: "normal",
          }}
          aria-label="Load more"
          title="Load more"
        >
          <span>Load More</span>
          <Bug className="h-4 w-4" />
        </button>
      </div>
    </div>
    </div>
  );
}

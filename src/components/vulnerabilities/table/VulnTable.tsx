"use client";
import * as React from "react";
import { useState } from "react";

import { OrderCell } from "./cells/OrderCell";
import { DateCell } from "./cells/DateCell";
import { TextCell } from "./cells/TextCell";
import { PlatformCell } from "./cells/PlatformCell";
import { FixableCell } from "./cells/FixableCell";
import { ActionCell } from "./cells/ActionCell";
import { HeaderCell } from "./cells/HeaderCell";

import { Button } from "@/components/ui/button";
import { MoreIcon } from "@/components/icons/MoreIcon";

// ---------------- types ----------------
export type VulnRow = {
  id: string;
  order: number;
  date: string;     // "YYYY-MM-DD"
  cveId: string;    // "CVE-79"...
  platform: string; // "Windows" | "Linux" | ...
  pkg: string;      // "OpenSSL" | "Chromium" | ...
  version: string;  // "v1.2" | ...
  fixable: boolean;
};

type ActiveFilters = {
  q?: string;
  date?: string;
  pkg?: string;
  platform?: string;
  dyn?: { fieldKey: string; value: string }[];
};

// -------------- columns (aynı) --------------
const COLUMNS = ["Order","Date","CVE ID","Platform","Package","Version","Fixable","See More"] as const;
const COL_WIDTHS: Partial<Record<(typeof COLUMNS)[number], number>> = {
  Order: 80, Date: 120, "CVE ID": 140, Fixable: 110, Platform: 150, "See More": 120,
};

// -------------- demo data (kaldı) --------------
const demo: VulnRow[] = Array.from({ length: 30 }).map((_, i) => ({
  id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `row-${i}`,
  order: i + 1,
  date: `2025-01-${String((i % 30) + 1).padStart(2, "0")}`,
  cveId: ["CVE-79", "CVE-89", "CVE-120", "CVE-200"][i % 4],
  platform: ["Windows", "Linux", "macOS", "Android"][i % 4],
  pkg: ["OpenSSL", "Chromium", "Apache", "Linux"][i % 4],
  version: ["v1.2", "v2.0", "v3.1", "v1.5"][i % 4],
  fixable: i % 2 === 0,
}));

const INITIAL_ROWS = 7;
const STEP = 5;

// -------------- helpers --------------
function parse(d: string) { return new Date(d + "T00:00:00"); }

function applyFilters(rows: VulnRow[], f?: ActiveFilters) {
  if (!f) return rows;
  let out = rows.slice();

  const lc = (s: unknown) => String(s ?? "").toLowerCase();

  // q: çoklu alanda arama
  if (f.q) {
    const q = lc(f.q);
    out = out.filter((r) =>
      [r.cveId, r.platform, r.pkg, r.version, r.date].some((v) => lc(v).includes(q))
    );
  }

  // date: '7d'/'30d' => veri içindeki EN SON tarihe göre aralık,
  // yıl (2025/2024/2023) => yıl eşleşmesi
  if (f.date) {
    if (["7d", "30d"].includes(f.date)) {
      const maxMs = Math.max(...out.map((r) => +parse(r.date)));
      const maxDate = new Date(maxMs);
      const delta = f.date === "7d" ? 7 : 30;
      const start = new Date(maxDate); start.setDate(start.getDate() - delta + 1);
      out = out.filter((r) => parse(r.date) >= start && parse(r.date) <= maxDate);
    } else if (/^\d{4}$/.test(f.date)) {
      out = out.filter((r) => parse(r.date).getFullYear() === Number(f.date));
    }
  }

  // package
  if (f.pkg) {
    const map: Record<string, string> = {
      openssl: "openssl",
      linux: "linux",
      chromium: "chromium",
      httpd: "apache", // dropdown "Apache" httpd -> tablo "Apache"
    };
    const needle = map[f.pkg] ?? f.pkg;
    out = out.filter((r) => lc(r.pkg).includes(needle));
  }

  // platform
  if (f.platform) {
    const map: Record<string, string> = { macos: "mac", windows: "windows", linux: "linux", android: "android", ios: "ios" };
    const needle = map[f.platform] ?? f.platform;
    out = out.filter((r) => lc(r.platform).includes(needle));
  }

  // dinamik alanlar
  (f.dyn ?? []).forEach(({ fieldKey, value }) => {
    if (!value) return;
    const v = lc(value);
    if (fieldKey === "cwe") {
      // Liste cwe-120 vb; tabloda "CVE-120" var → sayı eşleştirelim
      const num = v.replace(/[^0-9]/g, "");
      out = out.filter((r) => lc(r.cveId).includes(num));
    } else if (fieldKey === "version") {
      out = out.filter((r) => lc(r.version).startsWith(v));
    } else if (fieldKey === "fixable") {
      const yes = v === "yes";
      out = out.filter((r) => r.fixable === yes);
    } else if (fieldKey === "status") {
      // Demo satırlarda status yok → şimdilik atla
    }
  });

  return out;
}

// -------------- component --------------
export default function VulnTable({
  rows = demo,
  filters,
}: {
  rows?: VulnRow[];
  filters?: ActiveFilters;
}) {
  const filtered = React.useMemo(() => applyFilters(rows, filters), [rows, filters]);

  const [rowsToShow, setRowsToShow] = useState(INITIAL_ROWS);
  React.useEffect(() => { setRowsToShow(INITIAL_ROWS); }, [filters]); // yeni filtrede başa dön

  const handleLoadMore = () => setRowsToShow((prev) => Math.min(prev + STEP, filtered.length));
  const handleReset = () => setRowsToShow(INITIAL_ROWS);

  const allShown = rowsToShow >= filtered.length;
  const atInitial = rowsToShow === INITIAL_ROWS;

  return (
    <div className="w-full px-4 md:px-6 flex flex-col items-center space-y-4">
      <div className="mx-auto w-full max-w-[1152px] rounded-xl overflow-x-auto">
        <table className="threx-table table-fixed border-separate border-spacing-0 w-full">
          <colgroup>
            {COLUMNS.map((c) => (
              <col key={c} style={COL_WIDTHS[c] ? { width: `${COL_WIDTHS[c]}px` } : undefined} />
            ))}
          </colgroup>

          <thead>
            <tr>
              {COLUMNS.map((h) => (
                <th key={h} className="p-0 text-left align-middle">
                  <HeaderCell label={h} />
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filtered.slice(0, rowsToShow).map((r) => (
              <tr key={r.id}>
                <td className="threx-td threx-td-reset"><OrderCell n={r.order} /></td>
                <td className="threx-td threx-td-reset"><DateCell value={r.date} /></td>
                <td className="threx-td threx-td-reset"><TextCell value={r.cveId} /></td>
                <td className="threx-td threx-td-reset"><PlatformCell name={r.platform} /></td>
                <td className="threx-td threx-td-reset"><TextCell value={r.pkg} /></td>
                <td className="threx-td threx-td-reset"><TextCell value={r.version} /></td>
                <td className="threx-td"><FixableCell value={r.fixable} /></td>
                <td className="threx-td"><ActionCell href={`/vulnerabilities/${r.cveId.toLowerCase()}`}  /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <MoreIcon className="rotate-90 text-gray-500 w-6 h-6" aria-hidden="true" />

      <div className="flex items-center gap-3">
        <Button onClick={handleLoadMore} disabled={allShown} size="lg" className="w-[224px] group">
          Click for More Data
        </Button>
        {!atInitial && (
          <Button onClick={handleReset} size="lg" className="w-[224px]">
            Reset to 7 Rows
          </Button>
        )}
      </div>
    </div>
  );
}

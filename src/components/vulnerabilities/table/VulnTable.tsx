"use client";
import * as React from "react";
import { useState } from "react";

import { OrderCell } from "./cells/OrderCell";
import { DateCell } from "./cells/DateCell";
import { TextCell } from "./cells/TextCell";
import { PlatformCell } from "./cells/PlatformCell";
import { FixableCell } from "./cells/FixableCell";
import { StatusCell } from "./cells/StatusCell";
import { ActionCell } from "./cells/ActionCell";
import { HeaderCell } from "./cells/HeaderCell";

/* UI */
import { Button } from "@/components/ui/button";
import { MoreIcon } from "@/components/icons/MoreIcon";

export type VulnRow = {
  id: string;
  order: number;
  date: string;
  cweId: string;
  platform: string;
  pkg: string;
  version: string;
  fixable: boolean;
  status: "active" | "press" | "pending";
};

const COLUMNS = [
  "Order",
  "Date",
  "CWE ID",
  "Platform",
  "Package",
  "Version",
  "Fixable",
  "Status",
  "See More",
] as const;

const COL_WIDTHS: Partial<Record<(typeof COLUMNS)[number], number>> = {
  Order: 80,
  Date: 120,
  "CWE ID": 120,
  Fixable: 110,
  Status: 120,
  "See More": 120,
};

const demo: VulnRow[] = Array.from({ length: 30 }).map((_, i) => ({
  id:
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `row-${i}`,
  order: i + 1,
  date: `2025-01-${String((i % 30) + 1).padStart(2, "0")}`,
  cweId: ["CWE-79", "CWE-89", "CWE-120", "CWE-200"][i % 4],
  platform: ["Windows", "Linux", "macOS", "Android"][i % 4],
  pkg: ["OpenSSL", "Chromium", "Apache", "Linux"][i % 4],
  version: ["v1.2", "v2.0", "v3.1", "v1.5"][i % 4],
  fixable: i % 2 === 0,
  status: (["active", "press", "pending"] as const)[i % 3],
}));

const INITIAL_ROWS = 7; // 7 satırla başla
const STEP = 5;         // her tıklamada +5

export default function VulnTable({ rows = demo }: { rows?: VulnRow[] }) {
  const [rowsToShow, setRowsToShow] = useState(INITIAL_ROWS);

  const handleLoadMore = () => setRowsToShow((prev) => Math.min(prev + STEP, rows.length));
  const handleReset = () => setRowsToShow(INITIAL_ROWS);

  const allShown = rowsToShow >= rows.length;
  const atInitial = rowsToShow === INITIAL_ROWS;

  return (
    <div className="w-full px-4 md:px-6 flex flex-col items-center space-y-4">
      <div className="mx-auto w-full max-w-[1152px] rounded-xl overflow-x-auto">
        <table className="threx-table table-fixed border-separate border-spacing-0 w-full">
          <colgroup>
            {COLUMNS.map((c) => (
              <col
                key={c}
                style={COL_WIDTHS[c] ? { width: `${COL_WIDTHS[c]}px` } : undefined}
              />
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
            {rows.slice(0, rowsToShow).map((r) => (
              <tr key={r.id}>
                <td className="threx-td threx-td-reset"><OrderCell n={r.order} /></td>
                <td className="threx-td threx-td-reset"><DateCell value={r.date} /></td>
                <td className="threx-td threx-td-reset"><TextCell value={r.cweId} /></td>
                <td className="threx-td threx-td-reset"><PlatformCell name={r.platform} /></td>
                <td className="threx-td threx-td-reset"><TextCell value={r.pkg} /></td>
                <td className="threx-td threx-td-reset"><TextCell value={r.version} /></td>
                <td className="threx-td"><FixableCell value={r.fixable} /></td>
                <td className="threx-td"><StatusCell value={r.status} /></td>
                <td className="threx-td"><ActionCell href="#" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Görsel amaçlı “More” ayırıcı ikonu */}
      <MoreIcon className="rotate-90 text-gray-500 w-6 h-6" aria-hidden="true" />

      {/* Kontrol butonları */}
      <div className="flex items-center gap-3">
        {/* LOAD MORE — Button dosyasındaki stil & hover kullanılacak */}
        <Button
          onClick={handleLoadMore}
          disabled={allShown}
          size="lg"
          className="w-[224px] group"
        >
          Click for More Data
        </Button>


        {/* RESET — başlangıçtan farklıysa göster */}
        {!atInitial && (
          <Button
            onClick={handleReset}
            size="lg"
            className="w-[224px]"
          >
            Reset to 7 Rows
          </Button>
        )}
      </div>
    </div>
  );
}

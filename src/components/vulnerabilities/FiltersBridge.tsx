"use client";

import * as React from "react";
import FiltersBar from "@/components/vulnerabilities/FiltersBar";
import VulnTable from "@/components/vulnerabilities/table/VulnTable";

export type FiltersState = {
  q: string;
  date: string;       // "7d" | "30d" | "2025" | "2024" | "2023" | ""
  pkg: string;        // "openssl" | "linux" | "chromium" | "httpd" | ""
  platform: string;   // "windows" | "linux" | "macos" | "android" | "ios" | ""
  dyn: { fieldKey: string; value: string }[]; // Add Filter ile gelenler
};

export default function FiltersBridge() {
  const [filters, setFilters] = React.useState<FiltersState>({
    q: "", date: "", pkg: "", platform: "", dyn: [],
  });

  return (
    <>
      <FiltersBar onChange={setFilters} />
      <div className="mt-8">
        <VulnTable filters={filters} />
      </div>
    </>
  );
}

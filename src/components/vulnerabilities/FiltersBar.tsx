// src/components/vulnerabilities/FiltersBar.tsx
"use client";

import * as React from "react";
import SearchBox from "./SearchBox";
import DateDropdown, { type Option as DateOption } from "./DateDropdown";
import PackageDropdown from "./PackageDropdown";
import PlatformDropdown from "./PlatformDropdown";
import ListDropdown, { type Option } from "./ListDropdown";

export default function FiltersBar() {
  const [q, setQ] = React.useState("");
  const [date, setDate] = React.useState("");
  const [pkg, setPkg] = React.useState("");
  const [platform, setPlatform] = React.useState("");

  const dateOpts: DateOption[] = [
    { label: "7d", value: "7d" },
    { label: "30d", value: "30d" },
    { label: "2025", value: "2025" },
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
  ];
  const pkgOpts: Option[] = [
    { label: "OpenSSL", value: "openssl" },
    { label: "Linux", value: "linux" },
    { label: "Chromium", value: "chromium" },
    { label: "Apache", value: "httpd" },
  ];
  const platformOpts: Option[] = [
    { label: "Windows", value: "windows" },
    { label: "Linux", value: "linux" },
    { label: "macOS", value: "macos" },
    { label: "Android", value: "android" },
    { label: "iOS", value: "ios" },
  ];

  type DynFilter = {
    id: string;
    fieldKey: string;
    value: string;
    showValue: boolean;
  };

  /** 🔸 Limit doğrudan filtre nesnesi sayısına göre */
  const MAX_DYN = 3;

  const [dyn, setDyn] = React.useState<DynFilter[]>([]);
  const [alert, setAlert] = React.useState<string | null>(null);

  const FILTER_FIELDS: { key: string; label: string; options: Option[] }[] = [
    {
      key: "cwe",
      label: "CWE ID",
      options: [
        { label: "CWE-79", value: "cwe-79" },
        { label: "CWE-89", value: "cwe-89" },
        { label: "CWE-120", value: "cwe-120" },
        { label: "CWE-200", value: "cwe-200" },
      ],
    },
    {
      key: "version",
      label: "Version",
      options: [
        { label: "v1.x", value: "v1" },
        { label: "v2.x", value: "v2" },
        { label: "v3.x", value: "v3" },
      ],
    },
    {
      key: "fixable",
      label: "Fixable",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
      ],
    },
    {
      key: "status",
      label: "Status",
      options: [
        { label: "active", value: "active" },
        { label: "press", value: "press" },
        { label: "pending", value: "pending" },
      ],
    },
  ];

  const fieldOptions: Option[] = FILTER_FIELDS.map((f) => ({
    label: f.label,
    value: f.key,
  }));
  const getValueOptions = (fieldKey: string): Option[] =>
    FILTER_FIELDS.find((f) => f.key === fieldKey)?.options ?? [];

  const firstKey = FILTER_FIELDS[0]?.key ?? "cwe";

  
  const handleAddFilter = () => {
    // 1) Value'u henüz gösterilmemiş bir filtre varsa önce onu tamamlat
    const idxNoValueShown = dyn.findIndex((f) => !f.showValue);
    if (idxNoValueShown !== -1) {
      setDyn((arr) =>
        arr.map((x, i) => (i === idxNoValueShown ? { ...x, showValue: true } : x))
      );
      return;
    }

    // 2) Yeni bir filtre eklemek üzereyiz; limit dolu mu?
    if (dyn.length >= MAX_DYN) {
      setAlert("Daha fazla filtre eklenemiyor.");
      return;
    }

    // 3) Yeni filtreyi sadece Field açık şekilde ekle
    setDyn((d) => [
      ...d,
      { id: crypto.randomUUID(), fieldKey: firstKey, value: "", showValue: false },
    ]);
  };

  const handleRemove = (id: string) => setDyn((d) => d.filter((x) => x.id !== id));

  const handleClearAll = () => {
    setQ("");
    setDate("");
    setPkg("");
    setPlatform("");
    setDyn([]);
    setAlert(null);
  };

  const handleSearch = (value: string) => {
    console.log("search", { query: value, date, pkg, platform, filters: dyn });
  };

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-4">
          <SearchBox value={q} onChange={setQ} onSearch={handleSearch} />

          <DateDropdown label="Date" options={dateOpts} value={date} onChange={setDate} />
          <PackageDropdown options={pkgOpts} value={pkg} onChange={setPkg} />
          <PlatformDropdown options={platformOpts} value={platform} onChange={setPlatform} />

          {dyn.map((f) => (
            <div key={f.id} className="flex items-center gap-2">
              <ListDropdown
                label="Field"
                options={fieldOptions}
                value={f.fieldKey}
                onChange={(newKey) =>
                  setDyn((arr) =>
                    arr.map((x) =>
                      x.id === f.id ? { ...x, fieldKey: newKey, value: "" } : x
                    )
                  )
                }
                width={174}
                height={47}
              />

              {f.showValue && (
                <ListDropdown
                  label="Value"
                  options={getValueOptions(f.fieldKey)}
                  value={f.value}
                  onChange={(v) =>
                    setDyn((arr) =>
                      arr.map((x) => (x.id === f.id ? { ...x, value: v } : x))
                    )
                  }
                  width={174}
                  height={47}
                />
              )}

              <button
                type="button"
                onClick={() => handleRemove(f.id)}
                className="inline-flex items-center justify-center rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  background: "var(--Primary-800, #143740)",
                  color: "var(--Text-default, #FEF5BF)",
                }}
                aria-label="Remove filter"
                title="Remove"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleAddFilter}
            className="inline-flex items-center justify-center gap-[10px] rounded-[28px] h-[47px] px-4 transition-colors hover:brightness-[1.05] focus-visible:outline focus-visible:outline-2"
            style={{
              width: 194,
              background: "var(--Primary-800, #143740)",
              color: "var(--Text-default, #FEF5BF)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 16,
              boxShadow: "inset 0 0 0 2px rgba(246, 250, 207, 0.78)",
            }}
          >
            <span className="inline-flex items-center p-[5px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--Text-default, #D4EA33)"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
            Add a Filter
          </button>

          <button
            type="button"
            onClick={handleClearAll}
            className="inline-flex items-center justify-center rounded-[28px] h-[47px] px-5 transition-colors hover:brightness-[2.05] focus-visible:outline focus-visible:outline-2"
            style={{
              background: "var(--Secondary-300, #D4EA33)",
              color: "var(--Neutrals-800, #18222B)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Clear All
          </button>
        </div>
      </div>

      {alert && (
        <div
          className="mt-3 rounded-[10px] px-4 py-2 text-center mx-auto"
          style={{
            width: "fit-content",
            color: "var(--Primary-900, #102A31)",
            background: "var(--Main-400, #DDEE5C)",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 14,
          }}
          role="status"
        >
          {alert}
          <button
            onClick={() => setAlert(null)}
            className="ml-3 underline underline-offset-4"
            style={{ color: "var(--Primary-900, #102A31)" }}
          >
            Tamam
          </button>
        </div>
      )}
    </div>
  );
}

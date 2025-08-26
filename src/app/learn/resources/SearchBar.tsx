// src/app/learn/resources/SearchBar.tsx
"use client";

import * as React from "react";
import SearchBox from "@/components/vulnerabilities/SearchBox";
import { useRouter, useSearchParams } from "next/navigation";
import { clsx } from "clsx";

export default function SearchBar({ className = "" }: { className?: string }) {
  const router = useRouter();
  const params = useSearchParams();
  const initial = params.get("q") ?? "";
  const [q, setQ] = React.useState(initial);

  const handleSearch = (query: string) => {
    // URL’e ?q=... yazalım (ileride server tarafında searchParams ile filtrelersin)
    const url = new URL(window.location.href);
    if (query) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
    router.push(url.pathname + "?" + url.searchParams.toString());
  };

  return (
    <div className={clsx("w-full flex justify-center", className)}>
      <SearchBox
        value={q}
        onChange={setQ}
        onSearch={handleSearch}
        placeholder="Search a Key Word"
        className="w-full max-w-[1100px] h-[47px]"
      />
    </div>
  );
}

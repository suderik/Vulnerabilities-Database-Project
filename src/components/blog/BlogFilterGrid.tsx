"use client";

import { useMemo, useState } from "react";
import Card from "@/components/ui/card";
import DateDropdown, { type Option } from "@/components/vulnerabilities/DateDropdown";

type Item = {
  id: string;
  title: string;
  summary: string;
  type: "News" | "Video" | "Article" | "Guide" | "Playbook";
  href?: string;
  imageUrl?: string;
};

export default function BlogFilterGrid({ items }: { items: Item[] }) {
  const [filter, setFilter] = useState<string>("all");

  const options: Option[] = [
    { label: "All", value: "all" },
    { label: "News", value: "News" },
    { label: "Video", value: "Video" },
    { label: "Article", value: "Article" },
    { label: "Guide", value: "Guide" },
    { label: "Playbook", value: "Playbook" },
  ];

  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.type === filter)),
    [items, filter]
  );

  return (
    <section className="mt-16">
      {/* Başlık + Filtre aynı hizada */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] items-end gap-4 mb-6">
        <h2 className="font-alt text-2xl md:text-3xl text-[#D4EA33]">
          Workers &amp; Lorem Ipsum
        </h2>

        {/* Senin dropdown – tema renkleri korunur */}
        <DateDropdown
          label="Filter"
          options={options}
          value={filter}
          onChange={setFilter}
          className="justify-self-start md:justify-self-end"
        />
      </div>

      {/* Dikey kart ızgarası */}
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
        {visible.map((it) => (
          <Card
            key={it.id}
            title={it.title}
            description={it.summary}
            imageUrl={it.imageUrl}
            className="w-[315px] md:w-[330px] border border-white/10 hover:border-[var(--Main-default,#D4EA33)]/60 transition-colors"
            as="article"
          >
            {!!it.href && (
              <a
                href={it.href}
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#D4EA33] text-[#0E1E22] font-semibold px-4 py-1"
              >
                Read more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M13 5l7 7-7 7M20 12H4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </Card>
        ))}
      </div>

      {/* Load more (opsiyonel) */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="rounded-full border border-[#D4EA33]/60 bg-transparent px-5 py-2 text-[#D4EA33] font-semibold hover:bg-[#D4EA33]/10 transition-colors"
        >
          Load More →
        </button>
      </div>
    </section>
  );
}

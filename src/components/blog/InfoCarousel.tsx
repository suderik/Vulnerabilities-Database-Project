"use client";

import { useMemo, useState } from "react";

type Item = { tag: string; title: string; body: string };

export default function InfoCarousel({ items }: { items: Item[] }) {
  // animasyonu durdur/devam ettir
  const [paused, setPaused] = useState(false);

  // döngü akışı için listeyi iki kez yan yana
  const loop = useMemo(() => [...items, ...items], [items]);

  return (
    <section
      className={`
        relative overflow-hidden py-8
        /* sayfa paddingini sıfırlayıp full-bleed yap */
        -mx-6 md:-mx-10 lg:-mx-16 xl:-mx-24
      `}
    >
      {/* kenarlarda yumuşak maske */}
      <div className="pointer-events-none absolute inset-0 z-10"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 56px, black calc(100% - 56px), transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 56px, black calc(100% - 56px), transparent)",
        }}
      />

      <div
        className="group relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* ray */}
        <div
          className="flex gap-6 pl-6 pr-6 will-change-transform"
          style={{
            animation: "thx-marquee 36s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {loop.map((it, i) => (
            <article
              key={`${it.title}-${i}`}
              className={`
                min-w-[375px] max-w-[375px] h-[413px]
                rounded-[20px] border border-[#D4EA33]
                bg-[#121A21] p-6 flex flex-col
                transition-transform duration-200
                hover:-translate-y-1
              `}
            >
              <span className="self-start rounded-full px-3 py-1 text-[13px] font-semibold text-[#0E1E22] bg-[#FCBF44]">
                {it.tag}
              </span>

              <h3 className="mt-6 text-[#D4EA33] text-[22px] leading-tight font-semibold">
                {it.title}
              </h3>

              <p className="mt-4 text-[#FEF5BF] text-[15px] leading-snug line-clamp-6">
                {it.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes thx-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* loop’u iki kez bastığımız için %50 */
        }
      `}</style>
    </section>
  );
}

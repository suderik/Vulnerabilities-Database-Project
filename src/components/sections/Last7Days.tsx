"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

type CardItem = {
  title?: string;       // küçük rozet için (şimdilik "News")
  desc: string;
  img: string;          // public altındaki görsel yolu
  href: string;         // See More linki
};

const ITEMS: CardItem[] = [
  {
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    img: "/placeholders/thumb-1.png",
    href: "/vulnerabilities/cve-2025-0001",
  },
  {
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    img: "/placeholders/thumb-2.png",
    href: "/vulnerabilities/cve-2025-0002",
  },
  {
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    img: "/placeholders/thumb-3.png",
    href: "/learn/resources",
  },
  {
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    img: "/placeholders/thumb-4.png",
    href: "/about-us",
  },
];

export default function Last7DaysSection() {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-[1200px] px-1 text-center">
        {/* Başlık */}
        <h2
          className="font-museo"
          style={{
            color: "var(--Text-400, #FEF7CC)",
            fontSize: "35.8px",
            fontWeight: 500,
            lineHeight: "1.15",
            textShadow: "0 2px 6px rgba(0, 0, 0, 0.57)",
          }}
        >
          Vulnerabilities Detected in the
          <br /> Last 7 Days
        </h2>

        {/* Kartlar */}
        <div className="mt-8 grid w-fit mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {ITEMS.map((it, i) => (
            <article
              key={i}
              className="w-[257px] rounded-[16px] p-6 text-left"
              style={{
                background: "rgba(18,26,33,.96)",
                boxShadow: "inset 0 0 0 2px rgba(0,0,0,.25)",
              }}
            >
              {/* görsel */}
              <div
                className="h-[160px] rounded-[10px] bg-center bg-cover"
                style={{
                  backgroundImage: `url(${it.img})`,
                  backgroundColor: "lightgray",
                }}
                aria-hidden
              />

              {/* rozet */}
              <span
                className="inline-block mt-3 rounded-[12px] px-4 py-[3px] text-[12px] font-poppins font-semibold text-black"
                style={{ background: "var(--Main-default, #FCBF44)" }}
              >
                News
              </span>

              {/* açıklama */}
              <p
                className="mt-2 font-poppins"
                style={{
                  color: "var(--Text-400, #FEF7CC)",
                  fontSize: "13px",
                  lineHeight: "1.35",
                }}
              >
                {it.desc}
              </p>

              {/* buton (link) */}
              <Button
                size="sm"
                href={it.href}
                className="mt-3"
                // butonunuz zaten Poppins, renkleri projedeki tokenlarla uyumlu
              >
                See More <ArrowIcon className="ml-1" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* küçük sağ ok */
function ArrowIcon({
  size = 16,
  color = "currentColor",
  className = "",
}: {
  size?: number | string;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

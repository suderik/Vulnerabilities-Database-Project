"use client";
import Link from "next/link";
import { BodyCell } from "./BodyCell";

export function ActionCell({ href }: { href: string }) {
  return (
    <BodyCell>
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-[10px] px-3 py-1 text-[12px] font-semibold transition"
        style={{
          background: "var(--color-green-500, #D4EA33)",
          color: "var(--color-primary-900, #102A31)",
          boxShadow: "inset 0 4px 10.6px rgba(0,0,0,.51)",
        }}
      >
        See More
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M9 18l6-6-6-6" />
        </svg>
      </Link>
    </BodyCell>
  );
}

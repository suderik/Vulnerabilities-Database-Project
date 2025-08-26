"use client";
import { BodyCell } from "./BodyCell";

export function OrderCell({ n }: { n: number }) {
  return (
    <BodyCell>
      <div
        className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-semibold"
        style={{
          background: "var(--color-secondary-300, #AFD19F)",
          color: "var(--color-primary-900, #102A31)",
        }}
      >
        {n}
      </div>
    </BodyCell>
  );
}

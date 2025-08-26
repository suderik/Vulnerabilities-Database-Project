"use client";
import { BodyCell } from "./BodyCell";

export function StatusCell({
  value,
}: {
  value: "active" | "passive" | "stable";
}) {
  const label = value;
  return (
    <BodyCell>
      <span
        className="inline-flex items-center justify-center rounded-[25px] px-[20px] py-[5px] text-[12px] font-semibold"
        style={{
          border: "1px solid var(--color-secondary-900, #000000ff)",
          background: "var(--color-green-400, #DDEE5C)",
          color: "var(--color-primary-900, #102a31ff)",
          fontFamily: "var(--font-sans)",
          lineHeight: 1,
        }}
      >
        {label}
      </span>
    </BodyCell>
  );
}

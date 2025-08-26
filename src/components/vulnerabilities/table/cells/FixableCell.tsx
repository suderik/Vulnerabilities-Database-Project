"use client";
import { BodyCell } from "./BodyCell";

export function FixableCell({ value }: { value: boolean }) {
  return (
    <BodyCell>
      <div
        className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold"
        style={{
          background: value
            ? "var(--color-green-100, #F2F8C0)"
            : "var(--color-darker-300, #8E98A8)",
          color: value
            ? "var(--color-secondary-700, #618450)"
            : "var(--color-text-900, #6B6750)",
        }}
      >
        <span
          className="inline-block h-3 w-3 rounded-full"
          style={{
            background: value
              ? "var(--color-green-600, #C1D52E)"
              : "var(--color-darker-500, #556471)",
          }}
        />
        {value ? "Yes" : "No"}
      </div>
    </BodyCell>
  );
}

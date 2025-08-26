"use client";
import { BodyCell } from "./BodyCell";

export function TextCell({ value }: { value: string }) {
  return (
    <BodyCell>
      <span
        className="font-semibold"
        style={{ color: "var(--color-darker-700, #273847)" }}
      >
        {value}
      </span>
    </BodyCell>
  );
}

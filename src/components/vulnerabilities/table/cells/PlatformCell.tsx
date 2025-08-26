"use client";
import { BodyCell } from "./BodyCell";

export function PlatformCell({ name }: { name: string }) {
  return (
    <BodyCell>
      <div className="flex w-full items-center gap-3 justify-start text-left">
        <div
          className="h-6 w-6 rounded-full bg-[var(--color-green-600)] shadow-inner"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #88BA70 0%, #225B6A 100%)",
          }}
        />
        <span
          className="font-semibold"
          style={{ color: "var(--color-darker-700, #273847)" }}
        >
          {name}
        </span>
      </div>
    </BodyCell>
  );
}

// src/components/charts/ChartCard.tsx
import * as React from "react";
import { clsx } from "clsx";

export default function ChartCard({
  title,
  children,
  className,
  style,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section
      className={clsx("flex flex-col overflow-hidden", className)}
      style={{
        width: "min(496px, 100%)",
        height: "100%", // <-- dotted-frame padding sonrası 477px’e denk gelir
        borderRadius: 40,
        border: "1px solid var(--Secondary-900, #394E2F)",
        background: "var(--Main-300, #f3f8c0d3)",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.47)",
        ...(style || {}),
      }}
    >
      <header className="px-6 pt-6 pb-2">
        <h4 className="thx-h5 font-museo text-[hsl(var(--darker-900))]">{title}</h4>
      </header>
      <div className="flex-1 px-6 pb-6">{children}</div>
    </section>
  );
}

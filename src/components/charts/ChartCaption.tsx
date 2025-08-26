// src/components/charts/ChartCaption.tsx
import * as React from "react";
import { clsx } from "clsx";

export default function ChartCaption({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <p
      className={clsx("text-center font-poppins", className)}
      style={{
        width: "min(487px, 100%)", // Figma: 487px, ancak küçük ekranda kırpma olmasın
        height: 239,               // Figma: 239px
        flexShrink: 0,
        color: "var(--Main-600, #C1D52E)",
        textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
        fontSize: "23.04px",       // h5-poppins
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal",
        margin: 0,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

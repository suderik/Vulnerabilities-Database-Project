"use client";

import * as React from "react";

export function BodyCell({
  children,
  justify = "center", // "start" | "center" | "end"
}: {
  children: React.ReactNode;
  justify?: "start" | "center" | "end";
}) {
  const j =
    justify === "start"
      ? "justify-start"
      : justify === "end"
      ? "justify-end"
      : "justify-center";

  return (
    <div
      className={`flex h-[67px] items-center ${j} gap-[14px] px-2 py-4`}
      style={{
        borderBottom: "1px solid var(--color-text-800, #8C8769)",
        background: "var(--color-text-400, #FEF7CC)",
        boxShadow: "inset 0 3px 10px rgba(0,0,0,0.25)",
      }}
    >
      {children}
    </div>
  );
}

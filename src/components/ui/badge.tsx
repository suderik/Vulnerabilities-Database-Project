import { clsx } from "clsx";
import * as React from "react";

type Tone = "neutral" | "primary" | "success" | "warn";
const toneToClasses: Record<Tone, string> = {
  neutral: "bg-bg-soft text-fg",
  primary: "bg-primary-500 text-black",
  success: "bg-green-500 text-black",
  warn:    "bg-orange-500 text-black",
};

export function Badge({
  tone = "neutral",
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-xl2 px-2 py-0.5 text-[12px] font-medium",
        toneToClasses[tone],
        className
      )}
      {...props}
    />
  );
}

"use client";

import * as React from "react";
import { clsx } from "clsx";

export type Option = { label: string; value: string };

export default function ListDropdown({
  label,
  options,
  value,
  onChange,
  className,
  width = 174,   // 🔸 Package/Platform için 174, Date için 103
  height = 47,   // Figma yüksekliği
}: {
  label: string;
  options: Option[];
  value?: string;
  onChange?: (v: string) => void;
  className?: string;
  width?: number;
  height?: number;
}) {
  const [open, setOpen] = React.useState(false);
  const [inner, setInner] = React.useState("");
  const ref = React.useRef<HTMLDivElement>(null);

  const current = value ?? inner;
  const setCurrent = (v: string) => {
    if (onChange) onChange(v);
    else setInner(v);
  };

  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("click", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={clsx("relative rounded-[5px] border", className)}
      style={{
        width, height, padding: 10,
        borderColor: "var(--Color-Black, #000)",
        background: "var(--Secondary-300, #AFD19F)",
      }}
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full h-full items-center"
      >
        <span
          className="truncate font-poppins font-semibold"
          style={{
            color: "var(--Neutrals-800, #18222B)",
            textAlign: "justify",
            fontSize: 16, lineHeight: "normal",
          }}
        >
          {current ? options.find(o => o.value === current)?.label : label}
        </span>

        {/* Sağ ok alanı – Figma paddings */}
        <span
          className="ml-auto flex"
          style={{
            padding: "1px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 10, flex: "1 0 0", alignSelf: "stretch",
          }}
        >
          <svg
            width="30" height="30" viewBox="0 0 24 24" fill="none"
            stroke="var(--Neutrals-800, #FCBF44)" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round"
            className={clsx("transition-transform", open && "rotate-180")}
            aria-hidden
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {/* Menü – seçenekler: width×height, alt alta, aralıksız */}
      {open && (
        <div
          role="listbox"
          className="absolute left-0 top-[calc(100%+6px)] z-50 rounded-[6px] overflow-hidden shadow-lg"
          style={{ border: "1px solid rgba(0,0,0,.4)", background: "transparent" }}
        >
          <div className="flex flex-col gap-0">
            {options.map((opt) => {
              const active = current === opt.value;
              return (
                <button
                  key={opt.value}
                  role="option"
                  aria-selected={active}
                  onClick={() => { setCurrent(opt.value); setOpen(false); }}
                  className={clsx("transition-colors", active && "ring-2 ring-[var(--Main-default,#D4EA33)]")}
                  style={{
                    display: "flex",
                    width, height,
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    background: "var(--Secondary-300, #AFD19F)",
                    color: "var(--Primary-900, #102A31)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: 16, lineHeight: "normal",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "var(--Main-400, #DDEE5C)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "var(--Secondary-300, #AFD19F)"; }}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

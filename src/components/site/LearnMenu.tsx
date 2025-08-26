"use client";

import * as React from "react";
import Link from "next/link";

export default function LearnMenu({ className = "" }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const closeTimer = React.useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), 200); // gecikme
  };

  // Dışarı tıklama & ESC
  React.useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node;
      if (rootRef.current && !rootRef.current.contains(t)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const itemBase =
    "flex items-center gap-3 rounded-[10px] px-4 py-2 text-[15px] font-semibold transition-colors";
  const itemHover =
    "hover:bg-[var(--Main-default,#D4EA33)] hover:text-[var(--Neutrals-900,#121A21)] focus:bg-[var(--Main-default,#D4EA33)] focus:text-[var(--Neutrals-900,#121A21)] outline-none";

  return (
    <div
      ref={rootRef}
      className={`relative ${className}`}
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocusCapture={() => {
        cancelClose();
        setOpen(true);
      }}
      onBlurCapture={(e) => {
        // odak tamamen dışarı çıkarsa kapat
        const next = e.relatedTarget as Node | null;
        if (!rootRef.current?.contains(next)) scheduleClose();
      }}
    >
      {/* Trigger: sadece metin, ok yok */}
      <button
        type="button"
        tabIndex={0}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center justify-center px-[20px] py-[7px] gap-[10px]
                   font-poppins font-semibold text-[clamp(12px,1.2vw,14px)]
                   text-[hsl(var(--green-500))]
                   hover:text-[hsl(var(--secondary-500))] focus:text-[hsl(var(--secondary-500))]"
      >
        Learn
      </button>

    
      <div
        aria-hidden
        className={`${open ? "block" : "hidden"} absolute left-0 right-0 top-full h-3`}
        // görünmez, fakat pointer yakalıyor
      />

      {/* Dropdown panel */}
      <div
        role="menu"
        className={`absolute left-1/2 top-full z-[60] mt-2 w-[240px] -translate-x-1/2
                    rounded-[15px] border border-black/60 bg-[rgba(107,103,80,0.78)]
                    shadow-[inset_0_4px_25.3px_rgba(0,0,0,0.54)]
                    drop-shadow-[0_4px_12px_rgba(0,0,0,0.33)]
                    backdrop-blur-[1px] overflow-hidden
                    transition-all duration-150
                    ${open ? "opacity-100 visible pointer-events-auto scale-100"
                           : "opacity-0 invisible pointer-events-none scale-95"}`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        {/* Noise overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[.08]"
          style={{
            backgroundImage:
              "radial-gradient(#000 1px, transparent 1px), radial-gradient(#000 1px, transparent 1px)",
            backgroundPosition: "0 0, 8px 8px",
            backgroundSize: "16px 16px",
          }}
        />

        {/* Items */}
        <div className="relative p-3 flex flex-col gap-2">
          <Link
            href="/learn/resources"
            role="menuitem"
            className={`${itemBase} ${itemHover} text-[var(--Text-400,#FEF7CC)]`}
          >
            <span aria-hidden className="h-2 w-2 rounded-full bg-[var(--Main-default,#D4EA33)] opacity-80" />
            Resources
          </Link>
          <Link
            href="/learn/blog"
            role="menuitem"
            className={`${itemBase} ${itemHover} text-[var(--Text-400,#FEF7CC)]`}
          >
            <span aria-hidden className="h-2 w-2 rounded-full bg-[var(--Main-default,#D4EA33)] opacity-80" />
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

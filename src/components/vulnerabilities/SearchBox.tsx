"use client";

import * as React from "react";
import { clsx } from "clsx";

export default function SearchBox({
  value,
  onChange,
  onSearch,
  placeholder = "Search a Word",
  className,
}: {
  value?: string;
  onChange?: (v: string) => void;
  onSearch?: (q: string) => void;
  placeholder?: string;
  className?: string;
}) {
  const [inner, setInner] = React.useState("");
  const current = value ?? inner;
  const setCurrent = (v: string) => (onChange ? onChange(v) : setInner(v));

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    onSearch?.(current.trim());
  };

  return (
    <form
      onSubmit={submit}
      className={clsx(
        "group relative w-[364px] h-[47px] rounded-[8px] overflow-hidden",
        "transition-colors duration-200 ease-out",
        // hover'da arka plan secondary-default
        "hover:bg-[var(--Secondary-default,#88BA70)]",
        className
      )}
      // base bg: primary-800 + ince iç çizgi
      style={{
        background: "var(--Primary-800, #143740)",
        boxShadow: "inset 0 0 0 2px rgba(246, 250, 207, 0.78)",
      }}
    >
      <input
        type="text"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        className={clsx(
          "absolute inset-0 w-full h-full bg-transparent outline-none",
          "pl-4 pr-11 font-poppins font-semibold text-[16px]",
          // tıklandığında (focus-within) p-small (11px)
          "group-focus-within:text-[11px]",
          "transition-[font-size] duration-200 ease-out",
          "placeholder:opacity-80"
        )}
        style={{
          color: "var(--Text-default, #FEF5BF)", // hem normal hem focus'ta aynı renk
          lineHeight: "normal",
        }}
        placeholder={placeholder}
      />

      {/* search icon (submit) */}
      <button
        type="submit"
        aria-label="Search"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:opacity-90 focus-visible:outline focus-visible:outline-2"
        style={{ color: "var(--Main-default, #D4EA33)" }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      </button>
    </form>
  );
}

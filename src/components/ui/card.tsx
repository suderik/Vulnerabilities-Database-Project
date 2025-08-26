"use client";

import * as React from "react";
import { clsx } from "clsx";



export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  as?: keyof JSX.IntrinsicElements;
  imageUrl?: string;
  imageAlt?: string;
  title?: string;                 // chip/label: News, Video...
  description?: string;
  addedAt?: string | Date;        // yeni: eklenme tarihi
  orientation?: "vertical" | "horizontal";
}

function relAdded(addedAt?: string | Date) {
  if (!addedAt) return null;
  const d = new Date(addedAt).getTime();
  const days = Math.floor((Date.now() - d) / 86_400_000);
  if (days <= 0) return "Added today";
  if (days === 1) return "Added last day";
  return `Added ${days} days ago`;
}

export default function Card({
  as = "div",
  className,
  style,
  imageUrl,
  imageAlt = "",
  title,
  description,
  addedAt,
  orientation = "horizontal",     // yatay varsayılan
  children,
  ...props
}: CardProps) {
  const Comp = as as any;
  const isHorizontal = orientation === "horizontal";

  // KART: hafif küçültülmüş padding + gap
  const baseClasses = clsx(
    isHorizontal
      ? "w-full overflow-hidden rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,0,0,0.45)] hover:outline hover:outline-1 hover:outline-[#E6F06B]/35 ring-1 ring-inset ring-white/5"
      : "w-full sm:w-[252px] min-w-[173px] p-4 rounded-[15px] flex flex-col items-start gap-2",
    className
  );

  // Görsel: daha kompakt genişlik, kart yüksekliğini doldurur
  const mediaWrapperCls = clsx(
    isHorizontal
      ? "relative w-full sm:w-[200px] rounded-xl overflow-hidden flex-shrink-0"
      : "relative w-full h-[150px] rounded-[12px] overflow-hidden"
  );

  const mediaInner = imageUrl ? (
    <img
      src={imageUrl}
      alt={imageAlt}
      className="absolute inset-0 w-full h-full object-cover"
    />
  ) : (
    <div
      className="absolute inset-0"
      style={{
        backgroundColor: "#f3f4f6",
        backgroundImage:
          "linear-gradient(45deg,#e5e7eb 25%,transparent 25%),linear-gradient(-45deg,#e5e7eb 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e5e7eb 75%),linear-gradient(-45deg,transparent 75%,#e5e7eb 75%)",
        backgroundSize: "16px 16px",
        backgroundPosition: "0 0,0 8px,8px -8px,-8px 0",
      }}
    />
  );

  // Gövde
  const body = (
    <div className="flex-1 min-w-0">
      {/* üst satır: label + tarih */}
      <div className="flex items-center gap-3 justify-between flex-wrap">
        {title ? (
          <span className="mt-2 inline-flex rounded-full px-3 py-1 bg-[#fcbf44] text-[#1A1A1A] font-alt font-bold text-[14px] leading-none">
            {title}
          </span>
        ) : <span />}
        {addedAt ? (
          <span className="text-[#8C8769] text-[12px] sm:text-[13px] inline-flex items-center gap-1.5">
            {/* clock icon */}
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="-mt-px">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10 5v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {relAdded(addedAt)}
          </span>
        ) : null}
      </div>

      {description ? (
        <p className="mt-3 text-[#FEF7CC] font-poppins text-[15px] leading-8 md:line-clamp-3">
          {description}
        </p>
      ) : null}

      {children}
    </div>
  );

  return (
    <div className="relative group">
      <Comp
        className={baseClasses}
        style={{
          background: "rgba(18, 26, 33, 0.88)",
          boxShadow: "inset 0 4px 4px 0 rgba(0, 0, 0, 0.25)",
          ...(style || {}),
        }}
        {...props}
      >
        {isHorizontal ? (
          <>
            <div className={mediaWrapperCls}>{mediaInner}</div>
            {body}
          </>
        ) : (
          <>
            <div className={mediaWrapperCls}>{mediaInner}</div>
            {body}
          </>
        )}
      </Comp>
    </div>
  );
}

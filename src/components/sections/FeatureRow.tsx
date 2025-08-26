// src/components/sections/FeatureRow.tsx
import React from "react";
import { clsx } from "clsx";

export default function FeatureRow({
  imageSrc,
  text,
  reverse = false,
  rightAlign = false, 
}: {
  imageSrc: string;
  text: string;
  reverse?: boolean;    
  rightAlign?: boolean; 
}) {
  return (
    <div
      className={clsx(
        "w-full flex flex-col items-center gap-8 md:gap-12 md:flex-row",
        reverse && "md:flex-row-reverse"
      )}
    >
      {/* Görsel */}
      <div
        className="w-full max-w-[628px] shrink-0 rounded-[8px] min-h-[220px] md:h-[300px]"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "lightgray",
        }}
        aria-hidden
      />

      {/* Metin */}
      <p
        className={clsx(
          "w-full max-w-[700px] font-poppins",
          rightAlign ? "text-left md:text-right" : "text-left"
        )}
        style={{
          color: "var(--Text-600, #E7DFAE)",
          fontSize: "25.65px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

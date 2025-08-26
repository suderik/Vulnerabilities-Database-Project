// src/components/vulnerabilities/table/cells/HeaderCell.tsx
"use client";

export function HeaderCell({
  label,
  minWidth = 91,
}: { label: string; minWidth?: number }) {
  return (
    <div className="relative h-[56px]" style={{ minWidth }}>
      {/* Zemin + noise */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 91 56"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        <g filter="url(#hdr_noise)">
          <mask id="hdr_mask" fill="white">
            <path d="M0 0H91V56H0V0Z" />
          </mask>
          <path d="M0 0H91V56H0V0Z" fill="#6B6750" />
          {/* alttaki açık şerit */}
          <path d="M91 56V55H0V56V57H91V56Z" fill="#8C8769" mask="url(#hdr_mask)" />
        </g>
        <defs>
          <filter id="hdr_noise" x="0" y="0" width="91" height="56"
                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="2 2"
                          stitchTiles="stitch" numOctaves="3" seed="2473" result="n"/>
            <feColorMatrix in="n" type="luminanceToAlpha" result="a"/>
            <feComponentTransfer in="a"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer>
            <feComposite operator="in" in2="SourceGraphic"/>
          </filter>
        </defs>
      </svg>

      {/* Başlık metni */}
      <div
        className="absolute inset-0 flex items-center justify-center font-semibold"
        style={{ color: "#FEF5BF", fontSize: "11px" }}
      >
        {label}
      </div>
    </div>
  );
}

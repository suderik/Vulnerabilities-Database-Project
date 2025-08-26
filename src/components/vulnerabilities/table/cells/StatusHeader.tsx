"use client";

export function StatusHeader() {
  return (
    <div className="relative h-[56px] min-w-[91px]">
      {/* Verdiğin SVG arkaplanı */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="91"
        height="56"
        viewBox="0 0 91 56"
        className="absolute inset-0 h-full w-[91px]"
        aria-hidden
      >
        <g filter="url(#f0)">
          <mask id="m1" fill="white">
            <path d="M0 0H91V56H0V0Z" />
          </mask>
          <path d="M0 0H91V56H0V0Z" fill="var(--color-text-900, #6B6750)" />
          <path
            d="M91 56V55H0V56V57H91V56Z"
            fill="var(--color-text-800, #8C8769)"
            mask="url(#m1)"
          />
        </g>
        <defs>
          <filter id="f0" x="0" y="0" width="91" height="56" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="2 2"
              stitchTiles="stitch"
              numOctaves="3"
              result="noise"
              seed="2473"
            />
            <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
            <feComponentTransfer in="alphaNoise" result="alphaNoise2">
              {/* sadeleştirilmiş — görsel etkiyi korur */}
              <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feComposite operator="in" in2="shape" in="alphaNoise2" />
          </filter>
        </defs>
      </svg>

      {/* Başlık metni */}
      <div
        className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold"
        style={{ color: "var(--color-text-50, #fffef9)", fontFamily: "var(--font-sans)" }}
      >
        Status
      </div>
    </div>
  );
}

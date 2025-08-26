type Props = {
    dot?: string;
    line?: string;
    opacity?: number;
    /** Tam ekran genişlikte çiz (önerilir) */
    stretchX?: boolean;
};

export default function PatternBlogBackdrop({
    dot = "#D4EA33",
    line = "#88BA70",
    opacity = 1,
    stretchX = true,
}: Props) {
    const o = (v: number) => Math.max(0, Math.min(1, v * opacity));

    return (
        <div
            className={[
                "pointer-events-none absolute -z-10",
                // stretchX true ise: sadece dikey kenarlara yasla, X ekseninde ekran genişliğine taşı
                stretchX ? "inset-y-0 left-1/2 w-screen -translate-x-1/2" : "inset-0",
            ].join(" ")}
        >
            <svg
                className="h-full w-full"
                viewBox="0 0 1000 800"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <defs>
                    <pattern id="pb-dots" width="22" height="22" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.8" fill={dot} opacity={o(0.09)} />
                    </pattern>

                    <pattern id="pb-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                        <path d="M80 0H0M0 0V80" stroke={line} strokeWidth="1" opacity={o(0.06)} />
                    </pattern>

                    <radialGradient id="pb-fade" cx="50%" cy="15%" r="85%">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="55%" stopColor="white" />
                        <stop offset="100%" stopColor="black" />
                    </radialGradient>
                    <mask id="pb-mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#pb-fade)" />
                    </mask>
                </defs>
                <g mask="url(#pb-mask)">
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pb-dots)" />
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pb-grid)" />
                </g>
            </svg>
        </div>
    );
}

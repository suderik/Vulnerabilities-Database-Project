"use client";
import * as React from "react";
import ChartCard from "./ChartCard";

/** Basit donut parçası için path üretir */
function arcPath(cx: number, cy: number, r: number, start: number, end: number) {
  const toXY = (a: number) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  const [sx, sy] = toXY(start);
  const [ex, ey] = toXY(end);
  const largeArc = end - start > Math.PI ? 1 : 0;
  return `M ${sx} ${sy} A ${r} ${r} 0 ${largeArc} 1 ${ex} ${ey}`;
}

export default function Donut7Days() {
  // yüzde (toplam 100)
  const slices = [
    { label: "Updated in Last 30 days: 45 (50.0%)", value: 50,   color: "#476129ff" },
    { label: "New Last 30 Days: 30 (33.3%)",        value: 33.3, color: "#1a3e4aff" },
    { label: "New Last 7 Days: 15 (16.7%)",         value: 16.7, color: "#FCBF44"   },
  ];

  // açıları hesapla
  const total = slices.reduce((a, b) => a + b.value, 0);
  let acc = -Math.PI / 2; // saat 12 hizası
  const parts = slices.map((s) => {
    const start = acc;
    const end = acc + (2 * Math.PI * s.value) / total;
    acc = end;
    return { ...s, start, end };
  });

  // hover/focus olan dilim
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <ChartCard title="Vulnerabilities in the Last 7 Days">
      <div className="grid grid-cols-2 gap-4 h-full">
        {/* Donut */}
        <div className="flex items-center justify-center">
          <svg width="240" height="240" viewBox="0 0 240 240" aria-label="Donut chart">
            {/* ring arka planı */}
            <circle cx="120" cy="120" r="84" fill="none" stroke="#E6EAD2" strokeWidth="52" />
            {/* dilimler */}
            <g>
              {parts.map((p, i) => {
                const active = hovered === i;
                const r = active ? 88 : 84;           // yarıçapı biraz dışarı taşı
                const w = active ? 58 : 52;           // kalınlığı artır
                return (
                  <path
                    key={i}
                    d={arcPath(120, 120, r, p.start, p.end)}
                    stroke={p.color}
                    strokeWidth={w}
                    strokeLinecap="butt"
                    fill="none"
                    style={{ transition: "all 220ms ease-out" }}
                    className="cursor-pointer focus:outline-none"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    tabIndex={0}
                    aria-label={slices[i].label}
                  />
                );
              })}
            </g>
          </svg>
        </div>

        {/* Legend */}
        <div className="flex items-center">
          <ul className="space-y-3">
            {slices.map((s, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span
                  className="mt-1 inline-block h-3 w-3 rounded-[3px]"
                  style={{ background: s.color, outline: hovered === i ? "2px solid #D4EA33" : "none" }}
                  aria-hidden
                />
                <span className="thx-p font-poppins text-[15px] leading-5 text-[hsl(var(--darker-900))]">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ChartCard>
  );
}

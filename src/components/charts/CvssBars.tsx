// src/components/charts/CvssBars.tsx
import * as React from "react";
import ChartCard from "./ChartCard";

type Item = { range: string; value: number; color: string };

export default function CvssBars() {
  // örnek veriler (CVE Details tadında)
  const data: Item[] = [
    { range: "0-1", value: 4,  color: "#85b86cff" },
    { range: "1-2", value: 1,  color: "#428523ff" },
    { range: "2-3", value: 6,  color: "#BCE78C" },
    { range: "3-4", value: 10, color: "#768a1cff" },
    { range: "4-5", value: 12, color: "#F6D34E" },
    { range: "5-6", value: 15, color: "#dfb419ff" },
    { range: "6-7", value: 32, color: "#124853ff" }, // primary-700 gibi koyu
    { range: "7-8", value: 14, color: "#206799ff" },
    { range: "8-9", value: 6,  color: "#705a0aff" },
    { range: "9+",  value: 8,  color: "#4b4203ff" },
  ];

  const max = Math.max(...data.map((d) => d.value));
  const W = 320; // çizim alanı (sol)
  const H = 220;
  const barW = 18;
  const gap = 10;

  return (
    <ChartCard title="CVSS Score">
      <div className="grid grid-cols-2 gap-4 h-full">
        {/* Bars */}
        <div className="flex items-center justify-center">
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden>
            {/* eksen tabanı */}
            <line x1="0" y1={H - 20} x2={W} y2={H - 20} stroke="#2b3d4e33" strokeWidth="1" />
            {data.map((d, i) => {
              const h = ((H - 40) * d.value) / max;
              const x = 10 + i * (barW + gap);
              const y = H - 20 - h;
              return (
                <g key={i}>
                  <rect x={x} y={y} width={barW} height={h} rx="3" fill={d.color} />
                  <text
                    x={x + barW / 2}
                    y={H - 6}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#2b3d4e"
                    className="font-poppins"
                  >
                    {d.range}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Legend sağda */}
        <div className="flex items-center">
          <ul className="space-y-2">
            {data.map((d, i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className="inline-block h-3 w-3 rounded-[3px]"
                  style={{ background: d.color }}
                  aria-hidden
                />
                <span className="thx-p font-poppins text-[15px] leading-5 text-[hsl(var(--darker-900))]">
                  {d.range}: {d.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ChartCard>
  );
}

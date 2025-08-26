"use client";
import * as React from "react";

/** HeroChart: dış çerçevede (kartın dışında) 2+ sıra dot-grid hover efekti */
export default function HeroChart() {
  // Demo veri (Total)
  const years = Array.from({ length: 11 }, (_, i) => 2015 + i);
  const totals = [6000, 6000, 14000, 16000, 17000, 18000, 20000, 25000, 29000, 40000, 30000];

  // Grafik ölçüleri
  const W = 994;
  const H = 520;
  const pad = { left: 72, right: 48, top: 48, bottom: 64 };
  const plotH = H - pad.top - pad.bottom;
  const plotW = W - pad.left - pad.right;

  const x = (i: number) => pad.left + (plotW / (years.length - 1)) * i;
  const yMax = 50000;
  const yFor = (v: number) => pad.top + (1 - v / yMax) * plotH;
  const yTicks = [0, 10000, 20000, 30000, 40000, 50000];
  const points = totals.map((v, i) => `${x(i)},${yFor(v)}`).join(" ");

  const [hovered, setHovered] = React.useState(false);

  // Kart boyutu (dış overlay’i konumlamak için)
  const [frameRef, size] = useElementSize<HTMLDivElement>();

  // Dış dot ızgarası için marjin (overlay boyutunu artırmak için)
  const rows = 2;           // min 2 sıra
  const insetStart = 12;
  const rowGap = 12;
  const outerPad = insetStart + (rows - 1) * rowGap + 16; // overlay taşma payı

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-[994px]">
        {/* DIŞ DOT GRID — kartın kardeşi, mutlak konumlu ve kartın dışında */}
        <svg
          className="absolute pointer-events-none z-[1]"
          style={{
            top: -outerPad,
            left: -outerPad,
            width: Math.max(1, size.width) + 2 * outerPad,
            height: Math.max(1, size.height) + 2 * outerPad,
            opacity: hovered ? 1 : 0,
            transition: "opacity 220ms ease",
          }}
          viewBox={`0 0 ${Math.max(1, size.width) + 2 * outerPad} ${Math.max(1, size.height) + 2 * outerPad}`}
          preserveAspectRatio="none"
          aria-hidden
        >
          <FrameDotGridOutside
            cardWidth={Math.max(1, size.width)}
            cardHeight={Math.max(1, size.height)}
            offset={outerPad}
            rows={rows}
            stepX={26}
            stepY={26}
            insetStart={insetStart}
            rowGap={rowGap}
            color="var(--Text-400, #FEF7CC)"
            opacity={0.16}
          />
        </svg>

        {/* KART (içerik) */}
        <div
          ref={frameRef}
          className="relative rounded-[12px] overflow-hidden z-[2] transition-transform duration-300"
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          style={{
            transform: hovered ? "translateZ(0) scale(1.012)" : "none",
            filter: hovered
              ? "drop-shadow(0 18px 34px rgba(0,0,0,.45)) drop-shadow(0 2px 8px rgba(0,0,0,.35))"
              : "none",
          }}
          aria-label="Vulnerabilities hero chart"
        >
          {/* Arka plan + noise */}
          <div className="absolute inset-0" aria-hidden>
            <div className="absolute inset-0" style={{ background: "var(--Primary-200, #121A21)", opacity: 0.5 }} />
            <div
              className="absolute inset-0 mix-blend-overlay opacity-[.08]"
              style={{
                backgroundImage:
                  "radial-gradient(#000 1px, transparent 1px), radial-gradient(#000 1px, transparent 1px)",
                backgroundPosition: "0 0, 8px 8px",
                backgroundSize: "16px 16px",
              }}
            />
          </div>

          {/* İçerik */}
          <div className="relative z-[3] p-3 md:p-6">
            <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="85%" preserveAspectRatio="none">
              {/* Başlık */}
              <text
                x={pad.left - 4}
                y={22}
                fill="#FCBF44"
                textAnchor="start"
                style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: 23, fontWeight: 600 }}
              >
                Vulnerabilities by type & year
              </text>

              {/* Yatay grid + y etiketleri */}
              {yTicks.map((t, i) => {
                const yy = yFor(t);
                return (
                  <g key={t}>
                    <line x1={pad.left} y1={yy} x2={W - pad.right} y2={yy} stroke="#97A624" strokeOpacity={i === 0 ? 0.45 : 0.28} strokeWidth={i === 0 ? 2 : 1} />
                    <text
                      x={pad.left - 10}
                      y={yy + 4}
                      fill="#FEF7CC"
                      textAnchor="end"
                      style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: 14, fontWeight: 500, opacity: 0.9 }}
                    >
                      {t.toLocaleString()}
                    </text>
                  </g>
                );
              })}

              {/* Dikey eksen */}
              <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + plotH} stroke="#97A624" strokeOpacity={0.45} strokeWidth={2} />

              {/* Çizgi + Noktalar */}
              <polyline fill="none" stroke="#EAB308" strokeWidth="3" points={points} />
              {totals.map((v, i) => (
                <circle key={i} cx={x(i)} cy={yFor(v)} r="4.5" fill="#EAB308" stroke="#9a760a" strokeWidth="1.5" />
              ))}

              {/* X ekseni yıl etiketleri */}
              {years.map((yr, i) => (
                <text
                  key={yr}
                  x={x(i)}
                  y={pad.top + plotH + 24}   // eskisi: + 36
                  fill="#FEF7CC"
                  textAnchor="middle"
                  style={{
                    fontFamily: "Poppins, system-ui, sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    opacity: 0.9,
                  }}
                >
                  {yr}
                </text>
              ))}
            </svg>

            {/* Legend */}
            <div className="mt-1 px-3 pb-3 flex flex-wrap items-center gap-x-5 gap-y-3">
              {[
                "Overflow", "Memory corruption", "SQL injection", "XSS", "Directory traversal", "File inclusion", "CSRF", "XXE",
                "SSRF", "Open redirect", "Input validation", "Execute code", "Bypass", "Gain privilege", "Denial of service", "Information leak",
              ].map((label) => (
                <LegendItem key={label} label={label} muted />
              ))}
              <LegendItem label="Total" color="var(--Alternative-default, #FCBF44)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Yardımcılar ---------- */

function LegendItem({ label, muted, color }: { label: string; muted?: boolean; color?: string }) {
  const style: React.CSSProperties = muted ? { color: "rgba(254, 247, 204, 0.55)" } : { color: "var(--Text-400, #FEF7CC)" };
  return (
    <span className="inline-flex items-center gap-2 text-[14px] font-medium" style={style}>
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
        <circle cx="8" cy="8" r="6" fill="none" stroke={color ?? "currentColor"} strokeOpacity={muted ? 0.35 : 1} strokeWidth="2" />
      </svg>
      {label}
    </span>
  );
}

/** Kart boyutunu canlı takip eder */
function useElementSize<T extends HTMLElement>() {
  const ref = React.useRef<T>(null);
  const [size, setSize] = React.useState({ width: 0, height: 0 });
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new ResizeObserver((entries) => {
      const cr = entries[0]?.contentRect;
      if (cr) setSize({ width: cr.width, height: cr.height });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, size] as const;
}

/** Kartın DIŞINDA nokta ızgarası (sadece çerçeve çevresi, içe taşmaz) */
function FrameDotGridOutside({
  cardWidth,
  cardHeight,
  offset,        // overlay’in kart etrafına taşma payı
  rows = 2,
  stepX = 26,
  stepY = 26,
  insetStart = 12,
  rowGap = 12,
  color = "#FEF7CC",
  opacity = 0.16,
}: {
  cardWidth: number;
  cardHeight: number;
  offset: number;
  rows?: number;
  stepX?: number;
  stepY?: number;
  insetStart?: number;
  rowGap?: number;
  color?: string;
  opacity?: number;
}) {
  const dots: Array<{ cx: number; cy: number }> = [];
  const rowsCount = Math.max(2, rows);

  // Kartın kenarları (overlay koordinatlarında)
  const baseLeft = offset;
  const baseRight = offset + cardWidth;
  const baseTop = offset;
  const baseBottom = offset + cardHeight;

  for (let r = 0; r < rowsCount; r++) {
    const d = insetStart + r * rowGap; // kart dışına doğru mesafe
    const left = baseLeft - d;
    const right = baseRight + d;
    const top = baseTop - d;
    const bottom = baseBottom + d;

    // Üst / Alt kenarlar
    for (let x = left + 8; x <= right - 8; x += stepX) {
      dots.push({ cx: x, cy: top });
      dots.push({ cx: x, cy: bottom });
    }
    // Sol / Sağ kenarlar
    for (let y = top + 8; y <= bottom - 8; y += stepY) {
      dots.push({ cx: left, cy: y });
      dots.push({ cx: right, cy: y });
    }
  }

  return (
    <g aria-hidden>
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={2} fill={color} fillOpacity={opacity} />
      ))}
    </g>
  );
}

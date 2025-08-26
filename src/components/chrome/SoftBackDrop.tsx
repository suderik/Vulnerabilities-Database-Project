{/* ANALYTICS/FEATURES – grid arkaplan + metin hover */}
<section className="relative py-20">
  {/* grid background */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    {/* 1) temel grid */}
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage:
          `linear-gradient(to right, rgba(212,234,51,0.20) 1px, transparent 1px),
           linear-gradient(to bottom, rgba(212,234,51,0.20) 1px, transparent 1px)`,
        backgroundSize: "36px 36px, 36px 36px",
        backgroundPosition: "top center",
      }}
    />
    {/* 2) kenarlarda yumuşatma (mask) */}
    <div
      className="absolute inset-0"
      style={{
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 60%, transparent 95%)",
        maskImage:
          "radial-gradient(ellipse at center, black 60%, transparent 95%)",
        background:
          "radial-gradient(ellipse at center, rgba(212,234,51,0.08), transparent 65%)",
      }}
    />
  </div>

  {/* içeriğiniz */}
  <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
    {/* Solda chart / sağda metin (örnek) */}
    <div className="rounded-xl bg-white/10 h-[300px]"></div>

    <div className="flex items-center">
      <p className="
          text-[#FEF5BF] text-2xl leading-9 font-semibold
          transition-all duration-300 ease-out will-change-transform
          hover:scale-[1.02] hover:drop-shadow-[0_10px_24px_rgba(252,191,68,0.25)]
          motion-reduce:transition-none motion-reduce:hover:scale-100
        ">
        Gain a data-driven overview of reported vulnerabilities across platforms. Our
        interactive charts highlight frequency, severity, and evolving patterns…
      </p>
    </div>

    {/* Alttaki metin + karşı chart */}
    <div className="flex items-center order-2 lg:order-none">
      <p className="
          text-[#FEF5BF] text-2xl leading-9 font-semibold
          transition-all duration-300 ease-out will-change-transform
          hover:scale-[1.02] hover:drop-shadow-[0_10px_24px_rgba(252,191,68,0.25)]
          motion-reduce:transition-none motion-reduce:hover:scale-100
        ">
        Explore critical exposure metrics by platform and category. This view empowers
        security teams to pinpoint attack surfaces, prioritize high-risk areas…
      </p>
    </div>

    <div className="rounded-xl bg-white/10 h-[300px]"></div>
  </div>
</section>

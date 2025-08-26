"use client";

export default function PageChrome() {
  return (
    // Tüm sayfaya yayılan, etkileşimi kapalı dekor katmanı
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* 1) Tüm ekrana kare ızgara */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FCBF44 1px, transparent 1px),
            linear-gradient(to bottom, #FCBF44 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
          backgroundPosition: "center top",
        }}
      />

      {/* 2) Kenarlardaki “çerçeve” hissi (2 adet iç içe ring) */}
      <div className="absolute inset-6 rounded-[28px] ring-1 ring-[#FCBF44]/25" />
      <div className="absolute inset-12 rounded-[22px] ring-1 ring-[#FCBF44]/15" />

      {/* 3) Birkaç vurgu çizgisi (yanlarda ve bazı yataylarda) */}
      <div className="absolute left-24 top-0 bottom-0 w-px bg-[#FCBF44]/25" />
      <div className="absolute right-24 top-0 bottom-0 w-px bg-[#FCBF44]/25" />
      <div className="absolute top-28 left-0 right-0 h-px bg-[#FCBF44]/20" />
      <div className="absolute bottom-40 left-0 right-0 h-px bg-[#FCBF44]/10" />
    </div>
  );
}

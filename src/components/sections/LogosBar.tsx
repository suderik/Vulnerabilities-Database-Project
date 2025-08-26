import React from "react";

const ITEMS = Array.from({ length: 8 }).map((_, i) => ({
  name: "Write a Platform Name",
  img: "/logos/placeholder.png", 
  key: `logo-${i}`,
}));

export default function LogosBar() {
  const row = [...ITEMS, ...ITEMS]; // kesintisiz akış için iki kez

  return (
    <section className="logo-bar full-bleed">
      <div className="mx-auto w-full max-w-[1440px] px-[10px] h-full">
        {/* ⬇️ İKİ SATIR: dikey hizalı, aralarında küçük boşluk */}
        <div className="h-full flex flex-col justify-center gap-3">
          {/* Üst satır — daha yavaş */}
          <div className="logo-marquee">
            <div className="logo-track" style={{ ["--logo-speed" as any]: "120s" }}>
              {row.map((it, idx) => (
                <div className="logo-item" key={`r1-${it.key}-${idx}`}>
                  <span className="logo-img" style={{ backgroundImage: `url(${it.img})` }} aria-hidden />
                  <span className="logo-text font-josefin">{it.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alt satır — ters yönde ve biraz daha yavaş */}
          <div className="logo-marquee">
            <div className="logo-track reverse" style={{ ["--logo-speed" as any]: "120s" }}>
              {row.map((it, idx) => (
                <div className="logo-item" key={`r2-${it.key}-${idx}`}>
                  <span className="logo-img" style={{ backgroundImage: `url(${it.img})` }} aria-hidden />
                  <span className="logo-text font-josefin">{it.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import InfoCarousel from "@/components/blog/InfoCarousel";
import Card from "@/components/ui/card";
import DateDropdown from "@/components/vulnerabilities/DateDropdown";
import SubscribeCard from "@/components/blog/SubscribeCard";

type GridItem = {
  id: string;
  kind: "Playbook" | "Guide" | "News" | "Triage" | (string & {}); // Article tekil kalacaksa union bırakıyorum
  title: string;
  excerpt: string;
};

const carouselData = [
  { tag: "Playbook", title: "Exploit chains 101", body: "Zincir yapıları, primitifler ve pratik örneklerle kısa rehber." },
  { tag: "Guide", title: "Prioritize with EPSS", body: "EPSS, KEV ve vendor advisory’leri birleştirerek önceliklendirme." },
  { tag: "Playbook", title: "Weekly threat recap", body: "Son haftanın sömürülen zafiyetleri ve yama durumları." },
  { tag: "Guide", title: "From CWE → CVE map", body: 
    "Modern CWE kategorilerini pratik CVE’lerle eşleştiren referans.Modern CWE kategorilerini pratik CVE’lerle eşleştiren referans." },
  { tag: "Triage", title: "SSRF triage notes", body: "Bulut ortamı için SSRF triage ipuçları ve kontrol listeleri." },
  { tag: "News", title: "New KEV entries", body: "Yeni KEV girişleri, etki alanları ve kaynak linkleri." },
  { tag: "Guide", title: "CI/CD hardening", body: "İmzalı artefakt, bağımlılık sabitleme ve en iyi pratikler." },
  { tag: "Playbook", title: "Deserialization", body: "Serileştirme zafiyetlerinde avcılık ve önleme kalıpları." },
];

const gridItems: GridItem[] = [
  { id: "1", kind: "News", title: "MS hardening guide", excerpt: "Ortak yanlış yapılandırmalar ve hızlı düzeltmeler." },
  { id: "2", kind: "Guide", title: "Build exploit chains", excerpt: "Input-validation zincirlerinden RCE’ye örnekler." },
  { id: "3", kind: "Article", title: "CWE → CVE practical map", excerpt: "Modern SaaS senaryolarıyla ilişkilendirme." },
  { id: "4", kind: "Guide", title: "EPSS thresholds", excerpt: "CI/CD’de risk yakalama ve eşik ayarı, çözümleme." },
  { id: "5", kind: "Triage", title: "Cloud SSRF triage", excerpt: "Varlık keşfi ve kısıtlama stratejileri ve dahası." },
  { id: "6", kind: "News", title: "New KEV entries", excerpt: "Yeni kayıtların kısa özeti ve etkisi, devam." },
  { id: "7", kind: "Guide", title: "CI/CD hardening", excerpt: "İmzalı artefakt, SBOM ve pinned deps." },
  { id: "8", kind: "Playbook", title: "Deserialization payloads", excerpt: "Kalıplar, tespit ve avcılık notları." },
];

const filters = ["All", "Playbook", "Guide", "News", "Triage"] as const;
type Filter = typeof filters[number];

export default function BlogPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return gridItems;
    return gridItems.filter((g) => g.kind === filter);
  }, [filter]);

  return (
    <main className="px-6 md:px-10 lg:px-16 xl:px-24 py-10">
      {/* HERO – aynı kaldı */}
      <section className="relative overflow-hidden py-16 md:py-20 mb-6">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-[-35%] h-[120vh] w-[120vw] -translate-x-1/2
                       [transform:perspective(900px)_rotateX(58deg)]
                       [mask-image:radial-gradient(ellipse_at_center,black_22%,transparent_70%)]"
            style={{
              backgroundImage:
                `linear-gradient(to right, rgba(222, 234, 51, 0.08) 1.5px, transparent 1.5px),
                 linear-gradient(to bottom, rgba(212,234,51,0.08) 1.5px, transparent 1.5px)`,
              backgroundSize: "35px 35px, 35px 35px",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute left-1/2 top-0 h-[60vh] w-[70vw] -translate-x-1/2 blur-3xl"
            style={{ background: "radial-gradient(ellipse at center, rgba(212,234,51,0.12), transparent 70%)" }}
          />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full bg-[#D4EA33]/15 text-[#D4EA33] px-3 py-1 text-[13px] font-semibold border border-[#D4EA33]/30">
            Blog
          </span>

          <h1 className="mt-4 font-[550] font-josephin text-3xl sm:text-4xl md:text-5xl text-[#FCBF44] tracking-tight drop-shadow-[0_6px_0_rgba(0,0,0,0.75)]">
            Insights, deep dives, and updates on real-world vulnerabilities
          </h1>

          <p className="mt-4 text-[#FEF5BF] text-lg md:text-xl max-w-[65ch] mx-auto">
            Practical write-ups, engineering notes, and news from the Threx team — focused on how
            vulns behave in the wild and how to defend against them.
          </p>
        </div>
      </section>

      {/* FULL-WIDTH INFO CAROUSEL – aynı kaldı */}
      <InfoCarousel items={carouselData} />
      <br /><br /><br />
      {/* === BURADAN SONRASI ENTEGRE EDİLDİ === */}
      <section className="w-full py-8">
        {/* Başlık + filtre hizalı */}
        <div className="mx-auto max-w-[1400px] px-2 sm:px-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-alt font-[700] text-[28px] md:text-[30px] text-[#FEF7CC]">
              Workers &amp; Lorem Ipsum
            </h2>

            <DateDropdown
              label={filter}
              value={filter}
              onChange={(v) => setFilter(v as Filter)}
              options={filters.map((f) => ({ label: f, value: f }))}
              className="shrink-0"
            />
          </div>
        </div>

        {/* Kart grid (4 sütun, ortalı) */}
        <div className="mx-auto w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-10 place-items-stretch">
          {filtered.map((card) => (
            <Card
              key={card.id}
              as="article"
              orientation="vertical"
              title={card.kind}                      // küçük sarı label
              description={`${card.title} — ${card.excerpt}`} // başlık + kısa özet

              // imageUrl="/placeholders/card.png"
              className="border border-[var(--Main-default,#121A21)]"
            >
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#0E1E22] text-[#D4EA33] border border-[var(--Main-default,#D4EA33)] font-semibold px-4 py-1"
              >
                Read more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M13 5l7 7-7 7M20 12H4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Card>
          ))}
        </div>
        {/* Load more */}
        <div className="flex justify-center mt-10">
          <button className="inline-flex items-center gap-2 rounded-full border border-[#D4EA33] text-[#D4EA33] px-5 py-2 hover:bg-[#D4EA33]/10">
            Load More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M13 5l7 7-7 7M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <br /><br />
      </section>
      {/* SUBSCRIBE / NEWSLETTER */}
      <SubscribeCard />
      <br /><br />

    </main>
  );
}

// src/app/learn/resources/page.tsx
import Card from "@/components/ui/card";
import SearchBar from "./SearchBar";

function daysAgo(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

export default function ResourcesPage() {
  const items = [
    {
      type: "News",
      description:
        "CISA added three CVEs to the KEV catalog. See what’s being exploited in the wild and how to mitigate.",
      href: "#",
      addedAt: daysAgo(0),
      imageUrl: "/placeholders/news.png",
    },
    {
      type: "Video",
      description:
        "Deep-dive: How command injection chains are built in real-world breaches — 12-minute breakdown.",
      href: "#",
      addedAt: daysAgo(1),
      imageUrl: "/placeholders/video.png",
    },
    {
      type: "Article",
      description:
        "Deserialization risks in 2025: patterns, payloads, and defensive coding practices.",
      href: "#",
      addedAt: daysAgo(3),
      imageUrl: "/placeholders/article.png",
    },
    {
      type: "Guide",
      description:
        "Playbook: triaging newly published CVEs with EPSS + KEV + vendor advisories.",
      href: "#",
      addedAt: daysAgo(5),
      imageUrl: "/placeholders/guide.png",
    },
  ];
  // ↓ Recently Added sonrası için ekstra kartlar
  const moreItems = [
    {
      type: "News",
      description:
        "Microsoft hardening guide: common misconfig paths that lead to RCE in 2025 estates.",
      href: "#",
      imageUrl: "/placeholders/news.png",
    },
    {
      type: "Video",
      description:
        "Walkthrough: building exploit chains from simple input-validation gaps (9 min).",
      href: "#",
      imageUrl: "/placeholders/video.png",
    },
    {
      type: "Article",
      description:
        "A practical map of CWE → CVE ties you actually see in modern SaaS stacks.",
      href: "#",
      imageUrl: "/placeholders/article.png",
    },
    {
      type: "Guide",
      description:
        "Tuning EPSS thresholds for your CI/CD — catching risk without alert fatigue.",
      href: "#",
      imageUrl: "/placeholders/guide.png",
    },
    {
      type: "News",
      description:
        "Vendors shipped fixes for two widely exploited deserialization issues this week.",
      href: "#",
      imageUrl: "/placeholders/news.png",
    },
    {
      type: "Article",
      description:
        "Server-side request forgery: modern bypasses and how to close them cheaply.",
      href: "#",
      imageUrl: "/placeholders/article.png",
    },
    {
      type: "Guide",
      description:
        "Playbook: triage → reproduce → patch verification in under 30 minutes.",
      href: "#",
      imageUrl: "/placeholders/guide.png",
    },
    {
      type: "Video",
      description:
        "Hands-on: exploiting path traversal to code exec (demo lab).",
      href: "#",
      imageUrl: "/placeholders/video.png",
    },
    {
      type: "Article",
      description:
        "From ‘known exploited’ to backlog: what to do when KEV meets legacy.",
      href: "#",
      imageUrl: "/placeholders/article.png",
    },
    {
      type: "Video",
      description:
        "Hands-on: exploiting path traversal to code exec (demo lab).",
      href: "#",
      imageUrl: "/placeholders/video.png",
    },
    {
      type: "Article",
      description:
        "From ‘known exploited’ to backlog: what to do when KEV meets legacy.",
      href: "#",
      imageUrl: "/placeholders/article.png",
    },
    {
      type: "Video",
      description:
        "Hands-on: exploiting path traversal to code exec (demo lab).",
      href: "#",
      imageUrl: "/placeholders/video.png",
    },
    {
      type: "Article",
      description:
        "From ‘known exploited’ to backlog: what to do when KEV meets legacy.",
      href: "#",
      imageUrl: "/placeholders/article.png",
    },
    {
      type: "Video",
      description:
        "Hands-on: exploiting path traversal to code exec (demo lab).",
      href: "#",
      imageUrl: "/placeholders/video.png",
    },
    {
      type: "Article",
      description:
        "From ‘known exploited’ to backlog: what to do when KEV meets legacy.",
      href: "#",
      imageUrl: "/placeholders/article.png",
    },
    {
      type: "Video",
      description:
        "Hands-on: exploiting path traversal to code exec (demo lab).",
      href: "#",
      imageUrl: "/placeholders/video.png",
    },

  ];


  return (
    <main className="px-6 md:px-10 lg:px-16 xl:px-24 py-10">
      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-6">
        <div>
           <span className="inline-flex items-center rounded-full bg-[#D4EA33]/15 text-[#D4EA33] px-3 py-1 text-[13px] font-semibold border border-[#D4EA33]/30">
            Resources 
          </span>

          <h1
            className="mt-5 font-[530] font-josephin text-3xl sm:text-4xl md:text-5xl text-[#D4EA33] tracking-tight
                       drop-shadow-[0_4px_0_rgba(0,0,0,0.45)]"
          >
            Track, Understand and Learn
            <br />
            from Real Vulnerabilities
          </h1>
          <br />
          <p className="mt-4 text-[#FEF5BF] text-lg md:text-xl max-w-[60ch]">
            Curated resources: news, videos, and articles that explain
            vulnerabilities with practical, hands-on insight.
          </p>
        </div>

        {/* Görsel placeholder – resmi sen ekleyeceksin */}
         {/* Right – image placeholder (you’ll replace with an illustration) */}
        <div
          className="
            relative h-[240px] sm:h-[280px] md:h-[320px]
            rounded-2xl border border-white/10 bg-white/5 overflow-hidden
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            bg-[radial-gradient(#ffffff26_1px,transparent_1px)]
            [background-size:16px_16px]
          "
          aria-hidden="true"
        >
          <div className="absolute inset-0 grid place-items-center text-[#FEF5BF]/60 font-semibold">
            Image / Illustration
          </div>
        </div>
      </section>
      <br /><br /><br />

      {/* Recently Added */}
      <section>
        <h2 className="font-alt text-2xl md:text-3xl text-[#D4EA33] mb-6">
          Recently Added Entries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <Card
              key={i}
              as="article"
              orientation="horizontal"
              title={it.type}
              description={it.description}
              imageUrl={it.imageUrl}
              addedAt={it.addedAt}
              className="p-4 sm:p-4 border border-white/10 hover:border-white/20"
            >
              <a
                href={it.href}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#D4EA33] text-[#0E1E22] font-semibold px-4 py-1"
              >
                Read more
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="-mr-0.5"
                  aria-hidden="true"
                >
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
        <br /><br />
        <div className="mt-8 flex justify-center">
          <p
            className="text-center font-museo"
            style={{
              width: "min(1007px, 100%)",
              color: "var(--Text-400, #FEF7CC)",
              fontSize: "23.04px",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            Browse detailed CVE data and filter vulnerabilities by category, date, or affected
            system. Stay informed with our continuously updated list.
          </p>
        </div>
        <br />
        {/* Search */}

        <section className="mt-8 mb-10">
          <SearchBar />
        </section>
        {/* More resources (4 sütun, tam ortalı) */}
        <section className="mt-8">
          {/* Ortalamayı garantilemek için genişliği sınırlı dış konteyner */}
          <div className="mx-auto max-w-[1220px] px-2">
            <div
              className="
        grid justify-center
        gap-x-4 gap-y-12
        grid-cols-[repeat(1,280px)]
        sm:grid-cols-[repeat(2,280px)]
        lg:grid-cols-[repeat(3,280px)]
        xl:grid-cols-[repeat(4,280px)]
      "
            >
              {moreItems.map((it, i) => (
                <Card
                  key={`more-${i}`}
                  as="article"
                  orientation="vertical"
                  title={it.type}
                  description={it.description}
                  imageUrl={it.imageUrl}
                  className="
            w-[280px]
            border border-white/10 hover:border-[#FCBF44]
            transition-transform duration-350
            hover:-translate-y-1 hover:scale-[1.01]
          "
                >
                  <a
                    href={it.href}
                    className="mt-3 inline-block font-semibold text-[13px] text-[#D4EA33] hover:underline"
                  >
                    Read more →
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <div className="mt-8 flex justify-center">
          <p
            className="text-center font-museo"
            style={{
              width: "min(1007px, 100%)",
              color: "var(--Text-400, #FEF7CC)",
              fontSize: "23.04px",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            Browse detailed CVE data and filter vulnerabilities by category, date, or affected
            system. Stay informed with our continuously updated list.Browse detailed CVE data and filter vulnerabilities by category, date, or affected
            system. Stay informed with our continuously updated list.
          </p>
        </div>
        <br />
      </section>
      <br/><br />
    </main>
  );
}

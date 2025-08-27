// app/vulnerabilities/[cve]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { VULN_DETAILS } from "@/lib/vulnDetailsDemo";

export const dynamic = "force-dynamic"; // yeni rotayı development/build'ta güvenle yakala

export default function CVEDetailsPage({ params }: { params: { cve: string } }) {
  const key = params.cve.toLowerCase();
  const data = VULN_DETAILS[key];
  if (!data) return notFound();

  return (
    <main className="relative px-6 md:px-10 lg:px-16 xl:px-24 py-12">
      <div className="mx-auto w-full max-w-6xl">
        <header
          className="rounded-3xl px-6 md:px-10 py-8 md:py-12 mb-8"
          style={{
            background:"linear-gradient(180deg, rgba(20,55,64,.85) 0%, rgba(16,42,49,.85) 100%)",
            boxShadow:"0 12px 48px rgba(0,0,0,.25), inset 0 0 0 2px rgba(246,250,207,.14)",
          }}>
          <p className="uppercase tracking-widest text-sm" style={{color:"var(--Secondary-300,#D4EA33)"}}>Vulnerability</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-1" style={{color:"var(--Text-default,#FEF5BF)"}}>{data.cve}</h1>
          <p className="mt-3 text-base md:text-lg" style={{color:"var(--Text-subtle,#E7F291)"}}>{data.title}</p>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-extrabold mb-3" style={{color:"var(--Text-default,#FEF5BF)"}}>Overview</h2>
          <div className="rounded-3xl p-6" style={{
            background:"linear-gradient(180deg, rgba(24,34,43,.72) 0%, rgba(16,42,49,.72) 100%)",
            boxShadow:"0 10px 40px rgba(0,0,0,.22), inset 0 0 0 1px rgba(246,250,207,.10)",
          }}>
            <p style={{color:"var(--Text-subtle,#E7F291)"}}>{data.summary}</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-extrabold mb-3" style={{color:"var(--Text-default,#FEF5BF)"}}>Affected systems & versions</h2>
          <div className="rounded-3xl p-6" style={{
            background:"linear-gradient(180deg, rgba(24,34,43,.72) 0%, rgba(16,42,49,.72) 100%)",
            boxShadow:"0 10px 40px rgba(0,0,0,.22), inset 0 0 0 1px rgba(246,250,207,.10)",
          }}>
            <ul className="space-y-2">
              {data.affected.map((a, i) => (
                <li key={i} style={{color:"var(--Text-subtle,#E7F291)"}}>
                  <b>{a.platform}</b> — {a.versions.join(", ")}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-extrabold mb-3" style={{color:"var(--Text-default,#FEF5BF)"}}>Remediation</h2>
          <div className="rounded-3xl p-6" style={{
            background:"linear-gradient(180deg, rgba(24,34,43,.72) 0%, rgba(16,42,49,.72) 100%)",
            boxShadow:"0 10px 40px rgba(0,0,0,.22), inset 0 0 0 1px rgba(246,250,207,.10)",
          }}>
            <ul className="list-disc pl-5 space-y-2" style={{color:"var(--Text-subtle,#E7F291)"}}>
              {data.remediation.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold mb-3" style={{color:"var(--Text-default,#FEF5BF)"}}>References</h2>
          <div className="rounded-3xl p-6" style={{
            background:"linear-gradient(180deg, rgba(24,34,43,.72) 0%, rgba(16,42,49,.72) 100%)",
            boxShadow:"0 10px 40px rgba(0,0,0,.22), inset 0 0 0 1px rgba(246,250,207,.10)",
          }}>
            <ul className="space-y-2">
              {data.references.map((ref, i) => (
                <li key={i}>
                  <a className="underline underline-offset-4 hover:opacity-90"
                     style={{color:"var(--Secondary-300,#D4EA33)"}} href={ref.url} target="_blank" rel="noreferrer">
                    {ref.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Link href="/vulnerabilities"
              className="inline-flex items-center gap-2 rounded-[28px] px-5 h-[47px] font-semibold"
              style={{background:"var(--Secondary-300,#D4EA33)",color:"var(--Neutrals-800,#18222B)"}}>
          ← Back to list
        </Link>
      </div>
    </main>
  );
}

import Link from "next/link";
import DinoRunner from "@/components/fun/DinoRunner";

export default function NotFound() {
  return (
    <main className="px-6 md:px-10 lg:px-16 xl:px-24 py-12">
      <section className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-[#D4EA33]/15 text-[#D4EA33] px-3 py-1 text-[13px] font-semibold border border-[#D4EA33]/30">
            404 — Page not found
          </span>

          <h1 className="mt-4 font-[600] font-museo text-3xl sm:text-4xl md:text-5xl text-[#FCBF44] tracking-tight drop-shadow-[0_4px_0_rgba(0,0,0,0.35)]">
            Lost in the desert…
          </h1>

          <p className="mt-3 text-[#FEF5BF] font-[500] text-lg">
            While you’re here, dodge some cacti and then head back home.
          </p>
        </div>

        <div className="mt-8">
          <DinoRunner height={240} />
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4EA33] text-[#0E1E22] font-semibold px-5 py-2"
          >
            Go Home
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M13 5l7 7-7 7M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}

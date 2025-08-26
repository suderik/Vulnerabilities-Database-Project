"use client";

import Link from "next/link";
import DinoRunner from "@/components/fun/DinoRunner";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="px-6 md:px-10 lg:px-16 xl:px-24 py-12">
          <section className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full bg-[#D4EA33]/15 text-[#D4EA33] px-3 py-1 text-[13px] font-semibold border border-[#D4EA33]/30">
                Something went wrong
              </span>

              <h1 className="mt-4 font-[600] font-josephin text-3xl sm:text-4xl md:text-5xl text-[#D4EA33] tracking-tight drop-shadow-[0_4px_0_rgba(0,0,0,0.35)]">
                Take a breather, then try again
              </h1>

              <p className="mt-3 text-[#FEF5BF] text-lg">
                We logged the error. You can try to recover or go home.
              </p>
            </div>

            <div className="mt-8">
              <DinoRunner height={240} />
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-full bg-[#D4EA33] text-[#0E1E22] font-semibold px-5 py-2"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4EA33] text-[#D4EA33] px-5 py-2 hover:bg-[#D4EA33]/10"
              >
                Go Home
              </Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
